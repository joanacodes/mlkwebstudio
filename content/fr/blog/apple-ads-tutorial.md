---
title: "Apple Ads (ex-Apple Search Ads) : votre première campagne pas à pas"
seo_title: "Apple Search Ads : votre première campagne Apple Ads"
description: "Apple Search Ads, devenu Apple Ads : créez votre première campagne pas à pas, du compte aux mots-clés et aux enchères, et lisez vos résultats. Tutoriel 2026."
slug: "apple-search-ads-premiere-campagne"
translationKey: "apple-ads-tutorial"
date: 2026-10-18T22:36:00+02:00
lastmod: 2026-10-18T22:36:00+02:00
category: "mobile-apps"
article_type: "tutorial"
keywords: ["Apple Search Ads", "Apple Ads", "publicité App Store", "campagne Apple Ads", "Apple Ads Advanced", "Search Match Apple Ads"]
summary: "Apple Search Ads s’appelle Apple Ads depuis avril 2025. Pour une première campagne, connectez-vous sur ads.apple.com avec le compte Apple lié à App Store Connect, choisissez Apple Ads Advanced et commencez par les résultats de recherche de l’App Store : des mots-clés exacts pour votre marque et votre catégorie, un budget quotidien, une enchère maximale par tap et une campagne de découverte. Jugez-la après deux semaines, sur le coût par installation."
cover: "apple-ads-tutorial"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé posé sur une photo, avec une barre de recherche au-dessus d’une liste de résultats"
related: ["app-ads-budget-comparison", "aso-keyword-research", "app-store-listing", "google-app-campaigns", "mobile-app-launch-guide"]
services: ["seo"]
faq:
  - q: "Un prestataire ou un collègue peut-il gérer mon compte Apple Ads ?"
    a: "Oui. Invitez-le comme utilisateur de votre compte Apple Ads plutôt que de partager votre compte Apple : il travaille avec ses propres identifiants, et vous pouvez retirer son accès à la fin de la mission."
  - q: "Peut-on faire de la publicité pour une application en précommande ?"
    a: "Oui. Une application disponible en précommande sur l’App Store peut diffuser des annonces Apple Ads. Apple conseille alors les enchères manuelles (Manage Bids), car la stratégie Maximize Conversions est conçue pour les applications déjà sorties."
  - q: "Une seule campagne peut-elle couvrir la France, la Belgique et la Suisse ?"
    a: "Oui. Une campagne peut cibler plusieurs pays ou régions : regroupez alors des marchés qui se ressemblent, par exemple ceux qui partagent une langue. En revanche, cibler une région ou une ville n’est possible que dans une campagne limitée à un seul pays."
  - q: "Peut-on mettre Apple Ads en pause à tout moment ?"
    a: "Oui. Dans Apple Ads Advanced, vous pouvez mettre en pause une campagne, un groupe d’annonces ou un mot-clé quand vous le voulez, et vous ne payez que les taps déjà reçus."
  - q: "Comment savoir quels mots-clés amènent des clients payants ?"
    a: "Apple Ads compte les taps et les installations, pas ce que les gens font ensuite dans l’app. Votre développeur peut intégrer le framework AdServices d’Apple : il indique la campagne, le groupe d’annonces et le mot-clé de chaque installation attribuée (sans mot-clé quand Search Match a trouvé la recherche), à rapprocher ensuite des inscriptions ou des abonnements, directement ou via un outil de mesure mobile (MMP)."
---

Apple Ads place votre application dans les résultats de recherche de l’App Store et à trois autres endroits du store, et vous ne payez que lorsqu’une personne touche l’annonce. Vous choisissez les recherches, le budget quotidien et le prix maximal d’un tap. Ce tutoriel Apple Search Ads vous mène d’un compte vide à une première campagne dont vous pourrez lire les résultats au bout de deux semaines.

Mon avis sur la publicité liée aux recherches est celui que je donne sur Google Ads : l’outil n’est pas si compliqué, mais il faut d’abord étudier votre cible et ce qu’elle tape vraiment, avant de dépenser le moindre euro. Les étapes ci-dessous commencent donc par les mots-clés et la structure, et gardent le réglage fin des enchères pour plus tard.

