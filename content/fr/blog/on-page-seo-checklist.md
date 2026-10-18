---
title: "SEO on-page : la checklist pour optimiser chaque page de votre site"
seo_title: "SEO on-page : la checklist en 12 points pour chaque page"
description: "SEO on-page : les 12 points à vérifier sur chaque page de votre site, du mot-clé à la meta description, avec des exemples et les réglages pas à pas."
slug: "seo-on-page-checklist"
translationKey: "on-page-seo-checklist"
date: 2026-10-17T08:05:00+02:00
lastmod: 2026-10-17T08:05:00+02:00
category: "seo"
article_type: "tutorial"
keywords: ["SEO on-page", "checklist SEO on-page", "optimisation on-page", "balise title et meta description", "balise alt", "maillage interne"]
summary: "Le SEO on-page, c’est le travail mené sur chaque page : un mot-clé principal, une URL courte, un seul H1 et des sous-titres qui répondent à de vraies questions, un texte qui répond à la recherche, des images décrites et des liens internes, puis une balise title et une meta description qui donnent envie de cliquer. Ajoutez des données structurées là où elles ont leur place, et vérifiez que la page s’affiche bien sur mobile, se charge vite et peut être indexée par Google."
cover: "on-page-seo-checklist"
cover_alt: "Plan d’architecte d’une page web, avec sa balise title et son titre H1 repérés"
related: ["keyword-research-small-business", "squarespace-seo", "schema-markup-small-business", "core-web-vitals-speed", "google-search-console-tutorial"]
services: ["seo"]
faq:
  - q: "Le SEO on-page suffit-il pour être bien classé sur Google ?"
    a: "Parfois, pour un service précis dans une zone où la concurrence est faible. Pour la plupart des recherches, Google tient aussi compte de ce qui se passe hors de votre site : les liens et les mentions venus d’autres sites et, pour les recherches locales, votre fiche d’établissement Google, ses avis et la distance entre vous et la personne qui cherche."
  - q: "Combien de temps faut-il pour voir l’effet du SEO on-page ?"
    a: "Google doit d’abord explorer de nouveau la page, ce qui prend de quelques jours à quelques semaines ; une demande d’indexation dans la Search Console peut accélérer les choses. Les positions évoluent ensuite sur des semaines ou des mois : selon Google, le SEO donne en général ses résultats en quatre mois à un an."
  - q: "Le H1 doit-il être identique à la balise title ?"
    a: "Il peut l’être : les deux décrivent la même chose, avec les mots de la personne qui cherche. La balise title ajoute souvent un argument et le nom de l’entreprise, qui détonneraient en haut de la page ; le H1 est donc en général le plus court des deux."
  - q: "Faut-il une extension SEO sur WordPress ?"
    a: "En pratique, oui. WordPress n’a pas de champ de meta description, et une extension comme Yoast SEO ou Rank Math ajoute les champs de titre SEO et de meta description, un sitemap et des données structurées de base. Installez-en une seule : avec deux, les mêmes balises risquent d’apparaître en double."
  - q: "À quelle fréquence revoir le SEO on-page de ses pages ?"
    a: "Vérifiez chaque nouvelle page avant sa mise en ligne. Revoyez ensuite vos pages principales dès que votre offre, vos prix ou votre zone d’intervention changent, et au moins une fois par an."
---

Le SEO on-page regroupe tout ce que vous maîtrisez sur la page elle-même : son adresse, ses titres, son texte, ses images, ses liens internes, ainsi que le titre et la description que lisent les moteurs de recherche. Voici les douze points à vérifier sur chaque page d’un site vitrine de TPE ou de PME, avec ce qu’on attend et où les régler.

L’ordre suit ma façon de travailler pour mes clients : la recherche de mots-clés avant la première ligne de texte, le titre et la description en dernier, une fois la page validée.

Presque tout se fait sans développeur. Le site Squarespace que j’ai créé pour Pilotech, installateur de climatisation en Île-de-France, se classe premier ou deuxième sur Google, alors que Squarespace ne donne aucun accès à son code source : avec les bons mots-clés et des métadonnées soignées, une plateforme fermée ne l’a pas freiné.

## Ce que couvre le SEO on-page, et ce qu’il laisse de côté

Le SEO on-page est l’une des trois familles du référencement naturel. Cette checklist le couvre, ainsi que deux vérifications techniques à faire page par page.

