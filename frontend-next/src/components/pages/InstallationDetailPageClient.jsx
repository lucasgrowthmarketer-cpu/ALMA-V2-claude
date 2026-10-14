'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import brandsSimple from '@/data/brands_simple.json';
import { installations, lieuInstallation } from '@/data/installations';
import { siteConfig } from '@/data/machinesData';
import InstallationLeadForm from '@/components/pages/InstallationLeadForm';

const Eyebrow = ({ children, className = '' }) => (
  <p className={`font-mono text-[11px] uppercase tracking-[0.25em] text-[#ef6110] font-semibold ${className}`}>{children}</p>
);

const Block = ({ num, label, paragraphs }) => {
  if (!paragraphs?.length) return null;
  return (
    <div className="grid grid-cols-[48px_1fr] sm:grid-cols-[72px_1fr] gap-4 py-10 border-t border-gray-200">
      <span className="font-mono text-2xl sm:text-3xl font-bold text-[#ef6110] leading-none">{num}</span>
      <div>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-900 mb-4">{label}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-gray-700 text-lg leading-relaxed mb-4 last:mb-0">{p}</p>
        ))}
      </div>
    </div>
  );
};

const InstallationDetailPageClient = ({ installation }) => {
  if (!installation) return null;
  const [hero, ...gallery] = installation.photos || [];
  const brands = (installation.marques || [])
    .map((slug) => brandsSimple.find((b) => b.slug === slug))
    .filter(Boolean);
  const lieu = lieuInstallation(installation);
  const others = installations.filter((i) => i.slug !== installation.slug).slice(0, 3);

  // Barre de rappel : apparaît une fois la section 02 dépassée, disparaît quand le formulaire est à l'écran.
  const afterSolutionRef = useRef(null);
  const formWrapRef = useRef(null);
  const [pastSolution, setPastSolution] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === afterSolutionRef.current) {
          setPastSolution(e.boundingClientRect.top < 0 || e.isIntersecting);
        }
        if (e.target === formWrapRef.current) setFormVisible(e.isIntersecting);
      });
    });
    if (afterSolutionRef.current) obs.observe(afterSolutionRef.current);
    if (formWrapRef.current) obs.observe(formWrapRef.current);
    return () => obs.disconnect();
  }, []);
  const showBar = pastSolution && !formVisible;
  const scrollToForm = () => document.getElementById('projet')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const facts = [
    { k: 'Client', v: installation.client },
    { k: 'Secteur', v: installation.secteur },
    { k: 'Lieu', v: lieu },
    { k: 'Équipement', v: installation.machines?.map((m) => m.label).join(' · ') },
    { k: 'Mise en service', v: installation.miseEnService },
  ].filter((f) => f.v);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        {hero && (
          <img
            src={hero.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" aria-hidden="true" />
        <div className="container mx-auto px-4 relative py-20 md:py-28">
          <Link href="/installations" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors text-sm">
            <ArrowLeft size={16} className="mr-1" /> Toutes les installations
          </Link>
          <Eyebrow className="mb-4">{lieu ? `Installation · ${lieu}` : 'Installation'}</Eyebrow>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl mb-6">
            {installation.titre}
          </h1>
          <p className="border-l-[3px] border-[#ef6110] pl-5 text-lg md:text-xl text-[#d2cbc8] max-w-3xl leading-relaxed">
            {installation.accroche}
          </p>
          <Button
            onClick={scrollToForm}
            className="mt-8 bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8 py-3 rounded-full"
          >
            Un projet similaire ? Être rappelé <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </section>

      {/* Fiche résumé */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-4">
          <dl className="grid grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
            {facts.map((f) => (
              <div key={f.k} className="py-6 pr-4">
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-1">{f.k}</dt>
                <dd className="text-gray-900 font-semibold">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Récit */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {hero && (
              <figure className="mb-6">
                <img src={hero.src} alt={hero.alt} className="w-full rounded-lg" loading="eager" />
              </figure>
            )}
            <Block num="01" label="Le besoin" paragraphs={installation.besoin} />
            <Block num="02" label="La solution ALMA" paragraphs={installation.solution} />
            {gallery.length > 0 && (
              <div className={`grid grid-cols-1 ${gallery.length > 1 ? 'sm:grid-cols-2' : ''} gap-4 py-6`}>
                {gallery.map((p) => (
                  <img
                    key={p.src}
                    src={p.src}
                    alt={p.alt}
                    className={`w-full object-cover rounded-lg ${gallery.length > 1 ? 'aspect-[4/5] object-top' : 'aspect-[16/9]'}`}
                    loading="lazy"
                  />
                ))}
              </div>
            )}
            <div ref={afterSolutionRef} aria-hidden="true" />
            <div ref={formWrapRef}>
              <InstallationLeadForm installation={installation} />
            </div>
            <Block num="03" label="Ce que ça change pour vous" paragraphs={installation.enseignement} />

            {/* Liens machines et marques */}
            {(installation.machines?.some((m) => m.slug) || brands.length > 0) && (
              <div className="border-t border-gray-200 pt-8 flex flex-wrap gap-3">
                {installation.machines
                  ?.filter((m) => m.slug)
                  .map((m) => (
                    <Link
                      key={m.slug}
                      href={`/machine/${m.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-gray-900 border border-gray-300 hover:border-[#ef6110] hover:text-[#ef6110] rounded-full px-4 py-2 transition-colors"
                    >
                      Voir la fiche machine <ArrowRight size={14} className="ml-1.5" />
                    </Link>
                  ))}
                {brands.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/marque/${b.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-gray-900 border border-gray-300 hover:border-[#ef6110] hover:text-[#ef6110] rounded-full px-4 py-2 transition-colors"
                  >
                    La gamme {b.nom} <ArrowRight size={14} className="ml-1.5" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Eyebrow className="mb-3">Votre projet</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
              Un atelier à optimiser, une machine à remplacer ?
            </h2>
            <p className="text-[#d2cbc8] text-lg mb-8 max-w-2xl">
              Nous étudions votre production et votre parc existant, reprise comprise si elle a du sens. Devis sous 48h après analyse du besoin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={scrollToForm}
                className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8 py-3 rounded-full w-full sm:w-auto"
              >
                Décrire mon projet <ArrowRight className="ml-2" size={18} />
              </Button>
              <a href={`tel:${siteConfig.whatsapp}`}>
                <Button variant="outline" className="border-[#ef6110] bg-transparent text-white hover:bg-[#ef6110] hover:text-white font-semibold px-8 py-3 rounded-full w-full sm:w-auto">
                  <Phone className="mr-2" size={16} /> Appeler Jean-Baptiste
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Autres installations */}
      {others.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Eyebrow className="mb-6">Autres installations</Eyebrow>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {others.map((o) => (
                  <Link key={o.slug} href={`/installations/${o.slug}`} className="group block bg-white border-l-[3px] border-[#ef6110] p-6 hover:shadow-lg transition-shadow">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                      {lieuInstallation(o) || 'Installation'}
                    </p>
                    <h3 className="font-bold text-gray-900 group-hover:text-[#ef6110] transition-colors">{o.titre}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Barre de rappel (après la section 02) */}
      <div
        className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${showBar ? 'translate-y-0' : 'translate-y-full'}`}
        aria-hidden={!showBar}
      >
        <div className="bg-gray-900/95 backdrop-blur border-t-[3px] border-[#ef6110] pb-safe">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <p className="text-white text-sm sm:text-base font-semibold leading-tight">
              Un projet proche de celui-ci ?
              <span className="hidden sm:inline text-gray-400 font-normal"> Devis sous 48h après analyse du besoin.</span>
            </p>
            <Button
              onClick={scrollToForm}
              tabIndex={showBar ? 0 : -1}
              className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold rounded-full px-5 flex-shrink-0"
            >
              Être rappelé
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationDetailPageClient;
