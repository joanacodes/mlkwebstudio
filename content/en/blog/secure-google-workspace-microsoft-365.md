---
title: "Secure Google Workspace and Microsoft 365: the admin settings that matter"
seo_title: "Google Workspace security settings (and Microsoft 365)"
description: "The Google Workspace security settings to change first, and their Microsoft 365 equivalents: admin accounts, phishing filters, forwarding, sharing and alerts."
slug: "google-workspace-security-settings"
translationKey: "secure-google-workspace-microsoft-365"
date: 2026-10-18T21:57:00+02:00
lastmod: 2026-10-18T21:57:00+02:00
category: "cybersecurity"
article_type: "tutorial"
keywords: ["Google Workspace security settings", "Microsoft 365 security settings", "Google Workspace admin console security", "Microsoft 365 security defaults", "Defender for Office 365 preset security policies", "secure Google Workspace for small business"]
summary: "Start with the accounts that control everything: a separate admin account with two security keys, two-step verification enforced for everyone and as few super or global administrators as possible. Then turn on Gmail's Safety settings or Microsoft's Standard preset security policy, switch off automatic forwarding to outside addresses, tighten file sharing and review connected apps. Almost all of it works on the cheapest business plans and fits in an afternoon."
cover: "secure-google-workspace-microsoft-365"
cover_alt: "The article title in white on a ribbed-glass panel over a photo, with a browser window showing a page layout"
related: ["two-factor-authentication-passkeys", "spf-dkim-dmarc-setup", "offboarding-checklist", "backups-3-2-1", "cybersecurity-guide"]
services: ["rescue"]
faq:
  - q: "What is the difference between a super admin and a Global Administrator?"
    a: "None that matters day to day: Google calls its all-powerful admin role super admin, Microsoft calls it Global Administrator. Both can change every setting and reset other admins' passwords, so keep as few as you can and protect them with security keys."
  - q: "Is Google Workspace more secure than Microsoft 365?"
    a: "Neither is set up for your team out of the box, and both are secure enough once the settings in this guide are on. The practical difference is where the settings live: Google keeps most of them in one Admin console, while Microsoft spreads them across several admin centres, so it is easier to overlook one."
  - q: "Do Google Workspace and Microsoft 365 back up my data?"
    a: "Not the way a backup should. Google Vault (Business Plus and above) keeps and searches data for retention and legal holds, but Google's own FAQ says it has no automated recovery tools; an admin can restore deleted Drive files for 25 days after they leave the bin. Microsoft sells Microsoft 365 Backup separately. Plan a backup of your own."
  - q: "Can I give my web designer or IT provider admin access?"
    a: "Yes, through their own named account with the narrowest role that does the job, never by sharing your password, and remove it when the work is finished. A helpdesk-type role is enough to reset passwords; very few jobs need super admin or Global Administrator rights."
---

Google Workspace and Microsoft 365 come with strong security features, but a new account is set up for convenience, not for your team's risks. This tutorial lists the Google Workspace security settings that matter most for a small team, then the Microsoft 365 equivalents, with the menu path for each as of 19 October 2026.

You do not need an IT department for this, or me. An afternoon with this list closes the usual ways in: a stolen password, a fake sign-in page, a forwarding rule nobody noticed, a file that anyone with the link can open.

It is one chapter of my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}}. If you have not picked a suite yet, my guide to getting a {{< a key="professional-email-address" >}}professional email address{{< /a >}} compares the options first.

## Before you start: admin rights, two keys and a quiet afternoon

- **Full admin rights**: super admin in Google Workspace, Global Administrator in Microsoft 365. Whoever signed up for the subscription has them.
- **Two hardware security keys per admin**: small USB or NFC keys (FIDO2) that you touch to confirm a sign-in, one on your keyring and the spare elsewhere.
- **A message to the team**: enforcing two-step verification or blocking old mail apps changes how everyone signs in, so warn people the day before.

Menus move. If a label below has changed, the search bar at the top of each console finds the setting by name.

## Which plan gives you what

| Plan | Security settings you get |
|---|---|
| Google Workspace Business Starter | 2-Step Verification enforcement, security keys, Gmail Safety settings, Drive sharing and app controls, alert centre, fundamental endpoint management |
| Google Workspace Business Standard | The same, plus a sandbox that runs suspicious Gmail attachments in isolation |
| Google Workspace Business Plus | Plus Vault and advanced endpoint management (strong passcodes, device security policies, remote wipe) |
| Microsoft 365 Business Basic and Standard | Security defaults, built-in protection against malware, spam and spoofing, preset security policies, Basic Mobility and Security |
| Microsoft 365 Business Premium | Plus Conditional Access (Microsoft Entra ID P1), Defender for Office 365 Plan 1 (Safe Links, Safe Attachments, impersonation protection), Intune Plan 1, Defender for Business |

