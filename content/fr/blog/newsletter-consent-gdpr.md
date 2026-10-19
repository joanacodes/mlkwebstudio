---
title: "Newsletter et RGPD : consentement, soft opt-in et double opt-in expliqués"
seo_title: "Newsletter RGPD : consentement, soft opt-in, double opt-in"
description: "Newsletter RGPD : quand le consentement est obligatoire, ce que permet le soft opt-in, pourquoi le double opt-in protège et ce que dit la CNIL en B2B."
slug: "newsletter-rgpd-consentement"
translationKey: "newsletter-consent-gdpr"
date: 2026-10-18T23:15:00+02:00
lastmod: 2026-10-18T23:15:00+02:00
category: "funnels"
article_type: "guide"
keywords: ["newsletter RGPD consentement", "consentement newsletter", "soft opt-in", "double opt-in RGPD", "case à cocher newsletter", "prospection email CNIL"]
summary: "Pour envoyer une newsletter commerciale à des particuliers, en France comme au Royaume-Uni, il faut leur consentement : une case qu’ils cochent ou un formulaire qu’ils envoient eux-mêmes, avec la date et le texte affiché en preuve. Le soft opt-in permet d’écrire à vos clients au sujet de produits analogues à ceux qu’ils ont achetés, s’ils ont pu refuser à la collecte et le peuvent à chaque email. Le double opt-in n’est pas obligatoire, mais c’est la meilleure preuve."
cover: "newsletter-consent-gdpr"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, au-dessus de la photo d’un bandeau cookies aux boutons « Tout refuser » et « Tout accepter » de même taille"
related: ["cold-email-gdpr-uk-france", "newsletter-tools-comparison", "first-100-subscribers", "gdpr-guide", "uk-gdpr-data-use-access-act"]
services: ["websites"]
faq:
  - q: "Puis-je offrir une réduction en échange d’une inscription à ma newsletter ?"
    a: "Oui, tant que refuser ne coûte rien : la CNIL rappelle que la personne doit avoir « un choix réel, sans avoir à subir de conséquences négatives en cas de refus ». Au Royaume-Uni, l’ICO accepte ce type d’avantage, mais pas une récompense si forte qu’elle force la main. La case newsletter reste non cochée tant que la personne ne la coche pas."
  - q: "Que doit contenir l’email de confirmation du double opt-in ?"
    a: "Seulement ce qui sert à confirmer : votre nom, ce à quoi la personne s’est inscrite, la fréquence des envois et un bouton de confirmation, plus une phrase l’invitant à ignorer l’email si elle ne s’est pas inscrite. Pas d’offre : c’est une confirmation, pas votre premier numéro."
  - q: "Faut-il un consentement à part pour mesurer les ouvertures de la newsletter ?"
    a: "Oui, en France : la recommandation de la CNIL sur les pixels de suivi dans les emails, publiée en avril 2026, soumet la mesure des ouvertures à des fins marketing au consentement du lecteur, distinct de l’inscription à la newsletter. Sans ce consentement, désactivez le suivi des ouvertures pour les abonnés concernés."
  - q: "Faut-il déclarer sa newsletter à la CNIL ?"
    a: "Non : les déclarations préalables ont disparu avec le RGPD, en mai 2018. La newsletter doit en revanche figurer dans votre registre des activités de traitement (article 30 du RGPD), avec sa finalité, les données collectées et leur durée de conservation."
  - q: "Qui contrôle les newsletters, et que risque-t-on ?"
    a: "En France, la CNIL. Le RGPD prévoit des amendes jusqu’à 20 millions d’euros ou 4 % du chiffre d’affaires annuel mondial, le montant le plus élevé étant retenu, et la CNIL a infligé 325 millions d’euros à Google en septembre 2025, notamment pour des publicités affichées comme des emails dans Gmail sans consentement. Au Royaume-Uni, c’est l’ICO, devenu formellement l’Information Commission le 30 septembre 2026."
---

Le consentement à une newsletter, au sens du RGPD, se résume à deux questions : cette personne a-t-elle accepté de recevoir votre newsletter, et pouvez-vous le prouver ? Pour des particuliers, en France comme ailleurs dans l’UE ou au Royaume-Uni, les deux réponses doivent être oui avant le premier envoi, avec deux exceptions : vos clients, grâce au soft opt-in, et, dans certains pays, les adresses professionnelles.

Une objection que j’entends chez mes clients à propos du cold emailing, c’est que ce serait illégal. En B2B, ce n’est généralement pas le cas, et ce sont les mêmes règles qui décident qui peut recevoir votre newsletter (ou vos mailings). Ce guide fait partie de mon {{< a key="funnels-newsletters-guide" >}}guide du tunnel de vente et de la newsletter{{< /a >}}.

