"use client";
import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = new FormData(e.target);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label className="text-sm text-white/80">Your Name</label>
        <input
          type="text"
          name="name"
          className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/20 
            text-white placeholder-white/40 backdrop-blur-sm focus:border-cyan-400 outline-none"
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label className="text-sm text-white/80">Email</label>
        <input
          type="email"
          name="email"
          className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/20 
            text-white placeholder-white/40 backdrop-blur-sm focus:border-cyan-400 outline-none"
          placeholder="example@mail.com"
          required
        />
      </div>

      <div>
        <label className="text-sm text-white/80">Message</label>
        <textarea
          rows={5}
          name="message"
          className="w-full mt-1 px-4 py-3 rounded-xl bg-white/5 border border-white/20 
            text-white placeholder-white/40 backdrop-blur-sm focus:border-cyan-400 outline-none"
          placeholder="Write something..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-2 px-6 py-3 rounded-full bg-[#c137ff] hover:bg-[#d048ff] 
          text-white font-semibold shadow-[0_0_20px_#c137ff] transition"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* STATUS MESSAGE */}
      {status === "success" && (
        <div
          className="mt-3 px-4 py-3 rounded-xl bg-[#0f2b1f]/60 border border-green-400/40 
    shadow-[0_0_15px_rgba(34,197,94,0.5)] text-green-300 text-sm flex items-center gap-2 backdrop-blur-md
    animate-slideIn"
        >
          ✅ Your message has been sent successfully.
        </div>
      )}

      {status === "error" && (
        <div
          className="mt-3 px-4 py-3 rounded-xl bg-[#2b0f0f]/60 border border-red-400/40 
    shadow-[0_0_15px_rgba(239,68,68,0.5)] text-red-300 text-sm flex items-center gap-2 backdrop-blur-md
    animate-slideIn"
        >
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </form>
  );
}
