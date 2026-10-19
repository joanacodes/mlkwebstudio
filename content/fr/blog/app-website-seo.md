---
title: "SEO du site de votre app : landing page, liens profonds et bannière intelligente"
seo_title: "Landing page application mobile : SEO et liens profonds"
description: "Landing page d’application mobile : les pages à créer, le balisage SoftwareApplication, les liens profonds iOS et Android et la Smart App Banner d’Apple."
slug: "landing-page-application-mobile"
translationKey: "app-website-seo"
date: 2026-10-18T22:33:00+02:00
lastmod: 2026-10-18T22:33:00+02:00
category: "mobile-apps"
article_type: "guide"
keywords: ["landing page application mobile", "site web application mobile", "SEO application mobile", "liens universels", "Android App Links", "Smart App Banner"]
summary: "Le site d’une application se classe sur Google, pas dans les stores : visez des mots-clés du web, avec une landing page qui nomme le problème résolu, de vraies captures d’écran, les badges officiels, une FAQ et les pages de confidentialité et d’assistance liées à vos fiches. Reliez-le ensuite à l’app : les liens universels d’iOS et les Android App Links ouvrent vos URL dans l’application installée, et la Smart App Banner d’Apple la propose aux visiteurs sur iPhone sans masquer la page."
cover: "app-website-seo"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’une fenêtre de navigateur affichant une mise en page"
related: ["aso-guide", "landing-page-vs-website", "schema-markup-small-business", "get-website-indexed-google", "mobile-app-launch-guide"]
services: ["seo"]
faq:
  - q: "Puis-je reprendre la note App Store de mon app dans les données structurées de mon site ?"
    a: "Je ne le ferais pas. Ces notes ont été recueillies par Apple et Google, pas sur votre site, et les consignes de Google sur les avis demandent depuis longtemps des notes collectées directement auprès de vos utilisateurs et visibles sur la page. Laissez la note de côté : le reste du balisage reste valide, même si la page ne peut alors pas afficher d’étoiles."
  - q: "Combien de temps faut-il à Apple pour prendre en compte une modification du fichier apple-app-site-association ?"
    a: "Selon la documentation d’Apple, son réseau de diffusion de contenu récupère le fichier dans les 24 heures, et les appareils vérifient les mises à jour environ une fois par semaine après l’installation de l’app. Testez vos changements sur une installation neuve plutôt que d’attendre un effet immédiat."
  - q: "Faut-il un fichier d’association pour exemple.fr et pour www.exemple.fr ?"
    a: "Oui. Apple demande une entrée par sous-domaine dans la capacité Associated Domains de l’app et un fichier servi sur chacun, et Android va chercher assetlinks.json sur chaque hôte déclaré dans le manifeste de l’app. Choisissez la version du domaine qu’utilisent vos liens, et couvrez aussi l’autre."
  - q: "Comment envoyer vers l’app les visiteurs qui sont sur ordinateur ?"
    a: "Affichez les badges des stores et un QR code à scanner avec leur téléphone. Les outils marketing de l’App Store génèrent un badge, un lien court ou un QR code vers la page de votre app."
---

La fiche de votre application et son site web ne font pas le même travail. La fiche se joue dans la recherche de l’App Store et de Google Play ; le site, lui, se joue sur Google, où les gens décrivent un problème ou posent une question bien avant d’ouvrir un store. Travailler la landing page d’une application mobile, c’est faire en sorte que ce site se classe sur ces recherches, puis conduire les visiteurs jusqu’à l’app.

Ce guide couvre la landing page, ses mots-clés et ses données structurées, puis les deux liens entre le site et l’app : les liens profonds et la bannière intelligente. Il fait partie de mon {{< a key="mobile-app-launch-guide" >}}guide complet pour lancer une application mobile{{< /a >}}. Un outil interne, comme celui que j’ai développé pour suivre les prospects et les chantiers de Pilotech, n’a besoin de rien de tout cela : ce guide concerne les apps que vous voulez faire découvrir à des inconnus.

## Pourquoi une application a besoin d’un site en plus de sa fiche

