---
title: "Instantly.ai tutorial: set up your account and connect your mailboxes"
seo_title: "Instantly AI tutorial: account, mailboxes and warm-up"
description: "Instantly AI tutorial, step by step: create the account, pick a plan, connect Google, Microsoft or Spacemail mailboxes, start warm-up and check the Unibox."
slug: "instantly-ai-tutorial"
translationKey: "instantly-ai-tutorial"
date: 2026-10-17T08:36:00+02:00
lastmod: 2026-10-17T08:36:00+02:00
category: "cold-emailing"
article_type: "tutorial"
keywords: ["Instantly AI tutorial", "how to use Instantly", "connect email account to Instantly", "Instantly warm-up", "Instantly custom tracking domain", "Instantly Unibox"]
summary: "To set up Instantly, create an account, choose an Outreach plan (Growth, Hypergrowth or Light Speed, all with unlimited mailboxes and warm-up) and connect each sending mailbox under Email Accounts: Google and Microsoft by signing in, other providers such as Spacemail by IMAP and SMTP. Then switch on warm-up wherever the mailbox provider allows it and wait two to three weeks before the first campaign; a custom tracking domain is only needed if you track opens or clicks."
cover: "instantly-ai-tutorial"
cover_alt: "Stacked email envelopes with a new-message badge next to the Instantly.ai name"
related: ["instantly-campaign-setup", "cold-email-infrastructure", "spf-dkim-dmarc-setup", "spacemail-setup", "instantly-vs-smartlead-vs-lemlist"]
services: ["cold-emailing"]
faq:
  - q: "Is Instantly worth it for a small business?"
    a: "If you send B2B cold email from several mailboxes, I think so: it is the tool I started with and still use, every plan includes unlimited mailboxes and warm-up, and it is straightforward once set up. If you send a handful of emails a week by hand, you do not need a sending tool yet."
  - q: "Should I connect my main business email address to Instantly?"
    a: "No. Cold email always carries some deliverability risk, so send it from mailboxes on secondary domains and keep your main domain for everyday email. MLK Leadhunters explains why in [Never send cold emails from your main domain](https://mlkleadhunters.com/blog/never-send-from-your-main-domain/)."
  - q: "Why does Instantly need IMAP as well as SMTP?"
    a: "SMTP only sends. Instantly also reads each mailbox through IMAP to detect replies and to run warm-up, so it refuses a connection with SMTP alone. If an IMAP and SMTP connection fails, check the IMAP host, port and password first."
  - q: "Does it matter where my domain is registered?"
    a: "No. Instantly connects mailboxes, not registrars, so a domain at Namecheap, Spaceship, OVH or anywhere else works. What matters is that the domain's DNS has SPF, DKIM and DMARC records, plus the tracking CNAME if you use one."
  - q: "Is cold emailing with Instantly legal in the UK?"
    a: "The tool does not change the rules. Under PECR you may email companies and LLPs without prior consent if you say who you are and give a working way to opt out; sole traders and partnerships (except in Scotland) count as individuals and need consent, and UK GDPR applies to named addresses. [MLK Leadhunters' summary](https://mlkleadhunters.com/blog/is-cold-email-legal/) covers the details."
---

Instantly (instantly.ai) is a cold email platform: you connect the mailboxes that will send your emails, it warms them up, sends your sequences from all of them and gathers the replies in one inbox. This Instantly AI tutorial covers the set-up, click by click: the account, the plan, the mailboxes, warm-up, the optional tracking domain and the Unibox.

Instantly was the first cold email tool I used, and I have found no reason to change. It is straightforward, and it has the settings that keep your emails out of spam, once you have found the right recipe. Most of that recipe happens before the first email goes out, in the steps below.

Writing and launching the campaign itself is the next tutorial, {{< a key="instantly-campaign-setup" >}}Instantly campaign setup{{< /a >}}, and my {{< a key="b2b-cold-emailing-guide" >}}B2B cold emailing guide{{< /a >}} shows where both fit in the whole process. Menu names are those of Instantly at the time of writing (October 2026); if a label has moved since, Instantly's help centre (help.instantly.ai) shows the current one.

## What you need before you start

Instantly sends from mailboxes you connect to it, so a few things come first:

- Sending mailboxes on secondary domains, never on the domain of your company's real inbox. My guide to {{< a key="cold-email-infrastructure" >}}cold email infrastructure{{< /a >}} explains how many domains and mailboxes to buy and what each one can send a day.
- SPF, DKIM and DMARC records on every sending domain. For mailboxes you bring yourself, they live at your DNS host, not in Instantly: my tutorial on how to {{< a key="spf-dkim-dmarc-setup" >}}set up SPF, DKIM and DMARC{{< /a >}} shows how to add them.
- The right access: an administrator account for Google Workspace or Microsoft 365, or each mailbox's password for any other provider.
- A payment card for the plan.

Your list of leads can wait. Warm-up takes a few weeks, which leaves time to build the list and verify it.

The provider decides how a mailbox connects:

| Provider | How Instantly connects | What you need |
|---|---|---|
| Google Workspace | Sign-in with Google | An admin who marks Instantly as trusted |
| Microsoft 365 | Sign-in with Microsoft | An admin who switches on Authenticated SMTP |
| Spacemail or any other provider | IMAP and SMTP | The server settings and each mailbox's password |

As for which provider to pick: in my experience, Microsoft works very well for cold email but is tricky to set up, and Google is worse. The one I encourage is Spacemail, the email service of Spaceship, the registrar Namecheap built; my comparison of the {{< a key="best-email-provider-cold-email" >}}best email providers for cold email{{< /a >}} goes through the reasons. Check Spaceship's rules on cold email first, though: step 3 explains why.

## Step 1: create your Instantly account

Go to instantly.ai and create your account with an address you read every day, such as your own work address: the login and the sending mailboxes are separate things, and the mailboxes are connected in step 3.

Instantly keeps everything in a workspace: the connected mailboxes, the campaigns, the leads and the Unibox. Name it after the business the campaigns are for.

{{< screenshot id="instantly-ai-tutorial-01" alt="The empty Email Accounts page of a new Instantly workspace, just after sign-up" >}}

## Step 2: choose an Outreach plan

Instantly calls its cold email plans Outreach plans. At the time of writing (October 2026) there are three, plus a custom Enterprise plan, and **every one includes unlimited email accounts and unlimited warm-up**. You pay for the contacts you upload and the emails you send, not for the mailboxes you connect.

| Plan | Billed monthly | Billed annually (per month) | Contacts you can upload |
|---|---|---|---|
| Growth | $47 (about £35) | $37.60 (about £28) | 1,000 |
| Hypergrowth | $97 (about £73) | $77.60 (about £58) | 25,000 |
| Light Speed | $358 (about £270) | $286.30 (about £215) | 100,000 |

