'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { installations, lieuInstallation } from '@/data/installations';

const InstallationsPageClient = () => (
  <div className="min-h-screen bg-white">
    {/* Hero */}
    <section className="bg-[#1a1c1b] text-white">
      <div className="container mx-auto px-4 py-20 md:py-24">
        <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors text-sm">
          <ArrowLeft size={16} className="mr-1" /> Retour à l'accueil
        </Link>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#ef6110] font-semibold mb-4">
          Installations récentes · PACA · Languedoc
        </p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] max-w-4xl mb-6">
          Ce que nous avons installé.
          <br />
          Ce que nous pouvons faire chez vous.
        </h1>
        <p className="border-l-[3px] border-[#ef6110] pl-5 text-lg md:text-xl text-[#d2cbc8] max-w-3xl leading-relaxed">
          Chaque projet part d'un besoin de production réel. Voici comment nous y avons répondu, machine par machine, atelier par atelier.
        </p>
      </div>
    </section>

    {/* Liste */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {installations.map((inst, i) => {
            const photo = inst.photos?.[0];
            return (
              <Link key={inst.slug} href={`/installations/${inst.slug}`} className="group block">
                <article className="h-full flex flex-col bg-white border border-gray-200 hover:border-[#ef6110] transition-colors overflow-hidden">
                  {photo && (
                    <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        loading={i < 2 ? 'eager' : 'lazy'}
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1 border-l-[3px] border-[#ef6110]">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-2">
                      {[String(i + 1).padStart(2, '0'), inst.client, lieuInstallation(inst)].filter(Boolean).join(' · ')}
                    </p>
                    <h2 className="text-xl md:text-2xl font-black tracking-tight text-gray-900 mb-3 group-hover:text-[#ef6110] transition-colors">
                      {inst.titre}
                    </h2>
                    <p className="text-gray-600 mb-5 flex-1">{inst.accroche}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-[#ef6110]">
                      Lire le projet <ArrowRight size={16} className="ml-1.5" />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-[#fdf1e9] py-14">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 mb-3">Votre atelier est le prochain projet ?</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">Audit du besoin, mise en concurrence des constructeurs, devis sous 48h.</p>
        <Link href="/contact">
          <Button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8 py-3 rounded-full">
            Parler de votre projet <ArrowRight className="ml-2" size={18} />
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default InstallationsPageClient;
