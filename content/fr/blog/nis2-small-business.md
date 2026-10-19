---
title: "NIS2 : votre entreprise est-elle concernée, et que vont vous demander vos clients ?"
seo_title: "NIS2 PME : votre entreprise est-elle concernée ?"
description: "NIS2 et PME : critères de taille et de secteur, transposition en France au 19 octobre 2026, et les questions de sécurité que vos clients vont vous poser."
slug: "nis2-pme-entreprises-concernees"
translationKey: "nis2-small-business"
date: 2026-10-18T22:15:00+02:00
lastmod: 2026-10-18T22:15:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["NIS2 PME", "NIS2 entreprises concernées", "directive NIS2 TPE", "NIS2 fournisseurs et sous-traitants", "transposition NIS2 France", "entités essentielles et importantes NIS2"]
summary: "NIS2 vise les moyennes et grandes entreprises de 18 secteurs, plus quelques prestataires quelle que soit leur taille, comme les fournisseurs DNS : la plupart des petites équipes ne sont pas directement concernées. Vos clients peuvent l’être, et NIS2 les oblige à vérifier leurs fournisseurs : attendez-vous à des questionnaires et à des clauses (double authentification, sauvegardes, incidents). Au 19 octobre 2026, la loi française de transposition n’est pas adoptée."
cover: "nis2-small-business"
cover_alt: "Le titre « NIS2 : votre entreprise est-elle concernée, et que vont vous demander vos clients ? » en blanc sur un panneau de verre cannelé posé sur une photo, avec une carte parsemée d’épingles de localisation"
related: ["security-questionnaire", "free-cybersecurity-help", "cyber-resilience-act-apps", "gdpr-data-breach", "cybersecurity-guide"]
services: ["rescue"]
faq:
  - q: "NIS2, c’est la même chose que le RGPD ?"
    a: "Non. Le RGPD protège les données personnelles et s’applique à presque toutes les entreprises qui en traitent ; son article 32 impose déjà une obligation de sécurité. NIS2 porte sur la sécurité des réseaux et des systèmes d’information des organisations de secteurs critiques, quelles que soient leurs données. Un même incident peut déclencher les deux : un rançongiciel chez une entreprise concernée peut exiger un signalement NIS2 et une notification à la CNIL."
  - q: "Quelle différence entre une entité essentielle et une entité importante ?"
    a: "Les entités essentielles sont surtout les grandes organisations des secteurs de l’annexe I, plus quelques prestataires comme les fournisseurs DNS quelle que soit leur taille ; les autres entités concernées sont importantes. Les essentielles peuvent être contrôlées et auditées à tout moment, avec des amendes maximales d’au moins 10 millions d’euros ou 2 % du chiffre d’affaires annuel mondial, le montant le plus élevé étant retenu. Les importantes sont contrôlées a posteriori, sur des indices de manquement, avec des plafonds d’au moins 7 millions d’euros ou 1,4 %."
  - q: "Une entreprise suisse, canadienne ou marocaine est-elle concernée par NIS2 ?"
    a: "Seulement si elle entre elle-même dans le champ, par exemple un prestataire de cloud, de centres de données ou d’infogérance, de taille moyenne ou plus, qui propose ses services dans l’Union. Ce type de prestataire doit alors désigner un représentant dans l’un des États membres où il propose ses services (article 26). Sinon, elle rencontre NIS2 à travers les exigences fournisseurs de ses clients européens."
  - q: "Existe-t-il une certification NIS2 pour les fournisseurs ?"
    a: "Non. Au 19 octobre 2026, NIS2 ne crée aucun certificat qui prouverait qu’un fournisseur s’y conforme. Les clients s’appuient sur d’autres preuves : un questionnaire rempli avec ses justificatifs, une certification ISO/IEC 27001 ou, pour les clients britanniques, le label Cyber Essentials."
---

NIS2 est la directive européenne qui impose des obligations de cybersécurité aux organisations dont dépend l’économie. Pour une PME, tout dépend de sa taille et de son secteur : la directive vise les entreprises moyennes et grandes de 18 secteurs, plus quelques prestataires quelle que soit leur taille. La plupart des petites équipes, sous les 50 salariés, n’entrent donc pas dans son champ.

Ce qui vous rattrape, c’est la chaîne d’approvisionnement. Vos clients peuvent être soumis à NIS2, et la directive les oblige à vérifier la sécurité de leurs fournisseurs. La question utile devient alors moins « mon entreprise est-elle concernée ? » que « que vont me demander mes clients, et saurai-je répondre ? »

