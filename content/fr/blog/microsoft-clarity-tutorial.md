---
title: "Microsoft Clarity : l’installer et comprendre pourquoi vos visiteurs partent"
seo_title: "Microsoft Clarity : tutoriel pour l’installer et l’utiliser"
description: "Microsoft Clarity pas à pas : installez l’outil gratuit, reliez-le à votre bandeau cookies (RGPD), puis lisez cartes de chaleur et enregistrements."
slug: "microsoft-clarity-tutoriel"
translationKey: "microsoft-clarity-tutorial"
date: 2026-10-17T09:18:00+02:00
lastmod: 2026-10-17T09:18:00+02:00
category: "tools"
article_type: "tutorial"
keywords: ["Microsoft Clarity", "tutoriel Microsoft Clarity", "installer Microsoft Clarity", "Microsoft Clarity RGPD", "carte de chaleur site web", "enregistrement de session"]
summary: "Pour utiliser Microsoft Clarity, créez un projet gratuit sur clarity.microsoft.com, ajoutez son code de suivi à toutes vos pages et reliez-le à votre bandeau cookies : depuis le 31 octobre 2025, Clarity exige un signal de consentement pour les visiteurs de l’EEE, du Royaume-Uni et de la Suisse. Lisez ensuite le tableau de bord (clics de rage, clics morts, retours rapides), les cartes de chaleur et quelques enregistrements pour voir ce qui fait partir vos visiteurs."
cover: "microsoft-clarity-tutorial"
cover_alt: "Carte de chaleur Microsoft Clarity d’une page web dans une fenêtre de navigateur"
related: ["clarity-vs-hotjar", "website-conversion-rate", "track-ai-traffic", "squarespace-code-injection", "google-search-console-tutorial"]
services: ["websites"]
faq:
  - q: "Microsoft Clarity est-il vraiment gratuit ?"
    a: "Oui. Clarity n’a pas de formule payante ni de limite de nombre de sites. Microsoft enregistre jusqu’à 100 000 sessions par projet et par jour et conserve les enregistrements 30 jours, selon la [FAQ de Clarity](https://learn.microsoft.com/fr-fr/clarity/faq)."
  - q: "Microsoft Clarity est-il conforme au RGPD ?"
    a: "Cela dépend de votre configuration plus que de l’outil. Gardez le masquage activé, mentionnez Clarity dans votre politique cookies et votre politique de confidentialité, et attendez le consentement du visiteur avant de le charger : c’est la règle posée par le projet de recommandation de la CNIL sur le rejeu de session."
  - q: "Peut-on utiliser Microsoft Clarity avec Google Analytics ?"
    a: "Oui, et les deux répondent à des questions différentes : Google Analytics compte les visites et les conversions, Clarity montre ce que les gens font sur la page. La page d’installation de Clarity propose aussi une intégration avec Google Analytics pour relier les deux."
  - q: "Microsoft Clarity ralentit-il un site ?"
    a: "Le script de Clarity se charge de façon asynchrone : le reste de la page ne l’attend pas. Pour le vérifier sur votre site, testez une page avec PageSpeed Insights avant et après l’installation."
---

Microsoft Clarity est un outil gratuit de Microsoft qui enregistre la façon dont les visiteurs utilisent votre site : où ils cliquent, jusqu’où ils font défiler la page et à quel moment ils abandonnent. Ce tutoriel Microsoft Clarity couvre toute l’installation, du code de suivi au bandeau cookies, puis les rapports que je lis pour comprendre ce qui fait partir les visiteurs.

J’utilise Clarity pour voir où les gens s’attardent, s’ils viennent pour quelque chose de précis et quelles zones les font fuir, afin de corriger le tir. Est-ce le texte ? Une image ? L’ergonomie ? Les étapes suivent cet ordre : installer, vérifier, protéger les données, puis lire.

Prévoyez une demi-heure et un accès aux réglages de code de votre site ou à Google Tag Manager. Les menus de Clarity sont cités tels qu’ils apparaissent dans son interface en anglais (octobre 2026), avec une traduction entre parenthèses quand elle aide. Clarity fait partie des {{< a key="small-business-tools-guide" >}}outils numériques pour TPE que j’utilise au quotidien{{< /a >}}.

## Ce que Microsoft Clarity montre (et ce qu’il ne montre pas)

Clarity répond aux questions sur ce qui se passe dans vos pages. À chaque question son endroit :

