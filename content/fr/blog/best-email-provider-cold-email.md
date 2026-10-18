---
title: "Quelle boîte mail pour le cold emailing : Google, Microsoft ou Spacemail ?"
seo_title: "Boîte mail cold emailing : Google, Microsoft ou Spacemail ?"
description: "Boîte mail pour le cold emailing : Microsoft 365, Google Workspace et Spacemail comparés sur la délivrabilité, la configuration, les limites et le prix."
slug: "boite-mail-cold-emailing"
translationKey: "best-email-provider-cold-email"
date: 2026-10-17T08:35:00+02:00
lastmod: 2026-10-17T08:35:00+02:00
category: "cold-emailing"
article_type: "comparison"
keywords: ["boîte mail cold emailing", "meilleure boîte mail pour la prospection", "Google Workspace ou Microsoft 365 pour le cold emailing", "Spacemail cold emailing", "fournisseur de messagerie prospection"]
summary: "Par expérience, Microsoft 365 fonctionne très bien pour le cold emailing mais reste délicat à configurer, Google Workspace fait moins bien, et Spacemail, la messagerie de Spaceship, est celle que je recommande : simple à configurer et à moins d’un euro par boîte et par mois. Mais les règles de Spaceship jugent non sollicité tout email envoyé sans accord préalable et interdisent la chauffe automatisée : obtenez son accord écrit avant de relier Spacemail à un outil d’envoi."
cover: "best-email-provider-cold-email"
cover_alt: "Une main tient un téléphone ouvert sur une boîte de réception, à côté de deux panneaux comparés et des mots Google vs Microsoft"
related: ["cold-email-infrastructure", "spacemail-setup", "instantly-ai-tutorial", "professional-email-address", "spf-dkim-dmarc-setup"]
services: ["cold-emailing"]
faq:
  - q: "Peut-on faire du cold emailing avec une adresse Gmail ou Outlook.com gratuite ?"
    a: "Pas pour une campagne. Vous ne pouvez pas ajouter d’enregistrements SPF, DKIM ou DMARC à gmail.com ou outlook.com : l’authentification vous échappe entièrement. Envoyez depuis des boîtes créées sur des domaines secondaires proches de votre marque, jamais depuis votre domaine principal ; [MLK Leadhunters explique pourquoi](https://mlkleadhunters.com/fr/blog/never-send-from-your-main-domain/)."
  - q: "Peut-on mélanger des boîtes Google, Microsoft et Spacemail dans une même campagne ?"
    a: "Oui. Instantly connecte chaque boîte séparément (Google et Microsoft par connexion au compte, les autres fournisseurs en IMAP et SMTP), et une même campagne peut envoyer depuis toutes. Répartir les boîtes entre plusieurs fournisseurs et domaines évite aussi qu’un seul problème arrête toute la campagne."
  - q: "Combien de boîtes mail prévoir par domaine d’envoi ?"
    a: "Quelques-unes. Mon guide sur l’infrastructure de cold emailing en prévoit trois par domaine : plus de boîtes par domaine, c’est moins de domaines à acheter, mais un domaine qui a un problème entraîne toutes ses boîtes avec lui."
  - q: "Les alias comptent-ils comme des boîtes d’envoi supplémentaires ?"
    a: "Non chez Spacemail : les alias partagent le quota d’envoi de leur boîte, donc dix alias envoient comme une seule boîte. Quel que soit le fournisseur, dimensionnez une campagne en vraies boîtes."
  - q: "Et les autres fournisseurs, comme Infomaniak, OVHcloud ou Zoho Mail ?"
    a: "Tout fournisseur qui donne un accès IMAP et SMTP peut être connecté à Instantly, qui a besoin des deux : SMTP pour envoyer, IMAP pour lire les réponses et faire la chauffe. Vérifiez d’abord ses limites d’envoi et ses règles sur les emails non sollicités, comme pour les trois comparés ici."
---

Choisir une boîte mail pour le cold emailing revient à répondre à trois questions : vos emails arriveront-ils en boîte de réception, quel travail faudra-t-il pour connecter les boîtes à un outil d’envoi, et les règles du fournisseur autorisent-elles ce que vous comptez faire ? Le prix arrive en quatrième position, et il grimpe vite, car une campagne tourne sur plusieurs boîtes à la fois : celle que je mène pour {{< a page="/projects/pilotech-teknopoint" >}}Pilotech{{< /a >}} envoie depuis 30 adresses.

