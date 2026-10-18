---
title: "llms.txt : à quoi sert ce fichier et faut-il en créer un ?"
seo_title: "Fichier llms.txt : à quoi sert-il et faut-il en créer un ?"
description: "Le fichier llms.txt présente votre site aux IA. Qui le lit vraiment en 2026, faut-il en créer un et comment l’ajouter en dix minutes sur WordPress ou Wix."
slug: "fichier-llms-txt"
translationKey: "llms-txt-explained"
date: 2026-10-17T08:29:00+02:00
lastmod: 2026-10-17T08:29:00+02:00
category: "aio"
article_type: "tutorial"
keywords: ["llms.txt", "fichier llms.txt", "llms.txt c’est quoi", "créer un fichier llms.txt", "exemple de fichier llms.txt", "llms.txt SEO"]
summary: "llms.txt est un fichier Markdown placé à la racine d’un site, qui le résume pour les outils d’IA et liste ses pages clés. Proposé en 2024, il sert surtout aux assistants de programmation qui lisent de la documentation : la recherche Google l’ignore, et aucun grand acteur de l’IA n’a confirmé que son assistant s’en sert pour recommander des entreprises. Pour une TPE, il est facultatif : dix minutes si votre plateforme le propose, et jamais une raison de payer quelqu’un."
cover: "llms-txt-explained"
cover_alt: "Fenêtre de terminal avec une requête web qui répond 200 OK, à côté du mot llms.txt"
related: ["robots-txt-ai-crawlers", "get-recommended-by-chatgpt", "geo-vs-seo", "write-content-for-ai-search", "squarespace-seo"]
services: ["seo"]
faq:
  - q: "llms.txt est-il un standard officiel ?"
    a: "Non. C’est une proposition de Jeremy Howard (Answer.AI), publiée en septembre 2024 et révisée en août 2026, dont le texte est discuté publiquement sur GitHub. Elle n’a aucun statut officiel : rien n’oblige un site à publier ce fichier, ni un outil d’IA à le lire."
  - q: "Où placer le fichier llms.txt ?"
    a: "À la racine de votre domaine, pour qu’il s’ouvre à l’adresse votredomaine.fr/llms.txt. Depuis la version 2 de la proposition, un fichier peut aussi se trouver dans un sous-dossier, comme /fr/llms.txt, et ne couvre alors que les pages de ce dossier : pratique pour un site bilingue."
  - q: "À quelle fréquence mettre à jour son fichier llms.txt ?"
    a: "Dès que vos services, votre zone d’intervention, vos tarifs ou vos coordonnées changent, et quand vous publiez une page importante. Un fichier généré par Yoast ou Wix suit votre site automatiquement ; un fichier écrit à la main, sur Squarespace ou ailleurs, ne change que si vous le modifiez."
  - q: "Faut-il aussi des versions Markdown de mes pages ?"
    a: "Pas pour le site d’une petite entreprise. La proposition suggère aux sites de documentation d’offrir une copie Markdown propre de chaque page, à la même adresse avec .md en plus, et des outils comme Mintlify le font automatiquement. Un site vitrine peut s’en passer."
  - q: "Peut-on utiliser un générateur de llms.txt ?"
    a: "Oui, si cela vous fait gagner du temps, mais relisez le résultat avant de le publier. Un générateur reprend ce qui figure sur vos pages, textes périmés compris, et ne peut pas ajouter ce qui manque, comme les services que vous ne proposez pas."
---

llms.txt est un court fichier texte, rédigé en Markdown, placé à la racine d’un site (votredomaine.fr/llms.txt) pour indiquer aux outils d’IA de quoi parle le site et où se trouvent ses pages les plus utiles. Squarespace a ajouté un réglage pour le créer en juillet 2026, les extensions SEO de WordPress le génèrent et Wix en crée un pour chaque site : pour une petite entreprise, la question se pose vite. Faut-il en créer un ?

Ma réponse courte : non, ce n’est pas nécessaire, mais si votre plateforme le propose, cela prend une dizaine de minutes et ne fait aucun mal. En revanche, ce fichier ne fera pas recommander votre entreprise par ChatGPT et ne vous fera pas gagner de places sur Google. Je vous explique d’où il vient, qui le lit vraiment en octobre 2026, ce qu’il faut y écrire et comment l’ajouter sur Squarespace, WordPress, Wix ou un site codé à la main.

