'use client';
import React from 'react';
import { brandsSimple } from '@/data/brandsSimple';
import { brandLogos } from '@/data/machinesData';

// Composant pour afficher le logo d'une marque
// Utilise le vrai logo du fichier Excel
const BrandLogo = ({ brandSlug, className = '', size = 'md' }) => {
  const brand = brandsSimple.find(b => b.slug === brandSlug);
  
  if (!brand) return null;

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  // Obtenir le vrai logo depuis les données
  const logoUrl = brandLogos[brandSlug];

  // Si le logo existe, l'afficher
  if (logoUrl) {
    return (
      <div className={`${className} ${sizeClasses[size]} flex items-center justify-center bg-white rounded-xl p-2 shadow-sm`}>
        <img 
          src={logoUrl}
          alt={`Logo ${brand.nom}`}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            // Si l'image ne charge pas, afficher le placeholder
            e.target.style.display = 'none';
            const fallback = e.target.parentElement.querySelector('.fallback-logo');
            if (fallback) fallback.style.display = 'flex';
          }}
        />
        {/* Fallback placeholder */}
        <div 
          className="fallback-logo w-full h-full bg-gradient-to-br from-[#ef6110] to-[#d45510] rounded-lg flex items-center justify-center hidden"
        >
          <span className="font-bold text-white text-sm">{brand.nom.substring(0, 3)}</span>
        </div>
      </div>
    );
  }

  // Placeholder si pas de logo
  return (
    <div className={`${className} ${sizeClasses[size]} bg-gradient-to-br from-[#ef6110] to-[#d45510] rounded-xl flex items-center justify-center shadow-lg`}>
      <span className="font-bold text-white text-sm">{brand.nom.substring(0, 3)}</span>
    </div>
  );
};

// Composant pour grille de logos (page Partenaires)
export const BrandLogoGrid = ({ brands, linkTo = true }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {brands.map((brand) => {
        const content = (
          <div className="group relative bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#ef6110]">
            <BrandLogo brandSlug={brand.slug} size="md" className="mx-auto mb-3" />
            <div className="text-center">
              <p className="font-bold text-gray-900 text-sm">{brand.nom}</p>
              <p className="text-xs text-gray-500 mt-1">{brand.machine_count} machines</p>
            </div>
          </div>
        );

        if (linkTo) {
          return (
            <a key={brand.slug} href={`/marque/${brand.slug}`}>
              {content}
            </a>
          );
        }
        return <div key={brand.slug}>{content}</div>;
      })}
    </div>
  );
};

// Composant pour carousel de logos (home page)
export const BrandLogoCarousel = ({ brands, itemsToShow = 6 }) => {
  const displayBrands = brands.slice(0, itemsToShow);
  
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {displayBrands.map((brand) => (
        <a 
          key={brand.slug} 
          href={`/marque/${brand.slug}`}
          className="group"
        >
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#ef6110]">
            <BrandLogo brandSlug={brand.slug} size="lg" className="mx-auto" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default BrandLogo;