Instantly bills in US dollars, so the pound figures move with the exchange rate; [Instantly's pricing page](https://instantly.ai/pricing) has the current prices and limits. Growth also caps sending at 5,000 emails a month, enough for a first test on one segment from a few mailboxes. You reach that cap quickly: ten mailboxes sending 30 emails each per working day already make about 6,300 emails a month, so Hypergrowth is the usual next step. Lead data (SuperSearch) and the CRM are sold separately, and this tutorial needs neither.

Unlimited mailboxes matter more than they seem. The Pilotech campaigns I run go out from 30 addresses, and on any Outreach plan the 30th mailbox costs nothing more than the first. If you are still choosing a tool, my comparison of {{< a key="instantly-vs-smartlead-vs-lemlist" >}}Instantly vs Smartlead vs lemlist{{< /a >}} puts their pricing models side by side.

{{< screenshot id="instantly-ai-tutorial-02" alt="Instantly plan selection showing the Growth, Hypergrowth and Light Speed Outreach plans" >}}

## Step 3: connect your sending mailboxes

In the left-hand menu, open **Email Accounts** and click **Add New**. The same button sells Instantly's own ready-made mailboxes (its done-for-you and pre-warmed accounts). This tutorial connects the ones you already have, so choose to connect existing accounts. Instantly then asks which provider the mailbox uses: Google, Microsoft, or any other provider through IMAP and SMTP. Each route needs its own preparation, described below.

{{< screenshot id="instantly-ai-tutorial-03" alt="Instantly Email Accounts page after clicking Add New, with the choice between Google, Microsoft and IMAP/SMTP" >}}

### Google Workspace: mark Instantly as trusted, then sign in

On Google Workspace, an administrator first tells Google that Instantly may access the mailboxes:

1. In Instantly, choose the Google option and copy the client ID it shows.
2. In the Google Admin console, go to **Security**, **Access and data control**, **API controls**, then **Manage Third-Party App Access**.
3. Add a new app, find it with the client ID, select Instantly and set its access to **Trusted**. Instantly OAuth v1 then appears in your list of configured apps, with Trusted access.
4. Back in Instantly, sign in with the mailbox you are connecting and allow access.

The admin part is done once; the sign-in, once per mailbox. If Google's window offers the wrong account, choose **Use another account** or open Instantly in a private window. Since January 2025, IMAP access, which Instantly needs, is always on in Gmail; if a connection still fails, ask the administrator whether IMAP is blocked for the organisation. [Instantly's Google guide](https://help.instantly.ai/en/articles/6697278-connect-google-accounts-via-google-oauth-method) has the details.

{{< screenshot id="instantly-ai-tutorial-04" alt="Google Admin console, API controls: Instantly OAuth v1 listed as a trusted third-party app" >}}

### Microsoft 365: switch on Authenticated SMTP first

Before Instantly can send from a Microsoft 365 mailbox, SMTP authentication must be switched on for that mailbox:

1. In the Microsoft 365 admin centre, go to **Users**, then **Active users**, and select the mailbox.
2. Open the **Mail** tab and click **Manage email apps**.
3. Tick **Authenticated SMTP**, check that **IMAP** is ticked as well (Instantly needs both) and click **Save changes**.
4. Wait about an hour. Instantly's help asks for this delay, because Microsoft takes a while to apply the change.
5. In Instantly, choose the Microsoft option, sign in with that mailbox and accept the permissions it asks for.

Microsoft accounts connect one at a time: Instantly has no bulk connection for them, so set aside the time if you have many. [Microsoft's page on SMTP AUTH](https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission) explains the setting, and warns that it is disabled in organisations that use security defaults; if yours does, changing that is a security decision for whoever manages your Microsoft 365.

{{< screenshot id="instantly-ai-tutorial-05" alt="Microsoft 365 admin centre, Manage email apps panel of a user with Authenticated SMTP ticked" >}}

### Spacemail and other providers: IMAP and SMTP

For any other provider, choose the IMAP and SMTP option and fill in both halves of the form. For Spacemail, the values from Spaceship's help are:

```
First and last name:  the sender's real name
Email:                you@your-sending-domain.co.uk
Username:             the full email address (IMAP and SMTP)
Password:             the mailbox password
IMAP host:            mail.spacemail.com
IMAP port:            993 (SSL)
SMTP host:            mail.spacemail.com
SMTP port:            465 (SSL)
```

IMAP and SMTP access is on by default for Spacemail mailboxes; if Instantly cannot connect, check that it has not been switched off in Spacemail Manager. These values come from Spaceship's help centre, and my {{< a key="spacemail-setup" >}}Spacemail setup tutorial{{< /a >}} covers creating the mailboxes.

{{< screenshot id="instantly-ai-tutorial-06" alt="Instantly IMAP/SMTP form filled in with Spacemail settings: mail.spacemail.com, ports 993 and 465" >}}

{{< callout type="warning" >}}**Read Spaceship's rules before you connect Spacemail.** Its help pages ban unsolicited commercial, bulk or automated email, its hosting acceptable use policy counts any email sent to people who have not opted in as unsolicited, and its [guide to warming up a domain](https://www.spaceship.com/knowledgebase/warm-up-domain-email-deliverability/) prohibits automated warm-up through third-party tools, which is exactly what Instantly's warm-up is. Ask Spaceship's support in writing what they accept before you switch warm-up on for these mailboxes.{{< /callout >}}

## Step 4: set the sender name, signature and daily limit

Click a connected mailbox in **Email Accounts** to open its settings. Three of them deserve a minute before warm-up starts:

- Sender name: a real person's first and last name, the person prospects will call. For Pilotech, the emails were signed by the founder, with his phone number in the email.
- Signature: plain text only, with a name, a company and a phone number. No logo and no link, for the same reason my emails have neither: plain text without links protects delivery.
- Daily sending limit: how many campaign emails this mailbox may send a day. Start in single digits and raise it week by week. Instantly's own guides suggest about 30 a day per mailbox once its reputation is established, the figure my infrastructure guide uses to size a set-up.

{{< screenshot id="instantly-ai-tutorial-07" alt="Settings of a connected mailbox in Instantly: sender name, plain-text signature and daily sending limit" >}}

## Step 5: switch on warm-up and leave it running

Warm-up is a period in which a new mailbox exchanges ordinary emails with other real mailboxes, so that inbox providers learn to trust it before it sends any cold email. Instantly includes it on every plan, for every mailbox, and runs it for you.

1. In **Email Accounts**, click the flame icon on a mailbox's row to start its warm-up. To switch on several at once, select them and use the three-dot menu.
2. Do not expect activity straight away: Instantly schedules warm-up emails at midnight UTC, so a mailbox switched on today starts after the next midnight UTC.
3. Open a mailbox's settings to see its warm-up section: how many warm-up emails it sends a day, how fast that number rises and how often the exchanges get a reply.
4. Leave it on. Warm-up does not stop when campaigns start: it carries on in the background.

For how long and with which numbers, MLK Leadhunters' [guide to email warm-up](https://mlkleadhunters.com/blog/email-warm-up/) has the answer: two weeks as the minimum for a new domain, three to be safe, four for a domain registered the same month, and the settings that matter. Settings like these are a large part of why I have stayed with Instantly.

The exception is a provider that forbids automated warm-up, as Spaceship does (see step 3): leave warm-up off on those mailboxes unless the provider has agreed to it in writing.

{{< callout type="warning" >}}**No cold email during the first weeks, not even one test.** A new mailbox that sends campaigns before warm-up has built its reputation lands in spam, and pushing on makes it worse.{{< /callout >}}

{{< screenshot id="instantly-ai-tutorial-08" alt="Instantly Email Accounts list with warm-up switched on for several mailboxes" >}}

## Step 6: add a custom tracking domain, only if you track

Open and click tracking go through a tracking domain: an invisible image counts opens, and redirected links count clicks. By default those links use a domain Instantly shares between its users; a custom tracking domain replaces it with a subdomain of your own sending domain.

I skip this step. My emails are plain text with no links, so there is no tracking image and nothing to click, and tracking stays off. If you email French businesses, there is a legal reason as well: in a recommendation published in April 2026, France's regulator, the CNIL, says open-tracking pixels in marketing emails need the recipient's prior consent. If you do track, add this CNAME record on each sending domain, at your DNS host:

```
Type:   CNAME
Host:   inst
Value:  prox.itrackly.com
```

Then, in Instantly:

1. Open the mailbox's settings, switch on the custom tracking domain and enter `inst.your-sending-domain.co.uk`.
2. Click **Check Status**. Once the record is found, Instantly shows **CNAME Verified**; a DNS change can take 24 to 72 hours to spread, so check again later if it is not found straight away.

{{< callout type="tip" >}}At OVH, type the value with a final dot, `prox.itrackly.com.`, or OVH adds your own domain to the end of it and the record never verifies.{{< /callout >}}

{{< screenshot id="instantly-ai-tutorial-09" alt="Mailbox settings in Instantly with the custom tracking domain inst.your-sending-domain.co.uk and the CNAME Verified status" >}}

## Step 7: check the Unibox, where replies land

The **Unibox** is Instantly's single inbox: replies to your campaigns from every connected mailbox land there, so nobody has to open 30 mailboxes one by one. You can filter it by campaign or by mailbox, answer from it and mark each lead's status, interested or not.

Decide now who answers. In my clients' campaigns, I do everything except the replies: those go to the client. On the {{< a page="/projects/pilotech-teknopoint" >}}Pilotech Teknopoint campaigns{{< /a >}}, written replies went straight to the founder, who answered them from his own inbox, and many prospects, architects especially, called instead of replying: a call fits a busy day better than a written answer. The Unibox does not show everything, so count the calls too.

The simplest end-to-end test comes with your first campaign: add your own address as a lead, reply to the email you receive and check that your reply appears in the Unibox.

{{< screenshot id="instantly-ai-tutorial-10" alt="Instantly Unibox showing replies from several sending mailboxes in one list" >}}

## After this Instantly AI tutorial: the checklist before your first campaign

Before you launch anything, check that:

1. Every sending domain has its SPF, DKIM and DMARC records.
2. Every mailbox appears in **Email Accounts** with no connection error.
3. Warm-up has been running for two to three weeks on every mailbox, within each provider's rules.
4. Each mailbox has a real sender name and a plain-text signature.
5. Tracking is off, or the custom tracking domain shows **CNAME Verified**.
6. Someone is in charge of the Unibox, and the phone number in your emails gets answered.
7. Your list is verified. I clean mine with Reoon.

Then write and schedule the sequence with my {{< a key="instantly-campaign-setup" >}}Instantly campaign setup tutorial{{< /a >}}: three short plain-text emails at most, with your phone number in them. In my campaigns, the first result usually comes within 36 hours of launch, and the Pilotech campaigns brought 15 new clients in a year.

If you would rather not handle domains, DNS records and warm-up yourself, this whole set-up is what my cold email practice, [MLK Leadhunters](https://mlkleadhunters.com/), does for clients: everything except the replies, which stay with you.
