---
title: "Sécurité d’une application mobile : la checklist avant lancement (OWASP MASVS simplifié)"
seo_title: "Sécurité application mobile : la checklist avant lancement"
description: "Sécurité application mobile : la checklist à suivre avant le lancement, d’après l’OWASP MASVS. Clés API, serveur, jetons, TLS, SDK et version publiée."
slug: "securite-application-mobile"
translationKey: "mobile-app-security-checklist"
date: 2026-10-18T22:45:00+02:00
lastmod: 2026-10-18T22:45:00+02:00
category: "mobile-apps"
article_type: "guide"
keywords: ["sécurité application mobile", "checklist sécurité application mobile", "OWASP MASVS", "OWASP Mobile Top 10", "test d’intrusion application mobile", "MobSF"]
summary: "Avant le lancement, vérifiez que l’application ne contient aucune clé secrète, que le serveur contrôle les droits à chaque requête, que les jetons sont rangés dans le trousseau d’iOS ou l’Android Keystore et que tout le trafic passe en TLS. Auditez ensuite vos SDK, sortez les données personnelles des journaux et publiez un moyen de signaler une faille. Un test d’intrusion payant se justifie dès que l’app traite des données de santé ou financières."
cover: "mobile-app-security-checklist"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant la photo d’un cadenas"
related: ["api-keys-mobile-apps", "ai-app-data-leaks", "cyber-resilience-act-apps", "app-privacy-labels", "mobile-app-launch-guide"]
services: ["automation"]
faq:
  - q: "Quelle différence entre l’OWASP MASVS et l’OWASP Mobile Top 10 ?"
    a: "Le Mobile Top 10, mis à jour en 2024, classe dix grandes familles de risques, comme la mauvaise gestion des identifiants ou le stockage non sécurisé des données, pour sensibiliser. Le MASVS est la norme sur laquelle on construit et on teste une app : 24 exigences réparties en huit groupes, chacune assez précise pour être vérifiée."
  - q: "Faut-il bloquer les téléphones rootés ou jailbreakés ?"
    a: "En général, non. La détection du root ou du jailbreak se contourne, et bloquer ces téléphones écarte surtout des utilisateurs légitimes. Si le risque le justifie, comme pour une banque, laissez votre serveur tenir compte du verdict de Play Integrity ou d’App Attest et limitez les actions sensibles plutôt que d’empêcher l’ouverture de l’app."
  - q: "Apple et Google vérifient-ils la sécurité de mon app lors de la validation ?"
    a: "En partie seulement. La validation porte sur l’app soumise et sur ce que vous déclarez ; elle ne teste pas votre serveur, si bien qu’une API qui renvoie les données d’autres utilisateurs peut passer sans encombre. Les contrôles de cette liste restent votre travail, ou celui de votre développeur."
  - q: "À quelle fréquence refaire cette checklist ?"
    a: "Avant chaque version majeure, et dès que vous ajoutez un SDK, un mode de connexion ou un nouveau type de données personnelles. Une fois par an, revoyez aussi vos dépendances et les plus anciennes versions d’iOS et d’Android prises en charge : les deux vieillissent sans que vous changiez quoi que ce soit."
  - q: "Une application créée avec l’IA est-elle moins sûre ?"
    a: "Pas par nature. Mais les outils de création d’apps par IA relient souvent l’app directement à une base de données, avec une clé lisible par tous : les règles de la base deviennent alors la seule protection. Vérifiez-les avant le lancement et demandez à l’outil où chaque clé est stockée."
---

La plupart des applications qui laissent fuiter des données ne sont pas forcées par des pirates de génie. Elles embarquent une clé que n’importe qui peut extraire, ou elles s’adressent à un serveur qui croit tout ce que l’app lui envoie. Cette checklist pour la sécurité de votre application mobile ferme d’abord ces deux portes, puis passe en revue ce que la norme mobile de l’OWASP, le MASVS, attend avant une publication.

Je construis des applications de bout en bout, des écrans jusqu’au serveur, et c’est le serveur que je surveillerais de plus près : l’app n’est qu’une fenêtre sur vos données, c’est le serveur qui décide qui peut regarder.

