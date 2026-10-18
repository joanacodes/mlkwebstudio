---
title: "Rédiger avec l’IA sans texte générique : ma méthode pour les pages d’un site"
seo_title: "Rédiger avec l’IA sans texte générique : ma méthode"
description: "Rédiger avec l’IA les textes de votre site sans qu’ils sonnent faux : vraies informations, 3 à 5 exemples de votre ton, brief clair, relecture serrée."
slug: "rediger-avec-ia"
translationKey: "ai-writing-sound-human"
date: 2026-10-17T09:09:00+02:00
lastmod: 2026-10-17T09:09:00+02:00
category: "ai-automation"
article_type: "guide"
keywords: ["rédiger avec l’IA", "rédaction IA site web", "humaniser un texte IA", "prompt rédaction", "texte IA naturel", "Claude rédaction"]
summary: "Pour rédiger avec l’IA des textes qui sonnent juste, travaillez d’abord ce que vous lui donnez : des faits que seule votre entreprise possède, les mots de vos clients et 3 à 5 exemples de votre ton, avec un rôle et la raison de chaque consigne. Relisez ensuite sans complaisance, en coupant les entrées en matière creuses, les adjectifs sans preuve et les promesses gonflées, puis vérifiez chaque fait avant la mise en ligne."
cover: "ai-writing-sound-human"
cover_alt: "Le mot Copywriting sous la maquette d’une page web, à côté d’un téléphone affichant une boîte de réception, tenu au-dessus d’un ordinateur portable"
related: ["deep-research-copywriting-seo", "claude-vs-chatgpt", "write-seo-blog-posts", "write-content-for-ai-search", "web-design-process"]
services: ["websites"]
faq:
  - q: "Quelle IA rédige les textes les plus naturels ?"
    a: "Celle à qui vous donnez la meilleure matière. J’utilise Claude : dans mon travail, ChatGPT a tendance à halluciner un peu trop, alors que Claude, et Fable 5.1 en particulier, s’est montré extrêmement fiable. La méthode fonctionne avec les deux."
  - q: "Peut-on suivre cette méthode avec l’offre gratuite de Claude ?"
    a: "Oui. Au moment où j’écris (octobre 2026), l’offre gratuite inclut jusqu’à cinq projets, de quoi séparer le brief, les exemples et les consignes de chaque client, avec les modèles Sonnet et Haiku. La Recherche, l’outil de deep research de Claude, demande une formule payante comme Pro, et Fable 5.1 passe par les crédits d’utilisation de Pro ou est inclus dans Max ([page des tarifs de Claude](https://claude.com/pricing))."
  - q: "Peut-on donner le site d’un concurrent comme exemple de ton ?"
    a: "Non. L’IA imite ses exemples de près : vous obtiendriez une page qui sonne comme celle de votre concurrent, et reprendre ses phrases peut constituer une contrefaçon. Servez-vous de vos propres emails, devis et réponses aux clients, ou écrivez vous-même un paragraphe dans le ton voulu."
  - q: "Faut-il traduire ses textes avec l’IA pour la version anglaise du site ?"
    a: "Mieux vaut rédiger chaque version pour son marché : le prompt et les exemples dans la langue de la page, avec les mots, les exemples et les prix du pays visé. Un modèle reprend la langue et le style de ce que vous lui donnez, et une traduction garde les tournures de la langue d’origine."
---

Un texte rédigé par l’IA sonne creux quand il part de rien. Demandez « une page d’accueil pour une entreprise de déménagement » et vous obtiendrez la page d’accueil la plus probable pour n’importe quel déménageur : polie et interchangeable. Pour rédiger avec l’IA des textes qui sonnent juste, travaillez ce qui entre avant de corriger ce qui sort, puis relisez le brouillon sans complaisance.

C’est ainsi que je rédige les textes des sites de mes clients, et depuis l’arrivée de l’IA, mes délais de livraison ont raccourci. Une fois la charte graphique et les maquettes validées, je fais la recherche SEO et la rédaction, puis je mélange le tout avec l’IA et je fais des allers-retours, rédaction puis correction, jusqu’à ce que les textes et le site me conviennent. Le client ne les voit qu’à ce moment-là.

