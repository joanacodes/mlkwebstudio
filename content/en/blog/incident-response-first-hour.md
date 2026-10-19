---
title: "Hacked email, ransomware or bank fraud: the first-hour plan for a small team"
seo_title: "What to do after a cyber attack: the first-hour plan"
description: "What to do after a cyber attack: the first-hour plan for a hacked mailbox, ransomware, payment fraud or a stolen laptop, and who to call in the UK and France."
slug: "what-to-do-after-cyber-attack"
translationKey: "incident-response-first-hour"
date: 2026-10-18T22:06:00+02:00
lastmod: 2026-10-18T22:06:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["what to do after a cyber attack", "cyber attack response plan small business", "hacked business email what to do", "ransomware attack what to do", "payment fraud what to do"]
summary: "In the first hour after a cyber attack, contain the damage before you investigate: call your bank at once if money has moved, take back a hacked mailbox from a clean device, and cut infected computers off the network without switching them off. Then report it: Report Fraud in the UK, 17Cyber and a police complaint in France, and the ICO or the CNIL within 72 hours if people's personal data is at risk."
cover: "incident-response-first-hour"
cover_alt: "The article title in white on a ribbed-glass panel over a photo, with a shield and a check mark"
related: ["cybersecurity-guide", "gdpr-data-breach", "invoice-fraud-bank-details", "wordpress-site-hacked", "backups-3-2-1"]
services: ["rescue"]
faq:
  - q: "How do I know if my business email account has been hacked?"
    a: "Typical signs: replies to messages you never sent, sign-in alerts from places you have not been, password reset emails you did not ask for, rules or forwarding addresses you did not create, and contacts asking about an odd email from you. One of these is enough to follow the hacked-mailbox plan."
  - q: "I clicked a link in a phishing email. Is that a cyber attack?"
    a: "It depends on what you did next. If you only opened the page and typed nothing, close it, run your antivirus and keep an eye on the account. If you entered a password, treat the account as hacked: change the password from another device, sign out every session and turn on two-step verification. If you entered card or bank details, call your bank straight away."
  - q: "Do I have to tell my customers about a cyber attack?"
    a: "Under Article 34 of the GDPR and of the UK GDPR, you must tell the people whose data was exposed, without undue delay, when the breach is likely to put them at high risk. Even when the law does not require it, warn anyone who could receive fake emails or invoices in your name."
  - q: "Will my bank refund money lost to payment fraud?"
    a: "In the UK, if you were tricked into sending the money, possibly: since 7 October 2024, banks have had to reimburse authorised push payment (APP) fraud on Faster Payments and CHAPS, with some exceptions and up to £85,000 per claim, for consumers, micro-enterprises (fewer than ten staff and a turnover or balance sheet of up to €2 million) and charities with an annual income under £1 million. These are the rules as of 19 October 2026, and they are under review. Otherwise it depends on the type of fraud and your bank's terms: report it the same day and ask for the answer in writing."
---

Your bank calls about a transfer you never made, a supplier asks why your bank details have changed, or every file on the shared drive suddenly has a strange extension. What you do in the next hour decides how much the attack costs you, and doing things in the right order matters more than doing them fast.

This guide sets out what to do after a cyber attack, with one short plan per incident: a hacked mailbox, ransomware, payment fraud, a hacked website and a lost or stolen laptop. Then you will find who to call in the UK and in France, the deadlines that start when you notice the problem, and how to write your own one-page plan. It is part of my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}}.

Some of my client relationships started with an emergency: a client I have now worked with for two years called me because their WordPress site had just been hacked. Most of what follows needs no specialist, only a phone, a clean device and a cool head.

## What to do after a cyber attack: the first ten minutes

Whatever has happened, the same five rules come before anything else.

