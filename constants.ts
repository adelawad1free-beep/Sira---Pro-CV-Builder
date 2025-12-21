
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
  },
  civil: {
    ar: {
      personalInfo: {
        fullName: 'أحمد علي الزهراني',
        jobTitle: 'مهندس إنشائي أول (Senior Structural Engineer)',
        email: 'ahmed.civil@example.com',
        phone: '+966 58 222 3333',
        location: 'الرياض، المملكة العربية السعودية',
        summary: 'مهندس مدني ذو خبرة واسعة في تصميم وإدارة المشاريع الإنشائية الضخمة. متخصص في التحليل الإنشائي وإدارة الجودة والمواصفات العالمية للمباني. أمتلك مهارات قيادية لإدارة المواقع والعمل مع فرق متعددة التخصصات لضمان تسليم المشاريع في الموعد المحدد.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
      },
      experience: [
        { id: '1', company: 'شركة أرامكو السعودية', position: 'مهندس موقع رئيسي', startDate: 'أكتوبر 2015', endDate: 'الحاضر', description: '• الإشراف على تنفيذ مشاريع البنية التحتية والمباني الإدارية.\n• ضمان الالتزام بمعايير السلامة والجودة العالمية.\n• مراجعة المخططات الهندسية وجداول الكميات.' }
      ],
      education: [{ id: '2', institution: 'جامعة الملك سعود', degree: 'بكالوريوس الهندسة المدنية', startDate: '2010', endDate: '2015', description: 'تخصص في هندسة الإنشاءات.' }],
      skills: [{ id: 's1', name: 'AutoCAD & Revit', level: 5 }, { id: 's2', name: 'Project Management', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'جيد جداً' }]
    },
    en: {
      personalInfo: {
        fullName: 'Ahmed Al-Zahrani',
        jobTitle: 'Senior Structural Engineer',
        email: 'ahmed.civil@example.com',
        phone: '+1 555 888 7777',
        location: 'Dubai, UAE',
        summary: 'Civil engineer with extensive experience in designing and managing large-scale construction projects. Specialized in structural analysis, quality management, and international building standards. Strong leadership skills in managing sites and working with multidisciplinary teams.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400'
      },
      experience: [
        { id: '1', company: 'Saudi Aramco', position: 'Lead Site Engineer', startDate: 'Oct 2015', endDate: 'Present', description: '• Overseeing infrastructure and administrative building projects.\n• Ensuring compliance with safety and international quality standards.\n• Reviewing engineering blueprints and bill of quantities.' }
      ],
      education: [{ id: '2', institution: 'KSU', degree: 'B.S. in Civil Engineering', startDate: '2010', endDate: '2015', description: 'Structural Engineering focus.' }],
      skills: [{ id: 's1', name: 'AutoCAD & Revit', level: 5 }, { id: 's2', name: 'Project Management', level: 5 }],
      languages: [{ name: 'English', level: 'Professional' }, { name: 'Arabic', level: 'Native' }]
    }
  },
  hr: {
    ar: {
      personalInfo: {
        fullName: 'ريم صالح السعدي',
        jobTitle: 'مديرة موارد بشرية (HR Manager)',
        email: 'reem.hr@example.com',
        phone: '+966 59 444 5555',
        location: 'جدة، المملكة العربية السعودية',
        summary: 'خبيرة في إدارة الموارد البشرية مع تركيز على استقطاب الكفاءات وتطوير الثقافة التنظيمية. أمتلك خبرة واسعة في نظام العمل السعودي وبرامج التحول الرقمي للموارد البشرية. أؤمن بأن رأس المال البشري هو المحرك الأساسي لنجاح أي منشأة.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400'
      },
      experience: [
        { id: '1', company: 'مجموعة صافولا', position: 'رئيس قسم التوظيف', startDate: 'نوفمبر 2018', endDate: 'الحاضر', description: '• تطوير استراتيجيات التوظيف السنوية.\n• إدارة عمليات تقييم الأداء وبرامج التدريب.\n• تحسين بيئة العمل وزيادة معدل الرضا الوظيفي.' }
      ],
      education: [{ id: '2', institution: 'جامعة الملك عبد العزيز', degree: 'بكالوريوس إدارة الموارد البشرية', startDate: '2012', endDate: '2016', description: 'حاصلة على شهادة SHRP المعتمدة.' }],
      skills: [{ id: 's1', name: 'Recruitment Strategy', level: 5 }, { id: 's2', name: 'Conflict Resolution', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'ممتاز' }]
    },
    en: {
      personalInfo: {
        fullName: 'Reem Al-Saadi',
        jobTitle: 'HR Manager',
        email: 'reem.hr@example.com',
        phone: '+1 555 222 1111',
        location: 'Toronto, Canada',
        summary: 'HR management expert focusing on talent acquisition and developing organizational culture. Extensive experience in labor laws and digital HR transformation. I believe human capital is the main driver for any facility success.',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400'
      },
      experience: [
        { id: '1', company: 'Savola Group', position: 'Head of Talent Acquisition', startDate: 'Nov 2018', endDate: 'Present', description: '• Developing annual recruitment strategies.\n• Managing performance appraisal and training programs.\n• Improving work environment and job satisfaction rates.' }
      ],
      education: [{ id: '2', institution: 'University of Toronto', degree: 'B.A. in Human Resources', startDate: '2012', endDate: '2016', description: 'SHRP certified professional.' }],
      skills: [{ id: 's1', name: 'Recruitment Strategy', level: 5 }, { id: 's2', name: 'Conflict Resolution', level: 5 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Professional' }]
    }
  },
  medical: {
    ar: {
      personalInfo: {
        fullName: 'د. فيصل بن محمد',
        jobTitle: 'طبيب باطنة (Internal Medicine Specialist)',
        email: 'faisal.med@example.com',
        phone: '+966 57 888 9999',
        location: 'المدينة المنورة، المملكة العربية السعودية',
        summary: 'طبيب ممارس بخبرة واسعة في تشخيص وعلاج الأمراض الباطنية. ملتزم بتقديم أعلى مستويات الرعاية الصحية القائمة على البراهين. أمتلك مهارات تواصل ممتازة مع المرضى وعائلاتهم لضمان تجربة علاجية مريحة وفعالة.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b1f8?w=400'
      },
      experience: [
        { id: '1', company: 'مستشفى الملك فيصل التخصصي', position: 'طبيب مقيم أول', startDate: 'يناير 2017', endDate: 'الحاضر', description: '• تشخيص ومتابعة الحالات المعقدة في قسم الباطنة.\n• المشاركة في الأبحاث الطبية المنشورة.\n• الإشراف على تدريب الأطباء المستجدين.' }
      ],
      education: [{ id: '2', institution: 'جامعة طيبة', degree: 'بكالوريوس الطب والجراحة (MBBS)', startDate: '2008', endDate: '2015', description: 'تخرج بامتياز مع مرتبة الشرف.' }],
      skills: [{ id: 's1', name: 'Patient Care', level: 5 }, { id: 's2', name: 'Medical Diagnosis', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'ممتاز' }]
    },
    en: {
      personalInfo: {
        fullName: 'Dr. Faisal Mohammed',
        jobTitle: 'Internal Medicine Specialist',
        email: 'faisal.med@example.com',
        phone: '+1 555 000 9999',
        location: 'Boston, USA',
        summary: 'Practitioner with extensive experience in diagnosing and treating internal diseases. Committed to providing high levels of evidence-based healthcare. Excellent communication skills with patients and their families to ensure a comfortable experience.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b1f8?w=400'
      },
      experience: [
        { id: '1', company: 'King Faisal Specialist Hospital', position: 'Senior Resident Doctor', startDate: 'Jan 2017', endDate: 'Present', description: '• Diagnosing complex cases in the Internal Medicine department.\n• Participating in published medical research.\n• Overseeing the training of medical students.' }
      ],
      education: [{ id: '2', institution: 'Harvard Medical School', degree: 'MBBS', startDate: '2008', endDate: '2015', description: 'Graduated with honors.' }],
      skills: [{ id: 's1', name: 'Patient Care', level: 5 }, { id: 's2', name: 'Medical Diagnosis', level: 5 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  teaching: {
    ar: {
      personalInfo: {
        fullName: 'ليلى منصور القحطاني',
        jobTitle: 'معلمة لغة إنجليزية أولى (Senior English Teacher)',
        email: 'layla.teach@example.com',
        phone: '+966 51 000 1111',
        location: 'أبها، المملكة العربية السعودية',
        summary: 'معلمة مبدعة تمتلك أكثر من 12 عاماً من الخبرة في تدريس اللغة الإنجليزية للمراحل الثانوية والجامعية. خبيرة في تطبيق أساليب التعلم النشط وتوظيف التقنية في التعليم. أمتلك شغفاً كبيراً بتطوير مهارات الطلاب اللغوية وتعزيز ثقتهم بأنفسهم.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
      },
      experience: [
        { id: '1', company: 'مدارس الرواد العالمية', position: 'رئيسة قسم اللغة الإنجليزية', startDate: 'سبتمبر 2014', endDate: 'الحاضر', description: '• تطوير المناهج الدراسية وخطط التدريس.\n• الإشراف على معلمات القسم وتقديم الدعم الفني.\n• تنظيم فعاليات وأنشطة طلابية باللغة الإنجليزية.' }
      ],
      education: [{ id: '2', institution: 'جامعة الملك خالد', degree: 'بكالوريوس اللغة الإنجليزية وآدابها', startDate: '2008', endDate: '2012', description: 'دبلوم عالي في التربية والتعليم.' }],
      skills: [{ id: 's1', name: 'Curriculum Design', level: 5 }, { id: 's2', name: 'Educational Technology', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'اللغة الأم' }]
    },
    en: {
      personalInfo: {
        fullName: 'Layla Al-Qahtani',
        jobTitle: 'Senior English Teacher',
        email: 'layla.teach@example.com',
        phone: '+1 555 444 3333',
        location: 'Sydney, Australia',
        summary: 'Creative teacher with 12+ years of experience in teaching English for high school and university levels. Expert in active learning and integrating technology in education. Passionate about developing student language skills.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400'
      },
      experience: [
        { id: '1', company: 'Pioneer International Schools', position: 'Head of English Department', startDate: 'Sep 2014', endDate: 'Present', description: '• Developing curriculum and teaching plans.\n• Overseeing department teachers and providing technical support.\n• Organizing student activities and events in English.' }
      ],
      education: [{ id: '2', institution: 'University of Sydney', degree: 'B.A. in English Literature', startDate: '2008', endDate: '2012', description: 'Higher Diploma in Education.' }],
      skills: [{ id: 's1', name: 'Curriculum Design', level: 5 }, { id: 's2', name: 'Educational Technology', level: 5 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Fluent' }]
    }
  },
  pm: {
    ar: {
      personalInfo: {
        fullName: 'سامي عبد الرحمن البسام',
        jobTitle: 'مدير مشاريع محترف (PMP Certified)',
        email: 'sami.pm@example.com',
        phone: '+966 52 777 8888',
        location: 'الرياض، المملكة العربية السعودية',
        summary: 'مدير مشاريع استراتيجي بخلفية تقنية وهندسية قوية. خبير في منهجيات Agile و Waterfall لإدارة دورة حياة المشروع بالكامل من التخطيط إلى التسليم. بارع في إدارة الميزانيات، الموارد، والتواصل مع أصحاب المصلحة لتحقيق نتائج استثنائية.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400'
      },
      experience: [
        { id: '1', company: 'شركة الاتصالات السعودية (STC)', position: 'مدير مكتب إدارة المشاريع (PMO)', startDate: 'يونيو 2016', endDate: 'الحاضر', description: '• إدارة محفظة مشاريع تقنية تتجاوز 50 مليون ريال.\n• تطبيق منهجيات إدارة المشاريع لزيادة كفاءة العمل بنسبة 30%.\n• التنسيق بين الفرق التقنية والتجارية لضمان التوافق الاستراتيجي.' }
      ],
      education: [{ id: '2', institution: 'جامعة الأمير سلطان', degree: 'ماجستير إدارة المشاريع', startDate: '2012', endDate: '2014', description: 'بكالوريوس نظم المعلومات الإدارية.' }],
      skills: [{ id: 's1', name: 'Risk Management', level: 5 }, { id: 's2', name: 'Agile & Scrum', level: 5 }],
      languages: [{ name: 'العربية', level: 'اللغة الأم' }, { name: 'الإنجليزية', level: 'مستوى احترافي' }]
    },
    en: {
      personalInfo: {
        fullName: 'Sami Al-Bassam',
        jobTitle: 'Certified Project Manager (PMP)',
        email: 'sami.pm@example.com',
        phone: '+1 555 777 8888',
        location: 'London, UK',
        summary: 'Strategic Project Manager with a strong technical and engineering background. Expert in Agile and Waterfall methodologies to manage the full project lifecycle. Skilled in budget management, resources, and stakeholder communication.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400'
      },
      experience: [
        { id: '1', company: 'STC Solutions', position: 'PMO Manager', startDate: 'Jun 2016', endDate: 'Present', description: '• Managing a tech project portfolio exceeding $15M.\n• Implementing PM methodologies to increase efficiency by 30%.\n• Coordinating between tech and business teams.' }
      ],
      education: [{ id: '2', institution: 'London School of Economics', degree: 'M.Sc. in Project Management', startDate: '2012', endDate: '2014', description: 'B.S. in Information Systems.' }],
      skills: [{ id: 's1', name: 'Risk Management', level: 5 }, { id: 's2', name: 'Agile & Scrum', level: 5 }],
      languages: [{ name: 'English', level: 'Native' }, { name: 'Arabic', level: 'Professional' }]
    }
  }
};

export const SAMPLE_DATA_AR: CVData = SPECIALTIES_DATA.software.ar;
export const SAMPLE_DATA_EN: CVData = SPECIALTIES_DATA.software.en;
