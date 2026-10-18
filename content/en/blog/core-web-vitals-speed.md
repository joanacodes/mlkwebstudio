---
title: "Core Web Vitals explained: how to speed up a small business website"
seo_title: "Core Web Vitals: how to speed up a small business site"
description: "Core Web Vitals explained simply: what LCP, INP and CLS measure, how to test your pages in PageSpeed Insights and Search Console, and the fixes that matter."
slug: "core-web-vitals-explained"
translationKey: "core-web-vitals-speed"
date: 2026-10-17T08:12:00+02:00
lastmod: 2026-10-17T08:12:00+02:00
category: "seo"
article_type: "guide"
keywords: ["Core Web Vitals", "website speed", "how to speed up a website", "PageSpeed Insights", "LCP INP CLS", "Core Web Vitals report"]
summary: "Core Web Vitals are Google's three measures of how a page feels to real visitors: LCP, how quickly the main content appears (good at 2.5 seconds or less), INP, how quickly the page reacts to a tap or click (200 milliseconds or less), and CLS, how much the layout moves (0.1 or less). Google's ranking systems use them, but good scores do not guarantee rankings. To speed up a small business site, start with heavy images, extra fonts and third-party scripts."
cover: "core-web-vitals-speed"
cover_alt: "A rising line chart behind fluted glass, next to a cup of coffee and a laptop, with the letters LCP, INP and CLS"
related: ["google-search-console-tutorial", "website-conversion-rate", "on-page-seo-checklist", "build-website-with-ai", "wix-platforms-history"]
services: ["seo"]
faq:
  - q: "What is a good PageSpeed Insights score?"
    a: "The lab score runs from 0 to 100: 90 and above shows in green, 50 to 89 in orange and below 50 in red. Treat it as a diagnostic. The Core Web Vitals assessment at the top of the report, based on real visits, is the part that reflects what Google measures."
  - q: "What replaced First Input Delay (FID)?"
    a: "Interaction to Next Paint (INP) replaced First Input Delay as a Core Web Vital on 12 March 2024. FID only measured how long the first interaction waited before the browser started handling it; INP times taps, clicks and key presses throughout the visit, up to the moment the page visibly responds, and reports one of the slowest."
  - q: "Why is my mobile score lower than my desktop score?"
    a: "PageSpeed Insights tests the mobile version on a simulated mid-range phone with a slower connection, so the same page scores lower. Google assesses phones and computers separately: check mobile first, because that is where a heavy page hurts most."
  - q: "Does web hosting affect Core Web Vitals?"
    a: "Yes, mainly LCP: if the server is slow to send the page, everything else starts late. On Squarespace or Wix, hosting comes with the plan and is out of your hands. On WordPress, the host, the caching and the plugins all play a part."
  - q: "Do Core Web Vitals matter for Google's AI Overviews?"
    a: "Google says its usual SEO best practices apply to its AI features, and that a page only needs to be indexed and eligible to show a snippet to appear in them ([Google's guidance](https://developers.google.com/search/docs/appearance/ai-features)). There is no separate speed requirement."
---

Core Web Vitals are three measures Google uses to judge how a page feels to the people who visit it: how quickly the main content appears, how quickly the page reacts when someone taps it, and whether the layout jumps around while it loads. They are measured on real visits, separately for phones and computers, and Google's ranking systems use them.

On a small business website, the causes of a poor result are rarely mysterious. A photo straight off a phone at the top of the home page, four font families, a chat widget nobody uses, a cookie banner that pushes the page down: you can fix most of it yourself, without a developer.

This guide covers what each measure means, how to test your pages and what to fix first on your platform. It is part of my {{< a key="small-business-seo-guide" >}}guide to small business SEO{{< /a >}}.

## What are Core Web Vitals?

Core Web Vitals are three metrics, defined by Google, that measure loading, responsiveness and visual stability. Each one has a threshold for a good result and another for a poor one; anything in between needs improvement.

| Metric | What it measures | Good | Poor |
|---|---|---|---|
| **LCP**, Largest Contentful Paint | When the largest image or block of text in the first screen appears | 2.5 seconds or less | Over 4 seconds |
| **INP**, Interaction to Next Paint | How long the page takes to react visibly to a tap, click or key press | 200 milliseconds or less | Over 500 milliseconds |
| **CLS**, Cumulative Layout Shift | How much the content moves unexpectedly while the page is open | 0.1 or less | Over 0.25 |

