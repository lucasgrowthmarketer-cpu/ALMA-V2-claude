# 05 · Site alma-machines-outils.fr : technique, déploiement, pièges

> Remplace l'ancien `CONTEXTE-PROJET-ALMA.md` (version du 23 juillet 2026). Lire le §10 avant toute modification de code.
> Mis à jour le 14 octobre 2026. Le code lui-même n'est pas dans le projet : joindre le zip du repo à jour dans la conversation.

## 1. Repères
| | |
|---|---|
| Repo | `ALMA-V2-claude` (compte GitHub `lucasgrowthmarketer-cpu`), branche `main` |
| Codespace | `/workspaces/ALMA-V2-claude/` |
| Dossier vivant | **`frontend-next/`** (l'ancien `frontend/` en CRA est mort : ne pas y toucher, ne pas y re-pointer Railway) |
| Backend | `backend/server.py` (FastAPI) |
| Hébergement | Railway, **2 services séparés** : frontend (Next.js) et backend (FastAPI) |
| URL backend | `https://alma-v2-claude-production-a977.up.railway.app` |
| Domaine | `alma-machines-outils.fr` (DNS chez OVH), canonical **avec www** |
| Analytics | GA4 `G-5R95M2ZVGZ` · Search Console configurée |
| SEO | score passé de 8 à environ 72/100 ; environ 210 pages au build |

## 2. Stack
Next.js **15.5.14** App Router, build Turbopack, React **19.1.0**, Tailwind 3.4, Radix / shadcn, lucide-react, react-markdown.
SSR : `export const dynamic = "force-dynamic"` en tête des `page.js` + `generateMetadata()` côté serveur. `params` est asynchrone (`await params`). `output: 'standalone'`.
Le backend ne fait **que** de l'email transactionnel et l'ajout de contacts Brevo. **Aucune base de données** pour les leads (Mongo est importé mais inutilisé).

## 3. Pages
Accueil · Marques `/marque/[brandSlug]` (28) · Machines `/machine/[machineSlug]` (161) · Gammes `/gamme/[category]` (usinage, chaudronnerie ; tôlerie et menuiserie vides) · Villes `/machines-outils/[ville]` (9) · Blog `/blog` + `/blog/[slug]` (10) · `/brochures` · `/services` + `/services/[slug]` (4) · `/ernault-services` · `/arcane-group` · `/occasion` · `/contact` · `/a-propos` · `/partenaires` · `/marques` · `/mentions-legales` · `/politique-confidentialite`.
`sitemap.js` dynamique, robots.txt (crawlers IA autorisés), llms.txt, JSON-LD (Organization, Brand, Product, Service), redirections 301 de l'ancien WordPress dans `next.config.js`.

## 4. Données (`frontend-next/src/data/`)
- `brands_simple.json` + `brandsSimple.js` : 28 marques.
- `brand_logos.json` : slug → fichier logo (à mettre à jour si un logo change de nom ou de format).
- `machines.json` + `machinesData.js` : 161 fiches, champ clé `fabricant_slug`. `siteConfig` (email, WhatsApp, LinkedIn, adresse, couleurs) est dans `machinesData.js`.
- `categories.json` · `images.js` · `catalogues.js` · `services.js`.
- `public/blogData.json` (métadonnées) + `public/blogContent.json` (corps markdown, clé = slug).
- `public/catalogues/` (PDF), `public/images/logos/`, `/images/blog/`, `/images/services/`.

## 5. Catalogues et lead-gate
- Source unique `src/data/catalogues.js` : `plaquettes` (3 plaquettes ALMA : générale, usinage, chaudronnerie) + `brandCatalogues` (filtré par `BRAND_CATALOGUE_SLUGS`, 24 marques) + `getBrandCatalogue(slug)`.
- Ajouter un catalogue : déposer `catalogue-<slug>.pdf` dans `public/catalogues/` et ajouter le slug à `BRAND_CATALOGUE_SLUGS`.
- Affichés sur `/brochures`, les pages marque (bandeau) et les fiches machine (sidebar).
- Lead-gate : `src/components/pages/CatalogueDownloadButton.jsx`. Clic → modale obligatoire (nom et prénom, société, téléphone, email, case RGPD) → POST `/api/catalogue-lead` → téléchargement direct. Une seule saisie par navigateur (localStorage `alma_catalogue_lead_done`). Modale en `createPortal(document.body)`, case = shadcn `Checkbox`, téléchargement via attribut `download` sans `target="_blank"`.

## 6. Formulaires et backend
Chaque endpoint : (1) envoie un email à JB via Brevo, (2) met `lucas@industrialdecision.com` en **BCC**, (3) ajoute le contact dans la liste Brevo dédiée avec les attributs `SOCIETE`, `TELEPHONE`, `SOURCE` (repli automatique en version minimale si Brevo refuse un attribut).

| Endpoint | Formulaire | Liste Brevo |
|---|---|---|
| `/api/contact` | Contact | #6 |
| `/api/occasion/vente` | Occasion, vente | #7 |
| `/api/occasion/recherche` | Occasion, recherche | #8 |
| `/api/brochures` | Brochures (sélection sur mesure) | #9 |
| `/api/catalogue-lead` | Téléchargement catalogue | #5 |

- Destinataire `RECIPIENT_EMAIL` (JB) codé en dur. Expéditeur `noreply@alma-machines-outils.fr` (domaine authentifié dans Brevo).
- Front → back : tout passe par le **proxy `/api`** (rewrite dans `next.config.js`), en same-origin. `src/lib/api.js` normalise les chemins (`/contact` et `/api/contact` donnent le même appel).
- Variables Railway backend : `BREVO_API_KEY`, `BREVO_CATALOGUE_LIST_ID=5`, `BREVO_LIST_CONTACT=6`, `BREVO_LIST_OCCASION_VENTE=7`, `BREVO_LIST_OCCASION_RECHERCHE=8`, `BREVO_LIST_BROCHURES=9`, `LEAD_CC_EMAIL=lucas@industrialdecision.com`. Frontend : `BACKEND_URL` (par défaut l'URL Railway du backend).
- Tunnel validé de bout en bout en juillet 2026. Premières demandes de devis reçues via le site début octobre 2026.

## 7. Modules et composants notables
- **Services** : `src/data/services.js` (slug, title, tagline, excerpt, icon en chaîne résolue côté client, heroImage, externalUrl, ctaLabel, intro, sections). Pages `/services`, `/services/[slug]`, `/ernault-services`. Header : item « Services » cliquable + méga-menu au survol + section dépliable mobile. Footer : bloc « Nos Services » + bande Ernault Services.
- **Blog** : rendu ReactMarkdown (CommonMark, pas de HTML brut, pas de tableaux). Ordre d'affichage = ordre du tableau (le 1er devient la grande tuile). Un article dans `blogData` sans entrée `blogContent` = corps vide.
- **Filtres de gamme** (`CategoryPageClient.jsx`) : pastilles rétractables (sous-catégories, marques), libellés accentués via `SUBCAT_LABELS`.
- **Footer** : 4 icônes (fiche Google, LinkedIn, téléphone, mail) en SVG inline ; mention « Site conçu par Industrial Decision » avec lien vers industrialdecision.com/home ; bandes Ernault Services et Arcane Group.
- **Curseur** `src/components/SiteCursor.jsx`, monté dans `layout.js` : crosshair orange 35 % + point `#FF8600` 14px, remplace le curseur natif, x1,5 au survol des éléments cliquables, désactivé sur tactile. Réglages en constantes en tête de fichier.
- **Hero d'accueil** : vidéo remplacée par la photo `/images/hero-usinage.webp` (`images.js` → `heroWorkshop`). Présent dans le repo (zip du 14/10).
- **Plaquettes ALMA** : `plaquette-alma-usinage.pdf` (8 p.) et `plaquette-alma-chaudronnerie.pdf` (6 p.) remplacées le 14/10 par les versions « Programme de vente 2026 » au design du catalogue général final. Mêmes noms de fichiers, donc les liens existants restent valides. `plaquette-alma-generale.pdf` est encore l'ancienne version de 22 pages.

## 8. Workflow de livraison
```bash
cd /workspaces/ALMA-V2-claude
unzip -o <livraison>.zip            # zip aux chemins du repo
git status
cd frontend-next && npm run build    # VERROU : jamais de push si le build échoue
cd .. && git add -A && git commit -m "..." && git push origin main
```
- Railway déploie automatiquement après push (1 à 2 minutes). **Vérifier que frontend ET backend ont pris le dernier commit** (le backend traîne souvent).
- Rollback : Railway → Deployments → Redeploy de la version précédente, ou `git revert HEAD && git push`.
- Intégrer une livraison : glisser le zip dans l'explorateur VS Code du Codespace, puis `unzip -o` (le `mv` depuis les Téléchargements du poste échoue).
- Vérification post-déploiement : `curl -I https://www.alma-machines-outils.fr/<chemin>` et test réel du formulaire concerné.

## 9. Conventions de code
- Fichiers livrés complets, pas d'extraits à recoller.
- Pas de nouvelle dépendance sans raison. Pas de framer-motion pour des effets simples (CSS).
- Icônes lucide-react, sauf marques (LinkedIn, Google) en SVG inline.
- Images : WebP environ 800px pour les logos, compression raisonnable pour les photos. Pré-réduire les images géantes avant tout traitement pixel.
- Conversion de logos `.ai` : `pdftoppm -r 300` puis détourage.

## 10. Pièges déjà résolus (ne jamais les re-déboguer)
1. **Proxy `/api` absent** : sans le rewrite `/api/:path* → BACKEND_URL/api/:path*` dans `next.config.js`, les formulaires prennent un 404 et basculaient en silence sur un `mailto`. **Ne jamais retirer ce rewrite.**
2. **Double `/api`** sur Occasion (`/api/api/...`) : cassé depuis la création du site jusqu'au fix. `lib/api.js` normalise désormais.
3. **`REACT_APP_*` n'existe pas en Next** (il faut `NEXT_PUBLIC_*`). `process.env.REACT_APP_API_URL` vaut toujours `undefined` côté client, d'où l'appel relatif qui passe par le proxy. Ne pas s'y fier.
4. **Modale qui saute** : un parent avec `transform` (ex. `hover:-translate-y`) devient le référentiel du `position: fixed`. Solution : `createPortal(modal, document.body)`.
5. **Case à cocher invisible** : `globals.css` applique `appearance: none` à tous les inputs. Utiliser le `Checkbox` shadcn.
6. **Brevo 401 « unrecognised IP »** : restriction d'IP Brevo incompatible avec l'IP dynamique de Railway. Restriction désactivée.
7. **Brevo « sender not valid »** : Brevo affiche « Envoyé » mais rejette si le domaine expéditeur n'est pas authentifié. Domaine authentifié (DNS chez OVH).
8. **Attribut Brevo inconnu = contact rejeté (400)** : `SOCIETE`, `TELEPHONE`, `SOURCE` créés dans Brevo (type texte). Repli automatique en version minimale.
9. **`Linkedin` retiré de lucide-react** : import = build cassé. SVG inline.
10. **Deux services Railway** : modifier `server.py` ne sert à rien tant que le service backend n'a pas redéployé.
11. **Sandbox de Claude éphémère** : re-joindre le zip du repo à chaque nouvelle conversation de code.

## 11. Dette connue (voir aussi `09`)
- Gamme tôlerie vide : à supprimer avec redirection 301 vers `/gamme/chaudronnerie`. Elle est référencée dans la grille de l'accueil (`HomeClient.jsx`), la page Marques (`BrandsPageClient.jsx`), `machinesData.js`, `categories.json`, `images.js`, `llms.txt` et les redirections WordPress de `next.config.js`. La gamme menuiserie reste (offre « sur demande »).
- Le repo contient **deux** fichiers de config : `next.config.js` (celui que Next utilise, avec le proxy `/api`) et `next.config.mjs`. Ne modifier que `next.config.js`.
- Les descriptions machines existent en double : `machines.json` **et** `categories.json`. Toute correction de texte se fait dans les deux.
- Corrigé le 14/10 : formulaire Brochures et lead-gate passés sur `submitForm` (plus de `REACT_APP_*` ni de repli `mailto`) ; 3 fiches réécrites (`cmz-td`, `hartford-hcmc`, `akira-5-ax`).
- Marques du catalogue 2026 absentes du site (Kent, Kasto, Garboli, Zopf, Thoman).