| Famille | Ce qu’elle couvre | Exemples |
|---|---|---|
| SEO on-page | Ce que vous écrivez et réglez sur chaque page | Les points 1 à 10 de cette checklist |
| SEO technique | Ce qui permet aux moteurs d’explorer et d’indexer tout le site | Sitemap, robots.txt, redirections, vitesse, affichage sur mobile |
| SEO off-page | Ce qui se passe hors de votre site | Liens et mentions venus d’autres sites, avis, fiche d’établissement Google |

Pour Pilotech, j’ai suivi cet ordre : des pages pour les recherches qui comptent, leur contenu, la fiche d’établissement Google, puis les corrections techniques. Les pages d’abord, car tout le reste y renvoie. Mon {{< a key="small-business-seo-guide" >}}guide du référencement naturel{{< /a >}} couvre toute la démarche.

## Point 1 : donner à chaque page un mot-clé principal

Le mot-clé principal est la recherche sur laquelle une page doit se positionner. Choisissez-le en premier : l’URL, le H1, les premières lignes et le titre en découlent.

Reprenons le chauffagiste lyonnais de ma {{< a key="keyword-research-small-business" >}}méthode de recherche de mots-clés{{< /a >}} : sa page de dépannage vise « dépannage chaudière Lyon » et répond aussi à des variantes comme « chaudière en panne ». Une recherche par page, une page par recherche : deux pages qui visent le même mot-clé se font concurrence et s’en sortent souvent moins bien toutes les deux. C’est la cannibalisation.

Pour une page en ligne, la Search Console montre ce que Google en a compris. Ouvrez **Performances** > **Résultats de recherche**, cliquez sur la page dans l’onglet **Pages**, puis ouvrez **Requêtes**. Si les recherches listées ne sont pas celles que vous visiez, la page ne dit pas ce que vous croyez. Pour repérer une cannibalisation, revenez au rapport complet, cliquez sur une requête, puis ouvrez **Pages**. Si deux de vos pages se partagent ses impressions sans bien se classer, fusionnez-les (avec une redirection 301) ou donnez une autre cible à l’une d’elles.

{{< screenshot id="on-page-seo-checklist-01" alt="Rapport Performances de la Search Console filtré sur une page, avec l’onglet Requêtes qui liste les recherches où elle apparaît" >}}

## Point 2 : une URL courte et lisible

Le slug est la fin de l’adresse d’une page, la partie qui la nomme. Choisissez quelques mots en minuscules, séparés par des tirets, avec le mot-clé s’il s’y glisse naturellement :

```
Bien :     votreentreprise.fr/depannage-chaudiere-lyon
Faible :   votreentreprise.fr/page-12?id=4471
Faible :   votreentreprise.fr/nos-services-de-depannage-de-chaudiere-a-lyon
```

Google recommande des mots lisibles plutôt que de longs numéros, et des tirets plutôt que des traits de soulignement. Évitez aussi les accents : un « é » devient souvent %C3%A9 quand l’adresse est copiée. Laissez les dates hors des pages qui doivent durer. Une fois la page positionnée, ne changez son slug qu’avec une redirection 301 vers la nouvelle adresse ; sinon, les anciens liens mènent à une page d’erreur et les positions acquises sont perdues.

## Points 3 et 4 : un seul H1, puis des sous-titres qui répondent aux questions

Le H1 est le titre principal, en haut de la page. Donnez-en un seul à chaque page, avec les mots de la personne qui cherche : « Dépannage de chaudière à Lyon » en dit plus que « Bienvenue » ou « Nos services ».

En dessous, écrivez un H2 par question que l’on se pose avant d’acheter, et des H3 si une partie doit être découpée :

```
H1  Dépannage de chaudière à Lyon
H2  En combien de temps un technicien peut-il venir ?
H2  Combien coûte un dépannage de chaudière ?
H2  Communes desservies autour de Lyon
```

Le lecteur pressé trouve sa question en quelques secondes, un lecteur d’écran saute d’un titre à l’autre, et une partie qui répond à une seule question se cite facilement, y compris par un assistant IA. Mon guide pour {{< a key="write-content-for-ai-search" >}}être cité par les IA{{< /a >}} va plus loin.

Méfiez-vous de votre thème : certains font du nom de l’entreprise ou du slogan d’une bannière le H1. Clic droit sur la page, **Afficher le code source de la page** (le libellé varie selon le navigateur), puis cherchez `<h1` : il doit y en avoir un seul, avec votre titre principal.

