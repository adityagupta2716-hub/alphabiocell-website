"use client";

import React from "react";
import NewsletterFlashcards from "../components/NewsletterFlashcards";
import { Newspaper, Sparkles, BookOpen, FileText } from "lucide-react";

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-[#0B1015] pt-36 sm:pt-48 pb-20 sm:pb-32 relative overflow-x-clip">
      {/* Background Ambient Orbs (strictly bounded) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/8 blur-[180px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-accent/8 blur-[160px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/8 blur-[190px] rounded-full mix-blend-screen pointer-events-none" />

      {/* ── 1. HEADER BANNER SECTION ── */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center p-3.5 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(0,242,254,0.1)]">
          <Newspaper className="text-primary w-6 h-6" />
        </div>

        {/* Space: Badge to Title (28px - 32px) */}
        <div className="h-7 sm:h-8" />

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white tracking-wider">
          OUR <span className="text-gradient">NEWSLETTER</span>
        </h1>

        {/* Space: Title to Subtitle (48px - 56px) */}
        <div className="h-12 sm:h-14" />

        {/* Subtitle - One single line on desktop */}
        <p className="text-slate-400 max-w-5xl mx-auto text-base sm:text-lg leading-relaxed lg:whitespace-nowrap">
          Stay updated with the latest news, research breakthroughs, and announcements from Alpha Bio Cell.
        </p>

        {/* Space: Subtitle to Interactive Info (36px - 44px) */}
        <div className="h-9 sm:h-11" />

        {/* Interactive Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" /> Interactive Flashcards
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" /> Click Any Card to Read
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" /> Verbatim Source Content
          </span>
        </div>
      </div>

      {/* Space: Header to Filter Section (56px - 80px) */}
      <div className="h-14 sm:h-16 lg:h-20" />

      {/* ── 2. MAIN FLASHCARDS & FILTER SECTION ── */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <NewsletterFlashcards />
      </div>

      {/* Space: Flashcards Grid to Bottom Highlights (120px - 176px) */}
      <div className="h-28 sm:h-36 lg:h-44" />

      {/* ── 3. BOTTOM INFO HIGHLIGHTS ── */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
          <h3 className="text-white font-heading font-bold text-lg mb-2.5">Curated Research</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Deep-dives into peer-reviewed methodologies, patient-derived organoid models, and oncology breakthroughs.
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
          <h3 className="text-white font-heading font-bold text-lg mb-2.5">Laboratory Protocols</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Step-by-step benchmark workflows for genomic DNA isolation, thermal cycling, and gel electrophoretic analysis.
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
          <h3 className="text-white font-heading font-bold text-lg mb-2.5">Student Contributions</h3>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            Spotlighting student researchers and computational biology features across VIT and SBST.
          </p>
        </div>
      </div>

      {/* Space: Bottom Highlights to Footer (96px - 144px) */}
      <div className="h-24 sm:h-32 lg:h-36" />
    </div>
  );
}

