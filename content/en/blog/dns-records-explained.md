---
title: "DNS records explained: A, AAAA, CNAME, MX, TXT and the trailing dot"
seo_title: "DNS records explained: A, CNAME, MX and TXT, with examples"
description: "DNS records explained in plain English: what A, AAAA, CNAME, MX and TXT records do, real examples, TTL, propagation and the trailing dot that breaks a CNAME."
slug: "dns-records-explained"
translationKey: "dns-records-explained"
date: 2026-10-17T08:45:00+02:00
lastmod: 2026-10-17T08:45:00+02:00
category: "domains"
article_type: "guide"
keywords: ["DNS records explained", "DNS record types", "A record vs CNAME", "MX record", "TXT record", "DNS trailing dot", "DNS propagation"]
summary: "DNS records are the lines in your domain's zone that tell the internet where your website and email live: A and AAAA point a name to an IP address, CNAME makes one name an alias of another, MX says which servers receive your email and TXT holds SPF, DKIM, DMARC and ownership codes. Edit them at the DNS host your nameservers point to, never put a CNAME on the root domain, and in editors such as OVHcloud's, end a CNAME target with a dot (ext-cust.squarespace.com.)."
cover: "dns-records-explained"
cover_alt: "DNS records A, CNAME, MX and TXT in a domain's DNS zone"
related: ["ovh-dns-squarespace", "spf-dkim-dmarc-setup", "namecheap-dns-squarespace", "spaceship-domain-dns-tutorial", "build-website-with-ai"]
services: ["websites"]
faq:
  - q: "Do DNS changes affect SEO?"
    a: "Not by themselves. Search engines rank pages, not records, so a DNS change only hurts if the site stops answering or its page addresses change without 301 redirects. Have the new site ready before you change the records, and keep the same URLs or redirect the old ones."
  - q: "Is DNS hosting free with a domain name?"
    a: "Usually, yes. Registrars such as Namecheap, Spaceship and OVHcloud include a DNS zone with the domain at no extra cost, and specialist DNS hosts such as Cloudflare have a free plan too."
  - q: "What is DNSSEC, and should I turn it on?"
    a: "DNSSEC signs your DNS records so that resolvers can spot forged answers. Switch it on if your DNS host offers it in a click. Before changing nameservers, turn it off, wait a day, then switch it on at the new host: otherwise the old DS record held by the registry no longer matches, and your domain becomes unreachable for every resolver that checks signatures."
  - q: "What is a PTR record?"
    a: "A PTR record, or reverse DNS, maps an IP address back to a name. It is set by whoever owns the IP address, usually your email provider or server host, not in your domain's zone, and Gmail's sender guidelines expect valid reverse DNS on the servers that send your mail."
  - q: "Can a subdomain point to a different service from my main website?"
    a: "Yes. Each name in the zone has its own records, so shop.yourdomain.co.uk can be a CNAME to your shop platform while the root and www point to your website and the MX records keep your email where it is."
---

DNS records explained, the short version: each record is one line in your domain's DNS zone, and together those lines tell the internet where your website lives, which servers receive your email and which services may act for your domain. Five types do nearly all the work for a small business: A, AAAA, CNAME, MX and TXT.

Connecting the domain is the last step of every website I build, and I have done it with domains registered at Namecheap, Spaceship, Infomaniak, Hostinger, OVH and the old Google Domains (now Squarespace Domains). Squarespace and OVH domains can be tricky: the only real issue I have hit was a single dot at the end of a record, so that dot gets its own section below.

If the difference between a domain, hosting and email is still fuzzy, start with my guide to {{< a key="domain-hosting-email-guide" >}}domain vs hosting vs email{{< /a >}}.

## Nameservers vs DNS records: where your zone lives

Three things are easy to mix up:

- **The registrar** is the company where you bought the domain and pay its renewal.
- **The nameservers** are the servers that hold your domain's DNS. You choose them at the registrar, and the registry behind your extension (Nominet for .co.uk) sends every lookup their way.
- **The DNS zone** is the list of records on those nameservers: what you edit to connect a website or a mailbox.

