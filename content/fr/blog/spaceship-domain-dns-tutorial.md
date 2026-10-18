---
title: "Acheter un nom de domaine sur Spaceship et configurer ses DNS : le tutoriel"
seo_title: "Acheter un nom de domaine sur Spaceship : le tuto DNS"
description: "Acheter un nom de domaine sur Spaceship pas à pas : recherche, confidentialité, paiement, puis les DNS pour relier Squarespace sans perdre vos emails."
slug: "acheter-nom-domaine-spaceship"
translationKey: "spaceship-domain-dns-tutorial"
date: 2026-10-17T08:47:00+02:00
lastmod: 2026-10-17T08:47:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["acheter un nom de domaine sur Spaceship", "DNS Spaceship", "relier un domaine Spaceship à Squarespace", "Advanced DNS Spaceship", "redirection de domaine Spaceship"]
summary: "Pour acheter un nom de domaine sur Spaceship, cherchez le nom, gardez la confidentialité WHOIS gratuite, activez le renouvellement automatique et payez. Pour le relier à votre site, ouvrez Advanced DNS sans toucher aux serveurs de noms, libérez @ et www, puis ajoutez les enregistrements de votre plateforme : pour Squarespace, quatre A sur @, un CNAME www vers ext-cust.squarespace.com et un CNAME de vérification. Les MX et les TXT de la messagerie restent en place."
cover: "spaceship-domain-dns-tutorial"
cover_alt: "Enregistrements DNS Spaceship qui relient un nom de domaine à un site web"
related: ["spaceship-vs-namecheap", "spacemail-setup", "dns-records-explained", "fr-domain-names", "best-domain-registrar"]
services: ["websites"]
faq:
  - q: "Relier un domaine Spaceship à Squarespace le transfère-t-il chez Squarespace ?"
    a: "Non. L’enregistrement et le renouvellement restent chez Spaceship : vous payez Spaceship pour le domaine et Squarespace pour l’abonnement du site. Un transfert est une démarche à part, que rien ne vous oblige à faire."
  - q: "Peut-on faire pointer un sous-domaine Spaceship vers un autre service ?"
    a: "Oui. Ajoutez dans Advanced DNS un enregistrement pour ce seul nom, par exemple un CNAME boutique vers votre plateforme de vente, avec la valeur qu’elle vous donne. La racine, www et les enregistrements de messagerie ne bougent pas."
  - q: "Peut-on acheter un nom de domaine sur Spaceship sans hébergement ni email ?"
    a: "Oui. Le domaine se vend seul. L’hébergement et la messagerie, Spacemail par exemple, sont des produits à part, à ajouter plus tard chez Spaceship ou chez un autre prestataire."
  - q: "Spaceship fait-il payer les DNS ou les redirections ?"
    a: "Non. La zone DNS est fournie avec le domaine, et Spaceship indique que ses redirections d’URL en HTTPS sont gratuites pour tous ses clients depuis février 2024. Vous ne payez que le renouvellement annuel du domaine."
---

Acheter un nom de domaine sur Spaceship prend quelques minutes. Le relier ensuite à votre site demande une poignée d’enregistrements dans ses réglages DNS, réunis sur une seule page : **Advanced DNS**. Ce tutoriel couvre les deux : l’achat pas à pas, puis la connexion à un site Squarespace sans toucher à vos emails.

J’ai mes habitudes chez Spaceship. La plateforme a été conçue par Namecheap, et je fais confiance aux deux. J’y trouve la configuration simple, ou du moins j’y ai mes repères, et relier le domaine est toujours la dernière chose que je fais avant la mise en ligne du site d’un client. Squarespace sert d’exemple, mais la méthode vaut pour toutes les plateformes : seules les valeurs changent.

Au programme : deux étapes pour acheter le domaine, six pour le relier, puis une redirection permanente pour un second domaine. Les libellés cités sont ceux des interfaces en anglais (octobre 2026), traduits au besoin ; s’ils changent, les enregistrements, eux, restent les mêmes. Si la différence entre domaine, hébergement et messagerie reste floue, commencez par {{< a key="domain-hosting-email-guide" >}}mon guide sur le nom de domaine et l’hébergement{{< /a >}}.

