"use client";

import { motion } from "motion/react";
import { Compass, Target } from "lucide-react";

export default function Marquee() {
  const words = ["BREATHE", "IN", "OPPORTUNITY"];

  return (
    <>
      {/* ── TICKER TRANSITION SECTION ──
          - Clear vertical pause between Hero and Ticker (py-16 lg:py-20)
          - Height: 48px, subtle opacity, non-dominating. */}
      <motion.section
        className="relative bg-[#05080c] py-16 lg:py-20 border-y border-white/5 z-20"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="w-full overflow-hidden whitespace-nowrap bg-[#00f2fe]/4 border-y border-[#00f2fe]/10 py-3.5 flex items-center shadow-[0_0_20px_rgba(0,242,254,0.03)]">
          <motion.div
            className="flex items-center gap-12 shrink-0 will-change-transform"
            animate={{ x: [0, -1000] }}
            transition={{ ease: "linear", duration: 22, repeat: Infinity }}
          >
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-14 shrink-0 text-sm md:text-base font-heading font-bold text-slate-300 tracking-[0.22em] opacity-75 uppercase">
                {words.map((word, j) => (
                  <div key={j} className="flex items-center gap-14">
                    <span>{word}</span>
                    <div className="w-2 h-2 rounded-full bg-[#00f2fe] opacity-80 shadow-[0_0_8px_rgba(0,242,254,0.6)]" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── MISSION & VISION SECTION (NEW VISUAL CHAPTER) ──
          - Ticker → Vision label gap: ~100px (pt-28 lg:pt-32)
          - Vision label → Vision statement gap: 28px (mb-7)
          - Vision statement → Mission card gap: 112px-128px (mb-28 lg:mb-32)
          - Section padding-bottom: 144px-160px (pb-36 lg:pb-40) for massive separation before Faculty */}
      <section className="relative bg-[#05080c] pt-28 lg:pt-32 pb-36 lg:pb-40 overflow-hidden">
        <div className="site-container">

          {/* Section Header & Vision Statement — Fully Centered */}
          <div className="max-w-[1000px] mx-auto text-center mb-12 lg:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#00f2fe]/30 bg-[#00f2fe]/5 text-[#00f2fe] text-[11px] font-semibold uppercase tracking-widest mb-7 mx-auto">
              <Compass size={13} />
              <span>OUR VISION & CORE PURPOSE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-bold text-white leading-[1.25] text-center">
              We are a vibrant community united by one mission:{" "}
              <span className="text-[#00f2fe]">
                cultivating aspiring bioengineers to create forward-thinking solutions
              </span>{" "}
              to real-world challenges.
            </h2>
          </div>

          {/* 2-Column Mission Card */}
          <div className="relative bg-white/[0.025] backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-14 border border-white/10 overflow-hidden shadow-2xl">
            
            {/* Background Watermark */}
            <div className="absolute -bottom-20 -right-20 opacity-4 pointer-events-none">
              <img src="/abcblacklogo.svg" alt="Alpha Bio Cell" className="w-[360px] h-[360px] invert mix-blend-screen" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

              {/* Left Column: Vision Statement */}
              <div className="flex flex-col justify-center gap-6">
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white tracking-tight">
                  Empowering Bio-Innovators
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  We believe <strong className="text-white font-medium">biotechnology is more than a discipline</strong> — it's a launchpad for leadership, a catalyst for innovation, and a driving force for positive global change.
                </p>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed border-l-2 border-[#00f2fe]/60 pl-4">
                  <strong className="text-[#00f2fe] font-semibold">At the heart of our vision lies bio:</strong> a symbol of growth and possibility, enabling young innovators to breathe ideas, capitalize on opportunities, and engineer solutions that shape the future.
                </p>
              </div>

              {/* Right Column: Key Initiatives */}
              <div className="flex flex-col gap-6 bg-white/[0.02] p-6 md:p-8 rounded-2xl border border-white/10">
                <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                  <Target size={18} className="text-[#00f2fe]" />
                  <h4 className="text-lg font-heading font-bold text-white">Our Key Initiatives</h4>
                </div>

                <ul className="space-y-5">
                  <li className="flex gap-3.5 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#00f2fe] shrink-0 mt-2 shadow-[0_0_8px_rgba(0,242,254,0.7)]" />
                    <div>
                      <strong className="text-white text-sm md:text-base font-semibold block mb-0.5">Host Immersive Events</strong>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                        Hackathons, debates, and ideation challenges that bring together eager science enthusiasts.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3.5 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#4facfe] shrink-0 mt-2 shadow-[0_0_8px_rgba(79,172,254,0.7)]" />
                    <div>
                      <strong className="text-white text-sm md:text-base font-semibold block mb-0.5">Promote Interdisciplinary Research</strong>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                        Facilitating exploration across scientific fields to create breakthrough innovations at the intersection of biology and technology.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-3.5 items-start">
                    <div className="w-2 h-2 rounded-full bg-[#8b5cf6] shrink-0 mt-2 shadow-[0_0_8px_rgba(139,92,246,0.7)]" />
                    <div>
                      <strong className="text-white text-sm md:text-base font-semibold block mb-0.5">Nurture Problem-Solving & Entrepreneurship</strong>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                        Fostering a culture of creative problem-solving and biotech entrepreneurship for real-world impact.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}