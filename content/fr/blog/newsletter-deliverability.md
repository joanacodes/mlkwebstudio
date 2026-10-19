---
title: "Délivrabilité d’une newsletter : règles de Gmail, Yahoo et Outlook expliquées"
seo_title: "Délivrabilité newsletter : règles Gmail, Yahoo et Outlook"
description: "Délivrabilité newsletter : ce qu’exigent Gmail, Yahoo et Outlook (SPF, DKIM, DMARC, désinscription en un clic, taux de spam) et la checklist de conformité."
slug: "delivrabilite-newsletter-gmail-yahoo-outlook"
translationKey: "newsletter-deliverability"
date: 2026-10-18T23:27:00+02:00
lastmod: 2026-10-18T23:27:00+02:00
category: "funnels"
article_type: "guide"
keywords: ["délivrabilité newsletter", "exigences Gmail expéditeurs", "expéditeur en masse Gmail", "règles Yahoo et Outlook expéditeurs", "désinscription en un clic", "Google Postmaster Tools"]
summary: "Depuis février 2024, Gmail exige de tout expéditeur SPF ou DKIM et un taux de spam sous 0,3 % ; dès environ 5 000 messages par jour vers des comptes Gmail personnels, il faut aussi SPF, DKIM, un DMARC aligné et une désinscription en un clic traitée sous deux jours, comme chez Yahoo. Outlook.com exige SPF, DKIM et DMARC à partir de 5 000 messages par jour depuis le 5 mai 2025. Pour une newsletter : votre domaine authentifié, des abonnés volontaires, moins de 0,1 % de plaintes."
cover: "newsletter-deliverability"
cover_alt: "Le titre Délivrabilité d’une newsletter en blanc sur un panneau de verre cannelé, devant une photo d’enveloppes empilées avec un badge de notification"
related: ["spf-dkim-dmarc-setup", "newsletter-tools-comparison", "newsletter-metrics", "email-list-verification-reoon", "cold-email-infrastructure"]
services: ["automation"]
faq:
  - q: "L’onglet Promotions de Gmail, est-ce du spam ?"
    a: "Non. Promotions est un onglet de la boîte de réception, et vos lecteurs y trouvent toujours votre newsletter. Les règles des expéditeurs tranchent autre chose : arriver en boîte de réception, finir dans les spams ou être refusé."
  - q: "Les factures et les mails de mot de passe suivent-ils les mêmes règles ?"
    a: "Pour l’authentification, oui : tout message envoyé depuis votre domaine doit passer SPF ou DKIM, et Google additionne tous les messages d’un même domaine principal pour le seuil de 5 000 par jour. Les règles de désinscription visent les messages marketing et ceux auxquels le destinataire s’est abonné, comme une newsletter."
  - q: "Le statut d’expéditeur en masse de Gmail est-il définitif ?"
    a: "Oui. Google indique qu’un expéditeur classé dans cette catégorie y reste, même si son volume baisse ensuite. Un seul gros envoi suffit donc à vous soumettre aux règles renforcées pour de bon."
  - q: "Faut-il une adresse IP dédiée pour sa newsletter ?"
    a: "Pas pour la newsletter d’une petite équipe. Les outils de newsletter envoient depuis des adresses partagées qu’ils surveillent, et une IP dédiée a besoin d’un volume important et régulier pour se bâtir une réputation. L’authentification de votre domaine et votre taux de spam comptent davantage."
  - q: "Combien de temps faut-il pour qu’une correction apparaisse dans Postmaster Tools ?"
    a: "Jusqu’à sept jours, selon Google. Les tableaux de bord ne sont pas en temps réel et se mettent en général à jour sous 24 heures, et les jours où vous envoyez peu vers Gmail, les chiffres peuvent être incomplets."
---

Gmail, Yahoo et Outlook.com publient désormais des règles écrites pour ceux qui envoient des mails à leurs utilisateurs, et votre newsletter n’y échappe pas. Les exigences de Gmail donnent le ton : un domaine authentifié par SPF, DKIM et DMARC, une désinscription en un clic et un plafond de plaintes pour spam. Depuis novembre 2025, Gmail les applique plus strictement, avec des refus temporaires et définitifs pour les messages non conformes.

