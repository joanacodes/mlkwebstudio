---
title: "IA pour TPE et PME : les usages et automatisations qui font gagner du temps"
seo_title: "IA pour TPE et PME : usages, automatisations et coûts"
description: "IA pour TPE et PME : les tâches à confier à Claude ou ChatGPT, les automatisations qui libèrent des heures, ce que cela coûte et les règles RGPD à suivre."
slug: "ia-pour-tpe-pme"
translationKey: "ai-small-business-guide"
date: 2026-10-17T09:43:00+02:00
lastmod: 2026-10-17T09:43:00+02:00
category: "ai-automation"
article_type: "pillar"
keywords: ["IA pour TPE PME", "intelligence artificielle TPE", "IA PME", "automatisation TPE PME", "outils IA entreprise", "IA générative TPE"]
summary: "L’IA pour TPE et PME est rentable quand elle reprend une tâche que vous faites déjà chaque semaine : emails, textes de site, recherches, administratif, alertes quand un prospect attend. Commencez par une seule tâche, un assistant comme Claude ou ChatGPT (offres gratuites ; ChatGPT Plus coûte 23 € TTC par mois en France) et une automatisation gratuite, puis mesurez le temps gagné. Les données personnelles de vos clients ne vont que dans une offre professionnelle ou l’API."
cover: "ai-small-business-guide"
cover_alt: "Les mots Claude, ChatGPT et n8n à côté d’une étoile en orbite, derrière un verre cannelé"
related: ["claude-vs-chatgpt", "automate-lead-follow-up", "build-app-with-ai", "zapier-vs-make-vs-n8n", "chatgpt-gdpr-client-data"]
services: ["automation"]
faq:
  - q: "Quel est le meilleur outil d’IA pour une TPE ?"
    a: "Celui qui correspond à une tâche que vous faites déjà. Pour la rédaction et la recherche, j’utilise Claude ; pour les alertes et les rappels sur un compte Google, Google Apps Script est gratuit ; pour relier des applications qui ne se parlent pas, Zapier, Make ou n8n. Testez les offres gratuites avant de payer."
  - q: "L’IA peut-elle remplacer un salarié dans une TPE ?"
    a: "Rarement. Elle retire des morceaux de travail, comme les premiers jets, les recherches, la saisie et les relances, mais quelqu’un doit vérifier ce qu’elle produit et parler aux clients. Raisonnez en heures gagnées par semaine, pas en postes supprimés."
  - q: "Qu’est-ce qu’un agent IA ?"
    a: "Un agent IA est un modèle d’IA qui mène une tâche en plusieurs étapes de lui-même, avec des outils comme la recherche web, vos fichiers ou d’autres applications, au lieu de répondre à un seul message. Ne lui confiez que des tâches dont vous pouvez vérifier le résultat."
  - q: "Un texte écrit avec l’IA est-il pénalisé par Google ?"
    a: "Pas parce qu’il est écrit avec l’IA. Selon ses consignes, Google récompense les contenus utiles quelle que soit la façon dont ils sont produits, et traite comme du spam les contenus produits en masse pour manipuler le classement. Retravaillez les brouillons de l’IA avec vos propres faits et votre expérience, comme n’importe quel texte."
  - q: "L’IA peut-elle traduire mon site en anglais ?"
    a: "Oui : Claude et ChatGPT écrivent et traduisent en français comme en anglais. Pour un site bilingue, demandez plutôt une version écrite pour chaque marché, avec ses propres exemples et mots-clés, et faites-la relire par une personne de langue maternelle anglaise avant la mise en ligne."
---

L’IA pour TPE et PME vaut son prix quand elle vous retire une tâche que vous faites déjà chaque semaine : le premier jet d’un email, la recherche derrière une page de site, l’administratif que personne n’aime, l’alerte qui vous prévient qu’un prospect attend. Elle vous coûte de l’argent pour rien quand vous achetez les outils d’abord et cherchez à quoi ils servent ensuite.

