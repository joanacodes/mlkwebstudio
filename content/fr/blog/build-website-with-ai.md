---
title: "Créer un site internet avec l’IA et l’héberger gratuitement sur GitHub Pages"
seo_title: "Créer un site internet avec l’IA et l’héberger gratuitement"
description: "Créer un site internet avec l’IA pas à pas : Claude rédige les pages, GitHub Pages les héberge gratuitement et vous reliez votre nom de domaine en HTTPS."
slug: "creer-site-internet-avec-ia"
translationKey: "build-website-with-ai"
date: 2026-10-17T08:20:00+02:00
lastmod: 2026-10-17T08:20:00+02:00
category: "websites"
article_type: "tutorial"
keywords: ["créer un site internet avec l’IA", "héberger un site sur GitHub Pages", "GitHub Pages nom de domaine", "créer un site avec Claude", "créer un site web avec l’IA gratuitement", "site vitrine statique"]
summary: "Pour créer un site internet avec l’IA, donnez un brief précis à un assistant comme Claude, demandez un site statique en HTML et CSS, et vérifiez chaque mot. Déposez les fichiers dans un dépôt GitHub public, publiez-les avec GitHub Pages, validez votre domaine, faites-le pointer avec quatre enregistrements A et un CNAME www, puis cochez Enforce HTTPS. L’hébergement est gratuit, seul le domaine se paie, mais GitHub Pages convient à un site vitrine, pas à une boutique."
cover: "build-website-with-ai"
cover_alt: "Une fenêtre de terminal derrière un verre cannelé, à côté des mots Claude et GitHub Pages reliés par une flèche"
related: ["dns-records-explained", "fr-domain-names", "spaceship-hosting", "build-app-with-ai", "claude-vs-chatgpt"]
services: ["websites"]
faq:
  - q: "Faut-il savoir coder pour créer un site internet avec l’IA ?"
    a: "Non, mais il faut accepter d’ouvrir des fichiers, de lire un peu de HTML et de suivre les étapes dans l’ordre. L’IA écrit le code ; à vous de vérifier le contenu, de déposer les fichiers et de demander des corrections quand quelque chose cloche."
  - q: "Peut-on modifier son site soi-même une fois en ligne ?"
    a: "Oui. Ouvrez le fichier de la page dans votre dépôt GitHub, cliquez sur l’icône en forme de crayon en haut à droite, modifiez le texte et cliquez sur Commit changes : le site se met à jour quelques minutes plus tard. Pour un changement plus important, donnez le fichier actuel à Claude et demandez la nouvelle version."
  - q: "Faut-il un abonnement payant à Claude pour créer un site ?"
    a: "Pas pour un petit site : la formule gratuite de Claude permet déjà de créer des fichiers. À la date de rédaction (octobre 2026), la [page de tarifs de Claude](https://claude.com/pricing) affiche Claude Pro à 20 $ par mois hors taxes, ou 17 $ par mois en paiement annuel, avec plus d’usage, plus de modèles et Claude Code. Cette page n’affiche aucun prix en euros : vérifiez le montant au moment du paiement."
  - q: "Peut-on changer d’hébergeur plus tard ?"
    a: "Oui. Un site statique est un dossier de fichiers que n’importe quel hébergeur sait servir : déposez-les chez le nouvel hébergeur, modifiez vos enregistrements DNS, puis retirez le domaine personnalisé des réglages Pages de votre dépôt et supprimez les anciens enregistrements GitHub."
---

Ce tutoriel montre comment créer un site internet avec l’IA, pas à pas : Claude écrit un petit site en HTML et CSS à partir de votre brief, GitHub Pages l’héberge gratuitement et votre nom de domaine pointe dessus en HTTPS. Les fichiers restent à vous. Les menus de GitHub et les enregistrements DNS sont ceux d’octobre 2026, et je précise les limites qui excluent cette méthode pour certaines entreprises.

