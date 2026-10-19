---
title: "Google Maps scraper for B2B leads: how I build a list with Outscraper"
seo_title: "Google Maps scraper: build a B2B lead list with Outscraper"
description: "Google Maps scraper tutorial: build a B2B lead list with Outscraper in six steps, from the emails and filters to what a lead costs and the final checks."
slug: "google-maps-scraper-outscraper"
translationKey: "google-maps-scraper-outscraper"
date: 2026-10-17T08:44:00+02:00
lastmod: 2026-10-17T08:44:00+02:00
category: "cold-emailing"
article_type: "tutorial"
keywords: ["Google Maps scraper", "Outscraper tutorial", "scrape Google Maps for leads", "extract emails from Google Maps", "Outscraper pricing", "B2B lead list"]
summary: "A Google Maps scraper such as Outscraper turns a search like 'accountants in Manchester' into a spreadsheet of businesses with their category, address, phone and website, plus the emails their websites publish. At the time of writing (October 2026), the first 500 businesses are free every 30 days, then about £2.25 ($3) per 1,000, with the email enrichment billed on top. It only finds businesses listed on Google, and every email needs verifying before a campaign."
cover: "google-maps-scraper-outscraper"
cover_alt: "A hand ticking rows of a printed table beside map pins on a grid, titled Outscraper"
related: ["email-list-verification-reoon", "cold-email-gdpr-uk-france", "cold-email-infrastructure", "instantly-campaign-setup", "gdpr-data-retention-crm"]
services: ["cold-emailing"]
faq:
  - q: "Is it legal to scrape Google Maps for leads?"
    a: "Two sets of rules apply. Google's terms for Maps users forbid mass downloading its content or creating bulk feeds from it, which is what a scraper does. Data protection law then decides what you may do with the contacts: in the UK, limited companies can receive B2B cold email without consent, sole traders cannot, and named work addresses fall under UK GDPR. This is general information, not legal advice; [Google's Maps terms](https://www.google.com/help/terms_maps) are short enough to read yourself."
  - q: "How long can I keep a scraped prospect list?"
    a: "UK law sets no fixed period: choose one you can justify, write it down, and delete what you no longer need rather than keeping it just in case. In France, the CNIL's reference is three years from collection or from the prospect's last contact with you; after that, the data is deleted or archived unless the person has clearly agreed to hear more."
  - q: "Should I use Outscraper's email validator or a separate verifier?"
    a: "That is up to you. Outscraper sells email validation as an extra enrichment, billed per record, which saves a step. I use Reoon every day. I bought it through a deal on AppSumo: by my figures at the time, about £60 ($79), paid once, for 100,000 verifications plus 500 a day, which is plenty for a small business."
  - q: "Can I cold call the phone numbers from a Google Maps list?"
    a: "In the UK, sales calls to businesses fall under PECR regulation 21: screen each number against the Telephone Preference Service (TPS) and the Corporate TPS first, unless the person has told you they are happy to take your calls. A prospect who rings you after reading your email is not a cold call."
---

A Google Maps scraper collects the business listings Google Maps shows for a search, such as accountants in Manchester, and turns them into a spreadsheet: name, category, address, phone number, website, rating. Add an enrichment that reads each business's website and you also get the email addresses published there. That spreadsheet is the raw material of a B2B cold email campaign.

The scraper I use is Outscraper. The way I use it, a lead costs me about €0.003, and about €0.006 once the list has been verified and only active, qualified leads remain. Its main limit: it only finds businesses that are on Google.

This tutorial goes from the search to a verified file, one step at a time, with Outscraper's labels as they appear at the time of writing (October 2026). You do not need an agency for this part. What happens to the list next is in my {{< a key="b2b-cold-emailing-guide" >}}B2B cold emailing guide{{< /a >}}.

## What a Google Maps scraper extracts with Outscraper

Outscraper's Google Maps scraper returns one row per listing, with the details the business, or Google, has put on it. These are the fields that matter for a prospect list:

| Field | What it holds | Why it matters |
|---|---|---|
| Name | The business name on its listing | Personalising the first line, spotting duplicates |
| Type and subtypes | The main Google category and the others | Keeping only the trade you target |
| Address, city, postcode | Where the business is | Staying inside the area you serve |
| Phone | The number on the listing | A second channel, within the rules (see the FAQ) |
| Site | The website, if there is one | Where the emails are found |
| Rating | The average review score | Useful for some offers, such as review management |
| Business status | Operational or closed | Removing businesses that have shut |
| Verified | Whether the business has verified its listing | A sign that someone looks after it |

The emails come from the **Emails & Contacts** enrichment, which adds the email addresses, contact details and social media links found on each business's website. They come from the website, not from Google: a business with no website, or no address on it, comes back without an email.

One more limit: a Google Maps scraper knows the business, not the person. You get the addresses the website publishes, generic (info@, contact@) or named, and nothing tells you who makes the decisions.

## What Outscraper costs, and what a lead costs me

Outscraper is pay as you go and bills in US dollars, so the pound figures below move with the exchange rate. At the time of writing (October 2026), the Google Maps scraper is priced like this:

- The first 500 businesses are free, and the allowance resets every 30 days.
- Then about £2.25 ($3) per 1,000 businesses, up to 100,000.
- Beyond 100,000, about 75p ($1) per 1,000.
- Enrichments such as Emails & Contacts are billed on top, per record. Outscraper shows the price of each one when you select it: check it before a large run, because the scrape price alone is not your bill.

Check [Outscraper's pricing page](https://outscraper.com/pricing/) before you budget, because prices and free allowances change.

My own figures, from the way I use it: about €0.003 per lead, roughly £2.55 ($3.40) per 1,000 businesses, and about €0.006 per active, qualified lead once the list has been verified, roughly £5.10 ($6.75) per 1,000. The cost per usable lead is higher because you have also paid for the rows that fail cleaning and verification. Your figure will depend on your volume, the enrichments you add and how many rows your filters drop.

Either way, it stays under a penny a lead. The bigger costs of a campaign are elsewhere: the domains, mailboxes and sending tool described in my guide to {{< a key="cold-email-infrastructure" >}}cold email infrastructure{{< /a >}}.

## Before you start: one target, and the rules on business data

A good list starts with a narrow target: one trade, one area, one reason for them to buy. "Accountancy firms in Greater Manchester, for an IT support offer" gives you a search Outscraper can run and an email you can write in three lines. "Small businesses in the North West" gives you neither. When I run a campaign for a client, the client tells me which customers they want, and I go and find them.

Then check who on that list you may email. A listing is public, but that does not settle what you may do with the contacts on it:

- **UK.** Under PECR, limited companies, LLPs and public bodies can receive B2B cold email without prior consent. Sole traders and partnerships outside Scotland count as individuals and need consent, so leave them out. A list of local businesses is likely to mix both, and a listing does not say which is which: check doubtful names on the free [Companies House register](https://find-and-update.company-information.service.gov.uk/), which lists companies and LLPs but not sole traders. The ICO's page on [business-to-business marketing](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/business-to-business-marketing/) sets out the rules.
- **France.** The CNIL allows B2B prospecting by email without consent when the message relates to the recipient's job, provided they are told and can object simply and for free. Generic addresses such as contact@ escape the consent and information rules, but every email must still name the sender and offer a way to opt out.

In both countries, a named work address is personal data, so {{< a key="gdpr-guide" >}}the GDPR{{< /a >}} (the UK GDPR in the UK) applies: a lawful basis written down, usually legitimate interests, and privacy information in the first email at the latest, including where you found the address. Add a source column to every file, such as "Google Maps listing and website, extracted on 17 October 2026", and that part of the first email is ready. My {{< a key="cold-email-gdpr-uk-france" >}}cold email GDPR checklist{{< /a >}} covers the rest.

{{< callout type="note" >}}This is general information, not legal advice. For a large campaign or a regulated sector, read the regulator's guidance in full or ask a solicitor.{{< /callout >}}

## Step 1: create an account and open the Google Maps scraper

Create an account on outscraper.com. Once you are logged in, Outscraper lists its services: open the **Google Maps Data Scraper**. The free allowance covers a first test, so start small and pay only once the results look right.

The next three steps fill in the scraper's settings: the search, the enrichment, then the limit and the filters.

{{< screenshot id="google-maps-scraper-outscraper-01" alt="Outscraper's list of services with the Google Maps Data Scraper selected" >}}

## Step 2: choose categories, locations and language

**Categories.** Outscraper offers a ready-made list of more than 5,000 Google Maps categories. Pick the ones that match your target, Accountant in this example, then switch on **Exact Match**: Google tends to add neighbouring categories to a search, and Exact Match ignores them.

**Locations.** Choose the area from Outscraper's list of locations. If it is not there, use **Custom Locations**. Google Maps shows only about 400 to 500 places per search, according to Outscraper, so for a large area it suggests selecting postcodes or uploading a list of them: the task then runs one search per postcode and gets past that cap.

**Language.** Under **Advanced Parameters**, set the language to match your categories. Exact Match only works when the language is English; with any other language, you filter the categories yourself in step 4.

{{< callout type="tip" >}}One segment per search, one list per segment. Mixing trades in one file means mixing messages in one campaign, and a three-line email cannot speak to everyone.{{< /callout >}}

{{< screenshot id="google-maps-scraper-outscraper-02" alt="Outscraper Google Maps Data Scraper with the Accountant category, Exact Match switched on and Manchester as the location" >}}

## Step 3: add the Emails & Contacts enrichment

Without an enrichment, you get the listing data: names, phone numbers and websites, but no emails. In the enrichments, add **Emails & Contacts**. For every business with a website, it extracts the email addresses, contact details and social media links it finds on the site.

Adding it brings two options; check that both are switched on:

- **Ignore without emails** keeps only the businesses for which an email was found. For cold email, a row without an email is of no use, and Outscraper says ignored records are not billed.
- **Drop email duplicates** removes businesses that share the same address, such as a firm with several branch listings and one central inbox.

Outscraper also offers email validation as another enrichment (**Emails Validator** in its newer guides, **Validate emails** in older ones). You can add it here, or verify the file afterwards with your own verifier, as in step 6.

{{< screenshot id="google-maps-scraper-outscraper-03" alt="Outscraper enrichments with Emails & Contacts added and the Ignore without emails and Drop email duplicates options switched on" >}}

## Step 4: set a limit and filter the results

**Limit.** The limit caps the number of businesses in your file: set it to 100 and the task stops at 100 places, however big the area; set it to 0 and the task runs to the end. Do not confuse it with the advanced parameter that caps each search rather than the whole task (Places Per One Query Search in Outscraper's guide). For a first run, keep the limit small and look at the data before you pay for thousands of rows.

**Filters.** Filters keep only the rows that meet conditions you set on the result fields, such as type, subtypes, city, postal code, site, phone, rating, business status and verified, with operators such as "contains one of", "equals" and "is blank". Three are useful for prospecting:

1. **Business status equals operational**, to drop businesses that have closed, for good or for now.
2. **Subtypes contains one of** your categories, when you search in a language other than English and cannot use Exact Match.
3. **City contains one of** the towns you cover, to keep the file inside your area.

Filters work the other way round as well. If you sell websites, a separate search, without the Emails & Contacts enrichment and filtered on **site is blank**, lists the businesses that have none; with no website there is no email to find, so that list suits the phone or the post rather than cold email.

{{< screenshot id="google-maps-scraper-outscraper-04" alt="Outscraper settings with a limit of 100 and a filter keeping businesses whose status is operational" >}}

## Step 5: run the task and download the file

Start the task, then download the result file once it has finished. The file comes as CSV, XLSX, JSON or Parquet: CSV and XLSX open in a spreadsheet, and the other two are for developers.

Before anything else, read twenty rows by hand. Check that the businesses match your target, that the emails look like real addresses of those businesses, and that nothing is obviously wrong, such as a whole chain under one address. A few minutes here can save a campaign sent to the wrong people.

{{< screenshot id="google-maps-scraper-outscraper-05" alt="An Outscraper result file opened in a spreadsheet, with name, category, phone, website and email columns" >}}

## Step 6: clean the list and verify every email

A raw export is not a campaign list yet. Work through it in this order:

1. **One row per business, one address per row.** When several emails were found, keep the one most likely to reach the person you want: a named address that matches the role, or the main contact address of a small firm.
2. **Remove who you may not email.** In the UK, take out sole traders, partnerships outside Scotland and anyone you cannot classify. In both countries, take out everyone on your suppression list, the people who have already asked you to stop.
3. **Add the source and date columns** if the file does not have them yet. You need them for the privacy information in your first email. The date also matters for {{< a key="gdpr-data-retention-crm" >}}how long you may keep the data{{< /a >}}.
4. **Verify every address.** I verify my lists with Reoon, the email verifier I use every day, and drop the addresses that come back invalid. My {{< a key="email-list-verification-reoon" >}}email list verification tutorial{{< /a >}} explains what to do with each result, including risky and catch-all addresses.

What is left after verification is what I count as an active, qualified lead: the €0.006 figure above. Then import the file into your sending tool; in Instantly, that happens during the {{< a key="instantly-campaign-setup" >}}campaign setup{{< /a >}}.

{{< callout type="warning" >}}**Never import an unverified list into your sending tool.** Some addresses published on websites no longer work, and every bounce counts against the domain you send from.{{< /callout >}}

{{< screenshot id="google-maps-scraper-outscraper-06" alt="Reoon bulk verification results for the cleaned Outscraper list, with valid and invalid addresses counted" >}}

## When Google Maps is the wrong source

Outscraper only finds what Google Maps lists. That suits businesses with a Google listing, the ones customers visit or call: trades, practices, salons, garages, agencies. It misses every business without a listing, and it does not name the decision-maker in a larger company, where the person you want sits behind a generic address or at head office.

So be honest with yourself about your target before you pay for a search. If your buyers are not on Google Maps, a scraper will return a tidy file of the wrong businesses, and you will need another source. MLK Leadhunters covers the other sources, along with segmentation and suppression lists, in [Building a cold email list](https://mlkleadhunters.com/blog/building-a-cold-email-list/).

## From the file to your first campaign: a checklist

Before the list goes anywhere near a campaign, check that:

1. The file covers one segment, with one offer in mind for it.
2. Closed businesses and duplicates are out, and so are sole traders and partnerships outside Scotland if you write to the UK.
3. Every row has its source and its extraction date.
4. Every address has been verified, and only valid ones remain.
5. Your suppression list has been applied.
6. Your sending mailboxes are on secondary domains and warmed up.
7. Your emails are ready: three at most, plain text, no links, with your phone number in them, as in my {{< a key="cold-email-examples" >}}cold email examples{{< /a >}}.

In my campaigns, the first result usually comes within 36 hours of launch. Outscraper is one tool in my prospecting stack, next to Instantly and Reoon; my guide to {{< a key="small-business-tools-guide" >}}small business marketing tools{{< /a >}} lists the rest and what each one costs.

If you would rather not build the lists and run the campaigns yourself, that is what my cold email practice, [MLK Leadhunters](https://mlkleadhunters.com/), does for clients: everything except the replies, which stay with you.
