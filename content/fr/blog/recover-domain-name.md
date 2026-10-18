---
title: "Récupérer son nom de domaine auprès d’un ancien prestataire"
seo_title: "Récupérer son nom de domaine : démarches et recours"
description: "Récupérer son nom de domaine quand un ancien prestataire le détient : trouver le titulaire, demander par écrit, puis les recours pour un .fr ou un .com."
slug: "recuperer-nom-de-domaine"
translationKey: "recover-domain-name"
date: 2026-10-17T09:36:00+02:00
lastmod: 2026-10-17T09:36:00+02:00
category: "website-rescue"
article_type: "guide"
keywords: ["récupérer nom de domaine", "récupérer son nom de domaine", "nom de domaine au nom du prestataire", "changement de titulaire nom de domaine", "code de transfert nom de domaine", "SYRELI"]
summary: "Consultez d’abord le Whois (celui de l’Afnic pour un .fr, ICANN Lookup pour un .com), puis identifiez le titulaire : c’est lui qui détient le domaine, quel que soit celui qui a payé. Si c’est votre entreprise, adressez-vous directement au registrar pour reprendre la main ; si c’est le prestataire, demandez-lui par écrit un changement de titulaire et le code de transfert, et en cas de refus, SYRELI, PARL EXPERT, l’UDRP ou le juge peuvent ordonner le transfert."
cover: "recover-domain-name"
cover_alt: "Ordinateur portable et classeurs sur un bureau, à côté d’enregistrements DNS et du mot WHOIS"
related: ["regain-website-access", "transfer-domain-name", "fr-domain-names", "website-security-guide", "dns-records-explained"]
services: ["rescue"]
faq:
  - q: "Un prestataire a-t-il le droit de garder mon nom de domaine ?"
    a: "S’il en est titulaire, il détient l’enregistrement, mais cela ne dit pas à qui le domaine revient. S’il l’a déposé pour votre entreprise dans le cadre d’un contrat que vous avez payé, vous pouvez demander à l’Afnic (SYRELI, PARL EXPERT), à un centre UDRP ou au juge d’ordonner le transfert ; un avocat vous dira si votre dossier tient."
  - q: "Combien de temps faut-il pour récupérer un nom de domaine ?"
    a: "Si le prestataire coopère, quelques jours suffisent en général : un transfert de .com aboutit en principe sous cinq jours. Une procédure SYRELI dure environ deux mois, une action en justice davantage."
  - q: "Faut-il un avocat pour récupérer son nom de domaine ?"
    a: "Pas pour le Whois, la demande écrite ou le transfert lui-même. Un avocat devient utile quand la mise en demeure a échoué : SYRELI et l’UDRP peuvent être engagés sans lui, mais un conseil aide à monter un dossier solide."
  - q: "Vaut-il mieux acheter un nouveau nom de domaine ?"
    a: "C’est possible, et pour un site récent c’est parfois le plus rapide. Mais l’ancien domaine garde ses liens, son référencement sur Google et les emails envoyés à vos anciennes adresses, et il peut finir par pointer ailleurs : comparez avec le temps que prendrait la récupération."
  - q: "Mon nom de domaine a expiré chez le prestataire : puis-je encore le récupérer ?"
    a: "Peut-être. Après l’expiration, la plupart des domaines passent par des périodes de grâce et de rédemption, variables selon l’extension, pendant lesquelles le titulaire au moment de l’expiration peut en général encore le renouveler, parfois avec des frais de restauration. Une fois supprimé, le domaine redevient libre et le premier qui le dépose l’obtient, y compris vous."
---

Le site est livré, ou la collaboration est terminée, et c’est toujours votre ancien prestataire qui détient votre nom de domaine. Parfois, il l’a déposé dans son propre compte pour aller plus vite et ne l’a jamais transféré. Parfois, le domaine est même à son nom, et il ne répond plus, ou il attend le règlement d’une facture. Dans tous les cas, pour récupérer votre nom de domaine, il faut trois choses, dans cet ordre : les faits, une demande écrite précise et, seulement si elle échoue, un recours.

