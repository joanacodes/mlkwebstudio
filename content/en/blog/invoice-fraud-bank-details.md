---
title: "Fake invoices and “new bank details” emails: how to spot and stop payment fraud"
seo_title: "Invoice fraud: how to spot and stop fake bank details"
description: "Invoice fraud often starts with a “new bank details” email. The red flags, five rules that stop it, what your bank now checks and what to do if you have paid."
slug: "invoice-fraud-fake-bank-details"
translationKey: "invoice-fraud-bank-details"
date: 2026-10-18T21:48:00+02:00
lastmod: 2026-10-18T21:48:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["invoice fraud", "mandate fraud", "change of bank details scam", "invoice fraud small business", "CEO fraud", "business email compromise", "Confirmation of Payee"]
summary: "Invoice fraud gets you to pay a genuine-looking invoice, or an urgent transfer that seems to come from your boss, into a criminal's account, usually after an email announcing new bank details. The defence is a rule, not a tool: never use bank details received by email until you have confirmed them on a phone number you already had, and have a second person approve every new payee. If the money has gone, call your bank at once and report it."
cover: "invoice-fraud-bank-details"
cover_alt: "The title in white on a ribbed-glass panel over a photo of stacked envelopes with a notification badge"
related: ["deepfake-voice-ceo-fraud", "incident-response-first-hour", "spf-dkim-dmarc-setup", "cyber-insurance", "cybersecurity-guide"]
services: ["rescue"]
faq:
  - q: "Will my bank refund a payment I sent to a fraudster?"
    a: "In the UK, possibly: since 7 October 2024, banks must reimburse authorised push payment fraud on Faster Payments and CHAPS, with some exceptions, up to £85,000 per claim made within 13 months (rules as of 19 October 2026). This covers consumers, smaller charities and micro-enterprises (fewer than ten staff, with a turnover or balance sheet total of €2 million or less). Larger companies depend on their bank's goodwill and on their insurance."
  - q: "Should I make a small test payment to check new bank details?"
    a: "No. A test payment only proves that the account exists and accepts money, and a fraudster will gladly confirm that your £1 arrived. Only a call to a number you already had tells you who owns the account."
  - q: "What is the difference between phishing and invoice fraud?"
    a: "Phishing tries to steal a password or install malware; invoice fraud tries to get a payment. The two are often linked: a phished password gives the criminal the mailbox from which the fake bank details are sent."
  - q: "Does cyber insurance cover invoice fraud?"
    a: "Sometimes. Many policies exclude social engineering and fund transfer fraud, or cap them at a low amount, so read that clause and its conditions before you rely on it."
---

The email looks ordinary. A supplier you have paid for years writes in your usual thread: they have changed banks, the updated invoice is attached, please use the new account from now on. The logo is right, the amount is right, even the tone is right. Only the account number belongs to someone else.

That is invoice fraud, which UK banks also call mandate fraud and French businesses know as *fraude au faux RIB*. It catches careful people because nothing in it looks wrong, and it hits small teams hard, because the person who reads the email is often the person who pays it.

It is also one of the few cyber threats you can stop with a rule rather than a budget. For the wider picture, start with my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}}.

## What invoice fraud looks like

Invoice fraud is any trick that gets you to send a genuine-looking payment to an account a criminal controls. It comes in four main versions.

| Version | What you see | What is really happening |
|---|---|---|
| Change of bank details | An email or a letter from a supplier announcing new bank details | The sender uses a lookalike domain or a forged sender address |
| Hijacked thread | A reply inside a real conversation, with the real invoice and new bank details | Someone has broken into the supplier's mailbox, or yours, and waited for an invoice to fall due |
| CEO fraud | A message from "the boss" asking for an urgent, confidential transfer | A lookalike address, a personal account "because I'm travelling", sometimes a cloned voice |
| Invoice for nothing | An official-looking invoice or renewal notice for a listing, a domain or a service nobody ordered | A bet that someone will pay without checking |

The hijacked thread is the version that catches experienced people. The attacker reads the mailbox quietly, waits for a payment to be due, then replies with a "corrected" invoice. Attackers often add a mail rule that hides the real supplier's replies, so nobody notices that the conversation now has two authors.

