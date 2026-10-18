---
title: "Spaceship hosting explained: which product for which website, and how to start"
seo_title: "Spaceship hosting: plans, prices and how to get started"
description: "Spaceship hosting explained: Web Hosting, EasyWP, Alf Website Studio, Hyperlift and cloud servers, what each costs in 2026, and how to launch your site."
slug: "spaceship-hosting-guide"
translationKey: "spaceship-hosting"
date: 2026-10-17T08:49:00+02:00
lastmod: 2026-10-17T08:49:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["Spaceship hosting", "Spaceship web hosting", "Spaceship hosting plans", "Spaceship EasyWP", "Starlight Hyperlift", "Spaceship cPanel"]
summary: "Spaceship hosting covers shared Web Hosting with cPanel (Essential, Pro and Supreme, from $19.88, about £15, for the first year), EasyWP for managed WordPress, Alf Website Studio for an AI-built site, and the Starlight cloud range, Hyperlift and Virtual Machines, for apps. For a small business website, start with the Essential plan: a 30-day free trial, free SSL and room for five sites. If your site runs on Squarespace, you need none of them."
cover: "spaceship-hosting"
cover_alt: "The words Spaceship hosting beside a star circled by orbits, behind ribbed glass"
related: ["spaceship-vs-namecheap", "build-website-with-ai", "spaceship-domain-dns-tutorial", "web-hosting-comparison", "spacemail-setup"]
services: ["websites"]
faq:
  - q: "Is Spaceship hosting the same as Namecheap hosting?"
    a: "No. Namecheap built Spaceship and unveiled it in August 2023, but Spaceship sells its own range from its own website: Web Hosting, EasyWP, Alf Website Studio and the Starlight cloud products. You buy and manage them in a Spaceship account."
  - q: "Does Spaceship hosting include email?"
    a: "Spaceship's help centre describes special Spacemail plans for Web Hosting and EasyWP customers, so check what your plan includes before you buy mailboxes. Otherwise, Spacemail is sold on its own, from under $1 (about 75p) a month per mailbox at the time of writing."
  - q: "Can I give a developer access to my Spaceship hosting without sharing my password?"
    a: "Yes. In Hosting Manager, click Manage on the plan, then cPanel access: Spaceship generates a temporary access token that you send instead of your login details."
  - q: "Does Spaceship Web Hosting support SSH?"
    a: "Yes. SSH access can be switched on for a hosting account, and Spaceship's help centre explains how to enable it and connect securely. Most small business sites never need it: cPanel's File Manager handles uploads."
  - q: "Can I keep my domain at Spaceship and host my website elsewhere?"
    a: "Yes. The domain and the hosting are separate products. Keep the domain at Spaceship and point it to your host with DNS records in Advanced DNS, as you would for Squarespace or GitHub Pages."
---

Spaceship hosting is a small range rather than a single product: shared Web Hosting with cPanel, EasyWP for managed WordPress, Alf Website Studio, an AI website builder, and two Starlight cloud products, Hyperlift and Virtual Machines, for apps and developers. For a typical small business website, the place to start is the cheapest Web Hosting plan, Essential.

Spaceship is the platform Namecheap built and unveiled in August 2023, and it is where I have my habits. I trust it, I find it easy to set up, and its support, there around the clock, has resolved every issue I have taken to it. If you are still choosing a registrar, my comparison of {{< a key="spaceship-vs-namecheap" >}}Spaceship vs Namecheap{{< /a >}} explains how the two relate.

This guide sets out which product suits which kind of website and what each costs, then walks you through starting with the simplest one. Prices are in US dollars, as Spaceship lists them at the time of writing (October 2026); the pound amounts are approximate. If the difference between a domain, hosting and email is still fuzzy, start with my guide to {{< a key="domain-hosting-email-guide" >}}domain vs hosting{{< /a >}}.

## Spaceship hosting at a glance: which product for which website

Hosting is the service that keeps your website's files on a server connected to the internet, so the site answers when someone types your address. Spaceship sells it in several forms, each made for a different kind of website.

| Product | What it is | Best for | Price at the time of writing |
|---|---|---|---|
| Web Hosting (Essential, Pro, Supreme) | Shared hosting with cPanel | A brochure site, a small WordPress site, a site built with AI | From $19.88 (about £15) for the first year |
| EasyWP (Starter, Turbo, Supersonic) | Managed WordPress hosting | A WordPress site, without the server side | From $5.88 (about £4.40) a month |
| Alf Website Studio | AI website builder | A simple site or a small shop, made by chatting | $5 (about £3.70) a month after 30 free days |
| Starlight Hyperlift | Runs containerised apps from GitHub | An app built by a developer or with AI | From $0.005 an hour, about $3.60 (£2.70) a month |
| Starlight Virtual Machines | Cloud servers | Developers who run their own server | Billed by the hour, by size |

Web Hosting and EasyWP Starter both begin with a 30-day free trial. Email is a separate product, Spacemail, which my {{< a key="spacemail-setup" >}}Spacemail setup{{< /a >}} tutorial covers from the plans to the DNS records.

