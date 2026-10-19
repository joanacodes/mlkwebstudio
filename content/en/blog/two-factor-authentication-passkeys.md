---
title: "Two-factor authentication and passkeys: switch them on everywhere in one afternoon"
seo_title: "How to set up two-factor authentication and passkeys"
description: "How to set up two-factor authentication and passkeys on your email, domain, bank and payment accounts in one afternoon, then enforce 2FA for the whole team."
slug: "set-up-two-factor-authentication"
translationKey: "two-factor-authentication-passkeys"
date: 2026-10-18T21:45:00+02:00
lastmod: 2026-10-18T21:45:00+02:00
category: "cybersecurity"
article_type: "tutorial"
keywords: ["how to set up two-factor authentication", "passkeys", "2FA for small business", "enforce 2-step verification Google Workspace", "Microsoft 365 security defaults", "authenticator app vs SMS"]
summary: "Turn on two-factor authentication in each account's security settings, starting with email, then your domain registrar, bank, website, payment, accounting, storage and social accounts. Use a passkey or a security key wherever a service offers one, an authenticator app where it does not, and SMS only when nothing else exists. Then enforce it for the whole team in Google Workspace or Microsoft 365, and give every important account a second method and backup codes."
cover: "two-factor-authentication-passkeys"
cover_alt: "The article title in white on a ribbed-glass panel over a photo, with a padlock"
related: ["password-manager-teams", "secure-google-workspace-microsoft-365", "cybersecurity-guide", "recover-domain-name", "regain-website-access"]
services: ["rescue"]
faq:
  - q: "What is the difference between 2FA, 2-step verification and MFA?"
    a: "For a small team, none that matters: all three mean a second proof after the password. Google says 2-Step Verification, Microsoft 365 says multifactor authentication (MFA) and the NCSC says 2-step verification (2SV)."
  - q: "Can I use the same passkey on my phone and my laptop?"
    a: "Yes, if it is synced: a passkey saved in iCloud Keychain, Google Password Manager or a password manager such as Bitwarden, 1Password or Proton Pass appears on your other devices signed in to the same account. A passkey stored on a hardware security key stays on that key, so register a spare."
  - q: "Do passkeys replace passwords completely?"
    a: "Not yet on most accounts: the password usually stays as a fallback, so keep it long, unique and in your password manager. Some services let you remove the password once a passkey is set up; only do it when a second passkey or a security key is registered too."
  - q: "Does two-factor authentication cost anything?"
    a: "No. Google, Microsoft (with security defaults), registrars, banks, Stripe, PayPal and the main website builders include it, and Google Authenticator and Microsoft Authenticator are free apps. The only optional cost is a hardware security key, which you buy once."
  - q: "What if a service only offers SMS codes?"
    a: "Turn it on anyway: a code by text message still stops someone who only has your password. Use a number the business controls, remember that a criminal can talk a mobile operator into moving a number to a new SIM card (a SIM swap), and check now and then whether the service has added an app or passkey option."
---

Two-factor authentication (2FA) means an account asks for a second proof after your password: a code from an app, a tap on your phone, a security key or a passkey. Someone who has stolen or guessed your password still cannot get in. This guide shows how to set up two-factor authentication on every account that matters in one afternoon, in the order that protects you most, then how to make it compulsory for your whole team.

Where a service offers passkeys, make one your main way in: they are stronger than codes and quicker to use. I will show you both.

Some of my clients called me in an emergency after their website had been hacked. Hacks have many possible causes, so I won't claim a second factor would have prevented every one of them. But a stolen password is one of the doors it closes, and closing it costs you an afternoon.

This tutorial is one chapter of my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}}. It works best with a {{< a key="password-manager-teams" >}}password manager for the whole team{{< /a >}}, because that is where your backup codes will go.

## Which 2FA method to choose: passkeys first, SMS last

