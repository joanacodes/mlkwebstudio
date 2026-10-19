---
title: "Offboarding checklist: close every access when an employee or freelancer leaves"
seo_title: "Employee offboarding checklist for IT: close every access"
description: "Employee offboarding checklist for IT: what to close before, on and after the last day (email, files, passwords, domain, devices), freelancers included."
slug: "employee-it-offboarding-checklist"
translationKey: "offboarding-checklist"
date: 2026-10-18T22:00:00+02:00
lastmod: 2026-10-18T22:00:00+02:00
category: "cybersecurity"
article_type: "tutorial"
keywords: ["employee offboarding checklist IT", "IT offboarding checklist", "remove access when an employee leaves", "leavers process", "freelancer offboarding", "offboarding Google Workspace and Microsoft 365"]
summary: "Close a leaver's access in three moments. Before the last day, list every account, device and code they use, and move their files and mail; on the day, suspend their work account rather than delete it, change the shared passwords they knew and remove them from every other service; in the weeks after, rotate API keys, check forwarding rules and delete their data on schedule. For freelancers, plan the end of access when the job starts."
cover: "offboarding-checklist"
cover_alt: "The article title in white on a ribbed-glass panel over a photo, with connected boxes in a flow diagram"
related: ["password-manager-teams", "secure-google-workspace-microsoft-365", "two-factor-authentication-passkeys", "regain-website-access", "recover-domain-name"]
services: ["rescue"]
faq:
  - q: "How long can you restore a deleted user account?"
    a: "In Google Workspace, an admin can restore a deleted user for up to 20 days. In Microsoft 365, a deleted user stays restorable for about 30 days, and their OneDrive files stay available for 30 days by default. After that, assume the data is gone."
  - q: "Do you still pay for a suspended Google Workspace user?"
    a: "Yes: Google keeps billing a suspended user. On a Flexible plan, deleting the user reduces your bill pro rata; on an Annual/Fixed-Term plan, deleting does not reduce the number of licences you pay for. To keep a former employee's data for less, Google offers an Archived User licence."
  - q: "Can I read a former employee's work emails?"
    a: "Work emails are business records, but tell staff in advance, in an IT policy, who may open a mailbox and when. In France, the CNIL says messages clearly marked as personal are covered by the secrecy of correspondence, so the employer must not open them."
  - q: "What if a former employee or freelancer won't hand over a login or a domain?"
    a: "Ask the service to return the account to the business, with proof that the business owns it (invoices, company documents). Many providers have a procedure: Squarespace, for example, verifies identity when the current owner of a site or domain is unavailable. Keep every request in writing, and take legal advice if the person claims the account is theirs."
  - q: "Who should handle offboarding in a small team?"
    a: "The owner or one named admin, with a second admin as backup, so the job never depends on one person. Keep the checklist in a shared document and add each new tool to your access register the day you sign up."
---

When someone leaves, their access stays behind. Their work account, the shared passwords they knew and the apps they connected keep working until somebody closes them, and their phone may still receive your bank's codes. This employee offboarding checklist for IT closes everything in three moments: before the last day, on the day and in the weeks after. It works for a freelancer or an agency at the end of a job too.

Getting back access to a website from someone who still holds the login is one of the fixed-price jobs I do. Closing the doors while the person is still around to hand over the keys is much quicker.

This tutorial is part of my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}}. The examples use Google Workspace and Microsoft 365, but the order of the steps works with any tools.

## Before the last day: list every access

The NCSC's [guide for small organisations](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/secure-your-important-online-accounts) warns that the accounts of people who have left often stay active without anyone noticing. You can't close an account you don't know about, so start with a written list, an access register, built from five places:

| Where to look | What you find |
|---|---|
| Your password manager's admin console | The shared vaults or collections the person can open |
| The Google Workspace or Microsoft 365 admin console | Their account, admin roles, groups, devices and connected apps |
| Their mailbox: search for "welcome", "verify your email" and "invoice" | Services they signed up for with their work address |
| Bank, card and payment accounts | Who can pay, approve a payment or see the accounts |
| The person | Everything else: ask them to write it down before they go |

Add the physical side: keys, badges, door and alarm codes, the company laptop and phone, security keys.

Then check ownership, not only access. If the leaver is the only owner or admin of something (the domain at the registrar, the website builder, the Google Business Profile, the ad accounts, the Google Workspace console itself), make someone else owner now, while they can still do it. On Squarespace, for instance, only the current owner can transfer a site, and Google recommends more than one super admin, each a different person. If the domain sits in the leaver's own name or personal account, move it to the business first: my guide to {{< a key="recover-domain-name" >}}getting a domain name back{{< /a >}} shows what that involves once they've gone.

## Before the last day: hand over files and email

Work files and work email belong to the business. Move them before you cut access, not after.

**Files.** In Google Workspace, files in shared drives already belong to the team and stay where they are. Files the person owns in their own Drive can be transferred to a colleague by an admin, before or during the deletion of the account. Items in their bin are not transferred, so restore what matters first. In Microsoft 365, give the manager access to the leaver's OneDrive (Microsoft does it from the SharePoint admin centre, by making them a site collection administrator), or copy the files to a shared library.

**Email.** In Microsoft 365, the usual route is to convert the mailbox to a shared mailbox: the email and calendar stay, colleagues can open it, and it needs no licence while it stays under 50 GB. Forwarding is the alternative, but it only sends on new messages. In both cases, keep the user account, because the shared mailbox or the forwarding depends on it. In Google Workspace, a suspended account keeps its mail and files until you decide what to do with them.

Whatever the tool, tell clients and suppliers who their new contact is before the last day, and use role addresses (contact@, accounts@) for anything that must outlive one person.

