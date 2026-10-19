---
title: "Cookie banners in 2026: what the EU, the UK and France’s CNIL really require"
seo_title: "Cookie banner requirements 2026: EU, UK and CNIL rules"
description: "Cookie banner requirements in 2026: which cookies need consent, the CNIL's 'Refuse all' test, the UK's new analytics exception and what regulators fine."
slug: "cookie-banner-requirements"
translationKey: "cookie-banner-rules"
date: 2026-10-18T21:06:00+02:00
lastmod: 2026-10-18T21:06:00+02:00
category: "gdpr"
article_type: "guide"
keywords: ["cookie banner requirements", "cookie consent rules", "CNIL cookie guidelines", "PECR cookie rules", "reject all cookies button", "Google Consent Mode v2"]
summary: "In the EU, any cookie or tracker that is not strictly necessary needs the visitor's consent before it is set, and refusing must be as easy as accepting: France's CNIL expects a 'Refuse all' option as visible as 'Accept all'. In the UK, since February 2026, analytics used only for statistics can run without consent if you explain it and offer an easy way to object. Advertising cookies need consent in both."
cover: "cookie-banner-rules"
cover_alt: "The article title in white on a ribbed-glass panel over a photo of a cookie consent banner with Accept and Refuse buttons"
related: ["cookie-banner-setup", "privacy-policy-guide", "digital-omnibus-gdpr", "uk-gdpr-data-use-access-act", "microsoft-clarity-tutorial"]
services: ["websites"]
faq:
  - q: "Do I need a cookie banner if my site has no analytics or ads?"
    a: "Usually not. Strictly necessary cookies, such as a login session, a shopping basket or the cookie that stores a visitor's choice, need no consent. Check your embeds and your website builder first: videos, maps, chat widgets and some platforms' built-in statistics set cookies too."
  - q: "Do I need a separate cookie policy page?"
    a: "No law requires a separate page. Visitors need clear information on each purpose, the third parties involved and how long cookies last, one click away from the banner. Many sites put it in a cookies section of their privacy policy."
  - q: "Do the cookie rules apply to mobile apps?"
    a: "Yes. The rule covers anything stored on or read from a device, so an app that reads the phone's advertising identifier or ships analytics and advertising SDKs needs consent in the same way, usually through a consent screen at first launch."
  - q: "Who enforces cookie rules, and can a visitor complain?"
    a: "The CNIL in France, the ICO in the UK (formally the Information Commission since 30 September 2026) and each country's regulator elsewhere in the EU. Visitors can complain to them directly, and both the CNIL and the ICO also run their own checks of websites."
  - q: "Is a cookie banner enough to comply with GDPR?"
    a: "No. It only covers consent for cookies and similar trackers. You also need a privacy policy, a legal notice where your country requires one, and contracts with the providers that handle personal data for you."
---

A cookie banner is not a legal requirement in itself. Consent is. Under EU law, and under the UK's version of the same rule, you need a visitor's consent before your site stores or reads anything on their device that is not strictly necessary, and the banner is simply where you ask. So the real cookie banner requirements come down to three things: what loads before the visitor answers, how you ask, and how easy it is to say no.

This guide sets out the rules as they stand on 19 October 2026 in the EU, France and the UK. It is part of my {{< a key="gdpr-guide" >}}GDPR guide for small teams{{< /a >}} and concerns companies outside the EU too, as soon as their visitors are in it. It is general information, not legal advice.

## The rule behind every cookie banner

