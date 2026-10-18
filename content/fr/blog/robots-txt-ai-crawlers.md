---
title: "Robots.txt et IA : quels robots autoriser, lesquels bloquer"
seo_title: "Robots.txt IA : quels robots autoriser ou bloquer"
description: "Robots.txt IA : quels robots autoriser pour que ChatGPT, Claude et Perplexity vous citent, comment refuser l’entraînement, et trois fichiers à copier."
slug: "robots-txt-ia"
translationKey: "robots-txt-ai-crawlers"
date: 2026-10-17T08:30:00+02:00
lastmod: 2026-10-17T08:30:00+02:00
category: "aio"
article_type: "tutorial"
keywords: ["robots.txt IA", "bloquer les robots IA", "GPTBot robots.txt", "OAI-SearchBot", "ClaudeBot", "liste des robots IA"]
summary: "Autorisez les robots de recherche des IA (OAI-SearchBot pour ChatGPT, Claude-SearchBot pour Claude et PerplexityBot) pour que les assistants trouvent et citent votre entreprise : les bloquer peut vous retirer de leurs réponses. Bloquer les robots d’entraînement comme GPTBot ou ClaudeBot est un choix distinct, sans effet sur la recherche. Vérifiez aussi Cloudflare et votre outil de création de site : tous deux peuvent bloquer les robots IA à votre insu."
cover: "robots-txt-ai-crawlers"
cover_alt: "Un bouclier bleu marqué d’une coche sur un fond de verre cannelé, à côté du mot robots.txt"
related: ["get-recommended-by-chatgpt", "llms-txt-explained", "google-ai-overviews-ai-mode", "squarespace-seo", "get-website-indexed-google"]
services: ["seo"]
faq:
  - q: "Un site a-t-il besoin d’un fichier robots.txt ?"
    a: "Pas forcément. Sans fichier, les robots considèrent tout le site comme ouvert, ce qui convient à la plupart des petites entreprises. La plupart des plateformes en créent un de toute façon, et c’est l’endroit naturel pour indiquer l’adresse de votre plan de site (sitemap)."
  - q: "Peut-on bloquer les robots IA sur une partie du site seulement ?"
    a: "Oui. Ajoutez une ligne `Disallow` pour le dossier dans le groupe du robot concerné, par exemple `Disallow: /espace-membres/` sous `User-agent: GPTBot` : le reste du site lui reste ouvert. Recopiez aussi dans ce groupe les règles du groupe `*` qui doivent s’appliquer à lui."
  - q: "Bloquer les robots IA retire-t-il mes contenus des modèles déjà entraînés ?"
    a: "Non. Un blocage ne vaut que pour les explorations à venir. Anthropic, par exemple, indique que bloquer ClaudeBot signale que les futurs contenus du site doivent être exclus de l’entraînement. Le robots.txt n’a aucun effet sur ce qui a été collecté avant."
  - q: "Combien de temps faut-il pour qu’une modification du robots.txt soit prise en compte ?"
    a: "Environ 24 heures pour la recherche de ChatGPT selon OpenAI, et Google indique garder en général le fichier en cache jusqu’à 24 heures. Les autres ne publient pas de délai : laissez passer quelques jours avant de juger le résultat."
  - q: "Les robots IA respectent-ils la directive Crawl-delay ?"
    a: "Certains. Anthropic indique que ses robots suivent cette règle non standard, qui ralentit leurs visites, alors que Google l’ignore. Pour les autres, vérifiez la documentation de chaque fournisseur avant de compter dessus."
---

Régler son robots.txt pour les robots IA revient à distinguer les robots de recherche des robots d’entraînement. OpenAI, Anthropic et Perplexity ont chacun un robot qui trouve des pages pour les réponses de leur assistant, et OpenAI comme Anthropic en ont un second qui collecte des pages pour entraîner leurs futurs modèles. Laissez entrer les premiers, et ChatGPT, Claude ou Perplexity peuvent citer vos pages ; bloquez-les, et vous risquez de disparaître de leurs réponses. Bloquer les seconds est une autre décision, sans effet sur la recherche.

