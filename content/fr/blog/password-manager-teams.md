---
title: "Gestionnaire de mots de passe pour une équipe : Bitwarden, 1Password ou Proton Pass ?"
seo_title: "Gestionnaire de mots de passe entreprise : comparatif 2026"
description: "Gestionnaire de mots de passe entreprise : Bitwarden, 1Password ou Proton Pass ? Prix d’octobre 2026, récupération des accès, départs et verdict par équipe."
slug: "gestionnaire-mots-de-passe-entreprise"
translationKey: "password-manager-teams"
date: 2026-10-18T21:42:00+02:00
lastmod: 2026-10-18T21:42:00+02:00
category: "cybersecurity"
article_type: "comparison"
keywords: ["gestionnaire de mots de passe entreprise", "gestionnaire de mots de passe équipe", "Bitwarden ou 1Password", "Proton Pass entreprise", "coffre-fort de mots de passe", "KeePass entreprise"]
summary: "Le Teams Starter Pack de 1Password convient à une équipe de dix personnes au plus qui veut une administration simple : un prix forfaitaire, et un administrateur peut rétablir l’accès d’un collègue bloqué. Bitwarden Teams, open source, offre les journaux d’événements pour 4 $ (environ 3,60 €) par utilisateur et par mois. Proton Pass Essentials, d’un éditeur suisse, coûte le moins cher (1,99 $, environ 1,80 €, par utilisateur et par mois), sans journal d’activité ni SSO."
cover: "password-manager-teams"
cover_alt: "Le titre « Gestionnaire de mots de passe d’équipe : Bitwarden, 1Password ou Proton Pass ? » en blanc sur un panneau de verre cannelé posé sur une photo, avec deux panneaux côte à côte et un badge « vs » orange"
related: ["two-factor-authentication-passkeys", "offboarding-checklist", "secure-google-workspace-microsoft-365", "cybersecurity-guide", "small-business-tools-guide"]
services: ["rescue"]
faq:
  - q: "L’éditeur du gestionnaire peut-il voir nos mots de passe ?"
    a: "Non. Bitwarden, 1Password et Proton Pass chiffrent le coffre sur vos propres appareils avant toute synchronisation : l’éditeur stocke des données qu’il ne peut pas lire. Revers de la médaille : il ne peut pas non plus vous renvoyer un mot de passe oublié, d’où l’intérêt de prévoir la récupération à l’avance."
  - q: "Faut-il garder les codes de double authentification dans le même gestionnaire ?"
    a: "C’est pratique, et plus sûr que les codes reçus par SMS, mais les deux facteurs se retrouvent au même endroit. Pour les comptes qui feraient le plus de dégâts s’ils étaient piratés (le compte administrateur de la messagerie, la banque, le bureau d’enregistrement de vos noms de domaine), gardez les codes dans une application d’authentification séparée, ou utilisez une passkey ou une clé de sécurité."
  - q: "Peut-on changer de gestionnaire de mots de passe plus tard ?"
    a: "Oui. Exportez le coffre de l’ancien outil, souvent sous forme de fichier CSV, importez-le dans le nouveau, puis supprimez aussitôt l’export, qui n’est pas chiffré. Les passkeys ne suivent pas toujours : vérifiez les options d’import du nouvel outil et prévoyez d’en recréer."
  - q: "A-t-on besoin de l’authentification unique (SSO) pour le gestionnaire de mots de passe ?"
    a: "Seulement si votre équipe se connecte déjà à ses applications de travail via un fournisseur d’identité comme Microsoft Entra ID ou Okta, et que les arrivées et les départs sont fréquents. Le SSO demande Bitwarden Enterprise, 1Password Business ou Proton Pass Professional ; la plupart des petites équipes s’en passent très bien avec un mot de passe principal solide et la double authentification pour tout le monde."
  - q: "Combien d’administrateurs prévoir pour le gestionnaire de l’équipe ?"
    a: "Deux au minimum. Avec un seul administrateur, le jour où cette personne part, tombe malade ou perd son téléphone, personne ne peut débloquer un collègue ni gérer le compte. Confiez dès le premier jour le rôle de propriétaire ou d’administrateur à une deuxième personne de confiance."
---

Le meilleur gestionnaire de mots de passe d’entreprise, pour une petite équipe, est celui que tout le monde utilise vraiment, avec un administrateur capable de rendre l’accès à un collègue bloqué et de couper les accès de quelqu’un le jour de son départ. Bitwarden, 1Password et Proton Pass font bien l’essentiel : ils stockent mots de passe et passkeys, les saisissent automatiquement sur tous les appareils et permettent de partager un identifiant sans le coller dans un email ou une messagerie.

