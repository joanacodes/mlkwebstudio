---
title: "How to connect a Namecheap domain to Squarespace (Advanced DNS, step by step)"
seo_title: "Connect a Namecheap domain to Squarespace: DNS step by step"
description: "Connect a Namecheap domain to Squarespace in Advanced DNS: clear the parking records, add four A records and two CNAMEs, keep your email, redirect a .com."
slug: "connect-namecheap-domain-squarespace"
translationKey: "namecheap-dns-squarespace"
date: 2026-10-17T08:50:00+02:00
lastmod: 2026-10-17T08:50:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["connect Namecheap domain to Squarespace", "Namecheap Advanced DNS", "Namecheap Squarespace DNS records", "Squarespace nameserver connect", "Namecheap URL redirect"]
summary: "To connect a Namecheap domain to Squarespace, start in Squarespace's Domains panel and choose DNS records rather than nameservers, then open Domain List > Manage > Advanced DNS at Namecheap. Delete the parking URL Redirect Record on @, point the www CNAME to ext-cust.squarespace.com, add Squarespace's four A records and its verification CNAME, and leave the MX records alone. Squarespace allows 24 to 72 hours for the domain to show as Connected."
cover: "namecheap-dns-squarespace"
cover_alt: "Namecheap Advanced DNS host records pointing a domain to Squarespace"
related: ["dns-records-explained", "squarespace-tutorial", "spaceship-vs-namecheap", "ovh-dns-squarespace", "professional-email-address"]
services: ["websites"]
faq:
  - q: "Does connecting a Namecheap domain to Squarespace move the domain to Squarespace?"
    a: "No. The domain stays registered at Namecheap, which keeps billing you for its renewal, and Squarespace bills you for the site plan. Only the records that say where the website lives change."
  - q: "Does Namecheap charge anything to connect a domain to Squarespace?"
    a: "No. Namecheap BasicDNS comes free with a domain registered there, and adding or editing host records in Advanced DNS costs nothing."
  - q: "Do I need to buy an SSL certificate from Namecheap for a Squarespace site?"
    a: "No. Squarespace provides SSL for the domains connected to its sites, so the padlock appears without a certificate bought at Namecheap."
  - q: "Can I keep Namecheap Private Email with a Squarespace website?"
    a: "Yes. The website and the mailboxes are separate: Squarespace only needs A and CNAME records, and Private Email keeps working as long as the domain stays on Namecheap's DNS and its mail records are left as they are."
  - q: "Should I transfer my Namecheap domain to Squarespace instead?"
    a: "There is no need. Connecting keeps registration and renewal at Namecheap and takes a few records; a transfer moves both to Squarespace Domains. It is only worth it if you want one account and one bill for everything."
---

Your domain is registered at Namecheap and your new website is on Squarespace. To connect a Namecheap domain to Squarespace, you keep the domain where it is and add six records in Namecheap's **Advanced DNS** tab: four A records for the root of the domain, one CNAME for www and one CNAME that proves the domain is yours. The only real decision comes before that, when Squarespace offers to take over your nameservers.

Connecting a site to its domain, sometimes two, is the last thing I do before a client's site goes live. I have done it with domains registered at Namecheap, Spaceship, Infomaniak, Hostinger, OVH and the old Google Domains, now run by Squarespace. The tricky ones were OVH and Squarespace's own domains, over a single final dot. Namecheap has not been one of them: I find its set-up easy, or at least I know my way around it.

Menu names below are Namecheap's and Squarespace's at the time of writing (October 2026); if a label moves, the records stay the same. If the difference between a domain, hosting and email is still fuzzy, start with my guide to {{< a key="domain-hosting-email-guide" >}}domain vs hosting{{< /a >}}.

## What connecting a Namecheap domain to Squarespace changes

Namecheap stays your registrar, the company you rent the domain from and pay each year to renew it. What changes is part of the domain's DNS, the records that tell browsers where your website lives. Squarespace needs these six, as listed in [its help page on third-party domains](https://support.squarespace.com/hc/en-us/articles/205812378-Connect-a-third-party-domain-to-your-Squarespace-site) at the time of writing:

| Type at Namecheap | Host | Value | What it does |
|---|---|---|---|
| A Record | `@` | `198.185.159.144` | Sends yourbusiness.co.uk to Squarespace |
| A Record | `@` | `198.185.159.145` | Same, second address |
| A Record | `@` | `198.49.23.144` | Same, third address |
| A Record | `@` | `198.49.23.145` | Same, fourth address |
| CNAME Record | `www` | `ext-cust.squarespace.com` | Sends www.yourbusiness.co.uk to Squarespace |
| CNAME Record | your unique code | `verify.squarespace.com` | Proves to Squarespace that the domain is yours |

