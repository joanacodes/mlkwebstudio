---
title: "Cybersécurité des petites équipes : le guide complet"
seo_title: "Cybersécurité TPE PME : le guide complet pour se protéger"
description: "Cybersécurité TPE PME : comptes et double authentification, faux RIB, sauvegardes, postes, départs, première heure d’une attaque, NIS2 et aides gratuites."
slug: "cybersecurite-tpe-pme"
translationKey: "cybersecurity-guide"
date: 2026-10-18T23:42:00+02:00
lastmod: 2026-10-18T23:42:00+02:00
category: "cybersecurity"
article_type: "pillar"
keywords: ["cybersécurité TPE PME", "cybersécurité petite entreprise", "sécurité informatique entreprise", "cybersécurité petites équipes", "hameçonnage", "guide ANSSI TPE PME"]
summary: "La cybersécurité d’une petite équipe repose sur quelques habitudes : un gestionnaire de mots de passe et la double authentification sur chaque compte, un appel de vérification avant tout paiement vers un nouveau RIB, des sauvegardes déjà restaurées une fois, des appareils à jour et des accès fermés le jour d’un départ. Ajoutez un plan d’une page pour la première heure d’un incident, et vérifiez ce que vos clients et la loi attendent de vous. L’essentiel est gratuit."
cover: "cybersecurity-guide"
cover_alt: "Le titre « Cybersécurité des petites équipes : le guide complet » en blanc sur un panneau de verre cannelé posé sur une photo, avec un cadenas"
related: ["incident-response-first-hour", "two-factor-authentication-passkeys", "invoice-fraud-bank-details", "backups-3-2-1", "website-security-guide"]
services: ["rescue"]
faq:
  - q: "L’antivirus intégré à Windows ou à macOS suffit-il pour une petite équipe ?"
    a: "Dans la plupart des cas, oui, s’il reste activé et à jour : Microsoft Defender sous Windows et les protections intégrées à macOS sont maintenus par Microsoft et Apple. Les attaques les plus courantes, hameçonnage et piratage de compte, passent par la messagerie et les mots de passe : la double authentification, les mises à jour et les sauvegardes vous protègent davantage qu’un antivirus payant."
  - q: "Faut-il payer la rançon après une attaque par rançongiciel ?"
    a: "Non, c’est l’avis de l’ANSSI : payer ne garantit pas de récupérer vos données, finance les criminels et n’empêche pas une nouvelle attaque. Isolez les machines touchées, signalez l’attaque, portez plainte et restaurez une sauvegarde antérieure à l’infection."
  - q: "Faut-il porter plainte après une cyberattaque ?"
    a: "Oui, même si rien n’est récupérable : la plainte permet l’enquête et conditionne l’indemnisation par votre assureur. 17Cyber vous oriente à toute heure et, en cas d’attaque grave, vous met en relation avec un policier ou un gendarme pour engager les démarches judiciaires."
  - q: "Qui doit s’occuper de la cybersécurité sans service informatique ?"
    a: "Une personne désignée, souvent la direction ou la personne qui gère le bureau, avec une autre pour la remplacer. Elle tient la liste des comptes et des administrateurs, vérifie que les sauvegardes tournent, ferme les accès des personnes qui partent et garde le plan d’incident à jour. Nul besoin d’un profil technique : il faut surtout une heure réservée chaque mois."
  - q: "La cybersécurité coûte-t-elle cher à une petite équipe ?"
    a: "Moins qu’on ne le croit. L’essentiel est gratuit : double authentification, mises à jour, antivirus intégré, réglages de sécurité de Google Workspace ou de Microsoft 365, guides officiels et diagnostic MonAideCyber. Les dépenses habituelles sont un gestionnaire de mots de passe d’équipe et une sauvegarde de la suite cloud, plus une assurance cyber si votre activité le justifie."
---

La cybersécurité d’une petite équipe tient surtout à ses comptes, à ses paiements et à ses sauvegardes, bien plus qu’aux pare-feu. Les attaques qui touchent les entreprises sans service informatique sont rarement sophistiquées : un mot de passe volé ouvre une messagerie, un faux email change le RIB d’une facture, un ordinateur jamais mis à jour laisse entrer un logiciel malveillant. Les parades sont tout aussi simples, et la plupart sont gratuites.

