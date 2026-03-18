import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { siteConfig, brandsData } from '../data/machinesData';
import SEO from '../components/SEO';

const cities = {
  'marseille': {
    nom: 'Marseille',
    region: 'Bouches-du-Rhône (13)',
    description: 'Capitale industrielle du sud de la France, Marseille abrite de nombreux ateliers de mécanique, chaudronnerie et sous-traitance aéronautique. La zone industrielle de Vitrolles-Marignane et le pôle technologique de Château-Gombert concentrent une forte demande en machines-outils de précision.',
    industries: ['Aéronautique (Airbus Helicopters)', 'Construction navale', 'Pétrochimie (Fos-sur-Mer)', 'Mécanique de précision', 'Métallurgie'],
    proximite: 'Siège social Alma — 6 Rue d\'Oran, 13005 Marseille',
  },
  'toulon': {
    nom: 'Toulon',
    region: 'Var (83)',
    description: 'Premier port militaire français, Toulon et son bassin industriel (La Seyne-sur-Mer, Ollioules) hébergent un tissu dense de sous-traitants dans la construction navale et la défense. Les ateliers de la région ont des besoins constants en tours CNC, centres d\'usinage et équipements de chaudronnerie.',
    industries: ['Construction navale militaire (Naval Group)', 'Défense', 'Maintenance industrielle', 'Mécanique navale', 'Sous-traitance aéronautique'],
    proximite: 'À 65 km de notre siège à Marseille — intervention rapide',
  },
  'nice': {
    nom: 'Nice',
    region: 'Alpes-Maritimes (06)',
    description: 'La technopole de Sophia Antipolis et le tissu industriel de la Côte d\'Azur génèrent une demande croissante en machines-outils de haute précision. Les secteurs du médical, de l\'électronique et de l\'aérospatial y sont particulièrement actifs.',
    industries: ['Technologies de pointe (Sophia Antipolis)', 'Médical / Prothèses', 'Électronique', 'Aérospatial', 'Mécanique de précision'],
    proximite: 'À 200 km de Marseille — déplacements réguliers sur site',
  },
  'aix-en-provence': {
    nom: 'Aix-en-Provence',
    region: 'Bouches-du-Rhône (13)',
    description: 'Pôle économique majeur de la région, Aix-en-Provence et ses zones d\'activités (Les Milles, Rousset) accueillent de nombreuses entreprises industrielles. Le secteur de la microélectronique (STMicroelectronics) et de la mécanique de précision est particulièrement dynamique.',
    industries: ['Microélectronique (STMicroelectronics)', 'Mécanique de précision', 'Sous-traitance automobile', 'Énergie (ITER)', 'Agroalimentaire industriel'],
    proximite: 'À 30 km de notre siège — intervention sous 24h',
  },
  'montpellier': {
    nom: 'Montpellier',
    region: 'Hérault (34)',
    description: 'Métropole dynamique du Languedoc, Montpellier et sa zone industrielle (Vendargues, Saint-Jean-de-Védas) abritent un tissu industriel diversifié. Les secteurs du médical, de la robotique et de la mécanique de précision sont en pleine croissance.',
    industries: ['Médical / Dispositifs médicaux', 'Robotique', 'Aéronautique', 'Mécanique générale', 'Énergie renouvelable'],
    proximite: 'À 170 km de Marseille — couverture Languedoc-Roussillon',
  },
  'nimes': {
    nom: 'Nîmes',
    region: 'Gard (30)',
    description: 'Carrefour industriel entre PACA et Languedoc, Nîmes et son bassin (Alès, Bagnols-sur-Cèze) disposent d\'un tissu industriel historique dans la métallurgie et la mécanique. La proximité du site nucléaire de Marcoule génère une demande spécifique en usinage de précision.',
    industries: ['Nucléaire (Marcoule/CEA)', 'Métallurgie', 'Construction métallique', 'Mécanique générale', 'Transport ferroviaire'],
    proximite: 'À 120 km de Marseille — intervention régulière',
  },
  'avignon': {
    nom: 'Avignon',
    region: 'Vaucluse (84)',
    description: 'Capitale du Vaucluse, Avignon et la vallée du Rhône industrielle (Cavaillon, Carpentras, Orange) concentrent des activités de mécanique, agroalimentaire et logistique nécessitant des équipements de production performants.',
    industries: ['Agroalimentaire industriel', 'Mécanique générale', 'Logistique / Manutention', 'Construction métallique', 'Maintenance industrielle'],
    proximite: 'À 100 km de Marseille — couverture Vaucluse complète',
  },
  'perpignan': {
    nom: 'Perpignan',
    region: 'Pyrénées-Orientales (66)',
    description: 'Porte industrielle vers l\'Espagne, Perpignan et les Pyrénées-Orientales disposent d\'entreprises de mécanique, chaudronnerie et construction métallique. La proximité de la frontière espagnole favorise les échanges industriels transfrontaliers.',
    industries: ['Construction métallique', 'Chaudronnerie', 'Énergie solaire', 'Agroalimentaire', 'Mécanique générale'],
    proximite: 'Couverture via le réseau ARCANE GROUP',
  },
  'ajaccio': {
    nom: 'Ajaccio',
    region: 'Corse-du-Sud (2A)',
    description: 'L\'industrie corse, bien que de taille modeste, nécessite des machines-outils de qualité pour ses ateliers de mécanique, chaudronnerie et maintenance. Alma assure la livraison et l\'installation sur l\'île.',
    industries: ['Maintenance navale', 'Construction métallique', 'Mécanique générale', 'BTP industriel'],
    proximite: 'Livraison et installation sur la Corse assurées',
  },
  'gap': {
    nom: 'Gap',
    region: 'Hautes-Alpes (05)',
    description: 'Les Hautes-Alpes et la Durance industrielle (Manosque, Sisteron, Digne) abritent des ateliers de mécanique et de maintenance qui font appel à des machines-outils fiables pour leurs productions.',
    industries: ['Mécanique de précision', 'Maintenance industrielle', 'Construction métallique', 'Énergie hydraulique'],
    proximite: 'À 190 km de Marseille — déplacement sur site assuré',
  },
};

