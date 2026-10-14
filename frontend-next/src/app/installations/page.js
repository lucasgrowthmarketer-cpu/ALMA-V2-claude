export const dynamic = "force-dynamic";
import InstallationsPageClient from '@/components/pages/InstallationsPageClient';

export const metadata = {
  title: 'Installations récentes : machines-outils installées en PACA et Languedoc',
  description:
    "Projets livrés par ALMA Machines-Outils : le besoin de départ, la machine choisie, la mise en service. Ce que nous avons installé, ce que nous pouvons faire chez vous.",
  alternates: { canonical: '/installations' },
};

export default function InstallationsPage() {
  return <InstallationsPageClient />;
}
