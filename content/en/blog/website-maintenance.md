---
title: "Website maintenance: what it covers, what it costs and why no site is ever free"
seo_title: "Website maintenance: what it covers and what it costs"
description: "Website maintenance explained: the updates, backups, renewals and checks a small business site needs, what it costs each year and why a free site never is."
slug: "website-maintenance-guide"
translationKey: "website-maintenance"
date: 2026-10-17T08:17:00+02:00
lastmod: 2026-10-17T08:17:00+02:00
category: "websites"
article_type: "guide"
keywords: ["website maintenance", "website maintenance cost", "what does website maintenance include", "WordPress maintenance", "website maintenance checklist"]
summary: "Website maintenance is the work that keeps a live site safe, working and accurate: software updates, backups, security checks, renewals and content changes. On WordPress it is a weekly job, because the core, the theme and every plugin need updating; on Squarespace the platform handles the software and you look after the content and the accounts. It costs your time or a specialist's fee every year, so even a website built for free is never free for long."
cover: "website-maintenance"
cover_alt: "Shield with a tick next to a woman showing a document on a laptop to two people, with the word Maintenance"
related: ["website-cost", "squarespace-vs-wordpress", "wordpress-site-hacked", "website-security-guide", "build-website-with-ai"]
services: ["rescue"]
faq:
  - q: "Is website maintenance included in my hosting?"
    a: "Only in part. A host keeps the servers running and may offer automatic backups and updates, but it does not check that your forms still send, that your pages are accurate or that an update has not broken a layout. On Squarespace, the hosting, the SSL certificate and the platform updates are included in the subscription; the content and the account are still yours to look after."
  - q: "Does website maintenance include SEO?"
    a: "Not usually. Maintenance keeps the site working and safe; SEO is separate, ongoing work to rank for the searches your clients type. The two overlap on a few checks, such as broken links, pages Google does not index and page speed, so ask what a maintenance plan covers."
  - q: "Who should hold the logins if someone else maintains my website?"
    a: "You should. Keep the domain, the hosting or builder account and the main administrator login in your business's name, with your own email address, and give your web designer an account of their own. If you part ways, you remove their access instead of asking for yours back."
  - q: "Can I download a backup of my Squarespace site?"
    a: "Not a complete one. Squarespace's export covers some content, such as pages and blog posts, in a WordPress-format file, and leaves out the design, products, events and custom CSS. Keep your own copies of your texts, your images and any code you add."
  - q: "Is website maintenance a legal requirement?"
    a: "No law requires a maintenance contract. But if your site collects personal data, even through a contact form, the UK GDPR requires you to keep that data secure, and a leak from an unpatched site may have to be reported to the ICO within 72 hours."
---

Website maintenance is everything a site needs after launch to stay online, safe and accurate: software updates, backups, security checks, renewals and content changes. A website is closer to a car than to a printed brochure. It runs on software that keeps changing, on a domain and a plan that renew every year, and on details such as prices and opening hours that go out of date.

I see what skipped maintenance costs in the calls I get: every client who has called me in an emergency called about a WordPress site. It also sits behind one of the early mistakes I warn founders about: building a website for free for a friend or a relative, with no plan for who will look after it.

This guide covers what maintenance includes on each platform, what it costs, what changes in 2026 and 2027, and a schedule you can follow. It is part of my {{< a key="small-business-website-guide" >}}guide to small business websites{{< /a >}}.

## What website maintenance covers

Website maintenance comes down to five jobs. The platform decides who does each one, but none of them disappears.

| Job | What it involves | What happens if nobody does it |
|---|---|---|
| Software updates | The platform, the theme, plugins or code libraries, and the server's PHP version | Known security holes stay open |
| Backups | Regular copies of the files and the database, stored away from the site, and a restore you have tested | A hack or a failed update means starting again |
| Security | Strong passwords, two-step verification, user accounts, alerts from your host or from Google | A former contractor's account or a reused password becomes a way in |
| Renewals | Domain name, hosting or builder plan, SSL certificate, business email | An expired domain takes the website and the email offline |
| Content and checks | Prices, opening hours, services, legal pages, contact forms, broken links | Visitors read old information, and enquiries stop without warning |

{{< callout type="tip" >}}Send yourself a test message through **every form on your site once a month**. A form that stopped sending after an update shows no error to anyone: the enquiries simply stop arriving.{{< /callout >}}

