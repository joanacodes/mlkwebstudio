---
title: "Data breach: what to do in the first 72 hours"
seo_title: "GDPR data breach notification: what to do in 72 hours"
description: "GDPR data breach notification, step by step: when the 72-hour clock starts, how to report to the ICO or the CNIL, when to tell customers and what to record."
slug: "gdpr-data-breach-notification"
translationKey: "gdpr-data-breach"
date: 2026-10-18T21:30:00+02:00
lastmod: 2026-10-18T21:30:00+02:00
category: "gdpr"
article_type: "guide"
keywords: ["GDPR data breach notification", "personal data breach 72 hours", "report a data breach to the ICO", "GDPR Article 33", "data breach response plan", "notify individuals of a data breach"]
summary: "Under the GDPR, you must report a personal data breach to the data protection authority within 72 hours of becoming aware of it, unless it is unlikely to put anyone at risk, and tell the people affected without undue delay when the risk to them is high. You can report in stages, and every breach goes into your internal breach record, reported or not. As of 19 October 2026, the EU's proposal to move to 96 hours is not law."
cover: "gdpr-data-breach"
cover_alt: "The title “Data breach: what to do in the first 72 hours” in white on a ribbed-glass panel over a photo, with a shield bearing a check mark"
related: ["incident-response-first-hour", "gdpr-fines-small-business", "cyber-insurance", "digital-omnibus-gdpr", "website-security-guide"]
services: ["rescue"]
faq:
  - q: "Does the 72-hour deadline include weekends and bank holidays?"
    a: "Yes. The GDPR counts 72 hours, not three working days, and weekends or bank holidays do not extend them: a breach you become aware of on Friday at 6pm must be reported by Monday at 6pm."
  - q: "Do I have to report a breach if the data was encrypted?"
    a: "Usually not, if the encryption was strong, the key was not compromised and you have a backup: the data is unintelligible to whoever holds it, so the breach is unlikely to result in a risk. Record it in your breach register with that reasoning."
  - q: "My web host or email provider was breached. Who reports it?"
    a: "You do, if you decide why and how the data is used: you are the controller. Your provider, as processor, must tell you without undue delay (Article 33(2)), and your own 72 hours run from the moment it does. Your data processing agreement should say how and how fast it will tell you."
  - q: "What happens if I should have reported a breach and didn't?"
    a: "Failing to notify is an infringement in its own right: under Article 83(4) the maximum fine is €10 million or 2% of worldwide annual turnover, whichever is higher; under the UK GDPR it falls in the lower of the two tiers, £8.7 million or 2% (the £17.5 million or 4% tier covers other infringements). Article 83(2) also lets regulators weigh whether you notified and what you did to limit the damage."
  - q: "Is a hacked website a personal data breach?"
    a: "Only if personal data was exposed, changed or lost: form submissions, customer accounts, orders or a mailing list stored on the site or reachable from it. A defaced page with no personal data behind it is a security incident, not a GDPR breach, but check what the attacker could reach before you decide."
---

A GDPR data breach notification comes with a deadline that catches many small teams out: 72 hours from the moment you become aware that personal data has been exposed, altered or lost. In that window you work out what happened, decide whether the breach puts people at risk, report it to the data protection authority if it does, and prepare to tell the people concerned when the risk is high.

Some of my client relationships started with an emergency call about a hacked website, and getting the site back comes first in that call. This guide covers what has to run alongside the repair: the legal clock, the decisions and the paperwork, for businesses in the EU, in the UK and anywhere else with customers in Europe. It is part of my {{< a key="gdpr-guide" >}}GDPR guide for small-team businesses{{< /a >}}.

## What counts as a personal data breach

Article 4(12) of the GDPR defines a personal data breach as "a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data". No hacker is required. In a small team, many breaches are ordinary mistakes, and regulators sort them by what was compromised:

- **Confidentiality**: someone saw data they should not have. An invoice emailed to the wrong client, a mailing sent in CC instead of BCC, a hacked mailbox, a contact form whose submissions sit in a file anyone can open.
- **Integrity**: data was changed without permission. An intruder edits the bank details on your invoices, or the customer addresses in your shop.
- **Availability**: data was lost or locked away. Ransomware, a stolen laptop holding the only copy of a client file, a database deleted with no backup.

One incident can tick several boxes: ransomware that copies your files before encrypting them is a breach of confidentiality and of availability.

## GDPR data breach notification: the three duties

Once you know personal data is involved, three duties apply, each with its own threshold. They are set out in Articles 33 and 34 of the [GDPR text on EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj).

| Duty | When it applies | Deadline | Article |
|---|---|---|---|
| Record the breach internally | Always | As you go | 33(5) |
| Notify the supervisory authority | Unless the breach is unlikely to result in a risk to people | Without undue delay and, where feasible, within 72 hours of becoming aware | 33(1) |
| Tell the people concerned | When the risk to them is high | Without undue delay | 34 |

