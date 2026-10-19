---
title: "Set up a compliant cookie banner: Squarespace, Wix, WordPress (Consent Mode v2)"
seo_title: "How to add a cookie banner to a website (Consent Mode v2)"
description: "How to add a cookie banner to a website on Squarespace, Wix or WordPress: block trackers until consent, set up Consent Mode v2 and test it in DevTools."
slug: "add-cookie-banner-website"
translationKey: "cookie-banner-setup"
date: 2026-10-18T21:09:00+02:00
lastmod: 2026-10-18T21:09:00+02:00
category: "gdpr"
article_type: "tutorial"
keywords: ["how to add a cookie banner to a website", "Squarespace cookie banner", "Wix cookie banner", "WordPress cookie consent plugin", "Google Consent Mode v2 setup", "test cookie banner"]
summary: "Use a banner that blocks every non-essential tracker until the visitor answers, with 'Refuse all' next to 'Accept all'. Squarespace's built-in banner covers its own cookies and its built-in Google Analytics but not code you inject, Wix now adds a Usercentrics banner from the dashboard, and on WordPress a consent plugin such as Complianz, CookieYes or Cookiebot does the job. Then pass the answer to Google with Consent Mode v2 and test it all in a private window."
cover: "cookie-banner-setup"
cover_alt: "The article title in white on a ribbed-glass panel over a photo of a cookie consent banner with Refuse all and Accept all buttons of the same size"
related: ["cookie-banner-rules", "squarespace-code-injection", "privacy-policy-guide", "microsoft-clarity-tutorial", "gdpr-guide"]
services: ["websites"]
faq:
  - q: "Can I code my own cookie banner instead of using a consent platform?"
    a: "You can, but you then have to hold back every script until consent, give visitors a way to change their minds, send the Consent Mode v2 signals yourself and test it all again after each change. For most sites, the platform's banner or a consent management platform is less work."
  - q: "Do I need to keep proof of each visitor's consent?"
    a: "Yes. Article 7(1) of the GDPR says you must be able to show that a visitor consented. Consent platforms keep a log of each choice; check that yours does, including on a free plan."
  - q: "How long should my banner remember a visitor's choice?"
    a: "France's CNIL treats six months as good practice, for a refusal as well as for consent, before asking again. Consent platforms usually let you set this period."
  - q: "Do I need a Google-certified consent platform?"
    a: "Only if your site shows Google ads through AdSense, Ad Manager or AdMob. Those publishers need a Google-certified CMP that uses the IAB's TCF to serve personalised ads in the EEA and the UK (since 16 January 2024) and in Switzerland (since 31 July 2024). For Google Analytics and Google Ads tracking, Google asks for Consent Mode v2 signals, which a certified CMP sends for you and a home-made banner must send itself."
  - q: "Why does Google Analytics show fewer visitors after I add a banner?"
    a: "Because visitors who refuse are no longer tracked with cookies. Squarespace warns that once its banner restricts cookies, its own analytics can show many more visitors than Google Analytics. Compare trends over time rather than the two totals."
---

A cookie banner has three jobs: stop non-essential trackers until the visitor answers, make refusing as easy as accepting, and remember the answer. This tutorial shows how to add a cookie banner to a website built on Squarespace, Wix or WordPress, how to pass the visitor's choice to Google with Consent Mode v2, and how to check in your own browser that it really works.

Most of the sites I build for clients run on Squarespace, so I start there. The rules behind each setting (which cookies need consent, what France's CNIL and the UK's ICO check) are in my guide to {{< a key="cookie-banner-rules" >}}cookie banner requirements in 2026{{< /a >}}, part of my {{< a key="gdpr-guide" >}}GDPR guide for small teams{{< /a >}}. This tutorial is practical information, not legal advice.

It is not only for EU businesses. A UK, Swiss or Canadian company whose site tracks visitors in the EU should plan the same banner for them; my article on {{< a key="gdpr-outside-eu" >}}GDPR for companies outside the EU{{< /a >}} sets out when the rules reach you.

