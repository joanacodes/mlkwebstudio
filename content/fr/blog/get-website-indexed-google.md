---
title: "Référencer son site sur Google : faire indexer un nouveau site pas à pas"
seo_title: "Référencer son site sur Google : l’indexation pas à pas"
description: "Référencer son site sur Google pas à pas : vérifier s’il est indexé, le rendre public, envoyer le sitemap, demander l’indexation et lever les blocages."
slug: "referencer-site-google"
translationKey: "get-website-indexed-google"
date: 2026-10-17T08:10:00+02:00
lastmod: 2026-10-17T08:10:00+02:00
category: "seo"
article_type: "tutorial"
keywords: ["référencer son site sur Google", "indexer son site sur Google", "site non indexé sur Google", "soumettre son site à Google", "demander une indexation Google", "site invisible sur Google"]
summary: "Google trouve seul la plupart des nouveaux sites, mais vous pouvez accélérer l’indexation et vérifier que rien ne la bloque. Faites une recherche site: et passez vos pages à l’inspection de l’URL de la Search Console, rendez le site public sur son domaine, envoyez le sitemap et demandez l’indexation de vos pages clés. Si une page manque encore après quelques semaines, cherchez une balise noindex, un blocage robots.txt, un mot de passe ou un domaine mal relié."
cover: "get-website-indexed-google"
cover_alt: "Googlebot suit un lien depuis un nouveau site jusqu’à l’index de Google"
related: ["google-search-console-tutorial", "how-long-does-seo-take", "squarespace-seo", "robots-txt-ai-crawlers", "dns-records-explained"]
services: ["seo"]
faq:
  - q: "Faut-il payer pour apparaître sur Google ?"
    a: "Non. Google indexe les sites gratuitement et n’accepte aucun paiement pour explorer un site plus souvent ou le classer plus haut. La Search Console est gratuite elle aussi. Google Ads achète des emplacements publicitaires au-dessus des résultats, pas une place dans les résultats naturels."
  - q: "Combien de temps met Google pour indexer un nouveau site ?"
    a: "En général quelques jours, parfois quelques semaines : c’est la fourchette que Google donne pour l’exploration. Bien se positionner prend ensuite beaucoup plus longtemps, souvent des mois."
  - q: "Peut-on référencer son site sans la Search Console ?"
    a: "Oui. Google trouve les sites par les liens et les sitemaps, sans aucun compte. La Search Console permet de voir ce que Google voit, d’envoyer le sitemap et de demander une exploration : elle vaut largement les dix minutes de son installation."
  - q: "Faut-il laisser Google indexer un site en construction ?"
    a: "Non. Gardez-le privé ou protégé par mot de passe jusqu’à ce qu’il soit prêt, puis rendez-le public, reliez le domaine et envoyez le sitemap le jour du lancement. Des pages inachevées qui ont été indexées peuvent rester un moment dans les résultats."
  - q: "Comment retirer une page de Google ?"
    a: "Ajoutez-lui une balise noindex, ou supprimez-la pour qu’elle renvoie une erreur 404, et laissez Google l’explorer à nouveau. Ne la bloquez pas dans le robots.txt : Google ne verrait jamais le noindex. En urgence, l’outil de suppression de la Search Console la masque temporairement."
  - q: "Mon site doit-il aussi être sur Bing ?"
    a: "Cela vaut cinq minutes. Bing a son propre index et pèse environ 5,5 % des recherches en France (Statcounter, septembre 2026), et Microsoft Copilot construit ses réponses à partir de recherches Bing. Bing Webmaster Tools peut importer votre site et votre sitemap depuis la Search Console, sans nouvelle validation."
---

Google trouve seul la plupart des nouveaux sites, mais « seul » peut vouloir dire des semaines, et un réglage oublié peut vouloir dire jamais. Ce tutoriel explique comment référencer son site sur Google pas à pas : vérifier s’il est déjà indexé, lever ce qui le cache, l’ajouter à la Search Console, envoyer le sitemap et demander à Google d’explorer vos pages clés. Il passe ensuite en revue les raisons habituelles d’un site invisible.

Inutile de payer qui que ce soit pour cela. Avec un accès à votre créateur de site et à la zone DNS de votre domaine, un après-midi suffit le plus souvent. Les menus cités sont ceux des interfaces à la date de rédaction (octobre 2026).

