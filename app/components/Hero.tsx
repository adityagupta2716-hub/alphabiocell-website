"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

function BiotechDNAVisual() {
  const [hasLottieError, setHasLottieError] = useState(false);

  return (
    <div className="relative w-full max-w-[340px] lg:max-w-[400px] aspect-square flex items-center justify-center mx-auto">
      {/* Restrained background aura */}
      <div className="absolute inset-4 bg-[#00f2fe]/8 blur-[70px] rounded-full pointer-events-none" />
      <div className="absolute inset-10 border border-[#00f2fe]/15 rounded-full pointer-events-none" />

      {!hasLottieError ? (
        <LottiePlayer
          src="/DNAHelix2.json"
          autoplay
          loop
          style={{
            height: "100%",
            width: "100%",
            filter: "drop-shadow(0 0 15px rgba(0, 242, 254, 0.4))",
          }}
        />
      ) : (
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full text-[#00f2fe] drop-shadow-[0_0_20px_rgba(0,242,254,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.85">
            {[...Array(12)].map((_, i) => {
              const y = 60 + i * 24;
              const phase = (i * 0.5) % (Math.PI * 2);
              const x1 = 140 + Math.sin(phase) * 70;
              const x2 = 140 - Math.sin(phase) * 70;
              return (
                <g key={i}>
                  <line
                    x1={x1}
                    y1={y}
                    x2={x2}
                    y2={y}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx={x1}
                    cy={y}
                    r={Math.sin(phase) > 0 ? 5 : 3.5}
                    fill={Math.sin(phase) > 0 ? "#00f2fe" : "#4facfe"}
                  />
                  <circle
                    cx={x2}
                    cy={y}
                    r={Math.sin(phase) <= 0 ? 5 : 3.5}
                    fill={Math.sin(phase) <= 0 ? "#00f2fe" : "#8b5cf6"}
                  />
                </g>
              );
            })}
          </g>
        </svg>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen h-[100svh] flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[#05080c]">

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#00f2fe]/5 blur-[160px] rounded-full pointer-events-none" />

      {/* Unified Site Container — Vertically Centered */}
      <div className="site-container my-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 lg:gap-14 items-center">

          {/* LEFT COLUMN: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            {/* Eyebrow Badge — 28px space below */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00f2fe]/35 bg-[#00f2fe]/10 text-[#00f2fe] mb-7 shadow-[0_0_12px_rgba(0,242,254,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse shrink-0" />
              <span className="text-[11px] font-semibold tracking-widest uppercase">
                BIOTECHNOLOGY CLUB AT VIT
              </span>
            </div>

            {/* Headline — Controlled Sizing & 32px space below */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold leading-[0.96] tracking-tight text-white uppercase mb-8 max-w-[500px]">
              CLUB <br />
              <span className="text-[#00f2fe] drop-shadow-[0_0_20px_rgba(0,242,254,0.35)]">
                THAT
              </span> <br />
              INNOVATES
            </h1>

            {/* Description Paragraph — 40px space below */}
            <p className="text-base md:text-[17px] text-slate-300 max-w-[500px] leading-[1.55] border-l-2 border-[#00f2fe]/70 pl-4 md:pl-5 mb-10">
              We believe in tapping into the untapped — exploring the limitless opportunities biology offers across scientific domains. We are the premier technical club innovating at the intersection of biology and technology.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/events"
                className="group relative px-6 py-3.5 bg-[#00f2fe] text-[#05080c] rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#38f9ff] hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] transition-all duration-300"
              >
                <span>Explore Events</span>
                <ArrowRight
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>

              <Link
                href="/board"
                className="px-6 py-3.5 rounded-full font-semibold text-sm border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/35 transition-all duration-300 text-slate-200"
              >
                Meet the Board
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Vertically Centered DNA Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <BiotechDNAVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
