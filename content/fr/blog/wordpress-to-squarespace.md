---
title: "Migrer de WordPress vers Squarespace sans perdre votre référencement"
seo_title: "Migrer WordPress vers Squarespace sans perdre votre SEO"
description: "Migrer WordPress vers Squarespace sans perdre vos positions Google : export, import, redirections 301 page par page, domaine et Search Console, pas à pas."
slug: "migrer-wordpress-vers-squarespace"
translationKey: "wordpress-to-squarespace"
date: 2026-10-17T09:38:00+02:00
lastmod: 2026-10-17T09:38:00+02:00
category: "website-rescue"
article_type: "tutorial"
keywords: ["migrer WordPress vers Squarespace", "passer de WordPress à Squarespace", "migration WordPress Squarespace", "redirection 301 Squarespace", "changer de CMS sans perdre son référencement"]
summary: "Pour migrer WordPress vers Squarespace sans perdre votre référencement, listez vos anciennes URL, exportez le contenu (Outils > Exporter) et importez le fichier .xml dans Squarespace : pages, articles et images suivent, mais ni le design, ni les extensions, ni vos titres SEO. Redirigez ensuite chaque ancienne adresse avec une 301, recopiez titres et descriptions, reliez le domaine et envoyez le sitemap à la Search Console. Vos positions peuvent bouger quelques semaines."
cover: "wordpress-to-squarespace"
cover_alt: "Schéma de flux aux nœuds reliés sur du verre cannelé, avec les mots WP → Squarespace"
related: ["squarespace-vs-wordpress", "squarespace-seo", "squarespace-tutorial", "ovh-dns-squarespace", "wordpress-site-hacked"]
services: ["websites"]
faq:
  - q: "Mes emails vont-ils s’arrêter si je résilie mon hébergement WordPress ?"
    a: "Oui, si vos boîtes mail sont hébergées sur la même offre que le site, ce qui est courant avec les hébergements mutualisés. Regardez où pointent vos enregistrements MX : s’ils pointent vers votre hébergeur, déplacez vos emails chez un fournisseur de messagerie et modifiez les MX avant de résilier."
  - q: "Faut-il utiliser l’outil de changement d’adresse de Google pour passer sur Squarespace ?"
    a: "Seulement si le domaine change aussi, par exemple d’un .fr vers un .com. Si vous gardez le même domaine, les redirections 301 du panneau URL mappings font le travail : l’outil de changement d’adresse de la Search Console sert aux déménagements d’un domaine vers un autre."
  - q: "Combien de temps prend une migration de WordPress vers Squarespace ?"
    a: "L’import lui-même prend quelques minutes. Le reste dépend du nombre de pages et de ce que l’ancien site devait à ses extensions : le design à refaire, les formulaires à remplacer et les redirections à écrire. Comptez ensuite 24 à 72 heures pour la connexion du domaine."
  - q: "Que faire de l’ancien site WordPress après la migration ?"
    a: "Gardez la sauvegarde des fichiers et de la base de données quelques mois, au cas où il vous manquerait une page ou une image. Une fois les redirections testées et vos emails à l’abri, résiliez l’hébergement plutôt que de laisser une copie de l’ancien site en ligne à une autre adresse, que Google pourrait indexer comme un doublon."
---

Migrer WordPress vers Squarespace, c’est surtout une affaire de référencement. Le contenu passe vite : Squarespace importe vos pages, vos articles et vos images à partir du fichier d’export de WordPress. Ce qu’il ne fait pas, c’est garder vos anciennes adresses en vie, et chaque ancienne URL qui mène à une page d’erreur est une page que Google cessera peu à peu d’afficher.

J’ai moi-même fait passer des clients de WordPress à Squarespace. Tous mes clients sous WordPress sont venus me voir pour changer de plateforme, lassés par la courbe d’apprentissage et par les extensions. Ceux qui gèrent leur site eux-mêmes sont passés sur Squarespace, où changer une lettre ne fait pas s’écrouler toute la mise en page et où ils modifient ce qu’ils veulent, quand ils veulent. Ceux qui avaient un budget pour des modifications régulières ont eu un site développé sur mesure.

Ce tutoriel couvre la migration en huit étapes, de la liste de vos URL au suivi dans la Search Console les semaines suivantes. Il fait partie de mon guide pour {{< a key="website-security-guide" >}}sécuriser son site internet{{< /a >}}, car un site que personne ne sait entretenir devient un risque. Les menus de WordPress et de la Search Console sont ceux de l’interface en français ; ceux de Squarespace, en anglais, sont traduits entre parenthèses quand c’est utile (octobre 2026).

