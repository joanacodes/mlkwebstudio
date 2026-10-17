---
title: "Tuto Google Search Console : ajouter votre site et lire vos données"
seo_title: "Tuto Google Search Console : guide pas à pas pour débutants"
description: "Tuto Google Search Console pas à pas : validez votre site, envoyez le sitemap, lisez les rapports de performances et d’indexation, puis les rapports IA."
slug: "tuto-google-search-console"
translationKey: "google-search-console-tutorial"
date: 2026-10-17T08:01:00+02:00
lastmod: 2026-10-17T08:01:00+02:00
category: "seo"
article_type: "tutorial"
keywords: ["tuto Google Search Console", "comment utiliser Google Search Console", "ajouter un site à la Search Console", "rapport Performances Search Console", "indexation Search Console", "Bing Webmaster Tools"]
summary: "Pour utiliser Google Search Console, ajoutez votre site en propriété Domaine, validez-la avec un enregistrement TXT dans votre DNS, envoyez votre sitemap et inspectez vos pages clés. Lisez ensuite chaque mois les rapports Performances (clics, impressions, CTR, position) et Pages (ce que Google a écarté, et pourquoi). Depuis le 31 août 2026, des rapports sur l’IA générative montrent aussi vos impressions dans les Aperçus IA et le Mode IA, sans les clics."
cover: "google-search-console-tutorial"
cover_alt: "Rapport Performances de Google Search Console ouvert dans un navigateur"
related: ["get-website-indexed-google", "on-page-seo-checklist", "track-ai-traffic", "google-ai-overviews-ai-mode", "how-long-does-seo-take"]
services: ["seo"]
faq:
  - q: "Google Search Console est-elle gratuite ?"
    a: "Oui. La Search Console est gratuite pour tous les sites et n’a pas de version payante. Il faut un compte Google et prouver que vous contrôlez le site, le plus souvent avec un enregistrement DNS ou une balise HTML."
  - q: "Quelle différence entre Google Search Console et Google Analytics ?"
    a: "La Search Console montre ce qui se passe sur Google avant le clic : recherches, impressions, clics et indexation. Google Analytics montre ce que font les visiteurs une fois sur votre site. Les deux outils se relient depuis l’administration de Google Analytics."
  - q: "La Search Console donne-t-elle ma position sur un mot-clé ?"
    a: "Elle donne une position moyenne pour chaque requête où votre site est apparu, sur la période choisie. Ce n’est pas un relevé en direct : la position varie selon le lieu, l’appareil et l’historique de la personne. Lisez-la comme une tendance."
  - q: "Comment donner accès à la Search Console à mon webdesigner ?"
    a: "Ouvrez Paramètres, puis Utilisateurs et autorisations, cliquez sur Ajouter un utilisateur et saisissez son compte Google avec un accès total ou restreint. Restez propriétaire et ne partagez jamais votre mot de passe Google."
  - q: "Combien de temps avant d’avoir des données pour un nouveau site ?"
    a: "Les rapports se remplissent dans les jours qui suivent la validation, mais un site neuf n’a de données de performances qu’une fois ses pages affichées dans les résultats, ce qui peut prendre des jours ou des semaines. L’inspection de l’URL fonctionne tout de suite."
---

Google Search Console est l’outil gratuit de Google pour les propriétaires de sites. Il montre les recherches qui font apparaître vos pages, le nombre de clics, les pages que Google a indexées et ce qui bloque les autres. Ce tuto Google Search Console reprend l’ordre que je suivrais sur un site neuf : l’ajouter, le valider, envoyer le sitemap, puis lire les rapports qui comptent.

Prévoyez une vingtaine de minutes et un accès au DNS de votre domaine. Les intitulés sont ceux de l’interface en français à la date de rédaction (octobre 2026).

Les dernières étapes couvrent les rapports IA de cette année et Bing Webmaster Tools. Ce tutoriel complète mon {{< a key="small-business-seo-guide" >}}guide du référencement naturel{{< /a >}}.

