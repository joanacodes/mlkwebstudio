---
title: "Configurer Spacemail : boîte mail, DNS et réglages IMAP, pas à pas"
seo_title: "Configurer Spacemail : boîte mail, DNS et IMAP pas à pas"
description: "Configurer Spacemail pas à pas : choisir l’offre, créer la boîte mail, ajouter MX, SPF, DKIM et DMARC, puis la relier à votre téléphone ou à Outlook."
slug: "configurer-spacemail-boite-mail"
translationKey: "spacemail-setup"
date: 2026-10-17T08:48:00+02:00
lastmod: 2026-10-17T08:48:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["configurer Spacemail", "Spacemail Spaceship", "enregistrements DNS Spacemail", "paramètres IMAP Spacemail", "serveur SMTP Spacemail", "prix Spacemail"]
summary: "Pour configurer Spacemail, choisissez une offre (Pro, Business ou Advanced, 30 jours d’essai gratuit), reliez-la à votre domaine avec Unbox dans Spacemail Manager et créez la boîte mail. Avec les serveurs de noms de Spaceship, MX, SPF et DKIM sont ajoutés pour vous ; sinon, ajoutez deux MX (mx1 et mx2.spacemail.com), le SPF et la clé DKIM. Ajoutez ensuite un DMARC s’il n’y en a pas, puis reliez vos applications en IMAP (mail.spacemail.com, port 993) et SMTP (port 465)."
cover: "spacemail-setup"
cover_alt: "Boîte mail Spacemail reliée à un domaine par ses enregistrements MX, SPF et DKIM"
related: ["spaceship-domain-dns-tutorial", "professional-email-address", "spf-dkim-dmarc-setup", "best-email-provider-cold-email", "spaceship-vs-namecheap"]
services: ["websites"]
faq:
  - q: "Spacemail est-il inclus avec un nom de domaine Spaceship ?"
    a: "Non. Le domaine et la messagerie sont deux abonnements distincts, et l’un s’achète sans l’autre. Les offres Web Hosting et EasyWP de Spaceship incluent des formules Spacemail spéciales : vérifiez ce que votre hébergement comprend déjà avant de commander."
  - q: "Peut-on transférer ses anciens emails vers Spacemail ?"
    a: "Oui. Spaceship propose un outil de migration qui copie les messages depuis votre fournisseur actuel. Créez les boîtes Spacemail avant de modifier les enregistrements MX, pour que le courrier entrant ait toujours une adresse où arriver."
  - q: "Combien d’emails une boîte Spacemail peut-elle envoyer ?"
    a: "D’après l’aide de Spaceship, 500 emails par heure et par boîte sur les offres payantes et 20 par heure pendant l’essai, avec 50 destinataires au plus par email (À, Cc et Cci compris) et 50 Mo par message. Les alias comptent dans la limite de leur boîte."
  - q: "Spacemail fonctionne-t-il en POP3 ?"
    a: "Oui : serveur mail.spacemail.com, port 995, avec SSL. Préférez l’IMAP si vous lisez vos emails sur plusieurs appareils : le POP3 est conçu pour télécharger les messages sur un seul appareil, alors que l’IMAP garde la même boîte synchronisée partout."
  - q: "Peut-on recevoir les emails envoyés à n’importe quelle adresse du domaine ?"
    a: "Oui, avec une boîte « catch-all », dont l’aide de Spaceship explique la configuration. Elle reçoit le courrier adressé à des adresses qui n’existent pas sur votre domaine, y compris le spam envoyé à des adresses inventées."
---

Spacemail est la messagerie professionnelle de Spaceship, le registrar créé par Namecheap. Configurer Spacemail revient à trois tâches : créer la boîte mail, publier les enregistrements DNS qui y acheminent le courrier, puis relier les applications où vous le lisez. Ce tutoriel couvre les trois, avec les valeurs de l’aide de Spaceship à la date de rédaction (octobre 2026).

J’ai mes habitudes chez Spaceship. J’utilisais Microsoft pour mes emails, et c’était pénible ; avec Namecheap et Spaceship, rien de tel : la configuration est simple, ou du moins j’y ai mes repères.

