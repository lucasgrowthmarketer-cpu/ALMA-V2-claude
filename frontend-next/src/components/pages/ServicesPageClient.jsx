'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Wrench, LifeBuoy, Puzzle, Banknote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/services';

const ICONS = { Wrench, LifeBuoy, Puzzle, Banknote };

const ServicesPageClient = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/services/services-hero.webp)' }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative">
          <Link href="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Au-delà de la vente, nous accompagnons vos machines-outils tout au long de leur vie : installation,
            maintenance, hotline, options et financement. Un service assuré par Ernault Services, le SAV du réseau
            Arcane Group.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => {
              const Icon = ICONS[service.icon];
              return (
                <Link key={service.slug} href={'/services/' + service.slug}>
                  <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={service.heroImage}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-4 flex items-center gap-2">
                        {Icon && (
                          <span className="bg-[#ef6110] text-white p-2 rounded-lg">
                            <Icon size={20} />
                          </span>
                        )}
                        <h2 className="text-white text-lg font-bold drop-shadow">{service.menuLabel}</h2>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col h-[calc(100%-10rem)]">
                      <p className="text-gray-700 text-sm mb-6 flex-1">{service.excerpt}</p>
                      <div className="flex items-center text-[#ef6110] text-sm font-semibold">
                        <span>En savoir plus</span>
                        <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ernault Services band */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="container mx-auto px-4">
          <Link
            href="/ernault-services"
            className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-3xl mx-auto group text-center sm:text-left"
          >
            <img
              src="/images/ernault-services-logo.png"
              alt="Ernault Services"
              className="h-12 w-auto object-contain flex-shrink-0"
            />
            <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              Nos services sont assurés par <span className="font-semibold text-gray-900">Ernault Services</span>, le SAV
              exclusif du réseau Arcane Group, héritier de la maison Ernault depuis 1892.
              <span className="text-[#ef6110] font-medium"> Découvrir Ernault Services →</span>
            </p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#ef6110] to-[#d45510] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Un besoin de service ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Installation, panne, option ou financement : nos experts vous répondent et vous accompagnent.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-[#ef6110] hover:bg-gray-100 font-semibold">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPageClient;
