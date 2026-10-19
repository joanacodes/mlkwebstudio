---
title: "Violation de données : que faire dans les 72 heures"
seo_title: "Notification de violation de données à la CNIL sous 72 h"
description: "Notification de violation de données à la CNIL : quand démarre le délai de 72 heures, comment déclarer, quand prévenir les personnes, quoi consigner."
slug: "notification-violation-donnees-cnil"
translationKey: "gdpr-data-breach"
date: 2026-10-18T21:30:00+02:00
lastmod: 2026-10-18T21:30:00+02:00
category: "gdpr"
article_type: "guide"
keywords: ["notification violation de données CNIL", "violation de données personnelles 72 heures", "notifier une violation de données", "article 33 RGPD", "registre des violations de données", "fuite de données que faire"]
summary: "En cas de violation de données personnelles, vous devez la notifier à la CNIL dans les meilleurs délais et, si possible, dans les 72 heures après en avoir pris connaissance, sauf si elle n’est pas susceptible d’engendrer un risque pour les personnes. Si le risque est élevé, prévenez aussi les personnes concernées. Toute violation, notifiée ou non, va dans votre registre interne ; au 19 octobre 2026, le passage à 96 heures n’est qu’une proposition."
cover: "gdpr-data-breach"
cover_alt: "Le titre « Violation de données : que faire dans les 72 heures » en blanc sur un panneau de verre cannelé posé sur une photo, avec un bouclier marqué d’une coche"
related: ["incident-response-first-hour", "gdpr-fines-small-business", "cyber-insurance", "digital-omnibus-gdpr", "website-security-guide"]
services: ["rescue"]
faq:
  - q: "Le délai de 72 heures inclut-il le week-end et les jours fériés ?"
    a: "Oui. Le RGPD compte 72 heures, pas trois jours ouvrés, et ni le week-end ni les jours fériés ne les prolongent : une violation dont vous prenez connaissance le vendredi à 18 h doit être notifiée au plus tard le lundi à 18 h."
  - q: "Faut-il notifier une violation si les données étaient chiffrées ?"
    a: "En général non, si le chiffrement était solide, que la clé n’a pas été compromise et qu’une sauvegarde existe : les données sont incompréhensibles pour qui les détient, la violation n’est donc probablement pas susceptible d’engendrer un risque. Inscrivez-la au registre avec ce raisonnement."
  - q: "Mon hébergeur ou mon outil d’emailing a subi une fuite : qui notifie ?"
    a: "Vous, si vous décidez de l’usage des données : vous êtes alors responsable du traitement. Votre prestataire, en tant que sous-traitant, doit vous prévenir dans les meilleurs délais (article 33.2), et vos 72 heures courent à partir de ce moment. Votre contrat de sous-traitance doit préciser comment et en combien de temps il le fera."
  - q: "Que risque-t-on à ne pas notifier une violation ?"
    a: "Le défaut de notification est un manquement en soi : jusqu’à 10 millions d’euros ou 2 % du chiffre d’affaires annuel mondial, le montant le plus élevé étant retenu (article 83.4). L’article 83.2 permet aussi à la CNIL de tenir compte de votre notification, ou de son absence, et de ce que vous avez fait pour limiter les dégâts."
  - q: "Un site piraté, est-ce une violation de données ?"
    a: "Seulement si des données personnelles ont été exposées, modifiées ou perdues : formulaires, comptes clients, commandes ou liste d’abonnés stockés sur le site ou accessibles depuis lui. Une page défigurée sans données personnelles derrière est un incident de sécurité, pas une violation au sens du RGPD ; vérifiez d’abord ce que l’attaquant pouvait atteindre."
---

Une violation de données personnelles déclenche un compte à rebours que beaucoup de petites équipes découvrent le jour même : la notification de violation de données à la CNIL doit partir dans les 72 heures après que vous en avez pris connaissance, sauf si la violation n’est pas susceptible d’engendrer un risque pour les personnes. Dans ce délai, il faut comprendre ce qui s’est passé, évaluer ce risque, notifier si nécessaire et préparer l’information des personnes concernées quand le risque est élevé.

