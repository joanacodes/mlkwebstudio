---
title: "Infrastructure de cold emailing : domaines, boîtes mail et volumes d’envoi"
seo_title: "Infrastructure cold emailing : domaines et boîtes mail"
description: "Infrastructure cold emailing : combien de domaines et de boîtes mail prévoir, le volume par boîte, les règles Gmail et Outlook, et un exemple à 30 adresses."
slug: "infrastructure-cold-emailing"
translationKey: "cold-email-infrastructure"
date: 2026-10-17T08:34:00+02:00
lastmod: 2026-10-17T08:34:00+02:00
category: "cold-emailing"
article_type: "guide"
keywords: ["infrastructure cold emailing", "domaine secondaire cold emailing", "limite d’envoi par boîte mail", "nombre de boîtes mail par domaine", "volume d’envoi prospection email"]
summary: "Une infrastructure de cold emailing réunit les domaines secondaires, les boîtes mail, les enregistrements DNS et l’outil d’envoi d’une campagne, à l’écart de votre domaine principal. Les guides d’Instantly conseillent environ 30 cold emails par jour et par boîte, loin des 2 000 messages par jour autorisés par Google Workspace. Pour 300 emails par jour, il faut donc une dizaine de boîtes sur trois ou quatre domaines, avec SPF, DKIM et DMARC, chauffées avant le premier envoi."
cover: "cold-email-infrastructure"
cover_alt: "Trente adresses d’envoi réparties sur des domaines secondaires, avec leurs enregistrements DNS"
related: ["best-email-provider-cold-email", "spf-dkim-dmarc-setup", "instantly-ai-tutorial", "spacemail-setup", "plain-text-cold-emails"]
services: ["cold-emailing"]
faq:
  - q: "Faut-il un site web pour chaque domaine de cold emailing ?"
    a: "Non. Une redirection vers votre site principal suffit : un prospect qui tape le domaine arrive sur votre vrai site, et vous n’avez pas de second site à tenir à jour. Le domaine n’a besoin que de ses boîtes mail et de ses enregistrements DNS."
  - q: "Quelle extension choisir pour un domaine d’envoi ?"
    a: "Une extension que vos prospects connaissent : .fr ou .com en France, .co.uk ou .com pour le Royaume-Uni. Gardez un nom proche de votre marque, pour que le prospect reconnaisse votre entreprise dans l’expéditeur."
  - q: "Combien de temps avant qu’un nouveau domaine puisse envoyer ?"
    a: "Des semaines, pas des jours : les boîtes doivent d’abord chauffer. Les guides d’Instantly vont d’au moins deux semaines à un mois ou plus avant le plein volume, et [l’article de MLK Leadhunters sur la chauffe](https://mlkleadhunters.com/fr/blog/email-warm-up/) décrit les signes que c’est prêt."
  - q: "Que faire si un domaine d’envoi commence à tomber en spam ?"
    a: "Mettez-le en pause, vérifiez ses enregistrements SPF, DKIM et DMARC et la liste à laquelle il écrivait, et laissez les autres domaines porter le volume. C’est la raison même de répartir les boîtes sur plusieurs domaines."
  - q: "Où arrivent les réponses aux cold emails ?"
    a: "Dans les boîtes d’envoi. Un outil comme Instantly les rassemble dans une seule boîte de réception, l’Unibox, pour que la personne qui gère les prospects réponde depuis un seul endroit. Avec un numéro de téléphone dans l’email, beaucoup de réponses arrivent par appel."
---

Une infrastructure de cold emailing, c’est tout ce qui transporte vos cold emails avant que quelqu’un les lise : les domaines secondaires d’où ils partent, les boîtes mail créées sur ces domaines, les enregistrements DNS qui prouvent que les messages viennent bien de vous, et l’outil qui étale les envois sur la journée. Quand elle est bien faite, personne ne la remarque. Quand elle est mal faite, des emails bien écrits finissent en spam, et s’ils sont partis de votre domaine principal, vos devis et vos factures peuvent les y suivre.

