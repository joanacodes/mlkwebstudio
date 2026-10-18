---
title: "Generative engine optimisation (GEO): the complete guide for small businesses"
seo_title: "Generative engine optimisation (GEO) for small businesses"
description: "Generative engine optimisation (GEO) for small businesses: how ChatGPT, Gemini and Perplexity choose sources, what to fix first and what to ignore."
slug: "generative-engine-optimisation"
translationKey: "ai-search-geo-guide"
date: 2026-10-17T09:51:00+02:00
lastmod: 2026-10-17T09:51:00+02:00
category: "aio"
article_type: "pillar"
keywords: ["generative engine optimisation", "generative engine optimization", "what is GEO", "how AI search engines work", "AI search optimisation", "AIO"]
summary: "Generative engine optimisation (GEO) is the work that helps AI assistants such as ChatGPT, Gemini, Perplexity and Google's AI Overviews find your business, trust it and cite it. For a small business it is mostly sound SEO plus three extra checks: let AI search crawlers in, earn mentions on other sites, and measure what can be measured. None of it requires a paid tool or a special file."
cover: "ai-search-geo-guide"
cover_alt: "The letters AIO / GEO under an orbit of dots circling a star, on ribbed glass"
related: ["geo-vs-seo", "get-recommended-by-chatgpt", "google-ai-overviews-ai-mode", "write-content-for-ai-search", "small-business-seo-guide"]
services: ["seo"]
faq:
  - q: "How long before AI assistants mention my business?"
    a: "There is no fixed delay. OpenAI says a robots.txt change reaches ChatGPT search in about 24 hours, but new pages still have to be crawled and indexed, and mentions on other sites take months to build. Google's guidance on hiring an SEO talks about four months to a year before SEO work pays off, and AI answers rest on the same groundwork."
  - q: "What is the difference between AI Overviews and AI Mode?"
    a: "AI Overviews are summaries shown above Google's usual results for some searches. AI Mode is a separate, conversational way to search, built for longer questions and follow-ups; since January 2026, a follow-up question on an AI Overview continues in AI Mode. Both take their links from Google's ordinary index."
  - q: "Will blocking AI training bots take me out of AI answers?"
    a: "Not for ChatGPT or Claude, as long as their search crawlers (OAI-SearchBot and Claude-SearchBot) stay allowed: GPTBot and ClaudeBot only collect training data. Google-Extended is different: it has no effect on Google Search or AI Overviews, but it also decides whether the Gemini app can ground its answers in your pages."
  - q: "Do I need a paid tool for generative engine optimisation?"
    a: "Not to start. Asking your customers' questions in the main assistants once a month, and reading the free reports in Search Console, Bing Webmaster Tools and Microsoft Clarity, covers most small businesses. Paid trackers such as Semrush's AI Visibility Toolkit help when you follow dozens of questions or several competitors."
  - q: "Can I keep my site out of Google's AI Overviews?"
    a: "Yes. In Search Console, the Settings page has a Search generative AI section where you can exclude your site from AI Overviews, AI Mode and the AI summaries in Discover. The change takes a few days, Google says it is not a ranking signal, and the Gemini app is still controlled separately by Google-Extended."
---

When someone asks ChatGPT for a bookkeeper in Bristol, or types a question that brings up one of Google's AI Overviews, the assistant searches the web, reads a few pages and writes an answer with a handful of sources. Generative engine optimisation (GEO) is about being one of those sources, and being described correctly.

For a small business, most of it is SEO you should be doing anyway, plus a few checks you can run yourself. What changes is the reward for getting it right: the answer names a few businesses instead of showing a page of links, and fewer people click through to compare them.

This page is the hub of the blog's AI search section. It explains how AI search engines choose their sources, walks through five steps with a detailed guide for each, and ends with what you can safely ignore. I have written it the way I advise clients: honestly, including the parts you do not need me for.

## What generative engine optimisation is (and its other names)

