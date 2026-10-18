---
title: "Sécuriser son site internet : prévenir le piratage et savoir réagir"
seo_title: "Sécuriser son site internet : guide complet pour les TPE"
description: "Sécuriser son site internet : que faire en cas de piratage, de panne ou d’accès perdu, puis la 2FA, les sauvegardes et les réglages qui les évitent."
slug: "securiser-site-internet"
translationKey: "website-security-guide"
date: 2026-10-17T09:42:00+02:00
lastmod: 2026-10-17T09:42:00+02:00
category: "website-rescue"
article_type: "pillar"
keywords: ["sécuriser son site internet", "sécurité site internet", "sécuriser son site web", "check-list sécurité site internet", "sauvegarde site internet", "double authentification"]
summary: "Sécuriser son site internet repose sur quatre habitudes : des comptes au nom de l’entreprise protégés par la double authentification, des logiciels à jour avec le moins d’extensions possible, des sauvegardes déjà restaurées une fois, et un nom de domaine verrouillé qui se renouvelle automatiquement. En cas de problème, reprenez d’abord la messagerie et le domaine, changez les mots de passe, gardez des preuves, puis nettoyez, restaurez ou reconstruisez."
cover: "website-security-guide"
cover_alt: "Bouclier bleu coché derrière une vitre cannelée, avec les mots HTTPS et 2FA"
related: ["wordpress-site-hacked", "regain-website-access", "recover-domain-name", "wordpress-to-squarespace", "website-maintenance"]
services: ["rescue"]
faq:
  - q: "Comment savoir si mon site internet a été piraté ?"
    a: "Les signes habituels : la mention « Il est possible que ce site ait été piraté » dans Google, des pages ou des liens que vous n’avez pas créés (tapez `site:votredomaine.fr` dans Google pour les lister), des visiteurs redirigés vers d’autres sites, des administrateurs inconnus ou un hébergeur qui suspend le compte. La Search Console prévient aussi les propriétaires validés quand Google détecte un problème."
  - q: "Le cadenas HTTPS veut-il dire que mon site est sécurisé ?"
    a: "Non. Le HTTPS chiffre la connexion entre vos visiteurs et votre site, si bien que les formulaires et les identifiants ne peuvent pas être lus en chemin. Un site piraté peut très bien afficher un cadenas valide : c’est un minimum, pas la preuve que le site est sain."
  - q: "Faut-il une extension de sécurité sur WordPress ?"
    a: "Elle aide, surtout pour la double authentification, la limitation des tentatives de connexion et le pare-feu, mais elle ne remplace ni les mises à jour ni les sauvegardes. Une seule extension de sécurité bien entretenue suffit : deux peuvent entrer en conflit."
  - q: "Qui est responsable si mon site est piraté : moi ou mon prestataire ?"
    a: "Au regard du RGPD, votre entreprise est responsable du traitement des données personnelles que collecte le site : c’est à elle d’en assurer la sécurité, même quand un prestataire gère le site, lequel a ses propres obligations de sous-traitant. Le contrat précise qui fait concrètement le travail : relisez-le avant d’en avoir besoin."
  - q: "Quelqu’un peut-il récupérer mon nom de domaine s’il expire ?"
    a: "Oui, à terme. Après l’expiration, le registrar conserve le domaine pendant une période de grâce, souvent avec des frais plus élevés pour le restaurer, puis le libère, et n’importe qui peut alors l’enregistrer. Le renouvellement automatique avec une carte valide évite ce risque."
---

Sécuriser son site internet, pour une petite entreprise, tient moins aux pare-feu qu’aux clés : qui les détient, comment elles sont protégées et ce qui se passe quand l’une d’elles disparaît. La plupart des sites ne sont pas piratés par quelqu’un qui les a choisis : un robot trouve une extension pas à jour ou un mot de passe réutilisé. Et beaucoup de pannes n’ont rien à voir avec un pirate, juste avec un nom de domaine expiré parce que les rappels de renouvellement arrivaient dans la boîte mail d’un ancien prestataire.

