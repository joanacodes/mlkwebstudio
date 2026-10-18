---
title: "Transférer un domaine Hostinger : prix de renouvellement, code EPP et étapes"
seo_title: "Transférer un domaine Hostinger : code EPP et étapes"
description: "Transférer un domaine Hostinger pas à pas : verrou de transfert, code EPP, zone DNS à copier d’abord, et ce que coûte le renouvellement si vous restez."
slug: "transferer-domaine-hostinger"
translationKey: "hostinger-renewal-transfer"
date: 2026-10-17T08:52:00+02:00
lastmod: 2026-10-17T08:52:00+02:00
category: "domains"
article_type: "tutorial"
keywords: ["transférer un domaine Hostinger", "code EPP Hostinger", "prix renouvellement Hostinger", "quitter Hostinger", "verrou de transfert Hostinger"]
summary: "Pour transférer un domaine Hostinger, copiez d’abord sa zone DNS, puis, dans hPanel, désactivez le verrou de transfert et la protection de la confidentialité, affichez le code EPP et lancez le transfert chez le nouveau registrar. DNSSEC doit être coupé, et un .com doit avoir plus de 60 jours. Rester a un coût : au moment où j’écris (octobre 2026), les comparatifs indiquent une offre Premium à 2,99 € HT par mois sur 48 mois, puis à 9,99 € HT par mois au renouvellement."
cover: "hostinger-renewal-transfer"
cover_alt: "Transfert d’un domaine Hostinger : verrou désactivé, code EPP, nouveau registrar"
related: ["transfer-domain-name", "best-domain-registrar", "web-hosting-comparison", "fr-domain-names", "dns-records-explained"]
services: ["rescue"]
faq:
  - q: "Peut-on quitter l’hébergement Hostinger et garder le domaine chez Hostinger ?"
    a: "Oui. Faites pointer le domaine vers le nouvel hébergeur en modifiant ses enregistrements DNS, ou ses serveurs de noms, dans hPanel. Hostinger indique qu’un changement de serveurs de noms prend effet sous 24 heures. Vous continuez à payer à Hostinger le renouvellement du domaine."
  - q: "Perd-on la durée déjà payée en transférant un domaine ?"
    a: "En général non pour un .com : le transfert ajoute un an à l’enregistrement en cours, et le temps restant est conservé. Pour un .fr, demandez au nouveau registrar ce que comprend le prix du transfert."
  - q: "Les emails fonctionnent-ils pendant un transfert de domaine ?"
    a: "Oui, si vous ne touchez pas aux DNS. Le transfert change le registrar, pas les enregistrements MX. Les emails tombent en panne quand la zone déménage sans eux, ou quand des boîtes mail hébergées chez Hostinger sont résiliées avant que les nouvelles fonctionnent."
  - q: "Qu’est-ce que le code EPP ?"
    a: "Un code propre à chaque domaine, aussi appelé code d’autorisation ou code AUTH. Le registrar actuel vous le remet, et le nouveau le demande pour lancer le transfert. Il se garde comme un mot de passe."
---

Transférer un domaine Hostinger demande trois réglages dans hPanel, un code à copier et quelques jours d’attente. La partie délicate est ailleurs : faire en sorte que votre site et vos emails continuent de fonctionner pendant et après le transfert. Ce tutoriel suit un ordre pensé pour cela.

La raison du départ est souvent la même : le renouvellement. Les prix d’appel d’Hostinger supposent un engagement de 48 mois payé d’avance, et à l’échéance, le tarif change. Je n’ai jamais choisi Hostinger : j’en ai hérité par des clients dont le site et le domaine s’y trouvaient déjà. J’y ai vu des renouvellements s’envoler d’une année sur l’autre, et je trouve hPanel, son espace client, un peu compliqué pour une petite entreprise sans équipe technique. C’est un avis, pas un verdict : plus bas, je dis aussi à qui Hostinger convient.

