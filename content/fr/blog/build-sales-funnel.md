---
title: "Créer son tunnel de vente avec ses outils actuels : site, réservation et emails"
seo_title: "Créer un tunnel de vente avec les outils que vous avez déjà"
description: "Créer un tunnel de vente avec vos outils actuels : une page, un bouton, une page de réservation, des emails, une automatisation et le suivi GA4, pas à pas."
slug: "creer-un-tunnel-de-vente"
translationKey: "build-sales-funnel"
date: 2026-10-18T23:03:00+02:00
lastmod: 2026-10-18T23:03:00+02:00
category: "funnels"
article_type: "tutorial"
keywords: ["créer un tunnel de vente", "créer un tunnel de vente gratuit", "faire un tunnel de vente", "tunnel de vente simple", "tunnel de vente sans logiciel"]
summary: "Pour créer un tunnel de vente avec vos outils actuels, donnez à une page de votre site un seul appel à l’action, qui mène à une page de réservation avec deux ou trois questions, et laissez l’outil envoyer la confirmation. Ajoutez un formulaire d’inscription en double opt-in pour ceux qui ne sont pas prêts, réunissez les prospects dans une liste, balisez vos liens avec des UTM, comptez les demandes en événement clé GA4 et testez tout sur téléphone."
cover: "build-sales-funnel"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, sur fond de photo, avec un entonnoir qui se resserre jusqu’à un point orange"
related: ["sales-funnel-explained", "youcanbookme-tutorial", "utm-ga4-funnel-tracking", "automate-lead-follow-up", "newsletter-tools-comparison"]
services: ["websites"]
faq:
  - q: "Peut-on créer un tunnel de vente gratuitement ?"
    a: "Oui, dans les limites des offres gratuites : une page de réservation sur YouCanBookMe, une première liste sur Brevo ou MailerLite, 100 tâches par mois sur Zapier, et Google Analytics. Les premières options qui valent leur prix sont les rappels de rendez-vous et la redirection vers votre propre page de remerciement après une réservation."
  - q: "Quelle différence entre un tunnel de vente et une landing page ?"
    a: "La landing page est une étape du tunnel : une page avec un seul appel à l’action. Le tunnel, c’est tout le parcours, de la première visite au rendez-vous réservé et à la relance qui suit."
  - q: "Combien d’étapes doit compter un tunnel de vente ?"
    a: "Le moins possible. Pour un service qui se vend en rendez-vous, le visiteur en voit trois : une page, un formulaire de réservation et une confirmation. Chaque étape de plus fait perdre du monde : n’en ajoutez une que si elle lève un frein à la réservation."
  - q: "Faut-il mettre son lien de réservation dans ses cold emails ?"
    a: "Pas dans le premier. Mes premiers cold emails sont en texte brut, sans aucun lien, avec un numéro de téléphone et une invitation à appeler, parce que c’est ce qui arrive à bon port. Gardez le lien de réservation pour les personnes qui répondent."
---

Vous avez déjà l’essentiel d’un tunnel de vente : un site, un agenda, une adresse email et un téléphone. Il manque le câblage : qu’un visiteur prêt réserve un appel en quelques gestes, qu’un indécis garde le contact, et que vous sachiez quel canal a amené chaque demande. Voici comment créer un tunnel de vente avec ce que vous avez, en sept étapes et surtout avec des offres gratuites, pour une activité qui se vend en conversation : un appel, une visite, un devis.

Le marketing fait beaucoup de bruit, et le nouvel outil à la mode est le piège le plus facile. Mon conseil va dans l’autre sens : tirez le maximum des canaux et des outils que vous utilisez déjà avant d’en ajouter un.

Si la notion de tunnel est nouvelle pour vous, mon {{< a key="sales-funnel-explained" >}}exemple de tunnel de vente{{< /a >}} suit un cas concret, de la visite au rendez-vous. Ce tutoriel fait partie de mon {{< a key="funnels-newsletters-guide" >}}guide complet du tunnel de vente et de la newsletter{{< /a >}}.

