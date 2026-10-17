---
title: "Enregistrements DNS : A, AAAA, CNAME, MX, TXT et le piège du point final"
seo_title: "Enregistrements DNS : A, CNAME, MX et TXT expliqués"
description: "Enregistrements DNS expliqués simplement : à quoi servent A, AAAA, CNAME, MX et TXT, des exemples réels, le TTL, et le point final qui casse un CNAME."
slug: "enregistrements-dns-expliques"
translationKey: "dns-records-explained"
date: 2026-10-17T08:45:00+02:00
lastmod: 2026-10-17T08:45:00+02:00
category: "domains"
article_type: "guide"
keywords: ["enregistrements DNS", "types d’enregistrements DNS", "enregistrement CNAME", "enregistrement MX", "enregistrement TXT", "point final DNS", "propagation DNS"]
summary: "Les enregistrements DNS sont les lignes de la zone de votre domaine qui indiquent où se trouvent votre site et vos emails : A et AAAA relient un nom à une adresse IP, CNAME fait d’un nom l’alias d’un autre, MX désigne les serveurs qui reçoivent vos emails et TXT sert au SPF, au DKIM, au DMARC et aux codes de vérification. Modifiez-les chez l’hébergeur de votre zone DNS, ne mettez jamais de CNAME sur la racine et, chez OVHcloud, terminez la cible d’un CNAME par un point."
cover: "dns-records-explained"
cover_alt: "Enregistrements DNS A, CNAME, MX et TXT dans la zone d’un domaine"
related: ["ovh-dns-squarespace", "spf-dkim-dmarc-setup", "namecheap-dns-squarespace", "spaceship-domain-dns-tutorial", "build-website-with-ai"]
services: ["websites"]
faq:
  - q: "Modifier ses enregistrements DNS a-t-il un impact sur le référencement ?"
    a: "Pas en soi. Les moteurs de recherche classent des pages, pas des enregistrements : un changement de DNS ne pénalise que si le site cesse de répondre ou si les adresses des pages changent sans redirections 301. Préparez le nouveau site avant de modifier les enregistrements, et gardez les mêmes URL ou redirigez les anciennes."
  - q: "L’hébergement DNS est-il gratuit avec un nom de domaine ?"
    a: "En général, oui. Les registrars comme OVHcloud, Namecheap ou Spaceship incluent la zone DNS avec le domaine sans surcoût, et les hébergeurs DNS spécialisés comme Cloudflare ont aussi une offre gratuite."
  - q: "Qu’est-ce que DNSSEC, et faut-il l’activer ?"
    a: "DNSSEC signe vos enregistrements DNS pour que les résolveurs repèrent les réponses falsifiées. Activez-le si votre hébergeur DNS le propose en un clic. Avant de changer de serveurs DNS, désactivez-le, attendez un jour, puis réactivez-le chez le nouvel hébergeur : sinon, l’ancien enregistrement DS conservé par le registre ne correspond plus, et votre domaine devient injoignable pour tous les résolveurs qui vérifient les signatures."
  - q: "Qu’est-ce qu’un enregistrement PTR ?"
    a: "Un enregistrement PTR, ou DNS inverse, relie une adresse IP à un nom. Il est réglé par le propriétaire de l’adresse IP, en général votre fournisseur de messagerie ou votre hébergeur, et non dans la zone de votre domaine. Les consignes de Gmail aux expéditeurs demandent un DNS inverse valide sur les serveurs qui envoient vos emails."
  - q: "Un sous-domaine peut-il pointer vers un autre service que le site principal ?"
    a: "Oui. Chaque nom de la zone a ses propres enregistrements : boutique.votredomaine.fr peut être un CNAME vers votre plateforme de vente pendant que la racine et www pointent vers votre site et que les MX gardent vos emails là où ils sont."
---

Les enregistrements DNS sont les lignes de la zone DNS de votre domaine : ensemble, elles indiquent à Internet où se trouve votre site, quels serveurs reçoivent vos emails et quels services ont le droit d’agir pour votre domaine. Pour une petite entreprise, cinq types font presque tout le travail : A, AAAA, CNAME, MX et TXT.

Relier le domaine est la dernière étape de chaque site que je construis, et je l’ai fait avec des domaines enregistrés chez Namecheap, Spaceship, Infomaniak, Hostinger, OVH et l’ancien Google Domains (repris par Squarespace). Les domaines Squarespace et OVH peuvent être délicats : le seul vrai problème que j’ai rencontré, c’est un point, un seul, à la fin d’un enregistrement.

