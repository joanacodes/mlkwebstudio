---
title: "How to write content for AI search that assistants actually quote"
seo_title: "How to write content for AI search: before/after examples"
description: "How to write content for AI search: answer first, define terms in one sentence, date your figures and add what only you know. With before/after rewrites."
slug: "write-content-for-ai-search"
translationKey: "write-content-for-ai-search"
date: 2026-10-17T08:27:00+02:00
lastmod: 2026-10-17T08:27:00+02:00
category: "aio"
article_type: "tutorial"
keywords: ["write content for AI search", "content AI assistants quote", "answer-first writing", "AI-friendly content", "get quoted by ChatGPT"]
summary: "To write content for AI search, answer each question the way you would on the phone: the answer in the first two or three sentences, terms defined in one sentence, figures with a date and a source, and steps or comparisons in lists and tables. Then add what only your business can say. Google says no special rewriting for AI is needed: these habits make a page clearer for people first, and easier for assistants to quote."
cover: "write-content-for-ai-search"
cover_alt: "A phone held over a laptop under a blueprint grid with a target, and the letters TL;DR"
related: ["google-ai-overviews-ai-mode", "ai-writing-sound-human", "write-seo-blog-posts", "check-ai-visibility", "schema-markup-small-business"]
services: ["seo"]
faq:
  - q: "Do I need to rewrite my whole website for AI search?"
    a: "No. Google says optimising for its AI features is still SEO, and that you do not need to cut pages into chunks or rewrite them for AI. Start with the pages that bring you enquiries, then the ones that answer your customers' most common questions."
  - q: "How long should a page be to get quoted by AI assistants?"
    a: "There is no ideal length. Google's guidance on helpful content says it has no preferred word count. Make the page as long as the question needs, with the answer in the first lines and the detail below."
  - q: "Can I use AI to write content for AI search?"
    a: "Yes, as a drafting aid. Google judges AI-assisted pages by the same standards as any other, but producing many pages with AI without adding value can breach its spam policy on scaled content abuse. Check every fact and add what only your business knows before you publish."
  - q: "Are FAQ sections still worth writing now that Google has dropped FAQ rich results?"
    a: "Yes, for your readers. Google stopped showing FAQ rich results on 7 May 2026, but a short questions-and-answers section still answers real questions in plain text, which people and AI assistants both read. FAQ markup can stay on the page: it is still valid."
  - q: "Should I write differently for ChatGPT, Perplexity and Google?"
    a: "No. Google's AI features draw on Google's index, ChatGPT combines its own index with third-party search providers, and Perplexity and Claude send their own search crawlers. A clear page with the answer first serves all of them, so one version of each page is enough."
---

When someone asks ChatGPT, Gemini or Google's AI Mode a question, the assistant runs a web search, reads a handful of pages and builds its answer from the passages that answer best, usually with a link to each source. To write content for AI search, you write passages worth lifting: the answer first, plain definitions, figures with a date, and facts that only your business has.

None of this is a new discipline. Google's guide to its generative AI features, published in May 2026, says that optimising for them "is still SEO", and that you do not need to cut your pages into chunks or rewrite them for AI ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)). The habits below are clarity habits: they help a hurried reader first, and an assistant looking for a sentence to quote second.

This tutorial takes them one by one, with before-and-after rewrites you can adapt for your own pages. It is part of my {{< a key="ai-search-geo-guide" >}}complete guide to generative engine optimisation{{< /a >}}.

## What AI assistants quote from a page

An AI answer starts with a search, and often with several. Google calls this query fan-out: for one question, its AI features run related searches on the sub-topics, then write the answer from what comes back. ChatGPT, Perplexity and Claude also search before they answer, each with its own tools. My guide to {{< a key="google-ai-overviews-ai-mode" >}}getting cited in AI Overviews and AI Mode{{< /a >}} explains how Google picks its sources.

What gets lifted is rarely a whole page. It is a sentence or a short passage that answers one of those questions on its own: a definition, a figure, a step, a row of a table. A page whose answer sits under three paragraphs of introduction gives an assistant nothing clean to lift, and a hurried reader nothing to read.

Research points the same way. In the study that coined the term GEO, accepted at the KDD conference in 2024, researchers found that citing sources, adding quotations from relevant sources and adding statistics raised a page's visibility in AI-generated answers by up to 40% ([Aggarwal et al.](https://arxiv.org/abs/2311.09735)). It was a lab test run in 2023, so read the figure as a direction rather than a promise. Google's guide reaches a similar conclusion in its own words: content that people find unique, compelling and useful is likely to do more for your presence in its AI features, in the long run, than any of its other suggestions.

## How to write content for AI search: six habits at a glance

| Habit | What you change | Who it helps first |
|---|---|---|
| 1. Start from real questions | Headings in your customers' words | The reader who typed those words |
| 2. Answer first | Two or three sentences under each heading | The reader in a hurry |
| 3. Define in one sentence | "X is a Y that does Z" | The reader new to the subject |
| 4. Be specific | Numbers, dates, places, menu names | The reader comparing you with others |
| 5. Shape the page | Numbered steps, tables for comparisons | The reader scanning on a phone |
| 6. Say what only you know | Your cases, guarantees and mistakes | The reader deciding whom to trust |