## Créer un tunnel de vente : les sept étapes en un coup d’œil

| Étape | Ce qu’elle fait | Outils |
|---|---|---|
| 1. Une page, un appel à l’action | Transforme une visite en clic | Votre site |
| 2. Une page de réservation avec des questions | Transforme le clic en rendez-vous | YouCanBookMe ou Calendly |
| 3. Confirmation et rappels | Amène la personne au rendez-vous | L’outil de réservation |
| 4. Un formulaire en double opt-in | Garde le contact avec les indécis | Brevo ou MailerLite |
| 5. Une automatisation | Réunit les prospects dans une liste et vous alerte | Google Sheets, Zapier, Make ou n8n |
| 6. Liens UTM et événement clé GA4 | Montre quel canal amène des demandes | Google Analytics 4 |
| 7. Un test sur téléphone | Trouve les fuites avant vos prospects | Votre téléphone |

Les exemples suivent un cuisiniste qui propose un appel gratuit de 15 minutes avant toute visite à domicile. C’est une illustration, pas l’histoire d’un client : remplacez-le par votre propre service.

## Étape 1 : une page, un seul appel à l’action

Partez de la page où les gens arrivent déjà : la page de service que Google leur montre, ou une landing page créée pour une campagne. Pas la page d’accueil, qui a trop de rôles à jouer.

Donnez à cette page **une seule action à faire**, en haut puis en bas : un bouton « Réserver un appel gratuit de 15 minutes ». Mettez votre numéro de téléphone à côté, pas à la place. Dans les campagnes de cold emailing que je mène pour un client, les prospects appelaient plutôt que de répondre : appeler va plus vite, et les gens aiment le contact humain.

Autour du bouton, répondez à ce qu’on veut savoir avant de réserver : pour qui est le service, des preuves (avis, photos de chantiers), les prix et le déroulé de l’appel.

Je mets sur Squarespace les clients qui modifient eux-mêmes leur site : ils changent un mot ou une photo sans que la mise en page s’effondre. Je cite les menus de l’interface anglaise. Le bouton y est un bloc **Button** relié à votre page de réservation. Sur une landing page de campagne, masquez le menu pour ne laisser que le bouton : icône d’engrenage à côté de la page dans le panneau Pages, onglet **Navigation**, puis désactivez **Show Header** et **Show Footer** (en-tête et pied de page). Sur WordPress, un bloc Boutons fait la même chose ; sur Wix, un élément bouton. Pas encore de site : mon {{< a key="squarespace-tutorial" >}}tuto Squarespace{{< /a >}} en crée un pas à pas.

{{< screenshot id="build-sales-funnel-01" alt="Page de service Squarespace avec un bouton Réserver un appel gratuit de 15 minutes et le numéro de téléphone à côté" >}}

## Étape 2 : une page de réservation avec deux ou trois questions de qualification

Le bouton ouvre une page de réservation où l’on choisit un créneau libre dans votre agenda. J’utilise YouCanBookMe : il fait tout ce que fait Calendly, on s’y retrouve facilement et il coûte un peu moins cher. Calendly est bien aussi. Au moment où j’écris (octobre 2026), l’offre gratuite de YouCanBookMe comprend une page de réservation reliée à un agenda, et celle de Calendly un type d’événement. Mon tutoriel de {{< a key="youcanbookme-tutorial" >}}prise de rendez-vous en ligne avec YouCanBookMe{{< /a >}} détaille le réglage, des horaires aux fuseaux horaires.

Ce qui en fait une étape du tunnel, ce sont **les questions du formulaire**. Après le nom et l’email, choisissez-en deux ou trois qui disent si l’appel vaut la peine et comment le préparer :