En général, je déconseille WordPress et Webflow aux indépendants : leur prise en main est longue, les deux font de vous votre propre webmaster, et tous mes clients qui étaient sur WordPress voulaient en partir, à cause de sa complexité et de ses extensions. Webflow convient si quelqu’un gère vos modifications à votre place, mais aujourd’hui, il est plus simple de créer un site avec l’IA et de l’héberger sur GitHub, chez Spaceship ou ailleurs. Le site que vous lisez tourne sur Hugo et GitHub Pages, et ce tutoriel fait partie de mon guide pour {{< a key="small-business-website-guide" >}}créer un site internet professionnel{{< /a >}}.

## Trois façons de créer un site internet avec l’IA

« Créer un site avec l’IA » recouvre trois méthodes, qui diffèrent sur la propriété du code, la façon de le modifier et le coût mensuel.

| | Assistant IA + GitHub Pages | Créateur de site IA | Générateur d’applications |
|---|---|---|---|
| Exemples | Claude, puis GitHub Pages | Wix Harmony, Squarespace Blueprint AI, Alf Website Studio de Spaceship | Lovable, Bolt, v0 |
| Ce que vous obtenez | Des fichiers HTML et CSS à vous | Un site dans l’éditeur de la plateforme | Une application web, souvent en React ou Next.js |
| Pour modifier | Vous changez les fichiers, ou l’IA le fait | Glisser-déposer, ou conversation | Conversation avec le générateur |
| Coût | Hébergement gratuit, plus le domaine | Un abonnement mensuel | Une offre gratuite, puis un abonnement décompté en crédits ou en tokens |
| Changer d’hébergeur | N’importe quel hébergeur sert les fichiers | Limité : Wix indique que ses sites ne s’exportent pas, Squarespace n’exporte qu’une partie du contenu | En général, via GitHub ou un export, souvent avec un développeur |

Ce tutoriel suit la première méthode, qui convient à un site vitrine : accueil, services, à propos, contact et pages légales. Elle ne convient pas dans trois cas :

- **Vous vendez en ligne.** Les règles de GitHub excluent les boutiques (voir les limites plus bas).
- **Il vous faut des comptes clients, des réservations ou des paiements.** C’est une application, et mon guide pour {{< a key="build-app-with-ai" >}}créer une application avec l’IA{{< /a >}} explique où un projet mené seul doit s’arrêter.
- **Vous voulez modifier votre site comme un document.** Une plateforme vous conviendra mieux : Squarespace est celle que je propose aux clients qui gèrent eux-mêmes leur site, et mon comparatif {{< a key="squarespace-vs-wordpress" >}}Squarespace ou WordPress{{< /a >}} explique pourquoi.

## Ce qu’il vous faut avant de commencer

- **Un assistant IA.** J’utilise Claude : dans mon travail, ChatGPT invente un peu trop souvent, alors que Claude, Fable 5.1 en particulier, s’est montré extrêmement fiable (voir mon comparatif {{< a key="claude-vs-chatgpt" >}}Claude ou ChatGPT{{< /a >}}). La formule gratuite, qui utilise les modèles Sonnet et Haiku et non Fable, suffit pour commencer.
- **Un compte GitHub gratuit.** Avec la formule gratuite, le dépôt qui contient votre site doit être public : tout le monde peut lire ses fichiers, mais personne d’autre que vous ne peut les modifier.
- **Un nom de domaine.** J’utilise Spaceship par habitude, et je fais confiance à Namecheap, qui l’a créé. Pour un .fr, voyez mon guide du {{< a key="fr-domain-names" >}}nom de domaine .fr{{< /a >}}.
- **Votre contenu** : services, zones d’intervention, téléphone, adresse, logo, informations légales et photos. Quand un client n’en a pas, je génère ou j’achète des photos, mais de vraies images de votre travail valent mieux.

## Étape 1 : faire écrire le site par Claude à partir d’un brief précis

