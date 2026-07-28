"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certificationsData } from "@/data/certificationsData";
import LinearGallery from "@/components/ui/LinearGallery";

gsap.registerPlugin(ScrollTrigger);

export default function CertificationsSection() {
  const titleRefCerts = useRef<HTMLHeadingElement>(null);
  const subtitleRefCerts = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRefCerts.current) {
      gsap.fromTo(
        titleRefCerts.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefCerts.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (subtitleRefCerts.current) {
      gsap.fromTo(
        subtitleRefCerts.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRefCerts.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section
      id="certifications"
      className="min-h-screen flex flex-col items-center px-4 md:px-8 pt-16 md:pt-20 overflow-hidden"
    >
      <h1
        ref={titleRefCerts}
        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#c137ff] via-[#00c1ff] to-[#07c6ff] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,193,255,0.6)] font-sans"
      >
        My Certifications
      </h1>
      <p
        ref={subtitleRefCerts}
        className="sm:text-sm md:text-lg mb-8 max-w-xl text-white text-center font-sans"
      >
        These certifications I have achieved validate my tested technical
        skills.
      </p>

      {/* LINEAR HORIZONTAL GALLERY SLIDER */}
      <div className="w-full">
        <LinearGallery items={certificationsData} />
      </div>
    </section>
  );
}
