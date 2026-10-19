---
title: "SEO du site de votre application : landing page, liens profonds et bannière intelligente"
seo_title: "Landing page application mobile : SEO et liens profonds"
description: "Landing page d’application mobile : les pages à créer, le balisage SoftwareApplication, les liens profonds iOS et Android et la Smart App Banner d’Apple."
slug: "landing-page-application-mobile"
translationKey: "app-website-seo"
date: 2026-10-18T22:33:00+02:00
lastmod: 2026-10-18T22:33:00+02:00
category: "mobile-apps"
article_type: "guide"
keywords: ["landing page application mobile", "site web application mobile", "SEO application mobile", "liens universels", "Android App Links", "Smart App Banner"]
summary: "Le site d’une application se classe sur Google, pas dans les stores : visez des mots-clés du web, avec une landing page qui nomme le problème, de vraies captures, les badges officiels, une FAQ et les pages de confidentialité et d’assistance. Reliez-le ensuite à l’app : les liens universels d’iOS et les Android App Links ouvrent vos URL dans l’application installée, et la Smart App Banner d’Apple la propose aux visiteurs sur iPhone sans masquer la page."
cover: "app-website-seo"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’une fenêtre de navigateur affichant une mise en page"
related: ["aso-guide", "landing-page-vs-website", "schema-markup-small-business", "get-website-indexed-google", "mobile-app-launch-guide"]
services: ["seo"]
faq:
  - q: "Puis-je reprendre la note App Store de mon app dans les données structurées de mon site ?"
    a: "Je ne le ferais pas. Ces notes ont été recueillies par Apple et Google, pas sur votre site, et les consignes de Google sur les extraits d’avis demandent de ne pas agréger les avis ou les notes d’autres sites, et de ne baliser que des notes visibles sur la page. Laissez la note de côté : le reste du balisage reste valide, même si la page ne peut alors pas afficher d’étoiles."
  - q: "Combien de temps faut-il à Apple pour prendre en compte une modification du fichier apple-app-site-association ?"
    a: "Selon la documentation d’Apple, son réseau de diffusion de contenu récupère le fichier dans les 24 heures, et les appareils vérifient les mises à jour environ une fois par semaine après l’installation de l’app. Testez vos changements sur une installation neuve plutôt que d’attendre un effet immédiat."
  - q: "Faut-il un fichier d’association pour exemple.fr et pour www.exemple.fr ?"
    a: "Oui. Apple demande une entrée par sous-domaine dans la capacité Associated Domains de l’app et un fichier servi sur chacun, et Android va chercher assetlinks.json sur chaque hôte déclaré dans le manifeste de l’app. Dans tous vos liens, utilisez la version du domaine qui ne redirige pas, et ne déclarez l’autre que si elle sert elle-même les fichiers."
  - q: "Comment envoyer vers l’app les visiteurs qui sont sur ordinateur ?"
    a: "Affichez les badges des stores et un QR code à scanner avec leur téléphone. Les outils marketing de l’App Store génèrent un badge, un lien court ou un QR code vers la page de votre app."
---

La fiche de votre application et son site ne font pas le même travail. La fiche se joue dans la recherche de l’App Store et de Google Play ; le site se joue sur Google, où l’on décrit un problème ou pose une question bien avant d’ouvrir un store. Travailler la landing page d’une application mobile, c’est faire classer ce site sur ces recherches, puis conduire les visiteurs jusqu’à l’app.

Ce guide couvre la page, ses mots-clés, ses données structurées, les liens profonds et la bannière intelligente. Il fait partie de mon {{< a key="mobile-app-launch-guide" >}}guide complet pour lancer une application mobile{{< /a >}}. Un outil interne, comme celui que j’ai développé pour suivre les prospects et les chantiers de Pilotech, n’en a pas besoin : ce guide vise les apps que des inconnus doivent trouver.

## Pourquoi une application a besoin d’un site en plus de sa fiche

Dans les stores, on tape deux ou trois mots et on choisit dans une liste d’icônes et de captures ; mon {{< a key="aso-guide" >}}guide de l’ASO{{< /a >}} explique ce classement. Sur Google, les mêmes personnes tapent « partager les dépenses en colocation » ou une question sur une fonction. Seul un site peut se classer sur ces recherches, et trois autres raisons plaident pour lui :

