---
title: "OpenAI API key: how to get one, set a budget and send your first request"
seo_title: "OpenAI API key: how to get one and cap your spending"
description: "How to get an OpenAI API key, keep it out of your website's code, add credits, set a hard spend limit and send your first request, step by step, in 2026."
slug: "openai-api-key"
translationKey: "openai-api-tutorial"
date: 2026-10-17T09:04:00+02:00
lastmod: 2026-10-17T09:04:00+02:00
category: "ai-automation"
article_type: "tutorial"
keywords: ["OpenAI API key", "how to get an OpenAI API key", "OpenAI API pricing", "OpenAI API tutorial", "OpenAI spend limit", "Responses API"]
summary: "To get an OpenAI API key, sign in at platform.openai.com, open the API keys page in the settings, click Create new secret key and store the key in an environment variable called OPENAI_API_KEY. Then add prepaid credits (from $5), set a monthly hard spend limit on the project and send a POST request to https://api.openai.com/v1/responses. A ChatGPT subscription does not include API usage: the API is billed separately, per token."
cover: "openai-api-tutorial"
cover_alt: "A phone showing an email inbox beside a terminal with a curl request and a 200 OK response, under the words OpenAI API"
related: ["claude-api-tutorial", "zapier-vs-make-vs-n8n", "chatgpt-gdpr-client-data", "claude-vs-chatgpt", "build-app-with-ai"]
services: ["automation"]
faq:
  - q: "Is an OpenAI API key free?"
    a: "Creating the key costs nothing; using it does. Requests are paid per token from prepaid credits, with a minimum purchase of $5 at the time of writing (October 2026), and a ChatGPT subscription does not cover them."
  - q: "Is the ChatGPT API the same as the OpenAI API?"
    a: "Yes. “ChatGPT API” is the everyday name for the OpenAI API, which gives your own tools access to OpenAI's GPT models. You manage it on the OpenAI platform (platform.openai.com), not in ChatGPT."
  - q: "Does OpenAI train its models on what I send through the API?"
    a: "Not by default. According to [OpenAI's data controls page](https://developers.openai.com/api/docs/guides/your-data), data sent to the API is not used to train or improve OpenAI's models unless you opt in. OpenAI may keep inputs and outputs for up to 30 days to provide the service and detect abuse, and eligible customers can ask for zero data retention."
  - q: "What should I do if my OpenAI API key leaks?"
    a: "Delete it on the API keys page, create a new key for the tool that used it, then check the usage dashboard for spending you do not recognise. Treat a key pushed to a public repository as leaked, even if you delete the file afterwards."
  - q: "Do OpenAI API credits expire?"
    a: "Yes. Purchased credits expire after one year, OpenAI cannot extend that date, and credits are non-refundable unless the law or a contract requires otherwise. Buy small amounts until you know your monthly usage."
---

An OpenAI API key is the secret code that lets your own tools use OpenAI's models: a form on your website, a spreadsheet, an automation, an internal app. You create it on the OpenAI platform, every request your tool sends carries it, and OpenAI deducts each request from your prepaid credits.

Most people call this the ChatGPT API. The steps are simple, and three of them protect your money: where you keep the key, how much credit you buy and the spend limit you set before the first request.

I use Claude for my own work and have no OpenAI API project of my own to show you, so every step below follows OpenAI's documentation as it stands in October 2026. To see where AI fits in a small business first, read my guide to {{< a key="ai-small-business-guide" >}}AI for small businesses{{< /a >}}.

## What the OpenAI API is, and why ChatGPT Plus does not include it

Three words come up at every step:

- **API** (application programming interface): a way for one piece of software to send a request to another and get an answer back, with nobody clicking.
- **API key**: a long secret string that identifies your account in each request. Whoever holds it can spend your credits.
- **Token**: the unit the API counts and bills, roughly a piece of a word. Prices are per million tokens: one price for input (what you send), a higher one for output (what the model writes).

### ChatGPT and the API are billed separately

| | ChatGPT (chatgpt.com) | OpenAI API (platform.openai.com) |
|---|---|---|
| Who uses it | You, in a chat window | Your tools: a website form, a spreadsheet, an app, an automation |
| How you pay | A plan: Free, Go, Plus, Pro, Business or Enterprise | Per token, from prepaid credits |
| Where you manage it | ChatGPT's settings | The OpenAI platform dashboard |