| Votre question | Où regarder dans Clarity |
|---|---|
| Où les visiteurs cliquent-ils ? | **Heatmaps** (cartes de chaleur), carte des clics |
| Jusqu’où lisent-ils la page ? | **Heatmaps**, carte de défilement |
| Qu’a fait un vrai visiteur, seconde par seconde ? | **Recordings** (enregistrements) |
| Où les gens bloquent-ils ou s’agacent-ils ? | **Dashboard** (tableau de bord) : clics de rage, clics morts, retours rapides |
| Que font les visiteurs venus de ChatGPT et des autres assistants IA ? | Le canal **AIPlatform** |

Ce que Clarity ne montre pas, c’est ce qui se passe avant la visite : les recherches qui amènent les gens sur votre site, que couvre mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}}. Il ne compte pas non plus vos appels téléphoniques. Si vous hésitez encore entre deux outils, mon comparatif {{< a key="clarity-vs-hotjar" >}}Clarity vs Hotjar{{< /a >}} le met face à son concurrent le plus connu.

## Étape 1 : créer un projet Clarity

Un projet correspond à un site. Vous pouvez en créer autant qu’il vous en faut avec un seul compte.

1. Allez sur `clarity.microsoft.com` et connectez-vous avec un compte Microsoft, Google ou Facebook. Choisissez un compte que l’entreprise gardera, pas celui d’un prestataire.
2. Créez un nouveau projet : donnez-lui le nom du site et saisissez son adresse.
3. Clarity affiche ensuite les options d’installation. Vous les retrouverez plus tard dans les **Settings** (paramètres) du projet.

Si quelqu’un d’autre s’occupe de votre site, invitez cette personne dans le projet plutôt que de partager vos identifiants.

{{< screenshot id="microsoft-clarity-tutorial-01" alt="Fenêtre de création d’un projet Clarity avec les champs du nom du projet et de l’adresse du site" >}}

## Étape 2 : installer le code de suivi Clarity

Le code de suivi est un court script, propre à votre projet, qui doit se charger sur chaque page du site. La page d’installation de Clarity propose plusieurs voies : copier le code vous-même avec **Get tracking code**, suivre le guide de votre plateforme, connecter Google Tag Manager, ou envoyer le code et les instructions par e-mail à la personne qui gère votre site.

{{< screenshot id="microsoft-clarity-tutorial-02" alt="Page d’installation de Clarity avec les options pour récupérer le code de suivi, passer par une plateforme tierce ou connecter Google Tag Manager" >}}

{{< callout type="tip" >}}**Installez Clarity avant de toucher au site.** Quelques semaines d’enregistrements vous donnent un « avant » à comparer une fois vos modifications en ligne.{{< /callout >}}

### Sur Squarespace : l’injection de code

