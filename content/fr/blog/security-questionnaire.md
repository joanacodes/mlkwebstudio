---
title: "Un grand compte vous envoie un questionnaire de sécurité ? Comment y répondre"
seo_title: "Questionnaire de sécurité fournisseur : comment y répondre"
description: "Un grand compte vous envoie un questionnaire de sécurité fournisseur ? Les questions types, comment répondre non sans perdre le marché, le dossier à préparer."
slug: "questionnaire-securite-fournisseur"
translationKey: "security-questionnaire"
date: 2026-10-18T22:12:00+02:00
lastmod: 2026-10-18T22:12:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["questionnaire de sécurité fournisseur", "questionnaire sécurité grand compte", "évaluation cybersécurité fournisseur", "plan d’assurance sécurité", "NIS2 fournisseurs", "questionnaire sécurité PME"]
summary: "Le questionnaire de sécurité fournisseur permet à un grand compte de vérifier que vous ne serez pas le maillon faible de sa chaîne d’approvisionnement, souvent parce que NIS2, DORA ou l’article 28 du RGPD l’y obligent. Répondez avec honnêteté : un « oui » avec une preuve, un « non » avec une mesure compensatoire ou une date, un « sans objet » avec la raison. Gardez ensuite vos réponses et vos documents dans un dossier sécurité réutilisable."
cover: "security-questionnaire"
cover_alt: "Le titre « Un grand compte vous envoie un questionnaire de sécurité ? Comment y répondre » en blanc sur un panneau de verre cannelé posé sur une photo, avec une grille de plan d’architecte et une cible"
related: ["nis2-small-business", "gdpr-data-processing-agreement", "free-cybersecurity-help", "cyber-insurance", "cybersecurity-guide"]
services: ["rescue"]
faq:
  - q: "Peut-on refuser de remplir un questionnaire de sécurité fournisseur ?"
    a: "Oui, mais un grand compte ne peut généralement pas référencer un fournisseur sans ce questionnaire : refuser revient souvent à sortir de la consultation. Demandez plutôt quelles parties s’appliquent à votre prestation, ou si votre note de sécurité et vos justificatifs peuvent répondre à une partie des questions."
  - q: "Peut-on utiliser l’IA pour remplir un questionnaire de sécurité ?"
    a: "Pour rédiger, oui : donnez-lui votre politique et vos anciennes réponses, et laissez-la proposer une formulation. Relisez chaque ligne, car un outil d’IA écrira volontiers « oui » pour une mesure que vous n’appliquez pas, et vérifiez que le document du client peut être confié à cet outil."
  - q: "Faut-il Cyber Essentials pour travailler avec des clients britanniques ?"
    a: "La loi ne l’impose pas pour les contrats privés, mais le NCSC britannique encourage les organisations à en faire une exigence minimale pour certains fournisseurs. Attendez-vous à la question si vous touchez aux données ou aux systèmes d’un client au Royaume-Uni."
  - q: "À quelle fréquence mettre à jour ses réponses ?"
    a: "Relisez votre dossier sécurité au moins une fois par an, et tout de suite quand quelque chose change : un nouvel outil qui traite des données clients, un nouveau sous-traitant, un incident ou une nouvelle certification. Les clients qui réévaluent leurs fournisseurs reviendront vers vous, et une bibliothèque de réponses datées évite de repartir de zéro."
  - q: "Un indépendant répond-il aux mêmes questions ?"
    a: "Oui. Répondez pour vous, vos appareils et vos outils, et ne cochez « sans objet » pour les questions d’équipe (arrivées, formation du personnel) que si elles ne s’appliquent vraiment pas : si des freelances ou des sous-traitants voient des données du client, les questions les concernent aussi."
---

Le questionnaire de sécurité fournisseur est la liste de questions qu’un grand compte envoie à un prestataire avant de signer ou de renouveler un contrat. Il vérifie que vous ne deviendrez pas la porte d’entrée vers ses systèmes ou ses données : qui accède à quoi, comment vos ordinateurs sont protégés, où se trouvent vos sauvegardes et ce qui se passe en cas d’incident.

Le recevoir est plutôt bon signe : un acheteur l’envoie rarement à un fournisseur déjà écarté. Quand je conçois un site, je veux que les prospects de mes clients les prennent au sérieux dès le premier écran, parce que cela change la façon dont un acheteur négocie. Un questionnaire clair et honnête joue le même rôle face à un service achats. Si vous partez de zéro, commencez par mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité des petites équipes{{< /a >}}.

