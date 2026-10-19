---
title: "Votre application créée avec l’IA laisse-t-elle fuiter des données ? Vérifiez Firebase et Supabase"
seo_title: "Sécurité Supabase RLS et règles Firebase : testez votre app"
description: "Sécurité Supabase RLS et règles Firebase : vérifiez si votre app créée avec l’IA laisse n’importe qui lire ses données, puis corrigez avant le lancement."
slug: "securite-supabase-rls"
translationKey: "ai-app-data-leaks"
date: 2026-10-18T22:48:00+02:00
lastmod: 2026-10-18T22:48:00+02:00
category: "mobile-apps"
article_type: "tutorial"
keywords: ["sécurité Supabase RLS", "Supabase row level security", "règles de sécurité Firebase", "Firebase mode test", "sécurité vibe coding", "Lovable Supabase sécurité"]
summary: "Les applications créées avec l’IA interrogent souvent leur base de données depuis le navigateur ou le téléphone, avec une clé lisible par tous dans le code. Chez Supabase, seule la sécurité RLS protège alors vos tables ; chez Firebase, seules les règles de sécurité. Activez RLS sur chaque table avec des politiques réservées au propriétaire, remplacez les règles du mode test, puis testez l’app avec la clé publique, sans connexion, comme un inconnu."
cover: "ai-app-data-leaks"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’une fenêtre de code"
related: ["api-keys-mobile-apps", "mobile-app-security-checklist", "build-app-with-ai", "gdpr-data-breach", "mobile-app-launch-guide"]
services: ["automation"]
faq:
  - q: "Par quoi Supabase remplace-t-il les clés anon et service_role ?"
    a: "Par des clés publishable (sb_publishable_…) pour les applications et des clés secrètes (sb_secret_…) pour les serveurs. Au 19 octobre 2026, la documentation de Supabase annonce l’abandon des anciennes clés d’ici fin 2026, sans date précise ; en attendant, elles fonctionnent tant que vous ne les désactivez pas dans Settings > API Keys."
  - q: "Les règles du mode test de Firebase expirent-elles ?"
    a: "Oui. Le mode test écrit une règle qui contient une date : jusqu’à cette date, n’importe qui peut lire et écraser vos données ; ensuite, toutes les requêtes de votre app sont refusées jusqu’à la publication de nouvelles règles. Aucun de ces deux états ne convient à des données réelles."
  - q: "Firebase App Check remplace-t-il les règles de sécurité ?"
    a: "Non. App Check vérifie que les requêtes viennent bien de votre application, grâce à Play Integrity sur Android, App Attest ou DeviceCheck sur les appareils Apple et reCAPTCHA sur le web. Il ne dit rien de ce qu’un utilisateur de votre vraie application a le droit de lire : cela reste le rôle des règles de sécurité."
  - q: "Supabase ou Firebase : lequel est le plus sûr pour une app créée avec l’IA ?"
    a: "Aucun ne protège mieux vos données par défaut. Les deux sécurisent leur propre infrastructure et vous laissent écrire les règles d’accès : la sécurité RLS de Postgres, en SQL, chez Supabase, un langage de règles dédié chez Firebase. Choisissez celui que votre outil prend en charge et apprenez à lire ses règles."
  - q: "Une base de données ouverte est-elle une violation de données au sens du RGPD ?"
    a: "Elle peut l’être. L’article 4, point 12, du RGPD vise toute violation de la sécurité entraînant, de manière accidentelle ou illicite, la destruction, la perte, l’altération, la divulgation non autorisée de données personnelles ou l’accès non autorisé à ces données. Si vous ne pouvez pas exclure qu’une personne les ait lues, traitez l’incident comme une violation possible : le délai de 72 heures court à partir du moment où vous en avez connaissance, et l’article 33 permet de transmettre les informations en plusieurs fois."
---

Si votre application a été créée avec un outil d’IA et range ses données chez Supabase ou Firebase, la clé qui la relie à la base de données se trouve dans son code, lisible par n’importe qui. C’est voulu. Ce qui tient les inconnus à l’écart de vos tables, c’est la **sécurité Supabase RLS** (Row Level Security, la sécurité au niveau des lignes) ou les **règles de sécurité Firebase**, et un outil d’IA peut laisser les deux grandes ouvertes alors que l’app semble terminée et fonctionne parfaitement.

