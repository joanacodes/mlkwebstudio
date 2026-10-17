---
title: "Tuto Instantly : créer son compte et connecter ses boîtes mail"
seo_title: "Tuto Instantly : compte, boîtes mail et warm-up pas à pas"
description: "Tuto Instantly pas à pas : créer le compte, choisir l’offre, connecter des boîtes Google, Microsoft ou Spacemail, lancer le warm-up et vérifier l’Unibox."
slug: "tuto-instantly-ai"
translationKey: "instantly-ai-tutorial"
date: 2026-10-17T08:36:00+02:00
lastmod: 2026-10-17T08:36:00+02:00
category: "cold-emailing"
article_type: "tutorial"
keywords: ["tuto Instantly", "tutoriel Instantly.ai", "connecter une boîte mail à Instantly", "warm-up Instantly", "prix Instantly", "Unibox Instantly"]
summary: "Pour configurer Instantly, créez un compte, choisissez une offre Outreach (Growth, Hypergrowth ou Light Speed, toutes avec boîtes mail et warm-up illimités) et connectez chaque boîte d’envoi dans Email Accounts : Google et Microsoft par connexion directe, Spacemail et les autres en IMAP et SMTP. Activez ensuite le warm-up si le fournisseur l’autorise, deux à trois semaines avant la première campagne ; le domaine de tracking ne sert que si vous suivez ouvertures et clics."
cover: "instantly-ai-tutorial"
cover_alt: "Enveloppes empilées avec une pastille de nouveau message à côté du nom Instantly.ai"
related: ["instantly-campaign-setup", "cold-email-infrastructure", "spf-dkim-dmarc-setup", "spacemail-setup", "instantly-vs-smartlead-vs-lemlist"]
services: ["cold-emailing"]
faq:
  - q: "Instantly vaut-il le coup pour une petite entreprise ?"
    a: "Si vous faites du cold emailing B2B depuis plusieurs boîtes, à mon avis oui : c’est l’outil avec lequel j’ai commencé et que j’utilise toujours, toutes les offres incluent boîtes mail et warm-up illimités, et il est simple une fois configuré. Si vous envoyez quelques emails par semaine à la main, vous n’avez pas encore besoin d’un outil d’envoi."
  - q: "Faut-il connecter sa boîte mail principale à Instantly ?"
    a: "Non. Le cold emailing comporte toujours un risque de délivrabilité : envoyez depuis des boîtes sur des domaines secondaires et gardez votre domaine principal pour vos échanges de tous les jours. MLK Leadhunters explique pourquoi dans [N’envoyez jamais de cold emails depuis votre domaine principal](https://mlkleadhunters.com/fr/blog/never-send-from-your-main-domain/)."
  - q: "Pourquoi Instantly exige-t-il l’IMAP en plus du SMTP ?"
    a: "Le SMTP ne sert qu’à envoyer. Instantly lit aussi chaque boîte en IMAP pour détecter les réponses et faire tourner le warm-up : il refuse donc une connexion en SMTP seul. Si la connexion échoue, vérifiez d’abord le serveur IMAP, le port et le mot de passe."
  - q: "Le registrar du domaine (OVH, Spaceship, Namecheap…) a-t-il une importance ?"
    a: "Non. Instantly connecte des boîtes mail, pas des registrars : un domaine chez OVH, Spaceship, Namecheap ou ailleurs convient. Ce qui compte, c’est que la zone DNS du domaine contienne les enregistrements SPF, DKIM et DMARC, plus le CNAME de tracking si vous l’utilisez."
  - q: "Le cold emailing avec Instantly est-il légal en France ?"
    a: "L’outil ne change pas les règles. En B2B, la CNIL admet la prospection par email sans consentement préalable si le message concerne l’activité professionnelle du destinataire et s’il a été informé de l’utilisation de son adresse, avec la possibilité de s’y opposer simplement et gratuitement ; chaque email doit indiquer l’expéditeur et offrir un moyen simple de refuser les envois suivants. Le détail est sur [la fiche de la CNIL](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique)."
---

