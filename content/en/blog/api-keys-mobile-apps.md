---
title: "API keys in a mobile app: why you should never ship them, and what to do instead"
seo_title: "API key security in a mobile app: never ship secret keys"
description: "API key security in a mobile app: why OpenAI, Claude or Stripe secret keys must never ship inside your app, and the small server setup to use instead."
slug: "api-key-security-mobile-app"
translationKey: "api-keys-mobile-apps"
date: 2026-10-18T22:51:00+02:00
lastmod: 2026-10-18T22:51:00+02:00
category: "mobile-apps"
article_type: "guide"
keywords: ["API key security mobile app", "API key in mobile app", "hide API key in app", "OpenAI API key mobile app", "backend proxy API key", "Firebase App Check"]
summary: "Treat every key inside a mobile app as public: anyone can download your app, unpack it and read its strings, and obfuscation only slows them down. Secret keys, such as OpenAI, Claude or Stripe secret keys, belong on a server, in a small function that checks the user, applies your limits and calls the API for the app. Keys designed to be public, such as a Firebase configuration or a Stripe publishable key, can ship, provided rules and restrictions do the protecting."
cover: "api-keys-mobile-apps"
cover_alt: "The article's title in white on a ribbed-glass panel over a photo of a code window"
related: ["ai-app-data-leaks", "mobile-app-security-checklist", "claude-api-tutorial", "openai-api-tutorial", "mobile-app-launch-guide"]
services: ["automation"]
faq:
  - q: "Is it safe to keep an API key in the iOS Keychain or the Android Keystore?"
    a: "For secrets created on the phone, such as a user's session token, yes: that is what they are for. For a key you ship with the app, no: it can be read in the app file before your code ever moves it into the Keychain or the Keystore."
  - q: "Can users bring their own OpenAI or Claude key to my app?"
    a: "Yes. Some apps let users paste their own key, which they pay for and can revoke. Store it in the Keychain or the Keystore, send it only to the provider over HTTPS, and never fall back on your own key when theirs is missing."
  - q: "Does a private GitHub repository keep an API key safe?"
    a: "It is safer than a public one, not safe: everyone with access to the repository, its build logs or a copy on a laptop can read the key, and a repository can be made public by mistake. Keep keys in your platform's secret store instead."
  - q: "Does certificate pinning protect an API key in my app?"
    a: "No. Pinning makes it harder to read your app's traffic through an intercepting proxy, which protects your users' connections, but the key is still in the app file for anyone who unpacks it. Android's documentation presents pinning as an extra layer of security, not as a place to hide secrets."
  - q: "How can I tell if someone is using my API key?"
    a: "Look at the provider's usage page for spikes, models you do not use or activity at hours when your users are asleep. Anthropic recommends reviewing your keys' usage patterns in the Claude Console regularly, and a spend limit caps the damage while you look."
---

If your app calls OpenAI, Claude, Stripe or any other paid service with a secret key stored inside the app, assume that key is already public. A mobile app is a file anyone can download and take apart, so **API key security in a mobile app** comes down to one rule: secret keys stay on a server you control, and the app talks to that server.

Below: which keys must stay secret, what to build instead (one small function) and what to do if a key has already leaked. It is part of my guide to {{< a key="mobile-app-launch-guide" >}}launching a mobile app{{< /a >}}.

AI has shrunk the time it takes to build an app, for me as for everyone: the {{< a key="bespoke-crm-internal-app" >}}internal app I built for a client whose leads piled up{{< /a >}} has AI and phone integrations. It has not changed where a secret key belongs.

## API key security in a mobile app: every key you ship is public

An Android app is an APK file and an iPhone app an IPA file: archives that free, well-documented tools open in minutes, listing the text inside. Android's documentation says it plainly: "When your app is compiled, and your app's source code includes API keys, it's possible for an attacker to decompile the app and find these resources" ([Android Developers](https://developer.android.com/privacy-and-security/security-tips)).

Hiding the key does not change that:

- **Obfuscation**, or splitting the key into pieces, slows a reader down. But the app must rebuild the key to use it, and anyone running your app on their own phone can read the requests it sends.
- **.env files and build variables** are copied into the app. Expo's documentation warns that `EXPO_PUBLIC_` variables "will be visible in plain-text in your compiled application"; the same goes for any value compiled into a Flutter, Swift or Kotlin build.

