"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe, PlayCircle } from "lucide-react";

export default function Projects() {
  const [selected, setSelected] = useState<any>(null);

  const truncate = (text: string, maxWords: number) => {
    const words = text.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : text;
  };

  const projects = [
    {
      id: 1,
      title: "Tahfidz Class Memorization Assessment System",
      longDesc:
        "As my final-year project, I independently designed and developed a comprehensive Tahfidz Class Memorization Assessment System to streamline grading and administration for a partnered junior high school. The system was built from the ground up using the Laravel framework and features three distinct user roles: Admin, Teacher, and Student.",
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
      github: "https://github.com/amouriessa/Manajemen-Penilaian.git",
      website: "",
      video: "https://youtu.be/OVCrY1ljtSk?si=AJFvzMdGox1gtgxf",
    },

    {
      id: 2,
      title: "Laravel-based Sidorejo Village Letter Request Information System",
      longDesc:
        "As the lead full-stack developer for this capstone project, I was responsible for the end-to-end development of a system designed to streamline the process of submitting letter requests for births and deaths in Sidorejo Village. Collaborating in a two-person team, I managed the entire web development lifecycle, from back-end logic to front-end implementation.",
      image: "/images/project2.png",
      role: [
        "Developing both the front-end interface and the back-end infrastructure using the Laravel framework.",
        "Designing and implementing the database schema and API to ensure smooth data flow and efficient system performance.",
        "Collaborating closely with my teammate, who handled the website's design and testing, to ensure a user-friendly and bug-free final product.",
      ],
      tech: [
        "Laravel",
        "MySQL",
        "TailwindCSS",
        "Blade",
        "REST API",
        "JavaScript",
      ],
      github: "https://github.com/amouriessa/SIDesa-Capstone.git",
      website: "",
      video: "",
    },

    {
      id: 3,
      title: "Village Administration & Resident Information System",
      longDesc:
        "As the Front-End Developer in a 3-person team, I contributed to the development of a comprehensive system designed to streamline village administrative tasks, including managing resident data, births, and deaths. Our collaborative internship project allowed me to apply my skills across various stages of the development lifecycle.",
      image: "/images/project3.png",
      role: [
        "System Documentation: I was responsible for documenting the system's workflows by creating detailed flowcharts and sequence diagrams to ensure clear communication and logical system design.",
        "Front-End Development: I built a clean, responsive, and user-friendly interface that served as the primary interaction point for the end-user.",
        "Integration Testing: I performed comprehensive integration testing to ensure seamless interaction and data flow between the front-end and back-end components of the system.",
      ],
      tech: [
        "Laravel",
        "MySQL",
        "TailwindCSS",
        "Blade",
        "REST API",
        "JavaScript",
      ],
      github: "https://github.com/amouriessa/Website_Magang.git",
      website: "",
      video: "",
    },
  ];


  return (
    <>
      {/* PROJECT GRID */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 w-full max-w-6xl"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {projects.map((item) => {
          const short = truncate(item.longDesc, 18);
          const shownTech = item.tech.slice(0, 3);
          const more = item.tech.length - shownTech.length;

          return (
            <motion.div
              key={item.id}
              className="bg-white/10 backdrop-blur-md border border-cyan-400 
                       rounded-2xl p-4 shadow-[0_0_25px_2px_rgba(34,211,238,0.35)] 
                       transition cursor-pointer"
              onClick={() => setSelected(item)}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 35px rgba(34,211,238,0.55)",
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <img
                src={item.image}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-white/70 text-sm mt-2">{short}</p>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mt-3">
                {shownTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-cyan-300 text-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                  >
                    {tech}
                  </span>
                ))}

                {more > 0 && (
                  <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/20 text-white/60">
                    +{more} more
                  </span>
                )}
              </div>

              {/* Links Icons */}
              <div className="flex gap-4 mt-4">
                {item.github && (
                  <a
                    href={item.github}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="text-white/80 hover:text-white transition"
                  >
                    <Github size={20} />
                  </a>
                )}

                {item.website && (
                  <a
                    href={item.website}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="text-white/80 hover:text-white transition"
                  >
                    <Globe size={20} />
                  </a>
                )}

                {item.video && (
                  <a
                    href={item.video}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="text-white/80 hover:text-white transition"
                  >
                    <PlayCircle size={20} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/10 border border-cyan-400 shadow-[0_0_60px_8px_rgba(34,211,238,0.5)]
                   rounded-2xl p-8 w-full max-w-3xl relative text-white 
                   max-h-[90vh] overflow-y-auto neon-scroll"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-end mb-4">
                <button
                  className="p-2 rounded-full 
               bg-white/10 border border-cyan-300 
               hover:bg-white/20 transition
               shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                  onClick={() => setSelected(null)}
                >
                  <span className="text-cyan-300 text-lg font-bold">✕</span>
                </button>
              </div>

              {/* IMAGE */}
              <img
                src={selected.image}
                className="w-full h-56 object-cover rounded-xl mb-6"
              />

              {/* TITLE */}
              <h2 className="text-3xl font-bold mb-4">{selected.title}</h2>

              {/* ABOUT */}
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                About this project
              </h3>
              <p className="text-white/70 leading-relaxed mb-6">
                {selected.longDesc}
              </p>

              {/* ROLE */}
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                My Role
              </h3>
              <ul className="list-disc pl-6 text-white/70 space-y-2 mb-6">
                {selected.role.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* FULL TECH STACK */}
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {selected.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/5
                         border border-cyan-300 text-cyan-300
                         shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex gap-4 mt-4">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    className="p-2 rounded-lg bg-white/10 border border-cyan-300
                         hover:bg-white/20 transition
                         shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  >
                    <Github size={22} className="text-cyan-300" />
                  </a>
                )}

                {selected.website && (
                  <a
                    href={selected.website}
                    target="_blank"
                    className="p-2 rounded-lg bg-white/10 border border-cyan-300
                         hover:bg-white/20 transition
                         shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  >
                    <Globe size={22} className="text-cyan-300" />
                  </a>
                )}

                {selected.video && (
                  <a
                    href={selected.video}
                    target="_blank"
                    className="p-2 rounded-lg bg-white/10 border border-cyan-300
         hover:bg-white/20 transition shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  >
                    <PlayCircle size={22} className="text-cyan-300" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
