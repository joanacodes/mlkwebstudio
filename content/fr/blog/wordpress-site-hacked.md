---
title: "Site WordPress piraté : que faire dans les 24 premières heures"
seo_title: "Site WordPress piraté : que faire en 24 heures, pas à pas"
description: "Site WordPress piraté ? Les bons gestes des 24 premières heures : couper l’accès, garder les preuves, prévenir la CNIL, nettoyer, lever l’alerte de Google."
slug: "site-wordpress-pirate"
translationKey: "wordpress-site-hacked"
date: 2026-10-17T09:35:00+02:00
lastmod: 2026-10-17T09:35:00+02:00
category: "website-rescue"
article_type: "tutorial"
keywords: ["site WordPress piraté", "site WordPress hacké", "que faire si son site WordPress est piraté", "nettoyer un site WordPress piraté", "Il est possible que ce site ait été piraté"]
summary: "Si votre site WordPress a été piraté, mettez-le hors ligne, changez tous les mots de passe et fermez les sessions, puis copiez le site infecté et ses journaux avant de nettoyer. Si des données personnelles ont fuité avec un risque pour les personnes, notifiez la CNIL sous 72 heures. Ensuite, nettoyez, restaurez une sauvegarde saine ou reconstruisez le site, puis demandez un examen dans la Search Console pour lever l’avertissement de Google."
cover: "wordpress-site-hacked"
cover_alt: "Bouclier coché devant une personne au travail sur un ordinateur portable, et la mention WordPress 24 h"
related: ["website-security-guide", "regain-website-access", "wordpress-to-squarespace", "website-maintenance", "gdpr-data-breach"]
services: ["rescue"]
faq:
  - q: "Mon référencement Google reviendra-t-il après le piratage ?"
    a: "En général oui, une fois les pages piratées supprimées et le site propre exploré de nouveau par Google, mais Google ne donne aucun délai. Un piratage nettoyé vite laisse en principe moins de traces que des pages de spam restées des mois dans l’index."
  - q: "Peut-on garder ses contenus si l’on reconstruit le site ?"
    a: "Oui. Vos textes et vos images peuvent passer sur le nouveau site ; ce que vous laissez derrière vous, c’est le code : le thème, les extensions et tout fichier d’origine douteuse. Avant de reprendre les anciennes pages et les anciens articles, vérifiez qu’ils ne contiennent ni lien ni script ajouté par le pirate."
  - q: "Comment savoir quand le piratage a commencé ?"
    a: "Regardez la date de création du compte administrateur inconnu, les dates de modification des fichiers suspects et, dans le rapport Performances de la Search Console, les premières requêtes sans rapport avec votre activité. Une sauvegarde antérieure à la plus ancienne de ces dates est la meilleure candidate pour une restauration."
  - q: "Faut-il prévenir ses clients après le piratage de son site ?"
    a: "Si leurs données personnelles ont été exposées et que la violation présente un risque élevé pour eux, oui : le RGPD impose de les informer dans les meilleurs délais. Sans données personnelles en jeu, le RGPD ne vous y oblige pas, mais un message court et factuel rassure les clients qui ont vu l’avertissement ou le spam."
  - q: "Un site piraté peut-il infecter ses visiteurs ?"
    a: "Oui. Certains piratages renvoient les visiteurs vers des arnaques ou tentent d’installer un logiciel malveillant sur leur appareil : c’est pour cela que Google et les navigateurs mettent en garde contre les sites infectés. Garder le site hors ligne jusqu’au nettoyage protège vos visiteurs et votre réputation."
---

Votre site WordPress a été piraté, ou tout l’indique : les visiteurs atterrissent sur un casino en ligne, Google affiche des pages en japonais sous le nom de votre entreprise, ou votre hébergeur vous écrit au sujet d’un logiciel malveillant. Un site WordPress piraté se répare, mais ce que vous faites dans les 24 premières heures détermine ce que l’incident vous coûtera, et l’ordre des gestes compte plus que la vitesse.

La plupart des appels d’urgence que je reçois concernent des sites WordPress. Pilotech, un installateur de climatisation en Île-de-France, en est un exemple : son dirigeant m’a téléphoné en urgence quand son site WordPress a été piraté.

Ce tutoriel donne les cinq étapes que je recommande, dans l’ordre : couper l’accès aux pirates, conserver les preuves, signaler ce qui doit l’être, nettoyer ou reconstruire, puis lever l’avertissement de Google. C’est la partie « urgence » de mon guide pour {{< a key="website-security-guide" >}}sécuriser son site internet{{< /a >}}, qui traite de la prévention. Les intitulés des menus sont ceux de WordPress et de la Google Search Console en français à la date de rédaction (octobre 2026).

