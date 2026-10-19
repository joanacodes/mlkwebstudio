---
title: "SEO for your app’s website: landing page, deep links and smart app banners"
seo_title: "App landing page SEO: deep links and smart app banners"
description: "App landing page SEO, step by step: what to put on your app's website, SoftwareApplication markup, Universal Links, App Links and smart app banners."
slug: "app-landing-page-seo"
translationKey: "app-website-seo"
date: 2026-10-18T22:33:00+02:00
lastmod: 2026-10-18T22:33:00+02:00
category: "mobile-apps"
article_type: "guide"
keywords: ["app landing page SEO", "app landing page", "app website", "universal links", "Android App Links", "smart app banner", "SoftwareApplication schema"]
summary: "Your app's website competes on Google, not in the stores, so give it web keywords and a landing page that names the problem, with real screenshots, the official store badges, an FAQ and the privacy and support pages your store listings link to. Then connect it to the app: Universal Links and Android App Links open your web URLs in the app when it is installed, and Apple's Smart App Banner invites iPhone visitors without hiding the page."
cover: "app-website-seo"
cover_alt: "The article title in white on a ribbed-glass panel, over a photo of a browser window with a page layout"
related: ["aso-guide", "landing-page-vs-website", "schema-markup-small-business", "get-website-indexed-google", "mobile-app-launch-guide"]
services: ["seo"]
faq:
  - q: "Can I put my App Store rating in my website's schema markup?"
    a: "I would not. Those ratings were collected by Apple and Google, not on your site, and Google's review guidelines have long asked for ratings gathered directly from your own users and shown on the page. Leave the rating out: the rest of the markup stays valid, even if the page then cannot show stars."
  - q: "How long does Apple take to pick up a change to the apple-app-site-association file?"
    a: "According to Apple's documentation, its content delivery network requests the file within 24 hours, and devices check for updates about once a week after the app is installed. Test changes on a fresh install rather than expecting them to show at once."
  - q: "Do example.com and www.example.com need separate association files?"
    a: "Yes. Apple asks for one entry per subdomain in the app's Associated Domains and a file served on each, and Android fetches assetlinks.json from every host declared in the app's manifest. Pick the version of the domain your links use, and cover the other one too."
  - q: "How do I send desktop visitors to the app?"
    a: "Show the store badges and a QR code they can scan with their phone. Apple's App Store marketing tools generate a badge, a short link or a QR code for your app's product page."
---

Your app's store page and its website do different jobs. The store page competes in App Store and Google Play search. The website competes on Google, where people describe a problem, compare options or ask a question long before they open a store. App landing page SEO is the work of making that website rank for those searches, then passing visitors to the app without losing them on the way.

In this guide I cover what the landing page needs, the keywords to target, the structured data, and the two links between site and app: deep links, which open your web addresses in the app, and the smart app banner, which invites visitors to install it. It is part of my {{< a key="mobile-app-launch-guide" >}}complete guide to launching a mobile app{{< /a >}}.

Not every app needs this. An internal tool, like the one I built for Pilotech to follow up prospects and jobs, has no public to win over. This guide is for apps you want strangers to find and install.

## Why your app needs a website as well as a store page

Store search and web search are different places. In the App Store and Google Play, people type two or three words and choose from a grid of icons; my {{< a key="aso-guide" >}}guide to app store optimisation{{< /a >}} explains how those results are ranked. On Google, the same people type longer things: "split bills with flatmates", "best way to share holiday costs", a question about a feature. Only a website can rank for those.

Three more reasons to have one:

- **AI assistants read the web.** ChatGPT, Perplexity, Gemini and Google's AI Overviews answer many questions from web pages they find through search. A page that says what your app does, and for whom, gives them something to cite.
- **Trust.** Before giving an app their data or their card details, many people look for the company behind it. A website with a real address, a support page and a privacy policy answers that.
- **The stores ask for it.** App Store Connect requires a Support URL, which Apple says "must lead to actual contact information" (an address, an email address and a phone number), and a Privacy Policy URL for iOS apps. Play Console has its own privacy policy field, and an app that lets people create an account must give a web link where they can ask for the account and its data to be deleted, entered in the Data safety form.

## What to put on your app's landing page

A landing page is a single page with one goal: here, getting the app installed. If you are unsure whether you need one page or a full site, my comparison of a {{< a key="landing-page-vs-website" >}}landing page and a website{{< /a >}} will help you decide. From top to bottom, the page needs:

1. **A headline that names the problem**, in your users' words, and one sentence on what the app does about it.
2. **Real screenshots** of the screens that matter, not mock-ups of features that do not exist yet.
3. **The official store badges**, each linking to your app's page in that store.
4. **How it works**, in three short steps.
5. **Proof**: genuine reviews quoted with the author's permission, press mentions, or your number of users if it is accurate and you can back it up. Never invented reviews.
6. **An FAQ** with the questions people ask before installing: price, platforms, data, cancelling a subscription.
7. **Footer links to the privacy policy and support pages**, at the same URLs you gave the stores.

When I design a site, I want visitors to take the business seriously at first glance. For an app, that first glance decides whether they tap a badge or close the tab, so the page deserves as much care as the app's icon.

### The store badge rules

Both stores publish rules for their badges, and following them costs nothing. Apple's [App Store marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/) ask you to:

- use only Apple's artwork, without modifying, angling or animating it;
- use a localised badge: Apple provides 50 versions, and the words "App Store" always stay in English;
- leave clear space of a quarter of the badge's height around it, and keep it at least 40 px high on screen;
- when other stores' badges appear next to it, use the black badge and put the App Store badge first;
- credit Apple and the Apple logo in the trademark credit lines, wherever your site gives its legal information.

Google's badge page adds one rule that matters next to Apple's: the Google Play badge must be the same size as the other store badges, or larger. So put the App Store badge first and give both the same height, which satisfies both companies. Google also recommends the badge in the language of the page.

## App landing page SEO: target what people type on Google

Store keywords and web keywords overlap less than you would think. In a store, people type short category words because they already want an app. On Google, many have not decided that yet: they describe a problem or ask how to do something. That is what your website should target.

My starting point for copy and keywords is what people complain about. I use AI deep research to find the complaints and the words that come back most often in a niche, then check search volumes in Semrush. Reviews of competing apps and your own support emails are the best raw material.

Then turn the research into pages:

- **One page per use case.** If your app splits bills, a page for flatmates and a page for group holidays will each rank for their own searches better than one page trying to cover both. Each page answers its use case and ends with the badges.
- **A title and a meta description per page**, built around that page's keyword and written for the person searching.
- **A blog for the questions** that reach your support inbox, each article linking to the matching use-case page.

Once the pages are live, make sure Google finds them: my tutorial on {{< a key="get-website-indexed-google" >}}getting a new website on Google{{< /a >}} covers Search Console and the sitemap. The rest is ordinary website work, covered in {{< a key="small-business-website-guide" >}}my guide to building a business website{{< /a >}}.

Build the site on a platform you can update yourself, because an app's website changes with every release: new screenshots, new features, new answers. For clients who edit their own site, I use Squarespace: they can change a sentence without the layout falling apart, and I add the custom code they need. Before you commit to any builder, though, check the technical requirement explained in the deep links section below.

## Structured data: describe the app with SoftwareApplication

Structured data describes the page to search engines in code. For an app, the schema.org type is `SoftwareApplication` (schema.org also has the more specific `MobileApplication`). Google documents a [software app rich result](https://developers.google.com/search/docs/appearance/structured-data/software-app), which can show a rating and the price under your page in its results. The required properties are `name`, `offers.price` (0 for a free app) and either `aggregateRating` or `review`; `applicationCategory` is recommended, and I add `operatingSystem` as well.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Flatshare Bills",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "GBP"
  }
}
</script>
```

The example has no rating on purpose. Add `aggregateRating` only when the rating is genuine and shown on the page: Google's guidelines ask that what you mark up is visible to visitors. Without a rating or a review, the page cannot get the rich result, but the markup is still valid. And do not count on it to get the app quoted by AI assistants; my {{< a key="schema-markup-small-business" >}}guide to schema markup{{< /a >}} explains what it does and does not do there.

## Deep links: Universal Links and Android App Links

A deep link opens a specific screen of your app instead of its home screen. The current method uses ordinary web addresses: a link to `https://example.com/bills/123` opens that bill in the app when it is installed, and the same page on your website when it is not. Apple calls these Universal Links; Android calls them App Links. Because one URL serves both, the web page keeps its SEO value and nobody lands on an error.

Both systems rely on a file on your website that proves the domain and the app belong together.

### iOS: the apple-app-site-association file

Create a file named `apple-app-site-association`, with no extension, and serve it at `https://example.com/.well-known/apple-app-site-association`:

```json
{
  "applinks": {
    "details": [
      {
        "appIDs": ["ABCDE12345.com.example.bills"],
        "components": [
          { "/": "/bills/*", "comment": "Bill pages open in the app" },
          { "/": "/help/*", "exclude": true, "comment": "Help pages stay on the web" }
        ]
      }
    ]
  }
}
```