const VilleSEOPage = () => {
  const { ville } = useParams();
  const city = cities[ville];

  if (!city) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Ville non trouvée</h1>
        <Link to="/" className="text-[#ef6110] hover:underline">Retour à l'accueil</Link>
      </div>
    );
  }

  const featuredBrands = brandsData.slice(0, 6);

  return (
    <>
      <SEO
        title={`Machines-outils à ${city.nom} — Revendeur industriel ${city.region}`}
        description={`Alma Machines-Outils, votre revendeur de machines-outils industrielles neuves à ${city.nom} et en ${city.region}. Tours CNC, centres d'usinage, chaudronnerie. 28 marques partenaires.`}
        path={`/machines-outils/${ville}`}
      />
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <MapPin size={28} className="text-[#ef6110]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Machines-outils à {city.nom}
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">
            Votre partenaire en machines-outils industrielles neuves à {city.nom} et dans le {city.region}.
          </p>
        </div>
      </section>

      {/* Description + Industries */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                L'industrie à {city.nom}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {city.description}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Secteurs industriels présents</h3>
              <div className="space-y-2 mb-8">
                {city.industries.map((ind, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#ef6110] flex-shrink-0" />
                    <span className="text-gray-700">{ind}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Notre offre pour {city.nom}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Alma Machines-Outils vous propose une gamme complète de machines-outils industrielles neuves 
                adaptées aux besoins des industriels de {city.nom} et sa région :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {['Tours CNC et centres de tournage', 'Centres d\'usinage verticaux et horizontaux', 'Rectifieuses et électroérosion', 'Presses plieuses et cisailles', 'Découpe laser, plasma et jet d\'eau', 'Scies, perceuses et stockage', 'Solutions de robotisation CNC', 'Systèmes d\'ébavurage'].map((service, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ef6110] flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="shadow-xl border-2 border-[#ef6110]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Contactez-nous</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin size={16} className="text-[#ef6110] flex-shrink-0" />
                      <span>{city.proximite}</span>
                    </div>
                    <a href={'mailto:' + siteConfig.email} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#ef6110]">
                      <Mail size={16} className="text-[#ef6110] flex-shrink-0" />
                      <span>{siteConfig.email}</span>
                    </a>
                    <a href={siteConfig.whatsappLink} className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#ef6110]">
                      <Phone size={16} className="text-[#ef6110] flex-shrink-0" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                  <Link to="/contact">
                    <Button className="w-full bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold rounded-full">
                      Demander un devis
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">28 marques partenaires</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    CMZ, Hartford, Haco, Danobat, Soraluce, RoboJob et plus encore.
                  </p>
                  <Link to="/marques" className="text-[#ef6110] hover:underline text-sm font-semibold">
                    Voir toutes nos marques →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Un projet industriel à {city.nom} ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Nos experts se déplacent sur site pour évaluer vos besoins et vous proposer la solution adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-[#ef6110] hover:bg-gray-100 font-semibold">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link to="/gamme/usinage">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#ef6110] font-semibold">
                Voir nos machines
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export { cities };
export default VilleSEOPage;
