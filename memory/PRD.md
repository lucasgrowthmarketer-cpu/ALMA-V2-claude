# PRD - Site Web Alma Machines-Outils

## Date de création
31 janvier 2026

## Dernière mise à jour
8 mars 2026

## Problématique originale
Créer un site web corporatif multi-pages pour Alma Machines-Outils, revendeur de machines industrielles d'occasion en région PACA, avec génération dynamique des pages à partir d'un fichier Excel contenant 133 machines de 26 fabricants.

## Architecture technique
- Frontend: React avec React Router, Tailwind CSS, Shadcn UI
- Données: Fichier Excel converti en JSON (133 machines, 26 marques, 4 catégories)
- Catégories: Usinage (94 machines), Tôlerie (27 machines), Chaudronnerie (12 machines), Menuiserie (sur demande)
- **Données visuelles**: 26 logos de marques + 121 photos de machines (fichiers JSON)

## Charte graphique
- Couleur primaire: Orange #ef6110
- Couleurs secondaires: Blanc #ffffff, Beige #d2cbc8
- Police: Inter pour le corps, typographie moderne

## Implémenté

### Version 2.5 - Responsive Mobile/Tablette (8 mars 2026)

✅ **Optimisations CSS iOS/Android:**
   - Safe area insets pour iPhone avec notch
   - 100dvh pour hero section (fix Safari iOS)
   - Touch targets minimum 44px sur tous les boutons/liens
   - Désactivation hover effects sur appareils tactiles
   - Input font-size 16px pour éviter zoom iOS
   - Scrollbar masquée sur mobile
   - Overscroll-behavior désactivé

✅ **Header Responsive:**
   - Menu hamburger sur mobile/tablette (< 1024px)
   - Menu plein écran avec overlay
   - Sous-menu Gammes expandable
   - Boutons WhatsApp/Email en haut du menu mobile
   - Bouton "Contactez-nous" bien visible
   - Barre de recherche adaptative

✅ **Homepage Responsive:**
   - Hero: boutons CTA empilés (mobile) / côte à côte (tablette+)
   - Grille bento: 1 col (mobile) / 2 cols (tablette) / 4 cols (desktop)
   - Section stats: grille 2x2 sur mobile
   - Typographie fluide avec breakpoints

✅ **Pages Blog/Marques Responsive:**
   - Filtres en scroll horizontal sur mobile
   - Cartes empilées verticalement sur mobile
   - Bento grid adaptatif sur tablette/desktop
   - Boutons "Découvrir" toujours visibles sur mobile

✅ **Footer Responsive:**
   - 2 colonnes sur mobile, 4 sur desktop
   - Contact en pleine largeur sur petit mobile
   - Safe area padding en bas pour iOS

✅ **Tests validés (100% réussite):**
   - Mobile (390x844): Hero, bento, menu, blog, marques, footer
   - Tablette (834x1194): Tous les éléments adaptés
   - Desktop (1920x1080): Layout complet
   - Touch targets >= 44px
   - iOS safe areas

### Version 2.4 - Page Marques Bento + Descriptions SEO (8 mars 2026)

✅ **Page Marques redesignée:**
   - Layout bento grid avec cartes de tailles variées
   - Barre de recherche par nom de marque
   - Filtres par catégorie (Toutes, Usinage, Tôlerie, Chaudronnerie)
   - Logos de marques avec BrandLogo component
   - Badges de catégorie colorés
   - Hover effects avec bordure orange

✅ **Pages Marques détail enrichies:**
   - Descriptions SEO complètes (~600 mots par marque)
   - 26 descriptions de marques ajoutées
   - Meta title et description dynamiques
   - Breadcrumb navigation
   - Section "Marques similaires"

✅ **Fichier créé:**
   - `/app/frontend/public/brandDescriptions.json` - 26 descriptions SEO

### Version 2.3 - Section Blog (2 février 2026)

✅ **Section Blog complète:**
   - Menu "Blog" ajouté entre "Nos Brochures" et "À propos"
   - Page liste blog (`/blog`) avec design bento grid
   - Page article individuel (`/blog/[slug]`) avec style journalistique
   - 9 articles de blog intégrés avec contenu complet

✅ **Design bento pour la page liste:**
   - Cartes de tailles variées (large, medium, small)
   - Images de fond avec overlay gradient
   - Badges de catégorie orange
   - Temps de lecture affiché
   - Animation hover avec effet scale et accent orange

✅ **Pages article style journalistique:**
   - Hero image pleine largeur avec titre
   - Breadcrumb (Accueil / Blog / Catégorie)
   - Date de publication, temps de lecture, bouton partager
   - Contenu markdown rendu avec react-markdown
   - Style typographique inspiré presse (Le Monde, Les Échos)
   - Blockquotes stylisés avec bordure orange
   - Section "Marques mentionnées" avec liens vers pages marques
   - Section "Articles similaires" avec 3 articles liés