Voici cette méthode en six étapes, avec un prompt à adapter et la liste des tics à supprimer. Elle fait partie de mon guide sur l’{{< a key="ai-small-business-guide" >}}IA pour les TPE et PME{{< /a >}} et s’insère dans mes {{< a key="web-design-process" >}}étapes de création d’un site internet{{< /a >}}.

## Pourquoi les textes écrits par l’IA se ressemblent tous

Un modèle de langage écrit les mots les plus probables. Sans faits sur votre entreprise, la page la plus probable est la moyenne de milliers de pages semblables : les mêmes promesses et les mêmes adjectifs, sur le même rythme rassurant. Rien n’y est faux, et rien n’y est à vous.

Or je veux que mes clients fassent bonne impression, et même que leurs prospects soient un peu intimidés par leur site, pour que l’entreprise soit prise au sérieux. Cela réduit aussi les négociations : un prospect qui vous juge peu respectable ne pensera pas que vous valez ce prix-là. Un texte qui pourrait appartenir à n’importe qui joue contre les deux.

{{< callout type="tip" >}}**Le test du remplacement.** Remplacez le nom de votre entreprise par celui d’un concurrent. Si le paragraphe tient toujours, il ne dit rien de vous, et le prospect n’a aucune raison de vous choisir plutôt que le résultat suivant.{{< /callout >}}

L’autre risque, ce sont les faits inventés : un modèle à court d’informations comble le vide avec quelque chose de plausible, comme une garantie que personne n’a donnée. Dans mon travail, certains assistants le font plus souvent que d’autres, et c’est pour cela que je rédige avec Claude (le détail est dans mon comparatif {{< a key="claude-vs-chatgpt" >}}Claude ou ChatGPT{{< /a >}}). Aucun n’en est à l’abri, et la méthode ci-dessous rend les inventions plus faciles à repérer.

## Rédiger avec l’IA en six étapes : la méthode en un coup d’œil

| Étape | Ce que vous faites | Pourquoi ça marche |
|---|---|---|
| 1. Matière | Des faits, des preuves et des mots de clients que seule votre entreprise possède | Le modèle a quelque chose de précis à dire |
| 2. Exemples | 3 à 5 échantillons du ton voulu | Les exemples orientent le ton mieux que des adjectifs |
| 3. Brief | Un rôle, la raison de chaque consigne, des instructions qui disent quoi faire | Le modèle applique vos raisons aux cas imprévus |
| 4. Brouillons | Une section à la fois, plusieurs versions des phrases clés | Vous choisissez au lieu de subir le premier jet |
| 5. Relecture | Couper les tics qui trahissent un texte généré | C’est là que la voix se gagne ou se perd |
| 6. Faits | Vérifier chaque chiffre, nom et promesse, puis montrer au client | Un seul détail inventé peut coûter la confiance d’un prospect |

## Étape 1 : donner à l’IA ce que seule votre entreprise possède

L’essentiel du travail se fait avant le premier prompt : réunir une matière qu’aucun concurrent n’aurait pu écrire.

- **Le brief.** Chaque site commence par mes questions sur l’entreprise, ce qu’elle propose et le type de clients avec qui elle préfère travailler. Les réponses vont dans le prompt sous forme de faits simples, avec l’action que la page doit déclencher : un appel, une demande de devis.
- **Les preuves.** Les zones couvertes, le délai de réponse, ce que comprend la garantie. Un détail que le prospect peut vérifier vaut mieux que trois adjectifs.
- **Les mots de vos clients.** J’utilise Deep Research pour savoir ce dont les gens se plaignent le plus dans une niche. Ces plaintes donnent son angle au texte, et la façon dont les clients les formulent fait les meilleurs titres. Je détaille ma méthode dans mon tutoriel {{< a key="deep-research-copywriting-seo" >}}Deep Research pour le copywriting et le SEO{{< /a >}}.
- **La façon de parler de l’entreprise.** Ce que l’on dit à un client au téléphone, c’est la voix que le site doit avoir. Un message vocal de deux minutes, retranscrit, peut contenir de meilleures phrases qu’un premier jet.

