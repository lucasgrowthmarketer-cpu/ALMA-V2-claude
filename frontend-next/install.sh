#!/bin/bash
# =============================================================
# ALMA Next.js Migration — MASTER SCRIPT
# Run from: /workspaces/ALMA-V2-claude/frontend-next/
# =============================================================
set -e

echo ""
echo "============================================"
echo "  ALMA MIGRATION CRA → NEXT.JS SSG"
echo "============================================"
echo ""

# Check we're in the right directory
if [ ! -f package.json ] || ! grep -q '"next"' package.json; then
  echo "❌ ERREUR: Lance ce script depuis frontend-next/"
  echo "   cd /workspaces/ALMA-V2-claude/frontend-next"
  exit 1
fi

echo "📦 Étape 1/5: Copie des pages CRA comme client components"
echo "---"
mkdir -p src/components/pages

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

echo "✅ 17 pages copiées"

echo ""
echo "🔧 Étape 2/5: Fix imports react-router-dom → Next.js"
echo "---"

# Process ALL jsx/js files in src/components/
ALL_FILES=$(find src/components -name "*.jsx" -o -name "*.js" | grep -v node_modules)

for f in $ALL_FILES; do
  # ---- REACT-ROUTER-DOM IMPORTS → NEXT.JS ----
  # Multi-import patterns (most specific first)
  sed -i "s|import { useParams, Link, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { Link, useParams, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { Link, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { Link, useNavigate } from 'react-router-dom';|import Link from 'next/link';\nimport { useRouter } from 'next/navigation';|g" "$f"
  sed -i "s|import { Link, useParams } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { useParams, Link } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { Link } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { useLocation } from 'react-router-dom';|import { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { useNavigate } from 'react-router-dom';|import { useRouter } from 'next/navigation';|g" "$f"
  sed -i "s|import { useParams } from 'react-router-dom';||g" "$f"
  # Catch anything remaining
  sed -i "s|from 'react-router-dom'|from 'next/link'|g" "$f"

  # ---- LINK: to= → href= ----
  sed -i 's|<Link to=|<Link href=|g' "$f"
  sed -i 's|<Link className=\(.*\) to=|<Link className=\1 href=|g' "$f"

  # ---- useLocation → usePathname ----
  sed -i 's|const { pathname } = useLocation();|const pathname = usePathname();|g' "$f"
  sed -i 's|const location = useLocation();|const pathname = usePathname();|g' "$f"
  sed -i 's|useLocation()|usePathname()|g' "$f"
  sed -i 's|location\.pathname|pathname|g' "$f"

  # ---- useNavigate → useRouter ----
  sed -i 's|const navigate = useNavigate();|const router = useRouter();|g' "$f"
  sed -i "s|navigate('/|router.push('/|g" "$f"
  sed -i 's|navigate(-1)|router.back()|g' "$f"

  # ---- Remove SEO component ----
  sed -i "s|import SEO from '../components/SEO';||g" "$f"
  sed -i "s|import SEO from './SEO';||g" "$f"
  sed -i "s|import SEO from '@/components/SEO';||g" "$f"

  # ---- Fix relative imports → @/ aliases ----
  sed -i "s|from '../components/|from '@/components/|g" "$f"
  sed -i "s|from '../data/|from '@/data/|g" "$f"
  sed -i "s|from '../hooks/|from '@/hooks/|g" "$f"
  sed -i "s|from '../lib/|from '@/lib/|g" "$f"
  sed -i "s|from './components/|from '@/components/|g" "$f"
  sed -i "s|from './data/|from '@/data/|g" "$f"
  sed -i "s|from './hooks/|from '@/hooks/|g" "$f"

  # ---- Add 'use client' if file uses client-side features ----
  if grep -qE "(useState|useEffect|usePathname|useRouter|useRef|onClick|onChange)" "$f"; then
    if ! grep -q "'use client'" "$f"; then
      sed -i '1s/^/'\''use client'\'';\n/' "$f"
    fi
  fi
