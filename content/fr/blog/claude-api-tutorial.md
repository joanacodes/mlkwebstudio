---
title: "API Claude : créer sa clé API et envoyer sa première requête (tutoriel)"
seo_title: "API Claude : créer sa clé et envoyer sa première requête"
description: "Tutoriel API Claude : créer votre clé dans la Claude Console, la protéger, plafonner vos dépenses, envoyer une première requête et comparer les prix."
slug: "api-claude-tutoriel"
translationKey: "claude-api-tutorial"
date: 2026-10-17T09:03:00+02:00
lastmod: 2026-10-17T09:03:00+02:00
category: "ai-automation"
article_type: "tutorial"
keywords: ["API Claude", "clé API Claude", "API Anthropic", "tutoriel API Claude", "prix API Claude", "Claude Console"]
summary: "Pour utiliser l’API Claude, créez un compte sur la Claude Console (platform.claude.com), ouvrez la page API keys, cliquez sur Create key et copiez la clé : elle commence par sk-ant- et ne s’affiche qu’une fois. Rangez-la dans une variable d’environnement ANTHROPIC_API_KEY, fixez un plafond de dépenses dans Billing, puis envoyez une requête POST à https://api.anthropic.com/v1/messages. L’API se paie au token, en dehors de l’abonnement Claude Pro."
cover: "claude-api-tutorial"
cover_alt: "Un terminal affichant une requête curl vers l’API et la réponse 200 OK, à côté des mots Claude API"
related: ["openai-api-tutorial", "build-app-with-ai", "automate-lead-follow-up", "api-keys-mobile-apps", "chatgpt-gdpr-client-data"]
services: ["automation"]
faq:
  - q: "Clé API Claude ou clé API Anthropic : quelle différence ?"
    a: "Aucune. Anthropic édite Claude, et sa documentation emploie les deux noms pour la même clé. Vous la créez sur la page API keys de la Claude Console, et elle commence par sk-ant-."
  - q: "Que faire si ma clé API Claude a fuité ?"
    a: "Supprimez-la (Delete) sur la page API keys de la Claude Console, ou désactivez-la (Disable), ce qui reste réversible. Créez une nouvelle clé pour l’outil qui l’utilisait, puis vérifiez sur la page Usage qu’aucune dépense inconnue n’apparaît. Une clé publiée dans un dépôt public est à considérer comme compromise, même si vous supprimez le fichier ensuite."
  - q: "Anthropic entraîne-t-il ses modèles avec ce que j’envoie à l’API ?"
    a: "Non, d’après ses conditions commerciales, qui couvrent l’API : elles précisent qu’Anthropic ne peut pas entraîner de modèles sur le contenu de ses clients. Le choix d’autoriser ou non l’entraînement, introduit en 2025 pour les comptes Free, Pro et Max, ne concerne pas l’API."
  - q: "L’API Claude fonctionne-t-elle en français ?"
    a: "Oui. Tous les modèles Claude actuels sont multilingues : vous pouvez écrire vos consignes et recevoir les réponses en français. Le nombre de tokens d’un texte dépend de sa langue, alors mesurez le coût sur vos propres textes."
  - q: "Peut-on fixer un budget différent pour chaque projet ?"
    a: "Oui, avec les workspaces (espaces de travail). Créez un workspace par projet dans la Claude Console, rattachez chaque clé au sien et fixez un plafond de dépenses pour chacun. Le workspace par défaut ne peut pas avoir de plafond propre."
---

L’API Claude permet à vos propres outils de parler à Claude : un formulaire de site, un tableur, une application interne. Il vous faut pour cela une clé API, créée dans la Claude Console, et des crédits : Anthropic facture chaque requête selon le nombre de tokens utilisés.