Unless someone has changed the nameservers, the registrar usually hosts the zone too, so you edit records in the account where you pay for the domain. Namecheap calls the page **Advanced DNS** and OVHcloud has a **DNS zone** tab; my tutorials for {{< a key="namecheap-dns-squarespace" >}}Namecheap{{< /a >}} and {{< a key="spaceship-domain-dns-tutorial" >}}Spaceship{{< /a >}} show where to find it, step by step.

The catch: if the nameservers point somewhere else (Cloudflare, a web host, a former agency's account), the records at your registrar are ignored, however carefully you edit them. Your registrar's domain page shows which nameservers are in use.

And **changing nameservers is not the same as editing a record**. It moves the whole zone to another company, and every record you do not recreate there disappears, MX records included. That is how a business loses its email overnight. Squarespace and GitHub Pages both connect a domain with a handful of records, so you keep your current nameservers.

## DNS records explained: name, type, value and TTL

Whatever the panel looks like, every record has the same four parts, which a DNS server stores as one line:

```
; name   TTL    type    value
www      3600   CNAME   ext-cust.squarespace.com.
```

- **Name** (Host, Name or Sub-domain, depending on the panel). `@` is the domain itself, also called the root or apex, and `www` stands for `www.yourdomain.co.uk`. OVHcloud leaves the field empty for the root instead of using `@`. In most panels the name is relative to your domain: type `www`, not `www.yourdomain.co.uk`, or you may create `www.yourdomain.co.uk.yourdomain.co.uk`.
- **Type**: the kind of answer the record gives.
- **Value** (Target, Points to, Data): an IP address, another name or a piece of text, depending on the type.
- **TTL** (time to live): how many seconds other servers may keep the answer before asking again. 3600 is one hour.

The record types you will meet:

| Type | What it does | Example value |
|---|---|---|
| A | Points a name to an IPv4 address | `185.199.108.153` |
| AAAA | Points a name to an IPv6 address | `2606:50c0:8000::153` |
| CNAME | Makes a name an alias of another name | `ext-cust.squarespace.com.` |
| MX | Names the servers that receive your email | `1 smtp.google.com.` |
| TXT | Holds text: SPF, DKIM, DMARC, ownership codes | `v=spf1 include:_spf.google.com ~all` |
| NS | Names the nameservers that hold the zone | Set at the registrar |
| SOA | The zone's technical header | Managed by your DNS host |
| SRV | Points a service (calls, chat) to a server and port | Given by that service |
| CAA | Lists who may issue SSL certificates for the domain | `0 issue "letsencrypt.org"` |

You will rarely touch the last four. One warning about CAA: if your zone has one, it must allow the certificate authority your website host uses, or the host cannot get a certificate and HTTPS never switches on.

## A and AAAA records: pointing a name to a server

An **A record** points a name to an IPv4 address, the familiar four numbers separated by dots. An **AAAA record** does the same for an IPv6 address, which is four times longer: hence the four As.

GitHub Pages is a good real example. For the root of a custom domain, [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) lists four A records and four AAAA records (at the time of writing, October 2026):

```
@   A      185.199.108.153
@   A      185.199.109.153
@   A      185.199.110.153
@   A      185.199.111.153
@   AAAA   2606:50c0:8000::153
@   AAAA   2606:50c0:8001::153
@   AAAA   2606:50c0:8002::153
@   AAAA   2606:50c0:8003::153
```

Three rules apply:

1. Several A records on one name are normal: they list several servers that can answer. Add all of them.
2. An A or AAAA value is always an IP address, never a name, and never takes a final dot.
3. Add AAAA records only if your host gives you IPv6 addresses. GitHub publishes four and advises keeping the A records alongside them; Squarespace's list has none.

The classic mistake is the forgotten AAAA. You replace the A records with your new host's addresses but leave an old AAAA on the root, and every visitor whose connection uses IPv6 keeps landing on the old server. The site can look fixed from your office and broken from a customer's phone, depending on the network each one uses. If you are building a simple site yourself, my tutorial on how to {{< a key="build-website-with-ai" >}}build a website with AI and host it on GitHub Pages{{< /a >}} uses exactly these records.

## CNAME records: aliases, and why the root never gets one

A **CNAME record** makes a name an alias of another name. The visitor's resolver follows the alias and uses whatever addresses the target has, so when the platform moves its servers, it updates its own name and your record keeps working. That is why platforms give you a CNAME for www:

```
www   CNAME   ext-cust.squarespace.com.    ; a site on Squarespace
www   CNAME   <username>.github.io.         ; a site on GitHub Pages
```

It is one or the other: a name can carry only one CNAME. Two more rules come with it.

**A CNAME lives alone.** A name that has a CNAME cannot hold any other record, so delete any A, AAAA or TXT record on www before you add it.

**Never a CNAME on the root.** The root of your domain must hold the zone's SOA and NS records, and usually your MX and SPF records too. A CNAME there would have to live alone, so the DNS standard does not allow it, and the panels that let you save one anyway can break your email. This is why Squarespace and GitHub Pages give you A records for the root and a CNAME only for www.

Some DNS hosts offer a way round it: an ALIAS or ANAME record, or what Cloudflare calls CNAME flattening. You enter a name, and the DNS host publishes the matching IP addresses on the root for you. GitHub lists ALIAS and ANAME records as an alternative to its A records.

## MX records: where your email is delivered

An **MX record** tells other mail servers where to deliver email sent to your domain. Each one carries a priority number: the lowest is tried first, the others are fallbacks. Google Workspace now uses a single record:

```
@   MX   1   smtp.google.com.
```

Older Workspace domains have five MX records, from `ASPMX.L.GOOGLE.COM` to `ALT4.ASPMX.L.GOOGLE.COM`, and [Google's page of MX values](https://support.google.com/a/answer/174125) says they keep working: if your email works, leave them alone.

What to remember:

- An MX record points to a name, never to an IP address, and never to a name that is itself a CNAME.
- When you change email provider, delete the old provider's MX records. Leftovers send part of your mail to a mailbox nobody reads.
- MX records only cover incoming mail. Whether your outgoing mail is trusted depends on the TXT records below.

If you do not have a mailbox on your own domain yet, my guide to getting a {{< a key="professional-email-address" >}}professional email address{{< /a >}} compares the options.

## TXT records: SPF, DKIM, DMARC and proof of ownership

A **TXT record** holds a piece of text that other services read. For a small business it does four jobs:

```
@                   TXT   "v=spf1 include:_spf.google.com ~all"
google._domainkey   TXT   "v=DKIM1; k=rsa; p=<public key from your provider>"
_dmarc              TXT   "v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.co.uk"
@                   TXT   "google-site-verification=<code>"
```

1. **SPF**, on the root, lists the servers allowed to send email for your domain.
2. **DKIM** publishes a public key at a name ending in `._domainkey`; receiving servers use it to check the signature on your emails. Some providers ask for a CNAME there instead.
3. **DMARC**, at `_dmarc`, tells receiving servers what to do with mail that fails those checks, and where to send reports.
4. **Ownership codes** prove you control the domain. Google Search Console and many other services ask for one; GitHub Pages uses a TXT record named `_github-pages-challenge-<username>`.

The root can hold several TXT records but **only one SPF record**. Two lines starting with `v=spf1` make SPF fail (RFC 7208), so when a new service asks you to add an SPF record, merge its `include:` into the one you already have. The full set-up is in my {{< a key="spf-dkim-dmarc-setup" >}}SPF, DKIM and DMARC tutorial{{< /a >}}.

## The trailing dot: one character that breaks a CNAME

In the zone-file syntax defined in [RFC 1035, section 5.1](https://www.rfc-editor.org/rfc/rfc1035), a name that ends with a dot is absolute: complete as written. A name without the final dot is relative, and the zone's own name is added to the end of it. It is the same rule that makes `www` mean `www.yourdomain.co.uk`.

```
www   CNAME   ext-cust.squarespace.com.   ->  ext-cust.squarespace.com
www   CNAME   ext-cust.squarespace.com    ->  ext-cust.squarespace.com.yourdomain.co.uk
```

The second line points to a name that does not exist, so the www address never loads. Panels handle this differently. Some treat what you type as a complete name and add the final dot for you. Others write what you type straight into the zone: OVHcloud's documentation says a CNAME target that is a domain name must end with a dot, and Google's MX instructions mention DNS hosts that need `smtp.google.com.` written with it.

That dot is the only real issue I have hit with Squarespace and OVH domains. The record looks right at a glance, which is why the mistake survives a quick check. My tutorial on how to {{< a key="ovh-dns-squarespace" >}}connect an OVH domain to Squarespace{{< /a >}} shows each field.

{{< callout type="warning" >}}**Names may need the dot; numbers and text never do.** CNAME and MX targets are names: check whether your panel adds the dot for you. IP addresses (A, AAAA) and TXT text never take one.{{< /callout >}}

To check your own records, read them back after saving (OVHcloud's text mode shows the zone as written) or look the name up. If the answer ends with your own domain, the dot was missing.

## TTL and propagation: how long DNS changes take

Nothing is broadcast when you save a record. What people call propagation is caching: the resolvers that answer for your visitors (their internet provider's, or public ones such as Google's 8.8.8.8) keep each answer for its TTL, then ask again. With a TTL of 3600, most visitors see a change within the hour.

Providers quote longer windows to be safe. GitHub and OVHcloud say up to 24 hours, and Squarespace says 24 to 48 hours, sometimes up to 72. A nameserver change is the slowest of all, because resolvers also cache the registry's list of your nameservers, and registrars usually quote up to 48 hours.

{{< callout type="tip" >}}**Lower the TTL before a planned move.** A day or more ahead, set the TTL of the records you will change to 300 seconds (five minutes), or the lowest your panel allows. On the day, old answers expire within minutes. Put the TTL back to 3600 once everything works.{{< /callout >}}

One more habit: do not test too early. A "does not exist" answer is cached too, so add the records first, then check once, a little later.

## How to check your DNS records

Your browser and your computer cache answers too, so check with a tool that asks DNS servers directly. The free options: the `dig` command in a terminal on a Mac or Linux, `nslookup` or `Resolve-DnsName` (PowerShell) on Windows, or [Google's Dig tool in the Admin Toolbox](https://toolbox.googleapps.com/apps/dig/) in any browser.

```
$ dig +short yourdomain.co.uk NS
$ dig +short yourdomain.co.uk A
$ dig +short www.yourdomain.co.uk CNAME
$ dig +short yourdomain.co.uk MX
```

To see a change before the caches catch up, ask one of your nameservers directly, replacing `ns1.your-dns-host.com` with a name the first command returned: `dig @ns1.your-dns-host.com www.yourdomain.co.uk CNAME`. If the nameserver already gives the new value, your part is done and the rest is waiting.

## Before you edit a live DNS zone: my checklist

1. **Check the nameservers**, so you edit the zone the internet actually reads.
2. **Copy the whole zone** into a text file. Some panels export it or show it as text; otherwise take screenshots. A deleted record goes back in a minute when you have its value.
3. **Change only what you are moving.** A website move touches the A, AAAA and CNAME records on the root and www; an email move touches MX, SPF, DKIM and DMARC.
4. **Redirecting a second domain**, a .co.uk to your .com for example? Change only its web records and keep every mail record: MX, SPF, DKIM, DMARC, and autoconfig or autodiscover if they exist.
5. **Keep the rules**: no CNAME on the root, one SPF record per domain, a final dot on CNAME and MX targets where your panel needs it and, on GitHub Pages, no wildcard record such as `*.yourdomain.co.uk`, which GitHub warns lets other people claim your subdomains.
6. **Delete records that point to services you have left.** A CNAME to an account you closed can be taken over by whoever claims that name at the service next.
7. **Test** with `dig` or Google's tool, then wait out the TTL before changing anything else.

You do not need to hire anyone for a domain connection: it is a handful of records, and the platforms list them for you. Hand it over when the stakes are higher than the job: the domain sits in a former agency's account, email stopped after a change and nobody kept a copy of the zone, or several services share the domain and nobody remembers which record does what. Connecting the domain is also part of every {{< a page="/services/websites" >}}website I deliver{{< /a >}}.