## Tuto Google Search Console : ce que l’outil montre (et ce qu’il ne montre pas)

La Search Console décrit votre site tel que Google le voit. À chaque question son rapport :

| Votre question | Où regarder |
|---|---|
| Quelles recherches affichent mon site, et clique-t-on ? | **Performances** > **Résultats de recherche** |
| Cette page est-elle sur Google ? | **Inspection de l’URL**, la barre de recherche en haut |
| Quelles pages sont écartées, et pourquoi ? | **Indexation** > **Pages** |
| Google a-t-il lu mon sitemap ? | **Indexation** > **Sitemaps** |
| Mon site apparaît-il dans les Aperçus IA et le Mode IA ? | Les rapports sur l’IA générative, avec les rapports **Performances** |
| Mon site est-il piraté ou pénalisé ? | **Sécurité et actions manuelles** |
| Mon site est-il assez rapide ? | **Expérience** > **Signaux Web essentiels** |

Ce qu’elle ne montre pas, c’est ce que font les visiteurs une fois arrivés. Pour cela, j’utilise Microsoft Clarity : il montre où les gens s’attardent, s’ils viennent pour quelque chose de précis et quelles zones d’une page les font fuir, ce qui me permet de savoir si le problème vient du texte, d’une image ou de l’ergonomie. Mon {{< a key="microsoft-clarity-tutorial" >}}tutoriel Microsoft Clarity{{< /a >}} détaille l’installation.

## Étape 1 : ajouter votre site en propriété Domaine

Une propriété, c’est le site (ou la partie du site) que la Search Console analyse. Il en existe deux types :

| | Propriété Domaine | Propriété Préfixe de l’URL |
|---|---|---|
| Couvre | Tout le domaine : chaque sous-domaine (www, boutique, blog), en http comme en https | Seulement les adresses qui commencent par le préfixe exact, comme `https://www.votreentreprise.fr/` |
| Validation | Un enregistrement DNS, rien d’autre | Fichier HTML, balise HTML, Google Analytics, Google Tag Manager ou enregistrement DNS |
| À choisir quand | Vous pouvez modifier le DNS du domaine | Vous n’avez pas accès au DNS, ou vous ne gérez qu’une partie d’un site |

**Choisissez la propriété Domaine si vous le pouvez.** Elle couvre toutes les versions de votre adresse, y compris l’ancienne en http et la version avec ou sans www que vous aviez oubliée.

1. Allez sur `search.google.com/search-console` et connectez-vous avec le compte Google que l’entreprise gardera : pas celui d’un prestataire, ni une adresse personnelle que vous risquez de perdre.
2. À la première visite, l’écran d’accueil propose directement les deux types de propriété. Sinon, ouvrez le menu des propriétés en haut à gauche et cliquez sur **Ajouter une propriété**.
3. Dans le bloc **Domaine**, saisissez le domaine seul (`votreentreprise.fr`, sans `https://` ni `www`) et cliquez sur **Continuer**.

{{< screenshot id="google-search-console-tutorial-01" alt="Fenêtre Ajouter une propriété de la Search Console avec ses deux choix, Domaine et Préfixe de l’URL" >}}

## Étape 2 : valider le domaine avec un enregistrement TXT

La Search Console affiche alors un enregistrement TXT : une ligne de texte à ajouter dans le DNS de votre domaine pour prouver que vous le contrôlez. Elle commence par `google-site-verification=`, suivi d’un code qui vous est propre. Copiez-la avec le bouton **Copier**.

Dans un autre onglet, ouvrez la zone DNS chez le prestataire qui gère votre domaine (OVHcloud, Ionos, Gandi, o2switch, Infomaniak, Spaceship…) et ajoutez cet enregistrement :

```
Type     TXT
Hôte     @    (la racine du domaine ; chez OVHcloud, laissez le sous-domaine vide)
Valeur   google-site-verification=AbC123xYz...   (votre propre code)
TTL      par défaut
```

