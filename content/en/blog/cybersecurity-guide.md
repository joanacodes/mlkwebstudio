---
title: "Cybersecurity for small-team businesses: the complete guide"
seo_title: "Cyber security for small business: the complete guide"
description: "Cyber security for small business, in order: accounts and 2FA, payment fraud, backups, devices, leavers, the first hour of an attack, the rules and free help."
slug: "cyber-security-small-business"
translationKey: "cybersecurity-guide"
date: 2026-10-18T23:42:00+02:00
lastmod: 2026-10-18T23:42:00+02:00
category: "cybersecurity"
article_type: "pillar"
keywords: ["cyber security for small business", "small business cyber security checklist", "cyber security basics", "cyber security for small teams", "Cyber Essentials", "phishing"]
summary: "Cyber security for a small team comes down to a few habits: a password manager and two-factor authentication on every account, a call-back rule before paying new bank details, backups you have restored once, updated devices, and access removed the day someone leaves. Add a one-page plan for the first hour of an incident, and check what your clients and the law expect. Most of it is free."
cover: "cybersecurity-guide"
cover_alt: "The title “Cybersecurity for small-team businesses: the complete guide” in white on a ribbed-glass panel over a photo, with a padlock"
related: ["incident-response-first-hour", "two-factor-authentication-passkeys", "invoice-fraud-bank-details", "backups-3-2-1", "website-security-guide"]
services: ["rescue"]
faq:
  - q: "Is the antivirus built into Windows and macOS enough for a small team?"
    a: "For most small teams, yes, as long as it stays switched on and up to date: Microsoft Defender on Windows and the protections built into macOS are maintained by Microsoft and Apple. The most common attacks, phishing and account takeover, go through email and passwords, so two-factor authentication, updates and backups protect you more than a paid antivirus."
  - q: "Should we pay if ransomware encrypts our files?"
    a: "The ANSSI and the NCSC both advise against it: paying does not guarantee you get your data back, it funds the criminals and it does not prevent the next attack. Isolate the infected machines, report the attack and restore from a backup made before the infection."
  - q: "Is Cyber Essentials worth it for a small team?"
    a: "It is worth it when a client or a public contract asks for it. The certificate, renewed every 12 months, shows that five basic controls are in place, and a UK business or charity with a turnover under £20 million that certifies its whole organisation can opt in to cyber liability insurance arranged by IASME, with £25,000 (about $33,000) of cover. Otherwise, the five controls make a good free checklist."
  - q: "Who should look after cyber security in a team without an IT department?"
    a: "One named person, often the owner or an office manager, with a deputy. They keep the list of accounts and administrators, check that backups run, remove leavers' access and keep the incident plan up to date. They do not need to be technical, but they need an hour in the diary every month."
  - q: "Should we report a cyber attack to the police?"
    a: "Yes, even when nothing can be recovered. In England, Wales and Northern Ireland, report it to Report Fraud (reportfraud.police.uk or 0300 123 2040, which takes attacks in progress 24/7); in Scotland, call Police Scotland on 101. In France, start with 17Cyber, which puts victims of a serious attack in touch with a police officer or gendarme, and file a complaint."
---

Cyber security for a small team is mostly about accounts, payments and backups, not firewalls. The attacks that hit teams without an IT department are rarely clever: a stolen password opens a mailbox, a fake email changes the bank details on an invoice, a laptop nobody updated lets malware in. The defences are just as ordinary, and most of them are free.

I see the emergency side. Pilotech, an air conditioning installer near Paris, called me in a hurry when their old WordPress site was hacked. I got it back and built them a new website, and two years later we still work together on their SEO, cold emailing and {{< a page="/projects/pilotech" >}}new websites{{< /a >}}.

This guide is the hub of the cybersecurity section, in the order I would tackle things if I were starting from zero: why small teams are targets, the official baseline, then accounts, email and payments, data, people, devices, your website and apps, the first hour of an incident, insurance, the rules that apply to you and the free help available in the UK and France. Each section points to a detailed guide.