J’utilise l’IA chaque jour dans mon travail. Depuis son arrivée, mes délais de livraison ont fondu, et le temps gagné me permet parfois de chercher des solutions supplémentaires pour un client et de construire quelque chose de plus complet qu’avant. Je développe aussi des logiciels pour mon propre usage, pas pour les vendre : je sais ce que c’est d’avoir besoin de quelque chose et d’en construire la solution soi-même. C’est très satisfaisant.

Ce guide est la page centrale de la rubrique IA et automatisation du blog. Il couvre ce que l’IA peut réellement faire pour une TPE ou une petite PME, par où commencer, ce que cela coûte au moment où j’écris (octobre 2026) et les règles sur les données clients, avec à chaque étape le lien vers le guide détaillé. Si vous voulez que ChatGPT ou Gemini recommandent votre entreprise, c’est un autre sujet, traité dans le {{< a key="ai-search-geo-guide" >}}guide du référencement IA{{< /a >}}.

## Ce que l’IA pour TPE et PME fait concrètement

L’essentiel du temps gagné vient de cinq types de travail. Le tableau montre ce que l’IA ou l’automatisation y fait, et ce qu’il vous faut pour démarrer.

| Tâche | Ce que fait l’IA ou l’automatisation | Pour démarrer |
|---|---|---|
| Rédaction | Premiers jets d’emails, de devis, de pages de site et de publications | Un compte gratuit sur un assistant IA |
| Recherche | Lit de nombreuses sources et rend un rapport qui les cite | Une offre payante pour la Recherche de Claude ; la Recherche approfondie de ChatGPT est limitée en gratuit |
| Administratif | Résumés de longs documents, comptes rendus de réunion, traductions, formules de tableur | Un compte gratuit pour essayer, une offre payante pour un usage quotidien |
| Alertes et relances de prospects | Vous transmet chaque demande dès son arrivée, vous relance si personne n’a rappelé | Un compte Google gratuit, ou un outil d’automatisation |
| Outils internes | Calculateur de devis, tableau de bord, petit CRM construit autour de votre façon de travailler | Un assistant IA pour un outil simple ; un développeur dès que des données clients sont stockées |

Ce qui manque au tableau compte autant : vos prix, votre stratégie et la conversation avec un client mécontent. L’IA peut vous aider à les préparer, mais la décision vous revient, tout comme la responsabilité de ses erreurs.

## Commencez par une tâche que vous faites déjà chaque jour

Mon conseil le plus ferme sur l’IA est le même que sur le marketing. Il est facile de craquer pour chaque nouvel outil qui brille, et l’IA en sort un par semaine : tout ce bruit est voulu. Ce qui rapporte, c’est d’améliorer le travail que vous faites déjà, d’où ma règle : automatiser une tâche que vous faites déjà tous les jours, pas une tâche que vous ferez peut-être un jour. Le versant marketing de cette idée est dans mon article sur le {{< a key="shiny-object-syndrome" >}}syndrome de l’objet brillant{{< /a >}}.

Voici la méthode que je propose :

1. Pendant une semaine, notez chaque tâche répétée qui vous prend plus de dix minutes : répondre aux mêmes questions, rédiger des devis, recopier les demandes dans un tableur, relancer pour les rappels.
2. Choisissez celle que vous faites le plus souvent et que vous pouvez vérifier facilement. Un premier jet que vous relirez de toute façon est un bon début ; un email qui part chez un client sans relecture, non.
3. Chronométrez-la une fois à la main, puis une fois avec l’IA, et notez les deux temps.
4. Utilisez un seul outil pour cette tâche pendant un mois, puis décidez : le garder, l’ajuster ou l’abandonner.
5. Ensuite seulement, ajoutez une deuxième tâche ou un deuxième outil.

{{< callout type="tip" >}}Si une tâche ne revient pas chaque semaine, ne l’automatisez pas encore. Mettre en place et surveiller une automatisation prend du temps, et **elle n’est rentable que sur un travail qui se répète**.{{< /callout >}}

