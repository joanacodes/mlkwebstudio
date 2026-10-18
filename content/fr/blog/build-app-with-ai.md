---
title: "Créer une application avec l’IA sans être développeur : ce qui est réaliste"
seo_title: "Créer une application avec l’IA : ce qui est réaliste"
description: "Créer une application avec l’IA sans savoir coder : ce que vous pouvez faire avec Claude, Lovable ou Bolt, et où cela s’arrête (données, paiements, sécurité)."
slug: "creer-application-avec-ia"
translationKey: "build-app-with-ai"
date: 2026-10-17T09:05:00+02:00
lastmod: 2026-10-17T09:05:00+02:00
category: "ai-automation"
article_type: "guide"
keywords: ["créer une application avec l’IA", "créer une application sans coder", "vibe coding", "créer une appli avec l’IA", "artefacts Claude", "Claude Code"]
summary: "Vous pouvez créer une application avec l’IA sans être développeur si elle reste un petit outil pour vous ou votre équipe : calculateur de devis, checklist ou tableau de bord, faits avec les artefacts de Claude ou un générateur comme Lovable ou Bolt. Faites appel à un développeur dès qu’elle stocke des données de clients, leur ouvre des comptes, encaisse des paiements ou doit tourner chaque jour : l’IA écrit le code, mais la sécurité et la maintenance restent à votre charge."
cover: "build-app-with-ai"
cover_alt: "Une personne à son bureau vue à travers un verre cannelé, avec une grille de plan, une cible et les mots Vibe coding"
related: ["bespoke-crm-internal-app", "build-website-with-ai", "claude-api-tutorial", "chatgpt-gdpr-client-data", "spaceship-hosting"]
services: ["automation"]
faq:
  - q: "Le vibe coding, est-ce la même chose que le no-code ?"
    a: "Non. Les outils no-code comme Bubble, Glide ou Softr vous font assembler une application à partir de blocs tout faits, à l’intérieur de leur plateforme. Avec le vibe coding, une IA écrit du vrai code à partir de votre description : plus de liberté, mais aussi les bugs et la maintenance de ce code."
  - q: "Peut-on utiliser ChatGPT plutôt que Claude pour créer une application ?"
    a: "Oui. Tout assistant IA performant peut écrire un outil d’une seule page à partir de la même description. J’utilise Claude parce que, dans mon travail, ChatGPT a tendance à inventer un peu trop souvent, alors que Claude, et son modèle Fable 5.1 en particulier, s’est montré extrêmement fiable."
  - q: "Peut-on transférer une application Lovable ou Bolt vers son propre hébergement ?"
    a: "En général oui, si le générateur permet d’exporter le code ou de le relier à GitHub. Le code est la partie facile : la base de données et les comptes utilisateurs doivent aussi être transférés ou reconnectés, alors prévoyez l’aide d’un développeur plutôt qu’un transfert en un clic."
  - q: "Peut-on créer une application mobile avec l’IA ?"
    a: "La plupart des générateurs créent des applications web, qui s’ouvrent dans le navigateur du téléphone et peuvent s’ajouter à l’écran d’accueil comme une application. Publier sur l’App Store ou Google Play ajoute des comptes développeur, la validation des boutiques et des frais : cette partie-là est un travail de développeur."
---

Vous pouvez créer une application avec l’IA sans être développeur, à condition qu’elle reste petite : un outil pour vous ou votre équipe, sans données de clients, sans comptes clients et sans paiement. Un calculateur de devis, une checklist de visite de chantier ou un tableau de bord qui transforme un export de tableur en trois chiffres : tout cela se décrit en français courant.

Au-delà, l’IA écrit toujours le code, mais quelqu’un doit répondre de ce que l’application fait des données et de l’argent des autres. Ce quelqu’un, c’est vous, sauf si vous passez la main.