Au sens courant, référencer son site se fait en deux temps : l’indexation (Google enregistre vos pages), puis le positionnement (Google les classe). Ce tutoriel couvre le premier temps ; le second fait l’objet de mon {{< a key="small-business-seo-guide" >}}guide du référencement naturel{{< /a >}}.

## Comment Google trouve un nouveau site

Trois mots reviennent dans toutes les explications sur Google. Les voici en une phrase chacun :

- **Exploration** (crawl) : Googlebot, le robot de Google, visite une page et la lit.
- **Indexation** : Google enregistre la page dans son index, la base dans laquelle il puise ses résultats.
- **Positionnement** (ou classement) : pour chaque recherche, Google choisit quelles pages indexées afficher, et dans quel ordre.

Google découvre les pages surtout en suivant les liens des pages qu’il connaît déjà, et en lisant les sitemaps que les propriétaires de sites lui envoient. La plupart des pages de ses résultats n’ont jamais été soumises par personne : ses robots les ont trouvées. Un site tout neuf part avec un handicap, car aucun autre site ne pointe encore vers lui : Google n’a aucun chemin pour y arriver. Les étapes ci-dessous lui en donnent un, et vérifient que rien ne refoule Googlebot à son arrivée.

{{< callout type="warning" >}}**Méfiez-vous des offres de « soumission à Google ».** Les conseils de Google sur le recours à un spécialiste du SEO mettent en garde contre quiconque promet une « soumission prioritaire ». Tout ce qui suit est gratuit.{{< /callout >}}

## Étape 1 : vérifier si votre site est déjà sur Google

Commencez par une recherche qui liste les pages que Google connaît sur votre domaine. Tapez ceci dans Google, avec votre propre domaine et sans espace après les deux-points :

```
site:votreentreprise.fr
```

Si des résultats s’affichent, votre site est dans l’index, et la question devient : quelles pages manquent ? Si rien ne s’affiche, Google ne l’a pas encore indexé. Prenez le nombre de résultats comme une indication, pas comme un décompte exact.

Chercher le nom de votre entreprise n’est pas un test fiable. Un site neuf peut être indexé sans apparaître sur son propre nom, surtout si ce nom est un mot courant.

{{< screenshot id="get-website-indexed-google-01" alt="Résultats Google d’une recherche site: sur un nouveau domaine, avec la liste des pages indexées" >}}

Pour une réponse sûre page par page, utilisez l’**Inspection de l’URL** dans Google Search Console : collez l’adresse complète de la page dans la barre en haut et appuyez sur Entrée. Le verdict indique **L’URL est sur Google** ou **L’URL n’est pas sur Google**, suivi de la raison, par exemple une adresse que Google ne connaît pas encore. Si vous n’utilisez pas encore la Search Console, l’étape 3 l’installe ; revenez à ce contrôle ensuite.

{{< screenshot id="get-website-indexed-google-02" alt="Résultat de l’inspection d’une URL dans la Search Console avec le verdict L’URL n’est pas sur Google" >}}

## Étape 2 : rendre le site public et le relier à son domaine

Sur un site tout neuf, la raison habituelle de l’invisibilité n’a rien à voir avec le SEO : le site est encore caché au public, ou le domaine ne pointe pas encore vers lui. Les créateurs de sites gardent les nouveaux sites privés pendant leur construction, ce qui est logique, et l’interrupteur s’oublie facilement le jour du lancement.

| Plateforme | Ce qui cache un site neuf | Où le régler |
|---|---|---|
| Squarespace | Tout site démarre en privé, et seuls les sites payants peuvent devenir publics | Dans les paramètres, la disponibilité du site : choisissez **Public** |
| Wix | Un interrupteur d’indexation pour tout le site, plus un par page | Les **paramètres SEO** : activez l’option qui autorise les moteurs de recherche à indexer le site |
| WordPress | Une case, souvent cochée pendant la construction, qui demande aux moteurs de ne pas indexer le site | **Réglages** > **Lecture** : décochez la case de visibilité pour les moteurs de recherche |
| Shopify | La page de mot de passe de toute nouvelle boutique | **Boutique en ligne** > **Préférences**, rubrique de protection par mot de passe |
| Site codé sur mesure | Une balise `noindex` ou une règle `Disallow: /` restée de la version de test | Le code source des pages et votre fichier `robots.txt` |

