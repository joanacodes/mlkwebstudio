---
title: "Installer un bandeau cookies conforme sur Squarespace, Wix ou WordPress"
seo_title: "Installer un bandeau cookies : Squarespace, Wix et WordPress"
description: "Installer un bandeau cookies sur Squarespace, Wix ou WordPress : bloquer les traceurs avant le choix, activer le Consent Mode v2 et tester le résultat."
slug: "installer-bandeau-cookies"
translationKey: "cookie-banner-setup"
date: 2026-10-18T21:09:00+02:00
lastmod: 2026-10-18T21:09:00+02:00
category: "gdpr"
article_type: "tutorial"
keywords: ["installer bandeau cookies", "bandeau cookies Squarespace", "bandeau cookies Wix", "plugin cookies WordPress", "Consent Mode v2", "tester bandeau cookies"]
summary: "Utilisez un bandeau qui bloque tout traceur non essentiel avant la réponse du visiteur, avec « Tout refuser » à côté de « Tout accepter ». Le bandeau intégré de Squarespace couvre ses cookies et son Google Analytics natif, pas le code injecté ; Wix installe désormais un bandeau Usercentrics ; sur WordPress, une extension comme Complianz, CookieYes ou Cookiebot s’en charge. Transmettez la réponse à Google avec le Consent Mode v2, puis testez en navigation privée."
cover: "cookie-banner-setup"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’un bandeau cookies aux boutons Tout refuser et Tout accepter de même taille"
related: ["cookie-banner-rules", "squarespace-code-injection", "privacy-policy-guide", "microsoft-clarity-tutorial", "gdpr-guide"]
services: ["websites"]
faq:
  - q: "Puis-je coder mon propre bandeau cookies plutôt qu’utiliser une CMP ?"
    a: "Oui, mais il vous faudra alors bloquer chaque script jusqu’au consentement, permettre aux visiteurs de changer d’avis, envoyer vous-même les signaux du Consent Mode v2 et tout retester à chaque modification. Pour la plupart des sites, le bandeau de la plateforme ou une plateforme de gestion du consentement demande moins de travail."
  - q: "Faut-il garder une preuve du consentement de chaque visiteur ?"
    a: "Oui. L’article 7, paragraphe 1, du RGPD impose de pouvoir démontrer que le visiteur a consenti. Les CMP conservent un journal des choix ; vérifiez que la vôtre le fait, y compris dans son offre gratuite."
  - q: "Combien de temps le bandeau doit-il mémoriser le choix du visiteur ?"
    a: "La CNIL considère six mois comme une bonne pratique, pour un refus comme pour un consentement, avant de reposer la question. Les CMP permettent en général de régler cette durée."
  - q: "Faut-il une CMP certifiée par Google ?"
    a: "Seulement si votre site affiche des annonces Google via AdSense, Ad Manager ou AdMob. Ces éditeurs doivent utiliser une CMP certifiée par Google et intégrée au TCF de l’IAB pour diffuser des annonces personnalisées dans l’EEE et au Royaume-Uni (depuis le 16 janvier 2024) et en Suisse (depuis le 31 juillet 2024). Pour Google Analytics et le suivi Google Ads, Google demande les signaux du Consent Mode v2 : une CMP certifiée les envoie pour vous, un bandeau fait maison doit les envoyer lui-même."
  - q: "Pourquoi Google Analytics affiche-t-il moins de visiteurs après l’ajout du bandeau ?"
    a: "Parce que les visiteurs qui refusent ne sont plus suivis par cookies. Squarespace prévient qu’une fois les cookies restreints par son bandeau, ses propres statistiques peuvent afficher bien plus de visiteurs que Google Analytics. Comparez des tendances dans le temps plutôt que les deux totaux."
---

Un bandeau cookies a trois missions : bloquer les traceurs non essentiels tant que le visiteur n’a pas répondu, rendre le refus aussi simple que l’acceptation, et mémoriser la réponse. Ce tutoriel explique comment installer un bandeau cookies sur un site Squarespace, Wix ou WordPress, comment transmettre le choix du visiteur à Google avec le Consent Mode v2, et comment vérifier que tout fonctionne.

