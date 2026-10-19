---
title: "Automatiser le suivi des prospects : alertes instantanées et rappels gratuits"
seo_title: "Automatiser le suivi des prospects avec Google Apps Script"
description: "Automatiser le suivi des prospects gratuitement avec Google Forms, Sheets et Apps Script : alerte email immédiate, liste de suivi et rappel automatique."
slug: "automatiser-suivi-prospects"
translationKey: "automate-lead-follow-up"
date: 2026-10-17T09:07:00+02:00
lastmod: 2026-10-17T09:07:00+02:00
category: "ai-automation"
article_type: "tutorial"
keywords: ["automatiser le suivi des prospects", "suivi des prospects Google Sheets", "tableau de suivi des prospects", "Google Apps Script email", "notification Google Forms", "rappel prospect automatique"]
summary: "Pour automatiser le suivi des prospects gratuitement, reliez un formulaire Google Forms à une feuille Google Sheets et ajoutez un court script Google Apps Script. Il vous envoie une alerte par email avec le nom et le numéro du prospect dès l’envoi du formulaire, inscrit la demande dans un onglet Prospects et vous envoie un rappel si elle est encore « Nouvelle » une heure plus tard. Tout fonctionne avec un compte Google gratuit, sans abonnement."
cover: "automate-lead-follow-up"
cover_alt: "Les mots Apps Script sous un schéma d’automatisation qui part d’un déclencheur orange en forme d’éclair, derrière une vitre cannelée"
related: ["zapier-vs-make-vs-n8n", "bespoke-crm-internal-app", "website-conversion-rate", "build-sales-funnel", "ai-small-business-guide"]
services: ["automation"]
faq:
  - q: "Google Apps Script est-il gratuit ?"
    a: "Oui. Apps Script est inclus dans tout compte Google, y compris un compte Gmail gratuit, et aucune exécution n’est facturée. Google limite en revanche l’usage par des quotas quotidiens, plus élevés avec un abonnement Google Workspace."
  - q: "Le script fonctionne-t-il quand mon ordinateur est éteint ?"
    a: "Oui. Les déclencheurs s’exécutent sur les serveurs de Google : les alertes et les rappels arrivent que votre ordinateur soit allumé ou non. Ils s’arrêtent si vous supprimez les déclencheurs ou la feuille de calcul."
  - q: "Mon formulaire de contact n’est pas un Google Forms : est-ce que cela marche quand même ?"
    a: "En partie. L’alerte instantanée a besoin d’un formulaire Google Forms associé à la feuille, car c’est son envoi qui la déclenche. Le rappel, lui, fonctionne avec toute ligne de l’onglet Prospects au statut Nouvelle : un outil comme Zapier ou Make peut y copier chaque demande envoyée depuis votre site."
  - q: "Peut-on recevoir un SMS plutôt qu’un email ?"
    a: "Apps Script n’a pas de service SMS intégré. Le plus simple est d’activer les notifications de votre application email sur votre téléphone. Pour un vrai SMS, il faut passer par l’API d’un fournisseur de SMS ou par un outil d’automatisation, en général sur une offre payante."
  - q: "Comment arrêter les alertes ?"
    a: "Ouvrez le projet Apps Script, allez dans la page Déclencheurs (l’icône en forme d’horloge) et supprimez les deux déclencheurs. La feuille de calcul et l’onglet Prospects restent intacts."
---

La demande qui attend le lendemain est souvent celle à laquelle un concurrent répond le jour même. Pour automatiser le suivi des prospects gratuitement, il vous faut trois choses : une alerte dès qu’une demande arrive, une seule liste où chaque demande a un statut, et un rappel quand un prospect attend toujours votre appel. Un formulaire Google Forms, une feuille Google Sheets et un court script Apps Script font les trois, avec un compte Google gratuit.

J’apporte à l’un de mes clients, {{< a page="/projects/pilotech" >}}Pilotech{{< /a >}}, une dizaine de prospects par jour. À un moment, il y en avait plus que l’équipe ne pouvait en suivre, et le fondateur m’a demandé une application pour tout voir clairement et ne jamais oublier de rappeler un prospect. Cette application, développée sur mesure, va bien au-delà du suivi. Pour commencer, vous n’en avez pas besoin : la méthode ci-dessous couvre les deux points essentiels, l’alerte et le rappel.