OpenAI's help centre is explicit: API usage is billed separately from a ChatGPT subscription, Plus included ([OpenAI's page on billing for ChatGPT and the API](https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform)). To chat, write or research, you do not need the API: my comparison of {{< a key="claude-vs-chatgpt" >}}Claude vs ChatGPT{{< /a >}} covers the apps. You need it when a tool, not a person, asks the questions.

## Step 1: sign in to the OpenAI platform and create a project

The OpenAI platform, at `platform.openai.com`, is OpenAI's site for developers: keys, billing, limits and usage all live there. Sign in with your OpenAI account (the same login as ChatGPT, if you have one) or create one.

Your account comes with an organisation and a default project. **Projects keep things apart**: each has its own keys, spend limit and usage, so one faulty tool cannot drain another's budget. Create a project for the tool you are about to build, with a plain name such as `Website form`.

{{< screenshot id="openai-api-tutorial-01" alt="The OpenAI platform after signing in at platform.openai.com, with the project you will use selected" >}}

## Step 2: create your OpenAI API key

1. Open the **API keys** page in the settings (`platform.openai.com/settings/organization/api-keys`).
2. Click **Create new secret key**.
3. Name the key after the tool that will use it, such as `website-form`, so you know which one to delete later.
4. Choose the project the key belongs to.
5. Choose the owner: you, for your tests, or a service account (a non-human identity tied to one project, which only owners can create) for a tool the business relies on.
6. Choose the permissions: **All** (the default), **Restricted** (None, Read or Write for each endpoint) or **Read Only**. All is fine for a first test; a tool in production should get only what it uses.
7. Give the key an expiry date if you can: OpenAI recommends expiring project keys and replacing them regularly.
8. Copy the key as soon as it appears and store it (next step). Treat that window as your only chance: if you lose the key, create a new one and delete the old one.

If the button is missing, your organisation's owners may have restricted which keys members can create.

{{< screenshot id="openai-api-tutorial-02" alt="The API keys page of the OpenAI platform with the Create new secret key button" >}}

{{< screenshot id="openai-api-tutorial-03" alt="The Create new secret key window with the name, project, owner and permissions fields" >}}

## Step 3: store the key where nobody can read it

OpenAI's official libraries read your key from an environment variable called `OPENAI_API_KEY`: a value kept in your computer's settings rather than in your code. On a Mac or on Linux, open Terminal and type:

```bash
export OPENAI_API_KEY="paste-your-key-here"
```

That lasts until you close the window. To keep it, add the same line to your shell's profile file (`~/.zshrc` on a recent Mac). On Windows, open PowerShell and type:

```powershell
setx OPENAI_API_KEY "paste-your-key-here"
```

Then open a new window: `setx` only applies to windows opened afterwards. In a project folder, OpenAI suggests the python-dotenv package: the key sits in a `.env` file listed in `.gitignore`, so it never reaches GitHub.

### Never in your website's front-end code

Anyone can read your site's HTML and JavaScript in the browser's developer tools. OpenAI's own JavaScript library refuses to run in a browser unless you switch on an option called `dangerouslyAllowBrowser`, precisely because it would expose your key. The safe pattern:

```text
Visitor's browser  →  your server or automation tool (holds the key)  →  OpenAI API
Visitor's browser  ←  the answer only                                 ←  OpenAI API
```

No server? Zapier, Make and n8n all have an OpenAI step that keeps your key on their side: my comparison of {{< a key="zapier-vs-make-vs-n8n" >}}Zapier vs Make vs n8n{{< /a >}} helps you choose. And **one key per tool**, never pasted into a public repository, an email, a shared document or a chat with an AI assistant.

{{< callout type="warning" >}}Anyone holding your key can spend your credits until you delete it. Guard it like the PIN of the company card.{{< /callout >}}

## Step 4: add prepaid credits

