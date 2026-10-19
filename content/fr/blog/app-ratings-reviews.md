---
title: "Notes et avis : plus d’avis 5 étoiles sans enfreindre les règles des stores"
seo_title: "Obtenir des avis pour son application : méthode et règles"
description: "Obtenir des avis pour son application sur l’App Store et Google Play : les invites officielles, le bon moment, les réponses aux avis négatifs et la loi."
slug: "obtenir-avis-application"
translationKey: "app-ratings-reviews"
date: 2026-10-18T22:30:00+02:00
lastmod: 2026-10-18T22:30:00+02:00
category: "mobile-apps"
article_type: "guide"
keywords: ["obtenir des avis application", "avis App Store", "avis Google Play", "demander une note dans l’application", "répondre aux avis", "faux avis loi"]
summary: "Demandez un avis uniquement par les invites officielles : celle d’Apple, que le système affiche au maximum trois fois par an et par personne, et l’API In-App Review de Google Play. Demandez juste après une réussite, jamais contre une récompense ni seulement aux personnes satisfaites, puis répondez aux avis et corrigez ce qu’ils signalent. Faux avis et avis récompensés enfreignent les règles des deux stores et le Code de la consommation."
cover: "app-ratings-reviews"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’un smartphone affichant la fiche d’une app notée en étoiles, à côté d’une liste de résultats du store"
related: ["aso-guide", "app-store-listing", "app-website-seo", "apple-ads-tutorial", "mobile-app-launch-guide"]
services: ["seo"]
faq:
  - q: "Pourquoi la demande d’avis ne s’affiche-t-elle pas pendant mes tests ?"
    a: "Sur iOS, la demande s’affiche toujours dans une version de développement lancée depuis Xcode, et jamais dans les versions TestFlight. Sur Android, Google applique un quota et son API n’indique jamais si la fiche d’évaluation s’est affichée : son absence pendant les tests n’est donc pas forcément un bug."
  - q: "Peut-on supprimer un avis négatif sur son application ?"
    a: "Non. Vous pouvez y répondre publiquement, corriger le problème signalé ou signaler un avis qui enfreint les règles du store : l’option Report a Concern d’App Store Connect (l’auteur n’en est pas averti) ou le signalement des avis inappropriés dans la Play Console."
  - q: "La note d’une application est-elle la même dans tous les pays ?"
    a: "Pas sur l’App Store : Apple affiche une note globale distincte pour chaque pays ou région, selon le pays où le client a téléchargé ou acheté l’app la première fois. La Play Console ventile aussi les notes par pays, type d’appareil et version de l’app."
  - q: "Peut-on reprendre la note et les avis de son app sur son site ?"
    a: "Apple autorise l’usage de votre note en marketing tant qu’elle correspond à la note actuelle, et celui des avis seulement avec l’accord de leur auteur. En France, l’article L111-7-2 du Code de la consommation impose aussi de dire si les avis publiés sont contrôlés et comment, et d’indiquer leur date."
---

Votre note en étoiles s’affiche à côté de votre app dans les résultats de recherche de l’App Store et sur sa fiche : on la juge avant d’avoir lu votre description. Pour obtenir des avis sur votre application sans mettre en danger votre compte développeur, la méthode tient en trois gestes : demander au bon moment avec l’invite officielle de chaque store, répondre à ce que les gens écrivent, corriger ce qu’ils signalent.

Les raccourcis (récompenses, tri des mécontents, avis achetés) enfreignent les règles d’Apple et de Google, et en France le Code de la consommation. Tout ce qui suit reflète la documentation des stores au 19 octobre 2026. Pour le plan de lancement complet, voyez mon {{< a key="mobile-app-launch-guide" >}}guide pour lancer une application mobile{{< /a >}}.

## Pourquoi la note compte pour les téléchargements et le classement

Apple affiche une note de synthèse sur votre fiche et dans les résultats de recherche, et précise que les notes et les avis peuvent influencer le classement de votre app dans la recherche de l’App Store. Une note faible coûte donc deux fois : moins de gens trouvent l’app, et moins de ceux qui la trouvent l’installent.

