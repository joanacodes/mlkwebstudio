---
title: "ChatGPT and GDPR: what client data can you put into an AI assistant?"
seo_title: "Is ChatGPT GDPR compliant? What client data you can share"
description: "ChatGPT GDPR guide for small businesses: which client data you can paste into an AI assistant, which plan and settings to use, and how to anonymise it first."
slug: "chatgpt-gdpr-client-data"
translationKey: "chatgpt-gdpr-client-data"
date: 2026-10-17T09:10:00+02:00
lastmod: 2026-10-17T09:10:00+02:00
category: "ai-automation"
article_type: "guide"
keywords: ["ChatGPT GDPR", "is ChatGPT GDPR compliant", "ChatGPT client data", "ChatGPT UK GDPR", "AI assistant personal data", "ChatGPT data processing agreement"]
summary: "For GDPR purposes, anonymised text is fine on any ChatGPT plan, with training switched off in Data controls. Clients’ names, email addresses and other personal data belong only on a business plan (ChatGPT Business or Enterprise) or the API, which offer a data processing agreement and do not train on your content by default, and even then only the details the task needs. Keep health data, ID numbers, bank details and passwords out of AI assistants altogether."
cover: "chatgpt-gdpr-client-data"
cover_alt: "A shield with a tick above the words GDPR and RGPD, behind ribbed glass"
related: ["claude-vs-chatgpt", "cold-email-gdpr-uk-france", "zapier-vs-make-vs-n8n", "gdpr-data-processing-agreement", "bespoke-crm-internal-app"]
services: ["automation"]
faq:
  - q: "Which company is responsible for my data in ChatGPT?"
    a: "On a personal account, the provider is the controller: OpenAI Ireland Limited, in Dublin, for users in the EEA and Switzerland since 15 February 2024, and a US company, OpenAI OpCo, LLC, for UK users, according to OpenAI’s terms. For Claude, it is Anthropic Ireland, Limited for the EEA, the UK and Switzerland. On a business plan or the API, you remain the controller of your clients’ data and the provider acts as your processor."
  - q: "Do I need to mention ChatGPT in my privacy notice?"
    a: "If you send clients’ personal data to an AI provider, yes. Your privacy notice must name the recipients of personal data, or their categories (such as AI service providers), and say whether the data leaves the UK or the EEA and with what safeguards."
  - q: "I pasted client data into ChatGPT by mistake. What should I do?"
    a: "Delete the conversation and check whether training was switched on at the time. An unauthorised disclosure can be a personal data breach: record it in your breach log, and report it to the ICO within 72 hours of becoming aware of it, unless it is unlikely to result in a risk to the people concerned ([ICO: report a personal data breach](https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach))."
  - q: "Can I upload a client’s contract or invoice to ChatGPT?"
    a: "Remove what identifies people first (names, signatures, addresses, bank details), or use a business plan covered by a data processing agreement. Check the contract itself too: a confidentiality clause applies whatever the GDPR allows."
---

Pasting a client's email into ChatGPT takes two seconds. In UK GDPR terms, you have just sent that client's personal data to another company, and whether that is acceptable depends on three things: what you paste, which plan you paste it into, and how that plan is set up. That is the practical side of the ChatGPT GDPR question, and this guide answers it for a small business.

ChatGPT is the main example, but the same reasoning applies to Claude, the assistant I work with ({{< a key="claude-vs-chatgpt" >}}Claude vs ChatGPT{{< /a >}} explains why), and to any other. If you are still working out where AI fits in your business, start with my guide to {{< a key="ai-small-business-guide" >}}AI for small businesses{{< /a >}}. This article answers one question: what you can safely give it.

{{< callout type="note" >}}This is general information, not legal advice. Providers change their plans and terms often: check the official pages linked below before you rely on a detail.{{< /callout >}}

## Is ChatGPT GDPR compliant? The better question to ask

No tool is {{< a key="gdpr-guide" >}}GDPR compliant{{< /a >}} on its own. The GDPR (the UK GDPR in Britain, the EU GDPR in France) places the duties on whoever decides why and how personal data is used: the **controller**. For your clients' data, that is you, whichever tool you open.

Personal data is any information relating to an identified or identifiable living person. A name, an email address or a phone number, obviously, but also a description precise enough to point to one person: "the owner of the only bakery in the village" identifies someone as surely as a name.

Two consequences for a small business:

- **Company data is not personal data.** A limited company's name, its registered office and a generic info@ address all fall outside the GDPR. A sole trader's business details, on the other hand, are personal data, because the business is the person. So is a named address such as firstname.lastname@company.co.uk.
- **Pasting is processing.** When you paste a client's details into an assistant, you send them to the company that runs it. The GDPR then asks on what basis, under what contract, for what purpose, and what happens to them next.

So the useful question is not whether ChatGPT is compliant, but whether your use of it is. The answer starts with the plan.

## Personal plans vs business plans: the contract makes the difference

