---
title: "How to regain access to your website when a former provider holds the keys"
seo_title: "Regain access to your website from a former web designer"
description: "Regain access to your website when a former web designer holds the keys: the accounts to reclaim, a request email template, and what to do if they refuse."
slug: "regain-access-to-website"
translationKey: "regain-website-access"
date: 2026-10-17T09:37:00+02:00
lastmod: 2026-10-17T09:37:00+02:00
category: "website-rescue"
article_type: "guide"
keywords: ["regain access to website", "web designer won't give me access to my website", "get website back from web developer", "transfer website ownership", "website handover checklist"]
summary: "To regain access to your website, list every account it depends on (domain, DNS, hosting, CMS or builder, email, Google tools) and ask your former provider in writing to move each one into your business's name. Take the domain and email back first: many other accounts can be recovered through them. If the provider refuses or has vanished, use Google's own procedures, a formal letter and, as a last resort, a rebuild in accounts you own."
cover: "regain-website-access"
cover_alt: "Laptop and binders on a desk beside a shield with a tick and the words Admin, FTP, DNS"
related: ["recover-domain-name", "website-security-guide", "wordpress-site-hacked", "google-search-console-tutorial", "google-business-profile-setup"]
services: ["rescue"]
faq:
  - q: "Can a web designer refuse to give me access to my website?"
    a: "If the accounts were opened in your business's name, no: you can deal with each platform directly. If they sit in the designer's own accounts, the designer controls them until they hand them over, so your levers are the contract, a written request with a deadline and, if that fails, a solicitor."
  - q: "Can I log in with a password the web designer once gave me?"
    a: "To an account in your business's name, yes, and change the password straight away. To the designer's own account, no: using it without their permission can be an offence under the Computer Misuse Act 1990, even if your website is inside it."
  - q: "Who owns my website's design and code?"
    a: "The texts you wrote and the photos you supplied remain yours to use. Copyright in a design or code made by a freelancer or an agency stays with them unless your contract assigns it to you, and in the UK an assignment must be in writing and signed (Copyright, Designs and Patents Act 1988, section 90). If the designer claims the site itself, ask a solicitor."
  - q: "How long does it take to regain access to a website?"
    a: "With a cooperative provider, a few days: a Squarespace or Wix transfer takes a few clicks on each side, and Google's tools let them add you in minutes. Without cooperation, count in weeks: a Business Profile access request alone gives the current owner three days to answer, and a dispute that needs a solicitor takes longer."
  - q: "Will I lose my Google rankings if I have to rebuild the site?"
    a: "Not necessarily. Rankings depend on your domain, your page addresses and your content more than on the platform, so keep the domain, reuse your texts and redirect every old address to its new page with a 301 redirect."
---

Your website works, but the logins are not yours. A former web designer, agency or developer set everything up in their own accounts, and now they have moved on, stopped answering or want an invoice settled before they let go. You can regain access to your website, but rarely with a single password: a site is a chain of accounts, and each one is handed back on its own.

Getting a site back is often the first job of a rescue. When Pilotech, an HVAC installer near Paris, called me urgently because its WordPress site had been hacked, the site had to be recovered before I could build the new one. We have worked together ever since, on SEO, cold emailing and {{< a page="/projects/pilotech" >}}new websites{{< /a >}}.

This guide covers every account except the domain name itself, which has its own rules and its own guide: {{< a key="recover-domain-name" >}}how to get your domain name back from a former web designer{{< /a >}}. For hacks, outages and the other rescue jobs, my {{< a key="website-security-guide" >}}website security guide for small businesses{{< /a >}} puts them in order.

## The access checklist: what to reclaim

A website depends on more accounts than most owners realise, and a provider rarely hands back the ones nobody names. List them before you write to anyone:

| Access | Where it lives | What to ask for |
|---|---|---|
| Domain name | The registrar: Namecheap, OVH, GoDaddy… | Your business as registrant, and the domain in your own account |
| DNS | Wherever the name servers point: the registrar, the host or a service such as Cloudflare | Access to the zone, or a full export of its records |
| Hosting | The host's customer area: OVH, Hostinger, Infomaniak… | The service moved to your account, or a complete backup |
| Website builder or CMS | Squarespace, Wix, Shopify, WordPress… | Ownership of the site, or an account with the Administrator role |
| SFTP and database | The hosting control panel | Your own SFTP login, the database details and an export |
| Business email | Google Workspace, Microsoft 365 or the host's mail service | The top administrator role, or the mailboxes exported |
| Google Business Profile | Google's Business Profile manager | The owner role, then primary ownership |
| Search Console | Google Search Console | Owner status, which you can verify yourself |
| Analytics and Tag Manager | Google Analytics, Google Tag Manager | The Administrator role at account level |

Then add whatever else the site touches: social media pages, Google Ads and Meta ad accounts, booking and payment tools, the licences of a paid theme or plugins, and any service that receives your contact forms.

## Regain access to your website in the right order

The accounts depend on one another. Password resets are sent to an email address, Google checks ownership through the domain, and the site itself runs on the hosting. Work in this order:

