---
title: "Apparaître dans ChatGPT : comment faire recommander votre entreprise par l’IA"
seo_title: "Apparaître dans ChatGPT : le guide pour votre entreprise"
description: "Apparaître dans ChatGPT quand un client cherche votre métier : robots.txt, une page par service et par ville, avis, presse locale et un test chaque mois."
slug: "apparaitre-dans-chatgpt"
translationKey: "get-recommended-by-chatgpt"
date: 2026-10-17T08:25:00+02:00
lastmod: 2026-10-17T08:25:00+02:00
category: "aio"
article_type: "guide"
keywords: ["apparaître dans ChatGPT", "être recommandé par ChatGPT", "référencement ChatGPT", "OAI-SearchBot", "visibilité locale dans les IA"]
summary: "ChatGPT recommande les entreprises qu’il peut trouver, comprendre et voir confirmées par d’autres sites. Laissez OAI-SearchBot explorer votre site, donnez une page claire à chaque service et à chaque ville couverte, puis faites-vous citer ailleurs : fiche Google complète avec de vrais avis, annuaires cohérents, presse locale. Personne ne peut vous vendre une place garantie dans la réponse : testez chaque mois les questions de vos clients."
cover: "get-recommended-by-chatgpt"
cover_alt: "Barre de recherche au-dessus d’une liste de résultats, le premier mis en avant, avec le mot ChatGPT"
related: ["check-ai-visibility", "robots-txt-ai-crawlers", "local-seo-guide", "google-business-profile-setup", "get-press-coverage"]
services: ["seo"]
faq:
  - q: "Peut-on payer pour être recommandé par ChatGPT ?"
    a: "Non. Depuis fin août 2026, ChatGPT affiche des publicités en France aux utilisateurs de la version gratuite et de l’offre Go, mais elles apparaissent sous la réponse, signalées comme sponsorisées. En annonçant la publicité en janvier 2026, OpenAI a indiqué qu’elle n’influencerait pas les réponses de ChatGPT : la recommandation elle-même ne s’achète pas."
  - q: "Combien de temps faut-il pour apparaître dans ChatGPT ?"
    a: "Il n’y a pas de délai fixe. Selon OpenAI, une modification du robots.txt est prise en compte par la recherche de ChatGPT en 24 heures environ, mais être cité dépend du même travail de fond que le SEO : des pages claires et des preuves sur d’autres sites. Dans ses conseils pour choisir un prestataire SEO, Google indique qu’il faut en général de quatre mois à un an pour mettre en place les améliorations et en voir les bénéfices : c’est un horizon raisonnable ici aussi."
  - q: "ChatGPT peut-il recommander une entreprise sans site internet ?"
    a: "Oui, si d’autres sites la décrivent bien : fiche Google complète, annuaires, avis, articles de presse. Mais votre site est la seule source que vous maîtrisez, et le seul endroit où vos services, vos villes et vos prix sont écrits exactement comme vous voulez qu’on les répète."
  - q: "Pourquoi ChatGPT donne-t-il de fausses informations sur mon entreprise ?"
    a: "Le plus souvent parce qu’il a trouvé trop peu d’informations, ou des sources qui se contredisent : une ancienne adresse dans un annuaire, un établissement fermé, des prix différents d’une page à l’autre. Corrigez les sources, gardez un nom, une adresse, un téléphone et une liste de services identiques partout, puis refaites le test quelques semaines plus tard."
  - q: "Faut-il un fichier llms.txt pour apparaître dans ChatGPT ?"
    a: "Non. Aucun grand fournisseur d’IA n’a confirmé lire ce fichier, et les conditions d’OpenAI pour apparaître dans la recherche de ChatGPT se limitent à deux points : OAI-SearchBot doit pouvoir explorer le site, et votre hébergeur doit accepter son trafic. Le fichier ne fait pas de mal, mais ce n’est pas un raccourci."
  - q: "Ce travail sert-il aussi pour Gemini, Claude et Perplexity ?"
    a: "Oui. Gemini et le Mode IA de Google s’appuient sur la recherche Google, tandis que Claude et Perplexity envoient leurs propres robots de recherche (Claude-SearchBot et PerplexityBot). Le même travail de fond sert pour chacun : des pages claires et une entreprise confirmée par d’autres sites. Autorisez aussi ces robots dans votre robots.txt."
