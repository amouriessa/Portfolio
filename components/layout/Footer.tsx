import { profileData } from "@/data/profileData";

export default function Footer() {
  return (
    <footer className="mt-32 py-10 text-center text-white/50 text-sm">
      <p>© {new Date().getFullYear()} {profileData.name}</p>
      <p className="mt-1 text-white/30">All rights reserved</p>
      <p className="mt-3 text-white/40">
        Made with <span className="text-[#07c6ff]">Next.js</span> &{" "}
        <span className="text-[#c137ff]">Love 🩷</span>
      </p>
    </footer>
  );
}
