---
title: "Build an app with AI without being a developer: what is realistic"
seo_title: "Build an app with AI without coding: what's realistic"
description: "Build an app with AI without coding: what you can make alone with Claude, Lovable or Bolt, and when to stop (personal data, logins, payments, upkeep)."
slug: "build-app-with-ai"
translationKey: "build-app-with-ai"
date: 2026-10-17T09:05:00+02:00
lastmod: 2026-10-17T09:05:00+02:00
category: "ai-automation"
article_type: "guide"
keywords: ["build an app with AI", "vibe coding", "build an app without coding", "AI app builder", "Claude Artifacts", "Claude Code"]
summary: "Yes, you can build an app with AI without being a developer if it stays a small tool for you or your team, such as a quote calculator, a checklist or a dashboard, made with Claude's Artifacts or a vibe-coding builder such as Lovable or Bolt. Call a developer once the app stores clients' personal data, has customer logins, takes payments or has to run every day: the AI writes the code, but the responsibility for security and maintenance stays with you."
cover: "build-app-with-ai"
cover_alt: "A person at a desk seen through ribbed glass, with a blueprint grid, a target and the words Vibe coding"
related: ["bespoke-crm-internal-app", "build-website-with-ai", "claude-api-tutorial", "chatgpt-gdpr-client-data", "spaceship-hosting"]
services: ["automation"]
faq:
  - q: "Is vibe coding the same as no-code?"
    a: "No. No-code tools such as Bubble, Glide or Softr let you assemble an app from ready-made blocks inside their own platform. Vibe coding has an AI write real code from your description: you get more freedom, and with it the code's bugs and upkeep."
  - q: "Can I use ChatGPT instead of Claude to build an app?"
    a: "Yes. Any capable AI assistant can write a single-page tool from the same description. I use Claude because, in my work, ChatGPT tends to make things up a bit too often, while Claude, and its Fable 5.1 model in particular, has been extremely accurate."
  - q: "Can I move an app built with Lovable or Bolt to my own hosting?"
    a: "Usually, if the builder lets you export the code or connect it to GitHub. The database and the user accounts have to move with it, so plan for a developer's help rather than a one-click move."
  - q: "Can I build a mobile app with AI?"
    a: "Most AI builders make web apps, which open in the phone's browser and can be added to the home screen like an app. Publishing in the App Store or Google Play adds developer accounts, store reviews and fees: that part is a job for a developer."
---

You can build an app with AI without being a developer, as long as it stays small: a tool for you or your team, with no client data, no customer logins and no payments. A quote calculator, a checklist for site visits or a dashboard that turns a spreadsheet export into three numbers are all within reach from a description in plain English.

Beyond that line, the AI still writes the code, but someone has to answer for what the app does with other people's data and money. That someone is you, unless you hand it over.

I build software for my own use, not for sale, so I know what it feels like to need a tool and build it, and how satisfying that is. AI has also shortened my delivery times for clients, which sometimes leaves room for more complete solutions. This guide sets out what an owner can realistically make without a developer in October 2026, with which tools, and where to stop. It belongs to my guide to {{< a key="ai-small-business-guide" >}}AI for small businesses{{< /a >}}, which covers the other uses worth your time.

## What building an app with AI means in 2026

Vibe coding means building software by describing what you want in plain words, letting an AI write the code, and correcting the result by asking for changes rather than by reading the code. Three families of tools do it, and they are not interchangeable.