1. **Quel service ?** La liste de vos prestations, plus « Autre chose ».
2. **Où ?** La ville ou le code postal, si vous vous déplacez.
3. **Quand ?** « Dans le mois », « Dans les trois mois », « Je me renseigne ».
4. **Comment nous avez-vous connu ?** Google, une recommandation, la newsletter, les réseaux sociaux. L’étape 6 explique pourquoi.

Gardez le budget pour l’appel, où vous pouvez expliquer ce qui fait le prix. Chaque réponse est une donnée personnelle stockée par un outil tiers : ne demandez que ce dont vous vous servirez, et citez l’outil de réservation dans votre politique de confidentialité.

Reliez ensuite votre bouton à la page de réservation, ou intégrez l’agenda dans une page « Prendre rendez-vous ». Sur Squarespace, le code d’intégration va dans un bloc Code, où le JavaScript demande le forfait Essentiel (Core en anglais) ou supérieur ; avec le forfait Basic, gardez le bouton.

{{< screenshot id="build-sales-funnel-02" alt="Formulaire de réservation YouCanBookMe avec trois questions : le service, le délai et la façon dont la personne a connu l’entreprise" >}}

## Étape 3 : laisser l’outil de réservation envoyer la confirmation et les rappels

Après chaque réservation, YouCanBookMe envoie une confirmation à la personne et vous prévient par email, offre gratuite comprise. Réécrivez la confirmation par défaut : c’est votre premier email à un nouveau prospect, et il peut faire plus que rappeler l’heure.

```text
Merci d’avoir réservé un appel le [date] à [heure].
Nous vous appellerons au numéro que vous nous avez indiqué.
Pour gagner du temps, préparez quelques photos de votre cuisine.
En attendant, découvrez une cuisine que nous avons posée récemment sur [lien].
```

Relisez-la sur téléphone et vérifiez qu’elle garde le lien pour modifier ou annuler le rendez-vous.

Les rappels sont souvent **la première option payante qui vaut son prix**. YouCanBookMe range les rappels par email et SMS dans ses offres payantes, dès Individual ; chez Calendly aussi, ils demandent une offre payante. Si un rendez-vous manqué vous coûte un déplacement, les rappels sont vite rentabilisés ; pour un appel de 15 minutes, la confirmation peut suffire.

## Étape 4 : proposer un formulaire d’inscription à ceux qui ne sont pas prêts

La plupart des visiteurs ne réservent pas dès la première visite : certains comparent, d’autres ne sont pas pressés. Donnez-leur une raison de garder le contact, comme une newsletter mensuelle ou un guide des prix d’une page, et un formulaire pour s’inscrire.

Deux outils d’emailing avec une offre gratuite, au moment où j’écris (octobre 2026) :

| | Brevo | MailerLite |
|---|---|---|
| Offre gratuite | 300 emails par jour, jusqu’à 100 000 contacts | 250 abonnés, 2 500 emails par mois |
| Double opt-in | Option à l’étape des réglages du formulaire ; modèle modifiable | Activé par défaut ; modifier l’email demande une offre payante |

L’offre gratuite de Brevo limite surtout ce que vous envoyez chaque jour, celle de MailerLite la taille de la liste ; mon {{< a key="newsletter-tools-comparison" >}}comparatif des outils de newsletter{{< /a >}} les met face à Mailchimp, Kit et beehiiv. Sur Squarespace, leur formulaire s’intègre dans un bloc Code, avec la même condition de forfait s’il contient du JavaScript ou une iframe.

**Gardez le double opt-in activé.** La personne confirme son inscription par un lien reçu par email avant d’entrer dans la liste. Cela écarte les fautes de frappe, les fausses adresses et les robots, et garde une preuve du consentement : les journaux de Brevo, par exemple, conservent l’inscription, l’email de confirmation et l’heure du clic. Le RGPD ne parle pas de double opt-in, mais son [article 7, paragraphe 1](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679), impose de pouvoir démontrer le consentement quand vous vous appuyez sur lui.

