---
title: "Référencement Squarespace : les 8 réglages SEO à faire, étape par étape"
seo_title: "Référencement Squarespace : les 8 réglages SEO pas à pas"
description: "Référencement Squarespace pas à pas : titres et descriptions SEO, URL, texte alternatif, redirections 301, sitemap, Search Console, robots IA et llms.txt."
slug: "referencement-squarespace-reglages-seo"
translationKey: "squarespace-seo"
date: 2026-10-17T08:09:00+02:00
lastmod: 2026-10-17T08:09:00+02:00
category: "seo"
article_type: "tutorial"
keywords: ["référencement Squarespace", "SEO Squarespace", "réglages SEO Squarespace", "redirection 301 Squarespace", "sitemap Squarespace", "Squarespace Google Search Console"]
summary: "Le référencement Squarespace repose sur quelques réglages : un titre SEO, une description et une URL courte par page, un format de titre pour le site, un texte alternatif par image, des redirections 301 et un sitemap envoyé à Google Search Console. Rendez le site public et, si vous voulez que les assistants IA vous trouvent, ne bloquez pas leurs robots. Avec ces réglages et les bons mots-clés, un site Squarespace que j’ai créé se classe premier ou deuxième sur Google."
cover: "squarespace-seo"
cover_alt: "Barre de recherche au-dessus d’une liste de résultats dont le premier est mis en avant, à côté des mots Squarespace SEO et d’un ordinateur portable"
related: ["squarespace-tutorial", "on-page-seo-checklist", "google-search-console-tutorial", "wordpress-to-squarespace", "robots-txt-ai-crawlers"]
services: ["seo"]
faq:
  - q: "Squarespace est-il bon pour le référencement ?"
    a: "Oui, pour le site d’une petite entreprise. Il gère les bases techniques (sitemap, HTTPS, affichage adapté au mobile) et vous donne les champs qui comptent. Comme il est fermé, un développeur a moins de marge que sur un site codé sur mesure ou sous WordPress, mais votre positionnement dépend bien plus de vos mots-clés, de votre contenu et des liens vers votre site."
  - q: "Quelle différence entre le titre de page et le titre SEO sur Squarespace ?"
    a: "Le titre de page est le nom que vous donnez à la page dans Squarespace. Le titre SEO, dans l’onglet SEO des paramètres de la page, est celui qu’utilisent les navigateurs et les moteurs de recherche, jusqu’à 100 caractères. Laissé vide, il est remplacé par le titre de page."
  - q: "Combien de temps pour qu’un nouveau site Squarespace apparaisse sur Google ?"
    a: "Une fois le site public et le sitemap envoyé, Google explore en général les nouvelles pages en quelques jours à quelques semaines. Se positionner prend plus longtemps : d’après les conseils de Google pour choisir un prestataire SEO, il faut en général de quatre mois à un an. Pour un client, le site s’est positionné en un ou deux jours : c’est rare, et je ne le promettrais pas."
  - q: "À quoi sert l’outil AI Visibility de Squarespace ?"
    a: "Il suit la façon dont votre entreprise apparaît dans ChatGPT et Gemini, et n’est proposé pour l’instant que sur les sites en anglais en version 7.1 (donc pas sur un site en français). Il mesure votre visibilité, il ne la change pas. Ce qui vous fait citer, c’est le même travail que pour Google : des pages claires sur ce que vous faites et où, et des mentions de votre entreprise sur d’autres sites."
  - q: "Un site Squarespace peut-il se positionner en français et en anglais ?"
    a: "Oui, mais Squarespace n’a pas de traduction intégrée : vous créez les pages de chaque langue vous-même ou vous ajoutez un service de traduction comme Weglot. Donnez à chaque version son titre SEO, sa description et son URL dans sa langue, et ajoutez des balises hreflang pour que Google montre la bonne version à chacun. Weglot indique que son extension les ajoute pour vous ; sinon, elles se placent dans l’injection de code d’en-tête de chaque page, disponible à partir de l’abonnement Essentiel."
