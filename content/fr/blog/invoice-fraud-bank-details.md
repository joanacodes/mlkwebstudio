---
title: "Fraude au faux RIB et au président : la repérer et la bloquer"
seo_title: "Fraude au faux RIB : comment la repérer et la bloquer"
description: "Fraude au faux RIB ou au président : les signaux d’alerte, cinq règles pour la bloquer, la vérification du bénéficiaire et que faire si vous avez payé."
slug: "fraude-faux-rib-entreprise"
translationKey: "invoice-fraud-bank-details"
date: 2026-10-18T21:48:00+02:00
lastmod: 2026-10-18T21:48:00+02:00
category: "cybersecurity"
article_type: "guide"
keywords: ["fraude au faux RIB", "fraude au président", "changement de RIB fournisseur", "faux ordre de virement", "vérification du bénéficiaire", "fraude au faux RIB entreprise"]
summary: "La fraude au faux RIB vous fait payer une facture d’apparence normale, ou un virement urgent qui semble venir du dirigeant, sur le compte d’un escroc, souvent après un email annonçant un changement de RIB. La parade est une règle, pas un outil : aucun RIB reçu par email n’est utilisé avant un appel à un numéro que vous aviez déjà, et une deuxième personne valide chaque nouveau bénéficiaire. Si l’argent est parti, appelez votre banque immédiatement et déposez plainte."
cover: "invoice-fraud-bank-details"
cover_alt: "Le titre en blanc sur un panneau de verre cannelé, devant une photo d’enveloppes empilées avec une pastille de notification"
related: ["deepfake-voice-ceo-fraud", "incident-response-first-hour", "spf-dkim-dmarc-setup", "cyber-insurance", "cybersecurity-guide"]
services: ["rescue"]
faq:
  - q: "Ma banque va-t-elle me rembourser un virement envoyé à un escroc ?"
    a: "Rarement. Un virement que vous avez validé vous-même est en principe un paiement autorisé, même s’il a été obtenu par la ruse : la banque n’a pas à le rembourser d’office. D’où l’importance d’appeler dans l’heure pour tenter un blocage ou un rappel des fonds."
  - q: "Faut-il faire un petit virement test pour vérifier un nouveau RIB ?"
    a: "Non. Un virement test prouve seulement que le compte existe et reçoit de l’argent, et un escroc confirmera volontiers que votre euro est bien arrivé. Seul un appel à un numéro que vous aviez déjà vous dit à qui appartient le compte."
  - q: "Quelle différence entre hameçonnage et fraude au faux RIB ?"
    a: "L’hameçonnage (phishing) cherche à voler un mot de passe ou à installer un logiciel malveillant ; la fraude au faux RIB cherche à obtenir un paiement. Les deux sont souvent liés : un mot de passe volé donne à l’escroc la messagerie depuis laquelle il enverra le faux RIB."
  - q: "Une assurance cyber couvre-t-elle la fraude au faux RIB ?"
    a: "Parfois. Beaucoup de contrats excluent la fraude par ingénierie sociale et les faux ordres de virement, ou les plafonnent à un montant bas : lisez cette clause et ses conditions avant de compter dessus."
---

L’email a l’air banal. Un fournisseur que vous payez depuis des années vous écrit, dans le fil habituel : il a changé de banque, voici la facture mise à jour avec son nouveau RIB, merci d’utiliser ce compte désormais. Le logo est le bon, le montant aussi, et même le ton. Seul l’IBAN appartient à quelqu’un d’autre.

C’est la fraude au faux RIB, que les banques et les autorités rangent avec sa cousine, la fraude au président, parmi les faux ordres de virement (FOVI). Elle piège des gens prudents parce que rien n’y semble anormal, et elle frappe durement les petites équipes, où la personne qui lit l’email est souvent celle qui paie.

C’est aussi l’une des rares menaces que l’on bloque avec une règle plutôt qu’avec un budget. Pour la vue d’ensemble, commencez par mon {{< a key="cybersecurity-guide" >}}guide de la cybersécurité des petites équipes{{< /a >}}.

## Fraude au faux RIB, fraude au président : à quoi elles ressemblent

La fraude au faux RIB regroupe toutes les ruses qui vous font envoyer un paiement d’apparence normale sur un compte tenu par un escroc. Elle prend quatre formes principales.

