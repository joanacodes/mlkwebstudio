---
title: "Contrat de sous-traitance RGPD (article 28) : quand en signer un avec vos clients et prestataires"
seo_title: "Contrat de sous-traitance RGPD : quand et comment le signer"
description: "Contrat de sous-traitance RGPD : quand il est obligatoire avec vos prestataires et vos clients, ce que l’article 28 impose et les modèles gratuits à utiliser."
slug: "contrat-sous-traitance-rgpd"
translationKey: "gdpr-data-processing-agreement"
date: 2026-10-18T21:21:00+02:00
lastmod: 2026-10-18T21:21:00+02:00
category: "gdpr"
article_type: "guide"
keywords: ["contrat de sous-traitance RGPD", "article 28 RGPD", "responsable de traitement et sous-traitant", "clauses contractuelles types sous-traitance", "sous-traitant ultérieur RGPD", "DPA RGPD"]
summary: "Il faut un contrat de sous-traitance RGPD dès qu’un prestataire traite des données personnelles pour votre compte, et dès que vous le faites pour un client. L’article 28 du RGPD fixe son contenu : instructions documentées, confidentialité, sécurité, sous-traitants ultérieurs, aide pour les droits et les violations, suppression en fin de contrat et audits. Les grands éditeurs l’intègrent à leurs conditions ; sinon, partez des clauses types gratuites de l’UE."
cover: "gdpr-data-processing-agreement"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’un quadrillage de plan d’architecte avec une cible"
related: ["gdpr-us-tools-data-transfers", "security-questionnaire", "gdpr-data-retention-crm", "cold-email-gdpr-uk-france", "gdpr-guide"]
services: ["automation"]
faq:
  - q: "Le contrat de sous-traitance RGPD est-il obligatoire ?"
    a: "Oui, dès qu’un prestataire traite des données personnelles pour votre compte. L’article 28, paragraphe 3, du RGPD impose un contrat ou un autre acte juridique qui lie le sous-traitant au responsable du traitement et reprend les clauses qu’il énumère : recourir à un sous-traitant sans ce contrat est un manquement au RGPD."
  - q: "Un accord de confidentialité suffit-il ?"
    a: "Non. Un accord de confidentialité protège des informations d’affaires. Le contrat de sous-traitance doit contenir les clauses de l’article 28, paragraphe 3, comme les instructions documentées, les règles sur les sous-traitants ultérieurs, l’aide pour les droits des personnes et la suppression en fin de contrat. La confidentialité n’en est qu’une."
  - q: "Qui rédige le contrat de sous-traitance : le client ou le prestataire ?"
    a: "L’un ou l’autre. Les grands éditeurs publient le leur, que vous acceptez avec leurs conditions. Entre petites équipes, celle qui dispose d’un bon modèle le propose, et les clauses types de la Commission européenne (décision 2021/915) offrent une base neutre que chacun peut accepter."
  - q: "Faut-il un contrat de sous-traitance avec un prestataire hors de l’UE ?"
    a: "Oui. Les clauses de l’article 28 s’appliquent où que soit établi le sous-traitant. Si les données quittent l’UE, il faut en plus un mécanisme de transfert, comme une décision d’adéquation ou des clauses contractuelles types ; chez la plupart des éditeurs, les deux figurent dans le même document."
  - q: "Quelle sanction en l’absence de contrat de sous-traitance ?"
    a: "Les manquements à l’article 28 relèvent du plafond d’amendes le plus bas, fixé par l’article 83, paragraphe 4 : jusqu’à 10 millions d’euros ou 2 % du chiffre d’affaires annuel mondial, le montant le plus élevé étant retenu. En France, c’est la CNIL qui prononce ces sanctions."
---

Un contrat de sous-traitance RGPD, souvent appelé DPA (pour Data Processing Agreement), encadre le travail de toute entreprise qui traite des données personnelles pour votre compte : l’agence qui maintient votre site, le freelance qui gère votre CRM, l’outil qui envoie votre newsletter. L’article 28 du RGPD le rend obligatoire et fixe son contenu.

Les petites équipes se trouvent des deux côtés. Vous confiez les données de vos clients à une dizaine d’outils, et vous êtes peut-être aussi le prestataire qui traite celles de vos propres clients. Quand je crée une automatisation pour un client, comme l’application interne que j’ai développée pour l’un d’eux, j’ai par exemple besoin d’accéder à sa boîte mail. C’est exactement le genre d’accès qu’un contrat de sous-traitance doit encadrer.