1. Money first: if a payment is involved, call your bank's fraud line straight away, using the number on your card, in your banking app or on the bank's website, never a number from a suspicious email.
2. Contain, don't clean: disconnect, change passwords and block access, but do not delete emails, files or accounts yet. They show how the attacker got in, and your bank, the police, your insurer or a regulator may ask for them.
3. Work from a clean device: change passwords from a computer or phone that was not involved. Assume the attacker can read a hacked mailbox, so do not discuss the incident or send new passwords through it.
4. Start a log: on paper or in a note on your phone, write down the time, what you saw, what you did and who you called. Photograph ransom notes and suspicious messages.
5. One person decides, usually the owner. Nobody pays a ransom or an "urgent" invoice, deletes evidence or posts about the attack without that person's agreement.

{{< callout type="note" >}}**Write down the time you first noticed the problem.** Two 72-hour deadlines can start from that moment: notifying the data protection regulator if personal data is at risk and, in France, filing a police complaint if you want your insurer to pay.{{< /callout >}}

## Hacked mailbox: take the account back, then look for traps

After money, a hacked mailbox is what I treat as most urgent, because email is the key to everything else: whoever reads it can reset your other passwords. The steps below build on the NCSC's advice on [recovering a hacked account](https://www.ncsc.gov.uk/guidance/recovering-a-hacked-account), adding the checks that matter for a business.

1. Change the password from a clean device, along with the password of every other account that used the same one. If you can no longer sign in, use the provider's account recovery, or ask your Google Workspace or Microsoft 365 administrator to reset it.
2. Sign out every other session. Google lists the devices signed in to your account and lets you sign each one out. On Microsoft 365, a password reset alone may not end the attacker's session, so the administrator should also revoke your sessions in Microsoft Entra ID.
3. Look for forwarding rules and filters. A common trick is a rule that sends the attacker a copy of every incoming email, or quietly hides messages from your bank and your clients. In Gmail, open **Settings > See all settings** and check the **Filters and Blocked Addresses** and **Forwarding and POP/IMAP** tabs. In Outlook on the web, check **Settings > Mail > Rules**, then **Forwarding**. Delete anything you did not create.
4. Check the recovery email address and phone number, anyone given access to the mailbox, and the apps connected to the account. Attackers use all three to come back.
5. Turn on two-step verification, with an authenticator app or a passkey where you can.
6. Go through the Sent, Deleted and Archive folders for the past few weeks, looking for messages about invoices, payments or bank details: they tell you who to warn first.
7. Warn the people concerned through another channel. Phone anyone you invoice or pay, then send a short note such as this one:

```
Subject: Please ignore recent payment requests from our address

Someone accessed our email account between [date] and [date].
If you received a message from us in that period asking for a
payment, new bank details or a link to open, please ignore it
and call us on [phone number]. Our bank details have not changed.
```

{{< callout type="warning" >}}**Do not manage the incident from the hacked mailbox** until steps 1 to 3 are done: the attacker may be reading along, and a forwarding rule keeps working after a password change.{{< /callout >}}

## Ransomware: disconnect, don't switch off, don't pay

Ransomware is malicious software that encrypts your files and demands a payment for the key. You usually spot it as files that no longer open, all with the same new extension, and a ransom note on the screen or in every folder.

1. Disconnect the affected machines from the network: unplug the Ethernet cable and turn off Wi-Fi. If several computers or a server are hit, unplug the office router from the internet as well.
2. Leave them switched on. France's national cybersecurity agency, ANSSI, advises against shutting down an infected machine; hibernate it if you can. Switching off can also destroy traces that investigators need.
3. Protect your backups. Unplug any external drive or network storage that is still connected, and pause sync tools such as OneDrive, Google Drive or Dropbox so they stop copying encrypted files over your cloud copies.
4. Photograph the ransom note and write down the new file extension. Together they identify the ransomware, and the No More Ransom project (nomoreransom.org), set up by Europol, the Dutch police and security companies, offers free decryption tools for some families.
5. Report it and get help: in the UK, call 0300 123 2040, the 24/7 line for organisations under attack; in France, start with 17Cyber (both are in the table below). Call your IT provider, and your insurer if you have cyber cover.
6. Don't pay, and don't contact the criminals on your own. Paying does not guarantee a working key, it encourages the criminals to carry on, and it does not stop the same group coming back. Some groups also copy data before encrypting it, so assume personal data may have left the building and run the data check described below.
7. Restore from a clean backup made before the attack, onto machines that have been wiped or reinstalled, and only once every password has been changed.

