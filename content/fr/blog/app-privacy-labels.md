---
title: "Confidentialité d’une app : consentement RGPD, étiquettes Apple et section Sécurité des données de Google Play"
seo_title: "RGPD application mobile : consentement, Apple et Google Play"
description: "RGPD application mobile : consentement avant les SDK, étiquettes de confidentialité Apple et section Sécurité des données de Google Play, pas à pas."
slug: "rgpd-application-mobile"
translationKey: "app-privacy-labels"
date: 2026-10-18T22:54:00+02:00
lastmod: 2026-10-18T22:54:00+02:00
category: "mobile-apps"
article_type: "tutorial"
keywords: ["RGPD application mobile", "étiquettes de confidentialité App Store", "section Sécurité des données Google Play", "consentement application mobile", "App Tracking Transparency", "recommandation CNIL applications mobiles"]
summary: "Une application mobile mène deux chantiers distincts. Apple et Google exigent qu’elle déclare ses données : étiquettes de confidentialité dans App Store Connect, formulaire Sécurité des données dans la Play Console. Le RGPD et la règle des cookies imposent, eux, le consentement avant que ses SDK publicitaires, et la plupart de ses SDK de mesure d’audience, ne lisent ou n’écrivent sur le téléphone ; sur iOS, le suivi publicitaire passe aussi par la fenêtre ATT d’Apple."
cover: "app-privacy-labels"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’un smartphone affichant la page d’une application et ses étoiles, à côté d’une liste de résultats du store"
related: ["privacy-policy-guide", "cookie-banner-rules", "mobile-app-security-checklist", "gdpr-guide", "app-store-listing"]
services: ["automation"]
faq:
  - q: "Faut-il remplir les étiquettes de confidentialité si mon app ne collecte aucune donnée ?"
    a: "Oui. Dans App Store Connect, ouvrez quand même App Privacy et choisissez « No, we do not collect data from this app ». Google Play exige le formulaire Sécurité des données de toutes les applications, y compris celles qui ne collectent aucune donnée utilisateur, et les deux stores demandent un lien vers une politique de confidentialité."
  - q: "Peut-on modifier ses étiquettes sans publier de mise à jour de l’app ?"
    a: "Sur l’App Store, oui : Apple indique que vous pouvez mettre à jour vos réponses à tout moment sans soumettre de mise à jour, alors qu’une nouvelle URL de politique de confidentialité n’est publiée qu’avec la version suivante. Sur Google Play, vous modifiez le formulaire dans la Play Console et Google l’examine dans le cadre de l’examen de l’application."
  - q: "Peut-on obliger les utilisateurs à accepter le suivi pour utiliser l’app ?"
    a: "Pas sur iOS : la règle 5.1.2(i) des App Review Guidelines interdit de conditionner des fonctions à l’autorisation de suivi ou de la récompenser. Avec le RGPD, le consentement doit aussi être libre, et subordonner un service au consentement à des données dont il n’a pas besoin montre qu’il ne l’est pas (article 7, paragraphe 4)."
  - q: "Qui peut remplir la rubrique App Privacy dans App Store Connect ?"
    a: "Le titulaire du compte (Account Holder), un Admin ou un App Manager peuvent répondre et publier. Le rôle Marketing peut aussi saisir l’URL de la politique de confidentialité."
---

Pour une application mobile, la confidentialité et le RGPD se jouent sur deux chantiers qu’on confond souvent. D’un côté, l’app déclare ses données, parce qu’Apple et Google l’exigent : les étiquettes de confidentialité de l’App Store, affichées sur votre page produit, et la section Sécurité des données de Google Play. De l’autre, elle demande la permission : votre écran de consentement, qu’impose la loi, et la fenêtre de suivi d’Apple sur iOS.

Ce tutoriel suit cet ordre, avec les menus que décrivent les aides d’Apple et de Google en octobre 2026. J’en reprends les libellés anglais : dans une interface en français, ils peuvent différer.

Mon exemple reste Fournée, l’app de précommande de la boulangerie lyonnaise fictive de mon {{< a key="app-store-listing" >}}tutoriel sur la fiche App Store{{< /a >}}. La confidentialité est une étape de mon {{< a key="mobile-app-launch-guide" >}}guide complet pour lancer une application mobile{{< /a >}}.

