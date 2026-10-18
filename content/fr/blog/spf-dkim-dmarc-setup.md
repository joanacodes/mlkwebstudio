---
title: "Mails qui arrivent en spam : configurer SPF, DKIM et DMARC pas à pas"
seo_title: "Configurer SPF, DKIM et DMARC : fini les mails en spam"
description: "Vos mails arrivent en spam ? Configurer SPF, DKIM et DMARC pas à pas : test dans Gmail, enregistrements chez OVH, Spaceship ou Namecheap, rapports DMARC."
slug: "configurer-spf-dkim-dmarc"
translationKey: "spf-dkim-dmarc-setup"
date: 2026-10-17T08:56:00+02:00
lastmod: 2026-10-17T08:56:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["configurer SPF DKIM DMARC", "mail qui arrive en spam", "enregistrement SPF", "enregistrement DKIM", "enregistrement DMARC", "politique DMARC", "afficher l’original Gmail"]
summary: "Pour que vos mails n’arrivent plus en spam, configurez SPF, DKIM et DMARC : un seul enregistrement SPF sur la racine, qui liste tous les services qui envoient en votre nom, une clé DKIM générée par votre messagerie et publiée sur sélecteur._domainkey, et un enregistrement DMARC sur _dmarc, d’abord en p=none avec une adresse de rapports. Vérifiez avec « Afficher l’original » dans Gmail, puis passez DMARC en quarantine, puis en reject, une fois les rapports propres."
cover: "spf-dkim-dmarc-setup"
cover_alt: "Bouclier symbolisant SPF, DKIM et DMARC, les enregistrements qui prouvent que vos emails viennent bien de vous"
related: ["dns-records-explained", "professional-email-address", "cold-email-infrastructure", "spacemail-setup", "ovh-dns-squarespace"]
services: ["rescue"]
faq:
  - q: "Combien de temps faut-il pour que SPF, DKIM et DMARC fonctionnent ?"
    a: "En général quelques heures après l’enregistrement, le temps que les réponses DNS en cache expirent ; OVHcloud annonce 4 à 24 heures pour une modification du SPF. Sur un compte Google Workspace tout neuf, Google indique qu’il faut parfois attendre 24 à 72 heures après l’activation de Gmail avant de pouvoir générer la clé DKIM."
  - q: "DMARC est-il utile si j’envoie peu d’emails ?"
    a: "Oui, en pratique. Gmail et Outlook.com n’exigent formellement les trois enregistrements que des expéditeurs d’environ 5 000 messages par jour et plus, mais tout expéditeur doit avoir SPF ou DKIM, et les messageries professionnelles appliquent leurs propres filtres. Un enregistrement DMARC ne coûte rien, et ses rapports vous montrent qui envoie des emails en votre nom."
  - q: "SPF, DKIM et DMARC empêchent-ils l’usurpation de mon domaine ?"
    a: "Une fois DMARC en reject, les messageries qui appliquent DMARC refusent les emails qui utilisent votre domaine exact sans passer SPF ou DKIM. Rien n’arrête en revanche les domaines ressemblants, avec une lettre inversée ou un tiret en plus : prévenez votre équipe et vos clients."
  - q: "Qu’est-ce que BIMI, et en ai-je besoin ?"
    a: "BIMI affiche votre logo à côté de vos emails dans les messageries compatibles. Il ne fonctionne qu’avec une politique DMARC en quarantine ou en reject, et Gmail exige en plus un certificat de marque payant : c’est facultatif, et cela vient en dernier."
  - q: "Peut-on configurer SPF, DKIM et DMARC pour une adresse Gmail ou Outlook gratuite ?"
    a: "Non. Ces enregistrements se trouvent dans la zone DNS d’un domaine qui vous appartient : ils ne couvrent que les adresses sur ce domaine, comme vous@votreentreprise.fr. Google et Microsoft authentifient eux-mêmes leurs adresses gmail.com et outlook.com."
---