## Do you need Spaceship hosting at all?

Before you pay for hosting, check whether your website already has a home.

- **Your site runs on Squarespace or another all-in-one builder.** Hosting is included in the builder's plan, and your domain only has to point to it. I put most of my clients who edit their own site on Squarespace for that reason: they can change a word without bringing the whole structure down. My {{< a key="spaceship-domain-dns-tutorial" >}}Spaceship DNS settings{{< /a >}} tutorial shows how to connect a Spaceship domain to Squarespace.
- **Your site is a small static site.** It can live on GitHub Pages for free. This site runs that way: built with Hugo, published from a GitHub repository, with its own domain. GitHub does not allow Pages to be used as free hosting for an online shop or a commercial software service, so it suits a brochure site, not a shop.
- **Your site needs a server you rent:** WordPress, a site whose files you upload yourself, or an app. That is where Spaceship comes in.

For solo owners, I usually advise against WordPress and Webflow: both have a steep learning curve, and you end up as your own webmaster. Today, it is often simpler to build the site with AI and host it on GitHub, on Spaceship or elsewhere. My tutorial on how to {{< a key="build-website-with-ai" >}}build a website with AI{{< /a >}} covers the GitHub Pages route; the rest of this guide covers Spaceship's.

## Web Hosting: Essential, Pro or Supreme?

Shared hosting means your site shares a server with other customers' sites while the host looks after the machine. It is the cheapest way to host a classic website. All three of Spaceship's plans run on **cPanel**, the control panel used by many web hosts, and include a free SSL certificate from Let's Encrypt, so your site loads over HTTPS.

| Plan | Websites | Storage | First year | Renewal |
|---|---|---|---|---|
| Essential | Up to 5 | 20 GB | $19.88 (about £15) | Higher than the first year |
| Pro | Unlimited | 50 GB | $28.88 (about £21) | $48.88 (about £36) a year |
| Supreme | Unlimited | Unmetered | $38.88 (about £29) | $68.88 (about £51) a year |

