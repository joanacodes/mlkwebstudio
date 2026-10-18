---
title: "Récupérer son site internet auprès d’un ancien prestataire : accès et fichiers"
seo_title: "Récupérer son site internet auprès d’un ancien prestataire"
description: "Récupérer son site internet quand un ancien prestataire garde les accès : les comptes à reprendre, un modèle de demande écrite et les recours en cas de refus."
slug: "recuperer-son-site-internet"
translationKey: "regain-website-access"
date: 2026-10-17T09:37:00+02:00
lastmod: 2026-10-17T09:37:00+02:00
category: "website-rescue"
article_type: "guide"
keywords: ["récupérer son site internet", "récupérer les accès de son site", "prestataire refuse de rendre le site", "clause de réversibilité", "transfert de propriété site internet", "à qui appartient mon site internet"]
summary: "Pour récupérer son site internet, listez les comptes dont il dépend (domaine, DNS, hébergement, CMS, messagerie, outils Google) et demandez par écrit à l’ancien prestataire de les transférer au nom de votre entreprise. Reprenez d’abord le domaine et la messagerie : ils permettent d’en récupérer beaucoup d’autres. S’il refuse ou a disparu, passez par les procédures de Google, la mise en demeure et, en dernier recours, la refonte du site dans des comptes à votre nom."
cover: "regain-website-access"
cover_alt: "Ordinateur portable et classeurs sur un bureau, à côté d’un bouclier coché et des mots Admin, FTP, DNS"
related: ["recover-domain-name", "website-security-guide", "wordpress-site-hacked", "google-search-console-tutorial", "google-business-profile-setup"]
services: ["rescue"]
faq:
  - q: "Un prestataire peut-il refuser de me rendre l’accès à mon site ?"
    a: "Si les comptes ont été ouverts au nom de votre entreprise, non : vous pouvez vous adresser directement à chaque plateforme. S’ils sont dans les comptes du prestataire, il les contrôle jusqu’à ce qu’il les transfère : vos leviers sont alors le contrat, une demande écrite avec un délai, la mise en demeure, puis un avocat."
  - q: "Puis-je me connecter avec un ancien mot de passe donné par le prestataire ?"
    a: "Sur un compte ouvert au nom de votre entreprise, oui, et changez le mot de passe aussitôt. Sur le compte personnel du prestataire, non : y entrer sans son accord peut constituer un accès frauduleux à un système de traitement automatisé de données (article 323-1 du Code pénal), même si votre site s’y trouve."
  - q: "À qui appartiennent le design et le code de mon site ?"
    a: "Vous pouvez réutiliser les textes que vous avez écrits et les photos que vous avez fournies. Les droits d’auteur sur le design et le code créés par le prestataire restent les siens tant qu’ils ne vous ont pas été cédés : commander et payer le site ne suffit pas, la cession doit être écrite et préciser chaque droit cédé, son étendue, sa destination, le lieu et la durée (article L131-3 du Code de la propriété intellectuelle). Si le prestataire revendique le site, consultez un avocat."
  - q: "Combien de temps faut-il pour récupérer son site ?"
    a: "Avec un prestataire coopératif, quelques jours : un transfert Squarespace ou Wix ne demande que quelques clics de chaque côté, et les outils de Google lui permettent de vous ajouter en quelques minutes. Sans coopération, comptez plutôt en semaines : une demande d’accès à une fiche Google laisse déjà trois jours au propriétaire actuel pour répondre, et un litige qui passe par un avocat prend plus longtemps."
  - q: "Vais-je perdre mon référencement si je dois refaire le site ?"
    a: "Pas forcément. Le référencement tient à votre domaine, aux adresses de vos pages et à votre contenu plus qu’à la plateforme : gardez le domaine, reprenez vos textes et redirigez chaque ancienne adresse vers sa nouvelle page avec une redirection 301."
---

Votre site fonctionne, mais les identifiants ne sont pas à vous. Un ancien webdesigner, une agence ou un développeur a tout installé dans ses propres comptes, et aujourd’hui il est passé à autre chose, ne répond plus ou attend le règlement d’une facture avant de vous rendre les clés. Récupérer son site internet reste possible, mais rarement avec un seul mot de passe : un site est une chaîne de comptes, et chacun se récupère séparément.

