"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProfileCard from "@/components/ui/ProfileCard";
import { profileData } from "@/data/profileData";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const titleRefHome = useRef<HTMLHeadingElement>(null);
  const subtitleRefHome = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRefHome.current) {
      gsap.fromTo(
        titleRefHome.current,
        { y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefHome.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (subtitleRefHome.current) {
      gsap.fromTo(
        subtitleRefHome.current,
        { y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefHome.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (badgeRef.current) {
      gsap.fromTo(
        badgeRef.current,
        { y: -10, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: badgeRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { y: 15, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { x: 30, rotateY: -10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-8 pt-16 md:pt-20"
    >
      <div className="max-w-2xl text-center md:text-left mb-12 md:mb-0 w-full md:w-auto">
        <motion.div
          ref={badgeRef}
          initial={{ opacity: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-10"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[#00c1ffff] animate-pulse"></span>
          <p className="text-sm md:text-base tracking-[0.25em] text-white">
            Available for work
          </p>
        </motion.div>

        <h1
          ref={titleRefHome}
          className="text-3xl md:text-5xl font-bold mb-9 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)]"
        >
          {profileData.headline}
        </h1>

        <p
          ref={subtitleRefHome}
          className="text-xs font-medium font-mono sm:text-sm md:text-lg mb-8 max-w-xl text-white whitespace-pre-line"
        >
          {profileData.subheadline}
        </p>

        <motion.a
          ref={buttonRef}
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 rounded-full bg-[#07c6ff] text-white text-sm font-medium shadow-[0_0_15px_#00c1ff] hover:shadow-[0_0_25px_#00c1ff,0_0_40px_#c137ff] transition-all duration-300"
        >
          View My Projects
        </motion.a>
      </div>

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0 }}
        className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0 px-4 md:px-0"
      >
        <ProfileCard
          name={profileData.cardName}
          title={profileData.title}
          handle={profileData.handle}
          status={profileData.status}
          contactText="Contact Me"
          avatarUrl={profileData.avatarUrl}
          iconUrl={profileData.starIconUrl}
          grainUrl={profileData.grainUrl}
          miniAvatarUrl={profileData.miniAvatarUrl}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => {
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </motion.div>
    </section>
  );
}
