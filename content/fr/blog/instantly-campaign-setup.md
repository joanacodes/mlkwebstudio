---
title: "Créer une campagne Instantly : séquence, planning et options d’envoi"
seo_title: "Campagne Instantly : séquence, planning et options d’envoi"
description: "Créer une campagne Instantly pas à pas : importer une liste vérifiée, écrire trois emails en texte brut, régler le planning, puis les options d’envoi."
slug: "creer-campagne-instantly"
translationKey: "instantly-campaign-setup"
date: 2026-10-17T08:37:00+02:00
lastmod: 2026-10-17T08:37:00+02:00
category: "cold-emailing"
article_type: "tutorial"
keywords: ["campagne Instantly", "créer une campagne Instantly", "séquence Instantly", "options de campagne Instantly", "test A/Z Instantly", "planning d’envoi Instantly"]
summary: "Pour créer une campagne Instantly, ajoutez-la dans Campaigns, importez une liste vérifiée en CSV dans l’onglet Leads et écrivez la séquence dans Sequences : un premier email de trois lignes et deux relances, en texte brut, avec un numéro de téléphone et sans lien. Réglez ensuite horaires et fuseau horaire dans Schedule, puis, dans Options, activez Stop sending emails on reply, coupez le suivi, envoyez en texte seul et plafonnez à environ 30 emails par jour et par boîte."
cover: "instantly-campaign-setup"
cover_alt: "Un téléphone affichant une boîte de réception, trois enveloppes empilées et les mots Instantly, 3 emails"
related: ["instantly-ai-tutorial", "cold-email-follow-up", "cold-email-examples", "plain-text-cold-emails", "email-list-verification-reoon"]
services: ["cold-emailing"]
faq:
  - q: "Pourquoi ma campagne Instantly envoie-t-elle moins d’emails que prévu ?"
    a: "Le centre d’aide d’Instantly cite trois causes habituelles : la montée progressive (slow ramp) augmente encore le volume quotidien de chaque boîte, la campagne compte trop peu de boîtes pour sa limite quotidienne (la limite propre à chaque boîte l’emporte toujours), ou il reste trop peu de nouveaux contacts pour démarrer la séquence. Vérifiez-les dans cet ordre."
  - q: "Combien d’envois faut-il avant de désigner le gagnant d’un test A/Z ?"
    a: "Plus qu’on ne le croit. La règle de MLK Leadhunters : tester une seule chose à la fois et donner à chaque variante au moins deux ou trois cents envois. En dessous, un écart de quelques points relève surtout du hasard : laissez tourner les deux versions."
  - q: "Combien de temps après le lancement arrivent les premières réponses ?"
    a: "Dans mes campagnes, le premier résultat arrive en général dans les 36 heures qui suivent le lancement. Les réponses augmentent ensuite au fil des semaines, à mesure que les tests A/Z montrent quel texte fonctionne, et avec un numéro de téléphone dans l’email, une partie arrive par appel plutôt que par écrit."
  - q: "Peut-on envoyer une campagne Instantly à des professionnels sans leur consentement ?"
    a: "En France, oui, si le message concerne leur activité professionnelle et s’ils ont été informés de l’utilisation de leur adresse, avec la possibilité de s’y opposer simplement et gratuitement. Chaque email doit identifier l’expéditeur et offrir un moyen simple de ne plus rien recevoir, et les oppositions vont sur une liste repoussoir. Le détail est sur [la fiche de la CNIL](https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel)."
---

Une campagne Instantly, c’est l’endroit où vos cold emails sont réellement écrits, programmés et envoyés. Elle réunit quatre éléments : une liste de contacts, une séquence d’emails, un planning d’envoi et des options. Ce tuto pour créer une campagne Instantly les reprend dans l’ordre où l’outil les présente, avec les réglages que j’utilise et leurs raisons.

Il commence là où s’arrête la configuration du compte. Si vos boîtes d’envoi ne sont pas encore connectées et chauffées, commencez par mon {{< a key="instantly-ai-tutorial" >}}tuto Instantly{{< /a >}}. Pour l’ensemble de la démarche, de l’offre aux réponses, voyez mon {{< a key="b2b-cold-emailing-guide" >}}guide du cold emailing B2B{{< /a >}}.

