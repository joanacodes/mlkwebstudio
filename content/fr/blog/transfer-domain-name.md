---
title: "Transférer un nom de domaine chez un autre registrar : la méthode pas à pas"
seo_title: "Transférer un nom de domaine .fr ou .com sans coupure"
description: "Transférer un nom de domaine sans couper site ni emails : verrou de transfert, code EPP ou authinfo, DNS à copier d’abord. Méthode pour le .fr et le .com."
slug: "transferer-nom-de-domaine"
translationKey: "transfer-domain-name"
date: 2026-10-17T08:54:00+02:00
lastmod: 2026-10-17T08:54:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["transférer un nom de domaine", "transfert de nom de domaine", "code de transfert nom de domaine", "transférer un nom de domaine .fr", "code EPP", "changer de registrar"]
summary: "Pour transférer un nom de domaine, copiez d’abord sa zone DNS, désactivez le verrou de transfert chez le registrar actuel, demandez-lui le code de transfert (code EPP, ou authinfo pour un .fr) et saisissez-le chez le nouveau registrar. Un .com arrive en une semaine environ et gagne en général un an ; un .fr, en 8 jours au plus. Gardez les mêmes serveurs de noms jusqu’à la fin du transfert : votre site et vos emails restent en ligne."
cover: "transfer-domain-name"
cover_alt: "Un homme devant un ordinateur, à côté d’un schéma de flux et de l’inscription Registrar A vers B"
related: ["fr-domain-names", "hostinger-renewal-transfer", "best-domain-registrar", "recover-domain-name", "dns-records-explained"]
services: ["rescue"]
faq:
  - q: "Transférer un nom de domaine a-t-il un impact sur le référencement ?"
    a: "Non. Google voit le domaine et le site, pas l’entreprise à qui vous payez l’enregistrement. Le référencement ne souffre que si le site tombe ou si les DNS cassent pendant l’opération : c’est pour cela que l’on copie la zone DNS avant tout."
  - q: "Peut-on transférer un nom de domaine expiré ?"
    a: "Souvent, tant qu’il n’est pas entré dans la phase de rédemption qui précède sa suppression. Spaceship, par exemple, accepte les domaines expirés, sauf en rédemption. Dans ce cas, restaurez d’abord le domaine chez votre registrar actuel, puis transférez-le."
  - q: "Peut-on déplacer un domaine vers un autre compte chez le même registrar ?"
    a: "En général, oui. Beaucoup de registrars proposent un déplacement de compte à compte, souvent appelé « push », qui laisse le domaine où il est. Ce n’est pas un transfert entre registrars : pas de code, pas d’année ajoutée. Cherchez l’option dans l’aide de votre registrar."
  - q: "Peut-on annuler un transfert de nom de domaine en cours ?"
    a: "Tant qu’il est en attente, souvent oui : le message du registrar actuel contient parfois un lien pour le refuser, et le nouveau registrar peut annuler la commande. Une fois le transfert terminé, le seul retour possible est un nouveau transfert, qu’un registrar peut refuser pendant 60 jours pour un .com."
  - q: "Est-ce risqué de communiquer son code de transfert ?"
    a: "Donnez-le uniquement au registrar d’arrivée, dans son formulaire de transfert. Qui détient ce code peut demander le transfert de votre domaine : gardez-le hors des emails et des documents partagés. S’il a pu fuiter, demandez-en un nouveau et laissez le verrou activé jusqu’au jour du transfert."
---

Transférer un nom de domaine, c’est le faire passer chez un autre registrar, l’entreprise qui l’enregistre et le renouvelle pour vous. La méthode tient en une phrase : désactivez le verrou de transfert chez le registrar actuel, demandez-lui le code de transfert (code EPP, ou authinfo pour un .fr) et saisissez-le chez le nouveau, qui fait le reste en quelques jours. Ce qui tourne mal, c’est rarement le transfert lui-même. Ce sont les DNS : un domaine qui part sans ses enregistrements peut emporter votre site et vos emails avec lui.

