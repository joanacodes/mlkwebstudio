---
title: "Data processing agreements (Article 28): when you need one with clients and suppliers"
seo_title: "Data processing agreement (GDPR Art. 28): when you need one"
description: "A data processing agreement is required whenever a supplier handles personal data for you. When you need one, what Article 28 requires, and free templates."
slug: "data-processing-agreement"
translationKey: "gdpr-data-processing-agreement"
date: 2026-10-18T21:21:00+02:00
lastmod: 2026-10-18T21:21:00+02:00
category: "gdpr"
article_type: "guide"
keywords: ["data processing agreement", "GDPR Article 28", "controller vs processor", "data processing agreement template", "GDPR sub-processors", "DPA GDPR"]
summary: "You need a data processing agreement whenever a supplier handles personal data on your behalf, from your CRM to a freelancer, and whenever you do the same for a client. Article 28 of the GDPR, and of the UK GDPR, lists what it must contain: documented instructions, confidentiality, security, sub-processor rules, help with rights and breaches, deletion at the end and audits. Big providers build theirs into their terms; for the rest, start from the EU’s free model clauses."
cover: "gdpr-data-processing-agreement"
cover_alt: "The article’s title in white on a ribbed-glass panel over a photo of a blueprint grid with a target"
related: ["gdpr-us-tools-data-transfers", "security-questionnaire", "gdpr-data-retention-crm", "cold-email-gdpr-uk-france", "gdpr-guide"]
services: ["automation"]
faq:
  - q: "Is a data processing agreement mandatory under GDPR?"
    a: "Yes, whenever a supplier processes personal data on your behalf. Article 28(3) requires a contract or other legal act that binds the processor to the controller and contains the terms it lists, so using a processor without one breaches the GDPR."
  - q: "Is a DPA the same as a non-disclosure agreement?"
    a: "No. A non-disclosure agreement protects confidential business information. A DPA must contain the terms Article 28(3) lists, such as documented instructions, rules on sub-processors, help with people’s rights and deletion at the end. Confidentiality is only one of them."
  - q: "Who writes the data processing agreement, the client or the supplier?"
    a: "Either can. Large providers publish their own, which you accept with their terms. Between small teams, whoever has a sound template proposes it, and the European Commission’s model clauses (Decision 2021/915) are a neutral starting point both sides can accept."
  - q: "Do I need a DPA with a supplier outside the EU or the UK?"
    a: "Yes. The Article 28 terms apply wherever the processor is based. Sending the data outside the EU or the UK also needs a transfer mechanism, such as an adequacy decision or standard contractual clauses; with most providers, both sit in the same document."
  - q: "What is the fine for not having a data processing agreement?"
    a: "Breaches of Article 28 fall in the lower tier of fines set by Article 83(4): up to €10 million or 2% of worldwide annual turnover, whichever is higher. Under the UK GDPR, the same tier goes up to £8.7 million or 2%."
---

A data processing agreement (DPA) is the contract you need whenever another business handles personal data on your behalf: the studio that maintains your website, the freelancer who manages your CRM, the tool that sends your newsletter. Article 28 of the GDPR makes it compulsory and lists what it must say. The UK GDPR keeps the same rule.

Small teams sit on both sides of it. You are the client of a dozen tools that process your customers’ data, and you may also be the supplier who handles data for your own clients. When I build an automation for a client, like the internal app I made for one of them, I need access to their mailbox, for example. That is exactly the kind of access a DPA is meant to frame.

For the wider picture, see my {{< a key="gdpr-guide" >}}complete guide to GDPR{{< /a >}}.

## Controller or processor? The two roles, with examples

The **controller** decides why and how personal data is processed (Article 4(7)). The **processor** processes it on the controller’s behalf (Article 4(8)). What counts is who decides, not who holds the data or who is bigger: a one-person studio can be the processor of a large company, and Google is the processor of a two-person shop that runs on Google Workspace.

