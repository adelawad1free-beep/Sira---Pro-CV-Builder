
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { SPECIALTIES_DATA } from '../constants';

interface Props {
  lang: Language;
  onSelect: (data: any) => void;
  themeColor: string;
}

const SpecialtySelector: React.FC<Props> = ({ lang, onSelect, themeColor }) => {
  const t = translations[lang];

  const specialties = [
    { id: 'software', emoji: '💻' },
    { id: 'design', emoji: '🎨' },
    { id: 'medical', emoji: '🩺' },
    { id: 'accounting', emoji: '📊' },
    { id: 'marketing', emoji: '🚀' },
    { id: 'sales', emoji: '🤝' },
    { id: 'civil', emoji: '🏗️' },
    { id: 'hr', emoji: '👥' },
    { id: 'teaching', emoji: '📚' },
    { id: 'pm', emoji: '📅' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 no-print space-y-4">
      <div className="flex items-center justify-between">
         <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <h3 className="font-black text-slate-800 text-sm uppercase tracking-wide">{t.chooseSpecialty}</h3>
         </div>
      </div>

      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 no-scrollbar">
        {specialties.map((spec) => (
          <button
            key={spec.id}
            onClick={() => onSelect(SPECIALTIES_DATA[spec.id][lang])}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-100 bg-slate-50 hover:bg-white transition-all duration-300 active:scale-95 whitespace-nowrap group hover:shadow-md"
            style={{ 
              borderLeftWidth: '4px',
              borderLeftColor: themeColor 
            }}
          >
            <span className="text-base group-hover:scale-125 transition-transform">{spec.emoji}</span>
            <span className="text-xs font-black text-slate-600 group-hover:text-slate-900">
              {(t.specialties as any)[spec.id]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpecialtySelector;