Ce tutoriel vous mène d’un formulaire vide à des alertes opérationnelles en six étapes, avec un code à copier tel quel. Il complète mon guide de l’{{< a key="ai-small-business-guide" >}}IA pour TPE et PME{{< /a >}}.

## Ce qu’il faut pour automatiser le suivi des prospects

Tout se passe dans une seule feuille de calcul Google, en trois parties :

| Partie | Ce qu’elle fait | Quand |
|---|---|---|
| Alerte immédiate | Vous envoie par email le nom et le numéro du prospect dans l’objet, avec toutes ses réponses | Dès l’envoi du formulaire |
| Liste de suivi | Garde une ligne par demande dans un onglet Prospects, avec un statut : Nouvelle, Appel passé, Devis envoyé ou Sans suite | Remplie par le script, mise à jour par vous |
| Rappel | Vous envoie les demandes encore au statut Nouvelle après une heure | Vérifié toutes les 15 minutes, pendant vos heures de travail |

Il vous faut un compte Google (un compte Gmail gratuit suffit), un ordinateur pour la mise en place et, au quotidien, un téléphone avec votre application de messagerie et l’application Google Sheets.

Google Forms sait déjà prévenir par email à chaque réponse : dans l’onglet **Réponses**, le menu à trois points propose de recevoir une notification pour chaque nouvelle réponse. Mais chaque collaborateur doit l’activer de son côté, et cette option ne tient aucune liste de suivi et ne relance personne. Le script ajoute ces deux parties.

## Pourquoi la rapidité compte, appels manqués compris

