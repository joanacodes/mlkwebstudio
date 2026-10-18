---
title: "Vitesse de chargement d’un site internet : comprendre les Core Web Vitals"
seo_title: "Vitesse de chargement d’un site internet et Core Web Vitals"
description: "Vitesse de chargement d’un site internet : ce que mesurent LCP, INP et CLS, comment tester vos pages avec PageSpeed Insights et quoi corriger en premier."
slug: "vitesse-chargement-site-internet"
translationKey: "core-web-vitals-speed"
date: 2026-10-17T08:12:00+02:00
lastmod: 2026-10-17T08:12:00+02:00
category: "seo"
article_type: "guide"
keywords: ["vitesse de chargement site internet", "Core Web Vitals", "Signaux Web essentiels", "PageSpeed Insights", "accélérer son site internet", "temps de chargement d’une page"]
summary: "La vitesse de chargement d’un site internet se mesure, chez Google, avec les Core Web Vitals : le LCP (contenu principal affiché en 2,5 secondes au plus), l’INP (réaction à un appui ou à un clic en 200 millisecondes au plus) et le CLS (mise en page stable, score de 0,1 au plus). Google s’en sert pour classer les pages, sans que de bons scores garantissent un bon classement. Sur un site vitrine, images lourdes, polices et scripts tiers causent l’essentiel des lenteurs."
cover: "core-web-vitals-speed"
cover_alt: "Une courbe ascendante derrière du verre cannelé, à côté d’une tasse de café et d’un ordinateur portable, avec les lettres LCP, INP et CLS"
related: ["google-search-console-tutorial", "website-conversion-rate", "on-page-seo-checklist", "build-website-with-ai", "wix-platforms-history"]
services: ["seo"]
faq:
  - q: "Quel est un bon score PageSpeed Insights ?"
    a: "Le score de laboratoire va de 0 à 100 : vert à partir de 90, orange de 50 à 89, rouge en dessous de 50. C’est un outil de diagnostic. L’évaluation des Core Web Vitals, en haut du rapport, repose sur de vraies visites et reflète ce que Google mesure."
  - q: "Qu’est-ce qui a remplacé le FID ?"
    a: "L’INP (Interaction to Next Paint) a remplacé le FID (First Input Delay) parmi les Core Web Vitals le 12 mars 2024. Le FID ne mesurait que le délai avant la première interaction ; l’INP observe les appuis, les clics et les frappes au clavier pendant toute la visite, et retient l’un des plus lents."
  - q: "Pourquoi mon site est-il plus lent sur mobile que sur ordinateur ?"
    a: "Un téléphone a moins de puissance qu’un ordinateur et sa connexion est souvent plus lente : la même page s’y charge moins vite. PageSpeed Insights simule ces conditions avec un téléphone de milieu de gamme, d’où un score plus bas sur mobile. Google évalue le mobile et l’ordinateur séparément : commencez par le mobile."
  - q: "L’hébergement influence-t-il la vitesse de chargement ?"
    a: "Oui, surtout le LCP : si le serveur tarde à envoyer la page, tout le reste démarre en retard. Sur Squarespace ou Wix, l’hébergement est compris dans l’abonnement et vous n’y touchez pas. Sur WordPress, l’hébergeur, la mise en cache et les extensions jouent tous un rôle."
  - q: "Les Core Web Vitals comptent-ils pour les Aperçus IA de Google ?"
    a: "Google indique que les bonnes pratiques SEO habituelles s’appliquent à ses fonctionnalités d’IA, et qu’une page doit simplement être indexée et pouvoir s’afficher avec un extrait pour y apparaître ([consignes de Google](https://developers.google.com/search/docs/appearance/ai-features?hl=fr)). Il n’existe pas d’exigence de vitesse à part."
---

