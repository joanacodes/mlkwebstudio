---
title: "Messagerie piratée, rançongiciel, fraude bancaire : le plan de la première heure"
seo_title: "Que faire en cas de cyberattaque : la première heure"
description: "Que faire en cas de cyberattaque ? Messagerie piratée, rançongiciel, faux RIB, ordinateur volé : les gestes de la première heure et qui appeler en France."
slug: "que-faire-en-cas-de-cyberattaque"
translationKey: "incident-response-first-hour"
date: 2026-10-18T22:06:00+02:00
lastmod: 2026-10-18T22:06:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["que faire en cas de cyberattaque", "cyberattaque TPE que faire", "messagerie piratée que faire", "rançongiciel que faire", "fraude au faux RIB que faire"]
summary: "Dans la première heure d’une cyberattaque, limitez les dégâts avant d’enquêter : appelez votre banque tout de suite si de l’argent est parti, reprenez une messagerie piratée depuis un appareil sain et coupez du réseau les ordinateurs infectés sans les éteindre. Ensuite, signalez l’attaque sur 17Cyber, portez plainte dans les 72 heures pour que votre assureur puisse vous indemniser, et notifiez la CNIL sous 72 heures si des données personnelles sont en jeu."
cover: "incident-response-first-hour"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé au-dessus d’une photo, avec un bouclier coché"
related: ["cybersecurity-guide", "gdpr-data-breach", "invoice-fraud-bank-details", "wordpress-site-hacked", "backups-3-2-1"]
services: ["rescue"]
faq:
  - q: "Comment savoir si ma messagerie professionnelle a été piratée ?"
    a: "Signes typiques : des réponses à des messages que vous n’avez jamais envoyés, des alertes de connexion depuis des lieux inconnus, des e-mails de réinitialisation de mot de passe que vous n’avez pas demandés, des règles ou des transferts que vous n’avez pas créés, des contacts qui s’étonnent d’un message reçu de votre part. Un seul de ces signes suffit pour suivre le plan « messagerie piratée »."
  - q: "J’ai cliqué sur un lien d’hameçonnage : que faire ?"
    a: "Si vous avez seulement ouvert la page sans rien saisir, fermez-la, lancez votre antivirus et surveillez le compte. Si vous avez saisi un mot de passe, considérez le compte comme piraté : changez le mot de passe depuis un autre appareil, fermez toutes les sessions et activez la double authentification. Si vous avez saisi des coordonnées bancaires, appelez votre banque immédiatement."
  - q: "Dois-je prévenir mes clients d’une cyberattaque ?"
    a: "L’article 34 du RGPD impose d’informer les personnes concernées dans les meilleurs délais quand la violation de leurs données est susceptible d’engendrer un risque élevé pour elles. Même sans obligation, prévenez tous ceux qui pourraient recevoir de faux e-mails ou de fausses factures à votre nom."
  - q: "Ma banque va-t-elle me rembourser après une fraude ?"
    a: "Cela dépend du type de fraude et de votre convention de compte : un virement que vous avez vous-même validé vers un faux RIB n’est pas remboursé d’office, et les règles d’un compte professionnel peuvent différer de celles d’un compte de particulier. Appelez votre banque tout de suite, puis demandez sa réponse par écrit."
---

Votre banque vous appelle pour un virement que vous n’avez jamais fait, un fournisseur s’étonne de votre « nouveau RIB », ou tous les fichiers du serveur portent soudain une extension inconnue. Tout se joue alors dans la première heure : ce que vous faites ensuite décide du coût de l’attaque, et l’ordre des gestes compte plus que la vitesse.

Ce guide vous dit que faire en cas de cyberattaque, avec un plan court par incident : messagerie piratée, rançongiciel, fraude bancaire, site piraté, ordinateur perdu ou volé. Viennent ensuite les contacts à appeler en France, avec les délais qui courent dès que vous découvrez le problème, puis votre propre plan d’une page. Il fait partie de mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité pour les petites équipes{{< /a >}}.

Certaines de mes collaborations ont commencé par une urgence : un client avec qui je travaille depuis deux ans a fait appel à moi parce que son site WordPress venait d’être piraté. La plupart des gestes qui suivent ne demandent aucun spécialiste, seulement un téléphone, un appareil sain et du sang-froid.

