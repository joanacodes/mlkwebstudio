---
title: "API ChatGPT : créer sa clé OpenAI, fixer un budget et faire sa première requête"
seo_title: "API ChatGPT : créer sa clé OpenAI et plafonner ses dépenses"
description: "Tutoriel API ChatGPT : créez votre clé API OpenAI, gardez-la hors du code de votre site, achetez des crédits, plafonnez vos dépenses et lancez une requête."
slug: "api-chatgpt-cle-openai"
translationKey: "openai-api-tutorial"
date: 2026-10-17T09:04:00+02:00
lastmod: 2026-10-17T09:04:00+02:00
category: "ai-automation"
article_type: "tutorial"
keywords: ["API ChatGPT", "clé API OpenAI", "API OpenAI prix", "tutoriel API ChatGPT", "clé API ChatGPT", "Responses API"]
summary: "Pour utiliser l’API ChatGPT, connectez-vous sur platform.openai.com, ouvrez la page API keys des réglages, cliquez sur Create new secret key et rangez la clé dans une variable d’environnement OPENAI_API_KEY. Achetez ensuite des crédits prépayés (5 $ minimum), fixez un plafond mensuel (hard spend limit) sur le projet, puis envoyez une requête POST à https://api.openai.com/v1/responses. L’abonnement ChatGPT n’inclut pas l’API : elle se paie au token, à part."
cover: "openai-api-tutorial"
cover_alt: "Un téléphone affichant une boîte de réception, et un terminal avec une requête curl et la réponse 200 OK au-dessus des mots OpenAI API"
related: ["claude-api-tutorial", "zapier-vs-make-vs-n8n", "chatgpt-gdpr-client-data", "api-keys-mobile-apps", "build-app-with-ai"]
services: ["automation"]
faq:
  - q: "L’API ChatGPT est-elle gratuite ?"
    a: "Créer la clé est gratuit, mais pas son utilisation : chaque requête se paie au token, sur des crédits prépayés, avec un achat minimum de 5 $ au moment où j’écris (octobre 2026). L’abonnement ChatGPT, même payant, ne couvre pas l’API."
  - q: "« API ChatGPT » et « API OpenAI », est-ce la même chose ?"
    a: "Oui. « API ChatGPT » est le nom courant de l’API d’OpenAI, qui donne à vos propres outils l’accès aux modèles GPT. Elle se gère sur la plateforme OpenAI (platform.openai.com), pas dans ChatGPT."
  - q: "OpenAI entraîne-t-il ses modèles avec ce que j’envoie à l’API ?"
    a: "Pas par défaut. D’après la [page d’OpenAI sur le contrôle des données](https://developers.openai.com/api/docs/guides/your-data), les données envoyées à l’API ne servent ni à entraîner ni à améliorer les modèles d’OpenAI, sauf si vous l’acceptez expressément. OpenAI peut conserver les entrées et les sorties jusqu’à 30 jours pour fournir le service et détecter les abus ; les clients éligibles peuvent demander une conservation nulle (zero data retention)."
  - q: "Que faire si ma clé API OpenAI a fuité ?"
    a: "Supprimez-la sur la page API keys, créez une nouvelle clé pour l’outil qui l’utilisait, puis vérifiez dans le tableau de bord de consommation (Usage) qu’aucune dépense inconnue n’apparaît. Une clé publiée dans un dépôt public est à considérer comme compromise, même si vous supprimez le fichier ensuite."
  - q: "Les crédits de l’API OpenAI expirent-ils ?"
    a: "Oui. Les crédits achetés expirent un an après l’achat, OpenAI ne peut pas prolonger cette date, et ils ne sont pas remboursables, sauf si la loi ou un contrat l’impose."
---

L’API ChatGPT, de son vrai nom l’API d’OpenAI, permet à vos propres outils d’utiliser les modèles d’OpenAI : formulaire de site, tableur, automatisation, application interne. Il vous faut une clé API, créée sur la plateforme OpenAI, et des crédits prépayés, que chaque requête entame.

Les étapes sont simples, et trois d’entre elles protègent votre argent : où ranger la clé, combien de crédits acheter et quel plafond fixer avant la première requête.

