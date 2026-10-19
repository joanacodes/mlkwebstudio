---
title: "Départ d’un salarié ou d’un freelance : la checklist pour fermer tous les accès"
seo_title: "Checklist départ salarié : fermer les accès informatiques"
description: "Checklist départ salarié : tous les accès informatiques à fermer avant, pendant et après le dernier jour (email, fichiers, mots de passe), freelances inclus."
slug: "checklist-depart-salarie-acces-informatique"
translationKey: "offboarding-checklist"
date: 2026-10-18T22:00:00+02:00
lastmod: 2026-10-18T22:00:00+02:00
category: "cybersecurity"
article_type: "tutorial"
keywords: ["checklist départ salarié accès informatique", "départ salarié accès informatiques", "procédure départ salarié informatique", "fin de mission freelance accès", "boîte mail salarié parti", "offboarding"]
summary: "Fermez les accès d’un salarié qui part en trois temps. Avant le dernier jour, listez ses comptes, appareils et codes et organisez la reprise de ses fichiers et emails ; le jour J, suspendez son compte sans le supprimer, changez les mots de passe partagés et retirez-le des autres services ; ensuite, renouvelez les clés d’API, vérifiez les règles de transfert et supprimez ses données à l’échéance. Pour un freelance, prévoyez la fin des accès dès le premier jour."
cover: "offboarding-checklist"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé au-dessus d’une photo, avec des boîtes reliées dans un schéma de flux"
related: ["password-manager-teams", "secure-google-workspace-microsoft-365", "two-factor-authentication-passkeys", "regain-website-access", "recover-domain-name"]
services: ["rescue"]
faq:
  - q: "Combien de temps peut-on restaurer un compte utilisateur supprimé ?"
    a: "Dans Google Workspace, un administrateur peut restaurer un utilisateur supprimé pendant 20 jours au plus. Dans Microsoft 365, il reste restaurable environ 30 jours, et ses fichiers OneDrive restent accessibles 30 jours par défaut. Au-delà, considérez que les données sont perdues."
  - q: "Un utilisateur suspendu dans Google Workspace est-il encore facturé ?"
    a: "Oui : Google continue de facturer un utilisateur suspendu. Avec le forfait Flexible, supprimer l’utilisateur réduit la facture au prorata ; avec un forfait annuel ou à durée déterminée, la suppression ne réduit pas le nombre de licences payées. Pour conserver les données d’un ancien salarié à moindre coût, Google propose une licence Archived User (utilisateur archivé)."
  - q: "Peut-on lire les emails d’un salarié qui est parti ?"
    a: "Selon la CNIL, les messages professionnels restent consultables par l’employeur. En revanche, un message clairement identifié comme personnel (« Personnel » ou « Privé » dans l’objet, par exemple) relève du secret des correspondances : l’employeur ne doit pas l’ouvrir. Fixez ces règles à l’avance dans votre charte informatique."
  - q: "Que faire si un ancien salarié ou un freelance refuse de rendre un accès ?"
    a: "Demandez au service concerné de rendre le compte à l’entreprise, preuves à l’appui (factures, documents de la société). Beaucoup de fournisseurs ont une procédure : Squarespace, par exemple, vérifie l’identité du demandeur quand le propriétaire d’un site ou d’un domaine n’est plus joignable. Gardez une trace écrite de chaque demande, et consultez un avocat si la personne revendique le compte."
  - q: "Qui doit gérer les départs dans une petite équipe ?"
    a: "Le dirigeant ou un administrateur désigné, avec un second administrateur en secours, pour que rien ne dépende d’une seule personne. Gardez la checklist dans un document partagé et ajoutez chaque nouvel outil au registre des accès le jour où vous vous y inscrivez."
---

Quand une personne quitte l’entreprise, ses accès, eux, restent. Son compte de messagerie, les mots de passe partagés qu’elle connaissait et les applications qu’elle a connectées fonctionnent tant que personne ne les ferme, et son téléphone reçoit peut-être encore les codes de votre banque. Voici la checklist de départ d’un salarié pour fermer ses accès informatiques en trois temps : avant le dernier jour, le jour J et dans les semaines qui suivent. Elle vaut aussi pour un freelance ou une agence en fin de mission.

