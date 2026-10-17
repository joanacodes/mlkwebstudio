---
title: "How to get your business recommended by ChatGPT and other AI assistants"
seo_title: "How to get recommended by ChatGPT: a small business guide"
description: "Get recommended by ChatGPT: what it needs to find, trust and name your business, from robots.txt and service pages to reviews, local press and monthly tests."
slug: "get-recommended-by-chatgpt"
translationKey: "get-recommended-by-chatgpt"
date: 2026-10-17T08:25:00+02:00
lastmod: 2026-10-17T08:25:00+02:00
category: "aio"
article_type: "guide"
keywords: ["get recommended by ChatGPT", "ChatGPT business recommendations", "appear in ChatGPT search", "OAI-SearchBot", "local business AI search"]
summary: "ChatGPT recommends businesses it can find, understand and see confirmed on other sites. Let OAI-SearchBot crawl your site, give each service and each town you cover a clear page, then earn proof elsewhere: a complete Google Business Profile with genuine reviews, consistent directory listings and mentions in the local press. Nobody can sell you a guaranteed place in the answer, so test your customers' questions every month and fix what is missing."
cover: "get-recommended-by-chatgpt"
cover_alt: "Search bar above a list of results, the first one highlighted, with the word ChatGPT"
related: ["check-ai-visibility", "robots-txt-ai-crawlers", "local-seo-guide", "google-business-profile-setup", "get-press-coverage"]
services: ["seo"]
faq:
  - q: "Can I pay to be recommended by ChatGPT?"
    a: "No. Since June 2026, ChatGPT has shown ads in the UK to users on its Free and Go plans, but they sit below the answer and are labelled as sponsored. When it announced ads in January 2026, OpenAI said they would not influence ChatGPT's answers: the recommendation itself is not for sale."
  - q: "How long does it take for ChatGPT to recommend my business?"
    a: "There is no set delay. OpenAI says a robots.txt change reaches ChatGPT search in about 24 hours, but being named depends on the same groundwork as SEO: clear pages and proof on other sites. Google's own advice on hiring an SEO says it usually takes four months to a year to make improvements and see a benefit, a fair horizon here too."
  - q: "Can ChatGPT recommend a business that has no website?"
    a: "Yes, if other sites describe it well: a complete Google Business Profile, directory listings, reviews and press articles. But your website is the only source you control, and the one place where your services, towns and prices read exactly as you want them repeated."
  - q: "Why does ChatGPT give wrong information about my business?"
    a: "Usually because it found too little, or sources that disagree: an old address in a directory, a closed branch, prices that differ from one page to another. Correct the sources, keep your name, address, phone number and services identical everywhere, then check the answer again a few weeks later."
  - q: "Do I need an llms.txt file to appear in ChatGPT?"
    a: "No. No major AI provider has confirmed that it reads llms.txt, and OpenAI's conditions for appearing in ChatGPT search are that OAI-SearchBot can crawl your site and that your host accepts its traffic. The file does no harm, but it is not a shortcut."
  - q: "Does the same work help with Gemini, Claude and Perplexity?"
    a: "Yes. Gemini and Google's AI Mode draw on Google Search, while Claude and Perplexity send their own search crawlers (Claude-SearchBot and PerplexityBot). The same groundwork helps with each: clear pages and a business that other sites confirm. Allow those crawlers in your robots.txt too."
---

Some of your customers no longer start with Google. They open ChatGPT and ask "Who's a reliable electrician in Croydon?" or "Which cleaning company in Clapham does end-of-tenancy cleans?", and it answers with a handful of names, often with links to where it found them. To get recommended by ChatGPT, your business has to be one of those names: ChatGPT must be able to reach your site, understand what you do and where, and see other sites confirm it.

There is no form to fill in and no place in the answer you can buy. Most of the work is the groundwork of good local SEO, and you can do the bulk of it yourself in a month. I use Claude for my own work, partly because in my experience ChatGPT makes things up a bit too often. That is exactly why the groundwork matters: when an assistant cannot find clear facts about you, it leaves you out or it guesses.

This article is part of my {{< a key="ai-search-geo-guide" >}}complete guide to generative engine optimisation{{< /a >}}, which also covers Google's AI features, Perplexity and Claude.

## How ChatGPT chooses which businesses to recommend

ChatGPT can answer from two places. The first is what its model learned in training, from pages collected months earlier. The second is a live web search, which it runs when a question needs current or local information, such as a tradesperson in a given town. For that kind of question, the search is what counts: a business that opened last year may not be in the training data at all, but it can still turn up in a live search.

