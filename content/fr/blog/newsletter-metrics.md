---
title: "Statistiques de newsletter : pourquoi le taux d’ouverture ment, et quoi suivre à la place"
seo_title: "Taux d’ouverture newsletter : pourquoi il ment, quoi suivre"
description: "Votre taux d’ouverture newsletter compte des robots depuis Apple Mail Privacy Protection. Pourquoi il ment, et quoi suivre : clics, réponses, ventes."
slug: "taux-ouverture-newsletter"
translationKey: "newsletter-metrics"
date: 2026-10-18T23:30:00+02:00
lastmod: 2026-10-18T23:30:00+02:00
category: "funnels"
article_type: "guide"
keywords: ["taux d’ouverture newsletter", "statistiques newsletter", "taux de clic emailing", "Apple Mail Privacy Protection", "pixel de suivi CNIL", "bon taux d’ouverture newsletter"]
summary: "Le taux d’ouverture d’une newsletter compte les emails qui ont chargé une image invisible, pas des lecteurs : Apple Mail la charge sans lecture, les filtres de sécurité ouvrent et cliquent seuls, et les images bloquées cachent de vrais lecteurs. Jugez plutôt chaque envoi sur les clics, les réponses, les ventes suivies par UTM dans GA4, les désabonnements et les plaintes. Depuis avril 2026, la CNIL demande un consentement pour mesurer les ouvertures à des fins marketing."
cover: "newsletter-metrics"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé posé sur une photo, avec un graphique en courbe qui monte"
related: ["newsletter-deliverability", "utm-ga4-funnel-tracking", "welcome-email-sequence", "b2b-newsletter-ideas", "funnels-newsletters-guide"]
services: ["automation"]
faq:
  - q: "Pourquoi mon taux d’ouverture est-il plus élevé que les moyennes ?"
    a: "Souvent parce qu’une plus grande part de vos abonnés lit dans Apple Mail avec la fonction Mail Privacy Protection activée, ou utilise une adresse professionnelle derrière un filtre de sécurité : dans les deux cas, des ouvertures sont comptées sans lecteur. Comparez plutôt votre taux de clic aux moyennes, il est moins touché."
  - q: "Une newsletter en texte brut mesure-t-elle les ouvertures ?"
    a: "Non. Le suivi des ouvertures passe par une image, et un email en texte brut n’en contient pas. Les liens avec paramètres UTM montrent quand même les visites et les événements clés dans GA4, et les réponses n’ont besoin d’aucun suivi."
  - q: "Qu’est-ce qu’un email délivré ?"
    a: "Un email accepté par le serveur du destinataire : vos envois moins les rebonds (bounces). Délivré ne veut pas dire arrivé en boîte de réception : l’email peut finir dans les spams, ce que votre rapport de newsletter ne montre pas."
  - q: "Le taux de clic se calcule-t-il de la même façon dans tous les outils ?"
    a: "Non. Brevo, par exemple, définit son taux de clic comme la part des destinataires qui ont cliqué au moins un lien, alors que d’autres rapports divisent les clics par les ouvertures. Vérifiez la définition de votre outil avant de vous comparer à une moyenne."
---

Le taux d’ouverture de votre newsletter a l’air bon, mais les demandes de devis ne suivent pas. Ce décalage est réel : ce chiffre compte les emails qui ont chargé une minuscule image, et une partie de ces chargements vient des serveurs d’Apple et de filtres de sécurité, pas de lecteurs.

Ce guide explique comment une ouverture est comptée, pourquoi le chiffre se trompe et ce que je suivrais à la place. Il fait partie de mon {{< a key="funnels-newsletters-guide" >}}guide des tunnels de vente et des newsletters{{< /a >}}.

Pour faire court : gardez les ouvertures comme une tendance approximative, et jugez chaque envoi sur ce que les lecteurs font après l’avoir lu.

## Comment se calcule le taux d’ouverture d’une newsletter