Reprendre la main sur un site est souvent la première étape d’un dépannage. Quand Pilotech, un installateur de climatisation en Île-de-France, m’a téléphoné en urgence parce que son site WordPress avait été piraté, il a fallu récupérer le site avant que je puisse construire le nouveau. Nous travaillons ensemble depuis, sur le référencement, le cold emailing et {{< a page="/projects/pilotech" >}}de nouveaux sites{{< /a >}}.

Ce guide couvre tous les comptes sauf le nom de domaine lui-même, qui a ses propres règles et son propre guide : {{< a key="recover-domain-name" >}}récupérer son nom de domaine auprès d’un ancien prestataire{{< /a >}}. Pour le piratage, les pannes et les autres dépannages, le guide pour {{< a key="website-security-guide" >}}sécuriser son site internet{{< /a >}} donne l’ordre des étapes.

## La liste des accès à récupérer

Un site dépend de plus de comptes qu’on ne le croit, et un prestataire rend rarement ceux que personne ne nomme. Dressez la liste avant d’écrire à qui que ce soit :

| Accès | Où il se trouve | Ce qu’il faut demander |
|---|---|---|
| Nom de domaine | Le registrar : OVH, Gandi, Infomaniak… | Votre entreprise comme titulaire, et le domaine dans votre propre compte |
| DNS | Chez le registrar, l’hébergeur ou un service comme Cloudflare | L’accès à la zone, ou son export complet |
| Hébergement | L’espace client de l’hébergeur : OVH, o2switch, Hostinger… | L’offre transférée sur votre compte, ou une sauvegarde complète |
| CMS ou créateur de site | WordPress, Squarespace, Wix, Shopify… | La propriété du site, ou un compte avec le rôle Administrateur |
| SFTP et base de données | Le panneau de l’hébergeur | Votre propre accès SFTP, les identifiants de la base et un export |
| Messagerie | Google Workspace, Microsoft 365 ou la messagerie de l’hébergeur | Le rôle d’administrateur principal, ou l’export des boîtes mail |
| Fiche Google (Google Business Profile) | Le gestionnaire de fiches de Google | Le rôle de propriétaire, puis de propriétaire principal |
| Search Console | Google Search Console | Le statut de propriétaire, que vous pouvez valider vous-même |
| Analytics et Tag Manager | Google Analytics, Google Tag Manager | Le rôle Administrateur au niveau du compte |

Ajoutez le reste : réseaux sociaux, comptes Google Ads et Meta, outils de réservation et de paiement, licences payantes et tout service qui reçoit vos formulaires de contact.

## Récupérer son site internet dans le bon ordre

Les comptes dépendent les uns des autres. Les réinitialisations de mot de passe partent vers une adresse email, Google vérifie la propriété par le domaine, et le site tourne sur l’hébergement. Procédez dans cet ordre :

1. **Le domaine et ses DNS.** Celui qui contrôle le domaine décide où vont le site et les emails, et peut prouver sa propriété à Google.
2. **La messagerie.** Chaque lien « mot de passe oublié » arrive dans une boîte mail : vérifiez que l’adresse de chaque compte est une adresse que vous lisez et que vous administrez.
3. **L’hébergement et l’administration du site.** Les fichiers, la base de données et le tableau de bord depuis lequel vous modifiez le site.
4. **Les outils Google.** Les perdre ne met pas le site hors ligne, mais ils contiennent ce que vous ne pourrez pas reconstruire : vos avis et votre historique Analytics.

{{< callout type="warning" >}}**N’annulez rien pour l’instant.** Tant que tous les accès n’ont pas été transférés, gardez le contrat d’hébergement ou de maintenance du prestataire et réglez ce qui est dû : un hébergement fermé pour impayé emporte le site, et parfois les emails, avec lui.{{< /callout >}}

## Demander par écrit, compte par compte

Une demande précise est plus facile à accepter que « rendez-nous notre site », et elle laisse une trace. Nommez chaque accès, dites ce que vous attendez et fixez un délai de huit à quinze jours. Si une facture reste vraiment due, réglez-la ou mettez-vous d’accord d’abord : vous retirez au prestataire son principal argument.

