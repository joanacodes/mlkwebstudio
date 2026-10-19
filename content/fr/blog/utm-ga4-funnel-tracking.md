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

GA4 vous dit combien de personnes visitent votre site et, à peu près, d’où elles viennent. Il ne vous dit pas d’emblée lesquelles de ces visites ont fini en rendez-vous. Trois éléments comblent ce manque : des paramètres UTM sur chaque lien que vous maîtrisez, une page de remerciement après chaque réservation, et un événement clé dans Google Analytics 4 qui la compte.

Ce tutoriel met en place les trois, puis montre les deux écrans de GA4 à ouvrir une fois par mois : Acquisition de trafic, pour savoir quel canal amène des rendez-vous, et une exploration de l’entonnoir, pour voir où les autres abandonnent. J’utilise YouCanBookMe pour les rendez-vous, les exemples aussi ; Calendly fonctionne de la même façon.

Il suppose que GA4 est déjà installé sur votre site et que vous pouvez y ajouter une page. Si le tunnel lui-même n’existe pas encore, commencez par mon tutoriel pour {{< a key="build-sales-funnel" >}}créer son tunnel de vente avec ses outils actuels{{< /a >}}. Les deux font partie de mon {{< a key="funnels-newsletters-guide" >}}guide complet du tunnel de vente et de la newsletter{{< /a >}}.

## Comment Google Analytics 4 lit les paramètres UTM

Un paramètre UTM est une étiquette ajoutée à la fin d’un lien, qui indique à Google Analytics d’où vient le clic. Quand quelqu’un arrive sur votre site par ce lien, GA4 lit les étiquettes et classe la visite en conséquence.

| Paramètre | Ce qu’il enregistre | Exemple |
|---|---|---|
| `utm_source` | L’endroit où se trouve le lien | `newsletter`, `linkedin` |
| `utm_medium` | Le type de lien (le « support ») | `email`, `social`, `referral` |
| `utm_campaign` | Le message ou l’offre | `2026-10-newsletter` |
| `utm_content` | Le lien précis, quand un message en contient plusieurs | `bouton-haut` |
| `utm_term` | Le mot-clé, pour la publicité sur les moteurs de recherche | Rarement utile |
| `utm_id` | Un identifiant de campagne, pour les données de campagne importées | Rarement utile |

