"use client";

import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, Award, ExternalLink } from "lucide-react";
import { CertificationItem } from "@/types/portfolio";

interface LinearGalleryProps {
  items: CertificationItem[];
}

export default function LinearGallery({ items }: LinearGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = items.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Calculate shortest modulo offset relative to active center item
  const getOffset = (i: number, active: number, count: number) => {
    let diff = i - active;
    const half = Math.floor(count / 2);
    while (diff > half) diff -= count;
    while (diff < -half) diff += count;
    return diff;
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto relative px-2 py-4 flex flex-col items-center select-none">
      {/* GALLERY CONTAINER */}
      <motion.div
        onPanEnd={handleDragEnd}
        className="w-full relative h-[420px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing py-6"
      >
        {items.map((item, idx) => {
          const diff = getOffset(idx, currentIndex, total);
          const isActive = diff === 0;

          // Only render cards within render window for performance
          if (Math.abs(diff) > 3) return null;

          return (
            <motion.div
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              animate={{
                x: diff * 350,
                scale: isActive ? 1.05 : 0.94,
                zIndex: 30 - Math.abs(diff),
              }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              className={`absolute shrink-0 w-[290px] sm:w-[330px] rounded-2xl p-5 border transition-all duration-300 bg-white/10 backdrop-blur-md cursor-pointer opacity-100 ${
                isActive
                  ? "border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.65)]"
                  : "border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
              }`}
            >
              {/* CERTIFICATE IMAGE */}
              <div className="relative rounded-xl overflow-hidden mb-4 group h-44 bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/80 text-white shadow-lg">
                    View Credential <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* METADATA: TITLE, ISSUER & YEAR */}
              <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-2 line-clamp-2 font-sans">
                {item.title}
              </h3>

              <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-3">
                <div className="flex items-center gap-1.5 text-cyan-300 font-semibold text-xs truncate pr-2 font-sans">
                  <Award className="w-3.5 h-3.5 shrink-0 text-cyan-400" />
                  <span className="truncate">{item.issuer}</span>
                </div>
                <div className="flex items-center gap-1 text-white/70 text-xs font-mono shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-white/50" />
                  <span>{item.year}</span>
                </div>
              </div>

              {/* EXTERNAL LINK BTN */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-xl text-xs font-mono font-semibold text-cyan-300 bg-cyan-500/10 border border-cyan-400/40 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_12px_rgba(0,193,255,0.15)]"
                >
                  Open Certificate <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* CONTROLS & PAGINATION */}
      <div className="flex items-center justify-between w-full max-w-md mt-4 px-4">
        {/* PREV BUTTON */}
        <button
          onClick={handlePrev}
          className="p-3 rounded-full bg-white/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,193,255,0.2)] cursor-pointer"
          aria-label="Previous certificate"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* DOTS INDICATOR */}
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentIndex
                  ? "w-8 h-2.5 bg-cyan-400 shadow-[0_0_12px_rgba(0,255,255,0.8)]"
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={handleNext}
          className="p-3 rounded-full bg-white/10 border border-cyan-400/40 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(0,193,255,0.2)] cursor-pointer"
          aria-label="Next certificate"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