J’ai enregistré ou relié des domaines chez six registrars : Squarespace (qui a repris Google Domains), Namecheap, Spaceship, Infomaniak, Hostinger et OVH. Leurs interfaces ne se ressemblent pas, mais les règles qui décident de qui récupère un domaine se situent au-dessus d’eux : celles de l’Afnic pour le .fr, celles de l’ICANN pour le .com et les autres extensions génériques. Ce guide suit ces règles.

Il porte sur le domaine lui-même. L’hébergement, l’administration du site et les autres comptes qu’un ancien prestataire peut garder sont traités dans mon guide pour {{< a key="regain-website-access" >}}récupérer son site internet{{< /a >}}, et le guide pour {{< a key="website-security-guide" >}}sécuriser son site internet{{< /a >}} donne l’ordre des étapes pour chaque type de dépannage.

## À qui appartient un nom de domaine : au titulaire, pas à celui qui paie

Un nom de domaine ne s’achète jamais pour toujours : il s’enregistre pour une durée donnée, puis se renouvelle, par l’intermédiaire d’une société appelée registrar (ou bureau d’enregistrement). Quatre rôles se mélangent souvent quand une collaboration se termine :

| Rôle | Qui c’est | En pratique |
|---|---|---|
| Titulaire | La personne ou la société inscrite comme détentrice légale du domaine | Le droit de le renouveler, de le modifier et de le transférer |
| Registrar | La société par laquelle le domaine est enregistré : OVH, Infomaniak, Namecheap… | Il gère le compte et applique les règles de l’extension |
| Détenteur du compte | Celui qui a les identifiants chez le registrar | Le contrôle au quotidien, pas la propriété |
| Payeur | Celui qui a payé le domaine ou le forfait du site | Une preuve pour votre dossier, rien de plus à elle seule |

**C’est le titulaire qui compte.** Si votre entreprise est titulaire et que le prestataire n’a que les identifiants, votre position est solide, car le registrar agit sur les instructions du titulaire. Si le prestataire ou son agence est titulaire, il contrôle le domaine jusqu’à ce qu’il le rende ou qu’une décision l’y oblige, quoi que disent vos factures.

## Commencer par le Whois du domaine