```
Objet : Transmission des accès au site [votreentreprise.fr]

Bonjour [prénom],

Merci pour votre travail sur notre site. Nous en reprenons la gestion :
pourriez-vous, d’ici le [date] :

1. Site : transférer la propriété du site [Squarespace / Wix] à
   [adresse email], ou créer un compte WordPress avec le rôle
   Administrateur pour [adresse email] ;
2. Hébergement : transférer l’hébergement sur notre compte [hébergeur],
   ou nous envoyer une sauvegarde complète (tous les fichiers et un
   export de la base de données) ;
3. SFTP et base de données : nous envoyer l’adresse du serveur et les
   identifiants SFTP et de la base ;
4. Messagerie : nommer [adresse email] super-administrateur (Google
   Workspace) ou administrateur général (Microsoft 365) ;
5. Google : ajouter [adresse email] comme propriétaire de notre fiche
   d’établissement et de la propriété Search Console, et comme
   administrateur des comptes Analytics et Tag Manager ;
6. DNS : nous envoyer un export de la zone DNS de [votreentreprise.fr] ;
7. Licences : la liste des thèmes, extensions et outils payants du site.

Merci de ne rien supprimer ni modifier avant la fin de la transmission.
Si une somme reste due, envoyez-moi la facture : je la réglerai.

Bien cordialement,
[Nom, fonction, téléphone]
```

{{< callout type="tip" >}}**Demandez un accès à votre nom, pas les mots de passe.** Presque toutes ces plateformes permettent au prestataire d’inviter votre compte, puis vous supprimez le sien. Un mot de passe partagé lui laisse les mêmes droits que vous, sans trace de qui a modifié quoi.{{< /callout >}}

## Comment se passe la transmission, plateforme par plateforme

### Squarespace et Wix : un transfert de propriété

Un créateur de site garde le site dans un compte : on ne repart pas avec des fichiers, on reprend le compte. Wix indique qu’un site ne peut pas être exporté chez un autre hébergeur, et l’export de Squarespace est partiel (un fichier au format WordPress, sans produits, événements ni CSS personnalisé).

- **Squarespace.** Le propriétaire vous invite comme contributeur et, une fois l’invitation acceptée, vous transfère la propriété depuis le panneau des autorisations du site. Les abonnements et les domaines Squarespace rattachés au site suivent, mais pas les moyens de paiement : enregistrez votre carte avant le prochain renouvellement, sinon c’est celle du prestataire qui sera débitée. L’ancien propriétaire reste contributeur jusqu’à ce que vous le retiriez. Un domaine facturé à part du site change de propriétaire séparément.
- **Wix.** Depuis le tableau de bord du site, le propriétaire ouvre le menu des actions du site, choisit le transfert du site et saisit l’adresse email de votre compte Wix ; vous acceptez depuis l’email de confirmation. Un domaine et des boîtes Google Workspace achetés chez Wix peuvent suivre le site, et vous payez ensuite les abonnements.

Shopify, Webflow et les autres créateurs de sites ont leur propre procédure : cherchez « transférer la propriété » dans leur centre d’aide.

### WordPress : un compte Administrateur, puis le serveur

Demandez un compte à votre nom avec le rôle **Administrateur**. Ne vous contentez pas du rôle Éditeur, qui ne gère ni les extensions, ni les thèmes, ni les utilisateurs. Une fois dans le tableau de bord, supprimez le compte du prestataire et, quand WordPress demande quoi faire de ses contenus, attribuez-les à votre compte : les supprimer effacerait les pages qu’il a créées.

Si vous avez l’hébergement mais pas le tableau de bord, beaucoup de panneaux d’hébergement proposent un outil WordPress qui réinitialise le mot de passe d’un administrateur ; la base de données offre une autre voie. Si vous trouvez des comptes administrateurs que personne ne reconnaît, traitez la situation comme un piratage et suivez mon guide pour un {{< a key="wordpress-site-hacked" >}}site WordPress piraté{{< /a >}}.

### Hébergement, SFTP et base de données

Quand l’hébergement se trouve dans l’espace client du prestataire, l’hébergeur ne prend ses instructions que de lui. Soit le prestataire transfère l’offre sur votre compte, quand l’hébergeur le permet, soit il vous envoie une sauvegarde complète et vous installez le site sur un hébergement à votre nom.

