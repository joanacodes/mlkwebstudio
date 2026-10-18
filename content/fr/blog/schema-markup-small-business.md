---
title: "Données structurées : ce qui aide encore votre site sur Google et dans les IA"
seo_title: "Données structurées SEO : ce qui sert encore en 2026"
description: "Données structurées en 2026 : les balisages schema.org qui servent encore sur Google, ce que les IA en font vraiment, et le code JSON-LD à copier et tester."
slug: "donnees-structurees-seo"
translationKey: "schema-markup-small-business"
date: 2026-10-17T08:28:00+02:00
lastmod: 2026-10-17T08:28:00+02:00
category: "aio"
article_type: "tutorial"
keywords: ["données structurées", "données structurées SEO", "schema.org", "JSON-LD", "balisage LocalBusiness", "résultats enrichis"]
summary: "Les données structurées sont un code, souvent en JSON-LD, qui décrit votre entreprise et vos pages aux moteurs de recherche. En octobre 2026, les balisages Organization ou LocalBusiness, BreadcrumbList et Product valent encore la peine, mais les résultats FAQ et HowTo ont disparu de Google. Côté IA, aucun effet démontré : Google dit que ses fonctions d’IA n’exigent aucun balisage spécial, et une étude d’Ahrefs sur 1 885 pages n’a vu aucune hausse notable des citations."
cover: "schema-markup-small-business"
cover_alt: "Fenêtre de terminal avec une requête web qui répond 200 OK, à côté du mot Schema.org"
related: ["local-seo-guide", "geo-vs-seo", "google-ai-overviews-ai-mode", "on-page-seo-checklist", "squarespace-code-injection"]
services: ["seo"]
faq:
  - q: "Les données structurées sont-elles un facteur de classement ?"
    a: "Pas directement. Google s’en sert pour comprendre une page et décider s’il peut afficher un résultat enrichi, mais un balisage valide ne fait pas monter une page à lui seul. Ce que dit la page, et les recherches auxquelles elle répond, décident toujours de sa position."
  - q: "JSON-LD, microdonnées ou RDFa : quel format choisir ?"
    a: "Le JSON-LD. Google lit les trois formats, mais recommande le JSON-LD dès que votre site le permet, car c’est le plus simple à ajouter et à entretenir. Les microdonnées et le RDFa s’insèrent dans le HTML du contenu visible : chaque changement de mise en page risque de les casser."
  - q: "Combien de temps faut-il pour que les données structurées apparaissent dans Google ?"
    a: "Google doit d’abord explorer et traiter de nouveau la page, ce qui peut prendre de quelques jours à plusieurs semaines. Une demande d’indexation dans l’outil Inspection de l’URL de la Search Console peut accélérer l’exploration."
  - q: "Les données structurées valent-elles la peine pour un site d’une seule page ?"
    a: "Oui, avec un seul bloc : un balisage LocalBusiness ou Organization sur cette page suffit. Un site d’une page n’a pas de fil d’Ariane à baliser."
  - q: "Peut-on rédiger ses données structurées avec ChatGPT ou un générateur ?"
    a: "Oui, c’est un bon usage de ces outils : donnez-leur vos vraies informations et demandez du JSON-LD. Vérifiez ensuite chaque valeur par rapport à votre page, supprimez ce qui a été inventé, comme une note ou des horaires, et passez le résultat dans le Test des résultats enrichis."
---

Les données structurées sont un bloc de code, en général au format JSON-LD, qui décrit une page aux moteurs de recherche avec le vocabulaire commun schema.org : le nom de votre entreprise, son adresse, son téléphone et ses horaires, le service vendu sur une page, le prix d’un produit. Vos visiteurs ne les voient pas.

En octobre 2026, reste à savoir lesquelles servent encore : Google a supprimé plusieurs des résultats enrichis qu’elles permettaient, dont les FAQ en mai 2026, et des offres de « schema pour l’IA » promettent une place dans ChatGPT. Ma réponse courte : trois ou quatre types valent encore un après-midi de travail, rien ne montre qu’un seul d’entre eux vous fasse citer par un assistant IA, et vous pouvez laisser le reste de côté.

Ce tutoriel fait partie de mon {{< a key="ai-search-geo-guide" >}}guide complet du référencement IA{{< /a >}}.

## Les données structurées, qu’est-ce que c’est ?

