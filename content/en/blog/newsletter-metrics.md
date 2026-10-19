---
title: "Newsletter metrics: why open rates lie and what to track instead"
seo_title: "Newsletter open rate: why it lies and what to track instead"
description: "Why your newsletter open rate counts machines as readers since Apple Mail Privacy Protection, and the metrics to track instead: clicks, replies and sales."
slug: "newsletter-open-rate"
translationKey: "newsletter-metrics"
date: 2026-10-18T23:30:00+02:00
lastmod: 2026-10-18T23:30:00+02:00
category: "funnels"
article_type: "guide"
keywords: ["newsletter open rate", "newsletter metrics", "email click rate", "Apple Mail Privacy Protection", "good newsletter open rate", "email tracking pixel"]
summary: "A newsletter open rate counts the emails that loaded a tiny tracking image, not the people who read them: Apple Mail loads that image for unread emails, security filters open and click on their own, and blocked images hide real readers. Judge each issue on clicks, replies, conversions tracked with UTM links in GA4, unsubscribes and spam complaints, and keep opens as a rough trend line."
cover: "newsletter-metrics"
cover_alt: "The article title in white on a ribbed-glass panel over a photo, with a rising line chart"
related: ["newsletter-deliverability", "utm-ga4-funnel-tracking", "welcome-email-sequence", "b2b-newsletter-ideas", "funnels-newsletters-guide"]
services: ["automation"]
faq:
  - q: "Why is my newsletter open rate higher than the benchmarks?"
    a: "Often because more of your subscribers read in Apple Mail with Mail Privacy Protection on, or use work addresses behind security filters: both record opens without a reader. Compare your click rate with the benchmarks instead, as it is far less affected."
  - q: "Do plain-text newsletters track opens?"
    a: "No. Open tracking needs an image, and a plain-text email has none, so it records no opens. Links tagged with UTM parameters still show visits and key events in GA4, and replies need no tracking at all."
  - q: "What counts as a delivered email?"
    a: "An email the receiving server accepted: the emails you sent minus the bounces. Delivered does not mean inbox, since a delivered email can still land in the spam folder, which your newsletter report does not show."
  - q: "Is the click rate the same as the click-through rate?"
    a: "Tools do not all use the same words. Brevo, for instance, calls the share of recipients who clicked at least one link its click-through rate, while some reports divide clicks by opens. Check your tool's definition before comparing yourself with a benchmark."
---

Your newsletter open rate looks healthy, yet the bookings do not follow. That gap is real. The figure counts how many emails loaded a tiny image, and since 2021 some of those loads have come from Apple's servers and from security filters rather than from people.

This guide explains how an open is counted, the three ways the open rate goes wrong, and what I would track in its place: clicks, replies, conversions, unsubscribes, spam complaints and list growth. It is part of my {{< a key="funnels-newsletters-guide" >}}guide to sales funnels and newsletters{{< /a >}}.

The short version: keep opens as a rough trend line, and judge each issue on what readers do after reading it.

## How a newsletter open rate is measured

Your newsletter tool adds a tracking pixel to every HTML email: an invisible image, one pixel wide, whose address is unique to each recipient. When an email program downloads that image, the tool records an open for that person.

The open rate is unique opens divided by delivered emails: 300 opens on 1,000 delivered emails gives 30%. The whole calculation rests on one assumption: the image loads when a person reads the email, and only then.

A plain-text email carries no image, so it records no opens at all. A newsletter is usually HTML, which brings the pixel back, along with its blind spots.

## Why open rates lie: three distortions

### Apple Mail opens emails nobody has read

Apple introduced Mail Privacy Protection with iOS 15 in 2021. When it is on, Apple Mail downloads remote content, tracking pixels included, in the background, whether or not the person opens the email, and it hides their IP address. Apple's [guide to the feature](https://support.apple.com/guide/iphone/use-mail-privacy-protection-iphf084865c7/ios) says it prevents senders from seeing whether you opened their message.

