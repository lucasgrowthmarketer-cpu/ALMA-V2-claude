import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Phone, Mail, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { siteConfig, mainCategories, machinesData } from '../data/machinesData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isGammesOpen, setIsGammesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsGammesOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleGammes = () => setIsGammesOpen(!isGammesOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate('/machine/' + searchResults[0].slug);
      setIsSearchOpen(false);
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  // Live search on query change
  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      return;
    }
    const q = searchQuery.toLowerCase();
    const results = machinesData.filter(m =>
      (m.designation && m.designation.toLowerCase().includes(q)) ||
      (m.fabricant && m.fabricant.toLowerCase().includes(q)) ||
      (m.categorie && m.categorie.toLowerCase().includes(q)) ||
      (m.sous_categorie && m.sous_categorie.toLowerCase().includes(q))
    ).slice(0, 6);
    setSearchResults(results);
  }, [searchQuery]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Bar - Contact Info (Hidden on mobile) */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-border">
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href={'mailto:' + siteConfig.email} className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">{siteConfig.email}</span>
            </a>
            <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>WhatsApp</span>
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="text-muted-foreground">
            {siteConfig.adresse}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src="/images/alma-logo.png" 
              alt="Alma Machines-Outils" 
              className="h-7 sm:h-8 md:h-9 lg:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-baseline gap-5 xl:gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Accueil
            </Link>
            
            {/* Gammes Mega Dropdown */}
            <div className="relative group">
              <span className="inline-flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base cursor-pointer">
                Gammes
                <ChevronDown size={14} className="relative top-px" />
              </span>
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[600px] bg-white border border-border rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-4">
                <div className="grid grid-cols-2 gap-3">
                  {mainCategories.map((cat) => (
                    <div key={cat.slug} className="rounded-lg">
                      <Link
                        to={'/gamme/' + cat.slug}
                        className="block px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-semibold text-gray-900 text-sm flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#ef6110]"></span>
                          {cat.nom}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5 ml-4 line-clamp-1">{cat.description}</div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-3 pt-3">
                  <Link to="/marques" className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-medium text-gray-700">Voir toutes nos marques</span>
                    <ArrowRight size={14} className="text-[#ef6110]" />
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/marques" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Marques
            </Link>
            <Link to="/partenaires" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Nos Partenaires
            </Link>
            <Link to="/occasion" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Occasion
            </Link>
            <Link to="/brochures" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Nos Brochures
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              Blog
            </Link>
            <Link to="/a-propos" className="text-foreground hover:text-primary transition-colors font-medium text-sm xl:text-base">
              À propos
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Icon */}
            <button
              onClick={toggleSearch}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Rechercher"
            >
              <Search size={20} />
            </button>

            {/* Contact Button - Hidden on mobile */}
            <Link to="/contact" className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold text-sm px-4 py-2">
                Contactez-nous
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar - Full width on mobile */}
        {isSearchOpen && (
          <div className="py-4 border-t border-border relative">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher une machine, marque, catégorie..."
                className="flex-1 px-4 py-3 text-base border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <Button 
                type="button" 
                variant="ghost"
                onClick={() => { setIsSearchOpen(false); setSearchQuery(''); setSearchResults([]); }}
                className="px-3"
              >
                <X size={18} />
              </Button>
            </form>
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute left-0 right-0 top-full bg-white border border-border rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto mx-4">
                {searchResults.map((machine) => (
                  <Link
                    key={machine.slug}
                    to={'/machine/' + machine.slug}
                    onClick={() => { setIsSearchOpen(false); setSearchQuery(''); setSearchResults([]); }}
                    className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-border last:border-b-0"
                  >
                    <div className="font-medium text-foreground text-sm">{machine.designation || machine.fabricant}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      {machine.fabricant} · {machine.categorie} {machine.sous_categorie ? '· ' + machine.sous_categorie : ''}
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {searchQuery.trim().length >= 2 && searchResults.length === 0 && (
              <div className="absolute left-0 right-0 top-full bg-white border border-border rounded-lg shadow-xl z-50 mx-4 px-4 py-6 text-center text-muted-foreground text-sm">
                Aucune machine trouvée pour "{searchQuery}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu - Full screen overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] sm:top-[65px] bg-white z-40 overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col">
            {/* Quick contact on mobile */}
            <div className="flex items-center justify-center gap-4 pb-4 mb-4 border-b border-border">
              <a 
                href={siteConfig.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-medium"
              >
                <Phone size={16} />
                WhatsApp
              </a>
              <a 
                href={'mailto:' + siteConfig.email}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                <Mail size={16} />
                Email
              </a>
            </div>

            <Link 
              to="/" 
              onClick={toggleMenu} 
              className="py-4 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border"
            >
              Accueil
            </Link>
            
            {/* Mobile Gammes - Expandable */}
            <div className="border-b border-border">
              <button 
                onClick={toggleGammes}
                className="w-full py-4 flex items-center justify-between text-lg font-medium text-foreground"
              >
                <span>Gammes</span>
                <ChevronRight size={20} className={'transition-transform ' + (isGammesOpen ? 'rotate-90' : '')} />
              </button>
              {isGammesOpen && (
                <div className="pb-4 pl-4 space-y-1">
                  {mainCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={'/gamme/' + cat.slug}
                      onClick={toggleMenu}
                      className="block py-3 px-4 text-foreground hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="font-medium">{cat.nom}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{cat.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/marques" 
              onClick={toggleMenu} 
              className="py-4 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border"
            >
              Marques
            </Link>
            <Link 
              to="/partenaires" 
              onClick={toggleMenu} 
              className="py-4 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border"
            >
              Nos Partenaires
            </Link>
            <Link 
              to="/occasion" 
              onClick={toggleMenu} 
              className="py-4 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border"
            >
              Occasion
            </Link>
            <Link 
              to="/brochures" 
              onClick={toggleMenu} 
              className="py-4 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border"
            >
              Nos Brochures
            </Link>
            <Link 
              to="/blog" 
              onClick={toggleMenu} 
              className="py-4 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border"
            >
              Blog
            </Link>
            <Link 
              to="/a-propos" 
              onClick={toggleMenu} 
              className="py-4 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border"
            >
              À propos
            </Link>
            <Link 
              to="/arcane-group" 
              onClick={toggleMenu} 
              className="py-4 text-lg font-medium text-[#ef6110] hover:text-[#d45510] transition-colors border-b border-border"
            >
              Arcane Group
            </Link>
            
            {/* CTA Button */}
            <Link to="/contact" onClick={toggleMenu} className="mt-6">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg">
                Contactez-nous
              </Button>
            </Link>
            
            {/* Social Links */}
            <div className="mt-6 pt-6 border-t border-border text-center">
              <a 
                href={siteConfig.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Suivez-nous sur LinkedIn →
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