Dans l’App Store et Google Play, on tape deux ou trois mots et on choisit dans une grille d’icônes ; mon {{< a key="aso-guide" >}}guide de l’ASO{{< /a >}} explique comment ces résultats sont classés. Sur Google, les mêmes personnes tapent « partager les dépenses en colocation » ou une question sur une fonction. Seul un site peut se classer sur ces recherches, et il y a trois autres raisons d’en avoir un :

- **Les assistants IA lisent le web.** ChatGPT, Perplexity, Gemini et les AI Overviews de Google répondent à beaucoup de questions à partir de pages trouvées par la recherche. Une page qui dit ce que fait votre app, et pour qui, leur donne de quoi vous citer.
- **La confiance.** Avant de confier leurs données ou leur carte bancaire à une app, beaucoup de gens cherchent l’entreprise qui est derrière : une vraie adresse, une page d’assistance, une politique de confidentialité.
- **Les stores le demandent.** App Store Connect exige une URL d’assistance (Support URL), qui doit mener à de vraies coordonnées selon Apple, et une URL de politique de confidentialité pour les apps iOS. La Play Console a son propre champ pour la politique de confidentialité, et une app qui permet de créer un compte doit fournir un lien web pour en demander la suppression, à indiquer dans le formulaire Sécurité des données.

## Que mettre sur la landing page de votre application

Une landing page a un seul objectif, ici faire installer l’app (ma comparaison {{< a key="landing-page-vs-website" >}}site vitrine ou landing page{{< /a >}} vous aide si vous doutez qu’une page suffise). De haut en bas :

1. **Un titre qui nomme le problème** avec les mots de vos utilisateurs, et une phrase sur ce que l’app y change.
2. **De vraies captures d’écran** des écrans qui comptent.
3. **Les badges officiels des stores**, chacun menant à la page de votre app dans ce store.
4. **Le fonctionnement**, en trois étapes courtes.
5. **Des preuves** : de vrais avis cités avec l’accord de leur auteur, ou des articles de presse. Jamais d’avis inventés.
6. **Une FAQ** sur ce qu’on se demande avant d’installer : prix, plateformes, données, résiliation.
7. **Des liens vers la politique de confidentialité et l’assistance** en pied de page, aux adresses données aux stores.

Quand je conçois un site, je veux que les visiteurs prennent l’entreprise au sérieux au premier coup d’œil. Pour une application, ce coup d’œil décide s’ils touchent un badge ou ferment l’onglet.

### Les règles des badges

