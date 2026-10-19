---
title: "Suivre son tunnel avec les UTM et GA4 : quel canal amène des rendez-vous"
seo_title: "UTM Google Analytics 4 : quel canal amène vos rendez-vous"
description: "Paramètres UTM et Google Analytics 4 : nommer vos liens, compter chaque rendez-vous comme événement clé et lire les bons rapports, étape par étape."
slug: "utm-google-analytics-4"
translationKey: "utm-ga4-funnel-tracking"
date: 2026-10-18T23:36:00+02:00
lastmod: 2026-10-18T23:36:00+02:00
category: "funnels"
article_type: "tutorial"
keywords: ["UTM Google Analytics 4", "paramètres UTM GA4", "événement clé GA4", "exploration de l’entonnoir GA4", "suivi des rendez-vous GA4"]
summary: "Ajoutez utm_source, utm_medium et utm_campaign à chaque lien que vous maîtrisez, en minuscules, et envoyez chaque réservation vers une page de remerciement comptée comme événement clé dans GA4. Le rapport Acquisition de trafic, par source/support de la session, montre alors les rendez-vous de chaque canal ; une exploration de l’entonnoir montre où les visiteurs abandonnent. Comparez avec votre outil de réservation : GA4 ne voit jamais tous les rendez-vous."
cover: "utm-ga4-funnel-tracking"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, au-dessus d’une photo de courbe ascendante"
related: ["build-sales-funnel", "track-ai-traffic", "microsoft-clarity-tutorial", "newsletter-metrics", "cookie-banner-rules"]
services: ["automation"]
faq:
  - q: "Les paramètres UTM sont-ils sensibles à la casse dans GA4 ?"
    a: "Les valeurs, oui : GA4 affiche utm_source=LinkedIn et utm_source=linkedin comme deux sources distinctes. Ses règles de canaux ignorent la casse, donc les deux arrivent dans le même canal, mais vos lignes de source et de campagne se dédoublent. Écrivez tout en minuscules."
  - q: "Pourquoi mes campagnes affichent-elles (not set) ou Unassigned dans GA4 ?"
    a: "(not set) signale un paramètre manquant, par exemple un lien avec une source et un support mais sans campagne. Unassigned signifie que GA4 n’a trouvé aucune règle de canal pour votre support : utilisez des valeurs qu’il reconnaît, en anglais, comme email, social ou referral."
  - q: "Peut-on savoir quel canal a amené un rendez-vous si l’outil de réservation ne redirige pas ?"
    a: "Pas directement dans GA4. Comptez les rendez-vous dans l’outil de réservation et ajoutez une question obligatoire « Comment nous avez-vous connus ? » au formulaire de réservation. Sur YouCanBookMe, la redirection vers votre propre page demande l’offre Professional ou Teams ; sur Calendly, une offre payante."
  - q: "Jusqu’où remonte une exploration de l’entonnoir dans GA4 ?"
    a: "Jusqu’à la durée de conservation des données de votre propriété : 2 ou 14 mois sur une propriété standard. Les rapports standards comme Acquisition de trafic ne sont pas concernés. Choisissez 14 mois dans Administration pour comparer un mois au même mois de l’année précédente."
  - q: "Les liens UTM fonctionnent-ils dans un PDF, un QR code ou WhatsApp ?"
    a: "Oui. Les paramètres suivent le lien partout où il est cliqué ou scanné : balisez les liens de votre plaquette PDF, le QR code de vos flyers et les messages que vous envoyez. Sans balise, ces visites arrivent sans site d’origine et tombent dans Direct."
---

GA4 vous dit combien de personnes visitent votre site et, à peu près, d’où elles viennent, mais pas lesquelles ont pris rendez-vous. Trois éléments comblent ce manque : des paramètres UTM sur chaque lien que vous maîtrisez, une page de remerciement après chaque réservation et un événement clé dans Google Analytics 4 qui la compte. Deux écrans de GA4 montrent ensuite quel canal amène des rendez-vous et où les autres abandonnent.

Il vous faut GA4 sur votre site et la possibilité d’y ajouter une page. J’utilise YouCanBookMe pour mes rendez-vous, d’où les exemples ; Calendly fonctionne de la même façon. Si votre tunnel n’existe pas encore, commencez par mon tutoriel pour {{< a key="build-sales-funnel" >}}créer son tunnel de vente avec ses outils actuels{{< /a >}}. Les deux font partie de mon {{< a key="funnels-newsletters-guide" >}}guide complet du tunnel de vente et de la newsletter{{< /a >}}.

## Comment Google Analytics 4 lit les paramètres UTM

Un paramètre UTM est une étiquette ajoutée à la fin d’un lien, qui indique à Google Analytics d’où vient le clic. GA4 la lit à l’arrivée du visiteur.