## Cyber security for small teams: why you are a target

Most attacks on small teams are not personal. Bots scan the internet for outdated software and try leaked passwords on every login page they find, phishing emails go out in bulk, and a fraudster who gets into a mailbox can read it quietly until an invoice is due. A small team is worth the effort because it pays by bank transfer, trusts email and rarely has anyone watching for odd sign-ins.

Two official sources give the scale. In the UK government's [Cyber Security Breaches Survey 2025/26](https://www.gov.uk/government/statistics/cyber-security-breaches-survey-20252026), 43% of businesses identified a breach or attack in the previous 12 months (42% of micro-businesses, 46% of small ones), and phishing, at 38% of businesses, was by far the most common kind. In France, [Cybermalveillance.gouv.fr's 2025 activity report](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/rapport-activite-2025) counts more than 500,000 requests for help, up 20% in a year: account hacking became the first threat for businesses and associations, at 21% of cases, and transfer fraud entered their top three.

There is a supply-chain side too. If you work for larger clients, you may hold their data or have access to their systems, and some of them are now required to check their suppliers' security. Your defences become part of the contract.

None of this calls for panic. The same few measures protect against the most common of these attacks, and they are the ones the authorities in both countries recommend.

## The baseline: what the NCSC, Cyber Essentials and the ANSSI recommend

You do not need to write a security policy from scratch. In the UK, the NCSC's free [small organisations guide to cyber security](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security), published in its current form in April 2026, covers email, important online accounts, devices, backups and spotting attacks. Cyber Essentials, the government-backed certification, checks five technical controls: firewalls, secure configuration, security update management, user access control and malware protection.

In France, the ANSSI and the Direction générale des entreprises publish *La cybersécurité pour les TPE/PME en 13 questions*, a self-assessment checklist that runs from backups and updates to insurance and incident response, and Cybermalveillance.gouv.fr publishes a short guide for each type of threat.

Taken together, these documents come down to a short list: **protect accounts, check payments, back up, update devices, close leavers' access and know what to do on the day**. The rest of this guide takes them in that order.

## Accounts and identity: the keys to everything else

Your email account is the master key: whoever controls it can reset the password of almost everything else, from the domain name to your accounting software. That is why accounts come first, and three habits do most of the work.

1. **One unique password per account, kept in a password manager.** Shared logins go in a team vault, not in a spreadsheet or a chat thread. {{< a key="password-manager-teams" >}}My comparison of Bitwarden, 1Password and Proton Pass for teams{{< /a >}} shows which one suits a team of up to ten that wants simple administration, which is the open-source choice and which costs least.
2. **Two-factor authentication everywhere, passkeys where you can.** Start with email, then the domain registrar, the bank, the website, payments, accounting, storage and social accounts. {{< a key="two-factor-authentication-passkeys" >}}Switching on two-factor authentication and passkeys{{< /a >}} fits in one afternoon: a passkey or a security key first, an authenticator app next, SMS only when nothing else exists.
3. **Separate admin accounts.** The account that can change everything should not be the one that opens email attachments all day. Give administrator rights to a dedicated account, and to as few people as possible.

Accounts should also be in the business's name. A domain or a Google Workspace registered to a former freelancer is a lock you no longer hold the key to.

## Email and payments: where the money goes

Phishing tops the UK survey because it works: one email with a fake login page can hand over a mailbox, and the mailbox is where the invoices are. A good share of the payment fraud against small teams starts there.

**Invoice fraud** is the classic version: a supplier's invoice, real or copied, arrives with new bank details, or someone who seems to be the boss asks for an urgent, confidential transfer. {{< a key="invoice-fraud-bank-details" >}}My guide to fake invoices and “new bank details” emails{{< /a >}} shows how to spot it, and the rule that stops it: bank details received by email are never used before a call to a number you already had, and a second person approves every new payee.

