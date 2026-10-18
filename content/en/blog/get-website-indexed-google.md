---
title: "How to get your website on Google: indexing a new site step by step"
seo_title: "How to get your website on Google: indexing step by step"
description: "How to get your website on Google, step by step: check it is indexed, make it public, submit your sitemap, request indexing and fix the usual blockers."
slug: "get-website-on-google"
translationKey: "get-website-indexed-google"
date: 2026-10-17T08:10:00+02:00
lastmod: 2026-10-17T08:10:00+02:00
category: "seo"
article_type: "tutorial"
keywords: ["how to get my website on Google", "get website indexed by Google", "website not showing on Google", "submit website to Google", "request indexing Google", "new website not on Google"]
summary: "To get your website on Google, make it public on its own domain, add it to Google Search Console, submit your sitemap and request indexing for your key pages. It is free, and Google usually crawls new pages within a few days to a few weeks. If a page is still missing after that, check it with URL Inspection and look for a noindex tag, a robots.txt block, a password or a domain that is not connected."
cover: "get-website-indexed-google"
cover_alt: "Googlebot following a link from a new website to Google's index"
related: ["google-search-console-tutorial", "how-long-does-seo-take", "squarespace-seo", "robots-txt-ai-crawlers", "dns-records-explained"]
services: ["seo"]
faq:
  - q: "Do I have to pay to get my website on Google?"
    a: "No. Google indexes websites for free and does not accept payment to crawl a site more often or to rank it higher. Search Console is free too. Google Ads buys ad space above the results, not a place in the organic results."
  - q: "How long does Google take to index a new website?"
    a: "Usually a few days, sometimes a few weeks: that is the range Google gives for crawling. Ranking well takes much longer than being indexed, often months."
  - q: "Can I get my website on Google without Search Console?"
    a: "Yes. Google finds websites through links and sitemaps without any account. Search Console lets you see what Google sees, submit your sitemap and ask for a crawl, which is why it is worth the ten minutes it takes to set up."
  - q: "Should I let Google index my website before it is finished?"
    a: "No. Keep it private or password-protected until it is ready, then make it public, connect the domain and submit the sitemap on launch day. Half-finished pages that get indexed can stay in the results for a while."
  - q: "How do I remove a page from Google?"
    a: "Add a noindex tag to the page, or delete it so that it returns a 404 error, and let Google crawl it again. Do not block it in robots.txt, or Google will never see the noindex. In an emergency, the Removals tool in Search Console hides the page temporarily."
  - q: "Does my website also need to be on Bing?"
    a: "It is worth five minutes. Bing has its own index and about 6% of UK searches (Statcounter, June 2026), and Microsoft Copilot runs Bing searches to find the pages it cites. Bing Webmaster Tools can import your site and sitemap from Search Console without a new verification."
---

Google finds most new websites on its own, but "on its own" can mean weeks, and one forgotten setting can mean never. This tutorial shows how to get your website on Google step by step: check whether it is already indexed, remove what hides it, add it to Search Console, submit your sitemap and ask Google to crawl your key pages. Then it goes through the usual reasons a site stays invisible.

You do not need to pay anyone for this. With access to your site builder and to your domain's DNS settings, most owners can do it in an afternoon. Menu names are those of the English interfaces at the time of writing (October 2026).

Being indexed makes your pages eligible to appear; ranking well is the next job, covered in my {{< a key="small-business-seo-guide" >}}guide to small business SEO{{< /a >}}.

## How Google finds a new website

Three terms come up again and again. Here they are in one sentence each:

- **Crawling**: Googlebot, Google's robot, visits a page and reads it.
- **Indexing**: Google stores the page in its index, the database its results are drawn from.
- **Ranking**: for each search, Google chooses which indexed pages to show, and in what order.

Google discovers pages mainly by following links from pages it already knows, and by reading the sitemaps that site owners submit. Most pages in its results were never submitted by anyone: its crawlers found them. A brand-new site starts with a handicap, because no other site links to it yet, so Google has no path to it. The steps below give it one, and make sure nothing turns Googlebot away when it arrives.