Gardez aussi les listes séparées : la personne qui a réservé un appel n’a pas demandé votre newsletter. Il existe des exceptions, comme celle de l’article L34-5 du Code des postes et des communications électroniques pour vos clients, ou le soft opt-in du règlement 22 des PECR au Royaume-Uni, mais elles ont leurs conditions. Ceci est un résumé, pas un conseil juridique : avant d’écrire à des personnes qui ne se sont pas inscrites, faites vérifier les règles de leur pays par un avocat.

{{< screenshot id="build-sales-funnel-03" alt="Réglages du formulaire d’inscription dans l’outil d’emailing, avec la confirmation en double opt-in activée" >}}

## Étape 5 : une automatisation qui note chaque prospect et vous alerte

Les demandes arrivent par formulaire, réservation, email et téléphone. L’automatisation les réunit dans une seule liste et vous prévient dès qu’une demande arrive, pour que personne n’attende deux jours une réponse.

Commencez par les formulaires, que Squarespace gère sans autre outil. Dans les réglages de stockage du bloc formulaire, connectez Google Drive : Squarespace crée une feuille de calcul et y ajoute une ligne à chaque envoi. Ne renommez pas cette feuille, sinon la connexion saute, et gardez aussi la notification par email.

Les réservations arrivent dans votre agenda, et l’outil de réservation vous prévient. Pour les copier dans la même feuille, un outil d’automatisation peut partir de chaque nouvel événement de l’agenda et ajouter une ligne ; réglez-le pour ne garder que les événements dont le titre correspond à vos rendez-vous, sinon votre contrôle technique finira parmi les prospects. Au moment où j’écris :

- **Zapier** : 100 tâches par mois gratuites ; une réservation qui ajoute une ligne compte pour une tâche, le déclencheur ne comptant pas.
- **Make** : 1 000 crédits par mois gratuits, mais une vérification planifiée consomme un crédit à chaque passage, même sans nouveauté : vérifier toutes les heures coûte environ 720 crédits par mois.
- **n8n** : la Community Edition est gratuite si vous l’hébergez vous-même, sur un serveur que vous tenez à jour.

Pour ne dépendre d’aucun des trois, mon tutoriel pour {{< a key="automate-lead-follow-up" >}}automatiser le suivi des prospects{{< /a >}} s’appuie sur un formulaire Google, une feuille Google Sheets et un court script : une alerte à chaque nouvelle demande, puis un rappel si personne n’a rappelé dans l’heure.

## Étape 6 : suivre le tunnel avec des liens UTM et un événement clé GA4

**Les liens UTM.** Ajoutez trois paramètres à chaque lien que vous maîtrisez vers votre page : newsletter, signature email, réseaux sociaux, fiche Google Business Profile, publicités.

```text
https://www.votre-entreprise.fr/cuisine-sur-mesure?utm_source=newsletter&utm_medium=email&utm_campaign=automne-2026
```

Écrivez-les en minuscules, toujours de la même façon, et jamais sur les liens entre vos propres pages : ils remplaceraient la vraie source de la visite. Mon tutoriel pour {{< a key="utm-ga4-funnel-tracking" >}}suivre son tunnel avec les UTM et GA4{{< /a >}} détaille le nommage, les rapports et l’installation de GA4.

**Une page de remerciement.** Créez une page qui ne s’affiche qu’après une demande : dans Squarespace, placez-la dans la section **Not linked** (pages non liées) du panneau Pages et activez **Hide page from search results** (masquer des résultats de recherche) dans son onglet SEO. Envoyez-y ensuite les gens :

