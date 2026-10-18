---
title: "Zapier vs Make vs n8n: which automation tool suits a small business?"
seo_title: "Zapier vs Make vs n8n: prices and which one to choose"
description: "Zapier vs Make vs n8n for a small business: October 2026 prices, what tasks, credits and executions really cost, AI steps, GDPR and which one to pick."
slug: "zapier-vs-make-vs-n8n"
translationKey: "zapier-vs-make-vs-n8n"
date: 2026-10-17T09:08:00+02:00
lastmod: 2026-10-17T09:08:00+02:00
category: "ai-automation"
article_type: "comparison"
keywords: ["Zapier vs Make", "Zapier vs Make vs n8n", "Make vs n8n", "n8n vs Zapier", "Zapier alternative", "self-hosted n8n"]
summary: "Zapier is the easiest of the three and has the longest list of ready-made app connections, but it bills every action as a task, so it usually costs the most as your volume grows. Make does the same work for less, with a visual editor that handles branches well. n8n bills each complete run whatever the number of steps, and its free self-hosted edition suits technical teams that want client data on a server they control."
cover: "zapier-vs-make-vs-n8n"
cover_alt: "The words Zapier vs Make vs n8n beside two compared panels and a vs badge, behind ribbed glass"
related: ["automate-lead-follow-up", "bespoke-crm-internal-app", "chatgpt-gdpr-client-data", "openai-api-tutorial", "claude-api-tutorial"]
services: ["automation"]
faq:
  - q: "Is Make the same as Integromat?"
    a: "Yes. Integromat, an automation platform founded in Prague, was renamed Make in 2022, after the German group Celonis bought it in 2020."
  - q: "Do Zapier, Make and n8n work with Gmail, Outlook and Google Sheets?"
    a: "Yes. All three have ready-made connections for Google apps such as Gmail and Google Sheets, and for Microsoft apps such as Outlook. When an app is missing, Make and n8n can call its API directly with an HTTP module or node, and Zapier can send and receive webhooks."
  - q: "Can I move my Zaps to Make or n8n later?"
    a: "Plan to rebuild them: Zaps, Make scenarios and n8n workflows are each built in their own editor. Rebuild one workflow at a time, test it with dummy data or with its emails sent to your own address, then switch it on and the old one off on the same day, so nothing runs twice."
  - q: "Is n8n open source?"
    a: "Not in the strict sense. Its code is public and the Community Edition is free to self-host, but its Sustainable Use License allows use only for your own internal business purposes or for non-commercial or personal use, so you cannot resell n8n as a service. n8n calls this model fair-code."
---

Zapier vs Make is often the first question when a small business wants its apps to work together, and n8n is now the third name on the list. All three do the same basic job: when something happens in one app (a form is sent, an email arrives, a row is added to a sheet), they carry out actions in others, without anyone copying and pasting.

The real differences are how each one bills you, how much it asks of you and where your data goes. Part of my work is automating the repetitive tasks of small businesses so their days get easier, and this comparison rests on what each tool publishes (its pricing unit, its plans at the time of writing in October 2026, its hosting and its licence) rather than on a benchmark. If you are still deciding which tasks are worth automating at all, start with my guide to {{< a key="ai-small-business-guide" >}}AI for small businesses{{< /a >}}.

## Zapier vs Make vs n8n at a glance (October 2026)

Each tool has its own word for an automation: Zapier builds Zaps, Make builds scenarios and n8n builds workflows.

| | Zapier | Make | n8n |
|---|---|---|---|
| Based in | United States | Prague, Czech Republic | Berlin, Germany |
| How you build | A list of steps, read top to bottom | Modules on a visual canvas, with branches | Nodes on a canvas, with code where needed |
| What you pay for | Tasks: each action that runs | Credits: each module that runs | Executions: each complete run |
| Free option | Free plan, 100 tasks a month | Free plan, 1,000 credits a month | Community Edition, hosted by you |
| Entry paid plan | Professional, from $19.99 (about £15) a month for 750 tasks | Core, from $9 (about £7) a month for 10,000 credits | Starter, €20 (about £17) a month for 2,500 executions |
| Self-hosting | No | No | Yes |
| Best for | Owners without technical help | Owners at ease with logic, on a budget | Technical teams, high volumes, data control |

