---
title: "n8n vs Make vs Zapier : quel outil d’automatisation choisir pour une PME ?"
seo_title: "n8n vs Make vs Zapier : lequel choisir pour votre PME ?"
description: "n8n vs Make vs Zapier : prix d’octobre 2026, tâches, crédits et exécutions, étapes IA, RGPD et hébergement des données. Lequel choisir pour votre PME ?"
slug: "n8n-vs-make-vs-zapier"
translationKey: "zapier-vs-make-vs-n8n"
date: 2026-10-17T09:08:00+02:00
lastmod: 2026-10-17T09:08:00+02:00
category: "ai-automation"
article_type: "comparison"
keywords: ["n8n vs Make", "n8n vs Make vs Zapier", "Make vs Zapier", "n8n ou Make", "alternative à Zapier", "n8n auto-hébergé"]
summary: "Entre n8n et Make, tout dépend de votre équipe : Make, avec son éditeur visuel, convient à une PME sans développeur et coûte peu à l’entrée, tandis que n8n facture chaque exécution complète, quel que soit le nombre d’étapes, et peut tourner gratuitement sur votre serveur. Zapier reste le plus simple et le mieux connecté, mais il facture chaque action : c’est souvent le plus cher quand les volumes montent."
cover: "zapier-vs-make-vs-n8n"
cover_alt: "Les mots Zapier vs Make vs n8n à côté de deux panneaux comparés et d’un badge vs, derrière une vitre cannelée"
related: ["automate-lead-follow-up", "bespoke-crm-internal-app", "chatgpt-gdpr-client-data", "openai-api-tutorial", "claude-api-tutorial"]
services: ["automation"]
faq:
  - q: "Make, c’est l’ancien Integromat ?"
    a: "Oui. Integromat, une plateforme d’automatisation née à Prague, a été renommée Make en 2022, après son rachat par le groupe allemand Celonis en 2020."
  - q: "Zapier, Make et n8n fonctionnent-ils avec Gmail, Outlook et Google Sheets ?"
    a: "Oui. Les trois proposent des connexions prêtes à l’emploi pour les applications Google comme Gmail et Google Sheets, et pour les applications Microsoft comme Outlook. Quand une application manque, Make et n8n peuvent appeler directement son API avec un module ou un nœud HTTP, et Zapier sait envoyer et recevoir des webhooks."
  - q: "Peut-on passer de Zapier à Make ou à n8n plus tard ?"
    a: "Prévoyez de tout reconstruire : les Zaps, les scénarios Make et les workflows n8n se créent chacun dans leur propre éditeur. Reconstruisez un workflow à la fois, faites tourner l’ancien et le nouveau en parallèle sur des données réelles pendant une semaine, puis coupez l’ancien."
  - q: "n8n est-il open source ?"
    a: "Pas au sens strict. Son code est public et l’édition Community est gratuite en auto-hébergement, mais sa licence, la Sustainable Use License, en limite l’usage aux besoins internes de votre entreprise ou à un usage non commercial ou personnel : vous ne pouvez pas revendre n8n comme un service. n8n appelle ce modèle « fair-code »."
---

n8n vs Make : si vous cherchez à automatiser les tâches de votre PME, ces deux noms reviennent vite, avec Zapier comme point de comparaison. Les trois font le même travail de base : quand quelque chose se produit dans une application (un formulaire est envoyé, un email arrive, une ligne s’ajoute à un tableur), ils déclenchent des actions dans d’autres, sans que personne n’ait à copier-coller.

Les vraies différences tiennent à la façon dont chacun vous facture, aux compétences qu’il vous demande et à l’endroit où vont vos données. Une partie de mon travail consiste à automatiser les tâches répétitives des petites entreprises pour leur simplifier la vie, et ce comparatif s’appuie sur ce que chaque outil publie (son unité de facturation, ses offres à la date de rédaction, en octobre 2026, son hébergement et sa licence) plutôt que sur un banc d’essai. Si vous vous demandez encore quelles tâches valent la peine d’être automatisées, commencez par mon guide de l’{{< a key="ai-small-business-guide" >}}IA pour TPE et PME{{< /a >}}.

## n8n vs Make vs Zapier : le comparatif en un tableau (octobre 2026)

