---
title: "Nom de domaine et hébergement : quelle différence, et où héberger vos emails ?"
seo_title: "Nom de domaine et hébergement : quelle différence ?"
description: "Nom de domaine et hébergement : ce que fait chacun, pourquoi l’email est un troisième service, comment les DNS relient le tout et quels comptes garder."
slug: "nom-de-domaine-et-hebergement"
translationKey: "domain-hosting-email-guide"
date: 2026-10-17T09:48:00+02:00
lastmod: 2026-10-17T09:48:00+02:00
category: "domains"
article_type: "pillar"
keywords: ["nom de domaine et hébergement", "différence entre nom de domaine et hébergement", "hébergement web", "hébergement email", "registrar ou hébergeur", "nom de domaine .fr ou .com"]
summary: "Le nom de domaine est l’adresse que vous louez chez un registrar (votre-entreprise.fr), l’hébergement est le serveur qui stocke votre site et l’envoie aux visiteurs, et la messagerie gère les boîtes derrière contact@votre-entreprise.fr. Les trois peuvent être chez trois sociétés différentes, car les DNS les relient : les enregistrements A et CNAME pointent vers le site, les MX vers les boîtes mail. Déposez le domaine au nom de votre entreprise et gardez cet accès."
cover: "domain-hosting-email-guide"
cover_alt: "Un nom de domaine relié par les DNS à un hébergeur web et à une messagerie"
related: ["dns-records-explained", "fr-domain-names", "web-hosting-comparison", "professional-email-address", "o2switch-review"]
services: ["websites"]
faq:
  - q: "Faut-il acheter un nom de domaine pour avoir un site ?"
    a: "Pas forcément : Squarespace donne à chaque site une adresse intégrée, et GitHub Pages publie les sites sur votrenom.github.io. Une entreprise a tout de même besoin de son propre domaine : c’est l’adresse de vos cartes et de vos factures, elle vous suit quand vous changez de plateforme, et elle porte votre adresse mail professionnelle."
  - q: "Que deviennent mon site et mes emails si mon nom de domaine expire ?"
    a: "Les deux s’arrêtent dès que le registrar suspend le domaine, car ses DNS ne pointent plus vers vos serveurs. Il reste en général un délai pour renouveler, parfois avec des frais, avant que le nom redevienne libre pour tout le monde. Sa durée dépend du registrar et de l’extension : gardez le renouvellement automatique activé."
  - q: "Combien de temps faut-il pour relier un domaine à un site ?"
    a: "Les changements DNS apparaissent souvent en quelques heures, mais les fournisseurs demandent plus de marge : jusqu’à 24 heures chez OVHcloud et pour GitHub Pages, et de 24 à 72 heures avant que Squarespace affiche un domaine externe comme connecté."
  - q: "Peut-on changer de registrar sans couper son site ?"
    a: "Oui, tant que les DNS continuent de répondre pendant le transfert. Recopiez tous les enregistrements avant de commencer et gardez les mêmes serveurs de noms jusqu’à la fin du transfert : le site et les emails restent en ligne, et vous pourrez déplacer la zone DNS ensuite."
  - q: "Faut-il masquer ses coordonnées dans le Whois ?"
    a: "Pour un .fr, l’Afnic restreint par défaut la publication des coordonnées d’un particulier titulaire. Pour un .com, Spaceship et Namecheap incluent gratuitement la protection Whois sur les extensions qui l’acceptent : laissez-la activée, surtout si votre adresse professionnelle est celle de votre domicile."
---

Nom de domaine et hébergement : on les achète souvent ensemble, alors on les confond souvent. Le nom de domaine est l’adresse que l’on tape, comme votre-entreprise.fr. L’hébergement est l’ordinateur qui stocke votre site et l’envoie au navigateur de vos visiteurs. L’email, enfin, est un troisième service, avec ses propres serveurs, et rien n’oblige à prendre les trois chez la même société.

Relier le site à son nom de domaine est la dernière étape de chaque projet de site que je livre, juste avant la mise en ligne. J’ai déposé ou relié des domaines chez Squarespace (qui a repris Google Domains), Namecheap, Spaceship, Infomaniak, Hostinger et OVHcloud, et le seul vrai piège rencontré tient en un caractère. Je vous le montre plus bas.

Cette page est le point de départ de la rubrique Domaines, hébergement & email du blog : ce que fait chaque pièce, comment les DNS les relient, quels comptes votre entreprise doit détenir, et quel guide ouvrir ensuite.

