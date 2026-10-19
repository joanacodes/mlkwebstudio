---
title: "Cyber Resilience Act : ce qui s’applique à votre app depuis septembre 2026, et ce qui arrive en 2027"
seo_title: "Cyber Resilience Act : obligations pour votre application"
description: "Le Cyber Resilience Act impose depuis septembre 2026 de signaler en 24 h les failles exploitées d’une application. Ce qui s’applique et ce qui arrive en 2027."
slug: "cyber-resilience-act-application"
translationKey: "cyber-resilience-act-apps"
date: 2026-10-18T22:57:00+02:00
lastmod: 2026-10-18T22:57:00+02:00
category: "mobile-apps"
article_type: "news"
keywords: ["Cyber Resilience Act application", "Cyber Resilience Act application mobile", "CRA obligation de signalement", "CRA 11 septembre 2026", "Cyber Resilience Act 2027", "règlement sur la cyberrésilience"]
summary: "Depuis le 11 septembre 2026, une entreprise qui propose une application dans l’UE, payante ou gratuite, doit signaler les failles activement exploitées et les incidents graves via la plateforme de l’ENISA, avec une alerte précoce sous 24 heures. Dès le 11 décembre 2027, les nouvelles applications et celles qui changent de façon substantielle devront respecter les exigences de sécurité, recevoir des mises à jour de sécurité, en général pendant cinq ans au moins, et porter le marquage CE. Les éditeurs hors UE sont aussi concernés."
cover: "cyber-resilience-act-apps"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’un bouclier marqué d’une coche"
related: ["mobile-app-security-checklist", "api-keys-mobile-apps", "nis2-small-business", "gdpr-outside-eu", "mobile-app-launch-guide"]
services: ["automation"]
faq:
  - q: "Le Cyber Resilience Act s’applique-t-il aux applications gratuites ?"
    a: "Oui, dès que l’application est fournie dans le cadre d’une activité commerciale. Le texte vise les produits mis à disposition à titre onéreux ou gratuit : une application de réservation ou de fidélité gratuite est concernée, tout comme une application financée par la publicité ou les achats intégrés. Une application partagée sans but commercial en est exclue, comme les logiciels libres non commerciaux."
  - q: "Un site web ou une application web est-il concerné par le Cyber Resilience Act ?"
    a: "En général, non, à lui seul. Les sites web et les logiciels vendus en tant que service (SaaS) sortent du CRA, sauf s’ils assurent le traitement de données à distance d’un produit, comme le serveur dont votre application mobile a besoin pour fonctionner. Les services cloud relèvent plutôt de la directive NIS2, qui vise surtout les moyennes et grandes entreprises."
  - q: "Où placer le marquage CE d’une application ?"
    a: "L’article 30 permet à un logiciel de porter le marquage CE soit sur sa déclaration UE de conformité, soit sur le site web qui l’accompagne, dans une section facilement et directement accessible aux consommateurs. Il doit être en place avant la mise sur le marché : à partir du 11 décembre 2027 pour les nouvelles applications et pour celles qui changent de façon substantielle."
  - q: "Mon application est-elle un « produit important » au sens du Cyber Resilience Act ?"
    a: "Seulement si elle entre dans une catégorie de l’annexe III, comme les gestionnaires de mots de passe, les VPN, les navigateurs ou les logiciels de gestion des identités. La plupart de ces produits ne peuvent être auto-évalués que si vous appliquez entièrement des normes harmonisées ou un schéma de certification ; sinon, un organisme notifié doit les vérifier. La plupart des applications d’entreprise, de la réservation à la fidélité, relèvent de la catégorie par défaut."
  - q: "Faut-il publier le SBOM de son application ?"
    a: "Non. Vous devez établir un SBOM (la liste des composants logiciels de l’application) et le conserver avec votre documentation technique, pour qu’une autorité de surveillance du marché puisse le demander. Le publier reste votre choix ; si vous le faites, les informations destinées aux utilisateurs doivent indiquer où le trouver."
---