At Namecheap, `@` stands for the root of the domain, yourbusiness.co.uk with nothing in front of it. The DNS settings of your own Squarespace site show the values for your domain: if they ever differ from this table, they win. Namecheap's [own guide to linking a domain to Squarespace](https://www.namecheap.com/support/knowledgebase/article.aspx/9608/2208/how-do-i-link-my-domain-to-my-squarespace-account/) follows the same order: Squarespace first, then Advanced DNS.

Everything else in the domain's DNS stays as it is, starting with your email records. For what each record type does, see {{< a key="dns-records-explained" >}}DNS records explained{{< /a >}}.

## Before you start: three checks

**1. Your Squarespace site is on a trial or a paid plan.** Squarespace only connects a domain to a site in one of those two states.

**2. The domain uses Namecheap's DNS.** In your Namecheap account, open **Domain List**, click **Manage** next to the domain and look at the nameservers on the **Domain** tab. **Namecheap BasicDNS**, the default for a domain registered there, is what you want; PremiumDNS, Namecheap's paid DNS, works the same way. If you see **Custom DNS** with the nameservers of Cloudflare, a web host or a former agency, host records in Advanced DNS do not apply: add the Squarespace records wherever those nameservers point instead.

{{< screenshot id="namecheap-dns-squarespace-01" alt="Namecheap Domain tab of the domain, with the nameservers set to Namecheap BasicDNS" >}}

**3. You know where your email lives.** If addresses on the domain receive mail, through Namecheap Private Email, Google Workspace or Microsoft 365, their records sit in the same Advanced DNS tab, in Host Records and in the **Mail Settings** section below it, and must survive the change.

{{< callout type="tip" >}}Before you change anything, take a full-page screenshot of the **Advanced DNS** tab, or copy each line into a text file. If a record disappears by mistake, you can put it back in a minute.{{< /callout >}}

## Step 1: start in Squarespace and choose DNS records

Start on the Squarespace side: the verification code only appears once the connection has begun.

1. In your site, open the **Domains** panel and click **Use a domain I own**.
2. Type the domain, yourbusiness.co.uk without www, and continue.
3. Pick Namecheap in the list of providers, or **Other** if it is not listed.
4. If Squarespace offers to connect through nameservers, choose the option to use DNS records instead.
5. Squarespace opens the domain's DNS settings with the records to add. Keep this tab open: you will copy values from it.

{{< screenshot id="namecheap-dns-squarespace-02" alt="Squarespace pop-up suggesting nameserver connect for the Namecheap domain, with the option to use DNS records instead" >}}

