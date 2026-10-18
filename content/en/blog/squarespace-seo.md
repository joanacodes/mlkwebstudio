---
title: "Squarespace SEO: the 8 settings to get right, step by step"
seo_title: "Squarespace SEO: the 8 settings to get right, step by step"
description: "Squarespace SEO step by step: SEO titles and descriptions, URL slugs, alt text, 301 redirects, your sitemap in Search Console, AI crawlers and llms.txt."
slug: "squarespace-seo-settings"
translationKey: "squarespace-seo"
date: 2026-10-17T08:09:00+02:00
lastmod: 2026-10-17T08:09:00+02:00
category: "seo"
article_type: "tutorial"
keywords: ["Squarespace SEO", "Squarespace SEO settings", "Squarespace SEO title and description", "Squarespace URL mappings", "Squarespace sitemap", "Squarespace Google Search Console"]
summary: "Squarespace SEO comes down to a few built-in settings: an SEO title, a description and a short URL slug for every page, a title format for the whole site, alt text on images, 301 redirects in URL mappings and a sitemap submitted to Google Search Console. Make sure the site is public, and leave the AI crawler block off if you want AI assistants to find you. With these settings and the right keywords, a Squarespace site I built ranks first or second on Google."
cover: "squarespace-seo"
cover_alt: "Search bar above a list of results with the first one highlighted, beside the words Squarespace SEO and a laptop on a desk"
related: ["squarespace-tutorial", "on-page-seo-checklist", "google-search-console-tutorial", "wordpress-to-squarespace", "robots-txt-ai-crawlers"]
services: ["seo"]
faq:
  - q: "Is Squarespace good for SEO?"
    a: "Yes, for a small business site. It handles the technical basics, such as the sitemap, HTTPS and layouts that adapt to phones, and gives you the fields that matter. Because it is closed, a developer has less room than on a custom-coded or WordPress site, but rankings depend far more on your keywords, content and links."
  - q: "What is the difference between the page title and the SEO title on Squarespace?"
    a: "The page title is the name you give the page in Squarespace. The SEO title, in the SEO tab of the page settings, is the title browsers and search engines use, up to 100 characters. If you leave it empty, Squarespace uses the page title instead."
  - q: "How long does a new Squarespace site take to appear on Google?"
    a: "Once the site is public and the sitemap submitted, Google usually crawls new pages within a few days to a few weeks. Ranking takes longer: Google says SEO typically takes four months to a year. For one client, a ranking came within a day or two, which is rare and not something I would promise."
  - q: "What does Squarespace's AI Visibility tool do?"
    a: "It tracks how your business shows up in ChatGPT and Gemini, in English only, on version 7.1 sites. It measures where you stand; it does not change it. What gets you mentioned is the same work as for Google: clear pages about what you do and where, and mentions of your business on other sites."
  - q: "Can a Squarespace site rank in both English and French?"
    a: "Yes, but Squarespace has no built-in translation: you build each language's pages yourself or add a translation service such as Weglot. Give each version its own SEO title, description and slug in its language, and add hreflang tags so Google shows the right version to each searcher."
---

Squarespace SEO is mostly a matter of filling in what the platform already gives you: an SEO title and a description for each page, short URL slugs, alt text on images, redirects when an address changes, and a sitemap that Google Search Console knows about. This tutorial takes those settings one by one, in the order they come up around a launch, on Squarespace 7.1, with the menu names of the English interface in October 2026.

One caveat first. Squarespace is a closed platform: you have no access to the source code, so a custom-coded site or a well-built WordPress site gives a specialist more room, and can rank higher for that reason. Yet the first site I built for Pilotech runs on Squarespace and ranks first or second on Google, with its metadata and keywords done right.

That is also why I move clients who edit their own site to Squarespace: they can change a page without the whole structure falling apart, and every setting below is within their reach. If you are still building the site, start with my {{< a key="squarespace-tutorial" >}}Squarespace tutorial{{< /a >}}. This tutorial is part of my {{< a key="small-business-seo-guide" >}}guide to small business SEO{{< /a >}}, which covers keywords, content and links.

## What Squarespace SEO covers, and what is left to you

