---
title: "Double authentification et passkeys : tout activer en un après-midi"
seo_title: "Activer la double authentification et les passkeys"
description: "Activer la double authentification et les passkeys sur vos e-mails, nom de domaine, banque et paiements en un après-midi, puis l’imposer à toute l’équipe."
slug: "activer-double-authentification"
translationKey: "two-factor-authentication-passkeys"
date: 2026-10-18T21:45:00+02:00
lastmod: 2026-10-18T21:45:00+02:00
category: "cybersecurity"
article_type: "tutorial"
keywords: ["activer la double authentification", "double authentification entreprise", "passkeys", "clé d’accès", "validation en deux étapes Google Workspace", "paramètres de sécurité par défaut Microsoft 365", "double authentification PME"]
summary: "Commencez par la messagerie, puis activez la double authentification sur les comptes du nom de domaine, de la banque, du site, des paiements, de la comptabilité, du stockage et des réseaux sociaux. Préférez une passkey ou une clé de sécurité, sinon une application d’authentification, et le SMS en dernier recours. Imposez-la ensuite à toute l’équipe dans Google Workspace ou Microsoft 365, avec deux méthodes et des codes de secours par compte important."
cover: "two-factor-authentication-passkeys"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé au-dessus d’une photo, avec un cadenas"
related: ["password-manager-teams", "secure-google-workspace-microsoft-365", "cybersecurity-guide", "recover-domain-name", "regain-website-access"]
services: ["rescue"]
faq:
  - q: "Quelle différence entre 2FA, double authentification, validation en deux étapes et MFA ?"
    a: "Pour une petite équipe, aucune qui compte : tous ces termes désignent une deuxième preuve demandée après le mot de passe. Google parle de validation en deux étapes, Microsoft d’authentification multifacteur (MFA) et cybermalveillance.gouv.fr de double authentification."
  - q: "Peut-on utiliser la même passkey sur son téléphone et sur son ordinateur ?"
    a: "Oui, si elle est synchronisée : une passkey enregistrée dans le trousseau iCloud, le gestionnaire de mots de passe de Google ou un gestionnaire comme Bitwarden, 1Password ou Proton Pass apparaît sur vos autres appareils connectés au même compte. Une passkey stockée sur une clé de sécurité physique reste sur cette clé : enregistrez-en une seconde."
  - q: "Les passkeys remplacent-elles complètement les mots de passe ?"
    a: "Pas encore sur la plupart des comptes : le mot de passe reste souvent en secours, alors gardez-le long, unique et dans votre gestionnaire. Certains services permettent de supprimer le mot de passe une fois la passkey créée ; ne le faites qu’avec une deuxième passkey ou une clé de sécurité enregistrée."
  - q: "La double authentification est-elle payante ?"
    a: "Non. Google, Microsoft (avec les paramètres de sécurité par défaut), les registrars, les banques, Stripe, PayPal et les principaux outils de création de site l’incluent, et Google Authenticator comme Microsoft Authenticator sont des applications gratuites. Le seul coût optionnel est une clé de sécurité physique, achetée une fois."
  - q: "Que faire si un service ne propose que le SMS ?"
    a: "Activez-le quand même : un code par SMS arrête quelqu’un qui n’a que votre mot de passe. Utilisez un numéro que l’entreprise contrôle, sachez qu’un escroc peut convaincre un opérateur de transférer un numéro sur une nouvelle carte SIM (« SIM swapping »), et vérifiez de temps en temps si le service propose enfin une application ou une passkey."
---

La double authentification (2FA) consiste à demander une deuxième preuve après le mot de passe : un code d’application, une validation sur votre téléphone, une clé de sécurité ou une passkey. Quelqu’un qui a volé ou deviné votre mot de passe reste alors à la porte. Ce guide montre comment activer la double authentification sur tous les comptes qui comptent en un après-midi, dans l’ordre qui vous protège le plus, puis comment l’imposer à toute l’équipe.

Quand un service propose les passkeys, faites-en votre accès principal : plus solides que les codes, elles sont aussi plus rapides à l’usage. Je vous montre les deux.

Plusieurs de mes clients ont fait appel à moi en urgence, après le piratage de leur site. Un piratage a bien des causes possibles, et je ne prétendrai pas qu’une deuxième preuve aurait évité chacun d’eux. Mais un mot de passe volé est l’une des portes qu’elle ferme, et la fermer vous coûte un après-midi.

