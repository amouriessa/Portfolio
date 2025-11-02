"use client";

import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      id: 1,
      title: "Web Developer Certification",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
      year: "2025",
      image: "/images/BNSP.jpg",
      link: "https://drive.google.com/file/d/1e-1T79DOprT94HHmz4e-FNQob-jV6RUd/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Microsoft Office Specialist Excel 2019",
      issuer: "Microsoft - Certiport",
      year: "2025",
      image: "/images/Excel 2019.jpg",
      link: "https://drive.google.com/file/d/1tHWPVyuI9foWzzmYJKqy0favzqQnWBe4/view?usp=drive_link",
    },
    {
      id: 3,
      title: "Deployment Perangkat Lunak",
      issuer: "TLab",
      year: "2024",
      image: "/images/TLAB.jpg",
      link: "https://drive.google.com/file/d/12l6AK3lUGdmZn9iyhuqmDAu127pznazq/view?usp=drive_link",
    },
    {
      id: 4,
      title: "Microsoft Azure Data Fundamentals",
      issuer: "Microsoft",
      year: "2023",
      image: "/images/Azure1.png",
      link: "https://drive.google.com/file/d/1e23_mojKC_np1G_75zLEkZnjJsmnzQeq/view?usp=drive_link",
    },
    {
      id: 5,
      title: "Microsoft Azure Data Fundamentals",
      issuer: "Microsoft",
      year: "2023",
      image: "/images/Azure2.png",
      link: "https://drive.google.com/file/d/1uR6QwdsIZk1NYhuQ3uGhwQS3yRAv7fCo/view?usp=sharing",
    },
    {
      id: 6,
      title: "Microsoft Azure Data Fundamentals",
      issuer: "Microsoft",
      year: "2023",
      image: "/images/Azure3.png",
      link: "https://drive.google.com/file/d/10eK6PK_HzuTRFcfLTn3WnFlcQRZOkrO-/view?usp=drive_link",
    },
    {
      id: 7,
      title: "Microsoft Azure Data Fundamentals",
      issuer: "Microsoft",
      year: "2023",
      image: "/images/Azure4.png",
      link: "https://drive.google.com/file/d/1fS75bmhuERzYILi16FwQEfocuRQQNWxm/view?usp=drive_link",
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

          {/* ISSUER + YEAR */}
          <div className="flex items-center justify-between mt-1">
            <p className="text-cyan-300 font-semibold text-xs">{item.issuer}</p>
            <span className="text-white/60 text-xs">{item.year}</span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}
