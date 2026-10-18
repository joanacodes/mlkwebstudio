// Blog covers: node tools/covers/render.js [key ...]
// Renders one 1600×900 cover per article and language, with the article's title on it:
// static/images/blog/<key>.jpg (English, or the only language) and static/images/blog/fr/<key>.jpg (French).
// The title is the front matter's cover_title if there is one, otherwise its title.
// Each entry of covers.json: { "key": "...", "category": "seo", "label": "Short label", "motif": "dns" }, plus "label_fr" when the French label differs.
// Motifs: glass dns inbox chart browser versus flow orbit map shield terminal megaphone feed calendar search blueprint.
// Needs Playwright with Chromium: npm i -D playwright && npx playwright install chromium
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node-tools/node_modules/playwright')); }
const fs = require('fs'); const path = require('path');
const root = path.join(__dirname, '..', '..');

function frontTitle(lang, key) {
  const p = path.join(root, 'content', lang, 'blog', key + '.md');
  if (!fs.existsSync(p)) return null;
  const fm = (fs.readFileSync(p, 'utf8').match(/^---\n([\s\S]*?)\n---/) || [])[1] || '';
  const field = name => { const m = fm.match(new RegExp('^' + name + ': "(.*)"$', 'm')); return m ? m[1].replace(/\\"/g, '"') : null; };
  return field('cover_title') || field('title');
}

(async () => {
  const only = process.argv.slice(2);
  const list = JSON.parse(fs.readFileSync(path.join(__dirname, 'covers.json'), 'utf8')).filter(c => !only.length || only.includes(c.key));
  const out = path.join(root, 'static', 'images', 'blog');
  fs.mkdirSync(path.join(out, 'fr'), { recursive: true });
  const jobs = [];
  for (const c of list) {
    const en = frontTitle('en', c.key), fr = frontTitle('fr', c.key);
    if (en) jobs.push({ c: { ...c, title: en, lang: 'en' }, file: path.join(out, c.key + '.jpg') });
    if (fr) jobs.push({ c: { ...c, label: c.label_fr || c.label, title: fr, lang: 'fr' }, file: path.join(out, en ? 'fr' : '', c.key + '.jpg') });
    if (!en && !fr) jobs.push({ c, file: path.join(out, c.key + '.jpg') });
  }
  const b = await chromium.launch({ args: ['--allow-file-access-from-files', '--font-render-hinting=none'] });
  const p = await b.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
  const base = 'file://' + path.join(__dirname, 'cover.html');
  for (const { c, file } of jobs) {
    await p.goto(base + '?k=' + encodeURIComponent(c.key + '-' + (c.lang || '')) + '#' + encodeURIComponent(JSON.stringify(c)));
    await p.waitForSelector('body[data-ready="1"]');
    await p.evaluate(async () => { await document.fonts.ready; const imgs = [...document.querySelectorAll('.photo,.reed')].map(el => getComputedStyle(el).backgroundImage.slice(5, -2)); await Promise.all(imgs.map(src => new Promise(r => { const i = new Image(); i.onload = r; i.onerror = r; i.src = src; }))); });
    await p.waitForTimeout(120);
    await p.screenshot({ path: file, type: 'jpeg', quality: 80 });
  }
  await b.close();
  console.log('rendered', jobs.length, 'covers into', out);
})();
