---
title: "Adresse mail professionnelle : la créer sur votre nom de domaine, et à quel prix"
seo_title: "Créer une adresse mail professionnelle : options et prix"
description: "Créer une adresse mail professionnelle sur votre nom de domaine : Spacemail, Google Workspace, Microsoft 365 ou kSuite, les prix en 2026 et les étapes."
slug: "adresse-mail-professionnelle"
translationKey: "professional-email-address"
date: 2026-10-17T08:55:00+02:00
lastmod: 2026-10-17T08:55:00+02:00
category: "domains"
article_type: "guide"
keywords: ["adresse mail professionnelle", "créer une adresse mail professionnelle", "adresse mail professionnelle gratuite", "messagerie professionnelle", "adresse mail avec nom de domaine", "prix adresse mail professionnelle"]
summary: "Une adresse mail professionnelle se termine par votre nom de domaine (contact@votre-entreprise.fr) au lieu de @gmail.com ou @orange.fr. Il faut un domaine et une boîte mail, reliés par les enregistrements MX, plus SPF, DKIM et DMARC pour que vos emails inspirent confiance. En octobre 2026, comptez moins de 1 € par mois et par boîte avec Spacemail, l’option que je recommande aux indépendants, contre 6,80 € HT par utilisateur et par mois chez Google Workspace."
cover: "professional-email-address"
cover_alt: "Boîte de réception avec une adresse contact@ sur le nom de domaine de l’entreprise"
related: ["spacemail-setup", "domain-hosting-email-guide", "spf-dkim-dmarc-setup", "infomaniak-review", "best-email-provider-cold-email"]
services: ["websites"]
faq:
  - q: "Peut-on avoir une adresse mail professionnelle gratuite ?"
    a: "Rarement sur votre propre domaine. Les offres gratuites comme my kSuite d’Infomaniak vous donnent une adresse sur le domaine du fournisseur (@ik.me, par exemple), pas sur le vôtre, et une redirection gratuite ne fait que recevoir. Le domaine, lui, coûte peu : un .fr se renouvelle à 7 € HT par an chez Infomaniak au moment où j’écris (octobre 2026)."
  - q: "Faut-il un site internet pour avoir une adresse mail professionnelle ?"
    a: "Non. Il faut un nom de domaine, pas un site : la messagerie passe par les enregistrements MX du domaine, qu’un site existe ou non. Vous pourrez ajouter un site sur le même domaine plus tard sans toucher à vos emails, tant que les MX restent en place."
  - q: "Peut-on lire ses emails professionnels dans Gmail ?"
    a: "Oui, par une redirection, ou en ajoutant la boîte en IMAP dans l’application Gmail de votre téléphone. Depuis janvier 2026, Google supprime progressivement la récupération des emails d’autres comptes dans Gmail sur ordinateur : ne bâtissez rien dessus. Avec Google Workspace, la boîte mail est Gmail."
  - q: "Peut-on changer de fournisseur sans changer d’adresse ?"
    a: "Oui. L’adresse appartient à votre domaine, pas au fournisseur : créez les boîtes chez le nouveau, copiez vos anciens messages, puis faites pointer les MX vers lui. Vos contacts ne voient aucune différence."
  - q: "Combien de temps faut-il pour qu’une nouvelle adresse mail fonctionne ?"
    a: "Les modifications DNS prennent en général effet en quelques heures, et jusqu’à 48 heures si vous changez aussi les serveurs de noms du domaine, selon l’aide de Spaceship. Envoyez un email de test et répondez-y avant de faire imprimer la nouvelle adresse sur vos cartes de visite."
---

Une adresse mail professionnelle est une adresse qui se termine par votre propre nom de domaine, comme contact@votre-entreprise.fr, plutôt que par @gmail.com, @orange.fr ou @hotmail.fr. Pour en créer une, il faut deux achats, un nom de domaine et une boîte mail, et quelques enregistrements DNS qui les relient. Ce guide compare les options, donne leur prix au moment où j’écris (octobre 2026) et détaille les étapes dans le bon ordre.

Je configure des messageries professionnelles au forfait, et j’ai relié des domaines chez Namecheap, Spaceship, Infomaniak, Hostinger, OVH et l’ancien Google Domains. Mon histoire tient en deux phrases : j’utilisais Microsoft pour mes emails, et c’était pénible. Avec Namecheap et Spaceship, rien de tel.

