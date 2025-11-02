"use client";

import { motion } from "framer-motion";

export default function Achievments() {
  const certs = [
    {
      id: 1,
      title:
        "Kompetisi Mahasiswa Muhammadiyah (KMM) dan Program Kreativitas Mahasiswa Muhammadiyah (PKMM) 2024",
      issuer:
        "Asosiasi Sains dan Teknologi Perguruan Tinggi Muhammadiyah ‘Aisyiyah (AST-PTMA)",
      year: "2024",
      image: "/images/PKMM.jpg",
      link: "https://drive.google.com/file/d/1bXxRB93n45nF6vdAGH5mWmZWa3PZVIFO/view?usp=drive_link",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 w-full max-w-6xl"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {certs.map((item) => (
        <motion.a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/10 backdrop-blur-md border border-cyan-400 
                     rounded-2xl p-4 shadow-[0_0_25px_2px_rgba(34,211,238,0.35)] 
                     cursor-pointer transition block"
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 35px rgba(34,211,238,0.55)",
          }}
        >
          <img
            src={item.image}
            className="w-full h-40 object-cover rounded-xl mb-4"
          />

          <h3 className="text-lg font-bold text-white">{item.title}</h3>

          <div className="flex items-center justify-between mt-1">
            <p className="text-cyan-300 font-semibold text-xs">{item.issuer}</p>
            <span className="text-white/60 text-xs">{item.year}</span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
