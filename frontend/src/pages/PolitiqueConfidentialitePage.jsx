import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { siteConfig } from '../data/machinesData';

const PolitiqueConfidentialitePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">
            Politique de Confidentialité
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 sm:p-10 space-y-8">

            <div>
              <p className="text-gray-700 leading-relaxed">
                La présente politique de confidentialité décrit comment {siteConfig.nom} collecte, utilise 
                et protège les informations personnelles que vous nous transmettez via ce site, 
                conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsable du traitement</h2>
              <p className="text-gray-700 leading-relaxed">
                Le responsable du traitement des données personnelles est :<br />
                <strong>{siteConfig.nom}</strong><br />
                {siteConfig.adresse}<br />
                Email : <a href={'mailto:' + siteConfig.email} className="text-[#ef6110] hover:underline">{siteConfig.email}</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Données collectées</h2>
              <p className="text-gray-700 leading-relaxed">
                Nous collectons uniquement les données que vous nous fournissez volontairement 
                via notre formulaire de contact ou de demande de brochures, à savoir :
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                — Nom et prénom<br />
                — Adresse email<br />
                — Numéro de téléphone (facultatif)<br />
                — Nom de l'entreprise (facultatif)<br />
                — Le contenu de votre message
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Finalité du traitement</h2>
              <p className="text-gray-700 leading-relaxed">
                Les données collectées sont utilisées exclusivement pour répondre à vos demandes 
                de renseignements, vous transmettre des devis, vous envoyer les brochures demandées 
                et assurer le suivi commercial de votre projet.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Base légale</h2>
              <p className="text-gray-700 leading-relaxed">
                Le traitement de vos données est fondé sur votre consentement, que vous exprimez 
                en remplissant et en soumettant un formulaire sur notre site, ainsi que sur l'intérêt 
                légitime de {siteConfig.nom} à répondre à vos demandes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Durée de conservation</h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter 
                de votre dernière interaction avec {siteConfig.nom}, sauf obligation légale contraire.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Partage des données</h2>
              <p className="text-gray-700 leading-relaxed">
                Vos données personnelles ne sont jamais vendues, échangées ou louées à des tiers. 
                Elles peuvent être transmises à nos sous-traitants techniques (hébergement, envoi d'emails) 
                dans le strict cadre de la fourniture de nos services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
              <p className="text-gray-700 leading-relaxed">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                — <strong>Droit d'accès :</strong> obtenir une copie de vos données<br />
                — <strong>Droit de rectification :</strong> corriger des données inexactes<br />
                — <strong>Droit à l'effacement :</strong> demander la suppression de vos données<br />
                — <strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré<br />
                — <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données<br />
                — <strong>Droit à la limitation :</strong> restreindre le traitement de vos données
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Pour exercer ces droits, contactez-nous à : <a href={'mailto:' + siteConfig.email} className="text-[#ef6110] hover:underline">{siteConfig.email}</a>
              </p>
              <p className="text-gray-700 mt-3 leading-relaxed">
                Vous pouvez également introduire une réclamation auprès de la CNIL 
                (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#ef6110] hover:underline">www.cnil.fr</a>).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Ce site n'utilise pas de cookies de suivi ou de cookies publicitaires. 
                Seuls des cookies techniques essentiels au bon fonctionnement du site peuvent être utilisés.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modification de cette politique</h2>
              <p className="text-gray-700 leading-relaxed">
                {siteConfig.nom} se réserve le droit de modifier cette politique de confidentialité à tout moment. 
                La version en vigueur est celle accessible sur cette page.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Dernière mise à jour : Mars 2026
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PolitiqueConfidentialitePage;
