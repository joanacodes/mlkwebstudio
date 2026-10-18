---
title: "How to track AI traffic in GA4, Search Console and Microsoft Clarity"
seo_title: "How to track AI traffic in GA4, Search Console and Clarity"
description: "How to track AI traffic in GA4 step by step: the AI Assistant channel, a channel group for older data, Search Console's AI report and Clarity's AI channel."
slug: "track-ai-traffic-ga4"
translationKey: "track-ai-traffic"
date: 2026-10-17T08:31:00+02:00
lastmod: 2026-10-17T08:31:00+02:00
category: "aio"
article_type: "tutorial"
keywords: ["track AI traffic in GA4", "ChatGPT traffic in Google Analytics", "GA4 AI Assistant channel", "AI referral traffic", "GA4 custom channel group", "Microsoft Clarity AI channel"]
summary: "Since 13 May 2026, GA4 has grouped visits from assistants such as ChatGPT, Gemini and Claude into an AI Assistant channel, but that channel skips older data and Google's own AI Overviews and AI Mode. To track AI traffic in GA4 over a longer period, add a custom channel group with a source rule, then read Search Console's generative AI report (impressions only) and Clarity's AIPlatform channel. Finish by counting the enquiries these visits bring."
cover: "track-ai-traffic"
cover_alt: "Rising traffic chart with the words GA4 and Clarity over a blurred office"
related: ["check-ai-visibility", "google-search-console-tutorial", "microsoft-clarity-tutorial", "google-ai-overviews-ai-mode", "get-recommended-by-chatgpt"]
services: ["seo"]
faq:
  - q: "Can I see what people asked ChatGPT before they visited my site?"
    a: "No. AI assistants do not pass the question on to your site, so GA4 only shows where the visit came from and which page it landed on. The closest you will get is the AI Performance report in Bing Webmaster Tools, which lists the grounding queries: the searches Copilot ran before citing your pages."
  - q: "Can GA4 show AI crawlers such as GPTBot?"
    a: "No. GA4 counts visitors whose browser runs its tracking code, and crawlers such as GPTBot, ClaudeBot and PerplexityBot do not run JavaScript. To see them, look at your server logs or, if you use one, your CDN's bot statistics."
  - q: "Will blocking AI crawlers stop the visits from AI assistants?"
    a: "It depends on the crawler. Blocking OAI-SearchBot keeps your pages out of ChatGPT's search answers, apart from a bare link to your site, so most of those visits stop. Blocking GPTBot only refuses the training of OpenAI's models and leaves ChatGPT search alone."
  - q: "Do I need a paid tool to track AI traffic?"
    a: "Not for the visits: GA4, Search Console, Microsoft Clarity and Bing Webmaster Tools are free. Paid AI visibility tools measure something else, namely how often assistants mention you when they are asked a set of questions."
---

AI traffic is the visits your website receives when someone clicks a link in an answer from ChatGPT, Gemini, Claude, Copilot or Perplexity. Since May 2026, Google Analytics has had a channel for some of these visits, which makes it easier to track AI traffic in GA4. That channel has blind spots, though: it ignores older data and everything that comes from Google's own AI features.

This tutorial fills those gaps with free tools, in six steps: the built-in channel, a channel group of your own for the history, the landing pages, Search Console and Bing for Google's and Microsoft's AI answers, Microsoft Clarity for behaviour, and finally the enquiries. It belongs to my {{< a key="ai-search-geo-guide" >}}guide to generative engine optimisation{{< /a >}}, which explains how to get mentioned in the first place.

Allow about forty minutes. You need edit rights on your GA4 property and access to Search Console. Menu names are those of the English interfaces in October 2026.

## What counts as AI traffic, and which tool sees it

AI assistants do not all send visitors the same way, so no single report sees everything. Here is where each kind of AI visit ends up:

| How the person met your site | What reaches your site | Where to measure it |
|---|---|---|
| A link in ChatGPT, Gemini, Claude, Copilot or Perplexity | A visit, with a referrer and sometimes a tag | GA4 and Microsoft Clarity |
| A link in Google's AI Overviews or AI Mode | A visit from Google, counted as organic search | Search Console (impressions only) |
| A citation in Copilot or Bing's AI summaries | Often no visit at all | Bing Webmaster Tools |
| A recommendation acted on later | A call, a direct visit or a search for your name | Your own enquiry log |

ChatGPT adds `utm_source=chatgpt.com` to the links people click in its answers, which makes it the easiest assistant to follow. Without a tag, GA4 relies on the referrer: the address of the page the visitor came from. A visit with neither lands in **Direct**, mixed with the people who typed your address.

## Step 1: find the AI Assistant channel in GA4

