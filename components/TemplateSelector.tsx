
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
  const templates: { id: TemplateType; label: string; color: string }[] = [
    { id: 'modern', label: t.modern, color: 'bg-indigo-600' },
    { id: 'classic', label: t.classic, color: 'bg-gray-800' },
    { id: 'minimal', label: t.minimal, color: 'bg-emerald-600' },
  ];

  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-x-auto no-print">
      <span className="font-bold flex items-center shrink-0">{t.template}:</span>
      {templates.map((tmp) => (
        <button
          key={tmp.id}
          onClick={() => onChange(tmp.id)}
          className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 border ${
            current === tmp.id 
              ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-bold' 
              : 'border-gray-200 hover:border-indigo-300'
          }`}
        >
          <div className={`w-3 h-3 rounded-full ${tmp.color}`} />
          {tmp.label}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