Les libellés cités sont ceux de l’interface en anglais. Si vous hésitez encore entre plusieurs fournisseurs, mon guide sur l’{{< a key="professional-email-address" >}}adresse mail professionnelle{{< /a >}} compare les options et leurs prix, et {{< a key="domain-hosting-email-guide" >}}mon article sur le nom de domaine et l’hébergement{{< /a >}} explique comment domaine, site et messagerie s’articulent.

## Offres et prix de Spacemail en octobre 2026

Spacemail est un abonnement à part, distinct du nom de domaine. À la date de rédaction (octobre 2026), [la page Spacemail de Spaceship](https://www.spaceship.com/business-email/) (en anglais) présente trois offres, avec des prix pour deux ans :

| Offre | Boîtes incluses | Stockage par boîte | Alias par boîte | Prix pour deux ans, puis renouvellement |
|---|---|---|---|---|
| Pro | 1 | 5 Go | 10 | 18,88 $ (environ 16 €), identique au renouvellement |
| Business | 3 | 10 Go | 50 | 28,68 $ (environ 25 €), puis 39,84 $ (environ 34 €) |
| Advanced | 5 | 15 Go | Illimités | 44,69 $ (environ 38 €), puis 63,84 $ (environ 55 €) |

L’offre Pro revient à environ 0,79 $ (environ 0,70 €) par mois. Les prix sont en dollars américains, et les montants en euros sont mes conversions approximatives. Spaceship fait des promotions et d’autres pages de son site annoncent des prix de départ différents : la page de commande fait foi.

Chaque offre commence par un **essai gratuit de 30 jours**. Deux limites s’appliquent pendant ce mois : impossible d’ajouter des boîtes supplémentaires, et chaque boîte envoie beaucoup moins d’emails par heure que sur une offre payante (la FAQ plus bas donne les chiffres). Parfait pour tester, pas pour une semaine de lancement.

Pour choisir, comptez les personnes qui ont besoin de leur propre boîte, pas les adresses : un alias comme factures@ arrive dans une boîte existante, sans surcoût. Une personne seule : Pro. Pour deux ou trois personnes, Business coûte moins cher que Pro avec des boîtes supplémentaires (21,12 $, environ 18 €, chacune pour deux ans), et ses 10 Go servent si vous gardez des années de pièces jointes. Advanced convient à une équipe de cinq. Chaque offre accepte du stockage en plus, à 20 $ (environ 17 €) les 10 Go.

## Avant de configurer Spacemail : où sont gérés les DNS de votre domaine ?

Le courrier n’arrive dans Spacemail qu’une fois que les enregistrements MX de votre domaine, les lignes DNS qui indiquent aux autres serveurs où livrer vos emails, pointent vers lui. Qui écrit ces enregistrements dépend d’un seul réglage : les **serveurs de noms** du domaine, qui désignent l’entreprise qui héberge ses DNS.

| DNS de votre domaine | Ce que fait Spaceship | Votre part |
|---|---|---|
| Sur les serveurs de noms de Spaceship | Ajoute les enregistrements de messagerie quand vous reliez Spacemail | Les vérifier (étape 3), puis le DMARC (étape 4) |
| Ailleurs : un autre registrar comme OVHcloud, Cloudflare, un hébergeur | Affiche les enregistrements à recopier | Les ajouter chez cet hébergeur DNS (étape 3), puis le DMARC (étape 4) |

Un domaine enregistré chez Spaceship utilise normalement ses serveurs de noms, affichés sur la page **Advanced DNS**, comme le montre mon tutoriel pour {{< a key="spaceship-domain-dns-tutorial" >}}acheter un nom de domaine sur Spaceship{{< /a >}}. Pour un domaine enregistré ailleurs, regardez ses réglages chez ce registrar : les enregistrements vont là où pointent les serveurs de noms, qui n’appartiennent pas toujours au registrar. Si les MX et les TXT sont nouveaux pour vous, mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} explique chaque type simplement.

## Étape 1 : commander Spacemail et le relier à votre domaine