Three details shape those 72 hours:

- **The clock starts when you become aware.** The European Data Protection Board (EDPB), which brings together the EU's regulators, reads this as the moment you are reasonably certain that a security incident has compromised personal data. A short investigation to reach that point is fine; sitting on a strong suspicion is not.
- **You can notify in stages.** Article 33(4) lets you send what you know within the deadline and complete it later, without undue further delay.
- **Late is better than never.** A notification sent after 72 hours must give the reasons for the delay, but it is still due.

The UK GDPR keeps the same duties and the same 72 hours, with the ICO as the authority.

## The first 72 hours, hour by hour

### Hour 0 to 1: note the time and contain

1. Write down when and how you found out, and who noticed. That timestamp anchors your 72 hours.
2. Stop the leak: change the compromised password and sign out every session, take the leaky form or file offline, ask the wrong recipient to delete the email and confirm it in writing, disconnect an infected computer from the network.
3. Keep the evidence: screenshots, the suspicious email, logs. Do not wipe or reinstall anything before you know what happened.
4. Open your breach record and log each action with its time.

The technical side of that hour, scenario by scenario, is in my {{< a key="incident-response-first-hour" >}}first-hour plan after a cyber attack{{< /a >}}.

### Hours 1 to 24: find out what was exposed

Answer these questions in writing, even roughly:

- Which data: names and emails, postal addresses, bank details, ID documents, health information, passwords?
- How many people and records, approximately, and in which countries do they live?
- Was the data encrypted, and is the key safe?
- Who has it now: a client who has deleted it, or an unknown attacker?
- Is there a clean backup?
- Was a supplier involved: your host, your email platform, your CRM, an agency?

If you have cyber insurance, call your insurer now, before you hire anyone: the policy may set conditions and may come with its own incident responders. My guide to {{< a key="cyber-insurance" >}}cyber insurance{{< /a >}} explains what such policies cover.

### Hours 24 to 72: decide and notify

- Apply the risk test in the next section, and write your decision and its reasons in the record.
- If a notification is due, send it with what you have. Article 33(3) lists the content: the nature of the breach, the categories and approximate number of people and records, a contact point, the likely consequences, and the measures taken or planned.
- When in doubt, notify. You can complete or correct a notification later; you cannot make a late one early.

### When the risk is high: tell the people concerned

Article 34 asks you to inform the people affected without undue delay, in clear and plain language: what happened, the likely consequences, what you have done, and a contact point. Add what they should do, because that is what limits the damage. A short message is enough:

```text
Subject: Security incident involving your data

On [date], we found that [what happened, in one sentence].
Data involved: [types of data].
What we have done: [measures taken].
What we recommend: [change your password for X; be wary of emails or calls
claiming to come from us; check your bank statements].
Questions: [name, email address, phone number].
```

You do not have to write to each person if the data was protected so that it is unintelligible (strong encryption, for instance), if later measures mean the high risk is no longer likely to materialise, or if individual messages would take disproportionate effort, in which case a public notice replaces them. The authority can also order you to inform people.

### After 72 hours: fix and complete

Fix the cause (an update, two-factor authentication, an old export deleted, access narrowed), send the authority the information you were missing, and close the record with the outcome.

## How to judge the risk

The GDPR gives no scale, so the EDPB's guidance lists what to weigh:

- the type of data: bank, identity, health and other sensitive data weigh more than a work email address;
- the number of people and the volume of records;
- how easily the people can be identified;
- the possible consequences: fraud, identity theft, discrimination, distress;
- who holds the data now, and whether you can get it back;
- whether the people are vulnerable, such as children or patients.

Some examples to calibrate your judgement, each still depending on its details:

| Situation | Notify the authority? | Tell the people? |
|---|---|---|
| Laptop stolen, full-disk encryption on, key safe, files backed up | Probably not: record it | No |
| A bakery's newsletter sent in CC, so 80 customers see each other's addresses | Probably not: record it | Rarely |
| A therapist's appointment reminder sent in CC to 80 patients | Yes | Yes: it reveals a health relationship |
| Online shop hacked, customer accounts with passwords and addresses copied | Yes | Yes, so they change their passwords |
| Ransomware, clean backup restored, no sign that data was copied | Possibly not, if your investigation supports it: record it | No |

The ICO's self-assessment tool walks through the same questions, and the test is identical under the EU GDPR.

## Where to notify: CNIL, ICO, and outside the EU

A business established in a single EU country notifies that country's authority, even when customers in other member states are affected.

### In France

Use the CNIL's [online notification service](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles) (in French). It accepts a notification in two steps: an initial one within 72 hours with what you know, then a complementary one. Explain any delay.

### In the UK

