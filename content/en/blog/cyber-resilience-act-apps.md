---
title: "The EU Cyber Resilience Act and your app: what has applied since September 2026, and what comes in 2027"
seo_title: "Cyber Resilience Act for apps: the 2026 and 2027 deadlines"
description: "Since 11 September 2026, the Cyber Resilience Act has made app makers report exploited flaws within 24 hours. What applies to your app, and what comes in 2027."
slug: "cyber-resilience-act-apps"
translationKey: "cyber-resilience-act-apps"
date: 2026-10-18T22:57:00+02:00
lastmod: 2026-10-18T22:57:00+02:00
category: "mobile-apps"
article_type: "news"
keywords: ["Cyber Resilience Act apps", "Cyber Resilience Act mobile apps", "CRA reporting obligations", "CRA 24-hour reporting", "Cyber Resilience Act 2027", "CRA SBOM"]
summary: "Since 11 September 2026, a business offering an app in the EU, paid or free, must report actively exploited vulnerabilities and severe incidents through ENISA's Single Reporting Platform, with an early warning within 24 hours. From 11 December 2027, the app must also meet the Act's security requirements, get security updates for usually at least five years and carry the CE marking. UK and other non-EU developers are covered for their EU users."
cover: "cyber-resilience-act-apps"
cover_alt: "The article's title in white on a ribbed-glass panel over a photo of a shield with a check mark"
related: ["mobile-app-security-checklist", "api-keys-mobile-apps", "nis2-small-business", "gdpr-outside-eu", "mobile-app-launch-guide"]
services: ["automation"]
faq:
  - q: "Does the Cyber Resilience Act apply to free apps?"
    a: "Yes, when the app is supplied as part of a business. The Act covers products made available ‘whether in return for payment or free of charge’, so a free booking or loyalty app counts, as does one that earns money through ads or in-app purchases. An app shared with no commercial purpose stays outside, like non-commercial open-source software."
  - q: "Is a website or a web app covered by the Cyber Resilience Act?"
    a: "Generally not on its own. Websites and software sold purely as a service fall outside the CRA unless they act as the remote data processing of a product, such as the backend your mobile app needs to work. Cloud services are dealt with by the NIS2 Directive instead, which mainly concerns medium and large companies."
  - q: "Where does the CE marking go on an app?"
    a: "Article 30 lets software carry the CE marking either on its EU declaration of conformity or on the website that accompanies it, in a section consumers can reach easily and directly. It has to be in place before the app is placed on the EU market, so from 11 December 2027 for new apps and for apps that change substantially."
  - q: "Is my app an ‘important product’ under the Cyber Resilience Act?"
    a: "Only if it belongs to a category listed in Annex III, such as password managers, VPN apps, browsers or identity management software. Most of those can only be self-assessed if you apply harmonised standards or a certification scheme in full; otherwise a notified body has to check them. Most business apps, from booking to loyalty, are in the default category."
  - q: "Do I have to publish my app's SBOM?"
    a: "No. You must draw up a software bill of materials and keep it with your technical documentation, so that a market surveillance authority can ask for it. Publishing it is your choice; if you do, the information you give users has to say where to find it."
---

On 11 September 2026, the first obligation of the EU Cyber Resilience Act for app makers started to apply, and it reaches apps already in the App Store and on Google Play. If someone exploits a flaw in your app, you now have 24 hours to send a first warning through ENISA, the EU's cybersecurity agency. The security requirements for the app itself apply from 11 December 2027.

This piece is for small-team business owners who have an app, or are having one built, and offer it to people in the EU. I build custom apps for clients, and the question I would ask you first is not whether your app is secure, but who on your team would notice an attack and report it within a day.

Everything below is as of 19 October 2026, from [Regulation (EU) 2024/2847](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847) and the European Commission's guidance of July 2026. It is general information, not legal advice; the last section says when to see a lawyer.

## Which apps the Cyber Resilience Act covers

The Act regulates "products with digital elements": hardware or software placed on the EU market, together with the remote data processing they rely on (Article 3). A mobile app is standalone software, and the Commission's guidance confirms that such software can be in scope. Your app is covered when three things are true:

1. **It connects to something.** The Act applies to products meant to connect, directly or indirectly, to a device or a network (Article 2). Almost every app does.
2. **It is supplied in the EU as part of a business**, paid or free. Software that never leaves your hands is not: the tools I build for my own work, for example, are never supplied to anyone.
3. **It carries your name.** The manufacturer is whoever markets the product under its own name or trade mark (Article 3). If an agency, a freelancer or an AI app builder made the app and you publish it under your company's name, the obligations are yours.

The server behind the app counts too: when the app cannot perform one of its functions without a backend you designed, or had designed, for it, that backend is part of the product. Your API and database fall under the same rules as the app on the phone.

Non-commercial open-source software is outside the Act, and so are apps regulated as medical devices, which follow their own EU rules (Article 2).

## Since 11 September 2026: report exploited flaws within 24 hours

Article 14 is the part that already applies. It covers two events, and neither of them is "we found a bug":

- **An actively exploited vulnerability**: there is reliable evidence that someone has used the flaw against a system without its owner's permission (Article 3). A weakness your developer spots in a code review, with no sign of use, does not trigger a report.
- **A severe incident** affecting the app's security: one that harms, or could harm, the protection of sensitive or important data or functions, or that has introduced, or could introduce, malicious code into the app or into your users' systems.

The clock runs from the moment you become aware of it:

| Step | Deadline | What it contains |
|---|---|---|
| Early warning | Within 24 hours | For a vulnerability, the EU countries where you know the app is available; for an incident, whether it looks malicious |
| Notification | Within 72 hours | The app concerned, the nature of the exploit or incident, what you have done and what users can do |
| Final report | 14 days after a fix is available (vulnerability), one month after the notification (incident) | Description, severity and impact, cause, and the fix |

You file once, on ENISA's Single Reporting Platform, which [went live on 11 September 2026](https://www.enisa.europa.eu/news/the-cra-single-reporting-platform-is-launched): the report reaches ENISA and the national CSIRT (computer security incident response team) concerned at the same time. It works through web forms, and ENISA's user manuals and tutorial videos are worth reading before you need them. The Commission's [CRA reporting page](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting) sums up the rules.

Three details matter for small teams:

- **Apps already in the stores are covered.** The duty applies to apps published long before September 2026 (Article 69), but exploitation you knew about before 11 September 2026 does not have to be reported retroactively.
- **Your users must hear from you.** Inform the users affected, or all users where appropriate, and tell them how to protect themselves.
- **The fine carve-out for small companies is narrow.** Microenterprises and small enterprises (fewer than 50 staff and no more than 10 million euros in turnover or balance sheet) cannot be fined for missing the 24-hour early warning (Article 64(10)). The 72-hour notification and the final report still apply, and the top fines reach 15 million euros or 2.5% of worldwide annual turnover, whichever is higher (Article 64).

If personal data is involved, the GDPR's own 72-hour breach notification runs alongside (GDPR Article 33). The Digital Omnibus, a Commission proposal of 19 November 2025, would create a single entry point for incident notifications under several EU laws; as of 19 October 2026, it is still a proposal. My {{< a key="incident-response-first-hour" >}}plan for the first hour of an incident{{< /a >}} covers what to do before any form.

## From 11 December 2027: secure by design, documented and CE marked

From that date, an app placed on the EU market must meet the essential requirements of Annex I, and keep meeting them while you support it. In plain words, Part I asks for an app that:

- ships with no known exploitable vulnerabilities and with secure default settings;
- can receive security updates, installed automatically by default where that applies, with a way for users to opt out;
- controls access with proper authentication, and encrypts data at rest and in transit;
- collects only the data it needs, records security-relevant activity and lets users delete their data and settings for good.

Part II covers how you handle flaws over time:

- keep a **software bill of materials** (SBOM), a machine-readable list of the components inside the app, covering at least its top-level dependencies;
- publish a coordinated vulnerability disclosure policy and a contact address for reporting flaws;
- fix vulnerabilities without delay and ship security updates free of charge, separately from new features where technically feasible;
- test the app's security regularly and, once a fix is out, publish information about the flaw it closes.