Les [consignes marketing de l’App Store](https://developer.apple.com/app-store/marketing/guidelines/) demandent de n’utiliser que les visuels d’Apple, sans les modifier, les incliner ni les animer ; de prendre le badge localisé (il en existe 50, dont « Télécharger dans l’App Store » en français, et les mots « App Store » restent toujours en anglais) ; de laisser autour un espace libre égal au quart de sa hauteur, avec au moins 40 px de haut à l’écran ; de placer le badge App Store en premier, en noir, quand d’autres badges l’accompagnent ; et de citer Apple et le logo Apple dans les mentions de marques, là où votre site donne ses informations légales.

La règle de Google : son badge doit être de la même taille que les autres badges, ou plus grand. Placez donc le badge App Store en premier, donnez aux deux la même hauteur, et prenez chaque badge dans la langue de la page (« Disponible sur Google Play » en français).

## SEO de la landing page d’une application mobile : viser ce que l’on tape sur Google

Les mots-clés des stores et ceux du web se recoupent moins qu’on ne le croit : cherchez ceux du web à part. Mon point de départ, ce sont les plaintes. J’utilise la recherche approfondie d’une IA pour repérer ce dont les gens se plaignent et les mots qui reviennent le plus dans une niche, puis je vérifie les volumes de recherche dans Semrush. Les avis laissés sur les apps concurrentes et vos propres e-mails d’assistance sont la meilleure matière première. Transformez ensuite cette recherche en pages :

- **Une page par usage.** Une app de partage de dépenses se classe mieux avec une page pour la colocation et une autre pour les vacances entre amis qu’avec une seule page pour les deux. Chacune se termine par les badges.
- **Un titre et une meta description par page**, construits autour du mot-clé de la page.
- **Un blog pour les questions** qui arrivent à l’assistance, chaque article renvoyant vers la page d’usage correspondante.

Assurez-vous ensuite que Google trouve ces pages : mon tutoriel pour {{< a key="get-website-indexed-google" >}}faire indexer un nouveau site sur Google{{< /a >}} détaille la Search Console et le sitemap. Le reste relève du travail habituel sur un site, décrit dans {{< a key="small-business-website-guide" >}}mon guide pour créer un site internet professionnel{{< /a >}}.

Choisissez une plateforme que vous pouvez mettre à jour vous-même, car le site d’une app change à chaque version. Pour les clients qui modifient eux-mêmes leur site, j’utilise Squarespace : ils peuvent changer une phrase sans que la mise en page s’écroule, et j’ajoute le code personnalisé dont ils ont besoin. Quel que soit l’outil, vérifiez d’abord l’exigence décrite dans la partie sur les liens profonds.

## Données structurées : décrire l’app avec SoftwareApplication

Pour une application, le type schema.org est `SoftwareApplication`, ou le type plus précis `MobileApplication`. Google documente un [résultat enrichi pour les applications](https://developers.google.com/search/docs/appearance/structured-data/software-app?hl=fr), qui peut afficher une note et le prix dans ses résultats. Il exige `name`, `offers.price` (0 pour une app gratuite) et soit `aggregateRating`, soit `review` ; `applicationCategory` est recommandée, et j’ajoute `operatingSystem`.

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

L’exemple n’a pas de note, et c’est voulu : n’ajoutez `aggregateRating` que si la note est authentique et visible sur la page, comme le demandent les consignes de Google. Sans note ni avis, la page ne peut pas obtenir le résultat enrichi, mais le balisage reste valide. Ne comptez pas non plus dessus pour faire citer l’app par les assistants IA ; mon guide sur les {{< a key="schema-markup-small-business" >}}données structurées{{< /a >}} explique pourquoi.

## Liens profonds : liens universels et Android App Links

Un lien profond ouvre un écran précis de votre app. La méthode actuelle utilise des adresses web ordinaires : `https://exemple.fr/depenses/123` ouvre cette dépense dans l’app quand elle est installée, et la même page de votre site sinon. Apple parle de liens universels (Universal Links), Android d’App Links. Une seule URL sert aux deux : la page garde sa valeur pour le SEO et personne ne tombe sur une erreur. Les deux systèmes reposent sur un fichier publié sur votre site, qui prouve que le domaine et l’app vont ensemble.

### iOS : le fichier apple-app-site-association

Créez un fichier nommé `apple-app-site-association`, sans extension, à l’adresse `https://exemple.fr/.well-known/apple-app-site-association` :

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

`ABCDE12345` est votre Team ID et `fr.exemple.depenses` le bundle ID de l’app. La [documentation d’Apple sur les domaines associés](https://developer.apple.com/documentation/xcode/supporting-associated-domains) exige le HTTPS avec un certificat valide, sans redirection ; dans Xcode, le développeur ajoute la capacité **Associated Domains** avec une entrée comme `applinks:exemple.fr`. Un comportement à connaître : quelqu’un qui navigue sur votre site dans Safari et touche un lien vers le même domaine reste dans Safari. La bannière intelligente est faite pour ces visiteurs-là.

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

Le filtre d’intent de l’app doit porter `android:autoVerify="true"`, et la [documentation Android sur les App Links](https://developer.android.com/training/app-links/configure-assetlinks?hl=fr) demande le type de contenu `application/json`, le HTTPS et aucune redirection 301 ou 302. Le piège habituel est l’empreinte : si Google Play signe votre app (signature d’application Play), l’empreinte de votre propre clé ne correspondra généralement pas ; copiez plutôt l’extrait fourni sur la page de signature de l’app dans la Play Console. Depuis Android 12, un lien qui échoue à la vérification s’ouvre dans le navigateur : aucune erreur ne s’affiche, l’app ne s’ouvre simplement jamais.

### Vérifier que votre plateforme peut servir ces fichiers

Les deux fichiers doivent répondre à ces adresses exactes sur votre propre domaine, sans redirection. Certains créateurs de sites documentent une façon de les publier (Framer, par exemple) ; sur d’autres, des fils de forum montrent des utilisateurs réduits aux redirections, qu’Apple et Android refusent. Posez la question avant de vous engager. Si l’outil ne peut pas servir ces fichiers, publiez les liens profonds sur un sous-domaine comme `go.exemple.fr`, chez un hébergeur où vous contrôlez les fichiers.

Pour tester, ouvrez les deux adresses dans un navigateur (vous devez voir le fichier, pas une redirection), puis essayez les liens sur un téléphone après une installation neuve. Apple prévient aussi que ces liens sont une porte d’entrée dans votre app : elle doit valider chaque paramètre et ne jamais laisser un lien supprimer des données ou afficher des informations sensibles à lui seul. Ma {{< a key="mobile-app-security-checklist" >}}checklist de sécurité d’une application mobile{{< /a >}} couvre le reste.

### Les liens différés après Firebase Dynamic Links

Ouvrir le bon écran après l’installation de l’app par un nouvel utilisateur s’appelle le deep linking différé (deferred deep linking). D’anciens tutoriels recommandent Firebase Dynamic Links pour cela, mais Google a fermé le service le 25 août 2025, et tous les liens qu’il servait ont cessé de fonctionner. Les solutions vers lesquelles Google renvoie, App Links et liens universels, ne couvrent pas la partie différée, qui passe désormais par des services tiers de deep linking et d’attribution. Remplacez les anciennes adresses en page.link dans vos e-mails, vos QR codes et vos imprimés.

## La bannière intelligente : inviter sans masquer la page

La Smart App Banner d’Apple est une fine barre que Safari affiche en haut de la page sur iPhone et iPad : elle ouvre votre app si elle est installée, et sa page App Store sinon. Ajoutez cette balise dans le `<head>` de chaque page concernée :

```html
<meta name="apple-itunes-app" content="app-id=123456789, app-argument=https://exemple.fr/depenses/123">
```

`app-id` (obligatoire) est le numéro affiché comme **Apple ID** dans les informations de votre app sur App Store Connect ; `app-argument` (facultatif) est une URL transmise à l’app pour qu’elle ouvre l’écran correspondant. Une fois fermée, la bannière ne revient pas, et elle reste masquée sur les appareils qui ne peuvent pas faire tourner l’app ou là où l’app n’est pas disponible. Sur Squarespace, la balise se place dans le champ d’en-tête de l’injection de code.

Ne la remplacez pas par une fenêtre « Téléchargez notre app » en plein écran. Apple oppose sa bannière à un plein écran qui interrompt la lecture, et les consignes de Google Search Central sur les interstitiels intrusifs demandent une bannière qui n’occupe qu’une petite partie de l’écran, pour que les visiteurs et les moteurs de recherche accèdent tout de suite au contenu. Pour les visiteurs sur Android, une bannière légère faite maison respecte ces consignes : une ligne de texte, le badge Google Play et un bouton de fermeture, affichés seulement sur Android et masqués une fois fermés.

## Avant le lancement : la checklist du site de votre app

1. Landing page en ligne : titre qui nomme le problème, vraies captures, les deux badges (App Store en premier, même hauteur), FAQ.
2. Pages de confidentialité et d’assistance publiées, avec leurs URL dans vos fiches, plus le lien de suppression de compte si l’on peut créer un compte.
3. Une page par usage, chacune avec son titre et sa meta description ; site déclaré dans la Google Search Console.
4. Balisage SoftwareApplication sans note que vous ne pouvez pas afficher, vérifié avec le test des résultats enrichis de Google.
5. Les deux fichiers d’association servis à leurs adresses `.well-known` en HTTPS, sans redirection ; liens testés sur une installation neuve.
6. Balise de la Smart App Banner là où elle sert ; bannière légère et refermable pour les visiteurs sur Android.
7. Anciens liens Firebase Dynamic Links remplacés partout.

L’essentiel de cette liste ne demande pas de développeur : les pages, les mots-clés, les badges et la balise de la bannière relèvent du travail sur le site, que vous pouvez faire vous-même. Les fichiers d’association et les réglages dans l’app reviennent à la personne qui la développe : transmettez-lui cette page.
