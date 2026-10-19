---
title: "Website not getting enquiries? Where visitors drop off and how to fix it"
seo_title: "Website not getting enquiries? Find the leak, then fix it"
description: "Website not getting enquiries? Find where visitors drop off with free tools, then fix the usual leaks: a vague offer, a hidden phone number, a long form."
slug: "website-not-getting-enquiries"
translationKey: "website-conversion-rate"
date: 2026-10-17T08:23:00+02:00
lastmod: 2026-10-17T08:23:00+02:00
category: "websites"
article_type: "guide"
keywords: ["website not getting enquiries", "website conversion rate", "website not generating leads", "improve website conversion rate", "conversion rate optimisation"]
summary: "A website not getting enquiries is either short of the right visitors or losing them on the page: check your traffic in Search Console first, then watch real visits in a free tool such as Microsoft Clarity to see where people leave. The fixes that matter most are one clear offer per page, a phone number you can tap on every page, a short quote form, fast pages on mobile and an answer to every enquiry within the hour."
cover: "website-conversion-rate"
cover_alt: "A flow diagram of branching paths over a blurred figure behind ribbed glass, with the letters CRO"
related: ["microsoft-clarity-tutorial", "landing-page-vs-website", "professional-looking-website", "automate-lead-follow-up", "core-web-vitals-speed"]
services: ["websites"]
faq:
  - q: "What is a good conversion rate for a small business website?"
    a: "There is no single good figure: it depends on your trade, your prices and where your visitors come from. Compare each page with itself over time. A service page that gets regular visits and never an enquiry is the one to fix first."
  - q: "Should I redesign my website to get more enquiries?"
    a: "Not before you know where visitors leave. A redesign changes everything at once, so you cannot tell what worked. Fix the offer, the phone number and the form first, measure, and redesign only if the structure of the site is the problem."
  - q: "Does Google Analytics show why visitors leave?"
    a: "Not really. GA4 shows how many people visit each page, where they come from and which key events they complete, but not where they clicked or hesitated. A session recording tool such as Microsoft Clarity shows the behaviour behind those numbers."
  - q: "How long before changes bring more enquiries?"
    a: "A tappable phone number or a shorter form works from the next visit, but a small site may need a month or more of traffic before the difference shows in your numbers. Judge a change on several weeks of enquiries, not on one good day."
---

A website not getting enquiries has one of two problems. Either the right people never reach it, or they arrive, look around and leave before they find a reason, or an easy way, to contact you. The fixes are different, so find out which one you have before you spend anything on a new design.

When the visitors are there, the same few leaks turn up on most small business sites: an offer too broad to grasp at a glance, a phone number buried in the footer, a quote form that asks for everything, a page that crawls on a phone, and enquiries that wait a day for an answer. None of them needs a new website. My {{< a key="sales-funnel-explained" >}}sales funnel example for service businesses{{< /a >}} shows where they sit on the path from first visit to booked call.

This guide shows how to see where your visitors drop off, with free tools, then how to fix each leak. It is one chapter of my {{< a key="small-business-website-guide" >}}guide to small business websites{{< /a >}}.

## Traffic or conversion: find out which problem you have

Start with the numbers you already have. In Google Search Console, open **Performance** > **Search results**, then the **Pages** tab: by default, it shows how many clicks each page received from Google over the last three months.

If your service pages get a handful of clicks a month, you have a traffic problem, and no button will turn ten visits into twenty enquiries. Eden Flats, an Airbnb concierge in the Paris region, is a good example. Its previous website brought in no leads because its founder, busy running the business, had no time to learn how SEO works. Once the new site, the SEO and the visual branding were in place, property owners started calling to have their properties managed.

If your pages get regular visits and still no calls, you have a conversion problem, and the rest of this guide is for you. Your **conversion rate** is the share of visits that end in an enquiry: 4 enquiries from 400 visits is 1%.