Une personne qui lit votre page Contact sait que « 12 rue Exemple, 75011 Paris » est une adresse. Un robot n’y voit qu’une ligne de texte, sauf si le balisage la désigne comme telle.

Tous les exemples de ce tutoriel sont en JSON-LD : un seul bloc `<script>` dans le code de la page, à l’écart de votre mise en page. Ce bloc peut :

- rendre une page éligible à un résultat enrichi, comme un prix et une disponibilité sous un produit, ou un fil d’Ariane à la place de l’adresse de la page ;
- aider Google à relier votre site à votre entreprise, grâce aux mêmes nom, logo, adresse et téléphone que sur votre fiche Google et vos réseaux sociaux ;
- décrire vos services et vos produits sous une forme que n’importe quel robot lit sans deviner.

Rien n’est garanti pour autant : **un balisage valide rend une page éligible à un résultat enrichi ; c’est Google qui décide de l’afficher.**

## Les données structurées encore affichées par Google en 2026

En 2023, les résultats HowTo ont disparu et les résultats FAQ ont été réservés aux sites gouvernementaux et de santé reconnus. Depuis janvier 2025, les résultats sur mobile n’affichent plus que le domaine à la place du fil d’Ariane, toujours visible sur ordinateur. Les résultats FAQ ont disparu pour tous le 7 mai 2026 et, selon la documentation de Google, le Test des résultats enrichis et les rapports de la Search Console ne les prennent plus en charge depuis juin 2026. Le balisage FAQ, lui, reste valide : Google ne l’affiche simplement plus.

Voici, en octobre 2026, où en sont les types utiles à une petite entreprise :

| Type | Ce que Google en fait | À ajouter ? |
|---|---|---|
| `Organization` | Aide Google à identifier votre entreprise ; peut influer sur le logo affiché dans les résultats et dans votre panneau de connaissances | Oui, sur la page d’accueil |
| `LocalBusiness` et ses sous-types | Un type pris en charge par Google pour votre adresse, votre téléphone et vos horaires | Oui, si vos clients viennent chez vous ou si vous intervenez dans une zone locale |
| `BreadcrumbList` | Fil d’Ariane dans les résultats sur ordinateur | Oui, sur chaque page sous l’accueil |
| `Product` avec une `Offer` | Prix, disponibilité et notes dans les résultats | Oui, si vous vendez en ligne ou affichez vos prix |
| `Event` | Détails de l’événement dans les résultats | Si vous organisez des événements publics |
| `Service` | Aucun résultat enrichi | Facultatif, et peu coûteux sur un site codé |
| `FAQPage` | Plus de résultat enrichi depuis le 7 mai 2026 (réservé aux sites gouvernementaux et de santé dès 2023) | Gardez-le s’il existe ; ne l’ajoutez pas |
| `HowTo` | Plus de résultat enrichi depuis 2023 | Non |

`LocalBusiness` est une forme plus précise d’`Organization` : une entreprise installée à une seule adresse utilise l’un ou l’autre, pas les deux. Choisissez le sous-type le plus précis qui vous corresponde. Schema.org prévoit des types pour les plombiers, les électriciens, les dentistes, les restaurants et bien d’autres métiers.

Une limite compte pour une entreprise locale : les résultats de la carte dépendent de votre fiche d’établissement Google bien plus que de votre code, comme l’explique mon guide du {{< a key="local-seo-guide" >}}référencement local{{< /a >}}.

## Les données structurées aident-elles à apparaître dans ChatGPT et les IA ?

Rien ne le montre à ce jour. Voici ce qui est documenté :