The plan decides the provider's role, and price has nothing to do with it: ChatGPT Pro is OpenAI's most expensive personal plan, and it is still a personal plan.

| | Personal plans | Business plans and APIs |
|---|---|---|
| ChatGPT | Free, Go, Plus, Pro | Business, Enterprise, OpenAI API |
| Claude | Free, Pro, Max | Team, Enterprise, Claude API |
| Contract with your business | Consumer terms only | A data processing agreement |
| Provider's role | Controller, under its own privacy policy | Your processor, acting on your instructions |
| Training on your content | ChatGPT: on until you switch it off. Claude: your choice | Not by default |

On a personal plan, the provider handles your conversations under its own privacy policy. No data processing agreement links your business to OpenAI or Anthropic, so a client's details pasted there go to a third party that is not your processor. That is hard to justify under the GDPR, whatever your settings.

On a business plan or through an API, the provider acts as your processor: it handles the data on your behalf, under {{< a key="gdpr-data-processing-agreement" >}}the written contract that Article 28 of the GDPR requires{{< /a >}}. OpenAI offers a **data processing addendum** (DPA) to customers of ChatGPT Business, ChatGPT Enterprise and its API platform, signed through the DPA form linked from [OpenAI's enterprise privacy page](https://openai.com/enterprise-privacy/). Anthropic's DPA is incorporated into its Commercial Terms, which cover Claude Team, Enterprise and the API, and those terms state that Anthropic may not train models on customer content.

If you work alone, a team plan can feel oversized: Claude Team, for example, is sold from two users. For occasional tasks, anonymising before you paste (see below) is the practical answer. For regular work on client data, a business plan or the API is the route that comes with a processor contract.

## What client data you can put into ChatGPT, and what to keep out

Sort what you want to paste into three groups before you open the assistant.

### Fine on any plan, with training switched off

- Your own drafts, offers, prices and procedures.
- Public information about companies.
- Text you have anonymised properly.
- General questions, such as how to reply to a client who disputes an invoice.

When I write a client's website with AI, the material is about the business: what it offers, the clients it prefers working with, the keywords from my SEO research. That is business information, not personal data, as long as it does not describe a named person and the business is not a sole trader.

### Only on a business plan or the API, and only what the task needs

- Clients' and prospects' names, work email addresses and phone numbers.
- A client's email you need to answer, or meeting notes that name people.
- A prospect list you want to personalise, which brings rules of its own: see my {{< a key="cold-email-gdpr-uk-france" >}}cold email GDPR checklist{{< /a >}}.

**Only what the task needs** is the GDPR's data minimisation principle in practice. To draft a reply, the assistant needs the question, not the client's address and order history.

### Keep out altogether

My advice for a small business, whatever the plan:

- Special category data: health, racial or ethnic origin, religious or philosophical beliefs, political opinions, trade union membership, sex life or sexual orientation, genetic and biometric data. Criminal records too.
- Identity numbers (passport, National Insurance number), bank details and card numbers.
- Passwords, API keys and access codes.
- Children's data.
- Full exports of your customer file or CRM.
- Anything covered by a confidentiality agreement or professional secrecy, which is a contract question as much as a GDPR one.

Special category data hides in ordinary messages. A client who writes that the work must wait until after her operation has just given you health data.

## How to anonymise client data before you paste it

Anonymised data falls outside the GDPR, but only if nobody can identify the person any more by means reasonably likely to be used. Replacing names with codes while you keep the list of who is who is pseudonymisation, and **pseudonymised data is still personal data**.

1. **Replace names with roles**: [CLIENT], [ARCHITECT], [SUPPLIER].
2. **Delete contact details**: email addresses, phone numbers, postal addresses and the signature block.
3. **Cut the quoted thread** at the bottom of an email: it often holds more names than the message itself.
4. **Generalise what could single someone out**: a town rather than a street, "a restaurant" rather than its name, a month rather than a date.
5. **Remove reference numbers**: invoices, orders, accounts, contracts.
6. **Reread it as a stranger.** If someone who knows the area could still recognise the person, generalise further.

Here is a made-up example, before and after:

```text
Before:
Hi, it's Claire Hughes (07700 900123). We've moved to 14 Elm Road,
Leeds, and with my husband's back operation the new kitchen will have
to wait until May. Can you move the fitting date and keep our deposit?

After:
Hi, it's [CLIENT]. We've moved, and for personal reasons the new
kitchen will have to wait until [MONTH]. Can you move the fitting
date and keep our deposit?
```

The second version is all the assistant needs to draft a polite reply about the new date. The address, the phone number and the husband's operation, which is health data about a third person, never had to leave your inbox. Put the details back in your own email, once the assistant has done its part.

## The settings to change before you paste anything

### In ChatGPT

- **Training.** On a personal account, open **Settings > Data controls** and switch off **Improve the model for everyone**. The choice applies to your whole account, on every device, and your chats stay in your history ([OpenAI's data controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq)).
- **Temporary chats** are not used for training and are deleted after 30 days: use them for one-off tasks.
- **Memory.** ChatGPT can remember details from one conversation to the next. Check what it has stored and delete anything about a client.

### In Claude

- Since 28 August 2025, Free, Pro and Max users choose in their **privacy settings** (claude.ai/settings/data-privacy-controls) whether their chats can be used to train Anthropic's models. If you allow it, data is kept for up to five years; if not, for 30 days ([Anthropic's announcement](https://www.anthropic.com/news/updates-to-our-consumer-terms)).
- Incognito chats are not used for training even when you have allowed it, and a conversation you delete is not used for future training.

{{< callout type="warning" >}}Switching training off does not turn a personal account into a business one. It changes what the provider does with your chats, not the contract you have with it, so **the three groups above still apply**.{{< /callout >}}

## Hallucinations: the accuracy principle applies to AI output

The GDPR asks you to keep the personal data you hold accurate. An assistant that invents a detail about a person creates inaccurate personal data the moment you copy it into a client file, a CRM or an email.

In my work, ChatGPT tends to hallucinate a bit too much, while Claude, especially Fable 5.1, has been extremely accurate. That is my experience on my own tasks, not a benchmark, and no assistant is infallible. Three habits keep invented details out of your records:

1. Never ask an assistant what it knows about a named person and save the answer.
2. Ask it to work only from the documents you give it.
3. Check every name, date and amount against the source before it goes into a file or an email.

## Automations and the API: the same rules, with more data

Automations raise the stakes, because they handle client data without anyone pasting it. When I brought {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}} more prospects than the team could handle, they asked me for an internal app to see everything clearly and never miss a call-back. It manages prospects, job sites, communication with the employees, the calendar and accounting analytics, with AI and phone integrations ({{< a key="bespoke-crm-internal-app" >}}the story of that bespoke CRM{{< /a >}}). For an automation like that, I need access to the client's mailbox, for example.

Once an automation runs, every email, form entry or call note it handles passes through each service in the chain: the automation platform, the AI API, the CRM. Each one is a processor, so for each one:

- check that it offers a data processing agreement, and accept or sign it;
- check where it stores data, and {{< a key="gdpr-us-tools-data-transfers" >}}how transfers outside the UK or the EEA are covered{{< /a >}} (usually an adequacy decision or standard contractual clauses);
- check what it does with your content: Anthropic's Commercial Terms rule out training, and the OpenAI API does not train on it unless you opt in, although it may keep inputs and outputs for up to 30 days to monitor abuse (its Responses API also stores responses unless you set `store` to `false`);
- add it to your record of processing activities.

n8n can also be self-hosted, on a server you control, which takes one company out of the chain. My {{< a key="zapier-vs-make-vs-n8n" >}}Zapier vs Make vs n8n{{< /a >}} comparison covers self-hosting and GDPR too, and my tutorials on the {{< a key="openai-api-tutorial" >}}OpenAI API{{< /a >}} and the {{< a key="claude-api-tutorial" >}}Claude API{{< /a >}} cover the first steps with each.

## What the ICO, the CNIL and the EU AI Act expect

In the UK, the regulator is the ICO, which publishes guidance on AI and data protection. In France, it is the CNIL, which has published its own recommendations on AI. Two obligations matter most for a small business that uses AI.

**A data protection impact assessment (DPIA)** is required before processing that is likely to result in a high risk to people. Feeding customer records into an AI tool on a regular basis, or anything sensitive, is the kind of project that is likely to need one, and both regulators publish guidance and templates for it.

**AI literacy** is the second, if your business is in the EU or the work you produce with AI is used there. Article 4 of the EU AI Act, which has applied since 2 February 2025, asks companies that use AI systems to take measures so that their staff, and anyone using AI on their behalf, have a sufficient level of AI literacy. The Digital Omnibus on AI, Regulation (EU) 2026/1744, in force since 27 July 2026, softened that wording into measures that support AI literacy, without removing the duty. For a small team, a one-page rule on what may and may not be pasted, explained to each person who uses an assistant, is a sensible start. The AI Act is EU law: in the UK, the UK GDPR and the ICO's guidance remain the reference.

## Before you paste client data: a checklist for your team

1. **Choose the plan**: personal for anonymised text only, a business plan or the API for client data.
2. **Put the DPA in place** with each provider (for OpenAI, through its DPA form), and keep a copy.
3. **Switch off training** on every personal account used for work.
4. **Write the three groups on one page** (fine anywhere, business plan only, never) and share it with everyone who uses an assistant.
5. **Anonymise by default**, even on a business plan: what the assistant never receives cannot leak.
6. **Check every fact about a person** before it goes into a file or an email.
7. **List each AI tool and automation** in your record of processing activities.
8. **Review it once a year**, because plans, settings and terms change.

If you work in health, law or finance, with children's data, or plan to feed your whole customer file into an automation, ask a data protection specialist before you start. It is the advice I would give any client: I build websites and automations, but for the legal side, a specialist is the right person.