Paid prices are per month on annual billing; paying monthly costs more. Zapier and Make list their prices in US dollars and n8n in euros, so the pound figures are conversions that move with the exchange rate.

## What you actually pay for: tasks, credits and executions

The headline prices are hard to compare, because the three tools do not count the same thing.

- **A task (Zapier)** is one action step that runs successfully. The trigger does not count. A Zap with one trigger and four actions uses four tasks each time it runs.
- **A credit (Make)** has been Make's billing unit since 2025, when it replaced operations. Each module that runs uses credits, usually one for a simple step and more for AI or heavier modules. The same automation in Make uses about five credits per run, trigger included.
- **An execution (n8n)** is one complete run of a workflow, whatever the number of steps. The same automation uses one execution per run.

Take a common automation: a contact form on your website triggers four actions. The enquiry goes into a Google Sheet, you get an email alert, the contact is created in your CRM and the prospect receives a confirmation. Here is what it uses at two volumes:

| Enquiries a month | Zapier | Make | n8n |
|---|---|---|---|
| 150 | 600 tasks: within Professional's 750 | About 750 credits: within the Free plan's 1,000 | 150 executions: within Starter |
| 600 | 2,400 tasks: a higher task tier | About 3,000 credits: within Core | 600 executions: within Starter |

These counts assume an instant trigger, such as a webhook that your form tool sends the moment someone submits it. In Make, a scheduled trigger also uses a credit each time it checks for new data, even when it finds none: Make's help centre puts a check every hour at 24 credits a day, about 720 a month, which would push the 150-enquiry example past the Free plan. On Zapier the trigger never counts, so those checks cost nothing.

The gap widens with longer workflows: ten actions use ten tasks per run on Zapier, at least eleven credits on Make (the trigger counts there), and still one execution on n8n. On paid plans, Zapier can bill tasks beyond your allowance at a higher rate rather than stopping your Zaps, so a busy month shows up on the invoice.

{{< callout type="tip" >}}Before you compare prices, write down two numbers for each automation you have in mind: **how many times it will run a month, and how many actions it has**. Multiply them for Zapier; for Make, add one for the trigger before multiplying; for n8n, only the first number counts.{{< /callout >}}

## Prices in October 2026

These are list prices at the time of writing (October 2026), per month on annual billing. Check the final amount, VAT included, at checkout: all three adjust their plans regularly.

### Zapier

| Plan | Price a month, billed annually | Tasks a month | What it adds |
|---|---|---|---|
| Free | $0 | 100 | Unlimited Zaps, with Tables and Forms |
| Professional | From $19.99 (about £15) | 750, more on higher tiers | The price rises with the task tier you pick |
| Team | From $69 (about £52) | 2,000 | Up to 25 users |

### Make

| Plan | Price a month, billed annually | Credits a month | What it adds |
|---|---|---|---|
| Free | $0 | 1,000 | For getting started |
| Core | From $9 (about £7) | 10,000 | The entry paid plan |
| Pro | From $16 (about £12) | 10,000 | Priority execution |
| Teams | From $29 (about £22) | 10,000 | Building as a team |

Each Make price is for 10,000 credits a month; more credits cost more.

### n8n

| Plan | Price a month, billed annually | Executions a month | What it adds |
|---|---|---|---|
| Community Edition | Free | Limited only by your server | Self-hosted: you install and maintain it |
| Starter | €20 (about £17) | 2,500 | Hosted by n8n |
| Pro | €50 (about £44) | 10,000 | More runs at the same time, admin roles |
| Business | €667 (about £580) | 40,000 | Single sign-on and Git version control |