Google Play ne publie pas le poids des notes dans sa recherche, mais indique que des taux de plantage et de blocage au-dessus des seuils Android vitals peuvent réduire la visibilité d’une app : les bugs qui agacent vos utilisateurs peuvent aussi la faire reculer.

Les mots comptent autant que les étoiles. Aux États-Unis et dans huit autres pays anglophones, dont le Royaume-Uni, l’App Store affiche un résumé de vos avis généré par des grands modèles de langage ; au 19 octobre 2026, la France ne figure pas dans la liste. Si vous visez ces marchés, ce que beaucoup d’avis répètent risque de s’y retrouver. Plus de détails sur le classement dans mon {{< a key="aso-guide" >}}guide de l’ASO pour débutants{{< /a >}}, et sur les textes qui entourent votre note dans mon {{< a key="app-store-listing" >}}guide de la fiche App Store et Google Play{{< /a >}}.

## Obtenir des avis pour votre application : passer par les invites officielles

Les deux stores fournissent une fenêtre de notation qui s’ouvre dans votre app. Utilisez-la, et rien d’autre : la règle 5.6.1 des App Review Guidelines demande d’utiliser l’API fournie et précise qu’Apple refusera les invites de notation maison.

### Sur iOS : la demande d’avis de StoreKit

L’API actuelle est `RequestReviewAction` (la valeur d’environnement `requestReview` en SwiftUI) ; `SKStoreReviewController` est obsolète depuis iOS 18. Votre app demande, le système décide d’afficher ou non :

- si la personne n’a pas encore noté l’app sur cet appareil, la demande apparaît au maximum trois fois sur 365 jours ;
- si elle l’a notée, la demande ne revient que pour une nouvelle version, plus de 365 jours après son dernier avis ;
- chacun peut désactiver ces demandes pour toutes les apps.

Comme l’appel peut ne rien afficher, Apple déconseille de le déclencher par un bouton. Pour une ligne « Noter l’app » permanente dans vos réglages, mettez un lien vers votre fiche App Store en ajoutant `action=write-review` à l’URL.

### Sur Android : l’API In-App Review de Google Play

La fiche d’évaluation de Google fonctionne de la même façon, avec un quota que Google ne communique pas : lancez le processus plus d’une fois sur une courte période (l’exemple de Google : moins d’un mois) et il se peut que rien ne s’affiche. Montrez la fiche telle quelle, sans rien par-dessus, et jamais depuis un bouton : un lien dans les réglages doit plutôt ouvrir votre fiche Play Store.

Aucune des deux API n’indique à votre app si la personne a laissé une note, et celle de Google ne dit même pas si la fiche s’est affichée. Impossible de récompenser un avis qu’on ne voit pas, et c’est tant mieux.

## Quand demander : juste après une réussite

Les Human Interface Guidelines d’Apple recommandent de ne demander une note qu’une fois que la personne s’est engagée dans l’app, par exemple après un niveau terminé ou une tâche importante, et d’éviter le premier lancement et l’accueil (onboarding), où les gens risquent davantage de laisser un avis négatif. Google conseille d’attendre que l’utilisateur ait assez utilisé l’app pour donner un avis utile.

| Bons moments pour demander | Moments à éviter |
|---|---|
| Une réservation ou une commande confirmée | Le premier lancement et l’accueil |
| Une intervention ou une livraison marquée comme terminée | Le milieu d’une tâche ou d’un niveau |
| La troisième ou quatrième utilisation réussie de la fonction principale | Juste après une erreur, un plantage ou un paiement refusé |
| Un objectif ou une série atteints | Un appui sur un bouton « Noter l’app » (lien vers le store à la place) |

Espacez les demandes : Apple suggère au moins une à deux semaines entre deux sollicitations. Son propre exemple de code attend que la personne ait terminé une tâche quatre fois, qu’elle n’ait pas encore été sollicitée pour la version en cours et qu’elle reste quelques secondes sur l’écran de réussite. Apple qualifie ce chiffre de quatre d’arbitraire : fixez votre propre seuil, sur une réussite que tous vos utilisateurs atteignent.

