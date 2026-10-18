---
title: "How to use Microsoft Clarity: install it and see why visitors leave"
seo_title: "How to use Microsoft Clarity: a step-by-step tutorial"
description: "How to use Microsoft Clarity step by step: install the free tag, connect it to your cookie banner, then read heatmaps and recordings to see why people leave."
slug: "how-to-use-microsoft-clarity"
translationKey: "microsoft-clarity-tutorial"
date: 2026-10-17T09:18:00+02:00
lastmod: 2026-10-17T09:18:00+02:00
category: "tools"
article_type: "tutorial"
keywords: ["how to use Microsoft Clarity", "Microsoft Clarity tutorial", "Microsoft Clarity setup", "Microsoft Clarity heatmaps", "Clarity session recordings", "Clarity consent API"]
summary: "To use Microsoft Clarity, create a free project at clarity.microsoft.com, add its tracking code to every page (by hand, with Google Tag Manager or through your platform) and connect it to your cookie banner: since 31 October 2025, Clarity has needed a consent signal for visitors from the UK, the EEA and Switzerland. Then read the dashboard's rage clicks, dead clicks and quick backs, the heatmaps and a few recordings to find what makes visitors leave."
cover: "microsoft-clarity-tutorial"
cover_alt: "Microsoft Clarity heatmap of a web page in a browser window"
related: ["clarity-vs-hotjar", "website-conversion-rate", "track-ai-traffic", "squarespace-code-injection", "google-search-console-tutorial"]
services: ["websites"]
faq:
  - q: "Is Microsoft Clarity really free?"
    a: "Yes. Microsoft lists Clarity as free, with no limit on the number of sites. It records up to 100,000 sessions per project per day and keeps ordinary recordings for 30 days, according to the [Clarity FAQ](https://learn.microsoft.com/en-us/clarity/faq)."
  - q: "Is Microsoft Clarity GDPR compliant?"
    a: "That depends on your set-up more than on the tool. Keep masking on Balanced or Strict, name Clarity in your cookie policy and privacy notice, and send Microsoft's consent signal from your cookie banner for visitors from the UK and the EEA."
  - q: "Can I use Microsoft Clarity and Google Analytics together?"
    a: "Yes, and they answer different questions: Google Analytics counts visits and conversions, while Clarity shows what people do on the page. Clarity's setup page also offers a Google Analytics integration to link the two."
  - q: "Does Microsoft Clarity slow down a website?"
    a: "The Clarity script loads asynchronously, so the rest of the page does not wait for it. To check on your own site, run a page through PageSpeed Insights before and after you install it."
---

Microsoft Clarity is a free behaviour analytics tool: it records how visitors use your website, where they click, how far they scroll and where they give up. This tutorial on how to use Microsoft Clarity covers the whole set-up, from the tracking code to the cookie banner, then the reports I read to find out what makes visitors leave.

I use Clarity to see where people engage the most, whether they came for something specific and which areas make them leave, so I can fix it. Is it the copy? A picture? The user experience (UX)? The steps below follow that order: install, check, protect the data, then read.

Allow about thirty minutes, plus access to your site's code settings or to Google Tag Manager. Menu names are those of Clarity's English interface at the time of writing (October 2026). Clarity is one of the tools in my {{< a key="small-business-tools-guide" >}}small business tool stack{{< /a >}}.

## What Microsoft Clarity shows you (and what it does not)

Clarity answers questions about what happens on your pages. Each question has its place:

| Your question | Where to look in Clarity |
|---|---|
| Where do visitors click or tap? | **Heatmaps**, click map |
| How far down the page do they read? | **Heatmaps**, scroll map |
| What did a real visitor do, second by second? | **Recordings** |
| Where do people get stuck or annoyed? | **Dashboard**: rage clicks, dead clicks, quick backs |
| What do visitors from ChatGPT and other AI assistants do? | The **AIPlatform** channel |

What Clarity does not show is what happens before the visit: the searches that bring people to your site, which my {{< a key="google-search-console-tutorial" >}}Google Search Console tutorial{{< /a >}} covers. It does not count your phone calls either. If you are still choosing a tool, {{< a key="clarity-vs-hotjar" >}}Microsoft Clarity vs Hotjar{{< /a >}} compares it with its best-known rival.