Depuis le 11 septembre 2026, la première obligation du Cyber Resilience Act européen pour les éditeurs d’applications s’applique, y compris aux applications déjà publiées sur l’App Store et Google Play. Dès que vous savez qu’une faille de votre application est exploitée, vous avez 24 heures pour envoyer une première alerte via l’ENISA, l’agence de l’UE pour la cybersécurité. Les exigences de sécurité de l’application elle-même suivront le 11 décembre 2027.

Cet article s’adresse aux dirigeants de petites équipes qui ont une application, ou en font développer une, et la proposent à des utilisateurs dans l’UE. Je développe des applications sur mesure pour mes clients, et la première question que je vous poserais n’est pas de savoir si votre application est sûre, mais qui, dans votre équipe, remarquerait une attaque et la signalerait dans la journée.

Tout ce qui suit est à jour au 19 octobre 2026, d’après le [règlement (UE) 2024/2847](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R2847), dit règlement sur la cyberrésilience, et les lignes directrices de la Commission européenne de juillet 2026. Il s’agit d’informations générales, pas d’un conseil juridique ; la dernière partie indique quand consulter un avocat.

## Quelles applications sont concernées par le Cyber Resilience Act ?

Le texte encadre les « produits comportant des éléments numériques » : des logiciels ou du matériel mis sur le marché européen, avec le traitement de données à distance dont ils dépendent (article 3). Une application mobile est un logiciel autonome, et les lignes directrices de la Commission confirment qu’il peut entrer dans le champ du texte. Votre application est concernée, et les obligations vous reviennent, si trois conditions sont réunies :

1. **Elle se connecte à quelque chose.** Le texte vise les produits destinés à se connecter, directement ou indirectement, à un appareil ou à un réseau (article 2). C’est le cas de presque toutes les applications.
2. **Elle est fournie dans l’UE dans le cadre d’une activité commerciale**, payante ou gratuite. Un logiciel utilisé uniquement en interne, comme les outils que je développe pour mon propre travail, ne l’est pas.
3. **Elle porte votre nom.** Le fabricant est celui qui commercialise le produit sous son propre nom ou sa propre marque (article 3). Si une agence, un freelance ou un outil d’IA a conçu l’application et que vous la publiez au nom de votre entreprise, le fabricant, c’est vous.

Le serveur derrière l’application compte aussi : si l’application ne peut pas assurer l’une de ses fonctions sans un back-end que vous avez conçu, ou fait concevoir, pour elle, ce back-end fait partie du produit, avec votre API et votre base de données.

Les logiciels libres non commerciaux échappent au texte, tout comme les applications réglementées en tant que dispositifs médicaux, qui ont leurs propres règles européennes (article 2).

## Depuis le 11 septembre 2026 : signaler une faille exploitée en 24 heures

L’article 14, la partie déjà applicable aux éditeurs, vise deux événements, et aucun des deux n’est « nous avons trouvé un bug » :

- **Une vulnérabilité activement exploitée** : il existe des preuves fiables qu’un acteur malveillant a exploité la faille dans un système sans l’autorisation de son propriétaire (article 3). Une faiblesse repérée par votre développeur lors d’une relecture de code, sans signe d’utilisation, ne déclenche pas de signalement.
- **Un incident grave** touchant la sécurité de l’application : il compromet, ou pourrait compromettre, la protection de données ou de fonctions sensibles ou importantes, ou il a introduit, ou pourrait introduire, du code malveillant dans l’application ou chez vos utilisateurs.

Le délai court dès que vous en avez connaissance :

| Étape | Délai | Contenu |
|---|---|---|
| Alerte précoce | Sous 24 heures | Les pays de l’UE où vous savez que l’application est disponible et, pour un incident, s’il semble malveillant |
| Notification | Sous 72 heures | L’application, la nature de l’exploitation ou de l’incident, vos mesures et ce que les utilisateurs peuvent faire |
| Rapport final | 14 jours après la mise à disposition d’un correctif (vulnérabilité), un mois après la notification (incident) | Description, gravité et impact, cause, correctif |

