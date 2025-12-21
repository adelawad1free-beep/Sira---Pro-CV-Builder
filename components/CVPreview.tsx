
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
    <div className="mb-6">
      <h3 className="text-lg font-black uppercase tracking-wider flex items-center gap-3" style={{ color: themeColor }}>
        {icon && <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs shadow-sm" style={{ backgroundColor: themeColor }}>{icon}</span>}
        {children}
      </h3>
      <div className="h-0.5 w-12 mt-1 rounded-full" style={{ backgroundColor: themeColor }}></div>
    </div>
  );

  // 1. MODERN: Clean, Minimalist, Vertical Spacing
  const renderModern = () => (
    <div className="flex flex-col h-full bg-white text-slate-800">
      <header className="p-16 border-b-8" style={{ borderColor: themeColor }}>
        <div className="flex items-center gap-12">
          {data.personalInfo.image && <img src={data.personalInfo.image} className="w-40 h-40 rounded-3xl object-cover shadow-2xl border-4 border-slate-50" />}
          <div className="flex-1">
            <h1 className="text-5xl font-black mb-3 tracking-tight">{data.personalInfo.fullName}</h1>
            <p className="text-2xl font-bold opacity-60 mb-6">{data.personalInfo.jobTitle}</p>
            <div className="flex flex-wrap gap-6 text-sm font-bold text-slate-400">
               <span>{data.personalInfo.email}</span>
               <span>{data.personalInfo.phone}</span>
               <span>{data.personalInfo.location}</span>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 p-16 gap-16">
        <aside className="w-1/3 space-y-12">
          <section>
            <h4 className="font-black text-xs uppercase mb-6 tracking-widest opacity-40">Skills</h4>
            <div className="space-y-4">
              {data.skills.map(s => (
                <div key={s.id}>
                  <div className="flex justify-between text-[11px] font-black mb-1"><span>{s.name}</span></div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full"><div className="h-full rounded-full" style={{ width: `${(s.level/5)*100}%`, backgroundColor: themeColor }}></div></div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h4 className="font-black text-xs uppercase mb-6 tracking-widest opacity-40">Education</h4>
            {data.education.map(edu => (
              <div key={edu.id} className="mb-6">
                <p className="font-black text-sm">{edu.degree}</p>
                <p className="text-xs font-bold opacity-50">{edu.institution}</p>
              </div>
            ))}
          </section>
        </aside>
        <main className="flex-1 space-y-12">
          <section><SectionTitle icon="👤">{isRtl ? 'الملف الشخصي' : 'Profile'}</SectionTitle><p className="text-base text-slate-600 leading-relaxed">{data.personalInfo.summary}</p></section>
          <section><SectionTitle icon="💼">{isRtl ? 'الخبرة العملية' : 'Work Experience'}</SectionTitle>
            <div className="space-y-10">{data.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between font-black text-slate-900 mb-2"><span className="text-lg">{exp.position}</span><span className="text-xs opacity-40">{exp.startDate} - {exp.endDate}</span></div>
                <div className="text-sm font-black mb-4" style={{ color: themeColor }}>{exp.company}</div>
                <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">{exp.description}</p>
              </div>
            ))}</div>
          </section>
        </main>
      </div>
    </div>
  );

  // 2. EXECUTIVE: Bold Dark Sidebar + Corporate Look
  const renderExecutive = () => (
    <div className="flex h-full bg-white">
      <aside className="w-80 bg-slate-900 text-white p-12 space-y-12">
        {data.personalInfo.image && <img src={data.personalInfo.image} className="w-full aspect-square rounded-[3rem] object-cover border-4 border-white/10 shadow-2xl mb-8" />}
        <section>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white/40">Contact Info</h4>
          <div className="space-y-4 text-xs font-bold">
            <p className="flex flex-col gap-1"><span className="text-white/30 uppercase text-[9px]">Email</span>{data.personalInfo.email}</p>
            <p className="flex flex-col gap-1"><span className="text-white/30 uppercase text-[9px]">Phone</span>{data.personalInfo.phone}</p>
            <p className="flex flex-col gap-1"><span className="text-white/30 uppercase text-[9px]">Location</span>{data.personalInfo.location}</p>
          </div>
        </section>
        <section>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white/40">Expertise</h4>
          <div className="space-y-4">
            {data.skills.map(s => (
              <div key={s.id} className="space-y-1">
                 <div className="flex justify-between text-[10px] font-black"><span>{s.name}</span></div>
                 <div className="h-1 w-full bg-white/10 rounded-full"><div className="h-full rounded-full" style={{ width: `${(s.level/5)*100}%`, backgroundColor: themeColor }}></div></div>
              </div>
            ))}
          </div>
        </section>
      </aside>
      <main className="flex-1 p-20 flex flex-col">
        <header className="mb-16">
           <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">{data.personalInfo.fullName}</h1>
           <div className="flex items-center gap-4">
              <div className="h-1 w-12 rounded-full" style={{ backgroundColor: themeColor }}></div>
              <p className="text-xl font-bold uppercase tracking-widest text-slate-400">{data.personalInfo.jobTitle}</p>
           </div>
        </header>
        <div className="space-y-16">
           <section>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] mb-8 text-slate-300">Executive Summary</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium italic">"{data.personalInfo.summary}"</p>
           </section>
           <section>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] mb-8 text-slate-300">Professional History</h2>
              <div className="space-y-12">
                 {data.experience.map(exp => (
                   <div key={exp.id} className="relative pl-8 border-l-2 border-slate-100">
                      <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full border-2 border-white" style={{ backgroundColor: themeColor }}></div>
                      <div className="flex justify-between mb-2">
                         <h4 className="text-xl font-black text-slate-900">{exp.position}</h4>
                         <span className="text-xs font-bold text-slate-300">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <p className="text-sm font-black mb-4 uppercase tracking-wider" style={{ color: themeColor }}>{exp.company}</p>
                      <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">{exp.description}</p>
                   </div>
                 ))}
              </div>
           </section>
        </div>
      </main>
    </div>
  );

  const getTemplate = () => {
    switch (template) {
      case 'modern': return renderModern();
      case 'executive': return renderExecutive();
      default: return renderModern(); // For now fallback, can be expanded
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
