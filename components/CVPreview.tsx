
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

  const SectionTitle = ({ children, icon }: { children: React.ReactNode, icon?: string }) => (
    <h3 className="text-lg font-black mb-6 uppercase tracking-wider flex items-center gap-3" style={{ color: themeColor }}>
      {icon && <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs" style={{ backgroundColor: themeColor }}>{icon}</span>}
      {children}
      <div className="flex-1 h-px bg-slate-100"></div>
    </h3>
  );

  // 1. MODERN: Top Gradient Header
  const renderModern = () => (
    <div className={`flex flex-col h-full bg-white`}>
      <header className="p-12 text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${themeColor} 0%, ${themeColor}cc 100%)` }}>
        <div className="flex items-center gap-10 relative z-10">
          {data.personalInfo.image && <img src={data.personalInfo.image} className="w-32 h-32 rounded-2xl border-4 border-white/30 shadow-2xl object-cover" />}
          <div>
            <h1 className="text-4xl font-black mb-2 uppercase">{data.personalInfo.fullName}</h1>
            <p className="text-lg font-bold opacity-90">{data.personalInfo.jobTitle}</p>
            <div className="mt-4 flex flex-wrap gap-4 text-[10px] font-bold">
               <span className="bg-black/10 px-3 py-1 rounded-full">{data.personalInfo.email}</span>
               <span className="bg-black/10 px-3 py-1 rounded-full">{data.personalInfo.phone}</span>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 p-12 gap-12">
        <aside className="w-1/3 space-y-10">
          <section>
            <h4 className="font-black text-xs uppercase mb-4 border-b-2 pb-2" style={{ borderColor: themeColor, color: themeColor }}>Skills</h4>
            <div className="space-y-3">{data.skills.map(s => <div key={s.id} className="text-xs font-bold text-slate-700">{s.name}</div>)}</div>
          </section>
        </aside>
        <main className="flex-1 space-y-10">
          <section><SectionTitle icon="👤">Profile</SectionTitle><p className="text-sm text-slate-600 leading-relaxed">{data.personalInfo.summary}</p></section>
          <section><SectionTitle icon="💼">Experience</SectionTitle>
            <div className="space-y-8">{data.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between font-black text-slate-800 mb-1"><span>{exp.position}</span><span className="text-[10px] opacity-50">{exp.startDate} - {exp.endDate}</span></div>
                <div className="text-xs font-bold mb-2" style={{ color: themeColor }}>{exp.company}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{exp.description}</p>
              </div>
            ))}</div>
          </section>
        </main>
      </div>
    </div>
  );

  // 2. CREATIVE: Bold Side Column
  const renderCreative = () => (
    <div className="flex h-full bg-white">
      <aside className="w-72 h-full text-white p-10 space-y-10" style={{ backgroundColor: themeColor }}>
        {data.personalInfo.image && <img src={data.personalInfo.image} className="w-full aspect-square rounded-full border-8 border-white/10 object-cover shadow-2xl" />}
        <section>
          <h4 className="text-xs font-black uppercase tracking-widest mb-4 opacity-60">Contact</h4>
          <div className="space-y-2 text-[11px] font-bold">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            <p>{data.personalInfo.location}</p>
          </div>
        </section>
        <section>
          <h4 className="text-xs font-black uppercase tracking-widest mb-4 opacity-60">Expertise</h4>
          <div className="flex flex-wrap gap-2">{data.skills.map(s => <span key={s.id} className="bg-white/10 px-2 py-1 rounded text-[9px] border border-white/20 uppercase">{s.name}</span>)}</div>
        </section>
      </aside>
      <main className="flex-1 p-16 space-y-12">
        <div>
          <h1 className="text-5xl font-black text-slate-900 mb-2">{data.personalInfo.fullName}</h1>
          <h2 className="text-xl font-bold uppercase tracking-widest" style={{ color: themeColor }}>{data.personalInfo.jobTitle}</h2>
        </div>
        <section><p className="text-slate-500 font-medium leading-loose italic">"{data.personalInfo.summary}"</p></section>
        <section><SectionTitle>Experience</SectionTitle>
          <div className="space-y-10">{data.experience.map(exp => (
            <div key={exp.id} className="relative pl-6 border-l-2" style={{ borderColor: `${themeColor}33` }}>
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full" style={{ backgroundColor: themeColor }}></div>
              <h4 className="font-black text-slate-800">{exp.position}</h4>
              <p className="text-xs font-bold mb-2" style={{ color: themeColor }}>{exp.company} | {exp.startDate} - {exp.endDate}</p>
              <p className="text-sm text-slate-500">{exp.description}</p>
            </div>
          ))}</div>
        </section>
      </main>
    </div>
  );

  // 3. EXECUTIVE: Solid Header Bar + Clean Sections
  const renderExecutive = () => (
    <div className="h-full bg-white flex flex-col">
      <div className="h-6 w-full" style={{ backgroundColor: themeColor }}></div>
      <header className="px-16 py-12 flex justify-between items-end border-b-4" style={{ borderColor: themeColor }}>
        <div>
          <h1 className="text-4xl font-black text-slate-900 mb-1">{data.personalInfo.fullName}</h1>
          <p className="text-lg font-bold text-slate-400 uppercase tracking-widest">{data.personalInfo.jobTitle}</p>
        </div>
        <div className="text-right text-[10px] font-black text-slate-500 uppercase tracking-tighter">
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phone}</p>
        </div>
      </header>
      <div className="flex-1 px-16 py-12 grid grid-cols-12 gap-12">
        <div className="col-span-8 space-y-12">
          <section><SectionTitle>Professional Summary</SectionTitle><p className="text-sm text-slate-700 leading-relaxed font-medium">{data.personalInfo.summary}</p></section>
          <section><SectionTitle>Experience</SectionTitle>
            <div className="space-y-8">{data.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between mb-1"><h4 className="font-black text-slate-900 text-base">{exp.position}</h4><span className="text-[10px] font-bold text-slate-400">{exp.startDate} - {exp.endDate}</span></div>
                <p className="text-xs font-black uppercase mb-3" style={{ color: themeColor }}>{exp.company}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}</div>
          </section>
        </div>
        <div className="col-span-4 space-y-12">
          <section><h4 className="font-black text-xs uppercase mb-4" style={{ color: themeColor }}>Top Skills</h4>
            <div className="space-y-4">{data.skills.map(s => (
              <div key={s.id} className="space-y-1">
                <div className="flex justify-between text-[9px] font-black"><span>{s.name}</span><span>{s.level}/5</span></div>
                <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden"><div className="h-full" style={{ width: `${(s.level/5)*100}%`, backgroundColor: themeColor }}></div></div>
              </div>
            ))}</div>
          </section>
          <section><h4 className="font-black text-xs uppercase mb-4" style={{ color: themeColor }}>Education</h4>
            {data.education.map(edu => (
              <div key={edu.id} className="mb-4"><p className="text-xs font-black text-slate-800">{edu.degree}</p><p className="text-[10px] text-slate-400">{edu.institution}</p></div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );

  // 4. GEOMETRIC: Angled Accent Header
  const renderGeometric = () => (
    <div className="h-full bg-white relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-[50%] h-64 opacity-10 -rotate-12 translate-x-20 -translate-y-20" style={{ backgroundColor: themeColor }}></div>
      <header className="p-16 relative z-10">
        <div className="flex items-center gap-10">
          <div className="w-40 h-40 shrink-0 relative">
             <div className="absolute inset-0 rotate-6 rounded-[2.5rem]" style={{ backgroundColor: `${themeColor}22` }}></div>
             {data.personalInfo.image && <img src={data.personalInfo.image} className="w-full h-full relative z-10 rounded-[2.5rem] object-cover shadow-xl" />}
          </div>
          <div>
            <h1 className="text-5xl font-black text-slate-900 mb-2">{data.personalInfo.fullName}</h1>
            <div className="inline-block px-4 py-1 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-lg" style={{ backgroundColor: themeColor }}>{data.personalInfo.jobTitle}</div>
            <div className="mt-6 flex gap-6 text-[11px] font-bold text-slate-400">
               <span>{data.personalInfo.email}</span>
               <span>{data.personalInfo.phone}</span>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 px-16 pb-16 grid grid-cols-12 gap-16">
         <div className="col-span-7 space-y-12">
            <section><SectionTitle>About Me</SectionTitle><p className="text-sm text-slate-600 leading-relaxed font-medium">{data.personalInfo.summary}</p></section>
            <section><SectionTitle>Key Experience</SectionTitle>
              {data.experience.map(exp => (
                <div key={exp.id} className="mb-8 p-6 rounded-3xl bg-slate-50 border border-slate-100 transition-hover hover:border-indigo-100">
                   <h4 className="font-black text-slate-900">{exp.position}</h4>
                   <p className="text-xs font-bold text-slate-400 mb-3">{exp.company} | {exp.startDate} - {exp.endDate}</p>
                   <p className="text-xs text-slate-500">{exp.description}</p>
                </div>
              ))}
            </section>
         </div>
         <div className="col-span-5 space-y-12 pt-4">
            <section className="p-8 rounded-[3rem] text-white" style={{ backgroundColor: themeColor }}>
               <h4 className="font-black text-sm uppercase mb-6 border-b border-white/20 pb-2">Skill Set</h4>
               <div className="flex flex-wrap gap-2">{data.skills.map(s => <span key={s.id} className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-bold border border-white/20">{s.name}</span>)}</div>
            </section>
            <section><SectionTitle>Languages</SectionTitle>
               <div className="space-y-2">{data.languages.map((l, i) => <div key={i} className="flex justify-between items-center bg-slate-50 px-4 py-2 rounded-2xl"><span className="text-xs font-black">{l.name}</span><span className="text-[10px] font-bold opacity-40">{l.level}</span></div>)}</div>
            </section>
         </div>
      </div>
    </div>
  );

  // 5. SIDEBAR: Modern Minimal with Vertical Accent
  const renderSidebar = () => (
    <div className="h-full bg-slate-50 flex">
       <div className="w-16 h-full" style={{ backgroundColor: themeColor }}></div>
       <div className="flex-1 bg-white p-16 shadow-inner flex flex-col">
          <header className="mb-16">
             <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-2">{data.personalInfo.fullName}</h1>
             <p className="text-xl font-bold uppercase tracking-widest text-slate-300">{data.personalInfo.jobTitle}</p>
             <div className="mt-8 h-1 w-24 rounded-full" style={{ backgroundColor: themeColor }}></div>
          </header>
          <div className="grid grid-cols-2 gap-16">
             <section className="space-y-6">
                <SectionTitle>Summary</SectionTitle>
                <p className="text-sm text-slate-500 leading-loose">{data.personalInfo.summary}</p>
                <div className="pt-8 space-y-8">
                   <SectionTitle>Experience</SectionTitle>
                   {data.experience.map(exp => (
                     <div key={exp.id}>
                        <h4 className="font-black text-slate-800 uppercase text-sm">{exp.position}</h4>
                        <p className="text-[10px] font-bold mb-2" style={{ color: themeColor }}>{exp.company}</p>
                        <p className="text-xs text-slate-400">{exp.description}</p>
                     </div>
                   ))}
                </div>
             </section>
             <section className="space-y-12">
                <div>
                   <SectionTitle>Skills</SectionTitle>
                   <div className="grid grid-cols-2 gap-4">{data.skills.map(s => <div key={s.id} className="text-xs font-black text-slate-700 p-3 bg-slate-50 rounded-xl border border-slate-100">{s.name}</div>)}</div>
                </div>
                <div>
                   <SectionTitle>Contact</SectionTitle>
                   <div className="space-y-3 text-xs font-bold text-slate-400">
                      <p>📞 {data.personalInfo.phone}</p>
                      <p>✉️ {data.personalInfo.email}</p>
                      <p>📍 {data.personalInfo.location}</p>
                   </div>
                </div>
             </section>
          </div>
       </div>
    </div>
  );

  // 6. PROFESSIONAL: Standard Grid with Color Icons
  const renderProfessional = () => (
    <div className="h-full bg-white p-12">
      <div className="border-4 p-8 rounded-[2rem] h-full flex flex-col" style={{ borderColor: `${themeColor}11` }}>
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-1">{data.personalInfo.fullName}</h1>
            <p className="text-lg font-bold uppercase tracking-widest" style={{ color: themeColor }}>{data.personalInfo.jobTitle}</p>
          </div>
          {data.personalInfo.image && <img src={data.personalInfo.image} className="w-24 h-24 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />}
        </header>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 flex-1">
           <div className="md:col-span-4 space-y-10">
              <section><h4 className="font-black text-xs uppercase mb-4 flex items-center gap-2"><span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: themeColor }}></span>Contact</h4>
                <div className="space-y-4 text-xs font-medium text-slate-500">
                   <div className="p-3 bg-slate-50 rounded-2xl">Email: <span className="font-bold text-slate-800 block">{data.personalInfo.email}</span></div>
                   <div className="p-3 bg-slate-50 rounded-2xl">Phone: <span className="font-bold text-slate-800 block">{data.personalInfo.phone}</span></div>
                </div>
              </section>
              <section><h4 className="font-black text-xs uppercase mb-4 flex items-center gap-2"><span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: themeColor }}></span>Skills</h4>
                 <div className="flex flex-wrap gap-2">{data.skills.map(s => <span key={s.id} className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase">{s.name}</span>)}</div>
              </section>
           </div>
           <div className="md:col-span-8 space-y-10 border-l border-slate-100 pl-10">
              <section><SectionTitle>Career Summary</SectionTitle><p className="text-sm text-slate-600 leading-relaxed">{data.personalInfo.summary}</p></section>
              <section><SectionTitle>Employment History</SectionTitle>
                 <div className="space-y-8">{data.experience.map(exp => (
                   <div key={exp.id}>
                      <div className="flex justify-between mb-1"><h4 className="font-black text-slate-800">{exp.position}</h4><span className="text-[10px] font-bold text-slate-400 uppercase">{exp.startDate} - {exp.endDate}</span></div>
                      <p className="text-xs font-bold mb-3" style={{ color: themeColor }}>{exp.company}</p>
                      <p className="text-xs text-slate-500 leading-relaxed">{exp.description}</p>
                   </div>
                 ))}</div>
              </section>
           </div>
        </div>
      </div>
    </div>
  );

  const getTemplate = () => {
    switch (template) {
      case 'modern': return renderModern();
      case 'creative': return renderCreative();
      case 'executive': return renderExecutive();
      case 'geometric': return renderGeometric();
      case 'sidebar': return renderSidebar();
      case 'professional': return renderProfessional();
      default: return renderModern();
    }
  };

  return (
    <div 
      className={`print-container bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg mx-auto overflow-hidden min-h-[1123px] w-[794px] transform origin-top`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {getTemplate()}
    </div>
  );
};

export default CVPreview;