Ce guide vous donne trois tests pour situer votre entreprise, l’état des lieux au 19 octobre 2026, puis les questions et les clauses à préparer. Il fait partie de mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité pour les petites équipes{{< /a >}}.

## Ce qu’est NIS2

NIS2, c’est la [directive (UE) 2022/2555](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555), adoptée en décembre 2022 pour remplacer la première directive NIS de 2016. Une directive ne s’impose pas d’elle-même aux entreprises : chaque État membre doit la transposer dans sa loi nationale, et la date limite était le 17 octobre 2024.

Elle classe les organisations concernées en entités essentielles, surtout de grandes entreprises des secteurs les plus critiques, et en entités importantes. Les obligations de fond sont les mêmes : gérer les risques cyber, signaler les incidents graves et engager la responsabilité de la direction ; le contrôle et les amendes diffèrent.

## NIS2 s’applique-t-elle à votre entreprise ? Trois questions

Votre entreprise est concernée si vous répondez oui aux deux premières questions, ou oui à la troisième.

### 1. Votre activité fait-elle partie des 18 secteurs ?

L’annexe I de la directive liste les secteurs hautement critiques, l’annexe II les autres secteurs critiques :

| Annexe I : secteurs hautement critiques | Annexe II : autres secteurs critiques |
|---|---|
| Énergie, transports, banque, infrastructures des marchés financiers | Services postaux et d’expédition, gestion des déchets |
| Santé, eau potable, eaux usées | Produits chimiques, production et distribution alimentaires |
| Infrastructures numériques : cloud, centres de données, DNS, services de confiance, télécoms | Fabrication : dispositifs médicaux, électronique, machines, véhicules, etc. |
| Services TIC entre entreprises : infogérance, sécurité gérée | Fournisseurs numériques : places de marché en ligne, moteurs de recherche, réseaux sociaux |
| Administration publique, espace | Organismes de recherche |

Un cabinet comptable, une agence de communication, un architecte ou un restaurant ne figurent pas dans ces listes. Une société informatique qui exploite ou maintient les systèmes de ses clients, si : NIS2 la qualifie de fournisseur de services gérés.

### 2. Votre entreprise est-elle au moins de taille moyenne ?

NIS2 reprend la définition européenne de la taille des entreprises. Vous restez sous le seuil si vous comptez **moins de 50 salariés et un chiffre d’affaires annuel ou un total de bilan qui ne dépasse pas 10 millions d’euros** ; sauf si la question 3 s’applique à vous, vous êtes alors hors du champ de NIS2. Les effectifs se comptent en équivalents temps plein. Dans un groupe, la définition additionne en principe les chiffres des entreprises liées : faites le calcul avec ceux du groupe.

### 3. Votre activité est-elle visée quelle que soit sa taille ?

Certaines activités sont couvertes même pour une entreprise de deux personnes :

- les fournisseurs de réseaux ou de services de communications électroniques publics, comme l’accès à internet ;
- les prestataires de services de confiance (signature électronique, cachet, horodatage) ;
- les registres de noms de domaine de premier niveau et les fournisseurs de services DNS ;
- les organisations désignées par leur État, par exemple comme seul fournisseur d’un service essentiel.

{{< callout type="warning" >}}Si vous gérez le DNS des noms de domaine de vos clients, lisez la définition du **fournisseur de services DNS** à l’article 6 : elle inclut les services DNS faisant autorité proposés à des tiers, sans seuil de taille. Hébergeurs et agences web qui le proposent : vérifiez votre situation.{{< /callout >}}

## Ce que NIS2 impose aux entreprises concernées

Si votre entreprise est dans le champ, trois séries d’obligations s’appliquent, proportionnées à sa taille et à son exposition.

### Dix mesures de sécurité (article 21)

La directive fixe un socle minimal :

1. des politiques d’analyse des risques et de sécurité des systèmes d’information ;
2. la gestion des incidents ;
3. la continuité d’activité : sauvegardes, reprise après sinistre, gestion de crise ;
4. la sécurité de la chaîne d’approvisionnement ;
5. la sécurité de l’acquisition, du développement et de la maintenance des systèmes, y compris le traitement des vulnérabilités ;
6. l’évaluation de l’efficacité des mesures ;
7. l’hygiène informatique de base et la formation à la cybersécurité ;
8. la cryptographie et, le cas échéant, le chiffrement ;
9. la sécurité des ressources humaines, le contrôle des accès et la gestion des actifs ;
10. l’authentification multifacteur et les communications sécurisées, le cas échéant.

