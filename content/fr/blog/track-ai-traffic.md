---
title: "Trafic IA dans Google Analytics : mesurer les visites de ChatGPT et des IA"
seo_title: "Trafic IA dans Google Analytics : suivre ChatGPT et les IA"
description: "Mesurer le trafic IA dans Google Analytics 4 pas à pas : canal AI Assistant, groupe de canaux pour l’historique, Search Console, Bing et Microsoft Clarity."
slug: "trafic-ia-google-analytics"
translationKey: "track-ai-traffic"
date: 2026-10-17T08:31:00+02:00
lastmod: 2026-10-17T08:31:00+02:00
category: "aio"
article_type: "tutorial"
keywords: ["trafic IA Google Analytics", "trafic ChatGPT Google Analytics", "canal AI Assistant GA4", "trafic IA GA4", "groupe de canaux personnalisé GA4", "Microsoft Clarity trafic IA"]
summary: "Depuis le 13 mai 2026, GA4 range les visites venues de ChatGPT, Gemini ou Claude dans un canal AI Assistant, qui ignore toutefois l’historique ainsi que les Aperçus IA et le Mode IA de Google. Pour suivre le trafic IA dans Google Analytics sur la durée, créez un groupe de canaux personnalisé avec une règle sur la source, puis ajoutez la Search Console et le canal AIPlatform de Clarity. Comptez enfin les demandes, pas seulement les visites."
cover: "track-ai-traffic"
cover_alt: "Courbe de trafic en hausse avec les mots GA4 et Clarity sur fond de bureau flou"
related: ["check-ai-visibility", "google-search-console-tutorial", "microsoft-clarity-tutorial", "google-ai-overviews-ai-mode", "get-recommended-by-chatgpt"]
services: ["seo"]
faq:
  - q: "Peut-on voir ce que les gens ont demandé à ChatGPT avant de visiter mon site ?"
    a: "Non. Les assistants IA ne transmettent pas la question à votre site : GA4 voit seulement d’où vient la visite et sur quelle page elle arrive. Le plus proche reste le rapport AI Performance de Bing Webmaster Tools, qui liste les requêtes d’ancrage, c’est-à-dire les recherches lancées par Copilot avant de citer vos pages."
  - q: "GA4 peut-il montrer les robots IA comme GPTBot ?"
    a: "Non. GA4 compte les visiteurs dont le navigateur exécute son code de suivi, et les robots comme GPTBot, ClaudeBot ou PerplexityBot n’exécutent pas le JavaScript. Pour les voir, regardez les journaux de votre serveur ou, si vous en utilisez un, les statistiques de robots de votre CDN."
  - q: "Bloquer les robots IA arrête-t-il les visites venues des assistants ?"
    a: "Cela dépend du robot. Bloquer OAI-SearchBot retire vos pages des réponses de recherche de ChatGPT, hormis un simple lien vers votre site, donc l’essentiel de ces visites s’arrête. Bloquer GPTBot refuse seulement l’entraînement des modèles d’OpenAI, sans toucher à la recherche de ChatGPT."
  - q: "Faut-il un outil payant pour suivre le trafic IA ?"
    a: "Pas pour les visites : GA4, la Search Console, Microsoft Clarity et Bing Webmaster Tools sont gratuits. Les outils payants de visibilité IA mesurent autre chose : la fréquence à laquelle les assistants vous citent quand on leur pose une série de questions."
---

Le trafic IA, ce sont les visites que reçoit votre site quand quelqu’un clique sur un lien dans une réponse de ChatGPT, Gemini, Claude, Copilot, Perplexity ou Le Chat de Mistral. Depuis mai 2026, GA4 range une partie de ces visites dans un canal à part, ce qui simplifie la mesure du trafic IA dans Google Analytics. Ce canal a pourtant des angles morts : il ignore l’historique et tout ce qui vient des fonctionnalités IA de Google.

Ce tutoriel comble ces lacunes avec des outils gratuits, en six étapes : le canal intégré de GA4, un groupe de canaux à vous pour l’historique, les pages d’arrivée, la Search Console et Bing pour les réponses IA de Google et de Microsoft, Microsoft Clarity pour le comportement des visiteurs, puis les demandes de contact. Il fait partie de mon {{< a key="ai-search-geo-guide" >}}guide complet du référencement IA{{< /a >}}, qui explique comment se faire citer.