## Acheter un nom de domaine sur Spaceship : serveurs de noms et enregistrements DNS

Avec le domaine, vous obtenez deux réglages qu’on confond facilement :

- **Les serveurs de noms** (nameservers) désignent l’entreprise qui héberge les DNS du domaine. Un domaine acheté chez Spaceship utilise normalement ceux de Spaceship.
- **Les enregistrements DNS** sont les lignes de la zone DNS du domaine : des A pour l’adresse du site, des CNAME pour les alias comme www, des MX pour la messagerie, des TXT pour SPF, DKIM, DMARC et les codes de vérification.

Pour un domaine enregistré chez Spaceship, la connexion à Squarespace passe par des enregistrements : **vous gardez les serveurs de noms de Spaceship et vous ajoutez seulement des lignes**. Changer de serveurs de noms est une autre opération : toute la zone part chez une autre entreprise, et chaque enregistrement que vous n’y recréez pas disparaît, MX compris. C’est ainsi qu’une entreprise perd ses emails du jour au lendemain. Pour le rôle de chaque type, lisez mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}}.

Voici ce dont Squarespace a besoin, d’après [son aide sur les domaines tiers](https://support.squarespace.com/hc/en-us/articles/205812378-Connect-a-third-party-domain-to-your-Squarespace-site) (en anglais) ; en cas de différence, les valeurs affichées dans les réglages DNS de votre site font foi.

| Type | Hôte | Valeur | Rôle |
|---|---|---|---|
| A | `@` | `198.185.159.144` | Envoie votredomaine.com vers Squarespace |
| A | `@` | `198.185.159.145` | Idem |
| A | `@` | `198.49.23.144` | Idem |
| A | `@` | `198.49.23.145` | Idem |
| CNAME | `www` | `ext-cust.squarespace.com` | Envoie www.votredomaine.com vers Squarespace |
| CNAME | votre code unique | `verify.squarespace.com` | Prouve à Squarespace que le domaine est à vous |

## Étape 1 : chercher le nom et choisir l’extension

Sur spaceship.com, tapez le nom voulu dans le champ de recherche. Les résultats listent les extensions encore libres pour ce nom, chacune avec son prix. Deux choix à faire ici :

- **L’extension.** Un .fr parle tout de suite à une clientèle française ; un .com convient à une activité qui vend au-delà. Vérifiez que l’extension visée figure dans les résultats : l’offre varie d’un registrar à l’autre. Pour un .fr, les règles de l’Afnic s’appliquent chez tous les registrars (titulaire résidant ou établi dans l’Espace économique européen ou en Suisse) : mon article sur le {{< a key="fr-domain-names" >}}nom de domaine .fr{{< /a >}} les détaille.
- **Le prix du renouvellement.** Regardez ce que coûte la deuxième année, pas seulement la première, qu’une promotion peut faire baisser. Les tarifs sont sur [la page des domaines de Spaceship](https://www.spaceship.com/domains/). D’après mon expérience, les prix de Spaceship sont honnêtes et ses renouvellements ne s’envolent pas comme chez certains registrars.

{{< screenshot id="spaceship-domain-dns-tutorial-01" alt="Résultats de recherche de domaine sur Spaceship, avec les extensions disponibles pour un nom et leur prix" >}}

Ajoutez le domaine au panier. Votre domaine est déjà chez un autre registrar ? La partie DNS de ce tutoriel vaut aussi pour lui, à condition de modifier les enregistrements là où pointent ses serveurs de noms. Si vous préférez tout regrouper chez Spaceship, voici comment {{< a key="transfer-domain-name" >}}transférer un nom de domaine{{< /a >}}, et mon {{< a key="spaceship-vs-namecheap" >}}avis sur Spaceship, comparé à Namecheap{{< /a >}}, explique pourquoi ce sont les deux registrars en qui j’ai confiance.

## Étape 2 : confidentialité, renouvellement automatique et paiement

Avant de payer, ou juste après dans les réglages du domaine, vérifiez trois points :

1. **La confidentialité WHOIS.** Spaceship la fournit gratuitement pour chaque domaine éligible, via un prestataire qu’il choisit. Laissez-la active : vos nom, adresse et téléphone restent hors de l’annuaire WHOIS public.
2. **Le renouvellement automatique.** Activez-le. Un domaine qui expire emporte avec lui votre site et vos emails, et le récupérer peut coûter plus cher qu’un renouvellement à temps.
3. **Le titulaire.** Enregistrez le domaine au nom de l’entreprise qui l’utilisera (ou au vôtre si vous êtes à votre compte), avec une adresse email que vous consultez vraiment.

Créez ensuite votre compte Spaceship, ou connectez-vous, et payez. Protégez le compte avec la double authentification : qui contrôle cet accès contrôle votre site et vos emails.

{{< screenshot id="spaceship-domain-dns-tutorial-02" alt="Panier ou réglages du domaine chez Spaceship, avec la confidentialité WHOIS et le renouvellement automatique activés" >}}

Si Spaceship vous demande de confirmer votre adresse email de contact après l’achat, faites-le tout de suite : pour un .com et les autres extensions génériques, les règles de l’ICANN permettent au registrar de suspendre un domaine dont les coordonnées n’ont pas été vérifiées.

## Étape 3 : lancer la connexion dans Squarespace

Commencez côté Squarespace : le code de vérification n’apparaît qu’une fois la connexion lancée.

1. Dans votre site Squarespace, ouvrez le panneau **Domaines** et choisissez **Use a domain I own** (utiliser un domaine que vous possédez déjà).
2. Saisissez votre domaine sans www et validez.
3. Choisissez Spaceship dans la liste des fournisseurs s’il y figure, sinon **Autre** (Other). Si Squarespace propose de passer par les serveurs de noms, choisissez plutôt l’option des enregistrements DNS : votre zone, et vos emails avec elle, restent chez Spaceship.
4. Squarespace ouvre les réglages DNS du domaine avec les enregistrements à ajouter. Gardez cet onglet ouvert : vous allez y copier des valeurs.

{{< screenshot id="spaceship-domain-dns-tutorial-03" alt="Panneau Domaines de Squarespace avec la liste des enregistrements DNS à ajouter pour un domaine tiers : CNAME de vérification, CNAME www et quatre enregistrements A" >}}

Squarespace, c’est la plateforme que je propose aux clients qui modifient leur site eux-mêmes, parce que changer un mot ne devrait jamais faire tomber toute la structure. Si votre site n’est pas encore construit, mon {{< a key="squarespace-tutorial" >}}tuto Squarespace{{< /a >}} couvre cette partie.

## Étape 4 : ouvrir Advanced DNS et vérifier les serveurs de noms

Connectez-vous à Spaceship, ouvrez **Advanced DNS** et choisissez votre domaine. La page réunit les serveurs de noms, les enregistrements DNS et DNSSEC du domaine, plus un outil de suivi de la propagation (étape 8).

Regardez d’abord les serveurs de noms. S’ils sont ceux de Spaceship (le cas normal pour un domaine qui vient d’y être acheté), c’est bien cette zone qu’Internet consulte. S’ils appartiennent à quelqu’un d’autre (Cloudflare, un hébergeur, une ancienne agence), les enregistrements de cette page sont ignorés : ajoutez ceux de Squarespace là où pointent les serveurs de noms.

{{< screenshot id="spaceship-domain-dns-tutorial-04" alt="Page Advanced DNS de Spaceship pour le domaine, avec les sections serveurs de noms, enregistrements DNS et DNSSEC" >}}

Laissez DNSSEC tel quel. Si vous changez un jour de serveurs de noms, désactivez-le d’abord : des signatures qui ne correspondent plus rendent le domaine injoignable pour les résolveurs qui les vérifient.

{{< callout type="tip" >}}Avant de modifier quoi que ce soit, faites une capture d’écran des enregistrements ou copiez-les dans un fichier texte. Si vous supprimez la mauvaise ligne, vous la remettez en une minute.{{< /callout >}}

## Étape 5 : supprimer les enregistrements qui gênent Squarespace

Repérez tout ce qui occupe `@` (la racine du domaine) ou `www` : une page de parking, une redirection, un ancien site.

| Ce que vous trouvez | Que faire |
|---|---|
| Un A sur `@` qui n’est pas l’un des quatre de Squarespace | Le supprimer |
| Un AAAA sur `@` | Le supprimer : Squarespace n’utilise aucun AAAA, celui-ci enverrait une partie des visiteurs ailleurs |
| Un A, AAAA ou TXT sur `www` | Le supprimer : un CNAME ne peut partager son nom avec aucun autre enregistrement |
| Un CNAME sur `www` | Le garder et changer sa valeur à l’étape 7 |
| Une redirection d’URL réglée sur le domaine | La retirer : une redirection et Squarespace ne peuvent pas répondre ensemble à la même adresse |
| Les MX, le TXT de `@` qui commence par `v=spf1`, DKIM (`._domainkey`), `_dmarc` | Les garder : ils font tourner votre messagerie |

{{< screenshot id="spaceship-domain-dns-tutorial-05" alt="Liste des enregistrements dans Advanced DNS chez Spaceship, avec un ancien enregistrement sur www sélectionné pour suppression" >}}

Sur un domaine acheté aujourd’hui, la liste peut être courte. Sur un domaine plus ancien, prenez votre temps : **vous ne touchez qu’aux lignes de @ et de www, et seulement à celles qui servent le site**.

## Étape 6 : ajouter les quatre enregistrements A de Squarespace

Dans **DNS records**, ouvrez **Custom records** (les enregistrements personnalisés), choisissez **A** dans la liste des types d’enregistrement et remplissez :

- **Hôte** (Host) : `@` (la racine du domaine)
- **Valeur** (Value) : `198.185.159.144`
- **TTL** : laissez la valeur par défaut

Cliquez sur **Add**, puis recommencez pour les trois autres adresses. À la fin, la racine porte exactement ces quatre lignes, et aucun autre A ni AAAA :

```
A   @   198.185.159.144
A   @   198.185.159.145
A   @   198.49.23.144
A   @   198.49.23.145
```

Si les champs s’appellent autrement (Name au lieu de Host, Points to au lieu de Value), tapez la même chose. [La page d’aide de Spaceship sur les enregistrements DNS](https://www.spaceship.com/knowledgebase/dns-records-types/) (en anglais) décrit chaque type et la façon de l’ajouter.

{{< screenshot id="spaceship-domain-dns-tutorial-06" alt="Formulaire Spaceship d’ajout d’un enregistrement A : hôte @, valeur 198.185.159.144, TTL par défaut" >}}

Pourquoi quatre A plutôt qu’un CNAME sur la racine ? Parce que la racine porte toujours d’autres enregistrements (les SOA et NS de la zone elle-même, plus vos MX et vos TXT), et qu’un CNAME ne peut partager son nom avec aucun autre enregistrement.

## Étape 7 : ajouter les CNAME www et de vérification

De retour dans **Custom records**, choisissez cette fois **CNAME** :

- **Hôte** : `www`
- **Valeur** : `ext-cust.squarespace.com`

Cliquez sur **Add**, puis créez l’enregistrement de vérification, lui aussi un **CNAME** :

- **Hôte** : le code fourni par Squarespace, seul. L’interface ajoute votre domaine après, ne collez donc pas `code.votredomaine.com`.
- **Valeur** : `verify.squarespace.com`

Squarespace prévient que sans l’enregistrement de vérification, ou avec une erreur dedans, le domaine est dissocié du site au bout de 15 jours.

{{< screenshot id="spaceship-domain-dns-tutorial-07" alt="Formulaire Spaceship d’ajout d’un enregistrement CNAME : hôte www, valeur ext-cust.squarespace.com" >}}

{{< callout type="warning" >}}**Relisez chaque valeur une fois enregistrée.** Elle doit être `ext-cust.squarespace.com`, et non `ext-cust.squarespace.com.votredomaine.com`. Si votre propre domaine apparaît collé à la fin d’une valeur, modifiez l’enregistrement et terminez la valeur par un point : un CNAME qui pointe vers ce nom à rallonge n’est jamais validé, même après des jours d’attente.{{< /callout >}}

Certaines interfaces DNS produisent ce nom à rallonge quand une cible est saisie sans son point final. C’est le seul vrai problème que j’ai rencontré en reliant des domaines, chez OVH, et mon tutoriel sur la {{< a key="ovh-dns-squarespace" >}}zone DNS OVH{{< /a >}} montre le piège en détail.

## Étape 8 : vérifier la propagation et la connexion

Place à l’attente. Squarespace annonce 24 à 48 heures, parfois jusqu’à 72, et juste après l’ajout des enregistrements, ses réglages DNS peuvent encore les signaler comme introuvables : c’est normal. Dans Advanced DNS, l’outil de propagation de Spaceship indique en pourcentage jusqu’où le changement s’est diffusé, ce qui évite d’actualiser Squarespace toutes les cinq minutes.

Pour vérifier depuis votre ordinateur, utilisez un terminal ou l’outil gratuit Dig de la Google Admin Toolbox. Les quatre adresses peuvent revenir dans n’importe quel ordre :

```
$ dig +short www.votredomaine.com CNAME
ext-cust.squarespace.com.

$ dig +short votredomaine.com A
198.185.159.144
198.185.159.145
198.49.23.144
198.49.23.145
```

Le point à la fin de la première réponse est attendu : dig affiche toujours les noms complets ainsi. Sous Windows, `nslookup -type=CNAME www.votredomaine.com` donne la même information. Une fois le domaine relié, une étiquette verte **Connected** (connecté) apparaît à côté de lui dans le panneau Domaines de Squarespace.

{{< screenshot id="spaceship-domain-dns-tutorial-08" alt="Panneau Domaines de Squarespace affichant le domaine Spaceship avec l’étiquette verte Connected" >}}

## Rediriger un second domaine sans casser vos emails

Votre site tourne sur votremarque.com et vous avez acheté un second domaine pour protéger le nom : la variante avec tiret, un .net ou un .fr. Une redirection 301 envoie toute personne qui tape ce second domaine vers le premier, et indique aux moteurs de recherche que le changement est définitif.

Chez Spaceship, cela passe par une redirection d’URL gratuite qui fonctionne en HTTPS, ce qui compte : une redirection limitée à http:// affiche un avertissement de certificat à quiconque tape https://. Une condition, précisée dans [l’annonce de Spaceship](https://www.spaceship.com/blog/domain-updates/) (en anglais) : une nouvelle redirection ne fonctionne que si le domaine utilise les serveurs de noms de Spaceship.

1. Dans Advanced DNS, pour le second domaine, supprimez les enregistrements web qu’un ancien site a pu laisser sur `@` et `www` (A, AAAA, CNAME), et rien d’autre. Les AAAA s’oublient facilement, et le moindre reste envoie des visiteurs vers l’ancien site au lieu de la redirection.
2. Dans la liste de vos domaines (**Domain List**), sélectionnez le second domaine et cliquez sur **URL redirect** dans le panneau latéral (l’espace **Connections** permet aussi de la régler).
3. Saisissez la destination complète, avec https://, par exemple `https://votremarque.com`.
4. Comme type de redirection, choisissez **301** (permanente), pas **Masked**, puis cliquez sur **Save**. Une redirection masquée affiche votre site dans un cadre sous l’adresse du second domaine, et les moteurs de recherche ne la traitent pas comme un déménagement.

{{< screenshot id="spaceship-domain-dns-tutorial-09" alt="Réglages de redirection d’URL chez Spaceship pour un second domaine : type 301, destination https://votremarque.com" >}}

**Une redirection ne concerne que les enregistrements web.** Si des adresses du second domaine reçoivent des emails, gardez tous les enregistrements de messagerie : MX, le TXT SPF sur `@`, DKIM sous `._domainkey`, `_dmarc`, et les éventuels autoconfig ou autodiscover. Testez ensuite les quatre adresses (http et https, avec et sans www) et envoyez-vous un email sur le second domaine pour vérifier qu’il arrive toujours.

Spaceship ne précise pas si la redirection couvre www en plus de la racine : si les adresses en www échouent, interrogez son support avant d’ajouter des enregistrements à la main. Si ce second domaine est chez un autre registrar, un .fr chez OVH par exemple, la redirection se règle chez lui, avec les mêmes précautions.

## Votre site n’est pas sur Squarespace ? Même méthode, autres valeurs

Gardez les serveurs de noms de Spaceship, libérez `@` et `www`, puis ajoutez ce que votre plateforme demande :

| Votre site | Racine (`@`) | `www` | Avant de commencer |
|---|---|---|---|
| GitHub Pages | Quatre A, de `185.199.108.153` à `185.199.111.153` | CNAME `<username>.github.io` | Déclarez d’abord le domaine dans GitHub ; jamais d’enregistrement générique (wildcard) |
| Un autre hébergeur | Le ou les A de son aide | Souvent un CNAME | S’il demande de changer les serveurs de noms, recréez d’abord chez lui vos enregistrements de messagerie |

Ce site, par exemple, est hébergé sur GitHub Pages. Si vous voulez aussi une adresse email sur le domaine, mon tutoriel pour {{< a key="spacemail-setup" >}}configurer Spacemail{{< /a >}} détaille les enregistrements de messagerie à ajouter sur la même page Advanced DNS. J’utilisais Microsoft pour mes emails, et c’était pénible ; avec Spaceship, rien de tel.

## Le domaine n’est toujours pas connecté après 48 heures ?

| Ce que vous voyez | Cause probable | Solution |
|---|---|---|
| Squarespace ne valide pas l’enregistrement www | La valeur se lit `ext-cust.squarespace.com.votredomaine.com`, ou contient une faute | La corriger en `ext-cust.squarespace.com`, avec un point final si votre domaine revient à chaque fois |
| Squarespace n’arrive pas à vérifier le domaine | L’hôte de vérification contient le domaine complet, ou le code a une faute | Recoller le code seul dans le champ Hôte |
| La racine affiche parfois une page de parking ou l’ancien site | Un A, un AAAA ou une redirection encore présents sur `@` | Ne garder que les quatre A de Squarespace sur `@` |
| Impossible d’enregistrer le CNAME www | Un autre enregistrement occupe encore www | Le supprimer d’abord |
| Rien ne change | Le domaine n’utilise pas les serveurs de noms de Spaceship | Modifier les enregistrements là où pointent les serveurs de noms |
| Les emails n’arrivent plus | Un MX ou le SPF a été supprimé, ou les serveurs de noms ont changé | Le remettre à partir de votre copie |

Si aucun cas ne correspond, comparez vos enregistrements ligne par ligne avec les réglages DNS de Squarespace : ils signalent chaque enregistrement introuvable. Et si vous bloquez côté Spaceship, son support répond 24 h/24 et 7 j/7 ; d’après mon expérience, chaque problème que je lui ai soumis a été résolu.

## Une fois le domaine connecté : la liste de contrôle

1. Ouvrez le site avec et sans www : les deux adresses doivent mener à votre site Squarespace.
2. Dans le panneau Domaines de Squarespace, faites de ce domaine le domaine principal : l’adresse que les visiteurs voient dans leur navigateur.
3. Si vous avez des emails sur le domaine, envoyez un message à l’une de ses adresses et répondez-y.
4. Vérifiez que la carte enregistrée sera encore valide à l’échéance du renouvellement automatique.
5. Gardez la copie de vos anciens enregistrements quelques semaines, au cas où.

Et si vous préférez ne pas toucher aux DNS, la connexion du domaine fait partie de chaque {{< a page="/services/websites" >}}site que je livre{{< /a >}}.
