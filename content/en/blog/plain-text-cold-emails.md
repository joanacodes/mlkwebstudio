---
title: "Why I never put links in cold emails (and send plain text only)"
seo_title: "Links in cold emails: why I send plain text only"
description: "Links in cold emails: why I never use them, why my emails go out as plain text with a phone number, and the Instantly settings that switch tracking off."
slug: "links-in-cold-emails"
translationKey: "plain-text-cold-emails"
date: 2026-10-17T08:40:00+02:00
lastmod: 2026-10-17T08:40:00+02:00
category: "cold-emailing"
article_type: "opinion"
keywords: ["links in cold emails", "plain text cold email", "cold email deliverability", "cold email tracking", "Instantly text only"]
summary: "I never put links in cold emails, and I send them as plain text only: no HTML, no images, no open or click tracking. A tracked link sends the reader through a redirect, open tracking needs an invisible image that turns the email into HTML, and each gives spam filters one more thing to judge, while a plain three-line message reads like one person writing to another. The phone number in the email does the link's job: prospects call."
cover: "plain-text-cold-emails"
cover_alt: "A laptop and a printed document beside stacked envelopes with one new message and the words text/plain"
related: ["cold-email-examples", "instantly-campaign-setup", "cold-email-infrastructure", "cold-email-gdpr-uk-france", "architects-cold-email-case-study"]
services: ["cold-emailing"]
faq:
  - q: "Does a cold email need an unsubscribe link?"
    a: "It needs a simple way to opt out, not necessarily a link: a line inviting people to reply 'no' if they would rather not hear from you works, as long as someone reads the replies and acts on them. Google's one-click unsubscribe requirement concerns senders of 5,000 or more messages a day to personal Gmail accounts, as its [email sender guidelines](https://support.google.com/a/answer/81126) explain."
  - q: "Can I write my website address in a cold email instead of linking it?"
    a: "A web address such as yourcompany.co.uk is still a link, even without http or www: most mail apps make it clickable, and filters read it like any other. I name the company and invite prospects to look at the catalogue on its website; anyone interested finds it in seconds."
  - q: "Can I attach a brochure instead of sending a link?"
    a: "Not to a first email. An unexpected attachment from a stranger is what many phishing emails look like, and it weighs more than any link. Send the brochure when a prospect replies and asks for it."
  - q: "Doesn't a plain-text email look less professional than a designed one?"
    a: "To the person reading it, a plain email looks like a message from a person, which is what a cold email should be. Save the polished design for your website, where interested prospects go next."
---

I never put links in cold emails. Not in the first email, not in the follow-ups, not in the signature. My cold emails go out as plain text: no HTML, no images, no open tracking and no click tracking. Three lines, a phone number and an invitation to call.

I apply this rule to every campaign I run, including the campaigns that brought Pilotech, an air conditioning installer near Paris, 15 new clients in a year. The same rule runs through my whole {{< a key="b2b-cold-emailing-guide" >}}B2B cold emailing guide{{< /a >}}; this article explains the reasoning behind it, the settings that apply it in Instantly and the few moments when a link is fine.

## My rule: plain text, no links, a phone number

Every email in my sequences follows the same pattern:

- Plain text only: no HTML version, no images, no logo, no colours.
- **No links anywhere**, the signature included.
- Three emails at most per contact, and a first email of three lines at most: an introduction, the offer and the call to action.
- A phone number written in the email, with an invitation to call and to look at the catalogue on the website.

People do not want long emails from someone they never asked for anything. Short and sharp works. My {{< a key="cold-email-examples" >}}cold email examples{{< /a >}} show complete first emails built this way.

For Pilotech, the emails went to three audiences: Paris restaurants, Paris offices and shops, and architects, who were the main focus and the ones who called most. The {{< a key="architects-cold-email-case-study" >}}cold email case study{{< /a >}} tells that story; here I defend the rule itself.

## Why links in cold emails hurt delivery

