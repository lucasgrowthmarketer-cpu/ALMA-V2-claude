'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Package, Factory, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TIMELINE = [
  { year: '1892', text: "Fondation de la maison Ernault par Henri Ernault, qui rejoint ensuite la maison Colmant." },
  { year: '1934', text: "Fusion avec Batignolles Châtillon : naissance d'Ernault Batignolles." },
  { year: '1962', text: "Fusion avec Somua : Ernault Somua renforce son leadership dans le secteur." },
  { year: '1985', text: "Collaboration avec Toyoda Automation : gamme innovante en tournage, bancs en granitan et centres d'usinage." },
  { year: '1994', text: "Le Groupe Cato réunit Cazeneuve, Ernault, Somab, Sydéric, Vernier et Cincinnati." },
  { year: '1980-2007', text: "Plus de 600 centres et 2 000 tours à commande numérique construits." },
  { year: '2007', text: "Ernault Services reprend la marque et les activités de services clients, portée par cinq associés d'Arcane Group." },
];

const ACTIVITES = [
  "Préparation et installation de machines-outils",
  "Réparation en atelier de machines-outils",
  "Intervention sur site : maintenance curative, préventive…",
  "Contrôle géométrique et ballbar, ajout d'accessoires et robotisation",
  "Réparation de broches, tourelles et diviseurs",
  "Rectification de pièces mécaniques (petites et grandes dimensions) et grattage turcite",
  "Vente de pièces détachées : hydrauliques, pneumatiques, électroniques, électriques, mécaniques…",
];

const EQUIPE = [
  "7 techniciens d'interventions et d'atelier",
  "1 responsable d'atelier broches",
  "1 technicien logistique et gestion des pièces détachées",
  "3 chargés d'affaires, devis et hotline",
];

const STATS = [
  { icon: Phone, value: 'Gratuite', label: 'Hotline clients, assistance téléphonique' },
  { icon: Package, value: '100 000', label: 'références pièces détachées, dont 12 000 en stock' },
  { icon: Factory, value: '1 600 m²', label: "d'atelier : salle climatisée, bancs d'essais, broches et tourelles" },
];

const ErnaultServicesPageClient = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/services" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Nos services
          </Link>
          <div className="bg-white rounded-2xl px-6 py-4 inline-block mb-6 shadow-xl">
            <img src="/images/ernault-services-logo.png" alt="Ernault Services" className="h-12 w-auto object-contain" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ernault Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Le SAV exclusif du réseau Arcane Group, héritier de la maison Ernault. Une expertise machines-outils au
            service de votre production depuis plus d'un siècle.
          </p>
        </div>
      </section>

      {/* Héritage - timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#ef6110] uppercase tracking-wide">Notre héritage</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">De l'époque Ernault à aujourd'hui</h2>
            <p className="text-gray-700 leading-relaxed mb-10">
              Notre société fait partie de l'histoire de l'industrialisation française. À votre écoute depuis 1892, la
              maison Ernault incarne l'excellence en machines-outils depuis plus d'un siècle.
            </p>

            <div className="relative border-l-2 border-gray-200 pl-8 space-y-8">
              {TIMELINE.map((m, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-[#ef6110] ring-4 ring-white" />
                  <div className="text-lg font-bold text-gray-900">{m.year}</div>
                  <p className="text-gray-700 mt-1">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aujourd'hui - activités */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-sm font-semibold text-[#ef6110] uppercase tracking-wide">Ernault Services aujourd'hui</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Notre savoir-faire</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Devenue le SAV exclusif du groupe, qui distribue plusieurs marques de constructeurs connues et reconnues
              dans l'Hexagone, Ernault Services allie tradition, innovation et service client. Nous gardons de l'illustre
              passé d'Ernault un savoir-faire sur ses machines-outils, et pouvons intervenir sur leur entretien. Notre
              activité est orientée autour de la machine-outil et de sa maintenance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {ACTIVITES.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-[#ef6110] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="py-14 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="text-center">
                  <Icon size={28} className="text-[#ef6110] mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Users size={32} className="text-[#ef6110] mx-auto mb-3" />
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Notre équipe</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {EQUIPE.map((e, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <CheckCircle size={20} className="text-[#ef6110] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Une machine à installer, dépanner ou faire évoluer ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Découvrez nos services ou contactez-nous directement, nos experts vous accompagnent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-white text-[#ef6110] hover:bg-gray-100 font-semibold">
                Voir nos services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErnaultServicesPageClient;
