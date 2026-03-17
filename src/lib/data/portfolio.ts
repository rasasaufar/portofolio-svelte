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
        'Menjadi IT Implementor, IT Infrastructure dan Data Analis. Menghandle beberapa project di Kementerian dan Militer.',
      responsibilities: [
        'Kemenlu RI - Bekerja onsite bersama Subdit SISTIK Direktorat PWNI, memberikan dukungan teknis pengembangan situs web "Safe Travel" dan manajemen infrastruktur server "Portal Peduli WNI" menggunakan Ubuntu',
        'Kemenlu RI - Menyiapkan dokumentasi teknis bulanan (laporan pemeliharaan, analisis bug, panduan pemecahan masalah, dan manajemen permintaan perubahan)',
        'Mabes TNI - Mengelola operasi basis data penting, termasuk pencadangan dan pemulihan rutin di lingkungan produksi untuk memastikan integritas data',
        'Mabes TNI - Menerapkan penerapan aplikasi Sisfopajak pada infrastruktur server fisik serta melakukan pengujian fungsional dan verifikasi komprehensif pasca-penerapan',
        'Mabes TNI - Menjadi Presenter Pelatihan Aplikasi Sistem Data Alutsista dan Pendukungnya di Mabes TNI, Mabes AL, dan Pusdatin Kementerian Pertahanan',
        'Kementerian Hilirisasi dan Investasi - Mengelola Sistem Presensi di Kepegawaian BKPM',
      ],
      tech: ['Ubuntu', 'Server Infrastructure', 'Database Management', 'Application Deployment'],
      gallery: [
        {
          image: '/images/gallery/traspac-kemenlu.png',
          caption: 'Kementerian Luar Negeri RI',
          description:
            'Kegiatan dukungan teknis dan bimbingan teknis bersama Subdit SISTIK Direktorat PWNI di Kementerian Luar Negeri Republik Indonesia.',
        },
        {
          image: '/images/gallery/traspac-kemhan.png',
          caption: 'Pusdatin Kemhan RI',
          description:
            'Menjadi presenter pelatihan aplikasi Sistem Data Alutsista dan Pendukungnya di Pusat Data dan Informasi Kementerian Pertahanan Republik Indonesia.',
        },
      ],
    },
    {
      company: 'PT. Metro Network Solutions',
      position: 'Operator Scanner',
      period: 'Sep 2023 - Dec 2023',
      logo: 'https://media.licdn.com/dms/image/v2/C560BAQHq1FwKfCDJZA/company-logo_200_200/company-logo_200_200/0/1667985560103/pt_metronet_logo?e=2147483647&v=beta&t=gsRuAkezzvj65j2AGShob4KmQDCnAjpuGbO4YH5xGZE',
      description:
        'Menjadi bagian dari tim pelaksana proyek Digitalisasi Arsip di Badan Pertanahan Nasional (BPN) Kota Pekalongan untuk mendukung transformasi data fisik ke digital.',
      responsibilities: [
        'Bekerja pada proyek Digitalisasi di Kantor Badan Pertanahan Nasional (BPN) Kota Pekalongan',
        'Menyortir dan merapikan berbagai album dan dokumen fisik dengan teliti sebelum proses digitalisasi',
        'Melakukan pemindaian (scanning) dokumen dalam jumlah besar per harinya untuk persiapan pengarsipan',
        'Mengedit dan mengoptimalkan hasil scan menggunakan perangkat lunak NAPS2 agar tajam, lurus, dan mudah dibaca',
        'Bekerja dengan disiplin tinggi di bawah tekanan untuk selalu mencapai target pemindaian maupun tenggat waktu',
        'Menjaga kelengkapan, kerahasiaan, dan integritas dokumen-dokumen tanah yang bernilai tinggi selama project berlangsung',
      ],
      tech: ['NAPS2', 'Document Editing', 'Data Management', 'Scanner Handling'],
      gallery: [
        {
          image: '/images/gallery/bpn-closing.jpeg',
          caption: 'Penutupan Project',
          description:
            'Momen kebersamaan foto dengan seluruh tim pelaksana pada penghujung masa proyek Digitalisasi Arsip BPN Kota Pekalongan setelah berhasil menyelesaikan seluruh target pemindaian.',
        },
      ],
    },
    {
      company: 'Niagahoster - Web Hosting Unlimited Indonesia',
      position: 'Project-Based Virtual Intern : UI / UX Designer',
      period: 'Jul 2023 - Aug 2023',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYFavWOvYAbq_z018Y5-cZNuutUC_256vVw&s',
      description: 'Project-Based Virtual Internship bersama Rakamin Academy (Niagahoster x Rakamin Academy).',
      responsibilities: [
        'Menyelesaikan berbagai tugas yang berkaitan dengan aktivitas UI/UX Designer dari Niagahoster',
        'Merancang antarmuka pengguna (User Interface) dan pengalaman pengguna (User Experience)',
        'Membuat wireframe dan prototipe interaktif untuk memvisualisasikan alur penggunaan (seperti Checkout Flow)',
      ],
      tech: ['User Experience (UX)', 'Prototyping', 'User Interface', 'Wireframing'],
      gallery: [
        {
          image: '/images/gallery/Niagahoster.png',
          caption: 'Checkout Flow',
          description:
            'Hasil desain alur antarmuka pengguna (Checkout Flow) website Niagahoster yang dirancang ulang untuk memberikan pengalaman berbelanja dan pembayaran yang aman, mudah dicerna, dan efisien bagi pengguna.',
        },
        {
          image: '/images/gallery/5.png',
          caption: 'Certificate of Completion',
          description:
            'Sertifikat kelulusan resmi yang memvalidasi pencapaian, keberhasilan, serta pengembangan keterampilan esensial sebagai UI/UX Designer selama program Virtual Internship.',
        },
      ],
    },
    {
      company: 'Nuri',
      position: 'Project-Based Virtual Intern : UI / UX Designer',
      period: 'Jul 2023 - Aug 2023',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxW4zjU4gLFxMQ7K2mBzwpxOHJId1nbb28LA&s',
      description: 'Project-Based Virtual Internship bersama Rakamin Academy (Nuri x Rakamin Academy).',
      responsibilities: [
        'Menyelesaikan berbagai tugas proyek yang berkaitan dengan peran UI/UX Designer di Nuri',
        'Mengerjakan solusi desain dari mulai riset hingga pembuatan User Interface dan User Experience',
        'Melakukan perancangan wireframe dasar hingga high-fidelity prototype',
      ],
      tech: ['User Experience (UX)', 'Prototyping', 'User Interface', 'Wireframing'],
      gallery: [
        {
          image: '/images/gallery/Nuri.png',
          caption: 'Final Task Nuri',
          description:
            'Hasil proyek akhir yang difokuskan pada perancangan antarmuka pengguna untuk fitur COD di platform e-commerce Nuri.',
        },
        {
          image: '/images/gallery/6.png',
          caption: 'Certificate of Completion',
          description: 'Sertifikat kelulusan resmi dari program Virtual Internship Nuri x Rakamin Academy.',
        },
      ],
    },
    {
      company: 'Dinas Komunikasi dan Informatika Kab. Pekalongan',
      position: 'Student Internship',
      period: 'Sep 2021 - Oct 2021',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Lambang_Kabupaten_Pekalongan.JPG',
      description:
        'Menjalani masa magang dengan fokus pada desain antarmuka dan pengembangan sistem pendukung untuk wilayah lokal.',
      responsibilities: [
        'Membuat rancangan UI/UX dari aplikasi e-commerce yang ditujukan untuk memajukan UMKM di Kabupaten Pekalongan',
        'Mempelajari berbagai keterampilan (skills) baru dan langsung mengimplementasikannya pada tugas sehari-hari untuk meningkatkan efisiensi dan produktivitas',
        'Berpartisipasi aktif dalam lingkungan kerja instansi, membantu rekan tim, serta melakukan kolaborasi yang relevan dengan kebutuhan pengguna',
      ],
      tech: ['UI/UX Design', 'Figma', 'User Research', 'Prototyping'],
      gallery: [
        {
          image: '/images/gallery/dinkominfo.jpg',
          caption: 'Gedung Dinkominfo',
          description:
            'Gedung Dinas Komunikasi dan Informatika Kabupaten Pekalongan tempat saya melaksanakan program magang.',
        },
        {
          image: '/images/gallery/Magang.png',
          caption: 'E-Commerce UMKM',
          description:
            'Desain UI/UX (user interface & user experience) untuk platform e-commerce yang dirancang agar terjangkau dan mudah digunakan oleh pelaku UMKM.',
        },
      ],
    },
  ] satisfies Experience[],
  projects: [
    {
      name: 'Fake Project',
      type: 'Landing Page',
      description: 'Membuat Landing Page Website Restaurant',
      tech: ['UI/UX Design', 'Figma'],
      demo: 'https://drive.google.com/file/d/1hqhdVyanQeePJewHR8PJ9kK07BdrkfOJ/view?usp=sharing',
      github: '',
      image: '/images/portfolio/Aarss.png',
    },
    {
      name: 'Final Project Redesign Maxim',
      type: 'Redesign App',
      description: 'Redesign Aplikasi Maxim dan menambahkan fitur Top Up dan Pembayaran',
      tech: ['UI/UX Design', 'Figma', 'Prototyping'],
      demo: 'https://drive.google.com/file/d/14rentR_FyblFyTi5F63m0UeVRDSomjyJ/view?usp=sharing',
      github: '',
      image: '/images/portfolio/Maxim.png',
    },
    {
      name: 'Final Task Nuri x Rakamin Academy',
      type: 'Feature Design',
      description: 'Menambahkan fitur Cash On Delivery (COD) pada aplikasi e-commerce',
      tech: ['UI/UX Design', 'Figma'],
      demo: 'https://drive.google.com/file/d/1GoF12FssWWEjVzu2kExP58ZMcDjMV4zG/view?usp=sharing',
      github: '',
      image: '/images/portfolio/Nuri.png',
    },
    {
      name: 'Final Task Niagahoster x Rakamin Academy',
      type: 'Web Design',
      description: 'Membuat Checkout Flow pada website Niagahoster',
      tech: ['UI/UX Design', 'Figma'],
      demo: 'https://drive.google.com/file/d/1GdUdGYV2Tg1zPnZXwADqJSzOUguJFTPj/view?usp=sharing',
      github: '',
      image: '/images/portfolio/Niagahoster.png',
    },
    {
      name: 'Aplikasi Belanja UMKM Di Kajen',
      type: 'App Design',
      description: 'Membuat UI Design Aplikasi Belanja untuk UMKM di Kajen, Kabupaten Pekalongan',
      tech: ['UI/UX Design', 'Figma'],
      demo: 'https://bit.ly/ProtoypeMagang',
      github: '',
      image: '/images/portfolio/Magang.png',
    },
    {
      name: 'Mini Task di Short Class @myskill.id',
      type: 'Mini Task',
      description: 'Mengerjakan Task yang diberikan pada saat mini task',
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