Je développe des logiciels pour mon propre usage, pas pour les vendre : je sais ce que c’est d’avoir besoin d’un outil et de le construire soi-même, et la satisfaction que cela procure. Depuis l’arrivée de l’IA, mes délais de livraison ont aussi fondu, ce qui me laisse parfois le temps de proposer des solutions plus complètes à mes clients. Ce guide montre ce qu’un chef d’entreprise peut réaliser seul en octobre 2026, avec quels outils, et quand s’arrêter. Il complète mon guide {{< a key="ai-small-business-guide" >}}IA pour TPE et PME{{< /a >}}, consacré aux autres usages qui font vraiment gagner du temps.

## Ce que recouvre le « vibe coding » en 2026

Le vibe coding consiste à créer un logiciel en décrivant ce que vous voulez avec vos mots, à laisser une IA écrire le code, puis à corriger le résultat en demandant des modifications plutôt qu’en lisant le code. Trois familles d’outils le permettent, et elles ne sont pas interchangeables.

- **Un assistant qui construit dans la conversation.** Les artefacts de Claude transforment une description en petit outil interactif, que vous ouvrez dans Claude ; ils sont inclus dans toutes les formules, la gratuite comprise. Un artefact peut même appeler Claude : d’après le centre d’aide d’Anthropic, il n’a alors besoin d’aucune clé API et ne coûte rien à son créateur, car l’usage de chaque personne est décompté des limites de sa propre formule. Avec une formule payante, sur le web ou l’application de bureau, un artefact peut aussi conserver jusqu’à 20 Mo de texte d’une session à l’autre, privé pour chaque personne ou partagé par tous ceux qui l’ouvrent.
- **Les générateurs d’applications.** Lovable, Bolt, v0 et Base44, la start-up rachetée par Wix en juin 2025, produisent une application web complète à partir d’une conversation, souvent avec une base de données et des comptes utilisateurs, et la mettent en ligne pour vous. Lovable, Bolt et v0 produisent surtout des projets React ou Next.js, qui demandent une étape de compilation (le build) avant de pouvoir tourner ailleurs.
- **Un agent de code.** Claude Code, inclus dans la formule Claude Pro, travaille directement sur les fichiers d’un projet. D’après Anthropic, vous décrivez ce que vous voulez, et il planifie, écrit le code, lance les tests et ouvre des demandes de fusion (pull requests). C’est celui des trois qui vous laisse le plus de contrôle, et le moins indulgent si les fichiers, les dossiers et le versionnage ne vous disent rien.

## Ce que vous pouvez créer sans développeur

Les outils qui fonctionnent sans développeur ont quatre points communs : un utilisateur ou une poignée, des données qui vous appartiennent plutôt qu’à vos clients, aucun paiement, et aucune conséquence grave si l’outil s’arrête une journée. Par exemple :

- **Un calculateur de devis** construit sur votre grille tarifaire : surface, options, minimum de facturation, TVA, et un bouton qui copie le résultat dans un e-mail.
- **Une checklist** pour une visite de chantier, l’arrivée d’un nouveau client ou la clôture du mois, à cocher sur votre téléphone.
- **Un petit tableau de bord** : vous collez un export de votre logiciel de comptabilité ou de réservation, il affiche les totaux du mois et un graphique.
- **Un outil de texte** qui transforme vos notes en e-mail de relance mis en forme ou en fiche d’intervention.
- **Un planning** des interventions de la semaine ou des roulements de l’équipe.

Dans chaque cas, une erreur vous coûte quelques minutes, pas un client : c’est le bon terrain pour apprendre. Méfiez-vous aussi du dernier générateur à la mode, qui fait courir après l’outil plutôt qu’après le problème. Partez d’une tâche que vous faites déjà chaque semaine, et construisez pour celle-là.

## Quel outil d’IA choisir pour quel projet

