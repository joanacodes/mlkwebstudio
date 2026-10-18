---
title: "How to make AI writing sound human: my method for website copy"
seo_title: "Make AI writing sound human: my method for website copy"
description: "How to make AI writing sound human on your website: real inputs, 3 to 5 examples of your voice, a clear brief, a hard edit. My method, prompts and cut list."
slug: "make-ai-writing-sound-human"
translationKey: "ai-writing-sound-human"
date: 2026-10-17T09:09:00+02:00
lastmod: 2026-10-17T09:09:00+02:00
category: "ai-automation"
article_type: "guide"
keywords: ["make AI writing sound human", "AI website copy", "AI copywriting prompts", "edit AI writing", "AI humaniser", "Claude for copywriting"]
summary: "To make AI writing sound human, change what goes in before you fix what comes out: give the AI facts only your business has, your customers' own words and three to five examples of your voice, with a role and the reason behind each rule. Then edit hard, cutting grand openings, adjectives that stand in for proof and hype, and check every fact before the page goes live. A humaniser tool cannot add what makes copy sound like you: what you know about your business."
cover: "ai-writing-sound-human"
cover_alt: "The word Copywriting under a web page wireframe, beside a phone showing an inbox, held over a laptop"
related: ["deep-research-copywriting-seo", "claude-vs-chatgpt", "write-seo-blog-posts", "write-content-for-ai-search", "web-design-process"]
services: ["websites"]
faq:
  - q: "Which AI writes the most natural website copy?"
    a: "The one you give the best material to. I use Claude: in my work, ChatGPT tends to hallucinate a bit too much, while Claude, and Fable 5.1 in particular, has been extremely accurate. The method works with both."
  - q: "Can I do this with Claude's free plan?"
    a: "Yes. The free plan includes up to five Projects, enough to keep each client's brief, examples and rules apart, with the Sonnet and Haiku models. Research, which I use to collect customer complaints, needs a paid plan such as Pro, and Fable 5.1 runs on Pro's usage credits or comes with Max ([Claude's pricing page](https://claude.com/pricing))."
  - q: "Can I use a competitor's website as an example of the tone I want?"
    a: "No. The AI copies its examples closely, so you would get a page that sounds like your competitor, and reusing their sentences can infringe their copyright. Use your own emails, quotes and answers to customers, or write one paragraph yourself in the tone you want."
  - q: "Should I translate my English copy with AI for a French version of the site?"
    a: "Write each version for its own market instead: the prompt and the examples in the language of the page, with that country's words, examples and prices. A model follows the language and style of what you give it, and a translation keeps the turns of phrase of the original language."
---

AI writing sounds generic when it starts from nothing. Ask for "a home page for a removals firm" and you get the most likely home page for any removals firm: polite and interchangeable. To make AI writing sound human, change what goes in before you fix what comes out, then edit the draft hard.

This is how I write my clients' website copy. Once the visual identity and the page layouts are approved, I do the SEO research and the copywriting, then mix everything together with AI and go round, drafting and editing, until I am happy with the copy and the site. Only then does the client see it.

Below is that method in six steps, with a prompt to adapt and a list of patterns to cut. It is part of my guide to {{< a key="ai-small-business-guide" >}}AI for small businesses{{< /a >}} and fits into my {{< a key="web-design-process" >}}web design process{{< /a >}}.

## Why AI copy sounds generic

A language model writes the most likely next words. With no facts about your business, the most likely page is the average of thousands of similar pages: the same promises and adjectives, in the same reassuring rhythm. Nothing in it is wrong, and nothing in it is yours.

That matters. I want my clients to look good, and their prospects to be a little intimidated by the website, so that the business is taken seriously. It also cuts down on negotiation: a prospect who thinks you are not that respectable will not think you are worth that price. Copy that could belong to anyone works against both.

{{< callout type="tip" >}}**The swap test.** Replace your business's name with a competitor's. If the paragraph still works, it says nothing about you, and a prospect has no reason to choose you over the next result.{{< /callout >}}

The other risk is invented facts: a model short of information fills the gap with something plausible, such as a guarantee nobody gave. In my work, ChatGPT tends to hallucinate a bit too much, while Claude, and Fable 5.1 in particular, has been extremely accurate, which is why I use Claude (my {{< a key="claude-vs-chatgpt" >}}Claude vs ChatGPT{{< /a >}} comparison has the details). Whichever assistant you use, the method below makes invented details easier to catch.

## How to make AI writing sound human: the six steps at a glance

