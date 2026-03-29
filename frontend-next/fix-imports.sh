#!/bin/bash
# =============================================================
# ALMA Next.js Migration — Run from frontend-next/
# =============================================================
set -e

echo "🔧 Étape 1: Fix imports react-router-dom → Next.js dans tous les composants copiés"

# Fix Link imports: react-router-dom → next/link
# Fix useLocation → usePathname, useNavigate → useRouter
# Fix <Link to= → <Link href=
FILES=$(find src/components -name "*.jsx" -o -name "*.js" | grep -v node_modules)

for f in $FILES; do
  # Replace import statements
  sed -i "s|import { Link } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { Link, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { Link, useNavigate } from 'react-router-dom';|import Link from 'next/link';\nimport { useRouter } from 'next/navigation';|g" "$f"
  sed -i "s|import { Link, useParams } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { Link, useParams, useLocation } from 'react-router-dom';|import Link from 'next/link';\nimport { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { useParams, Link } from 'react-router-dom';|import Link from 'next/link';|g" "$f"
  sed -i "s|import { useLocation } from 'react-router-dom';|import { usePathname } from 'next/navigation';|g" "$f"
  sed -i "s|import { useNavigate } from 'react-router-dom';|import { useRouter } from 'next/navigation';|g" "$f"
  sed -i "s|import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';||g" "$f"
  # Catch any remaining react-router-dom imports
  sed -i "s|from 'react-router-dom'|from 'next/link'|g" "$f"
  
  # Replace <Link to= with <Link href=
  sed -i 's|<Link to=|<Link href=|g' "$f"
  
  # Replace useLocation() with usePathname()
  sed -i 's|const { pathname } = useLocation();|const pathname = usePathname();|g' "$f"
  sed -i 's|const location = useLocation();|const pathname = usePathname();|g' "$f"
  sed -i 's|useLocation()|usePathname()|g' "$f"
  sed -i 's|location\.pathname|pathname|g' "$f"
  
  # Replace useNavigate with useRouter
  sed -i 's|const navigate = useNavigate();|const router = useRouter();|g' "$f"
  sed -i 's|navigate(\(.*\))|router.push(\1)|g' "$f"

  # Add 'use client' at the top if file uses hooks (useState, useEffect, usePathname, useRouter)
  if grep -qE "(useState|useEffect|usePathname|useRouter|onClick|onChange)" "$f"; then
    if ! grep -q "'use client'" "$f"; then
      sed -i '1s/^/'\''use client'\'';\n/' "$f"
    fi
  fi
done

echo "✅ Imports fixés dans $(echo $FILES | wc -w) fichiers"

echo ""
echo "🔧 Étape 2: Fix imports dans les hooks"
# Fix useScrollAnimation if it uses react-router
if [ -f src/hooks/useScrollAnimation.js ]; then
  sed -i "s|from 'react-router-dom'|from 'next/navigation'|g" src/hooks/useScrollAnimation.js
fi

echo "✅ Hooks fixés"

echo ""
echo "🔧 Étape 3: Supprimer le composant SEO.jsx (remplacé par generateMetadata)"
rm -f src/components/SEO.jsx
echo "✅ SEO.jsx supprimé"

echo ""
echo "🔧 Étape 4: Supprimer les appels à <SEO> dans tous les composants"
for f in $(find src/components -name "*.jsx" -o -name "*.js" | grep -v node_modules); do
  sed -i "s|import SEO from '../components/SEO';||g" "$f"
  sed -i "s|import SEO from './SEO';||g" "$f"
  sed -i "s|import SEO from '@/components/SEO';||g" "$f"
  # Remove <SEO ... /> single-line tags
  sed -i '/<SEO/,/\/>/d' "$f"
done
echo "✅ Références SEO supprimées"

echo ""
echo "🔧 Étape 5: Fix components.json path si présent"
if [ -f ../frontend/components.json ]; then
  cp ../frontend/components.json .
fi

echo ""
echo "============================================"
echo "✅ MIGRATION IMPORTS TERMINÉE"
echo "============================================"
echo ""
echo "Prochaine étape: les fichiers page.js sont déjà dans src/app/"
echo "Lance 'npm run build' pour vérifier"
