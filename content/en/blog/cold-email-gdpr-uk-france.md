---
title: "Cold email GDPR checklist: what PECR and UK GDPR allow in B2B"
seo_title: "Cold email GDPR checklist for UK businesses (PECR)"
description: "Cold email GDPR checklist for UK businesses: who you can email without consent under PECR, what UK GDPR asks for named contacts, and what changes in France."
slug: "cold-email-gdpr-checklist"
translationKey: "cold-email-gdpr-uk-france"
date: 2026-10-17T08:33:00+02:00
lastmod: 2026-10-17T08:33:00+02:00
category: "cold-emailing"
article_type: "guide"
keywords: ["cold email GDPR", "PECR cold email rules", "B2B cold email UK GDPR", "PECR corporate subscribers", "legitimate interests assessment cold email", "cold email compliance checklist"]
summary: "Under PECR, you can send B2B cold emails to limited companies, LLPs and public bodies without prior consent, but sole traders and partnerships outside Scotland need consent. When the address names a person, UK GDPR also applies: document a legitimate interests assessment, give privacy information in the first email at the latest and honour every opt-out at once. Since February 2026, PECR fines can reach £17.5 million or 4% of worldwide turnover."
cover: "cold-email-gdpr-uk-france"
cover_alt: "A laptop and a printed document beside a ticked shield, labelled PECR and CNIL"
related: ["email-list-verification-reoon", "google-maps-scraper-outscraper", "plain-text-cold-emails", "cold-calling-vs-cold-emailing", "chatgpt-gdpr-client-data"]
services: ["cold-emailing"]
faq:
  - q: "Does a business email address published online count as consent?"
    a: "No. For a limited company or an LLP you do not need consent under PECR anyway. For a sole trader, an address on a website or in a directory is not consent: consent has to be given to you, freely and specifically."
  - q: "Can I cold email a list I bought?"
    a: "Yes for corporate subscribers, with care. Ask the seller where and when the data was collected, remove sole traders and partnerships outside Scotland unless they agreed to hear from your business by name, and give the privacy information, source included, in your first email."
  - q: "Do the same rules apply if I phone prospects instead?"
    a: "Calls follow PECR regulation 21 instead: screen numbers against the Telephone Preference Service (TPS) and the Corporate TPS before a sales call, unless the person has told you they are happy to be called. A prospect who rings you after reading your email is not a cold call."
  - q: "Does UK GDPR apply to info@ or sales@ addresses?"
    a: "Usually not, as long as the address does not identify a person: a generic company address is not personal data. PECR regulation 23 still applies, so name yourself and give an opt-out address. A sole trader's info@ address remains covered by the consent rule."
  - q: "Who enforces cold email rules in the UK?"
    a: "The Information Commissioner's Office (ICO). People can report unwanted marketing emails to it, and it can issue enforcement notices and fines under both PECR and UK GDPR."
---

When I suggest cold emailing to a business owner, the objection I hear is that it is illegal. For B2B, it is not. In the UK you can email limited companies and LLPs without asking first, as long as you follow a short list of rules, and this cold email GDPR checklist goes through them: who you may email, what each email must say, what to write down, and what changes when your prospects are in France.