La recherche Whois est gratuite et prend une minute. Pour un .fr, utilisez le Whois de l’Afnic, sur afnic.fr. Pour un .com, un .net ou toute autre extension générique, utilisez [ICANN Lookup](https://lookup.icann.org/), qui interroge RDAP, le protocole qui a remplacé le Whois pour ces extensions. Notez quatre informations :

1. **Le registrar** : la société avec laquelle vous, ou le prestataire, allez traiter.
2. **La date d’expiration** : si elle tombe dans quelques semaines, le renouvellement passe avant toute discussion, car un domaine expiré emporte le site et les emails avec lui.
3. **Le statut** (pour un .com) : `clientTransferProhibited` signale un verrou de transfert que le détenteur du compte peut lever, `clientHold` un domaine suspendu par le registrar, `redemptionPeriod` et `pendingDelete` un domaine expiré, proche de la suppression.
4. **Les serveurs DNS** : ils indiquent où le DNS est hébergé, ce qui comptera ensuite pour garder le site et les emails en ligne.

Reste le titulaire. Pour un .fr, le Whois de l’Afnic affiche en général son nom quand c’est une société ; les données d’un particulier sont masquées par défaut. Pour un .com, les coordonnées sont souvent masquées, avec la mention « REDACTED FOR PRIVACY » à la place. Pour en avoir le cœur net :

- demandez au prestataire une capture des coordonnées du domaine dans son compte registrar : nom du titulaire, organisation, email ;
- cherchez le nom du registrar dans votre messagerie : les registrars envoient les rappels de renouvellement et les demandes de vérification d’email au titulaire, donc si vous n’en avez jamais reçu, l’adresse inscrite sur le domaine est sans doute celle du prestataire ;
- interrogez le support du registrar : il ne communique pas les données d’un titulaire à un tiers, mais si votre entreprise est titulaire, il peut vous le confirmer une fois votre identité vérifiée.

## Trois situations, trois façons de récupérer votre nom de domaine

| Ce que vous constatez | Ce qu’il faut faire |
|---|---|
| Votre entreprise est titulaire, le prestataire a les identifiants | Demandez-lui de déplacer le domaine vers un compte à vous. S’il refuse, contactez le registrar avec une preuve d’identité et demandez à reprendre la main sur le domaine ou à obtenir son code de transfert. |
| Le prestataire ou son agence est titulaire | Demandez par écrit un changement de titulaire au profit de votre entreprise, puis le passage sur votre propre compte (sections suivantes). |
| Personne ne répond et l’expiration approche | Écrivez quand même et gardez la preuve de vos envois, demandez au registrar ce qu’il lui faut avant la date d’expiration et surveillez le domaine. |

Si le domaine a été acheté dans un compte de créateur de site, Squarespace ou Wix par exemple, ce compte pèse autant que le domaine : mon guide pour {{< a key="regain-website-access" >}}récupérer son site internet{{< /a >}} explique les transferts de propriété sur ces plateformes.

## Rassembler vos preuves, puis demander par écrit

Une demande appuyée par des documents est plus facile à accepter et plus difficile à ignorer. Le même dossier servira si vous devez ensuite passer par une procédure ou par un avocat.

### Ce qu’il faut rassembler

- les factures, devis, bons de commande ou le contrat qui mentionnent le domaine, ou un forfait site qui l’incluait ;
- les emails ou messages dans lesquels le prestataire proposait de déposer le domaine pour vous ;
- votre extrait Kbis (ou, pour un entrepreneur individuel, votre avis de situation Sirene) et, si vous en avez une, l’enregistrement de votre marque à l’INPI ;
- les preuves que le domaine a servi votre activité : anciennes versions du site sur la Wayback Machine (web.archive.org), adresses email sur le domaine, papier à en-tête, fiche d’établissement Google ;
- une capture datée du Whois.

### L’email, puis la lettre recommandée

Écrivez un email court et factuel, qui demande des actions précises avec une date limite. Si vous devez réellement une facture, réglez-la ou mettez-vous d’accord d’abord : une facture juste coûte moins cher que n’importe quelle procédure, et la régler retire au prestataire son seul argument.

```
Objet : transfert du nom de domaine [votreentreprise.fr] à [Votre Entreprise SAS]

Bonjour [prénom],

Lors de la création de notre site en [mois et année], vous avez enregistré
le nom de domaine [votreentreprise.fr] pour [Votre Entreprise SAS].
Il figure sur la facture [numéro].

Pourriez-vous, d’ici le [date, sous 8 à 15 jours] :

1. changer le titulaire du domaine au profit de [Votre Entreprise SAS,
   SIREN 123 456 789, adresse du siège] ;
2. nous envoyer le code d’autorisation (code de transfert) pour que nous
   le transférions sur notre propre compte registrar ;
3. laisser les enregistrements DNS en l’état jusqu’à la fin du transfert.

Si une somme reste due pour ce domaine, envoyez-moi la facture et je la
réglerai.

Merci d’avance,
[Nom, fonction, téléphone]
```

{{< callout type="tip" >}}**Demandez des actions, pas un débat sur la propriété.** « Merci de changer le titulaire au nom de notre société et de nous envoyer le code de transfert » est une tâche de quelques minutes ; « rendez-nous notre domaine » lance le débat.{{< /callout >}}

Sans réponse, envoyez la même demande en mise en demeure par lettre recommandée avec accusé de réception, ou faites-la envoyer par un avocat : elle date votre demande et montre que l’affaire est sérieuse. Et ne vous connectez pas au compte du prestataire avec un mot de passe que vous connaîtriez : le compte est le sien, et s’en servir sans autorisation peut constituer un accès frauduleux (article 323-1 du Code pénal).

## Reprendre le domaine : les règles du .fr et du .com

### Pour un .fr

Le .fr est géré par l’Afnic et vendu uniquement par des registrars accrédités. Deux opérations vous concernent :

- **le changement de titulaire**, que l’Afnic appelle transmission : il se fait chez le registrar actuel, avec l’accord du titulaire actuel ;
- **le transfert** vers votre registrar : il se fait avec le code d’autorisation (souvent appelé code de transfert), que le registrar actuel fournit au titulaire.

Demandez donc les deux dans le même courrier. Les conditions propres au .fr, par exemple qui peut en être titulaire, sont détaillées dans mon guide du {{< a key="fr-domain-names" >}}nom de domaine .fr{{< /a >}}.

### Pour un .com et les autres extensions génériques

Ces domaines suivent la [politique de transfert de l’ICANN](https://www.icann.org/resources/pages/about-transfer-policy-2017-10-10-en) (en anglais). Deux de ses règles comptent ici :

- **Le code de transfert.** Le registrar doit le fournir au titulaire dans les cinq jours calendaires suivant sa demande, quand le compte ne permet pas de le générer directement. Ce droit appartient au titulaire : si c’est votre entreprise, vous pouvez le demander vous-même.
- **Le verrou de 60 jours.** Un changement de titulaire peut être suivi d’un verrou de 60 jours sur les transferts vers un autre registrar, sauf si le titulaire l’a refusé au préalable, quand le registrar le permet. Le domaine continue de fonctionner pendant ce verrou : vous pouvez le renouveler et modifier ses DNS, mais pas le transférer.

Concrètement, demandez au prestataire de changer le titulaire au nom de votre entreprise, en refusant le verrou si le registrar le propose, puis de vous envoyer le code de transfert. Ou demandez-lui de déplacer le domaine vers un compte à vous chez le même registrar (certains appellent cela un push), et changez de registrar plus tard, à votre rythme.

{{< callout type="note" >}}Le conseil d’administration de l’ICANN a adopté une version révisée de cette politique, avec des verrous plus courts, mais à la date de rédaction (octobre 2026), ce sont toujours les règles ci-dessus qui s’appliquent. Les pages d’aide de votre registrar indiqueront quand les nouvelles prendront le relais.{{< /callout >}}

Les écrans changent d’un registrar à l’autre, mais pas les étapes : mon tutoriel pour {{< a key="transfer-domain-name" >}}transférer un nom de domaine{{< /a >}} les reprend dans l’ordre.

## Garder le site et les emails en ligne pendant le transfert

Déplacer un domaine ne change pas ses serveurs DNS. Mais si ces serveurs appartiennent à l’ancien registrar ou à l’hébergement du prestataire, la zone qu’ils servent peut disparaître une fois le domaine parti ou le compte fermé, et votre site et vos emails avec elle. Avant tout transfert, copiez chaque enregistrement. Depuis n’importe quel ordinateur, un terminal suffit pour interroger les principaux :

```
dig +short votreentreprise.fr NS
dig +short votreentreprise.fr A
dig +short www.votreentreprise.fr CNAME
dig +short votreentreprise.fr MX
dig +short votreentreprise.fr TXT
dig +short _dmarc.votreentreprise.fr TXT
```

Sous Windows, `nslookup -type=MX votreentreprise.fr` donne la même information. Les enregistrements DKIM se trouvent sous un sélecteur, par exemple `google._domainkey` pour Google Workspace ou `selector1._domainkey` pour Microsoft 365 : demandez le vôtre à votre fournisseur de messagerie. Beaucoup d’interfaces DNS savent aussi exporter toute la zone en fichier texte : c’est le plus simple à demander au prestataire.

Recréez les enregistrements là où le DNS sera hébergé avant de changer les serveurs DNS. Mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} explique le rôle de chacun, et le tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} détaille ceux des emails.

