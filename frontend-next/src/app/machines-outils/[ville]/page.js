export const dynamic = "force-dynamic";
import { notFound } from 'next/navigation';
import VilleSEOPageClient from '@/components/pages/VilleSEOPageClient';
const cities = {
  'marseille': { nom: 'Marseille', region: '13' },
  'toulon': { nom: 'Toulon', region: '83' },
  'nice': { nom: 'Nice', region: '06' },
  'aix-en-provence': { nom: 'Aix-en-Provence', region: '13' },
  'montpellier': { nom: 'Montpellier', region: '34' },
  'avignon': { nom: 'Avignon', region: '84' },
  'nimes': { nom: 'Nimes', region: '30' },
  'gap': { nom: 'Gap', region: '05' },
  'digne-les-bains': { nom: 'Digne-les-Bains', region: '04' },
  'cannes': { nom: 'Cannes', region: '06' },
};
export function generateStaticParams() {
  return Object.keys(cities).map((v) => ({ ville: v }));
}
export async function generateMetadata({ params: p }) {
  const params = await p;
  const city = cities[params.ville];
  if (!city) return {};
  return { title: `Machines-outils ${city.nom} (${city.region})`, alternates: { canonical: `/machines-outils/${params.ville}` } };
}
export default async function VilleSEOPage({ params: p }) {
  const params = await p;
  if (!cities[params.ville]) notFound();
  return <VilleSEOPageClient ville={params.ville} />;
}
