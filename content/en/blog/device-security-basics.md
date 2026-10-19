---
title: "Laptops and phones without an IT department: the security basics"
seo_title: "Laptop security checklist for small business (and phones)"
description: "A laptop security checklist for small business teams with no IT department: updates, encryption, screen lock, Windows 10, phones, BYOD and lost devices."
slug: "laptop-security-checklist"
translationKey: "device-security-basics"
date: 2026-10-18T22:03:00+02:00
lastmod: 2026-10-18T22:03:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["laptop security checklist", "device security for small business", "how to secure a work laptop", "work phone security", "Windows 10 end of support for business", "BYOD security"]
summary: "Six settings cover most of the risk on a work laptop: automatic updates, disk encryption (FileVault on a Mac, BitLocker or Device encryption on Windows), a screen lock after five minutes, a standard account for daily work, the built-in antivirus, and location and remote wipe switched on. Phones need updates, a passcode of six digits or more and apps from the official stores. As of 19 October 2026, a Windows 10 work PC needs Windows 11, paid updates or replacing."
cover: "device-security-basics"
cover_alt: "The article title in white on a ribbed-glass panel over a photo, with a shield and a check mark"
related: ["cybersecurity-guide", "password-manager-teams", "two-factor-authentication-passkeys", "offboarding-checklist", "backups-3-2-1"]
services: ["rescue"]
faq:
  - q: "Is a Mac safer than a Windows PC for a small team?"
    a: "Neither is safe or unsafe by nature. Both come with disk encryption, an antivirus and automatic updates, and both are targeted by attackers. What protects you is the same short list on either system: updates on, disk encrypted, screen locked and daily work on a standard account."
  - q: "Should work and personal browsing share one browser?"
    a: "Better not. Use separate browser profiles: Chrome, Edge and Firefox have them, and Safari has had them since macOS Sonoma. Bookmarks, saved sign-ins and extensions then stay apart, and an extension installed for personal use cannot read your work pages."
  - q: "Can my employer wipe my personal phone?"
    a: "With Android's work profile or Apple's enrolment for personal devices, the company can remove only the work apps and data, not your photos or personal apps. Full device enrolment, designed for company-owned phones, allows a complete wipe, so ask which one you are being given."
  - q: "What should I do before selling or recycling an old laptop?"
    a: "Back it up and sign out of your accounts (on a Mac, sign out of your Apple Account so that the next owner is not blocked by Activation Lock). Then erase it: on a Mac, System Settings > General > Transfer or Reset > Erase All Content and Settings; on Windows 11, Settings > System > Recovery > Reset this PC > Remove everything. Take it off your device list too."
---

Without an IT department, the security of your business rests on a few laptops and phones, set up by whoever took them out of the box. The protections that matter are built into Windows, macOS, iOS and Android: they cost nothing, and switching them on takes about an hour per device.

This laptop security checklist covers Mac and Windows, phones, lost devices, personal devices and public Wi-Fi, for teams of two to twenty people where nobody's job is IT.

It is part of my {{< a key="cybersecurity-guide" >}}cybersecurity guide for small teams{{< /a >}}. The UK's NCSC covers the same ground in its [guide for small organisations](https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security).

## Updates first, browsers and apps included

Many attacks on laptops use flaws that already have a fix. Automatic updates do the most work, and they only take effect once the device restarts.

- Windows 11: Settings > Windows Update. Set your **Active hours** (under Advanced options) so that restarts happen outside your working day, and stop postponing them.
- Mac: System Settings > General > Software Update, then the information button next to **Automatic updates**: switch every option on.
- Browsers and apps: Chrome, Edge and Firefox download their updates on their own but apply them only when you close and reopen them, so a browser left open for a month is a month behind. Safari updates with macOS. Uninstall the apps nobody uses.

Ignore any pop-up offering an urgent update while you browse: Cybermalveillance.gouv.fr, France's public service for victims of cybercrime, warns against these fake updates. Real updates come from the system settings or the app itself.

Apple publishes no end-of-support dates: plan to replace a Mac or an iPhone that can no longer install the current system. Before buying an Android phone, check how long the maker promises security updates.

### Still running Windows 10

