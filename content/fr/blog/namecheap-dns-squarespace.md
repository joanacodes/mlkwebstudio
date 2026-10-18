---
title: "Configurer les DNS Namecheap et relier votre domaine à Squarespace"
seo_title: "Configurer les DNS Namecheap pour Squarespace (tuto)"
description: "Configurer les DNS Namecheap pour Squarespace : supprimer le parking, ajouter quatre A et deux CNAME, garder vos emails et rediriger un second domaine."
slug: "configurer-dns-namecheap-squarespace"
translationKey: "namecheap-dns-squarespace"
date: 2026-10-17T08:50:00+02:00
lastmod: 2026-10-17T08:50:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["configurer DNS Namecheap", "relier domaine Namecheap Squarespace", "Advanced DNS Namecheap", "redirection URL Namecheap", "serveurs DNS Namecheap"]
summary: "Pour configurer les DNS Namecheap et relier le domaine à Squarespace, lancez la connexion dans Squarespace en choisissant les enregistrements DNS plutôt que les serveurs de noms, puis ouvrez Domain List > Manage > Advanced DNS chez Namecheap. Supprimez la redirection de parking sur @, pointez le CNAME www vers ext-cust.squarespace.com, ajoutez les quatre A et le CNAME de vérification de Squarespace, sans toucher aux MX. La connexion prend de 24 à 72 heures."
cover: "namecheap-dns-squarespace"
cover_alt: "Enregistrements DNS de Namecheap qui relient un domaine à Squarespace"
related: ["dns-records-explained", "squarespace-tutorial", "spaceship-vs-namecheap", "ovh-dns-squarespace", "professional-email-address"]
services: ["websites"]
faq:
  - q: "Relier un domaine Namecheap à Squarespace transfère-t-il le domaine ?"
    a: "Non. Le domaine reste enregistré chez Namecheap, qui continue de vous facturer son renouvellement, et Squarespace vous facture l’abonnement du site. Seuls les enregistrements qui indiquent où se trouve le site changent."
  - q: "Namecheap fait-il payer la connexion d’un domaine à Squarespace ?"
    a: "Non. Namecheap BasicDNS est inclus avec un domaine enregistré chez Namecheap, et ajouter ou modifier des enregistrements dans Advanced DNS ne coûte rien."
  - q: "Faut-il acheter un certificat SSL chez Namecheap pour un site Squarespace ?"
    a: "Non. Squarespace fournit le SSL des domaines reliés à ses sites : le cadenas s’affiche sans certificat acheté chez Namecheap."
  - q: "Peut-on garder Private Email de Namecheap avec un site Squarespace ?"
    a: "Oui. Le site et les boîtes mail sont indépendants : Squarespace n’a besoin que d’enregistrements A et CNAME, et Private Email continue de fonctionner tant que le domaine reste sur les DNS de Namecheap et que ses enregistrements de messagerie ne bougent pas."
  - q: "Vaut-il mieux transférer le domaine Namecheap chez Squarespace ?"
    a: "Ce n’est pas nécessaire. Relier le domaine laisse l’enregistrement et le renouvellement chez Namecheap et ne demande que quelques enregistrements ; un transfert déplace les deux chez Squarespace Domains. Ce n’est utile que pour n’avoir qu’un compte et qu’une facture."
---

Votre nom de domaine est chez Namecheap et votre nouveau site est sur Squarespace. Pour les relier, il suffit de configurer les DNS Namecheap : le domaine reste où il est, et vous ajoutez six enregistrements dans l’onglet **Advanced DNS**. Il en faut quatre de type A pour la racine du domaine, un CNAME pour www et un CNAME qui prouve que le domaine vous appartient. La seule vraie décision intervient avant, quand Squarespace propose de prendre la main sur vos serveurs de noms.

Relier un site à son domaine, parfois à deux, c’est la dernière chose que je fais avant la mise en ligne d’un site client. Je l’ai fait avec des domaines enregistrés chez Namecheap, Spaceship, Infomaniak, Hostinger, OVH et l’ancien Google Domains, aujourd’hui géré par Squarespace. Les cas délicats ont été OVH et les domaines de Squarespace, à cause d’un seul point final. Namecheap n’en fait pas partie : je trouve sa configuration simple, ou du moins je sais m’y retrouver.