## Que faire en cas de cyberattaque : les dix premières minutes

Quel que soit l’incident, cinq règles passent avant tout le reste.

1. L’argent d’abord : si un paiement est en jeu, appelez tout de suite le service fraude de votre banque, avec le numéro inscrit sur votre carte, dans l’application ou sur le site de la banque, jamais celui d’un e-mail suspect.
2. Contenir, pas nettoyer : déconnectez, changez les mots de passe, bloquez les accès, mais ne supprimez encore ni e-mails, ni fichiers, ni comptes. Ils montrent par où l’attaquant est entré, et votre banque, les enquêteurs, votre assureur ou la CNIL peuvent vous les demander.
3. Travailler depuis un appareil sain : changez les mots de passe depuis un ordinateur ou un téléphone qui n’a pas été touché. Partez du principe que l’attaquant lit la messagerie piratée : n’y parlez pas de l’incident et n’y envoyez aucun nouveau mot de passe.
4. Tenir un journal : sur papier ou dans une note du téléphone, notez l’heure, ce que vous avez vu, ce que vous avez fait et qui vous avez appelé. Photographiez les demandes de rançon et les messages suspects.
5. Une seule personne décide, en général celle qui dirige l’entreprise. Personne ne paie de rançon ou de facture « urgente », ne supprime de preuve ni ne publie quoi que ce soit sans son accord.

{{< callout type="note" >}}**Notez l’heure à laquelle vous avez découvert le problème.** Deux délais de 72 heures peuvent courir à partir de ce moment : la notification à la CNIL si des données personnelles sont en jeu, et le dépôt de plainte si vous voulez que votre assureur vous indemnise.{{< /callout >}}

## Messagerie piratée : reprendre le compte, puis chercher les pièges

Après l’argent, c’est la messagerie piratée que je traite en priorité, car l’e-mail est la clé de tout le reste : qui le lit peut réinitialiser vos autres mots de passe.

1. Changez le mot de passe depuis un appareil sain, ainsi que celui de tout autre compte qui utilisait le même. Si vous ne pouvez plus vous connecter, passez par la procédure de récupération du fournisseur, ou demandez à l’administrateur de votre Google Workspace ou Microsoft 365 de le réinitialiser.
2. Fermez toutes les autres sessions. Google affiche les appareils connectés à votre compte et permet de déconnecter chacun d’eux. Sur Microsoft 365, une réinitialisation du mot de passe ne suffit pas toujours à couper la session de l’attaquant : l’administrateur doit aussi révoquer vos sessions dans Microsoft Entra ID.
3. Cherchez les règles de transfert et les filtres. Une ruse courante consiste à créer une règle qui envoie à l’attaquant une copie de chaque e-mail reçu, ou qui cache les messages de votre banque et de vos clients. Dans Gmail, ouvrez **Paramètres > Voir tous les paramètres** et vérifiez les onglets **Filtres et adresses bloquées** et **Transfert et POP/IMAP**. Dans Outlook sur le web, vérifiez **Paramètres > Courrier > Règles**, puis **Transfert**. Supprimez tout ce que vous n’avez pas créé.
4. Vérifiez l’adresse et le numéro de récupération, les personnes qui ont accès à la boîte et les applications connectées au compte : l’attaquant s’en sert pour revenir.
5. Activez la double authentification, avec une application d’authentification ou une clé d’accès (passkey) quand c’est possible.
6. Parcourez les éléments envoyés, supprimés et archivés des dernières semaines, à la recherche de messages sur des factures, des paiements ou des coordonnées bancaires : ils vous disent qui prévenir en premier.
7. Prévenez les personnes concernées par un autre canal. Appelez les clients et les fournisseurs avec qui vous échangez des factures, puis envoyez un message court, par exemple :

```
Objet : Merci d’ignorer les récentes demandes de paiement venant de notre adresse

Un tiers a eu accès à notre messagerie entre le [date] et le [date].
Si vous avez reçu de notre part, pendant cette période, une demande
de paiement, un nouveau RIB ou un lien à ouvrir, n’y donnez pas suite
et appelez-nous au [numéro]. Nos coordonnées bancaires n’ont pas changé.
```