## Nom de domaine et hébergement : la différence en un tableau

Chaque colonne est un service distinct, que vous pouvez acheter, renouveler et déplacer séparément.

| | Nom de domaine | Hébergement web | Hébergement email |
|---|---|---|---|
| Ce que c’est | Le nom que l’on tape pour vous trouver | Les serveurs qui stockent votre site et l’envoient aux visiteurs | Les serveurs qui reçoivent, stockent et envoient vos emails |
| Exemple | votre-entreprise.fr | Squarespace, GitHub Pages, une offre cPanel | contact@votre-entreprise.fr chez Spacemail ou Google Workspace |
| Qui le vend | Un registrar : OVHcloud, Infomaniak, Spaceship, Namecheap | Un hébergeur ou un créateur de sites | Un fournisseur de messagerie |
| Comment on paie | Un renouvellement chaque année | Au mois ou à l’année, ou inclus dans l’abonnement d’un créateur de sites | Par boîte mail ou par utilisateur |
| Exemple de prix (octobre 2026) | 7 € HT par an pour un .fr chez Infomaniak | 0 € sur GitHub Pages, inclus dans un abonnement Squarespace | Moins de 1 € par mois chez Spacemail, 6,80 € HT par utilisateur chez Google Workspace |
| Ses enregistrements DNS | Les serveurs de noms (NS) | A, AAAA et CNAME | MX, plus TXT pour SPF, DKIM et DMARC |

Si vous ne retenez qu’une image, gardez celle-ci : le domaine est votre adresse postale, l’hébergement vos locaux, l’email votre boîte aux lettres. Vous pouvez déménager dans des locaux plus grands sans changer d’adresse, à condition de mettre l’annuaire à jour. Cet annuaire, ce sont les DNS.

## Le nom de domaine : ce que vous louez, et à qui

Un nom de domaine est l’adresse lisible qui envoie visiteurs et emails vers les serveurs de votre entreprise. On ne l’achète jamais vraiment : on le loue pour un an ou plus, puis on le renouvelle, faute de quoi on le perd.

Trois acteurs entrent en jeu :

- Le **registre** gère l’extension : l’Afnic pour le .fr, Verisign pour le .com.
- Le **registrar** vous vend le nom pour le compte du registre : OVHcloud, Infomaniak, Spaceship, Namecheap et bien d’autres.
- Le **titulaire** est la personne ou la société au nom de laquelle le domaine est déposé. Ce doit être votre entreprise, et la partie sur les comptes, plus bas, explique pourquoi.