Second factors are not equal. In 2026 the UK's National Cyber Security Centre (NCSC) changed its advice: it now [recommends passkeys wherever a service supports them](https://www.ncsc.gov.uk/news/ncsc-leave-passwords-in-the-past-passkeys-are-the-future), and 2-step verification only where it does not. Its technical assessment found that codes sent by SMS or email, codes from an app and push approvals can all be phished, because a fake login page can ask you for the code and use it straight away. Passkeys and security keys resist this: they only work on the real website.

| Method | How it works | Resists phishing | Use it for |
|---|---|---|---|
| Passkey | Your device or password manager signs you in after your fingerprint, face or PIN | Yes | Every service that offers it |
| Security key | A small USB or NFC key you touch to confirm (FIDO2 standard) | Yes | The accounts that control everything: email admin, domain registrar |
| Authenticator app | A six-digit code that changes every 30 seconds | No | Services without passkeys |
| Push approval | A prompt on your phone; Microsoft Authenticator makes you type the number shown on the sign-in screen | No, but harder to trick | Microsoft 365, Google prompts |
| SMS or email code | A code sent to your number or your inbox | No, and texts can be intercepted | Only when nothing else exists |

### What a passkey is, in plain words

A passkey replaces your password with a pair of cryptographic keys. The website keeps the public half; the private half stays with you, on your device or in your password manager, and is never sent to the website. When you sign in, you confirm with your fingerprint, your face or your device PIN, and there is nothing to type that a fake page could capture.

Google, Microsoft and Apple accounts support passkeys, and so do the team password managers Bitwarden, 1Password and Proton Pass. On a Google account, a passkey replaces the second step on its own, because it already proves you hold the device.

One caveat from the NCSC: a passkey synced through your Apple, Google or password manager account is only as safe as that account. Protect that account first, with two methods.

## How to set up two-factor authentication in the right order

Start with the accounts that can reset or take over the others. Every "forgot your password" link lands in your inbox, so email comes first.

| Order | Account | Why at this point |
|---|---|---|
| 1 | Email (Google or Microsoft) | Password resets for everything else arrive here |
| 2 | Domain registrar | Whoever controls the domain controls your website and your email addresses |
| 3 | Bank | Money leaves from here |
| 4 | Website builder or hosting | An intruder can deface the site or hide malicious code in it |
| 5 | Payments (Stripe, PayPal) | Payouts can be redirected |
| 6 | Accounting and invoicing | Client data and bank details |
| 7 | Cloud storage | Contracts, ID documents, quotes |
| 8 | Social media and ad accounts | Your reputation and your ad budget |
| 9 | The password manager | It holds the codes for all the rest |

The password manager comes last for one reason only: you keep it open all afternoon to save codes. If it has no second factor yet, add one at the end, before you close it.

### Before you start

- Your phone, with an authenticator app (Google Authenticator or Microsoft Authenticator) or your password manager's code generator.
- Your password manager, with a folder or shared vault for backup codes, and the list above with the person who owns each account.
- Optional: two security keys for your main administrator account (super administrator in Google Workspace, Global Administrator in Microsoft 365), one to carry and a spare kept somewhere else.

## Step 1: turn on 2-Step Verification on your Google account

Google's name for 2FA is 2-Step Verification. On a personal account, or on your own Google Workspace account:

1. Open your Google Account and select **Security & sign-in**.
2. Under **How you sign in to Google**, select **Turn on 2-Step Verification** and follow the instructions.
3. Add a second step on your phone. Google recommends its prompts over typed codes, because tapping a prompt is easier than typing a code. Add an authenticator app as well.
4. Download or print your backup codes: ten 8-digit codes, each of which works once. Save them in your password manager.
5. If you want a phone number as a backup, add it now: Google says validating a number for this can take up to seven days.

{{< screenshot id="two-factor-authentication-passkeys-01" alt="Google Account Security & sign-in page, with Turn on 2-Step Verification under How you sign in to Google" >}}

