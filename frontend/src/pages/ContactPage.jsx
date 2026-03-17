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
import SEO from '../components/SEO';

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

  const [sendMethod, setSendMethod] = useState('email');

  const buildMessageBody = () => {
    return `Nom: ${formData.nom}\nEntreprise: ${formData.entreprise || 'Non renseignée'}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone || 'Non renseigné'}\nType: ${formData.categorie}\n\nMessage:\n${formData.message}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = buildMessageBody();

    if (sendMethod === 'whatsapp') {
      const whatsappText = encodeURIComponent(`Bonjour,\n\nNouvelle demande depuis le site Alma Machines-Outils:\n\n${body}`);
      window.open(`https://wa.me/33603315688?text=${whatsappText}`, '_blank');
    } else {
      const subject = encodeURIComponent(`[Site Web] ${formData.categorie} - ${formData.nom}`);
      const mailBody = encodeURIComponent(body);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${mailBody}`;
    }

    toast({
      title: sendMethod === 'whatsapp' ? "Redirection vers WhatsApp..." : "Ouverture de votre messagerie...",
      description: "Envoyez le message pré-rempli pour finaliser votre demande.",
    });

    setIsSubmitting(false);
  };

  return (
          <SEO 
        title="Contact" 
        description="Contactez Alma Machines-Outils à Marseille. Demande de devis, conseil technique, accompagnement projet machines-outils industrielles en PACA."
        path="/contact"
      />
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

                    {/* Send method selector */}
                    <div>
                      <Label className="mb-2 block">Envoyer via *</Label>
                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setSendMethod('email')}
                          className={'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all font-medium ' + (sendMethod === 'email' ? 'border-[#ef6110] bg-[#ef6110]/5 text-[#ef6110]' : 'border-gray-200 text-gray-600 hover:border-gray-300')}
                        >
                          <Mail size={18} />
                          Email
                        </button>
                        <button
                          type="button"
                          onClick={() => setSendMethod('whatsapp')}
                          className={'flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all font-medium ' + (sendMethod === 'whatsapp' ? 'border-green-500 bg-green-50 text-green-600' : 'border-gray-200 text-gray-600 hover:border-gray-300')}
                        >
                          <Phone size={18} />
                          WhatsApp
                        </button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className={'w-full font-semibold py-3 ' + (sendMethod === 'whatsapp' ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-[#ef6110] hover:bg-[#d45510] text-white')}
                    >
                      {isSubmitting ? 'Envoi en cours...' : (sendMethod === 'whatsapp' ? 'Envoyer via WhatsApp' : 'Envoyer par email')}
                      <Send className="ml-2" size={18} />
                    </Button>

                    <p className="text-xs text-gray-600">
                      * Champs obligatoires. Vos données personnelles sont protégées conformément à notre{' '}
                      <a href="/politique-confidentialite" className="text-[#ef6110] hover:underline">politique de confidentialité</a>.
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
              title="Alma Machines-Outils - 6 Rue d'Oran, 13005 Marseille"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.1!2d5.3937!3d43.2895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c0f1d7a8f8e1%3A0x0!2s6%20Rue%20d'Oran%2C%2013005%20Marseille!5e0!3m2!1sfr!2sfr!4v1709900000000!5m2!1sfr!2sfr"
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
