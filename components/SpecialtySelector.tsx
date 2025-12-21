
import React from 'react';
import { Language } from '../types';
import { translations } from '../translations';
import { SPECIALTIES_DATA } from '../constants';

interface Props {
  lang: Language;
  onSelect: (data: any) => void;
  themeColor: string;
}

const SpecialtyIcons = {
  software: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
  design: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>,
  medical: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>,
  marketing: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>
};

const SpecialtySelector: React.FC<Props> = ({ lang, onSelect, themeColor }) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const specialties = [
    { id: 'software', icon: SpecialtyIcons.software },
    { id: 'design', icon: SpecialtyIcons.design },
    { id: 'medical', icon: SpecialtyIcons.medical },
    { id: 'marketing', icon: SpecialtyIcons.marketing }
  ];

  return (
    <div className="space-y-5 animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center gap-3">
         <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center">
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
         </div>
         <h3 className="font-black text-slate-800 text-[10px] uppercase tracking-[0.2em]">{t.chooseSpecialty}</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {specialties.map((spec) => (
          <button
            key={spec.id}
            onClick={() => onSelect(SPECIALTIES_DATA[spec.id][lang])}
            className="flex items-center gap-3 p-4 rounded-2xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-slate-900 transition-all group shadow-sm active:scale-95"
          >
            <div className="text-slate-400 group-hover:text-slate-900 transition-colors"><spec.icon /></div>
            <span className="text-[10px] font-black text-slate-500 group-hover:text-slate-900 leading-tight truncate uppercase">
              {(t.specialties as any)[spec.id]}
            </span>
          </button>
        ))}
      </div>
      
      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
         <p className="text-[9px] text-slate-500 font-bold leading-relaxed text-center italic">
           {isRtl ? 'سيتم استبدال البيانات الحالية بمحتوى احترافي مسطح ومناسب للتخصص المختار' : 'Current content will be replaced with professional flat data matching the selection'}
         </p>
      </div>
    </div>
  );
};

export default SpecialtySelector;
