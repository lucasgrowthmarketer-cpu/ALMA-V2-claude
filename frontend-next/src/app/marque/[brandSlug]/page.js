export const dynamic = "force-dynamic";
import { notFound } from 'next/navigation';
import brandsSimple from '@/data/brands_simple.json';
import BrandPageClient from '@/components/pages/BrandPageClient';
import fs from 'fs';
import path from 'path';
function getDesc() {
  const f = path.join(process.cwd(), 'public', 'brandDescriptions.json');
  return JSON.parse(fs.readFileSync(f, 'utf8'));
}
export function generateStaticParams() {
  return brandsSimple.map((b) => ({ brandSlug: b.slug }));
}
export async function generateMetadata({ params: p }) {
  const params = await p;
  const brand = brandsSimple.find(b => b.slug === params.brandSlug);
  if (!brand) return {};
  const d = getDesc()[params.brandSlug];
  return { title: d?.metaTitle || `Machines ${brand.nom}`, alternates: { canonical: `/marque/${params.brandSlug}` } };
}
export default async function BrandPage({ params: p }) {
  const params = await p;
  const brand = brandsSimple.find(b => b.slug === params.brandSlug);
  if (!brand) notFound();
  const d = getDesc()[params.brandSlug];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": brand.nom,
    "description": d?.fullDescription || brand.description,
    "url": `https://www.alma-machines-outils.fr/marque/${brand.slug}`,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BrandPageClient brandSlug={params.brandSlug} />
    </>
  );
}