## Squarespace est-il la bonne destination pour votre site ?

Squarespace convient aux dirigeants qui modifient eux-mêmes leur site et veulent que l’hébergement, la sécurité et les mises à jour soient compris dans un seul abonnement. Un site vitrine avec un blog s’y installe bien. Un site construit autour d’extensions déménage plus difficilement : une grosse boutique, un espace membres, un système de réservation aux règles particulières, ou un site multilingue, puisque Squarespace n’a pas d’outil de traduction intégré.

WordPress reste un bon choix si vous en avez le budget : les clients qui ont un gros budget le gardent et paient un spécialiste pour s’en occuper chaque mois. Mon comparatif {{< a key="squarespace-vs-wordpress" >}}Squarespace ou WordPress{{< /a >}} détaille ce choix.

Une limite honnête avant de vous lancer : Squarespace est fermé, sans accès au code source. Un site codé sur mesure ou un WordPress soigneusement construit laisse plus de marge à un spécialiste pour le SEO technique, et peut se classer plus haut. Le travail compte pourtant plus que la plateforme. Le premier site que j’ai créé pour Pilotech, un installateur de climatisation en Île-de-France, est sur Squarespace, et **il se classe premier ou deuxième sur Google** avec les bases bien faites : les bons mots-clés et des métadonnées soignées. La {{< a page="/projects/pilotech" >}}page du projet Pilotech{{< /a >}} présente ses sites.

Si votre site WordPress a été piraté, réglez ce problème d’abord. L’import copie le contenu de vos articles tel quel : les liens de spam qu’un pirate y aurait glissés passeraient aussi. Suivez ma procédure pour un {{< a key="wordpress-site-hacked" >}}site WordPress piraté{{< /a >}} avant d’exporter quoi que ce soit.

## Migrer WordPress vers Squarespace : ce qui suit, ce qui reste

