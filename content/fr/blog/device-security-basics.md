---
title: "Ordinateurs et téléphones sans service informatique : les bases de la sécurité"
seo_title: "Sécuriser un ordinateur portable d’entreprise : la checklist"
description: "Sécuriser un ordinateur portable d’entreprise sans service informatique : mises à jour, chiffrement, verrouillage, Windows 10, téléphones, perte et BYOD."
slug: "securiser-ordinateur-portable-entreprise"
translationKey: "device-security-basics"
date: 2026-10-18T22:03:00+02:00
lastmod: 2026-10-18T22:03:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["sécuriser ordinateur portable entreprise", "sécurité ordinateur portable professionnel", "sécurité smartphone professionnel", "chiffrement ordinateur portable", "fin de support Windows 10 entreprise", "BYOD sécurité TPE"]
summary: "Six réglages couvrent l’essentiel du risque sur un ordinateur portable : mises à jour automatiques, chiffrement du disque (FileVault sur Mac, BitLocker sur Windows), verrouillage après cinq minutes, compte standard au quotidien, antivirus intégré, localisation et effacement à distance. Pour les téléphones : mises à jour, code d’au moins six chiffres, stores officiels. Au 19 octobre 2026, un PC Windows 10 professionnel doit passer à Windows 11, payer des mises à jour étendues ou être remplacé."
cover: "device-security-basics"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé au-dessus d’une photo, avec un bouclier et une coche"
related: ["cybersecurity-guide", "password-manager-teams", "two-factor-authentication-passkeys", "offboarding-checklist", "backups-3-2-1"]
services: ["rescue"]
faq:
  - q: "Un Mac est-il plus sûr qu’un PC Windows pour une petite équipe ?"
    a: "Aucun des deux n’est sûr ou dangereux par nature. Les deux intègrent chiffrement du disque, antivirus et mises à jour automatiques, et les deux sont visés par des attaques. Ce qui vous protège, c’est la même courte liste sur l’un comme sur l’autre : mises à jour, disque chiffré, écran verrouillé et travail quotidien sur un compte standard."
  - q: "Faut-il séparer navigation pro et perso dans le navigateur ?"
    a: "Oui, avec des profils de navigateur distincts : Chrome, Edge et Firefox en proposent, et Safari depuis macOS Sonoma. Favoris, identifiants enregistrés et extensions restent séparés, et une extension installée pour un usage personnel ne peut pas lire vos pages de travail."
  - q: "Mon employeur peut-il effacer mon téléphone personnel ?"
    a: "Avec le profil professionnel d’Android ou l’inscription d’Apple prévue pour les appareils personnels, l’entreprise ne peut retirer que les applications et les données de travail, pas vos photos ni vos applications personnelles. L’inscription complète, conçue pour les téléphones de l’entreprise, permet un effacement total : demandez laquelle on vous propose."
  - q: "Que faire avant de vendre ou de recycler un vieil ordinateur portable ?"
    a: "Sauvegardez-le et déconnectez vos comptes (sur Mac, déconnectez votre compte Apple pour que le prochain propriétaire ne soit pas bloqué par le verrouillage d’activation). Effacez-le ensuite : sur Mac, Réglages Système > Général > Transférer ou réinitialiser > Effacer contenu et réglages ; sous Windows 11, Paramètres > Système > Récupération > Réinitialiser ce PC > Supprimer tout. Retirez-le aussi de votre liste d’appareils."
---

Sans service informatique, la sécurité de votre entreprise repose sur quelques ordinateurs portables et téléphones, configurés par la personne qui les a sortis du carton. Les protections utiles sont intégrées à Windows, macOS, iOS et Android : elles sont gratuites, et les activer prend environ une heure par appareil.

Ce guide montre comment sécuriser un ordinateur portable d’entreprise, Mac ou PC, puis les téléphones, la perte ou le vol, les appareils personnels et le Wi-Fi public, pour les équipes de deux à vingt personnes où personne n’a l’informatique pour métier.

Il fait partie de mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité pour les petites équipes{{< /a >}}. Pour aller plus loin, l’ANSSI détaille ces mesures dans son guide d’hygiène informatique.

## Les mises à jour d’abord, navigateur et applications compris

La plupart des attaques contre un ordinateur portable exploitent des failles déjà corrigées. Les mises à jour automatiques sont le réglage qui protège le plus, et elles ne s’appliquent qu’au redémarrage.

