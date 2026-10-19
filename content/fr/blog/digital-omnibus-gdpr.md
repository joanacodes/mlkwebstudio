---
title: "Digital Omnibus : ce qui pourrait changer pour le RGPD et les cookies"
seo_title: "Digital Omnibus RGPD : ce qui pourrait changer, et quand"
description: "Digital Omnibus et RGPD : données personnelles, refus des cookies en un clic, IA, violations notifiées sous 96 heures, et où en est le texte en octobre 2026."
slug: "digital-omnibus-rgpd"
translationKey: "digital-omnibus-gdpr"
date: 2026-10-18T21:39:00+02:00
lastmod: 2026-10-18T21:39:00+02:00
category: "gdpr"
article_type: "news"
keywords: ["Digital Omnibus RGPD", "omnibus numérique RGPD", "réforme RGPD 2026", "Digital Omnibus cookies", "notification violation 96 heures", "Digital Omnibus calendrier"]
summary: "Le Digital Omnibus, proposé par la Commission européenne le 19 novembre 2025, modifierait le RGPD et les règles sur les cookies : définition plus étroite des données personnelles, refus des cookies en un clic, intérêt légitime pour l’IA, violations notifiées sous 96 heures et seulement en cas de risque élevé. Au 19 octobre 2026, ce n’est qu’une proposition : ni les États membres ni le Parlement européen n’ont arrêté leur position, et les règles actuelles s’appliquent."
cover: "digital-omnibus-gdpr"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo de boîtes reliées dans un diagramme de flux"
related: ["cookie-banner-rules", "gdpr-data-breach", "uk-gdpr-data-use-access-act", "chatgpt-gdpr-client-data", "privacy-policy-guide"]
services: ["websites"]
faq:
  - q: "Que veut dire « omnibus » en droit européen ?"
    a: "Un omnibus est une proposition unique qui modifie plusieurs textes existants à la fois. Le Digital Omnibus fait partie d’une série de paquets de simplification présentés par la Commission européenne depuis 2025, d’où son nom d’Omnibus VII dans le dossier du Parlement européen."
  - q: "Le Digital Omnibus est-il le même texte que l’omnibus sur l’IA ?"
    a: "Non. Un texte distinct du même paquet, l’omnibus numérique sur l’IA, a modifié le règlement européen sur l’IA (AI Act) : c’est le règlement (UE) 2026/1744, en vigueur depuis le 27 juillet 2026. Les changements du RGPD et des cookies figurent dans l’autre texte, toujours en négociation."
  - q: "Faudra-t-il encore un bandeau cookies si le Digital Omnibus est adopté ?"
    a: "Très probablement, si votre site utilise du reciblage ou un suivi à des fins de publicité personnalisée : la proposition de la Commission comme le projet du Conseil le soumettent toujours au consentement. Un site qui n’utilise que des cookies strictement nécessaires et une mesure d’audience simple pour son propre compte pourrait avoir moins de demandes à faire, selon le texte final."
  - q: "Quand les changements du Digital Omnibus s’appliqueraient-ils ?"
    a: "Seulement après un accord du Parlement européen et du Conseil sur un texte final, sa publication au Journal officiel de l’UE et l’arrivée des dates d’application qu’il fixe, qui peuvent prévoir des périodes de transition. Au 19 octobre 2026, aucune date ne peut être donnée."
---

Le Digital Omnibus (« omnibus numérique » dans les documents officiels en français) est une proposition publiée par la Commission européenne le 19 novembre 2025 pour simplifier d’un coup plusieurs textes européens du numérique. Côté RGPD, il changerait la définition des données personnelles, le consentement aux cookies, la notification des violations de données et la place de l’IA.

Ce n’est pas une loi. Au 19 octobre 2026, les États membres n’ont pas arrêté leur position de négociation et les commissions du Parlement européen n’ont pas voté : toutes les règles que vous appliquez aujourd’hui restent valables. Je détaille ici ce que le Digital Omnibus changerait au RGPD, où en sont les négociations et ce qu’il faut faire maintenant (peu de choses).

Cet article fait partie de mon {{< a key="gdpr-guide" >}}guide du RGPD pour les petites équipes{{< /a >}} et concerne aussi les entreprises installées hors de l’UE, dès qu’elles y ont des clients ou des utilisateurs. C’est une information générale, pas un conseil juridique.

## Digital Omnibus et RGPD : où en est le texte au 19 octobre 2026

