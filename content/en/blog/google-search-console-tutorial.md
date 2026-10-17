---
title: "How to use Google Search Console: a step-by-step guide for beginners"
seo_title: "How to use Google Search Console: a step-by-step guide"
description: "How to use Google Search Console step by step: verify your site, submit a sitemap, read the Performance and Page indexing reports, and the new AI reports."
slug: "how-to-use-google-search-console"
translationKey: "google-search-console-tutorial"
date: 2026-10-17T08:01:00+02:00
lastmod: 2026-10-17T08:01:00+02:00
category: "seo"
article_type: "tutorial"
keywords: ["how to use Google Search Console", "Google Search Console tutorial", "Search Console Performance report", "Page indexing report", "Search Console AI Overviews report", "Bing Webmaster Tools"]
summary: "To use Google Search Console, add your site as a Domain property, verify it with a TXT record in your DNS, submit your sitemap and inspect your key pages. Then read two reports every month: Performance (clicks, impressions, CTR, position) and Page indexing (which pages Google left out, and why). Since 31 August 2026, generative AI reports also show your impressions in AI Overviews and AI Mode, without clicks."
cover: "google-search-console-tutorial"
cover_alt: "Google Search Console Performance report open in a browser window"
related: ["get-website-indexed-google", "on-page-seo-checklist", "track-ai-traffic", "google-ai-overviews-ai-mode", "how-long-does-seo-take"]
services: ["seo"]
faq:
  - q: "Is Google Search Console free?"
    a: "Yes. Search Console is free for any website and has no paid tier. You need a Google account and proof that you control the site, usually a DNS record or an HTML tag."
  - q: "What is the difference between Google Search Console and Google Analytics?"
    a: "Search Console shows what happens on Google before the click: searches, impressions, clicks and indexing. Google Analytics shows what visitors do on your site once they arrive. You can link the two in Google Analytics, under Admin > Product links > Search Console links."
  - q: "Does Search Console show my ranking for a keyword?"
    a: "It shows an average position for each query where your site appeared, over the dates you choose. It is not a live rank check: positions vary with location, device and the searcher's history, so read it as a trend."
  - q: "How do I give my web designer access to Search Console?"
    a: "Open Settings, then Users and permissions, click Add user and enter their Google account with Full or Restricted permission. Stay the owner yourself and never share your own Google password."
  - q: "How long before Search Console shows data for a new site?"
    a: "Reports fill in over the days after verification, but a new site only gets Performance data once its pages start appearing in Google's results, which can take days or weeks. URL Inspection works straight away."
---

Google Search Console is Google's free tool for website owners. It shows which searches bring up your pages, how often people click, which pages Google has indexed and what stops the others. This tutorial on how to use Google Search Console follows the order I would use on a new site: add it, verify it, submit the sitemap, then read the reports that matter.

You need about twenty minutes and access to the DNS settings of your domain, wherever it is registered. Menu names are those of the English interface at the time of writing (October 2026).

The last steps cover this year's AI reports and Bing Webmaster Tools. This tutorial is part of my {{< a key="small-business-seo-guide" >}}guide to small business SEO{{< /a >}}.

## What Google Search Console shows you (and what it does not)

Search Console reports on your site as Google sees it. Each question has its own report:

| Your question | Where to look |
|---|---|
| Which searches show my site, and do people click? | **Performance** > **Search results** |
| Is this page on Google? | **URL inspection**, the search bar at the top |
| Which pages are left out, and why? | **Indexing** > **Pages** |
| Has Google read my sitemap? | **Indexing** > **Sitemaps** |
| Do I appear in AI Overviews and AI Mode? | The generative AI reports, with the **Performance** reports |
| Is my site hacked or penalised? | **Security & Manual Actions** |
| Is my site fast enough? | **Experience** > **Core Web Vitals** |