Vous déclarez une seule fois, sur la plateforme unique de signalement de l’ENISA (Single Reporting Platform), [mise en service le 11 septembre 2026](https://www.enisa.europa.eu/news/the-cra-single-reporting-platform-is-launched) : le signalement parvient en même temps à l’ENISA et au CSIRT national concerné (l’équipe de réponse aux incidents de sécurité informatique). Lisez les manuels et tutoriels vidéo de l’ENISA avant d’en avoir besoin. La [page de la Commission sur les obligations de signalement](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting) (en anglais) résume les règles.

Trois points comptent pour les petites équipes :

- **Les applications déjà publiées sont concernées**, même anciennes (article 69), mais une exploitation dont vous aviez connaissance avant le 11 septembre 2026 n’a pas à être signalée rétroactivement.
- **Vos utilisateurs doivent être prévenus.** Informez les utilisateurs touchés, ou tous les utilisateurs si nécessaire, et dites-leur comment se protéger.
- **L’exception pour les petites structures est étroite.** Les microentreprises et petites entreprises (moins de 50 personnes et un chiffre d’affaires ou un total de bilan d’au plus 10 millions d’euros) ne peuvent pas être sanctionnées pour une alerte précoce envoyée après 24 heures (article 64, paragraphe 10). La notification sous 72 heures et le rapport final restent dus, et les amendes les plus lourdes atteignent 15 millions d’euros ou 2,5 % du chiffre d’affaires annuel mondial, le montant le plus élevé étant retenu (article 64).

Si des données personnelles sont touchées, la notification prévue par le RGPD (en principe sous 72 heures, à la CNIL ou à l’autorité compétente, article 33) court en parallèle. L’omnibus numérique (Digital Omnibus), proposé par la Commission le 19 novembre 2025, créerait un point d’entrée unique pour les notifications d’incidents de plusieurs textes européens ; au 19 octobre 2026, ce n’est qu’une proposition. Mon {{< a key="incident-response-first-hour" >}}plan de la première heure après un incident{{< /a >}} détaille ce qu’il faut faire avant tout formulaire.

## À partir du 11 décembre 2027 : sécurité dès la conception, dossier technique et marquage CE

Dès cette date, une application mise sur le marché européen devra respecter les exigences essentielles de l’annexe I, et ce tant que vous en assurez le support. Concrètement, la partie I demande une application qui :

- est livrée sans vulnérabilité exploitable connue et avec une configuration sécurisée par défaut ;
- peut recevoir des mises à jour de sécurité, automatiques par défaut quand c’est pertinent, que l’utilisateur peut refuser ;
- contrôle les accès par une authentification adaptée et chiffre les données stockées et en transit ;
- ne collecte que les données nécessaires, enregistre l’activité utile à la sécurité et permet aux utilisateurs de supprimer définitivement leurs données et paramètres.

La partie II porte sur la gestion des failles dans la durée :

- tenir un **SBOM** (software bill of materials), la liste lisible par machine des composants de l’application, couvrant au moins ses dépendances de premier niveau ;
- publier une politique de divulgation coordonnée des vulnérabilités et une adresse de contact pour signaler une faille ;
- corriger les vulnérabilités sans délai et diffuser les mises à jour de sécurité gratuitement, séparément des nouvelles fonctionnalités quand c’est techniquement possible ;
- tester régulièrement la sécurité de l’application et, une fois un correctif publié, rendre publiques les informations sur la faille corrigée.

Ma {{< a key="mobile-app-security-checklist" >}}checklist de sécurité d’une application mobile{{< /a >}} traduit la partie I en vérifications à demander à votre développeur, à commencer par {{< a key="api-keys-mobile-apps" >}}ne jamais embarquer de clés API dans l’application{{< /a >}}.

Vous devez aussi fixer une **période d’assistance** (la durée du support), pendant laquelle vous traitez les vulnérabilités et publiez les mises à jour de sécurité. Elle dure au moins cinq ans, sauf si l’application est censée être utilisée moins longtemps, et les utilisateurs doivent pouvoir connaître sa date de fin, au moins le mois et l’année (article 13).

Vient ensuite le dossier : une évaluation des risques de cybersécurité, une documentation technique (annexe VII), une déclaration UE de conformité (article 28) et le marquage CE (article 30). Pour la plupart des applications, vous évaluez vous-même la conformité (procédure de contrôle interne).

Les applications déjà sur le marché n’ont à respecter ces exigences que si elles subissent une **modification substantielle** après le 11 décembre 2027 (article 69). Selon les lignes directrices de la Commission, une nouvelle version est substantielle quand elle touche à la conformité, augmente le risque de cybersécurité ou change la finalité de l’application ; les mises à jour courantes ne le sont pas. Une application qui s’enrichit sans cesse franchira probablement cette limite un jour : je préparerais la mise en conformité plutôt que de compter sur l’exemption.

## Si votre entreprise est installée hors de l’UE

Le texte suit l’application, pas l’entreprise. Une agence genevoise dont l’application est sur l’App Store français, une start-up montréalaise avec des utilisateurs en Belgique et un éditeur casablancais présent sur Google Play en France sont tous concernés. La logique rappelle la portée territoriale du RGPD, que j’explique dans {{< a key="gdpr-outside-eu" >}}mon article sur le RGPD hors de l’UE{{< /a >}}.

Vous déclarez sur la même plateforme. Sans établissement dans l’UE, l’article 14, paragraphe 7, désigne le CSIRT national qui reçoit vos signalements, en commençant par le pays de votre mandataire si vous en avez un ; l’obligation reste la vôtre dans tous les cas.

Seule issue : ne plus proposer l’application dans les pays de l’UE, ce qu’App Store Connect et la Play Console permettent de régler pays par pays. Et si vous vendez à des entreprises soumises à {{< a key="nis2-small-business" >}}la directive NIS2{{< /a >}}, attendez-vous aux mêmes questions dans leurs questionnaires fournisseurs, où que soit votre siège.

## Ce que je ferais avant fin 2026

Les exigences de 2027 sont un projet ; l’obligation de 2026, une routine à installer dès maintenant. Dans l’ordre :

1. **Désignez une personne responsable et une autre pour la remplacer.** Décidez qui juge qu’une faille est exploitée, qui envoie l’alerte précoce et qui prévient les utilisateurs. Les 24 heures courent aussi le week-end : faites un exercice avec un ancien bug.
2. **Intégrez votre développeur à la routine.** Si une agence, un freelance ou votre hébergeur risque de repérer une attaque avant vous, votre contrat doit l’obliger à vous prévenir immédiatement et préciser qui corrige, et en combien de temps.
3. **Publiez un contact sécurité.** Créez une adresse du type security@ suivi de votre domaine, une courte page de politique de divulgation et un fichier security.txt (RFC 9116) à l’adresse /.well-known/security.txt du site de l’application, puis liez cette page depuis vos fiches sur les stores.

   ```text
   Contact: mailto:security@example.com
   Expires: 2027-09-30T22:00:00.000Z
   Policy: https://example.com/securite
   Preferred-Languages: fr, en
   ```

   La RFC 9116 recommande une date d’expiration à moins d’un an : programmez un rappel pour la renouveler.
4. **Obtenez un SBOM.** Demandez à votre développeur d’en générer un à chaque version publiée, dans un format standard comme CycloneDX ou SPDX, SDK compris. Il montre vite si une faille publiée vous concerne.
5. **Choisissez votre période d’assistance.** Décidez combien de temps vous publierez des mises à jour de sécurité et quelles versions d’iOS et d’Android vous prenez en charge ; prévoyez de pouvoir imposer une mise à jour pour un correctif critique.
6. **Préparez le dossier de 2027.** Réservez du temps en 2027 pour l’évaluation des risques, la documentation technique et la déclaration de conformité.

Avant 2027, une heure avec un avocat qui connaît la réglementation européenne des produits vaut la dépense si votre application traite des données de santé, financières ou d’enfants, si elle peut être un produit important au sens de l’annexe III, ou si vous ne savez pas qui, de vous ou de votre développeur, est le fabricant. Mon {{< a key="mobile-app-launch-guide" >}}guide pour lancer une application mobile{{< /a >}} couvre le reste, des fiches sur les stores à la publicité.
