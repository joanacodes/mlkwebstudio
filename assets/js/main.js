(function () {
  var root = document.documentElement;
  root.classList.remove('no-js');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var session = { get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} } };
  function headerH() { var h = document.getElementById('header'); return h ? h.offsetHeight : 72; }
  function update() {
    var header = document.getElementById('header');
    var dock = document.getElementById('dock');
    var hero = document.querySelector('.glass--hero');
    var anchor = hero || document.querySelector('.page-head');
    var hh = headerH();
    if (header && hero) { header.classList.toggle('header--over-dark', hero.getBoundingClientRect().bottom > hh); }
    if (dock) { var past = anchor ? (anchor.getBoundingClientRect().bottom < hh) : ((window.scrollY || window.pageYOffset) > 320); dock.classList.toggle('is-visible', past); document.body.classList.toggle('dock-on', past); }
  }

  function init() {
    // Preloader: once per session, about 3 s. Its timeline is CSS (so a slow first paint never cuts it short). When its
    // "pl-land" animation starts, the logo slides and scales onto the header logo while the glass clears, then the
    // real header logo takes over. If this script runs late, it catches up from wherever the CSS timeline is.
    var pre = document.getElementById('preloader');
    var root = document.documentElement;
    var preStarted = function (el, name) {
      try { var a = el.getAnimations().filter(function (x) { return x.animationName === name; })[0]; if (a) { return a.effect.getComputedTiming().progress !== null; } } catch (e) {}
      return false;
    };
    if (pre) {
      if (session.get('mlk-preloaded') || reduce) { pre.classList.add('is-done'); root.classList.remove('pl-playing'); }
      else {
        session.set('mlk-preloaded', '1');
        var mark = pre.querySelector('.preloader__mark');
        var preOver = false, landing = false;
        var preDone = function () { if (preOver) { return; } preOver = true; pre.classList.add('is-done'); root.classList.remove('pl-playing'); };
        var land = function () {
          if (landing || preOver) { return; }
          landing = true;
          pre.classList.add('is-landing');
          var logo = document.querySelector('#header .wordmark');
          var a = mark && mark.getBoundingClientRect(), b = logo && logo.getBoundingClientRect();
          if (a && b && a.width && b.width) {
            var s = b.width / a.width;
            var dx = (b.left + b.width / 2) - (a.left + a.width / 2), dy = (b.top + b.height / 2) - (a.top + a.height / 2);
            mark.style.color = getComputedStyle(logo).color;
            mark.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) scale(' + s + ')';
          }
          // hand over to the header logo when the slide ends (timer as a safety net)
          mark.addEventListener('transitionend', function (e) { if (e.target === mark && e.propertyName === 'transform') { preDone(); } });
          setTimeout(preDone, 1000);
          // a resize or rotation mid-slide would leave the target stale: finish at once
          var w0 = window.innerWidth, h0 = window.innerHeight;
          var onViewport = function () { if (Math.abs(window.innerWidth - w0) > 1 || Math.abs(window.innerHeight - h0) > 80) { preDone(); } };
          window.addEventListener('resize', onViewport);
          window.addEventListener('orientationchange', preDone);
        };
        pre.addEventListener('animationstart', function (e) { if (e.target === pre && e.animationName === 'pl-land') { land(); } });
        pre.addEventListener('animationend', function (e) { if (e.target === pre && e.animationName === 'pl-hide') { preDone(); } });
        if (preStarted(pre, 'pl-land')) {
          // late script: slide if the logo is still on screen, otherwise let the no-JS fade finish
          if (mark && !preStarted(mark, 'pl-mark-out')) { land(); }
          else if (preStarted(pre, 'pl-hide')) { preDone(); }
        }
        setTimeout(preDone, 6000);
      }
    }

    // Page entrance
    var page = document.querySelector('.page');
    if (page && !reduce) {
      page.classList.add('is-entering');
      requestAnimationFrame(function () { requestAnimationFrame(function () { page.classList.remove('is-entering'); }); });
    }

    // Hero entrance
    var glass = document.querySelector('.glass--hero');
    if (glass) {
      var ready = function () { glass.classList.add('is-ready'); };
      if (reduce) { ready(); }
      else if (pre && !pre.classList.contains('is-done')) {
        // enter as the logo starts sliding to the header (at once if it already has)
        if (pre.classList.contains('is-landing') || preStarted(pre, 'pl-land')) { ready(); }
        else { pre.addEventListener('animationstart', function (e) { if (e.target === pre && e.animationName === 'pl-land') { ready(); } }); setTimeout(ready, 6000); }
      }
      else { setTimeout(ready, 80); }
    }

    // Header glass state + bottom dock, driven by scroll (listener registered once, elements looked up each time)
    if (document.getElementById('dock')) { document.body.classList.add('dock-space'); } else { document.body.classList.remove('dock-space'); }
    if (!window.__mlkScroll) {
      window.__mlkScroll = true;
      var ticking = false;
      var onScroll = function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { update(); ticking = false; }); } };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll);
    }
    update();

    // Subtitles and blocks reveal on scroll
    var targets = document.querySelectorAll('.section-head, .reveal');
    if ('IntersectionObserver' in window && !reduce) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
      }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
      targets.forEach(function (t) { io.observe(t); });
    } else { targets.forEach(function (t) { t.classList.add('is-in'); }); }

    // Counting numbers
    var counters = document.querySelectorAll('[data-count]');
    var runCount = function (el) {
      var text = el.textContent;
      var m = text.match(/(\d[\d\s\u00a0\u202f]*)([.,]\d+)?/);
      if (!m) { return; }
      var intPart = parseInt(m[1].replace(/[\s\u00a0\u202f]/g, ''), 10);
      var decStr = m[2] || '';
      var decimals = decStr ? decStr.length - 1 : 0;
      var target = parseFloat(intPart + (decStr ? decStr.replace(',', '.') : ''));
      var sep = decStr ? decStr.charAt(0) : '';
      var before = text.slice(0, m.index), after = text.slice(m.index + m[0].length);
      var start = null, dur = 1200;
      var fmt = function (v) { var f = v.toFixed(decimals); return decimals ? f.replace('.', sep) : f; };
      var step = function (ts) {
        if (!start) { start = ts; }
        var t = Math.min(1, (ts - start) / dur); var e = 1 - Math.pow(1 - t, 3);
        el.textContent = before + fmt(target * e) + after;
        if (t < 1) { requestAnimationFrame(step); } else { el.textContent = text; }
      };
      requestAnimationFrame(step);
    };
    if (counters.length) {
      if ('IntersectionObserver' in window && !reduce) {
        var co = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) { runCount(e.target); co.unobserve(e.target); } });
        }, { threshold: 0.4 });
        counters.forEach(function (c) { co.observe(c); });
      }
    }

    // Projects page: filter by service
    var filters = document.querySelector('[data-filters]');
    if (filters) {
      filters.addEventListener('click', function (e) {
        var b = e.target.closest('[data-filter]'); if (!b) { return; }
        var f = b.getAttribute('data-filter');
        filters.querySelectorAll('[data-filter]').forEach(function (x) { var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        document.querySelectorAll('[data-card]').forEach(function (c) {
          var card = c.querySelector('[data-services]'); var list = card ? card.getAttribute('data-services').split(' ') : [];
          var show = f === 'all' || list.indexOf(f) !== -1;
          c.hidden = !show; if (show) { c.classList.add('is-in'); }
        });
      });
    }

    // Contents box: open on desktop, collapsed on phones
    var toc = document.querySelector('[data-toc]');
    if (toc) { var wide = window.matchMedia('(min-width: 1000px)'); var sync = function () { toc.open = wide.matches; }; sync(); if (wide.addEventListener) { wide.addEventListener('change', sync); } }

    // ---------- Blog ----------
    // Search: loads /blog/search.json on first use, ranks by title, keywords, headings, description
    var bs = document.querySelector('[data-search]');
    if (bs) {
      var input = bs.querySelector('.bsearch__input'), list = bs.querySelector('.bsearch__results'), status = bs.querySelector('.bsearch__status');
      var index = null, loading = null, sel = -1;
      var norm = function (t) { return (t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); };
      var esc = function (t) { return (t || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
      var load = function () {
        if (!loading) {
          loading = fetch(bs.getAttribute('data-search')).then(function (r) { return r.json(); }).then(function (d) {
            index = d.map(function (x) { return { x: x, t: norm(x.t), k: norm(x.k), h: norm(x.h), d: norm(x.d), c: norm(x.c) }; });
          }).catch(function () { index = []; });
        }
        return loading;
      };
      var mark = function (text, words) {
        var out = esc(text);
        words.forEach(function (w) { if (w.length < 2) { return; } var re = new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'); out = out.replace(re, '<mark>$1</mark>'); });
        return out;
      };
      var run = function () {
        var q = norm(input.value).trim();
        sel = -1;
        if (!q) { list.hidden = true; list.innerHTML = ''; status.textContent = ''; return; }
        load().then(function () {
          var words = q.split(/\s+/).filter(Boolean);
          var res = [];
          index.forEach(function (e) {
            var score = 0, all = true;
            words.forEach(function (w) {
              var s = 0;
              if (e.t.indexOf(w) !== -1) { s += 10; if (e.t.indexOf(w) === 0 || e.t.indexOf(' ' + w) !== -1) { s += 4; } }
              if (e.k.indexOf(w) !== -1) { s += 6; }
              if (e.c.indexOf(w) !== -1) { s += 4; }
              if (e.h.indexOf(w) !== -1) { s += 3; }
              if (e.d.indexOf(w) !== -1) { s += 2; }
              if (!s) { all = false; }
              score += s;
            });
            if (all && score) { res.push({ e: e.x, s: score }); }
          });
          res.sort(function (a, b) { return b.s - a.s; });
          res = res.slice(0, 12);
          var raw = input.value.trim().split(/\s+/);
          list.innerHTML = res.map(function (r) {
            return '<li><a href="' + r.e.u + '"><span class="r-meta">' + esc(r.e.c) + (r.e.y ? ' · ' + esc(r.e.y) : '') + '</span><span class="r-title">' + mark(r.e.t, raw) + '</span><span class="r-desc">' + mark(r.e.d, raw) + '</span></a></li>';
          }).join('');
          list.hidden = !res.length;
          status.textContent = res.length ? (res.length === 1 ? status.getAttribute('data-one') : status.getAttribute('data-many').replace('#', res.length)) : status.getAttribute('data-empty');
        });
      };
      var t = null;
      input.addEventListener('focus', load);
      input.addEventListener('input', function () { clearTimeout(t); t = setTimeout(run, 90); });
      input.addEventListener('keydown', function (e) {
        var items = list.querySelectorAll('a');
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          if (!items.length) { return; }
          e.preventDefault();
          sel = e.key === 'ArrowDown' ? Math.min(items.length - 1, sel + 1) : Math.max(0, sel - 1);
          items.forEach(function (a, i) { a.classList.toggle('is-sel', i === sel); });
          items[sel].scrollIntoView({ block: 'nearest' });
        } else if (e.key === 'Enter') {
          if (items.length) { e.preventDefault(); location.href = (items[sel >= 0 ? sel : 0]).href; }
        } else if (e.key === 'Escape') { input.value = ''; run(); }
      });
      if (!window.__mlkSlash) {
        window.__mlkSlash = true;
        document.addEventListener('keydown', function (e) {
          var f = document.querySelector('.bsearch__input');
          if (e.key === '/' && f && document.activeElement !== f && !/input|textarea|select/i.test((document.activeElement || {}).tagName || '')) { e.preventDefault(); f.focus(); }
        });
      }
    }

    // "Latest" slideshow: autoplay (paused on hover, focus, hidden tab, reduced motion), arrows, dots, swipe
    var sw = document.querySelector('[data-slides]');
    if (sw) {
      var slides = sw.querySelectorAll('[data-slide]'), dots = sw.querySelectorAll('[data-go]');
      var cur = 0, timer = null, ms = 6500, paused = reduce, hover = false;
      sw.style.setProperty('--slide-ms', ms + 'ms');
      if (paused) { sw.classList.add('is-paused'); }
      var show = function (n) {
        if (!slides.length) { return; }
        cur = (n + slides.length) % slides.length;
        slides.forEach(function (s, i) {
          var on = i === cur; s.classList.toggle('is-active', on);
          if (on) { s.removeAttribute('aria-hidden'); } else { s.setAttribute('aria-hidden', 'true'); }
          var a = s.querySelector('a'); if (a) { if (on) { a.removeAttribute('tabindex'); } else { a.setAttribute('tabindex', '-1'); } }
        });
        dots.forEach(function (d, i) {
          d.classList.toggle('is-active', i === cur);
          if (i === cur) { d.setAttribute('aria-current', 'true'); var bar = d.querySelector('span'); if (bar) { bar.style.animation = 'none'; void bar.offsetWidth; bar.style.animation = ''; } } else { d.removeAttribute('aria-current'); }
        });
        schedule();
      };
      var schedule = function () { clearTimeout(timer); if (!paused && !hover && slides.length > 1) { timer = setTimeout(function () { show(cur + 1); }, ms); } };
      var setPaused = function (p) {
        paused = p; sw.classList.toggle('is-paused', p);
        var b = sw.querySelector('[data-pause]'); if (b) { b.setAttribute('aria-label', b.getAttribute(p ? 'data-label-play' : 'data-label-pause')); }
        schedule();
      };
      var prev = sw.querySelector('[data-prev]'), next = sw.querySelector('[data-next]'), pb = sw.querySelector('[data-pause]');
      if (prev) { prev.addEventListener('click', function () { show(cur - 1); }); }
      if (next) { next.addEventListener('click', function () { show(cur + 1); }); }
      if (pb) { pb.addEventListener('click', function () { setPaused(!paused); }); }
      dots.forEach(function (d) { d.addEventListener('click', function () { show(parseInt(d.getAttribute('data-go'), 10)); }); });
      sw.addEventListener('mouseenter', function () { hover = true; sw.classList.add('is-paused'); clearTimeout(timer); });
      sw.addEventListener('mouseleave', function () { hover = false; if (!paused) { sw.classList.remove('is-paused'); } schedule(); });
      sw.addEventListener('focusin', function () { hover = true; sw.classList.add('is-paused'); clearTimeout(timer); });
      sw.addEventListener('focusout', function () { hover = false; if (!paused) { sw.classList.remove('is-paused'); } schedule(); });
      document.addEventListener('visibilitychange', function () { if (document.hidden) { clearTimeout(timer); } else { schedule(); } });
      var x0 = null;
      sw.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      sw.addEventListener('touchend', function (e) { if (x0 === null) { return; } var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { show(cur + (dx < 0 ? 1 : -1)); } x0 = null; }, { passive: true });
      sw.addEventListener('keydown', function (e) { if (e.key === 'ArrowLeft') { show(cur - 1); } else if (e.key === 'ArrowRight') { show(cur + 1); } });
      schedule();
    }

    // Category page: filter by article type
    var tf = document.querySelector('[data-tfilters]');
    if (tf) {
      tf.addEventListener('click', function (e) {
        var b = e.target.closest('[data-tfilter]'); if (!b) { return; }
        var f = b.getAttribute('data-tfilter');
        tf.querySelectorAll('[data-tfilter]').forEach(function (x) { var on = x === b; x.classList.toggle('is-active', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
        document.querySelectorAll('[data-tgrid] .pcard').forEach(function (c) { c.hidden = !(f === 'all' || c.getAttribute('data-type') === f); });
      });
    }

    // Article: folder with the anchors on phones
    var tocf = document.querySelector('[data-tocf]');
    if (tocf) {
      var tbtn = tocf.querySelector('[data-tocf-toggle]');
      var setF = function (on) { document.body.classList.toggle('tocf-open', on); tbtn.setAttribute('aria-expanded', on ? 'true' : 'false'); };
      tbtn.addEventListener('click', function () { setF(!document.body.classList.contains('tocf-open')); });
      var tclose = tocf.querySelector('[data-tocf-close]'); if (tclose) { tclose.addEventListener('click', function () { setF(false); tbtn.focus(); }); }
      tocf.querySelectorAll('.toc a').forEach(function (a) { a.addEventListener('click', function () { setF(false); }); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('tocf-open')) { setF(false); tbtn.focus(); } });
      document.addEventListener('click', function (e) { if (document.body.classList.contains('tocf-open') && !tocf.contains(e.target)) { setF(false); } });
    }

    // Article: highlight the current section in the anchors (sidebar and folder)
    var heads = document.querySelectorAll('.post-prose h2[id], #faq');
    if (heads.length && 'IntersectionObserver' in window) {
      var links = document.querySelectorAll('.toc a[href^="#"]');
      var setActive = function (id) { links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + id); }); };
      var vis = {};
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { vis[e.target.id] = e.isIntersecting ? e.boundingClientRect.top : null; });
        var best = null, bestTop = Infinity;
        heads.forEach(function (h) { var r = h.getBoundingClientRect().top; if (r < window.innerHeight * 0.35 && (best === null || r > bestTop || bestTop === Infinity)) { best = h.id; bestTop = r; } });
        if (best) { setActive(best); }
      }, { rootMargin: '0px 0px -60% 0px', threshold: [0, 1] });
      heads.forEach(function (h) { so.observe(h); });
    }

    // Newsletter: confirmation after FormSubmit sends people back with ?subscribed=1
    if (/[?&]subscribed=1/.test(location.search)) {
      var nl = document.querySelector('.nl');
      if (nl) { var ok = document.createElement('p'); ok.className = 'nl__lead'; ok.style.color = 'var(--accent-ink)'; ok.textContent = document.documentElement.lang === 'fr' ? 'Inscription enregistrée. Merci.' : 'You are subscribed. Thank you.'; nl.insertBefore(ok, nl.querySelector('.nl__lead')); }
    }

    // Mobile menu
    var burger = document.querySelector('.nav__burger');
    var menu = document.getElementById('menu');
    if (burger && menu) {
      var closeBtn = menu.querySelector('.menu__close');
      var open = function (state) {
        menu.classList.toggle('is-open', state);
        burger.setAttribute('aria-expanded', state ? 'true' : 'false');
        document.body.style.overflow = state ? 'hidden' : '';
        if (state && closeBtn) { closeBtn.focus(); } else { burger.focus(); }
      };
      burger.addEventListener('click', function () { open(!menu.classList.contains('is-open')); });
      if (closeBtn) { closeBtn.addEventListener('click', function () { open(false); }); }
      menu.addEventListener('click', function (e) { var a = e.target.closest('a'); if (a && a.hash && a.pathname === location.pathname && a.search === location.search) { open(false); } });
      if (!window.__mlkKeys) { window.__mlkKeys = true; document.addEventListener('keydown', function (e) { var m = document.getElementById('menu'); if (e.key === 'Escape' && m && m.classList.contains('is-open')) { m.classList.remove('is-open'); document.body.style.overflow = ''; var b = document.querySelector('.nav__burger'); if (b) { b.setAttribute('aria-expanded', 'false'); } } }); }
    }

    // Language prompt: browser language vs page language, once
    var lp = document.getElementById('langprompt');
    if (lp && !store.get('mlk-lang-choice')) {
      var pageLang = lp.getAttribute('data-page-lang');
      var langs = navigator.languages || [navigator.language || ''];
      var wantsFr = langs.some(function (l) { return (l || '').toLowerCase().indexOf('fr') === 0; });
      var mismatch = (pageLang === 'en' && wantsFr) || (pageLang === 'fr' && !wantsFr);
      if (mismatch) {
        setTimeout(function () { lp.hidden = false; requestAnimationFrame(function () { lp.classList.add('is-visible'); }); }, 1600);
        lp.querySelector('.langprompt__close').addEventListener('click', function () { store.set('mlk-lang-choice', pageLang); lp.classList.remove('is-visible'); setTimeout(function () { lp.hidden = true; }, 450); });
        lp.querySelector('.langprompt__go').addEventListener('click', function () { store.set('mlk-lang-choice', lp.getAttribute('data-other')); });
      }
    }
    document.querySelectorAll('.lang a').forEach(function (a) { a.addEventListener('click', function () { store.set('mlk-lang-choice', a.getAttribute('lang')); }); });

    // Leaving a page: no fade, so the back gesture shows and restores the page as it was (a faded page came back blank).
    // A menu link still lights up when tapped, while the next page loads. (Registered once.)
    if (!window.__mlkExit) {
      window.__mlkExit = true;
      document.addEventListener('click', function (e) {
        var a = e.target.closest('.menu__links a');
        if (a && !e.defaultPrevented && !(a.hash && a.pathname === location.pathname)) { a.classList.add('is-going'); }
      });
      // a page restored by the back or forward gesture comes back as it was left: close what was open
      window.addEventListener('pageshow', function (e) {
        if (!e.persisted) { return; }
        document.querySelectorAll('.is-going').forEach(function (a) { a.classList.remove('is-going'); });
        document.body.classList.remove('tocf-open');
        var tb = document.querySelector('[data-tocf-toggle]'); if (tb) { tb.setAttribute('aria-expanded', 'false'); }
        var m = document.getElementById('menu');
        if (m && m.classList.contains('is-open')) { m.classList.remove('is-open'); document.body.style.overflow = ''; var b = document.querySelector('.nav__burger'); if (b) { b.setAttribute('aria-expanded', 'false'); } }
        update();
      });
    }
  }

  window.MLKInit = init;
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
