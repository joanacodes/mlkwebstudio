---
title: "Référencement IA (GEO) : le guide complet pour être cité par les assistants IA"
seo_title: "Référencement IA (GEO) : le guide complet pour les TPE"
description: "Référencement IA (GEO) : comment ChatGPT, Gemini et Perplexity choisissent leurs sources, ce qu’il faut corriger d’abord et ce que vous pouvez ignorer."
slug: "referencement-ia-geo"
translationKey: "ai-search-geo-guide"
date: 2026-10-17T09:51:00+02:00
lastmod: 2026-10-17T09:51:00+02:00
category: "aio"
article_type: "pillar"
keywords: ["référencement IA", "GEO", "optimisation pour les moteurs génératifs", "référencement sur les IA", "SEO IA", "comment fonctionnent les moteurs de recherche IA"]
summary: "Le référencement IA, ou GEO (optimisation pour les moteurs génératifs), aide ChatGPT, Gemini, Perplexity et les Aperçus IA de Google à trouver votre entreprise, à lui faire confiance et à la citer. Pour une TPE, c’est surtout du bon SEO, avec trois vérifications en plus : laisser entrer les robots de recherche des IA, obtenir des mentions sur d’autres sites et mesurer ce qui peut l’être. Rien de tout cela n’exige d’outil payant ni de fichier spécial."
cover: "ai-search-geo-guide"
cover_alt: "Les sigles AIO / GEO sous une orbite de points autour d’une étoile, sur fond de verre cannelé"
related: ["geo-vs-seo", "get-recommended-by-chatgpt", "google-ai-overviews-ai-mode", "write-content-for-ai-search", "small-business-seo-guide"]
services: ["seo"]
faq:
  - q: "Combien de temps faut-il pour que les IA citent mon entreprise ?"
    a: "Il n’y a pas de délai fixe. Selon OpenAI, une modification du robots.txt est prise en compte par la recherche ChatGPT en 24 heures environ, mais une nouvelle page doit encore être explorée puis indexée, et les mentions sur d’autres sites se construisent en plusieurs mois. Les conseils de Google sur le recours à un expert SEO évoquent quatre mois à un an avant d’en voir les effets, et les réponses des IA reposent sur le même socle."
  - q: "Quelle différence entre les Aperçus IA et le Mode IA de Google ?"
    a: "Les Aperçus IA sont des résumés affichés au-dessus des résultats habituels de Google pour certaines recherches. Le Mode IA est une façon de chercher à part, sous forme de conversation, pensée pour les questions longues et les relances ; depuis janvier 2026, une question de suivi posée sur un Aperçu IA se poursuit dans le Mode IA. Les deux puisent leurs liens dans l’index habituel de Google."
  - q: "Bloquer les robots d’entraînement des IA me retire-t-il de leurs réponses ?"
    a: "Pas pour ChatGPT ni pour Claude, tant que leurs robots de recherche (OAI-SearchBot et Claude-SearchBot) restent autorisés : GPTBot et ClaudeBot servent seulement à collecter des données d’entraînement. Google-Extended est un cas à part : sans effet sur la recherche Google ni sur les Aperçus IA, il décide aussi si l’application Gemini peut s’appuyer sur vos pages pour répondre."
  - q: "Faut-il un outil payant pour le référencement IA ?"
    a: "Pas pour commencer. Poser chaque mois les questions de vos clients aux principaux assistants, et lire les rapports gratuits de la Search Console, de Bing Webmaster Tools et de Microsoft Clarity, suffit à la plupart des TPE. Les outils de suivi payants, comme l’AI Visibility Toolkit de Semrush, deviennent utiles quand vous suivez des dizaines de questions ou plusieurs concurrents."
  - q: "Peut-on retirer son site des Aperçus IA de Google ?"
    a: "Oui. Dans la Search Console, la page Paramètres comporte une section consacrée à l’IA générative (Search generative AI dans l’interface en anglais) qui permet d’exclure votre site des Aperçus IA, du Mode IA et des résumés IA de Discover. Le changement prend quelques jours, Google indique qu’il n’influence pas le classement, et l’application Gemini reste gérée à part par Google-Extended."