## Before you start: list what your site loads

A banner can only hold back what you know about. Before you change any setting, list everything on your site that may store or read something in a visitor's browser:

- **Analytics**: Google Analytics, your website builder's own statistics, Microsoft Clarity.
- **Advertising**: the Google Ads tag, the Meta Pixel, the LinkedIn Insight Tag.
- **Embeds**: YouTube videos, Google Maps, booking and chat widgets.
- **Pasted code**: code injection on Squarespace, custom code on Wix, a header-and-footer plugin on WordPress.

Where each item was added decides whether a built-in banner can control it:

| Platform | Built-in banner | When you need a consent platform |
|---|---|---|
| Squarespace | Yes, in the Cookies & Data Privacy panel | As soon as code injection, code blocks or embeds add trackers |
| Wix | Usercentrics for Wix, added from the dashboard | It already is one: check how your custom code is classified |
| WordPress | None | Always: install a consent plugin |

A consent management platform (CMP) is a service that shows the banner, blocks scripts until the visitor answers, records each choice and passes it on to tools such as Google's. One more point to settle first: in the UK, since February 2026, analytics used only for statistics can run without consent if you explain it and make objecting easy, but advertising still needs consent. With visitors on both sides of the Channel, one banner built to the EU standard keeps things simple.

## How to add a cookie banner to a website built on Squarespace

Squarespace's built-in banner controls Squarespace's own non-essential cookies and Google Analytics when it is connected through the built-in integration. It does not hold back code you paste into code injection, and Squarespace's own list of cookies says the banner restricts some third-party services, not all. I usually add a little custom code to my clients' Squarespace sites, which is exactly the part the built-in banner leaves out.

