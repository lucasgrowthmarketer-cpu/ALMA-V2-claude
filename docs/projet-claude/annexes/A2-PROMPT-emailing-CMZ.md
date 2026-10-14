# PROMPT · Emailing HTML « Et si on achetait des machines construites à côté de chez nous ? »

> Version adaptée Sellsy du 14 octobre 2026. Les campagnes partent désormais par Sellsy : désinscription via la variable Sellsy, images hébergées dans les fichiers Sellsy en URL absolue, mode clair forcé (voir 06-EMAILING-CRM §4).


## Ton rôle

Tu es directeur artistique et intégrateur email senior, spécialisé en emailing B2B industriel haut de gamme. Tu produis des emails HTML qui ressemblent à des pièces éditoriales premium, pas à des templates. Tu maîtrises les contraintes de rendu d'Outlook, Gmail et Apple Mail.

## La mission

Créer **un email HTML complet, prêt à coller dans Sellsy**, pour ALMA Machines-Outils. Sujet : la fabrication européenne en machine-outil, illustrée par le cas de **CMZ**, constructeur basque de tours CNC distribué par ALMA.

Angle éditorial : ce n'est pas un email produit, c'est un email d'opinion argumentée. On ne vend pas une machine, on défend une manière d'acheter. La démonstration passe par des faits vérifiables sur l'outil industriel de CMZ, pas par des adjectifs.

Livrable : **un seul fichier HTML autonome**, commenté.

---

## Le client

**ALMA Machines-Outils**, distributeur de machines-outils industrielles neuves, basé à Marseille, opérant en PACA et Languedoc. Fondateur : Jean-Baptiste Borron. Membre du réseau Arcane Group. SAV assuré par Ernault Services.

Positionnement : sourcing direct constructeur, indépendance totale (aucun stock à écouler), réactivité locale.

**Cible** : dirigeants, responsables de production, responsables méthodes et acheteurs de PME et ETI industrielles (mécanique de précision, aéronautique, automobile, énergie, médical, sous-traitance). Techniques, pressés, allergiques au marketing creux.

**Nature de l'envoi** : emailing vers une base de contacts existante.

---

## Direction artistique

L'email doit prolonger l'identité éditoriale du catalogue ALMA, presque brutaliste-industrielle.

- **Contraste fort** entre blocs sombres pleine largeur (`#1a1c1b`) et blocs blancs très aérés.
- **Typographie massive** pour les titres, serrée, letter-spacing négatif, parfois en capitales avec point final.
- **Eyebrow labels** en capitales monospace, 10 à 11px, letter-spacing 2 à 3px, en orange, au-dessus de chaque section.
- **Numérotation visible** (01, 02, 03) en orange, style monospace.
- **Filets orange** de 3px en bordure gauche des blocs.
- **Chiffres clés surdimensionnés** en orange.
- **Beaucoup de blanc.** Marges généreuses.
- Aucun arrondi excessif, aucune ombre portée, aucun dégradé.

**Palette stricte** : orange `#ef6110`, noir `#1a1c1b`, beige `#d2cbc8`, orange pâle `#fdf1e9`, blanc `#ffffff`, gris texte `#444444` et `#888888`.

**Typographie** : police web (Inter, Manrope ou équivalent) avec fallback systématique Arial/Helvetica. Monospace type Courier New en fallback pour les eyebrow labels et les numéros.

**Registre visuel spécifique à cet email** : la carte, le plan, la chaîne. On raconte une usine. Privilégier les listes numérotées, les blocs modulaires alignés (chaque usine est un module), les repères chiffrés. Le lecteur doit sentir la mécanique d'un système intégré.

---

## Contenu à intégrer (texte validé, à utiliser tel quel ou à resserrer, sans en inventer)

### Preheader
`7 usines, 80 % des composants fabriqués en interne, 3 tours par jour. Et pas un container à attendre.`

### 1. Hero (bloc sombre)
- Eyebrow : `FABRICATION EUROPÉENNE · CMZ`
- Titre : **Et si on achetait des machines construites à côté de chez nous ?**
- Sous-titre : Le prix d'achat n'est qu'une partie de l'équation. Ce qui coûte vraiment, c'est la machine à l'arrêt qui attend une pièce à l'autre bout du monde.

### 2. Accroche (bloc blanc)
> Une broche qui casse un mardi matin, ce n'est pas un problème technique. C'est un problème de délai.
>
> Selon l'origine de la machine, la même panne se règle en quelques jours ou immobilise l'atelier plusieurs semaines. Le prix affiché sur le devis ne dit rien de ce risque. Il apparaît trois ans plus tard, en pleine charge de production.
>
> C'est pour cette raison que nous distribuons CMZ.

