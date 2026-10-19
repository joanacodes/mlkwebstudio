---
title: "Sécuriser Google Workspace et Microsoft 365 : les réglages d’administration clés"
seo_title: "Sécuriser Google Workspace et Microsoft 365 : la checklist"
description: "Sécuriser Google Workspace et Microsoft 365 sans service informatique : comptes admin, phishing, transferts, partage et alertes, réglage par réglage."
slug: "securiser-google-workspace"
translationKey: "secure-google-workspace-microsoft-365"
date: 2026-10-18T21:57:00+02:00
lastmod: 2026-10-18T21:57:00+02:00
category: "cybersecurity"
article_type: "tutorial"
keywords: ["sécuriser Google Workspace", "sécuriser Microsoft 365", "console d’administration Google Workspace", "paramètres de sécurité par défaut Microsoft 365", "sécurité Google Workspace PME", "stratégies de sécurité prédéfinies Defender"]
summary: "Commencez par les comptes qui contrôlent tout : un compte d’administration séparé avec deux clés de sécurité, la validation en deux étapes imposée à tous et le moins d’administrateurs possible. Activez ensuite la sécurité de Gmail ou la stratégie prédéfinie Standard de Microsoft, bloquez le transfert automatique vers l’extérieur, encadrez le partage et vérifiez les applications connectées. Presque tout fonctionne avec les offres les moins chères, en un après-midi."
cover: "secure-google-workspace-microsoft-365"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé au-dessus d’une photo, avec une fenêtre de navigateur affichant une mise en page"
related: ["two-factor-authentication-passkeys", "spf-dkim-dmarc-setup", "offboarding-checklist", "backups-3-2-1", "cybersecurity-guide"]
services: ["rescue"]
faq:
  - q: "Quelle différence entre un super-administrateur et un administrateur général ?"
    a: "Aucune au quotidien : Google appelle super-administrateur le rôle qui peut tout faire, Microsoft l’appelle administrateur général (Global Administrator). Les deux modifient tous les réglages et réinitialisent le mot de passe des autres administrateurs : gardez-en le moins possible et protégez-les avec des clés de sécurité."
  - q: "Google Workspace est-il plus sûr que Microsoft 365 ?"
    a: "Aucun des deux n’est réglé pour votre équipe à l’ouverture du compte, et les deux sont assez sûrs une fois les réglages de ce guide activés. La vraie différence tient à l’endroit où se trouvent les réglages : Google en regroupe la plupart dans une seule console, Microsoft les répartit entre plusieurs centres d’administration, ce qui rend un oubli plus facile."
  - q: "Google Workspace et Microsoft 365 sauvegardent-ils mes données ?"
    a: "Pas comme une vraie sauvegarde. Google Vault (Business Plus et au-delà) conserve et recherche les données pour l’archivage et les besoins juridiques, mais la FAQ de Google précise qu’il n’a pas d’outil de restauration automatique ; un administrateur peut restaurer les fichiers Drive supprimés pendant 25 jours après leur sortie de la corbeille. Microsoft vend Microsoft 365 Backup à part. Prévoyez votre propre sauvegarde."
  - q: "Puis-je donner un accès administrateur à mon webdesigner ou à mon prestataire informatique ?"
    a: "Oui, avec un compte nominatif et le rôle le plus restreint possible, jamais en partageant votre mot de passe, et supprimez ce compte à la fin de la mission. Un rôle de type support suffit pour réinitialiser des mots de passe ; très peu de tâches exigent les droits de super-administrateur ou d’administrateur général."
---

Google Workspace et Microsoft 365 offrent de bons outils de sécurité, mais un compte neuf est réglé pour être pratique, pas pour les risques de votre équipe. Ce tutoriel montre comment sécuriser Google Workspace avec les réglages qui comptent pour une petite équipe, puis leurs équivalents dans Microsoft 365, avec le chemin de chaque menu au 19 octobre 2026.

Pas besoin d’un service informatique pour cela, ni de moi. Un après-midi avec cette liste ferme les portes d’entrée habituelles : un mot de passe volé, une fausse page de connexion, une règle de transfert que personne n’a vue, un fichier ouvert à quiconque a le lien.

C’est un chapitre de mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité pour les petites équipes{{< /a >}}. Si vous n’avez pas encore choisi votre suite, mon guide de l’{{< a key="professional-email-address" >}}adresse mail professionnelle{{< /a >}} compare d’abord les offres.

## Avant de commencer : droits d’admin, deux clés et un après-midi au calme