Le registrar compte pour trois choses : le prix de renouvellement, l’éditeur DNS et le support. Comparez toujours le renouvellement, pas la première année. Au moment où j’écris (octobre 2026), un .fr se renouvelle à [7 € HT par an chez Infomaniak](https://www.infomaniak.com/en/domains/prices/fr), après une première année en promotion. {{< a key="best-domain-registrar" >}}Où acheter un nom de domaine{{< /a >}} compare six registrars sur ce point précis, et {{< a key="hostinger-renewal-transfer" >}}transférer un domaine Hostinger{{< /a >}} montre ce que devient un prix d’appel une fois l’engagement terminé.

Je fais confiance à Namecheap comme à Spaceship, que Namecheap a créé. Pour moi, Spaceship est une version à jour de Namecheap : des prix justes, un support joignable 24 h/24 et 7 j/7, et tous les problèmes que j’ai signalés ont été résolus. C’est là que j’ai mes habitudes. {{< a key="spaceship-vs-namecheap" >}}Mon avis sur Spaceship{{< /a >}} compare les deux, et {{< a key="spaceship-domain-dns-tutorial" >}}acheter un nom de domaine sur Spaceship{{< /a >}} vous guide de l’achat à la configuration des DNS, pas à pas.

Si votre domaine est chez un registrar qui ne vous convient plus, vous pouvez le déplacer sans rien changer d’autre : {{< a key="transfer-domain-name" >}}transférer un nom de domaine{{< /a >}} détaille la méthode, code de transfert compris.

## L’hébergement web : ce qu’il fait, et quand vous n’en avez pas besoin

L’hébergement web est un espace loué sur un serveur allumé jour et nuit, qui stocke les fichiers de votre site et les envoie au navigateur de chaque visiteur. Ce qu’il vous faut dépend de la façon dont le site est construit, et dans un cas fréquent, vous n’achetez pas d’hébergement du tout.

| Comment le site est construit | Où il est hébergé | Pour qui |
|---|---|---|
| Créateur de sites (Squarespace, Shopify) | Inclus dans l’abonnement | Les entreprises qui veulent modifier leur site sans aide |
| WordPress ou site codé sur hébergement mutualisé (cPanel) | o2switch, Infomaniak, Spaceship Web Hosting, Hostinger, OVHcloud | Les sites qui ont besoin d’une base de données ou d’extensions |
| Site statique (HTML et CSS) | GitHub Pages, gratuit pour un dépôt public | Les sites vitrines sans boutique ni espace client |
| Application ou outil sur mesure | Un serveur cloud ou une plateforme d’applications, comme la gamme Starlight de Spaceship | Les logiciels, pas les sites vitrines |

**Si votre site est sur Squarespace, l’hébergement est compris dans l’abonnement** : il ne reste qu’à relier votre domaine. C’est ce que je propose aux clients qui veulent faire leurs modifications eux-mêmes, parce que changer un mot n’y fait jamais tomber la mise en page. Si vous hésitez encore sur la plateforme, {{< a key="small-business-website-guide" >}}le guide pour créer un site internet professionnel{{< /a >}} compare les options, et {{< a key="website-cost" >}}le prix d’un site vitrine{{< /a >}} couvre le coût du site lui-même.

Pour WordPress ou un site codé, il faut un hébergeur. J’ai travaillé avec OVHcloud et Hostinger parce que des clients y étaient déjà. Les deux conviennent aux profils techniques, mais je ne les recommande pas à un dirigeant qui gère son site sans équipe : ils sont un peu compliqués à prendre en main. J’ai découvert o2switch et Infomaniak de la même façon, et je recommande les deux. {{< a key="o2switch-review" >}}Mon avis sur o2switch{{< /a >}}, l’hébergeur français de Clermont-Ferrand, et {{< a key="infomaniak-review" >}}mon avis sur Infomaniak{{< /a >}} expliquent pourquoi, et {{< a key="web-hosting-comparison" >}}quel hébergeur web choisir{{< /a >}} compare les quatre. Spaceship vend aussi de l’hébergement, du mutualisé sous cPanel aux serveurs cloud pour applications : {{< a key="spaceship-hosting" >}}l’hébergement Spaceship{{< /a >}} indique quelle offre convient à quel site.

Un site vitrine simple peut aussi se créer avec l’IA et s’héberger gratuitement. Ce site-ci est un site statique hébergé sur GitHub Pages sous son propre nom de domaine, et {{< a key="build-website-with-ai" >}}créer un site internet avec l’IA{{< /a >}} montre toute la méthode. GitHub précise que Pages n’est pas fait pour faire tourner une activité en ligne comme une boutique : gardez-le pour un site vitrine.

## L’hébergement des emails : la troisième pièce qu’on oublie

L’hébergement email est le service qui fait tourner vos boîtes mail : il reçoit les messages envoyés à votre domaine, les stocke et envoie vos réponses. Acheter un domaine n’en crée aucune, et un créateur de sites non plus.

Squarespace, par exemple, ne gère pas de boîtes mail lui-même. Son offre email est Google Workspace, à acheter depuis le panneau Domaines, et d’autres fournisseurs se branchent sur un domaine Squarespace par les enregistrements DNS. Certains hébergements web incluent en revanche des boîtes mail : o2switch fournit des adresses illimitées, et le Web Hosting de Spaceship est livré avec une offre Spacemail spéciale. C’est pratique, mais vos emails dépendent alors de votre hébergement : résilier ou déplacer l’un oblige à s’occuper de l’autre.

**Je préfère garder l’email sur un service à part.** Vous pouvez alors refaire le site, changer de plateforme ou d’hébergeur sans que votre boîte mail s’en aperçoive. Les principales options pour une petite entreprise :

- Spacemail, la messagerie de Spaceship : moins de 1 € par mois et par boîte au moment où j’écris (octobre 2026), le prix étant affiché en dollars sur [les offres Spacemail de Spaceship](https://www.spaceship.com/business-email/). C’est l’option que je recommande quand on travaille à son compte, et {{< a key="spacemail-setup" >}}configurer Spacemail{{< /a >}} couvre la boîte, les DNS et les réglages IMAP.
- Google Workspace : l’offre Business Starter coûte 6,80 € HT par utilisateur et par mois avec l’engagement annuel, [d’après Google](https://knowledge.workspace.google.com/admin/billing/compare-flexible-and-annual-fixed-term-payment-plans?hl=fr). Elle a du sens si votre équipe vit déjà dans Gmail, Drive et Meet.
- Microsoft 365 : le même principe, autour d’Outlook et de Teams. J’ai géré mes emails chez Microsoft, et c’était pénible. Je n’ai jamais eu ce problème avec les messageries de Namecheap et de Spaceship.
- La kSuite d’Infomaniak : messagerie, stockage et outils collaboratifs hébergés en Suisse, présentés dans l’avis Infomaniak cité plus haut.

{{< a key="professional-email-address" >}}Créer une adresse mail professionnelle{{< /a >}} compare ces options en détail, prix compris.

Quel que soit le fournisseur, ajoutez les enregistrements SPF, DKIM et DMARC à votre domaine. Depuis février 2024, Gmail exige que les expéditeurs authentifient leurs messages, et depuis novembre 2025, il rejette davantage ceux qui échouent. Si vos mails arrivent en spam, {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} règle le problème pas à pas.

Une dernière règle : n’envoyez jamais de cold emails depuis votre domaine principal. La prospection se fait sur des domaines secondaires, avec leurs propres boîtes, pour que votre messagerie de tous les jours n’en paie jamais le prix. {{< a key="cold-email-infrastructure" >}}L’infrastructure de cold emailing{{< /a >}} explique comment la dimensionner, et MLK Leadhunters, la marque sœur du studio pour le cold emailing, explique [pourquoi le domaine principal reste à l’écart](https://mlkleadhunters.com/fr/blog/never-send-from-your-main-domain/).

## Comment les DNS relient domaine, hébergement et emails

Le DNS (Domain Name System) est l’annuaire public qui traduit votre nom de domaine en adresses des serveurs qui s’en occupent. C’est lui qui permet à un même domaine d’envoyer les visiteurs vers Squarespace et les emails vers Spacemail.

Deux idées suffisent pour l’essentiel.

Les serveurs de noms décident où vivent vos enregistrements. Par défaut, c’est le registrar qui héberge votre zone DNS, et vous modifiez les enregistrements dans son interface. Si vous pointez les serveurs de noms ailleurs, chez Squarespace ou chez un hébergeur, cet endroit devient le seul où vos modifications comptent. Modifier la zone chez le registrar alors que les serveurs de noms pointent ailleurs ne change rien : c’est une cause classique de connexion qui semble bloquée.

Chaque enregistrement a un rôle. A et AAAA envoient le domaine vers l’adresse IP d’un serveur, un CNAME fait d’un nom l’alias d’un autre, les MX désignent les serveurs qui reçoivent vos emails, et les TXT portent le SPF, le DKIM, le DMARC et les codes de vérification demandés par les plateformes. {{< a key="dns-records-explained" >}}Les enregistrements DNS expliqués{{< /a >}} détaille chaque type avec des exemples.

Voici la zone d’une configuration courante, avec le domaine chez OVHcloud, le site sur Squarespace et les emails chez Spacemail :

```
; votre-entreprise.fr, domaine chez OVHcloud, site sur Squarespace, emails chez Spacemail
@                         A      198.185.159.144
@                         A      198.185.159.145
@                         A      198.49.23.144
@                         A      198.49.23.145
www                       CNAME  ext-cust.squarespace.com.
<code Squarespace>        CNAME  verify.squarespace.com.
@                         MX 0   mx1.spacemail.com.
@                         MX 0   mx2.spacemail.com.
@                         TXT    "v=spf1 include:spf.spacemail.com ~all"
spacemail._domainkey      TXT    "v=DKIM1; k=rsa; p=<clé fournie par Spaceship>"
_dmarc                    TXT    "v=DMARC1; p=none; rua=mailto:dmarc@votre-entreprise.fr"
```

Dans la zone DNS d’OVHcloud, la racine (@) correspond au sous-domaine laissé vide.

La moitié haute concerne le site, la moitié basse les emails. **Pour déménager le site, vous ne touchez qu’à la moitié haute ; pour changer de messagerie, qu’à la moitié basse.** C’est cette séparation qui permet à trois sociétés de travailler ensemble sans se connaître.

Deux erreurs reviennent souvent. Un CNAME ne se met jamais sur la racine du domaine (les lignes @) : la racine porte déjà d’autres enregistrements, comme les serveurs de noms, les MX et les TXT, et un CNAME ne peut partager son nom avec aucun autre enregistrement. Certains hébergeurs DNS, dont Spaceship, proposent pour ce cas un enregistrement Alias. Et quand une plateforme propose de reprendre vos serveurs de noms, lisez d’abord les conditions. Squarespace prévient que sa connexion par serveurs de noms supprime les CNAME et peut casser une messagerie configurée par enregistrements DNS : il conseille alors de relier le domaine par enregistrements DNS pour garder les vôtres.

{{< callout type="warning" >}}**Le point final.** Dans la zone DNS d’OVHcloud, une cible CNAME saisie `ext-cust.squarespace.com` peut être enregistrée comme `ext-cust.squarespace.com.votre-entreprise.fr`, et la connexion échoue. Tapez-la avec un point final : `ext-cust.squarespace.com.` Les domaines OVHcloud et Squarespace sont ceux qui m’ont donné du fil à retordre, et le seul problème, c’était ce point.{{< /callout >}}

Le point est une règle du DNS, pas une lubie d’OVHcloud : un nom qui se termine par un point est complet, un nom sans point reçoit le nom de la zone à la suite. Certaines interfaces ajoutent le point pour vous, d’autres non. Les tutoriels montrent chaque interface telle qu’elle est : {{< a key="ovh-dns-squarespace" >}}la zone DNS OVH reliée à Squarespace{{< /a >}}, {{< a key="namecheap-dns-squarespace" >}}les DNS Namecheap configurés pour Squarespace{{< /a >}} et le tutoriel Spaceship cité plus haut.

## Une seule société ou trois : faut-il tout regrouper ?

Tout prendre chez la même société est tentant : un compte, une facture, un support, et des enregistrements souvent remplis pour vous. Avec les serveurs de noms de Spaceship, par exemple, Spacemail ajoute lui-même ses enregistrements. Séparer les pièces demande un peu plus de DNS, et vous laisse libre en échange.

| | Tout chez une seule société | Domaine, site et emails séparés |
|---|---|---|
| Mise en place | La plus rapide, avec des enregistrements souvent ajoutés pour vous | Quelques enregistrements à recopier à la main |
| Facturation | Une seule facture, mais des prix d’appel souvent liés à un long engagement | Plusieurs petites factures, faciles à comparer |
| Changer une pièce | Les autres peuvent être emportées avec | Vous en déplacez une, les autres continuent |
| Compte perdu ou piraté | Tout tombe en même temps | Les dégâts restent au même endroit |

La configuration que je conseille à la plupart des petites entreprises : le domaine et les emails chez un registrar de confiance (pour moi, par habitude, Spaceship et Spacemail), et le site là où il est le mieux construit. Autrement dit, Squarespace pour qui veut modifier son site sans aide, o2switch ou GitHub Pages pour un site codé. Ce que j’éviterais : un pack choisi pour son prix de première année. Les offres de Hostinger ne sont bon marché que sur de longs engagements prépayés, et le renouvellement raconte une autre histoire.

## Les comptes que votre entreprise doit détenir

Qui détient le compte du registrar détient votre site et vos emails, puisque les deux dépendent des DNS du domaine. Les comptes appartiennent donc à l’entreprise, pas au prestataire web, au neveu qui a tout installé ou à l’adresse personnelle d’un salarié.

1. Le domaine est déposé au nom de votre entreprise. Le titulaire est le détenteur légal, quel que soit celui qui a payé la facture. Vérifiez-le dans le Whois : celui de l’Afnic pour un .fr, ICANN Lookup pour un .com.
2. L’identifiant de connexion est une adresse que vous contrôlerez toujours, idéalement hors du domaine lui-même. Si le domaine expire, une boîte sur ce même domaine ne reçoit plus les rappels de renouvellement.
3. La double authentification est activée chez le registrar, l’hébergeur et la messagerie.
4. Le renouvellement automatique est activé et la carte enregistrée est valide. Notez les dates d’échéance ailleurs que dans les emails du registrar.
5. Votre prestataire reçoit un accès, pas la propriété. Invitez-le comme utilisateur ou contributeur quand la plateforme le permet, et retirez cet accès à la fin de la mission.

{{< callout type="tip" >}}**Vérifiez aujourd’hui, pas le jour où tout casse.** Consultez le Whois de votre domaine, confirmez que le titulaire est bien votre entreprise et assurez-vous de pouvoir vous connecter vous-même au registrar. C’est rapide tant que tout fonctionne, long et stressant une fois que quelqu’un est parti avec le mot de passe.{{< /callout >}}

Si quelqu’un d’autre détient déjà votre domaine, {{< a key="recover-domain-name" >}}récupérer son nom de domaine auprès d’un ancien prestataire{{< /a >}} décrit les étapes, de la demande écrite à la procédure SYRELI. Pour la sécurité au sens large, des mots de passe à la marche à suivre après un piratage, voyez {{< a key="website-security-guide" >}}comment sécuriser son site internet{{< /a >}}.

## Choisir l’extension : .fr ou .com ?

Pour une entreprise qui vend en France, le .fr est le choix naturel : il dit au premier coup d’œil que vous travaillez ici. Le .com convient à une activité tournée vers l’international, ou à un nom qui ne fonctionne qu’en .com. Si les deux sont libres, déposez les deux et redirigez l’un vers l’autre par une redirection permanente (301), pour qu’une seule adresse apparaisse dans Google et sur vos cartes de visite.

Le .fr a ses règles. D’après [la charte de nommage de l’Afnic](https://www.afnic.fr/wp-media/uploads/2026/07/afnic-charte-de-nommage-06-07-2026.pdf) (juillet 2026), il peut être déposé par une personne qui réside, ou une entreprise établie, dans l’Union européenne, en Islande, au Liechtenstein, en Norvège ou en Suisse : une société établie uniquement au Royaume-Uni ne peut donc pas en être titulaire. Le titulaire doit aussi rester joignable, par téléphone et par email, sous peine de blocage puis de suppression du domaine. {{< a key="fr-domain-names" >}}Le guide du nom de domaine .fr{{< /a >}} détaille ces conditions, les prix et l’enregistrement pas à pas.

Deux conseils pratiques :

- Choisissez l’extension que vous imprimerez, puis gardez-la. Changer de domaine plus tard signifie des redirections, de nouvelles adresses email et une nouvelle série de DNS.
- Comparez le renouvellement, pas la première année : c’est là que les écarts se creusent.

## Tout mettre en place dans le bon ordre (et quand passer la main)

Voici l’ordre que je conseille. Il se termine comme chacun des sites que je livre, par la connexion du domaine, et fonctionne aussi bien si vous le faites vous-même :

1. Sécurisez le domaine. Déposez-le au nom de l’entreprise, ou vérifiez qui détient celui que vous avez, puis activez le renouvellement automatique et la double authentification.
2. Choisissez où vivra le site : un créateur comme Squarespace, un hébergeur pour WordPress ou un site codé, ou GitHub Pages pour un site vitrine statique.
3. Installez la messagerie. Créez les boîtes, ajoutez les MX, puis SPF, DKIM et DMARC.
4. Construisez le site sur son adresse provisoire. La plupart des plateformes en fournissent une pendant le travail, comme l’adresse intégrée de Squarespace ou `<utilisateur>.github.io`.
5. Reliez le domaine en dernier. Supprimez la page de parking ou les redirections sur @ et www, ajoutez les enregistrements A et CNAME de la plateforme, et ne touchez ni aux MX ni aux TXT. Attention au point final.
6. Vérifiez tout. Ouvrez le site avec et sans www, contrôlez le cadenas (HTTPS), et envoyez un email de test vers une adresse Gmail : **Afficher l’original** doit indiquer PASS pour SPF, DKIM et DMARC.
7. Notez où tout se trouve : registrar, hébergeur DNS, hébergeur du site, messagerie, dates de renouvellement, et qui a accès à quoi.

Vous n’avez pas besoin de moi pour cela. Les tutoriels cités sur cette page sont écrits pour que vous puissiez faire chaque étape vous-même, et la plupart des connexions tiennent en quelques enregistrements. Passez la main quand l’enjeu monte : une messagerie qui tourne déjà sur le domaine et un changement de serveurs de noms à faire, un domaine détenu par quelqu’un d’autre, un site piraté, ou plusieurs domaines à rediriger vers un seul site. Cela fait partie de mes {{< a page="/services/websites" >}}projets de sites web{{< /a >}}, où relier le domaine est la dernière étape avant la mise en ligne.