Each habit makes the page better for a person, which gives you a useful test: if a change only makes sense "for the AI", leave it out.

## Step 1: find the questions your customers really ask

You cannot answer first if you do not know the question. Three sources give you the real ones.

**Your inbox and your phone.** On first calls, prospects ask me the same three questions: do you have experience, what is SEO and how will it help me, and how long does it take to rank? Write down the questions your own customers ask, in their words rather than yours. Each one deserves a page or a section that answers it.

**Search Console.** Open **Performance** > **Search results**, click **Add filter**, choose **Query**, then **Custom (regex)**, and paste the expression below. It keeps only the searches that start with a question word:

```text
^(how|what|why|when|where|which|who|can|do|does|is|should)\s
```

The list shows the questions people already type before they reach your site.

{{< screenshot id="write-content-for-ai-search-01" alt="Search Console Performance report with a Custom (regex) query filter, listing searches that start with how, what or why" >}}

**Bing Webmaster Tools.** The **AI Performance** report, in preview since February 2026, lists grounding queries: the searches Copilot ran before citing one of your pages. The data is sampled, but it shows how an AI rephrases your customers' questions.

{{< screenshot id="write-content-for-ai-search-02" alt="Bing Webmaster Tools AI Performance report showing the grounding queries behind the citations of a page" >}}

To go further, I use deep research tools to find what people in a niche complain about most and which words keep coming back. A complaint, phrased the way customers phrase it, often makes the best heading on the page.

## Step 2: answer in the first two or three sentences

Under each heading, give the answer straight away, then the conditions, then the detail. Journalists call this the inverted pyramid. A reader who stops after two sentences still leaves with the answer, and an assistant finds a passage it can quote without stitching three paragraphs together.

Here is the third first-call question, before and after:

```text
Before:
SEO is a long-term strategy, and results depend on many factors,
such as your sector, your competitors and the age of your website.
Every business is different, which is why we always recommend a
personalised approach.

After:
Expect four months to a year before SEO pays off: that is the range
in Google's own guidance on hiring an SEO. Some pages move faster.
For Pilotech, an air conditioning installer near Paris, the new site
brought its first lead three weeks after it went live.
```

Nothing in the first version is false, but it answers nothing, and every sentence would fit any agency's website. The second gives a range, its source and a real case, and each sentence still makes sense if it is quoted on its own.

This blog follows the same rule. Every article opens with a **Short answer** box of two or three sentences: it is the first thing a reader sees, and the passage I most want an assistant to quote.

{{< screenshot id="write-content-for-ai-search-03" alt="The Short answer box at the top of an article on this blog, answering the question in two sentences" >}}

{{< callout type="tip" >}}**The first-sentence test.** Read only the first sentence under each heading of your page. If, put together, they answer the questions in the headings, the page works. If they are greetings, background or promises, move the answer up.{{< /callout >}}

## Step 3: define each term in one sentence

When a page uses a term your customers may not know, define it the first time it appears, in one sentence: what it is, then what it does or who it is for. Someone who asks an assistant "what is…" gets a definition back, so a page with a clean one-sentence definition already has something worth quoting.

```text
Before:
Reversible air conditioning has become increasingly popular in
recent years, and for good reason. It offers comfort all year
round and more and more homeowners are choosing it.

After:
Reversible air conditioning is an air-to-air heat pump: the same
indoor units cool the room in summer and heat it in winter.
```

The second version is shorter and says more. "Increasingly popular" and "for good reason" are claims with nothing behind them, while the definition is a fact the reader can use.

## Step 4: swap vague claims for numbers, dates and names

Vague sentences are easy to write and useless to quote. Replace each one with something a reader could check: a number, a date, a place, the exact name of a menu. Two of these four rewrites come from my own offers:

| Vague | Specific |
|---|---|
| We respond quickly to urgent requests. | When a site has been hacked, I answer the same day or within 24 hours. |
| Our prices adapt to your needs. | Website projects are fixed-price, with payment options. For an app, 30% or 50% is paid upfront and the rest at delivery. |
| Change the setting in your analytics. | In GA4, open **Admin** > **Data display** > **Channel groups**, then click **Create new channel group**. |
| Studies show AI summaries reduce clicks. | In a [Pew Research](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) study published in July 2025, US adults clicked a result in 8% of visits to a Google page with an AI summary, against 15% without one. |

Three habits keep this kind of writing trustworthy:

- **Date your figures.** A price, a limit or a statistic is true on a given date. Write "at the time of writing (October 2026)" or "in a study published in July 2025", and update the page when the figure changes.
- **Name and link the source.** Your reader can check a figure that has a source, and citing sources was one of the changes that worked best in the GEO study.
- **Copy menu names from the screen.** Write the path exactly as the interface shows it, with ">" between levels, so that someone following your steps finds every word.

## Step 5: shape headings, lists and tables around the question

Structure is where writing for AI search looks most like ordinary SEO:

- **One question per heading**, in the words you collected in step 1. "How long does an installation take?" beats "Timelines", because it is what people type.
- **Numbered steps** for anything done in order.
- **Tables** for anything compared on the same criteria.
- **Short paragraphs** of two to four sentences, each about one thing.

Here is a comparison clients ask me about, first as a paragraph:

```text
Before:
Squarespace and WordPress both have advantages and disadvantages,
and the right choice depends on many factors, including your
budget, your technical skills and your goals.
```

Then as a table:

| | Squarespace | WordPress |
|---|---|---|
| Who makes changes | You, in the editor | Often a developer or a specialist |
| What needs upkeep | Very little: hosting and updates are included | Plugins, themes and updates |
| Access to the code | Closed: no access to the source code | Full access |
| Who it suits | Owners who edit their own site | Businesses with a budget for monthly help |

The table also carries an opinion, which is the point. I usually steer solo owners towards Squarespace, because they can change a word without the layout falling apart, and keep WordPress for clients who can pay a specialist every month.

Structured data (schema markup) describes a page to search engines, but it does not replace clear text. In a test Ahrefs published in May 2026, adding it to 1,885 pages brought no meaningful rise in AI citations. My guide to {{< a key="schema-markup-small-business" >}}schema markup for small businesses{{< /a >}} covers the types still worth adding.

## Step 6: add what only you can say

An assistant that reads ten pages saying the same thing has no reason to pick yours. Google's guide lists a unique point of view among the qualities that count, precisely because its AI systems review many sources. Only you can write about:

- your lead times, your guarantees and the areas you cover;
- your own cases, with the figures you are allowed to share;
- your mistakes, and what you changed afterwards;
- the questions customers ask you, with the answers you give them on the phone.

Here is a paragraph from my own field, cold emailing, before and after:

```text
Before:
Cold emailing can be an effective way to generate leads, provided
it is done properly and follows best practices.

After:
In my campaigns, the first email is three lines at most, in plain
text, with no links and a phone number. Many prospects call
instead of replying: a call is quicker than writing back.
```

The second version could only come from someone who has run those campaigns, and that is what makes it worth quoting, for an assistant and for a prospect. Mistakes count too: of the sites I built for one client, the one that offered too many services never worked, while the one that ranks sells a few very specific services. My rule for cold emails, short and sharp, works just as well on web pages.

## Drafting with AI without losing what gets quoted

I draft with AI myself. I use Claude, partly because in my experience ChatGPT makes things up a bit too often, and I go round, editing and asking for new versions, until the copy is right.

Left alone, though, an AI draft produces the "before" versions above: the average of every similar page, with no dates, no names and nothing of yours. Give it your facts before you ask for text, and check every figure afterwards. Google's [guidance on AI-generated content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) holds AI-assisted pages to the same standards as any other, and warns that producing many pages with AI without adding value for users can count as scaled content abuse. My method for {{< a key="ai-writing-sound-human" >}}making AI writing sound human{{< /a >}} covers the prompts and the edit.

## How to check whether a rewritten page gets quoted

Give Google time to recrawl the page, which can take from a few days to a few weeks, then look in three places:

1. **Search Console.** The generative AI report for Search, next to the other **Performance** reports, shows how often each page appears in AI Overviews and AI Mode. It counts impressions only, with no clicks or queries, so compare the same page over periods of the same length, before and after the rewrite.
2. **Bing Webmaster Tools.** The **AI Performance** report counts the citations of each page in Copilot and Bing's AI summaries.
3. **The assistants themselves.** Once a month, ask the questions from step 1 in ChatGPT, Gemini and Perplexity, in a private window, with exactly the same wording, and note which sites are cited. My tutorial on how to {{< a key="check-ai-visibility" >}}check your AI visibility{{< /a >}} shows how to log the answers month by month.

{{< screenshot id="write-content-for-ai-search-04" alt="Search Console generative AI report for Search, filtered on one page, with its AI Overviews and AI Mode impressions over time" >}}

{{< callout type="note" >}}**Change one thing at a time.** If you rewrite a page, change its title and get a press article in the same month, you will not know which of the three worked. Rewrite, wait, measure, then move on to the next page.{{< /callout >}}

## Your checklist for the next page you rewrite

1. List the three to five questions the page should answer, in your customers' words.
2. Turn each question into a heading.
3. Under each heading, answer in two or three sentences before any detail.
4. Define each technical term in one sentence the first time it appears.
5. Replace every vague claim with a number, a date, a place or a menu path, and link your sources.
6. Put steps in numbered lists and comparisons in tables.
7. Add one thing only your business can say: a case, a guarantee or a mistake.
8. Check every fact, then reread only the first sentence under each heading.

Then cover the basics, such as the title and the meta description, with my {{< a key="on-page-seo-checklist" >}}on-page SEO checklist{{< /a >}}; for blog articles, my guide on how to {{< a key="write-seo-blog-posts" >}}write SEO blog posts{{< /a >}} adds the rest. One page a week is a realistic pace if you do this yourself. If you would rather hand it over, rewriting pages around real questions is part of my {{< a page="/services/seo" >}}SEO service{{< /a >}}.