| | Artefacts Claude | Lovable, Bolt, v0, Base44 | Claude Code |
|---|---|---|---|
| Comment vous travaillez | Vous décrivez l’outil dans une conversation Claude | Vous décrivez l’application dans la conversation du générateur | Vous décrivez les changements, il modifie les fichiers du projet |
| Où tourne l’application | Dans Claude | Chez le générateur, à une adresse web | Là où vous hébergez les fichiers |
| Qui peut l’ouvrir | Les personnes qui ont un compte Claude | Toute personne qui a l’adresse | Tout le monde, une fois l’outil publié |
| Ce que cela coûte | Inclus dans toutes les formules Claude | En général un quota gratuit, puis un abonnement mensuel décompté en crédits ou en tokens | Inclus dans Claude Pro |
| Idéal pour | Un outil pour vous ou votre équipe | Un prototype à montrer à un associé ou à un développeur | Un petit projet dont vous voulez garder le code |

Claude Pro coûte 20 $ par mois hors taxes aux États-Unis à la date de rédaction (octobre 2026), ou 17 $ par mois en paiement annuel, d’après la [page de tarifs de Claude](https://claude.com/pricing). Anthropic facture en monnaie locale quand c’est possible, mais sa page de tarifs n’affiche aucun prix en euros : vérifiez le montant au moment de payer. Les générateurs changent régulièrement leurs formules et décomptent l’usage : un projet qui demande beaucoup d’allers-retours coûte plus que le prix affiché, alors lisez leur page de tarifs avant de commencer.

Mon conseil pour un premier projet : commencez par un artefact. Passez à un générateur quand vous devez montrer un prototype qui fonctionne à quelqu’un d’autre, et à Claude Code quand vous voulez posséder chaque fichier.

## Créer une application avec l’IA : un premier projet en six étapes

Prenons un peintre en bâtiment qui chiffre chaque chantier à la main. La méthode est la même pour n’importe quel petit outil.

1. **Décrivez le problème en deux phrases** : qui utilise l’outil, ce qui entre, ce qui sort. « Je chiffre mes chantiers de peinture sur place à partir de la surface des murs et du nombre de couches, et je veux le total TTC sur mon téléphone. »
2. **Rassemblez les vrais chiffres** : votre grille tarifaire, votre minimum de facturation, vos taux de TVA et vos règles d’arrondi. Si vous ne donnez pas vos prix à l’IA, elle en inventera de vraisemblables sans sourciller, et elle ne devinera pas que la peinture d’un logement de plus de deux ans se facture en général à 10 % de TVA, contre 20 % pour des bureaux.
3. **Demandez une seule page, sans base de données ni connexion.** Plus la demande est petite, moins un bug a d’endroits où se cacher. Dans Claude, collez la demande dans n’importe quelle conversation. Les artefacts exigent l’option **Exécution de code et création de fichiers**, dans **Paramètres > Capacités**, activée par défaut sur les formules Free, Pro et Max.

```text
Crée un calculateur de devis sur une seule page HTML pour un peintre en bâtiment.
Données d’entrée : surface des murs en m², nombre de couches (1 ou 2), plafond inclus (oui/non),
logement achevé depuis plus de deux ans (oui/non).
Tarifs : murs [votre prix] le m² par couche, plafonds [votre prix] le m²,
minimum de facturation [votre minimum].
Affiche le prix HT, la TVA (10 % pour un logement de plus de deux ans, 20 % sinon)
et le total TTC, arrondi à l’euro.
Ajoute un bouton « Copier le texte » avec un court résumé à coller dans un e-mail.
En français. Pas de connexion, pas de base de données, pas de service externe.
```

4. **Testez-le sur trois chantiers que vous avez déjà chiffrés.** Si l’outil affiche 1 180 € là où votre devis disait 1 250 €, donnez-lui les deux montants et demandez-lui d’expliquer son calcul avant de modifier quoi que ce soit.
5. **Demandez une modification à la fois**, et gardez une copie de chaque version qui fonctionne, avec la date dans le nom du fichier.
6. **Décidez où l’outil sera hébergé et qui l’entretiendra** avant que quelqu’un d’autre en dépende.

{{< callout type="tip" >}}Demandez à l’IA d’afficher en bas de l’outil la liste des hypothèses qu’elle a retenues : arrondi, TVA, minimum de facturation. Une hypothèse fausse se repère bien plus vite dans une liste que dans un total.{{< /callout >}}

## Où héberger votre application, et qui pourra l’ouvrir

Ce choix compte plus que l’outil.

**Dans Claude.** Un artefact est d’abord privé, et le bouton **Partager** permet de choisir qui y a accès. La page d’aide [Partager des artefacts](https://support.claude.com/fr/articles/9547008) est claire sur deux points. « Tout le monde a besoin d’un compte Claude », même avec le lien. Et un artefact qui utilise Claude ou vos applications connectées ne peut pas utiliser l’option « Toute personne ayant le lien » : vous invitez alors des personnes par e-mail ou, avec une formule Team ou Enterprise, vous le partagez avec votre organisation. Un artefact convient donc à un outil d’équipe, pas à vos clients.

**Sur votre site.** Un outil d’une seule page sans serveur, comme le calculateur ci-dessus, n’est qu’un fichier. Vous pouvez le mettre sur votre site ou sur un hébergement simple comme GitHub Pages ou Spaceship. Mon tutoriel pour {{< a key="build-website-with-ai" >}}créer un site internet avec l’IA{{< /a >}} explique la publication sur GitHub Pages avec votre nom de domaine, et mon guide de l’{{< a key="spaceship-hosting" >}}hébergement Spaceship{{< /a >}} indique quelle offre convient à quel site. Les règles de GitHub réservent Pages aux sites, pas aux boutiques en ligne ni aux logiciels vendus en abonnement.

**Chez le générateur.** C’est le moyen le plus rapide de mettre l’application en ligne, et celui qui vous lie le plus à son abonnement.

L’application de devis et de commande que j’ai intégrée au {{< a page="/projects/edenel-nettoyage" >}}site d’Edenel Nettoyage{{< /a >}} montre jusqu’où peut aller une page sans serveur dédié. Un simulateur chiffre chaque prestation d’après la même grille que la page Tarifs, devis et factures sont générés en PDF dans le navigateur, et l’historique des commandes reste sur l’appareil du client. C’était un projet du studio, pas une expérience de week-end, mais le principe vaut pour vous : **moins votre application garde de données sur un serveur, moins il y a à protéger**.

## Où s’arrête l’application faite maison : données, connexions, paiements, maintenance

Franchir l’une de ces limites ne vous oblige pas à arrêter. Mais une erreur ne vous coûte alors plus quelques minutes : elle touche quelqu’un d’autre.

### Les données personnelles de vos clients

Dès que l’application conserve les noms, numéros de téléphone ou adresses de vos clients, ou toute autre information qui permet d’identifier une personne, le RGPD s’applique à ces données. C’est vous qui décidez ce que vous collectez, qui peut le lire, où c’est stocké et quand c’est effacé. En cas de fuite présentant un risque pour les personnes, vous devez [notifier la violation à la CNIL](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles) « dans les meilleurs délais et, si possible, 72 heures au plus tard » après en avoir pris connaissance, et toute violation se consigne dans un registre interne.

Deux pièges guettent les applications faites maison. Le stockage partagé d’un artefact montre les mêmes données à tous ceux qui l’ouvrent : n’y mettez pas de données clients. Et des données de test collées dans une conversation avec une IA restent des données clients : mon guide {{< a key="chatgpt-gdpr-client-data" >}}ChatGPT et RGPD{{< /a >}} traite ce second point.

### Les connexions et la sécurité

Les comptes utilisateurs et les bases de données, c’est là que les applications faites en vibe coding déraillent le plus visiblement. En 2025, un chercheur a analysé 1 645 applications de la vitrine publique de Lovable et en a trouvé 170 qui laissaient des inconnus lire des données comme des adresses e-mail, parce que les règles d’accès de leur base de données (la row level security) manquaient ou étaient trop faibles. L’affaire est enregistrée sous la référence [CVE-2025-48757](https://nvd.nist.gov/vuln/detail/CVE-2025-48757), et Lovable la conteste, au motif que chaque client est responsable de la protection des données de sa propre application. Quelle que soit l’issue de ce débat, la leçon pratique reste la même : avec des comptes ou une base de données, quelqu’un doit vérifier qui peut lire et modifier chaque table avant d’y mettre de vraies données, et rien ne garantit que le générateur l’a fait pour vous.

Les clés API sont l’autre fuite classique. Une application qui appelle un modèle d’IA a besoin d’une clé, et une clé placée dans une page web peut être lue par chaque visiteur : mon tutoriel {{< a key="claude-api-tutorial" >}}API Claude{{< /a >}} explique où la ranger. Un artefact qui appelle Claude évite le problème, puisqu’il n’a besoin d’aucune clé.

### Les paiements

Ne laissez jamais une IA écrire votre formulaire de paiement par carte. Les données de carte ont leur propre norme de sécurité (PCI DSS), et la page de paiement hébergée ou le lien de paiement d’un prestataire, Stripe ou PayPal par exemple, garde les numéros de carte chez lui, hors de votre application. Si votre outil doit encaisser, envoyez vos clients vers cette page.

### La maintenance

Une application n’est jamais terminée. Les navigateurs évoluent, les bibliothèques dont dépend le code sont mises à jour, un générateur change ses formules, et six mois plus tard plus personne ne sait pourquoi l’outil arrondit de cette façon. Je dis la même chose des sites offerts à un proche : un site n’est pas un cadeau unique, il s’accompagne d’une maintenance à vie. Une application que votre équipe utilise chaque jour a besoin d’une personne désignée, capable de la réparer un lundi matin.

{{< callout type="warning" >}}Si vous ne savez pas dire qui réparera l’application quand elle tombera en panne, elle n’est prête pour personne d’autre que vous.{{< /callout >}}

## Quand passer la main à un développeur : la checklist

Pour les outils de la première liste, vous n’avez besoin ni de moi ni d’un développeur : construisez-les, testez-les avec de vrais chiffres et gardez-en une copie. Faites appel à un développeur, ou au minimum faites relire le code, dès qu’un de ces points est vrai :

- Vos clients, et pas seulement vous et votre équipe, vont se connecter ou saisir leurs coordonnées.
- L’application stocke des données personnelles sur un serveur.
- Elle encaisse des paiements ou produit des documents qui ont une valeur juridique, comme des factures.
- Elle se connecte à votre messagerie, à votre téléphonie ou à votre comptabilité.
- La journée de votre équipe s’arrête quand l’application s’arrête.
- Elle tourne seule, selon un calendrier, sans que personne ne la surveille.
- Vous ne savez plus prévoir ce qu’une modification va casser.

L’application que j’ai développée pour Pilotech coche plusieurs cases de cette liste. J’avais apporté à l’entreprise plus de prospects que son équipe ne pouvait en traiter, et le client m’a demandé un outil pour tout voir clairement et ne jamais oublier de rappeler un prospect. Cette application sur mesure gère les prospects, les chantiers, la communication avec les salariés, l’agenda et les analyses comptables, avec de l’IA et la téléphonie intégrées ; une automatisation de ce type demande par exemple l’accès à la boîte mail du client. Je raconte ce projet dans mon article {{< a key="bespoke-crm-internal-app" >}}CRM sur mesure{{< /a >}}.

L’IA a rendu ce genre de projet plus rapide à livrer ; elle n’a pas supprimé le besoin de quelqu’un qui en réponde. Quand je développe une application pour un client, 30 % ou 50 % sont réglés à la commande et le solde à la livraison.
