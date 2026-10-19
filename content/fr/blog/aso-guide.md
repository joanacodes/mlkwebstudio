---
title: "ASO : comment l’App Store et Google Play classent les applications (débutants)"
seo_title: "ASO : référencement App Store et Google Play pour débuter"
description: "ASO pour débutants : comment fonctionne le référencement App Store et Google Play, ce qu’Apple et Google documentent et les premières corrections à faire."
slug: "aso-referencement-app-store"
translationKey: "aso-guide"
date: 2026-10-18T22:21:00+02:00
lastmod: 2026-10-18T22:21:00+02:00
category: "mobile-apps"
article_type: "guide"
keywords: ["ASO référencement App Store", "ASO", "référencement App Store", "référencement Google Play", "optimisation App Store", "mots-clés App Store"]
summary: "L’ASO est le référencement des applications dans l’App Store et Google Play : choisir les mots que chaque store compare aux recherches, puis rendre la fiche assez convaincante pour qu’on télécharge. Apple s’appuie sur le nom, le sous-titre, le champ de mots-clés et la catégorie principale, plus les téléchargements, les notes et les avis ; Google Play lit le titre, le nom du développeur et les descriptions, et peut réduire la visibilité des applications qui plantent trop."
cover: "aso-guide"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’un smartphone affichant la page d’une application et ses étoiles"
related: ["aso-keyword-research", "app-store-listing", "app-ratings-reviews", "mobile-app-launch-guide", "app-website-seo"]
services: ["seo"]
faq:
  - q: "L’ASO est-il gratuit ?"
    a: "Oui, en dehors du coût de vos comptes développeur : modifier votre fiche et lancer les tests A/B intégrés aux deux stores ne coûte rien. Les outils ASO payants estiment la fréquence des recherches et suivent vos positions, et la publicité relève d’un autre budget."
  - q: "Peut-on utiliser le nom d’une application concurrente comme mot-clé ?"
    a: "Non. Les conseils d’Apple pour la recherche dans l’App Store rangent les noms d’applications concurrentes et l’usage non autorisé de marques déposées parmi ce qu’il faut exclure des mots-clés, et le règlement de Google Play sur les métadonnées interdit les métadonnées trompeuses ou hors sujet. Votre fiche risque le refus ou le retrait."
  - q: "Combien de temps faut-il pour voir l’effet d’un changement ASO ?"
    a: "Ni Apple ni Google ne publient de délai, et votre position bouge aussi avec ce que font les applications concurrentes. Jugez un changement sur plusieurs semaines de données plutôt que sur quelques jours, en comparant des périodes de même durée avant et après."
  - q: "Apple Ads ou les campagnes Google Ads pour applications améliorent-elles le classement naturel ?"
    a: "Ni Apple ni Google ne l’affirment. La publicité achète une place dans les résultats ou au-dessus, puis renvoie vers votre fiche : une fiche faible gaspille donc aussi le budget publicitaire. Corrigez d’abord la fiche, puis testez la publicité avec un petit budget."
---