Si la différence entre nom de domaine, hébergement et messagerie reste floue, commencez par mon guide sur {{< a key="domain-hosting-email-guide" >}}le nom de domaine et l’hébergement{{< /a >}}.

## Serveurs DNS et enregistrements DNS : où se trouve votre zone

Trois notions se confondent facilement :

- **Le registrar** est l’entreprise chez qui vous avez acheté le domaine et payez son renouvellement.
- **Les serveurs DNS** (ou serveurs de noms) hébergent la zone de votre domaine. Vous les choisissez chez le registrar, et le registre de votre extension (l’Afnic pour le .fr) leur envoie toutes les requêtes.
- **La zone DNS** est la liste des enregistrements sur ces serveurs : c’est elle que vous modifiez pour relier un site ou une messagerie.

Sauf si quelqu’un a changé les serveurs DNS, le registrar héberge en général la zone lui-même : vous modifiez les enregistrements dans le compte où vous payez le domaine. Chez OVHcloud, c’est l’onglet **Zone DNS** du domaine, chez Namecheap la page **Advanced DNS** ; mes tutoriels pour {{< a key="namecheap-dns-squarespace" >}}configurer les DNS Namecheap{{< /a >}} et pour {{< a key="spaceship-domain-dns-tutorial" >}}acheter un nom de domaine sur Spaceship{{< /a >}} montrent où la trouver.

Le piège : si les serveurs DNS pointent ailleurs (Cloudflare, un hébergeur, le compte d’une ancienne agence), les enregistrements de votre registrar sont ignorés, même parfaitement remplis. La page du domaine chez votre registrar indique quels serveurs DNS sont utilisés.

Et **changer de serveurs DNS, ce n’est pas modifier un enregistrement**. Vous déplacez toute la zone chez un autre prestataire, et chaque enregistrement que vous n’y recréez pas disparaît, MX compris : c’est ainsi qu’une entreprise perd ses emails du jour au lendemain. Squarespace et GitHub Pages relient tous deux un domaine avec quelques enregistrements : vous gardez vos serveurs DNS actuels.

## Les enregistrements DNS expliqués : nom, type, valeur et TTL

Quelle que soit l’interface, chaque enregistrement comporte les quatre mêmes éléments, qu’un serveur DNS stocke sur une ligne :

```
; nom    TTL    type    valeur
www      3600   CNAME   ext-cust.squarespace.com.
```

- **Nom** (Hôte, Nom ou Sous-domaine selon l’interface). `@` désigne le domaine lui-même, qu’on appelle aussi la racine ou l’apex, et `www` désigne `www.votredomaine.fr`. Chez OVHcloud, le champ reste vide pour la racine au lieu de `@`. Dans la plupart des interfaces, le nom est relatif à votre domaine : tapez `www`, pas `www.votredomaine.fr`, sinon vous risquez de créer `www.votredomaine.fr.votredomaine.fr`.
- **Type** : la nature de la réponse que donne l’enregistrement.
- **Valeur** (Cible, Pointe vers, Données) : une adresse IP, un autre nom ou un texte, selon le type.
- **TTL** (durée de vie) : le nombre de secondes pendant lesquelles les autres serveurs gardent la réponse avant de redemander. 3 600 secondes font une heure.

Les types que vous croiserez :

| Type | Rôle | Exemple de valeur |
|---|---|---|
| A | Relie un nom à une adresse IPv4 | `185.199.108.153` |
| AAAA | Relie un nom à une adresse IPv6 | `2606:50c0:8000::153` |
| CNAME | Fait d’un nom l’alias d’un autre nom | `ext-cust.squarespace.com.` |
| MX | Désigne les serveurs qui reçoivent vos emails | `1 smtp.google.com.` |
| TXT | Porte du texte : SPF, DKIM, DMARC, codes de vérification | `v=spf1 include:_spf.google.com ~all` |
| NS | Désigne les serveurs DNS qui hébergent la zone | Réglé chez le registrar |
| SOA | L’en-tête technique de la zone | Géré par votre hébergeur DNS |
| SRV | Indique le serveur et le port d’un service (appels, chat) | Fourni par le service concerné |
| CAA | Liste les autorités autorisées à délivrer des certificats SSL pour le domaine | `0 issue "letsencrypt.org"` |

