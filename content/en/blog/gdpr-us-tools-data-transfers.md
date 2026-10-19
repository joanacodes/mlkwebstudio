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
summary: "A business subject to GDPR can use US tools such as Google Workspace, Microsoft 365 or Mailchimp if each transfer to the US rests on a legal mechanism. The simplest is the EU-US Data Privacy Framework, in force since 10 July 2023 for US companies listed as active on dataprivacyframework.gov; otherwise, standard contractual clauses in the provider’s data processing agreement cover it. An appeal against the framework is pending, so keep the clauses as a fallback."
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

If your team uses Gmail or Outlook for email, Mailchimp for the newsletter, Zoom for calls or ChatGPT for first drafts, it runs on American software. Each of these tools can send your clients’ personal data to the United States, which the GDPR allows only on a legal basis. Since 10 July 2023, the main one is the EU-US Data Privacy Framework: when the US company is certified, the transfer needs no extra safeguard.

The framework is the third attempt. The first two were struck down by the EU’s Court of Justice, and an appeal against this one is pending. A small team therefore needs two answers: whether each tool is covered today, and what happens if the framework falls. This guide gives both, with the rules for UK and Swiss businesses. It is part of my {{< a key="gdpr-guide" >}}GDPR guide for small teams{{< /a >}} and reflects the rules as they stand on 19 October 2026.

## What GDPR says about sending personal data to the US

Chapter V of the GDPR (Articles 44 to 50, on [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj)) governs transfers. Personal data may leave the European Economic Area, the EU plus Iceland, Liechtenstein and Norway, only through one of three routes.

| Route | Article | In plain words | Example |
|---|---|---|---|
| Adequacy decision | 45 | The European Commission has decided that the destination protects data well enough, so data flows as it would inside the EU | Switzerland, Japan, US companies certified under the Data Privacy Framework |
| Appropriate safeguards | 46 | A contract or binding rules oblige the recipient to protect the data, most often standard contractual clauses | A US tool that is not certified |
| Derogations | 49 | Narrow exceptions for occasional transfers, such as explicit consent | Booking a hotel in New York for a client |

A transfer happens when a business subject to the GDPR sends personal data to a company outside the EEA, or makes it available to one: uploading your mailing list to a US newsletter platform, storing client files with a US cloud provider, letting a US support team into your account. The European Data Protection Board (EDPB) adds, in its Guidelines 05/2021, that details a person in the EU types into a foreign website are not a transfer, but what that website then passes on to another company outside the EU can be.

Two questions often get mixed up. The data processing agreement required by Article 28 says what a provider may do with your data (see my guide to {{< a key="gdpr-data-processing-agreement" >}}data processing agreements{{< /a >}}); the transfer mechanism says why the data may leave Europe at all. **You need both**, and most tools put both in the same document.

## From Safe Harbor to the EU-US Data Privacy Framework

Transfers to the US have been rebuilt twice, each time because the Court of Justice found that US surveillance law did not protect Europeans enough:

- Safe Harbor (2000) was struck down in October 2015, in the first case brought by the privacy campaigner Max Schrems.
- Privacy Shield (2016) was struck down on 16 July 2020, in the Schrems II judgment, with no grace period: transfers based on it lost their legal basis overnight.
- The Data Privacy Framework followed Executive Order 14086 of October 2022, which limited US intelligence access to what is necessary and proportionate and created a redress route ending at a new Data Protection Review Court. The Commission’s adequacy decision (Implementing Decision (EU) 2023/1795) has applied since 10 July 2023.

This framework has survived its first test. On 3 September 2025, the EU General Court dismissed the action brought by Philippe Latombe, a French member of parliament (case T-553/23). He appealed to the Court of Justice on 31 October 2025 (case C-703/25 P), arguing in particular that a court created by an executive order rather than an Act of Congress is not independent. As of 19 October 2026, I found no judgment: the framework applies, and transfers based on it are lawful.

