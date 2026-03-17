import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('alma_cookie_consent');
    if (!consent) {
      // Show banner after 1.5s for better UX
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      window.gtag('event', 'page_view');
    }
  };

  const acceptCookies = () => {
    localStorage.setItem('alma_cookie_consent', 'accepted');
    enableAnalytics();
    setVisible(false);
  };

  const refuseCookies = () => {
    localStorage.setItem('alma_cookie_consent', 'refused');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-relaxed">
              Nous utilisons des cookies pour analyser le trafic de notre site et améliorer votre expérience. 
              Aucune donnée personnelle n'est partagée avec des tiers.{' '}
              <Link to="/politique-confidentialite" className="text-[#ef6110] hover:underline font-medium">
                En savoir plus
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={refuseCookies}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              Refuser
            </button>
            <button
              onClick={acceptCookies}
              className="px-5 py-2 bg-[#ef6110] hover:bg-[#d45510] text-white text-sm font-semibold rounded-full transition-colors"
            >
              Accepter
            </button>
          </div>
          <button
            onClick={refuseCookies}
            className="absolute top-3 right-3 sm:hidden text-gray-400 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