- **Les assistants IA lisent le web.** ChatGPT, Perplexity, Gemini et les Aperçus IA de Google répondent souvent à partir de pages trouvées par la recherche ; une page qui dit ce que fait votre app, et pour qui, leur donne de quoi vous citer.
- **La confiance.** Avant de confier leurs données ou leur carte bancaire à une app, beaucoup cherchent qui est derrière : une vraie adresse, une page d’assistance, une politique de confidentialité.
- **Les stores le demandent.** App Store Connect exige une URL d’assistance (Support URL) menant à de vraies coordonnées et, pour les apps iOS, une URL de politique de confidentialité. Google Play exige de chaque app, même si elle ne collecte aucune donnée personnelle, un lien vers sa politique de confidentialité dans la Play Console (une page web publique, pas un PDF), et une app qui permet de créer un compte doit aussi fournir un lien web pour en demander la suppression, déclaré dans le formulaire Sécurité des données.

## Que mettre sur la landing page de votre application

Une landing page a un seul objectif, ici faire installer l’app (si vous doutez qu’une page suffise, voyez ma comparaison {{< a key="landing-page-vs-website" >}}site vitrine ou landing page{{< /a >}}). De haut en bas :

1. **Un titre qui nomme le problème** avec les mots de vos utilisateurs, et une phrase sur ce que l’app y change.
2. **De vraies captures d’écran** des écrans qui comptent.
3. **Les badges officiels des stores**, chacun menant à votre page dans ce store.
4. **Le fonctionnement**, en trois étapes.
5. **Des preuves** : de vrais avis cités avec l’accord de leur auteur, ou des articles de presse. Jamais d’avis inventés.
6. **Une FAQ** sur ce qu’on se demande avant d’installer : prix, plateformes, données, résiliation.
7. **Les liens vers la politique de confidentialité et l’assistance** en pied de page, aux adresses données aux stores.

Quand je conçois un site, je veux que les visiteurs prennent l’entreprise au sérieux au premier coup d’œil. Pour une app, ce coup d’œil décide s’ils touchent un badge ou ferment l’onglet.

### Les règles des badges

Les [consignes marketing de l’App Store](https://developer.apple.com/app-store/marketing/guidelines/) demandent d’utiliser uniquement les visuels d’Apple, sans les modifier, les incliner ni les animer ; de prendre le badge localisé (50 versions, dont « Télécharger dans l’App Store » en français ; « App Store » y reste toujours en anglais) ; de laisser autour un espace libre égal au quart de sa hauteur, avec 40 px de haut au minimum à l’écran ; de placer le badge App Store en premier, en noir, s’il est accompagné d’autres badges ; et de citer Apple et son logo dans les mentions de marques de vos informations légales.

Google, lui, veut que son badge soit aussi grand que les autres, ou plus. Mettez donc le badge App Store en premier, donnez aux deux la même hauteur, et prenez chacun dans la langue de la page (« Disponible sur Google Play » en français).

## SEO de la landing page d’une application mobile : viser ce que l’on tape sur Google

Les mots-clés des stores et ceux du web se recoupent peu : cherchez ceux du web à part. Je pars des plaintes : j’utilise la recherche approfondie d’une IA pour repérer ce qui agace les gens et les mots qui reviennent le plus dans une niche, puis je vérifie les volumes dans Semrush. Les avis sur les apps concurrentes et vos e-mails d’assistance sont la meilleure matière première. Passez ensuite aux pages :

- **Une page par usage.** Une app de partage de dépenses se classe mieux avec une page pour la colocation et une autre pour les vacances entre amis qu’avec une seule page pour les deux.
- **Un titre et une meta description par page**, autour de son mot-clé.
- **Un blog pour les questions** reçues à l’assistance, chaque article renvoyant vers la page d’usage correspondante.

Vérifiez ensuite que Google trouve ces pages : mon tutoriel pour {{< a key="get-website-indexed-google" >}}faire indexer un nouveau site sur Google{{< /a >}} détaille la Search Console et le sitemap. Le reste relève du travail habituel sur un site, décrit dans {{< a key="small-business-website-guide" >}}mon guide pour créer un site internet professionnel{{< /a >}}.

Choisissez une plateforme que vous pouvez mettre à jour vous-même : le site d’une app change à chaque version. Pour les clients qui modifient eux-mêmes leur site, j’utilise Squarespace : ils changent une phrase sans que la mise en page s’écroule, et j’ajoute le code personnalisé dont ils ont besoin. Quel que soit l’outil, lisez d’abord la partie sur les liens profonds.

## Données structurées : décrire l’app avec SoftwareApplication

Pour une application, le type schema.org est `SoftwareApplication`, ou le plus précis `MobileApplication`. Google documente un [résultat enrichi pour les applications](https://developers.google.com/search/docs/appearance/structured-data/software-app?hl=fr) qui peut afficher une note et le prix. Il exige `name`, `offers.price` (0 pour une app gratuite) et soit `aggregateRating`, soit `review` ; `applicationCategory` est recommandée (prenez la valeur dans la liste de la page de Google), et `operatingSystem` indique les plateformes de l’app.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Coloc Comptes",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
}
</script>
```

L’exemple n’a volontairement pas de note : n’ajoutez `aggregateRating` que si la note est authentique et visible sur la page, comme le demandent les consignes de Google. Sans note ni avis, pas de résultat enrichi (le test des résultats enrichis de Google vous le signalera), mais le balisage reste valide au sens de schema.org : vérifiez-le plutôt avec le Schema Markup Validator. Ne comptez pas non plus dessus pour être cité par les assistants IA ; mon guide sur les {{< a key="schema-markup-small-business" >}}données structurées{{< /a >}} explique pourquoi.

## Liens profonds : liens universels et Android App Links

Un lien profond ouvre un écran précis de votre app. La méthode actuelle utilise des adresses web ordinaires : `https://exemple.fr/depenses/123` ouvre cette dépense dans l’app si elle est installée, et la même page de votre site sinon. Apple parle de liens universels (Universal Links), Android d’App Links. Une seule URL sert aux deux : la page garde sa valeur SEO et personne ne tombe sur une erreur. Les deux reposent sur un fichier, publié sur votre site, qui associe le domaine à l’app.

### iOS : le fichier apple-app-site-association

Créez un fichier `apple-app-site-association`, sans extension, à l’adresse `https://exemple.fr/.well-known/apple-app-site-association` :

```json
{
  "applinks": {
    "details": [
      {
        "appIDs": ["ABCDE12345.fr.exemple.depenses"],
        "components": [
          { "/": "/depenses/*", "comment": "Les pages de dépenses s'ouvrent dans l'app" },
          { "/": "/aide/*", "exclude": true, "comment": "Les pages d'aide restent sur le web" }
        ]
      }
    ]
  }
}
```

`ABCDE12345` est votre Team ID et `fr.exemple.depenses` le bundle ID de l’app. La [documentation d’Apple sur les domaines associés](https://developer.apple.com/documentation/xcode/supporting-associated-domains) exige le HTTPS avec un certificat valide, sans redirection ; dans Xcode, le développeur ajoute la capacité **Associated Domains** avec une entrée comme `applinks:exemple.fr`. À savoir : un visiteur qui navigue sur votre site dans Safari et touche un lien vers le même domaine reste dans Safari. La bannière intelligente est faite pour lui.

### Android : le fichier assetlinks.json

Servez ce fichier à l’adresse `https://exemple.fr/.well-known/assetlinks.json` :

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "fr.exemple.depenses",
    "sha256_cert_fingerprints": ["14:6D:E9:83:C5:73:06:50:D8:EE:B9:95:2F:34:FC:64:16:A0:83:42:E6:1D:BE:A8:8A:04:96:B2:3F:CF:44:E5"]
  }
}]
```

Le filtre d’intent de l’app doit porter `android:autoVerify="true"`, et la [documentation Android sur les App Links](https://developer.android.com/training/app-links/configure-assetlinks?hl=fr) demande le type de contenu `application/json`, le HTTPS et aucune redirection 301 ou 302. Le piège habituel est l’empreinte : si Google Play signe votre app (signature d’application Play), celle de votre propre clé ne correspondra généralement pas ; copiez l’extrait fourni sur la page de signature de l’app dans la Play Console. Depuis Android 12, un lien qui échoue à la vérification s’ouvre dans le navigateur : aucune erreur ne s’affiche, l’app ne s’ouvre tout simplement pas.

### Vérifier que votre plateforme peut servir ces fichiers

Les deux fichiers doivent répondre à ces adresses exactes, sur votre domaine, sans redirection. Certains créateurs de sites documentent comment les publier (Framer, par exemple) ; pour d’autres, des fils de forum montrent des utilisateurs réduits aux redirections, qu’Apple et Android refusent. Posez la question au support de votre outil avant de vous engager. À défaut, servez les liens profonds depuis un sous-domaine comme `go.exemple.fr`, chez un hébergeur où vous contrôlez les fichiers.

Apple prévient par ailleurs que ces liens sont une porte d’entrée : l’app doit valider chaque paramètre et ne jamais laisser un lien supprimer des données ou afficher des informations sensibles à lui seul. Ma {{< a key="mobile-app-security-checklist" >}}checklist de sécurité d’une application mobile{{< /a >}} couvre le reste.

### Les liens différés après Firebase Dynamic Links

Ouvrir le bon écran juste après l’installation s’appelle le deep linking différé. D’anciens tutoriels recommandent pour cela Firebase Dynamic Links, que Google a fermé le 25 août 2025 : tous ses liens ont cessé de fonctionner. Les App Links et les liens universels, vers lesquels Google renvoie, ne couvrent pas cette partie, qui passe désormais par des services tiers de deep linking et d’attribution. Remplacez les anciennes adresses en page.link, et celles du domaine personnalisé que vous aviez configuré pour le service, dans vos e-mails, QR codes et imprimés.

## La bannière intelligente : inviter sans masquer la page

La Smart App Banner d’Apple est une fine barre que Safari affiche en haut de la page sur iPhone et iPad : elle ouvre votre app si elle est installée, sa page App Store sinon. Ajoutez cette balise dans le `<head>` de chaque page concernée :

```html
<meta name="apple-itunes-app" content="app-id=123456789, app-argument=https://exemple.fr/depenses/123">
```

`app-id` (obligatoire) est le numéro affiché comme **Apple ID** dans les informations de l’app sur App Store Connect ; `app-argument` (facultatif) est une URL transmise à l’app pour ouvrir l’écran correspondant. Une fois fermée, la bannière ne revient pas, et elle ne s’affiche ni sur les appareils incompatibles ni là où l’app n’est pas disponible. Sur Squarespace, la balise va dans le champ d’en-tête de l’injection de code.

Ne remplacez pas cette bannière par une fenêtre « Téléchargez notre app » en plein écran. Apple oppose sa bannière à un plein écran qui interrompt la lecture, et Google Search Central, dans ses consignes sur les interstitiels intrusifs, préfère une bannière qui n’occupe qu’une petite partie de l’écran, pour que visiteurs et moteurs de recherche accèdent tout de suite au contenu. Sur Android, une bannière légère faite maison respecte ces consignes : une ligne de texte, le badge Google Play et un bouton de fermeture ; affichez-la seulement sur Android, et plus du tout une fois fermée.

## Avant le lancement : la checklist du site de votre app

1. Landing page en ligne : problème dans le titre, vraies captures, deux badges (App Store en premier, même hauteur), FAQ.
2. Pages de confidentialité et d’assistance publiées et liées à vos fiches, plus le lien de suppression de compte si besoin.
3. Une page par usage, avec titre et meta description ; site déclaré dans la Search Console.
4. Balisage SoftwareApplication sans note qui ne figure pas sur la page, vérifié avec le Schema Markup Validator.
5. Fichiers d’association servis en HTTPS à leurs adresses `.well-known`, sans redirection (ouvrez-les dans un navigateur : vous devez voir le fichier) ; liens testés sur une installation neuve.
6. Balise de la Smart App Banner là où elle sert ; bannière légère et refermable pour Android.
7. Anciens liens Firebase Dynamic Links remplacés partout.

Hormis les fichiers d’association et les réglages dans l’app, à confier à la personne qui la développe (transmettez-lui cette page), tout cela se fait sans développeur : c’est du travail sur le site.
