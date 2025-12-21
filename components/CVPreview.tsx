
import React from 'react';
import { CVData, Language, TemplateType } from '../types';

interface Props {
  data: CVData;
  lang: Language;
  template: TemplateType;
  themeColor: string;
  fontFamily: string;
}

const CVPreview: React.FC<Props> = ({ data, lang, template, themeColor, fontFamily }) => {
  const isRtl = lang === 'ar';

  const SectionTitle = ({ children, icon, light = false }: { children: React.ReactNode, icon?: string, light?: boolean }) => (
    <div className="mb-6">
      <h3 className={`text-lg font-black uppercase tracking-wider flex items-center gap-3 ${light ? 'text-white' : ''}`} style={!light ? { color: themeColor } : {}}>
        {icon && <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs shadow-sm ${light ? 'bg-white/20 text-white' : 'text-white'}`} style={!light ? { backgroundColor: themeColor } : {}}>{icon}</span>}
        {children}
      </h3>
      <div className={`h-0.5 w-12 mt-1 rounded-full ${light ? 'bg-white/30' : ''}`} style={!light ? { backgroundColor: themeColor } : {}}></div>
    </div>
  );

  // Styles applied to the template container
  const containerStyle = { fontFamily: fontFamily };

  // 1. MODERN: Clean, Minimalist, Vertical Spacing
  const renderModern = () => (
    <div className="flex flex-col h-full bg-white text-slate-800" style={containerStyle}>
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

  // 2. EXECUTIVE: Corporate, High-Contrast
  const renderExecutive = () => (
    <div className="flex h-full bg-white min-h-[1123px]" style={containerStyle}>
      <aside className="w-80 bg-slate-900 text-white p-12 space-y-12">
        {data.personalInfo.image && <img src={data.personalInfo.image} className="w-full aspect-square rounded-[3rem] object-cover border-4 border-white/10 shadow-2xl mb-8" />}
        <section>
          <SectionTitle icon="📞" light>{isRtl ? 'الاتصال' : 'Contact'}</SectionTitle>
          <div className="space-y-4 text-xs font-medium text-slate-300">
            <p>{data.personalInfo.email}</p>
            <p>{data.personalInfo.phone}</p>
            <p>{data.personalInfo.location}</p>
          </div>
        </section>
        <section>
          <SectionTitle icon="🛠️" light>{isRtl ? 'المهارات' : 'Skills'}</SectionTitle>
          <div className="space-y-4">
            {data.skills.map(s => (
              <div key={s.id}>
                 <div className="flex justify-between text-[10px] font-bold mb-1"><span>{s.name}</span></div>
                 <div className="h-1 w-full bg-white/10 rounded-full"><div className="h-full rounded-full" style={{ width: `${(s.level/5)*100}%`, backgroundColor: themeColor }}></div></div>
              </div>
            ))}
          </div>
        </section>
      </aside>
      <main className="flex-1 p-20">
        <header className="mb-16">
           <h1 className="text-6xl font-black text-slate-900 mb-4 tracking-tighter">{data.personalInfo.fullName}</h1>
           <p className="text-xl font-bold uppercase tracking-widest text-slate-400">{data.personalInfo.jobTitle}</p>
        </header>
        <div className="space-y-16">
           <section><SectionTitle icon="📄">{isRtl ? 'الخلاصة' : 'Summary'}</SectionTitle><p className="text-lg text-slate-600 leading-relaxed font-medium">{data.personalInfo.summary}</p></section>
           <section><SectionTitle icon="🏢">{isRtl ? 'المسار المهني' : 'Career'}</SectionTitle>
              <div className="space-y-12">{data.experience.map(exp => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-slate-100">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full" style={{ backgroundColor: themeColor }}></div>
                  <h4 className="text-xl font-black text-slate-900">{exp.position}</h4>
                  <p className="text-sm font-bold" style={{ color: themeColor }}>{exp.company} | {exp.startDate} - {exp.endDate}</p>
                  <p className="text-sm text-slate-500 mt-4 whitespace-pre-line">{exp.description}</p>
                </div>
              ))}</div>
           </section>
        </div>
      </main>
    </div>
  );

  // 3. CREATIVE: Modern Grid, Dynamic Layout
  const renderCreative = () => (
    <div className="bg-slate-50 h-full p-12" style={containerStyle}>
      <div className="bg-white rounded-[4rem] shadow-2xl overflow-hidden h-full flex flex-col">
        <header className="p-16 flex justify-between items-start" style={{ backgroundColor: themeColor }}>
           <div className="text-white max-w-2xl">
              <h1 className="text-6xl font-black mb-4">{data.personalInfo.fullName}</h1>
              <p className="text-2xl font-bold opacity-80">{data.personalInfo.jobTitle}</p>
              <p className="mt-8 text-lg opacity-90 leading-relaxed italic">{data.personalInfo.summary}</p>
           </div>
           {data.personalInfo.image && <img src={data.personalInfo.image} className="w-56 h-56 rounded-[3rem] object-cover border-8 border-white/20 shadow-2xl" />}
        </header>
        <div className="flex-1 grid grid-cols-2 gap-16 p-16">
           <section><SectionTitle icon="🚀">{isRtl ? 'الخبرات' : 'Experience'}</SectionTitle>
              <div className="space-y-8">{data.experience.map(exp => (
                <div key={exp.id} className="bg-slate-50 p-8 rounded-[2rem]">
                   <h4 className="font-black text-lg">{exp.position}</h4>
                   <p className="font-bold opacity-50 mb-4">{exp.company}</p>
                   <p className="text-sm opacity-70">{exp.description}</p>
                </div>
              ))}</div>
           </section>
           <div className="space-y-16">
              <section><SectionTitle icon="⭐">{isRtl ? 'القدرات' : 'Talents'}</SectionTitle>
                 <div className="flex flex-wrap gap-3">{data.skills.map(s => (
                   <span key={s.id} className="px-6 py-3 rounded-full font-black text-xs text-white shadow-sm" style={{ backgroundColor: themeColor }}>{s.name}</span>
                 ))}</div>
              </section>
              <section><SectionTitle icon="🎓">{isRtl ? 'الدراسة' : 'Academics'}</SectionTitle>
                 {data.education.map(edu => (
                   <div key={edu.id} className="mb-6 border-b border-slate-100 pb-4">
                      <p className="font-black">{edu.degree}</p>
                      <p className="text-sm font-bold opacity-40">{edu.institution}</p>
                   </div>
                 ))}
              </section>
           </div>
        </div>
      </div>
    </div>
  );

  // 4. GEOMETRIC: Solid blocks and sharp borders
  const renderGeometric = () => (
    <div className="bg-white h-full border-[20px] border-slate-100 flex flex-col" style={containerStyle}>
       <div className="flex border-b-[20px] border-slate-100 h-64">
          <div className="w-64 h-full bg-slate-900 flex items-center justify-center">
             {data.personalInfo.image ? <img src={data.personalInfo.image} className="w-full h-full object-cover grayscale" /> : <div className="text-white text-6xl font-black">CV</div>}
          </div>
          <div className="flex-1 p-12 flex flex-col justify-center" style={{ backgroundColor: themeColor }}>
             <h1 className="text-5xl font-black text-white">{data.personalInfo.fullName}</h1>
             <p className="text-xl font-bold text-white/70 uppercase tracking-widest mt-2">{data.personalInfo.jobTitle}</p>
          </div>
       </div>
       <div className="flex-1 flex">
          <aside className="w-64 border-r-[20px] border-slate-100 p-8 bg-slate-50">
             <SectionTitle>{isRtl ? 'معلومات' : 'Info'}</SectionTitle>
             <div className="space-y-6 text-xs font-black break-words">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.location}</p>
             </div>
             <div className="mt-12">
                <SectionTitle>{isRtl ? 'المهارات' : 'Skills'}</SectionTitle>
                <div className="space-y-4">{data.skills.map(s => <div key={s.id} className="font-bold text-xs">· {s.name}</div>)}</div>
             </div>
          </aside>
          <main className="flex-1 p-12">
             <section className="mb-12"><SectionTitle>{isRtl ? 'الخلاصة' : 'About'}</SectionTitle><p className="text-sm font-medium leading-relaxed">{data.personalInfo.summary}</p></section>
             <section><SectionTitle>{isRtl ? 'الخبرة' : 'Work'}</SectionTitle>
                <div className="space-y-8">{data.experience.map(exp => (
                   <div key={exp.id}>
                      <div className="flex justify-between items-baseline mb-2">
                         <h4 className="font-black uppercase tracking-wider">{exp.position}</h4>
                         <span className="text-[10px] font-black opacity-30">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <p className="text-xs font-black mb-2" style={{ color: themeColor }}>{exp.company}</p>
                      <p className="text-xs text-slate-500 whitespace-pre-line leading-relaxed">{exp.description}</p>
                   </div>
                ))}</div>
             </section>
          </main>
       </div>
    </div>
  );

  // 5. SIDEBAR: Classic Two-Column Split
  const renderSidebar = () => (
    <div className={`flex h-full ${isRtl ? 'flex-row' : 'flex-row-reverse'} bg-white`} style={containerStyle}>
       <main className="flex-1 p-16">
          <header className="mb-12">
             <h1 className="text-5xl font-black text-slate-900">{data.personalInfo.fullName}</h1>
             <p className="text-xl font-bold text-slate-400 mt-2">{data.personalInfo.jobTitle}</p>
             <p className="mt-6 text-base text-slate-600 border-l-4 pl-4 py-2" style={{ borderColor: themeColor }}>{data.personalInfo.summary}</p>
          </header>
          <section className="mb-12"><SectionTitle icon="💼">{isRtl ? 'الخبرة المهنية' : 'Experience'}</SectionTitle>
             <div className="space-y-10">{data.experience.map(exp => (
                <div key={exp.id}>
                   <h4 className="text-lg font-black">{exp.position}</h4>
                   <div className="flex justify-between text-sm font-bold opacity-50 mb-3"><span>{exp.company}</span><span>{exp.startDate} - {exp.endDate}</span></div>
                   <p className="text-sm text-slate-500">{exp.description}</p>
                </div>
             ))}</div>
          </section>
          <section><SectionTitle icon="🎓">{isRtl ? 'التعليم' : 'Education'}</SectionTitle>
             {data.education.map(edu => (
                <div key={edu.id} className="mb-6">
                   <p className="font-black">{edu.degree}</p>
                   <p className="text-sm opacity-50">{edu.institution} | {edu.startDate} - {edu.endDate}</p>
                </div>
             ))}
          </section>
       </main>
       <aside className="w-72 p-12 bg-slate-50 border-x border-slate-100">
          {data.personalInfo.image && <img src={data.personalInfo.image} className="w-full aspect-square object-cover rounded-2xl mb-12 shadow-lg" />}
          <section className="mb-12">
             <h4 className="font-black text-xs uppercase tracking-widest mb-6 opacity-30">Details</h4>
             <div className="space-y-4 text-xs font-bold text-slate-500">
                <p>{data.personalInfo.email}</p>
                <p>{data.personalInfo.phone}</p>
                <p>{data.personalInfo.location}</p>
             </div>
          </section>
          <section>
             <h4 className="font-black text-xs uppercase tracking-widest mb-6 opacity-30">Skills</h4>
             <div className="space-y-4">{data.skills.map(s => (
                <div key={s.id} className="px-3 py-2 bg-white rounded-lg border border-slate-200 text-[10px] font-black text-center">{s.name}</div>
             ))}</div>
          </section>
       </aside>
    </div>
  );

  // 6. PROFESSIONAL: Standard, Clean, High Readability
  const renderProfessional = () => (
    <div className="bg-white h-full p-16 text-slate-900" style={containerStyle}>
       <header className="text-center mb-12 border-b-2 pb-12" style={{ borderColor: themeColor }}>
          <h1 className="text-4xl font-black mb-2">{data.personalInfo.fullName}</h1>
          <p className="text-lg font-bold opacity-60 mb-6 uppercase tracking-[0.2em]">{data.personalInfo.jobTitle}</p>
          <div className="flex justify-center gap-8 text-sm font-bold opacity-40">
             <span>{data.personalInfo.email}</span>
             <span>{data.personalInfo.phone}</span>
             <span>{data.personalInfo.location}</span>
          </div>
       </header>
       <div className="space-y-12">
          <section className="grid grid-cols-4 gap-8">
             <h3 className="font-black uppercase text-sm tracking-widest opacity-40">{isRtl ? 'عني' : 'Profile'}</h3>
             <div className="col-span-3 text-sm leading-relaxed">{data.personalInfo.summary}</div>
          </section>
          <section className="grid grid-cols-4 gap-8">
             <h3 className="font-black uppercase text-sm tracking-widest opacity-40">{isRtl ? 'الخبرة' : 'Work'}</h3>
             <div className="col-span-3 space-y-8">{data.experience.map(exp => (
                <div key={exp.id}>
                   <div className="flex justify-between font-black mb-1"><span>{exp.position}</span><span>{exp.startDate} - {exp.endDate}</span></div>
                   <p className="text-sm font-black mb-3" style={{ color: themeColor }}>{exp.company}</p>
                   <p className="text-sm opacity-70 whitespace-pre-line">{exp.description}</p>
                </div>
             ))}</div>
          </section>
          <section className="grid grid-cols-4 gap-8">
             <h3 className="font-black uppercase text-sm tracking-widest opacity-40">{isRtl ? 'المهارات' : 'Skills'}</h3>
             <div className="col-span-3 flex flex-wrap gap-x-8 gap-y-4">
                {data.skills.map(s => <span key={s.id} className="font-bold text-sm">✓ {s.name}</span>)}
             </div>
          </section>
       </div>
    </div>
  );

  const getTemplate = () => {
    switch (template) {
      case 'modern': return renderModern();
      case 'executive': return renderExecutive();
      case 'creative': return renderCreative();
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