{{< callout type="warning" >}}**Ignore offers to "submit your site to Google".** Google's own guidance on hiring an SEO warns against anyone who promises a "priority submit". Everything below is free.{{< /callout >}}

## Step 1: check whether your website is already on Google

Start with a search that lists the pages Google holds for your domain. Type this into Google with your own domain, and no space after the colon:

```
site:yourbusiness.co.uk
```

If results appear, your site is in the index, and the question becomes which pages are missing. If nothing appears, Google has not indexed it yet. Treat the number of results as a rough indication, not a count.

Searching for your business name is not a reliable test. A new site can be indexed and still not show for its own name, especially when the name is a common word.

{{< screenshot id="get-website-indexed-google-01" alt="Google results for a site: search on a new domain, listing the pages Google has indexed" >}}

For a definite answer about one page, use **URL Inspection** in Google Search Console: paste the page's full address into the bar at the top and press Enter. The verdict reads **URL is on Google** or **URL is not on Google**, followed by the reason, such as **URL is unknown to Google** for a page Google has never seen. If you do not use Search Console yet, step 3 sets it up; come back to this check afterwards.

{{< screenshot id="get-website-indexed-google-02" alt="Search Console URL Inspection result with the verdict URL is not on Google and the reason URL is unknown to Google" >}}

## Step 2: make sure your site is public and on its domain

On a brand-new site, the usual reason for being invisible has nothing to do with SEO: the site is still hidden from the public, or the domain does not point to it yet. Site builders keep new sites private while you build them, which is sensible, and the switch is easy to forget on launch day.

| Platform | What hides a new site | Where to change it |
|---|---|---|
| Squarespace | Every new site starts as private | **Settings** > **Site availability**: choose **Public** |
| Wix | A site-wide indexing switch, plus one on each page | **SEO Settings**: turn on **Let search engines index your site** |
| WordPress | A box, often ticked during the build, that asks search engines to stay away | **Settings** > **Reading**: untick **Discourage search engines from indexing this site** |
| Shopify | The password page every new store starts with | **Online Store** > **Preferences** > **Password protection** |
| Hand-coded site | A `noindex` tag or a `Disallow: /` rule left over from testing | The page source and your `robots.txt` file |