Microsoft ended Windows 10 support on 14 October 2025 ([Microsoft's end-of-support page](https://www.microsoft.com/en-gb/windows/end-of-support)). As of 19 October 2026, a work PC still on it has three ways forward:

1. **Upgrade to Windows 11**, free if the PC meets the requirements: Microsoft's PC Health Check app tells you in a minute.
2. **Pay for Extended Security Updates.** For organisations, Microsoft set the first year at $61 per device and doubles the price every year. The second year started on 14 October 2026 at $122 (about £90) per device and cannot be bought without the first, so a PC never enrolled costs $183 (about £135). Microsoft publishes these prices in dollars.
3. **Replace the PC.** Next to that bill, I would usually replace an old laptop.

{{< callout type="warning" >}}Microsoft's extended updates for home users now run to 12 October 2027, but Microsoft says that programme **cannot be used in commercial scenarios**.{{< /callout >}}

## Encryption: what protects a laptop left on a train

Without encryption, whoever takes your laptop can pull out the drive, or start it from a USB stick, and read your files without your password. With encryption, they get scrambled data, and you notice nothing day to day.

- Mac: System Settings > Privacy & Security > **FileVault**, then Turn On.
- Windows 11 Home: Settings > Privacy & security > **Device encryption**, on PCs that support it. It needs a Microsoft account, where Windows saves the recovery key.
- Windows 11 Pro: **BitLocker** (type "Manage BitLocker" in the Start menu), which lets you choose where the recovery key goes.
- Phones: iPhones and recent Android phones encrypt their storage, and the passcode protects the key.

After a hardware repair or a firmware update, a laptop can ask for its recovery key, and without it the data is lost. Keep each key in your team's password manager, labelled with the device's name (my {{< a key="password-manager-teams" >}}comparison of password managers for teams{{< /a >}} covers shared vaults). Keys saved to a Microsoft account are listed at account.microsoft.com/devices/recoverykey.

Article 32 of the [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj) names encryption as an example of an appropriate security measure, and, as the rules stand on 19 October 2026, Article 34(3)(a) spares you from informing the people concerned when a lost device was encrypted and its password was not lost with it (the UK GDPR has the same articles). You still record the loss, as my {{< a key="incident-response-first-hour" >}}first-hour plan{{< /a >}} explains. This is general information, not legal advice: if the device held sensitive data such as health records, ask your DPO or a lawyer.

## Screen lock, a standard account and the built-in antivirus

These three settings stop most opportunistic attacks.

- **A screen lock after five minutes or less.** Mac: System Settings > Lock Screen. Windows: Settings > Accounts > Sign-in options, and Settings > System > Power & battery for the screen timeout. Lock by hand when you stand up: Windows key + L, or Control + Command + Q on a Mac.
- **A standard account for daily work.** From an administrator account, anything malicious you open gets administrator rights too. Create a separate admin account for installing software (Windows: Settings > Accounts > Other users; Mac: System Settings > Users & Groups) and switch your daily account to Standard. When something tries to install itself, the password prompt is your moment to think twice.
- **The built-in antivirus, left on.** Windows has Microsoft Defender Antivirus (in the Windows Security app), macOS has XProtect and Gatekeeper. With updates on, they are enough for most small teams. A free third-party antivirus switches Defender off rather than adding to it, and some push adverts, so I would not swap.

## Phones: updates, a real passcode and official stores

A work phone holds your email, your banking app and your two-factor codes: it is the most valuable device you carry.

1. Automatic updates for the system and the apps. France's national cybersecurity agency, ANSSI, also advises restarting phones regularly.
2. **A passcode of six digits or more**, with Face ID or a fingerprint for daily use. Four digits and swipe patterns are easy to read over a shoulder.
3. Apps from the App Store or Google Play only, with a look at the permissions they request: a torch app has no reason to read your contacts.
4. Theft protection: on an iPhone, Settings > Face ID & Passcode > Stolen Device Protection asks for Face ID or Touch ID, with no passcode fallback, before sensitive changes away from familiar places. Android has comparable settings.
5. Notification previews hidden on the lock screen, so that nobody can read a sign-in code without your face or passcode.

For the accounts themselves, switch on two-factor authentication or passkeys: my {{< a key="two-factor-authentication-passkeys" >}}afternoon plan for 2FA and passkeys{{< /a >}} goes service by service.

## Lost or stolen: switch on location and remote wipe now

Locating, locking and erasing a device only work if the feature was on before it went missing.

| Device | Where to switch it on | What you can do from elsewhere |
|---|---|---|
| iPhone | Settings > your name > Find My | Locate, mark as lost, erase |
| Mac | System Settings > your name > iCloud > Find My Mac | Locate, lock, erase |
| Android phone | Google's Find Hub (formerly Find My Device) | Locate, lock, erase |
| Windows PC | Settings > Privacy & security > Find my device | Locate and lock from your Microsoft account |

Keep **a simple list of every device**: who has it, its serial number, its system version and whether encryption is on. It is what you need on the day a laptop disappears or someone leaves, and my {{< a key="offboarding-checklist" >}}offboarding checklist{{< /a >}} starts from it. If a device does go missing, the first-hour plan linked above gives the steps in order.

## Device management without an IT department

Beyond a handful of devices, checking each one by hand stops working. Device management (often called MDM) lets one person require a passcode, see which devices are out of date and wipe work data remotely. You may already pay for a basic version:

- Google Workspace: Business Starter and Business Standard include fundamental endpoint management; Business Plus adds advanced management, with strong passcode enforcement, mobile security policies and remote device wipe.
- Microsoft 365: every business plan includes Basic Mobility and Security, a free subset of Intune that can wipe enrolled devices; Business Premium adds Intune Plan 1 and Defender for Business.
- Apple: since 14 April 2026, the free Apple Business platform has replaced Apple Business Manager, with built-in management for Macs, iPhones and iPads. It covers the basics; Windows PCs and Android phones still need Intune or Google's tools.

For three people, the device list and a quarterly check are enough. **From five or six devices, or once client data lives on phones**, I would switch on the management your suite already includes; my guide to {{< a key="secure-google-workspace-microsoft-365" >}}securing Google Workspace and Microsoft 365{{< /a >}} covers the admin side.

## Personal devices at work: write the rules down

Most small teams run on personal phones, and some on personal laptops. That is workable with a few rules everyone has read:

- the device has updates, a passcode and encryption on, like a company one;
- work data stays in work accounts and apps, not in a personal cloud drive or a family-shared account;
- on phones, work apps live in a separate space: Android's work profile, or Apple's enrolment for personal devices;
- when someone leaves, their work access goes the same day, and so does the work data on their device.

The risk is real. When the ICO fined LastPass UK £1,228,283 in December 2025 over its 2022 breach, it described an attacker who went from an employee's laptop to a senior employee's personal device, where they obtained the master password ([the ICO's announcement](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/12/password-manager-provider-fined/)). Under the GDPR, client data on a personal phone remains your company's responsibility.

## Public Wi-Fi, VPNs, USB sticks and chargers

Each of these gets more attention than it deserves, with one real point:

- Public Wi-Fi: almost every website and app now encrypts its traffic, so a café network cannot read your email. The remaining risks are fake hotspots named like the real one and sign-in pages asking for an account password. For anything sensitive, use your phone's connection.
- VPNs: useful when your company provides one to reach internal systems. **I would avoid free VPN apps**: all your traffic passes through a company whose business model you do not know.
- USB sticks: never plug in one you found or did not expect, and keep separate sticks for work and personal use, as Cybermalveillance.gouv.fr recommends.
- Public chargers: use your own plug and adapter. On a public USB port, a charge-only cable settles it; refuse any "trust this computer" prompt you did not expect.

## The laptop security checklist for your team

Go through it once per device, then every three months:

1. Automatic updates on for the system, browser and apps, and a restart this week.
2. No Windows 10 PC without a plan.
3. Disk encryption on, recovery key in the password manager.
4. Screen lock after five minutes or less, and a standard account for daily work.
5. Built-in antivirus on, no unknown "security" add-ons.
6. Find My, Find Hub or Find my device on, and tested once.
7. Phones: a passcode of six digits or more, theft protection, previews hidden.
8. Every device on the list, with its user and serial number.
9. Personal devices: rules written down and accepted.
10. Laptop files backed up: my {{< a key="backups-3-2-1" >}}guide to the 3-2-1 backup rule{{< /a >}} explains how.

You do not need me, or anyone, for this list: it is an afternoon's work for a small team. Bring in help when a device behaves strangely after a suspicious email, when a laptop holding client data has gone and you are unsure what to report, or to set up device management across Macs, PCs and phones.
