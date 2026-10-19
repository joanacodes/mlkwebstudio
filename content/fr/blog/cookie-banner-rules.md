---
title: "Bandeau cookies en 2026 : ce qu’exigent vraiment la CNIL, l’UE et le Royaume-Uni"
seo_title: "Bandeau cookies CNIL : les règles 2026 (UE, Royaume-Uni)"
description: "Bandeau cookies CNIL : quels cookies exigent un consentement, le bouton « Tout refuser », la mesure d’audience exemptée, le Royaume-Uni et les sanctions."
slug: "bandeau-cookies-cnil"
translationKey: "cookie-banner-rules"
date: 2026-10-18T21:06:00+02:00
lastmod: 2026-10-18T21:06:00+02:00
category: "gdpr"
article_type: "guide"
keywords: ["bandeau cookies CNIL", "bandeau cookies obligatoire", "consentement cookies RGPD", "bouton tout refuser cookies", "mesure d’audience exemptée CNIL", "Consent Mode v2"]
summary: "Dans l’UE, tout cookie ou traceur non strictement nécessaire exige le consentement préalable du visiteur, et refuser doit être aussi simple qu’accepter : la CNIL attend un bouton « Tout refuser » aussi visible que « Tout accepter ». Une mesure d’audience réglée selon ses conditions strictes peut s’en passer. Au Royaume-Uni, depuis février 2026, une mesure purement statistique en est dispensée si vous l’expliquez et permettez de s’y opposer ; la publicité, non."
cover: "cookie-banner-rules"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’un bandeau cookies avec les boutons Accepter et Refuser"
related: ["cookie-banner-setup", "privacy-policy-guide", "digital-omnibus-gdpr", "uk-gdpr-data-use-access-act", "microsoft-clarity-tutorial"]
services: ["websites"]
faq:
  - q: "Faut-il un bandeau cookies sans outil de statistiques ni publicité ?"
    a: "En général, non. Les cookies strictement nécessaires (session de connexion, panier, cookie qui mémorise le choix du visiteur) ne demandent pas de consentement. Vérifiez d’abord vos contenus intégrés et votre outil de création de site : vidéos, cartes, messageries instantanées et statistiques natives de certaines plateformes déposent aussi des cookies."
  - q: "Faut-il une page « politique cookies » séparée ?"
    a: "Aucun texte ne l’impose. Le visiteur doit trouver, à un clic du bandeau, une information claire sur chaque finalité, les tiers concernés et la durée de vie des cookies. Beaucoup de sites la placent dans une rubrique de leur politique de confidentialité."
  - q: "Les règles sur les cookies s’appliquent-elles aux applications mobiles ?"
    a: "Oui. La règle vise toute information stockée ou lue sur un appareil : une application qui lit l’identifiant publicitaire du téléphone ou embarque des SDK de mesure et de publicité doit recueillir le consentement de la même façon, en général par un écran dédié au premier lancement."
  - q: "Qui contrôle les cookies, et un visiteur peut-il se plaindre ?"
    a: "La CNIL en France, l’ICO au Royaume-Uni et l’autorité de chaque pays ailleurs dans l’UE. Un visiteur peut déposer une plainte auprès de l’autorité, et la CNIL comme l’ICO mènent aussi leurs propres contrôles de sites."
  - q: "Un bandeau cookies suffit-il pour être conforme au RGPD ?"
    a: "Non. Il ne couvre que le consentement aux cookies et autres traceurs. Il vous faut aussi une politique de confidentialité, des mentions légales et des contrats avec les prestataires qui traitent des données personnelles pour vous."
---

Le bandeau cookies n’est pas une obligation en soi : c’est le consentement qui l’est. Le droit européen, comme sa version britannique, exige l’accord du visiteur avant de déposer ou de lire sur son appareil tout ce qui n’est pas strictement nécessaire ; le bandeau est simplement l’endroit où vous le demandez. En matière de bandeau cookies, la CNIL regarde donc trois choses : ce qui se charge avant la réponse, la façon dont vous demandez, et la facilité avec laquelle on peut dire non.

Ce guide fait le point sur les règles en vigueur au 19 octobre 2026 en France, dans l’UE et au Royaume-Uni. Il fait partie de mon {{< a key="gdpr-guide" >}}guide RGPD pour les petites équipes{{< /a >}} et concerne aussi les entreprises installées hors de l’UE, dès que leurs visiteurs s’y trouvent. Il s’agit d’une information générale, pas d’un conseil juridique.

## La règle derrière chaque bandeau cookies

