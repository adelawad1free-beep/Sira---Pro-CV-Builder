
import React, { useState } from 'react';
import { CVData, Language } from '../types';
import { translations } from '../translations';

interface Props {
  data: CVData;
  setData: React.Dispatch<React.SetStateAction<CVData>>;
  lang: Language;
}

type Tab = 'personal' | 'experience' | 'education' | 'skills' | 'languages';

const CVForm: React.FC<Props> = ({ data, setData, lang }) => {
  const [activeTab, setActiveTab] = useState<Tab>('personal');
  const t = translations[lang];

  const updatePersonalInfo = (field: keyof CVData['personalInfo'], value: string) => {
    setData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updatePersonalInfo('image', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'personal', label: t.personalInfo, icon: '👤' },
    { id: 'experience', label: t.experience, icon: '💼' },
    { id: 'education', label: t.education, icon: '🎓' },
    { id: 'skills', label: t.skills, icon: '🛠️' },
    { id: 'languages', label: t.languages, icon: '🌐' },
  ];

  const Input = ({ label, value, onChange, placeholder = '', type = 'text' }: any) => (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:bg-white outline-none transition-all text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Mini Tabs for sections */}
      <div className="flex gap-1 overflow-x-auto no-scrollbar pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 rounded-xl transition-all shrink-0 ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
            title={tab.label}
          >
            <span className="text-sm">{tab.icon}</span>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 p-5 space-y-6">
        {activeTab === 'personal' && (
          <div className="space-y-5 animate-in fade-in duration-300">
             <div className="flex items-center gap-4 border-b border-slate-50 pb-5">
                {data.personalInfo.image ? (
                  <div className="relative">
                    <img src={data.personalInfo.image} className="w-20 h-20 rounded-2xl object-cover shadow-inner" />
                    <button onClick={() => updatePersonalInfo('image', '')} className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full text-[10px] flex items-center justify-center shadow-lg">✕</button>
                  </div>
                ) : (
                  <label className="w-20 h-20 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 transition-all text-slate-400">
                    <span className="text-lg">📸</span>
                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                  </label>
                )}
                <div>
                  <h4 className="text-sm font-black text-slate-800">{t.personalInfo}</h4>
                  <p className="text-[10px] text-slate-400 font-bold leading-tight mt-1">المعلومات التي تجعل الوصول إليك سهلاً</p>
                </div>
             </div>

             <div className="space-y-4">
                <Input label={t.fullName} value={data.personalInfo.fullName} onChange={(v: string) => updatePersonalInfo('fullName', v)} />
                <Input label={t.jobTitle} value={data.personalInfo.jobTitle} onChange={(v: string) => updatePersonalInfo('jobTitle', v)} />
                <div className="grid grid-cols-2 gap-3">
                  <Input label={t.email} value={data.personalInfo.email} onChange={(v: string) => updatePersonalInfo('email', v)} type="email" />
                  <Input label={t.phone} value={data.personalInfo.phone} onChange={(v: string) => updatePersonalInfo('phone', v)} />
                </div>
                <Input label={t.location} value={data.personalInfo.location} onChange={(v: string) => updatePersonalInfo('location', v)} />
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">{t.summary}</label>
                  <textarea rows={4} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none text-sm transition-all" value={data.personalInfo.summary} onChange={(e) => updatePersonalInfo('summary', e.target.value)} />
                </div>
             </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="p-4 bg-slate-50 rounded-xl relative group border border-slate-100">
                <button onClick={() => setData(prev => ({...prev, experience: prev.experience.filter(e => e.id !== exp.id)}))} className="absolute top-2 right-2 text-slate-300 hover:text-red-500">✕</button>
                <div className="space-y-3 mt-2">
                  <Input label={t.company} value={exp.company} onChange={(v: string) => { let l = [...data.experience]; l[index].company = v; setData({...data, experience: l}); }} />
                  <Input label={t.position} value={exp.position} onChange={(v: string) => { let l = [...data.experience]; l[index].position = v; setData({...data, experience: l}); }} />
                  <div className="grid grid-cols-2 gap-2">
                    <Input label={t.startDate} value={exp.startDate} onChange={(v: string) => { let l = [...data.experience]; l[index].startDate = v; setData({...data, experience: l}); }} />
                    <Input label={t.endDate} value={exp.endDate} onChange={(v: string) => { let l = [...data.experience]; l[index].endDate = v; setData({...data, experience: l}); }} />
                  </div>
                  <textarea className="w-full p-3 bg-white border border-slate-100 rounded-xl outline-none text-[11px]" rows={3} value={exp.description} onChange={(e) => { let l = [...data.experience]; l[index].description = e.target.value; setData({...data, experience: l}); }} />
                </div>
              </div>
            ))}
            <button onClick={() => setData(prev => ({...prev, experience: [...prev.experience, { id: Date.now().toString(), company: '', position: '', startDate: '', endDate: '', description: '' }]}))} className="w-full py-3 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black hover:bg-indigo-100 transition-colors">
              + {t.add}
            </button>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {data.education.map((edu, index) => (
              <div key={edu.id} className="p-4 bg-slate-50 rounded-xl relative border border-slate-100">
                <button onClick={() => setData(prev => ({...prev, education: prev.education.filter(e => e.id !== edu.id)}))} className="absolute top-2 right-2 text-slate-300 hover:text-red-500">✕</button>
                <div className="space-y-3 mt-2">
                  <Input label={t.institution} value={edu.institution} onChange={(v: string) => { let l = [...data.education]; l[index].institution = v; setData({...data, education: l}); }} />
                  <Input label={t.degree} value={edu.degree} onChange={(v: string) => { let l = [...data.education]; l[index].degree = v; setData({...data, education: l}); }} />
                </div>
              </div>
            ))}
            <button onClick={() => setData(prev => ({...prev, education: [...prev.education, { id: Date.now().toString(), institution: '', degree: '', startDate: '', endDate: '', description: '' }]}))} className="w-full py-3 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black hover:bg-indigo-100 transition-colors">
              + {t.add}
            </button>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-3 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 gap-2">
              {data.skills.map((skill, index) => (
                <div key={skill.id} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <input className="flex-1 bg-transparent border-none outline-none text-xs font-black" value={skill.name} onChange={(e) => { let l = [...data.skills]; l[index].name = e.target.value; setData({...data, skills: l}); }} />
                  <select className="bg-white text-[10px] rounded p-1 border" value={skill.level} onChange={(e) => { let l = [...data.skills]; l[index].level = parseInt(e.target.value); setData({...data, skills: l}); }}>
                    {[1,2,3,4,5].map(v => <option key={v} value={v}>{v}/5</option>)}
                  </select>
                  <button onClick={() => setData(prev => ({...prev, skills: prev.skills.filter(s => s.id !== skill.id)}))} className="text-red-300 hover:text-red-500">✕</button>
                </div>
              ))}
            </div>
            <button onClick={() => setData(prev => ({...prev, skills: [...prev.skills, { id: Date.now().toString(), name: '', level: 3 }]}))} className="w-full py-3 bg-indigo-50 text-indigo-600 rounded-xl text-xs font-black hover:bg-indigo-100">
              + {t.add}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVForm;
