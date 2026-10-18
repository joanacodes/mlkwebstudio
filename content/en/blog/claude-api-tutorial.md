---
title: "Claude API key: how to get one and send your first request"
seo_title: "How to get a Claude API key and send your first request"
description: "How to get a Claude API key in the Claude Console, keep it safe, set a spend limit and send your first request, with each model's price in October 2026."
slug: "claude-api-key"
translationKey: "claude-api-tutorial"
date: 2026-10-17T09:03:00+02:00
lastmod: 2026-10-17T09:03:00+02:00
category: "ai-automation"
article_type: "tutorial"
keywords: ["Claude API key", "how to get a Claude API key", "Anthropic API key", "Claude API tutorial", "Claude API pricing", "Claude Console"]
summary: "To get a Claude API key, sign in to the Claude Console at platform.claude.com, open the API keys page, click Create key and copy the key: it starts with sk-ant- and is shown only once. Store it in an environment variable called ANTHROPIC_API_KEY, set a spend limit on the Billing page, then send a POST request to https://api.anthropic.com/v1/messages. API usage is billed per token, separately from a Claude Pro subscription."
cover: "claude-api-tutorial"
cover_alt: "A terminal showing a curl request to a messages endpoint and a 200 OK response, beside the words Claude API"
related: ["openai-api-tutorial", "build-app-with-ai", "automate-lead-follow-up", "claude-vs-chatgpt", "chatgpt-gdpr-client-data"]
services: ["automation"]
faq:
  - q: "Is a Claude API key the same as an Anthropic API key?"
    a: "Yes. Anthropic makes Claude, and its documentation uses both names for the same key. You create it on the API keys page of the Claude Console, and it starts with sk-ant-."
  - q: "What should I do if my Claude API key leaks?"
    a: "Delete it on the API keys page of the Claude Console (Disable also stops it, and can be undone), create a new key for the tool that used it, then check the Usage page for spending you do not recognise. Treat a key pushed to a public repository as leaked, even if you delete the file afterwards."
  - q: "Does Anthropic train its models on what I send to the API?"
    a: "No, according to Anthropic's commercial terms, which cover the API: they state that Anthropic “may not train models on Customer Content from Services”. The training choice introduced in 2025 for Free, Pro and Max accounts does not apply to the API."
  - q: "How long does a Claude API key stay valid?"
    a: "Until the expiration you set when you created it, unless you disable or delete it first. Anthropic emails the key's creator before a key with a lifetime of seven days or more expires. An expired key returns a 401 authentication_error and cannot be reactivated: create a new one."
  - q: "Can I set a separate budget for each project?"
    a: "Yes, with workspaces. Create one workspace per project in the Claude Console, scope each key to its workspace and set a spend limit for each one. The default workspace cannot have a limit of its own."
---

A Claude API key is the secret code that lets your own tools talk to Claude: a website form, a spreadsheet, an internal app. You create it in the Claude Console, on the **API keys** page, and every request your tool sends carries it. Anthropic then bills your account for the tokens each request uses.

