"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

export default function Hero() {
  return (
    /*
      ── HERO SECTION ──
      • min-h-[85vh]: keeps hero at ~85% viewport height — tall enough to impress,
        short enough to hint at content below the fold.
      • flex items-center: vertically centers the two-column grid within that height.
      • pt-20: exactly clears the fixed navbar (navbar ~64px + 20px breathing room).
      • pb-16 md:pb-20: bottom breathing room before the marquee gap (mt-16 on next section).
      • overflow-hidden: clips decorative glow orbs cleanly.
    */
    <section className="relative min-h-[85vh] flex items-center pt-20 pb-16 md:pb-20 overflow-hidden">

      {/* Decorative ambient glows — don't affect layout */}
      <div className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-primary/10 blur-[160px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-[450px] h-[450px] bg-accent/10 blur-[160px] rounded-full mix-blend-screen pointer-events-none" />

      {/*
        ── CONTENT CONTAINER ──
        • max-w-[1300px] matches navbar and all other sections for alignment.
        • px-6 → px-10 → px-16: consistent 40–64px side padding across breakpoints.
      */}
      {/* CONTAINER — max-w-[1240px], px-6/px-12/px-20 = 24/48/80px side padding */}
      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/*
          ── TWO-COLUMN GRID ──
          • Left col (55%): text content — badge, headline, paragraph, CTAs.
          • Right col (45%): Lottie DNA animation — fills the visual void.
          • lg:grid-cols-[55fr_45fr] gives text slightly more weight.
          • gap-12 lg:gap-16: 48px–64px column gap — breathable without wasting space.
          • items-center: both columns vertically centered relative to each other.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* ════════════════════════════════
              LEFT: Text Block
              • flex flex-col gap-7: 28px between every text element — consistent vertical rhythm.
              • max-w-[600px]: restricts text column width for readability.
              ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            /* max-w-[560px]: keeps text column at ideal 550–560px reading width */
            className="flex flex-col gap-7 max-w-[560px]"
          >
            {/*
              Eyebrow Badge
              • Small pill above headline — positions the club in context.
              • gap-2.5: tight spacing between pulse dot and label.
            */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary w-fit shadow-[0_0_18px_rgba(0,242,254,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
              <span className="text-xs font-medium tracking-widest uppercase">
                Biotechnology Entrepreneurship Club · VIT
              </span>
            </div>

            {/*
              Main Headline (h1)
              • text-5xl → text-7xl: scales up cleanly across breakpoints.
              • leading-[1.0]: tight line-height for a bold display heading.
              • tracking-tight: premium, editorial feel.
            */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.0] tracking-tight">
              ALPHA <br />
              <span className="text-gradient">BIO</span>
              <br />
              CELL
            </h1>

            {/*
              Body Paragraph
              • max-w-[560px]: caps reading line at ~560px — ~70 chars per line.
              • border-l-4: left accent line adds visual hierarchy without clutter.
              • leading-relaxed: comfortable reading rhythm.
              • No extra margin needed — parent gap-7 handles spacing above/below.
            */}
            <p className="text-base md:text-lg text-slate-300 max-w-[560px] leading-relaxed border-l-4 border-primary/40 pl-5">
              We believe in tapping into the untapped — exploring the limitless
              opportunities biology offers across scientific domains. We are the
              premier technical club innovating at the intersection of biology and
              technology.
            </p>

            {/*
              CTA Buttons
              • mt-3 adds 12px on top of the gap-7 baseline — total ~40px from paragraph.
              • flex-wrap: buttons stack gracefully on very narrow screens.
              • gap-4: 16px between the two buttons.
            */}
            {/* mt-5 on top of gap-7 baseline = ~40px total gap from paragraph to buttons */}
            <div className="flex flex-wrap gap-4 mt-5">
              <Link
                href="/events"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-primary to-accent rounded-full font-semibold text-background overflow-hidden flex items-center gap-2 hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] transition-all duration-300"
              >
                <span className="relative z-10">Explore Events</span>
                <ArrowRight
                  size={17}
                  className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>

              <Link
                href="/board"
                className="px-8 py-3.5 rounded-full font-semibold border border-white/20 hover:bg-white/5 hover:border-white/35 transition-all duration-300 flex items-center justify-center text-slate-200"
              >
                Meet the Board
              </Link>
            </div>
          </motion.div>

          {/* ════════════════════════════════
              RIGHT: DNA / Lottie Animation
              • Hidden on mobile (lg:flex) — on small screens text takes full width.
              • h-[420px] lg:h-[520px]: fixed height keeps the animation proportional.
              • The glowing blur ring behind the Lottie adds depth without extra graphics.
              ════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.25, ease: "easeOut" }}
            className="hidden lg:flex relative justify-center items-center h-[420px] lg:h-[520px]"
          >
            {/* Radial glow ring behind the animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/12 via-accent/6 to-transparent rounded-full blur-[90px]" />
            {/* Subtle outer ring for depth */}
            <div className="absolute inset-8 border border-primary/8 rounded-full" />

            <LottiePlayer
              src="/DNAHelix2.json"
              autoplay
              loop
              style={{
                height: "95%",
                width: "95%",
                filter:
                  "drop-shadow(0 0 20px rgba(0, 242, 254, 0.6)) drop-shadow(0 0 60px rgba(0, 242, 254, 0.12))",
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