Les différences tiennent aux outils d’administration, au prix par personne et à l’éditeur derrière chacun. Ce comparatif s’appuie sur ce que chaque éditeur publie (offres, prix, fonctions d’administration et conception de la sécurité) à la date de rédaction, en octobre 2026, et non sur un banc d’essai.

Si vous partez de zéro, mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité des petites équipes{{< /a >}} replace le gestionnaire de mots de passe parmi les autres chantiers : sauvegardes, appareils et double authentification.

## Bitwarden, 1Password ou Proton Pass : le comparatif en un tableau (octobre 2026)

| | Bitwarden | 1Password | Proton Pass |
|---|---|---|---|
| Siège de l’éditeur | États-Unis | Canada | Suisse |
| Code source | Open source | Fermé, conception de sécurité publiée | Applications open source |
| Offres pour les équipes | Teams, Enterprise | Teams Starter Pack, Business | Pass Essentials, Pass Professional |
| Offre d’équipe la moins chère | 4 $ (environ 3,60 €) par utilisateur et par mois | 24,95 $ (environ 22 €) par mois jusqu’à 10 personnes | 1,99 $ (environ 1,80 €) par utilisateur et par mois, 3 utilisateurs minimum |
| Où sont rangés les identifiants partagés | Collections | Coffres partagés | Coffres partagés |
| Récupération d’un membre bloqué par un administrateur | Présentée comme une règle de l’offre Enterprise | Oui, dans les deux offres | Oui, pour les membres non privés |
| Journaux d’activité | Journaux d’événements dès Teams | Business | Pass Professional |
| Authentification unique (SSO) | Enterprise | Business | Pass Professional |
| Passkeys | Oui | Oui | Oui |
| Santé des mots de passe et fuites | Rapports sur la santé du coffre | Watchtower | Pass Monitor |
| Où vit votre compte | Cloud américain ou européen, ou auto-hébergé avec Enterprise | Région États-Unis, Canada ou Union européenne | Chez un éditeur suisse, sous droit suisse |

Les tarifs que j’ai pu vérifier sont publiés en dollars américains, en facturation annuelle ; les montants en euros sont des conversions approximatives (1 $ ≈ 0,89 € début octobre 2026), et le prix en euros affiché au moment du paiement peut différer.

## Ce qu’il faut à une équipe, et que le gestionnaire du téléphone ne fait pas

Pour une seule personne, le gestionnaire intégré au téléphone ou au navigateur suffit. L’app Mots de passe d’Apple et le Gestionnaire de mots de passe de Google créent des mots de passe solides, les synchronisent et les saisissent automatiquement, et tous deux savent partager des identifiants avec quelques personnes : Apple avec des groupes partagés, Google avec votre groupe familial.

Pour une équipe, il manque quatre choses :

1. **Une vue d’administration** : qui voit quels identifiants, et un seul endroit pour le changer.
2. **La récupération** : un moyen de rendre l’accès à un collègue qui a oublié son mot de passe principal, sans perdre le coffre.
3. **Les départs** : un seul endroit pour retirer quelqu’un de tous les identifiants partagés à la fois.
4. **Les journaux** : la trace de qui a ouvert, modifié ou partagé quoi, une preuve utile quand {{< a key="security-questionnaire" >}}un client vous envoie un questionnaire de sécurité{{< /a >}}.

Il y a aussi un problème de fond. Les identifiants enregistrés dans un gestionnaire intégré vivent dans le compte Apple ou Google de chaque personne. Quand elle part, ce qu’elle y a enregistré part avec elle, et personne n’en a la liste.

## Les prix en octobre 2026, et ce que paient cinq ou dix personnes

### Bitwarden

