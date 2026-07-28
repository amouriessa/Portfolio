"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, Building2, MapPin, Calendar, Award, ExternalLink } from "lucide-react";
import { experienceData } from "@/data/experienceData";
import { WorkExperienceItem } from "@/types/portfolio";
import ExperienceDetailModal from "@/components/ui/ExperienceDetailModal";

export default function WorkExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedExperience, setSelectedExperience] = useState<WorkExperienceItem | null>(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 65%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const tracerTop = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center relative"
    >
      {/* SECTION TITLE & SUBTITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)]">
          Work Experience
        </h2>
        <p className="text-sm md:text-lg max-w-xl text-white/80 mx-auto">
          My professional journey, internships, and academic roles. Click any card to explore deep-dive details.
        </p>
      </motion.div>

      {/* TIMELINE CONTAINER */}
      <div className="w-full relative px-2 md:px-0">
        {/* TIMELINE BACKGROUND LINE (DESKTOP CENTER, MOBILE LEFT) */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-white/10 rounded-full" />

        {/* ANIMATED FILLED TIMELINE GRADIENT LINE */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#00c1ff] via-[#07c6ff] to-[#c137ff] shadow-[0_0_15px_rgba(0,193,255,0.8)] rounded-full origin-top"
        />

        {/* ANIMATED TRACER ORB / BEAM HEAD */}
        <motion.div
          style={{ top: tracerTop }}
          className="hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none"
        >
          <div className="w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_20px_4px_rgba(0,255,255,0.9)] animate-pulse border-2 border-white" />
        </motion.div>

        {/* EXPERIENCE ITEMS */}
        <div className="flex flex-col gap-12 md:gap-20 relative z-10">
          {experienceData.map((item, idx) => {
            const isLeft = item.side === "left";
            const isCyan = item.color === "cyan";

            // Check if item contains award text to format as special highlight badge
            const hasAward = item.description.includes("Recognized as Best Mentee");
            let mainDescription = item.description;
            let awardText = "";

            if (hasAward) {
              const split = item.description.split("Recognized as");
              mainDescription = split[0].trim();
              awardText = "Recognized as " + split[1].trim();
            }

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* NODE ICON DOT ON TIMELINE */}
                <div
                  onClick={() => setSelectedExperience(item)}
                  className={`absolute left-6 md:left-1/2 top-6 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full border-2 bg-gray-950/90 backdrop-blur-md transition-all duration-300 cursor-pointer group-hover:scale-110 ${
                    isCyan
                      ? "border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(0,193,255,0.6)]"
                      : "border-purple-400 text-purple-400 shadow-[0_0_15px_rgba(193,55,255,0.6)]"
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* CONTENT CARD */}
                <div
                  className={`w-full pl-16 md:pl-0 md:w-[calc(50%-40px)] ${
                    isLeft ? "md:pr-4 md:text-right" : "md:pl-4 md:text-left"
                  }`}
                >
                  <div
                    onClick={() => setSelectedExperience(item)}
                    className={`group relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
                      isCyan
                        ? "border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_20px_rgba(0,193,255,0.15)] hover:shadow-[0_0_35px_rgba(0,193,255,0.35)]"
                        : "border-purple-500/30 hover:border-purple-400 shadow-[0_0_20px_rgba(193,55,255,0.15)] hover:shadow-[0_0_35px_rgba(193,55,255,0.35)]"
                    }`}
                  >
                    {/* TOP BADGE & CLICK AFFORDANCE */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isLeft ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border ${
                          isCyan
                            ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                            : "bg-purple-500/10 border-purple-500/30 text-purple-300"
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border transition-all ${
                          isCyan
                            ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-300 group-hover:bg-cyan-500/30 group-hover:border-cyan-400 shadow-[0_0_10px_rgba(0,193,255,0.2)]"
                            : "bg-purple-500/20 border-purple-400/50 text-purple-300 group-hover:bg-purple-500/30 group-hover:border-purple-400 shadow-[0_0_10px_rgba(193,55,255,0.2)]"
                        }`}
                      >
                        View Details <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide mb-2 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    {/* COMPANY & LOCATION */}
                    <div
                      className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium mb-4 ${
                        isCyan ? "text-cyan-400" : "text-purple-300"
                      } ${isLeft ? "md:justify-end" : "md:justify-start"}`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 shrink-0" />
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-white/70">
                        <MapPin className="w-4 h-4 shrink-0 text-white/50" />
                        {item.location}
                      </span>
                    </div>

                    {/* DESCRIPTION */}
                    {/* <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans text-left">
                      {mainDescription}
                    </p> */}

                    {/* TECH STACK PREVIEW */}
                    {item.techStack && item.techStack.length > 0 && (
                      <div
                        className={`flex flex-wrap items-center gap-1.5 mt-3 ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {item.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-medium text-cyan-200 bg-cyan-950/40 border border-cyan-500/25"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.techStack.length > 3 && (
                          <span className="px-2 py-0.5 rounded-lg text-xs font-mono text-white/50 bg-white/5 border border-white/10">
                            +{item.techStack.length - 3} more...
                          </span>
                        )}
                      </div>
                    )}

                    {/* MINIMALIST AWARD HIGHLIGHT */}
                    {awardText && (
                      <div
                        className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-medium ${
                          isLeft ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{awardText}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* DETAIL MODAL */}
      <ExperienceDetailModal
        item={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}
