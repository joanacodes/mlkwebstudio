---
title: "Délivrabilité en cold emailing : pourquoi mes emails n’ont ni lien ni HTML"
seo_title: "Délivrabilité cold emailing : pourquoi éviter liens et HTML"
description: "Délivrabilité en cold emailing : pourquoi mes emails partent en texte brut, sans lien ni HTML, avec un numéro de téléphone, et les réglages Instantly à faire."
slug: "delivrabilite-cold-emailing"
translationKey: "plain-text-cold-emails"
date: 2026-10-17T08:40:00+02:00
lastmod: 2026-10-17T08:40:00+02:00
category: "cold-emailing"
article_type: "opinion"
keywords: ["délivrabilité cold emailing", "cold email texte brut", "lien dans un email de prospection", "pixel de suivi email", "Instantly texte brut"]
summary: "Pour la délivrabilité en cold emailing, j’envoie uniquement du texte brut : ni HTML, ni image, ni lien, ni suivi des ouvertures ou des clics. Un lien suivi impose une redirection, le suivi des ouvertures exige une image invisible qui transforme l’email en HTML, et chacun donne aux filtres un élément de plus à juger ; un message de trois lignes se lit comme celui d’une personne à une autre. Le numéro de téléphone fait le travail du lien : les prospects appellent."
cover: "plain-text-cold-emails"
cover_alt: "Un ordinateur portable et un document imprimé, à côté d’enveloppes empilées avec un nouveau message et l’inscription « text/plain »"
related: ["cold-email-examples", "instantly-campaign-setup", "cold-email-infrastructure", "cold-email-gdpr-uk-france", "architects-cold-email-case-study"]
services: ["cold-emailing"]
faq:
  - q: "Un cold email doit-il contenir un lien de désinscription ?"
    a: "Il doit offrir un moyen simple de s’opposer aux envois, pas forcément un lien : une phrase qui invite à répondre « non » pour ne plus recevoir de messages suffit, à condition que quelqu’un lise les réponses et les applique. L’exigence de désinscription en un clic de Google concerne les expéditeurs de 5 000 messages par jour ou plus vers des comptes Gmail personnels, comme l’expliquent ses [consignes pour les expéditeurs](https://support.google.com/a/answer/81126?hl=fr)."
  - q: "Puis-je écrire l’adresse de mon site au lieu de mettre un lien ?"
    a: "Une adresse web comme votre-entreprise.fr reste un lien, même sans http ni www : la plupart des messageries la rendent cliquable, et les filtres la lisent comme les autres. Je cite le nom de l’entreprise et j’invite à consulter le catalogue sur son site ; un prospect intéressé le trouve en quelques secondes."
  - q: "Peut-on joindre une plaquette en PDF au lieu d’envoyer un lien ?"
    a: "Pas dans un premier email. Une pièce jointe inattendue envoyée par un inconnu ressemble à beaucoup d’emails d’hameçonnage, et elle pèse plus lourd qu’un lien. Envoyez la plaquette quand un prospect répond et la demande."
  - q: "Un email en texte brut ne fait-il pas moins professionnel ?"
    a: "Pour la personne qui le lit, un email simple ressemble au message d’une personne, et c’est ce qu’un cold email doit être. Gardez le design soigné pour votre site, là où vont ensuite les prospects intéressés."
---

Pour la délivrabilité en cold emailing, ma règle tient en une phrase : je ne mets jamais de lien dans mes emails. Ni dans le premier, ni dans les relances, ni dans la signature. Mes cold emails partent en texte brut : pas de HTML, pas d’image, pas de suivi des ouvertures ni des clics. Trois lignes, un numéro de téléphone et une invitation à appeler.

Je l’applique à toutes mes campagnes, dont celles qui ont apporté 15 nouveaux clients en un an à Pilotech, installateur de climatisation en Île-de-France. Cette règle traverse toute la méthode de mon {{< a key="b2b-cold-emailing-guide" >}}guide du cold emailing B2B{{< /a >}} ; cet article en explique les raisons, détaille les réglages qui l’appliquent dans Instantly et précise les rares moments où un lien a sa place.

## Ma règle : texte brut, aucun lien, un numéro de téléphone