Au moment où j’écris (octobre 2026), Bitwarden Teams coûte 4 $ (environ 3,60 €) par utilisateur et par mois, et Enterprise 6 $ (environ 5,30 €), en facturation annuelle ; la facturation mensuelle existe aussi. Teams comprend déjà le partage, les journaux d’événements et la synchronisation d’annuaire, qui aligne votre liste de membres sur votre annuaire, par exemple Google Workspace ou Microsoft Entra ID. Enterprise ajoute l’authentification unique, les règles d’entreprise, une option d’auto-hébergement et une offre Families gratuite pour chaque membre. Les deux offres s’essaient gratuitement pendant 14 jours depuis la [page tarifs entreprise de Bitwarden](https://bitwarden.com/pricing/business/).

### 1Password

Le Teams Starter Pack coûte 24,95 $ (environ 22 €) par mois, en facturation annuelle, jusqu’à dix personnes ; au-delà, 1Password vend des places supplémentaires à 4,99 $ (environ 4,40 €) par mois chacune, jusqu’à vingt personnes. Business coûte 8,99 $ (environ 8 €) par utilisateur et par mois, en facturation annuelle, et ajoute la connexion via votre fournisseur d’identité, des droits plus fins sur les coffres partagés et des rapports plus complets. Beaucoup de comparatifs citent encore les anciens tarifs de 19,95 $ et 7,99 $ : fiez-vous à la [page tarifs entreprise de 1Password](https://1password.com/pricing/business), qui propose aussi un essai gratuit de 14 jours.

### Proton Pass

Pass Essentials coûte 1,99 $ (environ 1,80 €) par utilisateur et par mois en facturation annuelle, pour les équipes de 3 à 30 personnes. Pass Professional coûte 4,49 $ (environ 4 €), lui aussi à l’année, et ajoute l’authentification unique, des journaux d’activité détaillés, des règles d’entreprise et une connexion aux outils de supervision de la sécurité. Le paiement au mois revient plus cher : comparez les totaux sur la [page tarifs entreprise de Proton Pass](https://proton.me/business/pass/pricing).

### Ce que paie une équipe chaque mois

| Offre (coût par mois, facturation annuelle) | 5 personnes | 10 personnes |
|---|---|---|
| Bitwarden Teams | 20 $ (environ 18 €) | 40 $ (environ 36 €) |
| Bitwarden Enterprise | 30 $ (environ 27 €) | 60 $ (environ 53 €) |
| 1Password Teams Starter Pack | 24,95 $ (environ 22 €) | 24,95 $ (environ 22 €) |
| 1Password Business | 44,95 $ (environ 40 €) | 89,90 $ (environ 80 €) |
| Proton Pass Essentials | 9,95 $ (environ 9 €) | 19,90 $ (environ 18 €) |
| Proton Pass Professional | 22,45 $ (environ 20 €) | 44,90 $ (environ 40 €) |

À partir de sept personnes, le forfait Teams Starter Pack de 1Password coûte moins cher que Bitwarden Teams. Proton Pass Essentials est le moins cher quelle que soit la taille de l’équipe, mais c’est aussi celui qui offre le moins d’outils d’administration. Vérifiez si la TVA s’ajoute au moment du paiement.

## Récupération et départs : les deux jours qui comptent

Un gestionnaire d’équipe fait ses preuves deux jours précis : quand quelqu’un est bloqué, et quand quelqu’un s’en va.

### Quand un collègue est bloqué

- **1Password** : dans les deux offres d’équipe, un propriétaire ou un administrateur lance la récupération ; le collègue confirme par email, choisit un nouveau mot de passe de compte et reçoit une nouvelle clé secrète (Secret Key), puis l’administrateur termine la récupération. Les coffres restent intacts, mais il faut se reconnecter sur chaque appareil.
- **Bitwarden** : un administrateur peut réinitialiser le mot de passe principal d’un membre une fois la règle de récupération de compte activée dans la console d’administration (elle est désactivée par défaut). L’aide de Bitwarden présente cette récupération comme une fonction de l’offre Enterprise, mais son tableau de prix mentionne aussi une procédure de récupération pour Teams : vérifiez-la pendant l’essai si vous comptez rester sur Teams.
- **Proton Pass** : un administrateur peut changer le mot de passe de tout membre qui n’est pas déclaré privé, depuis les réglages de l’organisation. Les membres privés récupèrent leur compte eux-mêmes, avec une phrase de récupération, une adresse email ou un numéro de téléphone.

{{< callout type="tip" >}}Mettez la récupération en place dès le premier jour, tant que tout le monde peut encore se connecter. Dans Bitwarden Enterprise, un membre doit être inscrit à la récupération de compte avant d’être bloqué : **activez l’inscription automatique** dans cette règle dès la création de l’organisation.{{< /callout >}}

### Quand quelqu’un s’en va

1. Avant son dernier jour, demandez à la personne de déplacer ses identifiants professionnels de son coffre privé vers un coffre partagé.
2. Retirez-la ou suspendez son compte dans la console d’administration : elle perd l’accès aux coffres ou aux collections partagés.
3. Changez les mots de passe qu’elle pouvait voir, en commençant par le compte administrateur de la messagerie, la banque, le bureau d’enregistrement des noms de domaine et le site. Ce qu’une personne a pu voir, elle a pu le copier.
4. Vérifiez les méthodes de double authentification des comptes partagés : un code qui arrive encore sur le téléphone d’un ancien collaborateur est une porte restée ouverte.

La liste complète, avec la messagerie, les fichiers et les appareils, se trouve dans ma {{< a key="offboarding-checklist" >}}checklist pour le départ d’un salarié ou d’un freelance{{< /a >}}.

## Passkeys et alertes de fuite

Les trois stockent les passkeys, cette méthode de connexion qui remplace le mot de passe par une clé conservée sur vos appareils et résiste à l’hameçonnage, et les synchronisent d’un appareil à l’autre. Mon tutoriel pour {{< a key="two-factor-authentication-passkeys" >}}activer la double authentification et les passkeys{{< /a >}} montre où les créer sur les comptes qui comptent.

Chacun surveille aussi la santé de votre coffre :

- **Watchtower (1Password)** signale les mots de passe faibles, réutilisés ou compromis, et les sites où vous pourriez ajouter la double authentification ou une passkey.
- **Les rapports de Bitwarden sur la santé du coffre** listent les mots de passe exposés, réutilisés et faibles, les sites non sécurisés et ceux où la connexion en deux étapes existe mais n’est pas activée, avec en plus un rapport sur les fuites de données.
- **Pass Monitor (Proton Pass)** signale les mots de passe faibles et réutilisés et l’absence de double authentification et, selon l’offre, vous prévient quand une adresse apparaît dans une fuite connue.

Lancez le rapport une fois par mois et traitez d’abord les comptes importants : messagerie, nom de domaine, banque et site, puis le reste.

## Confiance : ce que la fuite de LastPass nous a appris

La fuite de LastPass en 2022 explique pourquoi il faut regarder le passé d’un éditeur autant que ses tarifs. Elle a commencé en août 2022 par l’ordinateur portable d’un salarié, puis est passée par l’appareil personnel d’un cadre avant d’atteindre une base de sauvegarde. En décembre 2025, l’ICO, l’autorité britannique de protection des données, a annoncé une amende de 1,2 million de livres sterling contre LastPass pour cette fuite. Elle n’a trouvé aucune preuve que le pirate ait pu déchiffrer les mots de passe des clients, et rappelle qu’elle continue d’encourager l’usage des gestionnaires de mots de passe. En France, l’ANSSI et Cybermalveillance.gouv.fr recommandent eux aussi d’en utiliser un.

Trois points à vérifier avant de choisir :

- **Le fonctionnement du chiffrement.** Le coffre doit être chiffré sur vos appareils, pour qu’une sauvegarde volée reste illisible sans le mot de passe principal. Les trois fonctionnent ainsi.
- **Qui peut examiner le code.** Le code de Bitwarden et les applications de Proton Pass sont open source. Celui de 1Password est fermé, mais l’éditeur publie la conception de sa sécurité et rémunère les chercheurs qui lui signalent des failles (bug bounty). Les trois publient des audits de sécurité indépendants.
- **La façon dont votre équipe se connecte.** Un mot de passe principal long et unique, la double authentification sur le gestionnaire lui-même, et des comptes professionnels séparés des comptes personnels : chez LastPass, l’attaque est passée par un appareil personnel.

### Où vivent vos données (RGPD)

Le contenu du coffre est chiffré avant de quitter vos appareils, mais l’éditeur détient quand même des données personnelles sur votre équipe (noms, adresses email, journaux). Il agit donc comme votre sous-traitant : il vous faut un contrat de sous-traitance (le DPA de l’éditeur), comme l’exige l’article 28 du RGPD (et du UK GDPR au Royaume-Uni). Bitwarden et 1Password permettent d’héberger votre compte dans une région européenne ; Proton est un éditeur suisse, et la Suisse bénéficie d’une décision d’adéquation de l’Union européenne. Ces repères sont généraux et ne constituent pas un conseil juridique : si un contrat client impose un lieu de stockage, faites vérifier la clause par la personne qui suit vos contrats.

## KeePassXC et la certification de l’ANSSI : l’option du fichier local

Si vous préférez ne confier vos mots de passe au cloud d’aucun éditeur, KeePassXC est un gestionnaire gratuit et open source pour Windows, macOS et Linux, qui garde tout le coffre dans un seul fichier chiffré au format KeePass. Vous choisissez où vit ce fichier : un ordinateur, un disque partagé ou votre propre serveur. L’ANSSI a délivré en 2010 une certification de sécurité de premier niveau (CSPN) à KeePass, pour sa version portable 2.10 (voir [la cible de sécurité de cette certification](https://cyber.gouv.fr/sites/default/files/IMG/cspn/anssi-cspn-cible_2010-07fr.pdf) sur le site de l’ANSSI). C’est un bon signe pour la conception, mais elle ne couvre que cette version, pas les versions actuelles de KeePass ni KeePassXC.

Le prix à payer, c’est le travail d’administration. Pas de console d’administration ni de récupération : oubliez le mot de passe principal et le fichier reste fermé pour de bon. Partager, c’est partager le fichier : deux personnes qui enregistrent en même temps peuvent se retrouver avec des copies en conflit à fusionner, et les téléphones demandent une application à part qui lit ce format. KeePassXC convient à une équipe de deux ou trois personnes dont l’une veut bien s’occuper du fichier et de ses sauvegardes, ou à une équipe qui refuse tout cloud.

## Quel gestionnaire de mots de passe entreprise choisir pour une petite équipe ?

Les trois sont sérieux sur la sécurité ; le choix dépend donc de la façon dont votre équipe travaille :

- **De deux à dix personnes qui veulent le moins d’administration possible :** le Teams Starter Pack de 1Password. Un prix forfaitaire, la récupération par un administrateur incluse, et Business le jour où il vous faut le SSO ou le journal d’activité.
- **Une équipe qui veut de l’open source, des journaux d’événements et de la marge pour grandir :** Bitwarden Teams, ou Enterprise pour le SSO, l’auto-hébergement et la règle de récupération.
- **Un budget serré, ou une équipe qui utilise déjà les services professionnels de Proton :** Proton Pass Essentials, puis Professional quand un client demande des journaux d’activité ou le SSO.
- **Le refus de tout cloud :** KeePassXC, si quelqu’un prend en charge le fichier et ses sauvegardes.
- **Une seule personne :** le gestionnaire intégré au téléphone ou au navigateur, avec la double authentification activée.

Quel que soit votre choix, mettez toute l’équipe dessus et n’en changez plus. La moitié des identifiants dans un outil et l’autre moitié ailleurs, c’est le plus sûr chemin vers le retour du tableur de mots de passe. Comme je l’écris dans {{< a key="small-business-tools-guide" >}}mon guide des outils du quotidien{{< /a >}}, savoir rester en place est aussi une compétence : quand un outil fait le travail, le suivant doit être nettement meilleur, pas seulement plus récent.

## Tout mettre en place en un après-midi : la checklist

1. Lancez un essai avec l’outil qui correspond à votre profil ; Bitwarden et 1Password proposent tous deux 14 jours.
2. Créez l’organisation et confiez le rôle de propriétaire ou d’administrateur à deux personnes.
3. Mettez en place la récupération avant tout le reste : dans Bitwarden Enterprise, la règle de récupération de compte avec inscription automatique ; dans Proton Pass, décidez quels membres sont privés.
4. Créez des coffres partagés par métier, par exemple « Site et domaines », « Messagerie et administration », « Finances » et « Réseaux sociaux et publicité », et donnez à chaque personne seulement ceux dont elle a besoin.
5. Invitez l’équipe et demandez à chacun d’activer la double authentification sur son compte dans le gestionnaire ; imposez-la si votre offre le permet.
6. Importez les mots de passe enregistrés dans les navigateurs, puis supprimez-les des navigateurs et désactivez la proposition d’enregistrer les nouveaux, pour que les identifiants n’y reviennent pas.
7. Lancez le rapport de santé et changez d’abord les mots de passe réutilisés ou faibles des comptes importants.
8. Rédigez sur une page la marche à suivre en cas de départ, tant que tout est encore frais.

Verrouillez ensuite l’administration de votre messagerie avec mon guide pour {{< a key="secure-google-workspace-microsoft-365" >}}sécuriser Google Workspace et Microsoft 365{{< /a >}}.

Vous n’avez pas besoin de moi pour tout cela : une petite équipe s’en charge en un après-midi. J’interviens le mauvais jour, quand un site est piraté ou que plus personne ne peut accéder à un nom de domaine ou à un site : je réponds à ces appels de dépannage le jour même ou sous 24 heures.