Pour une vue d’ensemble, consultez mon {{< a key="gdpr-guide" >}}guide complet du RGPD{{< /a >}}.

## Responsable du traitement ou sous-traitant : les deux rôles, avec des exemples

Le **responsable du traitement** décide pourquoi et comment les données personnelles sont traitées (article 4, point 7, du RGPD). Le **sous-traitant** les traite pour son compte (article 4, point 8). Ce qui compte, c’est qui décide, pas qui détient les données ni qui est le plus gros : un studio d’une personne peut être le sous-traitant d’un grand groupe, et Google celui d’une boutique de deux personnes qui utilise Google Workspace.

| Situation | Rôle habituel |
|---|---|
| L’agence web qui maintient votre site et peut lire les messages du formulaire de contact | Sous-traitant |
| Le freelance qui gère votre CRM, le développeur qui automatise votre messagerie, le prestataire informatique qui se connecte pour dépanner | Sous-traitant |
| Votre hébergeur, outil d’emailing, CRM, stockage en ligne ou logiciel de prise de rendez-vous | Sous-traitant pour les données que vous y mettez ; responsable du traitement pour ses propres besoins, comme votre facturation |
| Le prestataire de cold emailing qui envoie vos campagnes à une liste que vous fournissez | Sous-traitant |
| Votre expert-comptable | Cela dépend : sous-traitant s’il tient vos comptes sur vos instructions, responsable du traitement pour les missions soumises à ses propres obligations professionnelles |
| Un salarié | Ni l’un ni l’autre : il agit sous votre autorité (article 29) |

Un prestataire de cold emailing qui trouve aussi les prospects fait des choix qu’un sous-traitant laisse d’ordinaire à son client : écrivez qui choisit les sources, qui informe les prospects et qui traite les oppositions (voir mon article sur le {{< a key="cold-email-gdpr-uk-france" >}}cold emailing et le RGPD{{< /a >}}). Et un sous-traitant qui utilise vos données à ses propres fins devient responsable de ce traitement (article 28, paragraphe 10).

La distance ne change rien. Un développeur à Casablanca qui maintient la base clients d’une boutique en ligne française est son sous-traitant. Une entreprise suisse, québécoise ou marocaine soumise au RGPD parce qu’elle vend dans l’UE ({{< a key="gdpr-outside-eu" >}}voici les deux critères{{< /a >}}) doit elle aussi encadrer ses propres sous-traitants par contrat.

## Quand faut-il un contrat de sous-traitance RGPD, et quand n’en faut-il pas ?

Il en faut un dans deux situations :

1. **Comme client**, avec chaque prestataire qui traite des données personnelles pour vous, quelle que soit sa taille et que vous le payiez ou non. L’article 28, paragraphe 1, vous impose aussi de choisir des sous-traitants qui présentent des garanties suffisantes, et c’est le contrat qui les consigne.
2. **Comme prestataire**, dès que vous accédez aux données personnelles d’un client, même avec un simple identifiant. Consulter des données est déjà un traitement (article 4, point 2).

Il n’en faut pas quand l’autre partie décide elle-même de ce qu’elle fait des données, comme votre banque pour un paiement : vous êtes alors deux responsables du traitement distincts.

### Responsables conjoints : un autre type d’accord

Quand deux entreprises décident ensemble pourquoi et comment des données sont traitées, par exemple pour un webinaire coorganisé, elles sont responsables conjointes du traitement (article 26). Au lieu d’un contrat de sous-traitance, elles signent un accord qui précise qui informe les personnes et qui répond à leurs demandes, et elles en mettent les grandes lignes à leur disposition. Les personnes peuvent toutefois exercer leurs droits auprès de chacune.

## Ce que doit contenir le contrat selon l’article 28

L’[article 28 du RGPD](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679) fixe le minimum. Le contrat doit être écrit, la forme électronique comprise (article 28, paragraphe 9) : des conditions acceptées en ligne ou un PDF signé conviennent. Il doit décrire le traitement : son objet et sa durée, sa nature et sa finalité, le type de données personnelles, les catégories de personnes concernées, et les obligations et droits du responsable du traitement. Le sous-traitant s’engage ensuite sur huit points :