I work between London and Paris, with clients in both countries, so I deal with both sets of rules. If you only need the short answer on legality, MLK Leadhunters gives it in [Is cold email legal in France, the EU and the UK?](https://mlkleadhunters.com/blog/is-cold-email-legal/). This article is the working version, for whoever builds the list and presses send. For the campaign as a whole, start with my {{< a key="b2b-cold-emailing-guide" >}}guide to B2B cold emailing{{< /a >}}.

{{< callout type="note" >}}This is general information, not legal advice. The rules change, and a large campaign or a regulated sector deserves a solicitor's opinion or a careful read of the ICO's guidance.{{< /callout >}}

## PECR and UK GDPR: two laws, two questions

B2B cold email is legal in the UK under conditions set by two different laws. Keeping them apart makes every later decision easier.

| Law | The question it answers | When it applies |
|---|---|---|
| PECR, the Privacy and Electronic Communications Regulations 2003 | May I send this marketing email to this address? | Every marketing email |
| UK GDPR, with the Data Protection Act 2018 | May I hold and use this person's details, and how? | Whenever an address or a row of your list identifies a person |

PECR is about the channel, UK GDPR about the data. A cold email to a named employee of a limited company passes PECR without consent, and UK GDPR still applies, because her name sits in the address and in your spreadsheet. A cold email to a sole trader fails PECR without consent, however tidy your GDPR paperwork.

The ICO enforces both, and its [direct marketing guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/) is the reference behind everything below.

## Who you can cold email without consent

PECR's regulation 22 sets the consent rule for marketing emails, and its first paragraph limits that rule to "individual subscribers". Everyone else is a corporate subscriber, and the consent rule does not apply to them.

| Who you are writing to | Status under PECR | Consent needed for a cold email |
|---|---|---|
| Limited company or plc | Corporate subscriber | No |
| Limited liability partnership (LLP) | Corporate subscriber | No |
| Partnership in Scotland | Corporate subscriber | No |
| Government or public body | Corporate subscriber | No |
| Sole trader | Individual subscriber | Yes |
| Partnership in England, Wales or Northern Ireland | Individual subscriber | Yes |
| Consumer | Individual subscriber | Yes |

The text is short and worth reading once: [regulation 22 on legislation.gov.uk](https://www.legislation.gov.uk/uksi/2003/2426/regulation/22). The exception a business can rely on, the soft opt-in, covers people whose details you collected while selling to them or negotiating a sale, for your own similar products, with a simple way to refuse at that point and in every message since. A cold list never meets that test, so for a sole trader, "consent needed" means: leave them out.

The check takes seconds on the free Companies House register. Companies and LLPs are listed there, with their type; sole traders and ordinary partnerships are not. When you cannot tell, treat the business as an individual subscriber.

Lists built from local listings need this check most. A Google Maps extract of UK trades, the kind my {{< a key="google-maps-scraper-outscraper" >}}Outscraper tutorial{{< /a >}} builds, is likely to include plenty of sole traders.

{{< callout type="warning" >}}What counts is the legal form of the business, not its size or how it presents itself. A plumber trading as a limited company is a corporate subscriber; the plumber next door, trading in their own name, is not. **Classify every lead before it reaches your sending tool.**{{< /callout >}}

## What UK GDPR adds when an address names a person

PECR decides whether you may send; UK GDPR governs the list itself. As soon as an address or a row identifies someone (a name, a named address, a job title at a five-person firm), you are processing personal data, and you need four things.

1. **A lawful basis, written down.** For B2B prospecting it is usually legitimate interests. The ICO's three-part test asks what the interest is (finding clients), whether emailing this person is necessary for it, and whether their interests override yours. Answer the three questions on one page, date it and keep it. An email that matches the recipient's job passes the balancing part far more easily than a broad one.
2. **Privacy information by the first email.** Article 14 applies when you did not get the details from the person. Tell them who you are, why you hold their details, where you found them and how to object, within a month, and at the latest in the first message you send them.
3. **Only the data you need.** Name, job title, company, work address, where you found it and when. Personal mobile numbers and home addresses have no place in a B2B list.
4. **A retention period.** UK law sets no fixed number, so choose one you can defend, write it down and delete non-responders when it ends.

Two habits complete the picture. I verify lists with Reoon before they reach the sending tool, which keeps the data accurate and the bounces down; my {{< a key="email-list-verification-reoon" >}}email list verification tutorial{{< /a >}} shows the steps. And every tool that holds the list, from the scraper to the sending platform, processes personal data on your behalf, so read its data processing terms. The same applies to an AI assistant you paste prospect details into, as I explain in {{< a key="chatgpt-gdpr-client-data" >}}ChatGPT and GDPR{{< /a >}}.

## What every cold email must contain

PECR's regulation 23 covers every marketing email, corporate subscribers included: you must not hide who is sending, and you must give a valid address where the recipient can ask you to stop. Add the Article 14 information, and the footer of a first cold email looks like this:

```
[First name Last name], [Company name] Ltd
Registered in England and Wales, no. [company number], [registered office address]
I found your address on [source]. If you would rather not hear from me, reply "no" and I will not write again.
How we use your details: see "Privacy" on our website.
```

Four lines cover a real sender, the company's legal name and registration details, the source of the data and an opt-out that costs one reply. The reply address is the valid address PECR asks for, so the sending mailbox must be one that somebody reads.

The full notice (lawful basis, retention period, the right to complain to the ICO) lives on your website: key points in the email, details one step away, which is the layered approach the ICO describes. If you send plain text with no links, as I do, name the page rather than linking it. The rest of the email stays short: three lines at most, with a phone number, as in my {{< a key="cold-email-examples" >}}cold email examples{{< /a >}}.

## Opt-outs: the suppression list does the work

Under UK GDPR, an objection to direct marketing is absolute (Article 21): once someone says stop, you stop, with no balancing test and no "last" follow-up. Opt-outs arrive in whatever form people choose: a one-word reply, an annoyed paragraph, a phone call. All of them count.

Do not delete the address. Keep it on a suppression list with the minimum (the address, the date, "opt-out"), so the person never comes back in a new list. Check every new list against it before import, and add it to your sending tool's block list.

The weak point is the handover. In my campaigns I do everything except the replies, which go to the client, so the person who reads the "no" is not the one who runs the list. And because every email carries a phone number, many prospects call instead of replying ({{< a key="cold-calling-vs-cold-emailing" >}}why my prospects prefer to call{{< /a >}}), so an opt-out can arrive by phone. Agree in advance how an opt-out travels from whoever receives it to the list, and how fast: the same day is a good rule.

## Tracking pixels: the question plain text avoids

Open tracking works through an invisible image: when it loads, the sender learns that the email was opened. France's regulator, the CNIL, treats that as reading information from the recipient's device, like a cookie. In a recommendation published in April 2026, it says these pixels need prior consent when they serve marketing, and that the right to send a B2B email without consent does not extend to the pixel. Only two narrow uses escape consent: security and authentication, and measuring deliverability, for example to stop writing to inactive addresses. In the UK, the comparable rule is PECR's regulation 6, the consent rule behind cookie banners, which covers storing or reading information on a device, not only cookies on websites.

My cold emails do not raise the question. They are plain text, with no HTML and no links, so there is no pixel to justify and nothing to click. I chose plain text for delivery ({{< a key="plain-text-cold-emails" >}}why I never put links in cold emails{{< /a >}}), and it settles a compliance question as well. If you do track, treat the pixel as a separate decision from the email, with its own legal basis in each country you send to.

## PECR fines since February 2026

The Data (Use and Access) Act 2025 received Royal Assent on 19 June 2025 and comes into force in stages. One stage matters here: since February 2026, the maximum PECR fine has been £17.5 million or 4% of worldwide annual turnover, whichever is higher, the same ceiling as UK GDPR. It used to be £500,000. The government's [commencement page](https://www.gov.uk/guidance/data-use-and-access-act-2025-plans-for-commencement) lists what applies from when.

The ceiling is for the worst cases, but two consequences are worth knowing. The PECR side of a campaign, once the cheap part to get wrong, now weighs as much as the GDPR side. And PECR applies to whoever sends a marketing email and to whoever instigates it: if you hire someone to run your campaign, the rules are still yours.

## The cold email GDPR checklist, step by step

Run it before every campaign, not once a year.

1. **Write down the offer and the job titles it concerns.** If you cannot say why the email matters to that job, the campaign fails the balancing test before it starts.
2. **Classify every lead.** Company, LLP or public body: keep. Sole trader or partnership outside Scotland: remove, unless you hold their consent.
3. **Record the source and the date** of each address in your spreadsheet.
4. **Verify the addresses** and remove the invalid ones.
5. **Check the list against your suppression list.**
6. **Write and date your legitimate interests assessment.** One page is enough.
7. **Add the footer**: sender, company and registration details, source, opt-out by reply, privacy notice.
8. **Decide on tracking.** Plain text with tracking off removes the question.
9. **Agree who passes on opt-outs**, from replies and from calls, and how fast.
10. **Set the retention period** and put the deletion date in your calendar.

## Prospecting in France: what changes

If some of your prospects are French businesses, follow the French rules for those emails too. They draw the line in a different place. Under article L34-5 of the French Postal and Electronic Communications Code and the CNIL's guidance, you may email professionals without prior consent when:

- the message relates to their job;
- they are told their address is used for prospecting, and can object simply and free of charge;
- every email names the sender and offers a way to opt out.

Generic company addresses such as contact@ or info@ are the company's details, not a person's, so the first two conditions do not apply to them; the third still does. The CNIL's page on [email prospecting](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel) (in French) sets this out.

The biggest difference with the UK: the CNIL's B2B rule speaks of professionals and their profession, and does not ask whether the business is a company. The campaigns I run for {{< a page="/projects/pilotech-teknopoint" >}}Pilotech{{< /a >}}, an air conditioning installer in the Paris region, go to three audiences: Paris restaurants, Paris offices and shops, and architects, the main focus and the ones who called most ({{< a key="architects-cold-email-case-study" >}}the full case study{{< /a >}}). Many of those architects work on their own. In France, an email about air conditioning for their projects falls under the B2B rule; the same email to London architects who trade as sole traders would need their consent.

Three more French points for your checklist:

- **Retention.** The CNIL's benchmark for prospects is three years from collection or from the prospect's last contact with you. Your own follow-ups do not restart the clock.
- **Tracking pixels.** The CNIL's 2026 recommendation, above, applies in full.
- **Sources.** In December 2024 the CNIL fined KASPR, whose Chrome extension supplies the contact details of people on LinkedIn, €240,000. Among other failings, it had collected the details of users who had chosen to restrict who could see them, and renewed their storage automatically. Know where every address on your list comes from.

If you would rather hand all of this over (the list, the checks, the footer, the suppression list and the campaign itself), that is what [MLK Leadhunters](https://mlkleadhunters.com/) does.
