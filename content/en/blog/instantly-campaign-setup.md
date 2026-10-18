---
title: "Instantly campaign setup: sequence, schedule and sending options"
seo_title: "Instantly campaign setup: sequence, schedule and options"
description: "Instantly campaign setup, step by step: import a verified list, write three plain-text emails, set the schedule, then the options that keep you out of spam."
slug: "instantly-campaign-setup"
translationKey: "instantly-campaign-setup"
date: 2026-10-17T08:37:00+02:00
lastmod: 2026-10-17T08:37:00+02:00
category: "cold-emailing"
article_type: "tutorial"
keywords: ["Instantly campaign setup", "how to create a campaign in Instantly", "Instantly sequence", "Instantly campaign options", "Instantly A/Z testing", "Instantly schedule"]
summary: "To set up an Instantly campaign, create it under Campaigns, upload a verified CSV list in the Leads tab and write the sequence in the Sequences tab: a three-line first email and two follow-ups, in plain text, with a phone number and no links. Then set the sending hours and time zone in the Schedule tab and, in the Options tab, switch on Stop sending emails on reply, turn tracking off, send text only and cap sending at about 30 emails a day per mailbox."
cover: "instantly-campaign-setup"
cover_alt: "A phone showing an inbox next to three stacked envelopes and the words Instantly, 3 emails"
related: ["instantly-ai-tutorial", "cold-email-follow-up", "cold-email-examples", "plain-text-cold-emails", "email-list-verification-reoon"]
services: ["cold-emailing"]
faq:
  - q: "Why is my Instantly campaign sending fewer emails than expected?"
    a: "Usually for one of three reasons: the slow ramp is still raising each mailbox's daily volume, a common cause according to Instantly's help; the mailboxes' own daily limits, which always win, add up to less than the campaign's limit; or too few leads are left who have not yet received the first email. Check them in that order."
  - q: "How many sends does an A/Z test need before I pick a winner?"
    a: "More than most people wait for. MLK Leadhunters' rule is to test one thing at a time and give each variant at least two or three hundred sends. Even then, a gap of two or three points can be chance, so keep only the differences you would bet on."
  - q: "How soon after launch do the first replies come?"
    a: "In my campaigns, the first result usually comes within 36 hours of launch. Responses then tend to grow over the following weeks, as A/Z tests show which copy works, and with a phone number in the email, some of them arrive as calls rather than written replies."
  - q: "Can I send an Instantly campaign to UK businesses without their consent?"
    a: "To limited companies and LLPs, yes: PECR requires no prior consent from them, provided every email says who it is from and gives a valid address to opt out. Sole traders and partnerships outside Scotland count as individuals and need consent, and the [ICO's guidance on B2B marketing](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/) says to treat an address as an individual's when you cannot tell. UK GDPR still covers named addresses, and the ICO asks you to honour companies' opt-outs as well."
---

An Instantly campaign is where your cold emails are actually written, scheduled and sent. It brings four things together: a list of leads, a sequence of emails, a sending schedule and a set of options. This Instantly campaign setup tutorial takes them in the order Instantly shows them, with the settings I use and the reasons behind them.

It starts where account setup ends. If your sending mailboxes are not connected and warmed up yet, begin with my {{< a key="instantly-ai-tutorial" >}}Instantly AI tutorial{{< /a >}}. For the whole process, from the offer to the replies, see my {{< a key="b2b-cold-emailing-guide" >}}B2B cold emailing guide{{< /a >}}.

Instantly is the tool I started with, and I have found no reason to change: it is straightforward once you have found the right recipe, and its settings do a lot to keep emails out of spam. My recipe fits in one line: three plain-text emails at most, an invitation to call with the phone number, no links. Menu names below are Instantly's as of October 2026.

## What you need before you start

Four things must be ready before you click anything:

1. Sending mailboxes on secondary domains, connected to Instantly, with two to three weeks of warm-up behind them.
2. One audience, and one offer that fits in a sentence. In the {{< a page="/projects/pilotech-teknopoint" >}}Pilotech Teknopoint campaigns{{< /a >}}, for instance, the offer was a free technical visit and a firm quote.
3. A verified list of that audience, saved as a CSV file. I run every list through Reoon before it goes anywhere near Instantly; {{< a key="email-list-verification-reoon" >}}how I verify an email list{{< /a >}} shows the steps.
4. A phone number that someone answers during your sending hours. In my campaigns, the call to action is the phone.

## Step 1: create the campaign

In the left-hand menu, open **Campaigns**, click **Add New** and give the campaign a name. Make the name say who it targets and what it offers, such as "Architects – free site visit – October 2026": in a few months you will have several campaigns, and the name is how you will tell their results apart.

Create one campaign per audience. The Pilotech campaigns went to three audiences: Paris restaurants, Paris offices and shops, and architects, who were the main focus. Each audience gets its own words, and separate campaigns keep their results apart.

The new campaign opens on a row of tabs. The next steps follow them in order: **Leads**, **Sequences**, **Schedule** and **Options**.

{{< screenshot id="instantly-campaign-setup-01" alt="The Instantly Campaigns page with the Add New button, and a new campaign named after its audience and offer" >}}

## Step 2: import your verified list

Open the **Leads** tab and add leads from a CSV file. Prepare the file first:

- The first row holds the column names, each under 20 characters and without special characters.
- One column holds the email address, the only column Instantly requires.
- Every lead has a first name and a company name, since the emails will use both.
- The cells contain no hidden spaces or line breaks, which can make the upload fail.

Instantly detects the columns and suggests a field for each. Map the first name and the company name to the **First Name** and **Company Name** fields, map any other column you want to quote in an email (the city, for example) to a custom variable, and set the rest to **Do Not Import**.

Leave **Check for duplicates** ticked, as Instantly recommends: it skips anyone already in another of your campaigns or lists, so nobody receives two sequences at once. Addresses and domains on your blocklist are skipped as well. Instantly also offers to verify the leads during the import, for 0.25 credits per lead. You can skip it if your list has already been through a verifier: mine always have, through Reoon. Instantly's [guide to CSV imports](https://help.instantly.ai/en/articles/6254215-how-to-import-leads-via-csv) has the details.

{{< screenshot id="instantly-campaign-setup-02" alt="Instantly CSV import: columns mapped to First Name, Company Name and Do Not Import, with Check for duplicates ticked" >}}

## Step 3: write a three-line first email with your phone number

Open the **Sequences** tab. Step 1 is the first email: a subject line and a body.

The body is three lines at most: who you are, what you offer, and an invitation to call. Leave out everything else: people hate receiving long emails from someone they never asked for anything. Short and sharp works.

**The call to action is the phone.** I put the number in the email and invite people to call and to look at the catalogue on the website, without a link. In the Pilotech campaigns, many prospects, architects above all, called instead of replying; the {{< a key="architects-cold-email-case-study" >}}architects case study{{< /a >}} explains why.

Here is the shape of the first email:

```text
Subject: [two to four plain words]

Hello {{firstName}},

[Line 1: who you are, what your company does and where.]
[Line 2: the offer for {{companyName}}, in one sentence.]
[Line 3: the invitation to call, with the number, and to see the catalogue on your website.]

[First name and surname, company, phone number]
[One line to opt out, such as: if you would rather not hear from me again, just reply "no".]
```

The variables `{{firstName}}` and `{{companyName}}` take their values from the columns you mapped in step 2. Rather than typing them, insert them with the bolt icon, in the subject line or at the bottom of the editor, which rules out typos. Keep the subject short and plain, like an internal email.

Write everything in plain text: no links, no images, no logo, no formatting. I avoid links and HTML to protect delivery, and a plain-text email reads like what it is, a message from one person to another; {{< a key="plain-text-cold-emails" >}}why I never put links in cold emails{{< /a >}} goes into the reasons. The opt-out line matters too: UK and French rules both require each email to name its sender and give a simple way to refuse further emails, and a reply does that without a link. For complete first emails built on this model, see my {{< a key="cold-email-examples" >}}cold email examples{{< /a >}}.