Chaque outil a son mot pour désigner une automatisation : n8n construit des workflows, Make des scénarios et Zapier des Zaps.

| | n8n | Make | Zapier |
|---|---|---|---|
| Siège | Berlin, Allemagne | Prague, République tchèque | États-Unis |
| Construction | Des nœuds sur un canevas, avec du code si besoin | Des modules sur un canevas visuel, avec des embranchements | Une liste d’étapes, lue de haut en bas |
| Ce que vous payez | Les exécutions : chaque passage complet | Les crédits : chaque module qui s’exécute | Les tâches : chaque action exécutée |
| Option gratuite | Édition Community, hébergée par vous | Offre Free, 1 000 crédits par mois | Offre Free, 100 tâches par mois |
| Première offre payante | Starter, 20 € par mois pour 2 500 exécutions | Core, à partir de 9 $ (environ 8 €) par mois pour 10 000 crédits | Professional, à partir de 19,99 $ (environ 17 €) par mois pour 750 tâches |
| Auto-hébergement | Oui | Non | Non |
| Pour qui | Équipes techniques, gros volumes, maîtrise des données | Utilisateurs à l’aise avec la logique, petit budget | Indépendants et équipes sans aide technique |

Les prix des offres payantes s’entendent par mois avec facturation annuelle ; le paiement mensuel coûte plus cher. Zapier et Make affichent leurs prix en dollars américains et n8n en euros : les montants en euros entre parenthèses sont des conversions, qui varient avec le taux de change.

## Ce que vous payez vraiment : tâches, crédits et exécutions

Les prix affichés sont difficiles à comparer, parce que les trois outils ne comptent pas la même chose.

- **Une exécution (n8n)** est un passage complet d’un workflow, quel que soit le nombre d’étapes. Un workflow avec un déclencheur et quatre actions consomme une exécution à chaque passage.
- **Un crédit (Make)** est l’unité de facturation de Make depuis 2025, année où il a remplacé les opérations. Chaque module qui s’exécute consomme des crédits, en général un pour une étape simple, davantage pour l’IA ou les modules plus lourds. La même automatisation consomme environ cinq crédits par passage, déclencheur compris.
- **Une tâche (Zapier)** est une action exécutée avec succès. Le déclencheur ne compte pas. La même automatisation consomme quatre tâches par passage.

Prenons une automatisation courante : un formulaire de contact sur votre site déclenche quatre actions. La demande s’ajoute dans un fichier Google Sheets, vous recevez une alerte par email, le contact est créé dans votre CRM et le prospect reçoit un email de confirmation. Voici ce qu’elle consomme selon le volume :

| Demandes par mois | n8n | Make | Zapier |
|---|---|---|---|
| 150 | 150 exécutions : dans Starter | Environ 750 crédits : dans les 1 000 de l’offre Free | 600 tâches : dans les 750 de Professional |
| 600 | 600 exécutions : dans Starter | Environ 3 000 crédits : dans Core | 2 400 tâches : un palier de tâches supérieur |

L’écart se creuse avec les workflows longs : dix actions consomment toujours une seule exécution chez n8n, au moins dix crédits chez Make et dix tâches par passage chez Zapier. Sur les offres payantes, Zapier peut facturer les tâches au-delà de votre forfait à un tarif plus élevé plutôt que d’arrêter vos Zaps : un mois chargé se voit sur la facture.

{{< callout type="tip" >}}Avant de comparer les prix, notez deux chiffres pour chaque automatisation envisagée : **combien de fois elle tournera par mois, et combien d’actions elle comporte**. Multipliez-les pour Zapier et Make ; pour n8n, seul le premier compte.{{< /callout >}}

## Les prix en octobre 2026

Voici les tarifs publics à la date de rédaction (octobre 2026), par mois avec facturation annuelle. Vérifiez le montant TTC au moment du paiement : les trois éditeurs ajustent régulièrement leurs offres.

### n8n

| Offre | Prix par mois, facturation annuelle | Exécutions par mois | Ce qu’elle ajoute |
|---|---|---|---|
| Community Edition | Gratuite | Limitées seulement par votre serveur | Auto-hébergée : vous l’installez et l’entretenez |
| Starter | 20 € | 2 500 | Hébergée par n8n |
| Pro | 50 € | 10 000 | Plus d’exécutions simultanées, rôles d’administration |
| Business | 667 € | 40 000 | Auto-hébergée, avec authentification unique (SSO) et versionnage Git |