Report to the ICO from its [personal data breach page](https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach). The ICO expects reports online unless you cannot access your systems; in that case, call its helpline on 0303 123 1113 (Monday to Friday, 9am to 5pm), which can give you immediate guidance on next steps. If you cannot tell whether the breach meets the threshold, the online form has an option for that, and the ICO says it will contact you within seven days. You can report in instalments. Since 30 September 2026 the regulator is formally the Information Commission, but it still calls itself the ICO.

### Outside the EU

If the GDPR applies to you because you sell to or monitor people in the EU ({{< a key="gdpr-outside-eu" >}}the two tests are explained here{{< /a >}}), you have no lead authority. The EDPB's breach notification guidelines (Guidelines 9/2022, updated in 2023) say you must notify the authority of every member state where affected people live, even if you have appointed an EU representative under Article 27. In practice, for a notifiable breach:

- a UK online shop with customers in Leeds, Lyon and Dublin reports the breach to the ICO, and also to the CNIL and Ireland's Data Protection Commission for its French and Irish customers;
- a US or Canadian software company with users in Germany and Spain reports to the German and Spanish authorities;
- a Swiss or Moroccan agency that manages a French client's customer data tells its client, which notifies the CNIL as the controller.

## Who else to tell

- **The police.** In England, Wales and Northern Ireland, report cyber crime to [Report Fraud](https://www.reportfraud.police.uk/), which replaced Action Fraud on 4 December 2025 (online or on 0300 123 2040); in Scotland, call Police Scotland on 101. In France, file a complaint with the police or the gendarmerie; the 17Cyber service guides victims, businesses included.
- **Your insurer, with a second clock in France.** Since April 2023, a French insurer can only pay for losses caused by an attack on your systems if you filed a complaint within 72 hours of becoming aware of it (Code des assurances, article L12-10-1). It applies to companies and professionals, alongside the CNIL deadline.
- **Your bank**, at once, if card data, bank details or a fraudulent transfer are involved.
- **Your clients, if you hold their data for them.** As a processor (an agency, a freelancer, a software tool), you must tell each client without undue delay (Article 33(2)); they decide whether to notify.
- **The NIS2 authorities, if you are in scope.** NIS2 mainly covers medium-sized and large organisations in the sectors it lists. On top of the GDPR duties, a significant incident calls for an early warning within 24 hours, a notification within 72 hours and a final report within a month (Article 23 of Directive (EU) 2022/2555). As of 19 October 2026, France has still not adopted its transposition law (the National Assembly debate planned for 7 October was postponed with no new date), and the UK, outside the EU, keeps its own NIS Regulations.

## What to write in your breach record

Article 33(5) asks you to document every breach, with its facts, its effects and the remedial action, so that the authority can check your decisions. A spreadsheet or a shared document is enough, with one entry per breach:

1. When the breach happened (if known), when you found it, and who found it.
2. What happened, in a few sentences.
3. The data and people concerned: categories, approximate numbers, countries.
4. Your risk assessment and decisions: notify or not, tell people or not, and why.
5. Who was told and when: authority (with its reference number), people, insurer, police, clients.
6. The measures taken, and what changed to prevent a repeat.

Keep the entries for the breaches you did not report: they are the ones that show your reasoning. For what is at stake when things go wrong, see my guide to {{< a key="gdpr-fines-small-business" >}}what GDPR fines really mean for small teams{{< /a >}}.

## The Digital Omnibus: 96 hours is not the law

In November 2025 the European Commission proposed a Digital Omnibus that would change these rules: only breaches likely to result in a high risk would be notified to the authority, within 96 hours instead of 72, through a single EU entry point shared with other incident-reporting laws such as NIS2. As of 19 October 2026 the text is still going through the European Parliament and the Council. Until it is adopted and applies, the 72-hour deadline and the "risk" threshold stand. I follow the procedure in my article on {{< a key="digital-omnibus-gdpr" >}}the Digital Omnibus and GDPR{{< /a >}}.

## Prepare now, and know when to hand it over

A breach is easier to handle when the decisions were made beforehand. One page is enough:

- who decides, and who stands in when that person is away;
- a contact list kept offline: the CNIL or ICO page, your insurer's incident line, your bank, your IT or web person, a lawyer;
- where the breach record lives, with a blank entry ready;
- the customer message above, adapted to your business;
- the suppliers that hold personal data for you, and how each one will warn you.

This guide is general information, not legal advice; a lawyer or a DPO is worth the call when the breach involves health or financial data, many people, several countries, extortion, or a client contract with its own notification clause.

For a hacked website, the repair is the part I take on: rescue requests get an answer the same day or within 24 hours, and if I cannot fix the site, you get a report to hand to someone else and 70% of the bill back. What I do not do is decide whether you notify: that assessment stays with you, as the controller. To make the next incident less likely, start with my {{< a key="website-security-guide" >}}website security guide{{< /a >}}.
