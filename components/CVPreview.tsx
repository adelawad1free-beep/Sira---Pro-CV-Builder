
import React from 'react';
import { CVData, Language, TemplateType } from '../types';

interface Props {
  data: CVData;
  lang: Language;
  template: TemplateType;
}

const CVPreview: React.FC<Props> = ({ data, lang, template }) => {
  const isRtl = lang === 'ar';

  const renderModern = () => (
    <div className={`flex flex-col h-full ${isRtl ? 'text-right' : 'text-left'}`}>
      <header className="bg-indigo-950 text-white p-10 flex items-center gap-10 rounded-t-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-900/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        {data.personalInfo.image && (
          <img src={data.personalInfo.image} className="w-32 h-32 rounded-3xl border-4 border-indigo-400/30 shadow-2xl relative z-10 object-cover" alt="Profile" />
        )}
        <div className="flex-1 relative z-10">
          <h1 className="text-4xl font-black mb-1 uppercase tracking-tight">{data.personalInfo.fullName || 'Full Name'}</h1>
          <p className="text-lg text-indigo-300 font-bold tracking-wide uppercase">{data.personalInfo.jobTitle || 'Job Title'}</p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-indigo-200 font-medium">
             <span className="flex items-center gap-1.5">📞 {data.personalInfo.phone}</span>
             <span className="flex items-center gap-1.5">✉️ {data.personalInfo.email}</span>
             <span className="flex items-center gap-1.5">📍 {data.personalInfo.location}</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1 p-10 gap-10 bg-white">
        <aside className="w-1/3 space-y-8">
          <section>
            <h4 className="font-black text-indigo-950 text-sm uppercase tracking-widest border-b-2 border-indigo-100 pb-2 mb-4">Skills</h4>
            <div className="space-y-3">
              {data.skills.map(s => (
                <div key={s.id} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-gray-700">
                    <span>{s.name}</span>
                    <span>{s.level}/5</span>
                  </div>
                  <div className="h-1.5 w-full bg-indigo-50 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${(s.level / 5) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h4 className="font-black text-indigo-950 text-sm uppercase tracking-widest border-b-2 border-indigo-100 pb-2 mb-4">Languages</h4>
            <div className="space-y-2">
              {data.languages.map((l, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="font-bold text-gray-800">{l.name}</span>
                  <span className="text-gray-400 font-medium italic">{l.level}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <main className="flex-1 space-y-10 border-l pl-10">
          <section>
            <h3 className="text-lg font-black text-indigo-950 mb-4 border-b pb-2 uppercase tracking-wide">Professional Profile</h3>
            <p className="text-gray-600 leading-relaxed text-sm text-justify">{data.personalInfo.summary}</p>
          </section>

          <section>
            <h3 className="text-lg font-black text-indigo-950 mb-6 border-b pb-2 uppercase tracking-wide">Experience</h3>
            <div className="space-y-8">
              {data.experience.map(exp => (
                <div key={exp.id} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-indigo-600 before:rounded-full after:content-[''] after:absolute after:left-[2px] after:top-4 after:bottom-[-20px] after:w-[2px] after:bg-indigo-50 last:after:hidden">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-900 text-sm">{exp.position}</h4>
                    <span className="text-[10px] font-black text-indigo-400 bg-indigo-50 px-2 py-0.5 rounded-full">{exp.startDate} — {exp.endDate}</span>
                  </div>
                  <p className="text-indigo-600 font-bold text-[11px] mb-3 uppercase">{exp.company}</p>
                  <p className="text-xs text-gray-500 leading-relaxed text-justify">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-black text-indigo-950 mb-6 border-b pb-2 uppercase tracking-wide">Education</h3>
            <div className="space-y-6">
              {data.education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-gray-900 text-sm">{edu.degree}</h4>
                    <span className="text-[10px] text-gray-400 font-bold">{edu.startDate} — {edu.endDate}</span>
                  </div>
                  <p className="text-gray-500 text-xs font-bold">{edu.institution}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );

  const renderClassic = () => (
    <div className={`p-16 bg-white h-full font-serif ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="text-center border-b-2 border-gray-900 pb-10 mb-10">
        <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">{data.personalInfo.fullName}</h1>
        <div className="flex justify-center flex-wrap gap-4 text-sm font-bold text-gray-600 uppercase tracking-[0.2em]">
           <span>{data.personalInfo.email}</span>
           <span className="text-gray-300">|</span>
           <span>{data.personalInfo.phone}</span>
           <span className="text-gray-300">|</span>
           <span>{data.personalInfo.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12">
          <h2 className="text-sm font-black text-gray-900 border-b border-gray-900 pb-1 mb-4 uppercase tracking-widest">Profile</h2>
          <p className="text-gray-800 leading-relaxed italic text-center px-10">{data.personalInfo.summary}</p>
        </div>

        <div className="col-span-12">
          <h2 className="text-sm font-black text-gray-900 border-b border-gray-900 pb-1 mb-6 uppercase tracking-widest">Professional Experience</h2>
          <div className="space-y-8">
            {data.experience.map(exp => (
              <div key={exp.id}>
                <div className="flex justify-between font-black text-gray-900 mb-1">
                  <span className="text-base">{exp.position}</span>
                  <span className="text-xs uppercase tracking-tighter">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-sm font-bold text-gray-600 mb-3">{exp.company}</p>
                <p className="text-sm text-gray-800 leading-relaxed text-justify">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12">
           <h2 className="text-sm font-black text-gray-900 border-b border-gray-900 pb-1 mb-6 uppercase tracking-widest">Education & Skills</h2>
           <div className="grid grid-cols-2 gap-10">
              <div className="space-y-4">
                {data.education.map(edu => (
                  <div key={edu.id}>
                    <p className="font-bold text-sm">{edu.degree}</p>
                    <p className="text-xs text-gray-600 italic">{edu.institution}, {edu.startDate}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 content-start">
                {data.skills.map(s => (
                  <span key={s.id} className="text-[10px] font-black border border-gray-900 px-3 py-1 uppercase">{s.name}</span>
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
      {template === 'modern' ? renderModern() : renderClassic()}
    </div>
  );
};

export default CVPreview;