| Forme | Ce que vous voyez | Ce qui se passe vraiment |
|---|---|---|
| Changement de RIB | Un email ou un courrier d’un fournisseur qui annonce de nouvelles coordonnées bancaires | L’expéditeur utilise un domaine ressemblant ou une adresse d’expéditeur falsifiée |
| Fil de discussion détourné | Une réponse dans une vraie conversation, avec la vraie facture et un nouveau RIB | Quelqu’un s’est introduit dans la messagerie du fournisseur, ou dans la vôtre, et a attendu qu’une facture arrive à échéance |
| Fraude au président | Un message du « patron » qui demande un virement urgent et confidentiel | Une adresse ressemblante, une messagerie personnelle « parce que je suis en déplacement », parfois une voix clonée |
| Facture pour rien | Une facture ou un avis de renouvellement d’allure officielle, pour un annuaire, un nom de domaine ou un service jamais commandé | Le pari que quelqu’un paiera sans vérifier |

Le fil détourné est la version qui piège les plus expérimentés. L’attaquant lit la messagerie sans bruit, attend qu’un paiement soit dû, puis répond avec une facture « corrigée ». Il ajoute souvent une règle de messagerie qui masque les réponses du vrai fournisseur, si bien que personne ne remarque que la conversation a désormais deux auteurs.

La fraude au président remplace la routine par l’autorité : l’urgence, le secret (« n’en parlez à personne avant l’annonce du rachat ») et une raison impossible à vérifier sur le moment. Les voix clonées rendent la version téléphonique plus crédible ; j’en parle dans {{< a key="deepfake-voice-ceo-fraud" >}}voix clonées et deepfakes, la nouvelle fraude au président{{< /a >}}.