Les deals à vie sont le piège classique. J’ai déjà acheté sur AppSumo, mais c’est un peu un casino : tout paraît bon marché, alors on finit par dépenser beaucoup, tout ne vaut pas le coup, et certains outils finissent par ne plus fonctionner. Mon {{< a key="appsumo-review" >}}avis sur AppSumo{{< /a >}} explique comment y acheter sans regrets.

Rien de tout cela n’exige une agence. Un compte gratuit sur un assistant et une heure de votre temps suffisent pour tester la première tâche.

## Rédaction et recherche : mon usage quotidien de l’IA

J’utilise Claude pour la rédaction et la recherche. D’après mon expérience, ChatGPT a tendance à inventer un peu trop souvent, alors que Claude, et son modèle Fable 5.1 en particulier, s’est montré extrêmement fiable. C’est mon expérience, pas un banc d’essai : testez les deux sur votre propre travail avant de payer, comme l’explique mon comparatif {{< a key="claude-vs-chatgpt" >}}Claude ou ChatGPT{{< /a >}}.

En copywriting et en SEO, j’utilise la deep research pour trouver ce dont les gens se plaignent le plus dans une niche, exactement ce à quoi un bon texte doit répondre, et les mots-clés qui reviennent sans cesse. Je vérifie ensuite ces mots-clés dans Semrush avant d’écrire une ligne. La méthode est détaillée dans {{< a key="deep-research-copywriting-seo" >}}deep research ChatGPT et Claude pour le copywriting et le SEO{{< /a >}}.

Sur un projet de site, c’est avec l’IA que je réunis l’identité visuelle, la mise en page et les textes, puis que je retravaille et corrige jusqu’à ce que le résultat me convienne, avant que le client ne voie quoi que ce soit. Le revers : le premier jet d’une IA ressemble à celui de tout le monde. Ce qui fait qu’un texte vous ressemble, ce sont les informations que personne d’autre ne possède : les mots de vos clients, vos prix, votre façon de travailler. J’explique comment je rédige mes consignes et comment je corrige dans {{< a key="ai-writing-sound-human" >}}rédiger avec l’IA sans texte générique{{< /a >}}.

L’IA peut aussi créer le site lui-même. Je déconseille en général WordPress et Webflow aux indépendants, car les deux demandent un long apprentissage ; pour un site vitrine simple, le créer avec l’IA et l’héberger sur GitHub Pages est plus facile. Le pas-à-pas est dans {{< a key="build-website-with-ai" >}}créer un site internet avec l’IA{{< /a >}}.

### L’administratif : le gain de temps discret

L’administratif, c’est là qu’un assistant IA fait gagner du temps sans que personne ne le remarque. Quelques usages typiques :

- résumer un contrat de 30 pages pour savoir quelles clauses lire de près ;
- transformer une note vocale prise sur un chantier en liste de tâches ;
- rédiger un devis à partir de vos notes et de votre grille tarifaire ;
- écrire une formule de tableur à partir d’une description en français ;
- traduire l’email d’un client, ou votre réponse.

Claude peut aussi créer des documents, des tableurs et des présentations directement dans la conversation. Relisez toujours ce qui revient : un résumé peut oublier la seule clause qui compte, et une formule peut être fausse tout en ayant l’air juste.

## Quel assistant IA payer, et combien ça coûte

Les deux principaux assistants ont une offre gratuite qui suffit pour tester une tâche. Vous payez quand vous atteignez les limites chaque semaine ou qu’il vous manque une fonction. Au moment où j’écris (octobre 2026) :

| | Claude | ChatGPT |
|---|---|---|
| Offre gratuite | Oui : modèles Sonnet et Haiku, recherche web, jusqu’à 5 projets ; pas de Recherche | Oui, avec une Recherche approfondie limitée |
| Pour une personne | Pro : 20 $ par mois hors taxes, ou 17 $ par mois en annuel (200 $ payés d’avance) | Plus : 23 € TTC par mois en France ; Go coûte moins cher mais affiche de la publicité |
| Pour une équipe | Team : à partir de 20 $ par utilisateur et par mois en annuel (25 $ en mensuel), de 2 à 150 utilisateurs | Business, facturé par utilisateur |

