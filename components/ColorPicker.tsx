
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';

interface Props {
  color: string;
  onChange: (color: string) => void;
  lang: Language;
}

const ColorPicker: React.FC<Props> = ({ color, onChange, lang }) => {
  const t = translations[lang];
  const colors = [
    '#4f46e5', // Indigo
    '#0ea5e9', // Sky
    '#10b981', // Emerald
    '#f43f5e', // Rose
    '#8b5cf6', // Violet
    '#f59e0b', // Amber
    '#0f172a', // Slate
    '#7c2d12', // Warm Orange
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 no-print space-y-4">
      <div className="flex items-center gap-3 mb-2">
         <span className="text-xl">🎨</span>
         <h3 className="font-black text-slate-800 text-sm uppercase tracking-wide">{t.themeColor}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`w-10 h-10 rounded-full transition-all duration-300 border-4 ${
              color === c ? 'border-white scale-125 shadow-lg' : 'border-transparent hover:scale-110'
            }`}
            style={{ backgroundColor: c, boxShadow: color === c ? `0 0 15px ${c}55` : 'none' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
