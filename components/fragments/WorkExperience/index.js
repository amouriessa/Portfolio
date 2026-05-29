import { useScrollIndicator } from "@/hooks/useScrollIndicator";

export default function WorkExperience() {
  const workExperience = useScrollIndicator();

  return (
    <>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-cyan-400 shadow-[0_0_25px_2px_rgba(34,211,238,0.5)] p-6 md:p-8 text-white">
        <h3 className="text-2xl font-bold mb-8">Work Experience</h3>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-[#00c1ff] via-[#07c6ff] to-[#c137ff] shadow-[0_0_12px_rgba(0,193,255,0.5)] rounded-full"></div>

          {/* SCROLL INDICATOR - Top Chevron */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-300 ${workExperience.showTopIndicator ? "opacity-100" : "opacity-0"}`}
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-cyan-400 opacity-70"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* SCROLL INDICATOR - Bottom Chevron */}
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none rotate-180 transition-opacity duration-300 ${workExperience.showBottomIndicator ? "opacity-100" : "opacity-0"}`}
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-purple-400 opacity-70"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* SCROLL AREA */}
          <div
            ref={workExperience.scrollRef}
            className="flex flex-col gap-14 max-h-[670px] overflow-y-auto no-scrollbar pt-8 pb-8"
          >
            <div className="relative flex flex-col md:flex-row md:justify-start md:pr-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.7)]"></div>

              <div className="w-full md:w-1/2 md:text-right">
                <div className="bg-white/10 border border-cyan-400 backdrop-blur-md rounded-xl p-5 shadow-[0_0_12px_2px_rgba(0,193,255,0.4)]">
                  <h4 className="text-sm font-semibold">
                    Front-End Developer Intern
                  </h4>
                  <p className="text-xs text-[#07c6ff]">
                    Telkom Indonesia • Kebayoran Baru, Indonesia
                  </p>
                  <p className="text-xs text-white/70">Nov 2025 - May 2026</p>
                  <p className="mt-2 text-xs text-white/80">
                    Contributed to building and maintaining production React.js
                    applications across multiple repositories by implementing UI
                    features, dashboard redesigns, and REST API integrations
                    within a modular component-based architecture. Managed
                    application state using Redux and Zustand, wrote unit tests
                    with Jest, and collaborated with developers and product
                    teams in Agile/Scrum workflows using GitLab and Taiga.
                    Recognized as Best Mentee in the Program Pemagangan Nasional
                    Kemnaker RI Batch 2 for outstanding performance and
                    contribution during the internship program.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:justify-end md:pl-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c137ff] shadow-[0_0_10px_rgba(193,55,255,0.7)]"></div>

              <div className="w-full md:w-1/2">
                <div className="bg-white/10 border border-[#c137ff] backdrop-blur-md rounded-xl p-5 shadow-[0_0_12px_2px_rgba(193,55,255,0.4)]">
                  <h4 className="text-sm font-semibold">
                    Front-End Developer Intern
                  </h4>
                  <p className="text-xs text-[#c137ff]">
                    PT. Razen Teknologi • Yogyakarta, Indonesia
                  </p>
                  <p className="text-xs text-white/70">Oct 2024 - Dec 2024</p>
                  <p className="mt-2 text-xs text-white/80">
                    Responsible for an important role in documenting system
                    flows (flowcharts/sequence diagrams), developing
                    user-friendly front-ends, and conducting integration tests
                    to ensure the functionality and quality of interactions
                    between system components.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row md:justify-start md:pr-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.7)]"></div>
              <div className="w-full md:w-1/2 md:text-right">
                <div className="bg-white/10 border border-cyan-400 backdrop-blur-md rounded-xl p-5 shadow-[0_0_12px_2px_rgba(0,193,255,0.4)]">
                  <h4 className="text-sm font-semibold">
                    Cybersecurity Teaching Assistant
                  </h4>
                  <p className="text-xs text-[#07c6ff]">
                    UMY • Yogyakarta, Indonesia
                  </p>
                  <p className="text-xs text-white/70">Feb 2024 - Jul 2024</p>
                  <p className="mt-2 text-xs text-white/80">
                    Responsible as a Teaching Assistant for two classes
                    (approximately 70 students), including managing learning
                    sessions and class administration (attendance and
                    assessment).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