If your backups were connected and got encrypted too, my guide to {{< a key="backups-3-2-1" >}}the 3-2-1 backup rule{{< /a >}} shows how to keep one copy out of reach next time.

## Payment fraud: call your bank before anything else

Payment fraud covers a transfer to a fraudster after a fake invoice or a "new bank details" email, a payment ordered by someone pretending to be the boss, and card or account transactions you never made. In every case the bank is the first call, because a payment can sometimes still be stopped if both banks act quickly.

1. Call the fraud line on the number from your card or banking app. Give the amount, the date, the beneficiary's name and account details, and ask the bank to stop or recall the payment and to alert the receiving bank. Note who you spoke to and the case reference.
2. Block what is still exposed: cards, pending payments and online banking access. Change your online banking password from a clean device.
3. Keep the evidence: the fake invoice, the email itself (your bank or the police will tell you how to send it) and the times of your calls.
4. Report it: to Report Fraud in the UK; with a complaint to the police or the gendarmerie in France.
5. Find the leak. If the fake request came from your own address or a real supplier's, in the middle of a real conversation, a mailbox has been hacked somewhere: run the mailbox plan above, and phone the supplier.

In the UK, if you were tricked into making the payment, ask your bank about an authorised push payment (APP) fraud claim (the questions at the end of this page explain who is covered). My guide to {{< a key="invoice-fraud-bank-details" >}}invoice fraud{{< /a >}} explains how these scams work and the checks that stop them.

## Hacked website or stolen laptop

### Hacked website

Put the site into maintenance mode or take it offline from your host's control panel. Change the passwords of the hosting account, the site's admin and the domain registrar, and remove administrator accounts you do not recognise. Keep a copy of the hacked site before cleaning anything. If the site has contact forms, customer accounts or a shop, check whether personal data was exposed. The full procedure, from the first hour to lifting Google's warning, is in {{< a key="wordpress-site-hacked" >}}my guide to a hacked WordPress site{{< /a >}}, and most of it applies to other platforms.

### Lost or stolen laptop or phone

1. Lock it and erase it remotely if that was set up: Find My on Apple devices, Google's equivalent on Android, or your device management tool if you use one (Microsoft Intune, for example).
2. Sign the device out of your email, cloud storage and banking, and change the passwords saved in its browser.
3. Report the theft to the police: your insurer will want the reference.
4. Decide whether it is a personal data breach. If the disk was encrypted (BitLocker on Windows, FileVault on a Mac) and the password was not stored with it, the risk to people is usually low: Article 34(3)(a) of the GDPR then spares you from informing them, but record the incident in your breach log anyway (Article 33(5)). An unencrypted laptop full of client files is another matter.

## Who to call in the UK and France, and the 72-hour deadlines