Chaque email de mes séquences suit le même modèle :

- Du texte brut uniquement : pas de version HTML, pas d’image, pas de logo, pas de couleur.
- **Aucun lien**, signature comprise.
- Trois emails au maximum par contact, et un premier email de trois lignes au plus : une présentation, l’offre et l’appel à l’action.
- Un numéro de téléphone écrit dans l’email, avec une invitation à appeler et à consulter le catalogue sur le site.

Personne n’aime recevoir un long email d’un inconnu à qui l’on n’a rien demandé. Un message court et précis fonctionne. Mes {{< a key="cold-email-examples" >}}exemples d’email de prospection{{< /a >}} montrent des premiers emails complets construits sur ce modèle.

Pour Pilotech, les emails visaient trois publics : les restaurants parisiens, les bureaux et commerces parisiens, et surtout les architectes, la cible principale, qui étaient aussi ceux qui appelaient le plus. Mon article sur la {{< a key="architects-cold-email-case-study" >}}prospection des architectes par cold emailing{{< /a >}} raconte cette campagne ; ici, je défends la règle elle-même.

## Pourquoi les liens nuisent à la délivrabilité en cold emailing

Avant de décider où un email atterrit, les messageries examinent de nombreux signaux, parmi lesquels la réputation de l’expéditeur, son authentification et le contenu du message. La réputation se construit en plusieurs semaines, l’authentification tient en quelques enregistrements DNS. Le contenu est la seule partie que vous maîtrisez entièrement, dans chaque email : c’est là que je retire tous les risques possibles.

### Un lien suivi fait un détour

Le suivi des clics réécrit chaque lien de votre email. Votre lien vers le catalogue devient un lien vers le domaine de tracking de l’outil d’envoi, qui enregistre le clic puis renvoie le lecteur vers votre page. Sans domaine de tracking personnalisé, ce domaine est partagé avec les autres utilisateurs de l’outil : votre email pointe vers une adresse dont la réputation dépend des campagnes d’inconnus.

### Chaque lien ajoute un domaine à juger

