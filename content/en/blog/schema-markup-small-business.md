---
title: "Schema markup for small businesses: what still helps in Google and AI search"
seo_title: "Schema markup for small businesses: what still helps"
description: "Schema markup in 2026: the types that still help a small business in Google, what AI search really does with them, and JSON-LD code to copy and test."
slug: "schema-markup-small-business"
translationKey: "schema-markup-small-business"
date: 2026-10-17T08:28:00+02:00
lastmod: 2026-10-17T08:28:00+02:00
category: "aio"
article_type: "tutorial"
keywords: ["schema markup", "schema markup for small business", "LocalBusiness schema", "JSON-LD", "structured data", "schema markup for AI search"]
summary: "Schema markup is code, usually JSON-LD, that describes your business and your pages to search engines. In October 2026, Organization or LocalBusiness, BreadcrumbList and Product markup are still worth adding, while FAQ and HowTo rich results no longer appear in Google. Do not count on it to get you quoted by AI assistants: Google says its AI features need no special schema, and an Ahrefs study of 1,885 pages found no meaningful rise in AI citations."
cover: "schema-markup-small-business"
cover_alt: "A terminal window with a web request answered 200 OK, beside the word Schema.org"
related: ["local-seo-guide", "geo-vs-seo", "google-ai-overviews-ai-mode", "on-page-seo-checklist", "squarespace-code-injection"]
services: ["seo"]
faq:
  - q: "Is schema markup a ranking factor?"
    a: "Not directly. Google uses structured data to understand a page and to decide whether it can show a rich result, but valid markup does not move a page up on its own. What the page says, and the searches it answers, still decide where it ranks."
  - q: "JSON-LD, Microdata or RDFa: which format should I use?"
    a: "JSON-LD. Google reads all three, but recommends JSON-LD whenever your site allows it, as it is the easiest to add and maintain. Microdata and RDFa are woven into the HTML of your visible content, so every design change risks breaking them."
  - q: "How long does schema markup take to show in Google?"
    a: "Google has to recrawl and reprocess the page first, which can take from a few days to several weeks. Requesting indexing in Search Console's URL Inspection tool can speed up the crawl."
  - q: "Is schema markup worth it for a one-page website?"
    a: "Yes, as a single block: a LocalBusiness or Organization block on that page is all you need. There is no breadcrumb trail to mark up on a one-page site."
  - q: "Can I write schema markup with ChatGPT or a generator?"
    a: "Yes, it is a sensible use of them: give the tool your real details and ask for JSON-LD. Then check every value against your page, delete anything it made up, such as a rating or opening hours, and run the result through the Rich Results Test."
---

Schema markup is a block of code, usually written in JSON-LD, that describes a page to search engines as data: your business name, address, phone number and opening hours, the service a page sells, the price of a product. It uses the shared schema.org vocabulary, and your visitors never see it.

In October 2026, the question for a small business is which parts still earn their place. Google has retired several of the rich results that markup used to bring, FAQ results included in May 2026, while "AI schema" is being sold as a way into ChatGPT. My short answer: three or four types are still worth an afternoon, nothing shows that any of them gets you quoted by an AI assistant, and you can skip the rest.

This tutorial is part of my {{< a key="ai-search-geo-guide" >}}complete guide to generative engine optimisation{{< /a >}}.

## What schema markup is, in plain words

A person reading your contact page knows that "12 Example Street, Bristol" is an address. A crawler sees a line of text, unless the markup labels it as one.

Every example in this tutorial is in JSON-LD, which sits in a single `<script>` block in the page's code, apart from your design. Here is what that block can do for you:

- make a page eligible for a rich result, such as a price and stock level under a product, or a breadcrumb trail in place of the page address;
- help Google connect your website with your business, through the same name, logo, address and phone number as on your Google Business Profile and your social profiles;
- describe your services and products in a form any crawler can read without guessing.

What it cannot do is guarantee anything. **Valid markup makes a page eligible for a rich result; Google decides whether to show it.**

## What schema markup still shows in Google in 2026

