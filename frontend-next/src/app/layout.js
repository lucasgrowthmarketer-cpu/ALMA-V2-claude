import './globals.css';
import Script from 'next/script';
import HeaderWrapper from '@/components/pages/HeaderWrapper';
import FooterWrapper from '@/components/pages/FooterWrapper';
export const metadata = {
  metadataBase: new URL('https://www.alma-machines-outils.fr'),
  title: {
    default: 'Alma Machines-Outils | Machines industrielles neuves en PACA',
    template: '%s | Alma Machines-Outils',
  },
  description: 'Machines-outils industrielles neuves. 27 marques partenaires en PACA.',
  openGraph: { type: 'website', locale: 'fr_FR', siteName: 'Alma Machines-Outils' },
  robots: { index: true, follow: true },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "name": "Alma Machines-Outils",
  "url": "https://www.alma-machines-outils.fr",
  "logo": "https://www.alma-machines-outils.fr/images/alma-logo.png",
  "description": "Revendeur de machines-outils industrielles neuves en region PACA. 28 constructeurs partenaires.",
  "address": { "@type": "PostalAddress", "streetAddress": "6 Rue d Oran", "addressLocality": "Marseille", "postalCode": "13005", "addressCountry": "FR" },
  "telephone": "+33603315688",
  "email": "jean-baptiste@alma-machines-outils.fr",
  "areaServed": ["FR-04","FR-05","FR-06","FR-13","FR-30","FR-34","FR-83","FR-84"],
  "sameAs": ["https://www.linkedin.com/company/alma-machines-outils"]
};
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans">
        <div className="App">
          <div className="flex flex-col min-h-screen">
            <HeaderWrapper />
            <main className="flex-grow">{children}</main>
            <FooterWrapper />
          </div>
        </div>
      </body>
    </html>
  );
}
