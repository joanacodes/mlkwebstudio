---
title: "How to transfer a domain to another registrar (.com and .co.uk)"
seo_title: "How to transfer a domain to a new registrar (.com, .co.uk)"
description: "How to transfer a domain to another registrar: switch off the lock, get the auth code (or change a .co.uk's IPS tag) and keep your site and email online."
slug: "how-to-transfer-a-domain"
translationKey: "transfer-domain-name"
date: 2026-10-17T08:54:00+02:00
lastmod: 2026-10-17T08:54:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["how to transfer a domain", "transfer domain to another registrar", "domain transfer auth code", "transfer .co.uk domain IPS tag", "transfer domain from Squarespace", "how long does a domain transfer take"]
summary: "To transfer a domain, copy its DNS records, switch off the transfer lock at your current registrar, get the authorisation (EPP) code and enter it at the new registrar, then approve the transfer: a .com usually moves within a week and gains a year. A .co.uk has no code: its IPS tag is changed to the new registrar's tag instead. Keep the same nameservers until the transfer completes, and your website and email stay online throughout."
cover: "transfer-domain-name"
cover_alt: "A man at a computer next to a flow diagram and the words Registrar A to B"
related: ["hostinger-renewal-transfer", "best-domain-registrar", "recover-domain-name", "dns-records-explained", "spaceship-vs-namecheap"]
services: ["rescue"]
faq:
  - q: "Does transferring a domain affect SEO?"
    a: "No. Search engines see the domain and the website, not the company you pay for the registration. Rankings only suffer if the site goes offline or the DNS breaks during the move, which is why the records are copied before anything else."
  - q: "Can I transfer a domain that has expired?"
    a: "Often, as long as it has not reached its redemption period. Spaceship, for example, accepts expired domains unless they are in redemption, and .uk domains even then. Once a domain is in redemption, restore it at your current registrar first."
  - q: "Can I move a domain to another account at the same registrar?"
    a: "Usually, yes. Many registrars offer an account-to-account move, often called a push, that keeps the domain where it is. It is not a transfer between registrars, so there is no authorisation code and no extra year: look for it in your registrar's help pages."
  - q: "Can I cancel a domain transfer once it has started?"
    a: "It depends on the registrars. While it is pending, the notice from your current registrar may include a link to refuse it, but Squarespace, for one, says a transfer cannot be cancelled once the new provider has the code. Once it has completed, the only way back is another transfer, which a registrar can refuse for 60 days under the current rules for .com."
  - q: "Is it safe to send someone my authorisation code?"
    a: "Only to the registrar you are moving to, through its transfer form. Whoever holds the code can request a transfer of your domain, so keep it out of email threads and shared documents. If it may have leaked, ask your registrar for a new one and keep the transfer lock on until you are ready."
---

Learning how to transfer a domain is the easy part: once you hand over a code, the two registrars do most of the work. What goes wrong is the DNS: a domain that moves without its records can take your website and your email down with it.

I have worked with six registrars, some by choice and some because a client's domain was already there: Google Domains (now Squarespace), Namecheap, Spaceship, Infomaniak, Hostinger and OVH. Their control panels look nothing alike, but the method does not change, because the rules come from above them: ICANN's for .com and the other generic extensions, Nominet's for .co.uk. The screenshots use Spaceship, where my habits are, as the registrar you are moving to.

One thing first: a transfer changes who you pay for the domain, nothing else. My guide to {{< a key="domain-hosting-email-guide" >}}domain vs hosting vs email{{< /a >}} explains which piece does what.

## What a domain transfer changes, and what it does not

A registrar is the company through which a domain is registered and renewed. A transfer moves that registration to another registrar: the name and its owner stay the same, and so do its nameservers unless you change them. The word "transfer" gets used for other jobs too, so check which one you need:

| You want to… | What it takes | Is it a transfer? |
|---|---|---|
| Pay another company for the domain, or keep all your domains in one account | A transfer between registrars | Yes, this guide |
| Show a new website on the domain | New DNS records where the domain's nameservers point | No |
| Hand the domain to another person or company | A change of registrant, at the current registrar | No |
| Move the website or the mailboxes | A new host or email provider | No, they move separately |

Good reasons to transfer: one login and one bill for all your domains, a renewal price that has jumped, a control panel you cannot find your way around, or a provider you are leaving. I do not recommend OVH or Hostinger to small business owners, for example, because I find both a bit complicated to handle without a technical team. Saving a pound or two a year on a domain that works is not a good reason: it costs you an afternoon for nothing.

## Before you start: can your domain be transferred?

For .com, .net, .org and the other generic extensions, ICANN's [Transfer Policy](https://www.icann.org/resources/pages/transfer-policy-2016-06-01-en) sets the conditions. Your current registrar can, or must, refuse the transfer when:

1. **The domain is less than 60 days old**, or was transferred less than 60 days ago.
2. **The owner changed in the last 60 days.** A change of registrant (name, organisation or email address) can lock transfers for 60 days, unless you opted out where the registrar offers it. Update those details after the move, not before.
3. **The transfer lock is on.** You switch it off yourself in step 3.
4. **The domain is in dispute**, through a UDRP complaint or a court order, or an earlier registration period was never paid.

{{< callout type="note" >}}ICANN has adopted a revised Transfer Policy with shorter locks, but at the time of writing (October 2026) the current rules above still apply. Check your registrar's help page before you start, in case the new rules have taken over.{{< /callout >}}

A .co.uk follows Nominet's rules instead, with no code and no 60-day rule from ICANN. It has its own section below.

### Choose the new registrar on its renewal price

Pick the destination before you touch anything. Look at the price you will pay every year from now on, not the first-year offer, and check that the registrar sells your extension: not every registrar handles .co.uk or other country extensions.

My habits are with Spaceship, which Namecheap built, and I trust both: their prices are fair, their support answers around the clock, and I have not seen either triple a price at renewal, which I have seen elsewhere. My comparison of the {{< a key="best-domain-registrar" >}}best domain registrar in the UK{{< /a >}} sets six side by side on renewal price, and {{< a key="spaceship-vs-namecheap" >}}Spaceship vs Namecheap{{< /a >}} explains how those two differ.

## How to transfer a domain, step by step

Six steps, in an order designed to keep your website and email online the whole time. The first two happen before you request anything.

### Step 1: look the domain up