J’indique les libellés de l’interface en anglais, tels qu’ils figurent dans l’aide d’Apple en octobre 2026 ; si l’un d’eux a changé, la page d’aide d’Apple sur la [création de campagnes](https://ads.apple.com/app-store/help/campaigns/0005-create-campaigns) donne le libellé actuel. La place de la publicité parmi vos autres leviers de lancement est expliquée dans mon {{< a key="mobile-app-launch-guide" >}}guide pour lancer une application mobile{{< /a >}}.

## Apple Ads en 2026 : ce qui a changé depuis Apple Search Ads

Apple a renommé Apple Search Ads en Apple Ads le 14 avril 2025. L’explication donnée aux développeurs : au lancement du service, en 2016, il n’existait qu’un emplacement, en haut des résultats de recherche, alors que les annonceurs peuvent désormais diffuser leurs annonces à plusieurs endroits de l’App Store. Il en existe quatre :

| Emplacement | Où l’annonce apparaît | Pour une première campagne |
|---|---|---|
| Résultats de recherche (Search results) | Dans les résultats d’une recherche sur l’App Store | Commencez ici : la personne cherche déjà |
| Onglet Rechercher (Search tab) | En tête de la liste d’apps suggérées, avant toute saisie | Plus tard : personne n’a encore cherché |
| Onglet Aujourd’hui (Today tab) | Sur la page d’accueil de l’App Store, sur iPhone uniquement, à partir d’une page de produit personnalisée validée par Apple | Plus tard |
| Pages produit (Product pages) | En tête de la liste « You Might Also Like », en bas des pages d’apps proches | Plus tard |

{{< callout type="note" >}}En décembre 2025, Apple a annoncé davantage d’annonces dans les résultats de recherche de l’App Store, puis en a fixé le départ au 3 mars 2026 au Royaume-Uni et au Japon, les autres marchés d’Apple Ads, dont la France, devant suivre avant la fin du mois. En plus de la première position, des annonces peuvent apparaître plus bas dans les résultats, sous iOS et iPadOS 26.2 ou version ultérieure. Les campagnes dans les résultats de recherche y sont éligibles automatiquement ; vous ne pouvez ni choisir une position ni enchérir dessus, et la facturation ne change pas.{{< /callout >}}

## Apple Ads Basic ou Advanced : laquelle choisir

Apple propose deux formules, et sa [comparaison des deux solutions](https://ads.apple.com/app-store/help/apple-ads-basic/0001-compare-apple-ads-solutions) se résume ainsi :

| | Apple Ads Basic | Apple Ads Advanced |
|---|---|---|
| Emplacements | Résultats de recherche uniquement | Résultats de recherche, onglet Rechercher, onglet Aujourd’hui, pages produit |
| Vous payez | À l’installation, jusqu’à un coût maximal par installation | Au tap, jusqu’à une enchère maximale par tap |
| Budget | Mensuel, jusqu’à 10 000 dollars US (environ 8 900 €) par app | Quotidien, par campagne, sans maximum |
| Mots-clés | Aucun à choisir : Apple associe votre app aux recherches | Les vôtres, plus le Search Match d’Apple |

Basic convient à un développeur qui veut des installations sans rien gérer. Mais vous n’y choisissez aucun mot-clé : vous apprenez donc peu de choses sur les recherches qui amènent vos utilisateurs, alors que c’est l’enseignement le plus précieux d’une première campagne. Ce tutoriel utilise Advanced ; selon Apple, utiliser les deux formules pour la même app ne donne aucun avantage dans les enchères.

## Ce qu’il vous faut avant de commencer

- Une application en ligne sur l’App Store, ou disponible en précommande.
- Le compte Apple lié à votre compte App Store Connect.
- Les informations de votre entreprise et une carte de paiement : par défaut, vous payez au fur et à mesure, et la facturation mensuelle existe pour les comptes éligibles.
- Une page produit qui donne envie : une fiche faible donne une annonce faible. Ma méthode pour {{< a key="app-store-listing" >}}rédiger votre fiche App Store{{< /a >}} détaille le titre, le sous-titre et les captures d’écran.
- Une première liste de mots-clés, ceux que les gens tapent quand ils cherchent une app comme la vôtre. Mon tutoriel de {{< a key="aso-keyword-research" >}}recherche de mots-clés ASO{{< /a >}} explique comment la construire.
- Une idée, même approximative, de ce que vaut un nouvel utilisateur, en chiffre d’affaires ou en inscriptions : elle vous servira à fixer vos enchères.

## Étape 1 : créer votre compte Apple Ads

1. Allez sur ads.apple.com et connectez-vous avec le compte Apple lié à App Store Connect.
2. Choisissez Apple Ads Advanced.
3. Renseignez les informations de l’entreprise : nom, adresse, pays ou région. Apple vérifie vos informations fiscales, et les campagnes restent en attente tant que cette vérification n’est pas terminée.
4. Ajoutez un moyen de paiement : sans lui, les campagnes préparées ne sont pas diffusées.

Une particularité française : la loi Sapin du 29 janvier 1993, qui encadre l’achat d’espace publicitaire par un intermédiaire. Quand l’application appartient à une entreprise dont le siège ou un établissement se trouve en France, le compte Apple Ads doit indiquer s’il agit en tant qu’agence pour un annonceur ; tant que ce point n’est pas réglé, la campagne peut rester bloquée.

## Étape 2 : prévoir quatre campagnes (marque, catégorie, concurrents, découverte)

Les [recommandations d’Apple sur la structure des campagnes](https://ads.apple.com/app-store/best-practices/campaign-structure) répartissent la publicité dans les résultats de recherche en quatre campagnes, chacune construite autour d’un type de mot-clé :

| Campagne | Mots-clés | Type de correspondance |
|---|---|---|
| Marque | Le nom de votre app et celui de votre entreprise | Exacte, Search Match désactivé |
| Catégorie | Ce que fait votre app, sans nom de marque : « planning repas », « menu de la semaine » | Exacte, Search Match désactivé |
| Concurrents | Les noms des apps qui rendent le même service | Exacte, Search Match désactivé |
| Découverte | Un groupe d’annonces avec les mots-clés ci-dessus en correspondance large ; un groupe sans mot-clé, avec Search Match activé | Large, plus Search Match |

Deux règles font fonctionner l’ensemble. Dans la campagne de découverte, ajoutez tous les mots-clés des trois autres campagnes en mots-clés négatifs exacts, pour que vos campagnes ne se disputent pas les mêmes recherches. Et quand un terme de recherche donne de bons résultats en découverte, ajoutez-le en correspondance exacte dans la campagne marque, catégorie ou concurrents qui lui correspond.

Avec un petit budget, commencez par la marque, la catégorie et la découverte. Les mots-clés concurrents sont les plus risqués : la personne a tapé le nom d’une autre app parce qu’elle voulait celle-là. La campagne marque vaut la peine même si votre app sort déjà en tête sur son nom, car une autre app peut enchérir dessus.

Gardez un seul pays par campagne pour commencer, la France par exemple, et donnez à chaque campagne un nom qui rend les rapports lisibles : « FR – Catégorie – Exact ».

## Étape 3 : créer votre première campagne dans les résultats de recherche

Commencez par la campagne catégorie : c’est elle qui amène des gens qui ne connaissent pas encore votre app.

1. Dans le tableau de bord **Campaigns**, cliquez sur **Create Campaign** et choisissez votre app.
2. Choisissez l’emplacement **Search results** (résultats de recherche).
3. Choisissez le pays ou la région.
4. Nommez la campagne.
5. Fixez le budget quotidien. Apple le traite comme une moyenne : certains jours coûtent plus, mais un mois ne coûte jamais plus de 30,4 fois le budget quotidien.
6. Choisissez la stratégie d’enchères : Manage Bids ou Maximize Conversions (voir ci-dessous).
7. Fixez la date de début et, pour un test, une date de fin.

Certains guides parlent encore d’un budget total : le journal des modifications d’Apple pour les développeurs le donne comme abandonné depuis juin 2026, si bien que le budget quotidien et la date de fin sont vos deux freins.

{{< screenshot id="apple-ads-tutorial-01" alt="Création d’une campagne Apple Ads avec l’app, l’emplacement résultats de recherche, le pays, le budget quotidien et la stratégie d’enchères" >}}

### Manage Bids ou Maximize Conversions

Avec **Manage Bids** (gérer les enchères), vous fixez une enchère maximale par tap (CPT max) pour chaque groupe d’annonces, que vous pouvez ajuster mot-clé par mot-clé. Vous gardez la main et vous voyez quel mot-clé amène quelle installation : c’est tout l’intérêt d’une première campagne.

**Maximize Conversions** (maximiser les conversions), stratégie arrivée début 2026, fonctionne à l’inverse : vous fixez un coût par acquisition (CPA) cible, ce que vous voulez payer en moyenne par installation, et Apple fixe l’enchère de chaque recherche via un groupe d’annonces automatique qui utilise Search Match. Les consignes d’Apple :

- la cible est tenue en moyenne sur la semaine, pas chaque jour ;
- le budget quotidien doit permettre au moins cinq conversions par jour ;
- comptez au moins deux semaines avant de la juger.

C’est la règle des cinq conversions qui tranche pour une petite équipe. Avec un CPA cible de 3 €, il faut au moins 15 € par jour, soit environ 456 € par mois. Si votre budget de test est plus bas, commencez par Manage Bids, et essayez Maximize Conversions quand vous saurez ce que vous coûte une installation.

## Étape 4 : régler l’enchère et l’audience du groupe d’annonces

Le groupe d’annonces contient l’enchère, les réglages d’audience et les mots-clés. Dans une campagne Manage Bids, c’est vous qui le créez.

### L’enchère CPT max par défaut

Une méthode simple : prenez ce que vous pouvez payer pour un nouvel utilisateur et multipliez-le par la part de personnes qui installent l’app après avoir touché l’annonce. Si un nouvel utilisateur vaut 2 € pour vous et que vous attendez 40 % d’installations parmi les taps, commencez à 0,80 €. Apple affiche aussi une enchère suggérée : prenez-la comme un repère, pas comme une consigne. Vous ne payez jamais plus que votre CPT max, et souvent moins.

Si le groupe d’annonces propose un plafond de CPA facultatif (CPA cap, ou CPA goal dans les anciens guides), laissez-le vide : Apple annonce que ces plafonds ne seront bientôt plus disponibles.

### Search Match

Search Match laisse Apple associer elle-même votre annonce à des recherches, à partir des métadonnées de votre page produit, des apps similaires de votre catégorie et d’autres données de recherche. Désactivez-le dans les campagnes marque, catégorie et concurrents, pour qu’elles ne tournent que sur vos mots-clés, et gardez-le uniquement dans le groupe de découverte sans mot-clé.

### L’audience

Pour une première campagne, gardez une audience large :

- Type de client (Customer type) : All users (tous les utilisateurs), ou New users si vous ne voulez que des personnes qui n’ont jamais téléchargé l’app. Les autres options sont Returning users et Users of my other apps.
- Appareils : ceux que votre app prend en charge (iPhone, iPad).
- Lieu : tout le pays.
- Programmation des annonces (Ad scheduling) : aucune, tant que les rapports ne montrent pas que certaines heures ou certains jours convertissent mieux.

{{< callout type="warning" >}}**Laissez l’âge et le sexe vides.** Dès que vous ajoutez un critère d’âge ou de sexe, Apple exclut automatiquement toutes les personnes qui ont désactivé les publicités personnalisées dans leurs réglages, ce qui peut réduire fortement votre audience. L’API d’attribution d’Apple ne renvoie pas non plus de données de campagne pour les installations issues de ces groupes d’annonces : vos propres statistiques ne pourront pas relier ces utilisateurs à une campagne.{{< /callout >}}

## Étape 5 : mots-clés, types de correspondance et mots-clés négatifs

Apple Ads propose seulement deux types de correspondance :

- **Exacte** (Exact match) : votre annonce s’affiche pour cette recherche et ses variantes proches, comme les pluriels et les fautes de frappe courantes.
- **Large** (Broad match) : votre annonce peut aussi s’afficher pour des recherches proches, des synonymes et des recherches qui contiennent votre mot-clé.

Apple conseille d’enchérir le plus haut sur la correspondance exacte ; dans l’exemple ci-dessous, les enchères en correspondance large sont un peu plus basses, et celle du groupe Search Match la plus basse.

Les mots-clés négatifs empêchent votre annonce de s’afficher sur des recherches dont vous ne voulez pas, au niveau de la campagne ou du groupe d’annonces. Pour une app de planification de repas, « livraison repas » et « restaurant » sont des négatifs évidents : ces personnes veulent dîner ce soir, pas organiser leur semaine.

Voici la configuration catégorie et découverte de cette app, en France :

```
FR – Catégorie – Exact (Search Match désactivé)
  planning repas          exacte   CPT max 0,80 €
  menu de la semaine      exacte   CPT max 0,80 €
  idées repas semaine     exacte   CPT max 0,60 €
  Mots-clés négatifs : livraison repas, restaurant

FR – Découverte
  Groupe « Large » (Search Match désactivé)
    planning repas        large    CPT max 0,50 €
    menu de la semaine    large    CPT max 0,50 €
  Groupe « Search Match » (sans mot-clé, Search Match activé, CPT max 0,40 €)
  Mots-clés négatifs exacts : tous les mots-clés des campagnes
  marque, catégorie et concurrents
```

{{< screenshot id="apple-ads-tutorial-02" alt="Liste des mots-clés d’un groupe d’annonces Apple Ads avec les mots-clés exacts, leurs enchères CPT max et les mots-clés négatifs" >}}

## Étape 6 : choisir l’annonce (page produit par défaut ou personnalisée)

Dans les résultats de recherche, votre annonce reprend votre page produit App Store : icône, nom, sous-titre et captures d’écran. Il n’y a rien à concevoir : la fiche, c’est l’annonce.

Une page de produit personnalisée est une autre version de cette page, créée dans App Store Connect, avec ses propres captures, aperçus vidéo, texte promotionnel et URL. Vous pouvez en publier jusqu’à 70 par app, et chacune passe par la validation d’Apple. Dans Apple Ads, chaque groupe d’annonces peut en utiliser une comme annonce, pour que les captures correspondent à la recherche : le groupe « menu de la semaine » peut mener à une page dont la première capture montre une semaine de repas.

La page d’Apple sur les [pages de produit personnalisées](https://developer.apple.com/app-store/custom-product-pages/) (en anglais) explique comment les créer. Deux détails comptent pour la suite : l’onglet Aujourd’hui n’accepte que des annonces construites sur une page personnalisée, et un lien profond sur la page peut ouvrir le bon écran de votre app chez les personnes qui l’ont déjà, à partir d’iOS 18.

## Étape 7 : lancer la campagne et lire les premiers résultats

Ne touchez à rien la première semaine. Changer les enchères chaque matin rend les résultats illisibles, et Apple demande deux semaines avant de juger une campagne Maximize Conversions.

Lisez ensuite ces indicateurs dans le tableau de bord, campagne par campagne et mot-clé par mot-clé :

| Indicateur | Ce qu’il vous dit |
|---|---|
| Impressions | Combien de fois votre annonce a été affichée |
| Taps et taux de tap (TTR) | Les taps divisés par les impressions : indique si l’annonce correspond aux recherches |
| Installations après tap (tap-through) | Téléchargements et retéléchargements dans les 30 jours qui suivent un tap |
| Installations après affichage (view-through) | Téléchargements dans la journée qui suit l’affichage de l’annonce, sans tap |
| Coût moyen par tap (CPT) | La dépense divisée par les taps |
| Coût par installation (CPI) | La dépense divisée par les installations après tap : le chiffre à comparer avec la valeur d’un utilisateur |

Trois habitudes rentabilisent les semaines suivantes :

1. Lisez chaque semaine les termes de recherche de la campagne de découverte : ils montrent ce que les gens ont réellement tapé. Passez ceux qui amènent des installations à bon coût en correspondance exacte dans la bonne campagne, et ajoutez les termes hors sujet en mots-clés négatifs.
2. Ajustez les enchères par petites touches : montez-les sur les mots-clés dont le coût par installation est sous votre cible, baissez-les sur ceux qui amènent des taps à un coût par installation supérieur.
3. Regardez au-delà de l’installation. Un téléchargement n’est pas un client : comparez ce que font vos utilisateurs dans l’app (inscriptions, essais, abonnements) avec la campagne qui les a amenés.

{{< screenshot id="apple-ads-tutorial-03" alt="Le tableau de bord des campagnes Apple Ads avec la dépense, les impressions, les taps, le TTR, les installations, le CPT moyen et le coût par installation de chaque campagne" >}}

Une fois le budget de test dépensé, mettez en pause tout mot-clé dont le coût par installation reste supérieur à la valeur d’un utilisateur. Si c’est toute la campagne, regardez en amont : la page produit, le prix ou les mots-clés.

## La checklist de votre première campagne Apple Ads

Avant le lancement, vérifiez que vous avez :

- une page produit qui donne envie et une liste de mots-clés issue d’une recherche ;
- des campagnes marque, catégorie et découverte, les concurrents étant gardés pour plus tard ;
- un pays par campagne, un budget quotidien que vous pouvez vous permettre de perdre et une date de fin ;
- Search Match activé seulement dans le groupe de découverte sans mot-clé, et des négatifs en découverte pour chaque mot-clé exact ;
- l’âge et le sexe laissés vides ;
- une date dans votre agenda, deux semaines après le lancement, pour lire les résultats.

Si votre app est aussi sur Google Play, mon guide des {{< a key="google-app-campaigns" >}}campagnes Google Ads pour applications{{< /a >}} couvre le côté Android, et ma comparaison sur {{< a key="app-ads-budget-comparison" >}}où investir les 1 000 premiers euros de votre app{{< /a >}} vous aide à répartir un budget entre Apple, Google et Meta.

Une mise en garde que je fais pour tout nouveau canal : il est facile de céder à la dernière nouveauté. Exploitez d’abord ce qui vous amène déjà des installations, avant d’ajouter un canal que vous n’aurez pas le temps de suivre.

Vous n’avez pas besoin d’une agence pour une première campagne. L’autre endroit où l’on découvre votre app, c’est son site : mon guide du {{< a key="app-website-seo" >}}SEO du site de votre application{{< /a >}} montre ce que vous pouvez faire vous-même, et mon {{< a page="/services/seo" >}}service SEO{{< /a >}} est là si vous préférez déléguer.
