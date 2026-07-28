import dynamic from "next/dynamic";
import HeroSection from "@/components/sections/HeroSection";

const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const WorkExperienceSection = dynamic(() => import("@/components/sections/WorkExperienceSection"));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection"));
const CertificationsSection = dynamic(() => import("@/components/sections/CertificationsSection"));
const AchievementsSection = dynamic(() => import("@/components/sections/AchievementsSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

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