## Quatre obligations distinctes : deux déclarations, deux permissions

| | Où | Exigé par | Concerne |
|---|---|---|---|
| Étiquettes de confidentialité App Store | App Store Connect, App Privacy | Apple, depuis le 8 décembre 2020 | Nouvelles apps et mises à jour |
| Section Sécurité des données | Play Console, App content | Google, depuis le 20 juillet 2022 | Toutes les apps de Google Play |
| Fenêtre de suivi (ATT) | Votre app iOS, fenêtre système | Apple, depuis iOS 14.5 (26 avril 2021) | Les apps iOS qui pistent, dans tous les pays |
| Écran de consentement | Votre app, avant le démarrage des SDK | Droit de l’UE et du Royaume-Uni | Utilisateurs de l’UE et du Royaume-Uni, sur iOS et Android |

Des étiquettes exactes ne rendent pas légal un SDK publicitaire qui collecte avant que l’utilisateur ait dit oui.

## Étape 1 : listez ce que collectent votre app et ses SDK

Les deux stores vous font répondre pour du code que vous n’avez pas écrit : Apple demande d’inclure les « partenaires tiers dont vous intégrez le code » (outils de mesure d’audience, régies publicitaires, SDK), et Google vous tient responsable des données traitées par vos bibliothèques et SDK tiers. Commencez donc par un inventaire, pas par le formulaire.

Pour Apple, une donnée est collectée quand elle quitte le téléphone et que vous ou un partenaire pouvez y accéder au-delà du temps nécessaire pour traiter la requête en temps réel. Pour chaque donnée, notez :

1. la donnée : une adresse e-mail, un historique de commandes, des rapports de plantage, l’identifiant publicitaire ;
2. ce qui l’envoie : votre serveur ou tel SDK ;
3. si elle est liée à la personne (compte, identifiant utilisateur ou identifiant d’appareil) ;
4. à quoi elle sert : faire fonctionner l’app, la mesure d’audience, la publicité ou autre chose ;
5. si elle sert à suivre la personne dans les apps et sites d’autres entreprises, ou part chez un courtier en données.

L’inventaire de Fournée ressemble à ceci :

```
Donnée                   Envoyée par       Liée à l’utilisateur   Finalité             Suivi
Nom, e-mail, téléphone   Serveur Fournée   Oui (compte)           Compte, commandes    Non
Historique de commandes  Serveur Fournée   Oui (compte)           Commandes            Non
Écrans vus, appuis       SDK d’analyse     Oui (ID utilisateur)   Mesure d’audience    Non
Rapports de plantage     SDK de crash      Non (aucun ID)         Correction de bugs   Non
```

Prudence avec la colonne « liée » : pour Apple, les données personnelles au sens des lois sur la vie privée sont liées à l’utilisateur, sauf si vous les dé-identifiez avant la collecte.

Sur iOS, les manifestes de confidentialité (`PrivacyInfo.xcprivacy`) font une partie du travail : Xcode regroupe ceux de vos SDK dans un rapport qui aide à remplir les étiquettes. Et depuis le 1er mai 2024, App Store Connect refuse les envois sans raison approuvée pour chaque « required reason API » appelée par votre code ou vos SDK.

## Étape 2 : remplissez les étiquettes de confidentialité dans App Store Connect

