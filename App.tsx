
import React, { useState, useEffect } from 'react';
import { CVData, Language, TemplateType } from './types';
import { INITIAL_CV_DATA, SAMPLE_DATA_AR, SAMPLE_DATA_EN } from './constants';
import { translations } from './translations';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import TemplateSelector from './components/TemplateSelector';
import SpecialtySelector from './components/SpecialtySelector';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [template, setTemplate] = useState<TemplateType>('modern');
  const [data, setData] = useState<CVData>(INITIAL_CV_DATA);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const handleFillSample = () => {
    setData(lang === 'ar' ? SAMPLE_DATA_AR : SAMPLE_DATA_EN);
  };

  const handleDownload = () => {
    window.print();
  };

  const handleSpecialtySelect = (specialtyData: CVData) => {
    setData(specialtyData);
    // Scroll smoothly to the form editor
    const editor = document.getElementById('cv-editor');
    if (editor) {
      editor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50/50 pb-20 transition-colors ${lang === 'ar' ? 'font-tajawal' : 'font-inter'}`}>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/50 px-6 py-4 no-print shadow-sm">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-indigo-200">س</div>
            <div>
              <h1 className="text-xl font-black text-indigo-950 leading-none">{t.title}</h1>
              <p className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.2em] mt-1">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={toggleLanguage}
              className="px-5 py-2.5 rounded-2xl text-xs font-black text-slate-600 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
            >
              {t.language}
            </button>
            <button 
              onClick={handleFillSample}
              className="hidden md:block px-5 py-2.5 rounded-2xl text-xs font-black bg-white text-amber-600 hover:bg-amber-50 border border-amber-100 shadow-sm transition-all"
            >
              ✨ {t.fillSample}
            </button>
            <div className="w-px h-6 bg-slate-200 mx-2 hidden md:block"></div>
            <button 
              onClick={handleDownload}
              className="px-8 py-3 rounded-2xl text-xs font-black bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all active:scale-95 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
              {t.download}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          {/* Left Column: Editor */}
          <div className="space-y-8" id="cv-editor">
            <div className="space-y-2">
               <h2 className="text-2xl font-black text-slate-900">صمّم مستقبلك المهني</h2>
               <p className="text-slate-500 text-sm font-medium">ابدأ باختيار تخصصك للحصول على نموذج متكامل، أو ابدأ من الصفر.</p>
            </div>
            
            <SpecialtySelector lang={lang} onSelect={handleSpecialtySelect} />

            <TemplateSelector current={template} onChange={setTemplate} lang={lang} />
            <CVForm data={data} setData={setData} lang={lang} />
          </div>

          {/* Right Column: Preview */}
          <div className="sticky top-32 flex justify-center no-print">
            <div className="scale-[0.55] lg:scale-[0.85] xl:scale-[0.65] 2xl:scale-[0.9] transition-transform origin-top">
               <div className="relative group">
                 <div className="absolute -inset-10 bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 rounded-[4rem] blur-3xl group-hover:from-indigo-500/30 transition-all"></div>
                 <CVPreview data={data} lang={lang} template={template} />
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Action Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:hidden no-print z-50">
         <button 
          onClick={handleDownload}
          className="bg-indigo-600 text-white px-10 py-5 rounded-full font-black shadow-2xl flex items-center gap-3 active:scale-90 transition-transform"
         >
           {t.download} 📄
         </button>
      </div>
      
      <footer className="mt-12 py-12 border-t border-slate-100 text-center no-print">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Built with Passion by Sira Team</p>
      </footer>
    </div>
  );
};

export default App;
