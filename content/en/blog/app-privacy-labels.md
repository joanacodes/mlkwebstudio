---
title: "App privacy: GDPR consent, Apple’s privacy labels and Google Play’s Data safety section"
seo_title: "App Store privacy labels and Google Play Data safety (2026)"
description: "How to fill in App Store privacy labels and Google Play's Data safety form step by step, and get GDPR consent right for the SDKs inside your app."
slug: "app-store-privacy-labels"
translationKey: "app-privacy-labels"
date: 2026-10-18T22:54:00+02:00
lastmod: 2026-10-18T22:54:00+02:00
category: "mobile-apps"
article_type: "tutorial"
keywords: ["App Store privacy labels", "Google Play Data safety section", "App Store Connect App Privacy", "app GDPR consent", "App Tracking Transparency", "privacy manifest"]
summary: "App Store privacy labels are the answers you give in App Store Connect about the data your app and its SDKs collect; Google Play asks the same questions in its Data safety form, and both stores show your answers on your listing. Labels describe, they don't ask permission: in the EU and the UK, analytics and advertising SDKs that store or read data on the phone also need the user's consent before they run, and tracking on iOS needs Apple's ATT prompt as well."
cover: "app-privacy-labels"
cover_alt: "The article's title in white on a ribbed-glass panel over a photo of a smartphone showing an app page with star ratings, beside a list of store results"
related: ["privacy-policy-guide", "cookie-banner-rules", "mobile-app-security-checklist", "gdpr-guide", "app-store-listing"]
services: ["automation"]
faq:
  - q: "Do I need App Store privacy labels if my app collects no data?"
    a: "Yes. In App Store Connect you still open App Privacy and choose 'No, we do not collect data from this app'. Google Play requires a Data safety form from every app, including apps that collect no user data, and both stores want a privacy policy link."
  - q: "Can I change my privacy labels without releasing an app update?"
    a: "On the App Store, yes: Apple says you can update your answers at any time without submitting an app update, while a new privacy policy URL goes live with your next version. On Google Play, you edit the Data safety form in Play Console and Google reviews it as part of app review."
  - q: "Can I make people allow tracking before they use my app?"
    a: "Not on iOS: Apple's App Review Guideline 5.1.2(i) forbids making features depend on tracking permission or rewarding people for giving it. Under the GDPR, consent must also be freely given, and making a service depend on consent to data it doesn't need is a sign that it isn't (Article 7(4))."
  - q: "Who can fill in the App Privacy section in App Store Connect?"
    a: "The Account Holder, an Admin or an App Manager can answer and publish the privacy responses. People with the Marketing role can also enter the privacy policy URL."
---

App Store privacy labels are the answers you give Apple about the data your app collects, shown on your product page before anyone downloads it. Google Play asks the same questions in its Data safety form. Both describe what your app does with data; neither asks anyone's permission.

Permission is a separate job: your own consent screen for users in the EU and the UK, and Apple's tracking prompt on iOS. This tutorial covers both in order, with the menus as Apple's and Google's help pages describe them in October 2026.

My example is Crumbwise again, the pre-order app of a fictional Bristol bakery from my {{< a key="app-store-listing" >}}store listing tutorial{{< /a >}}. Privacy is one step of my {{< a key="mobile-app-launch-guide" >}}complete guide to launching a mobile app{{< /a >}}.

## Four separate jobs: two disclosures, two permissions

| | Where you do it | Required by | Applies to |
|---|---|---|---|
| App Store privacy labels | App Store Connect, App Privacy | Apple, since 8 December 2020 | New apps and app updates |
| Data safety section | Play Console, App content | Google, since 20 July 2022 | Every app on Google Play |
| Tracking prompt (ATT) | Your iOS app, as a system pop-up | Apple, since iOS 14.5 (26 April 2021) | iOS apps that track people, in every country |
| Consent screen | Your app, before the SDKs start | EU and UK law | Users in the EU and the UK, on iOS and Android |

The first two describe, the last two ask. Accurate labels don't make an advertising SDK legal if it starts collecting before anyone says yes.

## Step 1: list what your app and its SDKs collect

Both stores make you answer for code you didn't write. Apple's answers must cover the "third-party partners whose code you integrate", such as analytics tools, ad networks and SDKs, and Google holds you responsible for what your third-party libraries and SDKs handle. Start with an inventory, not with the form.

Apple counts data as collected when it leaves the phone in a way that lets you or a partner access it for longer than it takes to answer the request in real time. For each item, note:

1. the data: an email address, an order history, crash logs, the advertising identifier;
2. what sends it: your server or which SDK;
3. whether it's linked to the person, through an account, a user ID or a device ID;
4. what it's for: running the app, analytics, advertising or something else;
5. whether it's used to track people across other companies' apps and websites, or shared with a data broker.

Crumbwise's inventory looks like this:

```
Data                   Sent by              Linked to the user   Purpose            Tracking
Name, email, phone     Crumbwise server     Yes (account)        Account, orders    No
Order history          Crumbwise server     Yes (account)        Orders             No
Screens viewed, taps   Analytics SDK        Yes (app user ID)    Analytics          No
Crash logs             Crash-reporting SDK  No (no user ID set)  Fixing bugs        No
```

Be strict with the "linked" column: Apple treats personal data, as privacy laws define it, as linked to the user unless you de-identify it before collection.

On iOS, privacy manifest files (`PrivacyInfo.xcprivacy`) do part of the work: Xcode combines your SDKs' manifests into one report that helps with the labels. And since 1 May 2024, App Store Connect refuses uploads that lack an approved reason for each "required reason" API your code or your SDKs call.

## Step 2: fill in your App Store privacy labels in App Store Connect

Apple's [app privacy details page](https://developer.apple.com/app-store/app-privacy-details/) describes every data type and purpose if you hesitate.

1. In App Store Connect, open **Apps**, select your app and click **App Privacy** in the sidebar.
2. Click **Get Started**, choose **Yes, we collect data from this app**, then **Next**.
3. Tick every data type in your inventory and click **Save**.

{{< screenshot id="app-privacy-labels-01" alt="App Store Connect App Privacy page in the app's sidebar, with the Get Started button and the dialog asking whether you collect data from this app" >}}

4. Under **Data Types**, click each type and answer its questions: what you use it for, whether it's linked to the user's identity and whether it's used for tracking.

{{< screenshot id="app-privacy-labels-02" alt="App Store Connect questions for one data type: purposes, linked to the user's identity, used for tracking" >}}

5. Scroll to **Product Page Preview**, click **See Details** to check what people will see, then click **Publish** at the top right and confirm.

{{< screenshot id="app-privacy-labels-03" alt="App Store Connect Product Page Preview of the privacy answers, with the Publish button at the top right" >}}

For Crumbwise, that means Contact Info and Purchases for accounts and orders, Usage Data for analytics, Diagnostics for crash logs, Identifiers for the analytics user ID, and a no to every tracking question.

Then click **Edit** next to **Privacy Policy** and enter its URL: Apple requires one for every app, and you can add the address of a page where people manage their privacy choices. My {{< a key="privacy-policy-guide" >}}privacy policy guide{{< /a >}} covers what the policy must say.

## Step 3: complete the Data safety form in Play Console

