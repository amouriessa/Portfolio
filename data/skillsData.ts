import { SkillCategory } from "@/types/portfolio";

export const skillsData: SkillCategory[] = [
  {
    title: "Front End",
    titleColorClass: "text-cyan-300",
    bgColorClass: "bg-[#07c6ff]/60 hover:bg-cyan-500",
    borderColorClass: "border-white/10",
    shadowColorClass: "shadow-[0_0_12px_rgba(0,193,255,0.25)]",
    skills: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Tailwind", icon: "/icons/tailwindcss.svg" },
      { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
    ],
  },
  {
    title: "Back End",
    titleColorClass: "text-purple-300",
    bgColorClass: "bg-[#c137ff]/60 hover:bg-purple-500",
    borderColorClass: "border-[#c137ff]/40",
    shadowColorClass: "shadow-[0_0_18px_3px_rgba(193,55,255,0.35)]",
    skills: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Laravel", icon: "/icons/laravel.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
    ],
  },
  {
    title: "Database & Backend Tools",
    titleColorClass: "text-pink-300",
    bgColorClass: "bg-[#ff6bda]/60 hover:bg-pink-500",
    borderColorClass: "border-[#ff6bda]/40",
    shadowColorClass: "shadow-[0_0_18px_3px_rgba(255,107,218,0.35)]",
    skills: [
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
      { name: "Prisma ORM", icon: "/icons/prisma.svg" },
      { name: "Supabase", icon: "/icons/supabase.svg" },
      { name: "MySql", icon: "/icons/mysql.svg" },
    ],
  },
  {
    title: "Design Tools",
    titleColorClass: "text-yellow-300",
    bgColorClass: "bg-[#ffd54a]/60 hover:bg-[#ffd54a]",
    borderColorClass: "border-[#ffd54a]/40",
    shadowColorClass: "shadow-[0_0_18px_3px_rgba(255,213,74,0.35)]",
    skills: [
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Canva", icon: "/icons/canva.svg" },
    ],
  },
  {
    title: "Development & Testing",
    titleColorClass: "text-green-300",
    bgColorClass: "bg-[#4cff79]/60 hover:bg-[#4cff79]",
    borderColorClass: "border-[#4cff79]/40",
    shadowColorClass: "shadow-[0_0_18px_3px_rgba(76,255,121,0.35)]",
    skills: [
      { name: "Jest", icon: "/icons/jest.svg" },
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Github", icon: "/icons/github.svg" },
      { name: "Gitlab", icon: "/icons/gitlab.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
    ],
  },
];