La [page d’Apple sur les informations de confidentialité](https://developer.apple.com/app-store/app-privacy-details/) (en anglais) décrit chaque type de données et chaque finalité si vous hésitez.

1. Dans App Store Connect, ouvrez **Apps**, sélectionnez votre app et cliquez sur **App Privacy** dans la barre latérale.
2. Cliquez sur **Get Started**, choisissez **Yes, we collect data from this app**, puis **Next**.
3. Cochez chaque type de données de votre inventaire et cliquez sur **Save**.

{{< screenshot id="app-privacy-labels-01" alt="Page App Privacy d’App Store Connect dans la barre latérale de l’app, avec le bouton Get Started et la fenêtre qui demande si vous collectez des données" >}}

4. Sous **Data Types**, cliquez sur chaque type, répondez à ses questions (à quoi il sert, s’il est lié à l’identité de l’utilisateur, s’il sert au suivi) et cliquez sur **Save**.

{{< screenshot id="app-privacy-labels-02" alt="Questions d’App Store Connect pour un type de données : finalités, lien avec l’identité de l’utilisateur, utilisation pour le suivi" >}}

5. Descendez jusqu’à **Product Page Preview**, cliquez sur **See Details** pour vérifier ce que verront les utilisateurs, puis sur **Publish** en haut à droite, et confirmez.

{{< screenshot id="app-privacy-labels-03" alt="Aperçu Product Page Preview des réponses de confidentialité dans App Store Connect, avec le bouton Publish en haut à droite" >}}

Pour Fournée, cela donne Contact Info et Purchases pour les comptes et les commandes, Usage Data pour la mesure d’audience, Diagnostics pour les plantages, Identifiers pour l’identifiant transmis au SDK d’analyse, et un non à chaque question sur le suivi.

Cliquez ensuite sur **Edit** à côté de **Privacy Policy** et saisissez son URL : Apple en exige une pour toute app, et vous pouvez ajouter l’adresse d’une page où chacun gère ses choix de confidentialité. Mon {{< a key="privacy-policy-guide" >}}guide de la politique de confidentialité{{< /a >}} détaille ce qu’elle doit contenir.

## Étape 3 : remplissez la section Sécurité des données dans la Play Console

Google demande le même inventaire sous une autre forme, l’examine avec l’application, puis l’affiche dans la section Sécurité des données de votre fiche. Son [article d’aide](https://support.google.com/googleplay/android-developer/answer/10787469?hl=fr) définit chaque terme.

1. Dans la Play Console, sélectionnez votre app et ouvrez **App content** (l’aide de Google la place sous **Policy** dans le menu). Repérez **Data safety** et cliquez sur **Start**.

{{< screenshot id="app-privacy-labels-04" alt="Page App content de la Play Console avec la section Data safety et son bouton Start" >}}

2. Dans **Data collection and security**, indiquez si votre app collecte ou partage l’un des types de données listés, si toutes ces données sont chiffrées en transit et si les utilisateurs peuvent en demander la suppression.
3. Dans **Data types**, cochez chaque type de votre inventaire.
4. Pour chaque type, indiquez s’il est collecté, partagé ou les deux, s’il est traité de façon éphémère, s’il est facultatif et pourquoi vous le collectez.

{{< screenshot id="app-privacy-labels-05" alt="Formulaire Data safety de la Play Console, questions pour un type de données : collecté ou partagé, traitement éphémère, obligatoire ou facultatif, finalités" >}}

5. Enregistrez, relisez vos réponses et envoyez.

Google distingue la collecte (données qui quittent le téléphone) du partage (données transmises à une autre entreprise), avec des exceptions : lisez ses définitions avant de déclarer chaque SDK. Ne répondez oui au chiffrement en transit qu’après avoir vérifié que toutes les connexions passent en HTTPS ; ma {{< a key="mobile-app-security-checklist" >}}checklist de sécurité pour application mobile{{< /a >}} montre comment. Google veut aussi un lien vers votre politique de confidentialité dans la Play Console et dans l’app.

## Étape 4 : la suppression du compte, exigée par les deux stores

Si l’on peut créer un compte dans votre app, les deux stores exigent un moyen de le supprimer.

- **Apple**, depuis le 30 juin 2022 (règle 5.1.1(v) des App Review Guidelines) : la suppression doit pouvoir être lancée dans l’app, et une simple désactivation ne suffit pas. Rendez l’option facile à trouver et, sauf dans un secteur très réglementé, n’obligez personne à téléphoner ou à écrire un e-mail. Si la suppression se termine sur votre site, faites un lien direct vers la bonne page. Avec Sign in with Apple, révoquez les jetons de l’utilisateur via l’API REST d’Apple.
- **Google Play** : la même suppression dans l’app, plus un lien web pour ceux qui n’ont plus l’app, à indiquer dans le formulaire Sécurité des données.

Pour Apple, proposer la suppression seulement là où une loi comme le RGPD l’impose ne suffit pas : chacun doit pouvoir supprimer son compte, où qu’il se trouve. Dans l’UE, le droit à l’effacement (article 17 du RGPD) s’applique de toute façon. Si la loi vous oblige à garder certaines données, dites-le : Fournée place **Supprimer mon compte** dans **Compte**, avec un écran de confirmation qui cite les documents que la boulangerie doit conserver, comme les factures.

## Étape 5 : le consentement RGPD dans votre application mobile, avant les SDK

Il s’agit d’informations générales, pas d’un conseil juridique.

En France, l’article 82 de la loi Informatique et Libertés, qui transpose l’article 5(3) de la [directive ePrivacy](https://eur-lex.europa.eu/eli/dir/2002/58/2009-12-19/fra) modifiée en 2009, impose le consentement avant qu’une app n’écrive sur le téléphone ou n’y lise des informations, sauf si c’est strictement nécessaire au service demandé par l’utilisateur. C’est la règle des cookies, appliquée aux SDK qui déposent un identifiant sur l’appareil ou lisent l’identifiant publicitaire. La mesure d’audience n’y échappe que si elle produit des statistiques anonymes à votre usage exclusif, sans recoupement avec d’autres données ni suivi de la personne d’une app ou d’un site à l’autre. Le Royaume-Uni (règlement 6 des PECR) a assoupli la règle le 5 février 2026, notamment pour la mesure d’audience à seule fin statistique ; mon {{< a key="cookie-banner-rules" >}}guide du bandeau cookies{{< /a >}} détaille les deux régimes.

Le siège de votre entreprise compte moins que la localisation de vos utilisateurs : le RGPD s’applique à une entreprise hors de l’UE qui suit le comportement de personnes dans l’UE (article 3, paragraphe 2, point b). Une app québécoise, suisse ou marocaine qui piste des utilisateurs en France doit donc leur appliquer ces règles. Mon {{< a key="gdpr-guide" >}}guide complet du RGPD{{< /a >}} couvre le reste.

En pratique :

1. **Affichez votre écran de consentement au premier lancement, avant le démarrage de ces SDK.** La [recommandation de la CNIL sur les applications mobiles](https://www.cnil.fr/fr/recommandations-applications-mobiles), publiée en septembre 2024, demande que les SDK bloquent tout traitement soumis au consentement tant que celui-ci n’a pas été recueilli.
2. **Rendez le refus aussi simple que l’acceptation**, et nommez chaque finalité en mots simples, comme la CNIL l’attend des bandeaux cookies.
3. **Transmettez chaque choix à vos SDK.** Le mode consentement de Firebase pour les apps utilise quatre signaux définis avec `setConsent` : `analytics_storage`, `ad_storage`, `ad_user_data` et `ad_personalization`. Mon {{< a key="google-app-campaigns" >}}guide des campagnes Google Ads pour applications{{< /a >}} explique ce qu’ils changent pour les annonceurs.
4. **Avec des annonces AdMob**, Google exige une plateforme de gestion du consentement (CMP) certifiée pour les annonces personnalisées dans l’EEE, au Royaume-Uni (depuis le 16 janvier 2024) et en Suisse (depuis le 31 juillet 2024), sinon seules des annonces limitées s’affichent. Son SDK User Messaging Platform (UMP) affiche le message créé dans l’onglet **Privacy & messaging** d’AdMob ; les CMP tierces certifiées conviennent aussi.
5. **Laissez chacun changer d’avis** depuis les réglages de l’app : selon l’article 7, paragraphe 3, du RGPD, retirer son consentement doit être aussi simple que le donner.

Un piège : les fenêtres de permission du téléphone ne valent pas consentement. Selon la CNIL, une permission système, comme l’accès à la localisation, ne doit généralement pas être confondue avec un consentement au sens du RGPD : autoriser la carte de Fournée à trouver la boutique la plus proche, ce n’est pas accepter de partager sa position avec une régie publicitaire. Elle recommande aussi de demander les permissions quand une fonction en a besoin, pas à l’installation, et a annoncé des contrôles en 2025 sur le paramétrage des SDK et les permissions.

{{< callout type="warning" >}}Testez votre écran de consentement : sur une installation neuve, refusez tout, puis vérifiez avec le mode debug de vos SDK qu’aucun événement de mesure d’audience ou de publicité ne quitte le téléphone.{{< /callout >}}

Au 19 octobre 2026, la proposition européenne Digital Omnibus ajouterait des exemptions à ces règles de consentement, mais les États membres n’ont pas encore arrêté leur position : appliquez les règles actuelles.

## Étape 6 : la fenêtre de suivi d’Apple (ATT), si vous pistez

Depuis iOS 14.5 (26 avril 2021), une app doit obtenir l’autorisation de l’utilisateur via le framework App Tracking Transparency pour le suivre ou lire l’identifiant publicitaire, qui sinon ne contient que des zéros. Pour Apple, suivre, c’est relier les données de votre app à celles d’autres entreprises pour cibler ou mesurer la publicité, ou les transmettre à un courtier en données, y compris quand un SDK le fait avec les données de vos utilisateurs, même si vous n’utilisez pas cette fonction.

- Ajoutez une phrase d’explication (la clé `NSUserTrackingUsageDescription`) qui dit pourquoi vous voulez suivre l’utilisateur.
- Vous pouvez afficher votre propre explication avant la fenêtre d’Apple, si elle dit honnêtement ce que vous faites des données.
- Répondez oui aux questions de suivi correspondantes dans vos étiquettes App Store.

ATT et votre écran de consentement ne se remplacent pas : l’un répond à la règle d’Apple, sur iOS, dans tous les pays ; l’autre au droit européen et britannique, sur les deux plateformes. Si Fournée ajoutait un SDK de publicité personnalisée, ses utilisateurs sur iPhone verraient les deux. Retenez la réponse la plus stricte : selon la FAQ d’Apple, un refus dans sa fenêtre l’emporte toujours, même sur un oui donné sur votre écran, et Apple déconseille de la montrer à quelqu’un qui a déjà refusé le suivi sur le vôtre.

Dans l’UE, et notamment en France, la fenêtre elle-même va changer. Apple a annoncé le 16 septembre 2026 qu’à partir d’iOS 27.2 (en bêta au 19 octobre 2026), les apps pourront utiliser une version alternative, à la présentation et au texte modifiés, avec un bouton facultatif « Additional Information » pour des choix de consentement plus détaillés ; en Allemagne, en France, en Italie, en Pologne et en Roumanie, ce sera la seule version. Les cas où il faut demander l’autorisation ne changent pas, et la page d’Apple ajoute que les utilisateurs de l’UE peuvent être sollicités de nouveau un an après leur dernière réponse, sauf s’ils ont désactivé les demandes de suivi dans les réglages.

## Si des enfants peuvent utiliser votre app

Dans l’UE, quand un service en ligne proposé directement à un enfant repose sur le consentement, l’article 8 du RGPD exige l’accord d’un parent en dessous de 16 ans, ou d’un âge inférieur fixé par chaque pays, jamais moins de 13 ans. La France a retenu 15 ans : en dessous, le consentement est donné conjointement par le mineur et ses parents.

Au Royaume-Uni, l’âge retenu est 13 ans, et le Children’s code (Age appropriate design code) de l’ICO s’applique aux apps susceptibles d’être utilisées par des moins de 18 ans, même si elles ne leur sont pas destinées : ses 15 normes imposent notamment des réglages protecteurs et la localisation désactivée par défaut. Les stores ont aussi leurs propres règles pour les apps destinées aux enfants.

## Avant de soumettre : la checklist, et quand se faire aider

1. Inventaire rédigé SDK par SDK, manifestes vérifiés sur iOS.
2. Réponses App Privacy publiées, URL de la politique de confidentialité saisie.
3. Formulaire Sécurité des données envoyé, avec le lien de suppression si l’app a des comptes.
4. Suppression du compte facile à trouver dans l’app.
5. Écran de consentement avant les SDK non essentiels, refus aussi simple que l’acceptation, choix transmis et modifiables.
6. Fenêtre ATT seulement si vous pistez, avec une explication claire.
7. Étiquettes et formulaire mis à jour à chaque ajout ou changement de SDK.

Vous n’avez pas besoin d’une agence pour remplir ces formulaires : avec un inventaire complet, c’est la partie facile. Le plus dur, c’est de savoir ce que font vraiment vos SDK. Faites appel à un avocat ou à un DPO quand les données sont sensibles, que l’app s’adresse aux enfants ou que vos revenus dépendent de la publicité, et à un développeur quand l’écran de consentement doit être branché sur plusieurs SDK.
