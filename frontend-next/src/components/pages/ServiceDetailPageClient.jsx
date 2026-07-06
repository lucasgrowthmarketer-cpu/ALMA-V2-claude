'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Wrench, LifeBuoy, Puzzle, Banknote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ICONS = { Wrench, LifeBuoy, Puzzle, Banknote };

const ServiceDetailPageClient = ({ service }) => {
  if (!service) return null;
  const Icon = ICONS[service.icon];
  const ctaHref = service.externalUrl || '/contact';
  const ctaExternal = Boolean(service.externalUrl);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative">
          <Link href="/services" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" /> Tous nos services
          </Link>
          <div className="flex items-center gap-3 mb-4">
            {Icon && (
              <span className="bg-[#ef6110] text-white p-2.5 rounded-xl">
                <Icon size={26} />
              </span>
            )}
            <h1 className="text-3xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl">{service.tagline}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            {service.intro?.map((p, i) => (
              <p key={i} className="text-lg text-gray-700 leading-relaxed mb-6">{p}</p>
            ))}

            {/* Sections */}
            {service.sections?.map((section, i) => (
              <div key={i} className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                  {section.title}
                </h2>
                {section.text?.map((p, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                ))}
                {section.items && (
                  <ul className="space-y-3 mt-4">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-[#ef6110] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* CTA */}
            <div className="mt-14 bg-white rounded-2xl border-2 border-[#ef6110]/20 p-8 text-center shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.ctaLabel}</h2>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Nos experts étudient votre besoin et vous accompagnent, du diagnostic à la mise en route.
              </p>
              {ctaExternal ? (
                <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8 py-3 rounded-full">
                    {service.ctaLabel}
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>
              ) : (
                <Link href={ctaHref}>
                  <Button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold px-8 py-3 rounded-full">
                    {service.ctaLabel}
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ernault Services band */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <Link
            href="/ernault-services"
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto group text-center sm:text-left"
          >
            <img
              src="/images/ernault-services-logo.png"
              alt="Ernault Services"
              className="h-10 w-auto object-contain flex-shrink-0"
            />
            <p className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
              Service assuré par <span className="font-semibold text-gray-900">Ernault Services</span> · réseau Arcane
              Group. <span className="text-[#ef6110] font-medium">En savoir plus →</span>
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPageClient;