OpenAI runs a separate crawler for each job ([OpenAI's crawler documentation](https://developers.openai.com/api/docs/bots)):

| Crawler | Its job |
|---|---|
| OAI-SearchBot | Finds and reads pages for ChatGPT's search answers |
| GPTBot | Collects pages to train future models |
| ChatGPT-User | Visits a page when a user's request needs it, for example to open a link |

The one that decides whether you can be recommended in a search answer is **OAI-SearchBot**. Block it and your pages drop out of ChatGPT's search answers, apart from a bare link at most. Blocking GPTBot keeps your pages out of future training but has no effect on search.

OpenAI's help centre sets two conditions. Any public website can appear in ChatGPT search, provided OAI-SearchBot is allowed and your host or CDN accepts traffic from OpenAI's published IP addresses ([OpenAI's help article](https://help.openai.com/en/articles/9237897-chatgpt-search)). To build an answer, ChatGPT may also send a rewritten version of the question to third-party search providers, and OpenAI does not publish how much weight it gives each source.

Nobody outside OpenAI knows the exact recipe. What is known points to three jobs: be reachable, be clear and be confirmed by other sites.

{{< callout type="note" >}}**Nobody can guarantee you a recommendation.** OpenAI's own help centre says placement is not guaranteed. An agency or a tool that promises a guaranteed place in ChatGPT's answers is selling something OpenAI does not offer.{{< /callout >}}

## Step 1: make sure ChatGPT can reach your site

Open yourdomain.co.uk/robots.txt in a browser. This small text file tells crawlers what they may read. Look for the names OAI-SearchBot and GPTBot, and for a `User-agent: *` group followed by `Disallow: /`, which shuts out every crawler. If neither bot is named and nothing blocks everyone, both are allowed by default.

To make it explicit, these lines allow both:

```
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /
```

Refusing GPTBot to keep your content out of training is a fair choice. For a small business that wants customers, though, I would allow both, as I do on this site: what a model learned in training is part of what it knows about you when it answers without searching. OpenAI says robots.txt changes take about 24 hours to reach its search systems.

Then check the blocks that a website builder, a host or a developer may have added without telling you:

- **Cloudflare.** If your site runs through Cloudflare, open its AI crawler settings. Since 1 July 2025, Cloudflare has blocked known AI crawlers by default on newly added domains, and an older site can have the block switched on in one click. A block there overrides whatever your robots.txt says, so check that OAI-SearchBot is allowed.
- **Squarespace.** Under **Settings > Crawlers**, the "Block known artificial intelligence crawlers" option is off by default; leave it off.
- **Content that needs JavaScript.** Crawlers such as GPTBot, ClaudeBot and PerplexityBot do not run JavaScript, so text that only appears once scripts have run may be invisible to them. Your services, towns and phone number belong in the page's HTML.

One more free step: add your site to Bing Webmaster Tools, which can import it from Google Search Console. Its AI Performance report shows when Microsoft Copilot cites you, and if Bing is among the search providers ChatGPT consults, your site is covered there too. My tutorial on {{< a key="robots-txt-ai-crawlers" >}}robots.txt for AI crawlers{{< /a >}} lists the other assistants' bots and gives ready-made files.

## Step 2: say clearly what you do and where

Once ChatGPT reaches your site, it has to understand it. A question such as "emergency boiler repair in Lewisham" is best answered by a page that says exactly that, and vague pages lose out. I have seen the same on Google with two companies run by the same founder: Ginov sold a long list of building trades, a catch-all, and closed, while Pilotech sells something very specific and took off. **A page that tries to cover everything answers no question well.**

Give each service its own page, and put on it the facts an assistant needs to recommend you:

1. What you do, in your customers' words, in the first two sentences.
2. Where you work: the towns or boroughs you cover, named in full.
3. Who it is for: homeowners, landlords, offices, restaurants.
4. How pricing works: a price range, a call-out fee or a starting price, if you are willing to publish one.
5. Lead times and opening hours.
6. Proof: photos of your own work, genuine reviews, accreditations.
7. How to reach you: a phone number written as text, not only a contact form.

Then make your details identical everywhere: the same business name, address, phone number and list of services on your site, your Google Business Profile, your directory listings and your social profiles.

To know which questions your pages should answer, I use deep research tools to find what people in a niche complain about most and which words keep coming back. The questions customers ask you on the phone are often the ones they type into ChatGPT. For Pilotech, the SEO work went in this order: pages first, then content, then the Google Business Profile, then technical fixes. I would follow the same order for AI assistants.

## Step 3: get your business confirmed by other sites

Your site states what you claim; other sites tell an assistant whether to believe it. Two studies show where that proof tends to come from. Peec AI found in March 2026 that Reddit, YouTube, LinkedIn and Wikipedia are the sites AI assistants cite most, with a different mix for each engine. Ahrefs, studying 75,000 brands, found that the number of web pages mentioning a brand was the factor most closely linked to visibility in Google's AI Overviews, with a correlation of 0.664. A correlation does not prove cause, and AI Overviews are not ChatGPT, but both point the same way: what others write about you counts.

For a small business, that proof comes from four places:

- **Your Google Business Profile.** Fill in every field, choose the right categories, list your services and areas, add real photos and answer every review. It feeds Google's local results and the panel shown when someone searches your name, and Google's own AI answers draw on Google Search. My {{< a key="google-business-profile-setup" >}}Google Business Profile setup guide{{< /a >}} covers each step.
- **Reviews.** Ask every satisfied customer, by text or email, with a direct link. Customers ask assistants who is reliable, and reviews are the most direct evidence there is. Never buy reviews or write them yourself.
- **Directories and trade bodies.** Your country's main directories and your trade's own (Yell or Checkatrade for a UK tradesperson, for example), your trade association and any official register, such as the Gas Safe Register for a gas engineer. A few accurate listings beat dozens of half-filled ones.
- **Press and mentions.** Start with your local paper, then the regional press, then national titles. I am no PR specialist and barely tried, yet a short, well-targeted pitch got a friend who is a personal trainer into a national French magazine. You do not need followers, only something worth writing about and a page that shows your work. My guide on {{< a key="get-press-coverage" >}}how to get press coverage{{< /a >}} explains how to pitch.

"I have 10k followers on Instagram" says far less than "this magazine published a whole article about my business", to customers and to assistants alike. Genuine help on Reddit or LinkedIn counts too; recommending yourself under a fake name does not.

## How to get recommended by ChatGPT as a local business

Many of the recommendations people ask for are local, from an electrician in Croydon to a cleaner in Clapham. The three steps stay the same, with four local habits on top.

**Name the towns.** ChatGPT matches the place in the question, and it may pass a general location, based on the user's IP address, to its search providers. A page that says "we cover south London" is weaker than pages that name Clapham, Brixton and Balham and say what you do there.

**Build town pages only where you really work.** For Eden Flats, an Airbnb concierge in the Paris region, I built {{< a page="/projects/eden-flats" >}}pages for individual towns{{< /a >}} such as Créteil and Saint-Maur-des-Fossés, each presenting the service in that town. Once the new site and its SEO were live, property owners started calling. Each town page needs something specific to the place: the areas covered, local jobs, how quickly you get there. Near-identical pages with only the town name swapped are what Google's [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) call doorway abuse, and they tell an assistant nothing new either.

**Start with the local paper.** An article in your town's paper or on a local news site ties your name to a place, and it is far easier to get than national coverage.

**Test by service and town.** Ask the way a customer would: "end of tenancy cleaning in Clapham", "boiler repair in Lewisham this week". Then ask the follow-ups real customers ask, such as who has the best reviews or who can come on Saturday. My {{< a key="local-seo-guide" >}}local SEO guide{{< /a >}} covers the Google side of this work.

## How to check whether ChatGPT recommends you

Once a month, open ChatGPT in a private window, logged out, and ask the ten questions your customers ask most, with exactly the same wording each time. Note which businesses are named, whether you are among them, what is said about you and which sources are linked. Staying logged out matters, because an account's memory and history can colour the answer. Answers also vary from one try to the next, so ask each question twice and look for a pattern rather than reacting to a single answer.

The sources are the useful part. If ChatGPT names a competitor and links to a directory or an article where you are missing, you know where to be next. My tutorial on how to {{< a key="check-ai-visibility" >}}check your AI visibility{{< /a >}} shows how to log the results month by month and which paid trackers exist.

{{< callout type="tip" >}}**Ask ChatGPT about yourself.** A question such as "What do you know about [your business name] in [your town]?" shows what it has found about you, and the sources it lists show where any mistake comes from.{{< /callout >}}

Then watch your analytics. ChatGPT adds `utm_source=chatgpt.com` to the links people click in its answers, so its visits can be counted in Google Analytics ([OpenAI's publisher FAQ](https://help.openai.com/en/articles/12627856)). Count enquiries as well: someone who got your name from ChatGPT may simply call. In my experience, people would rather call than write, because it is quicker. My tutorial on how to {{< a key="track-ai-traffic" >}}track AI traffic in GA4{{< /a >}} shows where to look.

## What will not get you recommended

- **Extra structured data on its own.** Structured data helps search engines read your details, but an Ahrefs study published in May 2026, comparing 1,885 pages that added it with 4,000 that did not, found no meaningful rise in AI citations.
- **Fake reviews and copy-paste town pages.** They break Google's rules, and thin or contradictory signals are exactly what makes an assistant unsure about you.
- **A new tool every month.** AI search has brought its own shiny objects: trackers, "GEO packages", prompt tricks. It is easy for a small team to fall for them. Fix the basics on the channels you already use first; that is where results come from.

## Your four-week plan

1. **Week 1:** check your robots.txt, Cloudflare and your website builder's crawler settings, then add the site to Bing Webmaster Tools.
2. **Week 2:** give each service its own page, with towns, a price range, lead times and a phone number in plain text.
3. **Week 3:** complete your Google Business Profile, correct your three or four main directory listings and ask your recent customers for reviews.
4. **Week 4:** send a short pitch to your local paper, run your ten test questions in a private window and note the results.
5. **Every month after that:** run the same questions again and fill the gaps the sources reveal.

You do not need an agency for most of this: the four weeks above get you most of the way. If you would rather hand it over, this groundwork is what my {{< a page="/services/seo" >}}SEO service{{< /a >}} is built on.
