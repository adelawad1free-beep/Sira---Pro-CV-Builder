
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
  accounting: { 
    ar: { 
      personalInfo: {
        fullName: 'أحمد مراد المصري',
        jobTitle: 'محاسب مالي قانوني',
        email: 'ahmed.acc@example.com',
        phone: '+20 100 999 8888',
        location: 'القاهرة، مصر',
        summary: 'محاسب مالي معتمد ذو خبرة في إدارة الدفاتر المحاسبية وإعداد التقارير المالية والضرائب. دقيق جداً في التعامل مع الأرقام وضمان الامتثال للمعايير الدولية للمحاسبة.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400'
      },
      experience: [{ id: '1', company: 'مجموعة المراجعة الكبرى', position: 'محاسب أول', startDate: '2018', endDate: 'الحاضر', description: '• إعداد القوائم المالية السنوية والشهرية.\n• إدارة حسابات العملاء والموردين.\n• تقديم التقارير الضريبية الدقيقة.' }],
      education: [{ id: '2', institution: 'جامعة القاهرة', degree: 'بكالوريوس محاسبة', startDate: '2012', endDate: '2016', description: 'تخصص مراجعة مالية.' }],
      skills: [{ id: 's1', name: 'Financial Reporting', level: 5 }, { id: 's2', name: 'Excel Advanced', level: 5 }, { id: 's3', name: 'Audit', level: 4 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'جيد جداً' }]
    }, 
    en: {
      personalInfo: {
        fullName: 'Ahmed Murad',
        jobTitle: 'Certified Public Accountant',
        email: 'ahmed.acc@example.com',
        phone: '+1 555 999 8888',
        location: 'New York, USA',
        summary: 'Certified financial accountant experienced in bookkeeping, financial reporting, and tax preparation. Highly precise in numerical analysis.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400'
      },
      experience: [{ id: '1', company: 'Global Audit Group', position: 'Senior Accountant', startDate: '2018', endDate: 'Present', description: '• Preparing annual and monthly financial statements.\n• Managing accounts payable and receivable.\n• Tax filing and compliance.' }],
      education: [{ id: '2', institution: 'University of Cairo', degree: 'B.S. in Accounting', startDate: '2012', endDate: '2016', description: 'Audit focus.' }],
      skills: [{ id: 's1', name: 'Financial Reporting', level: 5 }, { id: 's2', name: 'Excel Advanced', level: 5 }, { id: 's3', name: 'Audit', level: 4 }],
      languages: [{ name: 'English', level: 'Fluent' }, { name: 'Arabic', level: 'Native' }]
    }
  },
  marketing: { 
    ar: { 
      personalInfo: {
        fullName: 'ليلى يوسف كمال',
        jobTitle: 'مديرة تسويق رقمي',
        email: 'layla.mark@example.com',
        phone: '+971 50 444 3333',
        location: 'دبي، الإمارات',
        summary: 'خبيرة في استراتيجيات التسويق الرقمي وإدارة الحملات الإعلانية على منصات التواصل الاجتماعي. متخصصة في زيادة نمو العلامات التجارية وتحليل سلوك المستهلك.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      experience: [{ id: '1', company: 'وكالة دبي للإبداع', position: 'مديرة حملات', startDate: '2019', endDate: 'الحاضر', description: '• إدارة ميزانيات تسويقية ضخمة.\n• زيادة عدد المتابعين بنسبة 200%.\n• تحليل بيانات الحملات وتحسين النتائج.' }],
      education: [{ id: '2', institution: 'الجامعة الأمريكية في دبي', degree: 'بكالوريوس تسويق', startDate: '2014', endDate: '2018', description: 'تخصص إعلام رقمي.' }],
      skills: [{ id: 's1', name: 'Social Media Ads', level: 5 }, { id: 's2', name: 'SEO & SEM', level: 4 }, { id: 's3', name: 'Content Strategy', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'ممتاز' }]
    }, 
    en: {
      personalInfo: {
        fullName: 'Layla Kamal',
        jobTitle: 'Digital Marketing Manager',
        email: 'layla.mark@example.com',
        phone: '+971 50 444 3333',
        location: 'Dubai, UAE',
        summary: 'Expert in digital marketing strategies and social media campaign management. Specialized in brand growth and consumer behavior analysis.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      experience: [{ id: '1', company: 'Dubai Creative Agency', position: 'Campaign Manager', startDate: '2019', endDate: 'Present', description: '• Managing large marketing budgets.\n• Achieving 200% follower growth.\n• Data analysis and ROI optimization.' }],
      education: [{ id: '2', institution: 'American University in Dubai', degree: 'B.A. in Marketing', startDate: '2014', endDate: '2018', description: 'Digital Media focus.' }],
      skills: [{ id: 's1', name: 'Social Media Ads', level: 5 }, { id: 's2', name: 'SEO & SEM', level: 4 }, { id: 's3', name: 'Content Strategy', level: 5 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  sales: { 
    ar: { 
      personalInfo: {
        fullName: 'محمد إبراهيم الحربي',
        jobTitle: 'مدير مبيعات إقليمي',
        email: 'mohammed.sales@example.com',
        phone: '+966 54 888 7777',
        location: 'الدمام، السعودية',
        summary: 'محترف مبيعات يمتلك مهارات تفاوض عالية وقدرة على بناء علاقات استراتيجية مع العملاء. خبير في تحقيق الأهداف البيعية وتوسيع حصة السوق.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
      },
      experience: [{ id: '1', company: 'شركة الخليج للتوزيع', position: 'مسؤول مبيعات أول', startDate: '2017', endDate: 'الحاضر', description: '• تجاوز المستهدف السنوي بنسبة 30%.\n• بناء قاعدة عملاء تضم أكثر من 50 شركة كبرى.\n• قيادة فريق المبيعات الميداني.' }],
      education: [{ id: '2', institution: 'جامعة الملك فهد للبترول والمعادن', degree: 'بكالوريوس إدارة أعمال', startDate: '2011', endDate: '2015', description: 'تخصص مبيعات.' }],
      skills: [{ id: 's1', name: 'Negotiation', level: 5 }, { id: 's2', name: 'CRM (Salesforce)', level: 4 }, { id: 's3', name: 'Market Analysis', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'جيد' }]
    }, 
    en: {
      personalInfo: {
        fullName: 'Mohammed Al-Harbi',
        jobTitle: 'Regional Sales Manager',
        email: 'mohammed.sales@example.com',
        phone: '+966 54 888 7777',
        location: 'Dammam, KSA',
        summary: 'Sales professional with high-level negotiation skills and strategic relationship management. Expert in hitting sales targets.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
      },
      experience: [{ id: '1', company: 'Gulf Distribution Co', position: 'Senior Sales Representative', startDate: '2017', endDate: 'Present', description: '• Exceeding annual targets by 30%.\n• Building a database of 50+ major clients.\n• Leading field sales teams.' }],
      education: [{ id: '2', institution: 'KFUPM', degree: 'B.S. in Business Administration', startDate: '2011', endDate: '2015', description: 'Sales focus.' }],
      skills: [{ id: 's1', name: 'Negotiation', level: 5 }, { id: 's2', name: 'CRM (Salesforce)', level: 4 }, { id: 's3', name: 'Market Analysis', level: 5 }],
      languages: [{ name: 'Arabic', level: 'Native' }, { name: 'English', level: 'Fluent' }]
    }
  },
  civil: { 
    ar: { 
      personalInfo: {
        fullName: 'م. عمر بن حسن الفيفي',
        jobTitle: 'مهندس مدني (مشاريع بنية تحتية)',
        email: 'omar.eng@example.com',
        phone: '+966 56 333 4444',
        location: 'نيوم، السعودية',
        summary: 'مهندس مدني محترف متخصص في تخطيط وإدارة مشاريع البناء الكبرى. خبير في استخدام برامج التصميم الهندسي وضمان سلامة المنشآت والجودة.',
        image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400'
      },
      experience: [{ id: '1', company: 'شركة بن لادن للمقاولات', position: 'مهندس موقع', startDate: '2016', endDate: 'الحاضر', description: '• الإشراف على تنفيذ الأعمال الإنشائية.\n• مراجعة المخططات الهندسية والتأكد من مطابقتها.\n• إدارة العمالة والمعدات في الموقع.' }],
      education: [{ id: '2', institution: 'جامعة الملك عبدالعزيز', degree: 'بكالوريوس هندسة مدنية', startDate: '2010', endDate: '2015', description: 'تخصص هندسة إنشائية.' }],
      skills: [{ id: 's1', name: 'AutoCAD', level: 5 }, { id: 's2', name: 'Project Planning', level: 5 }, { id: 's3', name: 'Construction Safety', level: 4 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'جيد جداً' }]
    }, 
    en: {
      personalInfo: {
        fullName: 'Eng. Omar Al-Faifi',
        jobTitle: 'Civil Engineer (Infrastructure)',
        email: 'omar.eng@example.com',
        phone: '+966 56 333 4444',
        location: 'NEOM, KSA',
        summary: 'Professional civil engineer specialized in planning and managing major construction projects. Expert in engineering design software.',
        image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400'
      },
      experience: [{ id: '1', company: 'Bin Laden Group', position: 'Site Engineer', startDate: '2016', endDate: 'Present', description: '• Supervising construction works implementation.\n• Reviewing engineering blueprints.\n• Managing onsite labor and equipment.' }],
      education: [{ id: '2', institution: 'KAU', degree: 'B.S. in Civil Engineering', startDate: '2010', endDate: '2015', description: 'Structural focus.' }],
      skills: [{ id: 's1', name: 'AutoCAD', level: 5 }, { id: 's2', name: 'Project Planning', level: 5 }, { id: 's3', name: 'Construction Safety', level: 4 }],
      languages: [{ name: 'English', level: 'Fluent' }, { name: 'Arabic', level: 'Native' }]
    }
  },
  hr: { 
    ar: { 
      personalInfo: {
        fullName: 'ريم صالح القحطاني',
        jobTitle: 'مديرة موارد بشرية',
        email: 'reem.hr@example.com',
        phone: '+966 59 777 6666',
        location: 'الرياض، السعودية',
        summary: 'أخصائية موارد بشرية خبيرة في التوظيف، التدريب، وتطوير ثقافة العمل. ملتزمة ببناء فرق عمل قوية وتحسين بيئة العمل المؤسسية.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
      },
      experience: [{ id: '1', company: 'شركة الاتصالات السعودية (STC)', position: 'أخصائية توظيف', startDate: '2020', endDate: 'الحاضر', description: '• إدارة عملية التوظيف من الإعلان حتى التعيين.\n• تطوير برامج تدريب الموظفين الجدد.\n• تحسين نظام تقييم الأداء السنوي.' }],
      education: [{ id: '2', institution: 'جامعة الملك سعود', degree: 'بكالوريوس إدارة موارد بشرية', startDate: '2016', endDate: '2020', description: 'تخصص تطوير تنظيمي.' }],
      skills: [{ id: 's1', name: 'Recruitment', level: 5 }, { id: 's2', name: 'Employee Relations', level: 5 }, { id: 's3', name: 'HRIS Systems', level: 4 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'ممتاز' }]
    }, 
    en: {
      personalInfo: {
        fullName: 'Reem Al-Qahtani',
        jobTitle: 'HR Manager',
        email: 'reem.hr@example.com',
        phone: '+966 59 777 6666',
        location: 'Riyadh, KSA',
        summary: 'HR professional expert in recruitment, training, and corporate culture development. Committed to building strong teams.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
      },
      experience: [{ id: '1', company: 'STC', position: 'Recruitment Specialist', startDate: '2020', endDate: 'Present', description: '• Managing end-to-end recruitment process.\n• Developing onboarding programs.\n• Enhancing performance appraisal systems.' }],
      education: [{ id: '2', institution: 'KSU', degree: 'B.A. in HR Management', startDate: '2016', endDate: '2020', description: 'Organizational development focus.' }],
      skills: [{ id: 's1', name: 'Recruitment', level: 5 }, { id: 's2', name: 'Employee Relations', level: 5 }, { id: 's3', name: 'HRIS Systems', level: 4 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  teaching: { 
    ar: { 
      personalInfo: {
        fullName: 'أ. سامي فوزي الغامدي',
        jobTitle: 'معلم لغة عربية متميز',
        email: 'sami.edu@example.com',
        phone: '+966 51 000 1111',
        location: 'المدينة المنورة، السعودية',
        summary: 'معلم تربوي ذو خبرة في أساليب التدريس الحديثة وتحفيز الطلاب. متخصص في تبسيط اللغة العربية وتطوير مهارات القراءة والكتابة.',
        image: 'https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=400'
      },
      experience: [{ id: '1', company: 'مدارس المنارات الأهلية', position: 'معلم لغة عربية', startDate: '2015', endDate: 'الحاضر', description: '• إعداد خطط الدروس والوسائل التعليمية.\n• تنظيم المسابقات الأدبية والثقافية.\n• متابعة تقدم الطلاب الأكاديمي.' }],
      education: [{ id: '2', institution: 'جامعة طيبة', degree: 'بكالوريوس تربية ولغة عربية', startDate: '2010', endDate: '2014', description: 'دبلوم عالي في طرق التدريس.' }],
      skills: [{ id: 's1', name: 'Classroom Management', level: 5 }, { id: 's2', name: 'E-Learning Tools', level: 4 }, { id: 's3', name: 'Student Psychology', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'مقبول' }]
    }, 
    en: {
      personalInfo: {
        fullName: 'Sami Al-Ghamdi',
        jobTitle: 'Senior Arabic Teacher',
        email: 'sami.edu@example.com',
        phone: '+966 51 000 1111',
        location: 'Madinah, KSA',
        summary: 'Educational teacher experienced in modern teaching methods and student motivation. Specialized in simplifying Arabic language.',
        image: 'https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=400'
      },
      experience: [{ id: '1', company: 'Al-Manarat Schools', position: 'Arabic Teacher', startDate: '2015', endDate: 'Present', description: '• Lesson planning and instructional design.\n• Organizing literary competitions.\n• Monitoring academic progress.' }],
      education: [{ id: '2', institution: 'Taibah University', degree: 'B.A. in Education', startDate: '2010', endDate: '2014', description: 'Teaching Methods diploma.' }],
      skills: [{ id: 's1', name: 'Classroom Management', level: 5 }, { id: 's2', name: 'E-Learning Tools', level: 4 }, { id: 's3', name: 'Student Psychology', level: 5 }],
      languages: [{ name: 'Arabic', level: 'Native' }, { name: 'English', level: 'Fair' }]
    }
  },
  pm: { 
    ar: { 
      personalInfo: {
        fullName: 'م. مريم بن علي المطيري',
        jobTitle: 'مديرة مشاريع معتمدة (PMP)',
        email: 'maryam.pm@example.com',
        phone: '+966 50 222 3333',
        location: 'الرياض، السعودية',
        summary: 'مديرة مشاريع خبيرة في تخطيط وتنفيذ المشاريع التقنية والإنشائية ضمن الجدول الزمني والميزانية المحددة. متميزة في إدارة المخاطر وقيادة الفرق.',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de2114?w=400'
      },
      experience: [{ id: '1', company: 'هيئة تطوير الرياض', position: 'مديرة مشروع', startDate: '2018', endDate: 'الحاضر', description: '• إدارة مشاريع بقيمة تتجاوز 10 مليون ريال.\n• التنسيق بين الجهات المعنية والمقاولين.\n• ضمان الجودة والالتزام بالمواصفات.' }],
      education: [{ id: '2', institution: 'جامعة الملك سعود', degree: 'ماجستير إدارة مشاريع', startDate: '2013', endDate: '2015', description: 'شهادة PMP الدولية.' }],
      skills: [{ id: 's1', name: 'Risk Management', level: 5 }, { id: 's2', name: 'Agile & Waterfall', level: 5 }, { id: 's3', name: 'Leadership', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'احترافي' }]
    }, 
    en: {
      personalInfo: {
        fullName: 'Maryam Al-Mutairi',
        jobTitle: 'Project Manager (PMP)',
        email: 'maryam.pm@example.com',
        phone: '+966 50 222 3333',
        location: 'Riyadh, KSA',
        summary: 'Expert project manager in planning and executing tech and construction projects within schedule and budget. Risk management expert.',
        image: 'https://images.unsplash.com/photo-1594744803329-e58b31de2114?w=400'
      },
      experience: [{ id: '1', company: 'Riyadh Development Authority', position: 'Project Manager', startDate: '2018', endDate: 'Present', description: '• Managing projects worth over 10M SAR.\n• Stakeholder and contractor coordination.\n• Quality assurance and compliance.' }],
      education: [{ id: '2', institution: 'KSU', degree: 'M.S. in Project Management', startDate: '2013', endDate: '2015', description: 'PMP Certified.' }],
      skills: [{ id: 's1', name: 'Risk Management', level: 5 }, { id: 's2', name: 'Agile & Waterfall', level: 5 }, { id: 's3', name: 'Leadership', level: 5 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
};

export const SAMPLE_DATA_AR: CVData = SPECIALTIES_DATA.software.ar;
export const SAMPLE_DATA_EN: CVData = SPECIALTIES_DATA.software.en;
