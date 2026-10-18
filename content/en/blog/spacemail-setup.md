---
title: "Spacemail setup: mailbox, DNS records and email app settings, step by step"
seo_title: "Spacemail setup: mailbox, DNS records and IMAP settings"
description: "Spacemail setup step by step: choose a plan, create the mailbox, add the MX, SPF, DKIM and DMARC records, then connect your phone, Outlook or Apple Mail."
slug: "spacemail-setup-tutorial"
translationKey: "spacemail-setup"
date: 2026-10-17T08:48:00+02:00
lastmod: 2026-10-17T08:48:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["Spacemail setup", "Spacemail DNS records", "Spacemail IMAP settings", "Spacemail SMTP settings", "Spacemail MX records", "Spacemail price"]
summary: "To set up Spacemail, choose a plan (Pro, Business or Advanced, each with a 30-day free trial), connect it to your domain with Unbox in Spacemail Manager and create the mailbox. On Spaceship's nameservers the mail records are added for you; elsewhere, add two MX records (mx1 and mx2.spacemail.com), the SPF include and the DKIM key, and check that a DMARC record exists. Then connect your apps over IMAP (mail.spacemail.com, port 993) and SMTP (port 465)."
cover: "spacemail-setup"
cover_alt: "Spacemail inbox connected to a domain through its MX, SPF and DKIM records"
related: ["spaceship-domain-dns-tutorial", "professional-email-address", "spf-dkim-dmarc-setup", "best-email-provider-cold-email", "spaceship-vs-namecheap"]
services: ["websites"]
faq:
  - q: "Is Spacemail included with a Spaceship domain?"
    a: "No. The domain and the mailbox are separate subscriptions, and you can buy one without the other. Spaceship's Web Hosting and EasyWP plans come with special Spacemail plans, so check what your hosting already includes before you order."
  - q: "Can I move my old emails to Spacemail?"
    a: "Yes. Spaceship offers a migration tool that copies the messages from your current provider. Create the Spacemail mailboxes before you change the MX records, so incoming mail always has somewhere to land."
  - q: "How many emails can a Spacemail mailbox send?"
    a: "Spaceship's help sets the limit at 500 emails an hour per mailbox on paid plans and 20 an hour during the trial, with at most 50 recipients per email (To, Cc and Bcc together) and 50 MB per message. Aliases count towards their mailbox's limit."
  - q: "Does Spacemail support POP3?"
    a: "Yes: server mail.spacemail.com, port 995, with SSL. Prefer IMAP if you read your email on more than one device: POP3 is designed to download messages to one device, while IMAP keeps the same mailbox in sync everywhere."
  - q: "Can Spacemail receive emails sent to any address at my domain?"
    a: "Yes, with a catch-all mailbox, which Spaceship's help explains how to set up. It collects mail sent to addresses that do not exist at your domain, including the spam sent to invented addresses."
---

Spacemail is the business email service of Spaceship, the registrar Namecheap built, and a Spacemail setup comes down to three jobs: create the mailbox, publish the DNS records that route mail to it, and connect the apps you read it in. This tutorial covers all three, with the values from Spaceship's help pages at the time of writing (October 2026).

I have my habits at Spaceship, and email is where the difference with my old set-up showed most. I used to run my email on Microsoft, and it was a pain. With Namecheap and Spaceship, it has not been: the set-up is easy, or at least I know my way around it.

Below: the plans and prices, how to tell whether the DNS part will be done for you, then seven steps from the order to the mailbox on your phone. If you are still choosing a provider, my guide to getting a {{< a key="professional-email-address" >}}professional email address{{< /a >}} compares the options and what they cost, and {{< a key="domain-hosting-email-guide" >}}domain vs hosting vs email{{< /a >}} explains how the three fit together.

## Spacemail plans and prices in October 2026