Il s’agit d’une information générale, pas d’un conseil juridique : la dernière partie indique quand un avocat vaut la dépense.

## Deux niveaux de règles : le droit de la prospection, puis le RGPD

**La règle sur la prospection par email décide si vous pouvez envoyer.** Dans l’UE, c’est l’[article 13 de la directive ePrivacy](https://eur-lex.europa.eu/eli/dir/2002/58/oj) : les emails de prospection adressés à des particuliers exigent leur consentement préalable, sauf soft opt-in. Chaque pays la transpose ; en France, c’est l’article L34-5 du Code des postes et des communications électroniques (CPCE). Au Royaume-Uni, c’est la regulation 22 du PECR, le texte britannique sur les communications électroniques, modifié par le Data (Use and Access) Act 2025 ({{< a key="uk-gdpr-data-use-access-act" >}}ce que cette loi a changé{{< /a >}}).

**Le RGPD décide de ce qu’est un consentement valable.** La directive ePrivacy renvoie à sa définition, et le RGPD britannique (UK GDPR) joue le même rôle pour le PECR.

Ces règles suivent vos lecteurs, pas votre entreprise. Un cabinet suisse, un éditeur de logiciels canadien ou une agence marocaine dont la newsletter propose ses services à des lecteurs en France ou en Belgique relève du RGPD par son article 3, paragraphe 2, et le plus sûr est d’appliquer les règles du pays de chaque lecteur. Mon {{< a key="gdpr-guide" >}}guide du RGPD{{< /a >}} couvre le reste du règlement.

## Consentement à la newsletter et RGPD : ce qui le rend valable

Le consentement est une « manifestation de volonté, libre, spécifique, éclairée et univoque », exprimée « par une déclaration ou par un acte positif clair » ([article 4, point 11, du RGPD](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679)). Sur un formulaire d’inscription, cela donne six règles.

1. **La personne agit.** Le considérant 32 exclut le silence, les cases cochées par défaut et l’inactivité, et la Cour de justice de l’UE a confirmé dans l’arrêt Planet49 (affaire C-673/17, 1er octobre 2019), rendu à propos des cookies, qu’une case précochée ne vaut pas consentement. Sur un formulaire qui ne sert qu’à la newsletter, saisir son adresse et cliquer sur « S’inscrire » est un acte clair. Sur une commande, un formulaire de contact ou une demande de devis, la newsletter a besoin de sa propre case, non cochée.
2. **Il se distingue de vos CGV.** Une demande de consentement placée dans un document qui traite d’autres sujets doit s’en distinguer clairement (article 7, paragraphe 2) : accepter vos CGV ou votre politique de confidentialité ne vaut pas accord pour la prospection.
3. **Il est spécifique.** Le consentement à votre newsletter couvre votre newsletter, pas les offres de partenaires ni les SMS.
4. **Il est éclairé.** Dites qui vous êtes, ce que vous enverrez et à quelle fréquence, avec un lien vers votre politique de confidentialité.
5. **Il est libre.** Selon l’article 7, paragraphe 4, et le considérant 43, le consentement est présumé non libre quand un service en dépend sans en avoir besoin. Un livre blanc réservé aux inscrits frôle cette limite : le plus sûr est de l’envoyer à toute personne qui le demande et de proposer la newsletter dans une case séparée.
6. **Il se retire aussi facilement qu’il se donne** (article 7, paragraphe 3) : un clic dans chaque envoi, pas un email au service client.

Une case qui respecte ces six règles peut rester très simple :

```text
[ ] Je veux recevoir la newsletter de [Votre entreprise] : un email par mois avec nos guides et nos offres.
    Désinscription en un clic dans chaque envoi. Vos données : [politique de confidentialité]
```

## Le soft opt-in : écrire à vos clients sans case à cocher

Le soft opt-in est l’exception prévue pour vos clients : article 13, paragraphe 2, de la directive ePrivacy, article L34-5 du CPCE en France, regulation 22(3) du PECR au Royaume-Uni. Vous pouvez écrire sans case à cocher si trois conditions sont réunies :

1. **Vous avez recueilli l’adresse auprès de la personne, à l’occasion d’une vente ou d’une prestation.** Au Royaume-Uni, de simples « négociations en vue d’une vente » suffisent : une demande de devis ou un essai gratuit comptent, une simple visite du site, non.
2. **Vous parlez de produits ou services analogues que vous fournissez vous-même**, jamais de l’offre d’un partenaire.
3. **La personne a pu refuser, simplement et gratuitement, au moment de la collecte**, et chaque email lui permet de se désabonner.

Un fleuriste peut écrire à ses clients avant la fête des Mères au sujet de ses bouquets, mais il lui faut un consentement pour les personnes qui n’ont jamais acheté. Le refus à la collecte prend en général la forme d’une case clairement formulée lors de la commande : les clients à qui ce choix n’a jamais été proposé ne sont pas couverts.

## Newsletter B2B : les adresses professionnelles suivent d’autres règles

**France.** La [CNIL](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique) autorise les emails de prospection vers des professionnels sans consentement préalable lorsque le message est en rapport avec leur métier (son exemple : un logiciel proposé à un directeur informatique), à condition qu’ils aient été informés de l’utilisation de leur adresse et puissent s’y opposer simplement et gratuitement. Les adresses génériques comme contact@ sont des coordonnées de la personne morale et sortent de ces règles.

**Royaume-Uni.** Le PECR n’exige pas de consentement pour écrire aux personnes morales (limited companies, LLP, partnerships écossais, organismes publics), à condition que chaque message identifie l’expéditeur et donne une adresse pour s’opposer (regulation 23). Les entrepreneurs individuels (sole traders) et les partnerships hors d’Écosse sont protégés comme des particuliers et, en cas de doute, l’ICO recommande de traiter le destinataire comme un particulier.

**Ailleurs dans l’UE.** L’article 13, paragraphe 5, de la directive ePrivacy laisse à chaque pays le soin de protéger les personnes morales : l’Allemagne, par exemple, exige un consentement préalable même pour écrire à des entreprises.

Même quand la loi le permet, ajouter à une newsletter des contacts professionnels qui n’ont rien demandé est un mauvais calcul : ceux qui ne l’attendaient pas la signalent plus volontiers comme spam, et Gmail comme Yahoo comptent ces plaintes contre vous (mon guide de la {{< a key="newsletter-deliverability" >}}délivrabilité d’une newsletter{{< /a >}} donne les seuils). Mon article {{< a key="cold-email-gdpr-uk-france" >}}cold emailing et RGPD{{< /a >}} reprend les règles B2B une par une.

## Le double opt-in : pas obligatoire, mais la meilleure preuve

Avec le double opt-in (ou double confirmation), la personne s’inscrit, reçoit un email avec un lien de confirmation et n’entre dans votre liste qu’après avoir cliqué. Ni le RGPD ni le CPCE ne l’imposent. Le RGPD exige en revanche une preuve : le responsable du traitement « est en mesure de démontrer » le consentement (article 7, paragraphe 1). Un formulaire envoyé montre que quelqu’un a saisi une adresse ; le clic montre que le titulaire de la boîte a accepté.

En Allemagne, la Cour fédérale de justice (BGH) a admis dans un arrêt du 10 février 2011 (I ZR 164/09) qu’une inscription confirmée par email peut être présumée venir du titulaire de l’adresse, et le double opt-in y est la pratique dominante.

Il garde aussi la liste propre : pas de fautes de frappe, pas de collègue ni de concurrent inscrit pour plaisanter, moins de robots et de pièges à spam. Son coût : certaines personnes ne cliquent jamais, donc votre page de remerciement doit les inviter à vérifier leur boîte de réception.

Les outils de newsletter font l’essentiel :

- **MailerLite** active le double opt-in par défaut sur les nouveaux formulaires ; modifier l’email de confirmation demande un forfait payant, et les inscriptions qui arrivent par l’API ou une intégration ont leur propre réglage (**Account settings > Subscribe settings**).
- **Brevo** propose un email de double confirmation à l’étape des paramètres du formulaire, et ses journaux conservent l’inscription, l’email de confirmation et l’heure du clic.

Le reste se trouve dans mon {{< a key="newsletter-tools-comparison" >}}comparatif des outils de newsletter{{< /a >}}.

## Ce qu’il faut conserver pour chaque abonné

En cas de plainte, la charge de la preuve vous revient. Pour chaque abonné, conservez :

| Quoi | Exemple |
|---|---|
| Adresse, date et heure | anne@exemple.fr, 14 mars 2026, 9 h 12 |
| Source | Formulaire en pied de page du blog, commande, salon |
| Texte affiché | Formulaire de pied de page, version 3 (gardez les anciennes) |
| Confirmation | Clic de double opt-in, 14 mars 2026, 9 h 15 |
| Base légale | Consentement, ou soft opt-in pour un client |
| Évolutions | Désinscription le 2 septembre 2026 |

Votre outil de newsletter enregistre presque tout. Le texte affiché est le plus facile à perdre : quand vous modifiez un formulaire, gardez l’ancien texte avec ses dates de mise en ligne, et quand vous changez d’outil, exportez les champs de consentement, pas seulement les adresses.

## À chaque envoi : expéditeur, lien de désinscription, liste repoussoir

- **Dites qui vous êtes.** Masquer l’expéditeur est interdit dans l’UE (article 13, paragraphe 4, de la directive ePrivacy), en France (article L34-5 du CPCE) et au Royaume-Uni (regulation 23 du PECR), et chaque email doit donner une adresse valable pour se désabonner.
- **Mettez un lien de désinscription dans chaque email.** L’opposition à la prospection ne souffre aucune exception (article 21, paragraphe 3, du RGPD) : arrêtez immédiatement.
- **Ajoutez la désinscription en un clic si vous envoyez en masse.** À partir d’environ 5 000 messages par jour vers des comptes Gmail personnels, Google exige des en-têtes de désinscription en un clic et un lien visible dans le corps du message, avec un traitement des désinscriptions sous deux jours ; Yahoo demande la même chose.
- **Tenez une liste repoussoir.** Les adresses désinscrites ou qui se sont plaintes vont dans une liste d’exclusion, pour qu’un import ultérieur ne les réintègre jamais. La [CNIL recommande](https://www.cnil.fr/fr/comment-utiliser-une-liste-repoussoir-pour-respecter-lopposition-la-prospection) de conserver ce qui permet de respecter une opposition pendant au moins trois ans.

## Importer un ancien fichier : redemander, mais pas n’importe comment

Contacts du téléphone, cartes de visite, relations LinkedIn, anciennes demandes, fichier acheté à un courtier : aucune de ces personnes n’a accepté votre newsletter. Avant tout import, triez : les clients à qui l’on a proposé de refuser peuvent relever du soft opt-in, les adresses professionnelles suivent les règles B2B ci-dessus, et tous les autres doivent donner leur consentement. Le leur demander par email ne règle rien : le CPCE vise tout message destiné à promouvoir, « directement ou indirectement », des biens, des services ou l’image de l’entreprise.

{{< callout type="warning" >}}Au Royaume-Uni, l’ICO a infligé en 2017 une amende de 70 000 livres sterling à Flybe, qui avait écrit à plus de trois millions de personnes désinscrites pour leur demander de mettre à jour leurs préférences, et de 13 000 livres à Honda, pour des emails demandant à des clients s’ils voulaient recevoir ses offres. Pour l’ICO, un email qui demande un consentement à la prospection est lui-même un email de prospection.{{< /callout >}}

Invitez plutôt ces contacts par vos canaux habituels : votre site, vos factures papier, votre signature email, vos réseaux sociaux, un QR code sur le comptoir. Mon guide pour {{< a key="first-100-subscribers" >}}trouver vos 100 premiers abonnés{{< /a >}} les détaille, sans acheter de fichier.

Surveillez aussi l’horloge : selon le référentiel de la CNIL sur la gestion des activités commerciales, les données d’un prospect se conservent trois ans au plus après leur collecte ou le dernier contact venant de lui, comme un clic ou une demande (une simple ouverture ne compte pas). À l’échéance, vous pouvez lui demander une fois s’il souhaite continuer à recevoir vos messages, si vous avez le droit de lui écrire ; sans réponse positive et explicite, supprimez ses données.

## Checklist du consentement newsletter, et quand se faire aider

1. Formulaire d’inscription : un formulaire dédié à la newsletter, ou une case non cochée sur tout autre formulaire, avec un texte clair et un lien vers la politique de confidentialité.
2. Double opt-in activé, y compris pour les inscriptions qui arrivent par une intégration.
3. Page de commande : un moyen clair de refuser la prospection, si vous comptez sur le soft opt-in.
4. Preuves : date, source, version du texte et confirmation pour chaque abonné.
5. Chaque envoi : votre nom, une adresse de contact, un lien de désinscription et, pour les gros volumes, la désinscription en un clic.
6. Une liste repoussoir, vérifiée avant chaque import.
7. Anciens contacts importés seulement avec un consentement, le soft opt-in ou une règle B2B qui les couvre.

Un avocat ou un délégué à la protection des données (DPO) vaut la dépense quand votre liste couvre de nombreux pays, quand la newsletter touche à la santé ou à d’autres données sensibles, quand vos lecteurs peuvent être mineurs, ou quand une plainte ou un courrier de la CNIL arrive. Les formulaires d’inscription, les cases de consentement et les pages de confidentialité font partie des {{< a page="/services/websites" >}}sites web que je crée{{< /a >}}.