Enregistrez, revenez dans la Search Console et cliquez sur **Valider**. Si elle ne trouve pas encore l’enregistrement, rien n’est cassé : une modification DNS peut mettre quelques heures, parfois une journée, à se propager. Réessayez plus tard.

Ajoutez cet enregistrement à côté de vos TXT existants, sans les remplacer : le SPF, celui qui commence par `v=spf1`, fait fonctionner vos emails. Inutile aussi d’ajouter un point final : le point qui piège tant de monde chez OVH concerne les cibles CNAME, pas une valeur TXT. Mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} détaille chaque type avec des exemples.

{{< callout type="warning" >}}**Gardez l’enregistrement TXT après la validation.** Google le vérifie périodiquement : le supprimer vous fait perdre la validation.{{< /callout >}}

Relier le domaine, c’est la dernière chose que je fais avant la mise en ligne d’un site. Si vous en êtes là, l’interface DNS est déjà ouverte : ajoutez l’enregistrement de la Search Console dans la foulée.

{{< screenshot id="google-search-console-tutorial-02" alt="Fenêtre de validation du domaine dans la Search Console, avec l’enregistrement TXT qui commence par google-site-verification= et le bouton Copier" >}}

## Étape 3 : envoyer votre sitemap

Le sitemap est un fichier qui liste les pages que vous voulez faire connaître aux moteurs de recherche. La plupart des plateformes le créent pour vous : Squarespace, Wix et Shopify le publient à `/sitemap.xml`, WordPress à `/wp-sitemap.xml` (ou `/sitemap_index.xml` avec Yoast SEO). Ouvrez d’abord cette adresse dans votre navigateur : si une liste de liens s’affiche, il fonctionne.

1. Dans le menu de gauche, ouvrez **Indexation** > **Sitemaps**.
2. Sous **Ajouter un sitemap**, saisissez la fin de l’adresse après votre domaine, par exemple `sitemap.xml`, et cliquez sur **Envoyer**.
3. Vérifiez l’état dans la liste des sitemaps envoyés. S’il indique une réussite, Google l’a lu. **Impossible de récupérer** est courant sur un site tout neuf : vérifiez que l’adresse s’ouvre dans votre navigateur, puis laissez passer un jour ou deux.

Un sitemap s’envoie une fois : Google revient le lire de lui-même, inutile de le renvoyer à chaque nouvelle page. Si votre site n’apparaît toujours pas sur Google, mon tutoriel pour {{< a key="get-website-indexed-google" >}}référencer son site sur Google{{< /a >}} passe en revue les blocages habituels un par un.

{{< screenshot id="google-search-console-tutorial-03" alt="Rapport Sitemaps avec le champ Ajouter un sitemap et un sitemap.xml envoyé, à l’état réussi" >}}

## Étape 4 : inspecter une page et demander son indexation

L’inspection de l’URL vous dit si une page est sur Google, et pourquoi. Collez l’adresse complète d’une page dans la barre de recherche en haut de la Search Console et appuyez sur Entrée.

Le résultat s’ouvre sur un verdict, **L’URL est sur Google** ou **L’URL n’est pas sur Google**, suivi de la raison. Le détail indique comment Google a trouvé la page (votre sitemap, un lien), la date de sa dernière exploration et l’adresse qu’il retient comme version principale, appelée URL canonique. Deux boutons comptent :

- **Tester l’URL en ligne** vérifie la page telle qu’elle est maintenant, utile juste après une correction.
- **Demander une indexation** invite Google à explorer la page rapidement. Gardez-le pour une nouvelle page importante ou une page très modifiée : le sitemap s’occupe du reste, la Search Console limite le nombre de demandes par jour et demander deux fois n’accélère rien.

Une demande n’est pas une garantie : Google décide toujours si la page mérite une place dans son index.

{{< screenshot id="google-search-console-tutorial-04" alt="Résultat de l’inspection d’une URL indiquant L’URL est sur Google, avec les boutons Tester l’URL en ligne et Demander une indexation" >}}

## Étape 5 : lire le rapport Performances

