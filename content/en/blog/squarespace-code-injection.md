---
title: "Squarespace code injection: how to add custom code without breaking your site"
seo_title: "Squarespace code injection: add custom code safely"
description: "Squarespace code injection, step by step: where to find it, what goes in the header, footer or one page, which plans include it and how to undo a mistake."
slug: "squarespace-code-injection"
translationKey: "squarespace-code-injection"
date: 2026-10-17T08:22:00+02:00
lastmod: 2026-10-17T08:22:00+02:00
category: "websites"
article_type: "tutorial"
keywords: ["Squarespace code injection", "Squarespace custom code", "add code to Squarespace", "Squarespace header code injection", "Squarespace code block", "Squarespace custom CSS"]
summary: "Squarespace code injection lets you paste HTML and scripts into the header or footer of every page, or into the header of one page; on a version 7.1 site it sits under Custom Code at the bottom of the Pages panel. It needs the Core, Plus or Advanced plan (or some legacy plans), not Basic. Paste only code from sources you trust, label each snippet, test it on the live site, and use safe mode if a snippet breaks the editor."
cover: "squarespace-code-injection"
cover_alt: "Terminal window labelled Squarespace </> with lines of code"
related: ["squarespace-tutorial", "microsoft-clarity-tutorial", "schema-markup-small-business", "youcanbookme-tutorial", "squarespace-vs-wordpress"]
services: ["websites"]
faq:
  - q: "Does code injection slow down a Squarespace site?"
    a: "It can. Every script adds work for the visitor's browser: one or two tags from well-known tools rarely make a visible difference, but a pile of widgets will. Run your main pages through PageSpeed Insights before and after you add code, and compare."
  - q: "Will Squarespace support fix my custom code?"
    a: "No. Squarespace's help centre says it does not provide support for code-based modifications. For a tool's tracking code or widget, ask that tool's support; for code someone wrote for you, ask the person who wrote it."
  - q: "Where is code injection on Squarespace 7.0?"
    a: "In the Pages panel, as on 7.1: under Custom Code, below the Not linked section, or under Website Tools if your panel still shows the older layout. The header, footer and page header fields do the same job as on version 7.1."
  - q: "Do I need code injection to verify my site in Google Search Console?"
    a: "No. Squarespace's own guide has you add Google's TXT record in your domain's DNS settings, and the HTML file method is not supported. Verification does not work on trial sites, so publish on a paid plan first."
---

Squarespace code injection is the setting that lets you paste code where the page editor cannot reach: into the `<head>` of every page, at the very end of every page, or into the header of a single page. It is how you install a tracking tag such as Microsoft Clarity, add structured data for search engines, or load the script a chat tool gives you.

I usually add some code to the Squarespace sites I build for clients. Nothing destructive: they edit their own pages, and they call me for that part. This tutorial walks you through it, from choosing where each kind of code goes to testing it and undoing a snippet that breaks something.

You need the Core plan or above. Menu names are those of the English interface on a version 7.1 site, as Squarespace's help centre gives them in October 2026; Squarespace moves them from time to time. If your site is not built yet, start with my {{< a key="squarespace-tutorial" >}}Squarespace tutorial{{< /a >}}; for the wider picture, see my {{< a key="small-business-website-guide" >}}guide to small business websites{{< /a >}}.

## What Squarespace code injection is, and where code can go

Code injection is a set of fields where you paste HTML or scripts that Squarespace then adds to your pages. It is one of three ways to add code to a Squarespace site, and choosing the right one is half the job:

| Where | What it affects | Typical use |
|---|---|---|
| Code Injection, **Header** | The `<head>` of every page | Analytics and heatmap tags, verification tags |
| Code Injection, **Footer** | Every page, just before the closing `</body>` tag | Chat widgets, scripts a tool asks you to load last |
| Code Injection, **Lock Page** and order fields | Your password page (above the password field) and, for online shops, the order confirmation and order status pages | A message on the password page, conversion tracking after a purchase |
| **Page Header Code Injection** | The `<head>` of one page | Structured data for that page, a script only one page needs |
| **Code Block** | One spot inside a page | A booking calendar, an embedded form, a map |
| **Custom CSS** | The styles of the whole site | Visual changes that Site Styles cannot make |

