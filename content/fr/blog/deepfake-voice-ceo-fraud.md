---
title: "Voix clonées et deepfakes : nouvelle fraude au président, comment s’en protéger"
seo_title: "Deepfake et fraude au président : comment s’en protéger"
description: "Fraude au président par deepfake : une voix clonée ou une fausse visio réclame un virement urgent. Cas réels, limites des détecteurs, règles qui la bloquent."
slug: "deepfake-fraude-au-president"
translationKey: "deepfake-voice-ceo-fraud"
date: 2026-10-18T21:51:00+02:00
lastmod: 2026-10-18T21:51:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["deepfake fraude au président", "fraude au président voix clonée", "arnaque voix clonée IA", "arnaque deepfake visioconférence", "hypertrucage", "faux ordre de virement"]
summary: "La fraude au président par deepfake reprend la vieille arnaque au faux dirigeant avec une voix clonée par IA ou une fausse visioconférence, tirée d’enregistrements publics. Vous ne repérerez pas l’imitation à coup sûr : la parade est une règle. Toute demande urgente ou confidentielle d’argent ou de données se vérifie en rappelant la personne à un numéro que vous aviez déjà, ou par une question dont elle seule connaît la réponse, et une deuxième personne valide le virement."
cover: "deepfake-voice-ceo-fraud"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé au-dessus d’une photo, avec un mégaphone et des ondes sonores"
related: ["invoice-fraud-bank-details", "incident-response-first-hour", "cybersecurity-guide", "cyber-insurance", "ai-small-business-guide"]
services: ["rescue"]
faq:
  - q: "Et si le vrai dirigeant oublie le mot de code ?"
    a: "Alors la demande attend que vous l’ayez joint à un numéro que vous aviez déjà. Ce n’est pas un manque de respect, c’est la règle qui fonctionne : convenez-en à l’avance, et personne ne sera gêné le jour venu."
  - q: "Un appel peut-il afficher le vrai numéro de mon dirigeant ?"
    a: "Oui. Le numéro affiché peut être falsifié (on parle de spoofing). Raccrochez et composez le numéro enregistré dans vos contacts : vous tomberez normalement sur la vraie personne."
  - q: "La banque rembourse-t-elle un virement fait après un faux appel ?"
    a: "Rien n’est automatique pour une entreprise : un virement que vous avez vous-même ordonné est difficile à récupérer une fois l’argent reparti ailleurs. Vos meilleures chances sont un rappel des fonds demandé dans les minutes qui suivent, puis votre contrat d’assurance."
  - q: "L’assurance cyber couvre-t-elle la fraude au président par deepfake ?"
    a: "Cela dépend du contrat. Certains la couvrent, d’autres l’excluent ou la plafonnent bas : cherchez la clause sur l’ingénierie sociale ou la fraude au virement, vérifiez le plafond et les conditions, et demandez une confirmation écrite à votre courtier."
  - q: "Faut-il arrêter de publier des vidéos et des podcasts à cause du clonage de voix ?"
    a: "Non, dans la plupart des cas. Un court appel ou l’annonce de votre répondeur peut suffire à copier votre voix : la cacher n’est pas une protection fiable. Continuez à publier et mettez plutôt en place la règle du rappel."
---

Le téléphone sonne : c’est votre dirigeant, même voix, un peu pressé. Une acquisition confidentielle est en cours, les avocats attendent un virement avant 17 h, et personne ne doit être au courant avant l’annonce. Sauf que votre dirigeant est dans un TGV sans réseau, et que la voix a été fabriquée par un logiciel à partir d’une vidéo de votre site.

C’est la fraude au président par deepfake : la vieille arnaque au faux dirigeant (un FOVI, faux ordre de virement, pour les autorités), jouée avec une copie par IA de la voix d’une personne réelle, parfois avec un faux visage en visio. Ce qui a changé, c’est que l’imitation sonne juste. L’IA a accéléré beaucoup de métiers, le mien compris (mon {{< a key="ai-small-business-guide" >}}guide de l’IA pour les petites équipes{{< /a >}} en montre le bon côté), et la fraude aussi.