Mon verdict, tiré des campagnes que je mène : Microsoft 365 fonctionne très bien pour le cold emailing mais reste délicat à configurer, Google Workspace fait moins bien, et Spacemail, la messagerie du registrar Spaceship, est celle que je vous encourage à utiliser. Cette dernière recommandation s’accompagne d’une condition, à lire avant d’acheter la moindre boîte.

Tout au long de l’article, je sépare ce qui vient de mon expérience de ce que documentent les fournisseurs, pour que vous puissiez peser les deux. Pour la campagne dans son ensemble, de la liste aux relances, commencez par mon {{< a key="b2b-cold-emailing-guide" >}}guide complet du cold emailing B2B{{< /a >}}. Cet article ne traite que de l’hébergement des boîtes d’envoi.

## Les critères qui comptent pour une boîte de cold emailing

Cinq points séparent un fournisseur adapté au cold emailing d’un fournisseur qui vous complique la vie à chaque étape :

1. La délivrabilité : la capacité des emails envoyés par les serveurs du fournisseur à arriver en boîte de réception. Le fournisseur en maîtrise une partie, vous l’essentiel.
2. La connexion à l’outil d’envoi : le cold emailing part d’un outil comme Instantly, qui étale les envois sur la journée et s’arrête dès qu’un prospect répond. Certaines boîtes se connectent en une étape, d’autres demandent d’abord des réglages d’administrateur.
3. Les limites d’envoi : chaque fournisseur plafonne ce qu’une boîte peut envoyer. En cold emailing, ces plafonds sont des limites dont on reste très loin.
4. Les règles sur les emails non sollicités : les conditions de chaque fournisseur disent ce qu’il tolère, et **aucun des trois ne vend ses boîtes pour faire du cold emailing**.
5. Le prix par boîte : quel que soit le prix d’une boîte, vous le paierez de nombreuses fois.

Le nombre de boîtes et de domaines à prévoir, et le volume que chaque boîte peut envoyer par jour, font l’objet de mon guide sur l’{{< a key="cold-email-infrastructure" >}}infrastructure de cold emailing{{< /a >}}. Ici, la question est de savoir chez qui les héberger.

## Quelle boîte mail pour le cold emailing : les trois côte à côte

La première ligne vient de mon expérience. Les autres reprennent ce que publient les fournisseurs au moment où j’écris (octobre 2026).

| | Microsoft 365 | Google Workspace | Spacemail (Spaceship) |
|---|---|---|---|
| Mon verdict pour le cold emailing | Très efficace, délicat à configurer | Moins bon que Microsoft | Celle que je recommande, simple à configurer |
| Connexion à Instantly | SMTP authentifié à activer pour chaque boîte, puis une connexion par boîte, une à la fois | Un administrateur approuve Instantly une fois, puis chaque boîte se connecte | IMAP et SMTP, avec le mot de passe de chaque boîte |
| Limite d’envoi publiée | 10 000 destinataires par jour, 30 messages par minute | 2 000 messages par jour et par utilisateur, 500 pendant l’essai | 500 emails par heure et par boîte, 20 pendant l’essai |
| Règles sur les envois en masse ou non sollicités | Les emails commerciaux en masse relèvent de prestataires spécialisés | Les envois de masse non sollicités sont interdits | Tout email envoyé sans accord préalable est jugé non sollicité ; la chauffe automatisée par des outils tiers est interdite |
| Prix d’entrée par boîte et par mois | 4 $ aux États-Unis (Exchange Online Plan 1, messagerie seule) | 6,80 € HT avec engagement annuel | Environ 0,70 € (0,79 $) avec l’offre Pro payée pour deux ans |

La ligne des limites paraît généreuse, et elle l’est : les guides d’Instantly conseillent environ 30 cold emails par jour et par boîte, une petite fraction de chacun de ces plafonds. Les lignes qui décident du choix sont le verdict, les règles et le prix.

## Microsoft 365 : très efficace en cold emailing, délicat à configurer

