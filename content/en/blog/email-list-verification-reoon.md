---
title: "Email list verification before a cold email campaign: how I use Reoon"
seo_title: "Email list verification with Reoon: a step-by-step guide"
description: "Email list verification before a cold email campaign, step by step in Reoon: upload, read each status, keep the safe addresses, drop those that would bounce."
slug: "email-list-verification"
translationKey: "email-list-verification-reoon"
date: 2026-10-17T08:43:00+02:00
lastmod: 2026-10-17T08:43:00+02:00
category: "cold-emailing"
article_type: "tutorial"
keywords: ["email list verification", "how to verify an email list", "Reoon email verifier", "catch-all email address", "email bounces", "clean an email list for cold email"]
summary: "Email list verification checks every address before a campaign, so dead ones come out before they bounce and wear down your sending domains. In Reoon, upload the CSV on the Bulk Verification page, verify the unknown addresses again after 15 to 30 minutes, then download Safe only, or Safe+Role for small local businesses; keep catch-all addresses apart and drop the rest. Reoon is the only AppSumo purchase I use every day."
cover: "email-list-verification-reoon"
cover_alt: "A hand ticking rows on a printed list beside a shield with a tick and the words Reoon 100k"
related: ["google-maps-scraper-outscraper", "instantly-campaign-setup", "cold-email-infrastructure", "appsumo-review", "cold-email-gdpr-uk-france"]
services: ["cold-emailing"]
faq:
  - q: "Can a verified email address still bounce?"
    a: "Yes. A mailbox can close between the check and the send, and some mail servers answer differently from one day to the next. Reoon says so itself in [Why valid emails can still bounce](https://www.reoon.com/articles/why-valid-emails-can-still-bounce/). Verification lowers the risk, and sending soon after it keeps the risk low."
  - q: "How often should I verify my email list?"
    a: "Verify every new list before its first send, and verify an old list again before you reuse it: people change jobs, and companies close or change domains. Verify only the addresses you are about to write to, since each check uses a credit."
  - q: "Can I upload prospects' email addresses to a verifier under GDPR?"
    a: "You can, as long as the campaign itself has a lawful basis. A named work address is personal data under UK GDPR and the EU GDPR, and the verifier processes it on your behalf, so read its privacy policy and data processing terms before the first upload, and send it only the columns your campaign needs."
  - q: "What is the difference between email validation and email verification?"
    a: "The two words are often used as synonyms. Strictly, validation checks that an address is well formed and that its domain can receive email, while verification also asks the mail server whether the mailbox exists. For a cold email list, you need verification."
---

Email list verification means checking every address on a list before you write to it, so the ones that no longer exist come out before they bounce. Before a cold email campaign, it is the cheapest protection your sending domains can get. A few bounces are normal; a list full of dead addresses tells Gmail and Outlook that you do not know who you are writing to.