Je construis la plupart des sites de mes clients sur Squarespace, je commence donc par lui. Les règles derrière chaque réglage (quels cookies exigent un consentement, ce que contrôlent la CNIL et l’ICO britannique) sont dans mon guide sur {{< a key="cookie-banner-rules" >}}les règles du bandeau cookies en 2026{{< /a >}}, qui fait partie de mon {{< a key="gdpr-guide" >}}guide du RGPD pour les petites équipes{{< /a >}}. Ce tutoriel donne des informations pratiques, pas un conseil juridique.

Il ne concerne pas que les entreprises de l’Union : une société suisse, québécoise ou marocaine qui dépose des traceurs chez des visiteurs en France doit prévoir le même bandeau (mon article sur {{< a key="gdpr-outside-eu" >}}le RGPD hors de l’UE{{< /a >}} explique quand les règles s’appliquent).

## Avant de commencer : listez ce que votre site charge

Un bandeau ne bloque que ce que vous connaissez. Commencez par lister tout ce qui, sur votre site, peut stocker ou lire quelque chose dans le navigateur d’un visiteur :

- **Mesure d’audience** : Google Analytics, les statistiques de votre créateur de site, Microsoft Clarity.
- **Publicité** : la balise Google Ads, le pixel Meta, l’Insight Tag de LinkedIn.
- **Contenus intégrés** : vidéos YouTube, Google Maps, modules de réservation ou de chat.
- **Code collé** : l’injection de code sur Squarespace, le code personnalisé sur Wix, une extension d’en-tête et de pied de page sur WordPress.

L’endroit où chaque élément a été ajouté détermine si un bandeau intégré peut le contrôler :

| Plateforme | Bandeau intégré | Quand il faut une CMP |
|---|---|---|
| Squarespace | Oui, dans le panneau des cookies (Cookies & Data Privacy) | Dès que du code injecté, des blocs Code ou des contenus intégrés ajoutent des traceurs |
| Wix | Usercentrics for Wix, ajouté depuis le tableau de bord | C’en est déjà une : vérifiez le classement de votre code personnalisé |
| WordPress | Aucun | Toujours : installez une extension de consentement |

Une plateforme de gestion du consentement (CMP) est un service qui affiche le bandeau, bloque les scripts jusqu’à la réponse du visiteur, enregistre chaque choix et le transmet à des outils comme ceux de Google. Au Royaume-Uni, les règles sont plus souples depuis février 2026 pour la mesure d’audience à seule fin statistique, pas pour la publicité : un bandeau réglé sur les exigences de la CNIL couvre les deux pays.

## Installer un bandeau cookies sur Squarespace

Le bandeau intégré de Squarespace contrôle ses propres cookies non essentiels et Google Analytics connecté par l’intégration native. Il ne bloque pas le code collé dans l’injection de code, et Squarespace précise dans sa liste des cookies qu’il restreint certains services tiers, pas tous. J’ajoute souvent un peu de code personnalisé aux sites Squarespace de mes clients : c’est justement la partie que le bandeau intégré laisse de côté.

Les intitulés ci-dessous sont ceux de l’interface en anglais (traduits dans l’interface en français, et variables d’une page d’aide à l’autre) : fiez-vous à la fonction de chaque option.

