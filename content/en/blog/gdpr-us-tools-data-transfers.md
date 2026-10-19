---
title: "US tools under GDPR: Google, Microsoft, Mailchimp and the Data Privacy Framework"
seo_title: "EU-US Data Privacy Framework: using US tools under GDPR"
description: "EU-US Data Privacy Framework explained: when you can use Google, Microsoft or Mailchimp under GDPR, how to check a US tool and what to do if it isn’t listed."
slug: "eu-us-data-privacy-framework"
translationKey: "gdpr-us-tools-data-transfers"
date: 2026-10-18T21:18:00+02:00
lastmod: 2026-10-18T21:18:00+02:00
category: "gdpr"
article_type: "guide"
keywords: ["EU-US Data Privacy Framework", "GDPR data transfers to the US", "is Google Workspace GDPR compliant", "is Mailchimp GDPR compliant", "standard contractual clauses", "UK-US data bridge"]
summary: "Yes: a business subject to GDPR can use US tools such as Google Workspace, Microsoft 365 or Mailchimp, as long as each transfer to the US rests on a legal mechanism. The simplest is the EU-US Data Privacy Framework, in force since 10 July 2023 for US companies listed as active on dataprivacyframework.gov; otherwise, standard contractual clauses in the provider’s data processing agreement do the job. An appeal against the framework is pending, so keep the clauses as a fallback."
cover: "gdpr-us-tools-data-transfers"
cover_alt: "The article’s title in white on a ribbed-glass panel over a photo of connected boxes in a flow diagram"
related: ["gdpr-data-processing-agreement", "gdpr-outside-eu", "newsletter-tools-comparison", "chatgpt-gdpr-client-data", "infomaniak-review"]
services: ["automation"]
faq:
  - q: "Do I have to tell customers that their data goes to the US?"
    a: "Yes. Article 13(1)(f) of the GDPR requires your privacy policy to say that you transfer personal data outside the EEA and on what basis: an adequacy decision such as the Data Privacy Framework, or safeguards such as standard contractual clauses, with a way to obtain a copy of them."
  - q: "Can I use a free Gmail or ChatGPT account for client data?"
    a: "Avoid it. Personal accounts come without a data processing agreement: OpenAI offers one only for ChatGPT Business, ChatGPT Enterprise and its API, not for Free, Go, Plus or Pro, and Google’s processing terms come with Google Workspace, not with a personal Gmail account."
  - q: "Do I need a transfer impact assessment if the US company is certified?"
    a: "No. A transfer to a company listed as active under the Data Privacy Framework is covered by the adequacy decision, so no assessment is needed for it. You still need the provider’s data processing agreement under Article 28."
  - q: "Is Mailchimp GDPR compliant?"
    a: "No tool is compliant on its own: it depends on how you use it. For transfers, Mailchimp’s owner Intuit is certified under the Data Privacy Framework, the UK Extension and the Swiss-US framework, and Mailchimp says the standard contractual clauses in its data processing addendum would take over if the framework fell. Consent at sign-up and clear information remain your job."
  - q: "Does the Data Privacy Framework cover data about my employees?"
    a: "Only if the US company’s certification covers HR data. The official list shows, for each company, whether it covers HR data, non-HR data (clients, prospects, subscribers) or both; an HR or payroll tool needs the first."
---

If your team uses Gmail or Outlook for email, Mailchimp for the newsletter, Zoom for calls or ChatGPT for first drafts, it runs on American software. Each of these tools can send your clients’ personal data to the United States, and the GDPR allows that only on a legal basis. Since 10 July 2023, the main one is the EU-US Data Privacy Framework: when the US company is certified, the transfer needs no extra safeguard.

The framework is the third attempt. The first two were struck down by the EU’s Court of Justice, and an appeal against this one is pending. So a small team needs two answers: whether each tool is covered today, and what happens if the framework falls.

