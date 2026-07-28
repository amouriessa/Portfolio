"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent font-sans dark:bg-black">
      <main className="container mx-auto px-4">
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
