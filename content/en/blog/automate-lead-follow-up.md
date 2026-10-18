---
title: "Automate lead follow-up for free: instant alerts and call-back reminders"
seo_title: "Automate lead follow-up for free with Google Apps Script"
description: "Automate lead follow-up for free with Google Forms, Sheets and Apps Script: an instant email alert, a shared lead list and a reminder when nobody calls back."
slug: "automate-lead-follow-up"
translationKey: "automate-lead-follow-up"
date: 2026-10-17T09:07:00+02:00
lastmod: 2026-10-17T09:07:00+02:00
category: "ai-automation"
article_type: "tutorial"
keywords: ["automate lead follow up", "lead follow-up automation", "Google Apps Script email alert", "Google Forms to Google Sheets", "call-back reminder", "free lead tracker"]
summary: "To automate lead follow-up for free, link a Google Form to a Google Sheet and add a short Google Apps Script. It emails you an alert with the prospect's name and phone number as soon as the form is sent, logs the enquiry in a Leads tab and reminds you if it is still marked New an hour later. Everything runs on a free Google account, with no subscription."
cover: "automate-lead-follow-up"
cover_alt: "The words Apps Script under a flow diagram that starts from an orange lightning trigger, behind ribbed glass"
related: ["zapier-vs-make-vs-n8n", "bespoke-crm-internal-app", "website-conversion-rate", "cold-calling-vs-cold-emailing", "ai-small-business-guide"]
services: ["automation"]
faq:
  - q: "Is Google Apps Script free?"
    a: "Yes. Apps Script comes with every Google account, free Gmail accounts included, and nothing is billed per run. Google limits usage with daily quotas instead, which are higher on a paid Google Workspace account."
  - q: "Does the script keep running when my computer is off?"
    a: "Yes. Triggers run on Google's servers, so alerts and reminders arrive whether your computer is on or off. They stop if you delete the triggers or the spreadsheet."
  - q: "My website form is not a Google Form. Can I still use this?"
    a: "Partly. The instant alert needs a Google Form linked to the spreadsheet, because sending that form is what starts it. The reminder works with any row in the Leads tab marked New, so a connector such as Zapier or Make can copy each submission of your website form into that tab."
  - q: "Can I get a text message instead of an email?"
    a: "Apps Script has no text message service of its own. The simplest option is to turn on notifications for your email app on your phone. For real text messages you need an SMS provider's API or a connector tool, usually on a paid plan."
  - q: "How do I switch the alerts off?"
    a: "Open the Apps Script project, go to the Triggers page (the clock icon) and delete the two triggers. The spreadsheet and the Leads tab stay as they are."
---

The enquiry that waits until tomorrow is often the one a competitor answers today. To automate lead follow-up for free, you need three things: an alert the moment an enquiry arrives, one list where every enquiry has a status, and a reminder when nobody has called back. A Google Form, a Google Sheet and one short Google Apps Script do all three, on a free Google account.

