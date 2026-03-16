import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { getMachineBySlug, getBrandBySlug } from '../data/machinesData';
import { images } from '../data/images';

const MachinePage = () => {
  const { machineSlug } = useParams();
  const machine = getMachineBySlug(machineSlug);
  const [currentPhotoIndex, setCurrentPhotoIndex] = React.useState(0);

  if (!machine) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold">Machine non trouvée</h1>
        <Link to="/marques" className="text-[#ef6110] hover:underline mt-4 inline-block">
          Retour aux machines
        </Link>
      </div>
    );
  }

  const brand = getBrandBySlug(machine.fabricant_slug);
  const relatedMachines = brand ? brand.machines.filter(m => m.slug !== machine.slug).slice(0, 3) : [];

  // Use photo from machine data directly
  const realPhotos = machine.photo ? [machine.photo] : [];

  // Fallback image
  const getMachineImage = () => {
    return images.usinage.cncLathe1;
  };

  const fallbackImage = getMachineImage();
  const displayPhotos = realPhotos.length > 0 ? realPhotos : [fallbackImage];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % displayPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + displayPhotos.length) % displayPhotos.length);
  };

  // Parser les capacités pour affichage structuré
  const capacityLines = machine.capacite ? machine.capacite.split(',').map(c => c.trim()) : [];
  
  // Parser la présentation pour affichage
  const presentationParagraphs = machine.presentation_machine 
    ? machine.presentation_machine.split('\n').filter(p => p.trim())
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb & Header */}
      <section className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#ef6110]">Accueil</Link>
            <span>/</span>
            <Link to="/marques" className="hover:text-[#ef6110]">Marques</Link>
            <span>/</span>
            <Link to={`/marque/${machine.fabricant_slug}`} className="hover:text-[#ef6110]">{machine.fabricant}</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{machine.modele}</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info - 2 columns */}
            <div className="lg:col-span-2">
              {/* Title */}
              <div className="mb-6">
                <div className="text-[#ef6110] font-semibold mb-2">
                  {machine.fabricant}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  {machine.modele}
                </h1>
                <p className="text-xl text-gray-600">
                  {machine.type}
                </p>
              </div>

              {/* Real Machine Images with Gallery */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-8 overflow-hidden shadow-lg relative group">
                <img 
                  src={displayPhotos[currentPhotoIndex]}
                  alt={`${machine.fabricant} ${machine.modele} - Photo ${currentPhotoIndex + 1}`}
                  className="w-full h-full object-contain bg-white"
                />
                
                {/* Navigation arrows if multiple photos */}
                {displayPhotos.length > 1 && (
                  <>
                    <button
                      onClick={prevPhoto}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Photo précédente"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Photo suivante"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    {/* Photo counter */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                      {currentPhotoIndex + 1} / {displayPhotos.length}
                    </div>
                  </>
                )}
                
                {/* Real photo badge */}
                {realPhotos.length > 0 && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Photo réelle
                  </div>
                )}
              </div>

              {/* Thumbnails if multiple photos */}
              {displayPhotos.length > 1 && (
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                  {displayPhotos.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPhotoIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        currentPhotoIndex === idx ? 'border-[#ef6110] scale-105' : 'border-gray-300 opacity-70'
                      }`}
                    >
                      <img 
                        src={photo}
                        alt={`Miniature ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              {presentationParagraphs.length > 0 && (
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                    <div className="prose prose-lg max-w-none text-gray-700">
                      {presentationParagraphs.map((paragraph, idx) => (
                        <p key={idx} className="mb-3">{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Technical Specifications */}
              {capacityLines.length > 0 && (
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Caractéristiques techniques</h2>
                    <ul className="space-y-2">
                      {capacityLines.map((line, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="text-[#ef6110] flex-shrink-0 mt-1" size={18} />
                          <span className="text-gray-700">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Sub-category */}
              {machine.sous_categorie && (
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
                    Catégorie: {machine.sous_categorie}
                  </span>
                </div>
              )}

              {/* Manufacturer Link */}
              {machine.site_constructeur && machine.site_constructeur !== 'nan' && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Documentation constructeur</h3>
                    <a 
                      href={machine.site_constructeur}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#ef6110] hover:underline"
                    >
                      Voir la fiche constructeur
                      <ExternalLink size={16} />
                    </a>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar - 1 column */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <Card className="mb-6 sticky top-4">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Intéressé par cette machine ?</h3>
                  <p className="text-gray-600 mb-6">
                    Contactez-nous pour obtenir plus d'informations, un devis ou organiser une visite.
                  </p>
                  <Link to="/contact">
                    <Button className="w-full bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold mb-3">
                      Demander un devis
                    </Button>
                  </Link>
                  <a href="tel:+33603315688">
                    <Button variant="outline" className="w-full border-[#ef6110] text-[#ef6110] hover:bg-[#ef6110] hover:text-white">
                      Appeler maintenant
                    </Button>
                  </a>

                  <Separator className="my-6" />

                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Fabricant</div>
                      <Link to={`/marque/${machine.fabricant_slug}`} className="font-semibold text-[#ef6110] hover:underline">
                        {machine.fabricant}
                      </Link>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Catégorie</div>
                      <Link to={`/gamme/${machine.categorie}`} className="font-semibold text-[#ef6110] hover:underline">
                        {machine.categorie.charAt(0).toUpperCase() + machine.categorie.slice(1)}
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Brand Info Card */}
              {brand && brand.description && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">À propos de {machine.fabricant}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                      {brand.description}
                    </p>
                    <Link to={`/marque/${machine.fabricant_slug}`} className="text-[#ef6110] text-sm font-medium hover:underline">
                      Voir toutes les machines {machine.fabricant}
                    </Link>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Machines */}
      {relatedMachines.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Autres machines {machine.fabricant}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedMachines.map((relMachine) => {
                const relImage = relMachine.photo || images.usinage.cncLathe2;
                return (
                  <Link key={relMachine.slug} to={`/machine/${relMachine.slug}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#ef6110]">
                      <CardContent className="p-6">
                        <div className="w-full h-40 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden">
                          <img 
                            src={relImage}
                            alt={relMachine.modele}
                            className="w-full h-full object-contain bg-white"
                          />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{relMachine.modele}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{relMachine.type}</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Besoin d'aide pour choisir ?</h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Notre équipe d'experts est là pour vous conseiller et vous accompagner dans votre projet d'acquisition.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#ef6110] hover:bg-gray-100 font-semibold">
              Parlez à un expert
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MachinePage;