1. **The domain and its DNS.** Whoever controls the domain decides where the website and the email go, and can prove ownership to Google.
2. **Email.** Every "forgot password" link lands in a mailbox. Make sure the address on each account is one you read, and that you can administer the mailboxes themselves.
3. **Hosting and the site's admin.** The files, the database and the dashboard you edit the site from.
4. **Google's tools.** Losing them does not take the site down, but they hold things you cannot rebuild: your reviews and your Analytics history.

{{< callout type="warning" >}}**Do not cancel anything yet.** Until every access has moved, keep the provider's hosting or maintenance contract running and pay what is due: a hosting account closed for non-payment takes the website, and sometimes the email, with it.{{< /callout >}}

## Ask in writing, account by account

A precise request is easier to say yes to than "give us our website back", and it leaves a record. Name each access, say what you want done with it and set a deadline of 7 to 14 days. If you genuinely owe an invoice, settle it or agree on it first: that removes the provider's main argument.

```
Subject: Handover of the accesses to [yourbusiness.co.uk]

Hello [first name],

Thank you for your work on our website. We are now taking over its
management, so could you please, by [date]:

1. Website: transfer ownership of the [Squarespace / Wix] site to
   [email], or create a WordPress account with the Administrator role
   for [email].
2. Hosting: move the hosting to our own account at [host], or send us
   a complete backup (every file and a database export).
3. SFTP and database: send the server address and the SFTP and
   database login details.
4. Email: make [email] a super administrator (Google Workspace) or
   Global Administrator (Microsoft 365) of our email account.
5. Google: add [email] as an owner of our Business Profile and of our
   Search Console property, and as an administrator of our Analytics
   and Tag Manager accounts.
6. DNS: send an export of the DNS zone of [yourbusiness.co.uk].
7. Licences: the list of paid themes, plugins and tools the site uses.

Please do not delete or change anything until the handover is complete.
If anything is still owed, send me the invoice and I will settle it.

Many thanks,
[Name, role, phone number]
```

{{< callout type="tip" >}}**Ask to be added, not for passwords.** Almost every platform here lets the provider invite your account, and you remove theirs afterwards. A shared password leaves them the same access as you, with no trace of who changed what.{{< /callout >}}

## How the handover works on each platform

### Squarespace and Wix: an ownership transfer

A website builder keeps the site inside an account, so you do not take files away: you take over the account. Wix says a site cannot be exported to another host, and Squarespace's export is partial (a WordPress-format file, without products, events or custom CSS).