Squarespace takes care of the technical basics that used to need a developer. What is left is a set of fields to fill in, and the keywords you put in them decide whether they do any good.

| | What Squarespace does | What you do |
|---|---|---|
| Sitemap | Generates it at `/sitemap.xml` | Submit it in Google Search Console (step 7) |
| HTTPS | Includes the SSL certificate | Nothing |
| Phones | Templates adapt to small screens | Check your main pages on your own phone |
| Page titles | Builds them from a site-wide format | Set the format, then an SEO title per page (steps 2 and 3) |
| Descriptions | Gives every page a field | Write one per page (step 3) |
| URL slugs | Sets one when you create a page | Shorten it; renaming a page does not update it (step 4) |
| Images | Hosts and serves them | Write the alt text (step 5) |
| Redirects | Nothing until you add them | Add them in URL mappings (step 6) |
| Keywords and content | Nothing | All of it: this is what ranks |

Before you open a single setting, choose one main keyword per page: the words a customer would type to find that service, often with your town. One page, one service, one keyword. Of the sites I built for Pilotech's founder, one offered too many services and did not work at all; the one that ranks sells very specific services.

## Step 1: make sure search engines can see the site

A page Google cannot reach will not rank, however good its title. Three settings can hide a Squarespace site or page, and each one catches people out at launch:

1. In **Settings**, open **Site availability** and choose **Public**. Every Squarespace site starts as private, and only a site on a paid plan can be public, so a site on a free trial stays out of Google.
2. If you protected the site with a password while building it, remove the password. It stops Google from indexing your content, and pages indexed before you added it can linger in the results for a while.
3. Check that none of your main pages has **Hide page from search results** switched on. Step 3 explains this toggle.

{{< screenshot id="squarespace-seo-01" alt="Squarespace Site availability panel with the Public option selected" >}}

Do this step first: Squarespace only serves your sitemap once the site is public.

## Step 2: set the title formats for the whole site

The title Google shows for a page usually comes from its title tag, which Squarespace builds from formats you set once for the whole site. Open the **SEO/AI Visibility** panel and click **SEO Settings**: the title formats are there, with separate ones for the homepage, for pages and for collection items such as blog posts. They use three variables:

- `%s`: the site title, normally your business name
- `%p`: the page's SEO title
- `%i`: the SEO title of a collection item, such as a blog post

For a heating engineer in Leeds, the formats could read:

```
Homepage:          %s | Boiler repairs and servicing in Leeds
Pages:             %p | %s
Collection items:  %i | %s
```

The homepage needs the most care, because it has no SEO title field in its page settings: its title in Google comes from this format alone. Write your business name and what you do, with your town if you serve a local area. Keep the site title short, as the `%p | %s` format adds it to the end of every page title.

