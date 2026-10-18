---
title: "Best email provider for cold email: Google vs Microsoft vs Spacemail"
seo_title: "Best email provider for cold email: my 2026 verdict"
description: "Best email provider for cold email: Microsoft 365, Google Workspace and Spacemail compared on deliverability, set-up, limits, rules and price per mailbox."
slug: "best-email-provider-cold-email"
translationKey: "best-email-provider-cold-email"
date: 2026-10-17T08:35:00+02:00
lastmod: 2026-10-17T08:35:00+02:00
category: "cold-emailing"
article_type: "comparison"
keywords: ["best email provider for cold email", "Google Workspace vs Microsoft 365 for cold email", "Spacemail for cold email", "Outlook vs Gmail for cold email", "cold email mailbox provider"]
summary: "In my experience, Microsoft 365 works very well for cold email but is tricky to set up, Google Workspace does worse, and Spacemail, Spaceship's email service, is the one I encourage: easy to set up and the cheapest, at under $1 (less than £1) a mailbox a month. The catch is Spaceship's rules, which count email to anyone who has not opted in as unsolicited and forbid automated warm-up, so get Spaceship's agreement in writing before you connect Spacemail to a sending tool."
cover: "best-email-provider-cold-email"
cover_alt: "A hand holding a phone open on an email inbox, beside two compared panels and the words Google vs Microsoft"
related: ["cold-email-infrastructure", "spacemail-setup", "instantly-ai-tutorial", "professional-email-address", "spf-dkim-dmarc-setup"]
services: ["cold-emailing"]
faq:
  - q: "Can I send cold email from a free Gmail or Outlook.com address?"
    a: "Not for a campaign. You cannot add SPF, DKIM or DMARC records to gmail.com or outlook.com, so you control none of the authentication. Send from mailboxes on secondary domains close to your brand, never from your main domain; [MLK Leadhunters explains why](https://mlkleadhunters.com/blog/never-send-from-your-main-domain/)."
  - q: "Can I mix Google, Microsoft and Spacemail mailboxes in one campaign?"
    a: "Yes. Instantly connects each mailbox separately (Google and Microsoft by signing in, other providers by IMAP and SMTP), and one campaign can send from all of them. Spreading mailboxes over several providers and domains also means a single problem does not stop the whole campaign."
  - q: "How many mailboxes should I put on each sending domain?"
    a: "A few. My cold email infrastructure guide uses three per domain: more per domain means fewer domains to buy, but a domain that runs into trouble takes all its mailboxes down with it."
  - q: "Do aliases count as extra mailboxes for sending?"
    a: "Not at Spacemail: aliases share their mailbox's sending quota, so ten aliases on one mailbox still send like one mailbox. Whatever the provider, size a campaign in real mailboxes."
  - q: "What about other providers, such as Zoho Mail or Namecheap Private Email?"
    a: "Any provider with IMAP and SMTP access can be connected to Instantly, which needs both: SMTP to send, IMAP to read replies and run warm-up. Check the provider's sending limits and its rules on unsolicited email first, as for the three compared here."
---

Choosing the best email provider for cold email comes down to three questions: will the mailboxes reach the inbox, how much work does it take to connect them to a sending tool, and do the provider's rules allow what you are about to do. Price comes fourth, and it adds up fast, because a campaign runs on many mailboxes at once: the one I run for {{< a page="/projects/pilotech-teknopoint" >}}Pilotech{{< /a >}} sends from 30.

My verdict, from the campaigns I run: Microsoft 365 works very well for cold email but is tricky to set up, Google Workspace does worse, and Spacemail, the email service of the registrar Spaceship, is the one I encourage. That last recommendation comes with a condition you should read before you buy a single mailbox.

Throughout, I keep what comes from my experience apart from what the providers document, so you can weigh both. For the campaign as a whole, from the list to the follow-ups, start with my {{< a key="b2b-cold-emailing-guide" >}}guide to B2B cold emailing{{< /a >}}. This article is only about where the sending mailboxes live.

## What matters when you choose a cold email provider

Five things separate a provider that suits cold email from one that fights you at every step:

1. Deliverability: whether email sent through the provider's servers lands in the inbox. The provider controls part of it; you control most of it.
2. Connection to your sending tool: cold email goes out through a tool such as Instantly, which spreads the sending over the day and stops as soon as someone replies. Some mailboxes connect in one step, others need admin settings first.
3. Sending limits: every provider caps what one mailbox may send. For cold email, those caps are ceilings to stay far below.
4. Rules on unsolicited email: each provider's terms say what it tolerates, and **none of the three sells its mailboxes for cold email**.
5. Price per mailbox: whatever one mailbox costs, you pay it many times over.

How many mailboxes and domains you need, and how much each can send in a day, is the subject of my guide to {{< a key="cold-email-infrastructure" >}}cold email infrastructure{{< /a >}}. Here, the question is which provider to put them on.