✅ **9 Articles intégrés:**
   1. Pourquoi investir dans une machine-outil d'occasion en 2026 ?
   2. Les 5 gammes incontournables pour moderniser un atelier d'usinage
   3. Où trouver des machines-outils fiables en région PACA ?
   4. Bien choisir sa presse plieuse ou cisaille
   5. Faut-il robotiser son atelier en 2026 ?
   6. Machines de contrôle dimensionnel d'occasion
   7. Quels documents préparer pour revendre sa machine-outil ?
   8. Découpe laser, plasma ou jet d'eau
   9. Comment optimiser le stockage de vos tôles, barres et outillages ?

✅ **Catégories:**
   - Investissement, Équipement, Région PACA, Tôlerie
   - Automatisation, Qualité, Revente, Découpe, Organisation

✅ **Tests validés (100% réussite):**
   - Navigation blog fonctionnelle (desktop et mobile)
   - Grille bento avec 9 articles
   - Articles individuels avec contenu complet
   - Articles similaires et navigation

### Version 2.2 - Intégration Photos Réelles (1 février 2026)

✅ **Logos de marques réels:**
   - 26 logos extraits du fichier Excel client (format ibb.co)
   - Stockés dans `/app/frontend/src/data/brand_logos.json`
   - Composant `BrandLogo.jsx` utilise les vraies images
   - Fallback intelligent si image ne charge pas (placeholder orange avec 3 lettres)

✅ **Photos de machines réelles:**
   - 121 photos extraites du fichier Excel client
   - Stockées dans `/app/frontend/src/data/machine_photos.json`
   - Badge "Photo réelle" (vert) sur les cartes avec vraies photos
   - Galerie de photos sur page machine détail avec navigation (flèches)
   - Thumbnails cliquables pour navigation rapide

✅ **Pages mises à jour:**
   - `CategoryPage.jsx`: Affiche photos réelles avec badge "Photo réelle"
   - `BrandPage.jsx`: Affiche photos réelles avec badge "Photo réelle"
   - `MachinePage.jsx`: Galerie photos avec navigation, section "Autres machines" avec vraies photos
   - `PartenairesPage.jsx`: Utilise les vrais logos via BrandLogo.jsx
   - `Home.jsx`: Section partenaires avec vrais logos

✅ **Tests validés (100% réussite):**
   - Toutes les pages chargent correctement
   - 26 logos de marques affichés sur page Partenaires
   - Photos réelles sur pages Catégorie, Marque et Machine détail
   - Navigation complète fonctionnelle
   - Responsive mobile validé

### Version 2.1 - Vidéo Hero + Système Logos Professionnel (31 janvier 2026)

✅ **Vidéo d'atelier industriel réelle:**
   - Hero avec vraie vidéo Pexels (libre de droits commercial)
   - Vidéo loop CNC machining/manufacturing workshop
   - Fallback image si vidéo ne charge pas
   - Dark overlay optimisé pour lisibilité texte

✅ **Système BrandLogo professionnel:**
   - Composant `BrandLogo.jsx` réutilisable avec fallback intelligent
   - Placeholders gradient orange avec 3 lettres (CMZ, AKI, TOR, etc.)
   - Tailles multiples (sm/md/lg/xl) adaptables
   - Prêt pour vrais logos (SVG/PNG) quand disponibles
   - System auto-fallback si image ne charge pas

✅ **Page Admin Upload Logos (/admin/logos):**
   - Interface pour gérer upload des 26 logos marques
   - Instructions complètes (contacter fabricants, formats, dimensions)
   - Preview actuel + bouton upload par marque
   - Backend API TODO clairement documenté
   - Design professionnel et intuitif

✅ **Images réelles intégrées:**
   - Hero: Atelier industriel réel (machines CNC, équipements)
   - Machines: 11 images différentes basées sur catégorie/sous-catégorie
   - Mapping intelligent: Tournage → Tour CNC, Fraisage → Fraiseuse, Laser → Découpe laser
   - Effet hover: Scale 110% sur images de machines
   - Toutes les cards machines affichent photos réelles

✅ **Nouvelles pages:**
   - Page Partenaires dédiée avec hero + statistiques + grille par catégorie
   - Page Brochures avec formulaire de capture (nom + email) avant téléchargement
   - 3 brochures placeholder (Usinage, Tôlerie, Général)

✅ **Navigation améliorée:**
   - Ajout "Nos Partenaires" et "Nos Brochures" dans header
   - Design premium avec orange Alma #ef6110
   - Dropdown z-index corrigé pour meilleure UX

✅ **Animations CSS:**
   - Keyframes: float, fadeInUp, scaleIn
   - Smooth scroll behavior
   - Custom scrollbar orange Alma
   - Transitions fluides sur hover

### Structure du site (V1)
✅ Page d'accueil avec:
   - Hero section avec CTA
   - Section gammes de machines (4 catégories)
   - Pourquoi choisir Alma (4 avantages)
   - Constructeurs partenaires (carousel 12 marques)
   - Témoignages
   - Section CTA finale