This guide gives both in plain words: the checks I would run on Google, Microsoft, Mailchimp and the rest, what to do when a tool is not certified, and the rules for UK and Swiss businesses. It is part of my {{< a key="gdpr-guide" >}}GDPR guide for small teams{{< /a >}} and describes the rules as they stand on 19 October 2026.

## What GDPR says about sending personal data to the US

Chapter V of the GDPR (Articles 44 to 50, on [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)) governs transfers. Personal data may leave the European Economic Area, which is the EU plus Iceland, Liechtenstein and Norway, only through one of three routes.

| Route | Article | In plain words | Example |
|---|---|---|---|
| Adequacy decision | 45 | The European Commission has decided that the destination protects data well enough, so data flows as it would inside the EU | Switzerland, Japan, US companies certified under the Data Privacy Framework |
| Appropriate safeguards | 46 | A contract or binding rules oblige the recipient to protect the data, most often standard contractual clauses | A US tool that is not certified |
| Derogations | 49 | Narrow exceptions for occasional transfers, such as explicit consent or a contract with the person | Booking a hotel in New York for a client |

A transfer happens when a business subject to the GDPR sends personal data to a company in another country, or makes it available to one. Uploading your mailing list to a US newsletter platform is a transfer. So is storing client files with a US cloud provider, or letting a US support team into your account. In its Guidelines 05/2021, the European Data Protection Board (EDPB) does not treat details that a person in the EU types into a foreign website as a transfer, but what that website then passes on to another company outside the EU can be one.

Two questions often get mixed up. The data processing agreement, required by Article 28 whenever a provider handles personal data for you, says what the provider may do with it; my guide to {{< a key="gdpr-data-processing-agreement" >}}data processing agreements{{< /a >}} covers it. The transfer mechanism says why the data may leave Europe at all. **You need both**, and with most tools both sit in the same document.

## From Safe Harbor to the EU-US Data Privacy Framework

Transfers to the US have been rebuilt twice, each time because the Court of Justice found that US surveillance law did not protect Europeans enough.

- 2000 to 2015, Safe Harbor: struck down by the Court of Justice in October 2015, in the first case brought by the privacy campaigner Max Schrems.
- 2016 to 2020, Privacy Shield: struck down on 16 July 2020 (the Schrems II judgment). The Court kept standard contractual clauses but required businesses to check, case by case, whether the destination’s laws let the recipient keep its promises. There was no grace period: transfers that relied on the Privacy Shield lost their legal basis overnight.
- Since 10 July 2023, the Data Privacy Framework: in October 2022, Executive Order 14086 limited US intelligence access to what is necessary and proportionate, and created a redress route ending at a new Data Protection Review Court. The Commission then adopted its adequacy decision (Implementing Decision (EU) 2023/1795), under which transfers to certified US companies need no further safeguard.

This framework has survived its first test. On 3 September 2025, the EU General Court dismissed the action brought by Philippe Latombe, a French member of parliament (case T-553/23). He appealed to the Court of Justice on 31 October 2025 (case C-703/25 P), arguing in particular that a court created by an executive order rather than by an Act of Congress is not independent. The United States, Ireland and Microsoft have intervened on the Commission’s side. As of 19 October 2026, I found no judgment: the framework applies, and transfers based on it are lawful.

{{< callout type="tip" >}}**Use the framework, but keep a spare.** Check that each US provider’s data processing agreement also contains standard contractual clauses. Mailchimp, for example, says its clauses would apply automatically if the framework were invalidated. If the Court of Justice strikes it down, your transfers still have a legal basis the next morning.{{< /callout >}}

## How to check a US company on the Data Privacy Framework list

