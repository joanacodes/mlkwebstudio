---
title: "Build a funnel with the tools you already have: website, booking page and email"
seo_title: "How to build a sales funnel with the tools you already have"
description: "How to build a sales funnel with the tools you already have: one page, one button, a booking page, emails, one automation and GA4 tracking, step by step."
slug: "how-to-build-a-sales-funnel"
translationKey: "build-sales-funnel"
date: 2026-10-18T23:03:00+02:00
lastmod: 2026-10-18T23:03:00+02:00
category: "funnels"
article_type: "tutorial"
keywords: ["how to build a sales funnel", "build a sales funnel for free", "create a sales funnel", "simple sales funnel", "sales funnel without a funnel builder"]
summary: "To build a sales funnel with the tools you already have, give one page of your website a single call to action that leads to a booking page with two or three qualifying questions, and let the booking tool send the confirmation. Add a double opt-in sign-up form for people who are not ready, log every lead in one list, tag your links with UTM parameters, count enquiries as a GA4 key event and test the whole path on your phone."
cover: "build-sales-funnel"
cover_alt: "The article title in white on a ribbed-glass panel over a photo, with a funnel narrowing down to an orange dot"
related: ["sales-funnel-explained", "youcanbookme-tutorial", "utm-ga4-funnel-tracking", "automate-lead-follow-up", "newsletter-tools-comparison"]
services: ["websites"]
faq:
  - q: "Can I build a sales funnel for free?"
    a: "Yes, within the limits of free plans: one booking page on YouCanBookMe, a first list on Brevo or MailerLite, 100 tasks a month on Zapier, and Google Analytics. The first upgrades worth paying for are booking reminders and a redirect to your own thank-you page after a booking."
  - q: "What is the difference between a sales funnel and a landing page?"
    a: "A landing page is one step of the funnel: a page with one call to action. The funnel is the whole path, from the first visit to the booked call and the follow-up after it."
  - q: "How many steps should a sales funnel have?"
    a: "As few as the sale needs. For a service sold in a conversation, the visitor sees three: a page, a booking form and a confirmation. Every extra step loses people, so add one only when it removes a reason not to book."
  - q: "Should I put my booking link in cold emails?"
    a: "Not in the first one. My first cold emails are plain text with no links at all, just a phone number and an invitation to call, because that is what gets delivered. Send the booking link to the people who reply."
---

You already own most of a sales funnel: a website, a calendar, an email address and a phone. What is missing is the wiring, so that a visitor who is ready can book a call in a few taps, one who is not can stay in touch, and you can see which channel brought each enquiry. This is how to build a sales funnel from those pieces, in seven steps and mostly on free plans, for a business that sells in a conversation: a call, a visit or a quote.

There is a lot of noise in marketing, and a new tool is the easiest trap to fall into. My advice runs the other way: get the most out of the channels and tools you already use before you add another one.

If funnels are new to you, my guide to {{< a key="sales-funnel-explained" >}}what a sales funnel is{{< /a >}} follows an example from first visit to booked call. This tutorial is part of my {{< a key="funnels-newsletters-guide" >}}complete guide to sales funnels and newsletters{{< /a >}}.

## How to build a sales funnel: the seven steps at a glance

| Step | What it does | Tools |
|---|---|---|
| 1. One page, one call to action | Turns a visit into a click | Your website |
| 2. A booking page with qualifying questions | Turns the click into a booked call | YouCanBookMe or Calendly |
| 3. Confirmation and reminders | Gets the person to the call | The booking tool |
| 4. A double opt-in sign-up form | Keeps in touch with people who are not ready | Brevo or MailerLite |
| 5. One automation | Puts every lead in one list and alerts you | Google Sheets, Zapier, Make or n8n |
| 6. UTM links and a GA4 key event | Shows which channel brings enquiries | Google Analytics 4 |
| 7. A test on your phone | Finds the leaks before prospects do | Your phone |

The examples follow a kitchen fitter who offers a free 15-minute call before any home visit. It is an illustration, not a client story: swap in your own service.

## Step 1: give one page a single call to action

Start where people already land: the service page Google sends visitors to, or a page made for one campaign. Not the homepage, which has too many jobs to do.

Give that page **one action to take**, at the top and again at the bottom: a "Book a free 15-minute call" button. Put your phone number next to it, not instead of it. In the cold email campaigns I run for one client, prospects called rather than replied: calling is faster, and people like real human contact.

Around the button, answer what people ask before booking: who the service is for, proof (reviews, photos of real jobs), how pricing works and what happens on the call.

I put clients who edit their own site on Squarespace, because they can change a word or a photo without the layout falling apart. There, the button is a Button block linked to your booking page. For a campaign page, you can hide the menu so that the button is the only way forward: gear icon next to the page in the Pages panel, **Navigation** tab, then switch off **Show Header** and **Show Footer**. On WordPress, a Buttons block does the same job; on Wix, a button element. No site yet: my {{< a key="squarespace-tutorial" >}}Squarespace tutorial{{< /a >}} builds one step by step.