So subscribers who use Apple Mail with the feature on can show as opens whether they read or not, and the open times and locations your tool reports for them tell you nothing about the reader. The feature belongs to Apple's Mail app: someone reading on an iPhone in the Gmail app is counted the old way.

### Blocked images hide real readers

The opposite happens too. Some email programs and company mail systems do not load images until the reader allows it, and some people switch images off for good. They can read your newsletter from top to bottom and never count as an open.

### Security filters open and click before your reader does

Many work mailboxes sit behind security filters that fetch images and follow links to check them before the email reaches the inbox, and link previews do something similar. Mailchimp's help centre names anti-spam security, Apple's feature and link previews as the usual sources of this bot activity, and notes that a bot's click is also recorded as an open.

The tell-tale sign is a subscriber who opens and clicks several times within the same few seconds, often on every link of the issue. If most of your subscribers use work addresses, look for this pattern first.

| Distortion | Effect on opens | Effect on clicks |
|---|---|---|
| Apple Mail Privacy Protection | Inflated: unread emails count as opened | None |
| Blocked images | Deflated: real readers are missed | None |
| Security filters and link previews | Inflated | Inflated, unless your tool filters bots |

## What is a good newsletter open rate?

There is no fixed answer, and two benchmarks covering the same year show why. [MailerLite's 2025 benchmarks](https://www.mailerlite.com/blog/compare-your-email-performance-metrics-industry-benchmarks), across 3.6 million campaigns, give an average open rate of 43.46% and an average click rate of 2.09%. [Brevo's benchmarks](https://www.brevo.com/blog/email-marketing-benchmarks/), from more than 175,000 customers in 2025, leave Apple's automatic opens out and give 20.73% opens and 2.27% clicks.

The two customer bases differ, so the comparison is rough. Still, one open rate is about double the other while the click rates sit within 0.2 points of each other: that is the argument of this article in four numbers.

Click rates also vary by sector, from 0.83% to 4.90% depending on the industry in MailerLite's data. **The benchmark that matters most is your own**: note your click rate over your last six issues and compare each new issue with it.

## What to track instead

These are the figures I would put on a newsletter report, most useful first.

| Metric | How to work it out | What it tells you |
|---|---|---|
| Click rate | Unique clickers ÷ delivered emails | Whether the issue made people want something |
| Replies | Replies received per issue | Whether readers trust you enough to write back |
| Conversions | Booked calls, quote requests or sales from email visits | Whether the newsletter brings business |
| Unsubscribe rate | Unsubscribes ÷ delivered emails | Whether the topic or the frequency still fits |
| Spam complaint rate | Complaints ÷ delivered emails | Whether people feel they never asked for it |
| Net list growth | New subscribers minus unsubscribes, bounces and complaints | Whether the list is growing or shrinking |

{{< callout type="tip" >}}If you only track one figure, track **conversions from email visits**: booked calls, quote requests or sales. The other metrics help you explain that number.{{< /callout >}}

### Click rate, on delivered emails

Use unique clickers divided by delivered emails. Avoid the click-to-open rate (clicks divided by opens): it inherits every flaw of the open. If your tool offers bot filtering, switch it on before you compare issues. Mailchimp warns that opens and clicks drop significantly once it is on, which is rather the point.

An issue built around one clear link gives you a cleaner reading, and my {{< a key="b2b-newsletter-ideas" >}}ideas for a B2B newsletter{{< /a >}} will help you find things worth clicking.

### Replies

For a small team selling a service, a reply is worth more than a click: it is the start of a conversation. End an issue with a real question and count the answers. Replies land in your inbox rather than in the newsletter report, so keep a tally per issue.

### Conversions: booked calls and sales

Add UTM parameters to every link in an issue, so that GA4 can tell newsletter visits apart:

```
https://example.com/audit/?utm_source=newsletter&utm_medium=email&utm_campaign=2026-10
```

Then mark the booking confirmation or thank-you page as a key event (what GA4 used to call a conversion). From then on, "how many calls did October's issues bring?" has an answer. My {{< a key="utm-ga4-funnel-tracking" >}}step-by-step guide to UTM links and GA4{{< /a >}} covers the setup.

### Unsubscribes and spam complaints

An unsubscribe is a polite no; a spam complaint is a loud one, and it hurts your deliverability. Gmail wants the spam rate shown in Google Postmaster Tools below 0.1%, one complaint per 1,000 emails, and never at 0.3% or higher. On a small list, Postmaster Tools may show no data on quiet days, so read it over the month. My guide to the {{< a key="newsletter-deliverability" >}}Gmail, Yahoo and Outlook sender rules{{< /a >}} explains the rest.

Read unsubscribes issue by issue rather than as an average: a spike after one issue tells you what that issue did differently.

### List growth and churn

Net growth is new subscribers minus the people who left (unsubscribes, hard bounces and complaints) over a month. Churn is those losses divided by the list size at the start of the month. If people leave in their first weeks, look at your {{< a key="welcome-email-sequence" >}}welcome sequence{{< /a >}} before anything else.

## A/B test subject lines on clicks, not opens

A subject line test judged on opens is now partly a test of noise. Machine opens land on both versions whatever the subject line says, so the gap between them shrinks and the winner can be chance. Judge tests on clicks, or better, on replies and conversions. If your tool picks the winner automatically, check which metric it uses.

On a list of a few hundred people, one test proves little: run the same comparison over several issues before you change your habits. That is how I run cold email tests for clients. The emails are plain text with a phone number and no links, so there are no opens or clicks to count, and versions are compared on replies and calls. Over the weeks, the copy that gets answers wins.

## Engagement segments: who is really reading

Opens are also a poor way to find inactive subscribers. Apple Mail users look active for ever, and image blockers look inactive while they read every issue. Build segments on clicks and replies instead. For a weekly newsletter, for example:

- **Engaged**: clicked or replied in the last 90 days.
- **Quiet**: no click for 90 days, but at least one in the last six months.
- **Inactive**: no click for six months.

Double the windows for a monthly newsletter. Send the inactive segment one short email asking whether they still want to hear from you, and remove those who do not click to stay. A smaller list that clicks is worth more than a big one that only opens.

## Tracking pixels and consent in the UK and France

The pixel behind every open is also a privacy question. The ICO's guidance on email marketing says the PECR rules on marketing emails apply to the email itself, while tracking pixels fall under the separate rules on storage and access technologies, regulation 6 of PECR: if your newsletter contains a pixel, you must comply with both ([ICO guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/what-else-do-we-need-to-consider/)). That means clear information and consent of the UK GDPR standard unless an exception applies, and the ICO says these rules apply to every type of subscriber, companies included. The Data (Use and Access) Act 2025 lets the government add exceptions, so this is the position as of 19 October 2026.

In France, the CNIL adopted a recommendation on email tracking pixels on 12 March 2026 and published it on 14 April 2026. Its reading of article 82 of the French Data Protection Act is that tracking opens for marketing needs the recipient's prior consent, separate from their agreement to receive the newsletter, business addresses included, with narrow exemptions such as security and measuring deliverability. If part of your list is in France, read it before your next send.

Since this article argues for judging a newsletter on what readers do, switching open tracking off, or asking for consent to it, costs you little. My guide to {{< a key="newsletter-consent-gdpr" >}}newsletter consent{{< /a >}} covers the sign-up side. This is general information, not legal advice: if your list is large, or you combine email data with advertising, an hour with a privacy lawyer or a DPO is money well spent.

## Your monthly newsletter report: a checklist

Once a month, with bot filtering on if your tool has it:

1. Note delivered emails, unique clicks, unsubscribes and complaints for each issue of the month.
2. Count the replies each issue received.
3. In GA4, look at sessions with the medium "email" and the key events they led to: booked calls, quote requests, sales.
4. Check the spam rate in Postmaster Tools.
5. Work out net list growth and churn.
6. Decide one thing to keep, change or drop next month.

If the report starts taking longer than writing the issue, it is worth automating the collection into one spreadsheet or dashboard, so that the figures are waiting for you instead of the other way round.
