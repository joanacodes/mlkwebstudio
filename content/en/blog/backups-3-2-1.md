---
title: "Backups for a small team: the 3-2-1 rule for your files, Google Workspace and Microsoft 365"
seo_title: "3-2-1 backup rule: files, Google Workspace, Microsoft 365"
description: "The 3-2-1 backup rule for small business: what Google Workspace and Microsoft 365 really keep, laptop backups, the offline copy and a quarterly restore test."
slug: "3-2-1-backup-rule"
translationKey: "backups-3-2-1"
date: 2026-10-18T21:54:00+02:00
lastmod: 2026-10-18T21:54:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["3-2-1 backup rule", "small business backup", "Google Workspace backup", "Microsoft 365 backup", "3-2-1-1-0 backup rule", "is OneDrive a backup"]
summary: "The 3-2-1 backup rule means three copies of your data, on two different kinds of storage, with one copy away from your office, ideally offline or impossible to modify. Google Workspace and Microsoft 365 keep deleted items for weeks or months, not years, and sync copies deletions and ransomware too, so a small team needs a backup of its cloud suite as well as of its laptops. Test a restore every three months."
cover: "backups-3-2-1"
cover_alt: "The article title in white on a ribbed-glass panel over a photo, with a blueprint grid and a target"
related: ["cybersecurity-guide", "secure-google-workspace-microsoft-365", "incident-response-first-hour", "website-security-guide", "infomaniak-review"]
services: ["rescue"]
faq:
  - q: "What is the difference between a backup and an archive?"
    a: "A backup is a recent copy kept so that you can restore data after a loss; older versions are deleted on a schedule. An archive is data moved out of daily use and kept for a long time, often for legal or accounting reasons. You usually need both, and one does not replace the other."
  - q: "Should backups be encrypted?"
    a: "Yes, as soon as a backup leaves the computer: an external drive gets lost, and a cloud account can be broken into. Turn on the encryption option of your backup tool or service, then keep the encryption password in your password manager and on paper in a safe place, because without it the backup cannot be restored."
  - q: "How long should we keep backups?"
    a: "Long enough to go back to a date before a problem you notice late, such as a file overwritten weeks ago or ransomware that stayed quiet for a while. A common pattern is daily versions for a month and monthly copies for a year. Backups that hold personal data still follow your retention rules, so do not keep them for ever just in case."
  - q: "Is a NAS with RAID a backup?"
    a: "No. RAID combines several disks so that, in most set-ups, the device keeps working when one disk fails. A deletion, a corrupted file or ransomware hits every disk at once, so the NAS counts as one copy, which needs its own backup somewhere else."
---

The 3-2-1 backup rule is the simplest standard there is: keep three copies of your data, on two different kinds of storage, with one copy away from your office. It protects a small team against the ways files really disappear: a shared folder deleted by mistake, a laptop stolen from a car, ransomware that encrypts everything it can reach, or the account of someone who has left, deleted along with the only copy of a client file.

Many teams feel covered because everything is "in the cloud". Google Workspace and Microsoft 365 keep deleted files for weeks or months, not years, and sync copies your mistakes as faithfully as your work.

This guide applies the rule to Google Workspace, Microsoft 365 and laptops, with a plan for a five-person team and a quarterly restore test. It is part of my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}}.

## What the 3-2-1 backup rule means

Each number covers a different way of losing data.

| Rule | In practice | Protects you against |
|---|---|---|
| 3 copies | The original and two backups | One copy being deleted, corrupted or encrypted |
| 2 kinds of storage | Say, a cloud service and an external drive | One technology or one supplier failing |
| 1 copy off site | Another building or another provider | Fire, flood, theft or a break-in at the office |

A backup is a copy kept apart from the original that you can restore as it was on a chosen date. The UK's NCSC covers backups in its [guide for small organisations](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security). France's national cybersecurity agency, ANSSI, recommends the 3-2-1 rule in its guide to backup fundamentals, with one detail worth copying: at least one of the backups should be offline, disconnected from your network and your accounts.

That detail is the point of the extended version, **3-2-1-1-0**: one copy offline or immutable, and zero errors when you test a restore. An immutable backup cannot be changed or deleted before a date you set, not even by an administrator. It is what keeps a backup alive when ransomware or an intruder has your admin password.

## Sync is not a backup

Google Drive, OneDrive and Dropbox keep the same files on your computer and in the cloud: a change on one side is copied to the other within seconds. That is excellent for working together, and no help against the most common accidents:

- you delete a folder, and it disappears everywhere;
- ransomware encrypts your laptop, and the encrypted files replace the good ones in the cloud;
- someone saves over a spreadsheet, and the old version is gone from every device.

The bin and the version history are safety nets, not backups: same provider, same admin account, emptied after a fixed period. They save you from the mistake you notice quickly. If ransomware is already on your screen, follow my {{< a key="incident-response-first-hour" >}}first-hour plan{{< /a >}} before you touch any backup.

## Google Workspace: what Google can restore, and for how long

As of 19 October 2026, Google's safety nets work like this:

1. A file or an email you delete goes to the bin, where it stays for 30 days.
2. Once it has left the bin, an administrator can still restore it for 25 days from the Admin console: open the user's account, choose **Restore data**, then pick a date range and the app, Drive or Gmail. Google brings back everything deleted in that range, not one chosen file, and a large restore can take several days, according to [Google's admin help](https://knowledge.workspace.google.com/admin/drive/recover-deleted-files-and-folders-for-drive-users).
3. After that, the data is purged for good.

Google Vault, included from Business Plus upwards, is often taken for a backup, but it is a retention and eDiscovery tool for legal holds and searches: Google's own Vault FAQ sends administrators to the Admin console for Gmail or Drive data deleted less than 25 days ago, and notes that Vault has no automated recovery tools. To go back further, you need your own backup.

{{< callout type="warning" >}}**Do not delete a departing employee's account straight away.** Once a Google Workspace user is deleted, you have 20 days to restore the account and its files. Transfer their files to a colleague first, then follow my {{< a key="offboarding-checklist" >}}offboarding checklist{{< /a >}} for the rest.{{< /callout >}}

## Microsoft 365: retention is not a backup

Microsoft's safety nets last longer, but they have limits too, as of 19 October 2026:

- OneDrive and SharePoint keep deleted files in the recycle bin for 93 days on work accounts, unless your administrator has changed that setting.
- The "Restore your OneDrive" feature rolls a whole OneDrive back to a point in the last 30 days, which is the one to know after ransomware.
- An email removed from the Deleted Items folder can be recovered for 14 days by default, or up to 30 if your administrator raises the setting.
- Retention policies, set in Microsoft Purview, stop content from being permanently deleted for a set period. They serve compliance and legal holds, not putting a folder back the way it was on Tuesday.

Microsoft also sells **Microsoft 365 Backup**, a paid service for OneDrive, SharePoint and Exchange Online, set up from the Microsoft 365 admin centre and billed pay-as-you-go through an Azure subscription. At the time of writing (October 2026), [Microsoft's pricing page](https://learn.microsoft.com/en-us/microsoft-365/backup/backup-pricing) gives $0.15 (about £0.11) per gigabyte of protected content per month, a price Microsoft publishes in dollars; deleted items in recycle bins and mailbox archives count towards the size, and restores are free. It is a useful second copy, kept for a year and locked against changes, but Microsoft holds it and your own admin accounts manage it, so it is not your copy out of reach.

The admin settings that keep these restores possible are in my guide to {{< a key="secure-google-workspace-microsoft-365" >}}securing Google Workspace and Microsoft 365{{< /a >}}.

## Backing up your suite outside Google and Microsoft

For a copy beyond your provider's reach, use a cloud-to-cloud backup service: it connects to your suite through the admin console, copies mail, files, calendars and contacts every day and keeps versions on its own storage. Acronis, Backupify, IDrive, Spin.ai and Veeam are among the vendors. I am not ranking them; compare them on these points:

- what it covers: your suite (some cover only Microsoft 365 or only Google Workspace), mailboxes, shared drives or SharePoint sites, calendars, contacts;
- how often it runs, and how long versions are kept;
- where the data is stored, and whether you can choose a European data centre;
- what you can restore: one file, one email or a whole account;
- its own admin login with two-factor authentication;
- how you get your data out if you stop paying.

Most charge per user per month.

## Laptops: Time Machine, File History and an external drive

Laptops hold more unique data than people think: downloads, desktop folders, the file nobody moved to the shared drive. Save work files in the shared drive, then add a local backup:

- **Mac**: Time Machine is built into macOS. Choose an external drive in its settings and turn on **Encrypt Backup**. It then keeps hourly backups for the past 24 hours, daily ones for the past month and weekly ones for older months, deleting the oldest when the drive is full. Apple recommends a drive with at least twice your Mac's storage.
- **Windows 11**: File History keeps versions of your files on an external drive or a network location. The Windows Backup app copies your main folders and settings to OneDrive, which helps when you set up a new PC, but it is sync to the cloud, not a separate copy, and its folder backup does not work with work or school accounts.

An external drive covers the stolen-laptop case, but it sits in the same office and, if left plugged in, ransomware can encrypt it too. Plug it in for the backup, then unplug it.

## The copy out of reach: off site and offline

This is the copy that saves you when everything else is hit at once. Three ways to get it:

1. **Two encrypted external drives in rotation**: one at the office for the backup, the other at home, swapped every week. Cheap and offline by design, but it depends on someone remembering.
2. **A cloud backup with versioning and immutability**, sometimes called object lock, so that not even your own password can delete the copies early.
3. **Another provider, somewhere else.** Infomaniak, the Swiss company behind SwissTransfer and a provider I recommend, sells Swiss Backup: storage in Switzerland for backups of computers, servers and phones made with Acronis software, for Synology or QNAP NAS boxes and for other tools over S3 or Swift, priced in Swiss francs by storage and by device, with a 90-day trial. More in my {{< a key="infomaniak-review" >}}Infomaniak review{{< /a >}}.

{{< callout type="tip" >}}**Give the backup its own login**: a separate account, a long unique password and two-factor authentication, used by one or two people only. If the password that opens your mailbox also opens your backups, an intruder can delete both.{{< /callout >}}

## A backup plan for a five-person team

This plan works without an IT department, as long as one person owns it and a second one knows how to restore.

| Data | Backup | Copy out of reach | How often |
|---|---|---|---|
| Email, calendars, Drive or OneDrive, shared drives | A cloud-to-cloud backup service | That service, if it has immutable copies and its own login; otherwise a monthly export to the rotation drive | Daily, automatic |
| Laptops | Time Machine or File History on an encrypted external drive | Work files kept in the shared drive, backed up above | Daily |
| Office NAS or server, if you have one | A cloud backup such as Swiss Backup | The rotation drive | Nightly, weekly for the drive |
| Accounting, CRM and other online tools | The export each tool offers (CSV or PDF) | Saved in the shared drive and on the rotation drive | Monthly |
| Website | Your host's or platform's backups | A copy kept outside the hosting | Before each update |
| Passwords and recovery codes | Your password manager | The recovery codes, printed and locked away | When they change |

Website backups depend on the platform: my {{< a key="website-security-guide" >}}website security guide{{< /a >}} covers them platform by platform, and my guide to {{< a key="website-maintenance" >}}website maintenance{{< /a >}} explains who should run them. Two of my clients called me in an emergency after their website was hacked, so keep yours on the list even if it rarely changes.

Then write one page: what is backed up, where, by which service, which login opens it (stored in the password manager), who restores and when the last test took place. Print it, because on the day your accounts are locked or encrypted, you will not be able to open a document stored in them.

## Test a restore every three months

A backup you have never restored is a hope, not a backup. Backups fail without telling anyone: a licence expires, a password changes, a drive fills up. Once a quarter, set aside half an hour:

1. Restore three things to a different folder, never over the originals: a file from the shared drive as it was a month ago, an email, and a folder from a laptop backup.
2. Open them: a file that comes back but will not open does not count.
3. Check the date of the latest backup on each line of your plan: one from three weeks ago means a job has stopped.
4. Sign in to the backup service with its separate login, and check that nobody who has left still has access.
5. Note the date, how long each restore took and any problem on your backup sheet.

That is the 0 of 3-2-1-1-0. The GDPR points the same way: among the measures to take as appropriate, [Article 32](https://eur-lex.europa.eu/eli/reg/2016/679/oj) lists "the ability to restore the availability and access to personal data in a timely manner in the event of a physical or technical incident" and "a process for regularly testing" security measures, and the UK GDPR has the same article. This is practical guidance, not legal advice: if you hold health records or other sensitive data, a DPO or a lawyer can tell you what your backups must cover and how long you may keep them.

## Where to start this week

1. Check what you already have: who can restore what in your Google or Microsoft admin console, and whether each laptop has a backup that actually runs.
2. Choose the copy out of reach for your cloud suite: the bin and the admin restore do not count.
3. Put the first restore test in the calendar, three months from today.

If you would rather hand it over, make the restore test part of the job: a provider who cannot show you a file coming back has not finished.
