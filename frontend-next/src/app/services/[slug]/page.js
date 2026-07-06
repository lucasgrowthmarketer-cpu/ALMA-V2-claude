export const dynamic = "force-dynamic";
import { notFound } from 'next/navigation';
import { services, getService } from '@/data/services';
import ServiceDetailPageClient from '@/components/pages/ServiceDetailPageClient';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params: p }) {
  const params = await p;
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | Services ALMA`,
    description: service.excerpt,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params: p }) {
  const params = await p;
  const service = getService(params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.excerpt,
    "provider": { "@type": "Organization", "name": "Ernault Services", "parentOrganization": "Arcane Group" },
    "areaServed": "FR",
    "brand": { "@type": "Brand", "name": "Alma Machines-Outils" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ServiceDetailPageClient service={service} />
    </>
  );
}