The rule is Article 5(3) of the [ePrivacy Directive](https://eur-lex.europa.eu/eli/dir/2002/58/2009-12-19/eng) (2002/58/EC, amended in 2009). Storing information on a visitor's device, or reading information already there, needs their consent, unless its sole purpose is to carry a communication or it is strictly necessary to provide a service the visitor explicitly asked for. Each country writes this into its own law: in France it is Article 82 of the loi Informatique et Libertés, in the UK regulation 6 of the Privacy and Electronic Communications Regulations (PECR), which stayed in force after Brexit.

Consent has the GDPR meaning. It must be freely given, specific, informed and unambiguous, and expressed by a clear action (Article 4(11) of the GDPR). You must be able to prove it (Article 7(1)), and withdrawing it must be as easy as giving it (Article 7(3)). In the Planet49 judgment (C-673/17, 1 October 2019), the Court of Justice of the EU held that a pre-ticked box is not consent, and that visitors must be told how long cookies last and whether third parties can access them. The European Data Protection Board adds, in its Guidelines 05/2020 on consent, that scrolling through a page never counts as consent.

Three points are easy to miss:

- It is not only about cookies. Local storage, tracking pixels, device fingerprinting and the SDKs inside mobile apps fall under the same rule. In France, the CNIL applied it to open-tracking pixels in marketing emails in a recommendation adopted on 12 March 2026.
- It applies whether or not the data identifies anyone. Planet49 settled this too: a cookie that stores nothing personal still needs consent if it is not strictly necessary.
- What you embed is your responsibility. The video, the map, the chat widget and the advertising pixel set cookies on your visitors' devices because you put them on your page. In the Fashion ID judgment (C-40/17, 2019), the Court made a website operator jointly responsible, with Facebook, for collecting and passing on its visitors' data through a 'Like' button it had embedded.

## Which cookies need consent, and which do not

For each cookie or tracker, look at what it does and whether the visitor asked for it. This is how the main categories fall in October 2026:

| Cookie or tracker | France (CNIL) | UK since February 2026 |
|---|---|---|
| Strictly necessary: login session, shopping basket, security, load balancing, the cookie that stores the visitor's choice | No consent | No consent |
| Analytics (audience measurement) | Consent, unless the tool meets every condition of the CNIL's exemption | No consent if used only for statistics, with clear information and an easy way to object |
| Preferences the visitor sets, such as language or text size | No consent when the feature is one the visitor expects | No consent (appearance exception), with information and a way to object |
| Advertising and retargeting pixels (Google Ads, Meta, LinkedIn) | Consent | Consent |
| Session recordings and heatmaps (Microsoft Clarity, Hotjar, now Contentsquare) | Consent | Clarity waits for a consent signal from UK visitors anyway |
| Embedded videos, maps, social buttons, chat widgets | Consent if they set or read trackers | Consent if they set or read trackers, unless an exception covers them |

Other EU countries apply the same directive through their own laws and regulators, and their guidance is not identical, on analytics in particular. If most of your visitors are in Germany, Spain or Italy, check that country's regulator as well.

### Analytics: France's narrow exemption

The CNIL lets you measure your audience without consent, but only when the tool:

- serves solely to measure your own site's audience, for you alone;
- produces anonymous statistics only;
- is not combined with other processing or passed to third parties;
- does not follow people across other sites.

Visitors must still be told, and be able to object, for example through a link in your privacy policy. The CNIL also recommends a tracker lifetime of 13 months at most and keeping the data no longer than 25 months. It publishes a configuration guide for Matomo's exempt mode: visitor log and visitor profiles off, IP addresses anonymised, no third-party cookies or cross-domain tracking, no User ID or e-commerce tracking, heatmaps and session recordings off. Unless your tool meets every condition, and you can show it, ask for consent. That is the safe default for Google Analytics 4.

## Cookie banner requirements in France: what the CNIL checks

The CNIL's guidelines and recommendation of 17 September 2020 have applied since the end of March 2021, and its [questions and answers on cookies](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ) (in French) explain how it reads them. Applied to a banner, they come down to seven points:

1. **Refusing is as easy as accepting.** A 'Refuse all' button next to 'Accept all', in the same size and colour, gives a clear choice. A lone 'Customise' button next to 'Accept all' does not, because refusing then takes more clicks than accepting. Closing the banner can count as a refusal when the banner says so.
2. Nothing non-essential loads before the choice: advertising and analytics cookies wait until the visitor accepts.
3. Each purpose is explained in plain words, with access to the list of third parties that will set cookies.
4. No nudging: colours, sizes and wording should not push one answer, and continuing to browse is not consent.
5. The choice is remembered. The CNIL considers keeping both consent and refusal for six months good practice, so visitors are not asked again on every visit; the right period can depend on the site.
6. Visitors can change their mind at any time. A 'Cookie settings' link in the footer of every page is the usual way to offer it.
7. You can prove each consent: date, answer and the version of the banner shown. A consent management platform keeps these records for you.

{{< callout type="tip" >}}A two-minute test: open your site in a private window, leave the banner alone and look at **Application > Cookies** in Chrome's developer tools. If analytics or advertising cookies are already there, your banner is decoration.{{< /callout >}}

The fines show what the CNIL checks first. In January 2022, it fined Google €150 million and Facebook €60 million because refusing cookies on google.fr, youtube.com and facebook.com was harder than accepting them. In September 2025, it fined [Shein €150 million](https://www.cnil.fr/en/cookies-placed-without-consent-shein-fined-150-million-euros-cnil): cookies, advertising ones included, were set as soon as visitors arrived, the second layer of the banner did not name the third parties, and refusing or withdrawing consent did not stop new cookies being set. The same month, Google was fined €325 million, partly because refusing advertising cookies when creating a Google account had been harder than accepting them. These are giants, but every one of those defects can appear on a five-page site with one badly configured plugin.

## The UK rules after the Data (Use and Access) Act 2025

In the UK, PECR regulation 6 still sets the rule: consent for anything stored on or read from a device, unless an exception applies. What changed is the list of exceptions. The Data (Use and Access) Act 2025 added new ones, in force since 5 February 2026, which the [ICO's guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/) explains:

- Statistical purposes: analytics whose sole purpose is to produce statistics on how people use your service. You must give clear and comprehensive information and an easy way to object. If the same data also feeds online advertising, for example remarketing audiences, the exception no longer applies.
- Appearance: remembering how the visitor wants your site to look or work, such as their language or text size, under the same two conditions.
- Emergency assistance: locating a device in order to send help in an emergency.

Strictly necessary cookies remain exempt, as before. **Advertising cookies still need consent**, and anything that needs consent must stay off until the visitor switches it on.

The ICO also expects refusing to be as easy as accepting. It has sent warning letters to the operators of busy UK websites since 2023, took action against Sky Betting and Gaming in September 2024 for setting advertising cookies before users could choose, and reported in December 2025 that 979 of the top 1,000 websites passed its checks, after issuing 17 preliminary enforcement notices. The ceiling has risen too: since February 2026, PECR fines can reach £17.5 million or 4% of worldwide annual turnover, whichever is higher, against £500,000 before.

For a site whose visitors are all in the UK, this changes the maths: with only strictly necessary cookies, analytics configured purely for statistics and preference cookies, clear information and an opt-out link are enough, and no consent banner is needed. Add an advertising pixel, or Microsoft Clarity, and the consent banner is back. The rest of the Act is in my article on the {{< a key="uk-gdpr-data-use-access-act" >}}Data (Use and Access) Act 2025{{< /a >}}.

## Inside and outside the EU: who these rules cover

Where your company is registered matters less than where your visitors are. The GDPR applies to a business outside the EU that monitors the behaviour of people in the EU (Article 3(2)(b)), and its recital 24 gives tracking on the internet as the example. Analytics and advertising cookies on EU visitors put you in that position.

Cookie rules are also enforced country by country, outside the GDPR's one-stop-shop: in January 2022, the Conseil d'État confirmed that the CNIL could fine Google over cookies directly. Its fines have targeted Google LLC, a US company, as well as the Irish subsidiaries of Facebook and Shein. In practice:

- A Lyon architect with Google Analytics and a YouTube showreel on the home page: French rules in full. Both need consent, so the banner must hold them back until the visitor accepts.
- A London consultancy with clients in Paris: UK rules for UK visitors, EU rules for French ones. One banner built to the CNIL's standard covers both.
- A Montreal online shop that ships to France: tracking French visitors brings it under the GDPR, and the safe assumption is that the French cookie rules apply to those visitors as well.
- A Geneva hotel taking bookings from Germany, or an agency in Casablanca selling to French companies: the same reasoning applies to their EU visitors.

The tools apply their own rules too, wherever your company is based: Google's EU user consent policy and Microsoft Clarity's consent requirement both cover visitors in the EEA, the UK and Switzerland. My guide to {{< a key="gdpr-outside-eu" >}}GDPR for companies outside the EU{{< /a >}} explains the two tests in detail.

## Google Consent Mode v2 and Microsoft Clarity: the tools now check

Google updated its consent mode in November 2023. Version 2 adds two signals: `ad_user_data` (whether the visitor's data may be sent to Google for advertising) and `ad_personalization` (whether it may be used for personalised ads). Both must be granted for personalised advertising. For EEA traffic, Google requires these signals, and accounts that do not send them can lose ad personalisation, remarketing and some conversion measurement. Google-certified consent platforms were updated to send them; a home-made banner has to be updated by hand.

**Consent mode is not consent.** It passes your visitor's answer to Google's tags, and your banner still has to collect that answer properly. In basic mode, Google's tags wait for the answer. In advanced mode, they load at once with consent set to denied by default and, as long as consent is not granted, send cookieless pings. If you want the cautious option in France, choose basic mode: nothing reaches Google before the visitor says yes.

I use Microsoft Clarity to see where visitors engage and which parts of a page make them leave. Since 31 October 2025, for visits from the EEA, the UK and Switzerland, Clarity sets no cookies without a valid consent signal and deletes its existing cookies when consent is denied; without cookies, features such as session recordings and funnels can be limited. Your banner passes the answer through Clarity's Consent API v2, which consent platforms such as Complianz, CookieYes and Usercentrics document. In France, the CNIL's recommendation on session replay, still a draft on 19 October 2026 (the consultation closed on 22 April), treats it as needing consent. The installation is in my {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity tutorial{{< /a >}}.

## What could change: the EU's Digital Omnibus

As of 19 October 2026, the rules above are the ones in force. The European Commission's Digital Omnibus, proposed in November 2025, would change several of them: more uses that need no consent, a waiting period before a site may ask again after a refusal (six months in the Commission's text, four in the Council's latest draft) and browser signals that sites would have to respect (a Council compromise text dropped these in June 2026).

It is still a proposal. The vote of EU ambassadors planned for 7 October 2026 was postponed, no Council position has been confirmed since, and the Parliament's committees are still working through more than 1,750 amendments. Until a text is adopted and starts to apply, build your banner to today's rules. I follow the negotiations in my article on the {{< a key="digital-omnibus-gdpr" >}}Digital Omnibus and GDPR{{< /a >}}.

## Cookie banner checklist for 2026

1. List what your site sets, including the cookies your website builder and plugins add; the scanner in most consent platforms helps.
2. Sort each one with the table above.
3. Block everything non-essential until the visitor answers, embeds included: a click-to-load placeholder works for videos and maps.
4. Put 'Accept all' and 'Refuse all' side by side on the first layer, with a 'Customise' option for choices by purpose.
5. Explain each purpose and name the third parties, with a link to your privacy policy. My guide to {{< a key="privacy-policy-guide" >}}what a privacy policy must say{{< /a >}} covers the cookies section.
6. Remember the answer for about six months, keep proof of it and add a 'Cookie settings' link to your footer.
7. Pass the answer on to Google (Consent Mode v2) and to Microsoft Clarity (Consent API v2).
8. Repeat the private-window test after every new plugin, pixel or embed.

Most sites can do all of this with a consent management platform. The step-by-step setup for Squarespace, Wix and WordPress is in {{< a key="cookie-banner-setup" >}}my cookie banner tutorial{{< /a >}}. A lawyer or a DPO is worth paying for when your business depends on advertising data, when you handle sensitive data such as health information, when you consider a 'consent or pay' model, or when a regulator has written to you. And if you would rather not touch any of it, the banner, the privacy policy and the legal notice are part of the {{< a page="/services/websites" >}}websites I build{{< /a >}}.
