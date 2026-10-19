---
title: "App Store Optimisation (ASO) for beginners: how Apple and Google rank apps"
seo_title: "App Store Optimization (ASO): how app stores rank your app"
description: "App store optimization for beginners: how the App Store and Google Play rank apps, what Apple and Google document, and the first fixes worth making."
slug: "app-store-optimization"
translationKey: "aso-guide"
date: 2026-10-18T22:21:00+02:00
lastmod: 2026-10-18T22:21:00+02:00
category: "mobile-apps"
article_type: "guide"
keywords: ["app store optimization", "ASO", "app store optimisation", "App Store ranking", "Google Play ranking", "App Store keywords"]
summary: "App store optimisation (ASO) is SEO for the App Store and Google Play: you choose the words each store matches against searches, then make your listing convincing enough that people download. Apple says its search uses the app name, subtitle, keyword field and primary category, plus downloads, ratings and reviews; Google Play looks at the title, developer name and descriptions, and may reduce the visibility of apps that crash too often."
cover: "aso-guide"
cover_alt: "The article title in white on a ribbed-glass panel, over a photo of a smartphone showing an app page with star ratings"
related: ["aso-keyword-research", "app-store-listing", "app-ratings-reviews", "mobile-app-launch-guide", "app-website-seo"]
services: ["seo"]
faq:
  - q: "Is app store optimisation free?"
    a: "Yes, beyond the cost of your developer accounts: editing your listing and running the A/B tests built into both stores costs nothing. Paid ASO tools estimate how often terms are searched and track your rankings, and advertising is a separate budget."
  - q: "Can I use a competitor's app name as a keyword?"
    a: "No. Apple's App Store search guidance lists competing app names and unauthorised use of trademarks among the things to keep out of your keywords, and Google Play's metadata policy rules out misleading or irrelevant metadata. Either can get your listing rejected or removed."
  - q: "How long do ASO changes take to show?"
    a: "Neither Apple nor Google publishes a delay, and your position also moves with what competing apps do. Judge a change on several weeks of data rather than a few days, comparing the same length of time before and after."
  - q: "Do Apple Ads or Google App campaigns improve organic rankings?"
    a: "Neither Apple nor Google says so. Ads buy a place in or above the results and send people to your store listing, so a weak listing wastes ad money as well. Fix the listing first, then test ads with a small budget."
---

App store optimisation (ASO) is the work of getting your app found when people search the App Store and Google Play, then chosen once it appears. Search is where most downloads begin: Apple's own figure, on its [Apple Ads site](https://ads.apple.com/app-store/advanced), is that "almost 65% of downloads happen directly after a search" on the App Store.

The good news for small teams: the levers are few, free and better documented than most ASO advice suggests. Much of that advice presents guesses as rules, so in this guide I separate what Apple and Google document from what practitioners observe, store by store, and finish with a checklist for before and after launch.

It belongs to my {{< a key="mobile-app-launch-guide" >}}complete guide to launching a mobile app{{< /a >}}, which also covers advertising and security.

## What app store optimisation is, and how it differs from SEO

ASO is to the App Store and Google Play what SEO is to Google: you match the words people type, then give them a reason to pick you. The work has two halves:

- **Ranking**: appearing for the searches that matter, which depends on the words in your listing and on how people respond to your app.
- **Conversion**: turning a glance at your icon, name and first screenshots into a download.

The stores give you far less text than the web. App Store search matches a handful of short fields, and Apple's documentation says nothing about links or articles. Every character counts, and so does conversion, because what searchers do with your listing feeds back into the ranking.

Your app's website is a separate job: it ranks on Google, following the principles in {{< a key="small-business-seo-guide" >}}my guide to SEO{{< /a >}}, and the app-specific parts, such as smart app banners, are in {{< a key="app-website-seo" >}}my guide to SEO for your app's website{{< /a >}}.

## How the App Store ranks apps