## Comment savoir si votre site WordPress a été piraté

Certains piratages se voient tout de suite : une page d’accueil défigurée, un mot de passe d’administration qui ne fonctionne plus. La plupart restent discrets, parce que le pirate vise la réputation de votre site auprès de Google, pas votre attention. Les signes habituels :

| Signe | Où le voir |
|---|---|
| Les visiteurs sont renvoyés vers des sites d’arnaque, de casino ou de pharmacie, parfois seulement sur mobile ou seulement quand ils arrivent de Google | Votre téléphone, vos clients |
| Des pages que vous n’avez jamais écrites apparaissent dans Google, souvent en japonais ou remplies de noms de marques | Une recherche `site:votredomaine.fr` |
| La mention « Il est possible que ce site ait été piraté » sous votre résultat, ou une page d’alerte rouge dans Chrome | Recherche Google, Chrome |
| Un email de la Search Console au sujet de problèmes de sécurité, ou d’un nouveau propriétaire que vous n’avez pas ajouté | Votre boîte mail |
| Un compte administrateur que vous ne connaissez pas | La liste des comptes de WordPress |
| Votre hébergeur suspend le site, ou vous signale un logiciel malveillant ou des spams envoyés depuis votre compte | Votre compte d’hébergement |

Beaucoup de ces piratages se cachent des administrateurs connectés et des personnes qui tapent directement votre adresse. Vérifiez depuis un téléphone sur le réseau mobile, sans vous connecter, en cliquant sur votre propre résultat dans Google. Si l’un de ces signes est là, considérez que le site est piraté et commencez par l’étape 1.

## Étape 1, la première heure : couper l’accès aux pirates

L’objectif de la première heure est simple : personne d’autre que vous ne peut entrer, et les visiteurs n’arrivent plus sur des pages infectées. Ne supprimez encore aucun fichier : l’étape 2 en a besoin.

**1. Mettez le site hors ligne.** Demandez à votre hébergeur de suspendre l’accès public ou d’afficher une page d’attente pendant l’intervention. Demandez-lui au passage ce que montrent ses journaux et ses analyses antivirus : ses outils ont peut-être déjà trouvé quelque chose.

**2. Changez tous les mots de passe, depuis un appareil sain.** Commencez par la boîte mail de l’adresse d’administration de WordPress : qui la contrôle peut réinitialiser vos autres mots de passe. Puis le compte d’hébergement, chaque compte administrateur WordPress, les accès SFTP ou FTP et la base de données. Le nouveau mot de passe de la base doit aussi être reporté dans `wp-config.php`, à la ligne `DB_PASSWORD`, sinon le site ne peut plus se connecter à sa base.

**3. Activez la double authentification** partout où elle existe : hébergeur, registrar du nom de domaine, messagerie et connexions WordPress.

**4. Supprimez les comptes que vous n’avez pas créés.** Dans WordPress, ouvrez le menu **Comptes** (**Utilisateurs** dans certaines versions) et cliquez sur le filtre du rôle administrateur, au-dessus de la liste, pour n’afficher que les administrateurs. Faites d’abord une capture d’écran, puis supprimez tout compte inconnu.

{{< screenshot id="wordpress-site-hacked-01" alt="Liste des comptes WordPress filtrée sur le rôle administrateur" >}}

**5. Déconnectez tout le monde.** Sur votre profil, la section **Sessions** propose un bouton qui ferme toutes vos autres sessions, et la section **Mots de passe d’application** permet de révoquer les mots de passe donnés à des applications ou à des scripts, qu’un pirate disposant d’un accès administrateur peut créer pour garder une porte ouverte. Pour déconnecter tous les comptes d’un coup, remplacez les huit clés d’authentification et de salage de `wp-config.php` par une série neuve, tirée du générateur officiel de WordPress :

```
https://api.wordpress.org/secret-key/1.1/salt/
```

{{< screenshot id="wordpress-site-hacked-02" alt="Profil WordPress avec la section Mots de passe d’application et le bouton qui ferme les autres sessions" >}}

{{< callout type="warning" >}}**Utilisez un appareil sain.** Si l’ordinateur qui vous sert à gérer le site est infecté lui aussi, vos nouveaux mots de passe peuvent être volés pendant que vous les tapez. Lancez d’abord une analyse antivirus complète, ou changez les mots de passe depuis un autre appareil.{{< /callout >}}