Quand vos mails arrivent en spam, ou qu’un client affirme n’avoir jamais reçu le devis que vous avez bien envoyé, vérifiez d’abord que votre domaine prouve qu’il en est l’expéditeur. Trois enregistrements DNS s’en chargent. Ce tutoriel montre comment configurer SPF, DKIM et DMARC pas à pas : voir ce que Gmail voit, ajouter les enregistrements là où se trouve la zone DNS de votre domaine (exemples chez OVH, Spaceship et Namecheap), puis durcir DMARC pour que les messageries refusent les emails qui se font passer pour vous.

La configuration des emails fait partie des prestations au forfait que je réalise, et j’ai travaillé avec des domaines enregistrés chez OVH, Namecheap, Spaceship, Infomaniak, Hostinger et l’ancien Google Domains. Les enregistrements sont courts. Ce qui demande du soin, c’est de retrouver chaque service qui envoie en votre nom et, chez OVH, de ne pas oublier un point à la fin d’une ligne.

Pour la théorie, MLK Leadhunters a publié [SPF, DKIM et DMARC expliqués simplement](https://mlkleadhunters.com/fr/blog/spf-dkim-dmarc-explained/). Cette page, c’est la pratique.

## Pourquoi vos mails arrivent en spam, et ce que SPF, DKIM et DMARC y changent

Avant de peser vos mots, le serveur qui reçoit votre email vérifie qu’il vient bien du domaine affiché comme expéditeur. Chaque enregistrement répond à une partie de la question :

| Enregistrement | Où il se trouve | Ce qu’il fait |
|---|---|---|
| SPF | TXT sur la racine du domaine | Liste les serveurs autorisés à envoyer ses emails |
| DKIM | TXT ou CNAME sur `sélecteur._domainkey` | Publie la clé qui vérifie la signature ajoutée à chaque email par votre messagerie |
| DMARC | TXT sur `_dmarc` | Dit que faire des emails qui échouent, et où envoyer les rapports |

Ils prouvent votre identité. Ils ne sauvent pas un email qui ressemble à du spam, ni un envoi à des gens qui n’ont rien demandé.

Les grandes messageries les exigent désormais. Depuis février 2024, les [consignes de Google pour les expéditeurs](https://support.google.com/a/answer/81126?hl=fr) imposent à tous ceux qui écrivent à des adresses Gmail de passer SPF ou DKIM et de garder sous 0,1 % la part de leurs emails signalés comme spam par les utilisateurs de Gmail, sans jamais atteindre 0,3 %. Ceux qui envoient environ 5 000 messages par jour ou plus doivent en plus avoir les trois enregistrements, alignés sur le domaine de l’expéditeur ; Yahoo a adopté des règles proches au même moment. Google indique que Gmail applique ces règles plus strictement depuis novembre 2025, avec des rejets temporaires et définitifs. Outlook.com exige les trois enregistrements des domaines qui lui envoient 5 000 messages ou plus par jour depuis le 5 mai 2025.

## Étape 1 : voir ce que Gmail voit avec « Afficher l’original »

1. Depuis votre adresse professionnelle, envoyez un court email à une adresse Gmail personnelle.
2. Ouvrez-le dans Gmail sur un ordinateur, cliquez sur les trois points à côté de la flèche **Répondre**, puis sur **Afficher l’original**.
3. Lisez les lignes en haut de la page. Voici l’objectif :

```
SPF     PASS   (IP 203.0.113.25)
DKIM    PASS   (domaine votreentreprise.fr)
DMARC   PASS
```

Les libellés autour varient selon la langue de Gmail ; ce qui compte, c’est PASS sur chaque ligne et votre propre domaine sur la ligne DKIM. Tout autre résultat renvoie à l’étape qui le corrige :

| Ce que vous voyez | Ce que cela veut dire en général | À corriger |
|---|---|---|
| SPF autre que PASS | Pas de SPF, un SPF cassé, ou un serveur d’envoi absent de la liste | Étape 4 |
| Pas de DKIM, ou PASS avec un autre domaine | DKIM n’est pas activé pour votre domaine : votre messagerie signe avec son propre domaine (chez Google Workspace, un domaine en gappssmtp.com) | Étape 5 |
| DMARC en FAIL, ou pas de ligne DMARC | Pas d’enregistrement DMARC, ou ni SPF ni DKIM validé pour votre propre domaine | Étapes 4 à 6 |

{{< screenshot id="spf-dkim-dmarc-setup-01" alt="Gmail sur le Web : la page Afficher l’original d’un email reçu, avec les lignes SPF, DKIM et DMARC en haut" >}}

## Étape 2 : lister tous les services qui envoient en votre nom

SPF et DKIM doivent couvrir tout ce qui met votre adresse en expéditeur, pas seulement votre boîte mail :

- **Votre messagerie** : celle d’OVHcloud, Google Workspace, Microsoft 365, Spacemail, Private Email chez Namecheap ou une autre. Si vous n’avez pas encore d’adresse sur votre propre domaine, mon guide pour créer une {{< a key="professional-email-address" >}}adresse mail professionnelle{{< /a >}} compare les options.
- **Les outils qui écrivent à vos clients en votre nom** : facturation, comptabilité, prise de rendez-vous, boutique en ligne.
- **Les outils marketing** : l’outil de vos mailings et votre CRM.
- **Votre site**, si ses formulaires envoient depuis votre adresse.

Pour chaque outil, cherchez la page de réglages souvent appelée authentification du domaine ou de l’expéditeur : la plupart fournissent des enregistrements DKIM à ajouter, souvent des CNAME. Beaucoup envoient avec leur propre adresse de retour, si bien que leur include SPF n’aiderait pas DMARC : c’est leur DKIM sur votre domaine qui compte. Envoyez aussi un email de test depuis chaque outil vers Gmail et vérifiez-le avec « Afficher l’original ».

## Étape 3 : ouvrir votre zone DNS chez OVH, Spaceship ou Namecheap

Les enregistrements se placent là où la zone DNS de votre domaine est hébergée : en général chez le registrar, sauf si les serveurs DNS pointent ailleurs, vers Cloudflare ou le compte d’une ancienne agence par exemple. Mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} montre comment vérifier, et mon guide sur {{< a key="domain-hosting-email-guide" >}}le nom de domaine et l’hébergement{{< /a >}} démêle domaine, hébergement et messagerie.

| Hébergeur DNS | Où sont les enregistrements | Racine du domaine | Pour ajouter un enregistrement |
|---|---|---|---|
| OVHcloud | Web Cloud > Noms de domaine > votre domaine > Zone DNS | Sous-domaine vide | Ajouter une entrée |
| Spaceship | Advanced DNS > DNS records > Custom records | `@` | Choisir le type, remplir, Add |
| Namecheap | Domain List > Manage > Advanced DNS | `@` | Add New Record, sous Host Records |

Saisissez les noms sans votre domaine : `_dmarc`, pas `_dmarc.votreentreprise.fr`, sinon certaines interfaces créent `_dmarc.votreentreprise.fr.votreentreprise.fr`. Par habitude, j’utilise Spaceship, et mon tutoriel pour {{< a key="spaceship-domain-dns-tutorial" >}}acheter un nom de domaine sur Spaceship{{< /a >}} détaille sa page Advanced DNS.

{{< callout type="tip" >}}**Copiez la zone avant d’y toucher.** Collez tous les enregistrements dans un fichier texte. Si un TXT sur la racine commence déjà par `v=spf1`, modifiez-le à l’étape 4 : n’en ajoutez jamais un second.{{< /callout >}}

{{< screenshot id="spf-dkim-dmarc-setup-02" alt="Page Advanced DNS de Spaceship : la section Custom records avec la liste des types d’enregistrement ouverte sur TXT" >}}

## Étape 4 : configurer le SPF, un seul enregistrement par domaine

Le SPF est un TXT sur la racine qui liste les serveurs autorisés à envoyer les emails de votre domaine. Chaque messagerie vous donne son include :

| Messagerie | Include à mettre dans votre SPF |
|---|---|
| Messagerie OVHcloud | `include:mx.ovh.com` |
| Google Workspace | `include:_spf.google.com` |
| Microsoft 365 | `include:spf.protection.outlook.com` |
| Spacemail | `include:spf.spacemail.com` |

Tous les expéditeurs tiennent dans un seul enregistrement :

```
; faux : deux SPF, donc le SPF échoue
@   TXT   "v=spf1 include:mx.ovh.com ~all"
@   TXT   "v=spf1 include:<votre autre outil> ~all"

; juste : un seul SPF qui cite les deux
@   TXT   "v=spf1 include:mx.ovh.com include:<votre autre outil> ~all"
```

Trois règles pour qu’il fonctionne :

1. **Un seul SPF par domaine.** Selon la RFC 7208, deux enregistrements font échouer le SPF : ajoutez chaque nouvel include à l’enregistrement existant.
2. **Dix requêtes DNS au maximum.** Chaque `include`, `a` et `mx` compte, y compris les include imbriqués dans celui d’un prestataire. Au-delà de dix, le SPF renvoie une erreur qui vaut un échec : retirez les services que vous avez quittés.
3. **La fin de la ligne.** `~all` demande de traiter comme suspects les emails venus de serveurs non listés, `-all` de les refuser. L’exemple de Google utilise `~all`, OVHcloud recommande `-all`. Gardez `~all` tant que vous découvrez des expéditeurs, et laissez DMARC faire respecter la règle.

Chez OVH, **Ajouter une entrée** propose un type SPF guidé, avec une option qui inclut les serveurs email d’OVH ; un TXT sur le sous-domaine vide fait la même chose. Chez Namecheap : **Domain List**, **Manage** en face du domaine, onglet **Advanced DNS**, puis **Add New Record** sous Host Records, type **TXT Record**, `@` comme host, la valeur, et enregistrez.

{{< screenshot id="spf-dkim-dmarc-setup-03" alt="Advanced DNS de Namecheap, Host Records : un TXT Record sur le host @ avec la valeur v=spf1 include:_spf.google.com ~all" >}}

## Étape 5 : configurer DKIM avec votre messagerie

DKIM signe chaque email avec une clé privée qui reste chez votre messagerie ; les serveurs destinataires vérifient la signature grâce à une clé publique publiée sur `sélecteur._domainkey`. Vous générez la clé chez la messagerie, la publiez dans votre zone DNS, puis activez la signature.

- **Messagerie OVHcloud.** Le DKIM des offres email d’OVHcloud passe par des enregistrements CNAME, comme chez Microsoft 365.
- **Google Workspace.** Dans la console d’administration, ouvrez **Applications** > **Google Workspace** > **Gmail** > **Authentifier les e-mails**, choisissez le domaine et cliquez sur **Générer un nouvel enregistrement**. Publiez le TXT sur `google._domainkey`, puis revenez dans la console pour lancer l’authentification. Google recommande une clé de 2048 bits, et son [aide sur DKIM](https://knowledge.workspace.google.com/admin/security/set-up-dkim?hl=fr) traite des hébergeurs DNS qui n’acceptent que 1024 bits.
- **Microsoft 365.** Les réglages DKIM du portail Microsoft Defender donnent deux CNAME, `selector1._domainkey` et `selector2._domainkey`. Ajoutez-les, puis activez la signature au même endroit. J’utilisais Microsoft pour mes propres emails et c’était pénible : prévoyez un peu de patience.
- **Spacemail.** Sur les serveurs DNS de Spaceship, vérifiez dans Advanced DNS que `spacemail._domainkey` est bien là. Avec un autre hébergeur DNS, copiez l’enregistrement depuis Advanced DNS (Inactive records > Spacemail DNS records), comme le montre mon tutoriel pour {{< a key="spacemail-setup" >}}configurer Spacemail{{< /a >}}.

Une clé de 2048 bits dépasse 255 caractères, la limite d’une chaîne dans un TXT : elle est donc stockée en plusieurs chaînes dans un même enregistrement. Certaines interfaces la découpent pour vous ; si la vôtre refuse la valeur, cherchez dans son aide la saisie des TXT longs.

{{< screenshot id="spf-dkim-dmarc-setup-04" alt="Console d’administration Google, Gmail > Authentifier les e-mails : le domaine choisi et l’enregistrement TXT DKIM généré, nommé google._domainkey" >}}

Chez OVH, les CNAME de DKIM demandent un caractère de plus :

```
selector1._domainkey   CNAME   <cible donnée par Microsoft>.
selector2._domainkey   CNAME   <cible donnée par Microsoft>.
```

{{< callout type="warning" >}}**Chez OVH, terminez les cibles CNAME par un point.** Sans lui, l’éditeur de zone d’OVH ajoute votre domaine à la cible, qui devient `<cible>.votreentreprise.fr`, un nom qui n’existe pas. Ce point est le piège que je connais le mieux en reliant des domaines OVH ; mon tutoriel sur la {{< a key="ovh-dns-squarespace" >}}zone DNS OVH{{< /a >}} le montre sur un enregistrement de site web. Les valeurs TXT, elles, ne prennent jamais de point.{{< /callout >}}

{{< screenshot id="spf-dkim-dmarc-setup-05" alt="Zone DNS OVHcloud, formulaire Ajouter une entrée pour un CNAME sur selector1._domainkey, avec une cible terminée par un point" >}}

## Étape 6 : configurer DMARC, en commençant par p=none

DMARC est validé quand SPF ou DKIM passe pour le même domaine que celui de votre adresse d’expéditeur : c’est l’alignement. L’enregistrement indique aussi que faire quand aucun des deux ne passe, et où envoyer les rapports. C’est un seul TXT nommé `_dmarc`, et la première version observe sans rien bloquer :

```
_dmarc   TXT   "v=DMARC1; p=none; rua=mailto:dmarc@votreentreprise.fr"
```

- `p=none` ne demande que des rapports, et suffit déjà aux règles de Gmail, Yahoo et Outlook.com pour les gros expéditeurs.
- `rua=` est l’adresse des rapports quotidiens. Donnez-leur une boîte ou un alias à part : ils arrivent en pièces jointes XML compressées. Une adresse sur un autre domaine, celle d’un service de rapports par exemple, doit être autorisée par ce domaine, ce que ces services font pour vous.

Gardez un seul enregistrement `_dmarc` par domaine. Votre messagerie ne le crée pas forcément : Spacemail, par exemple, ne le fait pas. Chez OVH, le type DMARC du formulaire fonctionne, mais un TXT sur le sous-domaine `_dmarc` accepte toutes les balises.

{{< callout type="note" >}}**DMARC a une nouvelle norme.** En mai 2026, l’IETF a publié la [RFC 9989](https://www.rfc-editor.org/rfc/rfc9989), qui remplace la RFC 7489. Les enregistrements existants continuent de fonctionner, mais la balise `pct=`, qui appliquait la politique à un pourcentage des emails, disparaît. Des tutoriels plus anciens s’en servent encore pour un déploiement progressif : laissez-la de côté.{{< /callout >}}

{{< screenshot id="spf-dkim-dmarc-setup-06" alt="Advanced DNS de Spaceship, Custom records : un TXT sur le host _dmarc avec la valeur v=DMARC1; p=none; rua=mailto:dmarc@votreentreprise.fr" >}}

## Étape 7 : tester les trois enregistrements

Les enregistrements peuvent mettre quelques heures à apparaître partout. Interrogez ensuite le DNS depuis un terminal sur Mac ou Linux, en remplaçant `google` par le sélecteur de votre messagerie :

```
dig +short TXT votreentreprise.fr
dig +short TXT google._domainkey.votreentreprise.fr
dig +short TXT _dmarc.votreentreprise.fr
```

Sous Windows, `nslookup -type=TXT _dmarc.votreentreprise.fr` fait la même chose, et la Google Admin Toolbox propose une page Dig dans n’importe quel navigateur. Pour un DKIM en CNAME, demandez `CNAME` au lieu de `TXT`.

Envoyez enfin un nouvel email vers Gmail et rouvrez **Afficher l’original** : PASS sur les trois lignes, avec votre propre domaine sur la ligne DKIM. Recommencez avec chaque outil de l’étape 2.

{{< screenshot id="spf-dkim-dmarc-setup-07" alt="Afficher l’original dans Gmail après la configuration : SPF, DKIM et DMARC en PASS, avec le domaine de l’entreprise sur la ligne DKIM" >}}

## Étape 8 : lire les rapports, puis passer en quarantine et en reject

En `p=none`, rien n’est bloqué ; les rapports vous disent quand vous pouvez changer cela. Chacun liste les serveurs qui ont envoyé des emails au nom de votre domaine, combien chacun en a envoyé, et si SPF et DKIM sont passés :

```xml
<row>
  <source_ip>203.0.113.25</source_ip>
  <count>42</count>
  <policy_evaluated>
    <disposition>none</disposition>
    <dkim>pass</dkim>
    <spf>pass</spf>
  </policy_evaluated>
</row>
```

Un service de rapports DMARC transforme ces fichiers en tableaux lisibles. Trois choses à repérer :

- **Un de vos services en échec** : configurez son DKIM (étape 5) ou ajoutez-le au SPF (étape 4).
- **Des emails transférés qui échouent au SPF** : c’est attendu, le serveur qui transfère n’est pas dans votre liste. DKIM survit en général au transfert, donc DMARC passe quand même : une raison de plus d’avoir DKIM partout.
- **Des serveurs que vous ne reconnaissez pas** : quelqu’un envoie en votre nom, ce que les deux réglages suivants arrêtent.

Quand quelques semaines de rapports montrent vos propres services en PASS, durcissez la politique en deux temps, à quelques semaines d’écart :

1. `p=quarantine` : les messageries placent les emails en échec dans les spams.
2. `p=reject` : celles qui appliquent DMARC les refusent.

```
_dmarc   TXT   "v=DMARC1; p=reject; rua=mailto:dmarc@votreentreprise.fr"
```

Gardez l’adresse `rua=` après le passage en reject : les rapports sont votre moyen de repérer un nouvel outil que personne n’a authentifié.

## Domaines qui n’envoient rien, et domaines de cold emailing

Un ancien nom de marque, un .com qui redirige vers votre .fr, un domaine acheté pour protéger votre nom : quand rien n’en part, personne ne le surveille, ce qui arrange quiconque veut se faire passer pour vous. Fermez-le avec deux enregistrements, uniquement là où rien n’est envoyé :

```
@        TXT   "v=spf1 -all"
_dmarc   TXT   "v=DMARC1; p=reject"
```

Le cold emailing est le cas inverse : des domaines secondaires qui ne servent qu’à envoyer, jamais votre domaine principal, pour les raisons que MLK Leadhunters donne dans [n’envoyez jamais de cold emails depuis votre domaine principal](https://mlkleadhunters.com/fr/blog/never-send-from-your-main-domain/). Chaque domaine secondaire a besoin de MX, SPF, DKIM et DMARC, et `p=none` suffit aux règles des messageries. Les enregistrements ne sont que le ticket d’entrée : mes campagnes partent en texte brut, sans liens ni HTML, pour une bonne délivrabilité, et s’arrêtent à trois emails. Mon guide sur l’{{< a key="cold-email-infrastructure" >}}infrastructure de cold emailing{{< /a >}} dimensionne les domaines et les boîtes.

Spacemail est la messagerie que j’encourage pour sa configuration simple, mais les règles de Spaceship interdisent les envois en masse non sollicités et la chauffe automatisée par des outils tiers : lisez sa politique et obtenez son accord écrit avant d’utiliser Spacemail pour du cold emailing. Si vous préférez confier vos campagnes, c’est le métier de [MLK Leadhunters](https://mlkleadhunters.com/fr/).

## Configurer SPF, DKIM et DMARC : la checklist, et quand déléguer

1. « Afficher l’original » sur un email de test vers Gmail, avant et après.
2. La liste de tous les services qui envoient au nom de votre domaine.
3. Une copie de la zone DNS avant toute modification.
4. Un seul SPF, avec tous les expéditeurs, dix requêtes au maximum.
5. DKIM activé chez votre messagerie et dans chaque outil, avec un point final sur les cibles CNAME chez OVH.
6. Un seul DMARC, d’abord en `p=none`, avec une adresse de rapports que quelqu’un lit.
7. Quelques semaines de rapports propres, puis quarantine, puis reject.
8. `v=spf1 -all` et `p=reject` sur les domaines qui n’envoient rien.

Vous n’avez pas besoin de moi quand une seule messagerie envoie tous vos emails : trois enregistrements et un peu de patience suffisent. Déléguez quand plusieurs outils envoient au nom de votre domaine sans que personne ne sache lesquels, quand le SPF frôle les dix requêtes, quand les rapports montrent des serveurs inconnus, ou quand vos emails n’arrivent plus depuis une modification DNS : c’est le cas urgent.