La délivrabilité d’une newsletter, c’est la part de vos envois qui arrive en boîte de réception, au lieu de finir dans les spams ou d’être rejetée. Pour une petite équipe, c’est ce qui décide si le travail mis dans chaque numéro atteint vraiment ses lecteurs. Cet article fait partie de mon {{< a key="funnels-newsletters-guide" >}}guide du tunnel de vente et de la newsletter{{< /a >}}.

## À qui s’appliquent les règles : le seuil des 5 000 messages par jour

Gmail fonctionne sur deux niveaux : des règles de base pour tous les expéditeurs, et des règles renforcées pour les expéditeurs en masse. Gmail et Outlook.com placent tous deux la limite vers 5 000 messages par jour, mais ne comptent pas de la même façon :

- **Gmail** vous considère comme un expéditeur en masse dès que vous envoyez environ 5 000 messages ou plus vers des comptes Gmail personnels en 24 heures. Les messages d’un même domaine principal s’additionnent, sous-domaines compris.
- **Outlook.com** compte les envois de 5 000 messages ou plus par jour vers ses adresses grand public (Outlook.com, Hotmail et Live) qui utilisent le même domaine dans l’adresse d’expédition.

Yahoo a sa propre liste d’exigences pour les expéditeurs en masse, proche de celle de Google sur l’essentiel.

Le seuil arrive plus vite qu’on ne le croit. Prenons une liste de 12 000 abonnés dont 45 % utilisent Gmail : un envoi du mardi fait partir 5 400 messages vers Gmail dans la journée, et vous voilà expéditeur en masse pour de bon.

Les adresses professionnelles sur Google Workspace ou Microsoft 365, qui reçoivent l’essentiel d’une newsletter B2B, n’entrent pas dans ces comptes, pas plus que les adresses orange.fr, free.fr, sfr.fr ou laposte.net, nombreuses dans les fichiers français. Mais toutes ces messageries ont leurs propres filtres. Mon conseil vaut donc pour toutes les listes : respectez les règles des gros expéditeurs dès le premier envoi, avant que la liste ne grandisse.

## Les exigences de Gmail, ligne par ligne

