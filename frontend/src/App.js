import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Pages
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import BrandsPage from "./pages/BrandsPage";
import BrandPage from "./pages/BrandPage";
import MachinePage from "./pages/MachinePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PartenairesPage from "./pages/PartenairesPage";
import BrochuresPage from "./pages/BrochuresPage";

import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialitePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gamme/:category" element={<CategoryPage />} />
              <Route path="/marques" element={<BrandsPage />} />
              <Route path="/marque/:brandSlug" element={<BrandPage />} />
              <Route path="/machine/:machineSlug" element={<MachinePage />} />
              <Route path="/partenaires" element={<PartenairesPage />} />
              <Route path="/brochures" element={<BrochuresPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
              <Route path="*" element={
                <div className="container mx-auto px-4 py-12 text-center">
                  <h1 className="text-4xl font-bold mb-4">Page non trouvée</h1>
                  <p className="text-gray-600 mb-6">La page que vous recherchez n'existe pas.</p>
                  <a href="/" className="text-primary hover:underline">Retour à l'accueil</a>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
