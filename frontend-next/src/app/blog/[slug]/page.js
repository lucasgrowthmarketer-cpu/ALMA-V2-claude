export const dynamic = "force-dynamic";
import BlogArticlePageClient from '@/components/pages/BlogArticlePageClient';

export async function generateMetadata({ params: paramsPromise }) {
  const params = await paramsPromise;
  return {
    title: params.slug.replace(/-/g, ' '),
    alternates: { canonical: `/blog/${params.slug}` },
  };
}

export default async function BlogArticlePage({ params: paramsPromise }) {
  const params = await paramsPromise;
  return <BlogArticlePageClient slug={params.slug} />;
}