Code injection is mostly for code that works in the background. When you want something visible at a chosen spot on a page, use a Code Block.

## Which Squarespace plans include code injection

Squarespace calls code injection a premium feature. It is included on the Core, Plus and Advanced plans and on some legacy plans, but not on Basic, according to [Squarespace's code injection guide](https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection). Basic has a second limit: Code Blocks will not run scripts or iframes, which rules out most embedded widgets.

At the time of writing (October 2026), UK pricing guides list Core at £17 a month on annual billing, against £12 for Basic. On the US site, the July 2026 price rise took Core to $29 and Basic to $19 a month on annual billing; none of those UK guides reports the same rise in pounds yet, so check the [official pricing page](https://www.squarespace.com/pricing) before you upgrade.

If you would rather stay on Basic, check whether you need code at all: a button linking to your booking page works on every plan, and a Code Block on Basic still shows plain HTML and CSS.

## Before you paste anything: four checks

A snippet in the Header or Footer field runs on every page, for every visitor, with the same rights as Squarespace's own code: it can change what people see and read what they type into forms. Run four checks first:

1. **Is the source official?** Copy code from the tool's own dashboard or documentation, never from a forum post whose code you do not understand. If a tool gives you bare JavaScript, wrap it in `<script>` tags yourself: the fields expect valid HTML or scripts.
2. **Is it already installed?** A tag added twice, once by hand and once through an integration, can count every visit twice.
3. **Does it need consent?** Tags that set cookies or record visits may need the visitor's agreement first. Microsoft Clarity, for instance, has required a consent signal for visitors from the UK, the EEA and Switzerland since 31 October 2025.
4. **Where will you note it?** Keep one document that lists every snippet: what it does, where it sits, who added it and when. It turns "something broke" into a quick fix, and it is what you hand over if someone else takes on the site.

{{< callout type="warning" >}}Never paste code that someone sends you to "fix" your site unless you know what it does. Injected code does not show in the page editor, which makes it the easiest place to hide a script that redirects visitors or copies what they type.{{< /callout >}}

## Step 1: open the Code Injection panel

1. In the main menu, click **Website** to open the **Pages** panel.
2. Scroll to the bottom, below your pages and the **Not linked** section, and click **Custom Code**.
3. Click **Code Injection**. The panel shows one field per area: **Header**, **Footer**, **Lock Page** and, if you sell online, the order page fields.

Older guides may send you to Website Tools or to Settings > Advanced instead: Squarespace has moved this panel more than once, but the fields inside do the same job.

{{< screenshot id="squarespace-code-injection-01" alt="Squarespace Pages panel scrolled to the bottom, with the Custom Code section and its Code Injection option" >}}

## Step 2: add a tracking tag to every page (Microsoft Clarity)

Microsoft Clarity, a free heatmap and session recording tool, makes a good first snippet: one tag in the header and nothing visible on the page. I use it to see where visitors engage, whether they came for something specific and which parts make them leave, so I know whether the copy, a picture or the layout needs fixing. My {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity tutorial{{< /a >}} covers the account and the reports.

1. In Clarity, copy your project's code with **Get tracking code**.
2. In the **Header** field, type a start comment, paste the code under it exactly as given, then add an end comment:

```html
<!-- START Microsoft Clarity | added 17 Oct 2026 | heatmaps and recordings -->
(the code copied from Clarity, unchanged: it already includes its <script> tags)
<!-- END Microsoft Clarity -->
```

3. Click **Save**. From then on, the tag runs on every page of your published site.
4. Connect it to your cookie banner, so that each visitor's choice reaches Clarity. The Clarity tutorial shows how.

{{< callout type="tip" >}}**Label every snippet with START and END comments**, plus the date and its purpose. HTML comments do not show on the page, and six months later they tell you exactly what to delete.{{< /callout >}}

{{< screenshot id="squarespace-code-injection-02" alt="Squarespace Code Injection panel with the Microsoft Clarity code between START and END comments in the Header field" >}}

### Header or footer?

Follow the tool's instructions: "in the head" means **Header**, "before the closing body tag" means **Footer**. With no instruction, analytics and verification tags go in the header, where they load before the content, and widgets that can wait, such as a chat button, go in the footer, where they do not hold up the content above them.

## Step 3: add code to a single page (structured data)

Some code belongs on one page only: structured data describing your business on the contact page, for example, or a conversion tag on a thank-you page.

1. In the **Pages** panel, hover over the page and click its gear icon.
2. Open the **Advanced** tab.
3. Paste your code into **Page Header Code Injection**, then save.

Squarespace advises against HTML in this field, because it can disappear if you turn off the header's transparency. Keep it for scripts, which is what structured data is: a block of JSON-LD inside a `<script>` tag. Here is a minimal example for a local business, to adapt with your own details:

```html
<!-- START structured data: LocalBusiness | added 17 Oct 2026 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Your Business Name",
  "url": "https://www.example.com",
  "telephone": "+44 117 XXX XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 High Street",
    "addressLocality": "Bristol",
    "postalCode": "BS1 XXX",
    "addressCountry": "GB"
  }
}
</script>
<!-- END structured data -->
```

Run the page through Google's [Rich Results Test](https://search.google.com/test/rich-results) before you add it, to see what the page already contains, and again afterwards to check for errors. The details must match what the page shows: same name, address and phone number. Which types are still worth adding in 2026 is covered in my guide to {{< a key="schema-markup-small-business" >}}schema markup for small businesses{{< /a >}}.

{{< screenshot id="squarespace-code-injection-03" alt="Squarespace page settings, Advanced tab, with structured data pasted into the Page Header Code Injection field" >}}

## Step 4: embed a widget inside a page (YouCanBookMe)

When code must show something at a precise spot, such as a booking calendar on your contact page, use a Code Block rather than code injection. For bookings I prefer YouCanBookMe to Calendly: it has the features I need, it is easy to find your way around, and it costs a bit less, though Calendly is good too.

1. In YouCanBookMe, copy the embed code from your booking page's sharing options; my {{< a key="youcanbookme-tutorial" >}}YouCanBookMe tutorial{{< /a >}} shows where.
2. Open the page in the Squarespace editor and add a **Code** block where the calendar should appear.
3. Paste the embed code into the block, then save and exit the editor.
4. Open the live page on a computer and on a phone, and make a test booking.

{{< screenshot id="squarespace-code-injection-04" alt="Squarespace page editor with a Code Block holding a YouCanBookMe booking embed on a contact page" >}}

## Step 5: put CSS in the Custom CSS panel

CSS changes how things look: spacing, sizes, a colour that Site Styles does not offer. Squarespace recommends its Custom CSS editor for this rather than code injection. Check **Site Styles** (the paintbrush icon) first, though: fonts, colours and buttons are set there without code, and anyone can change them later.

1. In the **Pages** panel, click **Custom Code**, then **Custom CSS**.
2. Write each rule with a comment above it:

```css
/* START underline links in body text | added 17 Oct 2026 */
p a {
  text-decoration: underline;
}
/* END underline links */
```

3. Save, then check several pages: a rule written for one block can change every page.

Keep this panel short. A rule in Custom CSS can override Site Styles, so every rule you add makes that panel a little less reliable for whoever edits the site next.

{{< screenshot id="squarespace-code-injection-05" alt="Squarespace Custom CSS editor with one short rule between START and END comments" >}}

## Step 6: test the change on the live site

Test where your visitors are, not in the editor:

1. Open the site in a private browser window, logged out, so you see what a visitor sees.
2. Check each page you changed on a computer and on a phone.
3. Open the browser's developer tools (F12 on Windows, Cmd+Option+I on a Mac). The **Console** tab lists script errors in red; the **Network** tab shows whether a tag sends data (type `collect` in the filter for Clarity).
4. Check the tool's own side: a visit in Clarity, a test booking in YouCanBookMe, a clean result in the Rich Results Test.
5. Add the snippet to your log, with the date.

Change one thing at a time, so you always know which snippet caused what.

{{< screenshot id="squarespace-code-injection-06" alt="Live Squarespace page in a private window with the browser developer tools open on the Console tab" >}}

## If your code breaks the site: use safe mode

A faulty snippet usually shows itself in one of three ways: part of a page disappears, the layout jumps, or the editor stops working properly. Squarespace's help pages say that custom code can stop you from editing your site securely, and that switching it off while you edit does not change what visitors see ([fix site editing issues](https://support.squarespace.com/hc/en-us/articles/228363808-Fix-site-editing-issues)). Safe mode does exactly that:

1. Log in, then change the address in your browser from `yoursite.com/config` to `yoursite.com/config/safe`. Custom code and scripts are now switched off in the editor.
2. Open the field you changed last and delete the snippet, everything between its START and END comments. Click **Save**.
3. Leave safe mode by switching scripts back on in the preview, or by opening `yoursite.com/config` again without `/safe`.
4. Test the live site again in a private window.

{{< callout type="warning" >}}Safe mode only changes what you see while editing. **Your visitors get the broken code until you delete it and save.**{{< /callout >}}

{{< screenshot id="squarespace-code-injection-07" alt="Squarespace editor opened through the /config/safe address, with custom scripts switched off" >}}

## How much custom code is too much?

Squarespace's main advantage is that you, or your client, can change a word without the whole structure falling apart. That is why I move owners who edit their own site onto it. Load it with custom code and you lose that advantage: the more code there is, the more an ordinary edit can break something you cannot see, and the sooner a simple change needs a developer.

It helps to sort code into two piles:

- **Additions that sit beside the content**: a tracking tag, structured data, a booking widget, a small style fix. This is the "nothing destructive" kind: it stays out of the way of what you edit yourself.
- **Rebuilds of what Squarespace already does**: a menu rewritten in JavaScript, every block restyled in CSS. A site that needs many of these is on the wrong platform, and my comparison of {{< a key="squarespace-vs-wordpress" >}}Squarespace vs WordPress{{< /a >}} covers the alternatives.

The same goes for a website you build for a friend or a relative. A website is not a one-off gift, since it needs maintenance, but a Squarespace site without heavy custom code is the easiest kind for them to keep editing on their own.

You do not need custom code to rank, either. Squarespace is closed, with no access to the source code, which is why custom-coded, WordPress or Webflow sites might rank higher. Yet the Squarespace site I built for Pilotech ranks first or second on Google (my {{< a key="pilotech-seo-case-study" >}}SEO case study{{< /a >}} tells that story): do the SEO right, with careful metadata and the right keywords, and the odds are on your side. My {{< a key="squarespace-seo" >}}Squarespace SEO tutorial{{< /a >}} lists those settings.

## Your code injection checklist, and when to hand it over

Before you call a snippet done, check each line:

- **Plan**: Core, Plus or Advanced.
- **Source**: copied from the tool's own dashboard or documentation.
- **Place**: Header for site-wide tags, Footer for scripts that can wait, Page Header Code Injection for one page, a Code Block for anything visible, Custom CSS for styles.
- **Labels**: START and END comments, with the date and the purpose.
- **Consent**: tracking tags connected to your cookie banner.
- **Test**: private window, phone, Console, Network and the tool's own dashboard.
- **Log**: one document listing every snippet.
- **Clean-up**: when you stop using a tool, remove its code the same day.

Copying a tag from a tool's dashboard is a job you can do yourself, and I would rather you did. Writing code is a different job. If what you want needs code written for you, if you cannot tell what a snippet does, or if the site brings in most of your enquiries and an afternoon of broken pages would cost you, ask someone who reads code, and ask them to leave START and END comments behind. On the Squarespace sites I build, that is exactly the part clients call me for.
