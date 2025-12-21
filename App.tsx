
import React, { useState, useEffect, useRef } from 'react';
import { CVData, Language, TemplateType } from './types';
import { SAMPLE_DATA_AR, SAMPLE_DATA_EN } from './constants';
import { translations } from './translations';
import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';
import TemplateSelector from './components/TemplateSelector';
import SpecialtySelector from './components/SpecialtySelector';
import ColorPicker from './components/ColorPicker';
import FontSelector from './components/FontSelector';
import * as htmlToImage from 'html-to-image';

type ActivePanel = 'content' | 'design' | 'quick';

const Icons = {
  Content: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>,
  Design: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656l-1.172 1.172"/></svg>,
  Quick: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  Download: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>,
  Image: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [template, setTemplate] = useState<TemplateType>('modern');
  const [themeColor, setThemeColor] = useState<string>('#0f172a');
  const [fontFamily, setFontFamily] = useState<string>('Cairo');
  const [data, setData] = useState<CVData>(lang === 'ar' ? SAMPLE_DATA_AR : SAMPLE_DATA_EN);
  const [activePanel, setActivePanel] = useState<ActivePanel>('quick'); // Start with Quick Fill
  const [isCapturing, setIsCapturing] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    // We keep the internal state management, but won't apply it to the main body anymore
    if (lang === 'ar') setFontFamily('Cairo');
    else setFontFamily('Inter');
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
      const dataUrl = await htmlToImage.toPng(node, { quality: 1, pixelRatio: 2, backgroundColor: '#ffffff' });
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
    setActivePanel('content');
  };

  return (
    <div className={`min-h-screen bg-[#f1f5f9] flex flex-col overflow-x-hidden ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}>
      
      {/* Official Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between z-[100] no-print shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-xl shadow-md" style={{ backgroundColor: themeColor }}>س</div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-black text-slate-900 tracking-tight">{t.title}</h1>
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{t.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleLanguage} className="text-[11px] font-black text-slate-500 hover:text-slate-900 px-3 py-2 transition-colors">
            {t.language}
          </button>
          <div className="h-6 w-px bg-slate-200"></div>
          <div className="flex gap-2">
            <button 
              onClick={downloadImage}
              disabled={isCapturing}
              className="px-5 py-2.5 rounded-xl text-[11px] font-black bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <Icons.Image /> <span className="hidden md:inline">{t.downloadImage}</span>
            </button>
            <button 
              onClick={downloadPDF}
              className="px-6 py-2.5 rounded-xl text-[11px] font-black text-white shadow-xl transition-all flex items-center gap-2 active:scale-95"
              style={{ backgroundColor: themeColor }}
            >
              <Icons.Download /> <span>{t.downloadPDF}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex flex-col items-center justify-start pt-24 pb-20 px-4">
        
        {/* Workspace - Reduced Gap between sheets */}
        <div className="w-full max-w-[1700px] flex flex-col xl:flex-row items-start justify-center gap-4 xl:gap-6 transition-all">
          
          {/* SHEET 1: Input Page */}
          <section className="flex-1 flex flex-col items-center gap-4 no-print">
            <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-slate-200 shadow-sm self-center">
              <div className="w-2 h-2 rounded-full bg-slate-900"></div>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">{lang === 'ar' ? 'محرر البيانات الرسمي' : 'Official Data Editor'}</span>
            </div>
            
            <div className="w-full max-w-[794px] h-[1123px] bg-white rounded-sm shadow-[0_30px_70px_-15px_rgba(0,0,0,0.1)] border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-left-8 duration-700">
              
              {/* Sharp Top Corners Nav (Tablet) */}
              <div className="p-0 bg-white border-b border-slate-100">
                <div className="bg-slate-50/80 rounded-b-[1.8rem] rounded-t-none p-2.5 flex items-center gap-2 border-b border-x border-slate-100 mx-5 mb-5">
                  <button 
                    onClick={() => setActivePanel('quick')}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[1.5rem] transition-all duration-300 ${activePanel === 'quick' ? 'bg-amber-500 text-white shadow-[0_8px_20px_-5px_rgba(245,158,11,0.4)]' : 'text-slate-400 hover:text-amber-600 hover:bg-white'}`}
                  >
                    <Icons.Quick />
                    <span className="text-[11px] font-black uppercase tracking-tight">{lang === 'ar' ? 'تعبئة' : 'Presets'}</span>
                  </button>

                  <button 
                    onClick={() => setActivePanel('design')}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[1.5rem] transition-all duration-300 ${activePanel === 'design' ? 'bg-indigo-600 text-white shadow-[0_8px_20px_-5px_rgba(79,70,229,0.4)]' : 'text-slate-400 hover:text-indigo-600 hover:bg-white'}`}
                  >
                    <Icons.Design />
                    <span className="text-[11px] font-black uppercase tracking-tight">{lang === 'ar' ? 'التصميم' : 'Style'}</span>
                  </button>

                  <button 
                    onClick={() => setActivePanel('content')}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[1.5rem] transition-all duration-300 ${activePanel === 'content' ? 'bg-blue-600 text-white shadow-[0_8px_20px_-5px_rgba(37,99,235,0.4)]' : 'text-slate-400 hover:text-blue-600 hover:bg-white'}`}
                  >
                    <Icons.Content />
                    <span className="text-[11px] font-black uppercase tracking-tight">{lang === 'ar' ? 'البيانات' : 'Details'}</span>
                  </button>
                </div>
              </div>

              {/* Scrollable Form Area */}
              <div className="flex-1 overflow-y-auto p-12 no-scrollbar scroll-smooth">
                <div className="mb-10 pb-6 border-b border-slate-50 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900 leading-none mb-3">
                      {activePanel === 'quick' && (lang === 'ar' ? 'نماذج جاهزة' : 'Auto Presets')}
                      {activePanel === 'design' && (lang === 'ar' ? 'تنسيق الهوية' : 'Identity Setup')}
                      {activePanel === 'content' && (lang === 'ar' ? 'تحرير المحتوى' : 'Edit Content')}
                    </h2>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Professional Certification Standard</p>
                  </div>
                </div>

                {activePanel === 'content' && <CVForm data={data} setData={setData} lang={lang} />}
                {activePanel === 'design' && (
                  <div className="space-y-12 animate-in fade-in duration-500">
                    <TemplateSelector current={template} onChange={setTemplate} lang={lang} />
                    <ColorPicker color={themeColor} onChange={setThemeColor} lang={lang} />
                    <FontSelector currentFont={fontFamily} onChange={setFontFamily} lang={lang} />
                  </div>
                )}
                {activePanel === 'quick' && <SpecialtySelector lang={lang} onSelect={handleSpecialtySelect} themeColor={themeColor} />}
              </div>
            </div>
          </section>

          {/* SHEET 2: Output Page */}
          <section className="flex-1 flex flex-col items-center gap-4">
             <div className="flex items-center gap-4 bg-white px-5 py-2 rounded-full border border-slate-200 shadow-sm self-center no-print">
               <div className="relative">
                 <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                 <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping"></div>
               </div>
               <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.3em]">{lang === 'ar' ? 'معاينة المستند المباشرة' : 'Live Document Preview'}</span>
             </div>
             
             <div 
              ref={previewRef}
              className="transition-all duration-700 ease-out shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-slate-200 rounded-sm overflow-hidden"
             >
                <CVPreview 
                  data={data} 
                  lang={lang} 
                  template={template} 
                  themeColor={themeColor} 
                  fontFamily={fontFamily}
                />
             </div>
          </section>

        </div>
      </main>

      <div className="fixed inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] z-[-1] opacity-40"></div>

      {/* Official Footer */}
      <footer className="py-12 border-t border-slate-200 bg-white no-print mt-auto">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-slate-900 text-white flex items-center justify-center font-black text-[10px]">س</div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em]">Sira Digital Resume Engine v5.5 Gold</p>
          </div>
          <div className="text-[11px] font-black text-slate-500 flex items-center gap-4">
            <span>كافة الحقوق محفوظة 2025</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
            <a href="mailto:adelawad1@gmail.com" className="hover:text-blue-600 transition-colors">adelawad1@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