- Windows 11 : Paramètres > Windows Update. Réglez vos **heures d’activité** (dans les options avancées) pour que les redémarrages tombent hors de vos heures de travail, et cessez de les repousser.
- Mac : Réglages Système > Général > Mise à jour de logiciels, puis le bouton d’information à côté de **Mises à jour automatiques** : activez toutes les options.
- Navigateurs et applications : Chrome, Edge, Firefox et Safari appliquent leurs mises à jour quand vous les fermez et les rouvrez, si bien qu’un navigateur ouvert depuis un mois a un mois de retard. Désinstallez les applications que personne n’utilise.

Ignorez toute fenêtre qui surgit pendant votre navigation pour proposer une mise à jour urgente : Cybermalveillance.gouv.fr la range parmi les pièges classiques. Les vraies mises à jour passent par les réglages du système ou par l’application elle-même.

Apple ne publie aucune date de fin de support : prévoyez de remplacer un Mac ou un iPhone qui ne peut plus installer la version actuelle de son système. Avant d’acheter un téléphone Android, vérifiez combien de temps le fabricant promet des mises à jour de sécurité.

### Les PC encore sous Windows 10

Microsoft a mis fin au support de Windows 10 le 14 octobre 2025 ([page de fin de support de Microsoft](https://www.microsoft.com/fr-fr/windows/end-of-support)). Au 19 octobre 2026, un PC professionnel encore sous Windows 10 a trois options :

1. **Passer à Windows 11**, gratuitement si le PC remplit les conditions : l’application Contrôle d’intégrité du PC de Microsoft vous le dit en une minute.
2. **Payer les mises à jour de sécurité étendues (ESU).** Pour les organisations, Microsoft a fixé la première année à 61 dollars par appareil et double le prix chaque année. La deuxième année a commencé le 14 octobre 2026 à 122 dollars par appareil et ne s’achète pas sans la première : un PC jamais inscrit coûte donc 183 dollars. Microsoft publie ces tarifs en dollars.
3. **Remplacer le PC.** Face à cette facture, je conseille en général de remplacer un vieil ordinateur portable.

{{< callout type="warning" >}}Pour les particuliers, les mises à jour étendues sont gratuites avec un compte Microsoft et courent désormais jusqu’au 12 octobre 2027. Elles ne couvrent pas les PC de travail : Microsoft exclut **les appareils gérés par une organisation** et précise que ce programme ne peut pas servir dans un cadre commercial.{{< /callout >}}

## Chiffrement : ce qui protège un ordinateur oublié dans le train

Sans chiffrement, la personne qui récupère votre ordinateur peut retirer le disque, ou démarrer la machine sur une clé USB, et lire vos fichiers sans votre mot de passe. Avec le chiffrement, elle n’obtient que des données illisibles, et vous ne voyez aucune différence au quotidien.

- Mac : Réglages Système > Confidentialité et sécurité > **FileVault**, puis Activer.
- Windows 11 Famille : Paramètres > Confidentialité et sécurité > **Chiffrement de l’appareil**, sur les PC compatibles. Il faut un compte Microsoft, sur lequel Windows enregistre la clé de récupération.
- Windows 11 Professionnel : **BitLocker** (tapez « Gérer BitLocker » dans le menu Démarrer), qui vous laisse choisir où enregistrer la clé de récupération.
- Téléphones : les iPhone et les téléphones Android récents chiffrent leur stockage, et c’est le code qui protège la clé.

Après une réparation ou une mise à jour du micrologiciel, l’ordinateur peut demander sa clé de récupération, et sans elle les données sont perdues. Rangez chaque clé dans le gestionnaire de mots de passe de l’équipe, avec le nom de l’appareil (mon {{< a key="password-manager-teams" >}}comparatif des gestionnaires de mots de passe pour une équipe{{< /a >}} détaille les coffres partagés). Les clés enregistrées sur un compte Microsoft sont listées sur account.microsoft.com/devices/recoverykey.

L’article 32 du [RGPD](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679) cite le chiffrement parmi les mesures de sécurité appropriées et, au 19 octobre 2026, l’article 34, paragraphe 3, point a), vous dispense d’informer les personnes concernées quand l’appareil perdu était chiffré et que son mot de passe n’a pas été perdu avec lui. Vous inscrivez quand même l’incident dans votre registre des violations, comme l’explique mon {{< a key="incident-response-first-hour" >}}plan de la première heure{{< /a >}}. Ceci est une information générale, pas un conseil juridique : si l’appareil contenait des données sensibles, comme des données de santé, demandez l’avis de votre DPO ou d’un avocat.

## Verrouillage de l’écran, compte standard et antivirus intégré

Ces trois réglages arrêtent la plupart des attaques d’opportunité.

- **Un verrouillage de l’écran après cinq minutes au plus.** Mac : Réglages Système > Écran verrouillé. Windows : Paramètres > Comptes > Options de connexion, et Paramètres > Système > Alimentation et batterie pour la mise en veille de l’écran. Verrouillez à la main quand vous vous levez : touche Windows + L, ou Contrôle + Commande + Q sur Mac.
- **Un compte standard pour le travail quotidien.** Depuis un compte administrateur, tout programme malveillant que vous ouvrez hérite des droits d’administrateur. Créez un compte administrateur séparé pour installer des logiciels (Windows : Paramètres > Comptes > Autres utilisateurs ; Mac : Réglages Système > Utilisateurs et groupes) et passez votre compte quotidien en Standard. Quand quelque chose essaie de s’installer, la demande de mot de passe est le moment de réfléchir à deux fois.
- **L’antivirus intégré, activé.** Windows inclut l’Antivirus Microsoft Defender (dans l’application Sécurité Windows), macOS dispose de XProtect et de Gatekeeper. Avec les mises à jour activées, ils suffisent à la plupart des petites équipes. Un antivirus tiers gratuit désactive Defender au lieu de s’y ajouter, et certains affichent de la publicité : je ne ferais pas l’échange.

## Téléphones : mises à jour, vrai code et stores officiels

Un téléphone professionnel contient vos e-mails, votre application bancaire et vos codes de double authentification : c’est l’appareil le plus précieux que vous ayez sur vous.

1. Les mises à jour automatiques du système et des applications. L’ANSSI conseille aussi de redémarrer régulièrement son téléphone.
2. **Un code d’au moins six chiffres**, avec Face ID ou l’empreinte digitale au quotidien. Quatre chiffres ou un schéma se lisent trop facilement par-dessus l’épaule.
3. Des applications de l’App Store ou de Google Play uniquement, en regardant les autorisations demandées : une lampe torche n’a aucune raison de lire vos contacts.
4. La protection contre le vol : sur iPhone, Réglages > Face ID et code > Protection en cas de vol de l’appareil exige Face ID ou Touch ID, sans repli sur le code, avant les modifications sensibles loin de vos lieux habituels. Android propose des réglages comparables.
5. Les aperçus de notifications masqués sur l’écran verrouillé, pour que personne ne lise un code de connexion sans votre visage ou votre code.

Cybermalveillance.gouv.fr résume ces bonnes pratiques dans sa fiche [Protéger ses appareils mobiles](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/appareils-mobiles). Pour les comptes eux-mêmes, activez la double authentification ou les passkeys : mon {{< a key="two-factor-authentication-passkeys" >}}plan pour tout activer en un après-midi{{< /a >}} passe service par service.

## Perte ou vol : activez dès maintenant la localisation et l’effacement à distance

Localiser, verrouiller et effacer un appareil ne fonctionne que si la fonction était activée avant sa disparition.

| Appareil | Où l’activer | Ce que vous pouvez faire à distance |
|---|---|---|
| iPhone | Réglages > votre nom > Localiser | Localiser, signaler comme perdu, effacer |
| Mac | Réglages Système > votre nom > iCloud > Localiser mon Mac | Localiser, verrouiller, effacer |
| Téléphone Android | Find Hub de Google (anciennement Localiser mon appareil) | Localiser, verrouiller, effacer |
| PC Windows | Paramètres > Confidentialité et sécurité > Localiser mon appareil | Localiser et verrouiller depuis votre compte Microsoft |

Tenez **une liste simple de tous les appareils** : qui l’a, son numéro de série, sa version du système, chiffrement activé ou non. C’est ce qu’il vous faudra le jour où un ordinateur disparaît ou quelqu’un s’en va, et ma {{< a key="offboarding-checklist" >}}checklist de départ d’un salarié ou d’un freelance{{< /a >}} part de cette liste. Si un appareil disparaît, le plan de la première heure cité plus haut donne les étapes dans l’ordre.

## Gérer les appareils sans service informatique

Au-delà de quelques appareils, vérifier chacun à la main ne tient plus. La gestion des appareils (souvent appelée MDM) permet à une seule personne d’imposer un code, de voir quels appareils sont en retard de mises à jour et d’effacer à distance les données de travail. L’ANSSI recommande d’ailleurs une gestion centralisée pour une flotte de téléphones professionnels. Vous payez peut-être déjà une version de base :

- Google Workspace : Business Starter et Business Standard incluent une gestion des appareils dite fondamentale ; Business Plus ajoute la gestion avancée, avec l’obligation de codes forts, des règles de sécurité pour les mobiles et l’effacement à distance.
- Microsoft 365 : tous les forfaits Business incluent Basic Mobility and Security, un sous-ensemble gratuit d’Intune qui peut effacer les appareils inscrits ; Business Premium ajoute Intune Plan 1 et Defender for Business.
- Apple : depuis le 14 avril 2026, la plateforme gratuite Apple Business remplace Apple Business Manager et inclut la gestion des Mac, iPhone et iPad. Elle couvre l’essentiel ; les PC Windows et les téléphones Android demandent toujours Intune ou les outils de Google.

Pour trois personnes, la liste des appareils et une vérification chaque trimestre suffisent. **À partir de cinq ou six appareils, ou dès que des données clients vivent sur des téléphones**, j’activerais la gestion déjà incluse dans votre suite ; mon guide pour {{< a key="secure-google-workspace-microsoft-365" >}}sécuriser Google Workspace et Microsoft 365{{< /a >}} couvre la partie administration.

## Appareils personnels au travail : écrivez les règles

La plupart des petites équipes fonctionnent avec des téléphones personnels, et certaines avec des ordinateurs personnels. L’ANSSI recommande de ne pas mélanger comptes professionnels et personnels sur un même appareil ; à défaut, quelques règles lues par tous limitent le risque :

- l’appareil a ses mises à jour, son code et son chiffrement activés, comme un appareil de l’entreprise ;
- les données de travail restent dans les comptes et applications de travail, pas dans un cloud personnel ni sur un compte partagé en famille ;
- sur les téléphones, les applications professionnelles vivent dans un espace séparé : le profil professionnel d’Android, ou l’inscription d’Apple prévue pour les appareils personnels ;
- quand quelqu’un part, ses accès professionnels sont coupés le jour même, et les données de travail de son appareil supprimées.

Le risque n’a rien de théorique. En décembre 2025, l’ICO, l’autorité britannique de protection des données, a sanctionné LastPass UK pour sa fuite de 2022 : l’attaquant était passé de l’ordinateur d’un salarié à l’appareil personnel d’un cadre, où il avait obtenu son mot de passe maître ([annonce de l’ICO, en anglais](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2025/12/password-manager-provider-fined/)). Au regard du RGPD, les données de vos clients sur un téléphone personnel restent sous la responsabilité de votre entreprise.

## Wi-Fi public, VPN, clés USB et bornes de recharge

Chacun de ces sujets inquiète plus qu’il ne le mérite, avec un vrai point d’attention :

- Wi-Fi public : presque tous les sites et applications chiffrent désormais leurs échanges, et le réseau d’un café ne peut pas lire vos e-mails. Restent les faux points d’accès qui imitent le nom du vrai, et les pages de connexion qui demandent le mot de passe d’un compte. Pour tout ce qui est sensible, passez par le partage de connexion de votre téléphone.
- VPN : utile quand votre entreprise en fournit un pour accéder à des systèmes internes. **J’éviterais les VPN gratuits** : tout votre trafic passe par une société dont vous ne connaissez pas le modèle économique.
- Clés USB : ne branchez jamais une clé trouvée ou inattendue, et gardez une clé pour le travail et une autre pour le personnel, comme le conseille Cybermalveillance.gouv.fr.
- Bornes de recharge publiques : utilisez votre propre prise et votre adaptateur. Sur un port USB public, un câble de charge seule règle la question ; refusez toute demande « Faire confiance à cet ordinateur » que vous n’attendiez pas.

## La checklist pour sécuriser un ordinateur portable d’entreprise

Passez-la une fois par appareil, puis tous les trois mois :

1. Mises à jour automatiques activées pour le système, le navigateur et les applications, et un redémarrage cette semaine.
2. Aucun PC sous Windows 10 sans plan.
3. Disque chiffré, clé de récupération dans le gestionnaire de mots de passe.
4. Écran verrouillé après cinq minutes au plus, et un compte standard au quotidien.
5. Antivirus intégré activé, aucun module de « sécurité » inconnu.
6. Localiser, Find Hub ou Localiser mon appareil activé, et testé une fois.
7. Téléphones : code d’au moins six chiffres, protection contre le vol, aperçus masqués.
8. Chaque appareil sur la liste, avec son utilisateur et son numéro de série.
9. Appareils personnels : règles écrites et acceptées.
10. Fichiers de l’ordinateur sauvegardés : mon {{< a key="backups-3-2-1" >}}guide de la règle de sauvegarde 3-2-1{{< /a >}} explique comment.

Vous n’avez besoin ni de moi ni de personne pour cette liste : c’est un après-midi de travail pour une petite équipe. Faites appel à de l’aide quand un appareil se comporte bizarrement après un e-mail suspect, quand un ordinateur contenant des données clients a disparu et que vous ne savez pas quoi déclarer, ou pour mettre en place la gestion d’un parc mêlant Mac, PC et téléphones.
