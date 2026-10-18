---
title: "How to connect an OVH domain to Squarespace (and avoid the trailing-dot trap)"
seo_title: "Connect an OVH domain to Squarespace: step-by-step DNS guide"
description: "Connect an OVH domain to Squarespace step by step: what to delete in the OVHcloud DNS zone, the four A records, the www CNAME and the final dot OVH requires."
slug: "connect-ovh-domain-squarespace"
translationKey: "ovh-dns-squarespace"
date: 2026-10-17T08:51:00+02:00
lastmod: 2026-10-17T08:51:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["connect OVH domain to Squarespace", "OVH DNS zone", "Squarespace DNS records", "OVH CNAME trailing dot", "Squarespace A records"]
summary: "To connect an OVH domain to Squarespace, start the connection in Squarespace's Domains panel, then edit the domain's DNS zone in the OVHcloud Control Panel: delete the AAAA record on the root and any A, AAAA or TXT record on www, set four A records to Squarespace's addresses and add two CNAMEs (www and verification). End each CNAME target with a dot, as in ext-cust.squarespace.com., or OVH appends your own domain to it and the connection fails."
cover: "ovh-dns-squarespace"
cover_alt: "OVHcloud DNS zone records pointing a domain to Squarespace"
related: ["dns-records-explained", "namecheap-dns-squarespace", "squarespace-tutorial", "transfer-domain-name", "web-hosting-comparison"]
services: ["websites"]
faq:
  - q: "Do I need to change the DNS servers to connect an OVH domain to Squarespace?"
    a: "No. Squarespace connects third-party domains with DNS records, so the domain keeps OVHcloud's DNS servers and you add the records in its DNS zone at OVH."
  - q: "Will my email at OVH keep working after the switch to Squarespace?"
    a: "Yes, as long as you keep the MX records and the email TXT records (SPF, DKIM, DMARC). Squarespace only uses the root A records and two CNAMEs, which sit on other lines of the zone."
  - q: "Can I connect an OVH subdomain to Squarespace?"
    a: "Yes. Squarespace's help says to choose Other in its provider list, even if your provider appears, and a subdomain only needs CNAME records: at OVH, their targets need the final dot too. The www line in Squarespace's DNS settings then stays at Record not found, which is expected for a subdomain."
  - q: "Is it better to transfer the domain away from OVH instead of connecting it?"
    a: "Not necessarily. Connecting keeps registration and renewal at OVH and takes a few records. A transfer moves both to another registrar: worth it if you want one login and one bill, not needed for the site to work."
  - q: "Does OVH charge anything to connect a domain to Squarespace?"
    a: "No. The DNS zone comes with a domain registered at OVHcloud and editing it costs nothing. You keep paying OVH for the domain renewal and Squarespace for the site plan."
---

Your domain is registered at OVHcloud and your new website is on Squarespace. To connect an OVH domain to Squarespace, you do not transfer anything and you do not change DNS servers: you edit the domain's DNS zone at OVH and add six records. Four A records point the root of the domain to Squarespace, one CNAME handles www and another proves the domain is yours.

Connecting the domain is the last thing I do before a site goes live, and I have done it with domains registered at Namecheap, Spaceship, Infomaniak, Hostinger, OVH and the old Google Domains (now Squarespace Domains). OVH domains can be tricky with Squarespace. In my case the only real issue was a single dot at the end of a record, and that dot is why this tutorial exists.

Below are the seven steps in order, with the exact values, what to delete, what to leave alone (your email) and how to check the result. Menu names are those of the OVHcloud Control Panel and Squarespace at the time of writing (October 2026); if a label has moved since, the records themselves stay the same. If the difference between a domain, hosting and email is still fuzzy, start with my guide to {{< a key="domain-hosting-email-guide" >}}domains, hosting and email{{< /a >}}.

## What connecting an OVH domain to Squarespace changes

A DNS zone is the list of records that tells the internet where your website and your email live. The domain stays registered at OVH, and OVH keeps billing you for its renewal: only the web part of the zone changes. Squarespace needs these six records:

| Type | Sub-domain at OVH | Target | What it does |
|---|---|---|---|
| A | (empty: the root) | `198.185.159.144` | Sends yourdomain.co.uk to Squarespace |
| A | (empty) | `198.185.159.145` | Same, second address |
| A | (empty) | `198.49.23.144` | Same, third address |
| A | (empty) | `198.49.23.145` | Same, fourth address |
| CNAME | `www` | `ext-cust.squarespace.com.` | Sends www.yourdomain.co.uk to Squarespace |
| CNAME | your unique code | `verify.squarespace.com.` | Proves to Squarespace that the domain is yours |

These are the values in [Squarespace's help page on third-party domains](https://support.squarespace.com/hc/en-us/articles/205812378-Connect-a-third-party-domain-to-your-Squarespace-site) at the time of writing, and [OVHcloud's own Squarespace guide](https://help.ovhcloud.com/csm/en-domain-names-connect-to-squarespace?id=kb_article_view&sysparm_article=KB0063034) walks through the same changes from the OVH side. The DNS settings of your Squarespace site show the values for your domain: if they ever differ from this table, those settings win.

Everything else in the zone stays as it is: the MX records that deliver your email, the TXT records used for SPF and site verifications, the NS records. For what each record type does, see {{< a key="dns-records-explained" >}}DNS records explained{{< /a >}}.

## Before you start: three checks at OVH

**1. The domain uses OVHcloud's DNS servers.** In the OVHcloud Control Panel, open **Web Cloud**, then **Domain names**, click your domain and open the **DNS servers** tab. If the servers listed belong to OVHcloud (names such as `dns10.ovh.net` and `ns10.ovh.net`), the OVH zone is the one the internet reads. If they belong to someone else, Cloudflare or a former agency for example, changing the zone at OVH does nothing: add the records wherever the DNS is actually hosted.

{{< screenshot id="ovh-dns-squarespace-01" alt="OVHcloud Control Panel, DNS servers tab of the domain, showing that OVHcloud's own DNS servers are in use" >}}

**2. You know where your email lives.** If addresses on this domain receive mail, at OVH, Google Workspace or Microsoft 365, their records must survive the change: the MX records, plus the TXT and CNAME records for SPF, DKIM and DMARC. My {{< a key="spf-dkim-dmarc-setup" >}}SPF, DKIM and DMARC tutorial{{< /a >}} shows what they look like.

**3. You have a copy of the zone.**

{{< callout type="tip" >}}In the **DNS zone** tab, switch to the text editing mode and copy everything into a text file before you change anything. OVH keeps a history of the zone too, but your own copy lets you put a deleted record back in a minute.{{< /callout >}}

## Step 1: start the connection in Squarespace

Start on the Squarespace side: the verification code only appears once the connection has begun.

1. In your site, open the **Domains** panel (it sits in the site settings) and click **Use a domain I own**.
2. Type your domain without www, click the arrow, then **Connect domain**.
3. Pick your provider in the list, or **Other** if OVHcloud is not in it.
4. Squarespace opens the **DNS settings** of the domain, with the records to add. Keep this tab open: you will copy values from it.

{{< screenshot id="ovh-dns-squarespace-02" alt="Squarespace Domains panel listing the DNS records to add for a third-party domain: verification CNAME, www CNAME and four A records" >}}

The list starts with the verification CNAME. Its name is a random code unique to your site and its data is `verify.squarespace.com`. If your site is not built yet, my {{< a key="squarespace-tutorial" >}}Squarespace tutorial{{< /a >}} covers that part.

## Step 2: open the DNS zone in the OVHcloud Control Panel

Log in to the OVHcloud Control Panel, open **Web Cloud** at the top, then **Domain names** in the left-hand menu. Click your domain and open the **DNS zone** tab.

You see a table with the sub-domain, the record type, the target and the TTL of every record. A filter lets you display one type at a time, which helps in the next step, and the **Add an entry** button sits above the table.

{{< screenshot id="ovh-dns-squarespace-03" alt="OVHcloud Control Panel, Web Cloud, Domain names: the DNS zone tab of the domain with its table of records and the Add an entry button" >}}

One convention to know: **at OVH, the root domain is an empty sub-domain**. Where Squarespace shows `@` as the name of a record, you leave the **Sub-domain** field empty.

## Step 3: delete the records that clash with Squarespace

Unless someone has already changed it, the zone OVH created with your domain points the root and www to OVH's own servers (a holding page or an OVH hosting plan). Those records have to go, otherwise some visitors keep landing on OVH. Use the button at the end of each line to edit or delete:

| Record | What to do |
|---|---|
| A on the root | Edit it to `198.185.159.144`, or delete it: at the end you want exactly four A records on the root |
| AAAA on the root | Delete it: Squarespace's list has no AAAA record, so one left there would send some visitors elsewhere |
| A, AAAA or TXT on www | Delete: a CNAME cannot share its name with any other record |
| CNAME on www | Keep it and change its target in step 5, rather than adding a second one |
| MX, NS, SRV, autoconfig, autodiscover, DKIM, `_dmarc` | Keep |

OVHcloud's guide also tells you to remove the TXT records on the root and on www, to avoid conflicts. **Do not apply that to your SPF record**: if your email runs on this domain, keep the TXT on the root that starts with `v=spf1`, and any verification code you still use (Google Search Console, for example).

{{< screenshot id="ovh-dns-squarespace-04" alt="OVHcloud DNS zone table with the action menu of the AAAA record on the root open to delete it" >}}

## Step 4: add Squarespace's four A records

Click **Add an entry**, choose **A** in the list of record types, click **Next** and fill in the form:

- **Sub-domain**: leave it empty (the root).
- **TTL**: leave it on **By default**.
- **Target**: `198.185.159.144`

Click **Next**, check the summary, then click **Confirm**. Repeat for the other addresses (if you edited the existing A record in step 3, add only the three missing ones). At the end, the root should carry these four lines and no other A or AAAA record:

```
A   (root)   198.185.159.144
A   (root)   198.185.159.145
A   (root)   198.49.23.144
A   (root)   198.49.23.145
```

An IP address never takes a final dot. The dot only matters for targets that are names, which is the next step.

{{< screenshot id="ovh-dns-squarespace-05" alt="OVHcloud Add an entry form for an A record: empty sub-domain, TTL by default, target 198.185.159.144" >}}

## Step 5: add the www CNAME, with the dot at the end

If a CNAME already exists on www, edit it; otherwise click **Add an entry** and choose **CNAME**:

- **Sub-domain**: `www`
- **TTL**: By default
- **Target**: `ext-cust.squarespace.com.` (with the final dot)

This is the trap. OVHcloud's [guide to CNAME records](https://docs.ovhcloud.com/en/guides/web-cloud/domains/dns-zone-cname-record-creation) says it plainly: when the target is a domain name, end it with a dot, or OVH automatically adds your own domain name to the end of the target.

```
Typed:    ext-cust.squarespace.com
Read as:  ext-cust.squarespace.com.yourdomain.co.uk.   (a name that does not exist)

Typed:    ext-cust.squarespace.com.
Read as:  ext-cust.squarespace.com.                    (correct)
```

In DNS zone syntax, a final dot marks a complete name; without it, the name is read as relative to your own domain. The two versions differ by one character, which is why the mistake survives a quick glance.

{{< callout type="warning" >}}**No dot, no connection.** Without the final dot, the www record never validates in Squarespace and the www address of your site never loads, however long you wait.{{< /callout >}}

{{< screenshot id="ovh-dns-squarespace-06" alt="OVHcloud Add an entry form for a CNAME record: sub-domain www, target ext-cust.squarespace.com. ending with a dot" >}}

## Step 6: add the verification CNAME

Back in Squarespace, copy the code shown as the name of the first CNAME. At OVH, click **Add an entry** and choose **CNAME** again:

- **Sub-domain**: the code alone. OVH adds your domain after it, so do not paste `code.yourdomain.co.uk`.
- **TTL**: By default
- **Target**: `verify.squarespace.com.` (same rule: the final dot)

```
CNAME   <your-unique-code>   verify.squarespace.com.
```

This record proves to Squarespace that you control the domain. Squarespace warns that without it, or with a mistake in it, the domain is unlinked from the site after 15 days. If the domain still is not verified after 48 hours, Squarespace offers an alternative: delete this CNAME and add a TXT record on the root (empty sub-domain at OVH) that contains the same code.

{{< screenshot id="ovh-dns-squarespace-07" alt="OVHcloud Add an entry form for the verification CNAME: Squarespace's unique code as sub-domain, target verify.squarespace.com. with the final dot" >}}

## Step 7: check the records and wait for propagation

Before you leave OVH, open the text mode once more and read the lines you added. Every CNAME target ends with a dot, the four Squarespace addresses are the only A records on the root, and nothing but the CNAME is left on www.

Then comes the waiting. OVHcloud says changes to a DNS zone can take up to 24 hours to apply everywhere, and Squarespace's estimate is 24 to 48 hours, up to 72 in some cases. Squarespace also says that a **Record not found** message in its DNS settings right after you add the records is normal. The **Refresh Records** button, top right of those settings, checks again. There is no point clicking it every five minutes: when the results keep changing, Squarespace advises waiting 48 hours after your last attempt. Once the domain is linked, a green **Connected** label appears in the Domains panel.

To check from your own computer, use a terminal or the free [Dig tool in Google's Admin Toolbox](https://toolbox.googleapps.com/apps/dig/). The four addresses can come back in any order:

```
$ dig +short www.yourdomain.co.uk CNAME
ext-cust.squarespace.com.

$ dig +short yourdomain.co.uk A
198.185.159.144
198.185.159.145
198.49.23.144
198.49.23.145
```

On Windows, `nslookup -type=CNAME www.yourdomain.co.uk` shows the same information. **If the CNAME answer ends with your own domain name, the dot is missing.**

{{< screenshot id="ovh-dns-squarespace-08" alt="Squarespace Domains panel showing the OVH domain with the green Connected label" >}}

## Still not connected after 48 hours?

| What you see | Likely cause | Fix |
|---|---|---|
| Squarespace never validates the www record | The CNAME target has no final dot | Edit it to `ext-cust.squarespace.com.` |
| Squarespace cannot verify the domain | A missing dot, or a typo in the code | Paste the code again, or use the TXT method |
| The root domain sometimes shows an old page | An old A or AAAA record left on the root | Keep only the four Squarespace A records |
| OVH will not accept the www CNAME | Another record still uses www | Delete the A, AAAA or TXT on www first |
| Nothing changes at all | The domain does not use OVH's DNS servers | Add the records where the DNS is hosted |
| Email stops arriving or lands in spam | An MX record or the SPF TXT was deleted | Put it back from your copy of the zone |

If none of these fits, compare your zone line by line with the DNS settings in Squarespace: they flag each record Squarespace cannot find.

## Should you keep your domain at OVH?

To be fair to OVHcloud: it is a long-established French provider, founded in 1999 and based in Roubaix, and its DNS zone editor does everything Squarespace needs. Once you know about the dot, the connection is routine.

My own view: I only use OVH when a client's domain is already there, and I do not recommend it to small business owners, because the Control Panel is a bit complicated to handle when all you want is to change a few records. If the domain works, nothing forces you to move it: connect it and get on with your site. If you want your domains somewhere simpler, here is how to {{< a key="transfer-domain-name" >}}transfer a domain name to another registrar{{< /a >}}, and my {{< a key="web-hosting-comparison" >}}comparison of Hostinger, OVH and Infomaniak{{< /a >}} puts OVH next to the alternatives. Of the three, I recommend Infomaniak, even though out of habit I work mostly with Spaceship.

Next steps once the domain shows **Connected**:

1. Open your site at both addresses, with and without www, and check that both lead to your Squarespace site.
2. In the Domains panel, check that this domain is set as the primary domain, the address visitors see in their browser.
3. Send an email to an address on the domain and reply to it, to confirm that the email records survived.
4. Fill in your page titles and descriptions: my guide to {{< a key="squarespace-seo" >}}Squarespace SEO settings{{< /a >}} lists them in order.
5. Keep the text file with your copy of the zone for a few weeks, just in case.

And if you would rather not touch DNS at all, connecting the domain is part of every {{< a page="/services/websites" >}}website I deliver{{< /a >}}.