J’ai travaillé avec six registrars, certains par choix, d’autres parce que le domaine d’un client s’y trouvait déjà : Google Domains (aujourd’hui Squarespace), Namecheap, Spaceship, Infomaniak, Hostinger et OVHcloud. Leurs interfaces ne se ressemblent pas, mais la méthode reste la même, parce que les règles viennent d’au-dessus : celles de l’ICANN pour le .com et les autres extensions génériques, celles de l’Afnic pour le .fr. Les captures d’écran montrent Spaceship, où j’ai mes habitudes, dans le rôle du registrar d’arrivée.

Une précision d’abord : un transfert change l’entreprise à qui vous payez le domaine, rien d’autre. Pour afficher un nouveau site sur votre domaine, inutile de le transférer ; mon guide sur {{< a key="domain-hosting-email-guide" >}}le nom de domaine et l’hébergement{{< /a >}} explique quel service fait quoi.

## Ce que change un transfert de nom de domaine, et ce qu’il ne change pas

Un registrar, ou bureau d’enregistrement, est l’entreprise par laquelle un nom de domaine est enregistré puis renouvelé. Le transfert déplace cet enregistrement chez un autre registrar : le nom, son titulaire et ses enregistrements DNS restent les mêmes. Le mot « transfert » sert aussi pour d’autres opérations, alors vérifiez celle dont vous avez besoin :

| Vous voulez… | Ce qu’il faut faire | Est-ce un transfert ? |
|---|---|---|
| Payer une autre entreprise pour le domaine, ou réunir vos domaines dans un seul compte | Un transfert entre registrars | Oui, c’est l’objet de ce tutoriel |
| Afficher un nouveau site sur le domaine | Modifier les enregistrements DNS là où pointent les serveurs de noms | Non |
| Céder le domaine à une autre personne ou entreprise | Un changement de titulaire, chez le registrar actuel | Non |
| Déménager le site ou les boîtes mail | Un nouvel hébergeur ou une nouvelle messagerie | Non, ils déménagent à part |

Les bonnes raisons de transférer : un seul compte et une seule facture pour tous vos domaines, un renouvellement qui a flambé, une interface où vous ne vous retrouvez pas, ou un prestataire que vous quittez. Je ne recommande ni OVHcloud ni Hostinger aux dirigeants de petites entreprises, par exemple, parce que je les trouve un peu compliqués à gérer sans équipe technique. Économiser un euro par an sur un domaine qui fonctionne n’est pas une bonne raison : vous y perdrez un après-midi pour rien.

## Avant de commencer : votre nom de domaine peut-il être transféré ?

