---
title: "Vérifier une liste d’emails avant une campagne de prospection (avec Reoon)"
seo_title: "Vérifier une liste d’emails avec Reoon : tuto pas à pas"
description: "Vérifier une liste d’emails avant une campagne de prospection, pas à pas dans Reoon : import du fichier, lecture des statuts, adresses à garder ou à retirer."
slug: "verifier-liste-emails"
translationKey: "email-list-verification-reoon"
date: 2026-10-17T08:43:00+02:00
lastmod: 2026-10-17T08:43:00+02:00
category: "cold-emailing"
article_type: "tutorial"
keywords: ["vérifier une liste d’emails", "vérification d’adresse email", "nettoyer une liste d’emails", "Reoon", "adresse catch-all", "rebond email"]
summary: "Vérifier une liste d’emails, c’est tester chaque adresse avant la campagne, pour retirer les adresses mortes avant qu’elles ne rebondissent et n’abîment vos domaines d’envoi. Dans Reoon, importez le CSV sur la page Bulk Verification, revérifiez les « unknown » 15 à 30 minutes plus tard, puis téléchargez « Safe only », ou « Safe+Role » pour de petits commerces ; mettez les catch-all de côté et retirez le reste. Reoon est le seul achat AppSumo que j’utilise chaque jour."
cover: "email-list-verification-reoon"
cover_alt: "Une main qui coche les lignes d’une liste imprimée, à côté d’un bouclier coché et des mots Reoon 100k"
related: ["google-maps-scraper-outscraper", "instantly-campaign-setup", "cold-email-infrastructure", "appsumo-review", "cold-email-gdpr-uk-france"]
services: ["cold-emailing"]
faq:
  - q: "Une adresse vérifiée peut-elle quand même rebondir ?"
    a: "Oui. Une boîte peut fermer entre la vérification et l’envoi, et certains serveurs de messagerie ne répondent pas de la même façon d’un jour à l’autre. Reoon le dit lui-même dans [Why valid emails can still bounce](https://www.reoon.com/articles/why-valid-emails-can-still-bounce/) (en anglais). La vérification réduit le risque, et envoyer peu après le garde bas."
  - q: "À quelle fréquence faut-il vérifier sa liste d’emails ?"
    a: "Vérifiez chaque nouvelle liste avant son premier envoi, et revérifiez une ancienne liste avant de la réutiliser : les gens changent de poste, les entreprises ferment ou changent de domaine. Ne vérifiez que les adresses auxquelles vous allez écrire, puisque chaque contrôle consomme un crédit."
  - q: "Peut-on confier une liste de prospects à un vérificateur d’emails sans enfreindre le RGPD ?"
    a: "Oui, si la campagne elle-même repose sur une base légale. Une adresse professionnelle nominative est une donnée personnelle, et le vérificateur la traite pour votre compte, comme sous-traitant : lisez sa politique de confidentialité et ses conditions de sous-traitance avant le premier import, et ne lui envoyez que les colonnes utiles à la campagne."
  - q: "Quelle différence entre validation et vérification d’une adresse email ?"
    a: "Les deux mots s’emploient souvent l’un pour l’autre. Au sens strict, la validation contrôle que l’adresse est bien formée et que son domaine peut recevoir des emails, tandis que la vérification demande en plus au serveur de messagerie si la boîte existe. Pour une liste de prospection, c’est la vérification qu’il vous faut."
---

Vérifier une liste d’emails, c’est contrôler chaque adresse avant de lui écrire, pour retirer celles qui n’existent plus avant qu’elles ne rebondissent. Avant une campagne de cold emailing, c’est la protection la moins chère que vous puissiez offrir à vos domaines d’envoi. Quelques rebonds n’ont rien d’anormal ; une liste pleine d’adresses mortes montre à Gmail et à Outlook que vous écrivez au hasard.