The verifier I use is Reoon. I bought it through a deal on AppSumo, and of everything I have bought there, it is the only tool I use every single day. Before the first send of the cold email campaigns I run for {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, the architect list went through it; my {{< a key="architects-cold-email-case-study" >}}cold email case study{{< /a >}} tells what happened next.

This tutorial follows Reoon's bulk verification from the file you upload to the file you import into your sending tool, with what to do about each result. It is one step of the method in my {{< a key="b2b-cold-emailing-guide" >}}B2B cold emailing guide{{< /a >}}, and you do not need an agency for it. The steps match [Reoon's own guide](https://www.reoon.com/articles/verify-bulk-email-list-dashboard/) at the time of writing (October 2026); if a label has moved since, that page shows the current one.

## What email list verification checks, and why bounces hurt

A verifier never sends an email. It tests each address in layers:

1. **Format**: the address is well formed, with no typo such as a comma in place of a dot.
2. **Domain**: the domain exists and has mail servers (MX records) that receive email.
3. **Mailbox**: the verifier asks the receiving server whether it would accept a message for this address, then hangs up before anything is sent.
4. **Risk signals**: a throwaway email service, a shared address such as info@, a domain that accepts every address, a known spam trap.

### Hard and soft bounces

A hard bounce is a permanent refusal: the mailbox, or the whole domain, does not exist. A soft bounce is temporary, such as a full mailbox or a server that is down for an hour. Verification removes most future hard bounces, the kind that does the most damage.

### Why bounces damage a sending domain

Gmail, Outlook and the other mailbox providers judge each sender by its behaviour. A sender that keeps writing to addresses that do not exist looks like someone mailing an old or bought list, which is how spammers work. The reputation of your sending domains and mailboxes drops, and your next emails land in spam, including those sent to perfectly good addresses.

Spam traps are worse. They are addresses kept only to catch careless senders, and hitting them can put a domain or a sending server on a blocklist. That is why cold email goes out from secondary domains that keep your main one safe, as my guide to {{< a key="cold-email-infrastructure" >}}cold email infrastructure{{< /a >}} explains, and why a list is verified before it reaches them.

## Before you start: an account, credits and a list

You need three things:

- **A Reoon account.** Creating one is free; verifying uses credits.
- **Enough credits for the whole list.** Reoon counts daily credits and instant credits, and the upload fails if the list holds more addresses than you have credits left.
- **The list itself**, as a CSV file (addresses plus other columns) or a TXT file (addresses only).

Where the list comes from is up to you. If your buyers are local businesses, my {{< a key="google-maps-scraper-outscraper" >}}Google Maps scraper tutorial{{< /a >}} shows how I use Outscraper to find them. By my figures, it costs about €0.003 per lead, and about €0.006 per active, qualified lead once verification has removed the dead ones: a fraction of a penny either way. It only finds businesses that have a Google listing, though, so for the others you will need another source. MLK Leadhunters goes through the options, and the suppression list you will need in step 6, in [building a cold email list](https://mlkleadhunters.com/blog/building-a-cold-email-list/).

## Step 1: prepare the CSV file

Open the list in a spreadsheet and put it in shape before the upload:

1. One row per contact, under a header row.
2. Keep the columns your emails will use, such as first name, company and city. Reoon gives your original columns back with the results, so the verified file can go straight into your sending tool.
3. Check the email column. Reoon finds it by itself when there is only one. If the file has several, only the first is verified by default: name the one you want `email`, and rename the others so that their header no longer contains that word.
4. Save as CSV, in UTF-8 if your spreadsheet offers it, so that accented names survive.

```
email,first_name,company,city
anna@example.com,Anna,Example Bakery,Bristol
tom@example.org,Tom,Example Dental,Leeds
```

{{< screenshot id="email-list-verification-reoon-01" alt="A spreadsheet with the columns email, first_name, company and city, ready to be saved as a CSV file" >}}

## Step 2: upload the list on the Bulk Verification page

1. Sign in to Reoon Email Verifier at emailverifier.reoon.com and open the **Bulk Verification** page.
2. Upload your .csv or .txt file, or paste the addresses. A file can weigh up to 50 MB.
3. If you like, tick the option that removes duplicate rows. It only removes rows where every column matches, so two rows with the same address and a different first name both stay: remove those in the spreadsheet first.
4. Start the verification.

{{< callout type="warning" >}}**Check your credits before you upload.** If the list holds more addresses than your daily and instant credits together, the upload fails.{{< /callout >}}

According to Reoon's support team, bulk verification runs in Power Mode, the full check, catch-all analysis included. Reoon also has a Quick Mode, which only answers valid, invalid, disposable or spamtrap. For a cold email list you want the full check, and the bulk page gives it to you.

{{< screenshot id="email-list-verification-reoon-02" alt="Reoon's Bulk Verification page with the file upload area, the option to paste addresses and the box that removes duplicate rows" >}}

## Step 3: read the results, status by status

Once the task is complete, every address carries one status. Reoon's [status guide](https://www.reoon.com/articles/meaning-of-different-email-verification-statuses/) defines each one; here is what they mean for a cold email list.

| Status | What it means | Before a cold email campaign |
|---|---|---|
| Safe | The mailbox exists and accepts email | Keep |
| Role account | A shared address for a function, such as info@ or sales@ | Depends on your audience (below) |
| Catch-all | The domain accepts every address, so the mailbox cannot be confirmed | Set aside (below) |
| Unknown | The server would not give a definite answer | Verify again (step 4) |
| Inbox full | A real mailbox that cannot take new mail right now | Leave out of this campaign |
| Invalid | The address cannot receive email | Drop |
| Disabled | The address existed, and the provider has shut it down | Drop |
| Disposable | A temporary address from a throwaway email service | Drop |
| Spamtrap | An address that exists only to catch careless senders | Drop |

{{< callout type="tip" >}}**A spam trap says something about the whole list.** Traps end up in lists that are old, bought or scraped without care, so if Reoon flags several, question the source before you trust the rest of the list.{{< /callout >}}

### Catch-all addresses

A catch-all domain answers yes for every address, real or not, so no verifier can tell whether a given mailbox exists there. Some of those emails arrive; others bounce later or end up in a mailbox nobody reads. If your safe list is big enough, leave them out. If a segment matters to you and many of its domains are catch-all, write to them in a separate, smaller campaign once the safe addresses have gone out, and stop at the first sign of bounces.

### Role accounts

A role address reaches whoever handles a shared inbox. For a small local business, such as a bakery or a dental practice, contact@ is often the only public address, and the owner often reads it: there, keep them. When you write to a named decision maker in a larger firm, drop them, because the person you wrote the email for may never see it.

{{< screenshot id="email-list-verification-reoon-03" alt="A completed bulk verification task in Reoon, with the number of addresses for each status" >}}

## Step 4: verify the unknown addresses again

Unknown is not a verdict: the receiving server simply did not give a clear answer at the moment of the check. Reoon's advice is to download that segment on its own, wait 15 to 30 minutes and verify it again, and many addresses get a clear answer on the second attempt. Reoon does not charge for unknown results, so the first try cost you nothing.

Whatever is still unknown after the second pass joins the catch-all addresses: set aside, not sent with the main list.

{{< screenshot id="email-list-verification-reoon-04" alt="Download options of a finished Reoon task, used to export only the unknown addresses" >}}

## Step 5: download the addresses you keep

Reoon offers four downloads, and each one comes back with your original columns:

| Download | What it contains | When to choose it |
|---|---|---|
| Safe only | Safe addresses | Named decision makers; the cleanest file for a first send |
| Safe+Role | Safe and role addresses | Small local businesses whose public address is contact@ or info@ |
| Safe+Role+Catch-All | The above, plus catch-all addresses | Only once you have decided to include catch-alls, ideally in a campaign of their own |
| Others | Everything else | Your suppression list, never a campaign |

For a first campaign, **Safe only or Safe+Role is the sensible choice**. You can also download all the results at once, or a single category.

{{< screenshot id="email-list-verification-reoon-05" alt="Reoon's download choices for a finished task: Safe only, Safe+Role, Safe+Role+Catch-All and Others" >}}

## Step 6: keep the rejects, then delete the upload

Two last jobs before you leave Reoon:

1. **Add the rejected addresses to your suppression list**, the list of addresses you never write to. Invalid, disabled, disposable and spamtrap results go there, next to the people who asked not to be contacted. Check each new list against it before you verify, so that dead addresses do not come back with the next import and use credits again.
2. **Delete the task** once the verified file is in your sending tool. Reoon deletes uploaded files and results from its servers after 15 days anyway, and you can delete them sooner from the **Results** page. Named contacts are personal data, and data protection law expects you not to keep them longer than you need; my guide to {{< a key="cold-email-gdpr-uk-france" >}}cold email and GDPR{{< /a >}} covers the rest of the rules.

{{< screenshot id="email-list-verification-reoon-06" alt="Reoon's Results page with the option to delete a finished verification task" >}}

## What Reoon costs, and the alternatives

Reoon is well priced for a verifier, and I got it through a good deal on AppSumo. By my figures at the time, the starter tier cost about £60 ($79), paid once, for 100,000 verifications plus 500 a day. **That is plenty for a small business.** Higher tiers went up to 700,000 verifications, and you can still buy more credits if you need them.

Deals change and end, so compare the current AppSumo offer with [Reoon's own pricing](https://www.reoon.com/email-verifier/) before you buy. Read my answer to {{< a key="appsumo-review" >}}is AppSumo worth it{{< /a >}} first, too: the site works a bit like a casino, and Reoon is my exception rather than the rule. A lifetime deal ends if the company closes, but a verifier is easy to replace: another one could check your next list the same day.

ZeroBounce and NeverBounce are two well-known verifiers that do the same job. I am not rating them here: compare their prices with the size of your lists and how often you send. Each tool names its statuses its own way, but the logic of this tutorial stays the same: keep the safe addresses, set the uncertain ones aside, drop the rest.

## Before your first send: a checklist

1. Every address went through bulk verification, and the unknown ones through a second check.
2. You imported Safe only or Safe+Role; any catch-all addresses wait for a campaign of their own.
3. The rejects are on your suppression list, with everyone who asked not to be contacted.
4. The task is deleted from Reoon, or will be within 15 days.
5. Your sending mailboxes are warmed up, with SPF, DKIM and DMARC in place.

Then import the file into your sending tool: my {{< a key="instantly-campaign-setup" >}}Instantly campaign setup{{< /a >}} tutorial picks up from there. Watch the bounces over the first days. A sudden rise means a bad batch, so pause the campaign and verify that part of the list again.

Verification is one of the easiest steps to do yourself. If you would rather hand over the whole campaign, from the list to the last follow-up, and keep only the replies, that is how [MLK Leadhunters](https://mlkleadhunters.com/) works.
