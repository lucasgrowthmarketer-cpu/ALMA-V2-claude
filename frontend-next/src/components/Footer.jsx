import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig, mainCategories } from '@/data/machinesData';
import { services } from '@/data/services';

// Liens sociaux / contact du footer
const SOCIAL_LINKS = [
  {
    label: 'Fiche Google',
    href: 'https://share.google/hXEfQhul6ZRADjCFx',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M21.35 11.1H12v2.9h5.35c-.5 2.5-2.6 4.3-5.35 4.3a5.8 5.8 0 1 1 0-11.6c1.48 0 2.82.55 3.86 1.45l2.16-2.16A8.9 8.9 0 0 0 12 3.1a8.9 8.9 0 1 0 0 17.8c5.14 0 8.55-3.61 8.55-8.7 0-.38-.07-.75-.2-1.1z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/alma-machines-outils/posts/?feedView=all',
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: 'Téléphone',
    href: 'tel:+33603315688',
    external: false,
    icon: <Phone size={18} />,
  },
  {
    label: 'Email',
    href: 'mailto:jean-baptiste@alma-machines-outils.fr',
    external: false,
    icon: <Mail size={18} />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8">
          {/* Company Info - Full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <img 
              src="/images/alma-logo-white.png" 
              alt="Alma Machines-Outils" 
              className="h-7 sm:h-8 w-auto object-contain mb-4 opacity-90"
            />
            <p className="text-xs sm:text-sm mb-4 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-3 mt-4 flex-wrap">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={s.label}
                  title={s.label}
                  className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-gray-700 bg-gray-800 text-gray-300 hover:text-white hover:border-primary hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Gammes */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Nos Gammes</h3>
            <ul className="space-y-2 sm:space-y-2">
              {mainCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    href={'/gamme/' + cat.slug}
                    className="text-xs sm:text-sm hover:text-primary transition-colors block py-1"
                  >
                    {cat.nom}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3 mt-6">Nos régions</h3>
            <ul className="space-y-1">
              {[
                {slug: 'marseille', nom: 'Marseille'},
                {slug: 'toulon', nom: 'Toulon'},
                {slug: 'nice', nom: 'Nice'},
                {slug: 'aix-en-provence', nom: 'Aix-en-Provence'},
                {slug: 'montpellier', nom: 'Montpellier'},
                {slug: 'nimes', nom: 'Nîmes'},
              ].map(city => (
                <li key={city.slug}>
                  <Link href={'/machines-outils/' + city.slug} className="text-xs hover:text-primary transition-colors block py-0.5">
                    {city.nom}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-2 sm:space-y-2">
              <li>
                <Link href="/" className="text-xs sm:text-sm hover:text-primary transition-colors block py-1">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/marques" className="text-xs sm:text-sm hover:text-primary transition-colors block py-1">
                  Marques
                </Link>
              </li>
              <li>
                <Link href="/partenaires" className="text-xs sm:text-sm hover:text-primary transition-colors block py-1">
                  Nos Partenaires
                </Link>
              </li>
              <li>
                <Link href="/occasion" className="text-xs sm:text-sm hover:text-primary transition-colors block py-1">
                  Occasion
                </Link>
              </li>
              <li>
                <Link href="/brochures" className="text-xs sm:text-sm hover:text-primary transition-colors block py-1">
                  Nos Brochures
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-xs sm:text-sm hover:text-primary transition-colors block py-1">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-xs sm:text-sm hover:text-primary transition-colors block py-1">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs sm:text-sm hover:text-primary transition-colors block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/arcane-group" className="text-xs sm:text-sm hover:text-primary transition-colors block py-1">
                  Arcane Group
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold text-base sm:text-lg mb-2 sm:mb-3 mt-6">Nos Services</h3>
            <ul className="space-y-1">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={'/services/' + s.slug} className="text-xs hover:text-primary transition-colors block py-0.5">
                    {s.menuLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/ernault-services" className="text-xs hover:text-primary transition-colors block py-0.5">
                  Ernault Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Full width on small mobile */}
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>{siteConfig.adresse}</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a 
                  href={'mailto:' + siteConfig.email}
                  className="hover:text-primary transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a 
                  href={siteConfig.whatsappLink}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Ernault Services */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link href="/ernault-services" className="flex flex-col sm:flex-row items-center justify-center gap-4 group">
            <img 
              src="/images/ernault-services-logo.png" 
              alt="Ernault Services" 
              className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg px-3 py-1.5"
            />
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">
                <span className="text-white font-semibold">ERNAULT SERVICES</span>, le SAV machines-outils du réseau Arcane Group. Installation, maintenance, options et pièces détachées, héritier de la maison Ernault depuis 1892.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Arcane Group */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <Link href="/arcane-group" className="flex flex-col sm:flex-row items-center justify-center gap-4 group">
            <img 
              src="/images/arcane-group-logo.webp" 
              alt="Arcane Group" 
              className="h-10 sm:h-12 w-auto object-contain bg-white rounded-lg px-3 py-1.5"
            />
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">
                Membre du réseau <span className="text-white font-semibold">ARCANE GROUP</span> — La force d'un réseau national de machines-outils
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <p className="text-center sm:text-left">
              © {currentYear} {siteConfig.nom}. Tous droits réservés. · Site conçu par{' '}
              <a
                href="https://www.industrialdecision.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary underline underline-offset-2 transition-colors"
              >
                Industrial Decision
              </a>
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions Légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Safe area padding for iOS */}
      <div className="pb-safe bg-gray-900"></div>
    </footer>
  );
};

export default Footer;