| Who | United Kingdom | France | When |
|---|---|---|---|
| Your bank | Fraud line on your card or in your app | Same | At once, if money has moved |
| Police (cybercrime) | [Report Fraud](https://www.reportfraud.police.uk/), online or 0300 123 2040; in Scotland, Police Scotland on 101 | 17Cyber, then a complaint | Same day; in France, within 72 hours if you want your insurer to pay |
| National help | NCSC, for a significant attack | Cybermalveillance.gouv.fr, through 17Cyber | Same day |
| Data protection regulator | ICO | CNIL | Within 72 hours, if personal data is at risk |
| Insurer | The policy's incident line | Same | As early as the policy requires |

**In the UK**, Report Fraud replaced Action Fraud on 4 December 2025 and takes reports of fraud and cyber crime for England, Wales and Northern Ireland. For an attack in progress, the NCSC's page on [responding to a cyber attack](https://www.ncsc.gov.uk/information/responding-to-a-cyber-attack) gives 0300 123 2040 as a 24/7 line for organisations, and asks you to report significant attacks to the NCSC itself. The NCSC is not a regulator: personal data breaches go to the ICO.

**In France**, 17Cyber (17cyber.gouv.fr), launched in December 2024 by the police, the gendarmerie and Cybermalveillance.gouv.fr, asks a few questions, gives advice, opens a chat with a police officer or gendarme when the attack is serious, and can refer you to a provider referenced or labelled by Cybermalveillance.gouv.fr. The complaint itself is filed at a police station or gendarmerie, or in writing to the public prosecutor. Under Article L. 12-10-1 of the French Insurance Code, in force since 24 April 2023, an insurer pays for cyber attack losses only if that complaint is filed within 72 hours of the victim becoming aware of the attack.

**Personal data.** If the attack exposed, altered, encrypted or deleted personal data, it is a personal data breach. Article 33 of the GDPR, and of the UK GDPR, requires you to notify the regulator without undue delay and, where feasible, within 72 hours of becoming aware of it, unless the breach is unlikely to put people at risk. [The ICO explains how to decide and report](https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach); in France, the CNIL has an online notification form. If you are based outside the EU, in the UK or elsewhere, and you sell to people in the EU, the EU GDPR can apply to their data too (Article 3(2)). My guide to {{< a key="gdpr-data-breach" >}}the first 72 hours of a data breach{{< /a >}} covers that decision step by step.

If you have cyber insurance, call its incident line early: the policy may set a deadline for telling the insurer and name the responders you have to use. My guide to {{< a key="cyber-insurance" >}}cyber insurance{{< /a >}} lists what to check before you need it. This guide explains the rules as they stand on 19 October 2026; it is not legal advice, and when many people's data or sensitive data is involved, a lawyer or your data protection officer is worth the call.

## Write your one-page plan before you need it

The plans above work far better when the phone numbers are already written down. One page is enough:

- who decides, and their deputy, with personal mobile numbers;
- who to call: the bank's fraud line, your IT provider, web host and domain registrar, insurer (with the policy number), accountant, and the reporting services above;
- how to reach the team without email, for instance a group chat on your phones;
- where the backups are, how to restore them, and when you last tested a restore;
- where the admin access lives: the password manager, and who holds the recovery codes for the main accounts;
- who tells clients what, so nobody improvises.

**Keep the plan offline**: printed in a drawer and saved on the owner's phone. A plan stored on the encrypted server or in the hacked mailbox is no use on the day. Review it twice a year, and whenever someone joins or leaves the team.

{{< callout type="tip" >}}**Rehearse once.** Walk the team through one scenario, such as a fake "new bank details" email, in half an hour. The gaps show up straight away: a number nobody has, a password only one person knows.{{< /callout >}}

You do not have to prepare alone. In the UK, the NCSC's Small Business Guide: Response & Recovery walks you through planning your response; in France, MonAideCyber offers a free diagnostic. My guide to {{< a key="free-cybersecurity-help" >}}free cybersecurity help{{< /a >}} covers the other free schemes in both countries.

## When to handle it yourself, and when to hand it over

You do not need me, or anyone else, for the first hour: it is phone calls, passwords and unplugged cables, and the owner is the right person to make those decisions. Bring in a specialist when:

- ransomware has hit more than one machine, or a server;
- you cannot get back into the main admin account, the domain or the hosting;
- the personal data of many people, or sensitive data, may have leaked;
- the attacker comes back after you have changed the passwords;
- you have no backup from before the attack.

Ransomware across your computers needs an incident response team: the one your insurer names, your IT provider's, in the UK a company assured under the NCSC's Cyber Incident Response scheme (its Standard level covers most incidents), or in France a provider that 17Cyber refers you to. My own rescue work covers hacked websites and lost access to accounts and domains. When a client calls me with an emergency, I answer the same day or within 24 hours; if I cannot fix the problem, they get a report to hand to another specialist and 70% of the bill back.

Whichever route you take, keep the log going until the end: it is what your bank, your insurer and the regulator will ask for, and it is the first draft of next year's one-page plan.