Every step below works on Business Starter or Microsoft 365 Business Basic unless I say otherwise, so secure the plan you have before paying for the next one.

One gap on Google's side: the security health page, which compares your settings with Google's recommendations, is listed in Google's help for Enterprise, Education and some Frontline editions only, at the time of writing. On a Business plan, this list is your health check.

## Google Workspace security settings, step by step

All paths start in the Admin console at admin.google.com, signed in as a super admin. Google's own [security checklist for teams of 1 to 100 users](https://knowledge.workspace.google.com/admin/security/security-checklist-for-small-businesses-1-100-users) goes further once these are done.

### 1. A separate super admin account, protected by two security keys

A super admin can change every setting and reset every password, including other admins'. Google's [best practices for administrator accounts](https://knowledge.workspace.google.com/admin/users/security-best-practices-for-administrator-accounts) come down to four habits:

1. Two accounts per super admin: one for admin work, one for daily email, which is where phishing lands.
2. More than one super admin, each a different person, so that one lost phone does not lock the company out.
3. Sign in as super admin only for admin tasks, then sign out.
4. Two security keys on each super admin account, with the spare kept elsewhere.

A more limited admin role is enough for password resets. Guard your domain registrar's login too: Google switches super admin account recovery off by default for new customers, and its support team will ask you to prove you control the domain's DNS.

### 2. Enforce 2-Step Verification for everyone

Google already enforces it on admin accounts. For everyone else, go to **Security > Authentication > 2-step verification**, let users turn it on, give them a deadline, then switch on enforcement. Once everyone has an app, a passkey or a security key, choose **Any except verification codes via text, phone call** as the allowed methods. My {{< a key="two-factor-authentication-passkeys" >}}two-factor authentication tutorial{{< /a >}} covers the rollout and lost phones.

### 3. Turn on Gmail's Safety settings

Go to **Apps > Google Workspace > Gmail > Safety**. Three sections matter:

- **Attachments**: protection against encrypted attachments and attachments with scripts from untrusted senders, and against unusual attachment types.
- **Links and external images**: checks links hidden behind short URLs, scans linked images and warns before someone clicks a link to an untrusted domain.
- **Spoofing and authentication**: catches domain names that look like yours, a colleague's name used from an outside address (a classic opening for a fake payment request), mail pretending to come from your own domain, and unauthenticated mail.

In each section, tick **Apply future recommended settings automatically**, so new protections switch on without you. For each protection, pick the action: a warning in the inbox, the spam folder, or quarantine, which only makes sense if an admin will review the messages.

{{< screenshot id="secure-google-workspace-microsoft-365-01" alt="Google Admin console, Gmail Safety page with the Attachments, Links and external images, and Spoofing and authentication sections" >}}

### 4. Switch off automatic forwarding and check DKIM

A criminal who gets into a mailbox often adds a rule that quietly copies every email to them; the NCSC puts checking for such rules among the first steps after a hack, and Google's recommended Gmail settings switch automatic forwarding off. In **Apps > Google Workspace > Gmail**, find **Automatic forwarding** with the search bar and turn it off, unless someone truly needs it.

While you are there, **Authenticate email** shows whether DKIM signs your mail. If it does not, generate the key there and publish it in your DNS: my {{< a key="spf-dkim-dmarc-setup" >}}SPF, DKIM and DMARC tutorial{{< /a >}} has the records and the checks.

### 5. Limit file sharing outside the company

Go to **Apps > Google Workspace > Drive and Docs > Sharing settings > Sharing options**. Sharing outside your organisation can be **Off**, **On** or **Allowlisted domains** (only the domains you list, such as your accountant's firm). Most teams that work with clients need On, with the box that starts with **Warn when files owned by users or shared drives** ticked, as Google's checklist recommends.

For larger organisations, Google also recommends that new files are restricted by default, so only the people named on a file can open it. I would do the same in any team that holds client data: sharing becomes a decision, not an accident. Trust rules, if your plan has them and you switch them on, replace these settings.

{{< screenshot id="secure-google-workspace-microsoft-365-02" alt="Google Admin console, Drive and Docs sharing options with sharing outside the organisation set to On and the warning box ticked" >}}

### 6. Review the apps connected to your data

Go to **Security > Access and data control > API controls > Manage third-party app access**. The list shows the apps your users have connected with their Google account: a scheduling tool, an email warm-up service, an add-on someone tried once. Set the ones you rely on to **Trusted** and block anything nobody recognises. Trusting an app here is also the clean way to connect a tool, such as a cold email platform, for the whole team.

{{< screenshot id="secure-google-workspace-microsoft-365-03" alt="Google Admin console, API controls, Manage third-party app access list with apps set to Trusted, Limited or Blocked" >}}

### 7. Watch the alert centre, and know what your plan does for devices

**Security > Alert centre** collects Google's warnings, such as suspicious sign-ins, leaked passwords and phishing reported by your users. Check it every week, or turn on email notifications for the alerts you care about.

Phones and laptops are managed under **Devices**. Business Starter and Standard include fundamental endpoint management; strong passcode enforcement, mobile security policies and remote device wipe need Business Plus. On any plan, updates, disk encryption and a screen lock on the devices themselves matter as much as the console.

## Microsoft 365 security settings, step by step

Microsoft spreads these settings across the Microsoft 365 admin centre, the Microsoft Entra admin centre, the Microsoft Defender portal (security.microsoft.com), the SharePoint admin centre and the Microsoft Purview portal. I used to run my own email on Microsoft and found it a pain, so here is the short route; Microsoft's [security overview for Microsoft 365 for business](https://learn.microsoft.com/en-us/microsoft-365/admin/security-and-compliance/m365b-security-overview) maps the rest.

### 1. Separate admin accounts, and as few Global Administrators as possible

Whoever bought the subscription is a Global Administrator. Microsoft's guidance:

- **Fewer than five Global Administrators**, each with a normal account for daily work. Admin-only accounts don't need a Microsoft 365 licence.
- **At least two emergency access accounts** that belong to nobody in particular: cloud-only (ending in .onmicrosoft.com), protected by a passkey on a security key that differs from your usual sign-in method, and never used day to day.
- **The narrowest role for everyone else**: User Administrator to create accounts, Helpdesk or Password Administrator to reset passwords, Billing Administrator for invoices. Assign them in the Microsoft 365 admin centre under **Roles > Role assignments**.

On every plan, admins can sign in with a passkey or Microsoft Authenticator instead of a password; Business Premium can make it compulsory.

{{< screenshot id="secure-google-workspace-microsoft-365-04" alt="Microsoft 365 admin centre, Role assignments page listing roles such as Global Administrator, User Administrator and Helpdesk Administrator" >}}

### 2. Multifactor authentication for everyone

Microsoft 365 organisations created after October 2019 have security defaults on, unless someone switched them off. In the Microsoft Entra admin centre, **Entra ID > Overview > Properties > Manage security defaults** should say **Enabled**. They make everyone register Microsoft Authenticator, whose notifications ask for the number shown on the sign-in screen, and they block legacy authentication (step 3).

{{< screenshot id="secure-google-workspace-microsoft-365-05" alt="Microsoft Entra admin centre, Properties tab of the Overview page with the Security defaults panel set to Enabled" >}}

On Business Premium, Conditional Access replaces security defaults with rules you choose. Turn security defaults off only at that point, as Microsoft advises, then create the policies straight away from **Entra ID > Conditional Access > Create new policy from templates**. The Secure foundation templates include **Require multifactor authentication for admins**, **Require multifactor authentication for all users** and **Block legacy authentication**. Exclude your emergency access accounts from policies that block sign-in, and test stricter rules later in **Report-only** mode.

{{< screenshot id="secure-google-workspace-microsoft-365-06" alt="Microsoft Entra admin centre, Conditional Access policy templates in the Secure foundation category, including Block legacy authentication" >}}

### 3. Block legacy authentication, and find what still uses it

Legacy authentication covers older ways of signing in, such as mail apps that use IMAP, POP3 or SMTP with just a password. They can't ask for a second factor, so a stolen password still works through them. Security defaults and the Block legacy authentication template both shut them out.

Before you block, open **Entra ID > Monitoring & health > Sign-in logs**, add the **Client App** column and filter on the legacy protocols. The usual suspects: a copier that emails scans, an old mail app on a phone, a website form that sends through a mailbox. Move them to a modern sign-in or a dedicated sending service first.

### 4. Authenticate your domains, then turn on the Standard preset policy

Microsoft's own order for email protection starts with SPF, DKIM and DMARC for every domain in your tenant, including domains you never send from; the SPF, DKIM and DMARC tutorial above shows Microsoft's two DKIM records.

Then, in the Defender portal, go to **Email & collaboration > Policies & rules > Threat policies > Preset security policies** and turn on **Standard protection** for all recipients, as Microsoft recommends. Strict is the tighter profile, for the people attackers target most, such as whoever approves payments. On Business Premium, the presets also bring Defender for Office 365: Safe Links checks links when they are clicked, Safe Attachments opens attachments in a sandbox before delivery, and impersonation protection flags mail pretending to come from a colleague or from your domain.

{{< screenshot id="secure-google-workspace-microsoft-365-07" alt="Microsoft Defender portal, Preset security policies page with Standard protection turned on" >}}

### 5. Block automatic forwarding to outside addresses

In the Defender portal, go to **Email & collaboration > Policies & rules > Threat policies > Anti-spam**, open **Anti-spam outbound policy (Default)** and edit its protection settings. Under **Forwarding rules**, set **Automatic forwarding rules** to **Off - Forwarding is disabled**.

The default, **Automatic - System-controlled**, has meant Off for new organisations since 2021 but can still mean On in older ones, which is why Microsoft advises choosing explicitly. Off stops inbox rules and mailbox forwarding to outside addresses (the sender gets a bounce with error 5.7.520) and leaves forwarding between colleagues alone. A mailbox that genuinely needs to forward outside can get its own outbound policy; [Microsoft's page on external forwarding](https://learn.microsoft.com/en-us/defender-office-365/outbound-spam-policies-external-email-forwarding) explains the other controls involved.

{{< screenshot id="secure-google-workspace-microsoft-365-08" alt="Microsoft Defender portal, outbound anti-spam policy settings with Automatic forwarding rules set to Off - Forwarding is disabled" >}}

### 6. Tighten SharePoint and OneDrive sharing

Out of the box, SharePoint and OneDrive sharing is set to the most permissive level. In the SharePoint admin centre, go to **Policies > Sharing**. If nobody shares files outside the company, Microsoft recommends the least permissive level for both. If you do share with clients, at least set the default link type to **Specific people** and the default permission to **View**, so that a forwarded link doesn't open the file to whoever receives it.

### 7. Alerts, Secure Score, the audit log and devices

- **Alert policy**, in the Defender portal under **Email & collaboration > Policies & rules**, holds your plan's default alert policies: open the ones you care about and check who receives the emails.
- **Microsoft Secure Score**, also in the Defender portal, lists improvement actions and the points each is worth: a good to-do list after this one.
- **Audit**, in the Microsoft Purview portal, records who did what. Check that it is recording now, not on the day you need it.
- **Devices**: Basic Mobility and Security, in every Microsoft 365 for business plan, enrols phones and can wipe them; Business Premium adds Intune Plan 1 and Defender for Business for computers too.

## Mistakes that lock people out, or let attackers stay

- **Enforcing without warning.** Microsoft no longer gives users 14 days to register once security defaults are on, and once Google's enforcement starts, anyone not enrolled is stuck at sign-in.
- **Switching off security defaults to fix one problem.** It removes multifactor authentication for everyone. Fix the copier or the app instead.
- **Forgetting leavers.** A former colleague's account, devices and connected apps stay open until you close them; my {{< a key="offboarding-checklist" >}}offboarding checklist{{< /a >}} lists them all.
- **Treating the suite as a backup.** These settings protect access, not data: a deleted folder, or files encrypted by ransomware and synced to the cloud, can still cost you work. My {{< a key="backups-3-2-1" >}}3-2-1 backup guide{{< /a >}} covers both suites.

## Your checklist, and when to hand it over

- **Google Workspace**: two super admins with separate admin accounts and two keys each; 2-Step Verification enforced; Gmail Safety on; automatic forwarding off; DKIM on; external sharing warning on; apps reviewed; alert emails on.
- **Microsoft 365**: fewer than five Global Administrators and two emergency accounts; security defaults or Conditional Access, with legacy authentication blocked; SPF, DKIM, DMARC and the Standard preset; forwarding Off; sharing links set to Specific people and View; alerts and audit checked.
- **Every month**: review the list of admins and the connected apps.

If you find a forwarding rule nobody set up, an app nobody recognises or an alert about a sign-in you can't explain, stop tidying settings and follow my {{< a key="incident-response-first-hour" >}}first-hour plan{{< /a >}}. If personal data was exposed, Article 33 of the GDPR (and of the UK GDPR) may require you to tell the regulator within 72 hours; that part is a legal question, and this article is not legal advice. An intrusion that has spread beyond one mailbox calls for an incident response company assured by the NCSC, or the one your insurer names. If you have lost the admin account itself, that is an IT rescue: I answer those the same day or within 24 hours, and I will tell you if your case needs someone else.