J’utilise Claude pour mon propre travail et je n’ai pas de projet sur l’API OpenAI à vous montrer : chaque étape ci-dessous suit donc la documentation d’OpenAI d’octobre 2026, avec les menus en anglais. Pour savoir d’abord où l’IA a sa place dans une petite entreprise, lisez mon guide {{< a key="ai-small-business-guide" >}}IA pour TPE et PME{{< /a >}}.

## Ce qu’est l’API ChatGPT, et pourquoi ChatGPT Plus ne l’inclut pas

Trois mots reviennent à chaque étape :

- **API** (interface de programmation) : un moyen pour un logiciel d’envoyer une demande à un autre et de recevoir une réponse, sans que personne ne clique.
- **Clé API** : une longue chaîne secrète qui identifie votre compte dans chaque requête.
- **Token** (jeton) : l’unité que l’API compte et facture, en gros un morceau de mot. Les prix s’entendent par million de tokens : un tarif pour l’entrée (ce que vous envoyez), un tarif plus élevé pour la sortie (ce que le modèle écrit). Le nombre de tokens d’un texte dépend aussi de sa langue.

### ChatGPT et l’API se paient séparément

| | ChatGPT (chatgpt.com) | API OpenAI (platform.openai.com) |
|---|---|---|
| Qui s’en sert | Vous, dans une fenêtre de discussion | Vos outils : formulaire de site, tableur, application, automatisation |
| Comment on paie | Un abonnement : Free, Go, Plus, Pro, Business ou Enterprise | Au token, sur des crédits prépayés |
| Où tout se règle | Les réglages de ChatGPT | Le tableau de bord de la plateforme OpenAI |