Des deux grands fournisseurs, Microsoft est celui dont les boîtes ont très bien fonctionné dans mes campagnes de cold emailing. C’est à la configuration que vous le payez, et mon usage quotidien va dans le même sens : j’ai utilisé Microsoft pour mes propres emails, et c’était pénible. Ce n’est pas le cas avec Namecheap ni avec Spaceship.

Ce qui complique la configuration est documenté :

- Le SMTP authentifié doit être activé. Un outil d’envoi passe par le SMTP authentifié, qu’un administrateur active boîte par boîte dans le centre d’administration Microsoft 365 : **Utilisateurs**, **Utilisateurs actifs**, la boîte, **Courrier**, puis **Gérer les applications de messagerie**. Microsoft précise qu’il est désactivé quand les paramètres de sécurité par défaut sont actifs, et changer ce réglage est une décision de sécurité qui revient à la personne qui gère votre Microsoft 365.
- Les changements mettent du temps à s’appliquer. Selon Microsoft, il faut compter de 15 à 40 minutes, parfois plus, et l’aide d’Instantly demande d’attendre environ une heure avant de connecter la boîte.
- Les boîtes se connectent une par une. Instantly ne propose pas de connexion groupée pour les comptes Microsoft : 30 boîtes, ce sont 30 connexions séparées.

Chaque étape figure dans mon {{< a key="instantly-ai-tutorial" >}}tuto Instantly{{< /a >}}.

