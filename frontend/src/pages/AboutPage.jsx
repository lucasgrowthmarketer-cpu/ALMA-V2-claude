import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Award, Users, Target } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { siteConfig } from '../data/machinesData';

const AboutPage = () => {
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
            À propos d'Alma Machines-Outils
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Votre partenaire de confiance pour l'achat de machines industrielles neuves en Provence-Alpes-Côte d'Azur.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Alma Machines-Outils est une entreprise spécialisée dans la vente et le conseil en machines-outils 
                industrielles. Basés dans la région de Marseille, nous accompagnons les entreprises de Provence-Alpes-Côte d'Azur 
                dans leurs projets d'équipement et de modernisation de leurs ateliers.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Notre mission est de démocratiser l'accès à des équipements industriels de haute qualité en proposant 
                des machines neuves rigoureusement sélectionnées auprès de nos constructeurs partenaires. Nous croyons 
                que chaque entreprise, quelle que soit sa taille, mérite d'avoir accès à des outils de production performants 
                pour développer son activité.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Avec plus de 20 ans d'expérience cumulée dans le secteur de la machine-outil, notre équipe possède 
                une connaissance approfondie des besoins industriels et des technologies d'usinage, de tôlerie, 
                de chaudronnerie et de menuiserie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ce qui guide notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#ef6110] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Qualité</h3>
                <p className="text-gray-600">
                  Des machines inspectées et testées pour garantir leur bon fonctionnement et leur fiabilité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#ef6110] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proximité</h3>
                <p className="text-gray-600">
                  Un service local et personnalisé, avec des interventions rapides sur votre site en région PACA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#ef6110] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise</h3>
                <p className="text-gray-600">
                  Une connaissance approfondie des machines-outils pour vous conseiller au mieux.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-[#ef6110] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparence</h3>
                <p className="text-gray-600">
                  Des informations claires sur l'état et les caractéristiques de chaque machine.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Notre Accompagnement</h2>
            <div className="space-y-6">
              <Card className="border-l-4 border-[#ef6110]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Audit de vos besoins</h3>
                  <p className="text-gray-600">
                    Nous analysons vos besoins de production, vos contraintes techniques et votre budget pour 
                    vous proposer les solutions les plus adaptées.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[#ef6110]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Sourcing et sélection</h3>
                  <p className="text-gray-600">
                    Grâce à notre réseau européen de partenaires, nous trouvons les machines qui correspondent 
                    exactement à vos critères, même les modèles rares.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[#ef6110]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Inspection et reconditionnement</h3>
                  <p className="text-gray-600">
                    Chaque machine est minutieusement inspectée, testée et remise en conformité selon les normes 
                    en vigueur avant sa mise en vente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[#ef6110]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Installation et formation</h3>
                  <p className="text-gray-600">
                    Nous gérons la logistique, l'installation sur votre site et formons vos équipes à 
                    l'utilisation optimale de la machine.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-[#ef6110]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5. Support après-vente</h3>
                  <p className="text-gray-600">
                    Un accompagnement technique continu pour assurer la pérennité de votre investissement et 
                    optimiser la performance de votre machine.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Zone d'Intervention</h2>
            <p className="text-lg text-gray-700 mb-8">
              Basés dans la région de Marseille, nous intervenons sur l'ensemble de la région Provence-Alpes-Côte d'Azur : 
              Bouches-du-Rhône, Var, Vaucluse, Alpes-de-Haute-Provence, Hautes-Alpes et Alpes-Maritimes.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white border border-[#ef6110] rounded-full text-gray-900 font-medium">
                Marseille
              </span>
              <span className="px-4 py-2 bg-white border border-[#ef6110] rounded-full text-gray-900 font-medium">
                Aix-en-Provence
              </span>
              <span className="px-4 py-2 bg-white border border-[#ef6110] rounded-full text-gray-900 font-medium">
                Toulon
              </span>
              <span className="px-4 py-2 bg-white border border-[#ef6110] rounded-full text-gray-900 font-medium">
                Nice
              </span>
              <span className="px-4 py-2 bg-white border border-[#ef6110] rounded-full text-gray-900 font-medium">
                Avignon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Suivez notre actualité</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Retrouvez nos dernières machines disponibles, nos conseils techniques et nos actualités 
            sur LinkedIn.
          </p>
          <a 
            href={siteConfig.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-[#0077b5] hover:bg-[#006399] text-white font-semibold">
              Suivez-nous sur LinkedIn
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à équiper votre atelier ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discutons de votre projet ! Notre équipe est à votre écoute pour vous proposer 
            les meilleures solutions adaptées à vos besoins.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#ef6110] hover:bg-gray-100 font-semibold text-lg px-8 py-6">
              Contactez-nous
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