{{< screenshot id="on-page-seo-checklist-02" alt="Code source d’une page en ligne dans le navigateur, avec la balise title, la meta description et l’unique H1 surlignés" >}}

## Point 5 : un texte qui répond à la recherche

Quelqu’un qui tape « dépannage chaudière Lyon » attend trois réponses, vite : pouvez-vous réparer ma chaudière, quand, et à peu près à quel prix. Donnez-les dès les premières lignes, où le mot-clé trouvera sa place tout seul, puis étayez-les :

- **Reprenez les mots de vos clients**, tirés des demandes, des appels et des avis. J’utilise aussi la recherche approfondie (deep research) pour repérer ce dont les gens d’un secteur se plaignent le plus et les expressions qui reviennent, et je construis le texte dessus.
- **Soyez précis** : marques, communes, délais, prix ou fourchettes de prix, déroulement d’une intervention.
- **Apportez des preuves** : avis, photos de vrais chantiers, études de cas, qualifications.

J’assemble le tout avec l’IA, puis je reprends chaque ligne jusqu’à ce qu’elle me convienne. Une fois la page en ligne, Microsoft Clarity me montre où les visiteurs s’attardent et où ils partent : je sais alors s’il faut retravailler le texte, une image ou la mise en page.

## Point 6 : nommer, décrire et alléger vos images

Chaque image a besoin de trois choses :