The providers agree. OpenAI's help centre tells you never to deploy a key in client-side environments such as browsers or mobile apps, and to send requests through your own backend ([OpenAI](https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety)). Anthropic says never to include the key directly in your code or configuration files ([Claude help centre](https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure)). Both companies' JavaScript libraries even refuse to run in a browser unless the developer sets an option called `dangerouslyAllowBrowser`.

What a copied key costs depends on what it opens. An AI key runs requests billed to you, up to whatever limit you have set, and eats the rate limits your real users need. A database or cloud admin key opens your users' data.

## Secret keys and keys designed to be public

Not every key in an app is a mistake: some are made to be public, and the protection sits elsewhere.

| Key | In the app? | What a copy allows |
|---|---|---|
| OpenAI or Claude API key (`sk-ant-…` for Claude) | Never | Requests billed to you |
| Stripe secret key (`sk_live_…`) or restricted key (`rk_live_…`) | Never | Your Stripe account, within the key's permissions |
| Supabase secret key (`sb_secret_…`) or legacy `service_role` key | Never | Every table, with row level security bypassed |
| Cloud credentials (Google Cloud service account, AWS access key) | Never | Whatever their permissions allow |
| Stripe publishable key (`pk_live_…`) | Yes | Little on its own: it is made to be public |
| Firebase configuration (`apiKey`) | Yes | What your Security Rules allow |
| Supabase publishable key (`sb_publishable_…`) or legacy anon key | Yes | What row level security allows |
| Google Maps key | Yes, restricted | Maps requests billed to you, unless restricted |

A public key is only as safe as the rules behind it. Firebase's documentation says its keys identify your project and do not control access to your data; the Security Rules do, hence my tutorial on {{< a key="ai-app-data-leaks" >}}checking your Firebase and Supabase rules{{< /a >}}. Two more precautions:

- **Restrict each public key** to your app and to the APIs it needs. Android's documentation cites Google Maps, whose keys can be limited to your app's package name and signing key (on iOS, to its bundle identifier).
- **Never let a public key call a paid AI API.** Firebase warns against adding the Gemini Developer API to the allowlist of a publicly accessible key: a key made for a map would open your AI budget.

## What to do instead: a small function between your app and the API

The fix is a short piece of server code, often called a backend or a proxy. The app sends the user's request to your function, which checks who is asking, applies your limits, adds the key and calls the API. The key never leaves the server.

No need to rent a server: Firebase Cloud Functions, Supabase Edge Functions and Cloudflare Workers run code only when it is called and keep keys in a secret store, outside your code. Here is a minimal Firebase function in JavaScript that answers a question with Claude (the request is explained in my {{< a key="claude-api-tutorial" >}}Claude API tutorial{{< /a >}}):

```js
// functions/index.js: the app calls askAssistant, never Claude directly
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const claudeKey = defineSecret("ANTHROPIC_API_KEY");

exports.askAssistant = onCall(
  { secrets: [claudeKey], enforceAppCheck: true },
  async (request) => {
    // 1. Signed-in users of your app only
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Please sign in.");
    }
    // 2. Your limits, not the app's: short question, fixed model, capped answer
    const question = String(request.data?.question ?? "").slice(0, 2000);
    if (!question) {
      throw new HttpsError("invalid-argument", "The question is empty.");
    }
    // 3. The key is added here, on the server
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": claudeKey.value(),
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-5-5",
        max_tokens: 500,
        messages: [{ role: "user", content: question }],
      }),
    });
    if (!response.ok) {
      throw new HttpsError("unavailable", "The assistant is not available.");
    }
    const data = await response.json();
    const answer = data.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("");
    return { answer };
  }
);
```

Store the key once with the Firebase command line, then deploy:

```bash
firebase functions:secrets:set ANTHROPIC_API_KEY
firebase deploy --only functions
```

The app calls `askAssistant` through the Firebase SDK and never sees the key. With OpenAI, only the request inside the function changes, as my {{< a key="openai-api-tutorial" >}}OpenAI API tutorial{{< /a >}} shows.

For Gemini, a ready-made version exists: Firebase AI Logic is a managed proxy, so the Gemini key stays on Google's side, never in your app.

## Make the function hard to abuse