Apple is unusually open about this. Its [App Store search page for developers](https://developer.apple.com/app-store/search/) says results depend on "text relevance (matches for your app's title, subtitle, keywords, and primary category)" and on what people do: "downloads, ratings and reviews, and more". The optional secondary category is indexed too.

| Field | Limit | What to know |
|---|---|---|
| App name | 30 characters | Simple and distinctive, hinting at what the app does |
| Subtitle | 30 characters | Shown under the name; updated with a new version |
| Keyword field | 100 characters | Hidden from users; terms separated by commas |
| Categories | One primary, one optional secondary | Both indexed |

### The keyword field, by Apple's rules

- Don't repeat words already in your app name, subtitle or category.
- Skip plurals of words you already use ("climb" and "climbs" count as duplicates), generic terms such as "app" or "game", and filler words such as "the".
- Separate terms with commas and no spaces; a space is fine inside a phrase.

Here is what that gives for the booking app of a fictional yoga studio in Manchester, listed in the Health & Fitness category:

```
App name:  Lotus: Yoga Classes
Subtitle:  Book sessions in Manchester
Keywords:  pilates,meditation,stretching,timetable,beginner,workout,wellbeing,breathwork,mindfulness,studio
```

"Fitness" stays out of the field because the category covers it, and "classes" because the name does.

{{< callout type="warning" >}}Apple warns that "improper use of keywords is a common reason for App Store rejections". Keep to terms that describe what your app really does.{{< /callout >}}

### What doesn't count, and what Apple doesn't say

- **Promotional text**, the 170 characters above your description, "doesn't affect your app's search ranking", in Apple's words. You can change it at any time without a new version, so use it for news and offers.
- **The description** isn't among the text Apple says search matches, and practitioners widely report that it isn't indexed. Write it for people: Apple calls the first sentence "the most important", as it is visible without tapping to read more.

On the behaviour side, Apple names downloads, ratings and reviews "and more", without weights. Practitioners consistently observe that recent downloads and the share of searchers who download weigh heavily, which is why a listing that converts tends to climb. Treat that as a well-founded observation, not a documented rule.

### What else appears in search results

Apple's page lists developer cards, in-app purchases, in-app events, custom product pages, editorial content and ads among search results, plus app tags that Apple generates with large language models from your App Store Connect metadata: one more reason to describe your app in clear, specific words.

The first result is often an ad, sold through {{< a key="apple-ads-tutorial" >}}Apple Ads{{< /a >}}, called Apple Search Ads until April 2025.

## How Google Play ranks apps

Google Play has no keyword field. Google's help page [Get discovered on Google Play search](https://support.google.com/googleplay/android-developer/answer/4448378?hl=en-GB) says search takes several factors into account, "such as app titles, developer names, and app descriptions". Your visible text carries the keywords:

| Field | Limit | What to know |
|---|---|---|
| App name | 30 characters | Your brand and your main term |
| Short description | 80 characters | Your one-line pitch |
| Full description | 4,000 characters | Written for people, not as a keyword list |

Google is explicit about that last point: its guidance shows a run of near-synonyms such as "car racing, car driving, race cars…" as what not to do, and asks for an overview in everyday language. Keyword stuffing falls under Google Play's spam rules.

### The metadata policy

The title, icon and developer name must also respect Google Play's metadata policy:

- 30 characters at most for the title;
- no emojis, emoticons or repeated special characters;
- no claims about store performance or ranking, such as "#1" or "App of the year", and no price or promotional wording;
- capital letters only where they are part of your brand.

"#1 Yoga App – FREE Today" breaks three of those rules at once, and Google can reject or remove a listing that ignores them.

### Quality counts: Android vitals

Google is the only one of the two stores to document a technical quality signal. Its [Android vitals documentation](https://developer.android.com/google/play/vitals) says core vitals "affect your app's visibility on Google Play": above a bad behaviour threshold, Play may reduce your visibility and show users a warning on your listing. The two thresholds to know:

- user-perceived crash rate: 1.09% overall, 8% on any single phone model;
- user-perceived ANR rate (the app freezing, "Application Not Responding"): 0.47% overall, 8% on any single phone model.

You will find them under **Android vitals** in Play Console. If your app is above them, fix the crashes before polishing keywords.

### What Google doesn't publish

Google doesn't say how much installs, ratings or retention count. Practitioners consistently report that they matter, but there is no official weighting.

## App Store and Google Play side by side

| | App Store | Google Play |
|---|---|---|
| Name | 30 characters | 30 characters |
| Second line | Subtitle, 30 characters | Short description, 80 characters |
| Hidden keywords | Keyword field, 100 characters | None |
| Long description | Not among the documented search inputs | 4,000 characters, read by search |
| Documented quality signal | None | Android vitals |
| Free A/B tests | Up to 3 treatments, up to 90 days | Up to 3 variants per experiment |
| Extra listings | Up to 70 custom product pages | Up to 50 custom store listings |

## Ranking is half the job: a page that makes people download

Once you appear, people judge you in a second. In App Store results they see your icon, name, subtitle and rating and, when you have no app preview, your first one to three screenshots, depending on their orientation. Apple allows up to 10 screenshots and three app previews of up to 30 seconds, which autoplay without sound.

- Make the first three screenshots readable at search-result size: one benefit each, in large type.
- Show the app doing the job people searched for, not your logo.
- Keep the icon simple: Apple advises avoiding unnecessary visual details so that it stays legible at every size.

Then test instead of guessing; both stores include free A/B testing:

- **Product page optimisation** (App Store): up to three alternative versions of your icon, screenshots and previews against your original page, one test at a time, for up to 90 days. Alternative icons have to ship inside your app.
- **Store listing experiments** (Google Play): up to three variants against your current listing.

When one page can't speak to everyone, make several. Apple's **custom product pages** (up to 70 per app since October 2025) carry their own screenshots, previews and promotional text, and you can assign keywords so that a page appears for those searches instead of your default page. Google Play's **custom store listings** (up to 50) can target a country, a user state or a search keyword. My {{< a key="app-store-listing" >}}tutorial on App Store and Google Play listings{{< /a >}} goes through each field.

## Ratings and reviews: a ranking signal and a shop window

Ratings do double duty. Apple says ratings and reviews appear in search results and "can influence how your app ranks in App Store search", and on both stores the score next to your name often decides between two similar apps.

- **Ask at the right moment.** Apple's system prompt can be shown up to three times in a 365-day period, so trigger it after a success, such as a confirmed booking, not at first launch.
- **Reply to reviews.** Both stores let you answer publicly, and a calm, useful reply reassures everyone reading.
- **Fix what reviews repeat.** Google Play's public rating is weighted towards recent ratings, so a version that fixes the main complaint lifts your score sooner than a lifetime average would.

Reviews are also free research. When I write a website's copy, I start from what people complain about; for an app, the one- and two-star reviews of competing apps give you exactly that, in your future users' own words. Buying or faking reviews breaks both stores' rules: my guide to {{< a key="app-ratings-reviews" >}}getting more five-star reviews without breaking store rules{{< /a >}} covers what is allowed.

## Localisation: the UK and French storefronts

Each store treats a language as a separate listing with its own name, short text and keywords, which makes localisation the cheapest way to reach more searches.

On the App Store, Apple's table of storefront languages gives English (U.K.) for the United Kingdom, and French, with English (U.K.) as an additional language, for France. In practice:

- if your listing exists only in English (U.S.), add an **English (U.K.)** localisation, with its own name, subtitle and keyword field;
- for France, write the **French** listing from French searches rather than translating your English keywords;
- localise the screenshots and previews too, as Apple advises.

Apple doesn't say how the additional English (U.K.) listing is used in French searches, so treat the French one as the listing that matters in France. Mind the accents as well: Apple's developer page gives the keyword field as 100 characters, but the App Store Connect reference counts 100 bytes, and accented letters take more than one byte.

On Google Play, add a translation for each language (en-GB and fr-FR), each with its own title and descriptions; Google notes that a professional translation can lead to better search results abroad. My {{< a key="aso-keyword-research" >}}ASO keyword research tutorial{{< /a >}} shows how to find the words people type, language by language.

## Updates and in-app events

Regular activity gives searchers new reasons to look at your app:

- **New versions** are when you change the App Store subtitle, and the keyword field is part of each version's information in App Store Connect, so plan keyword changes with your releases.
- **In-app events** (App Store) promote something time-limited, such as a challenge or a live session. An event lasts up to 31 days and can be promoted up to 14 days before it starts, with up to 10 published at a time. Event cards appear in search results for people who have downloaded your app before, and events can be searched directly. They are reviewed separately from app updates, and specific pricing in the event text leads to rejection.

## Measuring ASO: where the numbers are

You don't need a paid tool to see whether your ASO works: both consoles show where visitors come from.

**App Store Connect.** Open your app, click the **Analytics** tab, then **Sources** under **Acquisition** in the sidebar. "App Store search" counts people who viewed or downloaded your app from a search, ads in search results included, so set your Apple Ads figures aside if you run them. "App Store browse" covers the Today, Games and Apps tabs, and "Web referrer" shows visits from websites, yours included. Apple's conversion rate is total downloads divided by unique impressions.

**Play Console.** The store listing acquisition reports split visitors by traffic source, and the search term dimension lists what visitors typed before reaching your listing. Google reworked these reports in July 2026 to put clicks alongside acquisitions, so the labels may not match older tutorials.

{{< callout type="note" >}}In Play Console, "Google Play search" only counts people who searched for your app's name or a closely associated brand. Generic searches, category searches and autocomplete suggestions land in "Google Play explore": look there before concluding that your keywords bring nobody.{{< /callout >}}

Change one thing at a time and write the date down: two months later, nobody remembers which change moved the numbers.

## Your first ASO checklist

1. List the searches your future users might type, and check them against each store's search suggestions.
2. Put your most important term in the app name, without turning the name into a list.
3. On the App Store, give the subtitle a second term and a benefit, then fill the 100-character keyword field without repeats, plurals or spaces after commas.
4. On Google Play, write the title and both descriptions for people, with your main terms where they fit.
5. Make the first three screenshots readable at search-result size.
6. Add English (U.K.) and French listings if you serve the UK and France.
7. Trigger the rating prompt after a success, and answer reviews.
8. Bring crash and freeze rates under the Android vitals thresholds.
9. Run one A/B test at a time and let it reach a result.
10. Check your search sources every month in App Store Connect and Play Console.

You do not need an agency for any of this. Paid ASO tools earn their price once you track dozens of keywords in several countries; for a first listing, the stores' own reports and a spreadsheet will do. A clear name, readable screenshots and a stable app do more than a new subscription; buying tools before you need them is the shiny-object trap I warn about in marketing generally.