n8n sets no limit on the number of active workflows: you pay for executions, not for the number of automations you keep switched on. The current figures are on [Zapier's pricing page](https://zapier.com/pricing), [Make's pricing page](https://www.make.com/en/pricing) and [n8n's pricing page](https://n8n.io/pricing/).

## Ease of use: who can build what

### Zapier: the gentlest start

A Zap reads like a recipe: one trigger, then the actions, each with a short form to fill in. Branches exist (Zapier calls them Paths), but the editor stays a list. With the longest list of ready-made connections, the app you need is very likely there: for a solo owner without technical help, it is the shortest path to a working automation.

### Make: a map of your process

In Make, a scenario is drawn on a canvas: each module is a circle linked to the next, and a router splits the flow into branches, say one for quote requests and one for everything else. There is more to learn than in Zapier, mainly how data travels between modules (in packets Make calls bundles), but you see the whole process on one screen.

### n8n: built for technical teams

n8n also works on a canvas, with nodes instead of modules. The difference shows when no ready-made node does what you need: a Code node runs JavaScript or Python, and the HTTP Request node can call almost any API. n8n describes itself as a tool for technical teams, and that is a fair summary.

I usually discourage solo business owners from WordPress and Webflow, because the learning curve is steep and they end up having to become their own webmaster. The same logic applies here: Zapier asks the least of you, Make a little more, and n8n pays off most when someone on your side is comfortable with code.

## AI steps and agents in Zapier, Make and n8n

All three now sell AI features, and what they cost follows each tool's pricing unit.

- **Zapier** offers AI steps inside Zaps, and Zapier Agents, which work from instructions written in plain language. An AI step inside a Zap is an action like any other, so it uses tasks.
- **Make** has its AI Toolkit and AI agents of its own. AI modules can use more credits than a simple step, so a scenario with AI spends its allowance faster.
- **n8n** has an AI Agent node that you connect to the model of your choice, from OpenAI, Anthropic or another provider. The AI calls happen inside the workflow, so they add no executions, and the model's provider bills you directly through your own API key.

A good first AI step for a small business: read each website enquiry, label it (quote request, support question, spam) and send it to the right place. Whichever tool you pick, connecting your own model means creating an API key with a spending limit: my tutorials on the {{< a key="openai-api-tutorial" >}}OpenAI API key{{< /a >}} and the {{< a key="claude-api-tutorial" >}}Claude API key{{< /a >}} show how to create one and cap the budget.

{{< callout type="note" >}}Keep a person between the AI and your clients. In my experience, Claude is more accurate than ChatGPT, which tends to make things up a bit too often, but no model is right every time: **an AI step can label, sort and draft; a human checks before anything is sent.**{{< /callout >}}

## GDPR: where your clients' data goes

An automation that handles enquiries carries personal data: names, email addresses, phone numbers, sometimes the details of a project. The tool processes that data on your behalf, which makes it your processor under the UK GDPR and the EU GDPR: you need a data processing agreement (DPA) with it, read before you connect anything.

Three points separate the three tools:

1. **Where the data is processed.** n8n's cloud is hosted in Frankfurt, Germany, and the Community Edition runs wherever you install it, so your data can stay on a server you choose. Make keeps each organisation in a data zone, in the EU (EU1, EU2) or the US (US1, US2), and your dashboard address shows which, eu1.make.com for example: pick an EU zone when you sign up rather than move later. Even then, [Make's help page on data zones](https://help.make.com/ai-providers-and-data-zones-in-make) warns that some of its AI features always send data to the US. Zapier is an American company: check in its DPA how transfers outside Europe are covered.
2. **What the run history keeps.** Each tool keeps a log of past runs with the data that passed through them. That log is useful for fixing errors, and it is also one more copy of your clients' details: check how long it is kept and who on your team can open it.
3. **What you send.** Pass on only the fields the next app needs. An alert that says "new enquiry, call back today" does not need the whole message.

Access deserves the same care. For an automation like the internal app I built for a client, I need access to the mailbox, for example. Any tool you connect gets similar access to your accounts, so give it the narrowest permissions on offer, use a business account rather than a personal one, and remove connections you no longer use.

If an AI step reads your enquiries, the model's provider receives them too. What you can and cannot send is covered in {{< a key="chatgpt-gdpr-client-data" >}}ChatGPT and GDPR: what client data you can put into an AI assistant{{< /a >}}. This section is general information, not legal advice.

## Self-hosting n8n: free software, not free work

The Community Edition is the free, self-hosted version of n8n, distributed under n8n's own licence, called the Sustainable Use License. You install it on a server you rent or own, and n8n charges nothing for it. In exchange, five jobs become yours:

1. **The server**: choosing it, paying for it and sizing it for your volumes.
2. **Updates**: new versions bring fixes and security patches, and someone has to install them.
3. **Backups**: of the workflows and of the credentials that connect your accounts.
4. **Security**: the server holds the keys to your mailbox, CRM and spreadsheets, so protect it like any server holding client data.
5. **Monitoring**: if it stops at two in the morning, your automations stop with it until someone notices.

With a developer on the team or a provider on call, self-hosting is a sensible way to run high volumes for the price of a server. Without one, n8n Cloud or Make gives you most of the benefit without the sleepless nights.

## Zapier, Make or n8n: which one to choose

**Choose Zapier** if you work alone or with a non-technical team, want the gentlest start and the widest choice of apps, and run modest volumes. You pay for that comfort as your volume grows.

**Choose Make** if you are at ease with a bit of logic, your processes have branches, and you want more runs for your money. For a small business that has outgrown Zapier's entry plan, it is usually the cheaper next step.

**Choose n8n** if you run long workflows or high volumes, want AI agents with the model of your choice or your data hosted in Germany, and someone on your side is comfortable with technical tools. Take the self-hosted edition only if a developer or a provider will own the server, the updates and the backups.

**Choose none of them** if all you need is one alert when a form arrives. A short Google Apps Script can do it for free: my tutorial to {{< a key="automate-lead-follow-up" >}}automate lead follow-up{{< /a >}} sets up an instant alert and a call-back reminder without any subscription.

### When a custom app makes more sense

Connector tools are at their best moving data between apps you already use, less so when a team needs one place to see and act on everything. For {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, an air conditioning installer in Paris and the Île-de-France, I brought in more prospects than the team could handle, and they asked me for an app to see everything clearly and never miss calling a prospect back. I custom-coded an internal tool that manages prospects, job sites, communication with the employees, the calendar and accounting analytics, with AI and phone integrations. My guide to a {{< a key="bespoke-crm-internal-app" >}}bespoke CRM{{< /a >}} explains when your own app beats an off-the-shelf tool.

I also build software for my own use, not for sale, so I know what it feels like to need something specific and build the solution. A custom app is still a bigger project than a Zap, though: start with a connector tool, and move on only when it gets in your way.

## Before you automate: a five-step checklist

1. **Pick one task you already repeat every week** and write down its steps. Automate what you do now, not a process you hope to have one day.
2. **Count the runs and the actions** to see which plan you need, as in the table above.
3. **Check that your apps are supported** with the exact triggers and actions you need, not just listed by name.
4. **Build it on the free plan or the cheapest tier** and run it on real data for two weeks, with error notifications switched on.
5. **Name an owner and settle the data questions**: who receives the error emails, a signed DPA, and only the fields you need passing through.

Then stay with the tool you chose. Switching every time one of them launches a new AI feature is the trap I describe in {{< a key="shiny-object-syndrome" >}}shiny object syndrome{{< /a >}}: it is easy to fall for new tools, and the results come from focusing on the ones you already run.

You do not need me to build a first Zap or scenario: a free plan and an afternoon are enough. When your automations start to carry your sales process, with several people relying on them every day, that is the time to bring in help or to consider an app of your own.
