
import React from 'react';
import { TemplateType, Language } from '../types';
import { translations } from '../translations';

interface Props {
  current: TemplateType;
  onChange: (t: TemplateType) => void;
  lang: Language;
}

const TemplateSelector: React.FC<Props> = ({ current, onChange, lang }) => {
  const t = translations[lang];
  const templates: { id: TemplateType; label: string; icon: string }[] = [
    { id: 'modern', label: t.modern, icon: '📱' },
    { id: 'creative', label: t.creative, icon: '🎨' },
    { id: 'executive', label: t.executive, icon: '👔' },
    { id: 'geometric', label: t.geometric, icon: '📐' },
    { id: 'sidebar', label: t.sidebar, icon: '📑' },
    { id: 'professional', label: t.professional, icon: '🏢' },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 space-y-4">
      <div className="flex items-center gap-3">
         <span className="text-xl">🖼️</span>
         <h3 className="font-black text-slate-800 text-xs uppercase tracking-wide">{t.template}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {templates.map((tmp) => (
          <button
            key={tmp.id}
            onClick={() => onChange(tmp.id)}
            className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all border text-center ${
              current === tmp.id 
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm' 
                : 'border-slate-50 bg-slate-50/50 text-slate-500 hover:border-slate-200'
            }`}
          >
            <span className="text-xl">{tmp.icon}</span>
            <span className="text-[10px] font-black">{tmp.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