Tout part de l’article 5, paragraphe 3, de la [directive ePrivacy](https://eur-lex.europa.eu/eli/dir/2002/58/oj) (2002/58/CE, modifiée en 2009). Stocker une information sur l’appareil d’un visiteur, ou lire une information qui s’y trouve déjà, exige son consentement, sauf si cela sert uniquement à transmettre une communication ou si c’est strictement nécessaire pour fournir un service qu’il a expressément demandé. En France, la règle figure à l’article 82 de la loi Informatique et Libertés ; au Royaume-Uni, à la regulation 6 des Privacy and Electronic Communications Regulations (PECR), restées en vigueur après le Brexit.

Le consentement a le sens du RGPD : libre, spécifique, éclairé et univoque, exprimé par un acte positif clair (article 4, point 11). Vous devez pouvoir le prouver (article 7, paragraphe 1), et le retirer doit être aussi simple que le donner (article 7, paragraphe 3). Dans l’arrêt Planet49 (C-673/17, 1er octobre 2019), la Cour de justice de l’Union européenne a jugé qu’une case précochée ne vaut pas consentement, et que le visiteur doit connaître la durée de vie des cookies et savoir si des tiers peuvent y accéder. Le Comité européen de la protection des données (CEPD) précise, dans ses lignes directrices 05/2020 sur le consentement, que faire défiler une page ne vaut jamais consentement.

Trois points passent souvent inaperçus :

- La règle ne vise pas que les cookies. Stockage local, pixels de suivi, empreinte de l’appareil (fingerprinting) et SDK des applications mobiles sont concernés. La CNIL l’a appliquée aux pixels de suivi d’ouverture des emails marketing dans une recommandation adoptée le 12 mars 2026.
- Peu importe que la donnée identifie quelqu’un. L’arrêt Planet49 l’a tranché aussi : un cookie qui ne stocke rien de personnel exige quand même un consentement s’il n’est pas strictement nécessaire.
- Ce que vous intégrez engage votre responsabilité. La vidéo, la carte, la messagerie instantanée et le pixel publicitaire déposent des cookies chez vos visiteurs parce que vous les avez placés sur votre page. Dans l’arrêt Fashion ID (C-40/17, 2019), la Cour a jugé un site responsable, conjointement avec Facebook, de la collecte et de la transmission des données de ses visiteurs par le bouton « J’aime » qu’il avait intégré.

## Quels cookies exigent un consentement, et lesquels n’en exigent pas

Pour chaque cookie ou traceur, regardez ce qu’il fait et si le visiteur l’a demandé. Voici comment se répartissent les grandes catégories en octobre 2026 :

| Cookie ou traceur | France (CNIL) | Royaume-Uni depuis février 2026 |
|---|---|---|
| Strictement nécessaires : session de connexion, panier, sécurité, répartition de charge, cookie qui mémorise le choix du visiteur | Pas de consentement | Pas de consentement |
| Mesure d’audience (statistiques) | Consentement, sauf si l’outil remplit toutes les conditions de l’exemption de la CNIL | Pas de consentement si l’usage est purement statistique, avec une information claire et un moyen simple de s’y opposer |
| Préférences choisies par le visiteur (langue, taille du texte) | Pas de consentement quand la fonction est attendue par le visiteur | Pas de consentement (exception « apparence »), avec information et possibilité de s’y opposer |
| Pixels publicitaires et de reciblage (Google Ads, Meta, LinkedIn) | Consentement | Consentement |
| Enregistrements de session et cartes de chaleur (Microsoft Clarity, Hotjar, désormais Contentsquare) | Consentement | Clarity attend de toute façon un signal de consentement des visiteurs britanniques |
| Vidéos, cartes, boutons de partage et messageries intégrés | Consentement s’ils déposent ou lisent des traceurs | Consentement s’ils déposent ou lisent des traceurs, sauf exception |

Les autres pays de l’UE appliquent la même directive à travers leurs propres lois et autorités, et leurs positions ne sont pas identiques, en particulier sur la mesure d’audience. Si l’essentiel de vos visiteurs se trouve en Allemagne, en Espagne ou en Italie, consultez aussi l’autorité du pays.

### Mesure d’audience : l’exemption étroite de la CNIL

La CNIL admet une mesure d’audience sans consentement, mais seulement si l’outil :

- sert uniquement à mesurer l’audience de votre site, pour votre compte exclusif ;
- ne produit que des statistiques anonymes ;
- n’est ni recoupé avec d’autres traitements ni transmis à des tiers ;
- ne permet pas de suivre la navigation d’une personne sur d’autres sites.

Le visiteur doit tout de même être informé et pouvoir s’y opposer, par exemple grâce à un lien dans votre politique de confidentialité. La CNIL recommande aussi une durée de vie des traceurs de 13 mois au maximum et une conservation des données de 25 mois au plus. Elle publie un guide de configuration de Matomo en mode exempté : journal des visites et profils de visiteurs désactivés, adresses IP anonymisées, ni cookies tiers ni suivi entre domaines, ni identifiant utilisateur ni suivi e-commerce, cartes de chaleur et enregistrements de session désactivés. Sa [page sur les outils de mesure d’audience](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience) détaille les conditions. Sauf si votre outil les remplit toutes et que vous pouvez le démontrer, demandez le consentement : c’est la règle prudente pour Google Analytics 4.

## Bandeau cookies CNIL : les sept règles à respecter

Les lignes directrices et la recommandation de la CNIL du 17 septembre 2020 (délibérations n° 2020-091 et n° 2020-092) s’appliquent depuis fin mars 2021, et ses [questions-réponses sur les cookies](https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ) expliquent comment elle les lit. Appliquées à un bandeau, elles tiennent en sept points :

1. **Refuser est aussi simple qu’accepter.** Un bouton « Tout refuser » à côté de « Tout accepter », de même taille, de même couleur et au même niveau, offre un choix clair. Un simple bouton « Paramétrer » à côté de « Tout accepter » ne suffit pas, car refuser demande alors plus de clics qu’accepter. Fermer le bandeau peut valoir refus si le bandeau l’indique.
2. Rien de non essentiel ne se charge avant le choix : les cookies de publicité et de mesure attendent l’accord du visiteur.
3. Chaque finalité est expliquée en mots simples, avec accès à la liste des tiers qui déposeront des cookies.
4. Pas d’incitation : couleurs, tailles et formulations ne doivent pas pousser vers une réponse, et poursuivre la navigation ne vaut pas consentement.
5. Le choix est mémorisé. La CNIL considère comme une bonne pratique de conserver le consentement comme le refus pendant six mois, pour ne pas redemander à chaque visite ; la durée adaptée peut varier selon le site.
6. Le visiteur peut changer d’avis à tout moment. Un lien « Gestion des cookies » en pied de page, sur toutes les pages, est la façon habituelle de le permettre.
7. Vous pouvez prouver chaque consentement : date, réponse et version du bandeau affichée. Une plateforme de gestion du consentement (CMP) conserve ces preuves pour vous.

{{< callout type="tip" >}}Le test des deux minutes : ouvrez votre site en navigation privée, ne touchez pas au bandeau et regardez **Application > Cookies** dans les outils de développement de Chrome. Si des cookies de mesure ou de publicité sont déjà là, votre bandeau est décoratif.{{< /callout >}}

Les sanctions montrent ce que la CNIL regarde en premier. En janvier 2022, elle a infligé 150 millions d’euros d’amende à Google et 60 millions à Facebook, parce que refuser les cookies sur google.fr, youtube.com et facebook.com était plus compliqué que les accepter, avec trois mois pour se mettre en conformité sous astreinte. En septembre 2025, elle a sanctionné [Shein d’une amende de 150 millions d’euros](https://www.cnil.fr/fr/cookies-deposes-sans-consentement-la-cnil-sanctionne-shein-dune-amende-de-150-millions-deuros) : des cookies, publicitaires compris, étaient déposés dès l’arrivée sur le site, le second niveau du bandeau ne nommait pas les tiers, et refuser ou retirer son consentement n’empêchait pas le dépôt de nouveaux cookies. Le même mois, Google a écopé de 325 millions d’euros, en partie parce que refuser les cookies publicitaires à la création d’un compte Google avait été plus difficile que les accepter. Ce sont des géants, mais chacun de ces défauts peut se retrouver sur un site de cinq pages équipé d’une seule extension mal réglée.

## Royaume-Uni : ce que le Data (Use and Access) Act 2025 a changé

Au Royaume-Uni, la regulation 6 des PECR pose toujours la règle : consentement pour tout ce qui est stocké ou lu sur un appareil, sauf exception. Ce qui a changé, c’est la liste des exceptions. Le Data (Use and Access) Act 2025 en a ajouté de nouvelles, en vigueur depuis le 5 février 2026, que détaille l’ICO, l’autorité britannique :

- Finalités statistiques : une mesure d’audience dont le seul but est de produire des statistiques sur l’utilisation de votre service. Il faut une information claire et complète et un moyen simple de s’y opposer. Si les mêmes données servent aussi à la publicité en ligne, par exemple pour des audiences de reciblage, l’exception tombe.
- Apparence : mémoriser la façon dont le visiteur veut voir ou utiliser votre site, comme sa langue ou la taille du texte, aux deux mêmes conditions.
- Assistance d’urgence : localiser un appareil pour envoyer des secours.

Les cookies strictement nécessaires restent exemptés. **Les cookies publicitaires exigent toujours un consentement**, et tout ce qui en demande un doit rester désactivé tant que le visiteur ne l’a pas activé.

L’ICO attend lui aussi que refuser soit aussi simple qu’accepter. Il adresse depuis 2023 des lettres d’avertissement aux éditeurs de sites britanniques très fréquentés, est intervenu contre Sky Betting and Gaming en septembre 2024 pour des cookies publicitaires déposés avant tout choix, et indiquait en décembre 2025 que 979 des 1 000 sites les plus fréquentés qu’il contrôle respectaient ses critères, après l’envoi de 17 avis préliminaires de mise en demeure. Le plafond a grimpé aussi : depuis février 2026, les amendes PECR peuvent atteindre 17,5 millions de livres sterling ou 4 % du chiffre d’affaires mondial annuel, le montant le plus élevé étant retenu, contre 500 000 livres auparavant.

Pour un site dont tous les visiteurs sont au Royaume-Uni, le calcul change : avec seulement des cookies strictement nécessaires, une mesure d’audience purement statistique et des cookies de préférences, une information claire et un lien de désactivation suffisent : plus besoin de bandeau de consentement. Ajoutez un pixel publicitaire, ou Microsoft Clarity, et le bandeau revient. Le reste de la loi est détaillé dans mon article sur le {{< a key="uk-gdpr-data-use-access-act" >}}RGPD britannique après le Data (Use and Access) Act 2025{{< /a >}}.

## Dans l’UE et hors de l’UE : qui est concerné

Le pays où votre entreprise est immatriculée compte moins que celui où se trouvent vos visiteurs. Le RGPD s’applique à une entreprise établie hors de l’UE qui suit le comportement de personnes situées dans l’UE (article 3, paragraphe 2, point b), et son considérant 24 cite justement le suivi sur internet. Des cookies de mesure ou de publicité déposés chez des visiteurs européens vous placent dans ce cas.

Les règles sur les cookies sont en outre appliquées pays par pays, hors du guichet unique du RGPD : en janvier 2022, le Conseil d’État a confirmé que la CNIL pouvait sanctionner directement Google pour ses cookies. Ses sanctions visent aussi bien Google LLC, société américaine, que les filiales irlandaises de Facebook et de Shein. Concrètement :

- Un cabinet d’architectes lyonnais avec Google Analytics et une vidéo YouTube en page d’accueil : les règles françaises s’appliquent en entier. Les deux exigent un consentement, donc le bandeau doit les bloquer jusqu’à l’accord du visiteur.
- Un consultant installé à Londres avec des clients à Paris : règles britanniques pour ses visiteurs britanniques, règles européennes pour les visiteurs français. Un seul bandeau conçu selon les exigences de la CNIL couvre les deux.
- Une boutique en ligne à Montréal qui livre en France : suivre ses visiteurs français la soumet au RGPD, et l’hypothèse prudente est que les règles françaises sur les cookies s’appliquent aussi à ces visiteurs.
- Un hôtel genevois qui reçoit des réservations d’Allemagne, ou une agence à Casablanca qui prospecte des entreprises françaises : même raisonnement pour leurs visiteurs européens.

Les outils appliquent aussi leurs propres règles, où que soit votre entreprise : les règles de Google relatives au consentement de l’utilisateur dans l’UE et l’exigence de consentement de Microsoft Clarity couvrent toutes deux les visiteurs de l’EEE, du Royaume-Uni et de Suisse. Mon article sur le {{< a key="gdpr-outside-eu" >}}RGPD pour les entreprises hors de l’UE{{< /a >}} détaille les deux critères.

## Consent Mode v2 de Google et Microsoft Clarity : les outils vérifient aussi

Google a mis à jour son Consent Mode en novembre 2023. La version 2 ajoute deux signaux : `ad_user_data` (autorisation d’envoyer les données du visiteur à Google à des fins publicitaires) et `ad_personalization` (autorisation de les utiliser pour des annonces personnalisées). Les deux doivent être accordés pour la publicité personnalisée. Pour le trafic de l’EEE, Google exige ces signaux, et un compte qui ne les envoie pas peut perdre la personnalisation des annonces, le remarketing et une partie de la mesure des conversions. Les CMP certifiées par Google ont été mises à jour pour les transmettre ; un bandeau fait maison doit l’être à la main.

**Le Consent Mode n’est pas un consentement.** Il transmet la réponse du visiteur aux balises Google, et votre bandeau doit toujours recueillir cette réponse correctement. En mode basique, les balises Google attendent la réponse. En mode avancé, elles se chargent tout de suite avec un consentement refusé par défaut et, tant qu’il n’est pas accordé, envoient des pings sans cookies. Pour l’option prudente en France, choisissez le mode basique : rien ne part chez Google avant le « oui » du visiteur.

J’utilise Microsoft Clarity pour voir où les visiteurs s’attardent et quelles zones d’une page les font fuir. Depuis le 31 octobre 2025, pour les visites venues de l’EEE, du Royaume-Uni et de Suisse, Clarity ne dépose aucun cookie sans signal de consentement valide et supprime ses cookies existants en cas de refus ; sans cookies, des fonctions comme les enregistrements de session et les entonnoirs peuvent être limitées. Votre bandeau transmet la réponse via l’API Consent v2 de Clarity, que documentent des CMP comme Complianz, CookieYes ou Usercentrics. En France, la recommandation de la CNIL sur le rejeu de session, encore à l’état de projet au 19 octobre 2026 (consultation close le 22 avril), en fait une opération soumise au consentement. L’installation est détaillée dans mon {{< a key="microsoft-clarity-tutorial" >}}tutoriel Microsoft Clarity{{< /a >}}.

## Ce qui pourrait changer : le Digital Omnibus

Au 19 octobre 2026, les règles ci-dessus sont celles qui s’appliquent. Le Digital Omnibus, proposé par la Commission européenne en novembre 2025, en modifierait plusieurs : davantage d’usages dispensés de consentement, un délai avant de redemander après un refus (six mois dans le texte de la Commission, quatre dans le dernier projet du Conseil) et des signaux du navigateur que les sites devraient respecter (un texte de compromis du Conseil les a supprimés en juin 2026).

Ce n’est encore qu’une proposition. Le vote des ambassadeurs des États membres prévu le 7 octobre 2026 a été reporté, aucune position du Conseil n’a été confirmée depuis, et les commissions du Parlement examinent encore plus de 1 750 amendements. Tant qu’un texte n’est pas adopté et applicable, construisez votre bandeau selon les règles actuelles. Mon article sur le {{< a key="digital-omnibus-gdpr" >}}Digital Omnibus et le RGPD{{< /a >}} suit les négociations.

## Bandeau cookies : la liste de contrôle 2026

1. Listez ce que dépose votre site, y compris les cookies ajoutés par votre outil de création de site et vos extensions ; le scanner de la plupart des CMP aide.
2. Classez chacun avec le tableau ci-dessus.
3. Bloquez tout ce qui n’est pas essentiel jusqu’à la réponse du visiteur, contenus intégrés compris : une vignette « cliquer pour charger » convient aux vidéos et aux cartes.
4. Placez « Tout accepter » et « Tout refuser » côte à côte au premier niveau, avec une option « Personnaliser » pour choisir finalité par finalité.
5. Expliquez chaque finalité et nommez les tiers, avec un lien vers votre politique de confidentialité. Mon guide sur {{< a key="privacy-policy-guide" >}}le contenu d’une politique de confidentialité{{< /a >}} couvre la rubrique cookies.
6. Mémorisez la réponse pendant environ six mois, conservez-en la preuve et ajoutez un lien « Gestion des cookies » dans votre pied de page.
7. Transmettez la réponse à Google (Consent Mode v2) et à Microsoft Clarity (API Consent v2).
8. Refaites le test en navigation privée après chaque nouvelle extension, nouveau pixel ou nouveau contenu intégré.

La plupart des sites peuvent tout faire avec une plateforme de gestion du consentement. L’installation pas à pas sur Squarespace, Wix et WordPress est dans {{< a key="cookie-banner-setup" >}}mon tutoriel pour installer un bandeau cookies{{< /a >}}. Un avocat ou un DPO vaut la dépense quand votre activité dépend des données publicitaires, quand vous traitez des données sensibles comme des informations de santé, quand vous envisagez un modèle « consentir ou payer », ou quand une autorité vous a écrit. Et si vous préférez ne pas y toucher du tout, le bandeau, la politique de confidentialité et les mentions légales font partie des {{< a page="/services/websites" >}}sites web que je réalise{{< /a >}}.
