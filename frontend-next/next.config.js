/** @type {import('next').NextConfig} */
const BACKEND_URL = process.env.BACKEND_URL || 'https://alma-v2-claude-production-a977.up.railway.app';

const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      // Proxifie les appels API du site vers le backend FastAPI (same-origin, pas de CORS)
      { source: '/api/:path*', destination: `${BACKEND_URL}/api/:path*` },
    ];
  },
  async redirects() {
    return [
      { source: '/gamme-usinage', destination: '/gamme/usinage', permanent: true },
      { source: '/gamme-chaudronnerie', destination: '/gamme/chaudronnerie', permanent: true },
      { source: '/gamme-tolerie', destination: '/gamme/tolerie', permanent: true },
      { source: '/gamme-menuiserie', destination: '/gamme/menuiserie', permanent: true },
      { source: '/a-propos-de', destination: '/a-propos', permanent: true },
      { source: '/a-propos-de/', destination: '/a-propos', permanent: true },
      { source: '/ci-dessous-la-brochure-generale', destination: '/brochures', permanent: true },
      { source: '/ci-dessous-la-brochure-generale/', destination: '/brochures', permanent: true },
      { source: '/brochure', destination: '/brochures', permanent: true },
      { source: '/brochure/', destination: '/brochures', permanent: true },
      { source: '/contactez-nous', destination: '/contact', permanent: true },
      { source: '/contactez-nous/', destination: '/contact', permanent: true },
      { source: '/contact-2', destination: '/contact', permanent: true },
      { source: '/nos-partenaires', destination: '/partenaires', permanent: true },
      { source: '/nos-partenaires/', destination: '/partenaires', permanent: true },
      { source: '/accueil', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/feed/', destination: '/blog', permanent: true },
      { source: '/wp-sitemap.xml', destination: '/sitemap.xml', permanent: true },
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },
    ];
  },
};

module.exports = nextConfig;
