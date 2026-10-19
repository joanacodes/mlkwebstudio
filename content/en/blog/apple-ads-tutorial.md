---
title: "Apple Ads (formerly Apple Search Ads): your first campaign, step by step"
seo_title: "Apple Search Ads tutorial: your first Apple Ads campaign"
description: "Apple Search Ads tutorial for 2026: set up Apple Ads Advanced, plan brand, category and discovery campaigns, choose keywords and bids, then read your results."
slug: "apple-search-ads-tutorial"
translationKey: "apple-ads-tutorial"
date: 2026-10-18T22:36:00+02:00
lastmod: 2026-10-18T22:36:00+02:00
category: "mobile-apps"
article_type: "tutorial"
keywords: ["Apple Search Ads tutorial", "Apple Ads", "Apple Search Ads", "Apple Ads Advanced", "Apple Ads campaign structure", "Apple Ads Search Match"]
summary: "Apple Search Ads has been called Apple Ads since April 2025. For a first campaign, sign in at ads.apple.com with the Apple Account linked to App Store Connect, choose Apple Ads Advanced and start in App Store search results: exact match keywords for your brand and category, a daily budget, a maximum cost-per-tap bid and a discovery campaign that finds new searches. Judge it after two weeks on the cost per install, not on taps."
cover: "apple-ads-tutorial"
cover_alt: "The article title in white on a ribbed-glass panel over a photo, with a search bar above a list of results"
related: ["app-ads-budget-comparison", "aso-keyword-research", "app-store-listing", "google-app-campaigns", "mobile-app-launch-guide"]
services: ["seo"]
faq:
  - q: "Can a freelancer or a colleague manage my Apple Ads account?"
    a: "Yes. Invite them as a user of your Apple Ads account instead of sharing your Apple Account, so they work under their own sign-in and you can remove their access when the work ends."
  - q: "Can I advertise an app that is still on pre-order?"
    a: "Yes. An app available for pre-order on the App Store can run Apple Ads campaigns. Apple recommends manual bids (Manage Bids) for pre-order campaigns, because Maximize Conversions is designed for apps that are already out."
  - q: "Can one Apple Ads campaign cover several countries?"
    a: "Yes. A campaign can serve several countries or regions, so group markets that behave alike, such as those that share a language. Targeting a region or a city inside a country only works in a campaign that serves a single country."
  - q: "Can I pause Apple Ads at any time?"
    a: "Yes. In Apple Ads Advanced you can pause a campaign, an ad group or a keyword whenever you like, and you only pay for taps already received."
  - q: "How do I know which keywords bring paying users?"
    a: "Apple Ads reports taps and installs, not what people do next in the app. Your developer can add Apple's AdServices framework to the app: it returns the campaign, ad group and keyword behind each attributed install (no keyword when Search Match found the search), which you can then match with sign-ups or subscriptions, directly or through a mobile measurement partner."
---

Apple Ads puts your app in App Store search results and in three other places on the store, and you pay only when someone taps the ad. You choose the searches, the daily budget and the most you will pay for a tap. This Apple Search Ads tutorial takes you from an empty account to a first campaign whose results you can read after two weeks.

My view of search ads is the one I give about Google Ads: the tool is not that tricky, but you need to research your target and what they actually type before you spend anything. So the steps below start with keywords and structure, and leave the fine-tuning of bids for later.