Instantly (instantly.ai) est une plateforme de cold emailing : vous y connectez les boîtes mail qui enverront vos messages, elle les fait chauffer, envoie vos séquences depuis toutes ces boîtes et rassemble les réponses dans une seule boîte de réception. Ce tuto Instantly couvre la configuration, clic par clic : le compte, l’offre, les boîtes mail, le warm-up, le domaine de tracking facultatif et l’Unibox.

Instantly est le premier outil de cold emailing que j’ai utilisé, et je n’ai trouvé aucune raison d’en changer. Il est simple, et il a les réglages qui évitent à vos emails de finir en spam, une fois la bonne recette trouvée. L’essentiel de cette recette se joue avant le premier envoi, dans les étapes ci-dessous.

La rédaction et le lancement de la campagne font l’objet du tuto suivant, {{< a key="instantly-campaign-setup" >}}créer une campagne Instantly{{< /a >}}, et mon {{< a key="b2b-cold-emailing-guide" >}}guide du cold emailing B2B{{< /a >}} montre où ces deux étapes s’insèrent dans l’ensemble. Je garde les intitulés anglais de l’interface d’Instantly, tels qu’ils apparaissent à la date de rédaction (octobre 2026) ; si l’un d’eux a changé depuis, le centre d’aide d’Instantly (help.instantly.ai) donne le libellé actuel.

## Ce qu’il vous faut avant de commencer

Instantly envoie depuis les boîtes que vous lui connectez. Quelques éléments passent donc en premier :

- Des boîtes d’envoi sur des domaines secondaires, jamais sur le domaine de la vraie boîte mail de votre entreprise. Mon article sur {{< a key="cold-email-infrastructure" >}}l’infrastructure de cold emailing{{< /a >}} indique combien de domaines et de boîtes prévoir, et ce que chacune peut envoyer par jour.
- Les enregistrements SPF, DKIM et DMARC sur chaque domaine d’envoi. Pour les boîtes que vous apportez, ils se règlent chez votre hébergeur DNS, pas dans Instantly : mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} montre comment les ajouter.
- Les bons accès : un compte administrateur Google Workspace ou Microsoft 365, ou le mot de passe de chaque boîte chez les autres fournisseurs.
- Une carte bancaire pour l’abonnement.

Votre liste de contacts peut attendre. Le warm-up prend quelques semaines, ce qui laisse le temps de la construire et de la vérifier.

Le fournisseur décide de la façon dont une boîte se connecte :

| Fournisseur | Connexion à Instantly | Ce qu’il faut |
|---|---|---|
| Google Workspace | Connexion avec le compte Google | Un administrateur qui approuve l’application Instantly |
| Microsoft 365 | Connexion avec le compte Microsoft | Un administrateur qui active le SMTP authentifié |
| Spacemail ou tout autre fournisseur | IMAP et SMTP | Les réglages des serveurs et le mot de passe de chaque boîte |

Quant au choix du fournisseur : d’expérience, Microsoft fonctionne très bien en cold emailing mais il est délicat à configurer, et Google fait moins bien. Celui que je recommande, c’est Spacemail, le service mail de Spaceship, le registrar créé par Namecheap ; mon comparatif des {{< a key="best-email-provider-cold-email" >}}boîtes mail pour le cold emailing{{< /a >}} en détaille les raisons. Lisez tout de même les règles de Spaceship sur le cold emailing avant de vous lancer : l’étape 3 explique pourquoi.

## Étape 1 : créer votre compte Instantly

Rendez-vous sur instantly.ai et créez votre compte avec une adresse que vous lisez tous les jours, votre adresse professionnelle par exemple : l’identifiant de connexion et les boîtes d’envoi sont deux choses distinctes, et les boîtes se connectent à l’étape 3.

Instantly range tout dans un espace de travail (workspace) : les boîtes connectées, les campagnes, les contacts et l’Unibox. Donnez-lui le nom de l’entreprise pour laquelle partent les campagnes.

{{< screenshot id="instantly-ai-tutorial-01" alt="La page Email Accounts encore vide d’un nouvel espace de travail Instantly, juste après l’inscription" >}}

