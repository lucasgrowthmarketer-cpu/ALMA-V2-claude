export const dynamic = "force-dynamic";
import ServicesPageClient from '@/components/pages/ServicesPageClient';

export const metadata = {
  title: 'Nos Services : installation, maintenance, hotline, options, financement',
  description:
    "Installation et intervention sur site, hotline clients et formations, options et optimisations machines, financement. Le service ALMA assuré par Ernault Services (réseau Arcane Group).",
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
