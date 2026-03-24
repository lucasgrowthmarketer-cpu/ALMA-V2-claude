import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, ArrowRight, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { siteConfig } from '../data/machinesData';
import { useToast } from '../hooks/use-toast';
import SEO from '../components/SEO';
import { submitForm } from '../lib/api';

const BrochuresPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ nom: '', email: '', telephone: '', entreprise: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const backendUrl = process.env.REACT_APP_API_URL || '';
      const response = await fetch(`${backendUrl}/api/brochures`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: "Demande envoyée !", description: "Vous recevrez nos brochures par email très prochainement." });
        setFormData({ nom: '', email: '', telephone: '', entreprise: '' });
      } else {
        throw new Error('Erreur');
      }
    } catch (error) {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent('[Brochures] Demande de catalogues')}&body=${encodeURIComponent(`Nom: ${formData.nom}\nEmail: ${formData.email}\nEntreprise: ${formData.entreprise}`)}`;
    }

    setIsSubmitting(false);
  };

  const brochures = [
    { title: "Catalogue Machines d'Usinage 2026", description: "Tours CNC, centres d'usinage, rectifieuses, électroérosion, marquage laser, contrôle dimensionnel.", category: 'Usinage', brands: 'CMZ, Hartford, Akira, Axile, Soraluce, Toyoda, GER, Danobat, ONA, Wenzel, RoboJob...', color: 'from-[#ef6110] to-[#d45510]' },
    { title: 'Catalogue Chaudronnerie 2026', description: "Cisailles, presses plieuses, rouleuses, découpe laser, plasma, jet d'eau, scies, perceuses, stockage.", category: 'Chaudronnerie', brands: 'Haco, Phenix, Imet, Kaltenbach, Tyro, Kingsland, Logitower, Thiel...', color: 'from-blue-900 to-blue-950' },
    { title: 'Catalogue Général Alma 2026', description: "L'ensemble de notre offre de machines-outils industrielles neuves. 28 constructeurs, plus de 160 machines.", category: 'Général', brands: 'Toutes nos marques partenaires', color: 'from-gray-800 to-gray-900' }
  ];

  return (
    <>
      <SEO title="Brochures et catalogues" description="Demandez nos catalogues de machines-outils industrielles. Usinage, chaudronnerie, 28 marques partenaires." path="/brochures" />
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Brochures</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Recevez nos catalogues pour découvrir l'ensemble de notre gamme de machines-outils industrielles neuves.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {brochures.map((b, i) => (
              <Card key={i} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className={`bg-gradient-to-br ${b.color} p-8 text-white`}>
                  <FileText size={40} className="mb-4 opacity-80" />
                  <h3 className="text-xl font-bold mb-1">{b.title}</h3>
                  <span className="text-sm opacity-75">{b.category}</span>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm mb-4">{b.description}</p>
                  <p className="text-xs text-gray-500"><span className="font-medium">Marques :</span> {b.brands}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-[#ef6110]/20 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Recevez vos brochures</h2>
                <p className="text-gray-600 text-sm mb-6 text-center">Remplissez le formulaire, nous vous envoyons nos catalogues par email.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1 block">Nom *</Label>
                    <Input name="nom" value={formData.nom} onChange={handleChange} required placeholder="Votre nom" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1 block">Email *</Label>
                    <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1 block">Entreprise</Label>
                    <Input name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder="Nom de l'entreprise" />
                  </div>
                  <div>
                    <Label className="text-sm font-medium text-gray-700 mb-1 block">Téléphone</Label>
                    <Input name="telephone" value={formData.telephone} onChange={handleChange} placeholder="+33 6 00 00 00 00" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold rounded-full py-3">
                    <Send size={16} className="mr-2" />
                    {isSubmitting ? 'Envoi en cours...' : 'Recevoir les brochures'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultez nos machines en ligne</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">En attendant vos brochures, parcourez directement notre catalogue.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gamme/usinage"><Button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8">Usinage <ArrowRight className="ml-2" size={16} /></Button></Link>
            <Link to="/gamme/chaudronnerie"><Button variant="outline" className="font-semibold px-8">Chaudronnerie <ArrowRight className="ml-2" size={16} /></Button></Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BrochuresPage;