Le centre d’aide d’OpenAI est clair : l’usage de l’API est facturé séparément de l’abonnement ChatGPT, y compris Plus ([page d’OpenAI sur la facturation de ChatGPT et de l’API](https://help.openai.com/en/articles/9039756-managing-billing-for-chatgpt-and-the-api-platform)). Pour discuter, rédiger ou faire des recherches, vous n’avez pas besoin de l’API : mon comparatif {{< a key="claude-vs-chatgpt" >}}Claude ou ChatGPT{{< /a >}} porte sur les applications. L’API sert quand c’est un outil, pas une personne, qui pose les questions.

## Étape 1 : se connecter à la plateforme OpenAI et créer un projet

La plateforme OpenAI, à l’adresse `platform.openai.com`, est le site d’OpenAI pour les développeurs : clés, facturation, plafonds et consommation s’y trouvent. Connectez-vous avec votre compte OpenAI (le même identifiant que pour ChatGPT, si vous en avez un) ou créez-en un.

Votre compte comprend une organisation et un projet par défaut. **Chaque projet est cloisonné** : il a ses propres clés, son plafond et sa consommation, si bien qu’un outil défaillant ne peut pas vider le budget d’un autre. Créez un projet pour l’outil que vous allez mettre en place, avec un nom simple comme `Formulaire site`.

{{< screenshot id="openai-api-tutorial-01" alt="La plateforme OpenAI après connexion sur platform.openai.com, avec le projet à utiliser sélectionné" >}}

## Étape 2 : créer votre clé API OpenAI

1. Ouvrez la page **API keys** des réglages (`platform.openai.com/settings/organization/api-keys`).
2. Cliquez sur **Create new secret key**.
3. Nommez la clé d’après l’outil qui l’utilisera, comme `formulaire-site`, pour savoir laquelle supprimer plus tard.
4. Choisissez le projet auquel elle appartient.
5. Choisissez le propriétaire : vous, pour vos tests, ou un compte de service (une identité non humaine rattachée à un seul projet, que seuls les propriétaires peuvent créer) pour un outil dont l’entreprise dépend.
6. Choisissez les droits : **All** (tous, par défaut), **Restricted** (aucun, lecture ou écriture pour chaque point d’accès) ou **Read Only** (lecture seule). All suffit pour un premier test ; un outil en production ne doit recevoir que ce qu’il utilise.
7. Donnez une date d’expiration à la clé si vous le pouvez : OpenAI recommande de faire expirer les clés de projet et de les remplacer régulièrement.
8. Copiez la clé dès qu’elle s’affiche et rangez-la (étape suivante). Considérez cette fenêtre comme votre seule chance : si vous perdez la clé, créez-en une nouvelle et supprimez l’ancienne.

Si le bouton n’apparaît pas, les propriétaires de votre organisation ont peut-être limité les types de clés que les membres peuvent créer.

{{< screenshot id="openai-api-tutorial-02" alt="La page API keys de la plateforme OpenAI avec le bouton Create new secret key" >}}

{{< screenshot id="openai-api-tutorial-03" alt="La fenêtre Create new secret key avec les champs du nom, du projet, du propriétaire et des droits" >}}

## Étape 3 : ranger la clé à l’abri des regards

Les bibliothèques officielles d’OpenAI lisent votre clé dans une variable d’environnement nommée `OPENAI_API_KEY` : une valeur stockée dans les réglages de votre ordinateur, et non dans votre code. Sur Mac ou Linux, ouvrez le Terminal et tapez :

```bash
export OPENAI_API_KEY="collez-votre-cle-ici"
```

La variable disparaît à la fermeture de la fenêtre. Pour la garder, ajoutez la même ligne au fichier de profil de votre shell (`~/.zshrc` sur un Mac récent). Sur Windows, ouvrez PowerShell et tapez :

```powershell
setx OPENAI_API_KEY "collez-votre-cle-ici"
```

Ouvrez ensuite une nouvelle fenêtre : `setx` ne vaut que pour les fenêtres ouvertes après. Dans un dossier de projet, OpenAI suggère le paquet python-dotenv : la clé se trouve dans un fichier `.env` listé dans `.gitignore`, pour qu’elle n’arrive jamais sur GitHub.

### Jamais dans le code front-end de votre site

N’importe qui peut lire le HTML et le JavaScript de votre site dans les outils de développement du navigateur. La bibliothèque JavaScript d’OpenAI refuse d’ailleurs de tourner dans un navigateur sans l’option `dangerouslyAllowBrowser`, justement parce qu’elle exposerait votre clé. Le bon schéma :

```text
Navigateur du visiteur  →  votre serveur ou outil d’automatisation (qui détient la clé)  →  API OpenAI
Navigateur du visiteur  ←  la réponse seulement                                         ←  API OpenAI
```

Pas de serveur ? Zapier, Make et n8n proposent tous une étape OpenAI qui garde votre clé de leur côté : mon comparatif {{< a key="zapier-vs-make-vs-n8n" >}}n8n, Make ou Zapier{{< /a >}} vous aide à choisir. Et **une clé par outil**, jamais collée dans un dépôt public, un email, un document partagé ou une conversation avec un assistant IA. De même pour les {{< a key="api-keys-mobile-apps" >}}clés API d’une application mobile{{< /a >}}.

{{< callout type="warning" >}}Qui détient votre clé peut dépenser vos crédits jusqu’à ce que vous la supprimiez. Protégez-la comme le code de la carte bancaire de l’entreprise.{{< /callout >}}

## Étape 4 : acheter des crédits prépayés

Les crédits s’achètent d’avance : ouvrez la page **Billing** des réglages, ajoutez une carte, puis achetez des crédits. Au moment où j’écris (octobre 2026), l’achat minimum est de 5 $ et le montant proposé par défaut de 10 $, d’après le [guide d’OpenAI sur la facturation prépayée](https://help.openai.com/en/articles/8264644-setting-up-and-managing-prepaid-api-billing).

Ils sont vendus en dollars : votre banque convertit en euros, à son taux et avec ses frais. Avant de payer :

- **La recharge automatique (auto-reload) est activée par défaut** à la configuration. Pendant vos tests, désactivez-la, ou fixez une limite mensuelle de recharge, qui plafonne ce qu’OpenAI achète automatiquement.
- **Les crédits expirent** au bout d’un an : achetez de petits montants tant que vous ne connaissez pas votre consommation.
- **Le solde n’est pas une coupure instantanée.** Les requêtes passées pendant qu’il s’épuise peuvent le rendre négatif ; la différence est déduite de votre prochain achat.

{{< screenshot id="openai-api-tutorial-04" alt="La page Billing de la plateforme OpenAI avec le solde de crédits et le réglage de recharge automatique" >}}

## Étape 5 : fixer un plafond de dépenses (hard spend limit)

Votre solde ne limite vos dépenses que si la recharge automatique est coupée ; un plafond limite ce qu’un projet peut dépenser chaque mois, quel que soit le solde. OpenAI l’appelle **hard spend limit** (plafond strict) : une fois qu’un projet l’atteint, l’API refuse ses requêtes jusqu’au cycle mensuel suivant, ou jusqu’à ce que vous releviez le plafond.

Réglez-le dans les paramètres du projet, sous forme de montant mensuel en dollars (seule devise et seule période proposées au moment où j’écris). Si vous avez plusieurs projets, fixez aussi un plafond pour toute l’organisation. D’après le centre d’aide d’OpenAI, la dépense enregistrée peut dépasser légèrement le plafond avant qu’il ne s’applique.

{{< callout type="tip" >}}Pendant vos tests, choisissez un plafond que vous accepteriez de dépenser en entier. Un outil qui tourne en boucle s’arrête alors à votre plafond, même si la recharge automatique continue d’alimenter votre solde.{{< /callout >}}

{{< screenshot id="openai-api-tutorial-05" alt="Les paramètres d’un projet OpenAI avec un plafond mensuel de dépenses saisi en dollars" >}}

## Étape 6 : envoyer votre première requête avec cURL

cURL est un outil en ligne de commande déjà installé sur macOS et sur la plupart des systèmes Linux. Une fois la clé dans la variable, collez ceci dans le Terminal :

```bash
curl https://api.openai.com/v1/responses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "model": "gpt-6-astra",
    "input": "Propose trois objets d’email pour annoncer nos nouveaux horaires d’ouverture.",
    "store": false
  }'
```

Ligne par ligne :

- `https://api.openai.com/v1/responses` : la Responses API, la voie principale selon OpenAI (les anciens tutoriels utilisent Chat Completions, toujours prise en charge).
- `Authorization: Bearer` : votre clé, lue dans la variable, pour qu’elle n’apparaisse jamais dans la commande.
- `Content-Type` : le corps est en JSON.
- `model` : le modèle qui répond ; `gpt-6-astra` est celui des exemples de la référence de l’API d’OpenAI.
- `input` : votre demande, en langage courant.
- `store` : `false` demande à OpenAI de ne pas stocker la réponse pour une consultation ultérieure. Par défaut (`true`), elle est conservée au moins 30 jours.

La réponse arrive en JSON. En version abrégée :

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

Le texte du modèle se trouve dans le bloc `output_text`. Un modèle qui réfléchit d’abord peut ajouter un élément `reasoning` avant le message : ignorez-le pour l’instant. `usage` compte ce que vous payez, tokens de réflexion compris dans `output_tokens`. Dans l’exemple d’OpenAI, une demande d’une ligne a utilisé 36 tokens en entrée et sa réponse 87 tokens en sortie : environ 0,005 $, un demi-cent, aux prix de GPT-6 Astra.

Sur Windows, PowerShell traite différemment les guillemets de cette commande : passez par la version Python ci-dessous.

{{< screenshot id="openai-api-tutorial-06" alt="Un terminal affichant la requête curl et la réponse JSON avec les champs output et usage" >}}

## Étape 7 : envoyer la même requête en Python

La bibliothèque Python d’OpenAI demande Python 3.10 ou plus récent (sur python.org). Sur Mac ou Linux, créez un dossier et installez-y la bibliothèque :

```bash
mkdir openai-quickstart && cd openai-quickstart
python3 -m venv .venv && source .venv/bin/activate
pip install openai
```

Sur Windows, `py -m pip install openai` suffit. Créez ensuite `quickstart.py` :

```python
from openai import OpenAI

client = OpenAI()  # lit OPENAI_API_KEY

response = client.responses.create(
    model="gpt-6-astra",
    instructions="Tu écris pour une petite entreprise française. Vouvoie le lecteur.",
    input="Propose trois objets d’email pour annoncer nos nouveaux horaires d’ouverture.",
    store=False,
)

print(response.output_text)
print(response.usage)
```

Lancez-le avec `python quickstart.py` (`py quickstart.py` sur Windows) : les objets proposés s’affichent, puis les tokens consommés. `instructions` contient vos consignes permanentes, comme le ton ou le vouvoiement ; `output_text` rassemble le texte du modèle. Une version JavaScript et TypeScript existe aussi (`npm install openai`).

{{< screenshot id="openai-api-tutorial-07" alt="Un terminal qui exécute quickstart.py, avec les trois objets d’email proposés et la ligne usage en dessous" >}}

## Quel modèle choisir, et combien coûte une requête

Pour changer de modèle, changez la ligne `model`. Trois modèles actuels, aux prix d’OpenAI au moment où j’écris (octobre 2026), par million de tokens :

| Modèle | Valeur de `model` | Entrée | Entrée en cache | Sortie | Remarque |
|---|---|---|---|---|---|
| GPT-6 Astra | `gpt-6-astra` | 10 $ | 1 $ | 50 $ | Le modèle le plus performant d’OpenAI, pour les tâches les plus exigeantes |
| GPT-5.5 | `gpt-5.5` | 5 $ | 0,50 $ | 30 $ | Le modèle des exemples des bibliothèques officielles d’OpenAI |
| GPT-6 Luna | `gpt-6-luna` | 0,10 $ | 0,01 $ | 0,50 $ | Le modèle le plus efficient d’OpenAI, pour les tâches ciblées en grand volume |

Les prix changent souvent : vérifiez la [page des tarifs d’OpenAI](https://openai.com/api/pricing/) avant de bâtir un budget sur ces chiffres, qui sont en dollars. La gamme GPT-6 compte aussi un modèle intermédiaire, GPT-6.1 Sol (`gpt-6.1-sol`), dont le prix n’a pas pu être confirmé au moment où j’écris : consultez-le sur cette page.

Pour estimer un coût, multipliez. Une requête qui envoie 500 tokens (la demande de devis d’un prospect et vos consignes) et en reçoit 300 (un brouillon de réponse) coûte, avec GPT-6 Astra, 500 × 10 $ / 1 000 000 + 300 × 50 $ / 1 000 000 = 0,02 $ : environ 20 $ pour mille réponses, contre 11,50 $ avec GPT-5.5 et 0,20 $ avec GPT-6 Luna. Les tokens de réflexion s’ajoutent, facturés comme de la sortie : vérifiez `usage` sur de vraies requêtes.

Pour choisir, soumettez 20 vraies requêtes à GPT-6 Luna et à GPT-6 Astra, puis comparez les réponses. **Gardez le modèle le moins cher dont vous enverriez les réponses sans les réécrire.** Et vérifiez les faits qu’il avance : dans mon travail, ChatGPT a eu tendance à inventer des détails un peu trop souvent, d’où mon choix de Claude. C’est l’expérience d’une seule personne, pas un banc d’essai.

Deux moyens de payer moins :

- **L’entrée en cache** : le début d’un prompt qui se répète d’une requête à l’autre, comme de longues consignes permanentes, coûte un dixième du prix normal de l’entrée sur ces trois modèles.
- **La Batch API** : pour les tâches qui peuvent attendre, vous envoyez un fichier de requêtes et récupérez les résultats sous 24 heures, à moitié prix d’après les comparateurs indépendants (octobre 2026). Vérifiez le prix batch de votre modèle sur la page des tarifs avant d’y compter.

## Les erreurs courantes et comment les corriger

Les erreurs arrivent en JSON, avec un message qui nomme en général le problème ; en Python, chaque code a son type d’erreur :

| Code | Erreur Python | Ce que cela signifie en général | Que faire |
|---|---|---|---|
| 400 | `BadRequestError` | Une requête mal formée : une virgule oubliée, un champ mal orthographié | Lisez le message, qui désigne la partie fautive |
| 401 | `AuthenticationError` | La clé manque, est mal copiée, supprimée ou expirée | Vérifiez que la variable existe dans cette fenêtre et contient la clé entière |
| 403 | `PermissionDeniedError` | La clé n’a pas le droit nécessaire, par exemple une clé Read Only | Vérifiez les droits de la clé et son projet |
| 404 | `NotFoundError` | Un nom de modèle erroné, ou un modèle inaccessible à votre compte | Recopiez la valeur `model` exacte du tableau ci-dessus |
| 429 | `RateLimitError` | Trop de requêtes ou de tokens trop vite, ou plus de crédit (voir plus bas) | Patientez (voir l’en-tête `Retry-After`, s’il est présent) et ralentissez, ou rechargez |
| 500+ | `InternalServerError` | Une erreur du serveur, ou un modèle momentanément surchargé | Réessayez un peu plus tard |

**Une erreur 429 ne signale pas toujours des requêtes trop rapides.** Avec un solde vide ou un plafond atteint, l’API répond en général aussi par un code 429, mais avec un message qui parle de votre quota (type d’erreur `insufficient_quota`) et précise lequel des deux est en cause. Attendre ou relancer n’y changera rien : rechargez, ou relevez le plafond.

## Suivre sa consommation et ses coûts

Le tableau de bord de consommation d’OpenAI (Usage) montre l’activité et les coûts de votre organisation. Consultez-le après le premier vrai jour d’utilisation, puis chaque mois, et comparez avec ce que les chiffres de `usage` laissaient prévoir. Si vous ne le voyez pas, son accès est peut-être réservé aux propriétaires de l’organisation.

Un pic inexpliqué mérite un coup d’œil le jour même : un outil qui tourne en boucle ou une clé volée continue de dépenser jusqu’à ce que votre plafond l’arrête.

{{< screenshot id="openai-api-tutorial-08" alt="Le tableau de bord de consommation (Usage) de la plateforme OpenAI avec les coûts du mois" >}}

## Que construire ensuite, et quand faire appel à un développeur

Pour envoyer une première requête, vous n’avez besoin ni de moi ni d’un développeur : si les commandes ci-dessus ont fonctionné, c’est fait. La suite, c’est une tâche que vous faites déjà chaque semaine, pas dix idées à la fois :

- **Répondre plus vite aux prospects.** Les alertes et les rappels d’abord, un brouillon rédigé par l’IA ensuite : mon tutoriel pour {{< a key="automate-lead-follow-up" >}}automatiser le suivi des prospects{{< /a >}} met en place les alertes gratuitement.
- **Créer un petit outil interne**, comme un calculateur de devis : mon guide pour {{< a key="build-app-with-ai" >}}créer une application avec l’IA{{< /a >}} dit ce qui est réaliste sans développeur. {{< a key="ai-app-data-leaks" >}}Vérifiez ensuite qui peut lire ses données{{< /a >}}.
- **Comparer avec Claude**, dont les étapes ressemblent beaucoup à celles-ci, dans mon tutoriel {{< a key="claude-api-tutorial" >}}API Claude{{< /a >}}.

Avant de faire passer des données clients par l’API, lisez mon guide {{< a key="chatgpt-gdpr-client-data" >}}ChatGPT et RGPD{{< /a >}} sur les données que vous pouvez confier à une IA : l’API a ses propres conditions, mais vos obligations envers vos clients restent les mêmes.

Faites appel à un développeur quand l’intégration se trouve sur votre site, traite des données personnelles, encaisse des paiements ou tourne sans surveillance. Je développe des logiciels pour mon propre usage, pas pour les vendre, et je connais la satisfaction de construire l’outil dont on a besoin. Un outil dont toute une équipe dépend chaque jour, c’est un autre travail : quand j’ai apporté à {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}} plus de prospects que son équipe ne pouvait en traiter, le client m’a demandé une application interne pour tout voir clairement et ne jamais oublier un rappel, avec l’IA et la téléphonie intégrées.