**Deepfake calls** are the same scam with a cloned voice or a fake video call built from public recordings. You will not reliably hear the difference, so {{< a key="deepfake-voice-ceo-fraud" >}}the defence against AI voice clones and deepfake calls{{< /a >}} is the same call-back rule, or a question only the real person can answer.

Banks now help a little. Since 9 October 2025, banks in the euro area must check that the payee's name matches the IBAN before a euro transfer leaves (Regulation (EU) 2024/886), and in the UK, Confirmation of Payee covers almost all Faster Payments and CHAPS transfers. A “no match” warning means stop and call; a match does not replace the call-back. UK consumers, micro-enterprises and small charities tricked into paying a fraudster by Faster Payments or CHAPS can also get their money back from their bank, with some exceptions, up to £85,000 (about $113,000) per claim; these rules are under review as of 19 October 2026.

Your domain needs protecting as well. Without SPF, DKIM and DMARC records, anyone can send emails that look as if they came from your address, which is exactly what an invoice fraudster wants. {{< a key="spf-dkim-dmarc-setup" >}}Setting up SPF, DKIM and DMARC{{< /a >}} takes a few DNS records, and it helps keep your real emails out of spam at the same time.

## Data: backups and your cloud suite

Ransomware, a deleted folder and a sync that copies the damage everywhere all end the same way when there is no backup. The 3-2-1 rule is the standard answer: three copies of your data, on two kinds of storage, one of them away from the office and ideally offline or impossible to modify. The ANSSI, which recommends it, treats an offline copy as indispensable.

It is tempting to assume Google or Microsoft does it for you. Google Workspace and Microsoft 365 keep deleted items for weeks or months, not years, and sync faithfully copies deletions and encrypted files. {{< a key="backups-3-2-1" >}}My guide to the 3-2-1 backup rule{{< /a >}} covers your files, Google Workspace and Microsoft 365, with a restore test to run every three months.

The cloud suite itself has a few settings worth more than any extra tool: two-step verification enforced for everyone, as few super or global administrators as possible, Gmail's safety settings or Microsoft's Standard preset security policy, no automatic forwarding to outside addresses, tighter file sharing and a review of connected apps. {{< a key="secure-google-workspace-microsoft-365" >}}Securing Google Workspace and Microsoft 365{{< /a >}} walks through each one, and almost all of them work on the cheapest business plans.

## People: training and leavers

Many incidents start with someone doing something reasonable at the wrong moment: clicking a link between two meetings, paying an invoice late on a Friday. Training helps when it is short, regular and about the scams your team actually receives; the NCSC guide and Cybermalveillance.gouv.fr's free awareness kit are good material for it. The rule that matters most costs nothing: **anyone who clicks something odd says so at once, and nobody is blamed for it**. The sooner you know, the cheaper it is.

Leavers are the other half. The NCSC warns that the accounts of staff and contractors who have left often stay active without anyone noticing. {{< a key="offboarding-checklist" >}}The offboarding checklist{{< /a >}} closes access in three moments: before the last day, list every account, device and code; on the day, suspend the work account rather than delete it and change the shared passwords; in the weeks after, rotate API keys, check forwarding rules and delete data on schedule. For a freelancer, plan the end of access when the job starts.

## Devices: laptops and phones

Without an IT department, every laptop is its own small server room. Six settings cover most of the risk: automatic updates, disk encryption (FileVault on a Mac, BitLocker or Device encryption on Windows), a screen lock after five minutes, a standard account for daily work, the built-in antivirus, and location and remote wipe switched on. Phones need updates, a passcode of six digits or more and apps from the official stores. {{< a key="device-security-basics" >}}My guide to laptop and phone security without an IT department{{< /a >}} explains each setting.

One date to check: Windows 10 support ended on 14 October 2025. As of 19 October 2026, a work PC still running it needs Windows 11, Microsoft's paid Extended Security Updates for organisations, or replacing.

