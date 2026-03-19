export type Contact = {
  name: string;
  handle: string;
  url: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  logo: string;
  description: string;
  highlights: string[];
};

export type GalleryItem = {
  image?: string;
  caption: string;
  description: string;
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  logo?: string;
  description: string;
  responsibilities: string[];
  tech: string[];
  gallery: GalleryItem[];
};

export type Project = {
  name: string;
  type: string;
  description: string;
  tech: string[];
  demo?: string;
  github?: string;
  image?: string;
};

export type Certificate = {
  name: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
  id?: string;
  score?: string;
  skills: string[];
  category: 'core' | 'additional';
  verified: boolean;
};

export type Publication = {
  title: string;
  journal: string;
  year: string;
  status: string;
  authors: string;
  abstract: string;
  tags: string[];
  doi: string;
};

export const portfolioData = {
  meta: {
    title: 'Rasas Aufar - IT Implementation Portfolio',
    description:
      'IT Implementation Professional experienced in government technology delivery, infrastructure operations, and applied data analysis.',
  },
  profile: {
    name: 'Rasas Aufar',
    role: 'IT Implementation Professional',
    availability: 'Available for Opportunities',
    lead:
      'IT Implementation Professional experienced in managing and delivering technology solutions for government projects, ensuring reliable system implementation, process optimization, and alignment with organizational and public sector needs.',
    biography: [
      'A Computer Science graduate currently pursuing a career as an IT Implementor with specialized capabilities in IT Infrastructure and Data Analysis. Possesses a robust technical foundation in integrating technology solutions, ensuring systems align with operational requirements, and leveraging data-driven insights to support strategic decision-making.',
      'Demonstrates a solid track record in managing large-scale projects within the public sector and government institutions. Experience spans across Linux-based server infrastructure management (Ubuntu), complex database operations, and comprehensive application deployment and functional testing. Proven ability to oversee the end-to-end implementation of information systems, including the management of digital attendance systems and institutional learning platforms.',
      'Beyond technical proficiency, exhibits strong managerial skills through the systematic and accurate preparation of monthly technical documentation. Experienced in leading technical guidance sessions and user training programs, ensuring seamless technology transfer and ensuring that applications are utilized optimally by all stakeholders.',
    ],
  },
  navigation: [
    { id: 'hero', label: 'Identity' },
    { id: 'capabilities', label: 'Capabilities' },
    { id: 'operations', label: 'Field Operations' },
    { id: 'laboratory', label: 'Project Lab' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'research', label: 'Research' },
    { id: 'contact', label: 'Contact' },
  ],
  stats: [
    { value: '2+', label: 'Years Exp.' },
    { value: '5+', label: 'Projects' },
    { value: '1', label: 'Publications' },
  ],
  skillStack: ['Linux', 'UI / UX Design', 'Technical Documentation', 'Database', 'Prototyping', 'Figma', 'Deployment'],
  capabilityAreas: [
    {
      title: 'Infrastructure Reliability',
      points: ['Ubuntu server administration', 'Production database backup and recovery', 'Deployment and post-deployment validation'],
    },
    {
      title: 'Implementation Delivery',
      points: ['Onsite government system implementation', 'Cross-unit stakeholder coordination', 'Monthly technical reporting and change requests'],
    },
    {
      title: 'Training and Enablement',
      points: ['Technical guidance sessions', 'Presenter for defense-sector application training', 'Operational handover and user adoption support'],
    },
  ],
  contacts: [
    {
      name: 'GitHub',
      handle: 'rasasaufar',
      url: 'https://github.com/rasasaufar',
    },
    {
      name: 'LinkedIn',
      handle: 'Rasas Aufar',
      url: 'https://www.linkedin.com/in/rasasaufar/',
    },
    {
      name: 'WhatsApp',
      handle: '(+62) 85326775595',
      url: 'https://wa.me/085326775595',
    },
    {
      name: 'Email',
      handle: 'rasasaufar4@gmail.com',
      url: 'mailto:rasasaufar4@gmail.com',
    },
    {
      name: 'Instagram',
      handle: '@rasasaufar',
      url: 'https://instagram.com/rasasaufar',
    },
  ] satisfies Contact[],
  education: [
    {
      degree: 'Bachelor of Informatics Engineering',
      institution: 'Telkom University Purwokerto',
      period: '2018 - 2022',
      gpa: '3.23',
      logo: '/images/education/telkom-university-logo.webp',
      description:
        'An ordinary college student who was quite active in university sports, particularly Badminton and Futsal, and managed to successfully graduate on time.',
      highlights: ['Graduated on Time'],
    },
    {
      degree: 'Senior High School - Science',
      institution: 'SMAN 4 Kota Pekalongan',
      period: '2015 - 2018',
      gpa: '92.5',
      logo: '/images/education/sman4-pekalongan-logo.jpg',
      description:
        'Excelled in mathematics and science subjects. Participated in national olympiads and coding competitions.',
      highlights: ['National Science Olympiad', 'Student Council', 'Top 10 Graduate'],
    },
  ] satisfies Education[],
  experiences: [
    {
      company: 'PT. Traspac Makmur Sejahtera',
      position: 'IT Implementation',
      period: 'Aug 2024 - Present',
      logo: 'https://karir.traspac.id/assets/img/logotraspac.png',
      description:
        'Serve as an IT Implementor, IT Infrastructure specialist, and Data Analyst, leading multiple projects across government ministries and military institutions.',
      responsibilities: [
        'Kemenlu RI - Worked onsite with the SISTIK Sub-Directorate of the PWNI Directorate to provide technical support for developing the "Safe Travel" website and managing the "Portal Peduli WNI" server infrastructure using Ubuntu',
        'Kemenlu RI - Prepared monthly technical documentation, including maintenance reports, bug analyses, troubleshooting guides, and change request management',
        'Mabes TNI - Managed critical database operations, including routine backup and recovery in production environments to ensure data integrity',
        'Mabes TNI - Led Sisfopajak application Deployment on physical server infrastructure and executed comprehensive post-deployment functional testing and verification',
        'Mabes TNI - Served as presenter for training on the Alutsista Data System and supporting applications at Mabes TNI, Mabes AL, and the Ministry of Defense Data and Information Center',
        'Ministry of Downstreaming and Investment - Managed the attendance system for BKPM human resources operations',
      ],
      tech: ['Ubuntu', 'Server Infrastructure', 'Database Management', 'Application Deployment'],
      gallery: [
        {
          image: '/images/gallery/traspac-kemenlu.png',
          caption: 'Ministry of Foreign Affairs of the Republic of Indonesia',
          description:
            'Delivered technical support and technical guidance activities with the SISTIK Sub-Directorate of the PWNI Directorate at the Ministry of Foreign Affairs of the Republic of Indonesia.',
        },
        {
          image: '/images/gallery/traspac-kemhan.png',
          caption: 'Ministry of Defense Data and Information Center',
          description:
            'Served as the training presenter for the Alutsista Data System and supporting applications at the Ministry of Defense Data and Information Center of the Republic of Indonesia.',
        },
      ],
    },
    {
      company: 'PT. Metro Network Solutions',
      position: 'Operator Scanner',
      period: 'Sep 2023 - Dec 2023',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQHq1FwKfCDJZA/company-logo_200_200/company-logo_200_200/0/1667985560103/pt_metronet_logo?e=2147483647&v=beta&t=gsRuAkezzvj65j2AGShob4KmQDCnAjpuGbO4YH5xGZE',
      description:
        'Served on the Archive Digitization project team at the National Land Agency (BPN) of Pekalongan City, supporting the transformation of physical records into digital archives.',
      responsibilities: [
        'Contributed to the digitization project at the National Land Agency (BPN) Office of Pekalongan City',
        'Sorted and organized physical albums and documents with high accuracy prior to digitization',
        'Performed high-volume daily document scanning to support archival preparation',
        'Edited and optimized scanned outputs using NAPS2 to ensure clarity, alignment, and readability',
        'Maintained high discipline and performance under pressure to consistently meet scanning targets and deadlines',
        'Safeguarded the completeness, confidentiality, and integrity of high-value land documents throughout the project',
      ],
      tech: ['NAPS2', 'Document Editing', 'Data Management', 'Scanner Handling'],
      gallery: [
        {
          image: '/images/gallery/bpn-closing.jpeg',
          caption: 'Project Closing',
          description:
            'Team closing moment with the full implementation team at the end of the BPN Pekalongan City Archive Digitization project after successfully achieving all scanning targets.',
        },
      ],
    },
    {
      company: 'Niagahoster - Web Hosting Unlimited Indonesia',
      position: 'Project-Based Virtual Intern : UI / UX Designer',
      period: 'Jul 2023 - Aug 2023',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYFavWOvYAbq_z018Y5-cZNuutUC_256vVw&s',
      description: 'Completed a project-based virtual internship with Rakamin Academy (Niagahoster x Rakamin Academy).',
      responsibilities: [
        'Completed project assignments aligned with the UI/UX Designer role at Niagahoster',
        'Designed user interfaces and user experiences to improve usability and customer flow',
        'Built wireframes and interactive prototypes to visualize end-to-end user journeys, including Checkout Flow',
      ],
      tech: ['User Experience (UX)', 'Prototyping', 'User Interface', 'Wireframing'],
      gallery: [
        {
          image: '/images/gallery/Niagahoster.png',
          caption: 'Checkout Flow',
          description:
            'Redesigned Checkout Flow for the Niagahoster website to deliver a secure, intuitive, and efficient shopping and payment experience.',
        },
        {
          image: '/images/gallery/5.png',
          caption: 'Certificate of Completion',
          description:
            'Official completion certificate validating achievements, successful program delivery, and essential UI/UX skill development during the virtual internship.',
        },
      ],
    },
    {
      company: 'Nuri',
      position: 'Project-Based Virtual Intern : UI / UX Designer',
      period: 'Jul 2023 - Aug 2023',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW4zjU4gLFxMQ7K2mBzwpxOHJId1nbb28LA&s',
      description: 'Completed a project-based virtual internship with Rakamin Academy (Nuri x Rakamin Academy).',
      responsibilities: [
        'Completed project assignments aligned with the UI/UX Designer role at Nuri',
        'Developed design solutions from research through User Interface and User Experience execution',
        'Created design deliverables from low-fidelity wireframes to high-fidelity prototypes',
      ],
      tech: ['User Experience (UX)', 'Prototyping', 'User Interface', 'Wireframing'],
      gallery: [
        {
          image: '/images/gallery/Nuri.png',
          caption: 'Nuri Final Task',
          description:
            'Final project focused on designing the user interface for the COD feature on the Nuri e-commerce platform.',
        },
        {
          image: '/images/gallery/6.png',
          caption: 'Certificate of Completion',
          description: 'Official completion certificate from the Nuri x Rakamin Academy virtual internship program.',
        },
      ],
    },
    {
      company: 'Dinas Komunikasi dan Informatika Kab. Pekalongan',
      position: 'Student Internship',
      period: 'Sep 2021 - Oct 2021',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Lambang_Kabupaten_Pekalongan.JPG',
      description:
        'Completed an internship focused on interface design and supporting system development for local government initiatives.',
      responsibilities: [
        'Designed the UI/UX for an e-commerce application aimed at supporting UMKM growth in Pekalongan Regency',
        'Rapidly acquired new skills and applied them to daily tasks to improve operational efficiency and productivity',
        'Collaborated actively in the agency work environment, supported team members, and aligned deliverables with user needs',
      ],
      tech: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
      gallery: [
        {
          image: '/images/gallery/dinkominfo.jpg',
          caption: 'Dinkominfo Office',
          description:
            'Office of the Pekalongan Regency Department of Communication and Informatics, where the internship program was carried out.',
        },
        {
          image: '/images/gallery/Magang.png',
          caption: 'E-Commerce UMKM',
          description:
            'UI/UX design for an e-commerce platform developed to be accessible and easy to use for UMKM business owners.',
        },
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'Fake Project',
      type: 'Landing Page',
      description: 'Designed and developed a restaurant website landing page.',
      tech: ['UI/UX Design', 'Figma'],
      demo: 'https://drive.google.com/file/d/1hqhdVyanQeePJewHR8PJ9kK07BdrkfOJ/view?usp=sharing',
      github: '',
      image: '/images/portfolio/Aarss.png',
    },
    {
      name: 'Final Project Redesign Maxim',
      type: 'Redesign App',
      description: 'Redesigned the Maxim application and added Top Up and payment features.',
      tech: ['UI/UX Design', 'Figma', 'Prototyping'],
      demo: 'https://drive.google.com/file/d/14rentR_FyblFyTi5F63m0UeVRDSomjyJ/view?usp=sharing',
      github: '',
      image: '/images/portfolio/Maxim.png',
    },
    {
      name: 'Final Task Nuri x Rakamin Academy',
      type: 'Feature Design',
      description: 'Designed and integrated a Cash On Delivery (COD) feature for an e-commerce application.',
      tech: ['UI/UX Design', 'Figma'],
      demo: 'https://drive.google.com/file/d/1GoF12FssWWEjVzu2kExP58ZMcDjMV4zG/view?usp=sharing',
      github: '',
      image: '/images/portfolio/Nuri.png',
    },
    {
      name: 'Final Task Niagahoster x Rakamin Academy',
      type: 'Web Design',
      description: 'Designed a Checkout Flow for the Niagahoster website.',
      tech: ['UI/UX Design', 'Figma'],
      demo: 'https://drive.google.com/file/d/1GdUdGYV2Tg1zPnZXwADqJSzOUguJFTPj/view?usp=sharing',
      github: '',
      image: '/images/portfolio/Niagahoster.png',
    },
    {
      name: 'UMKM Shopping Application in Kajen',
      type: 'App Design',
      description: 'Designed the UI for a shopping application for UMKM in Kajen, Pekalongan Regency.',
      tech: ['UI/UX Design', 'Figma'],
      demo: 'https://bit.ly/ProtoypeMagang',
      github: '',
      image: '/images/portfolio/Magang.png',
    },
    {
      name: 'Mini Task in Short Class @myskill.id',
      type: 'Mini Task',
      description: 'Completed the design tasks assigned during the mini task program.',
      tech: ['UI/UX Design', 'Figma'],
      demo: 'https://www.figma.com/proto/LsBpusfnm1lkL8gUjjGSLR/MiniTask---MySkill?page-id=0%3A1&type=design&node-id=2-541&viewport=609%2C593%2C0.36&t=Fq9mTWEDSw0SxcEg-1&scaling=scale-down&starting-point-node-id=2%3A541&mode=design',
      github: '',
      image: '/images/portfolio/Minitask.png',
    },
  ] satisfies Project[],
  certificates: [
    {
      name: 'Wawasan Karir dalam Bidang Data Analytics',
      issuer: 'Digital Talent Scholarship',
      year: 'Jul 2025',
      image: '/images/certificates/dts-logo.png',
      description: 'Pelatihan wawasan karir di bidang Data Analytics melalui program Digital Talent Scholarship.',
      id: '2299746850-4500',
      skills: ['Data Analytics', 'Data Visualization'],
      category: 'additional',
      verified: true,
    },
    {
      name: 'Pengenalan Data Science dan Pemanfaatannya dalam Berbagai Sektor',
      issuer: 'Digital Talent Scholarship',
      year: 'Jul 2025',
      image: '/images/certificates/dts-logo.png',
      description:
        'Pelatihan pengenalan Data Science dan penerapannya di berbagai sektor industri melalui Digital Talent Scholarship.',
      id: '2299818850-4751',
      skills: ['Data Science', 'Data Analysis'],
      category: 'additional',
      verified: true,
    },
    {
      name: 'Keamanan IT: Pertahanan terhadap Kejahatan Digital',
      issuer: 'Coursera',
      year: 'Jul 2024',
      image: '/images/certificates/coursera-logo.png',
      description: 'Kursus keamanan IT dari Google IT Support Specialization.',
      id: 'TDN7P3MAAEG7',
      skills: ['Cybersecurity', 'Encryption', 'Network Security'],
      category: 'core',
      verified: true,
    },
    {
      name: 'Administrasi Sistem dan Layanan Infrastruktur TI',
      issuer: 'Coursera',
      year: 'Jul 2024',
      image: '/images/certificates/coursera-logo.png',
      description: 'Kursus administrasi sistem dari Google IT Support Specialization.',
      id: 'RC8NK9PBR5XG',
      skills: ['Server Management', 'Directory Services', 'IT Infrastructure'],
      category: 'core',
      verified: true,
    },
    {
      name: 'Sistem Operasi dan Anda: Menjadi Pengguna yang Berdaya',
      issuer: 'Coursera',
      year: 'Jul 2024',
      image: '/images/certificates/coursera-logo.png',
      description: 'Kursus tentang sistem operasi dari Google IT Support Specialization.',
      id: '7KU8JRMPQVHJ',
      skills: ['Windows', 'Linux', 'File Management', 'Command Line'],
      category: 'core',
      verified: true,
    },
    {
      name: 'Spesialisasi IT Support Google',
      issuer: 'Google',
      year: 'Jul 2024',
      image: '/images/certificates/google-logo.png',
      description: 'Sertifikasi profesional dari Google yang mencakup berbagai keahlian IT.',
      id: 'YL552W7AGU2G',
      skills: [
        'Cloud Computing',
        'Computer Networking',
        'IT Security',
        'System Administration',
        'Troubleshooting',
        'Operating Systems',
      ],
      category: 'core',
      verified: true,
    },
    {
      name: 'Seluk Beluk Jaringan Komputer',
      issuer: 'Coursera',
      year: 'Jun 2024',
      image: '/images/certificates/coursera-logo.png',
      description: 'Kursus jaringan komputer dari Google IT Support Specialization.',
      id: '2FLPLT9K6MXS',
      skills: ['TCP/IP', 'DNS', 'DHCP', 'Network Troubleshooting'],
      category: 'core',
      verified: true,
    },
    {
      name: 'Dasar-Dasar Dukungan Teknis',
      issuer: 'Coursera',
      year: 'Mei 2024',
      image: '/images/certificates/coursera-logo.png',
      description: 'Kursus dasar dukungan teknis dari Google IT Support Specialization.',
      id: '7C2ZULPDA5P6',
      skills: ['Troubleshooting', 'Customer Service', 'Operating Systems'],
      category: 'core',
      verified: true,
    },
    {
      name: 'TOEFL',
      issuer: 'Englishvit',
      year: 'Okt 2023',
      image: '/images/certificates/englishvit-logo.png',
      description: 'Sertifikat kemampuan bahasa Inggris melalui tes TOEFL online. Berlaku hingga Oktober 2025.',
      score: '542',
      id: 'EV/TO4/10/2023/0159',
      skills: ['English Proficiency', 'TOEFL'],
      category: 'additional',
      verified: true,
    },
    {
      name: 'Certificate of Mastery UI-UX Research and Design: Fullstack Intensive Bootcamp',
      issuer: 'MySkill',
      year: 'Sep 2023',
      image: '/images/certificates/myskill-logo.png',
      description: 'Sertifikat kelulusan bootcamp intensif UI-UX Research and Design Fullstack.',
      id: 'MS-1/9/2023-5qlzkE6XeBcbQREEVF0I',
      skills: ['User Interface', 'User Experience (UX)', 'Design Research'],
      category: 'additional',
      verified: true,
    },
    {
      name: 'Certificate of Competencies - Nuri UI/UX Designer Virtual Internship',
      issuer: 'Nuri',
      year: 'Jul 2023',
      image: '/images/certificates/nuri-logo.png',
      description: 'Sertifikat kompetensi UI/UX Designer melalui program virtual internship Nuri x Rakamin Academy.',
      id: '212536IAPMGIN2672023',
      skills: ['Sketching', 'Design Thinking', 'User Interface', 'User Experience', 'Prototyping'],
      category: 'additional',
      verified: true,
    },
    {
      name: 'Figma For UI/UX Design',
      issuer: 'MySkill',
      year: 'Jul 2023',
      image: '/images/certificates/myskill-logo.png',
      description: 'Pelatihan desain UI/UX menggunakan Figma.',
      id: '48508/UIX/LM/07/2023',
      skills: ['Figma', 'User Interface Design'],
      category: 'additional',
      verified: true,
    },
    {
      name: 'Fundamental UX Design',
      issuer: 'Coding Studio',
      year: 'Jul 2023',
      image: '/images/certificates/coding-studio-logo.png',
      description: 'Pelatihan dasar User Experience Design.',
      id: '77DF6D121A-77F17BB889-75BB1E65BD',
      skills: ['User Experience (UX)', 'UX Research', 'UX Writing'],
      category: 'additional',
      verified: true,
    },
    {
      name: 'Fundamental UI Design',
      issuer: 'Coding Studio',
      year: 'Jul 2023',
      image: '/images/certificates/coding-studio-logo.png',
      description: 'Pelatihan dasar User Interface Design.',
      id: '77DF6D121A-75C17F8C7B-75BB1E65BD',
      skills: ['User Interface Design', 'Visual Design', 'Layout'],
      category: 'additional',
      verified: true,
    },
    {
      name: 'Certificate of Competencies - Niagahoster UI/UX Designer Virtual Internship',
      issuer: 'Niagahoster - Web Hosting Unlimited Indonesia',
      year: 'Jul 2023',
      image: '/images/certificates/niagahoster-logo.png',
      description:
        'Sertifikat kompetensi UI/UX Designer melalui program virtual internship Niagahoster x Rakamin Academy.',
      id: '212536IAPMGIN3072023',
      skills: ['User Journeys', 'Process Design', 'UI Design', 'UX Research', 'Wireframing', 'Prototyping'],
      category: 'additional',
      verified: true,
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      year: 'Mei 2023',
      image: '/images/certificates/aws-cloud-practitioner.png',
      description:
        'Sertifikasi resmi AWS yang memvalidasi pemahaman dasar tentang layanan AWS Cloud, arsitektur, dan best practices. Berlaku hingga Mei 2026.',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Architecture', 'Security'],
      category: 'core',
      verified: true,
    },
    {
      name: 'AWS Cloud Foundation',
      issuer: 'Digital Talent Scholarship',
      year: 'Mei 2023',
      image: '/images/certificates/dts-logo.png',
      description: 'Sertifikat pelatihan melalui program beasiswa Digital Talent Scholarship oleh Kominfo.',
      id: '1955634840-1099/FGA/BLSDM.Kominfo/2023',
      skills: ['Cloud Computing'],
      category: 'core',
      verified: true,
    },
    {
      name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services (AWS)',
      year: 'Mar 2023',
      image: '/images/certificates/aws-cloud-security.png',
      description:
        'Kelulusan program AWS Academy Cloud Foundations yang mencakup konsep dasar cloud, layanan inti AWS, keamanan, dan arsitektur.',
      skills: ['Cloud Foundations', 'AWS Core Services', 'Cloud Security'],
      category: 'core',
      verified: true,
    },
    {
      name: 'Certificate Of Competence Junior Web Developer',
      issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
      year: 'Agu 2022',
      image: '/images/certificates/bnsp-logo.png',
      description: 'Sertifikasi kompetensi nasional sebagai Junior Web Developer dari BNSP. Berlaku hingga Agustus 2025.',
      id: '62019 2513 18247 2022',
      skills: ['CSS', 'HTML', 'Web Development'],
      category: 'core',
      verified: true,
    },
  ] satisfies Certificate[],
  publications: [
    {
      title: 'Analisis Pengujian Pengembangan Sistem Informasi Geografis Daerah Rawan Rob Di Kota Pekalongan',
      journal: 'Jurnal Sains Komputer & Informatika (J-SAKTI)',
      year: 'Maret 2023',
      status: 'Published',
      authors: 'Mohammad Rasas Aufar, Pradana Ananda Raharja',
      abstract:
        'Penelitian ini menerapkan metode Agile dalam mendesain Sistem Informasi Geografis (SIG) untuk memetakan kawasan rawan bencana banjir rob di pesisir utara Kota Pekalongan. Integrasi teknologi SIG dirancang untuk memberikan kemudahan dalam mengidentifikasi tingkat kerentanan wilayah dan menyajikan data ancaman gelombang pasang kepada masyarakat maupun pihak terkait secara visual dan akurat.',
      tags: ['Sistem Informasi Geografis', 'Agile Method', 'Banjir Rob', 'Pemetaan Wilayah'],
      doi: 'https://garuda.kemdiktisaintek.go.id/documents/detail/3418708',
    },
  ] satisfies Publication[],
};
