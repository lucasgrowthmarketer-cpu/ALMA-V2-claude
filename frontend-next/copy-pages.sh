#!/bin/bash
# =============================================================
# Copy old CRA pages as client components into src/components/pages/
# Run from frontend-next/ AFTER fix-imports.sh
# =============================================================
set -e

echo "📄 Copie des pages CRA vers components/pages/"

mkdir -p src/components/pages

# Copy all old pages
cp ../frontend/src/pages/Home.jsx src/components/pages/HomeClient.jsx
cp ../frontend/src/pages/BrandPage.jsx src/components/pages/BrandPageClient.jsx
cp ../frontend/src/pages/MachinePage.jsx src/components/pages/MachinePageClient.jsx
cp ../frontend/src/pages/CategoryPage.jsx src/components/pages/CategoryPageClient.jsx
cp ../frontend/src/pages/VilleSEOPage.jsx src/components/pages/VilleSEOPageClient.jsx
cp ../frontend/src/pages/BrandsPage.jsx src/components/pages/BrandsPageClient.jsx
cp ../frontend/src/pages/ContactPage.jsx src/components/pages/ContactPageClient.jsx
cp ../frontend/src/pages/AboutPage.jsx src/components/pages/AboutPageClient.jsx
cp ../frontend/src/pages/BlogPage.jsx src/components/pages/BlogPageClient.jsx
cp ../frontend/src/pages/BlogArticlePage.jsx src/components/pages/BlogArticlePageClient.jsx
cp ../frontend/src/pages/PartenairesPage.jsx src/components/pages/PartenairesPageClient.jsx
cp ../frontend/src/pages/BrochuresPage.jsx src/components/pages/BrochuresPageClient.jsx
cp ../frontend/src/pages/OccasionPage.jsx src/components/pages/OccasionPageClient.jsx
cp ../frontend/src/pages/MentionsLegalesPage.jsx src/components/pages/MentionsLegalesClient.jsx
cp ../frontend/src/pages/PolitiqueConfidentialitePage.jsx src/components/pages/PolitiqueConfidentialiteClient.jsx
cp ../frontend/src/pages/ArcaneGroupPage.jsx src/components/pages/ArcaneGroupClient.jsx
cp ../frontend/src/pages/NotFoundPage.jsx src/components/pages/NotFoundClient.jsx

echo "✅ Pages copiées"

echo ""
echo "📄 Ajout de 'use client' + fix imports dans les pages copiées"