La vitesse de chargement d’un site internet se mesure, chez Google, avec trois indicateurs appelés Core Web Vitals, ou Signaux Web essentiels dans la version française de ses outils. Ils mesurent le temps d’affichage du contenu principal, la rapidité de réaction de la page quand on la touche et la stabilité de la mise en page pendant le chargement. Ils sont relevés sur de vraies visites, séparément sur mobile et sur ordinateur, et les systèmes de classement de Google s’en servent.

Sur un site vitrine, les causes d’un mauvais résultat sont rarement subtiles. Une photo prise au téléphone en haut de la page d’accueil, quatre polices différentes, un widget de chat que personne n’utilise, une bannière de cookies qui fait descendre toute la page : vous pouvez corriger l’essentiel vous-même, sans développeur.

Ce guide explique ce que mesure chaque indicateur, comment tester vos pages avec PageSpeed Insights et Search Console, et quoi corriger en premier sur Squarespace, Wix, WordPress ou un site codé sur mesure. Il complète mon {{< a key="small-business-seo-guide" >}}guide du référencement naturel pour les petites entreprises{{< /a >}}.

## LCP, INP, CLS : ce que mesurent les Core Web Vitals

Les Core Web Vitals sont trois indicateurs définis par Google pour mesurer le chargement, la réactivité et la stabilité visuelle d’une page. Chacun a un seuil pour un bon résultat et un autre pour un mauvais ; entre les deux, la page doit être améliorée.

| Indicateur | Ce qu’il mesure | Bon | Mauvais |
|---|---|---|---|
| **LCP**, Largest Contentful Paint | Le moment où la plus grande image ou le plus grand bloc de texte du premier écran s’affiche | 2,5 secondes ou moins | Plus de 4 secondes |
| **INP**, Interaction to Next Paint | Le temps que met la page à réagir visiblement à un appui, un clic ou une touche du clavier | 200 millisecondes ou moins | Plus de 500 millisecondes |
| **CLS**, Cumulative Layout Shift | L’ampleur des déplacements inattendus du contenu tant que la page est ouverte | 0,1 ou moins | Plus de 0,25 |

