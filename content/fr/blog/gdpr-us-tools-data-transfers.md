---
title: "Outils américains et RGPD : Google, Microsoft, Mailchimp et le Data Privacy Framework"
seo_title: "Transfert de données vers les États-Unis : RGPD et outils US"
description: "Transfert de données vers les États-Unis et RGPD : utiliser Google, Microsoft ou Mailchimp en règle avec le Data Privacy Framework, et les points à vérifier."
slug: "transfert-donnees-etats-unis-rgpd"
translationKey: "gdpr-us-tools-data-transfers"
date: 2026-10-18T21:18:00+02:00
lastmod: 2026-10-18T21:18:00+02:00
category: "gdpr"
article_type: "guide"
keywords: ["transfert de données États-Unis RGPD", "Data Privacy Framework", "transfert de données hors UE", "clauses contractuelles types", "Google Workspace RGPD", "Mailchimp RGPD"]
summary: "Une entreprise soumise au RGPD peut utiliser Google Workspace, Microsoft 365 ou Mailchimp si chaque transfert de données vers les États-Unis repose sur un mécanisme légal. Le plus simple : le Data Privacy Framework, en vigueur depuis le 10 juillet 2023 pour les entreprises inscrites comme actives sur dataprivacyframework.gov ; sinon, les clauses contractuelles types du contrat du prestataire. Au 19 octobre 2026, un pourvoi contre ce cadre est pendant devant la Cour de justice de l’UE : gardez ces clauses en secours."
cover: "gdpr-us-tools-data-transfers"
cover_alt: "Le titre de l’article en blanc sur un panneau de verre cannelé, devant une photo de boîtes reliées dans un diagramme de flux"
related: ["gdpr-data-processing-agreement", "gdpr-outside-eu", "newsletter-tools-comparison", "chatgpt-gdpr-client-data", "infomaniak-review"]
services: ["automation"]
faq:
  - q: "Faut-il informer ses clients d’un transfert de données vers les États-Unis ?"
    a: "Oui. Les articles 13 et 14 du RGPD (paragraphe 1, point f) imposent d’indiquer dans votre politique de confidentialité que vous transférez des données personnelles hors de l’EEE et sur quelle base : une décision d’adéquation comme le Data Privacy Framework, ou des garanties comme les clauses contractuelles types, avec le moyen d’en obtenir une copie."
  - q: "Peut-on utiliser un compte Gmail ou ChatGPT gratuit pour des données clients ?"
    a: "Mieux vaut l’éviter. Les comptes personnels n’ont pas de contrat de sous-traitance : OpenAI en propose un pour ChatGPT Business, ChatGPT Enterprise et son API, pas pour Free, Go, Plus ou Pro, et les conditions de traitement de Google accompagnent Google Workspace, pas un compte Gmail personnel."
  - q: "Faut-il une analyse d’impact des transferts si l’entreprise américaine est certifiée ?"
    a: "Pas pour les transferts fondés sur le cadre : un transfert vers une entreprise inscrite comme active est couvert par la décision d’adéquation. Si le contrat du prestataire s’appuie plutôt sur les clauses contractuelles types, comme celui de Microsoft, classez sa documentation sur les transferts ; dans tous les cas, il vous faut son contrat de sous-traitance (article 28)."
  - q: "Mailchimp est-il conforme au RGPD ?"
    a: "Aucun outil n’est conforme à lui seul : tout dépend de l’usage que vous en faites. Pour les transferts, Intuit, propriétaire de Mailchimp, est certifié au Data Privacy Framework, à son extension britannique et au cadre suisse, et Mailchimp indique que les clauses contractuelles types de son contrat prendraient le relais si le cadre tombait. Le consentement à l’inscription et l’information des abonnés restent votre travail."
  - q: "Le Data Privacy Framework couvre-t-il les données de mes salariés ?"
    a: "Seulement si la certification de l’entreprise américaine couvre les données RH. La liste officielle indique pour chaque entreprise si elle couvre les données RH, les autres données (clients, prospects, abonnés) ou les deux ; un outil de paie ou de RH a besoin de la première."
---

Si votre équipe utilise Gmail ou Outlook pour ses emails, Mailchimp pour sa newsletter, Zoom pour ses visios ou ChatGPT pour ses premiers jets, elle travaille avec des logiciels américains. Chacun de ces outils peut envoyer les données personnelles de vos clients aux États-Unis, et le RGPD n’autorise ce transfert de données que s’il repose sur l’un des mécanismes qu’il prévoit. Depuis le 10 juillet 2023, le principal est le Data Privacy Framework (DPF) : quand l’entreprise américaine est certifiée, le transfert ne demande aucune garantie supplémentaire.