Plusieurs de mes relations clients ont commencé par un appel en urgence pour un site piraté, et dans cet appel, la priorité est de récupérer le site. Ce guide traite de ce qui doit avancer en parallèle de la réparation : le délai légal, les décisions et le registre, pour les entreprises établies en France ou ailleurs dans l’UE, et pour celles qui, hors de l’UE, ont des clients européens. Il fait partie de mon {{< a key="gdpr-guide" >}}guide du RGPD pour les petites équipes{{< /a >}}.

## Ce qui compte comme une violation de données personnelles

L’article 4.12 du RGPD la définit comme « une violation de la sécurité entraînant, de manière accidentelle ou illicite, la destruction, la perte, l’altération, la divulgation non autorisée de données à caractère personnel transmises, conservées ou traitées d’une autre manière, ou l’accès non autorisé à de telles données ». Nul besoin d’un pirate : dans une petite équipe, beaucoup de violations sont des erreurs ordinaires. On les classe selon ce qui a été atteint :

- **Confidentialité** : quelqu’un a vu des données qu’il n’aurait pas dû voir. Une facture envoyée au mauvais client, un mailing parti en Cc au lieu de Cci, une messagerie piratée, un formulaire de contact dont les réponses dorment dans un fichier accessible à tous.
- **Intégrité** : des données ont été modifiées sans autorisation. Un intrus remplace le RIB sur vos factures, ou les adresses des clients de votre boutique.
- **Disponibilité** : des données ont été perdues ou rendues inaccessibles. Un rançongiciel, un ordinateur volé avec la seule copie d’un dossier client, une base supprimée sans sauvegarde.

Un même incident peut cocher plusieurs cases : un rançongiciel qui copie vos fichiers avant de les chiffrer porte atteinte à la confidentialité et à la disponibilité.

## Notification de violation de données à la CNIL : les trois obligations

