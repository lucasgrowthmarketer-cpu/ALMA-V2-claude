import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.alma-machines-outils.fr';

const SEO = ({ 
  title, 
  description, 
  path = '', 
  image = '/images/alma-logo.png',
  type = 'website',
  noindex = false 
}) => {
  const fullTitle = title 
    ? `${title} | Alma Machines-Outils` 
    : 'Alma Machines-Outils | Machines industrielles neuves en PACA';
  
  const fullDescription = description || 
    'Spécialiste en machines-outils industrielles neuves. Tournage, fraisage, rectification, chaudronnerie. 27 marques partenaires en région PACA.';
  
  const fullUrl = `${BASE_URL}${path}`;
  const fullImage = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Alma Machines-Outils" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