Une page atteint un seuil quand au moins 75 % des visites l’atteignent, ce que Google appelle le 75e centile, et le mobile et l’ordinateur sont évalués séparément ([web.dev](https://web.dev/articles/defining-core-web-vitals-thresholds?hl=fr)). Autrement dit, trois visites sur quatre doivent voir le contenu principal en 2,5 secondes au plus, obtenir une réaction à leurs appuis en un cinquième de seconde et ne jamais voir la page bouger sous leur pouce. Une page ne réussit l’évaluation que si les trois indicateurs sont bons.

## La vitesse de chargement compte-t-elle pour le référencement ?

Oui, mais moins que le bruit qui l’entoure ne le laisse croire. La documentation de Google indique que ses systèmes de classement utilisent les Core Web Vitals, et recommande d’obtenir de bons résultats pour réussir dans la recherche. Elle précise aussi que de bons résultats dans ses rapports ne garantissent pas les premières places, et que viser un score parfait pour le seul SEO n’est peut-être pas le meilleur usage de votre temps ([Google Search Central](https://developers.google.com/search/docs/appearance/core-web-vitals?hl=fr)).

Une page rapide qui ne répond pas à la recherche ne se positionnera donc pas, et la page qui y répond le mieux peut se positionner tout en étant lente. La pertinence passe en premier : les mots de la page, son titre, ses intertitres et les liens qui y mènent. Ma {{< a key="on-page-seo-checklist" >}}checklist SEO on-page{{< /a >}} les reprend page par page.

La vitesse compte surtout après le clic. Quelqu’un qui cherche un plombier en urgence sur son téléphone n’attendra pas une page lente : il revient en arrière et touche le résultat suivant. Une page lente perd des demandes même quand elle est bien placée, et c’est pourquoi la vitesse fait partie de tout travail pour {{< a key="website-conversion-rate" >}}améliorer le taux de conversion d’un site internet{{< /a >}}.

## Mesurer la vitesse de chargement de votre site internet avec PageSpeed Insights

PageSpeed Insights est le test gratuit de Google, sur [pagespeed.web.dev](https://pagespeed.web.dev/). Collez l’adresse d’une page, lancez l’analyse et lisez d’abord les résultats sur mobile. Testez les pages qui comptent, pas seulement l’accueil.

Le rapport se lit en deux parties, qui répondent à deux questions différentes.

### En haut : ce qu’ont vécu vos vrais visiteurs

La partie haute donne l’évaluation des Core Web Vitals, réussie ou non, avec le LCP, l’INP et le CLS mesurés sur de vraies visites dans Chrome au cours des 28 derniers jours. Ce sont les données sur lesquelles Google s’appuie, et celles sur lesquelles agir.

Si la page a trop peu de visites, vous pouvez afficher les chiffres de tout le site, appelé « origine ». Si le site entier en a trop peu, cette partie reste vide. C’est courant pour une TPE et cela ne dit rien de mauvais sur votre site : servez-vous du test en laboratoire juste en dessous.

### En bas : un test en laboratoire sur un téléphone simulé

En dessous, PageSpeed Insights lance Lighthouse, qui charge la page sur un téléphone de milieu de gamme simulé, avec une connexion lente, et donne un score de performances sur 100. Ce score varie de quelques points d’un test à l’autre : lancez-le deux ou trois fois avant de vous inquiéter. Le laboratoire ne peut pas mesurer l’INP, puisque personne ne touche la page pendant le test ; il affiche à la place le Total Blocking Time, qui augmente avec les mêmes scripts lourds.

Le plus utile est la liste des diagnostics sous le score. Depuis Lighthouse 13, sorti en octobre 2025, quatre d’entre eux répondent à l’essentiel des questions sur un site vitrine. Je les cite sous leur nom dans l’interface en anglais :

- **LCP breakdown** indique l’élément retenu comme LCP et où passe le temps. Regardez-le en premier : ce n’est pas toujours l’élément attendu, et un titre peut être le LCP à la place de la grande photo.
- **Improve image delivery** liste les images plus lourdes que nécessaire ou dans des formats anciens, avec le gain estimé pour chacune.
- **Render blocking requests** liste les feuilles de style et les scripts que le navigateur doit télécharger avant de pouvoir afficher quoi que ce soit.
- **Layout shift culprits** désigne les éléments qui font sauter la page.

{{< callout type="tip" >}}**Ne visez pas 100.** Si les chiffres des vraies visites sont bons, un score de laboratoire autour de 70 ne vaut pas des semaines de travail. Corrigez ce que pointent les diagnostics, testez de nouveau et passez à autre chose dès que les trois indicateurs sont bons.{{< /callout >}}

## Lire le rapport Signaux Web essentiels dans Search Console

PageSpeed Insights teste une page à la fois. Le rapport de Google Search Console couvre tout le site : ouvrez **Expérience** > **Signaux Web essentiels**, puis le rapport mobile ou ordinateur.

Il utilise les mêmes données de vraies visites que la partie haute de PageSpeed Insights et regroupe les pages semblables, par exemple tous les articles de blog construits sur le même modèle : un modèle lent apparaît comme un seul problème, pas comme cinquante. Chaque page est classée mauvaise, à améliorer ou bonne, et prend le statut de son plus mauvais indicateur.

Pour traiter un problème :

1. Cliquez dessus, par exemple un problème de LCP sur mobile, pour voir les pages concernées et une URL d’exemple.
2. Testez cet exemple dans PageSpeed Insights et corrigez la cause dans le modèle, pas page par page.
3. Cliquez sur **Valider la correction**. Google surveille alors le groupe pendant 28 jours au plus, car les chiffres couvrent les 28 derniers jours de visites : les visites lentes d’avant la correction y restent jusqu’à ce qu’elles sortent de la période.

Si le rapport reste vide faute de données, votre site a trop peu de visites dans Chrome pour être évalué, et le test en laboratoire devient votre repère. Mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}} explique comment ajouter votre site et lire les autres rapports.

## Ce qui ralentit un site vitrine, indicateur par indicateur

L’évaluation vous dit quel indicateur échoue, et chacun a ses suspects habituels.

### LCP : le contenu principal s’affiche tard

| Cause | Correction |
|---|---|
| Une grande photo de plusieurs mégaoctets, sortie d’un téléphone ou d’une banque d’images | La redimensionner à la plus grande taille à laquelle elle s’affiche, puis la compresser. Un fichier WebP ou AVIF est en général plus léger qu’un JPEG de même qualité |
| La grande image est en chargement différé (lazy loading) | Le chargement différé retient les images jusqu’à ce que le visiteur s’en approche : réservez-le aux images plus bas dans la page |
| Une vidéo d’arrière-plan ou un diaporama en haut de page | Une seule photo fixe, qui fait souvent mieux l’affaire |
| Un serveur lent | Un meilleur hébergement ou la mise en cache des pages, voir plus bas selon votre plateforme |
| Des feuilles de style et des scripts qui bloquent l’affichage | Supprimer ceux qui ne servent à rien et charger les autres scripts après le contenu |

### INP : la page réagit tard

Les problèmes d’INP viennent le plus souvent du JavaScript : tant que le navigateur exécute un script, il ne peut pas répondre à un appui. Sur un site vitrine, beaucoup de ces scripts viennent de services tiers, ajoutés un par un au fil des années : widgets de chat, bannières de cookies, modules de réservation et d’avis, flux de réseaux sociaux, cartes et vidéos intégrées, balises de suivi accumulées dans Google Tag Manager.

Faites la liste des outils tiers du site et retirez ceux qui ne méritent plus leur place. Chargez les autres seulement là où ils servent : le module de réservation sur la page de réservation, pas sur toutes les pages. Pour les vidéos et les cartes, affichez une image qui ne charge le vrai lecteur ou la vraie carte qu’au clic. Gardez votre bannière de consentement si vos cookies en exigent une, mais choisissez-en une légère.

J’utilise {{< a key="microsoft-clarity-tutorial" >}}Microsoft Clarity{{< /a >}} pour voir où les visiteurs s’attardent et quelles parties d’une page les font fuir. Ses clics de rage, ces clics répétés au même endroit, montrent où les gens attendaient une réaction : sur une page qui échoue à l’INP, regardez là en premier.

### CLS : la page saute pendant le chargement

| Cause | Correction |
|---|---|
| Des images et des contenus intégrés sans espace réservé : le texte en dessous saute à leur arrivée | Indiquer la largeur et la hauteur de chaque image et de chaque contenu intégré |
| Une bannière de cookies ou d’annonce insérée au-dessus du contenu | L’afficher par-dessus la page, fixée en bas de l’écran |
| Des polices web qui arrivent tard et changent la taille du texte | Moins de fichiers de police : deux familles avec deux graisses chacune suffisent à la plupart des sites |

## Les corrections selon votre plateforme : Squarespace, Wix, WordPress, site codé

Ce que vous pouvez changer dépend de l’outil sur lequel le site est construit.

**Squarespace** héberge le site et sert chaque image envoyée en plusieurs tailles. Vos leviers sont donc ce que vous mettez sur la page : des images plus légères dès le départ, moins de polices, une photo fixe plutôt qu’une vidéo d’arrière-plan, et le moins de code tiers possible dans l’injection de code et les blocs de code. Je confie Squarespace aux clients qui veulent modifier leur site eux-mêmes. J’ajoute souvent un peu de code à ces sites, en restant léger : un script injecté sur tout le site s’exécute sur chaque page.

**Wix** me paraît lent, sur tous les appareils, toutes les connexions et dans tous les pays où je l’ai utilisé. C’est mon expérience de l’éditeur, là où l’on travaille ; le site publié est une autre question, alors mesurez-le dans PageSpeed Insights plutôt que de vous fier à mon impression. S’il échoue, les leviers sont les mêmes que sur Squarespace, plus les applications ajoutées depuis le Wix App Market, qui peuvent chacune apporter leur propre code. Mon {{< a key="wix-platforms-history" >}}avis sur Wix{{< /a >}} explique pourquoi j’oriente les entrepreneurs seuls vers d’autres outils.

**WordPress** donne le plus de contrôle, et le plus de façons de ralentir un site : un thème ou un constructeur de pages lourd, des extensions qui ajoutent chacune leurs fichiers à toutes les pages, un hébergement bon marché sans cache. Les clients sous WordPress qui viennent me voir veulent en général le quitter, à cause de la prise en main et des extensions à gérer ; aux entrepreneurs seuls qui modifient eux-mêmes leur site, je propose donc Squarespace. Avec un spécialiste qui s’en occupe chaque mois, WordPress peut être rapide : moins d’extensions, la mise en cache des pages et un hébergement correct font l’essentiel du travail.

**Les sites codés sur mesure et les sites statiques** partent avec une longueur d’avance. Un site statique est un ensemble de pages préparées à l’avance, sans base de données à interroger à chaque visite ; ce blog tourne sur Hugo, un générateur de sites statiques, hébergé sur GitHub Pages. Sur le {{< a page="/projects/pilotech-toshiba" >}}site de climatisation Toshiba que j’ai créé pour Pilotech{{< /a >}}, construit avec Jekyll, le CSS est précompilé en une feuille de style finie avant la mise en ligne, et les icônes sont servies par le site lui-même plutôt que par le serveur d’une autre entreprise. Deux sources de lenteur courantes disparaissent ainsi avant même le premier test. Si vous préparez un site simple, mon tuto pour {{< a key="build-website-with-ai" >}}créer un site internet avec l’IA{{< /a >}} et l’héberger sur GitHub Pages part de ce type de site.

Sur un site codé, les corrections d’images et de polices ci-dessus tiennent en quelques attributs :

```html
<!-- Grande image : taille réservée, prioritaire, jamais en différé -->
<img src="/images/hero.webp" width="1600" height="900" fetchpriority="high" alt="Technicien installant une climatisation murale">

<!-- Plus bas dans la page : taille réservée, chargement différé -->
<img src="/images/equipe.webp" width="800" height="600" loading="lazy" alt="L’équipe sur un chantier">

<!-- Police de secours affichée tout de suite, remplacée par la police web à son arrivée -->
<style>
  @font-face {
    font-family: "Brand";
    src: url("/fonts/brand.woff2") format("woff2");
    font-display: swap;
  }
</style>
```

## Une vérification en une heure, et quand passer la main

1. Testez trois pages dans PageSpeed Insights, sur mobile : l’accueil, votre page de service principale et la page de contact. Notez l’indicateur qui échoue, dans la partie haute si vous avez des données de vraies visites, dans les résultats de laboratoire sinon.
2. Trouvez votre élément LCP dans **LCP breakdown**. Si c’est une image, redimensionnez-la, compressez-la et vérifiez qu’elle n’est pas en chargement différé.
3. Listez chaque widget, balise et contenu intégré du site. Retirez ce qui ne sert plus et gardez le reste sur les pages qui en ont besoin.
4. Limitez les polices à deux familles, et vérifiez que la bannière de cookies s’affiche par-dessus la page au lieu de la faire descendre.
5. Testez de nouveau, deux ou trois fois, en comparant ce qui est comparable : même page, même type d’appareil.
6. Dans Search Console, cliquez sur **Valider la correction** pour chaque problème traité, et revenez quatre semaines plus tard.

Passez la main quand le serveur tarde à répondre, quand l’INP échoue à cause des scripts du thème lui-même, ou quand la correction suppose de refaire des modèles de pages. Ce travail demande quelqu’un qui lit le code, et il fait partie de mon {{< a page="/services/seo" >}}accompagnement SEO{{< /a >}}. Si le site est lent parce que sa plateforme ne correspond pas à votre façon de travailler, comparez le coût d’une refonte avec celui des rustines à payer chaque année.
