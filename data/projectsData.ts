import { ProjectItem } from "@/types/portfolio";

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "IELTS Typing Arena",
    longDesc:
      "IELTS Typing Arena is a React-based typing trainer that integrates real-time performance analytics, browser audio synthesis, dynamic dictionary APIs, and automated vocabulary dataset generation. The application includes touch-typing guidance, adaptive review sessions, offline dictionary caching, and local leaderboard persistence while utilizing CEFR-J and Octanove academic vocabulary datasets to support IELTS preparation.",
    image: "/images/project3.png",
    role: [
      "Designed the application architecture and UI.",
      "Integrated Free Dictionary API and Web Audio API.",
      "Deployed the application using Vercel.",
    ],
    tech: [
      "React.js",
      "Vite",
      "TailwindCSS",
      "JavaScript",
      "Web Audio API",
      "Free Dictionary API",
    ],
    status: "🟢 Live",
    github: "https://github.com/amouriessa/IELTS-TypingArena.git",
    website: "https://ssa-ielts-typing-arena.vercel.app/",
    video: "",
  },
  {
    id: 2,
    title: "D.ELOiSE PO System",
    longDesc:
      "This project is a pre-order based e-commerce website designed to replace manual ordering processes that previously relied on competitive Google Form submissions. The system streamlines the ordering flow, providing a more structured, fair, and user-friendly experience for customers. Built with a modern tech stack, the platform focuses on usability, responsiveness, and efficient order management.",
    image: "/images/project2.png",
    role: [
      "Developed the front-end using Next.js to create a responsive and user-friendly interface.",
      "Built the back-end using Node.js to handle order processing and data management.",
      "Designed the ordering flow to improve user experience compared to the previous manual Google Form system.",
      "Implemented features to support structured and efficient pre-order management.",
    ],
    tech: ["Next.js", "Node.js", "TailwindCSS", "TypeScript", "Midtrans"],
    status: "🚧 In Development",
    github: "https://github.com/amouriessa/Deloise-Frontend.git",
    website: "",
    video: "",
  },
  {
    id: 3,
    title: "Me-IQRA",
    longDesc:
      "Me-IQRA: Menilai Iqra. A comprehensive web-based platform designed for Tahfidz schools to manage users, classes, Qur'an memorization assignments, assessments, progress tracking, and academic reports. The application supports role-based access for administrators, teachers, students, and future extensibility for additional user roles.",
    image: "/images/project1.png",
    role: [
      "System Planning: I designed the core system architecture, including the Use Case, ERD, and Activity Diagrams, to establish a clear and logical foundation.",
      "Full-Stack Development: I developed all aspects of the website, from the back-end logic and database to the front-end user interface.",
      "Quality Assurance: I performed black-box testing to ensure the system was functional, secure, and ready for real-world use.",
    ],
    tech: [
      "Laravel",
      "MySQL",
      "TailwindCSS",
      "Blade",
      "REST API",
      "JavaScript",
    ],
    status: "🚀 Deploying",
    github: "https://github.com/amouriessa/Manajemen-Penilaian.git",
    website: "",
    video: "https://youtu.be/KWzebUigNoM",
  },
];