1. **Un nom de fichier descriptif** : `depannage-chaudiere-murale-gaz.jpg` plutôt que `IMG_4032.jpg`. Selon Google, le nom de fichier ne donne que de légers indices : ne les gaspillez pas.
2. **Un texte alternatif**, l’attribut alt que beaucoup appellent « balise alt » : une phrase courte qui dit ce que montre l’image, pour les personnes qui ne la voient pas. Google en fait l’attribut le plus important pour décrire une image, qu’il combine à la vision par ordinateur et au texte de la page ([consignes de Google sur le référencement des images](https://developers.google.com/search/docs/appearance/google-images?hl=fr)). N’y mettez le mot-clé que s’il décrit l’image, et laissez-le vide sur les images purement décoratives.
3. **Un fichier léger** : redimensionnez les photos à la largeur où elles s’affichent, et compressez-les. Les photos tout droit sorties d’un téléphone ralentissent souvent les pages.

```html
<img src="/images/depannage-chaudiere-murale-gaz.jpg"
     alt="Technicien qui remplace le circulateur d’une chaudière murale gaz">
```

## Point 7 : relier la page au reste du site

Les liens internes relient les pages de votre site entre elles et forment le maillage interne. Ils aident les visiteurs et Google à trouver vos pages, et leur texte cliquable, l’ancre, indique à chacun de quoi parle la page de destination.

- Rendez chaque page accessible depuis le menu ou une autre page : une page vers laquelle rien ne pointe risque d’être trouvée tard, voire jamais.
- Placez des liens sur les pages les plus visitées, comme l’accueil, vers les pages qui vendent.
- Décrivez la destination dans l’ancre, par exemple « dépannage de chaudière à Lyon », jamais « cliquez ici ».
- Reliez chaque article au service qui résout le problème qu’il décrit.

Le {{< a page="/projects/pilotech-vmi" >}}site de ventilation que j’ai créé pour Pilotech{{< /a >}} repose sur cette dernière règle. Chacun de ses 21 articles part d’un problème que les gens recherchent, comme la condensation dans les combles ou les moisissures dans un appartement, et renvoie vers la fiche de la centrale adaptée.

## Point 8 : écrire la balise title en dernier, et donner envie de cliquer

La balise title est le nom de la page dans son code. Le navigateur l’affiche sur l’onglet, et Google en fait le plus souvent le titre bleu cliquable de votre résultat, appelé lien de titre : c’est souvent elle qui décide du clic. Je l’écris en dernier, car un titre rédigé avant la version finale du texte décrit souvent une page qui n’existe plus.

Pour la plupart des pages, la formule est simple : le mot-clé, une raison de vous choisir, puis le nom de l’entreprise.

```html
<title>Dépannage chaudière Lyon, le jour même | Votre entreprise</title>
```

Google ne fixe aucune longueur maximale, mais coupe le lien de titre pour qu’il tienne à l’écran : les mots importants d’abord. À titre indicatif, 50 à 60 caractères s’affichent en entier. Google peut aussi bâtir son propre lien de titre à partir de votre H1 ou d’un autre texte visible, surtout quand un titre est à moitié vide, inexact ou répété d’une page à l’autre ([guide de Google sur les liens de titre](https://developers.google.com/search/docs/appearance/title-link?hl=fr)). Donnez à chaque page le sien.

Sur le {{< a page="/projects/pilotech-toshiba" >}}site de climatisation Toshiba{{< /a >}} que j’ai créé pour Pilotech, chacune des dix gammes a sa page et un titre construit autour d’une recherche locale, comme « Toshiba Haori : 15 coloris, prix et pose en IDF » : le modèle, son atout, ce que cherchent les acheteurs et la région.

{{< screenshot id="on-page-seo-checklist-03" alt="Résultat Google d’une page de service locale, avec son lien de titre, son adresse et la description affichée en dessous" >}}

Squarespace et Wix ont un champ de titre dans les paramètres SEO de chaque page, WordPress passe par une extension SEO, et une page codée à la main le reçoit dans son `<head>`. Mon {{< a key="squarespace-seo" >}}tutoriel de référencement Squarespace{{< /a >}} montre où trouver ces champs.

## Point 9 : une meta description qui vend le clic

La meta description résume la page en une phrase ou deux, dans son code. Google l’affiche souvent sous le lien de titre : rédigez-la comme une petite annonce, avec ce que vous proposez, où, un détail qui vous distingue et ce qu’il faut faire ensuite.

```html
<meta name="description" content="Dépannage de chaudières gaz à Lyon et Villeurbanne, souvent le jour même. Toutes marques, prix fixé avant toute intervention. Appelez ou réservez en ligne.">
```

Google dit depuis longtemps que la description ne compte pas dans le classement : elle sert à gagner le clic. Il ne fixe pas non plus de limite de longueur, mais coupe l’extrait pour qu’il tienne à l’écran : visez 150 à 160 caractères, l’essentiel en premier. Il rédige aussi souvent son propre extrait à partir du texte de la page, quand celui-ci correspond mieux à la recherche ([guide de Google sur les extraits](https://developers.google.com/search/docs/appearance/snippet?hl=fr)).

Donnez à chaque page sa description, puis laissez la Search Console vous montrer lesquelles réécrire en premier : dans **Performances**, cliquez sur **CTR moyen** et triez l’onglet **Pages** par impressions. Une page avec beaucoup d’impressions et peu de clics est vue, puis ignorée : un titre et une description plus percutants sont souvent la correction la plus rapide.

## Point 10 : des données structurées là où elles ont leur place

Les données structurées, ou balisage schema, sont un code qui décrit la page aux moteurs de recherche dans un vocabulaire commun, schema.org. Google recommande le format JSON-LD, un bloc de code que les visiteurs ne voient jamais. Elles peuvent rendre une page éligible aux résultats enrichis, comme le prix et la note d’un produit, ou le fil d’Ariane, sans que Google en garantisse aucun. Pour une petite entreprise, quatre types suffisent souvent :

- `LocalBusiness` (ou `Organization`) sur la page d’accueil ou de contact : nom, adresse, téléphone, horaires.
- `Product` sur les fiches produits, avec le prix et la disponibilité.
- `BreadcrumbList` sur les sites à plusieurs niveaux de pages.
- `Article` sur les articles de blog.

Sur le site Toshiba, l’entreprise, chaque produit et chaque service ont leurs propres données structurées. Avant d’en ajouter, vérifiez ce que votre plateforme produit déjà : beaucoup d’outils de création de site et d’extensions SEO posent seuls un balisage de base.

Pour des résultats enrichis, oubliez les balisages FAQ et HowTo : les résultats FAQ ne s’affichent plus depuis le 7 mai 2026, même si le balisage reste valide et sans danger, et les résultats HowTo ont disparu en 2023. Testez vos pages avec le Test des résultats enrichis, sur `search.google.com/test/rich-results` ; mon guide des {{< a key="schema-markup-small-business" >}}données structurées{{< /a >}} donne le code.

{{< screenshot id="on-page-seo-checklist-04" alt="Test des résultats enrichis qui liste les données structurées détectées sur une page, sans erreur" >}}

## Points 11 et 12 : mobile, vitesse et indexation

**Point 11 : la page fonctionne sur mobile et se charge vite.** Google indexe et classe surtout la version mobile des pages : ouvrez donc la vôtre sur un téléphone. Le texte doit se lire sans zoomer, les boutons se toucher sans peine, le numéro lancer l’appel d’un appui, et rien ne doit masquer le contenu. Testez-la ensuite dans PageSpeed Insights, sur `pagespeed.web.dev`. Une page réussit les Core Web Vitals quand son contenu principal s’affiche en 2,5 secondes au plus (LCP), qu’elle réagit à un appui ou à un clic en 200 millisecondes au plus (INP) et que sa mise en page bouge à peine (CLS de 0,1 au plus). Sur un petit site, la partie haute du rapport, tirée des vraies visites, reste souvent vide : fiez-vous alors au test en laboratoire juste en dessous. Mon guide sur la {{< a key="core-web-vitals-speed" >}}vitesse de chargement d’un site internet{{< /a >}} explique comment corriger chacun.

{{< screenshot id="on-page-seo-checklist-05" alt="Rapport mobile de PageSpeed Insights pour une page, avec l’évaluation des Core Web Vitals en haut" >}}

**Point 12 : Google peut indexer la page.** Vérifiez qu’elle n’a pas de balise `noindex`, que robots.txt ne la bloque pas, que sa balise canonical (qui désigne la version principale) pointe vers sa propre adresse, et qu’elle figure dans votre sitemap et reçoit un lien d’une autre page. Collez ensuite son adresse dans l’**Inspection de l’URL** de la Search Console : vous voulez lire **L’URL est sur Google**. Après une grosse modification, cliquez sur **Demander une indexation** pour que Google la relise plus tôt. Mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}} détaille chaque écran.

{{< screenshot id="on-page-seo-checklist-06" alt="Résultat de l’inspection d’une URL dans la Search Console avec le verdict L’URL est sur Google et le détail de l’indexation, dont l’URL canonique" >}}

## Ce que vous pouvez rayer de votre checklist SEO on-page

Certains conseils circulent encore, coûtent du temps et ne changent rien. Rayez :

- **La balise meta keywords.** Google ne s’en sert pas, comme le rappelle son [guide de démarrage SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=fr).
- **Le nombre de mots et la densité de mots-clés.** Le même guide précise que la longueur seule ne compte pas, et répéter un mot-clé pour atteindre un pourcentage tourne vite au bourrage de mots-clés, contraire aux règles de Google sur le spam.
- **Les fichiers et balisages spéciaux pour la recherche IA.** Selon le guide de Google sur ses fonctionnalités d’IA (mai 2026), optimiser pour les Aperçus IA et le Mode IA reste du SEO : fichiers llms.txt, contenus découpés en morceaux et schema spécial ne sont pas nécessaires pour la recherche Google.
- **Un score PageSpeed parfait.** Le score de performances sur 100 de PageSpeed Insights vient d’une visite simulée. Visez plutôt des Core Web Vitals réussis, possibles avec un score bien inférieur à 100.

## Votre checklist SEO on-page à copier, et quand passer la main

| N° | Point | Ce qu’on attend |
|---|---|---|
| 1 | Mot-clé principal | Une recherche par page, sans doublon entre vos pages |
| 2 | URL | Courte, en minuscules, avec des tirets, redirigée si elle change |
| 3 | H1 | Un seul, avec les mots de la personne qui cherche |
| 4 | Sous-titres | Des H2 qui répondent aux questions des acheteurs |
| 5 | Texte | La réponse d’abord, puis des détails et des preuves |
| 6 | Images | Un nom de fichier descriptif, un texte alternatif, un fichier léger |
| 7 | Liens internes | Un lien entrant à l’ancre descriptive, et un lien vers l’étape suivante |
| 8 | Balise title | Le mot-clé d’abord, une raison de cliquer, votre nom, propre à la page |
| 9 | Meta description | 150 à 160 caractères rédigés comme une petite annonce |
| 10 | Données structurées | Les types qui conviennent, testés sans erreur |
| 11 | Mobile et vitesse | Confortable sur téléphone, Core Web Vitals réussis |
| 12 | Indexation | L’inspection de l’URL indique L’URL est sur Google |

Vous n’avez pas besoin de moi pour cette liste : l’essentiel consiste à écrire sur votre entreprise, que vous connaissez mieux que personne. Passez la main quand des dizaines de pages sont à reprendre d’un coup, quand le problème vient du thème plutôt que de vos mots (un titre imposé par le modèle, un script lent, des données structurées cassées), ou quand une page coche toutes les cases et n’a toujours pas bougé après quelques mois. Ce type de travail fait partie de mon {{< a page="/services/seo" >}}accompagnement SEO{{< /a >}}.