C’est dans la première heure qu’une demande a le plus de valeur. Une étude publiée en 2011 dans la Harvard Business Review, portant sur 1,25 million de demandes reçues par des entreprises américaines, montre que celles qui tentaient de joindre le prospect dans l’heure avaient près de sept fois plus de chances de le qualifier que celles qui essayaient ne serait-ce qu’une heure plus tard ([HBR](https://hbr.org/2011/03/the-short-life-of-online-sales-leads)). Dans le même article, 23 % des entreprises auditées ne répondaient jamais.

Avec le cold emailing, les premières réponses arrivent vite. Je m’occupe de tout pour mes clients, sauf des réponses : les réponses et les appels vont au client, et les premiers résultats arrivent dans les 36 premières heures. **Le suivi doit donc être prêt avant l’envoi du premier email.**

Beaucoup de ces prospects ne répondent pas : ils appellent. Je mets un numéro de téléphone dans l’email et je les invite à le composer. Un appel va plus vite qu’une réponse écrite qui se noie parmi les autres emails, c’est comme cocher une ligne de sa liste de tâches, et les gens aiment le contact humain. J’en détaille les raisons dans mon comparatif {{< a key="cold-calling-vs-cold-emailing" >}}prospection téléphonique ou emailing{{< /a >}}. Pour votre suivi, cela veut dire que les appels manqués doivent entrer dans la même liste que les formulaires, sinon ils sont oubliés. L’étape 6 montre comment.

## Étape 1 : créer le formulaire de demande

Dans Google Forms (`forms.google.com`), créez un formulaire vide et ajoutez quatre questions. Gardez ces titres, ou notez les vôtres : le script retrouve chaque réponse grâce à son titre exact.

| Titre de la question | Type | Obligatoire |
|---|---|---|
| Nom | Réponse courte | Oui |
| Téléphone | Réponse courte | Oui |
| Email | Réponse courte | Non |
| Votre demande | Paragraphe | Oui |

Rendez le téléphone obligatoire : si un prospect préfère parler, il vous faut un numéro à rappeler. Dans la description du formulaire, ajoutez une phrase sur l’usage que vous ferez de ces informations, avec un lien vers {{< a key="privacy-policy-guide" >}}votre politique de confidentialité{{< /a >}}.

Cliquez ensuite sur **Publier** (en haut à droite) : un formulaire non publié n’accepte aucune réponse. Pour l’intégrer à votre site, ouvrez le menu à trois points, choisissez l’intégration HTML (icône `< >`, parfois sous **Envoyer**) et collez le code dans une page, ou placez le lien du formulaire derrière un bouton.

{{< screenshot id="automate-lead-follow-up-01" alt="Un formulaire Google Forms avec quatre questions : Nom, Téléphone, Email et Votre demande" >}}

## Étape 2 : associer le formulaire à une feuille Google Sheets

1. Dans le formulaire, ouvrez l’onglet **Réponses** et cliquez sur **Associer à Sheets**.
2. Choisissez de créer une feuille de calcul, puis validez.
3. Dans la feuille qui s’ouvre, allez dans **Fichier > Paramètres** et vérifiez le fuseau horaire (Paris pour la France) : les rappels s’y fient.

Le premier onglet reçoit les réponses brutes, une ligne par demande. Laissez-le tel quel : le script tient sa propre liste dans un onglet séparé.

{{< screenshot id="automate-lead-follow-up-02" alt="L’onglet Réponses d’un formulaire Google Forms, avec le bouton Associer à Sheets" >}}

## Étape 3 : coller le script

Dans la feuille de calcul, cliquez sur **Extensions > Apps Script**. L’éditeur s’ouvre dans un nouvel onglet, avec une fonction vide nommée `myFunction`. Supprimez-la, collez le code ci-dessous et adaptez les réglages du début :

- `DESTINATAIRES` : qui reçoit les alertes et les rappels ; séparez plusieurs adresses par des virgules.
- `QUESTIONS` : les titres de vos questions, s’ils diffèrent du tableau ci-dessus.
- `HEURE_OUVERTURE` et `HEURE_FERMETURE` : vos heures de travail, au format 24 heures. Les rappels ne partent qu’entre ces heures, sept jours sur sept ; les alertes partent à toute heure.

```javascript
/** @OnlyCurrentDoc */
// Suivi des prospects : alerte immédiate, liste Prospects et rappel.

// Réglages : ne modifiez que ces lignes
const DESTINATAIRES = 'vous@exemple.fr';  // plusieurs adresses : séparez-les par des virgules
const ONGLET = 'Prospects';
const RAPPEL_APRES_MINUTES = 60;          // rappel si une demande est encore Nouvelle après ce délai
const HEURE_OUVERTURE = 8;                // rappels seulement entre ces heures (format 24 h)
const HEURE_FERMETURE = 19;
const QUESTIONS = {                       // le titre exact des questions du formulaire
  nom: 'Nom',
  telephone: 'Téléphone',
  email: 'Email',
  message: 'Votre demande',
};

// À exécuter une fois : crée l'onglet Prospects et les deux déclencheurs
function installer() {
  const ss = SpreadsheetApp.getActive();
  let feuille = ss.getSheetByName(ONGLET);
  if (!feuille) {
    feuille = ss.insertSheet(ONGLET);
    feuille.appendRow(['Reçue le', 'Nom', 'Téléphone', 'Email', 'Message', 'Statut', 'Rappel envoyé']);
  }
  const statuts = SpreadsheetApp.newDataValidation()
    .requireValueInList(['Nouvelle', 'Appel passé', 'Devis envoyé', 'Sans suite']).build();
  feuille.getRange('F2:F').setDataValidation(statuts);
  ScriptApp.getProjectTriggers().forEach((d) => ScriptApp.deleteTrigger(d));
  ScriptApp.newTrigger('nouvelleDemande').forSpreadsheet(ss).onFormSubmit().create();
  ScriptApp.newTrigger('rappelerDemandesEnAttente').timeBased().everyMinutes(15).create();
}

// S'exécute tout seul à chaque envoi du formulaire
function nouvelleDemande(e) {
  const ss = SpreadsheetApp.getActive();
  const reponse = (titre) => (e.namedValues[titre] || [''])[0];
  const nom = reponse(QUESTIONS.nom);
  const tel = reponse(QUESTIONS.telephone);
  const details = Object.keys(e.namedValues)
    .map((titre) => titre + ' : ' + e.namedValues[titre].join(', ')).join('\n');
  MailApp.sendEmail(DESTINATAIRES, 'Nouvelle demande : ' + nom + ', ' + tel,
    details + '\n\nListe de suivi : ' + ss.getUrl());
  // L'apostrophe garde les réponses en texte : le 0 initial reste et aucune formule ne s'exécute
  ss.getSheetByName(ONGLET).appendRow([new Date(), "'" + nom, "'" + tel,
    "'" + reponse(QUESTIONS.email), "'" + reponse(QUESTIONS.message), 'Nouvelle', '']);
}

// S'exécute toutes les 15 minutes : un seul rappel par demande encore Nouvelle après le délai
function rappelerDemandesEnAttente() {
  const ss = SpreadsheetApp.getActive();
  const fuseau = ss.getSpreadsheetTimeZone();
  const heure = Number(Utilities.formatDate(new Date(), fuseau, 'H'));
  if (heure < HEURE_OUVERTURE || heure >= HEURE_FERMETURE) return;
  const feuille = ss.getSheetByName(ONGLET);
  const lignes = feuille.getDataRange().getValues();
  const enAttente = [];
  for (let i = 1; i < lignes.length; i++) {
    const [recue, nom, tel, email, message, statut, rappel] = lignes[i];
    if (statut !== 'Nouvelle' || rappel) continue;
    if (!(recue instanceof Date)) {           // ligne saisie à la main : le compteur démarre maintenant
      feuille.getRange(i + 1, 1).setValue(new Date());
      continue;
    }
    if (Date.now() - recue.getTime() < RAPPEL_APRES_MINUTES * 60000) continue;
    enAttente.push(nom + ', ' + tel + ', reçue le ' + Utilities.formatDate(recue, fuseau, "dd/MM 'à' HH:mm"));
    feuille.getRange(i + 1, 7).setValue(new Date());
  }
  if (enAttente.length > 0) {
    MailApp.sendEmail(DESTINATAIRES, 'À rappeler : ' + enAttente.length + ' demande(s) en attente',
      enAttente.join('\n') + '\n\nListe de suivi : ' + ss.getUrl());
  }
}
```

Enregistrez avec Ctrl+S (Cmd+S sur Mac), puis cliquez sur le nom du projet, en haut, pour le renommer, par exemple Suivi des prospects.

{{< screenshot id="automate-lead-follow-up-03" alt="L’éditeur Apps Script avec le script de suivi des prospects collé et les réglages en haut" >}}

### Ce que fait le script

- `installer` crée l’onglet Prospects, sa liste déroulante de statuts et deux déclencheurs, qui demandent à Google d’exécuter une fonction automatiquement : l’un à chaque envoi du formulaire, l’autre toutes les 15 minutes. Il supprime d’abord les anciens déclencheurs : le lancer deux fois ne double jamais les alertes.
- `nouvelleDemande` envoie l’alerte et ajoute la demande à l’onglet Prospects, au statut Nouvelle.
- `rappelerDemandesEnAttente` envoie un seul email pour les demandes encore au statut Nouvelle après le délai, et note l’heure dans la colonne Rappel envoyé : une demande ne reçoit qu’un rappel.

La première ligne, `@OnlyCurrentDoc`, limite le script à cette feuille de calcul : il ne peut pas ouvrir vos autres fichiers. Il envoie ses emails avec MailApp, un service qui sait envoyer des emails mais ne peut pas lire votre boîte de réception.

{{< callout type="tip" >}}Pour changer un réglage plus tard, modifiez-le et enregistrez : **les déclencheurs exécutent toujours la dernière version enregistrée**, inutile de relancer `installer`. Si vous renommez l’onglet Prospects, modifiez `ONGLET` en conséquence.{{< /callout >}}

## Étape 4 : lancer l’installation et autoriser le script

1. Dans la barre d’outils, choisissez `installer` dans la liste des fonctions, puis cliquez sur **Exécuter**.
2. Google demande votre autorisation : cliquez sur **Examiner les autorisations** et choisissez votre compte.
3. Sur un compte Gmail gratuit, Google affichera probablement un avertissement indiquant qu’il n’a pas validé l’application. C’est normal pour un script que vous avez créé et que Google n’a pas examiné : cliquez sur **Paramètres avancés**, en bas de l’avertissement, puis sur le lien « Accéder à Suivi des prospects (non sécurisé) ».
4. Acceptez toutes les autorisations de la liste : modifier cette feuille de calcul, envoyer des emails en votre nom et s’exécuter en votre absence. Si Google affiche des cases à cocher, cochez-les toutes, sinon le script s’arrête sur une erreur d’autorisation.

Le journal d’exécution, en bas de l’éditeur, indique que l’exécution est terminée. Dans la feuille de calcul, un onglet Prospects est apparu, avec une liste déroulante dans la colonne Statut. Dans la barre latérale gauche de l’éditeur, cliquez sur l’icône d’horloge (**Déclencheurs**) : deux déclencheurs apparaissent, l’un pour les envois du formulaire, l’autre basé sur le temps.

{{< screenshot id="automate-lead-follow-up-04" alt="La page Déclencheurs du projet Apps Script avec deux déclencheurs, l’un à l’envoi du formulaire, l’autre toutes les 15 minutes" >}}

{{< callout type="warning" >}}Toute personne qui peut modifier la feuille de calcul peut aussi ouvrir et modifier son script, et les déclencheurs continuent de s’exécuter avec votre compte. **Ne donnez le droit de modification qu’à des personnes de confiance**, et ne collez que du code que vous avez lu ou qui vient d’une source sûre.{{< /callout >}}

## Étape 5 : tester l’alerte et le rappel

1. Ouvrez le formulaire comme un visiteur, avec son lien public, et envoyez une demande de test avec vos propres nom et numéro.
2. L’alerte doit arriver en quelques instants, avec le nom et le numéro dans l’objet. Sinon, regardez dans vos spams.
3. Dans l’onglet Prospects, la demande apparaît avec le statut Nouvelle.
4. Pour tester le rappel sans attendre une heure, passez `RAPPEL_APRES_MINUTES` à 0, enregistrez, choisissez `rappelerDemandesEnAttente` dans la liste des fonctions et cliquez sur **Exécuter**, pendant vos heures de travail. Le rappel arrive, et la colonne Rappel envoyé affiche l’heure.
5. Remettez `RAPPEL_APRES_MINUTES` à 60, enregistrez, et passez la demande de test en Sans suite.

{{< screenshot id="automate-lead-follow-up-05" alt="L’email d’alerte dans Gmail, avec le nom et le numéro du prospect dans l’objet" >}}

## Étape 6 : l’utiliser au quotidien, appels manqués compris

Désormais, la seule étape manuelle, c’est le statut. La personne qui rappelle le prospect passe son statut de Nouvelle à Appel passé, puis à Devis envoyé ou Sans suite. L’application Google Sheets sur un téléphone suffit, entre deux rendez-vous.

- Appels manqués : quand vous manquez un appel sans pouvoir rappeler tout de suite, ajoutez une ligne dans l’onglet Prospects avec le nom, le numéro (commencez-le par une apostrophe, comme `'0612345678`, sinon Sheets risque de supprimer le 0 initial), « Appel manqué » dans Message et Nouvelle dans Statut. Laissez Reçue le vide : le script y inscrit l’heure à sa vérification suivante, et le rappel fonctionne comme pour un formulaire.
- L’équipe : partagez la feuille avec les personnes qui rappellent les prospects (**Partager**, en haut à droite) et ajoutez leurs adresses à `DESTINATAIRES` si elles doivent recevoir les alertes.
- Les colonnes : ne renommez, ne déplacez et ne supprimez pas les sept colonnes de l’onglet Prospects, car le script les lit par position. Ajoutez les vôtres à partir de la colonne H.

{{< screenshot id="automate-lead-follow-up-06" alt="L’onglet Prospects avec les colonnes Reçue le, Nom, Téléphone, Email, Message, Statut et Rappel envoyé, et la liste déroulante des statuts ouverte" >}}

### Garder une liste propre

L’onglet Prospects et les emails d’alerte contiennent des données personnelles : noms, numéros, parfois le détail d’un projet. Fixez {{< a key="gdpr-data-retention-crm" >}}une durée de conservation{{< /a >}} pour les prospects qui ne sont pas devenus clients. Le référentiel de la CNIL sur la [gestion des activités commerciales](https://www.cnil.fr/fr/questions-reponses-sur-les-referentiels-relatifs-la-gestion-des-activites-commerciales-et-des) retient trois ans à compter de la collecte ou du dernier contact venant du prospect. Une fois par mois, supprimez les lignes et les emails d’alerte devenus inutiles.

## Les limites de Google Apps Script sur un compte gratuit

Google fixe des quotas quotidiens par compte. Voici ceux qui comptent ici, au moment où j’écris (octobre 2026) :

| | Compte Gmail gratuit | Google Workspace |
|---|---|---|
| Destinataires d’emails par jour, tous scripts confondus | 100 | 1 500 |
| Durée d’une exécution | 6 minutes | 6 minutes |
| Durée totale des déclencheurs par jour | 90 minutes | 6 heures |

Chaque alerte compte un destinataire par adresse de `DESTINATAIRES`. Avec dix demandes par jour envoyées à deux personnes, les alertes consomment 20 destinataires et les rappels quelques-uns de plus : on reste loin de la limite gratuite. Une exécution de ce script dure quelques secondes, et ses 96 vérifications quotidiennes restent très en dessous de la limite des déclencheurs.

Google remet les quotas à zéro 24 heures après la première requête et peut les modifier sans préavis : consultez la [page des quotas d’Apps Script](https://developers.google.com/apps-script/guides/services/quotas?hl=fr) si vos volumes augmentent.

## Dépannage

La page **Exécutions**, dans la barre latérale gauche de l’éditeur, liste chaque exécution avec son statut et l’éventuel message d’erreur.

| Symptôme | Cause probable | Solution |
|---|---|---|
| Pas d’alerte après un test | Une faute dans `DESTINATAIRES`, ou l’email est parti en spam | Vérifiez l’adresse et les spams, puis la page Exécutions |
| Erreur `Cannot read properties of undefined (reading 'namedValues')` | `nouvelleDemande` a été lancée avec Exécuter, alors qu’elle a besoin d’un envoi de formulaire | Testez en envoyant le formulaire |
| Deux alertes par demande | Un second déclencheur de formulaire, ajouté à la main par exemple | Relancez `installer` : il supprime d’abord les anciens déclencheurs |
| Nom ou téléphone vide dans l’onglet Prospects | Un titre de `QUESTIONS` diffère du formulaire | Recopiez les titres du formulaire au caractère près |
| Pas de rappel | Statut différent de Nouvelle, hors horaires, ou mauvais fuseau horaire | Vérifiez la cellule Statut, les réglages d’horaires et Fichier > Paramètres |
| Erreur de quota sur le service d’email | Le quota quotidien d’emails est épuisé | Moins d’adresses dans `DESTINATAIRES`, ou un compte Workspace |

## Quand passer à Zapier, Make ou à une application sur mesure

Ce système convient à une ou deux personnes et à quelques dizaines de demandes par jour au plus : au-delà, les 100 destinataires quotidiens d’un compte gratuit deviennent justes. Trois signes montrent que vous l’avez dépassé :

1. Vos demandes arrivent de plusieurs endroits (site, outil de prise de rendez-vous, email, téléphone) et vous voulez les réunir dans une seule liste sans rien recopier. Les outils d’automatisation le font sans code : au moment où j’écris, l’offre gratuite de Zapier comprend 100 tâches par mois et celle de Make 1 000 crédits, et mon comparatif {{< a key="zapier-vs-make-vs-n8n" >}}n8n vs Make vs Zapier{{< /a >}} détaille ce que coûte chacun au-delà.
2. Les demandes deviennent des chantiers, des plannings et des factures, et plusieurs personnes ont besoin de vues différentes. C’est là que mon client a eu besoin d’une application sur mesure : prospects, chantiers, échanges avec l’équipe, calendrier et analyses comptables au même endroit, avec des intégrations d’IA et de téléphonie. Mon guide du {{< a key="bespoke-crm-internal-app" >}}CRM sur mesure{{< /a >}} vous aide à savoir si vous en êtes là.
3. Vous voulez de l’aide pour trier les demandes ou y répondre. Une étape d’IA peut classer chacune (demande de devis, question, spam) ou rédiger un brouillon de réponse ; mon tutoriel sur l’{{< a key="claude-api-tutorial" >}}API Claude{{< /a >}} montre comment créer une clé avec un plafond de dépenses. L’appel, lui, reste humain.

Si trop peu de demandes arrivent, le problème se situe en amont : mon guide pour {{< a key="website-conversion-rate" >}}améliorer le taux de conversion de votre site{{< /a >}} montre où les visiteurs décrochent. Mon tutoriel pour {{< a key="build-sales-funnel" >}}créer un tunnel de vente avec vos outils actuels{{< /a >}} couvre cette partie en amont.

Vous n’avez pas besoin de moi pour mettre cela en place : les six étapes et une demande de test suffisent. Faites-le tourner un mois, appels manqués compris, et vous saurez à quelle vitesse vous rappelez vraiment, et ce que le prochain outil devra faire.
