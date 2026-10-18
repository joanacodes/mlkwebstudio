---
title: "On-page SEO checklist: what to optimise on every page of your site"
seo_title: "On-page SEO checklist: 12 checks for every page"
description: "An on-page SEO checklist for small business websites: keyword, URL, headings, copy, images, internal links, title tag, meta description and schema."
slug: "on-page-seo-checklist"
translationKey: "on-page-seo-checklist"
date: 2026-10-17T08:05:00+02:00
lastmod: 2026-10-17T08:05:00+02:00
category: "seo"
article_type: "tutorial"
keywords: ["on-page SEO checklist", "on-page SEO", "on-page optimisation", "title tag and meta description", "image alt text SEO", "internal links SEO"]
summary: "On-page SEO is the work you do on each page itself: one primary keyword, a short URL, one H1 and subheadings that answer real questions, copy that answers the search, described images, internal links, then a title tag and a meta description that earn the click. Add structured data where it fits, and check that the page works on a phone, loads fast and can be indexed by Google."
cover: "on-page-seo-checklist"
cover_alt: "Blueprint of a web page with its title tag and H1 heading marked out"
related: ["keyword-research-small-business", "squarespace-seo", "schema-markup-small-business", "core-web-vitals-speed", "google-search-console-tutorial"]
services: ["seo"]
faq:
  - q: "Is on-page SEO enough to rank on Google?"
    a: "Sometimes, for a precise service in an area with few competitors. For most searches, Google also weighs what happens away from your site: links and mentions from other websites and, for local searches, your Google Business Profile, its reviews and your distance from the person searching."
  - q: "How long does on-page SEO take to work?"
    a: "Google first has to crawl the updated page, which can take from a few days to a few weeks; requesting indexing in Search Console can speed that up. Rankings then move over weeks or months: Google says SEO results typically take four months to a year."
  - q: "Should the H1 be the same as the title tag?"
    a: "It can be. Both describe the same thing in the searcher's words. The title tag often adds a selling point and your business name, which would look odd at the top of the page, so the H1 is usually the shorter of the two."
  - q: "Do I need an SEO plugin for on-page SEO on WordPress?"
    a: "In practice, yes. WordPress has no meta description field of its own, and an SEO plugin such as Yoast SEO or Rank Math adds the SEO title and meta description fields, a sitemap and basic structured data. Install one, not two, or the same tags may be printed twice."
  - q: "How often should I review the on-page SEO of my pages?"
    a: "Check every new page before it goes live. Then review your main pages whenever your offer, prices or area change, and at least once a year."
---

On-page SEO is everything you control on the page itself: its address, its headings, its words, its images, its links to the rest of your site, and the title and description that search engines read. This on-page SEO checklist takes you through twelve checks for every page of a small business website, with what good looks like and where to make each change.

The order follows the way I build pages for clients: the keyword research comes before a word of copy is written, and the title and description come last, once the client has approved the page, because they have to describe the final version.

Most of it needs no developer. A Squarespace site I built for Pilotech, an air conditioning installer near Paris, ranks first or second on Google, although Squarespace gives no access to its code: with the right keywords and metadata, a closed platform did not hold it back. You need your site builder and, for the last checks, Google Search Console.

## What on-page SEO covers, and what it leaves out

On-page SEO is one of three families of SEO work. This checklist covers it, plus two technical checks that are best run page by page.

| Family | What it covers | Examples |
|---|---|---|
| On-page SEO | What you write and set on each page | Keyword, URL, headings, copy, images, internal links, title tag, meta description, structured data |
| Technical SEO | What lets search engines crawl and index the whole site | Sitemap, robots.txt, redirects, speed, display on phones |
| Off-page SEO | What happens away from your site | Links and mentions from other sites, reviews, your Google Business Profile |

For Pilotech, the work went in this order: pages created for the searches that matter, then their content, then the Google Business Profile, then technical fixes. The pages came first because everything else sends people to them. My {{< a key="small-business-seo-guide" >}}guide to small business SEO{{< /a >}} covers the whole programme.

## Check 1: give each page one primary keyword

