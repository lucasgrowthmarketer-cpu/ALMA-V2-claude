// Import des données directement
import machinesDataRaw from './machines.json';
import brandsDataSimple from './brands_simple.json';
import categoriesDataRaw from './categories.json';
import brandLogosData from './brand_logos.json';

// Exporter les données
export const machinesData = machinesDataRaw;
export const categoriesData = categoriesDataRaw;

// Créer brandData avec les machines correspondantes
export const brandsData = brandsDataSimple.map(brand => ({
  ...brand,
  machines: machinesDataRaw.filter(m => m.fabricant_slug === brand.slug)
}));

// Export des logos
export const brandLogos = brandLogosData;

// Configuration du site
export const siteConfig = {
  nom: "Alma Machines-Outils",
  email: "jean-baptiste@alma-machines-outils.fr",
  whatsapp: "+33603315688",
  whatsappLink: "https://wa.me/33603315688",
  linkedin: "https://www.linkedin.com/company/alma-machines-outils/posts/?feedView=all",
  adresse: "6 Rue d'Oran, 13005 Marseille, France",
  description: "Spécialiste en machines-outils industrielles neuves en Provence-Alpes-Côte d'Azur",
  
  colors: {
    primary: "#ef6110",
    white: "#ffffff",
    beige: "#d2cbc8",
    dark: "#1a1c1b",
    grey: "#302f2c"
  }
};

// Helper pour obtenir les machines par catégorie
export const getMachinesByCategory = (category) => {
  const catData = categoriesData[category];
  return catData ? catData.machines : [];
};

// Helper pour obtenir les sous-catégories d'une catégorie
export const getSubCategories = (category) => {
  const catData = categoriesData[category];
  return catData ? catData.sous_categories : [];
};

// Helper pour obtenir les machines par fabricant
export const getMachinesByBrand = (brandSlug) => {
  const brand = brandsData.find(b => b.slug === brandSlug);
  return brand ? brand.machines : [];
};

// Helper pour obtenir une machine par slug
export const getMachineBySlug = (slug) => {
  return machinesData.find(m => m.slug === slug);
};

// Helper pour obtenir un fabricant par slug
export const getBrandBySlug = (slug) => {
  return brandsData.find(b => b.slug === slug);
};

// Catégories principales
export const mainCategories = [
  {
    slug: 'usinage',
    nom: 'Usinage',
    description: 'Tournage, fraisage, rectification, électroérosion, marquage laser, ébavurage, débit, contrôle dimensionnel...',
    icon: 'Settings'
  },
  {
    slug: 'tolerie',
    nom: 'Tôlerie',
    description: 'Presses plieuses, cisailles, découpe laser, poinçonneuses... (bientôt disponible)',
    icon: 'Layers'
  },
  {
    slug: 'chaudronnerie',
    nom: 'Chaudronnerie',
    description: 'Cisaillage, pliage, roulage, découpe laser, plasma, jet d\'eau, perçage, poinçonnage, stockage...',
    icon: 'Wrench'
  }
];