Point 4 is the decision that matters. For domains registered at Namecheap, GoDaddy or Network Solutions, Squarespace suggests **nameserver connect**, which moves the whole DNS of the domain to Squarespace. [Squarespace's own comparison of the two methods](https://support.squarespace.com/hc/en-us/articles/8387079117581-Nameserver-connect-vs-DNS-connect) spells out the cost: the nameserver connection removes all CNAME records and some A records, and a custom email address set up with DNS records can break. The other method, **DNS connect**, is the one in this tutorial: the domain stays on Namecheap BasicDNS and you only add records.

{{< callout type="warning" >}}**Email on this domain? Choose DNS records.** Squarespace itself lists the cases where nameserver connect is a bad fit: custom DNS records (email is one of them), several subdomains, or DNSSEC. If none applies, either method works.{{< /callout >}}

{{< screenshot id="namecheap-dns-squarespace-03" alt="Squarespace DNS settings for the Namecheap domain listing the records to add: verification CNAME, www CNAME and four A records" >}}

If the site itself is not built yet, my {{< a key="squarespace-tutorial" >}}Squarespace tutorial{{< /a >}} covers that part. Squarespace is where I put the clients who edit their own site, because changing a word should never bring the whole structure down.

## Step 2: open Advanced DNS at Namecheap

Log in to Namecheap, open **Domain List** in the left-hand menu, click **Manage** next to the domain and open the **Advanced DNS** tab. The records are listed in the **Host Records** section, with an **Add New Record** button.

Each row has a type, a host, a value and a TTL. In the **Host** field, type only the part that comes before your domain: `@` for the domain itself, `www` for www. Namecheap adds the domain on its own, so a full name typed there ends up with your domain twice.

{{< screenshot id="namecheap-dns-squarespace-04" alt="Namecheap Advanced DNS tab, Host Records of a new domain with the parking records: URL Redirect Record on @ and CNAME Record on www pointing to parkingpage.namecheap.com" >}}

## Step 3: remove Namecheap's parking records

A domain newly registered at Namecheap comes with two parking records: a **URL Redirect Record** on `@` and a **CNAME Record** on `www` that points to `parkingpage.namecheap.com`. Namecheap's help says to remove them when you add your own records.

The redirect is the one that does damage if you forget it. Namecheap explains that a URL redirect adds an A record of its own to the domain, pointing to its forwarding server. Left next to Squarespace's four, it would send some of your visitors somewhere other than your site.

| Record | What to do |
|---|---|
| URL Redirect Record on `@` | Delete it with the bin icon at the end of its row |
| Any other A or AAAA Record on `@` | Delete it: at the end, the root carries Squarespace's four A records and no other A or AAAA |
| CNAME Record on `www` pointing to `parkingpage.namecheap.com` | Keep the row and change its value in step 5: Squarespace asks you to edit an existing www CNAME rather than add a second one |
| Any A, AAAA, TXT or URL Redirect Record on `www` | Delete it: a CNAME cannot share its host with another record |
| MX records, the TXT on `@` that starts with `v=spf1`, DKIM and `_dmarc` records | Keep them all |

## Step 4: add Squarespace's four A records

Click **Add New Record**, choose **A Record** in the type list and fill in the new row:

- **Host**: `@`
- **Value**: `198.185.159.144`
- **TTL**: leave it on **Automatic**

Save the row with the tick at its end, then repeat for `198.185.159.145`, `198.49.23.144` and `198.49.23.145`. An IP address never takes a dot at the end; only names do.

{{< screenshot id="namecheap-dns-squarespace-05" alt="Namecheap new host record row: A Record, host @, value 198.185.159.144, TTL Automatic" >}}

## Step 5: point the www CNAME to Squarespace

Go back to the parking CNAME on `www` and edit it. If you deleted it, add a new **CNAME Record** instead:

- **Host**: `www`
- **Value**: `ext-cust.squarespace.com`
- **TTL**: Automatic

Save the row, then read the value back. It must say ext-cust.squarespace.com, with or without a dot at the end. If your own domain appears glued to the end of it, the record points to a name that does not exist, and Squarespace will never validate it. That missing dot is what made OVH tricky for me, and my tutorial to {{< a key="ovh-dns-squarespace" >}}connect an OVH domain to Squarespace{{< /a >}} shows the trap in detail.

{{< screenshot id="namecheap-dns-squarespace-06" alt="Namecheap Host Records: the CNAME Record on www edited to the value ext-cust.squarespace.com" >}}

## Step 6: add the verification CNAME

Back in Squarespace, copy the code shown as the host of the first CNAME, a random string unique to your site. At Namecheap, click **Add New Record** and choose **CNAME Record**:

- **Host**: the code alone. Namecheap adds your domain after it, so do not paste `code.yourbusiness.co.uk`.
- **Value**: `verify.squarespace.com`
- **TTL**: Automatic

This is the record people skip, because the site seems to work without it. Squarespace warns that without it, or with a typo in it, the domain is unlinked from your site after 15 days.

{{< screenshot id="namecheap-dns-squarespace-07" alt="Namecheap new host record row: CNAME Record with Squarespace's unique code as host and verify.squarespace.com as value" >}}

## Step 7: check the records and wait

Before you leave Namecheap, compare the Host Records with this list. Apart from your email records, nothing else should sit on `@` or `www`:

```
Type           Host          Value
A Record       @             198.185.159.144
A Record       @             198.185.159.145
A Record       @             198.49.23.144
A Record       @             198.49.23.145
CNAME Record   www           ext-cust.squarespace.com
CNAME Record   <your-code>   verify.squarespace.com
```

Then wait. Squarespace's estimate is 24 to 48 hours, up to 72 in some cases. Right after you add the records, its DNS settings may still list some of them as not found: that is normal, and you can refresh the check there rather than start again. Once the domain is linked, a green **Connected** label appears next to it in the **Domains** panel.

To check from your own computer, open a terminal. The four addresses can come back in any order:

```
$ dig +short yourbusiness.co.uk A
198.185.159.144
198.185.159.145
198.49.23.144
198.49.23.145

$ dig +short www.yourbusiness.co.uk CNAME
ext-cust.squarespace.com.
```

On Windows, `nslookup -type=CNAME www.yourbusiness.co.uk` shows the www part.

{{< screenshot id="namecheap-dns-squarespace-08" alt="Squarespace Domains panel showing the Namecheap domain with the green Connected label" >}}

## Redirect a second domain with a URL Redirect Record

If you own two extensions, say the .co.uk for the website and the .com to protect the name, the second one only has to send its visitors to the first. A permanent redirect at Namecheap does that without touching Squarespace, and [Namecheap's guide to URL redirects](https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-set-up-a-url-redirect-for-a-domain/) covers the details.

1. In **Domain List**, click **Manage** next to the second domain (yourbusiness.com here) and open **Advanced DNS**.
2. Delete the parking CNAME on `www` and any A or CNAME record on `@` or `www`: Namecheap warns that they interfere with a redirect.
3. Edit the URL Redirect Record on `@`, or add one with **Add New Record**. As the value, type the exact address your site shows in the browser, for example `https://www.yourbusiness.co.uk`.
4. As the redirect type, choose the permanent (301) redirect. **Unmasked** is a temporary (302) redirect, and **Masked** keeps the second domain in the address bar; a 301 tells search engines that the move is for good.
5. Add a second URL Redirect Record with `www` as the host and the same value, so www.yourbusiness.com follows.
6. Save, then allow up to 30 minutes, the delay Namecheap gives for a redirect to apply. Test http://yourbusiness.com and http://www.yourbusiness.com: both should end on your main site.

{{< screenshot id="namecheap-dns-squarespace-09" alt="Namecheap Advanced DNS of a second domain: URL Redirect Record on @ to https://www.yourbusiness.co.uk with the permanent 301 type" >}}

The catch is HTTPS: Namecheap's redirect has no certificate for the second domain, and its help says an HTTPS-to-HTTPS redirect needs one on both domains. Someone who types https://yourbusiness.com can get a browser warning instead of your site. To avoid that, connect the second domain to the same Squarespace site with the steps above (it gets its own verification code): Squarespace sends every domain that is not the primary one to the primary domain, and its SSL covers every domain connected to the site.

If the second domain receives email, keep its MX records: the redirect only concerns the website.

## Keep your email working

Squarespace hosts the website, not your mailbox, and the records that run your email sit in the same Namecheap DNS. Whoever provides the mailbox (Namecheap Private Email, Spaceship's Spacemail, Google Workspace or Microsoft 365), these stay exactly as they are:

- the **MX records**, which tell other mail servers where to deliver your messages;
- the TXT record on `@` that starts with `v=spf1` (SPF);
- the DKIM record, on a host ending in `._domainkey`, and the DMARC record on `_dmarc`.

At Namecheap, the MX records are not in Host Records but in the **Mail Settings** section lower down the Advanced DNS tab: whether it says Private Email or Custom MX, leave it as it is. With Private Email, Namecheap manages the MX records itself, so you may not see them listed at all.

{{< callout type="warning" >}}**Never delete an MX record to tidy up.** Mail stops arriving and nothing warns you: you find out when a client asks why you never replied.{{< /callout >}}

If the domain has no mailbox yet, my guide to getting a {{< a key="professional-email-address" >}}professional email address{{< /a >}} compares the options and what they cost. I used to run my own email on Microsoft and it was a pain; that has not been the case with Namecheap or Spaceship. Once the mailbox works, add {{< a key="spf-dkim-dmarc-setup" >}}SPF, DKIM and DMARC{{< /a >}} so your messages stay out of spam.

## Still not connected after 48 hours?

| What you see | Likely cause | Fix |
|---|---|---|
| The domain still shows the parking page or an old site | The parking records, or an old A or AAAA record on `@`, are still there | Delete them, keep only Squarespace's four A records on `@` and point the www CNAME to `ext-cust.squarespace.com` |
| Squarespace finds none of the records | The domain is on Custom DNS, so the records in Advanced DNS do not apply | Add the records where the nameservers point |
| The www or verification record never validates | The full domain was typed in **Host**, or the value has a typo | Keep only `www` or the code in Host, and check the value letter by letter |
| Email has stopped arriving | An MX record was deleted, or the domain moved to Squarespace's nameservers | Put the records back from your copy, in the DNS the nameservers now point to |

If none of these fits, compare your Host Records line by line with the DNS settings in Squarespace, which flag the records it cannot find. Namecheap's support answers around the clock, and every issue I have taken to it has been resolved.

## Should you keep your domain at Namecheap?

If it works, yes. I trust Namecheap: its prices are fair, and its renewals do not jump the way I have seen at other registrars. Its Advanced DNS tab does everything Squarespace needs, and its WHOIS privacy, Withheld for Privacy, is free on the extensions that allow it.

My own habits are with Spaceship, which Namecheap built and which I see as an up-to-date version of Namecheap. One difference matters for this tutorial: Spaceship's URL redirects have included HTTPS since February 2024. My comparison of {{< a key="spaceship-vs-namecheap" >}}Spaceship vs Namecheap{{< /a >}} sets out the others. Moving a domain that works, just to move it, is a job you can skip: connect it and spend the time on your site.

## Checklist once the domain shows Connected

1. Open your site with and without www: both addresses should land on your Squarespace site, with the padlock.
2. In the **Domains** panel, check that this domain is the primary one, the address visitors see in their browser.
3. Send an email to an address on the domain, then reply to it.
4. If you set up a second domain, type it in and check that it lands on the main site.
5. At Namecheap, check that auto-renew is on: if the domain expires, the website and the email go down together.
6. Keep your screenshot of the old records for a few weeks, just in case.

And if you would rather not touch DNS at all, connecting the domain is part of every {{< a page="/services/websites" >}}website I deliver{{< /a >}}.