Two details catch people out. On Squarespace, a site on a free trial cannot be public, and its sitemap only loads once it is ([Squarespace's help on publishing or hiding a site](https://support.squarespace.com/hc/en-us/articles/360002088548-Publish-or-hide-your-site)). On Wix, each page also has its own indexing toggle in its SEO settings, and switching it off adds a noindex tag to that page ([Wix's help on letting search engines find your site](https://support.wix.com/en/article/enabling-search-engines-eg-google-to-find-your-site)). Shopify, for its part, may ask you to choose a plan before the password can come off.

{{< screenshot id="get-website-indexed-google-03" alt="Squarespace Site availability panel with Public selected" >}}

{{< screenshot id="get-website-indexed-google-04" alt="WordPress Settings > Reading screen with the Discourage search engines from indexing this site box unticked" >}}

### Connect the domain, then test both addresses

In my own projects, connecting the domain is the last step before launch. Once the client has approved the design and the copy, I write the page titles and descriptions, prepare a few articles in advance, then point the domain at the site and publish. Until that step, there is nothing at your address for Google to find.

Once the DNS records are in, type your address with and without www: both should open the site on https, one redirecting to the other. If one fails, check the records where your domain is managed. The only real trap I have hit when connecting domains came down to one character: at OVH, a CNAME target such as `ext-cust.squarespace.com.` needs its final dot, otherwise the www address never loads. My guide to {{< a key="dns-records-explained" >}}DNS records{{< /a >}} explains why.

### Hand-coded sites: look for leftovers from testing

A site built by a developer, or with AI and hosted on GitHub Pages or elsewhere, has no switch to flip. What hides it is usually a line left over from the test version. Open `yourbusiness.co.uk/robots.txt` in your browser. These two lines tell every crawler to stay out of the whole site:

```
User-agent: *
Disallow: /
```

A normal small business site needs the opposite: an empty `Disallow` line, and the address of your sitemap.

```
User-agent: *
Disallow:

Sitemap: https://www.yourbusiness.co.uk/sitemap.xml
```

Then open your home page, right-click, choose **View page source** and search for `noindex`. This tag asks search engines to leave the page out:

```
<meta name="robots" content="noindex">
```

## Step 3: add your site to Google Search Console

Search Console is Google's free tool for site owners, and the place where you see your site the way Google does. The next two steps need it.

1. Sign in at `search.google.com/search-console` with a Google account that belongs to the business, not to whoever builds the site.
2. Add a **Domain** property and type your bare domain, without `https://` or `www`.
3. Copy the TXT record that Search Console shows, add it in your domain's DNS settings, then click **Verify**. Keep the record afterwards: removing it ends the verification.

If you have just connected the domain, add the record while the DNS settings are still open. My {{< a key="google-search-console-tutorial" >}}Google Search Console tutorial{{< /a >}} shows each screen, what to do if verification fails and how to read the reports once data comes in.

## Step 4: submit your sitemap

A sitemap is a file that lists the pages you want Google to know about. You rarely have to create one: Squarespace, Wix and Shopify publish it at `/sitemap.xml`, and WordPress at `/wp-sitemap.xml`, or `/sitemap_index.xml` with Yoast SEO. Open that address in your browser first: a list of links means it works.

1. In Search Console, open **Indexing** > **Sitemaps**.
2. Under **Add a new sitemap**, type `sitemap.xml` (or your platform's version) and click **Submit**.
3. Check the status. **Success** means Google has read the file. **Couldn't fetch** is common on a new site: make sure the address opens in your browser, then give it a day or two.

You submit a sitemap once. Google comes back to it on its own, so new pages get picked up without a new submission.

{{< screenshot id="get-website-indexed-google-05" alt="Search Console Sitemaps report with sitemap.xml submitted and the status Success" >}}

## Step 5: request indexing for your key pages

The sitemap tells Google what exists; a request asks it to come and look soon. On a new site, keep requests for the pages that matter most:

- the home page;
- each main service or product page;
- the contact page, or the page with your address if you serve a local area.

For each of them:

1. Paste the page's full address into the URL Inspection bar at the top of Search Console.
2. Click **Request indexing**. Search Console first tests the live page, which can take a minute or two.
3. Wait for the confirmation that indexing was requested, then move on to the next page.

Only owners and full users of the Search Console property can request indexing, and there is a daily quota. Google's page on [asking Google to recrawl your URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl) is also clear on two points: asking several times does not get a page crawled any faster, and a request does not guarantee that the page will be indexed. For the rest of the site, the sitemap does the job.

{{< screenshot id="get-website-indexed-google-06" alt="Search Console message confirming that indexing was requested for a page" >}}

{{< callout type="tip" >}}**Request indexing again after a big change**, such as a new page title, new prices or a rewritten service page. It asks Google to read the new version instead of waiting for its next visit.{{< /callout >}}

## Step 6: give Google links to follow

A new site has no links pointing to it yet, so give Google a few to follow, inside and outside your site.

Inside the site, every page you want on Google should be reachable from your menu or from another page. A page that nothing links to, known as an orphan page, is found more slowly and looks minor to Google, even if it is in your sitemap.

Outside the site, a handful of genuine links brings Googlebot, and customers, to your door:

- your Google Business Profile, which also puts you on Google Maps (my {{< a key="google-business-profile-setup" >}}Google Business Profile setup guide{{< /a >}} covers it);
- your social profiles: LinkedIn, Facebook, Instagram, Pinterest;
- your trade association's member directory, and local listings such as Yell;
- suppliers and partners who list the businesses they work with;
- the local paper, when you have real news.

Skip paid link packages and directories that exist only to sell links. They do not speed anything up, and buying links to manipulate rankings breaks Google's spam policies.

## Why your website is still not on Google: the usual blockers

If a page is still missing two or three weeks after these steps, inspect it in Search Console. The reason under the verdict usually points to one of these causes:

| What you see | Likely cause | Fix |
|---|---|---|
| **URL is unknown to Google** | Google has not found the page yet | Check that the sitemap was read, link to the page from your menu, request indexing |
| **Excluded by 'noindex' tag** | A setting, a plugin or a line of code asks Google to leave the page out | Switch off the setting from step 2, or the page's own hide-from-search option |
| **Blocked by robots.txt** | Your robots.txt forbids crawling | Remove the `Disallow` rule that covers the page |
| A password page, a "coming soon" page or an error at your address | The site is still private, or the domain is not connected | Make the site public, then check the DNS records where your domain is managed |
| **Crawled - currently not indexed** | Google read the page and left it out, often because it is thin or too close to another page | Make the page more useful and distinct, and link to it from your main pages |
| **Discovered - currently not indexed** | Google knows the address but has not crawled it yet | Link to it from your main pages, then wait |

{{< screenshot id="get-website-indexed-google-07" alt="Page indexing report in Search Console listing a page as Excluded by 'noindex' tag" >}}

Once the fix is live, click **Test live URL** to check that Google can now index the page, then **Request indexing**. If the reason also appears in **Indexing** > **Pages**, open it and click **Validate fix**.

If you bought a domain that had a previous life, also open **Security & Manual Actions**: a penalty given to the old site would show there.

When none of these applies, the missing ingredient is time. My article on {{< a key="how-long-does-seo-take" >}}how long SEO takes{{< /a >}} separates the wait for indexing from the much longer one for rankings.

## Indexed is only the start: AI answers and rankings

Once your pages are in, two things decide what they bring you.

**Google's AI answers draw on the same index.** To be eligible as a source in AI Overviews or AI Mode, a page needs to be indexed and allowed to show a snippet, and Google lists no extra technical requirement ([Google's page on AI features](https://developers.google.com/search/docs/appearance/ai-features)). Other assistants run their own crawlers: ChatGPT search, for example, leaves out sites that block its crawler, OAI-SearchBot. My guide to {{< a key="robots-txt-ai-crawlers" >}}robots.txt for AI crawlers{{< /a >}} shows which bots to let in.

**Rankings are a separate job.** For Pilotech, an air conditioning installer in the Paris area, the site took about a month to build. It reached a top ranking for one of its searches within a day or two of going live, which is rare, and the first lead arrived three weeks after publication. Most new sites need far longer, and what gets them there is SEO: one page per specific search, useful content, then links and mentions over the following months.

The platform matters less than people fear. Squarespace keeps its code closed, which can give custom-coded sites an edge, yet a Squarespace site I built for Pilotech ranks first or second on Google. Get the page titles, descriptions and keywords right, and you give yourself every chance. If yours runs on Squarespace, my {{< a key="squarespace-seo" >}}Squarespace SEO tutorial{{< /a >}} covers the settings to get right next.

## How to get your website on Google: the launch checklist

Tick these off on launch day:

1. The site is public: Squarespace on **Public**, the Wix indexing switch on, the WordPress box unticked, the Shopify password removed.
2. The domain is connected, and the address opens on https with and without www.
3. Your robots.txt does not block the site, and no page you need carries a noindex tag.
4. Search Console has a verified **Domain** property, owned by the business.
5. The sitemap is submitted and shows **Success**.
6. Indexing is requested for the home page and the main service pages.
7. Your Google Business Profile and social profiles link to the site.
8. A week later, a site: search and URL Inspection show what is in.

You do not need me, or anyone else, for this list. Hand it over when pages stay out of the index after you have been through the blockers above, or when you move an established site to a new domain or platform, where one missed redirect can cost rankings you already have. That kind of technical check is part of my {{< a page="/services/seo" >}}SEO service{{< /a >}}.
