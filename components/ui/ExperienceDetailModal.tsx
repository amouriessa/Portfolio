"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  MapPin,
  Calendar,
  Award,
  Maximize2,
  X,
  ExternalLink,
} from "lucide-react";
import { WorkExperienceItem, ExperienceMedia } from "@/types/portfolio";

interface ExperienceDetailModalProps {
  item: WorkExperienceItem | null;
  onClose: () => void;
}

export default function ExperienceDetailModal({
  item,
  onClose,
}: ExperienceDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState<ExperienceMedia | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, selectedImage]);

  // Lock scroll when modal is open and prevent internal overscroll rubber-banding
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [item]);

  // Prevent internal overscroll bounce at top/bottom scroll boundaries
  useEffect(() => {
    const el = modalRef.current;
    if (!el || !item) return;

    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;
      const isAtTop = el.scrollTop <= 0;
      const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      if ((isAtTop && deltaY < 0) || (isAtBottom && deltaY > 0)) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const isAtTop = el.scrollTop <= 0;
      const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("wheel", handleWheel);
    };
  }, [item]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 sm:p-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="bg-white/10 border border-cyan-400 shadow-[0_0_60px_8px_rgba(34,211,238,0.5)] rounded-2xl p-6 sm:p-8 w-full max-w-3xl relative text-white max-h-[85vh] md:max-h-[90vh] overflow-y-auto neon-scroll"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* CLOSE BUTTON */}
          <div className="flex justify-end mb-4">
            <button
              className="p-2 rounded-full bg-white/10 border border-cyan-300 hover:bg-white/20 transition shadow-[0_0_12px_rgba(34,211,238,0.6)] cursor-pointer"
              onClick={onClose}
            >
              <span className="text-cyan-300 text-lg font-bold">✕</span>
            </button>
          </div>

          {/* TITLE */}
          <h2 className="text-3xl font-bold mb-2">{item.title}</h2>

          {/* COMPANY, LOCATION & PERIOD META */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base font-semibold text-cyan-300 mb-6">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 shrink-0 text-cyan-400" />
              {item.company}
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-white/80 font-normal">
              <MapPin className="w-4 h-4 shrink-0 text-cyan-400" />
              {item.location}
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5 text-white/80 font-mono font-normal">
              <Calendar className="w-4 h-4 shrink-0 text-cyan-400" />
              {item.period}
            </span>
          </div>

          {/* 1. OVERVIEW */}
          {(item.overview || item.description) && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                Overview
              </h3>
              <p className="text-white/70 leading-relaxed font-sans">
                {item.overview || item.description}
              </p>
            </div>
          )}

          {/* 2. KEY RESPONSIBILITIES */}
          {item.keyResponsibilities && item.keyResponsibilities.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                Key Responsibilities
              </h3>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                {item.keyResponsibilities.map((resp, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 3. TECH STACK */}
          {item.techStack && item.techStack.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                Tech & Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 border border-cyan-300 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 4. METRICS & ACHIEVEMENTS */}
          {item.metrics && item.metrics.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                Metrics & Achievements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-cyan-300/40 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                  >
                    <span className="text-xs text-cyan-300 font-semibold block mb-0.5 uppercase tracking-wider">
                      {metric.label}
                    </span>
                    <span className="text-base font-bold text-white">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. CERTIFICATE */}
          {item.screenshots && item.screenshots.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                Certificate
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.screenshots.map((screen, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(screen)}
                    className="group relative rounded-xl overflow-hidden border border-cyan-300/50 bg-white/5 cursor-pointer hover:border-cyan-300 transition-all duration-300"
                  >
                    <img
                      src={screen.url}
                      alt={screen.caption || `Screenshot ${idx + 1}`}
                      className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-cyan-300 drop-shadow-lg" />
                    </div>
                    {screen.caption && (
                      <div className="p-2.5 bg-black/70 border-t border-cyan-300/30 text-xs text-white/80">
                        {screen.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. GALLERY */}
          {item.gallery && item.gallery.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                Gallery
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {item.gallery.map((media, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(media)}
                    className="group relative rounded-xl overflow-hidden border border-cyan-300/40 bg-white/5 cursor-pointer hover:border-cyan-300 transition-all"
                  >
                    <img
                      src={media.url}
                      alt={media.caption || `Gallery ${idx + 1}`}
                      className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {media.caption && (
                      <div className="p-2 bg-black/70 text-xs text-white/80 border-t border-cyan-300/20">
                        {media.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. LESSONS LEARNED */}
          {item.lessonsLearned && item.lessonsLearned.length > 0 && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                What I Learned
              </h3>
              <ul className="list-disc pl-6 text-white/70 space-y-2">
                {item.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 8. FEATURED WORK */}
          {item.relatedProjects && item.relatedProjects.length > 0 && (
            <div className="mb-2">
              <h3 className="text-xl font-semibold text-cyan-300 mb-3">
                Featured Work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {item.relatedProjects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/5 border border-cyan-300/40 hover:border-cyan-300 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-semibold text-white">
                        {proj.title}
                      </h4>
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 hover:text-cyan-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    {proj.description && (
                      <p className="text-xs text-white/70">
                        {proj.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* LIGHTBOX FOR IMAGE PREVIEW */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-60 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
          >
            <div className="relative max-w-3xl max-h-[85vh] flex flex-col items-center">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-cyan-300 hover:text-white p-2"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.caption || "Image preview"}
                className="max-w-full max-h-[75vh] rounded-xl border border-cyan-300/50 object-contain shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              />
              {selectedImage.caption && (
                <p className="mt-3 text-xs text-cyan-300 text-center font-medium bg-black/70 px-4 py-1.5 rounded-full border border-cyan-300/30">
                  {selectedImage.caption}
                </p>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
