import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig, mainCategories } from '@/data/machinesData';

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
            <div className="flex gap-3 mt-4">
              <a 
                href={siteConfig.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 sm:p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                
              </a>
              <a 
                href={siteConfig.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 sm:p-2 bg-gray-800 hover:bg-primary rounded-full transition-colors"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
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
              © {currentYear} {siteConfig.nom}. Tous droits réservés.
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