Anthropic affiche ses prix en dollars et facture en devise locale quand elle est prise en charge, taxes ajoutées ou incluses selon le pays : vérifiez le montant en euros au moment de payer. Les prix à jour sont sur la [page tarifs de Claude](https://claude.com/pricing) et la [page tarifs de ChatGPT](https://chatgpt.com/pricing/).

Le modèle que je trouve le plus fiable, Fable 5.1, est le plus performant d’Anthropic. Avec Pro, il passe par les crédits d’utilisation, facturés au tarif de l’API en plus de l’abonnement ; les offres Max, à partir de 100 $ par mois, l’incluent dans des limites hebdomadaires. Claude n’affiche pas de publicité, et Anthropic a annoncé en février 2026 que cela ne changerait pas. ChatGPT reste le meilleur choix si vous voulez créer des images dans la conversation : la liste des fonctions de Claude ne comprend pas la génération d’images.

Avant de payer quoi que ce soit, regardez ce que vous avez déjà :

- Google Workspace : Google intègre Gemini à ses offres entreprise depuis janvier 2025, et l’offre d’entrée de gamme a moins de fonctions d’IA que les autres.
- Microsoft 365 : l’assistant de Microsoft s’appelle Copilot ; vérifiez ce que comprend votre abonnement avant d’acheter un deuxième assistant.
- Les options européennes : Mistral AI, entreprise française, édite l’assistant Le Chat, et Infomaniak, dont je recommande les services, indique que son assistant Euria traite et stocke les requêtes dans ses centres de données suisses, sans s’en servir pour entraîner ses modèles.

## Automatisations : laisser tourner la routine sans vous

Une automatisation est une règle qui exécute une tâche quand quelque chose se produit : un formulaire est envoyé, la demande arrive dans un tableur et vous recevez un email. Contrairement à un assistant IA, elle tourne sans vous, à chaque fois, et beaucoup d’automatisations utiles ne contiennent aucune IA.

La première à mettre en place est l’alerte prospect, parce que la rapidité fait gagner des clients. Dans une étude portant sur 1,25 million de prospects, publiée par la Harvard Business Review, les entreprises qui tentaient de joindre un prospect dans l’heure avaient près de sept fois plus de chances de le qualifier que celles qui essayaient une heure plus tard ([The Short Life of Online Sales Leads](https://hbr.org/2011/03/the-short-life-of-online-sales-leads), 2011). L’étude date, mais je préfère toujours rappeler un prospect en quelques minutes plutôt qu’en quelques heures.

Si vos demandes arrivent par un formulaire Google Forms, cela ne coûte rien : Google Apps Script peut vous envoyer par email le nom et le numéro du prospect dès l’envoi du formulaire, inscrire la demande et vous relancer si elle est encore marquée « Nouvelle » une heure plus tard. Le tutoriel pour {{< a key="automate-lead-follow-up" >}}automatiser le suivi des prospects{{< /a >}} donne le script et chaque étape. Un compte Google gratuit peut envoyer depuis un script des emails à 100 destinataires par jour, largement assez pour des alertes.

Quand il faut faire passer des données entre des applications qui ne se parlent pas, comme le formulaire de votre site, votre CRM et votre logiciel de facturation, il vous faut un outil de connexion. Vous croiserez trois noms : Zapier, le plus simple ; Make, qui fait le même travail pour moins cher ; et n8n, un éditeur berlinois qui facture chaque exécution complète plutôt que chaque étape, héberge son offre cloud à Francfort et peut s’installer gratuitement sur votre propre serveur. L’offre gratuite de Zapier couvre 100 tâches par mois, celle de Make 1 000 crédits par mois. Leurs prix et leurs limites sont comparés dans {{< a key="zapier-vs-make-vs-n8n" >}}n8n vs Make vs Zapier{{< /a >}}.

L’IA s’insère dans une automatisation comme une étape : lire une demande et la classer (devis, réclamation, fournisseur), rédiger une réponse que vous validez, ou extraire d’un email le nom, l’adresse et le type de chantier. Cette étape appelle un modèle d’IA par son API, sujet de la section suivante.

Deux points pratiques avant de construire quoi que ce soit. Une automatisation qui lit vos demandes a besoin d’un accès à la boîte mail où elles arrivent : c’est l’une des choses que je demande aux clients quand j’en construis une. Et toute automatisation peut tomber en panne sans prévenir : donnez à chacune un responsable et vérifiez une fois par mois qu’elle tourne encore.

## Les API expliquées en deux paragraphes

Une API est la porte qui permet à un logiciel de parler directement à un modèle d’IA, sans passer par la fenêtre de discussion. Quand une automatisation, un formulaire de site ou une application interne a besoin d’IA, elle envoie du texte par l’API et reçoit la réponse. Vous payez au token, un token étant un morceau de mot ; selon Anthropic, un million de tokens représente environ 555 000 mots. L’API se paie à part : un abonnement Claude Pro ou ChatGPT Plus ne l’inclut pas.

Les petits modèles coûtent très peu. Au moment où j’écris, Claude Haiku 5.5 coûte 0,10 $ par million de tokens en entrée et 0,50 $ par million en sortie (pour des requêtes jusqu’à 100 000 tokens), contre 4 $ et 20 $ pour Claude Opus 5.5, selon la [grille tarifaire de l’API](https://platform.claude.com/docs/en/about-claude/pricing) d’Anthropic. D’après mon calcul, trier 1 000 demandes d’environ 500 mots avec Haiku 5.5 coûte une vingtaine de centimes de dollar. Pour créer une clé, fixer un plafond de dépenses et envoyer une première requête, suivez le tutoriel {{< a key="claude-api-tutorial" >}}API Claude{{< /a >}} ou celui de l’{{< a key="openai-api-tutorial" >}}API ChatGPT (OpenAI){{< /a >}}.

{{< callout type="note" >}}Fixez un **plafond de dépenses mensuel** le jour où vous créez une clé API. Une boucle dans une automatisation peut envoyer des milliers de requêtes pendant que vous dormez.{{< /callout >}}

## Outils internes sur mesure : quand le tableur ne suffit plus

Parfois, aucun outil du marché ne convient, et c’est là qu’en développer un a du sens. La version client de cette histoire, c’est {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, un installateur de climatisation en Île-de-France. Je m’occupe de son SEO, de son cold emailing et de ses sites, et à un moment je lui apportais plus de prospects que l’équipe ne pouvait en traiter. Pilotech m’a demandé une application pour tout voir clairement et ne plus jamais oublier de rappeler un prospect ou de lui répondre.

J’ai développé sur mesure un outil interne qui gère les prospects, les chantiers, la communication avec les salariés, l’agenda et l’analyse comptable, avec des intégrations d’IA et de téléphonie. Comment il est né, et les signes qui montrent que vous en avez besoin, sont racontés dans {{< a key="bespoke-crm-internal-app" >}}CRM sur mesure{{< /a >}}. La plupart des entreprises n’ont pas besoin d’aller aussi loin : si votre processus se résume à demande, devis, gagné ou perdu, un tableur avec des rappels automatiques vous servira mieux.

Il ne faut pas toujours du code. Les artefacts de Claude permettent de créer un petit outil interactif, comme un calculateur de devis ou une checklist, dans une conversation et sur toutes les offres, une fois l’exécution de code et la création de fichiers activées dans les paramètres. Un artefact peut même appeler Claude sans clé API, l’usage de chaque personne étant décompté de sa propre offre, et toute personne avec qui vous le partagez doit avoir un compte Claude. Les générateurs d’applications par IA vont plus loin. Ce qui est réaliste sans développeur, et où cela s’arrête, est expliqué dans {{< a key="build-app-with-ai" >}}créer une application avec l’IA{{< /a >}}.

## Données clients, RGPD et AI Act

Les règles sont plus simples qu’elles n’en ont l’air, et ce sont elles qui décident de l’offre qu’il vous faut. Ceci est une information générale, pas un conseil juridique.

### Les données personnelles

Dès que vous collez le nom, l’email ou le téléphone d’un client dans un outil d’IA, le RGPD s’applique. Trois habitudes couvrent la plupart des cas :

1. Sur une offre personnelle, désactivez l’entraînement des modèles : dans ChatGPT, ouvrez **Paramètres > Contrôles des données** et désactivez **Améliorer le modèle pour tout le monde** ; dans Claude, faites le même choix dans les paramètres de confidentialité.
2. Anonymisez ce qui peut l’être. Une réclamation sans le nom du client est aussi utile à l’IA qu’avec.
3. Réservez les données personnelles de vos clients aux offres professionnelles et à l’API, qui ne servent pas à l’entraînement par défaut. OpenAI signe sur demande un contrat de sous-traitance (DPA) pour ChatGPT Business, Enterprise et son API, et les conditions commerciales d’Anthropic intègrent son avenant sur le traitement des données.

{{< callout type="warning" >}}Certaines données n’ont rien à faire dans un outil d’IA, quelle que soit l’offre : **données de santé, numéros d’identité, coordonnées bancaires et mots de passe**.{{< /callout >}}

Le détail, offre par offre, est dans {{< a key="chatgpt-gdpr-client-data" >}}ChatGPT et RGPD : quelles données clients confier à une IA{{< /a >}}.

### La maîtrise de l’IA selon l’AI Act

L’article 4 du règlement européen sur l’IA (AI Act), consacré à la maîtrise de l’IA, s’applique depuis le 2 février 2025 aux entreprises qui utilisent l’IA dans leur travail. Une modification entrée en vigueur en juillet 2026, le règlement (UE) 2026/1744, l’a assoupli : vous devez prendre des mesures pour soutenir la maîtrise de l’IA de votre personnel et des personnes qui l’utilisent pour votre compte, mais aucun niveau précis n’est exigé, et le texte n’impose ni formation ni certificat. Pour une petite équipe, une règle d’une page en respecte l’esprit : quels outils sont autorisés, quelles données n’y entrent jamais, et qu’une personne relit chaque résultat avant qu’il n’arrive chez un client. La page de la Commission européenne sur [les compétences et la maîtrise de l’IA](https://digital-strategy.ec.europa.eu/en/policies/ai-talent-skills-and-literacy) (en anglais) est le point de départ officiel.

Pour les données clients elles-mêmes, c’est le RGPD, sous le contrôle de la CNIL, qui s’applique ; l’AI Act s’y ajoute pour l’usage de l’IA dans l’entreprise.

## Vos 30 premiers jours avec l’IA : la checklist

1. Semaine 1 : listez les tâches que vous répétez chaque semaine et choisissez-en une facile à vérifier.
2. Ouvrez des comptes gratuits sur Claude et ChatGPT, désactivez l’entraînement sur les deux et faites la même tâche dans chacun.
3. Semaine 2 : rédigez votre règle IA d’une page et partagez-la avec toutes les personnes qui travaillent avec vous.
4. Mettez en place une automatisation, en commençant par l’alerte prospect si vos demandes arrivent par votre site.
5. Semaines 3 et 4 : utilisez l’outil chaque jour et notez le temps gagné.
6. Jour 30 : gardez, ajustez ou abandonnez. Ne payez une offre que si vous atteignez les limites gratuites chaque semaine.

### Quand passer la main

Jusqu’ici, vous pouvez tout faire vous-même. Faites appel à un développeur quand un outil stocke des données personnelles de clients, se connecte à votre téléphonie ou à votre comptabilité, ou doit tourner chaque jour sans que personne ne le surveille. Si vous en commandez un, prévoyez un acompte : je demande 30 % ou 50 % à la commande et le solde à la livraison.

Pour le reste de mes outils du quotidien, du graphisme à la vérification d’emails, voyez {{< a key="small-business-tools-guide" >}}les outils numériques pour TPE que j’utilise chaque jour{{< /a >}}.
