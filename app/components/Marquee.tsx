"use client";

import { motion } from "motion/react";

export default function Marquee() {
  const words = ["BREATHE", "IN", "OPPORTUNITY"];

  return (
    /*
      ── MARQUEE / MISSION SECTION ──
      • mt-16: 64px gap separating this from the Hero section above.
        (Hero has pb-16/pb-20, this mt-16 creates a clean ~60px visual gap.)
      • pb-24 md:pb-28: 96–112px bottom padding before the Faculty section.
      • bg-[#070b0e]: slightly darker than the hero bg — creates a natural section break.
    */
    <section className="relative mt-16 pb-24 md:pb-28 bg-[#070b0e] overflow-hidden border-y border-white/5 z-20">

      {/*
        ── MARQUEE TICKER STRIP ──
        • py-6: 24px top + bottom = ~50px total strip height — prominent but not oversized.
        • bg-primary/5 + border-y border-primary/15: subtle cyan tint strip.
        • shadow: faint depth beneath the strip separates it visually.
      */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-primary/5 border-y border-primary/15 py-6 relative flex items-center shadow-[0_4px_30px_rgba(0,242,254,0.04)]">
        <motion.div
          className="flex items-center gap-12 shrink-0 will-change-transform"
          animate={{ x: [0, -1000] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-16 shrink-0 text-xl md:text-3xl font-heading font-bold text-white tracking-widest opacity-70"
            >
              {words.map((word, j) => (
                <div key={j} className="flex items-center gap-16">
                  <span>{word}</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(0,242,254,0.9)]" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/*
        ── CONTENT BLOCK (Vision + Mission) ──
        • mt-20: 80px gap from the strip to the text — clear section within section.
        • max-w-[1300px]: same container width as all other sections.
        • px-6 → px-10 → px-16: consistent side padding across breakpoints.
      */}
      {/* CONTAINER — max-w-[1240px], px-6/px-12/px-20 = 24/48/80px side padding. mt-20 = 80px gap from strip to text. */}
      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 mt-20 relative z-10">

        {/*
          Inner content max-w-[780px] + mx-auto:
          Keeps the reading width at ~700–750px — ideal for long-form text.
          Centered so it sits cleanly below the full-width marquee strip.
        */}
        {/* max-w-[800px] = left aligned reading column */}
        <div className="max-w-[800px] flex flex-col gap-[40px]">

          {/* ── VISION PARAGRAPH ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-slate-300 text-base md:text-lg leading-loose">
              We believe biotechnology is more than a discipline — it&apos;s a
              launchpad for leadership, a catalyst for innovation, and a driving
              force for change. At the heart of our vision lies bio: a symbol of
              growth and possibility, enabling young innovators to breathe ideas,
              seize opportunities, and create solutions that shape the future.
            </p>
          </motion.div>

          {/* Thin gradient divider between vision and mission */}
          <div className="w-20 h-[1px] bg-gradient-to-r from-primary to-accent opacity-50" />

          {/* Our Mission heading + list, gap-8 between heading and list = ~30px heading→description, 48px description→list via gap-8 */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/*
              Section heading
              • mb within gap-8: no extra margin needed — gap handles all spacing.
            */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
              Our Mission
            </h2>

            {/*
              Mission list
              • gap-6: 24px between each item — clear separation without excess.
              • Each item uses flex gap-4 for the bullet + text layout.
            */}
            <ul className="flex flex-col gap-6">
              {[
                {
                  title: "Host Immersive Events:",
                  body: "Hackathons, debates, and ideation challenges that bring together eager science enthusiasts.",
                },
                {
                  title: "Promote Interdisciplinary Research:",
                  body: "Facilitating exploration across fields of science to inspire new ideas and foster the intersection of biology and technology.",
                },
                {
                  title: "Nurture Student Entrepreneurship:",
                  body: "Foster a culture of creative problem-solving through biotechnology entrepreneurship.",
                },
              ].map(({ title, body }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="text-primary text-base font-bold mt-0.5 shrink-0 leading-none">▪</span>
                  <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                    <strong className="text-white font-semibold">{title}</strong>{" "}
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}