Inbox providers weigh many signals before they decide where an email lands, among them the sender's reputation, its authentication and its content. Reputation takes weeks to build, and authentication is a handful of DNS records. The content is the one part you control completely, in every single email, so that is where I remove every risk I can.

### A tracked link takes a detour

Click tracking rewrites every link in your email. Your link to your catalogue becomes a link to the sending tool's tracking domain, which records the click and then sends the reader on to your page. Unless you set up a tracking domain of your own, that domain is shared with the tool's other users, so your email points to an address whose reputation depends on strangers' campaigns.

### Every link adds a domain to judge

Filters read the links in an email and check the domains they point to. A link to your main website brings your main domain back into a campaign you were careful to send from secondary domains, when the whole point of those domains is to [keep your main one out of cold email](https://mlkleadhunters.com/blog/never-send-from-your-main-domain/). Link shorteners are worse: they hide the destination, which is why spam uses them so often.

### Open tracking needs an image, and an image needs HTML

Open tracking adds an invisible image to the email, and the tool records an open when the recipient's mail app loads it. A plain-text email cannot carry an image, so to track opens the tool has to send your email as HTML, whatever you typed. Your careful three-line message becomes a small web page with a hidden picture in it.

### HTML makes a cold email look like a newsletter

Newsletters and promotions are built in HTML, with logos, buttons, colours and tracked links. A cold email built the same way looks like them, to filters and to the person reading it, and in Gmail an email that looks promotional can end up in the Promotions tab rather than in Primary. A short plain-text message looks like what a cold email should be: one person writing to another.

{{< callout type="note" >}}**This is field practice, not a published rule.** No inbox provider says that a link, on its own, sends an email to spam, and plenty of emails with links reach the inbox. My reasoning is simpler: every link, image and tracker adds something I cannot check from the outside, and my plain-text campaigns get answers without them.{{< /callout >}}

## The phone number does the link's job

In a cold email, the link is usually the call to action: click here, book a slot, see our work. Mine is the phone. The number is in the email with an invitation to call, and the email names the company, so prospects can look at the catalogue on its website whenever they want to.

In Pilotech's campaigns, many prospects, architects especially, called instead of replying. My reading: a call is faster than writing back, a reply put off until later gets buried under the day's emails, and calling is like ticking an item off a to-do list. People also like real human contact. A link would have asked them to do something else first.

Without opens and clicks to watch, I judge a campaign on what pays: replies, calls and new clients. I still A/B test the copy, and I judge the versions on replies: over time I learn which one works, and responses go up. Open rates would not tell me much anyway: Apple Mail's Mail Privacy Protection, for one, can load images in the background, so an email can count as opened when nobody has read it.

One condition: someone who can sell must answer that phone. In my campaigns I handle everything except the replies, which go to the client, and so do the calls.

## How I send plain text in Instantly

I use Instantly partly because its settings make it easy to stay out of spam. At the time of writing (October 2026), these are the options that matter, as [Instantly's help centre](https://help.instantly.ai/en/articles/6531595-delivery-optimization-tool-send-emails-as-text-only) names them; labels can move between versions, so check them in your account.

1. Open the campaign and go to the **Options** tab.
2. Under **Delivery Optimization**, tick **Send emails as text-only (no HTML)**. The other option there, **Send first email as text-only**, covers only the first step of the sequence, so your follow-ups would still go out as HTML.
3. Check that **Open Tracking** is off and that **Link Tracking**, the checkbox under it, is unticked. Instantly's help says text-only sending switches open tracking off; make sure the toggle agrees.
4. Write the sequence without links or formatting: no bold, no colours, no images, nothing pasted from a document with its styles. Text-only mode does not delete a link you add: it shows the web address in full, and that is still a link.
5. In **Email Accounts**, open each sending mailbox and check its signature: plain text, with a name, a company and a phone number. No logo, no social icons, no website link.
6. Add one of your own addresses to the campaign, a Gmail one for example, and open the email when it arrives. In Gmail, the three-dot menu has a **Show original** option that displays the raw message.

In the raw message, look for a line like this one:

```text
Content-Type: text/plain; charset="UTF-8"
```

If you see `multipart/alternative` with a `text/html` part, an `<img` tag or a web address you did not type, something is still adding HTML or tracking. The rest of the campaign options, from the schedule to the daily limits, are in my {{< a key="instantly-campaign-setup" >}}Instantly campaign setup{{< /a >}} tutorial.

If you insist on tracking, at least set up a custom tracking domain, so that your links point to a subdomain of your own sending domain rather than to a shared one. [Instantly's help](https://help.instantly.ai/en/articles/6984188-custom-tracking-domain) gives the record: a CNAME with the host `inst` and the value `prox.itrackly.com`, then you enter `inst.yourdomain.com` in each sending account's settings.

{{< callout type="warning" >}}**For emails to France, there is a legal reason too.** In a [recommendation published in April 2026](https://www.cnil.fr/sites/default/files/2026-04/recommandation-pixels_de_suivi.pdf) (in French), the CNIL, France's data protection regulator, says that an open-tracking pixel in a marketing email needs the recipient's consent, B2B included, apart from narrow exceptions. My {{< a key="cold-email-gdpr-uk-france" >}}cold email GDPR checklist{{< /a >}} covers that rule and its UK counterpart.{{< /callout >}}

## When a link is fine

My rule is about the first contact, not the conversation that follows. A link is fine:

- **When a prospect replies and asks for it.** The catalogue, a price list, a booking page: send it. They asked, and once someone has replied you are in a conversation, not a cold email. MLK Leadhunters' article on [what to do with replies](https://mlkleadhunters.com/blog/what-to-do-with-replies/) suggests offering two time slots or a booking link at that point.
- **In emails people signed up for.** A newsletter sent to subscribers is not cold email, and other rules apply to it.

If you still want a link in a cold sequence, limit the damage: one link at most, to your own website, written out in full rather than hidden behind words or a shortener, with click tracking off, and never in the first email. Then compare the replies with a plain-text version before you keep it.

## What plain text will not fix

Plain text removes risks from the content. It does not make up for the rest of deliverability:

- **Authentication.** Every sending domain needs SPF, DKIM and DMARC records; my {{< a key="spf-dkim-dmarc-setup" >}}SPF, DKIM and DMARC tutorial{{< /a >}} shows how to add them.
- **Infrastructure and volume.** Secondary domains, several mailboxes, warm-up before the first send, then a slow climb towards about 30 emails a day per mailbox, the figure Instantly's own guides suggest. My guide to {{< a key="cold-email-infrastructure" >}}cold email infrastructure{{< /a >}} sizes it all, with the 30 addresses behind the Pilotech campaign as the example.
- **A verified list.** Dead addresses bounce, and bounces wear down a domain's reputation. I clean every list with Reoon before the first send.
- **Relevance.** People who did not want your email can report it as spam, and [Google's email sender guidelines](https://support.google.com/a/answer/81126) ask senders to keep the spam rate reported in Postmaster Tools below 0.1 per cent and never let it reach 0.3 per cent. A precise list and an offer that fits are what keep it low.

## A plain-text checklist before your next campaign

1. Text-only is ticked, and open and link tracking are off.
2. No link, image or logo anywhere, signatures included.
3. The first email has three lines at most: who you are, the offer, and the phone number with an invitation to call.
4. The signature names you and the company in plain text, and the email points to your privacy page by name ("Privacy" on your website) instead of linking to it.
5. Every email offers an opt-out that costs one reply, and someone reads the replies.
6. Someone who can sell answers the phone and notes which calls come from the campaign.
7. A test email shows `text/plain` in Gmail's **Show original**.

You do not need an agency for any of this: the settings take a few minutes. If you would rather hand over the whole campaign and keep only the conversations, that is what [MLK Leadhunters](https://mlkleadhunters.com/) does.