Ce guide répond aux questions de dimensionnement : combien de domaines et de boîtes mail acheter, combien chaque boîte peut envoyer par jour, et quelles règles Gmail, Yahoo et Outlook imposent. Viennent ensuite l’exemple des 30 adresses d’envoi d’une campagne que je mène pour Pilotech, installateur de climatisation en Île-de-France, puis la mise en place dans l’ordre.

Pour la campagne dans son ensemble (la liste, les emails, les relances), commencez par mon {{< a key="b2b-cold-emailing-guide" >}}guide du cold emailing B2B{{< /a >}}. Ici, il s’agit de la tuyauterie.

## De quoi se compose une infrastructure de cold emailing

Elle tient en cinq éléments, chacun avec une décision à prendre.

| Élément | Ce que c’est | La décision |
|---|---|---|
| Domaines secondaires | Des noms de domaine proches de votre marque, achetés uniquement pour le cold emailing | Combien, et quelle extension |
| Boîtes mail | De vraies adresses sur ces domaines, hébergées chez un fournisseur de messagerie | Quel fournisseur, et combien par domaine |
| Enregistrements DNS | MX pour recevoir les réponses, plus SPF, DKIM et DMARC pour prouver que les messages viennent de vous | Aucune : chaque domaine a besoin des quatre |
| Outil d’envoi | Le logiciel qui chauffe les boîtes, étale les envois et s’arrête quand quelqu’un répond | La limite quotidienne par boîte |
| Réponses | L’endroit où arrivent les réponses et les appels | Qui répond, et en combien de temps |

L’outil d’envoi compte plus qu’il n’y paraît, puisque c’est lui qui tient les limites quotidiennes. J’utilise Instantly : c’est l’outil avec lequel j’ai commencé, il est simple, et une fois la bonne recette trouvée, ses réglages font beaucoup pour vous garder hors des spams. Je n’ai trouvé aucune raison d’en changer. Mon {{< a key="instantly-ai-tutorial" >}}tuto Instantly{{< /a >}} montre comment y connecter les boîtes et régler ces limites.

## Pourquoi le domaine principal n’envoie jamais

Votre domaine principal, c’est celui de votre site, de vos factures et du carnet d’adresses de vos clients. Le cold emailing comporte toujours un risque de signalements en spam, et la réputation colle au domaine : si les messageries commencent à s’en méfier, vos emails de tous les jours en pâtissent aussi.