On a work account where the option is missing or greyed out, your Workspace administrator controls it (Step 5 shows the admin side). [Google's help page](https://support.google.com/accounts/answer/185839) has the current steps for each device. For a personal Microsoft account (Outlook.com, Hotmail), the option is in the **Security** section of account.microsoft.com.

## Step 2: pair an authenticator app on your other accounts

An authenticator app covers the services without passkeys. Pairing works the same way almost everywhere:

1. Open the service's security settings and choose the authenticator app option (it may be called authentication app, TOTP or 2-step verification).
2. A QR code appears. In your app, add an account and scan it.
3. Type the six-digit code the app shows, to prove the pairing worked.
4. Save the backup codes the service gives you, straight into your password manager.
5. Rename the entry in the app so you can tell accounts apart: "Stripe, company account" is clearer than an email address.

{{< screenshot id="two-factor-authentication-passkeys-02" alt="An authenticator app adding an account by scanning the QR code shown on a service's two-factor settings page" >}}

Microsoft 365 work accounts are the exception: once security defaults are on (Step 5), everyone registers Microsoft Authenticator with notifications. After that, it or another authenticator app can also provide codes.

## Step 3: create a passkey and test it

Start with your Google or Microsoft account, then look for the word passkey in the sign-in or security settings of every other service on your list.

1. In the sign-in settings, choose to create a passkey.
2. Your device asks where to save it: on this device, in your Apple or Google account, or in your password manager. For a work account, pick a place that survives a lost phone: a synced account or your password manager.
3. Confirm with your fingerprint, your face or your device PIN.
4. Sign out, then sign back in with the passkey to check it works before you rely on it.

{{< screenshot id="two-factor-authentication-passkeys-03" alt="A passkey creation prompt asking where to save the passkey and to confirm with a fingerprint, face or device PIN" >}}

{{< callout type="tip" >}}Give every important account **two ways in**: a passkey and an authenticator app, or two security keys. A passkey saved on a single phone disappears with that phone; a spare method turns a lost device into a chore instead of a lockout.{{< /callout >}}

## Step 4: work through the rest of the list

- **Domain registrar.** The setting is in your account's security settings, not in the domain's DNS. While you are there, check that the domain lock and auto-renew are on, and that the account belongs to the business, with an email address the business controls: {{< a key="recover-domain-name" >}}getting a domain back from a former web designer{{< /a >}} takes far longer than protecting it today.
- **Bank.** Your bank already makes you confirm sign-ins and payments, usually in its app. Check which phone receives those approvals (yours, not a former employee's) and, if your bank offers it, require a second person to approve new payees. It also helps against {{< a key="invoice-fraud-bank-details" >}}fake "new bank details" emails{{< /a >}}.
- **Website.** On Squarespace (the builder I give clients who edit their own site), Wix and WordPress.com, two-factor authentication is a setting of each person's own account, so every contributor turns it on for their own login. A self-hosted WordPress site needs a plugin, such as Two Factor from the WordPress.org directory. Give designers and freelancers their own login rather than yours: {{< a key="regain-website-access" >}}regaining access when a former provider holds the keys{{< /a >}} is the long version of why.
- **Payments.** In Stripe and PayPal, pick an authenticator app or a passkey over SMS where the security settings offer it, and give each colleague their own user instead of the owner's login.
- **Accounting, invoicing and cloud storage.** Xero, QuickBooks, FreeAgent, Dropbox, Box and the rest hold client data and bank details: look in your user profile or the account's security settings.
- **Social media and ad accounts.** Facebook, Instagram, LinkedIn, TikTok and your ad accounts. In Meta Business Suite, **Settings > Security Centre** lets an admin require two-factor authentication for everyone who has access to the business portfolio. Google Ads uses your Google account, so Step 1 already covers it.
- **The password manager.** Turn on its second factor, then keep its recovery kit or recovery code on paper, somewhere safe, never inside the vault it opens.

{{< callout type="note" >}}Shared logins are the weak spot. If the company Instagram or the registrar sends its codes to one employee's personal phone, move them to a company number or to an authenticator entry in the shared vault now, not on the day that person leaves.{{< /callout >}}

## Step 5: enforce two-factor authentication for the whole team

Switching it on for yourself protects you. Enforcing it protects the colleague who never gets round to it.

### Google Workspace

You need a super administrator account. Google already enforces 2-Step Verification on administrator accounts itself, and applies it immediately when someone is made an admin.

1. Give the team a date, and ask everyone to turn on 2-Step Verification on their own account (Step 1).
2. In the Admin console, go to **Menu > Security > Authentication > 2-step verification**, pick the whole organisation or one organisational unit, and allow users to turn it on.
3. Check who has enrolled in the Security report among the user reports.
4. Switch **Enforcement** on, either straight away or from a date. Google warns that a date can take 24 to 48 hours to take effect, so choose immediate enforcement if the timing matters.
5. Set a new user enrolment period (one day to six months), during which new starters can sign in with just their password.
6. Under **Methods**, choose **Any except verification codes via text, phone call** once everyone has an app, a passkey or a security key.
7. Save. [Google's deployment guide](https://knowledge.workspace.google.com/admin/security/deploy-2-step-verification) covers the other options.

{{< screenshot id="two-factor-authentication-passkeys-04" alt="Google Admin console 2-step verification settings, with enforcement, the new user enrolment period and the allowed methods" >}}

### Microsoft 365

Security defaults are free and switch on multifactor authentication for the whole tenant in one go. They suit a team that does not use Conditional Access.

1. Tell the team the day and time, and check that everyone has Microsoft Authenticator on their phone.
2. Sign in to the Microsoft Entra admin centre (entra.microsoft.com) with a Global Administrator account and go to **Entra ID > Overview > Properties**.
3. Select **Manage security defaults**, set them to **Enabled** and save.
4. Microsoft recommends revoking existing sessions afterwards, so that everyone signs in again with the second factor.

{{< callout type="warning" >}}**There is no grace period any more.** Since 29 July 2024, Microsoft no longer gives users 14 days to register: once security defaults are on, each person must set up Microsoft Authenticator at their next sign-in. Switch them on at a time when you can answer questions.{{< /callout >}}

Microsoft's [security defaults page](https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults) lists exactly what they switch on. With Microsoft 365 Business Premium, Conditional Access (part of its Microsoft Entra ID P1 licence) allows finer rules, such as phishing-resistant methods for admins, once you have switched security defaults off. My guide to the {{< a key="secure-google-workspace-microsoft-365" >}}Google Workspace and Microsoft 365 admin settings{{< /a >}} covers the rest of the console.

## Backup codes, lost phones and leavers

### Where to keep backup codes

Keep them in the password manager, in a vault that you and one other trusted person can open, never in a desktop file or your inbox; only the password manager's own recovery kit stays on paper. When you generate a new set of Google backup codes, the old set stops working, so replace the copy in the vault straight away.

### When a phone is lost or replaced

1. Sign in with your second method or a backup code.
2. In the account's security settings, remove the lost phone and sign out any session you do not recognise.
3. Pair the authenticator app on the new phone, and turn on its backup or transfer option if it has one.
4. For a locked-out colleague, a Google Workspace admin can generate backup codes for them, and a Microsoft 365 admin can make them register their methods again.

### When someone leaves

Remove their access, their registered devices and their security keys on their last day. The {{< a key="offboarding-checklist" >}}offboarding checklist{{< /a >}} lists every access to close.

## Your one-afternoon checklist

- Email: 2-Step Verification on, a passkey, an authenticator app and backup codes saved.
- Registrar and bank: second factor on, domain lock and auto-renew checked, bank approvals going to a phone the business controls.
- Everything else on the list: second factor on, one login per person, the password manager's recovery kit on paper.
- Team: enforcement on in Google Workspace, or security defaults on in Microsoft 365, and SMS ruled out once everyone has an app or a passkey.
- Every important account: two methods registered, backup codes in the shared vault.
- In six months: check which services have added passkeys, and switch to them.

If you have already lost access to an account, or a former provider still holds the phone that receives the codes, an afternoon will not fix it: that is a rescue job, and I answer those the same day or within 24 hours.