Je cite les menus en anglais, tels qu’ils s’affichent à la date de rédaction (octobre 2026) ; si un intitulé change, les enregistrements restent les mêmes. Si la différence entre domaine, hébergement et messagerie reste floue, commencez par mon guide sur le {{< a key="domain-hosting-email-guide" >}}nom de domaine et l’hébergement{{< /a >}}.

## Configurer les DNS Namecheap : ce que la connexion à Squarespace change

Namecheap reste votre registrar, la société auprès de laquelle vous louez le domaine et que vous payez chaque année pour le renouveler. Ce qui change, c’est une partie des DNS du domaine : les enregistrements qui indiquent aux navigateurs où se trouve votre site, et aux serveurs de messagerie où livrer vos emails. Squarespace en demande six, listés dans [son aide sur les domaines tiers](https://support.squarespace.com/hc/en-us/articles/205812378-Connect-a-third-party-domain-to-your-Squarespace-site) (en anglais) à la date de rédaction :

| Type chez Namecheap | Host | Value | Rôle |
|---|---|---|---|
| A Record | `@` | `198.185.159.144` | Envoie votreentreprise.fr vers Squarespace |
| A Record | `@` | `198.185.159.145` | Idem, deuxième adresse |
| A Record | `@` | `198.49.23.144` | Idem, troisième adresse |
| A Record | `@` | `198.49.23.145` | Idem, quatrième adresse |
| CNAME Record | `www` | `ext-cust.squarespace.com` | Envoie www.votreentreprise.fr vers Squarespace |
| CNAME Record | votre code unique | `verify.squarespace.com` | Prouve à Squarespace que le domaine est à vous |

Chez Namecheap, `@` désigne la racine du domaine, votreentreprise.fr sans rien devant. Les réglages DNS de votre site Squarespace affichent les valeurs propres à votre domaine : en cas de différence avec ce tableau, ce sont eux qui ont raison. [Le guide de Namecheap pour relier un domaine à Squarespace](https://www.namecheap.com/support/knowledgebase/article.aspx/9608/2208/how-do-i-link-my-domain-to-my-squarespace-account/) (en anglais) suit le même ordre : Squarespace d’abord, Advanced DNS ensuite.

Le reste des DNS ne bouge pas, à commencer par votre messagerie. Pour le rôle de chaque type, voyez mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}}.

## Avant de commencer : trois vérifications

**1. Votre site Squarespace est en essai ou sur un abonnement payant.** Squarespace ne relie un domaine qu’à un site dans l’un de ces deux cas.

**2. Le domaine utilise les DNS de Namecheap.** Dans votre compte Namecheap, ouvrez **Domain List**, cliquez sur **Manage** à côté du domaine et regardez les serveurs de noms (nameservers) dans l’onglet **Domain**. Il faut **Namecheap BasicDNS**, le réglage par défaut d’un domaine enregistré chez Namecheap ; PremiumDNS, l’option DNS payante de Namecheap, fonctionne de la même façon. Si vous voyez **Custom DNS**, avec les serveurs de Cloudflare, d’un hébergeur ou d’une ancienne agence, les enregistrements de l’onglet Advanced DNS ne s’appliquent pas : ajoutez ceux de Squarespace là où pointent ces serveurs.

{{< screenshot id="namecheap-dns-squarespace-01" alt="Onglet Domain d’un domaine chez Namecheap, avec les serveurs de noms réglés sur Namecheap BasicDNS" >}}

**3. Vous savez où sont vos emails.** Si des adresses sur ce domaine reçoivent du courrier, via Private Email de Namecheap, Google Workspace ou Microsoft 365, leurs enregistrements se trouvent dans le même onglet Advanced DNS et doivent survivre au changement.

{{< callout type="tip" >}}Avant de toucher à quoi que ce soit, faites une capture d’écran complète de l’onglet **Advanced DNS**, ou copiez chaque ligne dans un fichier texte. Si un enregistrement disparaît par erreur, vous le remettez en une minute.{{< /callout >}}

