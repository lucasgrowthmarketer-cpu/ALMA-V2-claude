export const dynamic = "force-dynamic";
import { notFound } from 'next/navigation';
import { installations, getInstallation } from '@/data/installations';
import InstallationDetailPageClient from '@/components/pages/InstallationDetailPageClient';

const BASE = 'https://www.alma-machines-outils.fr';

export function generateStaticParams() {
  return installations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params: p }) {
  const params = await p;
  const inst = getInstallation(params.slug);
  if (!inst) return {};
  const image = inst.photos?.[0]?.src;
  return {
    title: [inst.titre, [inst.client, inst.ville].filter(Boolean).join(', ')].filter(Boolean).join(' · '),
    description: inst.accroche,
    alternates: { canonical: `/installations/${inst.slug}` },
    openGraph: {
      title: inst.titre,
      description: inst.accroche,
      url: `${BASE}/installations/${inst.slug}`,
      type: 'article',
      ...(image ? { images: [{ url: `${BASE}${image}` }] } : {}),
    },
  };
}

export default async function InstallationDetailPage({ params: p }) {
  const params = await p;
  const inst = getInstallation(params.slug);
  if (!inst) notFound();

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: inst.titre,
      description: inst.accroche,
      image: (inst.photos || []).map((ph) => `${BASE}${ph.src}`),
      ...(inst.client
        ? { about: { '@type': 'Organization', name: inst.client, address: { '@type': 'PostalAddress', addressLocality: inst.ville, addressRegion: inst.region, addressCountry: 'FR' } } }
        : {}),
      author: { '@type': 'Organization', name: 'ALMA Machines-Outils', url: BASE },
      publisher: { '@type': 'Organization', name: 'ALMA Machines-Outils', url: BASE },
      mainEntityOfPage: `${BASE}/installations/${inst.slug}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${BASE}/` },
        { '@type': 'ListItem', position: 2, name: 'Installations récentes', item: `${BASE}/installations` },
        { '@type': 'ListItem', position: 3, name: inst.titre, item: `${BASE}/installations/${inst.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InstallationDetailPageClient installation={inst} />
    </>
  );
}