| Paramètre | Ce qu’il enregistre | Exemple |
|---|---|---|
| `utm_source` | Où se trouve le lien | `newsletter`, `linkedin` |
| `utm_medium` | Le type de lien (le « support ») | `email`, `social`, `referral` |
| `utm_campaign` | Le message ou l’offre | `2026-10-newsletter` |
| `utm_content` | Le lien précis, quand un message en contient plusieurs | `bouton-haut` |
| `utm_term` | Le mot-clé, pour les annonces payantes | Rarement utile |
| `utm_id` | L’identifiant de campagne, pour les données importées | Rarement utile |

Google demande de toujours renseigner les trois premiers ([page d’aide de Google sur les URL de campagne](https://support.google.com/analytics/answer/10917952?hl=fr)).

GA4 range ensuite chaque visite dans un canal, surtout d’après le support, selon des règles fixes : `email` va dans Email, `social` dans Organic Social, `referral` dans Referral ([règles de canaux de Google](https://support.google.com/analytics/answer/9756891?hl=fr)). Ces valeurs s’écrivent en anglais : un support inconnu de GA4, comme `courriel` ou `reseau-social`, finit dans **Unassigned** (non attribué), la case des visites non classées. Les visites sans balise ni site d’origine finissent dans **Direct**, avec les personnes qui ont tapé votre adresse.

## Étape 1 : écrire un plan de nommage avant de baliser quoi que ce soit

La plupart des problèmes d’UTM sont des fautes d’orthographe. GA4 distingue majuscules et minuscules : `LinkedIn` et `linkedin` font deux sources, et une coquille dans le support envoie les visites dans Unassigned. Cinq règles évitent les deux :

1. **Des minuscules uniquement**, partout.
2. **Des tirets à la place des espaces, et pas d’accents** : un espace devient `%20` et un « é », `%C3%A9`.
3. **Uniquement des supports que GA4 reconnaît** : `email`, `social`, `referral`.
4. **Un nom de campagne par message ou par offre**, date en tête : `2026-10-newsletter` se range tout seul.
5. **Jamais de balise sur les liens entre vos propres pages.** Le rendez-vous serait attribué à votre propre balise au lieu du canal qui a amené le visiteur.

Notez ce plan dans un tableur partagé, une ligne par lien avec ses valeurs, le lien complet et la date. Par exemple, pour une entreprise de services :

| Emplacement du lien | utm_source | utm_medium | utm_campaign |
|---|---|---|---|
| Newsletter mensuelle | `newsletter` | `email` | `2026-10-newsletter` |
| Votre signature email | `signature` | `email` | `permanent` |
| Un post LinkedIn | `linkedin` | `social` | `2026-10-etude-de-cas` |
| Un article invité sur un autre site | `nom-du-site` | `referral` | `2026-10-article-invite` |

Copiez une ligne pour chaque nouveau lien au lieu d’écrire de mémoire. Pour une newsletter, les liens balisés montrent ce qui compte plus que les ouvertures, les clics qui finissent en rendez-vous, comme l’explique mon article sur les {{< a key="newsletter-metrics" >}}statistiques de newsletter{{< /a >}}.

## Étape 2 : créer chaque lien avec le Campaign URL Builder de Google

L’outil gratuit de Google, le **Campaign URL Builder** (en anglais), cité sur la page d’aide ci-dessus, assemble le lien à votre place.

1. Dans le champ website URL, collez l’adresse de la page qui porte votre bouton de réservation, pas celle de l’outil de réservation.
2. Remplissez la source, le support (medium) et le nom de campagne d’après votre tableau, et le contenu (content) seulement si un message contient plusieurs liens vers la même page.
3. Ouvrez le lien généré en navigation privée. Si les paramètres disparaissent de la barre d’adresse une fois la page chargée, une redirection de votre site les supprime peut-être : utilisez plutôt l’adresse finale.
4. Collez le lien dans votre tableau, puis là où il doit aller.

{{< screenshot id="utm-ga4-funnel-tracking-01" alt="Campaign URL Builder de Google avec la source, le support et le nom de campagne d’un lien de newsletter remplis, et le lien généré en dessous" >}}

Le résultat ressemble à ceci :

```
https://www.votre-entreprise.fr/cuisine-sur-mesure?utm_source=newsletter&utm_medium=email&utm_campaign=2026-10-newsletter&utm_content=bouton-haut
```

## Étape 3 : envoyer chaque réservation vers une page de remerciement

GA4 ne voit pas l’intérieur de votre outil de réservation, seulement vos pages : chaque réservation doit donc se terminer sur une page de remerciement que personne n’atteint sans avoir réservé. Gardez-la hors du menu et des résultats de recherche (mon tutoriel sur le tunnel montre comment faire sur Squarespace), puis demandez à l’outil de réservation d’y envoyer les gens :

- **YouCanBookMe**, que je préfère à Calendly parce qu’il fait la même chose, qu’on s’y retrouve facilement et qu’il coûte un peu moins cher, redirige vers votre page avec ses offres Professional et Teams. L’adresse doit commencer par https et, si le calendrier est intégré à votre page, cochez l’option qui met à jour toute la fenêtre du navigateur, sinon seul le cadre intégré change. Mon {{< a key="youcanbookme-tutorial" >}}tutoriel YouCanBookMe{{< /a >}} détaille les réglages.
- **Calendly** propose la même redirection avec ses offres payantes ; l’offre gratuite garde la page de confirmation de Calendly.

{{< callout type="warning" >}}YouCanBookMe peut ajouter le nom et l’email de la personne à l’adresse de redirection. N’utilisez pas ces codes : **les conditions de Google Analytics interdisent de lui envoyer des données personnelles**, et l’adresse de la page est précisément ce que GA4 enregistre.{{< /callout >}}

## Étape 4 : compter la page de remerciement comme événement clé

GA4 appelle **événements clés** ce que les anciens tutoriels nomment conversions. Pour en créer un à partir de votre page de remerciement ([page d’aide de Google sur la création d’événements](https://support.google.com/analytics/answer/12844695?hl=fr)) :

1. Ouvrez **Administration** > **Affichage des données** > **Événements** et cliquez sur **+ Créer un événement**.
2. Nommez-le `generate_lead`, le nom que Google recommande pour un prospect, et activez **Marquer comme événement clé**.
3. Choisissez **Créer sans code**, prenez `page_view` comme événement source et ajoutez l’adresse de votre page de remerciement comme condition.
4. Validez la création. Il faut le rôle de responsable marketing ou un rôle supérieur.

{{< screenshot id="utm-ga4-funnel-tracking-02" alt="Panneau de création d’événement de GA4 avec page_view comme événement source, l’adresse de la page de remerciement en condition et Marquer comme événement clé activé" >}}

Ne marquez pas `page_view` lui-même, sinon chaque page vue compterait. Le comptage démarre le jour de la création de l’événement : les réservations passées restent invisibles. Un formulaire de contact mérite son propre événement, pour ne pas mélanger rendez-vous et demandes.

Testez ensuite toute la chaîne : ouvrez un lien balisé en navigation privée, acceptez les cookies de mesure d’audience, réservez un créneau et vérifiez dans le rapport en temps réel de GA4 que votre visite affiche sa source UTM et que `generate_lead` apparaît. Annulez ce rendez-vous de test.

## Étape 5 : voir quel canal amène des rendez-vous

Après quelques semaines de données :

1. Dans **Rapports**, ouvrez **Acquisition de trafic** (sous **Acquisition** dans la plupart des propriétés) sur au moins 28 jours, ou trois mois si votre site reçoit peu de visites.
2. Cliquez sur le titre de la première colonne, qui liste les canaux, et choisissez la source/le support de la session (Session source / medium en anglais), en tapant « source » dans la recherche.
3. Si vous suivez plusieurs événements clés, sélectionnez `generate_lead` dans la liste déroulante en haut de la colonne **Événements clés**.
4. Pour comparer les campagnes, cliquez sur le signe plus à côté du titre de la première colonne et ajoutez la campagne de la session (Session campaign) en dimension secondaire.

{{< screenshot id="utm-ga4-funnel-tracking-03" alt="Rapport Acquisition de trafic de GA4 par source/support de la session, avec la colonne des événements clés réglée sur generate_lead" >}}

Lisez d’abord les événements clés : une source riche en sessions mais sans réservation amène les mauvaises personnes ou les envoie sur la mauvaise page, alors qu’une source qui apporte peu de sessions mais deux ou trois réservations mérite davantage de liens.

GA4 attribue une visite sans source propre au dernier canal qui a amené ce visiteur : quelqu’un qui a cliqué sur votre newsletter le lundi et tapé votre adresse le jeudi compte toujours pour la newsletter, sur le même navigateur. Les visites venues de ChatGPT et des autres assistants ont leur propre canal, expliqué dans mon guide pour {{< a key="track-ai-traffic" >}}mesurer le trafic IA dans Google Analytics{{< /a >}}.

## Étape 6 : repérer où les visiteurs abandonnent avec une exploration de l’entonnoir

Une exploration de l’entonnoir montre à quelle étape abandonnent ceux qui ne réservent pas ([page d’aide de Google sur l’exploration de l’entonnoir](https://support.google.com/analytics/answer/9327974?hl=fr)).

1. Ouvrez **Explorer** et choisissez le modèle d’exploration de l’entonnoir (Funnel exploration en anglais).
2. Modifiez les étapes. Étape 1 : un `page_view` de la page qui porte votre bouton de réservation. Étape 2 : un `page_view` de votre page de réservation, si elle se trouve sur votre site. Étape 3 : `generate_lead`.
3. Gardez l’entonnoir fermé pour ne compter que les personnes entrées à l’étape 1, ou ouvert pour inclure celles arrivées plus tard, comme les visiteurs allés directement à la page de réservation.
4. Prenez la catégorie d’appareil comme dimension de répartition (Breakdown en anglais), pour comparer téléphones et ordinateurs.
5. Activez l’affichage du temps écoulé entre deux étapes.

{{< screenshot id="utm-ga4-funnel-tracking-04" alt="Exploration de l’entonnoir de GA4 en trois étapes, de la page de service à la page de réservation puis à generate_lead, répartie par catégorie d’appareil" >}}

Deux particularités : un visiteur qui saute une étape sort des suivantes, et une personne qui réserve deux fois sur la période ne compte qu’une fois. Les explorations ne remontent en outre que jusqu’à la durée de conservation des données, 2 ou 14 mois, sans effet sur Acquisition de trafic. Choisissez 14 mois dans **Administration** dès maintenant : les données expirées ne reviennent pas.

Quand la plupart des gens s’arrêtent à la même étape, l’entonnoir ne dit pas pourquoi. C’est là que j’ouvre Microsoft Clarity, qui montre où les gens s’attardent et ce qui les fait fuir : le texte, une image ou la mise en page. Mon {{< a key="microsoft-clarity-tutorial" >}}tutoriel Microsoft Clarity{{< /a >}} explique l’installation.

## Ce que GA4 ne vous montrera jamais, et comment combler les trous

Même avec des balises parfaites, GA4 ne voit qu’une partie de vos réservations.

- **Les visiteurs qui refusent les cookies.** Dans l’Union européenne, la règle prudente est de ne charger GA4 qu’après l’accord du visiteur : en mode de base du Consent Mode, il ne reçoit rien de ceux qui refusent. Au Royaume-Uni, depuis février 2026, une mesure d’audience à seule fin statistique peut se passer de consentement si vous l’expliquez et offrez un moyen simple de s’y opposer. Ceci n’est pas un conseil juridique : mon guide sur le {{< a key="cookie-banner-rules" >}}bandeau cookies{{< /a >}} détaille ce qu’attendent la CNIL et l’ICO au 19 octobre 2026.
- **Les prospects qui ne cliquent jamais sur un lien.** Mes propres clients viennent d’abord du bouche-à-oreille, puis des cold emails et du SEO. Une recommandation arrive par un appel ou une adresse tapée, et les cold emails que j’écris ne contiennent aucun lien, seulement un numéro de téléphone. GA4 voit les visites du SEO, et peu du reste.

Gardez donc deux comptes à côté de celui de GA4 :

1. **Le total de votre outil de réservation.** Il enregistre chaque rendez-vous, consentement ou non. L’écart entre ce total et le nombre de `generate_lead` dans GA4 correspond aux réservations que GA4 ne voit pas. Fiez-vous à lui pour le total.
2. **Une question obligatoire « Comment nous avez-vous connus ? »** dans le formulaire de réservation, avec des choix fixes : recherche Google, recommandation, LinkedIn, newsletter, assistant IA, autre. Posez la même question au téléphone. C’est le seul compte qui couvre le bouche-à-oreille et les appels.

## Votre point mensuel, et quand passer la main

Un quart d’heure en début de mois suffit :

1. Ouvrez Acquisition de trafic sur le mois écoulé, par source/support de la session, et notez les rendez-vous de chaque source.
2. Cherchez les lignes Unassigned et (not set), retrouvez les liens correspondants dans votre tableau et corrigez-les.
3. Comparez les rendez-vous de GA4, le total de l’outil de réservation et les réponses à la question.
4. Ouvrez votre exploration de l’entonnoir : la chute a-t-elle toujours lieu à la même étape ?
5. Décidez une seule chose : quel canal aura plus de votre temps le mois prochain, et lequel s’arrête.

Cette dernière étape est l’essentiel : un nouveau canal fait toujours envie, et ces chiffres montrent lesquels de vos canaux actuels méritent davantage d’efforts.

Vous pouvez tout faire vous-même. Cela se complique quand les prospects arrivent à la fois par formulaire, réservation, téléphone et email, et que personne ne sait qui a été rappelé. Quand {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, installateur de climatisation dont je gère le site et le SEO, a reçu plus de prospects que l’équipe ne pouvait en traiter, j’ai développé une application interne pour que chaque prospect soit vu et rappelé. Si vos prospects sont éparpillés de la même façon, rassemblez-les au même endroit avant de vous soucier d’attribution.
