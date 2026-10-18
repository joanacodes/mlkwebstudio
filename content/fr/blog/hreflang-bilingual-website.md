---
title: "Balise hreflang : réussir le référencement d’un site multilingue"
seo_title: "Balise hreflang : la configurer sur un site multilingue"
description: "La balise hreflang indique à Google quelle version d’une page montrer selon la langue. Comment la configurer sur un site multilingue et la vérifier."
slug: "balise-hreflang-site-multilingue"
translationKey: "hreflang-bilingual-website"
date: 2026-10-17T08:08:00+02:00
lastmod: 2026-10-17T08:08:00+02:00
category: "seo"
article_type: "tutorial"
keywords: ["balise hreflang", "hreflang", "référencement site multilingue", "site bilingue SEO", "x-default", "hreflang sitemap"]
summary: "La balise hreflang indique à Google quelles pages sont les versions linguistiques les unes des autres, pour montrer votre page française aux francophones et votre page anglaise aux anglophones. Chaque version liste toutes les versions, elle comprise, avec des adresses complètes, des codes valides (fr, en, fr-FR) et une valeur x-default, dans le head, un en-tête HTTP ou le sitemap. Elle ne fait pas monter une page dans Google : chaque version doit être écrite pour son marché."
cover: "hreflang-bilingual-website"
cover_alt: "Les mots hreflang EN · FR à côté d’une fenêtre de terminal"
related: ["google-search-console-tutorial", "on-page-seo-checklist", "squarespace-seo", "keyword-research-small-business", "eden-flats-corporate-mobility"]
services: ["seo"]
faq:
  - q: "Faut-il une balise hreflang si mon site est en une seule langue ?"
    a: "Non. La balise hreflang relie les versions d’une même page rédigées dans plusieurs langues ou pour plusieurs pays. Un site qui n’a qu’une version de chaque page n’a rien à relier."
  - q: "Quelle différence entre hreflang et l’attribut lang ?"
    a: "L’attribut lang de la balise html (lang=fr, par exemple) indique la langue de la page elle-même, pour les navigateurs et les lecteurs d’écran. La balise hreflang désigne les autres versions linguistiques de la page. Gardez les deux : lang sert les navigateurs et l’accessibilité, hreflang sert les moteurs de recherche."
  - q: "Faut-il des pages séparées pour la France, la Belgique et la Suisse ?"
    a: "Seulement si le contenu change, par exemple des prix en euros et en francs suisses ou des conditions de livraison différentes. Utilisez alors fr-FR, fr-BE et fr-CH ; Google conseille aussi une version générique en fr pour les francophones des autres pays. Si une seule page en français sert tout le monde, une version fr suffit."
  - q: "La balise hreflang peut-elle pointer vers un autre domaine ?"
    a: "Oui. Les versions n’ont pas besoin de partager un domaine : votreentreprise.fr et votreentreprise.co.uk peuvent se désigner l’une l’autre. Les règles habituelles s’appliquent : des adresses complètes, et chaque version cite l’autre en retour."
  - q: "Combien de temps faut-il pour que les balises hreflang fonctionnent ?"
    a: "Il n’y a pas de délai fixe. Google doit explorer à nouveau les deux versions et trouver sur chacune des balises qui se répondent : tout dépend de la fréquence de ses visites sur votre site. Rien n’est à soumettre, mais demander l’indexation des pages modifiées dans la Search Console peut le faire revenir plus tôt."
---

La balise hreflang est une courte ligne de code qui indique à Google que deux pages disent la même chose dans deux langues, et laquelle montrer à qui. Sur un site bilingue ou multilingue, elle montre votre page française à ceux qui cherchent en français et votre page anglaise à ceux qui cherchent en anglais, au lieu de laisser Google choisir une version pour tous.

Ce blog s’en sert : chaque article existe en français et en anglais, et chaque version désigne l’autre. Je fais de même sur les sites bilingues de mes clients, comme celui d’Eden Corporate Mobility, qui compte 17 pages dans chaque langue. Voici les codes à utiliser, les trois endroits où placer les balises, la mise en place selon votre plateforme et les vérifications à faire.

Une mise en garde avant le code : hreflang envoie chaque internaute vers la bonne version sans l’aider à se positionner, d’où la section sur la rédaction juste après les bases. Ce tutoriel fait partie de mon {{< a key="small-business-seo-guide" >}}guide du référencement naturel pour les petites entreprises{{< /a >}}.