### 3. Le constructeur (bloc avec chiffres)
> CMZ construit des tours CNC depuis 1945, au Pays basque. Entreprise familiale, troisième génération, aujourd'hui dirigée par Aitor et Iñaki Zumarraga.
>
> Sa particularité tient en une phrase : **80 % des composants de ses tours sont fabriqués dans ses propres usines.**

Chiffres clés à afficher :
- **1945** · année de fondation
- **7** · sites de production
- **80 %** · des composants fabriqués en interne
- **500** · personnes dans le groupe

### 4. La chaîne de fabrication (le cœur de l'email, en modules numérotés)
Introduction : Là où beaucoup de constructeurs assemblent des composants achetés, CMZ maîtrise chaque étape. Sept usines, plus de 40 000 m², presque toutes au Pays basque.

- **01 · Usinage de précision (Neoprec)** : 8 000 m² où la température ne varie pas de plus d'un degré en 24 heures, dalle béton de 500 mm, salle blanche ISO 8, centres 5 axes robotisés fonctionnant 24 heures sur 24 avec machine de mesure tridimensionnelle intégrée et correction des offsets en ligne.
- **02 · Tournage et rectification cylindrique (Precitor)** : 2 000 m² climatisés, conçus comme une salle blanche, équipés de tours CMZ automatisés par portiques.
- **03 · Grandes pièces (Mecaninor)** : 4 000 m², fraiseuses à colonne mobile et rectification à portique pour les bâtis, machines installées sur fosses de fondation pour garantir la précision.
- **04 · Tôlerie industrielle (Cafisur)** : 8 200 m², découpe laser, plieuses à commande numérique, soudure, ligne de peinture époxy.
- **05 · Armoires électriques (Meydi)** : 1 250 m² dédiés au câblage et au montage des armoires de commande.
- **06 · Montage des tours (Zaldibar et Seuner)** : 15 500 m² climatisés, salles blanches ISO 8 pour les montages de précision, stockage automatisé.

Chute du bloc : Résultat : une moyenne de **trois tours par jour**, plus de 600 par an, et une traçabilité complète de la matière jusqu'à la machine livrée.

### 5. Ce que ça change dans votre atelier (bloc sombre ou orange pâle)
> Ce niveau d'intégration n'est pas un argument de communication. Il se mesure en jours d'arrêt évités.
>
> - **Les pièces détachées existent.** Le constructeur fabrique lui-même ce qu'il monte, il ne dépend pas d'un fournisseur asiatique qui a arrêté la référence.
> - **Le support parle votre langue et votre fuseau horaire.** CMZ dispose d'une filiale française, avec un service d'assistance technique dédié.
> - **Pas d'aléa d'importation.** Ni container, ni douane, ni fluctuation de fret sur une pièce de rechange.
> - **La qualité se contrôle à la source.** Chaque pièce critique est mesurée dans les usines du constructeur, pas chez un sous-traitant tiers.

### 6. Les machines disponibles chez ALMA
> Nous référençons cinq tours CMZ à notre programme de vente :
>
> - **TA** · tour numérique à banc incliné, petite et moyenne dimension
> - **TD** · tour de production, diamètre maxi usinable 550 mm
> - **TD long** · grande capacité, longueur de banc jusqu'à 3 200 mm
> - **TTS** · tour multi-axes de décolletage
> - **TTL** · tour numérique bi-broches bi-tourelles

CTA principal : **Voir les tours CMZ** vers `https://www.alma-machines-outils.fr/marque/cmz`
CTA secondaire : **Télécharger le catalogue CMZ** vers `https://www.alma-machines-outils.fr/brochures`

### 7. Signature
> Vous avez un projet de tournage, une machine à remplacer, ou simplement envie de comparer ? Répondez à cet email ou appelez-moi. On part de vos pièces, pas d'un catalogue.

**Jean-Baptiste Borron**, Fondateur, ALMA Machines-Outils
`+33 6 03 31 56 88` (lien tel) · `jean-baptiste@alma-machines-outils.fr` (lien mailto)

### 8. Footer
ALMA Machines-Outils, 6 Rue d'Oran, 13005 Marseille. Machines-outils neuves, PACA et Languedoc.
Lien vers le site + désinscription Sellsy (`DESINSCRIPTION_SELLSY_A_REMPLACER`, voir contraintes Sellsy en fin de prompt).

---

## Images

