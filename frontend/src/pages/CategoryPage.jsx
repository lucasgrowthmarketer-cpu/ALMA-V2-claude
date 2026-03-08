import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { getMachinesByCategory, mainCategories, brandsData, machinePhotos } from '../data/machinesData';
import { images } from '../data/images';

const CategoryPage = () => {
  const { category } = useParams();
  const machines = getMachinesByCategory(category);
  const categoryInfo = mainCategories.find(c => c.slug === category);

  // Fonction pour obtenir l'image de la machine (vraies photos du fichier Excel)
  const getMachineImage = (machine) => {
    // Chercher la vraie photo dans machinePhotos
    const photoData = machinePhotos[machine.slug];
    if (photoData?.photos?.length > 0) {
      return photoData.photos[0];
    }
    
    // Fallback basé sur la catégorie
    const cat = machine.categorie?.toLowerCase() || '';
    const subcat = machine.sous_categorie?.toLowerCase() || '';
    
    if (cat === 'usinage') {
      if (subcat.includes('tournage') || subcat.includes('tour')) return images.usinage.cncLathe1;
      if (subcat.includes('fraisage')) return images.usinage.millingMachine;
      if (subcat.includes('rectif')) return images.usinage.grinding;
      return images.usinage.cncLathe2;
    } else if (cat === 'tolerie') {
      if (subcat.includes('pliage')) return images.tolerie.pressBrake;
      if (subcat.includes('laser')) return images.tolerie.laserCutting1;
      return images.tolerie.sheetMetal;
    } else if (cat === 'chaudronnerie') {
      if (subcat.includes('soudage')) return images.chaudronnerie.welding;
      return images.chaudronnerie.fabrication;
    }
    return images.usinage.cncLathe1;
  };

  // Obtenir les marques uniques dans cette catégorie
  const uniqueBrands = useMemo(() => {
    const brandSlugs = new Set(machines.map(m => m.fabricant_slug));
    return brandsData.filter(b => brandSlugs.has(b.slug));
  }, [machines]);

  if (!categoryInfo) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Catégorie non trouvée</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Machines d'{categoryInfo.nom}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {categoryInfo.description}
          </p>
          <div className="mt-6 text-sm text-gray-400">
            {machines.length} machine{machines.length > 1 ? 's' : ''} disponible{machines.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Brands in this category */}
      {uniqueBrands.length > 0 && (
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Marques disponibles :</h2>
            <div className="flex flex-wrap gap-3">
              {uniqueBrands.map((brand) => (
                <Link
                  key={brand.slug}
                  to={`/marque/${brand.slug}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-[#ef6110] hover:text-white rounded-full text-sm font-medium transition-colors"
                >
                  {brand.nom}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Machines List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {machines.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <p className="text-xl text-gray-600 mb-4">
                  Aucune machine disponible dans cette catégorie pour le moment.
                </p>
                <Link to="/contact">
                  <Button className="bg-[#ef6110] hover:bg-[#d45510]">
                    Contactez-nous pour vos besoins
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {machines.map((machine) => {
                const machineImage = getMachineImage(machine);
                const hasRealPhoto = machinePhotos[machine.slug]?.photos?.length > 0;
                return (
                <Link key={machine.id} to={`/machine/${machine.slug}`}>
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#ef6110]">
                    <CardContent className="p-6">
                      {/* Real Machine Image */}
                      <div className="relative w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={machineImage}
                          alt={`${machine.fabricant} ${machine.modele}`}
                          className="w-full h-full object-contain bg-white hover:scale-105 transition-transform duration-500"
                        />
                        {hasRealPhoto && (
                          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
                            Photo réelle
                          </div>
                        )}
                      </div>
                      
                      {/* Brand */}
                      <div className="text-sm text-[#ef6110] font-semibold mb-1">
                        {machine.fabricant}
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
                      
                      {/* CTA */}
                      <div className="flex items-center text-[#ef6110] font-medium text-sm">
                        Voir la fiche technique
                        <ArrowRight size={16} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )})}
            </div>
          )}
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2>Pourquoi choisir Alma pour vos machines d'{categoryInfo.nom.toLowerCase()} ?</h2>
            <p>
              Les machines d'{categoryInfo.nom.toLowerCase()} proposées par Alma représentent une solution performante et fiable 
              pour équiper votre atelier industriel. En tant que revendeur agréé, nous vous garantissons des machines neuves 
              issues directement de nos constructeurs partenaires.
            </p>
            <p>
              Nous proposons des machines de marques reconnues telles que {uniqueBrands.slice(0, 5).map(b => b.nom).join(', ')}, 
              garantissant qualité et longévité. Notre service inclut l'installation sur site, la formation de vos équipes 
              et un support technique complet.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vous recherchez une machine d'{categoryInfo.nom.toLowerCase()} spécifique ?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Contactez-nous pour un conseil personnalisé. Notre équipe d'experts vous accompagne dans votre projet.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#ef6110] hover:bg-gray-100 font-semibold">
              Contactez-nous
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
