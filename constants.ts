
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
        jobTitle: 'مطور واجهات برمجية أول (Senior Full-Stack Developer)',
        email: 'khaled.dev@example.com',
        phone: '+966 55 123 4567',
        location: 'الرياض، المملكة العربية السعودية',
        summary: 'مطور برمجيات شغوف بخبرة تزيد عن 8 سنوات في بناء منصات الويب القابلة للتوسع. خبير في بيئة عمل JavaScript و TypeScript، مع تركيز خاص على React و Node.js. قمت بقيادة فرق تقنية لتحقيق أهداف معقدة وتحسين أداء التطبيقات بنسبة 40%. أؤمن بالكود النظيف وتجارب المستخدم السلسة.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      experience: [
        { id: '1', company: 'شركة نسيج للتقنية', position: 'رئيس فريق المطورين', startDate: 'يناير 2021', endDate: 'الحاضر', description: '• قيادة فريق من 12 مطوراً لبناء نظام إدارة موارد المؤسسات (ERP).\n• تطبيق معايير الكود النظيف والمراجعة الدورية لضمان الجودة.\n• تقليل زمن تحميل الصفحات بنسبة 50% من خلال تحسين استعلامات قاعدة البيانات.' },
        { id: '2', company: 'حلول الابتكار الرقمي', position: 'مطور Full-Stack', startDate: 'مارس 2017', endDate: 'ديسمبر 2020', description: '• تطوير تطبيقات جوال باستخدام React Native.\n• بناء واجهات برمجية (RESTful APIs) باستخدام Node.js و Express.\n• التكامل مع بوابات الدفع الإلكترونية المختلفة.' }
      ],
      education: [
        { id: '3', institution: 'جامعة الملك فهد للبترول والمعادن', degree: 'بكالوريوس هندسة الحاسب الآلي', startDate: '2012', endDate: '2016', description: 'تخرجت بمرتبة الشرف الأولى مع التركيز على الأنظمة الموزعة.' }
      ],
      skills: [
        { id: 's1', name: 'React & Redux', level: 5 },
        { id: 's2', name: 'Node.js & Express', level: 5 },
        { id: 's3', name: 'PostgreSQL & MongoDB', level: 4 },
        { id: 's4', name: 'Docker & Kubernetes', level: 4 },
        { id: 's5', name: 'AWS Cloud Services', level: 4 }
      ],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'مستوى احترافي' }]
    },
    en: {
      personalInfo: {
        fullName: 'Khaled Mansour',
        jobTitle: 'Senior Full-Stack Developer',
        email: 'khaled.dev@example.com',
        phone: '+1 234 567 890',
        location: 'New York, USA',
        summary: 'Passionate Software Developer with 8+ years of experience in building scalable web platforms. Expert in JavaScript/TypeScript ecosystems, specifically React and Node.js. Led technical teams to achieve complex goals and improved app performance by 40%. Committed to clean code and seamless user experiences.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
      },
      experience: [
        { id: '1', company: 'TechFabric Solutions', position: 'Lead Developer', startDate: 'Jan 2021', endDate: 'Present', description: '• Led a team of 12 developers to build an enterprise ERP system.\n• Implemented clean code standards and periodic code reviews.\n• Reduced page load time by 50% through database query optimization.' },
        { id: '2', company: 'Digital Innovation Hub', position: 'Full-Stack Developer', startDate: 'Mar 2017', endDate: 'Dec 2020', description: '• Developed mobile applications using React Native.\n• Built RESTful APIs using Node.js and Express.\n• Integrated with various e-payment gateways.' }
      ],
      education: [
        { id: '3', institution: 'MIT', degree: 'B.S. in Computer Science', startDate: '2012', endDate: '2016', description: 'Graduated with First Class Honors, focusing on Distributed Systems.' }
      ],
      skills: [
        { id: 's1', name: 'React & Redux', level: 5 },
        { id: 's2', name: 'Node.js & Express', level: 5 },
        { id: 's3', name: 'PostgreSQL & MongoDB', level: 4 },
        { id: 's4', name: 'Docker & Kubernetes', level: 4 },
        { id: 's5', name: 'AWS Cloud Services', level: 4 }
      ],
      languages: [{ name: 'Arabic', level: 'Native' }, { name: 'English', level: 'Fluent' }]
    }
  },
  design: {
    ar: {
      personalInfo: {
        fullName: 'سارة خالد الحربي',
        jobTitle: 'مصممة هويات بصرية وتجربة مستخدم (UI/UX Designer)',
        email: 'sara.design@example.com',
        phone: '+966 50 987 6543',
        location: 'جدة، المملكة العربية السعودية',
        summary: 'مصممة مبدعة متخصصة في بناء الهويات البصرية وتصميم واجهات المستخدم الرقمية. أمتلك قدرة عالية على تحويل الأفكار المعقدة إلى تصاميم بسيطة وجذابة. قمت بتصميم أكثر من 50 تطبيقاً ناجحاً وحصدت جوائز تميز في التصميم الرقمي.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      experience: [
        { id: '1', company: 'استوديو ألوان الإبداعي', position: 'كبير مصممي واجهات المستخدم', startDate: 'أغسطس 2019', endDate: 'الحاضر', description: '• إدارة العملية التصميمية من البحث إلى النموذج الأولي.\n• التعاون مع المطورين لضمان تنفيذ التصاميم بدقة.\n• زيادة معدل التحويل للمواقع المصممة بنسبة 25%.' },
        { id: '2', company: 'وكالة ريادة للدعاية', position: 'مصمم جرافيك', startDate: 'يونيو 2016', endDate: 'يوليو 2019', description: '• تصميم حملات إعلانية لعلامات تجارية كبرى.\n• إنشاء محتوى مرئي لمنصات التواصل الاجتماعي.\n• تصميم المطبوعات والكتيبات التعريفية.' }
      ],
      education: [
        { id: '3', institution: 'جامعة عفت', degree: 'بكالوريوس التصميم الجرافيكي', startDate: '2012', endDate: '2016', description: 'تخصص دقيق في التصميم الرقمي وتجربة المستخدم.' }
      ],
      skills: [
        { id: 's1', name: 'Figma & Adobe XD', level: 5 },
        { id: 's2', name: 'Adobe Photoshop', level: 5 },
        { id: 's3', name: 'Adobe Illustrator', level: 5 },
        { id: 's4', name: 'After Effects', level: 3 },
        { id: 's5', name: 'User Research', level: 4 }
      ],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'جيد جداً' }]
    },
    en: {
      personalInfo: {
        fullName: 'Sara Al-Harbi',
        jobTitle: 'Senior UI/UX Designer',
        email: 'sara.design@example.com',
        phone: '+1 555 987 6543',
        location: 'London, UK',
        summary: 'Creative designer specializing in visual identities and digital user interface design. High ability to transform complex ideas into simple, attractive designs. Designed 50+ successful apps and won awards for digital design excellence.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400'
      },
      experience: [
        { id: '1', company: 'Colors Creative Studio', position: 'Senior UX Designer', startDate: 'Aug 2019', endDate: 'Present', description: '• Managing the design process from research to prototyping.\n• Collaborating with developers to ensure pixel-perfect implementation.\n• Increased conversion rate for designed sites by 25%.' },
        { id: '2', company: 'Riada Advertising Agency', position: 'Graphic Designer', startDate: 'Jun 2016', endDate: 'Jul 2019', description: '• Designed ad campaigns for major brands.\n• Created visual content for social media platforms.\n• Designed print materials and brochures.' }
      ],
      education: [
        { id: '3', institution: 'Royal College of Art', degree: 'B.A. in Graphic Design', startDate: '2012', endDate: '2016', description: 'Specialized in Digital Design and User Experience.' }
      ],
      skills: [
        { id: 's1', name: 'Figma & Adobe XD', level: 5 },
        { id: 's2', name: 'Adobe Photoshop', level: 5 },
        { id: 's3', name: 'Adobe Illustrator', level: 5 },
        { id: 's4', name: 'After Effects', level: 3 },
        { id: 's5', name: 'User Research', level: 4 }
      ],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  accounting: {
    ar: {
      personalInfo: {
        fullName: 'محمد علي الرشيد',
        jobTitle: 'محاسب مالي قانوني (CPA)',
        email: 'mohammed.acc@example.com',
        phone: '+966 56 111 2222',
        location: 'الدمام، المملكة العربية السعودية',
        summary: 'محاسب مالي معتمد بخبرة واسعة في مراجعة الحسابات والتحليل المالي. خبير في التعامل مع قوانين الضرائب والزكاة والأنظمة المحاسبية الدولية (IFRS). أمتلك سجل حافل في تقليل التكاليف التشغيلية وتحسين التدفقات النقدية للشركات.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
      },
      experience: [
        { id: '1', company: 'شركة الخليج للاستثمار', position: 'مدير حسابات', startDate: 'يناير 2020', endDate: 'الحاضر', description: '• إعداد الميزانيات العمومية والتقارير المالية الشهرية والسنوية.\n• الإشراف على عمليات التدقيق الداخلي والخارجي.\n• إدارة السيولة النقدية والتنبؤ المالي للمشاريع.' },
        { id: '2', company: 'مكتب المراجعة المتحد', position: 'محاسب أول', startDate: 'فبراير 2015', endDate: 'ديسمبر 2019', description: '• تدقيق حسابات أكثر من 20 شركة في قطاعات مختلفة.\n• إعداد الإقرارات الضريبية والزكوية.\n• تقديم الاستشارات المالية لتحسين الكفاءة الضريبية.' }
      ],
      education: [
        { id: '3', institution: 'جامعة الملك فيصل', degree: 'بكالوريوس المحاسبة', startDate: '2010', endDate: '2014', description: 'تخرج بتفوق مع الحصول على شهادة CPA أثناء الدراسة.' }
      ],
      skills: [
        { id: 's1', name: 'Financial Analysis', level: 5 },
        { id: 's2', name: 'SAP & Oracle ERP', level: 5 },
        { id: 's3', name: 'IFRS Standards', level: 5 },
        { id: 's4', name: 'Tax Preparation', level: 4 },
        { id: 's5', name: 'Advanced Excel', level: 5 }
      ],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'متوسط' }]
    },
    en: {
      personalInfo: {
        fullName: 'Mohammed Al-Rashid',
        jobTitle: 'Certified Public Accountant (CPA)',
        email: 'mohammed.acc@example.com',
        phone: '+1 555 111 2222',
        location: 'Dubai, UAE',
        summary: 'Certified financial accountant with extensive experience in auditing and financial analysis. Expert in handling tax laws, Zakat, and IFRS standards. Proven track record in reducing operational costs and improving cash flows for companies.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400'
      },
      experience: [
        { id: '1', company: 'Gulf Investment Corp', position: 'Accounting Manager', startDate: 'Jan 2020', endDate: 'Present', description: '• Preparing balance sheets and monthly/annual financial reports.\n• Overseeing internal and external auditing operations.\n• Managing cash liquidity and financial forecasting for projects.' },
        { id: '2', company: 'United Auditing Firm', position: 'Senior Accountant', startDate: 'Feb 2015', endDate: 'Dec 2019', description: '• Audited accounts for 20+ companies across various sectors.\n• Prepared tax and Zakat returns.\n• Provided financial consulting to improve tax efficiency.' }
      ],
      education: [
        { id: '3', institution: 'Zayed University', degree: 'B.S. in Accounting', startDate: '2010', endDate: '2014', description: 'Graduated with honors; obtained CPA certification during studies.' }
      ],
      skills: [
        { id: 's1', name: 'Financial Analysis', level: 5 },
        { id: 's2', name: 'SAP & Oracle ERP', level: 5 },
        { id: 's3', name: 'IFRS Standards', level: 5 },
        { id: 's4', name: 'Tax Preparation', level: 4 },
        { id: 's5', name: 'Advanced Excel', level: 5 }
      ],
      languages: [{ name: 'Arabic', level: 'Native' }, { name: 'English', level: 'Professional' }]
    }
  },
  marketing: {
    ar: {
      personalInfo: {
        fullName: 'نورة فهد السعد',
        jobTitle: 'أخصائية تسويق رقمي ونمو (Growth Marketer)',
        email: 'noura.mkt@example.com',
        phone: '+966 54 333 4444',
        location: 'الرياض، المملكة العربية السعودية',
        summary: 'خبيرة تسويق رقمي بخلفية قوية في تحليل البيانات وزيادة معدلات النمو. متخصصة في إدارة الحملات الإعلانية المدفوعة (SEM)، وتحسين محركات البحث (SEO)، واستراتيجيات المحتوى. ساعدت العديد من الشركات الناشئة على مضاعفة عدد مستخدميها خلال فترات قصيرة.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      experience: [
        { id: '1', company: 'منصة جاهز للابتكار', position: 'مديرة تسويق النمو', startDate: 'مايو 2020', endDate: 'الحاضر', description: '• إدارة ميزانية تسويقية تتجاوز مليون ريال شهرياً.\n• تحقيق نمو بنسبة 200% في قاعدة المستخدمين النشطين.\n• تطوير استراتيجيات الاحتفاظ بالعملاء (Retention strategies).' },
        { id: '2', company: 'وكالة سماء الرقمية', position: 'أخصائي SEO & SEM', startDate: 'يناير 2017', endDate: 'أبريل 2020', description: '• تحسين ظهور المواقع في محركات البحث وتصدر الكلمات المفتاحية.\n• إدارة حملات Google Ads و Social Media Ads.\n• تحليل بيانات Google Analytics لتقديم تقارير الأداء.' }
      ],
      education: [
        { id: '3', institution: 'جامعة الأميرة نورة', degree: 'بكالوريوس التسويق الإلكتروني', startDate: '2012', endDate: '2016', description: 'حاصلة على شهادات معتمدة من Google و HubSpot في التسويق الرقمي.' }
      ],
      skills: [
        { id: 's1', name: 'Google Ads & Analytics', level: 5 },
        { id: 's2', name: 'Facebook Business Suite', level: 5 },
        { id: 's3', name: 'SEO & Content Strategy', level: 5 },
        { id: 's4', name: 'Email Marketing', level: 4 },
        { id: 's5', name: 'A/B Testing', level: 4 }
      ],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'مستوى متقدم' }]
    },
    en: {
      personalInfo: {
        fullName: 'Noura Al-Saad',
        jobTitle: 'Digital Marketing & Growth Lead',
        email: 'noura.mkt@example.com',
        phone: '+1 555 333 4444',
        location: 'San Francisco, USA',
        summary: 'Digital marketing expert with a strong background in data analysis and growth hacking. Specialized in managed paid campaigns (SEM), SEO, and content strategies. Helped multiple startups double their user base within short periods.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400'
      },
      experience: [
        { id: '1', company: 'Jahez Platform', position: 'Growth Marketing Manager', startDate: 'May 2020', endDate: 'Present', description: '• Managing a monthly marketing budget exceeding $200k.\n• Achieved 200% growth in active user base.\n• Developed customer retention strategies.' },
        { id: '2', company: 'Sky Digital Agency', position: 'SEO & SEM Specialist', startDate: 'Jan 2017', endDate: 'Apr 2020', description: '• Optimized website visibility and keyword rankings.\n• Managed Google Ads and Social Media Ads campaigns.\n• Analyzed Google Analytics data to provide performance reports.' }
      ],
      education: [
        { id: '3', institution: 'Stanford University', degree: 'B.A. in Marketing', startDate: '2012', endDate: '2016', description: 'Certified by Google and HubSpot in Digital Marketing.' }
      ],
      skills: [
        { id: 's1', name: 'Google Ads & Analytics', level: 5 },
        { id: 's2', name: 'Facebook Business Suite', level: 5 },
        { id: 's3', name: 'SEO & Content Strategy', level: 5 },
        { id: 's4', name: 'Email Marketing', level: 4 },
        { id: 's5', name: 'A/B Testing', level: 4 }
      ],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  sales: {
    ar: {
      personalInfo: {
        fullName: 'ياسر إبراهيم العمري',
        jobTitle: 'مدير مبيعات إقليمي (Sales Manager)',
        email: 'yasser.sales@example.com',
        phone: '+966 53 555 6666',
        location: 'الخبر، المملكة العربية السعودية',
        summary: 'خبير مبيعات بخبرة تزيد عن 10 سنوات في قطاع الشركات (B2B). أمتلك مهارات تفاوض عالية وقدرة على بناء علاقات استراتيجية طويلة الأمد. قمت بتحقيق وتجاوز أهداف المبيعات السنوية باستمرار بنسبة تصل إلى 150%. خبير في إدارة فرق المبيعات وتحفيزهم.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      },
      experience: [
        { id: '1', company: 'مجموعة الفوزان للتجارة', position: 'مدير مبيعات المنطقة الشرقية', startDate: 'مارس 2018', endDate: 'الحاضر', description: '• الإشراف على فريق مكون من 15 مندوب مبيعات.\n• فتح أسواق جديدة وزيادة الحصة السوقية للشركة بنسبة 20%.\n• تطوير اتفاقيات توريد سنوية مع كبار المقاولين.' },
        { id: '2', company: 'شركة التوريدات العالمية', position: 'مسؤول مبيعات كبار العملاء', startDate: 'أغسطس 2012', endDate: 'فبراير 2018', description: '• إدارة محفظة عملاء تتجاوز قيمتها 10 ملايين ريال.\n• إغلاق صفقات كبرى بنجاح مع جهات حكومية وخاصة.\n• تقديم عروض فنية وتجارية متكاملة.' }
      ],
      education: [
        { id: '3', institution: 'جامعة الملك عبد العزيز', degree: 'بكالوريوس إدارة الأعمال', startDate: '2008', endDate: '2012', description: 'التركيز على التسويق والمبيعات الاستراتيجية.' }
      ],
      skills: [
        { id: 's1', name: 'B2B Sales & Negotiation', level: 5 },
        { id: 's2', name: 'CRM (Salesforce/Odoo)', level: 5 },
        { id: 's3', name: 'Strategic Planning', level: 5 },
        { id: 's4', name: 'Team Leadership', level: 5 },
        { id: 's5', name: 'Market Analysis', level: 4 }
      ],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'جيد' }]
    },
    en: {
      personalInfo: {
        fullName: 'Yasser Al-Omari',
        jobTitle: 'Regional Sales Manager',
        email: 'yasser.sales@example.com',
        phone: '+1 555 555 6666',
        location: 'Chicago, USA',
        summary: 'Sales expert with over 10 years of experience in the B2B sector. High negotiation skills and ability to build long-term strategic relationships. Consistently exceeded annual sales targets by up to 150%. Expert in managing and motivating sales teams.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
      },
      experience: [
        { id: '1', company: 'Al Fozan Trading Group', position: 'Regional Sales Manager', startDate: 'Mar 2018', endDate: 'Present', description: '• Overseeing a team of 15 sales representatives.\n• Opening new markets and increasing market share by 20%.\n• Developing annual supply agreements with major contractors.' },
        { id: '2', company: 'Global Supplies Inc', position: 'Key Account Manager', startDate: 'Aug 2012', endDate: 'Feb 2018', description: '• Managing a client portfolio valued at over $5M.\n• Successfully closed major deals with govt and private entities.\n• Presenting integrated technical and commercial proposals.' }
      ],
      education: [
        { id: '3', institution: 'University of Chicago', degree: 'B.A. in Business Administration', startDate: '2008', endDate: '2012', description: 'Focus on Strategic Marketing and Sales.' }
      ],
      skills: [
        { id: 's1', name: 'B2B Sales & Negotiation', level: 5 },
        { id: 's2', name: 'CRM (Salesforce/Odoo)', level: 5 },
        { id: 's3', name: 'Strategic Planning', level: 5 },
        { id: 's4', name: 'Team Leadership', level: 5 },
        { id: 's5', name: 'Market Analysis', level: 4 }
      ],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  }
};

export const SAMPLE_DATA_AR: CVData = SPECIALTIES_DATA.software.ar;
export const SAMPLE_DATA_EN: CVData = SPECIALTIES_DATA.software.en;