- **Les droits d’administration complets** : super-administrateur chez Google, administrateur général chez Microsoft. La personne qui a souscrit l’abonnement les a.
- **Deux clés de sécurité physiques par administrateur** : de petites clés USB ou NFC (norme FIDO2) à toucher pour valider une connexion, l’une sur votre trousseau, l’autre rangée ailleurs.
- **Un message à l’équipe** : imposer la validation en deux étapes ou bloquer les vieilles applications de messagerie change la connexion de chacun, alors prévenez la veille.

Si un libellé a changé, la barre de recherche en haut de chaque console retrouve le réglage. Je cite les libellés anglais de la console, et le libellé français quand je l’ai vérifié : dans une console en français, les menus sont au même endroit.

## Ce que chaque offre vous donne

| Offre | Réglages de sécurité inclus |
|---|---|
| Google Workspace Business Starter | Validation en deux étapes imposée, clés de sécurité, sécurité de Gmail, contrôle du partage Drive et des applications, centre d’alertes, gestion des appareils de base |
| Google Workspace Business Standard | Idem, plus un bac à sable pour les pièces jointes suspectes de Gmail |
| Google Workspace Business Plus | En plus : Vault et la gestion avancée des appareils (codes d’accès forts, règles de sécurité mobiles, effacement à distance) |
| Microsoft 365 Business Basic et Standard | Paramètres de sécurité par défaut, protection intégrée contre les logiciels malveillants, le spam et l’usurpation, stratégies de sécurité prédéfinies, Basic Mobility and Security |
| Microsoft 365 Business Premium | En plus : accès conditionnel (Microsoft Entra ID P1), Defender pour Office 365 Plan 1 (Safe Links, Safe Attachments, protection contre l’usurpation d’identité), Intune Plan 1, Defender for Business |

Sauf mention contraire, chaque étape fonctionne avec Business Starter ou Microsoft 365 Business Basic : sécurisez l’offre que vous avez avant de payer la suivante.

Seul manque côté Google : son aide ne cite la page sur l’état de la sécurité (security health), qui compare vos réglages à ses recommandations, que pour les éditions Enterprise, Education et certaines éditions Frontline, à l’heure où j’écris. Avec une offre Business, cette liste en tient lieu.

## Sécuriser Google Workspace : les réglages, étape par étape