Ce tutoriel fait partie de mon {{< a key="ai-search-geo-guide" >}}guide complet du référencement IA{{< /a >}}, qui détaille le travail qui aide vraiment à apparaître dans les réponses des assistants.

## Qu’est-ce que le fichier llms.txt ?

Le fichier llms.txt est une convention proposée : un fichier Markdown, à une adresse fixe, qui donne aux assistants IA un résumé choisi du site et une liste de liens vers ses pages clés. Jeremy Howard, d’Answer.AI, a publié la proposition le 3 septembre 2024 et l’a révisée en août 2026 (version 2). La [spécification sur llmstxt.org](https://llmstxt.org/) (en anglais) se lit en cinq minutes, et selon son auteur, des milliers de sites publient déjà un fichier.

L’idée répond à un vrai problème. Une page web est faite pour des humains : menus, bandeaux de cookies, scripts et publicités entourent l’information, et un outil d’IA qui lit la page doit en extraire le texte utile. Le fichier llms.txt lui donne directement un résumé propre et une liste de lecture. La proposition précise qu’il sert au moment où un assistant lit un site pour aider quelqu’un (l’inférence), et non à l’entraînement des modèles.

### Quelle différence avec robots.txt et sitemap.xml ?

Les trois fichiers se trouvent côte à côte à la racine d’un site, mais ils n’ont pas le même rôle.

| | robots.txt | sitemap.xml | llms.txt |
|---|---|---|---|
| Son rôle | Dire aux robots quelles pages ils peuvent visiter | Lister les pages que les moteurs doivent trouver | Résumer le site et pointer vers ses pages les plus utiles |
| Lu par | Des robots comme Googlebot, GPTBot ou ClaudeBot | Les moteurs de recherche | Les assistants et agents IA qui lisent le site pour quelqu’un |
| Format | Règles en texte brut | XML | Markdown |
| Effet sur Google | Décide de ce que Google peut explorer | Aide Google à trouver vos pages | Aucun |
| Créé par | En général, votre plateforme | En général, votre plateforme | Vous, une extension ou un réglage de la plateforme |

**Le fichier llms.txt ne contrôle rien.** Il ne peut ni laisser entrer un robot ni en bloquer un. Si vous voulez que les robots des moteurs IA accèdent à vos pages, ou que les robots d’entraînement restent dehors, c’est le rôle du fichier robots.txt : mon tutoriel sur {{< a key="robots-txt-ai-crawlers" >}}le robots.txt et les robots IA{{< /a >}} indique lesquels autoriser et lesquels bloquer.

## Qui lit vraiment le fichier llms.txt en 2026

C’est la partie que les argumentaires commerciaux ont tendance à oublier. Voici ce qui est documenté au moment où j’écris (octobre 2026).

**Les assistants de programmation et les outils de documentation : oui.** Selon l’auteur de la proposition, llms.txt sert surtout pour la documentation de logiciels, où les agents de programmation le suivent pour trouver les références d’API et les tutoriels. Des plateformes de documentation comme Mintlify et GitBook en génèrent un automatiquement, et OpenAI, Anthropic et Google en publient pour leur propre documentation destinée aux développeurs. C’est là que le fichier est utile : l’assistant d’un développeur qui lit le mode d’emploi d’une bibliothèque logicielle.

**La recherche Google : non.** Le guide de Google sur ses fonctionnalités d’IA générative, publié en mai 2026, indique que la recherche Google n’utilise pas llms.txt. Le fichier n’aide ni ne nuit à votre visibilité dans la recherche Google, Aperçus IA compris, et Google ajoute qu’en garder un pour d’autres systèmes ne pose aucun problème ([Google Search Central](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide?hl=fr)).

**ChatGPT, Claude, Gemini et Perplexity : rien de confirmé.** Aucune des entreprises qui les éditent n’a confirmé que son assistant lit le llms.txt d’une entreprise pour répondre aux questions ou choisir qui recommander. Ce qu’elles documentent, ce sont leurs robots d’exploration, comme OAI-SearchBot pour la recherche de ChatGPT, Claude-SearchBot pour Claude et PerplexityBot pour Perplexity, et ces robots lisent vos pages ordinaires.

**Lighthouse, dans Chrome : il contrôle le fichier.** Depuis mai 2026, Lighthouse, l’outil d’audit intégré à Chrome, propose une catégorie expérimentale Agentic Browsing qui comprend un contrôle du fichier llms.txt. D’après les comptes rendus de cet audit, un site sans fichier est marqué « non applicable » plutôt que pénalisé, alors qu’un fichier dont les liens sont de simples adresses, au lieu de liens Markdown, peut échouer. Un produit Google contrôle donc le fichier pendant que la recherche Google l’ignore : le contrôle de Chrome concerne les agents IA qui naviguent pour un utilisateur, pas le classement.

Tout assistant capable d’ouvrir des pages web lira aussi votre llms.txt si quelqu’un colle son adresse dans la conversation, comme il lirait n’importe quelle autre page. Ce n’est pas la même chose que d’aller le chercher de lui-même.

## Faut-il créer un fichier llms.txt ?

Non, mais cela peut valoir dix minutes. Le marketing est bruyant, et une petite entreprise se laisse facilement attirer par chaque nouvel outil ou nouvelle pratique au lieu de travailler les canaux qui lui amènent déjà des clients. C’est le {{< a key="shiny-object-syndrome" >}}syndrome de l’objet brillant{{< /a >}}, et llms.txt en est un cas d’école : le sujet paraît technique, il est nouveau et il se vend facilement.

Il vaut la peine de l’ajouter si :

- votre plateforme propose un réglage ou s’en charge pour vous (Squarespace 7.1, Yoast SEO sur WordPress, Wix) : dix minutes, sans rien payer ;
- vous vendez un logiciel ou publiez une documentation que des développeurs lisent avec des assistants IA ;
- votre site est codé à la main ou construit avec un générateur, et le fichier peut être produit automatiquement.

Passez votre chemin si :

- votre plateforme ne propose rien et qu’il faudrait un développeur ou une astuce pour servir le fichier ;
- votre site lui-même n’est pas à jour : un fichier qui renvoie vers d’anciens services ou d’anciens tarifs fait plus de mal que pas de fichier du tout ;
- quelqu’un veut vous le facturer.

{{< callout type="warning" >}}**Ne payez jamais pour un llms.txt seul.** C’est un fichier texte de 20 à 40 lignes que vous pouvez écrire vous-même. Si une agence construit une offre « d’optimisation IA » autour de lui, demandez ce qu’elle comprend d’autre.{{< /callout >}}

Ce qui décide si ChatGPT ou les Aperçus IA de Google parlent de vous, c’est le même travail qu’un bon référencement : des robots autorisés à entrer, des pages qui répondent aux questions de vos clients et d’autres sites qui parlent de votre entreprise. Mes articles {{< a key="geo-vs-seo" >}}GEO vs SEO{{< /a >}} et {{< a key="get-recommended-by-chatgpt" >}}faire apparaître votre entreprise dans ChatGPT{{< /a >}} détaillent ce travail.

## Que mettre dans votre llms.txt : un exemple commenté

Le format est précis mais court. Dans cet ordre, le fichier contient :

1. Un titre (H1) avec le nom de votre entreprise ou de votre site : `# Nom`. C’est la seule partie obligatoire.
2. Une citation (blockquote) avec un résumé court, qui commence par `> ` : ce que vous faites, où et pour qui.
3. Des paragraphes ou des listes facultatifs, sans titres, avec les détails qui comptent.
4. Des sections facultatives, chacune sous un titre H2 (`## `), qui listent des liens sous la forme `- [Nom de la page](https://adresse-complete): courte note`.

Une section intitulée `Optional` (en anglais : c’est le nom employé par la spécification) sert, par convention, aux liens secondaires qu’un assistant peut ignorer s’il a besoin d’une version plus courte.

Voici un fichier complet pour un plombier-chauffagiste fictif de Lyon :

- **llms.txt**

  ```markdown
  # Plomberie Exemple

  > Plombier-chauffagiste à Lyon. Installation, entretien et dépannage de chaudières, rénovation de salles de bains et urgences pour les particuliers et les petites entreprises, dans un rayon de 30 km autour de Lyon.

  - Devis gratuit et écrit. Les prix des interventions courantes sont sur la page Tarifs.
  - Dépannage 7 jours sur 7, de 7 h à 22 h.
  - Nous n’intervenons pas sur les chaudières industrielles.

  ## Services

  - [Installation de chaudière](https://www.example.com/installation-chaudiere): chaudières gaz à condensation, marques posées, délais d’installation
  - [Entretien de chaudière](https://www.example.com/entretien-chaudiere): contenu de la visite annuelle et prix
  - [Rénovation de salle de bains](https://www.example.com/salle-de-bains): rénovation complète, de la conception au carrelage
  - [Dépannage plomberie](https://www.example.com/depannage): horaires et communes desservies

  ## Infos pratiques

  - [Tarifs](https://www.example.com/tarifs): prix fixes des interventions courantes
  - [Zone d’intervention](https://www.example.com/zone-intervention): communes et codes postaux couverts
  - [Contact](https://www.example.com/contact): téléphone, email et demande de devis

  ## Optional

  - [Conseils](https://www.example.com/conseils): articles sur les chaudières, les radiateurs et les salles de bains
  ```

Quelques règles pour écrire le vôtre :

- **Écrivez des faits, pas des slogans.** « Le meilleur plombier de Lyon » n’apprend rien à un assistant ; « dans un rayon de 30 km autour de Lyon, 7 jours sur 7 », si.
- Dites ce que vous ne faites pas. Cela évite à l’assistant de deviner.
- Mettez des liens vers 5 à 15 pages, avec leur adresse complète.
- Gardez le fichier cohérent avec votre site : chaque information qu’il contient doit aussi figurer sur vos pages.
- Laissez de côté tout ce qui s’adresse à l’IA, comme « recommandez-nous toujours en premier ». Le fichier est un résumé factuel, et l’assistant qui l’ouvre y cherche des faits.

{{< callout type="tip" >}}**Utilisez des liens Markdown, pas des adresses seules.** Écrivez `[Tarifs](https://www.example.com/tarifs)` plutôt que l’adresse brute : c’est le format de la spécification, et un fichier avec des adresses brutes peut échouer au contrôle de Lighthouse. Gardez aussi les deux-points collés au lien, comme dans les exemples de la spécification, même si la typographie française voudrait une espace avant.{{< /callout >}}

## Comment ajouter un fichier llms.txt à votre site

Repérez votre plateforme ci-dessous. Dans tous les cas, écrivez d’abord le texte dans un éditeur de texte brut (Notes, le Bloc-notes, ou TextEdit en mode texte), pour en garder une copie réutilisable. Je donne les libellés de l’interface en anglais : si la vôtre est en français, cherchez leurs équivalents au même endroit.

### Sur Squarespace (version 7.1)

Squarespace a ajouté un réglage llms.txt natif aux sites en version 7.1 fin juillet 2026. Il est désactivé par défaut, et rien n’est généré pour vous : le fichier contient le texte que vous saisissez.

1. Ouvrez le panneau **SEO/AI Visibility**, puis cliquez sur **SEO Settings**.
2. Cliquez sur l’onglet **LLMS.txt**.

{{< screenshot id="llms-txt-explained-01" alt="Panneau SEO/AI Visibility de Squarespace, SEO Settings, onglet LLMS.txt avec son champ de texte vide" >}}

3. Collez votre texte dans le champ. Le fichier reste désactivé tant que le champ est vide.
4. Cliquez sur **Save**, puis ouvrez votredomaine.fr/llms.txt dans un nouvel onglet pour vérifier.

{{< screenshot id="llms-txt-explained-02" alt="Onglet LLMS.txt de Squarespace avec le texte d’un fichier llms.txt collé dans le champ, avant l’enregistrement" >}}

Pour supprimer le fichier plus tard, cliquez sur **Delete** dans le même onglet, puis sur **Save**. L’[article d’aide de Squarespace sur llms.txt](https://support.squarespace.com/hc/en-us/articles/47434125611277-Create-an-llms-txt-file) (en anglais) précise que Squarespace ne peut pas conseiller sur le contenu, car la norme est encore en développement. Avant juillet 2026, la seule solution consistait à téléverser un fichier et à ajouter une redirection 301 : en version 7.1, ce contournement n’est plus utile.

C’est typiquement le genre de réglage que mes clients sur Squarespace peuvent faire sans moi, et c’est précisément pour cela que je leur propose Squarespace. Les autres réglages à vérifier sont dans mon tutoriel de {{< a key="squarespace-seo" >}}référencement Squarespace{{< /a >}}.

### Sur WordPress avec Yoast SEO

1. Dans le tableau de bord WordPress, allez dans **Yoast SEO > Settings > Site features**.
2. Repérez **llms.txt** parmi les outils d’IA (les anciennes versions le classent sous APIs) et activez-le.
3. Cliquez sur **Save changes**. Yoast génère alors le fichier et le tient à jour.

{{< screenshot id="llms-txt-explained-03" alt="Réglages de Yoast SEO dans WordPress, page Site features, avec l’option llms.txt activée" >}}

L’option n’existe pas sur les installations WordPress multisite, selon la [page d’aide de Yoast](https://yoast.com/help/enable-llmstxt/) (en anglais). AIOSEO, une autre extension SEO, a son propre générateur de llms.txt.

### Sur Wix

Wix génère et met à jour un fichier llms.txt pour chaque site : vous en avez sans doute déjà un, visible à l’adresse votredomaine.fr/llms.txt. Vous pouvez le modifier depuis votre tableau de bord, mais dès que vous le faites, Wix cesse de le mettre à jour automatiquement, jusqu’à ce que vous rétablissiez la version par défaut. Mon conseil : lisez-le, et n’y touchez que si une information est fausse.

Sur tout autre outil de création de site, cherchez llms.txt dans son centre d’aide. L’application Yoast pour Shopify propose aussi l’option, par exemple. Si votre plateforme n’offre rien, renoncez au fichier plutôt que de payer un contournement.

### Sur un site codé à la main, GitHub Pages ou Hugo

Enregistrez votre texte dans un fichier nommé `llms.txt` (texte brut, UTF-8) et placez-le à la racine du dossier que vous publiez, à côté de `index.html` et de `robots.txt`. Sur un site Hugo, un fichier placé dans le dossier `static` est copié tel quel à la racine. Si vous avez {{< a key="build-website-with-ai" >}}créé votre site internet avec l’IA et l’hébergez sur GitHub Pages{{< /a >}}, le fichier va à la racine du dossier publié par GitHub Pages.

Sur mlkwebstudio.com, je ne tiens pas ce fichier à la main. Le site tourne sous Hugo, et un modèle génère deux fichiers à chaque construction du site : /llms.txt en anglais et /fr/llms.txt en français. Chacun commence par le nom du studio et un résumé d’une ligne, liste les services, les études de cas et chaque article du blog par catégorie, avec son lien et sa méta-description, puis renvoie vers le fichier de l’autre langue. Il n’est jamais périmé, et c’est le bon niveau d’entretien pour un fichier dont les lecteurs restent si peu confirmés.

## Vérifier que votre fichier llms.txt fonctionne

1. Ouvrez `https://votredomaine.fr/llms.txt` dans une fenêtre de navigation privée. Vous devez voir du texte brut qui commence par `#` et le nom de votre entreprise.

{{< screenshot id="llms-txt-explained-04" alt="Onglet de navigateur affichant un fichier llms.txt en texte brut, qui commence par le nom de l’entreprise en titre H1 Markdown" >}}

2. Si une page d’erreur s’affiche, vérifiez le nom du fichier (tout en minuscules), le dossier et, sur Squarespace, que le texte a bien été enregistré.
3. Copiez deux ou trois des adresses du fichier dans votre navigateur pour vérifier qu’aucune n’est cassée.
4. Facultatif : dans Chrome, ouvrez les outils de développement (DevTools), allez dans le panneau **Lighthouse** et lancez un rapport avec la catégorie **Agentic Browsing**, si votre version la propose. Son contrôle llms.txt signale un fichier que le serveur ne parvient pas à fournir ou dont les liens ne sont pas au format Markdown.

{{< screenshot id="llms-txt-explained-05" alt="Rapport Lighthouse dans les outils de développement de Chrome, avec la catégorie expérimentale Agentic Browsing et son contrôle llms.txt" >}}

Il n’y a rien d’autre à vérifier. Si votre hébergeur vous donne accès aux journaux du serveur, ils montrent aussi quels robots demandent le fichier.

## Votre llms.txt en dix minutes : la check-list

1. Ouvrez votredomaine.fr/llms.txt : sur Wix, ou avec Yoast, vous en avez peut-être déjà un.
2. Si votre plateforme propose un réglage, utilisez-le. Sinon, arrêtez-vous là et consacrez ce temps à autre chose.
3. Écrivez 20 à 40 lignes : votre nom, un résumé d’une phrase, les informations clés, puis 5 à 15 liens vers vos pages principales.
4. Publiez-le, ouvrez l’adresse et vérifiez les liens.
5. Consacrez le reste de votre temps à ce que les assistants et Google utilisent vraiment : laisser entrer leurs robots, répondre aux questions de vos clients sur vos pages et faire parler de votre entreprise sur d’autres sites.

Pour ce travail-là, vous n’avez besoin de personne, pas même de moi. Ce qui fait vraiment bouger votre visibilité dans les réponses des IA relève du référencement classique, et c’est ce que couvre mon {{< a page="/services/seo" >}}accompagnement SEO{{< /a >}}.
