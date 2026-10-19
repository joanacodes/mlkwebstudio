---
title: "Sauvegardes : la règle 3-2-1 pour une petite équipe (fichiers, Google Workspace, Microsoft 365)"
seo_title: "Règle de sauvegarde 3-2-1 : Google Workspace, Microsoft 365"
description: "La règle de sauvegarde 3-2-1 pour une TPE : ce que Google Workspace et Microsoft 365 gardent vraiment, ordinateurs, copie hors ligne et test de restauration."
slug: "regle-sauvegarde-3-2-1"
translationKey: "backups-3-2-1"
date: 2026-10-18T21:54:00+02:00
lastmod: 2026-10-18T21:54:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["règle de sauvegarde 3-2-1", "sauvegarde TPE", "sauvegarde Google Workspace", "sauvegarde Microsoft 365", "règle 3-2-1-1-0", "synchronisation et sauvegarde"]
summary: "La règle de sauvegarde 3-2-1, c’est trois copies de vos données, sur deux types de supports, dont une hors de vos locaux, idéalement hors ligne ou impossible à modifier. Google Workspace et Microsoft 365 ne gardent les éléments supprimés que quelques semaines ou quelques mois, et la synchronisation recopie aussi suppressions et rançongiciels : sauvegardez votre suite cloud autant que vos ordinateurs. Testez une restauration chaque trimestre."
cover: "backups-3-2-1"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé au-dessus d’une photo, avec le quadrillage d’un plan technique et une cible"
related: ["cybersecurity-guide", "secure-google-workspace-microsoft-365", "incident-response-first-hour", "website-security-guide", "infomaniak-review"]
services: ["rescue"]
faq:
  - q: "Quelle différence entre une sauvegarde et un archivage ?"
    a: "Une sauvegarde est une copie récente, faite pour restaurer des données après une perte ; les anciennes versions sont effacées selon un calendrier. L’archivage sort des données de l’usage courant pour les conserver longtemps, souvent pour des raisons légales ou comptables. Il faut en général les deux, et l’un ne remplace pas l’autre."
  - q: "Faut-il chiffrer ses sauvegardes ?"
    a: "Oui, dès qu’elles quittent l’ordinateur : un disque externe se perd, un compte cloud peut être piraté. Activez l’option de chiffrement de votre outil ou de votre service de sauvegarde, puis gardez le mot de passe dans votre gestionnaire de mots de passe et sur papier en lieu sûr : sans lui, la sauvegarde est irrécupérable."
  - q: "Combien de temps garder ses sauvegardes ?"
    a: "Assez longtemps pour revenir avant un problème découvert tard, comme un fichier écrasé il y a des semaines ou un rançongiciel resté discret. Un schéma courant : des versions quotidiennes sur un mois et des copies mensuelles sur un an. Les sauvegardes qui contiennent des données personnelles restent soumises à vos durées de conservation : ne les gardez pas indéfiniment « au cas où »."
  - q: "Un NAS en RAID, est-ce une sauvegarde ?"
    a: "Non. Le RAID combine plusieurs disques pour que, dans la plupart des configurations, l’appareil continue de fonctionner si l’un d’eux tombe en panne. Une suppression, un fichier corrompu ou un rançongiciel touche tous les disques à la fois : le NAS compte pour une seule copie, à sauvegarder ailleurs."
---

La règle de sauvegarde 3-2-1 est la plus simple qui soit : trois copies de vos données, sur deux types de supports différents, dont une hors de vos locaux. Elle protège une petite équipe contre les vraies causes de perte de fichiers : un dossier partagé supprimé par erreur, un ordinateur portable volé dans une voiture, un rançongiciel qui chiffre tout ce qu’il atteint, ou le compte d’un salarié parti, supprimé avec la seule copie d’un dossier client.

Beaucoup d’équipes se croient protégées parce que « tout est dans le cloud ». Google Workspace et Microsoft 365 gardent les fichiers supprimés quelques semaines ou quelques mois, pas des années, et la synchronisation recopie vos erreurs aussi fidèlement que votre travail.

Ce guide applique la règle à Google Workspace, à Microsoft 365 et aux ordinateurs, avec un plan pour une équipe de cinq personnes et un test de restauration trimestriel. Il fait partie de mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité pour les petites équipes{{< /a >}}.

## La règle de sauvegarde 3-2-1, en clair

Chaque chiffre répond à une façon différente de perdre des données.

| Règle | En pratique | Vous protège contre |
|---|---|---|
| 3 copies | L’original et deux sauvegardes | Une copie supprimée, corrompue ou chiffrée |
| 2 types de supports | Par exemple un service cloud et un disque externe | La panne d’une technologie ou d’un fournisseur |
| 1 copie hors site | Un autre bâtiment ou un autre fournisseur | Incendie, dégât des eaux, vol ou cambriolage au bureau |

