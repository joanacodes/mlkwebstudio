---
title: "A big client sent you a security questionnaire? How a small team answers it"
seo_title: "Vendor security questionnaire: how to answer it honestly"
description: "Got a vendor security questionnaire from a large client? The questions small teams always face, how to answer no honestly, and a trust pack to reuse."
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

A vendor security questionnaire is the list of questions a large client sends a supplier before signing or renewing a contract. It checks that you will not become the easy way into the client's systems or data: who can log in to what, how your laptops are protected, where your backups live and what happens when something goes wrong.

Receiving one is good news: a client rarely sends it to a supplier it has already ruled out. When I design a website, I want my clients' prospects to take them seriously from the first screen, because it changes how a buyer negotiates. A clear, honest questionnaire does the same job with a procurement team. If you are starting from zero, my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}} covers the basics behind most of these questions.

## Why large clients send vendor security questionnaires

Attackers can reach a large company through a supplier that already has access: an IT provider, an agency with logins, a developer with a copy of the customer database. Several laws and standards now make the client check you.

- **NIS2** ([Directive (EU) 2022/2555](https://eur-lex.europa.eu/eli/dir/2022/2555/oj)). Article 21(2)(d) requires the entities it covers to manage ‘supply chain security’, including their relationships with direct suppliers, and Article 21(3) asks them to weigh each supplier's cybersecurity practices. Most small teams are below its size thresholds, but a client in scope passes the duty down, to British suppliers too, even though NIS2 does not apply in the UK. As of 19 October 2026, France still has not adopted its transposition law, two years after the 17 October 2024 deadline. My article on {{< a key="nis2-small-business" >}}whether NIS2 applies to your company{{< /a >}} explains who is in scope.
- **DORA** (Regulation (EU) 2022/2554) has applied since 17 January 2025 to banks, insurers, investment firms and other financial entities. Articles 28 to 30 make them manage the risk of their ICT providers, keep a register of those contracts and write in specific clauses, from where data is processed to help during an incident. Expect the long version if you provide them with an ongoing digital service.
- **GDPR** ([Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj)). Under Article 28(1), a controller may only use processors ‘providing sufficient guarantees’ of appropriate technical and organisational measures. The questionnaire checks those guarantees; the {{< a key="gdpr-data-processing-agreement" >}}data processing agreement{{< /a >}} binds you to them. UK GDPR has the same Article 28.
- **ISO/IEC 27001.** A certified client must manage security in its supplier relationships (Annex A controls 5.19 to 5.22 of the 2022 version), and its auditor will ask how suppliers were assessed.

This article explains the rules and common practice; it is not legal advice.

## What a security questionnaire looks like

The format changes more than the content:

| Format | What it is | What it means for you |
|---|---|---|
| The client's spreadsheet | Questions with Yes / No / N/A, comment and sometimes evidence columns | The comment column is where you explain |
| SIG (Shared Assessments) | A licensed questionnaire updated yearly, in a ‘Lite’ or ‘Core’ version depending on your risk | Lite for lower-risk suppliers; Core is long |
| CAIQ (Cloud Security Alliance) | A free questionnaire for cloud and software providers, built on the Cloud Controls Matrix | You can publish it in the CSA STAR registry as a self-assessment, which is not a certification |
| A supplier portal | An online third-party risk platform with questions and uploads | Some add a security rating based on what anyone can see of your domain, so your website and email settings count |

In the UK, the NCSC publishes its own [supplier assurance questions](https://www.ncsc.gov.uk/guidance/supplier-assurance-questions) for buyers; reading them first is a good rehearsal.

## Before you answer: scope, deadline and what does not apply

1. **Ask what the questionnaire covers**: which service, which data, and whether you will connect to the client's systems. When I build an automation, for example, I may need access to a client's mailbox, and that alone brings every access-control question into play.
2. **Ask for the deadline and a contact.** A short call can clear up questions written for a company of 5,000 people.
3. **Ask whether ‘not applicable’ is accepted** for a data centre, a round-the-clock security operations centre or a security department. The NCSC itself warns buyers that over-asking creates unnecessary work for suppliers.
4. **Read everything once, then sort each question**: yes (with evidence), partly, no, not applicable.

{{< callout type="tip" >}}You do not need a consultant for a first questionnaire. You need the list of tools your team uses, an honest look at how you work, and the person who signs your contracts to read the answers before they go.{{< /callout >}}

## The questions every small team gets, and honest answers

The same themes come back whatever the format:

| Theme | What they ask | A good answer contains |
|---|---|---|
| Policy | A documented security policy approved by management? | A short written policy, dated, approved by the owner, with a review date |
| Access | Multi-factor authentication enforced? How are passwords stored and shared? | Two-factor authentication everywhere, named logins rather than shared ones, a {{< a key="password-manager-teams" >}}team password manager{{< /a >}} |
| Leavers | How fast is access removed when someone leaves? | An offboarding checklist and a target, such as the same working day |
| Devices | Laptops encrypted and up to date? Anti-malware? | Full-disk encryption (BitLocker or FileVault), automatic updates, built-in anti-malware on, no unsupported systems |
| Backups | Encrypted, stored separately, tested? | What you back up, how often, where, and the date of the last test restore |
| Incidents | A response plan? How fast will you notify us? | A one-page plan and a notification time you can keep (GDPR Article 33(2) already requires a processor to notify the controller ‘without undue delay’) |
| Sub-processors | Which third parties handle our data? | Each tool that touches client data, its purpose and its storage region |
| Data location | Where is our data? Does it leave the UK or the EEA? | Your regions, and the safeguard for any transfer |
| People | Confidentiality clauses? Security training? | Clauses for employees and freelancers, and a dated yearly session |
| Testing | Penetration tests? Certifications? | Often a ‘no’ with a compensating measure, or the certificate you hold |

My {{< a key="incident-response-first-hour" >}}first-hour plan for incidents{{< /a >}} is a good base for that one-page plan.

## When the honest answer is no

Never tick ‘yes’ for something you do not do. Clients check answers during audits and after incidents, some attach the questionnaire to the contract, and a false ‘yes’ found later costs more than the deal. A sensible buyer expects some ‘no’ answers from a supplier of five people; what it weighs is whether you understand and manage the risk.

There are three honest ways to write a no:

1. **No, with the measure you use instead**, as in the first example below.
2. **No, with a date.** ‘Planned for March 2027’ only works if you meet it: the client may check.
3. **Not applicable, with the reason.** ‘We do not operate a data centre’ is complete once you say who does.

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
```

{{< callout type="warning" >}}Your provider's certificate is not yours. ‘Our files are stored in Microsoft 365, which is ISO 27001 certified’ is true and useful. ‘We are ISO 27001 certified’ is not, and the client will ask for the certificate.{{< /callout >}}

## Cyber Essentials, ISO 27001 or SOC 2: which certificate is worth it

- **Cyber Essentials (UK).** The government-backed scheme, run by the NCSC with its delivery partner IASME, covers five controls: firewalls, secure configuration, security update management, user access control and malware protection. A director signs off the self-assessment, an independent assessor marks it, and the certificate lasts 12 months; Cyber Essentials Plus adds a hands-on technical audit and is quoted separately. At the time of writing (October 2026), IASME charges £320 plus VAT (about $425) for up to nine employees and £440 plus VAT (about $585) for 10 to 49. UK organisations with a turnover under £20 million that certify their whole organisation can opt in to free cyber liability insurance arranged by IASME (£25,000 of cover, about $33,000), and central government has required Cyber Essentials since 2014 for contracts involving personal information and certain ICT services. Current costs are on the [NCSC's Cyber Essentials page](https://www.ncsc.gov.uk/cyberessentials/overview).
- **ISO/IEC 27001.** The international standard for an information security management system. A certification body accredited by UKAS in the UK (COFRAC in France) certifies you for three years, with surveillance audits in between. Getting there takes months of documentation and practice: worth it when clients make it a condition, or when sensitive data is your business.
- **SOC 2.** An American attestation report by an audit firm against AICPA criteria, not a certificate: Type 1 looks at your controls on one date, Type 2 over several months. US clients and software buyers ask for it; a European small team rarely needs it first.

For most small teams selling in the UK, Cyber Essentials is the sensible first step: it costs a few hundred pounds, and its five controls match what questionnaires ask. In France, the free MonAideCyber diagnostic from ANSSI is not a certificate, but a dated diagnostic and the measures applied afterwards make a credible answer. My guide to {{< a key="free-cybersecurity-help" >}}free cybersecurity help in the UK and France{{< /a >}} covers both.

## Build a trust pack once and reuse it

The first questionnaire is the hard one. Keep what you produce in a trust pack, a folder ready for the next client:

1. **A two-page security overview**: what you do, the data you handle, where it is stored, your main measures and a security contact.
2. **Your security policy**, or a summary.
3. **Your data processing agreement**, or confirmation that you will sign the client's.
4. **Your sub-processor list**: each tool, its purpose, the data it holds and its region.
5. **Certificates**: Cyber Essentials if you have it, and links to your main providers' certification pages.
6. **Your insurance certificate**, if you hold {{< a key="cyber-insurance" >}}cyber insurance{{< /a >}}: some questionnaires ask for the insurer and the amount of cover.
7. **An answer library**: every question you have answered, with the approved wording.

Date and version every document. The overview can go to anyone; keep the full policy and the answer library for clients who have signed a confidentiality agreement.

## Your checklist, and when to get help

1. Ask for the scope, the deadline and a contact.
2. Fix the quick wins first: two-factor authentication, a password manager, encrypted laptops and automatic updates can turn several ‘no’ answers into ‘yes’ within days.
3. Write the policy and the sub-processor list, answer every question, then file the answers in your trust pack.

Some parts are worth handing over. A lawyer should read security clauses that carry penalties, unlimited liability or audit rights; a data protection officer (DPO) or adviser helps when sensitive personal data is at the heart of your business; and an accredited firm should run any penetration test or ISO 27001 audit, because a supplier cannot mark its own homework. If the questions reveal outdated software on your website or no email authentication records on your domain, fix that before the client's security rating does the talking.