Logo ALMA blanc hébergé : `https://www.alma-machines-outils.fr/images/alma-logo-white.png` (194 x 54 px, PNG transparent)

Toutes les images en **URL absolue**, format **PNG ou JPG uniquement** (pas de WebP, non supporté par Outlook), avec attribut `alt` explicite. L'email doit rester parfaitement lisible et convaincant **sans aucune image chargée**.

Si tu proposes des visuels supplémentaires (usine, tour CMZ, logo CMZ), indique-les en commentaire HTML avec les dimensions recommandées, sans inventer d'URL.

---

## Contraintes techniques impératives

1. **Tables imbriquées** (`<table role="presentation">`), largeur 600 à 640px, centrée. Aucun flexbox, aucun grid.
2. **CSS inline** sur chaque élément. Balise `<style>` dans le `<head>` uniquement pour les media queries.
3. **Compatibilité Outlook** : commentaires conditionnels MSO, `mso-table-lspace/rspace` à 0, `<o:OfficeDocumentSettings>` avec PixelsPerInch 96, boutons en **VML bulletproof** avec fallback table.
4. **Responsive** : media query à 600px, colonnes empilées (`display:block !important; width:100% !important`), titres réduits, boutons pleine largeur, padding latéral 22px.
5. **Poids sous 100 Ko** (Gmail tronque au-delà de 102 Ko).
6. `lang="fr"` sur `<html>`, balise `<title>`, preheader caché.
7. Rendu correct en **mode sombre**.
8. Aucun JavaScript, aucune balise `<form>`.

---

## Règles rédactionnelles impératives

- **Français**, vouvoiement, registre professionnel et direct.
- **Aucun tiret cadratin ni demi-cadratin nulle part.** Virgules, points médians (·), deux-points ou parenthèses. Règle absolue de la marque.
- Pas de superlatifs creux. Ton factuel et technique. Les chiffres remplacent les adjectifs.
- **Ne jamais dénigrer nommément un pays ou un concurrent.** L'argument est ce que la proximité apporte, pas ce que l'ailleurs vaut. Formulations acceptables : « à l'autre bout du monde », « aléa d'importation ». À proscrire : toute attaque frontale sur une origine.
- Phrases courtes, lecture en diagonale sur mobile.
- Une seule action principale : voir les tours CMZ.

---

## À livrer

1. Le **fichier HTML complet**, prêt à coller dans Sellsy.
2. **3 propositions d'objet** (moins de 50 caractères, sans emoji) et le **preheader** associé.
3. Une note courte sur les **visuels à fournir** (emplacements, dimensions, format).

Ne demande pas de précisions avant de produire : fais des choix de direction artistique assumés et justifie-les brièvement en fin de réponse.

---

## ANNEXE · Sources et points de vigilance

Toutes les données ci-dessus proviennent de la page officielle `https://www.cmz.com/fr/le-groupe/` et sont vérifiées. Ne pas en ajouter d'autres sans vérification.

**Deux points à faire valider par ALMA avant envoi :**

1. **Broches et tourelles.** La page CMZ ne détaille pas explicitement la fabrication interne des broches et des tourelles. Elle annonce 80 % des composants fabriqués en interne. Le contenu ci-dessus reste donc sur ce chiffre global. Si ALMA confirme la fabrication interne des broches et tourelles, cet argument peut être ajouté, c'est le plus fort auprès d'un responsable de production.
2. **Le grattage.** Non mentionné sur la page officielle. À ne pas affirmer sans confirmation du constructeur.

**Précision géographique** : les usines sont au Pays basque espagnol (Zaldibar, Elorrio, province de Biscaye), à l'exception de Cafisur, située dans la province de Cadix. Écrire « de l'autre côté des Pyrénées » plutôt que d'annoncer une distance ou une durée de trajet qui serait approximative.


## Contraintes Sellsy (prioritaires sur tout ce qui précède)

- `<meta name="color-scheme" content="light">` et `<meta name="supported-color-schemes" content="light">`. Aucun bloc `@media (prefers-color-scheme: dark)`.
- Boutons pleine largeur sur mobile avec `box-sizing: border-box`. `word-break: break-word` sur les emails et URLs longs.
- Images en URL absolue hébergées dans Sellsy (`https://services.message-business.com/v3/Front/contents/3/618/70618/Files/<fichier>`). Si une image n'est pas encore hébergée, laisser un commentaire HTML avec le nom de fichier attendu, sans inventer d'URL.
- Lien de désinscription : `href="DESINSCRIPTION_SELLSY_A_REMPLACER"`, remplacé ensuite par la variable Sellsy dans l'éditeur.