Un site créé avec l’IA ne vaut que ce que vaut son brief. Pour mes clients, je commence par des questions sur l’entreprise, son offre et les clients qu’elle préfère, puis je travaille l’identité visuelle, la mise en page, les mots-clés et les textes avec l’IA, jusqu’à ce que le résultat me convienne. Suivez le même ordre, à plus petite échelle.

### Rédigez le brief avant d’ouvrir Claude

Répondez à ces questions dans un fichier texte :

1. Qui sont vos clients, et que vous demandent-ils le plus souvent ?
2. De quelles pages avez-vous besoin ? En général : accueil, services, à propos, contact, mentions légales et politique de confidentialité.
3. Que doit faire un visiteur : vous appeler, vous écrire ou venir sur place ?
4. Quels mots vos clients tapent-ils dans Google pour trouver une entreprise comme la vôtre ? Chaque page doit répondre à l’une de ces recherches.
5. Quels faits le site peut-il affirmer : services, zones, horaires, tarifs s’ils sont publics, certifications ?

### Demandez des fichiers simples, sans framework

Collez ensuite vos réponses dans Claude avec une consigne comme celle-ci :

```text
Crée le site vitrine d’une petite entreprise en fichiers statiques.
Entreprise : [nom], [métier] à [ville], intervient sur [zone].
Clients : [qui ils sont, ce qu’ils demandent le plus].
Pages : Accueil, Services, À propos, Contact, Mentions légales,
Politique de confidentialité.
Action principale : appeler le [téléphone] ou écrire à [adresse].
Ton : français simple et direct, vouvoiement, sans superlatifs.
Utilise uniquement ces faits, sans inventer d’avis, de chiffres
ni de dates : [services, zones, horaires, tarifs s’ils sont publics].
HTML et CSS simples : pas de framework, pas de build, pas de script
externe. index.html à la racine, un fichier par page, un seul
styles.css, un dossier images. Liens relatifs uniquement.
Mobile d’abord. Chaque page : son title, sa meta description
et un seul H1. Donne-moi chaque fichier en entier.
```

Trois lignes comptent surtout :

- **Pas de framework, pas de build.** GitHub Pages sert les fichiers tels quels, alors que Lovable, Bolt et v0 produisent surtout des projets React ou Next.js qu’il faut d’abord compiler.
- **Des liens relatifs.** Un dépôt qui ne s’appelle pas `<username>.github.io` est publié à l’adresse `https://<username>.github.io/<nom-du-depot>/` tant que votre domaine n’est pas relié : un lien vers `/styles.css` y manquerait sa cible.
- **Aucun fait inventé.** Livrée à elle-même, une IA comble les vides avec une date de création, des avis cinq étoiles ou une garantie que vous n’avez jamais proposée.

### Vérifiez chaque ligne avant de publier

Téléchargez les fichiers de Claude dans un même dossier et double-cliquez sur `index.html` pour ouvrir le site dans votre navigateur ; réduisez la fenêtre pour vérifier l’affichage sur mobile. Lisez ensuite chaque page comme un client : supprimez tout ce que vous ne pouvez pas prouver, vérifiez le numéro de téléphone chiffre par chiffre et demandez une modification à la fois, en gardant une copie de chaque version qui fonctionne.

Google juge la page, pas l’outil : ses [recommandations sur les contenus générés par IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content?hl=fr) demandent exactitude et qualité, et préviennent que produire des pages en masse sans valeur pour le lecteur peut enfreindre ses règles contre le spam. Depuis le 1er octobre 2026, elles jugent aussi essentiel de vérifier et de relire à la main tout contenu généré par IA avant publication, métadonnées comprises.

{{< screenshot id="build-website-with-ai-01" alt="Une conversation Claude avec le brief du site et les fichiers index.html, services.html et styles.css générés" >}}

{{< callout type="tip" >}}Gardez votre brief dans un fichier texte à côté du site. **Chaque modification future partira de ce fichier**, et vous n’aurez plus à présenter votre entreprise à l’IA.{{< /callout >}}

## Étape 2 : déposer les fichiers dans un dépôt GitHub

