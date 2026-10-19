---
title: "Launching a mobile app: get found, advertise and stay secure (the complete guide)"
seo_title: "How to launch a mobile app: ASO, ads and security"
description: "How to launch a mobile app as a small business: developer accounts, privacy forms, security checks, store SEO, Apple and Google ads, and your first reviews."
slug: "how-to-launch-mobile-app"
translationKey: "mobile-app-launch-guide"
date: 2026-10-18T23:45:00+02:00
lastmod: 2026-10-18T23:45:00+02:00
category: "mobile-apps"
article_type: "pillar"
keywords: ["how to launch a mobile app", "app launch checklist", "launch an app on the App Store", "publish an app on Google Play", "app marketing for small business", "mobile app launch strategy"]
summary: "To launch a mobile app, do the groundwork before the stores see it: developer accounts, privacy answers, a security check and a small website. Then write a store listing that matches what people search for, pay for installs only once that listing converts, and watch reviews, crashes and retention after launch. Apple charges $99 (about £75) a year, Google Play a one-time $25 (under £20), and a new personal Play account must first run a 14-day closed test with 12 testers."
cover: "mobile-app-launch-guide"
cover_alt: "The article's title in white on a ribbed-glass panel over a photo of a smartphone showing an app page with star ratings, beside a list of store results"
related: ["aso-guide", "mobile-app-security-checklist", "app-privacy-labels", "app-ads-budget-comparison", "app-website-seo"]
services: ["automation"]
faq:
  - q: "Can I publish an app under my own name, without a company?"
    a: "Yes. Apple accepts individuals and sole traders who enrol with their legal name, and that name then appears as the seller on the App Store. If you distribute in the EU, App Store Connect also asks whether you are a trader under the Digital Services Act; a trader's address and contact details are shown to EU customers, so decide which name and address you want on display before you enrol."
  - q: "How long do app reviews take on the App Store and Google Play?"
    a: "Apple says it reviews at least half of submissions in under 24 hours and 90% in under 48 hours; incomplete submissions take longer, and you can ask for an expedited review to fix a critical bug or to meet an event you are directly involved in. On Google Play, a new personal account's request for production access is usually reviewed within seven days."
  - q: "Do I need a privacy policy if my app collects no personal data?"
    a: "Yes. Apple requires a privacy policy URL for every app, and Google Play requires a link in Play Console and inside the app itself, even for apps that access no personal or sensitive data. Publish it as a normal page on your own website: Google Play does not accept a PDF."
  - q: "Does the Cyber Resilience Act apply to a free app?"
    a: "It can. The Act covers products with digital elements supplied in the EU as part of a commercial activity, paid or free, and the European Commission's July 2026 guidance confirms that standalone software such as a mobile app can be in scope. Developers based in the UK or elsewhere are covered for their EU users."
  - q: "What is the difference between ASO and SEO for an app?"
    a: "ASO (app store optimisation) works on your store listing, so the App Store and Google Play show it for the right searches and people install. SEO works on your app's website, so Google shows it for web searches. They rank different pages on different signals, and most apps need both."
---

An app that works is only half a launch. The other half decides whether anyone finds it, installs it and trusts it with their data: developer accounts and privacy forms, a store listing written for search, a website, perhaps some ads, and the security checks that keep one user's data away from the next.

This guide shows how to launch a mobile app in four stages, in the order I would tackle them. It is written for small teams, whether the code came from a developer, an agency or an AI builder, and every section points to the detailed article on that step.

I build apps end to end for clients, and software for my own use, so I know what it feels like to need a tool and build it. Putting an app in front of strangers is a different job, and that job is what this guide covers. Prices and rules below are as of 19 October 2026.

## How to launch a mobile app: the four stages at a glance

| Stage | What you do | When |
|---|---|---|
| 1. Prepare | Developer accounts, testing, privacy answers, security checks | Weeks before launch |
| 2. Get found | Store listing, keywords, the app's website | Before launch, then every few weeks |
| 3. Advertise | Apple Ads, Google App campaigns or Meta, on one platform at a time | Once the listing converts |
| 4. Keep going | Reviews, updates, crashes, retention | From launch day onwards |

The order matters more than any single tactic. Ads sent to a weak listing waste money, a data leak found after launch costs far more than one found before, and Google's testing rule can add weeks to an Android launch if you discover it late.

## Before launch: developer accounts and testing

### Apple: the Apple Developer Program

