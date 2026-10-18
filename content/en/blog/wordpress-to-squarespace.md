---
title: "WordPress to Squarespace: how to move without losing your Google rankings"
seo_title: "WordPress to Squarespace: move without losing rankings"
description: "Move from WordPress to Squarespace without losing your Google rankings: import your content, redirect every old URL with a 301, then connect your domain."
slug: "wordpress-to-squarespace"
translationKey: "wordpress-to-squarespace"
date: 2026-10-17T09:38:00+02:00
lastmod: 2026-10-17T09:38:00+02:00
category: "website-rescue"
article_type: "tutorial"
keywords: ["WordPress to Squarespace", "migrate WordPress to Squarespace", "move WordPress site to Squarespace", "Squarespace URL mappings", "301 redirects Squarespace"]
summary: "To move from WordPress to Squarespace without losing rankings, list every old URL, export your content (Tools > Export in WordPress) and import the .xml file into Squarespace: pages, posts and images come across, but not your design, plugins or SEO titles. Then redirect each old address to its new one with a 301 in URL mappings, paste back your titles and descriptions, connect the domain and submit the sitemap in Search Console. Rankings can move for a few weeks."
cover: "wordpress-to-squarespace"
cover_alt: "A flow diagram of connected nodes over ribbed glass, with the words WP → Squarespace"
related: ["squarespace-vs-wordpress", "squarespace-seo", "squarespace-tutorial", "namecheap-dns-squarespace", "wordpress-site-hacked"]
services: ["websites"]
faq:
  - q: "Will my email stop working when I cancel my WordPress hosting?"
    a: "It will if your mailboxes live on the same hosting plan as the website, which is common with shared hosting. Check where your MX records point: if they point to your web host, move your email to an email provider and update the MX records before you cancel."
  - q: "Do I need Google's Change of Address tool when moving to Squarespace?"
    a: "Only if the domain changes as well, for example from a .co.uk to a .com. If you keep the same domain, the 301 redirects in URL mappings do the job: the Change of Address tool in Search Console is meant for moves from one domain to another."
  - q: "How long does a WordPress to Squarespace migration take?"
    a: "The import itself is the quick part. The rest depends on the number of pages and on how much the old site relied on plugins: the design to rebuild, the forms to replace and the redirects to write. Then allow 24 to 72 hours for the domain connection."
  - q: "What should I do with the old WordPress site after the move?"
    a: "Keep the backup of the files and the database for a few months, in case you need a page or an image. Once the redirects are tested, your email is safe and your domain's DNS no longer depends on the host, cancel the hosting rather than leaving a copy of the old site online at another address, where Google could index it as a duplicate."
---

Moving from WordPress to Squarespace is mostly an SEO job. The content part is quick: Squarespace imports your pages, posts and images from a WordPress export file. What the import does not do is keep your old addresses working, and every old URL that leads to an error page is a page Google will gradually stop showing.

I have moved clients from WordPress to Squarespace myself. Every WordPress client who came to me wanted to change platforms, worn out by the learning curve and the plugins. Those who run their site themselves went to Squarespace, where changing a letter does not bring the whole layout down and they make changes whenever they want. Those with a budget for regular changes got a custom-built site.

This tutorial covers the move in eight steps, from listing your URLs to checking Search Console in the weeks after. It is part of my {{< a key="website-security-guide" >}}guide to website security for small businesses{{< /a >}}, because a site nobody can maintain becomes a security risk. Menu names are those of WordPress, Squarespace and Google Search Console in English at the time of writing (October 2026).

## Is Squarespace the right home for your site?

Squarespace suits owners who edit their own website and want hosting, security and updates handled for one subscription. A brochure site with a blog moves over well. A site built around plugins is harder to move: a large shop, a members' area, a booking system with custom rules, or a multilingual site, since Squarespace has no built-in translation.

WordPress is still a sound choice if you have the budget: my clients with a big budget keep it and pay a specialist to look after it every month. My {{< a key="squarespace-vs-wordpress" >}}Squarespace vs WordPress comparison{{< /a >}} walks through the decision.

One honest limit before you commit. Squarespace is closed: you get no access to the source code, so a custom-coded site or a carefully built WordPress site gives a specialist more room for technical SEO, and may rank higher for it. The work matters more than the platform, though. The first site I built for Pilotech, an HVAC installer near Paris, was on Squarespace, and **it ranks first or second on Google** with the basics done right: the right keywords and careful metadata. The {{< a page="/projects/pilotech" >}}Pilotech project page{{< /a >}} shows its sites.

