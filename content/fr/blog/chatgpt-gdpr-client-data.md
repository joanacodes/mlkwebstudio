---
title: "ChatGPT et RGPD : quelles données clients pouvez-vous confier à une IA ?"
seo_title: "ChatGPT et RGPD : quelles données clients confier à l’IA ?"
description: "ChatGPT et RGPD : quelles données clients confier à une IA, quelle offre et quels réglages choisir, et comment anonymiser un texte avant de le coller."
slug: "chatgpt-rgpd-donnees-clients"
translationKey: "chatgpt-gdpr-client-data"
date: 2026-10-17T09:10:00+02:00
lastmod: 2026-10-17T09:10:00+02:00
category: "ai-automation"
article_type: "guide"
keywords: ["ChatGPT RGPD", "ChatGPT données personnelles", "ChatGPT conforme RGPD", "IA générative RGPD", "données clients IA", "ChatGPT entreprise confidentialité"]
summary: "Au regard du RGPD, un texte anonymisé peut aller dans n’importe quelle offre de ChatGPT, entraînement désactivé dans les Contrôles des données. Les noms, emails et téléphones de vos clients relèvent d’une offre professionnelle (ChatGPT Business ou Enterprise) ou de l’API, qui prévoient un contrat de sous-traitance (DPA) et n’utilisent pas vos contenus pour l’entraînement par défaut ; même là, ne transmettez que ce que la tâche exige. Gardez les données de santé, numéros d’identité, coordonnées bancaires et mots de passe hors de tout assistant IA."
cover: "chatgpt-gdpr-client-data"
cover_alt: "Un bouclier coché au-dessus des sigles GDPR et RGPD, derrière une vitre cannelée"
related: ["claude-vs-chatgpt", "cold-email-gdpr-uk-france", "zapier-vs-make-vs-n8n", "openai-api-tutorial", "bespoke-crm-internal-app"]
services: ["automation"]
faq:
  - q: "Quelle société est responsable de mes données dans ChatGPT ?"
    a: "Pour un compte personnel, c’est l’éditeur : OpenAI Ireland Limited, à Dublin, pour les utilisateurs de l’Espace économique européen et de la Suisse depuis le 15 février 2024, et Anthropic Ireland, Limited pour Claude. Vous pouvez toujours adresser une plainte à la CNIL. Sur une offre professionnelle ou via l’API, vous restez responsable du traitement des données de vos clients, et l’éditeur agit comme votre sous-traitant."
  - q: "Faut-il mentionner ChatGPT dans ma politique de confidentialité ?"
    a: "Si vous transmettez des données personnelles de clients à un fournisseur d’IA, oui. Votre politique de confidentialité doit indiquer les destinataires des données, ou leurs catégories (par exemple « prestataires de services d’IA »), et préciser si les données sortent de l’Union européenne, avec quelles garanties."
  - q: "J’ai collé des données clients dans ChatGPT par erreur : que faire ?"
    a: "Supprimez la conversation et vérifiez si l’entraînement était activé à ce moment-là. Une divulgation non autorisée peut constituer une violation de données : inscrivez-la dans votre registre des violations et notifiez-la à la CNIL dans les meilleurs délais, si possible sous 72 heures, sauf si elle est peu susceptible d’engendrer un risque pour les personnes concernées ([téléservice de la CNIL](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles))."
  - q: "Puis-je envoyer un contrat ou une facture client à ChatGPT ?"
    a: "Retirez d’abord ce qui identifie des personnes (noms, signatures, adresses, RIB), ou utilisez une offre professionnelle couverte par un contrat de sous-traitance. Vérifiez aussi le contrat lui-même : une clause de confidentialité s’applique quoi que permette le RGPD."
---

Coller l’email d’un client dans ChatGPT prend deux secondes. Au regard du RGPD, vous venez de transmettre ses données personnelles à une autre entreprise, et pour savoir si c’est acceptable, trois choses comptent : ce que vous collez, dans quelle offre, et avec quels réglages. C’est le côté pratique de la question ChatGPT et RGPD, et ce guide y répond pour une TPE ou une PME.