Since 13 May 2026, GA4's default channel group has included an **AI Assistant** channel. Google gives ChatGPT, Gemini and Claude as examples but has not published its full list, and reports disagree on whether Perplexity is in it ([Google's page on the default channel group](https://support.google.com/analytics/answer/9756891)).

1. Open **Reports**, then **Traffic acquisition**, usually under **Acquisition**.
2. Choose a date range of at least 28 days; on a small site, three months tells you more.
3. Find the **AI Assistant** row. Its sessions, engagement rate and key events sit in the same columns as your other channels.
4. Click the plus sign next to the first column's title and add **Session source** as a secondary dimension (type "source" in the search box) to see which assistant sent each visit.

{{< screenshot id="track-ai-traffic-01" alt="GA4 Traffic acquisition report with the AI Assistant channel among the other channels" >}}

Two limits apply. The channel only sorts visits from 13 May 2026 onwards: earlier ones stay where GA4 filed them at the time, mostly in **Referral** or **Unassigned**, the bin for visits it cannot classify. And it leaves out AI Overviews and AI Mode, whose visits arrive as ordinary organic traffic from Google.

## Step 2: track AI traffic in GA4 before May 2026 with a channel group

A custom channel group is your own version of GA4's list of channels. Unlike the built-in channel, it also sorts the data collected before you created it, so your AI visits from before May 2026 appear, and you decide which assistants count ([Google's help on custom channel groups](https://support.google.com/analytics/answer/13051316)).

### Create the group

In GA4, open **Admin**, then **Channel groups** under **Data display**, and click **Create new channel group**. GA4 starts you with a copy of the default group. Give yours a name, for example "Channels with AI".

{{< screenshot id="track-ai-traffic-02" alt="GA4 Admin, Channel groups page with the button to create a new channel group" >}}

### Add the AI channel

Add a new channel called "AI assistants". Set its condition on the source, choose **matches regex** and paste this value:

```
.*(chatgpt|chat\.openai|perplexity|claude\.ai|gemini\.google|copilot|deepseek|chat\.mistral|grok).*
```

The vertical bars mean "or", and the backslashes make the dots literal, so `claude\.ai` only matches a source that contains claude.ai. To add an assistant later, type a bar and part of its address before the closing bracket. I left out openai.com and google.com on their own: they would also catch visitors from OpenAI's and Google's other websites.

{{< screenshot id="track-ai-traffic-03" alt="New AI assistants channel with a source condition set to matches regex" >}}

### Move it to the top of the list

Save the channel, then reorder the list to put "AI assistants" at the very top. **GA4 reads the channels from top to bottom and files each visit under the first one that matches**, so an AI channel placed below Referral would miss most of its visits. Then save the group.

{{< screenshot id="track-ai-traffic-04" alt="Channel list of the custom group with AI assistants moved to the top" >}}

### Read it in your reports

Back in **Traffic acquisition**, click the first column's title, which opens a drop-down, and pick your channel group instead of the default one. Set a date range that starts before 13 May 2026: the "AI assistants" row now shows the older visits too.

{{< screenshot id="track-ai-traffic-05" alt="Traffic acquisition report using the custom channel group, with AI visits from before May 2026" >}}

{{< callout type="tip" >}}**Compare your channel with Google's.** Over a period after 13 May 2026, if "AI assistants" counts more visits than the AI Assistant channel of the default group, the difference comes from assistants Google does not recognise. If it counts fewer, look at the sources in Google's channel and add the missing ones to your regex.{{< /callout >}}

## Step 3: see which pages AI visitors land on

Knowing that ChatGPT sent you 14 visits matters less than knowing where it sent them. Those landing pages are the ones assistants pick for your subject, so they need to be accurate and up to date.

1. In **Traffic acquisition**, with your channel group in the first column, click the plus sign and type "landing" to add the landing page as a secondary dimension.
2. Look at the "AI assistants" rows: each one is a page these visitors arrived on.
3. Open each of those pages on your phone and read it as a stranger would. Are your prices or price range, the area you cover and the way to contact you clear within a few seconds?

{{< screenshot id="track-ai-traffic-06" alt="Traffic acquisition report with the landing page as a secondary dimension for the AI assistants channel" >}}

If a page gets AI visits but no enquiries, look at it in Clarity (step 5) before you change anything else.

## Step 4: check AI Overviews and AI Mode in Search Console

Visits from Google's AI Overviews and AI Mode reach your site as organic traffic from Google, so GA4 cannot tell them apart from ordinary search clicks. Search Console is the only place that shows how often Google's AI features display your pages.

Google announced [generative AI reports for Search Console](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) on 3 June 2026, and every site has had them since 31 August 2026. They sit with the other **Performance** reports: one for Search, covering AI Overviews and AI Mode, and one for Discover.

1. Open your property, then the generative AI report for Search.
2. Sort the pages by impressions: these are the pages Google's AI features show most often.
3. Filter on a country, such as the United Kingdom, if you only serve one market.
4. For clicks, go back to the main **Performance** report: clicks from AI Overviews and AI Mode are counted in the **Web** search type (since June 2025 for AI Mode), mixed with ordinary results.

Read these reports with their limits in mind. They count impressions only, with no clicks, click-through rate, position or queries, and those impressions are already included in the Web search type, so do not add the two together. To set up Search Console from scratch, follow my {{< a key="google-search-console-tutorial" >}}step-by-step guide to Google Search Console{{< /a >}}; to be cited more often, read {{< a key="google-ai-overviews-ai-mode" >}}how to get your site cited in AI Overviews and AI Mode{{< /a >}}.

{{< screenshot id="track-ai-traffic-07" alt="Search Console generative AI report for Search with impressions by page" >}}

### For Copilot: Bing Webmaster Tools

Microsoft's counterpart is the **AI Performance** report in Bing Webmaster Tools, in public preview since February 2026 and open to any verified site. It counts how often Copilot and Bing's AI summaries cite your pages and lists the grounding queries, the searches the AI ran before answering. Like Google's report, it has no clicks, and its data is sampled. If your site is already in Search Console, Bing can import it, so there is nothing new to verify.

{{< screenshot id="track-ai-traffic-08" alt="Bing Webmaster Tools AI Performance report with citations over time and grounding queries" >}}

## Step 5: watch AI visitors in Microsoft Clarity

Since 29 August 2025, Clarity has sorted visits from AI assistants such as ChatGPT, Claude, Copilot, Gemini and Perplexity into a channel of their own, **AIPlatform**, with **PaidAIPlatform** for paid traffic from them ([Microsoft's page on the AI channel group](https://learn.microsoft.com/en-us/clarity/insights/ai-channel-group)). Clarity uses its own list, so do not expect its figures to match GA4's exactly.

I use Clarity to see where people engage, whether they came for something specific and what makes them leave, so I can fix it: the copy, a picture or the user experience. Visitors sent by an assistant arrive with a question already in mind, which makes their sessions quick to read.

1. Open your Clarity project and filter the **Dashboard** on the AIPlatform channel to see which pages these visitors read.
2. Apply the same filter in **Recordings** and watch five sessions.
3. Note where people stop scrolling, what they click and whether they reach your contact page or your phone number.
4. Fix the most common problem first, then come back a month later.

{{< screenshot id="track-ai-traffic-09" alt="Microsoft Clarity recordings filtered on the AIPlatform channel" >}}

Clarity has also made a Citations report generally available, aimed at citations in AI answers rather than visits. If Clarity is not on your site yet, my {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity tutorial{{< /a >}} covers the tracking code and the consent signal Clarity has needed for visitors from the UK and the EEA since 31 October 2025.

## Step 6: count enquiries, not just visits

A visit is not a client. For {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, the air conditioning installer whose website and SEO I look after, leads are measured in forms and calls. Apply the same measure to AI:

1. **Make your enquiries key events.** In GA4, open **Admin** > **Data display** > **Events** and switch on **Mark as key event** for the event your contact form sends. The **Key events** column of Traffic acquisition then shows enquiries for each channel, AI included. If your form sends no event yet, ask whoever built your site to add one.
2. **Ask every new contact how they found you.** Add a "How did you hear about us?" field to your form, with an option such as "ChatGPT or another AI assistant", and ask the same question on the phone. In my experience, people would rather call than write because it is quicker, and a call leaves no trace in GA4.
3. **Watch the searches for your name.** Someone who read about you in an answer may simply search for your business. The branded queries filter in the **Performance** report of Search Console separates those searches from the rest, so you can see whether they grow.

{{< screenshot id="track-ai-traffic-10" alt="GA4 events list with the contact form event marked as a key event" >}}

## Why your AI figures are always too low

Treat every AI figure as a minimum, for four reasons:

- **Missing tags and referrers.** A visit with neither lands in Direct. From 9 October 2026, analytics firms reported a sharp fall in ChatGPT visits in GA4, by almost half on the sites one of them monitors, while Direct traffic rose: ChatGPT appears to have stopped tagging some of its links. OpenAI had announced no change when I wrote this. If your ChatGPT figures dropped that week, check Direct on the same landing pages before drawing conclusions.
- **Cookie refusals.** Visitors who refuse analytics cookies on your banner are not counted in the usual way, in GA4 or in Clarity.
- **Google's AI features.** Clicks from AI Overviews and AI Mode are mixed into organic search, and Search Console only shows their impressions.
- **People who never click.** They read your name in an answer, then call you or search for you a week later.

None of this makes the figures useless. A trend over several months tells you whether assistants are sending you more people, even if each figure is an underestimate.

## Your monthly AI traffic check

Once everything is set up, ten minutes a month is enough:

1. GA4: visits and key events in your "AI assistants" channel, compared with the month before.
2. GA4: the landing pages these visits reach.
3. Search Console: impressions in the generative AI report, by page.
4. Bing Webmaster Tools: Copilot citations, if you added your site.
5. Clarity: five recordings from the AIPlatform channel.
6. Your enquiry log: the forms and calls that mention an assistant.

If the figures stay at zero for months, you have a visibility problem, not a measurement one. First see whether assistants mention you at all with my guide to {{< a key="check-ai-visibility" >}}checking your AI visibility{{< /a >}}, then work on {{< a key="get-recommended-by-chatgpt" >}}getting recommended by ChatGPT{{< /a >}}. And keep it in proportion: if AI sends you a handful of visits a month, keep working the channels that already bring you clients rather than reorganising everything around a new one.