Google asks for the same inventory in another shape, reviews it as part of app review, then shows it in the Data safety section of your listing. Its [Data safety help article](https://support.google.com/googleplay/android-developer/answer/10787469) defines every term.

1. In Play Console, select your app and open **App content** (Google's help places it under **Policy** in the menu). Find **Data safety** and click **Start**.

{{< screenshot id="app-privacy-labels-04" alt="Play Console App content page with the Data safety section and its Start button" >}}

2. In **Data collection and security**, say whether your app collects or shares any of the listed user data types, whether all of it is encrypted in transit and whether people can ask you to delete it.
3. In **Data types**, tick every type in your inventory.
4. For each type, say whether it's collected, shared or both, whether it's processed only ephemerally, whether giving it is optional and why you collect it.

{{< screenshot id="app-privacy-labels-05" alt="Play Console Data safety form, questions for one data type: collected or shared, processed ephemerally, required or optional, purposes" >}}

5. Save, reread your answers and submit.

Google separates collecting (data leaving the phone) from sharing (data passed to another company), with exceptions to both: read its definitions before deciding how to declare each SDK. Only answer yes to encryption in transit once you have checked that every connection uses HTTPS; my {{< a key="mobile-app-security-checklist" >}}mobile app security checklist{{< /a >}} shows how. Google also wants a privacy policy link in Play Console and inside the app itself.

## Step 4: account deletion, required by both stores

If people can create an account in your app, both stores require a way to delete it.

- **Apple**, since 30 June 2022 (App Review Guideline 5.1.1(v)): deletion must start inside the app, and deactivating the account isn't enough. Make the option easy to find and, unless you work in a highly regulated industry, don't make people phone or email you. If deletion ends on your website, link straight to that page. With Sign in with Apple, revoke the user's tokens through Apple's REST API.
- **Google Play**: the same in-app deletion, plus a web link for people who no longer have the app, which you enter in the Data safety form.

Apple adds that regional laws aren't enough: everyone must be able to delete their account, wherever they live. In the EU and the UK, the GDPR's right to erasure (Article 17) applies anyway. Crumbwise puts **Delete my account** under **Account**, with a confirmation screen naming the records the bakery must keep, such as invoices.

## Step 5: GDPR consent in your app, before the SDKs start

This is general information, not legal advice: if your app handles health, financial or children's data, or relies on advertising, an hour with a privacy lawyer or a DPO is worth it.

In the EU, Article 5(3) of the [ePrivacy Directive](https://eur-lex.europa.eu/eli/dir/2002/58/oj) requires consent before an app stores information on a phone or reads information already there, unless that is strictly necessary for the service the user asked for. It's the cookie rule, and it covers the SDKs that write an identifier to the device or read the advertising ID; my {{< a key="cookie-banner-rules" >}}guide to cookie banner rules{{< /a >}} explains how regulators read it.

The UK rule is PECR regulation 6, with new exceptions since 5 February 2026 under the Data (Use and Access) Act 2025: analytics used only to produce statistics about your app no longer needs consent, if you explain it clearly and let people object easily. Advertising SDKs still need consent, and so does analytics data that also feeds advertising.

Where your company is registered matters less than where your users are. The GDPR covers companies outside the EU that monitor the behaviour of people in the EU (Article 3(2)(b)), so a London, Toronto or Casablanca app tracking users in France should apply the consent rules to them. My {{< a key="gdpr-guide" >}}complete GDPR guide{{< /a >}} covers the rest of the regulation.

In practice:

1. **Show your consent screen at first launch, before those SDKs start.** The CNIL's [recommendation on mobile apps](https://www.cnil.fr/en/mobile-applications-cnil-publishes-its-recommendations-better-privacy-protection) asks that SDKs block any processing that needs consent until it is given.
2. **Make refusing as easy as accepting**, and name each purpose in plain words, as the CNIL expects of cookie banners.
3. **Pass each choice to your SDKs.** Firebase's consent mode for apps uses four signals set with `setConsent`: `analytics_storage`, `ad_storage`, `ad_user_data` and `ad_personalization`. My {{< a key="google-app-campaigns" >}}Google App campaigns guide{{< /a >}} covers what they change for advertisers.
4. **With AdMob ads**, Google requires a Google-certified consent management platform (CMP) for personalised ads in the EEA, the UK (since 16 January 2024) and Switzerland (since 31 July 2024), or only limited ads run. Its own User Messaging Platform (UMP) SDK shows the message you build in AdMob's **Privacy & messaging** tab; certified third-party CMPs work too.
5. **Let people change their mind** from the app's settings: under Article 7(3) of the GDPR, withdrawing consent must be as easy as giving it.

One trap: the phone's permission pop-ups are not consent. The CNIL says a system permission, such as access to location, should generally not be confused with GDPR consent: letting the Crumbwise map find the nearest shop is not agreeing to share your location with an ad network. It also recommends asking for permissions when a feature needs them, not at install, and announced inspections of SDK settings and permissions from 2025.

{{< callout type="warning" >}}Test your consent screen: install a fresh copy, refuse everything, then check in your SDKs' debug mode that no analytics or advertising event leaves the phone.{{< /callout >}}

As of 19 October 2026, the EU's Digital Omnibus proposal would add exceptions to these consent rules, but EU governments haven't agreed their position yet: build for the current rules.

## Step 6: Apple's tracking prompt (ATT), if you track

Since iOS 14.5 (26 April 2021), an app needs permission through Apple's App Tracking Transparency framework to track people or read the device's advertising identifier, which reads as zeros without it. For Apple, tracking means linking data from your app with other companies' data for targeted advertising or advertising measurement, or sharing it with a data broker, and that includes an SDK doing so with your users' data, even if you never use that feature.

- Add a purpose string (the `NSUserTrackingUsageDescription` key) that says why you want to track.
- You may show your own explanation first, if it's honest about how you use the data.
- Answer yes to the matching tracking questions in your App Store privacy labels.

ATT and your consent screen don't replace each other: Apple's prompt answers Apple's rule on iOS, in every country; your screen answers EU and UK law on both platforms. If Crumbwise added an SDK for personalised ads, its UK iPhone users would see both. Respect the stricter answer: someone who refused advertising on your screen shouldn't be tracked because they later tapped Allow on Apple's.

## If children may use your app

In the UK, the ICO's Age appropriate design code, known as the Children's code, applies to apps likely to be used by under-18s, even when they aren't aimed at them. Its 15 standards include high privacy settings and location switched off by default, and conformance has been expected since 2 September 2021.

In the EU, when an online service offered directly to a child relies on consent, Article 8 of the GDPR requires a parent's consent below 16, or below a lower age set by each country, never under 13: it's 15 in France. The UK chose 13. Both stores also have their own rules for apps made for children, and this is where a lawyer earns their fee.

## Before you submit: checklist and when to get help

1. Inventory written, SDK by SDK, with the privacy manifests checked on iOS.
2. App Privacy answers published, privacy policy URL entered.
3. Data safety form submitted, with the deletion link if people can create accounts.
4. Account deletion easy to find inside the app.
5. Consent screen before the non-essential SDKs, refusing as easy as accepting, choices passed to the SDKs and easy to change later.
6. ATT prompt only if you track, with a clear purpose string.
7. Labels and Data safety form updated with every release that adds or changes an SDK.

You don't need an agency to fill in these forms: with a complete inventory, they're the easy part. The hard part is knowing what your SDKs really do. Pay for a lawyer or a DPO when the data is sensitive or your revenue depends on advertising, and for a developer when the consent screen has to be wired into several SDKs.