Prenons un exemple, un déménageur à Nantes. Sa matière pourrait ressembler à ceci :

```text
Entreprise : déménageur à Nantes, particuliers et petits bureaux
Zone : Nantes et la Loire-Atlantique
Faits : visite gratuite avant chaque devis ; prix ferme après la visite ;
la plupart des déménagements faits en une journée ; un seul numéro
en cas de casse
Clients préférés : familles qui déménagent, propriétaires entre deux locataires
Plaintes trouvées dans les avis : déménageurs en retard, prix qui grimpe
le jour J, casse dont personne ne se dit responsable
Action : appeler, ou réserver la visite gratuite
```

## Étape 2 : montrer votre ton avec 3 à 5 exemples

Demander un ton « chaleureux mais professionnel » donne l’idée que tout le monde se fait d’un ton chaleureux mais professionnel. Les exemples marchent mieux : le [guide de prompting d’Anthropic](https://platform.claude.com/docs/fr/build-with-claude/prompt-engineering/claude-prompting-best-practices) les présente comme l’un des moyens les plus fiables d’orienter le ton et la structure. Il en recommande 3 à 5, proches de la tâche, assez variés pour que le modèle ne recopie pas un seul schéma, et encadrés par des balises `<example>` pour qu’il les distingue de vos consignes.

Les meilleurs exemples viennent de l’entreprise elle-même :

- un email envoyé à un client, de ceux qui ont reçu une bonne réponse ;
- la réponse donnée au téléphone à une question fréquente, retranscrite ;
- un devis qui explique clairement la prestation ;
- à défaut, un paragraphe que vous écrivez vous-même dans le ton voulu.

{{< callout type="note" >}}Retirez les noms, adresses email et numéros de téléphone des emails clients avant de les coller. Mon article {{< a key="chatgpt-gdpr-client-data" >}}ChatGPT et RGPD{{< /a >}} explique quelles données clients vous pouvez confier à une IA.{{< /callout >}}

## Étape 3 : briefer l’IA comme un nouveau collègue

Le guide d’Anthropic propose de considérer le modèle comme un employé brillant mais nouveau, qui manque de contexte sur vos habitudes : si un collègue qui connaît mal le sujet ne comprend pas votre prompt, le modèle non plus. Trois réflexes tirés de ce guide changent le résultat sur un texte :

1. **Donnez-lui un rôle.** Une phrase suffit : ce qu’il écrit, et pour qui.
2. **Expliquez pourquoi.** « Trois phrases au maximum » est une règle. Ajouter « parce que le visiteur décide dès les premières lignes s’il continue à lire » permet au modèle d’appliquer la raison à des cas que vous n’aviez pas prévus.
3. **Dites quoi faire, pas quoi éviter.** Plutôt que « n’écrivez pas comme un robot », décrivez la voix : « phrases courtes, faits concrets, “nous” et “vous”, comme on parle à un client au téléphone ». Rédigez aussi le prompt lui-même en phrases simples : selon Anthropic, la mise en forme d’un prompt peut déteindre sur la réponse, et un prompt truffé de listes à puces appelle des listes à puces.

Voici un prompt pour le déménageur, construit sur ces réflexes :

```text
Vous rédigez les textes du site d’une entreprise de déménagement à
Nantes. Vous écrivez pour des particuliers sur le point de déménager,
inquiets pour le prix, la date et leurs affaires.

<brief>
[la matière de l’étape 1]
</brief>

<examples>
<example>[un email envoyé à un client]</example>
<example>[la réponse à une question fréquente, retranscrite]</example>
<example>[un paragraphe de devis qui explique la prestation]</example>
</examples>

Rédigez la première section de la page d’accueil : un titre, puis
trois phrases au maximum, parce que le visiteur décide dès les
premières lignes s’il continue à lire. Répondez à la plainte la plus
fréquente du brief avec un fait du brief, dans le ton des exemples.
N’utilisez que les faits du brief ; s’il en manque un, écrivez
[À CONFIRMER] pour que je le vérifie. Proposez trois versions du titre.
```

Rangez le brief, les exemples et les consignes de ton dans un projet Claude (ChatGPT propose aussi des projets). Les instructions d’un projet ne s’appliquent qu’aux conversations de ce projet : chaque client garde sa voix. Le champ **Instructions pour Claude**, dans les **Paramètres**, n’est pas le bon endroit pour la voix d’un client, car il s’applique à toutes vos conversations ([page d’aide d’Anthropic](https://support.claude.com/fr/articles/10185728-understanding-claude-s-personalization-features)).

## Étape 4 : rédiger section par section et faire des allers-retours

Demandez une page entière d’un coup, et vous recevrez une page entière de formules passe-partout. Procédez plutôt section par section, avec plusieurs versions des phrases qui comptent le plus : le titre, la phrase en dessous et l’appel à l’action. Choisir entre trois titres va plus vite que d’en corriger un seul.

Faites ensuite des allers-retours, en disant au modèle ce qui fonctionne et pourquoi : « La version 2 est la bonne, mais “sans stress” vaut pour n’importe quel déménageur : mettez plutôt le prix ferme. »

Un dernier tour avant votre propre relecture : demandez au modèle de « citer chaque phrase qui fonctionnerait encore pour un concurrent, et chaque affirmation absente du brief ». Il en repère une partie ; l’étape 5 se charge du reste.

## Étape 5 : relire sans complaisance et couper ce qui trahit l’IA

C’est à la relecture que le texte commence à sonner comme une personne. Lisez le brouillon à voix haute : là où vous manquez de souffle, ou là où vous ne diriez jamais la phrase à un client, réécrivez. Passez ensuite en revue ces tics :

| À couper | Comment le repérer | À écrire à la place |
|---|---|---|
| Les entrées en matière grandiloquentes | Une première phrase sur l’époque où nous vivons, ou sur le stress que représente telle étape | L’offre ou la réponse, dès la première ligne |
| Les adjectifs qui remplacent les preuves | « Professionnel » ou « sur mesure », sans rien pour l’établir | Un fait : une zone, un délai, une garantie, un chiffre |
| Les verbes de publicité | Des verbes qui promettent de transformer la vie ou l’entreprise du lecteur | Ce qui se passe vraiment : « la plupart des déménagements se font en une journée » |
| Les questions en ouverture | Une section qui commence par interroger le lecteur | Le problème, formulé avec les mots du client |
| Le rythme mécanique | Toutes les phrases de la même longueur, des idées toujours par trois, « non seulement…, mais aussi… » | Des phrases courtes et longues mêlées, et autant de points que vous en avez vraiment |
| Les résumés de la page | Un dernier paragraphe qui répète ce qui vient d’être dit | L’étape suivante : appeler, demander un devis, venir |
| Les faits que personne n’a donnés | Prix, garanties ou affirmations absents du brief | [À CONFIRMER], puis la question au client |

Voici l’ouverture de la page d’accueil du déménageur, avant et après :

```text
Avant (sans brief, sans exemples, sans relecture) :
Déménager est l’une des expériences les plus stressantes de la vie.
Notre équipe de professionnels passionnés s’engage à vous offrir un
service de qualité, adapté à vos besoins.

Après (brief, exemples, relecture) :
Déménagement à Nantes : le plus souvent bouclé en une journée.
Nous visitons votre logement gratuitement avant de chiffrer, et le
prix du devis est celui que vous payez le jour J. En cas de casse,
un seul numéro à appeler.
```

**Court et net, ça marche.** C’est ma règle en cold emailing : le premier email tient en trois lignes au plus, une présentation et un appel à l’action, parce que personne n’aime recevoir un long email d’un inconnu à qui il n’a rien demandé. Le visiteur d’une page de services n’a pas demandé votre biographie non plus : donnez-lui d’abord l’offre, la preuve et l’étape suivante, et les détails plus bas. Il en va de même pour un message à un journaliste : les relations presse ne sont pas mon métier, et en essayant à peine, j’ai obtenu dans le magazine Match un article sur une personne de mon entourage, coach sportif de profession. J’y vois l’effet des réflexes de rédaction et de ciblage acquis en cold emailing.

## Étape 6 : vérifier chaque fait, puis montrer le texte au client

Une phrase peut sonner parfaitement humaine et rester fausse. Avant la mise en ligne, vérifiez chaque chiffre, prix, zone, horaire, garantie et nom dans le brief ou auprès du client.

Google dit désormais la même chose. En octobre 2026, il a mis à jour ses [consignes sur les contenus générés par IA](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) pour y qualifier de « critique » (critical, dans la version anglaise) la vérification et la relecture manuelles de tout contenu généré par IA avant publication. Ses conseils sur l’exactitude visent aussi les métadonnées : balise title, meta description et texte alternatif des images.

{{< callout type="warning" >}}Cherchez **[À CONFIRMER]** dans la page avant la mise en ligne. Chaque mention devient un fait confirmé ou disparaît, avec la phrase qui l’entoure si besoin.{{< /callout >}}

Je présente ensuite le site au client et j’apporte les modifications qu’il demande. Le client est le dernier vérificateur : lui seul sait si l’entreprise répond vraiment au téléphone le samedi.

## Outils pour « humaniser » un texte, détecteurs et Google : ce qui compte

En cherchant ce sujet, vous tomberez sur des outils pour « humaniser » un texte IA, qui le réécrivent pour que les détecteurs le jugent humain. Ils règlent le mauvais problème.

- **Les détecteurs sont de mauvais arbitres.** OpenAI a retiré son propre détecteur de textes générés par IA en juillet 2023, en raison de son faible taux de précision. Dans les tests d’OpenAI au lancement, il identifiait correctement 26 % des textes écrits par IA et classait à tort 9 % des textes humains parmi les textes générés.
- **Google juge la page, pas l’outil.** Un contenu rédigé avec l’IA doit respecter les mêmes règles que les autres, et générer de nombreuses pages avec l’IA sans apporter de valeur aux utilisateurs peut enfreindre ses règles sur le spam, qui visent l’utilisation abusive de contenus à grande échelle (« scaled content abuse »).
- **Vos prospects sont le seul test qui rapporte.** Personne ne passe une page de services dans un détecteur avant d’appeler. Un tel outil change des mots ; il n’ajoute ni votre zone, ni votre garantie, ni votre façon de parler aux clients.

Les mêmes réflexes rendent une page digne d’être citée par ChatGPT, Gemini ou Perplexity : des réponses claires et des faits que personne d’autre n’a. C’est le sujet de mon article pour {{< a key="write-content-for-ai-search" >}}être cité par les IA{{< /a >}}.

## Avant de publier : ma liste de contrôle, et quand passer la main

1. Le brief contient l’offre, la zone, les clients préférés, les preuves, l’action visée et les mots de vos clients, vérifiés à la source.
2. 3 à 5 exemples du ton voulu sont placés dans des balises `<example>`, sans données personnelles.
3. Le prompt donne un rôle et la raison de chaque consigne, formulée comme ce qu’il faut faire.
4. Chaque section a été rédigée à part, avec plusieurs versions des phrases clés.
5. Le brouillon a été lu à voix haute, a passé le test du remplacement et perdu les tics du tableau ci-dessus.
6. Chaque fait est vérifié, il ne reste aucun [À CONFIRMER], et le client a validé la page.

La même méthode vaut pour les articles de blog : mon guide de {{< a key="write-seo-blog-posts" >}}rédaction SEO{{< /a >}} ajoute ce qui leur est propre. Et si vous préférez consacrer ce temps à votre entreprise, la recherche, la rédaction et la relecture font partie de mes {{< a page="/services/websites" >}}projets de sites web{{< /a >}}.