{{< screenshot id="build-sales-funnel-01" alt="Squarespace service page with a Book a free 15-minute call button and the phone number next to it" >}}

## Step 2: add a booking page with two or three qualifying questions

The button opens a booking page where people pick a free slot in your calendar. I use YouCanBookMe: it does everything Calendly does, it is easy to find your way around and it costs a little less. Calendly is good too. At the time of writing (October 2026), YouCanBookMe's free plan includes one booking page connected to one calendar, and Calendly's free plan one event type. My {{< a key="youcanbookme-tutorial" >}}YouCanBookMe tutorial{{< /a >}} covers the set-up, from working hours to time zones.

What makes the booking page a funnel step is **the questions on its form**. After the name and email, pick two or three that tell you whether the call is worth having and how to prepare for it:

1. **Which service?** A short list of your services, plus "Something else".
2. **Where?** The town or postcode, if you travel to clients.
3. **When?** "Within a month", "In the next three months", "Just looking".
4. **How did you hear about us?** Google, a recommendation, the newsletter, social media. Step 6 explains why.

Leave the budget for the call, where you can explain what drives the price. Each answer is personal data stored by a third-party tool, so ask only what you will use and name the booking tool in your privacy notice.

Then link your button to the booking page, or embed the calendar on a "Book a call" page. On Squarespace, the embed goes in a Code Block, where JavaScript needs the Core plan or above; on Basic, stay with the button.

{{< screenshot id="build-sales-funnel-02" alt="YouCanBookMe booking form with three questions: the service, the timing and how the person heard about the business" >}}

## Step 3: let the booking tool send the confirmation and reminders

After each booking, YouCanBookMe emails a confirmation to the person and a notification to you, free plan included. Rewrite the default confirmation: it is your first email to a new prospect, and it can do more than repeat the time.

```text
Thank you for booking a call on [date] at [time].
We will call you on the number you gave us.
To make the most of 15 minutes, have a few photos of your kitchen to hand.
In the meantime, here is a kitchen we fitted recently: [link]
```

Read it on a phone, and check that it still contains the link to change or cancel the booking.

Reminders are usually **the first paid feature worth having**. YouCanBookMe lists reminder emails and text messages under its paid plans, from Individual upwards, and Calendly's reminder workflows also need a paid plan. If a no-show costs you a wasted trip, reminders pay for themselves; for a 15-minute call, the confirmation may be enough.

## Step 4: offer a sign-up form to people who are not ready

Most visitors will not book on their first visit: some are comparing, others are months away. Give them a reason to stay in touch, such as a monthly newsletter or a one-page price guide, and a form to sign up.

Two email tools with free plans, at the time of writing (October 2026):

| | Brevo | MailerLite |
|---|---|---|
| Free plan | 300 emails a day, up to 100,000 contacts | 250 subscribers, 2,500 emails a month |
| Double opt-in | Option at the form's Settings step; editable template | On by default; editing the email needs a paid plan |

Brevo's free plan mainly limits what you send each day, MailerLite's the size of the list; my {{< a key="newsletter-tools-comparison" >}}comparison of newsletter tools{{< /a >}} sets both against Mailchimp, Kit and beehiiv. On Squarespace, their form's embed code goes in a Code Block; if it contains JavaScript or an iframe, the Core plan condition applies again.

**Keep double opt-in switched on.** It means the person confirms by clicking a link in an email before joining the list. It keeps typos, fake addresses and bots out, and it records proof of consent: Brevo's logs, for example, keep the sign-up, the confirmation email and the time of the click. The GDPR does not mention double opt-in, but its [Article 7(1)](https://eur-lex.europa.eu/eli/reg/2016/679/oj) says that when you rely on consent, you must be able to demonstrate it.

Keep the lists apart, too: someone who booked a call did not ask for your newsletter. Exceptions exist, such as the soft opt-in of regulation 22 of the UK's PECR and its French counterpart in article L34-5 of the Code des postes et des communications électroniques, but they come with conditions. This is a summary, not legal advice: before you email people who did not sign up, have a lawyer check the rules of their country.

{{< screenshot id="build-sales-funnel-03" alt="Sign-up form settings in the email tool with the double opt-in confirmation switched on" >}}

## Step 5: add one automation that logs every lead and alerts you

Leads arrive by form, booking, email and phone. The automation puts them all in one list and tells you as soon as one arrives, so that nobody waits two days for an answer.

Start with forms, which Squarespace handles without any extra tool. In the form block's storage settings, connect Google Drive: Squarespace creates a spreadsheet and adds a row for each submission. Do not rename that spreadsheet, or it disconnects, and keep the email notification on as well.

