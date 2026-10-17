---
title: "Zone DNS OVH : relier votre domaine à Squarespace sans le piège du point final"
seo_title: "Zone DNS OVH : relier son domaine à Squarespace (tuto)"
description: "Zone DNS OVH : les entrées à supprimer, les quatre A et le CNAME www de Squarespace, et le point final sans lequel OVH ajoute votre domaine à la cible."
slug: "zone-dns-ovh-squarespace"
translationKey: "ovh-dns-squarespace"
date: 2026-10-17T08:30:00+02:00
lastmod: 2026-10-17T08:30:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["zone DNS OVH", "relier domaine OVH Squarespace", "CNAME OVH point final", "enregistrements DNS Squarespace", "connecter nom de domaine Squarespace"]
summary: "Pour relier un domaine OVH à Squarespace, lancez la connexion dans le panneau Domaines de Squarespace, puis ouvrez la zone DNS OVH (Web Cloud > Noms de domaine > Zone DNS) : supprimez l’AAAA de la racine et les A, AAAA ou TXT de www, réglez quatre enregistrements A sur les adresses de Squarespace et ajoutez deux CNAME (www et vérification). Terminez chaque cible CNAME par un point, comme ext-cust.squarespace.com., sinon OVH y ajoute votre domaine et la connexion échoue."
cover: "ovh-dns-squarespace"
cover_alt: "Enregistrements de la zone DNS OVH qui relient un domaine à Squarespace"
related: ["dns-records-explained", "namecheap-dns-squarespace", "squarespace-tutorial", "transfer-domain-name", "web-hosting-comparison"]
services: ["websites"]
faq:
  - q: "Faut-il changer les serveurs DNS pour relier un domaine OVH à Squarespace ?"
    a: "Non. Squarespace connecte les domaines tiers avec des enregistrements DNS : le domaine garde les serveurs DNS d’OVHcloud et vous ajoutez les enregistrements dans sa zone DNS chez OVH."
  - q: "Mes emails chez OVH vont-ils continuer à fonctionner ?"
    a: "Oui, tant que vous gardez les enregistrements MX et les TXT de la messagerie (SPF, DKIM, DMARC). Squarespace n’utilise que les A de la racine et deux CNAME, qui occupent d’autres lignes de la zone."
  - q: "Peut-on relier un sous-domaine OVH à Squarespace ?"
    a: "Oui. L’aide de Squarespace indique de choisir Autre (Other) dans la liste des fournisseurs, même si le vôtre y figure, et un sous-domaine n’a besoin que d’enregistrements CNAME : chez OVH, leur cible prend elle aussi le point final. La ligne www des réglages DNS de Squarespace reste alors introuvable, ce qui est normal pour un sous-domaine."
  - q: "Vaut-il mieux transférer le domaine plutôt que de le relier ?"
    a: "Pas forcément. Relier le domaine laisse l’enregistrement et le renouvellement chez OVH et ne demande que quelques enregistrements. Un transfert déplace les deux chez un autre registrar : utile pour n’avoir qu’un compte et qu’une facture, inutile au fonctionnement du site."
  - q: "OVH fait-il payer la connexion d’un domaine à Squarespace ?"
    a: "Non. La zone DNS est incluse avec un domaine enregistré chez OVHcloud et la modifier ne coûte rien. Vous continuez à payer OVH pour le renouvellement du domaine et Squarespace pour l’abonnement du site."
---

Votre nom de domaine est chez OVHcloud, votre nouveau site est sur Squarespace, et tout se règle dans la zone DNS OVH. Pas de transfert, pas de changement de serveurs DNS : vous ajoutez six enregistrements dans la zone du domaine. Quatre enregistrements A envoient la racine du domaine vers Squarespace, un CNAME s’occupe de www et un autre prouve que le domaine vous appartient.

Relier le domaine, c’est la dernière chose que je fais avant la mise en ligne d’un site. Je l’ai fait avec des domaines enregistrés chez Namecheap, Spaceship, Infomaniak, Hostinger, OVH et l’ancien Google Domains (devenu Squarespace Domains). Avec OVH, la connexion à Squarespace peut être piégeuse : dans mon cas, le seul vrai problème a été un point, un seul, à la fin d’un enregistrement. Ce tutoriel existe à cause de ce point.

