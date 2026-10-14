# 04 · Charte et direction artistique ALMA

> S'applique à tout livrable visuel : emailing, PDF, rapport, visuel LinkedIn, page web, slide.
> Mis à jour le 14 octobre 2026. Référence visuelle : le catalogue « Programme de vente 2026 ».

## 1. L'esprit : « Atelier grotesque »
La rigueur de l'atelier appliquée à la page. Rien n'est décoratif, tout est structurel. Une identité éditoriale presque brutaliste-industrielle : grille franche, grands vides, contrastes typographiques forts, orange utilisé seulement pour désigner.

Pour un rapport : variante « Relevé d'atelier ». Le document se lit comme une fiche de contrôle dimensionnel : des valeurs isolées, une hiérarchie sans ambiguïté, aucun effet qui flatte un chiffre.

## 2. Palette stricte

| Rôle | Couleur | Usage |
|---|---|---|
| Orange signature | `#ef6110` | chiffres clés, filets, eyebrows, numéros, CTA. Jamais en aplat décoratif |
| Orange survol (site) | `#d45510` | hover des boutons du site |
| Orange curseur (site) | `#FF8600` | uniquement le curseur custom du site |
| Noir profond | `#1a1c1b` | blocs sombres pleine largeur, titres |
| Gris foncé (site) | `#302f2c` | fonds secondaires du site |
| Beige | `#d2cbc8` | texte sur fond sombre |
| Orange pâle | `#fdf1e9` | fonds de blocs secondaires (cartes, encadrés) |
| Blanc | `#ffffff` | fond principal |
| Gris texte | `#444444` corps, `#888888` mentions | |
| Filet clair | `#e8e4e2` | séparateurs fins |

Interdit : dégradés, ombres portées, arrondis marqués, couleurs hors palette, orange en fond de grandes surfaces (sauf visuels LinkedIn de la série « orange » déjà validée).

## 3. Typographie

| Support | Titres | Corps | Étiquettes, numéros, références |
|---|---|---|---|
| Site | Inter (bold à black) | Inter | Inter |
| Emailing | Inter via Google Fonts, fallback Helvetica / Arial | idem | Consolas, Courier New (monospace) |
| PDF (WeasyPrint) | Outfit (graisses statiques) | Instrument Sans | JetBrains Mono |

Codes typographiques :
- **Titres massifs**, serrés (letter-spacing négatif, environ -1 à -2px), parfois en capitales avec point final : « USINAGE. », « CHAUDRONNERIE. ».
- **Eyebrows** : capitales monospace 10 à 11px, letter-spacing 2 à 3px, orange, au-dessus de chaque section. Ex. : « SECTION 01 · NOTRE CŒUR DE MÉTIER ».
- **Numérotation apparente** 01, 02, 03 en orange monospace.
- **Chiffres clés surdimensionnés** en orange, avec un libellé minuscule en capitales grises dessous.
- Presque rien entre les très gros et les très petits corps : c'est ce contraste qui fait la signature.

## 4. Éléments graphiques
- **Filet vertical orange de 3px** en bordure gauche des blocs de contenu et des citations.
- Alternance de **blocs sombres pleine largeur** et de **blocs blancs très aérés**.
- Marges généreuses : sur un email de 620px, padding latéral de 44px (22px sur mobile).
- Pagination et repères identiques de page en page dans les PDF (« ALMA MACHINES-OUTILS · RAPPORT DE CAMPAGNE · 02 »).

## 5. Logos et images
- Logo ALMA blanc hébergé : `https://www.alma-machines-outils.fr/images/alma-logo-white.png` (PNG transparent, 194 x 54 px). Logo couleur : `public/images/logos/` du repo.
- Logos constructeurs : `public/images/logos/` (WebP ~800px fond transparent, ou SVG quand fourni : CMZ, RoboJob, Kaltenbach). Ne jamais déformer ni recolorer un logo de marque.
- Logos réseau : Arcane Group, Ernault Services (bandes du footer du site, sur fond blanc).
- Photo de JB : version ronde détourée utilisée dans les emailings (hébergée sur Sellsy). Une version HD est à récupérer (voir backlog).
- Emails : PNG ou JPG uniquement (pas de WebP pour Outlook), URL absolues, attribut `alt` explicite.

## 6. Déclinaisons par support

### Emailing
Bandeau sombre (logo + « PACA · Languedoc ») → hero sombre (eyebrow, titre, chapô beige à filet orange) → blocs blancs (chiffres, gammes en cartes orange pâle à filet, approche 01/02/03) → bloc sombre (site) → bloc orange pâle (réseau et SAV) → signature JB → footer sombre. Un seul CTA plein orange.

### PDF / rapport
A4, mise en page **en flux** (jamais en positionnement absolu). Page de garde avec 3 ou 4 KPI, puis une idée par page. Chiffres avec leur base de calcul.

### Visuels LinkedIn
Mockups du site (laptop, iPhone, iMac, brochure sur table), en deux séries : fond neutre et fond orange. Un visuel par post. Ne pas mélanger les séries dans une même publication.

### Site
Charte déjà implémentée (Tailwind). Toute nouvelle page reprend les composants existants (cartes, boutons `rounded-full` orange, hero sombre en dégradé gris du site existant). Ne pas introduire de nouvelle police ni de nouvelle couleur.

## 7. Ce qui a été rejeté (ne pas reproduire)
- Le premier design d'emailing « générique template » : jugé trop banal. La bonne référence est l'emailing catalogue 2026 envoyé le 16 septembre.
- Curseur v1 (rond qui grossit beaucoup) : remplacé par le crosshair orange discret.
- Filtres de gamme en menu déroulant : remplacés par des pastilles rétractables.
- Post LinkedIn regroupant plusieurs visuels orange avec un texte réduit : à ne pas refaire.
