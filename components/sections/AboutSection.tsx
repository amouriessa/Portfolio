"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";
import SkillTechSection from "@/components/sections/SkillTechSection";
import { profileData } from "@/data/profileData";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const titleRefAbout = useRef<HTMLHeadingElement>(null);
  const subtitleRefAbout = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRefAbout.current) {
      gsap.fromTo(
        titleRefAbout.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefAbout.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (subtitleRefAbout.current) {
      gsap.fromTo(
        subtitleRefAbout.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefAbout.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="abouts"
      className="min-h-screen flex flex-col items-center px-4 md:px-8 pt-16 md:pt-20"
    >
      <h1
        ref={titleRefAbout}
        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)]"
      >
        About Me
      </h1>
      <p
        ref={subtitleRefAbout}
        className="sm:text-sm md:text-lg mb-8 max-w-xl text-white text-center font-sans"
      >
        A short introduction about who I am, what I do, and what drives my work
        in the world of technology.
      </p>

      {/* SUMMARY CARD */}
      <div className="w-full mx-auto max-w-5xl bg-white/5 backdrop-blur-xl rounded-3xl border border-cyan-400/50 shadow-[0_0_35px_rgba(0,193,255,0.2)] p-6 sm:p-8 md:p-10 relative overflow-hidden group hover:border-cyan-400 hover:shadow-[0_0_50px_rgba(0,193,255,0.35)] transition-all duration-500 text-white">
        {/* TOP BADGE */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6 relative z-10">
          {/* <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 shadow-[0_0_12px_rgba(0,193,255,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
            BACKGROUND & PASSION
          </span> */}
          <span className="text-xs font-mono text-cyan-400/80 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            {profileData.title}
          </span>
        </div>

        {/* SUMMARY CONTENT */}
        <div className="flex flex-col space-y-6 relative z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent mb-4 font-sans">
              Summary
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-200 font-sans">
              {profileData.summary}
            </p>
          </div>

          {/* BADGES BAR */}
          <div className="pt-6 border-t border-white/10">
            <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider block mb-3 font-semibold">
              Focus Areas & Highlights
            </span>
            <div className="flex flex-wrap gap-2.5">
              {profileData.badges.map((badge, idx) => {
                const borderColors = [
                  "border-cyan-400/60 bg-cyan-500/10 text-cyan-300 shadow-[0_0_12px_rgba(0,255,255,0.2)]",
                  "border-[#c137ff]/60 bg-purple-500/10 text-purple-300 shadow-[0_0_12px_rgba(193,55,255,0.2)]",
                  "border-[#ff6bda]/60 bg-pink-500/10 text-pink-300 shadow-[0_0_12px_rgba(255,107,218,0.2)]",
                  "border-[#4cff79]/60 bg-green-500/10 text-green-300 shadow-[0_0_12px_rgba(76,255,121,0.2)]",
                  "border-[#ffd54a]/60 bg-yellow-500/10 text-yellow-300 shadow-[0_0_12px_rgba(255,213,74,0.2)]",
                ];
                const colorClass = borderColors[idx % borderColors.length];

                return (
                  <span
                    key={badge}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-default ${colorClass}`}
                  >
                    {badge}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS & TECHNOLOGIES */}
      <div className="mt-12 w-full max-w-5xl mx-auto">
        <SkillTechSection />
      </div>
    </section>
  );
}
