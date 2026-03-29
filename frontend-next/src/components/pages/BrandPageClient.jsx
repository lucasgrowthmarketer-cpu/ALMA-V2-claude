'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { machinesData } from '@/data/machinesData';
import { brandsSimple } from '@/data/brandsSimple';
import { images } from '@/data/images';
import BrandLogo from '@/components/BrandLogo';

const BrandPage = ({ brandSlug }) => {
  // brandSlug from props
  const brandInfo = brandsSimple.find(b => b.slug === brandSlug);
  const brandMachines = machinesData.filter(m => m.fabricant_slug === brandSlug);
  const [brandDescription, setBrandDescription] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load brand description from JSON
  useEffect(() => {
    const loadDescription = async () => {
      try {
        const response = await fetch('/brandDescriptions.json');
        const data = await response.json();
        if (brandSlug && data[brandSlug]) {
          setBrandDescription(data[brandSlug]);
          // Update document title for SEO
          document.title = data[brandSlug].metaTitle || 'Machines ' + (brandInfo?.nom || '') + " | ALMA";
        }
      } catch (error) {
        console.error('Error loading brand description:', error);
      } finally {
        setLoading(false);
      }
    };
    loadDescription();
    window.scrollTo(0, 0);
  }, [brandSlug, brandInfo?.nom]);

  // Fonction pour obtenir l'image de la machine
  const getMachineImage = (machine) => {
    if (machine.photo) return machine.photo;
    return images.usinage.cncLathe1;
  };

  if (!brandInfo) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Marque non trouvée</h1>
        <Link href="/marques" className="text-[#ef6110] hover:underline mt-4 inline-block">
          Retour aux marques
        </Link>
      </div>
    );
  }

  return (
    <>
      
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header with Brand Logo */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/marques" className="hover:text-white transition-colors">Marques</Link>
            <span>/</span>
            <span className="text-white">{brandInfo.nom}</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Brand Logo */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <BrandLogo brandSlug={brandSlug} size="xl" />
            </div>
            
            {/* Brand Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                {(brandInfo.categories || []).map(cat => (
                  <span key={cat} className={'px-4 py-1.5 rounded-full text-sm font-semibold ' +
                    (cat === 'usinage' ? 'bg-blue-500 text-white' : 'bg-purple-500 text-white')
                  }>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {brandInfo.nom}
              </h1>
              
              {brandDescription && (
                <p className="text-xl text-gray-300 mb-4">
                  {brandDescription.sector}
                </p>
              )}
              
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Building2 size={20} />
                  <span>{brandMachines.length} machine{brandMachines.length > 1 ? 's' : ''} disponible{brandMachines.length > 1 ? 's' : ''}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Description - SEO Content */}
      {brandDescription && brandDescription.fullDescription && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
                À propos de {brandInfo.nom}
              </h2>
              <div className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-gray-900
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-gray-900
              ">
                {brandDescription.fullDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Machines List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Machines {brandInfo.nom} disponibles
            </h2>
            <span className="px-4 py-2 bg-[#ef6110] text-white rounded-full font-semibold">
              {brandMachines.length} modèle{brandMachines.length > 1 ? 's' : ''}
            </span>
          </div>

          {brandMachines.length === 0 ? (
            <Card className="border-2 border-dashed border-gray-300">
              <CardContent className="p-12 text-center">
                <p className="text-xl text-gray-600 mb-4">
                  Aucune machine {brandInfo.nom} disponible actuellement en stock.
                </p>
                <p className="text-gray-500 mb-6">
                  Nous pouvons rechercher ce modèle dans notre réseau européen.
                </p>
                <Link href="/contact">
                  <Button className="bg-[#ef6110] hover:bg-[#d45510]">
                    Contactez-nous pour vos besoins
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandMachines.map((machine) => {
                const machineImage = getMachineImage(machine);
                const hasRealPhoto = !!machine.photo;
                return (
                  <Link key={machine.id} href={'/machine/' + machine.slug}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#ef6110] bg-white">
                      <CardContent className="p-6">
                        {/* Machine Image */}
                        <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
                          <img 
                            src={machineImage}
                            alt={brandInfo.nom + ' ' + machine.modele}
                            className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-500"
                          />
                          {hasRealPhoto && (
                            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                              Photo réelle
                            </div>
                          )}
                        </div>
                        
                        {/* Model */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                          {machine.modele}
                        </h3>
                        
                        {/* Type */}
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {machine.type}
                        </p>
                        
                        {/* Capacity */}
                        {machine.capacite && (
                          <p className="text-xs text-gray-500 mb-4 line-clamp-1">
                            {machine.capacite}
                          </p>
                        )}
                        
                        {/* Sub Category Badge */}
                        {machine.sous_categorie && (
                          <div className="mb-3">
                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                              {machine.sous_categorie}
                            </span>
                          </div>
                        )}
                        
                        {/* CTA */}
                        <div className="flex items-center text-[#ef6110] font-medium text-sm">
                          Voir la fiche technique
                          <ArrowRight size={16} className="ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Intéressé par une machine {brandInfo.nom} ?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Notre équipe d'experts vous accompagne dans le choix de votre équipement, 
              du conseil technique à la livraison sur site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#ef6110] hover:bg-gray-100 font-semibold px-8">
                  Demander un devis
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <a href="tel:+33603315688">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#ef6110] font-semibold px-8">
                  <Phone className="mr-2" size={20} />
                  Nous appeler
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Other Brands Suggestion */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Découvrez aussi nos autres marques
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {brandsSimple
              .filter(b => b.slug !== brandSlug && b.categories?.some(c => brandInfo.categories?.includes(c)))
              .slice(0, 6)
              .map((brand) => (
                <Link key={brand.slug} href={'/marque/' + brand.slug}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#ef6110]">
                    <CardContent className="p-4 flex items-center gap-3">
                      <BrandLogo brandSlug={brand.slug} size="sm" />
                      <span className="font-semibold text-gray-900">{brand.nom}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/marques">
              <Button variant="outline" className="border-[#ef6110] text-[#ef6110] hover:bg-[#ef6110] hover:text-white">
                Voir toutes les marques
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BrandPage;
