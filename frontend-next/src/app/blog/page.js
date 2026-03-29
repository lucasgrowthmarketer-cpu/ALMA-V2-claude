export const dynamic = "force-dynamic";
import BlogPageClient from '@/components/pages/BlogPageClient';
export const metadata = { title: 'Blog — Actualités machines-outils', description: 'Actualités, guides et conseils sur les machines-outils industrielles en PACA.', alternates: { canonical: '/blog' } };
export default function BlogPage() { return <BlogPageClient />; }