Google helps with part of the checking. Search Console warns you when Google finds a security issue on your site ([Google's help on the Security issues report](https://support.google.com/webmasters/answer/9044101)), and its Pages report lists the pages Google has not indexed, with the reason.

## Website maintenance on WordPress, Squarespace and custom-coded sites

The five jobs are the same everywhere. What changes is how many of them land on you.

| | WordPress (self-hosted) | Squarespace | Custom-coded or AI-built site |
|---|---|---|---|
| Software updates | You or your developer: core, theme, plugins and PHP | Squarespace | Your developer, when libraries or the host change |
| Hosting and SSL | Your host; check that certificates renew | Included in the plan | Your host (free on GitHub Pages, SSL included) |
| Backups | You or your host | Keep your own copies of texts, images and code | The code lives in a repository, such as GitHub |
| Security | Logins, plugins, user accounts, alerts | Your login and two-step verification | Logins to the host, the repository and the domain |
| Content changes | You, as far as the theme allows | You, in the editor | A developer, or you with an AI tool |

### WordPress: the platform that needs the most upkeep

WordPress itself is free and solid. The upkeep comes from what sits around it: a theme, often a page builder, and plugins for forms, SEO, caching or security, each updated by a different developer. Patchstack, a company that specialises in WordPress security, counted 11,334 new vulnerabilities in the WordPress ecosystem in 2025, 42 per cent more than in 2024, and **about 91 per cent of them were in plugins** ([Patchstack's 2026 report](https://www.patchstack.com/whitepaper/state-of-wordpress-security-in-2026/)). Every plugin you add is one more thing to update.

Updates carry their own risk: one can clash with the theme or with another plugin, and the layout breaks. All my WordPress clients came to me wanting to switch, because of the learning curve and the plugins to keep up with. People who edit their own site should not have to fear that changing one letter will bring the whole page down.

{{< callout type="warning" >}}Take a **backup before every round of updates**, and keep at least one copy away from your host. Then check your main pages and your contact form. A backup stored only on the server that gets hacked can disappear with the site.{{< /callout >}}

WordPress does part of the work: by default, it installs minor core releases (maintenance and security) by itself, and on the **Plugins** screen each plugin has an **Enable auto-updates** link. **Tools > Site Health** flags problems such as an outdated PHP version or inactive plugins you should delete. Automatic updates save time; they do not replace the check afterwards.

Skipping all this has a price. Pilotech, an HVAC installer near Paris, called me in an emergency when its WordPress site was hacked: I recovered it and built a new one, and two years on I still build its websites, such as the {{< a page="/projects/pilotech" >}}site that brings its three product lines together{{< /a >}}. WordPress remains a sound choice when the budget is there: my clients who can afford it keep it and pay a specialist every month. If yours has already been hacked, follow my checklist for a {{< a key="wordpress-site-hacked" >}}hacked WordPress site{{< /a >}}.

### Squarespace: the platform does the heavy lifting

On Squarespace, the hosting, the SSL certificate, the security patches and the platform updates are included in the subscription. With no plugins to update, most of the software side disappears. My {{< a key="squarespace-vs-wordpress" >}}Squarespace vs WordPress comparison{{< /a >}} goes through the other differences.

What remains is yours: the content, the renewals, a strong password with two-step verification, and any custom code. I usually add some code to the Squarespace sites I build: clients call me for that part, and those additions never get in the way of what they edit. Everything else they change whenever they want, without calling anyone, which is why I move owners who run their own site to Squarespace.

The trade-off is control. Squarespace is closed: you have no access to the source code, and you cannot move the site to another host.

### Custom-coded and AI-built sites

A custom-coded site has no plugins to patch, but it still has code libraries, a host and a domain, and every change to the layout or the features needs someone who can edit the code. The clients I build custom sites for pay me every month, or now and then when they want something changed.

A simple brochure site that you {{< a key="build-website-with-ai" >}}build with AI and host on GitHub Pages{{< /a >}} costs very little to run, but it makes you the maintainer: the code, the domain and every change are yours. GitHub Pages has limits too: it suits a brochure site, not a shop.

## Two changes that make maintenance more frequent in 2026 and 2027

### SSL certificates now expire sooner

The padlock in the address bar depends on an SSL certificate (strictly speaking, a TLS certificate). Since 15 March 2026, a newly issued public certificate can be valid for at most 200 days, down from 398. The limit falls to 100 days on 15 March 2027 and to 47 days on 15 March 2029, under a schedule agreed by the CA/Browser Forum, the body of certificate authorities and browser makers that sets these rules.

If your site is on Squarespace, or on a host that installs free Let's Encrypt certificates automatically, nothing changes for you: those certificates already last well under 200 days and renew on their own. If someone installed a paid certificate by hand, ask your host or your developer to automate its renewal. An expired certificate shows visitors a full-page security warning instead of your site.

### PHP 8.2 loses its security fixes on 31 December 2026

WordPress sites, like many others, run on PHP, the programming language your host installs on the server. Each PHP version gets two years of full support, then two years of security fixes only. PHP 8.1 reached its end of life on 31 December 2025, and **PHP 8.2 stops receiving security fixes on 31 December 2026** ([PHP's supported versions page](https://www.php.net/supported-versions.php)).

On WordPress, the version shows in **Tools > Site Health**, on the **Info** tab under **Server**; your hosting control panel shows it too. Before you switch to a newer version, take a backup and check that your theme and plugins support it, because one old plugin that fails on the new version can take the whole site down.

## What website maintenance costs

I found no independent survey of maintenance prices: the figures that come up online are agencies' own price lists. So rather than an average, here is what you actually pay for.

**Running costs** come back every year whatever you do: the domain name, the hosting or builder plan, and business email. My guide to {{< a key="website-cost" >}}how much a website costs in the UK{{< /a >}} gives current prices for a domain, a Squarespace plan and a business mailbox. Watch the renewal prices more than the introductory offers.

**The work** costs your time or someone else's, and there are three ways to pay for it:

| Model | How you pay | Suits | Watch for |
|---|---|---|---|
| Do it yourself | Your time: every week on WordPress, every month on a builder | Squarespace sites, and owners at ease with the tools | Updates that slip when you are busy |
| Pay as you go | A specialist bills each change, update or fix | Sites that rarely change | Emergencies cost the most, and nobody watches in between |
| Monthly plan | A fixed fee for updates, backups, monitoring and some changes | WordPress or custom sites that bring in business | What is excluded, such as hack repairs or new pages |

**The risk** is the cost of skipped maintenance: an emergency repair or a rebuild, the enquiries lost while the site is down, and Google's "This site may be hacked" label under your search result. It is the one line you cannot budget for, which is why the first two are worth paying.

Before you sign a maintenance plan, ask:

1. Which updates are included, how often, and is the site checked afterwards?
2. Where are the backups stored, for how long, and when was a restore last tested?
3. How quickly do you answer when the site is down?
4. How many content changes are included each month?
5. Is repairing a hack included, or billed separately?
6. Whose name are the accounts in, and what happens if I stop the plan?

## Why a free website is never free

Building a website for a friend or a relative looks like a generous gift. But a website is not a one-time gift: if you give one, you give maintenance for life, unless you agree in advance that upkeep will cost something. And because the work is free, the requests never stop: a new photo, a new page, a different colour, one small change on a Sunday evening.

There is one exception: a Squarespace site without heavy custom code. It is the easiest website builder I know, and the person you build it for can change things themselves. Its weakness is that it is closed, so custom-coded, Webflow or WordPress sites might rank higher. Yet the Squarespace site I built for Pilotech ranks first or second on Google: with the right keywords and careful metadata, the platform is not what holds you back.

If you build a site for someone anyway, put three things in writing before you start:

1. What is included at launch, and what counts as a change afterwards.
2. What upkeep costs: a price per change, a monthly fee or a yearly allowance.
3. Who pays the renewals, and whose name the domain and the accounts are in (theirs).

If you are on the receiving end, ask the same questions now. If the person who built your site still holds the logins and no longer answers, my guide on how to {{< a key="regain-website-access" >}}regain access to your website{{< /a >}} explains how to get them back.

## Your website maintenance checklist

| How often | What to do |
|---|---|
| Every week (WordPress) | Check that the last backup ran, install the core, theme and plugin updates, then open your main pages and send a test message |
| Every month | Test every form; read Search Console's messages and its Pages report; update prices, hours, services and photos; delete plugins and user accounts nobody uses |
| Every three months | Restore a backup to a test copy; review who can access the host, the domain, the builder and your Google accounts; reread your privacy and cookie pages if your tools have changed |
| Every year | Check the renewal dates, auto-renewal and the card on file for the domain, the plan and the email; on self-hosted sites, check the PHP version and the SSL renewal; ask whether the platform still suits whoever edits the site |

For passwords, two-step verification and the rest of the security side, my guide to {{< a key="website-security-guide" >}}website security for small businesses{{< /a >}} goes further.

## When to do it yourself and when to hand it over

You do not need me, or anyone, to maintain a Squarespace site you edit yourself. The monthly and yearly lines of the checklist are enough, and you can call someone for custom code or when something breaks.

Hand it over when:

- the site runs on WordPress, brings in business, and nobody has time to update it every week;
- it is custom-coded and you need changes to the layout or the features;
- it has been hacked, or the same problem keeps coming back;
- you no longer know who holds the domain, the hosting or the logins.

When something goes wrong on a client's site, I help first and they pay me later. Rescue requests get an answer the same day or within 24 hours. And if someone else would suit you better, or you do not need help at all, I will tell you so.