{{< callout type="warning" >}}**Ne gérez pas l’incident depuis la messagerie piratée** tant que les étapes 1 à 3 ne sont pas faites : l’attaquant lit peut-être vos échanges, et une règle de transfert continue de fonctionner après un changement de mot de passe.{{< /callout >}}

## Rançongiciel : déconnecter, ne pas éteindre, ne pas payer

Un rançongiciel est un logiciel malveillant qui chiffre vos fichiers et réclame une rançon contre la clé. On le repère à des fichiers qui ne s’ouvrent plus, tous dotés de la même nouvelle extension, et à une demande de rançon affichée à l’écran ou déposée dans chaque dossier.

1. Déconnectez du réseau les machines touchées : débranchez le câble Ethernet et coupez le Wi-Fi. Si plusieurs postes ou un serveur sont atteints, débranchez aussi la box ou le routeur du bureau.
2. Ne les éteignez pas. L’ANSSI recommande de ne pas éteindre une machine infectée et de la mettre en veille prolongée si possible ([son infographie sur les rançongiciels](https://cyber.gouv.fr/sites/default/files/document/rancongiciel_infographie_anssi.pdf)). L’arrêt peut aussi effacer des traces utiles aux enquêteurs.
3. Protégez vos sauvegardes. Débranchez les disques externes et le NAS encore connectés, et mettez en pause les outils de synchronisation (OneDrive, Google Drive, Dropbox) pour qu’ils cessent de recopier des fichiers chiffrés sur vos copies dans le cloud.
4. Photographiez la demande de rançon et notez la nouvelle extension. Elles permettent d’identifier le rançongiciel, et le projet No More Ransom (nomoreransom.org), lancé par Europol, la police néerlandaise et des éditeurs de sécurité, propose des outils de déchiffrement gratuits pour certaines familles.
5. Signalez l’attaque et faites-vous aider : 17Cyber d’abord (voir plus bas), puis votre prestataire informatique, et votre assureur si vous avez une garantie cyber.
6. Ne payez pas, et ne contactez pas les criminels de votre propre initiative. Payer ne garantit pas d’obtenir une clé qui fonctionne, encourage les criminels à continuer et n’empêche pas le même groupe de revenir. Certains groupes copient aussi les données avant de les chiffrer : partez du principe que des données personnelles ont pu sortir, et faites la vérification décrite plus bas.
7. Restaurez à partir d’une sauvegarde saine, antérieure à l’attaque, sur des machines effacées ou réinstallées, et seulement une fois tous les mots de passe changés.

Si vos sauvegardes étaient branchées et ont été chiffrées elles aussi, mon guide de la {{< a key="backups-3-2-1" >}}règle de sauvegarde 3-2-1{{< /a >}} montre comment garder une copie hors d’atteinte la prochaine fois.

## Fraude bancaire : votre banque d’abord

La fraude bancaire recouvre le virement envoyé à un escroc après une fausse facture ou un e-mail de « changement de RIB », le paiement ordonné par un faux dirigeant (la fraude au président), et les opérations par carte ou par virement que vous n’avez jamais faites. Dans tous les cas, la banque est le premier appel, car un virement peut parfois encore être bloqué si les deux banques réagissent vite.

1. Appelez le service fraude ou opposition, au numéro inscrit sur votre carte ou dans l’application de la banque. Donnez le montant, la date, le nom et le RIB du bénéficiaire, et demandez le blocage ou le rappel des fonds, ainsi que l’alerte de la banque destinataire. Notez le nom de votre interlocuteur et la référence du dossier.
2. Bloquez ce qui reste exposé : cartes, paiements en attente, accès à la banque en ligne. Changez le mot de passe de la banque en ligne depuis un appareil sain.
3. Gardez les preuves : la fausse facture, l’e-mail lui-même (la banque ou les enquêteurs vous diront comment le transmettre) et l’heure de vos appels.
4. Portez plainte au commissariat ou à la gendarmerie ; 17Cyber vous guide si vous ne savez pas par où commencer.
5. Trouvez la fuite. Si la fausse demande venait de votre propre adresse ou de celle d’un vrai fournisseur, au milieu d’un vrai échange, une messagerie a été piratée quelque part : appliquez le plan « messagerie piratée » et appelez le fournisseur.

Mon guide sur la {{< a key="invoice-fraud-bank-details" >}}fraude au faux RIB et au président{{< /a >}} explique le fonctionnement de ces escroqueries et les vérifications qui les arrêtent.

## Site piraté ou ordinateur volé

### Site piraté

Passez le site en maintenance ou mettez-le hors ligne depuis l’espace client de votre hébergeur. Changez les mots de passe du compte d’hébergement, de l’administration du site et du compte chez le registrar de votre nom de domaine, et supprimez les comptes administrateurs que vous ne reconnaissez pas. Gardez une copie du site piraté avant de nettoyer quoi que ce soit. Si le site comporte des formulaires, des comptes clients ou une boutique, vérifiez si des données personnelles ont été exposées. La procédure complète, de la première heure à la levée de l’avertissement de Google, se trouve dans {{< a key="wordpress-site-hacked" >}}mon guide du site WordPress piraté{{< /a >}}, et l’essentiel vaut pour les autres plateformes.

### Ordinateur ou téléphone perdu ou volé

1. Verrouillez-le et effacez-le à distance si c’était prévu : Localiser sur les appareils Apple, l’équivalent de Google sur Android, ou votre outil de gestion des appareils si vous en avez un (Microsoft Intune, par exemple).
2. Déconnectez l’appareil de votre messagerie, de votre stockage en ligne et de votre banque, et changez les mots de passe enregistrés dans son navigateur.
3. Portez plainte pour le vol : votre assureur demandera le récépissé.
4. Décidez s’il s’agit d’une violation de données personnelles. Si le disque était chiffré (BitLocker sous Windows, FileVault sur Mac) et que le mot de passe n’était pas conservé avec l’appareil, le risque pour les personnes est en général faible : l’article 34, paragraphe 3, point a) du RGPD vous dispense alors de les informer, mais inscrivez l’incident dans votre registre des violations (article 33, paragraphe 5). Un ordinateur non chiffré rempli de fichiers clients, c’est une autre histoire.

## Qui appeler en France, et les délais de 72 heures

| Qui | Comment | Quand |
|---|---|---|
| Votre banque | Service fraude ou opposition (numéro sur la carte ou dans l’application) | Tout de suite, si de l’argent est parti |
| 17Cyber | 17cyber.gouv.fr : diagnostic, conseils, tchat avec un policier ou un gendarme si l’attaque est grave | Dès la première heure |
| Police ou gendarmerie | Plainte au commissariat, à la gendarmerie ou par écrit au procureur de la République | Dans les 72 heures si vous comptez sur votre assurance |
| CNIL | Téléservice de notification des violations | Sous 72 heures, si des données personnelles sont en jeu |
| Assureur | Ligne d’assistance du contrat | Dans le délai prévu par le contrat |

**17Cyber**, lancé en décembre 2024 par la police nationale, la gendarmerie et Cybermalveillance.gouv.fr, est le guichet unique des victimes, entreprises comprises. Quelques questions identifient la menace, puis le service donne des conseils, ouvre si besoin un tchat avec un policier ou un gendarme pour lancer la procédure, et peut vous orienter vers un prestataire référencé ou labellisé par Cybermalveillance.gouv.fr. Le [guide de Cybermalveillance.gouv.fr pour les dirigeants](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/cyberattaque-que-faire-guide-dirigeants) détaille la marche à suivre.

**La plainte et l’assurance.** Depuis le 24 avril 2023, l’article L. 12-10-1 du Code des assurances, créé par la loi d’orientation et de programmation du ministère de l’Intérieur (LOPMI) du 24 janvier 2023, subordonne l’indemnisation des pertes dues à une cyberattaque au dépôt d’une plainte au plus tard 72 heures après que la victime a eu connaissance de l’attaque. La règle vaut pour les entreprises et pour les indépendants dans leur activité professionnelle, et la [FAQ de la Direction générale du Trésor](https://www.tresor.economie.gouv.fr/Institutionnel/Niveau2/Pages/39db1de3-1230-46a0-8e1b-d38a739e0885/files/9065d98f-099e-4eb4-9ba5-23b68cd50feb) répond aux questions pratiques. Même sans assurance, la plainte vous laisse une trace écrite.

**Les données personnelles.** Si l’attaque a exposé, modifié, chiffré ou supprimé des données personnelles, c’est une violation de données. L’article 33 du RGPD impose de la notifier à la CNIL dans les meilleurs délais et, si possible, 72 heures au plus tard après en avoir pris connaissance, sauf si elle n’est pas susceptible d’engendrer un risque pour les personnes. Le [téléservice de la CNIL](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles) accepte une notification en deux temps si des informations vous manquent. Si votre entreprise est installée hors de l’UE, en Suisse, au Maroc ou ailleurs, et vend à des personnes situées dans l’UE, le RGPD peut s’appliquer à leurs données (article 3, paragraphe 2). Mon guide sur la {{< a key="gdpr-data-breach" >}}violation de données dans les 72 heures{{< /a >}} détaille la décision et la notification.

Si vous avez une assurance cyber, appelez sa ligne d’assistance tôt : le contrat peut fixer un délai de déclaration et imposer ses propres intervenants. Mon guide de l’{{< a key="cyber-insurance" >}}assurance cyber{{< /a >}} liste ce qu’il faut vérifier avant d’en avoir besoin. Ce guide présente les règles au 19 octobre 2026 ; ce n’est pas un conseil juridique, et quand les données de nombreuses personnes ou des données sensibles sont touchées, l’avis d’un avocat ou de votre DPO vaut la peine.

## Rédigez votre plan d’une page avant d’en avoir besoin

Les plans ci-dessus marchent bien mieux quand les numéros sont déjà notés. Une page suffit :

- qui décide, et qui le remplace, avec les numéros de portable personnels ;
- qui appeler : le service fraude de la banque, le prestataire informatique, l’hébergeur et le registraire du domaine, l’assureur (avec le numéro de contrat), l’expert-comptable, et les services cités plus haut ;
- comment joindre l’équipe sans e-mail, par exemple un groupe sur une messagerie instantanée ;
- où se trouvent les sauvegardes, comment les restaurer, et la date du dernier test de restauration ;
- où sont les accès d’administration : le gestionnaire de mots de passe, et qui détient les codes de secours des comptes principaux ;
- qui dit quoi aux clients, pour que personne n’improvise.

**Gardez ce plan hors ligne** : imprimé dans un tiroir et enregistré sur le téléphone de la personne qui dirige. Un plan stocké sur le serveur chiffré ou dans la messagerie piratée ne sert à rien le jour J. Relisez-le deux fois par an, et à chaque arrivée ou départ dans l’équipe.

{{< callout type="tip" >}}**Faites une répétition.** Déroulez un scénario avec l’équipe, par exemple un faux e-mail de changement de RIB, en une demi-heure. Les trous apparaissent tout de suite : un numéro que personne n’a, un mot de passe connu d’une seule personne.{{< /callout >}}

Vous pouvez aussi vous faire accompagner : MonAideCyber, le diagnostic gratuit de l’ANSSI, vous aide à corriger les bases, et mon guide des {{< a key="free-cybersecurity-help" >}}aides gratuites en cybersécurité{{< /a >}} présente les autres dispositifs.

## Ce que vous pouvez faire vous-même, et quand passer la main

Vous n’avez besoin ni de moi ni de personne pour la première heure : ce sont des appels, des mots de passe et des câbles débranchés, et c’est à la personne qui dirige de prendre ces décisions. Faites appel à un spécialiste quand :

- le rançongiciel a touché plus d’une machine, ou un serveur ;
- vous ne parvenez plus à accéder au compte administrateur principal, au nom de domaine ou à l’hébergement ;
- les données personnelles de nombreuses personnes, ou des données sensibles, ont pu fuiter ;
- l’attaquant revient après le changement des mots de passe ;
- vous n’avez aucune sauvegarde antérieure à l’attaque.

Un rançongiciel sur vos ordinateurs demande une équipe de réponse à incident : celle que désigne votre assureur, celle de votre prestataire informatique, ou un prestataire vers lequel 17Cyber vous oriente. Mon propre travail de dépannage couvre les sites piratés et les accès perdus aux comptes et aux noms de domaine. Quand un client m’appelle en urgence, je réponds le jour même ou sous 24 heures ; si je ne parviens pas à régler le problème, il reçoit un rapport à remettre à un autre spécialiste et se voit rembourser 70 % de la facture.

Quelle que soit la suite, tenez le journal jusqu’au bout : c’est ce que la banque, l’assureur et la CNIL vous demanderont, et c’est le premier brouillon de votre plan d’une page pour l’année suivante.
