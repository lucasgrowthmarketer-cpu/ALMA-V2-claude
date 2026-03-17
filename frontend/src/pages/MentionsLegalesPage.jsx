import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../data/machinesData';
import SEO from '../components/SEO';

const MentionsLegalesPage = () => {
  return (
          <SEO 
        title="Mentions légales" 
        description="Mentions légales du site Alma Machines-Outils."
        path="/mentions-legales"
        noindex={true}
      />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            Mentions Légales
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-10 space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Éditeur du site</h2>
              <p className="text-gray-700 leading-relaxed">
                Le site <strong>alma-machines-outils.fr</strong> est édité par :<br />
                <strong>{siteConfig.nom}</strong><br />
                Adresse : {siteConfig.adresse}<br />
                Email : <a href={'mailto:' + siteConfig.email} className="text-[#ef6110] hover:underline">{siteConfig.email}</a><br />
                Téléphone : <a href={siteConfig.whatsappLink} className="text-[#ef6110] hover:underline">{siteConfig.whatsapp}</a>
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Directeur de la publication : Jean-Baptiste — Gérant
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hébergement</h2>
              <p className="text-gray-700 leading-relaxed">
                Ce site est hébergé par :<br />
                <strong>Railway Corporation</strong><br />
                548 Market St, PMB 68199<br />
                San Francisco, California 94104, USA<br />
                Site web : <a href="https://railway.app" target="_blank" rel="noopener noreferrer" className="text-[#ef6110] hover:underline">railway.app</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <p className="text-gray-700 leading-relaxed">
                L'ensemble du contenu de ce site (textes, images, logos, graphismes, icônes, vidéos) 
                est la propriété exclusive de {siteConfig.nom} ou de ses partenaires, et est protégé 
                par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie 
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans 
                autorisation écrite préalable de {siteConfig.nom}.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation de responsabilité</h2>
              <p className="text-gray-700 leading-relaxed">
                {siteConfig.nom} s'efforce de fournir des informations aussi précises que possible sur ce site. 
                Toutefois, elle ne pourra être tenue responsable des omissions, inexactitudes ou carences dans 
                la mise à jour des informations, qu'elles soient de son fait ou du fait de tiers.
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Les informations présentes sur ce site sont données à titre indicatif et sont susceptibles 
                d'évoluer. Elles ne sauraient constituer un engagement contractuel.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Liens hypertextes</h2>
              <p className="text-gray-700 leading-relaxed">
                Le site peut contenir des liens vers d'autres sites internet. {siteConfig.nom} ne dispose 
                d'aucun moyen de contrôle du contenu de ces sites tiers et n'assume aucune responsabilité 
                quant à leur contenu.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit applicable</h2>
              <p className="text-gray-700 leading-relaxed">
                Les présentes mentions légales sont soumises au droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegalesPage;
