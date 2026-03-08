import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileText, Lock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const BrochuresPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: '',
    email: ''
  });

  // Placeholder brochures - à remplacer par vraies données
  const brochures = [
    {
      id: 1,
      title: 'Catalogue Machines d\'Usinage 2026',
      description: 'Découvrez notre gamme complète de tours CNC, centres d\'usinage et rectifieuses',
      pages: 24,
      size: '4.2 MB',
      category: 'Usinage'
    },
    {
      id: 2,
      title: 'Guide Tôlerie & Chaudronnerie',
      description: 'Presses plieuses, cisailles, lasers et équipements de chaudronnerie',
      pages: 18,
      size: '3.8 MB',
      category: 'Tôlerie'
    },
    {
      id: 3,
      title: 'Catalogue Général Alma 2026',
      description: 'L\'ensemble de notre offre de machines-outils industrielles',
      pages: 48,
      size: '8.5 MB',
      category: 'Général'
    }
  ];

  const handleDownload = (brochure) => {
    if (!formData.nom || !formData.email) {
      toast({
        title: "Informations requises",
        description: "Veuillez remplir le formulaire pour télécharger la brochure.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Backend API call to log download and send email
    toast({
      title: "Téléchargement en cours",
      description: `La brochure "${brochure.title}" sera envoyée à ${formData.email}`,
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Brochures
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Téléchargez nos catalogues et guides pour découvrir en détail notre offre de machines-outils industrielles
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-[#ef6110]/20 border border-[#ef6110]/50 rounded-full text-sm">
            <Lock size={16} />
            <span>Remplissez le formulaire ci-dessous pour télécharger nos brochures</span>
          </div>
        </div>
      </section>

      {/* Download Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg border-2">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Accédez à nos brochures
                  </h2>
                  <p className="text-gray-600">
                    Complétez ce formulaire pour recevoir nos catalogues par email
                  </p>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="nom">Nom complet *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email professionnel *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jean.dupont@entreprise.fr"
                      className="mt-1"
                    />
                  </div>

                  <div className="text-xs text-gray-500 bg-gray-50 p-4 rounded-lg">
                    <Lock size={14} className="inline mr-1" />
                    Vos données sont protégées et utilisées uniquement pour vous envoyer nos brochures. 
                    Nous ne partageons jamais vos informations avec des tiers.
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brochures List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Brochures disponibles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {brochures.map((brochure) => (
              <Card key={brochure.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#ef6110]/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="text-[#ef6110]" size={24} />
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-[#ef6110] bg-[#ef6110]/10 px-2 py-1 rounded">
                      {brochure.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {brochure.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {brochure.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{brochure.pages} pages</span>
                    <span>•</span>
                    <span>{brochure.size}</span>
                  </div>
                  
                  <Button
                    onClick={() => handleDownload(brochure)}
                    className="w-full bg-[#ef6110] hover:bg-[#d45510] text-white"
                  >
                    <Download size={16} className="mr-2" />
                    Télécharger
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-2 border-dashed border-gray-300">
              <CardContent className="p-8">
                <div className="text-gray-400 mb-3">
                  <FileText size={48} className="mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Plus de brochures à venir
                </h3>
                <p className="text-gray-600">
                  Nous mettons régulièrement à jour nos catalogues. 
                  Inscrivez-vous ci-dessus pour être notifié des nouveautés.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Besoin de plus d'informations ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Notre équipe est disponible pour répondre à toutes vos questions et vous accompagner dans votre projet
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

export default BrochuresPage;
