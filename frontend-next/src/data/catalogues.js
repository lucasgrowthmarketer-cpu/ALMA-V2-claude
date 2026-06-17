import brandsSimple from './brands_simple.json';

// Slugs des marques disposant d'un catalogue PDF (fichiers dans /public/catalogues/).
// Les marques absentes de cette liste n'ont pas (encore) de catalogue et n'afficheront
// donc aucun bouton de téléchargement.
const BRAND_CATALOGUE_SLUGS = [
  'akira', 'axile', 'cincinnati', 'cmz', 'danobat', 'everising', 'geminis', 'ger',
  'haco', 'hartford', 'imet', 'kaltenbach', 'lasit', 'logitower', 'ona', 'phenix',
  'robojob', 'soraluce', 'thiel', 'tornos', 'toyoda', 'wenzel', 'xyz',
];

// Plaquettes ALMA (document institutionnel général + plaquettes par gamme).
export const plaquettes = [
  {
    id: 'general',
    title: 'Catalogue Général Alma',
    category: 'Général',
    description:
      "L'ensemble de notre offre de machines-outils industrielles neuves : 28 constructeurs partenaires et plus de 160 machines couvrant l'usinage et la chaudronnerie.",
    file: '/catalogues/plaquette-alma-generale.pdf',
    color: 'from-gray-800 to-gray-900',
  },
  {
    id: 'usinage',
    title: "Catalogue Machines d'Usinage",
    category: 'Usinage',
    description:
      "Tours CNC, centres d'usinage, rectifieuses, électroérosion, marquage laser et contrôle dimensionnel de nos constructeurs partenaires.",
    file: '/catalogues/plaquette-alma-usinage.pdf',
    color: 'from-[#ef6110] to-[#d45510]',
  },
  {
    id: 'chaudronnerie',
    title: 'Catalogue Chaudronnerie',
    category: 'Chaudronnerie',
    description:
      "Cisailles, presses plieuses, rouleuses, découpe laser, plasma et jet d'eau, scies, perçage et systèmes de stockage automatisé.",
    file: '/catalogues/plaquette-alma-chaudronnerie.pdf',
    color: 'from-blue-900 to-blue-950',
  },
];

// Couleur de l'en-tête de carte selon la gamme principale de la marque.
function colorForCategories(categories = []) {
  if (categories.includes('usinage')) return 'from-[#ef6110] to-[#d45510]';
  if (categories.includes('chaudronnerie')) return 'from-blue-900 to-blue-950';
  return 'from-gray-800 to-gray-900';
}

// Catalogues par marque, générés à partir de brands_simple.json puis triés par nom.
export const brandCatalogues = brandsSimple
  .filter((b) => BRAND_CATALOGUE_SLUGS.includes(b.slug))
  .map((b) => ({
    slug: b.slug,
    nom: b.nom,
    categories: b.categories || [],
    description: b.description,
    file: `/catalogues/catalogue-${b.slug}.pdf`,
    color: colorForCategories(b.categories || []),
  }))
  .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));

// Accès direct par slug de marque.
const bySlug = brandCatalogues.reduce((acc, c) => {
  acc[c.slug] = c;
  return acc;
}, {});

// Retourne le catalogue d'une marque, ou null si elle n'en a pas.
export function getBrandCatalogue(slug) {
  return slug ? bySlug[slug] || null : null;
}