Une sauvegarde complète a deux parties : tous les fichiers du site (pour WordPress, le dossier entier, `wp-content` compris) et un export de la base de données, en général un fichier `.sql` produit avec phpMyAdmin ou l’outil de sauvegarde de l’hébergeur. Vérifiez que l’archive s’ouvre avant la fermeture de l’ancien hébergement, et gardez-en une copie hors du serveur.

J’ai dû travailler dans des comptes OVH et Hostinger parce que les sites de mes clients s’y trouvaient déjà, et je trouve ces deux interfaces compliquées pour un dirigeant de petite entreprise. Au besoin, demandez au support de l’hébergeur où se trouvent les sauvegardes et les accès SFTP. Une fois l’hébergement à vous, créez votre propre accès SFTP, changez le mot de passe de la base de données (sous WordPress, le nouveau va aussi dans `wp-config.php`) et supprimez les accès du prestataire.

### Messagerie

Les enregistrements MX de votre domaine indiquent qui héberge vos boîtes mail. Trois cas :

- **Google Workspace ou Microsoft 365** : demandez le rôle de super-administrateur (Google) ou d’administrateur général (Microsoft), puis supprimez le compte administrateur du prestataire. S’il a souscrit l’abonnement pour vous, faites passer la facturation à votre nom.
- **La messagerie de l’hébergeur** : les boîtes disparaissent avec l’hébergement ; exportez-les, ou faites-les importer par votre nouveau fournisseur, avant la fermeture de l’ancien compte.
- **Un prestataire disparu avec le seul compte administrateur** : Google Workspace prévoit une procédure de récupération fondée sur la preuve que vous contrôlez le domaine ; pour Microsoft 365, contactez le support de Microsoft.

### Fiche Google, Search Console et Analytics