Google has trimmed its rich results year after year. In 2023, HowTo results went and FAQ results were kept for well-known government and health sites only. Since January 2025, mobile results show only the domain where the breadcrumb trail used to be, while desktop results still show it. FAQ results stopped appearing for everyone on 7 May 2026 and, according to Google's documentation, FAQ support left the Rich Results Test and Search Console's reports in June 2026. The FAQ markup itself is still valid: Google simply no longer displays it.

Here is where the types a small business might use stand at the time of writing (October 2026):

| Type | What Google does with it | Worth adding? |
|---|---|---|
| `Organization` | Helps Google identify your business; can influence the logo shown in results and in your knowledge panel | Yes, on the home page |
| `LocalBusiness` and its subtypes | A type Google supports for your address, phone number and opening hours | Yes, if customers come to you or you serve a local area |
| `BreadcrumbList` | Breadcrumb trail in desktop results | Yes, on every page below the home page |
| `Product` with an `Offer` | Price, availability and ratings in results | Yes, if you sell online or show prices |
| `Event` | Event details in results | If you run public events |
| `Service` | No rich result | Optional, and cheap on a coded site |
| `FAQPage` | No rich result since 7 May 2026 (government and health sites only from 2023) | Keep it if you have it; don't add it |
| `HowTo` | No rich result since 2023 | No |

`LocalBusiness` is a more precise kind of `Organization`, so a business with one address needs one of the two, not both. Pick the most precise subtype that fits: schema.org has types for plumbers, electricians, dentists, restaurants and many other trades.

One limit matters for a local business: the map results are driven by your Google Business Profile far more than by anything in your code, as my {{< a key="local-seo-guide" >}}local SEO guide{{< /a >}} explains.

## Does schema markup help with ChatGPT and AI search?

Not in any way anyone has measured so far. Here is what is documented at the time of writing:

1. **Google says its AI features need no special schema.** Its guide to optimising for AI Overviews and AI Mode, published on 15 May 2026, treats that work as ordinary SEO and lists special schema among the things Google Search does not need ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). To be eligible for those answers, a page only has to be indexed and allowed to show a snippet.
2. **Ahrefs measured no meaningful effect.** In a study published in May 2026, Ahrefs tracked 1,885 pages that added JSON-LD between August 2025 and March 2026 and compared them with 4,000 similar pages. Against those, citations rose by 2.2% in ChatGPT and 2.4% in AI Mode, too little to tell from chance, and fell by 4.6% in AI Overviews, a drop whose cause the study leaves open ([Ahrefs](https://ahrefs.com/blog/schema-ai-citations/)). Ahrefs ran it because pages cited by AI were almost three times as likely to carry JSON-LD, but schema tends to sit on better-maintained sites, so that gap proved nothing.
3. **Microsoft says it helps its models read pages.** At a conference in March 2025, Microsoft's Bing team said schema markup helps its language models understand content, which concerns Bing and Copilot ([Search Engine Land](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455)). For ChatGPT, Gemini and Perplexity, nothing is documented either way.

Being read more easily and being quoted more often are two different things, and only the first has any support. Assistants quote pages that answer the question well, and businesses that other sites talk about. My article on {{< a key="geo-vs-seo" >}}GEO vs SEO{{< /a >}} explains where that work goes.

{{< callout type="tip" >}}**If you add markup, put it in the page's HTML.** Googlebot runs JavaScript, so it reads markup that a tag manager or a widget adds after the page loads. GPTBot, ClaudeBot and PerplexityBot do not run JavaScript, so for them that markup does not exist.{{< /callout >}}

## The schema markup a small business needs

On the sites I code, the principle is the same every time, and you can copy it:

- **Home page:** one block for the business, `LocalBusiness` (or its most precise subtype) if customers come to you or you work in a defined area, `Organization` otherwise.
- **Service pages:** a `Service` block for the service on the page.
- **Product pages:** a `Product` block, with an `Offer` if the page shows a price.
- **Every page below the home page:** a `BreadcrumbList`.

Pilotech's Toshiba site, for example, has structured data for the business, for each of its ten ranges and for each service; you can find it from the {{< a page="/projects/pilotech-toshiba" >}}Pilotech Toshiba project page{{< /a >}}. The bilingual site of Eden Corporate Mobility describes the agency, the breadcrumbs and the FAQs. The entry portal I built for Pilotech, ready to go live, describes the company as an HVAC business in Paris and the Île-de-France, and schema.org even has a type for that: `HVACBusiness`.

On my projects, the metadata comes last, once the client is happy with the design and the copy. Treat structured data the same way: the markup has to describe what the final pages say.

### LocalBusiness: the block for your home page

Here is a complete block for a made-up electrician in Bristol. Replace every value with your own, and delete any line you cannot fill in truthfully:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://www.example.com/#business",
  "name": "Example Electrical",
  "url": "https://www.example.com/",
  "logo": "https://www.example.com/images/logo.png",
  "image": "https://www.example.com/images/team.jpg",
  "telephone": "+44 117 496 0123",
  "email": "hello@example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 Example Street",
    "addressLocality": "Bristol",
    "postalCode": "BS1 4AA",
    "addressCountry": "GB"
  },
  "areaServed": ["Bristol", "Bath"],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }],
  "sameAs": [
    "https://www.facebook.com/your-page",
    "https://www.linkedin.com/company/your-company"
  ]
}
</script>
```

A few rules for yours:

- **Copy your name, address and phone number exactly as they appear on your Google Business Profile and your contact page.** One version of each, everywhere.
- `@id` is a label of your choice that your other blocks can point to, as the service example below does.
- `sameAs` lists your profiles on other sites, so they can be tied to the same business.
- If you work from home and hide your address on your Business Profile, leave the street out here too and keep the town.

### Service, Product and BreadcrumbList: the shorter blocks

A service page gets a short block that points back to the business through its `@id`:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "EV charger installation",
  "serviceType": "Electric vehicle charger installation",
  "provider": { "@id": "https://www.example.com/#business" },
  "areaServed": ["Bristol", "Bath"],
  "url": "https://www.example.com/ev-charger-installation/"
}
```