---

Le référencement Squarespace consiste surtout à remplir ce que la plateforme vous donne déjà : un titre SEO et une description pour chaque page, des URL courtes, un texte alternatif sur les images, des redirections quand une adresse change et un sitemap connu de Google Search Console. Ce tutoriel les passe en revue un par un, dans l’ordre d’une mise en ligne, sur Squarespace 7.1. Les menus sont cités tels qu’ils apparaissent dans l’interface anglaise en octobre 2026 ; en français, les libellés sont traduits, mais les réglages restent les mêmes.

Une réserve d’abord. Squarespace est une plateforme fermée : vous n’avez pas accès au code source, donc un site codé sur mesure ou un site WordPress bien construit laisse plus de marge à un spécialiste, et peut mieux se positionner pour cette raison. Pourtant, le premier site que j’ai créé pour Pilotech tourne sur Squarespace et se classe premier ou deuxième sur Google, avec des métadonnées soignées et les bons mots-clés.

Si je fais passer sur Squarespace les clients qui modifient eux-mêmes leur site vitrine, c’est qu’ils peuvent y changer une page sans que toute la structure s’effondre, et chaque réglage ci-dessous est à leur portée. Si votre site n’est pas encore construit, commencez par mon {{< a key="squarespace-tutorial" >}}tuto Squarespace{{< /a >}}. Ce tutoriel fait partie de mon {{< a key="small-business-seo-guide" >}}guide complet du référencement naturel{{< /a >}}, qui couvre les mots-clés, le contenu et les liens.

## Ce que couvre le référencement Squarespace, et ce qui reste à votre charge

Squarespace gère les bases techniques. À vous de remplir les champs, et ce sont les mots-clés que vous y mettez qui font la différence.

| | Ce que fait Squarespace | Ce que vous faites |
|---|---|---|
| Sitemap | Le génère à l’adresse `/sitemap.xml` | L’envoyer dans Google Search Console (étape 7) |
| HTTPS | Inclut le certificat SSL | Rien |
| Mobile | Les modèles s’adaptent aux petits écrans | Vérifier vos pages principales sur votre téléphone |
| Titres de page | Les construit à partir d’un format commun | Régler le format, puis un titre SEO par page (étapes 2 et 3) |
| Descriptions | Prévoit un champ sur chaque page | En écrire une par page (étape 3) |
| URL | En crée une à la création de la page | La raccourcir ; renommer la page ne la met pas à jour (étape 4) |
| Images | Les héberge et les affiche | Écrire le texte alternatif (étape 5) |
| Redirections | Rien tant que vous n’en ajoutez pas | Les ajouter dans URL mappings (étape 6) |
| Mots-clés et contenu | Rien | Tout : c’est ce qui vous positionne |

Avant d’ouvrir le moindre réglage, choisissez un mot-clé principal par page : les mots qu’un client taperait pour trouver ce service, souvent avec votre ville. Une page, un service, un mot-clé. Parmi les sites que j’ai créés pour le fondateur de Pilotech, celui qui proposait trop de services n’a pas fonctionné du tout ; celui qui est en tête vend des services très précis.

## Étape 1 : vérifier que les moteurs de recherche voient le site

Une page que Google ne peut pas atteindre ne se positionnera pas, aussi bon que soit son titre. Quatre réglages peuvent cacher un site ou une page Squarespace aux moteurs de recherche, et il faut les vérifier tous les quatre avant la mise en ligne :