Dès que des données personnelles sont en jeu, trois obligations s’appliquent, chacune avec son seuil. Elles figurent aux articles 33 et 34 du [texte du RGPD sur EUR-Lex](https://eur-lex.europa.eu/eli/reg/2016/679/oj).

| Obligation | Quand | Délai | Article |
|---|---|---|---|
| Inscrire la violation au registre interne | Toujours | Au fil de l’eau | 33.5 |
| Notifier la CNIL | Sauf si la violation n’est pas susceptible d’engendrer un risque pour les personnes | Dans les meilleurs délais, et si possible 72 heures au plus tard | 33.1 |
| Informer les personnes concernées | Si le risque pour elles est élevé | Dans les meilleurs délais | 34 |

Trois précisions comptent pour ces 72 heures :

- **Le délai court à partir du moment où vous en avez connaissance.** Le Comité européen de la protection des données (CEPD), qui réunit les autorités européennes, situe ce moment au point où vous avez une certitude raisonnable qu’un incident de sécurité a compromis des données personnelles. Une courte vérification pour en arriver là est normale ; garder un fort soupçon pour soi ne l’est pas.
- **Vous pouvez notifier en plusieurs fois.** L’article 33.4 permet d’envoyer ce que vous savez dans le délai, puis de compléter sans nouveau retard indu.
- **Mieux vaut tard que jamais.** Une notification envoyée après 72 heures doit expliquer le retard, mais elle reste due.

Le RGPD britannique (UK GDPR) prévoit les mêmes obligations et les mêmes 72 heures, avec l’ICO comme autorité.

## Les 72 premières heures, étape par étape

### Dans la première heure : dater la découverte et contenir

1. Notez quand et comment vous l’avez appris, et qui l’a remarqué. Cet horodatage sert de repère pour vos 72 heures.
2. Arrêtez la fuite : changez le mot de passe compromis et fermez toutes les sessions, mettez hors ligne le formulaire ou le fichier exposé, demandez au mauvais destinataire de supprimer l’e-mail et de le confirmer par écrit, déconnectez du réseau l’ordinateur infecté.
3. Gardez les preuves : captures d’écran, e-mail suspect, journaux. Ne réinstallez rien avant de savoir ce qui s’est passé.
4. Ouvrez votre registre et notez chaque action avec son heure.

Le volet technique de cette première heure, scénario par scénario, se trouve dans mon {{< a key="incident-response-first-hour" >}}plan de la première heure en cas de cyberattaque{{< /a >}}.

### Entre la 1re et la 24e heure : établir ce qui a été exposé

Répondez par écrit, même approximativement :

- Quelles données : noms et e-mails, adresses, RIB, pièces d’identité, données de santé, mots de passe ?
- Combien de personnes et d’enregistrements, à peu près, et dans quels pays vivent-elles ?
- Les données étaient-elles chiffrées, et la clé est-elle en sécurité ?
- Qui les détient maintenant : un client qui les a supprimées, ou un attaquant inconnu ?
- Avez-vous une sauvegarde saine ?
- Un prestataire est-il en cause : hébergeur, outil d’emailing, CRM, agence ?

Si vous avez une assurance cyber, appelez votre assureur maintenant, avant d’engager qui que ce soit : le contrat peut fixer des conditions et prévoir ses propres intervenants. En cas d’attaque, la loi subordonne aussi l’indemnisation à une plainte déposée sous 72 heures (voir plus bas). Mon guide de l’{{< a key="cyber-insurance" >}}assurance cyber{{< /a >}} détaille ce que couvrent ces contrats.

### Entre la 24e et la 72e heure : décider et notifier

- Appliquez le test de risque de la section suivante, puis notez votre décision et ses raisons dans le registre.
- Si une notification est due, envoyez-la avec ce que vous savez. L’article 33.3 en fixe le contenu : la nature de la violation, les catégories et le nombre approximatif de personnes et d’enregistrements, un point de contact, les conséquences probables et les mesures prises ou envisagées.
- Dans le doute, notifiez. Une notification se complète ou se corrige ensuite ; un retard, lui, ne se rattrape pas.

### Si le risque est élevé : informer les personnes concernées

L’article 34 vous demande de prévenir les personnes concernées dans les meilleurs délais, en des termes clairs et simples : ce qui s’est passé, les conséquences probables, ce que vous avez fait et un point de contact. Ajoutez ce qu’elles doivent faire, car c’est ce qui limite les dégâts. Un message court suffit :

```text
Objet : Incident de sécurité concernant vos données

Le [date], nous avons constaté que [ce qui s’est passé, en une phrase].
Données concernées : [types de données].
Ce que nous avons fait : [mesures prises].
Ce que nous vous recommandons : [changer votre mot de passe sur X ; vous méfier
des e-mails ou appels qui se réclament de nous ; surveiller vos relevés bancaires].
Questions : [nom, adresse e-mail, téléphone].
```

Ce message individuel n’est pas obligatoire si les données étaient protégées de façon à être incompréhensibles (un chiffrement solide, par exemple), si des mesures prises ensuite rendent le risque élevé improbable, ou s’il demande des efforts disproportionnés : une communication publique le remplace alors. La CNIL peut aussi vous ordonner d’informer les personnes.

### Après 72 heures : corriger et compléter

Corrigez la cause (mise à jour, double authentification, suppression d’un vieil export, accès restreints), envoyez à la CNIL les informations qui manquaient et clôturez l’entrée du registre.

## Comment évaluer le risque

Le RGPD ne donne pas d’échelle ; les lignes directrices du CEPD listent ce qu’il faut peser :

- le type de données : bancaires, d’identité, de santé ou autres données sensibles pèsent plus qu’une adresse e-mail professionnelle ;
- le nombre de personnes et le volume d’enregistrements ;
- la facilité à identifier les personnes ;
- les conséquences possibles : fraude, usurpation d’identité, discrimination, détresse ;
- qui détient les données maintenant, et si vous pouvez les récupérer ;
- la vulnérabilité des personnes, comme des enfants ou des patients.

Quelques exemples pour calibrer votre jugement, chacun dépendant toujours des détails :

| Situation | Notifier la CNIL ? | Informer les personnes ? |
|---|---|---|
| Ordinateur portable volé, disque chiffré, clé en sécurité, fichiers sauvegardés | Probablement pas : registre | Non |
| Newsletter d’une boulangerie envoyée en Cc : 80 clients voient les adresses des autres | Probablement pas : registre | Rarement |
| Rappel de rendez-vous d’un cabinet de psychologue envoyé en Cc à 80 patients | Oui | Oui : cela révèle un suivi de santé |
| Boutique en ligne piratée, comptes clients copiés avec mots de passe et adresses | Oui | Oui, pour qu’ils changent leurs mots de passe |
| Rançongiciel, sauvegarde saine restaurée, aucun signe de copie des données | Peut-être pas, si votre enquête le confirme : registre | Non |

L’outil d’auto-évaluation de l’ICO, en anglais, pose les mêmes questions, et le test est identique sous le RGPD européen.

## Où notifier : CNIL, ICO et entreprises hors de l’UE

Une entreprise établie dans un seul pays de l’UE notifie l’autorité de ce pays, même si des clients d’autres États membres sont touchés.

### En France

Passez par le [téléservice de notification de la CNIL](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles). Il accepte une notification en deux temps : une notification initiale dans les 72 heures avec ce que vous savez, puis une notification complémentaire. Justifiez tout retard.

### Au Royaume-Uni

Si vous vendez aussi à des clients au Royaume-Uni, le RGPD britannique vous impose la même démarche auprès de l’ICO, depuis [sa page de déclaration](https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach) (en anglais). L’ICO attend une déclaration en ligne, sauf si vos systèmes sont inaccessibles : sa ligne téléphonique, au +44 303 123 1113 depuis la France, répond alors du lundi au vendredi, de 9 h à 17 h, heure de Londres (10 h à 18 h à Paris). Depuis le 30 septembre 2026, le régulateur s’appelle officiellement Information Commission, mais il garde le nom d’ICO.

### Hors de l’UE

Si le RGPD s’applique à vous parce que vous vendez à des personnes dans l’UE ou suivez leur comportement ({{< a key="gdpr-outside-eu" >}}les deux critères sont expliqués ici{{< /a >}}), vous n’avez pas d’autorité chef de file. Les lignes directrices du CEPD sur la notification des violations (lignes directrices 9/2022, mises à jour en 2023) imposent alors de notifier l’autorité de chaque État membre où vivent des personnes concernées, même si vous avez désigné un représentant dans l’UE au titre de l’article 27. Concrètement, pour une violation à notifier :

- une boutique en ligne suisse ou québécoise qui livre en France et en Belgique notifie la CNIL et l’autorité belge ;
- un éditeur de logiciels marocain ou tunisien qui a des utilisateurs en France et en Espagne notifie la CNIL et l’autorité espagnole ;
- une société britannique qui a des clients à Londres et à Lyon notifie l’ICO et, pour ses clients lyonnais, la CNIL.

## Qui d’autre prévenir

- **La police ou la gendarmerie.** Portez plainte au commissariat, à la gendarmerie ou par écrit auprès du procureur de la République. Le service 17Cyber (police, gendarmerie et cybermalveillance.gouv.fr) oriente les victimes, entreprises comprises, et le [guide de cybermalveillance.gouv.fr pour les dirigeants](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/cyberattaque-que-faire-guide-dirigeants) détaille les bons réflexes. Au Royaume-Uni (hors Écosse), c’est Report Fraud, qui a remplacé Action Fraud le 4 décembre 2025.
- **Votre assureur, avec un second délai de 72 heures.** Depuis le 24 avril 2023, l’article L12-10-1 du Code des assurances subordonne l’indemnisation des pertes causées par une cyberattaque (une atteinte à un système de traitement automatisé de données) au dépôt d’une plainte au plus tard 72 heures après que la victime en a eu connaissance. Il vise les personnes morales et les professionnels, et ce délai court en parallèle de celui de la CNIL.
- **Votre banque**, tout de suite, si des données de carte, un RIB ou un virement frauduleux sont en jeu.
- **Vos clients, si vous traitez leurs données pour eux.** En tant que sous-traitant (agence, freelance, éditeur de logiciel), vous devez prévenir chaque client dans les meilleurs délais (article 33.2) ; c’est lui qui décide de notifier.
- **Les autorités NIS2, si votre entreprise entre dans le champ.** La directive NIS2 vise surtout les moyennes et grandes entreprises des secteurs qu’elle liste. En cas d’incident important, elle ajoute aux obligations du RGPD une alerte précoce sous 24 heures, une notification sous 72 heures et un rapport final dans le mois (article 23 de la directive (UE) 2022/2555). Au 19 octobre 2026, la loi française de transposition n’est toujours pas adoptée : son examen à l’Assemblée nationale, prévu les 7 et 9 octobre, a été reporté sans nouvelle date.

## Ce qu’il faut écrire dans votre registre des violations

L’article 33.5 vous demande de documenter chaque violation, avec les faits, leurs effets et les mesures prises, pour que l’autorité puisse vérifier vos décisions. Un tableur ou un document partagé suffit, avec une entrée par violation :

1. La date de la violation (si vous la connaissez), celle de sa découverte, et qui l’a découverte.
2. Ce qui s’est passé, en quelques phrases.
3. Les données et les personnes concernées : catégories, nombres approximatifs, pays.
4. Votre évaluation du risque et vos décisions : notifier ou non, informer ou non, et pourquoi.
5. Qui a été prévenu et quand : CNIL (avec le numéro de la notification), personnes, assureur, police, clients.
6. Les mesures prises, et ce qui a changé pour éviter que cela se reproduise.

Gardez les entrées des violations non notifiées : ce sont elles qui montrent votre raisonnement. Pour mesurer ce qui est en jeu quand les choses tournent mal, lisez mon article sur les {{< a key="gdpr-fines-small-business" >}}amendes RGPD et ce que risque vraiment une petite équipe{{< /a >}}.

## Digital Omnibus : les 96 heures ne sont pas encore la loi

En novembre 2025, la Commission européenne a proposé un Digital Omnibus qui changerait ces règles : seules les violations susceptibles d’engendrer un risque élevé seraient notifiées à l’autorité, sous 96 heures au lieu de 72, via un point d’entrée unique européen partagé avec d’autres textes de déclaration d’incidents comme NIS2. Au 19 octobre 2026, le texte est toujours en discussion au Parlement européen et au Conseil. Tant qu’il n’est pas adopté et applicable, le délai de 72 heures et le seuil du « risque » s’appliquent. Mon article sur le {{< a key="digital-omnibus-gdpr" >}}Digital Omnibus et le RGPD{{< /a >}} suit la procédure pas à pas.

## Se préparer maintenant, et savoir quand passer la main

Une violation se gère mieux quand les décisions ont été prises avant. Une page suffit :

- qui décide, et qui remplace cette personne en son absence ;
- une liste de contacts gardée hors ligne : le téléservice de la CNIL, la ligne d’assistance de votre assureur, votre banque, votre prestataire informatique ou web, un avocat ;
- l’emplacement du registre, avec une entrée vierge prête ;
- le message aux clients ci-dessus, adapté à votre activité ;
- la liste des prestataires qui détiennent des données personnelles pour vous, et la façon dont chacun vous préviendra.

Ce guide est une information générale, pas un conseil juridique ; consultez un avocat ou un DPO quand la violation touche des données de santé ou financières, beaucoup de personnes, plusieurs pays, une extorsion, ou un contrat client qui prévoit ses propres règles de notification.

Pour un site piraté, la réparation est la partie que je prends en charge : je réponds aux demandes de dépannage le jour même ou sous 24 heures, et si je ne parviens pas à réparer le site, vous recevez un rapport à transmettre à quelqu’un d’autre et 70 % de la facture vous est remboursée. Ce que je ne fais pas, c’est décider à votre place s’il faut notifier : cette évaluation vous revient, en tant que responsable du traitement. Pour rendre le prochain incident moins probable, commencez par mon {{< a key="website-security-guide" >}}guide pour sécuriser votre site internet{{< /a >}}.
