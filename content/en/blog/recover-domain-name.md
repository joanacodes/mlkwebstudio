---
title: "How to get your domain name back from a former web designer"
seo_title: "Get your domain back from a web designer (.com, .co.uk)"
description: "How to get your domain back from a former web designer: find out who the registrant is, ask in writing, and what to do for a .com or .co.uk if they refuse."
slug: "get-domain-back-from-web-designer"
translationKey: "recover-domain-name"
date: 2026-10-17T09:36:00+02:00
lastmod: 2026-10-17T09:36:00+02:00
category: "website-rescue"
article_type: "guide"
keywords: ["get domain back from web designer", "web designer won't release domain", "domain registered in web designer's name", "who owns my domain name", "change of registrant"]
summary: "Look the domain up first (ICANN Lookup for a .com, Nominet's WHOIS for a .co.uk), then find out who the registrant is: that person or company holds the domain, whoever paid for it. If it is your business, ask the registrar for control yourself; if it is the designer, ask in writing for a change of registrant and a transfer, and if they refuse, a dispute procedure (the UDRP or Nominet's DRS) or a court can order it."
cover: "recover-domain-name"
cover_alt: "Laptop and binders on a desk beside a panel of DNS records and the word WHOIS"
related: ["regain-website-access", "transfer-domain-name", "website-security-guide", "dns-records-explained", "best-domain-registrar"]
services: ["rescue"]
faq:
  - q: "Can a web designer legally keep my domain name?"
    a: "If they are the registrant, they hold the registration, but that does not settle who is entitled to it. If they registered it for your business under a contract you paid for, you can ask a dispute panel or a court to order the transfer; a solicitor can tell you how strong your case is."
  - q: "How long does it take to get a domain back from a web designer?"
    a: "With the designer's cooperation, a few days: a .com transfer usually completes within five days, and a .co.uk moves once its IPS tag is changed. A dispute procedure or a court case takes weeks to months."
  - q: "Do I need a solicitor to get my domain back?"
    a: "Not for the lookup, the written request or the transfer itself. A solicitor becomes useful once a formal letter has failed: the UDRP and Nominet's DRS can be filed without one, but advice helps you build the case."
  - q: "Can I just register a new domain instead?"
    a: "You can, and for a young site it is sometimes the quickest fix. But the old domain keeps its links, its Google rankings and the email sent to your old addresses, and it may end up pointing somewhere else, so weigh that against the time a recovery takes."
  - q: "My domain expired while the designer held it. Can I still get it back?"
    a: "Possibly. After expiry, most domains go through grace and redemption periods that vary by extension, during which the registrant at expiry can usually still renew, sometimes for a restore fee. Once the domain is deleted, it is released and anyone can register it, you included."
---

The website is finished, or the working relationship is, and your former web designer still holds your domain name. Sometimes they registered it in their own account to save time and never moved it. Sometimes it is in their name and they no longer answer, or they want an invoice settled first. Either way, to get your domain back from a web designer you need three things, in this order: the facts, a precise written request and, only if that fails, a formal route.

I have registered or connected domains at six registrars: Squarespace (which took over Google Domains), Namecheap, Spaceship, Infomaniak, Hostinger and OVH. Their control panels look nothing alike, but the rules that decide who gets a domain back sit above them: ICANN's for .com and the other generic extensions, Nominet's for .co.uk and .uk. This guide follows those rules.

It deals with the domain itself. The hosting, the site's admin and the other accounts a former provider may keep are covered in my guide to {{< a key="regain-website-access" >}}regaining access to your website{{< /a >}}, and my {{< a key="website-security-guide" >}}website security guide for small businesses{{< /a >}} puts every kind of rescue in order.

## Who owns a domain name: the registrant, not the payer

Nobody buys a domain outright: it is registered for a period and renewed, through a company called a registrar. Four roles get mixed up when a working relationship ends:

| Role | Who it is | In practice |
|---|---|---|
| Registrant | The person or company named as the domain's legal holder | The right to renew, change and transfer the domain |
| Registrar | The company the domain is registered through: Namecheap, OVH, Squarespace… | Runs the account and applies the extension's rules |
| Account holder | Whoever has the login at the registrar | Day-to-day control, not ownership |
| Payer | Whoever paid for the domain or for the website package | Evidence for your case, nothing more on its own |

**The registrant is the one that counts.** If your business is the registrant and the designer only holds the login, you are in a strong position, because the registrar acts on the registrant's instructions. If the designer or their agency is the registrant, they control the domain until they hand it over or a decision orders them to, whatever your invoices say.

## Look the domain up first (WHOIS and RDAP)