done

# Remove <SEO ... /> tags (multiline)
for f in src/components/pages/*Client*.jsx; do
  perl -i -0pe 's/\s*<SEO\s[^\/]*\/>\s*//gs' "$f" 2>/dev/null || true
  perl -i -0pe 's/\s*<SEO\s[^>]*>[^<]*<\/SEO>\s*//gs' "$f" 2>/dev/null || true
done

# Remove the old SEO.jsx component
rm -f src/components/SEO.jsx

echo "✅ Imports fixés dans $(echo $ALL_FILES | wc -w) fichiers"

echo ""
echo "🔧 Étape 3/5: Adapter les pages dynamiques (useParams → props)"
echo "---"

# BrandPageClient: useParams → prop
sed -i "s|const { brandSlug } = useParams();|// brandSlug received via props|g" src/components/pages/BrandPageClient.jsx
# Change function signature to accept prop
sed -i 's|const BrandPage = () => {|const BrandPageClient = ({ brandSlug }) => {|g' src/components/pages/BrandPageClient.jsx
sed -i 's|const BrandPage = (.*) => {|const BrandPageClient = ({ brandSlug }) => {|g' src/components/pages/BrandPageClient.jsx
sed -i 's|export default BrandPage|export default BrandPageClient|g' src/components/pages/BrandPageClient.jsx

# MachinePageClient
sed -i "s|const { machineSlug } = useParams();|// machineSlug received via props|g" src/components/pages/MachinePageClient.jsx
sed -i 's|const MachinePage = () => {|const MachinePageClient = ({ machineSlug }) => {|g' src/components/pages/MachinePageClient.jsx
sed -i 's|const MachinePage = (.*) => {|const MachinePageClient = ({ machineSlug }) => {|g' src/components/pages/MachinePageClient.jsx
sed -i 's|export default MachinePage|export default MachinePageClient|g' src/components/pages/MachinePageClient.jsx

# CategoryPageClient
sed -i "s|const { category } = useParams();|// category received via props|g" src/components/pages/CategoryPageClient.jsx
sed -i 's|const CategoryPage = () => {|const CategoryPageClient = ({ category }) => {|g' src/components/pages/CategoryPageClient.jsx
sed -i 's|const CategoryPage = (.*) => {|const CategoryPageClient = ({ category }) => {|g' src/components/pages/CategoryPageClient.jsx
sed -i 's|export default CategoryPage|export default CategoryPageClient|g' src/components/pages/CategoryPageClient.jsx

# VilleSEOPageClient
sed -i "s|const { ville } = useParams();|// ville received via props|g" src/components/pages/VilleSEOPageClient.jsx
sed -i 's|const VilleSEOPage = () => {|const VilleSEOPageClient = ({ ville }) => {|g' src/components/pages/VilleSEOPageClient.jsx
sed -i 's|export default VilleSEOPage|export default VilleSEOPageClient|g' src/components/pages/VilleSEOPageClient.jsx

# BlogArticlePageClient
sed -i "s|const { slug } = useParams();|// slug received via props|g" src/components/pages/BlogArticlePageClient.jsx
sed -i 's|const BlogArticlePage = () => {|const BlogArticlePageClient = ({ slug }) => {|g' src/components/pages/BlogArticlePageClient.jsx
sed -i 's|export default BlogArticlePage|export default BlogArticlePageClient|g' src/components/pages/BlogArticlePageClient.jsx

# Static pages — just rename exports
sed -i 's|const Home = |const HomeClient = |g' src/components/pages/HomeClient.jsx
sed -i 's|export default Home;|export default HomeClient;|g' src/components/pages/HomeClient.jsx
sed -i 's|export default Home$|export default HomeClient|g' src/components/pages/HomeClient.jsx

sed -i 's|const BrandsPage = |const BrandsPageClient = |g' src/components/pages/BrandsPageClient.jsx
sed -i 's|export default BrandsPage|export default BrandsPageClient|g' src/components/pages/BrandsPageClient.jsx