Count calls as well as forms. A visitor who taps your phone number leaves no trace in your statistics unless you record it. In Google Analytics 4, record taps on your phone link as an event (in Google Tag Manager, a link-click trigger for links that start with `tel:` does this), then mark that event as a **key event**, the name GA4 now gives to what it used to call conversions: **Admin** > **Data display** > **Events** ([Google's help page](https://support.google.com/analytics/answer/13128484)). Marking is not retroactive, so the count starts on the day you do it. And ask every new caller how they found you. My tutorial on {{< a key="utm-ga4-funnel-tracking" >}}tracking your funnel with UTM links and GA4{{< /a >}} shows which channel brings booked calls.

## Why your website is not getting enquiries: the usual leaks

Once traffic is ruled out, the leak is usually one of these six. The middle column lists the signs to look for, most of which you will spot when you watch real visits, as the next section explains.

| Leak | Typical signs | First fix |
|---|---|---|
| The offer is vague or too broad | Visitors read the top of the home page, then leave | One page per service: what, for whom, where |
| The way to contact you is hidden | Long scrolling, clicks on text that is not a link | A phone number you can tap, on every page |
| The form asks too much | Visitors start the form, then give up | Fewer fields, and say what happens next |
| The page is slow or jumps on a phone | Short visits on mobile, repeated taps while it loads | Lighter images, fewer scripts |
| Nothing proves you are real | A visit to the About page, then an exit | Real reviews and photos of your own work |
| Enquiries wait for an answer | Enquiries arrive but rarely turn into clients | Instant alerts and a call back within the hour |

## Watch real visits before you change anything

Guessing is how small businesses end up paying for a redesign that changes nothing. I use Microsoft Clarity, which is free, to see where visitors engage most, whether they came for something specific, and which part of a page makes them leave. Then I can fix that part, whether the problem is the copy, a picture or the layout.

Start with three views:

- **The scroll heatmap** shows how far down the page most visitors get. If your phone number or quote button sits below that line, most people never see it.
- **The click heatmap** shows what people try to open. Clicks on a photo, a price or a heading that is not a link tell you what they were looking for.
- **Recordings** of visits that landed on a service page. Watch ten or twenty and the same hesitation will show up again and again.

Clarity also flags four frustration signals, and you can filter recordings by each: **rage clicks** (repeated clicks in one spot), **dead clicks** (clicks that get no response), **excessive scrolling** (scrolling faster than anyone reads, the sign of a lost visitor) and **quick backs** (a visitor opens a page and comes straight back).

One point for sites with visitors in the UK or Europe: since 31 October 2025, Clarity has needed a consent signal for visitors from the UK, the EEA and Switzerland. Without it, Clarity sets no cookies and features such as recordings may be limited, so connect it to your cookie banner ([Microsoft's consent guide](https://learn.microsoft.com/en-us/clarity/setup-and-installation/consent-management)). My {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity tutorial{{< /a >}} covers the installation, and my comparison of {{< a key="clarity-vs-hotjar" >}}Clarity vs Hotjar{{< /a >}} looks at the main alternative.

Then do what your visitors do: open your site on your phone, on mobile data rather than your office wifi, and try to contact yourself.

## Make one clear offer per page

The biggest leak I have seen was not a button. Of the five websites I have built for Pilotech's founder, one did not work at all: it offered too many services and was too broad. The one that ranks first or second on Google sells very specific services. His other company, Ginov, offered a long list of building trades, a catch-all, and it closed while Pilotech, with one specific offer, took off.

A visitor decides quickly whether a page is for them. The top of each service page should answer four questions without scrolling: what you do, for whom, where, and what to do next. "Plumbing, heating and electrical services" barely answers the first. "Boiler replacement for homes in Croydon, fixed quote after a free visit" answers three, and a phone number beside it answers the fourth.

If you run ads for one offer, send people to a page about that offer, not to your home page. My comparison of a {{< a key="landing-page-vs-website" >}}landing page vs a website{{< /a >}} explains when a separate page is worth it.

## Make calling you the easiest thing on the page

In Pilotech's cold email campaigns, many prospects, architects especially, called instead of replying. My explanation: a call is quicker and ticks the task off their to-do list, a written reply takes time and gets buried under other emails, and people like talking to a human. Your website's visitors are just as busy, so put the phone first.

On a phone, a number is only reliably tappable if it is a link. In HTML, that is a `tel:` link, with the number in international format (+44, without the first 0):

```html
<a href="tel:+44XXXXXXXXXX">0XXXX XXXXXX</a>
```

Most site builders let you link a button or a line of text to a phone number, or accept a `tel:` address typed into the link field. Then:

- **Show the number in the header of every page**, not only on the contact page.
- **Add a call bar on phones**: a call button that stays on screen while the visitor scrolls. On the {{< a page="/projects/eden-corporate-mobility" >}}Eden Corporate Mobility site{{< /a >}}, the call bar stays visible on phones, so an HR manager can call from any page, or describe the assignment in the form.
- **Put your opening hours next to the number**, and record a voicemail that says when you will call back.

## Shorten your quote form and make it specific

Every extra field is a reason to stop. For a first contact, you need a name, a phone number or an email address, and a line about the job. The rest can wait for the call.

Three details make a form work harder:

1. **Pre-fill the product or service for the visitor.** On the unified site I built for Pilotech, ready to go live, a quote request sent from a product sheet names the model, so the team knows what the call is about before it picks up the phone. The {{< a page="/projects/pilotech" >}}Pilotech project page{{< /a >}} shows how the site is organised.
2. **Say what happens next**, under the button: who calls back, and how soon.
3. **Show a thank-you page after sending.** It reassures the visitor and gives you something to count as a key event.

Then test the form yourself once a month: send an enquiry from your phone and check how long it takes to reach you, whether it lands in spam, and whether it goes to an address someone still reads.

## Speed and trust: the leaks you cannot see from your desk

### A slow page on a phone

Your site probably loads fast on your office computer. Many of your visitors are on a phone, on mobile data. Google's Core Web Vitals set the thresholds for a good experience, to be met on at least 75% of page loads: the main image or block of text appears within 2.5 seconds (LCP), the page responds to a tap or a click within 200 milliseconds (INP), and the layout stays stable, with a shift score of 0.1 or less (CLS). My guide to {{< a key="core-web-vitals-speed" >}}Core Web Vitals{{< /a >}} explains how to test and fix them. On small business sites, oversized photos and third-party widgets are the usual suspects.

### A site that does not look serious

Researchers found that people judge a web page's visual appeal in about 50 milliseconds ([Lindgaard et al., 2006](https://doi.org/10.1080/01449290500330448)). Before reading a word, visitors already have an impression of whether you look like a business worth calling.

I want my clients' prospects to be a little intimidated by their website. A site that looks serious gets taken seriously, and it cuts the haggling too: if someone does not think you are that respectable, they will not think you are worth that price. Proof helps a stranger trust you: real Google reviews (the portal I built for Pilotech has a carousel of them), photos of your own work where you have them, the towns you serve by name and full contact details. My guide on {{< a key="professional-looking-website" >}}how to make your website look professional{{< /a >}} goes further.

## Answer every enquiry within the hour

A form that works is wasted if the enquiry waits until tomorrow. A study published in Harvard Business Review in 2011, based on 1.25 million leads received by 42 US companies, found that firms that tried to contact a lead within an hour were nearly seven times as likely to qualify it as firms that tried even an hour later, and more than 60 times as likely as firms that waited 24 hours or more ([HBR](https://hbr.org/2011/03/the-short-life-of-online-sales-leads)). The figures are old, but the logic holds: someone who has just filled in your form may be filling in your competitors' forms too.

Pilotech showed me the other side of the problem. I bring Pilotech about ten prospects a day, and at one point there were more than the team could handle. The founder asked me to build an internal app to see everything clearly and never forget to call a prospect back or answer them.

You do not need a custom app to start. Three habits cover most of it:

- an instant alert on your phone for every new enquiry;
- one shared list of enquiries, each with a status: new, called, quote sent;
- a reminder when an enquiry has had no answer after an hour.

My tutorial on how to {{< a key="automate-lead-follow-up" >}}automate lead follow-up for free{{< /a >}} sets this up with Google Apps Script. To join the page, a booking page and your emails into one path, follow the steps in my guide to {{< a key="build-sales-funnel" >}}building a funnel with the tools you already have{{< /a >}}.

## Your next steps, in order

1. Check your traffic in Search Console. Too few visits: work on SEO before anything else.
2. Install Clarity, connected to your cookie banner, and let it collect a few weeks of visits.
3. Watch recordings of visits to your two or three busiest service pages.
4. Rewrite the top of each service page: what, for whom, where, what next.
5. Put a phone number you can tap on every page, and a call bar on phones.
6. Cut the form to the essentials and send yourself a test enquiry.
7. Test your pages on a phone, on mobile data.
8. Set up instant alerts and answer every enquiry within the hour.
9. Change one thing at a time, note the date, and compare enquiries month by month.

You can do most of this yourself: you do not need me for a phone link or a shorter form. If the leak turns out to be the offer itself or the structure of the site, or you would rather hand the whole diagnosis over, that is the kind of work I take on as a fixed-price project.
