
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

  // Section Handlers
  const addExperience = () => {
    setData(prev => ({
      ...prev,
      experience: [...prev.experience, { id: Date.now().toString(), company: '', position: '', startDate: '', endDate: '', description: '' }]
    }));
  };

  const removeExperience = (id: string) => {
    setData(prev => ({ ...prev, experience: prev.experience.filter(e => e.id !== id) }));
  };

  const addEducation = () => {
    setData(prev => ({
      ...prev,
      education: [...prev.education, { id: Date.now().toString(), institution: '', degree: '', startDate: '', endDate: '', description: '' }]
    }));
  };

  const removeEducation = (id: string) => {
    setData(prev => ({ ...prev, education: prev.education.filter(edu => edu.id !== id) }));
  };

  const addSkill = () => {
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, { id: Date.now().toString(), name: '', level: 3 }]
    }));
  };

  const removeSkill = (id: string) => {
    setData(prev => ({ ...prev, skills: prev.skills.filter(s => s.id !== id) }));
  };

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'personal', label: t.personalInfo, icon: '👤' },
    { id: 'experience', label: t.experience, icon: '💼' },
    { id: 'education', label: t.education, icon: '🎓' },
    { id: 'skills', label: t.skills, icon: '🛠️' },
    { id: 'languages', label: t.languages, icon: '🌐' },
  ];

  const Input = ({ label, value, onChange, placeholder = '', type = 'text', fullWidth = false }: any) => (
    <div className={`space-y-1.5 ${fullWidth ? 'col-span-full' : ''}`}>
      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-sm text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 no-print">
      {/* Tab Navigation */}
      <div className="flex border-b overflow-x-auto no-scrollbar bg-gray-50/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all whitespace-nowrap shrink-0 border-b-2 ${
              activeTab === tab.id 
                ? 'border-indigo-600 text-indigo-700 bg-white shadow-[0_-4px_0_inset_#4f46e5]' 
                : 'border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-8">
        {activeTab === 'personal' && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-full flex items-center gap-6 mb-4">
                <div className="relative group">
                  {data.personalInfo.image ? (
                    <>
                      <img src={data.personalInfo.image} className="w-28 h-28 rounded-2xl object-cover border-4 border-indigo-50 shadow-md transition-transform group-hover:scale-105" />
                      <button 
                        onClick={() => updatePersonalInfo('image', '')}
                        className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full text-[10px] flex items-center justify-center shadow-lg"
                      >✕</button>
                    </>
                  ) : (
                    <label className="w-28 h-28 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 transition-all text-gray-400">
                      <span className="text-xl">📸</span>
                      <span className="text-[10px] mt-1 font-bold">{t.uploadImage}</span>
                      <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                    </label>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{t.personalInfo}</h4>
                  <p className="text-xs text-gray-400 mt-1">اضف صورتك ومعلوماتك الأساسية لتظهر بشكل احترافي</p>
                </div>
              </div>

              <Input label={t.fullName} value={data.personalInfo.fullName} onChange={(v: string) => updatePersonalInfo('fullName', v)} />
              <Input label={t.jobTitle} value={data.personalInfo.jobTitle} onChange={(v: string) => updatePersonalInfo('jobTitle', v)} />
              <Input label={t.email} value={data.personalInfo.email} onChange={(v: string) => updatePersonalInfo('email', v)} type="email" />
              <Input label={t.phone} value={data.personalInfo.phone} onChange={(v: string) => updatePersonalInfo('phone', v)} />
              <Input label={t.location} value={data.personalInfo.location} onChange={(v: string) => updatePersonalInfo('location', v)} fullWidth />
              
              <div className="col-span-full space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.summary}</label>
                </div>
                <textarea 
                  rows={4}
                  className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm text-sm"
                  value={data.personalInfo.summary}
                  onChange={(e) => updatePersonalInfo('summary', e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 relative group">
                <button 
                  onClick={() => removeExperience(exp.id)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label={t.company} value={exp.company} onChange={(v: string) => {
                    const newList = [...data.experience];
                    newList[index].company = v;
                    setData({ ...data, experience: newList });
                  }} />
                  <Input label={t.position} value={exp.position} onChange={(v: string) => {
                    const newList = [...data.experience];
                    newList[index].position = v;
                    setData({ ...data, experience: newList });
                  }} />
                  <Input label={t.startDate} value={exp.startDate} onChange={(v: string) => {
                    const newList = [...data.experience];
                    newList[index].startDate = v;
                    setData({ ...data, experience: newList });
                  }} />
                  <Input label={t.endDate} value={exp.endDate} onChange={(v: string) => {
                    const newList = [...data.experience];
                    newList[index].endDate = v;
                    setData({ ...data, experience: newList });
                  }} />
                  <div className="col-span-full space-y-1.5">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t.description}</label>
                    <textarea 
                      rows={3}
                      className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none text-sm"
                      value={exp.description}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                        const newList = [...data.experience];
                        newList[index].description = e.target.value;
                        setData({ ...data, experience: newList });
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button 
              onClick={addExperience}
              className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-bold hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/30 transition-all flex items-center justify-center gap-2"
            >
              <span className="text-xl">+</span> {t.add}
            </button>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {data.education.map((edu, index) => (
              <div key={edu.id} className="p-6 border border-gray-100 rounded-2xl bg-gray-50/50 relative">
                <button 
                  onClick={() => removeEducation(edu.id)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-red-500"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label={t.institution} value={edu.institution} onChange={(v: string) => {
                    const newList = [...data.education];
                    newList[index].institution = v;
                    setData({ ...data, education: newList });
                  }} />
                  <Input label={t.degree} value={edu.degree} onChange={(v: string) => {
                    const newList = [...data.education];
                    newList[index].degree = v;
                    setData({ ...data, education: newList });
                  }} />
                  <Input label={t.startDate} value={edu.startDate} onChange={(v: string) => {
                    const newList = [...data.education];
                    newList[index].startDate = v;
                    setData({ ...data, education: newList });
                  }} />
                  <Input label={t.endDate} value={edu.endDate} onChange={(v: string) => {
                    const newList = [...data.education];
                    newList[index].endDate = v;
                    setData({ ...data, education: newList });
                  }} />
                </div>
              </div>
            ))}
            <button 
              onClick={addEducation}
              className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-bold hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/30 transition-all flex items-center justify-center gap-2"
            >
              <span className="text-xl">+</span> {t.add}
            </button>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.skills.map((skill, index) => (
                <div key={skill.id} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 group">
                  <input 
                    placeholder={t.skillName}
                    className="flex-1 bg-transparent border-b border-transparent focus:border-indigo-400 outline-none text-sm font-bold p-1"
                    value={skill.name}
                    onChange={(e) => {
                      const newList = [...data.skills];
                      newList[index].name = e.target.value;
                      setData({ ...data, skills: newList });
                    }}
                  />
                  <select 
                    className="bg-white border rounded p-1 text-xs"
                    value={skill.level}
                    onChange={(e) => {
                      const newList = [...data.skills];
                      newList[index].level = parseInt(e.target.value);
                      setData({ ...data, skills: newList });
                    }}
                  >
                    {[1,2,3,4,5].map(lv => <option key={lv} value={lv}>{lv}/5</option>)}
                  </select>
                  <button onClick={() => removeSkill(skill.id)} className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                </div>
              ))}
            </div>
            <button 
              onClick={addSkill}
              className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-bold hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/30 transition-all flex items-center justify-center gap-2"
            >
              <span className="text-xl">+</span> {t.add}
            </button>
          </div>
        )}

        {activeTab === 'languages' && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {data.languages.map((langItem, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                 <input 
                  placeholder={t.langName}
                  className="flex-1 bg-transparent border-b border-transparent focus:border-indigo-400 outline-none text-sm font-bold"
                  value={langItem.name}
                  onChange={(e) => {
                    const newList = [...data.languages];
                    newList[index].name = e.target.value;
                    setData({ ...data, languages: newList });
                  }}
                />
                <input 
                  placeholder={t.langLevel}
                  className="flex-1 bg-transparent border-b border-transparent focus:border-indigo-400 outline-none text-sm"
                  value={langItem.level}
                  onChange={(e) => {
                    const newList = [...data.languages];
                    newList[index].level = e.target.value;
                    setData({ ...data, languages: newList });
                  }}
                />
                <button 
                  onClick={() => setData(prev => ({ ...prev, languages: prev.languages.filter((_, i) => i !== index) }))}
                  className="text-red-400 hover:text-red-600"
                >✕</button>
              </div>
            ))}
             <button 
              onClick={() => setData(prev => ({ ...prev, languages: [...prev.languages, { name: '', level: '' }] }))}
              className="w-full py-4 border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 font-bold hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/30 transition-all flex items-center justify-center gap-2"
            >
              <span className="text-xl">+</span> {t.add}
            </button>
          </div>
        )}
      </div>

      {/* Quick Actions Footer */}
      <div className="px-8 py-4 bg-gray-50 border-t flex justify-between items-center">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Sira Pro Builder v1.0</p>
        <div className="flex gap-2">
           <button 
             onClick={() => {
               const idx = tabs.findIndex(t => t.id === activeTab);
               if (idx > 0) setActiveTab(tabs[idx-1].id);
             }}
             disabled={activeTab === 'personal'}
             className="px-4 py-2 text-xs font-bold text-gray-500 disabled:opacity-30"
           >
             {t.prev}
           </button>
           <button 
             onClick={() => {
               const idx = tabs.findIndex(t => t.id === activeTab);
               if (idx < tabs.length - 1) setActiveTab(tabs[idx+1].id);
             }}
             disabled={activeTab === 'languages'}
             className="px-6 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 disabled:opacity-30 shadow-md shadow-indigo-100"
           >
             {t.next}
           </button>
        </div>
      </div>
    </div>
  );
};

export default CVForm;