La liste s’adresse aux dirigeants de petites équipes qui font développer une application par un développeur, une agence ou un outil d’IA. Pas besoin de lire du code : la dernière partie transforme chaque point en question à poser à la personne qui la construit. C’est le volet sécurité de mon {{< a key="mobile-app-launch-guide" >}}guide pour lancer une application mobile{{< /a >}}.

## L’OWASP MASVS en clair

L’OWASP (Open Worldwide Application Security Project) est une fondation à but non lucratif qui publie des référentiels de sécurité gratuits. Son [Mobile Application Security Verification Standard](https://mas.owasp.org/MASVS/) (MASVS) décrit ce que doit faire une application iOS ou Android sécurisée. La version 2 compte 24 exigences réparties en huit groupes ; sa version 2.1.0, publiée en janvier 2024, a ajouté le groupe consacré à la vie privée.

| Groupe MASVS | Ce qu’il couvre, en clair | Points de la liste |
|---|---|---|
| STORAGE | Les données sensibles stockées sur le téléphone ou dans l’app, et leurs fuites | 1, 6, 7 |
| CRYPTO | Un chiffrement à jour, avec des clés rangées dans le coffre de la plateforme | 6 |
| AUTH | Connexion, droits d’accès, vérification renforcée pour les actions sensibles | 2, 4, 5 |
| NETWORK | Un trafic chiffré, et l’épinglage quand il se justifie | 9, 10 |
| PLATFORM | Liens, WebViews et écrans que l’app partage avec le téléphone | 3, 8 |
| CODE | Versions d’OS prises en charge, composants sûrs, mises à jour, contrôle des entrées | 3, 11, 15 |
| RESILIENCE | Ralentir la modification et la rétro-ingénierie de l’app | 12, 13, 14 |
| PRIVACY | Collecter moins, dire ce que l’on collecte, laisser la main aux utilisateurs | 7, 8 |

Deux remarques. Le MASVS suppose que vos serveurs respectent leur propre référentiel (l’ASVS de l’OWASP, pour les applications web et les API) : une app bien construite au-dessus d’une API ouverte fuit quand même. Et l’OWASP classe les faiblesses par profils : une clé codée en dur ou un trafic non chiffré concernent toutes les apps (L1), l’épinglage et les mises à jour forcées les apps aux données plus sensibles (L2), l’obscurcissement du code et l’attestation les apps qui valent la peine d’être trafiquées (R).

## Sécurité d’une application mobile : d’abord les secrets et le serveur

### 1. Aucun secret dans l’application

Tout ce que vous livrez dans une app peut être extrait, y compris une clé glissée dans un fichier de configuration ou injectée à la compilation. L’OWASP Mobile Top 10, dont l’édition 2024 reste la plus récente, range les identifiants codés en dur dans son premier risque, M1 (Improper Credential Usage, la mauvaise gestion des identifiants). Une clé qui se contente d’identifier votre projet, comme la clé de configuration Firebase ou une clé Google Maps restreinte à votre app, peut rester dans l’application. Une clé qui dépense de l’argent ou ouvre l’accès à des données, comme la clé secrète d’un prestataire de paiement, d’IA ou d’emailing, doit rester sur un serveur. Mon guide sur les {{< a key="api-keys-mobile-apps" >}}clés API dans une application mobile{{< /a >}} explique comment les placer derrière un petit backend.

### 2. Le serveur contrôle les droits à chaque requête

Masquer un bouton dans l’app n’empêche personne d’appeler votre API directement avec une requête modifiée. À chaque requête, le serveur doit vérifier qui demande et si cette personne a le droit de lire ou de modifier cet enregistrement. Le Top 10 de la sécurité des API de l’OWASP (édition 2023) place cette faille en tête, sous le nom de Broken Object Level Authorization : on change l’identifiant dans une requête et l’on reçoit la facture de quelqu’un d’autre. Si votre app parle directement à Firebase ou à Supabase, ce sont les règles de la base qui jouent le rôle du serveur ; mon tutoriel pour {{< a key="ai-app-data-leaks" >}}vérifier les règles Firebase et Supabase{{< /a >}} montre comment les tester avec les yeux d’un inconnu.

### 3. Tout ce qui vous parvient est suspect

Validez les entrées côté serveur, même si l’app les a déjà contrôlées : types, longueurs, valeurs autorisées, formats de fichiers. Dans l’app, traitez les liens profonds, le contenu des notifications et les pages chargées dans une WebView comme s’ils venaient d’inconnus : ils le peuvent. Un lien comme `votreapp://payer?montant=500` doit ouvrir un écran que l’utilisateur confirme, jamais déclencher une action à lui seul.

## Connexion, jetons et données sur le téléphone

### 4. Une connexion fondée sur un standard éprouvé

Utilisez OAuth 2.0 et OpenID Connect dans le navigateur du système, avec PKCE, comme le décrivent les RFC 8252 et 7636, ou le SDK d’un fournisseur d’identité reconnu. Évitez les pages de connexion affichées dans une WebView : le navigateur du système garde le mot de passe hors de portée de votre app. N’inventez jamais votre propre format de jeton.

### 5. Des jetons courts, une vraie déconnexion, une seconde vérification pour les actions sensibles

Un jeton d’accès doit expirer au bout de quelques minutes ou de quelques heures, pas de plusieurs mois, et les jetons de rafraîchissement doivent pouvoir être révoqués côté serveur, pour que « se déconnecter de tous les appareils » et un changement de mot de passe coupent réellement l’accès. Redemandez le mot de passe, une passkey ou Face ID avant un changement d’adresse email, un paiement ou une suppression de compte. Quand Face ID ou une empreinte protège quelque chose, la vérification doit libérer une clé détenue par le système, pas seulement basculer un oui ou un non dans le code.

### 6. Les jetons dans le trousseau ou le Keystore, nulle part ailleurs

Sur iOS, rangez les jetons et autres identifiants dans le trousseau (Keychain) ; sur Android, chiffrez-les avec une clé détenue par l’Android Keystore, comme le recommande l’OWASP (M9, stockage non sécurisé des données). Les préférences simples, comme UserDefaults, SharedPreferences ou AsyncStorage, peuvent être lues sur un téléphone compromis ou copiées dans une sauvegarde. Tout chiffrement réalisé par l’app doit reposer sur des algorithmes actuels, tirés des bibliothèques de la plateforme, jamais sur une méthode maison.

### 7. Rien de personnel dans les journaux, les statistiques ou les rapports de plantage

Les journaux de débogage écrits pendant le développement survivent souvent jusqu’à la version publiée. Avant le lancement, cherchez dans le code les journaux qui affichent des jetons, des adresses email, des positions ou des réponses complètes du serveur, et vérifiez ce qu’envoient vos événements de statistiques et vos rapports de plantage (Crashlytics, Sentry et consorts).

### 8. Demander moins, et masquer les écrans sensibles

Ne demandez que les autorisations dont une fonction a besoin, au moment où elle en a besoin, et ne collectez que les données que vous utilisez. La CNIL a publié en septembre 2024 des [recommandations sur les applications mobiles](https://www.cnil.fr/fr/recommandations-applications-mobiles), mises à jour en avril 2025, qui précisent le rôle de l’éditeur, du développeur et des fournisseurs de SDK. Ce que vous collectez doit aussi correspondre à vos déclarations dans les stores, sujet de mon tutoriel sur {{< a key="app-privacy-labels" >}}le consentement RGPD, les étiquettes d’Apple et la section Sécurité des données de Google Play{{< /a >}}. Sur les écrans qui affichent des données de santé, bancaires ou d’identité, masquez le contenu quand l’app passe en arrière-plan et, sur Android, bloquez les captures d’écran avec `FLAG_SECURE`.

## Réseau : TLS par défaut, épinglage avec prudence

### 9. HTTPS partout, avec les réglages par défaut des plateformes

Sur iOS, App Transport Security bloque le HTTP simple, sauf si l’app le désactive ; Apple demande une justification lors de la validation quand une app active `NSAllowsArbitraryLoads`, et estime qu’il vaut généralement mieux mettre le serveur à niveau. Sur Android, le trafic en clair est désactivé par défaut depuis Android 9 (niveau d’API 28), sauf si l’app le réautorise. Si votre développeur a ajouté l’une de ces exceptions, demandez pourquoi.

### 10. L’épinglage de certificat, seulement si vous pouvez l’entretenir

L’épinglage (certificate pinning) oblige l’app à n’accepter que la clé de votre serveur, ce qui déjoue certaines interceptions ; les profils de l’OWASP le rangent parmi les mesures des apps aux données plus sensibles (L2), comme une banque. Le revers, que la documentation d’Android détaille : sans clé de secours, un changement de clé ou d’autorité de certification vous oblige à publier une mise à jour avant que les utilisateurs puissent se reconnecter. Si personne ne suivra ce calendrier, renoncez à l’épinglage et contentez-vous de TLS avec les réglages par défaut.

## SDK tiers et version publiée

### 11. Connaître chaque SDK de l’app, et le tenir à jour

Statistiques, publicité, paiement, messagerie, rapports de plantage : chaque SDK est du code écrit par d’autres, qui tourne avec les autorisations de votre app. Apple le rappelle sur sa [page consacrée aux SDK tiers](https://developer.apple.com/fr/support/third-party-SDK-requirements/) : « vous êtes responsable de l’ensemble du code que le SDK inclut dans votre app ». Depuis le 1er mai 2024, Apple exige le manifeste de confidentialité de tout SDK figurant sur sa liste de SDK courants, ainsi qu’une signature quand ce SDK est livré sous forme binaire, dans les nouvelles apps et dans les mises à jour qui en ajoutent un. Tenez la liste de vos SDK et bibliothèques avec leurs versions, supprimez ceux qui ne servent plus et activez les alertes de dépendances dans votre dépôt de code (risque M2 du Top 10).

### 12. Publier une version propre

La version publiée ne doit pas être débogable, ni contenir de comptes de test, d’adresses de serveurs de préproduction, de menus d’administration ou de débogage cachés, ni de journaux bavards. L’OWASP classe les fonctions de débogage oubliées dans une version publiée parmi les erreurs de configuration (M8).

### 13. Réduire et obscurcir le code, comme un ralentisseur

Sur Android, R8 réduit et optimise les versions publiées et renomme les classes et les méthodes, ce qui rend le code décompilé plus difficile à suivre ; les frameworks multiplateformes comme Flutter ont leurs propres options. Voyez-y un ralentisseur qui fait perdre du temps à un attaquant, pas un verrou : tout ce qui mérite d’être protégé doit rester sur le serveur.

### 14. Prouver que les requêtes viennent de votre app, et le vérifier côté serveur

L’API Play Integrity de Google, App Attest d’Apple et Firebase App Check aident votre serveur à confirmer qu’une requête vient bien de votre app authentique, sur un appareil authentique, ce qui freine les robots, les faux clients et les copies modifiées de l’app. La documentation d’Apple explique pourquoi le verdict doit être vérifié sur le serveur : une app compromise peut falsifier le résultat des contrôles qu’elle fait sur elle-même. Tous les appareils ne prennent pas en charge ces services : décidez à l’avance ce que fait le serveur quand la vérification est impossible.

## Après le lancement : mises à jour et signalement des vulnérabilités

### 15. Un chemin de mise à jour que vous maîtrisez

Fixez les plus anciennes versions d’iOS et d’Android que vous prenez en charge, et relevez ce plancher quand elles ne reçoivent plus de correctifs de sécurité. Avant le lancement, prévoyez un moyen de forcer une mise à jour, par exemple une version minimale en dessous de laquelle le serveur refuse les requêtes, pour pouvoir corriger une faille grave chez tout le monde. Les mises à jour intégrées de Google Play ou une vérification de version au démarrage font l’affaire.

### 16. Un moyen public de signaler une vulnérabilité

Le MASVS ne l’exige pas, mais la loi s’en charge. Au 19 octobre 2026, le règlement européen sur la cyberrésilience, ou Cyber Resilience Act ([règlement (UE) 2024/2847](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R2847)), impose depuis le 11 septembre 2026 aux fabricants de signaler les vulnérabilités activement exploitées et les incidents graves (article 14) : une alerte précoce sous 24 heures, puis une notification sous 72 heures, via la plateforme unique de signalement de l’ENISA. À partir du 11 décembre 2027, ses règles de gestion des vulnérabilités (annexe I, partie II) ajoutent une politique de divulgation coordonnée, un moyen pour quiconque de signaler une faille, une nomenclature logicielle (SBOM) et des mises à jour de sécurité rapides. Les lignes directrices publiées par la Commission européenne en juillet 2026 indiquent qu’une application mobile autonome peut entrer dans le champ, et le texte s’applique aux apps proposées dans l’UE même quand l’éditeur est installé en Suisse, au Québec ou au Maroc.

En pratique : une adresse dédiée comme securite@votredomaine, une courte page ou un fichier security.txt (RFC 9116) qui explique comment signaler une faille, un lien depuis votre fiche dans les stores, et une personne nommée qui lit les messages. Mon article sur {{< a key="cyber-resilience-act-apps" >}}le Cyber Resilience Act et les applications{{< /a >}} détaille le calendrier. Ceci est une information générale, pas un conseil juridique : si votre app traite des données de santé, financières ou concernant des enfants, ou si vous ne savez pas si vous êtes « fabricant » au sens du texte, une heure avec un avocat qui connaît la réglementation européenne des produits est un bon investissement.

## Tester avant le lancement : d’abord les outils gratuits, puis un test d’intrusion si besoin

Commencez par ce qui ne coûte rien. MobSF (Mobile Security Framework), un outil libre et gratuit, analyse un APK Android ou une IPA iOS à la recherche de secrets codés en dur, de réglages risqués et d’autorisations excessives, et peut observer une app pendant son fonctionnement. Le guide de test de l’OWASP, le MASTG, est accompagné de checklists qui permettent à un testeur de cocher chaque exigence du MASVS.

{{< callout type="tip" >}}**Le test des deux comptes.** Créez deux comptes, connectez-vous avec le premier et essayez de lire ou de modifier les données du second en changeant les identifiants dans les requêtes de l’app (un proxy d’interception les affiche). Aucun scanner ne le fait à votre place. Si cela fonctionne, corrigez-le avant tout le reste.{{< /callout >}}

Un test d’intrusion payant se justifie quand l’app traite des données de santé, financières ou concernant des enfants, encaisse des paiements hors des systèmes des stores, sert un client professionnel dont le questionnaire de sécurité en réclame un, ou vise une large audience dès le lancement. Demandez au testeur de travailler sur la base du MASVS, pour que le rapport suive la norme. Si un client public ou un grand compte exige un prestataire qualifié, l’ANSSI publie la liste des prestataires d’audit qualifiés PASSI. Et si des partenaires veulent une preuve, l’App Defense Alliance propose une évaluation appelée MASA, menée par des laboratoires agréés sur la base du MASVS ; les apps qui la réussissent peuvent afficher un badge dans leur section Sécurité des données sur Google Play. Vérifiez d’abord ses règles actuelles.

## Avant de valider : huit questions à poser à votre développeur

1. Y a-t-il dans l’app une clé qui nous coûterait de l’argent ou exposerait des données si quelqu’un l’extrayait ?
2. Si je change l’identifiant d’un utilisateur ou d’un enregistrement dans une requête, le serveur refuse-t-il ? Pouvez-vous me le montrer ?
3. Où les jetons sont-ils stockés sur le téléphone, combien de temps durent-ils, et la déconnexion les révoque-t-elle ?
4. Que contiennent nos journaux, nos statistiques et nos rapports de plantage ?
5. Avons-nous ajouté des réglages ATS, du trafic en clair ou de l’épinglage, et qui les entretient ?
6. Quels SDK l’app contient-elle, dans quelles versions, et qui les met à jour ?
7. La version publiée est-elle débarrassée des comptes de test, des adresses de préproduction et des menus de débogage ?
8. Comment forcer une mise à jour, et où peut-on nous signaler une vulnérabilité ?

Si les réponses restent floues, c’est déjà une réponse : demandez un deuxième avis avant le lancement. Pour le reste de la sécurité de votre entreprise, des mots de passe aux sauvegardes, commencez par mon {{< a key="cybersecurity-guide" >}}guide de cybersécurité pour les petites équipes{{< /a >}}.
