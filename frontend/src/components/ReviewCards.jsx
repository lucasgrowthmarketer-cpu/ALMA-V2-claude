import React from 'react';
import { Building2, Wrench, Award, Settings, Factory } from 'lucide-react';

function ReviewCard({ className = '', icon, name, role, company, quote, iconBg = 'bg-[#ef6110]/20', iconColor = 'text-[#ef6110]' }) {
  return (
    <div
      className={`relative flex h-44 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 border-gray-200 bg-white/90 backdrop-blur-sm px-5 py-4 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-gray-50 after:to-transparent after:content-[''] hover:border-[#ef6110]/40 hover:bg-white hover:shadow-xl ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className={`relative inline-flex items-center justify-center rounded-full ${iconBg} p-2`}>
          {icon}
        </span>
        <div>
          <p className="text-sm font-bold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 italic">"{quote}"</p>
      <div className="flex items-center gap-2">
        <Building2 size={12} className="text-gray-400" />
        <p className="text-xs text-gray-500">{company}</p>
      </div>
    </div>
  );
}

export default function ReviewCards() {
  const reviews = [
    {
      icon: <Settings size={16} className="text-[#ef6110]" />,
      iconBg: 'bg-[#ef6110]/15',
      name: 'Philippe M.',
      role: 'Directeur de production',
      company: 'Mécanique de Précision Provence — Aix-en-Provence',
      quote: 'Alma nous a accompagnés dans le choix d\'un centre d\'usinage 5 axes parfaitement adapté à notre activité aéronautique.',
      className: '[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-gray-200 before:h-full before:content-[\'\'] before:bg-blend-overlay before:bg-gray-50/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
    },
    {
      icon: <Wrench size={16} className="text-gray-700" />,
      iconBg: 'bg-gray-200',
      name: 'Laurent D.',
      role: 'Gérant',
      company: 'Atelier LDA Usinage — Toulon',
      quote: 'Trois tours CNC installés en un temps record. Le conseil technique a fait toute la différence pour notre atelier.',
      className: '[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-gray-200 before:h-full before:content-[\'\'] before:bg-blend-overlay before:bg-gray-50/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
    },
    {
      icon: <Factory size={16} className="text-blue-700" />,
      iconBg: 'bg-blue-100',
      name: 'Sophie R.',
      role: 'Responsable achats',
      company: 'Tôlerie Méditerranée — Montpellier',
      quote: 'Une presse plieuse performante trouvée rapidement. Le suivi après-vente est irréprochable.',
      className: '[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 before:absolute before:w-full before:outline-1 before:rounded-xl before:outline-gray-200 before:h-full before:content-[\'\'] before:bg-blend-overlay before:bg-gray-50/60 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0',
    },
    {
      icon: <Award size={16} className="text-[#ef6110]" />,
      iconBg: 'bg-[#ef6110]/15',
      name: 'Marc V.',
      role: 'Chef d\'atelier',
      company: 'Constructions Métalliques du Languedoc — Nîmes',
      quote: 'Installation rapide, formation sur place. Nos opérateurs étaient opérationnels dès le premier jour.',
      className: '[grid-area:stack] translate-x-36 translate-y-[7.5rem] hover:translate-y-[5rem]',
    },
  ];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
}
