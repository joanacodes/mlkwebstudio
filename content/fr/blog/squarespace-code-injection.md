---
title: "Injection de code Squarespace : ajouter du code sans casser son site"
seo_title: "Injection de code Squarespace : ajouter du code pas à pas"
description: "Injection de code Squarespace pas à pas : où trouver le panneau, quoi mettre dans l’en-tête, le pied de page ou une page, quel forfait, et comment annuler."
slug: "injection-code-squarespace"
translationKey: "squarespace-code-injection"
date: 2026-10-17T08:22:00+02:00
lastmod: 2026-10-17T08:22:00+02:00
category: "websites"
article_type: "tutorial"
keywords: ["injection de code Squarespace", "code personnalisé Squarespace", "ajouter du code sur Squarespace", "bloc Code Squarespace", "CSS personnalisé Squarespace", "en-tête Squarespace"]
summary: "L’injection de code Squarespace permet de coller du HTML et des scripts dans l’en-tête ou le pied de page de tout le site, ou dans l’en-tête d’une seule page ; en version 7.1, elle se trouve sous Custom Code, en bas du panneau Pages. Il faut le forfait Essentiel (Core), Plus, Advanced ou certains anciens forfaits, pas Basic. Collez uniquement du code fiable, étiquetez chaque ajout, testez-le sur le site en ligne et utilisez le mode sans échec si un script bloque l’éditeur."
cover: "squarespace-code-injection"
cover_alt: "Fenêtre de terminal avec le libellé Squarespace </> et des lignes de code"
related: ["squarespace-tutorial", "microsoft-clarity-tutorial", "schema-markup-small-business", "youcanbookme-tutorial", "squarespace-vs-wordpress"]
services: ["websites"]
faq:
  - q: "L’injection de code ralentit-elle un site Squarespace ?"
    a: "Elle peut. Chaque script ajoute du travail au navigateur du visiteur : une ou deux balises d’outils connus changent rarement quelque chose de visible, mais une accumulation de widgets, si. Passez vos pages principales dans PageSpeed Insights avant et après l’ajout, puis comparez."
  - q: "Le support Squarespace peut-il réparer mon code personnalisé ?"
    a: "Non. Le centre d’aide de Squarespace précise que son assistance ne couvre pas les modifications par code. Pour la balise ou le widget d’un outil, adressez-vous au support de cet outil ; pour du code écrit pour vous, à la personne qui l’a écrit."
  - q: "Où se trouve l’injection de code sur Squarespace 7.0 ?"
    a: "Dans le panneau Pages, comme en 7.1 : sous Custom Code (code personnalisé), après la section Not linked, ou sous Website Tools (outils du site) si votre panneau affiche encore l’ancienne présentation. Les champs d’en-tête, de pied de page et d’en-tête de page jouent le même rôle qu’en version 7.1."
  - q: "Faut-il l’injection de code pour valider son site dans Google Search Console ?"
    a: "Non. Le guide de Squarespace fait ajouter l’enregistrement TXT de Google dans les paramètres DNS du domaine, et la méthode du fichier HTML n’est pas prise en charge. La validation ne fonctionne pas sur un site en période d’essai : publiez d’abord avec un forfait payant."
---

L’injection de code Squarespace est le réglage qui permet de coller du code là où l’éditeur de pages ne va pas : dans la section `<head>` de toutes les pages, tout en bas de chaque page, ou dans l’en-tête d’une seule page. C’est par là que passent une balise de suivi comme Microsoft Clarity, des données structurées pour les moteurs de recherche ou le script que vous fournit un outil de chat.

J’ajoute en général un peu de code aux sites Squarespace que je crée pour mes clients. Rien de destructeur : ils modifient eux-mêmes leurs pages, et ils m’appellent pour cette partie-là. C’est ce que couvre ce tutoriel, du choix de l’emplacement de chaque code jusqu’au test et à la marche arrière quand un ajout casse quelque chose.

Il vous faut le forfait Essentiel (Core en anglais) ou un forfait supérieur. Je cite les menus de l’interface anglaise d’un site en version 7.1, tels que les décrit le centre d’aide de Squarespace en octobre 2026, avec leur traduction entre parenthèses ; Squarespace les déplace de temps en temps. Si votre site n’est pas encore construit, commencez par mon {{< a key="squarespace-tutorial" >}}tuto Squarespace{{< /a >}} ; pour la vue d’ensemble, voyez mon guide pour {{< a key="small-business-website-guide" >}}créer un site internet professionnel{{< /a >}}.

## Injection de code Squarespace : ce que c’est et où placer le code