Deux détails piègent souvent. Chez Squarespace, un site en période d’essai ne peut pas être public, et son sitemap ne s’affiche qu’une fois le site public ([aide Squarespace sur la publication d’un site](https://support.squarespace.com/hc/en-us/articles/360002088548-Publish-or-hide-your-site), en anglais). Chez Wix, chaque page a aussi son propre interrupteur d’indexation dans ses réglages SEO, et le désactiver ajoute une balise noindex à la page. Shopify, enfin, peut vous demander de choisir un forfait avant de retirer le mot de passe.

{{< screenshot id="get-website-indexed-google-03" alt="Panneau de disponibilité du site Squarespace avec l’option Public sélectionnée" >}}

{{< screenshot id="get-website-indexed-google-04" alt="Écran Réglages > Lecture de WordPress avec la case de visibilité pour les moteurs de recherche décochée" >}}

### Relier le domaine, puis tester les deux adresses

Relier le domaine, c’est la dernière étape de chaque site que je crée. Une fois le design et les textes validés par le client, je m’occupe des titres et des descriptions des pages, je prépare quelques articles à l’avance, puis je relie le domaine et je publie. Avant cette étape, il n’y a rien à votre adresse que Google puisse trouver.

Une fois les enregistrements DNS en place, tapez votre adresse avec et sans www : les deux doivent ouvrir le site en https, l’une redirigeant vers l’autre. Si l’une échoue, vérifiez les enregistrements chez le prestataire qui gère votre domaine (OVHcloud, Ionos, Gandi, o2switch, Infomaniak…). Le seul vrai piège que j’ai rencontré en reliant des domaines tenait en un caractère : chez OVH, une cible CNAME comme `ext-cust.squarespace.com.` doit garder son point final, sinon l’adresse en www ne s’ouvre jamais. Mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} explique pourquoi.

### Site codé sur mesure : chercher les restes de la version de test

Un site créé par un développeur, ou avec l’IA et hébergé sur GitHub Pages ou ailleurs, n’a pas d’interrupteur. Ce qui le cache est en général une ligne restée de la version de test. Ouvrez `votreentreprise.fr/robots.txt` dans votre navigateur. Ces deux lignes interdisent tout le site à tous les robots :

```
User-agent: *
Disallow: /
```

Un site de petite entreprise a besoin de l’inverse : une ligne `Disallow` vide et l’adresse de votre sitemap.

```
User-agent: *
Disallow:

Sitemap: https://www.votreentreprise.fr/sitemap.xml
```

Ouvrez ensuite votre page d’accueil, faites un clic droit, choisissez d’afficher le code source de la page et cherchez `noindex`. Cette balise demande aux moteurs de laisser la page de côté :

```
<meta name="robots" content="noindex">
```

## Étape 3 : ajouter le site à Google Search Console

La Search Console est l’outil gratuit de Google pour les propriétaires de sites, et le seul endroit où vous voyez votre site comme Google le voit. Les deux étapes suivantes en ont besoin.

1. Connectez-vous sur `search.google.com/search-console` avec un compte Google qui appartient à l’entreprise, pas à la personne qui construit le site.
2. Ajoutez une propriété **Domaine** et saisissez votre domaine seul, sans `https://` ni `www`.
3. Copiez l’enregistrement TXT affiché, ajoutez-le dans la zone DNS de votre domaine, puis cliquez sur **Valider**. Gardez l’enregistrement ensuite : le supprimer annule la validation.

Si vous venez de relier le domaine, ajoutez l’enregistrement tant que la zone DNS est ouverte. Mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}} montre chaque écran, ce qu’il faut faire si la validation échoue et comment lire les rapports une fois les données arrivées.

## Étape 4 : envoyer votre sitemap

Le sitemap est un fichier qui liste les pages que vous voulez faire connaître à Google. Vous aurez rarement à le créer : Squarespace, Wix et Shopify le publient à `/sitemap.xml`, WordPress à `/wp-sitemap.xml`, ou `/sitemap_index.xml` avec Yoast SEO. Ouvrez d’abord cette adresse dans votre navigateur : si une liste de liens s’affiche, il fonctionne.

1. Dans la Search Console, ouvrez **Indexation** > **Sitemaps**.
2. Sous **Ajouter un sitemap**, saisissez `sitemap.xml` (ou la version de votre plateforme) et cliquez sur **Envoyer**.
3. Vérifiez l’état. S’il indique une réussite, Google a lu le fichier. **Impossible de récupérer** est courant sur un site neuf : vérifiez que l’adresse s’ouvre dans votre navigateur, puis laissez passer un jour ou deux.