Je vois surtout le côté dépannage. Pilotech m’a téléphoné en urgence quand son ancien site WordPress a été piraté : j’ai récupéré le site, construit un nouveau site internet, et deux ans plus tard, nous travaillons toujours ensemble. Eden Flats aussi m’a téléphoné après un piratage. En fait, tous les clients qui ont fait appel à moi en urgence étaient sur WordPress.

Ce guide est le point de départ de la rubrique dépannage. Il commence par les premiers gestes, dans le bon ordre, si votre site est piraté, en panne ou inaccessible, puis passe aux habitudes qui évitent d’en arriver là : comptes, double authentification, mises à jour, sauvegardes et nom de domaine. Vous pouvez en faire l’essentiel vous-même, en un après-midi.

## Sécuriser son site internet : ce qu’il faut protéger

Quatre choses sont en jeu, et le code du site n’en est qu’une :

- Les comptes : le registrar du nom de domaine, l’hébergement ou l’outil de création de site, la messagerie. Qui les contrôle contrôle le site.
- Les logiciels : WordPress, ses extensions et son thème, ou la plateforme sur laquelle le site est construit.
- Les données : formulaires de contact, réservations, comptes clients, commandes.
- La réputation : un avertissement dans Google, des pages de spam à votre nom, de fausses factures envoyées « depuis » votre domaine.

Voici ce qui arrive le plus souvent, et ce qui l’évite.

| Ce qui arrive | Ce que vous constatez | Ce qui l’évite |
|---|---|---|
| Un mot de passe deviné, volé ou réutilisé | Quelqu’un se connecte à votre messagerie, votre site ou votre registrar | Un gestionnaire de mots de passe et la double authentification |
| Une extension ou un thème pas à jour est exploité | Pages de spam, redirections vers des arnaques, « Il est possible que ce site ait été piraté » dans Google | Les mises à jour et moins d’extensions |
| Un ancien prestataire garde les accès | Impossible de modifier le site ou de déplacer le domaine | Des comptes au nom de l’entreprise |
| Le nom de domaine expire | Le site et les emails s’arrêtent en même temps | Le renouvellement automatique et une carte valide |
| Quelqu’un usurpe votre domaine | De faux emails « de votre part » arrivent chez vos clients | Les enregistrements SPF, DKIM et DMARC |
| Aucune sauvegarde utilisable | Une mise à jour ratée ou un piratage oblige à tout refaire | Des sauvegardes et une restauration testée |

Rien de tout cela ne demande un budget sécurité : **quelques heures de réglages, puis un contrôle rapide chaque mois, couvrent l’essentiel**. Pour le reste de votre informatique, des ordinateurs aux emails d’hameçonnage, cybermalveillance.gouv.fr, le dispositif national d’assistance aux victimes, publie des fiches de bonnes pratiques gratuites, dont un [guide destiné aux dirigeants](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/bonnes-pratiques/cyberattaque-que-faire-guide-dirigeants) sur les réflexes en cas de cyberattaque.

## Piratage, panne ou accès perdu : les premiers gestes

Quand quelque chose casse, l’ordre de vos gestes compte plus que leur vitesse. Voici la marche à suivre, quelle que soit la plateforme.

### Si votre site a été piraté

