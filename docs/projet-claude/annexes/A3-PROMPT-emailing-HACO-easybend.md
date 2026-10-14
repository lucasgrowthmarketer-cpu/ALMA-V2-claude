# PROMPT · Emailing HTML « Et si une pièce correctement pliée commençait par un dessin ? »

> Version adaptée Sellsy du 14 octobre 2026. Les campagnes partent désormais par Sellsy : désinscription via la variable Sellsy, images hébergées dans les fichiers Sellsy en URL absolue, mode clair forcé (voir 06-EMAILING-CRM §4).


## Ton rôle

Tu es directeur artistique et intégrateur email senior, spécialisé en emailing B2B industriel haut de gamme. Tu produis des emails HTML qui ressemblent à des pièces éditoriales premium, pas à des templates. Tu maîtrises les contraintes de rendu d'Outlook, Gmail et Apple Mail.

## La mission

Créer **un email HTML complet, prêt à coller dans Sellsy**, pour ALMA Machines-Outils. Sujet : la programmation des presses plieuses **HACO** et le coût caché des pliages d'essai, à travers le logiciel de commande **EASYBEND**.

Angle éditorial : ce n'est pas un email produit, c'est un email de méthode. La thèse tient en une idée : dans un atelier de tôlerie, la bonne pièce ne commence pas à la première frappe de la presse, elle commence à l'écran. Tout ce qui est validé avant est de la matière, du temps machine et de la main d'œuvre économisés.

Livrable : **un seul fichier HTML autonome**, commenté.

---

## Le client

**ALMA Machines-Outils**, distributeur de machines-outils industrielles neuves, basé à Marseille, opérant en PACA et Languedoc. Fondateur : Jean-Baptiste Borron. Membre du réseau Arcane Group. SAV assuré par Ernault Services.

Positionnement : sourcing direct constructeur, indépendance totale (aucun stock à écouler), réactivité locale.

**Cible** : dirigeants, responsables de production, chefs d'atelier et responsables méthodes de PME et ETI en **tôlerie, chaudronnerie, construction métallique et sous-traitance de découpe**. Ce sont des gens qui connaissent parfaitement le sujet : le contenu doit leur parler d'égal à égal, jamais leur expliquer leur métier.

**Nature de l'envoi** : emailing vers une base de contacts existante.

---

## Direction artistique

L'email doit prolonger l'identité éditoriale du catalogue ALMA, presque brutaliste-industrielle.

- **Contraste fort** entre blocs sombres pleine largeur (`#1a1c1b`) et blocs blancs très aérés.
- **Typographie massive** pour les titres, serrée, letter-spacing négatif, parfois en capitales avec point final.
- **Eyebrow labels** en capitales monospace, 10 à 11px, letter-spacing 2 à 3px, en orange, au-dessus de chaque section.
- **Numérotation visible** (01, 02, 03) en orange, style monospace.
- **Filets orange** de 3px en bordure gauche des blocs.
- **Beaucoup de blanc.** Marges généreuses. Aucun arrondi excessif, aucune ombre, aucun dégradé.

**Palette stricte** : orange `#ef6110`, noir `#1a1c1b`, beige `#d2cbc8`, orange pâle `#fdf1e9`, blanc `#ffffff`, gris texte `#444444` et `#888888`.

**Typographie** : police web (Inter, Manrope ou équivalent) avec fallback systématique Arial/Helvetica. Monospace type Courier New en fallback pour les eyebrow labels et les numéros.

**Registre visuel spécifique à cet email** : le trait, l'angle, la séquence. Le sujet est le pliage, donc la mise en page peut jouer sur des motifs de pli et d'angle réalisés uniquement en CSS (bordures obliques, filets, blocs décalés, cotations stylisées). La progression du contenu doit se lire comme une séquence de pliage : étape 01, étape 02, étape 03. Aucun élément décoratif gratuit, tout doit avoir une fonction de repère.

---

## Contenu à intégrer (texte validé, à utiliser tel quel ou à resserrer, sans rien inventer)

### Preheader
`La matière, le temps machine et la main d'oeuvre partent en pièces test. Puis en marge.`