Un sitemap s’envoie une fois. Google y revient de lui-même, et vos nouvelles pages sont prises en compte sans nouvel envoi.

{{< screenshot id="get-website-indexed-google-05" alt="Rapport Sitemaps de la Search Console avec sitemap.xml envoyé et l’état réussi" >}}

## Étape 5 : demander l’indexation de vos pages clés

Le sitemap dit à Google ce qui existe ; une demande d’indexation l’invite à passer bientôt. Sur un site neuf, réservez-la aux pages qui comptent le plus :

- la page d’accueil ;
- chaque page de service ou de produit principale ;
- la page de contact, ou celle qui donne votre adresse si vous travaillez sur une zone locale.

Pour chacune :

1. Collez l’adresse complète de la page dans la barre d’inspection en haut de la Search Console.
2. Cliquez sur **Demander une indexation**. La Search Console teste d’abord la page en ligne, ce qui peut prendre une minute ou deux.
3. Attendez la confirmation que la demande est enregistrée, puis passez à la page suivante.

La Search Console limite le nombre de demandes par jour, et la page de Google sur les [demandes de nouvelle exploration](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=fr) est claire sur deux points : demander plusieurs fois ne fait pas explorer une page plus vite, et une demande ne garantit pas son indexation. Pour le reste du site, le sitemap fait le travail.

{{< screenshot id="get-website-indexed-google-06" alt="Message de la Search Console confirmant la demande d’indexation d’une page" >}}

{{< callout type="tip" >}}**Redemandez l’indexation après un changement important** : nouveau titre de page, nouveaux tarifs, page de service réécrite. Vous invitez ainsi Google à lire la nouvelle version au lieu d’attendre son prochain passage.{{< /callout >}}

## Étape 6 : donner à Google des liens à suivre

Google trouve la plupart des pages par les liens, et un site neuf n’en a aucun. Donnez-lui-en quelques-uns, dans votre site et en dehors.

Dans le site, chaque page que vous voulez voir sur Google doit être accessible depuis le menu ou depuis une autre page. Une page vers laquelle rien ne pointe, appelée page orpheline, risque d’être trouvée tard, voire jamais, même si elle figure dans votre sitemap.

En dehors du site, quelques liens authentiques amènent Googlebot, et vos clients, jusqu’à vous :

- votre fiche d’établissement Google, qui vous place aussi sur Google Maps (mon tutoriel sur la {{< a key="google-business-profile-setup" >}}fiche Google My Business{{< /a >}} détaille sa création) ;
- vos profils sur les réseaux sociaux : LinkedIn, Facebook, Instagram, Pinterest ;
- l’annuaire des membres de votre fédération professionnelle, et des annuaires locaux comme PagesJaunes ;
- les fournisseurs et partenaires qui listent les entreprises avec lesquelles ils travaillent ;
- la presse locale, quand vous avez une vraie nouvelle à annoncer.

Passez votre chemin devant les packs de liens payants et les annuaires qui n’existent que pour vendre des liens. Ils n’accélèrent rien, et acheter des liens pour manipuler le classement enfreint les règles de Google contre le spam.

## Site toujours absent de Google : les blocages habituels

Si une page manque encore deux ou trois semaines après ces étapes, inspectez-la dans la Search Console. La raison affichée sous le verdict mène en général à l’une de ces causes :

| Ce que vous voyez | Cause probable | Solution |
|---|---|---|
| L’URL n’est pas sur Google, et Google dit ne pas la connaître | Google n’a pas encore trouvé la page | Vérifiez que le sitemap a été lu, liez la page depuis le menu, demandez l’indexation |
| **Exclue par la balise « noindex »** | Un réglage, une extension ou une ligne de code demande à Google d’écarter la page | Désactivez le réglage vu à l’étape 2, ou l’option de la page qui la masque aux moteurs |
| **Bloquée par le fichier robots.txt** | Votre fichier robots.txt interdit l’exploration | Supprimez la règle `Disallow` qui couvre la page |
| Une page de mot de passe, une page « bientôt disponible » ou une erreur à votre adresse | Le site est encore privé, ou le domaine n’est pas relié | Rendez le site public, puis vérifiez les enregistrements DNS chez le prestataire du domaine |
| **Explorée, actuellement non indexée** | Google a lu la page et l’a écartée, souvent parce qu’elle est trop mince ou trop proche d’une autre | Rendez la page plus utile et plus distincte, et faites des liens vers elle depuis vos pages principales |
| **Détectée, actuellement non indexée** | Google connaît l’adresse mais ne l’a pas encore explorée | Liez-la depuis vos pages principales, puis patientez |