Vous toucherez rarement aux quatre derniers. Attention au CAA : s’il existe, il doit autoriser l’autorité de certification de l’hébergeur de votre site, sinon l’hébergeur ne peut pas obtenir de certificat et le HTTPS ne s’active jamais.

## Enregistrements A et AAAA : faire pointer un nom vers un serveur

Un **enregistrement A** relie un nom à une adresse IPv4, les quatre nombres séparés par des points. Un **enregistrement AAAA** fait la même chose pour une adresse IPv6, quatre fois plus longue : d’où les quatre A.

Pour la racine d’un domaine personnalisé sur GitHub Pages, [la documentation de GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) liste quatre enregistrements A et quatre AAAA (à la date de rédaction, octobre 2026) :

```
@   A      185.199.108.153
@   A      185.199.109.153
@   A      185.199.110.153
@   A      185.199.111.153
@   AAAA   2606:50c0:8000::153
@   AAAA   2606:50c0:8001::153
@   AAAA   2606:50c0:8002::153
@   AAAA   2606:50c0:8003::153
```

Trois règles s’appliquent :

1. Plusieurs enregistrements A sur un même nom, c’est normal : ils listent plusieurs serveurs capables de répondre. Ajoutez-les tous.
2. La valeur d’un A ou d’un AAAA est toujours une adresse IP, jamais un nom, et ne prend jamais de point final.
3. N’ajoutez des AAAA que si votre hébergeur vous donne des adresses IPv6. GitHub en publie quatre et conseille de garder les A à côté ; la liste de Squarespace n’en contient aucun.

L’erreur classique, c’est l’AAAA oublié. Vous remplacez les A par les adresses du nouvel hébergeur, mais un ancien AAAA reste sur la racine : chaque visiteur dont la connexion passe en IPv6 continue d’arriver sur l’ancien serveur. Le site peut sembler réparé chez vous et cassé chez un client, selon le réseau de chacun. Si vous construisez vous-même un site simple, mon tutoriel pour {{< a key="build-website-with-ai" >}}créer un site internet avec l’IA et l’héberger sur GitHub Pages{{< /a >}} utilise exactement ces enregistrements.

## Enregistrement CNAME : l’alias, et pourquoi jamais sur la racine

Un **enregistrement CNAME** fait d’un nom l’alias d’un autre nom. Le résolveur du visiteur suit l’alias et utilise les adresses de la cible : quand la plateforme déplace ses serveurs, elle met à jour son propre nom et votre enregistrement continue de fonctionner. Voilà pourquoi les plateformes vous donnent un CNAME pour www :

```
www   CNAME   ext-cust.squarespace.com.    ; un site sur Squarespace
www   CNAME   <utilisateur>.github.io.      ; un site sur GitHub Pages
```

Un nom ne porte qu’un seul CNAME, et deux autres règles l’accompagnent.

**Un CNAME vit seul.** Un nom qui porte un CNAME ne peut contenir aucun autre enregistrement : supprimez les A, AAAA ou TXT de www avant de l’ajouter.

**Jamais de CNAME sur la racine.** La racine de votre domaine doit porter les enregistrements SOA et NS de la zone, et en général vos MX et votre SPF. Comme un CNAME doit rester seul sur son nom, la norme DNS l’interdit à cet endroit, et les interfaces qui vous laissent l’enregistrer malgré tout peuvent casser votre messagerie. C’est pour cela que Squarespace et GitHub Pages vous donnent des enregistrements A pour la racine, et un CNAME seulement pour www.

Certains hébergeurs DNS proposent un contournement : un enregistrement ALIAS ou ANAME, ou le « CNAME flattening » de Cloudflare. Vous saisissez un nom, et l’hébergeur DNS publie pour vous les adresses IP correspondantes sur la racine. GitHub cite les enregistrements ALIAS et ANAME comme alternative à ses A.

## Enregistrement MX : là où arrivent vos emails

Un **enregistrement MX** indique aux autres serveurs de messagerie où livrer les emails envoyés à votre domaine. Chacun porte un numéro de priorité : le plus bas est essayé en premier, les autres servent de secours. Google Workspace utilise désormais un seul enregistrement :

```
@   MX   1   smtp.google.com.
```