Tous les chemins partent de la console d’administration (admin.google.com), avec un compte super-administrateur. La [checklist de sécurité de Google pour les structures de 1 à 100 utilisateurs](https://knowledge.workspace.google.com/admin/security/security-checklist-for-small-businesses-1-100-users?hl=fr) va plus loin ensuite.

### 1. Un compte super-administrateur séparé, protégé par deux clés

Un super-administrateur peut tout modifier et réinitialiser tous les mots de passe, y compris ceux des autres administrateurs. Les [bonnes pratiques de Google pour les comptes administrateur](https://knowledge.workspace.google.com/admin/users/security-best-practices-for-administrator-accounts?hl=fr) tiennent en quatre habitudes :

1. Deux comptes par super-administrateur : l’un pour l’administration, l’autre pour les mails du quotidien, là où arrive le phishing.
2. Plusieurs super-administrateurs, chacun tenu par une personne différente, pour qu’un téléphone perdu ne bloque pas l’entreprise.
3. Se connecter en super-administrateur seulement pour administrer, puis se déconnecter.
4. Deux clés de sécurité par compte super-administrateur, celle de secours rangée ailleurs.

Un rôle plus limité suffit pour réinitialiser un mot de passe. Protégez aussi l’accès à votre registrar : Google désactive par défaut la récupération des comptes super-administrateur pour les nouveaux clients, et son support vous demandera de prouver que vous contrôlez le DNS du domaine.

### 2. Imposer la validation en deux étapes à tous

Google l’impose déjà aux administrateurs. Pour les autres, allez dans **Security > Authentication > 2-step verification** (**Sécurité > Authentification > Validation en deux étapes**), laissez chacun l’activer, fixez une date limite, puis rendez-la obligatoire. Quand tout le monde a une application, une passkey ou une clé, choisissez **Any except verification codes via text, phone call** (tout sauf les codes par SMS ou appel). Mon {{< a key="two-factor-authentication-passkeys" >}}tutoriel sur la double authentification{{< /a >}} détaille le déploiement.

### 3. Activer les réglages de sécurité de Gmail

Allez dans **Apps > Google Workspace > Gmail > Safety**. Trois sections comptent :

- **Attachments** : pièces jointes chiffrées ou contenant des scripts venant d’expéditeurs non fiables, types de fichiers inhabituels.
- **Links and external images** : liens cachés derrière des URL raccourcies, images liées, avertissement avant un clic vers un domaine non fiable.
- **Spoofing and authentication** : noms de domaine qui ressemblent au vôtre, nom d’un collègue utilisé depuis une adresse extérieure (grand classique des fausses demandes de virement), mails qui se font passer pour votre domaine, mails non authentifiés.

Dans chaque section, cochez **Apply future recommended settings automatically** pour que les nouvelles protections s’activent sans vous. Choisissez ensuite l’action de chaque protection : avertissement dans la boîte de réception, dossier spam ou quarantaine, qui n’a de sens que si un administrateur examine les messages.

{{< screenshot id="secure-google-workspace-microsoft-365-01" alt="Console d’administration Google, page Safety de Gmail avec les sections Attachments, Links and external images et Spoofing and authentication" >}}

### 4. Couper le transfert automatique et vérifier DKIM

Un escroc qui entre dans une boîte mail ajoute souvent une règle qui lui copie discrètement chaque message : après une fraude au faux RIB, l’INC et Cybermalveillance.gouv.fr conseillent d’ailleurs de vérifier les règles de transfert et de filtrage. Google recommande de désactiver le transfert automatique : dans **Apps > Google Workspace > Gmail**, cherchez **Automatic forwarding** avec la barre de recherche et coupez-le, sauf vrai besoin.

Au même endroit, **Authenticate email** (**Authentifier les e-mails**) indique si DKIM signe vos mails. Sinon, générez la clé et publiez-la dans votre DNS : mon {{< a key="spf-dkim-dmarc-setup" >}}tutoriel SPF, DKIM et DMARC{{< /a >}} donne les enregistrements.

### 5. Encadrer le partage de fichiers hors de l’entreprise

Allez dans **Apps > Google Workspace > Drive and Docs > Sharing settings > Sharing options**. Le partage hors de votre organisation peut être **Off**, **On** ou **Allowlisted domains** (les seuls domaines que vous listez, comme celui de votre expert-comptable). Une équipe qui travaille avec des clients a besoin de **On**, avec la case qui commence par **Warn when files owned by users or shared drives** cochée : chacun est averti avant qu’un fichier sorte de l’entreprise, comme le recommande Google.

Pour les organisations plus grandes, Google conseille aussi l’accès restreint par défaut pour les nouveaux fichiers ; je ferais de même dans toute équipe qui détient des données clients.

{{< screenshot id="secure-google-workspace-microsoft-365-02" alt="Console d’administration Google, options de partage de Drive et Docs avec le partage hors de l’organisation sur On et la case d’avertissement cochée" >}}

### 6. Passer en revue les applications connectées

Allez dans **Security > Access and data control > API controls > Manage third-party app access** (**Sécurité > Contrôle des accès et des données > Commandes des API**). La liste montre les applications connectées avec un compte Google de l’équipe : un outil de prise de rendez-vous, un service de warm-up, une extension testée une fois. Passez celles dont vous dépendez en **Trusted** (« approuvée » dans l’aide en français) et bloquez ce que personne ne reconnaît.

{{< screenshot id="secure-google-workspace-microsoft-365-03" alt="Console d’administration Google, commandes des API, liste des applications tierces avec les statuts Trusted, Limited ou Blocked" >}}

### 7. Surveiller le centre d’alertes et les appareils

**Security > Alert center** regroupe les avertissements de Google : connexions suspectes, mots de passe divulgués, phishing signalé par vos utilisateurs. Consultez-le chaque semaine ou activez les notifications par e-mail des alertes qui comptent pour vous.

Les appareils se gèrent dans **Devices** : Business Starter et Standard incluent la gestion de base ; codes d’accès forts, règles de sécurité mobiles et effacement à distance demandent Business Plus.

## Sécuriser Microsoft 365 : les réglages, étape par étape

Microsoft répartit ces réglages entre le centre d’administration Microsoft 365, celui de Microsoft Entra, le portail Microsoft Defender (security.microsoft.com), le centre d’administration SharePoint et le portail Microsoft Purview. J’ai utilisé Microsoft pour mes propres mails et je l’ai trouvé pénible, alors voici le chemin court ; la [vue d’ensemble de la sécurité de Microsoft 365 pour les entreprises](https://learn.microsoft.com/fr-fr/microsoft-365/admin/security-and-compliance/m365b-security-overview) couvre le reste.

### 1. Des comptes d’administration séparés et peu nombreux

La personne qui a acheté l’abonnement est administrateur général (Global Administrator). Microsoft recommande :

- **Moins de cinq administrateurs généraux**, chacun avec un compte normal pour le quotidien. Un compte réservé à l’administration n’a pas besoin de licence Microsoft 365.
- **Au moins deux comptes d’accès d’urgence** qui n’appartiennent à personne : uniquement dans le cloud (adresse en .onmicrosoft.com), protégés par une passkey sur une clé de sécurité, une méthode différente de votre connexion habituelle, et jamais utilisés au quotidien.
- **Le rôle le plus restreint pour les autres** : User Administrator pour créer les comptes, Helpdesk Administrator ou Password Administrator pour les mots de passe, Billing Administrator pour les factures, attribués dans le centre d’administration Microsoft 365 sous **Roles > Role assignments**.

{{< screenshot id="secure-google-workspace-microsoft-365-04" alt="Centre d’administration Microsoft 365, page Role assignments avec des rôles comme Global Administrator, User Administrator et Helpdesk Administrator" >}}

### 2. L’authentification multifacteur pour tout le monde

Les organisations Microsoft 365 créées après octobre 2019 ont les paramètres de sécurité par défaut (security defaults) activés, sauf si quelqu’un les a coupés. Dans le centre d’administration Microsoft Entra, **Entra ID > Overview > Properties > Manage security defaults** doit afficher **Enabled**. Ils imposent Microsoft Authenticator à chacun et bloquent l’authentification héritée (étape 3).

{{< screenshot id="secure-google-workspace-microsoft-365-05" alt="Centre d’administration Microsoft Entra, onglet Properties de la page Overview avec le panneau Security defaults sur Enabled" >}}

Avec Business Premium, l’accès conditionnel les remplace par des règles que vous choisissez. Ne coupez les paramètres par défaut qu’à ce moment-là, comme le conseille Microsoft, puis créez aussitôt les stratégies depuis **Entra ID > Conditional Access > Create new policy from templates** : la catégorie Secure foundation comprend **Require multifactor authentication for admins**, **Require multifactor authentication for all users** et **Block legacy authentication**. Excluez vos comptes d’urgence des stratégies qui bloquent la connexion, et testez les règles plus strictes en mode **Report-only**.

{{< screenshot id="secure-google-workspace-microsoft-365-06" alt="Centre d’administration Microsoft Entra, modèles de stratégies d’accès conditionnel de la catégorie Secure foundation, dont Block legacy authentication" >}}

### 3. Bloquer l’authentification héritée, et trouver ce qui l’utilise encore

L’authentification héritée (legacy authentication) désigne les anciennes connexions, comme les applications de messagerie en IMAP, POP3 ou SMTP avec un simple mot de passe. Elles ne savent pas demander de second facteur : un mot de passe volé y fonctionne toujours. Les paramètres par défaut comme le modèle Block legacy authentication les bloquent.

Avant de bloquer, ouvrez **Entra ID > Monitoring & health > Sign-in logs**, ajoutez la colonne **Client App** et filtrez sur les protocoles hérités. Suspects habituels : le copieur qui envoie les scans par mail, une vieille application de messagerie sur un téléphone, un formulaire de site qui envoie par une boîte mail. Passez-les d’abord à une connexion moderne ou à un service d’envoi dédié.

### 4. Authentifier vos domaines, puis activer la stratégie Standard

Microsoft commence la protection de la messagerie par SPF, DKIM et DMARC sur chaque domaine du tenant, y compris ceux qui n’envoient jamais de mails ; le tutoriel SPF, DKIM et DMARC cité plus haut montre ses deux enregistrements DKIM.

Ensuite, dans le portail Defender, allez dans **Email & collaboration > Policies & rules > Threat policies > Preset security policies** (stratégies de sécurité prédéfinies) et activez **Standard protection** pour tous les destinataires, comme le recommande Microsoft. Strict, plus serré, vise les personnes les plus ciblées, comme celle qui valide les virements. Avec Business Premium, ces stratégies ajoutent Defender pour Office 365 : Safe Links vérifie les liens au clic, Safe Attachments ouvre les pièces jointes dans un bac à sable avant la remise, et la protection contre l’usurpation signale les mails qui imitent un collègue ou votre domaine.

{{< screenshot id="secure-google-workspace-microsoft-365-07" alt="Portail Microsoft Defender, page Preset security policies avec Standard protection activé" >}}

### 5. Bloquer le transfert automatique vers l’extérieur

Dans le portail Defender, allez dans **Email & collaboration > Policies & rules > Threat policies > Anti-spam**, ouvrez **Anti-spam outbound policy (Default)** et modifiez ses paramètres de protection. Sous **Forwarding rules**, réglez **Automatic forwarding rules** sur **Off - Forwarding is disabled**.

La valeur par défaut, **Automatic - System-controlled**, vaut Off pour les nouvelles organisations depuis 2021 mais peut encore valoir On dans les plus anciennes : Microsoft conseille donc de choisir explicitement. Off bloque les règles de boîte de réception et le transfert vers l’extérieur (l’expéditeur reçoit l’erreur 5.7.520), pas le transfert entre collègues. Une boîte qui en a vraiment besoin peut avoir sa propre stratégie sortante ; la [page de Microsoft sur le transfert externe](https://learn.microsoft.com/fr-fr/defender-office-365/outbound-spam-policies-external-email-forwarding) détaille les autres contrôles.

{{< screenshot id="secure-google-workspace-microsoft-365-08" alt="Portail Microsoft Defender, paramètres de la stratégie anti-spam sortante avec Automatic forwarding rules sur Off - Forwarding is disabled" >}}

### 6. Resserrer le partage SharePoint et OneDrive

Par défaut, le partage SharePoint et OneDrive est au niveau le plus permissif. Dans le centre d’administration SharePoint, allez dans **Policies > Sharing**. Si personne ne partage de fichiers hors de l’entreprise, Microsoft recommande le niveau le plus restrictif pour les deux. Sinon, réglez au moins le type de lien par défaut sur **Specific people** et l’autorisation par défaut sur **View**, pour qu’un lien transféré n’ouvre pas le fichier à n’importe qui.

### 7. Alertes, Secure Score, journal d’audit et appareils

- **Alert policy** (portail Defender, **Email & collaboration > Policies & rules**) contient les stratégies d’alerte par défaut de votre offre : ouvrez celles qui comptent pour vous et vérifiez qui reçoit les e-mails.
- **Microsoft Secure Score**, dans le même portail, liste des actions d’amélioration et leurs points : la suite logique de cette liste.
- **Audit**, dans le portail Microsoft Purview, enregistre qui a fait quoi. Vérifiez qu’il enregistre dès maintenant, pas le jour où vous en aurez besoin.
- **Appareils** : Basic Mobility and Security, inclus dans toutes les offres Microsoft 365 pour les entreprises, inscrit les téléphones et peut les effacer ; Business Premium ajoute Intune Plan 1 et Defender for Business.

## Trois erreurs à éviter

- **Couper les paramètres de sécurité par défaut pour régler un problème.** Cela retire l’authentification multifacteur à tout le monde : réglez plutôt le cas du copieur ou de l’application.
- **Oublier les départs.** Le compte d’un ancien collaborateur, ses appareils et ses applications connectées restent ouverts tant que vous ne les fermez pas ; ma {{< a key="offboarding-checklist" >}}checklist de départ d’un salarié ou d’un freelance{{< /a >}} les liste.
- **Prendre la suite pour une sauvegarde.** Ces réglages protègent les accès, pas les données : un dossier supprimé reste perdu. Mon {{< a key="backups-3-2-1" >}}guide de la règle de sauvegarde 3-2-1{{< /a >}} couvre les deux suites.

## Votre checklist, et quand passer la main

- **Google Workspace** : deux super-administrateurs avec compte séparé et deux clés ; validation en deux étapes imposée ; sécurité Gmail activée ; transfert automatique coupé ; DKIM actif ; avertissement de partage externe ; applications vérifiées ; alertes par e-mail.
- **Microsoft 365** : moins de cinq administrateurs généraux et deux comptes d’urgence ; paramètres par défaut ou accès conditionnel ; authentification héritée bloquée ; SPF, DKIM, DMARC et stratégie Standard ; transfert sur Off ; liens Specific people et View ; alertes et audit vérifiés.
- **Chaque mois** : relisez la liste des administrateurs et des applications connectées.

Si vous trouvez une règle de transfert que personne n’a créée, une application inconnue ou une alerte de connexion inexpliquée, arrêtez les réglages et suivez mon {{< a key="incident-response-first-hour" >}}plan de la première heure{{< /a >}}. Si des données personnelles ont été exposées, l’article 33 du RGPD peut vous obliger à notifier la CNIL dans les 72 heures ; c’est une question juridique, et cet article n’est pas un conseil juridique. Une intrusion qui dépasse une boîte mail justifie un prestataire référencé ou labellisé par Cybermalveillance.gouv.fr, ou celui que désigne votre assureur. Et si vous avez perdu le compte d’administration lui-même, c’est un dépannage informatique : je réponds le jour même ou sous 24 heures, et je vous dis si votre cas relève de quelqu’un d’autre.
