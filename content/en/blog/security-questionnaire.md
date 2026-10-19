---
title: "A big client sent you a security questionnaire? How a small team answers it"
seo_title: "Vendor security questionnaire: how to answer it honestly"
description: "Got a vendor security questionnaire from a large client? The questions small businesses always face, how to answer no honestly, and a trust pack to reuse."
slug: "vendor-security-questionnaire"
translationKey: "security-questionnaire"
date: 2026-10-18T22:12:00+02:00
lastmod: 2026-10-18T22:12:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["vendor security questionnaire", "how to answer a security questionnaire", "supplier security questionnaire", "third-party risk questionnaire", "Cyber Essentials for suppliers", "security trust pack"]
summary: "A vendor security questionnaire is how a large client checks that you will not be the weak link in its supply chain, often because NIS2, DORA or GDPR Article 28 require it to. Answer every question truthfully: a ‘yes’ with evidence, a ‘no’ with the measure you use instead or a date, and ‘not applicable’ with the reason. Then keep your answers, policy, data processing agreement and sub-processor list in a trust pack you can reuse."
cover: "security-questionnaire"
cover_alt: "The title ‘A big client sent you a security questionnaire? How a small team answers it’ in white on a ribbed-glass panel over a photo, with a blueprint grid and a target"
related: ["nis2-small-business", "gdpr-data-processing-agreement", "free-cybersecurity-help", "cyber-insurance", "cybersecurity-guide"]
services: ["rescue"]
faq:
  - q: "Can I refuse to fill in a vendor security questionnaire?"
    a: "You can, but a large client usually cannot add a supplier without one, so refusing tends to end the conversation. Ask instead which sections apply to your service, or whether your security overview and certificates can answer part of it."
  - q: "Can I use AI to fill in a security questionnaire?"
    a: "As a drafting aid, yes: give it your own policy and past answers and let it suggest wording. Check every line yourself, because an AI tool will happily write ‘yes’ for something you do not do, and make sure the client's document may be shared with that tool."
  - q: "Do I need Cyber Essentials to work with large UK companies?"
    a: "The law does not require it for private contracts. But the NCSC's Cyber Essentials supply chain playbook encourages organisations to set it as a minimum for some of their suppliers, so expect the question from UK clients whose data or systems you touch."
  - q: "How often should we update our questionnaire answers?"
    a: "Review your trust pack at least once a year, and straight away when something changes: a new tool that handles client data, a new sub-processor, an incident or a new certificate. Clients that review their suppliers regularly will ask again, and a dated answer library saves you starting from scratch."
  - q: "Does a one-person business answer the same questions?"
    a: "Yes. Answer for yourself, your devices and the tools you use, and mark team questions such as onboarding or staff training ‘not applicable’ only when they really do not apply: if freelancers or subcontractors see client data, the questions cover them too."
---

A vendor security questionnaire is the list of questions a large client sends a supplier before signing or renewing a contract. It checks that you will not become the easy way into the client's systems or data: who can log in to what, how your laptops are protected, where your backups live, what happens when something goes wrong and which tools handle the client's personal data.

Receiving one is good news. A client rarely sends a questionnaire to a supplier it has already ruled out, and a small team that answers clearly, honestly and with evidence can look more professional than a bigger competitor that returns a vague form.

When I design a website, I want my clients' prospects to take them seriously from the first screen, because it changes how a buyer negotiates. A well-answered questionnaire does the same job with a procurement team. If you are starting from zero, my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}} covers the basics most of these questions are built on.

## Why large clients send vendor security questionnaires

An attacker who cannot get into a large company directly can go through a supplier that already has access: an IT provider, an agency with logins, a developer holding a copy of the customer database. Several rules now make the client responsible for checking you.

- **NIS2** ([Directive (EU) 2022/2555](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)). Article 21(2)(d) requires the essential and important entities it covers to manage ‘supply chain security’, including their relationships with direct suppliers and service providers, and Article 21(3) asks them to weigh each supplier's cybersecurity practices. Most small teams fall below its size thresholds, but a client in scope passes the duty down through the questionnaire and the contract. NIS2 is EU law and does not apply in the UK, yet a British supplier to an EU client in scope gets the same questions. The transposition deadline was 17 October 2024; as of 19 October 2026, France still has not adopted its transposition law. My article on {{< a key="nis2-small-business" >}}whether NIS2 applies to your company{{< /a >}} explains who is in scope.
- **DORA** (Regulation (EU) 2022/2554), which has applied since 17 January 2025 to banks, insurers, investment firms and other financial entities. Articles 28 to 30 make them manage the risk of their ICT providers, keep a register of every contract with them and write specific clauses into those contracts, from where data is processed to help during an incident. If you provide a digital service to a financial client on an ongoing basis, expect the long version of the questionnaire.
- **GDPR** ([Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj)). Article 28(1) says a controller may only use processors ‘providing sufficient guarantees’ of appropriate technical and organisational measures. The questionnaire is how the client checks those guarantees; the {{< a key="gdpr-data-processing-agreement" >}}data processing agreement{{< /a >}} is how it binds you to them. UK GDPR keeps the same Article 28, so British clients ask the same questions.
- **ISO/IEC 27001.** A certified client has to manage security in its supplier relationships (controls 5.19 to 5.22 in Annex A of the 2022 version), and its auditor will want to see how suppliers were assessed.