✅ Header global:
   - Logo Alma
   - Navigation (Accueil, Gammes dropdown, Marques, À propos)
   - Barre de recherche
   - Bouton "Contactez-nous"
   - Responsive avec menu hamburger mobile

✅ Footer global:
   - Informations entreprise
   - Navigation par sections
   - Contact (email, WhatsApp, LinkedIn)
   - Mentions légales

### Pages créées
✅ CategoryPage: Page dynamique pour chaque gamme (usinage, tôlerie, chaudronnerie)
✅ BrandsPage: Liste de toutes les marques groupées par catégorie
✅ BrandPage: Page individuelle pour chaque marque avec ses machines
✅ MachinePage: Page détail de chaque machine avec specs complètes
✅ ContactPage: Formulaire de contact avec carte
✅ AboutPage: À propos d'Alma avec valeurs et services

### Données
✅ 133 machines extraites du fichier Excel
✅ 26 fabricants référencés
✅ Génération automatique des slugs URL
✅ Catégorisation automatique par secteur

### Fonctionnalités
✅ Navigation fluide entre toutes les pages
✅ Fil d'Ariane (breadcrumb) sur pages détail
✅ Cards hover avec animations
✅ Design responsive mobile/tablette/desktop
✅ Toast notifications (Sonner)

## Backlog priorisé

### P0 (Critique) - ✅ COMPLÉTÉ
- [x] Refonte homepage avec hero immersif ✅
- [x] Bento layout avec cartes interactives ✅
- [x] Page Partenaires dédiée ✅
- [x] Page Brochures avec formulaire capture ✅
- [x] Intégration vraies images machines (11 photos industrielles) ✅
- [x] Hero avec vraie vidéo d'atelier (Pexels libre droits) ✅
- [x] Système BrandLogo professionnel avec fallback ✅
- [x] Page Admin upload logos (/admin/logos) ✅
- [x] Mapping intelligent images par catégorie/sous-catégorie ✅
- [x] **Upload vrais logos des 26 marques depuis fichier Excel client** ✅ (1 février 2026)
- [x] **Intégration 121 photos de machines réelles** ✅ (1 février 2026)
- [x] **Badge "Photo réelle" sur cartes machines** ✅ (1 février 2026)
- [x] **Galerie photos avec navigation sur page machine** ✅ (1 février 2026)
- [x] **Section Blog complète avec 9 articles** ✅ (2 février 2026)
- [x] **Page liste blog avec design bento** ✅ (2 février 2026)
- [x] **Pages articles style journalistique** ✅ (2 février 2026)

### P1 (Important) - EN ATTENTE
- [ ] Backend API pour formulaire de contact (envoi email à jean-baptiste@alma-machines-outils.fr)
- [ ] Backend API pour formulaire brochures (capture email + log)
- [ ] SEO: Meta tags uniques par page
- [ ] SEO: Sitemap.xml
- [ ] Fonction de recherche opérationnelle
- [ ] Filtres sur pages catégories (par marque, capacité)
- [ ] Google Maps embed sur page contact
- [ ] Pages mentions légales et confidentialité

### P2 (Nice to have)
- [ ] LinkedIn feed embed
- [ ] Calendly integration
- [ ] Analytics (Google Analytics 4)
- [x] Blog avec articles SEO ✅ (2 février 2026)
- [ ] Pages ville (Marseille, Toulon, Nice, etc.)
- [ ] Multilingue (anglais)
- [ ] Comparateur de machines
- [ ] Favoris/wishlist
- [ ] Newsletter signup (backend)
- [ ] Filtrage articles blog par catégorie/tag
- [ ] Pagination blog si >12 articles

## Fichiers clés
- `/app/frontend/src/data/brand_logos.json` - 26 logos de marques
- `/app/frontend/src/data/machine_photos.json` - 121 photos de machines
- `/app/frontend/src/data/machines.json` - Données des 133 machines
- `/app/frontend/src/data/brands_simple.json` - Données des 26 marques
- `/app/frontend/src/components/BrandLogo.jsx` - Composant logo avec fallback
- `/app/frontend/public/blogData.json` - Métadonnées des 9 articles blog
- `/app/frontend/public/blogContent.json` - Contenu markdown des articles blog
- `/app/frontend/src/pages/BlogPage.jsx` - Page liste blog bento
- `/app/frontend/src/pages/BlogArticlePage.jsx` - Page article individuel

## Notes techniques
- Problème résolu: Babel plugin visual-edits causait stack overflow avec données JSON complexes → Solution: simplification des imports et structures de données
- Les données de marques sont en double (brands_simple.json et brandsSimple.js) pour éviter les erreurs de compilation
- Images hébergées sur ibb.co (fournies par le client dans fichier Excel)
- **Blog**: Données chargées dynamiquement via fetch depuis /public/ pour éviter problèmes babel plugin

## Prochaines étapes
1. Intégrer backend API pour formulaire contact (envoi email)
2. Ajouter backend API pour téléchargement brochures (capture email)
3. Optimiser SEO (meta tags, sitemap)
4. Ajouter Google Analytics
