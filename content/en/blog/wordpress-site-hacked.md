---
title: "WordPress site hacked? What to do in the first 24 hours"
seo_title: "WordPress site hacked? What to do in the first 24 hours"
description: "WordPress site hacked? The first 24 hours in order: lock the attackers out, save the evidence, report a data breach, clean or rebuild, lift Google's warning."
slug: "wordpress-site-hacked"
translationKey: "wordpress-site-hacked"
date: 2026-10-17T09:35:00+02:00
lastmod: 2026-10-17T09:35:00+02:00
category: "website-rescue"
article_type: "tutorial"
keywords: ["WordPress site hacked", "hacked WordPress site", "what to do if your WordPress site is hacked", "clean a hacked WordPress site", "This site may be hacked"]
summary: "If your WordPress site has been hacked, take it offline, change every password and log everyone out, then save a copy of the infected site and its logs before you clean anything. If personal data was exposed and people are at risk, report it to the ICO within 72 hours (the CNIL in France). Then clean the site, restore a backup from before the hack or rebuild it, and request a review in Search Console to lift Google's 'This site may be hacked' warning."
cover: "wordpress-site-hacked"
cover_alt: "Shield with a tick over a person working at a laptop, with the words WordPress: 24 h"
related: ["website-security-guide", "regain-website-access", "wordpress-to-squarespace", "website-maintenance", "google-search-console-tutorial"]
services: ["rescue"]
faq:
  - q: "Will my Google rankings come back after a WordPress hack?"
    a: "Usually, once the hacked pages are gone and Google has crawled the clean site again, but Google gives no set timeline. A hack cleaned quickly tends to leave fewer traces than spam pages left in the index for months."
  - q: "Can I keep my content if I rebuild the site?"
    a: "Yes. Your texts and images can move to the new site; what you leave behind is the code: the theme, the plugins and any file you cannot vouch for. Check old pages and posts for links or scripts you did not add before you copy them across."
  - q: "How do I find out when the hack started?"
    a: "Look at the date the unknown administrator account was created, the modification dates of suspicious files, and the first queries in Search Console's Performance report that have nothing to do with your business. A backup older than the earliest of these dates is your best candidate for a restore."
  - q: "Do I have to tell my customers that my website was hacked?"
    a: "If their personal data was exposed and the breach is likely to put them at high risk, yes: the UK GDPR, like the EU GDPR, requires you to tell them without undue delay. If no personal data was involved, the GDPR imposes no such duty, though a short factual note helps if customers saw the warning or the spam."
  - q: "Can a hacked website infect my visitors?"
    a: "It can. Some hacks send visitors to scam sites or try to install malware on their devices, which is why Google and web browsers warn people away from infected sites. Keeping the site offline until it is clean protects your visitors and your reputation."
---

Your WordPress site has been hacked, or everything points that way: visitors land on a casino page, Google lists pages in Japanese under your business name, or your host has emailed you about malware. This is fixable, but what you do in the first 24 hours decides how much it costs you, and the order of the steps matters more than speed.

Most of the emergency calls I get are about WordPress sites. Pilotech, an HVAC installer near Paris, is one example: it called me urgently when its WordPress site was hacked.

This tutorial gives the five steps I recommend, in order: lock the attackers out, save the evidence, report what has to be reported, clean or rebuild, then lift Google's warning. It is the emergency part of my guide to {{< a key="website-security-guide" >}}website security for small businesses{{< /a >}}, which covers prevention. Menu names are those of WordPress and Google Search Console in English at the time of writing (October 2026).

## How to tell your WordPress site has been hacked

Some hacks are loud: a defaced home page, an admin password that suddenly stops working. Most are quiet, because the attacker is after your site's standing with Google, not your attention. These are the usual signs:

| Sign | Where you see it |
|---|---|
| Visitors are sent to scam, casino or pharmacy sites, sometimes only on mobile or only when they arrive from Google | Your phone, your customers |
| Pages you never wrote appear in Google, often in Japanese or full of brand names | A search for `site:yourdomain.co.uk` |
| "This site may be hacked" under your result, or a red warning page in Chrome | Google Search, Chrome |
| An email from Search Console about security issues, or about a new owner you did not add | Your inbox |
| An administrator account you do not recognise | **Users** in WordPress |
| Your host suspends the site, or warns you about malware or spam sent from your account | Your hosting account |

Many of these hacks hide from logged-in administrators and from people who type your address directly. Check from a phone on mobile data, logged out, by clicking your own result in Google. If one of the signs is there, treat it as a hack and start with step 1.

## Step 1, first hour: lock the attackers out

The goal of the first hour is simple: nobody but you can get in, and visitors stop reaching infected pages. Do not delete files yet, because step 2 needs them.

**1. Take the site offline.** Ask your host to suspend public access or put up a holding page while you work. Ask at the same time what their logs and malware scans show: their tools may already have found something.

**2. Change every password, from a clean device.** Start with the email account behind your WordPress admin address, because whoever controls it can reset your other passwords. Then the hosting account, every WordPress administrator, the SFTP or FTP accounts and the database. A new database password also goes into `wp-config.php`, on the `DB_PASSWORD` line, or the site can no longer reach its database.