Côté volume, les [limites d’Exchange Online](https://learn.microsoft.com/fr-fr/office365/servicedescriptions/exchange-online-service-description/exchange-online-limits) autorisent 10 000 destinataires par jour et 30 messages par minute pour chaque boîte. Si vous avez entendu parler d’une limite de 2 000 destinataires externes par jour et par boîte : Microsoft l’avait annoncée en 2024, puis y a renoncé. La documentation de Microsoft sur ces limites indique aussi que les organisations qui envoient des emails commerciaux légitimes en masse, comme des newsletters, doivent passer par des prestataires tiers spécialisés. Une campagne d’une trentaine d’emails par jour et par boîte reste très loin d’une newsletter, mais le message est clair : Microsoft ne vend pas ses boîtes pour les envois de masse.

Côté prix, une boîte d’envoi n’a besoin que de la messagerie, et l’offre de messagerie seule la moins chère de Microsoft, Exchange Online Plan 1, est affichée sur sa page américaine à 4 dollars par utilisateur et par mois, avec engagement annuel. Microsoft 365 Business Basic, qui ajoute les versions web et mobiles de Word, Excel et PowerPoint, est passé de 6 à 7 dollars par utilisateur et par mois aux États-Unis le 1er juillet 2026, et les clients existants passent au nouveau tarif à leur prochain renouvellement. Je n’ai pas trouvé de source fiable pour les prix en euros : vérifiez-les sur le site français de Microsoft, à commencer par [la page de comparaison des offres](https://www.microsoft.com/fr-fr/microsoft-365/business/compare-all-microsoft-365-business-products), avant de les multiplier par votre nombre de boîtes.

## Google Workspace : familier, mais moins bon en cold emailing selon mon expérience

Beaucoup de petites entreprises paient déjà Google Workspace, et le connecter à Instantly se fait en deux temps : un administrateur approuve Instantly une fois dans la console d’administration (**Sécurité**, **Contrôle des accès et des données**, **Commandes des API**), puis chaque boîte se connecte avec son compte Google. Depuis janvier 2025, l’accès IMAP, dont l’outil d’envoi se sert pour lire les réponses, est toujours actif dans Gmail.

Dans mes campagnes, pourtant, Google fait moins bien que Microsoft en cold emailing, et c’est pourquoi il arrive en dernier des trois pour moi. C’est de l’expérience, pas un banc d’essai publié : si vous utilisez déjà Workspace et que vos boîtes obtiennent des réponses, vos propres chiffres comptent davantage.

Ce que Google documente :

- Les limites : 2 000 messages par jour et par utilisateur, 500 pendant l’essai gratuit.
- Les règles : la [politique d’utilisation acceptable](https://workspace.google.com/terms/use_policy.html) de Google interdit d’utiliser ses services pour produire ou faciliter des envois de masse non sollicités, qu’il s’agisse d’emails, de promotions, de publicités ou d’autres sollicitations.
- Le prix : Business Starter coûte 6,80 € HT par utilisateur et par mois avec engagement annuel, et 8,10 € HT avec l’offre flexible, au moment où j’écris, selon la [page tarifs de Google](https://workspace.google.com/pricing?hl=fr). Chaque boîte d’envoi est un utilisateur, donc un abonnement complet.

## Spacemail : celle que je recommande, à une condition

Spacemail est la messagerie de Spaceship, le registrar lancé par Namecheap en 2023. C’est le fournisseur que je vous encourage à utiliser, pour des raisons qui viennent de mon expérience :

- La configuration est simple, ou du moins j’y ai mes repères. Créer les boîtes est facile, et un outil d’envoi s’y connecte en IMAP et SMTP avec les réglages donnés par l’aide de Spaceship (serveur mail.spacemail.com, ports 993 et 465) ; cet accès est activé par défaut.
- Le support répond. Il est joignable à toute heure, et chaque problème que je lui ai soumis a été résolu.
- Le prix est juste. Au moment où j’écris, [la page Spacemail de Spaceship](https://www.spaceship.com/business-email/) (en anglais) affiche l’offre Pro, à une boîte, à environ 0,70 € (0,79 $) par mois, payés pour deux ans (18,88 $), au même prix au renouvellement ; les offres à trois ou cinq boîtes reviennent moins cher par boîte. Et Spaceship ne triple pas la facture la deuxième année, comme le font certains fournisseurs.

Spaceship documente aussi ses limites d’envoi : 500 emails par heure et par boîte sur les offres payantes, 20 par heure pendant l’essai, et 50 destinataires au plus par email.

La condition se trouve dans les règles de Spaceship, qui laissent peu de place au cold emailing :

- Sa [politique d’utilisation acceptable de l’hébergement](https://www.spaceship.com/legal/hosting-aup/) (en anglais) interdit les envois de masse non sollicités et considère comme non sollicité tout email envoyé à une personne qui n’a pas donné son accord.
- Ses pages d’aide interdisent tout email commercial non sollicité, envoyé en masse ou automatisé, avec une tolérance zéro, et précisent que sa messagerie n’est pas conçue pour les envois massifs.
- Son [guide de chauffe d’un domaine](https://www.spaceship.com/knowledgebase/warm-up-domain-email-deliverability/) (en anglais) n’autorise qu’une chauffe manuelle et progressive, avec de vrais destinataires consentants, et interdit strictement la chauffe automatisée par des outils tiers, ce qu’est précisément la chauffe d’un outil d’envoi.
- Ses conditions générales prévoient, en cas de spam, des dommages et intérêts forfaitaires de 500 dollars, ou de 1 dollar par message si ce total est plus élevé, et Spaceship peut limiter vos envois, les suspendre ou fermer le compte.

Ma recommandation porte donc sur ce que Spacemail fait bien : la configuration, le prix et le support. Elle ne signifie pas que Spaceship accepte le cold emailing. Sur le papier, ce n’est pas le cas.

{{< callout type="warning" >}}**Obtenez d’abord la réponse de Spaceship par écrit.** Avant de connecter une boîte Spacemail à Instantly ou d’activer la moindre chauffe, décrivez votre campagne au support de Spaceship (à qui vous écrivez, combien d’emails par jour, avec quel outil) et gardez sa réponse. S’il refuse, choisissez Microsoft.{{< /callout >}}

Une fois l’accord obtenu, mon tutoriel pour {{< a key="spacemail-setup" >}}configurer Spacemail{{< /a >}} couvre la création des boîtes.

## Délivrabilité : ce qui dépend du fournisseur, et ce qui dépend de vous

Le fournisseur maîtrise ses serveurs d’envoi : leur réputation, et les bases techniques que les règles de Gmail exigent de tout expéditeur, comme un DNS inverse valide et une connexion chiffrée. Quand vous envoyez par Microsoft, Google ou Spaceship, cette partie est leur affaire.

Le reste vous revient, quel que soit le fournisseur :

- Des domaines secondaires : le cold emailing ne part jamais de votre domaine principal, si bien qu’un problème de réputation n’atteint jamais l’adresse à laquelle vos clients écrivent.
- SPF, DKIM et DMARC sur chaque domaine d’envoi. Mon tutoriel pour {{< a key="spf-dkim-dmarc-setup" >}}configurer SPF, DKIM et DMARC{{< /a >}} montre les enregistrements à ajouter.
- Une liste vérifiée. Les adresses qui n’existent plus provoquent des rebonds, et les rebonds usent la réputation d’un domaine. Je nettoie mes listes avec Reoon avant le premier envoi.
- Des emails courts, en texte brut. Les miens n’ont ni lien ni HTML, j’en envoie trois au plus par contact, et chacun donne un numéro de téléphone à appeler. J’explique pourquoi dans mon article sur la {{< a key="plain-text-cold-emails" >}}délivrabilité en cold emailing{{< /a >}}.
- Une montée progressive. Chaque boîte démarre avec quelques emails par jour et monte peu à peu vers une trentaine, le chiffre que conseillent les guides d’Instantly.

Un meilleur fournisseur ne sauvera pas une campagne qui pèche sur ces points.

## Combien coûtent 10 ou 30 boîtes mail

Le prix d’une boîte paraît modeste jusqu’au moment de le multiplier. Le tableau reprend l’offre d’entrée de chaque fournisseur au moment où j’écris (octobre 2026).

| Fournisseur et offre | Une boîte par mois | 10 boîtes | 30 boîtes |
|---|---|---|---|
| Google Workspace Business Starter, engagement annuel | 6,80 € HT | 68 € HT | 204 € HT |
| Microsoft Exchange Online Plan 1, prix américain, engagement annuel | 4 $ | 40 $ | 120 $ |
| Spacemail, offre Pro ou supérieure, engagement de deux ans | Moins de 1 € (moins de 1 $) | Moins de 9 € (moins de 10 $) | Moins de 27 € (moins de 30 $) |

Les prix de Spaceship sont en dollars, et les montants en euros sont mes conversions approximatives ; ils varient selon la durée d’engagement et les offres du moment, donc la page de commande fait foi. À 30 boîtes, Spacemail vous fait économiser plus de 170 € par mois par rapport à Google, avant même de parler des règles, et l’offre de messagerie seule de Microsoft se situe entre les deux, à 120 $ (environ 107 €).

Les domaines et l’outil d’envoi s’ajoutent à ces montants : les domaines secondaires, renouvelés chaque année, et un abonnement mensuel pour l’outil.

{{< callout type="tip" >}}**Achetez une boîte avant d’en acheter trente.** Connectez-la à votre outil d’envoi, envoyez quelques emails de test vers vos propres adresses et posez vos questions au support du fournisseur. Ensuite seulement, multipliez.{{< /callout >}}

## Mon conseil, et quand déléguer

Si vous choisissez aujourd’hui, voici comment je trancherais :

- Pour la configuration la plus simple et le coût le plus bas : Spacemail, mais seulement une fois que le support de Spaceship a accepté par écrit ce que vous comptez envoyer.
- Si Spaceship refuse, ou si vous utilisez déjà Microsoft 365 : des boîtes Microsoft sur des domaines secondaires (Exchange Online Plan 1 suffit), en prévoyant du temps pour le SMTP authentifié et la connexion boîte par boîte.
- Si vous payez déjà Google Workspace : vous pouvez commencer avec, sur des domaines secondaires et des comptes payants, mais par expérience Google fait moins bien que Microsoft, alors suivez les réponses de chaque boîte dès la première semaine.
- Votre boîte de tous les jours est une autre décision. Pour l’adresse de votre domaine principal, celle à laquelle vos clients écrivent, le confort d’usage compte plus que les limites d’envoi, et mon guide sur l’{{< a key="professional-email-address" >}}adresse mail professionnelle{{< /a >}} compare les options.

Deux ou trois boîtes se mettent en place sans aide, avec les tutoriels cités plus haut. Trente, c’est un autre travail : une dizaine de domaines, des dizaines d’enregistrements DNS, une chauffe qui respecte les règles de chaque fournisseur et des réponses à faire suivre à la personne qui répond aux prospects. Si vous préférez tout confier, c’est le métier de [MLK Leadhunters](https://mlkleadhunters.com/fr/).