If your WordPress site has been hacked, deal with that first. The import copies the content of your posts as it is, so spam links an attacker slipped into them would come across too. Follow my checklist for a {{< a key="wordpress-site-hacked" >}}hacked WordPress site{{< /a >}} before you export anything.

## What moves from WordPress to Squarespace, and what stays behind

Squarespace's import reads the .xml file that WordPress exports. According to [Squarespace's WordPress import guide](https://support.squarespace.com/hc/en-us/articles/206543957-Importing-content-from-WordPress-Blogger-or-Tumblr), this is what comes across:

| Content | Imported? | What to do |
|---|---|---|
| Pages and blog posts | Yes | Check the layout of each one |
| Authors, categories, tags and comments | Yes (very long tags and categories are cut short) | Tidy them up |
| Images attached to pages and posts | Yes | Check their alt text |
| Media Library images not attached to anything | No | Download the Media Library before you start |
| Galleries and image captions | No | Rebuild them with Squarespace blocks |
| Plugin content: forms, sliders, page builder layouts, SEO titles and descriptions | No | Rebuild the features and paste the SEO text back (step 6) |
| Theme, design and CSS | No | Choose a template and rebuild the design |
| Your URLs | They change format | Keep or redirect them (step 5) |

The import is a one-time copy from a file, not a sync. Anything you publish on WordPress after the export has to be added by hand, so plan the move for a quiet period.

## Step 1: list every URL of your WordPress site

Before you change anything, build a spreadsheet of your old site while it is still online. Squarespace's help recommends it too, and every later step depends on it.

1. Open your WordPress sitemap at yourdomain.co.uk/wp-sitemap.xml, or /sitemap_index.xml if you use Yoast SEO or Rank Math. It lists your pages, posts, categories and tags.
2. In Google Search Console, open **Performance** > **Search results**, set the dates to the last 12 months, switch to the **Pages** tab and click **Export**. These are the addresses Google sends people to, so they come first.
3. Add any address printed on flyers, vans or business cards, or shared in emails and on social media.

Give the sheet five columns: old URL, SEO title, meta description, new URL and a box to tick once tested. Copy each title and description from your SEO plugin now, while you can still see them.

{{< screenshot id="wordpress-to-squarespace-01" alt="Search Console Performance report over the last 12 months on the Pages tab, with the Export button" >}}

## Step 2: back up WordPress and export your content

1. Make a full backup of the site, files and database, with your host's backup tool or a backup plugin. It is your way back if something goes wrong.
2. Download your whole **Media Library** (the wp-content/uploads folder, through your host's file manager or FTP). Images that are not attached to a page or post do not import, and Squarespace advises keeping a copy.
3. Deactivate your plugins, which can interfere with the import, according to Squarespace. Do it at a quiet hour and switch them back on once the file is saved.
4. Go to **Tools** > **Export**, select **All content** and click **Download Export File**. WordPress saves an .xml file to your computer.

If the file turns out too large to import, export by date range instead and import the files one at a time.

{{< screenshot id="wordpress-to-squarespace-02" alt="WordPress Export screen under Tools, with All content selected and the Download Export File button" >}}

{{< callout type="tip" >}}From the moment you export, **freeze the content**: no new posts or pages on WordPress until the move is finished. Anything added later will not be in the file, and it is easy to forget.{{< /callout >}}

## Step 3: import the file into Squarespace

Create your Squarespace site from a template. On version 7.1 you cannot switch templates later, but they all share the same features and style options, so pick a layout you like and restyle it. The 14-day trial is enough to build and test the site, and it stays private until you publish it. If you have never used the editor, my {{< a key="squarespace-tutorial" >}}Squarespace tutorial{{< /a >}} covers the basics.

1. In **Settings**, open the **Import & export** panel and click **Import**.
2. Choose **WordPress**.
3. Keep the **Standard WordPress** processor, unless your posts were written in Textile or Markdown.
4. Upload the .xml file and click **Import**.

When the import ends, open the **Pages** panel. Your pages and a blog page holding your posts sit in the **Not linked** section, disabled (refresh if you do not see them). Compare a dozen of them with the old site, starting with the ones at the top of your Search Console export, then enable the pages you keep and drag them into your navigation.

{{< screenshot id="wordpress-to-squarespace-03" alt="Squarespace Import & export panel with the WordPress import option" >}}

## Step 4: rebuild what the import leaves behind

The import gives you raw content inside a template. Go through the site and rebuild:

- **The design**: set the fonts, colours and buttons once for the whole site in **Site styles** (the paintbrush icon).
- **Galleries and captions**: recreate them with gallery and image blocks.
- **Forms, sliders, booking tools and anything else a plugin did**: replace them with Squarespace blocks or extensions, or let them go.
- **Links inside your posts**: they still point to the old addresses. Update the ones that matter most; the redirects in step 5 catch the rest.
- **Alt text**: check it on every image that came across.

Some features need a little code. I usually add some to the Squarespace sites I build, and clients call me for that part. I keep it to small additions, nothing destructive: a Squarespace site loaded with custom code is no longer easy for its owner to edit. Code injection is available from the Core plan upwards, not on Basic.

{{< screenshot id="wordpress-to-squarespace-04" alt="Squarespace Pages panel with the imported pages and the new blog page in the Not linked section" >}}

## Step 5: keep your URLs, or redirect them with 301s

This is the step that protects your rankings. When an old address returns an error, the page drops out of Google's results over time, and the links other sites gave it lead nowhere. A 301 redirect says the page has moved for good, and Google treats it as a strong signal that the new address replaces the old one.

### Keep the same slugs where you can

WordPress puts pages at addresses like /about-us/ and often puts posts at /post-name/. On Squarespace, pages sit at /about-us and posts sit under the blog page, at /blog/post-name. For each page, click the gear icon in the **Pages** panel and check the **URL slug** in the **General** tab: make it match the old one. Changing a page's title does not change its slug.

### Write the redirects in URL mappings

1. In **Settings**, open **Developer tools** > **URL mappings**.
2. Add one line per old address: old path, arrow, new path, then 301.
3. Put specific lines at the top and broad ones at the bottom: Squarespace reads the list from top to bottom, and a line higher up wins.
4. Click **Save**.

```
/about-us -> /about 301
/our-services/boiler-servicing -> /boiler-servicing 301
/category/news -> /blog 301
/[name] -> /blog/[name] 301
```

The last line is the rule [Squarespace's URL mappings guide](https://support.squarespace.com/hc/en-us/articles/205815308-URL-mappings) suggests for imported WordPress posts: the [name] variable sends every /post-name to /blog/post-name, as long as you keep the slugs the import gave them. Replace /blog with your blog page's slug if it differs. Because the rule matches any one-level address, it stays at the very bottom, below your page rules. If your posts had dates in their addresses (/2024/03/post-name/), it will not catch them: give each of those posts its own line.

### The limits to know

- A redirect only works once the old page no longer exists on Squarespace, so delete or disable any imported page you are redirecting away from.
- Most lines cannot contain `?`, `&` or `#`, so addresses such as `/?p=123` cannot be redirected.
- URL mappings cannot redirect image or file addresses, such as a PDF in /wp-content/uploads/. Upload important files again and update the links you control.
- Match the capitalisation of your old addresses; Squarespace slugs are lowercase by default.
- The field holds about 400 KB, roughly 2,500 lines: plenty for a small business site.

{{< screenshot id="wordpress-to-squarespace-05" alt="URL mappings panel in Squarespace's Developer tools, with 301 lines and the [name] rule at the bottom" >}}

{{< callout type="warning" >}}Save your URL mappings **before** you connect the domain. As soon as the domain points to Squarespace, every old address without a redirect returns a 404 error page, to your visitors and to Google.{{< /callout >}}

## Step 6: paste back your titles and meta descriptions

Your SEO plugin's titles and descriptions stayed in WordPress. Paste them back from your spreadsheet, page by page:

1. In the **Pages** panel, click the gear icon next to a page and open the **SEO** tab.
2. Fill in the **SEO title**, which falls back to the page title when empty, and the **SEO description**. Search engines cut descriptions at around 160 characters.
3. For blog posts, open each post's settings and use its **SEO** tab.
4. Check the site-wide title format, so the site name does not appear twice in titles you copied with it.

Improve them rather than copy them blindly: one main keyword per page, written for the person searching. On the sites I build, I do the metadata before connecting the domain, not after publication. My {{< a key="squarespace-seo" >}}Squarespace SEO tutorial{{< /a >}} covers the other settings worth checking.

{{< screenshot id="wordpress-to-squarespace-06" alt="SEO tab of a Squarespace page's settings, with the SEO title and SEO description fields filled in" >}}

## Step 7: connect your domain and publish

Choose a paid plan first: only paid sites can be public. When you change the DNS records, open the **Site availability** panel and choose **Public**: every site starts as private, a site-wide password keeps Google out, and the sitemap only loads once the site is public.

If your domain stays with its current registrar, connect it with DNS records:

1. In the **Domains** panel, choose to use a domain you already own and type it in.
2. Pick your registrar from the list, or **Other**.
3. Where your domain's DNS is managed (usually your registrar, sometimes your old web host), add the records Squarespace shows you (below).
4. Leave your MX records alone: they carry your email, not your website.

```
Type    Host                          Value
A       @                             198.185.159.144
A       @                             198.185.159.145
A       @                             198.49.23.144
A       @                             198.49.23.145
CNAME   www                           ext-cust.squarespace.com
CNAME   (code shown by Squarespace)   verify.squarespace.com
```

The connection usually takes 24 to 48 hours, sometimes up to 72. Keep the verification CNAME: without it, Squarespace unlinks the domain after 15 days. For GoDaddy, Namecheap and Network Solutions domains, Squarespace may suggest a nameserver connection instead. If your email or another service relies on custom records, choose the option to use DNS records in the connection window: Squarespace warns that a nameserver connection removes your CNAME records and can break email set up through DNS.

Domains managed at OVH can be tricky: the only problem I have had there was a dot missing at the end of a record. My step-by-step guides for {{< a key="namecheap-dns-squarespace" >}}Namecheap{{< /a >}} and {{< a key="ovh-dns-squarespace" >}}OVH{{< /a >}} show where each value goes. Keep your WordPress hosting until the domain shows **Connected** in Squarespace and the redirects are tested.

{{< screenshot id="wordpress-to-squarespace-07" alt="Squarespace Domains panel listing the DNS records to add for a domain registered elsewhere" >}}

## Step 8: tell Google and watch Search Console

If you keep the same domain, your Search Console property and its history carry on. One catch: if the property was verified with an HTML file or a meta tag on WordPress, often added by an SEO plugin, that proof leaves with the old site, and Search Console checks it regularly. Verify again before you lose access: Squarespace asks you to wait 48 hours after connecting the domain and to use a TXT record in your DNS.

1. Submit the new sitemap: open **Indexing** > **Sitemaps**, type sitemap.xml under **Add a new sitemap** and click **Submit**. A "Couldn't fetch" status can show for a day or two.
2. Paste your most important new addresses into **URL Inspection** and request indexing.
3. Test every old URL from your spreadsheet in a private window, exactly as it appeared on WordPress, final slash included. If one does not redirect, add a line for it.
4. Every week for the first month, open **Indexing** > **Pages**. Old addresses under **Page with redirect** are expected. Any old address under **Not found (404)** is a redirect you missed.
5. In **Performance**, compare clicks and positions with the weeks before the move, page by page.

Expect some movement. [Google's guide to site moves](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) warns that rankings can fluctuate during a move, and that it can take a few weeks or more before the new addresses replace the old ones in the results. It advises keeping redirects for at least a year, and for visitors' sake indefinitely if you can. On Squarespace they cost nothing, so there is no reason to remove them.

{{< screenshot id="wordpress-to-squarespace-08" alt="Search Console Page indexing report, with old WordPress addresses listed under Not found (404)" >}}

## Your WordPress to Squarespace checklist, and when to hand it over

Before you call the move finished, check every line:

1. A spreadsheet lists every old URL with its title and description.
2. The backup and the Media Library are saved away from the server.
3. The .xml file is imported, the pages are checked against the old site and moved out of Not linked.
4. Design, galleries, forms and links inside posts are rebuilt.
5. Every old URL keeps its slug, is caught by the [name] rule, or has its own line above that rule in URL mappings.
6. SEO titles and descriptions are pasted back, and improved.
7. The site is Public, the domain shows Connected, and your email still works.
8. The sitemap is submitted, the old URLs are tested, and the Pages report gets a weekly look for a month.

You do not need me for a ten-page brochure site with a small blog: this checklist is enough. Get help if the site has hundreds of URLs, a WooCommerce shop (products are not on the import list), several languages, or a hack nobody has cleaned up. In those cases, the redirect map and the clean-up are where rankings are kept or lost.
