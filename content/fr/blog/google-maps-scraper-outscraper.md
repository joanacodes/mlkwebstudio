---
title: "Scraper Google Maps : extraire des contacts B2B avec Outscraper"
seo_title: "Scraper Google Maps : le tuto Outscraper pour prospecter"
description: "Scraper Google Maps avec Outscraper, pas à pas : catégories et villes, emails des sites, filtres, export, puis vérification du fichier avant de prospecter."
slug: "scraper-google-maps-outscraper"
translationKey: "google-maps-scraper-outscraper"
date: 2026-10-17T08:44:00+02:00
lastmod: 2026-10-17T08:44:00+02:00
category: "cold-emailing"
article_type: "tutorial"
keywords: ["scraper Google Maps", "tuto Outscraper", "extraire des emails de Google Maps", "extraire les données de Google Maps", "fichier de prospection B2B", "prix Outscraper"]
summary: "Un scraper Google Maps comme Outscraper transforme une recherche telle que « expert-comptable à Lyon » en tableau d’entreprises avec catégorie, adresse, téléphone et site, plus les emails publiés sur ces sites. En octobre 2026, les 500 premières entreprises sont gratuites tous les 30 jours, puis environ 2,70 € (3 $) les 1 000, enrichissement des emails en plus. Il ne trouve que les entreprises présentes sur Google, et chaque email doit être vérifié avant une campagne."
cover: "google-maps-scraper-outscraper"
cover_alt: "Une main qui coche les lignes d’un tableau imprimé à côté d’épingles de carte sur une grille, avec le mot Outscraper"
related: ["email-list-verification-reoon", "cold-email-gdpr-uk-france", "cold-email-infrastructure", "instantly-campaign-setup", "small-business-tools-guide"]
services: ["cold-emailing"]
faq:
  - q: "Est-il légal de scraper Google Maps ?"
    a: "Deux séries de règles s’appliquent. Les conditions d’utilisation de Google Maps interdisent de télécharger ses contenus en masse ou d’en extraire des flux de données, ce que fait précisément un scraper. Le droit des données personnelles encadre ensuite l’usage des contacts : en B2B, la CNIL admet l’email sans consentement préalable si le message concerne le métier du destinataire et qu’il peut s’y opposer. Ceci est une information générale, pas un conseil juridique ; [les conditions de Google Maps](https://www.google.com/help/terms_maps?hl=fr) se lisent en quelques minutes."
  - q: "Peut-on prospecter l’adresse contact@ d’une entreprise ?"
    a: "Oui. Pour la CNIL, les adresses génériques comme contact@ ou info@ sont les coordonnées de l’entreprise, pas d’une personne : elles échappent aux règles de consentement et d’information. Chaque email doit quand même indiquer qui l’envoie et offrir un moyen simple de ne plus en recevoir."
  - q: "Faut-il utiliser le validateur d’emails d’Outscraper ou un outil à part ?"
    a: "C’est à vous de voir. Outscraper vend la validation des emails comme un enrichissement supplémentaire, facturé à la ligne, ce qui évite une étape. J’utilise Reoon tous les jours. Je l’ai acheté grâce à un deal sur AppSumo : d’après mes chiffres de l’époque, environ 70 €, payés une fois, pour 100 000 vérifications plus 500 par jour, ce qui suffit largement à une petite entreprise."
  - q: "Combien de temps peut-on garder un fichier de prospection ?"
    a: "La CNIL retient trois ans à compter de la collecte ou du dernier contact émanant du prospect, comme une réponse ou un appel ; vos relances ne remettent pas le compteur à zéro. Au bout de ces trois ans, sans réponse positive et explicite de sa part, les données sont supprimées ou archivées."
---

Un scraper Google Maps récupère les fiches d’entreprises que Google Maps affiche pour une recherche, par exemple les experts-comptables de Lyon, et les transforme en tableau : nom, catégorie, adresse, téléphone, site web, note. Ajoutez un enrichissement qui lit le site de chaque entreprise, et vous obtenez aussi les adresses email qui y sont publiées. Ce tableau est la matière première d’une campagne de cold emailing B2B.