Le piège : beaucoup de sites bloquent les robots IA à l’insu de leur propriétaire, à cause d’un réglage Cloudflare activé par défaut, d’une case cochée dans un outil de création de site ou d’une extension.

Ce tutoriel fait partie de mon {{< a key="ai-search-geo-guide" >}}guide complet du référencement IA{{< /a >}}.

## Ce que fait le fichier robots.txt, et ce qu’il ne fait pas

Le robots.txt est un fichier texte placé à la racine d’un site (votredomaine.fr/robots.txt) qui indique aux robots d’exploration les parties du site qu’ils peuvent visiter. Chaque groupe de règles commence par une ou plusieurs lignes `User-agent` qui nomment les robots concernés, suivies de lignes `Disallow` (interdire) et `Allow` (autoriser). L’astérisque `*` désigne tous les robots non nommés ailleurs.

```
User-agent: GPTBot
Disallow: /

User-agent: *
Allow: /

Sitemap: https://www.votredomaine.fr/sitemap.xml
```

Ce fichier demande à GPTBot de ne pas explorer le site et laisse entrer tous les autres robots. La ligne `Sitemap` donne l’adresse de votre plan de site.

Trois pièges classiques :

- **Un robot qui a son propre groupe ignore le groupe `*`.** Si vous écrivez un groupe pour GPTBot, les règles placées sous `User-agent: *` ne s’appliquent plus à lui : recopiez-y celles qu’il doit suivre.
- **Chaque domaine et sous-domaine a besoin de son propre fichier.** Le robots.txt de www.votredomaine.fr ne couvre pas boutique.votredomaine.fr.
- **C’est une demande, pas un verrou.** Les robots sérieux la respectent, mais rien ne les y oblige : en août 2025, Cloudflare a accusé Perplexity de contourner des blocages avec des robots non déclarés, ce que Perplexity conteste. Et le fichier est public : n’y listez jamais de dossiers privés.

Le robots.txt contrôle l’exploration, pas l’indexation. Bloquer Googlebot par erreur est une cause classique de site invisible sur Google, et mon guide pour {{< a key="get-website-indexed-google" >}}référencer son site sur Google{{< /a >}} passe en revue les autres. Ne le confondez pas non plus avec le llms.txt : ce fichier plus récent résume votre site pour les outils d’IA mais n’ouvre ni ne ferme aucune porte (voir mon guide sur le {{< a key="llms-txt-explained" >}}fichier llms.txt{{< /a >}}).

## Recherche, entraînement, demandes d’utilisateurs : les trois familles de robots IA

La plupart des entreprises d’IA séparent leurs robots selon leur rôle :

- **Les robots de recherche** construisent l’index où l’assistant cherche quand il répond. Bloquez-en un, et vos pages peuvent disparaître de ses réponses.
- **Les robots d’entraînement** collectent des pages pour entraîner les futurs modèles. Bloquez-en un, et vos pages sortent des prochains entraînements, sans effet sur la recherche.
- **Les robots à la demande** ouvrent une page quand quelqu’un le demande à l’assistant, par exemple en collant un lien dans la conversation.

| Entreprise | Robot de recherche | Robot d’entraînement | Robot à la demande |
|---|---|---|---|
| OpenAI (ChatGPT) | OAI-SearchBot | GPTBot | ChatGPT-User |
| Anthropic (Claude) | Claude-SearchBot | ClaudeBot | Claude-User |
| Perplexity | PerplexityBot | aucun | Perplexity-User |
| Google (recherche, Gemini) | Googlebot | Google-Extended (un jeton, pas un robot) | non traité ici |

### OpenAI : OAI-SearchBot, GPTBot et ChatGPT-User