{{< screenshot id="get-website-indexed-google-07" alt="Rapport d’indexation des pages de la Search Console avec une page exclue par la balise noindex" >}}

Une fois la correction en ligne, cliquez sur **Tester l’URL en ligne** pour vérifier que Google peut désormais indexer la page, puis sur **Demander une indexation**. Si la raison figure aussi dans **Indexation** > **Pages**, ouvrez-la et cliquez sur **Valider la correction**.

Si vous avez racheté un domaine qui a déjà servi, ouvrez aussi **Sécurité et actions manuelles** : une pénalité infligée à l’ancien site s’y afficherait.

Quand aucune de ces causes ne s’applique, il ne manque que du temps. Mon article sur le {{< a key="how-long-does-seo-take" >}}temps qu’il faut pour être référencé sur Google{{< /a >}} distingue l’attente de l’indexation de celle, bien plus longue, du positionnement.

## Être indexé n’est qu’un début : réponses IA et positionnement

Être dans l’index rend vos pages éligibles à l’affichage. La suite dépend de deux choses.

**Les réponses IA de Google puisent dans le même index.** Pour pouvoir être citée comme source dans les Aperçus IA (AI Overviews) ou le Mode IA (AI Mode), arrivés en France le 22 juillet 2026, une page doit être indexée et autorisée à afficher un extrait, et Google n’ajoute aucune exigence technique ([page de Google sur les fonctionnalités d’IA](https://developers.google.com/search/docs/appearance/ai-features?hl=fr)). Les autres assistants ont leurs propres robots : la recherche de ChatGPT, par exemple, écarte les sites qui bloquent son robot, OAI-SearchBot. Mon tutoriel sur le {{< a key="robots-txt-ai-crawlers" >}}robots.txt et les robots IA{{< /a >}} indique lesquels laisser entrer.

**Le positionnement est un autre chantier.** Pour Pilotech, installateur de climatisation en Île-de-France, le site a demandé environ un mois de travail. Il s’est hissé en tête sur l’une de ses recherches un ou deux jours après la mise en ligne, ce qui est rare, et le premier prospect est arrivé trois semaines après la publication. La plupart des sites neufs demandent bien plus de temps, et ce qui les fait monter, c’est le SEO : une page par recherche précise, un contenu utile, puis des liens et des mentions au fil des mois.

La plateforme compte moins qu’on ne le craint. Squarespace garde son code fermé, et pourtant un site Squarespace que j’ai créé pour Pilotech se classe premier ou deuxième sur Google. Si le vôtre tourne sur Squarespace, mon tuto sur le {{< a key="squarespace-seo" >}}référencement Squarespace{{< /a >}} détaille les réglages à faire ensuite.

## Référencer son site sur Google : la checklist de mise en ligne

À cocher le jour du lancement :

1. Le site est public : Squarespace sur **Public**, l’interrupteur d’indexation de Wix activé, la case de WordPress décochée, le mot de passe Shopify retiré.
2. Le domaine est relié, et l’adresse s’ouvre en https avec et sans www.
3. Votre robots.txt ne bloque pas le site, et aucune page utile ne porte de balise noindex.
4. La Search Console a une propriété **Domaine** validée, au nom de l’entreprise.
5. Le sitemap est envoyé, et Google l’a lu.
6. L’indexation est demandée pour la page d’accueil et les pages de service principales.
7. Votre fiche d’établissement Google et vos profils sur les réseaux sociaux pointent vers le site.
8. Une semaine plus tard, une recherche site: et l’inspection de l’URL montrent ce qui est indexé.

Vous n’avez besoin ni de moi ni de personne pour cette liste : la plupart des gens y arrivent sans aide. Passez la main si des pages restent hors de l’index une fois les blocages ci-dessus passés en revue, ou si vous déplacez un site établi vers un nouveau domaine ou une nouvelle plateforme : une seule redirection oubliée peut coûter des positions déjà acquises. Ce type de vérification technique fait partie de mon {{< a page="/services/seo" >}}accompagnement SEO{{< /a >}}.