### Signalement des incidents (article 23)

Pour un incident important : une alerte précoce à l’autorité nationale ou au CSIRT dans les 24 heures après en avoir pris connaissance, une notification dans les 72 heures, puis un rapport final au plus tard un mois après cette notification.

### Responsabilité de la direction (article 20)

L’organe de direction approuve les mesures, supervise leur mise en œuvre et peut être tenu responsable des manquements. Ses membres doivent suivre une formation à la cybersécurité.

Relisez la liste des mesures avec les yeux d’un fournisseur : le point 4 explique pourquoi les neuf autres finissent dans votre boîte mail.

## Où en est NIS2 au 19 octobre 2026

### En France

Le projet de loi relatif à la résilience des infrastructures critiques et au renforcement de la cybersécurité, qui transpose NIS2, a été adopté par le Sénat le 12 mars 2025, puis voté par une commission spéciale de l’Assemblée nationale le 10 septembre 2025. Son examen en séance, prévu les 7 et 9 octobre 2026, a été retiré de l’ordre du jour le 6 octobre sans nouvelle date, et aucune n’était connue au moment où j’écris. Tant que la loi n’est pas votée et ses décrets d’application publiés, les obligations de NIS2 ne s’imposent pas encore aux entreprises pour leurs activités en France.

L’ANSSI propose depuis le 24 novembre 2025 un [pré-enregistrement volontaire](https://cyber.gouv.fr/actualites/nis-2-les-entit%C3%A9s-assujetties-peuvent-se-pre-enregistrer/) sur son portail MonEspaceNIS2, avec un simulateur pour savoir si votre entreprise sera probablement concernée. L’enregistrement ne deviendra obligatoire qu’une fois la loi et son décret publiés. Le 1er octobre 2026, le directeur général de l’ANSSI a indiqué aux députés que l’agence envisageait d’exiger une conformité complète des entités concernées d’ici fin 2028 : une intention, pas une règle.

### Dans le reste de l’Union

Les États membres avancent à des rythmes différents : un client établi ailleurs dans l’Union peut déjà être soumis à sa loi nationale. Le texte européen bouge aussi : le 20 janvier 2026, la Commission a proposé des modifications ciblées de NIS2, dont une catégorie allégée pour certaines entreprises de taille intermédiaire (les « small mid-caps »). Au 19 octobre 2026, ce n’est qu’une proposition, pas une loi.

### Au Royaume-Uni

NIS2 ne s’applique pas au Royaume-Uni, sorti de l’Union avant son adoption. Le pays garde ses NIS Regulations de 2018 et prépare le Cyber Security and Resilience Bill, qui ferait entrer pour la première fois dans ce régime les prestataires d’infogérance de taille moyenne ou grande ; au 19 octobre 2026, le texte est encore devant la Chambre des lords. Avec des clients britanniques, attendez-vous à entendre parler du label Cyber Essentials, que le NCSC, l’homologue britannique de l’ANSSI, recommande d’exiger de certains fournisseurs.

## Pourquoi vos clients vous interrogeront quand même

L’article 21, paragraphe 2, point d), impose à chaque entreprise concernée de gérer la sécurité de sa chaîne d’approvisionnement, y compris celle de ses relations avec ses fournisseurs et prestataires directs. Le paragraphe 3 ajoute qu’elle doit tenir compte des vulnérabilités propres à chaque fournisseur et de ses pratiques de cybersécurité. Concrètement : si vous hébergez, développez, maintenez ou consultez quoi que ce soit pour un client concerné, son dossier de conformité contient une page à votre nom. Votre pays n’y change rien : un prestataire installé à Genève, à Montréal ou à Casablanca reçoit les mêmes questions d’un client européen.

Cette page vous arrive sous deux formes :

- un questionnaire : tableur, formulaire en ligne ou portail fournisseurs ;
- des clauses contractuelles, souvent dans une annexe sécurité : exigences minimales, obligation de signaler un incident au client dans un délai fixé, droit d’audit ou de recevoir des rapports d’audit, règles de sous-traitance, sort des données du client en fin de contrat.

