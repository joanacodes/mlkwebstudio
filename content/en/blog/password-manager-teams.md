---
title: "Password managers for teams: Bitwarden vs 1Password vs Proton Pass"
seo_title: "Best password manager for small business: 2026 comparison"
description: "Best password manager for small business? Bitwarden, 1Password and Proton Pass compared: October 2026 prices, admin recovery, offboarding and who each suits."
slug: "best-password-manager-small-business"
translationKey: "password-manager-teams"
date: 2026-10-18T21:42:00+02:00
lastmod: 2026-10-18T21:42:00+02:00
category: "cybersecurity"
article_type: "comparison"
keywords: ["best password manager for small business", "password manager for teams", "business password manager", "Bitwarden vs 1Password", "1Password vs Proton Pass", "Bitwarden Teams price"]
summary: "1Password's Teams Starter Pack suits a team of up to ten that wants simple administration: one flat price, and an admin can recover a colleague who is locked out. Bitwarden Teams is the open-source choice, with event logs, at $4 (about £3) per user per month. Proton Pass Essentials, from a Swiss company, costs the least at $1.99 (about £1.50) per user per month, but has no activity logs and no single sign-on."
cover: "password-manager-teams"
cover_alt: "The title Password managers for teams: Bitwarden vs 1Password vs Proton Pass in white on a ribbed-glass panel over a photo, with two panels side by side and an orange vs badge"
related: ["two-factor-authentication-passkeys", "offboarding-checklist", "secure-google-workspace-microsoft-365", "cybersecurity-guide", "small-business-tools-guide"]
services: ["rescue"]
faq:
  - q: "Can the password manager company see our passwords?"
    a: "No. Bitwarden, 1Password and Proton Pass encrypt your vault on your own devices before it is synced, so the company stores data it cannot read. The flip side: it cannot send you a forgotten password either, which is why recovery has to be set up in advance."
  - q: "Should we keep two-factor codes in the same password manager?"
    a: "It is convenient, and safer than codes sent by SMS, but it puts both factors in one place. For the accounts that would hurt most if someone took them over (the email admin account, the bank, the domain registrar), keep the codes in a separate authenticator app, or use a passkey or a security key."
  - q: "Can we switch password managers later?"
    a: "Yes. Export the vault from the old tool, usually as a CSV file, import it into the new one, then delete the export straight away, because it is not encrypted. Passkeys may not move with the rest: check the new tool's import options and be ready to create new ones."
  - q: "Do we need single sign-on (SSO) for our password manager?"
    a: "Only if your team already signs in to its work apps through an identity provider such as Microsoft Entra ID or Okta, and you add or remove people often. SSO needs Bitwarden Enterprise, 1Password Business or Proton Pass Professional; most small teams do well with a strong master password and two-factor authentication for everyone."
  - q: "How many admins should a team password manager have?"
    a: "Two at least. With a single admin, the day that person leaves, falls ill or loses their phone, nobody can recover a locked-out colleague or manage the account. Give the owner or admin role to a second person you trust from day one."
---

The best password manager for a small team is the one everybody actually uses, with an admin who can let a locked-out colleague back in and cut someone's access the day they leave. Bitwarden, 1Password and Proton Pass all do the basics well: they store passwords and passkeys, fill them in on every device and let you share a login without pasting it into an email or a chat.

The differences are in the admin tools, the price per person and the company behind each one. This comparison rests on what each vendor publishes (plans, prices, admin features and security design) at the time of writing, in October 2026, rather than on a lab test.

If you are building your security from scratch, my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}} puts the password manager in context with backups, devices and two-factor authentication.

## Bitwarden vs 1Password vs Proton Pass at a glance (October 2026)

| | Bitwarden | 1Password | Proton Pass |
|---|---|---|---|
| Company based in | United States | Canada | Switzerland |
| Source code | Open source | Closed, with a published security design | Open-source apps |
| Team plans | Teams, Enterprise | Teams Starter Pack, Business | Pass Essentials, Pass Professional |
| Cheapest team plan | $4 (about £3) per user per month | $24.95 (about £19) a month for up to 10 people | $1.99 (about £1.50) per user per month, 3 users minimum |
| Shared logins sit in | Collections | Shared vaults | Shared vaults |
| Admin recovery of a locked-out member | Documented as an Enterprise policy | Yes, on both plans | Yes, for members who are not private |
| Activity logs | Event logs, from Teams | Business | Pass Professional |
| Single sign-on (SSO) | Enterprise | Business | Pass Professional |
| Passkeys | Yes | Yes | Yes |
| Password health and breach checks | Vault health reports | Watchtower | Pass Monitor |
| Where your account lives | US or EU cloud, or self-hosted on Enterprise | US, Canadian or EU region | With a Swiss company, under Swiss law |

The prices I could check are published in US dollars and billed annually; the pound figures are approximate conversions (about 75p to the dollar in early October 2026).

## What a team needs that a personal password manager doesn't do