{{< callout type="tip" >}}**Read it on a phone.** If the first email makes you scroll on a phone screen, it is too long.{{< /callout >}}

{{< screenshot id="instantly-campaign-setup-03" alt="Step 1 of an Instantly sequence: a three-line plain-text email with the first-name variable and a phone number" >}}

## Step 4: add two follow-ups, then stop

Click **Add step** to add the second email, then once more for the third. Each follow-up waits a number of days after the previous email, which you set on the step. MLK Leadhunters' guide on [how to write a cold email](https://mlkleadhunters.com/blog/how-to-write-a-cold-email/) sets the first follow-up three or four days after the first email, and the second about a week after that.

Leave the subject line of both follow-ups empty. Instantly then carries over the subject of the previous email and sends the follow-ups in the same thread, so the prospect sees them under your first email; a different subject would start a new conversation ([Instantly's guide to keeping sequences in the same thread](https://help.instantly.ai/en/articles/7914807-keep-email-sequences-in-the-same-thread)). The same goes for the sender: follow-ups leave from the mailbox that sent the first email, so do not remove a mailbox from a running campaign, or its leads' follow-ups will come from another address, in a new thread.

Each follow-up is as short as the first email: one new reason to call, and the number again. Do not skip the third. In my campaigns it still brings positive replies, from people who were simply busy or forgot to answer the first two. Three is also where I stop, at the low end of the three to four steps Instantly's own help suggests for most cold outreach; my guide to {{< a key="cold-email-follow-up" >}}cold email follow-ups{{< /a >}} explains why three emails are enough.

{{< screenshot id="instantly-campaign-setup-04" alt="An Instantly sequence with three steps, the two follow-ups set to wait a few days and keeping the subject of step 1" >}}

## Step 5: add A/Z variants to learn what works

A/Z testing is what Instantly calls its A/B tests. On step 1, click **Add variant** and write a second version of the email; each lead then receives one of the versions.

Change one thing at a time, starting with what the reader sees first: the subject or the first line. Testing is how a campaign gets better with time. In mine, responses usually grow as the weeks go by, because I learn which copy worked and which did not. MLK Leadhunters' article on [the A/B tests that matter](https://mlkleadhunters.com/blog/ab-tests-that-matter/) lists the tests worth running and the ones to skip.

Instantly can also pick the winner for you. In the **Options** tab, under **Advanced Options**, switch on **Auto optimize A/Z testing** and choose the metric that decides: Instantly then deactivates the weaker variants. Choose reply rate, since with tracking switched off (step 7) there are no opens or clicks to compare. The figures for each variant are in the campaign's **Analytics**, under **Step Analytics**.

Before you crown a winner, count the calls as well: Instantly sees written replies, not the phone ringing.

{{< screenshot id="instantly-campaign-setup-05" alt="Step 1 of an Instantly sequence with two variants that differ only in their first line" >}}

## Step 6: set the schedule and time zone

Open the **Schedule** tab. Set the sending window with **From** and **To**, pick the **Timezone**, tick the sending days and click **Save**.

Use your prospects' time zone, not yours: London for a UK list, Paris for a French one, so that 9:00 means nine o'clock where the emails land. Keep the window to working days and office hours, since B2B prospects read their email at work. MLK Leadhunters' guide to A/B tests rates send timing as a real but small difference, so do not spend long on the exact hour: test it last.

One setting looks similar but is not the same: the time zone in which Instantly resets daily limits sits under **Settings**, then **Preferences**, and it is separate from the campaign's schedule.

{{< screenshot id="instantly-campaign-setup-06" alt="The Schedule tab of an Instantly campaign with the sending window, the prospects' time zone and weekdays selected" >}}

## Step 7: choose the sending options

The **Options** tab holds the settings that keep a campaign out of spam, which are a large part of why I use Instantly. These are the ones that matter for a plain-text campaign (Instantly's article on [campaign options](https://help.instantly.ai/en/articles/6222396-campaign-options) describes the others):

| Setting | Choice | Why |
|---|---|---|
| The sending mailboxes | Warmed-up mailboxes on secondary domains only | The risk stays away from your main domain |
| **Stop sending emails on reply** | On | Nobody gets a follow-up after answering; Instantly recommends it too |
| **Open Tracking** and **Link Tracking** | Off | A plain-text email without links has nothing to track |
| **Send emails as text-only (no HTML)** | On | Every step goes out as plain text |
| Daily limit | About 30 emails per mailbox | Instantly's own guideline |

Tracking deserves one more sentence. Open tracking relies on an invisible image, and an image needs HTML, which defeats the point of a plain-text email. If you email French businesses, there is also the law: in a recommendation published in April 2026, the CNIL, France's data protection regulator, says a tracking pixel in a marketing email needs the recipient's consent, B2B emails included.

For the daily limit, Instantly's help suggests about 30 campaign emails a day per mailbox, and sizing the campaign's limit as the number of mailboxes times 30: three mailboxes, 90 emails a day. Each mailbox's own limit always wins over the campaign's. Remember that the follow-ups count towards that limit: once all three steps are running, a 90-email day brings only about 30 new leads into the sequence, because the rest goes to follow-ups.

If you write to several people at the same company, also use the company-level stop: when one of them replies, the others stop receiving the sequence. Out-of-office auto-replies do not trigger it.

Last, the slow ramp. It is a setting of each sending account rather than of the campaign. When it is on, each mailbox starts at 2 campaign emails a day and adds 2 a day until it reaches its limit, so a mailbox capped at 30 gets there around day 15 ([Instantly's slow ramp guide](https://help.instantly.ai/en/articles/10056946-campaign-slow-ramp-system)). Keep it on for new mailboxes; on mailboxes that have been sending for a while, you can switch it off to reach full volume sooner.

{{< callout type="warning" >}}**For more volume, add mailboxes, not emails per mailbox.** Instantly's own guides recommend growing with more mailboxes and domains rather than raising each mailbox's daily volume.{{< /callout >}}

{{< screenshot id="instantly-campaign-setup-07" alt="The Options tab of an Instantly campaign: Stop sending emails on reply on, open and link tracking off, text-only sending on and a daily limit set" >}}

## Step 8: test the sequence on yourself, then launch

Before any prospect receives anything, send the sequence to yourself. The simplest way is a small test campaign with the same steps and options, whose only leads are your own addresses, ideally one on Gmail and one on Outlook. When the first email arrives, check that:

1. it lands in the inbox, not in spam;
2. the variables are filled in: your first name, not `{{firstName}}`;
3. the email is plain text, with no link, no image and no logo;
4. the phone number is there, and it is the right one;
5. the signature appears once;
6. your reply shows up in the **Unibox** and stops the sequence for your address.

When everything checks out, delete the test campaign and launch the real one.

{{< screenshot id="instantly-campaign-setup-08" alt="The test email as it arrives in Gmail: plain text, the first name filled in and the phone number visible" >}}

## After your Instantly campaign setup: the first two weeks

Once the campaign is live, a few habits keep it healthy:

1. Watch the bounces in the first days. If many addresses bounce, pause the campaign and verify the list again: bounces wear down the reputation of the mailboxes you send from.
2. Hand the replies to whoever sells. I do everything in a campaign except the replies: they go to the client, who answers them. MLK Leadhunters' guide on [what to do with replies](https://mlkleadhunters.com/blog/what-to-do-with-replies/) covers the first hour after a prospect answers.
3. Remove anyone who calls from the campaign. Instantly knows nothing about phone calls, so a prospect who called stays in the sequence until someone takes them out.
4. Add every opt-out to Instantly's blocklist the same day, including requests made by phone, so that no future import brings the address back.
5. Read the A/Z results once each variant has had enough sends, keep the better version, then test the next thing.
6. Stick to three emails, even when a campaign is quiet.

If you would rather hand all of this over, it is what my cold email practice, [MLK Leadhunters](https://mlkleadhunters.com/), does for clients: I find the leads, write and send the emails and run the tests, and the replies and calls stay with you.