Si la différence entre un nom de domaine, un hébergeur et une messagerie reste floue, mon article sur le {{< a key="domain-hosting-email-guide" >}}nom de domaine et l’hébergement{{< /a >}} explique le rôle de chacun.

## Pourquoi passer à une adresse mail professionnelle

Je veux que les prospects de mes clients les prennent au sérieux dès le premier contact. Cela réduit aussi la négociation : si quelqu’un doute de votre sérieux, il ne paiera pas votre prix. Un beau site suivi d’un devis envoyé depuis une adresse @orange.fr défait une partie de ce travail, alors que l’adresse peut coûter moins cher qu’un café par mois.

L’impression n’est qu’un début :

- L’adresse reste à vous. Elle dépend de votre domaine, pas du fournisseur : si celui-ci vous déçoit, vous déplacez la boîte et gardez l’adresse.
- Les adresses génériques survivent aux départs. contact@ ou compta@ passent d’une personne à l’autre, alors qu’un Gmail personnel part avec son titulaire.
- Vos emails peuvent prouver leur origine. Sur votre domaine, vous publiez les enregistrements SPF, DKIM et DMARC qui disent à Gmail et à Outlook que vos emails sont authentiques. Impossible de les ajouter à gmail.com.
- Vie pro et vie perso restent séparées. Quand je construis une automatisation pour un client, j’ai besoin d’accéder à la boîte mail : simple pour une boîte d’entreprise, beaucoup moins pour un Gmail personnel qui reçoit aussi vos alertes bancaires.

## Comment ça marche : un domaine, une boîte mail et un enregistrement MX

Trois éléments, qui peuvent se trouver chez trois entreprises différentes :

1. Le nom de domaine, loué année après année chez un registrar comme Spaceship, Namecheap ou OVHcloud. Il doit être enregistré au nom de votre entreprise, dans un compte auquel vous avez accès. Si un ancien prestataire le détient, {{< a key="recover-domain-name" >}}récupérez votre nom de domaine{{< /a >}} avant de construire quoi que ce soit dessus.
2. La boîte mail, chez un fournisseur de messagerie. Ce n’est pas forcément votre registrar : un domaine enregistré chez Namecheap peut avoir ses emails chez Google ou chez Microsoft.
3. Les enregistrements MX, dans la zone DNS du domaine. **Un enregistrement MX est la ligne qui indique aux autres serveurs de messagerie où livrer les emails envoyés à votre domaine.**

Chaque fournisseur donne ses propres valeurs. Deux exemples, tirés de l’aide de Spaceship et de celle de Google :

```
Fournisseur       Type  Hôte  Valeur             Priorité
Spacemail         MX    @     mx1.spacemail.com  0
                  MX    @     mx2.spacemail.com  0
Google Workspace  MX    @     smtp.google.com    1
```

Les enregistrements vont là où pointent les serveurs de noms du domaine, ce qui n’est pas toujours le registrar : si votre DNS est géré chez Cloudflare ou chez un hébergeur, c’est là qu’il faut les ajouter. Mon guide des {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} explique simplement MX, TXT et les autres types, y compris le point final, le seul vrai piège que j’ai rencontré en reliant des domaines.

## Les offres de messagerie professionnelle et leurs prix en octobre 2026

Voici les solutions, avec le prix d’entrée de chacune au moment où j’écris. Quand un fournisseur facture en dollars, les montants en euros sont mes conversions approximatives.

| Option | Pour qui | Prix d’entrée, octobre 2026 |
|---|---|---|
| Spacemail (Spaceship) | Indépendants et petites équipes qui ont besoin d’emails, pas d’une suite bureautique | 18,88 $ (environ 17 €) pour deux ans et une boîte, soit environ 0,70 € par mois |
| Private Email (Namecheap) | Le même profil, avec un domaine chez Namecheap | Petit prix, 30 jours d’essai gratuit ; vérifiez le tarif du jour |
| Google Workspace Business Starter | Équipes qui travaillent dans Gmail, Docs et Drive | 6,80 € HT par utilisateur et par mois avec engagement annuel |
| Microsoft 365 Business Basic | Équipes qui travaillent dans Outlook et les fichiers Office | 7 $ par utilisateur et par mois aux États-Unis ; vérifiez le prix en euros |
| kSuite Standard (Infomaniak) | Équipes qui veulent une suite européenne, avec des données en Suisse | 1,76 CHF HT (environ 1,90 €) par utilisateur et par mois |
| Emails inclus dans l’hébergement web | Sites déjà chez un hébergeur dont l’offre comprend des boîtes mail | Compris dans le prix de l’hébergement |
| Redirection gratuite | Solution d’attente : elle reçoit mais n’envoie pas | Gratuite chez certains registrars et hébergeurs DNS |