1. Sur spaceship.com, ouvrez la page Spacemail, choisissez une offre et lancez l’essai, ou payez.
2. Dans votre compte Spaceship, ouvrez **Spacemail Manager**.
3. Cliquez sur **Unbox** sur le nouvel abonnement pour le relier à un domaine, choisissez le domaine, puis cliquez sur **Start**.

Unbox est le terme de Spaceship pour rattacher un produit à un domaine. Le domaine n’a pas besoin d’être enregistré chez Spaceship : un .fr chez OVHcloud, par exemple, reste où il est, et vous prouvez qu’il vous appartient avec un enregistrement TXT (étape 3).

{{< screenshot id="spacemail-setup-01" alt="Spacemail Manager avec un nouvel abonnement, le bouton Unbox et le domaine choisi avant de cliquer sur Start" >}}

## Étape 2 : créer la boîte mail et son mot de passe

1. Une fois l’abonnement relié, cliquez sur **Configure Products**, puis sur **Configure**.
2. Tapez le nom placé avant l’arobase : `contact` donne contact@votredomaine.fr.
3. Cliquez sur **Create mailboxes**. Spacemail génère un mot de passe : copiez-le, ou saisissez le vôtre à la place.
4. Cliquez sur **Finish**.

Choisissez des noms qui survivront aux changements d’équipe. Une adresse de fonction comme contact@ ou compta@ passe d’une personne à l’autre, alors que prenom@ part avec son titulaire. Rangez chaque mot de passe dans un gestionnaire de mots de passe dès maintenant : chaque téléphone, ordinateur et application que vous relierez vous le demandera, et ce n’est pas celui de votre compte Spaceship.

{{< screenshot id="spacemail-setup-02" alt="Formulaire de création de boîte Spacemail avec le nom contact saisi et le bouton Create mailboxes" >}}

## Étape 3 : ajouter les enregistrements DNS de Spacemail

### Sur les serveurs de noms de Spaceship : vérifier, sans rien saisir

Spaceship ajoute les enregistrements de messagerie quand vous reliez Spacemail, et la boîte fonctionne tout de suite. Ouvrez tout de même **Advanced DNS** pour le domaine et vérifiez la présence de deux MX, d’un TXT qui commence par `v=spf1` et d’un DKIM sur `spacemail._domainkey`. Faites une capture d’écran de la liste : si des emails se perdent un jour, vous saurez à quoi ressemblait la zone quand tout marchait.

### DNS ailleurs : recopier les enregistrements chez votre hébergeur DNS

Spaceship prépare quand même les valeurs exactes pour votre domaine. Dans **Advanced DNS**, elles se trouvent sous **Inactive records**, dans le groupe **Spacemail DNS records** : inactives, parce qu’Internet ne lit pas cette zone. À vous de les recopier chez l’entreprise qui héberge la zone lue par Internet, OVHcloud par exemple.

