import React from 'react';
import { Building2, Wrench, Award, Settings, Factory } from 'lucide-react';

function ReviewCard({ className = '', icon, name, role, company, quote, iconBg = 'bg-[#ef6110]/20' }) {
  return (
    <div
      className={`relative flex h-52 w-[26rem] -skew-y-[6deg] select-none flex-col justify-between rounded-2xl border-2 border-white/20 bg-white/95 backdrop-blur-md px-6 py-5 shadow-lg transition-all duration-700 overflow-hidden hover:border-[#ef6110]/50 hover:bg-white hover:shadow-2xl ${className}`}
    >
      {/* Subtle gradient overlay instead of hard rectangle */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-gray-100/50 pointer-events-none"></div>
      
      <div className="relative flex items-center gap-3">
        <span className={`inline-flex items-center justify-center rounded-full ${iconBg} p-2.5`}>
          {icon}
        </span>
        <div>
          <p className="text-base font-bold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500 font-medium">{role}</p>
        </div>
      </div>
      <p className="relative text-sm text-gray-700 leading-relaxed italic">"{quote}"</p>
      <div className="relative flex items-center gap-2">
        <Building2 size={13} className="text-[#ef6110]/60" />
        <p className="text-xs text-gray-500 font-medium">{company}</p>
      </div>
    </div>
  );
}

export default function ReviewCards() {
  const reviews = [
    {
      icon: <Settings size={18} className="text-[#ef6110]" />,
      iconBg: 'bg-[#ef6110]/10',
      name: 'Philippe M.',
      role: 'Directeur de production',
      company: 'Mécanique de Précision Provence — Aix-en-Provence',
      quote: "Alma nous a accompagnés dans le choix d'un centre d'usinage 5 axes parfaitement adapté à notre activité aéronautique.",
      className: '[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:rounded-2xl before:h-full before:content-[\'\'] before:bg-gray-50/70 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 before:z-10',
    },
    {
      icon: <Wrench size={18} className="text-gray-700" />,
      iconBg: 'bg-gray-100',
      name: 'Laurent D.',
      role: 'Gérant',
      company: 'Atelier LDA Usinage — Toulon',
      quote: 'Trois tours CNC installés en un temps record. Le conseil technique a fait toute la différence pour notre atelier.',
      className: '[grid-area:stack] translate-x-20 translate-y-16 hover:-translate-y-0 before:absolute before:w-full before:rounded-2xl before:h-full before:content-[\'\'] before:bg-gray-50/70 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 before:z-10',
    },
    {
      icon: <Factory size={18} className="text-blue-600" />,
      iconBg: 'bg-blue-50',
      name: 'Sophie R.',
      role: 'Responsable achats',
      company: 'Tôlerie Méditerranée — Montpellier',
      quote: "Une presse plieuse performante trouvée rapidement. Le suivi après-vente est irréprochable.",
      className: '[grid-area:stack] translate-x-40 translate-y-32 hover:translate-y-16 before:absolute before:w-full before:rounded-2xl before:h-full before:content-[\'\'] before:bg-gray-50/70 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 before:z-10',
    },
    {
      icon: <Award size={18} className="text-[#ef6110]" />,
      iconBg: 'bg-[#ef6110]/10',
      name: 'Marc V.',
      role: "Chef d'atelier",
      company: 'Constructions Métalliques du Languedoc — Nîmes',
      quote: "Installation rapide, formation sur place. Nos opérateurs étaient opérationnels dès le premier jour.",
      className: '[grid-area:stack] translate-x-60 translate-y-48 hover:translate-y-32',
    },
  ];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center py-8">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
}