Type the domain into [ICANN Lookup](https://lookup.icann.org/) (for a .co.uk, use the WHOIS search on Nominet's website) and note four things:

1. **The registrar.** Make sure the domain is where you think it is. If it sits in someone else's account, a former web designer's for example, start with my guide to {{< a key="recover-domain-name" >}}getting your domain back from a web designer{{< /a >}}.
2. **The expiry date.** If it is only days away, renew first: a transfer can take up to a week.
3. **The status codes.** `clientTransferProhibited` is the transfer lock, which you will switch off in step 3. `serverTransferProhibited` is a lock set at registry level: ask your registrar about it. `redemptionPeriod` means the domain has expired and must be restored before it can move; `pendingDelete` on its own means it is too late even for that.
4. **The nameservers.** They show who answers for your DNS today: the registrar you are leaving, your host, or a service such as Cloudflare.

{{< screenshot id="transfer-domain-name-01" alt="ICANN Lookup result for a domain, showing its registrar, expiry date, status codes and nameservers" >}}

### Step 2: copy the DNS zone and lower the TTLs

The transfer moves the registration, not the DNS zone. If your nameservers belong to the registrar you are leaving, its zone keeps answering during the transfer, but it can vanish once the domain has gone, and your site and email with it. So copy it now.

Open the DNS page at your current registrar and copy every record into a text file: type, name, value, priority and TTL. Some panels can also export the whole zone as a file. For a small business with its website on Squarespace and its email on Google Workspace, the copy might look like this:

```
A      @                  198.185.159.144
A      @                  198.185.159.145
A      @                  198.49.23.144
A      @                  198.49.23.145
CNAME  www                ext-cust.squarespace.com.
CNAME  [your-code]        verify.squarespace.com.
MX     @                  1 smtp.google.com.
TXT    @                  "v=spf1 include:_spf.google.com ~all"
TXT    google._domainkey  "v=DKIM1; k=rsa; p=MIIBIjANBg..."
TXT    _dmarc             "v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com"
```

The A and CNAME records run the website, the MX record receives your email, and the TXT records keep your messages out of spam folders. Miss one and something stops working, often days later, when nobody remembers the transfer. My guide to {{< a key="dns-records-explained" >}}DNS records{{< /a >}} explains each type.

Two more things before you move on:

- **DNSSEC.** If it is switched on and the DNS will move to another provider, switch it off now and back on once the new nameservers answer. A signature that no longer matches makes the domain unreachable.
- **TTLs.** A day before you change any nameservers, lower the TTL of your records to 300 seconds (five minutes) if your panel allows it, so that caches forget the old answers quickly on the day of the switch.

{{< screenshot id="transfer-domain-name-02" alt="DNS records page at the current registrar, listing the A, CNAME, MX and TXT records with their TTLs" >}}

### Step 3: switch off the transfer lock and get the authorisation code

An authorisation code, also called an auth code or EPP code, is a password unique to each domain: the new registrar needs it to request the transfer. At your current registrar, open the domain's settings, then:

1. **Switch off the transfer lock**, sometimes called domain lock or registrar lock. A few registrars, Hostinger among them, also ask you to switch off WHOIS privacy: do it only if their help page says so.
2. **Get the code.** Depending on the registrar, it appears on screen or is emailed to the domain's contact address. If you cannot get it yourself in the account, ICANN's policy gives the registrar five calendar days from your request to provide it.

Copy the code exactly: codes mix letters, digits and symbols, and a stray space is enough to make one fail. Paste it only into the new registrar's transfer form. If you are leaving Hostinger, my article on the {{< a key="hostinger-renewal-transfer" >}}Hostinger renewal price{{< /a >}} shows where each of these settings sits in hPanel.

{{< screenshot id="transfer-domain-name-03" alt="Domain settings at the current registrar, with the transfer lock switched off and the authorisation code revealed, the code blurred" >}}

### Step 4: request the transfer at the new registrar

Here is the Spaceship version, from its [guide to transferring a domain to Spaceship](https://www.spaceship.com/knowledgebase/transfer-domain-guide/):

1. On spaceship.com, switch the domain search to **Transfer** and type the domain. Several domains can go at once, typed in or uploaded as a CSV file.
2. Enter the authorisation code from step 3.
3. Add the domain to the cart and check out.

Spaceship's guide asks for a domain that is no longer locked and shows a normal status (ok or active) at the current registrar, which is why the lock comes off first. Other registrars have the same fields under different names. Before you pay, check two things:

- **Nameservers.** If the order offers to keep the current ones, keep them: you will move the DNS on your own schedule in step 6.
- **Privacy.** Spaceship includes WHOIS privacy free of charge on eligible domains: check that it is switched on for yours.

{{< screenshot id="transfer-domain-name-04" alt="Spaceship domain search switched to Transfer, with the domain name typed in" >}}

{{< screenshot id="transfer-domain-name-05" alt="Spaceship transfer order with the authorisation code entered and blurred, before checkout" >}}

### Step 5: approve the transfer, then leave everything alone

Watch the inbox of the domain's contact address. Depending on the two registrars, you will receive a request to approve the transfer, a notice that it is under way, or both, sometimes with a link to approve it sooner. Answer them. Under ICANN's rules, the current registrar then has five days to respond, and the transfer goes through automatically if it does not.

This is the hardest step, because there is nothing to do. Do not change the nameservers, the records or the owner's details while the transfer runs, and do not cancel anything at the old registrar. Your site and email keep using the same zone throughout, so nobody notices a thing.

{{< screenshot id="transfer-domain-name-06" alt="Spaceship domain list showing the incoming transfer and its status" >}}

### Step 6: move the DNS and secure the domain

When the domain shows as active in your new account, look at its nameservers again:

- **Your host's, or a DNS service's such as Cloudflare**: nothing to move, because the zone was never at the old registrar.
- **Still the old registrar's**: recreate every record from your copy at the new registrar, then switch the nameservers to the new registrar's own. Do it the same day: the old zone now stays online only as long as the old registrar keeps it.
- **Already the new registrar's**: check at once that every record from your copy is there, and add whatever is missing.

At Spaceship, all of this sits on the **Advanced DNS** page: nameservers, records, DNSSEC and a propagation checker. One trap when you rebuild a zone: some panels, OVH's among them, need a final dot at the end of a CNAME target (`ext-cust.squarespace.com.`), or they add your own domain after it. With OVH and Squarespace domains, that dot is the only thing that has ever caught me out.

Then test: open the site with and without www, send an email to an address on the domain and reply from it, and query the records directly:

```
dig +short yourdomain.com NS
dig +short yourdomain.com A
dig +short yourdomain.com MX
```

Finally, switch the transfer lock back on if the new registrar has not done it, turn on auto-renew and two-factor authentication on the new account, and put the TTLs back to 3600 after a few quiet days.

{{< screenshot id="transfer-domain-name-07" alt="Spaceship Advanced DNS page for the transferred domain, with its nameservers and the records copied from the old registrar" >}}

{{< callout type="warning" >}}**Hosting and mailboxes bought from the old registrar do not move with the domain.** If your website or your email lives there, keep paying for it until its replacement works and the records point to the new service. Cancel the old services last.{{< /callout >}}

## How to transfer a .co.uk domain: change the IPS tag

A .co.uk or .uk domain has no authorisation code. Nominet, the .uk registry, identifies each registrar by an IPS tag, and the domain changes registrar when its tag changes to the new registrar's. ICANN's 60-day rules do not apply, as .uk follows Nominet's own.

1. **Find the new registrar's tag** in its help pages. Spaceship's is `SPACESHIP`.
2. **Change the tag at your current registrar.** Many panels have a field for it in the domain's settings (Hostinger's hPanel does); otherwise, ask support to change it.
3. **Complete the transfer at the new registrar.** Spaceship asks you to change the tag first, then submit the transfer on its site as you would for a .com, without a code. With other registrars, the domain may appear in your account as soon as the tag changes: follow their instructions.

Nominet's WHOIS shows the registrar's tag, so you can check that the change went through. The DNS precautions are the same as for a .com: copy the zone first, keep the nameservers during the move and rebuild the zone afterwards. A tag change does not renew the domain by itself, so ask the new registrar what it charges, if anything, and whether it adds a year.

## Leaving Squarespace Domains (formerly Google Domains)

Google sold its domain business to Squarespace: the deal was announced on 15 June 2023 and completed on 7 September 2023, the day Google stopped selling domains, and customers were moved to Squarespace over the following months. Google Domains is one of the registrars I have used, so I know that move from the customer's side.

If your website is on Squarespace, keeping the domain there is the simplest option, and nothing forces you to leave. If you want your domains in one place, the method is the one above, and Squarespace's help article on [transferring a domain away from Squarespace](https://support.squarespace.com/hc/en-us/articles/205812338-Transferring-a-domain-away-from-Squarespace) covers its side:

1. In your domains dashboard, select the domain, switch off the **Domain Lock** toggle and click **Request transfer code**, then confirm with your password, or your two-factor code if it is on.
2. The code arrives by email at the domain's contact address within 24 hours. If you request it more than once, only the most recent code works.
3. Enter it at the new registrar (step 4). Squarespace warns that the transfer can take up to 15 days, and that it cannot be cancelled once the new provider has the code.

A domain that came free with a Squarespace plan loses that offer when it leaves, so the new registrar may charge for it. Two more precautions:

- **If the site stays on Squarespace**, the transfer leaves it alone, but the zone at the new registrar needs Squarespace's records: four A records, the www CNAME and the verification CNAME. My tutorial on {{< a key="spaceship-domain-dns-tutorial" >}}Spaceship DNS settings{{< /a >}} adds them one by one.
- **If your email runs on Google Workspace**, copy its MX, SPF and DKIM records too. Workspace is not tied to the registrar, but mail stops arriving as soon as the MX record goes missing, and what you send without SPF and DKIM is likely to land in spam.

{{< screenshot id="transfer-domain-name-08" alt="Squarespace Domains dashboard for the domain, with Domain Lock switched off and the transfer code requested" >}}

## How long a domain transfer takes, and what it costs

| | .com and other generic extensions | .co.uk and .uk |
|---|---|---|
| What moves it | The authorisation code | The IPS tag |
| Earliest date | 60 days after registration, a transfer or a change of owner | No ICANN waiting period: ask your registrar |
| How long | Up to about a week: the current registrar has five days to respond | Starts once the tag is changed |
| Price | Usually one year of registration, added to the time left | Varies: ask the new registrar |

For a .com, the year included in the transfer price is not wasted: the expiry date moves a year later, and Spaceship, for one, says the time you had left carries over. That makes the few weeks before your renewal date a good moment to transfer, because you pay the new registrar's price for the coming year instead of the old one's. Do not leave it to the last week, though, in case the transfer is held up.

## When a transfer fails: the usual causes

| What happens | Likely cause | What to do |
|---|---|---|
| The new registrar rejects the request at once | The transfer lock is still on, or a registry lock | Switch it off, check the status in ICANN Lookup, then try again; for a registry lock, ask your registrar |
| "Invalid authorisation code" | A typo, a stray space or an old code | Copy it again, or ask for a new one |
| Refused because of the date | Registered, transferred or changed owner less than 60 days ago | Wait for the date: the domain works normally meanwhile |
| Pending for days | An approval email went unanswered | Search your inbox and spam folder for both registrars' emails |
| Refused by the current registrar | An unpaid period, a dispute, or the account holder objected | Ask the registrar for the reason; if the account is not yours, follow the recovery guide linked in step 1 |
| A .co.uk that never arrives | A mistyped tag, or the new registrar is waiting for your request | Check the exact tag, then contact the new registrar |

## Your checklist, and when to hand it over

Before you call it done:

1. The domain is over 60 days old, its owner has not changed recently, and it is not about to expire.
2. The new registrar is chosen on its renewal price and sells your extension.
3. Every DNS record is copied, DNSSEC is dealt with, and the TTLs were lowered a day ahead.
4. The lock is off and you have the code, or the .co.uk's tag is changed.
5. The transfer is paid with the current nameservers kept, and the emails are answered.
6. The zone is rebuilt where the nameservers point, and the site and email are tested.
7. The lock, auto-renew and two-factor authentication are on at the new registrar, and the old services are cancelled last.

You do not need anyone for a standard transfer: one switch, one code and a few days of waiting. Hand it over when a mistake would cost more than the job: the domain sits in an account you cannot open, your email depends on records nobody can explain, or the website is moving at the same time. Connecting the domain is the last step of every {{< a page="/services/websites" >}}website project{{< /a >}} I deliver, and if a move has already taken a site or a mailbox down, I answer rescue requests the same day or within 24 hours.