## Your website and your apps

Your website is often the most exposed thing you own: it is public, it runs software that needs updates, and its domain also carries your email. {{< a key="website-security-guide" >}}My website security guide{{< /a >}} covers the four habits that website security rests on: accounts in the business's name with two-factor authentication, up-to-date software with few plugins, backups you have restored at least once, and a locked domain that renews automatically. If the worst has already happened, {{< a key="wordpress-site-hacked" >}}the first 24 hours after a WordPress hack{{< /a >}} are laid out step by step; WordPress is behind most of the emergency calls I get.

If you publish a mobile app, {{< a key="mobile-app-security-checklist" >}}the mobile app security checklist{{< /a >}} turns OWASP MASVS into the checks to run before launch: no secret keys in the app, permissions checked by your server on every request, tokens protected by the iOS Keychain or the Android Keystore, and TLS for all traffic.

## When something goes wrong: the first hour

The first hour decides how expensive an incident becomes, and the order of your moves matters more than their speed: contain first, investigate later. Call your bank at once if money has moved. Take back a hacked mailbox from a clean device. Cut infected computers off the network without switching them off, as the ANSSI advises, because a restart can make things worse and erase evidence. {{< a key="incident-response-first-hour" >}}The first-hour plan{{< /a >}} takes hacked email, ransomware and bank fraud one by one, with where to report each.

If personal data is involved, a second clock starts. Under Article 33 of the GDPR, and of the UK GDPR, a personal data breach must be reported to the regulator (the ICO or the CNIL) within 72 hours of becoming aware of it, unless it is unlikely to put anyone at risk. {{< a key="gdpr-data-breach" >}}What to do in the 72 hours after a data breach{{< /a >}} explains how to decide, what to send and what goes in your internal breach record. As of 19 October 2026, the EU's proposal to move to 96 hours is not law.

Write your own plan before you need it, on one page: who calls the bank, who holds the admin accounts, where the account list and the backups are, how the team reaches each other if email is down, and the numbers to call. Keep a printed copy, because a plan stored in the hacked mailbox will not help.

## Cyber insurance: when it is worth paying for

Cyber insurance pays the costs of an attack or a data breach: incident responders, restoring systems and data, lost income, extortion, notification and claims from others. The small print decides the payout: payment fraud and state-backed attacks are often excluded, and the security you declared must really be in place. {{< a key="cyber-insurance" >}}My guide to cyber insurance{{< /a >}} explains when it is worth it: when your team stops earning if its IT stops, pays suppliers by transfer, holds personal data in volume or has clients who require a policy.

In France, the law adds a condition to any payout for losses caused by an attack: you must have filed a complaint within 72 hours of discovering it (Article L12-10-1 of the Code des assurances, in force since April 2023).

## The rules: GDPR, NIS2, client questionnaires and the Cyber Resilience Act

This section describes the rules as they stand on 19 October 2026; it is not legal advice, and for a contract clause, a regulator's letter or a breach involving sensitive data, a lawyer or a DPO is worth paying for.

| Rule | Who it covers | What it means for a small team | Status on 19 October 2026 |
|---|---|---|---|
| GDPR and UK GDPR, Articles 32 to 34 | Anyone handling personal data of people in the EU or the UK, including businesses based elsewhere that offer them goods or services | Security appropriate to the risk, and breach reporting within 72 hours | In force |
| NIS2, [Directive (EU) 2022/2555](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng) | Medium and large organisations in 18 sectors, plus a few providers whatever their size | Mostly indirect: covered clients must check their suppliers | Transposition deadline passed on 17 October 2024; France has not adopted its law |
| DORA, Regulation (EU) 2022/2554 | Banks, insurers, investment firms and other financial entities | Indirect: they must manage the risk from their ICT providers | Applies since 17 January 2025 |
| UK Cyber Security and Resilience Bill | Would bring medium and large managed service providers into the UK's NIS rules | Mostly indirect, through clients | In the House of Lords, not law |
| Cyber Resilience Act, Regulation (EU) 2024/2847 | Businesses supplying software or connected products in the EU, paid or free, apps included; websites and standalone SaaS are generally out of scope | Report actively exploited vulnerabilities and severe incidents, then meet security requirements | Reporting since 11 September 2026; the rest from 11 December 2027 |