Once the key sits behind your function, the function is the door to protect:

1. **Signed-in users only.** The `request.auth` check above refuses anonymous calls.
2. **Requests from your genuine app.** Apple's App Attest and Google's Play Integrity let your server check that a request comes from an unmodified copy of your app on a genuine device; Firebase App Check wraps both, and `enforceAppCheck: true` refuses calls without a valid token. Google says to use Play Integrity as part of an anti-abuse strategy, "not as your sole anti-abuse mechanism", and Apple warns that not every device supports App Attest: plan for the check being unavailable.
3. **A daily limit per user.** Count requests per user in your database and refuse beyond your number: accounts are easy to create, and this stops one person from emptying your budget.
4. **A spend limit at the provider.** In the Claude Console, set it on the Billing page under **Spend limits**; OpenAI offers a monthly limit per project. Choose an amount you could lose without drama: it is roughly the most a leak can cost.

Use separate keys for development and production too. Anthropic lets you set an expiry date when you create a key and suggests rotating keys on a schedule, for example every 90 days.

{{< callout type="warning" >}}**Firebase AI Logic users:** as of 19 October 2026, Firebase says App Check enforcement will be required to use Firebase AI Logic from **2 November 2026**; requests without a valid App Check token will be blocked, including from app versions with no production attestation provider ([Firebase documentation](https://firebase.google.com/docs/ai-logic/app-check)). If you set it up before early July 2026, enforcement was not switched on for you: add App Check to the app and ship the update before that date.{{< /callout >}}

## Keep keys out of your code repository

Your function's code lives in a repository; the key must not. Keep it in the platform's secret store, and if you test with a local `.env` file, add it to `.gitignore` before your first commit. Deleting a key in a later commit leaves it in the history: a key that has been pushed is a leaked key.

GitHub adds two safety nets. **Push protection** blocks a push containing a recognised secret: it is on by default for public repositories, and for private ones it comes with the paid GitHub Secret Protection. GitHub also scans public repositories for Claude API keys, and Anthropic then deactivates the key automatically and emails you. Welcome, but you will need a new key anyway.

## If a key has already leaked: the first hour

Fix first, investigate second:

1. **Create a new key** and store it in your server's secrets, so your function keeps working.
2. **Revoke the old one.** In the Claude Console: **API keys**, the three-dot menu next to the key, **Delete API Key**. With OpenAI, Stripe or Supabase, delete or replace it in the dashboard's API keys section. Only revocation makes the copies worthless; an app update does not.
3. **Check usage and billing** since the key may have been exposed, and lower your spend limit meanwhile.
4. **Release an update** that goes through your function. Old installed versions still hold the dead key and their AI or payment features will stop, so show their users a message asking them to update.
5. **Ask whether personal data was reachable.** A leaked database or cloud key can mean a personal data breach. Under Article 33 of the GDPR and of the UK GDPR, the controller must notify the regulator (the ICO in the UK, the CNIL in France) without undue delay and, where feasible, within 72 hours of becoming aware of it, unless the breach is unlikely to result in a risk to people. My guide to {{< a key="gdpr-data-breach" >}}the first 72 hours after a data breach{{< /a >}} covers the steps. This is general information, not legal advice: if personal data may have been exposed, ask a lawyer or your DPO what you must report.

## Before you publish: check the built app, then the checklist

Check the file you are about to upload, not only your source code. An APK, AAB or IPA is a zip archive: extract a copy and search it for the first characters of each secret key you own.

```bash
unzip -o app-release.apk -d apk-check
grep -r -a -l "sk-ant-" apk-check
```

A match means a leak. No match proves nothing about a split or encoded key, so go through the list too:

- No secret key in the app's code, build variables or configuration files.
- Every call to a paid API goes through your function, which checks the user, the app and a daily limit.
- A spend limit with every API provider.
- Keys in the platform's secret store, none in a repository, push protection on.
- Separate keys for development and production, with a rotation date in your calendar.
- Public keys restricted to your app and its APIs, and your database rules tested.

For the other pre-launch checks, use my {{< a key="mobile-app-security-checklist" >}}mobile app security checklist{{< /a >}}. If your app takes payments or stores clients' data and nobody on your team has written server code, have a developer write or review the function: it is short, but it holds the keys.