Voici les sept étapes dans l’ordre, avec les valeurs exactes, ce qu’il faut supprimer, ce qu’il faut laisser en place (vos emails) et la façon de vérifier le résultat. Les intitulés sont ceux de l’espace client OVHcloud et de Squarespace à la date de rédaction (octobre 2026) ; si un libellé a changé depuis, les enregistrements, eux, restent les mêmes. Si la différence entre domaine, hébergement et messagerie reste floue, commencez par {{< a key="domain-hosting-email-guide" >}}mon guide sur le nom de domaine et l’hébergement{{< /a >}}.

## Ce que la connexion à Squarespace change dans la zone DNS OVH

La zone DNS est la liste des enregistrements qui indique à Internet où se trouvent votre site et votre messagerie. Le domaine reste enregistré chez OVH, qui continue de vous facturer son renouvellement : seule la partie « site web » de la zone change. Squarespace a besoin de ces six enregistrements :

| Type | Sous-domaine chez OVH | Cible | Rôle |
|---|---|---|---|
| A | (vide : la racine) | `198.185.159.144` | Envoie votredomaine.fr vers Squarespace |
| A | (vide) | `198.185.159.145` | Idem, deuxième adresse |
| A | (vide) | `198.49.23.144` | Idem, troisième adresse |
| A | (vide) | `198.49.23.145` | Idem, quatrième adresse |
| CNAME | `www` | `ext-cust.squarespace.com.` | Envoie www.votredomaine.fr vers Squarespace |
| CNAME | votre code unique | `verify.squarespace.com.` | Prouve à Squarespace que le domaine est à vous |

Ce sont les valeurs de [l’aide de Squarespace sur les domaines tiers](https://support.squarespace.com/hc/en-us/articles/205812378-Connect-a-third-party-domain-to-your-Squarespace-site) (en anglais) à la date de rédaction, et [le guide Squarespace d’OVHcloud](https://docs.ovhcloud.com/fr/guides/web-cloud/domains/how-to-connect-domain-to-squarespace) décrit les mêmes changements côté OVH. Les réglages DNS de votre site Squarespace affichent les valeurs propres à votre domaine : en cas de différence avec ce tableau, ce sont eux qui ont raison.

Tout le reste de la zone ne bouge pas : les MX qui acheminent vos emails, les TXT du SPF et des vérifications de site, les NS. Pour le rôle de chaque type, voyez mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}}.

## Avant de commencer : trois vérifications chez OVH

**1. Le domaine utilise les serveurs DNS d’OVHcloud.** Dans l’espace client OVHcloud, ouvrez **Web Cloud**, puis **Noms de domaine**, cliquez sur votre domaine et ouvrez l’onglet **Serveurs DNS**. Si les serveurs listés appartiennent à OVHcloud (des noms comme `dns10.ovh.net` et `ns10.ovh.net`), c’est bien la zone DNS OVH qu’Internet consulte. S’ils appartiennent à quelqu’un d’autre, Cloudflare ou une ancienne agence par exemple, modifier la zone chez OVH ne sert à rien : ajoutez les enregistrements là où le DNS est réellement géré.

{{< screenshot id="ovh-dns-squarespace-01" alt="Espace client OVHcloud, onglet Serveurs DNS du domaine, qui montre que les serveurs DNS d’OVHcloud sont utilisés" >}}

**2. Vous savez où sont vos emails.** Si des adresses sur ce domaine reçoivent du courrier, chez OVH, Google Workspace ou Microsoft 365, leurs enregistrements doivent survivre au changement : les MX, ainsi que les TXT et CNAME du SPF, de DKIM et de DMARC. Mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} montre à quoi ils ressemblent.

**3. Vous avez une copie de la zone.**

{{< callout type="tip" >}}Dans l’onglet **Zone DNS**, passez en mode textuel et copiez tout le contenu dans un fichier texte avant de modifier quoi que ce soit. OVH garde aussi un historique de la zone, mais votre propre copie permet de remettre un enregistrement supprimé en une minute.{{< /callout >}}

## Étape 1 : lancer la connexion dans Squarespace

Commencez côté Squarespace : le code de vérification n’apparaît qu’une fois la connexion lancée.

