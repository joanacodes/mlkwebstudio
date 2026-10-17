---
title: "How to use Deep Research for copywriting and SEO: my step-by-step method"
seo_title: "How to use Deep Research for copywriting and SEO"
description: "How to use Deep Research in Claude or ChatGPT for copy and SEO: find customer complaints and recurring keywords, with copy-ready prompts and source checks."
slug: "how-to-use-deep-research"
translationKey: "deep-research-copywriting-seo"
date: 2026-10-17T09:02:00+02:00
lastmod: 2026-10-17T09:02:00+02:00
category: "ai-automation"
article_type: "tutorial"
keywords: ["how to use Deep Research", "Deep Research for SEO", "Claude Research", "ChatGPT deep research", "deep research prompts", "AI copywriting research"]
summary: "To use Deep Research for copywriting and SEO, give it a short brief, then run two separate research tasks: one on what customers complain about most, one on the words and questions that keep coming back in each niche. Open every source the report cites and check its date, then confirm the keywords in Semrush or Keyword Planner before you write. In Claude the feature is called Research (paid plans only); in ChatGPT it is deep research."
cover: "deep-research-copywriting-seo"
cover_alt: "The words Deep Research beside a search bar and results, next to a phone held over a laptop"
related: ["keyword-research-small-business", "ai-writing-sound-human", "claude-vs-chatgpt", "write-seo-blog-posts", "semrush-review"]
services: ["seo"]
faq:
  - q: "Is Deep Research free?"
    a: "Not in Claude: Research needs a paid plan (Pro, Max, Team or Enterprise). ChatGPT's free plan includes a limited allowance of deep research at the time of writing (October 2026); Plus gets more and Pro the most. OpenAI publishes no exact numbers and has changed the allowances several times since 2025."
  - q: "Which model does Claude's Research use?"
    a: "Claude Opus 5.5, with Claude Opus 4.8 as a fallback, whatever model the chat is set to. Choosing another model in the chat, such as Fable 5.1, does not change the model Research uses ([Anthropic's help page](https://support.claude.com/en/articles/11088861-using-research-on-claude))."
  - q: "Can I run Claude's Research from my phone?"
    a: "Yes, in the Claude mobile app, but there it searches the web only and skips your connectors, without any warning. To include connected tools such as Google Docs, start the research on the web or in the desktop app."
  - q: "Can Research read my emails and documents?"
    a: "In Claude, yes, if connectors such as Google Workspace (Gmail, Google Calendar, Google Docs) are switched on for the chat: Research uses them automatically, without asking each time. Switch off the connectors you do not want searched, and keep your clients' personal data out of research chats."
  - q: "Can I publish a Deep Research report as a blog post?"
    a: "No. A report is research notes: it tells you what to write about. Check its facts, then write the page in your business's voice, yourself or with the assistant, and add what only you know about your work."
---

Deep Research is a mode of AI assistants such as Claude and ChatGPT that searches the web on its own, reads many pages and writes a report with links to its sources. It takes minutes rather than seconds. This tutorial shows how to use Deep Research for the research behind a website's copy and SEO, step by step, with prompts you can copy.

I use it to answer two questions about a client's market. What do customers complain about most? That gives the copy its angle. Which keywords keep coming back, and in which niches? That gives the SEO its targets. Then I check the keywords in Semrush and feed everything into the writing.

The method works in Claude, which I use, and in ChatGPT: the menus differ, the steps do not. It is one part of my guide to {{< a key="ai-small-business-guide" >}}AI for small businesses{{< /a >}}.

## What Deep Research does well for copy and SEO, and what it cannot do

Deep Research is good at the slow part of research: reading.

- **Collecting customers' own words.** Reviews, forums and question-and-answer pages are full of people describing a problem in their own terms. Those terms are raw material for headlines: a page that names a problem the way customers name it reads as if it understood them.
- **Spotting patterns.** The same complaint on ten different sites deserves a section of your page. The same question in five forums deserves an FAQ entry or an article.
- **Grouping by niche.** It can sort phrases into sub-markets, so you can see where people ask the most questions.

It cannot measure demand. Deep Research reads web pages; it does not have Google's search data. If a report gives you a monthly search volume, it copied the figure from a page of unknown age or made an estimate. Volumes come from a keyword tool, in Step 6.

It also gets things wrong. It can misread a page, mix up two countries or cite a page that does not say what the report claims. In my experience, ChatGPT tends to hallucinate a bit too much, while Claude is extremely accurate. That is why I work with Claude. I still check every source, whichever tool wrote the report.

## How to use Deep Research in Claude and ChatGPT: what you need

Both assistants have the feature, under different names. Here is what you need at the time of writing (October 2026):

| | Claude | ChatGPT |
|---|---|---|
| Name in the menu | **Research** | **Deep research** |
| Plans | Pro, Max, Team and Enterprise (not the free plan) | Free and Go: limited; Plus: more; Pro: the most |
| Limits | Counts against your usual limits, and uses them up faster than a normal chat | A monthly allowance that depends on your plan; OpenAI publishes no exact numbers |
| Before the research starts | Web search must be switched on | It may ask clarifying questions and show a research plan you can edit |

