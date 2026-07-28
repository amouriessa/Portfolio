"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Globe, PlayCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projectsData } from "@/data/projectsData";
import { ProjectItem } from "@/types/portfolio";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsSectionProps {
  onClose?: () => void;
}

export default function ProjectsSection({
  onClose,
}: ProjectsSectionProps = {}) {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModal = () => {
    setSelected(null);
    if (onClose) onClose();
  };

  const titleRefProjects = useRef<HTMLHeadingElement>(null);
  const subtitleRefProjects = useRef<HTMLParagraphElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (titleRefProjects.current) {
      gsap.fromTo(
        titleRefProjects.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefProjects.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (subtitleRefProjects.current) {
      gsap.fromTo(
        subtitleRefProjects.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefProjects.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col md:flex-col items-center px-4 md:px-8 pt-16 md:pt-20"
    >
      <h1
        ref={titleRefProjects}
        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)]"
      >
        My Project
      </h1>
      <p
        ref={subtitleRefProjects}
        className="sm:text-sm md:text-lg mb-8 max-w-xl text-white text-center"
      >
        Showcasing my best work that represents my journey as a Full-Stack Web
        Developer.
      </p>

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
        {projectsData.map((item) => {
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
                alt={item.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-white/70 text-sm mt-2 line-clamp-3">
                {item.longDesc}
              </p>

              {/* STATUS */}
              {item.status && (
                <div className="mt-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-white/5 border border-[#c137ff] text-[#c137ff] shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                    {item.status}
                  </span>
                </div>
              )}

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
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
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
            onClick={handleCloseModal}
          >
            <motion.div
              ref={modalRef}
              onClick={(e) => e.stopPropagation()}
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
                  className="p-2 rounded-full bg-white/10 border border-cyan-300 hover:bg-white/20 transition shadow-[0_0_12px_rgba(34,211,238,0.6)] cursor-pointer"
                  onClick={handleCloseModal}
                >
                  <span className="text-cyan-300 text-lg font-bold">✕</span>
                </button>
              </div>

              {/* IMAGE */}
              <img
                src={selected.image}
                alt={selected.title}
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
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
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
                    rel="noopener noreferrer"
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
    </section>
  );
}