Bookings land in your calendar, and the booking tool notifies you. To copy them into the same spreadsheet, an automation tool can start on each new calendar event and add a row; set it to keep only events whose title matches your bookings, so that your dentist appointment stays out. At the time of writing:

- **Zapier**: 100 tasks a month free; a booking that adds one row uses one task, as the trigger does not count.
- **Make**: 1,000 credits a month free, but a scheduled check uses a credit each time it runs, even when nothing new has arrived: checking every hour costs about 720 credits a month.
- **n8n**: the Community Edition is free if you host it yourself, on a server you keep up to date.

If you would rather depend on none of them, my tutorial to {{< a key="automate-lead-follow-up" >}}automate lead follow-up for free{{< /a >}} uses a Google Form, a Google Sheet and a short script: an email alert for each new lead, and a reminder if nobody has called back an hour later.

## Step 6: track the funnel with UTM links and a GA4 key event

**UTM links.** Add three parameters to every link you control that points to your funnel page: the newsletter, your email signature, social profiles, your Google Business Profile, ads.

```text
https://www.yourbusiness.co.uk/kitchen-fitting?utm_source=newsletter&utm_medium=email&utm_campaign=autumn-2026
```

Use lower case, spell them the same way every time, and never add them to links between your own pages, where they would replace the real source of the visit. My {{< a key="utm-ga4-funnel-tracking" >}}UTM and GA4 tutorial{{< /a >}} covers naming, reports and installing GA4.

**A thank-you page.** Create a page that only loads after an enquiry: in Squarespace, put it in the **Not linked** section of the Pages panel and switch on **Hide page from search results** in its SEO tab. Then send people to it:

- after the form: form block, **Content** tab, **Edit Post-Submit**, then **Redirect** ([Squarespace help](https://support.squarespace.com/hc/en-us/articles/206566737-Form-blocks)). The redirect does not run while you are logged in, so test it in a private window;
- after a booking: YouCanBookMe sends bookers to your own page on its Professional and Teams plans ([YouCanBookMe help](https://ycbm.capacity.com/article/406807/thank-you-page-doesnt-forward-to-a-url-after-booking)), Calendly on its paid plans. On YouCanBookMe, the address must start with https, and an embedded calendar needs the option that updates the whole browser window.

{{< callout type="warning" >}}YouCanBookMe can add the booker's name and email to the redirect address. Leave those codes out: **Google Analytics' rules forbid sending it personal information**.{{< /callout >}}

On a free booking plan there is no redirect: count bookings in the booking tool and read the answers to "How did you hear about us?".

**The key event.** In GA4, open **Admin** > **Data display** > **Events** and click **Create event**. Name it `generate_lead`, the name Google recommends for a lead, and switch on **Mark as key event**. Choose **Create without code**, pick `page_view` as the source event, enter the address of your thank-you page and click **Create** ([Google's help page](https://support.google.com/analytics/answer/12844695)). Do not mark `page_view` itself, or every page view would count. Counting starts on the day you set it up.

{{< screenshot id="build-sales-funnel-04" alt="GA4 Create event panel with page_view as the source event, the thank-you page address and Mark as key event switched on" >}}

## Step 7: test the whole path on your phone

Your prospects will meet the funnel on a phone, so test it there: logged out, on mobile data, with a second email address.

1. Open one of your UTM links and tap the button. The booking page loads and fits the screen.
2. Book a slot. The confirmation arrives (check the spam folder too), the event sits in your calendar at the right time, and a row appears in your spreadsheet.
3. Send the form. The thank-you page appears and the alert reaches you.
4. Sign up to your own newsletter. The confirmation email arrives, the link works and the welcome email follows.
5. Open GA4's real-time report: your visit shows with its UTM source, and `generate_lead` appears.
6. Cancel the test booking and delete the test contacts, so they do not inflate your numbers.

Run the test again after any change to the site or the tools, and every few months anyway: links break quietly.

## When to pay for more, and when to hand it over

Upgrade one piece at a time, when a real problem shows up:

- no-shows cost you trips: pay for reminders;
- you need to know which channel brings booked calls, not just form enquiries: pay for the booking redirect;
- your list outgrows the free plan: compare paid tiers.

A funnel builder such as Systeme.io or ClickFunnels earns its place when you sell online, with checkout pages and upsells; a service sold on a call rarely needs one. Once real visitors arrive, Microsoft Clarity, which is free, shows where they hesitate or leave: the copy, a photo or the layout.

You do not need me for any of this. It gets harder when the volume grows: {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, an air conditioning installer in Paris and the Île-de-France, receives about ten prospects a day, and when the team could no longer keep up, I built an internal app so that no prospect waits for a call back. Until you reach that point, the seven steps above will carry a small team a long way.
