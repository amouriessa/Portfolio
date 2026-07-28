"use client";

import React from "react";

export interface LogoItem {
  name: string;
  icon: string;
  bgColorClass?: string;
  borderColorClass?: string;
  shadowColorClass?: string;
}

interface LogoLoopProps {
  items: LogoItem[];
  direction?: "left" | "right";
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

export default function LogoLoop({
  items,
  direction = "left",
  speed = 30,
  pauseOnHover = true,
  className = "",
}: LogoLoopProps) {
  // Multiply items for infinite seamless scroll
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden py-3 select-none ${className}`}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div
        className={`flex w-max gap-4 sm:gap-6 ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
        style={{
          animation: `logoLoopScroll ${speed}s linear infinite ${
            direction === "right" ? "reverse" : "normal"
          }`,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,193,255,0.08)] hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,193,255,0.3)] transition-all duration-300 group shrink-0 cursor-pointer"
          >
            <div
              className={`p-2 rounded-xl border flex items-center justify-center ${
                item.bgColorClass || "bg-cyan-500/20"
              } ${item.borderColorClass || "border-cyan-400/30"} ${
                item.shadowColorClass || ""
              }`}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-5 h-5 object-contain invert group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-sm font-medium text-white/90 group-hover:text-cyan-300 transition-colors font-sans">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes logoLoopScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