Ce tutoriel vous montre comment repérer où se trouvent vos données, activer ces protections et tester votre application comme le ferait un inconnu : avec la clé publique et sans connexion. Pas besoin d’être développeur pour ces vérifications, mais il faut lire chaque ligne de SQL ou de règles avant de la coller.

Je développe des logiciels pour mon propre usage, pas pour les vendre : je sais donc à quel point il est satisfaisant d’avoir besoin d’un outil et de le construire soi-même. L’IA a raccourci les délais de livraison ; elle n’a pas raccourci le temps qu’il faut pour vérifier qui peut lire les données. Les noms des menus sont donnés en anglais, comme dans la documentation de Supabase et de Firebase en octobre 2026 (la console Firebase peut les afficher en français). Ce tutoriel fait partie de mon guide pour {{< a key="mobile-app-launch-guide" >}}lancer une application mobile{{< /a >}}.

## Pourquoi les applications créées avec l’IA laissent fuiter des données

La plupart des générateurs d’applications par IA produisent des écrans qui interrogent directement la base de données : les apps de Lovable tournent en général sur Supabase, celles de FlutterFlow souvent sur Firebase. Pour cela, l’application embarque l’adresse du projet et une clé publique, la clé anon de Supabase (remplacée peu à peu par la clé publishable) ou l’`apiKey` de votre configuration Firebase. N’importe qui peut les lire dans le code d’une page web, ou les extraire d’une application mobile avec des outils gratuits : c’est pourquoi mon guide sur les {{< a key="api-keys-mobile-apps" >}}clés API dans une application mobile{{< /a >}} considère toute clé embarquée comme publique.

Les deux plateformes l’ont prévu. La documentation de Firebase précise que ses clés API identifient votre projet et ne contrôlent pas l’accès à vos données : c’est le rôle des règles de sécurité. La sécurité RLS en est l’équivalent chez Supabase, une fonction de Postgres qui vérifie chaque requête, ligne par ligne, selon des politiques (policies) attachées à chaque table. Sans règles, ou avec des règles qui disent oui à tout le monde, la clé ouvre tout.

Deux cas documentés :

