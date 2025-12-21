
import { CVData } from './types';

export const INITIAL_CV_DATA: CVData = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
  },
  education: [],
  experience: [],
  skills: [],
  languages: [],
};

export const SPECIALTIES_DATA: Record<string, { ar: CVData; en: CVData }> = {
  software: {
    ar: {
      personalInfo: {
        fullName: 'خالد عبد الله المنصور',
        jobTitle: 'مطور برمجيات أول (Senior Full-Stack Developer)',
        email: 'khaled.dev@example.com',
        phone: '+966 55 123 4567',
        location: 'الرياض، المملكة العربية السعودية',
        summary: 'مطور برمجيات خبير يتمتع بخلفية تقنية قوية في بناء وتطوير الأنظمة السحابية المعقدة. متخصص في تقنيات الويب الحديثة، مع سجل حافل في تحسين أداء التطبيقات بنسبة 40% وتطبيق حلول تقنية مبتكرة.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      experience: [
        { id: '1', company: 'شركة التقنية المتقدمة', position: 'رئيس فريق المطورين', startDate: '2021', endDate: 'الحاضر', description: '• قيادة فريق مكون من 10 مطورين لبناء منصات تجارة إلكترونية.\n• تصميم هندسة الأنظمة لضمان القابلية للتوسع.\n• مراجعة الكود وضمان جودة المخرجات البرمجية.' }
      ],
      education: [{ id: '3', institution: 'جامعة الملك سعود', degree: 'بكالوريوس علوم الحاسب', startDate: '2014', endDate: '2018', description: 'تخصص هندسة برمجيات.' }],
      skills: [{ id: 's1', name: 'React/Next.js', level: 5 }, { id: 's2', name: 'Node.js', level: 5 }, { id: 's3', name: 'Cloud Architecture', level: 4 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'مستوى احترافي' }]
    },
    en: {
      personalInfo: {
        fullName: 'Khaled Mansour',
        jobTitle: 'Senior Full-Stack Developer',
        email: 'khaled.dev@example.com',
        phone: '+1 234 567 890',
        location: 'Dubai, UAE',
        summary: 'Expert Software Developer with a strong technical background in building and developing complex cloud systems. Specialized in modern web technologies with a proven track record of optimization.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      experience: [{ id: '1', company: 'Tech Solutions Corp', position: 'Lead Developer', startDate: '2021', endDate: 'Present', description: '• Leading a team of 10 developers.\n• System architecture design.\n• Code reviews and quality assurance.' }],
      education: [{ id: '3', institution: 'KSU', degree: 'B.S. in Computer Science', startDate: '2014', endDate: '2018', description: 'Software Engineering focus.' }],
      skills: [{ id: 's1', name: 'React/Next.js', level: 5 }, { id: 's2', name: 'Node.js', level: 5 }, { id: 's3', name: 'Cloud Architecture', level: 4 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  design: {
    ar: {
      personalInfo: {
        fullName: 'سارة فهد العتيبي',
        jobTitle: 'مصممة واجهات وتجربة مستخدم (UI/UX Designer)',
        email: 'sara.ux@example.com',
        phone: '+966 50 123 9876',
        location: 'جدة، المملكة العربية السعودية',
        summary: 'مصممة مبدعة متخصصة في ابتكار تجارب مستخدم رقمية تركز على احتياجات الإنسان وتدعم أهداف الأعمال. خبيرة في بناء أنظمة التصميم وإجراء أبحاث المستخدم.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      experience: [{ id: '1', company: 'استوديو الإبداع الرقمي', position: 'كبير مصممي واجهات المستخدم', startDate: '2020', endDate: 'الحاضر', description: '• تصميم واجهات تطبيقات جوال حصدت جوائز.\n• تحسين معدلات التحويل للمواقع بنسبة 25%.\n• بناء مكتبة عناصر التصميم (Design System) للشركة.' }],
      education: [{ id: '2', institution: 'جامعة الأميرة نورة', degree: 'بكالوريوس التصميم الجرافيكي', startDate: '2015', endDate: '2019', description: 'تخصص وسائط متعددة.' }],
      skills: [{ id: 's1', name: 'Figma & Adobe XD', level: 5 }, { id: 's2', name: 'User Research', level: 4 }, { id: 's3', name: 'Prototyping', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'مستوى متقدم' }]
    },
    en: {
      personalInfo: {
        fullName: 'Sara Al-Otaibi',
        jobTitle: 'UI/UX Designer',
        email: 'sara.ux@example.com',
        phone: '+1 555 123 4567',
        location: 'London, UK',
        summary: 'Creative designer specializing in human-centered digital user experiences. Expert in building Design Systems and user research.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      experience: [{ id: '1', company: 'Creative Studio', position: 'Senior UI Designer', startDate: '2020', endDate: 'Present', description: '• Designing award-winning app interfaces.\n• Improving conversion rates by 25%.\n• Implementing corporate design systems.' }],
      education: [{ id: '2', institution: 'Arts University', degree: 'B.A. in Graphic Design', startDate: '2015', endDate: '2019', description: 'Multimedia focus.' }],
      skills: [{ id: 's1', name: 'Figma & Adobe XD', level: 5 }, { id: 's2', name: 'User Research', level: 4 }, { id: 's3', name: 'Prototyping', level: 5 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  medical: {
    ar: {
      personalInfo: {
        fullName: 'د. فيصل بن خالد السديري',
        jobTitle: 'طبيب استشاري باطنة',
        email: 'dr.faisal@example.com',
        phone: '+966 53 111 2222',
        location: 'الرياض، السعودية',
        summary: 'طبيب استشاري ذو خبرة تزيد عن 10 سنوات في طب الباطنة. متخصص في تشخيص الحالات المعقدة وإدارة الرعاية الصحية الشاملة للمرضى. ملتزم بأعلى معايير الجودة الطبية والبحث العلمي.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400'
      },
      experience: [{ id: '1', company: 'مستشفى الملك فيصل التخصصي', position: 'استشاري أول', startDate: '2015', endDate: 'الحاضر', description: '• الإشراف على العيادات الخارجية وأجنحة التنويم.\n• المشاركة في الأبحاث السريرية المنشورة دولياً.\n• تدريب الأطباء المقيمين والزملاء.' }],
      education: [{ id: '2', institution: 'جامعة الملك سعود', degree: 'دكتوراه في الطب (MD)', startDate: '2005', endDate: '2012', description: 'الزمالة السعودية في طب الباطنة.' }],
      skills: [{ id: 's1', name: 'Diagnosis', level: 5 }, { id: 's2', name: 'Patient Care', level: 5 }, { id: 's3', name: 'Medical Research', level: 4 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'مستوى احترافي' }]
    },
    en: {
      personalInfo: {
        fullName: 'Dr. Faisal Al-Sudairi',
        jobTitle: 'Consultant Internist',
        email: 'dr.faisal@example.com',
        phone: '+1 555 111 2222',
        location: 'Riyadh, Saudi Arabia',
        summary: 'Consultant physician with over 10 years of experience in internal medicine. Specialized in complex diagnoses and comprehensive patient care.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400'
      },
      experience: [{ id: '1', company: 'King Faisal Specialist Hospital', position: 'Senior Consultant', startDate: '2015', endDate: 'Present', description: '• Overseeing outpatient clinics and inpatient wards.\n• Participating in international clinical research.\n• Training residents and fellows.' }],
      education: [{ id: '2', institution: 'KSU Medical College', degree: 'Doctor of Medicine (MD)', startDate: '2005', endDate: '2012', description: 'Saudi Board in Internal Medicine.' }],
      skills: [{ id: 's1', name: 'Diagnosis', level: 5 }, { id: 's2', name: 'Patient Care', level: 5 }, { id: 's3', name: 'Medical Research', level: 4 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  accounting: { ar: { ...INITIAL_CV_DATA }, en: { ...INITIAL_CV_DATA } },
  marketing: { ar: { ...INITIAL_CV_DATA }, en: { ...INITIAL_CV_DATA } },
  sales: { ar: { ...INITIAL_CV_DATA }, en: { ...INITIAL_CV_DATA } },
  civil: { ar: { ...INITIAL_CV_DATA }, en: { ...INITIAL_CV_DATA } },
  hr: { ar: { ...INITIAL_CV_DATA }, en: { ...INITIAL_CV_DATA } },
  teaching: { ar: { ...INITIAL_CV_DATA }, en: { ...INITIAL_CV_DATA } },
  pm: { ar: { ...INITIAL_CV_DATA }, en: { ...INITIAL_CV_DATA } },
};

export const SAMPLE_DATA_AR: CVData = SPECIALTIES_DATA.software.ar;
export const SAMPLE_DATA_EN: CVData = SPECIALTIES_DATA.software.en;