## Ce que fait la balise hreflang (et ce qu’elle ne fait pas)

Une balise hreflang est un lien qui désigne une autre version linguistique de la page en cours, et la langue de cette version. En voici une :

```html
<link rel="alternate" hreflang="en" href="https://votreentreprise.fr/en/services/office-cleaning/">
```

Elle se lit ainsi : la version anglaise de cette page se trouve à cette adresse. Quand les deux versions se désignent l’une l’autre, Google peut montrer à chacun la version dans sa langue. Sans balise, il retrouve parfois les paires seul, mais vous lui laissez deviner.

Ce que la balise ne fait pas compte autant :

- **Elle ne traduit rien.** Chaque version doit déjà exister, rédigée dans sa langue.
- **Elle n’indique pas à Google la langue de la page.** Google lit le texte visible pour cela.
- **Elle ne redirige personne.** L’internaute arrive sur la page qu’il a choisie ; votre sélecteur de langue fait le reste.
- **Elle ne fait pas monter une page dans les résultats.** Elle remplace une version par une autre là où votre site apparaît déjà. Le classement vient toujours du contenu, des mots-clés et du reste de votre SEO.

## D’abord, écrire chaque langue pour son propre marché

Ma règle, sur ce site comme chez mes clients : chaque version linguistique doit se positionner dans son propre marché. Une traduction mot à mot donne une page dans la bonne langue qui vise les mauvaises recherches, parce qu’on ne cherche pas de la même façon en français et en anglais.

Chaque version a donc son mot-clé, choisi d’après les recherches faites dans cette langue, son slug, son titre, sa meta description, ses exemples et sa devise. Sur ce blog, cela donne :

| | Version française | Version anglaise |
|---|---|---|
| Mot-clé du tuto Search Console | tuto Google Search Console | how to use Google Search Console |
| Son adresse | /fr/blog/tuto-google-search-console/ | /blog/how-to-use-google-search-console/ |
| Mot-clé de cet article | balise hreflang | hreflang tags |
| Mot-clé du tuto Squarespace | référencement Squarespace | Squarespace SEO |
| Prix | En euros | En livres sterling, avec l’équivalent en dollars |
| Domaines d’exemple | .fr | .co.uk |

Eden Corporate Mobility fonctionne de la même façon : chaque page a son titre et sa description dans chaque langue, rédigés à partir de ce que tape son public ; des liens hreflang relient chaque paire et le sitemap recense les deux versions. La {{< a page="/projects/eden-corporate-mobility" >}}page du projet Eden Corporate Mobility{{< /a >}} présente le site, et {{< a key="eden-flats-corporate-mobility" >}}l’étude de cas Eden Flats{{< /a >}} raconte pourquoi Eden Flats lui a laissé la place.

Pour trouver ces mots, faites votre {{< a key="keyword-research-small-business" >}}recherche de mots-clés{{< /a >}} séparément dans chaque langue, puis rédigez titres et descriptions avec ma {{< a key="on-page-seo-checklist" >}}checklist SEO on-page{{< /a >}}. Google ne considère pas une page bien traduite comme une copie de l’original. Une page dont seul le menu est traduit, le texte principal restant dans l’autre langue, c’est une autre affaire : gardez chaque page dans une seule langue, de haut en bas.

## Étape 1 : donner à chaque langue sa propre adresse

Les balises hreflang relient des adresses : chaque version linguistique a donc besoin de sa propre URL. Google recommande des URL distinctes plutôt qu’une seule adresse dont la langue change selon un cookie ou les réglages du navigateur ([le guide de Google sur les sites multilingues](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites?hl=fr)).

| Structure | Exemple | Mon avis pour une petite entreprise |
|---|---|---|
| Sous-dossier | votreentreprise.fr/en/ | Le plus simple : un site, un domaine, un seul endroit à mettre à jour |
| Sous-domaine | en.votreentreprise.fr | Fonctionne aussi, avec un enregistrement DNS à ajouter par langue |
| Domaines séparés | votreentreprise.fr et votreentreprise.co.uk | Logique quand chaque pays a sa propre offre ; deux sites à entretenir |
| Paramètre ou cookie | votreentreprise.fr/?lang=en | À éviter |

