
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
  const isRtl = lang === 'ar';

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
    <div className="space-y-6">
      <div className="bg-white rounded-3xl p-6 border border-slate-100 space-y-4">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-sm" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>⚡</div>
           <h3 className="font-black text-slate-800 text-xs uppercase tracking-wider">{t.chooseSpecialty}</h3>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {specialties.map((spec) => (
            <button
              key={spec.id}
              onClick={() => onSelect(SPECIALTIES_DATA[spec.id][lang])}
              className="flex items-center gap-3 p-3 rounded-2xl border border-slate-50 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-indigo-100 transition-all group"
            >
              <span className="text-xl group-hover:scale-125 transition-transform">{spec.emoji}</span>
              <span className="text-[10px] font-black text-slate-500 group-hover:text-slate-900 leading-tight truncate">
                {(t.specialties as any)[spec.id]}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
         <span className="text-xl">💡</span>
         <p className="text-[10px] text-amber-800 font-bold leading-relaxed">
           {isRtl ? 'اختيار تخصص سيقوم بتبديل بياناتك الحالية ببيانات وهمية احترافية لهذا التخصص.' : 'Selecting a specialty will replace your current data with professional sample data.'}
         </p>
      </div>
    </div>
  );
};

export default SpecialtySelector;
