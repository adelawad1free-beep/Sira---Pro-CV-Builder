
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
  const templates: { id: TemplateType; label: string }[] = [
    { id: 'modern', label: t.modern },
    { id: 'creative', label: t.creative },
    { id: 'executive', label: t.executive },
    { id: 'geometric', label: t.geometric },
    { id: 'sidebar', label: t.sidebar },
    { id: 'professional', label: t.professional },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 no-print space-y-4">
      <div className="flex items-center gap-3 mb-2">
         <span className="text-xl">🖼️</span>
         <h3 className="font-black text-slate-800 text-sm uppercase tracking-wide">{t.template}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {templates.map((tmp) => (
          <button
            key={tmp.id}
            onClick={() => onChange(tmp.id)}
            className={`px-4 py-3 rounded-2xl text-xs font-black transition-all border text-center ${
              current === tmp.id 
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700 shadow-sm' 
                : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-300'
            }`}
          >
            {tmp.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
