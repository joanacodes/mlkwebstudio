# MLK Web Studio — portfolio (Hugo, EN + FR)

The portfolio of MLK Web Studio: websites, SEO and cold email. Same visual identity as MLK Leadhunters (graphite and ice, one blue, orange details, Instrument Sans, reeded-glass photos), with the MLK / Web Studio logo.

## Run it locally

    hugo server          # http://localhost:1313 (needs Hugo extended ≥ 0.147)

## Deploy to GitHub Pages

0. GitHub Pages needs a **public** repository (unless the account has GitHub Pro, Team or Enterprise). This repository is currently private: make it public in Settings → General → Danger Zone → Change visibility, as mlkleadhunters is.
1. Repository → Settings → Pages → Source: **GitHub Actions**. `.github/workflows/hugo.yml` builds and publishes on every push to `main`, always for `baseURL` in `hugo.toml` (`https://mlkwebstudio.fr/`).
2. Settings → Pages → **Custom domain**: `mlkwebstudio.fr`. GitHub Pages serves one domain per repository: `mlkwebstudio.fr` is currently set on the `mlkleadhunters-accountants-fr` repository, so remove it there first.
3. Merge into `main`: the workflow builds and publishes the site.

## Structure

- `content/en/…` and `content/fr/…` — same file names on both sides; that is how the EN/FR switch links the two versions.
- `content/*/projects/` — one file per project. Front matter: `client`, `sector`, `services` (keys: `website`, `seo`, `app`, `cold-email`, `social`), `website`, optional `image` (a 1600×1000 screenshot in `static/images/projects/`, shown in a browser frame), optional `highlight` (a short result shown on the card and the page), `lead`, `weight` (order). Without `image`, the card uses one of the studio's glass photos (`photo`, `photo_pos`, `photo_size`). The home page shows the first six projects.
- `content/*/services/` — one page per service (`websites`, `seo`, `cold-emailing`). `service_key` lists the projects that used the service at the bottom of the page. `leadhunters: true` on the cold email page adds the MLK Leadhunters highlight and buttons.
- `hugo.toml` — languages, menus, email, and `leadhuntersUrl` per language (English → https://mlkleadhunters.com/, French → https://mlkleadhunters.com/fr/).
- `layouts/` — templates; `assets/css/main.css` the whole design; `assets/js/main.js` the animations, the menu, the preloader and the projects filter.

## Links to MLK Leadhunters

Cold email is presented on the home page, on the cold email service page and on every project that includes cold email, with a button to MLK Leadhunters in the visitor's language (`layouts/partials/leadhunters.html`).

## Metadata

As on MLK Leadhunters (`layouts/partials/head.html`): `seo_title` + " — MLK Web Studio", `description` on every page, canonical, `hreflang` EN/FR + `x-default`, robots (`noindex` on the thank-you pages, which are out of the sitemap), Open Graph and Twitter cards with 1200×630 share images (from the project screenshot when there is one), schema.org JSON-LD (Organization with MLK Leadhunters as a sub-organization, WebSite, WebPage, breadcrumbs, Service on service pages, Article on projects), favicons, web manifest, `robots.txt` and sitemaps.

## Before going live

- [ ] **Email**: the site uses `contact@mlkwebstudio.fr` (footer, contact form, legal notice). Create it, then send one test message from each language's contact page and click FormSubmit's activation link.
- [ ] **Legal notice**: complete the company name, legal form, registration number and address in `content/*/legal.md`.
- [ ] **Repository and domain**: make the repository public, set Pages to GitHub Actions, move `mlkwebstudio.fr` from `mlkleadhunters-accountants-fr` to this repository (see Deploy).
- [ ] **Screenshots**: Eden Flats, Ginov and 110% Intérieur have no screenshot yet. Add `static/images/projects/<slug>.jpg` (1600×1000) and `image:` in both languages.
- [ ] **Pilotech**: the portal and unified site are described as built and ready to go live; update the text and add `website:` once they are on pilotech.eu.
