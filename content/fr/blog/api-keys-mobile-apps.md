---
title: "Clés API dans une application mobile : pourquoi ne jamais les embarquer, et que faire à la place"
seo_title: "Clé API dans une application mobile : ne l’embarquez jamais"
description: "Clé API dans une application mobile : pourquoi ne jamais embarquer une clé secrète OpenAI, Claude ou Stripe, et la petite fonction serveur à utiliser."
slug: "cle-api-application-mobile"
translationKey: "api-keys-mobile-apps"
date: 2026-10-18T22:51:00+02:00
lastmod: 2026-10-18T22:51:00+02:00
category: "mobile-apps"
article_type: "guide"
keywords: ["clé API application mobile", "sécuriser une clé API", "cacher une clé API", "clé API OpenAI application", "proxy clé API", "Firebase App Check"]
summary: "Toute clé embarquée dans une application mobile est publique : n’importe qui peut télécharger l’app et lire son contenu, et l’obfuscation ne fait que ralentir. Les clés secrètes (OpenAI, Claude, clé secrète Stripe) restent sur un serveur, dans une petite fonction qui vérifie l’utilisateur, applique vos limites et appelle l’API. Les clés conçues pour être publiques, comme la configuration Firebase ou la clé publiable Stripe, peuvent être embarquées si des règles les protègent."
cover: "api-keys-mobile-apps"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’une fenêtre de code"
related: ["ai-app-data-leaks", "mobile-app-security-checklist", "claude-api-tutorial", "openai-api-tutorial", "mobile-app-launch-guide"]
services: ["automation"]
faq:
  - q: "Peut-on stocker une clé API dans le trousseau iOS ou le Keystore Android ?"
    a: "Pour les secrets créés sur le téléphone, comme le jeton de session d’un utilisateur, oui : c’est leur rôle. Pour une clé livrée avec l’application, non : elle se lit dans le fichier de l’app avant même que votre code ne la range dans le trousseau ou le Keystore."
  - q: "Mes utilisateurs peuvent-ils utiliser leur propre clé OpenAI ou Claude ?"
    a: "Oui. Certaines applications laissent l’utilisateur coller sa propre clé, qu’il paie et peut révoquer. Rangez-la dans le trousseau ou le Keystore, envoyez-la uniquement au fournisseur en HTTPS, et ne vous rabattez jamais sur votre propre clé quand la sienne manque."
  - q: "Un dépôt GitHub privé suffit-il à protéger une clé API ?"
    a: "C’est mieux qu’un dépôt public, mais insuffisant : toute personne ayant accès au dépôt, à ses journaux de build ou à une copie sur un ordinateur portable peut lire la clé, et un dépôt peut devenir public par erreur. Gardez plutôt vos clés dans le coffre à secrets de votre plateforme."
  - q: "L’épinglage de certificat (certificate pinning) protège-t-il une clé API ?"
    a: "Non. Il complique la lecture du trafic de l’app à travers un proxy d’interception, ce qui protège les connexions de vos utilisateurs, mais la clé reste dans le fichier de l’application pour qui le décompresse. La documentation Android le présente comme une couche de sécurité supplémentaire, pas comme une cachette pour vos secrets."
  - q: "Comment savoir si quelqu’un utilise ma clé API ?"
    a: "Consultez la page d’utilisation du fournisseur : pics, modèles que vous n’utilisez pas, activité aux heures où vos utilisateurs dorment. Anthropic recommande de surveiller régulièrement l’usage de vos clés dans la console Claude, et une limite de dépenses plafonne les dégâts pendant que vous cherchez."
---

Si votre application appelle OpenAI, Claude, Stripe ou tout autre service payant avec une clé secrète rangée dans l’app, partez du principe que cette clé est déjà publique. Une application mobile est un fichier que n’importe qui peut télécharger et démonter : la sécurité d’une **clé API dans une application mobile** tient donc en une règle. Les clés secrètes restent sur un serveur que vous contrôlez, et l’application passe par ce serveur.

Au programme : les clés à garder secrètes, ce qu’il faut construire à la place et que faire après une fuite. Ce guide complète mon guide pour {{< a key="mobile-app-launch-guide" >}}lancer une application mobile{{< /a >}}.

