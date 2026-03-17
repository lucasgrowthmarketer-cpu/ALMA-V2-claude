import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Send, Package, Search, FileText, Phone, Mail, Settings, Wrench, Factory, Ruler, Calendar, MapPin, User, Building2, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { siteConfig } from '../data/machinesData';
import SEO from '../components/SEO';

const OccasionPage = () => {
  const [formData, setFormData] = useState({
    type: 'vente',
    nom: '',
    entreprise: '',
    email: '',
    telephone: '',
    categorie: '',
    marque: '',
    modele: '',
    annee: '',
    etat: '',
    localisation: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isVente = formData.type === 'vente';
    const subject = isVente 
      ? `[Occasion - Vente] ${formData.marque} ${formData.modele} - ${formData.nom}`
      : `[Occasion - Recherche] ${formData.categorie} - ${formData.nom}`;
    
    const body = isVente
      ? `Dépôt de machine d'occasion\n\nNom: ${formData.nom}\nEntreprise: ${formData.entreprise}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\n\nMachine proposée:\nMarque: ${formData.marque}\nModèle: ${formData.modele}\nAnnée: ${formData.annee}\nÉtat: ${formData.etat}\nLocalisation: ${formData.localisation}\n\nDescription:\n${formData.description}`
      : `Recherche de machine d'occasion\n\nNom: ${formData.nom}\nEntreprise: ${formData.entreprise}\nEmail: ${formData.email}\nTéléphone: ${formData.telephone}\n\nRecherche:\nCatégorie: ${formData.categorie}\nMarque souhaitée: ${formData.marque}\nBudget / Détails:\n${formData.description}`;

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const isVente = formData.type === 'vente';

  return (
    <>
      <SEO 
        title="Machines d'occasion - Achat & Vente" 
        description="Achetez ou vendez des machines-outils d'occasion via le réseau Alma et Arcane Group. Déposez votre annonce ou faites une demande de recherche."
        path="/occasion"
      />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Machines d'Occasion</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Grâce au réseau national <Link to="/arcane-group" className="text-[#ef6110] hover:underline font-semibold">ARCANE GROUP</Link>, 
            nous facilitons l'achat et la vente de machines-outils d'occasion sur tout le territoire français.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ef6110]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText size={28} className="text-[#ef6110]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. Déposez votre demande</h3>
              <p className="text-sm text-gray-600">
                Remplissez le formulaire pour vendre votre machine ou rechercher un modèle précis.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ef6110]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Search size={28} className="text-[#ef6110]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. Nous recherchons</h3>
              <p className="text-sm text-gray-600">
                Notre réseau de 10 bureaux en France active ses contacts pour trouver la meilleure offre.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#ef6110]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package size={28} className="text-[#ef6110]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Mise en relation</h3>
              <p className="text-sm text-gray-600">
                Nous vous mettons en contact avec l'acheteur ou le vendeur. Accompagnement complet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main content - 2 columns */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            
            {/* Left - Info + advantages */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi passer par Alma ?</h2>
              
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#ef6110]">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Settings size={18} className="text-[#ef6110] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Expertise technique</p>
                        <p className="text-xs text-gray-600">Évaluation professionnelle de chaque machine par nos techniciens</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-[#ef6110]">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Factory size={18} className="text-[#ef6110] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Réseau national</p>
                        <p className="text-xs text-gray-600">10 bureaux ARCANE GROUP couvrant toute la France</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-[#ef6110]">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Wrench size={18} className="text-[#ef6110] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">SAV assuré</p>
                        <p className="text-xs text-gray-600">Installation, mise en service et maintenance par Ernault Services</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gray-900 text-white">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Besoin d'un conseil rapide ?</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Appelez-nous directement pour discuter de votre projet d'achat ou de vente.
                  </p>
                  <div className="flex flex-col gap-2">
                    <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-medium">
                      <Phone size={14} /> WhatsApp
                    </a>
                    <a href={'mailto:' + siteConfig.email} className="inline-flex items-center gap-2 text-[#ef6110] hover:text-[#ef6110]/80 text-sm font-medium">
                      <Mail size={14} /> {siteConfig.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <Card className="shadow-xl border-2 border-gray-100">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Déposez votre demande</h2>
                  <p className="text-gray-600 text-sm mb-6">Vendez votre machine ou faites-nous part de votre recherche.</p>

                  {/* Toggle Vente / Recherche */}
                  <div className="flex gap-2 mb-8 p-1 bg-gray-100 rounded-full">
                    <button
                      onClick={() => setFormData({...formData, type: 'vente'})}
                      className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-all ${isVente ? 'bg-[#ef6110] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      Je vends une machine
                    </button>
                    <button
                      onClick={() => setFormData({...formData, type: 'recherche'})}
                      className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-all ${!isVente ? 'bg-[#ef6110] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      Je recherche une machine
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Contact info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1 block">
                          <User size={14} className="inline mr-1" /> Nom *
                        </Label>
                        <Input name="nom" value={formData.nom} onChange={handleChange} required placeholder="Votre nom" />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1 block">
                          <Building2 size={14} className="inline mr-1" /> Entreprise
                        </Label>
                        <Input name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder="Nom de l'entreprise" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1 block">
                          <Mail size={14} className="inline mr-1" /> Email *
                        </Label>
                        <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="votre@email.com" />
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-700 mb-1 block">
                          <Phone size={14} className="inline mr-1" /> Téléphone
                        </Label>
                        <Input name="telephone" value={formData.telephone} onChange={handleChange} placeholder="+33 6 00 00 00 00" />
                      </div>
                    </div>

                    {/* Machine info */}
                    <div className="border-t pt-5 mt-2">
                      <h3 className="text-sm font-bold text-gray-900 mb-4">
                        {isVente ? 'Informations sur la machine à vendre' : 'Machine recherchée'}
                      </h3>
                      
                      {isVente ? (
                        <>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                              <Label className="text-sm text-gray-700 mb-1 block">Marque *</Label>
                              <Input name="marque" value={formData.marque} onChange={handleChange} required placeholder="Ex: CMZ, Haco, Danobat..." />
                            </div>
                            <div>
                              <Label className="text-sm text-gray-700 mb-1 block">Modèle *</Label>
                              <Input name="modele" value={formData.modele} onChange={handleChange} required placeholder="Ex: TA-20, HSLX..." />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            <div>
                              <Label className="text-sm text-gray-700 mb-1 block">
                                <Calendar size={14} className="inline mr-1" /> Année
                              </Label>
                              <Input name="annee" value={formData.annee} onChange={handleChange} placeholder="2018" />
                            </div>
                            <div>
                              <Label className="text-sm text-gray-700 mb-1 block">
                                <Ruler size={14} className="inline mr-1" /> État
                              </Label>
                              <select name="etat" value={formData.etat} onChange={handleChange} className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                                <option value="">Sélectionner</option>
                                <option value="Excellent">Excellent</option>
                                <option value="Bon">Bon état</option>
                                <option value="Correct">Correct</option>
                                <option value="A reviser">À réviser</option>
                              </select>
                            </div>
                            <div>
                              <Label className="text-sm text-gray-700 mb-1 block">
                                <MapPin size={14} className="inline mr-1" /> Localisation
                              </Label>
                              <Input name="localisation" value={formData.localisation} onChange={handleChange} placeholder="Ville / Dept" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                          <div>
                            <Label className="text-sm text-gray-700 mb-1 block">Catégorie *</Label>
                            <select name="categorie" value={formData.categorie} onChange={handleChange} required className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                              <option value="">Sélectionner</option>
                              <option value="Tour CNC">Tour CNC</option>
                              <option value="Centre d'usinage">Centre d'usinage</option>
                              <option value="Rectifieuse">Rectifieuse</option>
                              <option value="Presse plieuse">Presse plieuse</option>
                              <option value="Cisaille">Cisaille</option>
                              <option value="Découpe laser">Découpe laser</option>
                              <option value="Scie">Scie à ruban</option>
                              <option value="Perceuse">Perceuse</option>
                              <option value="Autre">Autre</option>
                            </select>
                          </div>
                          <div>
                            <Label className="text-sm text-gray-700 mb-1 block">Marque souhaitée</Label>
                            <Input name="marque" value={formData.marque} onChange={handleChange} placeholder="Indifférent ou marque précise" />
                          </div>
                        </div>
                      )}

                      <div>
                        <Label className="text-sm text-gray-700 mb-1 block">
                          <MessageSquare size={14} className="inline mr-1" /> 
                          {isVente ? 'Description, options, heures de fonctionnement...' : 'Précisions sur votre recherche, budget...'}
                        </Label>
                        <textarea 
                          name="description" 
                          value={formData.description} 
                          onChange={handleChange}
                          rows={4}
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm resize-none"
                          placeholder={isVente ? "Décrivez la machine : état général, options, heures d'utilisation, CN, raison de la vente..." : "Décrivez votre besoin : capacités recherchées, budget approximatif, délai..."}
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold py-3 rounded-full text-base">
                      <Send size={16} className="mr-2" />
                      {isVente ? 'Envoyer mon annonce' : 'Envoyer ma recherche'}
                    </Button>
                    <p className="text-xs text-gray-400 text-center">
                      Nous vous recontactons sous 48h ouvrées.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Neuf */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Vous cherchez du neuf ?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Découvrez notre gamme complète de machines-outils industrielles neuves avec garantie constructeur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/gamme/usinage">
              <Button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8">
                Usinage <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
            <Link to="/gamme/chaudronnerie">
              <Button variant="outline" className="font-semibold px-8">
                Chaudronnerie <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default OccasionPage;
