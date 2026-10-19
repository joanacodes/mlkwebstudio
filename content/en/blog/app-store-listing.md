---
title: "App Store and Google Play listings: title, subtitle, keywords and description"
seo_title: "How to write an app store description (with examples)"
description: "How to write an app store description, plus every other App Store and Google Play listing field: 2026 limits, what to write and examples to adapt."
slug: "write-app-store-description"
translationKey: "app-store-listing"
date: 2026-10-18T22:27:00+02:00
lastmod: 2026-10-18T22:27:00+02:00
category: "mobile-apps"
article_type: "tutorial"
keywords: ["how to write an app store description", "app store listing", "App Store subtitle", "App Store keywords field", "Google Play short description", "Google Play store listing"]
summary: "An app store listing is a handful of short fields with strict limits: on the App Store, a 30-character name and subtitle, a hidden keyword field of 100 bytes and a 4,000-character description; on Google Play, a 30-character name, an 80-character short description and a 4,000-character full description. Write the name and the line under it first, then open the description with one plain sentence saying what the app does and for whom, followed by the main features."
cover: "app-store-listing"
cover_alt: "The article title in white on a ribbed-glass panel, over a photo of a smartphone showing an app page with star ratings, beside a list of store results"
related: ["aso-guide", "aso-keyword-research", "app-ratings-reviews", "app-privacy-labels", "mobile-app-launch-guide"]
services: ["seo"]
faq:
  - q: "How long should an app store description be?"
    a: "As long as every line stays useful, up to the 4,000 characters both stores allow. On the App Store only the opening shows before people tap to read more, so say what the app does and for whom first, then keep the rest easy to scan."
  - q: "How long do listing changes take to appear?"
    a: "Apple says updated app information can take up to 24 hours to appear on the App Store. On Google Play, listing changes are reviewed first, and with managed publishing turned on they wait until you publish them."
  - q: "Should I mention prices or discounts in my app listing?"
    a: "Not in the description: Apple advises against specific prices there, because the store already shows the price and it can differ between regions. For a limited-time offer on the App Store, Apple suggests the promotional text instead."
  - q: "Can I use AI to write my app store listing?"
    a: "Yes, for a first draft. When I write website copy, I use AI to bring my research and drafts together, then rework the text until I am happy with it. Do the same: check every claim against what the app really does, and count the characters before you paste."
---

Your store listing is the sales page most people read before they install your app, and it is built from short fields with hard limits. This tutorial shows how to write an app store description and fill in every field around it, on the App Store and on Google Play, with the limits that apply in October 2026 and examples you can adapt.

My examples use one invented app: Crumbwise, the pre-order app of a fictional three-shop bakery in Bristol.

How each store ranks apps is in my {{< a key="aso-guide" >}}beginner's guide to ASO{{< /a >}}, and finding the words people type is in my {{< a key="aso-keyword-research" >}}ASO keyword research tutorial{{< /a >}}: do that research first. Both belong to my {{< a key="mobile-app-launch-guide" >}}complete guide to launching a mobile app{{< /a >}}.

## The fields, store by store

Both stores ask for a name, a short line under it, a long description and images.

| Field | App Store | Google Play |
|---|---|---|
| Name | 30 characters | 30 characters |
| Line under the name | Subtitle, 30 characters | Short description, 80 characters |
| Hidden keywords | Keyword field, 100 bytes | None |
| Promotional text | 170 characters, editable at any time | None |
| Description | 4,000 characters | Full description, 4,000 characters |
| Screenshots | 1 to 10 per device size | Up to 8 per device type, at least 2 for phones |
| Video | Up to 3 app previews of 15 to 30 seconds | One YouTube video, optional |
| Feature graphic | None | 1024 x 500, required |

