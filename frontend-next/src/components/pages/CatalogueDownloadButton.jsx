'use client';
import React, { useState } from 'react';
import { Download, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LEAD_FLAG = 'alma_catalogue_lead_done';

function triggerDownload(file) {
  const a = document.createElement('a');
  a.href = file;
  a.download = '';
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Bouton de téléchargement d'un catalogue, protégé par un formulaire de capture (lead-gate).
// Option B : le visiteur ne remplit le formulaire qu'une seule fois par navigateur ;
// les téléchargements suivants sont directs.
const CatalogueDownloadButton = ({
  catalogueName,
  catalogueFile,
  source = '',
  label = 'Télécharger le PDF',
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ nom: '', societe: '', telephone: '', email: '' });
  const [consent, setConsent] = useState(false);

  const handleClick = () => {
    let already = false;
    try {
      already = localStorage.getItem(LEAD_FLAG) === '1';
    } catch (e) {}
    if (already) {
      triggerDownload(catalogueFile);
    } else {
      setError('');
      setOpen(true);
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.nom.trim() || !form.societe.trim() || !form.telephone.trim() || !form.email.trim()) {
      setError('Merci de remplir tous les champs.');
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
    setSubmitting(true);
    try {
      const backendUrl = process.env.REACT_APP_API_URL || '';
      const res = await fetch(`${backendUrl}/api/catalogue-lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: form.nom,
          societe: form.societe,
          telephone: form.telephone,
          email: form.email,
          catalogue: catalogueName,
          catalogue_url: catalogueFile,
          source,
          consent: true,
        }),
      });
      if (!res.ok) throw new Error('fail');
      try {
        localStorage.setItem(LEAD_FLAG, '1');
      } catch (e) {}
      setOpen(false);
      triggerDownload(catalogueFile);
    } catch (err) {
      setError('Une erreur est survenue. Réessayez ou contactez-nous.');
    }
    setSubmitting(false);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        className={`bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold ${className}`}
      >
        <Download size={16} className="mr-2" />
        {label}
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60"
          onClick={() => !submitting && setOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => !submitting && setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Télécharger le catalogue</h3>
              <p className="text-sm text-gray-600 mb-5">
                Renseignez vos coordonnées pour accéder à «&nbsp;{catalogueName}&nbsp;».
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-1 block">Nom et prénom *</Label>
                  <Input name="nom" value={form.nom} onChange={handleChange} required placeholder="Jean Dupont" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-1 block">Société *</Label>
                  <Input name="societe" value={form.societe} onChange={handleChange} required placeholder="Votre entreprise" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-1 block">Téléphone *</Label>
                  <Input name="telephone" value={form.telephone} onChange={handleChange} required placeholder="+33 6 00 00 00 00" />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700 mb-1 block">E-mail *</Label>
                  <Input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jean@entreprise.com" />
                </div>
                <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 accent-[#ef6110]"
                  />
                  <span>
                    J'accepte d'être recontacté par ALMA Machines-Outils et que mes données soient traitées
                    conformément à la{' '}
                    <a href="/politique-confidentialite" target="_blank" className="text-[#ef6110] underline">
                      politique de confidentialité
                    </a>
                    .
                  </span>
                </label>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold rounded-full py-3 mt-1"
                >
                  {submitting ? (
                    'Envoi…'
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Recevoir le catalogue
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CatalogueDownloadButton;