Les domaines Workspace plus anciens ont cinq MX, de `ASPMX.L.GOOGLE.COM` à `ALT4.ASPMX.L.GOOGLE.COM`, et [la page de Google sur les valeurs MX](https://support.google.com/a/answer/174125?hl=fr) précise qu’ils continuent de fonctionner : si vos emails marchent, n’y touchez pas.

À retenir :

- Un MX pointe vers un nom, jamais vers une adresse IP, et jamais vers un nom qui est lui-même un CNAME.
- Quand vous changez de fournisseur de messagerie, supprimez les MX de l’ancien. Ceux qui restent envoient une partie de votre courrier dans une boîte que personne ne lit.
- Les MX ne concernent que le courrier entrant. La confiance accordée à vos emails sortants dépend des TXT présentés plus bas.

Si vous n’avez pas encore de boîte sur votre propre domaine, mon guide pour créer une {{< a key="professional-email-address" >}}adresse mail professionnelle{{< /a >}} compare les options.

## Enregistrement TXT : SPF, DKIM, DMARC et preuves de propriété

Un **enregistrement TXT** contient un texte que d’autres services lisent. Pour une petite entreprise, il remplit quatre rôles :

```
@                   TXT   "v=spf1 include:_spf.google.com ~all"
google._domainkey   TXT   "v=DKIM1; k=rsa; p=<clé publique fournie par votre prestataire>"
_dmarc              TXT   "v=DMARC1; p=none; rua=mailto:dmarc@votredomaine.fr"
@                   TXT   "google-site-verification=<code>"
```

1. **SPF**, sur la racine, liste les serveurs autorisés à envoyer des emails pour votre domaine.
2. **DKIM** publie une clé publique sous un nom qui se termine par `._domainkey` ; les serveurs destinataires s’en servent pour vérifier la signature de vos emails. Certains prestataires demandent plutôt un CNAME à cet endroit.
3. **DMARC**, sur `_dmarc`, indique aux serveurs destinataires que faire des emails qui échouent à ces contrôles, et où envoyer les rapports.
4. **Les codes de vérification** prouvent que vous contrôlez le domaine. Google Search Console et bien d’autres services en demandent un ; GitHub Pages utilise un TXT nommé `_github-pages-challenge-<utilisateur>`.

La racine peut porter plusieurs TXT, mais **un seul SPF**. Deux lignes qui commencent par `v=spf1` font échouer le SPF (RFC 7208) : quand un nouveau service vous demande d’ajouter un SPF, intégrez son `include:` à celui que vous avez déjà. La configuration complète se trouve dans mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}}.

## Le point final : le caractère qui casse un CNAME