ChatGPT sert d’exemple principal, mais le même raisonnement vaut pour Claude, l’assistant que j’utilise (j’explique pourquoi dans {{< a key="claude-vs-chatgpt" >}}Claude ou ChatGPT{{< /a >}}), et pour tous les autres. Si vous cherchez encore la place de l’IA dans votre entreprise, commencez par mon guide de l’{{< a key="ai-small-business-guide" >}}IA pour TPE et PME{{< /a >}}. Cet article répond à une seule question : ce que vous pouvez lui confier sans risque.

{{< callout type="note" >}}Cet article donne des informations générales, pas un avis juridique. Les éditeurs modifient souvent leurs offres et leurs conditions : vérifiez sur les pages officielles citées avant de vous appuyer sur un détail.{{< /callout >}}

## ChatGPT est-il conforme au RGPD ? La vraie question à se poser

Aucun outil n’est conforme au RGPD à lui seul. Le règlement fait peser les obligations sur celui qui décide pourquoi et comment des données personnelles sont utilisées : le **responsable du traitement**. Pour les données de vos clients, c’est vous, quel que soit l’outil que vous ouvrez.

Une donnée personnelle, c’est toute information se rapportant à une personne physique identifiée ou identifiable. Un nom, une adresse email ou un numéro de téléphone, bien sûr, mais aussi une description assez précise pour désigner une seule personne : « la gérante de la seule boulangerie du village » identifie quelqu’un aussi sûrement qu’un nom.

Deux conséquences pour une petite entreprise :

- **Les données d’une société ne sont pas des données personnelles.** Raison sociale, siège social, adresse générique contact@ : le RGPD ne s’applique pas. Les coordonnées professionnelles d’un entrepreneur individuel ou d’un micro-entrepreneur, en revanche, sont des données personnelles, car l’entreprise, c’est la personne. Une adresse prenom.nom@entreprise.fr en est une aussi.
- **Coller, c’est traiter.** Quand vous collez les coordonnées d’un client dans un assistant, vous les transmettez à l’entreprise qui le fait fonctionner. Le RGPD demande alors sur quelle base, avec quel contrat, dans quel but, et ce qu’elles deviennent ensuite.

La bonne question n’est donc pas de savoir si ChatGPT est conforme, mais si votre usage l’est. La réponse commence par l’offre choisie.

## Offres personnelles ou professionnelles : c’est le contrat qui compte

C’est l’offre qui détermine le rôle de l’éditeur, et le prix n’y change rien : ChatGPT Pro est l’offre personnelle la plus chère d’OpenAI, et elle reste une offre personnelle.

| | Offres personnelles | Offres professionnelles et API |
|---|---|---|
| ChatGPT | Free, Go, Plus, Pro | Business, Enterprise, API OpenAI |
| Claude | Free, Pro, Max | Team, Enterprise, API Claude |
| Contrat avec votre entreprise | Conditions grand public uniquement | Un contrat de sous-traitance (DPA) |
| Rôle de l’éditeur | Responsable du traitement, selon sa propre politique de confidentialité | Votre sous-traitant, qui agit sur vos instructions |
| Entraînement sur vos contenus | ChatGPT : activé tant que vous ne le désactivez pas. Claude : à vous de choisir | Non, par défaut |

Sur une offre personnelle, l’éditeur traite vos conversations selon sa propre politique de confidentialité. Aucun contrat de sous-traitance ne lie votre entreprise à OpenAI ou à Anthropic : les données d’un client collées là partent chez un tiers qui n’est pas votre sous-traitant. C’est difficile à justifier au regard du RGPD, quels que soient vos réglages.