Ouvrez **Performances** > **Résultats de recherche**. Quatre totaux s’affichent au-dessus du graphique ; cliquez sur l’un d’eux pour faire apparaître ou disparaître sa courbe :

- **Nombre total de clics** : les visites venues de la recherche Google.
- **Nombre total d’impressions** : le nombre de fois où l’une de vos pages est apparue dans les résultats affichés à quelqu’un.
- **CTR moyen** : les clics divisés par les impressions.
- **Position moyenne** : la place moyenne de votre meilleur résultat, 1 étant la première.

La période par défaut couvre les trois derniers mois. Le filtre **Date** remonte jusqu’à 16 mois, et son onglet **Comparer** oppose deux périodes, par exemple ce mois-ci et le même mois l’an dernier. Sous le graphique, les onglets détaillent les totaux par **Requêtes** (ce que les gens ont tapé), **Pages**, **Pays**, **Appareils**, **Apparence dans les résultats de recherche** et **Dates**. Cliquez sur une requête ou une page pour filtrer tout le rapport dessus.

Trois lectures valent le temps passé :

1. **Beaucoup d’impressions, peu de clics.** Triez les requêtes par impressions. Une requête qui affiche souvent votre page sans presque jamais amener de clic trahit en général un titre ou une description qui ne répond pas à la recherche : ma {{< a key="on-page-seo-checklist" >}}checklist SEO on-page{{< /a >}} montre comment les réécrire.
2. **Positions 8 à 20.** Ces pages sont à la frontière de la première page : les améliorer rapporte souvent plus vite qu’écrire un nouveau contenu.
3. **Une page à la fois.** Cliquez sur une page dans l’onglet **Pages**, puis ouvrez **Requêtes** : vous voyez sur quoi elle se positionne, ce qui n’est pas toujours ce pour quoi vous l’avez écrite.

Depuis le 17 novembre 2025, vous pouvez aussi ajouter au graphique des annotations de 120 caractères au plus, visibles par tous ceux qui ont accès à la propriété. Ajoutez-en une quand vous publiez une page, réécrivez des titres ou changez de plateforme : trois mois plus tard, vous saurez pourquoi la courbe a bougé.

{{< callout type="note" >}}Ne jugez pas un site neuf sur ses premières semaines : Google lui-même indique que le SEO prend en général de quatre mois à un an. Pilotech a fait exception, avec un positionnement obtenu un ou deux jours après la mise en ligne et un premier prospect trois semaines après la publication.{{< /callout >}}

{{< screenshot id="google-search-console-tutorial-05" alt="Rapport Performances des résultats de recherche avec les quatre totaux affichés sur le graphique et l’onglet Requêtes en dessous" >}}

### Séparer les recherches de marque des autres

Les recherches qui contiennent le nom de votre entreprise viennent de gens qui vous connaissent déjà. Les autres, ce sont celles qu’apporte le SEO. Depuis le 20 novembre 2025, la Search Console sait les distinguer : le filtre des requêtes de marque, étendu à tous les sites éligibles en mars 2026, sépare chaque indicateur entre les recherches de marque et le reste. Google classe lui-même les requêtes, sans que vous puissiez ajouter vos termes de marque, et décide des propriétés éligibles : le filtre peut manquer sur la vôtre.

**Les clics hors marque sont le chiffre à suivre de mois en mois** : ce sont de nouvelles personnes qui vous trouvent.

{{< screenshot id="google-search-console-tutorial-06" alt="Rapport Performances filtré sur les requêtes hors marque, avec le filtre des requêtes de marque dans la barre des filtres" >}}

## Étape 6 : corriger ce qui compte dans le rapport d’indexation des pages

Ouvrez **Indexation** > **Pages**. Le graphique sépare les pages connues de Google entre indexées et non indexées, et le tableau en dessous donne les raisons de la non-indexation.