Je vois surtout le côté urgence. Pilotech, installateur de climatisation en Île-de-France, a fait appel à moi quand son ancien site WordPress a été piraté. J’ai récupéré le site, puis construit un nouveau site web, et deux ans plus tard nous travaillons toujours ensemble, sur le référencement, le cold emailing et {{< a page="/projects/pilotech" >}}de nouveaux sites{{< /a >}}.

Ce guide est le point d’entrée de la rubrique cybersécurité, dans l’ordre que je suivrais en partant de zéro : pourquoi les petites équipes sont visées, le socle officiel, puis les comptes, la messagerie et les paiements, les données, l’équipe, les appareils, votre site et vos applications, la première heure d’un incident, l’assurance, les règles qui s’appliquent à vous et les aides gratuites. Chaque partie renvoie vers un guide détaillé.

## Cybersécurité des petites équipes : pourquoi vous êtes une cible

La plupart des attaques contre les petites équipes n’ont rien de personnel. Des robots parcourent Internet à la recherche de logiciels pas à jour et essaient des mots de passe divulgués sur toutes les pages de connexion qu’ils trouvent, les emails d’hameçonnage partent en masse, et un escroc qui entre dans une messagerie peut la lire en silence jusqu’à l’échéance d’une facture. Une petite équipe vaut l’effort : elle paie par virement, fait confiance aux emails et a rarement quelqu’un pour surveiller les connexions inhabituelles.

Le [rapport d’activité 2025 de Cybermalveillance.gouv.fr](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/actualites/rapport-activite-2025) donne l’ampleur du phénomène : plus de 500 000 demandes d’assistance en 2025, soit 20 % de plus qu’en 2024. Pour les entreprises et les associations, le piratage de compte est devenu la première menace, avec 21 % des parcours d’assistance, et la fraude au virement est entrée dans les trois premières.

Il y a aussi la chaîne d’approvisionnement. Si vous travaillez pour de plus grandes entreprises, vous détenez peut-être leurs données ou un accès à leurs systèmes, et certaines doivent désormais vérifier la sécurité de leurs fournisseurs. Votre sécurité entre dans le contrat.

Rien de tout cela ne justifie la panique. Les mêmes quelques mesures protègent contre les plus courantes de ces attaques, et ce sont celles que recommandent les autorités.

## Le socle : ce que recommandent l’ANSSI et Cybermalveillance.gouv.fr