These are the one-year prices on [Spaceship's Web Hosting page](https://www.spaceship.com/web-hosting/) at the time of writing (October 2026), after the 30-day free trial. A two-year term lowers the monthly figure; the total at checkout is what counts.

For one business website, **Essential is enough**: 20 GB is plenty for a brochure site or a small WordPress site, and five sites leave room for a second brand or a landing page. Pro makes sense once you run more than five sites, or a WordPress site with years of photos. Supreme is for people who host many sites, such as a freelancer hosting their clients.

Renewals cost more than the first year, as they do almost everywhere. The jump is nothing like the triple bills I have seen at Hostinger or GoDaddy, but read the renewal line before you commit to a long term.

## EasyWP: managed WordPress hosting

Managed WordPress hosting means the host runs the server side of WordPress for you, so you deal with the site, not the machine. At Spaceship, that is [EasyWP](https://www.spaceship.com/hosting-for-wordpress/), managed from its own dashboard, in three plans: Starter (10 GB), Turbo (50 GB) and Supersonic (100 GB). At the time of writing, Starter costs $5.88 (about £4.40) a month for the first term, after a 30-day free trial, and renews higher.

My view of WordPress is blunt. Every client who called me in an emergency called because of it, and those who moved to Squarespace did so to edit their site without fear of breaking it. WordPress still suits a business with the budget for a specialist who looks after the site every month. If that is you, **EasyWP takes the server off your plate**; the plugins and the content remain your job, or your specialist's.

## Alf Website Studio: Spaceship's AI website builder

[Alf Website Studio](https://www.spaceship.com/alf-website-builder/) builds a website from a conversation with Alf, Spaceship's AI assistant: you describe your business, then edit the site by chatting. At the time of writing, it is free for 30 days, then $5 (about £3.70) a month. That plan includes an optional online shop, with a small fee per order, and you can try the builder before you create an account.

It suits a simple site you need this week, without code. For a site you want to rank and keep for years, **test three things during the free month**: whether you can set each page's title and meta description, how fast the pages load, and whether you can take your content elsewhere one day.

## Starlight Hyperlift and Virtual Machines: hosting for apps

Starlight Hyperlift builds, hosts and deploys containerised apps straight from a GitHub repository, without you managing a server. A container is an app packaged with everything it needs to run; Hyperlift builds it from your repository and keeps it running.

Billing is by the hour, for build time and running time. [Spaceship's Hyperlift page](https://www.spaceship.com/starlight-cloud/hyperlift/) lists five sizes at the time of writing, from Micro at $0.005 an hour (about $3.60, or £2.70, a month) to Extra Large at $0.073 an hour (about $52.57, or £39, a month). You can pay as you go, or prepay by the month, quarter or year, and prepaid plans start with a 7-day free trial. If you come across $0.0005 an hour, it comes from one of Spaceship's own blog posts, printed next to the same $3.60 a month: the pricing page's $0.005 is the figure that adds up.

Hyperlift suits an app: a booking tool, a client portal, a small internal tool built with AI or by a developer. A static site can run there too, packaged as a container, but for a brochure site, Web Hosting or GitHub Pages costs less. My guide on how to {{< a key="build-app-with-ai" >}}build an app with AI{{< /a >}} explains what you can realistically build without a developer.

Starlight Virtual Machines are cloud servers: a machine of your own in Spaceship's cloud, where you install whatever you need, with storage volumes and a load balancer as add-ons. On pay-as-you-go, Spaceship bills them by the hour, and the price depends on the size you choose. The freedom comes with the work: **the updates, the security and the backups of everything you install are yours**. For a small business without a developer, I would not start here: you would be signing up to be your own system administrator.

## How to set up Spaceship hosting, step by step

Here is how to start with the simplest product, Web Hosting, from the order to a live site on HTTPS. The labels are Spaceship's at the time of writing; if one moves, the steps stay the same.

### Step 1: choose the plan and start the free trial

On the Web Hosting page, pick **Essential** unless you already know you need more. Choose the term, then read two lines before you pay: the price for the first term and the renewal price. At the time of writing, every plan starts with a 30-day free trial.

If you do not have a domain yet, register it in the same order: the domain and the hosting then sit in one account, and step 2 is shorter.

{{< screenshot id="spaceship-hosting-01" alt="Spaceship Web Hosting page showing the Essential, Pro and Supreme plans with their prices" >}}

### Step 2: connect the plan to your domain

In your Spaceship account, open **Hosting Manager** and connect the plan to your domain. Spaceship calls this connection step Unbox and walks you through it.

- **Domain registered at Spaceship:** nothing more to do. It already uses Spaceship's nameservers.
- **Domain registered elsewhere:** point it to Spaceship, either by changing its nameservers or by adding the DNS records Spaceship gives you, then connect it in Hosting Manager.

{{< screenshot id="spaceship-hosting-02" alt="Spaceship Hosting Manager connecting the new Web Hosting plan to a domain" >}}

{{< callout type="warning" >}}**Changing nameservers moves the whole DNS zone.** Copy your MX records and your email TXT records first and recreate them at Spaceship, or your email stops arriving the day your site goes live.{{< /callout >}}

### Step 3: switch on the free SSL certificate

Next to your domain in Hosting Manager, click the three dots (**⋮**) and choose **+ Get SSL**. The certificate comes from Let's Encrypt, at no cost and with no renewal fee. If your browser shows a security warning in the hours after a DNS change, wait: the certificate can take a few hours to activate once the domain points to the hosting.

{{< screenshot id="spaceship-hosting-03" alt="The three-dot menu next to a domain in Spaceship Hosting Manager, with the + Get SSL option" >}}

### Step 4: put your website online

Two routes, depending on your site.

**WordPress.** Install it from Hosting Manager, the simplest route, or with Softaculous inside cPanel if you want more options. Then sign in to WordPress and set the site's title, theme and pages.

{{< screenshot id="spaceship-hosting-04" alt="WordPress installation in Spaceship Hosting Manager, with the domain selected" >}}

**A site built with AI, or any set of HTML files.** Open cPanel from Hosting Manager: click the **⋮** next to **Manage**, then **Go to cPanel**. Open **File Manager** and upload your files into the domain's folder, usually `public_html` for the main domain. The home page must be named `index.html` and sit at the top of that folder.

{{< screenshot id="spaceship-hosting-05" alt="The three-dot menu next to Manage in Spaceship Hosting Manager, with the Go to cPanel option" >}}

{{< screenshot id="spaceship-hosting-06" alt="cPanel File Manager on Spaceship hosting, with the website's files uploaded to public_html" >}}

### Step 5: check the site, then tidy up

1. Open your site with and without www, over http and https. If one of the four addresses does not reach the secure version of your site, set up a redirect in cPanel or ask Spaceship's support.
2. Create the email addresses you need on the domain.
3. Switch on auto-renewal for the hosting and the domain, and check the card on the account.
4. Before the free trial ends, decide whether you keep the plan.

## Which Spaceship hosting to choose: a checklist, and when to hand it over

1. **Squarespace or another builder:** no hosting needed, only DNS.
2. **A brochure site built with AI:** GitHub Pages for free, or Web Hosting Essential if you would rather upload files and keep everything in your Spaceship account.
3. **A WordPress site:** Web Hosting if cPanel does not put you off, EasyWP if you want the server side handled.
4. **A simple site you build yourself by chatting:** try Alf Website Studio during its free month.
5. **An app:** Hyperlift. **A server you run yourself:** Virtual Machines, with a developer.
6. **Whatever you choose:** read the renewal price, switch on auto-renewal and keep a copy of your DNS records.

If you are weighing Spaceship against a classic web host, I compare {{< a key="web-hosting-comparison" >}}Hostinger vs OVH{{< /a >}} and Infomaniak in a separate guide. Spaceship is where I have my habits; of the others, I recommend Infomaniak, while I find OVH and Hostinger a bit complicated for small business owners to handle.

You do not need me for any of this: the steps above are within reach of any owner who can follow a tutorial. If you would rather hand the whole thing over, putting the site online and connecting the domain is the last step of every {{< a page="/services/websites" >}}website I build{{< /a >}}.
