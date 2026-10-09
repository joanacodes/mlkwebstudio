# MLK Web Studio — portfolio (Hugo, EN + FR)

The portfolio of MLK Web Studio: websites, SEO and cold email. Same visual identity as MLK Leadhunters (graphite and ice, one blue, orange details, Instrument Sans, reeded-glass photos), with the MLK / Web Studio logo.

## Run it locally

    hugo server          # http://localhost:1313 (needs Hugo extended ≥ 0.147)

## Deploy to GitHub Pages

The site lives on **https://mlkwebstudio.com/** (English) and **https://mlkwebstudio.com/fr/** (French). Do the steps in this order: GitHub first, DNS after, so that no one else can claim the domain while it points at GitHub.

1. Repository → Settings → Pages → Build and deployment → Source: **GitHub Actions** (not "Deploy from a branch"). `.github/workflows/hugo.yml` builds and publishes on every push to `main`, always for `baseURL` in `hugo.toml` (`https://mlkwebstudio.com/`).
2. Verify the domain in your GitHub account: your profile → Settings → Pages → **Add a domain** → `mlkwebstudio.com`. Add the `TXT` record GitHub shows (`_github-pages-challenge-joanacodes`) at your DNS provider, click Verify, and keep that record for good.
3. Repository → Settings → Pages → **Custom domain**: `mlkwebstudio.com` → Save. (The `CNAME` file at the root of `main` shows this is done.)
4. DNS for `mlkwebstudio.com`, at the company that manages the domain's DNS. Delete any other `A`, `AAAA`, `ALIAS` or web redirect on `@` and `www` (parking page, registrar redirect). Keep the `MX` and `TXT` records used for email.

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

5. When the DNS check in Settings → Pages turns green and the certificate is issued (a few minutes, up to 24 hours), tick **Enforce HTTPS**. If the box is still greyed out after 24 hours, click Remove next to the custom domain, type `mlkwebstudio.com` again and Save. `www.mlkwebstudio.com` redirects to `mlkwebstudio.com` on its own.
6. Merge into `main`: the workflow builds and publishes the site.

### Other domains (redirects at the registrar, not on GitHub)

- `mlkwebstudio.co.uk` and `www.mlkwebstudio.co.uk` → `https://mlkwebstudio.com/` (permanent, 301).
- `mlkwebstudio.fr` and `www.mlkwebstudio.fr` → `https://mlkwebstudio.com/fr/` (permanent, 301), without keeping the path: the pages that used to be on `mlkwebstudio.fr` (the accountants landing page) do not exist on this site, so every old link should land on the French home page.
- `mlkwebstudio.fr` still points at GitHub (it was the custom domain of `mlkleadhunters-accountants-fr`). In the `.fr` DNS, replace the GitHub records with the registrar's redirect: the `A` records `185.199.108–111.153`, the `AAAA` records `2606:50c0:8000–8003::153` and a `www` `CNAME` to `joanacodes.github.io`. Leftover `AAAA` records would send IPv6 visitors to a GitHub error page instead of the redirect. Only then remove the domain from that repository (Settings → Pages → Custom domain → Remove). Do the same check on `mlkwebstudio.co.uk`. To be safe, verify `mlkwebstudio.fr` and `mlkwebstudio.co.uk` in your GitHub account too (step 2).
- Test each redirect with both `http://` and `https://`, with and without `www`. Some registrars' redirects do not work on `https://` (a certificate error). If yours offers an HTTPS/SSL option for redirects, turn it on. If it has none, the usual fixes are a small hosting plan at the registrar with a free certificate and a 301 rule, or Cloudflare's free plan with a redirect rule (copy every mail record first).
- The email address stays on `mlkwebstudio.fr`. When you set up the redirect, change only the web records (`A`/`AAAA` on `@` and `www`). Keep every mail record: `MX`, the SPF `TXT` on `@`, DKIM (under `._domainkey`), `_dmarc` and any `autoconfig`/`autodiscover` records. Never put a `CNAME` on `@`. Afterwards, send a test email from `contact@mlkwebstudio.fr`.

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
- [x] **Repository**: public, Pages source GitHub Actions, custom domain `mlkwebstudio.com`.
- [ ] **Domain**: verify `mlkwebstudio.com` in the GitHub account, add its DNS records, tick Enforce HTTPS, then the `.co.uk` and `.fr` redirects (see Deploy).
- [ ] **Screenshots**: Eden Flats, Ginov and 110% Intérieur have no screenshot yet. Add `static/images/projects/<slug>.jpg` (1600×1000) and `image:` in both languages.
- [ ] **Pilotech**: the portal and unified site are described as built and ready to go live; update the text and add `website:` once they are on pilotech.eu.