To publish on the App Store, you join the Apple Developer Program. Apple prices it at 99 US dollars per membership year (about £75) and shows the price in pounds when you enrol; check it on [Apple's enrolment page](https://developer.apple.com/programs/enroll/) before you budget (October 2026).

You can enrol as an individual or as an organisation. An organisation must be a legal entity with a D-U-N-S Number, a work email address on its own domain and a public, working website on that domain. Apple turns down social media pages, near-empty sites and registrar holding pages, so if your app has no website yet, build one now: you will need it for the stores and for Google anyway.

### Google Play: the Play Console

Google Play charges a one-time registration fee of 25 US dollars (under £20), paid by card ([Play Console Help](https://support.google.com/googleplay/android-developer/answer/6112435?hl=en), October 2026). Registration can take up to 48 hours, and Google may ask for an ID in the account holder's legal name.

The step that catches people out: a personal account created after 13 November 2023, which includes any new one, must run a closed test with at least 12 testers, opted in for 14 days in a row, before it can apply for production access ([Google's rule for new personal accounts](https://support.google.com/googleplay/android-developer/answer/14151465?hl=en)). Line up your testers (clients, staff, friends with Android phones) before you need them, and allow at least three weeks between the start of the test and your Android launch.

### iPhone or Android first?

If you cannot launch both at once, start where your customers are. Statcounter's web traffic estimates put iPhones at about half of mobile traffic in the UK in August 2026, against about a third in France, where Android leads. Your own figures, from your website analytics or your customer list, beat any national average.

### Built with AI, by an agency, or for your team only

How the app was built changes the risks, not the launch steps. If you are building it yourself, {{< a key="build-app-with-ai" >}}what is realistic when you build an app with AI{{< /a >}} draws the line: AI builders suit a small tool for you or your team, and a developer becomes necessary once the app stores clients' personal data, has customer logins or takes payments. AI has shortened my own delivery times a lot; it has not shortened this list.

If the app is only for your team, like {{< a key="bespoke-crm-internal-app" >}}the internal CRM I built for a client whose leads piled up{{< /a >}}, the marketing half of this guide does not apply: nobody needs to find it in a store or click an ad. The privacy and security half still does.

## Privacy: what the stores ask and what the law asks

Two jobs get mixed up here. The stores want a description of the data your app collects; the law, in the EU and the UK, wants your users' consent before some of that collection starts.

- **Apple's privacy labels**: since 8 December 2020, every new app and update needs privacy answers in App Store Connect, shown on your product page. They cover the SDKs you add as well as your own code.
- **Google Play's Data safety form**: required since 20 July 2022 for every app, including apps that collect nothing, and answered in Play Console under App content.
- **Account deletion**: if people can create an account, Apple has required since 30 June 2022 that they can start deleting it inside the app, and Google Play asks for an in-app option plus a web link.
- **Tracking on iOS**: since iOS 14.5 (26 April 2021), App Tracking Transparency means you show Apple's prompt and get permission before tracking people across other companies' apps and websites or reading the advertising identifier.

{{< a key="app-privacy-labels" >}}My tutorial on privacy labels, the Data safety section and GDPR consent{{< /a >}} walks through both store forms and the consent your SDKs need.

Consent is where the EU and the UK now differ. In the EU, analytics and advertising SDKs that read or store data on the phone generally need consent before they run, and the CNIL's recommendations on mobile apps (September 2024) add that an operating-system permission should not be confused with GDPR consent. In the UK, since 5 February 2026, analytics used only for statistics can run without consent as long as you inform users and let them object; advertising SDKs still need consent. For the rest of the subject, see {{< a key="gdpr-guide" >}}my GDPR guide for small teams, inside and outside the EU{{< /a >}}.

This guide explains the rules and the official guidance; it is not legal advice. If your app handles health or financial data, or data about children, paying a lawyer or a DPO to review it before launch is money well spent.

## Security: the checks to do before you ship

Store review checks the app you submit, not the server behind it, so an app can pass review and still hand one user's data to another. Four articles cover the work, in this order:

1. {{< a key="mobile-app-security-checklist" >}}The mobile app security checklist{{< /a >}} turns OWASP MASVS, the reference standard for mobile app security, into checks you can run before launch: no secret keys in the app, permissions checked by your server on every request, tokens kept in the iOS Keychain or the Android Keystore, encrypted traffic, audited SDKs and a published way to report vulnerabilities.
2. {{< a key="api-keys-mobile-apps" >}}API keys in a mobile app{{< /a >}} explains why anyone can pull a key out of your app, and where secret keys for services such as OpenAI, Claude or Stripe belong instead: on a server, behind a small function that checks the user first.
3. {{< a key="ai-app-data-leaks" >}}Is your AI-built app leaking data?{{< /a >}} is for apps whose AI builder connected them straight to Supabase or Firebase. There, row level security or Firebase's Security Rules are the only lock on your data, and the tutorial shows how to test them the way a stranger would.
4. {{< a key="cyber-resilience-act-apps" >}}The EU Cyber Resilience Act and your app{{< /a >}} covers the law that now sits on top of all this.

The Cyber Resilience Act (Regulation (EU) 2024/2847, [full text on EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R2847)) makes security a legal duty as well as a practical one. As of 19 October 2026, its reporting duties have applied since 11 September 2026: if a vulnerability in your app is actively exploited, or a severe incident hits it, you send an early warning within 24 hours through ENISA's Single Reporting Platform (Article 14). Most other requirements, including security updates for the app's support period and the CE marking, apply from 11 December 2027. Micro and small enterprises cannot be fined for missing the 24-hour early warning (Article 64(10)), but the 72-hour notification and the final report still apply to them.

In the UK, the government's voluntary code of practice for app store operators and app developers already asks for something similar: a vulnerability disclosure process that people can reach from your store listing. For the security of the rest of your business, see {{< a key="cybersecurity-guide" >}}my cybersecurity guide for small teams{{< /a >}}.

## Get found: app store optimisation

ASO is SEO for the App Store and Google Play: choosing the words each store matches against searches, then making your listing convincing enough that people install. The two stores read different fields, which is why one copy pasted into both rarely works.

| | App Store | Google Play |
|---|---|---|
| Name | Up to 30 characters | Up to 30 characters |
| Line under the name | Subtitle, 30 characters | Short description, 80 characters |
| Keywords | Hidden keyword field, 100 bytes | No keyword field: Google reads your title and descriptions |
| Full description | 4,000 characters | 4,000 characters |
| What else counts | Downloads, ratings and reviews | Stability: Play may reduce the visibility of apps that crash or freeze too often |

Start with {{< a key="aso-guide" >}}my beginner's guide to ASO{{< /a >}}, which explains how each store ranks apps and which parts you control. Then {{< a key="aso-keyword-research" >}}ASO keyword research{{< /a >}} shows how to find the words people really type in the store search bars, from your users' own phrases to store suggestions, rival listings and the search popularity score in Apple Ads, and why a new app should go after specific phrases before broad ones. {{< a key="app-store-listing" >}}The store listing tutorial{{< /a >}} turns those words into a name, subtitle, keyword field and description that respect each field's limit.

Write the first line of your description as a plain sentence that says what the app does and for whom, and make your first screenshots show the app doing exactly that. Once you have steady traffic, both stores let you test alternatives: Apple's product page optimisation runs up to three variants against your original page, and Google Play's store listing experiments do the same.

## Your app's website: the half Google can see

The stores rank your listing; Google ranks your website. They answer different searches, so your site needs web keywords of its own: the words people type into Google before they know your app exists.

{{< a key="app-website-seo" >}}SEO for your app's website{{< /a >}} covers the landing page (the problem it solves, real screenshots, the official store badges, an FAQ), the privacy and support pages your listings link to, and the connections between site and app. Universal Links on iOS and Android App Links open your web addresses in the app when it is installed, and Apple's Smart App Banner invites iPhone visitors to install the app without hiding the page. If older links of yours relied on Firebase Dynamic Links, replace them: Google shut the service down on 25 August 2025.

A small site is enough to start: a landing page, a privacy page and a support page. It is also part of what Apple asks of organisations at enrolment, so it belongs at the top of the to-do list. {{< a page="/services/websites" >}}Websites{{< /a >}} are a large part of my work, and a simple one can go live well before the app does.

## Advertise: Apple Ads, Google App campaigns or Meta

Paid installs only pay off when the page they land on converts. Before you spend, make sure your listing turns visitors into installs, you have a handful of genuine reviews and your installs are measured. Then choose one platform:

- **Apple Ads** (called Apple Search Ads until April 2025) shows your app at the top of App Store search results, and also in the Today tab, the Search tab and on other apps' product pages. {{< a key="apple-ads-tutorial" >}}The Apple Ads tutorial{{< /a >}} sets up a first campaign step by step: exact match keywords for your brand and category, a daily budget, a maximum cost-per-tap bid and a discovery campaign that finds new searches.
- **Google App campaigns** run one campaign across Google Search, YouTube, Discover, the Display Network and, for Android apps, Google Play, built from the text, images and videos you supply. {{< a key="google-app-campaigns" >}}How Google App campaigns work{{< /a >}} explains the budget rule that surprises people: Google advises a daily budget of at least 50 times your target cost per install, so a £1 target means £50 a day, about £1,520 a month.
- **Meta** (Facebook and Instagram) reaches people who are not searching yet, which suits an app that explains itself in a short video.

To choose, read {{< a key="app-ads-budget-comparison" >}}where to spend your app's first £1,000{{< /a >}}. Its advice is one platform, not three: Apple Ads if people search the App Store for what your app does and many of your users have iPhones, Google if they are mostly on Android, Meta if the app sells itself on screen.

My own view of these platforms comes from ads in general, not from app installs. Google Ads is not that tricky, but it rewards the research you do on what people search before you spend; {{< a key="google-ads-small-business" >}}my guide to Google Ads basics{{< /a >}} covers that research. Facebook and Instagram ads work for awareness and for conversion, but you will burn some budget on A/B tests before you know what works, and skipping those tests is one of the mistakes I warn founders about.

Measurement is the hard part on iOS. Since App Tracking Transparency, people who decline the prompt cannot be followed across apps, so ad platforms fall back on Apple's privacy-preserving attribution frameworks (SKAdNetwork and AdAttributionKit) and on modelling. Expect delayed, grouped figures rather than a record of every install, judge a campaign on its cost per install after two weeks rather than after two days, and make sure your analytics SDK receives each user's consent choice (Google's consent mode for apps does this for Firebase).

## After launch: reviews, updates and the numbers that matter

### Ratings and reviews

Apple says ratings and reviews can influence how your app ranks in App Store search, and they sit at the top of your listing for every visitor to see. {{< a key="app-ratings-reviews" >}}Getting more five-star reviews without breaking store rules{{< /a >}} explains how to ask: only through the official prompts (Apple's, which the system shows at most three times a year to each person, and Google Play's In-App Review API), right after a moment of success, never in exchange for a reward and never only from people who say they are happy. Fake reviews break UK and EU consumer law as well as store rules.

Reply to reviews, and fix what they report. Google Play weights its public rating towards recent ratings, so an update that fixes a common complaint shows up in your score.

### Updates and stability

Crashes cost you twice: in reviews, and on Google Play in visibility. Google says an app's core vitals affect its visibility, and above its bad behaviour thresholds (a user-perceived crash rate of 1.09% overall, or 0.47% for "app not responding" freezes) Play may reduce the app's visibility and show a warning on its listing. Check Android vitals in Play Console and your crash reports every week during the first month.

Plan updates as part of the launch, not as an afterthought: from December 2027, the Cyber Resilience Act will require security updates for your app's support period.

### The numbers that matter

Downloads alone tell you little. Four numbers tell you where the problem is:

1. **Impressions and product page views**: whether the stores show your app at all. Low numbers point to keywords.
2. **Conversion rate**: App Store Connect divides downloads by unique impressions, and Play Console compares listing visitors with installs. A low rate points to the listing: screenshots, first line, ratings.
3. **Installs by source**: search, browsing, other apps, websites, ads. App Store Connect shows how many people came from search, not what they typed; Play Console can show the search terms that led to your listing.
4. **Retention**: the share of new users who still open the app a day, a week and a month after installing. Ads cannot fix weak retention; changes to the app can.

## Your launch checklist, and when to hand it over

1. Developer accounts open; for a new personal Google Play account, 12 testers lined up for a 14-day closed test.
2. A website live with a landing page, a privacy page and a support page.
3. Privacy labels and the Data safety form answered for your app and its SDKs; consent in place before analytics and advertising SDKs run; account deletion inside the app.
4. Security checklist done: no secret keys in the app, database rules tested, a published way to report vulnerabilities.
5. Store listing written from keyword research, with screenshots that show the app's main job.
6. Review prompt placed after a moment of success.
7. Installs measured, then one ad platform with one budget.
8. A named person and a process for reporting an actively exploited vulnerability within 24 hours.

You do not need anyone for the listing, the keyword research or replying to reviews: those are writing jobs, and nobody knows your users better than you do. Bring in a developer for the parts where a mistake leaks data: the server, the database rules, the keys and the sign-in. Pay for an independent security test, and a lawyer's review of your privacy set-up, once the app handles health, financial or children's data.

When I build an app for a client, I build all of it, with 30% or 50% paid upfront and the rest at delivery. Whoever builds yours, ask before you sign who will handle the store accounts, the privacy forms and the security updates after launch: they are part of launching a mobile app, not extras.