La parade ne coûte rien et fonctionne même quand l’imitation est parfaite. Pour la vue d’ensemble, voyez mon {{< a key="cybersecurity-guide" >}}guide de cybersécurité pour les petites équipes{{< /a >}}.

## Comment on clone une voix, et ce dont le fraudeur a besoin

Une voix clonée est un modèle d’IA qui lit n’importe quel texte, ou transforme la parole du fraudeur, avec la voix d’une personne précise. Un deepfake vidéo (« hypertrucage » sur les sites officiels) fait de même avec un visage, jusqu’en direct en visio.

Il faut très peu de matière. En mars 2024, OpenAI écrivait que son modèle Voice Engine n’avait besoin que d’« un seul échantillon audio de 15 secondes » pour imiter de près une voix, et en réservait l’accès à quelques partenaires à cause des risques d’abus ([billet d’OpenAI, en anglais](https://openai.com/index/navigating-the-challenges-and-opportunities-of-synthetic-voices/)). Quinze secondes, c’est une réponse dans un podcast, une vidéo sur LinkedIn ou l’annonce de votre répondeur. En décembre 2024, le FBI avertissait que des escrocs utilisent déjà des voix générées par IA pour se faire passer pour un proche en détresse ou accéder à des comptes bancaires.

Le scénario vient des informations publiques : votre site, LinkedIn, les registres d’entreprises, les communiqués de presse. L’attaque type commence par un message sur un canal crédible (email, WhatsApp, invitation à une réunion) et une raison d’aller vite et de se taire : une acquisition, des autorités « déjà informées ». Puis un appel, un message vocal ou une visio lève le dernier doute, juste avant la demande : un virement, un RIB, des mots de passe ou des données personnelles.

## Trois cas réels : Arup, WPP et Ferrari

Ce sont les cas les mieux documentés. Il s’agit de grands groupes, mais rien dans la méthode n’exige une grande cible.

| Cas | Ce qui s’est passé | Résultat |
|---|---|---|
| Arup, bureau de Hong Kong (rendu public en février 2024, confirmé en mai 2024) | Un employé du service financier reçoit un message, censé venir du directeur financier basé au Royaume-Uni, sur une opération confidentielle, puis rejoint une visio où ce « directeur financier » et les autres participants sont tous des faux | 15 virements vers cinq comptes, 200 millions de dollars de Hong Kong (environ 25,6 millions de dollars américains), découverts quand l’employé a vérifié auprès du siège |
| WPP (mai 2024) | Un compte WhatsApp avec une photo publique du directeur général, Mark Read, organise une réunion Teams, avec une voix clonée d’un autre dirigeant et des images tirées de YouTube | Un dirigeant d’agence est invité à créer une nouvelle activité, pour obtenir de l’argent et des données personnelles ; la tentative échoue |
| Ferrari (juillet 2024) | Des messages WhatsApp depuis un numéro inhabituel, à propos d’une opération et d’un accord de confidentialité, puis un appel qui imite la voix et l’accent du directeur général, Benedetto Vigna | Le cadre demande quel livre Benedetto Vigna lui a recommandé quelques jours plus tôt ; l’interlocuteur raccroche |

Arup a indiqué qu’aucun de ses systèmes internes n’avait été compromis ([article sur la confirmation d’Arup, en anglais](https://www.constructionbriefing.com/news/arup-employee-falls-victim-to-us-25-million-deepfake-video-call-scam/8037338.article)). The Guardian a révélé la tentative contre WPP grâce à l’email de Mark Read à ses équipes, qui mettait en garde contre les demandes de passeport ou d’argent et toute mention d’une « acquisition, transaction ou paiement secret dont personne d’autre n’est au courant ». Bloomberg a révélé celle contre Ferrari, qui n’a pas fait de commentaire.

En France, la DGSI décrit une tentative contre une entreprise française : le responsable d’un site a reçu un appel, puis une visioconférence, d’une personne qui avait le visage et la voix du dirigeant, pour un virement lié à un projet d’acquisition ([page de la DGSI](https://www.dgsi.interieur.gouv.fr/risques-associes-aux-escroqueries-par-usurpation-didentite)).

Chez WPP et chez Ferrari, quelqu’un s’est arrêté pour vérifier ; chez Arup, la vérification est venue après le départ de l’argent. À chaque fois, la demande trahissait l’arnaque : une opération secrète, un canal inhabituel, un paiement que personne d’autre ne devait connaître.

## Pourquoi votre oreille ne suffit pas

Le cadre de Ferrari a perçu de légères intonations mécaniques, et le site Ma Sécurité du ministère de l’Intérieur conseille d’écouter s’il manque des hésitations ou des variations naturelles du ton, et de guetter en vidéo un décalage entre les lèvres et la voix. Utiles, mais insuffisants : une mauvaise ligne, un « problème de caméra » ou un court message vocal les masquent, et vous écoutez votre dirigeant, vous ne cherchez pas l’erreur.

Des logiciels de détection existent, mais personne ne les lance en plein appel, et « probablement authentique » ne vaut pas validation d’un virement. La reconnaissance vocale perd aussi de sa valeur : dans le même billet de 2024, OpenAI recommandait d’abandonner progressivement l’authentification par la voix, par exemple pour l’accès aux comptes bancaires.

Prenez ces signaux comme des raisons de vérifier, pas comme un examen que l’appel doit rater :

- un nouveau numéro, un nouveau compte ou un canal inhabituel
- l’urgence, liée à une échéance que vous ne pouvez pas vérifier
- le secret : « n’en parlez à personne pour l’instant », « c’est sous accord de confidentialité »
- une raison qui vous empêche de rappeler ou de demander à quelqu’un d’autre
- une demande de contourner la procédure habituelle, « juste cette fois »

**La procédure bat la technologie :** une règle appliquée à chaque demande arrête une imitation parfaite aussi sûrement qu’une imitation grossière.

## Les règles qui bloquent la fraude au président par deepfake

Ces règles ne demandent ni logiciel ni service informatique, et vous n’avez pas besoin de moi pour les mettre en place : écrivez-les sur une page et appliquez-les à chaque demande, celles du dirigeant comprises.

1. **Raccrocher et rappeler.** Toute demande d’argent, de RIB, de mots de passe ou de fichiers confidentiels reçue par téléphone, message vocal, visioconférence ou messagerie se confirme en rappelant la personne au numéro enregistré dans vos contacts, jamais au numéro qui a appelé ni à celui donné dans le message. Un compte WhatsApp au nom et à la photo du dirigeant ne prouve rien : les escrocs qui visaient WPP en ont créé un à partir d’une photo publique. Si vous ne joignez pas la personne, la demande attend.
2. **Poser une question dont seule la vraie personne connaît la réponse.** La question du cadre de Ferrari est le modèle : un détail d’une conversation récente qui ne figure nulle part en ligne. Un mot de code convenu de vive voix fonctionne aussi ; ne le fixez jamais par email ou par messagerie, et changez-le dès qu’il a servi au téléphone.
3. **Deux personnes pour tout virement inhabituel.** L’une le prépare, l’autre le valide après sa propre vérification. Depuis le 9 octobre 2025, votre banque vérifie aussi que le nom du bénéficiaire correspond à l’IBAN pour les virements en euros, mais un nom qui correspond ne rend pas une demande légitime. Mon guide sur la {{< a key="invoice-fraud-bank-details" >}}fraude au faux RIB et au président{{< /a >}} détaille la procédure de paiement.
4. **Urgence et secret, c’est stop.** Le dirigeant écrit à toute l’équipe : « Je ne vous demanderai jamais de virement secret ou urgent par téléphone, message vocal ou visio. Si cela semble arriver, rappelez-moi. » Et vérifier ne sera jamais reproché à personne, même quand la demande se révèle authentique. Les fiches officielles recommandent d’ailleurs une validation interne sans dérogation possible.
5. **Informer tous ceux qui peuvent payer ou ouvrir des accès :** l’assistant ou l’assistante de direction, votre expert-comptable, toute personne qui peut modifier un RIB, réinitialiser un mot de passe, envoyer la paie ou des fichiers clients. Dix minutes en réunion d’équipe suffisent.

{{< callout type="tip" >}}**La phrase à répéter :** « Je vous rappelle tout de suite sur votre numéro habituel. » Un vrai dirigeant dit oui. Un escroc trouve une raison pour que vous ne le fassiez pas, et cette raison est votre réponse.{{< /callout >}}

Les voix clonées visent aussi les familles, avec un « petit-fils » en difficulté qui demande de l’argent : le FBI recommande aux familles de convenir à l’avance d’un mot ou d’une phrase secrète.

## Rendre votre équipe plus difficile à piéger

Vous ne pouvez pas empêcher qu’on entende votre voix, mais vous pouvez priver le scénario de matière.

- **Dites moins qui paie.** Retirez des pages publiques le nom et la ligne directe des personnes qui valident les paiements : les fiches officielles le recommandent, car l’escroc étudie d’abord les réseaux sociaux et les organigrammes.
- **Surveillez vos réponses d’absence.** « En déplacement à Singapour jusqu’à vendredi, pour les paiements urgents contactez Camille » dit à l’escroc quand le dirigeant est injoignable et qui appeler. Les mêmes fiches notent que ces appels arrivent souvent le soir, pendant les vacances ou au milieu d’un pont, quand le service comptable tourne au ralenti.
- **Verrouillez vos messageries.** Une boîte mail piratée donne à l’escroc tout son scénario : qui paie qui, le ton du dirigeant, les dossiers en cours. Activez la {{< a key="two-factor-authentication-passkeys" >}}double authentification ou les passkeys{{< /a >}} partout.
- **Faites un exercice.** Le dirigeant appelle un collègue depuis un numéro inconnu avec une demande urgente sans conséquence, et regarde si le rappel a lieu. Une fois, sans reproche.

## Si l’appel arrive, ou si l’argent est déjà parti

Pendant l’appel, gardez votre calme et n’essayez pas de piéger l’interlocuteur : dites que vous rappelez, raccrochez et appliquez la règle 1. Notez le numéro, l’heure et la demande, et faites des captures d’écran des messages et du profil qui les a envoyés.

Si l’argent est parti :

1. **Appelez immédiatement la ligne fraude de votre banque**, au numéro de son site ou de votre carte, pour demander le blocage ou le rappel des fonds. Les minutes comptent.
2. **Déposez plainte** auprès de la police ou de la gendarmerie. Le service 17Cyber vous oriente et, pour les cas graves, vous met en relation en ligne avec un policier ou un gendarme ; la [fiche réflexe de Cybermalveillance.gouv.fr sur les faux ordres de virement](https://www.cybermalveillance.gouv.fr/tous-nos-contenus/fiches-reflexes/escroquerie-faux-ordres-virement-fovi) détaille les démarches.
3. **Gardez les preuves :** journaux d’appels, numéros, messages écrits et vocaux, invitations et confirmations de virement.
4. **Prévenez votre assureur ou votre courtier le jour même** ; mon article sur {{< a key="cyber-insurance" >}}ce que couvre une assurance cyber{{< /a >}} explique ce qu’il faut vérifier.
5. **Vérifiez les comptes concernés.** Si l’escroc savait des choses qui ne figurent que dans vos emails, traitez la messagerie comme piratée : mon {{< a key="incident-response-first-hour" >}}plan de la première heure après une cyberattaque{{< /a >}} détaille les étapes.

Ce contenu est une information générale, pas un conseil juridique : pour une grosse somme, ou si votre banque ne vous aide pas, un avocat qui traite les litiges bancaires vaut ses honoraires.

## À mettre en place cette semaine

Environ une heure de travail :

- Écrire la règle du rappel et la phrase « urgence et secret, c’est stop » sur une page signée par le dirigeant.
- Convenir de vive voix d’une question de contrôle ou d’un mot de code avec chaque personne qui valide des paiements.
- Activer la double validation des nouveaux bénéficiaires dans votre banque en ligne, ou en faire une règle écrite.
- Informer tous ceux qui peuvent payer ou ouvrir des accès, nouveaux arrivants compris.

Quand passer la main : si vous pensez qu’une messagerie ou un compte a servi à préparer l’attaque, faites-le vérifier avant de lui refaire confiance ; mon guide des {{< a key="free-cybersecurity-help" >}}aides gratuites en cybersécurité{{< /a >}} liste de bons premiers interlocuteurs. Le reste vous appartient, et aucun outil ne vaut une équipe qui rappelle.