- **Squarespace.** The owner invites you as a contributor and, once you have accepted, transfers the site to you from the **Permissions & Ownership** panel (their name under Owner, then **Transfer Ownership**). The subscriptions and the Squarespace domains attached to the site move with it, but the payment details do not: add your card before the next renewal, or the provider's card is charged. The former owner stays on as a contributor until you remove them. A domain billed apart from the site, such as a name migrated from Google Domains, changes owner separately ([Squarespace's help page](https://support.squarespace.com/hc/en-us/articles/206537197-Change-the-site-owner) covers both).
- **Wix.** From the site's dashboard, the owner opens **Site Actions**, chooses **Transfer site** and enters the email address of your Wix account; you accept from the confirmation email. A domain and Google Workspace mailboxes bought through Wix can move with the site, and from then on you pay the subscriptions ([Wix's help page](https://support.wix.com/en/article/transferring-a-premium-site-to-another-wix-account) has the details).

Shopify, Webflow and the other builders have their own procedure: search their help centre for "transfer ownership".

### WordPress: an Administrator account, then the server

Ask for an account in your own name with the **Administrator** role. Do not settle for Editor, which cannot manage plugins, themes or users. Once you are in, delete the provider's account, and when WordPress asks what to do with the content that account owns, attribute it to yours: choosing deletion would remove every page and post they created.

If you hold the hosting but not the dashboard, you can still get in. Many hosting panels have a WordPress tool that resets an administrator's password, and the database offers another route. If you find administrator accounts nobody recognises, treat it as a hack and follow my guide to a {{< a key="wordpress-site-hacked" >}}hacked WordPress site{{< /a >}}.

### Hosting, SFTP and the database

When the hosting sits in the provider's customer account, the host takes instructions from them only. Either the provider moves the service to your account, where the host allows it, or they send a complete backup and you move the site to hosting in your own name.

A complete backup has two parts: every file of the site (for WordPress, the whole folder, `wp-content` included) and an export of the database, usually a `.sql` file made with phpMyAdmin or the host's backup tool. Check that the archive opens before the old hosting closes, and keep a copy away from the server.

I have had to work in OVH and Hostinger accounts because that is where clients' sites already were, and I find both panels complicated for a small business owner. If you are lost, ask the host's support where the backups and the SFTP settings are rather than guessing. Once the hosting is yours, create your own SFTP login, change the database password (on WordPress, the new one also goes into `wp-config.php`) and delete the provider's logins.

### Business email

Your domain's MX records tell you who hosts your mailboxes. Three cases:

- **Google Workspace or Microsoft 365**: ask to be made super administrator (Google) or Global Administrator (Microsoft), then remove the provider's admin account. If they bought the subscription for you, ask who is billed and how the billing moves to you.
- **The host's own mail service**: the mailboxes disappear with the hosting, so export them, or have your new email provider import them, before the old account closes.
- **A provider who vanished with the only admin account**: Google Workspace has a recovery procedure that relies on proving you control the domain; for Microsoft 365, contact Microsoft's support.

### Google Business Profile, Search Console and Analytics

**Search Console needs nothing from the provider.** Once you control the domain's DNS, add a Domain property and verify it with a TXT record in your DNS: you become a verified owner in your own right, and my {{< a key="google-search-console-tutorial" >}}Search Console tutorial{{< /a >}} shows how. Then remove the provider under **Settings > Users and permissions** of each property. A former verified owner can come back while one of their verification tokens is still in place (an HTML file on the server, a meta tag in your pages or a DNS record), so delete those too, as [Google's help explains](https://support.google.com/webmasters/answer/7281924).

**Business Profile has a request procedure.** Ask the provider to add you as an owner and to transfer primary ownership to you. If they do not answer, find your business on Google, choose to claim it, then **Request access**: Google gives the current owner three days to respond, and the link in your confirmation email shows the status and what you can do next, including an appeal if your request is refused ([Google's help page](https://support.google.com/business/answer/4566671?hl=en-GB)). Do not open a second profile to get round the problem: Google allows one profile per location, and your reviews stay on the first. Once you are in, my {{< a key="google-business-profile-setup" >}}Google Business Profile setup tutorial{{< /a >}} covers the rest.

**Analytics and Tag Manager have no claim procedure.** Access only comes from someone who already has it. Ask for the Administrator role at account level, then remove the provider. Failing that, create a new property and add its tag to your pages: nothing breaks, but the history stays with the provider. Either way, remove from your pages any tag or Tag Manager container you do not control: whoever runs a container on your site can add scripts to it.

## If the provider is unreachable or refuses

Start with what you can take back without them: the domain if your business is the registrant, Search Console through your DNS and your Business Profile through Google's request. Then work through these, in order.

**The platforms' support.** Support teams act on the account holder's instructions, and the account holder is whoever opened the account, not whoever paid for the site. If it was opened with your email address or in your company's name, use the account recovery and send support your proof: invoices, contract, company registration, ID. If it is the provider's own account, expect support to refuse without their consent, although Squarespace, for one, reviews ownership requests case by case when the current owner is unavailable, after checking your identity.

**Your customers' data.** If the site collects personal data (contact forms, orders, client accounts), the provider hosting it processes that data on your behalf. Article 28 of the GDPR, which the UK GDPR keeps, requires your contract with a processor to oblige them to return or delete that data at the end of the service, at your choice. Cite it in your letter: handing back your customers' data is part of their job, not a favour.

**A formal letter.** If the deadline passes, send the request by recorded delivery, then ask a solicitor for a letter before action. When the provider claims the site itself is theirs, the question is legal rather than technical, and a solicitor will serve you better than I would.

**A rebuild, as a last resort.** If nothing works, rebuild the site in accounts you own and point your domain at it. The texts you wrote and the photos you supplied are yours to reuse, and old versions of your pages are often on the Wayback Machine (web.archive.org). Keep the same page addresses, or redirect each old one to its new page, as when {{< a key="wordpress-to-squarespace" >}}moving a site without losing your Google rankings{{< /a >}}.

## Put the handover in your next contract

Most of these situations come from a contract that never mentions the end of the relationship. With your next provider, or when you renew, ask for:

- every account opened in your business's name, with an email address you control, from day one, the provider working as an invited user;
- a list of the accesses, kept up to date;
- a handover clause stating what the provider returns at the end (accesses, files, a database export, documentation), in what format, within what time and at what cost;
- the copyright in the design and code assigned to your business in writing, or a licence that lets you modify them and hand them to someone else;
- renewals billed to your business, on your card.

## Once you are back in, and when to hand it over

Back in control, close the doors behind the provider:

1. Change every password and switch on two-factor authentication.
2. Remove the provider's users, invitations, SFTP logins and API keys everywhere.
3. Update the recovery email addresses and phone numbers on every account.
4. Put renewals on your own card and switch on auto-renew for the domain.
5. Keep an access register in a password manager: each account, its login email, who has access and when it renews.
6. Take a full backup and store it away from the hosting.

You do not need me, or anyone else, for most of this: the checklist, the email and the Google requests take a few hours, and a cooperative provider can finish the job within days. Hand it over when the provider refuses, when the accounts are tangled across several companies, or when the site is down or hacked while you wait.

Access retrieval is a fixed-price job for me, and I answer rescue requests the same day or within 24 hours. You pay the full fee; if I cannot get the access back, you receive a written report to hand to someone else and 70% of the bill is refunded. For clients I already work with, the emergency comes first and the invoice after.