Claude is the AI I use for my own work. The internal app I custom-built for {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, to manage prospects, job sites, communication with employees, the calendar and accounting analytics, also has AI and phone integrations. Features like these do not run on a chat subscription: they go through an API, with its own key and its own bill.

Menu and button names are those given in Anthropic's documentation in October 2026. To see where AI fits in a small business, start with my guide to {{< a key="ai-small-business-guide" >}}AI for small businesses{{< /a >}}.

## What an API, an API key and a token are

Four words come up in every step:

- **API** (application programming interface): a door that lets one piece of software send a request to another and get an answer back, without anyone clicking.
- **Claude API**: Anthropic's door to its Claude models. Your tool sends text, and Claude sends its answer back as data your tool can use.
- **API key**: a long secret string that identifies your account in each request. Whoever holds it can spend your credit.
- **Token**: the unit the API counts and bills, a piece of a word. Anthropic puts a million tokens at roughly 555,000 words on its current models.

Prices are quoted per million tokens, with one price for input (what you send: your instructions and the text to work on) and a higher one for output (what Claude writes back).

### The Claude app and the Claude API are billed separately

| | Claude app (claude.ai) | Claude API (Claude Console) |
|---|---|---|
| Who uses it | You, in a chat window | Your tools: a website, a spreadsheet, an app, an automation |
| How you pay | A plan: Free, Pro, Max, Team or Enterprise | Per token, from credits bought in advance |
| Where you manage it | The settings of claude.ai | platform.claude.com |

A Claude Pro subscription does not include API usage. The Max plans are the exception: Anthropic's plans page lists $100 to $200 of API credits a month with them. If all you want is to chat, write or research with Claude, you do not need the API: my comparison of {{< a key="claude-vs-chatgpt" >}}Claude vs ChatGPT{{< /a >}} covers the apps. The API is for the moment a tool, not a person, has to ask the questions.

## Step 1: create your Claude Console account

The Claude Console is Anthropic's site for developers, at `platform.claude.com`. Sign in, or create an account if you do not have one yet. This is where you manage your keys, credits, limits and usage, and it also lets you write and test prompts in your browser before you write any code.

{{< screenshot id="claude-api-tutorial-01" alt="The Claude Console sign-in page at platform.claude.com" >}}

## Step 2: create your Claude API key

1. In the Console, open the **API keys** page (`platform.claude.com/settings/keys`).
2. Click **Create key**.
3. Give the key a name that says where it will be used, such as `website-form` or `quotes-sheet`. Once you have three keys, you will know which one to revoke.
4. Choose an expiration: a preset from 3 hours to 30 days, a custom duration, or **Never**. You cannot change it later.
5. Set **Linked account** to yourself for your tests. For anything shared, such as a tool your website relies on, Anthropic recommends a service account key: a personal key stops working if you leave the organisation.
6. If you wish, choose a workspace for the key, which keeps your projects apart.
7. Copy the key. It starts with `sk-ant-`, and the Console shows it **only once**, at creation. If you lose it, you cannot view it again: create a new one.

If the **Create key** button is greyed out, your role in the organisation probably does not allow you to create keys: ask an admin. [Anthropic's page on API keys](https://platform.claude.com/docs/en/get-api-key) explains each type of key.

{{< screenshot id="claude-api-tutorial-02" alt="The Create key window in the Claude Console with the name, expiration, Linked account and workspace fields" >}}

{{< screenshot id="claude-api-tutorial-03" alt="A new API key shown once after creation, starting with sk-ant-, with most of its characters blurred" >}}

## Step 3: store the key where nobody can read it

Anthropic's official libraries read your key from an environment variable called `ANTHROPIC_API_KEY`: a value kept in your computer's settings rather than in your code. On a Mac or on Linux, open Terminal and type:

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

That lasts until you close the window. To keep it, add the same line to your shell's profile file (`~/.zshrc` on a recent Mac). On Windows, open PowerShell and type:

```powershell
setx ANTHROPIC_API_KEY "sk-ant-..."
```

Then open a new window: `setx` saves the variable for the windows you open next, not for the current one.

Four rules, whatever you build:

- **Never in front-end code.** Every visitor can read your website's HTML and JavaScript. The request must leave from a server or an automation tool that holds the key.
- **Never in a public repository.** If your code is on GitHub, keep the key in a `.env` file listed in `.gitignore`, so that it is never uploaded.
- **Never in an email or a shared document**, and not in a chat with an AI assistant either.
- **One key per tool.** You can then revoke one without breaking the others.

{{< callout type="warning" >}}Whoever has your key can spend your credit until you revoke it. Treat it like the PIN of your business bank card, not like a password you can reset by email.{{< /callout >}}

## Step 4: add credits and set a spend limit

Anthropic says on its [pricing page](https://platform.claude.com/docs/en/about-claude/pricing) that “new users receive a small amount of free credits to test the API”. Beyond that, you buy credits by card on the **Billing** page (`platform.claude.com/settings/billing`). All payments are in US dollars: a UK card is charged in dollars, and the amount in £ on your statement depends on your bank's exchange rate and fees.

Set a spend limit before your first request, not after your first surprise:

1. Open the **Billing** page.
2. In the **Spend limits** section, click **Set limit** (or **Adjust limit** if a limit already exists).
3. Enter a monthly amount. It cannot exceed your tier's cap.

When usage reaches your limit, the API refuses requests with an error message that says when access resumes. Raise the limit to restore access sooner.

Your tier's cap is $500 a month on the Start tier, $1,000 on Build and $200,000 on Scale, according to Anthropic's [page on rate limits](https://platform.claude.com/docs/en/api/rate-limits). New organisations may start in a lower Evaluation tier, whose limits rise as the account builds a usage history.

{{< callout type="tip" >}}While you test, set a limit you would not mind spending in full, then raise it when a real tool goes live. A tool stuck in a loop stops at your limit, not at your tier's cap.{{< /callout >}}

{{< screenshot id="claude-api-tutorial-04" alt="The Billing page of the Claude Console with the Spend limits section and its Set limit button" >}}

## Step 5: send your first request with cURL

cURL is a command-line tool already installed on macOS and on most Linux systems. With your key in the variable, paste this into Terminal:

```bash
curl https://api.anthropic.com/v1/messages \
  -H "content-type: application/json" \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-opus-5-5",
    "max_tokens": 1000,
    "messages": [
      {"role": "user", "content": "Suggest three subject lines for an email announcing our new opening hours."}
    ]
  }'
```

Line by line:

- `https://api.anthropic.com/v1/messages`: the Messages API, where every request goes.
- `x-api-key`: your key, read from the variable, so it never appears in the command.
- `anthropic-version: 2023-06-01`: the version of the API's format, required on every request (not the model's age).
- `content-type`: the body is in JSON.
- `model`: the model that answers; Anthropic recommends starting with `claude-opus-5-5`.
- `max_tokens`: the most tokens Claude may produce, its reasoning included. Beyond it, the answer is cut off.
- `messages`: the conversation, here one message from you (`user`).

The answer comes back in JSON. Shortened, it looks like this:

```json
{
  "id": "msg_...",
  "type": "message",
  "role": "assistant",
  "model": "claude-opus-5-5",
  "content": [
    {"type": "text", "text": "..."}
  ],
  "stop_reason": "end_turn",
  "usage": {"input_tokens": ..., "output_tokens": ...}
}
```

Claude's answer sits in the block of type `text`. If the model reasoned before answering, a block of type `thinking` may come first: you can ignore it for now. `stop_reason` reads `end_turn` when the answer is complete and `max_tokens` when it was cut off. `usage` gives the tokens you pay for: in Anthropic's own [quickstart](https://platform.claude.com/docs/en/get-started), a one-line question used 21 input tokens and its answer 305 output tokens, about $0.006 on Opus 5.5.

On Windows, PowerShell handles the quotes and line breaks of this command differently, so use the Python version below instead.

{{< screenshot id="claude-api-tutorial-05" alt="A terminal showing the curl request and Claude's JSON response with the content, stop_reason and usage fields" >}}

## Step 6: send the same request in Python

Anthropic's Python library adds the headers for you and retries temporary errors on its own, twice by default. If Python is not on your computer, install it from python.org. Then, on a Mac or on Linux, create a folder for the project and install the library in it:

```bash
mkdir claude-quickstart && cd claude-quickstart
python3 -m venv .venv && source .venv/bin/activate
pip install anthropic
```

On Windows, `py -m pip install anthropic` is enough. Then create a file called `quickstart.py`:

```python
import anthropic

client = anthropic.Anthropic()  # reads ANTHROPIC_API_KEY

message = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=1000,
    messages=[
        {
            "role": "user",
            "content": "Suggest three subject lines for an email announcing our new opening hours.",
        }
    ],
)

for block in message.content:
    if block.type == "text":
        print(block.text)

print(message.usage)
```

Run it with `python quickstart.py` (`py quickstart.py` on Windows). Claude's subject lines appear, followed by the tokens used. Anthropic publishes the same example for TypeScript, Java, Go, C#, PHP and Ruby.

{{< screenshot id="claude-api-tutorial-06" alt="A terminal running quickstart.py, with Claude's three subject lines and the usage line below them" >}}

## Which Claude model to choose, and what it costs

You change model by changing one line, the `model` value. Here are the four current models, at Anthropic's prices at the time of writing (October 2026):

| Model | Value for `model` | Input, per million tokens | Output, per million tokens | Anthropic suggests it for |
|---|---|---|---|---|
| Claude Fable 5.1 | `claude-fable-5-1` | $10 | $50 | Demanding reasoning, long multi-step work |
| Claude Opus 5.5 | `claude-opus-5-5` | $4 | $20 | The starting point when you are unsure |
| Claude Sonnet 5.5 | `claude-sonnet-5-5` | $2 | $10 | The best mix of speed and intelligence |
| Claude Haiku 5.5 | `claude-haiku-5-5` | $0.10 | $0.50 | High volumes and fast answers: sorting, extracting |

Haiku's prices apply to prompts of up to 100,000 tokens; above that, they rise to $0.50 and $2.50.

To estimate a cost, multiply. Say a request sends 500 tokens (a customer's email and your instructions) and gets 300 back (a draft reply). On Opus 5.5, that is 500 × $4 / 1,000,000 + 300 × $20 / 1,000,000 = $0.008, so about $8 for a thousand replies. The same thousand cost about $0.20 on Haiku 5.5 and $20 on Fable 5.1. On Opus 5.5 and Fable 5.1, thinking is always on: the model decides how long to reason before it answers, and that reasoning is billed as output tokens. Check `usage` on real requests before you trust an estimate.

In my work, Claude, and Fable 5.1 in particular, has been extremely accurate. Fable costs two and a half times as much as Opus 5.5, so start with Opus 5.5 and switch the `model` line to `claude-fable-5-1` for the requests where a mistake would cost you more than the difference.

Two discounts are worth knowing from the start:

- **The Batch API** halves the price of input and output for requests that can wait: you send a batch, then collect the results later. Rewriting a hundred product descriptions overnight is a typical case.
- **Prompt caching** stores the instructions you resend with every request. Writing them to the cache costs a little more than normal input; reading them back costs 5% of the normal input price on Opus 5.5 and Sonnet 5.5.

## Common errors and how to fix them

Errors come back in JSON, with a type and a message that usually says what went wrong. The ones you are most likely to meet:

| Code | Type | What it usually means | What to do |
|---|---|---|---|
| 401 | `authentication_error` | The key is missing, mistyped, revoked or expired | Check that the variable is set in this window and that you copied the whole key |
| 400 | `invalid_request_error` | The request is malformed (a missing comma, a missing field), or you reached the spend limit you set | Read the message, which says which. For a limit, raise it on the Billing page |
| 404 | `not_found_error` | A model name with a typo, or a model your account cannot use | Copy the exact `model` value from the table above |
| 402 | `billing_error` | A problem with your billing or payment details | Check your card on the Billing page |
| 429 | `rate_limit_error` | Too many requests or tokens per minute, or your tier's monthly cap is reached | Wait and retry. For the cap, use Request tier increase on the Rate limits page |
| 529 | `overloaded_error` | The API is temporarily overloaded | Try again a little later |

Every response also carries a request ID, shown as `request_id` in an error. If you contact Anthropic's support about a request, give them that ID.

## Check your usage and limits in the Console

Two pages of the Console show where the money goes:

- **Usage** (`platform.claude.com/usage`): charts of tokens and requests, plus your headroom under the rate limits. Look at it after the first real day of use, then once a month.
- **Rate limits** (`platform.claude.com/usage/limits`): your tier, your limits for each model and the **Request tier increase** button.

A jump you cannot explain deserves a look the same day: a tool repeating the same request, or a key in the wrong hands, keeps spending until someone stops it.

{{< screenshot id="claude-api-tutorial-07" alt="The Usage page of the Claude Console with the month's token and request charts" >}}

## What to build next, and when to call a developer

You do not need me, or any developer, to send a first request: if the commands above worked, it is done. The useful next step is one task you already do every day, not ten ideas at once:

- **Answer leads faster.** Alerts and call-back reminders come first; a drafted reply can follow. My tutorial on how to {{< a key="automate-lead-follow-up" >}}automate lead follow-up{{< /a >}} sets up the alerts for free.
- **Give Claude standing instructions.** A `system` prompt holds what applies to every request: your tone, UK English, what to do when a fact is missing.
- **Build a small internal tool**, such as a quote calculator. My guide to {{< a key="build-app-with-ai" >}}building an app with AI{{< /a >}} sets out what is realistic without a developer.
- **Compare with OpenAI**, whose steps are much the same: see my tutorial on the {{< a key="openai-api-tutorial" >}}OpenAI API key{{< /a >}}.

Before you send client data through the API, check what GDPR allows in my guide on {{< a key="chatgpt-gdpr-client-data" >}}what client data you can put into an AI assistant{{< /a >}}. The API has its own terms, but your duties towards your clients stay the same.

Call a developer when the integration sits on your website, handles personal data, takes payments or runs unattended. I build software for my own use, not for sale, and I know how satisfying it is to build the tool you need. A tool a whole team depends on is another matter: when I brought Pilotech more prospects than its team could handle, the client asked for an app to see everything clearly and never miss a call-back. I describe that project in {{< a key="bespoke-crm-internal-app" >}}bespoke CRM for a small business{{< /a >}}.