1. Sécurisez la boîte mail qui reçoit vos réinitialisations de mot de passe : nouveau mot de passe, double authentification, et fermeture de toutes les autres sessions. Qui contrôle cette boîte peut réinitialiser tout le reste.
2. Faites de même pour le registrar, le compte d’hébergement ou de l’outil de création et l’administration du site, et supprimez tout utilisateur que vous ne reconnaissez pas.
3. Mettez le site hors ligne, ou affichez une page de maintenance, s’il renvoie vos visiteurs ailleurs ou affiche du spam. Vous protégez vos visiteurs, et votre nom.
4. Avant de nettoyer quoi que ce soit, copiez les fichiers, la base de données et les journaux du serveur, faites des captures d’écran et notez les dates. Ces traces montrent par où le pirate est entré.
5. Vérifiez si des données personnelles ont fuité par les formulaires, les comptes clients ou les commandes. Si c’est le cas et que cela présente un risque pour les personnes, notifiez la violation à la CNIL dans les meilleurs délais et, si possible, sous 72 heures, via son [téléservice de notification](https://www.cnil.fr/fr/services-en-ligne/notifier-une-violation-de-donnees-personnelles) ; dans tous les cas, consignez l’incident dans votre registre interne. 17Cyber (17cyber.gouv.fr), le service d’assistance en ligne de la police, de la gendarmerie et de cybermalveillance.gouv.fr, vous aide à faire le point, et vous pouvez porter plainte auprès de la police ou de la gendarmerie.
6. Nettoyez le site, restaurez une sauvegarde antérieure au piratage ou reconstruisez. Si vous ne savez pas par où le pirate est entré, reconstruire sur une base saine avec vos propres textes et images est souvent plus rapide et plus sûr que de traquer chaque fichier infecté. Pour Pilotech, j’ai récupéré l’ancien site et en ai construit un nouveau.
7. Si Google affiche « Il est possible que ce site ait été piraté » sous vos résultats, ouvrez le rapport **Problèmes de sécurité** de la Search Console, corrigez tout ce qu’il signale, puis cliquez sur **Demander un examen** en décrivant vos corrections. Selon [l’aide de Google](https://support.google.com/webmasters/answer/9044101?hl=fr), l’examen prend quelques jours pour un logiciel malveillant, et jusqu’à plusieurs semaines pour un site piraté avec du spam.

{{< callout type="warning" >}}Ne supprimez pas le site et ne réinstallez rien avant l’étape 4. Une fois les fichiers effacés, la trace du chemin suivi par le pirate disparaît avec eux, et vous risquez de laisser la même faille ouverte sur le nouveau site.{{< /callout >}}

La version WordPress de ces étapes, avec ce qu’il faut chercher dans les fichiers et la base de données, se trouve dans {{< a key="wordpress-site-hacked" >}}Site WordPress piraté : que faire dans les 24 premières heures{{< /a >}}. Si vous n’avez jamais ouvert la Search Console, {{< a key="google-search-console-tutorial" >}}mon tuto Google Search Console{{< /a >}} montre d’abord comment ajouter votre site.

### Si votre site est en panne

Vérifiez d’abord les causes les plus banales, dans cet ordre :

1. Le nom de domaine. Regardez sa date d’expiration dans le Whois (celui de l’Afnic pour un .fr, ICANN Lookup pour un .com). Un domaine expiré fait tomber le site et les emails en même temps.
2. Les DNS. Un enregistrement supprimé, ou des serveurs DNS changés lors d’une « petite modification », suffisent à mettre un site hors service. {{< a key="dns-records-explained" >}}Les enregistrements DNS expliqués{{< /a >}} montre le rôle de chacun.
3. L’hébergeur ou la plateforme. Consultez sa page d’état des services avant de toucher à quoi que ce soit.
4. La dernière chose qui a changé : une mise à jour, une nouvelle extension, un bout de code. Sur WordPress, si le tableau de bord ne s’affiche plus, renommer le dossier d’une extension dans `wp-content/plugins`, depuis le gestionnaire de fichiers de l’hébergeur, la désactive. Sur Squarespace, le mode sans échec (ajoutez `/safe` après `/config` dans l’adresse d’administration) coupe le code personnalisé dans l’éditeur, le temps de retirer l’ajout fautif, comme je l’explique dans {{< a key="squarespace-code-injection" >}}mon guide de l’injection de code Squarespace{{< /a >}}. Sur Wix, l’historique du site (Site History) restaure une version précédente.
5. La dernière sauvegarde qui fonctionnait, si rien d’autre ne marche.

### Si vous avez perdu l’accès, ou qu’un ancien prestataire garde les clés

Reprenez d’abord le nom de domaine et la messagerie : ils permettent de récupérer presque tous les autres comptes. Vérifiez ensuite qui est le titulaire du domaine, car c’est lui qui le détient, quel que soit celui qui a payé. {{< a key="recover-domain-name" >}}Récupérer son nom de domaine auprès d’un ancien prestataire{{< /a >}} détaille les recours pour un .fr (SYRELI, PARL EXPERT) comme pour un .com, et {{< a key="regain-website-access" >}}récupérer son site internet auprès d’un ancien prestataire{{< /a >}} liste les autres comptes à reprendre, avec un modèle de demande écrite.

## Un compte par service, au nom de l’entreprise

Les pertes d’accès commencent souvent par un raccourci. Le prestataire ouvre le domaine, l’hébergement et les comptes Google avec sa propre adresse pour gagner du temps, et personne ne les transfère à la fin de la mission. La parade est simple : **chaque compte appartient à l’entreprise, et chacun dispose de son propre accès**.

- Ouvrez chaque compte avec une adresse sur votre propre nom de domaine, que vous contrôlez, jamais une adresse personnelle ou celle du prestataire.
- Faites de l’entreprise le titulaire du nom de domaine, pas la personne qui l’a enregistré.
- Donnez à votre prestataire, à votre développeur ou à votre assistant son propre accès : contributeur sur Squarespace, collaborateur sur Wix, utilisateur à son nom sur WordPress, avec le rôle Éditeur s’il ne touche qu’au contenu. Vous pourrez retirer cet accès à la fin de la mission sans changer votre propre mot de passe.
- Ne partagez jamais votre mot de passe, même avec quelqu’un de confiance. Un identifiant partagé ne se retire pas à une seule personne.

Tenez ensuite une liste des accès, une ligne par compte, rangée dans votre gestionnaire de mots de passe ou dans un document sécurisé qui ne traîne pas dans votre boîte mail.

| Compte | À noter |
|---|---|
| Registrar du nom de domaine | Titulaire, date d’expiration, renouvellement automatique, verrou de transfert |
| DNS (souvent le registrar, parfois Cloudflare ou l’hébergeur) | Vers où pointent les serveurs DNS |
| Hébergement ou outil de création de site | Offre, date de renouvellement, administrateurs |
| Messagerie (Google Workspace, Microsoft 365, Spacemail…) | Compte administrateur, téléphone et adresse de secours |
| Search Console, fiche d’établissement Google, Analytics | Propriétaires et utilisateurs |
| Tout ce qui est relié au site (paiement, réservation, formulaires) | Qui peut se connecter |

Sur chaque ligne, ajoutez l’adresse de connexion, la méthode de double authentification et l’endroit où sont rangés les codes de secours. Quand quelqu’un s’en va, la liste vous dit quels accès retirer. Si vous ne savez pas bien comment s’articulent le domaine, l’hébergement et la messagerie, {{< a key="domain-hosting-email-guide" >}}mon guide sur le nom de domaine et l’hébergement{{< /a >}} l’explique.

## Mots de passe et double authentification

Deux réglages font l’essentiel du travail : un mot de passe différent pour chaque compte, et la double authentification sur les comptes qui comptent.

Un gestionnaire de mots de passe retient vos mots de passe à votre place. Il en crée un long et aléatoire pour chaque compte, si bien qu’une fuite sur un site n’ouvre pas les autres. Pour les rares que vous devez retenir, comme celui du gestionnaire lui-même, une phrase de passe de plusieurs mots est plus facile à mémoriser et plus solide qu’un mot court et compliqué.

La double authentification (2FA, que Google appelle validation en deux étapes) demande une seconde preuve après le mot de passe : un code dans une application sur votre téléphone, une clé d’accès ou une clé de sécurité. Un mot de passe volé ne suffit plus. Activez-la dans cet ordre :

1. Votre messagerie, qui reçoit toutes les réinitialisations de mot de passe.
2. Votre registrar.
3. Votre outil de création de site ou votre hébergement, et l’administration du site.
4. Les comptes Google et réseaux sociaux liés à l’entreprise.

Une application d’authentification ou une clé d’accès protège mieux qu’un code par SMS, qui peut être détourné si quelqu’un s’empare de votre numéro, mais n’importe quel second facteur vaut mieux qu’aucun. Notez les codes de secours au moment de l’activation, sur papier ou dans votre gestionnaire. Quand le service le permet, ajoutez une deuxième personne de confiance comme administrateur, pour qu’un téléphone perdu ne bloque pas l’entreprise.

Squarespace, Wix, Google, Microsoft et la plupart des registrars intègrent la double authentification. WordPress non : il faut l’ajouter avec une extension, et réserver les comptes administrateur aux personnes qui en ont vraiment besoin.

{{< callout type="tip" >}}Si vous ne faites qu’une chose après cette lecture, activez la double authentification sur **votre messagerie**.{{< /callout >}}

## Mises à jour et extensions : là où les sites WordPress se font piéger

WordPress lui-même est bien entretenu ; le risque vient de ce qu’on y ajoute. Patchstack a recensé 11 334 nouvelles vulnérabilités dans l’écosystème WordPress en 2025, 42 % de plus qu’en 2024. Environ 91 % se trouvaient dans des extensions, et 46 % n’avaient encore aucun correctif quand elles ont été rendues publiques ([rapport 2026 de Patchstack](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2026/), en anglais). Chaque extension est du code écrit par un développeur différent, mis à jour à son rythme, ou plus du tout : le nombre d’extensions compte donc autant que les mises à jour.

Si votre site tourne sous WordPress :

- Gardez le moins d’extensions possible, et **supprimez celles qui ne servent pas** : une extension désactivée laisse ses fichiers sur le serveur.
- Activez les mises à jour automatiques des extensions de confiance. Depuis la version 5.5, l’écran Extensions permet de les activer une par une, et WordPress installe seul les mises à jour de sécurité mineures de son cœur.
- Évitez les extensions qui n’ont pas été mises à jour depuis longtemps, et n’installez jamais une copie gratuite d’un thème ou d’une extension payante : les versions piratées sont une porte d’entrée classique pour les logiciels malveillants.
- Demandez à votre hébergeur une version de PHP à jour, et faites une sauvegarde avant toute mise à jour importante.

Mon avis, en toute franchise : WordPress n’est pas dangereux, il est exigeant. Il lui faut un webmaster toute l’année, et un WordPress pas à jour est exactement ce que cherchent les robots. Quand le propriétaire modifie seul son site, je le fais passer sur Squarespace, où la plateforme gère le logiciel, l’hébergement et les mises à jour de sécurité, et où changer un mot ne casse pas la mise en page. Les entreprises qui ont le budget pour un spécialiste chaque mois peuvent garder WordPress. La comparaison complète est dans {{< a key="squarespace-vs-wordpress" >}}Squarespace ou WordPress{{< /a >}}, et la migration dans {{< a key="wordpress-to-squarespace" >}}migrer de WordPress vers Squarespace sans perdre votre référencement{{< /a >}}.

Sur un outil comme Squarespace ou Wix, la plateforme corrige elle-même ses logiciels et ses serveurs. Votre part du travail : les comptes, le code que vous collez vous-même et les applications que vous connectez. Un site statique, comme un site créé avec l’IA et publié sur GitHub Pages, n’a ni base de données ni interface d’administration sur un serveur : il offre très peu de prise, et le risque se déplace vers votre compte GitHub et vos DNS. {{< a key="build-website-with-ai" >}}Créer un site internet avec l’IA et l’héberger sur GitHub Pages{{< /a >}} détaille cette configuration.

## Sauvegardes : la règle du 3-2-1 et une restauration testée

Une sauvegarde ne compte que si vous savez la restaurer. La référence est la règle du 3-2-1 : **trois copies de votre site, sur deux supports différents, dont une hors de chez votre hébergeur**. Pour un site de petite entreprise, cela donne le site en ligne, la sauvegarde de la plateforme ou de l’hébergeur, et une copie que vous gardez vous-même.

Ce que vous gardez dépend de la plateforme :

| Plateforme | Ce que la plateforme conserve | Ce que vous gardez vous-même |
|---|---|---|
| WordPress | Les sauvegardes de l’hébergeur, variables selon l’offre : vérifiez leur fréquence et leur durée de conservation | Une extension de sauvegarde qui copie les fichiers et la base de données hors du serveur, et une sauvegarde avant chaque mise à jour |
| Squarespace | Aucune sauvegarde complète que vous puissiez restaurer vous-même | Un double du site avant tout gros changement, l’export du contenu (partiel : ni produits, ni événements, ni CSS personnalisé), vos images, textes et codes dans un dossier |
| Wix | L’historique du site, pour restaurer une version enregistrée ou publiée | Vos textes et images : l’historique ne restaure pas le contenu des applications comme Stores, Blog ou Bookings, et un site Wix ne peut pas partir chez un autre hébergeur |
| Site statique (Hugo, HTML, site créé avec l’IA) | Le dépôt Git garde chaque version | Une copie du dépôt sur votre ordinateur et une deuxième ailleurs |

Trois habitudes font la différence :

1. Sauvegardez aussi souvent que le site change : chaque jour pour une boutique ou des réservations en ligne, chaque semaine ou chaque mois pour un site vitrine, et toujours avant une mise à jour ou une refonte.
2. Gardez une copie hors de la plateforme. Une sauvegarde stockée sur le même serveur que le site peut être piratée ou perdue avec lui.
3. Testez une restauration tous les trois mois, sur une copie de test ou un double du site, et vérifiez les pages, les formulaires et les images. Une sauvegarde jamais restaurée est un espoir, pas un plan.

Vos boîtes mail ne font pas partie de la sauvegarde du site, pas plus que ce qui vit dans des applications tierces comme un outil de réservation : vérifiez comment chacune exporte ses données.

## Nom de domaine : verrouillé, renouvelé, DNS propres

Votre nom de domaine est le passe-partout. Votre site, vos emails et les réinitialisations de mot de passe de tous vos autres comptes en dépendent : il mérite quelques minutes d’attention chaque année.

1. Vérifiez le titulaire. Ce doit être votre entreprise. Si c’est votre prestataire ou un ancien salarié, réglez-le maintenant, à froid, plutôt qu’au milieu d’une urgence. Pour un .fr, {{< a key="fr-domain-names" >}}mon guide du nom de domaine .fr{{< /a >}} rappelle les conditions de l’Afnic.
2. Protégez le compte chez le registrar avec la double authentification, et donnez-lui une adresse de secours sur un autre domaine : si votre domaine ne fonctionne plus, les emails de réinitialisation qui lui sont envoyés non plus.
3. **Laissez le verrou de transfert activé.** Son nom change d’un registrar à l’autre, et la plupart l’activent par défaut. Il empêche quiconque de déplacer le domaine chez un autre registrar sans votre accord.
4. Activez le renouvellement automatique, avec une carte encore valide à la date d’échéance. Certains registrars prélèvent bien avant : Squarespace, par exemple, débite la carte 15 jours avant. Vérifiez que les rappels arrivent dans une boîte que quelqu’un lit.
5. Faites le ménage dans vos DNS. Supprimez les enregistrements qui pointent vers des services que vous n’utilisez plus : un enregistrement oublié peut permettre à quelqu’un d’autre de s’approprier le sous-domaine concerné. GitHub déconseille par exemple les enregistrements génériques comme `*.exemple.fr` pour cette raison.
6. Authentifiez vos emails. SPF, DKIM et DMARC permettent aux serveurs de messagerie de repérer et de rejeter les messages qui se font passer pour votre domaine, et Gmail exige SPF ou DKIM de tout expéditeur depuis février 2024. {{< a key="spf-dkim-dmarc-setup" >}}Configurer SPF, DKIM et DMARC{{< /a >}} détaille chaque enregistrement.

Si vous voulez changer de registrar, faites-le pendant que tout fonctionne : {{< a key="transfer-domain-name" >}}transférer un nom de domaine{{< /a >}} explique le code de transfert pas à pas. Pour un .com, les règles de l’ICANN en vigueur au moment où j’écris permettent qu’un changement de titulaire bloque les transferts pendant 60 jours, sauf si votre registrar propose de s’en dispenser : une raison de plus de ne pas attendre le dernier moment. L’ICANN a adopté de nouvelles règles sans annoncer leur date d’entrée en vigueur : vérifiez la page d’aide de votre registrar avant un transfert. {{< a key="best-domain-registrar" >}}Mon comparatif des registrars{{< /a >}} passe en revue les six que j’ai utilisés, sur leur prix de renouvellement.

## Check-list sécurité : chaque mois, chaque trimestre, chaque année

La sécurité, c’est surtout de l’entretien. Voici la check-list à garder sous la main.

### Chaque mois

- Appliquez les mises à jour (cœur WordPress, extensions, thème), ou vérifiez que les mises à jour automatiques ont bien eu lieu.
- Vérifiez que la dernière sauvegarde a tourné et qu’une copie se trouve hors de la plateforme.
- Cherchez les utilisateurs, pages ou extensions que vous n’avez pas ajoutés.
- Ouvrez le rapport Problèmes de sécurité de la Search Console, et envoyez-vous un message test par chaque formulaire.

### Chaque trimestre

- Restaurez une sauvegarde sur une copie de test.
- Relisez la liste des accès et retirez ceux des personnes parties ou des prestataires qui ont fini leur mission.
- Lisez vos rapports DMARC, ou le résumé que votre fournisseur de messagerie vous envoie.

### Chaque année

- Vérifiez les dates de renouvellement du domaine, de l’hébergement et de l’outil de création, ainsi que la date d’expiration de la carte enregistrée.
- Vérifiez le titulaire du domaine, et les adresses et numéros de secours de chaque compte.
- Supprimez les extensions et les intégrations qui ne servent plus.
- Vérifiez que le HTTPS fonctionne sur toutes les versions de votre adresse, avec et sans www.

Si quelqu’un vous a fait votre site gratuitement, cette liste est la partie du cadeau dont personne ne parle : un site s’entretient tant qu’il est en ligne. {{< a key="website-maintenance" >}}Maintenance de site internet : ce qu’elle couvre et ce qu’elle coûte{{< /a >}} détaille qui fait quoi, et à quel prix.

## Quand passer la main

Vous n’avez besoin ni de moi ni de personne pour l’essentiel de ce guide. La double authentification, le renouvellement automatique, une extension de sauvegarde et une liste des accès représentent un après-midi de travail. Faites appel à quelqu’un quand :

- le site est de nouveau infecté après votre nettoyage, signe que la porte d’entrée est toujours ouverte ;
- des données clients ont peut-être fuité et vous devez savoir quoi déclarer ;
- vous ne savez pas qui détient le domaine, ou le prestataire qui le détient a disparu ;
- le site tourne sur un serveur ou un compte auquel vous n’avez pas accès ;
- l’avertissement de Google reste affiché après une demande d’examen.

Quand on me confie un dépannage, je réponds le jour même ou sous 24 heures. La prestation se règle d’avance : je regarde ce qui se passe et je répare, et si je n’y arrive pas, vous recevez un rapport écrit à transmettre à un autre prestataire et je rembourse 70 % de la facture. La récupération des accès d’un site se fait au forfait. Pour les clients que j’accompagne déjà, l’urgence passe d’abord, la facture ensuite.

Un piratage peut aussi être l’occasion de repartir sur de bonnes bases. Quand Eden Flats a fait appel à moi après le sien, j’ai construit un nouveau site, fait le référencement et l’identité visuelle, et des propriétaires ont commencé à appeler pour confier la gestion de leurs biens. {{< a page="/projects/eden-flats" >}}Le projet Eden Flats{{< /a >}} montre le site.
