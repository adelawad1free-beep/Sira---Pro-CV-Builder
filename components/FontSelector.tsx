
import React from 'react';
import { Language } from '../types';

interface Props {
  currentFont: string;
  onChange: (font: string) => void;
  lang: Language;
}

const FontSelector: React.FC<Props> = ({ currentFont, onChange, lang }) => {
  const fonts = [
    { id: 'Cairo', name: 'Cairo (عصري)' },
    { id: 'Tajawal', name: 'Tajawal (ناعم)' },
    { id: 'Almarai', name: 'Almarai (رسمي)' },
    { id: 'Readex Pro', name: 'Readex (بسيط)' },
    { id: 'IBM Plex Sans Arabic', name: 'IBM (تقني)' },
    { id: 'Amiri', name: 'Amiri (كلاسيكي)' },
    { id: 'Montserrat', name: 'Montserrat (إنجليزي)' },
    { id: 'Poppins', name: 'Poppins (دائري)' },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 no-print space-y-4">
      <div className="flex items-center gap-3 mb-2">
         <span className="text-xl">🔡</span>
         <h3 className="font-black text-slate-800 text-sm uppercase tracking-wide">
           {lang === 'ar' ? 'نوع الخط' : 'Typography'}
         </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {fonts.map((f) => (
          <button
            key={f.id}
            onClick={() => onChange(f.id)}
            className={`px-3 py-2 rounded-xl text-[10px] font-bold transition-all border text-center whitespace-nowrap overflow-hidden text-ellipsis ${
              currentFont === f.id 
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm' 
                : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-300'
            }`}
            style={{ fontFamily: f.id }}
          >
            {f.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FontSelector;