| Situation | Usual role |
|---|---|
| A web studio that maintains your site and can read contact-form messages in the back office | Processor |
| A freelancer who manages your CRM, or a virtual assistant who sorts your inbox | Processor |
| A developer who builds an automation with access to your mailbox, or an IT provider who logs in to fix a problem | Processor |
| Your hosting, newsletter tool, CRM, cloud storage or booking software | Processor for the data you put in; controller for its own purposes, such as billing you |
| A cold emailing provider that sends campaigns to a list you supply | Processor |
| Your accountant | It depends: bookkeeping on your instructions points to processor, work under their own professional duties to controller |
| An employee on your payroll | Neither: staff act under your authority (Article 29) |

A cold emailing provider that also finds the leads makes choices a processor normally leaves to its client, so write down who chooses the sources, who informs prospects and who handles objections (my {{< a key="cold-email-gdpr-uk-france" >}}cold email GDPR checklist{{< /a >}} covers those duties). And a processor that uses your data for its own purposes becomes a controller for that processing (Article 28(10)).

Distance changes nothing. A developer in Casablanca who maintains a French shop’s customer database is its processor. And a business in London, Toronto or New York that falls under the GDPR because it sells into the EU ({{< a key="gdpr-outside-eu" >}}the two tests are explained here{{< /a >}}) needs Article 28 terms with its own processors.

## When you need a data processing agreement, and when you don’t

You need one in two situations:

1. **As a client**, with every supplier that processes personal data for you, whatever its size and whether you pay for it or not. Article 28(1) also asks you to use only processors that offer sufficient guarantees, and the DPA is where those guarantees are written down.
2. **As a supplier**, whenever you handle a client’s personal data, even if all you have is a login. Merely consulting data counts as processing under Article 4(2).

You don’t need one when the other party decides for itself what it does with the data, as your bank does with a payment: you are then two separate controllers.

### Joint controllers: a different arrangement

When two businesses decide together why and how data is processed, they are joint controllers (Article 26): two firms that co-host a webinar and design its sign-up form together, for example. Instead of a DPA, they sign an arrangement that says who informs people and who answers their requests, and they make its essence available to them. People can still exercise their rights against either firm.

## What a data processing agreement must contain

[Article 28 of the GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj) sets the minimum. The contract must be in writing, and electronic form counts (Article 28(9)), so terms accepted online and a signed PDF both work. It must describe the processing: its subject matter and duration, its nature and purpose, the types of personal data, the categories of people concerned, and the controller’s obligations and rights. Then the processor commits to eight things:

1. **Act only on your documented instructions**, including on transfers outside the EU.
2. **Confidentiality**: everyone who handles the data is bound by it.
3. **Security**: the measures Article 32 requires, from encryption to the ability to restore data after an incident.
4. **Sub-processors** only with your authorisation and under the same obligations.
5. **Help with people’s rights**, such as access and erasure requests.
6. **Help with your other duties**: security, breach notification and impact assessments (Articles 32 to 36).
7. **Delete or return the data** at the end, as you choose, and delete copies unless the law requires keeping them.
8. **Audits**: give you the information that proves compliance, and allow audits, including inspections.

The processor must also tell you at once if it thinks one of your instructions breaks data protection law. In the UK, the ICO (formally the Information Commission since 30 September 2026) lists the same terms in its [guidance on contracts](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guide-to-accountability-and-governance/contracts/).

{{< callout type="tip" >}}**Spend your time on the description, not the boilerplate.** “Customer data” tells a supplier nothing; “names, emails and order history of the shop’s customers, for after-sales support, for the length of the contract” tells it what it may touch.{{< /callout >}}

## Sub-processors: the chain behind your supplier

Your suppliers have suppliers: your CRM runs on a cloud host, your newsletter tool on a delivery service. Under Article 28(2), a processor needs your prior written authorisation before bringing in another processor. That authorisation can be specific, case by case, or general, in which case the processor must tell you about changes in advance so that you can object. Article 28(4) passes the same obligations down the chain, and your processor stays fully liable to you for the ones below it.

Large providers usually rely on general authorisation: they publish a list of sub-processors, and some let you subscribe to notices of changes. Keep a simple list of your own processors, with a link to each one’s DPA and sub-processor page. It feeds your record of processing (Article 30) and your privacy policy, and it answers the client who asks who touches its data.

## Free templates: the EU model clauses and the CNIL guide