For most small teams, NIS2 arrives through clients rather than regulators. {{< a key="nis2-small-business" >}}My NIS2 guide{{< /a >}} explains who is covered, including DNS and trust service providers whatever their size, and what covered clients will ask: multi-factor authentication, backups, incident reporting. In France, the transposition bill was taken off the Assemblée nationale's agenda on 6 October 2026, and no new date had been reported at the time of writing. Most UK companies sit outside NIS2, but not outside their EU clients' contracts.

Those requests usually arrive as a {{< a key="security-questionnaire" >}}security questionnaire from a big client{{< /a >}}. Answer every question truthfully, a “yes” with evidence, a “no” with the measure you use instead or a date, “not applicable” with the reason, then keep your answers in a trust pack you can reuse for the next one.

If you offer an app or other software to people in the EU, paid or free, from inside the EU or from the UK, read {{< a key="cyber-resilience-act-apps" >}}my guide to the Cyber Resilience Act and your app{{< /a >}}. For everything else about personal data, {{< a key="gdpr-guide" >}}my GDPR guide{{< /a >}} covers businesses inside and outside the EU.

## Free help in the UK and France

A lot of good help costs nothing, and most of it comes from public bodies. {{< a key="free-cybersecurity-help" >}}My guide to free cybersecurity help in the UK and France{{< /a >}} goes through it country by country. In the UK, the NCSC's guide for small organisations, its Cyber Action Toolkit, Exercise in a Box and Early Warning are free, while Cyber Essentials certification is paid. In France, 17Cyber helps victims at any hour, MonAideCyber offers a free diagnostic of about 90 minutes with a volunteer trained by the ANSSI, and regional CSIRTs handle the first response to an incident.

## Your first month, in order

1. **Week 1, accounts.** List every account the business depends on and who has admin rights. Set up the password manager, then two-factor authentication on email, the domain registrar and the bank.
2. **Week 2, payments and email.** Write down the call-back rule and name the second approver for new payees. Publish SPF, DKIM and DMARC, and switch off automatic forwarding to outside addresses.
3. **Week 3, data and devices.** Set up 3-2-1 backups, including the cloud suite, and test one restore. Check updates, encryption and screen locks on every laptop and phone, and find any PC still on Windows 10.
4. **Week 4, people and plan.** Write the leaver checklist, run a short phishing session, print the one-page incident plan, and decide whether insurance, Cyber Essentials (UK) or a MonAideCyber diagnostic (France) makes sense for you.

After that, every three months: test a restore, review admin accounts and former staff, and reread the plan.

## When to hand it over

You do not need me, or anyone, for most of this guide. Bring in help when:

- an account or your website is still compromised after you changed the passwords;
- money has gone and you need to know how the fraudster got in;
- ransomware has encrypted your files and there is no clean backup: report it (Report Fraud, Police Scotland in Scotland, 17Cyber in France), call your insurer's incident line if you have one, and look for a specialist assured under the NCSC's Cyber Incident Response scheme in the UK, or labelled ExpertCyber in France (17Cyber can refer you);
- a client's questionnaire asks for evidence you cannot produce alone;
- nobody knows who holds the admin accounts or the domain.

For a hacked website, a hijacked account or lost access, I answer the same day or within 24 hours. The fee is paid upfront; if I cannot fix the problem, you get a written report to hand to another provider and I refund 70% of the bill. The clients I already look after get the help first and the invoice later.