A primary keyword is the search a page is written to rank for. Choose it first: the URL, the H1, the opening lines and the title all follow from it.

Take the heating engineer in Leeds from my {{< a key="keyword-research-small-business" >}}keyword research method{{< /a >}}: the repair page targets "boiler repair Leeds" and also answers close variants such as "boiler not working". One search per page, one page per search. When two of your pages chase the same keyword, they compete with each other and both usually do worse, which is called keyword cannibalisation.

For a live page, Search Console shows what Google thinks it is about. Open **Performance** > **Search results**, click the page in the **Pages** tab, then open **Queries**. If the searches listed are not the ones you wrote the page for, the page is not saying what you think it says. To spot cannibalisation, go back to the full report, click a query and open **Pages**: two of your pages listed for the same search means they compete.

{{< screenshot id="on-page-seo-checklist-01" alt="Search Console Performance report filtered on one page, with the Queries tab listing the searches it appears for" >}}

## Check 2: keep the URL short and readable

The slug is the last part of a page's address, the part that names the page. Use a few lowercase words separated by hyphens, with the keyword when it reads naturally:

```
Good:  yourbusiness.co.uk/boiler-repair-leeds
Weak:  yourbusiness.co.uk/page-12?id=4471
Weak:  yourbusiness.co.uk/our-boiler-repair-services-in-leeds-and-surrounding-areas
```

Google recommends readable words rather than long ID numbers, and hyphens between words rather than underscores. Leave dates out of pages that are meant to last. Once a page ranks, change its slug only with a 301 redirect from the old address to the new one; otherwise the links and rankings it has built lead to an error page.

## Checks 3 and 4: one H1, then subheadings that answer questions

The H1 is the main heading at the top of the page. Give each page one, in the searcher's words: "Boiler repair in Leeds" says more than "Welcome" or "Our services".

Below it, write an H2 for each question people ask before they buy, and H3s when a section needs splitting:

```
H1  Boiler repair in Leeds
H2  How quickly can an engineer come out?
H2  How much does a boiler repair cost?
H2  Which boilers do you repair?
H2  Areas we cover around Leeds
```

Readers who scan find their question in seconds, screen readers can jump from heading to heading, and a section that answers one question is easy to quote, by a person or by an AI assistant. My guide on {{< a key="write-content-for-ai-search" >}}writing content that AI assistants quote{{< /a >}} goes further.

Watch your template: some turn the business name or a banner slogan into the H1. Right-click the page, choose **View page source** and search for `<h1`: you should find one, holding your main heading.

{{< screenshot id="on-page-seo-checklist-02" alt="The source code of a live page in the browser, with the title tag, the meta description and the single H1 highlighted" >}}

## Check 5: write copy that answers the search

Someone who types "boiler repair Leeds" wants three answers fast: can you fix my boiler, how soon, and roughly how much. Give them in the first lines, where the keyword will appear naturally, then back them up:

- **Use your customers' words**, taken from enquiries, calls and reviews. I also run deep research reports to find what people in a niche complain about most and which phrases keep coming back, and I build the copy on them.
- **Be specific**: brands, areas, delays, prices or price ranges, how a job goes. Details are what make your page more useful than the other results.
- **Show proof**: reviews, photos of real jobs, case studies, accreditations.

I use AI to put it all together, then rework and edit until I am satisfied with every line. Once the page is live, Microsoft Clarity shows me where visitors engage and where they leave, which tells me whether the copy, a picture or the layout needs work.

## Check 6: name, describe and lighten your images

Every image needs three things before it goes on the page:

1. **A descriptive file name**: `combi-boiler-repair-kitchen.jpg`, not `IMG_4032.jpg`. Google says file names give it only light clues, and a generic name wastes them.
2. **Alt text**: one short sentence that says what the image shows, for people who cannot see it. Google calls alt text the most important attribute for describing an image, and reads it alongside computer vision and the text of the page ([Google's image SEO guidelines](https://developers.google.com/search/docs/appearance/google-images)). Use the keyword only if it describes the picture, and leave the alt text empty on purely decorative images.
3. **A light file**: resize photos to the width at which they are shown, and compress them. Photos straight from a phone are a common cause of slow pages.

```html
<img src="/images/combi-boiler-repair-kitchen.jpg"
     alt="Engineer replacing the pump of a combi boiler in a customer's kitchen">
```

## Check 7: link the page to the rest of your site

Internal links lead from one page of your site to another. They help visitors and Google find your pages, and their clickable words, the anchor text, tell both what the target page is about.

- Make every page reachable from the menu or from another page: a page that nothing links to may be found late, or never.
- Link from the pages people already visit, such as your home page, to the pages that sell.
- Describe the target in the anchor text, such as "boiler repair in Leeds", never "click here".
- Link each article to the service that solves the problem it describes.

The {{< a page="/projects/pilotech-vmi" >}}ventilation site I built for Pilotech{{< /a >}} rests on that last rule. Each of its 21 articles starts from a problem people search for, such as condensation in attics or black mould in a flat, and links to the page of the unit suited to that problem. The reader arrives with a problem and leaves on the page of the solution.

## Check 8: write the title tag last, and make it worth clicking

The title tag is the page's name in its code. Browsers show it on the tab, and Google usually turns it into the blue title link of your result, so it decides whether people click. I write it last: a title written before the copy is final tends to describe a page that no longer exists.

For most small business pages, the formula is the keyword first, then a reason to choose you, then your business name:

```html
<title>Boiler repair in Leeds: same-day visits | Your Business Name</title>
```

Google sets no maximum length, but it cuts the title link to fit the screen, so put the words that matter first; as a rule of thumb, 50 to 60 characters show in full. Google can also build its own title link from your H1 or other prominent text, especially when a title is half-empty, inaccurate or repeated across pages ([Google's guide to title links](https://developers.google.com/search/docs/appearance/title-link)). Give every page its own.

On the {{< a page="/projects/pilotech-toshiba" >}}Toshiba air conditioning site{{< /a >}} I built for Pilotech, each of the ten ranges has its own page and a title built around a local search, such as "Toshiba Haori : 15 coloris, prix et pose en IDF": the model, its selling point (15 colours), the price and installation buyers look for, and the region, IDF being French shorthand for the Île-de-France.

{{< screenshot id="on-page-seo-checklist-03" alt="A Google result for a local service page, with its title link, its address and the description shown below" >}}

Squarespace and Wix have a title field in each page's SEO settings, WordPress needs an SEO plugin, and a hand-coded page takes it in its `<head>`. My {{< a key="squarespace-seo" >}}Squarespace SEO tutorial{{< /a >}} shows the exact fields on that platform.

## Check 9: write a meta description that sells the click

The meta description is a sentence or two in the page's code that summarises it. Google often shows it under the title link, so write it like a small advert: what you offer, where, one detail that sets you apart, and what to do next.

```html
<meta name="description" content="Boiler repairs across Leeds by Gas Safe registered engineers, often the same day. All major brands, with a fixed price agreed before any work starts.">
```

Google has long said the description plays no part in rankings: its job is to win the click. Google sets no length limit either, but it cuts the snippet to fit the screen, so 150 to 160 characters with the essentials first is a safe length. It also often writes its own snippet from the page's text when that text matches the search better ([Google's guide to snippets](https://developers.google.com/search/docs/appearance/snippet)), one more reason for copy that answers the search.

Give every page its own description, then let Search Console show you which to rewrite first: a page with many impressions and few clicks is being seen and passed over. A sharper title and description are usually the quickest fix.

## Check 10: add structured data where it fits

Structured data, or schema markup, is code that describes a page to search engines in a shared vocabulary, schema.org. Google recommends the JSON-LD format, a block of code that visitors never see. It can make a page eligible for rich results such as review stars, prices or breadcrumbs, though Google never guarantees one. For a small business, a few types do most of the work:

- `LocalBusiness` (or `Organization`) on the home or contact page: name, address, phone number, opening hours.
- `Product` on product pages, with the price and availability.
- `BreadcrumbList` on sites with several levels of pages.
- `Article` on blog posts.

On the Toshiba site, the business, each product and each service has its own structured data. Check what your platform already outputs before you add any: many site builders and SEO plugins add basic markup on their own.

Skip FAQ and HowTo markup if rich results are the goal. FAQ rich results stopped showing on 7 May 2026, although the markup stays valid and does no harm, and HowTo rich results disappeared in 2023. Test your pages with the Rich Results Test at `search.google.com/test/rich-results`; my guide to {{< a key="schema-markup-small-business" >}}schema markup for small businesses{{< /a >}} has the code.

{{< screenshot id="on-page-seo-checklist-04" alt="Rich Results Test listing the structured data detected on a page, with no errors" >}}

## Checks 11 and 12: mobile, speed and indexing

The last two checks are technical, but you run them page by page.

**Check 11: the page works on a phone and loads fast.** Google mainly uses the mobile version of a page to index and rank it, so open yours on a phone: text readable without zooming, buttons easy to tap, a phone number that dials when tapped, nothing covering the content. Then test it in PageSpeed Insights at `pagespeed.web.dev`. Core Web Vitals count as good when the main content appears within 2.5 seconds (LCP), the page reacts to a tap or click within 200 milliseconds (INP) and the layout barely shifts (CLS of 0.1 or less). My guide to {{< a key="core-web-vitals-speed" >}}Core Web Vitals{{< /a >}} explains how to fix each one.

{{< screenshot id="on-page-seo-checklist-05" alt="PageSpeed Insights mobile report for a page, with the Core Web Vitals assessment at the top" >}}

**Check 12: Google can index the page.** A page Google cannot index will never rank, however good its title. Check that it has no `noindex` tag, that robots.txt does not block it, that its canonical tag (the line naming the main version of a page) points to its own address, and that it is in your sitemap and linked from another page. Then paste its address into **URL Inspection** in Search Console: you want to read **URL is on Google**. After a big change, click **Request indexing** so Google reads the new version sooner. My {{< a key="google-search-console-tutorial" >}}Google Search Console tutorial{{< /a >}} walks through each screen.

{{< screenshot id="on-page-seo-checklist-06" alt="Search Console URL Inspection result with the verdict URL is on Google and the page indexing details, including the canonical address" >}}

## What you can leave off your on-page SEO checklist

Some advice still in circulation costs time and changes nothing. Skip:

- **The meta keywords tag.** Google does not use it, as its [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) says in a list of things not to focus on.
- **Word counts and keyword density.** That list includes content length, and repeating a keyword to reach a percentage is keyword stuffing, which breaks Google's spam policies.
- **Special files and markup for AI search.** Google's guide to its AI features, published in May 2026, says that optimising for AI Overviews and AI Mode is still SEO: llms.txt files, content cut into chunks and special schema are not needed for Google Search.
- **A perfect PageSpeed score.** The performance score out of 100 in PageSpeed Insights comes from a simulated visit. Aim to pass the Core Web Vitals instead; a page can do so with a score well below 100.

## Your on-page SEO checklist to copy, and when to hand it over

| # | Check | What good looks like |
|---|---|---|
| 1 | Primary keyword | One search per page, and no other page of yours chasing it |
| 2 | URL | A few lowercase words joined by hyphens, redirected if it ever changes |
| 3 | H1 | One per page, in the searcher's words |
| 4 | Subheadings | H2s that answer the questions buyers ask |
| 5 | Copy | The answer in the first lines, then specifics and proof |
| 6 | Images | A descriptive file name, alt text, a light file |
| 7 | Internal links | Linked from another page with descriptive anchor text, and linking on to the next step |
| 8 | Title tag | Keyword first, a reason to click, your name, unique to the page |
| 9 | Meta description | About 150 to 160 characters that read like a small advert |
| 10 | Structured data | The types that fit, tested without errors |
| 11 | Mobile and speed | Comfortable on a phone, Core Web Vitals passed |
| 12 | Indexing | URL Inspection says URL is on Google |

You do not need me for this list. Most of it is writing about your own business, which you know better than anyone. Hand it over when dozens of pages need fixing at once, when the problem sits in the template rather than in your words (a heading your theme forces, a slow script, broken structured data), or when a page passes every check and still has not moved after a few months. That kind of work is part of my {{< a page="/services/seo" >}}SEO service{{< /a >}}.