A product page gets a `Product` block with the product's name, image, description and brand. Google only shows a product rich result when the block also has an `offers` property with a price, a `review` or an `aggregateRating`, so a catalogue without prices or reviews describes its products but earns no rich result.

Every page below the home page gets its breadcrumbs, in the same order as the trail shown on the page. The last item needs no address, since it is the page itself:

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.example.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.example.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "EV charger installation" }
  ]
}
```

Wrap each block in its own `<script type="application/ld+json">` tag, as in the first example.

## How to add schema markup to your site

Whatever your platform, start by checking what it already outputs: paste your home page address into the Schema Markup Validator (see the testing section below). Many platforms and SEO plugins add a basic block on their own, and two blocks that disagree about your business help no one.

### On a hand-coded site, Hugo or Jekyll

Add the blocks to the `<head>` of your templates, and generate them from the same data as the pages rather than writing them page by page. On the unified site I built for Pilotech, the 29 product sheets come from data and a single template, and every page has its own structured data: a new range gets its page and its markup at the same time.

### On Squarespace

Squarespace already outputs basic markup (website, business, products, events, blog posts), partly from the business information in your settings, and you cannot edit it directly. Fill in your business information first, then see what the validator finds.

For what is missing, the route is code injection: the site-wide header field for a fuller business block that repeats exactly the same details, and the page header field in each page's settings (**Advanced** tab) for that page's service or breadcrumb block. Code injection is not included in every plan, and Squarespace has moved its menus more than once, so my {{< a key="squarespace-code-injection" >}}Squarespace code injection tutorial{{< /a >}} has the current steps.

{{< screenshot id="schema-markup-small-business-01" alt="Squarespace page settings, Advanced tab, with a JSON-LD block pasted into the page header code injection field" >}}

### On WordPress and other builders

An SEO plugin such as Yoast SEO or Rank Math already outputs a block for your site and its pages. Fill in its settings for your business (name, logo, social profiles), and use its local business options or add-on for the address and hours rather than pasting a second block. On other builders, look for a structured data or custom code field in the page's SEO settings. If there is none, your Business Profile matters more than the markup you are missing.

## How to test your schema markup

Test one page of each kind before you publish, then let Search Console watch the whole site.

1. Open Google's [Rich Results Test](https://search.google.com/test/rich-results), enter the address of a page (or paste your code in the **Code** tab) and run the test.

{{< screenshot id="schema-markup-small-business-02" alt="Google Rich Results Test home page with the URL and Code tabs" >}}

2. Read the result. It lists each type that Google can display and that it found on the page, such as breadcrumbs, with its errors and warnings. **An error makes the page ineligible for that rich result**; a warning flags an optional property, worth adding only if it is true.

{{< screenshot id="schema-markup-small-business-03" alt="Rich Results Test result listing the items detected on a page, with their errors and warnings" >}}

3. Run the same page through the Schema Markup Validator, at `validator.schema.org`. It reads every schema.org type, including those the Rich Results Test leaves out because Google has no rich result for them, such as `Service` and, since June 2026, `FAQPage`.

{{< screenshot id="schema-markup-small-business-04" alt="Schema Markup Validator showing the LocalBusiness, Service and BreadcrumbList blocks found on a page" >}}

4. After publishing, use Google Search Console. **URL Inspection** shows the rich result types Google detected on one page, and each type found on your site gets its own report in the left-hand menu, under **Enhancements** (or **Shopping** for products). Once you have fixed an error, click **Validate fix** in that report. My {{< a key="google-search-console-tutorial" >}}Google Search Console tutorial{{< /a >}} covers the setup.

{{< screenshot id="schema-markup-small-business-05" alt="Search Console Breadcrumbs report with valid items and items with issues" >}}

## Mistakes that cost you rich results

- **Marking up what the page does not show.** Google's guidelines say markup must describe content visitors can see. Opening hours that appear nowhere on the page, or a service you do not list, break that rule, and misleading markup can earn a manual action that removes your rich results until you fix it.
- **Adding your own star rating.** Google does not show stars for reviews a business publishes about itself, so an `aggregateRating` copied from your Google reviews earns nothing on your own site. The stars beside your name in Google Maps come from your Business Profile.
- **Two blocks that disagree.** If a plugin's block gives one phone number and your own block another, fix the source rather than adding a third block.
- **Forgetting the markup when things change.** When you move, change your number or your hours, update it on the same day as your Business Profile.

{{< callout type="warning" >}}**Don't pay for an "AI schema" package.** If an offer to get you into ChatGPT rests on structured data, ask what else it includes. The markup in this tutorial takes an afternoon, and its effect is mostly in Google.{{< /callout >}}

## Your schema markup checklist

1. Paste your home page address into the Schema Markup Validator to see what your site already outputs.
2. Add or complete one `LocalBusiness` or `Organization` block on the home page, with the same name, address and phone number as your Google Business Profile.
3. Add a `BreadcrumbList` to every page below the home page, a `Product` block to product pages and, if it costs you little, a `Service` block to service pages.
4. Test one page of each kind in the Rich Results Test, fix the errors, then publish.
5. A few weeks later, check the reports in Search Console.
6. Leave any FAQ markup where it is, skip HowTo, and spend the time you saved on your pages and your Business Profile.

Structured data is one line of my {{< a key="on-page-seo-checklist" >}}on-page SEO checklist{{< /a >}}, and it deserves about that share of your time. For Pilotech, whose Teknopoint site ranks first or second on Google, the SEO work came in this order: pages, content, the Google Business Profile, then technical fixes. Markup belongs to that last group. If your Business Profile is not finished yet, my {{< a key="google-business-profile-setup" >}}Google Business Profile setup guide{{< /a >}} comes first.

On Squarespace, or on WordPress with an SEO plugin, this is a job you can do yourself, without me. Hand it over when the markup has to be generated for dozens of products or pages: that is template work.