1. **N’agir que sur vos instructions documentées**, y compris pour les transferts hors de l’UE.
2. **Confidentialité** : toutes les personnes qui traitent les données y sont tenues.
3. **Sécurité** : les mesures exigées par l’article 32, du chiffrement à la capacité de rétablir les données après un incident.
4. **Sous-traitants ultérieurs** : uniquement avec votre autorisation et aux mêmes obligations.
5. **Aide pour les droits des personnes**, comme les demandes d’accès ou d’effacement.
6. **Aide pour vos autres obligations** : sécurité, notification des violations, analyses d’impact (articles 32 à 36).
7. **Supprimer ou restituer les données** en fin de prestation, selon votre choix, et détruire les copies sauf obligation légale de conservation.
8. **Audits** : vous fournir les informations qui prouvent sa conformité et permettre des audits, y compris des inspections.

Le sous-traitant doit aussi vous prévenir immédiatement s’il estime qu’une de vos instructions enfreint le droit de la protection des données. Au Royaume-Uni, le UK GDPR reprend la même liste.

{{< callout type="tip" >}}**Soignez la description plutôt que les clauses de style.** « Données clients » ne dit rien au prestataire ; « nom, email et historique de commandes des clients de la boutique, pour le service après-vente » lui dit ce qu’il peut toucher.{{< /callout >}}

## Les sous-traitants ultérieurs : la chaîne derrière votre prestataire

Vos prestataires ont leurs propres prestataires : votre CRM tourne chez un hébergeur cloud, votre outil d’emailing s’appuie sur un service d’envoi. Selon l’article 28, paragraphe 2, un sous-traitant ne peut en faire intervenir un autre qu’avec votre autorisation écrite préalable. Elle peut être spécifique, au cas par cas, ou générale : il doit alors vous informer à l’avance de tout changement pour que vous puissiez vous y opposer. L’article 28, paragraphe 4, impose les mêmes obligations tout au long de la chaîne, et votre sous-traitant reste pleinement responsable envers vous de ceux qu’il fait intervenir.

Les grands éditeurs choisissent le plus souvent l’autorisation générale : ils publient la liste de leurs sous-traitants ultérieurs, et certains permettent de s’abonner aux avis de modification. Tenez une liste simple de vos propres sous-traitants, avec le lien vers le contrat et la liste des sous-traitants ultérieurs de chacun. Elle alimente votre registre des traitements (article 30) et votre politique de confidentialité, et elle répond au client qui demande qui accède à ses données.

## Les modèles gratuits : clauses types de la Commission et guide de la CNIL

Inutile de payer un modèle. Le 4 juin 2021, la Commission européenne a adopté des [clauses contractuelles types entre responsables du traitement et sous-traitants](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32021D0915) (décision d’exécution (UE) 2021/915). Elles satisfont aux exigences de l’article 28, paragraphes 3 et 4, et peuvent servir entre tout responsable du traitement et son sous-traitant. Vous gardez leur texte tel quel, choisissez à la clause 7.7 l’une des deux options pour les sous-traitants ultérieurs (autorisation spécifique ou générale), puis remplissez les annexes : les parties, la description du traitement, les mesures de sécurité et la liste de ces sous-traitants.

Ne les confondez pas avec les clauses adoptées le même jour pour les transferts hors de l’UE (décision 2021/914), que présente mon guide sur les {{< a key="gdpr-us-tools-data-transfers" >}}outils américains et le Data Privacy Framework{{< /a >}}.