Pour les clients du numérique visés par le règlement d’exécution (UE) 2024/2690 (cloud, centres de données, infogérance…), la politique fournisseurs est détaillée, des critères de sélection aux clauses du contrat et à la sortie. Les clients financiers appliquent DORA depuis le 17 janvier 2025, un texte encore plus exigeant envers leurs prestataires informatiques.

## Les questions à prévoir, et ce qu’il faut avoir prêt

Voici, rapprochées des mesures de l’article 21, paragraphe 2, les questions à prévoir et ce qu’une petite équipe doit pouvoir montrer :

| Ce que votre client doit gérer | La question que vous recevrez | Ce qu’il faut avoir prêt |
|---|---|---|
| Contrôle des accès et authentification multifacteur (points i et j) | La double authentification est-elle activée sur tous les comptes qui accèdent à nos données ? | La double authentification sur la messagerie, le cloud et l’administration ({{< a key="two-factor-authentication-passkeys" >}}un après-midi suffit{{< /a >}}), la liste des accès |
| Continuité d’activité (point c) | Comment sauvegardez-vous, et quand avez-vous testé une restauration ? | Des {{< a key="backups-3-2-1" >}}sauvegardes selon la règle 3-2-1{{< /a >}} et la date du dernier test de restauration |
| Gestion des incidents (point b) | Nous préviendrez-vous en cas d’incident, et sous quel délai ? | Un contact nommé, un plan d’une page, un délai que vous pouvez tenir |
| Chaîne d’approvisionnement (point d) | Quels sous-traitants et outils cloud traitent nos données, et où ? | La liste de vos outils, le lieu d’hébergement des données, vos contrats de sous-traitance RGPD |
| Sécurité du personnel et formation (points g et i) | Comment coupez-vous les accès au départ d’un collaborateur ? Formez-vous votre équipe ? | Une procédure de départ, la date de la dernière sensibilisation |
| Traitement des vulnérabilités (point e) | Sous quel délai installez-vous les mises à jour de sécurité ? | Mises à jour automatiques, systèmes encore maintenus, une routine pour votre site et ses extensions |

Répondez honnêtement : un « non » accompagné de la mesure que vous appliquez à la place, ou d’une date, vaut mieux qu’un « oui » que vous ne pouvez pas prouver. Mon guide pour {{< a key="security-questionnaire" >}}répondre à un questionnaire de sécurité fournisseur{{< /a >}} détaille la formulation, les preuves et le dossier à réutiliser.

Pour un regard extérieur, MonAideCyber, le diagnostic gratuit de l’ANSSI, débouche sur six mesures à appliquer en six mois ; mon guide des {{< a key="free-cybersecurity-help" >}}aides gratuites en cybersécurité{{< /a >}} compare les dispositifs.

## Avant l’arrivée du questionnaire : la checklist

Avec un seul après-midi devant moi, je commencerais par les points 3 à 5 : ils répondent à la moitié du tableau ci-dessus.

1. Vérifiez la situation de votre entreprise avec les trois questions, et notez les chiffres utilisés.
2. Listez les clients susceptibles d’être concernés et vos accès à leurs systèmes ou à leurs données.
3. Activez la double authentification partout, en commençant par la messagerie et les comptes d’administration.
4. Sauvegardez, puis testez une restauration.
5. Rédigez un plan d’incident d’une page avec un contact joignable. Une violation de données personnelles a son propre délai de 72 heures au titre du RGPD, expliqué dans {{< a key="gdpr-data-breach" >}}mon guide sur la notification à la CNIL{{< /a >}}.
6. Tenez la liste de vos outils et de vos sous-traitants, avec le lieu de stockage des données.
7. Lisez chaque clause de sécurité avant de signer : des délais tenables, un droit d’audit encadré (préavis, fréquence), une responsabilité plafonnée.

Si vous vendez des applications ou des logiciels dans l’Union, un autre texte encadre le produit lui-même : voyez {{< a key="cyber-resilience-act-apps" >}}ce que le Cyber Resilience Act impose à votre application{{< /a >}}.

Ce guide est une information générale, pas un conseil juridique. Un avocat se justifie quand un contrat vous rend responsable des amendes d’un client ou lui accorde un droit d’audit illimité, ou quand les trois tests laissent un doute sur votre propre entreprise, ce qui arrive aux hébergeurs, aux fournisseurs DNS et aux sociétés d’infogérance.