L’outil que j’utilise s’appelle Outscraper. Avec ma façon de m’en servir, un contact me revient à environ 0,003 €, et à environ 0,006 € une fois la liste vérifiée, quand il ne reste que des contacts actifs et qualifiés. Sa principale limite : il ne trouve que les entreprises présentes sur Google.

Ce tuto va de la recherche au fichier vérifié, étape par étape. Je garde les intitulés anglais de l’interface d’Outscraper, tels qu’ils apparaissent à la date de rédaction (octobre 2026). Pour cette partie, vous n’avez pas besoin d’une agence. La suite, de la liste à la campagne, se trouve dans mon {{< a key="b2b-cold-emailing-guide" >}}guide du cold emailing B2B{{< /a >}}.

## Ce qu’un scraper Google Maps extrait avec Outscraper

Le scraper Google Maps d’Outscraper renvoie une ligne par fiche, avec les informations que l’entreprise, ou Google, y a renseignées. Voici les champs utiles pour un fichier de prospection, avec leur nom anglais dans le fichier entre parenthèses :

| Champ | Ce qu’il contient | À quoi il sert |
|---|---|---|
| Nom (name) | Le nom de l’entreprise sur sa fiche | Personnaliser la première ligne, repérer les doublons |
| Catégories (type, subtypes) | La catégorie principale et les autres | Ne garder que le métier visé |
| Adresse (city, postal code…) | Où se trouve l’entreprise | Rester dans la zone que vous couvrez |
| Téléphone (phone) | Le numéro de la fiche | Un second canal |
| Site (site) | Le site web, s’il existe | C’est là que les emails sont trouvés |
| Note (rating) | La note moyenne des avis | Utile pour certaines offres, comme la gestion des avis |
| Statut (business status) | En activité ou fermée | Retirer les entreprises fermées |
| Fiche vérifiée (verified) | Si l’entreprise a validé sa fiche | Signe que quelqu’un s’en occupe |

Les emails viennent de l’enrichissement **Emails & Contacts**, qui ajoute les adresses email, les coordonnées et les liens vers les réseaux sociaux trouvés sur le site de chaque entreprise. Ils viennent du site, pas de Google : une entreprise sans site, ou sans adresse affichée sur son site, ressort sans email.

Autre limite : un scraper Google Maps connaît l’entreprise, pas la personne. Vous obtenez les adresses publiées sur le site, génériques (contact@, info@) ou nominatives, et rien ne vous dit qui prend les décisions.

## Combien coûte Outscraper, et combien me coûte un contact

Outscraper se paie à l’usage et facture en dollars américains : les montants en euros ci-dessous suivent le taux de change. En octobre 2026, le scraper Google Maps est facturé ainsi :

- Les 500 premières entreprises sont gratuites, et ce quota se renouvelle tous les 30 jours.
- Ensuite, environ 2,70 € (3 $) les 1 000 entreprises, jusqu’à 100 000.
- Au-delà de 100 000, environ 0,90 € (1 $) les 1 000.
- Les enrichissements comme Emails & Contacts s’ajoutent, à la ligne. Outscraper affiche le prix de chacun au moment de le sélectionner : vérifiez-le avant un gros volume, car le prix du scraping seul n’est pas votre facture.