Votre outil de newsletter ajoute un pixel de suivi dans chaque email HTML : une image invisible, d’un pixel de large, dont l’adresse est propre à chaque destinataire. Quand une messagerie télécharge cette image, l’outil enregistre une ouverture pour cette personne.

Le taux d’ouverture correspond aux ouvertures uniques divisées par les emails délivrés : 300 ouvertures pour 1 000 emails délivrés donnent 30 %. Tout le calcul repose sur une hypothèse : l’image se charge quand une personne lit l’email, et seulement alors.

Un email en texte brut ne contient aucune image : il n’enregistre donc aucune ouverture.

## Pourquoi le taux d’ouverture ment : trois biais

### Apple Mail ouvre des emails que personne n’a lus

Apple a lancé Mail Privacy Protection avec iOS 15, en 2021. Quand cette fonction est activée, Apple Mail télécharge en arrière-plan le contenu distant, pixels de suivi compris, que la personne ouvre l’email ou non, et masque son adresse IP. Le [guide d’Apple](https://support.apple.com/fr-fr/guide/iphone/iphf084865c7/ios) indique qu’elle empêche les expéditeurs de savoir si vous avez ouvert leur message.

Les abonnés qui lisent dans Apple Mail avec cette protection peuvent donc apparaître comme ayant ouvert sans avoir lu, et l’heure et le lieu d’ouverture affichés ne disent rien du lecteur. La fonction ne concerne que l’application Mail d’Apple : une personne qui lit sur iPhone dans l’application Gmail est comptée comme avant.

### Les images bloquées cachent de vrais lecteurs

L’inverse existe aussi. Certaines messageries, notamment en entreprise, ne chargent pas les images sans l’accord du lecteur, et certaines personnes les désactivent pour de bon. Ces lecteurs peuvent lire votre newsletter de bout en bout sans jamais compter comme une ouverture.

### Les filtres de sécurité ouvrent et cliquent avant votre lecteur

Beaucoup de boîtes professionnelles passent par des filtres de sécurité qui chargent les images et suivent les liens pour les vérifier avant la remise de l’email ; les aperçus de liens font de même. Le centre d’aide de Mailchimp cite la sécurité antispam, la fonction d’Apple et les aperçus de liens comme sources habituelles de cette activité de robots, et précise qu’un clic de robot compte aussi comme une ouverture.

Le signe révélateur : un abonné qui ouvre et clique plusieurs fois dans les mêmes secondes, parfois sur tous les liens de l’envoi. Si vos abonnés utilisent surtout des adresses professionnelles, cherchez d’abord ce schéma.

| Biais | Effet sur les ouvertures | Effet sur les clics |
|---|---|---|
| Mail Privacy Protection d’Apple | Gonflées : des emails non lus comptent comme ouverts | Aucun |
| Images bloquées | Sous-estimées : de vrais lecteurs passent inaperçus | Aucun |
| Filtres de sécurité et aperçus de liens | Gonflées | Gonflés, sauf si votre outil filtre les robots |

## Quel est un bon taux d’ouverture pour une newsletter ?

Il n’y a pas de chiffre fixe, et deux études sur la même année montrent pourquoi. Les [statistiques 2025 de MailerLite](https://www.mailerlite.com/blog/compare-your-email-performance-metrics-industry-benchmarks), sur 3,6 millions de campagnes, donnent un taux d’ouverture moyen de 43,46 % et un taux de clic moyen de 2,09 %. Celles de [Brevo](https://www.brevo.com/blog/email-marketing-benchmarks/), sur plus de 175 000 clients en 2025, excluent les ouvertures automatiques d’Apple : 20,73 % d’ouvertures et 2,27 % de clics.

Les deux bases de clients diffèrent, la comparaison reste donc approximative. Mais l’un des taux d’ouverture fait environ le double de l’autre, quand les taux de clic sont à 0,2 point près : tout l’argument de cet article tient en quatre chiffres.

Les taux de clic varient aussi selon le secteur, de 0,83 % à 4,90 % dans les données de MailerLite. **Votre meilleure référence, ce sont vos propres envois** : notez votre taux de clic sur vos six dernières newsletters et comparez chaque nouvel envoi à cette base.

## Quoi suivre à la place

Voici les chiffres que je mettrais dans un bilan de newsletter.

| Indicateur | Comment le calculer | Ce qu’il vous dit |
|---|---|---|
| Taux de clic | Cliqueurs uniques ÷ emails délivrés | Si l’envoi a donné envie de quelque chose |
| Réponses | Réponses reçues par envoi | Si les lecteurs osent vous écrire |
| Conversions | Rendez-vous, devis ou ventes venus de l’email | Si la newsletter rapporte des affaires |
| Taux de désabonnement | Désabonnements ÷ emails délivrés | Si le sujet ou la fréquence conviennent encore |
| Taux de plaintes pour spam | Plaintes ÷ emails délivrés | Si des gens pensent n’avoir rien demandé |
| Croissance nette de la liste | Nouveaux abonnés moins désabonnements, rebonds et plaintes | Si la liste grandit ou rétrécit |

{{< callout type="tip" >}}Si vous ne suivez qu’un chiffre, suivez **les conversions issues des visites depuis l’email** : rendez-vous, demandes de devis ou ventes. Les autres indicateurs servent à l’expliquer.{{< /callout >}}

### Le taux de clic, sur les emails délivrés

Évitez le taux de réactivité (clics divisés par ouvertures) : il hérite de tous les défauts de l’ouverture. Si votre outil propose un filtrage des robots, activez-le avant de comparer vos envois. Mailchimp prévient que les ouvertures et les clics baissent nettement une fois ce filtre activé, et c’est bien le but.

Un envoi construit autour d’un lien principal se lit plus nettement, et mes {{< a key="b2b-newsletter-ideas" >}}idées de newsletter B2B{{< /a >}} aident à trouver quoi y mettre.

### Les réponses

Pour une petite équipe qui vend un service, une réponse vaut plus qu’un clic : c’est le début d’une conversation. Terminez un envoi par une vraie question. Les réponses arrivent dans votre boîte, pas dans le rapport : comptez-les envoi par envoi.

### Les conversions : rendez-vous et ventes

Ajoutez des paramètres UTM à chaque lien d’un envoi, pour que GA4 distingue les visites venues de la newsletter :

```
https://exemple.fr/audit/?utm_source=newsletter&utm_medium=email&utm_campaign=2026-10
```

Marquez ensuite la page de confirmation de rendez-vous ou de remerciement comme événement clé (ce que GA4 appelait une conversion). La question « combien de rendez-vous les envois d’octobre ont-ils amenés ? » a alors une réponse. Mon {{< a key="utm-ga4-funnel-tracking" >}}tutoriel UTM et GA4{{< /a >}} détaille la mise en place.

### Désabonnements et plaintes pour spam

Un désabonnement est un non poli ; une plainte pour spam est un non bruyant, qui abîme votre délivrabilité. Gmail demande que le taux de spam affiché dans Google Postmaster Tools reste sous 0,1 %, soit une plainte pour 1 000 emails, et n’atteigne jamais 0,3 %. Sur une petite liste, Postmaster Tools peut afficher des données incomplètes les jours calmes : lisez-le sur le mois. Mon guide des {{< a key="newsletter-deliverability" >}}règles d’envoi de Gmail, Yahoo et Outlook{{< /a >}} explique le reste.

Lisez les désabonnements envoi par envoi plutôt qu’en moyenne : un pic après un envoi montre ce que cet envoi a fait différemment.

### Croissance nette et attrition de la liste

Calculez la croissance nette sur un mois, et l’attrition (le churn), soit les départs divisés par la taille de la liste en début de mois. Si les gens partent dès leurs premières semaines, regardez d’abord votre {{< a key="welcome-email-sequence" >}}séquence de bienvenue{{< /a >}}.

## Tests A/B : jugez l’objet sur les clics, pas sur les ouvertures

Un test d’objet jugé sur les ouvertures mesure en partie du bruit. Les ouvertures automatiques tombent sur les deux versions, quel que soit l’objet : l’écart se réduit, et la version gagnante peut l’être par hasard. Jugez vos tests sur les clics, ou mieux, sur les réponses et les conversions. Si votre outil désigne le gagnant automatiquement, vérifiez sur quel indicateur.

Sur quelques centaines d’abonnés, un test isolé ne prouve pas grand-chose : refaites la comparaison sur plusieurs envois avant de changer vos habitudes. C’est ainsi que je mène les tests de cold emailing pour mes clients. Les emails sont en texte brut, avec un numéro de téléphone et sans lien : il n’y a ni ouverture ni clic à compter, et les versions se comparent sur les réponses et les appels. Au fil des semaines, le texte qui obtient des réponses l’emporte.

## Segments d’engagement : qui lit vraiment

Les ouvertures repèrent mal les abonnés inactifs. Les utilisateurs d’Apple Mail semblent actifs pour toujours, et ceux qui bloquent les images semblent inactifs alors qu’ils lisent chaque envoi. Construisez plutôt vos segments sur les clics et les réponses. Pour une newsletter hebdomadaire, par exemple :

- **Engagés** : un clic ou une réponse dans les 90 derniers jours.
- **Discrets** : aucun clic depuis 90 jours, mais au moins un dans les six derniers mois.
- **Inactifs** : aucun clic depuis six mois.

Doublez ces durées pour une newsletter mensuelle. Envoyez au segment inactif un court email qui demande si ces personnes veulent toujours vous lire, et retirez celles qui ne cliquent pas pour rester.

## Pixels de suivi et consentement : ce que demande la CNIL

Au 19 octobre 2026, la référence en France est la recommandation de la CNIL sur les pixels de suivi dans les courriers électroniques, adoptée le 12 mars 2026 et publiée le 14 avril 2026 ([texte de la recommandation](https://www.cnil.fr/sites/default/files/2026-04/recommandation-pixels_de_suivi.pdf)). Pour la CNIL, un pixel d’ouverture lit des informations sur le terminal du destinataire, ce qui relève de l’article 82 de la loi Informatique et Libertés.

Mesurer les ouvertures à des fins marketing demande donc un consentement préalable, distinct de l’accord pour recevoir la newsletter. C’est vrai aussi en B2B, où l’envoi lui-même reste possible sans consentement s’il concerne la profession du destinataire. Les exceptions sont étroites, comme la sécurité ou la mesure de la délivrabilité. La recommandation ne vise pas les liens tracés, mais la CNIL rappelle que c’est la finalité qui compte, pas la technique.

Puisque cet article plaide pour juger une newsletter sur ce que font les lecteurs, couper le suivi des ouvertures, ou le soumettre au consentement, vous coûte peu. Mon guide sur la {{< a key="newsletter-consent-gdpr" >}}newsletter et le consentement RGPD{{< /a >}} traite du côté inscription. Ces explications sont générales et ne constituent pas un conseil juridique : si votre liste est importante, ou si vous croisez les données d’emailing avec de la publicité, une heure avec un avocat spécialisé ou un DPO est un bon investissement.

## Votre bilan mensuel de newsletter : la liste de contrôle

Une fois par mois, filtrage des robots activé si votre outil le propose :

1. Notez les emails délivrés, les clics uniques, les désabonnements et les plaintes de chaque envoi du mois.
2. Comptez les réponses reçues par envoi.
3. Dans GA4, regardez les sessions au support « email » et les événements clés qui ont suivi : rendez-vous, demandes de devis, ventes.
4. Vérifiez le taux de spam dans Postmaster Tools.
5. Calculez la croissance nette et l’attrition.
6. Décidez d’une chose à garder, à changer ou à abandonner le mois suivant.

Si le bilan prend plus de temps que l’écriture de la newsletter, automatisez la collecte dans un seul tableur ou tableau de bord.
