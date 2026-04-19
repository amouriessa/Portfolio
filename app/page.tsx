"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ProfileCard from "@/components/ProfileCard";
import Lanyard from "@/components/Lanyard";
import Projects from "@/components/Project";
import Certifications from "@/components/Certification";
import Achievments from "@/components/Achievment";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Instagram } from "lucide-react";
import ContactForm from "@/components/Contact";
import WorkExperience from "@/components/fragments/WorkExperience";
import SkillTech from "@/components/fragments/SkillTech";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // HOME refs
  const titleRefHome = useRef(null);
  const subtitleRefHome = useRef(null);
  const badgeRef = useRef(null);
  const buttonRef = useRef(null);
  const cardRef = useRef(null);

  // ABOUT refs
  const titleRefAbout = useRef(null);
  const subtitleRefAbout = useRef(null);

  // PROJECT refs
  const titleRefProjects = useRef(null);
  const subtitleRefProjects = useRef(null);

  // CERTIFICATION refs
  const titleRefCerts = useRef(null);
  const subtitleRefCerts = useRef(null);

  // AWARDS refs
  const titleRefAwards = useRef(null);
  const subtitleRefAwards = useRef(null);

  // CONTACT refs
  const titleRefContact = useRef(null);
  const subtitleRefContact = useRef(null);

  useEffect(() => {
    const animItems = [
      { title: titleRefHome, subtitle: subtitleRefHome },
      { title: titleRefAbout, subtitle: subtitleRefAbout },
      { title: titleRefProjects, subtitle: subtitleRefProjects },
      { title: titleRefCerts, subtitle: subtitleRefCerts },
      { title: titleRefAwards, subtitle: subtitleRefAwards },
      { title: titleRefContact, subtitle: subtitleRefContact },
    ];

    animItems.forEach(({ title, subtitle }) => {
      if (title.current) {
        gsap.fromTo(
          title.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: title.current,
              start: "top 85%",
              toggleActions: "restart none restart reset",
            },
          },
        );
      }

      if (subtitle.current) {
        gsap.fromTo(
          subtitle.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: title.current,
              start: "top 85%",
              toggleActions: "restart none restart reset",
            },
          },
        );
      }
    });

    // Badge
    gsap.fromTo(
      badgeRef.current,
      { opacity: 0, y: -20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 90%",
          toggleActions: "restart none restart reset",
        },
      },
    );

    // Button
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          toggleActions: "restart none restart reset",
        },
      },
    );

    // Profile Card
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, x: 50, rotateY: -15 },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "restart none restart reset",
        },
      },
    );

    return () => ScrollTrigger.killAll();
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent font-sans dark:bg-black">
      <main className="container mx-auto px-4">
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
              Bagas Saras Budi Prastika
            </h1>

            <p
              ref={subtitleRefHome}
              className="text-xs font-medium font-mono sm:text-sm md:text-lg mb-8 max-w-xl text-white"
            >
              Making technology easier to use,
              <br />
              not harder to understand.
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
              name="Saras"
              title="Aspiring Software Engineer"
              handle="amouriessa"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/images/ava1.png"
              iconUrl="/images/star-grey.png"
              grainUrl="/images/grain.webp"
              miniAvatarUrl="/images/logo.jpg"
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
        <section
          id="abouts"
          className="min-h-screen flex flex-col md:flex-col items-center px-4 md:px-8 pt-16 md:pt-20"
        >
          <h1
            ref={titleRefAbout}
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)]"
          >
            About Me
          </h1>
          <p
            ref={subtitleRefAbout}
            className="sm:text-sm md:text-lg mb-8 max-w-xl text-white text-center"
          >
            A short introduction about who I am, what I do, and what drives my
            work in the world of technology.
          </p>

          {/* SUMMARY */}
          <div className="w-full min-h-screen mx-auto max-w-5xl bg-white/10 backdrop-blur-md rounded-2xl border border-cyan-400 shadow-[0_0_25px_2px_rgba(34,211,238,0.5)] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="w-full md:w-1/2">
                <div className="hidden md:block absolute top-0 -right-10 h-full z-40">
                  <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
                </div>
              </div>

              <div className="w-full md:w-1/2 text-white m-auto">
                <h2 className="text-2xl font-bold mb-4">Summary</h2>
                <p className="text-base leading-relaxed">
                  Fullstack Web Developer with a strong focus on frontend
                  development and user experience. I build digital solutions
                  that are simple, usable, and impactful. I have experience
                  working with React, Next.js, TypeScript, and Laravel, and have
                  developed full-stack systems to solve real-world problems.
                  Currently, I’m exploring machine learning and technologies
                  that can integrate more directly with everyday life.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-cyan-400 bg-white/5 shadow-[0_0_12px_2px_rgba(0,255,255,0.4)]">
                    Front-End Focused
                  </span>

                  <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-[#c137ff] bg-white/5 shadow-[0_0_12px_2px_rgba(193,55,255,0.4)]">
                    Fullstack Web Developer
                  </span>

                  <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-[#ff6bda] bg-white/5 shadow-[0_0_12px_2px_rgba(255,107,218,0.4)]">
                    Bachelor of Computer Science
                  </span>

                  <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-[#4cff79] bg-white/5 shadow-[0_0_12px_2px_rgba(76,255,121,0.4)]">
                    🎓 GPA 3.59/4.00
                  </span>

                  <span className="px-4 py-1.5 rounded-full text-sm font-semibold text-white border border-[#ffd54a] bg-white/5 shadow-[0_0_12px_2px_rgba(255,213,74,0.4)]">
                    📍 Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* WORK EXPERIENCE */}
            <WorkExperience />

            {/* SKILLS & TECHNOLOGIES */}
            <SkillTech />
          </div>
        </section>
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
            Showcasing my best work that represents my journey as a Full-Stack
            Web Developer.
          </p>

          <Projects />
        </section>
        <section
          id="certifications"
          className="min-h-screen flex flex-col md:flex-col items-center px-4 md:px-8 pt-16 md:pt-20"
        >
          <h1
            ref={titleRefCerts}
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)]"
          >
            My Certifications
          </h1>
          <p
            ref={subtitleRefCerts}
            className="sm:text-sm md:text-lg mb-8 max-w-xl text-white text-center"
          >
            These certifications I have achieved validate my tested technical
            skills.
          </p>

          <Certifications />
        </section>

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

          <Achievments />
        </section>
        <section
          id="contact"
          className="min-h-screen flex flex-col md:flex-col items-center px-4 md:px-8 pt-16 md:pt-20"
        >
          <h1
            ref={titleRefContact}
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff]
    bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)]"
          >
            Contact Me
          </h1>

          <p
            ref={subtitleRefContact}
            className="sm:text-sm md:text-lg mb-10 max-w-xl text-white text-center"
          >
            Let’s connect — whether it’s a project, collaboration, or
            opportunity.
          </p>

          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* SOCIAL LINKS */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-cyan-400 
      shadow-[0_0_25px_2px_rgba(34,211,238,0.5)] p-6 md:p-8 text-white flex flex-col gap-6"
            >
              <h3 className="text-2xl font-bold mb-2">Find Me Online</h3>

              <a
                href="https://github.com/amouriessa/"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 
        hover:bg-white/10 transition shadow-[0_0_12px_rgba(34,211,238,0.3)]"
              >
                <Github className="w-4 h-4" />
                <span className="text-white/80">Github</span>
              </a>

              <a
                href="https://www.linkedin.com/in/bagas-saras-budi-prastika/"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 
        hover:bg-white/10 transition shadow-[0_0_12px_rgba(34,211,238,0.3)]"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-white/80">LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/flowrsaar?igsh=OXd4aWh3cWU2eGt6"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 
        hover:bg-white/10 transition shadow-[0_0_12px_rgba(34,211,238,0.3)]"
              >
                <Instagram className="w-4 h-4" />
                <span className="text-white/80">Instagram</span>
              </a>
            </div>

            {/* CONTACT FORM */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-[#c137ff] 
      shadow-[0_0_25px_2px_rgba(193,55,255,0.5)] p-6 md:p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <ContactForm />
            </div>
          </div>
        </section>

        <footer className="mt-32 py-10 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} Bagas Saras Budi Prastika</p>
          <p className="mt-1 text-white/30">All rights reserved</p>
          <p className="mt-3 text-white/40">
            Made with <span className="text-[#07c6ff]">Next.js</span> &{" "}
            <span className="text-[#c137ff]">Tailwind CSS</span>
          </p>
        </footer>
      </main>
    </div>
  );
}