Consultez la [page des tarifs d’Outscraper](https://outscraper.com/pricing/) avant de prévoir un budget : les prix et les quotas gratuits changent.

Mes propres chiffres, avec ma façon de l’utiliser : environ 0,003 € par contact, soit environ 3 € les 1 000 entreprises, et environ 0,006 € par contact actif et qualifié une fois la liste vérifiée, soit environ 6 € les 1 000. Le coût par contact utilisable est plus élevé parce que vous avez aussi payé les lignes qui ne passent pas le nettoyage et la vérification. Votre chiffre dépendra de vos volumes, des enrichissements choisis et du nombre de lignes que vos filtres retirent.

Dans les deux cas, on reste sous le centime par contact. Les vrais coûts d’une campagne sont ailleurs : les domaines, les boîtes mail et l’outil d’envoi décrits dans mon article sur {{< a key="cold-email-infrastructure" >}}l’infrastructure de cold emailing{{< /a >}}.

## Avant de commencer : une cible, et les règles sur les données d’entreprises

Une bonne liste commence par une cible étroite : un métier, une zone, une raison d’acheter. Une cible comme « les cabinets d’expertise comptable de la métropole de Lyon, pour une offre d’infogérance » vous donne une recherche qu’Outscraper sait lancer et un email qui tient en trois lignes. Avec « les TPE d’Auvergne-Rhône-Alpes », vous n’avez ni l’un ni l’autre. Quand je mène une campagne pour un client, c’est lui qui me dit quels clients il veut, et je pars les chercher.

Vérifiez ensuite à qui vous pouvez écrire. Une fiche Google est publique, mais cela ne règle pas la question de ce que vous pouvez faire des contacts qu’elle contient :

- **En France**, la CNIL admet la prospection B2B par email sans consentement préalable si le message concerne le métier du destinataire, à condition qu’il en ait été informé et puisse s’y opposer simplement et gratuitement. Chaque email doit aussi indiquer qui l’envoie et offrir un moyen simple de ne plus en recevoir. La fiche de la CNIL sur [la prospection commerciale par courrier électronique](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel) détaille ces règles.
- **Au Royaume-Uni**, c’est la forme juridique qui compte : les sociétés (limited companies et LLP) peuvent recevoir un cold email sans consentement, mais pas les entrepreneurs individuels (sole traders) ni les partnerships hors d’Écosse. Si vous prospectez aussi outre-Manche, triez votre fichier en conséquence.

Dans les deux pays, une adresse nominative est une donnée personnelle, et le RGPD (ou l’UK GDPR outre-Manche) s’applique : une base légale documentée, en général l’intérêt légitime, et l’information de la personne au plus tard dans le premier email, source des données comprise. Ajoutez une colonne « source » à chaque fichier, par exemple « fiche Google Maps et site web, extraction du 17 octobre 2026 », et cette partie du premier email est déjà prête. Mon article {{< a key="cold-email-gdpr-uk-france" >}}cold emailing et RGPD{{< /a >}} couvre le reste.

{{< callout type="note" >}}Ceci est une information générale, pas un conseil juridique. Pour une grosse campagne ou un secteur réglementé, lisez les fiches de la CNIL en entier ou demandez l’avis d’un avocat.{{< /callout >}}

## Étape 1 : créer un compte et ouvrir le scraper Google Maps

Créez un compte sur outscraper.com. Une fois la connexion faite, Outscraper affiche la liste de ses services : ouvrez le **Google Maps Data Scraper**. Le quota gratuit suffit pour un premier test : commencez petit, et ne payez qu’une fois les résultats jugés bons.

Les trois étapes suivantes remplissent les réglages du scraper : la recherche, l’enrichissement, puis la limite et les filtres.

{{< screenshot id="google-maps-scraper-outscraper-01" alt="La liste des services d’Outscraper, avec le Google Maps Data Scraper sélectionné" >}}

## Étape 2 : choisir les catégories, les zones et la langue

**Catégories.** Outscraper propose une liste toute prête de plus de 5 000 catégories Google Maps. Choisissez celles de votre cible, puis activez **Exact Match** : Google a tendance à ajouter des catégories voisines à une recherche, et Exact Match les écarte.

**Zones.** Choisissez la zone dans la liste de lieux d’Outscraper. Si elle n’y figure pas, passez par **Custom Locations**. Google Maps n’affiche qu’environ 400 à 500 établissements par recherche, selon Outscraper : pour une grande zone, il conseille donc de sélectionner des codes postaux ou d’en importer une liste. La tâche lance alors une recherche par code postal et passe ce plafond.

**Langue.** Dans **Advanced Parameters**, réglez la langue sur celle de vos catégories. Attention pour une recherche en français : Exact Match ne fonctionne qu’avec la langue anglaise. Deux options, donc : rester en anglais (catégorie Accountant, langue English) pour garder Exact Match, ou chercher en français (Expert-comptable) et trier les catégories vous-même à l’étape 4.

{{< callout type="tip" >}}Une recherche par segment, une liste par segment. Mélanger plusieurs métiers dans un fichier, c’est mélanger les messages dans une campagne, et un email de trois lignes ne peut pas parler à tout le monde.{{< /callout >}}

{{< screenshot id="google-maps-scraper-outscraper-02" alt="Le Google Maps Data Scraper d’Outscraper avec la catégorie Accountant, Exact Match activé et Lyon comme zone" >}}

## Étape 3 : ajouter l’enrichissement Emails & Contacts

Sans enrichissement, vous obtenez les données des fiches : noms, téléphones et sites, mais aucun email. Dans les enrichissements, ajoutez **Emails & Contacts**. Pour chaque entreprise qui a un site, il en extrait les adresses email, les coordonnées et les liens vers les réseaux sociaux.

Il s’accompagne de deux options ; vérifiez qu’elles sont bien activées :

- **Ignore without emails** ne garde que les entreprises pour lesquelles un email a été trouvé. En cold emailing, une ligne sans email ne sert à rien, et Outscraper indique que les lignes écartées ne sont pas facturées.
- **Drop email duplicates** supprime les entreprises qui partagent la même adresse, comme un cabinet qui a plusieurs fiches d’agence et une seule boîte de contact.

Outscraper propose aussi la validation des emails comme enrichissement à part (**Emails Validator** dans ses guides récents, **Validate emails** dans les plus anciens). Vous pouvez l’ajouter ici, ou vérifier le fichier ensuite avec votre propre outil, comme à l’étape 6.

{{< screenshot id="google-maps-scraper-outscraper-03" alt="Les enrichissements d’Outscraper avec Emails & Contacts ajouté et les options Ignore without emails et Drop email duplicates activées" >}}

## Étape 4 : fixer une limite et filtrer les résultats

**Limite.** La limite plafonne le nombre d’entreprises du fichier : à 100, la tâche s’arrête à 100 établissements, quelle que soit la taille de la zone ; à 0, elle va jusqu’au bout. Ne la confondez pas avec le paramètre avancé qui plafonne chaque recherche, et non la tâche entière (Places Per One Query Search dans le guide d’Outscraper). Pour un premier essai, gardez une petite limite et regardez les données avant de payer des milliers de lignes.

**Filtres.** Les filtres ne gardent que les lignes qui remplissent vos conditions sur les champs du résultat, comme type, subtypes, city, postal code, site, phone, rating, business status et verified, avec des opérateurs comme « contains one of », « equals » et « is blank ». Trois sont utiles pour prospecter :

1. **Business status equals operational**, pour retirer les entreprises fermées, définitivement ou temporairement.
2. **Subtypes contains one of** vos catégories, si vous cherchez en français et ne pouvez donc pas utiliser Exact Match.
3. **City contains one of** les communes que vous couvrez, pour que le fichier reste dans votre zone.

Les filtres marchent aussi dans l’autre sens. Si vous vendez des sites web, une recherche à part, sans l’enrichissement Emails & Contacts et filtrée sur **site is blank**, liste les entreprises qui n’en ont pas ; sans site, pas d’email à trouver : cette liste se prête au téléphone ou au courrier plutôt qu’au cold emailing.

{{< screenshot id="google-maps-scraper-outscraper-04" alt="Les réglages d’Outscraper avec une limite de 100 et un filtre qui ne garde que les entreprises en activité (operational)" >}}

## Étape 5 : lancer la tâche et télécharger le fichier

Lancez la tâche, puis téléchargez le fichier de résultats une fois qu’elle est terminée. Il est disponible en CSV, XLSX, JSON ou Parquet : CSV et XLSX s’ouvrent dans un tableur, les deux autres sont destinés aux développeurs.

Avant toute chose, lisez vingt lignes à la main. Vérifiez que les entreprises correspondent à votre cible, que les emails ressemblent à de vraies adresses de ces entreprises, et que rien ne cloche de façon évidente, comme toute une chaîne regroupée sous une seule adresse. Quelques minutes ici peuvent éviter une campagne envoyée aux mauvaises personnes.

{{< screenshot id="google-maps-scraper-outscraper-05" alt="Un fichier de résultats Outscraper ouvert dans un tableur, avec les colonnes nom, catégorie, téléphone, site et email" >}}

## Étape 6 : nettoyer la liste et vérifier chaque email

Un export brut n’est pas encore une liste de campagne. Procédez dans cet ordre :

1. **Une ligne par entreprise, une adresse par ligne.** Quand plusieurs emails ont été trouvés, gardez celui qui a le plus de chances d’atteindre la bonne personne : une adresse nominative qui correspond au poste visé, ou l’adresse de contact principale d’une petite structure.
2. **Retirez ceux à qui vous ne pouvez pas écrire.** Si vous prospectez au Royaume-Uni, retirez les sole traders, les partnerships hors d’Écosse et tous ceux que vous ne savez pas classer. Partout, retirez les personnes inscrites sur votre liste repoussoir, celles qui vous ont déjà demandé d’arrêter.
3. **Ajoutez les colonnes source et date** si le fichier ne les a pas encore. Elles servent à l’information de la personne dans votre premier email.
4. **Vérifiez chaque adresse.** Je vérifie mes listes avec Reoon, l’outil de vérification que j’utilise tous les jours, et je retire les adresses déclarées invalides. Mon tuto pour {{< a key="email-list-verification-reoon" >}}vérifier une liste d’emails{{< /a >}} explique quoi faire de chaque résultat, y compris les adresses risquées et catch-all.

Ce qui reste après la vérification, c’est ce que j’appelle un contact actif et qualifié : le chiffre de 0,006 € plus haut. Importez ensuite le fichier dans votre outil d’envoi ; dans Instantly, cela se fait au moment de {{< a key="instantly-campaign-setup" >}}créer la campagne{{< /a >}}.

{{< callout type="warning" >}}**N’importez jamais une liste non vérifiée dans votre outil d’envoi.** Certaines adresses publiées sur les sites ne fonctionnent plus, et chaque rebond pèse sur la réputation du domaine d’envoi.{{< /callout >}}

{{< screenshot id="google-maps-scraper-outscraper-06" alt="Résultats de la vérification en masse dans Reoon pour la liste Outscraper nettoyée, avec le nombre d’adresses valides et invalides" >}}

## Quand Google Maps n’est pas la bonne source

Outscraper ne trouve que ce que Google Maps référence. Cela convient aux entreprises qui ont une fiche Google, celles que les clients viennent voir ou appellent : artisans, cabinets, salons de coiffure, garages, agences. Il passe à côté de toutes les entreprises sans fiche, et il ne donne pas le nom du décideur dans une entreprise plus grande, où la personne que vous cherchez se cache derrière une adresse générique ou au siège.

Soyez donc lucide sur votre cible avant de payer une recherche. Si vos acheteurs ne sont pas sur Google Maps, un scraper vous rendra un fichier bien rangé, mais rempli des mauvaises entreprises, et il vous faudra une autre source. MLK Leadhunters présente les autres sources, avec la segmentation et la liste d’exclusion, dans [Construire une liste de cold email](https://mlkleadhunters.com/fr/blog/building-a-cold-email-list/).

## Du fichier à la première campagne : la checklist

Avant d’importer la liste dans une campagne, vérifiez que :

1. Le fichier couvre un seul segment, avec une seule offre en tête.
2. Les entreprises fermées et les doublons sont retirés, ainsi que les sole traders et les partnerships hors d’Écosse si vous écrivez au Royaume-Uni.
3. Chaque ligne a sa source et sa date d’extraction.
4. Chaque adresse a été vérifiée, et seules les valides restent.
5. Votre liste repoussoir a été appliquée.
6. Vos boîtes d’envoi sont sur des domaines secondaires, et chauffées.
7. Vos emails sont prêts : trois au maximum, en texte brut, sans lien, avec votre numéro de téléphone, comme dans mon {{< a key="cold-email-examples" >}}exemple d’email de prospection{{< /a >}}.

Dans mes campagnes, le premier résultat arrive en général dans les 36 heures qui suivent le lancement. Outscraper est l’un des outils de ma prospection, avec Instantly et Reoon ; mon guide des {{< a key="small-business-tools-guide" >}}outils numériques pour TPE{{< /a >}} présente les autres et ce que chacun coûte.

Si vous préférez ne pas construire les listes ni mener les campagnes vous-même, c’est ce que fait pour ses clients mon activité de cold emailing, [MLK Leadhunters](https://mlkleadhunters.com/fr/) : tout, sauf les réponses, qui restent chez vous.
