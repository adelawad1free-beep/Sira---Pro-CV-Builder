
import React, { useState, useEffect, useRef } from 'react';
import { CVData, Language, TemplateType } from './types';
import { SAMPLE_DATA_AR, SAMPLE_DATA_EN } from './constants';
import { translations } from './translations';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import TemplateSelector from './components/TemplateSelector';
import SpecialtySelector from './components/SpecialtySelector';
import ColorPicker from './components/ColorPicker';
import * as htmlToImage from 'html-to-image';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [template, setTemplate] = useState<TemplateType>('modern');
  const [themeColor, setThemeColor] = useState<string>('#4f46e5');
  // Initialize with sample data directly instead of empty data
  const [data, setData] = useState<CVData>(lang === 'ar' ? SAMPLE_DATA_AR : SAMPLE_DATA_EN);
  const [isCapturing, setIsCapturing] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Switch data if language changes and data is still one of the defaults
    setData(lang === 'ar' ? SAMPLE_DATA_AR : SAMPLE_DATA_EN);
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const downloadPDF = () => {
    window.print();
  };

  const downloadImage = async () => {
    if (!previewRef.current) return;
    
    setIsCapturing(true);
    try {
      const node = previewRef.current.querySelector('.print-container') as HTMLElement;
      if (!node) return;

      const originalTransform = node.style.transform;
      node.style.transform = 'none';

      const dataUrl = await htmlToImage.toPng(node, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      });

      node.style.transform = originalTransform;

      const link = document.createElement('a');
      link.download = `CV-${data.personalInfo.fullName || 'Sira'}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Error capturing image:', err);
    } finally {
      setIsCapturing(false);
    }
  };

  const handleSpecialtySelect = (specialtyData: CVData) => {
    setData(specialtyData);
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
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg transition-colors"
              style={{ backgroundColor: themeColor }}
            >س</div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black text-indigo-950 leading-none">{t.title}</h1>
              <p className="text-[10px] text-indigo-500 font-black uppercase tracking-[0.2em] mt-1" style={{ color: themeColor }}>{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-2xl text-xs font-black text-slate-600 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200"
            >
              {t.language}
            </button>
            
            <div className="w-px h-6 bg-slate-200 mx-1"></div>

            <button 
              onClick={downloadImage}
              disabled={isCapturing}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-black bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 transition-all disabled:opacity-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 00-2 2z" /></svg>
              {isCapturing ? '...' : t.downloadImage}
            </button>

            <button 
              onClick={downloadPDF}
              className="px-6 py-2.5 rounded-2xl text-xs font-black text-white shadow-xl transition-all active:scale-95 flex items-center gap-2"
              style={{ backgroundColor: themeColor, boxShadow: `0 10px 15px -3px ${themeColor}44` }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              {t.downloadPDF}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
          {/* Left Column: Editor */}
          <div className="space-y-8" id="cv-editor">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                 <h2 className="text-2xl font-black text-slate-900">صمّم هويتك المهنية</h2>
                 <p className="text-slate-500 text-sm font-medium">تحكم بالألوان، القوالب، والبيانات لخلق انطباع لا ينسى.</p>
              </div>
              {/* Removed Fill Sample Button as requested */}
            </div>
            
            <ColorPicker color={themeColor} onChange={setThemeColor} lang={lang} />
            <SpecialtySelector lang={lang} onSelect={handleSpecialtySelect} themeColor={themeColor} />
            <TemplateSelector current={template} onChange={setTemplate} lang={lang} />
            <CVForm data={data} setData={setData} lang={lang} />
          </div>

          {/* Right Column: Preview */}
          <div className="sticky top-32 flex justify-center no-print" ref={previewRef}>
            <div className="scale-[0.55] lg:scale-[0.85] xl:scale-[0.65] 2xl:scale-[0.9] transition-transform origin-top">
               <div className="relative group">
                 <div 
                   className="absolute -inset-10 rounded-[4rem] blur-3xl opacity-20 transition-all duration-1000"
                   style={{ backgroundColor: themeColor }}
                 ></div>
                 <CVPreview data={data} lang={lang} template={template} themeColor={themeColor} />
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Action Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 md:hidden no-print z-50 flex gap-3">
         <button 
          onClick={downloadImage}
          disabled={isCapturing}
          className="bg-white text-slate-800 px-6 py-4 rounded-full font-black shadow-2xl flex items-center gap-2 active:scale-90 transition-transform border border-slate-200"
         >
           🖼️
         </button>
         <button 
          onClick={downloadPDF}
          className="text-white px-10 py-4 rounded-full font-black shadow-2xl flex items-center gap-3 active:scale-90 transition-transform"
          style={{ backgroundColor: themeColor }}
         >
           {t.downloadPDF} 📄
         </button>
      </div>
      
      <footer className="mt-12 py-12 border-t border-slate-100 text-center no-print">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.3em]">Premium Design by Sira Team</p>
      </footer>
    </div>
  );
};

export default App;
