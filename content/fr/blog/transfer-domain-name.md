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

Transférer un nom de domaine, c’est le faire passer chez un autre registrar, l’entreprise qui l’enregistre et le renouvelle pour vous. En pratique : désactivez le verrou de transfert chez le registrar actuel, demandez-lui le code de transfert (code EPP, ou authinfo pour un .fr) et saisissez-le chez le nouveau, qui fait le reste en quelques jours. Ce qui tourne mal, c’est rarement le transfert lui-même, mais les DNS : un domaine qui part sans ses enregistrements peut emporter votre site et vos emails avec lui.

J’ai travaillé avec six registrars, certains par choix, d’autres parce qu’un client y avait déjà son domaine : Google Domains (aujourd’hui Squarespace), Namecheap, Spaceship, Infomaniak, Hostinger et OVHcloud. Les interfaces changent, pas la méthode, car les règles viennent de l’ICANN pour le .com et les autres extensions génériques, et de l’Afnic pour le .fr. Les captures d’écran montrent Spaceship, où j’ai mes habitudes, comme registrar d’arrivée.

Un transfert change l’entreprise à qui vous payez le domaine, rien d’autre : pour afficher un nouveau site, inutile de transférer. Mon guide sur {{< a key="domain-hosting-email-guide" >}}le nom de domaine et l’hébergement{{< /a >}} explique quel service fait quoi.

## Ce que change un transfert de nom de domaine, et ce qu’il ne change pas

Le transfert déplace l’enregistrement du domaine chez un autre registrar (ou bureau d’enregistrement) : le nom, son titulaire et ses enregistrements DNS restent les mêmes. Le mot « transfert » sert aussi pour d’autres opérations ; vérifiez celle dont vous avez besoin :

| Vous voulez… | Ce qu’il faut faire | Est-ce un transfert ? |
|---|---|---|
| Payer une autre entreprise pour le domaine, ou réunir vos domaines dans un seul compte | Un transfert entre registrars | Oui |
| Afficher un nouveau site sur le domaine | Modifier ses enregistrements DNS | Non |
| Céder le domaine à quelqu’un d’autre | Un changement de titulaire | Non |
| Déménager le site ou les boîtes mail | Un nouvel hébergeur ou une nouvelle messagerie | Non |

Les bonnes raisons de transférer : un seul compte et une seule facture pour tous vos domaines, un renouvellement qui a flambé, une interface où vous ne vous retrouvez pas, ou un prestataire que vous quittez. Je ne recommande par exemple ni OVHcloud ni Hostinger aux dirigeants de petites entreprises : je les trouve un peu compliqués à gérer sans équipe technique.

## Avant de commencer : votre nom de domaine peut-il être transféré ?

