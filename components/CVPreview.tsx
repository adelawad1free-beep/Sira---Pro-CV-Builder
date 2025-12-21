
import React from 'react';
import { CVData, Language, TemplateType } from '../types';

interface Props {
  data: CVData;
  lang: Language;
  template: TemplateType;
  themeColor: string;
}

const CVPreview: React.FC<Props> = ({ data, lang, template, themeColor }) => {
  const isRtl = lang === 'ar';

  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const renderModern = () => (
    <div className={`flex flex-col h-full ${isRtl ? 'text-right' : 'text-left'}`}>
      {/* Header with Luxury Gradient */}
      <header 
        className="p-12 flex items-center gap-12 rounded-t-lg relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}dd 100%)`,
          color: 'white'
        }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        
        {data.personalInfo.image && (
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <img src={data.personalInfo.image} className="w-36 h-36 rounded-3xl border-4 border-white/30 shadow-2xl relative z-10 object-cover" alt="Profile" />
          </div>
        )}
        
        <div className="flex-1 relative z-10">
          <h1 className="text-5xl font-black mb-2 uppercase tracking-tight">{data.personalInfo.fullName || 'Full Name'}</h1>
          <div className="w-20 h-1.5 bg-white/40 mb-4 rounded-full"></div>
          <p className="text-xl text-white/90 font-bold tracking-wide uppercase opacity-90">{data.personalInfo.jobTitle || 'Job Title'}</p>
          <div className="mt-6 flex flex-wrap gap-5 text-xs text-white/80 font-medium">
             <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">📞 {data.personalInfo.phone}</span>
             <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">✉️ {data.personalInfo.email}</span>
             <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">📍 {data.personalInfo.location}</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 p-12 gap-12 bg-white">
        <aside className="w-1/3 space-y-10">
          <section>
            <h4 className="font-black text-sm uppercase tracking-widest pb-3 mb-6 relative" style={{ color: themeColor }}>
              Skills
              <div className="absolute bottom-0 left-0 w-12 h-1 rounded-full" style={{ backgroundColor: themeColor }}></div>
            </h4>
            <div className="space-y-4">
              {data.skills.map(s => (
                <div key={s.id} className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-black text-gray-700 uppercase tracking-tighter">
                    <span>{s.name}</span>
                    <span style={{ color: themeColor }}>{s.level}/5</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${(s.level / 5) * 100}%`, backgroundColor: themeColor }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="font-black text-sm uppercase tracking-widest pb-3 mb-6 relative" style={{ color: themeColor }}>
              Languages
              <div className="absolute bottom-0 left-0 w-12 h-1 rounded-full" style={{ backgroundColor: themeColor }}></div>
            </h4>
            <div className="space-y-3">
              {data.languages.map((l, i) => (
                <div key={i} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-xl">
                  <span className="font-bold text-gray-800 text-xs">{l.name}</span>
                  <span className="font-black text-[9px] uppercase px-2 py-0.5 rounded-md" style={{ backgroundColor: `${themeColor}15`, color: themeColor }}>{l.level}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <main className="flex-1 space-y-12 border-l border-gray-100 pl-12">
          <section>
             <h3 className="text-xl font-black mb-5 uppercase tracking-wider flex items-center gap-3" style={{ color: themeColor }}>
               <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs" style={{ backgroundColor: themeColor }}>👤</span>
               Professional Profile
             </h3>
             <p className="text-gray-600 leading-relaxed text-sm text-justify font-medium">{data.personalInfo.summary}</p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-8 uppercase tracking-wider flex items-center gap-3" style={{ color: themeColor }}>
              <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs" style={{ backgroundColor: themeColor }}>💼</span>
              Work Experience
            </h3>
            <div className="space-y-10">
              {data.experience.map(exp => (
                <div key={exp.id} className="relative pl-8 border-l-2" style={{ borderColor: `${themeColor}22` }}>
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-white shadow-sm" style={{ backgroundColor: themeColor }}></div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-black text-gray-900 text-base">{exp.position}</h4>
                    <span className="text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: `${themeColor}10`, color: themeColor }}>{exp.startDate} — {exp.endDate}</span>
                  </div>
                  <p className="font-black text-xs mb-4 uppercase tracking-wide opacity-70" style={{ color: themeColor }}>{exp.company}</p>
                  <p className="text-sm text-gray-500 leading-loose text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-black mb-6 uppercase tracking-wider flex items-center gap-3" style={{ color: themeColor }}>
               <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs" style={{ backgroundColor: themeColor }}>🎓</span>
               Education
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {data.education.map(edu => (
                <div key={edu.id} className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-black text-gray-900 text-sm uppercase">{edu.degree}</h4>
                    <span className="text-[10px] text-gray-400 font-black">{edu.startDate} — {edu.endDate}</span>
                  </div>
                  <p className="font-bold text-xs" style={{ color: themeColor }}>{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <footer className="h-4 w-full" style={{ backgroundColor: themeColor }}></footer>
    </div>
  );

  const renderCreative = () => (
    <div className={`flex h-full ${isRtl ? 'text-right' : 'text-left'}`}>
      {/* Dynamic Side Bar */}
      <aside className="w-80 h-full p-10 flex flex-col gap-10" style={{ backgroundColor: themeColor, color: 'white' }}>
        <div className="flex flex-col items-center gap-6">
          {data.personalInfo.image && (
            <div className="w-44 h-44 rounded-full border-8 border-white/20 p-1 shadow-2xl relative">
              <img src={data.personalInfo.image} className="w-full h-full rounded-full object-cover shadow-inner" alt="Profile" />
            </div>
          )}
          <div className="text-center">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-1">{data.personalInfo.fullName}</h2>
            <p className="text-[10px] font-bold uppercase tracking-widest bg-black/20 py-1 px-3 rounded-full">{data.personalInfo.jobTitle}</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h4 className="font-black uppercase text-xs tracking-[0.3em] mb-4 border-b border-white/30 pb-2">Contacts</h4>
            <div className="space-y-3 text-[11px] font-bold">
              <p className="flex items-center gap-3"><span className="opacity-60">PH:</span> {data.personalInfo.phone}</p>
              <p className="flex items-center gap-3"><span className="opacity-60">EM:</span> {data.personalInfo.email}</p>
              <p className="flex items-center gap-3"><span className="opacity-60">LC:</span> {data.personalInfo.location}</p>
            </div>
          </section>

          <section>
             <h4 className="font-black uppercase text-xs tracking-[0.3em] mb-4 border-b border-white/30 pb-2">Skills</h4>
             <div className="flex flex-wrap gap-2">
                {data.skills.map(s => (
                  <span key={s.id} className="bg-white/10 px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest border border-white/20">{s.name}</span>
                ))}
             </div>
          </section>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-white p-12 space-y-12">
        <section>
          <h3 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-4">
             About
             <div className="flex-1 h-px bg-gray-100"></div>
          </h3>
          <p className="text-gray-500 leading-relaxed text-sm font-medium">{data.personalInfo.summary}</p>
        </section>

        <section>
          <h3 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-4">
             Experience
             <div className="flex-1 h-px bg-gray-100"></div>
          </h3>
          <div className="space-y-10">
            {data.experience.map(exp => (
              <div key={exp.id} className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg font-black text-gray-800 uppercase tracking-tight group-hover:text-indigo-600 transition-colors" style={{ color: themeColor }}>{exp.position}</h4>
                  <span className="text-[10px] font-black text-gray-300">{exp.startDate} / {exp.endDate}</span>
                </div>
                <p className="font-black text-[11px] uppercase tracking-widest text-gray-400 mb-3">{exp.company}</p>
                <p className="text-sm text-gray-600 leading-relaxed text-justify">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-3xl font-black text-gray-900 mb-8 flex items-center gap-4">
             Education
             <div className="flex-1 h-px bg-gray-100"></div>
          </h3>
          <div className="grid grid-cols-2 gap-8">
            {data.education.map(edu => (
               <div key={edu.id}>
                  <p className="font-black text-gray-800 text-sm uppercase">{edu.degree}</p>
                  <p className="text-xs font-bold text-gray-400 mb-1">{edu.institution}</p>
                  <p className="text-[10px] font-black" style={{ color: themeColor }}>{edu.startDate} - {edu.endDate}</p>
               </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );

  const renderRoyal = () => (
    <div className={`p-16 bg-white h-full font-serif ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="text-center border-b-8 mb-12 pb-12" style={{ borderColor: themeColor }}>
        <h1 className="text-6xl font-black text-gray-900 mb-4 tracking-tighter uppercase">{data.personalInfo.fullName}</h1>
        <div className="flex justify-center flex-wrap gap-6 text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] opacity-70">
           <span>{data.personalInfo.email}</span>
           <span>•</span>
           <span>{data.personalInfo.phone}</span>
           <span>•</span>
           <span>{data.personalInfo.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-12 text-center px-16">
          <p className="text-gray-800 leading-loose italic text-lg tracking-tight font-medium opacity-80 underline decoration-gray-100 underline-offset-8">
            "{data.personalInfo.summary}"
          </p>
        </div>

        <div className="col-span-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-xs font-black text-gray-900 uppercase tracking-[0.5em]">{isRtl ? 'الخبرة العملية' : 'Professional History'}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="space-y-12">
            {data.experience.map(exp => (
              <div key={exp.id} className="text-center">
                <div className="flex flex-col items-center mb-4">
                  <h4 className="text-xl font-black text-gray-900 mb-1 uppercase tracking-tight">{exp.position}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: themeColor }}>{exp.company}</p>
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">{exp.startDate} — {exp.endDate}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 pt-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gray-200"></div>
            <h2 className="text-xs font-black text-gray-900 uppercase tracking-[0.5em]">{isRtl ? 'التعليم والمهارات' : 'Credentials & Mastery'}</h2>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-2 gap-16 text-center">
              <div className="space-y-6">
                {data.education.map(edu => (
                  <div key={edu.id}>
                    <p className="font-black text-base uppercase text-gray-800">{edu.degree}</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{edu.institution}, {edu.startDate}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {data.skills.map(s => (
                  <span key={s.id} className="text-[9px] font-black border-2 px-4 py-1.5 uppercase tracking-widest rounded-full" style={{ borderColor: `${themeColor}33`, color: themeColor }}>{s.name}</span>
                ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div 
      className={`print-container bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg mx-auto overflow-hidden min-h-[1123px] w-[794px] transform origin-top`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {template === 'modern' ? renderModern() : template === 'minimal' ? renderCreative() : renderRoyal()}
    </div>
  );
};

export default CVPreview;