Une sauvegarde est une copie séparée de l’original, qui permet de retrouver vos données telles qu’elles étaient à une date choisie. L’ANSSI recommande la règle 3-2-1 dans son guide [Les fondamentaux de la sauvegarde des systèmes d’information](https://messervices.cyber.gouv.fr/documents-guides/anssi_fondamentaux_sauvegarde_systemes_dinformation_v1.1.pdf), avec une précision à retenir : au moins une des sauvegardes doit être hors ligne, c’est-à-dire déconnectée de votre réseau et de vos comptes.

C’est tout l’objet de la version étendue, **3-2-1-1-0** : une copie hors ligne ou immuable, et zéro erreur au test de restauration. Une sauvegarde immuable ne peut être ni modifiée ni supprimée avant une date que vous fixez, pas même par un administrateur. C’est elle qui survit quand un rançongiciel ou un intrus dispose de votre mot de passe administrateur.

## Synchroniser n’est pas sauvegarder

Google Drive, OneDrive et Dropbox gardent les mêmes fichiers sur votre ordinateur et dans le cloud : une modification d’un côté est recopiée de l’autre en quelques secondes. Parfait pour travailler à plusieurs, inutile face aux accidents les plus courants :

- vous supprimez un dossier, il disparaît partout ;
- un rançongiciel chiffre votre ordinateur, et les fichiers chiffrés remplacent les bons dans le cloud ;
- quelqu’un enregistre par-dessus un tableau, et l’ancienne version disparaît de tous les appareils.

La corbeille et l’historique des versions sont des filets de sécurité, pas des sauvegardes : même fournisseur, même compte administrateur, vidage automatique au bout d’un délai fixe. Ils rattrapent l’erreur remarquée rapidement. Si un rançongiciel s’affiche déjà sur votre écran, suivez mon {{< a key="incident-response-first-hour" >}}plan de la première heure{{< /a >}} avant de toucher à vos sauvegardes.

## Google Workspace : ce que Google peut restaurer, et pendant combien de temps

Au 19 octobre 2026, les filets de sécurité de Google fonctionnent ainsi :

1. Un fichier ou un e-mail supprimé part dans la corbeille, où il reste 30 jours.
2. Une fois l’élément sorti de la corbeille, un administrateur peut encore le restaurer pendant 25 jours depuis la console d’administration : ouvrez le compte de l’utilisateur, lancez la restauration des données, puis choisissez une période et l’application, Drive ou Gmail. Google rétablit tout ce qui a été supprimé sur cette période, pas un fichier précis, et une grosse restauration peut prendre plusieurs jours, selon [l’aide de Google pour les administrateurs](https://knowledge.workspace.google.com/admin/drive/recover-deleted-files-and-folders-for-drive-users?hl=fr).
3. Ensuite, les données sont effacées définitivement.

Google Vault, inclus à partir de Business Plus, passe souvent pour une sauvegarde, mais c’est un outil de conservation et d’eDiscovery, conçu pour les litiges et les recherches : la FAQ de Vault renvoie elle-même vers la console d’administration pour les données Gmail ou Drive supprimées depuis moins de 25 jours, et précise que Vault n’a pas d’outil de récupération automatisé. Pour remonter plus loin, il vous faut votre propre sauvegarde.

{{< callout type="warning" >}}**Ne supprimez pas tout de suite le compte d’un salarié qui part.** Une fois un utilisateur Google Workspace supprimé, vous avez 20 jours pour restaurer le compte et ses fichiers. Transférez d’abord ses fichiers à un collègue, puis suivez ma {{< a key="offboarding-checklist" >}}checklist de départ{{< /a >}} pour le reste.{{< /callout >}}

## Microsoft 365 : la rétention n’est pas une sauvegarde

Les filets de Microsoft durent plus longtemps, mais restent limités, au 19 octobre 2026 :

- OneDrive et SharePoint gardent les fichiers supprimés 93 jours dans la corbeille pour les comptes professionnels, sauf si votre administrateur a modifié ce réglage.
- La fonction de restauration de OneDrive ramène tout un OneDrive à un moment des 30 derniers jours : c’est celle à connaître après un rançongiciel.
- Un e-mail supprimé du dossier Éléments supprimés reste récupérable 14 jours par défaut, jusqu’à 30 si votre administrateur augmente ce réglage.
- Les stratégies de rétention, réglées dans Microsoft Purview, empêchent la suppression définitive d’un contenu pendant une durée fixée. Elles servent à la conformité et aux litiges, pas à remettre un dossier dans l’état où il était mardi.

Microsoft vend aussi **Microsoft 365 Backup**, un service payant pour OneDrive, SharePoint et Exchange Online, activé depuis le centre d’administration Microsoft 365 et facturé à l’usage via un abonnement Azure. À l’heure où j’écris ces lignes (octobre 2026), [la page de tarification de Microsoft](https://learn.microsoft.com/microsoft-365/backup/backup-pricing) indique 0,15 $ (environ 0,13 €) par Go de contenu protégé et par mois, un prix publié en dollars ; les éléments des corbeilles et les archives des boîtes aux lettres entrent dans le volume facturé, et les restaurations sont gratuites. C’est une deuxième copie utile, conservée un an et verrouillée contre toute modification, mais Microsoft la détient et vos propres comptes administrateurs la gèrent : ce n’est pas votre copie hors d’atteinte.

Les réglages d’administration qui rendent ces restaurations possibles sont dans mon guide pour {{< a key="secure-google-workspace-microsoft-365" >}}sécuriser Google Workspace et Microsoft 365{{< /a >}}.

## Sauvegarder votre suite en dehors de Google et Microsoft

Pour une copie hors de portée de votre fournisseur, passez par un service de sauvegarde « cloud à cloud » : il se connecte à votre suite par la console d’administration, copie chaque jour les e-mails, les fichiers, les agendas et les contacts, et garde des versions sur son propre stockage. Acronis, Backupify, IDrive, Spin.ai et Veeam font partie des éditeurs. Je ne les classe pas ; comparez-les sur ces points :

- ce qu’il couvre : votre suite (certains ne couvrent que Microsoft 365 ou que Google Workspace), boîtes mail, Drive partagés ou sites SharePoint, agendas, contacts ;
- la fréquence des sauvegardes et la durée de conservation des versions ;
- le lieu de stockage, et la possibilité de choisir un centre de données en Europe ;
- ce que vous pouvez restaurer : un fichier, un e-mail ou un compte entier ;
- un identifiant administrateur propre, avec double authentification ;
- la façon de récupérer vos données si vous arrêtez l’abonnement.

La plupart facturent par utilisateur et par mois.

## Ordinateurs portables : Time Machine, Historique des fichiers et disque externe

Les ordinateurs portables contiennent plus de données uniques qu’on ne le croit : téléchargements, dossiers sur le bureau, le fichier que personne n’a rangé dans l’espace partagé. Enregistrez les fichiers de travail dans l’espace partagé, puis ajoutez une sauvegarde locale :

- **Mac** : Time Machine est intégré à macOS. Choisissez un disque externe dans ses réglages et activez l’option de chiffrement des sauvegardes. Il conserve ensuite des sauvegardes horaires sur les dernières 24 heures, quotidiennes sur le dernier mois et hebdomadaires pour les mois précédents, en effaçant les plus anciennes quand le disque est plein. Apple recommande un disque d’au moins deux fois la capacité de stockage de votre Mac.
- **Windows 11** : l’Historique des fichiers garde des versions de vos fichiers sur un disque externe ou un emplacement réseau. L’application Sauvegarde Windows copie vos principaux dossiers et vos paramètres sur OneDrive, pratique pour installer un nouveau PC, mais c’est une synchronisation vers le cloud, pas une copie séparée, et la sauvegarde des dossiers n’est pas disponible pour les comptes professionnels ou scolaires.

Un disque externe couvre le cas de l’ordinateur volé, mais il se trouve dans le même bureau et, s’il reste branché, un rançongiciel peut le chiffrer aussi. Branchez-le pour la sauvegarde, puis débranchez-le.

## La copie hors d’atteinte : hors site et hors ligne

C’est la copie qui vous sauve quand tout le reste est touché en même temps. Trois façons de l’obtenir :

1. **Deux disques externes chiffrés en rotation** : l’un au bureau pour la sauvegarde, l’autre à la maison, échangés chaque semaine. Peu coûteux et hors ligne par nature, mais il faut que quelqu’un y pense.
2. **Une sauvegarde cloud avec versions et immuabilité**, parfois appelée verrouillage d’objet (object lock), pour que même votre propre mot de passe ne puisse pas effacer les copies avant l’heure.
3. **Un autre fournisseur, ailleurs.** Infomaniak, l’entreprise suisse derrière SwissTransfer et un fournisseur que je recommande, propose Swiss Backup : un stockage en Suisse pour les sauvegardes d’ordinateurs, de serveurs et de téléphones faites avec le logiciel Acronis, pour les NAS Synology ou QNAP et pour d’autres outils compatibles S3 ou Swift, facturé en francs suisses selon l’espace et le nombre d’appareils, avec un essai de 90 jours. Plus de détails dans mon {{< a key="infomaniak-review" >}}avis sur Infomaniak{{< /a >}}.

{{< callout type="tip" >}}**Donnez à la sauvegarde son propre identifiant** : un compte séparé, un mot de passe long et unique, la double authentification, le tout réservé à une ou deux personnes. Si le mot de passe de votre messagerie ouvre aussi vos sauvegardes, un intrus peut effacer les deux.{{< /callout >}}

## Un plan de sauvegarde pour une équipe de cinq personnes

Ce plan fonctionne sans service informatique, à condition qu’une personne en soit responsable et qu’une deuxième sache restaurer.

| Données | Sauvegarde | Copie hors d’atteinte | Fréquence |
|---|---|---|---|
| E-mails, agendas, Drive ou OneDrive, espaces partagés | Un service de sauvegarde cloud à cloud | Ce service, s’il a des copies immuables et son propre identifiant ; sinon un export mensuel sur le disque de rotation | Quotidienne, automatique |
| Ordinateurs portables | Time Machine ou l’Historique des fichiers sur un disque externe chiffré | Les fichiers de travail rangés dans l’espace partagé, sauvegardé ci-dessus | Quotidienne |
| NAS ou serveur du bureau, si vous en avez un | Une sauvegarde cloud, par exemple Swiss Backup | Le disque de rotation | Chaque nuit, chaque semaine pour le disque |
| Comptabilité, CRM et autres outils en ligne | L’export proposé par chaque outil (CSV ou PDF) | Rangé dans l’espace partagé et sur le disque de rotation | Mensuelle |
| Site web | Les sauvegardes de l’hébergeur ou de la plateforme | Une copie conservée hors de l’hébergement | Avant chaque mise à jour |
| Mots de passe et codes de secours | Votre gestionnaire de mots de passe | Les codes de secours imprimés, rangés sous clé | À chaque changement |

Les sauvegardes d’un site dépendent de sa plateforme : mon {{< a key="website-security-guide" >}}guide pour sécuriser son site internet{{< /a >}} les détaille plateforme par plateforme, et mon article sur la {{< a key="website-maintenance" >}}maintenance de site internet{{< /a >}} explique qui doit s’en charger. Deux de mes clients ont fait appel à moi en urgence après le piratage de leur site : gardez donc le vôtre sur la liste, même s’il change rarement.

Rédigez ensuite une page : ce qui est sauvegardé, où, par quel service, quel identifiant l’ouvre (rangé dans le gestionnaire de mots de passe), qui restaure et la date du dernier test. Imprimez-la : le jour où vos comptes sont bloqués ou chiffrés, vous ne pourrez pas ouvrir un document stocké dedans.

## Tester une restauration chaque trimestre

Une sauvegarde jamais restaurée est un espoir, pas une sauvegarde. Les sauvegardes échouent sans prévenir : une licence expire, un mot de passe change, un disque se remplit. Une fois par trimestre, réservez une demi-heure :

1. Restaurez trois éléments dans un autre dossier, jamais par-dessus les originaux : un fichier de l’espace partagé tel qu’il était il y a un mois, un e-mail et un dossier issu de la sauvegarde d’un ordinateur portable.
2. Ouvrez-les : un fichier qui revient mais ne s’ouvre pas ne compte pas.
3. Vérifiez la date de la dernière sauvegarde sur chaque ligne de votre plan : si elle remonte à trois semaines, une tâche s’est arrêtée.
4. Connectez-vous au service de sauvegarde avec son identifiant séparé, et vérifiez qu’aucun ancien membre de l’équipe n’y a encore accès.
5. Notez la date, la durée de chaque restauration et les problèmes rencontrés sur votre fiche.

C’est le 0 de 3-2-1-1-0. Le RGPD va dans le même sens : parmi les mesures à prendre selon les besoins, son [article 32](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679) cite « des moyens permettant de rétablir la disponibilité des données à caractère personnel et l’accès à celles-ci dans des délais appropriés en cas d’incident physique ou technique » et « une procédure visant à tester, à analyser et à évaluer régulièrement l’efficacité des mesures ». Ce guide donne des repères pratiques, pas un conseil juridique : si vous détenez des données de santé ou d’autres données sensibles, un DPO ou un avocat vous dira ce que vos sauvegardes doivent couvrir et combien de temps les garder.

## Par où commencer cette semaine

1. Faites l’inventaire : qui peut restaurer quoi dans votre console Google ou Microsoft, et si chaque ordinateur portable a une sauvegarde qui tourne vraiment.
2. Choisissez la copie hors d’atteinte de votre suite cloud : la corbeille et la restauration par l’administrateur ne comptent pas.
3. Inscrivez le premier test de restauration dans l’agenda, dans trois mois.

Si vous préférez confier le sujet, faites du test de restauration une partie de la mission : un prestataire qui ne peut pas vous montrer un fichier revenir n’a pas terminé.