---

Une partie de vos clients ne commence plus par Google. Ils ouvrent ChatGPT et demandent « Quel électricien sérieux à Montreuil ? » ou « Quelle entreprise de ménage à Boulogne-Billancourt fait le nettoyage de fin de chantier ? », et l’outil répond par quelques noms, souvent avec un lien vers les pages où il les a trouvés. Pour apparaître dans ChatGPT, votre entreprise doit faire partie de ces noms : ChatGPT doit pouvoir accéder à votre site, comprendre ce que vous faites et où, puis voir d’autres sites le confirmer.

Il n’existe ni formulaire d’inscription ni place à acheter dans la réponse. L’essentiel du travail relève d’un bon référencement local, et vous pouvez en faire la plus grande partie vous-même en un mois. Pour mon propre travail, j’utilise Claude, en partie parce qu’à mon sens ChatGPT invente un peu trop souvent. C’est justement pour cela que ce travail de fond compte : quand une IA ne trouve pas d’informations claires sur vous, elle vous oublie ou elle devine.

Cet article fait partie de mon {{< a key="ai-search-geo-guide" >}}guide complet du référencement IA{{< /a >}}, qui traite aussi des Aperçus IA de Google, de Perplexity et de Claude.

## Comment ChatGPT choisit les entreprises qu’il recommande

ChatGPT peut répondre à partir de deux sources. La première, c’est ce que son modèle a appris pendant son entraînement, à partir de pages collectées des mois plus tôt. La seconde, c’est une recherche sur le web en direct, qu’il lance quand la question demande une information récente ou locale, comme un artisan dans une ville donnée. Pour ce type de question, c’est la recherche qui compte : une entreprise créée l’an dernier n’est peut-être pas du tout dans les données d’entraînement, mais elle peut figurer dans les résultats du jour.