1. Dans votre site, ouvrez le panneau **Domaines** (dans les paramètres du site) et choisissez l’option pour utiliser un domaine que vous possédez déjà (**Use a domain I own** dans l’interface en anglais).
2. Saisissez votre domaine sans www, cliquez sur la flèche, puis sur le bouton qui connecte le domaine (**Connect domain**).
3. Choisissez votre fournisseur dans la liste, ou **Autre** (Other) si OVHcloud n’y figure pas.
4. Squarespace ouvre les réglages DNS du domaine, avec les enregistrements à ajouter. Gardez cet onglet ouvert : vous allez y copier des valeurs.

{{< screenshot id="ovh-dns-squarespace-02" alt="Panneau Domaines de Squarespace avec la liste des enregistrements DNS à ajouter pour un domaine tiers : CNAME de vérification, CNAME www et quatre enregistrements A" >}}

La liste commence par le CNAME de vérification : son nom est un code aléatoire propre à votre site, sa cible `verify.squarespace.com`. Si votre site n’est pas encore construit, mon {{< a key="squarespace-tutorial" >}}tuto Squarespace{{< /a >}} couvre cette partie.

## Étape 2 : ouvrir la zone DNS dans l’espace client OVHcloud

Connectez-vous à l’espace client OVHcloud, ouvrez **Web Cloud** en haut de la page, puis **Noms de domaine** dans le menu de gauche. Cliquez sur votre domaine et ouvrez l’onglet **Zone DNS**.

Vous voyez un tableau qui donne, pour chaque enregistrement, le sous-domaine, le type, la cible et le TTL. Un filtre permet d’afficher un seul type à la fois, pratique pour l’étape suivante, et le bouton **Ajouter une entrée** se trouve au-dessus du tableau.

{{< screenshot id="ovh-dns-squarespace-03" alt="Espace client OVHcloud, Web Cloud, Noms de domaine : l’onglet Zone DNS du domaine avec son tableau d’enregistrements et le bouton Ajouter une entrée" >}}

Une convention à connaître : **chez OVH, la racine du domaine est un sous-domaine vide**. Là où Squarespace indique `@` comme nom d’enregistrement, vous laissez le champ **Sous-domaine** vide.

## Étape 3 : supprimer les enregistrements qui entrent en conflit

Sauf si quelqu’un l’a déjà modifiée, la zone créée par OVH avec votre domaine fait pointer la racine et www vers les serveurs d’OVH (une page d’attente ou un hébergement OVH). Ces enregistrements doivent partir, sinon une partie des visiteurs continue d’arriver chez OVH. Le bouton en bout de ligne permet de modifier ou de supprimer :

| Enregistrement | Que faire |
|---|---|
| A sur la racine | Le modifier en `198.185.159.144`, ou le supprimer : à la fin, il faut exactement quatre A sur la racine |
| AAAA sur la racine | Le supprimer : la liste de Squarespace ne contient aucun AAAA, celui-ci enverrait une partie des visiteurs ailleurs |
| A, AAAA ou TXT sur www | Les supprimer : un CNAME ne peut partager son nom avec aucun autre enregistrement |
| CNAME sur www | Le garder et changer sa cible à l’étape 5, plutôt que d’en ajouter un second |
| MX, NS, SRV, autoconfig, autodiscover, DKIM, `_dmarc` | Les garder |

Le guide d’OVHcloud demande aussi de retirer les TXT de la racine et de www, pour éviter les conflits. **N’appliquez pas cette consigne à votre SPF** : si vos emails passent par ce domaine, gardez le TXT de la racine qui commence par `v=spf1`, ainsi que les codes de vérification encore utiles (Google Search Console, par exemple).

{{< screenshot id="ovh-dns-squarespace-04" alt="Tableau de la zone DNS OVHcloud avec le menu d’actions de l’enregistrement AAAA de la racine ouvert pour le supprimer" >}}

## Étape 4 : ajouter les quatre enregistrements A de Squarespace

Cliquez sur **Ajouter une entrée**, choisissez **A** dans la liste des types d’enregistrement, cliquez sur **Suivant** et remplissez le formulaire :

- **Sous-domaine** : laissez-le vide (la racine).
- **TTL** : laissez **Par défaut**.
- **Cible** : `198.185.159.144`

Cliquez sur **Suivant**, vérifiez le récapitulatif, puis cliquez sur **Valider**. Recommencez pour les autres adresses (si vous avez modifié l’enregistrement A existant à l’étape 3, ajoutez seulement les trois manquantes). À la fin, la racine doit porter ces quatre lignes, et aucun autre A ni AAAA :