What it does not show is what visitors do once they land. I use Microsoft Clarity for that: it shows where people engage, whether they came for something specific and which parts of a page make them leave, so I can tell whether the copy, a picture or the layout is the problem. My {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity tutorial{{< /a >}} covers the set-up.

## Step 1: add your site as a Domain property

A property is the site, or the part of a site, that Search Console reports on. There are two types:

| | Domain property | URL-prefix property |
|---|---|---|
| Covers | The whole domain: every subdomain (www, shop, blog), over http and https | Only addresses that start with the exact prefix, such as `https://www.yourbusiness.co.uk/` |
| Verification | A DNS record, nothing else | HTML file, HTML tag, Google Analytics, Google Tag Manager or DNS record |
| Choose it when | You can edit your domain's DNS | You cannot touch the DNS, or you manage one section of a site |

**Choose the Domain property whenever you can.** It catches every version of your address, including the old http one and the www or non-www version you forgot about.

1. Go to `search.google.com/search-console` and sign in with the Google account the business will keep: not a freelancer's account, and not a personal address you might lose.
2. On your first visit, the welcome screen shows both property types. Otherwise, open the property menu at the top left and click **Add property**.
3. In the **Domain** box, type the bare domain (`yourbusiness.co.uk`, without `https://` or `www`) and click **Continue**.

{{< screenshot id="google-search-console-tutorial-01" alt="Search Console's Add property window with its two choices, Domain and URL prefix" >}}

## Step 2: verify the domain with a DNS TXT record

Search Console now shows a TXT record: a line of text you add to your domain's DNS to prove you control it. It starts with `google-site-verification=` followed by a code unique to you. Copy it with the **Copy** button.

In another tab, open the DNS settings where your domain is managed (Namecheap, Spaceship, OVHcloud, Squarespace Domains or another registrar) and add this record:

```
Type:   TXT
Host:   @    (the root of the domain; at OVHcloud, leave the sub-domain empty)
Value:  google-site-verification=AbC123xYz...   (your own code)
TTL:    default
```

Save, return to Search Console and click **Verify**. If Search Console does not find the record yet, nothing is broken: a DNS change can take a few hours, sometimes a day, to spread. Try again later.

Add this record next to your existing TXT records rather than replacing them: the SPF record, the one starting with `v=spf1`, keeps your email working. No trailing dot is needed either: the final dot that catches people out at OVH applies to CNAME targets, not to a TXT value. {{< a key="dns-records-explained" >}}DNS records explained{{< /a >}} covers each record type with examples.

{{< callout type="warning" >}}**Keep the TXT record after verification.** Google checks it from time to time, and deleting it ends your verification.{{< /callout >}}

Connecting the domain is the last thing I do before a site goes live. If you are at that stage, the DNS panel is already open: add the Search Console record in the same sitting.

{{< screenshot id="google-search-console-tutorial-02" alt="Search Console domain verification window showing the TXT record that starts with google-site-verification= and its Copy button" >}}

## Step 3: submit your sitemap

A sitemap is a file that lists the pages you want search engines to find. Most platforms create it for you: Squarespace, Wix and Shopify publish it at `/sitemap.xml`, WordPress at `/wp-sitemap.xml` (or `/sitemap_index.xml` with Yoast SEO). Open that address in your browser first: a list of links means it works.

1. In the left menu, open **Indexing** > **Sitemaps**.
2. Under **Add a new sitemap**, type the end of the address after your domain, for example `sitemap.xml`, and click **Submit**.
3. Check the status under **Submitted sitemaps**. **Success** means Google has read it. **Couldn't fetch** is common on a brand-new site: check that the address opens in your browser, then give it a day or two.

You submit a sitemap once: Google comes back to read it on its own, so there is no need to resubmit it after each new page. If your site still does not appear on Google, my tutorial on {{< a key="get-website-indexed-google" >}}how to get your website on Google{{< /a >}} goes through the usual blockers one by one.

{{< screenshot id="google-search-console-tutorial-03" alt="Sitemaps report with the Add a new sitemap field and a submitted sitemap.xml with the status Success" >}}

## Step 4: inspect a page and request indexing

URL Inspection tells you whether one page is on Google, and why. Paste the full address of a page into the search bar at the top of Search Console and press Enter.

The result opens with a verdict, **URL is on Google** or **URL is not on Google**, followed by the reason. The details show how Google found the page (your sitemap, a link), when it last crawled it and which address it treats as the main version, called the canonical. Two buttons matter:

- **Test live URL** checks the page as it is now, which is useful right after a fix.
- **Request indexing** asks Google to crawl the page soon. Keep it for a new page that matters or a page you have changed a lot: the sitemap handles the rest, Search Console limits requests per day and asking twice does not speed anything up.

A request is not a guarantee. Google still decides whether the page earns a place in its index.

{{< screenshot id="google-search-console-tutorial-04" alt="URL Inspection result showing URL is on Google, with the Test live URL and Request indexing buttons" >}}

## Step 5: read the Performance report

Open **Performance** > **Search results**. Four totals sit above the chart; click one to show or hide its line:

- **Total clicks**: visits from Google Search to your site.
- **Total impressions**: the number of times one of your pages appeared in the results someone loaded.
- **Average CTR**: clicks divided by impressions.
- **Average position**: where your highest result sat on average, 1 being the top.

The default period is the last three months. The **Date** filter goes back 16 months, and its **Compare** tab sets one period against another, such as this month against the same month last year. Below the chart, the tabs break the totals down by **Queries** (what people typed), **Pages**, **Countries**, **Devices**, **Search appearance** and **Dates**. Click a query or a page to filter the whole report on it.

Three readings are worth your time:

1. **Many impressions, few clicks.** Sort the queries by impressions. A query that shows your page often but brings hardly any clicks usually points to a title or description that does not match the search: my {{< a key="on-page-seo-checklist" >}}on-page SEO checklist{{< /a >}} shows how to rewrite them.
2. **Positions 8 to 20.** These pages sit on the edge of page one: improving them often pays faster than writing something new.
3. **One page at a time.** Click a page in the **Pages** tab, then open **Queries**: you see what that page ranks for, which is not always what you wrote it for.

Since 17 November 2025 you can also add your own annotations to the chart, up to 120 characters each and visible to everyone with access to the property. Add one when you publish a page, rewrite titles or change platform: three months later, you will know why the curve moved.

{{< callout type="note" >}}Do not judge a new site on its first weeks: Google itself says SEO typically takes four months to a year. Pilotech was an exception, with a ranking within a day or two of going live and the first lead three weeks after publication.{{< /callout >}}

{{< screenshot id="google-search-console-tutorial-05" alt="Performance report for Search results with the four totals shown on the chart and the Queries tab below" >}}

### Separate branded and non-branded searches

Searches for your business name come from people who already know you. Searches without it are the ones SEO brings. Since 20 November 2025, Search Console can tell them apart: the branded queries filter, extended to all eligible sites in March 2026, splits every metric between branded searches and the rest. Google classifies the queries itself and you cannot add your own brand terms. It also decides which properties are eligible, so the filter may not appear on yours.

**Non-branded clicks are the number to follow month after month**: they are new people finding you.

{{< screenshot id="google-search-console-tutorial-06" alt="Performance report filtered on non-branded queries, with the branded queries filter in the filter bar" >}}

## Step 6: fix what matters in the Page indexing report

Open **Indexing** > **Pages**. The chart splits the pages Google knows into indexed and not indexed, and the table **Why pages aren't indexed** gives the reasons.

A long list of non-indexed pages is normal. **Page with redirect**, **Alternate page with proper canonical tag** and **Not found (404)** for pages you deleted are expected. What needs attention is a page you want on Google showing one of these reasons:

| Reason | What it means | What to do |
|---|---|---|
| Excluded by 'noindex' tag | The page asks not to be indexed | Remove the noindex: in a site builder, look for a setting that hides the page from search engines |
| Blocked by robots.txt | Your robots.txt file forbids crawling | Remove the rule that blocks it |
| Server error (5xx) | Your server failed when Google called | Ask your host if it keeps happening |
| Soft 404 | The page looks empty or like an error page | Add real content, or return a proper 404 |
| Crawled - currently not indexed | Google read the page and left it out | Make it more useful and distinct, and link to it |
| Discovered - currently not indexed | Google knows the address but has not crawled it | Link to it from your main pages, then wait |

Once the fix is live, open the reason and click **Validate fix**. Google rechecks the affected pages over the following days or weeks and shows the outcome there.

Keep your priorities straight, though. In the SEO work I did for Pilotech, technical fixes came fourth, after the pages, the content and the Google Business Profile. A clean indexing report does not make a thin page rank.

{{< screenshot id="google-search-console-tutorial-07" alt="Page indexing report with the indexed and not indexed chart and the Why pages aren't indexed table" >}}

## Step 7: check your visibility in AI Overviews and AI Mode

### The generative AI reports

Google announced [generative AI reports for Search Console](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) on 3 June 2026, and every site has had them since 31 August 2026. They sit with the other **Performance** reports: one for Search, covering AI Overviews and AI Mode, and one for Discover. Read them knowing their limits:

- They count **impressions only**, by page, country, device and date: no clicks, no CTR, no position and no queries.
- The same impressions already appear in the **Web** search type of the main report, so do not add the two together. Clicks from AI Mode have been counted under Web since June 2025.

What they are good for is seeing which of your pages Google's AI features show, and how often. To become one of the cited sources, read {{< a key="google-ai-overviews-ai-mode" >}}how to get your site cited in AI Overviews and AI Mode{{< /a >}}; to measure the visits AI assistants send you, see {{< a key="track-ai-traffic" >}}how to track AI traffic{{< /a >}}.

{{< screenshot id="google-search-console-tutorial-08" alt="Generative AI report for Search showing AI Overviews and AI Mode impressions by page" >}}

### The Search generative AI setting

In **Settings**, the **Search generative AI** setting decides whether your content can appear in AI Overviews, AI Mode and Discover summaries. Every site is included by default. Google first tested the setting with UK sites in June 2026 and has been extending it to other countries since August, so it may not appear on your property yet. An exclusion takes a few days to apply, and Google says it is not a ranking signal: your ordinary results stay as they are. The Gemini app and the training of Google's models are a separate matter, controlled by the Google-Extended token in your robots.txt file ([Google's help page on the setting](https://support.google.com/webmasters/answer/16908024)).

For most small businesses, the default is the right choice: an AI answer that quotes you puts your name in front of people who are comparing options. Excluding a site mainly makes sense for publishers whose articles are the product.

{{< screenshot id="google-search-console-tutorial-09" alt="Search Console Settings page with the Search generative AI setting and the site included" >}}

## Add your site to Bing Webmaster Tools

Bing Webmaster Tools is Microsoft's version of Search Console. Bing had about 6% of UK searches in June 2026, against about 91% for Google ([Statcounter](https://gs.statcounter.com/search-engine-market-share/all/united-kingdom)), and Microsoft Copilot runs Bing searches to build its answers. Once Google is set up, Bing takes a few minutes:

1. Go to `bing.com/webmasters` and sign in.
2. Choose to import your sites from Google Search Console and allow access. Bing brings over your verified sites and their sitemaps, with no new verification.
3. Open **Sitemaps** in Bing. If yours is missing, submit it there.

Two features are worth knowing:

- **IndexNow** tells search engines the moment a page is added, changed or deleted. Bing, Yandex, Seznam, Naver and Yep use it; Google does not ([IndexNow FAQ](https://www.indexnow.org/faq)). Some platforms and SEO plugins send these notifications for you.
- **AI Performance**, in public preview since February 2026, counts how often Copilot and Bing's AI summaries cite your pages, and lists the grounding queries: the searches the AI ran before answering. Like Google's report, it shows no clicks, and the data is sampled.

{{< screenshot id="google-search-console-tutorial-10" alt="Bing Webmaster Tools screen for adding a site, with the option to import sites from Google Search Console" >}}

{{< screenshot id="google-search-console-tutorial-11" alt="Bing Webmaster Tools AI Performance report with citations over time and grounding queries" >}}

## How to use Google Search Console every month

Once it is set up, Search Console needs about fifteen minutes a month:

1. **Read the emails** Search Console sends when it finds a new problem, then glance at **Overview**.
2. **Compare periods** in **Performance**: the last 28 days against the previous 28, then against the same period last year. Non-branded clicks are your SEO trend.
3. **Rewrite one title**: take a query with many impressions and few clicks, and rework the title and description of the page that shows for it.
4. **Scan Page indexing** for a new reason on a page you care about.
5. **Open the generative AI report** and note which pages appear.
6. **Check Security & Manual Actions**: both reports should say that no issues were detected.
7. **Add an annotation** to the chart for anything you changed this month.

When to hand it over: if pages you need stay out of the index after you have fixed the obvious causes, or clicks fall sharply with no reason you can see, a second pair of eyes saves time. That technical work is part of my {{< a page="/services/seo" >}}SEO service{{< /a >}}. If the Security issues report flags your site, treat it as a hack and act the same day.
