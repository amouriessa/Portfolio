"use client";

import { skillsData } from "@/data/skillsData";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";

export default function SkillTechSection() {
  // Collect all skills with category styling for the infinite LogoLoop marquee
  const row1Items: LogoItem[] = [];
  const row2Items: LogoItem[] = [];

  skillsData.forEach((category, idx) => {
    category.skills.forEach((skill) => {
      const item: LogoItem = {
        name: skill.name,
        icon: skill.icon,
        bgColorClass: category.bgColorClass,
        borderColorClass: category.borderColorClass,
        shadowColorClass: category.shadowColorClass,
      };

      if (idx < 2) {
        row1Items.push(item);
      } else {
        row2Items.push(item);
      }
    });
  });

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-cyan-400 shadow-[0_0_25px_2px_rgba(34,211,238,0.5)] p-6 md:p-8 text-white">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold font-sans">Skills & Technologies</h3>
          <p className="text-sm text-white/70 font-sans mt-1">
            Technologies, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>
      </div>

      {/* REACTBITS LOGO LOOP MARQUEES */}
      <div className="flex flex-col gap-6 my-4">
        {/* ROW 1 - LEFT SCROLL */}
        <LogoLoop items={row1Items} direction="left" speed={24} pauseOnHover={true} />

        {/* ROW 2 - RIGHT SCROLL */}
        <LogoLoop items={row2Items} direction="right" speed={28} pauseOnHover={true} />
      </div>

      {/* CATEGORY SKILL BADGES BREAKDOWN */}
      <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData.map((category) => (
          <div key={category.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className={`text-sm font-semibold mb-3 font-sans ${category.titleColorClass}`}>
              {category.title}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-white/80 font-sans flex items-center gap-1.5"
                >
                  <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 invert opacity-80" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