Un dépôt (repository) est un dossier sur GitHub qui garde vos fichiers et l’historique de chaque modification. L’interface de GitHub est en anglais : je cite ses menus tels qu’ils s’affichent.

1. Créez un compte gratuit sur github.com. Choisissez bien votre identifiant (username) : il apparaît dans votre adresse par défaut, `<username>.github.io`.
2. Cliquez sur **+** en haut à droite, puis sur **New repository**. Nommez le dépôt `<username>.github.io`, en minuscules : GitHub le publie à la racine de votre adresse par défaut.
3. Choisissez la visibilité **Public**, activez **Add README** pour que le dépôt ne soit pas vide, puis cliquez sur **Create repository**.
4. Ouvrez **Add file** > **Upload files** et glissez le contenu de votre dossier, pas le dossier lui-même, pour que `index.html` soit à la racine. La page d’envoi accepte jusqu’à 100 fichiers à la fois et 25 Mo par fichier.
5. Ajoutez un court message, laissez l’option d’enregistrer directement sur la branche **main** et cliquez sur **Commit changes**.

{{< screenshot id="build-website-with-ai-02" alt="La page Create a new repository de GitHub, avec le nom username.github.io, la visibilité Public et Add README activé" >}}

{{< screenshot id="build-website-with-ai-03" alt="La page Upload files de GitHub avec index.html, les autres pages HTML, styles.css et le dossier images déposés" >}}

{{< callout type="warning" >}}Avec la formule gratuite, **tout le contenu du dépôt est public**. N’y déposez jamais de mot de passe, de clé API, de fichier clients ni de notes privées, même dans un fichier auquel le site ne renvoie pas.{{< /callout >}}

## Étape 3 : publier le site avec GitHub Pages

1. Dans votre dépôt, cliquez sur **Settings**, puis sur **Pages** dans la colonne de gauche, rubrique « Code, planning, and automation ».
2. Sous **Build and deployment**, réglez **Source** sur **Deploy from a branch**.
3. Choisissez la branche **main** et le dossier **/ (root)**, puis cliquez sur **Save**.
4. Patientez : d’après GitHub, une modification peut mettre jusqu’à 10 minutes à être publiée. Cliquez ensuite sur **Visit site**, sur la même page.

Ensuite, chaque fichier modifié dans le dépôt se publie tout seul en quelques minutes.

{{< screenshot id="build-website-with-ai-04" alt="Les réglages Pages d’un dépôt GitHub, avec Source sur Deploy from a branch, la branche main et le dossier / (root)" >}}

Avec un générateur de site comme Hugo, choisissez plutôt **GitHub Actions** comme source : un workflow tout prêt construit et publie le site (Jekyll, que GitHub Pages sait construire lui-même, fonctionne aussi depuis une branche). Mon propre site fonctionne ainsi, et parmi les sites de mes clients, Edenel Nettoyage tourne sur Hugo, deux sites de Pilotech sur Jekyll, et Edenel Patrimoine est en HTML simple.

## Étape 4 : relier votre nom de domaine à GitHub Pages

L’ordre compte : validez le domaine, ajoutez-le au dépôt, et seulement ensuite faites pointer vos DNS vers GitHub. La validation empêche d’autres utilisateurs de GitHub de publier sur votre domaine, et pointer les DNS en premier pourrait permettre à quelqu’un d’héberger un site sur l’un de vos sous-domaines. Les enregistrements se saisissent chez votre hébergeur DNS, souvent votre registrar (chez Spaceship, dans **Advanced DNS**, rubrique **Custom records**).

### Validez le domaine dans votre compte GitHub

1. Cliquez sur votre photo de profil en haut à droite, puis sur **Settings** : les réglages de votre compte, pas ceux du dépôt.
2. Cliquez sur **Pages** dans la colonne de gauche, puis sur **Add a domain**.
3. Saisissez votre domaine, par exemple `votre-entreprise.fr`, et cliquez sur **Add domain**.
4. GitHub affiche un enregistrement TXT nommé `_github-pages-challenge-<username>`, avec un code pour valeur. Créez-le chez votre hébergeur DNS.
5. De retour sur GitHub, cliquez sur **Verify**. Une modification DNS peut prendre jusqu’à 24 heures ; si vous avez quitté la page, le menu **…** à côté du domaine propose **Continue verifying**.

