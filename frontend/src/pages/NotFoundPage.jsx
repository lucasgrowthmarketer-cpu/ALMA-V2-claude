import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Search, Wrench, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { siteConfig } from '../data/machinesData';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-[#ef6110] text-9xl font-bold mb-4 leading-none">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Page introuvable
        </h1>
        <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto">
          La page que vous cherchez n'existe pas ou a été déplacée. 
          Pas d'inquiétude, voici quelques liens utiles.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Link to="/" className="flex flex-col items-center gap-2 p-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100">
            <Home size={24} className="text-[#ef6110]" />
            <span className="font-semibold text-gray-900 text-sm">Accueil</span>
          </Link>
          <Link to="/marques" className="flex flex-col items-center gap-2 p-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100">
            <Search size={24} className="text-[#ef6110]" />
            <span className="font-semibold text-gray-900 text-sm">Nos machines</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center gap-2 p-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-gray-100">
            <Phone size={24} className="text-[#ef6110]" />
            <span className="font-semibold text-gray-900 text-sm">Contact</span>
          </Link>
        </div>

        <Link to="/contact">
          <Button className="bg-[#ef6110] hover:bg-[#d45510] text-white font-semibold rounded-full px-8">
            Contactez-nous
            <ArrowRight className="ml-2" size={16} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