### 1. Hero (bloc sombre)
- Eyebrow : `TÔLERIE · PRESSES PLIEUSES HACO`
- Titre : **Et si une pièce correctement pliée commençait par un dessin ?**
- Sous-titre : Dans beaucoup d'ateliers, la première pièce bonne arrive après trois pièces à la benne. Ce n'est plus une fatalité.

### 2. Accroche (bloc blanc)
> Le pliage d'essai est tellement entré dans les habitudes qu'on ne le compte plus. C'est pourtant une ligne de coût à part entière.
>
> Chaque pièce test, c'est de la matière consommée, du temps machine mobilisé et de la main d'oeuvre en plus. Et plus la pièce est complexe, plus les plis se multiplient, plus le nombre d'essais grimpe. Sur des petites séries, ce sont parfois les essais qui coûtent le plus cher.

### 3. Les trois coûts (bloc en trois colonnes, sans chiffres inventés)
- **La matière.** Chaque pièce non conforme est du métal acheté, découpé, puis mis au rebut.
- **Le temps machine.** La presse tourne sans produire. Ce sont des heures indisponibles pour les pièces facturables.
- **La main d'oeuvre.** Le réglage par approximations mobilise un opérateur qualifié sur une tâche qui n'ajoute aucune valeur.

### 4. Le principe (bloc numéroté, coeur de l'email)
Introduction : Le logiciel de commande **EASYBEND** de HACO déplace la validation en amont. L'opérateur ne découvre pas le résultat sur la tôle, il le valide à l'écran.

- **01 · Le programme se vérifie avant la première pièce.** Contrôle précis de l'axe Y, systèmes de butée arrière performants et visualisation claire de chaque étape. L'opérateur voit sa séquence complète avant de lancer la presse.
- **02 · La programmation se fait pendant que la machine produit.** Certaines commandes imposent d'arrêter la presse pour programmer : elle consomme alors de l'énergie sans rien fabriquer. Avec la programmation hors ligne, la préparation et la production avancent en parallèle.
- **03 · Les changements de série deviennent fluides.** Moins de temps morts entre deux références. C'est décisif pour les ateliers qui travaillent en petites séries ou avec des changements fréquents.

### 5. Ce que ça change dans l'atelier (bloc sombre ou orange pâle)
> La précision dès la première pièce devient accessible, y compris sur des géométries complexes et des séries limitées.
>
> - **Moins d'incertitude au poste.** L'opérateur valide au lieu d'essayer.
> - **Une mise en production plus rapide.** Le temps entre la commande et la première pièce bonne se réduit.
> - **Moins de rebut.** Moins de matière perdue, moins de manutention interne, moins de déchets à traiter.
> - **Une marge protégée.** Sur les petites séries, c'est souvent là que se joue la rentabilité de l'affaire.

### 6. Disponibilité et gamme (bloc blanc)
> La nouvelle génération EASYBEND équipe les commandes **SynchroMaster** et **OptiForm**.
>
> HACO, constructeur belge depuis 1965, est l'un de nos partenaires les plus complets en chaudronnerie, avec **14 machines à notre programme de vente** :
>
> - Presses plieuses CNC synchronisées, jusqu'à 1 200 tonnes en tandem
> - Cisailles jusqu'à 8 mètres
> - Rouleuses 3 et 4 rouleaux
> - Lasers fibre tôle et tube

CTA principal : **Voir les machines HACO** vers `https://www.alma-machines-outils.fr/marque/haco`
CTA secondaire : **Télécharger le catalogue HACO** vers `https://www.alma-machines-outils.fr/brochures`

### 7. Signature
> Vous pliez déjà, mais vous vous demandez ce que coûtent réellement vos essais ? Répondez à cet email ou appelez-moi. On regarde vos pièces, vos épaisseurs et vos séries, et on chiffre.

**Jean-Baptiste Borron**, Fondateur, ALMA Machines-Outils
`+33 6 03 31 56 88` (lien tel) · `jean-baptiste@alma-machines-outils.fr` (lien mailto)

### 8. Footer
ALMA Machines-Outils, 6 Rue d'Oran, 13005 Marseille. Machines-outils neuves, PACA et Languedoc.
Lien vers le site + désinscription Sellsy (`DESINSCRIPTION_SELLSY_A_REMPLACER`, voir contraintes Sellsy en fin de prompt).

---

## Images