Au programme : les prix (premier engagement et renouvellement), puis le transfert en sept étapes. Les libellés cités sont ceux de hPanel en anglais (octobre 2026) ; l’interface française peut les traduire. Domaine, hébergement et messagerie sont trois services distincts, qui peuvent chacun partir de leur côté : si la différence reste floue, commencez par {{< a key="domain-hosting-email-guide" >}}mon guide sur le nom de domaine et l’hébergement{{< /a >}}.

## Prix de renouvellement Hostinger : ce que vous payez après 48 mois

Au moment où j’écris (octobre 2026), les comparatifs français publiés cette année s’accordent sur les tarifs de l’offre Premium d’hébergement web. Hostinger les affiche hors TVA, et la TVA à 20 % s’ajoute au paiement :

| Offre Premium | Premier engagement (48 mois) | Après renouvellement |
|---|---|---|
| Par mois, HT | 2,99 € | 9,99 € |
| Par mois, TTC | 3,59 € | 11,99 € |
| Par an, HT | 35,88 € | 119,88 € |

Le tarif de renouvellement représente plus de trois fois le prix d’appel. Ces chiffres bougent au gré des promotions : vérifiez le prix du jour sur [la page hébergement web d’Hostinger](https://www.hostinger.fr/hebergement-web) avant de comparer.

Deux détails changent le calcul :

- **Le domaine offert ne l’est que la première année.** Quand une offre l’inclut, il se renouvelle ensuite au prix normal de son extension, en plus de l’hébergement.
- **Une promotion joue sur le prix d’appel, en général pas sur le renouvellement.** Quel que soit le bandeau du moment, le chiffre à inscrire au budget, c’est celui du renouvellement.

## Pourquoi le premier prix est si bas : quatre ans payés d’avance

Les 2,99 € ne sont pas un abonnement mensuel. C’est le prix de l’engagement de 48 mois divisé par 48 : vous réglez 143,52 € HT le premier jour, soit 172,22 € TTC.

L’affaire peut être bonne, à condition de voir le tableau entier :

1. **L’argent est engagé pour quatre ans.** Si l’offre ne vous convient plus ou si vous partez au bout d’un an, les mois restants sont déjà payés : lisez les conditions de remboursement d’Hostinger avant d’acheter.
2. **Le renouvellement tombe quand plus personne ne se souvient du premier prix.** Quatre ans plus tard, le même hébergement coûte 119,88 € HT par an au lieu de 35,88 €. C’est ce saut qu’on remarque sur le relevé bancaire.
3. **Le prix d’appel suppose l’engagement de 48 mois.** Si vous choisissez une durée plus courte dans le panier, relisez le prix mensuel avant de payer.

## Renouveler ou partir : à qui Hostinger convient

Hostinger convient aux personnes à l’aise dans un espace d’administration et prêtes à payer quatre ans d’avance : un freelance qui gère quelques sites WordPress, ou un dirigeant qui a quelques notions techniques et cherche un coût mensuel bas. Si c’est votre cas et que le renouvellement entre dans votre budget, renouveler reste un choix raisonnable. Notez la date dans votre agenda et prévoyez 9,99 € HT par mois, pas 2,99 €.

Ce n’est pas ce que je recommande aux petites entreprises qui gèrent leur site sans équipe technique. Parmi les hébergeurs que j’ai pratiqués, je recommande o2switch et Infomaniak ; je les compare dans {{< a key="web-hosting-comparison" >}}mon comparatif pour choisir un hébergeur web{{< /a >}}.

Pour les domaines, j’ai mes habitudes chez Spaceship, conçu par Namecheap, et je fais confiance aux deux : leurs prix sont justes, leur support répond 24 h/24, et leurs renouvellements ne se sont pas envolés comme j’ai pu le voir ailleurs. Pour un .fr, vérifiez d’abord que le registrar visé propose l’extension : mon comparatif {{< a key="best-domain-registrar" >}}où acheter un nom de domaine{{< /a >}} confronte six registrars sur le prix de renouvellement.

La suite de ce guide porte sur le domaine. Si vous quittez aussi l’hébergement ou la messagerie d’Hostinger, ils partent séparément, et l’étape 7 indique quand les basculer.

## Étape 1 : vérifier les conditions pour transférer un domaine Hostinger

Le [guide d’Hostinger sur le transfert sortant](https://www.hostinger.com/support/?p=17541) (en anglais) pose trois conditions :

- **60 jours.** Au moins 60 jours doivent s’être écoulés depuis l’enregistrement du domaine ou son dernier transfert, selon la politique de l’ICANN pour le .com et les autres extensions génériques.
- **Un statut normal.** Le domaine ne doit être ni suspendu, ni expiré, ni en période de rédemption.
- **DNSSEC désactivé.** S’il est activé, coupez-le d’abord et vérifiez avec un outil de contrôle DNSSEC.

Notez ensuite les dates. Dans hPanel, ouvrez **Domains**, cliquez sur **Manage** à côté du domaine et relevez sa date d’expiration. Hostinger indique qu’un transfert peut prendre jusqu’à sept jours : ne le lancez pas dans la dernière semaine avant l’expiration. Votre hébergement a sa propre date de renouvellement, parfois éloignée de plusieurs mois de celle du domaine.

{{< screenshot id="hostinger-renewal-transfer-01" alt="Page du domaine dans hPanel, avec son statut et sa date d’expiration" >}}

La règle des 60 jours vient de la [politique de transfert de l’ICANN](https://www.icann.org/resources/pages/transfer-policy-2016-06-01-en) (en anglais). Une version révisée a été adoptée, mais au moment où j’écris, les règles actuelles (le code remis sous cinq jours, les verrous de 60 jours) s’appliquent toujours. Pour un .fr, ce sont les règles de l’Afnic qui s’appliquent, pas celles de l’ICANN : mon article sur le {{< a key="fr-domain-names" >}}nom de domaine .fr{{< /a >}} présente ses conditions.

## Étape 2 : copier la zone DNS et baisser les TTL

Un transfert change l’entreprise à qui vous payez le domaine. Il ne déplace ni vos enregistrements DNS, ni votre site, ni vos boîtes mail. Mais le jour où vous cessez de payer Hostinger, la zone doit vivre ailleurs, et la copie faite maintenant vous permet de la reconstruire en dix minutes au lieu de deviner.

Dans hPanel, ouvrez les enregistrements DNS du domaine et copiez chaque ligne dans un fichier texte, ou faites des captures d’écran : type, nom, valeur, priorité et TTL. Les enregistrements qui comptent le plus :

| Enregistrements | Rôle | S’il en manque un |
|---|---|---|
| A et AAAA sur `@`, A ou CNAME sur `www` | Envoient les visiteurs vers votre site | Le site disparaît |
| MX | Acheminent vos emails | Les emails n’arrivent plus |
| TXT sur `@` commençant par `v=spf1` | Liste les serveurs autorisés à envoyer vos emails | Vos messages finissent en spam |
| Enregistrements sous `._domainkey` et `_dmarc` | Signature DKIM et politique DMARC | Spam, ou messages rejetés |
| Autres TXT et CNAME | Vérifications de propriété pour Google, Microsoft et d’autres services | Ces services perdent le lien |

Votre copie peut ressembler à ceci, avec vos propres valeurs :

```
A      @        203.0.113.10                  TTL 3600
CNAME  www      votredomaine.fr.              TTL 3600
MX     @        10 mail.exemple.net.          TTL 3600
TXT    @        "v=spf1 include:_spf.exemple.net ~all"
TXT    _dmarc   "v=DMARC1; p=none; rua=mailto:vous@votredomaine.fr"
```

Puis, au moins un jour avant de modifier quoi que ce soit, baissez le TTL de chaque enregistrement que vous allez déplacer à 300 secondes (cinq minutes), ou au minimum accepté par hPanel. Le jour de la bascule, les caches oublient alors les anciennes réponses en quelques minutes, et si un enregistrement s’avère faux dans la nouvelle zone, votre correction se propage aussi vite. Mon article sur les {{< a key="dns-records-explained" >}}enregistrements DNS{{< /a >}} explique chaque type et le fonctionnement de la propagation.

{{< screenshot id="hostinger-renewal-transfer-02" alt="Enregistrements DNS du domaine dans hPanel : A, CNAME, MX et TXT avec leur TTL" >}}

{{< callout type="tip" >}}**Notez aussi les serveurs de noms.** Ils indiquent quelle entreprise héberge la zone que lit Internet. Tant qu’ils ne changent pas, le transfert ne change rien pour vos visiteurs, et c’est vous qui décidez quand la zone déménage.{{< /callout >}}

## Étape 3 : désactiver le verrou de transfert et la confidentialité

Dans hPanel, allez dans **Domains**, cliquez sur **Manage** à côté du domaine et restez sur **Domain Overview**. Deux réglages à modifier :

1. **Transfer lock** (verrou de transfert) : désactivez-le. Ce verrou empêche quiconque, vous compris, de déplacer le domaine ; il doit être levé pour que le nouveau registrar puisse le demander.
2. **Privacy Protection** (protection de la confidentialité) : désactivez-la aussi, comme le demande le guide d’Hostinger. Vous pourrez la réactiver chez le nouveau registrar ; Spaceship et Namecheap l’incluent gratuitement.

Hostinger ajoute une mise en garde : après avoir changé le verrou, attendez 12 heures avant de le réactiver. Si le verrou se remet tout seul, le domaine est sans doute encore dans sa période de 60 jours.

{{< screenshot id="hostinger-renewal-transfer-03" alt="Domain Overview dans hPanel, avec les interrupteurs Transfer lock et Privacy Protection désactivés" >}}

## Étape 4 : récupérer le code EPP

Toujours sur **Domain Overview**, repérez le code d’autorisation (**Authorization code**) et cliquez sur **Get code** pour l’afficher ; le [guide d’Hostinger sur le code EPP](https://www.hostinger.com/support/1583203-how-to-get-the-epp-code-at-hostinger/) (en anglais) montre où il se trouve. Copiez-le à l’identique, collez-le seulement dans le formulaire du nouveau registrar, et gardez-le comme un mot de passe : c’est ce qu’un registrar demande pour réclamer le domaine.

{{< screenshot id="hostinger-renewal-transfer-04" alt="Domain Overview dans hPanel avec le code d’autorisation EPP affiché après un clic sur Get code, le code lui-même flouté" >}}

Un .fr se transfère lui aussi avec un code d’autorisation : la démarche est la même. Le .uk britannique fait exception : il change de registrar par un « IPS tag », pas par un code.

## Étape 5 : lancer le transfert chez le nouveau registrar

Chez le registrar d’arrivée, ouvrez la page de transfert, saisissez le domaine et collez le code EPP. Avant de payer, vérifiez trois points :

1. **Son prix de renouvellement.** Pour un .com, le transfert ajoute en général un an à l’enregistrement : ce qui compte, c’est le prix annuel ensuite, pas seulement celui du transfert.
2. **Les serveurs de noms.** Si le formulaire propose de conserver les serveurs actuels, conservez-les. Vous déplacerez la zone DNS à l’étape 7, à votre rythme.
3. **Confidentialité et renouvellement automatique.** Activez-les pour le domaine dès son arrivée, et protégez le nouveau compte par une double authentification.

Mon tutoriel pour {{< a key="transfer-domain-name" >}}transférer un nom de domaine{{< /a >}} détaille le côté du registrar d’arrivée, pour le .com comme pour le .fr.

{{< screenshot id="hostinger-renewal-transfer-05" alt="Formulaire de transfert du nouveau registrar, avec le nom de domaine saisi et le champ du code EPP" >}}

## Étape 6 : valider le transfert et patienter

Surveillez la boîte de réception de l’adresse de contact du domaine : le nouveau registrar, et parfois Hostinger, peuvent vous écrire pour confirmer le transfert. Répondez, puis ne touchez plus à rien. Hostinger indique qu’un transfert peut prendre jusqu’à sept jours.

Pendant ce temps, ne changez ni les serveurs de noms ni les enregistrements, et ne résiliez rien chez Hostinger. Votre site et vos emails utilisent la même zone du début à la fin : ni vos visiteurs ni vos clients ne remarquent quoi que ce soit.

{{< screenshot id="hostinger-renewal-transfer-06" alt="Liste des domaines du nouveau registrar, avec le transfert depuis Hostinger en cours" >}}

## Étape 7 : déplacer la zone DNS, puis tester le site et les emails

Quand le domaine apparaît comme actif dans votre nouveau compte, l’enregistrement a changé de registrar. Les DNS, pas forcément : vérifiez les serveurs de noms du domaine. S’ils sont toujours ceux d’Hostinger, c’est encore la zone de hPanel qui répond. Déplacez-la le jour même, car elle ne reste en ligne qu’aussi longtemps qu’Hostinger la conserve :

1. **Recréez chaque enregistrement** de votre copie dans la page DNS du nouveau registrar, avec les mêmes valeurs. Gardez les TTL à 300 pour l’instant.
2. **Basculez les serveurs de noms** vers ceux du nouveau registrar. Les registrars annoncent en général jusqu’à 48 heures ; comme les deux zones contiennent les mêmes enregistrements, chaque visiteur obtient la bonne réponse entre-temps.
3. **Testez.** Ouvrez le site avec et sans www, envoyez un email à une adresse du domaine et répondez-y, puis vérifiez les enregistrements directement :

```
$ dig +short votredomaine.fr NS
$ dig +short votredomaine.fr A
$ dig +short votredomaine.fr MX
```

4. **Faites le ménage.** Après deux ou trois jours sans souci, remettez les TTL à 3600, puis résiliez les services Hostinger dont vous n’avez plus besoin.

{{< screenshot id="hostinger-renewal-transfer-07" alt="Page DNS du nouveau registrar avec les enregistrements copiés depuis Hostinger et ses propres serveurs de noms" >}}

{{< callout type="warning" >}}**Si votre site ou vos boîtes mail sont hébergés chez Hostinger, ils ne partent pas avec le domaine.** Installez d’abord le nouvel hébergement ou la nouvelle messagerie, modifiez ensuite les enregistrements qui pointent vers Hostinger (A et CNAME pour le site ; MX, SPF et DKIM pour les emails), et résiliez l’offre Hostinger en dernier. Résiliez-la d’abord, et le site ou les boîtes mail partent avec elle.{{< /callout >}}

## Votre check-list, et quand déléguer

Avant de considérer le transfert comme terminé :

1. Le domaine n’est pas expiré, DNSSEC est désactivé, et un .com a plus de 60 jours.
2. Chaque enregistrement DNS est copié, et les TTL ont été baissés la veille.
3. Le verrou de transfert et la protection de la confidentialité sont désactivés dans Domain Overview.
4. Vous avez le code EPP.
5. Le transfert est payé chez le nouveau registrar, avec les serveurs de noms actuels conservés.
6. Les emails de confirmation ont reçu une réponse, et rien n’a bougé jusqu’à la fin du transfert.
7. La zone est recréée, les serveurs de noms sont basculés, le site et les emails sont testés.
8. Le renouvellement automatique et la confidentialité sont activés chez le nouveau registrar, et les offres Hostinger inutiles résiliées en dernier.

Vous n’avez besoin de personne pour un transfert classique : deux interrupteurs, un code et un peu de patience. Déléguez quand l’enjeu dépasse la manipulation : le domaine se trouve dans un compte Hostinger auquel vous n’avez pas accès, celui d’un ancien prestataire par exemple (mon guide pour {{< a key="recover-domain-name" >}}récupérer un nom de domaine{{< /a >}} traite ce cas), vos emails reposent sur des enregistrements que personne ne sait expliquer, ou le site doit quitter Hostinger en même temps. Relier le domaine fait d’ailleurs partie de chaque {{< a page="/services/websites" >}}site que je livre{{< /a >}}.