The API runs on prepaid credits: you buy them first, and each request is deducted from your balance. Open the **Billing** page of the settings, add a card, then buy credits. At the time of writing (October 2026), the minimum purchase is $5 and the default amount $10, according to [OpenAI's guide to prepaid billing](https://help.openai.com/en/articles/8264644-setting-up-and-managing-prepaid-api-billing).

Credits are sold in US dollars; the amount in £ on your statement depends on your bank's rate and fees. Before you pay:

- **Auto-reload is on by default** when you set up billing. While you test, switch it off, or set a monthly recharge limit, which caps what OpenAI buys for you automatically.
- **Credits expire** after one year: buy small amounts until you know your monthly usage.
- **The balance is not an instant cut-off.** Requests made as it runs out can push it below zero; the difference comes off your next purchase.

{{< screenshot id="openai-api-tutorial-04" alt="The Billing page of the OpenAI platform with the credit balance and the automatic top-up setting" >}}

## Step 5: set a hard spend limit

Your balance only caps your spending while auto-reload is off; a spend limit caps what a project can spend each month, whatever the balance. OpenAI calls it a **hard spend limit**: once a project reaches it, the API refuses that project's requests until the next monthly cycle, or until you raise the limit.

Set it in the project's settings, as a monthly amount in US dollars (the only currency and period on offer at the time of writing). With several projects, add a limit for the whole organisation too. According to OpenAI's help centre, the recorded spend can go slightly over the limit before it takes effect.

{{< callout type="tip" >}}While you test, choose a limit you would not mind spending in full. A tool stuck in a loop then stops at your limit, even if auto-reload keeps refilling your balance.{{< /callout >}}

{{< screenshot id="openai-api-tutorial-05" alt="The settings of an OpenAI project with a monthly hard spend limit entered in dollars" >}}

## Step 6: send your first request with cURL

cURL is a command-line tool already installed on macOS and on most Linux systems. With your key in the variable, paste this into Terminal:

```bash
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-6-astra",
    "input": "Suggest three subject lines for an email announcing our new opening hours.",
    "store": false
  }'
```

Line by line:

- `https://api.openai.com/v1/responses`: the Responses API, which OpenAI presents as the main way to use its models (older tutorials use Chat Completions, still supported).
- `Authorization: Bearer`: your key, read from the variable, so it never appears in the command.
- `Content-Type`: the body is in JSON.
- `model`: the model that answers; `gpt-6-astra` is the one in OpenAI's API reference examples.
- `input`: your request, in plain words.
- `store`: `false` asks OpenAI not to keep the response for later retrieval. Left out, it defaults to `true`, and the response data is stored for at least 30 days.

The answer comes back in JSON. Shortened, it looks like this:

```json
{
  "id": "resp_...",
  "status": "completed",
  "model": "gpt-6-astra",
  "output": [
    {
      "type": "message",
      "role": "assistant",
      "content": [{"type": "output_text", "text": "..."}]
    }
  ],
  "usage": {"input_tokens": ..., "output_tokens": ..., "total_tokens": ...}
}
```

The model's text sits in the `output_text` block. A model that reasons first may add a `reasoning` item before the message: ignore it for now. `usage` counts what you pay for, reasoning tokens included in `output_tokens`. In OpenAI's own example, a one-line request used 36 input tokens and its answer 87 output tokens: about $0.005, half a US cent, at GPT-6 Astra's prices.

On Windows, PowerShell handles this command's quotes differently: use the Python version below.

{{< screenshot id="openai-api-tutorial-06" alt="A terminal showing the curl request and the JSON response with the output and usage fields" >}}

## Step 7: send the same request in Python

OpenAI's Python library needs Python 3.10 or later (from python.org). On a Mac or on Linux, create a folder and install the library in it:

```bash
mkdir openai-quickstart && cd openai-quickstart
python3 -m venv .venv && source .venv/bin/activate
pip install openai
```

On Windows, `py -m pip install openai` is enough. Then create `quickstart.py`:

```python
from openai import OpenAI

client = OpenAI()  # reads OPENAI_API_KEY

response = client.responses.create(
    model="gpt-6-astra",
    instructions="You write for a small business in the UK. Use British English.",
    input="Suggest three subject lines for an email announcing our new opening hours.",
    store=False,
)

print(response.output_text)
print(response.usage)
```

Run it with `python quickstart.py` (`py quickstart.py` on Windows): the subject lines appear, then the tokens used. `instructions` holds your standing rules, such as tone and spelling; `output_text` gathers the model's text. The library retries some temporary errors twice by default, and a JavaScript and TypeScript version exists too (`npm install openai`).

{{< screenshot id="openai-api-tutorial-07" alt="A terminal running quickstart.py, with the three subject lines and the usage line below them" >}}

## Which model to choose, and what a request costs

You change model by changing the `model` line. Three current models, at OpenAI's prices at the time of writing (October 2026), per million tokens:

| Model | Value for `model` | Input | Cached input | Output | Note |
|---|---|---|---|---|---|
| GPT-6 Astra | `gpt-6-astra` | $10 | $1 | $50 | OpenAI's most capable model, for the most demanding work |
| GPT-5.5 | `gpt-5.5` | $5 | $0.50 | $30 | The model in the examples of OpenAI's official libraries |
| GPT-6 Luna | `gpt-6-luna` | $0.10 | $0.01 | $0.50 | OpenAI's most efficient model, for focused, high-volume tasks |

Prices change often: check [OpenAI's pricing page](https://openai.com/api/pricing/) before you budget on these figures.

To estimate a cost, multiply. A request that sends 500 tokens (a customer's email plus your instructions) and gets 300 back (a draft reply) costs, on GPT-6 Astra, 500 × $10 / 1,000,000 + 300 × $50 / 1,000,000 = $0.02: about $20 per thousand replies, against $11.50 on GPT-5.5 and $0.20 on GPT-6 Luna. Reasoning tokens come on top, billed as output, so check `usage` on real requests.

To choose, run 20 real requests on GPT-6 Luna and on GPT-6 Astra and compare the answers side by side. **Keep the cheapest model whose answers you would send without rewriting them.** And check the facts it gives you: in my own work, ChatGPT has tended to invent details a bit too often, which is why I use Claude. That is one person's experience, not a benchmark.

Two ways to pay less:

- **Cached input**: the start of a prompt that repeats between requests, such as long standing instructions, costs a tenth of the normal input price on these three models.
- **The Batch API**: for jobs that can wait, you send a file of requests and collect the results within 24 hours, at a separate batch price per model. Compare it with the standard price before counting on the saving.

## Common errors and how to fix them

Errors come back in JSON with a message that usually names the problem; in Python, each status code raises its own error:

| Code | Python error | What it usually means | What to do |
|---|---|---|---|
| 400 | `BadRequestError` | A malformed request: a missing comma, a misspelt field | Read the message, which names the faulty part |
| 401 | `AuthenticationError` | The key is missing, mistyped, deleted or expired | Check the variable is set in this window and holds the whole key |
| 403 | `PermissionDeniedError` | The key lacks the permission, for example a Read Only key | Check the key's permissions and project |
| 404 | `NotFoundError` | A model name with a typo, or a model your account cannot use | Copy the exact `model` value from the table above |
| 429 | `RateLimitError` | Too many requests or tokens too quickly | Wait (see the `Retry-After` header, when present), then slow down |
| 500+ | `InternalServerError` | A server error, or a model temporarily overloaded | Try again a little later |

Requests also fail when your balance is empty or a project hits its hard spend limit, and the message says which: top up, or raise the limit. Every response carries a request ID (`x-request-id` header, `_request_id` in Python): give it to OpenAI's support if you ask about a request.

## Check your usage and costs

OpenAI's usage dashboard shows your organisation's activity and costs. Check it after the first real day of use, then monthly, against what the `usage` figures led you to expect. If you cannot see it, an owner may have restricted it to owners only. Owners can also pull usage and costs into a spreadsheet through OpenAI's Admin API, with an admin key rather than a project key.

A jump you cannot explain deserves a look the same day: a looping tool or a key in the wrong hands keeps spending until your limit stops it.

{{< screenshot id="openai-api-tutorial-08" alt="The usage dashboard of the OpenAI platform with the month's costs" >}}

## What to build next, and when to call a developer

You do not need me, or any developer, to send a first request: if the commands above worked, it is done. The next step is one task you already do every week, not ten ideas at once:

- **Answer leads faster.** Alerts and call-back reminders first, an AI draft second: my tutorial to {{< a key="automate-lead-follow-up" >}}automate lead follow-up{{< /a >}} sets up the alerts for free.
- **Build a small internal tool**, such as a quote calculator: my guide to {{< a key="build-app-with-ai" >}}building an app with AI{{< /a >}} says what is realistic without a developer.
- **Compare with Claude**, whose steps are close to these, in my {{< a key="claude-api-tutorial" >}}Claude API tutorial{{< /a >}}.

Before client data goes through the API, read my guide on {{< a key="chatgpt-gdpr-client-data" >}}what client data you can put into an AI assistant{{< /a >}}: the API has its own terms, but your duties towards your clients stay the same.

Call a developer when the integration sits on your website, handles personal data, takes payments or runs unattended. I build software for my own use, not for sale, so I know the satisfaction of building the tool you need. A tool a whole team relies on every day is a different job: when I brought {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}} more prospects than its team could handle, the client asked me to build an internal app to see everything clearly and never miss a call-back, with AI and phone integrations built in.
