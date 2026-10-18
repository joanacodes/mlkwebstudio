---
title: "Améliorer le taux de conversion de son site : pourquoi les visiteurs repartent"
seo_title: "Améliorer le taux de conversion de son site internet"
description: "Améliorer le taux de conversion de son site internet : voir où les visiteurs décrochent avec Clarity, puis corriger l’offre, le téléphone et le formulaire."
slug: "ameliorer-taux-conversion-site-internet"
translationKey: "website-conversion-rate"
date: 2026-10-17T08:23:00+02:00
lastmod: 2026-10-17T08:23:00+02:00
category: "websites"
article_type: "guide"
keywords: ["améliorer taux de conversion site internet", "taux de conversion site internet", "optimisation du taux de conversion", "site internet sans demandes de devis", "taux de conversion site vitrine"]
summary: "Pour améliorer le taux de conversion de votre site internet, vérifiez d’abord que les bons visiteurs y arrivent, puis regardez de vraies visites dans un outil gratuit comme Microsoft Clarity pour voir où ils décrochent. Les corrections qui comptent le plus : une offre claire par page, un numéro cliquable sur chaque page, un formulaire de devis court, des pages rapides sur mobile et une réponse à chaque demande dans l’heure."
cover: "website-conversion-rate"
cover_alt: "Un schéma de parcours qui se ramifient, sur une silhouette floue derrière du verre cannelé, avec les lettres CRO"
related: ["microsoft-clarity-tutorial", "landing-page-vs-website", "professional-looking-website", "automate-lead-follow-up", "core-web-vitals-speed"]
services: ["websites"]
faq:
  - q: "Quel est un bon taux de conversion pour un site vitrine ?"
    a: "Il n’existe pas de bon chiffre universel : tout dépend de votre métier, de vos prix et de l’origine de vos visiteurs. Comparez chaque page avec elle-même dans le temps. Une page de service qui reçoit des visites régulières et jamais de demande est la première à corriger."
  - q: "Faut-il refaire son site pour obtenir plus de demandes ?"
    a: "Pas avant de savoir où les visiteurs partent. Une refonte change tout d’un coup, et vous ne saurez pas ce qui a marché. Corrigez d’abord l’offre, le numéro de téléphone et le formulaire, mesurez, et ne refaites le site que si sa structure pose problème."
  - q: "Google Analytics montre-t-il pourquoi les visiteurs partent ?"
    a: "Pas vraiment. GA4 montre combien de personnes visitent chaque page, d’où elles viennent et quels événements clés elles accomplissent, mais pas où elles ont cliqué ni hésité. Un outil d’enregistrement de sessions comme Microsoft Clarity montre les comportements derrière ces chiffres."
  - q: "Combien de temps avant d’avoir plus de demandes ?"
    a: "Un numéro cliquable ou un formulaire plus court agit dès la visite suivante, mais un petit site peut avoir besoin d’un mois de trafic ou plus avant que la différence se voie dans les chiffres. Jugez un changement sur plusieurs semaines de demandes, pas sur une bonne journée."
---

Un site qui ne génère aucune demande a l’un de ces deux problèmes. Soit les bons visiteurs n’y arrivent jamais, soit ils arrivent, regardent et repartent avant d’avoir trouvé une raison, ou un moyen simple, de vous contacter. Les remèdes diffèrent : avant de chercher à améliorer le taux de conversion de votre site internet, et surtout avant de payer une refonte, sachez lequel des deux vous concerne.

Quand les visiteurs sont là, on retrouve le plus souvent les mêmes fuites sur les sites vitrines de TPE : une offre trop large pour être comprise d’un coup d’œil, un numéro de téléphone caché dans le pied de page, un formulaire de devis qui demande tout, une page qui rame sur mobile et des demandes qui attendent un jour avant d’obtenir une réponse. Aucune ne nécessite un nouveau site.

Ce guide montre comment voir où vos visiteurs décrochent, avec des outils gratuits, puis comment corriger chaque fuite. Il complète mon guide pour {{< a key="small-business-website-guide" >}}créer un site internet professionnel{{< /a >}}.

## Problème de trafic ou de conversion : faites d’abord le tri

Commencez par les chiffres que vous avez déjà. Dans Google Search Console, ouvrez le rapport **Performances** sur les résultats de recherche, puis l’onglet **Pages** : par défaut, vous voyez combien de clics chaque page a reçus de Google sur les trois derniers mois.