Pour le .com et les autres extensions génériques, la [politique de transfert de l’ICANN](https://www.icann.org/resources/pages/about-transfer-policy-2017-10-10-en) (en anglais) fixe les conditions. Votre registrar actuel peut, ou doit, refuser le transfert quand :

1. **Le domaine a moins de 60 jours**, ou a été transféré il y a moins de 60 jours.
2. **Le titulaire a changé dans les 60 derniers jours** (nom, organisation ou adresse email), sauf si vous avez refusé ce verrou là où le registrar le propose. Mettez ces informations à jour après le transfert, pas avant.
3. **Le verrou de transfert est activé.** Vous le désactivez vous-même à l’étape 3.
4. **Le domaine fait l’objet d’un litige** (plainte UDRP, décision de justice), ou une période d’enregistrement précédente n’a jamais été payée.

{{< callout type="note" >}}L’ICANN a adopté une version révisée de cette politique, aux verrous plus courts, mais au moment où j’écris (octobre 2026), les règles ci-dessus s’appliquent toujours. La page d’aide de votre registrar indiquera quand les nouvelles prendront le relais.{{< /callout >}}

Le .fr relève de l’Afnic, pas de l’ICANN : ces règles de 60 jours ne le concernent pas (voir sa section plus bas).

### Choisir le nouveau registrar sur son prix de renouvellement

Choisissez la destination d’abord, sur le prix de renouvellement et non sur l’offre de la première année, et vérifiez que le registrar gère votre extension : tous ne vendent pas le .fr.

J’ai mes habitudes chez Spaceship, conçu par Namecheap, et je fais confiance aux deux : prix justes, support joignable 24 h/24, et pas de renouvellement qui triple d’une année sur l’autre, comme j’en ai vu ailleurs. Pour un .fr, en revanche, je n’ai trouvé chez Spaceship ni prix ni page d’aide ; Infomaniak, que je recommande, accepte les transferts de .fr. Mon comparatif {{< a key="best-domain-registrar" >}}où acheter un nom de domaine{{< /a >}} confronte six registrars sur le renouvellement, et {{< a key="spaceship-vs-namecheap" >}}mon avis sur Spaceship{{< /a >}} le compare à Namecheap.

## Comment transférer un nom de domaine, étape par étape

Six étapes, dans un ordre pensé pour garder votre site et vos emails en ligne ; les deux premières se font avant toute demande.

### Étape 1 : vérifier le registrar, l’échéance et le statut du domaine

Cherchez le domaine dans [ICANN Lookup](https://lookup.icann.org/) (pour un .fr, dans le Whois de l’Afnic, sur afnic.fr) et notez quatre informations :

1. **Le registrar.** Si le domaine se trouve dans le compte de quelqu’un d’autre, un ancien prestataire par exemple, commencez par mon guide pour {{< a key="recover-domain-name" >}}récupérer son nom de domaine{{< /a >}}.
2. **La date d’expiration.** Si elle tombe dans quelques jours, renouvelez d’abord : un transfert peut prendre une semaine, 8 jours pour un .fr.
3. **Les statuts.** `clientTransferProhibited` signale le verrou de transfert (étape 3), `serverTransferProhibited` un verrou du registre, à voir avec votre registrar, et `redemptionPeriod` ou `pendingDelete` un domaine expiré, à restaurer avant de partir.
4. **Les serveurs de noms**, qui disent qui gère vos DNS : le registrar que vous quittez, votre hébergeur ou un service comme Cloudflare.

{{< screenshot id="transfer-domain-name-01" alt="Résultat d’ICANN Lookup pour un nom de domaine, avec son registrar, sa date d’expiration, ses statuts et ses serveurs de noms" >}}

### Étape 2 : copier la zone DNS et baisser les TTL

Le transfert déplace l’enregistrement, pas la zone DNS. Si vos serveurs de noms sont ceux du registrar que vous quittez, sa zone répond pendant le transfert mais peut disparaître ensuite, avec votre site et vos emails : copiez-la maintenant.

Recopiez chaque enregistrement de la page DNS de votre registrar actuel dans un fichier texte (type, nom, valeur, priorité et TTL), ou exportez la zone si l’interface le permet. Pour un site sur Squarespace et une messagerie sur Spacemail, la copie ressemble à ceci :

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

Les A et CNAME font fonctionner le site, les MX reçoivent vos emails, et les TXT évitent à vos messages de finir en spam. Oubliez-en un et quelque chose s’arrête, souvent des jours plus tard, quand plus personne ne pense au transfert. Mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} explique chaque type.

Deux précautions avant de continuer :

- **DNSSEC.** S’il est activé et que les DNS vont changer de fournisseur, désactivez-le maintenant et réactivez-le quand les nouveaux serveurs répondent : une signature qui ne correspond plus rend le domaine injoignable.
- **TTL.** La veille de tout changement de serveurs de noms, baissez le TTL de vos enregistrements à 300 secondes (cinq minutes) : les caches oublieront vite les anciennes réponses.

{{< screenshot id="transfer-domain-name-02" alt="Page des enregistrements DNS chez le registrar actuel, avec les enregistrements A, CNAME, MX et TXT et leurs TTL" >}}

### Étape 3 : désactiver le verrou et obtenir le code de transfert

Le code de transfert est un mot de passe propre à chaque domaine, que le nouveau registrar demande pour lancer le transfert. On l’appelle aussi code EPP, code d’autorisation ou AuthCode ; pour un .fr, c’est l’authinfo. Dans les réglages du domaine, chez votre registrar actuel :

1. **Désactivez le verrou de transfert** (ou protection contre le transfert). Quelques registrars, dont Hostinger, demandent aussi de couper la protection Whois : faites-le seulement si leur page d’aide le demande.
2. **Récupérez le code**, affiché à l’écran ou envoyé à l’adresse de contact du domaine. S’il n’apparaît pas dans votre compte, la politique de l’ICANN laisse au registrar cinq jours calendaires pour vous le fournir.

Copiez le code à l’identique (un espace en trop suffit à le faire échouer) et collez-le uniquement dans le formulaire du nouveau registrar. Si vous quittez Hostinger, mon tutoriel pour {{< a key="hostinger-renewal-transfer" >}}transférer un domaine Hostinger{{< /a >}} montre chaque réglage dans hPanel.

{{< screenshot id="transfer-domain-name-03" alt="Réglages du domaine chez le registrar actuel, verrou de transfert désactivé et code de transfert affiché, le code flouté" >}}

### Étape 4 : demander le transfert chez le nouveau registrar

Chez Spaceship, d’après son [guide de transfert](https://www.spaceship.com/knowledgebase/transfer-domain-guide/) (en anglais, comme les libellés cités) :

1. Sur spaceship.com, basculez la recherche de domaines sur **Transfer** et tapez le domaine.
2. Saisissez le code obtenu à l’étape 3.
3. Ajoutez le domaine au panier et payez.

Spaceship demande un domaine déverrouillé, au statut normal (ok ou active) chez le registrar actuel. Avant de payer, si la commande propose de garder les serveurs de noms actuels, gardez-les : vous déplacerez les DNS à votre rythme, à l’étape 6. La protection Whois est incluse gratuitement sur les domaines éligibles.

{{< screenshot id="transfer-domain-name-04" alt="Recherche de domaines de Spaceship basculée sur Transfer, avec le nom de domaine saisi" >}}

{{< screenshot id="transfer-domain-name-05" alt="Commande de transfert chez Spaceship, avec le code de transfert saisi et flouté, avant le paiement" >}}

### Étape 5 : valider le transfert, puis ne plus rien toucher

Surveillez la boîte de l’adresse de contact du domaine : selon les registrars, vous recevrez une demande de validation, un avis de transfert en cours, ou les deux. Répondez-y. Pour un .com, le registrar actuel a ensuite cinq jours pour réagir, et le transfert se fait automatiquement s’il ne dit rien ; pour un .fr, ce délai est de 8 jours.

C’est l’étape la plus difficile, parce qu’il n’y a rien à faire. Pendant le transfert, ne changez ni les serveurs de noms, ni les enregistrements, ni les coordonnées du titulaire, et ne résiliez rien chez l’ancien registrar. Votre site et vos emails continuent d’utiliser la même zone : personne ne remarque rien.

{{< screenshot id="transfer-domain-name-06" alt="Liste des domaines chez Spaceship, avec le transfert entrant et son statut" >}}

### Étape 6 : déplacer les DNS et sécuriser le domaine

Quand le domaine apparaît comme actif dans votre nouveau compte, regardez de nouveau ses serveurs de noms :

- **Ceux de votre hébergeur, ou d’un service DNS comme Cloudflare** : rien à déplacer, la zone n’a jamais été chez l’ancien registrar.
- **Encore ceux de l’ancien registrar** : recréez chaque enregistrement de votre copie chez le nouveau, puis passez à ses serveurs de noms, le jour même : l’ancienne zone ne reste en ligne que tant que l’ancien registrar la garde.
- **Déjà ceux du nouveau registrar** : vérifiez tout de suite que votre copie y est complète, et ajoutez ce qui manque.

Chez Spaceship, tout se règle sur la page **Advanced DNS** : serveurs de noms, enregistrements, DNSSEC et suivi de la propagation. En reconstruisant une zone, attention au point final : certaines interfaces, dont celle d’OVHcloud, l’exigent au bout d’une cible CNAME (`ext-cust.squarespace.com.`), sinon elles y ajoutent votre propre domaine. Avec les domaines OVH et Squarespace, c’est le seul piège que j’aie rencontré.

Testez ensuite : ouvrez le site avec et sans www, envoyez un email à une adresse du domaine, répondez depuis celle-ci, puis interrogez les enregistrements :

```
dig +short votredomaine.fr NS
dig +short votredomaine.fr A
dig +short votredomaine.fr MX
```

Enfin, réactivez le verrou si le nouveau registrar ne l’a pas fait, activez le renouvellement automatique et la double authentification, et remettez les TTL à 3600 après quelques jours sans incident.

{{< screenshot id="transfer-domain-name-07" alt="Page Advanced DNS de Spaceship pour le domaine transféré, avec ses serveurs de noms et les enregistrements copiés depuis l’ancien registrar" >}}

{{< callout type="warning" >}}**L’hébergement et les boîtes mail achetés chez l’ancien registrar ne suivent pas le domaine.** Si votre site ou vos emails y sont hébergés, gardez ces services jusqu’à ce que leur remplaçant fonctionne et que les enregistrements pointent vers lui. Résiliez les anciens services en dernier.{{< /callout >}}

## Transférer un nom de domaine .fr : l’authinfo et les règles de l’Afnic

Le .fr est géré par l’Afnic, qui ne vend rien au public : vous passez d’un registrar accrédité à un autre, selon les six étapes ci-dessus, avec trois différences :

1. **Le code s’appelle authinfo.** Votre registrar actuel le génère et vous le remet gratuitement, précise l’Afnic ; le transfert, lui, est facturé par le nouveau registrar. Ne le confondez pas avec le « code d’autorisation » au sens de l’Afnic, qu’elle délivre elle-même pour des opérations particulières, pas pour un transfert ordinaire.
2. **Le registrar sortant a 8 jours.** Le nouveau registrar dépose la demande, le sortant en est averti et, s’il ne se passe rien entre-temps, le transfert se fait au bout de 8 jours.
3. **Les délais de 60 jours de l’ICANN ne s’appliquent pas**, mais votre contrat, si : relisez les conditions générales du registrar actuel avant de partir, surtout si le domaine est lié à un hébergement.

Le transfert ne change pas le titulaire. Céder le domaine est une autre opération, la transmission, demandée au registrar avec l’accord du titulaire actuel. Mon guide sur le {{< a key="fr-domain-names" >}}nom de domaine .fr{{< /a >}} présente les conditions de l’Afnic, et le [guide pratique du titulaire](https://www.afnic.fr/wp-media/uploads/2024/07/Afnic-Guide-pratique-du-Titulaire.pdf) de l’Afnic détaille les autres opérations.

## Quitter Squarespace Domains (ex-Google Domains)

Google a vendu son activité de noms de domaine à Squarespace : la vente, annoncée le 15 juin 2023, a été finalisée le 7 septembre 2023, puis les clients ont basculé dans les mois suivants. Google Domains faisant partie des registrars que j’ai utilisés, j’ai vécu ce changement côté client.

Si votre site est sur Squarespace, y garder le domaine reste le plus simple, et rien ne vous oblige à partir. Pour réunir vos domaines ailleurs, des guides tiers décrivent ainsi le côté Squarespace (les libellés peuvent changer) :

1. Dans le tableau de bord **Domains** de Squarespace, ouvrez le domaine et désactivez **Domain Lock** : Squarespace verrouille ses domaines par défaut.
2. Demandez le code de transfert : selon les guides, il s’affiche à l’écran ou arrive par email, parfois sous 24 heures.
3. Lancez le transfert chez le nouveau registrar (étape 4), puis validez-le par email ou dans votre compte Squarespace.

Deux précautions propres à ce cas :

- **Si le site reste sur Squarespace**, la zone chez le nouveau registrar doit contenir ses enregistrements : les quatre A, le CNAME www et le CNAME de vérification. Mon tutoriel pour {{< a key="spaceship-domain-dns-tutorial" >}}configurer ses DNS sur Spaceship{{< /a >}} les ajoute un par un.
- **Si votre messagerie tourne sur Google Workspace**, copiez aussi ses enregistrements MX, SPF et DKIM : Workspace ne dépend pas du registrar, mais il cesse de recevoir des emails dès qu’ils disparaissent.

{{< screenshot id="transfer-domain-name-08" alt="Tableau de bord Domains de Squarespace pour le domaine, avec Domain Lock désactivé et le code de transfert demandé" >}}

## Combien de temps prend un transfert de nom de domaine, et combien il coûte

| | .com et autres extensions génériques | .fr |
|---|---|---|
| Ce qui le déclenche | Le code EPP | L’authinfo |
| Date au plus tôt | 60 jours après la création, un transfert ou un changement de titulaire | Pas de délai de l’ICANN : vérifiez le contrat de votre registrar |
| Durée | Une semaine environ : le registrar actuel a cinq jours pour répondre | 8 jours au plus : le registrar sortant a ce délai pour réagir |
| Prix | En général un an d’enregistrement, ajouté au temps restant | Fixé par le nouveau registrar : demandez s’il inclut un an |

Pour un .com, l’année payée n’est pas perdue : l’expiration est repoussée d’un an, et Spaceship, par exemple, conserve le temps restant. Transférer quelques semaines avant l’échéance vous fait donc payer l’année suivante au prix du nouveau registrar ; évitez seulement la dernière semaine, au cas où le transfert serait retardé.

Pour un .fr, je n’ai pas trouvé de règle de l’Afnic sur ce point : demandez au nouveau registrar ce que comprend son prix, puis contrôlez la date d’expiration dans le Whois une fois le domaine arrivé.

## Quand un transfert échoue : les causes habituelles

| Ce qui se passe | Cause probable | Que faire |
|---|---|---|
| Le nouveau registrar refuse la demande tout de suite | Le verrou de transfert est encore actif, ou un verrou du registre | Désactivez-le, vérifiez le statut dans le Whois, puis recommencez ; pour un verrou du registre, interrogez votre registrar |
| « Code invalide » | Une faute de frappe, un espace en trop ou un ancien code | Copiez-le de nouveau, ou demandez-en un nouveau |
| En attente depuis des jours | Un email de validation est resté sans réponse | Cherchez les emails des deux registrars, spams compris |
| Refus du registrar actuel | Une période impayée, un litige, ou le titulaire du compte s’y oppose | Demandez-lui la raison ; si le compte n’est pas le vôtre, suivez le guide de récupération cité à l’étape 1 |

## Votre checklist, et quand passer la main

Avant de considérer le transfert comme terminé :

1. Le domaine a plus de 60 jours (pour un .com), son titulaire n’a pas changé récemment et il n’est pas sur le point d’expirer.
2. Le nouveau registrar est choisi sur son prix de renouvellement et gère votre extension.
3. Chaque enregistrement DNS est copié, DNSSEC est réglé, et les TTL ont été baissés la veille.
4. Le verrou est désactivé et vous avez le code (EPP ou authinfo).
5. Le transfert est payé, les serveurs de noms actuels conservés et les emails de validation traités.
6. La zone est reconstruite là où pointent les serveurs de noms, le site et les emails testés.
7. Verrou, renouvellement automatique et double authentification sont activés chez le nouveau registrar, et les anciens services sont résiliés en dernier.

Pour un transfert classique, vous n’avez besoin de personne : un réglage, un code et quelques jours d’attente. Passez la main quand une erreur coûterait plus cher que l’opération : le domaine est dans un compte que vous ne pouvez pas ouvrir, vos emails reposent sur des enregistrements que personne ne sait expliquer, ou le site déménage en même temps. Relier le domaine est la dernière étape de chaque {{< a page="/services/websites" >}}projet de site{{< /a >}} que je livre, et si un transfert a déjà coupé un site ou une messagerie, je réponds aux demandes de dépannage le jour même ou sous 24 heures.