Si le domaine est enregistré chez un autre registrar, commencez par le **TXT de vérification** : d’après [l’aide de Spaceship sur les domaines tiers](https://www.spaceship.com/knowledgebase/spacemail-dns-records-third-party-domain/) (en anglais), il doit être en place avant l’activation de Spacemail, sinon l’abonnement ne se relie pas au domaine et la boîte ne peut ni se connecter ni envoyer. Sa valeur se trouve dans **Advanced DNS** : cliquez sur **Manage**, puis sur **View guides** dans la section **Configure your DNS settings for products to work correctly**, et ouvrez **Verifying domain ownership**.

Ajoutez ensuite les enregistrements de messagerie :

```
Type   Hôte                   Valeur                                  Priorité
MX     @                      mx1.spacemail.com                       0
MX     @                      mx2.spacemail.com                       0
TXT    @                      v=spf1 include:spf.spacemail.com ~all
TXT    spacemail._domainkey   v=DKIM1; k=rsa; p=... (votre clé, copiée depuis Spaceship)
SRV    _autodiscover._tcp     poids 0, port 443, autoconfig.spacemail.com    0
```

Ligne par ligne :

- **MX** : ajoutez les deux, avec la priorité 0. Certains hébergeurs imposent leurs propres valeurs (Wix met 10 et 20), ce qui ne pose pas de problème tant que les deux enregistrements existent. Supprimez les MX d’un ancien fournisseur, sinon une partie de votre courrier continuera d’y partir.
- **SPF** : un domaine ne peut avoir qu’un seul TXT commençant par `v=spf1`, et deux font échouer le SPF. S’il en existe déjà un, pour un outil d’emailing par exemple, ajoutez `include:spf.spacemail.com` à l’intérieur, avant le `~all` (ou `-all`) final.
- **DKIM** : copiez la valeur en entier. Elle est longue, et un seul caractère manquant casse la signature. Saisissez l’hôte sous la forme `spacemail._domainkey` seulement : la plupart des interfaces ajoutent votre domaine d’elles-mêmes.
- **SRV** : le courrier arrive sans lui, mais il aide certaines applications, Outlook en particulier, à trouver seules les réglages du serveur. Certaines interfaces découpent l’hôte en un service (`autodiscover`) et un protocole (`tcp`), comme Wix.

L’aide de Spaceship propose des guides pas à pas pour Namecheap, GoDaddy, Squarespace, Wix et Cloudflare ; chez OVHcloud, les mêmes valeurs s’ajoutent dans l’onglet **Zone DNS** du domaine, avec le bouton **Ajouter une entrée**. Les changements apparaissent en général en quelques heures, jusqu’à 48 heures si vous avez aussi changé de serveurs de noms.

{{< screenshot id="spacemail-setup-03" alt="Advanced DNS de Spaceship avec les enregistrements DNS de Spacemail : deux MX, le TXT du SPF et le DKIM sur spacemail._domainkey" >}}

{{< callout type="warning" >}}**Relisez chaque valeur une fois enregistrée.** Certaines interfaces DNS collent votre domaine à la fin d’une cible saisie sans point final : `mx1.spacemail.com` devient alors `mx1.spacemail.com.votredomaine.fr`. Si vous voyez cela, modifiez l’enregistrement et terminez la cible par un point : `mx1.spacemail.com.` C’est le seul vrai piège que j’ai rencontré en reliant des domaines, et mon tutoriel sur la {{< a key="ovh-dns-squarespace" >}}zone DNS OVH{{< /a >}} le montre en détail.{{< /callout >}}

## Étape 4 : ajouter un enregistrement DMARC

Le DMARC est un enregistrement TXT qui indique aux serveurs destinataires quoi faire des emails qui échouent au SPF et au DKIM, et où envoyer des rapports. D’après l’aide de Spaceship sur les domaines tiers, Spacemail ne le crée pas : vérifiez donc si votre domaine en a déjà un, en cherchant un TXT sur l’hôte `_dmarc`. Il en faut un, et un seul. S’il n’y en a pas, ajoutez :

```
Type   Hôte     Valeur
TXT    _dmarc   v=DMARC1; p=none; rua=mailto:dmarc@votredomaine.fr
```

`p=none` se contente d’observer : rien n’est bloqué pendant que les rapports confirment que vos vrais emails passent. Ensuite, passez à `p=quarantine`, puis à `p=reject`. L’adresse `rua` reçoit les rapports : faites-la pointer vers une boîte ou un alias que vous lisez vraiment. Mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} explique comment lire ces rapports et quand durcir la politique.

{{< screenshot id="spacemail-setup-04" alt="Formulaire DNS d’ajout d’un TXT sur l’hôte _dmarc avec la valeur v=DMARC1; p=none; rua=mailto:" >}}

## Étape 5 : vérifier les enregistrements et envoyer un test

Après quelques heures, vérifiez la zone depuis un terminal, ou avec l’outil gratuit Dig de la Google Admin Toolbox :

```
$ dig +short MX votredomaine.fr
0 mx1.spacemail.com.
0 mx2.spacemail.com.

$ dig +short TXT spacemail._domainkey.votredomaine.fr
"v=DKIM1; k=rsa; p=..."

$ dig +short TXT _dmarc.votredomaine.fr
"v=DMARC1; p=none; rua=mailto:dmarc@votredomaine.fr"
```

`dig +short TXT votredomaine.fr` affiche le SPF parmi les autres TXT du domaine.