On your own, the manager built into your phone or browser is fine. Apple's Passwords app and Google Password Manager create strong passwords, sync them and fill them in, and both can share logins with a few people: Apple through shared groups, Google with your family group.

For a team, four things are missing:

1. **An admin view**: who can see which logins, and one place to change it.
2. **Recovery**: a way back in for a colleague who forgets the master password, without losing the vault.
3. **Offboarding**: one place to remove a leaver from every shared login at once.
4. **Logs**: a record of who opened, changed or shared what, which is useful evidence when {{< a key="security-questionnaire" >}}a client sends you a security questionnaire{{< /a >}}.

There is a structural problem too. Logins saved in a built-in manager live in each person's own Apple or Google account. When that person leaves, whatever they saved there leaves with them, and nobody has a list of what it was.

## Prices in October 2026, and what five or ten people pay

### Bitwarden

At the time of writing (October 2026), Bitwarden Teams costs $4 (about £3) per user per month and Enterprise $6 (about £4.50), billed annually; monthly billing is also offered. Teams already includes sharing, event logs and directory sync, which keeps your member list in step with your directory, such as Google Workspace or Microsoft Entra ID. Enterprise adds single sign-on, the enterprise policies, a self-hosting option and a free Families plan for each member. Both plans come with a 14-day free trial on the [Bitwarden business pricing page](https://bitwarden.com/pricing/business/).

### 1Password

The Teams Starter Pack costs $24.95 (about £19) a month, billed annually, for up to ten people; beyond ten, 1Password sells extra seats at $4.99 (about £3.80) each per month, up to twenty people. Business costs $8.99 (about £6.80) per user per month, billed annually, and adds sign-in through your identity provider, finer permissions on shared vaults and fuller reports. Many reviews still quote the older $19.95 and $7.99: the [1Password business pricing page](https://1password.com/pricing/business) is the one to trust. There is a 14-day free trial.

### Proton Pass

Pass Essentials costs $1.99 (about £1.50) per user per month, billed annually, for teams of 3 to 30 people. Pass Professional costs $4.49 (about £3.40), also billed annually, and adds single sign-on, detailed activity logs, enterprise policies and a connection to security monitoring tools. Paying month by month costs more, so compare the totals on the [Proton Pass business pricing page](https://proton.me/business/pass/pricing).

### What a team pays each month

| Plan (cost per month, billed annually) | 5 people | 10 people |
|---|---|---|
| Bitwarden Teams | $20 (about £15) | $40 (about £30) |
| Bitwarden Enterprise | $30 (about £23) | $60 (about £45) |
| 1Password Teams Starter Pack | $24.95 (about £19) | $24.95 (about £19) |
| 1Password Business | $44.95 (about £34) | $89.90 (about £68) |
| Proton Pass Essentials | $9.95 (about £7.50) | $19.90 (about £15) |
| Proton Pass Professional | $22.45 (about £17) | $44.90 (about £34) |

From seven people up, the flat 1Password Teams Starter Pack costs less than Bitwarden Teams. Proton Pass Essentials is the cheapest at every size, and also has the fewest admin tools. Check whether VAT is added at checkout.

## Admin recovery and offboarding: the two days that matter

A team password manager proves its worth on two days: when someone is locked out, and when someone leaves.

### When a colleague is locked out

- **1Password**: on both team plans, an owner or administrator starts a recovery; the colleague confirms by email, sets a new account password and gets a new Secret Key, then the admin completes the recovery. Their vaults stay intact, but they have to sign in again on each device.
- **Bitwarden**: an admin can reset a member's master password once the account recovery administration policy is switched on in the Admin Console, under **Settings > Policies** (it is off by default). Bitwarden's help centre describes account recovery as an Enterprise feature, but its pricing table also lists a recovery workflow under Teams, so confirm it during the trial if you plan to stay on Teams.
- **Proton Pass**: an admin can change the password of any member who is not set as private, from the organisation settings. Private members recover their account themselves, with a recovery phrase, an email address or a phone number.

{{< callout type="tip" >}}Set recovery up on day one, while everyone can still sign in. In Bitwarden Enterprise, a member has to be enrolled in account recovery before they get locked out, so **switch on automatic enrolment** in that policy when you create the organisation.{{< /callout >}}

### When someone leaves

1. Before their last day, ask them to move any work logins from their private vault into a shared one.
2. Remove or suspend them in the admin console: they lose access to the shared vaults or collections.
3. Change the passwords they could see, starting with the email admin account, the bank, the domain registrar and the website. Anything someone could see, they could have copied.
4. Check the two-factor methods on shared accounts: a code still arriving on a leaver's phone is a way back in.

The full list, with email, files and devices, is in my {{< a key="offboarding-checklist" >}}offboarding checklist{{< /a >}}.

## Passkeys and breach alerts

All three store passkeys, the sign-in method that replaces a password with a key held on your devices and resists phishing, and sync them across your devices. My tutorial on {{< a key="two-factor-authentication-passkeys" >}}switching on two-factor authentication and passkeys{{< /a >}} shows where to create them on the accounts that matter.

Each one also checks the health of your vault:

- **1Password Watchtower** flags weak, reused and compromised passwords, and sites where you could add two-factor authentication or a passkey.
- **Bitwarden's vault health reports** list exposed, reused and weak passwords, unsecured websites and sites where two-step login is available but not switched on, plus a data breach report.
- **Proton Pass Monitor** flags weak and reused passwords and missing two-factor authentication and, depending on the plan, warns you when an address appears in a known breach.

Run the report once a month and fix the important accounts first: email, domain, bank and website, then the rest.

## Trust: what the LastPass breach taught us

The 2022 LastPass breach is the reason to look at a vendor's record as well as its price list. It began with an employee's laptop in August 2022 and went through a senior employee's personal device before reaching a backup database. In December 2025, the ICO announced a £1.2 million fine (£1,228,283) against LastPass UK over it; the breach affected personal data of up to 1.6 million UK users. The ICO found no evidence that the hacker could decrypt customers' stored passwords, and said it continues to encourage the use of password managers ([ICO announcement](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/12/password-manager-provider-fined/)).

Three things to check before you choose:

- **How the encryption works.** The vault should be encrypted on your devices, so that a stolen backup is useless without the master password. All three work this way.
- **Who checks the code.** Bitwarden's code and Proton Pass's apps are open source. 1Password is closed source, but it publishes its security design and pays outside researchers who report flaws through a bug bounty. All three publish independent security audits.
- **How your own team signs in.** A long, unique master password, two-factor authentication on the password manager itself, and work accounts kept apart from personal ones: the LastPass chain went through a personal device.

### Where your data lives (GDPR)

The vault contents are encrypted before they leave your devices, but the vendor still holds personal data about your team (names, email addresses, logs). That makes it your processor, so you need its data processing agreement, as Article 28 of the GDPR (and of the UK GDPR) requires. Bitwarden and 1Password let you keep your account in an EU region; Proton is a Swiss company, and Switzerland has an EU adequacy decision. This is general information, not legal advice: if a client contract says where your data may be stored, have that clause checked by whoever handles your contracts.

## KeePassXC: the local-file option

If you would rather not trust any vendor's cloud, KeePassXC is a free, open-source manager for Windows, macOS and Linux that keeps the whole vault in one encrypted file in the KeePass format. You decide where that file lives: a laptop, a shared drive or your own server. In France, the national cybersecurity agency (ANSSI) gave KeePass a first-level security certification (CSPN) in 2010, for version 2.10 Portable. It is a good sign for the design, but it covers that version only, not today's KeePass or KeePassXC.

The price is admin work. There is no admin console and no recovery: forget the master password and the file stays locked for good. Sharing means sharing the file, so two people saving changes at the same time can end up with conflicting copies to merge, and phones need a separate app that reads the format. KeePassXC suits a team of two or three with one person happy to look after the file and its backups, or a team with a firm no-cloud rule.

## Which is the best password manager for a small team?

All three are sound on security, so the choice depends on how your team works:

- **Two to ten people who want the least admin work:** 1Password Teams Starter Pack. One flat price, recovery by an admin included, and Business when you need SSO or the activity log.
- **A team that wants open source, event logs and room to grow:** Bitwarden Teams, or Enterprise for SSO, self-hosting and the recovery policy.
- **A tight budget, or a team already on Proton's business services:** Proton Pass Essentials, then Professional when a client asks for activity logs or SSO.
- **A firm no-cloud rule:** KeePassXC, if someone owns the file and its backups.
- **Just you:** the manager built into your phone or browser, with two-factor authentication switched on.

Whichever you pick, put the whole team on it and stay there. Half the logins in one tool and half in another is how passwords end up in a spreadsheet again. As I say in {{< a key="small-business-tools-guide" >}}my guide to everyday tools{{< /a >}}, staying put is a skill too: once a tool does the job, the next one has to be much better, not just newer.

## Set it up in an afternoon: the checklist

1. Start a trial with the tool that fits your profile; Bitwarden and 1Password both offer 14 days.
2. Create the organisation and give the owner or admin role to two people.
3. Set up recovery before anything else: in Bitwarden Enterprise, the account recovery policy with automatic enrolment; in Proton Pass, decide which members are private.
4. Create shared vaults by job, for example "Website and domains", "Email and admin", "Finance" and "Social and ads", and give each person only the ones they need.
5. Invite the team and ask everyone to switch on two-factor authentication for their password manager account; enforce it where your plan allows.
6. Import the passwords saved in browsers, then delete them there and switch off the browser's offer to save new ones, so logins do not drift back.
7. Run the health report and change the reused or weak passwords on the important accounts first.
8. Write your offboarding steps on one page while it is all fresh.

Then lock down the admin side of your email with my guide to {{< a key="secure-google-workspace-microsoft-365" >}}securing Google Workspace and Microsoft 365{{< /a >}}.

You do not need me for any of this: a small team can do it in an afternoon. Where I come in is the bad day, when a website is hacked or nobody can get into a domain or a site any more. I answer those rescue calls the same day or within 24 hours.