## Step 1: create a Clarity project

A project is one website in Clarity. You can create as many as you need under one account.

1. Go to `clarity.microsoft.com` and sign in, for example with a Microsoft or Google account. Choose an account the business will keep, not a freelancer's.
2. Create a new project: give it the name of the site and enter its address.
3. Clarity then shows the installation options. You can come back to them later from the project's **Settings**.

If someone else looks after your site, invite them to the project rather than sharing your login.

{{< screenshot id="microsoft-clarity-tutorial-01" alt="Clarity new project window with the project name and website URL fields" >}}

## Step 2: install the Clarity tracking code

The tracking code is a short script, unique to your project, that has to load on every page of the site. Clarity's installation page offers several routes: copy the code yourself with **Get tracking code**, follow the guide for your platform, connect Google Tag Manager, or email the code and the instructions to whoever manages your site.

{{< screenshot id="microsoft-clarity-tutorial-02" alt="Clarity installation page with the options to get the tracking code, use a third-party platform or connect Google Tag Manager" >}}

{{< callout type="tip" >}}**Install Clarity before you change anything on the site.** A few weeks of recordings give you a "before" to compare with once your changes are live.{{< /callout >}}

### On Squarespace: Code Injection

Copy the code with **Get tracking code**. In Squarespace (version 7.1), scroll to the bottom of the **Pages** panel, click **Custom Code**, then **Code Injection**, paste the code into the **Header** field and save: it then loads on every page. Code Injection is included on the Core, Plus and Advanced plans, not on Basic ([Squarespace help](https://support.squarespace.com/hc/en-us/articles/205815908)).

This is the kind of small, non-destructive code I add to my clients' Squarespace sites: it sits in the header and changes nothing on the pages. My {{< a key="squarespace-code-injection" >}}Squarespace code injection tutorial{{< /a >}} shows how to label each snippet and what to do if a script stops the editor from working.

{{< screenshot id="microsoft-clarity-tutorial-03" alt="Squarespace Code Injection panel with the Clarity tracking code pasted into the Header box" >}}

### On WordPress, Wix or Shopify

Clarity has step-by-step guides for third-party platforms such as Shopify, Squarespace, Wix and WordPress: pick yours on the installation page and follow it. On WordPress, Microsoft publishes its own Clarity plugin, which saves you from editing theme files.

### With Google Tag Manager

If your site already runs Google Tag Manager, add Clarity there, so all your tags stay in one place. Clarity's installation page also offers an integration that connects to your Tag Manager account. To add the tag by hand:

1. In Tag Manager, open **Tags** and click **New**.
2. Under **Tag Configuration**, choose **Custom HTML** and paste the Clarity code.
3. Under **Triggering**, choose **All Pages**.
4. Save, check with **Preview** that the tag fires, then click **Submit** to publish.

### By hand, on a coded site

On a custom-coded site, paste the code inside the `<head>` section of the template that every page shares, so new pages get it too.

## Step 3: check that Clarity is recording

Open your site in a private browser window, accept cookies if a banner appears, then click around for a minute. Then check in two places:

- **In your browser.** Open the developer tools (F12 on Windows, Cmd+Option+I on a Mac), go to the **Network** tab and type `collect` in the filter. Requests to Clarity's collect address mean the tag is sending data.
- **In Clarity.** Your visit appears in **Recordings** after a while, not instantly, so come back later in the day.

If the requests are there but sessions from the UK or Europe look thin or broken up, the likely cause is consent rather than the code. That is the next step.

{{< screenshot id="microsoft-clarity-tutorial-04" alt="Browser developer tools, Network tab filtered on collect, showing requests sent to Clarity" >}}

## Step 4: connect Clarity to your cookie banner

Since 31 October 2025, Microsoft has required a consent signal for visits from the European Economic Area, the UK and Switzerland. Without a valid signal, Clarity sets no cookies for those visitors, and Microsoft warns that features such as recordings and funnels may then be limited. When a visitor refuses, Clarity deletes the cookies it had already set ([Microsoft's consent documentation](https://learn.microsoft.com/en-us/clarity/setup-and-installation/consent-management)).

The signal comes from your cookie banner, the window where visitors accept or refuse cookies. There are two ways to send it:

1. **Use a banner that supports Clarity.** Consent management platforms (CMPs) such as Complianz, CookieYes, CookieHub and Usercentrics document how they pass the visitor's choice to Clarity. Search your own banner's help pages for "Microsoft Clarity" before writing any code. Some banners can also hold the Clarity script back until the visitor accepts, which is the most cautious set-up.
2. **Send the signal yourself.** When the visitor makes a choice, your banner calls Clarity's Consent API v2:

```js
// The visitor accepted
window.clarity('consentv2', {
  ad_Storage: 'granted',
  analytics_Storage: 'granted'
});

// The visitor refused
window.clarity('consentv2', {
  ad_Storage: 'denied',
  analytics_Storage: 'denied'
});
```

The parameter names are case-sensitive (note the capital S in `ad_Storage` and `analytics_Storage`) and the values are lowercase: `granted` or `denied`, according to the visitor's choice. `consentv2` replaces Clarity's older consent call, which Microsoft plans to retire, so update any banner code that still uses it. Then name Clarity in your cookie policy and privacy notice, with what it collects and why.

{{< callout type="note" >}}Microsoft's rule is a condition of using the tool, not legal advice. France's data protection authority, the CNIL, went further in 2026: its draft recommendation on session replay, open to public consultation until 22 April 2026, treats these tools as needing the visitor's prior consent, and I found no final version at the time of writing. If your site has French visitors, plan on asking for it.{{< /callout >}}

## Step 5: set masking and exclude your own visits

Two settings deserve a minute before the data piles up. Both are in the project's **Settings**.

- **Masking** decides what Clarity hides in recordings and heatmaps. The default, **Balanced**, hides content Clarity treats as sensitive, such as numbers and email addresses; **Strict** hides all the content on the page; **Relaxed** hides only form fields and drop-down menus, which are masked whatever the mode. Keep Balanced at least, and switch to Strict if your pages display customer details, such as an account area or an order confirmation. A change applies only to new recordings, so make the choice now.
- **IP blocking** leaves out visits from the IP addresses you enter: they are not recorded and do not count in the dashboard or the heatmaps. Add your office's address so your own checks and edits do not skew the data. You need to be an admin of the project, and only fixed IPv4 addresses work (four numbers separated by dots, such as 203.0.113.10): an IPv6 address, a VPN or a phone on mobile data cannot be blocked.

{{< screenshot id="microsoft-clarity-tutorial-05" alt="Clarity masking settings with the Balanced and Strict options" >}}

## Step 6: read the dashboard signals (rage clicks, dead clicks, quick backs)

The **Dashboard** sums up your traffic and flags moments of frustration. These four signals are the ones to read first:

| Signal | What Clarity detects | What it often means |
|---|---|---|
| Dead clicks | Clicks that have no effect on the page | Something looks clickable but is not: a photo, an underlined word, a card |
| Rage clicks | Several quick clicks in the same small area | A button or a form that fails or responds slowly, often on a phone |
| Excessive scrolling | Far more scrolling than reading the page would need | The visitor is hunting for something: prices, a phone number, a service |
| Quick backs | Arriving on a page, then going straight back to the previous one | The page did not match what the link or the menu promised |

Read each signal page by page, not as a total. Twenty dead clicks on a photo of your work can simply mean people want to see it bigger; twenty rage clicks on a quote button mean you are losing enquiries. Note the pages concerned, then watch their recordings in step 8.

{{< screenshot id="microsoft-clarity-tutorial-06" alt="Clarity dashboard showing the dead clicks, rage clicks, excessive scrolling and quick backs figures" >}}

## Step 7: use heatmaps to see where people engage

Open **Heatmaps** and pick a page, starting with those that bring enquiries: home page, service pages, contact page. You get three views:

- **Click map**: where people click or tap, including on things that are not links.
- **Scroll map**: how far down visitors get. If most of them stop before your offer or your phone number, move it up.
- **Area map**: clicks grouped by zone, handy to compare the menu with your main button.

Switch between desktop and mobile, because the same page often behaves differently on a phone. The dashboard shows which devices bring most of your visits: start with that one.

{{< screenshot id="microsoft-clarity-tutorial-07" alt="Clarity click map of a service page in mobile view" >}}

{{< screenshot id="microsoft-clarity-tutorial-08" alt="Clarity scroll map showing how many visitors reach each part of the page" >}}

This is where I decide what to fix. The pattern usually points to one of three causes:

| What you see | Likely cause | What to try |
|---|---|---|
| Most visitors stop scrolling before the offer | The copy: the first screen does not say what you do | Put the service, the area you cover and the call to action in the first lines |
| Taps on a photo that leads nowhere | The picture | Link it to the project it shows, or choose a photo that answers a question |
| Clicks scattered across the menu, few on the main button | The UX | One main action per page, visible without scrolling |

**Visitors who came for something specific leave a page that does not show it quickly.** I have seen the same thing at the scale of a whole site, with two companies run by the same client: the site that offered too many services never brought leads, while the one built around a few specific services ranked and did.

## Step 8: watch recordings with one question in mind

Recordings replay real visits: pointer or finger movements, scrolling and clicks, with sensitive content masked. They are addictive, so pick a question before you press play, such as "why do people leave the contact page?"

1. Open **Recordings** and use the filters to narrow the list: a page, a device, a channel, or sessions with rage clicks or quick backs.
2. Watch about ten recordings of the same situation, sped up. One visitor proves nothing; the same hesitation in six recordings is a pattern.
3. Write each pattern down next to the page it affects, then change one thing at a time, so you know what made the difference.
4. Add the recordings that show a problem to your favourites: Clarity deletes ordinary recordings after 30 days but keeps favourites much longer.

{{< screenshot id="microsoft-clarity-tutorial-09" alt="Clarity recordings list filtered on sessions with rage clicks, with the replay player open" >}}

## Step 9: see which visits come from AI assistants

Since 29 August 2025, Clarity has grouped visits from AI assistants such as ChatGPT, Claude, Copilot, Gemini and Perplexity into their own channel, **AIPlatform**, with **PaidAIPlatform** for paid traffic from them ([Microsoft's page on the AI channel group](https://learn.microsoft.com/en-us/clarity/insights/ai-channel-group)). Filter the dashboard or the recordings on that channel to see which pages these visitors read and whether they reach your contact page. Clarity's free **Citations** report, in its AI Visibility section, measures something else: how often AI answers, mostly Microsoft Copilot's, cite your site.

On a small business site the numbers may be modest, but these people arrive after an assistant has mentioned you, so a few minutes on their recordings is time well spent. To follow the same traffic in Google Analytics and Search Console, see {{< a key="track-ai-traffic" >}}how to track AI traffic{{< /a >}}.

{{< screenshot id="microsoft-clarity-tutorial-10" alt="Clarity dashboard filtered on the AIPlatform channel" >}}

## How to use Microsoft Clarity every month

Once Clarity is installed and connected to your banner, about twenty minutes a month is enough:

1. **Scan the dashboard** for a rise in rage clicks, dead clicks or quick backs, and note the pages concerned.
2. **Open the heatmaps** of your three most important pages, on the device most of your visitors use.
3. **Watch ten recordings** filtered on one question.
4. **Fix one thing**, such as a sentence, a picture or a button, and write down the date.
5. **Compare with your enquiries.** I count leads in forms and calls; Clarity's job is to explain why there are not more of them.
6. **Check the consent signal** whenever you change your cookie banner, your theme or your platform.

When to hand it over: if the recordings show a broken form or a page that fails on phones, send them to whoever maintains the site, because a recording makes a far better bug report than "it doesn't work". If they show that visitors do not understand what you sell, the problem is the copy and the structure: my guide on {{< a key="website-conversion-rate" >}}why a website gets no enquiries{{< /a >}} goes through the usual causes, and rebuilding pages around what visitors look for is part of my {{< a page="/services/websites" >}}website design service{{< /a >}}.
