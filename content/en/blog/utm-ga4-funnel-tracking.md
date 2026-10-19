---
title: "Track your funnel with UTM links and GA4: see which channel brings booked calls"
seo_title: "UTM parameters in GA4: track which channel books calls"
description: "How to use UTM parameters in GA4 to see which channel brings booked calls: a naming plan, Google's URL builder, a key event and the reports to read."
slug: "utm-parameters-ga4"
translationKey: "utm-ga4-funnel-tracking"
date: 2026-10-18T23:36:00+02:00
lastmod: 2026-10-18T23:36:00+02:00
category: "funnels"
article_type: "tutorial"
keywords: ["UTM parameters GA4", "UTM tracking GA4", "GA4 key events", "GA4 funnel exploration", "track booked calls in GA4"]
summary: "Tag every link you control with utm_source, utm_medium and utm_campaign, in lower case and from one naming sheet, and send every booking to a thank-you page that GA4 counts as a key event. Traffic acquisition, set to session source / medium, then shows the booked calls each channel brings, and a funnel exploration shows where visitors drop out. Check both against your booking tool and a 'How did you find us?' question, because GA4 never sees every booking."
cover: "utm-ga4-funnel-tracking"
cover_alt: "The article title in white on a ribbed-glass panel over a photo of a rising line chart"
related: ["build-sales-funnel", "track-ai-traffic", "microsoft-clarity-tutorial", "newsletter-metrics", "cookie-banner-rules"]
services: ["automation"]
faq:
  - q: "Are UTM parameters case sensitive in GA4?"
    a: "The values are: GA4 lists utm_source=LinkedIn and utm_source=linkedin as two different sources. Its channel rules ignore case, so both still land in the same channel, but your source and campaign rows split in two. Write every value in lower case."
  - q: "Why do my campaigns show (not set) or Unassigned in GA4?"
    a: "(not set) means a parameter is missing, for example a link with a source and a medium but no campaign. Unassigned means GA4 found no channel rule for your medium: use values it recognises, such as email, social or referral."
  - q: "Can I see which channel brought a booking if my booking tool cannot redirect?"
    a: "Not directly in GA4. Count the bookings in the booking tool and add a required 'How did you find us?' question to the booking form. On YouCanBookMe, the redirect to your own page needs the Professional or Teams plan; on Calendly, a paid plan."
  - q: "How far back can a GA4 funnel exploration go?"
    a: "As far as your data retention setting: 2 or 14 months on a standard property. Standard reports such as Traffic acquisition are not affected. Choose 14 months in Admin so you can compare a month with the same month a year earlier."
  - q: "Do UTM links work in PDFs, QR codes and WhatsApp messages?"
    a: "Yes. The parameters travel with the link wherever it is clicked or scanned, so tag the links in your PDF brochure, the QR code on your flyer and the messages you send. Without a tag, those visits arrive with no referring site and land in Direct."
---

GA4 tells you how many people visit your site and roughly where they come from. Out of the box, it does not tell you which of those visits ended in a booked call. Three things fix that: UTM parameters on every link you control, a thank-you page after each booking, and a GA4 key event that counts it.

This tutorial sets up all three, then shows the two GA4 screens worth opening once a month: Traffic acquisition, to see which channel brings booked calls, and a funnel exploration, to see where everyone else gives up. I use YouCanBookMe for bookings, so the examples do too; Calendly works the same way.

It assumes GA4 is already on your site and that you can add a page to it. If the funnel itself is not built yet, start with my tutorial on {{< a key="build-sales-funnel" >}}building a funnel with the tools you already have{{< /a >}}. Both belong to my {{< a key="funnels-newsletters-guide" >}}complete guide to sales funnels and newsletters{{< /a >}}.

## How UTM parameters work in GA4

A UTM parameter is a label added to the end of a link that tells Google Analytics where the click came from. When someone lands on your site through that link, GA4 reads the labels and files the visit under them.

| Parameter | What it records | Example |
|---|---|---|
| `utm_source` | Where the link sits | `newsletter`, `linkedin` |
| `utm_medium` | The type of link | `email`, `social`, `referral` |
| `utm_campaign` | The message or offer | `2026-10-newsletter` |
| `utm_content` | Which link, when one message holds several | `header-button` |
| `utm_term` | The keyword, for paid search | Rarely needed |
| `utm_id` | A campaign ID, for imported campaign data | Rarely needed |