Conservez cet enregistrement TXT définitivement : GitHub en a besoin pour que le domaine reste validé.

{{< screenshot id="build-website-with-ai-05" alt="Les réglages Pages du compte GitHub avec les instructions Add a DNS TXT record pour un domaine en cours de validation" >}}

### Ajoutez le domaine au dépôt

Dans **Settings** > **Pages** du dépôt, saisissez votre domaine sous **Custom domain** et cliquez sur **Save**. Quand vous publiez depuis une branche, GitHub ajoute au dépôt un fichier nommé `CNAME` : laissez-le en place. La vérification DNS échoue tant que les enregistrements ci-dessous manquent : c’est normal. Vous pouvez enregistrer le domaine sans www ou avec www : quand ces enregistrements couvrent les deux adresses, GitHub redirige l’une vers l’autre.

### Créez les enregistrements DNS

Supprimez d’abord ce que votre registrar a créé par défaut sur le domaine racine (@) et sur `www` (page de parking, redirection, enregistrements A, AAAA, ALIAS ou CNAME), mais gardez les enregistrements MX et TXT qui font fonctionner vos emails. Créez ensuite ceux-ci :

```text
Type   Hôte                                 Valeur
TXT    _github-pages-challenge-<username>   le code fourni par GitHub
A      @                                    185.199.108.153
A      @                                    185.199.109.153
A      @                                    185.199.110.153
A      @                                    185.199.111.153
AAAA   @                                    2606:50c0:8000::153
AAAA   @                                    2606:50c0:8001::153
AAAA   @                                    2606:50c0:8002::153
AAAA   @                                    2606:50c0:8003::153
CNAME  www                                  <username>.github.io.
```