Les pertes n’ont rien d’anecdotique. Selon le [rapport 2025 de l’Observatoire de la sécurité des moyens de paiement](https://www.banque-france.fr/fr/publications-et-statistiques/publications/rapport-de-lobservatoire-de-la-securite-des-moyens-de-paiement-2025) de la Banque de France, la fraude par manipulation, où la victime valide elle-même le paiement, a atteint 516 millions d’euros en 2025, surtout par virement. La substitution d’IBAN et la fraude au président en font partie, aux côtés du faux conseiller bancaire, la forme la plus courante.

## Les signaux d’alerte dans un email ou une facture

Aucun signe ne prouve à lui seul la fraude, et une arnaque bien préparée peut n’en montrer aucun. Voyez chacun comme une raison de décrocher le téléphone, pas comme un test que l’email doit rater.

- **Tout changement de RIB envoyé par email**, quelle que soit la raison donnée. Ce signal couvre à lui seul la plupart des cas.
- Un titulaire du compte qui n’est pas l’entreprise que vous payez, avec une explication toute prête (« notre nouveau compte de groupe », « notre société d’affacturage »).
- Une banque ou un pays qui ne colle pas : un artisan du coin qui passe soudain par une banque étrangère, ou par une banque en ligne qu’il n’a jamais utilisée.
- La pression : payer aujourd’hui, avant une pénalité, avant le week-end, sans en parler à personne.
- Une adresse presque juste : une lettre en plus, un tiret, .com au lieu de .fr, « rn » à la place de « m ».
- Une adresse de réponse différente de celle de l’expéditeur, ou un nouveau numéro de téléphone dans la signature.
- Tout ce qui décourage un appel : « je suis en réunion toute la journée, écrivez-moi plutôt ».
- Un petit changement de ton, d’orthographe ou de formule de politesse chez quelqu’un que vous connaissez bien.

Le PDF ne prouve rien. Un logo, un en-tête ou un numéro de facture se copient en quelques secondes, et dans un fil détourné, la facture est la vraie, avec deux lignes modifiées.

## Cinq règles qui bloquent la plupart des fraudes au faux RIB

Ce sont des habitudes, pas des logiciels. Aucune ne demande de service informatique, et vous n’avez besoin ni de moi ni de personne pour les mettre en place : écrivez-les sur une page, présentez-les à l’équipe et appliquez-les à chaque fois, dirigeant compris.

1. **Rappeler sur un numéro que vous aviez déjà.** Un RIB nouveau ou modifié, quel que soit l’expéditeur, se confirme par téléphone au numéro de votre fichier ou du contrat, jamais à celui de l’email, de la facture ou de la signature. Demandez au fournisseur de vous lire ses coordonnées plutôt que de les lire vous-même.
2. **Deux personnes pour les nouveaux bénéficiaires et les gros montants.** L’une saisit le virement, l’autre le valide. Fixez le seuil à votre taille : chaque nouveau bénéficiaire, chaque changement de RIB et chaque paiement au-dessus d’un montant que vous choisissez. Si votre banque en ligne propose une double validation, activez-la ; sinon, faites-en une règle écrite.
3. **Un délai pour tout ce qui est nouveau.** Un nouveau RIB ne sert jamais le jour où il arrive. Une pause de 24 heures ne coûte rien avec un vrai fournisseur et retire la pression sur laquelle repose toute arnaque. Si vous travaillez sans équipe, ce délai devient votre deuxième personne : la nuit porte conseil.
4. **Un fichier fournisseurs.** Gardez les RIB vérifiés à un seul endroit, à accès restreint (votre logiciel de comptabilité s’y prête bien), avec la date, le nom de la personne qui a vérifié et le numéro appelé. Personne ne met à jour un RIB depuis une boîte mail.
5. **La règle du dirigeant.** Le dirigeant écrit à l’équipe : « Je ne vous demanderai jamais un virement urgent ou confidentiel par email, SMS ou message vocal. Si cela semble arriver, rappelez-moi. » Puis il tient parole, et personne ne se fait jamais reprocher d’avoir vérifié.

{{< callout type="tip" >}}**Un script d’appel de dix secondes :** « Bonjour, [prénom] de [entreprise]. Nous avons reçu un nouveau RIB pour vos factures. Pouvez-vous me lire les coordonnées que vous souhaitez que nous utilisions ? » Si votre interlocuteur n’est au courant de rien, vous venez de bloquer une fraude, et il faut le prévenir que sa messagerie a peut-être été piratée.{{< /callout >}}

## Ce que votre banque vérifie : la vérification du bénéficiaire

Depuis le 9 octobre 2025, les banques de la zone euro doivent comparer le nom du bénéficiaire avec l’IBAN avant que vous ne validiez un virement en euros au sein de l’Union, instantané ou classique. C’est l’article 5 quater du règlement (UE) n° 260/2012, dit règlement SEPA, inséré par le [règlement (UE) 2024/886 sur les virements instantanés](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R0886) ; les banques des pays de l’Union hors zone euro doivent suivre au plus tard le 9 juillet 2027.

Votre banque vous répond par l’un de quatre résultats, dont les libellés varient d’un établissement à l’autre : correspondance, correspondance partielle (la banque affiche alors le nom réel du titulaire), absence de correspondance, ou vérification impossible.

Trois points comptent pour une entreprise :

- Vous pouvez toujours envoyer le virement après un avertissement, et si l’argent part chez la mauvaise personne après une absence de correspondance, le récupérer sera difficile.
- Le règlement permet aux clients professionnels de renoncer à la vérification, mais seulement pour les virements envoyés par lots. Si vous payez vos fournisseurs par fichier de virements groupés, demandez à votre banque si la vérification s’applique.
- Les virements qui ne sont pas en euros, vers un fournisseur britannique payé en livres par exemple, ne passent pas par cette vérification européenne. Le Royaume-Uni a son propre système, Confirmation of Payee, qui ne s’applique qu’aux virements entre comptes britanniques.

### Ce que cette vérification ne fait pas

Elle confirme un nom, pas une histoire. Si l’email vous donne une raison crédible pour un autre nom (« nos factures sont désormais encaissées par notre société d’affacturage »), vous taperez ce nom et la vérification répondra « correspondance ». Un compte ouvert sous un nom proche de celui de votre fournisseur peut aussi donner une correspondance partielle que l’on valide machinalement. **Une absence de correspondance est un feu rouge ; une correspondance n’est pas un feu vert.**

## Protéger votre propre nom : messagerie et nom de domaine

La fraude au faux RIB marche aussi dans l’autre sens : des escrocs envoient un faux RIB à vos clients, en votre nom. Trois habitudes leur compliquent beaucoup la tâche.

- Publiez une politique DMARC. Avec SPF, DKIM et une politique DMARC en quarantaine ou en rejet, un email qui usurpe votre adresse exacte échoue chez le destinataire. Cela ne fait rien contre les domaines ressemblants, mais ferme la porte la plus facile. Mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC pas à pas{{< /a >}} montre comment faire.
- Verrouillez vos messageries. Un fil détourné commence en général par un mot de passe volé. Activez la {{< a key="two-factor-authentication-passkeys" >}}double authentification ou les passkeys{{< /a >}} sur chaque boîte, et vérifiez de temps en temps qu’aucune règle de transfert ni application connectée n’a été ajoutée à votre insu.
- Écrivez-le sur chaque facture. Une ligne comme « Nos coordonnées bancaires ne changeront jamais par email ; si vous recevez un tel message, appelez-nous au [numéro] » ne coûte rien et autorise vos clients à vérifier.

## Vous avez déjà payé : la première heure

Ici, la vitesse prime sur tout. Un virement peut parfois être bloqué ou gelé tant que l’argent se trouve encore sur le compte qui l’a reçu ; une fois transféré ailleurs, il est en général perdu.

1. **Appelez tout de suite votre banque**, au numéro de son site ou de votre contrat, jamais à celui de l’email. Demandez le blocage ou le rappel du virement et l’alerte de la banque destinataire. Notez l’heure et le nom de votre interlocuteur.
2. Déposez plainte au commissariat ou à la gendarmerie, preuves à l’appui, et dans les 72 heures si c’est votre messagerie qui a été piratée : l’article L. 12-10-1 du Code des assurances en fait une condition de l’indemnisation par votre assureur. [17Cyber](https://www.17cyber.gouv.fr/), le service d’assistance de la police, de la gendarmerie et de Cybermalveillance.gouv.fr, vous indique la marche à suivre et, pour les cas graves, vous met en relation en ligne avec un policier ou un gendarme. La [fiche de l’INC réalisée avec Cybermalveillance.gouv.fr](https://www.inc-conso.fr/content/fraude-au-virement-ou-faux-rib-que-faire-avec-cybermalveillancegouvfr) résume les bons réflexes.
3. Prévenez le vrai fournisseur par téléphone, et votre équipe. Si l’email venait de sa messagerie, il a d’autres clients à avertir. S’il venait de la vôtre, traitez-la comme une messagerie piratée : changez le mot de passe, déconnectez toutes les sessions, supprimez les règles de transfert et les applications inconnues.
4. Gardez les preuves : les emails avec leurs en-têtes complets, la facture, la confirmation de la banque et vos notes d’appel. Ne supprimez pas les messages de l’escroc.
5. Prévenez votre assureur ou votre courtier le jour même si vous avez un contrat cyber ou fraude ; mon article sur {{< a key="cyber-insurance" >}}ce que couvre une assurance cyber{{< /a >}} explique quoi regarder.

Si une messagerie a été piratée, les données personnelles qu’elle contient ont peut-être fuité, ce qui peut imposer de notifier la violation à la CNIL dans les 72 heures (article 33 du RGPD). Mon {{< a key="incident-response-first-hour" >}}plan de la première heure en cas de messagerie piratée ou de fraude bancaire{{< /a >}} couvre ce volet. Ceci est une information générale, pas un conseil juridique : si la somme est importante ou si votre banque refuse d’agir, un avocat habitué au droit bancaire vaut ses honoraires.

## Votre procédure de paiement sur une page

Écrivez-la cette semaine. Elle tient sur une page et se décide en moins d’une heure :

- Les RIB viennent uniquement du fichier fournisseurs ; tout changement est confirmé par un appel à un numéro connu, puis attend 24 heures.
- Deux personnes valident tout nouveau bénéficiaire, tout changement de RIB et tout paiement au-dessus de votre seuil.
- La règle du dirigeant est écrite, signée et connue de toute personne qui peut payer.
- Vos factures précisent que vos coordonnées bancaires ne changent jamais par email.
- Votre domaine publie une politique DMARC et chaque messagerie a la double authentification.
- Le numéro de votre banque et l’adresse de 17Cyber sont affichés près de la personne qui fait les paiements.

Quand passer la main : si vous pensez que votre propre messagerie ou votre domaine a servi, ou si vous ne savez pas, faites-les vérifier avant de leur refaire confiance. Les services présentés dans mon guide des {{< a key="free-cybersecurity-help" >}}aides gratuites en cybersécurité{{< /a >}} sont un bon premier arrêt, et le reste de cette liste vous appartient.
