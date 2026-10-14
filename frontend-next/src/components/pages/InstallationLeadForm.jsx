'use client';
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { submitForm } from '@/lib/api';
import { siteConfig } from '@/data/machinesData';

// Formulaire « projet similaire » des pages Installations récentes.
// Passe par /api/contact (email à JB + BCC Lucas + liste Brevo Contact #6) ;
// la catégorie indique la page d'origine pour que JB sache ce qui a déclenché la demande.
const InstallationLeadForm = ({ installation, id = 'projet' }) => {
  const [form, setForm] = useState({ nom: '', entreprise: '', telephone: '', email: '', message: '' });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [error, setError] = useState('');

  const origine = installation.menuLabel || installation.titre;
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.nom.trim() || !form.telephone.trim() || !form.email.trim()) {
      setError('Merci de renseigner votre nom, votre téléphone et votre e-mail.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Adresse e-mail invalide.');
      return;
    }
    if (!consent) {
      setError("Merci d'accepter d'être recontacté.");
      return;
    }
    setStatus('sending');
    try {
      await submitForm('/contact', {
        nom: form.nom,
        entreprise: form.entreprise,
        telephone: form.telephone,
        email: form.email,
        categorie: `Projet similaire · ${origine}`,
        message:
          (form.message.trim() || '(pas de précision)') +
          `\n\nPage d'origine : /installations/${installation.slug}`,
      });
      setStatus('sent');
      try {
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', { form: 'installation', installation: installation.slug });
        }
      } catch (err) {}
    } catch (err) {
      setStatus('error');
      setError(`L'envoi a échoué. Réessayez dans un instant, ou écrivez-nous à ${siteConfig.email}.`);
    }
  };

  return (
    <div id={id} className="scroll-mt-24 bg-[#fdf1e9] border-l-[3px] border-[#ef6110] p-6 sm:p-8 my-10">
      {status === 'sent' ? (
        <div className="flex items-start gap-3">
          <CheckCircle className="text-[#ef6110] flex-shrink-0 mt-1" size={24} />
          <div>
            <p className="text-xl font-black text-gray-900 mb-1">Demande envoyée.</p>
            <p className="text-gray-700">
              Jean-Baptiste Borron revient vers vous rapidement pour étudier votre projet. Devis sous 48h après analyse du besoin.
            </p>
          </div>
        </div>
      ) : (
        <>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#ef6110] font-semibold mb-2">Votre projet</p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mb-2">
            Un besoin proche de celui-ci ?
          </h2>
          <p className="text-gray-700 mb-6">
            Décrivez-le en quelques mots. Nous vous rappelons pour en parler, sans engagement.
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4" noValidate>
            <div>
              <Label htmlFor={`${id}-nom`} className="text-sm font-medium text-gray-700 mb-1 block">Nom et prénom *</Label>
              <Input id={`${id}-nom`} name="nom" value={form.nom} onChange={handleChange} required className="bg-white" />
            </div>
            <div>
              <Label htmlFor={`${id}-entreprise`} className="text-sm font-medium text-gray-700 mb-1 block">Société</Label>
              <Input id={`${id}-entreprise`} name="entreprise" value={form.entreprise} onChange={handleChange} className="bg-white" />
            </div>
            <div>
              <Label htmlFor={`${id}-telephone`} className="text-sm font-medium text-gray-700 mb-1 block">Téléphone *</Label>
              <Input id={`${id}-telephone`} name="telephone" type="tel" value={form.telephone} onChange={handleChange} required className="bg-white" />
            </div>
            <div>
              <Label htmlFor={`${id}-email`} className="text-sm font-medium text-gray-700 mb-1 block">E-mail *</Label>
              <Input id={`${id}-email`} name="email" type="email" value={form.email} onChange={handleChange} required className="bg-white" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor={`${id}-message`} className="text-sm font-medium text-gray-700 mb-1 block">Votre besoin</Label>
              <Textarea
                id={`${id}-message`}
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Type de pièces, cadences, machine à remplacer, délai..."
                className="bg-white"
              />
            </div>
            <div className="sm:col-span-2 flex items-start gap-2">
              <Checkbox id={`${id}-consent`} checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5 bg-white" />
              <Label htmlFor={`${id}-consent`} className="text-xs text-gray-600 font-normal cursor-pointer leading-snug">
                J'accepte d'être recontacté par ALMA Machines-Outils et que mes données soient traitées conformément à la{' '}
                <a href="/politique-confidentialite" target="_blank" className="text-[#ef6110] underline">politique de confidentialité</a>.
              </Label>
            </div>
            {error && <p className="sm:col-span-2 text-sm text-red-600">{error}</p>}
            <div className="sm:col-span-2">
              <Button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8 py-3 rounded-full w-full sm:w-auto"
              >
                <Send size={16} className="mr-2" />
                {status === 'sending' ? 'Envoi…' : 'Être rappelé pour mon projet'}
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default InstallationLeadForm;