Ces valeurs viennent de la [documentation de GitHub sur les domaines personnalisés](https://docs.github.com/fr/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) à la date de rédaction. Les enregistrements AAAA (IPv6) sont facultatifs ; GitHub conseille de garder les A à côté. L’enregistrement `www` ne contient jamais le nom du dépôt.

Deux détails font souvent trébucher. Le point final : certaines interfaces veulent qu’une cible CNAME se termine par un point, d’autres l’ajoutent pour vous. Ce point est le seul vrai problème que j’ai rencontré avec des domaines Squarespace et OVH, et mon guide des {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} explique pourquoi il compte autant. Une fois l’enregistrement www sauvegardé, interrogez-le avec un outil de recherche DNS en ligne : si la cible affiche `<username>.github.io.votre-entreprise.fr`, l’interface a ajouté votre domaine et il fallait le point. Et pas de joker : GitHub déconseille fortement un enregistrement `*` (wildcard), qui expose vos sous-domaines à un détournement, même si le domaine est validé.

{{< screenshot id="build-website-with-ai-06" alt="La page des enregistrements DNS d’un registrar avec le TXT de GitHub, les quatre enregistrements A, les quatre AAAA et le CNAME www" >}}

### Activez le HTTPS

Une fois sa vérification DNS réussie, GitHub demande un certificat à Let’s Encrypt. Cochez **Enforce HTTPS** dans **Settings** > **Pages** ; l’option peut mettre jusqu’à 24 heures à apparaître. Si le certificat semble bloqué, cliquez sur **Remove** à côté du domaine, saisissez-le de nouveau et cliquez sur **Save** pour relancer. Si le navigateur signale ensuite du contenu mixte, demandez à Claude de remplacer chaque adresse en `http://` des pages par `https://`.

{{< screenshot id="build-website-with-ai-07" alt="Les réglages Pages du dépôt avec le domaine personnalisé enregistré, la vérification DNS réussie et Enforce HTTPS coché" >}}

## Ce que GitHub Pages ne fait pas

GitHub Pages est généreux pour un site vitrine, mais ses [limites d’utilisation](https://docs.github.com/fr/pages/getting-started-with-github-pages/github-pages-limits) sont nettes.

- **Pas d’activité commerciale en ligne.** GitHub interdit d’utiliser Pages comme hébergement gratuit pour une boutique, une activité en ligne ou un logiciel vendu en abonnement (SaaS), et précise qu’un site Pages ne doit pas traiter de mots de passe ni de numéros de carte.
- **Pas de code côté serveur.** Ni PHP, ni Ruby, ni Python : un formulaire de contact passe par un service de formulaires externe, alors qu’un numéro de téléphone et un lien email ne demandent rien. Chez Pilotech, les demandes arrivent par formulaire et par téléphone : donnez au numéro autant de place qu’au formulaire.
- **Taille.** Jusqu’à 1 Go par site et une limite souple de 100 Go de trafic par mois : bien plus qu’il n’en faut pour un site vitrine.
- **Un hébergeur à déclarer.** GitHub enregistre l’adresse IP des visiteurs à des fins de sécurité : citez-le dans {{< a key="privacy-policy-guide" >}}votre politique de confidentialité{{< /a >}}, et donnez ses coordonnées d’hébergeur dans {{< a key="website-legal-notice" >}}vos mentions légales{{< /a >}}, obligatoires sur tout site professionnel.

Si GitHub Pages devient trop étroit, les mêmes fichiers fonctionnent chez n’importe quel hébergeur, comme o2switch ou Infomaniak, que je recommande. Chez Spaceship, Web Hosting accepte le dossier via cPanel, et Starlight Hyperlift, facturé à l’heure, fait tourner des applications depuis un dépôt GitHub ; mon guide de l’{{< a key="spaceship-hosting" >}}hébergement Spaceship{{< /a >}} les compare.

{{< callout type="warning" >}}Si vous supprimez le dépôt ou désactivez GitHub Pages, retirez en même temps les enregistrements GitHub de vos DNS. **Un domaine qui pointe encore vers GitHub sans site derrière peut être détourné**, sauf s’il est validé dans votre compte.{{< /callout >}}

## Après la mise en ligne : checklist, et quand passer la main

Avant d’annoncer le site, vérifiez ces points :

1. Ouvrez votre adresse avec et sans `www`, en `http://` et en `https://` : les quatre doivent mener à la même page sécurisée.
2. Testez chaque page sur votre téléphone, liens du numéro et de l’email compris.
3. Demandez à Claude un `sitemap.xml` et un `robots.txt`, déposez-les et soumettez le sitemap dans Google Search Console.
4. Vérifiez que chaque page a son propre titre et sa propre description, écrits pour la recherche à laquelle elle répond.
5. Utilisez exactement le même nom, la même adresse et le même numéro sur le site et sur votre fiche Google Business Profile.
6. Activez le renouvellement automatique du domaine et laissez l’enregistrement TXT de GitHub en place.

Un site n’est jamais terminé : tarifs, horaires et services changent, et quelqu’un doit mettre les fichiers à jour. Si ce quelqu’un, c’est vous, cette méthode ne coûte guère plus que le domaine et quelques soirées de travail soigné.

Passez la main quand le site doit faire plus que présenter votre entreprise : une boutique, des réservations, des comptes clients, ou un marché où vous devez surclasser des concurrents qui investissent dans leur site. Je veux que les prospects de mes clients soient un peu intimidés par leur site, pour qu’ils les prennent au sérieux et négocient moins, et cela demande du travail de design et de SEO. Des fichiers statiques vont pourtant loin : le {{< a page="/projects/edenel-patrimoine" >}}site d’Edenel Patrimoine{{< /a >}} est en HTML, CSS et JavaScript simples, avec des annonces filtrées par vente ou location, une page par bien et une estimation indicative immédiate. Pour un site vitrine de cinq pages, en revanche, vous n’avez pas besoin de moi.