Une longue liste de pages non indexées est normale. **Page avec redirection**, **Autre page avec balise canonique correcte** et **Introuvable (404)** pour des pages supprimées n’ont rien d’inquiétant. Ce qui demande votre attention, c’est une page que vous voulez sur Google avec l’une de ces raisons :

| Raison | Ce que cela signifie | Que faire |
|---|---|---|
| Exclue par la balise « noindex » | La page demande à ne pas être indexée | Retirez le noindex : dans un créateur de site, cherchez le réglage qui masque la page aux moteurs de recherche |
| Bloquée par le fichier robots.txt | Votre fichier robots.txt interdit l’exploration | Supprimez la règle qui la bloque |
| Erreur serveur (5xx) | Votre serveur a échoué quand Google est passé | Interrogez votre hébergeur si cela se répète |
| Soft 404 | La page paraît vide ou ressemble à une page d’erreur | Ajoutez un vrai contenu, ou renvoyez une vraie 404 |
| Explorée, actuellement non indexée | Google a lu la page et l’a écartée | Rendez-la plus utile et plus distincte, et faites des liens vers elle |
| Détectée, actuellement non indexée | Google connaît l’adresse sans l’avoir explorée | Liez-la depuis vos pages principales, puis patientez |

Une fois la correction en ligne, ouvrez la raison et cliquez sur **Valider la correction**. Google revérifie les pages concernées dans les jours ou les semaines qui suivent et affiche le résultat au même endroit.

Gardez le sens des priorités. Dans le travail SEO que j’ai fait pour Pilotech, les corrections techniques sont venues en quatrième, après la création des pages, le contenu et la fiche d’établissement Google. Un rapport d’indexation impeccable ne fait pas remonter une page sans substance.

{{< screenshot id="google-search-console-tutorial-07" alt="Rapport d’indexation des pages avec le graphique des pages indexées et non indexées et le tableau des raisons" >}}

## Étape 7 : vérifier votre visibilité dans les Aperçus IA et le Mode IA

### Les rapports sur l’IA générative

Google a annoncé le 3 juin 2026 des [rapports sur l’IA générative dans la Search Console](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) (en anglais), et tous les sites y ont accès depuis le 31 août 2026. Ils se trouvent avec les autres rapports **Performances** : l’un pour la recherche, qui couvre les Aperçus IA (AI Overviews) et le Mode IA (AI Mode), l’autre pour Discover. Lisez-les en connaissant leurs limites :

- Ils ne comptent **que des impressions**, par page, pays, appareil et date : ni clics, ni CTR, ni position, ni requêtes.
- Ces impressions figurent déjà dans le type de recherche **Web** du rapport principal : n’additionnez pas les deux. Les clics venus du Mode IA, eux, sont comptés dans Web depuis juin 2025.

En France, les Aperçus IA et le Mode IA ne sont arrivés que le 22 juillet 2026 : les recherches faites depuis la France n’alimentent ces rapports que depuis cette date.

Leur intérêt : voir lesquelles de vos pages les fonctionnalités IA de Google affichent, et à quelle fréquence. Pour faire partie des sources citées, lisez {{< a key="google-ai-overviews-ai-mode" >}}comment faire citer votre site dans les Aperçus IA et le Mode IA{{< /a >}} ; pour mesurer les visites envoyées par les assistants IA, voyez {{< a key="track-ai-traffic" >}}comment suivre le trafic IA dans Google Analytics{{< /a >}}.

{{< screenshot id="google-search-console-tutorial-08" alt="Rapport sur l’IA générative pour la recherche, avec les impressions dans les Aperçus IA et le Mode IA par page" >}}

### Le réglage « IA générative dans la Recherche »