Sur une offre professionnelle ou via une API, l’éditeur devient votre sous-traitant : il traite les données pour votre compte, dans le cadre du contrat écrit qu’exige l’article 28 du RGPD. OpenAI propose un **contrat de sous-traitance** (DPA, pour Data Processing Addendum) aux clients de ChatGPT Business, de ChatGPT Enterprise et de sa plateforme API, à signer via le formulaire DPA indiqué sur sa [page « Enterprise privacy »](https://openai.com/enterprise-privacy/) (en anglais). Chez Anthropic, le DPA est intégré aux conditions commerciales (Commercial Terms), qui couvrent Claude Team, Enterprise et l’API, et qui précisent qu’Anthropic ne peut pas entraîner ses modèles sur les contenus de ses clients.

Si vous travaillez sans équipe, une offre d’équipe peut sembler disproportionnée : Claude Team, par exemple, se vend à partir de deux utilisateurs. Pour des tâches ponctuelles, anonymiser avant de coller (voir plus bas) est la réponse pratique. Pour un travail régulier sur des données clients, l’offre professionnelle ou l’API sont les voies qui s’accompagnent d’un contrat de sous-traitance.

## Les données clients que vous pouvez confier à ChatGPT, et celles à garder pour vous

Classez ce que vous voulez coller en trois groupes avant d’ouvrir l’assistant.

### Sans problème sur toutes les offres, entraînement désactivé

- Vos propres brouillons, offres, tarifs et procédures.
- Les informations publiques sur des entreprises.
- Un texte correctement anonymisé.
- Les questions générales, par exemple comment répondre à un client qui conteste une facture.

Quand je rédige le site d’un client avec l’IA, la matière porte sur l’entreprise : ce qu’elle propose, les clients avec qui elle préfère travailler, les mots-clés issus de ma recherche SEO. Ce sont des informations d’entreprise, pas des données personnelles, tant qu’elles ne décrivent pas une personne nommée et que l’entreprise n’est pas un entrepreneur individuel.

### Seulement sur une offre professionnelle ou via l’API, et seulement le nécessaire

- Les noms, adresses email professionnelles et numéros de téléphone de vos clients et prospects.
- L’email d’un client auquel vous devez répondre, ou un compte rendu de réunion qui nomme des personnes.
- Un fichier de prospects à personnaliser, qui obéit en plus à ses propres règles : voir mon article {{< a key="cold-email-gdpr-uk-france" >}}cold emailing et RGPD{{< /a >}}.

**Seulement le nécessaire**, c’est le principe de minimisation des données du RGPD appliqué au quotidien. Pour rédiger une réponse, l’assistant a besoin de la question, pas de l’adresse du client ni de son historique de commandes.

### À garder hors de tout assistant

Mon conseil pour une petite entreprise, quelle que soit l’offre :

- Les données sensibles : santé, origine raciale ou ethnique, convictions religieuses ou philosophiques, opinions politiques, appartenance syndicale, vie sexuelle ou orientation sexuelle, données génétiques et biométriques. Les condamnations et infractions aussi.
- Les numéros d’identification (numéro de sécurité sociale, de passeport ou de carte d’identité), les RIB et les numéros de carte bancaire.
- Les mots de passe, clés d’API et codes d’accès.
- Les données d’enfants.
- Les exports complets de votre fichier clients ou de votre CRM.
- Tout ce qui relève d’un accord de confidentialité ou d’un secret professionnel : une question de contrat autant que de RGPD.

Les données sensibles se glissent dans des messages ordinaires. Une cliente qui écrit que les travaux doivent attendre la fin de son opération vient de vous confier une donnée de santé.

## Comment anonymiser des données clients avant de les coller

Des données anonymisées sortent du champ du RGPD, mais seulement si plus personne ne peut identifier la personne par des moyens raisonnablement susceptibles d’être utilisés. Remplacer les noms par des codes en gardant la table de correspondance, c’est de la pseudonymisation, et **des données pseudonymisées restent des données personnelles**.

1. **Remplacez les noms par des rôles** : [CLIENT], [ARCHITECTE], [FOURNISSEUR].
2. **Supprimez les coordonnées** : adresses email, numéros de téléphone, adresses postales et signature.
3. **Coupez l’historique cité** en bas de l’email : il contient souvent plus de noms que le message lui-même.
4. **Généralisez ce qui pourrait désigner quelqu’un** : une ville plutôt qu’une rue, « un restaurant » plutôt que son nom, un mois plutôt qu’une date.
5. **Retirez les références** : numéros de facture, de commande, de compte, de contrat.
6. **Relisez avec les yeux d’un inconnu.** Si quelqu’un qui connaît le quartier pouvait encore reconnaître la personne, généralisez davantage.

Voici un exemple inventé, avant et après :

```text
Avant :
Bonjour, c'est Claire Martin (06 39 98 12 34). Nous avons déménagé au
14 rue des Lilas, à Nantes, et avec l'opération du dos de mon mari, la
cuisine devra attendre mai. Pouvez-vous décaler la pose et garder notre
acompte ?

Après :
Bonjour, c'est [CLIENTE]. Nous avons déménagé, et pour des raisons
personnelles, la cuisine devra attendre [MOIS]. Pouvez-vous décaler la
pose et garder notre acompte ?
```

La seconde version suffit à l’assistant pour rédiger une réponse aimable sur la nouvelle date. L’adresse, le numéro de téléphone et l’opération du mari, une donnée de santé concernant un tiers, n’avaient aucune raison de quitter votre boîte mail. Remettez les détails dans votre propre email, une fois que l’assistant a fait sa part.

## Les réglages à faire avant de coller quoi que ce soit

### Dans ChatGPT

- **L’entraînement.** Sur un compte personnel, ouvrez **Paramètres > Contrôles des données** et désactivez **Améliorer le modèle pour tout le monde**. Le choix vaut pour tout le compte, sur tous vos appareils, et vos conversations restent dans l’historique ([FAQ d’OpenAI sur les contrôles des données](https://help.openai.com/fr-ca/articles/7730893-data-controls-faq)).
- **Les conversations temporaires** ne servent pas à l’entraînement et sont supprimées après 30 jours : utilisez-les pour les tâches ponctuelles.
- **La mémoire.** ChatGPT peut retenir des informations d’une conversation à l’autre. Vérifiez ce qu’il a enregistré et supprimez tout ce qui concerne un client.

### Dans Claude

- Depuis le 28 août 2025, les utilisateurs de Free, Pro et Max choisissent dans leurs **paramètres de confidentialité** (claude.ai/settings/data-privacy-controls) si leurs conversations peuvent servir à entraîner les modèles d’Anthropic. Si vous l’acceptez, les données sont conservées jusqu’à cinq ans ; sinon, 30 jours ([annonce d’Anthropic](https://www.anthropic.com/news/updates-to-our-consumer-terms), en anglais).
- Les conversations incognito ne servent pas à l’entraînement, même si vous l’avez accepté, et une conversation supprimée ne sert pas aux entraînements futurs.

{{< callout type="warning" >}}Désactiver l’entraînement ne transforme pas un compte personnel en compte professionnel. Cela change ce que l’éditeur fait de vos conversations, pas le contrat qui vous lie à lui : **les trois groupes ci-dessus restent valables**.{{< /callout >}}

## Hallucinations : le principe d’exactitude vaut aussi pour l’IA

Le RGPD vous demande de tenir exactes les données personnelles que vous détenez. Un assistant qui invente un détail sur une personne crée une donnée inexacte dès que vous la copiez dans un dossier client, un CRM ou un email.

Dans mon travail, ChatGPT a tendance à halluciner un peu trop, alors que Claude, et Fable 5.1 en particulier, s’est montré extrêmement fiable. C’est mon expérience sur mes propres tâches, pas un banc d’essai, et aucun assistant n’est infaillible. Trois habitudes gardent les détails inventés hors de vos fichiers :

1. Ne demandez jamais à un assistant ce qu’il sait d’une personne nommée pour enregistrer sa réponse.
2. Demandez-lui de travailler uniquement à partir des documents que vous lui fournissez.
3. Vérifiez chaque nom, date et montant à la source avant qu’il n’entre dans un fichier ou un email.

## Automatisations et API : les mêmes règles, avec plus de données

Les automatisations font monter les enjeux, car elles traitent des données clients sans que personne ne les colle. Quand j’ai apporté à {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}} plus de prospects que l’équipe ne pouvait en gérer, le client m’a demandé une application interne pour tout voir clairement et ne plus jamais oublier de rappeler un prospect. Elle gère les prospects, les chantiers, la communication avec les salariés, le calendrier et l’analyse comptable, avec des intégrations d’IA et de téléphonie ({{< a key="bespoke-crm-internal-app" >}}l’histoire de ce CRM sur mesure{{< /a >}}). Pour une automatisation de ce type, j’ai besoin d’accéder à la boîte mail du client, par exemple.

Une fois l’automatisation en route, chaque email, formulaire ou note d’appel qu’elle traite passe par chaque service de la chaîne : la plateforme d’automatisation, l’API d’IA, le CRM. Chacun est un sous-traitant ; pour chacun :

- vérifiez qu’il propose un contrat de sous-traitance (DPA), et acceptez-le ou signez-le ;
- vérifiez où il stocke les données, et comment les transferts hors de l’Union européenne sont encadrés (en général par une décision d’adéquation ou des clauses contractuelles types) ;
- vérifiez ce qu’il fait de vos contenus : les conditions commerciales d’Anthropic excluent l’entraînement, et l’API d’OpenAI ne s’en sert pas pour entraîner ses modèles, sauf si vous l’acceptez, mais peut conserver les requêtes et les réponses jusqu’à 30 jours pour détecter les abus (son API Responses stocke aussi les réponses, sauf si vous réglez le paramètre `store` sur `false`) ;
- inscrivez-le dans votre registre des activités de traitement.

n8n peut aussi être auto-hébergé, sur un serveur que vous contrôlez, ce qui retire une entreprise de la chaîne. Mon comparatif {{< a key="zapier-vs-make-vs-n8n" >}}n8n vs Make vs Zapier{{< /a >}} aborde aussi l’auto-hébergement et le RGPD, et mes tutoriels sur l’{{< a key="openai-api-tutorial" >}}API ChatGPT (OpenAI){{< /a >}} et l’{{< a key="claude-api-tutorial" >}}API Claude{{< /a >}} détaillent les premiers pas avec chacune.

## Ce qu’attendent la CNIL et le règlement européen sur l’IA

En France, l’autorité compétente est la CNIL, qui a publié ses propres recommandations sur l’intelligence artificielle. Deux obligations comptent le plus pour une petite entreprise qui utilise l’IA.

**L’analyse d’impact relative à la protection des données (AIPD)** est obligatoire avant un traitement susceptible d’engendrer un risque élevé pour les personnes. Alimenter régulièrement un outil d’IA avec votre fichier clients, ou avec des données sensibles, fait partie des projets qui en demandent probablement une. La CNIL publie la liste des traitements concernés et un logiciel gratuit, PIA, pour la réaliser.

**La maîtrise de l’IA** est la seconde, au titre du règlement européen sur l’IA (AI Act), qui s’applique directement en France. Son article 4, applicable depuis le 2 février 2025, demande aux entreprises qui utilisent des systèmes d’IA de prendre des mesures pour que leur personnel, et toute personne qui les utilise pour leur compte, en ait un niveau de maîtrise suffisant. L’omnibus numérique sur l’IA, le règlement (UE) 2026/1744 en vigueur depuis le 27 juillet 2026, a assoupli cette formulation, qui parle désormais de mesures pour favoriser cette maîtrise, sans supprimer l’obligation. Pour une petite équipe, une règle d’une page sur ce qui peut être collé ou non, expliquée à chaque personne qui utilise un assistant, est un bon point de départ. Si vous avez aussi des clients au Royaume-Uni, c’est l’UK GDPR et l’autorité britannique, l’ICO, qui font référence là-bas.

## Avant de coller des données clients : la checklist de votre équipe

1. **Choisissez l’offre** : personnelle pour les textes anonymisés uniquement, professionnelle ou API pour les données clients.
2. **Mettez en place le DPA** avec chaque éditeur (chez OpenAI, via son formulaire DPA), et gardez-en une copie.
3. **Désactivez l’entraînement** sur chaque compte personnel utilisé pour le travail.
4. **Écrivez les trois groupes sur une page** (partout, offre professionnelle uniquement, jamais) et partagez-la avec chaque personne qui utilise un assistant.
5. **Anonymisez par défaut**, même sur une offre professionnelle : ce que l’assistant ne reçoit pas ne peut pas fuiter.
6. **Vérifiez chaque information sur une personne** avant qu’elle n’entre dans un fichier ou un email.
7. **Inscrivez chaque outil d’IA et chaque automatisation** dans votre registre des activités de traitement.
8. **Faites le point une fois par an** : les offres, les réglages et les conditions changent.

Si vous travaillez dans la santé, le droit ou la finance, avec des données d’enfants, ou si vous comptez brancher tout votre fichier clients sur une automatisation, consultez un spécialiste de la protection des données, ou votre DPO si vous en avez un, avant de commencer. C’est le conseil que je donnerais à n’importe quel client : je construis des sites et des automatisations, mais pour le volet juridique, c’est un spécialiste qu’il vous faut.