### Messagerie du registrar : Spacemail et Private Email de Namecheap

Spacemail est la messagerie de Spaceship, le registrar lancé par Namecheap en 2023. D’après [la page Spacemail de Spaceship](https://www.spaceship.com/business-email/) (en anglais), l’offre Pro donne une boîte de 5 Go et jusqu’à 10 alias pour 18,88 $ (environ 17 €) les deux ans, au même prix au renouvellement. Business (trois boîtes de 10 Go) et Advanced (cinq boîtes de 15 Go) coûtent plus cher et augmentent au renouvellement. Chaque offre commence par 30 jours d’essai gratuit, avec un webmail doté d’un agenda et des applications pour iOS et Android.

Namecheap vend sa propre messagerie, Private Email, sur le même modèle, avec 30 jours d’essai gratuit sur chaque offre. Les prix que j’ai trouvés ne concordent pas entre eux, donc je n’en cite aucun : vérifiez sur la page de Namecheap le jour de la commande.

### Google Workspace

Google Workspace, c’est Gmail sur votre propre domaine, avec Agenda, Drive, Docs et Meet. Business Starter coûte 6,80 € HT par utilisateur et par mois avec engagement annuel, et 8,10 € HT avec l’offre flexible, selon [la comparaison des formules de paiement de Google](https://knowledge.workspace.google.com/admin/billing/compare-flexible-and-annual-fixed-term-payment-plans?hl=fr) au moment où j’écris, avec 30 Go de stockage par utilisateur.

Chaque personne qui a sa propre boîte compte comme un utilisateur : une équipe de trois paie trois fois. Si vous n’avez besoin que d’une boîte mail, vous payez beaucoup de choses que vous n’ouvrirez jamais.

### Microsoft 365

Microsoft 365 Business Basic vous donne la messagerie Outlook et les versions web et mobiles de Word, Excel et PowerPoint ; les logiciels à installer sur ordinateur commencent avec Business Standard. Microsoft a relevé le prix de Business Basic de 6 $ à 7 $ par utilisateur et par mois aux États-Unis le 1er juillet 2026. Les prix en euros que j’ai trouvés ne concordent pas, alors vérifiez-les sur [la page de comparaison des offres de Microsoft](https://www.microsoft.com/fr-fr/microsoft-365/business/compare-all-microsoft-365-business-products). Pour la messagerie seule, la page américaine de Microsoft affiche Exchange Online Plan 1 à 4 $ par utilisateur et par mois, facturé à l’année.

L’offre convient aux entreprises dont les clients envoient des fichiers Word et Excel toute la journée, avec quelqu’un d’à l’aise dans le centre d’administration de Microsoft. Pour mes propres emails, c’était pénible, mais c’est une expérience, pas un banc d’essai.

### La kSuite d’Infomaniak

La kSuite est la suite d’Infomaniak, une entreprise genevoise qui exploite ses propres centres de données en Suisse : messagerie, agenda, kDrive pour les fichiers, messagerie d’équipe et visioconférence. L’offre Standard coûte 1,76 CHF HT (environ 1,90 €) par utilisateur et par mois, avec deux adresses email par utilisateur, un stockage mail illimité et 50 Go sur kDrive, selon [la page kSuite d’Infomaniak](https://www.infomaniak.com/fr/ksuite). Si vous ne voulez que des emails, Infomaniak vend aussi sa messagerie seule, sous le nom de Service Mail.

J’ai découvert Infomaniak par des clients dont les domaines s’y trouvaient déjà, et je le recommande vivement. Mon {{< a key="infomaniak-review" >}}avis sur Infomaniak{{< /a >}} passe les offres en revue.

### Les emails inclus dans votre hébergement web

Beaucoup d’offres d’hébergement mutualisé comprennent des boîtes mail sur votre domaine, souvent gérées depuis cPanel. Rien à payer en plus, c’est tout l’intérêt. Le revers : vos emails dépendent alors de votre hébergement. Changez d’hébergeur et il faut déplacer les emails aussi ; un problème sur le compte d’hébergement, comme un renouvellement oublié, emporte la messagerie avec le site.

Si vos emails fonctionnent déjà chez votre hébergeur sans souci, rien ne presse pour les déplacer. J’ai dû travailler avec OVH et Hostinger parce que mes clients y étaient déjà, et je ne recommande ni l’un ni l’autre : pour le dirigeant d’une petite entreprise, les deux sont un peu compliqués à prendre en main. o2switch, découvert de la même façon, je le recommande : ses formules incluent des adresses email illimitées sur votre domaine, et mon {{< a key="o2switch-review" >}}avis sur o2switch{{< /a >}} détaille l’offre.

### La redirection gratuite : une solution d’attente

Certains registrars et hébergeurs DNS redirigent gratuitement les emails envoyés à votre domaine vers une boîte que vous avez déjà : contact@votre-entreprise.fr arrive dans votre Gmail. La redirection reçoit mais n’envoie pas : vos réponses partent toujours de l’adresse Gmail, sauf si vous configurez un autre serveur d’envoi, ce qui devient vite compliqué. Bien pour une semaine, le temps de choisir, pas pour une entreprise qui envoie des devis.

## L’option que je recommande quand on travaille à son compte

Pour une personne, ou une équipe de deux ou trois qui a surtout besoin d’emails, je recommande la messagerie du registrar, et Spacemail en particulier. J’ai mes habitudes chez Spaceship, autant le dire tout de suite. Mes raisons sont concrètes : la configuration est simple, les prix sont justes et ne triplent pas la deuxième année comme chez certains, et le support répond jour et nuit. Chaque problème que je leur ai soumis a été résolu. La messagerie de Namecheap a été tout aussi simple pour moi.

Les suites valent leur prix dans d’autres cas : Google Workspace ou Microsoft 365 quand une équipe travaille dans leurs documents toute la journée, la kSuite quand vous voulez emails, fichiers et visioconférence chez un seul fournisseur européen. Quand il existe un essai gratuit, comme chez Spacemail et Namecheap, envoyez de vrais emails pendant une semaine avant de payer un an ou deux.

Vous n’avez pas besoin de moi pour une ou deux boîtes chez un registrar. Le guide du fournisseur suffit, et mon tutoriel pour {{< a key="spacemail-setup" >}}configurer Spacemail{{< /a >}} vous accompagne écran par écran, de la commande à la boîte mail sur votre téléphone.

## Créer une adresse mail professionnelle, étape par étape

L’ordre compte plus que le fournisseur. Quel que soit votre choix :

1. Connectez-vous chez votre registrar et vérifiez que le domaine est enregistré au nom de votre entreprise et en renouvellement automatique.
2. Choisissez les adresses. Donnez une boîte à chaque personne et utilisez des alias pour les fonctions : un alias est une deuxième adresse livrée dans une boîte existante, comme contact@ qui arrive dans votre propre boîte, et il ne coûte en général rien de plus.
3. Souscrivez l’offre et créez les boîtes avant de toucher aux enregistrements MX. Si le fournisseur vous demande de prouver que le domaine vous appartient, comme Google Workspace et comme Spacemail pour un domaine enregistré ailleurs, ajoutez d’abord son enregistrement TXT de vérification.
4. Faites pointer les enregistrements MX vers le nouveau fournisseur, chez l’hébergeur DNS désigné par vos serveurs de noms, et supprimez les MX de l’ancien fournisseur.
5. Ajoutez SPF, DKIM et DMARC, comme expliqué dans la section suivante.
6. Testez. Envoyez un email vers une adresse Gmail, ouvrez-le, cliquez sur les trois points et choisissez **Afficher l’original** : SPF, DKIM et DMARC doivent chacun indiquer PASS. Répondez-y aussi, pour vérifier que les emails arrivent.
7. Reliez votre téléphone et votre ordinateur, avec l’application du fournisseur ou en IMAP et SMTP dans Outlook ou Apple Mail. Choisissez IMAP plutôt que POP3, pour que chaque appareil affiche la même boîte.
8. Transférez vos anciens emails et prévenez vos contacts. Utilisez l’outil de migration du fournisseur s’il en a un, mettez à jour votre site, votre signature et vos factures, et laissez une réponse automatique sur l’ancienne adresse pendant quelques mois.

{{< callout type="warning" >}}**Créez les boîtes avant de modifier les enregistrements MX.** Dès que les MX pointent vers le nouveau fournisseur, le courrier entrant y arrive. Si les boîtes n’existent pas encore, les messages repartent vers leurs expéditeurs, et certains seront des clients.{{< /callout >}}

## SPF, DKIM et DMARC : pourquoi votre nouvelle adresse en a besoin

Une adresse sur votre domaine n’inspire confiance que si le domaine peut prouver qu’il a bien envoyé l’email. Trois enregistrements DNS, en général de type TXT, s’en chargent :

- SPF liste les serveurs autorisés à envoyer des emails pour votre domaine.
- DKIM ajoute une signature à chaque email, vérifiée grâce à une clé publiée dans votre DNS.
- DMARC indique aux serveurs destinataires quoi faire d’un email qui échoue à ces contrôles, et où envoyer des rapports.

Selon les [consignes de Google pour les expéditeurs](https://support.google.com/a/answer/81126?hl=fr), tout expéditeur vers Gmail doit utiliser SPF ou DKIM depuis février 2024, et ceux qui envoient 5 000 emails par jour ou plus doivent avoir les trois. Google a durci l’application de ces règles en novembre 2025, avec des rejets temporaires et définitifs pour les emails non conformes. Microsoft applique des règles comparables aux gros expéditeurs vers Outlook.com et Hotmail depuis le 5 mai 2025. Une petite entreprise envoie bien moins, mais un enregistrement DMARC ne coûte rien, et les messageries d’entreprise ont leurs propres filtres.

Un jeu typique pour une boîte Spacemail ressemble à ceci :

```
Type  Hôte                  Valeur
TXT   @                     v=spf1 include:spf.spacemail.com ~all
TXT   spacemail._domainkey  v=DKIM1; k=rsa; p=... (votre propre clé, fournie par la messagerie)
TXT   _dmarc                v=DMARC1; p=none; rua=mailto:dmarc@votre-entreprise.fr
```

Un domaine ne peut avoir qu’un seul enregistrement SPF : s’il en existe déjà un pour un outil de newsletter, ajoutez-y le nouvel include plutôt que d’en créer un second. Mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} montre chaque enregistrement chez Spaceship, Namecheap et OVH, et MLK Leadhunters a publié [SPF, DKIM et DMARC expliqués simplement](https://mlkleadhunters.com/fr/blog/spf-dkim-dmarc-explained/) si vous voulez d’abord la théorie.

## Cold emailing : gardez-le loin de cette adresse

Votre adresse professionnelle est celle à laquelle vos clients écrivent : protégez-la. Le cold emailing comporte toujours un risque de délivrabilité, et la bonne pratique consiste à envoyer vos cold emails depuis des domaines séparés, proches de votre marque : MLK Leadhunters explique pourquoi il ne faut [jamais envoyer de cold emails depuis votre domaine principal](https://mlkleadhunters.com/fr/blog/never-send-from-your-main-domain/).

Lisez aussi les règles du fournisseur. Celles de Spaceship interdisent les envois en masse non sollicités : obtenez son accord écrit avant de relier une boîte Spacemail à un outil d’envoi. Mon comparatif pour choisir une {{< a key="best-email-provider-cold-email" >}}boîte mail pour le cold emailing{{< /a >}} met Google, Microsoft et Spacemail côte à côte pour cet usage.

## Votre liste de contrôle, et quand déléguer

Avant de considérer le travail comme terminé, vérifiez cinq points :

- Le domaine est au nom de votre entreprise et se renouvelle automatiquement.
- Les enregistrements MX pointent uniquement vers le nouveau fournisseur.
- Un seul enregistrement SPF, DKIM activé, DMARC en `p=none`.
- Un email de test vers Gmail affiche trois PASS, et votre réponse est bien arrivée.
- La nouvelle adresse figure sur votre site, votre signature et vos factures.

Déléguez quand plusieurs personnes ont des années d’emails à déplacer, quand le site et la messagerie sont chez des fournisseurs différents et que personne ne sait quels enregistrements servent, ou quand un ancien prestataire contrôle encore le domaine. Je m’occupe de la mise en place des emails au forfait, à part ou dans le cadre d’un {{< a page="/services/websites" >}}nouveau site internet{{< /a >}}.
