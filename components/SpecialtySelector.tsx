
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { SPECIALTIES_DATA } from '../constants';

interface Props {
  lang: Language;
  onSelect: (data: any) => void;
}

const SpecialtySelector: React.FC<Props> = ({ lang, onSelect }) => {
  const t = translations[lang];

  const specialties = [
    { id: 'software', icon: '💻' },
    { id: 'design', icon: '🎨' },
    { id: 'accounting', icon: '📊' },
    { id: 'marketing', icon: '📈' },
    { id: 'sales', icon: '🤝' },
    { id: 'civil', icon: '🏗️' },
    { id: 'hr', icon: '👥' },
    { id: 'medical', icon: '🩺' },
    { id: 'teaching', icon: '🍎' },
    { id: 'pm', icon: '📋' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 no-print space-y-4">
      <div className="flex items-center gap-3 mb-2">
         <span className="text-xl">⚡</span>
         <h3 className="font-black text-slate-800 text-sm uppercase tracking-wide">{t.chooseSpecialty}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {specialties.map((spec) => (
          <button
            key={spec.id}
            onClick={() => onSelect(SPECIALTIES_DATA[spec.id][lang])}
            className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-indigo-600 hover:border-indigo-600 transition-all duration-300 active:scale-95"
          >
            <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{spec.icon}</span>
            <span className="text-[10px] font-black text-slate-600 group-hover:text-white transition-colors">
              {(t.specialties as any)[spec.id]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpecialtySelector;
