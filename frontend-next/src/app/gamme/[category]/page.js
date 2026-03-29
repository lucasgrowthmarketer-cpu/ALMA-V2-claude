export const dynamic = "force-dynamic";
import { notFound } from 'next/navigation';
import categoriesData from '@/data/categories.json';
import CategoryPageClient from '@/components/pages/CategoryPageClient';
export function generateStaticParams() {
  return Object.keys(categoriesData).map((cat) => ({ category: cat }));
}
export async function generateMetadata({ params: p }) {
  const params = await p;
  return { title: `Gamme ${params.category}`, alternates: { canonical: `/gamme/${params.category}` } };
}
export default async function GammePage({ params: p }) {
  const params = await p;
  if (!categoriesData[params.category]) notFound();
  return <CategoryPageClient category={params.category} />;
}