Instantly est l’outil avec lequel j’ai commencé, et je n’ai trouvé aucune raison d’en changer : il est simple une fois la bonne recette trouvée, et ses réglages font beaucoup pour garder vos emails hors des spams. Ma recette tient en une ligne : trois emails en texte brut au maximum, un numéro de téléphone dans chacun, aucun lien. Je garde les intitulés anglais de l’interface, tels qu’ils apparaissent en octobre 2026 ; si l’un d’eux a bougé, l’article d’aide d’Instantly sur [les options de campagne](https://help.instantly.ai/en/articles/6222396-campaign-options) (en anglais) donne le libellé actuel.

## Avant de créer votre campagne Instantly : ce qu’il faut avoir

Quatre éléments doivent être prêts avant le premier clic :

1. Des boîtes d’envoi sur des domaines secondaires, connectées à Instantly, avec deux à trois semaines de warm-up derrière elles.
2. Une cible, et une offre qui tient en une phrase. Dans les {{< a page="/projects/pilotech-teknopoint" >}}campagnes Pilotech Teknopoint{{< /a >}}, par exemple, l’offre était une visite technique gratuite et un devis ferme.
3. Une liste vérifiée de cette cible, enregistrée en fichier CSV. Je passe chaque liste dans Reoon avant qu’elle approche Instantly ; la méthode est détaillée dans {{< a key="email-list-verification-reoon" >}}vérifier une liste d’emails{{< /a >}}.
4. Un numéro de téléphone auquel quelqu’un répond pendant les heures d’envoi. Dans mes campagnes, l’appel à l’action, c’est le téléphone.

## Étape 1 : créer la campagne

Dans le menu de gauche, ouvrez **Campaigns**, cliquez sur **Add New** et donnez un nom à la campagne. Faites-lui dire qui elle cible et ce qu’elle propose, par exemple « Architectes – visite gratuite – octobre 2026 » : dans quelques mois, vous aurez plusieurs campagnes, et c’est par leur nom que vous distinguerez leurs résultats.

Créez une campagne par cible. Les campagnes de Pilotech visaient trois publics : les restaurants parisiens, les bureaux et commerces parisiens, et les architectes, la cible principale. Chaque public a droit à ses propres mots, et des campagnes séparées gardent leurs résultats bien distincts.

La nouvelle campagne s’ouvre sur une rangée d’onglets. Les étapes suivantes les prennent dans l’ordre : **Leads**, **Sequences**, **Schedule** et **Options**.

{{< screenshot id="instantly-campaign-setup-01" alt="La page Campaigns d’Instantly avec le bouton Add New, et une nouvelle campagne nommée d’après sa cible et son offre" >}}

## Étape 2 : importer votre liste vérifiée

Ouvrez l’onglet **Leads** et ajoutez des contacts depuis un fichier CSV. Préparez d’abord le fichier :

- la première ligne contient les noms des colonnes, de moins de 20 caractères chacun et sans caractères spéciaux (par prudence, évitez aussi les accents) ;
- une colonne contient l’adresse email, la seule qu’Instantly exige ;
- chaque contact a un prénom et un nom d’entreprise, puisque les emails utiliseront les deux ;
- les cellules ne contiennent ni espace caché ni retour à la ligne, qui peuvent faire échouer l’import.

Instantly détecte les colonnes et propose un champ pour chacune. Associez le prénom et l’entreprise aux champs **First Name** et **Company Name**, envoyez toute autre colonne que vous voulez citer dans un email (la ville, par exemple) vers une variable personnalisée, et réglez les autres sur **Do Not Import**.

Laissez **Check for duplicates** coché, comme le recommande Instantly : l’outil écarte alors toute personne déjà présente dans une autre de vos campagnes ou listes, et personne ne reçoit deux séquences à la fois. Les adresses et les domaines de votre blocklist sont écartés eux aussi. Instantly propose également de vérifier les contacts pendant l’import, pour 0,25 crédit par contact. Je ne m’en sers pas, puisque mes listes sont déjà passées par Reoon. [Le guide d’import CSV d’Instantly](https://help.instantly.ai/en/articles/6254215-how-to-import-leads-via-csv) (en anglais) donne le détail.

{{< screenshot id="instantly-campaign-setup-02" alt="Import CSV dans Instantly : colonnes associées à First Name, Company Name et Do Not Import, avec Check for duplicates coché" >}}

## Étape 3 : écrire un premier email de trois lignes avec votre numéro

Ouvrez l’onglet **Sequences**. L’étape 1 (Step 1) est le premier email : un objet et un corps de message.

Le corps tient en trois lignes au maximum : qui vous êtes, ce que vous proposez, et une invitation à appeler. Oubliez les longs textes : les gens détestent recevoir de longs emails de quelqu’un à qui ils n’ont rien demandé. Court et direct, ça marche.

**L’appel à l’action, c’est le téléphone.** Je mets le numéro dans l’email et j’invite à appeler et à consulter le catalogue sur le site, sans aucun lien. Dans les campagnes de Pilotech, beaucoup de prospects, surtout les architectes, ont appelé au lieu de répondre ; {{< a key="architects-cold-email-case-study" >}}l’étude de cas sur les architectes{{< /a >}} explique pourquoi.

Voici la forme du premier email :

```text
Objet : [deux à quatre mots simples]

Bonjour {{firstName}},

[Ligne 1 : qui vous êtes, ce que fait votre entreprise et où.]
[Ligne 2 : l’offre pour {{companyName}}, en une phrase.]
[Ligne 3 : l’invitation à appeler, avec le numéro, et à voir le catalogue sur votre site.]

[Prénom et nom, entreprise, numéro de téléphone]
[Une ligne de désinscription, par exemple : si vous préférez ne plus recevoir mes emails, répondez simplement « non ».]
```

Les variables `{{firstName}}` et `{{companyName}}` prennent leurs valeurs dans les colonnes associées à l’étape 2. Gardez un objet court et simple, comme celui d’un email interne.

Écrivez tout en texte brut : ni lien, ni image, ni logo, ni mise en forme. J’évite les liens et le HTML pour protéger la délivrabilité, et un email en texte brut se lit comme ce qu’il est, un message d’une personne à une autre ; j’en détaille les raisons dans {{< a key="plain-text-cold-emails" >}}pourquoi mes emails n’ont ni lien ni HTML{{< /a >}}. La ligne de désinscription compte aussi : en France comme au Royaume-Uni, chaque email doit nommer son expéditeur et offrir un moyen simple de refuser les envois suivants, et une réponse suffit, sans lien. Pour des premiers emails complets construits sur ce modèle, voyez mes {{< a key="cold-email-examples" >}}exemples d’emails de prospection{{< /a >}}.

{{< callout type="tip" >}}**Relisez-le sur un téléphone.** Si le premier email oblige à faire défiler l’écran d’un téléphone, il est trop long.{{< /callout >}}

{{< screenshot id="instantly-campaign-setup-03" alt="L’étape 1 d’une séquence Instantly : un email de trois lignes en texte brut avec la variable du prénom et un numéro de téléphone" >}}

## Étape 4 : ajouter deux relances, puis s’arrêter

Cliquez sur **Add step** pour ajouter le deuxième email, puis une seconde fois pour le troisième. Chaque relance attend un certain nombre de jours après l’email précédent, à régler sur l’étape. Le guide de MLK Leadhunters pour [écrire un cold email](https://mlkleadhunters.com/fr/blog/how-to-write-a-cold-email/) envoie la première relance trois ou quatre jours après le premier email, et la seconde environ une semaine plus tard.

Gardez dans les deux relances l’objet de l’étape 1. D’après [le guide des tests A/Z d’Instantly](https://help.instantly.ai/en/articles/6661549-a-z-testing) (en anglais), c’est ce qui garde les relances dans le même fil : le prospect les voit dans la même conversation que votre premier email.

Chaque relance est aussi courte que le premier email : une nouvelle raison d’appeler, et le numéro à nouveau. Ne sautez pas la troisième. Dans mes campagnes, elle apporte encore des réponses positives, de gens simplement débordés ou qui ont oublié de répondre aux deux premiers. C’est aussi là que je m’arrête ; mon article sur la {{< a key="cold-email-follow-up" >}}relance d’un email de prospection{{< /a >}} explique pourquoi trois emails suffisent.

{{< screenshot id="instantly-campaign-setup-04" alt="Une séquence Instantly en trois étapes, les deux relances programmées quelques jours plus tard et gardant l’objet de l’étape 1" >}}

## Étape 5 : ajouter des variantes A/Z pour apprendre ce qui marche

Le test A/Z, c’est le nom qu’Instantly donne à ses tests A/B. Sur l’étape 1, cliquez sur **Add variant** et écrivez une deuxième version de l’email ; chaque contact reçoit ensuite l’une des versions.

Changez une seule chose à la fois, en commençant par ce que le lecteur voit en premier : l’objet ou la première ligne. C’est en testant qu’une campagne s’améliore avec le temps. Dans les miennes, les réponses augmentent en général au fil des semaines, parce que j’apprends quel texte a marché et lequel n’a pas marché. L’article de MLK Leadhunters sur [les tests A/B qui comptent](https://mlkleadhunters.com/fr/blog/ab-tests-that-matter/) liste les tests utiles et ceux à laisser de côté.

Instantly peut aussi désigner le gagnant à votre place. Dans l’onglet **Options**, sous **Advanced Options**, activez l’optimisation automatique des tests A/Z et choisissez l’indicateur qui tranche : Instantly désactive alors les variantes les plus faibles. Choisissez le taux de réponse (reply rate) : avec le suivi coupé (étape 7), il n’y a ni ouvertures ni clics à comparer. Les chiffres de chaque variante se trouvent dans l’onglet **Analytics** de la campagne, sous **Step Analytics**.

Avant de couronner un gagnant, comptez aussi les appels : Instantly voit les réponses écrites, pas le téléphone qui sonne.

{{< screenshot id="instantly-campaign-setup-05" alt="L’étape 1 d’une séquence Instantly avec deux variantes qui ne diffèrent que par leur première ligne" >}}

## Étape 6 : régler le planning et le fuseau horaire

Ouvrez l’onglet **Schedule**. Réglez la plage d’envoi avec **From** et **To**, choisissez le fuseau horaire (**Timezone**), cochez les jours d’envoi et cliquez sur **Save**.

Prenez le fuseau horaire de vos prospects, pas le vôtre : Paris pour une liste française, Londres pour une liste britannique, pour que 9 h corresponde à 9 h là où les emails arrivent. Limitez l’envoi aux jours ouvrés et aux heures de bureau, puisqu’un prospect B2B lit ses emails au travail. Les tests de MLK Leadhunters montrent que l’heure d’envoi fait une différence réelle mais faible : ne passez pas trop de temps sur l’horaire exact, et testez-le en dernier.

Un réglage ressemble à celui-ci sans être le même : le fuseau horaire dans lequel Instantly remet à zéro les limites quotidiennes se trouve dans **Settings**, puis **Preferences**, et il est distinct du planning de la campagne.

{{< screenshot id="instantly-campaign-setup-06" alt="L’onglet Schedule d’une campagne Instantly avec la plage d’envoi, le fuseau horaire des prospects et les jours ouvrés cochés" >}}

## Étape 7 : choisir les options d’envoi

L’onglet **Options** réunit les réglages qui gardent une campagne hors des spams, et ils sont pour beaucoup dans mon choix d’Instantly. Voici ceux qui comptent pour une campagne en texte brut :

| Réglage | Choix | Pourquoi |
|---|---|---|
| Les boîtes d’envoi | Uniquement des boîtes chauffées, sur des domaines secondaires | Le risque reste loin de votre domaine principal |
| **Stop sending emails on reply** | Activé | Personne ne reçoit de relance après avoir répondu ; Instantly le recommande aussi |
| **Open Tracking** et **Link Tracking** | Désactivés | Un email en texte brut sans lien n’a rien à suivre |
| **Send emails as text-only (no HTML)** | Activé | Chaque étape part en texte brut |
| Limite quotidienne | Environ 30 emails par boîte | La recommandation d’Instantly |

Le suivi mérite une phrase de plus. Le suivi des ouvertures repose sur une image invisible, et une image suppose du HTML, ce qui annule l’intérêt d’un email en texte brut. S’y ajoute la loi : dans sa recommandation publiée en avril 2026, la CNIL estime que le pixel de suivi d’un email de prospection suppose le consentement du destinataire.

Pour la limite quotidienne, l’aide d’Instantly conseille environ 30 emails de campagne par jour et par boîte, et de calculer la limite de la campagne en multipliant le nombre de boîtes par 30 : trois boîtes, 90 emails par jour. La limite propre à chaque boîte l’emporte toujours sur celle de la campagne. N’oubliez pas que les relances puisent dans ce même budget : une fois qu’elles tournent, une journée peut compter jusqu’à trois fois plus d’emails que de nouveaux contacts.

Si vous écrivez à plusieurs personnes d’une même entreprise, utilisez aussi l’arrêt au niveau de l’entreprise : dès que l’une d’elles répond, les autres ne reçoivent plus la séquence. Les réponses automatiques d’absence ne le déclenchent pas.

Reste la montée progressive (slow ramp). C’est un réglage de chaque boîte d’envoi plutôt que de la campagne. Quand il est activé, chaque boîte démarre à 2 emails de campagne par jour et en ajoute 2 chaque jour jusqu’à sa limite : une boîte plafonnée à 30 l’atteint vers le 15e jour ([le guide d’Instantly sur le slow ramp](https://help.instantly.ai/en/articles/10056946-campaign-slow-ramp-system), en anglais). Gardez-le pour les boîtes neuves ; sur des boîtes qui envoient depuis un moment, vous pouvez le couper pour atteindre plus vite le plein volume.

{{< callout type="warning" >}}**Pour plus de volume, ajoutez des boîtes, pas des emails par boîte.** Les guides d’Instantly recommandent eux aussi d’augmenter le nombre de boîtes et de domaines plutôt que le volume quotidien de chaque boîte.{{< /callout >}}

{{< screenshot id="instantly-campaign-setup-07" alt="L’onglet Options d’une campagne Instantly : Stop sending emails on reply activé, suivi des ouvertures et des clics désactivé, envoi en texte seul activé et limite quotidienne réglée" >}}

## Étape 8 : tester la séquence sur vous-même, puis lancer

Avant qu’un prospect reçoive quoi que ce soit, envoyez-vous la séquence. Le plus simple : une petite campagne de test, avec les mêmes étapes et les mêmes options, dont les seuls contacts sont vos propres adresses, idéalement une chez Gmail et une chez Outlook. À l’arrivée du premier email, vérifiez que :

1. il arrive dans la boîte de réception, pas dans les spams ;
2. les variables sont remplies : votre prénom, et non `{{firstName}}` ;
3. l’email est en texte brut, sans lien, sans image et sans logo ;
4. le numéro de téléphone y figure, et c’est le bon ;
5. la signature n’apparaît qu’une fois ;
6. votre réponse arrive dans l’**Unibox** et arrête la séquence pour votre adresse.

Quand tout est bon, supprimez la campagne de test et lancez la vraie.

{{< screenshot id="instantly-campaign-setup-08" alt="L’email de test tel qu’il arrive dans Gmail : texte brut, prénom rempli et numéro de téléphone visible" >}}

## Après le lancement de votre campagne Instantly : les deux premières semaines

Une fois la campagne lancée, quelques habitudes la gardent en bonne santé :

1. Surveillez les rebonds (bounces) les premiers jours. Si beaucoup d’adresses rebondissent, mettez la campagne en pause et vérifiez de nouveau la liste : les rebonds usent la réputation des boîtes qui envoient.
2. Confiez les réponses à la personne qui vend. Je fais tout dans une campagne sauf les réponses : elles reviennent au client, qui y répond. Le guide de MLK Leadhunters, [que faire des réponses](https://mlkleadhunters.com/fr/blog/what-to-do-with-replies/), couvre la première heure après la réponse d’un prospect.
3. Retirez de la campagne toute personne qui appelle. Instantly ne sait rien des appels : un prospect qui a appelé reste dans la séquence tant que personne ne l’en sort.
4. Ajoutez chaque désinscription à la blocklist d’Instantly le jour même, y compris celles reçues par téléphone, pour qu’aucun import futur ne ramène l’adresse.
5. Lisez les résultats des tests A/Z quand chaque variante a eu assez d’envois, gardez la meilleure version, puis testez la chose suivante.
6. Restez à trois emails, même quand une campagne est calme.

Si vous préférez tout confier, c’est ce que fait mon activité de cold emailing, [MLK Leadhunters](https://mlkleadhunters.com/fr/), pour ses clients : je trouve les contacts, j’écris et j’envoie les emails, je mène les tests, et les réponses comme les appels restent chez vous.