L’injection de code est un ensemble de champs où vous collez du HTML ou des scripts que Squarespace ajoute ensuite à vos pages. C’est l’une des trois façons d’ajouter du code à un site Squarespace, et choisir la bonne fait la moitié du travail :

| Où | Ce qui est concerné | Usage courant |
|---|---|---|
| Code Injection, **Header** (en-tête) | La section `<head>` de toutes les pages | Balises d’analyse et de cartes de chaleur, balises de validation |
| Code Injection, **Footer** (pied de page) | Toutes les pages, juste avant la balise de fermeture `</body>` | Widgets de chat, scripts qu’un outil demande de charger en dernier |
| Code Injection, **Lock Page** (page verrouillée) et champs de commande | Votre page protégée par mot de passe (au-dessus du champ du mot de passe) et, pour une boutique en ligne, les pages de confirmation et de suivi de commande | Message sur la page protégée, suivi des conversions après un achat |
| **Page Header Code Injection** (en-tête d’une page) | La section `<head>` d’une seule page | Données structurées de cette page, script dont une seule page a besoin |
| **Code Block** (bloc Code) | Un emplacement précis dans une page | Calendrier de réservation, formulaire intégré, carte |
| **Custom CSS** (CSS personnalisé) | Les styles de tout le site | Retouches visuelles que les styles du site ne permettent pas |

L’injection de code sert surtout au code qui travaille en coulisses. Pour afficher quelque chose de visible à un endroit précis d’une page, utilisez un bloc Code.

## Quels forfaits Squarespace incluent l’injection de code

