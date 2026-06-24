'use client';
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Filter, X, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getMachinesByCategory, getSubCategories, mainCategories, brandsData } from '@/data/machinesData';
import { images } from '@/data/images';
import BrandLogo from '@/components/BrandLogo';

import { FadeIn } from '@/hooks/useScrollAnimation';

// Libellés d'affichage des sous-catégories (corrige les accents absents des données brutes)
const SUBCAT_LABELS = {
  'DEBIT': 'Débit',
  'EBAVURAGE': 'Ébavurage',
  'ELECTROEROSION': 'Électroérosion',
  'PERCAGE': 'Perçage',
  'POINCONNAGE': 'Poinçonnage',
  'DECOUPE': 'Découpe',
  'DECOUPE LASER': 'Découpe laser',
  'DECOUPE PLASMA': 'Découpe plasma',
  "DECOUPE JET D'EAU": "Découpe jet d'eau",
};
const formatSubCat = (s) => SUBCAT_LABELS[s] || (s.charAt(0) + s.slice(1).toLowerCase());

const CategoryPageClient = ({ category }) => {
  // category received via props
  const allMachines = getMachinesByCategory(category);
  const subCategories = getSubCategories(category);
  const categoryInfo = mainCategories.find(c => c.slug === category);

  const [selectedSubCat, setSelectedSubCat] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [subCatOpen, setSubCatOpen] = useState(false);
  const [brandOpen, setBrandOpen] = useState(false);

  // Get unique brands in this category
  const brandsInCategory = useMemo(() => {
    const brandSlugs = [...new Set(allMachines.map(m => m.fabricant_slug))];
    return brandsData.filter(b => brandSlugs.includes(b.slug)).sort((a, b) => a.nom.localeCompare(b.nom));
  }, [allMachines]);

  // Filter machines
  const filteredMachines = useMemo(() => {
    let result = allMachines;
    if (selectedSubCat !== 'all') {
      result = result.filter(m => m.sous_categorie === selectedSubCat);
    }
    if (selectedBrand !== 'all') {
      result = result.filter(m => m.fabricant_slug === selectedBrand);
    }
    return result;
  }, [allMachines, selectedSubCat, selectedBrand]);

  // Get brands available for current subcategory filter
  const availableBrands = useMemo(() => {
    let pool = allMachines;
    if (selectedSubCat !== 'all') {
      pool = pool.filter(m => m.sous_categorie === selectedSubCat);
    }
    const brandSlugs = [...new Set(pool.map(m => m.fabricant_slug))];
    return brandsData.filter(b => brandSlugs.includes(b.slug)).sort((a, b) => a.nom.localeCompare(b.nom));
  }, [allMachines, selectedSubCat]);

  const getMachineImage = (machine) => {
    if (machine.photo) return machine.photo;
    const cat = machine.categorie?.toLowerCase() || '';
    if (cat === 'usinage') return images.usinage.hero;
    if (cat === 'chaudronnerie') return images.chaudronnerie.hero;
    return images.heroWorkshop;
  };

  const hasActiveFilters = selectedSubCat !== 'all' || selectedBrand !== 'all';

  if (!categoryInfo) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Catégorie non trouvée</h1>
        <Link href="/" className="text-primary hover:underline">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <>
      
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Machines {categoryInfo.nom.match(/^[aeiouhAEIOUH]/) ? "d'" + categoryInfo.nom : "de " + categoryInfo.nom}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {categoryInfo.description}
          </p>
          <div className="mt-6 text-sm text-gray-400">
            {filteredMachines.length} machine{filteredMachines.length > 1 ? 's' : ''} disponible{filteredMachines.length > 1 ? 's' : ''}
            {hasActiveFilters && <span> (filtrées sur {allMachines.length})</span>}
          </div>
        </div>
      </section>

      {/* Filters - deux groupes de pastilles rétractables, only show if category has machines */}
      {allMachines.length > 0 && (
      <section className="bg-white border-b sticky top-[57px] sm:top-[65px] z-30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8">
            {/* Sous-catégorie (rétractable) */}
            <div className="flex-1 border-b border-gray-100 sm:border-b-0">
              <button
                onClick={() => setSubCatOpen(o => !o)}
                aria-expanded={subCatOpen}
                className="w-full flex items-center justify-between gap-2 py-2.5 text-left"
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  <Filter size={15} className="text-[#ef6110]" />
                  Sous-catégorie
                  <span className="font-normal text-gray-400">· {selectedSubCat === 'all' ? 'Toutes' : formatSubCat(selectedSubCat)}</span>
                </span>
                <ChevronDown size={16} className={'text-gray-400 transition-transform shrink-0 ' + (subCatOpen ? 'rotate-180' : '')} />
              </button>
              {subCatOpen && (
                <div className="flex flex-wrap gap-2 pb-3 pt-1">
                  <button
                    onClick={() => { setSelectedSubCat('all'); setSelectedBrand('all'); }}
                    className={'px-3 py-1.5 rounded-full text-sm font-medium transition-all ' + (selectedSubCat === 'all' ? 'bg-[#ef6110] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
                  >
                    Toutes
                  </button>
                  {subCategories.map(sub => (
                    <button
                      key={sub}
                      onClick={() => { setSelectedSubCat(sub); setSelectedBrand('all'); }}
                      className={'px-3 py-1.5 rounded-full text-sm font-medium transition-all ' + (selectedSubCat === sub ? 'bg-[#ef6110] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
                    >
                      {formatSubCat(sub)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Marque (rétractable) */}
            <div className="flex-1">
              <button
                onClick={() => setBrandOpen(o => !o)}
                aria-expanded={brandOpen}
                className="w-full flex items-center justify-between gap-2 py-2.5 text-left"
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                  Marque
                  <span className="font-normal text-gray-400">· {selectedBrand === 'all' ? 'Toutes' : (brandsInCategory.find(b => b.slug === selectedBrand)?.nom || 'Toutes')}</span>
                </span>
                <ChevronDown size={16} className={'text-gray-400 transition-transform shrink-0 ' + (brandOpen ? 'rotate-180' : '')} />
              </button>
              {brandOpen && (
                <div className="flex flex-wrap gap-2 pb-3 pt-1">
                  <button
                    onClick={() => setSelectedBrand('all')}
                    className={'px-3 py-1.5 rounded-full text-sm font-medium transition-all ' + (selectedBrand === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
                  >
                    Toutes
                  </button>
                  {availableBrands.map(brand => (
                    <button
                      key={brand.slug}
                      onClick={() => setSelectedBrand(brand.slug)}
                      className={'px-3 py-1.5 rounded-full text-sm font-medium transition-all ' + (selectedBrand === brand.slug ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
                    >
                      {brand.nom}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Réinitialiser */}
            {hasActiveFilters && (
              <button
                onClick={() => { setSelectedSubCat('all'); setSelectedBrand('all'); }}
                className="flex items-center gap-1 text-sm text-[#ef6110] hover:underline whitespace-nowrap shrink-0 py-2.5"
              >
                <X size={14} />
                Réinitialiser
              </button>
            )}
          </div>
        </div>
      </section>
      )}

      {/* Machines Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {allMachines.length === 0 ? (
            /* Empty category - Coming Soon */
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="w-20 h-20 bg-[#ef6110]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Filter size={36} className="text-[#ef6110]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Bientôt disponible</h2>
              <p className="text-lg text-gray-600 mb-6">
                Notre gamme {categoryInfo.nom} est en cours de constitution. 
                Nos experts sélectionnent les meilleurs constructeurs pour vous proposer 
                des machines de qualité.
              </p>
              <p className="text-gray-500 mb-8">
                Vous avez un besoin spécifique en {categoryInfo.nom.toLowerCase()} ? 
                Contactez-nous, nous pouvons déjà vous accompagner.
              </p>
              <Link href="/contact">
                <Button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8 py-3 rounded-full">
                  Contactez-nous
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          ) : filteredMachines.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">Aucune machine trouvée avec ces filtres.</p>
              <button
                onClick={() => { setSelectedSubCat('all'); setSelectedBrand('all'); }}
                className="mt-4 text-[#ef6110] hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMachines.map((machine, index) => {
                const machineImage = getMachineImage(machine);
                const hasPhoto = !!machine.photo;

                return (
                  <FadeIn key={machine.slug} delay={Math.min(index * 80, 400)}>
                  <Link href={'/machine/' + machine.slug}>
                    <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <img
                          src={machineImage}
                          alt={machine.designation}
                          className="w-full h-full object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-500"
                        />
                        {hasPhoto && (
                          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                            Photo réelle
                          </div>
                        )}
                        <div className="absolute top-2 left-2 bg-[#ef6110] text-white text-xs px-2 py-1 rounded-full">
                          {machine.sous_categorie}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <BrandLogo brandSlug={machine.fabricant_slug} size="sm" />
                          <span className="text-xs text-gray-500 font-medium">{machine.fabricant}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#ef6110] transition-colors">
                          {machine.designation}
                        </h3>
                        {machine.type && (
                          <p className="text-xs text-gray-500 mb-2 line-clamp-2">{machine.type}</p>
                        )}
                        {machine.capacite && (
                          <p className="text-xs text-gray-400">{machine.capacite}</p>
                        )}
                        <div className="flex items-center text-[#ef6110] text-sm font-semibold mt-3">
                          <span>Voir détails</span>
                          <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={14} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                  </FadeIn>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Pourquoi choisir Alma pour vos machines {categoryInfo.nom.toLowerCase().match(/^[aeiouh]/) ? "d'" + categoryInfo.nom.toLowerCase() : "de " + categoryInfo.nom.toLowerCase()} ?</h2>
            <p>
              Les machines {categoryInfo.nom.toLowerCase().match(/^[aeiouh]/) ? "d'" + categoryInfo.nom.toLowerCase() : "de " + categoryInfo.nom.toLowerCase()} proposées par Alma représentent une solution performante et fiable
              pour équiper votre atelier industriel. En tant que revendeur agréé, nous vous garantissons des machines neuves
              issues directement de nos constructeurs partenaires.
            </p>
            <p>
              Nous proposons des machines de marques reconnues telles que {brandsInCategory.slice(0, 5).map(b => b.nom).join(', ')},
              garantissant qualité et longévité. Notre service inclut l'installation sur site, la formation de vos équipes
              et un support technique complet.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin de conseil ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Nos experts vous accompagnent dans le choix de la machine adaptée à votre activité.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#ef6110] hover:bg-gray-100 font-semibold">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default CategoryPageClient;