**3. Turn on two-factor authentication** wherever it is available: hosting, domain registrar, email and the WordPress logins themselves.

**4. Remove the accounts you did not create.** In WordPress, open **Users > All Users** and click **Administrator** above the list to show only administrators. Take a screenshot first, then delete any account you do not recognise.

{{< screenshot id="wordpress-site-hacked-01" alt="WordPress Users screen filtered on the Administrator role" >}}

**5. Log everyone out.** On your profile page (**Users > Profile**), the **Log Out Everywhere Else** button ends your other sessions, and the **Application Passwords** section lets you revoke passwords issued to apps and scripts, which an attacker with administrator access can create to keep a way in. To log out every account at once, replace the eight security keys and salts in `wp-config.php` with a fresh set from WordPress's official generator:

```
https://api.wordpress.org/secret-key/1.1/salt/
```

{{< screenshot id="wordpress-site-hacked-02" alt="WordPress profile screen with the Application Passwords section and the Log Out Everywhere Else button" >}}

{{< callout type="warning" >}}**Use a clean device.** If the computer you manage the site from is infected too, your new passwords can be stolen as you type them. Run a full antivirus scan first, or change the passwords from another device.{{< /callout >}}

If a former provider holds the hosting account and you cannot get in, deal with that first: here is how to {{< a key="regain-website-access" >}}regain access to your website{{< /a >}}.

## Step 2: save the evidence before you clean anything

The temptation is to start deleting. Wait an hour. What you save now shows how the attacker got in, and without that, the same hole lets them back in. It is also what a regulator, the police or an insurer will ask you for.

1. **A full copy of the infected site**: all the files plus a database export, from your host's backup tool or by SFTP and phpMyAdmin. Name it clearly (`INFECTED-2026-10-17`, for example) and keep it away from your other backups.
2. **The server logs.** Ask your host for the access and error logs of the last few weeks. Hosts do not keep them for ever, so ask on day one.
3. **Screenshots**: the spam pages in Google, the redirects, the warnings, the list of users, and the emails from Search Console or your host.
4. **A timeline** in a plain document: when you noticed, what you saw, and every action taken since, with the time and who did it.
5. **The list of your backups** with their dates (from the host, a plugin or your own). Step 4 needs one from before the hack.

{{< callout type="tip" >}}**Never restore the infected copy.** Its only job is to be examined. Keep it labelled and offline, and delete it once the case is closed.{{< /callout >}}

## Step 3: report the breach if personal data is involved

A WordPress site often holds more personal data than its owner thinks: contact form messages if the form plugin stores them, customer accounts and orders if you sell online, newsletter sign-ups, user accounts. If the attacker could reach them, you have a personal data breach.