**La Search Console se passe du prestataire.** Une fois les DNS du domaine entre vos mains, ajoutez une propriété de type Domaine et validez-la avec un enregistrement TXT dans vos DNS : vous devenez propriétaire validé de plein droit, et mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}} montre comment faire. Retirez ensuite le prestataire dans **Paramètres > Utilisateurs et autorisations** de chaque propriété. Un ancien propriétaire validé peut revenir tant qu’un de ses jetons de validation reste en place (un fichier HTML sur le serveur, une balise meta dans vos pages ou un enregistrement DNS) : supprimez-les aussi, comme l’explique [l’aide de Google](https://support.google.com/webmasters/answer/7281924?hl=fr).

**La fiche Google a une procédure de demande d’accès.** Demandez au prestataire de vous ajouter comme propriétaire, puis de vous transférer le rôle de propriétaire principal. S’il ne répond pas, cherchez votre établissement sur Google, choisissez de le revendiquer, puis demandez l’accès : Google laisse trois jours au propriétaire actuel pour répondre, et le lien de l’email de confirmation indique où en est la demande et ce que vous pouvez faire ensuite, y compris faire appel d’un refus ([page d’aide de Google](https://support.google.com/business/answer/4566671?hl=fr)). N’ouvrez pas une deuxième fiche pour contourner le problème : Google n’accepte qu’une fiche par établissement, et vos avis restent sur la première. Une fois la main reprise, mon tuto pour {{< a key="google-business-profile-setup" >}}créer et optimiser votre fiche Google My Business{{< /a >}} couvre le reste.

**Analytics et Tag Manager n’ont pas de procédure de revendication.** L’accès ne peut venir que de quelqu’un qui l’a déjà. Demandez le rôle Administrateur au niveau du compte, puis retirez le prestataire. Sinon, créez une nouvelle propriété et ajoutez sa balise à vos pages : rien ne casse, mais l’historique reste chez le prestataire. Dans les deux cas, retirez de vos pages toute balise ou tout conteneur Tag Manager que vous ne contrôlez pas : son gestionnaire peut ajouter des scripts à votre site.

## Si le prestataire refuse ou reste injoignable

Reprenez d’abord ce qui ne dépend pas de lui : le domaine si votre entreprise en est titulaire, la Search Console et la fiche Google. Puis, dans l’ordre :

**Le support des plateformes.** Le support agit sur les instructions du titulaire du compte, c’est-à-dire de celui qui l’a ouvert, pas de celui qui a payé le site. Si le compte a été ouvert avec votre adresse email ou au nom de votre société, passez par la récupération de compte et envoyez vos preuves au support : factures, contrat, extrait Kbis, pièce d’identité. Si c’est le compte personnel du prestataire, le support refusera en général sans son accord, même si Squarespace, par exemple, examine au cas par cas les demandes faites quand le propriétaire actuel est indisponible, après avoir vérifié votre identité.

**Les données de vos clients.** Si le site collecte des données personnelles (formulaires de contact, commandes, comptes clients), le prestataire qui l’héberge traite ces données pour votre compte, en tant que sous-traitant. [L’article 28 du RGPD](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679) exige que le contrat de sous-traitance l’oblige à vous renvoyer ces données ou à les supprimer au terme de la prestation, selon votre choix. Citez-le dans votre courrier : ce n’est pas une faveur que vous demandez.

**La mise en demeure.** Si le délai passe, envoyez une mise en demeure par lettre recommandée avec accusé de réception, puis consultez un avocat. Quand le prestataire affirme que le site lui appartient, la question devient juridique plutôt que technique, et un avocat vous servira mieux que moi ; si votre activité est bloquée, il peut saisir le juge des référés.

**La refonte, en dernier recours.** Si rien ne fonctionne, refaites le site dans des comptes à votre nom et faites pointer votre domaine vers lui. Les textes que vous avez écrits et les photos que vous avez fournies se réutilisent, et les anciennes versions de vos pages se trouvent souvent sur la Wayback Machine (web.archive.org). Gardez les mêmes adresses de pages, ou redirigez chaque ancienne adresse vers sa nouvelle page, comme pour {{< a key="wordpress-to-squarespace" >}}migrer un site sans perdre son référencement{{< /a >}}.

## La clause de réversibilité : prévoir la sortie dès le contrat

La plupart de ces situations viennent d’un contrat qui ne dit rien de la fin de la collaboration. Avec votre prochain prestataire, ou au renouvellement, demandez :

- des comptes ouverts dès le premier jour au nom de votre entreprise, avec une adresse email que vous contrôlez, le prestataire n’y étant qu’invité ;
- une liste des accès, tenue à jour ;
- une clause de réversibilité : ce que le prestataire rend à la fin (accès, fichiers, export de la base de données, documentation), sous quel format, dans quel délai et à quel prix ;
- une cession écrite des droits d’auteur sur le design et le code, ou au minimum une licence qui vous permet de les modifier et de les confier à quelqu’un d’autre ;
- des renouvellements facturés à votre entreprise, sur votre carte.

## Une fois les accès récupérés, et quand passer la main

La main reprise, fermez les portes derrière le prestataire :

1. Changez tous les mots de passe et activez la double authentification.
2. Supprimez partout les utilisateurs, invitations, accès SFTP et clés d’API du prestataire.
3. Mettez à jour les emails et téléphones de récupération de chaque compte.
4. Passez les renouvellements sur votre carte et activez le renouvellement automatique du domaine.
5. Tenez un registre des accès dans un gestionnaire de mots de passe : chaque compte, son email de connexion, qui y a accès et sa date de renouvellement.
6. Faites une sauvegarde complète et stockez-la hors de l’hébergement.

Vous n’avez besoin ni de moi ni de personne pour l’essentiel : la liste, l’email et les demandes à Google prennent quelques heures, et un prestataire coopératif peut tout régler en quelques jours. Passez la main quand le prestataire refuse, quand les comptes sont éparpillés entre plusieurs sociétés, ou quand le site tombe en panne ou se fait pirater entre-temps.

Chez moi, la récupération d’accès est une prestation au forfait, et je réponds aux demandes de dépannage le jour même ou sous 24 heures. Vous réglez la totalité de l’intervention ; si je n’arrive pas à récupérer les accès, vous recevez un rapport écrit à transmettre à un autre prestataire, et je rembourse 70 % de la facture. Pour les clients avec qui je travaille déjà, l’urgence passe d’abord et la facture ensuite.