Logo ALMA blanc hébergé : `https://www.alma-machines-outils.fr/images/alma-logo-white.png` (194 x 54 px, PNG transparent)

Toutes les images en **URL absolue**, format **PNG ou JPG uniquement** (pas de WebP, non supporté par Outlook), avec attribut `alt` explicite. L'email doit rester parfaitement lisible et convaincant **sans aucune image chargée**.

Si tu proposes des visuels supplémentaires (presse plieuse, écran de commande, pièce pliée, logo HACO), indique-les en commentaire HTML avec les dimensions recommandées, sans inventer d'URL.

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
- Pas de superlatifs creux. Ton factuel et technique.
- **Ne jamais inventer de chiffre.** Pas de pourcentage de gain, pas de temps de retour sur investissement, pas de nombre d'essais moyen. La source n'en donne aucun. Un chiffre inventé décrédibilise tout l'email auprès de cette cible.
- **Ne pas donner de leçon.** Le lecteur connaît le pliage mieux que nous. On nomme un problème qu'il vit, on ne lui explique pas son métier.
- Phrases courtes, lecture en diagonale sur mobile.
- Une seule action principale : voir les machines HACO.

---

## À livrer

1. Le **fichier HTML complet**, prêt à coller dans Sellsy.
2. **3 propositions d'objet** (moins de 50 caractères, sans emoji) et le **preheader** associé.
3. Une note courte sur les **visuels à fournir** (emplacements, dimensions, format).

Ne demande pas de précisions avant de produire : fais des choix de direction artistique assumés et justifie-les brièvement en fin de réponse.

---

## ANNEXE · Sources et points de vigilance

Le contenu ci-dessus est tiré de l'article officiel HACO « Ne laissez pas les pliages d'essai grignoter vos marges » (30 mars 2026) : `https://www.haco.com/fr-FR/actualites/ne-laissez-pas-les-pliages-dessai-grignoter-vos-marges`. Fiche produit EASYBEND : `https://www.haco.com/uploads/files/Haco_productfocus_easybend_11.pdf`

**Ce qui est vérifié et peut être affirmé :** EASYBEND nouvelle génération disponible sur SynchroMaster et OptiForm ; contrôle précis de l'axe Y ; systèmes de butée arrière performants ; visualisation claire de chaque étape ; validation du programme avant la première pièce ; programmation hors ligne pendant la production ; réduction des temps morts et fluidité des changements de série ; précision dès la première pièce sur géométries complexes et petites séries ; réduction de matière, d'énergie, de transport interne et de déchets.

**À faire confirmer par ALMA avant envoi, à ne pas affirmer sans validation :**

1. **L'import de fichiers (DXF, 2D ou 3D) et le calcul automatique de la séquence de pliage.** L'article n'en parle pas. C'est pourtant l'argument le plus proche du titre choisi. Si HACO le confirme, il faut l'ajouter, il donne tout son sens à la formule « commencer par un dessin ».
2. **Toute mention de durée de formation ou de prise en main.** Non documentée.
3. **La disponibilité d'EASYBEND sur les machines HACO référencées chez ALMA.** À vérifier modèle par modèle.

**Note sur le titre** : le titre retenu promet le dessin comme point de départ. Le contenu vérifié parle de validation à l'écran avant la première pièce, ce qui est proche mais pas identique. Si le point 1 ci-dessus n'est pas confirmé, garder le titre mais s'assurer que le corps de l'email reste sur ce qui est prouvé, à savoir la validation en amont plutôt que l'import de dessin.


## Contraintes Sellsy (prioritaires sur tout ce qui précède)

- `<meta name="color-scheme" content="light">` et `<meta name="supported-color-schemes" content="light">`. Aucun bloc `@media (prefers-color-scheme: dark)`.
- Boutons pleine largeur sur mobile avec `box-sizing: border-box`. `word-break: break-word` sur les emails et URLs longs.
- Images en URL absolue hébergées dans Sellsy (`https://services.message-business.com/v3/Front/contents/3/618/70618/Files/<fichier>`). Si une image n'est pas encore hébergée, laisser un commentaire HTML avec le nom de fichier attendu, sans inventer d'URL.
- Lien de désinscription : `href="DESINSCRIPTION_SELLSY_A_REMPLACER"`, remplacé ensuite par la variable Sellsy dans l'éditeur.