1. Dans les paramètres (**Settings**), ouvrez le panneau **Cookies & Data Privacy** (Cookies & Visitor Data dans les anciens guides) et activez le bandeau.
2. Activez le bouton **Manage cookies**. D’après [le guide de Squarespace sur le bandeau cookies](https://support.squarespace.com/hc/fr-fr/articles/206545727), c’est lui qui bloque les cookies non essentiels, comme ceux de Google Analytics, jusqu’au consentement du visiteur.
3. Activez le bouton **Decline All**, pour que refuser prenne un clic sur le premier écran, comme accepter. Le texte et les libellés des boutons se modifient dans le même panneau : « Tout accepter » et « Tout refuser » sont les plus clairs.
4. Pour le lien qui permet de changer d’avis plus tard, choisissez la disposition **Subfooter** ou **Pill**, pas **Hidden**.
5. Connectez Google Analytics par l’intégration native de Squarespace, en enregistrant votre identifiant de mesure, plutôt qu’en collant le code de Google : l’intégration suit le bandeau.

{{< screenshot id="cookie-banner-setup-01" alt="Panneau Cookies & Data Privacy de Squarespace avec le bandeau, le bouton Manage cookies et le bouton Decline All activés" >}}

Si votre site n’est pas encore construit, commencez par mon {{< a key="squarespace-tutorial" >}}tuto Squarespace{{< /a >}}.

### Quand il y a de l’injection de code

Google Ads, le pixel Meta, Clarity ou un module de réservation collés dans l’injection de code s’exécutent quelle que soit la réponse du visiteur. Pour Google Ads, Squarespace renvoie vers un exemple de code sur son forum, sans assurer de support sur le code personnalisé. Dès que vous avez plus d’un script de ce type, une CMP est la voie la plus propre :

1. Choisissez une CMP qui documente l’installation sur Squarespace (CookieHub et iubenda, par exemple, publient un guide) et lancez son scan des cookies.
2. Collez son script tout en haut du champ **Header** de l’injection de code, qui demande le forfait Essentiel (Core) ou supérieur. Mon guide de {{< a key="squarespace-code-injection" >}}l’injection de code Squarespace{{< /a >}} montre où se trouve ce champ et comment annuler une erreur.
3. Marquez vos autres scripts comme la CMP le demande, souvent en donnant à chaque balise `<script>` l’attribut `type="text/plain"` et un attribut de catégorie, pour qu’ils attendent le consentement.
4. Désactivez le bandeau de Squarespace, pour que le visiteur ne réponde qu’à un seul bandeau.

{{< screenshot id="cookie-banner-setup-02" alt="Champ Header de l’injection de code Squarespace avec le script de la CMP collé au-dessus des autres scripts" >}}

## Wix : ajouter le bandeau Usercentrics et classer votre code personnalisé

Au 19 octobre 2026, Wix ne propose plus son bandeau cookies d’origine aux nouveaux sites, mais les bandeaux déjà en place continuent de fonctionner. Les nouveaux sites reçoivent Usercentrics for Wix, une CMP qui, selon Wix, prend en charge le Consent Mode v2 ([guide de Wix](https://support.wix.com/en/article/displaying-a-cookie-banner-on-your-site), en anglais).

1. Dans le tableau de bord du site, ouvrez **Privacy & Cookies** (traduit dans l’interface en français) et cliquez sur **Add to Site** à côté de « Add a cookie consent banner », puis acceptez les conditions.
2. Dans la section **Cookie Consent Banner**, réglez la disposition et le thème, et vérifiez que le premier écran montre un bouton pour refuser à côté de celui pour accepter.
3. Gardez sur toutes les pages le bouton qui rouvre les réglages (le « privacy trigger »).
4. Vérifiez les langues. D’après Usercentrics, l’offre gratuite comprend des affichages illimités, le Consent Mode v2 et une seule langue : un site en français et en anglais demande l’offre payante pour parler à chaque visiteur dans sa langue.

{{< screenshot id="cookie-banner-setup-03" alt="Page Privacy & Cookies du tableau de bord Wix avec le bouton Add to Site à côté de Add a cookie consent banner" >}}

Ouvrez ensuite chaque extrait du code personnalisé (**Settings** > **Custom Code** en anglais). Réglez son type (**Code Type**) sur la catégorie mesure d’audience ou marketing s’il mesure ou fait de la publicité, ou fonctionnelle pour les préférences ; pour un script qui fait les deux, la documentation de Wix demande la catégorie la plus stricte. Son journal des consentements ne couvre pas le code personnalisé : gardez cette liste courte.

{{< callout type="warning" >}}**Wix classe le code personnalisé comme essentiel par défaut**, et le code essentiel se charge avant la réponse du visiteur. Un extrait de mesure d’audience ou de publicité laissé en « essentiel » s’exécute pour tout le monde.{{< /callout >}}

{{< screenshot id="cookie-banner-setup-04" alt="Réglages d’un extrait de code personnalisé dans Wix, avec les options de Code Type" >}}

Avec Google Tag Manager connecté par l’intégration de Wix, les balises se déclenchent après le consentement ; dans Tag Manager, réglez chaque balise non Google sur « Require additional consent » (exiger un consentement supplémentaire) avec le type correspondant : `ad_storage`, `analytics_storage` ou `functionality_storage`.

## WordPress : installer une extension de consentement

WordPress n’a pas de bandeau cookies intégré. Ce n’est pas la plateforme que je recommande aux dirigeants qui mettent leur site à jour eux-mêmes, mais sur ce point elle est bien servie : des extensions font l’essentiel du travail. Voici trois extensions courantes et ce que leur page WordPress.org annonce pour la version gratuite au 19 octobre 2026 :

| Extension | Version gratuite | À vérifier avant de choisir |
|---|---|---|
| Complianz | Bandeau, scan des cookies, blocage des scripts, Consent Mode v2 | Ce qu’ajoute la version premium |
| CookieYes | Bandeau, blocage automatique, scanner, journal des consentements, Consent Mode v2 | Les limites de l’offre gratuite, sur sa page de tarifs |
| Cookiebot by Usercentrics | Scan et blocage automatiques, Consent Mode v2 | Offre gratuite : un domaine, 50 sous-pages au plus |

La mise en place suit le même schéma, quelle que soit l’extension :

1. Supprimez toute ancienne extension d’avertissement cookies, pour ne garder qu’un bandeau.
2. Dans **Extensions** > **Ajouter une extension**, cherchez l’extension, installez-la et activez-la.
3. Suivez son assistant de configuration jusqu’au bout (certaines se connectent à un compte en ligne) : choisissez les régions que vous servez, lancez le scan et vérifiez la catégorie de chaque cookie.
4. Activez son option Consent Mode v2 de Google.
5. Vérifiez qu’un bouton de refus figure à côté du bouton d’acceptation sur le premier écran.
6. Ajoutez à votre pied de page le moyen de modifier son choix : un lien de menu, un shortcode ou un bouton flottant, selon l’extension.
7. Comparez le scan avec votre liste de départ : un script de votre thème ou d’une autre extension que le scan a manqué s’exécutera avant le consentement tant que vous ne l’aurez pas déclaré.

{{< screenshot id="cookie-banner-setup-05" alt="Assistant de configuration d’une extension de consentement dans WordPress, à l’étape qui active le Consent Mode v2 de Google" >}}

## Consent Mode v2 de Google : ce qu’il transmet et comment l’activer

Le Consent Mode transmet la réponse du visiteur aux balises Google. La version 2, lancée en novembre 2023, utilise quatre signaux : `ad_storage` et `analytics_storage` autorisent ou non les cookies publicitaires et de mesure, `ad_user_data` l’envoi de données à Google pour la publicité, et `ad_personalization` leur usage pour des annonces personnalisées. La politique de Google relative au consentement des utilisateurs de l’UE couvre les visiteurs de l’EEE, du Royaume-Uni et de la Suisse, et un compte qui n’envoie pas les signaux v2 peut perdre le remarketing, la personnalisation des annonces et une partie de la mesure des conversions.

Chaque signal part sur « denied » (refusé) et ne passe à « granted » (accordé) que si le visiteur accepte. Une CMP s’en charge dès que son option Google est activée : sur Squarespace, les balises Google ajoutées par code en demandent une ; sur Wix, selon Usercentrics, aucun réglage de plus n’est nécessaire si le Consent Mode est déjà activé dans votre configuration Tag Manager ; sur WordPress, c’est l’option de l’extension. Si vous l’écrivez vous-même, la valeur par défaut doit s’exécuter avant la balise Google, comme le montre [le guide du Consent Mode de Google](https://developers.google.com/tag-platform/security/guides/consent?hl=fr) :

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied'
  });
</script>
<!-- la balise Google (gtag.js ou Tag Manager) vient ensuite -->
```

Quand le visiteur accepte, le bandeau envoie la mise à jour :

```js
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted',
  'analytics_storage': 'granted'
});
```

Charger la balise Google tout de suite avec ces valeurs par défaut correspond au mode avancé : tant que le consentement est refusé, la balise envoie des pings sans cookies. En mode basique, la CMP retient la balise jusqu’à l’acceptation, et rien ne part chez Google avant : c’est l’option prudente en France.

Microsoft Clarity, que j’utilise pour voir où les visiteurs s’attardent et ce qui les fait partir, a son propre signal. Depuis le 31 octobre 2025, il ne dépose aucun cookie sans ce signal pour les visiteurs de l’EEE, du Royaume-Uni et de la Suisse. Mon {{< a key="microsoft-clarity-tutorial" >}}tutoriel Microsoft Clarity{{< /a >}} montre comment le relier à votre bandeau.

## Tester votre bandeau cookies dans une fenêtre privée

Un bandeau peut sembler parfait et laisser passer des traceurs. En septembre 2025, la CNIL a infligé 150 millions d’euros d’amende à SHEIN, notamment pour des cookies, publicitaires compris, déposés dès l’arrivée sur le site, avant tout choix ([décision présentée par la CNIL](https://www.cnil.fr/fr/cookies-deposes-sans-consentement-la-cnil-sanctionne-shein-dune-amende-de-150-millions-deuros)). La vérification prend quelques minutes :

1. Ouvrez une fenêtre privée, pour qu’aucun choix antérieur ne soit mémorisé, et allez sur votre site. Ne touchez pas encore au bandeau.
2. Ouvrez les outils de développement (F12, ou Cmd+Option+I sur Mac). Dans Chrome ou Edge, allez dans **Application** > **Stockage** > **Cookies** ; dans Firefox, dans l’onglet **Stockage**. Sélectionnez votre domaine.
3. Avant tout choix, vous ne devez voir que des cookies strictement nécessaires. Cherchez `_ga` et `_ga_…` (Google Analytics), `_gcl_au` (Google Ads), `_fbp` (pixel Meta), `_clck` et `_clsk` (Clarity) : aucun ne doit apparaître.
4. Cliquez sur **Tout refuser**, rechargez la page et vérifiez de nouveau : la liste ne doit pas s’allonger. Si votre bandeau a une croix de fermeture, fermer doit valoir refus, comme dans l’exemple de bandeau de la CNIL.
5. Dans l’onglet **Réseau**, filtrez sur `collect`. Après un refus en mode basique, aucune requête ne doit partir vers Google Analytics ou Clarity ; en mode avancé, des requêtes Google sans cookies sont normales.
6. Ouvrez une nouvelle fenêtre privée, cliquez sur **Tout accepter** et vérifiez que les cookies apparaissent. Sinon, le bandeau bloque trop et vos statistiques resteront vides.
7. Utilisez le lien du pied de page pour changer d’avis, refusez, et vérifiez que les balises s’arrêtent.

{{< screenshot id="cookie-banner-setup-06" alt="Outils de développement de Chrome, onglet Application, liste des cookies du site après Tout refuser, sans cookie Google Analytics ni publicitaire" >}}

Côté Google, Tag Assistant affiche l’état du consentement envoyé avec chaque événement. Refaites aussi le test au format téléphone.

## Dernières vérifications, et quand passer la main

- Un seul bandeau, avec refuser et accepter côte à côte sur le premier écran.
- Aucun traceur non essentiel avant un choix, vérifié dans les outils de développement.
- Un lien ou un bouton en pied de page pour modifier son choix.
- Le Consent Mode v2 et le signal de Clarity activés.
- Une rubrique cookies dans votre politique de confidentialité qui correspond au scan : mon guide sur {{< a key="privacy-policy-guide" >}}ce que doit contenir une politique de confidentialité{{< /a >}} la détaille.
- Un nouveau test après chaque nouvel outil.

Au 19 octobre 2026, le Digital Omnibus de l’UE, qui pourrait modifier certaines règles sur les cookies, n’est encore qu’une proposition : installez votre bandeau selon les règles actuelles.

Sur un site Squarespace ou Wix qui n’utilise que des statistiques intégrées, vous n’avez pas besoin de moi : ces étapes sont à la portée de toute personne qui met son site à jour elle-même. Un avocat ou un DPO vaut la dépense si votre activité dépend des données publicitaires, si vous traitez des données sensibles comme des informations de santé, ou si la CNIL vous a écrit. Et si vous préférez confier le bandeau, la page de confidentialité et les tests, ils font partie des {{< a page="/services/websites" >}}sites que je conçois{{< /a >}}.