Deux autres règles :

1. **Ne redirigez pas les visiteurs automatiquement** selon leur pays ou la langue de leur navigateur. Google le déconseille : son robot passe en général depuis les États-Unis sans indiquer de langue, et risque de ne voir qu’une de vos versions. Et un anglophone installé à Bordeaux doit pouvoir lire vos pages en anglais.
2. **Ajoutez un sélecteur de langue** sur chaque page, qui mène à la même page dans l’autre langue plutôt qu’à l’autre page d’accueil. Le sélecteur EN/FR de l’en-tête et du pied de page de ce site fonctionne ainsi.

## Étape 2 : choisir vos codes de langue et votre x-default

La valeur de l’attribut hreflang est un code de langue, éventuellement suivi d’un code de région : la langue au format ISO 639-1 (fr, en), la région au format ISO 3166-1 Alpha 2 (FR, BE, CH, GB). Une région seule n’est pas acceptée.

| Valeur | Signification |
|---|---|
| fr | Français, pour les francophones de tous les pays |
| en | Anglais, pour les anglophones de tous les pays |
| fr-FR, fr-BE, fr-CH, fr-CA | Français, pour la France, la Belgique, la Suisse ou le Canada |
| en-GB | Anglais, pour les internautes au Royaume-Uni |
| x-default | La version de repli pour tous ceux dont la langue ne correspond à aucune de vos versions |

Pour la plupart des petites entreprises bilingues, fr et en suffisent, et c’est ce qu’utilise ce site. Les codes de région ne servent que si vous avez plusieurs versions dans une même langue, par exemple pour la France et la Suisse.

{{< callout type="warning" >}}**Le code du Royaume-Uni est GB, pas UK.** en-UK n’est pas une valeur valide, et uk seul est le code de l’ukrainien. Mettez aussi un tiret : fr_FR, avec un tiret bas, est le format d’autres balises (og:locale, par exemple), pas celui de hreflang.{{< /callout >}}

La valeur x-default sert aux visiteurs dont la langue ne correspond à aucune des vôtres, comme un germanophone sur un site en français et en anglais. Facultative mais utile, elle a été prévue pour les pages de choix de la langue ; si vous n’en avez pas, faites-la pointer vers la version que ces visiteurs liront le plus facilement. Sur ce site, c’est l’anglais, et c’est en général le bon choix pour une entreprise française : un visiteur qui ne lit pas le français a plus de chances de lire l’anglais.

## Étape 3 : placer les balises dans le head, le sitemap ou un en-tête HTTP