## Étape 2 : choisir une offre Outreach

Instantly appelle ses offres de cold emailing les offres Outreach. À la date de rédaction (octobre 2026), il y en a trois, plus une offre Enterprise sur devis, et **toutes incluent les boîtes mail et le warm-up en illimité**. Vous payez selon les contacts importés et les emails envoyés, pas selon le nombre de boîtes connectées.

| Offre | Paiement mensuel | Paiement annuel (par mois) | Contacts importables |
|---|---|---|---|
| Growth | 47 $ (environ 40 €) | 37,60 $ (environ 32 €) | 1 000 |
| Hypergrowth | 97 $ (environ 84 €) | 77,60 $ (environ 67 €) | 25 000 |
| Light Speed | 358 $ (environ 310 €) | 286,30 $ (environ 245 €) | 100 000 |

Instantly facture en dollars américains : le montant en euros suit le taux de change, et [la page des tarifs d’Instantly](https://instantly.ai/pricing) (en anglais) donne les prix et les limites à jour. Growth plafonne aussi l’envoi à 5 000 emails par mois, assez pour un premier test sur un segment depuis quelques boîtes. On atteint vite ce plafond : dix boîtes qui envoient chacune 30 emails par jour ouvré font déjà environ 6 300 emails par mois, et Hypergrowth devient l’étape suivante habituelle. La base de contacts (SuperSearch) et le CRM se paient à part, et ce tuto n’a besoin ni de l’une ni de l’autre.

Les boîtes illimitées comptent plus qu’il n’y paraît. Les campagnes que je mène pour Pilotech partent de 30 adresses, et avec n’importe quelle offre Outreach, la 30e boîte ne coûte rien de plus que la première. Si vous hésitez encore entre plusieurs outils, mon comparatif {{< a key="instantly-vs-smartlead-vs-lemlist" >}}lemlist vs Instantly vs Smartlead{{< /a >}} met leurs modèles de prix côte à côte.

{{< screenshot id="instantly-ai-tutorial-02" alt="Le choix de l’offre dans Instantly, avec les offres Outreach Growth, Hypergrowth et Light Speed" >}}

## Étape 3 : connecter vos boîtes d’envoi

Dans le menu de gauche, ouvrez **Email Accounts** et cliquez sur **Add New**. Le même bouton sert aussi à acheter les boîtes prêtes à l’emploi d’Instantly (ses comptes done-for-you et pré-chauffés). Ce tuto connecte celles que vous avez déjà : choisissez donc de connecter des comptes existants. Instantly demande ensuite quel fournisseur utilise la boîte : Google, Microsoft, ou tout autre fournisseur en IMAP et SMTP. Chaque voie demande sa propre préparation, détaillée ci-dessous.

{{< screenshot id="instantly-ai-tutorial-03" alt="La page Email Accounts d’Instantly après un clic sur Add New, avec le choix entre Google, Microsoft et IMAP/SMTP" >}}

### Google Workspace : faire approuver Instantly, puis se connecter

Sur Google Workspace, un administrateur indique d’abord à Google qu’Instantly peut accéder aux boîtes :

1. Dans Instantly, choisissez l’option Google et copiez l’ID client qu’elle affiche.
2. Dans la console d’administration Google, ouvrez **Sécurité**, **Contrôle des accès et des données**, **Commandes des API**, puis **Gérer l’accès des applications tierces**.
3. Ajoutez une nouvelle application, retrouvez-la grâce à l’ID client, sélectionnez Instantly et marquez l’application comme approuvée (Trusted dans la console en anglais). Instantly OAuth v1 apparaît alors dans la liste des applications configurées.
4. De retour dans Instantly, connectez-vous avec la boîte à relier et autorisez l’accès.

La partie administrateur se fait une fois ; la connexion, une fois par boîte. Si la fenêtre de Google propose le mauvais compte, choisissez **Utiliser un autre compte** ou ouvrez Instantly dans une fenêtre de navigation privée. L’IMAP, dont Instantly a besoin, est toujours activé dans Gmail depuis janvier 2025 ; si la connexion échoue malgré tout, demandez à l’administrateur si l’IMAP n’est pas bloqué pour toute l’organisation.

{{< screenshot id="instantly-ai-tutorial-04" alt="Console d’administration Google, Commandes des API : Instantly OAuth v1 dans la liste des applications configurées, avec un accès approuvé" >}}

### Microsoft 365 : activer d’abord le SMTP authentifié

Avant qu’Instantly puisse envoyer depuis une boîte Microsoft 365, l’authentification SMTP doit y être activée :

1. Dans le centre d’administration Microsoft 365, ouvrez **Utilisateurs**, puis **Utilisateurs actifs**, et sélectionnez la boîte.
2. Ouvrez l’onglet **Courrier** et cliquez sur **Gérer les applications de messagerie**.
3. Cochez **SMTP authentifié**, vérifiez que la case **IMAP** est cochée elle aussi (Instantly a besoin des deux) et cliquez sur **Enregistrer les modifications**.
4. Attendez environ une heure : l’aide d’Instantly demande ce délai, le temps que Microsoft applique le changement.
5. Dans Instantly, choisissez l’option Microsoft, connectez-vous avec cette boîte et acceptez les autorisations demandées.

Les comptes Microsoft se connectent un par un : Instantly ne propose pas de connexion groupée pour eux, prévoyez donc le temps nécessaire si vous en avez beaucoup. [La page de Microsoft sur le SMTP AUTH](https://learn.microsoft.com/fr-fr/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission) explique ce réglage et prévient qu’il est désactivé dans les organisations qui utilisent les paramètres de sécurité par défaut ; si c’est votre cas, y toucher est une décision de sécurité qui revient à la personne qui gère votre Microsoft 365.

{{< screenshot id="instantly-ai-tutorial-05" alt="Centre d’administration Microsoft 365, panneau Gérer les applications de messagerie d’un utilisateur avec SMTP authentifié coché" >}}

### Spacemail et autres fournisseurs : IMAP et SMTP

Pour tout autre fournisseur, choisissez l’option IMAP et SMTP et remplissez les deux parties du formulaire. Pour Spacemail, les valeurs données par l’aide de Spaceship sont :

```
Prénom et nom :   le vrai nom de l’expéditeur
Email :           vous@votre-domaine-d-envoi.fr
Identifiant :     l’adresse email complète (IMAP et SMTP)
Mot de passe :    le mot de passe de la boîte
Serveur IMAP :    mail.spacemail.com
Port IMAP :       993 (SSL)
Serveur SMTP :    mail.spacemail.com
Port SMTP :       465 (SSL)
```

L’accès IMAP et SMTP est activé par défaut sur les boîtes Spacemail ; si Instantly n’arrive pas à se connecter, vérifiez qu’il n’a pas été désactivé dans Spacemail Manager. Ces valeurs viennent du centre d’aide de Spaceship, et mon pas-à-pas pour {{< a key="spacemail-setup" >}}configurer Spacemail{{< /a >}} explique comment créer les boîtes.

{{< screenshot id="instantly-ai-tutorial-06" alt="Formulaire IMAP/SMTP d’Instantly rempli avec les réglages de Spacemail : mail.spacemail.com, ports 993 et 465" >}}

{{< callout type="warning" >}}**Lisez les règles de Spaceship avant de connecter Spacemail.** Ses pages d’aide interdisent les emails commerciaux non sollicités, en masse ou automatisés, sa politique d’utilisation acceptable de l’hébergement considère comme non sollicité tout email envoyé à des personnes qui n’ont pas donné leur accord, et son [guide de chauffe d’un domaine](https://www.spaceship.com/knowledgebase/warm-up-domain-email-deliverability/) (en anglais) interdit la chauffe automatisée par des outils tiers : c’est exactement ce qu’est le warm-up d’Instantly. Demandez par écrit au support de Spaceship ce qu’il accepte avant d’activer le warm-up sur ces boîtes.{{< /callout >}}

## Étape 4 : régler le nom d’expéditeur, la signature et la limite quotidienne

Cliquez sur une boîte connectée dans **Email Accounts** pour ouvrir ses réglages. Trois d’entre eux méritent une minute avant le début du warm-up :

- Le nom d’expéditeur : le prénom et le nom d’une vraie personne, celle que les prospects appelleront. Pour Pilotech, les emails étaient signés par le fondateur, avec son numéro de téléphone dans le message.
- La signature : en texte brut uniquement, avec un nom, une entreprise et un numéro de téléphone. Ni logo ni lien, pour la même raison que mes emails n’en ont pas : du texte brut sans lien protège la délivrabilité.
- La limite d’envoi quotidienne : le nombre d’emails de campagne que cette boîte peut envoyer par jour. Commencez à moins de dix par jour et montez semaine après semaine. Les guides d’Instantly conseillent environ 30 emails par jour et par boîte une fois sa réputation établie, le chiffre que retient l’article sur l’infrastructure cité plus haut pour dimensionner un dispositif.

{{< screenshot id="instantly-ai-tutorial-07" alt="Réglages d’une boîte connectée dans Instantly : nom d’expéditeur, signature en texte brut et limite d’envoi quotidienne" >}}

## Étape 5 : activer le warm-up et le laisser tourner

Le warm-up (la chauffe) est une période pendant laquelle une boîte neuve échange des emails ordinaires avec d’autres vraies boîtes, pour que les messageries apprennent à lui faire confiance avant qu’elle envoie le moindre cold email. Instantly l’inclut dans toutes les offres, pour toutes les boîtes, et le fait tourner pour vous.

1. Dans **Email Accounts**, cliquez sur l’icône en forme de flamme, sur la ligne d’une boîte, pour lancer son warm-up. Pour en activer plusieurs d’un coup, sélectionnez-les et passez par le menu à trois points.
2. Ne vous attendez pas à une activité immédiate : Instantly programme les emails de chauffe à minuit UTC, donc une boîte activée aujourd’hui démarre après le prochain minuit UTC.
3. Ouvrez les réglages d’une boîte pour voir sa partie warm-up : le nombre d’emails de chauffe envoyés par jour, la vitesse à laquelle ce nombre augmente et la fréquence des réponses dans ces échanges.
4. Laissez-le tourner. Le warm-up ne s’arrête pas quand les campagnes commencent : il continue en arrière-plan.

Pour la durée et les chiffres, [le guide de la chauffe de MLK Leadhunters](https://mlkleadhunters.com/fr/blog/email-warm-up/) donne la réponse : deux semaines au minimum pour un domaine neuf, trois pour être tranquille, quatre pour un domaine enregistré le mois même, et les réglages qui comptent. C’est en bonne partie pour ces réglages que j’utilise toujours Instantly.

Seule exception : un fournisseur qui interdit la chauffe automatisée, comme Spaceship (voir l’étape 3). Sur ces boîtes-là, laissez le warm-up désactivé tant que le fournisseur n’a pas donné son accord par écrit.

{{< callout type="warning" >}}**Aucun cold email pendant les premières semaines, pas même un test.** Une boîte neuve qui envoie des campagnes avant que le warm-up ait construit sa réputation finit dans les spams, et insister ne fait qu’aggraver les choses.{{< /callout >}}

{{< screenshot id="instantly-ai-tutorial-08" alt="Liste Email Accounts d’Instantly avec le warm-up activé sur plusieurs boîtes" >}}

## Étape 6 : ajouter un domaine de tracking, seulement si vous suivez vos envois

Le suivi des ouvertures et des clics passe par un domaine de tracking : une image invisible compte les ouvertures, des liens redirigés comptent les clics. Par défaut, ces liens utilisent un domaine qu’Instantly partage entre ses utilisateurs ; un domaine de tracking personnalisé le remplace par un sous-domaine de votre propre domaine d’envoi.

Je saute cette étape. Mes emails sont en texte brut et sans lien : il n’y a ni image de suivi ni rien à cliquer, et le suivi reste désactivé. S’y ajoute une raison juridique : depuis sa recommandation d’avril 2026, la CNIL considère que le pixel qui mesure l’ouverture d’un email de prospection suppose en principe le consentement du destinataire. Si vous suivez quand même vos envois, ajoutez cet enregistrement CNAME sur chaque domaine d’envoi, chez votre hébergeur DNS :

```
Type :     CNAME
Hôte :     inst
Valeur :   prox.itrackly.com
```

Puis, dans Instantly :

1. Ouvrez les réglages de la boîte, activez le domaine de tracking personnalisé et saisissez `inst.votre-domaine-d-envoi.fr`.
2. Cliquez sur **Check Status**. Quand l’enregistrement est trouvé, Instantly affiche **CNAME Verified**. Une modification DNS peut mettre 24 à 72 heures à se propager : si l’enregistrement n’est pas trouvé tout de suite, réessayez plus tard.

{{< callout type="tip" >}}Chez OVH, tapez la valeur avec un point final, `prox.itrackly.com.`, sinon OVH ajoute votre propre domaine à la fin et l’enregistrement n’est jamais validé.{{< /callout >}}

{{< screenshot id="instantly-ai-tutorial-09" alt="Réglages d’une boîte dans Instantly avec le domaine de tracking inst.votre-domaine-d-envoi.fr et le statut CNAME Verified" >}}

## Étape 7 : vérifier l’Unibox, où arrivent les réponses

L’**Unibox** est la boîte de réception unique d’Instantly : les réponses à vos campagnes, venues de toutes les boîtes connectées, y arrivent, et personne n’a besoin d’ouvrir 30 boîtes une par une. Vous pouvez la filtrer par campagne ou par boîte, répondre depuis l’Unibox et indiquer le statut de chaque contact, intéressé ou non.

Décidez dès maintenant qui répond. Dans les campagnes de mes clients, je fais tout sauf les réponses : elles reviennent au client. Pour les {{< a page="/projects/pilotech-teknopoint" >}}campagnes Pilotech Teknopoint{{< /a >}}, les réponses écrites arrivaient directement chez le fondateur, qui y répondait depuis sa propre boîte, et beaucoup de prospects, surtout les architectes, ont appelé au lieu de répondre : un appel trouve plus facilement sa place dans une journée chargée qu’une réponse écrite. L’Unibox ne montre donc pas tout : comptez aussi les appels.

Le test le plus simple viendra avec votre première campagne : ajoutez votre propre adresse comme contact, répondez à l’email reçu et vérifiez que votre réponse apparaît dans l’Unibox.

{{< screenshot id="instantly-ai-tutorial-10" alt="L’Unibox d’Instantly avec les réponses de plusieurs boîtes d’envoi réunies dans une seule liste" >}}

## Après ce tuto Instantly : la liste de contrôle avant la première campagne

Avant de lancer quoi que ce soit, vérifiez que :

1. chaque domaine d’envoi a ses enregistrements SPF, DKIM et DMARC ;
2. chaque boîte apparaît dans **Email Accounts** sans erreur de connexion ;
3. le warm-up tourne depuis deux à trois semaines sur chaque boîte, dans le respect des règles de son fournisseur ;
4. chaque boîte a un vrai nom d’expéditeur et une signature en texte brut ;
5. le suivi est désactivé, ou le domaine de tracking affiche **CNAME Verified** ;
6. quelqu’un s’occupe de l’Unibox, et quelqu’un décroche au numéro indiqué dans vos emails ;
7. votre liste est vérifiée : je nettoie les miennes avec Reoon.

Écrivez et programmez ensuite la séquence avec mon tuto pour {{< a key="instantly-campaign-setup" >}}créer une campagne Instantly{{< /a >}} : trois emails courts en texte brut au maximum, avec votre numéro de téléphone dedans. Dans mes campagnes, le premier résultat arrive en général dans les 36 heures qui suivent le lancement, et les campagnes de Pilotech ont apporté 15 nouveaux clients en un an.

Si vous préférez ne pas gérer vous-même les domaines, les enregistrements DNS et le warm-up, c’est exactement ce que fait mon activité de cold emailing, [MLK Leadhunters](https://mlkleadhunters.com/fr/), pour ses clients : tout, sauf les réponses, qui restent chez vous.
