"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Instagram } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import { profileData } from "@/data/profileData";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const titleRefContact = useRef<HTMLHeadingElement>(null);
  const subtitleRefContact = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRefContact.current) {
      gsap.fromTo(
        titleRefContact.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefContact.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (subtitleRefContact.current) {
      gsap.fromTo(
        subtitleRefContact.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefContact.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Github":
        return <Github className="w-4 h-4" />;
      case "Linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "Instagram":
        return <Instagram className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col md:flex-col items-center px-4 md:px-8 pt-16 md:pt-20"
    >
      <h1
        ref={titleRefContact}
        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)]"
      >
        Contact Me
      </h1>

      <p
        ref={subtitleRefContact}
        className="sm:text-sm md:text-lg mb-10 max-w-xl text-white text-center"
      >
        Let’s connect! whether it’s a project, collaboration, or opportunity.
      </p>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* SOCIAL LINKS */}
        <div
          className="bg-white/10 backdrop-blur-md rounded-2xl border border-cyan-400 
  shadow-[0_0_25px_2px_rgba(34,211,238,0.5)] p-6 md:p-8 text-white flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold mb-2">Find Me Online</h3>

          {profileData.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 
    hover:bg-white/10 transition shadow-[0_0_12px_rgba(34,211,238,0.3)]"
            >
              {renderIcon(social.iconName)}
              <span className="text-white/80">{social.name}</span>
            </a>
          ))}
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
  );
}