Inutile d’écrire une politique de sécurité à partir de zéro. L’ANSSI et la Direction générale des entreprises publient [La cybersécurité pour les TPE/PME en 13 questions](https://www.entreprises.gouv.fr/la-dge/publications/la-cybersecurite-pour-les-tpepme-en-13-questions), un questionnaire d’autodiagnostic qui va des sauvegardes et des mises à jour jusqu’à l’assurance et à la gestion d’incident. Cybermalveillance.gouv.fr publie de son côté une fiche courte pour chaque type de menace.

Mis bout à bout, ces documents se résument à une courte liste : **protéger les comptes, vérifier les paiements, sauvegarder, mettre à jour les appareils, fermer les accès au départ et savoir quoi faire le jour J**. La suite de ce guide les reprend dans cet ordre.

## Comptes et identités : les clés de tout le reste

Votre messagerie est le passe-partout : qui la contrôle peut réinitialiser le mot de passe de presque tout le reste, du nom de domaine au logiciel de comptabilité. Les comptes passent donc en premier, et trois habitudes font l’essentiel du travail.

1. **Un mot de passe unique par compte, rangé dans un gestionnaire de mots de passe.** Les accès partagés vont dans un coffre d’équipe, pas dans un tableur ni dans une conversation de messagerie instantanée. {{< a key="password-manager-teams" >}}Mon comparatif Bitwarden, 1Password et Proton Pass pour une équipe{{< /a >}} montre lequel convient à une équipe de dix personnes au plus qui veut une administration simple, lequel est open source et lequel coûte le moins cher.
2. **La double authentification partout, les passkeys quand c’est possible.** Commencez par la messagerie, puis le nom de domaine, la banque, le site, les paiements, la comptabilité, le stockage et les réseaux sociaux. {{< a key="two-factor-authentication-passkeys" >}}Activer la double authentification et les passkeys{{< /a >}} tient en un après-midi : une passkey ou une clé de sécurité d’abord, une application d’authentification ensuite, le SMS en dernier recours.
3. **Des comptes d’administration séparés.** Le compte qui peut tout modifier ne doit pas être celui qui ouvre des pièces jointes toute la journée. Confiez les droits d’administration à un compte dédié, et au plus petit nombre de personnes possible.

Les comptes doivent aussi être au nom de l’entreprise. Un nom de domaine ou un Google Workspace enregistré au nom d’un ancien freelance, c’est une serrure dont vous n’avez plus la clé.

## Messagerie et paiements : là où part l’argent

L’hameçonnage alimente une bonne part de ces piratages de compte, parce qu’il fonctionne : un email avec une fausse page de connexion suffit à livrer une messagerie, et c’est dans la messagerie que se trouvent les factures. Une bonne part des fraudes au paiement visant les petites équipes commence là.

**La fraude au faux RIB** en est la version classique : une facture de fournisseur, vraie ou copiée, arrive avec de nouvelles coordonnées bancaires, ou quelqu’un qui semble être le dirigeant demande un virement urgent et confidentiel. {{< a key="invoice-fraud-bank-details" >}}Mon guide sur la fraude au faux RIB et au président{{< /a >}} explique comment la repérer, et la règle qui la bloque : aucun RIB reçu par email n’est utilisé avant un appel à un numéro que vous aviez déjà, et une deuxième personne valide chaque nouveau bénéficiaire.

**Les deepfakes** reprennent la même arnaque avec une voix clonée ou une fausse visioconférence, fabriquées à partir d’enregistrements publics. Vous ne repérerez pas l’imitation à coup sûr : {{< a key="deepfake-voice-ceo-fraud" >}}la parade contre les voix clonées et les deepfakes{{< /a >}} reste le rappel à un numéro connu, ou une question dont seule la vraie personne connaît la réponse.

Les banques aident un peu. Depuis le 9 octobre 2025, avant un virement en euros, votre banque vérifie que le nom du bénéficiaire correspond à l’IBAN (règlement (UE) 2024/886) et vous affiche le résultat : correspondance, correspondance partielle, absence de correspondance ou vérification impossible, avec des libellés qui varient d’une banque à l’autre. Une absence de correspondance veut dire qu’on s’arrête et qu’on appelle ; une correspondance ne dispense pas de l’appel.

Votre nom de domaine mérite aussi une protection. Sans enregistrements SPF, DKIM et DMARC, n’importe qui peut envoyer des emails qui semblent venir de votre adresse, exactement ce que cherche un fraudeur au faux RIB. {{< a key="spf-dkim-dmarc-setup" >}}Configurer SPF, DKIM et DMARC{{< /a >}} demande quelques enregistrements DNS, et aide du même coup vos vrais emails à éviter les spams.

## Données : sauvegardes et suite cloud

Rançongiciel, dossier supprimé, synchronisation qui recopie les dégâts partout : sans sauvegarde, tout finit de la même façon. La règle 3-2-1 est la réponse classique, recommandée notamment par l’ANSSI dans son guide sur les sauvegardes : trois copies de vos données, sur deux types de supports, dont une hors de vos locaux et, idéalement, hors ligne ou impossible à modifier.

On croit volontiers que Google ou Microsoft s’en charge. Google Workspace et Microsoft 365 ne gardent les éléments supprimés que quelques semaines ou quelques mois, et la synchronisation recopie fidèlement les suppressions comme les fichiers chiffrés. {{< a key="backups-3-2-1" >}}Mon guide de la règle de sauvegarde 3-2-1{{< /a >}} couvre vos fichiers, Google Workspace et Microsoft 365, avec un test de restauration à faire chaque trimestre.

La suite cloud elle-même a quelques réglages qui valent mieux que n’importe quel outil supplémentaire : validation en deux étapes imposée à tous, le moins de super-administrateurs ou d’administrateurs généraux possible, la sécurité de Gmail ou la stratégie prédéfinie Standard de Microsoft, aucun transfert automatique vers l’extérieur, un partage de fichiers encadré et une revue des applications connectées. {{< a key="secure-google-workspace-microsoft-365" >}}Sécuriser Google Workspace et Microsoft 365{{< /a >}} les détaille un par un ; presque tout fonctionne avec les offres les moins chères.

## L’équipe : sensibilisation et départs

Beaucoup d’incidents commencent par quelqu’un qui fait quelque chose de raisonnable au mauvais moment : cliquer sur un lien entre deux rendez-vous, payer une facture un vendredi soir. La sensibilisation aide quand elle est courte, régulière et porte sur les arnaques que votre équipe reçoit vraiment ; le kit de sensibilisation gratuit de Cybermalveillance.gouv.fr est une bonne base. La règle la plus utile ne coûte rien : **quiconque clique sur quelque chose de suspect le dit tout de suite, et personne n’est blâmé**. Plus vous le savez tôt, moins cela coûte.

Les départs sont l’autre moitié du sujet. Le NCSC britannique le rappelle : les comptes d’anciens salariés ou prestataires restent souvent actifs sans que personne ne s’en aperçoive. {{< a key="offboarding-checklist" >}}La checklist de départ d’un salarié ou d’un freelance{{< /a >}} ferme les accès en trois temps : avant le dernier jour, listez ses comptes, appareils et codes ; le jour J, suspendez son compte sans le supprimer et changez les mots de passe partagés ; dans les semaines qui suivent, renouvelez les clés d’API, vérifiez les règles de transfert et supprimez ses données à l’échéance. Pour un freelance, prévoyez la fin des accès dès le premier jour.

## Ordinateurs et téléphones

Sans service informatique, chaque ordinateur portable est sa propre petite salle serveur. Six réglages couvrent l’essentiel du risque : mises à jour automatiques, chiffrement du disque (FileVault sur Mac, BitLocker sur Windows), verrouillage de l’écran après cinq minutes, compte standard au quotidien, antivirus intégré, localisation et effacement à distance activés. Pour les téléphones : mises à jour, code d’au moins six chiffres et applications des stores officiels uniquement. {{< a key="device-security-basics" >}}Mon guide sur la sécurité des ordinateurs et des téléphones sans service informatique{{< /a >}} détaille chaque réglage.

Une date à vérifier : le support de Windows 10 a pris fin le 14 octobre 2025. Au 19 octobre 2026, un PC professionnel encore sous Windows 10 doit passer à Windows 11, souscrire aux mises à jour de sécurité étendues payantes de Microsoft pour les organisations, ou être remplacé.

## Votre site et vos applications

Votre site est souvent ce que vous avez de plus exposé : il est public, il fait tourner des logiciels à mettre à jour, et son nom de domaine porte aussi vos emails. {{< a key="website-security-guide" >}}Mon guide pour sécuriser son site internet{{< /a >}} présente les quatre habitudes sur lesquelles repose la sécurité d’un site : des comptes au nom de l’entreprise protégés par la double authentification, des logiciels à jour avec le moins d’extensions possible, des sauvegardes déjà restaurées une fois, et un nom de domaine verrouillé qui se renouvelle automatiquement. Si le pire est arrivé, {{< a key="wordpress-site-hacked" >}}les 24 premières heures après le piratage d’un site WordPress{{< /a >}} sont détaillées pas à pas ; WordPress est derrière la plupart des appels d’urgence que je reçois.

Si vous publiez une application mobile, {{< a key="mobile-app-security-checklist" >}}la checklist de sécurité avant lancement{{< /a >}} traduit l’OWASP MASVS en vérifications concrètes : aucune clé secrète dans l’application, des droits contrôlés par le serveur à chaque requête, des jetons protégés par le trousseau d’iOS ou l’Android Keystore, et du TLS pour tout le trafic.

## En cas d’attaque : la première heure

La première heure décide du coût d’un incident, et l’ordre des gestes compte plus que leur vitesse : d’abord limiter les dégâts, ensuite comprendre. Appelez votre banque tout de suite si de l’argent est parti. Reprenez une messagerie piratée depuis un appareil sain. Coupez du réseau les ordinateurs infectés sans les éteindre, comme le recommande l’ANSSI, car un redémarrage peut aggraver la situation et effacer des traces. {{< a key="incident-response-first-hour" >}}Le plan de la première heure{{< /a >}} traite la messagerie piratée, le rançongiciel et la fraude bancaire un par un, avec les signalements à faire, à commencer par [17Cyber](https://www.17cyber.gouv.fr/).

Si des données personnelles sont touchées, un second compte à rebours démarre. L’article 33 du RGPD impose de notifier la violation à la CNIL dans les meilleurs délais et, si possible, dans les 72 heures après en avoir pris connaissance, sauf si elle n’est pas susceptible d’engendrer un risque pour les personnes. {{< a key="gdpr-data-breach" >}}Que faire dans les 72 heures après une violation de données{{< /a >}} explique comment décider, quoi déclarer et ce qui va dans votre registre interne. Au 19 octobre 2026, le passage à 96 heures proposé par la Commission européenne n’est pas adopté.

Écrivez votre propre plan avant d’en avoir besoin, sur une page : qui appelle la banque, qui détient les comptes d’administration, où se trouvent la liste des comptes et les sauvegardes, comment l’équipe se joint si la messagerie tombe, et les numéros à appeler. Gardez-en une copie papier : un plan rangé dans la messagerie piratée ne sert à rien.

## Assurance cyber : quand elle vaut le coup

Une assurance cyber prend en charge le coût d’une attaque ou d’une fuite de données : experts, restauration des systèmes et des données, pertes d’exploitation, extorsion, notification et réclamations de tiers. Tout se joue dans les clauses : la fraude au faux RIB et les attaques étatiques sont souvent exclues, et la sécurité déclarée doit être réellement en place. {{< a key="cyber-insurance" >}}Mon guide de l’assurance cyber{{< /a >}} explique quand elle vaut le coup : quand votre équipe ne peut plus travailler sans son informatique, paie ses fournisseurs par virement, détient beaucoup de données personnelles ou travaille pour des clients qui l’exigent.

La loi ajoute une condition à toute indemnisation : l’assureur ne peut couvrir les pertes causées par une cyberattaque que si vous avez porté plainte dans les 72 heures après en avoir eu connaissance (article L12-10-1 du Code des assurances, en vigueur depuis avril 2023).

## Les règles : RGPD, NIS2, questionnaires clients et Cyber Resilience Act

Cette partie décrit les règles telles qu’elles s’appliquent au 19 octobre 2026 ; ce n’est pas un conseil juridique, et pour une clause de contrat, un courrier de la CNIL ou une fuite de données sensibles, un avocat ou un DPO vaut la dépense.

| Texte | Qui est concerné | Ce que cela change pour une petite équipe | Situation au 19 octobre 2026 |
|---|---|---|---|
| RGPD, articles 32 à 34 | Toute structure qui traite des données personnelles de personnes dans l’UE, y compris hors de l’UE quand elle leur propose des biens ou des services | Une sécurité adaptée au risque et la notification des violations sous 72 heures | En vigueur |
| NIS2, [directive (UE) 2022/2555](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555) | Les moyennes et grandes entreprises de 18 secteurs, plus quelques prestataires quelle que soit leur taille | Surtout indirect : vos clients concernés doivent contrôler leurs fournisseurs | Date limite de transposition dépassée depuis le 17 octobre 2024 ; loi française non adoptée |
| DORA, règlement (UE) 2022/2554 | Banques, assureurs, entreprises d’investissement et autres entités financières | Indirect : elles doivent encadrer le risque lié à leurs prestataires informatiques | Applicable depuis le 17 janvier 2025 |
| Cyber Resilience Act, règlement (UE) 2024/2847 | Les entreprises qui fournissent un logiciel ou un produit connecté dans l’UE, payant ou gratuit, applications comprises (les sites web et les SaaS seuls sont en général hors champ) | Signaler les failles activement exploitées et les incidents graves, puis respecter des exigences de sécurité | Signalement depuis le 11 septembre 2026 ; le reste à partir du 11 décembre 2027 |

Pour la plupart des petites équipes, NIS2 arrive par les clients plutôt que par le régulateur. {{< a key="nis2-small-business" >}}Mon guide NIS2{{< /a >}} explique qui est concerné, y compris certains prestataires quelle que soit leur taille, comme les fournisseurs DNS, et ce que les clients concernés vont demander : double authentification, sauvegardes, signalement des incidents. Le projet de loi de transposition, adopté par le Sénat en mars 2025, a été retiré le 6 octobre 2026 de l’ordre du jour de l’Assemblée nationale, et aucune nouvelle date n’avait été annoncée à l’heure où j’écris ces lignes ; en attendant, l’ANSSI propose un pré-enregistrement volontaire sur son portail MonEspaceNIS2.

Ces demandes arrivent souvent sous la forme d’un {{< a key="security-questionnaire" >}}questionnaire de sécurité envoyé par un grand compte{{< /a >}}. Répondez à chaque question avec honnêteté : un « oui » avec une preuve, un « non » avec une mesure compensatoire ou une date, un « sans objet » avec la raison, puis gardez vos réponses et vos documents dans un dossier sécurité réutilisable.

Si vous proposez une application ou un logiciel dans l’UE, lisez {{< a key="cyber-resilience-act-apps" >}}mon guide du Cyber Resilience Act pour les applications{{< /a >}}. Pour le reste des données personnelles, {{< a key="gdpr-guide" >}}mon guide du RGPD pour les petites équipes{{< /a >}} couvre les entreprises en Europe et hors d’Europe.

## Les aides gratuites

Une bonne partie de l’aide est publique et gratuite. {{< a key="free-cybersecurity-help" >}}Mon guide des aides gratuites en cybersécurité{{< /a >}} les passe en revue : 17Cyber conseille les victimes à toute heure, Cybermalveillance.gouv.fr publie fiches et kit de sensibilisation, MonAideCyber propose un diagnostic d’environ 1 h 30 avec un bénévole formé par l’ANSSI, et les CSIRT régionaux assurent le premier niveau de réponse à un incident. Le diagnostic MonAideCyber ne s’adresse toutefois ni aux structures d’une seule personne ni aux auto-entrepreneurs. Restent payantes la remise en état par un prestataire et les certifications.

## Votre premier mois, dans l’ordre

1. **Semaine 1, les comptes.** Listez tous les comptes dont dépend l’entreprise et qui en est administrateur. Installez le gestionnaire de mots de passe, puis la double authentification sur la messagerie, le nom de domaine et la banque.
2. **Semaine 2, paiements et messagerie.** Écrivez la règle de l’appel de vérification et désignez la deuxième personne qui valide les nouveaux bénéficiaires. Publiez SPF, DKIM et DMARC, et bloquez le transfert automatique vers l’extérieur.
3. **Semaine 3, données et appareils.** Mettez en place des sauvegardes 3-2-1, suite cloud comprise, et testez une restauration. Vérifiez mises à jour, chiffrement et verrouillage sur chaque ordinateur et téléphone, et repérez les PC encore sous Windows 10.
4. **Semaine 4, équipe et plan.** Rédigez la checklist de départ, organisez une courte séance sur l’hameçonnage, imprimez le plan d’incident d’une page, et voyez si une assurance cyber ou un diagnostic MonAideCyber vous serait utile.

Ensuite, tous les trois mois : testez une restauration, passez en revue les comptes d’administration et les anciens collaborateurs, et relisez le plan.

## Quand passer la main

Pour l’essentiel de ce guide, vous n’avez besoin ni de moi ni de personne. Faites appel à quelqu’un quand :

- un compte ou votre site reste compromis après le changement des mots de passe ;
- de l’argent est parti et vous devez comprendre comment le fraudeur est entré ;
- un rançongiciel a chiffré vos fichiers sans sauvegarde saine : commencez par 17Cyber, qui oriente vers des prestataires référencés ou labellisés ExpertCyber, et appelez l’assistance de votre assureur si vous en avez un ;
- le questionnaire d’un client demande des preuves que vous ne savez pas produire sans aide ;
- personne ne sait qui détient les comptes d’administration ou le nom de domaine.

Pour un site piraté, un compte détourné ou un accès perdu, je réponds le jour même ou sous 24 heures. Les honoraires se règlent d’avance ; si je ne parviens pas à résoudre le problème, vous recevez un rapport écrit à transmettre à un autre prestataire et je rembourse 70 % de la facture. Pour les clients que je suis déjà, l’urgence passe d’abord, la facture ensuite.
