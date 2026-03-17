import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Wrench, Users, Globe, Shield, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const ArcaneGroupPage = () => {
  const services = [
    'Formation',
    'Maintenance',
    'Assistance téléphonique',
    'SAV',
    'Intervention sur site'
  ];

  const secteurs = [
    'Nanotechnologies', 'Médical', 'Mécanique de précision', 'Automobile',
    'Aéronautique', 'Espace', 'Construction ferroviaire et navale',
    'Défense', 'Chimie', 'Énergie', 'Nucléaire'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="relative container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <img 
                src="/images/arcane-group-logo.jpg" 
                alt="Arcane Group" 
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                ARCANE GROUP
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                Un réseau national de sociétés commerciales assurant la commercialisation 
                des grands noms de la machine-outil sur le territoire français.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>ARCANE GROUP</strong> est un regroupement de sociétés commerciales assurant la commercialisation 
                sur le territoire français de grands noms de la machine-outil. Elles mettent en commun leurs moyens pour :
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="border-l-4 border-[#ef6110]">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Globe size={20} className="text-[#ef6110] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">La communication commerciale (site internet, salons professionnels, brochures)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-[#ef6110]">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Wrench size={20} className="text-[#ef6110] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">La commercialisation et l'exportation de machines-outils</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-[#ef6110]">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-[#ef6110] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">La représentation de machines-outils sur l'ensemble du territoire</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-[#ef6110]">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <Users size={20} className="text-[#ef6110] mt-1 flex-shrink-0" />
                      <p className="text-gray-700 text-sm">10 bureaux de vente répartis sur toute la France & 3 showrooms</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* La force d'un réseau */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              La force d'un réseau national
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une vision objective et une proposition globale, voilà ce que les membres d'Arcane Group 
              s'efforcent de faire depuis plus de 20 ans dans le domaine de l'industrie métallurgique.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#ef6110] mb-2">10</div>
              <div className="text-sm text-gray-600">Bureaux de vente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#ef6110] mb-2">3</div>
              <div className="text-sm text-gray-600">Showrooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#ef6110] mb-2">20+</div>
              <div className="text-sm text-gray-600">Ans d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#ef6110] mb-2">100%</div>
              <div className="text-sm text-gray-600">France couverte</div>
            </div>
          </div>
        </div>
      </section>

      {/* SAV Ernault Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Shield size={28} className="text-[#ef6110]" />
              <h2 className="text-3xl font-bold text-gray-900">SAV — ERNAULT SERVICES</h2>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Avec <strong>ERNAULT SERVICES</strong>, ARCANE GROUP vous assure une installation, un SAV et un centre technique 
              d'une grande réactivité et d'un professionnalisme, héritage de l'une des plus grandes marques 
              de machine-outil française.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nos compétences</h3>
              <div className="flex flex-wrap gap-3">
                {['Performance', 'Réussite', 'Productivité', 'Conseil', 'Suivi'].map(comp => (
                  <span key={comp} className="px-4 py-2 bg-[#ef6110]/10 text-[#ef6110] rounded-full font-semibold text-sm">
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Nos services complémentaires</h3>
                <div className="space-y-2">
                  {services.map(service => (
                    <div key={service} className="flex items-center gap-2">
                      <ChevronRight size={16} className="text-[#ef6110] flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secteurs d'activité</h3>
                <div className="flex flex-wrap gap-2">
                  {secteurs.map(secteur => (
                    <span key={secteur} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm">
                      {secteur}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte des partenaires */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Vos acteurs ARCANE Group en région
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Retrouvez les membres ARCANE Group à proximité de chez vous.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/arcane-map-france.png" 
                alt="Carte des partenaires ARCANE Group en France" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin d'un accompagnement ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            ALMA Machines-Outils, membre d'ARCANE GROUP, est votre interlocuteur en région PACA.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#ef6110] hover:bg-gray-100 font-semibold">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArcaneGroupPage;