Claude est l’IA que j’utilise pour mon propre travail. L’application interne que j’ai développée sur mesure pour {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, pour gérer les prospects, les chantiers, la communication avec les salariés, l’agenda et les analyses comptables, intègre aussi de l’IA et la téléphonie. Ces fonctions ne passent pas par un abonnement à un assistant IA : elles passent par une API, avec sa propre clé et sa propre facture.

Les noms des menus et des boutons sont en anglais, tels que la documentation d’Anthropic les donne en octobre 2026. Pour savoir où l’IA a sa place dans une petite entreprise, commencez par mon guide {{< a key="ai-small-business-guide" >}}IA pour TPE et PME{{< /a >}}.

## API, clé API, token : les mots à connaître

Quatre mots reviennent à chaque étape :

- **API** (interface de programmation) : une porte qui permet à un logiciel d’envoyer une demande à un autre et de recevoir une réponse, sans que personne ne clique.
- **API Claude** : la porte d’Anthropic vers ses modèles Claude. Votre outil envoie un texte, Claude renvoie sa réponse sous forme de données exploitables.
- **Clé API** : une longue chaîne secrète qui identifie votre compte dans chaque requête. Qui la détient peut dépenser vos crédits.
- **Token** (jeton) : l’unité que l’API compte et facture, un morceau de mot. Sur les modèles actuels, un million de tokens représente environ 555 000 mots selon Anthropic ; le nombre exact dépend de la langue.

Les prix s’entendent par million de tokens, avec un tarif pour l’entrée (ce que vous envoyez : vos consignes et le texte à traiter) et un tarif plus élevé pour la sortie (ce que Claude écrit).

### L’application Claude et l’API Claude se paient séparément

| | Application Claude (claude.ai) | API Claude (Claude Console) |
|---|---|---|
| Qui s’en sert | Vous, dans une fenêtre de discussion | Vos outils : site web, tableur, application, automatisation |
| Comment on paie | Un abonnement : Free, Pro, Max, Team ou Enterprise | Au token, sur des crédits achetés à l’avance |
| Où on la gère | Les réglages de claude.ai | platform.claude.com |

L’abonnement Claude Pro n’inclut pas l’usage de l’API. Les forfaits Max font exception : d’après la page des offres d’Anthropic, ils incluent de 100 à 200 $ de crédits API par mois. Si vous voulez seulement discuter, rédiger ou faire des recherches avec Claude, vous n’avez pas besoin de l’API : mon comparatif {{< a key="claude-vs-chatgpt" >}}Claude ou ChatGPT{{< /a >}} porte sur les applications. L’API sert le jour où c’est un outil, et non une personne, qui pose les questions.

## Étape 1 : créer votre compte sur la Claude Console

La Claude Console est le site d’Anthropic pour les développeurs, à l’adresse `platform.claude.com`. Connectez-vous, ou créez un compte si vous n’en avez pas. Vous y gérez vos clés, vos crédits, vos plafonds et votre consommation, et vous pouvez y tester des prompts dans le navigateur avant d’écrire du code.

{{< screenshot id="claude-api-tutorial-01" alt="La page de connexion de la Claude Console sur platform.claude.com" >}}

## Étape 2 : créer votre clé API Claude

1. Dans la Console, ouvrez la page **API keys** (`platform.claude.com/settings/keys`).
2. Cliquez sur **Create key**.
3. Donnez à la clé un nom qui dit où elle servira, comme `formulaire-site` ou `devis-tableur`. Le jour où vous aurez trois clés, vous saurez laquelle révoquer.
4. Choisissez l’expiration : un délai prédéfini, de 3 heures à 30 jours, un délai personnalisé ou **Never** (jamais). Impossible de la modifier ensuite.
5. Réglez **Linked account** sur vous-même pour vos tests. Pour un outil partagé, comme un formulaire de votre site, Anthropic recommande une clé de compte de service : une clé personnelle cesse de fonctionner si vous quittez l’organisation.
6. Si vous le souhaitez, choisissez un workspace (espace de travail) pour séparer vos projets.
7. Copiez la clé. Elle commence par `sk-ant-` et la Console ne l’affiche **qu’une seule fois**, à la création. Si vous la perdez, impossible de la revoir : créez-en une nouvelle.

Si le bouton **Create key** est grisé, votre rôle dans l’organisation ne vous permet sans doute pas de créer des clés : demandez à un administrateur. [La page d’Anthropic sur les clés API](https://platform.claude.com/docs/en/get-api-key) détaille chaque type de clé.

{{< screenshot id="claude-api-tutorial-02" alt="La fenêtre Create key de la Claude Console avec les champs du nom, de l’expiration, de Linked account et du workspace" >}}

{{< screenshot id="claude-api-tutorial-03" alt="Une nouvelle clé API affichée une seule fois après sa création, commençant par sk-ant-, avec la plupart des caractères floutés" >}}

## Étape 3 : ranger la clé à l’abri des regards

Les bibliothèques officielles d’Anthropic lisent votre clé dans une variable d’environnement nommée `ANTHROPIC_API_KEY` : une valeur stockée dans les réglages de votre ordinateur, et non dans votre code. Sur Mac ou Linux, ouvrez le Terminal et tapez :

```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

La variable disparaît à la fermeture de la fenêtre. Pour la garder, ajoutez la même ligne au fichier de profil de votre shell (`~/.zshrc` sur un Mac récent). Sur Windows, ouvrez PowerShell et tapez :

```powershell
setx ANTHROPIC_API_KEY "sk-ant-..."
```

Ouvrez ensuite une nouvelle fenêtre : `setx` enregistre la variable pour les fenêtres suivantes, pas pour celle en cours.

Quatre règles, quel que soit votre projet :

- **Jamais dans le code front-end.** Tout visiteur peut lire le HTML et le JavaScript de votre site. La requête doit {{< a key="api-keys-mobile-apps" >}}partir d’un serveur{{< /a >}} ou d’un outil d’automatisation qui détient la clé.
- **Jamais dans un dépôt public.** Si votre code est sur GitHub, gardez la clé dans un fichier `.env` listé dans `.gitignore`, pour qu’elle ne soit jamais envoyée.
- **Jamais dans un email ou un document partagé**, ni dans une conversation avec un assistant IA.
- **Une clé par outil.** Vous pourrez en révoquer une sans casser les autres.

{{< callout type="warning" >}}Qui détient votre clé peut dépenser vos crédits jusqu’à ce que vous la révoquiez. Traitez-la comme le code de la carte bancaire de l’entreprise, pas comme un mot de passe que l’on réinitialise par email.{{< /callout >}}

## Étape 4 : acheter des crédits et fixer un plafond de dépenses

D’après sa [page de tarifs](https://platform.claude.com/docs/en/about-claude/pricing), Anthropic offre aux nouveaux utilisateurs une petite quantité de crédits gratuits pour tester l’API. Au-delà, vous achetez des crédits par carte sur la page **Billing** (`platform.claude.com/settings/billing`). Tous les paiements se font en dollars américains : votre banque convertit le montant en euros, à son taux de change et avec ses frais éventuels.

Fixez un plafond avant votre première requête, pas après votre première surprise :

1. Ouvrez la page **Billing**.
2. Dans la section **Spend limits**, cliquez sur **Set limit** (ou **Adjust limit** si un plafond existe déjà).
3. Saisissez un montant mensuel. Il ne peut pas dépasser le plafond de votre palier.

Quand la consommation atteint votre plafond, l’API refuse les requêtes avec un message d’erreur qui indique quand l’accès reprend. Relevez le plafond pour le rétablir plus tôt.

Le plafond de votre palier est de 500 $ par mois en Start, 1 000 $ en Build et 200 000 $ en Scale, selon la [page d’Anthropic sur les limites](https://platform.claude.com/docs/en/api/rate-limits). Une nouvelle organisation peut démarrer dans un palier Evaluation plus bas, dont les limites montent à mesure que le compte accumule un historique.

{{< callout type="tip" >}}Pendant vos tests, fixez un plafond que vous accepteriez de dépenser en entier, puis relevez-le quand un vrai outil passe en production. Un outil qui tourne en boucle s’arrête à votre plafond, pas à celui de votre palier.{{< /callout >}}

{{< screenshot id="claude-api-tutorial-04" alt="La page Billing de la Claude Console avec la section Spend limits et son bouton Set limit" >}}

## Étape 5 : envoyer votre première requête avec cURL

cURL est un outil en ligne de commande déjà installé sur macOS et sur la plupart des systèmes Linux. Une fois la clé dans la variable, collez ceci dans le Terminal :

```bash
curl https://api.anthropic.com/v1/messages \
  -H "content-type: application/json" \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -d '{
    "model": "claude-opus-5-5",
    "max_tokens": 1000,
    "messages": [
      {"role": "user", "content": "Propose trois objets d’email pour annoncer nos nouveaux horaires d’ouverture."}
    ]
  }'
```

Ligne par ligne :

- `https://api.anthropic.com/v1/messages` : l’API Messages, l’adresse de toutes les requêtes.
- `x-api-key` : votre clé, lue dans la variable, pour qu’elle n’apparaisse jamais dans la commande.
- `anthropic-version: 2023-06-01` : la version du format de l’API, obligatoire dans chaque requête (rien à voir avec l’âge du modèle).
- `content-type` : le corps de la requête est en JSON.
- `model` : le modèle qui répond ; Anthropic recommande de commencer par `claude-opus-5-5`.
- `max_tokens` : le nombre maximal de tokens que Claude peut produire, réflexion comprise. Au-delà, la réponse est coupée.
- `messages` : la conversation, ici un seul message de votre part (`user`).

La réponse arrive en JSON. En version abrégée :

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

La réponse de Claude se trouve dans le bloc de type `text`. Si le modèle a réfléchi avant de répondre, un bloc de type `thinking` peut le précéder : ignorez-le pour l’instant. `stop_reason` vaut `end_turn` quand la réponse est complète et `max_tokens` quand elle a été coupée. `usage` donne les tokens facturés : dans le [guide de démarrage](https://platform.claude.com/docs/en/get-started) d’Anthropic, une question d’une ligne a utilisé 21 tokens en entrée et sa réponse 305 tokens en sortie, soit environ 0,006 $ avec Opus 5.5.

Sur Windows, PowerShell traite différemment les guillemets et les retours à la ligne de cette commande : passez plutôt par la version Python ci-dessous.

{{< screenshot id="claude-api-tutorial-05" alt="Un terminal affichant la requête curl et la réponse JSON de Claude avec les champs content, stop_reason et usage" >}}

## Étape 6 : envoyer la même requête en Python

La bibliothèque Python d’Anthropic ajoute les en-têtes à votre place et relance seule les erreurs temporaires, deux fois par défaut. Si Python n’est pas installé, téléchargez-le sur python.org. Ensuite, sur Mac ou Linux, créez un dossier pour le projet et installez-y la bibliothèque :

```bash
mkdir claude-quickstart && cd claude-quickstart
python3 -m venv .venv && source .venv/bin/activate
pip install anthropic
```

Sur Windows, `py -m pip install anthropic` suffit. Créez ensuite un fichier `quickstart.py` :

```python
import anthropic

client = anthropic.Anthropic()  # lit ANTHROPIC_API_KEY

message = client.messages.create(
    model="claude-opus-5-5",
    max_tokens=1000,
    messages=[
        {
            "role": "user",
            "content": "Propose trois objets d’email pour annoncer nos nouveaux horaires d’ouverture.",
        }
    ],
)

for block in message.content:
    if block.type == "text":
        print(block.text)

print(message.usage)
```

Lancez-le avec `python quickstart.py` (`py quickstart.py` sur Windows). Les objets proposés par Claude s’affichent, suivis des tokens consommés. Anthropic publie le même exemple en TypeScript, Java, Go, C#, PHP et Ruby.

{{< screenshot id="claude-api-tutorial-06" alt="Un terminal qui exécute quickstart.py, avec les trois objets d’email proposés par Claude et la ligne usage en dessous" >}}

## Quel modèle choisir, et combien coûte l’API Claude

Pour changer de modèle, il suffit de changer une ligne, la valeur `model`. Voici les quatre modèles actuels, aux prix d’Anthropic au moment où j’écris (octobre 2026) :

| Modèle | Valeur de `model` | Entrée, par million de tokens | Sortie, par million de tokens | Usage suggéré par Anthropic |
|---|---|---|---|---|
| Claude Fable 5.1 | `claude-fable-5-1` | 10 $ | 50 $ | Raisonnement exigeant, longues tâches en plusieurs étapes |
| Claude Opus 5.5 | `claude-opus-5-5` | 4 $ | 20 $ | Le point de départ en cas de doute |
| Claude Sonnet 5.5 | `claude-sonnet-5-5` | 2 $ | 10 $ | Le meilleur équilibre entre vitesse et intelligence |
| Claude Haiku 5.5 | `claude-haiku-5-5` | 0,10 $ | 0,50 $ | Gros volumes et réponses rapides : tri, extraction |

Les prix de Haiku valent pour les prompts jusqu’à 100 000 tokens ; au-delà, ils passent à 0,50 $ et 2,50 $.

Pour estimer un coût, multipliez. Mettons qu’une requête envoie 500 tokens (l’email d’un client et vos consignes) et en reçoive 300 (un brouillon de réponse). Avec Opus 5.5, cela donne 500 × 4 $ / 1 000 000 + 300 × 20 $ / 1 000 000 = 0,008 $, soit environ 8 $ pour mille réponses. Les mêmes mille réponses coûtent environ 0,20 $ avec Haiku 5.5 et 20 $ avec Fable 5.1. Sur Opus 5.5 et Fable 5.1, la réflexion est toujours active : le modèle décide combien de temps il raisonne avant de répondre, et ce raisonnement est facturé comme des tokens de sortie. Vérifiez `usage` sur de vraies requêtes avant de vous fier à une estimation.

Dans mon travail, Claude, et Fable 5.1 en particulier, s’est montré extrêmement précis. Fable coûte deux fois et demie plus cher qu’Opus 5.5 : commencez avec Opus 5.5, puis passez la ligne `model` à `claude-fable-5-1` pour les requêtes où une erreur vous coûterait plus que la différence.

Deux réductions à connaître dès le départ :

- **La Batch API** divise par deux le prix de l’entrée et de la sortie pour les requêtes qui peuvent attendre : vous envoyez un lot, puis vous récupérez les résultats plus tard. Réécrire une centaine de fiches produits pendant la nuit en est l’exemple type.
- **Le prompt caching** (mise en cache) garde en mémoire les consignes que vous renvoyez à chaque requête. Leur écriture en cache coûte un peu plus qu’une entrée normale ; leur relecture coûte 5 % du prix normal de l’entrée sur Opus 5.5 et Sonnet 5.5.

## Les erreurs courantes et comment les corriger

Les erreurs arrivent en JSON, avec un type et un message qui indique en général le problème. Les plus courantes :

| Code | Type | Ce que cela signifie en général | Que faire |
|---|---|---|---|
| 401 | `authentication_error` | La clé manque, est mal copiée, révoquée ou expirée | Vérifiez que la variable existe dans cette fenêtre et que la clé est complète |
| 400 | `invalid_request_error` | La requête est mal formée (une virgule ou un champ oublié), ou vous avez atteint votre plafond | Lisez le message, qui précise lequel. Pour un plafond, relevez-le dans Billing |
| 404 | `not_found_error` | Un nom de modèle erroné ou inaccessible à votre compte | Recopiez la valeur `model` du tableau des modèles |
| 402 | `billing_error` | Un problème de facturation ou de paiement | Vérifiez votre carte dans Billing |
| 429 | `rate_limit_error` | Trop de requêtes ou de tokens par minute, ou le plafond mensuel de votre palier est atteint | Patientez puis réessayez. Pour le plafond, utilisez Request tier increase sur la page Rate limits |
| 529 | `overloaded_error` | L’API est momentanément surchargée | Réessayez un peu plus tard |

Chaque réponse porte aussi un identifiant de requête, `request_id` dans une erreur. Si vous contactez le support d’Anthropic au sujet d’une requête, indiquez cet identifiant.

## Suivre sa consommation dans la Console

Deux pages de la Console montrent où part l’argent :

- **Usage** (`platform.claude.com/usage`) : des graphiques des tokens et des requêtes, avec votre marge sous les limites de débit. Regardez-la après le premier vrai jour d’utilisation, puis une fois par mois.
- **Rate limits** (`platform.claude.com/usage/limits`) : votre palier, vos limites par modèle et le bouton **Request tier increase**.

Un pic que vous ne savez pas expliquer mérite un coup d’œil le jour même : un outil qui répète la même requête, ou une clé entre de mauvaises mains, continue de dépenser jusqu’à ce que quelqu’un l’arrête.

{{< screenshot id="claude-api-tutorial-07" alt="La page Usage de la Claude Console avec les graphiques des tokens et des requêtes du mois" >}}

## Que construire ensuite, et quand faire appel à un développeur

Pour envoyer une première requête, vous n’avez besoin ni de moi ni d’un développeur : si les commandes ci-dessus ont fonctionné, c’est fait. La suite utile, c’est une tâche que vous faites déjà tous les jours, pas dix idées à la fois :

- **Répondre plus vite aux prospects.** Les alertes et les rappels viennent d’abord ; un brouillon de réponse peut suivre. Mon tutoriel pour {{< a key="automate-lead-follow-up" >}}automatiser le suivi des prospects{{< /a >}} met en place les alertes gratuitement.
- **Donner des consignes permanentes à Claude.** Un prompt `system` contient ce qui vaut pour chaque requête : votre ton, le vouvoiement, la conduite à tenir quand une information manque.
- **Créer un petit outil interne**, comme un calculateur de devis. Mon guide pour {{< a key="build-app-with-ai" >}}créer une application avec l’IA{{< /a >}} dit ce qui est réaliste sans développeur. {{< a key="ai-app-data-leaks" >}}Vérifiez ensuite qui peut lire ses données{{< /a >}}.
- **Comparer avec OpenAI**, dont les étapes se ressemblent beaucoup : voyez mon tutoriel sur l’{{< a key="openai-api-tutorial" >}}API ChatGPT (OpenAI){{< /a >}}.

Avant d’envoyer des données clients via l’API, vérifiez ce que permet le RGPD dans mon guide {{< a key="chatgpt-gdpr-client-data" >}}ChatGPT et RGPD : quelles données clients confier à une IA{{< /a >}}. L’API a ses propres conditions, mais vos obligations envers vos clients restent les mêmes.

Faites appel à un développeur quand l’intégration se trouve sur votre site, traite des données personnelles, encaisse des paiements ou tourne sans surveillance. Je développe des logiciels pour mon propre usage, pas pour les vendre, et je connais la satisfaction de construire l’outil dont on a besoin. Un outil dont dépend toute une équipe, c’est autre chose : quand j’ai apporté à Pilotech plus de prospects que son équipe ne pouvait en traiter, le client m’a demandé une application pour tout voir clairement et ne jamais oublier de rappeler un prospect. Je raconte ce projet dans mon article {{< a key="bespoke-crm-internal-app" >}}CRM sur mesure{{< /a >}}.