1. **Google dit que ses fonctions d’IA n’exigent aucun balisage spécial.** Son guide d’optimisation pour les Aperçus IA et le Mode IA, publié le 15 mai 2026, présente ce travail comme du SEO classique et range le balisage spécial parmi ce dont la recherche Google n’a pas besoin ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=fr)). Pour être éligible à ces réponses, une page doit seulement être indexée et pouvoir afficher un extrait.
2. **Ahrefs n’a mesuré aucun effet notable.** Dans une étude publiée en mai 2026, Ahrefs a suivi 1 885 pages qui ont ajouté du JSON-LD entre août 2025 et mars 2026, et les a comparées à 4 000 pages témoins. Résultat : les citations ont progressé de 2,2 % dans ChatGPT et de 2,4 % dans le Mode IA, trop peu pour les distinguer du hasard, et reculé de 4,6 % dans les Aperçus IA, une baisse dont l’étude ne tranche pas la cause ([étude d’Ahrefs](https://ahrefs.com/blog/schema-ai-citations/), en anglais). L’étude partait d’un constat trompeur : les pages citées par les IA portent presque trois fois plus souvent du JSON-LD, mais ce sont surtout des sites mieux entretenus.
3. **Microsoft dit que cela aide ses modèles à lire les pages.** En mars 2025, lors d’une conférence, l’équipe de Bing a indiqué que les données structurées aident ses modèles de langage à comprendre un contenu, ce qui concerne Bing et Copilot ([Search Engine Land](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455), en anglais). Pour ChatGPT, Gemini et Perplexity, rien n’est documenté.

Être lu plus facilement et être cité plus souvent sont deux choses différentes, et seule la première est étayée. Les assistants citent les pages qui répondent bien à la question, et les entreprises dont d’autres sites parlent. Mon article {{< a key="geo-vs-seo" >}}GEO vs SEO{{< /a >}} explique où porter cet effort.

{{< callout type="tip" >}}**Si vous ajoutez des données structurées, placez-les dans le HTML de la page.** Googlebot exécute le JavaScript : il lit le balisage qu’un gestionnaire de balises ou un widget ajoute après le chargement. GPTBot, ClaudeBot et PerplexityBot n’exécutent pas le JavaScript : pour eux, ce balisage n’existe pas.{{< /callout >}}

## Les balisages dont une petite entreprise a besoin

Sur les sites que je code, le principe est toujours le même, et vous pouvez le reprendre :

- **Page d’accueil :** un bloc pour l’entreprise, `LocalBusiness` (ou son sous-type le plus précis) si vous recevez des clients ou intervenez dans une zone précise, `Organization` sinon.
- **Pages de services :** un bloc `Service` pour le service présenté.
- **Pages produits :** un bloc `Product`, avec une `Offer` si la page affiche un prix.
- **Chaque page sous l’accueil :** un `BreadcrumbList`.

Le site Toshiba de Pilotech, par exemple, a des données structurées pour l’entreprise, pour chacune de ses dix gammes et pour chaque service ; vous le trouverez depuis la {{< a page="/projects/pilotech-toshiba" >}}page du projet Pilotech Toshiba{{< /a >}}. Le site bilingue d’Eden Corporate Mobility décrit l’agence, le fil d’Ariane et la FAQ. Sur le portail d’entrée de Pilotech, prêt à être mis en ligne, les données structurées présentent Pilotech comme une entreprise de génie climatique francilienne, et schema.org a même un type pour cela : `HVACBusiness`.

Sur mes projets, les métadonnées viennent en dernier, une fois que le client est satisfait du design et des textes. Traitez les données structurées de la même façon : le balisage doit décrire ce que disent les pages finales.

### LocalBusiness : le bloc de votre page d’accueil

Voici un bloc complet pour un électricien fictif à Paris. Remplacez chaque valeur par la vôtre, et supprimez toute ligne que vous ne pouvez pas remplir honnêtement :

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://www.example.com/#entreprise",
  "name": "Électricité Exemple",
  "url": "https://www.example.com/",
  "logo": "https://www.example.com/images/logo.png",
  "image": "https://www.example.com/images/equipe.jpg",
  "telephone": "+33 1 99 00 12 34",
  "email": "contact@example.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "12 rue Exemple",
    "addressLocality": "Paris",
    "postalCode": "75011",
    "addressCountry": "FR"
  },
  "areaServed": ["Paris", "Hauts-de-Seine", "Val-de-Marne"],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }],
  "sameAs": [
    "https://www.facebook.com/votre-page",
    "https://www.linkedin.com/company/votre-entreprise"
  ]
}
</script>
```

Quelques règles pour le vôtre :

- **Recopiez votre nom, votre adresse et votre téléphone exactement comme sur votre fiche Google et votre page Contact.** Une seule version de chaque, partout.
- `@id` est une étiquette de votre choix vers laquelle vos autres blocs peuvent pointer, comme le fait l’exemple de service plus bas.
- `sameAs` liste vos profils sur d’autres sites, pour qu’ils soient rattachés à la même entreprise.
- Les jours de la semaine restent en anglais : ce sont des valeurs de schema.org.
- Si vous travaillez depuis chez vous et masquez votre adresse sur votre fiche Google, retirez aussi la rue ici et gardez la ville.

### Service, Product et BreadcrumbList : les blocs plus courts

Une page de service reçoit un court bloc qui renvoie à l’entreprise grâce à son `@id` :

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Installation de borne de recharge",
  "serviceType": "Installation de borne de recharge pour véhicule électrique",
  "provider": { "@id": "https://www.example.com/#entreprise" },
  "areaServed": ["Paris", "Hauts-de-Seine", "Val-de-Marne"],
  "url": "https://www.example.com/borne-de-recharge/"
}
```