| Step | What you do | Why it works |
|---|---|---|
| 1. Material | Facts, proof and customer words only your business has | The model has something specific to say |
| 2. Examples | Three to five samples of the voice | Examples steer tone better than adjectives |
| 3. Brief | A role, the reason behind each rule, instructions that say what to do | The model applies your reasons to new cases |
| 4. Drafts | One section at a time, several versions of the key lines | You choose instead of settling for the first try |
| 5. Edit | Cut the patterns that make text sound generated | This is where the voice is won or lost |
| 6. Facts | Check every number, name and promise, then show the client | One invented detail can cost a prospect's trust |

## Step 1: give the AI material only your business has

Most of the work happens before the first prompt: the aim is raw material that no competitor could have written.

- **The brief.** I start every website by asking about the company, what it offers and which clients it prefers working with. The answers go into the prompt as plain facts, with the action the page should lead to, such as a call or a quote request.
- **Proof.** The areas you cover, how quickly you answer, what your guarantee includes. One detail a prospect can check does more than three adjectives.
- **Your customers' words.** I use deep research to find what people complain about most in a niche. Those complaints give the copy its angle, and the way customers phrase them makes the best headlines. My method is in {{< a key="deep-research-copywriting-seo" >}}how to use Deep Research for copywriting and SEO{{< /a >}}.
- **The owner's way of talking.** How the owner explains the job on the phone is the voice the site should have. A two-minute voice note, transcribed, can hold better sentences than a first draft.

Take an example, a removals firm in Leeds. Its material could look like this:

```text
Business: removals firm in Leeds, homes and small offices
Area: Leeds and West Yorkshire
Facts: free survey before every quote; fixed price after the survey;
most house moves done in one day; one phone number for any claim
Preferred clients: families moving house, landlords between tenants
Complaints found in reviews: movers arriving late, a price that grows
on the day, breakages nobody takes responsibility for
Action: call, or book a free survey
```

## Step 2: show it your voice with three to five examples

Asking for "friendly but professional" gets you everybody's idea of friendly but professional. Examples work better: Anthropic's [prompting guide](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) calls them one of the most reliable ways to steer tone and structure. It recommends three to five, relevant to the task, varied enough that the model does not copy a single pattern, and wrapped in `<example>` tags so the model can tell them apart from your instructions.

The best examples come from the business itself:

- an email the owner sent a customer, one that got a good reply;
- the owner's answer to a question customers often ask, transcribed;
- a quote that explains the job clearly;
- failing that, a paragraph you write yourself in the voice you want.

{{< callout type="note" >}}Remove names, email addresses and phone numbers from customer emails before you paste them in. My guide to {{< a key="chatgpt-gdpr-client-data" >}}ChatGPT and GDPR{{< /a >}} explains what client data you can put into an AI assistant.{{< /callout >}}

## Step 3: brief the AI like a new colleague

Anthropic's guide suggests treating the model as a brilliant but new employee who lacks context on your norms: if a colleague who knows little about the task would be confused by your prompt, the model will be too. Three habits from that guide change the result on copy:

1. **Give it a role.** One sentence is enough: what it writes, and for whom.
2. **Explain why.** "Three sentences at most" is a rule. Adding "because visitors decide in the first lines whether to read on" lets the model apply the reason to cases you did not foresee.
3. **Say what to do, not what to avoid.** Instead of "don't sound like a robot", describe the voice: "short sentences, concrete facts, 'we' and 'you', the way the owner talks on the phone". Write the prompt in that plain style too, as the style of a prompt can carry over into the answer.

Here is a prompt for the removals firm, built on those habits:

```text
You are the copywriter for a removals firm in Leeds. You write for
people about to move house who worry about the price, the timing
and their belongings.

<brief>
[the material from step 1]
</brief>

<examples>
<example>[an email the owner sent a customer]</example>
<example>[the owner's answer to a common question, transcribed]</example>
<example>[a paragraph from a quote that explains the job]</example>
</examples>

Write the opening section of the home page: a headline, then three
sentences at most, because visitors decide in the first lines whether
to read on. Answer the most frequent complaint in the brief with a
fact from the brief, in the voice of the examples. Use only the facts
in the brief; where one is missing, write [TO CONFIRM] so I can check
it. Give me three versions of the headline.
```

