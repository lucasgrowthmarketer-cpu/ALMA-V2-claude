import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { brandsSimple } from '../data/brandsSimple';
import BrandLogo from '../components/BrandLogo';
import SEO from '../components/SEO';

const BrandsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filtrer les marques
  const filteredBrands = brandsSimple.filter(brand => {
    const matchesSearch = brand.nom.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || (brand.categories && brand.categories.includes(selectedCategory));
    return matchesSearch && matchesCategory;
  }).sort((a, b) => a.nom.localeCompare(b.nom));

  // Catégories uniques
  const categories = [
    { id: 'all', name: 'Toutes', count: brandsSimple.length },
    { id: 'usinage', name: 'Usinage', count: brandsSimple.filter(b => b.categories?.includes('usinage')).length },
    { id: 'tolerie', name: 'Tôlerie', count: brandsSimple.filter(b => b.categories?.includes('tolerie')).length },
    { id: 'chaudronnerie', name: 'Chaudronnerie', count: brandsSimple.filter(b => b.categories?.includes('chaudronnerie')).length }
  ];

  // Définir les tailles pour le layout bento
  const getBentoSize = (index) => {
    // Pattern varié pour un effet bento intéressant
    const pattern = ['large', 'medium', 'small', 'small', 'medium', 'small', 'large', 'small', 'medium', 'small'];
    return pattern[index % pattern.length];
  };

  return (
    <>

    <SEO 
        title="Nos marques partenaires" 
        description="27 constructeurs de machines-outils partenaires d'Alma. CMZ, Hartford, Haco, Soraluce, Danobat et plus. Revendeur agréé en PACA."
        path="/marques"
      />
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Nos <span className="text-[#ef6110]">Marques</span> Partenaires
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Découvrez les {brandsSimple.length} marques de machines-outils disponibles chez ALMA.
          </p>
          
          {/* Search Bar */}
          <div className="mt-6 sm:mt-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une marque..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-base bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ef6110] focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Category Filters - Horizontal scroll on mobile */}
          <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={'flex-shrink-0 px-4 sm:px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ' + 
                  (selectedCategory === cat.id 
                    ? 'bg-[#ef6110] text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  )
                }
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - Responsive */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredBrands.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg sm:text-xl text-gray-600">Aucune marque trouvée pour "{searchTerm}"</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="mt-4 text-[#ef6110] hover:underline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[180px] sm:auto-rows-[200px]">
              {filteredBrands.map((brand, index) => {
                const size = getBentoSize(index);
                const isLarge = size === 'large';
                const isMedium = size === 'medium';
                
                return (
                  <Link 
                    key={brand.slug}
                    to={'/marque/' + brand.slug}
                    className={
                      (isLarge ? 'sm:col-span-2 sm:row-span-2 ' : '') +
                      (isMedium ? 'sm:col-span-2 sm:row-span-1 ' : '') +
                      'group'
                    }
                  >
                    <Card className="relative h-full overflow-hidden border-2 border-transparent hover:border-[#ef6110] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white">
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ef6110]/5 to-[#ef6110]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <CardContent className="relative h-full p-6 flex flex-col">
                        {/* Category Badge */}
                        <div className="mb-auto">
                          <span className={'inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ' +
                            (brand.categories?.includes('usinage') ? 'bg-blue-100 text-blue-700' :
                             'bg-purple-100 text-purple-700')
                          }>
                            {brand.categories?.join(' / ') || ''}
                          </span>
                        </div>
                        
                        {/* Logo */}
                        <div className={'flex items-center justify-center my-4 ' + (isLarge ? 'flex-1' : '')}>
                          <BrandLogo 
                            brandSlug={brand.slug} 
                            size={isLarge ? 'xl' : isMedium ? 'lg' : 'md'} 
                            className="group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        {/* Brand Name */}
                        <h3 className={'font-bold text-gray-900 group-hover:text-[#ef6110] transition-colors ' + 
                          (isLarge ? 'text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3' : isMedium ? 'text-lg sm:text-xl mb-1 sm:mb-2' : 'text-base sm:text-lg mb-1')
                        }>
                          {brand.nom}
                        </h3>
                        
                        {/* Description - only on large cards on larger screens */}
                        {isLarge && (
                          <p className="hidden sm:block text-gray-600 text-sm line-clamp-2 mb-3">
                            {brand.description}
                          </p>
                        )}
                        
                        {/* Machine count + CTA */}
                        <div className="flex items-center justify-between mt-auto pt-2 sm:pt-3 border-t border-gray-100">
                          <span className="text-xs sm:text-sm font-medium text-gray-500">
                            {brand.machine_count} machine{brand.machine_count > 1 ? 's' : ''}
                          </span>
                          <span className="flex items-center text-[#ef6110] text-xs sm:text-sm font-semibold opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                            Découvrir
                            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </span>
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

      {/* Menuiserie Note */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="border-l-4 border-[#ef6110] bg-gradient-to-r from-orange-50 to-white">
            <CardContent className="p-5 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Menuiserie</h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                Nous pouvons également vous proposer des machines de menuiserie des grandes marques 
                (Biesse, SCM, Homag...) sur demande. 
                <Link to="/contact" className="text-[#ef6110] font-semibold ml-1 hover:underline">
                  Contactez-nous →
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Vous ne trouvez pas la marque recherchée ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Notre réseau européen de constructeurs nous permet d'accéder à un large catalogue de machines.
          </p>
          <Link to="/contact">
            <button className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-[#ef6110] hover:bg-gray-100 font-semibold rounded-full transition-colors shadow-lg">
              Contactez-nous
            </button>
          </Link>
        </div>
      </section>
    </div>
  </>
  );
};

export default BrandsPage;