## Pourquoi un grand compte envoie un questionnaire de sécurité fournisseur

Un attaquant peut atteindre un grand groupe par un fournisseur qui y a déjà accès : prestataire informatique, agence qui détient des identifiants, développeur qui garde une copie de la base clients. Plusieurs textes obligent désormais le client à vous évaluer.

- **NIS2** ([directive (UE) 2022/2555](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022L2555)). Son article 21, paragraphe 2, point d), impose aux entités concernées de gérer « la sécurité de la chaîne d’approvisionnement », y compris leurs relations avec leurs fournisseurs directs, et l’article 21, paragraphe 3, leur demande de tenir compte des pratiques de cybersécurité de chacun. La plupart des petites équipes restent sous les seuils de taille, mais un client concerné vous répercute l’obligation par le questionnaire et le contrat. Au 19 octobre 2026, la France n’a toujours pas adopté sa loi de transposition, attendue pour le 17 octobre 2024. Mon article sur {{< a key="nis2-small-business" >}}NIS2 et ce que vos clients vont vous demander{{< /a >}} détaille qui est concerné.
- **DORA** ([règlement (UE) 2022/2554](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32022R2554)), applicable depuis le 17 janvier 2025 aux banques, assureurs, entreprises d’investissement et autres entités financières. Ses articles 28 à 30 les obligent à gérer le risque lié à leurs prestataires TIC, à tenir un registre de ces contrats et à y inscrire des clauses précises, du lieu de traitement des données à l’assistance en cas d’incident. Si vous fournissez un service numérique dans la durée à une banque ou à un assureur, attendez-vous à la version longue.
- **RGPD** ([règlement (UE) 2016/679](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679)). L’article 28, paragraphe 1, impose au responsable du traitement de ne faire appel qu’à des sous-traitants « qui présentent des garanties suffisantes » quant aux mesures techniques et organisationnelles appropriées. Le questionnaire vérifie ces garanties ; le {{< a key="gdpr-data-processing-agreement" >}}contrat de sous-traitance RGPD{{< /a >}} vous engage à les tenir. La CNIL détaille ces obligations dans son [guide du sous-traitant](https://www.cnil.fr/sites/default/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf).
- **ISO/IEC 27001.** Un client certifié doit encadrer la sécurité dans ses relations fournisseurs (mesures 5.19 à 5.22 de l’annexe A de la version 2022), et son auditeur lui demandera comment ses fournisseurs ont été évalués.

Cet article présente les textes et les pratiques courantes ; il ne constitue pas un conseil juridique.

## À quoi ressemble un questionnaire de sécurité

Le format change davantage que le fond :

| Format | De quoi il s’agit | Ce que cela change pour vous |
|---|---|---|
| Le tableur du client | Des questions avec Oui / Non / Sans objet, une colonne de commentaires et parfois de preuves | La colonne commentaires sert à expliquer |
| SIG (Shared Assessments) | Un questionnaire sous licence, mis à jour chaque année, en version « Lite » ou « Core » selon votre niveau de risque | Lite pour les fournisseurs à risque modéré ; Core est long |
| CAIQ (Cloud Security Alliance) | Un questionnaire gratuit pour les fournisseurs de cloud et de logiciels, fondé sur la Cloud Controls Matrix | Vous pouvez le publier dans le registre CSA STAR en auto-évaluation, qui n’est pas une certification |
| Une plateforme fournisseurs | Une plateforme en ligne d’évaluation des tiers | Certaines ajoutent une note calculée sur ce que chacun voit de votre domaine : votre site et vos réglages email comptent |

Certains grands comptes demandent aussi un plan d’assurance sécurité (PAS), rédigé avant la signature ou dans la réponse à un appel d’offres : il décrit vos mesures et devient un engagement contractuel. Pour vous préparer, les 42 mesures du guide d’hygiène informatique de l’ANSSI font une bonne grille de lecture.

## Avant de répondre : périmètre, délai et questions sans objet

1. **Demandez ce que couvre le questionnaire** : quelle prestation, quelles données, et si vous vous connecterez aux systèmes du client. Quand je construis une automatisation, par exemple, j’ai parfois besoin d’accéder à la boîte mail du client : toutes les questions sur les accès deviennent alors pertinentes.
2. **Demandez le délai et un interlocuteur.** Un court échange peut régler les questions écrites pour un groupe de 5 000 salariés.
3. **Demandez si « sans objet » est accepté** pour un datacenter, un centre de supervision de la sécurité ouvert 24 h/24 ou un service sécurité dédié.
4. **Lisez tout une fois, puis classez chaque question** : oui (avec preuve), en partie, non, sans objet.

{{< callout type="tip" >}}Pas besoin d’un consultant pour un premier questionnaire : il vous faut la liste des outils de l’équipe, un regard honnête sur votre façon de travailler et une relecture par la personne qui signe vos contrats.{{< /callout >}}

## Les questions que toute petite équipe reçoit, et les bonnes réponses

Les mêmes thèmes reviennent, quel que soit le format :

| Thème | Ce qu’on vous demande | Une bonne réponse contient |
|---|---|---|
| Politique | Une politique de sécurité écrite, validée par la direction ? | Une politique courte, datée, validée par le dirigeant, avec une date de révision |
| Accès | Double authentification imposée ? Stockage et partage des mots de passe ? | La double authentification partout, des comptes nominatifs plutôt que partagés, un {{< a key="password-manager-teams" >}}gestionnaire de mots de passe d’équipe{{< /a >}} |
| Départs | Délai de coupure des accès quand quelqu’un part ? | Une checklist de départ et un objectif, par exemple le jour même |
| Appareils | Ordinateurs chiffrés et à jour ? Antivirus ? | Chiffrement du disque (BitLocker ou FileVault), mises à jour automatiques, antivirus intégré activé, aucun système obsolète |
| Sauvegardes | Chiffrées, stockées à part, testées ? | Ce que vous sauvegardez, à quelle fréquence, où, et la date du dernier test de restauration |
| Incidents | Un plan de réponse ? Sous quel délai nous prévenez-vous ? | Un plan d’une page et un délai tenable (l’article 33, paragraphe 2, du RGPD impose déjà au sous-traitant de prévenir le responsable du traitement « dans les meilleurs délais ») |
| Sous-traitants | Quels tiers traitent nos données ? | Chaque outil qui touche aux données du client, son usage et son lieu de stockage |
| Localisation | Où sont nos données ? Sortent-elles de l’UE ? | Les régions utilisées et la garantie retenue pour tout transfert ; pour des données de santé, un hébergeur certifié HDS (article L.1111-8 du Code de la santé publique) |
| Personnel | Clauses de confidentialité ? Sensibilisation ? | Une clause pour salariés et freelances, et une sensibilisation annuelle datée |
| Tests | Tests d’intrusion ? Certifications ? | Souvent un « non » avec une mesure compensatoire, ou le certificat que vous détenez |

Mon {{< a key="incident-response-first-hour" >}}plan de la première heure en cas d’incident{{< /a >}} est une bonne base pour ce plan d’une page.

## Quand la réponse honnête est non

Ne cochez jamais « oui » pour une mesure que vous n’appliquez pas. Les clients vérifient les réponses lors des audits et après un incident, certains les annexent au contrat ou les reprennent dans un PAS, et un « oui » inexact découvert plus tard coûte plus cher que le marché. Un acheteur sensé s’attend à quelques « non » d’un fournisseur de cinq personnes ; il évalue surtout si vous comprenez et maîtrisez le risque.

Trois façons honnêtes d’écrire « non » :

1. **Non, avec la mesure qui compense**, comme dans le premier exemple ci-dessous.
2. **Non, avec une date.** « Prévu pour mars 2027 » ne fonctionne que si vous tenez la date : le client peut vérifier.
3. **Sans objet, avec la raison.** « Nous n’exploitons pas de datacenter » suffit dès lors que vous dites qui le fait.

Dans la colonne commentaires, cela donne :

```text
Q : Faites-vous réaliser un test d'intrusion annuel ?
R : Non. Nous n'hébergeons pas les données clients sur nos propres serveurs :
    les fichiers sont stockés chez [hébergeur], qui publie ses certifications
    sur [lien]. Tous les comptes sont protégés par la double authentification,
    les ordinateurs sont chiffrés et les mises à jour automatiques.

Q : Êtes-vous certifiés ISO 27001 ?
R : Pas à ce jour. Nous avons réalisé le diagnostic MonAideCyber de l'ANSSI
    en [mois] et appliqué les mesures recommandées ; notre politique de
    sécurité figure en annexe 2.
```

{{< callout type="warning" >}}Le certificat de votre hébergeur n’est pas le vôtre. « Nos fichiers sont stockés dans Microsoft 365, certifié ISO 27001 » est vrai et utile. « Nous sommes certifiés ISO 27001 » ne l’est pas, et le client vous demandera le certificat.{{< /callout >}}

## ISO 27001, SOC 2 ou Cyber Essentials : quelle certification vaut le coup

- **ISO/IEC 27001.** La norme internationale du système de management de la sécurité de l’information, certifiée pour trois ans par un organisme accrédité par le COFRAC, avec des audits de surveillance entre-temps. Comptez des mois de préparation : elle se justifie quand de grands clients en font une condition, ou quand les données sensibles sont votre métier.
- **SOC 2.** Un rapport d’attestation américain (critères de l’AICPA), pas un certificat, demandé surtout par les clients américains et les acheteurs de logiciels ; une petite équipe européenne en a rarement besoin en premier.
- **Cyber Essentials (Royaume-Uni).** Le dispositif du gouvernement britannique, piloté par le NCSC avec l’IASME, vérifie cinq mesures (pare-feu, configuration sécurisée, mises à jour, contrôle des accès, protection contre les logiciels malveillants) ; il ne vous concerne que si vous travaillez avec des clients britanniques.

Pour une petite équipe française, le premier pas crédible n’est souvent pas une certification : le diagnostic gratuit MonAideCyber de l’ANSSI, mené par un « Aidant cyber » en une heure et demie environ, débouche sur six mesures à appliquer en six mois. Ce n’est pas un certificat, mais un diagnostic daté et les mesures appliquées font une réponse sérieuse. Mon guide des {{< a key="free-cybersecurity-help" >}}aides gratuites en cybersécurité{{< /a >}} détaille le dispositif.

## Constituer une fois pour toutes un dossier sécurité

Le premier questionnaire est le plus long. Rangez ce que vous produisez dans un dossier sécurité, prêt pour le client suivant :

1. **Une note de sécurité de deux pages** : votre activité, les données que vous traitez, leur lieu de stockage, vos principales mesures et un contact sécurité.
2. **Votre politique de sécurité**, ou sa synthèse.
3. **Votre contrat de sous-traitance RGPD**, ou la confirmation que vous signerez celui du client.
4. **La liste de vos sous-traitants** : chaque outil, son usage, les données qu’il contient et sa localisation.
5. **Vos justificatifs** : diagnostic MonAideCyber daté, certification éventuelle, liens vers les pages de certification de vos principaux fournisseurs.
6. **Votre attestation d’assurance**, si vous avez souscrit une {{< a key="cyber-insurance" >}}assurance cyber{{< /a >}} : certains questionnaires demandent l’assureur et le montant de la garantie.
7. **Une bibliothèque de réponses** : chaque question déjà traitée, avec la formulation validée.

Datez et numérotez chaque version. La note de sécurité peut partir à tout le monde ; gardez la politique complète et la bibliothèque de réponses pour les clients qui ont signé un accord de confidentialité.

## La marche à suivre, et quand passer la main

1. Demandez le périmètre, le délai et un interlocuteur.
2. Réglez d’abord les gains rapides : double authentification, gestionnaire de mots de passe, ordinateurs chiffrés et mises à jour automatiques peuvent transformer plusieurs « non » en « oui » en quelques jours.
3. Rédigez la politique et la liste des sous-traitants, répondez à chaque question, puis rangez les réponses dans votre dossier sécurité.

Certaines tâches reviennent à d’autres. Un avocat doit relire les clauses de sécurité qui prévoient des pénalités, une responsabilité illimitée ou des droits d’audit ; un DPO ou un conseil en protection des données est utile quand les données sensibles sont au cœur de votre activité ; un prestataire d’audit qualifié PASSI par l’ANSSI mène le test d’intrusion, un organisme certificateur accrédité l’audit ISO 27001, car un fournisseur ne peut pas noter sa propre copie. Enfin, si le questionnaire révèle un logiciel obsolète sur votre site ou l’absence d’enregistrements d’authentification email sur votre domaine, corrigez-le avant que la note de sécurité du client ne parle à votre place.