L’import de Squarespace lit le fichier .xml exporté par WordPress. D’après [le guide d’import WordPress de Squarespace](https://support.squarespace.com/hc/en-us/articles/206543957-Importing-content-from-WordPress-Blogger-or-Tumblr) (en anglais), voici ce qui passe :

| Contenu | Importé ? | Que faire |
|---|---|---|
| Pages et articles de blog | Oui | Vérifier la mise en page de chacun |
| Auteurs, catégories, étiquettes et commentaires | Oui (étiquettes et catégories trop longues coupées) | Faire le tri |
| Images rattachées aux pages et aux articles | Oui | Vérifier leur texte alternatif |
| Images de la médiathèque non rattachées à un contenu | Non | Télécharger la médiathèque avant de commencer |
| Galeries et légendes d’images | Non | Les refaire avec les blocs Squarespace |
| Contenu des extensions : formulaires, sliders, mises en page de constructeurs, titres et descriptions SEO | Non | Recréer les fonctions et recopier les textes SEO (étape 6) |
| Thème, design et CSS | Non | Choisir un modèle et refaire le design |
| Vos URL | Elles changent de format | Les garder ou les rediriger (étape 5) |

L’import est une copie unique à partir d’un fichier, pas une synchronisation. Tout ce que vous publiez sur WordPress après l’export devra être ajouté à la main : prévoyez la migration pendant une période calme.

## Étape 1 : lister toutes les URL de votre site WordPress

Avant de toucher à quoi que ce soit, dressez un tableau de votre ancien site tant qu’il est en ligne. L’aide de Squarespace le recommande aussi, et toutes les étapes suivantes s’appuient dessus.

1. Ouvrez le sitemap de WordPress à l’adresse votredomaine.fr/wp-sitemap.xml, ou /sitemap_index.xml si vous utilisez Yoast SEO ou Rank Math. Il liste vos pages, articles, catégories et étiquettes.
2. Dans la Google Search Console, ouvrez **Performances** > **Résultats de recherche**, choisissez les 12 derniers mois, passez sur l’onglet **Pages** et cliquez sur **Exporter**. Ce sont les adresses vers lesquelles Google envoie des visiteurs : elles passent en premier.
3. Ajoutez les adresses imprimées sur vos flyers, véhicules ou cartes de visite, ou partagées dans vos emails et sur les réseaux sociaux.

Donnez au tableau cinq colonnes : ancienne URL, titre SEO, meta description, nouvelle URL et une case à cocher une fois l’adresse testée. Copiez dès maintenant titres et descriptions depuis votre extension SEO, tant que vous les voyez encore.

{{< screenshot id="wordpress-to-squarespace-01" alt="Rapport Performances de la Search Console sur les 12 derniers mois, onglet Pages, avec le bouton Exporter" >}}

## Étape 2 : sauvegarder WordPress et exporter le contenu

1. Faites une sauvegarde complète du site, fichiers et base de données, avec l’outil de votre hébergeur ou une extension de sauvegarde.
2. Téléchargez toute votre **médiathèque**. Les images qui ne sont rattachées à aucune page ni à aucun article ne sont pas importées, et Squarespace conseille d’en garder une copie.
3. Désactivez vos extensions, qui peuvent perturber l’import selon Squarespace. Faites-le à une heure creuse et réactivez-les une fois le fichier enregistré.
4. Allez dans **Outils** > **Exporter**, cochez **Tout le contenu** et cliquez sur le bouton de téléchargement du fichier d’export. WordPress enregistre un fichier .xml sur votre ordinateur.

Si le fichier est trop lourd pour l’import, exportez par périodes et importez les fichiers un par un.

{{< screenshot id="wordpress-to-squarespace-02" alt="Écran Exporter du menu Outils de WordPress, avec Tout le contenu coché et le bouton de téléchargement du fichier d’export" >}}

{{< callout type="tip" >}}Dès l’export, **gelez le contenu** : plus aucun article ni aucune page sur WordPress jusqu’à la fin de la migration. Ce qui serait ajouté ensuite ne figurera pas dans le fichier, et on l’oublie facilement.{{< /callout >}}

## Étape 3 : importer le fichier dans Squarespace

Créez votre site Squarespace à partir d’un modèle. L’essai gratuit de 14 jours suffit pour le construire et le tester, et le site reste privé tant que vous ne le publiez pas. Si vous découvrez l’éditeur, mon {{< a key="squarespace-tutorial" >}}tuto Squarespace{{< /a >}} en donne les bases.

1. Dans **Settings** (paramètres), ouvrez le panneau **Import & export** et cliquez sur **Import**.
2. Choisissez **WordPress**.
3. Gardez le processeur **Standard WordPress**, sauf si vos articles étaient rédigés en Textile ou en Markdown.
4. Envoyez le fichier .xml et cliquez sur **Import**.

À la fin de l’import, ouvrez le panneau **Pages** : vos pages et une page de blog contenant vos articles doivent s’y trouver. Comparez une douzaine d’entre elles avec l’ancien site, en commençant par celles en tête de votre export de la Search Console.

{{< screenshot id="wordpress-to-squarespace-03" alt="Panneau Import & export de Squarespace avec l’option d’import WordPress" >}}

## Étape 4 : reconstruire ce que l’import laisse de côté

L’import vous donne du contenu brut dans un modèle. Parcourez le site et refaites :

- **Le design** : choisissez le modèle le plus proche de votre marque, puis réglez les polices et les couleurs une fois pour tout le site.
- **Les galeries et les légendes** : recréez-les avec les blocs galerie et image.
- **Les formulaires, sliders, outils de réservation et tout ce que faisait une extension** : remplacez-les par des blocs ou des extensions Squarespace, ou renoncez-y.
- **Les liens dans vos articles** : ils pointent encore vers les anciennes adresses. Corrigez les plus importants ; les redirections de l’étape 5 rattrapent le reste.
- **Le texte alternatif** : vérifiez-le sur chaque image importée.

Certaines fonctions demandent un peu de code. J’en ajoute souvent sur les sites Squarespace que je crée ; mes clients m’appellent pour cette partie, et elle ne gêne jamais ce qu’ils modifient eux-mêmes. L’injection de code est disponible à partir du forfait Essentiel (Core en anglais), pas sur Basic.

{{< screenshot id="wordpress-to-squarespace-04" alt="Panneau Pages de Squarespace listant les pages importées et la nouvelle page de blog" >}}

## Étape 5 : garder vos URL, ou les rediriger en 301

C’est l’étape qui protège votre référencement. Quand une ancienne adresse renvoie une erreur, la page sort peu à peu des résultats de Google, et les liens que d’autres sites lui faisaient ne mènent plus nulle part. Une redirection 301 annonce que la page a déménagé pour de bon, et Google y voit un signal fort que la nouvelle adresse remplace l’ancienne.

### Garder les mêmes slugs quand c’est possible

WordPress place les pages à des adresses comme /qui-sommes-nous/ et souvent les articles à /nom-de-l-article/. Sur Squarespace, les pages sont à /qui-sommes-nous et les articles sous la page de blog, à /blog/nom-de-l-article. Pour chaque page, cliquez sur l’icône d’engrenage dans le panneau **Pages** et vérifiez le champ **URL slug** (la fin de l’adresse) dans l’onglet **General** : faites-le correspondre à l’ancien. Changer le titre d’une page ne change pas son slug.

### Écrire les redirections dans URL mappings

1. Dans **Settings**, ouvrez **Developer tools** (outils pour développeurs) > **URL mappings** (correspondances d’URL).
2. Ajoutez une ligne par ancienne adresse : ancien chemin, flèche, nouveau chemin, puis 301.
3. Mettez les lignes précises en haut et les règles larges en bas : Squarespace lit la liste de haut en bas, et la ligne la plus haute l’emporte.
4. Cliquez sur **Save** (enregistrer).

```
/qui-sommes-nous -> /a-propos 301
/nos-services/climatisation -> /climatisation 301
/category/actualites -> /blog 301
/[name] -> /blog/[name] 301
```

La dernière ligne est la règle que [le guide des URL mappings de Squarespace](https://support.squarespace.com/hc/en-us/articles/205815308-URL-mappings) (en anglais) propose pour les articles importés de WordPress : la variable [name] envoie chaque /nom-de-l-article vers /blog/nom-de-l-article, à condition de garder les slugs donnés par l’import. Remplacez /blog par le slug de votre page de blog s’il est différent. Comme cette règle attrape toute adresse à un seul niveau, elle reste tout en bas, sous les règles de vos pages. Si vos articles avaient des dates dans leur adresse (/2024/03/nom-de-l-article/), elle ne les attrapera pas : donnez à chacun sa propre ligne.

### Les limites à connaître

- Une redirection ne fonctionne que si l’ancienne page n’existe plus sur Squarespace : supprimez ou désactivez toute page importée que vous redirigez.
- La plupart des lignes ne peuvent pas contenir `?`, `&` ou `#`, si bien que des adresses comme `/?p=123` ne peuvent pas être redirigées.
- URL mappings ne redirige pas les adresses d’images ou de fichiers, comme un PDF rangé dans /wp-content/uploads/. Remettez en ligne les fichiers importants et corrigez les liens qui dépendent de vous.
- Respectez les majuscules de vos anciennes adresses ; les slugs de Squarespace sont en minuscules par défaut.
- Le panneau contient environ 400 Ko, soit à peu près 2 500 lignes : largement assez pour le site d’une petite entreprise.

{{< screenshot id="wordpress-to-squarespace-05" alt="Panneau URL mappings des Developer tools de Squarespace, avec des lignes 301 et la règle [name] en dernier" >}}

{{< callout type="warning" >}}Enregistrez vos URL mappings **avant** de relier le domaine. Dès que le domaine pointe vers Squarespace, chaque ancienne adresse sans redirection renvoie une page d’erreur 404, à vos visiteurs comme à Google.{{< /callout >}}

## Étape 6 : recopier vos titres et meta descriptions

Les titres et descriptions de votre extension SEO sont restés dans WordPress. Recopiez-les depuis votre tableau, page par page :

1. Dans le panneau **Pages**, cliquez sur l’engrenage à côté d’une page et ouvrez l’onglet **SEO**.
2. Remplissez le **SEO title** (titre SEO), qui reprend le titre de la page s’il reste vide, et la **SEO description**. Les moteurs de recherche coupent les descriptions vers 160 caractères.
3. Pour les articles de blog, ouvrez les paramètres de chaque article et utilisez son onglet **SEO**.
4. Vérifiez le format de titre du site, pour que son nom n’apparaisse pas deux fois si vos anciens titres le contenaient déjà.

Améliorez-les au passage plutôt que de les recopier les yeux fermés : un mot-clé principal par page, écrit pour la personne qui cherche. Sur les sites que je crée, je fais les métadonnées avant de relier le domaine, pas après la publication. Mon tutoriel de {{< a key="squarespace-seo" >}}référencement Squarespace{{< /a >}} détaille les autres réglages à vérifier.

{{< screenshot id="wordpress-to-squarespace-06" alt="Onglet SEO des paramètres d’une page Squarespace, avec les champs SEO title et SEO description remplis" >}}

## Étape 7 : relier votre domaine et publier

Choisissez d’abord un forfait payant : seuls les sites payants peuvent être publics. Retirez ensuite tout mot de passe appliqué au site entier, qui empêcherait Google de l’indexer.

Si votre domaine reste chez son registrar actuel (OVH, Infomaniak ou un autre), reliez-le avec des enregistrements DNS :

1. Dans le panneau **Domains** (domaines), choisissez d’utiliser un domaine que vous possédez déjà et saisissez-le.
2. Choisissez votre registrar dans la liste, ou **Other** (autre).
3. Chez votre registrar, ajoutez les enregistrements que Squarespace affiche (ci-dessous).
4. Ne touchez pas à vos enregistrements MX : ils servent à vos emails, pas à votre site.

```
Type    Hôte                            Valeur
A       @                               198.185.159.144
A       @                               198.185.159.145
A       @                               198.49.23.144
A       @                               198.49.23.145
CNAME   www                             ext-cust.squarespace.com
CNAME   (code affiché par Squarespace)  verify.squarespace.com
```

La connexion prend en général 24 à 48 heures, parfois jusqu’à 72. Gardez le CNAME de vérification : sans lui, Squarespace détache le domaine au bout de 15 jours. Si Squarespace propose plutôt une connexion par serveurs de noms (nameservers), tous les enregistrements dont vous dépendez, comme les MX de vos emails et les TXT de vérification, doivent exister dans les réglages DNS de Squarespace avant la bascule.

Les domaines gérés chez OVH peuvent être délicats : le seul problème que j’y ai rencontré était un point manquant à la fin d’un enregistrement. Mes guides pas à pas pour {{< a key="namecheap-dns-squarespace" >}}Namecheap{{< /a >}} et pour la {{< a key="ovh-dns-squarespace" >}}zone DNS OVH{{< /a >}} montrent où va chaque valeur. Gardez votre hébergement WordPress jusqu’à ce que le domaine affiche **Connected** (connecté) dans Squarespace et que les redirections soient testées.

{{< screenshot id="wordpress-to-squarespace-07" alt="Panneau Domains de Squarespace listant les enregistrements DNS à ajouter pour un domaine enregistré ailleurs" >}}

## Étape 8 : prévenir Google et surveiller la Search Console

Si vous gardez le même domaine, votre propriété Search Console et son historique continuent. S’il faut valider le site à nouveau, Squarespace demande d’attendre 48 heures après la connexion du domaine et d’utiliser un enregistrement TXT dans vos DNS.

1. Envoyez le nouveau sitemap : ouvrez **Indexation** > **Sitemaps**, saisissez sitemap.xml sous **Ajouter un sitemap** et cliquez sur **Envoyer**. L’état **Impossible de récupérer** peut s’afficher un jour ou deux.
2. Collez vos nouvelles adresses les plus importantes dans **Inspection de l’URL** et demandez leur indexation.
3. Testez chaque ancienne URL de votre tableau dans une fenêtre de navigation privée, exactement telle qu’elle était sur WordPress, barre oblique finale comprise. Si l’une d’elles ne redirige pas, ajoutez-lui une ligne.
4. Chaque semaine pendant le premier mois, ouvrez **Indexation** > **Pages**. Les anciennes adresses en **Page avec redirection** sont normales. Toute ancienne adresse en **Introuvable (404)** est une redirection oubliée.
5. Dans **Performances**, comparez clics et positions avec les semaines d’avant la migration, page par page.

Attendez-vous à des mouvements. [Le guide de Google sur les déménagements de site](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes?hl=fr) prévient que les positions peuvent fluctuer pendant un déménagement, et qu’il peut falloir quelques semaines ou plus avant que les nouvelles adresses remplacent les anciennes dans les résultats. Il conseille aussi de garder les redirections au moins un an. Sur Squarespace, elles ne coûtent rien : je les garderais pour de bon.

{{< screenshot id="wordpress-to-squarespace-08" alt="Rapport Indexation des pages de la Search Console, avec d’anciennes adresses WordPress en Introuvable (404)" >}}

## Votre check-list de migration, et quand passer la main

Avant de déclarer la migration terminée, vérifiez chaque ligne :

1. Un tableau liste chaque ancienne URL avec son titre et sa description.
2. La sauvegarde et la médiathèque sont rangées ailleurs que sur le serveur.
3. Le fichier .xml est importé et les pages sont comparées à l’ancien site.
4. Le design, les galeries, les formulaires et les liens dans les articles sont refaits.
5. Chaque ancienne URL garde son slug, est couverte par la règle [name] ou a sa propre ligne au-dessus de cette règle dans URL mappings.
6. Les titres SEO et les descriptions sont recopiés, et améliorés.
7. Le domaine affiche Connected, et vos emails fonctionnent toujours.
8. Le sitemap est envoyé, les anciennes URL sont testées, et le rapport Pages est consulté chaque semaine pendant un mois.

Vous n’avez pas besoin de moi pour un site vitrine de dix pages avec un petit blog : cette check-list suffit. Faites-vous aider si le site compte des centaines d’URL, une boutique WooCommerce (les produits ne figurent pas dans la liste de l’import), plusieurs langues, ou un piratage que personne n’a nettoyé. Dans ces cas, c’est sur le plan de redirection et sur le nettoyage que le référencement se garde ou se perd.