Récupérer l’accès à un site auprès de quelqu’un qui garde les identifiants fait partie des prestations à prix fixe que je propose. Fermer les accès pendant que la personne est encore là pour rendre les clés va beaucoup plus vite.

Ce tutoriel fait partie de mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité pour les petites équipes{{< /a >}}. Les exemples portent sur Google Workspace et Microsoft 365, mais l’ordre des étapes vaut pour tous les outils.

## Avant le dernier jour : listez tous les accès

Dans sa fiche [« Gérer les habilitations »](https://www.cnil.fr/fr/securite-gerer-les-habilitations), la CNIL demande de supprimer les permissions d’un utilisateur dès qu’il n’est plus habilité, par exemple à la fin de son contrat. Pour savoir quoi fermer, commencez par un registre des accès, construit à partir de cinq sources :

| Où chercher | Ce que vous y trouvez |
|---|---|
| La console d’administration du gestionnaire de mots de passe | Les coffres ou collections partagés que la personne peut ouvrir |
| La console Google Workspace ou Microsoft 365 | Son compte, ses rôles d’administrateur, ses groupes, ses appareils et ses applications connectées |
| Sa boîte mail : cherchez « bienvenue », « confirmez votre adresse » et « facture » | Les services ouverts avec son adresse professionnelle |
| La banque, les cartes et les outils de paiement | Qui peut payer, valider un virement ou consulter les comptes |
| La personne elle-même | Tout le reste : demandez-lui de l’écrire avant son départ |

Ajoutez le physique : clés, badges, digicode et code d’alarme, ordinateur et téléphone de l’entreprise, clés de sécurité.

Vérifiez ensuite la propriété, pas seulement l’accès. Si la personne est seule propriétaire ou administratrice d’un compte (le nom de domaine chez le registrar, l’outil de création du site, la fiche Google Business Profile, les comptes publicitaires, la console Google Workspace elle-même), désignez un autre propriétaire maintenant, tant qu’elle peut encore le faire. Sur Squarespace, par exemple, seul le propriétaire actuel peut transférer un site, et Google recommande plusieurs super-administrateurs, chacun tenu par une personne différente. Si le nom de domaine est à son nom ou dans son compte personnel, transférez-le d’abord à l’entreprise : mon guide pour {{< a key="recover-domain-name" >}}récupérer un nom de domaine{{< /a >}} montre ce que cela implique une fois la personne partie.

## Avant le dernier jour : organisez la reprise des fichiers et des emails

Les fichiers et les messages professionnels appartiennent à l’entreprise. Déplacez-les avant de couper les accès, pas après.

**Les fichiers.** Dans Google Workspace, les fichiers des drives partagés appartiennent déjà à l’équipe et restent en place. Ceux que la personne possède dans son propre Drive peuvent être transférés à un collègue par un administrateur, avant ou pendant la suppression du compte. Le contenu de sa corbeille n’est pas transféré : restaurez d’abord ce qui compte. Dans Microsoft 365, donnez au responsable l’accès au OneDrive de la personne (Microsoft le fait depuis le centre d’administration SharePoint) ou copiez les fichiers dans une bibliothèque partagée.

**La messagerie.** La CNIL fixe deux règles dans sa réponse sur [les précautions avant de fermer le compte d’un employé](https://www.cnil.fr/fr/cnil-direct/question/messagerie-professionnelle-quelles-precautions-avant-de-fermer-le-compte-dun) : prévenez le salarié de la date de fermeture de sa messagerie, pour qu’il fasse le tri et transfère ses messages privés vers son adresse personnelle ; une fois qu’il est parti, supprimez son adresse nominative.

Pour garder les messages professionnels utiles, Microsoft 365 permet de convertir la boîte en boîte aux lettres partagée : les emails et l’agenda restent, plusieurs collègues peuvent les consulter, et elle ne demande pas de licence tant qu’elle pèse moins de 50 Go (le compte utilisateur reste alors en place, car la boîte partagée en dépend). Dans Google Workspace, un compte suspendu garde ses emails et ses fichiers le temps que vous décidiez. Une boîte conservée pour l’historique n’a pas besoin de garder l’adresse nominative active.

Prévenez aussi clients et fournisseurs du nouveau contact avant le dernier jour, et utilisez des adresses génériques (contact@, compta@) pour tout ce qui doit survivre au départ d’une personne.

## Le jour J : fermez les accès dans cet ordre

Coupez les accès à la fin du dernier jour de travail, pas la semaine suivante. Prévoyez une heure et suivez la liste.

1. **Suspendez le compte, ne le supprimez pas encore.** Dans Google Workspace, la suspension bloque l’accès, conserve les données et réinitialise les cookies de connexion et les jetons OAuth (les autorisations données aux applications). Dans Microsoft 365, bloquez la connexion : selon [le guide de Microsoft sur le départ d’un employé](https://learn.microsoft.com/fr-fr/microsoft-365/admin/add-users/remove-former-employee), cela met fin à la session en cours et bloque les suivantes, alors qu’une simple réinitialisation du mot de passe ne ferme pas forcément une session déjà ouverte.
2. **Fermez ce que la suspension laisse ouvert.** Supprimez les clés de sécurité et révoquez les mots de passe d’application enregistrés sur le compte : la [page de Google sur la sécurité des données après un départ](https://knowledge.workspace.google.com/admin/users/maintain-data-security-after-an-employee-leaves?hl=fr) cite les deux. Les services ouverts avec « Se connecter avec Google » ou « Se connecter avec Microsoft » refuseront le compte suspendu, mais retirez quand même la personne de chacun : une session déjà ouverte dans une application peut rester active un moment.
3. **Retirez la personne du gestionnaire de mots de passe, puis changez les mots de passe partagés qu’elle a pu voir.** Commencez par le compte administrateur de la messagerie, la banque, le registrar et le site, et déplacez les codes de double authentification qui arrivent encore sur son téléphone. Mon comparatif des {{< a key="password-manager-teams" >}}gestionnaires de mots de passe d’équipe{{< /a >}} montre comment chacun gère un départ, et mon guide de la {{< a key="two-factor-authentication-passkeys" >}}double authentification{{< /a >}} comment ajouter une seconde méthode à un compte partagé.
4. **Retirez-la partout ailleurs.** Hébergement, outil de création du site, réseaux sociaux et comptes publicitaires, banque en ligne (accès et délégations), outils de paiement, logiciel de comptabilité, portails clients, groupes WhatsApp et Slack. Résiliez sa carte bancaire professionnelle.
5. **Récupérez et effacez les appareils.** Ordinateur, téléphone, clés de sécurité, badges et clés ; changez ensuite le digicode et le code d’alarme. Tous les forfaits Microsoft 365 pour les entreprises incluent Basic Mobility and Security, qui peut effacer les appareils inscrits. Sur un téléphone personnel, supprimez le compte professionnel et ses applications, pas les photos de la personne. Mon guide sur {{< a key="device-security-basics" >}}les ordinateurs et téléphones sans service informatique{{< /a >}} explique comment les préparer.

{{< callout type="warning" >}}**Un départ conflictuel change deux choses.** Gardez le compte suspendu plutôt que supprimé : ses emails, ses fichiers et ses journaux pourront servir. Et si la personne est partie avec des données personnelles, un fichier clients par exemple, il peut s’agir d’une violation de données : l’article 33 du RGPD vous laisse 72 heures, à partir du moment où vous en avez connaissance, pour la notifier à la CNIL, sauf si elle n’entraîne pas de risque pour les personnes concernées. Ceci est une information générale, pas un conseil juridique : dans les deux cas, l’avis d’un avocat en droit du travail ou en protection des données mérite un appel.{{< /callout >}}

## Les semaines suivantes : le ménage qu’on oublie facilement

- **Renouvelez les clés et les jetons.** Clés d’API, webhooks et jetons d’intégration que la personne a créés ou vus : sur le site, chez le prestataire de paiement, dans les outils d’automatisation. Certains services lient les clés à une personne : la console Claude d’Anthropic, par exemple, indique que les clés d’API personnelles cessent de fonctionner quand leur propriétaire quitte l’organisation, et recommande des clés de compte de service pour tout ce qui est partagé.
- **Vérifiez les règles de transfert et de tri** de sa boîte et des boîtes partagées qu’elle utilisait : une règle qui copie les emails vers une adresse personnelle est la fuite la plus discrète qui soit. Microsoft 365 permet aussi de bloquer tout transfert automatique vers l’extérieur pour toute l’organisation.
- **Vérifiez les informations de récupération** des comptes partagés : si l’email ou le numéro de secours est celui de la personne, une réinitialisation de mot de passe partira directement chez elle.
- **Revoyez les partages externes** (adresses extérieures, partage par lien) et resserrez-les une fois les fichiers transférés.
- **Supprimez le compte une fois ses données à l’abri**, sauf si une boîte partagée en dépend.
- **Supprimez ses données personnelles à l’échéance.** Gardez ce que la loi impose, comme les éléments de paie, et supprimez le reste à la fin de sa durée de conservation. L’article 5.1.e du RGPD (limitation de la conservation) ne fixe pas de durée : c’est à vous de les définir, de les justifier et de les écrire.
- **Revoyez les accès au moins une fois par an**, comme le demande la CNIL.

## Freelances et agences : prévoyez la sortie dès le premier jour

Un freelance part à une date connue d’avance : tout est simple si vous l’anticipez dès son arrivée.

- Invitez-le avec sa propre adresse, comme invité, contributeur ou collaborateur, jamais avec une copie de vos identifiants. Le retirer prendra un clic.
- Donnez-lui le rôle le plus limité possible, avec une date de fin quand l’outil le permet, et notez la fin de mission dans votre agenda avec « fermer les accès » à côté.
- Gardez le nom de domaine, l’hébergement et le site au nom de l’entreprise, même quand l’agence gère les factures. Mon guide pour {{< a key="regain-website-access" >}}récupérer son site internet{{< /a >}} montre ce qui arrive sinon.
- Prévoyez dans le contrat la restitution des identifiants, des fichiers, du code et de la documentation (la clause de réversibilité, dans le jargon).

Un prestataire a besoin d’accès pour travailler. Pour construire une automatisation, j’ai besoin d’accéder à la boîte mail d’un client, par exemple. C’est normal ; ce qui compte, c’est que cet accès passe par un compte que vous contrôlez et pouvez fermer.

## Votre checklist départ salarié : les accès informatiques sur une page

Copiez-la dans vos notes et adaptez-la à vos outils.

### Avant le dernier jour

- Lister les comptes, appareils, cartes et codes de la personne
- Transférer la propriété des domaines, sites, pages et rôles d’administrateur qu’elle détient seule
- Transférer ses fichiers et décider du sort de sa messagerie
- Prévenir clients et fournisseurs du nouveau contact

### Le jour J

- Suspendre le compte professionnel ou bloquer sa connexion
- Révoquer les mots de passe d’application et retirer les clés de sécurité
- La retirer du gestionnaire de mots de passe et changer les mots de passe partagés qu’elle connaissait
- La retirer des autres services, des groupes de discussion et des accès bancaires
- Récupérer et effacer les appareils ; changer le digicode et le code d’alarme

### Les semaines suivantes

- Renouveler les clés d’API et les jetons
- Vérifier les règles de transfert, les informations de récupération et les partages externes
- Supprimer le compte, puis ses données personnelles à l’échéance

Pas besoin d’un service informatique pour cela : la personne qui détient les accès administrateur peut tout faire en un après-midi. Si les {{< a key="secure-google-workspace-microsoft-365" >}}réglages d’administration de Google Workspace ou de Microsoft 365{{< /a >}} n’ont jamais été revus, occupez-vous-en ensuite : le prochain départ sera plus court.
