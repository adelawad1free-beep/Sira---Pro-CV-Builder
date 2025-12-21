
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

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [template, setTemplate] = useState<TemplateType>('modern');
  const [themeColor, setThemeColor] = useState<string>('#4f46e5');
  const [fontFamily, setFontFamily] = useState<string>('Cairo');
  const [data, setData] = useState<CVData>(lang === 'ar' ? SAMPLE_DATA_AR : SAMPLE_DATA_EN);
  const [activePanel, setActivePanel] = useState<ActivePanel>('content');
  const [isCapturing, setIsCapturing] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
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
    <div className={`h-screen flex flex-col bg-slate-100/50 overflow-hidden ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`} style={{ fontFamily }}>
      {/* Top Navbar */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between z-50 shadow-sm no-print">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-lg" style={{ backgroundColor: themeColor }}>س</div>
          <div className="hidden sm:block leading-tight">
            <h1 className="text-sm font-black text-slate-900">{t.title}</h1>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{t.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleLanguage} className="text-xs font-black text-slate-500 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors">
            {t.language}
          </button>
          <div className="h-6 w-px bg-slate-200"></div>
          <div className="flex gap-2">
            <button 
              onClick={downloadImage}
              disabled={isCapturing}
              className="px-4 py-2 rounded-xl text-xs font-black bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              🖼️ <span className="hidden md:inline">{t.downloadImage}</span>
            </button>
            <button 
              onClick={downloadPDF}
              className="px-5 py-2 rounded-xl text-xs font-black text-white shadow-lg transition-all active:scale-95 flex items-center gap-2"
              style={{ backgroundColor: themeColor }}
            >
              📄 <span>{t.downloadPDF}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Right Sidebar: Controls */}
        <aside className="w-full md:w-[420px] bg-white border-x border-slate-200 flex flex-col z-40 no-print shadow-2xl md:shadow-none">
          {/* Sidebar Tabs */}
          <div className="flex border-b bg-slate-50/50 p-1">
            <button 
              onClick={() => setActivePanel('content')}
              className={`flex-1 py-3 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2 ${activePanel === 'content' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              📝 <span>{lang === 'ar' ? 'البيانات' : 'Content'}</span>
            </button>
            <button 
              onClick={() => setActivePanel('design')}
              className={`flex-1 py-3 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2 ${activePanel === 'design' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              🎨 <span>{lang === 'ar' ? 'التصميم' : 'Design'}</span>
            </button>
            <button 
              onClick={() => setActivePanel('quick')}
              className={`flex-1 py-3 text-xs font-black rounded-xl transition-all flex items-center justify-center gap-2 ${activePanel === 'quick' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              ⚡ <span>{lang === 'ar' ? 'تعبئة' : 'Quick'}</span>
            </button>
          </div>

          {/* Panel Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
            {activePanel === 'content' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <CVForm data={data} setData={setData} lang={lang} />
              </div>
            )}
            {activePanel === 'design' && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 pb-10">
                <TemplateSelector current={template} onChange={setTemplate} lang={lang} />
                <ColorPicker color={themeColor} onChange={setThemeColor} lang={lang} />
                <FontSelector currentFont={fontFamily} onChange={setFontFamily} lang={lang} />
              </div>
            )}
            {activePanel === 'quick' && (
              <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                <SpecialtySelector lang={lang} onSelect={handleSpecialtySelect} themeColor={themeColor} />
              </div>
            )}
          </div>
        </aside>

        {/* Center Canvas: Preview */}
        <main className="flex-1 overflow-auto bg-slate-200/50 flex justify-center py-12 px-4 scroll-smooth no-scrollbar relative">
          <div 
            ref={previewRef}
            className="transition-all duration-500 ease-out transform origin-top scale-[0.5] sm:scale-[0.7] md:scale-[0.6] lg:scale-[0.8] xl:scale-[0.9] 2xl:scale-[1.0]"
          >
            <div className="relative group">
              {/* Soft Ambient Glow */}
              <div 
                className="absolute -inset-10 rounded-[4rem] blur-[100px] opacity-10 transition-all duration-1000"
                style={{ backgroundColor: themeColor }}
              ></div>
              <CVPreview 
                data={data} 
                lang={lang} 
                template={template} 
                themeColor={themeColor} 
                fontFamily={fontFamily}
              />
            </div>
          </div>
        </main>

      </div>
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 right-6 left-6 z-50 flex gap-2 no-print">
          <button 
            onClick={() => setActivePanel(activePanel === 'content' ? 'design' : 'content')}
            className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-xs shadow-2xl flex items-center justify-center gap-2"
          >
            {activePanel === 'content' ? '🎨 تخصيص المظهر' : '📝 تعديل البيانات'}
          </button>
      </div>
    </div>
  );
};

export default App;