Si un ancien prestataire détient le compte d’hébergement et que vous n’y avez pas accès, réglez ce point d’abord : voici comment {{< a key="regain-website-access" >}}récupérer son site internet auprès d’un ancien prestataire{{< /a >}}. Si le pirate contrôle aussi votre messagerie, {{< a key="incident-response-first-hour" >}}mon plan de la première heure{{< /a >}} montre comment la reprendre.

## Étape 2 : conserver les preuves avant de nettoyer

La tentation est de tout effacer sur-le-champ. Attendez une heure. Ce que vous sauvegardez maintenant montre par où le pirate est entré, et sans cela, la même faille le laissera revenir. C’est aussi ce que la CNIL, les enquêteurs ou votre assureur vous demanderont.

1. **Une copie complète du site infecté** : tous les fichiers et un export de la base de données, avec l’outil de sauvegarde de l’hébergeur ou par SFTP et phpMyAdmin. Nommez-la clairement (`INFECTE-2026-10-17`, par exemple) et rangez-la à l’écart de vos autres sauvegardes.
2. **Les journaux du serveur (les logs).** Demandez à votre hébergeur les journaux d’accès et d’erreurs des dernières semaines. Ils ne sont pas conservés indéfiniment : demandez-les dès le premier jour.
3. **Des captures d’écran** : les pages de spam dans Google, les redirections, les avertissements, la liste des comptes, les emails de la Search Console ou de l’hébergeur.
4. **Une chronologie** dans un simple document : quand vous avez remarqué le problème, ce que vous avez vu, et chaque action menée depuis, avec l’heure et la personne qui l’a faite.
5. **La liste de vos sauvegardes**, avec leurs dates (hébergeur, extension ou les vôtres). L’étape 4 en demande une antérieure au piratage.

{{< callout type="tip" >}}**Ne restaurez jamais la copie infectée.** Elle ne sert qu’à être examinée. Gardez-la étiquetée et hors ligne, et supprimez-la une fois l’affaire close.{{< /callout >}}

## Étape 3 : notifier la CNIL et porter plainte si besoin

Un site WordPress contient souvent plus de données personnelles que son propriétaire ne le pense : les messages du formulaire de contact si l’extension les enregistre, les comptes clients et les commandes si vous vendez en ligne, les inscriptions à la newsletter, les comptes utilisateurs. Si le pirate a pu y accéder, il s’agit d’une violation de données personnelles au sens du RGPD.

**La CNIL.** Si la violation présente un risque pour les droits et libertés des personnes, vous devez la notifier à la CNIL « dans les meilleurs délais et, si possible, 72 heures au plus tard après en avoir pris connaissance », par [son téléservice de notification](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles). S’il vous manque des informations, la CNIL accepte une notification en deux temps : une première déclaration, puis un complément. Et même sans notification, consignez l’incident dans votre registre des violations : ce qui s’est passé, ses effets et les mesures prises. {{< a key="gdpr-data-breach" >}}Mon guide des 72 heures après une violation de données{{< /a >}} précise aussi quand prévenir vos clients.

{{< callout type="note" >}}**Le délai court dès que vous avez connaissance de la violation**, pas à la fin de votre enquête. Une notification faite après 72 heures doit expliquer les raisons du retard.{{< /callout >}}

**La plainte.** Pirater un site est un délit. Vous pouvez porter plainte au commissariat, à la gendarmerie ou par courrier au procureur de la République. Cybermalveillance.gouv.fr conseille de le faire en fournissant toutes les preuves en votre possession, et de garder les preuves techniques à disposition des enquêteurs ([son guide pour les dirigeants](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/cyberattaque-que-faire-guide-dirigeants) détaille la marche à suivre). Si vous portez plainte après le nettoyage, la copie et les journaux de l’étape 2 serviront de preuves : sur le site remis en état, les traces ont disparu.

**L’assistance.** Le service public 17Cyber, qui réunit la police nationale, la gendarmerie et cybermalveillance.gouv.fr, propose sur 17cyber.gouv.fr un parcours d’assistance en ligne pour les victimes, entreprises comprises.

Deux autres appels à passer : votre banque ou votre prestataire de paiement si le site encaisse des paiements, et votre assureur si vous avez une garantie cyber (vérifiez le délai de déclaration prévu au contrat).

## Étape 4 : nettoyer le site WordPress piraté ou le reconstruire