Dans la syntaxe des fichiers de zone définie par la [RFC 1035, section 5.1](https://www.rfc-editor.org/rfc/rfc1035), un nom qui se termine par un point est absolu : il est complet tel quel. Un nom sans point final est relatif, et le nom de la zone s’ajoute à sa fin. C’est la même règle qui fait que `www` veut dire `www.votredomaine.fr`.

```
www   CNAME   ext-cust.squarespace.com.   ->  ext-cust.squarespace.com
www   CNAME   ext-cust.squarespace.com    ->  ext-cust.squarespace.com.votredomaine.fr
```

La seconde ligne pointe vers un nom qui n’existe pas : l’adresse en www ne s’affiche jamais. Certaines interfaces considèrent ce que vous tapez comme un nom complet et ajoutent le point final pour vous. D’autres écrivent dans la zone exactement ce que vous tapez : la documentation d’OVHcloud précise qu’une cible CNAME qui est un nom de domaine doit se terminer par un point, et les instructions MX de Google signalent des hébergeurs DNS qui exigent `smtp.google.com.` avec son point.

Ce point est le seul vrai problème que j’ai rencontré avec des domaines Squarespace et OVH. Mon tutoriel sur la {{< a key="ovh-dns-squarespace" >}}zone DNS OVH et la connexion à Squarespace{{< /a >}} montre chaque champ.

{{< callout type="warning" >}}**Les noms peuvent demander le point ; les nombres et le texte, jamais.** Les cibles CNAME et MX sont des noms : vérifiez si votre interface ajoute le point pour vous. Les adresses IP (A, AAAA) et le texte des TXT n’en prennent jamais.{{< /callout >}}

Pour vérifier, relisez la zone après validation (le mode textuel d’OVHcloud la montre telle qu’elle est écrite) ou interrogez le nom : si la réponse se termine par votre propre domaine, le point manquait.

## TTL et propagation DNS : combien de temps attendre

Rien n’est diffusé quand vous enregistrez une modification. Ce qu’on appelle la propagation DNS, c’est du cache : les résolveurs qui répondent à vos visiteurs (ceux de leur fournisseur d’accès, ou des résolveurs publics comme le 8.8.8.8 de Google) gardent chaque réponse pendant son TTL, puis redemandent. Avec un TTL de 3 600, la plupart des visiteurs voient le changement dans l’heure.

Les prestataires annoncent des délais plus longs, par prudence. GitHub et OVHcloud parlent de 24 heures au maximum, Squarespace de 24 à 48 heures, parfois jusqu’à 72. Un changement de serveurs DNS est le plus lent, car les résolveurs gardent aussi en cache la liste publiée par le registre, et les registrars annoncent en général jusqu’à 48 heures.

{{< callout type="tip" >}}**Baissez le TTL avant un changement prévu.** Au moins un jour avant, réglez le TTL des enregistrements que vous allez modifier sur 300 secondes (cinq minutes), ou sur le minimum accepté par votre interface. Le jour J, les anciennes réponses expirent en quelques minutes. Remettez 3 600 une fois que tout fonctionne.{{< /callout >}}

Autre habitude : ne testez pas trop tôt. La réponse « ce nom n’existe pas » est mise en cache, elle aussi : ajoutez d’abord les enregistrements, puis vérifiez une fois, un peu plus tard.

## Vérifier vos enregistrements DNS

Votre navigateur et votre ordinateur gardent aussi des réponses en cache : passez par un outil qui interroge directement les serveurs DNS. Les options gratuites : la commande `dig` dans un terminal sur Mac ou Linux, `nslookup` ou `Resolve-DnsName` (PowerShell) sous Windows, ou [l’outil Dig de la Google Admin Toolbox](https://toolbox.googleapps.com/apps/dig/) dans n’importe quel navigateur.

```
$ dig +short votredomaine.fr NS
$ dig +short votredomaine.fr A
$ dig +short www.votredomaine.fr CNAME
$ dig +short votredomaine.fr MX
```

Pour voir un changement sans attendre les caches, interrogez directement l’un de vos serveurs DNS, en remplaçant `ns1.votre-hebergeur-dns.com` par un nom renvoyé par la première commande : `dig @ns1.votre-hebergeur-dns.com www.votredomaine.fr CNAME`. Si le serveur donne déjà la nouvelle valeur, il ne reste qu’à attendre.

## Avant de modifier une zone DNS active : ma check-list

1. **Vérifiez les serveurs DNS**, pour modifier la zone qu’Internet lit réellement.
2. **Copiez toute la zone** dans un fichier texte. Certaines interfaces l’exportent ou l’affichent en texte ; sinon, faites des captures d’écran.
3. **Ne changez que ce que vous déplacez.** Un changement de site touche les A, AAAA et CNAME de la racine et de www ; un changement de messagerie touche les MX, le SPF, le DKIM et le DMARC.
4. **Vous redirigez un second domaine**, un .com vers votre .fr par exemple ? Ne modifiez que ses enregistrements web et gardez tous ceux de la messagerie : MX, SPF, DKIM, DMARC, et autoconfig ou autodiscover s’ils existent.
5. **Respectez les règles** : pas de CNAME sur la racine, un seul SPF par domaine, un point final sur les cibles CNAME et MX quand votre interface l’exige et, sur GitHub Pages, aucun enregistrement générique (wildcard) comme `*.votredomaine.fr`, dont GitHub prévient qu’il permet à d’autres de revendiquer vos sous-domaines.
6. **Supprimez les enregistrements qui pointent vers des services abandonnés.** Un CNAME vers un compte fermé peut être repris par le prochain qui réserve ce nom chez le service.
7. **Testez** avec `dig` ou l’outil de Google, puis laissez passer le TTL avant de modifier autre chose.

Vous n’avez besoin de personne pour relier un domaine : c’est une poignée d’enregistrements, et les plateformes vous les donnent. Passez la main quand l’enjeu dépasse la tâche : le domaine est dans le compte d’une ancienne agence, les emails ne passent plus après un changement et personne n’a gardé de copie de la zone, ou plusieurs services partagent le domaine et plus personne ne sait quel enregistrement sert à quoi. La connexion du domaine fait aussi partie de chaque {{< a page="/services/websites" >}}site que je livre{{< /a >}}.