Une page produit reçoit un bloc `Product` avec le nom, l’image, la description et la marque du produit. Google n’affiche un résultat enrichi produit que si le bloc contient aussi une propriété `offers` avec un prix, un `review` ou un `aggregateRating` : un catalogue sans prix ni avis décrit ses produits, mais n’obtient aucun résultat enrichi.

Chaque page sous l’accueil reçoit son fil d’Ariane, dans le même ordre que celui affiché sur la page. Le dernier élément n’a pas besoin d’adresse, puisque c’est la page elle-même :

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.example.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.example.com/services/" },
    { "@type": "ListItem", "position": 3, "name": "Installation de borne de recharge" }
  ]
}
```

Placez chaque bloc dans sa propre balise `<script type="application/ld+json">`, comme dans le premier exemple.

## Ajouter les données structurées à votre site

Quelle que soit votre plateforme, commencez par vérifier ce qu’elle produit déjà : collez l’adresse de votre page d’accueil dans le Schema Markup Validator (voir la partie sur les tests plus bas). Beaucoup de plateformes et d’extensions SEO ajoutent un bloc de base d’elles-mêmes, que le vôtre ne doit pas contredire.

### Sur un site codé à la main, Hugo ou Jekyll

Ajoutez les blocs dans le `<head>` de vos modèles, et générez-les à partir des mêmes données que les pages plutôt qu’à la main. Sur le site unifié que j’ai conçu pour Pilotech, les 29 fiches produits reposent sur des données et un gabarit unique, et chaque page a ses propres données structurées : une nouvelle gamme reçoit sa page et son balisage en même temps.

### Sur Squarespace

Squarespace produit déjà un balisage de base (site, entreprise, produits, événements, articles de blog), en partie à partir des informations sur l’entreprise saisies dans vos paramètres, et vous ne pouvez pas le modifier directement. Remplissez d’abord ces informations, puis regardez ce que trouve le validateur.

Pour ce qui manque, la voie est l’injection de code : le champ d’en-tête commun à tout le site pour un bloc d’entreprise plus complet, qui reprend exactement les mêmes informations, et le champ d’en-tête de chaque page, dans ses paramètres (onglet **Advanced** de l’interface en anglais), pour son bloc de service ou de fil d’Ariane. L’injection de code n’est pas incluse dans toutes les formules, et Squarespace a déplacé ses menus plus d’une fois : mon tutoriel sur l’{{< a key="squarespace-code-injection" >}}injection de code Squarespace{{< /a >}} donne les étapes à jour.

{{< screenshot id="schema-markup-small-business-01" alt="Paramètres d’une page Squarespace, onglet Advanced, avec un bloc JSON-LD collé dans le champ d’injection de code de l’en-tête de la page" >}}

### Sur WordPress et les autres outils

Une extension SEO comme Yoast SEO ou Rank Math produit déjà un bloc pour votre site et ses pages. Remplissez ses réglages pour votre entreprise (nom, logo, réseaux sociaux), et passez par ses options ou son module pour entreprise locale pour l’adresse et les horaires, plutôt que de coller un second bloc. Ailleurs, cherchez un champ de données structurées ou de code personnalisé dans les réglages SEO de la page. S’il n’y en a pas, votre fiche Google compte davantage que le balisage qui vous manque.

## Tester vos données structurées

Testez une page de chaque type avant de publier, puis laissez la Search Console surveiller tout le site.

1. Ouvrez le [Test des résultats enrichis](https://search.google.com/test/rich-results?hl=fr) de Google, saisissez l’adresse d’une page (ou collez votre code dans l’onglet **Code**) et lancez le test.

{{< screenshot id="schema-markup-small-business-02" alt="Page d’accueil du Test des résultats enrichis de Google, avec les onglets URL et Code" >}}

2. Lisez le résultat : il liste chaque type affichable par Google trouvé sur la page, comme le fil d’Ariane, avec ses erreurs et ses avertissements. **Une erreur rend la page inéligible au résultat enrichi concerné** ; un avertissement signale une propriété facultative, à ajouter seulement si elle est vraie.

{{< screenshot id="schema-markup-small-business-03" alt="Résultat du Test des résultats enrichis listant les éléments détectés sur une page, avec leurs erreurs et avertissements" >}}

3. Passez la même page dans le Schema Markup Validator, à l’adresse `validator.schema.org`. Il lit tous les types schema.org, y compris ceux que le Test des résultats enrichis laisse de côté faute de résultat enrichi chez Google, comme `Service` et, depuis juin 2026, `FAQPage`.

{{< screenshot id="schema-markup-small-business-04" alt="Schema Markup Validator affichant les blocs LocalBusiness, Service et BreadcrumbList trouvés sur une page" >}}

4. Après la mise en ligne, passez par la Search Console. L’outil **Inspection de l’URL** montre les types de résultats enrichis détectés sur une page, et chaque type présent sur votre site a son propre rapport dans le menu de gauche, sous **Améliorations** (ou **Shopping** pour les produits). Une fois une erreur corrigée, cliquez sur **Valider la correction** dans ce rapport. Mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}} explique la mise en place.

{{< screenshot id="schema-markup-small-business-05" alt="Rapport Fil d’Ariane de la Search Console avec les éléments valides et ceux qui présentent des problèmes" >}}

## Les erreurs qui privent de résultats enrichis

- **Baliser ce que la page ne montre pas.** Les consignes de Google demandent que le balisage décrive un contenu visible par les visiteurs. Des horaires absents de la page ou un service que vous ne présentez pas enfreignent cette règle, et un balisage trompeur peut valoir une action manuelle qui supprime vos résultats enrichis jusqu’à la correction.
- **Ajouter votre propre note en étoiles.** Google n’affiche pas d’étoiles pour les avis qu’une entreprise publie sur elle-même : un `aggregateRating` recopié de vos avis Google ne rapporte rien sur votre propre site. Les étoiles à côté de votre nom dans Google Maps viennent de votre fiche.
- **Deux blocs qui se contredisent.** Si le bloc d’une extension donne un numéro de téléphone et le vôtre un autre, corrigez la source plutôt que d’ajouter un troisième bloc.
- **Oublier le balisage quand quelque chose change.** Si vous déménagez, changez de numéro ou d’horaires, mettez-le à jour le même jour que votre fiche Google.

{{< callout type="warning" >}}**Ne payez pas pour un « schema pour l’IA ».** Si une offre censée vous faire apparaître dans ChatGPT repose sur les données structurées, demandez ce qu’elle comprend d’autre. Le balisage de ce tutoriel prend un après-midi, et son effet se voit surtout sur Google.{{< /callout >}}

## Votre check-list des données structurées

1. Collez l’adresse de votre page d’accueil dans le Schema Markup Validator pour voir ce que votre site produit déjà.
2. Ajoutez ou complétez un bloc `LocalBusiness` ou `Organization` sur la page d’accueil, avec les mêmes nom, adresse et téléphone que votre fiche Google.
3. Ajoutez un `BreadcrumbList` à chaque page sous l’accueil, un bloc `Product` aux pages produits et, si cela vous coûte peu, un bloc `Service` aux pages de services.
4. Testez une page de chaque type dans le Test des résultats enrichis, corrigez les erreurs, puis publiez.
5. Quelques semaines plus tard, consultez les rapports de la Search Console.
6. Laissez le balisage FAQ en place s’il existe, oubliez HowTo, et consacrez le temps gagné à vos pages et à votre fiche Google.

Les données structurées sont une ligne de ma check-list {{< a key="on-page-seo-checklist" >}}SEO on-page{{< /a >}}, et elles méritent à peu près cette part de votre temps. Pour Pilotech, dont le site Teknopoint est en première ou deuxième position sur Google, le travail SEO s’est fait dans cet ordre : les pages, le contenu, la fiche Google, puis les corrections techniques. Le balisage appartient à ce dernier groupe. Si votre fiche n’est pas encore terminée, mon tutoriel sur la {{< a key="google-business-profile-setup" >}}fiche Google My Business{{< /a >}} passe avant.

Sur Squarespace, ou sur WordPress avec une extension SEO, c’est un travail que vous pouvez faire vous-même, sans moi. Confiez-le quand le balisage doit être généré pour des dizaines de produits ou de pages : cela se règle dans les modèles du site.