Menu names follow Apple's help pages as of October 2026; if one has moved, Apple's page on [creating campaigns](https://ads.apple.com/app-store/help/campaigns/0005-create-campaigns) has the current label. Where paid ads fit among your other launch channels is covered in my {{< a key="mobile-app-launch-guide" >}}guide to launching a mobile app{{< /a >}}.

## Apple Ads in 2026: what changed since Apple Search Ads

Apple renamed Apple Search Ads to Apple Ads on 14 April 2025. Its explanation to developers: when the service launched in 2016, it offered a single placement at the top of search results, whereas advertisers can now run ads in several places across the App Store. There are four placements:

| Placement | Where the ad appears | For a first campaign |
|---|---|---|
| Search results | In the results of a search on the App Store | Start here: people are already looking |
| Search tab | At the top of the suggested apps list, before anyone types | Later: nobody has searched yet |
| Today tab | On the App Store's front page, on iPhone only, built from a custom product page that Apple reviews | Later |
| Product pages | At the top of the "You Might Also Like" list, at the bottom of relevant pages | Later |

{{< callout type="note" >}}In December 2025, Apple announced more ads in App Store search results, then set the start for 3 March 2026 in the UK and Japan, with every other Apple Ads market to follow by the end of that month. Besides the top position, ads can appear further down the results, on iOS and iPadOS 26.2 or later. Search results campaigns are eligible automatically; you cannot choose or bid for a position, and billing does not change.{{< /callout >}}

## Apple Ads Basic or Advanced: which one to choose

Apple sells two versions of the service, and its [comparison of the two solutions](https://ads.apple.com/app-store/help/apple-ads-basic/0001-compare-apple-ads-solutions) comes down to this:

| | Apple Ads Basic | Apple Ads Advanced |
|---|---|---|
| Placements | Search results only | Search results, Search tab, Today tab, product pages |
| You pay | Per install, up to a maximum cost per install | Per tap, up to a maximum cost per tap |
| Budget | Monthly, up to US$10,000 (about £7,500) per app | Daily, per campaign, with no maximum |
| Keywords | None to choose: Apple matches your app to searches | Yours, plus Apple's Search Match |

Basic suits a developer who wants installs without managing anything. But you choose no keywords, so it teaches you little about which searches bring your users, and that is the most useful thing a first campaign gives you. This tutorial uses Advanced; Apple says running both for the same app gives no advantage in the auction.

## What you need for this Apple Search Ads tutorial

- An app live on the App Store, or available for pre-order.
- The Apple Account linked to your App Store Connect account.
- Your business details and a payment card: by default you pay as you go, and monthly invoicing exists for eligible accounts.
- A product page that sells the app: a weak listing makes a weak ad. My guide to {{< a key="app-store-listing" >}}writing your App Store listing{{< /a >}} covers the title, subtitle and screenshots.
- A first keyword list: the words people type when they look for an app like yours. My tutorial on {{< a key="aso-keyword-research" >}}ASO keyword research{{< /a >}} shows how to build it.
- A rough idea of what a new user is worth to you, in revenue or in sign-ups: you need it to set your bids.

## Step 1: create your Apple Ads account

1. Go to ads.apple.com and sign in with the Apple Account linked to App Store Connect.
2. Choose Apple Ads Advanced.
3. Enter your business details: name, address, country or region. Apple checks your tax details, and campaigns stay on hold while that check is pending.
4. Add a payment method: campaigns you build before that will not run.

## Step 2: plan four campaigns (brand, category, competitor, discovery)

Apple's own [campaign structure guidance](https://ads.apple.com/app-store/best-practices/campaign-structure) splits search results advertising into four campaigns, each built around one kind of keyword:

| Campaign | Keywords | Match type |
|---|---|---|
| Brand | Your app's name and your company's name | Exact, Search Match off |
| Category | What your app does, without brand names: "meal planner", "weekly meal plan" | Exact, Search Match off |
| Competitor | The names of apps that do the same job | Exact, Search Match off |
| Discovery | One ad group with the keywords above in broad match; one ad group with no keywords and Search Match on | Broad, plus Search Match |

Two rules make the structure work. In the discovery campaign, add every keyword of the other three campaigns as an exact match negative keyword, so your campaigns do not compete for the same searches. And when a search term does well in discovery, add it as an exact match keyword to the brand, category or competitor campaign where it belongs.

With a small budget, start with brand, category and discovery. Competitor keywords are the riskiest: the person typed another app's name because they wanted that app. The brand campaign is worth running even if your app already comes first for its name, because another app can bid on it.

Keep one country per campaign to start, the UK on its own for example, and name each campaign so the reports read themselves: "UK – Category – Exact".

## Step 3: create your first search results campaign

Start with the category campaign: it is the one that brings people who do not know your app yet.

1. On the **Campaigns** dashboard, click **Create Campaign** and choose your app.
2. Choose **Search results** as the ad placement.
3. Choose the country or region.
4. Name the campaign.
5. Set the daily budget. Apple treats it as an average: some days cost more, but a month never costs more than 30.4 times the daily budget.
6. Choose the bid strategy: Manage Bids or Maximize Conversions (see below).
7. Set the start date and, for a test, an end date.

Older guides mention a lifetime budget: Apple's developer changelog lists it as deprecated since June 2026, so the daily budget and the end date are your two brakes.

{{< screenshot id="apple-ads-tutorial-01" alt="Apple Ads campaign creation with the app, the search results placement, the country, the daily budget and the bid strategy" >}}

### Manage Bids or Maximize Conversions

With **Manage Bids**, you set a maximum cost per tap (max CPT) for each ad group, and you can override it keyword by keyword. You keep control, and you see which keyword brings which install, which is the whole point of a first campaign.

**Maximize Conversions**, introduced in early 2026, works the other way round: you set a target cost per acquisition (CPA), what you want to pay per install on average, and Apple sets the bid for each search through an automated ad group with Search Match. Apple's guidance:

- the target is met on average over a week, not every day;
- the daily budget should allow at least five conversions a day;
- give it at least two weeks before you judge it.

The five-conversions rule is what decides it for a small team. With a target CPA of £3, that is at least £15 a day, about £456 a month. If your test budget is lower, start with Manage Bids, and try Maximize Conversions once you know what an install costs you.

## Step 4: set the ad group's bid and audience

The ad group holds the bid, the audience settings and the keywords. In a Manage Bids campaign, you create it yourself.

### The default max CPT bid

A simple way to set it: take what you can pay for a new user and multiply it by the share of people who install after tapping. If a new user is worth £2 to you and you expect 40% of the people who tap to install, start at £0.80. Apple also shows a suggested bid: treat it as a reference, not an instruction. You never pay more than your max CPT, and often less.

If the ad group offers an optional CPA cap (a CPA goal in older guides), leave it empty: Apple says CPA caps will soon be unavailable.

### Search Match

Search Match lets Apple match your ad to searches on its own, using your product page metadata, similar apps in your genre and other search data. Turn it off in the brand, category and competitor campaigns, so they only run on your keywords, and keep it only in the discovery ad group that has no keywords.

### Audience

Keep the audience wide for a first campaign:

- Customer type: All users, or New users if you only want people who have never downloaded the app. The other options are Returning users and Users of my other apps.
- Devices: the ones your app supports (iPhone, iPad).
- Location: the whole country.
- Ad scheduling: none, until the reports show that some hours or days convert better.

{{< callout type="warning" >}}**Leave age and gender empty.** As soon as you add an age or gender refinement, Apple automatically excludes everyone who has turned off Personalised Ads in their settings, which can shrink your audience sharply. Apple's attribution API also returns no campaign data for installs from ad groups that use age or gender, so your app's own analytics cannot tie those users to a campaign.{{< /callout >}}

## Step 5: add keywords, match types and negative keywords

Apple Ads has two match types, and no phrase match:

- **Exact match**: your ad shows for that search and its close variants, such as plurals and common misspellings.
- **Broad match**: your ad can also show for related searches, synonyms and searches that contain your keyword.

Apple's advice is to bid most on exact match; in the example below, broad match bids sit a little lower, and the Search Match ad group lowest.

Negative keywords stop your ad from showing on searches you do not want, at campaign or ad group level. For a meal-planning app, "food delivery" and "takeaway" are obvious negatives: those people want dinner tonight, not a plan for the week.

Here is the category and discovery set-up for that app, in the UK:

```
UK – Category – Exact (Search Match off)
  meal planner            exact   max CPT £0.80
  meal planning app       exact   max CPT £0.80
  weekly meal plan        exact   max CPT £0.60
  Negative keywords: food delivery, takeaway

UK – Discovery
  Ad group "Broad" (Search Match off)
    meal planner          broad   max CPT £0.50
    weekly meal plan      broad   max CPT £0.50
  Ad group "Search Match" (no keywords, Search Match on, max CPT £0.40)
  Negative keywords, exact match: every keyword of the brand,
  category and competitor campaigns
```

{{< screenshot id="apple-ads-tutorial-02" alt="Keyword list of an Apple Ads ad group with exact match keywords, their max CPT bids and the negative keywords" >}}

## Step 6: choose the ad (default or custom product page)

In search results, your ad is built from your App Store product page: icon, name, subtitle and screenshots. There is nothing to design: the listing is the ad.

A custom product page is another version of that page, created in App Store Connect, with its own screenshots, app previews, promotional text and URL. You can publish up to 70 per app, and each one goes through Apple's review. In Apple Ads, each ad group can use one as its ad, so the screenshots match the search: the "weekly meal plan" ad group can lead to a page whose first screenshot shows a week of meals.

Apple's page on [custom product pages](https://developer.apple.com/app-store/custom-product-pages/) explains how to build them. Two details matter later: the Today tab only runs ads built on a custom product page, and a deep link on the page can open the right screen of your app for people who already have it, on iOS 18 and later.

## Step 7: launch, then read the first results

Leave the campaigns alone for the first week. Changing bids every morning makes the results impossible to read, and Apple asks for two weeks before you judge Maximize Conversions.

Then read these figures on the dashboard, campaign by campaign and keyword by keyword:

| Figure | What it tells you |
|---|---|
| Impressions | How often your ad was shown |
| Taps and tap-through rate (TTR) | Taps divided by impressions: whether the ad matches the searches |
| Installs (tap-through) | Downloads and redownloads within 30 days of a tap |
| Installs (view-through) | Downloads within a day of seeing the ad without tapping it |
| Average cost per tap (CPT) | Spend divided by taps |
| Cost per install (CPI) | Spend divided by tap-through installs: the figure to compare with what a user is worth |

Three habits make the following weeks pay:

1. Read the search terms of the discovery campaign every week: they show what people actually typed. Move the ones that bring installs at a good cost to exact match in the right campaign, and add the irrelevant ones as negative keywords.
2. Adjust bids in small steps: raise them on keywords whose cost per install is below your target, lower them on keywords that bring taps at a cost per install above it.
3. Look past the install. A download is not a customer: compare what your users do in the app (sign-ups, trials, subscriptions) with the campaign that brought them.

{{< screenshot id="apple-ads-tutorial-03" alt="The Apple Ads campaigns dashboard with spend, impressions, taps, TTR, installs, average CPT and cost per install for each campaign" >}}

Once the test budget is spent, pause any keyword whose cost per install is still above what a user is worth. If the whole campaign is, look upstream: the product page, the price or the keywords.

## Your first Apple Ads campaign checklist

Before you launch, check that you have:

- a product page that sells the app, and a keyword list that comes from research;
- brand, category and discovery campaigns, with competitor keywords kept for later;
- one country per campaign, a daily budget you can afford to lose and an end date;
- Search Match on only in the discovery ad group with no keywords, and discovery negatives covering every exact match keyword;
- age and gender left empty;
- a date in your diary, two weeks after launch, to read the results.

If your app is also on Google Play, my guide to {{< a key="google-app-campaigns" >}}Google App campaigns{{< /a >}} covers the Android side, and my comparison of {{< a key="app-ads-budget-comparison" >}}where to spend your app's first £1,000{{< /a >}} helps you split a budget between Apple, Google and Meta.

One warning I give about every new channel: it is easy to chase the next shiny thing, so get the most from what already brings installs before adding a channel you will not have time to watch.

You do not need an agency for a first campaign. The other place people find your app is its website: my guide to {{< a key="app-website-seo" >}}SEO for your app's website{{< /a >}} shows what you can do yourself, and my {{< a page="/services/seo" >}}SEO service{{< /a >}} is there if you would rather hand it over.