L’ASO (App Store Optimization), c’est le référencement de votre application dans l’App Store et Google Play : faire en sorte qu’elle soit trouvée quand quelqu’un cherche, puis choisie une fois affichée. La recherche pèse lourd : selon le chiffre qu’Apple publie sur son [site Apple Ads](https://ads.apple.com/app-store/advanced), près de 65 % des téléchargements ont lieu directement après une recherche dans l’App Store.

Bonne nouvelle pour les petites équipes : les leviers sont peu nombreux, gratuits et mieux documentés que ne le laissent croire la plupart des conseils ASO, qui présentent souvent des suppositions comme des règles. Dans ce guide, je sépare ce qu’Apple et Google documentent de ce que les spécialistes observent, store par store, et je termine par une checklist pour avant et après le lancement.

Il fait partie de mon {{< a key="mobile-app-launch-guide" >}}guide complet pour lancer une application mobile{{< /a >}}, qui couvre aussi la publicité et la sécurité.

## ASO et référencement App Store : ce qui change par rapport au SEO

L’ASO est aux stores ce que le SEO est à Google : vous reprenez les mots que les gens tapent, puis vous leur donnez une raison de vous choisir. Le travail a deux volets :

- **Le classement** : apparaître sur les recherches qui comptent, ce qui dépend des mots de votre fiche et de la façon dont les gens réagissent à votre application.
- **La conversion** : transformer un coup d’œil à votre icône, à votre nom et à vos premières captures d’écran en téléchargement.

Les stores vous laissent beaucoup moins de texte que le web. La recherche de l’App Store lit une poignée de champs courts, et la documentation d’Apple ne dit rien des liens ni des articles. Chaque caractère compte, et la conversion aussi, puisque ce que font les internautes face à votre fiche nourrit le classement.

Le site de votre application est un autre chantier : il se positionne sur Google, selon les principes de {{< a key="small-business-seo-guide" >}}mon guide du référencement naturel{{< /a >}}, et les points propres aux applications, comme la bannière intelligente, sont dans {{< a key="app-website-seo" >}}mon guide sur le SEO du site de votre application{{< /a >}}.

## Comment l’App Store classe les applications

Apple est étonnamment transparent sur ce point. Sa [page sur la recherche dans l’App Store](https://developer.apple.com/app-store/search/) (en anglais) explique que les résultats dépendent de la pertinence du texte, c’est-à-dire des correspondances avec le titre, le sous-titre, les mots-clés et la catégorie principale de l’app, et du comportement des utilisateurs : « téléchargements, notes et avis, et plus encore ». La catégorie secondaire, facultative, est elle aussi indexée.

| Champ | Limite | À savoir |
|---|---|---|
| Nom de l’app | 30 caractères | Simple et distinctif, il suggère ce que fait l’app |
| Sous-titre | 30 caractères | Affiché sous le nom ; modifié avec une nouvelle version |
| Mots-clés | 100 caractères | Invisible pour les utilisateurs ; termes séparés par des virgules |
| Catégories | Une principale, une secondaire facultative | Toutes deux indexées |

### Le champ de mots-clés, selon les règles d’Apple

- Ne répétez pas les mots déjà présents dans le nom, le sous-titre ou la catégorie.
- Évitez les pluriels de mots déjà utilisés (Apple les compte comme des doublons), les termes génériques comme « app » ou « jeu », et les mots vides comme « le » ou « de ».
- Séparez les termes par des virgules, sans espace ; l’espace reste possible à l’intérieur d’une expression.

Voici ce que cela donne pour l’application de réservation d’un studio de yoga fictif à Lyon, classée dans la catégorie Forme et santé :

```
Nom :        Lotus : cours de yoga
Sous-titre : Réservez vos séances à Lyon
Mots-clés :  pilates,méditation,étirements,planning,débutant,relaxation,respiration,studio,bien-être,zen
```

« Forme » et « santé » restent hors du champ, puisque la catégorie les couvre, tout comme « cours », déjà dans le nom.

Attention aux accents : la page d’Apple pour les développeurs parle de 100 caractères, mais la référence d’App Store Connect compte 100 octets, et une lettre accentuée occupe plus d’un octet. L’exemple ci-dessus fait 91 caractères pour 95 octets : gardez une marge.

{{< callout type="warning" >}}Apple prévient que l’usage abusif des mots-clés est une cause fréquente de refus dans l’App Store. Tenez-vous-en aux termes qui décrivent ce que fait réellement votre application.{{< /callout >}}

### Ce qui ne compte pas, et ce qu’Apple ne dit pas

- **Le texte promotionnel**, les 170 caractères au-dessus de la description, n’a selon Apple aucun effet sur le classement dans la recherche. Vous pouvez le modifier à tout moment sans nouvelle version : réservez-le aux nouveautés et aux offres.
- **La description** ne figure pas parmi les textes qu’Apple dit utiliser pour la recherche, et les spécialistes rapportent largement qu’elle n’est pas indexée. Écrivez-la pour les gens : Apple considère la première phrase comme la plus importante, car c’est ce qu’on lit sans toucher « plus ».

Côté comportement, Apple cite les téléchargements, les notes et les avis « et plus encore », sans pondération. Les spécialistes observent de façon constante que les téléchargements récents et la part des internautes qui téléchargent après une recherche pèsent lourd : c’est pourquoi une fiche qui convertit a tendance à monter. Voyez-y une observation solide, pas une règle documentée.

### Ce qui apparaît aussi dans les résultats

La page d’Apple cite, parmi les résultats de recherche, des cartes développeur, des achats intégrés, des événements intégrés, des pages produit personnalisées, des contenus éditoriaux et des publicités, ainsi que des tags qu’Apple génère avec de grands modèles de langage à partir des métadonnées saisies dans App Store Connect : raison de plus pour décrire votre application avec des mots clairs et précis.

Le premier résultat est souvent une publicité, vendue par {{< a key="apple-ads-tutorial" >}}Apple Ads{{< /a >}}, qui s’appelait Apple Search Ads jusqu’en avril 2025.

## Comment Google Play classe les applications

Google Play n’a pas de champ de mots-clés. La [page d’aide de Google sur la recherche Google Play](https://support.google.com/googleplay/android-developer/answer/4448378?hl=fr) indique que la recherche tient compte de plusieurs facteurs, comme le titre de l’application, le nom du développeur et les descriptions. C’est donc votre texte visible qui porte les mots-clés :

| Champ | Limite | À savoir |
|---|---|---|
| Nom de l’application | 30 caractères | Votre marque et votre terme principal |
| Description courte | 80 caractères | Votre accroche en une ligne |
| Description complète | 4 000 caractères | Écrite pour les gens, pas comme une liste de mots-clés |

Google insiste sur ce dernier point : ses conseils donnent en contre-exemple une suite de quasi-synonymes du type « car racing, car driving, race cars… » et demandent une présentation en langage courant. Le bourrage de mots-clés relève des règles anti-spam de Google Play.

### Le règlement sur les métadonnées

Le titre, l’icône et le nom du développeur doivent aussi respecter le règlement de Google Play sur les métadonnées :

- 30 caractères au maximum pour le titre ;
- ni emoji, ni émoticône, ni caractères spéciaux répétés ;
- aucune mention de performance ou de classement dans le store, du type « n° 1 » ou « application de l’année », et aucune mention de prix ou de promotion ;
- des majuscules seulement si elles font partie de votre marque.

« App de yoga n° 1 – GRATUITE » enfreint trois de ces règles d’un coup, et Google peut refuser ou retirer une fiche qui les ignore.

### La qualité compte : Android Vitals

Google est le seul des deux stores à documenter un signal de qualité technique. Sa [documentation Android Vitals](https://developer.android.com/google/play/vitals?hl=fr) indique que les signaux vitaux principaux influent sur la visibilité de votre application dans Google Play : au-delà d’un seuil de comportement insatisfaisant, Play peut réduire cette visibilité et afficher un avertissement sur votre fiche. Les deux seuils à connaître :

- taux de plantages perçus par les utilisateurs : 1,09 % tous appareils confondus, 8 % sur un modèle de téléphone donné ;
- taux d’ANR perçus (l’application qui se fige, « Application Not Responding ») : 0,47 % tous appareils confondus, 8 % sur un modèle de téléphone donné.

Vous les trouverez dans la rubrique **Android Vitals** de la Play Console. Si votre application dépasse ces seuils, corrigez les plantages avant de peaufiner les mots-clés.

### Ce que Google ne publie pas

Google ne dit pas combien comptent les installations, les notes ou la rétention. Les spécialistes rapportent de façon constante qu’elles pèsent, mais il n’existe aucune pondération officielle.

## App Store et Google Play côte à côte

| | App Store | Google Play |
|---|---|---|
| Nom | 30 caractères | 30 caractères |
| Deuxième ligne | Sous-titre, 30 caractères | Description courte, 80 caractères |
| Mots-clés cachés | Champ de 100 caractères | Aucun |
| Description longue | Absente des critères documentés | 4 000 caractères, lue par la recherche |
| Signal de qualité documenté | Aucun | Android Vitals |
| Tests A/B gratuits | Jusqu’à 3 variantes, 90 jours au maximum | Jusqu’à 3 variantes par test |
| Fiches supplémentaires | Jusqu’à 70 pages produit personnalisées | Jusqu’à 50 fiches personnalisées |

## Le classement ne fait pas tout : une fiche qui donne envie de télécharger

Une fois dans les résultats, votre application est jugée en une seconde. Sur l’App Store, les internautes voient votre icône, votre nom, votre sous-titre, votre note et, en l’absence de vidéo d’aperçu, vos une à trois premières captures d’écran, selon leur orientation. Apple autorise jusqu’à 10 captures et trois vidéos d’aperçu de 30 secondes au maximum, lues automatiquement sans le son.

- Rendez les trois premières captures lisibles à la taille des résultats : un bénéfice par capture, en gros caractères.
- Montrez l’application en train de faire ce que les gens ont cherché, pas votre logo.
- Gardez une icône simple : Apple conseille d’éviter les détails superflus pour qu’elle reste lisible à toutes les tailles.

Ensuite, testez au lieu de deviner ; les deux stores proposent des tests A/B gratuits :

- **Optimisation de la page produit** (App Store) : jusqu’à trois versions alternatives de votre icône, de vos captures et de vos vidéos face à la page d’origine, un test à la fois, pendant 90 jours au maximum. Les icônes alternatives doivent être intégrées à l’application.
- **Tests de fiche Play Store** (Google Play) : jusqu’à trois variantes face à votre fiche actuelle.

Quand une seule page ne peut pas parler à tout le monde, faites-en plusieurs. Les **pages produit personnalisées** d’Apple (jusqu’à 70 par app depuis octobre 2025) ont leurs propres captures, vidéos et texte promotionnel, et vous pouvez leur attribuer des mots-clés pour qu’elles apparaissent sur ces recherches à la place de la page par défaut. Les **fiches Play Store personnalisées** (jusqu’à 50) peuvent cibler un pays, un statut d’utilisateur ou d’acheteur, ou un mot-clé de recherche. Mon {{< a key="app-store-listing" >}}tutoriel sur la fiche App Store et Google Play{{< /a >}} reprend chaque champ.

## Notes et avis : signal de classement et vitrine

Les notes jouent un double rôle. Apple indique que les notes et les avis apparaissent dans les résultats de recherche et peuvent influer sur le classement dans l’App Store ; et dans les deux stores, la note affichée à côté de votre nom départage souvent deux applications proches.

- **Demandez au bon moment.** La demande de note système d’Apple peut s’afficher jusqu’à trois fois sur 365 jours : déclenchez-la après une réussite, comme une réservation confirmée, pas au premier lancement.
- **Répondez aux avis.** Les deux stores permettent de répondre publiquement, et une réponse calme et utile rassure toutes les personnes qui la lisent.
- **Corrigez ce que les avis répètent.** La note publique de Google Play privilégie les notes récentes : une version qui règle le principal reproche fait remonter votre note plus vite qu’une moyenne calculée sur toute la vie de l’application.

Les avis sont aussi une source d’informations gratuite. Quand j’écris les textes d’un site, je pars de ce dont les gens se plaignent ; pour une application, les avis à une et deux étoiles des applications concurrentes vous donnent exactement cela, avec les mots de vos futurs utilisateurs. Acheter ou fabriquer des avis enfreint les règles des deux stores : mon guide pour {{< a key="app-ratings-reviews" >}}obtenir plus d’avis 5 étoiles sans enfreindre les règles des stores{{< /a >}} détaille ce qui est permis.

## Localisation : les stores français et britannique

Chaque store traite une langue comme une fiche à part, avec son nom, son texte court et ses mots-clés : la localisation est donc le moyen le moins cher de toucher plus de recherches.

Côté App Store, le tableau des langues par pays d’Apple donne pour la France le français, avec l’anglais (Royaume-Uni) comme langue supplémentaire, et pour le Royaume-Uni l’anglais (Royaume-Uni). En pratique :

- écrivez la fiche **française** à partir des recherches faites en français plutôt qu’en traduisant vos mots-clés anglais ;
- si vous visez aussi le Royaume-Uni et que votre fiche n’existe qu’en anglais (États-Unis), ajoutez une localisation **anglais (Royaume-Uni)**, avec ses propres nom, sous-titre et champ de mots-clés ;
- localisez aussi les captures et les vidéos, comme le conseille Apple.

Apple ne précise pas comment la fiche anglaise supplémentaire sert dans les recherches en France : partez du principe que la fiche française est celle qui compte en France.

Sur Google Play, ajoutez une traduction par langue (fr-FR et en-GB), chacune avec son titre et ses descriptions ; Google note qu’une traduction professionnelle peut améliorer les résultats de recherche à l’étranger. Mon {{< a key="aso-keyword-research" >}}tutoriel de recherche de mots-clés ASO{{< /a >}} montre comment trouver les mots que les gens tapent, langue par langue.

## Mises à jour et événements intégrés

Une activité régulière donne aux internautes de nouvelles raisons de regarder votre application :

- **Les nouvelles versions** sont le moment de changer le sous-titre sur l’App Store, et le champ de mots-clés fait partie des informations de chaque version dans App Store Connect : prévoyez vos changements de mots-clés avec vos mises à jour.
- **Les événements intégrés** (App Store) mettent en avant quelque chose de limité dans le temps, comme un défi ou une séance en direct. Un événement dure jusqu’à 31 jours et peut être annoncé jusqu’à 14 jours avant son début, avec jusqu’à 10 événements publiés à la fois. Leurs cartes apparaissent dans les résultats de recherche pour les personnes qui ont déjà téléchargé votre application, et on peut aussi les rechercher directement. Ils sont examinés indépendamment des mises à jour, et un prix précis dans le texte de l’événement entraîne un refus.

## Mesurer l’ASO : où trouver les chiffres

Pas besoin d’outil payant pour savoir si votre ASO fonctionne : les deux consoles montrent d’où viennent les visiteurs.

**App Store Connect.** Ouvrez votre app, cliquez sur l’onglet **Analytics**, puis sur **Sources** sous **Acquisition** dans la barre latérale (libellés tels qu’Apple les documente en anglais). La source « App Store search » compte les personnes qui ont vu ou téléchargé votre application depuis une recherche, publicités dans les résultats comprises : mettez de côté vos chiffres Apple Ads si vous en faites. « App Store browse » couvre les onglets Aujourd’hui, Jeux et Apps, et « Web referrer » les visites venues de sites web, dont le vôtre. Apple calcule le taux de conversion en divisant le total des téléchargements par les impressions uniques.

**Play Console.** Les rapports d’acquisition de la fiche Play Store répartissent les visiteurs par source de trafic, et la dimension des termes de recherche liste ce que les visiteurs ont tapé avant d’arriver sur votre fiche. Google a remanié ces rapports en juillet 2026 pour ajouter les clics aux acquisitions : les libellés peuvent différer de ceux des anciens tutoriels.

{{< callout type="note" >}}Dans la Play Console, la source « Google Play search » ne compte que les personnes qui ont cherché le nom de votre application ou une marque étroitement associée. Les recherches génériques, les recherches par catégorie et les suggestions de saisie semi-automatique tombent dans « Google Play explore » : regardez-y avant de conclure que vos mots-clés n’amènent personne.{{< /callout >}}

Changez une chose à la fois et notez la date : deux mois plus tard, plus personne ne sait quel changement a fait bouger les chiffres.

## Votre première checklist ASO

1. Listez les recherches que vos futurs utilisateurs pourraient taper, puis vérifiez-les dans les suggestions de recherche de chaque store.
2. Placez votre terme le plus important dans le nom de l’application, sans transformer ce nom en liste.
3. Sur l’App Store, donnez au sous-titre un second terme et un bénéfice, puis remplissez le champ de mots-clés sans répétition, sans pluriel et sans espace après les virgules.
4. Sur Google Play, écrivez le titre et les deux descriptions pour les gens, avec vos termes principaux là où ils s’intègrent naturellement.
5. Rendez les trois premières captures lisibles à la taille des résultats.
6. Ajoutez une fiche française et une fiche anglais (Royaume-Uni) si vous visez la France et le Royaume-Uni.
7. Déclenchez la demande de note après une réussite, et répondez aux avis.
8. Ramenez les taux de plantages et d’ANR sous les seuils d’Android Vitals.
9. Lancez un seul test A/B à la fois et laissez-le aller jusqu’au résultat.
10. Consultez chaque mois vos sources de recherche dans App Store Connect et la Play Console.

Vous n’avez pas besoin d’une agence pour tout cela. Les outils ASO payants valent leur prix quand vous suivez des dizaines de mots-clés dans plusieurs pays ; pour une première fiche, les rapports des stores et un tableur suffisent. Un nom clair, des captures lisibles et une application stable font plus qu’un nouvel abonnement ; acheter des outils avant d’en avoir besoin, c’est le syndrome de l’objet brillant contre lequel je mets en garde en marketing.