A lookup is free and takes a minute. For a .com, .net, .org or any other generic extension, use [ICANN Lookup](https://lookup.icann.org/), which queries RDAP, the protocol that has replaced WHOIS for these extensions. For .co.uk and .uk, use the WHOIS search on Nominet's website. Note four things:

1. **The registrar**: the company you, or the designer, will be dealing with.
2. **The expiry date**: if it is only weeks away, renewal comes before any discussion, because a lapsed domain takes your website and your email down with it.
3. **The status** (for generic extensions): `clientTransferProhibited` is a transfer lock that the account holder can switch off; `clientHold` means the registrar has taken the domain offline; `redemptionPeriod` and `pendingDelete` mean it has expired and is close to being released.
4. **The name servers**: they tell you where the DNS is hosted, which matters later for keeping the site and email online.

What a lookup rarely shows any more is the registrant's name: personal details are hidden for privacy, and you will often see "REDACTED FOR PRIVACY" in their place. To find out who the registrant is:

- ask the designer for a screenshot of the domain's contact details in the registrar account: registrant name, organisation and email;
- search your inbox for the registrar's name: registrars send renewal reminders and email verification requests to the registrant, so if you have never received one, the address on the domain is probably the designer's;
- ask the registrar's support: it will not give a registrant's details to a third party, but if your business is the registrant, it can confirm it once you have proved who you are.

## Three situations, three ways to get your domain back

| What you find | What to do |
|---|---|
| Your business is the registrant, the designer holds the login | Ask the designer to move the domain to an account of yours. If they will not, contact the registrar with proof of identity and ask for control of the domain or for its transfer code. |
| The designer or their agency is the registrant | Ask in writing for a change of registrant to your business, then for the move to your own account (next sections). |
| Nobody answers and the expiry date is close | Write anyway and keep proof that you did, ask the registrar what it needs from you before the expiry date, and keep an eye on the domain. |

If the domain was bought inside a website builder account, Squarespace or Wix for example, the builder account matters as much as the domain: the guide to {{< a key="regain-website-access" >}}regaining access to your website{{< /a >}} covers ownership transfers on those platforms.

## Gather your proof, then ask in writing

A request backed by documents is easier to say yes to and harder to ignore. The same file will serve if you later need a dispute procedure or a solicitor.

### What to gather

- invoices, quotes or a contract that mention the domain, or a website package that included it;
- emails or messages in which the designer offered to register the domain for you;
- your company's Companies House record (name, number and registered office) if you are a limited company, and any trade mark registration for the name;
- proof that the domain has served your business: old versions of the site on the Wayback Machine (web.archive.org), email addresses on the domain, letterheads, your Google Business Profile;
- a dated screenshot of the lookup.

### The email, then the letter

Write a short, factual email that asks for precise actions with a deadline. If you genuinely owe an invoice, settle it or agree on it first: a fair bill costs less than any procedure, and paying it removes the designer's only argument.

```
Subject: Transfer of the domain [yourbusiness.co.uk] to [Your Business Ltd]

Hello [first name],

When you built our website in [month and year], you registered the domain
[yourbusiness.co.uk] for [Your Business Ltd]. It appears on invoice [number].

Could you please, by [date, 7 to 14 days from today]:

1. change the registrant of the domain to [Your Business Ltd, company
   number 01234567, registered office address];
2. move it to our own registrar account: for a .co.uk, change the IPS tag
   to [OUR-REGISTRAR-TAG]; for a .com, send us the transfer (auth) code;
3. leave the DNS records as they are until the move is complete.

If anything is still owed for the domain, please send me the invoice and
I will settle it.

Many thanks,
[Name, role, phone number]
```

{{< callout type="tip" >}}**Ask for actions, not for a debate about ownership.** "Please change the registrant to our company and send us the transfer code" is a task someone can do in a few minutes; "give us back our domain" opens an argument.{{< /callout >}}

If the email goes unanswered, send the same request by recorded delivery, or have a solicitor send a letter before action: it dates your request and shows you are serious. And do not log in to the designer's account with a password you happen to know: the account is theirs, and using it without permission can be an offence under the Computer Misuse Act.

## Taking the domain over: the rules for .com and .co.uk

### .com and other generic extensions

These follow ICANN's [Transfer Policy](https://www.icann.org/resources/pages/about-transfer-policy-2017-10-10-en). Two of its rules shape the takeover:

- **The transfer code.** The registrar must give the registrant the transfer code (also called the auth code or EPP code) within five calendar days of the request, when the account cannot generate it directly. The right belongs to the registrant: if that is your business, you can ask for it yourself.
- **The 60-day lock.** A change of registrant can be followed by a 60-day lock on transfers to another registrar, unless the registrant opted out beforehand, where the registrar allows it. The domain keeps working during the lock: you can renew it and edit its DNS, you just cannot move it to another registrar.

In practice, ask the designer to change the registrant to your business, opting out of the lock if the registrar offers it, and then to send you the transfer code. Or ask them to move the domain into an account of yours at the same registrar (some registrars call this a push), and change registrar later, at your own pace.

{{< callout type="note" >}}ICANN's Board has adopted a revised Transfer Policy with shorter locks, but at the time of writing (October 2026) the rules above still apply. Your registrar's help pages will say when the new ones take over.{{< /callout >}}

### .co.uk and .uk

Nominet, the .uk registry, does not use transfer codes. Changing the registrant needs the current registrant's agreement, usually through their registrar. Moving the domain to another registrar works with the IPS tag, the identifier of each registrar: your new registrar gives you its tag, and the current registrar changes the domain's tag to it, or the account holder does it from the registrar's panel.

The screens differ from one registrar to the next, but the steps do not: my tutorial on how to {{< a key="transfer-domain-name" >}}transfer a domain name to another registrar{{< /a >}} takes them in order.

## Keep your website and email online during the move

Moving a domain does not change its name servers. But if those name servers belong to the old registrar or to the designer's hosting, the zone they serve can disappear once the domain leaves or the account is closed, and your site and email go with it. Before anything moves, copy every record. A terminal on any computer can query the main ones:

```
dig +short yourbusiness.co.uk NS
dig +short yourbusiness.co.uk A
dig +short www.yourbusiness.co.uk CNAME
dig +short yourbusiness.co.uk MX
dig +short yourbusiness.co.uk TXT
dig +short _dmarc.yourbusiness.co.uk TXT
```

On Windows, `nslookup -type=MX yourbusiness.co.uk` gives the same information. DKIM records sit under a selector, such as `google._domainkey` for Google Workspace or `selector1._domainkey` for Microsoft 365: ask your email provider which one is yours. Many DNS panels can also export the whole zone as a text file, which is the simplest thing to ask the designer for.

Recreate the records where the DNS will live before you switch the name servers. My guide to {{< a key="dns-records-explained" >}}DNS records{{< /a >}} explains what each one does, and the {{< a key="spf-dkim-dmarc-setup" >}}SPF, DKIM and DMARC tutorial{{< /a >}} covers the email ones.

## If the web designer refuses or has disappeared

A formal letter sometimes settles it. When it does not, the formal routes depend on the extension:

- **.com and other generic extensions: the UDRP.** ICANN's Uniform Domain-Name Dispute-Resolution Policy is run by approved providers, WIPO among them. You must show that the domain is identical or confusingly similar to a trade mark you have rights in (registered or not), that the holder has no rights or legitimate interest in it, and that it was registered and is being used in bad faith. If you win, the panel orders the transfer. Panels can also decline a case that is really a contract dispute between a business and its supplier, so get advice before you file.
- **.co.uk and .uk: Nominet's Dispute Resolution Service (DRS).** You must show rights in a name or mark identical or similar to the domain, and that the domain is an abusive registration in the holder's hands. Since 7 July 2026, [WIPO administers the DRS on Nominet's behalf](https://www.wipo.int/en/web/amc/w/news-domain-name-disputes/2026/news_0007): new complaints are filed on WIPO's site, while the policy, the experts and the fees stay the same and Nominet staff still run the mediation stage. [Nominet's disputes page](https://nominet.uk/disputes) explains the steps.
- **The courts.** A court can order a domain transferred, often as part of a wider claim under your contract with the designer. This is a solicitor's territory.

If the designer has disappeared, the same routes apply. Keep proof that you tried every address and number you have: a panel or a court will want to see it.

## How to make sure it never happens again

Most of this takes ten minutes when you register a domain, and it saves weeks later:

1. **Register every domain in your business's name**, as the registrant, with an email address you control and will still read in five years.
2. Open the registrar account in your own name, with two-factor authentication, auto-renew and a payment card that will still be valid at renewal time.
3. Give your designer access, not ownership: several registrars let you share the management of a domain without handing over the account, and DNS changes rarely need more.
4. Put it in the contract: the domain is registered in the client's name, and every access is handed back at the end of the work.
5. Keep a list of your accounts (registrar, DNS, hosting, email, website builder) and of who holds each login.

If you are choosing where to keep your domains, my comparison of the {{< a key="best-domain-registrar" >}}best domain registrars in the UK{{< /a >}} looks at the six I have used, renewal prices included.

## What you can do yourself, and when to hand it over

You do not need me, or anyone else, for the first steps. The lookup, the proof and the written request cost an hour and nothing more, and a cooperative designer can finish the job in a few days. If the designer still refuses after a formal letter, the next step is legal rather than technical, and a solicitor will serve you better than I would.

Where I come in is the technical side: taking the domain over, moving it to an account in your name, rebuilding the DNS so the website and email keep working, and checking the other accesses the provider held. Access retrieval is a fixed-price job for me, and rescue requests get an answer the same day or within 24 hours.

Your next steps, in order:

1. Run the lookup and note the registrar, expiry date, status and name servers.
2. Find out who the registrant is.
3. Gather your invoices, contract and company documents.
4. Send the written request, with a deadline.
5. Copy the DNS records before anything moves.
6. Once the domain is yours, switch on auto-renew and two-factor authentication.