CEO fraud, the *fraude au président* in France, swaps routine for authority: urgency, secrecy ("don't mention this until the deal is announced") and a reason you cannot check right now. Voice clones have made the phone version more convincing; I cover that in {{< a key="deepfake-voice-ceo-fraud" >}}AI voice clones and the new CEO fraud{{< /a >}}.

The losses are not small. In 2025, complaints to the FBI's [IC3](https://www.ic3.gov/) reported just over $3 billion lost to business email compromise, the family these scams belong to. In the UK, [UK Finance's Annual Fraud Report 2026](https://www.ukfinance.org.uk/system/files/2026-06/UK%20Finance%20Fraud%20Report%202026.pdf) counted £576.4 million lost to authorised push payment fraud in 2025, 19 per cent more than the year before. That figure covers every scam where victims send the money themselves, invoice and CEO fraud included.

## The red flags in an email or an invoice

No single sign proves fraud, and a well-prepared scam may show none of them. Treat each one as a reason to pick up the phone, not as a test the email has to fail.

- **Any change of bank details sent by email**, whatever the reason given. This one flag covers most cases on its own.
- An account holder name that is not the company you are paying, with an explanation ready ("our new group account", "our factoring partner").
- A bank or a country that does not fit: a local supplier suddenly banking abroad, or with an online bank it has never used.
- Pressure: pay today, before a penalty, before the weekend, without telling anyone.
- A sender address that is almost right: one extra letter, a hyphen, .co instead of .co.uk, "rn" in place of "m".
- A reply-to address that differs from the sender, or a new phone number in the signature.
- Anything that discourages a call: "I'm in meetings all day, email only."
- A small change in tone, spelling or sign-off from someone you know well.

The PDF itself proves nothing. Logos, letterheads and invoice numbers take seconds to copy, and in a hijacked thread the invoice is the real one with two lines edited.

## Five rules that stop most invoice fraud

These are habits, not software. None of them needs an IT department, and you do not need me or anyone else to set them up: write them on one page, tell the team, and apply them every time, to the boss included.

1. **Call back on a number you already have.** New or changed bank details, from anyone, are confirmed by phone on a number from your own records or the contract, never from the email, the invoice or the signature. Ask the supplier to read the details to you rather than reading them out yourself.
2. **Two people for new payees and large amounts.** One person enters the payment, another approves it. Set the threshold to your size: every new payee, every change of details, and every payment above an amount you choose. If your business banking offers a second approver, switch it on; if not, make it a written rule.
3. **A delay for anything new.** New bank details are never used on the day they arrive. A 24-hour pause costs nothing with a genuine supplier and removes the pressure every scam relies on. If you work alone, this delay is your second person: sleep on it.
4. **A supplier file.** Keep verified bank details in one place with restricted access (your accounting software is a good home for them), with the date, who checked and the number they called. Nobody updates bank details from an inbox.
5. **The boss rule.** The owner tells the team, in writing: "I will never ask you for an urgent or confidential payment by email, text or voice message. If it looks like I am, call me back." Then the owner keeps that promise, and nobody is ever told off for checking.

{{< callout type="tip" >}}**A ten-second call script:** "Hello, it's [name] from [company]. We've received new bank details for your invoices. Could you read me the account details you want us to use?" If they know nothing about it, you have just stopped a fraud, and you should tell them their mailbox may have been compromised.{{< /callout >}}

## What your bank checks: Confirmation of Payee and Verification of Payee

Banks in the UK and the EU now compare the name you type with the account you are paying, before the money leaves. It is a useful safety net with clear limits.

### In the UK: Confirmation of Payee

When you set up a new payee, your bank asks the receiving bank whether the name matches the sort code and account number. You get a match, a close match (with the real name shown) or no match. Since the regulator extended it to far more banks and payment firms in October 2024, it covers almost every Faster Payments and CHAPS transfer. For a company, type the name exactly as it appears on the supplier's account and choose personal or business correctly, or you may get a close match for an innocent reason.

### In the EU: Verification of Payee

Since 9 October 2025, banks in the euro area must check the payee's name against the IBAN before you confirm a euro transfer within the EU, instant or standard. The rule is Article 5c of the SEPA Regulation (EU) No 260/2012, inserted by the [Instant Payments Regulation (EU) 2024/886](https://eur-lex.europa.eu/eli/reg/2024/886/oj); banks in EU countries outside the euro area must follow by 9 July 2027. The answer is a match, a close match (the bank shows the real name), no match, or a check that could not be done.

Three details matter for a business:

- You can still send the payment after a warning, and if it reaches the wrong person after a "no match", getting it back will be hard.
- The regulation lets business customers opt out of the check, but only for payments sent as a batch. If you pay suppliers through a bulk file, ask your bank whether the check runs on it.
- The EU rule does not bind UK banks. If you pay a French or German supplier in euros from a UK account, ask your bank what it checks.

### What these checks cannot do

Both checks confirm a name, not a story. If the email gives you a plausible reason for a different name, you will type that name and the check will return a match. An account opened under a name close to your supplier's may also return a close match that is easy to wave through. **A "no match" is a stop sign; a match is not a green light.**

## Protect your own name: your mailbox and your domain

Invoice fraud also works the other way round: criminals send fake bank details to your clients in your name. Three habits make that much harder.

- Publish a DMARC policy. With SPF, DKIM and a DMARC policy set to quarantine or reject, an email that forges your exact address fails at the receiving end. It does nothing against lookalike domains, but it closes the easiest door. My {{< a key="spf-dkim-dmarc-setup" >}}step-by-step SPF, DKIM and DMARC guide{{< /a >}} shows how.
- Lock your mailboxes. A hijacked thread usually starts with a stolen password. Switch on {{< a key="two-factor-authentication-passkeys" >}}two-factor authentication or passkeys{{< /a >}} for every mailbox, and look from time to time for forwarding rules or connected apps nobody on the team created.
- Say it on every invoice. A line such as "Our bank details will never change by email; if you receive such a message, call us on [number]" costs nothing and gives your clients permission to check.

## Already paid? The first hour

Speed beats everything here. A transfer can sometimes be stopped or frozen while the money is still in the receiving account; once it has been moved on, it is usually gone.

1. **Call your bank's fraud line now**, using the number on its website or your card, never one from the email. Ask them to stop or recall the payment and to alert the receiving bank. Note the time and the name of the person you spoke to.
2. Report it. In England, Wales and Northern Ireland, use [Report Fraud](https://www.reportfraud.police.uk/), the service that replaced Action Fraud on 4 December 2025, online or on 0300 123 2040. In Scotland, call Police Scotland on 101. In France, file a complaint (*plainte*) with the police or the gendarmerie, within 72 hours if your own mailbox was hacked: under Article L. 12-10-1 of the French Insurance Code, an insurer can only pay for cyber attack losses after such a complaint. The government's 17Cyber service tells you what to do next and, for serious cases, connects you online with a police officer or gendarme.
3. Warn the real supplier by phone, and your team. If the email came from their mailbox, they have other clients to warn. If it came from yours, treat it as a hacked mailbox: change the password, sign out every session, delete unknown forwarding rules and apps.
4. Keep the evidence: the emails with their full headers, the invoice, the bank confirmation and your call notes. Do not delete the attacker's messages.
5. Tell your insurer or broker the same day if you have a cyber or crime policy; my article on {{< a key="cyber-insurance" >}}what cyber insurance covers{{< /a >}} explains what to look for.

If a mailbox was breached, the personal data in it may have been exposed too, which can mean reporting a breach to the ICO or the CNIL within 72 hours (Article 33 of the GDPR and of the UK GDPR). My {{< a key="incident-response-first-hour" >}}first-hour plan for a hacked mailbox or bank fraud{{< /a >}} covers that side. This is general information, not legal advice: when a large sum is at stake, or your bank will not help, a solicitor who handles banking disputes is worth the fee.

## Your one-page payment procedure

Write this down this week. It fits on one page and takes less than an hour to agree:

- Bank details come only from the supplier file; any change is confirmed by a call to a known number, then waits 24 hours.
- Two people approve any new payee, any change of details and any payment above your threshold.
- The boss rule is written, signed and known by everyone who can pay.
- Your invoices say that your bank details never change by email.
- Your domain publishes DMARC, and every mailbox has two-factor authentication.
- Your bank's fraud number and the reporting service sit next to whoever makes payments.

When to hand it over: if you suspect your own mailbox or domain was used, or you cannot tell, get it checked before you trust it again. The services in my guide to {{< a key="free-cybersecurity-help" >}}free cybersecurity help in the UK and France{{< /a >}} are a good first stop, and the rest of this checklist stays yours to run.