I bring one of my clients, {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, about ten prospects a day. At one point there were more than the team could handle, and the founder asked me for an app to see everything clearly and never forget to call a prospect back. That app is custom-coded and does far more than follow-up. You do not need one to start: the setup below covers the two things that matter most, the alert and the reminder.

This tutorial takes you from an empty form to working alerts in six steps, with code you can copy as it is. It is part of my guide to {{< a key="ai-small-business-guide" >}}AI for small businesses{{< /a >}}, which covers the automations that really save time.

## What you need to automate lead follow-up for free

Everything happens in one Google spreadsheet, in three parts:

| Part | What it does | When |
|---|---|---|
| Instant alert | Emails you the prospect's name and phone number in the subject line, with every answer in the body | As soon as the form is sent |
| Follow-up list | Keeps one row per enquiry in a Leads tab, with a status: New, Called, Quote sent or Not interested | Filled in by the script, updated by you |
| Call-back reminder | Emails you the leads still marked New after an hour | Checked every 15 minutes, during your working hours |

You need a Google account (a free Gmail account works), a computer for the setup, and a phone with your email app and the Google Sheets app for daily use.

Google Forms can already email you when a response arrives: in the **Responses** tab, the three-dot menu offers **Get email notifications for new responses**. Each collaborator has to switch it on for themselves, though, and it keeps no follow-up list and reminds nobody. The script adds those two parts.

## Why speed matters, and why missed calls count too

An enquiry is worth the most in its first hour. A study published in Harvard Business Review in 2011, based on 1.25 million leads received by US companies, found that firms that tried to reach a lead within an hour were nearly seven times as likely to qualify it as firms that tried even an hour later ([HBR](https://hbr.org/2011/03/the-short-life-of-online-sales-leads)).

My cold email campaigns point the same way. I do everything for the client except replying: the replies and the calls go to the client, and the first results arrive within the first 36 hours. **The follow-up has to be ready before the first email goes out.**

Many of those prospects do not reply: they call. I put a phone number in the email and invite them to. A call is faster than a reply that gets buried among other emails, it feels like ticking an item off a to-do list, and people like talking to a real person. I go into the reasons in {{< a key="cold-calling-vs-cold-emailing" >}}cold calling vs cold emailing{{< /a >}}. For your follow-up, it means that missed calls belong in the same list as the forms, or they get forgotten. Step 6 shows how.

## Step 1: create the enquiry form

In Google Forms (`forms.google.com`), create a blank form and add four questions. Keep these titles, or note yours: the script finds each answer by its exact title.

| Question title | Type | Required |
|---|---|---|
| Name | Short answer | Yes |
| Phone number | Short answer | Yes |
| Email | Short answer | No |
| What do you need? | Paragraph | Yes |

Make the phone number required: if a prospect prefers to talk, you need a number to call back. In the form description, add one sentence on how you use the details, with a link to your privacy notice.

To put the form on your website, click **Send**, then the embed icon (`< >`), and paste the code into a page. A link to the form from a button works too.

{{< screenshot id="automate-lead-follow-up-01" alt="A Google Form with four questions: Name, Phone number, Email and What do you need?" >}}

## Step 2: link the form to a Google Sheet

1. In the form, open the **Responses** tab and click **Link to Sheets**.
2. Choose to create a new spreadsheet, and confirm.
3. In the spreadsheet that opens, go to **File > Settings** and check the time zone (London for the UK): the reminders follow it.

The first tab holds the raw responses, one row per enquiry. Leave it as it is: the script keeps its own list in a separate tab.

{{< screenshot id="automate-lead-follow-up-02" alt="The Responses tab of a Google Form with the Link to Sheets button" >}}

## Step 3: paste the script

In the spreadsheet, click **Extensions > Apps Script**. The editor opens in a new tab with an empty function called `myFunction`. Delete it, paste the code below and change the settings at the top:

- `ALERT_TO`: who receives the alerts and reminders. Separate several addresses with commas.
- `QUESTIONS`: the titles of your questions, if they differ from the table above.
- `OPEN_HOUR` and `CLOSE_HOUR`: your working hours, on the 24-hour clock. Alerts are always sent; reminders wait for opening time.

```javascript
/** @OnlyCurrentDoc */
// Lead follow-up: instant alert, Leads list and call-back reminder.

// Settings: change these lines only
const ALERT_TO = 'you@example.co.uk';  // several addresses: separate them with commas
const LEADS_TAB = 'Leads';
const REMIND_AFTER_MINUTES = 60;       // remind when a lead is still New after this delay
const OPEN_HOUR = 8;                   // reminders only between these hours (24-hour clock)
const CLOSE_HOUR = 19;
const QUESTIONS = {                    // the exact titles of your form questions
  name: 'Name',
  phone: 'Phone number',
  email: 'Email',
  message: 'What do you need?',
};

// Run once: creates the Leads tab and the two triggers
function setup() {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(LEADS_TAB);
  if (!sheet) {
    sheet = ss.insertSheet(LEADS_TAB);
    sheet.appendRow(['Received', 'Name', 'Phone', 'Email', 'Message', 'Status', 'Reminder sent']);
  }
  const statuses = SpreadsheetApp.newDataValidation()
    .requireValueInList(['New', 'Called', 'Quote sent', 'Not interested']).build();
  sheet.getRange('F2:F').setDataValidation(statuses);
  ScriptApp.getProjectTriggers().forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('onNewEnquiry').forSpreadsheet(ss).onFormSubmit().create();
  ScriptApp.newTrigger('remindUncalledLeads').timeBased().everyMinutes(15).create();
}

// Runs by itself each time the form is sent
function onNewEnquiry(e) {
  const ss = SpreadsheetApp.getActive();
  const answer = (title) => (e.namedValues[title] || [''])[0];
  const name = answer(QUESTIONS.name);
  const phone = answer(QUESTIONS.phone);
  const details = Object.keys(e.namedValues)
    .map((title) => title + ': ' + e.namedValues[title].join(', ')).join('\n');
  MailApp.sendEmail(ALERT_TO, 'New enquiry: ' + name + ', ' + phone,
    details + '\n\nFollow-up list: ' + ss.getUrl());
  // The ' keeps answers as text: a leading 0 stays and no formula can run
  ss.getSheetByName(LEADS_TAB).appendRow([new Date(), "'" + name, "'" + phone,
    "'" + answer(QUESTIONS.email), "'" + answer(QUESTIONS.message), 'New', '']);
}

// Runs every 15 minutes: one reminder per lead still New after the delay
function remindUncalledLeads() {
  const ss = SpreadsheetApp.getActive();
  const zone = ss.getSpreadsheetTimeZone();
  const hour = Number(Utilities.formatDate(new Date(), zone, 'H'));
  if (hour < OPEN_HOUR || hour >= CLOSE_HOUR) return;
  const sheet = ss.getSheetByName(LEADS_TAB);
  const rows = sheet.getDataRange().getValues();
  const waiting = [];
  for (let i = 1; i < rows.length; i++) {
    const [received, name, phone, email, message, status, reminded] = rows[i];
    if (status !== 'New' || reminded) continue;
    if (!(received instanceof Date)) {         // row typed by hand: the clock starts now
      sheet.getRange(i + 1, 1).setValue(new Date());
      continue;
    }
    if (Date.now() - received.getTime() < REMIND_AFTER_MINUTES * 60000) continue;
    waiting.push(name + ', ' + phone + ', received ' + Utilities.formatDate(received, zone, "dd/MM 'at' HH:mm"));
    sheet.getRange(i + 1, 7).setValue(new Date());
  }
  if (waiting.length > 0) {
    MailApp.sendEmail(ALERT_TO, 'Call back: ' + waiting.length + ' lead(s) still waiting',
      waiting.join('\n') + '\n\nFollow-up list: ' + ss.getUrl());
  }
}
```

Save with Ctrl+S (Cmd+S on a Mac), then click the project's name at the top to rename it, for example Lead follow-up.

{{< screenshot id="automate-lead-follow-up-03" alt="The Apps Script editor with the lead follow-up script pasted and the settings at the top" >}}

### What the script does

- `setup` creates the Leads tab and its status dropdown, then two triggers, which tell Google to run a function by itself: one on each form submission, one every 15 minutes. It deletes the project's old triggers first, so running it twice never doubles the alerts.
- `onNewEnquiry` sends the alert, then adds the enquiry to the Leads tab with the status New.
- `remindUncalledLeads` finds the leads still marked New after `REMIND_AFTER_MINUTES`, sends one email listing them and writes the time in the Reminder sent column, so that each lead is reminded once.

The first line, `@OnlyCurrentDoc`, restricts the script to this spreadsheet: it cannot open your other files. It sends through MailApp, a service that can send email but cannot read your inbox.

{{< callout type="tip" >}}To change a setting later, edit it and save: the triggers always run the latest saved code. **Run `setup` again only if you rename the Leads tab or a function.**{{< /callout >}}

## Step 4: run the setup and authorise the script

1. In the toolbar, pick `setup` in the list of functions and click **Run**.
2. Google asks for your permission: click **Review permissions** and choose your account.
3. On a free Gmail account, Google will probably warn that it hasn't verified the app. That is expected for a script you created and Google has not reviewed: click **Advanced**, then **Go to Lead follow-up (unsafe)**.
4. Allow every permission listed: editing this spreadsheet, sending email as you and running when you are not there. If Google shows checkboxes, tick them all, or the script stops with a permission error.

The execution log at the bottom of the editor shows the run complete. Back in the spreadsheet, a Leads tab has appeared, with a dropdown in the Status column. In the editor's left sidebar, click the clock icon (**Triggers**): two triggers are listed, one for form submissions and one time-driven.

{{< screenshot id="automate-lead-follow-up-04" alt="The Triggers page of the Apps Script project with two triggers, one on form submit and one every 15 minutes" >}}

{{< callout type="warning" >}}Anyone who can edit the spreadsheet can also open and change its script, and the triggers keep running under your account. **Give edit access only to people you trust**, and paste only code you have read or that comes from a source you trust.{{< /callout >}}

## Step 5: test the alert and the reminder

1. In the form editor, click the eye icon (**Preview**) and send a test enquiry with your own name and phone number.
2. The alert should reach your inbox within moments, with the name and number in the subject line. If it does not, check your spam folder.
3. In the Leads tab, the enquiry appears with the status New.
4. To test the reminder without waiting an hour, set `REMIND_AFTER_MINUTES` to 0, save, pick `remindUncalledLeads` in the list of functions and click **Run**, during your working hours. A reminder arrives, and the Reminder sent column shows the time.
5. Set `REMIND_AFTER_MINUTES` back to 60, save, and set the test lead to Not interested.

{{< screenshot id="automate-lead-follow-up-05" alt="The alert email in Gmail, with the prospect's name and phone number in the subject line" >}}

## Step 6: use it every day, missed calls included

From now on, the only manual step is the status. Whoever calls a prospect back changes New to Called, then to Quote sent or Not interested. The Google Sheets app on a phone is enough for that, between two appointments.

- Missed calls: when you miss a call and cannot return it straight away, add a row to the Leads tab with the name, the phone number, "Missed call" in Message and New in Status. Leave Received empty: the script fills in the time at its next check, and the reminder works as it does for a form.
- The team: share the spreadsheet with the people who call prospects back (**Share**, top right) and add their addresses to `ALERT_TO` if they should get the alerts.
- The columns: do not rename, move or delete the seven columns of the Leads tab, because the script reads them by position. Add your own from column H onwards.

{{< screenshot id="automate-lead-follow-up-06" alt="The Leads tab with the Received, Name, Phone, Email, Message, Status and Reminder sent columns, and the status dropdown open" >}}

### Keep the list lean

The Leads tab and the alert emails hold personal data: names, phone numbers, sometimes the details of a project. Share the spreadsheet only with those who need it, and decide how long you keep leads who never became clients. The ICO's guidance on [storage limitation](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-data-protection-principles/storage-limitation/) says the law sets no fixed period: you choose one you can justify, and you cannot keep data just in case. Once a month, delete the rows and the alert emails you no longer need.

## Google Apps Script limits on a free account

Google sets daily quotas for each account. These are the ones that matter here, at the time of writing (October 2026):

| | Free Gmail account | Google Workspace |
|---|---|---|
| Email recipients a day, all scripts together | 100 | 1,500 |
| Time per run | 6 minutes | 6 minutes |
| Total trigger time a day | 90 minutes | 6 hours |

Each alert counts one recipient per address in `ALERT_TO`. With ten enquiries a day sent to two people, the alerts use 20 recipients and the reminders a few more: well within the free limit. A run of this script takes seconds, so its 96 checks a day stay far below the trigger limit.

Google resets the quotas 24 hours after the first request and can change them without notice: check the [Apps Script quotas page](https://developers.google.com/apps-script/guides/services/quotas) if your volume grows.

## Troubleshooting

The **Executions** page, in the editor's left sidebar, lists every run with its status and any error message.

| Symptom | Likely cause | Fix |
|---|---|---|
| No alert after a test | A typo in `ALERT_TO`, or the email went to spam | Check the address and the spam folder, then the Executions page |
| Error `Cannot read properties of undefined (reading 'namedValues')` | `onNewEnquiry` was started with Run, but it needs a form submission | Test by sending the form |
| Two alerts per enquiry | A second form trigger, for example one added by hand | Run `setup` again: it deletes the old triggers first |
| Name or phone empty in the Leads tab | A title in `QUESTIONS` differs from the form | Copy the titles from the form, character for character |
| No reminder | Status not exactly New, outside working hours, or the wrong time zone | Check the Status cell, the hour settings and File > Settings |
| Error `Service invoked too many times for one day: email` | The daily email quota is used up | Fewer addresses in `ALERT_TO`, or a Workspace account |

## When to move on to Zapier, Make or an app of your own

This setup suits one or two people and a few dozen enquiries a day. Three signs you have outgrown it:

1. Your enquiries come from several places (website, booking tool, email, phone) and you want them in one list without copying anything. Connector tools do this without code: at the time of writing, Zapier's free plan includes 100 tasks a month and Make's 1,000 credits, and my comparison of {{< a key="zapier-vs-make-vs-n8n" >}}Zapier, Make and n8n{{< /a >}} shows what each costs beyond that.
2. Leads turn into jobs, schedules and invoices, and several people need different views. That is where my client needed a custom app: prospects, job sites, messages to the team, the calendar and accounting analytics in one place, with AI and phone integrations. My guide to a {{< a key="bespoke-crm-internal-app" >}}bespoke CRM{{< /a >}} helps you decide whether you are there.
3. You want help sorting or answering enquiries. An AI step can label each one (quote request, question, spam) or draft a reply, and my {{< a key="claude-api-tutorial" >}}Claude API tutorial{{< /a >}} shows how to get a key with a spending limit. Keep the call back human.

If too few enquiries arrive in the first place, the problem is upstream: my guide on {{< a key="website-conversion-rate" >}}why a website gets no enquiries{{< /a >}} shows where visitors drop off.

You do not need me to set this up: the six steps and a test enquiry are enough. Run it for a month, missed calls included, and you will know how quickly you really call back, and what the next tool has to do.