Keep the brief, the examples and the voice rules in a Project in Claude (ChatGPT has projects too). Project instructions apply only to the chats inside that project, so each client keeps its own voice. The **Instructions for Claude** field in **Settings** is the wrong place for one client's voice, because it applies to all your conversations ([Anthropic's help page](https://support.claude.com/en/articles/10185728-understanding-claude-s-personalization-features)).

## Step 4: draft one section at a time and go round

A whole page requested in one go comes back as a whole page of averages. Ask for one section at a time, with several versions of the lines that matter most: the headline, the sentence under it and the call to action. Choosing between three headlines is faster than fixing one.

Then go round, telling the model what works and why: "Version 2 is right, but 'hassle-free' could be any firm: use the fixed price instead." Since AI arrived, my delivery times have shrunk, and the time saved sometimes lets me look for additional solutions for a client.

One last round before your own edit: ask the model to "quote every sentence that would still work for a competitor, and every claim that is not in the brief". It catches some; step 5 catches the rest.

## Step 5: edit hard and cut what sounds generated

Editing is where the copy starts to sound like a person. Read the draft aloud: wherever you run out of breath, or would never say the sentence to a customer, rewrite it. Then go through these patterns:

| What to cut | How to spot it | What to write instead |
|---|---|---|
| Grand openings | A first sentence about the times we live in, or about how stressful something is | The offer or the answer, in the first line |
| Adjectives standing in for proof | "Professional" or "tailored", with nothing to back them | One fact: an area, a time, a guarantee, a number |
| Hype verbs | Verbs that promise to transform the reader's life or business | What actually happens: "we move most homes in one day" |
| Questions as openers | A section that starts by asking the reader something | The problem, stated in the customer's words |
| Mechanical rhythm | Every sentence the same length, ideas always in threes, "not just X, but Y" | Short and long sentences mixed, and as many points as you really have |
| Summaries of the page | A closing paragraph that repeats what was just said | The next step: call, quote, visit |
| Facts nobody gave | Prices, guarantees or claims missing from the brief | [TO CONFIRM], then ask the client |

Here is the removals firm's opening, before and after:

```text
Before (no brief, no examples, no edit):
Moving home is one of the most stressful experiences in life. Our
dedicated team of professionals is committed to delivering a
first-class service tailored to your needs.

After (brief, examples, edit):
House removals in Leeds, done in one day.
We survey your home for free before we quote, and the price we
quote is the price you pay on the day. If anything gets damaged,
you call one number and we handle the claim.
```

**Short and sharp works.** It is my rule for cold emails: the first email is three lines at most, an introduction and a call to action, because people hate receiving long emails they never asked for from people they do not know. A visitor on a service page did not ask for your life story either: give them the offer, the proof and the next step first, and the details further down. I am no PR specialist and barely tried, yet I got a personal trainer friend featured in the French magazine Match, and I credit the copywriting and targeting skills that cold emailing gave me.

## Step 6: check every fact, then show the client

A sentence can sound perfectly human and still be false. Before anything goes live, check every number, price, area, opening hour, guarantee and name against the brief or with the client.

Google now says the same. In October 2026 it updated its [guidance on generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) to call it "critical" to fact-check and review AI-generated content by hand before publishing. Its advice on accuracy covers the metadata too: page titles, meta descriptions and image alt text.

{{< callout type="warning" >}}Search the page for **[TO CONFIRM]** before it goes live. Each one becomes a confirmed fact or disappears, with the sentence around it if needed.{{< /callout >}}

Then I present the site to the client and make changes based on what they say. The client is the last fact-checker: only they know whether the business really answers the phone on Saturdays.

## Humanisers, detectors and Google: what actually counts

Look up this subject and you will find "AI humaniser" tools, which rewrite AI text so that detectors score it as human-written. That solves the wrong problem.

- **Detectors are a poor referee.** OpenAI withdrew its own AI text classifier in July 2023 because of its low rate of accuracy. In OpenAI's tests at launch, it correctly identified 26% of AI-written texts and wrongly labelled 9% of human-written ones as AI-written.
- **Google judges the page, not the tool.** AI-assisted content must meet the same rules as any other, and generating many pages with AI without adding value for users can break Google's spam policy on scaled content abuse.
- **Your prospects are the test that pays.** Nobody runs a service page through a detector before calling. A humaniser can swap words; it cannot add your area, your guarantee or the way you talk to customers.

The same habits make a page worth quoting for ChatGPT, Gemini or Perplexity: clear answers and facts nobody else has. That side is covered in {{< a key="write-content-for-ai-search" >}}how to write content that AI assistants actually quote{{< /a >}}.

## Before you publish: my checklist, and when to hand it over

1. The brief holds the offer, the area, the preferred clients, the proof, the action the page leads to and your customers' words, checked against their sources.
2. Three to five examples of the voice sit in `<example>` tags, with personal data removed.
3. The prompt gives a role and the reason behind each rule, written as what to do.
4. Each section was drafted on its own, with several versions of the key lines.
5. The draft was read aloud, passed the swap test and lost the patterns in the table above.
6. Every fact is checked, no [TO CONFIRM] is left, and the client has approved the page.

The same method works for blog articles, and my guide on {{< a key="write-seo-blog-posts" >}}how to write SEO blog posts{{< /a >}} adds what is specific to them. If you would rather spend that time on your business, the research, the writing and the editing are part of my {{< a page="/services/websites" >}}website projects{{< /a >}}.
