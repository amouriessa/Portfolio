"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { achievementsData } from "@/data/achievementsData";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsSection() {
  const titleRefAwards = useRef<HTMLHeadingElement>(null);
  const subtitleRefAwards = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRefAwards.current) {
      gsap.fromTo(
        titleRefAwards.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefAwards.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (subtitleRefAwards.current) {
      gsap.fromTo(
        subtitleRefAwards.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefAwards.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="awards"
      className="min-h-screen flex flex-col md:flex-col items-center px-4 md:px-8 pt-16 md:pt-20"
    >
      <h1
        ref={titleRefAwards}
        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)]"
      >
        Honor & Awards
      </h1>
      <p
        ref={subtitleRefAwards}
        className="sm:text-sm md:text-lg mb-8 max-w-xl text-white text-center"
      >
        The awards I have achieved reflect my hard work, innovation, and
        passion within the world of technology.
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 w-full max-w-6xl"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {achievementsData.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-md border border-cyan-400 
                       rounded-2xl p-4 shadow-[0_0_25px_2px_rgba(34,211,238,0.35)] 
                       cursor-pointer transition block"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 35px rgba(34,211,238,0.55)",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />

            <h3 className="text-lg font-bold text-white">{item.title}</h3>

            <div className="flex items-center justify-between mt-1">
              <p className="text-cyan-300 font-semibold text-xs">{item.issuer}</p>
              <span className="text-white/60 text-xs">{item.year}</span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