sed -i 's|const ContactPage = |const ContactPageClient = |g' src/components/pages/ContactPageClient.jsx
sed -i 's|export default ContactPage|export default ContactPageClient|g' src/components/pages/ContactPageClient.jsx

sed -i 's|const AboutPage = |const AboutPageClient = |g' src/components/pages/AboutPageClient.jsx
sed -i 's|export default AboutPage|export default AboutPageClient|g' src/components/pages/AboutPageClient.jsx

sed -i 's|const BlogPage = |const BlogPageClient = |g' src/components/pages/BlogPageClient.jsx
sed -i 's|export default BlogPage|export default BlogPageClient|g' src/components/pages/BlogPageClient.jsx

sed -i 's|const PartenairesPage = |const PartenairesPageClient = |g' src/components/pages/PartenairesPageClient.jsx
sed -i 's|export default PartenairesPage|export default PartenairesPageClient|g' src/components/pages/PartenairesPageClient.jsx

sed -i 's|const BrochuresPage = |const BrochuresPageClient = |g' src/components/pages/BrochuresPageClient.jsx
sed -i 's|export default BrochuresPage|export default BrochuresPageClient|g' src/components/pages/BrochuresPageClient.jsx

sed -i 's|const OccasionPage = |const OccasionPageClient = |g' src/components/pages/OccasionPageClient.jsx
sed -i 's|export default OccasionPage|export default OccasionPageClient|g' src/components/pages/OccasionPageClient.jsx

sed -i 's|const MentionsLegalesPage = |const MentionsLegalesClient = |g' src/components/pages/MentionsLegalesClient.jsx
sed -i 's|export default MentionsLegalesPage|export default MentionsLegalesClient|g' src/components/pages/MentionsLegalesClient.jsx

sed -i 's|const PolitiqueConfidentialitePage = |const PolitiqueConfidentialiteClient = |g' src/components/pages/PolitiqueConfidentialiteClient.jsx
sed -i 's|export default PolitiqueConfidentialitePage|export default PolitiqueConfidentialiteClient|g' src/components/pages/PolitiqueConfidentialiteClient.jsx

sed -i 's|const ArcaneGroupPage = |const ArcaneGroupClient = |g' src/components/pages/ArcaneGroupClient.jsx
sed -i 's|export default ArcaneGroupPage|export default ArcaneGroupClient|g' src/components/pages/ArcaneGroupClient.jsx

sed -i 's|const NotFoundPage = |const NotFoundClient = |g' src/components/pages/NotFoundClient.jsx
sed -i 's|export default NotFoundPage|export default NotFoundClient|g' src/components/pages/NotFoundClient.jsx

echo "✅ Pages dynamiques adaptées"

echo ""
echo "🔧 Étape 4/5: Fix hooks"
echo "---"
if [ -f src/hooks/useScrollAnimation.js ]; then
  sed -i "s|from 'react-router-dom'|from 'next/navigation'|g" src/hooks/useScrollAnimation.js
fi

# Copy components.json if exists
[ -f ../frontend/components.json ] && cp ../frontend/components.json .

echo "✅ Hooks fixés"

echo ""
echo "🔧 Étape 5/5: Suppression du vieux sitemap statique"
echo "---"
rm -f public/sitemap.xml
echo "✅ sitemap.xml statique supprimé (remplacé par sitemap.js dynamique)"

echo ""
echo "============================================"
echo "✅ MIGRATION TERMINÉE"
echo "============================================"
echo ""
echo "Prochaine étape: npm run build"
echo "Si erreurs, corrige-les une par une et relance build."
echo ""
echo "Vérification rapide:"
echo "  - ls src/app/*/page.js        → tous les page.js"
echo "  - ls src/components/pages/     → tous les client components"
echo "  - cat public/robots.txt        → robots.txt"
echo "  - cat public/llms.txt          → llms.txt"
echo ""
