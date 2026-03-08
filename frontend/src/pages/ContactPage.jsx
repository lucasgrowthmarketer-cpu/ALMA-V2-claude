import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { siteConfig } from '../data/machinesData';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    categorie: 'Demande de devis',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par l'API backend plus tard)
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({
        nom: '',
        entreprise: '',
        email: '',
        telephone: '',
        categorie: 'Demande de devis',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

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
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner 
            dans l'acquisition de vos machines-outils.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-20 mb-12">
            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#ef6110] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
                <a href={siteConfig.whatsappLink} className="text-[#ef6110] hover:underline">
                  {siteConfig.whatsapp}
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#ef6110] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a href={`mailto:${siteConfig.email}`} className="text-[#ef6110] hover:underline break-all">
                  {siteConfig.email}
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#ef6110] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Localisation</h3>
                <p className="text-gray-600">
                  {siteConfig.adresse}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nom">Nom complet *</Label>
                        <Input
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="entreprise">Entreprise</Label>
                        <Input
                          id="entreprise"
                          name="entreprise"
                          value={formData.entreprise}
                          onChange={handleChange}
                          placeholder="Nom de votre entreprise"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="votre@email.com"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="telephone">Téléphone</Label>
                        <Input
                          id="telephone"
                          name="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={handleChange}
                          placeholder="+33 6 00 00 00 00"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="categorie">Type de demande *</Label>
                      <select
                        id="categorie"
                        name="categorie"
                        value={formData.categorie}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ef6110]"
                      >
                        <option value="Demande de devis">Demande de devis</option>
                        <option value="Conseil">Conseil</option>
                        <option value="Démonstration">Démonstration</option>
                        <option value="Rappel">Demande de rappel</option>
                        <option value="Autre">Autre</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Décrivez votre projet ou votre besoin..."
                        rows={6}
                        className="mt-1"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold py-3"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                      <Send className="ml-2" size={18} />
                    </Button>

                    <p className="text-xs text-gray-600">
                      * Champs obligatoires. Vos données personnelles sont protégées et ne seront utilisées 
                      que pour répondre à votre demande.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi nous contacter ?</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Conseil personnalisé</h3>
                    <p className="text-gray-600">
                      Nos experts vous guident dans le choix de la machine adaptée à vos besoins spécifiques 
                      et à votre budget.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Inspection et garantie</h3>
                    <p className="text-gray-600">
                      Toutes nos machines sont inspectées, testées et remises en conformité avant la livraison. 
                      Nous assurons leur bon fonctionnement.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Installation et formation</h3>
                    <p className="text-gray-600">
                      Nous gérons l'installation sur votre site et formons vos équipes à l'utilisation 
                      de votre nouvelle machine.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Service après-vente</h3>
                    <p className="text-gray-600">
                      Un support technique et un service après-vente réactif pour vous accompagner sur le long terme.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Alma Machines-Outils - Marseille, Région PACA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185956.4415740582!2d5.2326841!3d43.2804935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille!5e0!3m2!1sfr!2sfr!4v1709900000000!5m2!1sfr!2sfr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