Squarespace présente l’injection de code comme une fonctionnalité premium. Elle est incluse dans les forfaits Essentiel, Plus et Advanced, ainsi que dans certains anciens forfaits, mais pas dans Basic, d’après [le guide de Squarespace sur l’injection de code](https://support.squarespace.com/hc/fr-fr/articles/205815908). Basic a une seconde limite : les blocs Code n’y exécutent ni scripts ni iframes, ce qui exclut la plupart des widgets intégrés.

À la date de rédaction (octobre 2026), les guides tarifaires français publiés en 2026 affichent Essentiel à 18 € par mois en facturation annuelle, contre 12 € pour Basic. Squarespace a relevé ses prix américains en juillet 2026 ; aucune hausse en euros n’était signalée en octobre 2026, mais vérifiez la [grille officielle](https://www.squarespace.com/pricing) avant de changer de forfait.

Si vous préférez rester sur Basic, demandez-vous d’abord s’il vous faut vraiment du code : un bouton qui renvoie vers votre page de réservation fonctionne avec tous les forfaits, et un bloc Code affiche toujours du HTML et du CSS simples sur Basic.

## Avant de coller quoi que ce soit : quatre vérifications

Un script collé dans les champs Header ou Footer s’exécute sur toutes les pages, pour chaque visiteur, avec les mêmes droits que le code de Squarespace : il peut modifier ce que les gens voient et lire ce qu’ils tapent dans vos formulaires. Faites d’abord quatre vérifications :

1. **La source est-elle officielle ?** Copiez le code depuis le tableau de bord ou la documentation de l’outil lui-même, jamais depuis un message de forum dont vous ne comprenez pas le code. Si un outil vous donne du JavaScript nu, entourez-le vous-même de balises `<script>` : les champs attendent du HTML ou des scripts valides.
2. **Est-il déjà installé ?** Une balise ajoutée deux fois, une fois à la main et une fois par une intégration, peut compter chaque visite en double.
3. **Faut-il un consentement ?** Les balises qui déposent des cookies ou enregistrent les visites peuvent exiger l’accord préalable du visiteur. Microsoft Clarity, par exemple, exige un signal de consentement pour les visiteurs de l’EEE, du Royaume-Uni et de la Suisse depuis le 31 octobre 2025.
4. **Où allez-vous le noter ?** Tenez un document unique qui liste chaque ajout : ce qu’il fait, où il se trouve, qui l’a ajouté et quand. Grâce à lui, « quelque chose a cassé » se répare vite, et c’est ce que vous transmettrez si quelqu’un d’autre reprend le site.

{{< callout type="warning" >}}Ne collez jamais un code qu’on vous envoie pour « réparer » votre site sans savoir ce qu’il fait. Le code injecté n’apparaît pas dans l’éditeur de pages : c’est l’endroit idéal pour cacher un script qui redirige vos visiteurs ou copie ce qu’ils saisissent.{{< /callout >}}

## Étape 1 : ouvrir le panneau Code Injection

1. Dans le menu principal, cliquez sur **Website** (site web) pour ouvrir le panneau **Pages**.
2. Descendez tout en bas, sous vos pages et la section **Not linked** (non liées), puis cliquez sur **Custom Code** (code personnalisé).
3. Cliquez sur **Code Injection** (injection de code). Le panneau affiche un champ par zone : **Header**, **Footer**, **Lock Page** et, si vous vendez en ligne, les champs des pages de commande.

Un guide plus ancien vous enverra peut-être vers Website Tools ou vers Settings > Advanced : Squarespace a déplacé ce panneau plusieurs fois, mais les champs qu’il contient jouent le même rôle.

{{< screenshot id="squarespace-code-injection-01" alt="Panneau Pages de Squarespace affiché jusqu’en bas, avec la section Custom Code et son option Code Injection" >}}

## Étape 2 : ajouter une balise de suivi sur toutes les pages (Microsoft Clarity)

Microsoft Clarity, un outil gratuit de cartes de chaleur et d’enregistrement de sessions, fait un bon premier ajout : une balise dans l’en-tête, rien de visible sur la page. Je l’utilise pour voir où les visiteurs s’attardent, s’ils viennent pour quelque chose de précis et quelles zones les font fuir, afin de savoir s’il faut reprendre le texte, une image ou la mise en page. Mon {{< a key="microsoft-clarity-tutorial" >}}tutoriel Microsoft Clarity{{< /a >}} couvre le compte et les rapports.

1. Dans Clarity, copiez le code de votre projet avec **Get tracking code**.
2. Dans le champ **Header**, tapez un commentaire de début, collez le code en dessous tel quel, puis ajoutez un commentaire de fin :

```html
<!-- DÉBUT Microsoft Clarity | ajouté le 17/10/2026 | cartes de chaleur et enregistrements -->
(le code copié depuis Clarity, sans rien changer : il contient déjà ses balises <script>)
<!-- FIN Microsoft Clarity -->
```

3. Cliquez sur **Save** (enregistrer). À partir de là, la balise s’exécute sur toutes les pages de votre site publié.
4. Reliez-la à votre bandeau cookies, pour que le choix de chaque visiteur parvienne à Clarity. Le tutoriel Clarity montre comment.

{{< callout type="tip" >}}**Étiquetez chaque ajout avec des commentaires DÉBUT et FIN**, la date et son rôle. Les commentaires HTML ne s’affichent pas sur la page, et six mois plus tard ils vous disent exactement quoi supprimer.{{< /callout >}}

{{< screenshot id="squarespace-code-injection-02" alt="Panneau Code Injection de Squarespace avec le code Microsoft Clarity entre des commentaires DÉBUT et FIN dans le champ Header" >}}

### En-tête ou pied de page ?

Suivez les consignes de l’outil : « dans le head » veut dire **Header**, « avant la fermeture du body » veut dire **Footer**. Sans consigne, les balises d’analyse et de validation vont dans l’en-tête, où elles se chargent avant le contenu, et les widgets qui peuvent attendre, comme un bouton de chat, dans le pied de page, où ils ne retardent pas l’affichage du contenu.

## Étape 3 : ajouter du code sur une seule page (données structurées)

Certains codes ne concernent qu’une page : des données structurées qui décrivent votre entreprise sur la page contact, par exemple, ou une balise de conversion sur une page de remerciement.

1. Dans le panneau **Pages**, survolez la page et cliquez sur son icône en forme d’engrenage.
2. Ouvrez l’onglet **Advanced** (avancé).
3. Collez votre code dans **Page Header Code Injection**, puis enregistrez.

Squarespace déconseille d’y mettre du HTML, qui peut disparaître si vous désactivez la transparence de l’en-tête. Réservez ce champ aux scripts, et c’est justement ce que sont des données structurées : un bloc JSON-LD dans une balise `<script>`. Voici un exemple minimal pour une entreprise locale, à adapter avec vos informations :

```html
<!-- DÉBUT données structurées : LocalBusiness | ajouté le 17/10/2026 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nom de votre entreprise",
  "url": "https://www.example.com",
  "telephone": "+33 4 XX XX XX XX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1 rue de la République",
    "addressLocality": "Lyon",
    "postalCode": "69002",
    "addressCountry": "FR"
  }
}
</script>
<!-- FIN données structurées -->
```

Passez la page dans le [test des résultats enrichis](https://search.google.com/test/rich-results?hl=fr) de Google avant l’ajout, pour voir ce qu’elle contient déjà, puis après, pour vérifier qu’il n’y a pas d’erreur. Les informations doivent correspondre à ce que la page affiche : même nom, même adresse, même numéro. Les types qui valent encore la peine en 2026 sont dans mon guide des {{< a key="schema-markup-small-business" >}}données structurées{{< /a >}}.

{{< screenshot id="squarespace-code-injection-03" alt="Paramètres de page Squarespace, onglet Advanced, avec des données structurées collées dans le champ Page Header Code Injection" >}}

## Étape 4 : intégrer un widget dans une page (YouCanBookMe)

Quand le code doit afficher quelque chose à un endroit précis, comme un calendrier de réservation sur votre page contact, utilisez un bloc Code plutôt que l’injection de code. Pour la prise de rendez-vous, je préfère YouCanBookMe à Calendly : il a les fonctions dont j’ai besoin, on s’y retrouve facilement et il coûte un peu moins cher, même si Calendly reste un bon outil.

1. Dans YouCanBookMe, copiez le code d’intégration depuis les options de partage de votre page de réservation ; mon tutoriel sur la {{< a key="youcanbookme-tutorial" >}}prise de rendez-vous en ligne avec YouCanBookMe{{< /a >}} montre où.
2. Ouvrez la page dans l’éditeur Squarespace et ajoutez un bloc **Code** à l’endroit où le calendrier doit apparaître.
3. Collez le code d’intégration dans le bloc, puis enregistrez et quittez l’éditeur.
4. Ouvrez la page en ligne sur un ordinateur et sur un téléphone, et faites une réservation de test.

{{< screenshot id="squarespace-code-injection-04" alt="Éditeur de page Squarespace avec un bloc Code contenant l’intégration d’un calendrier YouCanBookMe sur une page contact" >}}

## Étape 5 : mettre le CSS dans le panneau Custom CSS

Le CSS change l’apparence : espacements, tailles, une couleur que les styles du site ne proposent pas. Squarespace recommande pour cela son éditeur Custom CSS plutôt que l’injection de code. Vérifiez d’abord **Site Styles** (styles du site, icône en forme de pinceau) : les polices, couleurs et boutons s’y règlent sans code, et n’importe qui pourra les changer plus tard.

1. Dans le panneau **Pages**, cliquez sur **Custom Code**, puis sur **Custom CSS**.
2. Écrivez chaque règle avec un commentaire au-dessus :

```css
/* DÉBUT liens soulignés dans le texte | ajouté le 17/10/2026 */
p a {
  text-decoration: underline;
}
/* FIN liens soulignés */
```

3. Enregistrez, puis vérifiez plusieurs pages : une règle écrite pour un bloc peut modifier toutes les pages.

Gardez ce panneau court. Une règle de Custom CSS peut écraser les réglages de Site Styles : chaque règle ajoutée rend ce panneau un peu moins fiable pour la personne qui modifiera le site après vous.

{{< screenshot id="squarespace-code-injection-05" alt="Éditeur Custom CSS de Squarespace avec une courte règle entre des commentaires DÉBUT et FIN" >}}

## Étape 6 : tester sur le site en ligne

Testez là où sont vos visiteurs, pas dans l’éditeur :

1. Ouvrez le site dans une fenêtre de navigation privée, sans session ouverte, pour voir ce que voit un visiteur.
2. Vérifiez chaque page modifiée sur un ordinateur et sur un téléphone.
3. Ouvrez les outils de développement du navigateur (F12 sous Windows, Cmd+Option+I sur Mac). L’onglet **Console** liste les erreurs de script en rouge ; l’onglet **Network** (réseau) montre si une balise envoie des données (tapez `collect` dans le filtre pour Clarity).
4. Vérifiez côté outil : une visite dans Clarity, une réservation de test dans YouCanBookMe, un résultat sans erreur dans le test des résultats enrichis.
5. Ajoutez le code à votre document de suivi, avec la date.

Ne changez qu’une chose à la fois : vous saurez toujours quel ajout a causé quoi.

{{< screenshot id="squarespace-code-injection-06" alt="Page Squarespace en ligne dans une fenêtre privée, avec les outils de développement du navigateur ouverts sur l’onglet Console" >}}

## Si votre code casse le site : le mode sans échec

Un code défaillant se repère en général de trois façons : une partie de page disparaît, la mise en page saute, ou l’éditeur ne fonctionne plus correctement. Les pages d’aide de Squarespace expliquent que du code personnalisé peut vous empêcher de modifier votre site en toute sécurité, et que le désactiver pendant l’édition ne change rien pour les visiteurs ([résoudre les problèmes de modification du site](https://support.squarespace.com/hc/fr-fr/articles/228363808)). C’est ce que fait le mode sans échec (safe mode) :

1. Connectez-vous, puis remplacez dans la barre d’adresse `votresite.fr/config` par `votresite.fr/config/safe`. Le code personnalisé et les scripts sont alors désactivés dans l’éditeur.
2. Ouvrez le dernier champ modifié et supprimez l’ajout, c’est-à-dire tout ce qui se trouve entre ses commentaires DÉBUT et FIN. Cliquez sur **Save**.
3. Quittez le mode sans échec en réactivant les scripts dans l’aperçu, ou en rouvrant `votresite.fr/config` sans `/safe`.
4. Testez de nouveau le site en ligne dans une fenêtre privée.

{{< callout type="warning" >}}Le mode sans échec ne change que ce que vous voyez pendant l’édition. **Vos visiteurs reçoivent le code défaillant tant que vous ne l’avez pas supprimé et enregistré.**{{< /callout >}}

{{< screenshot id="squarespace-code-injection-07" alt="Éditeur Squarespace ouvert par l’adresse /config/safe, avec les scripts personnalisés désactivés" >}}

## Combien de code personnalisé, c’est trop ?

Le grand avantage de Squarespace, c’est que vous, ou votre client, pouvez changer un mot sans que toute la structure s’effondre. C’est pour cela que j’y fais passer les dirigeants qui modifient eux-mêmes leur site. Chargez-le de code personnalisé et vous perdez cet avantage : plus il y a de code, plus une modification ordinaire risque de casser quelque chose que vous ne voyez pas, et plus vite un simple changement demande un développeur.

Il est utile de ranger le code en deux familles :

- **Les ajouts qui se placent à côté du contenu** : une balise de suivi, des données structurées, un widget de réservation, une petite retouche de style. C’est le code « rien de destructeur » : il ne gêne pas les modifications que vous faites vous-même.
- **Ce qui refait ce que Squarespace fait déjà** : un menu réécrit en JavaScript, chaque bloc restylé en CSS. Un site qui en a besoin en quantité n’est pas sur la bonne plateforme, et ma comparaison {{< a key="squarespace-vs-wordpress" >}}Squarespace ou WordPress{{< /a >}} passe en revue les autres options.

C’est aussi vrai pour un site que vous créez pour un ami ou un proche. Un site n’est pas un cadeau ponctuel, puisqu’il demande de la maintenance, mais un site Squarespace sans code personnalisé lourd est le plus simple à modifier sans aide.

Le code personnalisé n’est pas non plus nécessaire pour être bien classé. Squarespace est fermé, sans accès au code source, et c’est pourquoi un site codé sur mesure, sous WordPress ou sous Webflow peut se classer plus haut. Pourtant, le site Squarespace que j’ai créé pour Pilotech se classe premier ou deuxième sur Google (mon {{< a key="pilotech-seo-case-study" >}}étude de cas SEO{{< /a >}} raconte comment) : avec un SEO bien fait, des métadonnées soignées et les bons mots-clés, vous mettez toutes les chances de votre côté. Mon tutoriel de {{< a key="squarespace-seo" >}}référencement Squarespace{{< /a >}} détaille ces réglages.

## Votre checklist, et quand passer la main

Avant de considérer un ajout comme terminé, vérifiez chaque ligne :

- **Forfait** : Essentiel, Plus ou Advanced.
- **Source** : code copié depuis le tableau de bord ou la documentation de l’outil.
- **Emplacement** : Header pour les balises de tout le site, Footer pour les scripts qui peuvent attendre, Page Header Code Injection pour une seule page, un bloc Code pour tout ce qui est visible, Custom CSS pour les styles.
- **Étiquettes** : commentaires DÉBUT et FIN, avec la date et le rôle.
- **Consentement** : balises de suivi reliées à votre bandeau cookies.
- **Test** : fenêtre privée, téléphone, Console, Network et tableau de bord de l’outil.
- **Suivi** : un seul document qui liste tous les ajouts.
- **Ménage** : quand vous arrêtez un outil, retirez son code le jour même.

Copier une balise depuis le tableau de bord d’un outil, vous pouvez le faire vous-même, et je préfère que vous le fassiez. Écrire du code est un autre métier. Si ce que vous voulez demande du code écrit pour vous, si vous ne savez pas ce que fait un ajout, ou si le site apporte l’essentiel de vos demandes et qu’un après-midi de pages cassées vous coûterait cher, confiez-le à quelqu’un qui lit le code, et demandez-lui de laisser des commentaires DÉBUT et FIN. Sur les sites Squarespace que je crée, c’est exactement la partie pour laquelle mes clients m’appellent.