`ABCDE12345` stands for your Team ID and `com.example.bills` for the app's bundle ID. Apple's [associated domains documentation](https://developer.apple.com/documentation/xcode/supporting-associated-domains) sets the rules: HTTPS with a valid certificate, and no redirects. In the app, the developer adds the **Associated Domains** capability in Xcode, with an entry such as `applinks:example.com`.

One iOS behaviour to know: when someone browsing your site in Safari taps a link to another page of the same domain, iOS keeps them in Safari. The smart app banner, further down, is for them.

### Android: the assetlinks.json file

Serve this file at `https://example.com/.well-known/assetlinks.json`:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.example.bills",
    "sha256_cert_fingerprints": ["14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"]
  }
}]
```

In the app's manifest, the intent filter for your URLs needs `android:autoVerify="true"`. Android's [App Links documentation](https://developer.android.com/training/app-links/configure-assetlinks) asks for the content type `application/json`, HTTPS and no 301 or 302 redirect. The usual trap is the fingerprint: if Google Play signs your app (Play App Signing), the fingerprint of your own key will usually not match, so copy the ready-made snippet from the app signing page in Play Console. Since Android 12, a link that fails verification opens in the browser instead of the app. A broken file shows no error: you only notice that the app never opens.

### Check that your website platform can serve these files

This is where website builders can get in the way. Both files must sit at those exact addresses on your own domain and answer directly, without a redirect. Some builders document a way to publish them (Framer does); on others, forum threads show people falling back on redirects, which neither Apple nor Android accepts. Ask your builder's support before you commit. If it cannot serve the files, keep the marketing pages on the builder and serve the deep links from a subdomain, such as `go.example.com`, on a host where you control the files; visitors without the app can then be sent on to the matching page of the main site.

Once the files are live, open both addresses in a browser: you should see the file itself, not a redirect or an error page. Then test on a phone with a fresh install of the app. On Android, your developer can re-run the check with `adb shell pm verify-app-links --re-verify` followed by the package name.

Apple also warns that these links are a way into your app: it should validate every parameter, discard malformed URLs and never let a link delete data or show sensitive information on its own. My {{< a key="mobile-app-security-checklist" >}}mobile app security checklist{{< /a >}} covers the rest.

### Deferred deep links, now that Firebase Dynamic Links has gone

Universal Links and App Links only open the right screen when the app is already installed. Taking a new user to that screen after the install is called deferred deep linking. Many older tutorials recommend Firebase Dynamic Links for it, but Google shut the service down on 25 August 2025: every link it served stopped working, and Google points to App Links and Universal Links instead, which do not cover the deferred part. That feature now comes from third-party deep-linking and attribution services. If old page.link addresses still sit in your emails, QR codes or printed material, replace them.

## Smart app banners: invite visitors without blocking the page

For visitors already on your site, Apple provides the Smart App Banner: a slim bar that Safari shows at the top of the page on iPhone and iPad. It opens the app if it is installed, and its App Store page if not. Add this tag to the `<head>` of each page where you want it:

```html
<meta name="apple-itunes-app" content="app-id=123456789, app-argument=https://example.com/bills/123">
```

`app-id` is required: it is your app's number, shown as **Apple ID** in the app information section of App Store Connect. `app-argument` is optional: a URL passed to the app so it can open the matching screen. Once a visitor closes the banner, it does not come back when they return, and it does not appear if their device cannot run the app or the app is not available where they are. On Squarespace, the tag goes in the header field of code injection, for the whole site or for a single page.

Do not swap it for a full-screen "download our app" pop-up. Apple's documentation contrasts its banner with "a full screen that interrupts" the visitor, and Google's Search Central guidance on intrusive interstitials asks for the same restraint: instead of a full-page interstitial, a banner that takes up a small part of the screen, so that visitors and search engines reach the content as soon as the page loads.

For Android visitors, build a light banner of your own, which Google's guidance accepts: one line of text, the Google Play badge linking to your listing, a close button, and nothing covering the content. Show it only to Android visitors, and remember when someone closes it.

## Before launch: a checklist for your app's website

1. The landing page is live, with the problem in the headline, real screenshots, both badges (App Store first, same height) and an FAQ.
2. The privacy policy and support pages are published, and their URLs are in App Store Connect and Play Console, with the account deletion link if users can create an account.
3. Each use case has its own page, title and meta description, and the site is in Google Search Console.
4. The SoftwareApplication markup is in place, without a rating you cannot show, and passes Google's Rich Results Test.
5. Both association files answer at their `.well-known` addresses over HTTPS, with no redirect, and links open the app on a fresh install.
6. The Smart App Banner tag is on the pages where it helps, and Android visitors see a light banner they can close.
7. Every old Firebase Dynamic Link in your emails, QR codes and print has been replaced.

Most of this list needs no developer: the pages, the keywords, the badges and the banner tag are website work you can do yourself. The association files and the settings inside the app are a job for whoever builds the app, so send them this page.