OpenAI utilise un robot distinct pour chaque tâche ([documentation d’OpenAI sur ses robots](https://developers.openai.com/api/docs/bots)) :

| Robot | Son rôle |
|---|---|
| OAI-SearchBot | Trouve et lit les pages pour les réponses de la recherche ChatGPT |
| GPTBot | Collecte des pages pour entraîner les futurs modèles |
| ChatGPT-User | Visite une page quand la demande d’un utilisateur l’exige, par exemple pour ouvrir un lien |

Celui qui décide si votre entreprise peut être recommandée dans une réponse avec recherche, c’est **OAI-SearchBot**. Si vous le bloquez, vos pages disparaissent des réponses de la recherche ChatGPT, sauf peut-être sous la forme d’un simple lien. Bloquer GPTBot écarte vos pages de l’entraînement des futurs modèles, sans effet sur la recherche.

Le centre d’aide d’OpenAI pose deux conditions. Tout site public peut apparaître dans la recherche de ChatGPT, à condition qu’OAI-SearchBot soit autorisé et que votre hébergeur ou votre CDN accepte le trafic venant des adresses IP publiées par OpenAI ([centre d’aide d’OpenAI](https://help.openai.com/fr-fr/articles/9237897)). Pour construire sa réponse, ChatGPT peut aussi envoyer une version reformulée de la question à des moteurs de recherche tiers, et OpenAI ne publie pas le poids accordé à chaque source.

Personne en dehors d’OpenAI ne connaît la recette exacte. Ce que l’on sait se résume à trois chantiers : être accessible, être clair, être confirmé par d’autres sites.

{{< callout type="note" >}}**Personne ne peut vous garantir une recommandation.** Le centre d’aide d’OpenAI précise lui-même qu’aucun placement n’est garanti. Une agence ou un outil qui promet une place assurée dans les réponses de ChatGPT vend quelque chose qu’OpenAI ne propose pas.{{< /callout >}}

## Étape 1 : laisser ChatGPT accéder à votre site

Ouvrez votresite.fr/robots.txt dans un navigateur. Ce petit fichier texte indique aux robots ce qu’ils ont le droit de lire. Cherchez les noms OAI-SearchBot et GPTBot, ainsi qu’un groupe `User-agent: *` suivi de `Disallow: /`, qui ferme la porte à tous les robots. Si aucun des deux n’est nommé et que rien ne bloque tout le monde, ils sont autorisés par défaut.

Pour l’écrire noir sur blanc, ces lignes autorisent les deux :

```
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /
```

Refuser GPTBot pour que vos contenus ne servent pas à l’entraînement est un choix défendable. Pour une petite entreprise qui cherche des clients, je conseille pourtant d’autoriser les deux, comme je le fais sur ce site : ce qu’un modèle a appris pendant son entraînement fait partie de ce qu’il sait de vous quand il répond sans chercher. Selon OpenAI, une modification du robots.txt met environ 24 heures à être prise en compte par sa recherche.

Vérifiez ensuite les blocages qu’un outil de création de site, un hébergeur ou un prestataire a pu ajouter sans vous prévenir :

- **Cloudflare.** Si votre site passe par Cloudflare, ouvrez ses réglages consacrés aux robots d’IA. Depuis le 1er juillet 2025, Cloudflare bloque par défaut les robots d’IA connus sur les domaines nouvellement ajoutés, et un site plus ancien a pu activer ce blocage en un clic. Un blocage à ce niveau l’emporte sur votre robots.txt : vérifiez qu’OAI-SearchBot est autorisé.
- **Squarespace.** Les paramètres du site comportent une option qui bloque les robots d’intelligence artificielle connus. Elle est désactivée par défaut : laissez-la ainsi.
- **Les contenus qui dépendent de JavaScript.** Des robots comme GPTBot, ClaudeBot et PerplexityBot n’exécutent pas JavaScript : un texte qui n’apparaît qu’une fois les scripts chargés peut leur rester invisible. Vos services, vos villes et votre numéro de téléphone doivent figurer dans le HTML de la page.

Encore une étape gratuite : ajoutez votre site à Bing Webmaster Tools, qui peut l’importer depuis la Search Console de Google. Son rapport AI Performance montre quand Copilot, l’assistant de Microsoft, vous cite, et si Bing fait partie des moteurs consultés par ChatGPT, votre site y figure aussi. Mon tutoriel {{< a key="robots-txt-ai-crawlers" >}}robots.txt et robots IA{{< /a >}} liste les robots des autres assistants et donne des fichiers prêts à l’emploi.

## Étape 2 : dire clairement ce que vous faites, et où

Une fois sur votre site, ChatGPT doit le comprendre. Pour une question comme « dépannage de chaudière en urgence à Vincennes », la meilleure réponse est une page qui dit exactement cela, et les pages vagues passent à la trappe. Je l’ai constaté sur Google avec deux sociétés dirigées par le même fondateur : Ginov proposait une longue liste de métiers du bâtiment, un fourre-tout, et a fermé, alors que Pilotech, qui vend quelque chose de très précis, a décollé. **Une page qui veut tout couvrir ne répond bien à aucune question.**

Donnez une page à chaque service, avec les informations dont une IA a besoin pour vous recommander :

1. Ce que vous faites, avec les mots de vos clients, dans les deux premières phrases.
2. Où vous intervenez : les villes ou arrondissements couverts, écrits en toutes lettres.
3. Pour qui : particuliers, propriétaires bailleurs, bureaux, restaurants.
4. Comment vous facturez : une fourchette de prix, des frais de déplacement ou un prix de départ, si vous acceptez de le publier.
5. Vos délais d’intervention et vos horaires.
6. Des preuves : photos de vos propres chantiers, vrais avis, certifications ou labels.
7. Comment vous joindre : un numéro de téléphone écrit en texte, pas seulement un formulaire de contact.

Faites ensuite en sorte que vos informations soient identiques partout : même nom, même adresse, même numéro et même liste de services sur votre site, votre fiche Google, vos annuaires et vos réseaux sociaux.

Pour savoir à quelles questions vos pages doivent répondre, j’utilise des outils de recherche approfondie (deep research) pour trouver ce dont les gens se plaignent le plus dans un secteur et les mots qui reviennent sans cesse. Les questions que vos clients vous posent au téléphone sont souvent celles qu’ils tapent dans ChatGPT. Chez Pilotech, le travail de référencement s’est fait dans cet ordre : les pages d’abord, puis les contenus, puis la fiche Google, puis les corrections techniques. Je suivrais le même ordre pour les assistants IA.

## Étape 3 : vous faire confirmer par d’autres sites

Votre site dit ce que vous affirmez ; les autres sites disent à une IA si elle peut vous croire. Deux études montrent d’où viennent ces preuves. Peec AI a constaté en mars 2026 que Reddit, YouTube, LinkedIn et Wikipédia sont les sites les plus cités par les assistants IA, avec des différences d’un moteur à l’autre. Ahrefs, sur 75 000 marques, a trouvé que le nombre de pages web qui mentionnent une marque est le facteur le plus lié à sa visibilité dans les Aperçus IA de Google, avec une corrélation de 0,664. Une corrélation ne prouve pas une cause, et les Aperçus IA ne sont pas ChatGPT, mais les deux vont dans le même sens : ce que les autres écrivent sur vous compte.

Pour une petite entreprise, ces preuves viennent de quatre endroits :

- **Votre fiche Google.** Remplissez chaque champ, choisissez les bonnes catégories, listez vos services et vos zones d’intervention, ajoutez de vraies photos et répondez à chaque avis. Elle alimente les résultats locaux de Google et le panneau qui s’affiche quand on cherche votre nom, et les réponses IA de Google s’appuient sur sa recherche. Mon guide pour {{< a key="google-business-profile-setup" >}}créer et optimiser votre fiche Google My Business{{< /a >}} détaille chaque étape.
- **Les avis.** Demandez-en à chaque client satisfait, par SMS ou par email, avec un lien direct. Les clients demandent aux IA qui est sérieux, et les avis sont la preuve la plus directe qui soit. N’achetez jamais d’avis et n’en écrivez jamais vous-même.
- **Les annuaires et les organismes professionnels.** Les grands annuaires comme PagesJaunes, ceux de votre métier, votre fédération professionnelle et les listes officielles, comme l’annuaire des professionnels RGE pour un chauffagiste. Quelques fiches exactes valent mieux que des dizaines de fiches à moitié remplies.
- **La presse et les mentions.** Commencez par le journal de votre ville ou le magazine municipal, puis la presse régionale, puis la presse nationale. Je ne suis pas spécialiste des relations presse et j’ai à peine essayé, pourtant un message court et bien ciblé a suffi pour qu’une personne de mon entourage, dont le métier est le coaching sportif, apparaisse dans un magazine national. Vous n’avez pas besoin d’abonnés, seulement de quelque chose qui mérite un article et d’une page qui montre votre travail. Mon guide pour {{< a key="get-press-coverage" >}}passer dans la presse{{< /a >}} explique comment rédiger votre message.

« J’ai 10 000 abonnés sur Instagram » pèse bien moins lourd que « ce magazine a consacré un article entier à mon entreprise », auprès des clients comme des IA. Rendre vraiment service sur Reddit ou LinkedIn compte aussi ; se recommander sous un faux nom, non.

## Entreprise locale : apparaître dans ChatGPT dans votre ville

Beaucoup de recommandations demandées aux IA sont locales, du plombier dans l’Est parisien à l’entreprise de ménage à Boulogne-Billancourt. Les trois étapes restent les mêmes, avec quatre réflexes locaux en plus.

**Nommez vos villes.** ChatGPT tient compte du lieu indiqué dans la question, et il peut transmettre à ses moteurs de recherche une localisation approximative tirée de l’adresse IP de l’utilisateur. Une page qui dit « nous intervenons dans l’Est parisien » pèse moins que des pages qui nomment Vincennes, Montreuil et Saint-Mandé et disent ce que vous y faites.

**Ne créez des pages par ville que là où vous travaillez vraiment.** Pour Eden Flats, une conciergerie Airbnb en Île-de-France, j’ai créé {{< a page="/projects/eden-flats" >}}des pages par commune{{< /a >}}, comme Créteil ou Saint-Maur-des-Fossés, qui présentent le service dans chacune. Une fois le nouveau site en ligne et son référencement en place, des propriétaires ont commencé à appeler pour confier leur bien. Chaque page doit contenir quelque chose de propre au lieu : les quartiers couverts, des chantiers réalisés sur place, le délai d’intervention. Des pages presque identiques où seul le nom de la ville change relèvent de ce que les [règles de Google sur le spam](https://developers.google.com/search/docs/essentials/spam-policies?hl=fr) appellent des pages satellites, et elles n’apprennent rien de plus à une IA.

**Commencez par la presse locale.** Un article dans le journal de votre ville ou sur un site d’actualité locale associe votre nom à un lieu, et il est bien plus facile à obtenir qu’un article national.

**Testez par service et par ville.** Posez la question comme un client : « nettoyage de fin de chantier à Boulogne-Billancourt », « chauffagiste à Vincennes disponible cette semaine ». Enchaînez ensuite avec les questions qu’un vrai client poserait, comme qui a les meilleurs avis ou qui peut passer samedi. Mon guide du {{< a key="local-seo-guide" >}}référencement local{{< /a >}} couvre le côté Google de ce travail.

## Comment vérifier si ChatGPT vous recommande

Une fois par mois, ouvrez ChatGPT dans une fenêtre de navigation privée, sans vous connecter, et posez les dix questions que vos clients posent le plus, toujours formulées de la même façon. Notez les entreprises citées, si vous en faites partie, ce qui est dit de vous et les sources affichées. Rester déconnecté compte : la mémoire et l’historique d’un compte peuvent influencer la réponse. Les réponses varient aussi d’un essai à l’autre : posez chaque question deux fois et fiez-vous aux tendances plutôt qu’à une réponse isolée.

Les sources sont la partie la plus utile. Si ChatGPT cite un concurrent avec un lien vers un annuaire ou un article où vous n’êtes pas, vous savez où vous montrer ensuite. Mon tutoriel sur la {{< a key="check-ai-visibility" >}}visibilité IA{{< /a >}} montre comment noter les résultats mois après mois et quels outils de suivi payants existent.

{{< callout type="tip" >}}**Interrogez ChatGPT sur vous-même.** Une question comme « Que sais-tu de [nom de votre entreprise] à [votre ville] ? » montre ce qu’il a trouvé sur vous, et les sources affichées indiquent d’où vient une éventuelle erreur.{{< /callout >}}

Surveillez ensuite vos statistiques. ChatGPT ajoute `utm_source=chatgpt.com` aux liens sur lesquels on clique dans ses réponses, ce qui permet de compter ses visites dans Google Analytics ([FAQ d’OpenAI pour les éditeurs](https://help.openai.com/fr-fr/articles/12627856-publishers-and-developers-faq)). Comptez aussi les demandes : quelqu’un qui a trouvé votre nom dans ChatGPT peut tout simplement appeler. D’expérience, les gens préfèrent appeler plutôt qu’écrire, parce que c’est plus rapide. Mon tutoriel sur le {{< a key="track-ai-traffic" >}}trafic IA dans Google Analytics{{< /a >}} montre où regarder.

## Ce qui ne vous fera pas recommander

- **Des données structurées en plus, à elles seules.** Elles aident les moteurs à lire vos informations, mais une étude d’Ahrefs publiée en mai 2026, qui compare 1 885 pages où elles ont été ajoutées à 4 000 pages sans changement, ne montre pas de hausse notable des citations par les IA.
- **Les faux avis et les pages par ville copiées-collées.** Ils enfreignent les règles de Google, et des signaux maigres ou contradictoires sont justement ce qui rend une IA hésitante à votre sujet.
- **Un nouvel outil chaque mois.** La recherche IA a apporté son lot de nouveautés tentantes : outils de suivi, « offres GEO », astuces de prompts. Une petite équipe s’y laisse facilement prendre. Consolidez d’abord les bases sur les canaux que vous utilisez déjà : c’est de là que viennent les résultats.

## Votre plan sur quatre semaines

1. **Semaine 1 :** vérifiez votre robots.txt, Cloudflare et les réglages de votre outil de création de site, puis ajoutez le site à Bing Webmaster Tools.
2. **Semaine 2 :** donnez une page à chaque service, avec les villes, une fourchette de prix, les délais et un numéro de téléphone en texte.
3. **Semaine 3 :** complétez votre fiche Google, corrigez vos trois ou quatre principales fiches d’annuaire et demandez des avis à vos clients récents.
4. **Semaine 4 :** envoyez un message court au journal de votre ville, posez vos dix questions de test en navigation privée et notez les résultats.
5. **Ensuite, chaque mois :** reposez les mêmes questions et comblez les manques que révèlent les sources.

Vous n’avez pas besoin d’une agence pour l’essentiel : ces quatre semaines vous mènent déjà loin. Si vous préférez déléguer, ce travail de fond est la base de mon {{< a page="/services/seo" >}}accompagnement SEO{{< /a >}}.