- **An assistant that builds inside the chat.** Claude's Artifacts turn a description into a small interactive tool that you open in Claude, and they come with every Claude plan, the free one included. An artifact can even call Claude itself: according to Anthropic's [help page on Artifacts](https://support.claude.com/en/articles/9487310-what-are-artifacts-and-how-do-i-use-them), that needs no API key and costs its creator nothing, because each user's usage counts against their own plan. On paid plans, an artifact can also keep up to 20 MB of text between sessions, private to each person or shared by everyone who opens it.
- **Vibe-coding builders.** Lovable, Bolt, v0 and Base44, the start-up Wix bought in June 2025, generate a complete web app from a chat, often with a database and user accounts, and put it online for you. Lovable, Bolt and v0 mostly produce React or Next.js projects, which need a build step before they can run anywhere else.
- **A coding agent.** Claude Code, included in the Claude Pro plan, works directly on a project's files. In Anthropic's words: "Describe what you want and it plans, writes code, runs tests, and opens pull requests." It gives you the most control of the three, and it is the least forgiving if files, folders and version control mean nothing to you.

## What you can build alone

The tools that work without a developer share four traits: one user or a handful, data that belongs to you rather than to your clients, no money changing hands, and no harm done if the tool stops for a day. Within those limits, a lot is possible:

- **A quote calculator** built from your own price list: surface area, options, minimum charge, VAT, and a button that copies the result into an email.
- **A checklist** for a site visit, a new client's onboarding or the end-of-month routine, ticked off on your phone.
- **A small dashboard**: paste an export from your accounting or booking software and get monthly totals and a chart.
- **A text tool** that turns your notes into a formatted follow-up email or a job sheet.
- **A planning board** for the week's jobs or a staff rota.

In each case a mistake costs you a few minutes, not a client, which makes these the right place to learn. It is also easy to fall for the newest builder and chase the tool instead of the problem. Start from a task you already do every week, and build for that one.

## Which AI tool to use for which project

| | Claude Artifacts | Lovable, Bolt, v0, Base44 | Claude Code |
|---|---|---|---|
| How you work | You describe the tool in a Claude chat | You describe the app in the builder's own chat | You describe changes, it edits the project's files |
| Where the app runs | Inside Claude | On the builder's hosting, at a web address | Wherever you host the files |
| Who can open it | People with a Claude account | Anyone with the address | Anyone, once you publish it |
| What it costs | Included in every Claude plan | Usually a free allowance, then a monthly plan metered in credits or tokens | Included in Claude Pro |
| Best for | A tool for you or your team | A prototype to show a partner or a developer | A small project whose code you want to keep |

Claude Pro costs $20 a month in the US at the time of writing (October 2026), or $17 a month billed annually, before tax, on [Claude's pricing page](https://claude.com/pricing). Anthropic bills in local currency where it can but publishes no pound price, so check the amount at checkout. The builders' plans change regularly and they meter usage, so a project with many rounds of changes costs more than the headline price: read their pricing pages before you start.

My advice for a first project: start with an artifact. Move to a builder when you need to show a working prototype to someone else, and to Claude Code when you want to own every file.

## How to build an app with AI: a first project in six steps

Take a painter and decorator who prices every job by hand. The method is the same for any small tool.

1. **Describe the problem in two sentences**: who uses the tool, what goes in, what comes out. "I price painting jobs on site from the wall area and the number of coats, and I want the total with VAT on my phone."
2. **Gather the real numbers**: your price list, minimum charge, VAT rate and rounding rules. If you do not give an AI your prices, it will happily invent plausible ones.
3. **Ask for one page, with no database and no login.** The smaller the request, the fewer places a bug can hide. In Claude, artifacts need **Cloud code execution and file creation** switched on in **Settings > Capabilities**.

```text
Build a quote calculator as a single HTML page for a painter and decorator.
Inputs: wall area in m², number of coats (1 or 2), ceiling included (yes/no).
Prices: walls [your price] per m² per coat, ceilings [your price] per m²,
minimum charge [your minimum].
Show the price before VAT, VAT at 20% and the total, rounded to the pound.
Add a "Copy as text" button with a short summary I can paste into an email.
UK English. No login, no database, no external services.
```

4. **Test it against three jobs you have already priced.** If the tool says £1,180 where your own quote said £1,250, give it both figures and ask it to explain its calculation before it changes anything.
5. **Ask for one change at a time**, and keep a copy of every version that works, with the date in the file name.
6. **Decide where the tool will live and who will maintain it** before anyone else relies on it.

{{< callout type="tip" >}}Ask the AI to list the assumptions it made at the bottom of the tool: rounding, VAT, minimum charge. A wrong assumption is much easier to spot in a list than in a total.{{< /callout >}}

## Where your app will live, and who can open it

This choice matters more than the tool.

**Inside Claude.** An artifact starts private, and the **Share** button lets you choose who has access. Anthropic's help centre is clear on two points. Everyone who opens a shared artifact needs a Claude account, even with the link. And an artifact that uses Claude or your connected apps cannot be opened by anyone who simply has the link: you invite people by email or, on a Team or Enterprise plan, share it with your organisation. That makes an artifact a good home for a team tool and the wrong one for your customers.

**On your website.** A single-page tool with no server, like the calculator above, is just a file. It can sit on your site or on simple hosting such as GitHub Pages or Spaceship. My tutorial on how to {{< a key="build-website-with-ai" >}}build a website with AI{{< /a >}} covers publishing on GitHub Pages with your own domain, and my guide to {{< a key="spaceship-hosting" >}}Spaceship hosting{{< /a >}} explains which product suits which site. GitHub's rules keep Pages for sites, not for online shops or software sold as a service.

**On the builder's hosting.** It is the fastest way to put a builder's app online, and the one that ties you most closely to that builder's plan.

The quote and ordering app I built into {{< a page="/projects/edenel-nettoyage" >}}Edenel Nettoyage's website{{< /a >}} shows how far a page with no server of its own can go. A simulator prices each job from the same price list as the pricing page, quotes and invoices are generated as PDF files in the browser, and the order history stays on the client's own device. It was a studio project, not a weekend experiment, but the principle carries over: **the less your app keeps on a server, the less there is to protect**.

## Where a DIY app stops: data, logins, payments and upkeep

The AI writes the code either way. What changes at this line is who answers for the consequences.

### Your clients' personal data

As soon as the app stores names, phone numbers, addresses or anything else about your clients, UK GDPR applies to that data. You decide what you collect, who can read it, where it is stored and when it is deleted, and the ICO's guidance on [privacy in the product design lifecycle](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/designing-products-that-protect-privacy/privacy-in-the-product-design-lifecycle/) is written for exactly this stage. If the data leaks and the breach puts people at risk, you must report it to the ICO within 72 hours of finding out.

Two traps catch owners who build their own tools. Shared storage in an artifact shows the same data to everyone who opens it, so keep client details out of it. And test data pasted into an AI chat is still client data: my guide on {{< a key="chatgpt-gdpr-client-data" >}}what client data you can put into an AI assistant{{< /a >}} covers that second point.

### Logins and security

Logins and databases are where vibe-coded apps go wrong most visibly. In 2025, a researcher scanned 1,645 apps from Lovable's public showcase and found 170 that let outsiders read data such as email addresses, because the access rules on their databases (row level security) were missing or too weak. The case is recorded as [CVE-2025-48757](https://nvd.nist.gov/vuln/detail/CVE-2025-48757), and Lovable disputes it on the grounds that each customer is responsible for protecting their own app's data. Whoever is right, the lesson is the same: the builder writes the code, and the responsibility stays with you.

API keys are the other classic leak. An app that calls an AI model needs a key, and a key placed in a web page can be read by every visitor; my {{< a key="claude-api-tutorial" >}}Claude API tutorial{{< /a >}} explains where to keep one. An artifact that calls Claude avoids the problem, because it needs no key at all.

### Payments

Never let an AI write your card payment form. Card data comes with its own security standard (PCI DSS), and a payment provider's hosted checkout page or payment link, from Stripe or PayPal for example, keeps card numbers on the provider's side and out of your app. If your tool needs to take money, send people to that page.

### Upkeep

An app is never finished. Browsers change, the libraries the code depends on are updated, a builder changes its plans, and six months later nobody remembers why the tool rounds that way. I say the same about websites built for a friend: a site is not a one-off gift, it comes with maintenance for life. An app your team uses every day needs a named person who can fix it on a Monday morning.

{{< callout type="warning" >}}If you cannot say who will fix the app when it breaks, it is not ready for anyone but you.{{< /callout >}}

## When to hand it over to a developer: a checklist

You do not need me, or any developer, for the tools in the first list: build them, test them with real numbers and keep a copy. Call a developer, or at least have the code reviewed, as soon as one of these is true:

- Customers, not just you and your team, will log in or type in their details.
- The app stores personal data on a server.
- It takes payments or produces documents with legal weight, such as invoices.
- It connects to your mailbox, your phone system or your accounts.
- Your team's day stops when the app stops.
- It runs on its own, on a schedule, with nobody watching.
- You can no longer predict what a change will break.

That list describes the app I built for Pilotech. I had brought the company more prospects than its team could handle, and the client asked for a tool to see everything clearly and never miss a call-back. The result is custom-coded: it manages prospects, job sites, communication with employees, the calendar and accounting analytics, with AI and phone integrations, and an automation like that needs access to the client's mailbox, for example. I tell that story in {{< a key="bespoke-crm-internal-app" >}}bespoke CRM for a small business{{< /a >}}.

AI made that kind of project faster to deliver; it did not remove the need for someone who answers for it. When I build an app for a client, 30% or 50% is paid upfront and the rest on delivery.