The homepage also needs a description, the short text Google may show under its title. [Squarespace's help on SEO descriptions](https://support.squarespace.com/hc/en-us/articles/206016198-Adding-SEO-descriptions) shows where to add it.

{{< screenshot id="squarespace-seo-02" alt="Squarespace SEO/AI Visibility panel, SEO Settings, with the title formats for the homepage, pages and collection items" >}}

## Step 3: write an SEO title and a description for every page

Every other page has its own SEO fields. In the **Pages** panel, click the gear icon next to a page and open the **SEO** tab:

- **SEO title**: the title browsers and search engines use, up to 100 characters. Left empty, it falls back on the page title, which is often a single word such as Services.
- **SEO description**: the text Google may show under the title. Search engines cut it at around 160 characters, so say the essentials first.

Put the page's keyword at the start of the title, and write the description like a small advert: what you offer, where, and why someone should choose you. For the same heating engineer:

```
SEO title:        Boiler repair in Leeds
SEO description:  Gas Safe registered engineers repair boilers of all major brands in Leeds and Bradford. Clear prices; call or book a visit online.
```

With the `%p | %s` format, Google receives "Boiler repair in Leeds | Your Business Name". It sometimes shows other text from the page instead of your description, but a clear, accurate one gives it a good option, and those two lines are where a searcher decides to click.

{{< callout type="tip" >}}I write the metadata last, once the client has approved the design and the copy, just before I connect the domain and publish. That way, the titles describe the pages as they will go live.{{< /callout >}}

{{< screenshot id="squarespace-seo-03" alt="Squarespace page settings, SEO tab, with the SEO title and SEO description fields filled in" >}}

My {{< a key="on-page-seo-checklist" >}}on-page SEO checklist{{< /a >}} covers the rest of each page: headings, copy and internal links.

### Hide the pages Google does not need

The same SEO tab has a **Hide page from search results** toggle. Switch it on for pages with nothing to offer a searcher, such as the thank-you page after a form or a test page. The page stays public and still appears in your site's own search. Homepages and single collection items, such as one blog post, have no such toggle, and hiding a collection page hides all its items.

Moving a page to the **Not Linked** section of the Pages panel does something else: it only takes the page out of your navigation. Google can still find and index it.

## Step 4: shorten your URL slugs

The URL slug is the last part of a page's address: `boiler-repair-leeds` in `yourbusiness.co.uk/boiler-repair-leeds`. Squarespace sets it when you create the page and does not change it when you rename the page, so a renamed page can keep an address that no longer matches it.

To edit it, open the page settings with the gear icon, go to the **General** tab and change the **URL slug** field. A good slug:

- uses a few lowercase words joined by hyphens;
- contains the page's keyword, without filler words or dates;
- describes one page: `/boiler-repair-leeds`, not `/services-2`.

Blog posts and products have their own URL setting in their item settings, and the same rules apply.

{{< screenshot id="squarespace-seo-04" alt="Squarespace page settings, General tab, with the URL slug field" >}}

If the page is already live, changing its slug creates a new address. Add a redirect from the old one straight away (step 6), or visitors and Google will land on an error page.

## Step 5: add alt text to your images

Alt text is a short written description of an image: screen readers read it aloud to people who cannot see the image, and search engines use it to understand what the image shows. It takes a minute per image.

Click an image block, open its editing options and fill in the alt text field. Describe what the image shows in one plain sentence, as you would to someone over the phone:

| Alt text | Verdict |
|---|---|
| Engineer servicing a combi boiler in a kitchen in Leeds | Good: says what is in the picture, with the keyword where it fits |
| boiler leeds boiler repair cheap boiler | Keyword stuffing, useless to a screen reader |
| IMG_4521 | Says nothing |

Rename your files before you upload them as well: `boiler-service-leeds.jpg` tells Google more than `IMG_4521.jpg`. Purely decorative images, such as a background texture, do not need a description.

{{< screenshot id="squarespace-seo-05" alt="Squarespace image block editing options with the alt text field filled in" >}}

## Step 6: redirect old addresses with URL mappings

A 301 redirect sends visitors and search engines from an old address to a new one, permanently, and tells Google to show the new page in place of the old one. You need one whenever an address changes: a new slug, a deleted or merged page, or a move from another platform.

Open the **Developer tools** panel, click **URL mappings**, type one redirect per line, then click **Save**:

```
/old-services -> /boiler-repair-leeds 301
/blog/[name] -> /news/[name] 301
```

The second line uses the `[name]` variable, which stands for every item of a collection: one line moves a whole blog. The rules, from [Squarespace's help on URL mappings](https://support.squarespace.com/hc/en-us/articles/205815308-URL-mappings):

- Lines apply from top to bottom, so put a specific redirect, such as a single blog post, above a broad rule that could conflict with it.
- Keep the capitalisation of the old address, and leave out `?`, `&` and `#`.
- You cannot redirect an image or a file, or redirect away from the homepage.
- The field holds roughly 2,500 lines.

{{< callout type="warning" >}}A redirect only works once the old page has been **deleted or disabled**. While the old page is still there, the line does nothing.{{< /callout >}}

{{< screenshot id="squarespace-seo-06" alt="Squarespace URL mappings panel with two 301 redirect lines typed in" >}}

If you are moving a whole site, my guide to {{< a key="wordpress-to-squarespace" >}}moving from WordPress to Squarespace without losing your rankings{{< /a >}} shows how to list every old address before you start.

## Step 7: connect Google Search Console and submit your sitemap

Google Search Console is Google's free tool for site owners: it shows which searches bring up your pages and which pages Google has left out. Check three things before you start:

- the site is public on a paid plan, as verification does not work on a trial site;
- there is no site-wide or homepage password;
- if your domain comes from another registrar, 48 hours have passed since you connected it.

Then verify the site and hand Google your sitemap:

1. In Search Console, add your site as a **Domain** property and copy the TXT record Google gives you.
2. Add that record to your domain's DNS settings: in Squarespace's **Domains** panel if Squarespace manages the domain, or at your registrar if not. Squarespace does not let you upload Google's verification file, so the DNS record is the way to go.
3. Back in Search Console, click **Verify**. DNS changes can take a while to show, so try again later if it fails.
4. Open **Sitemaps**, enter `https://www.yourbusiness.co.uk/sitemap.xml` (with your own domain) under **Add a new sitemap** and click **Submit**.

A **Couldn't fetch** status can show for 24 to 48 hours while Google processes a new sitemap, so give it two days before you look for a problem.

{{< screenshot id="squarespace-seo-07" alt="Google Search Console Sitemaps report with a Squarespace sitemap.xml submitted" >}}

Last, bring the data into Squarespace. In **Analytics**, open **Search keywords**, click **Connect**, sign in with the Google account that owns the property and allow access. The searches that bring visitors to your site then appear in Squarespace, within about 72 hours.

{{< screenshot id="squarespace-seo-08" alt="Squarespace Analytics, Search keywords panel, with the button to connect Google Search Console" >}}

[Squarespace's help on Search Console](https://support.squarespace.com/hc/en-us/articles/205813918-Verifying-your-site-with-Google-Search-Console) covers the Squarespace side, and my {{< a key="google-search-console-tutorial" >}}Google Search Console tutorial{{< /a >}} explains the reports worth reading each month.

## Step 8: decide what AI assistants can read

AI assistants such as ChatGPT, Claude and Perplexity send their own crawlers to read websites. Squarespace gives you two settings for them.

**The crawler setting.** In **Settings**, open **Crawlers**. The **Block known artificial intelligence crawlers** option is off by default. Leave it off if you want AI assistants to find and recommend your business: OpenAI, for one, says that sites which block its search crawler are not shown in ChatGPT's search answers. Switch it on only if keeping your content away from AI companies matters more to you than that visibility. While you are on the panel, check that nothing there blocks search engines either; [Squarespace's help on crawlers](https://support.squarespace.com/hc/en-us/articles/360022347072) describes each option.

{{< screenshot id="squarespace-seo-09" alt="Squarespace Crawlers settings with the Block known artificial intelligence crawlers option switched off" >}}

**llms.txt.** Since late July 2026, version 7.1 sites can publish an llms.txt file, a plain summary of the site for AI tools, from the **LLMS.txt** tab of the same **SEO Settings**. It is off by default and Squarespace writes nothing for you. Google Search ignores the file and no major AI company has confirmed that it reads one, so treat it as ten minutes of optional work. My {{< a key="llms-txt-explained" >}}llms.txt guide{{< /a >}} shows what to write and where to paste it.

## Your Squarespace SEO checklist, and when to hand it over

Run through this list before launch, then again whenever you add a page:

1. The site is **Public**, with no site-wide password.
2. The title formats are set, and the homepage title says who you are, what you do and where.
3. Every page has an SEO title and a description built around one keyword.
4. Slugs are short, and every changed address has a 301 in URL mappings.
5. Every image that carries meaning has alt text.
6. Search Console is verified, the sitemap is submitted and Search keywords is connected.
7. AI crawlers are allowed, and llms.txt is added if you want one.
8. Once a month, you read the **Performance** and **Page indexing** reports in Search Console.

You do not need me for any of this. These settings are within reach of anyone who can edit a Squarespace site, which is the whole point of putting my clients on it: they change their pages whenever they want. I usually add a little custom code to their sites, nothing destructive, and that is the part they call me for.

The settings are the easy part of SEO. What takes time is the work around them: keyword research, a page for each service, a Google Business Profile, then mentions and links from other sites. Pilotech's site took about a month to build, and its first lead came three weeks after it went live; my {{< a key="pilotech-seo-case-study" >}}SEO case study{{< /a >}} tells the story step by step. If you would rather hand that work over, it is what my {{< a page="/services/seo" >}}SEO service{{< /a >}} covers.