Prévoyez une quarantaine de minutes, des droits de modification sur votre propriété GA4 et un accès à la Search Console. Les menus de GA4 sont cités tels qu’ils apparaissent dans l’interface en français (octobre 2026) ; ceux de Clarity et de Bing le sont dans leur interface en anglais, avec une traduction entre parenthèses quand elle aide.

## Ce qui compte comme trafic IA, et quel outil le voit

Les assistants IA n’envoient pas tous leurs visiteurs de la même façon : aucun rapport ne voit tout. Voici où arrive chaque type de visite :

| Comment la personne a croisé votre site | Ce qui arrive sur votre site | Où le mesurer |
|---|---|---|
| Un lien dans ChatGPT, Gemini, Claude, Copilot ou Perplexity | Une visite, avec un référent et parfois un paramètre UTM | GA4 et Microsoft Clarity |
| Un lien dans les Aperçus IA ou le Mode IA de Google | Une visite venue de Google, comptée comme recherche naturelle | Search Console (impressions seulement) |
| Une citation dans Copilot ou les résumés IA de Bing | Souvent aucune visite | Bing Webmaster Tools |
| Une recommandation suivie plus tard | Un appel, une visite directe ou une recherche sur votre nom | Votre propre suivi des demandes |

ChatGPT ajoute `utm_source=chatgpt.com` aux liens sur lesquels on clique dans ses réponses : c’est l’assistant le plus facile à suivre. Sans ce paramètre, GA4 s’appuie sur le référent, c’est-à-dire l’adresse de la page d’où vient le visiteur. Une visite sans l’un ni l’autre finit dans le canal **Direct**, mélangée aux personnes qui ont tapé votre adresse.

## Étape 1 : trouver le canal AI Assistant dans GA4

