import { WorkExperienceItem } from "@/types/portfolio";

export const experienceData: WorkExperienceItem[] = [
  {
    id: 1,
    title: "Front-End Developer Intern",
    company: "Telkom Indonesia",
    location: "Kebayoran Baru, Indonesia",
    period: "Nov 2025 - May 2026",
    description:
      "Recognized as Best Mentee.",
    color: "cyan",
    side: "left",
    overview:
      "Assigned to the Pijar Education suite at Telkom Indonesia, during my six-month internship I worked as a Front-End Developer contributing to multiple production React applications in the education technology sector. I collaborated with frontend developers, backend engineers, designers, QA, and product teams to build new features, enhance existing functionality, integrate REST APIs, and maintain user-facing applications following Agile Scrum practices.",
    keyResponsibilities: [
      "Developed and maintained frontend features across four production React codebases, including dashboards, CBT modules, administrative portals, and a responsive maintenance notification page.",
      "Built responsive user interfaces from Figma designs, integrated REST APIs, and implemented reusable React components for production applications.",
      "Developed new features including exam detail pages, timer tooltips, dashboard redesigns, and reference table enhancements while resolving frontend issues and improving existing functionality.",
      "Wrote Jest unit tests for newly developed components and collaborated through GitLab Merge Requests within an Agile Scrum workflow using Taiga.",
      "Updated terminology across administrator and teacher portals while working closely with product managers, designers, and fellow developers.",
    ],
    techStack: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Jest",
      "GitLab CI",
      "Taiga",
    ],
    metrics: [
      { label: "Award", value: "Best Mentee Kemnaker RI Batch 2" },
      { label: "Duration", value: "6 Months Intensive" },
    ],
    screenshots: [
      {
        url: "/images/Kemnaker.png",
        caption: "Telkom Indonesia National Internship Certificate",
      },
      {
        url: "/images/best-mentee.png",
        caption: "Best Mentee Award Certificate",
      },
    ],
    gallery: [
      {
        url: "/images/telkom1.jpeg",
        caption: "That's Me! 🤗",
      },
      {
        url: "/images/telkom2.jpeg",
        caption: "Farewell Photo",
      },
    ],
    lessonsLearned: [
      "Throughout this internship, I gained experience working within a production-scale React codebase and collaborating in a cross-functional Agile Scrum team. I strengthened my skills in frontend architecture, Git workflows, REST API integration, unit testing with Jest, and translating business requirements into maintainable user interfaces",
    ],
    relatedProjects: [
      {
        title: "Dashboard Redesign",
        description: "Implemented a redesigned dashboard interface featuring overview cards, global filtering, education personnel statistics, average examination scores, and attendance usage analytics.",
      },
      {
        title: "Maintenance Notification Page",
        description: "Developed a fully responsive maintenance notification page from Figma design and deployed it to production.",
      },
      {
        title: "Pijar Edu - CBT Module",
        description: "Delivered multiple production enhancements for the CBT platform, including exam detail pages, timer tooltips, reference table updates, and student data payload fixes.",
      },
      {
        title: "Pijar Edu - Admin & Teacher Portal",
        description: "Completed a large-scale terminology update across administrator and teacher portals to improve consistency throughout the application.",
      },
    ],
  },
  {
    id: 2,
    title: "Front-End Developer Intern",
    company: "PT. Razen Teknologi",
    location: "Yogyakarta, Indonesia",
    period: "Oct 2024 - Dec 2024",
    description:
      "Responsible for an important role in documenting system flows (flowcharts/sequence diagrams), developing user-friendly front-ends, and conducting integration tests to ensure the functionality and quality of interactions between system components.",
    color: "purple",
    side: "right",
    overview:
      "During my internship at PT Razen Teknologi Indonesia, I developed responsive frontend interfaces for an internal web application prototype by translating UI/UX designs into functional web pages. Working within a Waterfall development process, I collaborated closely with backend developers to implement business requirements using Laravel and Blade.",
    keyResponsibilities: [
      "Developed responsive frontend interfaces using Laravel Blade, JavaScript, and Tailwind CSS.",
      "Translated UI/UX designs into functional web pages based on business requirements.",
      "Collaborated with backend developers through a shared repository workflow.",
      "Implemented frontend views while maintaining consistency with the application's design system.",
      "Participated throughout the Waterfall software development lifecycle.",
    ],
    techStack: [
      "Laravel",
      "Blade",
      "Tailwind CSS",
      "PHP",
      "JavaScript",
      "MySQL",
      "Git"
    ],
    metrics: [
      { label: "Modules Delivered", value: "38 Web Pages Developed" },
      { label: "Duration", value: "3 Months Intensive" },
    ],
    screenshots: [
      {
        url: "/images/razensertif.jpg",
        caption: "PT. Razen Internship Certificate",
      },
    ],
    gallery: [
      {
        url: "/images/razenjogjabay.jpeg",
        caption: "Farewell Party at Jogja Bay! 🎉",
      },
    ],
    lessonsLearned: [
      "This internship strengthened my understanding of translating UI designs into maintainable frontend implementations and collaborating with backend developers throughout a Waterfall software development process. I also gained experience working within a shared repository and delivering complete frontend modules as part of a development team.",
    ],
    // relatedProjects: [
    //   {
    //     title: "Responsive Frontend Development",
    //     description: "Implemented responsive user interfaces by translating UI/UX designs into functional web pages using Laravel Blade and Tailwind CSS, ensuring consistency across desktop and mobile devices.",
    //   },
    // ],
  },
  {
    id: 3,
    title: "Teaching Fellow Cybersecurity",
    company: "UMY",
    location: "Yogyakarta, Indonesia",
    period: "Feb 2024 - Jul 2024",
    description:
      "Responsible as a Teaching Assistant for two classes (approximately 70 students), including managing learning sessions and class administration (attendance and assessment).",
    color: "cyan",
    side: "left",
    overview:
      "Served as a Teaching Fellow for the Cybersecurity course, assisting lecturers during practical laboratory sessions and supporting students in understanding cybersecurity concepts through hands-on exercises and technical guidance.",
    keyResponsibilities: [
      "Assisted lecturers during cybersecurity laboratory sessions.",
      "Guided students through hands-on practical exercises and troubleshooting.",
      "Explained cybersecurity concepts and helped resolve technical issues.",
      "Supported grading and attendance administration throughout the semester.",
    ],
    techStack: [
      "Cybersecurity",
      "Linux / Bash",
      "Teaching",
      "Communication",
    ],
    metrics: [
      { label: "Students Mentored", value: "70+ Students" },
      { label: "Duration", value: "1 Semester" },
    ],
    screenshots: [],
    gallery: [
      {
        url: "/images/bukberasdos.jpeg",
        caption: "Gathering to break the fast with all teaching assistants and lecturers",
      },
    ],
    lessonsLearned: [
      "This experience strengthened my communication and mentoring skills by explaining technical concepts to students with different learning styles. It also improved my ability to troubleshoot problems systematically and present technical information in a clear and approachable way.",
    ],
    // relatedProjects: [
    //   {
    //     title: "Cybersecurity Hands-on Lab Series",
    //     description: "Practical exercises covering web vulnerability analysis and network security.",
    //   },
    // ],
  },
];