Les pirates dehors et les preuves à l’abri, trois chemins s’offrent à vous. Choisissez selon la confiance que vous accordez à ce qui reste.

| Option | Quand elle convient | Le revers |
|---|---|---|
| Restaurer une sauvegarde | Vous savez quand le piratage a commencé et vous avez une sauvegarde complète antérieure | La faille utilisée est toujours là : mettez tout à jour juste après |
| Nettoyer le site en place | Piratage récent et limité, et une personne à l’aise techniquement pour s’en charger | Une porte dérobée s’oublie facilement, et elle ramène le pirate |
| Reconstruire | Aucune sauvegarde saine, une deuxième infection, ou un site qui devait de toute façon changer | Plus long, et chaque ancienne adresse doit être redirigée |

### Ce que comprend un nettoyage

Si vous gardez WordPress, que vous restauriez une sauvegarde ou que vous nettoyiez le site sur place, voici les étapes habituelles :

1. **Réinstallez WordPress lui-même.** L’écran **Tableau de bord > Mises à jour** propose un bouton qui réinstalle la version actuelle. Il écrase les fichiers du cœur sans toucher à `wp-content`, où se trouvent vos thèmes, vos extensions et vos médias, mais il ne supprime pas les fichiers ajoutés par le pirate : c’est l’objet du point 3.

{{< screenshot id="wordpress-site-hacked-03" alt="Écran Mises à jour du tableau de bord WordPress, avec le bouton qui réinstalle la version actuelle" >}}

2. **Supprimez toutes les extensions et tous les thèmes inutilisés**, puis réinstallez ceux que vous gardez depuis WordPress.org ou le site de leur éditeur. Jamais de version « nulled » (piratée) d’une extension payante : c’est un moyen connu de diffuser des logiciels malveillants.
3. **Cherchez les fichiers qui n’ont rien à faire là** : des fichiers PHP dans `wp-content/uploads`, un dossier fait pour les images et les documents, pas pour du code ; des fichiers aux noms aléatoires à la racine du site ; tout fichier de `wp-content/mu-plugins` que vous n’y avez pas mis (les extensions de ce dossier se chargent automatiquement et ne se désactivent pas depuis le tableau de bord) ; et du code que vous n’avez pas ajouté dans `wp-config.php` et `.htaccess`, comme des règles de redirection ou de longues chaînes de caractères illisibles.
4. **Vérifiez la base de données** : encore une fois les administrateurs, les réglages d’adresse du site, et les pages, articles et widgets, à la recherche de scripts ou de liens que vous n’avez pas écrits.
5. **Analysez le site** avec l’antivirus de l’hébergeur ou une extension de sécurité, puis **mettez à jour** tout ce qui reste.
6. **Changez encore une fois les mots de passe et les clés d’authentification.** Si une porte dérobée a survécu jusque-là, le pirate a pu voir ceux de l’étape 1.