My {{< a key="mobile-app-security-checklist" >}}mobile app security checklist{{< /a >}} turns Part I into checks you can ask about, starting with {{< a key="api-keys-mobile-apps" >}}keeping API keys out of the app{{< /a >}}.

You must also set a **support period**, the time during which you handle vulnerabilities and ship security updates. It lasts at least five years, unless the app is expected to be used for less, and users must be able to see when it ends, at least the month and year (Article 13).

Then comes the paperwork: a cybersecurity risk assessment, technical documentation (Annex VII), an EU declaration of conformity (Article 28) and the CE marking (Article 30). For most apps, you assess conformity yourself, through what the Act calls internal control.

Apps already on the market only have to meet these requirements if they undergo a **substantial modification** after 11 December 2027 (Article 69). According to the Commission's guidance, a new version is substantial when it affects compliance, raises the cybersecurity risk or changes what the app is for; routine updates are not. An app that keeps adding features and data flows will probably cross that line at some point, so I would plan to comply rather than count on the exemption.

## If your company is outside the EU

The Act follows the app, not the company. A Manchester gym chain with its booking app in the French App Store, a Swiss fitness app on Google Play in Germany and a Montreal start-up with users in Belgium all follow the CRA there. It is the same logic as the GDPR's reach, which I explain in {{< a key="gdpr-outside-eu" >}}my article on GDPR outside the EU{{< /a >}}.

You report on the same platform. Without an establishment in the EU, Article 14(7) decides which national CSIRT receives your reports, starting with the country of your authorised representative if you have one; the duty stays with you either way.

The only way out is to stop offering the app in EU countries, which App Store Connect and the Play Console both let you set country by country.

For users in Great Britain, the reference is the government's voluntary [code of practice for app store operators and app developers](https://www.gov.uk/government/publications/code-of-practice-for-app-store-operators-and-app-developers/code-of-practice-for-app-store-operators-and-app-developers-new-updated-version), first published in December 2022 and updated in October 2023. It already asks developers for a vulnerability disclosure process that people can reach from the app store, so the contact you set up for the CRA serves both. And if you sell to companies covered by {{< a key="nis2-small-business" >}}the NIS2 Directive{{< /a >}}, expect the same questions in their supplier questionnaires, wherever you are based.

## What I would do before the end of 2026

The 2027 requirements are a project; the 2026 duty is a routine you need now. In order:

1. **Name a person and a deputy.** Decide who judges that a flaw is being exploited, who files the early warning and who tells users. Twenty-four hours include weekends, so rehearse once with a past bug.
2. **Bring your developer into the routine.** If an agency, a freelancer or your host is likely to spot an attack first, your contract should require them to tell you at once and say who patches, and how fast.
3. **Publish a security contact.** Set up an address such as security@ followed by your domain, a short disclosure policy page and a security.txt file (RFC 9116) at /.well-known/security.txt on your app's website, then link the policy from your store listings.

   ```text
   Contact: mailto:security@example.com
   Expires: 2027-09-30T22:00:00.000Z
   Policy: https://example.com/security
   Preferred-Languages: en, fr
   ```

   RFC 9116 recommends an expiry date less than a year away, so put the renewal in your calendar.
4. **Get an SBOM.** Ask your developer to generate one from each release build, in a standard format such as CycloneDX or SPDX, SDKs included. It also tells you quickly whether a newly published flaw affects your app.
5. **Choose your support period.** Decide how long you will ship security updates and which iOS and Android versions you support, and make sure the app can force an update for critical fixes.
6. **Plan the 2027 file.** Book time in 2027 for the risk assessment, the technical documentation and the declaration of conformity.

Book an hour with a lawyer who knows EU product rules before 2027 if your app handles health, financial or children's data, if it might be an important product under Annex III, or if you cannot tell whether you or your developer is the manufacturer. For the rest of the launch, from store listings to advertising, my {{< a key="mobile-app-launch-guide" >}}guide to launching a mobile app{{< /a >}} picks up from here.