Pour le .com, le .net, le .org et les autres extensions génériques, la [politique de transfert de l’ICANN](https://www.icann.org/resources/pages/about-transfer-policy-2017-10-10-en) (en anglais) fixe les conditions. Votre registrar actuel peut, ou doit, refuser le transfert quand :

1. **Le domaine a moins de 60 jours**, ou a été transféré il y a moins de 60 jours.
2. **Le titulaire a changé dans les 60 derniers jours.** Un changement de titulaire (nom, organisation ou adresse email) peut bloquer les transferts pendant 60 jours, sauf si vous avez refusé ce verrou là où le registrar le propose. Mettez ces informations à jour après le transfert, pas avant.
3. **Le verrou de transfert est activé.** Vous le désactivez vous-même à l’étape 3.
4. **Le domaine fait l’objet d’un litige**, par une plainte UDRP ou une décision de justice, ou une période d’enregistrement précédente n’a jamais été payée.

{{< callout type="note" >}}L’ICANN a adopté une version révisée de cette politique, avec des verrous plus courts, mais au moment où j’écris (octobre 2026), les règles ci-dessus s’appliquent toujours. Consultez la page d’aide de votre registrar avant de commencer : elle indiquera quand les nouvelles règles prendront le relais.{{< /callout >}}

Le .fr relève de l’Afnic, pas de l’ICANN : ces règles de 60 jours ne le concernent pas, et il a sa propre section plus bas.

### Choisir le nouveau registrar sur son prix de renouvellement

Choisissez la destination avant de toucher à quoi que ce soit. Regardez le prix que vous paierez chaque année à partir de maintenant, pas l’offre de la première année, et vérifiez que le registrar gère votre extension : tous ne vendent pas le .fr.

Mes habitudes sont chez Spaceship, conçu par Namecheap, et je fais confiance aux deux : leurs prix sont justes, leur support répond 24 h/24, et je ne les ai jamais vus tripler un prix au renouvellement, comme je l’ai vu ailleurs. Pour un .fr, en revanche, je n’ai trouvé chez Spaceship ni prix ni page d’aide : vérifiez dans sa recherche avant de compter dessus. Infomaniak, que je recommande, accepte les transferts de .fr. Mon comparatif {{< a key="best-domain-registrar" >}}où acheter un nom de domaine{{< /a >}} confronte six registrars sur le prix de renouvellement, et {{< a key="spaceship-vs-namecheap" >}}mon avis sur Spaceship{{< /a >}} explique ce qui le distingue de Namecheap.

## Comment transférer un nom de domaine, étape par étape

Six étapes, dans un ordre pensé pour garder votre site et vos emails en ligne du début à la fin. Les deux premières se font avant toute demande.

### Étape 1 : vérifier le registrar, l’échéance et le statut du domaine

Cherchez le domaine dans [ICANN Lookup](https://lookup.icann.org/) (pour un .fr, dans le Whois de l’Afnic, sur afnic.fr) et notez quatre informations :

1. **Le registrar.** Vérifiez que le domaine se trouve bien là où vous le pensez. S’il est dans le compte de quelqu’un d’autre, celui d’un ancien prestataire par exemple, commencez par mon guide pour {{< a key="recover-domain-name" >}}récupérer son nom de domaine{{< /a >}}.
2. **La date d’expiration.** Si elle tombe dans quelques jours, renouvelez d’abord : un transfert peut prendre une semaine, 8 jours pour un .fr.
3. **Les statuts.** `clientTransferProhibited` est le verrou de transfert, que vous désactiverez à l’étape 3. `serverTransferProhibited` est un verrou posé par le registre : interrogez votre registrar. `redemptionPeriod` ou `pendingDelete` signifie que le domaine a expiré et doit être restauré avant de partir.
4. **Les serveurs de noms.** Ils indiquent qui répond aujourd’hui pour vos DNS : le registrar que vous quittez, votre hébergeur ou un service comme Cloudflare.

{{< screenshot id="transfer-domain-name-01" alt="Résultat d’ICANN Lookup pour un nom de domaine, avec son registrar, sa date d’expiration, ses statuts et ses serveurs de noms" >}}

### Étape 2 : copier la zone DNS et baisser les TTL

Le transfert déplace l’enregistrement, pas la zone DNS. Si vos serveurs de noms appartiennent au registrar que vous quittez, sa zone continue de répondre pendant le transfert, mais elle peut disparaître une fois le domaine parti, et votre site et vos emails avec elle. Copiez-la donc maintenant.

Ouvrez la page DNS de votre registrar actuel et recopiez chaque enregistrement dans un fichier texte : type, nom, valeur, priorité et TTL. Beaucoup d’interfaces exportent la zone entière dans un fichier, ce qui est encore mieux. Pour une petite entreprise dont le site est sur Squarespace et la messagerie sur Spacemail, la copie ressemble à ceci :

```
A      @                     198.185.159.144
A      @                     198.185.159.145
A      @                     198.49.23.144
A      @                     198.49.23.145
CNAME  www                   ext-cust.squarespace.com.
CNAME  [votre-code]          verify.squarespace.com.
MX     @                     0 mx1.spacemail.com.
MX     @                     0 mx2.spacemail.com.
TXT    @                     "v=spf1 include:spf.spacemail.com ~all"
TXT    spacemail._domainkey  "v=DKIM1; k=rsa; p=MIIBIjANB..."
TXT    _dmarc                "v=DMARC1; p=none; rua=mailto:dmarc@votredomaine.fr"
```

Les enregistrements A et CNAME font fonctionner le site, les MX reçoivent vos emails, et les TXT évitent à vos messages de finir en spam. Oubliez-en un et quelque chose s’arrête, souvent quelques jours plus tard, quand plus personne ne pense au transfert. Mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} explique chaque type.

Deux précautions avant de continuer :

- **DNSSEC.** S’il est activé et que les DNS vont changer de fournisseur, désactivez-le maintenant, puis réactivez-le quand les nouveaux serveurs de noms répondent. Une signature qui ne correspond plus rend le domaine injoignable.
- **TTL.** La veille de tout changement de serveurs de noms, baissez le TTL de vos enregistrements à 300 secondes (cinq minutes) si votre interface le permet : le jour du changement, les caches oublieront vite les anciennes réponses.

{{< screenshot id="transfer-domain-name-02" alt="Page des enregistrements DNS chez le registrar actuel, avec les enregistrements A, CNAME, MX et TXT et leurs TTL" >}}

### Étape 3 : désactiver le verrou et obtenir le code de transfert

Le code de transfert est un mot de passe propre à chaque domaine : le nouveau registrar en a besoin pour demander le transfert. Selon les registrars, il s’appelle code EPP, code d’autorisation ou AuthCode ; pour un .fr, c’est l’authinfo. Chez votre registrar actuel, ouvrez les réglages du domaine, puis :

1. **Désactivez le verrou de transfert**, parfois appelé protection contre le transfert ou verrouillage du domaine. Quelques registrars, dont Hostinger, demandent aussi de désactiver la protection Whois : faites-le seulement si leur page d’aide le demande.
2. **Récupérez le code.** Selon le registrar, il s’affiche à l’écran ou arrive par email à l’adresse de contact du domaine. Si vous ne pouvez pas l’obtenir vous-même dans votre compte, la politique de l’ICANN laisse au registrar cinq jours calendaires pour vous le fournir.

Copiez le code à l’identique : il mélange lettres, chiffres et symboles, et un espace en trop suffit à le faire échouer. Collez-le uniquement dans le formulaire du nouveau registrar. Si vous quittez Hostinger, mon tutoriel pour {{< a key="hostinger-renewal-transfer" >}}transférer un domaine Hostinger{{< /a >}} montre où se trouve chaque réglage dans hPanel.

{{< screenshot id="transfer-domain-name-03" alt="Réglages du domaine chez le registrar actuel, verrou de transfert désactivé et code de transfert affiché, le code flouté" >}}

### Étape 4 : demander le transfert chez le nouveau registrar

Voici la version Spaceship, tirée de son [guide de transfert vers Spaceship](https://www.spaceship.com/knowledgebase/transfer-domain-guide/) (en anglais) ; je cite les libellés de l’interface en anglais :

1. Sur spaceship.com, basculez la recherche de domaines sur **Transfer** et tapez le domaine. Plusieurs domaines peuvent partir ensemble, saisis à la main ou importés dans un fichier CSV.
2. Saisissez le code obtenu à l’étape 3.
3. Ajoutez le domaine au panier et payez.

Le guide de Spaceship demande un domaine déverrouillé, au statut normal (ok ou active) chez le registrar actuel : c’est pour cela que le verrou saute en premier. Les autres registrars ont les mêmes champs sous d’autres noms. Avant de payer, vérifiez deux points :

- **Les serveurs de noms.** Si la commande propose de garder les serveurs actuels, gardez-les : vous déplacerez les DNS à votre rythme, à l’étape 6.
- **La confidentialité et le renouvellement.** Spaceship inclut gratuitement la protection Whois sur les domaines éligibles. Activez le renouvellement automatique dès l’arrivée du domaine.

{{< screenshot id="transfer-domain-name-04" alt="Recherche de domaines de Spaceship basculée sur Transfer, avec le nom de domaine saisi" >}}

{{< screenshot id="transfer-domain-name-05" alt="Commande de transfert chez Spaceship, avec le code de transfert saisi et flouté, avant le paiement" >}}

### Étape 5 : valider le transfert, puis ne plus rien toucher

Surveillez la boîte de l’adresse de contact du domaine. Selon les deux registrars, vous recevrez une demande de validation, un avis de transfert en cours, ou les deux, parfois avec un lien pour accélérer l’opération. Répondez-y. Pour un .com, le registrar actuel a ensuite cinq jours pour réagir, et le transfert se fait automatiquement s’il ne dit rien ; pour un .fr, ce délai est de 8 jours.

C’est l’étape la plus difficile, parce qu’il n’y a rien à faire. Pendant le transfert, ne changez ni les serveurs de noms, ni les enregistrements, ni les coordonnées du titulaire, et ne résiliez rien chez l’ancien registrar. Votre site et vos emails continuent d’utiliser la même zone : personne ne remarque quoi que ce soit.

{{< screenshot id="transfer-domain-name-06" alt="Liste des domaines chez Spaceship, avec le transfert entrant et son statut" >}}

### Étape 6 : déplacer les DNS et sécuriser le domaine

Quand le domaine apparaît comme actif dans votre nouveau compte, regardez de nouveau ses serveurs de noms :

- **Ceux de votre hébergeur, ou d’un service DNS comme Cloudflare** : rien à déplacer, la zone n’a jamais été chez l’ancien registrar.
- **Encore ceux de l’ancien registrar** : recréez chaque enregistrement de votre copie chez le nouveau, puis passez à ses serveurs de noms. Faites-le le jour même : l’ancienne zone ne reste en ligne que tant que l’ancien registrar la conserve.
- **Déjà ceux du nouveau registrar** : vérifiez tout de suite que chaque enregistrement de votre copie s’y trouve, et ajoutez ceux qui manquent.

Chez Spaceship, tout se règle sur la page **Advanced DNS** : serveurs de noms, enregistrements, DNSSEC et un outil qui suit la propagation. Attention à un détail quand vous reconstruisez une zone : certaines interfaces, dont celle d’OVHcloud, exigent un point final au bout d’une cible CNAME (`ext-cust.squarespace.com.`), sinon elles y ajoutent votre propre domaine. Avec les domaines OVH et Squarespace, ce point final est le seul piège que j’aie rencontré.

Testez ensuite : ouvrez le site avec et sans www, envoyez un email à une adresse du domaine et répondez depuis celle-ci, puis interrogez directement les enregistrements :

```
dig +short votredomaine.fr NS
dig +short votredomaine.fr A
dig +short votredomaine.fr MX
```

Enfin, réactivez le verrou de transfert si le nouveau registrar ne l’a pas fait, activez le renouvellement automatique et la double authentification sur le nouveau compte, et remettez les TTL à 3600 après quelques jours sans incident.

{{< screenshot id="transfer-domain-name-07" alt="Page Advanced DNS de Spaceship pour le domaine transféré, avec ses serveurs de noms et les enregistrements copiés depuis l’ancien registrar" >}}

{{< callout type="warning" >}}**L’hébergement et les boîtes mail achetés chez l’ancien registrar ne suivent pas le domaine.** Si votre site ou vos emails y sont hébergés, continuez à payer jusqu’à ce que leur remplaçant fonctionne et que les enregistrements pointent vers le nouveau service. Résiliez les anciens services en dernier.{{< /callout >}}

## Transférer un nom de domaine .fr : l’authinfo et les règles de l’Afnic

Le .fr est géré par l’Afnic, qui ne vend rien au public : vous passez toujours d’un registrar accrédité à un autre. La méthode reste celle des six étapes, avec trois différences :

1. **Le code s’appelle authinfo.** Votre registrar actuel le génère et vous le remet ; l’Afnic précise que l’obtenir est gratuit. Le transfert, lui, est facturé par le nouveau registrar, à ses propres tarifs. Ne le confondez pas avec le « code d’autorisation » au sens de l’Afnic, qu’elle délivre elle-même pour des opérations particulières soumises à vérification, pas pour un transfert ordinaire.
2. **Le registrar sortant a 8 jours.** Le nouveau registrar dépose la demande, le registrar sortant en est averti et, s’il ne se passe rien dans les 8 jours, le transfert se fait à la fin de ce délai. Infomaniak annonce d’ailleurs jusqu’à 8 jours pour un .fr.
3. **Les délais de 60 jours de l’ICANN ne s’appliquent pas**, mais votre contrat, si. Relisez les conditions générales de votre registrar actuel avant de partir, surtout si le domaine est lié à d’autres services, comme un hébergement.

Le transfert ne change pas le titulaire : le domaine reste à votre nom. Le céder à quelqu’un d’autre est une autre opération, la transmission, qui se demande au registrar avec l’accord du titulaire actuel. Mon guide sur le {{< a key="fr-domain-names" >}}nom de domaine .fr{{< /a >}} présente les conditions de l’Afnic, et le [guide pratique du titulaire](https://www.afnic.fr/wp-media/uploads/2024/07/Afnic-Guide-pratique-du-Titulaire.pdf) de l’Afnic détaille les autres opérations.

Si vous avez aussi un .co.uk, il n’a pas de code : votre registrar actuel remplace son « IPS tag », l’identifiant du registrar chez Nominet, par celui du nouveau (`SPACESHIP` pour Spaceship), puis vous suivez les instructions du nouveau registrar.

## Quitter Squarespace Domains (ex-Google Domains)

Google a vendu son activité de noms de domaine à Squarespace : la vente, annoncée le 15 juin 2023, a été finalisée le 7 septembre 2023, et les clients ont basculé chez Squarespace dans les mois qui ont suivi. Google Domains fait partie des registrars que j’ai utilisés : j’ai vécu ce changement côté client.

Si votre site est sur Squarespace, garder le domaine chez Squarespace reste le plus simple, et rien ne vous oblige à partir. Si vous voulez réunir vos domaines au même endroit, la méthode est celle décrite plus haut. Des guides tiers décrivent ainsi le côté Squarespace (les libellés peuvent changer : fiez-vous à votre écran) :

1. Dans le tableau de bord **Domains** de Squarespace, ouvrez le domaine et désactivez **Domain Lock** : Squarespace verrouille ses domaines par défaut.
2. Demandez le code de transfert. Les guides ne s’accordent pas sur la suite : il s’affiche à l’écran ou arrive par email, parfois sous 24 heures. Vérifiez les deux.
3. Lancez le transfert chez le nouveau registrar (étape 4), puis validez-le par email ou dans votre compte Squarespace.

Deux précautions propres à ce cas :

- **Si le site reste sur Squarespace**, le transfert ne le touche pas, mais la zone chez le nouveau registrar doit contenir les enregistrements de Squarespace : les quatre enregistrements A, le CNAME www et le CNAME de vérification. Mon tutoriel pour {{< a key="spaceship-domain-dns-tutorial" >}}configurer ses DNS sur Spaceship{{< /a >}} les ajoute un par un.
- **Si votre messagerie tourne sur Google Workspace**, copiez aussi ses enregistrements MX, SPF et DKIM. Workspace ne dépend pas du registrar, mais il cesse de recevoir des emails dès que ces enregistrements disparaissent.

{{< screenshot id="transfer-domain-name-08" alt="Tableau de bord Domains de Squarespace pour le domaine, avec Domain Lock désactivé et le code de transfert demandé" >}}

## Combien de temps prend un transfert de nom de domaine, et combien il coûte

| | .com et autres extensions génériques | .fr |
|---|---|---|
| Ce qui le déclenche | Le code EPP | L’authinfo |
| Date au plus tôt | 60 jours après la création, un transfert ou un changement de titulaire | Pas de délai de l’ICANN : vérifiez le contrat de votre registrar |
| Durée | Une semaine environ : le registrar actuel a cinq jours pour répondre | 8 jours au plus : le registrar sortant a ce délai pour réagir |
| Prix | En général un an d’enregistrement, ajouté au temps restant | Fixé par le nouveau registrar : demandez s’il inclut un an |

Pour un .com, l’année comprise dans le prix du transfert n’est pas perdue : la date d’expiration est repoussée d’un an, et Spaceship, par exemple, indique que le temps restant est conservé. Les semaines qui précèdent l’échéance sont donc un bon moment pour transférer : vous payez l’année suivante au prix du nouveau registrar, et non à celui de l’ancien. Ne vous y prenez pas la dernière semaine, au cas où le transfert serait retardé.

Pour un .fr, je n’ai pas trouvé de règle de l’Afnic sur ce point : demandez au nouveau registrar ce que comprend son prix, puis contrôlez la date d’expiration dans le Whois une fois le domaine arrivé.

## Quand un transfert échoue : les causes habituelles

| Ce qui se passe | Cause probable | Que faire |
|---|---|---|
| Le nouveau registrar refuse la demande tout de suite | Le verrou de transfert est encore actif, ou un verrou du registre | Désactivez-le, vérifiez le statut dans le Whois, puis recommencez ; pour un verrou du registre, interrogez votre registrar |
| « Code invalide » | Une faute de frappe, un espace en trop ou un ancien code | Copiez-le de nouveau, ou demandez-en un nouveau |
| Refus à cause de la date (.com) | Création, transfert ou changement de titulaire il y a moins de 60 jours | Attendez la date : le domaine fonctionne normalement en attendant |
| En attente depuis des jours | Un email de validation est resté sans réponse | Cherchez les messages des deux registrars dans votre boîte de réception et vos spams |
| Refus du registrar actuel | Une période impayée, un litige, ou le titulaire du compte s’y oppose | Demandez-lui la raison ; si le compte n’est pas le vôtre, suivez le guide de récupération cité à l’étape 1 |

## Votre checklist, et quand passer la main

Avant de considérer le transfert comme terminé :

1. Le domaine a plus de 60 jours (pour un .com), son titulaire n’a pas changé récemment et il n’est pas sur le point d’expirer.
2. Le nouveau registrar est choisi sur son prix de renouvellement et gère votre extension.
3. Chaque enregistrement DNS est copié, DNSSEC est réglé, et les TTL ont été baissés la veille.
4. Le verrou est désactivé et vous avez le code (EPP ou authinfo).
5. Le transfert est payé avec les serveurs de noms actuels conservés, et les emails de validation ont reçu une réponse.
6. La zone est reconstruite là où pointent les serveurs de noms, et le site comme les emails sont testés.
7. Verrou, renouvellement automatique et double authentification sont activés chez le nouveau registrar, et les anciens services sont résiliés en dernier.

Pour un transfert classique, vous n’avez besoin de personne : un réglage, un code et quelques jours d’attente. Passez la main quand une erreur coûterait plus cher que l’opération : le domaine est dans un compte que vous ne pouvez pas ouvrir, vos emails reposent sur des enregistrements que personne ne sait expliquer, ou le site déménage en même temps. Relier le domaine est la dernière étape de chaque {{< a page="/services/websites" >}}projet de site{{< /a >}} que je livre, et si un transfert a déjà coupé un site ou une messagerie, je réponds aux demandes de dépannage le jour même ou sous 24 heures.
