// Rubrique « Installations récentes » : une page par projet client livré par ALMA.
// Source unique : chaque entrée génère /installations/[slug] et une carte sur /installations.
// Règle : uniquement des faits transmis par Jean-Baptiste. Un champ inconnu reste null
// (il n'est alors pas affiché), on n'invente rien.
//
// Champs :
//   slug, menuLabel (libellé court du footer), client (null si non citable), secteur, ville, departement (numéro), region
//   lieuLabel : libellé de lieu à afficher quand la ville n'est pas connue
//   miseEnService : 'MM/AAAA' ou null
//   marques : slugs de brands_simple.json (liens vers /marque/[slug])
//   machines : [{ label, slug }] (slug = fiche /machine/[slug], ou null si pas de fiche)
//   titre, accroche (meta description, ~150 caractères)
//   besoin, solution, enseignement : tableaux de paragraphes
//   photos : [{ src, alt }] (la première sert de visuel principal)

export const installations = [
  {
    slug: 'technidrill-carros-trois-tours-cmz',
    menuLabel: '3 tours CMZ · Carros (06)',
    client: 'Technidrill',
    secteur: null,
    ville: 'Carros',
    departement: '06',
    region: "Provence-Alpes-Côte d'Azur",
    miseEnService: null,
    marques: ['cmz'],
    machines: [{ label: 'Tours CNC CMZ, dont un tour de la série TA', slug: 'cmz-ta' }],
    titre: 'Trois tours CMZ choisis ensemble pour optimiser un atelier',
    accroche:
      "Technidrill (Carros, 06) a choisi simultanément trois tours CNC CMZ, avec la reprise d'une machine robotisée trop coûteuse au regard de sa production.",
    besoin: [
      "Technidrill exploitait une machine robotisée dont les mensualités étaient élevées au regard de la production réellement souhaitée. L'enjeu n'était pas d'ajouter une machine de plus, mais de remettre l'outil de production en cohérence avec la charge de l'atelier.",
    ],
    solution: [
      "ALMA a construit un dossier global : le choix simultané de trois tours CNC CMZ pour optimiser l'atelier, et la reprise de la machine robotisée dans la même opération.",
      'Le parc est ainsi dimensionné sur la production visée, et non sur un équipement dont le coût mensuel ne correspondait plus au besoin.',
    ],
    enseignement: [
      "Une vente ne se résume pas toujours à la proposition d'une machine. Elle se raisonne dans sa globalité : le besoin de production, le parc existant, le financement en cours et, quand c'est pertinent, la reprise d'un équipement.",
    ],
    photos: [
      { src: '/images/installations/technidrill-tour-cmz-ta.webp', alt: 'Tour CNC CMZ série TA installé dans un atelier' },
      { src: '/images/installations/technidrill-piece-tournee.webp', alt: 'Pièce tournée sur un tour CNC CMZ, tourelle porte-outils en arrière-plan' },
    ],
  },
  {
    slug: 'petras-pourrieres-centre-usinage-hartford-lg1000',
    menuLabel: 'Hartford LG1000 · Pourrières (83)',
    client: 'Petras',
    secteur: 'Pompes et actionneurs pour la pétrochimie',
    ville: 'Pourrières',
    departement: '83',
    region: "Provence-Alpes-Côte d'Azur",
    miseEnService: null,
    marques: ['hartford'],
    machines: [{ label: "Centre d'usinage Hartford LG1000", slug: 'hartford-lg' }],
    titre: 'Un centre Hartford LG1000 choisi pour la qualité du SAV',
    accroche:
      "Petras (Pourrières, 83), fabricant de pompes et d'actionneurs pour la pétrochimie, a choisi un centre Hartford LG1000. Le SAV du réseau Arcane Group a fait la différence.",
    besoin: [
      "Petras, installé près de Brignoles, fabrique des pompes et des actionneurs pour la pétrochimie. L'entreprise travaillait déjà depuis des années avec Ernault Services pour la maintenance de son centre d'usinage horizontal.",
      'Au moment de choisir une nouvelle machine, le service après-vente pesait autant dans la décision que la machine elle-même.',
    ],
    solution: [
      "ALMA a proposé un centre d'usinage Hartford LG1000. Lors du choix final, la confiance déjà construite avec le SAV du réseau Arcane Group, assuré par Ernault Services, a fait pencher la balance en faveur du centre Hartford.",
    ],
    enseignement: [
      "Une machine-outil s'achète pour des années. La qualité du service après-vente, et la relation déjà établie avec les techniciens, entre dans la décision au même titre que les caractéristiques techniques.",
    ],
    photos: [
      { src: '/images/installations/petras-hartford-lg1000.webp', alt: "Centre d'usinage Hartford LG1000 livré chez Petras" },
    ],
  },
  {
    slug: 'vallauris-rectifieuse-plane-ger-sra-40-20',
    menuLabel: 'Rectifieuse GER · Vallauris (06)',
    client: 'Études et Réalisation Industrielle',
    secteur: null,
    ville: 'Vallauris',
    departement: '06',
    region: "Provence-Alpes-Côte d'Azur",
    miseEnService: null,
    marques: ['ger'],
    machines: [{ label: 'Rectifieuse plane GER SRA-40/20', slug: 'ger-s' }],
    titre: "Une rectifieuse GER neuve pour suivre la montée en cadence d'un donneur d'ordre",
    accroche:
      "Face à une prévision de fabrication en forte hausse chez son client, une entreprise de Vallauris (06) est passée d'un projet de rétrofit à une rectifieuse GER SRA-40/20 neuve.",
    besoin: [
      "Le donneur d'ordre de l'entreprise annonçait une prévision de fabrication en très forte hausse. Il fallait une capacité de rectification supplémentaire, et la première piste étudiée était une machine rétrofitée.",
    ],
    solution: [
      "Après étude, le choix s'est porté sur une machine neuve : une rectifieuse plane GER SRA-40/20. Elle apporte la technologie actuelle du constructeur, une programmation tactile et la précision attendue pour suivre la hausse de production.",
    ],
    enseignement: [
      "Quand la charge de production change d'échelle, la comparaison entre rétrofit et machine neuve mérite d'être refaite : technologie, simplicité de programmation, précision et durée de vie entrent dans le calcul.",
    ],
    photos: [
      { src: '/images/installations/ger-sra-40-20-installee.webp', alt: 'Rectifieuse plane GER SRA-40/20 installée en atelier' },
      { src: '/images/installations/ger-chez-le-constructeur.webp', alt: 'Rectifieuse GER présentée chez le constructeur' },
    ],
  },
  {
    slug: 'marseille-decoupe-laser-haco-nouveau-batiment',
    menuLabel: 'Découpe laser HACO · Marseille (13)',
    client: null,
    secteur: null,
    ville: 'Marseille',
    departement: '13',
    region: "Provence-Alpes-Côte d'Azur",
    miseEnService: null,
    marques: ['haco'],
    machines: [{ label: 'Machine de découpe laser HACO', slug: null }],
    titre: 'Une découpe laser HACO pour un nouveau bâtiment de fabrication à Marseille',
    accroche:
      "Installation d'une machine de découpe laser HACO dans un bâtiment de fabrication neuf à Marseille, en place pour l'inauguration du site.",
    besoin: [
      "Le client a construit un nouveau bâtiment de fabrication à Marseille. La machine de découpe laser devait y être installée et opérationnelle pour l'inauguration du site.",
    ],
    solution: [
      "ALMA a fourni une machine de découpe laser HACO, constructeur belge de machines de tôlerie depuis 1965, et a accompagné la mise en place de ce projet jusqu'à l'installation dans le nouveau bâtiment.",
    ],
    enseignement: [
      "Équiper un bâtiment neuf, c'est aussi tenir un calendrier : la machine doit être en place avant l'ouverture du site, pas après.",
    ],
    photos: [
      { src: '/images/installations/haco-marseille-decoupe-laser.webp', alt: 'Machine de découpe laser HACO installée dans un bâtiment de fabrication à Marseille' },
      { src: '/images/installations/haco-marseille-zone-de-coupe.webp', alt: 'Zone de coupe et portique de la machine de découpe laser HACO' },
    ],
  },
  {
    slug: 'marquage-laser-lasit-compactmark-g9-reception-usine',
    menuLabel: 'Marquage laser LASIT CompactMark G9',
    client: null,
    secteur: null,
    ville: null,
    departement: null,
    lieuLabel: 'Réception en usine, Italie',
    region: null,
    miseEnService: null,
    marques: ['lasit'],
    machines: [{ label: 'Marquage laser LASIT CompactMark G9', slug: null }],
    titre: 'Une CompactMark G9 LASIT réceptionnée chez le constructeur',
    accroche:
      "Pour optimiser ses changements de série, un client d'ALMA a choisi une machine de marquage laser LASIT CompactMark G9, réceptionnée sur place chez le constructeur en Italie.",
    besoin: [
      "Le client voulait optimiser ses changements de série en marquage laser. Il lui fallait une machine compacte, mais avec le maximum de courses, une grande précision et la possibilité d'installer rapidement différentes options.",
    ],
    solution: [
      'ALMA et LASIT ont proposé une CompactMark G9, qui réunit ces trois exigences dans un encombrement réduit.',
      "Jean-Baptiste Borron a fait l'aller-retour Marseille Naples pour réceptionner la machine avec le client, directement chez le constructeur.",
    ],
    enseignement: [
      "Réceptionner une machine chez le constructeur, c'est voir comment elle est fabriquée. Chez LASIT, tout est réalisé en interne : l'étude, les logiciels, la fabrication des châssis, l'usinage des pièces mécaniques, le montage et les tests.",
    ],
    photos: [
      { src: '/images/installations/lasit-compactmark-g9.webp', alt: 'Machine de marquage laser LASIT CompactMark G9 avec axe rotatif pour pièces cylindriques' },
      { src: '/images/installations/lasit-reception-usine.webp', alt: 'Réception de la CompactMark G9 chez LASIT' },
      { src: '/images/installations/lasit-equipe-reception.webp', alt: "L'équipe réunie devant la CompactMark G9 lors de la réception" },
    ],
  },
];

export const getInstallation = (slug) => installations.find((i) => i.slug === slug);

// Libellé de lieu commun aux cartes et aux pages.
export const lieuInstallation = (i) =>
  i.ville ? [i.ville, i.departement && `(${i.departement})`].filter(Boolean).join(' ') : i.lieuLabel || '';