- **Les apps Lovable, 2025.** Un chercheur a analysé 1 645 applications de la vitrine publique de Lovable et en a trouvé 170 qui laissaient des inconnus lire des données comme des adresses email, et parfois des clés API, parce que leur sécurité RLS manquait ou était trop faible. Le cas est enregistré sous la référence [CVE-2025-48757](https://nvd.nist.gov/vuln/detail/CVE-2025-48757), que Lovable conteste : selon l’éditeur, chaque client doit protéger les données de sa propre application.
- **Tea, juillet 2025.** Cette application américaine de sécurité pour les rencontres a indiqué qu’environ 72 000 images avaient été consultées sans autorisation, dont des selfies et des pièces d’identité envoyés par les utilisatrices pour vérifier leur compte ([TechCrunch](https://techcrunch.com/2025/07/26/dating-safety-app-tea-breached-exposing-72000-user-images/), en anglais). Tea a parlé d’un « ancien système de stockage de données » ; selon les premiers articles, sans confirmation de Tea, les fichiers se trouvaient dans un espace de stockage Firebase accessible sans connexion. Tea n’a pas été présentée comme une app créée avec l’IA : le stockage ouvert est une erreur plus ancienne que le vibe coding.

Quel que soit le responsable, c’est à vous de corriger. Mon guide pour {{< a key="build-app-with-ai" >}}créer une application avec l’IA{{< /a >}} détaille ce que vous pouvez raisonnablement faire vous-même ; ce tutoriel sert au moment où de vraies données arrivent.

## Étape 1 : repérer où votre application range ses données

Les outils d’IA créent des tables au fil de l’eau : commencez par un petit inventaire.

1. **Identifiez la plateforme.** Ouvrez votre application dans un navigateur, puis les outils de développement (F12 dans Chrome sous Windows), choisissez l’onglet **Réseau** (Network) et utilisez l’app une minute. Des requêtes vers une adresse en supabase.co signalent Supabase ; vers firestore.googleapis.com ou firebasestorage.googleapis.com, Firebase. Pour une app installée sur téléphone, les réglages de votre outil l’indiquent.
2. **Listez chaque table ou collection**, et chaque bucket de stockage qui contient des photos, des PDF ou des scans. Chez Supabase, le Table Editor et la page Storage les affichent ; chez Firebase, les pages Firestore Database et Storage de la console.
3. **Décidez qui doit lire chacune.** Une simple grille suffit :

| Quoi | Exemples | Qui doit pouvoir le lire |
|---|---|---|
| Contenu public | prestations, tarifs, horaires | Tout le monde |
| Données personnelles | profils, demandes de devis, réservations | La personne concernée (et votre équipe) |
| Fichiers | pièces d’identité, factures, photos | Le propriétaire du fichier |
| Données internes | notes, exports | Votre serveur uniquement |

Ce qui figure dans la ligne « Tout le monde » doit être public par choix, pas par accident. Tout le reste a besoin d’une règle. Si votre application a des comptes équipe et des comptes clients, l’accès de l’équipe demande en plus une vérification de rôle : écrivez cette partie avec un développeur.

## Étape 2 : la sécurité Supabase RLS, table par table

Chez Supabase, RLS est un interrupteur sur chaque table, complété par des politiques qui disent qui peut faire quoi. Le réglage par défaut piège beaucoup de monde : d’après la documentation de Supabase, les tables créées dans le Table Editor du tableau de bord ont RLS activé, tandis que pour celles créées dans le SQL Editor ou par un autre outil, il faut l’activer explicitement. Un outil d’IA qui crée ses tables en SQL tombe dans le second cas. Une fois RLS activé, la clé publique ne lit plus rien tant qu’une politique ne l’autorise pas.

Ouvrez le **SQL Editor** de votre projet et lancez cette requête, qui ne modifie rien :

```sql
-- Quelles tables du schéma public ont RLS désactivé ?
select tablename, rowsecurity
from pg_tables
where schemaname = 'public'
order by rowsecurity, tablename;
```

Chaque ligne à `false` est une table protégée seulement par ses droits d’accès (grants). Supabase a longtemps donné aux rôles anonyme et connecté de l’API des droits sur chaque nouvelle table du schéma public : sur la plupart des projets, une telle table est donc lisible et modifiable par quiconque détient votre clé publique. Sur les projets créés depuis le 30 mai 2026, les nouvelles tables ne reçoivent plus ces droits par défaut ; les projets plus anciens doivent suivre le 30 octobre 2026, et les tables existantes gardent les leurs. Listez ensuite les politiques existantes :

```sql
select tablename, policyname, cmd, roles, qual, with_check
from pg_policies
where schemaname = 'public';
```

Une politique dont la condition vaut simplement `true` laisse entrer tous ceux qu’elle vise. Une politique qui vérifie seulement que l’utilisateur est connecté ne vaut guère mieux si n’importe qui peut créer un compte dans votre application.

{{< screenshot id="ai-app-data-leaks-01" alt="L’éditeur SQL de Supabase listant les tables publiques avec leur valeur rowsecurity, dont une à false" >}}

Pour corriger une table de données personnelles, ici une table `devis` dont la colonne `user_id` contient l’identifiant du compte propriétaire de chaque ligne :

```sql
-- 1. Activer RLS : désormais, rien ne passe sans politique
alter table public.devis enable row level security;

-- 2. Un utilisateur connecté ne lit que ses propres lignes
create policy "Lecture de ses propres devis"
on public.devis for select
to authenticated
using ( (select auth.uid()) = user_id );

-- 3. Il ne peut créer que des lignes qui lui appartiennent
create policy "Création de ses propres devis"
on public.devis for insert
to authenticated
with check ( (select auth.uid()) = user_id );

-- 4. Il peut modifier ses lignes, sans les attribuer à quelqu'un d'autre
create policy "Modification de ses propres devis"
on public.devis for update
to authenticated
using ( (select auth.uid()) = user_id )
with check ( (select auth.uid()) = user_id );
```

`auth.uid()` renvoie l’identifiant de l’utilisateur connecté qui fait la requête ; l’écrire sous la forme `(select ...)` est ce que Supabase recommande pour de meilleures performances. Sans politique de suppression, personne ne peut supprimer un devis depuis l’application : n’en ajoutez une que si vous en avez besoin.

{{< screenshot id="ai-app-data-leaks-02" alt="Les politiques d’une table Supabase : select, insert et update, chacune limitée au propriétaire de la ligne" >}}

Une table que votre application ne lit jamais directement, comme des notes écrites uniquement par votre serveur, doit avoir RLS activé sans aucune politique ; vous pouvez aussi lui retirer tout accès public : `revoke all on public.notes_internes from anon, authenticated;`. Ouvrez ensuite le **Security Advisor** de votre projet. Il signale entre autres les tables sans RLS (« RLS Disabled in Public »), et Supabase envoie des emails aux propriétaires des projets concernés : si l’un d’eux attend dans votre boîte de réception, commencez par là. Le [guide de Supabase sur la sécurité RLS](https://supabase.com/docs/guides/database/postgres/row-level-security) (en anglais) donne d’autres exemples de politiques.

{{< screenshot id="ai-app-data-leaks-03" alt="Le Security Advisor de Supabase affichant un avertissement RLS Disabled in Public pour une table" >}}

## Étape 3 : verrouiller le stockage Supabase et garder la clé secrète hors de l’app

Les fichiers sont rangés dans des buckets de stockage, avec leurs propres règles d’accès. Dans un **bucket public**, chaque fichier est accessible à quiconque en connaît l’adresse : très bien pour des photos de produits, pas pour des pièces d’identité ou des factures. Rangez les fichiers personnels dans un bucket privé, où chaque lecture et chaque envoi passent par des politiques sur la table `storage.objects`. Une méthode courante range les fichiers de chaque utilisateur dans un dossier qui porte son identifiant :

```sql
-- Bucket privé 'documents' : chaque utilisateur ne lit que les fichiers
-- du dossier qui porte son propre identifiant
create policy "Lecture de ses propres fichiers"
on storage.objects for select
to authenticated
using (
  bucket_id = 'documents'
  and (storage.foldername(name))[1] = (select auth.uid()::text)
);
```

Les envois demandent une politique insert avec la même condition, écrite avec `with check`. Vérifiez ensuite les clés : la clé anon ou publishable peut figurer dans votre application, la clé service_role ou secrète jamais. Cette clé contourne complètement la sécurité RLS : sa place est sur un serveur ou dans une Edge Function, nulle part ailleurs.

{{< callout type="warning" >}}Cherchez `service_role` et `sb_secret_` dans le code de votre application et dans les variables d’environnement de votre outil. Dans un projet Vite ou Next.js, toute variable dont le nom commence par `VITE_` ou `NEXT_PUBLIC_` peut finir dans le navigateur. Une clé secrète qui a été publiée dans une app ou dans un dépôt public est compromise : remplacez-la dans **Settings > API Keys** en créant une nouvelle clé secrète et en supprimant l’ancienne (avec les anciennes clés, passez aux nouvelles, puis désactivez les anciennes). Effacer la ligne de votre code ne suffit pas.{{< /callout >}}

## Étape 4 : remplacer le mode test de Firebase par des règles fermées par défaut

Quand vous créez une base Cloud Firestore, Firebase vous fait choisir entre le mode verrouillé (Locked mode) et le mode test (Test mode), dont il précise lui-même qu’il permet à n’importe qui de lire et d’écraser vos données. Outils et tutoriels le choisissent souvent, car tout fonctionne d’emblée.

Dans la console Firebase, ouvrez **Firestore Database**, puis l’onglet **Rules**, et cherchez ces lignes :

- `allow read, write: if true;` ouvre la base à tout Internet.
- `allow read, write: if request.time < timestamp.date(...)` est ce qu’écrit le mode test : ouvert à tous jusqu’à cette date.
- `allow read, write: if request.auth != null;` laisse entrer toute personne connectée, donc, dans la plupart des applications, quiconque crée un compte.

Remplacez-les par des règles qui refusent tout par défaut et ne donnent à chaque utilisateur accès qu’à ses propres documents :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Un devis ne peut être lu, modifié ou supprimé que par son propriétaire
    match /devis/{devisId} {
      allow read, delete: if request.auth != null
        && request.auth.uid == resource.data.ownerId;
      allow create: if request.auth != null
        && request.auth.uid == request.resource.data.ownerId;
      allow update: if request.auth != null
        && request.auth.uid == resource.data.ownerId
        && request.resource.data.ownerId == resource.data.ownerId;
    }
    // Aucun autre bloc match : tout autre chemin est refusé
  }
}
```

{{< callout type="tip" >}}Les règles ne sont pas des filtres. Une fois ces règles en place, les requêtes de votre application ne doivent demander que les documents de l’utilisateur (un `where` sur `ownerId`), sinon Firestore refuse toute la requête. Si un écran casse à ce moment-là, corrigez la requête, pas les règles.{{< /callout >}}

Storage a son propre onglet **Rules**, avec les mêmes pièges. Pour des fichiers rangés dans un dossier par utilisateur :

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Les fichiers sous users/<uid>/ n'appartiennent qu'à cet utilisateur
    match /users/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null
        && request.auth.uid == userId;
    }
  }
}
```

Si le projet utilise aussi la Realtime Database, ses règles s’écrivent en JSON, et un `".read": true` ou un `".write": true` au premier niveau ouvre la même porte.

{{< screenshot id="ai-app-data-leaks-04" alt="L’onglet Rules de Cloud Firestore dans la console Firebase, avec des règles fermées par défaut pour une collection devis" >}}

Avant de publier, ouvrez le **Rules playground** depuis l’onglet Rules. Choisissez une opération, le chemin d’un document et l’état de connexion, puis lancez la simulation : la lecture du devis de quelqu’un d’autre, sans connexion ou avec un autre compte, doit être refusée. Le playground teste les règles de l’éditeur, pas celles déjà déployées, et Firebase prévient qu’une modification publiée peut mettre plusieurs minutes à s’appliquer partout. Pour des tests à refaire après chaque changement, la Firebase Local Emulator Suite exécute vos règles sur votre propre ordinateur. La page de Firebase sur les [règles non sécurisées](https://firebase.google.com/docs/rules/insecure-rules?hl=fr) liste d’autres erreurs à éviter.

{{< screenshot id="ai-app-data-leaks-05" alt="Le Rules playground de Firebase montrant une lecture sans connexion du devis d’un autre utilisateur, refusée" >}}

## Étape 5 : tester votre application comme le ferait un inconnu

Une application qui fonctionne ne prouve rien : elle fonctionnerait tout aussi bien sans aucune règle. Le test qui compte, c’est ce qu’obtient un inconnu avec votre seule clé publique. Pour Supabase, prenez l’adresse de votre projet (celle en supabase.co repérée dans l’onglet Réseau) et votre clé publishable ou anon dans **Settings > API Keys**, puis lancez ceci dans un terminal, pour chaque table :

```bash
curl "https://VOTRE-PROJET.supabase.co/rest/v1/devis?select=*" \
  -H "apikey: VOTRE-CLE-PUBLISHABLE"
```

Trois réponses possibles :

- `[]`, une liste vide : RLS est activé et aucune politique ne laisse entrer un visiteur anonyme. C’est ce que vous voulez pour des données personnelles.
- Une erreur du type « permission denied for table devis » : la table est entièrement fermée aux visiteurs anonymes. Très bien aussi.
- Des lignes de vraies données : n’importe qui sur Internet peut lire cette table. Sauf si elle relève de votre ligne « Tout le monde », corrigez-la avant toute autre chose.

{{< screenshot id="ai-app-data-leaks-06" alt="Un terminal montrant la requête curl avec la clé publishable et la liste vide renvoyée par Supabase" >}}

Pour Firebase, le Rules playground et l’émulateur font ce travail. Ensuite, sur les deux plateformes, faites un test à deux comptes dans l’application elle-même : créez deux utilisateurs de test et vérifiez qu’aucun des deux ne voit jamais les devis, les fichiers ou le profil de l’autre.

## Étape 6 : retester après chaque modification faite par l’IA

Chaque nouvelle fonctionnalité demandée peut créer une table, ajouter un bucket ou réécrire une politique, et l’outil vise un écran qui fonctionne, pas un écran sûr. Trois habitudes aident :

1. **Donnez à l’outil une consigne permanente**, dans les instructions du projet ou en tête de chaque demande : chaque nouvelle table reçoit RLS et des politiques réservées au propriétaire, les fichiers personnels vont dans des buckets privés, et la clé service_role ou secrète n’apparaît jamais dans le code de l’application.
2. **Refusez la solution de facilité.** Quand une liste devient vide après l’activation de RLS, la suggestion la plus rapide consiste souvent à le désactiver ou à ajouter une politique `using (true)`. Une liste vide signifie qu’il manque une politique : demandez cette politique. De même, « permission denied » sur une nouvelle table appelle des droits pour le seul rôle concerné, pas pour tout le monde.
3. **Refaites les étapes 2 et 5**, ainsi que le Security Advisor, avant chaque mise en ligne. La documentation de Supabase décrit aussi un déclencheur d’événement Postgres (event trigger) qui active RLS automatiquement sur chaque nouvelle table du schéma public, quel que soit l’outil qui la crée ; il ne touche pas aux tables existantes.

## Vous trouvez une table ouverte : que faire

1. **Fermez-la tout de suite** : activez RLS ou resserrez les règles, même si une partie de l’application cesse de fonctionner un moment. Un écran cassé coûte moins cher qu’une table ouverte.
2. **Remplacez toute clé qui a fuité**, comme indiqué à l’étape 3.
3. **Consultez vos journaux (logs)** à la recherche de requêtes que vous ne reconnaissez pas. Supabase conserve les logs de l’API pendant une durée limitée qui dépend de votre offre : regardez-les sans attendre.
4. **Notez ce qui s’est passé** : ce qui a été exposé, depuis quand, pour combien de personnes, et ce que vous avez changé.

Si la table contenait des données personnelles et que votre application s’adresse à des personnes situées dans l’UE, le RGPD s’applique, que votre entreprise soit à Lyon, à Genève ou à Casablanca (article 3). L’article 33 vous impose de notifier l’autorité de contrôle, la CNIL en France, dans les 72 heures après avoir pris connaissance de la violation, sauf si elle est peu susceptible d’engendrer un risque pour les personnes, et l’article 34 ajoute l’information des personnes concernées quand le risque est élevé. Mon guide sur la {{< a key="gdpr-data-breach" >}}violation de données dans les 72 heures{{< /a >}} détaille cette décision. Ceci est une information générale, pas un conseil juridique : si des données de vrais clients ont été exposées, un avocat ou votre délégué à la protection des données (DPO) vous aidera à décider s’il faut notifier.

## Avant le lancement : la checklist, et quand passer la main

- RLS activé sur chaque table du schéma public, avec des politiques réservées au propriétaire partout où se trouvent des données personnelles
- Aucune politique `true` et aucune règle qui vérifie seulement la connexion sur des données personnelles
- Les fichiers personnels dans des buckets privés
- Seule la clé publishable ou anon dans l’application ; les clés secrètes et service_role sur un serveur, et dans aucun dépôt
- Les règles du mode test de Firebase remplacées et vérifiées dans le Rules playground
- Le test de l’inconnu réussi pour chaque table

Passez la main à un développeur quand l’application stocke des données de santé, financières ou d’identité, encaisse des paiements, donne des droits différents à votre équipe et à vos clients, ou quand vous ne savez pas lire une politique et dire ce qu’elle fait. Avant un lancement avec ce type de données, un test d’intrusion par un prestataire qualifié PASSI par l’ANSSI vaut son prix. Le reste des vérifications avant lancement se trouve dans ma {{< a key="mobile-app-security-checklist" >}}checklist de sécurité d’une application mobile{{< /a >}}.
