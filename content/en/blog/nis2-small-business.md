---
title: "NIS2: does it apply to your company, and what will your clients ask?"
seo_title: "NIS2 for small businesses: scope and what clients will ask"
description: "NIS2 and small businesses: the size and sector tests, where France and the UK stand in October 2026, and the security questions your clients will send."
slug: "nis2-small-business"
translationKey: "nis2-small-business"
date: 2026-10-18T22:15:00+02:00
lastmod: 2026-10-18T22:15:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["NIS2 small business", "does NIS2 apply to my company", "NIS2 scope", "NIS2 supply chain security", "NIS2 essential and important entities", "NIS2 UK"]
summary: "NIS2 applies to medium-sized and large organisations in 18 sectors, plus a few providers whatever their size, such as DNS and trust service providers, so most small teams are not directly covered. Your clients may be, and NIS2 makes them check their suppliers: expect questionnaires and contract clauses on multi-factor authentication, backups and incident reporting. As of 19 October 2026, France has not yet adopted its transposition law."
cover: "nis2-small-business"
cover_alt: "The title “NIS2: does it apply to your company, and what will your clients ask?” in white on a ribbed-glass panel over a photo, with a map marked with location pins"
related: ["security-questionnaire", "free-cybersecurity-help", "cyber-resilience-act-apps", "gdpr-data-breach", "cybersecurity-guide"]
services: ["rescue"]
faq:
  - q: "Is NIS2 the same thing as the GDPR?"
    a: "No. The GDPR protects personal data and applies to almost every business that handles it, including its security duty in Article 32. NIS2 covers the security of the networks and systems of organisations in critical sectors, whatever data they hold. One incident can trigger both: ransomware at a company in scope may need a NIS2 report and a GDPR breach notification."
  - q: "What is the difference between an essential and an important entity?"
    a: "Essential entities are mostly large organisations in the Annex I sectors, plus a few providers such as DNS service providers whatever their size; the others in scope are important entities. Essential entities can be inspected and audited at any time, with maximum fines of at least €10 million or 2% of worldwide annual turnover. Important entities are checked after the fact, when there are signs of a problem, with maximum fines of at least €7 million or 1.4%."
  - q: "Does NIS2 apply to a UK or other non-EU company?"
    a: "Only if the company is in scope itself, for example a medium-sized or larger cloud, data centre or managed IT provider offering its services in the EU. Providers of that kind must then name a representative in an EU country where they operate (Article 26). Otherwise, a UK, Swiss or US company meets NIS2 through the supplier requirements of its EU clients."
  - q: "Is there an official NIS2 certification for suppliers?"
    a: "No. As of 19 October 2026, NIS2 does not create a certificate that proves a supplier complies with it. Clients accept other evidence: a completed questionnaire with supporting documents, ISO/IEC 27001 certification or, in the UK, Cyber Essentials."
---

NIS2 is the EU law that sets cybersecurity duties for the organisations the economy depends on, and for most small teams the short answer is reassuring: it does not apply to you directly. It covers medium-sized and large organisations in 18 sectors, plus a few kinds of provider whatever their size.

What does reach small teams is the supply chain. Your clients may be in scope, and NIS2 makes them check the security of the suppliers they rely on. So the useful question is often less "am I covered?" than "what will my clients ask me, and can I answer?"

This guide gives you three tests for your own status, the state of play in France, the EU and the UK as of 19 October 2026, and the questions and clauses to prepare for. It is part of my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}}.

## What NIS2 is

NIS2 is [Directive (EU) 2022/2555](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng), adopted in December 2022 to replace the first NIS Directive of 2016. A directive does not bind companies on its own: each EU country has to write it into national law, and the deadline for that was 17 October 2024.

It sorts the organisations in scope into essential entities, mostly large companies in the most critical sectors, and important entities. Both have the same core duties: manage cybersecurity risks, report serious incidents and make their management answerable. Supervision and fines differ.

## Does NIS2 apply to your company? Three questions

Your company is in scope if you answer yes to the first two questions, or yes to the third.

### 1. Is your activity in one of the 18 sectors?

Annex I of the directive lists the sectors of high criticality, Annex II the other critical sectors:

| Annex I: high criticality | Annex II: other critical sectors |
|---|---|
| Energy, transport, banking, financial market infrastructures | Postal and courier services, waste management |
| Health, drinking water, waste water | Chemicals, food production and distribution |
| Digital infrastructure: cloud, data centres, DNS, trust services, telecoms | Manufacturing: medical devices, electronics, machinery, vehicles and more |
| ICT service management for businesses: managed IT and security services | Digital providers: online marketplaces, search engines, social networks |
| Public administration, space | Research organisations |

A design studio, an accountancy firm, an architect or a restaurant is not on these lists. An IT company that runs or maintains its clients' systems is: NIS2 calls it a managed service provider.

### 2. Is your company at least medium-sized?

NIS2 borrows the EU definition of company size. You stay below the threshold, and outside NIS2, if you have **fewer than 50 staff and either an annual turnover or a balance sheet total of €10 million or less**. Staff are counted in full-time equivalents. In a group, the definition generally adds the figures of linked companies, so run the test with the group's numbers.

### 3. Is your activity covered whatever its size?

A few activities are covered even for a two-person company:

- providers of public electronic communications networks or services, such as internet access;
- trust service providers (electronic signatures, seals, timestamps);
- top-level domain registries and DNS service providers;
- organisations their country designates, for example as the only provider of an essential service.

{{< callout type="warning" >}}If you run DNS for your clients' domains, read the definition of a **DNS service provider** in Article 6: it includes authoritative DNS offered to third parties, with no size threshold. Web hosts and agencies that offer it should check where they stand.{{< /callout >}}

For the edge cases, see the Commission's [NIS2 FAQ](https://digital-strategy.ec.europa.eu/en/faqs/directive-measures-high-common-level-cybersecurity-across-union-nis2-directive-faqs).

## What NIS2 requires from the companies in scope

If your company is in, three sets of duties apply, in proportion to its size and exposure.

### Ten security measures (Article 21)

The directive sets the minimum:

1. policies on risk analysis and information system security;
2. incident handling;
3. business continuity: backup management, disaster recovery, crisis management;
4. supply chain security;
5. security when buying, developing and maintaining systems, including vulnerability handling;
6. checking that the measures work;
7. basic cyber hygiene and cybersecurity training;
8. cryptography and, where appropriate, encryption;
9. staff security, access control and asset management;
10. multi-factor authentication and secured communications, where appropriate.

### Incident reporting (Article 23)

For a significant incident: an early warning to the national authority or CSIRT within 24 hours of becoming aware of it, an incident notification within 72 hours, then a final report no later than one month after that notification.

### Management accountability (Article 20)

The management body approves the measures, oversees them and can be held liable for breaches. Its members must follow cybersecurity training.

Read the list of measures again as a supplier: point 4 is the reason the other nine end up in your inbox.

## Where NIS2 stands on 19 October 2026

### France

France's transposition bill, the "projet de loi relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité", was adopted by the Senate on 12 March 2025 and voted by a special committee of the National Assembly on 10 September 2025. The Assembly debate planned for 7 and 9 October 2026 was taken off the agenda, and no new date had been announced at the time of writing. Until the law and its implementing decree are adopted, NIS2's duties do not yet bind companies for their activities in France.

The ANSSI, France's national cybersecurity agency, has offered voluntary pre-registration on its MonEspaceNIS2 portal since 24 November 2025, with a simulator to check whether you are likely to be in scope. Registration only becomes mandatory once the law and its decree are out. On 1 October 2026, the ANSSI told MPs it was considering full compliance by the end of 2028: an intention, not a rule.

### The rest of the EU

Member states have moved at different speeds, so a client based elsewhere in the EU may already be bound by its national law. The EU text itself is moving too: on 20 January 2026, the Commission proposed targeted amendments to NIS2, including a lighter category for "small mid-cap" companies; as of 19 October 2026, they are a proposal, not law.

### The UK

NIS2 does not apply in the UK, which left the EU before the directive was adopted. The UK keeps its NIS Regulations 2018, which cover operators of essential services (energy, transport, health, drinking water, digital infrastructure) and some digital service providers (online marketplaces, search engines, cloud services). The Cyber Security and Resilience Bill would bring medium and large managed service providers into that regime for the first time. As of 19 October 2026, the Bill is still before the House of Lords and has not received Royal Assent.