Si vos pages de services reçoivent quelques clics par mois, vous avez un problème de trafic, et aucun bouton ne transformera dix visites en vingt demandes. Eden Flats, une conciergerie Airbnb d’Île-de-France, en est un bon exemple. Son ancien site n’apportait aucun contact : la personne qui la dirigeait, prise par l’activité, n’avait pas le temps d’apprendre comment se fait le référencement. Une fois le nouveau site, le SEO et l’identité visuelle en place, des propriétaires ont commencé à appeler pour confier la gestion de leurs biens.

Si vos pages reçoivent des visites régulières et toujours aucun appel, vous avez un problème de conversion, et la suite de ce guide est pour vous. Votre **taux de conversion**, c’est la part des visites qui se terminent par une demande : 4 demandes pour 400 visites, cela fait 1 %.

Comptez les appels autant que les formulaires. Un visiteur qui appuie sur votre numéro depuis son téléphone ne laisse aucune trace dans vos statistiques si vous ne l’enregistrez pas. Dans Google Analytics 4, enregistrez les appuis sur votre lien téléphone comme un événement (dans Google Tag Manager, un déclencheur sur les clics de liens qui commencent par `tel:` s’en charge), puis marquez cet événement comme **événement clé**, le nom que GA4 donne désormais à ce qu’il appelait les conversions : **Administration** > **Affichage des données** > **Événements** ([aide de Google](https://support.google.com/analytics/answer/13128484?hl=fr)). Le marquage n’est pas rétroactif : le décompte commence le jour où vous l’activez. Et demandez à chaque nouvel appelant comment il vous a trouvé.

## Pourquoi votre site ne génère pas de demandes : les fuites habituelles

Une fois le trafic écarté, la fuite est le plus souvent l’une de ces six. La colonne du milieu liste les signes à surveiller, que vous repérerez pour la plupart en regardant de vraies visites, comme l’explique la section suivante.

| Fuite | Signes typiques | Première correction |
|---|---|---|
| L’offre est floue ou trop large | Le visiteur lit le haut de la page d’accueil, puis s’en va | Une page par service : quoi, pour qui, où |
| Le moyen de vous contacter est caché | Long défilement, clics sur du texte qui n’est pas un lien | Un numéro cliquable sur chaque page |
| Le formulaire en demande trop | Le visiteur commence le formulaire, puis abandonne | Moins de champs, et la suite annoncée |
| La page est lente ou saute sur mobile | Visites courtes sur mobile, appuis répétés pendant le chargement | Des images plus légères, moins de scripts |
| Rien ne prouve que vous êtes sérieux | Une visite sur la page « Qui sommes-nous », puis la sortie | De vrais avis et des photos de vos réalisations |
| Les demandes attendent une réponse | Des demandes arrivent, mais deviennent rarement des clients | Des alertes immédiates et un rappel dans l’heure |

## Regardez de vraies visites avant de changer quoi que ce soit

Deviner, c’est ce qui pousse tant de petites entreprises à payer une refonte qui ne change rien. J’utilise Microsoft Clarity, qui est gratuit, pour voir où les visiteurs s’attardent, s’ils sont venus pour quelque chose de précis et quelle partie d’une page les fait fuir. Je peux alors corriger cette partie, que le problème vienne du texte, d’une photo ou de la mise en page.

Commencez par trois vues :

- **La carte de défilement** montre jusqu’où descendent la plupart des visiteurs. Si votre numéro ou votre bouton de devis se trouve plus bas, la plupart des gens ne le voient jamais.
- **La carte des clics** montre ce que les gens essaient d’ouvrir. Des clics sur une photo, un prix ou un titre qui n’est pas un lien vous disent ce qu’ils cherchaient.
- **Les enregistrements** des visites arrivées sur une page de service. Regardez-en dix ou vingt : les mêmes hésitations reviennent encore et encore.

Clarity repère aussi quatre signes de frustration, et vous pouvez filtrer les enregistrements sur chacun (nom dans l’interface anglaise entre parenthèses) : les **clics de rage** (rage clicks), des clics répétés au même endroit ; les **clics morts** (dead clicks), des clics sans aucune réaction ; le **défilement excessif** (excessive scrolling), plus rapide que la lecture, signe d’un visiteur perdu ; les **retours rapides** (quick backs), quand un visiteur ouvre une page et revient aussitôt.

Côté cookies, depuis le 31 octobre 2025, Clarity exige un signal de consentement pour les visiteurs de l’Espace économique européen, du Royaume-Uni et de la Suisse. Sans ce signal, Clarity ne dépose aucun cookie et des fonctions comme les enregistrements peuvent être limitées : reliez-le à votre bandeau cookies. Dans son [projet de recommandation sur le rejeu de session](https://www.cnil.fr/fr/rejeu-de-session-la-cnil-lance-une-consultation-publique-sur-son-projet-de-recommandation), la CNIL fait du consentement préalable la règle pour ces enregistrements ; la version issue de la consultation était inscrite à l’ordre du jour de sa séance plénière du 8 octobre 2026, mais je n’ai pas trouvé de texte définitif publié à la mi-octobre. Mon {{< a key="microsoft-clarity-tutorial" >}}tutoriel Microsoft Clarity{{< /a >}} détaille l’installation, et mon comparatif {{< a key="clarity-vs-hotjar" >}}Clarity vs Hotjar{{< /a >}} présente la principale alternative.

Puis faites comme vos visiteurs : ouvrez votre site sur votre téléphone, en données mobiles plutôt que sur le wifi du bureau, et essayez de vous contacter.

## Une offre claire par page

La plus grosse fuite que j’aie vue n’était pas un bouton. Sur les cinq sites que j’ai créés pour le fondateur de Pilotech, l’un n’a pas fonctionné du tout : il proposait trop de services et ratissait trop large. Celui qui est 1er ou 2e sur Google vend des services très précis. Son autre entreprise, Ginov, proposait une longue liste de métiers du bâtiment, un fourre-tout, et elle a fermé pendant que Pilotech, avec une offre précise, décollait.

Un visiteur décide vite si une page est pour lui. Le haut de chaque page de service doit répondre à quatre questions sans qu’il ait à défiler : ce que vous faites, pour qui, où, et quoi faire ensuite. « Plomberie, chauffage, électricité » répond à peine à la première. « Remplacement de chaudière pour particuliers à Nantes, devis ferme après visite gratuite » répond à trois, et un numéro de téléphone juste à côté répond à la quatrième.

Si vous lancez une campagne de publicité sur une seule offre, envoyez les gens vers une page consacrée à cette offre, pas vers votre page d’accueil. Mon comparatif {{< a key="landing-page-vs-website" >}}site vitrine ou landing page{{< /a >}} explique quand une page séparée vaut la peine.

## Faites de l’appel le geste le plus simple de la page

Dans les campagnes de cold emailing de Pilotech, beaucoup de prospects, surtout les architectes, ont appelé au lieu de répondre. Mon explication : un appel est plus rapide et raye la tâche de leur liste, une réponse écrite prend du temps et se noie parmi les autres emails, et les gens aiment parler à un humain. Les visiteurs de votre site sont tout aussi pressés : mettez le téléphone en avant.

Sur un téléphone, un numéro n’est cliquable à coup sûr que s’il s’agit d’un lien. En HTML, c’est un lien `tel:`, avec le numéro au format international (+33, sans le premier 0) :

```html
<a href="tel:+33XXXXXXXXX">0X XX XX XX XX</a>
```

La plupart des outils de création de site permettent de lier un bouton ou un texte à un numéro de téléphone, ou acceptent une adresse `tel:` saisie dans le champ du lien. Ensuite :

- **Affichez le numéro dans l’en-tête de chaque page**, pas seulement sur la page contact.
- **Ajoutez une barre d’appel sur mobile** : un bouton d’appel qui reste à l’écran pendant que le visiteur fait défiler la page. Sur le {{< a page="/projects/eden-corporate-mobility" >}}site d’Eden Corporate Mobility{{< /a >}}, la barre d’appel reste visible sur mobile : un responsable RH peut appeler depuis n’importe quelle page, ou décrire sa mission dans le formulaire.
- **Indiquez vos horaires à côté du numéro**, et enregistrez une annonce de messagerie qui dit quand vous rappelez.

## Un formulaire de devis court et précis

Chaque champ de plus est une raison d’abandonner. Pour un premier contact, il vous faut un nom, un téléphone ou une adresse email, et une ligne sur le besoin. Le reste peut attendre l’appel.

Trois détails rendent un formulaire plus efficace :

1. **Préremplissez le produit ou le service à la place du visiteur.** Sur le site unifié que j’ai créé pour Pilotech, prêt à être mis en ligne, une demande de devis envoyée depuis une fiche produit précise le modèle : l’équipe sait de quoi parle l’appel avant de décrocher. La {{< a page="/projects/pilotech" >}}page du projet Pilotech{{< /a >}} montre comment le site est organisé.
2. **Annoncez la suite**, sous le bouton : qui rappelle, et sous quel délai.
3. **Affichez une page de remerciement après l’envoi.** Elle rassure le visiteur et vous donne quelque chose à compter comme événement clé.

Testez ensuite le formulaire vous-même, une fois par mois : envoyez une demande depuis votre téléphone et vérifiez le temps qu’elle met à arriver, si elle tombe dans les spams et si elle arrive sur une adresse que quelqu’un lit encore.

## Vitesse et confiance : les fuites invisibles depuis votre bureau

### Une page lente sur mobile

Votre site se charge sans doute vite sur l’ordinateur du bureau. Une bonne partie de vos visiteurs sont sur un téléphone, en données mobiles. Les Core Web Vitals de Google fixent les seuils d’une bonne expérience, à atteindre sur au moins 75 % des chargements de page : l’image ou le bloc de texte principal s’affiche en 2,5 secondes au plus (LCP), la page réagit à un appui ou à un clic en 200 millisecondes au plus (INP) et la mise en page reste stable, avec un score de décalage de 0,1 au plus (CLS). Mon guide sur la {{< a key="core-web-vitals-speed" >}}vitesse de chargement d’un site internet{{< /a >}} explique comment les mesurer et les corriger. Sur les sites de TPE, les photos trop lourdes et les widgets tiers sont les suspects habituels.

### Un site qui ne fait pas sérieux

Des chercheurs ont montré que l’on juge l’attrait visuel d’une page web en 50 millisecondes environ ([Lindgaard et al., 2006](https://doi.org/10.1080/01449290500330448)). Avant d’avoir lu un mot, le visiteur s’est déjà fait une idée : vous ressemblez, ou non, à une entreprise qu’on appelle.

Je veux que les prospects de mes clients soient un peu intimidés par leur site. Un site qui fait sérieux est pris au sérieux, et il réduit aussi les négociations : si quelqu’un ne vous trouve pas si respectable, il ne pensera pas non plus que vous valez ce prix-là. Les preuves aident un inconnu à vous faire confiance : de vrais avis Google (le portail que j’ai créé pour Pilotech les présente dans un carrousel), des photos de vos propres réalisations quand vous en avez, les villes où vous intervenez, des coordonnées complètes et vos mentions légales. Mon article sur le {{< a key="professional-looking-website" >}}site internet haut de gamme{{< /a >}} va plus loin.

## Répondez à chaque demande dans l’heure

Un formulaire qui marche ne sert à rien si la demande attend le lendemain. Une étude publiée en 2011 dans la Harvard Business Review, portant sur 1,25 million de demandes reçues par 42 entreprises américaines, montre que celles qui tentaient de joindre le prospect dans l’heure avaient près de sept fois plus de chances de le qualifier que celles qui essayaient ne serait-ce qu’une heure plus tard, et plus de 60 fois plus que celles qui attendaient 24 heures ou davantage ([HBR](https://hbr.org/2011/03/the-short-life-of-online-sales-leads)). Les chiffres ont vieilli, mais la logique tient : la personne qui vient de remplir votre formulaire remplit peut-être aussi celui de vos concurrents.

Pilotech m’a montré l’autre face du problème. J’apporte à Pilotech une dizaine de prospects par jour, et à un moment, il y en avait plus que l’équipe ne pouvait en suivre. Le fondateur m’a demandé de créer une application interne pour tout voir clairement et ne jamais oublier de rappeler un prospect ou de lui répondre.

Pas besoin d’une application sur mesure pour commencer. Trois habitudes couvrent l’essentiel :

- une alerte immédiate sur votre téléphone à chaque nouvelle demande ;
- une liste partagée des demandes, chacune avec un statut : nouvelle, rappelée, devis envoyé ;
- un rappel quand une demande n’a pas eu de réponse au bout d’une heure.

Mon tutoriel pour {{< a key="automate-lead-follow-up" >}}automatiser le suivi des prospects{{< /a >}} met cela en place gratuitement avec Google Apps Script.

## Améliorer le taux de conversion de votre site internet : l’ordre à suivre

1. Vérifiez votre trafic dans la Search Console. Trop peu de visites : travaillez le référencement avant tout le reste.
2. Installez Clarity, relié à votre bandeau cookies, et laissez-le collecter quelques semaines de visites.
3. Regardez les enregistrements des visites sur vos deux ou trois pages de services les plus vues.
4. Réécrivez le haut de chaque page de service : quoi, pour qui, où, et que faire ensuite.
5. Mettez un numéro cliquable sur chaque page, et une barre d’appel sur mobile.
6. Réduisez le formulaire à l’essentiel et envoyez-vous une demande test.
7. Testez vos pages sur un téléphone, en données mobiles.
8. Mettez en place des alertes immédiates et répondez à chaque demande dans l’heure.
9. Changez une chose à la fois, notez la date et comparez les demandes d’un mois sur l’autre.

Vous pouvez faire l’essentiel vous-même : vous n’avez pas besoin de moi pour un lien téléphone ou un formulaire plus court. Si la fuite vient de l’offre elle-même ou de la structure du site, ou si vous préférez confier tout le diagnostic, c’est le type de mission que je prends en charge au forfait.
