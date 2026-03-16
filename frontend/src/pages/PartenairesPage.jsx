import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { brandsSimple } from '../data/brandsSimple';
import BrandLogo from '../components/BrandLogo';

const PartenairesPage = () => {
  // Grouper par catégorie (une marque peut être dans plusieurs catégories)
  const usinage = brandsSimple.filter(b => b.categories && b.categories.includes('usinage')).sort((a, b) => a.nom.localeCompare(b.nom));
  const chaudronnerie = brandsSimple.filter(b => b.categories && b.categories.includes('chaudronnerie')).sort((a, b) => a.nom.localeCompare(b.nom));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos Partenaires
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Nous collaborons avec les plus grands constructeurs européens et internationaux 
            pour vous proposer des machines d'exception.
          </p>
          <div className="mt-8 flex items-center gap-8 text-sm">
            <div>
              <div className="text-3xl font-bold text-[#ef6110]">{brandsSimple.length}</div>
              <div className="text-gray-400">Marques partenaires</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ef6110]">133</div>
              <div className="text-gray-400">Machines disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ef6110]">100%</div>
              <div className="text-gray-400">Qualité garantie</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Grid by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Usinage */}
          {usinage.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Usinage</h2>
                <span className="px-4 py-1 bg-[#ef6110] text-white rounded-full text-sm font-semibold">
                  {usinage.length} marques
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {usinage.map((brand) => (
                  <Link key={brand.slug} to={`/marque/${brand.slug}`}>
                    <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#ef6110] bg-white">
                      <CardContent className="p-8 text-center">
                        <BrandLogo brandSlug={brand.slug} size="lg" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.nom}</h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
                          {brand.description}
                        </p>
                        <div className="text-sm text-[#ef6110] font-semibold">
                          {brand.machine_count} machine{brand.machine_count > 1 ? 's' : ''}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Chaudronnerie */}
          {chaudronnerie.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Chaudronnerie</h2>
                <span className="px-4 py-1 bg-[#ef6110] text-white rounded-full text-sm font-semibold">
                  {chaudronnerie.length} marques
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {chaudronnerie.map((brand) => (
                  <Link key={brand.slug} to={`/marque/${brand.slug}`}>
                    <Card className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#ef6110] bg-white">
                      <CardContent className="p-8 text-center">
                        <BrandLogo brandSlug={brand.slug} size="lg" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{brand.nom}</h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2 h-10">
                          {brand.description}
                        </p>
                        <div className="text-sm text-[#ef6110] font-semibold">
                          {brand.machine_count} machine{brand.machine_count > 1 ? 's' : ''}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Vous ne trouvez pas la marque que vous cherchez ?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre réseau nous permet de sourcer des machines de toutes marques. Contactez-nous pour discuter de vos besoins.
          </p>
          <Link to="/contact">
            <button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl">
              Contactez-nous
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PartenairesPage;