{{< callout type="note" >}}**Staff in France?** The CNIL recommends warning the employee of the date their mailbox closes, so they can sort it and move their private messages to a personal address, and says the named address must be deleted once they have left.{{< /callout >}}

## On the last day: close access in this order

For admin accounts, the NCSC advises revoking access promptly, ideally before the person moves on, in case there is any animosity around the departure. Block an hour at the end of the last working day and go down this list.

1. **Suspend the work account; don't delete it yet.** In Google Workspace, suspending blocks access, keeps the data and resets the person's sign-in cookies and OAuth tokens (the permissions they gave to apps). In Microsoft 365, block their sign-in: Microsoft's [guide to removing a former employee](https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee) explains that this ends the current session and blocks new ones, whereas a password reset alone may not end a session that is already open.
2. **Close what suspension leaves open.** Remove the security keys and revoke the app passwords registered on the account; Google's page on [keeping data secure after an employee leaves](https://knowledge.workspace.google.com/admin/users/maintain-data-security-after-an-employee-leaves) lists both. Services they reach with "Sign in with Google" or "Sign in with Microsoft" will refuse the suspended account, but remove the person from each one too: a session already open in an app can stay open for a while.
3. **Remove them from the password manager, then change the shared passwords they could see.** The NCSC counts this as part of every leavers process. Start with the email admin account, the bank, the domain registrar and the website, and move any two-factor codes that still reach their phone. My comparison of {{< a key="password-manager-teams" >}}password managers for teams{{< /a >}} shows how each one handles a leaver, and my {{< a key="two-factor-authentication-passkeys" >}}two-factor authentication guide{{< /a >}} how to give a shared account a second method.
4. **Remove them everywhere else.** Hosting, website builder, social and ad accounts, online banking, payment apps, accounting software, client portals, WhatsApp and Slack groups. Cancel their company card.
5. **Collect and wipe the devices.** Laptop, phone, security keys, badges and keys; then change the door and alarm codes they knew. Every Microsoft 365 business plan includes Basic Mobility and Security, which can wipe enrolled devices. On a personal phone, remove the work account and its apps, not the person's photos. My guide to {{< a key="device-security-basics" >}}laptops and phones without an IT department{{< /a >}} covers the set-up that makes this step quick.

{{< callout type="warning" >}}**A tense departure changes two things.** Keep the account suspended rather than deleted, because its mail, files and logs may be needed later. And if the person left with personal data, a client file for instance, it may be a personal data breach: under Article 33 of the GDPR (and of the UK GDPR), you have 72 hours from becoming aware of it to notify the regulator, the ICO or the CNIL, unless it is unlikely to put anyone at risk. This is general information, not legal advice: in either case, an employment or data protection lawyer is worth a call.{{< /callout >}}

## In the weeks after: the clean-up that's easy to forget

- **Rotate keys and tokens.** API keys, webhooks and integration tokens the person created or saw, in the website, the payment provider and the automation tools. Some services tie keys to a person: Anthropic's Claude Console, for example, says personal API keys stop working when their owner leaves the organisation, and recommends service-account keys for anything shared.
- **Check forwarding and inbox rules** on their mailbox and on the shared mailboxes they used. A rule that copies mail to a personal address is the quietest leak there is, which is why the NCSC lists unwanted forwarding rules among the first checks on a hacked account. Microsoft 365 can also block automatic forwarding to outside addresses for the whole organisation.
- **Check recovery details** on shared accounts: if the recovery email or phone number is the leaver's, a password reset goes straight to them.
- **Review external sharing.** Look for files they shared with outside addresses or with anyone who has the link, and tighten them once the files have a new owner.
- **Delete the account once its data is safe**, unless a shared mailbox depends on it.
- **Delete their personal data on schedule.** Keep what the law requires, such as payroll records, and delete the rest when its retention period ends. Article 5(1)(e) of the GDPR (storage limitation) sets no fixed periods: as the [ICO explains](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/storage-limitation/), you decide them, can justify them and write them down.
- **Review access every few months**, as the NCSC suggests; France's CNIL asks for a review at least once a year in its security guide.

## Freelancers and agencies: plan the exit on day one

A freelancer leaves on a date you know in advance, which makes offboarding easy if you plan it on their first day:

- Invite them with their own email address, as a guest, contributor or collaborator, never with a copy of your login. Removing them then takes one click.
- Give them the lowest role that does the job, with an end date wherever the tool offers one, and put the end of the contract in your calendar with "close access" next to it.
- Keep the domain, hosting and website accounts in the business's name, even when the agency handles the bills. My guide to {{< a key="regain-website-access" >}}regaining access to your website{{< /a >}} shows the alternative.
- Ask for a handover at the end: logins created for you, files, code and documentation.

Providers need access to do the work. To build an automation, I need access to a client's mailbox, for example. That's normal; what matters is that the access sits in an account you control and can close.

## Your employee offboarding checklist for IT, on one page

Copy it into your notes and adapt it to your tools.

### Before the last day

- List every account, device, card and code the person uses
- Move ownership of the domains, sites, pages and admin roles they hold alone
- Transfer their files and decide what happens to their mailbox
- Tell clients and suppliers who the new contact is

### On the last day

- Suspend the work account or block its sign-in
- Revoke app passwords and remove security keys
- Remove them from the password manager and change the shared passwords they knew
- Remove them from every other service, chat group and bank access
- Collect and wipe devices; change door and alarm codes

### In the weeks after

- Rotate API keys and tokens
- Check forwarding rules, recovery details and external sharing
- Delete the account, then their personal data when its retention period ends

You don't need an IT department for this: whoever holds the admin passwords can run it in an afternoon. If the {{< a key="secure-google-workspace-microsoft-365" >}}admin settings of your Google Workspace or Microsoft 365{{< /a >}} have never been reviewed, do that next, and the next departure will be shorter.