Mettre à jour ne suffit pas. [Le rapport de Patchstack sur l’état de la sécurité de WordPress](https://www.patchstack.com/whitepaper/state-of-wordpress-security-in-2026/) a recensé 11 334 nouvelles vulnérabilités dans l’écosystème WordPress en 2025, dont environ 91 % dans des extensions. Certaines failles sont rendues publiques avant qu’un correctif existe, et aucune mise à jour ne peut les fermer. Chaque extension supprimée, c’est une porte de moins.

### Mon avis : reconstruire si personne n’entretient le site

Les deux sauvetages de sites piratés dont je peux vous parler se sont terminés par un nouveau site. Le site WordPress de Pilotech a été récupéré, puis je lui en ai construit un nouveau ; deux ans plus tard, nous travaillons toujours ensemble, sur le référencement, le cold emailing et de nouveaux sites, comme {{< a page="/projects/pilotech" >}}le site Pilotech qui réunit ses trois gammes{{< /a >}}. Eden Flats, une conciergerie Airbnb, a fait appel à moi après le piratage de son site : j’ai construit un nouveau site, puis travaillé son référencement et son identité visuelle.

Tous mes clients WordPress sont venus me voir pour changer de plateforme, à cause de la courbe d’apprentissage et des extensions à suivre. WordPress convient très bien si vous avez le budget pour un spécialiste qui s’occupe du site tous les mois ; les ennuis commencent quand personne ne s’en occupe. Si vous modifiez votre site vous-même et que personne ne l’entretient, je le reconstruirais sur une plateforme que l’on peut modifier sans tout casser, comme Squarespace : lisez mon comparatif {{< a key="squarespace-vs-wordpress" >}}Squarespace ou WordPress{{< /a >}}, puis comment {{< a key="wordpress-to-squarespace" >}}migrer de WordPress vers Squarespace sans perdre son référencement{{< /a >}}.

## Étape 5 : lever l’avertissement de Google

Une fois le site propre et de retour en ligne, Google doit encore s’en assurer. Pour lever la mention sous votre résultat, que l’aide de Google traduit par « Il est possible que ce site ait été piraté », et l’éventuel avertissement rouge du navigateur, Google vous demande de solliciter un examen dans la Search Console.

1. **Validez votre site dans la Search Console** si ce n’est pas déjà fait. Une propriété de type Domaine, validée par un enregistrement DNS, couvre toutes les versions de votre adresse d’un coup ; mon {{< a key="google-search-console-tutorial" >}}tuto Google Search Console{{< /a >}} montre comment faire.
2. **Retirez les propriétaires inconnus.** Ouvrez **Paramètres > Utilisateurs et autorisations**. Les pirates se font parfois valider comme propriétaires d’un site pour soumettre leurs propres sitemaps à Google. Retirez tout propriétaire inconnu et supprimez son jeton de validation (un fichier, une balise meta ou un enregistrement DNS ; les détails de validation du propriétaire indiquent lequel), sinon il pourra se valider de nouveau.
3. **Ouvrez Sécurité et actions manuelles > Problèmes de sécurité.** Le rapport nomme les problèmes détectés et donne des exemples d’URL. Vérifiez-les toutes.

{{< screenshot id="wordpress-site-hacked-04" alt="Google Search Console, menu Sécurité et actions manuelles ouvert sur le rapport Problèmes de sécurité" >}}

4. **Corrigez chaque problème sur toutes les pages**, pas seulement sur les exemples. Les pages de spam créées par le pirate doivent renvoyer une erreur 404 ou 410 pour que Google les retire de son index ; ne les redirigez pas vers votre page d’accueil.
5. **Cliquez sur Demander un examen** et décrivez ce que vous avez trouvé, ce que vous avez supprimé et comment vous avez fermé la faille. Court et factuel, c’est le mieux.
6. **Attendez la réponse** dans les messages de la Search Console. Selon [l’aide de Google sur le rapport Problèmes de sécurité](https://support.google.com/webmasters/answer/9044101?hl=fr), l’examen prend quelques jours pour un logiciel malveillant et peut demander plusieurs semaines pour un site piraté avec du spam. Si l’examen échoue, le rapport indique ce qui pose encore problème : corrigez et recommencez.

## La check-list des 24 heures, et quand passer la main

| Quand | Quoi faire | C’est fait quand |
|---|---|---|
| Première heure | Site hors ligne, mots de passe changés, administrateurs inconnus supprimés, sessions fermées | Personne d’autre que vous ne peut se connecter |
| Dans la matinée | Copie du site infecté, journaux demandés, captures, chronologie | Vous détenez une copie que vous ne restaurerez jamais |
| Dans la journée | Données personnelles exposées ou non ; CNIL si besoin ; plainte | La décision est écrite |
| Sous 24 heures | Restauration, nettoyage ou début de reconstruction ; site en ligne ou page d’attente | Plus rien de suspect, tout est à jour |
| Les jours suivants | Demande d’examen dans la Search Console, surveillance des nouvelles pages de spam | L’avertissement de Google a disparu |

Vous pouvez tout faire vous-même si l’espace client de votre hébergeur et un gestionnaire de fichiers ne vous font pas peur. Passez la main quand :

- vous n’avez pas accès au compte d’hébergement ou au nom de domaine ;
- le site encaisse des paiements ou contient des comptes clients ;
- le piratage revient après un nettoyage ;
- vous n’avez aucune sauvegarde antérieure au piratage, ni idée de sa date de début.

Quand on me confie un site piraté, je réponds le jour même ou sous 24 heures. La totalité de l’intervention se règle à l’avance et je répare le site ; si je n’y arrive pas, vous recevez un rapport écrit à transmettre à un autre prestataire, et je rembourse 70 % de la facture.

Une fois le site propre, gardez-le propre : mon guide sur la {{< a key="website-maintenance" >}}maintenance de site internet{{< /a >}} détaille l’entretien qu’un site WordPress demande et ce qu’il coûte. Pour vos autres données (ordinateurs, Google Workspace, Microsoft 365), suivez {{< a key="backups-3-2-1" >}}la règle de sauvegarde 3-2-1{{< /a >}}.