## Best email provider for cold email: the three side by side

The first row is my experience. The other rows are what the providers publish, at the time of writing (October 2026).

| | Microsoft 365 | Google Workspace | Spacemail (Spaceship) |
|---|---|---|---|
| My verdict for cold email | Works very well, tricky to set up | Worse than Microsoft | The one I encourage, easy to set up |
| Connecting Instantly | Authenticated SMTP switched on for each mailbox, then one sign-in per mailbox, one at a time | An admin marks Instantly as trusted once, then each mailbox signs in | IMAP and SMTP, with each mailbox's password |
| Published sending limit | 10,000 recipients a day, 30 messages a minute | 2,000 messages a day per user, 500 on a trial | 500 emails an hour per mailbox, 20 on a trial |
| Rules on bulk or unsolicited email | Bulk commercial email belongs with specialised providers | Unsolicited mass email is prohibited | Email to anyone who has not opted in counts as unsolicited; automated warm-up through third-party tools is prohibited |
| Entry price per mailbox, per month | $7 in the US (Business Basic) | £5.90 ($7) on the annual plan | Under $1 (less than £1) |

The limits row looks generous because it is: Instantly's own guides suggest about 30 cold emails a day per mailbox, a small fraction of any of these ceilings. The rows that decide the choice are the verdict, the rules and the price.

## Microsoft 365: very good for cold email, tricky to set up

Of the two big providers, Microsoft is the one whose mailboxes have worked very well in my cold email campaigns. The set-up is where it costs you, and my everyday experience points the same way: I used to run my own email on Microsoft, and it was a pain. That has not been the case with Namecheap or Spaceship.

What makes the set-up tricky is documented:

- SMTP authentication has to be switched on. A sending tool sends through Authenticated SMTP, which an admin enables for each mailbox in the Microsoft 365 admin centre: **Users**, **Active users**, the mailbox, **Mail**, then **Manage email apps**. Microsoft says it is disabled when security defaults are on, and changing that is a security decision for whoever manages your Microsoft 365.
- Changes take a while to apply. Microsoft says they can take 15 to 40 minutes or more, and Instantly's help asks you to wait about an hour before connecting the mailbox.
- Mailboxes connect one at a time. Instantly has no bulk connection for Microsoft accounts, so 30 mailboxes means 30 separate sign-ins.

Each step is in my {{< a key="instantly-ai-tutorial" >}}Instantly tutorial{{< /a >}}.