You don’t need to pay for a template. On 4 June 2021, the European Commission adopted [standard contractual clauses between controllers and processors](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021D0915) (Implementing Decision (EU) 2021/915). They meet the requirements of Article 28(3) and (4) and can be used between any controller and its processor. You keep their wording as it is, pick one of the two sub-processor options in Clause 7.7 (specific or general authorisation) and fill in the annexes: the parties, the description of the processing, the security measures and the list of sub-processors.

Don’t confuse them with the clauses adopted the same day for transfers outside the EU (Decision 2021/914), which my guide to {{< a key="gdpr-us-tools-data-transfers" >}}US tools and the Data Privacy Framework{{< /a >}} covers.

In France, the CNIL’s guide for processors (September 2017 edition) includes an example of clauses to adapt to each service. For a contract under the UK GDPR alone, the EU clauses refer to EU law, so adapt the references or work from the ICO’s list.

Model clauses cover data protection only: price, liability caps and intellectual property stay in your main contract.

## Getting your suppliers’ DPAs: Google, Microsoft and the rest

With big providers, you don’t negotiate: you accept. Menu names and plans below are those at the time of writing (October 2026).

- **Google Workspace** uses its Cloud Data Processing Addendum. A super administrator reviews and accepts it in the Admin console under **Account > Account settings > Legal and compliance** (Security and Privacy Additional Terms). [Google’s help page](https://support.google.com/a/answer/3407074) says this is only needed if your agreement does not already include it, and changes nothing if it does, so accept it when in doubt.
- **Microsoft 365**: the Products and Services Data Protection Addendum is incorporated by reference into Microsoft’s Product Terms, so there is nothing to sign. Download a copy from aka.ms/dpa for your records.
- **Other tools**: look for “DPA”, “data processing addendum” or “data processing agreement” on the legal, privacy or trust page. Many build it into their terms; others are signed through a form, as OpenAI’s is for ChatGPT Business, ChatGPT Enterprise and its API.

Personal plans are the gap. OpenAI offers no DPA for its Free, Go, Plus or Pro plans, and Google’s processing terms come with Google Workspace, not with a personal Gmail account. If a tool has no DPA, keep client data out of it. Save a dated PDF of every DPA you accept: terms change, and you want the version that applied.

## When a client sends you their DPA

If you work for larger clients, the DPA often arrives with the contract, sometimes with a {{< a key="security-questionnaire" >}}security questionnaire{{< /a >}}. Read it as the supplier, because you are the one making promises. Check five points:

1. **The description** matches what you really do. When I need a client’s mailbox for an automation, the annex should name the mailbox, the purpose and how long access lasts.
2. **Breach notification**: the GDPR asks processors to warn the controller without undue delay (Article 33(2)). Some DPAs set a fixed number of hours: accept only a deadline you can keep, weekends included. The controller then has its own {{< a key="gdpr-data-breach" >}}72 hours to notify the regulator{{< /a >}}.
3. **Sub-processors**: list your own tools in the annex (hosting, email, file sharing) so that you comply from day one.
4. **Audits**: the right to audit is mandatory, but you can propose reasonable conditions, such as notice and documents first.
5. **Liability and indemnities** go beyond Article 28: check that the DPA does not lift the liability cap set in your main contract.

At the end of the contract, return or delete the data as agreed, within the deadline you set together (see my guide to {{< a key="gdpr-data-retention-crm" >}}GDPR retention periods{{< /a >}}). Then remove your access: the mailbox, the CRM login, the API keys.

## Your checklist, and when to call a lawyer

1. List every supplier that touches personal data for you, with its role.
2. For each processor, save the DPA, the sub-processor list and the transfer mechanism if data leaves the EU or the UK.
3. Move client data off tools that offer no DPA.
4. If you handle data for clients, prepare your own DPA from the Commission’s clauses, annexes filled in, before a client asks.
5. As a processor, keep a record of the processing you carry out for clients (Article 30(2)).
6. Review the list once a year and whenever you add a tool.

This guide is general information, not legal advice. For most small teams, the Commission’s clauses and the providers’ standard DPAs are enough, without a lawyer. A lawyer or a DPO is worth paying for when you process health or other sensitive data, when a client’s DPA includes unlimited liability or indemnities, when you act as joint controllers, or when a supplier outside Europe offers no transfer mechanism you can rely on.
