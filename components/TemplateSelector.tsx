
import React from 'react';
import { TemplateType, Language } from '../types';
import { translations } from '../translations';

interface Props {
  current: TemplateType;
  onChange: (t: TemplateType) => void;
  lang: Language;
}

const Icons = {
  Modern: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>,
  Executive: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
};

const TemplateSelector: React.FC<Props> = ({ current, onChange, lang }) => {
  const t = translations[lang];
  const templates: { id: TemplateType; label: string; icon: any }[] = [
    { id: 'modern', label: t.modern, icon: Icons.Modern },
    { id: 'executive', label: t.executive, icon: Icons.Executive }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
         <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center">
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/></svg>
         </div>
         <h3 className="font-black text-slate-800 text-[10px] uppercase tracking-[0.2em]">{t.template}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {templates.map((tmp) => (
          <button
            key={tmp.id}
            onClick={() => onChange(tmp.id)}
            className={`flex flex-col items-center gap-3 p-4 rounded-2xl transition-all border text-center ${
              current === tmp.id 
                ? 'border-slate-900 bg-slate-50 text-slate-900 shadow-sm' 
                : 'border-slate-200 bg-white text-slate-400 hover:border-slate-300'
            }`}
          >
            <tmp.icon />
            <span className="text-[10px] font-black uppercase tracking-tight">{tmp.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
