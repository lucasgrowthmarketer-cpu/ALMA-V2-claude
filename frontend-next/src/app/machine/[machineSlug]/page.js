export const dynamic = "force-dynamic";
import { notFound } from 'next/navigation';
import machinesData from '@/data/machines.json';
import MachinePageClient from '@/components/pages/MachinePageClient';
export function generateStaticParams() {
  return machinesData.map((m) => ({ machineSlug: m.slug }));
}
export async function generateMetadata({ params: p }) {
  const params = await p;
  const machine = machinesData.find(m => m.slug === params.machineSlug);
  if (!machine) return {};
  return { title: `${machine.designation} - ${machine.type}`, alternates: { canonical: `/machine/${params.machineSlug}` } };
}
export default async function MachinePage({ params: p }) {
  const params = await p;
  const machine = machinesData.find(m => m.slug === params.machineSlug);
  if (!machine) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": machine.designation,
    "description": machine.description,
    "brand": { "@type": "Brand", "name": machine.fabricant },
    "category": machine.sous_categorie,
    "image": machine.photo ? `https://www.alma-machines-outils.fr${machine.photo}` : undefined,
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "seller": { "@type": "Organization", "name": "Alma Machines-Outils" }
    }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <MachinePageClient machineSlug={params.machineSlug} />
    </>
  );
}
