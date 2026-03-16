import React, { useState } from 'react';
import { ArrowLeft, Upload, Check, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { brandsSimple } from '../data/brandsSimple';
import BrandLogo from '../components/BrandLogo';

// Page pour gérer l'upload des logos de marques
// TODO: À connecter au backend pour upload réel
const AdminLogosPage = () => {
  const [uploadStatus, setUploadStatus] = useState({});

  const handleFileUpload = (brandSlug, event) => {
    const file = event.target.files[0];
    if (file) {
      // TODO: Implémenter l'upload vers le backend
      console.log(`Upload logo for ${brandSlug}:`, file);
      
      // Simulation
      setUploadStatus({
        ...uploadStatus,
        [brandSlug]: 'success'
      });
      
      setTimeout(() => {
        setUploadStatus({
          ...uploadStatus,
          [brandSlug]: null
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-gray-300 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={16} className="mr-1" />
            Retour
          </Link>
          <h1 className="text-4xl font-bold mb-4">
            Gestion des Logos Marques
          </h1>
          <p className="text-xl text-gray-300">
            Uploadez les logos officiels des fabricants partenaires
          </p>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-8 bg-blue-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Instructions importantes</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Contactez chaque fabricant pour obtenir leur kit média officiel</li>
                  <li>• Format recommandé : SVG, PNG (fond transparent), JPG</li>
                  <li>• Dimensions : 400x200px minimum</li>
                  <li>• Les logos doivent respecter les guidelines de chaque marque</li>
                  <li>• Backend API requis pour sauvegarder les uploads (TODO)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upload Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {brandsSimple.map((brand) => (
              <Card key={brand.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Preview actuel */}
                  <div className="mb-4 flex justify-center">
                    <BrandLogo brandSlug={brand.slug} size="lg" />
                  </div>

                  {/* Info marque */}
                  <div className="text-center mb-4">
                    <h3 className="font-bold text-gray-900 text-lg">{brand.nom}</h3>
                    <p className="text-sm text-gray-600">{brand.categorie}</p>
                  </div>

                  {/* Upload button */}
                  <label className="block">
                    <input
                      type="file"
                      accept="image/svg+xml,image/png,image/jpeg"
                      onChange={(e) => handleFileUpload(brand.slug, e)}
                      className="hidden"
                    />
                    <Button 
                      className="w-full bg-[#ef6110] hover:bg-[#d45510] text-white"
                      onClick={(e) => e.currentTarget.previousSibling.click()}
                    >
                      {uploadStatus[brand.slug] === 'success' ? (
                        <>
                          <Check size={16} className="mr-2" />
                          Logo uploadé
                        </>
                      ) : (
                        <>
                          <Upload size={16} className="mr-2" />
                          Upload Logo
                        </>
                      )}
                    </Button>
                  </label>

                  {/* Status */}
                  {uploadStatus[brand.slug] === 'success' && (
                    <p className="text-xs text-green-600 text-center mt-2">
                      ✓ Upload simulé avec succès
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Backend Note */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Backend API Required
            </h3>
            <p className="text-gray-700 mb-6">
              Cette page nécessite une API backend pour :
            </p>
            <ul className="text-left max-w-xl mx-auto space-y-2 text-gray-700">
              <li>• Upload et stockage des fichiers logos</li>
              <li>• Validation des formats et dimensions</li>
              <li>• Gestion des permissions d'accès</li>
              <li>• Serving des logos optimisés (CDN)</li>
            </ul>
            <div className="mt-8">
              <code className="text-sm bg-gray-900 text-green-400 px-4 py-2 rounded">
                POST /api/brands/:slug/logo
              </code>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogosPage;