Ce cadre est la troisième tentative. Les deux premières ont été invalidées par la Cour de justice de l’Union européenne, et un recours vise celle-ci. Une petite équipe a donc besoin de deux réponses : savoir si chaque outil est couvert aujourd’hui, et ce qui se passe si le cadre tombe. Ce guide répond aux deux, avec les règles pour la Suisse et le Royaume-Uni. Il fait partie de mon {{< a key="gdpr-guide" >}}guide du RGPD pour les petites équipes{{< /a >}} et décrit les règles au 19 octobre 2026.

## Ce que dit le RGPD sur le transfert de données vers les États-Unis

Le chapitre V du RGPD (articles 44 à 50, sur [EUR-Lex](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32016R0679)) encadre les transferts. Des données personnelles ne peuvent quitter l’Espace économique européen (l’UE, l’Islande, le Liechtenstein et la Norvège) que par l’une des trois voies suivantes.

| Voie | Article | En clair | Exemple |
|---|---|---|---|
| Décision d’adéquation | 45 | La Commission européenne a jugé que la destination protège assez les données : elles circulent comme à l’intérieur de l’UE | Suisse, Japon, entreprises américaines certifiées au Data Privacy Framework |
| Garanties appropriées | 46 | Un contrat ou des règles contraignantes obligent le destinataire à protéger les données, le plus souvent les clauses contractuelles types | Un outil américain non certifié |
| Dérogations | 49 | Des exceptions étroites pour des transferts ponctuels, comme le consentement explicite | Réserver un hôtel à New York pour un client |

La [carte de la CNIL](https://www.cnil.fr/fr/la-protection-des-donnees-dans-le-monde) montre quels pays bénéficient d’une décision d’adéquation. Il y a transfert quand une entreprise soumise au RGPD envoie des données personnelles à une société hors de l’EEE, ou les met à sa disposition : importer vos abonnés dans une plateforme de newsletter américaine, stocker des dossiers clients dans un cloud américain, ouvrir votre compte au support d’un éditeur américain. Selon les lignes directrices 05/2021 du Comité européen de la protection des données (CEPD), ce qu’une personne dans l’UE saisit elle-même sur un site étranger n’est pas un transfert, mais ce que ce site transmet ensuite à une autre société hors de l’UE peut l’être.

Deux questions se mélangent souvent. Le contrat de sous-traitance exigé par l’article 28 dit ce que le prestataire peut faire de vos données (voir mon guide du {{< a key="gdpr-data-processing-agreement" >}}contrat de sous-traitance RGPD{{< /a >}}) ; le mécanisme de transfert dit pourquoi elles ont le droit de quitter l’Europe. **Il vous faut les deux**, et la plupart des outils les réunissent dans le même document.

## Du Safe Harbor au Data Privacy Framework UE–États-Unis

Les transferts vers les États-Unis ont été reconstruits deux fois, chaque fois parce que la Cour de justice a jugé que le droit américain du renseignement ne protégeait pas assez les Européens :

- le Safe Harbor (2000) a été invalidé en octobre 2015, dans la première affaire portée par le militant Max Schrems ;
- le Privacy Shield (2016) a été invalidé le 16 juillet 2020 par l’arrêt Schrems II, sans délai de grâce : les transferts fondés sur lui ont perdu leur base légale du jour au lendemain ;
- le Data Privacy Framework fait suite au décret présidentiel (Executive Order) 14086 d’octobre 2022, qui limite l’accès du renseignement américain à ce qui est nécessaire et proportionné, et crée une voie de recours devant une nouvelle Data Protection Review Court. La décision d’adéquation de la Commission (décision d’exécution (UE) 2023/1795) s’applique depuis le 10 juillet 2023.

Ce cadre a passé une première épreuve. Le 3 septembre 2025, le Tribunal de l’Union européenne a rejeté le recours du député français Philippe Latombe (affaire T-553/23). Celui-ci a formé un pourvoi devant la Cour de justice le 31 octobre 2025 (affaire C-703/25 P), en soutenant notamment qu’une juridiction créée par un décret présidentiel plutôt que par une loi du Congrès n’est pas indépendante. Au 19 octobre 2026, je n’ai trouvé aucun arrêt : le cadre s’applique, et les transferts qui s’y appuient sont licites.

{{< callout type="tip" >}}**Utilisez le cadre, mais gardez une roue de secours.** Vérifiez que le contrat de chaque prestataire américain contient aussi des clauses contractuelles types. Mailchimp, par exemple, indique que ses clauses s’appliqueraient automatiquement si le cadre était invalidé. Si la Cour de justice l’annule, vos transferts resteront couverts le lendemain matin.{{< /callout >}}

## Vérifier une entreprise sur la liste du Data Privacy Framework

Le département du Commerce américain publie la [liste officielle du Data Privacy Framework](https://www.dataprivacyframework.gov/list). Vérifier un prestataire prend quelques minutes :

1. Cherchez l’entité juridique, pas la marque : Mailchimp figure sous le nom de son propriétaire, Intuit, et l’entité certifiée de Google est Google LLC.
2. Vérifiez que le statut est actif. La certification se renouvelle chaque année ; une entreprise qui la laisse expirer apparaît comme inactive et ne peut plus recevoir de données au titre du cadre.
3. Regardez à quels volets elle a adhéré : le cadre UE–États-Unis, l’extension britannique (UK Extension) et le cadre suisse sont listés séparément.
4. Enregistrez un PDF ou une capture datée de la fiche avec le contrat du prestataire, pour garder la trace de votre vérification.

Ouvrez ensuite le contrat de sous-traitance du prestataire à sa section sur les transferts internationaux. **Être certifié et s’appuyer sur le cadre sont deux choses différentes.** Microsoft est certifié, mais sa [page consacrée au RGPD](https://learn.microsoft.com/fr-fr/compliance/regulatory/gdpr) indique qu’il ne s’appuie pas sur le cadre pour les transferts depuis l’UE, et ses contrats utilisent les clauses contractuelles types. C’est tout aussi licite : ce qui compte, c’est qu’un mécanisme valable couvre le transfert, et le contrat vous dit lequel.

## Google, Microsoft, Mailchimp et ChatGPT : ce que j’ai trouvé

Voici où en étaient, au 19 octobre 2026, quatre outils que beaucoup de petites équipes utilisent. Les certifications évoluent : vérifiez chaque entreprise avant de vous fier à ce tableau.

| Outil | Entreprise américaine | Base des transferts |
|---|---|---|
| Google Workspace | Google LLC | Certifiée au cadre UE–États-Unis, à l’extension britannique et au cadre suisse, et Google indique sur sa page consacrée aux cadres de transfert qu’il s’appuie sur les trois |
| Microsoft 365 | Microsoft Corporation | Certifiée aux trois, mais s’appuie sur les clauses contractuelles types pour les transferts depuis l’UE |
| Mailchimp | Intuit | Certifiée aux trois, avec en secours les clauses contractuelles types du contrat de Mailchimp |
| ChatGPT | OpenAI | Contrat de sous-traitance, signé via le formulaire DPA d’OpenAI, pour ChatGPT Business, ChatGPT Enterprise et l’API, avec des transferts sur clauses contractuelles types |

Faites la même vérification pour vos autres outils américains : Zoom, Slack, votre CRM, votre outil de prise de rendez-vous, votre plateforme de cold emailing. Les petits ajouts comptent aussi : Microsoft Clarity, que j’utilise pour voir où les visiteurs s’attardent sur une page et quelles zones les font fuir, est un service américain comme les autres. Pour les assistants IA, le transfert n’est qu’une des questions ; mon guide sur {{< a key="chatgpt-gdpr-client-data" >}}les données clients que vous pouvez confier à ChatGPT{{< /a >}} traite les autres.

## Outil absent de la liste : les clauses contractuelles types

Les clauses contractuelles types sont un contrat modèle adopté par la Commission européenne en juin 2021 (décision d’exécution (UE) 2021/914). Le module qui concerne un prestataire travaillant pour votre compte est celui « responsable du traitement à sous-traitant ». Vous ne les négociez pas : elles sont intégrées au contrat de sous-traitance du prestataire, et accepter ce contrat revient à les accepter.

Depuis l’arrêt Schrems II, qui a maintenu ces clauses, une entreprise qui s’appuie sur elles doit aussi vérifier que le droit du pays de destination permet au destinataire de les respecter : c’est l’analyse d’impact des transferts. Pour les États-Unis, l’exercice est plus léger qu’en 2021, car la Commission européenne a indiqué que les garanties du décret 14086 s’appliquent à tous les transferts vers ce pays, quel que soit l’outil. En pratique, demandez au prestataire sa documentation sur les transferts (beaucoup publient une analyse d’impact), classez-la avec le contrat et une note datée expliquant pourquoi le risque est acceptable, et revoyez-la quand quelque chose change.

Si un prestataire ne propose ni le cadre ni les clauses, n’y mettez pas de données clients. Les dérogations de l’article 49, comme le consentement explicite, visent des transferts ponctuels ; le CEPD les interprète strictement, et elles ne peuvent pas porter un outil utilisé tous les jours.

## Suisse et Royaume-Uni : le cadre suisse et le data bridge britannique

La Suisse a son propre cadre, le Swiss-U.S. Data Privacy Framework : le Conseil fédéral l’a reconnu par une décision du 14 août 2024, et les entreprises suisses peuvent s’appuyer dessus depuis le 15 septembre 2024. Sans ce volet de la certification, la voie habituelle reste des clauses contractuelles adaptées au droit suisse.

Le Royaume-Uni, qui applique ses propres règles, a fait de même : depuis le 12 octobre 2023, son « data bridge » couvre les entreprises américaines certifiées au titre de l’extension britannique, qui suppose d’adhérer aussi au cadre UE–États-Unis.

Les mêmes vérifications valent hors d’Europe : une entreprise de Montréal, de Casablanca ou de New York qui vend à des personnes dans l’UE (voir mon guide sur {{< a key="gdpr-outside-eu" >}}le RGPD pour les entreprises hors UE{{< /a >}}) peut réaliser un transfert, selon le CEPD, lorsqu’elle confie leurs données à une autre société hors de l’UE.

## Garder ses données en Europe : régions de données et outils européens

Certains prestataires américains permettent de garder les données en Europe :

- Google Workspace propose des régions de données (data regions) sur ses éditions Business Standard, Business Plus et Enterprise : l’administrateur peut y stocker certaines données au repos en Europe. Je n’ai pas pu le confirmer pour Business Starter : vérifiez votre édition dans la console d’administration.
- Microsoft a achevé son EU Data Boundary le 26 février 2025 : pour les clients professionnels de l’UE et de l’AELE, Microsoft 365, Dynamics 365, Power Platform et Azure stockent et traitent dans cette zone les données client, les données personnelles pseudonymisées et les données de support.

Une région européenne réduit les transferts mais ne rend pas le prestataire européen : l’entreprise américaine exploite toujours le service, et ses équipes de support et de sécurité peuvent avoir besoin d’y accéder depuis ailleurs. C’est un plus, pas un remplacement des vérifications ci-dessus.

Pour éviter la question sur certains outils, des solutions européennes existent pour la plupart des usages :

- newsletters : Brevo, une entreprise française (voir mon {{< a key="newsletter-tools-comparison" >}}comparatif des outils de newsletter{{< /a >}}) ;
- emails, fichiers et visioconférence : la kSuite d’Infomaniak, hébergeur genevois que je recommande vivement même si mes propres habitudes sont chez Spaceship (voir {{< a key="infomaniak-review" >}}mon avis sur Infomaniak{{< /a >}}) ;
- gros fichiers : SwissTransfer, également d’Infomaniak, bien meilleur que WeTransfer à mon avis ({{< a key="swisstransfer-vs-wetransfer" >}}mon article sur SwissTransfer{{< /a >}} explique pourquoi) ;
- email chiffré : Proton, basé en Suisse ;
- mesure d’audience : Matomo, que vous pouvez héberger vous-même en Europe ; la CNIL publie un guide pour le configurer en mode exempté de consentement.

Un prestataire européen peut lui aussi avoir des sous-traitants américains : lisez sa liste. Et mon conseil est de ne pas faire migrer toute une équipe pour cette seule raison : un outil américain certifié, avec un contrat signé, est licite, et chaque migration coûte du temps. Changez quand un outil ne vous convient plus de toute façon, quand un client exige un hébergement européen, ou quand vous traitez des données sensibles.

## Votre liste de vérification, et quand consulter un avocat

1. **Listez chaque outil qui touche des données personnelles :** messagerie, CRM, newsletter, rendez-vous, visio, chat, assistants IA, formulaires, mesure d’audience et paiement.
2. **Cherchez chaque entreprise américaine** sur la liste du Data Privacy Framework, avec les volets britannique et suisse si vous en avez besoin, et gardez la fiche datée.
3. **Trouvez son contrat de sous-traitance** et le mécanisme qu’il prévoit : le cadre, les clauses contractuelles types, ou les deux. Gardez les données clients sur des offres professionnelles.
4. **Activez la localisation européenne des données** quand votre offre l’inclut.
5. **Mettez à jour votre politique de confidentialité** avec les outils qui envoient des données hors de l’EEE et la base de chaque transfert.
6. **Programmez un rappel annuel** pour tout revérifier, et surveillez l’arrêt de la Cour de justice dans l’affaire C-703/25 P.

Ce guide donne des informations générales, pas un conseil juridique. Vous n’avez pas besoin d’un avocat pour faire ces vérifications sur des outils courants. Un avocat ou un DPO se justifie si vous envoyez des données de santé ou d’autres données sensibles vers un outil américain, confiez les dossiers de vos salariés à une plateforme RH américaine, recevez un questionnaire sur vos transferts d’un grand client ou d’un organisme public, ou dépendez d’un outil qui ne propose ni le cadre ni les clauses.

Côté site web, la page de confidentialité qui nomme vos outils et le bandeau de consentement qui bloque les traceurs américains tant que les visiteurs n’ont pas accepté font partie des {{< a page="/services/websites" >}}sites que je réalise{{< /a >}}.