L’IA a raccourci le temps nécessaire pour créer une application, pour moi comme pour tout le monde : l’{{< a key="bespoke-crm-internal-app" >}}application interne créée pour un client débordé de prospects{{< /a >}} intègre l’IA et la téléphonie. L’IA n’a pas changé l’endroit où doit vivre une clé secrète.

## Clé API dans une application mobile : toute clé embarquée est publique

Une application Android est un fichier APK, une application iPhone un fichier IPA : des archives que des outils gratuits ouvrent en quelques minutes. La [documentation Android](https://developer.android.com/privacy-and-security/security-tips) le dit sans détour : si le code source de votre application contient des clés API, un attaquant peut décompiler l’application et les retrouver.

Les façons habituelles de cacher une clé n’y changent rien :

- **L’obfuscation**, ou le découpage de la clé en morceaux, ralentit le lecteur, sans plus : l’application doit reconstituer la clé pour s’en servir, et quiconque fait tourner votre app sur son propre téléphone peut lire les requêtes qu’elle envoie.
- **Les fichiers .env et les variables de build** finissent dans l’application. Expo prévient que ses variables `EXPO_PUBLIC_` sont visibles en clair dans l’application compilée ; il en va de même pour toute valeur compilée dans une app Flutter, Swift ou Kotlin.

Les fournisseurs sont d’accord. OpenAI demande de ne jamais déployer une clé côté client, dans un navigateur ou une application mobile, et de faire passer les requêtes par votre propre serveur ([OpenAI](https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety)). Anthropic demande de ne jamais inclure la clé directement dans votre code ou vos fichiers de configuration ([centre d’aide de Claude](https://support.claude.com/en/articles/9767949-api-key-best-practices-keeping-your-keys-safe-and-secure)). Les bibliothèques JavaScript des deux entreprises refusent même de tourner dans un navigateur sans une option nommée `dangerouslyAllowBrowser`.

Le coût d’une clé copiée dépend de ce qu’elle ouvre. Une clé d’IA lance des requêtes à vos frais, jusqu’à votre limite, et consomme les quotas de vos vrais utilisateurs. Une clé de base de données ou d’administration cloud ouvre les données de vos utilisateurs.

## Clés secrètes et clés conçues pour être publiques

Toutes les clés présentes dans une app ne sont pas des erreurs : certaines sont faites pour être publiques, et la protection se trouve ailleurs.

| Clé | Dans l’app ? | Ce que permet une copie |
|---|---|---|
| Clé API OpenAI, Claude (`sk-ant-…`) ou Mistral AI | Jamais | Des requêtes à vos frais |
| Clé secrète Stripe (`sk_live_…`) ou clé restreinte (`rk_live_…`) | Jamais | Votre compte Stripe, dans la limite des droits de la clé |
| Clé secrète Supabase (`sb_secret_…`) ou ancienne clé `service_role` | Jamais | Toutes les tables, sécurité RLS contournée |
| Identifiants cloud (compte de service Google Cloud, clé d’accès AWS) | Jamais | Tout ce que leurs droits permettent |
| Clé publiable Stripe (`pk_live_…`) | Oui | Peu de chose : elle est faite pour être publique |
| Configuration Firebase (`apiKey`) | Oui | Ce que vos règles de sécurité autorisent |
| Clé publishable Supabase (`sb_publishable_…`) ou ancienne clé anon | Oui | Ce que la sécurité RLS autorise |
| Clé Google Maps | Oui, restreinte | Des requêtes Maps à vos frais, sauf restriction |

Une clé publique ne vaut que par les règles qui la protègent. Firebase précise que ses clés identifient votre projet sans contrôler l’accès à vos données : ce rôle revient aux règles de sécurité, d’où mon tutoriel pour {{< a key="ai-app-data-leaks" >}}vérifier vos règles Firebase et Supabase{{< /a >}}. Deux précautions de plus :

- **Restreignez chaque clé publique** à votre application et aux API utiles. La documentation Android cite Google Maps, dont les clés se limitent au nom de package et à la clé de signature de votre app (sur iOS, à son identifiant de bundle).
- **Ne laissez jamais une clé publique appeler une API d’IA payante.** Firebase déconseille d’autoriser l’API Gemini Developer sur une clé accessible publiquement : une clé prévue pour une carte ouvrirait votre budget IA.

## Que faire à la place : une petite fonction entre votre app et l’API

La solution tient en quelques lignes de code côté serveur, ce qu’on appelle un backend ou un proxy. L’application envoie la demande de l’utilisateur à votre fonction, qui vérifie qui demande, applique vos limites, ajoute la clé et appelle l’API. La clé ne quitte jamais le serveur.

Inutile de louer un serveur : Firebase Cloud Functions, Supabase Edge Functions et Cloudflare Workers n’exécutent le code qu’à l’appel et gardent les clés dans un coffre à secrets, hors de votre code. Voici une fonction Firebase minimale, en JavaScript, qui répond à une question avec Claude (la requête est expliquée dans mon {{< a key="claude-api-tutorial" >}}tutoriel sur l’API Claude{{< /a >}}) :

```js
// functions/index.js — l’app appelle askAssistant, jamais Claude directement
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");

const claudeKey = defineSecret("ANTHROPIC_API_KEY");

exports.askAssistant = onCall(
  { secrets: [claudeKey], enforceAppCheck: true },
  async (request) => {
    // 1. Utilisateurs connectés uniquement
    if (!request.auth) {
      throw new HttpsError("unauthenticated", "Connectez-vous d’abord.");
    }
    // 2. Vos limites : question courte, modèle fixe, réponse plafonnée
    const question = String(request.data?.question ?? "").slice(0, 2000);
    if (!question) {
      throw new HttpsError("invalid-argument", "La question est vide.");
    }
    // 3. La clé est ajoutée ici, sur le serveur
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": claudeKey.value(),
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-5-5",
        max_tokens: 500,
        messages: [{ role: "user", content: question }],
      }),
    });
    if (!response.ok) {
      throw new HttpsError("unavailable", "L’assistant est indisponible.");
    }
    const data = await response.json();
    const answer = data.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("");
    return { answer };
  }
);
```

Enregistrez la clé une fois avec la ligne de commande Firebase, puis déployez :

```bash
firebase functions:secrets:set ANTHROPIC_API_KEY
firebase deploy --only functions
```

L’app appelle `askAssistant` via le SDK Firebase, sans jamais voir la clé. Avec OpenAI, seule la requête change, comme le montre mon {{< a key="openai-api-tutorial" >}}tutoriel sur l’API ChatGPT (OpenAI){{< /a >}}.

Pour Gemini, une version toute faite existe : Firebase AI Logic sert de proxy géré, si bien que la clé Gemini reste chez Google, jamais dans votre app.

## Rendre la fonction difficile à détourner

Une fois la clé derrière votre fonction, c’est la fonction qu’il faut protéger :

1. **Utilisateurs connectés uniquement.** La vérification de `request.auth` ci-dessus refuse les appels anonymes.
2. **Des requêtes venues de votre vraie application.** App Attest (Apple) et Play Integrity (Google) permettent à votre serveur de vérifier qu’une requête vient d’une copie intacte de votre app, sur un vrai appareil ; Firebase App Check regroupe les deux, et `enforceAppCheck: true` refuse les appels sans jeton valide. Google conseille d’en faire un élément d’une stratégie anti-abus, pas le seul rempart, et tous les appareils ne prennent pas en charge App Attest : prévoyez le cas où la vérification échoue.
3. **Une limite quotidienne par utilisateur.** Comptez les requêtes de chaque utilisateur dans votre base et refusez au-delà de votre seuil : créer un compte est facile, et cette limite empêche une seule personne de vider votre budget.
4. **Une limite de dépenses chez le fournisseur.** Dans la console Claude, réglez-la sur la page **Billing**, rubrique **Spend limits** ; OpenAI propose une limite mensuelle par projet. Choisissez un montant que vous pourriez perdre sans drame : c’est à peu près le maximum que coûtera une fuite.

Utilisez aussi des clés distinctes pour le développement et la production. Anthropic permet de fixer une date d’expiration à la création d’une clé et conseille de les renouveler à intervalle régulier, par exemple tous les 90 jours.

{{< callout type="warning" >}}**Si votre app utilise Firebase AI Logic :** au 19 octobre 2026, Firebase annonce qu’App Check sera obligatoire pour utiliser Firebase AI Logic à partir du **2 novembre 2026** : les requêtes sans jeton App Check valide seront bloquées, y compris celles des versions de l’app sans fournisseur d’attestation de production ([documentation Firebase](https://firebase.google.com/docs/ai-logic/app-check)). Si votre configuration date d’avant début juillet 2026, la vérification n’a pas été rendue obligatoire pour vous : ajoutez App Check à l’app et publiez la mise à jour avant cette date.{{< /callout >}}

## Gardez les clés hors de votre dépôt de code

Le code de votre fonction vit dans un dépôt ; la clé, non. Gardez-la dans le coffre à secrets de la plateforme et, si vous testez avec un fichier `.env` local, ajoutez-le au `.gitignore` avant votre premier commit. Supprimer une clé dans un commit suivant la laisse dans l’historique : une clé poussée est une clé qui a fuité.

GitHub ajoute deux filets de sécurité. La **protection des push** (push protection) bloque un push qui contient un secret reconnu : elle est active par défaut pour les dépôts publics et, pour les dépôts privés, elle fait partie de l’offre payante GitHub Secret Protection. GitHub repère aussi les clés API Claude dans les dépôts publics, et Anthropic les désactive alors automatiquement en vous prévenant par e-mail. C’est utile, mais il vous faudra de toute façon une nouvelle clé.

## Si une clé a déjà fuité : la première heure

Corrigez d’abord, enquêtez ensuite :

1. **Créez une nouvelle clé** et rangez-la dans les secrets de votre serveur, pour que votre fonction continue de tourner.
2. **Révoquez l’ancienne.** Dans la console Claude : page **API keys**, menu à trois points à côté de la clé, **Delete API Key**. Chez OpenAI, Stripe ou Supabase, supprimez-la ou remplacez-la dans la section des clés API du tableau de bord. Seule la révocation rend les copies inutilisables ; une mise à jour de l’app, non.
3. **Vérifiez l’utilisation et la facturation** depuis la date possible de l’exposition, et baissez votre limite de dépenses en attendant.
4. **Publiez une mise à jour** qui passe par votre fonction. Les anciennes versions installées gardent la clé révoquée et leurs fonctions d’IA ou de paiement s’arrêteront : invitez leurs utilisateurs à mettre l’app à jour.
5. **Demandez-vous si des données personnelles étaient accessibles.** La fuite d’une clé de base de données ou d’une clé cloud peut constituer une violation de données personnelles. L’article 33 du RGPD impose alors au responsable du traitement de la notifier à l’autorité de contrôle (la CNIL en France) dans les meilleurs délais et, si possible, 72 heures au plus tard après en avoir pris connaissance, sauf si elle n’est pas susceptible d’engendrer un risque pour les droits et libertés des personnes. Mon guide sur la {{< a key="gdpr-data-breach" >}}violation de données dans les 72 heures{{< /a >}} détaille la marche à suivre. Ceci est une information générale, pas un conseil juridique : si des données personnelles ont pu être exposées, demandez à un avocat ou à votre DPO ce que vous devez déclarer.

## Avant de publier : vérifiez l’app compilée, puis la liste

Contrôlez le fichier que vous allez envoyer sur les stores, pas seulement votre code source. Un APK, un AAB ou un IPA est une archive zip : extrayez-en une copie et cherchez-y les premiers caractères de chacune de vos clés secrètes.

```bash
unzip -o app-release.apk -d apk-check
grep -r -a -l "sk-ant-" apk-check
```

Un résultat signale une fuite. L’absence de résultat ne prouve rien pour une clé découpée ou encodée : passez aussi la liste en revue.

- Aucune clé secrète dans le code de l’app, ses variables de build ou ses fichiers de configuration.
- Chaque appel à une API payante passe par votre fonction, qui vérifie l’utilisateur, l’app et une limite quotidienne.
- Une limite de dépenses chez chaque fournisseur d’API.
- Les clés dans le coffre à secrets de la plateforme, aucune dans un dépôt, protection des push activée.
- Des clés distinctes pour le développement et la production, avec une date de renouvellement dans votre agenda.
- Les clés publiques restreintes à votre app et à ses API, et vos règles de base de données testées.

Pour les autres vérifications avant le lancement, suivez ma {{< a key="mobile-app-security-checklist" >}}checklist de sécurité d’une application mobile{{< /a >}}. Si votre app encaisse des paiements ou stocke des données clients et que personne dans votre équipe n’a jamais écrit de code serveur, faites écrire ou relire la fonction par un développeur : elle est courte, mais c’est elle qui garde les clés.