Les filtres lisent les liens d’un email et vérifient les domaines vers lesquels ils pointent. Un lien vers votre site fait revenir votre domaine principal dans une campagne que vous avez pris soin d’envoyer depuis des domaines secondaires, alors que ceux-ci servent justement à [le tenir à l’écart du cold emailing](https://mlkleadhunters.com/fr/blog/never-send-from-your-main-domain/). Les raccourcisseurs de liens font pire : ils masquent la destination, et c’est pour cela que le spam les utilise si souvent.

### Le suivi des ouvertures exige une image, donc du HTML

Le suivi des ouvertures ajoute une image invisible à l’email, et l’outil compte une ouverture quand la messagerie du destinataire la charge. Un email en texte brut ne peut pas contenir d’image : pour suivre les ouvertures, l’outil doit envoyer votre email en HTML, quoi que vous ayez tapé. Votre message soigné de trois lignes devient une petite page web avec une image cachée dedans.

### Le HTML donne au cold email un air de newsletter

Les newsletters et les promotions sont construites en HTML, avec logos, boutons, couleurs et liens suivis. Un cold email construit de la même façon leur ressemble, pour les filtres comme pour la personne qui le lit, et dans Gmail un message d’allure promotionnelle peut atterrir dans l’onglet « Promotions » plutôt que dans « Principale ». Un court message en texte brut ressemble à ce qu’un cold email doit être : une personne qui écrit à une autre.

{{< callout type="note" >}}**C’est une pratique de terrain, pas une règle publiée.** Aucune messagerie n’affirme qu’un lien, à lui seul, envoie un email en spam, et beaucoup d’emails avec des liens arrivent en boîte de réception. Mon raisonnement est plus simple : chaque lien, chaque image et chaque traceur ajoute un élément que je ne peux pas vérifier de l’extérieur, et mes campagnes en texte brut obtiennent des réponses sans eux.{{< /callout >}}

## Le numéro de téléphone fait le travail du lien

Dans un cold email, le lien sert en général d’appel à l’action : cliquez ici, réservez un créneau, découvrez nos réalisations. Le mien, c’est le téléphone. Le numéro figure dans l’email avec une invitation à appeler, et l’email nomme l’entreprise : les prospects peuvent consulter le catalogue sur son site quand ils le souhaitent.

Dans les campagnes de Pilotech, beaucoup de prospects, surtout des architectes, ont appelé au lieu de répondre. Mon interprétation : un appel va plus vite qu’une réponse écrite, une réponse remise à plus tard se noie sous les emails de la journée, et appeler revient à cocher une ligne de sa liste de tâches. Les gens apprécient aussi le contact humain. Un lien leur aurait demandé de faire autre chose d’abord.

Sans ouvertures ni clics à surveiller, je juge une campagne sur ce qui rapporte : les réponses, les appels et les nouveaux clients. Je teste quand même mes textes en A/B et je départage les versions sur les réponses : avec le temps, je sais laquelle fonctionne, et il en arrive davantage. Le taux d’ouverture ne m’apprendrait de toute façon pas grand-chose : certaines messageries, dont Apple Mail, peuvent charger les images en arrière-plan pour protéger la vie privée de leurs utilisateurs, si bien qu’un email peut compter comme ouvert sans avoir été lu.

Une condition : quelqu’un qui sait vendre doit décrocher. Dans mes campagnes, je m’occupe de tout sauf des réponses, qui reviennent au client, comme les appels.

## Envoyer en texte brut dans Instantly : les réglages

J’utilise Instantly en partie parce que ses réglages aident à rester hors du spam. Au moment où j’écris (octobre 2026), voici les options qui comptent, sous les noms qu’emploie le [centre d’aide d’Instantly](https://help.instantly.ai/en/articles/6531595-delivery-optimization-tool-send-emails-as-text-only) (en anglais, comme l’interface) ; les libellés peuvent changer d’une version à l’autre, vérifiez-les dans votre compte.

1. Ouvrez la campagne et allez dans l’onglet **Options**.
2. Sous **Delivery Optimization**, cochez **Send emails as text-only (no HTML)**. L’autre option, **Send first email as text-only**, ne concerne que la première étape de la séquence : vos relances partiraient encore en HTML.
3. Vérifiez que **Open Tracking** est désactivé et que la case **Link Tracking**, juste en dessous, est décochée. D’après l’aide d’Instantly, l’envoi en texte brut coupe le suivi des ouvertures ; assurez-vous que l’interrupteur l’indique bien.
4. Rédigez la séquence sans lien ni mise en forme : pas de gras, pas de couleur, pas d’image, rien de collé depuis un document avec ses styles. Le mode texte brut ne supprime pas un lien que vous ajoutez : il affiche l’adresse web en entier, et elle reste un lien.
5. Dans **Email Accounts**, ouvrez chaque boîte d’envoi et vérifiez sa signature : du texte brut, avec un nom, une entreprise et un numéro de téléphone. Pas de logo, pas d’icône de réseau social, pas de lien vers le site.
6. Ajoutez l’une de vos propres adresses à la campagne, une adresse Gmail par exemple, et ouvrez l’email à son arrivée. Dans Gmail, le menu à trois points propose **Afficher l’original**, qui montre le message brut.

Dans le message brut, cherchez une ligne de ce type :

```text
Content-Type: text/plain; charset="UTF-8"
```

Si vous voyez `multipart/alternative` avec une partie `text/html`, une balise `<img` ou une adresse web que vous n’avez pas tapée, quelque chose ajoute encore du HTML ou du suivi. Les autres options de campagne, du planning aux limites quotidiennes, sont dans mon tutoriel pour {{< a key="instantly-campaign-setup" >}}créer une campagne Instantly{{< /a >}}.

Si vous tenez au suivi, configurez au minimum un domaine de tracking personnalisé, pour que vos liens pointent vers un sous-domaine de votre propre domaine d’envoi plutôt que vers un domaine partagé. [L’aide d’Instantly](https://help.instantly.ai/en/articles/6984188-custom-tracking-domain) donne l’enregistrement à créer : un CNAME d’hôte `inst` et de valeur `prox.itrackly.com`, puis vous saisissez `inst.votredomaine.fr` dans les réglages de chaque compte d’envoi.

{{< callout type="warning" >}}**En France, le pixel de suivi pose aussi une question juridique.** Dans sa [recommandation sur les pixels de suivi](https://www.cnil.fr/sites/default/files/2026-04/recommandation-pixels_de_suivi.pdf), publiée en avril 2026, la CNIL estime qu’un pixel qui mesure l’ouverture d’un email de prospection suppose le consentement du destinataire, en B2B aussi, hors exceptions étroites. Mon article sur le {{< a key="cold-email-gdpr-uk-france" >}}cold emailing et le RGPD{{< /a >}} détaille cette règle.{{< /callout >}}

## Quand un lien a sa place

Ma règle vaut pour le premier contact, pas pour la conversation qui suit. Un lien a sa place :

- **Quand un prospect répond et le demande.** Le catalogue, une grille tarifaire, une page de prise de rendez-vous : envoyez-les. Il les a demandés, et dès qu’il a répondu, vous êtes dans une conversation, et non plus dans un cold email. L’article de MLK Leadhunters sur [ce qu’il faut faire des réponses](https://mlkleadhunters.com/fr/blog/what-to-do-with-replies/) conseille de proposer à ce stade deux créneaux ou un lien de réservation.
- **Dans les envois auxquels les destinataires se sont abonnés.** Une newsletter envoyée à des abonnés n’est pas du cold emailing, et d’autres règles s’y appliquent.

Si vous voulez malgré tout un lien dans une séquence de prospection, limitez les dégâts : un seul lien, vers votre propre site, écrit en entier plutôt que caché derrière des mots ou un raccourcisseur, sans suivi des clics, et jamais dans le premier email. Comparez ensuite les réponses avec une version en texte brut avant de le garder.

## Ce que le texte brut ne règle pas : les autres leviers de délivrabilité

Le texte brut retire des risques du contenu. Il ne compense pas le reste de la délivrabilité :

- **L’authentification.** Chaque domaine d’envoi a besoin de ses enregistrements SPF, DKIM et DMARC ; mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} montre comment les ajouter.
- **L’infrastructure et le volume.** Des domaines secondaires, plusieurs boîtes d’envoi, un warm-up avant le premier envoi, puis une montée lente vers une trentaine d’emails par jour et par boîte, le chiffre que suggèrent les guides d’Instantly. Mon article sur l’{{< a key="cold-email-infrastructure" >}}infrastructure de cold emailing{{< /a >}} dimensionne l’ensemble, avec en exemple les 30 adresses de la campagne Pilotech.
- **Une liste vérifiée.** Les adresses mortes rebondissent, et les rebonds usent la réputation d’un domaine. Je nettoie chaque liste avec Reoon avant le premier envoi.
- **La pertinence.** Une personne qui ne voulait pas de votre email peut le signaler comme spam, et les [consignes de Google pour les expéditeurs](https://support.google.com/a/answer/81126?hl=fr) demandent de garder le taux de spam affiché dans Postmaster Tools sous 0,1 % et de ne jamais atteindre 0,3 %. Une liste précise et une offre adaptée le maintiennent bas.

## Avant votre prochaine campagne : la liste de contrôle du texte brut

1. L’option d’envoi en texte brut est cochée, et le suivi des ouvertures et des clics est désactivé.
2. Aucun lien, aucune image, aucun logo, signatures comprises.
3. Le premier email tient en trois lignes au plus : qui vous êtes, l’offre, et le numéro de téléphone avec une invitation à appeler.
4. La signature donne votre nom et celui de l’entreprise en texte brut, et l’email renvoie à votre page de confidentialité par son nom (rubrique « Confidentialité » de votre site), sans lien.
5. Chaque email propose une opposition qui tient en une réponse, et quelqu’un lit les réponses.
6. Quelqu’un qui sait vendre décroche le téléphone et note quels appels viennent de la campagne.
7. Un email de test affiche `text/plain` dans **Afficher l’original** de Gmail.

Vous n’avez pas besoin d’une agence pour tout cela : les réglages prennent quelques minutes. Si vous préférez confier toute la campagne et ne garder que les conversations, c’est ce que fait [MLK Leadhunters](https://mlkleadhunters.com/fr/).