1. Dans **Settings** (paramètres), ouvrez **Site availability** (disponibilité du site) et choisissez **Public**. Tout site Squarespace démarre en privé, et seul un site avec un abonnement payant peut être public : un site en essai gratuit reste hors de Google.
2. Si vous avez protégé le site par un mot de passe pendant sa construction, retirez-le. Il empêche Google d’indexer votre contenu, et des pages indexées avant son ajout peuvent rester un moment dans les résultats.
3. Vérifiez qu’aucune page importante n’a l’option **Hide page from search results** activée. L’étape 3 explique ce réglage.
4. Dans **Settings**, ouvrez **Crawlers** (robots d’exploration) et vérifiez que l’option qui bloque les robots des moteurs de recherche est désactivée : activée, elle ferme tout le site à Google. L’option IA du même panneau est traitée à l’étape 8.

{{< screenshot id="squarespace-seo-01" alt="Panneau Site availability de Squarespace avec l’option Public sélectionnée" >}}

Commencez par là : Squarespace ne publie votre sitemap qu’une fois le site public.

## Étape 2 : régler les formats de titre de tout le site

Le titre que Google affiche pour une page vient en général de sa balise title, que Squarespace construit à partir de formats réglés une fois pour tout le site. Ouvrez le panneau **SEO/AI Visibility** et cliquez sur **SEO Settings** : les formats de titre s’y trouvent, avec un format pour la page d’accueil, un pour les pages et un pour les éléments de collection comme les articles de blog. Ils utilisent trois variables :

- `%s` : le titre du site, en principe le nom de votre entreprise ;
- `%p` : le titre SEO de la page ;
- `%i` : le titre SEO d’un élément de collection, comme un article de blog.

Pour un chauffagiste à Lyon, cela pourrait donner :

```
Page d’accueil :          %s | Dépannage et entretien de chaudières à Lyon
Pages :                   %p | %s
Éléments de collection :  %i | %s
```

La page d’accueil demande le plus de soin, car elle n’a pas de champ de titre SEO dans ses paramètres : sa balise title vient uniquement de ce format. Indiquez le nom de votre entreprise et ce que vous faites, avec votre ville si votre clientèle est locale. Gardez un titre de site court, puisque le format `%p | %s` l’ajoute à la fin de chaque titre de page.