## Why your clients will ask you anyway

Article 21(2)(d) makes every company in scope manage its supply chain security, "including security-related aspects concerning the relationships between each entity and its direct suppliers or service providers". Article 21(3) adds that it must take into account each supplier's vulnerabilities and security practices. In plain terms: if you host, build, maintain or access anything for a client in scope, its compliance file needs a page about you. Location does not change this: a supplier in Leeds or Lausanne gets the same questions from an EU client.

That page reaches you in two forms:

- a questionnaire, as a spreadsheet, an online form or a supplier portal;
- contract clauses, often in a security annex: minimum security requirements, a duty to report incidents to the client within a set time, a right to audit or to receive audit reports, rules on subcontracting, and what happens to the client's data when the contract ends.

For clients in the digital sectors covered by Implementing Regulation (EU) 2024/2690 (cloud, data centres, managed IT services and others), the supplier policy is spelled out in detail, from selection criteria to contract terms and exit. Financial clients follow DORA, which has applied since 17 January 2025 and is more demanding still about ICT suppliers.

## The questions to expect, and what to have ready

The UK's NCSC publishes a model list of [supplier assurance questions](https://www.ncsc.gov.uk/guidance/supplier-assurance-questions) under headings such as governance, incident management, data protection, staff security, testing and contract terms. Mapped to Article 21(2), this is what a small team should be able to show:

| Your client must manage | The question you will get | What to have ready |
|---|---|---|
| Access control and MFA (points i and j) | Is multi-factor authentication on for every account that touches our data? | MFA on email, cloud and admin accounts ({{< a key="two-factor-authentication-passkeys" >}}one afternoon's work{{< /a >}}), a list of who can access what |
| Business continuity (point c) | How do you back up, and when did you last test a restore? | {{< a key="backups-3-2-1" >}}3-2-1 backups{{< /a >}} and the date of your last restore test |
| Incident handling (point b) | Will you tell us about an incident, and how fast? | A named contact, a one-page plan, a deadline you can keep |
| Supply chain (point d) | Which subcontractors and cloud tools handle our data, and where? | A list of your tools, where they store data, your data processing agreements |
| Staff security and training (points g and i) | How do you remove access when someone leaves? Do you train your team? | An offboarding routine, the date of your last awareness session |
| Vulnerability handling (point e) | How fast do you install security updates? | Automatic updates, supported systems, a routine for your website and its plugins |

Answer truthfully: a "no" with the measure you use instead, or a date, is better than a "yes" you cannot prove. My guide to {{< a key="security-questionnaire" >}}answering a security questionnaire{{< /a >}} goes through the wording, the evidence and the trust pack to reuse.

A certificate can answer several rows at once. In the UK, Cyber Essentials costs £320 plus VAT (about $425) for up to nine employees at the time of writing (October 2026), according to [IASME](https://iasme.co.uk/cyber-essentials/). In France, the ANSSI's free MonAideCyber diagnostic is a sensible first step, and my guide to {{< a key="free-cybersecurity-help" >}}free cybersecurity help in the UK and France{{< /a >}} compares the schemes.

## Before the questionnaire arrives: your checklist

If I had one afternoon to prepare, I would start with points 3 to 5: they answer half of the table above.

1. Check your own status with the three questions, and note the figures you used.
2. List the clients that may be in scope, sector by sector, and the access you have to their systems or data.
3. Switch on multi-factor authentication everywhere, starting with email and admin accounts.
4. Back up, then test a restore.
5. Write a one-page incident plan with a contact who answers. A personal data breach also has its own 72-hour clock under the GDPR, explained in {{< a key="gdpr-data-breach" >}}my data breach guide{{< /a >}}.
6. Keep a list of your tools and subcontractors, with where each one stores data.
7. Read every security clause before signing: deadlines you can meet, audit rights with notice and limits, liability with a cap.

If you sell apps or software in the EU, a different law covers the product itself: see {{< a key="cyber-resilience-act-apps" >}}what the Cyber Resilience Act asks of your app{{< /a >}}.

This guide is general information, not legal advice. A lawyer is worth the fee when a contract makes you liable for a client's fines or gives it unlimited audit rights, or when the three tests leave you unsure about your own company, which can happen to hosting, DNS and managed IT providers.
