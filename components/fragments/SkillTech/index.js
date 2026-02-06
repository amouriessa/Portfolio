import { useScrollIndicator } from "@/hooks/useScrollIndicator";

export default function SkillTech() {
  const skillTech = useScrollIndicator();

  return (
    <>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-cyan-400 shadow-[0_0_25px_2px_rgba(34,211,238,0.5)] p-6 md:p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>

        <div className="relative">
          {/* SCROLL INDICATOR - Top Chevron */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none transition-opacity duration-300 ${skillTech.showTopIndicator ? "opacity-100" : "opacity-0"}`}
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
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none rotate-180 transition-opacity duration-300 ${skillTech.showBottomIndicator ? "opacity-100" : "opacity-0"}`}
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
            ref={skillTech.scrollRef}
            className="flex flex-col gap-10 max-h-[670px] overflow-y-auto no-scrollbar pt-8 pb-8"
          >
            {/* FRONT END */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-cyan-300">
                Front End
              </h4>

              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#07c6ff]/60 hover:bg-cyan-500 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_12px_rgba(0,193,255,0.25)]">
                    <img src="/icons/nextjs.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Next.js</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#07c6ff]/60 hover:bg-cyan-500 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_12px_rgba(0,193,255,0.25)]">
                    <img src="/icons/react.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">React.js</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#07c6ff]/60 hover:bg-cyan-500 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_12px_rgba(0,193,255,0.25)]">
                    <img
                      src="/icons/typescript.svg"
                      className="w-5 h-5 invert"
                    />
                  </div>
                  <span className="text-xs mt-2 text-white/70">TypeScript</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#07c6ff]/60 hover:bg-cyan-500 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_12px_rgba(0,193,255,0.25)]">
                    <img
                      src="/icons/javascript.svg"
                      className="w-5 h-5 invert"
                    />
                  </div>
                  <span className="text-xs mt-2 text-white/70">JavaScript</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#07c6ff]/60 hover:bg-cyan-500 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_12px_rgba(0,193,255,0.25)]">
                    <img
                      src="/icons/tailwindcss.svg"
                      className="w-5 h-5 invert"
                    />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Tailwind</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#07c6ff]/60 hover:bg-cyan-500 rounded-xl backdrop-blur-md border border-white/10 shadow-[0_0_12px_rgba(0,193,255,0.25)]">
                    <img
                      src="/icons/bootstrap.svg"
                      className="w-5 h-5 invert"
                    />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Bootstrap</span>
                </div>
              </div>
            </div>

            {/* BACK END */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-purple-300">
                Back End
              </h4>

              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#c137ff]/60 hover:bg-purple-500 rounded-xl backdrop-blur-md border border-[#c137ff]/40 shadow-[0_0_18px_3px_rgba(193,55,255,0.35)]">
                    <img src="/icons/laravel.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Laravel</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#c137ff]/60 hover:bg-purple-500 rounded-xl backdrop-blur-md border border-[#c137ff]/40 shadow-[0_0_18px_3px_rgba(193,55,255,0.35)]">
                    <img src="/icons/php.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">PHP</span>
                </div>
              </div>
            </div>

            {/* DATABASE */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-pink-300">
                Database
              </h4>

              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#ff6bda]/60 hover:bg-pink-500 rounded-xl backdrop-blur-md border border-[#ff6bda]/40 shadow-[0_0_18px_3px_rgba(255,107,218,0.35)]">
                    <img src="/icons/mysql.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">MySql</span>
                </div>
              </div>
            </div>

            {/* DESIGN TOOLS */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-yellow-300">
                Design Tools
              </h4>

              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#ffd54a]/60 hover:bg-[#ffd54a] rounded-xl backdrop-blur-md border border-[#ffd54a]/40 shadow-[0_0_18px_3px_rgba(255,213,74,0.35)]">
                    <img src="/icons/figma.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Figma</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#ffd54a]/60 hover:bg-[#ffd54a] rounded-xl backdrop-blur-md border border-[#ffd54a]/40 shadow-[0_0_18px_3px_rgba(255,213,74,0.35)]">
                    <img src="/icons/canva.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Canva</span>
                </div>
              </div>
            </div>

            {/* DEVELOPMENT TOOLS */}
            <div>
              <h4 className="text-base font-semibold mb-4 text-green-300">
                Development Tools
              </h4>

              <div className="flex flex-wrap gap-6">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#4cff79]/60 hover:bg-[#4cff79] rounded-xl backdrop-blur-md border border-[#4cff79]/40 shadow-[0_0_18px_3px_rgba(76,255,121,0.35)]">
                    <img src="/icons/git.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Git</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#4cff79]/60 hover:bg-[#4cff79] rounded-xl backdrop-blur-md border border-[#4cff79]/40 shadow-[0_0_18px_3px_rgba(76,255,121,0.35)]">
                    <img src="/icons/github.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Github</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#4cff79]/60 hover:bg-[#4cff79] rounded-xl backdrop-blur-md border border-[#4cff79]/40 shadow-[0_0_18px_3px_rgba(76,255,121,0.35)]">
                    <img src="/icons/gitlab.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Gitlab</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="p-3 bg-[#4cff79]/60 hover:bg-[#4cff79] rounded-xl backdrop-blur-md border border-[#4cff79]/40 shadow-[0_0_18px_3px_rgba(76,255,121,0.35)]">
                    <img src="/icons/postman.svg" className="w-5 h-5 invert" />
                  </div>
                  <span className="text-xs mt-2 text-white/70">Postman</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