1. In **Settings**, open the **Cookies & Data Privacy** panel (older guides call it Cookies & Visitor Data) and switch on the cookie banner.
2. Switch on the **Manage cookies** button. According to [Squarespace's cookie banner guide](https://support.squarespace.com/hc/en-us/articles/206545727-Providing-cookie-consent-options-with-a-banner), this is what keeps non-essential cookies such as Google Analytics off visitors' devices until they consent.
3. Switch on the **Decline All** button, so that refusing takes one click on the first screen, like accepting. The disclaimer text and the button labels can be edited in the same panel.
4. For the link that lets visitors change their minds later, choose the **Subfooter** or **Pill** layout, not **Hidden**.
5. Connect Google Analytics through Squarespace's built-in integration, by saving your measurement ID, rather than pasting Google's code: the integration follows the banner.

{{< screenshot id="cookie-banner-setup-01" alt="Squarespace Cookies & Data Privacy panel with the cookie banner, the Manage cookies button and the Decline All button switched on" >}}

Squarespace's help pages do not all use the same labels for these options, so go by what each one does. If your site is not built yet, start with my {{< a key="squarespace-tutorial" >}}Squarespace tutorial{{< /a >}}.

### When code injection is involved

Google Ads, the Meta Pixel, Clarity or a booking widget pasted into code injection will run whatever the visitor answers. Squarespace's guide points to example code on its forum for Google Ads, but Squarespace does not support code-based changes. As soon as you have more than one such script, a CMP is the cleaner route:

1. Choose a CMP that documents a Squarespace installation (CookieHub and iubenda, for example, publish guides) and run its cookie scan.
2. Paste its script at the very top of the **Header** field of code injection, which needs the Core plan or above. My guide to {{< a key="squarespace-code-injection" >}}Squarespace code injection{{< /a >}} shows where the field is and how to undo a mistake.
3. Tag your other scripts the way the CMP asks, often by giving each `<script>` tag `type="text/plain"` and a category attribute, so that they wait for consent.
4. Switch off Squarespace's own banner, so that visitors answer one banner, not two.

{{< screenshot id="cookie-banner-setup-02" alt="Squarespace code injection Header field with the consent platform's script pasted above the other scripts" >}}

## Wix: add the Usercentrics banner and classify your custom code

As of 19 October 2026, Wix no longer offers its original cookie banner to new sites; banners already in place keep working. New sites get Usercentrics for Wix, a consent platform that Wix says supports Google Consent Mode v2. [Wix's guide to the Usercentrics banner](https://support.wix.com/en/article/displaying-a-cookie-banner-on-your-site) has the full detail.

1. In your site's dashboard, open **Privacy & Cookies** and click **Add to Site** next to "Add a cookie consent banner", then accept the terms.
2. In the **Cookie Consent Banner** section, adjust the layout and theme, and check that the first screen shows a button to refuse next to the one to accept.
3. Keep the privacy trigger, the button that reopens the settings, on every page.
4. Check the languages. According to Usercentrics, the free plan includes unlimited banner views, Google Consent Mode v2 and one default language; a site in English and French needs the paid plan to show each visitor the banner in their language.

{{< screenshot id="cookie-banner-setup-03" alt="Wix dashboard Privacy & Cookies page with the Add to Site button next to Add a cookie consent banner" >}}

Then go to **Settings** > **Custom Code** and open each snippet. Set its **Code Type** to Analytics or Marketing when it measures or advertises, or to Functional for preferences; for a script that does both, Wix's developer documentation says to pick the stricter category. Wix's consent log does not cover custom code, so keep that list short.

{{< callout type="warning" >}}**Wix classifies custom code as Essential by default**, and essential code loads before the visitor answers. An analytics or advertising snippet left on Essential runs for everyone.{{< /callout >}}

{{< screenshot id="cookie-banner-setup-04" alt="Wix Custom Code settings for a snippet, with its Code Type options" >}}

If you connect Google Tag Manager through Wix's integration, Wix fires its tags after consent. In Tag Manager, set each non-Google tag to "Require additional consent" with the matching type: `ad_storage`, `analytics_storage` or `functionality_storage`.

## WordPress: install a consent plugin

WordPress has no cookie banner of its own. It is not the platform I recommend to owners who update their site themselves, but on this point it is well served: consent plugins do most of the work. Here are three common ones, with what their WordPress.org pages list for the free version as of 19 October 2026:

| Plugin | Free version includes | Check before choosing |
|---|---|---|
| Complianz | Banner, cookie scan, script blocking, Google Consent Mode v2 | What the premium version adds |
| CookieYes | Banner, automatic blocking, scanner, consent log, Google Consent Mode v2 | The free plan's limits, on its pricing page |
| Cookiebot by Usercentrics | Automatic scan and blocking, Google Consent Mode v2 | Free plan: one domain, up to 50 subpages |

The set-up follows the same pattern whichever you choose:

1. Remove any older cookie notice plugin, so that only one banner remains.
2. In **Plugins** > **Add New Plugin**, search for the plugin, then install and activate it.
3. Follow its set-up wizard to the end. Some connect to an online account, others run entirely inside WordPress. Choose the regions you serve, run the scan and check the category of each cookie.
4. Turn on its Google Consent Mode v2 option.
5. Check that a refuse button sits next to the accept button on the first screen.
6. Add the plugin's way of changing the choice to your footer: a menu link, a shortcode or a floating button, depending on the plugin.
7. Compare the scan with your list from the first step. A script added by your theme or another plugin that the scan missed will run before consent until you declare it.

{{< screenshot id="cookie-banner-setup-05" alt="Consent plugin set-up wizard in WordPress, at the step that turns on Google Consent Mode v2" >}}

## Google Consent Mode v2: what it sends and how to turn it on

Consent mode passes the visitor's answer to Google's tags. Version 2, introduced in November 2023, uses four signals: `ad_storage` and `analytics_storage` (may Google's tags use cookies for ads or for analytics), `ad_user_data` (may data be sent to Google for advertising) and `ad_personalization` (may it be used for personalised ads). Google's EU user consent policy covers visitors in the EEA, the UK and Switzerland, and accounts that send no v2 signals can lose remarketing, ad personalisation and part of their conversion measurement.

Each signal starts as denied and changes to granted only when the visitor accepts. A CMP does this for you once its Google option is on. On Squarespace, Google tags added by code need a CMP with that option, as Squarespace refers consent mode questions to Google. On Wix, Usercentrics says no extra set-up is needed once consent mode is on in your Tag Manager configuration. On WordPress, it is the plugin's option. If you write it yourself, the default must run before the Google tag, as [Google's consent mode guide](https://developers.google.com/tag-platform/security/guides/consent) shows:

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });
</script>
<!-- the Google tag (gtag.js or Tag Manager) comes after this -->
```

When the visitor accepts, the banner sends the update:

```js
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
  'analytics_storage': 'granted'
});
```

Loading Google's tag straight away with these defaults is advanced mode: while consent is denied, the tag sends cookieless pings. In basic mode, the CMP holds the tag back until the visitor accepts, so nothing reaches Google before then, which is the cautious choice in France.

Microsoft Clarity, which I use to see where visitors engage and where they leave, has its own signal. Since 31 October 2025, it sets no cookies for visitors from the EEA, the UK and Switzerland without one. My {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity tutorial{{< /a >}} shows how to connect it to your banner.

## Test your cookie banner in a private window

A banner can look right and still let trackers through. In September 2024, the ICO took action against Sky Betting and Gaming for advertising cookies set before visitors could make a choice ([the ICO's announcement](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2024/09/action-taken-against-sky-betting-and-gaming-for-using-cookies-without-consent/)). The check takes a few minutes:

1. Open a private window, so that no earlier choice is stored, and go to your site. Do not touch the banner yet.
2. Open the developer tools (F12, or Cmd+Option+I on a Mac). In Chrome or Edge, go to **Application** > **Storage** > **Cookies**; in Firefox, to the **Storage** tab. Select your domain.
3. Before any choice, you should see strictly necessary cookies only. Look for `_ga` and `_ga_…` (Google Analytics), `_gcl_au` (Google Ads), `_fbp` (Meta Pixel), `_clck` and `_clsk` (Clarity): none of them should be there.
4. Click **Refuse all**, reload the page and check again: the list should not grow. If your banner has a close button, closing it should work like refusing, as in the CNIL's sample banner.
5. In the **Network** tab, filter on `collect`. After a refusal in basic mode, no request should reach Google Analytics or Clarity; in advanced mode, cookieless Google requests are expected.
6. Open a new private window, click **Accept all** and check that the cookies now appear. If they do not, the banner blocks too much and your statistics will stay empty.
7. Use the footer link to change your mind, refuse, and check that the tags stop.

{{< screenshot id="cookie-banner-setup-06" alt="Chrome developer tools, Application tab, Cookies list for the site after Refuse all, with no Google Analytics or advertising cookies" >}}

On Google's side, Tag Assistant shows the consent state your page sends with each event. Repeat the test in a phone-sized window, and again after every new plugin, pixel or embed.

## Final checklist, and when to hand it over

- One banner, with refuse and accept side by side on the first screen.
- Nothing non-essential before a choice, checked in the developer tools.
- A footer link or button to change the choice.
- Consent Mode v2 and Clarity's signal switched on.
- A cookies section in your privacy policy that matches what the scan found; my guide to {{< a key="privacy-policy-guide" >}}what a privacy policy must say{{< /a >}} covers it.
- A new test after every new tool.

The rules may move. As of 19 October 2026, the EU's Digital Omnibus, which could change some cookie rules, is still a proposal, so set up for today's rules.

On a Squarespace or Wix site with built-in analytics only, you do not need me for this: the steps above are within reach of anyone who updates their own site. A lawyer or a DPO is worth paying for when your business depends on advertising data, when you handle sensitive data such as health information, or when a regulator has written to you. And if you would rather hand over the banner, the privacy page and the tests, they are part of the {{< a page="/services/websites" >}}websites I build{{< /a >}}.
