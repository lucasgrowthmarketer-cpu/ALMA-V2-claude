import machinesData from '@/data/machines.json';
import brandsSimple from '@/data/brands_simple.json';
import categoriesData from '@/data/categories.json';
import { installations } from '@/data/installations';
import { services } from '@/data/services';

const BASE = 'https://www.alma-machines-outils.fr';

export default function sitemap() {
  const now = new Date().toISOString();

  const staticPages = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/marques`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/partenaires`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/brochures`, lastModified: now, priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/a-propos`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/occasion`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/arcane-group`, lastModified: now, priority: 0.5 },
    { url: `${BASE}/services`, lastModified: now, priority: 0.7 },
    { url: `${BASE}/ernault-services`, lastModified: now, priority: 0.5 },
    { url: `${BASE}/installations`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  const servicePages = services.map(s => ({
    url: `${BASE}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6,
  }));

  const installationPages = installations.map(i => ({
    url: `${BASE}/installations/${i.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7,
  }));

  const categoryPages = Object.keys(categoriesData).map(cat => ({
    url: `${BASE}/gamme/${cat}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9,
  }));

  const brandPages = brandsSimple.map(b => ({
    url: `${BASE}/marque/${b.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8,
  }));

  const machinePages = machinesData.map(m => ({
    url: `${BASE}/machine/${m.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.7,
  }));

  const villes = ['marseille','toulon','nice','aix-en-provence','montpellier','avignon','nimes','gap','digne-les-bains','cannes'];
  const villePages = villes.map(v => ({
    url: `${BASE}/machines-outils/${v}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...installationPages, ...categoryPages, ...brandPages, ...machinePages, ...villePages];
}