La page d’accueil a aussi besoin d’une description, le court texte que Google peut afficher sous son titre. L’[aide de Squarespace sur les descriptions SEO](https://support.squarespace.com/hc/fr-fr/articles/206016198) indique où l’ajouter.

{{< screenshot id="squarespace-seo-02" alt="Panneau SEO/AI Visibility de Squarespace, SEO Settings, avec les formats de titre de la page d’accueil, des pages et des éléments de collection" >}}

## Étape 3 : écrire un titre SEO et une description pour chaque page

Chaque autre page a ses propres champs SEO. Dans le panneau **Pages**, cliquez sur l’icône d’engrenage à côté d’une page et ouvrez l’onglet **SEO** :

- **SEO title** (titre SEO) : le titre qu’utilisent les navigateurs et les moteurs de recherche, jusqu’à 100 caractères. Laissé vide, il reprend le titre de la page, souvent un seul mot comme « Services ».
- **SEO description** (description SEO) : le texte que Google peut afficher sous le titre. Les moteurs de recherche le coupent vers 160 caractères : dites l’essentiel en premier.

Placez le mot-clé de la page au début du titre et écrivez la description comme une petite annonce : ce que vous proposez, où, et pourquoi vous choisir. Pour le même chauffagiste :

```
Titre SEO :        Dépannage de chaudière à Lyon
Description SEO :  Techniciens qualifiés pour le dépannage et l’entretien de chaudières toutes marques à Lyon et Villeurbanne. Prix clairs ; appelez ou réservez en ligne.
```

Avec le format `%p | %s`, Google reçoit « Dépannage de chaudière à Lyon | Nom de votre entreprise ». Il affiche parfois un autre passage de la page, mais une description claire et exacte lui donne une bonne option, et c’est sur ces deux lignes que l’internaute décide de cliquer.

{{< callout type="tip" >}}J’écris les métadonnées en dernier, une fois que le client a validé le design et les textes, juste avant de relier le domaine et de publier. Ainsi, les titres décrivent les pages telles qu’elles seront mises en ligne.{{< /callout >}}

{{< screenshot id="squarespace-seo-03" alt="Paramètres d’une page Squarespace, onglet SEO, avec les champs SEO title et SEO description remplis" >}}

Ma {{< a key="on-page-seo-checklist" >}}checklist SEO on-page{{< /a >}} couvre le reste de chaque page : intertitres, textes et liens internes.

### Masquer les pages dont Google n’a pas besoin

Le même onglet SEO propose l’option **Hide page from search results** (masquer la page des résultats de recherche). Activez-la pour les pages qui n’apportent rien à un internaute, comme la page de remerciement après un formulaire ou une page de test. La page reste publique et apparaît toujours dans la recherche interne du site. La page d’accueil et les éléments de collection pris un par un, comme un article de blog, n’ont pas cette option, et masquer une page de collection masque tous ses éléments.

Déplacer une page dans la section **Not linked** (pages non liées) du panneau Pages fait autre chose : la page sort seulement de votre menu. Google peut toujours la trouver et l’indexer.

## Étape 4 : raccourcir les URL de vos pages

Le slug est la fin de l’adresse d’une page : `depannage-chaudiere-lyon` dans `votreentreprise.fr/depannage-chaudiere-lyon`. Squarespace le fixe à la création de la page et ne le change pas quand vous la renommez.

Pour le modifier, ouvrez les paramètres de la page avec l’icône d’engrenage, allez dans l’onglet **General** (général) et changez le champ **URL slug**. Une bonne URL :

- tient en quelques mots en minuscules, sans accents, reliés par des tirets ;
- contient le mot-clé de la page, sans mots inutiles ni dates ;
- décrit une seule page : `/depannage-chaudiere-lyon`, pas `/services-2`.

Les articles de blog et les produits ont leur propre réglage d’URL dans leurs paramètres, avec les mêmes règles.

{{< screenshot id="squarespace-seo-04" alt="Paramètres d’une page Squarespace, onglet General, avec le champ URL slug" >}}

Si la page est déjà en ligne, changer son slug crée une nouvelle adresse. Ajoutez tout de suite une redirection depuis l’ancienne (étape 6), sinon visiteurs et Google tomberont sur une page d’erreur.

## Étape 5 : ajouter un texte alternatif à vos images

Le texte alternatif (l’attribut alt) est une courte description écrite d’une image : les lecteurs d’écran la lisent à voix haute aux personnes qui ne voient pas l’image, et les moteurs de recherche s’en servent pour comprendre ce qu’elle montre. Comptez une minute par image.

Cliquez sur un bloc image, ouvrez ses options de modification et remplissez le champ du texte alternatif. Décrivez ce que montre l’image en une phrase simple, comme vous le feriez au téléphone :

| Texte alternatif | Verdict |
|---|---|
| Technicien qui entretient une chaudière murale dans une cuisine à Lyon | Bon : dit ce que montre l’image, avec le mot-clé là où il a sa place |
| chaudière lyon dépannage chaudière lyon pas cher | Bourrage de mots-clés, inutile pour un lecteur d’écran |
| IMG_4521 | Ne dit rien |

Renommez aussi vos fichiers avant de les importer : `entretien-chaudiere-lyon.jpg` en dit un peu plus à Google que `IMG_4521.jpg`. Les images purement décoratives, comme une texture de fond, n’ont pas besoin de description.

{{< screenshot id="squarespace-seo-05" alt="Options de modification d’un bloc image Squarespace avec le champ du texte alternatif rempli" >}}

## Étape 6 : rediriger les anciennes adresses avec URL mappings

Une redirection 301 envoie visiteurs et moteurs de recherche d’une ancienne adresse vers une nouvelle, de façon permanente, et indique à Google d’afficher la nouvelle page à la place de l’ancienne. Il en faut une dès qu’une adresse change : nouveau slug, page supprimée ou fusionnée, ou migration depuis une autre plateforme.

Ouvrez le panneau **Developer tools** (outils de développement), cliquez sur **URL mappings**, tapez une redirection par ligne, puis cliquez sur **Save** (enregistrer) :

```
/anciens-services -> /depannage-chaudiere-lyon 301
/blog/[name] -> /actualites/[name] 301
```

La deuxième ligne utilise la variable `[name]`, qui vaut pour chaque élément d’une collection : une seule ligne déplace tout un blog. Les règles, d’après l’[aide de Squarespace sur les URL mappings](https://support.squarespace.com/hc/fr-fr/articles/205815308) :

- les lignes s’appliquent de haut en bas : placez une redirection précise, comme celle d’un seul article, au-dessus d’une règle large qui pourrait la contredire ;
- respectez les majuscules et minuscules de l’ancienne adresse, et n’utilisez ni `?`, ni `&`, ni `#` ;
- impossible de rediriger une image ou un fichier, ou de rediriger la page d’accueil vers une autre adresse ;
- le champ accepte environ 2 500 lignes.

{{< callout type="warning" >}}Une redirection ne fonctionne qu’une fois l’ancienne page **supprimée ou désactivée**. Tant que l’ancienne page existe, la ligne ne fait rien.{{< /callout >}}

{{< screenshot id="squarespace-seo-06" alt="Panneau URL mappings de Squarespace avec deux lignes de redirection 301" >}}

Si vous déplacez tout un site, mon guide pour {{< a key="wordpress-to-squarespace" >}}migrer de WordPress vers Squarespace sans perdre votre référencement{{< /a >}} montre comment lister toutes les anciennes adresses avant de commencer.

## Étape 7 : relier Google Search Console et envoyer votre sitemap

Google Search Console est l’outil gratuit de Google pour les propriétaires de sites : il montre quelles recherches font apparaître vos pages et lesquelles Google a laissées de côté. Vérifiez trois points avant de commencer :

- le site est public avec un abonnement payant, car la validation ne fonctionne pas sur un site en essai ;
- aucun mot de passe ne protège le site ou la page d’accueil ;
- si votre domaine vient d’un autre registrar, 48 heures se sont écoulées depuis que vous l’avez relié.

Ensuite, validez le site et donnez votre sitemap à Google :

1. Dans Search Console, ajoutez votre site en propriété **Domaine** et copiez l’enregistrement TXT que Google vous donne.
2. Ajoutez cet enregistrement dans les réglages DNS de votre domaine : dans le panneau **Domains** de Squarespace si Squarespace gère le domaine, sinon chez votre registrar. Squarespace ne permet pas d’importer le fichier de validation de Google : passez par l’enregistrement DNS.
3. Revenez dans Search Console et cliquez sur **Valider**. Un changement DNS peut mettre du temps à être visible : réessayez plus tard en cas d’échec.
4. Ouvrez **Sitemaps**, saisissez `https://www.votreentreprise.fr/sitemap.xml` (avec votre domaine) sous **Ajouter un sitemap** et cliquez sur **Envoyer**.

L’état **Impossible de récupérer** peut s’afficher pendant 24 à 48 heures, le temps que Google traite un nouveau sitemap : attendez deux jours avant de chercher un problème.

{{< screenshot id="squarespace-seo-07" alt="Rapport Sitemaps de Google Search Console avec le sitemap.xml d’un site Squarespace envoyé" >}}

Enfin, affichez ces données dans Squarespace. Dans **Analytics**, ouvrez **Search keywords** (mots-clés de recherche), cliquez sur **Connect** (connecter), connectez-vous avec le compte Google qui détient la propriété et autorisez l’accès. Les recherches qui amènent des visiteurs sur votre site s’affichent alors dans Squarespace, sous 72 heures environ.

{{< screenshot id="squarespace-seo-08" alt="Panneau Search keywords des statistiques Squarespace, avec le bouton pour connecter Google Search Console" >}}

L’[aide de Squarespace sur Search Console](https://support.squarespace.com/hc/fr-fr/articles/205813918) couvre la partie Squarespace, et mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}} explique les rapports à lire chaque mois.

## Étape 8 : choisir ce que les assistants IA peuvent lire

Les assistants IA comme ChatGPT, Claude ou Perplexity envoient leurs propres robots lire les sites web. Squarespace vous donne deux réglages pour eux.

**Les robots d’exploration.** Dans **Settings**, ouvrez **Crawlers** (robots d’exploration). L’option **Block known artificial intelligence crawlers** (bloquer les robots d’intelligence artificielle connus) est désactivée par défaut. Laissez-la désactivée si vous voulez que les assistants IA trouvent et recommandent votre entreprise : bloquer leurs robots peut vous écarter de leurs réponses. OpenAI, par exemple, indique que les sites qui bloquent son robot de recherche ne sont pas affichés dans les réponses de recherche de ChatGPT. N’activez cette option que si tenir votre contenu à l’écart des entreprises d’IA compte plus pour vous que cette visibilité. L’[aide de Squarespace sur les robots](https://support.squarespace.com/hc/fr-fr/articles/360022347072) décrit chaque option du panneau.

{{< screenshot id="squarespace-seo-09" alt="Réglages Crawlers de Squarespace avec l’option Block known artificial intelligence crawlers désactivée" >}}

**Le fichier llms.txt.** Depuis fin juillet 2026, les sites en version 7.1 peuvent publier un fichier llms.txt, un résumé du site en texte brut destiné aux outils d’IA, depuis l’onglet **LLMS.txt** de **SEO Settings** (voir l’étape 2). Il est désactivé par défaut et Squarespace n’écrit rien à votre place. Google Search ignore ce fichier et aucun grand acteur de l’IA n’a confirmé le lire : voyez-le comme dix minutes de travail facultatif. Mon article sur le {{< a key="llms-txt-explained" >}}fichier llms.txt{{< /a >}} montre quoi écrire et où le coller.

## Votre checklist de référencement Squarespace, et quand passer la main

Reprenez cette liste avant la mise en ligne, puis à chaque nouvelle page :

1. Le site est **Public**, sans mot de passe, et les robots des moteurs de recherche ne sont pas bloqués.
2. Les formats de titre sont réglés, et le titre de la page d’accueil dit qui vous êtes, ce que vous faites et où.
3. Chaque page a un titre SEO et une description construits autour d’un mot-clé.
4. Les URL sont courtes, et chaque adresse modifiée a sa 301 dans URL mappings.
5. Chaque image porteuse de sens a un texte alternatif.
6. Le site est validé dans Search Console, le sitemap envoyé et Search keywords connecté.
7. Les robots d’IA sont autorisés, et le llms.txt ajouté si vous en voulez un.
8. Une fois par mois, vous lisez les rapports **Performances** et **Pages** (sous **Indexation**) dans Search Console.

Vous n’avez pas besoin de moi pour tout cela. Ces réglages sont à la portée de toute personne capable de modifier un site Squarespace, et c’est tout l’intérêt d’y mettre mes clients : ils changent leurs pages quand ils le veulent. J’ajoute en général un peu de code sur mesure à leurs sites, rien de destructeur, et c’est pour cette partie qu’ils m’appellent.

Les réglages sont la partie facile du SEO. Ce qui prend du temps, c’est le travail autour : la recherche de mots-clés, une page par service, la fiche d’établissement Google, puis les mentions et les liens venus d’autres sites. Le site de Pilotech a demandé environ un mois de construction, et son premier prospect est arrivé trois semaines après la mise en ligne ; mon {{< a key="pilotech-seo-case-study" >}}étude de cas SEO{{< /a >}} raconte l’histoire étape par étape. Si vous préférez confier ce travail, c’est ce que couvre mon {{< a page="/services/seo" >}}accompagnement SEO{{< /a >}}.