Google asks you to always set the first three ([Google's help page on campaign URLs](https://support.google.com/analytics/answer/10917952)). Leave one out and your reports show (not set) in its place.

GA4 then sorts each visit into a channel, mostly from the medium, with fixed rules: `email` goes to Email, `social` to Organic Social, `referral` to Referral ([Google's channel rules](https://support.google.com/analytics/answer/9756891)). A medium it has no rule for, such as `newsletter-link`, goes to **Unassigned**, the bin for visits GA4 cannot classify. Visits with neither a tag nor a referring site go to **Direct**, mixed with the people who typed your address.

## Step 1: write a naming plan before you tag anything

Most UTM problems are spelling problems. GA4 treats the values as case sensitive, so `LinkedIn` and `linkedin` become two sources, and a typo in a medium sends visits to Unassigned. Five rules prevent both:

1. **Lower case only**, everywhere.
2. **Hyphens instead of spaces**: a space turns into `%20` in the address and is easy to get wrong.
3. **Only mediums GA4 recognises**: `email`, `social`, `referral`.
4. **One campaign name per message or offer**, date first, so `2026-10-newsletter` sorts itself.
5. **Never tag links between your own pages.** The booking would be credited to your own tag instead of the channel that brought the visitor.

Write the plan down in a shared sheet, one line per link: where it sits, the values, the full link and the date you made it. A starting point for a service business:

| Where the link sits | utm_source | utm_medium | utm_campaign |
|---|---|---|---|
| Monthly newsletter | `newsletter` | `email` | `2026-10-newsletter` |
| Your email signature | `signature` | `email` | `always-on` |
| A LinkedIn post | `linkedin` | `social` | `2026-10-case-study` |
| Your Instagram profile | `instagram` | `social` | `always-on` |
| A guest article on another site | `site-name` | `referral` | `2026-10-guest-article` |

When you need a new link, copy a line instead of typing from memory. For a newsletter, tagged links also give you a figure worth more than the open rate: clicks that end in a booking, as my article on {{< a key="newsletter-metrics" >}}newsletter metrics{{< /a >}} explains.

## Step 2: build each link with Google's Campaign URL Builder

Google's free **Campaign URL Builder**, listed on the help page above, assembles the link for you, question mark and ampersands included.

1. In the website URL field, paste the address of the page you send people to: the page with your booking button, not the booking tool.
2. Fill in the source, medium and campaign name from your sheet. Add the content field only when one message holds several links to the same page.
3. Copy the generated link and open it in a private window. If the parameters disappear from the address bar once the page has loaded, a redirect on your site may be dropping them: link to the final address instead.
4. Paste the link into your sheet, then wherever it goes.

{{< screenshot id="utm-ga4-funnel-tracking-01" alt="Google's Campaign URL Builder with the source, medium and campaign name of a newsletter link filled in, and the generated link below" >}}

The result looks like this:

```
https://www.yourbusiness.co.uk/kitchen-design?utm_source=newsletter&utm_medium=email&utm_campaign=2026-10-newsletter&utm_content=header-button
```

On a flyer or a van, turn the tagged link into a QR code. In a social post, a short link that redirects to the full address keeps the tags.

## Step 3: send every booking to a thank-you page

GA4 cannot see inside your booking tool, only the pages of your site. So each booking has to end on one: a thank-you page that nobody reaches without booking. Keep it out of your menu and out of search results (the funnel tutorial linked above shows how in Squarespace). Then tell the booking tool to send people there:

- **YouCanBookMe**, which I prefer to Calendly because it does what Calendly does, is easy to find your way around and costs a little less, redirects bookers to your page on its Professional and Teams plans. The address must start with https, and if the calendar is embedded in your page, tick the option that updates the whole browser window, or only the embedded frame changes. My {{< a key="youcanbookme-tutorial" >}}YouCanBookMe tutorial{{< /a >}} covers the settings.
- **Calendly** offers the same redirect on its paid plans; the free plan keeps Calendly's own confirmation page.

{{< callout type="warning" >}}YouCanBookMe can add the booker's name and email to the redirect address. Leave those codes out: **Google Analytics' terms forbid sending it personal information**, and the address of the page is exactly what GA4 records.{{< /callout >}}

If your booking page opens on the booking tool's own domain rather than inside your site, watch for that domain as a referral source after your first test booking. If it appears, add it to the list of unwanted referrals in the Google tag settings of your web data stream, in **Admin**, so it stops taking the credit for your bookings.

## Step 4: count the thank-you page as a key event

GA4 calls the actions that matter **key events**; older tutorials call them conversions. To turn a visit to your thank-you page into one ([Google's help page on creating events](https://support.google.com/analytics/answer/12844695)):

1. Open **Admin** > **Data display** > **Events** and click **Create event**.
2. Name it `generate_lead`, the name Google recommends for a lead, and switch on **Mark as key event**.
3. Choose **Create without code**, pick `page_view` as the source event and add the address of your thank-you page as the condition.
4. Click **Create**. You need the Marketer role or above.

{{< screenshot id="utm-ga4-funnel-tracking-02" alt="GA4 Create event panel with page_view as the source event, the thank-you page address as the condition and Mark as key event switched on" >}}

Do not mark `page_view` itself, or every page view would count. Counting starts the day you create the event, so past bookings stay invisible. If you also have a contact form, give its thank-you page a second event with its own name, so calls and enquiries do not mix.

Then test the whole chain: open one of your tagged links in a private window, accept the analytics cookies, book a slot and check in GA4's real-time report that your visit shows its UTM source and that `generate_lead` appears. Cancel the test booking afterwards.

## Step 5: read which channel brings booked calls

Give it a few weeks of data, then:

1. In **Reports**, open **Traffic acquisition**, under **Acquisition** in most properties.
2. Choose a date range of at least 28 days. On a site with modest traffic, three months says more.
3. Click the title of the first column, which lists channels, and pick **Session source / medium**.
4. If you track several key events, select `generate_lead` in the drop-down at the top of the **Key events** column.
5. To compare campaigns, click the plus sign next to the first column's title and add **Session campaign** as a secondary dimension.

{{< screenshot id="utm-ga4-funnel-tracking-03" alt="GA4 Traffic acquisition report by session source / medium, with the key events column set to generate_lead" >}}

Read the key events first and the sessions second. A source with plenty of sessions and no bookings brings the wrong people, or sends them to the wrong page. A source with few sessions and a couple of bookings deserves more of your links.

GA4 credits a visit with no source of its own to the last channel that did bring that visitor. Someone who clicked your newsletter on Monday and typed your address on Thursday still counts for the newsletter, as long as they use the same browser. Visits from ChatGPT and other assistants now have a channel of their own, which my guide to {{< a key="track-ai-traffic" >}}tracking AI traffic in GA4{{< /a >}} explains.

## Step 6: find where visitors drop out with a funnel exploration

Traffic acquisition tells you which channel books. A funnel exploration tells you at which step everyone else stops ([Google's help page on funnel explorations](https://support.google.com/analytics/answer/9327974)).

1. Open **Explore** and pick the **Funnel exploration** template.
2. Edit the steps. Step 1: a `page_view` of the page with your booking button. Step 2: a `page_view` of your booking page, if it sits on your site. Step 3: `generate_lead`.
3. Keep the funnel closed to count only people who started at step 1, or make it open to include those who joined at a later step, such as visitors who went straight to the booking page.
4. Use **Device category** as the breakdown to compare phones with computers.
5. Switch on **Show elapsed time** to see how long people take between steps.

{{< screenshot id="utm-ga4-funnel-tracking-04" alt="GA4 funnel exploration with three steps, from the service page to the booking page to generate_lead, broken down by device category" >}}

Two quirks: a visitor who skips a step drops out of the later ones, and someone who books twice in the period counts once. Explorations also reach back only as far as your data retention setting, 2 or 14 months, while Traffic acquisition is not affected. Choose 14 months in **Admin** now: data that has already expired does not come back.

When most people stop at the same step, the funnel will not tell you why. That is when I open Microsoft Clarity: it shows where people engage and which parts make them leave, so you can see whether the copy, a picture or the layout is to blame. My {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity tutorial{{< /a >}} explains the setup.

## What GA4 will never show you, and how to fill the gaps

Even with perfect tags, GA4 sees only part of your bookings.

- **Visitors who refuse cookies.** In the EU, the cautious rule is to load GA4 only once the visitor accepts analytics cookies, and in basic consent mode GA4 receives nothing from those who refuse. The UK has allowed analytics used only for statistics without consent since February 2026, if you explain it and offer an easy way to object. This is not legal advice: my guide to {{< a key="cookie-banner-rules" >}}cookie banner rules{{< /a >}} sets out what the CNIL and the ICO expect as of 19 October 2026.
- **Leads that never click a link.** My own clients come from referrals first, then cold emails and SEO. A recommendation arrives as a phone call or a typed address, and the cold emails I write contain no links at all, only a phone number. GA4 sees the SEO visits and little of the rest.
- **Blocked or broken journeys**: browser extensions that block analytics, and people who find you on their phone and book from their computer.

So keep two counts next to GA4's:

1. **Your booking tool's total.** It records every booking, consent or not. The gap between that total and GA4's `generate_lead` count is the share of bookings GA4 cannot see.
2. **A required 'How did you find us?' question** on the booking form, with fixed choices: Google search, recommendation, LinkedIn, newsletter, AI assistant, other. Ask the same question on the phone.

When the counts disagree, trust the booking tool for the total, the question for referrals and calls, and GA4 for the channels it can see.

## Your monthly check, and when to hand it over

Fifteen minutes at the start of each month is enough:

1. Open Traffic acquisition for the previous month by session source / medium and note the bookings for each source.
2. Look for Unassigned and (not set) rows, find the links behind them in your sheet and fix them.
3. Put GA4's bookings next to the booking tool's total and the answers to 'How did you find us?'.
4. Open your funnel exploration: does the drop always happen at the same step?
5. Decide one thing: which channel gets more of your time next month, and which one stops.

That last step is the point of all this. A new channel is always tempting; these figures show which of the channels you already use deserve more effort.

You can run all of it yourself. It gets harder when leads arrive by form, booking, phone and email at once, and nobody can say who was called back. When {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, the air conditioning installer whose website and SEO I look after, received more prospects than the team could handle, I built them an internal app so that every prospect is seen and called back. If your leads are scattered like that, bring them into one place before you worry about attribution.
