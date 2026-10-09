# MLK Web Studio — portfolio (Hugo, EN + FR)

The portfolio of MLK Web Studio: websites, SEO and cold email. Same visual identity as MLK Leadhunters (graphite and ice, one blue, orange details, Instrument Sans, reeded-glass photos), with the MLK / Web Studio logo.

## Run it locally

    hugo server          # http://localhost:1313 (needs Hugo extended ≥ 0.147)

## Deploy to GitHub Pages

The site lives on **https://mlkwebstudio.com/** (English) and **https://mlkwebstudio.com/fr/** (French).

1. Repository → Settings → Pages → Source: **GitHub Actions**. `.github/workflows/hugo.yml` builds and publishes on every push to `main`, always for `baseURL` in `hugo.toml` (`https://mlkwebstudio.com/`).
2. DNS for `mlkwebstudio.com`, at the company that manages the domain's DNS. Delete any other `A`, `AAAA`, `ALIAS` or forwarding on `@` and `www` (parking page, registrar redirect); keep the `MX` and `TXT` records used for email.

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | AAAA | @ | 2606:50c0:8000::153 |
   | AAAA | @ | 2606:50c0:8001::153 |
   | AAAA | @ | 2606:50c0:8002::153 |
   | AAAA | @ | 2606:50c0:8003::153 |
   | CNAME | www | joanacodes.github.io. |

3. Settings → Pages → **Custom domain**: `mlkwebstudio.com` → Save. Once the DNS check passes and the certificate is issued (minutes to a few hours), tick **Enforce HTTPS**. `www.mlkwebstudio.com` then redirects to `mlkwebstudio.com` automatically. Recommended: verify the domain in your GitHub account (Settings → Pages → Add a domain, a `TXT` record) so no other repository can claim it.
4. Merge into `main`: the workflow builds and publishes the site.

### Other domains (redirects at the registrar, not on GitHub)

- `mlkwebstudio.co.uk` and `www.mlkwebstudio.co.uk` → `https://mlkwebstudio.com/` (permanent, 301).
- `mlkwebstudio.fr` and `www.mlkwebstudio.fr` → `https://mlkwebstudio.com/fr/` (permanent, 301). If the registrar offers to keep the path, turn it on: French pages have the same paths under `/fr/`.
- `mlkwebstudio.fr` used to be the custom domain of the `mlkleadhunters-accountants-fr` repository: remove it there (Settings → Pages → Custom domain → Remove) and delete that repository's `CNAME` file if it has one.
- Test each redirect with both `http://` and `https://`. Many registrar redirects only answer on `http://`; if `https://` shows a certificate error, the registrar's redirect has no SSL certificate and needs an "HTTPS" or "SSL" option turned on.
- The email address stays on `mlkwebstudio.fr`: keep its `MX` records when you set up the redirect.

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
- [x] **Repository**: public, Pages source GitHub Actions.
- [ ] **Domain**: DNS records for `mlkwebstudio.com`, custom domain in Settings → Pages, Enforce HTTPS, and the `.co.uk` and `.fr` redirects (see Deploy).
- [ ] **Screenshots**: Eden Flats, Ginov and 110% Intérieur have no screenshot yet. Add `static/images/projects/<slug>.jpg` (1600×1000) and `image:` in both languages.
- [ ] **Pilotech**: the portal and unified site are described as built and ready to go live; update the text and add `website:` once they are on pilotech.eu.