Google lit hreflang à trois endroits, et un seul suffit ([le guide de Google sur les versions localisées d’une page](https://developers.google.com/search/docs/specialty/international/localized-versions?hl=fr)). Où que vous les placiez, quatre règles s’appliquent :

1. Chaque version liste **toutes les versions, elle comprise**, plus la valeur x-default.
2. Les lignes sont **identiques sur chaque version**.
3. Chaque adresse est **complète**, avec https:// et le domaine : un lien relatif comme /en/ ne compte pas.
4. Les liens vont **dans les deux sens**. Si la page française cite l’anglaise sans que l’anglaise la cite en retour, Google peut ignorer la paire.

Visez toujours l’adresse finale de chaque page, jamais une redirection, une page d’erreur ou une page masquée aux moteurs.

### Dans le head de chaque page (la plupart des sites)

Les lignes vont dans la section head des deux pages. Pour un site avec le français à la racine et l’anglais sous /en/ :

```html
<link rel="alternate" hreflang="fr" href="https://votreentreprise.fr/services/nettoyage-bureaux/">
<link rel="alternate" hreflang="en" href="https://votreentreprise.fr/en/services/office-cleaning/">
<link rel="alternate" hreflang="x-default" href="https://votreentreprise.fr/en/services/office-cleaning/">
```

Les trois mêmes lignes vont sur les deux pages. Remarquez le slug anglais : chaque version garde ses propres mots. Ici, x-default vise l’anglais (voir l’étape 2).

Sur ce site, un modèle les écrit sur chaque article. Pour celui-ci, le head des deux versions contient :

```html
<link rel="alternate" hreflang="en" href="https://mlkwebstudio.com/blog/hreflang-tags-bilingual-website/">
<link rel="alternate" hreflang="x-default" href="https://mlkwebstudio.com/blog/hreflang-tags-bilingual-website/">
<link rel="alternate" hreflang="fr" href="https://mlkwebstudio.com/fr/blog/balise-hreflang-site-multilingue/">
```

Dans le code source, elles tiennent sur une longue ligne, sans guillemets, car le code est minifié (compressé) avant sa mise en ligne ; le contenu est le même.

{{< screenshot id="hreflang-bilingual-website-01" alt="Code source d’un article de mlkwebstudio.com, avec une recherche sur hreflang qui fait apparaître les balises en, x-default et fr dans le head" >}}

### Dans le sitemap XML (gros sites)

Si vous ne pouvez pas modifier le head, ou si vous avez des centaines de pages, le sitemap peut porter les mêmes informations. Chaque entrée url reprend l’ensemble complet, elle comprise :

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://votreentreprise.fr/services/nettoyage-bureaux/</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="https://votreentreprise.fr/services/nettoyage-bureaux/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://votreentreprise.fr/en/services/office-cleaning/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://votreentreprise.fr/en/services/office-cleaning/"/>
  </url>
  <url>
    <loc>https://votreentreprise.fr/en/services/office-cleaning/</loc>
    <xhtml:link rel="alternate" hreflang="fr" href="https://votreentreprise.fr/services/nettoyage-bureaux/"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://votreentreprise.fr/en/services/office-cleaning/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://votreentreprise.fr/en/services/office-cleaning/"/>
  </url>
</urlset>
```

### Dans un en-tête HTTP (PDF et autres fichiers)

Un PDF n’a pas de head : ses autres versions passent par l’en-tête HTTP que le serveur envoie avec le fichier. C’est un réglage du serveur, pour votre développeur ou votre hébergeur :

```
Link: <https://votreentreprise.fr/tarifs.pdf>; rel="alternate"; hreflang="fr", <https://votreentreprise.fr/en/price-list.pdf>; rel="alternate"; hreflang="en"
```

Choisissez un seul endroit et tenez-vous-y. Si votre plateforme écrit déjà les balises dans le head, n’ajoutez pas au sitemap un jeu fait main qui risque de les contredire.

{{< callout type="note" >}}**Vérifiez aussi la balise canonique de chaque version.** La canonique indique à Google quelle adresse garder parmi des copies. Celle de la page anglaise doit pointer vers elle-même : si elle pointe vers la page française, elle demande à Google de traiter la version anglaise comme une copie et de l’écarter.{{< /callout >}}

## Étape 4 : la mise en place sur votre plateforme

### WordPress, Wix et outils de traduction

Les extensions de traduction et les créateurs de sites écrivent les balises pour vous : WPML et Polylang sur WordPress, Wix Multilingual sur Wix, ou un service comme Weglot. À vous de vérifier ce qu’ils produisent (étape 5), sans ajouter vos propres lignes : un second jeu écrit à la main finit par contredire le premier dès qu’une page change.

### Squarespace

Squarespace n’a pas de traduction intégrée. Son centre d’aide décrit deux voies : Weglot, ou la construction à la main des pages de chaque langue ([le guide de Squarespace sur les sites multilingues faits à la main](https://support.squarespace.com/hc/fr-fr/articles/16552875658765)).

- **Avec Weglot**, vous gérez les traductions dans son tableau de bord, et Weglot dit ajouter lui-même les balises hreflang. Son prix dépend du nombre de mots et de langues de votre site.
- **À la main**, vous dupliquez chaque page, donnez à la copie le slug, le titre SEO et la description de l’autre langue, la traduisez, puis collez les lignes hreflang sur les deux versions, dans le champ **Page Header Code Injection** de l’onglet **Advanced** des paramètres de la page. Le forfait Basic n’inclut pas l’injection de code : vérifiez le vôtre avant de commencer.

Je propose Squarespace aux clients qui veulent modifier leur site eux-mêmes, et j’y ajoute en général un peu de code. Les lignes hreflang se prêtent bien à ce partage : collées une fois, elles laissent le client réécrire le texte autour sans rien casser. Le piège, c’est un slug renommé : les lignes des deux pages doivent changer avec lui. Mon {{< a key="squarespace-seo" >}}tuto de référencement Squarespace{{< /a >}} montre où se règlent le slug, le titre et la description de chaque page.

{{< screenshot id="hreflang-bilingual-website-02" alt="Paramètres d’une page Squarespace, onglet Advanced, avec les lignes hreflang en, fr et x-default dans le champ Page Header Code Injection" >}}

### Sites codés sur mesure

Sur un site sur mesure, le modèle écrit les lignes à partir des données : personne ne tape deux fois une adresse. Sur ce site, chaque article et sa traduction partagent une clé : le modèle trouve l’autre version, écrit une ligne par langue plus x-default, et un nouvel article a ses balises dès sa mise en ligne.

## Étape 5 : vérifier que Google lit vos balises

La Search Console listait autrefois les erreurs hreflang dans un rapport sur le ciblage international. Google a supprimé ce rapport le 22 septembre 2022 ([l’annonce de Google](https://support.google.com/webmasters/answer/12474899?hl=fr)). Il utilise toujours les balises, mais plus aucun rapport ne liste leurs erreurs : les vérifications vous reviennent.

1. **Lisez le code source des deux versions.** Faites un clic droit sur la page, choisissez d’afficher le code source et cherchez hreflang. Les deux versions doivent montrer les mêmes lignes, avec des adresses complètes qui ouvrent les bonnes pages.
2. **Inspectez la page de la seconde langue dans la Search Console.** Collez son adresse dans la barre d’**Inspection de l’URL** et dépliez le détail de l’indexation : la canonique que vous avez déclarée et celle que Google a sélectionnée doivent toutes deux être l’adresse de cette page. Si Google a retenu l’autre langue, il voit la page comme une copie, et le rapport d’indexation des pages la classe parmi les doublons pour lesquels Google a choisi une autre canonique que la vôtre. Mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}} montre où se trouvent ces rapports.
3. **Lancez un audit sur un site plus grand.** Les crawlers SEO et les outils d’audit signalent les liens de retour manquants et les codes invalides sur toutes les pages, plus vite que cinquante codes sources lus un par un.

{{< screenshot id="hreflang-bilingual-website-03" alt="Inspection de l’URL dans la Search Console pour la version française d’un article de mlkwebstudio.com, avec la même adresse française en canonique déclarée et en canonique sélectionnée par Google" >}}

Voici les erreurs que je cherche en premier :

| Erreur | Ce qui se passe | Correction |
|---|---|---|
| Pas de lien de retour | Google peut ignorer la paire | Les mêmes lignes sur les deux versions |
| en-UK, uk ou fr_FR | La valeur est invalide ou désigne une autre langue | en-GB (ou en) et fr-FR (ou fr), avec un tiret |
| Canonique qui pointe vers l’autre langue | La seconde version est traitée comme une copie | La canonique de chaque version pointe vers elle-même |
| Lien vers une redirection, une 404 ou une page noindex | Google peut ignorer la paire | L’adresse finale, indexable |
| Redirection automatique selon le pays | Google risque de ne pas voir une version | La supprimer et ajouter un sélecteur de langue |
| Menu traduit, texte principal non | La page peut être traitée comme un doublon | Traduire toute la page, puis l’adapter |

## Votre checklist hreflang, et quand passer la main

Avant de dire que c’est fini :

1. Chaque langue a sa propre adresse, de préférence en sous-dossier.
2. Chaque version vise son marché : mot-clé, slug, titre, description, exemples et devise.
3. Chaque version liste toutes les versions, elle comprise, plus une valeur x-default.
4. Les codes sont valides : fr, en, fr-FR ou en-GB, jamais en-UK ni fr_FR.
5. Chaque adresse est complète et ouvre une page en ligne.
6. La canonique de chaque version pointe vers elle-même.
7. Aucune redirection automatique, et un sélecteur qui mène à la même page dans l’autre langue.
8. Le code source et l’inspection de l’URL vérifiés sur quelques pages dans chaque langue.

Si votre plateforme écrit les balises (extension WordPress, Wix Multilingual, Weglot), vous n’avez besoin de personne : faites une fois ces vérifications et consacrez votre temps au contenu de chaque version. Passer la main vaut la peine quand les balises sont tapées à la main sur des dizaines de pages, avec un domaine par pays, ou quand Google affiche toujours la mauvaise version sans que les vérifications expliquent pourquoi.