for f in src/components/pages/*Client*.jsx; do
  # Add 'use client' at top
  if ! grep -q "'use client'" "$f"; then
    sed -i '1s/^/'\''use client'\'';\n/' "$f"
  fi
  
  # Fix react-router-dom imports
  sed -i "s|import { Link } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { Link, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { Link, useNavigate } from 'react-router-dom';|import Link from 'next/link';\nimport { useRouter } from 'next/navigation';|g" "$f"
  sed -i "s|import { useParams, Link } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { Link, useParams } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { Link, useParams, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { useParams, Link, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { useLocation } from 'react-router-dom';|import { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { useNavigate } from 'react-router-dom';|import { useRouter } from 'next/navigation';|g" "$f"
  sed -i "s|from 'react-router-dom'|from 'next/link'|g" "$f"
  
  # Fix <Link to= → <Link href=
  sed -i 's|<Link to=|<Link href=|g' "$f"
  sed -i 's|<Link className=\(.*\) to=|<Link className=\1 href=|g' "$f"

  # Fix useLocation → usePathname
  sed -i 's|const { pathname } = useLocation();|const pathname = usePathname();|g' "$f"
  sed -i 's|const location = useLocation();|const pathname = usePathname();|g' "$f"
  sed -i 's|useLocation()|usePathname()|g' "$f"
  sed -i 's|location\.pathname|pathname|g' "$f"
  
  # Fix useNavigate → useRouter
  sed -i 's|const navigate = useNavigate();|const router = useRouter();|g' "$f"
  sed -i "s|navigate('/|router.push('/|g" "$f"
  sed -i 's|navigate(-1)|router.back()|g' "$f"
  
  # Remove SEO imports and usage
  sed -i "s|import SEO from '../components/SEO';||g" "$f"
  sed -i "s|import SEO from './SEO';||g" "$f"
  sed -i "s|import SEO from '@/components/SEO';||g" "$f"
  # Remove multiline <SEO ... /> blocks
  perl -i -0pe 's/<SEO\s[^>]*\/>//gs' "$f"
  perl -i -0pe 's/<SEO\s[^>]*>[^<]*<\/SEO>//gs' "$f"
  
  # Fix relative imports to use @/ aliases
  sed -i "s|from '../components/|from '@/components/|g" "$f"
  sed -i "s|from '../data/|from '@/data/|g" "$f"
  sed -i "s|from '../hooks/|from '@/hooks/|g" "$f"
  sed -i "s|from '../lib/|from '@/lib/|g" "$f"
  sed -i "s|from './components/|from '@/components/|g" "$f"
  sed -i "s|from './data/|from '@/data/|g" "$f"
done

# For pages that use useParams(), we need to make them accept params as props instead
# BrandPageClient: replace useParams with props
sed -i "s|const { brandSlug } = useParams();|// brandSlug received as prop|g" src/components/pages/BrandPageClient.jsx

# MachinePageClient: replace useParams with props  
sed -i "s|const { machineSlug } = useParams();|// machineSlug received as prop|g" src/components/pages/MachinePageClient.jsx

# CategoryPageClient: replace useParams with props
sed -i "s|const { category } = useParams();|// category received as prop|g" src/components/pages/CategoryPageClient.jsx

# VilleSEOPageClient: replace useParams with props
sed -i "s|const { ville } = useParams();|// ville received as prop|g" src/components/pages/VilleSEOPageClient.jsx

# BlogArticlePageClient: replace useParams with props
sed -i "s|const { slug } = useParams();|// slug received as prop|g" src/components/pages/BlogArticlePageClient.jsx

# Rename default exports to match new names
sed -i 's|^const Home = |const HomeClient = |g' src/components/pages/HomeClient.jsx
sed -i 's|^export default Home;|export default HomeClient;|g' src/components/pages/HomeClient.jsx
sed -i 's|export default Home$|export default HomeClient|g' src/components/pages/HomeClient.jsx

sed -i 's|^const BrandPage = |const BrandPageClient = |g' src/components/pages/BrandPageClient.jsx
sed -i 's|export default BrandPage;|export default BrandPageClient;|g' src/components/pages/BrandPageClient.jsx

sed -i 's|^const MachinePage = |const MachinePageClient = |g' src/components/pages/MachinePageClient.jsx
sed -i 's|export default MachinePage;|export default MachinePageClient;|g' src/components/pages/MachinePageClient.jsx

sed -i 's|^const CategoryPage = |const CategoryPageClient = |g' src/components/pages/CategoryPageClient.jsx
sed -i 's|export default CategoryPage;|export default CategoryPageClient;|g' src/components/pages/CategoryPageClient.jsx

# For dynamic pages, add brandSlug/machineSlug/etc as function parameter
sed -i 's|const BrandPageClient = () => {|const BrandPageClient = ({ brandSlug }) => {|g' src/components/pages/BrandPageClient.jsx
sed -i 's|const MachinePageClient = () => {|const MachinePageClient = ({ machineSlug }) => {|g' src/components/pages/MachinePageClient.jsx
sed -i 's|const CategoryPageClient = () => {|const CategoryPageClient = ({ category }) => {|g' src/components/pages/CategoryPageClient.jsx

echo "✅ Imports fixés dans les pages client"
echo ""
echo "============================================"
echo "✅ PAGES CLIENT PRÊTES"
echo "============================================"
