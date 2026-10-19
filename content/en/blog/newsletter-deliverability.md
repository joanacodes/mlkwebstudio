---
title: "Newsletter deliverability: the Gmail, Yahoo and Outlook sender rules explained"
seo_title: "Gmail bulk sender requirements, plus Yahoo and Outlook"
description: "Gmail bulk sender requirements in plain English: SPF, DKIM, DMARC, one-click unsubscribe and the 0.3% spam line, plus Yahoo and Outlook rules and a checklist."
slug: "gmail-bulk-sender-requirements"
translationKey: "newsletter-deliverability"
date: 2026-10-18T23:27:00+02:00
lastmod: 2026-10-18T23:27:00+02:00
category: "funnels"
article_type: "guide"
keywords: ["Gmail bulk sender requirements", "newsletter deliverability", "Yahoo sender requirements", "Outlook high-volume sender requirements", "one-click unsubscribe", "Google Postmaster Tools"]
summary: "Since February 2024, Gmail has required every sender to pass SPF or DKIM and keep its spam rate under 0.3%; from about 5,000 messages a day to personal Gmail accounts, it also requires SPF, DKIM, an aligned DMARC record and one-click unsubscribe honoured within two days, as Yahoo does. Outlook.com has required SPF, DKIM and DMARC from 5,000 messages a day since 5 May 2025. For a newsletter: your own authenticated domain, people who asked, and a spam rate under 0.1%."
cover: "newsletter-deliverability"
cover_alt: "The title Newsletter deliverability in white on a ribbed-glass panel, over a photo of stacked envelopes with a notification badge"
related: ["spf-dkim-dmarc-setup", "newsletter-tools-comparison", "newsletter-metrics", "email-list-verification-reoon", "cold-email-infrastructure"]
services: ["automation"]
faq:
  - q: "Does Gmail's Promotions tab count as spam?"
    a: "No. Promotions is a tab of the inbox, and readers still find your newsletter there. The sender rules decide something else: inbox, spam folder or outright rejection."
  - q: "Do invoices and password emails follow the same rules?"
    a: "For authentication, yes: every message from your domain should pass SPF or DKIM, and Google counts all messages from the same primary domain towards the 5,000 a day. The unsubscribe rules are for marketing and subscribed messages, such as a newsletter."
  - q: "Is Gmail's bulk sender status permanent?"
    a: "Yes. Google says senders classified as bulk senders stay classified that way, even if their volume drops later. One large send is enough to bring in the stricter rules for good."
  - q: "Do I need a dedicated IP address for my newsletter?"
    a: "Not for a typical small-team newsletter. Newsletter tools send from shared addresses they look after, and a dedicated IP needs a large, steady volume to build a reputation of its own. Your domain's authentication and your spam rate matter more."
  - q: "How long does a fix take to show in Postmaster Tools?"
    a: "Up to seven days, according to Google. The dashboards are not real-time and usually update within 24 hours, and on days when you send little mail to Gmail accounts the figures may be incomplete."
---

Gmail, Yahoo and Outlook.com now publish written rules for the people who send email to their users, and a newsletter is no exception. The Gmail bulk sender requirements set the tone: your own domain authenticated with SPF, DKIM and DMARC, a one-click unsubscribe, and a ceiling on how many readers mark you as spam. Since November 2025, Gmail has stepped up enforcement, with temporary and permanent rejections for mail that fails them.

Deliverability is the share of your emails that reach the inbox, rather than the spam folder or a bounce report. For a small-team business with a newsletter, it decides whether the hours spent on an issue reach anyone at all. This article is part of my {{< a key="funnels-newsletters-guide" >}}guide to sales funnels and newsletters{{< /a >}}.

## Who the rules apply to: the 5,000-a-day line

Gmail's rules come in two tiers: basics for every sender, and stricter ones for bulk senders. Gmail and Outlook.com both draw the line at about 5,000 messages a day, but they count differently:

- **Gmail** treats you as a bulk sender once you send about 5,000 messages or more to personal Gmail accounts within 24 hours. Messages from the same primary domain count together, subdomains included.
- **Outlook.com** counts 5,000 or more messages a day to its consumer addresses (Outlook.com, Hotmail and Live) that use the same domain in the From address.

Yahoo keeps its own list of requirements for bulk senders, close to Google's on the essentials.

The line comes sooner than it sounds. Say your list has 9,000 subscribers and 60% of them use Gmail: one Tuesday send puts 5,400 messages into Gmail within a day, and you are a bulk sender from then on.

Business inboxes on Google Workspace or Microsoft 365 sit outside these counts, but they run filters of their own, and a B2B newsletter goes mostly to them. So my advice is the same for every list: meet the bulk-sender rules from the first send, before the list grows.

## Gmail bulk sender requirements, line by line

Google's [email sender guidelines](https://support.google.com/mail/answer/81126) have applied since February 2024. Here is what they ask, translated for a newsletter.

### What every sender must do

- **SPF or DKIM** on the domain you send from. SPF lists the servers allowed to send for your domain; DKIM signs each message with a key published in your DNS.
- **Valid forward and reverse DNS** for the sending servers, and a **TLS** connection. When you send through a newsletter tool, both are its job.
- **A spam rate below 0.3%**, as measured in Google Postmaster Tools. Google advises staying below 0.1%.
- **No posing as Gmail.** Google tells senders not to impersonate Gmail From headers.

### What bulk senders must add

- **SPF and DKIM**, both, not one or the other.
- **A DMARC record** with at least `p=none`, the policy that watches and reports without blocking anything.
- **Alignment.** The domain in your From address must match the domain that passed SPF or DKIM. With a newsletter tool, alignment usually comes from DKIM, once the tool signs with your domain instead of its own.
- **One-click unsubscribe** on marketing and subscribed messages, following the RFC 8058 standard, plus a clearly visible unsubscribe link in the body, with unsubscribes processed within two days.
- **The same spam ceiling, with a consequence.** Above 0.3%, Google says a bulk sender is not eligible for mitigation, its support for delivery problems.

One-click unsubscribe is two lines in the message headers, which mail apps can turn into an unsubscribe button next to your name:

```
List-Unsubscribe: <https://news.example.com/unsubscribe/a1b2c3>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

### What happens to mail that fails

The requirements themselves have not changed since 2024. The enforcement has: Google's FAQ says that since November 2025 Gmail has been ramping up action on non-compliant traffic, with temporary rejections (4xx codes, retried later) and permanent ones (5xx codes, never delivered). In your newsletter tool, these show up as bounces.

{{< callout type="tip" >}}When an issue bounces, read the error in your tool's bounce report before changing anything. The code and the sentence after it usually say whether the problem is **authentication** or something else.{{< /callout >}}

## Yahoo and Outlook: the same core, a few differences

Yahoo's [sender best practices](https://senders.yahooinc.com/best-practices/) ask bulk senders for what Google asks: SPF and DKIM, a DMARC policy of at least `p=none` that passes, a From domain aligned with SPF or DKIM, one-click unsubscribe honoured within two days, a visible unsubscribe link in the body, and a complaint rate below 0.3%.

Microsoft's rules for Outlook.com, Hotmail and Live addresses are narrower. Since 5 May 2025, a domain that sends them 5,000 or more messages a day must pass SPF and DKIM, publish a DMARC record (`p=none` at least) and align one of the two with the From domain. Mail that fails is rejected with the error `550 5.7.515 Access denied`, as [Microsoft's support page](https://support.microsoft.com/en-us/outlook/fix-ndr-error-550-5-7-515-in-outlook-com) explains. A working unsubscribe link, list hygiene, honest subject lines and consent appear in Microsoft's announcement as recommendations rather than requirements.

| Bulk-sender rule | Gmail | Yahoo | Outlook.com |
|---|---|---|---|
| In force since | February 2024, stricter enforcement from November 2025 | February 2024 | 5 May 2025 |
| SPF and DKIM | Required | Required | Required |
| DMARC at `p=none` or stricter, aligned | Required | Required | Required |
| One-click unsubscribe and a visible link in the body | Required | Required | Recommended (a working unsubscribe link) |
| Unsubscribes processed within two days | Required | Required | Not required |
| Complaint rate ceiling | 0.3%, aim for 0.1% | 0.3% | Not part of the requirements |

## What your newsletter tool does, and what is left to you

A newsletter tool such as Brevo, MailerLite, Mailchimp or Kit runs the sending servers, removes addresses that bounce, and should add the unsubscribe headers and process unsubscribes for you. My {{< a key="newsletter-tools-comparison" >}}comparison of newsletter tools{{< /a >}} helps if you have not picked one yet. Four things stay with you.

### Send from your own domain, never from a Gmail address

A newsletter tool cannot sign mail for gmail.com, because only Google controls that domain's DNS. A newsletter sent from you@gmail.com can therefore never align for DMARC, whatever you set up, and it runs straight into Google's warning about impersonating Gmail. Use an address at your own domain, such as hello@ or news@, and make sure it can receive replies: Microsoft recommends a From or Reply-To address that does.

### Authenticate your domain in the tool, then add DMARC

Look for the settings page about domain or sender authentication in your tool. It gives you two or three DNS records, often CNAMEs, that let it sign your newsletter with DKIM for your own domain. Add them to the DNS zone at your registrar or host, then come back and click the tool's verify button. Squarespace and OVH can be tricky: when I connected domains there, the only issue was a single dot to add at the end of an entry.

Then publish a DMARC record if your domain does not have one yet. One TXT record is enough to start:

```
_dmarc.example.com   TXT   "v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com"
```

`p=none` meets all three providers' rules. The `rua` address receives reports that show which services send email in your name; once every one of them passes, you can tighten the policy. My {{< a key="spf-dkim-dmarc-setup" >}}step-by-step SPF, DKIM and DMARC tutorial{{< /a >}} covers the records at Spaceship, Namecheap and OVH, and how to tighten DMARC without blocking your own mail.

To check the result, send a test issue to a Gmail address, open it on a computer, click the three-dot menu next to **Reply**, then **Show original**. You want PASS on the SPF, DKIM and DMARC lines, with your own domain on the DKIM line rather than the tool's.

### Give the newsletter a subdomain, or not

Most tools let you send from a subdomain such as news.example.com. It keeps the newsletter's DKIM keys and DMARC reports apart from your everyday mailboxes, which makes a problem easier to trace. It does not take you out of the rules: Google counts every message from the same primary domain together, and Postmaster Tools shows compliance for the whole domain. A subdomain is worth it when several tools already send as your main domain; with one newsletter tool, the main domain works too.

### Check the unsubscribe headers yourself

On the same Show original page, look for the two List-Unsubscribe lines shown earlier. If they are missing, ask your tool's support before the next send. Keep a visible unsubscribe link in the footer as well: Google and Yahoo both require one from bulk senders, and a reader who finds it in two seconds has no reason to click **Report spam** instead.

## Keeping your spam rate under 0.1%

Google's spam rate is the share of your messages that Gmail users mark as spam, calculated each day. 0.3% means three complaints per 1,000 emails, and 0.1% means one. A newsletter that reaches 2,000 Gmail inboxes hits Google's ceiling with six clicks on **Report spam**.

No DNS record lowers that number. These habits do:

1. **Only email people who asked.** Never buy or rent a list, and never import contacts who did not subscribe. The consent rules differ between the UK and EU countries; my guide to {{< a key="newsletter-consent-gdpr" >}}newsletter consent, soft opt-in and double opt-in{{< /a >}} explains them. This is general information, not legal advice.
2. **Confirm sign-ups by email.** Double opt-in keeps out typos and fake addresses, and it reminds new subscribers who you are.
3. **Say what readers will get, then stick to it.** The sign-up form should state the topic and the rhythm; a monthly newsletter that suddenly turns weekly collects complaints.
4. **Use a sender name people recognise**: your business name, or your own name with it, the same every time.
5. **Verify an old list before importing it.** People change jobs and abandon addresses, and a burst of bounces on one send damages your standing with every provider. I use Reoon every day for cold email lists, and the same check works on an old newsletter list: my {{< a key="email-list-verification-reoon" >}}email list verification tutorial{{< /a >}} shows the steps. Verification removes dead addresses; it cannot make anyone want your emails.
6. **Remove people who stopped reading.** Pick a window that suits your rhythm, for example six months without a click for a monthly newsletter, send one last email asking whether they still want it, then remove those who do not answer. Opens are a poor guide here, for the reasons in my article on {{< a key="newsletter-metrics" >}}newsletter metrics{{< /a >}}.
7. **Ramp up a new domain.** For the first sends from a new domain or a new tool, start with your most recent subscribers and add the rest over the next issues, rather than mailing the whole list on day one.

## Keep the newsletter away from your cold email set-up

Cold email goes to people who never asked for it, so it belongs on secondary domains and mailboxes built for it, as described in my guide to {{< a key="cold-email-infrastructure" >}}cold email infrastructure{{< /a >}}. The newsletter goes to people who signed up, from your main domain or its subdomain, through a newsletter tool. Mixing the two puts your newsletter, and your main domain, at the mercy of every cold campaign.

The content differs too. My cold emails are plain text, three lines at most for the first one, with a phone number and no links or HTML at all, to ensure good delivery. A newsletter can carry links and images because readers asked for it, but restraint still helps: links to your own domain, no link shorteners, and real text rather than one large image.

Never move cold prospects into the newsletter list either. They did not subscribe, and they are the readers most likely to report you.

## Watching the numbers: Postmaster Tools, Sender Hub and SNDS

Most of what you need is in your newsletter tool's reports: bounces, unsubscribes and spam complaints for each send. For Gmail, add [Google Postmaster Tools](https://support.google.com/mail/answer/14668346). It is free, you prove you own the domain with a DNS record, and it shows your spam rate and a **Compliance status** page that checks each sender requirement and marks it compliant, needs work or no data found. The domain and IP reputation charts that older guides describe belong to the legacy interface: Google left them out of the new version and plans to retire the old one.

Yahoo's Sender Hub offers a dashboard and a Complaint Feedback Loop, which needs DKIM; both are worth a look once a good share of your list is on Yahoo. Microsoft's SNDS (Smart Network Data Services) reports by sending IP address, so it only helps if your tool gives you a dedicated IP. On the shared addresses most small teams use, that monitoring is your tool's job.

## Newsletter deliverability checklist, and when to hand it over

Before your next issue, check these eight points:

1. The From address is at your own domain or a subdomain, never @gmail.com, and it can receive replies.
2. DKIM for that domain is set up and verified in your newsletter tool.
3. A DMARC record exists, at `p=none` or stricter, with a report address.
4. Show original on a test email reads PASS for SPF, DKIM and DMARC, with your domain on the DKIM line.
5. The List-Unsubscribe and List-Unsubscribe-Post headers are present, and the footer has a visible unsubscribe link.
6. Every subscriber asked to be on the list, and old lists were verified before import.
7. Postmaster Tools is set up, and your spam rate stays under 0.1%.
8. Cold email runs on separate domains and never feeds the newsletter list.

For most small teams, this is an afternoon with your tool's help pages and your DNS zone, and you do not need anyone for it. It gets harder when several tools send as the same domain, when DMARC reports show services nobody remembers adding, or when an issue starts bouncing with `550 5.7.515`. Email set-up is one of the fixed-price jobs I take on.
