
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

  // أيقونات فلات بسيطة بتنسيق SVG
  const specialties = [
    { 
      id: 'software', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ) 
    },
    { 
      id: 'design', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 8v4"></path>
          <path d="M12 16h.01"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ) 
    },
    { 
      id: 'accounting', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
      ) 
    },
    { 
      id: 'marketing', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M22 2L11 13"></path>
          <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
        </svg>
      ) 
    },
    { 
      id: 'sales', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ) 
    },
    { 
      id: 'civil', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ) 
    },
    { 
      id: 'hr', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ) 
    },
    { 
      id: 'medical', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      ) 
    },
    { 
      id: 'teaching', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ) 
    },
    { 
      id: 'pm', 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ) 
    },
  ];

  return (
    <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8 no-print space-y-6">
      <div className="flex items-center justify-between mb-2">
         <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-amber-50 text-amber-500">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M13 10V3L4 14H11V21L20 10H13Z" /></svg>
            </div>
            <h3 className="font-black text-slate-800 text-lg">{t.chooseSpecialty}</h3>
         </div>
         <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest hidden sm:block">Quick Templates</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {specialties.map((spec) => (
          <button
            key={spec.id}
            onClick={() => onSelect(SPECIALTIES_DATA[spec.id][lang])}
            className="group relative flex flex-col items-center justify-center p-6 rounded-3xl border border-slate-50 bg-slate-50/40 hover:bg-white hover:border-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 active:scale-95 overflow-hidden"
          >
            {/* Background Accent on Hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500"
              style={{ backgroundColor: themeColor }}
            ></div>

            <div 
              className="mb-4 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500"
              style={{ color: themeColor }}
            >
              {spec.icon}
            </div>
            
            <span className="text-xs font-black text-slate-500 group-hover:text-slate-900 transition-colors text-center leading-tight">
              {(t.specialties as any)[spec.id]}
            </span>

            {/* Indicator Dot */}
            <div 
               className="w-1.5 h-1.5 rounded-full mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"
               style={{ backgroundColor: themeColor }}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpecialtySelector;