## Étape 1 : lancer la connexion dans Squarespace et choisir les enregistrements DNS

Commencez côté Squarespace : le code de vérification n’apparaît qu’une fois la connexion lancée.

1. Dans votre site, ouvrez le panneau des domaines (**Domains** dans l’interface en anglais) et choisissez l’option pour utiliser un domaine que vous possédez déjà (**Use a domain I own**).
2. Saisissez le domaine, votreentreprise.fr sans www, et continuez.
3. Choisissez Namecheap dans la liste des fournisseurs, ou Autre (**Other**) s’il n’y figure pas.
4. Si Squarespace propose une connexion par les serveurs de noms, choisissez l’option qui passe par les enregistrements DNS.
5. Squarespace ouvre les réglages DNS du domaine avec les enregistrements à ajouter. Gardez cet onglet ouvert : vous allez y copier des valeurs.

{{< screenshot id="namecheap-dns-squarespace-02" alt="Fenêtre de Squarespace qui propose la connexion par serveurs de noms pour le domaine Namecheap, avec l’option pour utiliser les enregistrements DNS" >}}

Le point 4 est la décision qui compte. Pour les domaines enregistrés chez Namecheap, GoDaddy ou Network Solutions, Squarespace propose la **connexion par serveurs de noms** (nameserver connect), qui lui confie tous les DNS du domaine. [La comparaison des deux méthodes dans l’aide de Squarespace](https://support.squarespace.com/hc/en-us/articles/8387079117581-Nameserver-connect-vs-DNS-connect) (en anglais) en donne le prix : cette connexion supprime tous les enregistrements CNAME et une partie des A, et une adresse email personnalisée configurée par des enregistrements DNS peut cesser de fonctionner. Pour un domaine qui porte des enregistrements personnalisés, Squarespace conseille de refuser et de passer par la **connexion DNS** (DNS connect). C’est la méthode de ce tutoriel : le domaine reste sur Namecheap BasicDNS et vous ne faites qu’ajouter des enregistrements.

{{< callout type="warning" >}}**Des emails sur ce domaine ? Choisissez les enregistrements DNS.** Squarespace liste lui-même les cas où la connexion par serveurs de noms ne convient pas : des enregistrements DNS personnalisés (les emails en font partie), plusieurs sous-domaines ou DNSSEC. Si aucun ne s’applique, les deux méthodes fonctionnent.{{< /callout >}}

{{< screenshot id="namecheap-dns-squarespace-03" alt="Réglages DNS de Squarespace pour le domaine Namecheap, avec les enregistrements à ajouter : CNAME de vérification, CNAME www et quatre enregistrements A" >}}

Si le site n’est pas encore construit, mon {{< a key="squarespace-tutorial" >}}tuto Squarespace{{< /a >}} couvre cette partie. C’est sur Squarespace que je mets les clients qui modifient eux-mêmes leur site : changer un mot ne doit jamais faire s’écrouler toute la structure.

## Étape 2 : ouvrir Advanced DNS chez Namecheap

Connectez-vous à Namecheap, ouvrez **Domain List** dans le menu de gauche, cliquez sur **Manage** à côté du domaine, puis ouvrez l’onglet **Advanced DNS**. Les enregistrements sont listés dans la section **Host Records**, avec un bouton **Add New Record**.

Chaque ligne a un type, un hôte (Host), une valeur (Value) et un TTL. Dans le champ **Host**, ne tapez que ce qui précède votre domaine : `@` pour le domaine lui-même, `www` pour www. Namecheap ajoute le domaine tout seul : un nom complet saisi dans ce champ se retrouve avec votre domaine en double.

{{< screenshot id="namecheap-dns-squarespace-04" alt="Onglet Advanced DNS de Namecheap, section Host Records d’un nouveau domaine avec les enregistrements de parking : URL Redirect Record sur @ et CNAME Record sur www vers parkingpage.namecheap.com" >}}

## Étape 3 : supprimer les enregistrements de parking de Namecheap

Un domaine tout juste enregistré chez Namecheap arrive avec deux enregistrements de parking : un **URL Redirect Record** sur `@` et un **CNAME Record** sur `www` qui pointe vers `parkingpage.namecheap.com`. L’aide de Namecheap indique de les supprimer quand vous ajoutez vos propres enregistrements.

C’est la redirection qui fait des dégâts si vous l’oubliez. Namecheap explique qu’une redirection d’URL ajoute au domaine son propre enregistrement A, qui pointe vers le serveur de redirection de Namecheap. Laissé à côté des quatre de Squarespace, il enverrait une partie de vos visiteurs ailleurs que sur votre site.

| Enregistrement | Que faire |
|---|---|
| URL Redirect Record sur `@` | Le supprimer avec l’icône de corbeille au bout de sa ligne |
| Tout autre A ou AAAA Record sur `@` | Le supprimer : à la fin, la racine ne porte que les quatre A de Squarespace, sans autre A ni AAAA |
| CNAME Record sur `www` vers `parkingpage.namecheap.com` | Garder la ligne et changer sa valeur à l’étape 5 : Squarespace demande de modifier un CNAME www existant plutôt que d’en ajouter un second |
| Tout A, AAAA, TXT ou URL Redirect Record sur `www` | Le supprimer : un CNAME ne peut partager son hôte avec aucun autre enregistrement |
| MX, TXT sur `@` qui commence par `v=spf1`, DKIM et `_dmarc` | Tout garder |

## Étape 4 : ajouter les quatre enregistrements A de Squarespace

Cliquez sur **Add New Record**, choisissez **A Record** dans la liste des types et remplissez la nouvelle ligne :

- **Host** : `@`
- **Value** : `198.185.159.144`
- **TTL** : laissez **Automatic**

Enregistrez la ligne avec la coche au bout, puis recommencez pour `198.185.159.145`, `198.49.23.144` et `198.49.23.145`. Une adresse IP ne prend jamais de point final : seuls les noms en prennent.

{{< screenshot id="namecheap-dns-squarespace-05" alt="Nouvelle ligne d’enregistrement chez Namecheap : A Record, hôte @, valeur 198.185.159.144, TTL Automatic" >}}

## Étape 5 : pointer le CNAME www vers Squarespace

Revenez au CNAME de parking sur `www` et modifiez-le. Si vous l’avez supprimé, ajoutez un nouveau **CNAME Record** :

- **Host** : `www`
- **Value** : `ext-cust.squarespace.com`
- **TTL** : Automatic

Enregistrez, puis relisez la valeur. Elle doit indiquer ext-cust.squarespace.com, avec ou sans point à la fin. Si votre propre domaine apparaît collé au bout, l’enregistrement pointe vers un nom qui n’existe pas et Squarespace ne le validera jamais. C’est ce point manquant qui a rendu OVH délicat pour moi, et mon tutoriel sur la {{< a key="ovh-dns-squarespace" >}}zone DNS OVH{{< /a >}} montre le piège en détail.

{{< screenshot id="namecheap-dns-squarespace-06" alt="Host Records de Namecheap : le CNAME Record sur www modifié avec la valeur ext-cust.squarespace.com" >}}

## Étape 6 : ajouter le CNAME de vérification

De retour dans Squarespace, copiez le code affiché comme hôte du premier CNAME, une suite de caractères propre à votre site. Chez Namecheap, cliquez sur **Add New Record** et choisissez **CNAME Record** :

- **Host** : le code seul. Namecheap ajoute votre domaine après, ne collez donc pas `code.votreentreprise.fr`.
- **Value** : `verify.squarespace.com`
- **TTL** : Automatic

C’est l’enregistrement qu’on oublie, parce que le site semble fonctionner sans lui. Squarespace prévient que sans lui, ou avec une faute dedans, le domaine est dissocié du site au bout de 15 jours.

{{< screenshot id="namecheap-dns-squarespace-07" alt="Nouvelle ligne d’enregistrement chez Namecheap : CNAME Record avec le code unique de Squarespace comme hôte et verify.squarespace.com comme valeur" >}}

## Étape 7 : vérifier les enregistrements et patienter

Avant de quitter Namecheap, comparez les Host Records avec cette liste. À part vos enregistrements de messagerie, rien d’autre ne doit occuper `@` ou `www` :

```
Type           Host          Value
A Record       @             198.185.159.144
A Record       @             198.185.159.145
A Record       @             198.49.23.144
A Record       @             198.49.23.145
CNAME Record   www           ext-cust.squarespace.com
CNAME Record   <votre-code>  verify.squarespace.com
```

Ensuite, il faut attendre. Squarespace annonce 24 à 48 heures, parfois jusqu’à 72. Juste après l’ajout, ses réglages DNS peuvent encore signaler certains enregistrements comme introuvables : c’est normal, et vous pouvez relancer la vérification depuis ces réglages au lieu de tout recommencer. Une fois le domaine relié, une étiquette verte (**Connected**) s’affiche à côté de lui dans le panneau des domaines.

Pour vérifier depuis votre ordinateur, ouvrez un terminal. Les quatre adresses peuvent revenir dans n’importe quel ordre :

```
$ dig +short votreentreprise.fr A
198.185.159.144
198.185.159.145
198.49.23.144
198.49.23.145

$ dig +short www.votreentreprise.fr CNAME
ext-cust.squarespace.com.
```

Sous Windows, `nslookup -type=CNAME www.votreentreprise.fr` affiche la partie www.

{{< screenshot id="namecheap-dns-squarespace-08" alt="Panneau des domaines de Squarespace affichant le domaine Namecheap avec l’étiquette verte Connected" >}}

## Rediriger un second domaine depuis Namecheap

Si vous possédez deux extensions, par exemple le .fr pour le site et le .com pour protéger le nom, le second domaine n’a pas besoin d’être relié à Squarespace. Une redirection permanente chez Namecheap envoie ses visiteurs vers le domaine principal, et [le guide des redirections d’URL de Namecheap](https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-set-up-a-url-redirect-for-a-domain/) (en anglais) donne le détail.

1. Dans **Domain List**, cliquez sur **Manage** à côté du second domaine (ici votreentreprise.com) et ouvrez **Advanced DNS**.
2. Supprimez le CNAME de parking sur `www` et tout enregistrement A ou CNAME sur `@` ou `www` : Namecheap prévient qu’ils gênent la redirection.
3. Modifiez l’enregistrement **URL Redirect Record** sur `@`, ou ajoutez-en un avec **Add New Record**. Comme valeur, saisissez l’adresse exacte que votre site affiche dans le navigateur, par exemple `https://www.votreentreprise.fr`.
4. Comme type de redirection, choisissez la redirection permanente (301). **Unmasked** est une redirection temporaire (302), et **Masked** garde le second domaine dans la barre d’adresse ; une 301 indique aux moteurs de recherche que le déménagement est définitif.
5. Ajoutez un second enregistrement URL Redirect Record avec `www` comme hôte et la même valeur, pour que www.votreentreprise.com suive.
6. Enregistrez, puis comptez jusqu’à 30 minutes, le délai que donne Namecheap pour qu’une redirection s’applique. Testez le second domaine avec et sans www, en http:// et en https:// : chaque version doit aboutir sur votre site principal.

{{< screenshot id="namecheap-dns-squarespace-09" alt="Advanced DNS d’un second domaine chez Namecheap : URL Redirect Record sur @ vers https://www.votreentreprise.fr avec le type permanent 301" >}}

Si le second domaine reçoit des emails, gardez ses enregistrements MX : la redirection ne concerne que le site.

## Vos emails : ce qu’il ne faut pas toucher

Squarespace héberge le site, pas votre boîte mail, et les enregistrements de votre messagerie se trouvent dans les mêmes DNS chez Namecheap. Quel que soit le fournisseur de la boîte (Private Email de Namecheap, Spacemail de Spaceship, Google Workspace ou Microsoft 365), ceux-ci restent exactement tels quels :

- les **enregistrements MX**, qui indiquent aux autres serveurs où livrer vos messages ;
- l’enregistrement TXT sur `@` qui commence par `v=spf1` (SPF) ;
- l’enregistrement DKIM, sur un hôte qui se termine par `._domainkey`, et l’enregistrement DMARC sur `_dmarc`.

L’aide de Squarespace dit la même chose : quand le domaine et la messagerie sont chez le même fournisseur, vous ne modifiez que les enregistrements A et CNAME, jamais les serveurs de noms ni les MX. Si votre boîte est Private Email de Namecheap, laissez ses réglages dans Advanced DNS tels qu’ils sont.

{{< callout type="warning" >}}**Ne supprimez jamais un MX pour « faire du ménage ».** Les emails cessent d’arriver et rien ne vous prévient : vous l’apprenez quand un client demande pourquoi vous n’avez jamais répondu.{{< /callout >}}

Si le domaine n’a pas encore de boîte mail, mon guide pour créer une {{< a key="professional-email-address" >}}adresse mail professionnelle{{< /a >}} compare les options et leurs prix. J’utilisais Microsoft pour mes emails, et c’était pénible ; ce n’est pas le cas avec Namecheap ni avec Spaceship. Une fois la boîte en service, prenez le temps de {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} pour que vos messages n’arrivent pas en spam.

## Toujours pas connecté après 48 heures ?

| Ce que vous voyez | Cause probable | Solution |
|---|---|---|
| Le domaine affiche encore la page de parking ou un ancien site | Les enregistrements de parking, ou un ancien A ou AAAA sur `@`, sont encore là | Les supprimer, ne garder que les quatre A de Squarespace sur `@` et pointer le CNAME www vers `ext-cust.squarespace.com` |
| Squarespace ne trouve aucun enregistrement | Le domaine est en Custom DNS, donc les enregistrements d’Advanced DNS ne s’appliquent pas | Ajouter les enregistrements là où pointent les serveurs de noms |
| L’enregistrement www ou de vérification n’est jamais validé | Le domaine complet a été saisi dans **Host**, ou la valeur contient une faute | Ne garder que `www` ou le code dans Host, et relire la valeur lettre par lettre |
| Les emails n’arrivent plus | Un MX a été supprimé, ou le domaine est passé sur les serveurs de noms de Squarespace | Remettre les enregistrements depuis votre copie, là où pointent désormais les serveurs de noms |

Si aucun cas ne correspond, comparez vos Host Records ligne par ligne avec les réglages DNS de Squarespace, qui signalent les enregistrements introuvables. Le support de Namecheap répond à toute heure, et chaque problème que je lui ai soumis a été résolu.

## Faut-il garder votre domaine chez Namecheap ?

S’il fonctionne, oui. Je fais confiance à Namecheap : ses prix sont corrects, et ses renouvellements ne s’envolent pas comme chez d’autres registrars. Son onglet Advanced DNS fait tout ce dont Squarespace a besoin, et sa protection WHOIS, Withheld for Privacy, est gratuite sur les extensions qui l’autorisent.

Pour les nouveaux domaines, j’utilise Spaceship par habitude. Namecheap l’a créé, et pour moi c’est une version à jour de Namecheap ; mon {{< a key="spaceship-vs-namecheap" >}}avis sur Spaceship, comparé à Namecheap{{< /a >}}, détaille les différences. Déplacer un domaine qui fonctionne, juste pour le déplacer, est un travail dont vous pouvez vous passer : reliez-le et consacrez ce temps à votre site.

## La check-list une fois le domaine connecté

1. Ouvrez votre site avec et sans www : les deux adresses doivent aboutir sur votre site Squarespace, avec le cadenas.
2. Dans le panneau des domaines, vérifiez que ce domaine est le domaine principal, l’adresse que les visiteurs voient dans leur navigateur.
3. Envoyez un email à une adresse du domaine, puis répondez-y.
4. Si vous avez configuré un second domaine, tapez-le et vérifiez qu’il aboutit sur le site principal.
5. Chez Namecheap, vérifiez que le renouvellement automatique est activé : si le domaine expire, le site et les emails tombent ensemble.
6. Gardez votre capture des anciens enregistrements quelques semaines, au cas où.

Et si vous préférez ne pas toucher aux DNS, la connexion du domaine fait partie de chaque {{< a page="/services/websites" >}}site que je livre{{< /a >}}.
