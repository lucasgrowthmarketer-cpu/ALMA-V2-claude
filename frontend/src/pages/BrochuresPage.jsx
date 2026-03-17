import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { siteConfig } from '../data/machinesData';
import SEO from '../components/SEO';

const BrochuresPage = () => {
  const brochures = [
    {
      title: 'Catalogue Machines d\'Usinage 2026',
      description: 'Tours CNC, centres d\'usinage verticaux et horizontaux, rectifieuses, électroérosion, marquage laser, contrôle dimensionnel.',
      category: 'Usinage',
      brands: 'CMZ, Hartford, Akira Seiki, Axile, Soraluce, Toyoda, GER, Danobat, ONA, Wenzel...',
      color: 'from-[#ef6110] to-[#d45510]'
    },
    {
      title: 'Catalogue Chaudronnerie 2026',
      description: 'Cisailles, presses plieuses, rouleuses, découpe laser, plasma, jet d\'eau, scies, perceuses, stockage.',
      category: 'Chaudronnerie',
      brands: 'Haco, Phenix, Imet, Kaltenbach, Tyro, Kingsland, Logitower, Thiel...',
      color: 'from-blue-900 to-blue-950'
    },
    {
      title: 'Catalogue Général Alma 2026',
      description: 'L\'ensemble de notre offre de machines-outils industrielles neuves. 27 constructeurs partenaires, plus de 150 machines.',
      category: 'Général',
      brands: 'Toutes nos marques partenaires',
      color: 'from-gray-800 to-gray-900'
    }
  ];

  const whatsappMsg = encodeURIComponent("Bonjour, je souhaite recevoir vos brochures commerciales. Merci.");
  const emailSubject = encodeURIComponent("[Site Web] Demande de brochures");
  const emailBody = encodeURIComponent("Bonjour,\n\nJe souhaite recevoir vos brochures commerciales.\n\nCordialement,\n");

  return (
          <SEO 
        title="Brochures et catalogues" 
        description="Demandez nos catalogues de machines-outils industrielles. Usinage, chaudronnerie, 27 marques partenaires. Brochures gratuites sur demande."
        path="/brochures"
      />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Brochures</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Demandez nos catalogues pour découvrir l'ensemble de notre gamme de machines-outils industrielles neuves.
          </p>
        </div>
      </section>

      {/* Brochures Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {brochures.map((brochure, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`bg-gradient-to-br ${brochure.color} p-8 text-white`}>
                  <FileText size={40} className="mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-1">{brochure.title}</h3>
                  <span className="text-sm opacity-75">{brochure.category}</span>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm mb-4">{brochure.description}</p>
                  <p className="text-xs text-gray-500">
                    <span className="font-medium">Marques incluses :</span> {brochure.brands}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA - Request brochures */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-[#ef6110]/20 shadow-xl">
              <CardContent className="p-8 sm:p-10 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Demandez vos brochures
                </h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                  Contactez-nous par email ou WhatsApp pour recevoir nos catalogues gratuitement. 
                  Nous vous les enverrons dans les plus brefs délais.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={`mailto:${siteConfig.email}?subject=${emailSubject}&body=${emailBody}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ef6110] hover:bg-[#d45510] text-white rounded-full font-semibold transition-colors"
                  >
                    <Mail size={18} />
                    Demander par email
                  </a>
                  <a
                    href={`https://wa.me/33603315688?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition-colors"
                  >
                    <Phone size={18} />
                    Demander par WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Explore machines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultez nos machines en ligne</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            En attendant vos brochures, parcourez directement notre catalogue de machines sur le site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gamme/usinage">
              <Button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8">
                Machines d'Usinage
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
            <Link to="/gamme/chaudronnerie">
              <Button variant="outline" className="font-semibold px-8">
                Machines de Chaudronnerie
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrochuresPage;
