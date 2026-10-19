---
title: "The EU’s Digital Omnibus: what could change for GDPR and cookies"
seo_title: "Digital Omnibus GDPR: what could change and when (2026)"
description: "Digital Omnibus GDPR changes explained: personal data, one-click cookie refusal, AI, 96-hour breach reports, and where the EU proposal stands in October 2026."
slug: "digital-omnibus-gdpr"
translationKey: "digital-omnibus-gdpr"
date: 2026-10-18T21:39:00+02:00
lastmod: 2026-10-18T21:39:00+02:00
category: "gdpr"
article_type: "news"
keywords: ["Digital Omnibus GDPR", "Digital Omnibus cookies", "GDPR changes 2026", "GDPR reform proposal", "Digital Omnibus status", "96-hour breach notification"]
summary: "The Digital Omnibus is a European Commission proposal of 19 November 2025 that would amend the GDPR and the EU cookie rules: a narrower test of what counts as personal data, one-click cookie refusal, legitimate interest for AI, and breach reports within 96 hours only when the risk is high. As of 19 October 2026 it is still a proposal, with no agreed position from EU governments or the European Parliament, so today's rules still apply."
cover: "digital-omnibus-gdpr"
cover_alt: "The article title in white on a ribbed-glass panel over a photo of connected boxes in a flow diagram"
related: ["cookie-banner-rules", "gdpr-data-breach", "uk-gdpr-data-use-access-act", "chatgpt-gdpr-client-data", "privacy-policy-guide"]
services: ["websites"]
faq:
  - q: "What does “omnibus” mean in EU law?"
    a: "An omnibus is a single proposal that amends several existing laws at once. The Digital Omnibus is one of a series of simplification packages the European Commission has proposed since 2025, which is why the European Parliament's file calls it Omnibus VII."
  - q: "Is the Digital Omnibus the same as the AI Act omnibus?"
    a: "No. A separate text from the same package, the Digital Omnibus on AI, adjusted the AI Act and has been in force as Regulation (EU) 2026/1744 since 27 July 2026. The GDPR and cookie changes are in the other text, which is still being negotiated."
  - q: "Will I still need a cookie banner if the Digital Omnibus is adopted?"
    a: "Very probably, if your site uses retargeting or tracking for personalised advertising: both the Commission's proposal and the Council's draft keep consent for it. A site that only uses strictly necessary cookies and simple statistics for its own use might need fewer consent requests, depending on the final text."
  - q: "When would the Digital Omnibus changes apply?"
    a: "Only after the European Parliament and the Council agree on a final text, it is published in the Official Journal of the EU and the application dates it sets have arrived, which can include transition periods. As of 19 October 2026, no date can be given."
---

The Digital Omnibus is a proposal the European Commission published on 19 November 2025 to simplify several EU digital laws in one go. On the GDPR side, it would change what counts as personal data, how cookie consent works, when a data breach must be reported and how AI training fits in.

It is not law. As of 19 October 2026, EU governments have not agreed their negotiating position and the European Parliament's committees have not voted, so every rule you follow today still applies. Below, I set out the Digital Omnibus GDPR changes one by one, where the negotiations stand and what you need to do now, which is not much.

It is part of my {{< a key="gdpr-guide" >}}GDPR guide for small teams{{< /a >}} and concerns businesses outside the EU too, as soon as they have customers or users in it. It is general information, not legal advice.

## Digital Omnibus and GDPR: where the proposal stands on 19 October 2026