Le vérificateur que j’utilise s’appelle Reoon. Je l’ai acheté grâce à un deal sur AppSumo, et de tout ce que j’y ai acheté, c’est le seul outil qui me sert chaque jour. Avant le premier envoi des campagnes de cold emailing que je mène pour {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, la liste d’architectes est passée par Reoon ; mon {{< a key="architects-cold-email-case-study" >}}étude de cas sur la prospection des architectes{{< /a >}} raconte la suite.

Ce tutoriel suit la vérification en masse de Reoon, du fichier que vous importez au fichier que vous chargez dans votre outil d’envoi, avec la conduite à tenir pour chaque résultat. C’est une étape de la méthode décrite dans mon {{< a key="b2b-cold-emailing-guide" >}}guide du cold emailing B2B{{< /a >}}, et vous n’avez pas besoin d’une agence pour la faire. L’interface de Reoon est en anglais : je reprends les libellés tels qu’ils figurent dans [le guide de Reoon](https://www.reoon.com/articles/verify-bulk-email-list-dashboard/) (en anglais) en octobre 2026 ; si l’un d’eux a changé depuis, cette page donne le libellé actuel.

## Vérifier une liste d’emails : ce que l’outil contrôle, et pourquoi les rebonds coûtent cher

Un vérificateur n’envoie jamais d’email. Il teste chaque adresse en plusieurs couches :

1. **Le format** : l’adresse est bien formée, sans faute de frappe comme une virgule à la place d’un point.
2. **Le domaine** : il existe et possède des serveurs de messagerie (enregistrements MX) qui reçoivent les emails.
3. **La boîte** : le vérificateur demande au serveur de réception s’il accepterait un message pour cette adresse, puis raccroche avant que quoi que ce soit ne parte.
4. **Les signaux de risque** : un service d’adresses jetables, une adresse générique comme contact@, un domaine qui accepte toutes les adresses, un piège à spam connu.

### Rebond définitif, rebond temporaire

Un rebond définitif (hard bounce) est un refus permanent : la boîte, ou le domaine entier, n’existe pas. Un rebond temporaire (soft bounce) vient par exemple d’une boîte pleine ou d’un serveur indisponible pendant une heure. La vérification élimine la plupart des rebonds définitifs à venir, ceux qui font le plus de dégâts.

### Pourquoi les rebonds abîment un domaine d’envoi

Gmail, Outlook et les autres messageries jugent chaque expéditeur sur son comportement. Un expéditeur qui écrit sans cesse à des adresses inexistantes ressemble à quelqu’un qui utilise une liste ancienne ou achetée, exactement comme un spammeur. La réputation de vos domaines et de vos boîtes d’envoi baisse, et vos emails suivants arrivent en spam, y compris ceux adressés à des adresses parfaitement valides.

Les pièges à spam sont pires. Ce sont des adresses gardées uniquement pour repérer les expéditeurs négligents, et en toucher peut valoir à un domaine ou à un serveur d’envoi une place sur une liste noire. C’est pour cela que le cold emailing part de domaines secondaires qui protègent votre domaine principal, comme l’explique mon guide de l’{{< a key="cold-email-infrastructure" >}}infrastructure de cold emailing{{< /a >}}, et qu’une liste se vérifie avant de les atteindre.

## Avant de commencer : un compte, des crédits et une liste

Il vous faut trois choses :

- **Un compte Reoon.** La création est gratuite ; les vérifications consomment des crédits.
- **Assez de crédits pour toute la liste.** Reoon compte des crédits quotidiens (daily) et des crédits immédiats (instant), et l’import échoue si la liste contient plus d’adresses que vos crédits restants.
- **La liste elle-même**, en fichier CSV (adresses et autres colonnes) ou TXT (adresses seules).

La provenance de la liste vous regarde. Si vos clients sont des entreprises locales, mon tutoriel pour {{< a key="google-maps-scraper-outscraper" >}}scraper Google Maps{{< /a >}} montre comment je les trouve avec Outscraper. D’après mes chiffres, cela revient à environ 0,003 € par contact, et à environ 0,006 € par contact actif et qualifié une fois la vérification passée. Outscraper ne trouve que les entreprises qui ont une fiche Google, en revanche : pour les autres, il vous faudra une autre source. MLK Leadhunters passe en revue les possibilités, ainsi que la liste d’exclusion dont vous aurez besoin à l’étape 6, dans [construire une liste de cold email](https://mlkleadhunters.com/fr/blog/building-a-cold-email-list/).

## Étape 1 : préparer le fichier CSV

Ouvrez la liste dans un tableur et mettez-la en forme avant l’import :

1. Une ligne par contact, sous une ligne d’en-têtes.
2. Gardez les colonnes dont vos emails auront besoin, comme le prénom, l’entreprise et la ville. Reoon vous rend vos colonnes d’origine avec les résultats : le fichier vérifié peut donc partir directement dans votre outil d’envoi.
3. Contrôlez la colonne des adresses. Reoon la repère tout seul quand il n’y en a qu’une. Si le fichier en contient plusieurs, seule la première est vérifiée par défaut : nommez `email` celle que vous voulez, et renommez les autres pour que leur en-tête ne contienne plus ce mot.
4. Enregistrez en CSV, en UTF-8 si votre tableur le propose, pour que les accents des noms survivent au voyage.

```
email,prenom,entreprise,ville
claire@example.com,Claire,Boulangerie Exemple,Lyon
marc@example.org,Marc,Cabinet Dentaire Exemple,Nantes
```

Excel en français sépare souvent les colonnes d’un CSV par des points-virgules : si la colonne des adresses n’est pas reconnue, c’est la première chose à regarder.

{{< screenshot id="email-list-verification-reoon-01" alt="Un tableur avec les colonnes email, prenom, entreprise et ville, prêt à être enregistré en CSV" >}}

## Étape 2 : importer la liste sur la page Bulk Verification

1. Connectez-vous à Reoon Email Verifier sur emailverifier.reoon.com et ouvrez la page **Bulk Verification**.
2. Importez votre fichier .csv ou .txt, ou collez les adresses. Un fichier peut peser jusqu’à 50 Mo.
3. Si vous le souhaitez, cochez l’option qui supprime les lignes en double. Elle ne retire que les lignes identiques sur toutes les colonnes : deux lignes avec la même adresse et un prénom différent restent toutes les deux, alors supprimez-les d’abord dans le tableur.
4. Lancez la vérification.

{{< callout type="warning" >}}**Vérifiez vos crédits avant l’import.** Si la liste contient plus d’adresses que vos crédits quotidiens et immédiats réunis, l’import échoue.{{< /callout >}}

D’après le support de Reoon, la vérification en masse fonctionne en Power Mode, le contrôle complet, analyse des catch-all comprise. Reoon propose aussi un Quick Mode, qui ne répond que valid, invalid, disposable ou spamtrap. Pour une liste de prospection, c’est le contrôle complet qu’il vous faut, et la page de vérification en masse vous le donne.

{{< screenshot id="email-list-verification-reoon-02" alt="La page Bulk Verification de Reoon avec la zone d’import du fichier, l’option pour coller des adresses et la case qui supprime les lignes en double" >}}

## Étape 3 : lire les résultats, statut par statut

Une fois la tâche terminée, chaque adresse porte un statut. [Le guide des statuts de Reoon](https://www.reoon.com/articles/meaning-of-different-email-verification-statuses/) (en anglais) les définit un par un ; voici ce qu’ils signifient pour une liste de prospection.

| Statut | Ce qu’il signifie | Avant une campagne de cold emailing |
|---|---|---|
| Safe | La boîte existe et accepte les emails | À garder |
| Role account | Une adresse générique, liée à une fonction, comme contact@ ou info@ | Selon votre cible (voir plus bas) |
| Catch-all | Le domaine accepte toutes les adresses, la boîte ne peut donc pas être confirmée | À mettre de côté (voir plus bas) |
| Unknown | Le serveur n’a pas donné de réponse claire | À revérifier (étape 4) |
| Inbox full | Une vraie boîte, qui ne peut plus recevoir de messages pour l’instant | À laisser hors de cette campagne |
| Invalid | L’adresse ne peut pas recevoir d’emails | À retirer |
| Disabled | L’adresse a existé, et le fournisseur l’a fermée | À retirer |
| Disposable | Une adresse temporaire, issue d’un service d’adresses jetables | À retirer |
| Spamtrap | Une adresse qui n’existe que pour piéger les expéditeurs négligents | À retirer |

{{< callout type="tip" >}}**Un piège à spam en dit long sur toute la liste.** Ces adresses se retrouvent dans des listes anciennes, achetées ou aspirées sans précaution : si Reoon en signale plusieurs, interrogez la source avant de faire confiance au reste de la liste.{{< /callout >}}

### Les adresses catch-all

Un domaine catch-all répond oui pour toutes les adresses, réelles ou non : aucun vérificateur ne peut donc savoir si une boîte précise y existe. Certains de ces emails arrivent ; d’autres rebondissent plus tard ou finissent dans une boîte que personne ne lit. Si votre liste d’adresses sûres suffit, laissez-les de côté. Si un segment compte pour vous et que beaucoup de ses domaines sont en catch-all, écrivez-leur dans une campagne séparée et plus petite, après l’envoi aux adresses sûres, et arrêtez au premier signe de rebonds.

### Les adresses génériques

Une adresse générique arrive à la personne qui gère la boîte partagée. Pour une boulangerie, un cabinet dentaire ou un artisan, contact@ est souvent la seule adresse publique, et c’est souvent le gérant qui la lit : dans ce cas, gardez-les. En France, la CNIL considère d’ailleurs ces adresses génériques comme des coordonnées de l’entreprise, et non d’une personne. Si vous visez un décideur précis dans une entreprise plus grande, retirez-les : la personne pour qui vous avez écrit l’email risque de ne jamais le voir.

{{< screenshot id="email-list-verification-reoon-03" alt="Une tâche de vérification en masse terminée dans Reoon, avec le nombre d’adresses pour chaque statut" >}}

## Étape 4 : revérifier les adresses inconnues

« Unknown » n’est pas un verdict : le serveur de réception n’a simplement pas donné de réponse claire au moment du contrôle. Reoon conseille de télécharger ce segment à part, d’attendre 15 à 30 minutes et de le vérifier de nouveau, et beaucoup d’adresses obtiennent une réponse claire au second passage. Reoon ne facture pas les résultats « unknown » : le premier essai ne vous a donc rien coûté.

Ce qui reste inconnu après le second passage rejoint les catch-all : de côté, hors de la liste principale.

{{< screenshot id="email-list-verification-reoon-04" alt="Les options de téléchargement d’une tâche Reoon terminée, utilisées pour exporter seulement les adresses unknown" >}}

## Étape 5 : télécharger les adresses à garder

Reoon propose quatre téléchargements, et chacun revient avec vos colonnes d’origine :

| Téléchargement | Contenu | Quand le choisir |
|---|---|---|
| Safe only | Les adresses sûres | Des décideurs nommés ; le fichier le plus propre pour un premier envoi |
| Safe+Role | Les adresses sûres et génériques | Des commerces et artisans dont l’adresse publique est contact@ ou info@ |
| Safe+Role+Catch-All | Les mêmes, plus les catch-all | Seulement si vous avez décidé d’écrire aux catch-all, idéalement dans une campagne à part |
| Others | Tout le reste | Votre liste d’exclusion, jamais une campagne |

Pour une première campagne, **« Safe only » ou « Safe+Role » est le choix raisonnable**. Vous pouvez aussi télécharger tous les résultats d’un coup, ou une seule catégorie.

{{< screenshot id="email-list-verification-reoon-05" alt="Les choix de téléchargement d’une tâche Reoon terminée : Safe only, Safe+Role, Safe+Role+Catch-All et Others" >}}

## Étape 6 : garder les rejets, puis supprimer le fichier

Deux dernières choses avant de quitter Reoon :

1. **Ajoutez les adresses rejetées à votre liste d’exclusion**, celle des adresses auxquelles vous n’écrivez jamais. Les résultats invalid, disabled, disposable et spamtrap y vont, à côté des personnes qui ont demandé à ne plus être contactées (la « liste repoussoir » dont parle la CNIL). Comparez chaque nouvelle liste avec elle avant la vérification, pour que les adresses mortes ne reviennent pas avec le prochain import et ne consomment pas de crédits une deuxième fois.
2. **Supprimez la tâche** une fois le fichier vérifié chargé dans votre outil d’envoi. Reoon efface de toute façon les fichiers importés et les résultats de ses serveurs au bout de 15 jours, et vous pouvez les supprimer plus tôt depuis la page **Results**. Les contacts nominatifs sont des données personnelles, et le RGPD vous demande de ne pas les garder plus longtemps que nécessaire : mon article sur le {{< a key="cold-email-gdpr-uk-france" >}}cold emailing et le RGPD{{< /a >}} détaille le reste des règles.

{{< screenshot id="email-list-verification-reoon-06" alt="La page Results de Reoon avec l’option pour supprimer une tâche de vérification terminée" >}}

## Combien coûte Reoon, et les alternatives

Reoon a un bon prix pour un vérificateur, et je l’ai eu grâce à un bon deal sur AppSumo. D’après mes chiffres de l’époque, le premier palier coûtait environ 70 €, payés une fois, pour 100 000 vérifications plus 500 par jour. **C’est largement suffisant pour une petite entreprise.** Les paliers supérieurs montaient jusqu’à 700 000 vérifications, et vous pouvez toujours racheter des crédits si besoin.

Les deals changent et se terminent : comparez l’offre AppSumo du moment avec [les tarifs de Reoon](https://www.reoon.com/email-verifier/) avant d’acheter. Lisez aussi mon {{< a key="appsumo-review" >}}avis sur AppSumo{{< /a >}} : le site fonctionne un peu comme un casino, et Reoon est chez moi l’exception, pas la règle. Un deal à vie s’arrête si l’éditeur ferme, mais un vérificateur se remplace facilement : un autre pourrait contrôler votre prochaine liste le jour même.

ZeroBounce et NeverBounce sont deux vérificateurs connus qui font le même travail. Je ne les note pas ici : comparez leurs prix avec la taille de vos listes et la fréquence de vos envois. Chaque outil nomme ses statuts à sa façon, mais la logique de ce tutoriel reste la même : garder les adresses sûres, mettre les incertaines de côté, retirer le reste.

## Avant le premier envoi : les points à contrôler

1. Toutes les adresses sont passées par la vérification en masse, et les « unknown » par un second contrôle.
2. Vous avez importé « Safe only » ou « Safe+Role » ; les éventuels catch-all attendent leur propre campagne.
3. Les rejets sont dans votre liste d’exclusion, avec les personnes qui ont demandé à ne plus être contactées.
4. La tâche est supprimée de Reoon, ou le sera sous 15 jours.
5. Vos boîtes d’envoi sont chauffées, avec SPF, DKIM et DMARC en place.

Chargez ensuite le fichier dans votre outil d’envoi : mon tutoriel pour {{< a key="instantly-campaign-setup" >}}créer une campagne Instantly{{< /a >}} prend le relais. Surveillez les rebonds pendant les premiers jours. Une hausse soudaine signale un mauvais lot : mettez la campagne en pause et revérifiez cette partie de la liste.

La vérification fait partie des étapes les plus simples à faire soi-même. Si vous préférez confier toute la campagne, de la liste à la dernière relance, et ne garder que les réponses, c’est ainsi que fonctionne [MLK Leadhunters](https://mlkleadhunters.com/fr/).
