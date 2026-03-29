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
  return <MachinePageClient machineSlug={params.machineSlug} />;
}