The US Department of Commerce publishes the [official Data Privacy Framework list](https://www.dataprivacyframework.gov/list). Checking a provider takes a few minutes:

1. Search for the legal entity, not the brand. Mailchimp appears under its owner, Intuit; Google’s certified entity is Google LLC.
2. Check that the status is active. Companies must renew their certification every year, and one that lets it lapse shows as inactive and can no longer receive data under the framework.
3. Check which parts it joined. The EU-US framework, the UK Extension and the Swiss-US framework are listed separately: a UK business needs the UK Extension, a Swiss one the Swiss-US framework.
4. Save the result. A dated PDF or screenshot of the entry, filed with the provider’s agreement, shows what you checked and when.

Then open the provider’s data processing agreement at its section on international transfers. **Being certified and relying on the framework are two different things.** Microsoft is certified, yet its [GDPR page](https://learn.microsoft.com/en-us/compliance/regulatory/gdpr) says it does not rely on the framework for transfers from the EU; its contracts use standard contractual clauses instead. That is just as lawful. What you need is a valid mechanism in the contract you accepted.

## Google, Microsoft, Mailchimp and ChatGPT: what I found

Here is the situation of four tools that many small teams use, as checked on 19 October 2026. Certifications change, so look each company up yourself before you rely on a line of this table.

| Tool | US company | Basis for transfers |
|---|---|---|
| Google Workspace | Google LLC | Certified under the EU-US framework, the UK Extension and the Swiss-US framework; Google’s privacy help centre says it does not currently rely on the last two for its transfers |
| Microsoft 365 | Microsoft Corporation | Certified under all three, but relies on standard contractual clauses for transfers from the EU |
| Mailchimp | Intuit | Certified under all three; the clauses in Mailchimp’s data processing addendum would take over if the framework fell |
| ChatGPT | OpenAI | A data processing addendum on request for ChatGPT Business, ChatGPT Enterprise and the API, with transfers on standard contractual clauses |

Run the same check on every other American tool you use: Zoom, Slack, your CRM, your booking page, your cold email platform. Small add-ons count too. Microsoft Clarity, which I use to see where visitors engage on a page and which areas make them leave, is a US service like the others.

AI assistants raise more questions than the transfer itself, such as what the provider may do with your prompts. My guide on {{< a key="chatgpt-gdpr-client-data" >}}what client data you can put into ChatGPT{{< /a >}} goes through them.

## When a tool is not on the list: standard contractual clauses

Standard contractual clauses are a model contract adopted by the European Commission in June 2021 (Implementing Decision (EU) 2021/914). They come in modules, and the one for a software provider working for you is “controller to processor”. You do not negotiate them with a software provider: they are built into its data processing agreement, and accepting the agreement accepts them.

Since Schrems II, a business that relies on these clauses must also assess whether the destination country’s laws let the recipient honour them. This is the transfer impact assessment. For the US, the work is lighter than it was in 2021, because the European Commission has said that the safeguards of Executive Order 14086 apply to all transfers to the US, whatever the tool used. In practice, a small team can:

- ask the provider for its transfer documentation, since many publish a transfer impact assessment or a white paper on the subject;
- file it with the agreement, with a dated note on which data goes to the tool and why the risk is acceptable;
- review it when the provider, the data or US law changes.

If a provider offers neither the framework nor the clauses, keep client data out of it. The derogations of Article 49, such as the person’s explicit consent, are for occasional transfers; the EDPB reads them narrowly, and they cannot carry a tool you use every day.

## UK and Swiss businesses: the data bridge and the Swiss-US framework

The UK GDPR has its own transfer rules, explained in the [ICO’s guidance on international transfers](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/). Since 12 October 2023, the UK-US “data bridge” has let UK businesses send personal data to US companies certified under the UK Extension to the Data Privacy Framework. A US company can join the UK Extension only if it is also in the EU-US framework, and both appear on the same list.

Without that certification, a UK business uses the ICO’s International Data Transfer Agreement (IDTA) or the UK Addendum to the EU clauses, both available since 21 March 2022, together with a transfer risk assessment. A UK team that also serves EU clients can use the EU clauses with the UK Addendum attached, which covers both.

Switzerland has its own Swiss-US framework: the Federal Council recognised it in a decision of 14 August 2024, and Swiss businesses have been able to rely on it since 15 September 2024. Look for the Swiss-US part on the list; without it, contractual clauses adapted to Swiss law are the usual route.

The logic follows you outside Europe too, wherever the GDPR applies. A company in New York, Montreal or Casablanca that sells to people in the EU (my guide on {{< a key="gdpr-outside-eu" >}}whether GDPR applies outside the EU{{< /a >}} explains the two tests) can still make a transfer, according to the EDPB, when it passes their data to another company outside the EU. Its tools then need a data processing agreement and a transfer mechanism, just like a European team’s.

## Keeping data in Europe: EU data regions and European tools

Some US providers let you keep data in Europe:

- Google Workspace offers data regions on its Business Standard, Business Plus and Enterprise editions, which let an administrator store certain data at rest in Europe. I could not confirm it for Business Starter, so check the features of your edition in the Admin console.
- Microsoft completed its EU Data Boundary on 26 February 2025. For commercial customers in the EU and EFTA, Microsoft 365, Dynamics 365, Power Platform and Azure store and process customer data, pseudonymised personal data and support data inside that area.

A European data region reduces transfers; it does not make the provider European. The US company still runs the service, and its support and security teams may need access from elsewhere, which is why these providers keep a transfer mechanism in their agreements. Treat a data region as a bonus, not as a replacement for the checks above.

If you would rather avoid the question for some tools, there are European options for most jobs:

- Newsletters: Brevo, a French company, compared with Mailchimp, MailerLite, Kit and beehiiv in my {{< a key="newsletter-tools-comparison" >}}newsletter tools comparison{{< /a >}}.
- Email, files and video calls: kSuite from Infomaniak, based in Geneva. I recommend Infomaniak highly; my own habits are with Spaceship, so I use it less than I could. My {{< a key="infomaniak-review" >}}Infomaniak review{{< /a >}} covers prices and limits.
- Large files: SwissTransfer, also from Infomaniak, which I find way better than WeTransfer, as I explain in my {{< a key="swisstransfer-vs-wetransfer" >}}WeTransfer alternative guide{{< /a >}}.
- Encrypted email: Proton, based in Switzerland.
- Website analytics: Matomo, which you can host yourself; the CNIL publishes a guide to configuring it so that it needs no consent in France.

A European provider can still use American sub-processors, so read its sub-processor list too. And my advice is not to move a whole team for this reason alone: a certified US tool with signed terms is lawful, and every migration costs time. Switch when a tool no longer suits you anyway, when a client asks for European hosting, or when you handle sensitive data.

## Checklist for your US tools, and when to call a lawyer

1. **List every tool that touches personal data:** email, CRM, newsletter, booking, video calls, chat, AI assistants, forms, analytics and payments.
2. **Look up each US company** on the Data Privacy Framework list, including the UK and Swiss parts if you need them, and save the dated entry.
3. **Find its data processing agreement** and the mechanism it names: the framework, standard contractual clauses, or both. Keep client data on business plans.
4. **Turn on the European data location** wherever your plan includes it.
5. **Update your privacy policy** with the tools that send data outside the EEA and the basis for each.
6. **Set a yearly reminder** to check again, and another for the Court of Justice’s ruling in case C-703/25 P.

This guide is general information, not legal advice. For the usual tools of a small team, the checks above are enough, and you do not need a lawyer to run them. A lawyer or a DPO is worth paying for when you send health or other sensitive data to a US tool, put staff records into a US HR platform, receive a transfer questionnaire from a large client or a public body, or depend on a tool that offers neither the framework nor the clauses.

The website side, a privacy page that names your tools and the consent banner that holds US trackers back until visitors agree, is part of the {{< a page="/services/websites" >}}websites I build{{< /a >}}.