```
A   (racine)   198.185.159.144
A   (racine)   198.185.159.145
A   (racine)   198.49.23.144
A   (racine)   198.49.23.145
```

Une adresse IP ne prend jamais de point final. Le point ne concerne que les cibles qui sont des noms : c’est l’étape suivante.

{{< screenshot id="ovh-dns-squarespace-05" alt="Formulaire Ajouter une entrée d’OVHcloud pour un enregistrement A : sous-domaine vide, TTL par défaut, cible 198.185.159.144" >}}

## Étape 5 : ajouter le CNAME www, avec le point final

Si un CNAME existe déjà sur www, modifiez-le ; sinon cliquez sur **Ajouter une entrée** et choisissez **CNAME** :

- **Sous-domaine** : `www`
- **TTL** : Par défaut
- **Cible** : `ext-cust.squarespace.com.` (avec le point final)

C’est ici que se trouve le piège. Le [guide d’OVHcloud sur les enregistrements CNAME](https://docs.ovhcloud.com/fr/guides/web-cloud/domains/dns-zone-cname-record-creation) le dit en toutes lettres : quand la cible est un nom de domaine, il faut la terminer par un point, sinon votre nom de domaine est automatiquement ajouté à la fin de la cible.

```
Vous tapez      ext-cust.squarespace.com
OVH comprend    ext-cust.squarespace.com.votredomaine.fr.   (un nom qui n'existe pas)

Vous tapez      ext-cust.squarespace.com.
OVH comprend    ext-cust.squarespace.com.                   (correct)
```

Dans la syntaxe des zones DNS, le point final marque un nom complet ; sans lui, le nom est lu comme relatif à votre propre domaine. Les deux versions ne diffèrent que d’un caractère, ce qui explique que l’erreur passe inaperçue au premier coup d’œil.

{{< callout type="warning" >}}**Pas de point, pas de connexion.** Sans le point final, l’enregistrement www n’est jamais validé par Squarespace et l’adresse en www de votre site reste inaccessible, même après des jours d’attente.{{< /callout >}}

{{< screenshot id="ovh-dns-squarespace-06" alt="Formulaire Ajouter une entrée d’OVHcloud pour un CNAME : sous-domaine www, cible ext-cust.squarespace.com. terminée par un point" >}}

## Étape 6 : ajouter le CNAME de vérification

De retour dans Squarespace, copiez le code qui sert de nom au premier CNAME. Chez OVH, cliquez sur **Ajouter une entrée** et choisissez de nouveau **CNAME** :

- **Sous-domaine** : le code seul. OVH ajoute votre domaine après, ne collez donc pas `code.votredomaine.fr`.
- **TTL** : Par défaut
- **Cible** : `verify.squarespace.com.` (même règle : le point final)

```
CNAME   <votre-code-unique>   verify.squarespace.com.
```

Cet enregistrement prouve à Squarespace que vous contrôlez le domaine. Squarespace prévient que sans lui, ou avec une erreur dedans, le domaine est dissocié du site au bout de 15 jours. Si le domaine n’est toujours pas vérifié après 48 heures, Squarespace propose une autre méthode : supprimer ce CNAME et ajouter sur la racine (sous-domaine vide chez OVH) un enregistrement TXT qui contient le même code.

{{< screenshot id="ovh-dns-squarespace-07" alt="Formulaire Ajouter une entrée d’OVHcloud pour le CNAME de vérification : code unique de Squarespace en sous-domaine, cible verify.squarespace.com. avec le point final" >}}

## Étape 7 : vérifier la zone DNS OVH et patienter

Avant de quitter OVH, repassez en mode textuel et relisez les lignes ajoutées. Chaque cible CNAME se termine par un point, les quatre adresses de Squarespace sont les seuls A de la racine, et il ne reste rien d’autre que le CNAME sur www.

Ensuite, il faut attendre. OVHcloud indique que les modifications d’une zone DNS peuvent prendre jusqu’à 24 heures pour s’appliquer partout, et Squarespace annonce 24 à 48 heures, parfois jusqu’à 72. Juste après l’ajout des enregistrements, les réglages DNS de Squarespace les signalent comme introuvables (**Record not found** dans l’interface en anglais) : Squarespace précise que c’est normal. Le bouton d’actualisation en haut à droite de ces réglages (**Refresh Records**) relance la vérification. Inutile de cliquer toutes les cinq minutes : si les résultats varient, Squarespace conseille d’attendre 48 heures après la dernière tentative. Une fois le domaine relié, une étiquette verte indique qu’il est connecté (**Connected**) dans le panneau Domaines.

Pour vérifier depuis votre ordinateur, utilisez un terminal ou l’outil gratuit [Dig de la Google Admin Toolbox](https://toolbox.googleapps.com/apps/dig/). Les quatre adresses peuvent revenir dans n’importe quel ordre :

```
$ dig +short www.votredomaine.fr CNAME
ext-cust.squarespace.com.

$ dig +short votredomaine.fr A
198.185.159.144
198.185.159.145
198.49.23.144
198.49.23.145
```

Sous Windows, `nslookup -type=CNAME www.votredomaine.fr` donne la même information. **Si la réponse du CNAME se termine par votre propre nom de domaine, le point manque.**

{{< screenshot id="ovh-dns-squarespace-08" alt="Panneau Domaines de Squarespace affichant le domaine OVH avec l’étiquette verte Connected" >}}

## Toujours pas connecté après 48 heures ?

| Ce que vous voyez | Cause probable | Solution |
|---|---|---|
| Squarespace ne valide pas l’enregistrement www | La cible du CNAME n’a pas de point final | La corriger en `ext-cust.squarespace.com.` |
| Squarespace n’arrive pas à vérifier le domaine | Un point manquant, ou une faute dans le code | Recoller le code, ou passer par la méthode TXT |
| La racine affiche parfois une ancienne page | Un ancien enregistrement A ou AAAA resté sur la racine | Ne garder que les quatre A de Squarespace |
| OVH refuse le CNAME www | Un autre enregistrement occupe encore www | Supprimer d’abord l’enregistrement A, AAAA ou TXT de www |
| Rien ne change | Le domaine n’utilise pas les serveurs DNS d’OVH | Ajouter les enregistrements là où le DNS est géré |
| Les emails n’arrivent plus ou partent en spam | Un MX ou le TXT du SPF a été supprimé | Le remettre à partir de votre copie de la zone |

Si aucun cas ne correspond, comparez votre zone ligne par ligne avec les réglages DNS de Squarespace : ils signalent chaque enregistrement que Squarespace ne trouve pas.

## Faut-il garder son domaine chez OVH ?

Rendons justice à OVHcloud : cet hébergeur français, fondé en 1999 et installé à Roubaix, a une zone DNS qui fait tout ce dont Squarespace a besoin. Une fois le piège du point connu, la connexion devient une formalité.

Mon avis : je n’utilise OVH que lorsque le domaine d’un client s’y trouve déjà, et je ne le recommande pas aux petites entreprises, parce que l’espace client est un peu compliqué à prendre en main quand on veut simplement modifier quelques enregistrements. Si le domaine fonctionne, rien ne vous oblige à le déplacer : reliez-le et occupez-vous de votre site. Si vous préférez un prestataire plus simple, voici comment {{< a key="transfer-domain-name" >}}transférer un nom de domaine{{< /a >}} chez un autre registrar, et mon {{< a key="web-hosting-comparison" >}}comparatif OVH, Hostinger, o2switch et Infomaniak{{< /a >}} vous aide à choisir. Je recommande o2switch et Infomaniak, et j’ai mes habitudes chez Spaceship.

Une fois le domaine connecté :

1. Ouvrez votre site aux deux adresses, avec et sans www, et vérifiez qu’elles mènent bien à votre site Squarespace.
2. Dans le panneau Domaines, vérifiez que ce domaine est bien le domaine principal, celui que les visiteurs voient dans la barre d’adresse.
3. Envoyez un email à une adresse du domaine et répondez-y, pour confirmer que la messagerie a survécu.
4. Remplissez vos titres et descriptions de pages : mon guide du {{< a key="squarespace-seo" >}}référencement Squarespace{{< /a >}} les passe en revue dans l’ordre.
5. Gardez quelques semaines le fichier qui contient la copie de votre zone, au cas où.

Et si vous préférez ne pas toucher aux DNS, la connexion du domaine fait partie de chaque {{< a page="/services/websites" >}}site que je livre{{< /a >}}.