Copiez le code avec **Get tracking code**. Dans Squarespace, ouvrez **Injection de code**, collez le code dans le champ **En-tête** et enregistrez : il se charge alors sur toutes les pages. L’injection de code est disponible à partir du forfait Essentiel (Core), pas avec Basic ([aide Squarespace](https://support.squarespace.com/hc/fr-fr/articles/205815908)).

C’est le genre de petit code sans risque que j’ajoute aux sites Squarespace de mes clients : il se place dans l’en-tête et ne modifie rien sur les pages. Mon {{< a key="squarespace-code-injection" >}}tutoriel sur l’injection de code Squarespace{{< /a >}} montre où se trouve le réglage et comment tester ce que vous collez.

{{< screenshot id="microsoft-clarity-tutorial-03" alt="Panneau Injection de code de Squarespace avec le code de suivi Clarity collé dans le champ En-tête" >}}

### Sur WordPress, Wix ou Shopify

Clarity propose des guides pas à pas pour les plateformes tierces comme Shopify, Squarespace, Wix et WordPress : choisissez la vôtre sur la page d’installation et suivez le guide. Sur WordPress, Microsoft publie sa propre extension Clarity, qui vous évite de modifier les fichiers du thème.

### Avec Google Tag Manager

Si votre site utilise déjà Google Tag Manager, ajoutez Clarity par là : toutes vos balises restent au même endroit. La page d’installation de Clarity peut se connecter à votre compte Tag Manager et ajouter la balise pour vous. Pour le faire à la main :

1. Dans Tag Manager, ouvrez **Balises** et cliquez sur **Nouvelle**.
2. Dans **Configuration de la balise**, choisissez **HTML personnalisé** et collez le code Clarity.
3. Dans **Déclenchement**, choisissez **All Pages** (toutes les pages).
4. Enregistrez, vérifiez avec **Prévisualiser** que la balise se déclenche, puis cliquez sur **Envoyer** pour publier.

### À la main, sur un site codé

Sur un site développé sur mesure, collez le code dans la section `<head>` du gabarit commun à toutes les pages : les nouvelles pages en hériteront.

## Étape 3 : vérifier que Clarity enregistre

Ouvrez votre site dans une fenêtre de navigation privée et cliquez un peu partout pendant une minute. Vérifiez ensuite à deux endroits :

- **Dans votre navigateur.** Ouvrez les outils de développement (F12 sous Windows, Cmd+Option+I sur Mac), allez dans l’onglet **Réseau** et tapez `collect` dans le filtre. Des requêtes vers l’adresse collect de Clarity signifient que la balise envoie des données.
- **Dans Clarity.** Votre visite apparaît dans **Recordings** au bout d’un moment, pas tout de suite : revenez plus tard dans la journée.

Si les requêtes partent mais que les sessions venues de France ou d’Europe semblent maigres ou morcelées, la cause probable est le consentement plutôt que le code. C’est l’étape suivante.

{{< screenshot id="microsoft-clarity-tutorial-04" alt="Outils de développement du navigateur, onglet Réseau filtré sur collect, avec les requêtes envoyées à Clarity" >}}

## Étape 4 : relier Clarity à votre bandeau cookies (RGPD)

Depuis le 31 octobre 2025, Microsoft exige un signal de consentement pour les visites venues de l’Espace économique européen, du Royaume-Uni et de la Suisse. Sans signal valide, Clarity ne dépose aucun cookie chez ces visiteurs, et Microsoft prévient que des fonctions comme les enregistrements et les entonnoirs peuvent alors être limitées. Quand un visiteur refuse, Clarity supprime les cookies qu’il avait déjà déposés ([documentation de Microsoft sur le consentement](https://learn.microsoft.com/fr-fr/clarity/setup-and-installation/consent-management)).

Le signal vient de votre bandeau cookies, la fenêtre où les visiteurs acceptent ou refusent les traceurs. Il y a deux façons de l’envoyer :

1. **Utiliser un bandeau compatible avec Clarity.** Des plateformes de gestion du consentement (CMP) comme Complianz, CookieYes, CookieHub et Usercentrics expliquent comment elles transmettent le choix du visiteur à Clarity. Si vous utilisez un autre outil, comme Axeptio ou Didomi, cherchez « Microsoft Clarity » dans sa documentation avant d’écrire la moindre ligne de code.
2. **Envoyer le signal vous-même.** Quand le visiteur fait son choix, votre bandeau appelle l’API de consentement v2 de Clarity :

```js
// Le visiteur a accepté
window.clarity('consentv2', {
  ad_Storage: 'granted',
  analytics_Storage: 'granted'
});

// Le visiteur a refusé
window.clarity('consentv2', {
  ad_Storage: 'denied',
  analytics_Storage: 'denied'
});
```

Les noms des paramètres sont sensibles à la casse (notez le S majuscule de `ad_Storage` et `analytics_Storage`) et les valeurs s’écrivent en minuscules : `granted` (accordé) ou `denied` (refusé), selon le choix du visiteur. `consentv2` remplace l’ancien appel de consentement de Clarity, que Microsoft prévoit de retirer : mettez à jour le code de votre bandeau s’il l’utilise encore. Mentionnez ensuite Clarity dans votre politique cookies et votre politique de confidentialité, avec ce qu’il collecte et pourquoi.

### Ce que dit la CNIL sur le rejeu de session

Les enregistrements de Clarity relèvent de ce que la CNIL appelle le rejeu de session. Elle a soumis à consultation publique, du 25 février au 22 avril 2026, un [projet de recommandation sur ces outils](https://www.cnil.fr/fr/rejeu-de-session-la-cnil-lance-une-consultation-publique-sur-son-projet-de-recommandation). Le projet considère qu’ils lisent et écrivent des informations sur le terminal de l’internaute : ils relèvent donc de l’article 82 de la loi Informatique et Libertés, et le consentement préalable est la règle. Il demande aussi de fixer les finalités à l’avance et exclut le reciblage publicitaire.

À la date de rédaction (octobre 2026), je n’ai pas trouvé de version définitive : vérifiez la page de la CNIL avant de vous décider.

{{< callout type="warning" >}}**Pour un public français, le plus prudent est de ne charger Clarity qu’après acceptation**, en bloquant le script tant que le visiteur n’a pas cliqué sur « Accepter ». La CNIL exige par ailleurs que refuser soit aussi simple qu’accepter.{{< /callout >}}

## Étape 5 : régler le masquage et exclure vos propres visites

Deux réglages méritent une minute avant que les données s’accumulent. Les deux se trouvent dans les **Settings** du projet.

- **Masking** (masquage) décide de ce que Clarity cache dans les enregistrements et les cartes de chaleur. Le mode par défaut, **Balanced**, masque ce que Clarity considère comme sensible, par exemple ce que les gens saisissent dans les formulaires ; **Strict** masque tout le texte de la page. Gardez au moins Balanced, et passez en Strict si vos pages affichent des données clients, comme un espace client ou une confirmation de commande.
- **IP blocking** (blocage d’adresses IP) écarte les visites venues des adresses IP que vous indiquez. Ajoutez celle de votre bureau pour que vos propres vérifications et retouches ne faussent pas les cartes de chaleur.

{{< screenshot id="microsoft-clarity-tutorial-05" alt="Réglages de masquage de Clarity avec les options Balanced et Strict" >}}

## Étape 6 : lire les signaux du tableau de bord (clics morts, clics de rage, retours rapides)

Le **Dashboard** résume votre trafic et signale les moments de frustration. Commencez par ces quatre signaux :

| Signal | Ce que Clarity détecte | Ce que cela veut souvent dire |
|---|---|---|
| Dead clicks (clics morts) | Des clics qui ne produisent aucun effet | Un élément a l’air cliquable mais ne l’est pas : une photo, un mot souligné, une carte |
| Rage clicks (clics de rage) | Plusieurs clics rapides au même endroit | Un bouton ou un formulaire qui ne marche pas ou répond lentement, souvent sur téléphone |
| Excessive scrolling (défilement excessif) | Des allers-retours de défilement plus nombreux que prévu | Le visiteur cherche quelque chose : un prix, un numéro de téléphone, un service |
| Quick backs (retours rapides) | Une arrivée sur une page suivie d’un retour immédiat à la précédente | La page ne correspond pas à ce que promettaient le lien ou le menu |

Lisez chaque signal page par page, pas en total. Vingt clics morts sur la photo d’une réalisation peuvent simplement vouloir dire que les gens veulent la voir en grand ; vingt clics de rage sur un bouton de devis, ce sont des demandes perdues. Notez les pages concernées, puis regardez leurs enregistrements à l’étape 8.

{{< screenshot id="microsoft-clarity-tutorial-06" alt="Tableau de bord de Clarity avec les chiffres des clics morts, clics de rage, défilements excessifs et retours rapides" >}}

## Étape 7 : lire les cartes de chaleur (heatmaps)

Ouvrez **Heatmaps** et choisissez une page, en commençant par celles qui amènent des demandes : accueil, pages de services, page contact. Vous avez trois vues :

- **Carte des clics** (click map) : où les gens cliquent ou touchent l’écran, y compris sur des éléments qui ne sont pas des liens.
- **Carte de défilement** (scroll map) : jusqu’où descendent les visiteurs. Si la plupart s’arrêtent avant votre offre ou votre numéro de téléphone, remontez-les.
- **Carte des zones** (area map) : les clics regroupés par zone, pratique pour comparer le menu à votre bouton principal.

Passez de l’ordinateur au mobile : une même page se comporte souvent autrement sur téléphone. Le tableau de bord indique quels appareils amènent le plus de visites : commencez par celui-là.

{{< screenshot id="microsoft-clarity-tutorial-07" alt="Carte des clics Clarity d’une page de services en affichage mobile" >}}

{{< screenshot id="microsoft-clarity-tutorial-08" alt="Carte de défilement Clarity montrant la part des visiteurs qui atteint chaque partie de la page" >}}

C’est là que je décide quoi corriger. Le schéma renvoie le plus souvent à l’une de ces trois causes :

| Ce que vous voyez | Cause probable | Ce qu’il faut essayer |
|---|---|---|
| La plupart des visiteurs arrêtent de défiler avant l’offre | Le texte : le premier écran ne dit pas ce que vous faites | Placer le service, la zone couverte et l’appel à l’action dans les premières lignes |
| Des clics sur une photo qui ne mène nulle part | L’image | La relier à la réalisation qu’elle montre, ou choisir une photo qui répond à une question |
| Des clics éparpillés dans le menu, peu sur le bouton principal | L’ergonomie | Une seule action principale par page, visible sans défiler |

**Un visiteur venu pour quelque chose de précis quitte une page qui ne le lui montre pas vite.** J’en ai tiré la leçon avec deux entreprises dirigées par le même client : le site qui proposait trop de services n’a jamais apporté de contacts, alors que celui construit autour de quelques services précis s’est classé et en a apporté.

## Étape 8 : regarder les enregistrements avec une question en tête

Les enregistrements rejouent de vraies visites : mouvements de souris ou de doigt, défilement et clics, avec les contenus sensibles masqués. On s’y perd vite, alors choisissez une question avant d’appuyer sur lecture, par exemple « pourquoi les gens quittent-ils la page contact ? ».

1. Ouvrez **Recordings** et utilisez les filtres pour réduire la liste : une page, un appareil, un canal, ou les sessions avec des clics de rage ou des retours rapides.
2. Regardez une dizaine d’enregistrements de la même situation, en accéléré. Un visiteur ne prouve rien ; la même hésitation dans six enregistrements, c’est une tendance.
3. Notez chaque tendance à côté de la page concernée, puis changez une seule chose à la fois, pour savoir ce qui a fait la différence.

{{< screenshot id="microsoft-clarity-tutorial-09" alt="Liste des enregistrements Clarity filtrée sur les sessions avec clics de rage, avec le lecteur ouvert" >}}

## Étape 9 : repérer les visites venues des assistants IA

Depuis le 29 août 2025, Clarity regroupe les visites venues d’assistants IA comme ChatGPT, Claude, Copilot, Gemini et Perplexity dans un canal à part, **AIPlatform**, avec **PaidAIPlatform** pour le trafic payant qui en provient. Filtrez le tableau de bord ou les enregistrements sur ce canal pour voir quelles pages ces visiteurs lisent et s’ils atteignent votre page contact.

Sur le site d’une petite entreprise, les chiffres peuvent être modestes, mais ces personnes arrivent après qu’un assistant vous a cité : quelques minutes sur leurs enregistrements sont bien employées. Pour suivre ce même trafic dans Google Analytics et la Search Console, voyez comment {{< a key="track-ai-traffic" >}}mesurer le trafic IA dans Google Analytics{{< /a >}}.

{{< screenshot id="microsoft-clarity-tutorial-10" alt="Tableau de bord de Clarity filtré sur le canal AIPlatform" >}}

## Utiliser Microsoft Clarity chaque mois

Une fois Clarity installé et relié à votre bandeau, une vingtaine de minutes par mois suffit :

1. **Parcourez le tableau de bord** à la recherche d’une hausse des clics de rage, des clics morts ou des retours rapides, et notez les pages concernées.
2. **Ouvrez les cartes de chaleur** de vos trois pages les plus importantes, sur l’appareil qu’utilisent la plupart de vos visiteurs.
3. **Regardez dix enregistrements** filtrés sur une seule question.
4. **Corrigez une chose**, une phrase, une image ou un bouton, et notez la date.
5. **Comparez avec vos demandes.** Je compte les contacts en formulaires et en appels ; le rôle de Clarity est d’expliquer pourquoi il n’y en a pas davantage.
6. **Vérifiez le signal de consentement** à chaque changement de bandeau cookies, de thème ou de plateforme.

Quand passer la main : si les enregistrements montrent un formulaire cassé ou une page qui ne fonctionne pas sur téléphone, envoyez-les à la personne qui maintient le site, car un enregistrement vaut mieux qu’un « ça ne marche pas ». S’ils montrent que les visiteurs ne comprennent pas ce que vous vendez, le problème vient du texte et de la structure : mon guide pour {{< a key="website-conversion-rate" >}}améliorer le taux de conversion de votre site{{< /a >}} passe en revue les causes habituelles, et reconstruire des pages autour de ce que cherchent les visiteurs fait partie de mon offre de {{< a page="/services/websites" >}}création de site internet{{< /a >}}.