In App Store Connect, the name and subtitle sit on the **App Information** page (under **General** in your app's sidebar), and the other fields on the page of the version you are preparing. In Play Console, the text and graphics are all on the **Main store listing** page, which Google's help places under **Grow users**.

## Step 1: choose a name people can read and search

Both stores give you 30 characters, and on both the name counts for search: Apple says your app is searchable by its name, subtitle, keywords and company name, and Google lists app titles among what Play search takes into account. Apple's advice is to choose "a simple, memorable name that is easy to spell and hints at what your app does".

For most small teams, that means your brand plus a few words saying what the app does:

```
Weak:  Crumbwise: #1 FREE Bakery App
Good:  Crumbwise: Bakery Pre-Order
```

The weak version breaks Google Play's [metadata policy](https://support.google.com/googleplay/android-developer/answer/9898842?hl=en-GB): the title, icon and developer name must not suggest store performance or ranking (such as "#1"), price or promotional information, or a link to a Google Play programme, and they can't contain emojis or capitals that aren't part of your brand. Apple's App Review Guidelines (2.3.7) point the same way: no prices in the name or subtitle, and no unverifiable claims in the subtitle.

Apple lets you edit the name until you submit the app for review; after that, it changes only with a new version.

{{< screenshot id="app-store-listing-01" alt="App Store Connect App Information page with the Name and Subtitle fields and the language menu at the top right" >}}

## Step 2: write the line under the name

I keep the first email of a cold emailing campaign to three lines at most, because people hate long emails from someone they never asked to hear from: short and sharp works. The line under your app's name follows the same rule.

Apple's **subtitle** (30 characters) appears under your name throughout the App Store and is searched like the name. Apple's guidance is blunt: "Avoid generic descriptions such as 'world's best app'"; highlight features or typical uses instead. Use words the name does not already contain:

```
Weak:  The best bakery app
Good:  Collect bread, skip the queue
```

The good version adds three searchable words (collect, bread, queue) and a reason to choose the app. The subtitle changes only when you submit a new version, so test one wording per release.

Google Play's **short description** (80 characters) is the first text people see on your store page; they tap it to expand the full description, and Google advises against repeating it there. Say what the app does and for whom:

```
Weak:  The best app for bread lovers. Download it now
Good:  Pre-order bread, cakes and coffee from Crumbwise and collect without queuing
```

{{< screenshot id="app-store-listing-02" alt="Play Console Main store listing page, App details section with the app name, short description and full description fields" >}}

## Step 3: fill in Apple's keyword field

This field is hidden from users and exists only on the App Store. App Store Connect counts it in **bytes**, 100 at most: in English a character is a byte, but an accented letter such as é takes two, which matters for your French listing. Apple's rules, in short:

- separate terms with commas and no spaces after them (a space inside a phrase is fine);
- don't repeat words from your name, subtitle or category, and skip plurals of words you already have;
- leave out "app", competitors' names and trademarks you don't own: Apple warns that improper use of keywords is a common reason for App Store rejections.

For Crumbwise, listed in Food & Drink, with "bakery", "pre-order", "collect", "bread" and "queue" already in the name and subtitle, that gives 96 characters:

```
pastry,croissant,cake,sourdough,breakfast,takeaway,coffee,baker,patisserie,brunch,cookie,Bristol
```

The field belongs to the version, like the description, so plan keyword changes with your releases.

## Step 4: how to write an app store description

Both stores allow 4,000 characters, but on the App Store only the opening shows before people tap to read more. In its [product page guidance](https://developer.apple.com/app-store/product-page/), Apple calls the first sentence "the most important" and describes the ideal description as "a concise, informative paragraph followed by a short list of main features". That structure works on both stores:

```
[One sentence: what the app does, for whom, and the result]
[Two or three sentences: how it works, what makes it different]

[Main features, one line each]

[An award or press mention, only if it is real]
[How to reach you]
```

The opening sentence makes or breaks it:

```
Weak:  Welcome to Crumbwise, the ultimate app for all your baking needs, packed with amazing features you will love.
Good:  Order bread, cakes and coffee from any of our three Bristol bakeries, pay in the app and collect at the counter without queuing.
```

The weak sentence could describe any app. The good one says what, where and why before anyone taps "more". Three rules apply on both stores:

- **Plain text.** App Store Connect doesn't support HTML: use line breaks, and simple dashes for lists.
- **No keyword lists.** Apple asks you not to add unnecessary keywords to the description, and Google shows a run of near-synonyms such as "car racing, car driving, race cars" as the thing not to do.
- **Proof only if true.** Apple suggests putting an accolade at the end of the description or in the promotional text. Never invent figures or reviews; my {{< a key="app-ratings-reviews" >}}guide to ratings and reviews{{< /a >}} covers what the stores allow.

One difference matters: Google Play search reads your descriptions, so the words people type, such as "pre-order bread", must appear in your sentences there. Apple doesn't list the description among the text its search matches.

{{< screenshot id="app-store-listing-03" alt="App Store Connect version page with the Promotional Text, Description, Keywords, Support URL and Marketing URL fields" >}}

## Step 5: promotional text and What's New

**Promotional text** (170 characters) sits above the description. You can change it at any time without a new version, and Apple says it doesn't affect search ranking, so use it for news: Apple suggests limited-time sales or upcoming features.

```
Christmas orders are open: reserve your yule log by 20 December and collect it from any of our three Bristol shops.
```

**What's New** (4,000 characters) describes each update on your product page and in the Updates tab. It isn't available for your first version and is required for every later one. Apple's advice: list changes in order of importance, and say so when a fix came from user feedback. "Bug fixes and performance improvements" tells nobody anything; "Your usual order now repeats in two taps" does. On Google Play, the equivalent is the release notes you write for each release.

## Step 6: screenshots, previews and graphics

In App Store search results, when you have no app preview, your first one to three screenshots appear with your listing. Make each one readable at that size: one benefit per screenshot, in large type.

When I design a website, I want my clients to make a strong impression, so that their prospects take them seriously. On a store page, the screenshots do that job.

### On the App Store

As of 19 October 2026, Apple's [screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications) require:

- at least one screenshot for **iPhone with Dynamic Island (medium display)**: 1179 x 2556 or 1206 x 2622 pixels in portrait;
- if your app runs on iPad, at least one for the **iPad 13-inch display**: 2064 x 2752 or 2048 x 2732 pixels;
- no more than 10 per device size, in JPEG or PNG without transparency.

The list follows new devices (it already says iPhone Duo screenshots will be required from April 2027 for apps built with the iOS 27.1 SDK or later), so check it before you design. If your interface looks the same across sizes, App Store Connect scales your screenshots down for smaller screens.

**App previews** are optional videos: up to three, 15 to 30 seconds each. They autoplay without sound, so the first seconds must make sense on mute. Your **icon** isn't uploaded here: it ships inside your app build, so changing it takes a new version.

{{< screenshot id="app-store-listing-04" alt="App Store Connect screenshots and app previews section of the version page, with the iPhone and iPad 13-inch sizes" >}}

### On Google Play

Google's [preview assets help](https://support.google.com/googleplay/android-developer/answer/9866151?hl=en-GB) and its icon specifications set:

- **App icon**: 512 x 512 pixels, 32-bit PNG, up to 1,024 KB, as a full square; Google Play applies the rounded mask and the shadow itself.
- **Feature graphic**: 1024 x 500 pixels, JPEG or 24-bit PNG without transparency. You can't publish your listing without one.
- **Screenshots**: at least two for phones and up to eight per device type; Google recommends at least four, at 1080 pixels or more.
- **Video**: optional, added as a YouTube link.

{{< screenshot id="app-store-listing-05" alt="Play Console main store listing, Graphics section with the app icon, feature graphic, phone screenshots and video link" >}}

## Step 7: support, privacy and contact details

- **Support URL** (App Store, required): Apple says it must lead to actual contact information, such as a legal address, an email address and a phone number, as local law may require.
- **Privacy policy URL** (App Store, required for iOS apps). On Google Play, the contact details and privacy policy are shared by every version of your listing.
- **Marketing URL** (App Store, optional): your app's own web page, which my guide to {{< a key="app-website-seo" >}}SEO for your app's website{{< /a >}} covers.
- **Trader status** (App Store, to distribute in the EU): App Store Connect asks whether you are a trader under the EU Digital Services Act. If you are, your address and contact details are shown on your product page to customers in the EU.

What your privacy policy must say depends on the data your app collects, and this tutorial isn't legal advice. My {{< a key="app-privacy-labels" >}}guide to app privacy{{< /a >}} covers Apple's privacy labels and Google Play's Data safety section; if your app handles health, payment or children's data, have a lawyer read the policy.

## Step 8: add your UK and French listings

Each language is a separate listing with its own text. Keep the meaning, but choose the words from searches made in that language.

### On the App Store

1. In **Apps**, select your app, then click the primary language at the top right to open the language menu.
2. Scroll to **Not Localized**, hover over the language, for example English (U.K.) or French, and click the add button (+).
3. Fill in the description and keywords: a new language copies your primary language's screenshots and fields, except those two.
4. Open **App Information**, add the localised name and privacy policy URL, then click **Save**.

Apple's storefront table gives English (U.K.) for the United Kingdom, and French, with English (U.K.) as an additional language, for France. Apple adds that people can search with your French keywords in every storefront that supports French.

{{< screenshot id="app-store-listing-06" alt="App Store Connect language menu open at the top right, with English (U.K.) and French added under the primary language" >}}

### On Google Play

Play Console makes English (United States) the default language unless you change it. If the UK is your main market, use **Manage translations** > **Change default language**, then add French through **Manage translations** and the language list. Visitors in a language you haven't added can view an automatic translation, and graphics fall back to the default language unless you upload localised ones, so English screenshots would show in France.

## Before you submit: a checklist

1. **Name**: brand plus what the app does, no "#1", "best", "free" or emojis.
2. **Line under the name**: one benefit, in words people search.
3. **Keyword field**: within 100 bytes, without repeats, plurals or competitors.
4. **Description**: what, for whom and why in the first sentence, then a short feature list.
5. **Images**: the required sizes, three readable first screenshots, previews that work on mute.
6. **Links**: a support page with real contact details and a privacy policy that loads.
7. **Languages**: English (U.K.) and French listings written from local searches.
8. **After launch**: promotional text for news, keywords reviewed with each version, replies to reviews.

You don't need an agency for this. A clear idea of who the app is for, an afternoon and the limits above are enough for a first listing; pay for help with the screenshots if nobody on your team designs.
