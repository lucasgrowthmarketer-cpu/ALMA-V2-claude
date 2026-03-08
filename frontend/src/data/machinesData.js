// Import des données directement
import machinesDataRaw from './machines.json';
import brandsDataSimple from './brands_simple.json';
import categoriesDataRaw from './categories.json';
import brandLogosData from './brand_logos.json';
import machinePhotosData from './machine_photos.json';

// Exporter les données
export const machinesData = machinesDataRaw;
export const categoriesData = categoriesDataRaw;

// Créer brandData avec les machines correspondantes
export const brandsData = brandsDataSimple.map(brand => ({
  ...brand,
  machines: machinesDataRaw.filter(m => m.fabricant_slug === brand.slug)
}));

// Export des logos et photos
export const brandLogos = brandLogosData;
export const machinePhotos = machinePhotosData;

// Configuration du site
export const siteConfig = {
  nom: "Alma Machines-Outils",
  email: "jean-baptiste@alma-machines-outils.fr",
  whatsapp: "+33603315688",
  whatsappLink: "https://wa.me/33603315688",
  linkedin: "https://www.linkedin.com/company/alma-machines-outils/posts/?feedView=all",
  adresse: "Région PACA, Marseille, France",
  description: "Spécialiste en machines-outils industrielles neuves en Provence-Alpes-Côte d'Azur",
  
  // Couleurs de la charte graphique
  colors: {
    primary: "#ef6110",      // Orange Alma
    white: "#ffffff",         // Blanc
    beige: "#d2cbc8",        // Beige clair
    dark: "#1a1c1b",         // Noir pour les textes
    grey: "#302f2c"          // Gris foncé
  }
};

// Helper pour obtenir les machines par catégorie
export const getMachinesByCategory = (category) => {
  return categoriesData[category] || [];
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
    description: 'Tours CNC, centres d\'usinage, rectifieuses, électroérosion, robots d\'atelier...',
    icon: 'Settings'
  },
  {
    slug: 'tolerie',
    nom: 'Tôlerie',
    description: 'Presses plieuses, cisailles guillotine, lasers de découpe, poinçonneuses...',
    icon: 'Layers'
  },
  {
    slug: 'chaudronnerie',
    nom: 'Chaudronnerie',
    description: 'Rouleuses, perceuses à colonne, scies industrielles, stockeurs...',
    icon: 'Wrench'
  },
  {
    slug: 'menuiserie',
    nom: 'Menuiserie',
    description: 'Scies à bois, centres d\'usinage bois, ponceuses... (sur demande)',
    icon: 'Hammer'
  }
];