Les [consignes de Google pour les expéditeurs](https://support.google.com/mail/answer/81126?hl=fr) s’appliquent depuis février 2024. Voici ce qu’elles demandent, traduit pour une newsletter.

### Ce que tout expéditeur doit faire

- **SPF ou DKIM** sur le domaine d’envoi. SPF liste les serveurs autorisés à envoyer pour votre domaine ; DKIM signe chaque message avec une clé publiée dans votre DNS.
- **Des enregistrements DNS directs et inverses valides** pour les serveurs d’envoi, et une connexion **TLS**. Quand vous passez par un outil de newsletter, les deux relèvent de lui.
- **Un taux de spam sous 0,3 %**, mesuré dans Google Postmaster Tools. Google conseille de rester sous 0,1 %.
- **Ne pas se faire passer pour Gmail.** Google demande de ne pas usurper les en-têtes From de Gmail.

### Ce que les expéditeurs en masse doivent ajouter

- **SPF et DKIM**, les deux, pas l’un ou l’autre.
- **Un enregistrement DMARC** avec au moins `p=none`, la politique qui observe et envoie des rapports sans rien bloquer.
- **L’alignement.** Le domaine de votre adresse d’expédition doit correspondre au domaine validé par SPF ou par DKIM. Avec un outil de newsletter, l’alignement passe en général par DKIM, dès que l’outil signe avec votre domaine plutôt qu’avec le sien.
- **La désinscription en un clic** sur les messages marketing et d’abonnement, selon la norme RFC 8058, plus un lien de désinscription bien visible dans le corps du message, avec des désinscriptions traitées sous deux jours.
- **Le même plafond de spam, avec une conséquence.** Au-delà de 0,3 %, Google indique qu’un expéditeur en masse ne peut plus compter sur l’aide de Google en cas de problème de distribution.

La désinscription en un clic tient en deux lignes dans les en-têtes du message, que les messageries peuvent transformer en bouton de désinscription à côté de votre nom :

```
List-Unsubscribe: <https://news.example.com/unsubscribe/a1b2c3>
List-Unsubscribe-Post: List-Unsubscribe=One-Click
```

### Ce qui arrive aux messages non conformes

Les exigences n’ont pas changé depuis 2024. Leur application, si : la FAQ de Google indique que depuis novembre 2025, Gmail durcit son traitement du trafic non conforme, avec des refus temporaires (codes 4xx, renvoyés plus tard) et définitifs (codes 5xx, jamais distribués). Dans votre outil de newsletter, ils apparaissent comme des rebonds (bounces).

{{< callout type="tip" >}}Quand un envoi rebondit, lisez l’erreur dans le rapport de rebonds de votre outil avant de toucher à quoi que ce soit. Le code et la phrase qui le suit disent en général si le problème vient de **l’authentification** ou d’autre chose.{{< /callout >}}

## Yahoo et Outlook : le même socle, quelques différences

Les [bonnes pratiques de Yahoo pour les expéditeurs](https://senders.yahooinc.com/best-practices/) (en anglais) demandent aux expéditeurs en masse la même chose que Google : SPF et DKIM, une politique DMARC d’au moins `p=none` qui passe, un domaine d’expédition aligné sur SPF ou DKIM, une désinscription en un clic honorée sous deux jours, un lien de désinscription visible dans le corps du message et un taux de plaintes sous 0,3 %.

Les règles de Microsoft pour les adresses Outlook.com, Hotmail et Live sont plus étroites. Depuis le 5 mai 2025, un domaine qui leur envoie 5 000 messages ou plus par jour doit passer SPF et DKIM, publier un enregistrement DMARC (au moins `p=none`) et aligner l’un des deux sur le domaine d’expédition. Les messages qui échouent sont refusés avec l’erreur `550 5.7.515 Access denied`, comme l’explique [la page d’assistance de Microsoft](https://support.microsoft.com/en-us/outlook/fix-ndr-error-550-5-7-515-in-outlook-com) (en anglais). Un lien de désinscription fonctionnel, une liste propre, des objets honnêtes et le consentement figurent dans l’annonce de Microsoft comme recommandations, pas comme exigences.

| Règle pour les gros expéditeurs | Gmail | Yahoo | Outlook.com |
|---|---|---|---|
| En vigueur depuis | Février 2024, application durcie depuis novembre 2025 | Février 2024 | 5 mai 2025 |
| SPF et DKIM | Exigés | Exigés | Exigés |
| DMARC en `p=none` ou plus strict, aligné | Exigé | Exigé | Exigé |
| Désinscription en un clic et lien visible dans le message | Exigés | Exigés | Lien de désinscription fonctionnel recommandé |
| Traitement des désinscriptions sous deux jours | Exigé | Exigé | Non exigé |
| Plafond de plaintes | 0,3 %, viser 0,1 % | 0,3 % | Hors exigences |

## Ce que fait votre outil de newsletter, et ce qui reste à votre charge

Un outil comme Brevo, MailerLite, Mailchimp ou Kit gère les serveurs d’envoi, retire les adresses qui rebondissent, et doit ajouter les en-têtes de désinscription et traiter les désinscriptions à votre place. Mon {{< a key="newsletter-tools-comparison" >}}comparatif des outils de newsletter{{< /a >}} vous aidera si vous n’avez pas encore choisi. Quatre choses restent à votre charge.

### Envoyer depuis votre domaine, jamais depuis une adresse Gmail

Un outil de newsletter ne peut pas signer de messages pour gmail.com, puisque seul Google contrôle le DNS de ce domaine. Une newsletter envoyée depuis vous@gmail.com ne peut donc jamais s’aligner pour DMARC, quoi que vous configuriez, et elle tombe sous l’avertissement de Google sur l’usurpation de Gmail. Utilisez une adresse sur votre propre domaine, comme bonjour@ ou newsletter@, et vérifiez qu’elle reçoit les réponses : Microsoft recommande une adresse d’expédition ou de réponse qui le permet.

### Authentifier votre domaine dans l’outil, puis ajouter DMARC

Cherchez dans votre outil la page de réglages consacrée à l’authentification du domaine ou de l’expéditeur. Elle vous donne deux ou trois enregistrements DNS, souvent des CNAME, qui lui permettent de signer votre newsletter en DKIM pour votre propre domaine. Ajoutez-les dans la zone DNS chez votre bureau d’enregistrement (registrar) ou votre hébergeur, puis revenez cliquer sur le bouton de vérification de l’outil. Squarespace et OVH ont leurs pièges : quand j’y ai connecté des domaines, le seul souci a été un simple point à ajouter à la fin d’une entrée.

Publiez ensuite un enregistrement DMARC si votre domaine n’en a pas encore. Un seul enregistrement TXT suffit pour commencer :

```
_dmarc.example.com   TXT   "v=DMARC1; p=none; rua=mailto:rapports-dmarc@example.com"
```

`p=none` suffit pour les trois messageries. L’adresse `rua` reçoit des rapports qui montrent quels services envoient des mails en votre nom ; quand tous passent, vous pouvez durcir la politique. Mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC pas à pas{{< /a >}} détaille les enregistrements chez OVH, Spaceship et Namecheap, et la façon de durcir DMARC sans bloquer vos propres mails.

Pour vérifier le résultat, envoyez un numéro de test à une adresse Gmail, ouvrez-le sur ordinateur, cliquez sur le menu à trois points à côté de **Répondre**, puis sur **Afficher l’original**. Vous voulez PASS sur les lignes SPF, DKIM et DMARC, avec votre propre domaine sur la ligne DKIM, et non celui de l’outil.

### Un sous-domaine pour la newsletter, ou pas

La plupart des outils permettent d’envoyer depuis un sous-domaine comme news.example.com. Il sépare les clés DKIM et les rapports DMARC de la newsletter de ceux de vos boîtes mail du quotidien, ce qui rend un problème plus facile à repérer. Il ne vous fait pas sortir des règles : Google additionne tous les messages d’un même domaine principal, et Postmaster Tools affiche la conformité du domaine entier. Un sous-domaine vaut la peine quand plusieurs outils envoient déjà depuis votre domaine principal ; avec un seul outil de newsletter, le domaine principal convient aussi.

### Vérifier vous-même les en-têtes de désinscription

Sur la même page « Afficher l’original », cherchez les deux lignes List-Unsubscribe montrées plus haut. Si elles manquent, interrogez le support de votre outil avant le prochain envoi. Gardez aussi un lien de désinscription visible en pied de message : Google et Yahoo l’exigent des expéditeurs en masse, et un lecteur qui le trouve en deux secondes n’a aucune raison de cliquer sur **Signaler comme spam** à la place.

## Garder un taux de spam sous 0,1 %

Le taux de spam de Google, c’est la part de vos messages que les utilisateurs de Gmail signalent comme spam, calculée chaque jour. 0,3 %, ce sont trois plaintes pour 1 000 mails, et 0,1 %, une seule. Une newsletter qui arrive dans 2 000 boîtes Gmail atteint le plafond de Google avec six clics sur **Signaler comme spam**.

Aucun enregistrement DNS ne fait baisser ce chiffre. Ces habitudes, si :

1. **N’écrire qu’à ceux qui l’ont demandé.** Pas de fichier acheté ou loué, et jamais de contacts importés sans inscription. Les règles de consentement (RGPD, soft opt-in, double opt-in) sont détaillées dans mon article {{< a key="newsletter-consent-gdpr" >}}newsletter et RGPD{{< /a >}}. Ces informations sont générales et ne constituent pas un conseil juridique.
2. **Confirmer les inscriptions par mail.** Le double opt-in écarte les fautes de frappe et les fausses adresses, et rappelle aux nouveaux abonnés qui vous êtes.
3. **Annoncer ce que recevront les lecteurs, puis s’y tenir.** Le formulaire d’inscription doit indiquer le sujet et le rythme ; une newsletter mensuelle qui devient soudain hebdomadaire récolte des plaintes.
4. **Signer d’un nom d’expéditeur reconnaissable** : le nom de votre entreprise, ou le vôtre accompagné de celui-ci, toujours le même.
5. **Vérifier un ancien fichier avant de l’importer.** Les gens changent de poste et abandonnent des adresses, et une rafale de rebonds sur un envoi abîme votre réputation chez toutes les messageries. J’utilise Reoon tous les jours pour les listes de cold emailing, et la même vérification fonctionne sur une ancienne liste de newsletter : mon tutoriel pour {{< a key="email-list-verification-reoon" >}}vérifier une liste d’emails{{< /a >}} montre les étapes. La vérification retire les adresses mortes ; elle ne donnera envie à personne de vous lire.
6. **Retirer ceux qui ne lisent plus.** Choisissez une période adaptée à votre rythme, par exemple six mois sans clic pour une newsletter mensuelle, envoyez un dernier mail pour demander si les lecteurs veulent continuer, puis retirez ceux qui ne répondent pas. Les ouvertures sont un mauvais indicateur ici, pour les raisons données dans mon article sur les {{< a key="newsletter-metrics" >}}statistiques de newsletter{{< /a >}}.
7. **Monter en charge progressivement sur un nouveau domaine.** Pour les premiers envois depuis un nouveau domaine ou un nouvel outil, commencez par vos abonnés les plus récents et ajoutez le reste au fil des numéros suivants, plutôt que d’écrire à toute la liste dès le premier jour.

## Tenir la newsletter à l’écart de votre cold emailing

Les cold emails partent vers des gens qui n’ont rien demandé : leur place est sur des domaines secondaires et des boîtes mail prévues pour cela, comme dans mon article sur l’{{< a key="cold-email-infrastructure" >}}infrastructure de cold emailing{{< /a >}}. La newsletter part vers des inscrits, depuis votre domaine principal ou un sous-domaine, par un outil de newsletter. Mélanger les deux expose votre newsletter, et votre domaine principal, à chaque campagne de prospection.

Le contenu diffère aussi. Mes cold emails sont en texte brut, trois lignes au maximum pour le premier, avec un numéro de téléphone et aucun lien ni HTML, pour garantir une bonne délivrabilité. Une newsletter peut porter des liens et des images, puisque les lecteurs l’ont demandée, mais la sobriété aide encore : des liens vers votre propre domaine, pas de raccourcisseurs d’URL, et du vrai texte plutôt qu’une seule grande image.

Ne versez jamais non plus vos prospects dans la liste de la newsletter. Ils ne se sont pas inscrits, et ce sont eux qui risquent le plus de vous signaler.

## Surveiller les chiffres : Postmaster Tools, Sender Hub et SNDS

L’essentiel se trouve dans les rapports de votre outil de newsletter : rebonds, désinscriptions et plaintes pour spam à chaque envoi. Pour Gmail, ajoutez [Google Postmaster Tools](https://support.google.com/mail/answer/14668346?hl=fr). C’est gratuit, vous prouvez que le domaine est à vous avec un enregistrement DNS, et l’outil affiche votre taux de spam ainsi qu’une page de conformité (Compliance status dans l’interface anglaise) qui passe en revue chaque exigence et la marque comme respectée, à corriger ou sans données. Les graphiques de réputation du domaine et de l’IP dont parlent les guides plus anciens appartiennent à l’ancienne interface : Google ne les a pas repris dans la nouvelle version et prévoit de retirer l’ancienne.

Le Sender Hub de Yahoo propose un tableau de bord et une boucle de retour des plaintes (Complaint Feedback Loop), qui exige DKIM ; les deux méritent un coup d’œil quand une bonne part de votre liste est chez Yahoo. SNDS (Smart Network Data Services), chez Microsoft, rend compte par adresse IP d’envoi : il ne sert que si votre outil vous attribue une IP dédiée. Sur les adresses partagées qu’utilisent la plupart des petites équipes, cette surveillance revient à l’outil.

## Délivrabilité de votre newsletter : la checklist, et quand déléguer

Avant votre prochain envoi, vérifiez ces huit points :

1. L’adresse d’expédition est sur votre domaine ou un sous-domaine, jamais en @gmail.com, et elle reçoit les réponses.
2. DKIM est configuré et vérifié pour ce domaine dans votre outil de newsletter.
3. Un enregistrement DMARC existe, en `p=none` ou plus strict, avec une adresse de rapports.
4. « Afficher l’original » sur un mail de test indique PASS pour SPF, DKIM et DMARC, avec votre domaine sur la ligne DKIM.
5. Les en-têtes List-Unsubscribe et List-Unsubscribe-Post sont présents, et le pied de message contient un lien de désinscription visible.
6. Chaque abonné a demandé à recevoir la newsletter, et les anciens fichiers ont été vérifiés avant import.
7. Postmaster Tools est en place, et votre taux de spam reste sous 0,1 %.
8. Le cold emailing tourne sur des domaines séparés et n’alimente jamais la liste de la newsletter.

Pour la plupart des petites équipes, c’est un après-midi avec l’aide en ligne de votre outil et votre zone DNS, et vous n’avez besoin de personne. Cela se complique quand plusieurs outils envoient depuis le même domaine, quand les rapports DMARC révèlent des services que personne ne se souvient d’avoir ajoutés, ou quand un envoi se met à rebondir avec `550 5.7.515`. La configuration des emails fait partie des prestations à prix fixe que je réalise.
