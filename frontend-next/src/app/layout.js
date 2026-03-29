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
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
