
import React from 'react';
import { CVData, Language, TemplateType } from '../types';

interface Props {
  data: CVData;
  lang: Language;
  template: TemplateType;
  themeColor: string;
  fontFamily: string;
}

const SectionIcons = {
  Profile: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
  Work: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V20a2 2 0 002 2h14a2 2 0 002-2v-6.745zM16 8V5a2 2 0 00-2-2H10a2 2 0 00-2 2v3m8 0H8m8 0a2 2 0 012 2v2M8 8a2 2 0 00-2 2v2m4.688-2.248A5.986 5.986 0 0112 11c1.26 0 2.428-.388 3.394-1.048M12 11V5"/></svg>,
  Education: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/></svg>,
  Skills: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  Contact: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
};

const CVPreview: React.FC<Props> = ({ data, lang, template, themeColor, fontFamily }) => {
  const isRtl = lang === 'ar';

  const SectionTitle = ({ children, icon: Icon, light = false }: { children: React.ReactNode, icon?: any, light?: boolean }) => (
    <div className="mb-8">
      <h3 className={`text-lg font-black uppercase tracking-wider flex items-center gap-3 ${light ? 'text-white' : ''}`} style={!light ? { color: themeColor } : {}}>
        {Icon && (
          <span className={`w-8 h-8 rounded-lg flex items-center justify-center shadow-sm ${light ? 'bg-white/10 text-white border border-white/20' : 'text-white'}`} style={!light ? { backgroundColor: themeColor } : {}}>
            <Icon />
          </span>
        )}
        {children}
      </h3>
      <div className={`h-0.5 w-16 mt-2 rounded-full ${light ? 'bg-white/20' : ''}`} style={!light ? { backgroundColor: themeColor } : {}}></div>
    </div>
  );

  const containerStyle = { fontFamily: fontFamily };

  // 1. MODERN
  const renderModern = () => (
    <div className="flex flex-col h-full bg-white text-slate-800" style={containerStyle}>
      <header className="p-16 border-b-8" style={{ borderColor: themeColor }}>
        <div className="flex items-center gap-12">
          {data.personalInfo.image && <img src={data.personalInfo.image} className="w-40 h-40 rounded-3xl object-cover shadow-lg border-2 border-slate-100" />}
          <div className="flex-1">
            <h1 className="text-5xl font-black mb-3 tracking-tight text-slate-900">{data.personalInfo.fullName}</h1>
            <p className="text-2xl font-bold opacity-70 mb-8">{data.personalInfo.jobTitle}</p>
            <div className="flex flex-wrap gap-8 text-[11px] font-black text-slate-400 uppercase tracking-widest">
               <span className="flex items-center gap-2"><SectionIcons.Contact /> {data.personalInfo.email}</span>
               <span className="flex items-center gap-2">{data.personalInfo.phone}</span>
               <span className="flex items-center gap-2">{data.personalInfo.location}</span>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 p-16 gap-16">
        <aside className="w-[32%] space-y-16">
          <section>
            <SectionTitle icon={SectionIcons.Skills}>{isRtl ? 'المهارات' : 'Skills'}</SectionTitle>
            <div className="space-y-5">
              {data.skills.map(s => (
                <div key={s.id}>
                  <div className="flex justify-between text-[11px] font-black mb-2 text-slate-500 uppercase"><span>{s.name}</span></div>
                  <div className="h-1 w-full bg-slate-100 rounded-full"><div className="h-full rounded-full" style={{ width: `${(s.level/5)*100}%`, backgroundColor: themeColor }}></div></div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <SectionTitle icon={SectionIcons.Education}>{isRtl ? 'التعليم' : 'Education'}</SectionTitle>
            {data.education.map(edu => (
              <div key={edu.id} className="mb-8">
                <p className="font-black text-sm text-slate-900 mb-1">{edu.degree}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">{edu.institution}</p>
              </div>
            ))}
          </section>
        </aside>
        <main className="flex-1 space-y-16">
          <section>
            <SectionTitle icon={SectionIcons.Profile}>{isRtl ? 'الملف المهني' : 'Profile'}</SectionTitle>
            <p className="text-base text-slate-600 leading-relaxed font-medium">{data.personalInfo.summary}</p>
          </section>
          <section>
            <SectionTitle icon={SectionIcons.Work}>{isRtl ? 'الخبرات العملية' : 'Work Experience'}</SectionTitle>
            <div className="space-y-12">
              {data.experience.map(exp => (
                <div key={exp.id} className="relative pl-8 border-l border-slate-100">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full border-2 border-white" style={{ backgroundColor: themeColor }}></div>
                  <div className="flex justify-between font-black text-slate-900 mb-2">
                    <span className="text-lg">{exp.position}</span>
                    <span className="text-[10px] text-slate-400 uppercase">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: themeColor }}>{exp.company}</div>
                  <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );

  // 2. EXECUTIVE
  const renderExecutive = () => (
    <div className="flex h-full bg-white" style={containerStyle}>
      <aside className="w-80 bg-[#1e293b] text-white p-12 space-y-16">
        {data.personalInfo.image && <img src={data.personalInfo.image} className="w-full aspect-square rounded-2xl object-cover border border-white/10 shadow-xl mb-12" />}
        <section>
          <SectionTitle icon={SectionIcons.Contact} light>{isRtl ? 'الاتصال' : 'Contact'}</SectionTitle>
          <div className="space-y-5 text-xs font-bold text-slate-300 tracking-tight">
            <p className="break-words">{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            <p>{data.personalInfo.location}</p>
          </div>
        </section>
        <section>
          <SectionTitle icon={SectionIcons.Skills} light>{isRtl ? 'المهارات' : 'Skills'}</SectionTitle>
          <div className="space-y-5">
            {data.skills.map(s => (
              <div key={s.id}>
                 <div className="flex justify-between text-[10px] font-black mb-2 text-slate-400 uppercase tracking-widest"><span>{s.name}</span></div>
                 <div className="h-1 w-full bg-white/10 rounded-full"><div className="h-full rounded-full" style={{ width: `${(s.level/5)*100}%`, backgroundColor: themeColor }}></div></div>
              </div>
            ))}
          </div>
        </section>
      </aside>
      <main className="flex-1 p-20">
        <header className="mb-16">
           <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">{data.personalInfo.fullName}</h1>
           <p className="text-xl font-bold uppercase tracking-[0.3em] text-slate-400 border-t border-slate-100 pt-4 inline-block">{data.personalInfo.jobTitle}</p>
        </header>
        <div className="space-y-20">
           <section>
             <SectionTitle icon={SectionIcons.Profile}>{isRtl ? 'الخلاصة التنفيذية' : 'Executive Summary'}</SectionTitle>
             <p className="text-lg text-slate-600 leading-relaxed font-medium">{data.personalInfo.summary}</p>
           </section>
           <section>
             <SectionTitle icon={SectionIcons.Work}>{isRtl ? 'المسار المهني' : 'Career History'}</SectionTitle>
             <div className="space-y-12">
               {data.experience.map(exp => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute -left-[11px] top-2 w-5 h-5 rounded-full border-4 border-white shadow-sm" style={{ backgroundColor: themeColor }}></div>
                  <h4 className="text-xl font-black text-slate-900 mb-1">{exp.position}</h4>
                  <p className="text-sm font-black uppercase tracking-[0.2em] mb-4" style={{ color: themeColor }}>{exp.company} | {exp.startDate} - {exp.endDate}</p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed whitespace-pre-line">{exp.description}</p>
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
      default: return renderModern();
    }
  };

  return (
    <div 
      className={`print-container bg-white shadow-2xl mx-auto overflow-hidden min-h-[1123px] w-[794px] transform origin-top`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {getTemplate()}
    </div>
  );
};

export default CVPreview;