This article explains the rules and common practice; it is not legal advice.

## What a security questionnaire looks like

The format changes more than the content. You will usually receive one of these:

| Format | What it is | What it means for you |
|---|---|---|
| The client's own spreadsheet | Rows of questions with a Yes / No / N/A column, a comment column and sometimes an evidence column | The comment column is where you explain, so use it |
| SIG (Shared Assessments) | A licensed questionnaire updated every year, cut to a ‘Lite’ or ‘Core’ version depending on the risk you carry | Lite is the version for lower-risk suppliers; Core is long |
| CAIQ (Cloud Security Alliance) | A free questionnaire for cloud and software providers, built on the Cloud Controls Matrix | You can publish your answers in the CSA STAR registry as a self-assessment, which is not a certification |
| A supplier portal | The same kind of questions on an online third-party risk platform, with documents to upload | Some show a security rating built from what anyone can see of your domain, so your website and email settings count |

In the UK, the NCSC publishes its own [supplier assurance questions](https://www.ncsc.gov.uk/guidance/supplier-assurance-questions) for buyers. Read them before you start: governance, incident management, network protection, data protection, offshoring, personal data, personnel security, independent testing and contract terms give a fair idea of what you will meet, whatever the format.

## Before you answer: scope, deadline and what does not apply

1. **Ask what the questionnaire covers**: which service, which data, and whether you will connect to the client's systems. When I build an automation for a client, for example, I may need access to their mailbox, and that alone brings every access-control question into play.
2. **Ask for the deadline and a contact.** A short call with the person who sent it can clear up questions that were written for a company of 5,000 people.
3. **Ask whether ‘not applicable’ is accepted** for what does not fit a small team: a data centre, a round-the-clock security operations centre, a dedicated security department. The NCSC itself warns buyers that asking for too much creates unnecessary work for suppliers, so a proportionate answer is a fair request.
4. **Read everything once, then sort each question** into four piles: yes (with evidence), partly, no and not applicable.

{{< callout type="tip" >}}You do not need a consultant for a first questionnaire. You need the list of tools your team uses, an honest look at how you actually work, and the person who signs your contracts to read the answers before they go.{{< /callout >}}

## The questions every small team gets, and honest answers

Whatever the format, the same themes come back. The right-hand column shows what a credible answer from a small team contains.

| Theme | What they ask | What a good answer contains |
|---|---|---|
| Security policy | Do you have a documented security policy, approved by management? | A short written policy, dated, approved by the owner, with a review date |
| Access control | Is multi-factor authentication enforced? How are passwords stored and shared? | Two-factor authentication on every account, named logins rather than shared ones, and a {{< a key="password-manager-teams" >}}password manager for the team{{< /a >}} |
| Leavers | How quickly do you remove access when someone leaves? | An offboarding checklist and a target, such as the same working day |
| Devices | Are laptops encrypted and kept up to date? Is anti-malware installed? | Full-disk encryption (BitLocker or FileVault), automatic updates, built-in anti-malware switched on, no unsupported systems |
| Backups | Are backups encrypted, stored separately and tested? | What you back up, how often, where, and the date of your last test restore |
| Incidents | Do you have an incident response plan? How fast will you notify us? | A one-page plan and a notification time you can keep; GDPR Article 33(2) already requires a processor to notify the controller ‘without undue delay’ |
| Sub-processors | Which third parties handle our data? | Each tool that touches client data, what it does and where it stores data |
| Data location | Where is our data stored? Does it leave the UK or the EEA? | The regions you use, and the safeguard for any transfer |
| People | Do staff sign confidentiality clauses? Are they trained? | Confidentiality clauses for employees and freelancers, and a dated yearly training session |
| Testing and certification | Do you run penetration tests? Which certifications do you hold? | Often a ‘no’ with a compensating measure, or the certificate you hold |

For the incident line, write the plan before you need it: my {{< a key="incident-response-first-hour" >}}first-hour plan for a hacked mailbox, ransomware or bank fraud{{< /a >}} is a good base for that one page.

## When the honest answer is no

Never tick ‘yes’ for something you do not do. Clients check answers during audits and after incidents, some attach the questionnaire to the contract, and a false ‘yes’ discovered later costs more than the deal. A sensible procurement team expects some ‘no’ answers from a supplier of five people; what it weighs is whether you understand the risk and manage it.

There are three honest ways to write a no:

1. **No, with the measure you use instead.** You do not run penetration tests, but your files sit with a provider that publishes its certifications, and every account uses two-factor authentication.
2. **No, with a date.** ‘Planned for March 2027’ only works if you will meet it, because the client may come back and check.
3. **Not applicable, with the reason.** ‘We do not operate a data centre’ is a complete answer once you say who does.

In the comment column, it looks like this:

```text
Q: Do you perform annual penetration tests?
A: No. We do not host client data on our own servers: files are stored in
   [cloud provider], which publishes its certifications at [link]. All
   accounts use two-factor authentication, laptops are encrypted and
   updates are automatic. We can commission a test of [service] if the
   contract requires one.

Q: Are you ISO 27001 certified?
A: Not at present. We hold Cyber Essentials (certificate attached, valid
   until [date]) and apply the security policy attached as Annex 2.

Q: Describe the physical security of your data centre.
A: Not applicable: we do not operate a data centre. Client data is hosted
   by [provider] in [region], which describes its physical controls at [link].
```

{{< callout type="warning" >}}Your provider's certificate is not yours. ‘Our files are stored in Microsoft 365, which is ISO 27001 certified’ is true and useful. ‘We are ISO 27001 certified’ is not, and the client will ask for the certificate.{{< /callout >}}

## Cyber Essentials, ISO 27001 or SOC 2: which certificate is worth it

The certification question looks the most daunting, but the right answer depends on where your clients are and what they buy from you.

- **Cyber Essentials (UK).** The government-backed scheme, run by the NCSC with its delivery partner IASME, covers five controls: firewalls, secure configuration, security update management, user access control and malware protection. It is a self-assessment signed off by a director and marked by an independent assessor, valid for 12 months; Cyber Essentials Plus adds a hands-on technical audit. At the time of writing (October 2026), IASME charges £320 plus VAT (about $425) for up to nine employees and £440 plus VAT (about $585) for 10 to 49; Plus is quoted by the certification body. UK organisations with a turnover under £20 million that certify their whole organisation also get free cyber liability insurance arranged by IASME, and central government has required Cyber Essentials since 2014 for contracts that involve personal information and certain ICT services. The [NCSC's Cyber Essentials page](https://www.ncsc.gov.uk/cyberessentials/overview) has the current requirements and costs.
- **ISO/IEC 27001.** The international standard for an information security management system, certified by an accredited body (UKAS in the UK, COFRAC in France). The certificate runs for three years with surveillance audits in between, and getting there takes months of documentation and practice. It is worth it when large clients make it a condition, or when handling sensitive data is your business.
- **SOC 2.** An American attestation report written by an audit firm against AICPA criteria, not a certificate. A Type 1 report looks at your controls on a single date, a Type 2 over a period of months. US clients and software buyers ask for it; a European small team rarely needs it first.

For most small teams selling in the UK, Cyber Essentials is the sensible first step: it costs a few hundred pounds, its five controls match what questionnaires ask about, and the fixes improve your other answers too. In France, the free MonAideCyber diagnostic from ANSSI is not a certificate, but a dated diagnostic and the measures you applied afterwards make a credible answer. My guide to {{< a key="free-cybersecurity-help" >}}free cybersecurity help in the UK and France{{< /a >}} covers both.

## Build a trust pack once and reuse it

The first questionnaire is the hard one. Keep everything you produce for it in a trust pack: a folder you can send the next client the day they ask.

1. **A two-page security overview**: what you do, which data you handle, where it is stored, your main measures and a contact for security questions.
2. **Your written security policy**, or a summary of it.
3. **Your data processing agreement**, or confirmation that you will sign the client's.
4. **Your sub-processor list**: each tool, what it is used for, the data it holds and its region.
5. **Certificates**: Cyber Essentials if you have it, plus links to your main providers' certification pages.
6. **Your insurance certificate**, if you hold {{< a key="cyber-insurance" >}}cyber insurance{{< /a >}}, since some questionnaires ask for the insurer and the amount of cover.
7. **An answer library**: a spreadsheet of every question you have answered and the wording you approved.

Date every document and give it a version number. The overview can go to anyone who asks; keep the full policy and the answer library for clients who have signed a confidentiality agreement.

## Your checklist, and when to get help

1. Ask the client for the scope, the deadline and a contact.
2. Fix the quick wins first: two-factor authentication everywhere, a password manager, encrypted laptops and automatic updates can turn several ‘no’ answers into ‘yes’ within days.
3. Write the short security policy and the sub-processor list.
4. Answer every question: evidence for each yes, and a measure, a date or a reason for each no.
5. Save the final answers in your trust pack before you send them.

Some parts are worth handing over. A lawyer should read the contract's security clauses when they carry penalties, unlimited liability or audit rights; a data protection officer (DPO) or adviser helps when processing sensitive personal data is at the heart of your business; and an accredited firm should run any penetration test or ISO 27001 audit, because a supplier cannot mark its own homework. And if the questionnaire shows that your website runs outdated software or your domain has no email authentication records, fix that before the client's security rating does the talking.