A page meets a threshold when at least 75 per cent of visits do, which Google calls the 75th percentile, and phones and computers are assessed separately ([web.dev](https://web.dev/articles/defining-core-web-vitals-thresholds)). In plain words, three visits out of four should see the main content within 2.5 seconds, get a response to their taps within a fifth of a second and barely see the layout move under their thumb. A page passes only when all three metrics are good.

## Do Core Web Vitals affect your Google rankings?

Yes, but they weigh less than the noise around them suggests. Google's documentation says Core Web Vitals are used by its ranking systems and recommends good scores "for success with Search". The same documentation says that good results in its reports do not guarantee top rankings, and that chasing a perfect score just for SEO reasons "may not be the best use of your time" ([Google Search Central](https://developers.google.com/search/docs/appearance/core-web-vitals)).

So a fast page that does not answer the search will not rank, and the page that answers it best can still rank while being slow. Relevance comes first: the words on the page, its title, its headings and the links that lead to it. My {{< a key="on-page-seo-checklist" >}}on-page SEO checklist{{< /a >}} covers those, page by page.

Speed matters most after the click. Someone looking for an emergency plumber on their phone will not wait for a slow page: they go back and tap the next result. A slow page loses enquiries even when it ranks, which is why speed belongs in any review of a {{< a key="website-conversion-rate" >}}website that is not getting enquiries{{< /a >}}.

## How to test your site with PageSpeed Insights

PageSpeed Insights is Google's free test, at [pagespeed.web.dev](https://pagespeed.web.dev/). Paste the address of a page, run the test and read the mobile results first. Test the pages that matter, not only the home page.

### The top half: what real visitors experienced

The top section gives the Core Web Vitals assessment, passed or failed, with LCP, INP and CLS measured on real visits in Chrome over the last 28 days. This is the data behind Google's assessment, and the one to act on.

If the page has too few visits, you can switch to the figures for the whole site, called the origin. If the whole site has too few, the section stays empty. That is common for a small business and says nothing bad about your site: use the lab test below it instead.

### The bottom half: a lab test on a simulated phone

Below it, PageSpeed Insights runs Lighthouse, which loads the page on a simulated mid-range phone with a slow connection and gives a performance score out of 100. The score moves a few points from one run to the next, so run the test two or three times before you worry. The lab cannot measure INP, because nobody taps the page during the test; it reports Total Blocking Time instead, which rises with the same heavy scripts.

The useful part is the list of insights under the score. Since Lighthouse 13, released in October 2025, four of them answer most questions on a small business site:

- **LCP breakdown** names the element counted as your LCP and shows where the time goes. Check it first: it is not always the element you expect, and a heading can be the LCP rather than the hero photo.
- **Improve image delivery** lists images that are larger than needed or in older formats, with the estimated saving for each.
- **Render blocking requests** lists the stylesheets and scripts the browser has to download before it can show anything.
- **Layout shift culprits** points to the elements that make the page jump.

{{< callout type="tip" >}}**Do not chase a score of 100.** If the real-visit figures pass, a lab score in the 70s is not worth weeks of work.{{< /callout >}}

## How to read the Core Web Vitals report in Search Console

PageSpeed Insights tests one page at a time. The report in Google Search Console covers the whole site: open **Experience** > **Core Web Vitals**, then the mobile or desktop report.

It uses the same real-visit data as the top half of PageSpeed Insights and groups similar pages together, such as every blog post built on the same template, so one slow template shows up as one problem rather than fifty. Pages are rated poor, need improvement or good, and each page takes the status of its worst metric.

To deal with an issue:

1. Click it, for example an LCP issue on mobile, to see the pages it affects and an example URL.
2. Test that example in PageSpeed Insights and fix the cause in the template, not page by page.
3. Click **Validate fix**. Google then monitors the group for up to 28 days, because the figures cover the last 28 days of visits: slow visits from before your fix stay in them until they age out.

If the report is empty for lack of data, your site has too few Chrome visits to be assessed, and the lab test becomes your guide. My {{< a key="google-search-console-tutorial" >}}Google Search Console tutorial{{< /a >}} covers setting up the property and the other reports.

## What slows down a small business website, metric by metric

The assessment tells you which metric fails, and each one has its usual suspects.

### LCP: the main content appears late

| Cause | Fix |
|---|---|
| A hero photo of several megabytes, straight from a phone or a stock library | Resize it to the largest size it is ever displayed at and compress it. WebP and AVIF files are usually smaller than a JPEG of the same quality |
| The hero image is lazy-loaded | Lazy loading holds images back until the visitor scrolls near them: keep it for images further down the page |
| A background video or a slideshow at the top | One still photo, which usually does the job better |
| A slow server | Better hosting or page caching, covered by platform below |
| Stylesheets and scripts that block rendering | Remove the ones you do not need and load the other scripts after the content |

### INP: the page reacts late to a tap

INP problems usually come from JavaScript: while the browser runs a script, it cannot respond to a tap. On small business sites, many of those scripts come from third parties, added one at a time over the years: chat widgets, cookie banners, booking and review widgets, social media feeds, embedded maps and videos, and tracking tags piled up in Google Tag Manager.

List the third-party tools on the site and remove those that no longer earn their place. Load the rest only where they are needed: the booking widget on the booking page, not on every page. For videos and maps, show an image that loads the real player or map only when the visitor clicks it. Keep your consent banner if your cookies need one, but choose a light one.

I use {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity{{< /a >}} to see where visitors engage and which parts of a page make them leave. Its rage clicks, repeated clicks in one small spot, show where people expected something to happen: on a page that fails INP, look there first.

### CLS: the page jumps while it loads

| Cause | Fix |
|---|---|
| Images and embeds with no reserved space, so the text below jumps when they arrive | Give every image and embed its width and height |
| A cookie banner or announcement bar inserted above the content | Display it over the page, fixed at the bottom of the screen |
| Web fonts that arrive late and change the size of the text | Preload the main font and pick a fallback font of similar width. Use fewer files too: two families with two weights each is plenty for most sites |

## Fixes by platform: Squarespace, Wix, WordPress and hand-built sites

**Squarespace** hosts the site and serves each image you upload in several sizes, so your levers are what you put on the page: lighter images to start with, fewer fonts, a still photo instead of a background video, and as little third-party code as possible in code injection and code blocks. I give Squarespace to clients who want to edit their own site. I usually add some code to those sites, and I keep it light, because a script injected site-wide runs on every page.

**Wix** feels laggy to me, on every device, connection and country where I have used it. That is my experience of building sites with it; how fast your published site loads for visitors is a separate question, so measure it in PageSpeed Insights rather than trust my impression. If it fails, the levers are the same as on Squarespace, plus the apps added from the Wix App Market, each of which can bring its own code. My {{< a key="wix-platforms-history" >}}verdict on Wix's platforms{{< /a >}} explains why I steer solo owners elsewhere.

**WordPress** gives you more control than a site builder, and more ways to slow a site down: a heavy theme or page builder, plugins that each add files to every page, and cheap hosting without a cache. The WordPress clients who come to me usually want to leave it, because of the learning curve and the plugins to manage. With a specialist who looks after it every month, WordPress can be fast: fewer plugins, page caching and decent hosting do most of the work.

**Hand-built and static sites** start with an advantage. A static site is a set of pages built in advance, with no database to query on each visit; this blog runs on Hugo, a static site generator, on GitHub Pages. On the {{< a page="/projects/pilotech-toshiba" >}}Toshiba air conditioning site I built for Pilotech{{< /a >}}, which runs on Jekyll, the CSS is precompiled into a finished stylesheet before publication, and the icons are served from the site itself rather than from another company's server. That removes two common sources of delay before any testing starts. If you are planning a simple site, my tutorial on how to {{< a key="build-website-with-ai" >}}build a website with AI{{< /a >}} and host it on GitHub Pages starts from this kind of set-up.

On a hand-built site, the image and font fixes above come down to a few lines of HTML:

```html
<!-- Hero image: size reserved, fetched first, never lazy-loaded -->
<img src="/images/hero.webp" width="1600" height="900" fetchpriority="high" alt="Engineer fitting an air conditioning unit">

<!-- Further down the page: size reserved, lazy-loaded -->
<img src="/images/team.webp" width="800" height="600" loading="lazy" alt="The team on a job">

<!-- In the <head>: main font file requested early -->
<link rel="preload" href="/fonts/brand.woff2" as="font" type="font/woff2" crossorigin>

<!-- Text shown at once in a fallback font, swapped when the web font arrives -->
<style>
  @font-face {
    font-family: "Brand";
    src: url("/fonts/brand.woff2") format("woff2");
    font-display: swap;
  }
</style>
```

With `swap`, the text appears at once, but the swap can nudge it. If the font still shows up under **Layout shift culprits**, switch to `font-display: optional`: when the web font arrives too late, the browser keeps the fallback font.

## A one-hour speed check, and when to hand it over

1. Test three pages in PageSpeed Insights, on mobile: the home page, your main service page and your contact page. Note which metric fails, in the top half if you have real-visit data, in the lab results if not.
2. Find your LCP element in **LCP breakdown**. If it is an image, resize and compress it, and check that it is not lazy-loaded.
3. List every widget, tag and embed on the site. Remove what you no longer use and keep the rest on the pages that need them.
4. Cut the fonts to two families, and make sure the cookie banner sits over the page rather than pushing it down.
5. Test again, two or three times, and compare like with like: same page, same device type.
6. In Search Console, click **Validate fix** on each issue you have dealt with, and come back four weeks later.

Hand it over when the server is slow to respond, when INP fails because of the theme's own scripts, or when the fix means rebuilding templates. That work needs someone who reads code, and it is part of my {{< a page="/services/seo" >}}SEO service{{< /a >}}. If the site is slow because its platform does not suit the way you work, compare the cost of a rebuild with the cost of patching it every year.