Les cold emails partent donc de domaines secondaires. Si le domaine de votre entreprise est votremarque.fr, vous enverrez par exemple depuis votremarque-pro.fr et groupe-votremarque.fr, et aucun email de prospection ne sortira de votremarque.fr. MLK Leadhunters détaille le raisonnement dans [N’envoyez jamais de cold emails depuis votre domaine principal](https://mlkleadhunters.com/fr/blog/never-send-from-your-main-domain/). La question, ici, est de savoir combien de domaines il vous faut, et la réponse commence par ce que chaque boîte peut envoyer.

## Limites d’envoi : des plafonds, pas des objectifs

Chaque fournisseur de messagerie publie ce qu’une boîte a le droit d’envoyer. Ces limites servent à bloquer les abus, et une boîte de cold emailing qui s’en approcherait serait repérée bien avant. Le chiffre qui compte est sur la dernière ligne.

| Fournisseur ou source | Limite publiée | Pour le cold emailing |
|---|---|---|
| [Google Workspace](https://support.google.com/a/answer/166852?hl=fr) | 2 000 messages par jour et par utilisateur, 500 pendant l’essai gratuit | Un plafond ; pas de cold emailing sur un compte d’essai |
| Microsoft 365 (Exchange Online) | 10 000 destinataires par jour, 30 messages par minute | Un plafond |
| Spacemail (Spaceship) | 500 emails par heure et par boîte sur les offres payantes, 20 par heure pendant l’essai | Un plafond, avec des règles strictes (voir plus bas) |
| Les guides d’Instantly | Environ 30 cold emails par jour et par boîte, jusqu’à 50 sur certaines pages | Un volume de croisière, atteint progressivement |

Ce sont les chiffres publiés à la date de rédaction (octobre 2026).

Trente par jour, c’est 1,5 % du plafond de Google, et cet écart est voulu. Une boîte neuve n’a aucune réputation : elle démarre à quelques emails par jour et monte semaine après semaine pendant la chauffe (le warm-up). [L’article de MLK Leadhunters sur la chauffe](https://mlkleadhunters.com/fr/blog/email-warm-up/) explique combien de temps elle prend et à quoi on voit qu’elle a fonctionné. Pour envoyer davantage, ajoutez des boîtes au lieu de pousser chacune plus fort : les guides d’Instantly donnent le même conseil, et cet article compte 30 emails par jour et par boîte dans tous ses calculs.

### Quel fournisseur choisir ?

Par expérience, Microsoft fonctionne très bien pour le cold emailing mais reste délicat à configurer, et Google fait moins bien. Spacemail, la messagerie de Spaceship, est celle que je vous encourage à envisager : la configuration est simple, et le support de Spaceship répond à toute heure et a toujours réglé mes problèmes. Je compare les trois en détail dans mon article sur {{< a key="best-email-provider-cold-email" >}}la boîte mail à choisir pour le cold emailing{{< /a >}}, et le tutoriel pour {{< a key="spacemail-setup" >}}configurer Spacemail{{< /a >}} couvre la création des boîtes.

{{< callout type="warning" >}}**Lisez les règles de Spaceship avant de tout construire sur Spacemail.** Sa politique d’utilisation acceptable de l’hébergement considère comme non sollicité tout email envoyé à des personnes qui n’ont pas donné leur accord. Ses pages d’aide interdisent tout email commercial non sollicité ou envoyé en masse, et précisent que sa messagerie n’est pas faite pour les envois massifs. Son [guide de chauffe d’un domaine](https://www.spaceship.com/knowledgebase/warm-up-domain-email-deliverability/) (en anglais) n’autorise qu’une chauffe manuelle et progressive : la chauffe automatisée par des outils tiers y est interdite, et la chauffe automatique d’un outil d’envoi, c’est exactement cela. Demandez par écrit au support de Spaceship ce qu’il accepte avant d’y connecter 30 boîtes.{{< /callout >}}

## Les règles de Gmail, Yahoo et Outlook pour les expéditeurs

Depuis février 2024, les [consignes de Google pour les expéditeurs](https://support.google.com/a/answer/81126?hl=fr) fixent les règles pour tous ceux qui écrivent à des adresses Gmail, et Yahoo a introduit des règles semblables au même moment.

- **Tous les expéditeurs** doivent avoir SPF ou DKIM sur le domaine d’envoi, un DNS direct et inverse valide, une connexion TLS, et un taux de spam (la part de vos emails que les destinataires signalent comme spam) inférieur à 0,3 %. Google conseille de rester sous 0,1 %.
- **Au-delà de 5 000 messages par jour** vers des adresses Gmail, il faut en plus SPF, DKIM et DMARC ensemble, avec une politique DMARC au moins à p=none, un domaine d’expédition (le From) aligné sur SPF ou DKIM, et la désinscription en un clic sur les messages marketing.

Microsoft a suivi pour les adresses Outlook.com, Hotmail et Live. Depuis le 5 mai 2025, un domaine qui leur envoie 5 000 messages ou plus par jour doit passer SPF et DKIM, publier un enregistrement DMARC et avoir SPF ou DKIM aligné sur le domaine d’expédition (le From). Les messages qui échouent sont refusés avec l’erreur `550 5.7.515 Access denied`, comme l’explique [la page de Microsoft sur cette erreur](https://support.microsoft.com/en-us/outlook/fix-ndr-error-550-5-7-515-in-outlook-com) (en anglais).

Ce que cela change pour une petite infrastructure :

- **Le DNS inverse et le TLS sont l’affaire de votre fournisseur** quand vous envoyez par ses serveurs. SPF, DKIM et DMARC sont à votre charge, sur chaque domaine d’envoi. Mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} montre les enregistrements, et MLK Leadhunters [explique simplement](https://mlkleadhunters.com/fr/blog/spf-dkim-dmarc-explained/) le rôle de chacun.
- **Mettez les trois enregistrements même sous 5 000 par jour.** À la lettre, les seuils ne comptent que les messages envoyés à des adresses Gmail et Outlook.com personnelles, mais les boîtes professionnelles hébergées chez Google Workspace, Microsoft 365 ou ailleurs passent par des filtres dont les règles ne sont pas publiées. Les enregistrements ne coûtent rien : aucune raison de s’en priver.
- **Le taux de spam est la seule limite qu’aucun enregistrement DNS ne règle.** Il dépend du ciblage, et d’emails courts qui se lisent comme écrits par une personne. Une liste de gens qui n’ont jamais eu besoin de votre offre vous signalera, aussi propre que soit l’installation.

## Combien de domaines et de boîtes mail prévoir ?

Partez du nombre de nouvelles personnes à contacter chaque jour, et remontez.

1. **Emails par jour** = nouveaux contacts par jour × emails par contact. Mes séquences s’arrêtent à trois emails : une fois les relances lancées, une journée porte les premiers emails des nouveaux contacts et les relances des précédents, soit jusqu’à trois fois le nombre de nouveaux contacts du jour.
2. **Boîtes mail** = emails par jour ÷ 30, arrondi au-dessus, plus une ou deux en réserve pour pouvoir en mettre une au repos.
3. **Domaines** = boîtes ÷ boîtes par domaine. Limitez-vous à quelques boîtes par domaine : plus il y en a, moins il y a de domaines à acheter et à configurer, mais un domaine qui a un problème emporte toutes ses boîtes avec lui. Le tableau en compte trois.

| Nouveaux contacts par jour | Emails par jour (3 par contact) | Boîtes à 30 par jour | Domaines à 3 boîtes chacun |
|---|---|---|---|
| 20 | 60 | 2 | 1 |
| 50 | 150 | 5 | 2 |
| 100 | 300 | 10 | 4 |
| 300 | 900 | 30 | 10 |

Les boîtes de réserve ne figurent pas dans le tableau. Chaque domaine se paie à l’année et chaque boîte par abonnement, et les prix changent : vérifiez la page tarifs du fournisseur avant de multiplier quoi que ce soit par 30.

Si 20 nouveaux contacts par jour vous suffisent, deux boîtes sur un domaine secondaire et un outil d’envoi font l’affaire. Vous n’avez besoin de personne pour installer cela.

## Exemple : les 30 adresses de la campagne Pilotech

Pilotech installe de la climatisation en Île-de-France. La campagne de cold emailing que je mène pour l’entreprise part de 30 adresses dédiées, vers trois publics : les restaurants parisiens, les bureaux et commerces parisiens, et les architectes. Les architectes étaient la cible principale, et ceux qui appelaient le plus.

Ce que portent ces 30 adresses :

- **Trois emails en texte brut au maximum par contact.** Le troisième apporte des réponses positives de personnes qui avaient oublié, ou qui étaient trop prises pour répondre aux deux premiers.
- **Ni lien ni HTML.** L’email donne un numéro de téléphone et invite à consulter le catalogue sur le site. Sans lien, rien à suivre, donc pas de domaine de suivi à configurer non plus. Mes raisons sont dans {{< a key="plain-text-cold-emails" >}}mon article sur la délivrabilité en cold emailing{{< /a >}}.
- **Des listes vérifiées.** Les listes ont été nettoyées avec Reoon, le vérificateur que j’utilise tous les jours, parce que les adresses mortes rebondissent et que les rebonds usent la réputation d’un domaine d’envoi.
- **Des appels plutôt que des réponses.** Les réponses vont au client, qui prend aussi les appels, et les prospects ont tendance à décrocher leur téléphone plutôt qu’à répondre par écrit.

En un an, la campagne a apporté 15 nouveaux clients à Pilotech. Dans mes campagnes, le premier résultat arrive dans les 36 heures qui suivent le premier envoi. Les noms de domaine restent privés, le volume quotidien aussi, mais la capacité se calcule facilement : à 30 emails par jour chacune, 30 adresses peuvent porter jusqu’à 900 emails par jour, de quoi contacter environ 300 nouvelles personnes par jour avec une séquence de trois emails.

C’est un plafond, pas le volume quotidien, et c’est la capacité inutilisée qui permet de mettre au repos une boîte, voire un domaine entier, sans arrêter la campagne. Je raconte dans {{< a key="architects-cold-email-case-study" >}}mon retour d’expérience sur la prospection des architectes{{< /a >}} pourquoi tant de prospects appelaient au lieu de répondre, et le projet est présenté sur {{< a page="/projects/pilotech-teknopoint" >}}la page Pilotech Teknopoint{{< /a >}}.

## La mise en place, dans l’ordre

{{< callout type="tip" >}}**Montez l’infrastructure avant d’en avoir besoin.** La chauffe prend des semaines : achetez les domaines et créez les boîtes bien avant la date de la campagne, pas la semaine du lancement.{{< /callout >}}

1. **Dimensionnez.** Comptez les boîtes et les domaines avec le tableau ci-dessus, plus une réserve.
2. **Achetez les domaines secondaires.** Des noms proches de votre marque, une extension que vos prospects connaissent (.fr ou .com) et le renouvellement automatique activé. Redirigez chaque domaine vers votre site principal : un prospect qui tape l’adresse arrive quelque part de réel. Par habitude, j’utilise Spaceship, mais vérifiez que sa recherche de domaine propose l’extension voulue ; Namecheap, qui vend le .fr, est l’autre registrar en qui j’ai confiance.
3. **Créez les boîtes mail.** Un vrai prénom par adresse et la même signature partout, avec le numéro que les prospects doivent appeler.
4. **Ajoutez les enregistrements DNS sur chaque domaine**, d’après le modèle ci-dessous.
5. **Connectez les boîtes à l’outil d’envoi** et lancez la chauffe, sauf si les règles de votre fournisseur interdisent la chauffe automatisée. Fixez une limite quotidienne basse par boîte, et coupez le suivi des ouvertures et des clics si, comme moi, vous envoyez du texte brut.
6. **Vérifiez la liste** avant le premier envoi.
7. **Montez chaque boîte vers 30 envois par jour** au fil des semaines suivantes, en surveillant les rebonds et les réponses.

Les enregistrements d’un domaine d’envoi ont toujours la même forme ; les valeurs viennent de votre fournisseur de messagerie :

```
votremarque-pro.fr (un domaine secondaire)
MX     @                      serveurs de messagerie de votre fournisseur
TXT    @                      v=spf1 include:<votre fournisseur> ~all
TXT    <sélecteur>._domainkey clé DKIM générée par le fournisseur (un CNAME chez certains)
TXT    _dmarc                 v=DMARC1; p=none
```

Une politique DMARC à p=none suffit pour respecter les règles de Gmail et d’Outlook. Le tutoriel SPF, DKIM et DMARC déjà cité couvre les rapports et les politiques plus strictes, une fois les domaines lancés.

## Surveiller l’infrastructure, et savoir passer la main

Une fois la campagne lancée, cinq points méritent un coup d’œil chaque semaine :

- **Les rebonds.** Une hausse soudaine signale un mauvais lot d’adresses : mettez en pause et revérifiez la liste.
- **Le taux de spam.** La limite de Gmail est à 0,3 %. Google Postmaster Tools affiche ce taux pour un domaine dès qu’il envoie assez de messages vers des adresses Gmail.
- **Les réponses par domaine.** Si les réponses d’un domaine s’effondrent alors que les autres tiennent, mettez-le au repos et laissez les autres porter le volume.
- **Les renouvellements.** Un domaine d’envoi qui expire emporte ses boîtes avec lui.
- **La croissance.** Plus de volume, c’est plus de boîtes et de domaines, installés et chauffés des semaines à l’avance, jamais des limites plus hautes sur les anciennes boîtes.

Deux boîtes sur un domaine, vous pouvez les installer par vous-même avec les tutoriels cités plus haut. Trente, c’est un autre chantier : une dizaine de domaines à trois boîtes chacun, des dizaines d’enregistrements DNS, une chauffe à surveiller, des renouvellements à suivre et des réponses à aiguiller. Quand je mène une campagne, le client n’a rien à fournir au départ et je m’occupe de tout sauf des réponses. Si vous préférez confier l’ensemble, c’est le métier de [MLK Leadhunters](https://mlkleadhunters.com/fr/).