n8n ne limite pas le nombre de workflows actifs : vous payez les exécutions, pas le nombre d’automatisations allumées.

### Make

| Offre | Prix par mois, facturation annuelle | Crédits par mois | Ce qu’elle ajoute |
|---|---|---|---|
| Free | 0 $ | 1 000 | Pour débuter |
| Core | À partir de 9 $ (environ 8 €) | 10 000 | La première offre payante |
| Pro | À partir de 16 $ (environ 14 €) | 10 000 | Exécution prioritaire |
| Teams | À partir de 29 $ (environ 25 €) | 10 000 | Le travail en équipe |

Chaque prix de Make correspond à 10 000 crédits par mois ; davantage de crédits coûtent plus cher.

### Zapier

| Offre | Prix par mois, facturation annuelle | Tâches par mois | Ce qu’elle ajoute |
|---|---|---|---|
| Free | 0 $ | 100 | Zaps illimités, avec Tables et Forms |
| Professional | À partir de 19,99 $ (environ 17 €) | 750, davantage sur les paliers supérieurs | Le prix monte avec le palier de tâches choisi |
| Team | À partir de 69 $ (environ 59 €) | 2 000 | Jusqu’à 25 utilisateurs |

Les chiffres à jour sont sur la [page de tarifs de n8n](https://n8n.io/pricing/), la [page de tarifs de Make](https://www.make.com/en/pricing) et la [page de tarifs de Zapier](https://zapier.com/pricing).

## Prise en main : qui peut construire quoi

### n8n : pensé pour les équipes techniques

n8n fonctionne sur un canevas, avec des nœuds reliés entre eux. La différence apparaît quand aucun nœud prêt à l’emploi ne fait ce dont vous avez besoin : un nœud Code exécute du JavaScript ou du Python, et le nœud HTTP Request peut appeler presque n’importe quelle API. n8n se présente comme un outil pour les équipes techniques, et la description est juste.

### Make : une carte de votre processus

Dans Make, un scénario se dessine sur un canevas : chaque module est un cercle relié au suivant, et un routeur sépare le flux en branches, par exemple une pour les demandes de devis et une pour le reste. Il y a plus à apprendre que sur Zapier, surtout la façon dont les données circulent d’un module à l’autre (en paquets que Make appelle des bundles), mais vous voyez tout le processus sur un seul écran.

### Zapier : le démarrage le plus doux

Un Zap se lit comme une recette : un déclencheur, puis les actions, chacune avec un petit formulaire à remplir. Les embranchements existent (Zapier les appelle Paths), mais l’éditeur reste une liste. Avec la plus longue liste de connexions prêtes à l’emploi, l’application dont vous avez besoin a toutes les chances d’y figurer : pour un chef d’entreprise sans aide technique, c’est le chemin le plus court vers une automatisation qui fonctionne.

Je déconseille généralement WordPress et Webflow aux chefs d’entreprise qui travaillent sans équipe, parce que la prise en main est longue et qu’ils finissent par devoir devenir leur propre webmaster. La même logique vaut ici : Zapier vous demande le moins d’efforts, Make un peu plus, et n8n donne le meilleur de lui-même quand quelqu’un de votre côté est à l’aise avec le code.

## Étapes IA et agents : ce que proposent n8n, Make et Zapier

Les trois vendent désormais des fonctions d’IA, et leur coût suit l’unité de facturation de chaque outil.

- **n8n** propose un nœud AI Agent que vous reliez au modèle de votre choix, chez OpenAI, Anthropic ou un autre fournisseur. Les appels à l’IA se font à l’intérieur du workflow : ils n’ajoutent aucune exécution, et le fournisseur du modèle vous facture directement via votre propre clé API.
- **Make** a son AI Toolkit et ses propres agents IA. Les modules d’IA peuvent consommer plus de crédits qu’une étape simple : un scénario avec de l’IA épuise son forfait plus vite.
- **Zapier** propose des étapes d’IA dans les Zaps, et Zapier Agents, des agents qui travaillent à partir d’instructions écrites en langage courant. Une action d’IA est une action comme une autre : elle consomme des tâches.

Une bonne première étape d’IA pour une PME : lire chaque demande reçue par le site, la classer (demande de devis, question de support, spam) et l’envoyer au bon endroit. Quel que soit l’outil, brancher votre propre modèle suppose de créer une clé API avec une limite de dépense : mes tutoriels sur l’{{< a key="openai-api-tutorial" >}}API ChatGPT{{< /a >}} et l’{{< a key="claude-api-tutorial" >}}API Claude{{< /a >}} montrent comment la créer et plafonner le budget.

{{< callout type="note" >}}Gardez un humain entre l’IA et vos clients. D’après mon expérience, Claude est plus fiable que ChatGPT, qui a tendance à inventer un peu trop souvent, mais aucun modèle ne tombe juste à chaque fois : **une étape d’IA peut classer, trier et rédiger un brouillon ; un humain vérifie avant tout envoi.**{{< /callout >}}

## RGPD : où vont les données de vos clients

Une automatisation qui traite vos demandes transporte des données personnelles : noms, adresses email, numéros de téléphone, parfois le détail d’un projet. L’outil traite ces données pour votre compte : au sens du RGPD, c’est votre sous-traitant, et il vous faut un contrat de sous-traitance avec lui (souvent appelé DPA, pour Data Processing Agreement), à lire avant de connecter quoi que ce soit.

Trois points distinguent les trois outils :

1. **Où les données sont traitées.** Le cloud de n8n est hébergé à Francfort, en Allemagne, et l’édition Community tourne là où vous l’installez : vos données peuvent rester sur un serveur de votre choix. Make est une entreprise européenne : vérifiez la région d’hébergement de votre compte. Zapier est une entreprise américaine : vérifiez dans son DPA comment sont encadrés les transferts hors d’Europe.
2. **Ce que garde l’historique des exécutions.** Chaque outil conserve un journal des passages, avec les données qui ont transité. Utile pour corriger une erreur, ce journal est aussi une copie de plus des coordonnées de vos clients : vérifiez sa durée de conservation et qui, dans votre équipe, peut l’ouvrir.
3. **Ce que vous envoyez.** Ne transmettez que les champs dont l’application suivante a besoin. Une alerte « nouvelle demande, rappeler aujourd’hui » n’a pas besoin du message complet.

Les accès méritent le même soin. Pour une automatisation comme l’application interne développée pour un client, j’ai besoin d’un accès à la boîte mail, par exemple. Tout outil que vous connectez obtient des accès comparables : donnez-lui les autorisations les plus restreintes possibles, passez par un compte professionnel plutôt que personnel, et supprimez les connexions que vous n’utilisez plus.

Si une étape d’IA lit vos demandes, le fournisseur du modèle les reçoit aussi. Ce que vous pouvez lui confier est détaillé dans {{< a key="chatgpt-gdpr-client-data" >}}ChatGPT et RGPD : quelles données clients confier à une IA{{< /a >}}. Cette partie donne des informations générales, pas un conseil juridique.

## Auto-héberger n8n : un logiciel gratuit, pas un travail gratuit

L’édition Community est la version gratuite et auto-hébergée de n8n, distribuée sous la licence maison de n8n, la Sustainable Use License. Vous l’installez sur un serveur que vous louez ou possédez, et n8n ne vous facture rien. En échange, cinq chantiers vous reviennent :

1. **Le serveur** : le choisir, le payer et le dimensionner pour vos volumes.
2. **Les mises à jour** : les nouvelles versions apportent des corrections et des correctifs de sécurité, et quelqu’un doit les installer.
3. **Les sauvegardes** : des workflows et des identifiants qui relient vos comptes.
4. **La sécurité** : le serveur détient les clés de votre messagerie, de votre CRM et de vos tableurs ; protégez-le comme tout serveur qui contient des données clients.
5. **La surveillance** : s’il s’arrête à deux heures du matin, vos automatisations s’arrêtent avec lui jusqu’à ce que quelqu’un s’en aperçoive.

Avec un développeur dans l’équipe ou un prestataire joignable, l’auto-hébergement est une façon raisonnable de faire tourner de gros volumes pour le prix d’un serveur. Sans cela, n8n Cloud ou Make vous apportent l’essentiel des avantages, sans les nuits blanches.

## n8n, Make ou Zapier : lequel choisir

**Choisissez n8n** si vous faites tourner des workflows longs ou de gros volumes, si vous voulez des agents IA avec le modèle de votre choix ou des données hébergées en Allemagne, et si quelqu’un de votre côté est à l’aise avec les outils techniques. Ne prenez l’édition auto-hébergée que si un développeur ou un prestataire prend en charge le serveur, les mises à jour et les sauvegardes.

**Choisissez Make** si vous êtes à l’aise avec un peu de logique, si vos processus comportent des embranchements et si vous voulez plus de volume pour votre argent. Pour une PME qui a dépassé l’offre d’entrée de Zapier, c’est en général l’étape suivante la moins chère.

**Choisissez Zapier** si vous travaillez sans équipe ou avec une équipe non technique, si vous voulez le démarrage le plus doux et le plus grand choix d’applications, avec des volumes modestes. Ce confort se paie quand les volumes augmentent.

**N’en choisissez aucun** si vous avez seulement besoin d’une alerte à l’arrivée d’un formulaire. Un court script Google Apps Script peut le faire gratuitement : mon tutoriel pour {{< a key="automate-lead-follow-up" >}}automatiser le suivi des prospects{{< /a >}} met en place une alerte instantanée et un rappel, sans aucun abonnement.

### Quand une application sur mesure s’impose

Les outils de connexion excellent pour faire circuler des données entre les applications que vous utilisez déjà, moins quand une équipe a besoin d’un seul endroit pour tout voir et tout traiter. Pour {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, un installateur de climatisation en Île-de-France, j’ai apporté plus de prospects que l’équipe ne pouvait en traiter, et le client m’a demandé une application pour tout voir clairement et ne jamais oublier de rappeler un prospect. J’ai développé sur mesure un outil interne qui gère les prospects, les chantiers, la communication avec les salariés, l’agenda et l’analyse comptable, avec des intégrations d’IA et de téléphonie. Mon guide du {{< a key="bespoke-crm-internal-app" >}}CRM sur mesure{{< /a >}} explique quand votre propre application l’emporte sur un outil du marché.

Je développe aussi des logiciels pour mon propre usage, pas pour les vendre : je sais ce que c’est d’avoir besoin de quelque chose de précis et de construire la solution. Une application sur mesure reste un projet plus lourd qu’un Zap : commencez par un outil de connexion, et passez à l’étape suivante seulement quand il vous freine.

## Avant d’automatiser : la checklist en cinq étapes

1. **Choisissez une tâche que vous répétez déjà chaque semaine** et notez ses étapes. Automatisez ce que vous faites aujourd’hui, pas un processus que vous espérez avoir un jour.
2. **Comptez les passages et les actions** pour savoir quelle offre il vous faut, comme dans le tableau plus haut.
3. **Vérifiez que vos applications sont prises en charge** avec les déclencheurs et les actions exacts dont vous avez besoin, pas seulement leur nom.
4. **Construisez l’automatisation sur l’offre gratuite ou la moins chère** et faites-la tourner sur des données réelles pendant deux semaines, notifications d’erreur activées.
5. **Désignez un responsable et réglez les questions de données** : qui reçoit les emails d’erreur, un contrat de sous-traitance signé, et seulement les champs utiles qui transitent.

Ensuite, restez sur l’outil choisi. En changer chaque fois que l’un d’eux lance une nouvelle fonction d’IA, c’est le piège que je décris dans {{< a key="shiny-object-syndrome" >}}le syndrome de l’objet brillant{{< /a >}} : il est facile de se laisser séduire par les nouveaux outils, alors que les résultats viennent de la concentration sur ceux que vous utilisez déjà.

Vous n’avez pas besoin de moi pour construire un premier workflow ou un premier scénario : une offre gratuite et un après-midi suffisent. Quand vos automatisations commencent à porter votre prospection, avec plusieurs personnes qui en dépendent chaque jour, c’est le moment de vous faire aider ou d’envisager une application à vous.