La [documentation d’OpenAI sur ses robots](https://developers.openai.com/api/docs/bots) est la plus claire de toutes. OAI-SearchBot décide si vos pages peuvent apparaître dans la recherche ChatGPT : selon OpenAI, un site qui le bloque en est exclu, hormis de simples liens de navigation. GPTBot collecte des pages qui peuvent servir à entraîner les modèles d’OpenAI.

ChatGPT-User visite une page quand la demande d’un utilisateur l’exige. Depuis décembre 2025, OpenAI précise que, ces visites étant déclenchées par un utilisateur, le robots.txt peut ne pas s’appliquer, et que ChatGPT-User ne sert pas à décider de ce qui apparaît dans la recherche. Autre condition pour la recherche : votre hébergeur ou votre CDN doit accepter le trafic des adresses IP publiées par OpenAI pour OAI-SearchBot.

### Anthropic : Claude-SearchBot, ClaudeBot et Claude-User

Anthropic reprend les trois mêmes rôles sous ses propres noms, selon son [article d’aide sur l’exploration du web](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler) (en anglais). Ses trois robots respectent le robots.txt, et bloquer Claude-SearchBot ou Claude-User peut, selon Anthropic, réduire la visibilité de votre site dans les réponses de Claude.

### Perplexity : PerplexityBot et Perplexity-User

PerplexityBot construit l’index derrière les réponses de Perplexity, qui précise qu’il ne sert pas à entraîner des modèles d’IA ([page de Perplexity sur ses robots](https://docs.perplexity.ai/guides/bots), en anglais). Perplexity-User récupère des pages à la demande d’un utilisateur et, pour cette raison, ignore généralement le robots.txt, selon Perplexity.

### Google : Googlebot et Google-Extended

Chez Google, les Aperçus IA et le Mode IA, arrivés en France le 22 juillet 2026, puisent dans l’index de recherche habituel, celui de Googlebot : bloquer Googlebot vous retire de Google tout entier. Google-Extended n’est pas un robot mais un jeton à nommer dans le robots.txt. Il détermine si Google peut utiliser vos contenus pour entraîner ses modèles Gemini et pour étayer les réponses de l’application Gemini et de Vertex AI, sans aucun effet sur la recherche Google, Aperçus IA compris. Pour sortir des Aperçus IA et du Mode IA, l’outil est le réglage **IA générative dans la Recherche** de la Search Console (il n’est peut-être pas encore arrivé sur votre propriété), présenté dans mon guide sur les {{< a key="google-ai-overviews-ai-mode" >}}Aperçus IA et le Mode IA de Google{{< /a >}}.

### Les autres noms que vous croiserez

Parmi les dizaines d’autres noms, quatre méritent d’être connus :

- **Bingbot** explore le web pour Bing, et Bing Webmaster Tools signale quand Copilot, l’assistant de Microsoft, cite vos pages. Traitez-le comme Googlebot.
- **CCBot** appartient à Common Crawl, un organisme sans but lucratif dont l’archive ouverte du web alimente de nombreux jeux de données d’entraînement. Il respecte le robots.txt.
- **Applebot-Extended** est un jeton, comme Google-Extended : le bloquer demande que vos pages ne servent pas à entraîner les modèles d’Apple, tandis qu’Applebot continue d’explorer le web pour Siri et Spotlight.
- **Meta-ExternalAgent** sert notamment à l’entraînement des modèles d’IA de Meta. Ne le confondez pas avec facebookexternalhit, qui fabrique l’aperçu d’un lien partagé sur Facebook : bloquez celui-là, et vos liens partagés perdent leur image et leur titre.

## Quels robots IA une petite entreprise doit-elle autoriser ?

Pour presque toutes les petites entreprises, ma réponse est : tous, car les assistants IA sont devenus un endroit de plus où vos clients cherchent. Voici comment je tranche :

1. **Robots de recherche : autorisés.** OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot et Bingbot permettent aux assistants et aux moteurs de recherche de vous trouver. En bloquer un revient à retirer votre numéro d’un annuaire que vos clients consultent encore.
2. **Robots à la demande : autorisés.** Ils ne viennent que lorsque quelqu’un s’intéresse à vous ou colle votre lien : exactement la personne que vous voulez toucher.
3. **Robots d’entraînement : à vous de voir.** GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot et Meta-ExternalAgent alimentent les futurs modèles. Mon propre site les laisse entrer. L’argument pour faire de même : ce qu’un modèle a appris à l’entraînement fait partie de ce qu’il sait d’une entreprise quand il répond sans chercher. Les refuser est un choix défendable si vos contenus sont ce que vous vendez : le portfolio d’un photographe, les dessins d’une illustratrice, des articles payants ou une formation en ligne.

Le robots.txt n’est qu’une première étape : pour le reste (des pages de services claires, des mentions sur d’autres sites), lisez mon guide pour {{< a key="get-recommended-by-chatgpt" >}}apparaître dans ChatGPT{{< /a >}}.

## Robots.txt IA : trois fichiers prêts à copier

Remplacez votredomaine.fr par votre domaine, et ne gardez la ligne `Sitemap` que si cette adresse ouvre bien votre plan de site.

### Fichier 1 : ouvert à tous les robots (mon choix)

```
User-agent: *
Allow: /

Sitemap: https://www.votredomaine.fr/sitemap.xml
```

À l’adresse près, c’est le fichier de mlkwebstudio.com : tous les robots sont les bienvenus, IA ou non.

### Fichier 2 : recherche IA autorisée, entraînement refusé

```
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
User-agent: Meta-ExternalAgent
Disallow: /

User-agent: *
Allow: /

Sitemap: https://www.votredomaine.fr/sitemap.xml
```

Le premier groupe refuse les robots et jetons d’entraînement (plusieurs lignes `User-agent` peuvent partager les mêmes règles) ; le groupe `*` laisse entrer tous les autres. ChatGPT, Claude et Perplexity peuvent donc toujours vous citer, et vos pages restent en dehors des futurs entraînements, du moins chez les entreprises qui respectent le fichier. Un compromis à connaître : refuser Google-Extended prive aussi l’application Gemini de vos pages pour étayer ses réponses. Si Gemini compte pour vos clients, supprimez cette ligne.

### Fichier 3 : tous les robots IA refusés

```
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: GPTBot
User-agent: Claude-SearchBot
User-agent: Claude-User
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: Perplexity-User
User-agent: Google-Extended
User-agent: Applebot-Extended
User-agent: CCBot
User-agent: Meta-ExternalAgent
Disallow: /

User-agent: *
Allow: /

Sitemap: https://www.votredomaine.fr/sitemap.xml
```

Pesez le coût avant de l’utiliser : vous sortez en grande partie des réponses de ChatGPT, Claude et Perplexity, alors que les Aperçus IA de Google, qui dépendent de Googlebot, peuvent toujours vous afficher. Et ChatGPT-User comme Perplexity-User peuvent continuer à venir à la demande d’un utilisateur, le robots.txt pouvant ne pas s’appliquer à eux selon leurs éditeurs.

{{< callout type="warning" >}}**Ne mettez jamais `Disallow: /` sous `User-agent: *` sur un site en ligne.** Cette seule ligne ferme la porte à tous les robots, Google compris. C’est parfois un vestige de la version de test du site : cherchez-la après chaque refonte.{{< /callout >}}

## Vérifier et modifier votre robots.txt, étape par étape

### Étape 1 : lire le fichier actuel

Ouvrez votredomaine.fr/robots.txt dans une fenêtre de navigation privée et cherchez trois choses :

1. `Disallow: /` sous `User-agent: *`, qui ferme la porte à tous les robots.
2. Un robot de recherche (OAI-SearchBot, Claude-SearchBot ou PerplexityBot) suivi de `Disallow: /`.
3. Des lignes que vous n’avez pas écrites, comme une liste de robots IA ajoutée par votre plateforme, une extension ou Cloudflare. Un nom seul ne bloque rien : c’est la ligne `Disallow` placée dessous qui compte.

{{< screenshot id="robots-txt-ai-crawlers-01" alt="Onglet de navigateur affichant un fichier robots.txt en texte brut, avec un groupe pour GPTBot et un groupe pour tous les autres robots" >}}

Une erreur « page introuvable » (404) signifie qu’il n’y a pas de fichier : rien n’est bloqué. Une erreur serveur (500 ou 503) est plus grave, car Google considère alors tout le site comme temporairement bloqué : demandez à votre hébergeur de la corriger.

### Étape 2 : sur Squarespace, vérifier le panneau des robots d’exploration

Squarespace écrit le fichier pour vous et ne vous laisse pas le modifier. Vous contrôlez en revanche le panneau des robots d’exploration, dans les **Paramètres** (**Crawlers** dans l’interface en anglais) :

- L’option de blocage des robots d’intelligence artificielle connus (« Block known artificial intelligence crawlers ») demande aux robots IA de la liste de Squarespace de rester à l’écart. Désactivée par défaut, elle ne permet pas de choisir les robots concernés : laissez-la désactivée si vous voulez que les assistants IA vous citent.
- L’option de blocage des moteurs de recherche (« Block search engine crawlers ») ferme aussi la porte à Google : ne l’activez jamais sur un site qui doit attirer des clients.

{{< screenshot id="robots-txt-ai-crawlers-02" alt="Paramètres Squarespace, panneau des robots d’exploration, avec l’option de blocage des robots d’intelligence artificielle connus désactivée" >}}

Je mets sur Squarespace les clients qui gèrent eux-mêmes leur site, parce qu’ils peuvent le modifier quand ils le veulent sans tout casser. Revers de la médaille : toute personne qui a accès au site peut cocher cette case, alors jetez-y un œil de temps en temps. Mon tutoriel de {{< a key="squarespace-seo" >}}référencement Squarespace{{< /a >}} liste les autres réglages à vérifier.

### Étape 3 : sur WordPress, trouver ce qui écrit le fichier

WordPress sert un robots.txt minimal tant qu’aucun vrai fichier n’est déposé à la racine du site, et les extensions SEO comme Yoast SEO proposent un éditeur pour le modifier. Les extensions de sécurité et les « bloqueurs d’IA » peuvent aussi ajouter leurs règles : si le fichier contient des lignes que vous n’avez pas écrites, regardez d’abord vos extensions. Plus il y en a, plus un réglage a d’endroits où se cacher, et c’est une des raisons pour lesquelles j’oriente les personnes qui gèrent elles-mêmes leur site vers des plateformes plus simples.

### Étape 4 : sur un site codé à la main, un hébergement mutualisé ou Hugo

Enregistrez un fichier texte nommé `robots.txt` à la racine du dossier que vous publiez, à côté de `index.html`. Chez un hébergeur mutualisé comme o2switch ou OVHcloud, déposez-le avec le gestionnaire de fichiers ou en FTP dans le dossier racine du site, souvent `public_html` ou `www`. Sur Hugo, qui fait tourner ce site, ajoutez `enableRobotsTXT = true` dans la configuration et écrivez vos règles dans un modèle `layouts/robots.txt`. Terminez-le par `Sitemap: {{ "sitemap.xml" | absURL }}`, comme sur ce site, et Hugo écrira l’adresse complète du plan de site à chaque génération.

### Étape 5 : sur Cloudflare, vérifier les réglages des robots IA

Si votre site passe par le proxy de Cloudflare (le nuage orange dans ses réglages DNS), Cloudflare peut bloquer les robots IA avant même qu’ils lisent votre robots.txt. Depuis le 1er juillet 2025, Cloudflare bloque par défaut les robots d’IA connus sur les domaines nouvellement ajoutés (il pose la question à l’ajout), et un site plus ancien a pu activer ce blocage en un clic.

Ouvrez votre domaine dans le tableau de bord Cloudflare et allez dans **AI Crawl Control**. Cette section montre quels robots IA visitent votre site, à quelle fréquence et s’ils respectent votre robots.txt, et permet d’autoriser ou de bloquer chacun d’eux ([documentation de Cloudflare](https://developers.cloudflare.com/ai-crawl-control/), en anglais). Vérifiez qu’OAI-SearchBot, Claude-SearchBot et PerplexityBot sont autorisés.

{{< screenshot id="robots-txt-ai-crawlers-03" alt="Tableau de bord Cloudflare, page AI Crawl Control, liste des robots IA avec leur statut autorisé ou bloqué" >}}

Si vous activez l’option de robots.txt géré (managed robots.txt), Cloudflare ajoute à votre fichier des règles qui demandent aux robots IA connus de rester à l’écart, et un signal de contenu comme `Content-Signal: search=yes, ai-train=no` : vos pages peuvent servir à la recherche, pas à l’entraînement. Là encore, ce sont des demandes.

### Étape 6 : vérifier que votre texte figure dans le HTML

GPTBot, ClaudeBot et PerplexityBot n’exécutent pas le JavaScript, contrairement à Googlebot : un texte qui n’apparaît qu’après le chargement des scripts peut leur sembler vide. Sur une de vos pages, faites un clic droit et choisissez **Afficher le code source de la page** (Ctrl+U sous Windows) : si vos services, vos villes et votre numéro de téléphone n’y figurent pas, les robots IA ne peuvent probablement pas les lire.

## Tester votre robots.txt après une modification

1. Rechargez votredomaine.fr/robots.txt dans une fenêtre privée pour vérifier que la nouvelle version est en ligne : les plateformes et les CDN servent parfois l’ancienne un moment.
2. Dans la Search Console, ouvrez **Paramètres**, puis le rapport **robots.txt**. Il affiche la version que Google a récupérée en dernier et signale les erreurs.
3. Testez votre page d’accueil et une page de service avec l’outil **Inspection de l’URL**, puis cliquez sur **Tester l’URL en direct** : le résultat indique si Googlebot a le droit de les explorer.
4. Sur Cloudflare, revenez dans AI Crawl Control quelques jours plus tard pour voir quels robots IA sont passés.

{{< screenshot id="robots-txt-ai-crawlers-04" alt="Paramètres de la Google Search Console, rapport robots.txt affichant le fichier récupéré en dernier par Google et son état" >}}

Les journaux du serveur, si votre hébergeur y donne accès, le montrent aussi : chaque visite porte le nom du robot dans son user-agent.

## Votre vérification des robots IA en 15 minutes

1. Ouvrez votredomaine.fr/robots.txt et cherchez `Disallow: /` sous `User-agent: *` ou sous un robot de recherche.
2. Tranchez pour les robots d’entraînement : les autoriser (fichier 1) ou les refuser (fichier 2).
3. Sur Squarespace, vérifiez que le blocage des robots d’intelligence artificielle est désactivé.
4. Sur Cloudflare, vérifiez dans AI Crawl Control qu’OAI-SearchBot, Claude-SearchBot et PerplexityBot sont autorisés.
5. Vérifiez que le texte important figure dans le code source de vos pages principales.
6. Un jour ou deux plus tard, consultez le rapport robots.txt de la Search Console.

Vous n’avez besoin de personne pour ce travail, pas même de moi : c’est un quart d’heure, et c’est gratuit. Si le fichier est géré par un développeur que vous ne pouvez plus joindre, ou par un compte Cloudflare dont plus personne n’a le mot de passe, c’est le genre de correction technique que prend en charge mon {{< a page="/services/seo" >}}accompagnement SEO{{< /a >}}.