Dans **Paramètres**, la section **IA générative dans la Recherche** décide si votre contenu peut apparaître dans les Aperçus IA, le Mode IA et les résumés de Discover. Tous les sites sont inclus par défaut. Testé auprès de sites britanniques dès juin 2026, ce réglage arrive dans d’autres pays depuis août et peut encore manquer sur votre propriété. Une exclusion met quelques jours à s’appliquer, et Google précise que ce n’est pas un critère de classement : vos résultats classiques ne bougent pas. L’application Gemini et l’entraînement des modèles de Google relèvent d’un autre réglage, le jeton Google-Extended de votre fichier robots.txt ([page d’aide de Google sur ce réglage](https://support.google.com/webmasters/answer/16908024?hl=fr)).

Pour la plupart des petites entreprises, le réglage par défaut est le bon : une réponse IA qui vous cite met votre nom sous les yeux de gens qui comparent des solutions. L’exclusion se justifie surtout pour les éditeurs dont les articles sont le produit.

{{< screenshot id="google-search-console-tutorial-09" alt="Page Paramètres de la Search Console avec la section IA générative dans la Recherche, site inclus" >}}

## Ajouter votre site à Bing Webmaster Tools

Bing Webmaster Tools est l’équivalent de la Search Console chez Microsoft. Bing pesait environ 5,5 % des recherches en France en septembre 2026 ([Statcounter](https://gs.statcounter.com/search-engine-market-share/all/france)), et Microsoft Copilot lance des recherches Bing pour construire ses réponses. Une fois Google réglé, Bing prend quelques minutes :

1. Allez sur `bing.com/webmasters` et connectez-vous.
2. Choisissez l’import de vos sites depuis Google Search Console et autorisez l’accès. Bing reprend vos sites validés et leurs sitemaps, sans nouvelle validation.
3. Vérifiez les sitemaps dans Bing et envoyez le vôtre s’il manque.

Deux fonctions méritent d’être connues :

- **IndexNow** prévient les moteurs de recherche dès qu’une page est ajoutée, modifiée ou supprimée. Bing, Yandex, Seznam, Naver et Yep l’utilisent ; Google, non ([FAQ IndexNow](https://www.indexnow.org/faq), en anglais). Certaines plateformes et extensions SEO envoient ces notifications pour vous.
- **AI Performance**, en préversion publique depuis février 2026, compte combien de fois Copilot et les résumés IA de Bing citent vos pages et liste les requêtes d’ancrage (grounding queries), c’est-à-dire les recherches que l’IA a lancées avant de répondre. Comme le rapport de Google, il ne donne pas de clics, et ses données sont échantillonnées.

{{< screenshot id="google-search-console-tutorial-10" alt="Écran d’ajout de site de Bing Webmaster Tools avec l’option d’import depuis Google Search Console" >}}

{{< screenshot id="google-search-console-tutorial-11" alt="Rapport AI Performance de Bing Webmaster Tools avec les citations dans le temps et les requêtes d’ancrage" >}}

## Utiliser Google Search Console chaque mois : la routine de 15 minutes

Une fois en place, la Search Console demande environ un quart d’heure par mois :

1. **Lisez les emails** que la Search Console envoie quand elle détecte un nouveau problème, puis jetez un œil à la **Vue d’ensemble**.
2. **Comparez les périodes** dans **Performances** : les 28 derniers jours face aux 28 précédents, puis face à la même période l’an dernier. Les clics hors marque donnent votre tendance SEO.
3. **Réécrivez un titre** : prenez une requête avec beaucoup d’impressions et peu de clics, et retravaillez le titre et la description de la page qui s’affiche.
4. **Parcourez le rapport Pages** à la recherche d’une nouvelle raison de non-indexation sur une page qui compte.
5. **Ouvrez le rapport sur l’IA générative** et notez les pages qui y apparaissent.
6. **Vérifiez Sécurité et actions manuelles** : les deux rapports ne doivent signaler aucun problème.
7. **Ajoutez une annotation** au graphique pour chaque changement du mois.

Quand passer la main : si des pages dont vous avez besoin restent hors de l’index après correction des causes évidentes, ou si les clics chutent sans raison visible, un regard extérieur fait gagner du temps. Ce travail technique fait partie de mon {{< a page="/services/seo" >}}accompagnement SEO{{< /a >}}. Si le rapport Problèmes de sécurité signale votre site, traitez-le comme un piratage et agissez le jour même.
