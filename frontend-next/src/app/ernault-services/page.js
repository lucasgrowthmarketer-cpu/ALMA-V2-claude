export const dynamic = "force-dynamic";
import ErnaultServicesPageClient from '@/components/pages/ErnaultServicesPageClient';

export const metadata = {
  title: 'Ernault Services : le SAV machines-outils du réseau Arcane Group',
  description:
    "Héritier de la maison Ernault (depuis 1892), Ernault Services est le SAV exclusif du réseau Arcane Group : installation, réparation, intervention sur site, options, robotisation et pièces détachées.",
  alternates: { canonical: '/ernault-services' },
};

export default function ErnaultServicesPage() {
  return <ErnaultServicesPageClient />;
}