Google demande de toujours renseigner les trois premiers ([page d’aide de Google sur les URL de campagne](https://support.google.com/analytics/answer/10917952?hl=fr)). S’il en manque un, vos rapports affichent (not set) à sa place.

GA4 range ensuite chaque visite dans un canal, surtout d’après le support, selon des règles fixes : `email` va dans Email, `social` dans Organic Social, `referral` dans Referral ([règles de canaux de Google](https://support.google.com/analytics/answer/9756891?hl=fr)). Ces valeurs s’écrivent en anglais : un support que GA4 ne connaît pas, comme `courriel` ou `reseau-social`, finit dans **Unassigned** (non attribué), la case des visites que GA4 ne sait pas classer. Les visites sans balise ni site d’origine finissent dans **Direct**, avec les personnes qui ont tapé votre adresse.

## Étape 1 : écrire un plan de nommage avant de baliser quoi que ce soit

La plupart des problèmes d’UTM sont des problèmes d’orthographe. GA4 distingue majuscules et minuscules dans les valeurs : `LinkedIn` et `linkedin` deviennent deux sources, et une faute de frappe dans le support envoie les visites dans Unassigned. Cinq règles évitent les deux :

1. **Des minuscules uniquement**, partout.
2. **Des tirets à la place des espaces, et pas d’accents** : un espace devient `%20` dans l’adresse, et un « é » devient `%C3%A9`.
3. **Uniquement des supports que GA4 reconnaît** : `email`, `social`, `referral`.
4. **Un nom de campagne par message ou par offre**, date en tête : `2026-10-newsletter` se range tout seul.
5. **Jamais de balise sur les liens entre vos propres pages.** Le rendez-vous serait attribué à votre propre balise au lieu du canal qui a amené le visiteur.

Notez ce plan dans un tableur partagé, une ligne par lien : son emplacement, les valeurs, le lien complet et sa date de création. Un point de départ pour une entreprise de services :

| Emplacement du lien | utm_source | utm_medium | utm_campaign |
|---|---|---|---|
| Newsletter mensuelle | `newsletter` | `email` | `2026-10-newsletter` |
| Votre signature email | `signature` | `email` | `permanent` |
| Un post LinkedIn | `linkedin` | `social` | `2026-10-etude-de-cas` |
| Votre profil Instagram | `instagram` | `social` | `permanent` |
| Un article invité sur un autre site | `nom-du-site` | `referral` | `2026-10-article-invite` |

Pour un nouveau lien, copiez une ligne au lieu d’écrire de mémoire. Pour une newsletter, les liens balisés donnent en plus un chiffre plus parlant que le taux d’ouverture : les clics qui finissent en rendez-vous, comme l’explique mon article sur les {{< a key="newsletter-metrics" >}}statistiques de newsletter{{< /a >}}.

## Étape 2 : créer chaque lien avec le Campaign URL Builder de Google

L’outil gratuit de Google, le **Campaign URL Builder** (en anglais), cité sur la page d’aide ci-dessus, assemble le lien à votre place, point d’interrogation et esperluettes compris.

1. Dans le champ de l’adresse du site (website URL), collez l’adresse de la page vers laquelle vous envoyez les gens : la page qui porte votre bouton de réservation, pas l’outil de réservation.
2. Remplissez la source, le support (medium) et le nom de campagne d’après votre tableau. N’ajoutez le contenu (content) que si un même message contient plusieurs liens vers la même page.
3. Copiez le lien généré et ouvrez-le dans une fenêtre de navigation privée. Si les paramètres disparaissent de la barre d’adresse une fois la page chargée, une redirection de votre site les supprime peut-être : utilisez plutôt l’adresse finale.
4. Collez le lien dans votre tableau, puis là où il doit aller.

{{< screenshot id="utm-ga4-funnel-tracking-01" alt="Campaign URL Builder de Google avec la source, le support et le nom de campagne d’un lien de newsletter remplis, et le lien généré en dessous" >}}

Le résultat ressemble à ceci :

```
https://www.votre-entreprise.fr/cuisine-sur-mesure?utm_source=newsletter&utm_medium=email&utm_campaign=2026-10-newsletter&utm_content=bouton-haut
```

Sur un flyer ou un véhicule, transformez le lien balisé en QR code. Dans une publication sur les réseaux sociaux, un lien court qui redirige vers l’adresse complète garde les balises.

## Étape 3 : envoyer chaque réservation vers une page de remerciement

GA4 ne voit pas l’intérieur de votre outil de réservation, seulement les pages de votre site. Chaque réservation doit donc se terminer sur l’une d’elles : une page de remerciement que personne n’atteint sans avoir réservé. Gardez-la hors du menu et hors des résultats de recherche (le tutoriel cité plus haut montre comment faire sur Squarespace). Demandez ensuite à l’outil de réservation d’y envoyer les gens :

- **YouCanBookMe**, que je préfère à Calendly parce qu’il fait la même chose, qu’on s’y retrouve facilement et qu’il coûte un peu moins cher, redirige vers votre page avec ses offres Professional et Teams. L’adresse doit commencer par https et, si le calendrier est intégré à votre page, cochez l’option qui met à jour toute la fenêtre du navigateur, sinon seul le cadre intégré change. Mon {{< a key="youcanbookme-tutorial" >}}tutoriel YouCanBookMe{{< /a >}} détaille les réglages.
- **Calendly** propose la même redirection avec ses offres payantes ; l’offre gratuite garde la page de confirmation de Calendly.

{{< callout type="warning" >}}YouCanBookMe peut ajouter le nom et l’email de la personne à l’adresse de redirection. N’utilisez pas ces codes : **les conditions de Google Analytics interdisent de lui envoyer des données personnelles**, et l’adresse de la page est précisément ce que GA4 enregistre.{{< /callout >}}

Si votre page de réservation s’ouvre sur le domaine de l’outil plutôt que dans votre site, surveillez ce domaine comme source de type referral après votre premier rendez-vous de test. S’il apparaît, ajoutez-le à la liste des sites référents indésirables, dans les paramètres de la balise Google de votre flux de données web (**Administration**), pour qu’il cesse de s’attribuer vos rendez-vous.

## Étape 4 : compter la page de remerciement comme événement clé

GA4 appelle **événements clés** les actions qui comptent ; les anciens tutoriels parlent de conversions. Pour transformer une visite de votre page de remerciement en événement clé ([page d’aide de Google sur la création d’événements](https://support.google.com/analytics/answer/12844695?hl=fr)) :

1. Ouvrez **Administration** > **Affichage des données** > **Événements** et cliquez sur **+ Créer un événement**.
2. Nommez-le `generate_lead`, le nom que Google recommande pour un prospect, et activez **Marquer comme événement clé**.
3. Choisissez **Créer sans code**, prenez `page_view` comme événement source et ajoutez l’adresse de votre page de remerciement comme condition.
4. Validez la création. Il faut le rôle de responsable marketing ou un rôle supérieur.

{{< screenshot id="utm-ga4-funnel-tracking-02" alt="Panneau de création d’événement de GA4 avec page_view comme événement source, l’adresse de la page de remerciement en condition et Marquer comme événement clé activé" >}}

Ne marquez pas `page_view` lui-même, sinon chaque page vue compterait. Le comptage démarre le jour de la création de l’événement : les réservations passées restent invisibles. Si vous avez aussi un formulaire de contact, donnez à sa page de remerciement un second événement, avec son propre nom, pour ne pas mélanger rendez-vous et demandes.

Testez ensuite toute la chaîne : ouvrez un de vos liens balisés en navigation privée, acceptez les cookies de mesure d’audience, réservez un créneau et vérifiez dans le rapport en temps réel de GA4 que votre visite affiche sa source UTM et que `generate_lead` apparaît. Annulez ensuite le rendez-vous de test.

## Étape 5 : voir quel canal amène des rendez-vous

Laissez passer quelques semaines, puis :

1. Dans **Rapports**, ouvrez **Acquisition de trafic**, sous **Acquisition** dans la plupart des propriétés.
2. Choisissez une période d’au moins 28 jours. Sur un site qui reçoit peu de visites, trois mois en disent plus.
3. Cliquez sur le titre de la première colonne, qui liste les canaux, et choisissez la source/le support de la session (Session source / medium dans l’interface anglaise) : tapez « source » dans le champ de recherche pour la trouver.
4. Si vous suivez plusieurs événements clés, sélectionnez `generate_lead` dans la liste déroulante en haut de la colonne **Événements clés**.
5. Pour comparer les campagnes, cliquez sur le signe plus à côté du titre de la première colonne et ajoutez la campagne de la session (Session campaign) en dimension secondaire.

{{< screenshot id="utm-ga4-funnel-tracking-03" alt="Rapport Acquisition de trafic de GA4 par source/support de la session, avec la colonne des événements clés réglée sur generate_lead" >}}

Lisez d’abord les événements clés, ensuite les sessions. Une source qui apporte beaucoup de sessions et aucun rendez-vous amène les mauvaises personnes, ou les envoie sur la mauvaise page. Une source avec peu de sessions et deux ou trois rendez-vous mérite davantage de vos liens.

GA4 attribue une visite sans source propre au dernier canal qui a réellement amené ce visiteur. Quelqu’un qui a cliqué sur votre newsletter le lundi et tapé votre adresse le jeudi compte toujours pour la newsletter, à condition d’utiliser le même navigateur. Les visites venues de ChatGPT et des autres assistants ont désormais leur propre canal, que j’explique dans mon guide pour {{< a key="track-ai-traffic" >}}mesurer le trafic IA dans Google Analytics{{< /a >}}.

## Étape 6 : repérer où les visiteurs abandonnent avec une exploration de l’entonnoir

Acquisition de trafic vous dit quel canal amène des rendez-vous. Une exploration de l’entonnoir vous dit à quelle étape les autres s’arrêtent ([page d’aide de Google sur l’exploration de l’entonnoir](https://support.google.com/analytics/answer/9327974?hl=fr)).

1. Ouvrez **Explorer** et choisissez le modèle d’exploration de l’entonnoir (Funnel exploration dans l’interface anglaise).
2. Modifiez les étapes. Étape 1 : un `page_view` de la page qui porte votre bouton de réservation. Étape 2 : un `page_view` de votre page de réservation, si elle se trouve sur votre site. Étape 3 : `generate_lead`.
3. Gardez l’entonnoir fermé pour ne compter que les personnes entrées à l’étape 1, ou rendez-le ouvert pour inclure celles qui arrivent à une étape suivante, comme les visiteurs allés directement à la page de réservation.
4. Prenez la catégorie d’appareil comme dimension de répartition (Breakdown dans l’interface anglaise), pour comparer téléphones et ordinateurs.
5. Activez l’affichage du temps écoulé pour voir combien de temps les gens mettent entre deux étapes.

{{< screenshot id="utm-ga4-funnel-tracking-04" alt="Exploration de l’entonnoir de GA4 en trois étapes, de la page de service à la page de réservation puis à generate_lead, répartie par catégorie d’appareil" >}}

Deux particularités : un visiteur qui saute une étape sort des suivantes, et une personne qui réserve deux fois sur la période ne compte qu’une fois. Les explorations ne remontent par ailleurs que jusqu’à la durée de conservation des données de votre propriété, 2 ou 14 mois, alors qu’Acquisition de trafic n’est pas concerné. Choisissez 14 mois dans **Administration** dès maintenant : les données déjà expirées ne reviennent pas.

Quand la plupart des gens s’arrêtent à la même étape, l’entonnoir ne dit pas pourquoi. C’est là que j’ouvre Microsoft Clarity : il montre où les gens s’attardent et quelles zones les font fuir, pour savoir si le problème vient du texte, d’une image ou de la mise en page. Mon {{< a key="microsoft-clarity-tutorial" >}}tutoriel Microsoft Clarity{{< /a >}} explique l’installation.

## Ce que GA4 ne vous montrera jamais, et comment combler les trous

Même avec des balises parfaites, GA4 ne voit qu’une partie de vos rendez-vous.

- **Les visiteurs qui refusent les cookies.** Dans l’Union européenne, la règle prudente est de ne charger GA4 qu’après l’accord du visiteur pour les cookies de mesure d’audience, et en mode de base du Consent Mode, GA4 ne reçoit rien de ceux qui refusent. Au Royaume-Uni, une mesure d’audience à seule fin statistique peut fonctionner sans consentement depuis février 2026, si vous l’expliquez et offrez un moyen simple de s’y opposer. Ceci n’est pas un conseil juridique : mon guide sur le {{< a key="cookie-banner-rules" >}}bandeau cookies{{< /a >}} détaille ce qu’attendent la CNIL et l’ICO au 19 octobre 2026.
- **Les prospects qui ne cliquent jamais sur un lien.** Mes propres clients viennent d’abord du bouche-à-oreille, puis des cold emails et du SEO. Une recommandation arrive par un appel ou une adresse tapée, et les cold emails que j’écris ne contiennent aucun lien, seulement un numéro de téléphone. GA4 voit les visites du SEO, et peu du reste.
- **Les parcours bloqués ou coupés** : les extensions de navigateur qui bloquent la mesure d’audience, et les personnes qui vous découvrent sur leur téléphone puis réservent depuis leur ordinateur.

Gardez donc deux comptes à côté de celui de GA4 :

1. **Le total de votre outil de réservation.** Il enregistre chaque rendez-vous, consentement ou non. L’écart entre ce total et le nombre de `generate_lead` dans GA4 correspond aux rendez-vous que GA4 ne voit pas.
2. **Une question obligatoire « Comment nous avez-vous connus ? »** dans le formulaire de réservation, avec des choix fixes : recherche Google, recommandation, LinkedIn, newsletter, assistant IA, autre. Posez la même question au téléphone.

Quand les chiffres divergent, fiez-vous à l’outil de réservation pour le total, à la question pour le bouche-à-oreille et les appels, et à GA4 pour les canaux qu’il voit.

## Votre point mensuel, et quand passer la main

Un quart d’heure en début de mois suffit :

1. Ouvrez Acquisition de trafic sur le mois écoulé, par source/support de la session, et notez les rendez-vous de chaque source.
2. Cherchez les lignes Unassigned et (not set), retrouvez les liens correspondants dans votre tableau et corrigez-les.
3. Mettez les rendez-vous de GA4 à côté du total de l’outil de réservation et des réponses à « Comment nous avez-vous connus ? ».
4. Ouvrez votre exploration de l’entonnoir : la chute a-t-elle toujours lieu à la même étape ?
5. Décidez une seule chose : quel canal aura plus de votre temps le mois prochain, et lequel s’arrête.

Cette dernière étape est la raison d’être de tout le reste. Un nouveau canal fait toujours envie ; ces chiffres montrent lesquels de vos canaux actuels méritent davantage d’efforts.

Vous pouvez tout faire vous-même. Les choses se compliquent quand les prospects arrivent à la fois par formulaire, réservation, téléphone et email, et que personne ne sait qui a été rappelé. Quand {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, installateur de climatisation dont je gère le site et le SEO, a reçu plus de prospects que l’équipe ne pouvait en traiter, j’ai développé une application interne pour que chaque prospect soit vu et rappelé. Si vos prospects sont éparpillés de la même façon, rassemblez-les au même endroit avant de vous soucier d’attribution.