**In the UK**, the rule comes from the UK GDPR. If the breach is likely to result in a risk to people's rights and freedoms, you report it to the Information Commissioner's Office within 72 hours of becoming aware of it; the [ICO's page on personal data breaches](https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach) explains how to decide and how to report. If you do not have all the facts yet, report what you know and send the rest in phases. Whatever you decide, record the breach in your own files: what happened, its effects and what you did about it. **In France**, the same GDPR rule applies and the notification goes to the CNIL.

{{< callout type="note" >}}**The 72 hours start when you become aware of the breach**, not when you finish investigating it. A late notification has to give the reasons for the delay.{{< /callout >}}

**Reporting the crime is optional, and useful.** Hacking a website is a crime. In England, Wales and Northern Ireland, businesses report cybercrime to [Report Fraud](https://www.reportfraud.police.uk/), online or on 0300 123 2040; the service replaced Action Fraud on 4 December 2025. In Scotland, call Police Scotland on 101. A report gives you a written record if an insurer or a bank asks for one.

Two more calls to make: your payment provider if the site takes payments, and your insurer if you have cyber cover (check the policy for its notification deadline).

## Step 4: clean the hacked site or rebuild it

With the attackers locked out and the evidence saved, there are three ways back. Choose according to how much you trust what is left.

| Option | When it fits | The catch |
|---|---|---|
| Restore a backup | You know when the hack started and have a full backup from before that date | The hole they used is still there: update everything straight after |
| Clean the site in place | The hack is recent and limited, and someone technical can take it on | Backdoors are easy to miss, and a missed one brings the attacker back |
| Rebuild | No clean backup, a second infection, or a site that needed a new design anyway | It takes longer, and every old address needs a redirect |

### What a clean-up involves

If you keep WordPress, whether you restore a backup or clean the site in place, these are the usual steps:

1. **Reinstall WordPress itself.** The **Dashboard > Updates** screen has a button that reinstalls the current version. It overwrites the core files and leaves `wp-content`, where your themes, plugins and uploads live, untouched, but it does not delete files an attacker has added: point 3 of this list deals with those.

{{< screenshot id="wordpress-site-hacked-03" alt="WordPress Updates screen, in the Dashboard menu, with the button that reinstalls the current version" >}}

2. **Delete every plugin and theme you do not use**, then reinstall the ones you keep from WordPress.org or from the developer's own site. Never install "nulled" (pirated) copies of paid plugins: they are a known way of spreading malware.
3. **Look for files that should not be there**: PHP files in `wp-content/uploads`, a folder meant for images and documents, not code; files with random names at the root of the site; anything in `wp-content/mu-plugins` you did not put there (plugins in that folder load automatically and cannot be switched off from the dashboard); and code you did not add in `wp-config.php` and `.htaccess`, such as redirect rules or long scrambled strings.
4. **Check the database**: the administrators once more, the site address settings, and pages, posts and widgets for scripts or links you did not write.
5. **Scan the site** with your host's malware scanner or a security plugin, then **update everything** that is left.
6. **Change the passwords and the security keys again.** If a backdoor survived until now, the attacker may have seen the ones you set in step 1.

Updating alone is not enough. [Patchstack's report on the state of WordPress security](https://www.patchstack.com/whitepaper/state-of-wordpress-security-in-2026/) counted 11,334 new vulnerabilities in the WordPress ecosystem in 2025, about 91% of them in plugins. Some flaws are made public before any fix exists, and no update can close those. Every plugin you remove is one door fewer.

### My view: rebuild if nobody maintains the site

Both hacked-site rescues I can tell you about ended with a new site. Pilotech's WordPress site was recovered and I built a new one; two years on, we still work together on SEO, cold emailing and new websites, such as the {{< a page="/projects/pilotech" >}}Pilotech site that brings its three product lines together{{< /a >}}. Eden Flats, an Airbnb concierge, called me after its site was hacked too: I built a new website, then worked on its SEO and visual identity.

All my WordPress clients have come to me wanting to switch platforms, because of the learning curve and the plugins to keep up with. WordPress is fine if you have the budget for a specialist who looks after the site every month; the trouble starts when nobody does. If you edit your site yourself and nobody maintains it, I would rebuild it on a platform you can edit without breaking it, such as Squarespace: see my {{< a key="squarespace-vs-wordpress" >}}Squarespace vs WordPress comparison{{< /a >}}, then how to {{< a key="wordpress-to-squarespace" >}}move from WordPress to Squarespace without losing your rankings{{< /a >}}.

## Step 5: remove Google's "This site may be hacked" warning

Once the site is clean and back online, Google still has to agree. To lift the label under your search result, and any red warning in the browser, Google asks you to request a review in Search Console.

1. **Verify your site in Search Console** if you have not already. A Domain property, verified with a DNS record, covers every version of your address at once; my {{< a key="google-search-console-tutorial" >}}Google Search Console tutorial{{< /a >}} shows how.
2. **Remove owners you do not know.** Open **Settings > Users and permissions**. Attackers sometimes verify themselves as owners of a site so they can submit their own sitemaps. Remove any owner you do not recognise and delete their verification token (a file, a meta tag or a DNS record; the owner's verification details show which), or they can verify again.
3. **Open Security & Manual Actions > Security issues.** The report names the problems Google found and lists example URLs. Check every one of them.

{{< screenshot id="wordpress-site-hacked-04" alt="Google Search Console, Security & Manual Actions menu open on the Security issues report" >}}

4. **Fix every issue on every page**, not just on the examples. Spam pages created by the attacker should return a 404 or 410 error so that Google drops them; do not redirect them to your home page.
5. **Click Request Review** and explain what you found, what you removed and how you closed the hole. Short and factual works best.
6. **Wait for the answer** in Search Console's messages. According to [Google's help on the Security issues report](https://support.google.com/webmasters/answer/9044101), a review takes a few days for malware and can take several weeks for a site hacked with spam. If the review fails, the report says what is still wrong: fix it and ask again.

## Your 24-hour checklist, and when to hand it over

| When | What to do | Done when |
|---|---|---|
| First hour | Site offline, passwords changed, unknown administrators removed, everyone logged out | Nobody but you can log in |
| Same morning | Copy of the infected site, logs requested, screenshots, timeline | You hold a copy you will never restore |
| Same day | Decide whether personal data was exposed; report to the ICO or the CNIL if needed; report the crime | The decision is written down |
| Within 24 hours | Restore, clean or start the rebuild; site back online or behind a holding page | Nothing suspicious left, everything updated |
| Following days | Request a review in Search Console, watch for new spam pages | Google's warning has gone |

You can do all of this yourself if a hosting control panel and a file manager do not scare you. Hand it over when:

- you cannot get into the hosting account or the domain;
- the site takes payments or holds customer accounts;
- the hack comes back after a clean-up;
- you have no backup from before the hack, or no idea when it started.

When a hacked site lands on my desk, I answer the same day or within 24 hours. The full fee is paid upfront and I fix the site; if I cannot fix it, you get a written report to hand to someone else, and 70% of the bill back.

Once the site is clean, keep it that way: my guide to {{< a key="website-maintenance" >}}website maintenance{{< /a >}} explains the upkeep a WordPress site needs and what it costs.
