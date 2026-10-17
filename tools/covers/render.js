// Blog covers: node tools/covers/render.js [key ...]
// Renders static/images/blog/<key>.jpg (1600×900) for every entry of covers.json (or only the keys given).
// Each entry: { "key": "...", "category": "seo", "label": "Short label", "motif": "dns" }.
// Motifs: glass dns inbox chart browser versus flow orbit map shield terminal megaphone feed calendar search blueprint.
// Needs Playwright with Chromium: npm i -D playwright && npx playwright install chromium
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = require('/opt/node-tools/node_modules/playwright')); }
const fs = require('fs'); const path = require('path');
(async () => {
  const only = process.argv.slice(2);
  const list = JSON.parse(fs.readFileSync(path.join(__dirname, 'covers.json'), 'utf8')).filter(c => !only.length || only.includes(c.key));
  const out = path.join(__dirname, '..', '..', 'static', 'images', 'blog');
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ args: ['--allow-file-access-from-files', '--font-render-hinting=none'] });
  const p = await b.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1 });
  const base = 'file://' + path.join(__dirname, 'cover.html');
  for (const c of list) {
    await p.goto(base + '?k=' + encodeURIComponent(c.key) + '#' + encodeURIComponent(JSON.stringify(c)));
    await p.waitForSelector('body[data-ready="1"]');
    await p.evaluate(async () => { await document.fonts.ready; const imgs = [...document.querySelectorAll('.photo,.reed')].map(el => getComputedStyle(el).backgroundImage.slice(5, -2)); await Promise.all(imgs.map(src => new Promise(r => { const i = new Image(); i.onload = r; i.onerror = r; i.src = src; }))); });
    await p.waitForTimeout(120);
    await p.screenshot({ path: path.join(out, c.key + '.jpg'), type: 'jpeg', quality: 80 });
  }
  await b.close();
  console.log('rendered', list.length, 'covers into', out);
})();