{{< callout type="tip" >}}**Use the framework, but keep a spare.** Check that each US provider’s data processing agreement also contains standard contractual clauses. Mailchimp, for example, says its clauses would apply automatically if the framework were invalidated. If the Court of Justice strikes it down, your transfers still have a legal basis the next morning.{{< /callout >}}

## How to check a US company on the Data Privacy Framework list

The US Department of Commerce publishes the [official Data Privacy Framework list](https://www.dataprivacyframework.gov/list). Checking a provider takes a few minutes:

1. Search for the legal entity, not the brand: Mailchimp appears under its owner, Intuit, and Google’s certified entity is Google LLC.
2. Check that the status is active. Certification must be renewed every year; a company that lets it lapse shows as inactive and can no longer receive data under the framework.
3. Check which parts it joined. The EU-US framework, the UK Extension and the Swiss-US framework are listed separately.
4. Save a dated PDF or screenshot of the entry with the provider’s agreement, as a record of what you checked and when.

Then open the provider’s data processing agreement at its section on international transfers. **Being certified and relying on the framework are two different things.** Microsoft is certified, yet its [GDPR page](https://learn.microsoft.com/en-us/compliance/regulatory/gdpr) says it does not rely on the framework for transfers from the EU, and its contracts use standard contractual clauses instead. That is just as lawful: what you need is a valid mechanism in the contract you accepted.

## Google, Microsoft, Mailchimp and ChatGPT: what I found

Here is where four tools that many small teams use stood on 19 October 2026. Certifications change, so look each company up yourself before relying on this table.

| Tool | US company | Basis for transfers |
|---|---|---|
| Google Workspace | Google LLC | Certified under the EU-US framework, the UK Extension and the Swiss-US framework; Google’s privacy help centre says it does not currently rely on the last two for its transfers |
| Microsoft 365 | Microsoft Corporation | Certified under all three, but relies on standard contractual clauses for transfers from the EU |
| Mailchimp | Intuit | Certified under all three, with standard contractual clauses in Mailchimp’s data processing addendum as a fallback |
| ChatGPT | OpenAI | A data processing addendum on request for ChatGPT Business, ChatGPT Enterprise and the API, with transfers on standard contractual clauses |

Run the same check on every other American tool: Zoom, Slack, your CRM, your booking page, your cold email platform. Small add-ons count too: Microsoft Clarity, which I use to see where visitors engage on a page and which areas make them leave, is a US service like the others. For AI assistants, the transfer is only one of the questions; my guide on {{< a key="chatgpt-gdpr-client-data" >}}what client data you can put into ChatGPT{{< /a >}} covers the rest.

## When a tool is not on the list: standard contractual clauses

Standard contractual clauses are a model contract adopted by the European Commission in June 2021 (Implementing Decision (EU) 2021/914). The module for a provider working on your behalf is “controller to processor”. You do not negotiate them: they are built into the provider’s data processing agreement, and accepting the agreement accepts them.

Since Schrems II, which kept the clauses alive, a business relying on them must also check whether the destination country’s laws let the recipient honour them: this is the transfer impact assessment. For the US, the task is lighter than it was in 2021, because the European Commission has said that the safeguards of Executive Order 14086 apply to all transfers to the US, whatever the tool used. In practice, ask the provider for its transfer documentation (many publish a transfer impact assessment), file it with the agreement alongside a dated note on which data goes there and why the risk is acceptable, and review it when something changes.

If a provider offers neither the framework nor the clauses, keep client data out of it. The derogations of Article 49, such as explicit consent, are for occasional transfers; the EDPB reads them narrowly, and they cannot carry a tool you use every day.

## UK and Swiss businesses: the data bridge and the Swiss-US framework

The UK GDPR has its own transfer rules, explained in the [ICO’s guidance on international transfers](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/). Since 12 October 2023, the UK-US “data bridge” has let UK businesses send personal data to US companies certified under the UK Extension to the Data Privacy Framework. A US company can join the UK Extension only if it is also in the EU-US framework.

Without that certification, UK businesses use the ICO’s International Data Transfer Agreement (IDTA) or the UK Addendum to the EU clauses, both available since 21 March 2022, with a transfer risk assessment. A UK team that also serves EU clients can use the EU clauses with the UK Addendum attached to cover both.

Switzerland has its own Swiss-US framework: the Federal Council recognised it in a decision of 14 August 2024, and Swiss businesses have been able to rely on it since 15 September 2024. Without that part of the certification, contractual clauses adapted to Swiss law are the usual route.

The same checks apply outside Europe: a company in New York, Montreal or Casablanca that sells to people in the EU (see my guide on {{< a key="gdpr-outside-eu" >}}whether GDPR applies outside the EU{{< /a >}}) can make a transfer, for the EDPB, when it passes their data on to another company outside the EU.

## Keeping data in Europe: EU data regions and European tools

Some US providers let you keep data in Europe:

- Google Workspace offers data regions on its Business Standard, Business Plus and Enterprise editions, letting an administrator store certain data at rest in Europe. I could not confirm it for Business Starter, so check your edition’s features in the Admin console.
- Microsoft completed its EU Data Boundary on 26 February 2025: for commercial customers in the EU and EFTA, Microsoft 365, Dynamics 365, Power Platform and Azure store and process customer data, pseudonymised personal data and support data inside that area.

A European data region reduces transfers but does not make the provider European: the US company still runs the service, and its support and security teams may need access from elsewhere. Treat a region as a bonus on top of the checks above, not a replacement.

If you would rather avoid the question for some tools, European options exist for most jobs:

- newsletters: Brevo, a French company (see my {{< a key="newsletter-tools-comparison" >}}newsletter tools comparison{{< /a >}});
- email, files and video calls: Infomaniak’s kSuite, from Geneva, which I recommend highly even though my own habits are with Spaceship (see my {{< a key="infomaniak-review" >}}Infomaniak review{{< /a >}});
- large files: SwissTransfer, also from Infomaniak, which I find way better than WeTransfer (my {{< a key="swisstransfer-vs-wetransfer" >}}WeTransfer alternative guide{{< /a >}} explains why);
- encrypted email: Proton, based in Switzerland;
- website analytics: Matomo, which you can host yourself; the CNIL publishes a guide to configuring it so that it needs no consent in France.

A European provider can still use American sub-processors, so read its sub-processor list too. And my advice is not to move a whole team for this reason alone: a certified US tool with signed terms is lawful, and every migration costs time. Switch when a tool no longer suits you anyway, when a client asks for European hosting, or when you handle sensitive data.

## Checklist for your US tools, and when to call a lawyer

1. **List every tool that touches personal data:** email, CRM, newsletter, booking, video calls, chat, AI assistants, forms, analytics and payments.
2. **Look up each US company** on the Data Privacy Framework list, including the UK and Swiss parts if you need them, and save the dated entry.
3. **Find its data processing agreement** and the mechanism it names: the framework, standard contractual clauses, or both. Keep client data on business plans.
4. **Turn on the European data location** wherever your plan includes it.
5. **Update your privacy policy** with the tools that send data outside the EEA and the basis for each.
6. **Set a yearly reminder** to check again, and watch for the Court of Justice’s ruling in case C-703/25 P.

This guide is general information, not legal advice. You do not need a lawyer to run these checks on everyday tools. A lawyer or a DPO is worth paying for when you send health or other sensitive data to a US tool, put staff records into a US HR platform, receive a transfer questionnaire from a large client or a public body, or depend on a tool that offers neither the framework nor the clauses.

The website side, a privacy page that names your tools and a consent banner that holds US trackers back until visitors agree, is part of the {{< a page="/services/websites" >}}websites I build{{< /a >}}.