## Ce que les deux stores interdisent : récompenses, filtrage et pression

### Les récompenses contre une note

Les [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) d’Apple préviennent que les développeurs qui gonflent leur classement avec des avis « paid, incentivized, filtered, or fake » (payés, récompensés, filtrés ou faux) s’exposent à une exclusion de l’Apple Developer Program. La politique de Google Play sur les notes, avis et installations interdit de gonfler notes et avis par des moyens illégitimes comme les incitations, avec pour exemple une notification qui offre une réduction contre une bonne note.

### Le filtrage des avis (review gating)

Le review gating consiste à demander d’abord aux gens s’ils aiment l’app, puis à n’envoyer vers le store que les satisfaits. Les [consignes de l’API In-App Review](https://developer.android.com/guide/playcore/in-app-review?hl=fr) interdisent toute question avant ou pendant l’affichage de la fiche d’évaluation, avec l’exemple « Aimez-vous l’application ? ». Côté Apple, les avis « filtered » figurent dans la liste citée plus haut.

### La pression et les fausses invites

La règle 3.2.2(x) interdit d’obliger les gens à noter ou commenter l’app pour l’utiliser ou accéder à son contenu. Un écran bloqué tant qu’on n’a pas noté est exclu, tout comme une fenêtre maison qui imite l’invite du système (règle 5.6.1, encore).

Ce que vous pouvez faire : rendre votre contact support facile à trouver, dans l’app et sur votre fiche, comme Apple le recommande, pour que les mécontents vous joignent avant le formulaire d’avis. À la différence du filtrage, le support est ouvert à tous ; ce n’est pas un tri placé devant l’invite.

## Faux avis et avis récompensés : ce que dit la loi

En France, depuis le 28 mai 2022, l’article L121-4 du Code de la consommation (27° et 28°) range parmi les pratiques commerciales réputées trompeuses le fait de publier ou de faire publier de faux avis, et celui d’affirmer que des avis viennent de vrais clients sans contrôle raisonnable. La DGCCRF vise aussi la modération biaisée, comme supprimer ou retarder les avis négatifs. Une pratique commerciale trompeuse est punie de deux ans d’emprisonnement et de 300 000 € d’amende ; depuis la loi du 10 mai 2024, de cinq ans et 750 000 € quand elle est commise en ligne (3,75 millions d’euros pour une société). La [fiche de la DGCCRF sur les faux avis](https://www.economie.gouv.fr/dgccrf/Publications/Vie-pratique/Fiches-pratiques/faux-avis-consommateurs-sur-internet) détaille ce qui est visé.

Ces règles viennent de la directive Omnibus (UE) 2019/2161, qui a ajouté les points 23 ter et 23 quater à l’annexe I de la directive sur les pratiques commerciales déloyales, ainsi qu’un article 7, paragraphe 6 : savoir si et comment vous vérifiez les avis que vous publiez est une information essentielle, à retenir si vous affichez des avis sur {{< a key="app-website-seo" >}}le site de votre application{{< /a >}}. Le texte est sur [EUR-Lex](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32019L2161). Elles s’appliquent dans toute l’UE, y compris aux éditeurs installés hors d’Europe qui visent des utilisateurs européens. Si votre app a des utilisateurs au Royaume-Uni, le DMCC Act 2024 y interdit aussi, depuis le 6 avril 2025, les faux avis et les avis dont la récompense est cachée (Schedule 20, paragraphe 13).

Ceci est une information générale, pas un conseil juridique : avant un programme de testeurs, une opération de parrainage ou le recours à une agence qui promet des avis, faites valider le projet par un avocat en droit de la consommation.

## Répondre aux avis sur les deux stores

Une réponse ne change pas les étoiles, mais sur les deux stores l’auteur de l’avis est prévenu et peut modifier son avis. Les futurs utilisateurs la lisent aussi. Les chemins ci-dessous reprennent les libellés de l’interface en anglais.

### Dans App Store Connect

Ouvrez **Apps**, choisissez votre app, cliquez sur **Ratings and Reviews** dans la barre latérale, choisissez la plateforme en haut à droite, puis cliquez sur **Reply** à côté de l’avis. Il faut le rôle Account Holder, Admin ou Customer Support. Une réponse peut mettre jusqu’à 24 heures à apparaître, une seule réponse par avis est affichée, et vous pouvez la modifier ou la supprimer à tout moment.

### Dans la Play Console

Ouvrez votre app, allez dans **Ratings and reviews > Reviews**, rédigez votre réponse et sélectionnez **Publish reply**. Il faut l’autorisation « Reply to reviews ». Chaque avis reçoit une seule réponse publique, l’utilisateur est prévenu par une notification push et un e-mail, et vous pouvez modifier la réponse ensuite.

### Ma façon de les rédiger

1. Commencez par les notes les plus basses et les bugs de la version en cours, l’ordre que suggère Apple quand on ne peut pas répondre à tout.
2. Remerciez, nommez le problème précis et dites ce que vous faites pour le régler. Ne demandez pas une meilleure note.
3. Renvoyez vers votre adresse de support, jamais vers des données personnelles : la règle 5.6.1 exclut données personnelles, spam et marketing des réponses.
4. Orientez les problèmes de téléchargement et de facturation sur iOS vers l’assistance Apple, comme Apple le demande.

```text
Merci pour ce signalement, et toutes nos excuses pour la réservation perdue.
Le bug de synchronisation est corrigé dans la version 2.4, disponible
aujourd’hui. Si cela se reproduit, écrivez à support@votreapp.fr et nous
regarderons votre compte.
```

## Transformer les avis négatifs en corrections, puis décider d’une remise à zéro

Une mauvaise note, c’est un rapport de bug avec du public. Lisez les avis version par version : App Store Connect les filtre par version et par note, et la Play Console ventile les notes par version de l’app et type d’appareil. Quand une plainte revient, corrigez, mentionnez la correction dans les notes de version et répondez aux avis qui l’ont signalée, comme Apple le recommande pour regagner les utilisateurs déçus.

Google Play pondère sa note publique en faveur des notes récentes : une correction se voit dans la note à mesure que les nouvelles arrivent. Sur l’App Store, vous pouvez aussi remettre à zéro la note globale à la sortie d’une nouvelle version : sélectionnez la version dans la barre latérale d’App Store Connect, sélectionnez **Reset rating when this version is released** dans la section **Reset Overview Rating**, puis enregistrez. La remise à zéro s’applique à tous les pays à la fois, les avis écrits restent, et une fois la version publiée, l’ancienne note ne peut plus être restaurée. Tant que la nouvelle version n’a pas reçu assez de notes, votre fiche indique que la note a été réinitialisée récemment.

Apple recommande d’utiliser cette option avec parcimonie, car une fiche avec peu de notes peut décourager. Je ne la réinitialiserais que si l’ancienne note vient d’un problème que la nouvelle version corrige vraiment, et si vous avez assez d’utilisateurs actifs pour reconstruire une note rapidement.

## La checklist avant votre prochaine version

1. La demande d’avis est liée à une ou deux réussites, jamais au lancement, à l’accueil, à une erreur ou à un bouton, et rien ne s’intercale devant.
2. Un lien « Noter l’app » dans vos réglages ouvre la fiche du store.
3. Votre contact support est facile à trouver dans l’app et sur les deux fiches.
4. Quelqu’un répond chaque semaine aux nouveaux avis, les notes les plus basses d’abord.
5. Vos notes de version citent les corrections demandées dans les avis, et leurs auteurs reçoivent une réponse.
6. Travaillez votre note avant d’acheter des installations avec {{< a key="apple-ads-tutorial" >}}Apple Ads{{< /a >}} : les annonces mènent à une fiche qui l’affiche.
