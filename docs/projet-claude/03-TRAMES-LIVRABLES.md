# 03 · Trames des livrables

> La structure à respecter pour chaque type de production ALMA. Les règles de `02` s'appliquent à toutes.
> Mis à jour le 14 octobre 2026.

---

## T1 · Réponse dans le chat (question, conseil, arbitrage)
1. La réponse ou la recommandation en 1 à 3 phrases.
2. Le détail utile (liste seulement si on compare ou si on doit cocher).
3. Ce qu'il faut faire maintenant, en une ligne.
4. Si besoin : `[À CONFIRMER]` restants.

Pas de récapitulatif de la question, pas de « bonne question ».

---

## T2 · Mail de Lucas à JB
```
Objet : [action ou sujet concret, 3 à 7 mots]

Hello Jean-Baptiste,

[1 phrase : pourquoi je t'écris / ce qui vient de se passer]

[Bloc « Ce qui est fait » : 2 à 5 points, chacun avec le bénéfice pour ALMA]

[Bloc « Ce dont j'ai besoin de toi » : 1 à 3 demandes précises, avec une date si utile]

[Prochaine étape : ce que je fais ensuite et quand]

[Si facture jointe : « Tu trouveras ci-joint la facture du mois de [mois]. »]

Lucas
```
Règles : tutoiement, pas de jargon, une demande = une ligne. Une mauvaise nouvelle est dite tôt dans le mail, avec la solution.

---