Generative engine optimisation is the practice of making your website and your reputation easy for AI systems to find, quote and recommend when they generate an answer. The term comes from [a research paper by Aggarwal and colleagues](https://arxiv.org/abs/2311.09735) from Princeton University and other institutions, presented at the KDD 2024 conference. In their tests, changing how a page was written raised its visibility in generated answers by up to 40%. Citing sources, adding quotations and adding statistics were among the most effective changes, and the results varied by subject.

You will meet several names for the same idea:

- **GEO** (generative engine optimisation): the academic term, now common in marketing.
- **AIO** (AI optimisation): the umbrella term this blog uses for being found and recommended by AI assistants.
- **AEO** (answer engine optimisation): a term SEO people used for featured snippets and voice assistants before applying it to AI answers.
- **LLMO** (large language model optimisation): the same goal, named after the models.

The names matter less than one distinction. What a model learnt in training stays fixed until its next version, and you cannot change it quickly. What it finds when it searches the web while answering is live, and that is where GEO works. When people say a business "shows up in ChatGPT", they nearly always mean the second.

## How AI search engines choose their sources

Every AI assistant that answers with sources follows roughly the same three steps:

1. It decides whether to search. Questions about current facts, prices, local services or named businesses usually trigger a web search; general questions may not.
2. It turns the question into search queries. The assistant rewrites the question, often into several queries, and sends them to a search index: its own, a partner's or Google's.
3. It reads a few results and writes the answer. It keeps the pages that answer each part of the question most clearly and cites some of them.

The index behind each assistant decides whether your site can be found at all:

| Assistant | Where it searches | Crawler that must reach your site |
|---|---|---|
| ChatGPT search | OpenAI's own index plus third-party search providers (how much it relies on Bing is not documented) | OAI-SearchBot |
| Google AI Overviews and AI Mode | Google's ordinary search index | Googlebot |
| Gemini app | Google Search | Googlebot (the Google-Extended token decides whether Gemini may use your pages) |
| Claude | Brave Search (on Anthropic's list of subprocessors since March 2025), alongside Anthropic's own crawler | Claude-SearchBot |
| Perplexity | Its own index | PerplexityBot |
| Microsoft Copilot | Bing | Bingbot |

Three practical consequences follow. First, if a crawler cannot read your pages, good writing will not help: a site that blocks OAI-SearchBot drops out of ChatGPT's search answers. Second, because assistants send several precise queries, a page that answers one specific question clearly stands a better chance than a vague homepage. Third, the answer is generated, so it can be wrong.

That last point is why I am careful about which assistant I trust. I use Claude, because in my work ChatGPT has made things up a bit too often, while Claude has been extremely accurate; I compare them in {{< a key="claude-vs-chatgpt" >}}Claude vs ChatGPT for business{{< /a >}}. Whatever your customers use, check what it says about you (Step 4 below).

The two biggest audiences have their own guides: {{< a key="get-recommended-by-chatgpt" >}}how to get your business recommended by ChatGPT{{< /a >}} and {{< a key="google-ai-overviews-ai-mode" >}}how to get your site cited in AI Overviews and AI Mode{{< /a >}}.

## Why AI search matters for a small business in 2026

In the UK, Google's AI Overviews arrived on 15 August 2024 and AI Mode on 28 July 2025. The audiences are now huge: Alphabet said in July 2026 that AI Mode had passed 1 billion monthly users and the Gemini app 950 million, and OpenAI announced in February 2026 that ChatGPT had 900 million weekly users.

The catch is clicks. In a [study by Pew Research](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) of US browsing data from 2025, people clicked a search result in 8% of visits when an AI summary appeared, against 15% when none did, and clicked a link inside the summary in just 1%. When the answer sits on the screen, fewer people visit websites, so being a named source, or the business the answer recommends, counts for more.

Keep it in proportion, though. According to Statcounter, Google still handled about 91% of UK searches in June 2026, and Bing about 6%. Your customers have not stopped searching. They search in more places, and some get their answer without a click.

My advice is the same for every new channel: **do not drop what already works**. My own clients come from referrals, cold emails and SEO, in that order. It is easy to chase the newest tactic, and the noise around GEO is a textbook case; I explain how to resist it in {{< a key="shiny-object-syndrome" >}}shiny object syndrome{{< /a >}}. The reassuring part is that most GEO work strengthens your SEO at the same time.

## GEO vs SEO: what stays the same and what is new

Google's guide to optimising for its AI features, [published on 15 May 2026](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), treats the job as ordinary SEO. It says llms.txt files, special schema, content chunking and rewriting for AI are not needed, and Google's [documentation on AI features](https://developers.google.com/search/docs/appearance/ai-features) adds that a page only has to be indexed and allowed to show a snippet to be eligible. That guidance covers Google only, but the other assistants reward the same basics: pages a crawler can read, clear answers and a business that other sites vouch for.

Three things are genuinely new:

1. More crawlers to let in. Each AI company runs its own search crawler, and some hosting and security settings block them by default.
2. Mentions weigh more. In an Ahrefs study of 75,000 brands, branded web mentions correlated with visibility in AI Overviews more than any other factor measured (0.664), ahead of branded anchor text (0.527) and branded search volume (0.392).
3. Measurement has gaps. Most AI reports show impressions or citations rather than clicks, and some visits arrive with no source at all.

I make the full argument in {{< a key="geo-vs-seo" >}}GEO vs SEO: what really changes{{< /a >}}. If your SEO basics are not in place yet, start with {{< a key="small-business-seo-guide" >}}the complete guide to small business SEO{{< /a >}}: every step below builds on it.

## Step 1: let AI search crawlers read your site

Start here, because everything else depends on it.

1. Check your robots.txt. Open yourdomain.co.uk/robots.txt and make sure nothing blocks OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot or Bingbot. Training crawlers such as GPTBot and ClaudeBot are a separate decision: {{< a key="robots-txt-ai-crawlers" >}}robots.txt for AI crawlers{{< /a >}} lists the bots and gives three files to copy.
2. Check the layers above it. Cloudflare has blocked known AI crawlers by default on newly added domains since 1 July 2025, and some website builders and security plugins have their own switch: make sure the search crawlers listed above are allowed there too. On Squarespace, **Settings > Crawlers** has a "Block known artificial intelligence crawlers" option, off by default.
3. Make sure your text is in the HTML. Vercel found that GPTBot, ClaudeBot and PerplexityBot do not run JavaScript, unlike Googlebot. If your service descriptions only appear once a script has run, those crawlers may see an empty page.
4. Get indexed by Google and Bing. Verify your site in Google Search Console and in Bing Webmaster Tools, which can import your sites from Search Console, then submit your sitemap. Bing is the index behind Copilot.

{{< callout type="tip" >}}A two-minute check for point 3: open one of your service pages, view its source code (**Ctrl+U** in most browsers on Windows) and search it for a sentence from the page. If the sentence is not in the source, crawlers that do not run JavaScript cannot read it.{{< /callout >}}

Two extras get more attention than they deserve. An llms.txt file is a Markdown summary of your site for AI tools: Google Search ignores it, and no major AI company has confirmed using it to choose the businesses it recommends, as {{< a key="llms-txt-explained" >}}llms.txt explained{{< /a >}} sets out. Schema markup describes your business in code. It still has uses in Google, but an Ahrefs test that added JSON-LD to 1,885 pages found no meaningful rise in AI citations; {{< a key="schema-markup-small-business" >}}schema markup for small businesses{{< /a >}} lists the types still worth adding.

For the record, this site lets every crawler in and publishes an llms.txt. Keeping the file costs nothing, but I would not count on it to bring in a single client.

## Step 2: write pages that answer your customers' questions

Assistants quote pages that answer a precise question in plain words. In practice:

- One page per service, and one per town you genuinely cover, each with its own facts. Near-identical pages where only the town name changes are what Google's spam policies call doorway abuse; {{< a key="local-seo-guide" >}}the local SEO guide{{< /a >}} shows how to build town pages properly.
- The answer first. Open each page or section with two or three sentences that answer the question, then give the detail: prices or price ranges, areas covered, lead times, guarantees.
- Definitions in one sentence and figures with a date and a source, plus tables for comparisons.
- What only you can say: your process, real photos, real cases, the questions clients ask on the first call.

{{< a key="write-content-for-ai-search" >}}How to write content that AI assistants quote{{< /a >}} shows these habits with before-and-after rewrites.

**Being specific matters even more than format.** For one client, the site that sells very specific services reached a top ranking for one of its searches within a day or two of going live, which is unusually fast. The site of a sister company, which offered a long list of building trades at once, did not work at all. An assistant asked for "an electrician in Croydon who installs EV chargers" looks for a business whose pages say exactly that.

AI is a good research assistant for this work, not a page factory. I use Deep Research to find what people complain about most in a niche and which keywords keep coming back, then I edit the copy until it sounds like the business; the method is in {{< a key="deep-research-copywriting-seo" >}}how to use Deep Research for copywriting and SEO{{< /a >}}. Publishing pages in bulk is another matter: Google's guidance on AI-generated content warns that many pages generated without adding value for users may break its scaled content abuse policy, and since October 2026 it insists on checking AI-generated content by hand before publishing.

## Step 3: get mentioned on the sites AI assistants trust

Assistants rarely recommend a business on the strength of its own website alone. They look for confirmation elsewhere, which is why the Ahrefs correlation above matters. Research by Peec AI in March 2026 found Reddit, YouTube, LinkedIn and Wikipedia among the most cited sites in AI answers, with a different mix for each engine.

For a small business, the most useful mentions are usually closer to home:

- Your Google Business Profile, complete and up to date, with genuine reviews you have asked for. Google ranks local businesses on relevance, distance and prominence, and nobody can pay for a better position; {{< a key="google-business-profile-setup" >}}the Google Business Profile setup guide{{< /a >}} goes through it step by step.
- Directories and trade bodies that list your business with the same name, address and phone number everywhere.
- Suppliers and partners with a "find an installer" or "our partners" page.
- The press, starting with your local paper.

The press is less out of reach than it seems. I am not a PR specialist and barely tried, yet I got a personal trainer friend into the French magazine Match; I put it down to the copywriting and targeting habits that cold emailing taught me. You do not need followers, just something interesting to bring to the table and a page that shows your work. Start with your town's paper, then the regional press, then the national one: each article is a mention, often a link, and proof you can show. {{< a key="get-press-coverage" >}}How to get press coverage without followers{{< /a >}} explains the method.

What does not work is faking it. Fake reviews break Google's policies, which also forbid asking only the customers you expect to be pleased. In the UK, the Digital Markets, Competition and Consumers Act has banned fake reviews, and reviews presented in a misleading way, since 6 April 2025. Google's AI guide also addresses inauthentic mentions. The aim is to be talked about, not to manufacture the talk.

## Step 4: check what AI assistants say about you

Once a month, test the questions your customers really ask. It takes less than an hour.

1. Write down ten questions: your service plus your town, "best [service] for [type of client]", a comparison with a competitor, and your business name plus "reviews" or "prices".
2. Ask each one in ChatGPT, Gemini, Perplexity, Claude and Copilot, then in Google to see AI Overviews and AI Mode. Where you can, use a private browser window without signing in, or switch off memory and personalisation first, so your past conversations do not colour the answer.
3. Note who is named, which sources are cited and anything wrong about you: old prices, a former address, a service you no longer offer.
4. Correct errors where the assistants read them: your own pages, your Business Profile and your directory listings.

Answers change from one run to the next, so look for patterns over a few months rather than reacting to a single reply. {{< a key="check-ai-visibility" >}}How to check whether ChatGPT, Gemini and Perplexity mention your business{{< /a >}} goes through the method in detail.

## Step 5: measure AI traffic and the enquiries it brings

Measurement is the weakest part of GEO, so combine several free sources:

| Tool | What it shows | Limits |
|---|---|---|
| Google Analytics 4 | An **AI Assistant** default channel since 13 May 2026, for visits from assistants such as ChatGPT, Gemini and Claude | Not applied to older data; visits from AI Overviews and AI Mode are not in it |
| Google Search Console | A generative AI report, open to all sites since 31 August 2026 | Impressions only, with no clicks or queries |
| Bing Webmaster Tools | An AI Performance report (preview since February 2026): citations in Copilot and the queries behind them | No clicks |
| Microsoft Clarity | AIPlatform and PaidAIPlatform channels since August 2025, plus a Citations report | Citations mostly cover Copilot |

{{< a key="track-ai-traffic" >}}How to track AI traffic in GA4, Search Console and Microsoft Clarity{{< /a >}} goes through each setting, including a channel group that also sorts your older data.

I rely on Clarity to see where visitors engage the most, whether they came for something specific and which parts of a page make them leave. It tells me whether the copy, a picture or the layout is the problem, which is exactly what you need to know when a page gets AI visits but no enquiries. The {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity tutorial{{< /a >}} shows how to install it.

{{< callout type="note" >}}ChatGPT adds `utm_source=chatgpt.com` to the links it shows, which helps analytics tools recognise it. Not every link carries the tag: from 9 October 2026, many sites saw ChatGPT visits fall in GA4 while direct visits rose, and OpenAI had not announced any change at the time of writing. Read a sudden drop with caution.{{< /callout >}}

Then count what really matters: enquiries. Add "an AI assistant (ChatGPT, Gemini…)" to the "How did you hear about us?" options on your contact form, and ask the question on the phone. Analytics will always miss part of this traffic.

## What to ignore: GEO tricks and sales pitches

A new topic always attracts sellers. Here is what I would not pay for:

- Guaranteed placement in ChatGPT or AI Overviews. OpenAI says placement in ChatGPT search is not guaranteed, and Google says nobody can guarantee a top ranking. Answers change with each question and each user.
- An llms.txt file, "AI schema" or "chunked" rewrites sold as a package. Google says its AI features need none of them, and no other AI company has said it chooses sources because of them.
- Hundreds of AI-written pages, one per town or per question with the details swapped. That is the scaled content and doorway pattern Google's spam policies target.
- Fake reviews, bought mentions and planted forum posts, for the reasons in Step 3.
- A paid tracker before the basics. A tool can tell you that you are not mentioned; it cannot fix the reasons. Do Steps 1 to 4 first.

{{< callout type="warning" >}}If someone promises to "get you into ChatGPT" by a set date, ask which crawlers, which pages and which mentions they will work on. A vague answer usually means a vague result.{{< /callout >}}

## Your GEO plan for the next 90 days

You can do all of this yourself in a few hours a week:

1. Week 1, access and starting point: check robots.txt, Cloudflare and your website builder's crawler settings, verify your site in Search Console and Bing Webmaster Tools, submit your sitemap, and run the ten-question test from Step 4 once to record where you start.
2. Weeks 2 to 4, pages: one page per service with the answer first, your prices or price ranges, the areas you cover and real photos. Update your About and contact pages with facts an assistant can quote.
3. Month 2, proof: complete your Google Business Profile, ask your ten most recent clients for a review, align your directory listings and pitch one local journalist.
4. Month 3, test and measure: rerun the ten-question test, compare it with your starting point and check the AI channels in GA4 and Clarity.
5. Every month after that: rerun the test, update the pages where answers were wrong or missing, and date your changes.

### When to hand it over

If your site already covers the basics and you can spare an hour a month for the test, you do not need an agency for GEO. Hand it over when the fixes are technical (a platform that blocks crawlers, text that only appears through JavaScript), when many pages need rewriting, or when your time is better spent with clients. Most of the list above is SEO work, which is what my {{< a page="/services/seo" >}}SEO service{{< /a >}} covers.