La CNIL publie aussi un [guide du sous-traitant](https://www.cnil.fr/sites/default/files/atoms/files/rgpd-guide_sous-traitant-cnil.pdf) (édition de septembre 2017), avec un exemple de clauses à adapter à chaque prestation.

Les clauses types ne couvrent que la protection des données : le prix, les plafonds de responsabilité et la propriété intellectuelle restent l’affaire de votre contrat principal.

## Récupérer le contrat de vos prestataires : Google, Microsoft et les autres

Avec les grands éditeurs, on ne négocie pas : on accepte. Les menus et les offres décrits ci-dessous sont ceux d’octobre 2026.

- **Google Workspace** s’appuie sur son Cloud Data Processing Addendum. Un super-administrateur le consulte et l’accepte dans la console d’administration, menu Compte puis paramètres du compte, rubrique juridique et conformité (« Legal and compliance » dans l’interface en anglais). Selon l’[aide de Google](https://support.google.com/a/answer/3407074?hl=fr), ce n’est utile que si votre contrat ne l’intègre pas déjà, et sans effet sinon : acceptez-le en cas de doute.
- **Microsoft 365** : l’avenant sur la protection des données (Products and Services Data Protection Addendum) est intégré par référence aux conditions des produits Microsoft (Product Terms) ; il n’y a rien à signer. Téléchargez-en une copie via aka.ms/dpa pour vos archives.
- **Les autres outils** : cherchez « DPA », « contrat de sous-traitance », « accord de traitement des données » ou « data processing addendum » dans les pages juridiques, de confidentialité ou de sécurité. Beaucoup l’intègrent à leurs conditions ; d’autres le font signer via un formulaire, comme OpenAI pour ChatGPT Business, ChatGPT Enterprise et son API.

Les offres personnelles sont le point faible. OpenAI ne propose pas de DPA pour ses offres Free, Go, Plus et Pro, et les conditions de traitement de Google accompagnent Google Workspace, pas un compte Gmail personnel. Si un outil n’a pas de contrat de sous-traitance, n’y mettez pas les données de vos clients. Gardez un PDF daté de chaque contrat accepté : les conditions changent, et vous voudrez la version qui s’appliquait.

## Quand un client vous envoie son propre contrat

Si vous travaillez pour de grands comptes, le contrat de sous-traitance arrive souvent avec le contrat principal, parfois accompagné d’un {{< a key="security-questionnaire" >}}questionnaire de sécurité{{< /a >}}. Lisez-le en prestataire, puisque c’est vous qui prenez les engagements. Vérifiez cinq points :

1. **La description** correspond à ce que vous faites vraiment. Quand j’ai besoin de la boîte mail d’un client pour une automatisation, l’annexe doit préciser quelle boîte, pour quoi faire et pour combien de temps.
2. **La notification des violations** : le sous-traitant doit prévenir le responsable du traitement dans les meilleurs délais (article 33, paragraphe 2). Si le contrat fixe un nombre d’heures, vérifiez que vous pouvez le tenir, week-ends compris. Le responsable a ensuite ses propres {{< a key="gdpr-data-breach" >}}72 heures pour notifier la CNIL{{< /a >}}.
3. **Les sous-traitants ultérieurs** : listez vos propres outils dans l’annexe (hébergement, messagerie, partage de fichiers) pour être en règle dès le premier jour.
4. **Les audits** : le droit d’audit est obligatoire, mais vous pouvez proposer des conditions raisonnables, comme un préavis et un premier contrôle sur pièces.
5. **La responsabilité et les indemnisations** dépassent l’article 28 : vérifiez que le contrat de sous-traitance ne lève pas le plafond de responsabilité fixé dans votre contrat principal.

À la fin du contrat, restituez ou supprimez les données comme convenu, dans le délai fixé ensemble (voir les {{< a key="gdpr-data-retention-crm" >}}durées de conservation des données{{< /a >}}). Puis retirez vos accès : la boîte mail, l’identifiant du CRM, les clés d’API.

## Votre check-list, et quand faire appel à un avocat

1. Listez chaque prestataire qui touche à des données personnelles pour vous, avec son rôle.
2. Pour chaque sous-traitant, conservez le contrat, la liste de ses sous-traitants ultérieurs et le mécanisme de transfert si les données quittent l’UE.
3. Sortez les données de vos clients des outils qui ne proposent pas de contrat.
4. Si vous traitez des données pour des clients, préparez votre propre contrat à partir des clauses de la Commission, annexes remplies, avant qu’un client ne le demande.
5. Comme sous-traitant, tenez un registre des traitements effectués pour vos clients (article 30, paragraphe 2).
6. Relisez la liste une fois par an et à chaque nouvel outil.

Ce guide est une information générale, pas un conseil juridique. Pour la plupart des petites équipes, les clauses de la Commission et les contrats standard des éditeurs suffisent, sans avocat. Un avocat ou un DPO vaut l’investissement si vous traitez des données de santé ou d’autres données sensibles, si le contrat d’un client prévoit une responsabilité illimitée ou des indemnisations, si vous êtes responsables conjoints avec une autre entreprise, ou si un prestataire hors d’Europe ne propose aucun mécanisme de transfert fiable.