The Commission's text is proposal [COM(2025) 837](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:52025PC0837). It would amend the GDPR, the ePrivacy Directive (the cookie rules), the Data Act and the NIS2 cybersecurity directive, among others. Like any EU regulation, it becomes law only once the Parliament and the Council, where member state governments sit, agree on the same text. The Parliament's [Legislative Observatory](https://oeil.europarl.europa.eu/oeil/en/procedure-file?reference=2025%2F0360%28COD%29) tracks it as procedure 2025/0360(COD).

| Step | Status on 19 October 2026 |
|---|---|
| Commission proposal | Published 19 November 2025 |
| EU data protection authorities | Joint opinion of the EDPB and the EDPS, February 2026 |
| European Parliament | Industry (ITRE) and civil liberties (LIBE) committees: draft report of 22 June 2026, more than 1,750 amendments, no vote yet |
| Council | Ambassadors' vote planned for 7 October 2026 postponed; no negotiating position confirmed |
| Final negotiations (trilogues) | Not started |
| Publication and application | Not before the steps above |

The Council's vote was postponed after France and Germany asked for stronger protection of trade secrets in the Data Act part of the package. In the Parliament, the rapporteurs, Aura Salla (EPP, Finland) and Marina Kaljurand (S&D, Estonia), have no committee vote date yet. In their joint opinion, the European Data Protection Board (EDPB) and the European Data Protection Supervisor (EDPS) back some changes and oppose others: I give their position under each change below.

{{< callout type="tip" >}}**How to read the headlines.** A Commission proposal, a Council position, a Parliament position and a provisional agreement are four different stages, and none of them is law. A change applies only once the final text is published in the Official Journal of the EU and its application date arrives.{{< /callout >}}

## Personal data: a narrower, business-by-business test

[Article 4(1) of the GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj) defines personal data as any information relating to an identified or identifiable person. In the SRB case (C-413/23 P, judgment of 4 September 2025), the Court of Justice of the EU held that pseudonymised data are not necessarily personal data for every recipient: it depends on whether that recipient has means reasonably likely to be used to identify the person.

The Commission wants to write this into the GDPR. Information would not be personal data for a business that cannot identify the person with the means it is reasonably likely to use, and it would not become personal data for that business just because a later recipient could. A new Article 41a would let the Commission decide, in implementing acts, when pseudonymised data stop being personal data for certain recipients. The EDPB and the EDPS asked the Parliament and the Council not to adopt this change: in their view it goes further than the case law and could weaken protection.

For most small teams, little would change. Your client list, your CRM and your inbox name people, so they remain personal data for you. The new test would matter when you receive data with names replaced by codes, such as a pseudonymised export from a partner, or when you pass such data on to a provider.

## Cookies: one-click refusal and fewer consent requests

Today, cookie consent comes from Article 5(3) of the ePrivacy Directive, which each country writes into its own law. The Commission proposes to move the rules on personal data stored on or read from people's devices into the GDPR, in a new Article 88a, with three main changes:

- **Fewer consent requests.** Consent stays the rule, but some uses would no longer need it, among them aggregated audience measurement that a site runs for its own use, and keeping a service secure.
- **A one-click refusal.** Saying no would take a single click, and after a refusal the site could not ask again for the same purpose for six months.
- **Browser signals.** A new Article 88b would oblige sites to respect automated, machine-readable choices sent by the browser or the device.

The Council's draft differs on several points. It keeps the cookie rules in the ePrivacy Directive, lists six exemptions from consent (measuring contextual advertising and capping how often an ad is shown among them) and cuts the wait before asking again to four months. A Council compromise text of June 2026 deleted Article 88b.

If your visitors are in France, much of this will look familiar. The CNIL already expects a "Refuse all" button as easy to use as "Accept all", presents keeping a refusal for six months as good practice, and exempts audience measurement tools set up under strict conditions. My guide to {{< a key="cookie-banner-rules" >}}cookie banner requirements{{< /a >}} covers today's rules in the EU, France and the UK.

## Data breaches: 96 hours, only when the risk is high

Under Article 33 of the GDPR, you notify a personal data breach to the supervisory authority within 72 hours of becoming aware of it, unless it is unlikely to result in a risk to people. The proposal would change three things:

1. Only breaches likely to result in a **high risk** would be notified, the threshold that already applies to telling the people affected (Article 34).
2. The deadline would be **96 hours**.
3. Notifications would go through a **single EU entry point**, developed with ENISA, the EU cybersecurity agency, and shared with other incident-reporting laws such as NIS2 and DORA, so that one report could serve several of them.

The EDPB and the EDPS back this part. Until it is adopted and applies, the 72-hour deadline and today's threshold stand. My guide on {{< a key="gdpr-data-breach" >}}what to do after a data breach{{< /a >}} follows the current rules.

## AI, impact assessments, privacy notices and access requests

Four other changes would affect small teams less directly.

**Legitimate interest for AI.** A new Article 88c would confirm that developing and running AI systems can rely on legitimate interest (Article 6(1)(f)), with safeguards such as data minimisation and an unconditional right to object. It concerns those who build or train AI models. If you only use an assistant, the questions in my article on {{< a key="chatgpt-gdpr-client-data" >}}what client data you can put into ChatGPT{{< /a >}} remain the ones to ask.

**Impact assessments.** Today each national authority publishes its own list of processing that needs a data protection impact assessment (Article 35). The proposal would bring them together into one EU list of processing that needs one and one of processing that does not, with a common template and method.

**Privacy notices.** Article 13 would gain an exemption when you collect data in a clear and limited relationship, your activity is not data-intensive and you can reasonably assume the person already has the information. It would not cover transfers outside the EU or high-risk processing. My guide to {{< a key="privacy-policy-guide" >}}what a privacy policy must say{{< /a >}} explains the current duty.

**Access requests.** You could treat a request as excessive when someone uses the right of access (Article 15) for purposes other than protecting their data, on reasonable grounds rather than proof of abuse. The EDPB and the EDPS oppose this lower bar.

## Outside the EU: UK, Swiss, US and other businesses

The GDPR follows your customers, not your address. Under Article 3(2), it applies to a business outside the EU that offers goods or services to people in the EU, or monitors their behaviour there. So the Omnibus changes, if adopted, would apply to a Swiss online shop delivering to France, a US app with users in Germany or a Moroccan training company selling online courses to Belgian customers, for those EU customers. My article on {{< a key="gdpr-outside-eu" >}}whether GDPR applies outside the EU{{< /a >}} explains the two tests.

UK businesses have two rule books. For people in the UK, the UK GDPR applies, and the Data (Use and Access) Act 2025 has already amended it: most of its data protection changes have been in force since 5 February 2026, including a cookie exception for analytics used only for statistics, provided visitors are told and can object easily. For people in the EU, the EU GDPR applies as it stands today. A UK shop with French customers could therefore end up with slightly different cookie rules for each audience. I cover the UK side in {{< a key="uk-gdpr-data-use-access-act" >}}UK GDPR after the Data (Use and Access) Act{{< /a >}}.

## What to do now, and when to get help

Nothing in the Digital Omnibus applies yet, so your to-do list has not changed:

1. **Keep following today's rules.** Notify breaches within 72 hours, ask for consent before non-essential cookies and give people the Article 13 information.
2. **Leave a compliant cookie banner alone.** Rather than rebuilding it for a text that may still change, check it against today's rules: refusing as easy as accepting, nothing non-essential loaded before the answer, the choice recorded.
3. **Watch four milestones.** The Council's negotiating position, the Parliament's committee vote, the start of trilogues, then publication in the Official Journal with its application dates.
4. **Note which changes would touch you.** For most small teams, that means the cookie and breach rules. If you work with pseudonymised data, use customer data to train AI or track visitors at scale, a lawyer or a DPO is worth consulting before you change anything: these are the parts most likely to move.

When I build a site, the cookie banner and the privacy pages are part of the {{< a page="/services/websites" >}}website work{{< /a >}}, so they follow the rules in force on the day it goes live, not a proposal.