Le texte de la Commission est la proposition [COM(2025) 837](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=celex:52025PC0837). Il modifierait notamment le RGPD, la directive ePrivacy (celle des cookies), le règlement sur les données (Data Act) et la directive NIS2. Il ne sera adopté que si le Parlement européen et le Conseil, où siègent les gouvernements des États membres, s’accordent sur un même texte. L’[Observatoire législatif](https://oeil.europarl.europa.eu/oeil/en/procedure-file?reference=2025%2F0360%28COD%29) du Parlement le suit sous la référence 2025/0360(COD).

| Étape | Situation au 19 octobre 2026 |
|---|---|
| Proposition de la Commission | Publiée le 19 novembre 2025 |
| Autorités européennes de protection des données | Avis conjoint du CEPD et de l’EDPS, février 2026 |
| Parlement européen | Commissions industrie (ITRE) et libertés civiles (LIBE) : projet de rapport du 22 juin 2026, plus de 1 750 amendements, pas encore de vote |
| Conseil | Vote des ambassadeurs prévu le 7 octobre 2026 reporté ; aucune position de négociation confirmée |
| Négociations finales (trilogues) | Pas commencées |
| Publication et application | Pas avant les étapes ci-dessus |

Le vote du Conseil a été reporté après que la France et l’Allemagne ont demandé une meilleure protection du secret des affaires dans le volet Data Act. Dans leur avis conjoint, le Comité européen de la protection des données (CEPD) et le Contrôleur européen de la protection des données (EDPS) soutiennent certains changements et s’opposent à d’autres ; je signale leur position quand elle compte.

## Données personnelles : une définition appréciée entreprise par entreprise

L’[article 4, paragraphe 1, du RGPD](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679) définit une donnée personnelle comme toute information se rapportant à une personne physique identifiée ou identifiable. Dans l’affaire SRB (C-413/23 P, arrêt du 4 septembre 2025), la Cour de justice de l’UE a jugé que des données pseudonymisées ne sont pas forcément personnelles pour chaque destinataire : tout dépend des moyens raisonnablement susceptibles d’être utilisés par ce destinataire pour identifier la personne.

La Commission veut inscrire cette logique dans le RGPD : une information ne serait pas une donnée personnelle pour une entreprise incapable d’identifier la personne avec les moyens qu’elle est raisonnablement susceptible d’utiliser, même si un destinataire ultérieur le pourrait. Un nouvel article 41 bis permettrait à la Commission de fixer, par actes d’exécution, les critères qui déterminent quand des données pseudonymisées cessent d’être personnelles pour certains destinataires. Le CEPD et l’EDPS demandent de ne pas adopter ce changement : selon eux, il va au-delà de la jurisprudence et pourrait affaiblir la protection.

Pour la plupart des petites équipes, peu de choses changeraient : votre fichier clients, votre CRM et votre messagerie nomment les personnes, ces données restent donc personnelles pour vous. Le nouveau critère compterait pour des données dont les noms ont été remplacés par des codes, comme un export pseudonymisé reçu d’un partenaire ou transmis à un prestataire.

## Cookies : un refus en un clic et moins de demandes de consentement

Aujourd’hui, le consentement aux cookies vient de l’article 5, paragraphe 3, de la directive ePrivacy (en France, l’article 82 de la loi Informatique et Libertés). La Commission propose de déplacer dans le RGPD, principalement dans un nouvel article 88 bis, les règles sur les données personnelles lues ou stockées sur les appareils. Trois changements ressortent :

- **Moins de demandes de consentement.** Le consentement reste la règle, mais certains usages en seraient dispensés, dont la mesure d’audience agrégée qu’un site réalise pour son propre compte et la sécurité du service.
- **Un refus en un clic.** Refuser se ferait en un seul clic et, après un refus, le site ne pourrait plus redemander pour la même finalité pendant six mois.
- **Les signaux du navigateur.** Un nouvel article 88 ter obligerait les sites à respecter les choix automatisés, lisibles par machine, envoyés par le navigateur ou l’appareil.

Le dernier projet du Conseil, que les États membres n’ont pas encore approuvé, garde les règles sur les cookies dans la directive ePrivacy, prévoit six exemptions de consentement (dont la mesure de la publicité contextuelle et la limitation du nombre d’affichages d’une même publicité) et ramène à quatre mois le délai avant de redemander. Un compromis du Conseil de juin 2026 a supprimé l’article 88 ter.

Pour un site français bien réglé, le changement serait modeste. Dans ses [lignes directrices et sa recommandation sur les cookies](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/lignes-directrices-modificatives-et-recommandation), la CNIL attend déjà un bouton « Tout refuser » aussi simple que « Tout accepter », présente la conservation du refus pendant six mois comme une bonne pratique et dispense de consentement les outils de mesure d’audience configurés selon des conditions strictes. Mon guide sur le {{< a key="cookie-banner-rules" >}}bandeau cookies et les exigences de la CNIL{{< /a >}} détaille les règles actuelles.

## Violations de données : 96 heures, seulement en cas de risque élevé

Selon l’article 33 du RGPD, vous notifiez une violation de données personnelles à l’autorité de contrôle (la CNIL en France) dans les 72 heures après en avoir pris connaissance, sauf si elle est peu susceptible d’engendrer un risque pour les personnes. La proposition changerait trois choses :

1. Seules les violations susceptibles d’engendrer un **risque élevé** seraient notifiées, le seuil qui s’applique déjà à l’information des personnes concernées (article 34).
2. Le délai passerait à **96 heures**.
3. Les notifications passeraient par un **point d’entrée unique européen**, développé avec l’ENISA, l’agence européenne de cybersécurité, et commun à d’autres textes de déclaration d’incidents comme NIS2 et DORA : une seule déclaration pourrait servir pour plusieurs d’entre eux.

Le CEPD et l’EDPS soutiennent ce volet. Tant qu’il ne s’applique pas, le délai de 72 heures et le seuil actuel restent la règle, comme l’explique mon guide sur la {{< a key="gdpr-data-breach" >}}conduite à tenir après une violation de données{{< /a >}}.

## IA, analyses d’impact, information des personnes et droit d’accès

Quatre autres changements toucheraient les petites équipes moins directement.

**L’intérêt légitime pour l’IA.** Un nouvel article 88 quater confirmerait que développer et faire fonctionner des systèmes d’IA peut reposer sur l’intérêt légitime (article 6, paragraphe 1, point f), avec des garanties comme la minimisation des données et un droit d’opposition inconditionnel. Il concerne surtout les entreprises qui conçoivent, entraînent ou exploitent leurs propres systèmes d’IA. Si vous utilisez seulement un assistant, les questions de mon article sur {{< a key="chatgpt-gdpr-client-data" >}}les données clients que vous pouvez confier à une IA{{< /a >}} restent les bonnes.

**Les analyses d’impact (AIPD).** Aujourd’hui, chaque autorité nationale, comme la CNIL, publie sa propre liste des traitements qui exigent une analyse d’impact (article 35). La proposition les réunirait en une liste européenne des traitements qui en exigent une et une liste de ceux qui n’en exigent pas, avec un modèle et une méthode communs.

**L’information des personnes.** L’article 13 gagnerait une exemption quand vous collectez des données dans une relation claire et circonscrite, que votre activité n’utilise pas massivement de données et que vous pouvez raisonnablement penser que la personne dispose déjà des informations. L’exemption ne jouerait pas, entre autres, si vous transmettez les données à d’autres destinataires, si vous les transférez hors de l’UE ou si le traitement présente un risque élevé. Mon guide sur {{< a key="privacy-policy-guide" >}}le contenu d’une politique de confidentialité{{< /a >}} explique l’obligation actuelle.

**Le droit d’accès.** Une demande d’accès (article 15) faite à d’autres fins que la protection de ses données pourrait être traitée comme excessive sur la base de motifs raisonnables, sans preuve d’abus. Le CEPD et l’EDPS s’opposent à cet assouplissement.

## Hors de l’UE : Royaume-Uni, Suisse, Maghreb, Canada

Le RGPD suit vos clients, pas votre adresse. Selon son article 3, paragraphe 2, il s’applique à une entreprise établie hors de l’UE qui propose des biens ou des services à des personnes dans l’UE, ou qui y suit leur comportement. S’ils sont adoptés, les changements du Digital Omnibus s’appliqueraient donc à une boutique en ligne marocaine qui livre en France, à une application québécoise utilisée en Belgique ou à un organisme de formation suisse qui vend des cours en ligne à des particuliers français, pour ces clients-là. Mon article sur {{< a key="gdpr-outside-eu" >}}le RGPD pour les entreprises hors de l’UE{{< /a >}} détaille les deux critères.

À l’inverse, vos clients au Royaume-Uni relèvent du RGPD britannique (UK GDPR) et des règles britanniques sur les cookies (PECR), que le Data (Use and Access) Act 2025 a déjà modifiés, pour l’essentiel depuis le 5 février 2026. Les cookies de mesure d’audience purement statistique y sont par exemple dispensés de consentement, si les visiteurs en sont informés et peuvent s’y opposer facilement. Un site qui vend des deux côtés de la Manche applique donc déjà deux régimes de cookies, et l’Omnibus ne modifierait que le régime européen. Je détaille le volet britannique dans {{< a key="uk-gdpr-data-use-access-act" >}}mon article sur le RGPD britannique{{< /a >}}.

## Que faire maintenant, et quand se faire aider

Rien dans le Digital Omnibus ne s’applique encore : votre liste de tâches n’a pas changé.

1. **Continuez d’appliquer les règles actuelles.** Notifiez les violations sous 72 heures, demandez le consentement avant tout cookie non essentiel et donnez aux personnes les informations de l’article 13.
2. **Ne touchez pas à un bandeau cookies conforme.** Plutôt que de le refaire pour un texte qui peut encore changer, vérifiez qu’il respecte les règles actuelles : refuser aussi simple qu’accepter, rien de non essentiel chargé avant la réponse, le choix enregistré.
3. **Surveillez quatre étapes.** La position de négociation du Conseil, le vote des commissions du Parlement, le début des trilogues, puis la publication au Journal officiel avec ses dates d’application.
4. **Notez ce qui vous toucherait.** Pour la plupart des petites équipes, ce sont les règles sur les cookies et les violations. Si vous travaillez avec des données pseudonymisées, entraînez une IA avec des données clients ou suivez les visiteurs à grande échelle, l’avis d’un avocat ou d’un DPO vaut la peine avant de modifier quoi que ce soit : ce sont les points les plus susceptibles de bouger.

Quand je crée un site, le bandeau cookies et les pages de confidentialité font partie du {{< a page="/services/websites" >}}projet de site web{{< /a >}} : ils suivent les règles en vigueur le jour de la mise en ligne, pas une proposition.