Ce tutoriel est un chapitre de mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité pour les petites équipes{{< /a >}}. Il va de pair avec un {{< a key="password-manager-teams" >}}gestionnaire de mots de passe pour toute l’équipe{{< /a >}}, puisque c’est là que vous rangerez vos codes de secours.

## Quelle méthode choisir : passkeys d’abord, SMS en dernier

Cybermalveillance.gouv.fr [recommande d’activer la double authentification](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/mots-de-passe) dès qu’un service la propose. Le NCSC, l’agence britannique de cybersécurité, va plus loin depuis 2026 : il [recommande les passkeys](https://www.ncsc.gov.uk/news/ncsc-leave-passwords-in-the-past-passkeys-are-the-future) partout où un service les accepte, et la validation en deux étapes classique seulement ailleurs. Son analyse : codes par SMS ou par e-mail, codes d’application et validations par notification peuvent tous être hameçonnés, car une fausse page de connexion peut vous demander le code et s’en servir aussitôt. Les passkeys et les clés de sécurité résistent à ce phishing : elles ne fonctionnent que sur le vrai site.

| Méthode | Fonctionnement | Résiste au phishing | À utiliser pour |
|---|---|---|---|
| Passkey | Votre appareil ou votre gestionnaire de mots de passe vous connecte après votre empreinte, votre visage ou votre code | Oui | Tous les services qui la proposent |
| Clé de sécurité | Petite clé USB ou NFC que l’on touche pour confirmer (norme FIDO2) | Oui | Les comptes qui commandent tout : administrateur de la messagerie, registrar |
| Application d’authentification | Code à six chiffres qui change toutes les 30 secondes | Non | Les services sans passkey |
| Notification | Demande de validation sur le téléphone ; Microsoft Authenticator fait saisir le nombre affiché sur l’écran de connexion | Non, mais plus difficile à piéger | Microsoft 365, invites Google |
| Code par SMS ou e-mail | Code envoyé sur votre numéro ou dans votre boîte | Non, et un SMS peut être intercepté | Seulement s’il n’existe rien d’autre |

Le NCSC voit toujours dans la validation en deux étapes classique un filet de sécurité important là où les passkeys n’existent pas.

### Une passkey, en termes simples

Une passkey remplace le mot de passe par une paire de clés cryptographiques. Le site garde la moitié publique ; la moitié privée reste chez vous, sur votre appareil ou dans votre gestionnaire de mots de passe, et n’est jamais envoyée au site. À la connexion, vous confirmez avec votre empreinte, votre visage ou le code de l’appareil : il n’y a rien à taper qu’une fausse page pourrait récupérer.

Google et Microsoft les appellent « clés d’accès » en français, Apple « clés d’identification ». Les comptes Google, Microsoft et Apple les acceptent, tout comme les gestionnaires de mots de passe Bitwarden, 1Password et Proton Pass. Sur un compte Google, la passkey remplace à elle seule la deuxième étape, puisqu’elle prouve déjà que vous détenez l’appareil.

Une réserve, signalée par le NCSC : une passkey synchronisée par votre compte Apple, Google ou votre gestionnaire de mots de passe ne vaut que ce que vaut la protection de ce compte. Protégez-le en premier, avec deux méthodes.

## Activer la double authentification dans le bon ordre

Commencez par les comptes qui permettent de réinitialiser ou de prendre tous les autres. Chaque lien « mot de passe oublié » arrive dans votre boîte mail : la messagerie passe donc en premier.

| Ordre | Compte | Pourquoi à ce rang |
|---|---|---|
| 1 | Messagerie (Google ou Microsoft) | Les réinitialisations de tous les autres comptes y arrivent |
| 2 | Registrar (bureau d’enregistrement de votre nom de domaine) | Qui contrôle le domaine contrôle votre site et vos adresses e-mail |
| 3 | Banque | C’est d’ici que l’argent part |
| 4 | Outil de création de site ou hébergement | Un intrus peut défigurer le site ou y cacher du code malveillant |
| 5 | Paiements (Stripe, PayPal) | Vos versements peuvent être redirigés |
| 6 | Comptabilité et facturation | Données clients et coordonnées bancaires |
| 7 | Stockage en ligne | Contrats, pièces d’identité, devis |
| 8 | Réseaux sociaux et comptes publicitaires | Votre réputation et votre budget publicitaire |
| 9 | Le gestionnaire de mots de passe | Il garde les codes de tout le reste |

Le gestionnaire de mots de passe arrive en dernier pour une seule raison : il reste ouvert tout l’après-midi pour enregistrer les codes. S’il n’a pas encore de deuxième facteur, ajoutez-le à la fin, avant de le fermer.

### Avant de commencer

- Votre téléphone, avec une application d’authentification (Google Authenticator ou Microsoft Authenticator) ou le générateur de codes de votre gestionnaire de mots de passe.
- Votre gestionnaire de mots de passe, avec un dossier ou un coffre partagé pour les codes de secours, et la liste ci-dessus avec le responsable de chaque compte.
- En option : deux clés de sécurité pour le super-administrateur de Google Workspace ou de Microsoft 365, l’une sur vous, l’autre de secours, rangée ailleurs.

## Étape 1 : activer la validation en deux étapes sur votre compte Google

Chez Google, la double authentification s’appelle « validation en deux étapes ». Sur un compte personnel ou sur votre propre compte Google Workspace :

1. Ouvrez votre compte Google et sélectionnez **Sécurité et connexion**.
2. Sous **Comment vous connecter à Google**, sélectionnez **Activer la validation en deux étapes** et suivez les instructions.
3. Ajoutez une deuxième étape sur votre téléphone. Google conseille ses invites plutôt que les codes, car appuyer sur une invite est plus simple que saisir un code. Ajoutez aussi une application d’authentification.
4. Téléchargez ou imprimez vos codes de secours : des codes à 8 chiffres, utilisables une seule fois chacun. Rangez-les dans votre gestionnaire de mots de passe.
5. Si vous voulez un numéro de téléphone de secours, ajoutez-le maintenant : selon Google, la validation d’un numéro pour cet usage peut prendre jusqu’à sept jours.

{{< screenshot id="two-factor-authentication-passkeys-01" alt="Page Sécurité et connexion du compte Google, avec Activer la validation en deux étapes sous Comment vous connecter à Google" >}}

Sur un compte professionnel où l’option manque ou reste grisée, c’est l’administrateur Google Workspace qui décide (voir l’étape 5). Pour un compte Microsoft personnel (Outlook.com, Hotmail), l’option se trouve dans la rubrique **Sécurité** de account.microsoft.com.

## Étape 2 : associer une application d’authentification aux autres comptes

Pour les services sans passkey, l’application d’authentification prend le relais. L’association se fait presque partout de la même façon :

1. Ouvrez les réglages de sécurité du service et choisissez l’application d’authentification (l’option peut aussi s’appeler TOTP ou validation en deux étapes).
2. Un QR code s’affiche. Dans l’application, ajoutez un compte et scannez-le.
3. Saisissez le code à six chiffres affiché par l’application pour confirmer l’association.
4. Enregistrez les codes de secours fournis par le service directement dans votre gestionnaire de mots de passe.
5. Renommez l’entrée dans l’application pour distinguer les comptes : « Stripe, compte société » est plus clair qu’une adresse e-mail.

{{< screenshot id="two-factor-authentication-passkeys-02" alt="Une application d’authentification qui ajoute un compte en scannant le QR code affiché dans les réglages de double authentification d’un service" >}}

Les comptes professionnels Microsoft 365 font exception. Une fois les paramètres de sécurité par défaut activés (étape 5), chaque personne enregistre Microsoft Authenticator avec les notifications à sa prochaine connexion. L’application peut ensuite fournir aussi des codes, et d’autres applications d’authentification peuvent en générer.

## Étape 3 : créer une passkey et la tester

Commencez par votre compte Google ou Microsoft, puis cherchez « passkey » ou « clé d’accès » dans les réglages de connexion ou de sécurité de chaque service de votre liste.

1. Dans les réglages de connexion, choisissez de créer une passkey.
2. L’appareil demande où l’enregistrer : sur cet appareil, dans votre compte Apple ou Google, ou dans votre gestionnaire de mots de passe. Pour un compte professionnel, choisissez un emplacement qui survit à la perte du téléphone : un compte synchronisé ou le gestionnaire de mots de passe.
3. Confirmez avec votre empreinte, votre visage ou le code de l’appareil.
4. Déconnectez-vous, puis reconnectez-vous avec la passkey pour vérifier qu’elle fonctionne avant de compter dessus.

{{< screenshot id="two-factor-authentication-passkeys-03" alt="La fenêtre de création d’une passkey, qui demande où l’enregistrer puis une confirmation par empreinte, visage ou code de l’appareil" >}}

{{< callout type="tip" >}}Donnez à chaque compte important **deux façons d’entrer** : une passkey et une application d’authentification, ou deux clés de sécurité. Une passkey enregistrée sur un seul téléphone disparaît avec lui ; une méthode de secours fait d’un appareil perdu un simple contretemps plutôt qu’un blocage.{{< /callout >}}

## Étape 4 : passer le reste de la liste

- **Registrar.** Le réglage se trouve dans la sécurité de votre compte client, pas dans la zone DNS du domaine. Vérifiez au passage que le verrouillage du domaine et le renouvellement automatique sont actifs, et que le compte appartient à l’entreprise, avec une adresse e-mail qu’elle contrôle : {{< a key="recover-domain-name" >}}récupérer un nom de domaine auprès d’un ancien prestataire{{< /a >}} prend bien plus longtemps que le protéger aujourd’hui.
- **Banque.** Votre banque vous fait déjà confirmer connexions et paiements dans son application. Vérifiez quel téléphone reçoit ces validations (le vôtre, pas celui d’un ancien salarié) et, si votre banque le propose, exigez l’accord d’une deuxième personne pour tout nouveau bénéficiaire. C’est aussi une parade contre la {{< a key="invoice-fraud-bank-details" >}}fraude au faux RIB{{< /a >}}.
- **Site web.** Sur Squarespace (l’outil que je confie aux clients qui modifient eux-mêmes leur site), Wix et WordPress.com, la double authentification se règle dans le compte de chaque personne : chaque contributeur l’active pour sa propre connexion. Un site WordPress auto-hébergé a besoin d’une extension, par exemple Two Factor, disponible dans le répertoire de WordPress.org. Donnez aux graphistes et aux freelances leur propre accès plutôt que le vôtre : mon guide pour {{< a key="regain-website-access" >}}récupérer son site auprès d’un ancien prestataire{{< /a >}} explique pourquoi.
- **Paiements.** Dans Stripe et PayPal, préférez une application d’authentification ou une passkey au SMS quand les réglages de sécurité le permettent, et donnez à chaque collègue son propre utilisateur au lieu de l’accès du dirigeant.
- **Comptabilité, facturation et stockage en ligne.** Pennylane, Tiime, Indy, Dropbox, Box et les autres gardent des données clients et des coordonnées bancaires : cherchez le réglage dans votre profil ou dans la sécurité du compte.
- **Réseaux sociaux et publicité.** Facebook, Instagram, LinkedIn, TikTok et vos comptes publicitaires. Dans les paramètres d’entreprise de Meta, un administrateur peut exiger la double authentification de toutes les personnes qui y ont accès. Google Ads utilise votre compte Google : l’étape 1 le couvre déjà.
- **Le gestionnaire de mots de passe.** Activez son deuxième facteur, puis gardez son kit ou son code de récupération sur papier, en lieu sûr, jamais dans le coffre qu’il ouvre.

{{< callout type="note" >}}Les accès partagés sont le point faible. Si l’Instagram de l’entreprise ou le registrar envoie ses codes sur le téléphone personnel d’un salarié, déplacez-les vers un numéro de l’entreprise ou vers une entrée d’authentification du coffre partagé dès maintenant, pas le jour de son départ.{{< /callout >}}

## Étape 5 : imposer la double authentification à toute l’équipe

L’activer sur vos propres comptes vous protège. L’imposer protège aussi le collègue qui ne trouve jamais le temps de s’en occuper.

### Google Workspace

Il vous faut un compte super-administrateur. Google impose déjà lui-même la validation en deux étapes aux comptes administrateurs, dès qu’une personne est nommée administrateur.

1. Donnez une date à l’équipe et demandez à chacun d’activer la validation en deux étapes sur son compte (étape 1).
2. Dans la console d’administration, ouvrez **Menu > Sécurité > Authentification > Validation en deux étapes**, choisissez toute l’organisation ou une unité organisationnelle, et autorisez les utilisateurs à l’activer.
3. Vérifiez qui l’a activée dans **Rapports > Rapports utilisateur > Sécurité**.
4. Activez l’application forcée, tout de suite ou à partir d’une date. Google prévient qu’une date peut mettre 24 à 48 heures à s’appliquer : si l’horaire compte, choisissez l’activation immédiate.
5. Définissez une période d’inscription pour les nouveaux utilisateurs (d’un jour à six mois), pendant laquelle les nouvelles recrues se connectent avec leur seul mot de passe.
6. Dans les méthodes, retenez l’option qui exclut les codes par SMS et par appel téléphonique, une fois que chacun a une application, une passkey ou une clé de sécurité.
7. Enregistrez. La [documentation de Google](https://knowledge.workspace.google.com/admin/security/deploy-2-step-verification?hl=fr) détaille les autres options.

{{< screenshot id="two-factor-authentication-passkeys-04" alt="Réglages de la validation en deux étapes dans la console d’administration Google : application forcée, période d’inscription et méthodes autorisées" >}}

### Microsoft 365

Les paramètres de sécurité par défaut sont gratuits et activent l’authentification multifacteur pour tout le locataire (tenant) d’un coup. Ils conviennent à une équipe qui n’utilise pas l’accès conditionnel.

1. Prévenez l’équipe du jour et de l’heure, et vérifiez que chacun a installé Microsoft Authenticator sur son téléphone.
2. Connectez-vous au centre d’administration Microsoft Entra avec un compte administrateur et ouvrez **Entra ID > Vue d’ensemble > Propriétés**, puis **Gérer les paramètres de sécurité par défaut** (dans l’interface en anglais : Overview > Properties > Manage security defaults).
3. Passez les paramètres de sécurité par défaut sur **Activé** et enregistrez.
4. Microsoft recommande ensuite de révoquer les sessions en cours, pour que chacun se reconnecte avec le deuxième facteur.

{{< callout type="warning" >}}**Il n’y a plus de délai de grâce.** Depuis le 29 juillet 2024, Microsoft ne laisse plus 14 jours aux utilisateurs pour s’inscrire : une fois les paramètres de sécurité par défaut activés, chacun doit configurer Microsoft Authenticator à sa prochaine connexion. Activez-les à un moment où vous pouvez répondre aux questions.{{< /callout >}}

La [page de Microsoft sur les paramètres de sécurité par défaut](https://learn.microsoft.com/fr-fr/entra/fundamentals/security-defaults) liste précisément ce qu’ils activent. Avec Microsoft 365 Business Premium, l’accès conditionnel (compris dans sa licence Microsoft Entra ID P1) permet des règles plus fines, par exemple des méthodes résistantes au phishing pour les administrateurs, une fois les paramètres de sécurité par défaut désactivés. Mon guide des {{< a key="secure-google-workspace-microsoft-365" >}}réglages d’administration de Google Workspace et Microsoft 365{{< /a >}} couvre le reste de la console.

## Codes de secours, téléphone perdu et départs

### Où ranger les codes de secours

Dans le gestionnaire de mots de passe, dans un coffre que vous et une autre personne de confiance pouvez ouvrir, jamais dans un fichier sur le bureau ou dans votre boîte mail. Chaque code de secours Google ne sert qu’une fois, et une nouvelle série annule l’ancienne. Seule exception : le kit de récupération du gestionnaire lui-même se garde sur papier, en lieu sûr.

### Téléphone perdu ou remplacé

1. Connectez-vous avec votre deuxième méthode ou un code de secours.
2. Dans les réglages de sécurité du compte, retirez le téléphone perdu et déconnectez toute session que vous ne reconnaissez pas.
3. Associez l’application d’authentification au nouveau téléphone, et activez sa sauvegarde ou son transfert si elle en propose.
4. Pour un collègue bloqué, un administrateur Google Workspace peut lui générer des codes de secours, et un administrateur Microsoft 365 peut lui faire enregistrer à nouveau ses méthodes.

### Quand quelqu’un quitte l’équipe

Le jour du départ, retirez ses accès, ses appareils enregistrés et ses clés de sécurité ; avant ce jour-là, déplacez les codes des comptes partagés qui arrivent encore sur son téléphone. La {{< a key="offboarding-checklist" >}}checklist de départ d’un salarié ou d’un freelance{{< /a >}} liste tous les accès à fermer.

## Votre checklist pour l’après-midi

- Messagerie : validation en deux étapes activée, une passkey, une application d’authentification et les codes de secours enregistrés.
- Registrar et banque : deuxième facteur activé, verrouillage du domaine et renouvellement automatique vérifiés, validations bancaires sur un téléphone que l’entreprise contrôle.
- Tout le reste de la liste : deuxième facteur activé, un accès par personne, kit de récupération du gestionnaire de mots de passe sur papier.
- Équipe : application forcée dans Google Workspace ou paramètres de sécurité par défaut dans Microsoft 365, et SMS exclu dès que chacun a une application ou une passkey.
- Chaque compte important : deux méthodes enregistrées, codes de secours dans le coffre partagé.
- Dans six mois : vérifiez quels services ont ajouté les passkeys, et passez-y.

Si vous avez déjà perdu l’accès à un compte, ou si un ancien prestataire garde le téléphone qui reçoit les codes, un après-midi ne suffira pas : c’est un dépannage, et j’y réponds le jour même ou sous 24 heures.