---

Quand quelqu’un demande à ChatGPT un expert-comptable à Nantes, ou tape une question qui déclenche un Aperçu IA de Google, l’assistant cherche sur le Web, lit quelques pages et rédige une réponse avec une poignée de sources. Le référencement IA, ou GEO (*generative engine optimization*, l’optimisation pour les moteurs génératifs), vise à faire partie de ces sources, avec une description juste de votre entreprise.

Pour une TPE, l’essentiel relève du SEO que vous devriez déjà pratiquer, plus quelques vérifications que vous pouvez faire vous-même. Ce qui change, c’est l’enjeu : la réponse nomme quelques entreprises au lieu d’afficher une page de liens, et moins d’internautes cliquent pour comparer.

Cette page est le point d’entrée de la rubrique Référencement IA du blog. Elle explique comment les moteurs de recherche IA choisissent leurs sources, détaille cinq étapes avec un guide pour chacune, puis liste ce que vous pouvez ignorer sans risque. Je l’ai écrite comme je conseille mes clients : franchement, y compris sur ce que vous pouvez faire sans moi.

## Ce qu’est le référencement IA (et ses autres noms)

Le référencement IA regroupe tout ce qui rend votre site et votre réputation faciles à trouver, à citer et à recommander pour les systèmes d’IA qui génèrent des réponses. Le sigle GEO vient d’[un article de recherche d’Aggarwal et de ses collègues](https://arxiv.org/abs/2311.09735) de l’université de Princeton et d’autres établissements, présenté à la conférence KDD 2024. Dans leurs tests, modifier la rédaction d’une page augmentait sa visibilité dans les réponses générées jusqu’à 40 %. Citer ses sources, ajouter des citations et des statistiques figuraient parmi les changements les plus efficaces, avec des résultats variables selon les sujets.

Vous croiserez plusieurs noms pour la même idée :

- **GEO** (*generative engine optimization*) : le terme des chercheurs, repris par le marketing.
- **AIO** (*AI optimization*) : le terme générique qu’utilise ce blog pour la visibilité dans les assistants IA.
- **AEO** (*answer engine optimization*) : un terme employé en SEO pour les extraits optimisés et les assistants vocaux, avant d’être appliqué aux réponses des IA.
- **LLMO** (*large language model optimization*) : le même objectif, nommé d’après les modèles.

En France, on parle aussi de « SEO IA » ou de « référencement sur les IA ». Les noms comptent moins qu’une distinction. Ce qu’un modèle a appris pendant son entraînement reste figé jusqu’à sa version suivante, et vous ne pouvez pas le changer rapidement. Ce qu’il trouve en cherchant sur le Web au moment de répondre se renouvelle sans cesse, et c’est là que le référencement IA agit. Quand on dit qu’une entreprise « apparaît dans ChatGPT », c’est presque toujours de ce second cas qu’il s’agit.

## Comment les moteurs de recherche IA choisissent leurs sources

Les assistants qui répondent en citant des sources suivent à peu près les mêmes trois étapes :

1. Ils décident s’il faut chercher. Une question sur des faits récents, des prix, un service local ou une entreprise précise déclenche en général une recherche sur le Web ; une question générale, pas forcément.
2. Ils transforment la question en requêtes. L’assistant reformule la question, souvent en plusieurs requêtes, et les envoie à un index de recherche : le sien, celui d’un partenaire ou celui de Google.
3. Ils lisent quelques résultats et rédigent la réponse. Ils gardent les pages qui répondent le plus clairement à chaque partie de la question et en citent certaines.

C’est l’index utilisé par chaque assistant qui décide si votre site peut être trouvé :

| Assistant | Où il cherche | Robot qui doit accéder à votre site |
|---|---|---|
| ChatGPT (recherche) | L’index d’OpenAI, complété par des moteurs de recherche tiers (la part de Bing n’est pas documentée) | OAI-SearchBot |
| Aperçus IA et Mode IA de Google | L’index habituel de Google | Googlebot |
| Application Gemini | La recherche Google | Googlebot (le jeton Google-Extended décide si Gemini peut utiliser vos pages) |
| Claude | Brave Search (sur la liste des sous-traitants d’Anthropic depuis mars 2025), en plus du robot d’Anthropic | Claude-SearchBot |
| Perplexity | Son propre index | PerplexityBot |
| Microsoft Copilot | Bing | Bingbot |

Trois conséquences pratiques en découlent. D’abord, si un robot ne peut pas lire vos pages, la qualité de vos textes n’y change rien : un site qui bloque OAI-SearchBot disparaît des réponses de la recherche ChatGPT. Ensuite, comme les assistants lancent plusieurs requêtes précises, une page qui répond clairement à une question donnée a plus de chances qu’une page d’accueil vague. Enfin, la réponse est générée : elle peut être fausse.

C’est pour cette dernière raison que je choisis avec soin l’assistant auquel je me fie. J’utilise Claude, car dans mon travail ChatGPT invente un peu trop souvent, alors que Claude s’est montré extrêmement fiable. Je compare les deux dans {{< a key="claude-vs-chatgpt" >}}Claude ou ChatGPT : lequel choisir pour votre entreprise{{< /a >}}. Quel que soit l’assistant de vos clients, vérifiez ce qu’il dit de vous (étape 4 ci-dessous).

Les deux plus grandes audiences ont leur propre guide : {{< a key="get-recommended-by-chatgpt" >}}comment apparaître dans ChatGPT{{< /a >}} et {{< a key="google-ai-overviews-ai-mode" >}}comment faire citer votre site dans les Aperçus IA et le Mode IA{{< /a >}}.

## Pourquoi la recherche IA compte pour une TPE en 2026

En France, l’IA de Google est arrivée tard. Le 7 octobre 2025, le Mode IA s’est ouvert au français et à plus de 200 pays, mais pas à la France : les Aperçus IA et le Mode IA n’y ont été lancés que le 22 juillet 2026, après un retard lié aux droits voisins de la presse. Les audiences sont désormais énormes : Alphabet a indiqué en juillet 2026 que le Mode IA avait dépassé le milliard d’utilisateurs mensuels, et l’application Gemini 950 millions, tandis qu’OpenAI annonçait en février 2026 que ChatGPT comptait 900 millions d’utilisateurs par semaine dans le monde.

Le problème, ce sont les clics. Dans une [étude de Pew Research](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/) menée sur des données de navigation d’adultes américains en 2025, les internautes ont cliqué sur un résultat dans 8 % des visites quand un résumé IA s’affichait, contre 15 % sans résumé, et sur un lien du résumé lui-même dans 1 % des cas seulement. Quand la réponse est à l’écran, moins de gens visitent les sites : être une source citée, ou l’entreprise que la réponse recommande, compte davantage.

Gardez toutefois le sens des proportions. Google reste de très loin le premier moteur de recherche en France, et Bing n’y pèse qu’environ 5,5 % des recherches selon Statcounter (septembre 2026). Vos clients n’ont pas cessé de chercher : ils cherchent à plus d’endroits, et certains obtiennent leur réponse sans cliquer.

Mon conseil vaut pour chaque nouveau canal : **n’abandonnez pas ce qui marche déjà**. Mes propres clients viennent du bouche-à-oreille, des cold emails et du SEO, dans cet ordre. Il est facile de courir après la dernière tactique à la mode, et le bruit autour du GEO en est un cas d’école ; j’explique comment y résister dans {{< a key="shiny-object-syndrome" >}}l’article sur le syndrome de l’objet brillant{{< /a >}}. Bonne nouvelle : l’essentiel du travail de référencement IA renforce votre SEO en même temps.

## GEO vs SEO : ce qui reste et ce qui change

Le guide de Google sur l’optimisation pour ses fonctions d’IA, [publié le 15 mai 2026](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), traite ce travail comme du SEO classique. Il précise que les fichiers llms.txt, les balisages spéciaux, le découpage des contenus en fragments et la réécriture pour l’IA ne sont pas nécessaires, et la [documentation de Google sur les fonctions d’IA](https://developers.google.com/search/docs/appearance/ai-features) ajoute qu’une page doit seulement être indexée et autorisée à afficher un extrait pour être éligible. Ces consignes ne concernent que Google, mais les autres assistants récompensent les mêmes bases : des pages lisibles par un robot, des réponses claires et une entreprise dont d’autres sites se portent garants.

Trois choses sont vraiment nouvelles :

1. Plus de robots à laisser entrer. Chaque acteur de l’IA a son propre robot de recherche, et certains réglages d’hébergement ou de sécurité les bloquent par défaut.
2. Les mentions pèsent davantage. Dans une étude d’Ahrefs portant sur 75 000 marques, les mentions de la marque sur le Web étaient le facteur le plus corrélé à la visibilité dans les Aperçus IA (0,664), devant les ancres de liens au nom de la marque (0,527) et le volume de recherche sur la marque (0,392).
3. La mesure a des trous. La plupart des rapports IA montrent des impressions ou des citations plutôt que des clics, et certaines visites arrivent sans aucune source.

Je développe l’argument complet dans {{< a key="geo-vs-seo" >}}GEO vs SEO : ce qui change vraiment{{< /a >}}. Si vos bases SEO ne sont pas encore en place, commencez par {{< a key="small-business-seo-guide" >}}le guide complet du référencement naturel pour les petites entreprises{{< /a >}} : toutes les étapes suivantes s’appuient dessus.

## Étape 1 : laisser les robots des IA lire votre site

Commencez par là, car tout le reste en dépend.

1. Vérifiez votre robots.txt. Ouvrez votredomaine.fr/robots.txt et assurez-vous que rien ne bloque OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot ou Bingbot. Les robots d’entraînement comme GPTBot et ClaudeBot relèvent d’un autre choix : {{< a key="robots-txt-ai-crawlers" >}}l’article sur le robots.txt et les robots IA{{< /a >}} les liste et propose trois fichiers à copier.
2. Vérifiez les couches au-dessus. Cloudflare bloque par défaut les robots IA connus sur les domaines ajoutés depuis le 1er juillet 2025, et certains outils de création de site ou extensions de sécurité ont leur propre interrupteur : vérifiez que les robots de recherche cités plus haut y sont autorisés. Sur Squarespace, une option des paramètres (**Settings > Crawlers** dans l’interface en anglais) bloque les robots d’IA connus ; elle est désactivée par défaut.
3. Vérifiez que vos textes sont dans le HTML. Selon une analyse de Vercel, GPTBot, ClaudeBot et PerplexityBot n’exécutent pas JavaScript, contrairement à Googlebot. Si la description de vos services n’apparaît qu’après l’exécution d’un script, ces robots risquent de voir une page vide.
4. Faites indexer votre site par Google et Bing. Validez votre site dans la Google Search Console et dans Bing Webmaster Tools, qui peut importer vos sites depuis la Search Console, puis envoyez votre sitemap. Bing est l’index qui alimente Copilot.

{{< callout type="tip" >}}Un contrôle de deux minutes pour le point 3 : ouvrez une de vos pages de service, affichez son code source (**Ctrl+U** dans la plupart des navigateurs sous Windows) et cherchez-y une phrase de la page. Si la phrase n’y figure pas, les robots qui n’exécutent pas JavaScript ne peuvent pas la lire.{{< /callout >}}

Deux sujets font plus parler d’eux qu’ils ne le méritent. Le fichier llms.txt est un résumé de votre site en Markdown destiné aux outils d’IA : la recherche Google l’ignore, et aucun grand acteur de l’IA n’a confirmé s’en servir pour choisir les entreprises qu’il recommande, comme l’explique {{< a key="llms-txt-explained" >}}l’article sur le fichier llms.txt{{< /a >}}. Les données structurées décrivent votre entreprise dans le code. Elles gardent une utilité sur Google, mais un test d’Ahrefs qui a ajouté du JSON-LD à 1 885 pages n’a mesuré aucune hausse notable des citations par les IA ; {{< a key="schema-markup-small-business" >}}le guide des données structurées{{< /a >}} liste les balisages qui valent encore la peine.

Pour information, ce site laisse entrer tous les robots et publie un fichier llms.txt. Le garder ne coûte rien, mais je ne compte pas sur lui pour m’amener un seul client.

## Étape 2 : rédiger des pages qui répondent aux questions de vos clients

Les assistants citent des pages qui répondent à une question précise, avec des mots simples. Concrètement :

- Une page par service, et une par ville réellement couverte, chacune avec ses propres informations. Des pages presque identiques où seul le nom de la ville change correspondent à ce que les règles anti-spam de Google appellent des pages satellites ; {{< a key="local-seo-guide" >}}le guide du référencement local{{< /a >}} montre comment construire de bonnes pages par ville.
- La réponse d’abord. Ouvrez chaque page ou section par deux ou trois phrases qui répondent à la question, puis donnez le détail : prix ou fourchettes de prix, zones couvertes, délais, garanties.
- Des définitions en une phrase, des chiffres datés et sourcés, et des tableaux pour comparer.
- Ce qu’aucun concurrent ne peut dire à votre place : votre méthode, de vraies photos, de vrais cas, les questions que vos clients posent au premier appel.

{{< a key="write-content-for-ai-search" >}}Être cité par les IA : comment rédiger des contenus qu’elles reprennent{{< /a >}} montre ces réflexes avec des exemples avant/après.

**Être précis compte encore plus que la forme.** Pour un client, le site qui vend des services très spécifiques s’est hissé en tête de Google sur l’une de ses recherches un ou deux jours après sa mise en ligne, ce qui est inhabituellement rapide. Celui d’une société sœur, un fourre-tout qui proposait de nombreux métiers du bâtiment à la fois, n’a jamais fonctionné. Un assistant à qui l’on demande « un électricien à Lyon qui installe des bornes de recharge » cherche une entreprise dont les pages disent exactement cela.

L’IA est une bonne assistante de recherche pour ce travail, pas une usine à pages. J’utilise Deep Research pour repérer ce dont les gens se plaignent le plus dans un secteur et les mots-clés qui reviennent sans cesse, puis je retravaille le texte jusqu’à ce qu’il ressemble à l’entreprise ; la méthode est dans {{< a key="deep-research-copywriting-seo" >}}l’article sur Deep Research pour le copywriting et le SEO{{< /a >}}. Publier des pages en masse est une autre affaire : les consignes de Google sur les contenus générés par IA préviennent que de nombreuses pages produites sans valeur ajoutée pour les lecteurs peuvent relever de l’abus de contenu à grande échelle, et depuis octobre 2026 elles insistent pour que tout contenu généré par IA soit vérifié à la main avant publication.

## Étape 3 : obtenir des mentions sur les sites auxquels les IA font confiance

Les assistants recommandent rarement une entreprise sur la seule foi de son site. Ils cherchent une confirmation ailleurs, d’où l’importance de la corrélation mesurée par Ahrefs. Une étude de Peec AI publiée en mars 2026 classe Reddit, YouTube, LinkedIn et Wikipédia parmi les sites les plus cités dans les réponses des IA, avec un mélange différent selon le moteur.

Pour une TPE, les mentions les plus utiles sont souvent plus proches :

- Votre fiche Google (Google Business Profile, l’ancien Google My Business), complète et à jour, avec de vrais avis que vous avez sollicités. Google classe les entreprises locales selon la pertinence, la distance et la notoriété, et aucune meilleure position ne s’achète ; {{< a key="google-business-profile-setup" >}}le tutoriel sur la fiche Google My Business{{< /a >}} détaille la création pas à pas.
- Les annuaires et organisations professionnelles qui affichent partout le même nom, la même adresse et le même numéro de téléphone.
- Les fournisseurs et partenaires qui ont une page « trouver un installateur » ou « nos partenaires ».
- La presse, en commençant par le journal local.

Les relations presse sont moins inaccessibles qu’il n’y paraît. Ce n’est pas mon métier et j’ai à peine essayé, pourtant j’ai réussi à faire parler dans le magazine Match d’une personne de mon entourage qui fait du coaching sportif ; j’y vois l’effet des réflexes de rédaction et de ciblage que m’a donnés le cold emailing. Vous n’avez pas besoin d’abonnés, seulement de quelque chose d’intéressant à proposer et d’une page qui montre votre travail. Commencez par le journal de votre ville, puis la presse régionale, puis nationale : chaque article est une mention, souvent un lien, et une preuve à montrer. {{< a key="get-press-coverage" >}}Comment passer dans la presse sans abonnés{{< /a >}} détaille la méthode.

En revanche, tricher ne marche pas. Les faux avis enfreignent les règles de Google, qui interdisent également de ne solliciter que les clients dont on attend un avis positif. En France, le Code de la consommation range les faux avis parmi les pratiques commerciales trompeuses, et la DGCCRF les contrôle. Le guide IA de Google traite aussi des mentions artificielles. L’objectif est qu’on parle de vous, pas de fabriquer des conversations.

## Étape 4 : vérifier ce que les IA disent de vous

Une fois par mois, testez les questions que vos clients posent vraiment. Cela prend moins d’une heure.

1. Notez dix questions : votre service et votre ville, « meilleur [service] pour [type de client] », une comparaison avec un concurrent, le nom de votre entreprise suivi de « avis » ou de « prix ».
2. Posez chacune à ChatGPT, Gemini, Perplexity, Claude et Copilot, puis à Google pour voir les Aperçus IA et le Mode IA. Utilisez si possible une fenêtre de navigation privée, sans vous connecter à votre compte, ou désactivez d’abord la mémoire et la personnalisation, pour que vos échanges passés n’influencent pas la réponse.
3. Notez qui est cité, quelles sources apparaissent et tout ce qui est faux à votre sujet : anciens prix, ancienne adresse, service que vous ne proposez plus.
4. Corrigez les erreurs là où les assistants les lisent : vos pages, votre fiche Google et vos fiches d’annuaires.

Les réponses changent d’une fois sur l’autre : cherchez des tendances sur quelques mois plutôt que de réagir à une seule réponse. {{< a key="check-ai-visibility" >}}Visibilité IA : vérifier si ChatGPT, Gemini et Perplexity citent votre entreprise{{< /a >}} détaille la méthode.

## Étape 5 : mesurer le trafic IA et les demandes qu’il apporte

La mesure est le point faible du référencement IA : combinez plusieurs sources gratuites.

| Outil | Ce qu’il montre | Limites |
|---|---|---|
| Google Analytics 4 | Un canal par défaut **AI Assistant** depuis le 13 mai 2026, pour les visites venues d’assistants comme ChatGPT, Gemini ou Claude | Ne s’applique pas à l’historique ; les visites issues des Aperçus IA et du Mode IA n’y figurent pas |
| Google Search Console | Un rapport sur l’IA générative, ouvert à tous les sites depuis le 31 août 2026 | Impressions seulement, sans clics ni requêtes |
| Bing Webmaster Tools | Un rapport AI Performance (en préversion depuis février 2026) : citations dans Copilot et requêtes associées | Pas de clics |
| Microsoft Clarity | Les canaux AIPlatform et PaidAIPlatform depuis août 2025, et un rapport Citations | Les citations concernent surtout Copilot |

{{< a key="track-ai-traffic" >}}Trafic IA dans Google Analytics : mesurer les visites de ChatGPT et des IA{{< /a >}} détaille chaque réglage, dont un groupe de canaux qui classe aussi votre historique.

Je me sers de Clarity pour voir où les visiteurs s’attardent, s’ils sont venus pour quelque chose de précis et quelles parties d’une page les font fuir. Je sais alors si le problème vient du texte, d’une image ou de l’ergonomie, ce qui est exactement ce qu’il faut savoir quand une page reçoit des visites venues des IA mais aucune demande. {{< a key="microsoft-clarity-tutorial" >}}Le tutoriel Microsoft Clarity{{< /a >}} montre comment l’installer.

{{< callout type="note" >}}ChatGPT ajoute `utm_source=chatgpt.com` aux liens qu’il affiche, ce qui aide les outils de mesure à le reconnaître. Tous les liens ne portent pas cette balise : à partir du 9 octobre 2026, de nombreux sites ont vu les visites venues de ChatGPT chuter dans GA4 pendant que le trafic direct augmentait, et OpenAI n’avait annoncé aucun changement au moment de la rédaction. Interprétez une baisse soudaine avec prudence.{{< /callout >}}

Comptez ensuite ce qui compte vraiment : les demandes. Ajoutez « un assistant IA (ChatGPT, Gemini…) » aux réponses possibles à la question « Comment nous avez-vous connus ? » de votre formulaire de contact, et posez la question au téléphone. Les outils de mesure rateront toujours une partie de ce trafic.

## Ce qu’il faut ignorer : astuces GEO et promesses commerciales

Un sujet nouveau attire toujours des vendeurs. Voici ce pour quoi je ne paierais pas :

- Une place garantie dans ChatGPT ou les Aperçus IA. OpenAI indique que l’apparition dans la recherche ChatGPT n’est pas garantie, et Google rappelle que personne ne peut garantir la première place. Les réponses changent selon la question et l’utilisateur.
- Un fichier llms.txt, un « balisage IA » ou une réécriture « en fragments » vendus en forfait. Google dit que ses fonctions d’IA n’en ont pas besoin, et aucun autre acteur de l’IA n’a déclaré choisir ses sources en fonction de ces éléments.
- Des centaines de pages rédigées par IA, une par ville ou par question, où seuls quelques détails changent. C’est exactement ce que visent les règles de Google contre l’abus de contenu à grande échelle et les pages satellites.
- Les faux avis, les mentions achetées et les faux messages publiés sur les forums, pour les raisons vues à l’étape 3.
- Un outil de suivi payant avant les bases. Un outil peut vous dire que votre entreprise n’est pas citée ; il n’en corrige pas les causes. Faites d’abord les étapes 1 à 4.

{{< callout type="warning" >}}Si quelqu’un promet de « vous faire apparaître dans ChatGPT » avant une date précise, demandez-lui sur quels robots, quelles pages et quelles mentions il compte travailler. Une réponse vague annonce en général un résultat vague.{{< /callout >}}

## Votre plan de référencement IA sur 90 jours

Vous pouvez tout faire vous-même, à raison de quelques heures par semaine :

1. Semaine 1, l’accès et le point de départ : vérifiez le robots.txt, Cloudflare et les réglages de votre outil de création de site, validez votre site dans la Search Console et Bing Webmaster Tools, envoyez votre sitemap, puis faites une première fois le test des dix questions de l’étape 4 pour noter d’où vous partez.
2. Semaines 2 à 4, les pages : une page par service avec la réponse d’abord, vos prix ou fourchettes de prix, vos zones d’intervention et de vraies photos. Mettez à jour vos pages « À propos » et contact avec des informations qu’un assistant peut citer.
3. Mois 2, les preuves : complétez votre fiche Google, demandez un avis à vos dix derniers clients, harmonisez vos fiches d’annuaires et proposez un sujet à un journaliste local.
4. Mois 3, test et mesure : refaites le test des dix questions, comparez avec votre point de départ et vérifiez les canaux IA dans GA4 et Clarity.
5. Ensuite, chaque mois : refaites le test, mettez à jour les pages là où les réponses étaient fausses ou incomplètes, et datez vos modifications.

### Quand déléguer

Si votre site couvre déjà les bases et que vous pouvez consacrer une heure par mois au test, vous n’avez pas besoin d’une agence pour le référencement IA. Déléguez quand les corrections sont techniques (une plateforme qui bloque les robots, des textes qui n’apparaissent qu’avec JavaScript), quand beaucoup de pages sont à réécrire, ou quand votre temps est mieux employé auprès de vos clients. L’essentiel de cette liste relève du SEO, et c’est ce que couvre mon {{< a page="/services/seo" >}}accompagnement SEO{{< /a >}}.
