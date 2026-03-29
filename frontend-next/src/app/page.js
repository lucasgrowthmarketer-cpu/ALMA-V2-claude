export const dynamic = "force-dynamic";
import HomeClient from '@/components/pages/HomeClient';

export const metadata = {
  title: 'Machines industrielles neuves en PACA',
  description: 'Alma Machines-Outils, spécialiste en machines-outils industrielles neuves. Tournage, fraisage, rectification, chaudronnerie. 27 constructeurs partenaires en région PACA.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return <HomeClient />;
}