Vient ensuite le vrai test : envoyez un email depuis la nouvelle boîte vers une adresse Gmail. Dans Gmail, ouvrez le message, cliquez sur les trois points et choisissez **Afficher l’original**. Le haut de la page indique SPF, DKIM et DMARC, chacun marqué PASS quand tout est en place ; un FAIL vous dit quel enregistrement revoir. Répondez aussi à cet email, pour vérifier que le courrier arrive autant qu’il part.

{{< screenshot id="spacemail-setup-05" alt="Page Afficher l’original de Gmail pour un email de test envoyé depuis Spacemail, avec SPF, DKIM et DMARC en PASS" >}}

## Étape 6 : se connecter au webmail Spacemail

Le webmail se trouve sur www.spacemail.com. Connectez-vous avec l’adresse email complète comme identifiant et le mot de passe de la boîte. Vous pouvez aussi l’ouvrir depuis **Spacemail Manager** : choisissez la boîte, puis cliquez sur **Login**.

Le webmail comprend un agenda, et ses réglages contiennent les interrupteurs d’accès IMAP, POP3 et SMTP. L’IMAP et le SMTP sont activés par défaut : laissez-les ainsi si vous voulez lire la boîte dans d’autres applications.

{{< screenshot id="spacemail-setup-06" alt="Boîte de réception du webmail Spacemail sur spacemail.com après la première connexion" >}}

## Étape 7 : ajouter Spacemail sur votre téléphone, dans Outlook ou Apple Mail

