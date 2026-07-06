// Source unique du module Services : alimente le menu header, le footer,
// le hub /services et les pages détail /services/[slug].
// L'icône est une chaîne (résolue via une table d'icônes côté client) pour
// que ce module reste importable depuis les Server Components (metadata).

export const services = [
  {
    slug: 'installation-intervention',
    menuLabel: 'Installation & intervention',
    title: 'Installation & intervention sur site',
    tagline: "De la réception en atelier à la mise en route sur site, partout en France.",
    excerpt:
      "Préparation, installation et mise en service de vos machines-outils, puis intervention sur site partout en France par nos techniciens itinérants.",
    icon: 'Wrench',
    heroImage: '/images/services/services-hero.webp',
    externalUrl: 'https://ernault-services.com/installation-reparation-machines-outils/',
    ctaLabel: 'Demander une installation ou une intervention',
    intro: [
      "La préparation et l'installation d'une machine-outil sont des étapes essentielles pour garantir sa performance, sa précision et sa sécurité avant la mise en production. De la réception de la machine, neuve ou d'occasion, dans notre atelier jusqu'à sa mise en route sur site, chaque phase suit un protocole rigoureux pour une intégration optimale dans votre environnement de travail.",
    ],
    sections: [
      {
        title: 'Préparation et installation, un processus complet',
        items: [
          "Réception et contrôle complet : vérification de tous les éléments mécaniques, électriques et électroniques.",
          "Préparation en atelier : optimisation, réglages, tests, et ajout d'options si nécessaire (diviseur, palpeurs, porte automatique…).",
          "Expédition et installation : acheminement puis mise en place dans l'implantation définitive sur site client.",
          "Mise en route et paramétrages finaux : derniers contrôles, prise en main client, et formation si besoin.",
        ],
      },
      {
        title: 'Intervention sur site, partout en France',
        text: [
          "Au-delà de l'atelier, nous réalisons un diagnostic à distance puis intervenons directement sur site grâce à nos techniciens itinérants qualifiés, pour limiter les arrêts de production et garantir une remise en service optimale.",
        ],
        items: [
          "Tours, centres d'usinage, scies… : préventif, curatif, géométrie, rénovation, contrôle ballbar, installation ou déménagement.",
          "Couverture nationale : tous les départements sont couverts par un technicien formé et compétent.",
          "Service complet : recherche de panne, réparation, tests de fonctionnement, vérifications de sécurité et mise en route finale.",
        ],
      },
    ],
  },
  {
    slug: 'hotline-formations',
    menuLabel: 'Hotline & formations',
    title: 'Hotline clients & formations',
    tagline: "Une équipe technique au téléphone pour vous répondre et poser un diagnostic.",
    excerpt:
      "Assistance téléphonique par nos techniciens pour vous aiguiller, poser un diagnostic à distance, et former vos équipes.",
    icon: 'LifeBuoy',
    heroImage: '/images/services/hotline-hero.jpg',
    externalUrl: 'https://ernault-services.com/hotline-formation/',
    ctaLabel: 'Contacter la hotline',
    intro: [
      "Avant de programmer une intervention, nos équipes techniques sont disponibles au téléphone pour répondre à vos questions et poser un premier diagnostic. Grâce à nos techniciens qualifiés, nous pouvons souvent résoudre le problème à distance et limiter les arrêts de production.",
    ],
    sections: [
      {
        title: 'Une assistance qui vous aiguille',
        items: [
          "Réponse à vos questions techniques par une équipe qualifiée.",
          "Diagnostic à distance avant toute intervention sur site.",
          "Résolution à distance quand c'est possible, pour éviter un déplacement.",
        ],
      },
      {
        title: 'Formations',
        text: [
          "À l'issue d'une installation ou sur simple demande, nous organisons des formations client pour une prise en main complète de votre machine et de ses options.",
        ],
      },
    ],
  },
  {
    slug: 'options-machines-outils',
    menuLabel: 'Options & optimisations',
    title: 'Options & optimisations machines-outils',
    tagline: "Diviseurs, palpeurs, robotisation : améliorez les performances de votre machine.",
    excerpt:
      "Intégration d'options, de palpeurs de mesure et de robots pour améliorer la performance, la précision et la productivité de vos machines.",
    icon: 'Puzzle',
    heroImage: '/images/services/options-hero.jpg',
    externalUrl: 'https://ernault-services.com/options-machines-outils/',
    ctaLabel: 'Étudier une option ou une automatisation',
    intro: [
      "Nous proposons un service complet d'intégration de process, d'ajout d'options et de préparation à la robotisation pour optimiser les performances et la productivité de vos machines-outils, sur tours comme sur centres d'usinage.",
    ],
    sections: [
      {
        title: 'Des options sur mesure',
        text: [
          "Nous améliorons les capacités d'origine de votre machine en ajoutant des options techniques adaptées à vos besoins de production :",
        ],
        items: [
          'Diviseur (4ᵉ axe)',
          'Tilting (5ᵉ axe)',
          'Ajout de règle linéaire',
          'Porte(s) automatique(s)',
          'Soufflage',
          'Pressurisation',
        ],
      },
      {
        title: 'Intégration de palpeurs pièce et outil',
        text: [
          "Fourniture et intégration de palpeurs Renishaw, Heidenhain, Blum… sur une large variété de commandes numériques (Fanuc, Heidenhain, Siemens, NUM, Mitsubishi). Les gains :",
        ],
        items: [
          'Contrôle automatique des pièces et des outils',
          'Correction dynamique des offsets',
          'Réduction des erreurs de réglage',
          'Meilleure qualité et répétabilité',
          'Temps de cycle réduits',
        ],
      },
      {
        title: 'Préparation à la robotisation',
        text: [
          "Pour accompagner votre atelier vers l'industrie du futur, nous intégrons des solutions automatisées, notamment les robots Robojob, référence en automatisation d'usinage.",
        ],
        items: [
          "Intégration de robots sur tours CNC et centres d'usinage",
          'Configuration du système selon vos besoins de production',
          'Mise en marche en conditions réelles',
          'Optimisation du process robotisé',
        ],
      },
    ],
  },
  {
    slug: 'financement',
    menuLabel: 'Financement',
    title: 'Financement',
    tagline: "Des solutions personnalisées, via notre partenaire financier.",
    excerpt:
      "ALMA vous propose des solutions de financement adaptées à votre projet, via notre partenaire financier.",
    icon: 'Banknote',
    heroImage: '/images/services/financement-hero.jpg',
    externalUrl: null,
    ctaLabel: 'Parler de votre financement',
    intro: [
      "ALMA Machines-Outils vous propose des solutions de financement personnalisées en fonction de vos attentes, via notre partenaire financier. Nous connaissons bien les problématiques que rencontrent nos clients et savons y répondre.",
    ],
    sections: [
      {
        title: 'Nos atouts',
        items: [
          'Rapidité de réponse',
          'Prise de risque supérieure sur les dossiers « difficiles »',
          'Solutions de location',
        ],
      },
    ],
  },
];

export function getService(slug) {
  return slug ? services.find((s) => s.slug === slug) || null : null;
}
