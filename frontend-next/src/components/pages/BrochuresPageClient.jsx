'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText, ArrowRight, Send, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { siteConfig } from '@/data/machinesData';
import { useToast } from '@/hooks/use-toast';
import { plaquettes, brandCatalogues } from '@/data/catalogues';
import BrandLogo from '@/components/BrandLogo';

import { submitForm } from '@/lib/api';

// Carte de catalogue téléchargeable (disposition commune plaquettes + marques)
const CatalogueCard = ({ title, subtitle, description, file, color, logoSlug }) => (
  <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
    <div className={`bg-gradient-to-br ${color} p-8 text-white`}>
      {logoSlug ? (
        <div className="mb-4">
          <BrandLogo brandSlug={logoSlug} size="lg" />
        </div>
      ) : (
        <FileText size={40} className="mb-4 opacity-80" />
      )}
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <span className="text-sm opacity-75">{subtitle}</span>
    </div>
    <CardContent className="p-6 flex flex-col flex-1">
      <p className="text-gray-700 text-sm mb-6 flex-1">{description}</p>
      <a href={file} target="_blank" rel="noopener noreferrer" download className="mt-auto">
        <Button className="w-full bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold rounded-full">
          <Download size={16} className="mr-2" />
          Télécharger le PDF
        </Button>
      </a>
    </CardContent>
  </Card>
);

const formatCategories = (categories = []) =>
  categories.map((c) => c.charAt(0).toUpperCase() + c.slice(1)).join(' · ');

const BrochuresPageClient = () => {
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

  return (
    <>
      
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Brochures</h1>
          <p className="text-xl text-gray-300 max-w-2xl">Téléchargez nos catalogues pour découvrir l'ensemble de notre gamme de machines-outils industrielles neuves.</p>
        </div>
      </section>

      {/* Plaquettes Alma */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Plaquettes Alma</h2>
            <p className="text-gray-600">Notre catalogue général et nos plaquettes par gamme.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plaquettes.map((p) => (
              <CatalogueCard
                key={p.id}
                title={p.title}
                subtitle={p.category}
                description={p.description}
                file={p.file}
                color={p.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Catalogues par marque */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Catalogues par marque</h2>
            <p className="text-gray-600">Téléchargez la documentation complète de chacun de nos constructeurs partenaires.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {brandCatalogues.map((b) => (
              <CatalogueCard
                key={b.slug}
                title={b.nom}
                subtitle={formatCategories(b.categories)}
                description={b.description}
                file={b.file}
                color={b.color}
                logoSlug={b.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Demande par email (formulaire conservé) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-[#ef6110]/20 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Vous préférez une sélection sur mesure ?</h2>
                <p className="text-gray-600 text-sm mb-6 text-center">Remplissez le formulaire, nous vous envoyons les catalogues adaptés à votre projet par email.</p>
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
                    {isSubmitting ? 'Envoi en cours...' : 'Recevoir une sélection'}
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
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Parcourez directement notre catalogue de machines disponibles.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/gamme/usinage"><Button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8">Usinage <ArrowRight className="ml-2" size={16} /></Button></Link>
            <Link href="/gamme/chaudronnerie"><Button variant="outline" className="font-semibold px-8">Chaudronnerie <ArrowRight className="ml-2" size={16} /></Button></Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BrochuresPageClient;
