import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { mainCategories } from '../data/machinesData';
import { brandsSimple } from '../data/brandsSimple';
import { images } from '../data/images';
import BrandLogo from '../components/BrandLogo';

const Home = () => {
  const featuredBrands = brandsSimple.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster={images.heroWorkshop}
          >
            <source src="https://videos.pexels.com/video-files/6196564/6196564-hd_1280_720_30fps.mp4" type="video/mp4" />
            <source src="https://cdn.coverr.co/videos/coverr-cnc-machine-precision-manufacturing-4623/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              L'Excellence Industrielle
              <br />
              <span className="text-[#ef6110]">à Portée de Main</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Machines-outils industrielles de qualité supérieure.
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              Expertise, conseil et accompagnement en région PACA.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link to="/marques" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-full shadow-2xl">
                  Découvrir nos machines
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-full backdrop-blur-sm">
                  Parlons de votre projet
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator - Hidden on very small screens */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 sm:w-8 sm:h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 sm:h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Bento Layout Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Section intro */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              Notre Expertise
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Des solutions complètes pour tous vos besoins en machines industrielles
            </p>
          </div>

          {/* Bento Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {/* Large Card - Usinage */}
            <Link to="/gamme/usinage" className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <Card className="group relative h-[250px] sm:h-[300px] lg:h-full lg:min-h-[400px] overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 active:scale-[0.99]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ef6110] to-[#d45510] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: 'url(' + images.usinage.hero + ')' }}
                ></div>
                <div className="relative h-full p-6 sm:p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">Usinage</h3>
                  <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 text-white/90">
                    Tours CNC, centres d'usinage, rectifieuses de précision
                  </p>
                  <div className="flex items-center text-white font-semibold">
                    <span>Découvrir</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Medium Card - Tôlerie */}
            <Link to="/gamme/tolerie" className="col-span-1">
              <Card className="group relative h-[180px] sm:h-[195px] overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 active:scale-[0.99]">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: 'url(' + images.tolerie.hero + ')' }}
                ></div>
                <div className="relative h-full p-5 sm:p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Tôlerie</h3>
                  <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-white/90">
                    Presses, cisailles, lasers
                  </p>
                  <div className="flex items-center text-sm text-white font-semibold">
                    <span>Voir plus</span>
                    <ArrowRight className="ml-1 group-hover:translate-x-2 transition-transform" size={16} />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Medium Card - Chaudronnerie */}
            <Link to="/gamme/chaudronnerie" className="col-span-1">
              <Card className="group relative h-[180px] sm:h-[195px] overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 active:scale-[0.99]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: 'url(' + images.chaudronnerie.hero + ')' }}
                ></div>
                <div className="relative h-full p-5 sm:p-6 flex flex-col justify-end text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Chaudronnerie</h3>
                  <p className="text-xs sm:text-sm mb-3 sm:mb-4 text-white/90">
                    Rouleuses, scies, stockage
                  </p>
                  <div className="flex items-center text-sm text-white font-semibold">
                    <span>Voir plus</span>
                    <ArrowRight className="ml-1 group-hover:translate-x-2 transition-transform" size={16} />
                  </div>
                </div>
              </Card>
            </Link>

            {/* Wide Card - Partners */}
            <Link to="/partenaires" className="col-span-1 sm:col-span-2">
              <Card className="group relative h-[150px] sm:h-[195px] overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 active:scale-[0.99] bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="relative h-full p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Nos Partenaires</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {brandsSimple.length} marques de confiance
                    </p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex items-center gap-2">
                      {featuredBrands.slice(0, 3).map((brand) => (
                        <BrandLogo key={brand.slug} brandSlug={brand.slug} size="sm" />
                      ))}
                      <span className="hidden sm:inline-flex text-xs text-gray-500 ml-1">+{brandsSimple.length - 3}</span>
                    </div>
                    <div className="flex items-center text-[#ef6110] font-semibold text-sm whitespace-nowrap">
                      <span>Voir tous</span>
                      <ArrowRight className="ml-1 group-hover:translate-x-2 transition-transform" size={16} />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Alma */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 sm:mb-16 text-center">
              Pourquoi Alma ?
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ef6110] mb-2 sm:mb-4">15+</div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Années d'expertise</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 hidden sm:block">
                  Une connaissance approfondie du secteur
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ef6110] mb-2 sm:mb-4">133</div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Machines</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 hidden sm:block">
                  Un large choix pour tous vos besoins
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ef6110] mb-2 sm:mb-4">26</div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Marques</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 hidden sm:block">
                  Les meilleurs constructeurs
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ef6110] mb-2 sm:mb-4">100%</div>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Satisfait</h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 hidden sm:block">
                  Machines inspectées et garanties
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(' + images.testimonialBg + ')' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        <div className="relative container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light italic mb-6 sm:mb-8 leading-relaxed">
              "Grâce à Alma, nous avons trouvé le tour CNC idéal qui a transformé notre production."
            </blockquote>
            <cite className="text-base sm:text-lg lg:text-xl not-italic">
              <span className="font-semibold">Jean-Luc P.</span>
              <br className="sm:hidden" />
              <span className="text-gray-300"> — Dirigeant, Atelier Mécanique Toulon</span>
            </cite>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Prêt à équiper votre atelier ?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Nos experts vous accompagnent dans le choix et l'installation de vos machines
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 rounded-full shadow-xl">
              Demander un devis gratuit
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