Spacemail is a subscription of its own, separate from the domain. At the time of writing (October 2026), [Spaceship's Spacemail page](https://www.spaceship.com/business-email/) lists three plans, priced for a two-year term:

| Plan | Mailboxes included | Storage per mailbox | Two-year price, then renewal |
|---|---|---|---|
| Pro | 1 | 5 GB | $18.88 (about £14), the same at renewal |
| Business | 3 | 10 GB | $28.68 (about £21.50), then $39.84 (about £30) |
| Advanced | 5 | 15 GB | $44.69 (about £33.50), then $63.84 (about £48) |

Pro works out at about $0.79 (about 60p) a month. Prices are in US dollars and the pound figures are my approximate conversions. Spaceship runs promotions, and some of its other pages quote different starting prices, so the order page has the final word.

Every plan starts with a **30-day free trial**. Two limits apply during those 30 days: you cannot add extra mailboxes, and each mailbox may send far fewer emails per hour than on a paid plan (the FAQ below gives the figures). Fine for testing, not for a launch week.

To choose, count the people who need their own inbox. One person working alone fits Pro; a team of two or three fits Business, whose extra storage also helps if you keep years of attachments. More storage can be bought separately on every plan.

## Before your Spacemail setup: where is your domain's DNS?

Mail reaches Spacemail only once your domain's MX records, the DNS lines that tell other servers where to deliver your email, point to it. Who writes those records depends on one setting: the domain's **nameservers**, which name the company that hosts its DNS.

| Your domain's DNS | What Spaceship does | Your part |
|---|---|---|
| On Spaceship's nameservers | Adds the mail records when you connect Spacemail | Check them (step 3), then DMARC (step 4) |
| Anywhere else: another registrar, Cloudflare, a web host | Lists the records for you to copy | Add them at that DNS host (step 3), then DMARC (step 4) |

A domain registered at Spaceship normally uses Spaceship's nameservers, shown on the **Advanced DNS** page, as my {{< a key="spaceship-domain-dns-tutorial" >}}Spaceship DNS settings tutorial{{< /a >}} shows. For a domain registered elsewhere, look in its settings at that registrar: the records go wherever the nameservers point, which is not always the registrar itself. If MX and TXT records are new to you, {{< a key="dns-records-explained" >}}DNS records explained{{< /a >}} covers each type in plain words.

## Step 1: order Spacemail and connect it to your domain

1. On spaceship.com, open the Spacemail page, pick a plan and start the trial, or pay.
2. In your Spaceship account, open **Spacemail Manager**.
3. Click **Unbox** on the new subscription to connect it to a domain, choose the domain, then click **Start**.

Unbox is Spaceship's word for attaching a product to a domain, and you will meet it elsewhere in the account. The domain does not have to be registered at Spaceship: Spacemail also works with a domain registered elsewhere, which stays where it is.

{{< screenshot id="spacemail-setup-01" alt="Spacemail Manager showing a new subscription with the Unbox button, and the domain chosen before clicking Start" >}}

## Step 2: create the mailbox and its password

1. With the subscription connected, click **Configure Products**, then **Configure**.
2. Type the name that goes before the @: `contact` gives contact@yourdomain.co.uk.
3. Click **Create mailboxes**. Spacemail generates a password: copy it, or type your own instead (possible since a June 2025 update).
4. Click **Finish**.

Choose names that will outlive staff changes. A role address such as contact@ or accounts@ can pass from one person to the next, while firstname@ leaves with its owner. Store each password in a password manager straight away: every phone, computer and app you connect will ask for it, and it is not your Spaceship account password.

{{< screenshot id="spacemail-setup-02" alt="Spacemail mailbox creation form with the name contact typed in and the Create mailboxes button" >}}

## Step 3: add the Spacemail DNS records

### On Spaceship's nameservers: check, do not type

Spaceship adds the mail records when you connect Spacemail, and the mailbox works straight away. Open **Advanced DNS** for the domain anyway and check that you can see two MX records, a TXT record starting with `v=spf1` and a DKIM record on `spacemail._domainkey`. Take a screenshot of the list: if mail ever goes missing, you will know what the zone looked like when it worked.

### DNS elsewhere: copy the records to your DNS host

Spaceship still prepares the exact values for your domain. In **Advanced DNS**, they sit under **Inactive records**, in the group **Spacemail DNS records**: inactive because the internet does not read that zone. Your job is to copy them to the company that hosts the zone the internet does read. According to [Spaceship's help page on third-party domains](https://www.spaceship.com/knowledgebase/spacemail-dns-records-third-party-domain/), they are:

```
Type   Host                   Value                                   Priority
MX     @                      mx1.spacemail.com                       0
MX     @                      mx2.spacemail.com                       0
TXT    @                      v=spf1 include:spf.spacemail.com ~all
TXT    spacemail._domainkey   v=DKIM1; k=rsa; p=... (your own key, copied from Spaceship)
```

Line by line:

- **MX**: add both, with priority 0. Some hosts impose their own numbers (Wix sets 10 and 20), which is fine as long as both records are there. Delete the MX records of any previous provider, or part of your mail will keep going to it.
- **SPF**: a domain may have only one TXT record starting with `v=spf1`, and two make SPF fail. If one already exists, for a newsletter tool for example, add `include:spf.spacemail.com` inside it, before the `~all` (or `-all`) at the end.
- **DKIM**: copy the value in full. It is long, and one missing character breaks the signature. Enter the host as `spacemail._domainkey` only: most panels add your domain after it themselves.
- **Domain registered elsewhere**: add the verification TXT record too. Its value is in **Advanced DNS**, behind the **Manage** button and the **View guides** link, in the section **Verifying domain ownership**.

Spaceship's help has separate step-by-step guides for Namecheap, GoDaddy, Squarespace, Wix and Cloudflare. Changes usually show within a few hours, and up to 48 hours if you also changed nameservers.

{{< screenshot id="spacemail-setup-03" alt="Spaceship Advanced DNS listing the Spacemail DNS records: two MX records, the SPF TXT record and the DKIM record on spacemail._domainkey" >}}

{{< callout type="warning" >}}**Read each value back once it is saved.** Some DNS panels glue your domain to the end of a target typed without its final dot, so `mx1.spacemail.com` becomes `mx1.spacemail.com.yourdomain.co.uk`. If you see that, edit the record and end the target with a dot: `mx1.spacemail.com.` It is the one real trap I have hit when connecting domains, and my tutorial on the {{< a key="ovh-dns-squarespace" >}}OVH trailing-dot trap{{< /a >}} shows it in detail.{{< /callout >}}

## Step 4: add a DMARC record

DMARC is a TXT record that tells receiving servers what to do with mail that fails SPF and DKIM, and where to send reports about it. Spaceship's help on third-party domains says Spacemail does not create it, so check whether your domain already has one: look for a TXT record on the host `_dmarc`. A domain needs exactly one. If there is none, add:

```
Type   Host     Value
TXT    _dmarc   v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.co.uk
```

`p=none` only observes: nothing is blocked while the reports confirm that your real mail passes. Once they do, move to `p=quarantine`, then `p=reject`. The `rua` address receives the reports, so point it at a mailbox or alias you actually read. My tutorial to {{< a key="spf-dkim-dmarc-setup" >}}set up SPF, DKIM and DMARC{{< /a >}} explains how to read those reports and when to tighten the policy.

{{< screenshot id="spacemail-setup-04" alt="DNS form adding a TXT record on the host _dmarc with the value v=DMARC1; p=none; rua=mailto:" >}}

## Step 5: check the records and send a test

After a few hours, check the zone from a terminal, or with the free Dig tool in Google's Admin Toolbox:

```
$ dig +short MX yourdomain.co.uk
0 mx1.spacemail.com.
0 mx2.spacemail.com.

$ dig +short TXT spacemail._domainkey.yourdomain.co.uk
"v=DKIM1; k=rsa; p=..."

$ dig +short TXT _dmarc.yourdomain.co.uk
"v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.co.uk"
```

`dig +short TXT yourdomain.co.uk` lists the SPF record among the domain's other TXT records.

Then the real test: send an email from the new mailbox to a Gmail address. In Gmail, open the message, click the three dots and choose **Show original**. The top of the page shows SPF, DKIM and DMARC, each marked PASS when the set-up is right; a FAIL tells you which record to recheck. Reply to that email as well, to check that mail comes in as well as goes out.

{{< screenshot id="spacemail-setup-05" alt="Gmail Show original page for a test email sent from Spacemail, with SPF, DKIM and DMARC marked PASS" >}}

## Step 6: sign in to the Spacemail webmail

The webmail is at www.spacemail.com. Sign in with the full email address as the username and the mailbox password. You can also open it from **Spacemail Manager**: choose the mailbox, then click **Login**.

The webmail includes a calendar, and its settings hold the switches for IMAP, POP3 and SMTP access, which are on by default. Leave them on if you want to read the mailbox in other apps.

{{< screenshot id="spacemail-setup-06" alt="Spacemail webmail inbox at spacemail.com after the first sign-in" >}}

## Step 7: add Spacemail to your phone, Outlook or Apple Mail

On a phone, the simplest route is Spacemail's own app for iOS or Android: sign in with the address and the mailbox password. For any other app, choose IMAP and enter the values from [Spaceship's help page on email clients](https://www.spaceship.com/knowledgebase/connect-spacemail-to-email-client/):

| Setting | Incoming mail (IMAP) | Outgoing mail (SMTP) |
|---|---|---|
| Server | `mail.spacemail.com` | `mail.spacemail.com` |
| Port | `993` | `465` |
| Encryption | SSL/TLS | SSL/TLS |
| Username | Your full email address | Your full email address |
| Password | The mailbox password | The mailbox password |

Where to type them:

- **Outlook**: add an account with your address, open the advanced options to set it up manually, then choose IMAP.
- **Apple Mail on a Mac**: **Mail** > **Add Account** > **Other Mail Account**. If Mail cannot find the servers on its own, it asks for the values above.
- **iPhone**: in the Mail settings, add an account, choose **Other**, then **Add Mail Account**, and pick IMAP when asked.
- **Android**: in the Gmail app, choose **Add another account**, then **Other**.

Spaceship's help has separate guides for macOS Mail, Apple Mail on the iPhone and Outlook for iOS, in case a screen does not match these steps.

{{< screenshot id="spacemail-setup-07" alt="Outlook manual IMAP account form filled in with mail.spacemail.com, port 993 for incoming and 465 for outgoing mail, SSL/TLS" >}}

## Can you use Spacemail for cold email?

Spaceship's published rules say no to unsolicited bulk email, so not without its written agreement.

My own preference is clear: Microsoft works very well for cold email but is tricky to set up, Google is worse, and Spacemail is the one I encourage people to look at, because in my experience it is the easiest of the three to set up. Spaceship's rules are just as clear, and they come first.

{{< callout type="warning" >}}**Spaceship forbids unsolicited bulk email.** Its help pages ban unsolicited commercial, bulk or automated email with zero tolerance and say the service is not designed for mass mailing, and its hosting acceptable use policy counts any email sent to people who have not opted in as unsolicited. Its [guide to warming up a domain](https://www.spaceship.com/knowledgebase/warm-up-domain-email-deliverability/) allows only a manual, gradual warm-up with genuine opt-in recipients, and prohibits automated warm-up through third-party tools, which is exactly what a sending platform's warm-up does. Its terms also set liquidated damages for spam of $500 (about £375) or $1 per message, whichever is greater.{{< /callout >}}

So before you connect a single Spacemail mailbox to a sending tool such as Instantly, ask Spaceship's support in writing what they accept, and keep the answer. The hourly limits in the FAQ below are ceilings for everyday email, not a cold email volume. Whatever the provider, send from a secondary domain rather than the one your customers write to: MLK Leadhunters explains why you should [never send cold emails from your main domain](https://mlkleadhunters.com/blog/never-send-from-your-main-domain/). My comparison of the {{< a key="best-email-provider-cold-email" >}}best email provider for cold email{{< /a >}} sets Spacemail against Google Workspace and Microsoft 365 on limits, set-up and terms.

## If mail does not arrive or will not send

| What you see | Likely cause | Fix |
|---|---|---|
| Nothing reaches the new mailbox | The MX records were added at a company the nameservers do not point to | Add them at the DNS host the nameservers name |
| Some messages arrive, others go to the old mailbox | A previous provider's MX records are still there | Delete them; keep only mx1 and mx2.spacemail.com |
| Your emails land in spam | SPF or DKIM missing, or two SPF records | One SPF record with the Spacemail include, and the full DKIM value |
| DKIM shows FAIL in Show original | A truncated value, or a host that repeats the domain | Paste the value again; enter the host as `spacemail._domainkey` only |
| An app receives but cannot send | Wrong SMTP port or encryption, or SMTP access switched off | Port 465 with SSL/TLS; in **Spacemail Manager**, check **IMAP/POP3/SMTP** in the mailbox menu |
| The app or webmail rejects the password | A username without the domain, or your Spaceship account password | The full email address, and the mailbox password |
| Sending is refused after a burst of emails during the trial | The trial's hourly limit | Wait an hour; the paid plans allow far more |

If none of these fits, Spaceship's support is there 24/7, and in my experience every issue I have taken to them has been resolved.

## Your Spacemail checklist

1. A plan chosen and connected to the right domain with **Unbox**.
2. The mailboxes created, each password in a password manager.
3. MX, SPF and DKIM in place where the nameservers point, with no old MX left behind.
4. One DMARC record on `_dmarc`, starting at `p=none`.
5. A test email to Gmail showing SPF, DKIM and DMARC as PASS, and a reply received.
6. The mailbox on your phone and computer over IMAP and SMTP.
7. A reminder in your calendar a few days before the trial ends, so you pick the paid plan in time.

And if you would rather hand the whole thing over, email setup is one of the fixed-price jobs I take on, on its own or with a {{< a page="/services/websites" >}}new website{{< /a >}}.