## T3 · Emailing ALMA (campagne Sellsy)
Livrer dans cet ordre :
1. **Objet** (2 variantes à tester) + **pré-header** + **nom d'expéditeur**.
2. **Structure** (blocs dans l'ordre) :
   - Bandeau sombre : logo blanc + « PACA · Languedoc ».
   - Eyebrow orange + titre massif + chapô avec filet orange.
   - Corps éditorial : la thèse en 2 à 4 blocs numérotés 01 / 02 / 03, ou chiffres clés surdimensionnés.
   - Un seul CTA principal (bouton orange plein), éventuellement 2 secondaires en contour.
   - Bloc réseau et SAV (Arcane Group + Ernault Services), court.
   - Signature JB avec photo ronde, téléphone, email.
   - Footer sombre : adresse, lien site, désinscription Sellsy.
3. **HTML complet** conforme à `06` §4 (contraintes techniques Sellsy).
4. **Liste des images** à héberger dans Sellsy avec leurs noms de fichiers.
5. **Segment cible** et **créneau d'envoi** recommandés.

---

## T4 · Post LinkedIn (profil de JB)
```
[Ligne 1 : accroche, une affirmation ou une tension, moins de 10 mots]
[Ligne 2-3 : la suite qui donne envie de cliquer sur « voir plus »]

[Développement : 3 à 6 lignes courtes, ou une liste sans puces de 3 à 4 éléments]

[Conclusion : ce que ça change pour l'industriel]

[Lien en fin de post, ou « lien en commentaire »]

[3 à 5 hashtags]
```
Livrer avec : le visuel associé (un seul), le meilleur créneau (mardi, mercredi ou jeudi, 7h30 à 9h), et une consigne de publication pour JB en 2 lignes.

---

## T5 · Rapport PDF (campagne, mensuel, audit)
- Format A4, charte ALMA (`04`), généré en HTML puis WeasyPrint.
- Page 1 : eyebrow (« RAPPORT DE CAMPAGNE · EMAILING 01 »), titre, phrase de synthèse, 3 ou 4 KPI surdimensionnés.
- Page 2 : « Ce que la campagne a produit » (chiffres bruts, avec leur base de calcul).
- Page 3 : « Ce que ces chiffres veulent dire » (3 ou 4 lectures numérotées + mise en perspective avec des repères sectoriels présentés comme des repères, pas comme des données ALMA).
- Page 4 : « Ce qu'on fait maintenant » (actions numérotées) + encadré « À retenir ».
- Chaque chiffre indique sa base (« calculé sur les 1 579 emails délivrés »).
- Mise en page en flux (pas de positionnement absolu, qui fait chevaucher les blocs).

---

## T6 · Plan d'action / priorisation
| # | Action | Pourquoi (impact) | Qui | Échéance | Statut |
|---|---|---|---|---|---|

Puis : « Cette semaine » (3 actions max), « Ce que j'attends de JB », « Bloquants ».

---

## T7 · Livraison de code (site)
1. Ce qui change, en 2 à 4 lignes (côté visiteur, pas côté code).
2. Les fichiers complets modifiés.
3. Un zip dont les chemins partent de la racine du repo (`frontend-next/...`, `backend/...`).
4. Le bloc de commandes :
```bash
cd /workspaces/ALMA-V2-claude
unzip -o <livraison>.zip
git status
cd frontend-next && npm run build   # verrou : on ne pousse pas si ça échoue
cd .. && git add -A && git commit -m "<message>" && git push origin main
```
5. Ce qu'il faut vérifier après déploiement (URL précise + comportement attendu) et sur quel(s) service(s) Railway.
6. Si `backend/server.py` change : rappeler que le service backend doit redéployer.
7. Bloc « À reporter dans `05-SITE-TECHNIQUE` » si l'architecture change.

---

## T8 · Prompt pour une IA externe (design d'emailing, visuel)
Structure validée (voir annexes) : Ton rôle · La mission (angle éditorial en une thèse) · Le client · La cible · Direction artistique (codes du catalogue, palette stricte) · Structure attendue bloc par bloc · Contenus factuels autorisés (et rien d'autre) · Contraintes techniques HTML email + Sellsy · Interdits · Livrables attendus.

---

## T9 · Email 1 à 1 signé JB (relance d'un cliqueur, réponse à une demande de devis)
```
Objet : [prénom ou sujet précis, court]

Bonjour [Madame / Monsieur] [Nom],

[1 phrase de contexte réel : « Vous avez consulté notre programme de vente 2026 » / « Suite à votre demande sur le site »]

[1 ou 2 phrases de valeur : une question sur leur besoin, une info utile sur la gamme consultée]

[CTA d'intérêt : « Est-ce un sujet pour vous en ce moment ? » ou proposition concrète (visite atelier, devis sous 48h)]

Jean-Baptiste Borron
ALMA Machines-Outils · +33 6 03 31 56 88
```
Moins de 90 mots. Jamais « j'ai vu que vous avez cliqué ». On parle du sujet, pas du tracking.

---

## T10 · Kit backlink constructeur (mail de JB à une marque partenaire)
Marques vendues sur la facture de septembre : **CMZ, HACO, Spaleck, Kaltenbach**. Format : un email HTML sobre aux couleurs ALMA (ou texte simple si JB l'envoie depuis sa messagerie), un par marque, avec le texte d'annonce et le logo prêts à être repris par le constructeur.
Objectif : obtenir un lien depuis le site du constructeur (page « distributeurs », « où acheter », « partenaires ») vers la page marque ALMA.
```
Objet : ALMA, distributeur [Marque] pour PACA et Languedoc

Bonjour [Prénom],

Nous avons mis en ligne une page dédiée à [Marque] sur notre nouveau site : [URL /marque/slug], avec la gamme et le catalogue en téléchargement.

Pourriez-vous ajouter ALMA Machines-Outils dans votre liste de distributeurs, avec un lien vers cette page ? Voici les éléments :
· Nom : ALMA Machines-Outils
· Zone : Provence-Alpes-Côte d'Azur et Languedoc
· Adresse : 6 Rue d'Oran, 13005 Marseille
· Contact : Jean-Baptiste Borron, +33 6 03 31 56 88, jean-baptiste@alma-machines-outils.fr
· Lien : [URL /marque/slug]

Merci d'avance,
Jean-Baptiste Borron
```
Livrer une version par marque (URL exacte de la page marque) + un tableau de suivi (marque, contact, date d'envoi, statut, URL du lien obtenu).

---

## T11 · Page « Installation récente » (rubrique `/installations`)
Une page par machine installée chez un client. Message : « Voilà ce que nous avons installé chez [client], nous pouvons faire la même chose chez vous. »

**Données à obtenir de JB pour chaque installation** (rien n'est inventé, un champ manquant reste vide ou en `[À CONFIRMER]`) :
- Client (raison sociale) et **accord écrit pour être cité**. Sans accord : « un sous-traitant en mécanique de précision des Bouches-du-Rhône ».
- Ville ou département, secteur d'activité.
- Machine : marque, modèle, gamme (lien vers la fiche machine et la page marque du site).
- Le besoin de départ (pièces, cadences, contrainte).
- Ce qui a été fait : choix de la machine, options, installation, formation, délai.
- Date (mois et année) de mise en service.
- 2 à 4 photos (machine installée dans l'atelier).
- Citation du client seulement si elle est fournie par écrit.

**Structure de la page** : hero (photo + « INSTALLATION · [VILLE] · [MOIS ANNÉE] » + titre « [Machine] chez [client / profil] ») · fiche résumé (client, secteur, machine, mise en service) · Le besoin · La solution · L'installation · (citation) · « Vous avez un projet similaire ? » + CTA devis + liens vers la fiche machine et la page marque · autres installations.
SEO : title « Installation [Machine] à [Ville] · ALMA Machines-Outils », JSON-LD `Article` + `BreadcrumbList`, lien depuis la page marque, la page ville et la fiche machine concernées.
**Post LinkedIn associé** (trame T4) : photo de la machine installée, angle « le besoin de départ → la solution », lien vers la page.