- après le formulaire : bloc formulaire, onglet **Content**, **Edit Post-Submit**, puis **Redirect** ([aide de Squarespace](https://support.squarespace.com/hc/en-us/articles/206566737-Form-blocks), en anglais). La redirection ne fonctionne pas tant que votre session est ouverte : testez-la en navigation privée ;
- après une réservation : YouCanBookMe renvoie vers votre propre page avec ses offres Professional et Teams ([aide de YouCanBookMe](https://ycbm.capacity.com/article/406807/thank-you-page-doesnt-forward-to-a-url-after-booking), en anglais), Calendly avec ses offres payantes. Chez YouCanBookMe, utilisez une adresse en https et, si l’agenda est intégré, l’option qui redirige toute la fenêtre.

{{< callout type="warning" >}}YouCanBookMe peut ajouter le nom et l’email de la personne à l’adresse de redirection. Laissez ces codes de côté : **les règles de Google Analytics interdisent de lui envoyer des données personnelles**.{{< /callout >}}

Avec une offre de réservation gratuite, pas de redirection : comptez les rendez-vous dans l’outil et lisez les réponses à « Comment nous avez-vous connu ? ».

**L’événement clé.** Dans GA4, ouvrez **Administration** > **Affichage des données** > **Événements** et cliquez sur **Créer un événement**. Nommez-le `generate_lead`, le nom que Google recommande pour un prospect, et activez **Marquer comme événement clé**. Choisissez **Créer sans code**, sélectionnez `page_view` comme événement source, saisissez l’adresse de votre page de remerciement et validez ([page d’aide de Google](https://support.google.com/analytics/answer/12844695?hl=fr)). Ne marquez pas `page_view` lui-même : chaque page vue compterait. Le comptage démarre le jour où vous le configurez.

{{< screenshot id="build-sales-funnel-04" alt="Panneau de création d’événement de GA4 avec page_view comme événement source, l’adresse de la page de remerciement et l’option Marquer comme événement clé activée" >}}

## Étape 7 : tester tout le parcours sur votre téléphone

Vos prospects découvriront le tunnel sur un téléphone : testez-le là, session fermée, en données mobiles, avec une deuxième adresse email.

1. Ouvrez l’un de vos liens UTM et touchez le bouton. La page de réservation se charge et tient dans l’écran.
2. Réservez un créneau. La confirmation arrive (regardez aussi dans les spams), le rendez-vous figure dans votre agenda à la bonne heure, et une ligne s’ajoute à votre feuille.
3. Envoyez le formulaire. La page de remerciement s’affiche et l’alerte vous parvient.
4. Inscrivez-vous à votre propre newsletter. L’email de confirmation arrive, le lien fonctionne et l’email de bienvenue suit.
5. Ouvrez le rapport en temps réel de GA4 : votre visite apparaît avec sa source UTM, et `generate_lead` s’affiche.
6. Annulez le rendez-vous test et supprimez les contacts de test, pour ne pas fausser vos chiffres.

Refaites le test après chaque changement, et tous les quelques mois : les liens cassent sans bruit.

## Quand payer pour plus, et quand déléguer

Payez une pièce à la fois, quand un vrai problème apparaît :

- les rendez-vous manqués vous coûtent des déplacements : payez les rappels ;
- vous voulez savoir quel canal amène des rendez-vous, pas seulement des demandes par formulaire : payez la redirection après réservation ;
- votre liste dépasse l’offre gratuite : comparez les offres payantes.

Un outil de tunnel comme Systeme.io ou ClickFunnels se justifie quand vous vendez en ligne, avec pages de paiement et ventes additionnelles ; un service vendu au téléphone s’en passe le plus souvent. Une fois les vrais visiteurs arrivés, Microsoft Clarity, gratuit, montre où ils hésitent ou s’en vont : le texte, une photo ou la mise en page.

Vous n’avez pas besoin de moi pour tout cela. Les choses se compliquent quand le volume grandit : {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, installateur de climatisation à Paris et en Île-de-France, reçoit une dizaine de prospects par jour, et quand l’équipe n’arrivait plus à suivre, j’ai conçu une application interne pour qu’aucun prospect n’attende d’être rappelé. D’ici là, ces sept étapes mèneront une petite équipe loin.