Sources: [Anthropic's help page on Research](https://support.claude.com/en/articles/11088861-using-research-on-claude), [OpenAI's help page on deep research](https://help.openai.com/en/articles/10500283-deep-research-in-chatgpt) and [ChatGPT's pricing page](https://chatgpt.com/pricing/). OpenAI has changed ChatGPT's allowances several times since 2025, so I give no figures. The prices of both assistants are in my comparison of {{< a key="claude-vs-chatgpt" >}}Claude vs ChatGPT{{< /a >}}. Gemini and Perplexity have research modes of their own; the same method applies there, with different menus.

## Step 1: write a short brief first

A research task is only as good as what it knows about the business. Before a website project, I ask the client what they offer and which clients they prefer working with, and that conversation becomes the brief. Five lines are enough. Here is one for an example business, a kitchen fitter in Bristol:

```text
Business: kitchen fitter in Bristol, design and fitting
Offer: made-to-measure kitchens, fitting only, worktop replacement
Preferred clients: homeowners renovating, mid-range to high-end budgets
Area: Bristol, Bath and North Somerset
Website goal: phone calls and quote requests
```

In Claude, keep the brief in a **Project**: paste it into the project instructions, so you do not have to paste it again in each chat. ChatGPT has projects too.

{{< screenshot id="deep-research-copywriting-seo-01" alt="A Claude Project with the client brief pasted into the project instructions" >}}

## Step 2: switch on Research or deep research

In Claude, on the web or in the desktop app:

1. Make sure web search is switched on: Research does not work without it.
2. Click **+** at the bottom left of the message box, then **Research**. A blue indicator appears at the bottom of the chat; click it again to switch Research off.
3. If Claude answers without researching, ask for it in your message: "Claude, please use the research tool to…".

{{< screenshot id="deep-research-copywriting-seo-02" alt="Claude's + menu open, with Research selected and the blue Research indicator under the message box" >}}

In ChatGPT:

1. Click **+** in the message box to open the tools menu.
2. Choose **Deep research**.
3. Send your prompt. If ChatGPT asks clarifying questions, answer them. If it shows a research plan, read it and edit anything that misses the point before the research starts.

{{< screenshot id="deep-research-copywriting-seo-03" alt="ChatGPT's tools menu open under the + button, with Deep research highlighted" >}}

## Step 3: ask what customers complain about

This is the copywriting half. Every complaint that keeps coming back is a worry your page can answer: a delay, a quote that grew, a fitter who never called back. Answer it with a fact about the business, and the copy speaks to what the reader is already worried about.

With the brief in place and Research switched on, send:

```text
Using the brief, research what homeowners in the UK complain about
most when they buy and fit a new kitchen: delays, quotes, workmanship,
aftercare, communication, and anything else that comes up.

Read reviews of kitchen companies, forums such as Reddit and Mumsnet,
and question-and-answer sites. For each complaint:
1. Give it a short name.
2. Quote two or three sentences in the customers' own words.
3. Link to each page you quote, with the date of the post or review.
4. Say how often it came up: very often, often or occasionally.

Rank the complaints from most to least frequent. Use only what you
found in your sources, and say when you could not confirm a point.
```

Two parts of this prompt do the heavy lifting. The customers' own words give you phrases to reuse in headlines, and the links and dates prepare the checks in Step 5.

Keep the keyword question for a separate run. Each report then stays focused, and a shorter report is quicker to check.

{{< screenshot id="deep-research-copywriting-seo-04" alt="The complaints prompt in the message box, with Research switched on" >}}

## Step 4: ask which keywords keep coming back

This is the SEO half. Open a new chat in the same project, switch on Research again and send:

```text
Using the brief, research the words and questions people in the UK
use when they look for a new kitchen or a kitchen fitter. Read forums,
review sites, question-and-answer pages and the pages that answer
these searches.

Give me:
1. The phrases and questions that keep coming back, grouped by niche
   (for example: small kitchens, kitchen islands, fitting only,
   full renovation).
2. For each phrase, two or three pages where you found it, with links.
3. The niches where people ask the most questions.

Leave search volumes out: I will check them in a keyword tool.
```

Name the country in every prompt. In a kitchen report, American sources talk about cabinets and countertops; customers in Bristol say units and worktops. A page written with the wrong words misses the search and sounds foreign to the reader.

{{< screenshot id="deep-research-copywriting-seo-05" alt="A Research report listing recurring phrases grouped by niche, with links to its sources" >}}

## Step 5: check every source before you use it

A report that invents one complaint can send a whole page in the wrong direction. This is the checking routine, and it applies to both tools:

1. **Open every source the report cites.** Find the passage it relies on. If the page does not say it, or will not open, delete the point.
2. **Check the date.** A thread from five years ago may describe a market that has changed. Use recent sources for the copy, and older ones only if the same point also comes up in recent ones.
3. **Check the country.** A US forum does not describe your UK customers, and a supplier's blog is not a customer.
4. **Count independent sources.** A complaint on one page is an anecdote. The same complaint on several unrelated sites is a pattern.
5. **Ask the report to flag its weak points.** In the same chat, send: "Which points rest on a single source, and which did you infer rather than read?" Check those first.
6. **Keep strangers' reviews off your site.** Their words can shape your phrasing, but a review written about another company never goes on your page as if it were about yours.

{{< callout type="tip" >}}Check that each quote in the report appears word for word on the page. A report sometimes tidies up a customer's wording, and the tidy version loses the very words you wanted for your headlines.{{< /callout >}}

{{< screenshot id="deep-research-copywriting-seo-06" alt="A cited web page opened beside the Research report, with the quoted passage visible" >}}

## Step 6: check the keywords in Semrush or Keyword Planner

Deep Research tells you which words people use; a keyword tool tells you how many people search for them. I use Semrush mainly for keyword research, including the keywords advertisers pay for and what they cost. That cost shows which keywords bring business, and I double down on those in SEO instead of paying for every click in ads.

1. In Semrush, open **Keyword Overview**, choose your country's database (United Kingdom) and paste the phrases from Step 4. Up to 100 can go in at once.
2. Read three figures for each phrase: **Volume** (average monthly searches on Google), **Keyword Difficulty** (a score from 0 to 100: how hard it is to reach Google's top 10) and **CPC** (what an advertiser pays Google, on average, for one click on an ad).
3. Keep the phrases with real volume. Mark those with a high CPC: advertisers pay more for them because they tend to bring customers, which makes them good candidates for a page of their own.
4. Keep a phrase with no measurable volume only if it is your ideal client's exact question: it still makes a good FAQ entry.

The definitions of these figures are in [Semrush's Keyword Overview guide](https://www.semrush.com/kb/257-keyword-overview). A free Semrush account allows about ten keyword searches a day at the time of writing and shows only the first ten results of each report, enough to check a short list. Google Keyword Planner is free too, inside a Google Ads account. My guide to {{< a key="keyword-research-small-business" >}}keyword research for small businesses{{< /a >}} covers both, and my {{< a key="semrush-review" >}}Semrush review{{< /a >}} says when the paid plans are worth it.

{{< screenshot id="deep-research-copywriting-seo-07" alt="Semrush Keyword Overview for a UK keyword, showing Volume, Keyword Difficulty and CPC" >}}

## Step 7: turn the findings into pages and copy

Each finding has a place on the site:

| Finding | Where it goes |
|---|---|
| A complaint that keeps coming back | A promise near the top of the page, or a section that answers it with facts |
| The customers' own words | Headlines, subheadings and the first lines of each section |
| A question asked again and again | An FAQ entry, or a blog article if the answer is long |
| A group of keywords with real volume | A page of its own, with the main keyword in the title, the H1 and the first paragraph |

**One niche, one page.** Among the websites I built for one client, a site that offered too many different services did not work at all, while {{< a page="/projects/pilotech-teknopoint" >}}the one built around a very specific offer{{< /a >}} ranks first or second on Google. A page that tries to answer every niche at once is rarely the best answer for any of them.

Then I write with the assistant. I mix the brief, the checked complaints and the keywords I kept, and go round, drafting and editing, until I am happy with the copy and the site. Only then does the client see it. A prompt for the first draft:

```text
Here are my brief, the complaints I checked (with the customers'
own words) and the keywords I kept after checking them in Semrush.

Write the copy for the "Kitchen fitting in Bristol" page:
- Put the main keyword, "kitchen fitters Bristol", in the title,
  the H1 and the first paragraph, and the secondary keywords in
  the H2s where they fit naturally.
- Answer the three most frequent complaints with what the business
  actually does, using only the facts in the brief.
- Where a fact you need is missing, write [TO CONFIRM].
UK English, plain and confident, short sentences.
```

The editing that makes a draft sound like the business is in {{< a key="ai-writing-sound-human" >}}how to make AI writing sound human{{< /a >}}. Once the client has approved the pages, I write the meta titles and descriptions and prepare a few SEO articles in advance. The questions found in Step 4 make good subjects for them, and {{< a key="write-seo-blog-posts" >}}how to write SEO blog posts{{< /a >}} covers that part.

## Your first Deep Research session: a checklist

1. Write the brief: offer, preferred clients, area, website goal.
2. Switch on **Research** in Claude (with web search on) or **Deep research** in ChatGPT.
3. Run the complaints prompt, then the keywords prompt, in separate chats.
4. Open every source, check its date and country, and drop the points that rest on a single page.
5. Check the phrases in Semrush or Keyword Planner: volume, difficulty, CPC.
6. Give each niche with real volume its own page, and answer the frequent complaints with facts from the brief.
7. Once the pages are live, check whether AI assistants mention the business: my tutorial on {{< a key="check-ai-visibility" >}}AI visibility{{< /a >}} shows how.

Run the research again when the business adds a service or a new area: a new niche comes with its own complaints and its own words.