Depuis le 13 mai 2026, le groupe de canaux par défaut de GA4 compte un canal **AI Assistant**. Google cite ChatGPT, Gemini et Claude en exemples, mais n’a pas publié sa liste complète, et les sources divergent sur la présence de Perplexity ([page de Google sur le groupe de canaux par défaut](https://support.google.com/analytics/answer/9756891?hl=fr)).

1. Ouvrez **Rapports**, puis **Acquisition de trafic**, en général sous **Acquisition**.
2. Choisissez une période d’au moins 28 jours ; sur un site vitrine qui reçoit peu de visites, trois mois en disent plus.
3. Repérez la ligne **AI Assistant**. Ses sessions, son taux d’engagement et ses événements clés s’affichent dans les mêmes colonnes que vos autres canaux.
4. Cliquez sur le signe plus à côté du titre de la première colonne et ajoutez la source de la session en dimension secondaire (tapez « source » dans le champ de recherche) pour voir quel assistant a envoyé chaque visite.

{{< screenshot id="track-ai-traffic-01" alt="Rapport Acquisition de trafic de GA4 avec le canal AI Assistant parmi les autres canaux" >}}

Deux limites s’appliquent. Le canal ne classe que les visites à partir du 13 mai 2026 : les précédentes restent là où GA4 les avait rangées, surtout dans **Referral** (sites référents) ou **Unassigned**, le canal des visites qu’il ne sait pas classer. Et il laisse de côté les Aperçus IA et le Mode IA, dont les visites arrivent comme n’importe quel clic de recherche naturelle sur Google.

## Étape 2 : suivre le trafic IA dans Google Analytics avant mai 2026

Un groupe de canaux personnalisé est votre propre version de la liste des canaux de GA4. Contrairement au canal intégré, il classe aussi les données recueillies avant sa création : vos visites IA d’avant mai 2026 apparaissent, et c’est vous qui choisissez les assistants pris en compte ([aide de Google sur les groupes de canaux personnalisés](https://support.google.com/analytics/answer/13051316?hl=fr)).

### Créer le groupe

Dans **Administration**, sous **Affichage des données**, cliquez sur **Groupes de canaux**, puis sur **Créer un groupe de canaux**. GA4 part d’une copie du groupe par défaut. Donnez un nom à votre groupe, par exemple « Canaux avec IA ». Une propriété GA4 standard accepte deux groupes de canaux personnalisés, et ce tutoriel n’en utilise qu’un.

{{< screenshot id="track-ai-traffic-02" alt="Page Groupes de canaux de l’administration GA4, avec le bouton pour créer un groupe" >}}

### Ajouter le canal IA

En bas de la liste des canaux, ajoutez un canal nommé « Assistants IA ». Réglez sa condition sur la source, choisissez l’option d’expression régulière (regex) et collez cette valeur :

```
.*(chatgpt|chat\.openai|perplexity|claude\.ai|gemini\.google|copilot|deepseek|chat\.mistral|grok).*
```

Les barres verticales signifient « ou », et les barres obliques inverses rendent les points littéraux : `claude\.ai` ne correspond qu’à une source qui contient claude.ai. `chat\.mistral` couvre Le Chat, l’assistant de la société française Mistral AI, qui ne figure pas parmi les exemples cités par Google. Pour ajouter un assistant plus tard, insérez une barre et une partie de son adresse avant la parenthèse fermante. J’ai laissé de côté openai.com et google.com seuls : ils attraperaient aussi les visiteurs venus des autres sites d’OpenAI et de Google.

{{< screenshot id="track-ai-traffic-03" alt="Nouveau canal Assistants IA avec une condition sur la source en expression régulière" >}}

### Le placer en tête de liste

Enregistrez le canal, puis réorganisez la liste pour placer « Assistants IA » tout en haut. **GA4 lit les canaux de haut en bas et range chaque visite dans le premier qui correspond** : un canal IA placé sous Referral passerait à côté de la plupart de ses visites. Enregistrez ensuite le groupe.

{{< screenshot id="track-ai-traffic-04" alt="Liste des canaux du groupe personnalisé, avec Assistants IA déplacé en tête" >}}

### Le lire dans vos rapports

De retour dans **Acquisition de trafic**, cliquez sur le titre de la première colonne, qui ouvre une liste déroulante, et choisissez votre groupe de canaux à la place du groupe par défaut. Réglez une période qui commence avant le 13 mai 2026 : la ligne « Assistants IA » montre désormais aussi les visites plus anciennes. Sélectionnez-le ainsi dans le rapport plutôt que d’en faire le groupe de canaux principal de la propriété : un groupe principal ne s’applique qu’à partir du jour où vous le choisissez.

{{< screenshot id="track-ai-traffic-05" alt="Rapport Acquisition de trafic avec le groupe de canaux personnalisé et des visites IA antérieures à mai 2026" >}}

{{< callout type="tip" >}}**Comparez votre canal à celui de Google.** Sur une période postérieure au 13 mai 2026, si « Assistants IA » compte plus de visites que le canal AI Assistant du groupe par défaut, l’écart vient d’assistants que Google ne reconnaît pas. S’il en compte moins, regardez les sources du canal de Google et ajoutez à votre regex celles qui manquent.{{< /callout >}}

## Étape 3 : voir sur quelles pages arrivent les visiteurs IA

Savoir que ChatGPT vous a envoyé 14 visites compte moins que savoir où il les a envoyées. Ces pages d’arrivée sont celles que les assistants choisissent sur votre sujet : elles doivent être exactes et à jour.

1. Dans **Acquisition de trafic**, avec votre groupe de canaux en première colonne, cliquez sur le signe plus et tapez « destination » pour ajouter la page de destination en dimension secondaire.
2. Regardez les lignes « Assistants IA » : chacune correspond à une page sur laquelle ces visiteurs sont arrivés.
3. Ouvrez chacune de ces pages sur votre téléphone et lisez-la comme un inconnu. Vos tarifs ou votre fourchette de prix, la zone que vous couvrez (Paris, l’Île-de-France, votre département) et le moyen de vous contacter sont-ils clairs en quelques secondes ?

{{< screenshot id="track-ai-traffic-06" alt="Rapport Acquisition de trafic avec la page de destination en dimension secondaire pour le canal Assistants IA" >}}

Si une page reçoit des visites IA mais aucune demande, regardez-la dans Clarity (étape 5) avant de changer quoi que ce soit d’autre.

## Étape 4 : vérifier les Aperçus IA et le Mode IA dans la Search Console

Les visites venues des Aperçus IA et du Mode IA de Google arrivent sur votre site comme du trafic de recherche naturelle : GA4 ne peut pas les distinguer des clics ordinaires. La Search Console est le seul endroit qui montre à quelle fréquence les fonctionnalités IA de Google affichent vos pages.

Google a annoncé le 3 juin 2026 des [rapports sur l’IA générative dans la Search Console](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) (en anglais), et tous les sites y ont accès depuis le 31 août 2026. Ils se trouvent avec les autres rapports **Performances** : l’un pour la recherche, qui couvre les Aperçus IA et le Mode IA, l’autre pour Discover.

1. Ouvrez votre propriété, puis le rapport sur l’IA générative pour la recherche.
2. Triez les pages par impressions : ce sont celles que les fonctionnalités IA de Google affichent le plus souvent.
3. Filtrez sur le pays France si vous ne servez que ce marché. Les Aperçus IA et le Mode IA ne sont arrivés en France que le 22 juillet 2026 : les recherches faites depuis la France n’alimentent ces rapports que depuis cette date.
4. Pour les clics, revenez au rapport **Performances** principal : les clics venus des Aperçus IA et du Mode IA y sont comptés dans le type de recherche **Web** (depuis juin 2025 pour le Mode IA), mêlés aux résultats classiques.

Lisez ces rapports en connaissant leurs limites. Ils ne comptent que des impressions, sans clics, ni taux de clics, ni position, ni requêtes, et ces impressions figurent déjà dans le type de recherche Web : n’additionnez pas les deux. Pour installer la Search Console, suivez mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}} ; pour que votre site soit cité plus souvent, lisez {{< a key="google-ai-overviews-ai-mode" >}}comment faire citer votre site dans les Aperçus IA et le Mode IA{{< /a >}}.

{{< screenshot id="track-ai-traffic-07" alt="Rapport sur l’IA générative de la Search Console pour la recherche, avec les impressions par page" >}}

### Pour Copilot : Bing Webmaster Tools

L’équivalent chez Microsoft est le rapport **AI Performance** (performances IA) de Bing Webmaster Tools, en préversion publique depuis février 2026 et ouvert à tout site validé. Il compte combien de fois Copilot et les résumés IA de Bing citent vos pages et liste les requêtes d’ancrage (grounding queries), c’est-à-dire les recherches que l’IA a lancées avant de répondre. Comme le rapport de Google, il ne donne pas de clics, et ses données sont échantillonnées. Si votre site est déjà dans la Search Console, Bing peut l’importer : rien de plus à valider.

{{< screenshot id="track-ai-traffic-08" alt="Rapport AI Performance de Bing Webmaster Tools avec les citations dans le temps et les requêtes d’ancrage" >}}

## Étape 5 : observer les visiteurs IA dans Microsoft Clarity

Depuis le 29 août 2025, Clarity range les visites venues d’assistants IA comme ChatGPT, Claude, Copilot, Gemini et Perplexity dans un canal à part, **AIPlatform**, avec **PaidAIPlatform** pour le trafic payant qui en provient ([page de Microsoft sur le groupe de canaux IA](https://learn.microsoft.com/fr-fr/clarity/insights/ai-channel-group)). Clarity utilise sa propre liste : ne vous attendez pas à retrouver exactement les chiffres de GA4.

J’utilise Clarity pour voir où les gens s’attardent, s’ils viennent pour quelque chose de précis et ce qui les fait partir, afin d’y remédier : le texte, une image ou l’expérience utilisateur. Les visiteurs envoyés par un assistant arrivent avec une question déjà en tête, ce qui rend leurs sessions rapides à lire.

1. Ouvrez le **Dashboard** (tableau de bord) de votre projet Clarity, allez dans l’onglet **Channels** (canaux) de la carte qui liste vos sources de trafic (Referrer ou Traffic selon la version) et cliquez sur **AIPlatform**. Le tableau de bord ne montre alors plus que ces visites et les pages qu’elles consultent.
2. Appliquez le même filtre dans **Recordings** (enregistrements) et regardez cinq sessions.
3. Notez où les gens arrêtent de faire défiler la page, ce sur quoi ils cliquent et s’ils atteignent votre page de contact ou votre numéro de téléphone.
4. Corrigez d’abord le problème le plus fréquent, puis revenez un mois plus tard.

{{< screenshot id="track-ai-traffic-09" alt="Enregistrements Microsoft Clarity filtrés sur le canal AIPlatform" >}}

Le rapport Citations de Clarity, gratuit et désormais ouvert à tous, mesure autre chose : combien de fois les réponses des IA, surtout celles de Copilot, citent votre site. Si Clarity n’est pas encore installé sur votre site, mon {{< a key="microsoft-clarity-tutorial" >}}tutoriel Microsoft Clarity{{< /a >}} détaille le code de suivi et le signal de consentement que Clarity exige depuis le 31 octobre 2025 pour les visiteurs de l’EEE et du Royaume-Uni.

## Étape 6 : compter les demandes, pas seulement les visites

Une visite n’est pas un client. Pour {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, l’installateur de climatisation dont je gère le site et le SEO, les prospects se mesurent en formulaires et en appels. Appliquez la même mesure à l’IA :

1. **Faites de vos demandes des événements clés.** Dans GA4, ouvrez **Administration** > **Affichage des données** > **Événements** et activez, pour l’événement qu’envoie votre formulaire de contact, l’option qui le marque comme événement clé. La colonne **Événements clés** de l’Acquisition de trafic montre alors les demandes par canal, IA comprise. Si votre formulaire n’envoie encore aucun événement, demandez à la personne qui a créé votre site d’en ajouter un.
2. **Demandez à chaque nouveau contact comment il vous a trouvé.** Ajoutez à votre formulaire un champ « Comment nous avez-vous connus ? » avec une option comme « ChatGPT ou un autre assistant IA », et posez la même question au téléphone. D’expérience, les gens préfèrent appeler plutôt qu’écrire, parce que c’est plus rapide, et un appel ne laisse aucune trace dans GA4.
3. **Surveillez les recherches sur votre nom.** Quelqu’un qui a lu votre nom dans une réponse peut simplement chercher votre entreprise. Le filtre des requêtes de marque du rapport **Performances** de la Search Console sépare ces recherches des autres : vous voyez si elles augmentent.

{{< screenshot id="track-ai-traffic-10" alt="Liste des événements de GA4, avec l’événement du formulaire de contact marqué comme événement clé" >}}

## Pourquoi vos chiffres IA sont toujours trop bas

Prenez chaque chiffre IA comme un minimum, pour quatre raisons :

- **Les paramètres UTM et les référents manquants.** Une visite sans l’un ni l’autre finit dans Direct. À partir du 9 octobre 2026, des sociétés d’analyse ont signalé une forte baisse des visites venues de ChatGPT dans GA4, de près de moitié sur les sites que suit l’une d’elles, pendant que le trafic Direct augmentait : ChatGPT semble avoir cessé d’ajouter son paramètre UTM à une partie de ses liens. OpenAI n’avait annoncé aucun changement au moment où j’écris ces lignes. Si vos chiffres ChatGPT ont chuté cette semaine-là, regardez le trafic Direct des mêmes pages avant de conclure.
- **Les refus de cookies.** Les visiteurs qui refusent les cookies de mesure d’audience sur votre bandeau ne sont pas comptés de la façon habituelle, ni dans GA4 ni dans Clarity.
- **Les fonctionnalités IA de Google.** Les clics venus des Aperçus IA et du Mode IA se mêlent à la recherche naturelle, et la Search Console n’en montre que les impressions.
- **Les gens qui ne cliquent jamais.** Ils lisent votre nom dans une réponse, puis vous appellent ou vous cherchent une semaine plus tard.

Ces chiffres ne sont pas inutiles pour autant : une tendance sur plusieurs mois vous dit si les assistants vous envoient plus de monde, même si chaque chiffre est sous-estimé.

## Votre point mensuel sur le trafic IA

Une fois tout en place, dix minutes par mois suffisent :

1. GA4 : visites et événements clés du canal « Assistants IA », comparés au mois précédent.
2. GA4 : les pages d’arrivée de ces visites.
3. Search Console : impressions du rapport sur l’IA générative, par page.
4. Bing Webmaster Tools : les citations dans Copilot, si vous y avez ajouté votre site.
5. Clarity : cinq enregistrements du canal AIPlatform.
6. Votre suivi des demandes : les formulaires et les appels qui mentionnent un assistant.

Si les chiffres restent à zéro pendant des mois, vous avez un problème de visibilité, pas de mesure. Vérifiez d’abord si les assistants vous citent avec mon guide pour {{< a key="check-ai-visibility" >}}vérifier votre visibilité IA{{< /a >}}, puis travaillez sur la façon d’{{< a key="get-recommended-by-chatgpt" >}}apparaître dans ChatGPT{{< /a >}}. Et gardez le sens des proportions : si l’IA vous envoie une poignée de visites par mois, continuez à travailler les canaux qui vous amènent déjà des clients au lieu de tout réorganiser autour d’un nouveau.