On volume, the [Exchange Online limits](https://learn.microsoft.com/en-us/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits) allow 10,000 recipients a day and 30 messages a minute per mailbox. The same documentation says that organisations sending legitimate bulk commercial email, such as newsletters, should use third-party providers that specialise in it. A campaign at about 30 emails a day per mailbox is nowhere near newsletter volume, but the message is clear: Microsoft does not sell its mailboxes for mass sending.

On price, Microsoft raised the price of Business Basic on 1 July 2026: in the US, it went from $6 to $7 per user a month, and existing subscribers move to the new price at their next renewal. The sources I found disagree on the new UK price, so check it on [Microsoft's plan comparison page](https://www.microsoft.com/en-gb/microsoft-365/business/compare-all-microsoft-365-business-products) before you multiply it by your number of mailboxes.

## Google Workspace: familiar, but worse for cold email in my experience

Many small businesses already pay for Google Workspace, and connecting it to Instantly takes two steps: an administrator marks Instantly as a trusted app once in the Admin console (**Security**, **Access and data control**, **API controls**), then each mailbox signs in with Google. Since January 2025, IMAP, which the sending tool uses to read replies, is always on in Gmail.

In my campaigns, though, Google does worse than Microsoft for cold email, which is why it comes last of the three for me. That is experience, not a published benchmark: if you already run Workspace and your mailboxes get replies, your own figures count for more.

What Google documents:

- Limits: 2,000 messages a day per user, and 500 during the free trial.
- Rules: Google's [acceptable use policy](https://workspace.google.com/terms/use_policy.html) forbids using its services to generate or facilitate unsolicited mass email, promotions, advertising or other solicitations.
- Price: Business Starter costs £5.90 per user a month on the annual plan and £7 on the flexible plan, excluding VAT (the US prices are $7 and $8.40), at the time of writing, according to [Google's pricing page](https://workspace.google.com/pricing). Each sending mailbox is a user, so each one is a full subscription.

## Spacemail: the one I encourage, on one condition

Spacemail is the email service of Spaceship, the registrar Namecheap launched in 2023. It is the provider I encourage you to use, for reasons that come from experience:

- Set-up is easy. Creating the mailboxes is simple, and a sending tool connects to them by IMAP and SMTP with the settings from Spaceship's help (server mail.spacemail.com, ports 993 and 465); that access is on by default.
- Support answers. It is there around the clock, and every issue I have raised has been resolved.
- The price is fair. At the time of writing, the entry plan costs under $1 (less than £1) a month per mailbox, and Spaceship does not triple your bill in the second year, as some providers do.

Spaceship also documents its sending limits clearly: 500 emails an hour per mailbox on paid plans, 20 an hour on a trial, and up to 50 recipients per email.

The condition lies in Spaceship's rules, which leave little room for cold email:

- Its [hosting acceptable use policy](https://www.spaceship.com/legal/hosting-aup/) bans mass unsolicited email and counts any email sent to people who have not opted in as unsolicited.
- Its help pages prohibit unsolicited commercial, bulk or automated email, with zero tolerance, and say its email service is not designed for mass mailing.
- Its [guide to warming up a domain](https://www.spaceship.com/knowledgebase/warm-up-domain-email-deliverability/) allows only a manual, gradual warm-up with genuine opt-in recipients, and strictly prohibits automated warm-up through third-party tools, which is exactly what a sending tool's warm-up is.
- Its universal terms of service set damages for spam at $500 or $1 per message, whichever is greater, and Spaceship may limit your sending, suspend it or close the account.

So my recommendation covers what Spacemail does well: the set-up, the price and the support. It does not mean that Spaceship accepts cold email. On paper, it does not.

{{< callout type="warning" >}}**Get Spaceship's answer in writing first.** Before you connect a Spacemail mailbox to Instantly or switch on any warm-up, describe your campaign to Spaceship's support (who you write to, how many emails a day, with which tool) and keep their reply. If they refuse, choose Microsoft.{{< /callout >}}

Once you have a yes, my {{< a key="spacemail-setup" >}}Spacemail set-up tutorial{{< /a >}} covers creating the mailboxes.

## Deliverability: what the provider controls and what you control

The provider controls its sending servers: their reputation, and the technical basics that Gmail's sender rules require of everyone, such as valid reverse DNS and an encrypted connection. When you send through Microsoft, Google or Spaceship, that part is their job.

The rest is yours, at any provider:

- Secondary domains: cold email never leaves your main domain, so a reputation problem never reaches the address your clients write to.
- SPF, DKIM and DMARC on every sending domain. My {{< a key="spf-dkim-dmarc-setup" >}}SPF, DKIM and DMARC tutorial{{< /a >}} shows the records to add.
- A verified list. Dead addresses bounce, and bounces wear down a domain's reputation. I clean my lists with Reoon before the first send.
- Short, plain-text emails. Mine have no links and no HTML, three emails at most per contact, and a phone number to call. My reasons are in {{< a key="plain-text-cold-emails" >}}why I never put links in cold emails{{< /a >}}.
- A slow climb. Each mailbox starts low and rises gradually towards about 30 emails a day, the figure Instantly's guides suggest.

A better provider will not rescue a campaign that fails on these points.

## What 10 or 30 mailboxes cost

The price of one mailbox looks small until you multiply it. The table uses each provider's entry plan at the time of writing (October 2026).

| Provider and plan | One mailbox a month | 10 mailboxes | 30 mailboxes |
|---|---|---|---|
| Google Workspace Business Starter, annual plan | £5.90 ($7) | £59 ($70) | £177 ($210) |
| Microsoft 365 Business Basic, US list price | $7 | $70 | $210 |
| Spacemail, entry plan | Under $1 | Under $10 | Under $30 |

Google's prices exclude VAT. Spaceship's prices are in US dollars and vary with the billing period and current offers, so check them on [Spaceship's website](https://www.spaceship.com/) before you buy. At 30 mailboxes, the gap between Spacemail and Google is more than £140 a month, before the rules come into it.

Domains and the sending tool come on top: the secondary domains, renewed each year, and a monthly subscription for the tool.

{{< callout type="tip" >}}**Buy one mailbox before you buy thirty.** Connect it to your sending tool, send a few test emails to your own addresses and put your questions to the provider's support. Then multiply.{{< /callout >}}

## My recommendation, and when to hand it over

If you are choosing today, this is how I would decide:

- For the simplest set-up and the lowest cost: Spacemail, but only once Spaceship's support has agreed in writing to what you plan to send.
- If Spaceship says no, or you already use Microsoft 365: Microsoft mailboxes on secondary domains, with time set aside for the SMTP settings and the one-by-one connection.
- If you already pay for Google Workspace: you can start there, on secondary domains and paid accounts, but in my experience it does worse than Microsoft, so watch the replies per mailbox from the first week.
- Your everyday mailbox is a separate decision. For the address on your main domain, the one your clients write to, comfort matters more than sending limits, and my guide to getting a {{< a key="professional-email-address" >}}professional email address{{< /a >}} compares the options.

Two or three mailboxes are well within reach on your own, with the tutorials linked above. Thirty are a different job: around ten domains, dozens of DNS records, warm-up that respects each provider's rules, and replies to route to whoever answers prospects. If you would rather hand the whole thing over, that is what [MLK Leadhunters](https://mlkleadhunters.com/) does.