Sur un téléphone, le plus simple est l’application Spacemail pour iOS ou Android : connectez-vous avec l’adresse et le mot de passe de la boîte. Pour toute autre application, choisissez IMAP et saisissez les valeurs de [l’aide de Spaceship sur les clients de messagerie](https://www.spaceship.com/knowledgebase/connect-spacemail-to-email-client/) (en anglais) :

| Réglage | Courrier entrant (IMAP) | Courrier sortant (SMTP) |
|---|---|---|
| Serveur | `mail.spacemail.com` | `mail.spacemail.com` |
| Port | `993` | `465` |
| Chiffrement | SSL/TLS | SSL/TLS |
| Nom d’utilisateur | Votre adresse email complète | Votre adresse email complète |
| Mot de passe | Celui de la boîte | Celui de la boîte |

Où les saisir :

- **Outlook** : ajoutez un compte avec votre adresse, ouvrez les options avancées pour le configurer manuellement, puis choisissez IMAP.
- **Apple Mail sur Mac** : **Mail** > **Ajouter un compte** > **Autre compte Mail**. Si Mail ne trouve pas les serveurs seul, il vous demande les valeurs ci-dessus.
- **iPhone** : dans les réglages de Mail, ajoutez un compte, choisissez **Autre**, puis **Ajouter un compte Mail**, et prenez IMAP quand la question se pose.
- **Android** : dans l’application Gmail, choisissez **Ajouter un autre compte**, puis **Autre**.

L’aide de Spaceship propose des guides distincts pour Outlook, Outlook pour iOS, Mail sur macOS, Apple Mail sur iPhone et l’application Spark, si un écran ne correspond pas à ces étapes.

{{< screenshot id="spacemail-setup-07" alt="Formulaire de compte IMAP manuel d’Outlook rempli avec mail.spacemail.com, port 993 en entrée et 465 en sortie, SSL/TLS" >}}

## Peut-on utiliser Spacemail pour le cold emailing ?

Pas sans l’accord écrit de Spaceship : ses règles publiées interdisent les envois en masse non sollicités.

Ma préférence, elle, est claire : Microsoft fonctionne très bien pour le cold emailing mais il est délicat à configurer, Google fait moins bien, et Spacemail est celui que je recommande, parce que sa configuration est simple. Les règles de Spaceship sont tout aussi claires, et elles passent en premier.

{{< callout type="warning" >}}**Spaceship interdit les envois en masse non sollicités.** Ses pages d’aide proscrivent les emails commerciaux non sollicités, en masse ou automatisés, avec une tolérance zéro, et précisent que le service n’est pas conçu pour les envois massifs ; sa politique d’utilisation acceptable de l’hébergement considère comme non sollicité tout email envoyé à des personnes qui n’ont pas donné leur accord. Son [guide de chauffe d’un domaine](https://www.spaceship.com/knowledgebase/warm-up-domain-email-deliverability/) (en anglais) n’autorise qu’une chauffe manuelle et progressive, avec de vrais destinataires consentants, et interdit la chauffe automatisée par des outils tiers : exactement ce que fait le warm-up d’une plateforme d’envoi. Ses conditions prévoient aussi, pour le spam, des dommages et intérêts forfaitaires de 500 $ (environ 430 €) ou de 1 $ par message, le montant le plus élevé étant retenu.{{< /callout >}}

Avant de relier la moindre boîte Spacemail à un outil d’envoi comme Instantly, demandez donc par écrit au support de Spaceship ce qu’il accepte, et gardez sa réponse. Les limites horaires de la FAQ ci-dessous sont des plafonds pour un usage courant, pas un volume de prospection. Quel que soit le fournisseur, envoyez depuis un domaine secondaire plutôt que depuis celui auquel vos clients écrivent : MLK Leadhunters explique pourquoi il ne faut [jamais envoyer de cold emails depuis votre domaine principal](https://mlkleadhunters.com/fr/blog/never-send-from-your-main-domain/). Mon comparatif sur la {{< a key="best-email-provider-cold-email" >}}boîte mail à choisir pour le cold emailing{{< /a >}} confronte Spacemail à Google Workspace et à Microsoft 365 sur les limites, la configuration et les conditions d’utilisation.

## Si le courrier n’arrive pas ou ne part pas

| Ce que vous constatez | Cause probable | Solution |
|---|---|---|
| Rien n’arrive dans la nouvelle boîte | Les MX ont été ajoutés chez une entreprise vers laquelle les serveurs de noms ne pointent pas | Ajoutez-les chez l’hébergeur DNS que désignent les serveurs de noms |
| Certains messages arrivent, d’autres partent vers l’ancienne boîte | Les MX d’un ancien fournisseur sont toujours là | Supprimez-les ; ne gardez que mx1 et mx2.spacemail.com |
| Vos emails arrivent en spam | SPF ou DKIM absent, ou deux SPF | Un seul SPF avec l’include de Spacemail, et la valeur DKIM complète |
| Le DKIM est en FAIL dans « Afficher l’original » | Une valeur tronquée, ou un hôte qui répète le domaine | Recollez la valeur ; saisissez l’hôte `spacemail._domainkey` seul |
| Une application reçoit mais n’envoie pas | Mauvais port SMTP ou chiffrement, ou accès SMTP désactivé | Port 465 en SSL/TLS ; dans **Spacemail Manager**, vérifiez **IMAP/POP3/SMTP** dans le menu de la boîte |
| L’application ou le webmail refuse le mot de passe | Un identifiant sans le domaine, ou le mot de passe du compte Spaceship | L’adresse complète, et le mot de passe de la boîte |
| L’envoi est refusé après une rafale d’emails pendant l’essai | La limite horaire de l’essai | Attendez une heure ; les offres payantes autorisent bien plus |

Si rien de tout cela ne correspond, le support de Spaceship répond 24 h/24 et 7 j/7, et d’expérience, chaque problème que je lui ai soumis a été réglé.

## Votre liste de contrôle Spacemail

1. Une offre choisie et reliée au bon domaine avec **Unbox**.
2. Les boîtes créées, chaque mot de passe rangé dans un gestionnaire.
3. MX, SPF et DKIM en place là où pointent les serveurs de noms (plus le TXT de vérification pour un domaine enregistré ailleurs), sans ancien MX oublié.
4. Un seul DMARC sur `_dmarc`, en commençant par `p=none`.
5. Un email de test vers Gmail avec SPF, DKIM et DMARC en PASS, et une réponse bien reçue.
6. La boîte sur votre téléphone et votre ordinateur, en IMAP et SMTP.
7. Un rappel dans votre agenda quelques jours avant la fin de l’essai, pour choisir l’offre payante à temps.

Et si vous préférez tout confier, je mets en place la messagerie au forfait, comme prestation à part entière ou avec un {{< a page="/services/websites" >}}nouveau site web{{< /a >}}.