## Si le prestataire refuse ou a disparu

Une mise en demeure suffit parfois. Sinon, les recours dépendent de l’extension :

- **Pour un .fr : SYRELI ou PARL EXPERT.** Ces deux procédures, proposées par l’Afnic, sont alternatives (pas cumulables) et reposent sur l’article L.45-2 du Code des postes et des communications électroniques : il faut montrer que le nom porte atteinte à vos droits (une marque, une dénomination sociale…) et que le titulaire n’a pas d’intérêt légitime ou n’agit pas de bonne foi. SYRELI se déroule entièrement en ligne et dure environ deux mois ; PARL EXPERT, qui confie le dossier à un expert indépendant, est souvent conseillée pour les litiges plus complexes. Les deux ont lieu en français et appliquent le droit français. Si la décision vous donne raison, l’Afnic fait passer le domaine à votre nom, comme elle le fait sur décision de justice : son [guide pratique du titulaire](https://www.afnic.fr/wp-media/uploads/2024/07/Afnic-Guide-pratique-du-Titulaire.pdf) détaille ces cas.
- **Pour un .com : l’UDRP.** Cette procédure de l’ICANN est gérée par des centres agréés, dont le Centre d’arbitrage et de médiation de l’OMPI. Il faut montrer que le domaine est identique ou semblable, au point de prêter à confusion, à une marque sur laquelle vous avez des droits, que le titulaire n’a ni droit ni intérêt légitime sur ce nom, et qu’il l’a enregistré et l’utilise de mauvaise foi. Les experts peuvent aussi écarter un dossier qui relève en réalité d’un litige contractuel entre une entreprise et son prestataire : prenez conseil avant de vous lancer.
- **Le juge.** Un tribunal peut ordonner le transfert d’un domaine, souvent dans le cadre d’un litige plus large sur le contrat : c’est le terrain d’un avocat.

Si le prestataire a disparu, les mêmes recours s’appliquent. Gardez la preuve de chaque tentative de contact, à toutes les adresses et à tous les numéros que vous avez : un expert ou un juge voudra la voir.

## Éviter que cela se reproduise

L’essentiel prend dix minutes au moment de l’enregistrement et évite des semaines de démarches :

1. **Enregistrez chaque domaine au nom de votre entreprise**, comme titulaire, avec une adresse email que vous contrôlez et que vous lirez encore dans cinq ans.
2. Ouvrez le compte registrar à votre nom, avec la double authentification, le renouvellement automatique et une carte bancaire encore valide à l’échéance.
3. Donnez à votre prestataire un accès, pas la propriété : plusieurs registrars permettent de partager la gestion d’un domaine sans céder le compte, et les modifications DNS n’en demandent pas plus.
4. Écrivez-le dans le contrat : le domaine est enregistré au nom du client, et tous les accès lui sont remis en fin de mission (c’est l’objet d’une clause de réversibilité).
5. Tenez la liste de vos comptes (registrar, DNS, hébergement, messagerie, créateur de site) et de qui détient chaque identifiant.

Pour choisir où garder vos domaines, mon comparatif pour savoir {{< a key="best-domain-registrar" >}}où acheter un nom de domaine{{< /a >}} passe en revue les six registrars que j’ai utilisés, prix de renouvellement compris.

## Ce que vous pouvez faire vous-même, et quand passer la main

Pour les premières étapes, vous n’avez besoin de personne, pas même de moi. Le Whois, le dossier de preuves et la demande écrite prennent une heure et ne coûtent rien, et un prestataire de bonne volonté peut boucler le reste en quelques jours. Si le prestataire refuse encore après une mise en demeure, la suite est juridique plus que technique, et un avocat vous sera plus utile que moi.

J’interviens sur la partie technique : reprendre le domaine, le passer sur un compte à votre nom, reconstruire les DNS pour que le site et les emails continuent de fonctionner, et vérifier les autres accès que gardait le prestataire. Chez moi, la récupération d’accès est une prestation au forfait, et je réponds aux demandes de dépannage le jour même ou sous 24 heures.

Vos prochaines étapes, dans l’ordre :

1. Faites le Whois et notez le registrar, la date d’expiration, le statut et les serveurs DNS.
2. Identifiez le titulaire.
3. Rassemblez factures, contrat et extrait Kbis.
4. Envoyez la demande écrite, avec une date limite.
5. Copiez les enregistrements DNS avant tout transfert.
6. Une fois le domaine à vous, activez le renouvellement automatique et la double authentification.
