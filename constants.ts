
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
        summary: 'مطور برمجيات خبير يتمتع بخلفية تقنية قوية في بناء وتطوير الأنظمة السحابية المعقدة. متخصص في تقنيات الويب الحديثة، مع سجل حافل في تحسين أداء التطبيقات بنسبة 40% وتقليل تكاليف البنية التحتية. أمتلك مهارات قيادية عالية في إدارة فرق العمل التقنية واتباع منهجيات العمل المرنة (Agile).',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      experience: [
        { id: '1', company: 'شركة التقنية المتقدمة', position: 'رئيس فريق المطورين', startDate: '2021', endDate: 'الحاضر', description: '• قيادة فريق مكون من 10 مطورين لبناء منصة تجارة إلكترونية ضخمة.\n• تصميم هندسة الأنظمة (System Architecture) لضمان القابلية للتوسع.\n• تطبيق بروتوكولات الأمان والمراجعة الدورية للكود لضمان جودة المخرجات.' },
        { id: '2', company: 'حلول الابتكار الرقمي', position: 'مطور واجهات برمجية', startDate: '2018', endDate: '2021', description: '• تطوير واجهات مستخدم تفاعلية باستخدام React و TypeScript.\n• التكامل مع واجهات برمجة التطبيقات (APIs) وتحسين تجربة المستخدم.\n• العمل مع فريق التصميم لضمان مطابقة الواجهات للمعايير العالمية.' }
      ],
      education: [{ id: '3', institution: 'جامعة الملك سعود', degree: 'بكالوريوس علوم الحاسب', startDate: '2014', endDate: '2018', description: 'تخصص في هندسة البرمجيات بمرتبة الشرف.' }],
      skills: [
        { id: 's1', name: 'React.js & Next.js', level: 5 },
        { id: 's2', name: 'Node.js & Express', level: 5 },
        { id: 's3', name: 'PostgreSQL & MongoDB', level: 4 },
        { id: 's4', name: 'Cloud Computing (AWS)', level: 4 }
      ],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'مستوى احترافي' }]
    },
    en: {
      personalInfo: {
        fullName: 'Khaled Mansour',
        jobTitle: 'Senior Full-Stack Developer',
        email: 'khaled.dev@example.com',
        phone: '+1 234 567 890',
        location: 'Dubai, UAE',
        summary: 'Expert Software Developer with a strong technical background in building and developing complex cloud systems. Specialized in modern web technologies, with a proven track record of improving app performance by 40% and reducing infrastructure costs. Possess high leadership skills in managing technical teams following Agile methodologies.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      experience: [
        { id: '1', company: 'Advanced Tech Solutions', position: 'Lead Developer', startDate: '2021', endDate: 'Present', description: '• Leading a team of 10 developers to build a massive e-commerce platform.\n• Designing system architecture to ensure high scalability.\n• Implementing security protocols and periodic code reviews.' },
        { id: '2', company: 'Digital Hub', position: 'Frontend Developer', startDate: '2018', endDate: '2021', description: '• Developing interactive UIs using React and TypeScript.\n• API integration and user experience optimization.\n• Collaborating with design teams for pixel-perfect implementation.' }
      ],
      education: [{ id: '3', institution: 'KSU', degree: 'B.S. in Computer Science', startDate: '2014', endDate: '2018', description: 'Software Engineering focus, with honors.' }],
      skills: [
        { id: 's1', name: 'React.js & Next.js', level: 5 },
        { id: 's2', name: 'Node.js & Express', level: 5 },
        { id: 's3', name: 'PostgreSQL & MongoDB', level: 4 },
        { id: 's4', name: 'Cloud Computing (AWS)', level: 4 }
      ],
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
        summary: 'مصممة مبدعة متخصصة في ابتكار تجارب مستخدم رقمية تركز على احتياجات الإنسان وتدعم أهداف الأعمال. أمتلك خبرة واسعة في بناء أنظمة التصميم (Design Systems) وإجراء أبحاث المستخدم واختبارات القابلية للاستخدام. شغوفة بالبساطة والجمالية في التصميم.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      experience: [
        { id: '1', company: 'استوديو الإبداع الرقمي', position: 'كبير مصممي واجهات المستخدم', startDate: '2020', endDate: 'الحاضر', description: '• قيادة العملية التصميمية من مرحلة العصف الذهني إلى الإطلاق.\n• تصميم واجهات تطبيقات جوال حصدت جوائز تميز.\n• تحسين معدلات التحويل للمواقع بنسبة 25% من خلال تحسين التجربة.' }
      ],
      education: [{ id: '2', institution: 'جامعة الأميرة نورة', degree: 'بكالوريوس التصميم الجرافيكي', startDate: '2015', endDate: '2019', description: 'تخصص دقيق في الوسائط المتعددة.' }],
      skills: [
        { id: 's1', name: 'Figma & Adobe XD', level: 5 },
        { id: 's2', name: 'Visual Hierarchy', level: 5 },
        { id: 's3', name: 'Prototyping', level: 5 },
        { id: 's4', name: 'User Research', level: 4 }
      ],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'مستوى متقدم' }]
    },
    en: {
      personalInfo: {
        fullName: 'Sara Al-Otaibi',
        jobTitle: 'UI/UX Designer',
        email: 'sara.ux@example.com',
        phone: '+1 555 123 4567',
        location: 'London, UK',
        summary: 'Creative designer specializing in innovative human-centered digital user experiences that support business goals. Extensive experience in building Design Systems, user research, and usability testing. Passionate about simplicity and aesthetics in design.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      experience: [
        { id: '1', company: 'Creative Digital Studio', position: 'Senior UI Designer', startDate: '2020', endDate: 'Present', description: '• Leading the design process from ideation to launch.\n• Designing award-winning mobile app interfaces.\n• Improving conversion rates by 25% through UX enhancements.' }
      ],
      education: [{ id: '2', institution: 'University of Arts', degree: 'B.A. in Graphic Design', startDate: '2015', endDate: '2019', description: 'Multimedia specialization.' }],
      skills: [
        { id: 's1', name: 'Figma & Adobe XD', level: 5 },
        { id: 's2', name: 'Visual Hierarchy', level: 5 },
        { id: 's3', name: 'Prototyping', level: 5 },
        { id: 's4', name: 'User Research', level: 4 }
      ],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  accounting: {
    ar: {
      personalInfo: {
        fullName: 'محمد إبراهيم الزهراني',
        jobTitle: 'محاسب مالي قانوني (CPA)',
        email: 'mohammed.cpa@example.com',
        phone: '+966 56 000 1111',
        location: 'الدمام، المملكة العربية السعودية',
        summary: 'محاسب مالي معتمد ذو خبرة واسعة في المراجعة والتدقيق المالي وإعداد التقارير السنوية. خبير في أنظمة الضرائب والزكاة والالتزام بالمعايير الدولية للتقارير المالية (IFRS). أمتلك دقة عالية في التحليل المالي والمساهمة في اتخاذ القرارات الاستراتيجية للشركات.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
      },
      experience: [
        { id: '1', company: 'مجموعة الفوزان القابضة', position: 'مدير الحسابات العامة', startDate: '2019', endDate: 'الحاضر', description: '• الإشراف على الدورة المحاسبية الكاملة وإعداد الميزانيات.\n• إدارة السيولة النقدية والتنبؤات المالية.\n• التنسيق مع مراجعي الحسابات الخارجيين لضمان دقة البيانات.' }
      ],
      education: [{ id: '2', institution: 'جامعة الملك فهد للبترول والمعادن', degree: 'بكالوريوس المحاسبة المالية', startDate: '2014', endDate: '2018', description: 'مرتبة الشرف الثانية.' }],
      skills: [
        { id: 's1', name: 'Financial Reporting', level: 5 },
        { id: 's2', name: 'ERP Systems (SAP)', level: 5 },
        { id: 's3', name: 'Tax Compliance', level: 5 },
        { id: 's4', name: 'Data Analysis', level: 4 }
      ],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'جيد جداً' }]
    },
    en: {
      personalInfo: {
        fullName: 'Mohammed Al-Zahrani',
        jobTitle: 'Certified Public Accountant (CPA)',
        email: 'mohammed.cpa@example.com',
        phone: '+1 555 888 0000',
        location: 'New York, USA',
        summary: 'Certified financial accountant with extensive experience in auditing, financial review, and annual reporting. Expert in tax systems, Zakat, and IFRS compliance. High accuracy in financial analysis and contributing to strategic business decisions.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
      },
      experience: [
        { id: '1', company: 'Al Fozan Holding Group', position: 'General Accounting Manager', startDate: '2019', endDate: 'Present', description: '• Overseeing the full accounting cycle and budget preparation.\n• Cash flow management and financial forecasting.\n• Coordinating with external auditors to ensure data integrity.' }
      ],
      education: [{ id: '2', institution: 'Zayed University', degree: 'B.S. in Financial Accounting', startDate: '2014', endDate: '2018', description: 'Second class honors.' }],
      skills: [
        { id: 's1', name: 'Financial Reporting', level: 5 },
        { id: 's2', name: 'ERP Systems (SAP)', level: 5 },
        { id: 's3', name: 'Tax Compliance', level: 5 },
        { id: 's4', name: 'Data Analysis', level: 4 }
      ],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  marketing: {
    ar: {
      personalInfo: {
        fullName: 'نورة عبد العزيز السعد',
        jobTitle: 'مديرة تسويق رقمي (Digital Marketing Manager)',
        email: 'noura.mkt@example.com',
        phone: '+966 54 222 3333',
        location: 'الرياض، المملكة العربية السعودية',
        summary: 'أخصائية تسويق رقمي بارعة في بناء العلامات التجارية وزيادة التفاعل عبر المنصات الاجتماعية. خبيرة في استراتيجيات SEO و SEM وإدارة الحملات الإعلانية الممولة بميزانيات ضخمة. أعتمد على البيانات في تحليل الأداء وتحقيق أفضل عائد على الاستثمار (ROI).',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      experience: [
        { id: '1', company: 'وكالة سماء للإعلان', position: 'مديرة استراتيجيات التسويق', startDate: '2020', endDate: 'الحاضر', description: '• إدارة حملات تسويقية لشركات كبرى زادت المبيعات بنسبة 30%.\n• الإشراف على فريق صناعة المحتوى والتصميم.\n• تطوير استراتيجيات البريد الإلكتروني والتسويق عبر المؤثرين.' }
      ],
      education: [{ id: '2', institution: 'جامعة الملك سعود', degree: 'بكالوريوس التسويق', startDate: '2015', endDate: '2019', description: 'شهادة احترافية من Google في التسويق الرقمي.' }],
      skills: [
        { id: 's1', name: 'Social Media Strategy', level: 5 },
        { id: 's2', name: 'Google Ads & Analytics', level: 5 },
        { id: 's3', name: 'Content Marketing', level: 5 },
        { id: 's4', name: 'SEO Optimization', level: 4 }
      ],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'ممتاز' }]
    },
    en: {
      personalInfo: {
        fullName: 'Noura Al-Saad',
        jobTitle: 'Digital Marketing Manager',
        email: 'noura.mkt@example.com',
        phone: '+1 555 333 4444',
        location: 'Chicago, USA',
        summary: 'Skilled Digital Marketing specialist in building brands and increasing engagement across social platforms. Expert in SEO, SEM strategies, and managing paid ad campaigns with large budgets. Data-driven approach to performance analysis and ROI optimization.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      experience: [
        { id: '1', company: 'Sky Advertising Agency', position: 'Marketing Strategy Manager', startDate: '2020', endDate: 'Present', description: '• Managing marketing campaigns that increased sales by 30%.\n• Overseeing content creation and design teams.\n• Developing email marketing and influencer strategies.' }
      ],
      education: [{ id: '2', institution: 'Stanford University', degree: 'B.A. in Marketing', startDate: '2015', endDate: '2019', description: 'Google Ads Certification.' }],
      skills: [
        { id: 's1', name: 'Social Media Strategy', level: 5 },
        { id: 's2', name: 'Google Ads & Analytics', level: 5 },
        { id: 's3', name: 'Content Marketing', level: 5 },
        { id: 's4', name: 'SEO Optimization', level: 4 }
      ],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Professional' }]
    }
  }
};

export const SAMPLE_DATA_AR: CVData = SPECIALTIES_DATA.software.ar;
export const SAMPLE_DATA_EN: CVData = SPECIALTIES_DATA.software.en;
