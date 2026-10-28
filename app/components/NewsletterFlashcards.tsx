"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { newsletterArticles, NewsletterArticle } from "../lib/newsletter";
import {
  Activity,
  Dna,
  Cpu,
  Brain,
  Calendar,
  Clock,
  User,
  X,
  Sparkles,
  Quote,
  CheckCircle2,
  BookOpen,
  Filter,
  Share2,
} from "lucide-react";

// Map badge icons to React components
const getCategoryIcon = (iconName: string, color: string) => {
  switch (iconName) {
    case "Activity":
      return <Activity className="w-3.5 h-3.5 shrink-0" style={{ color }} />;
    case "Dna":
      return <Dna className="w-3.5 h-3.5 shrink-0" style={{ color }} />;
    case "Cpu":
      return <Cpu className="w-3.5 h-3.5 shrink-0" style={{ color }} />;
    case "Brain":
      return <Brain className="w-3.5 h-3.5 shrink-0" style={{ color }} />;
    default:
      return <BookOpen className="w-3.5 h-3.5 shrink-0" style={{ color }} />;
  }
};

export default function NewsletterFlashcards() {
  const [selectedArticle, setSelectedArticle] = useState<NewsletterArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Simplified filter categories for clean navigation
  const categories = [
    "All",
    "Oncology",
    "Molecular Biology",
    "Bioinformatics",
    "Neuroscience & Psychology",
    "AI & Agriculture",
    "Evolutionary Genetics",
    "Biomedical Tech",
  ];

  // Filtered articles based on category
  const filteredArticles = newsletterArticles.filter((article) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Oncology")
      return article.category.includes("Oncology") || article.category.includes("Cancer");
    if (selectedCategory === "Molecular Biology")
      return article.category.includes("Molecular Biology");
    if (selectedCategory === "Bioinformatics")
      return article.category.includes("Computational Biology");
    if (selectedCategory === "Neuroscience & Psychology")
      return (
        article.category.includes("Psychosomatic") ||
        article.category.includes("Psychological")
      );
    if (selectedCategory === "AI & Agriculture")
      return article.category.includes("Agri");
    if (selectedCategory === "Evolutionary Genetics")
      return article.category.includes("Evolutionary");
    if (selectedCategory === "Biomedical Tech")
      return article.category.includes("Biomedical");
    return true;
  });

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedArticle]);

  const handleShare = (article: NewsletterArticle, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(
        `${window.location.origin}/newsletter#${article.id}`
      );
      setCopiedId(article.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="w-full">
      {/* ── 1. COMPACT & BALANCED CATEGORY FILTER BAR ── */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs uppercase tracking-wider text-slate-300 font-bold shrink-0">
            <Filter className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>FILTER:</span>
          </div>

          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 ${
                  active
                    ? "bg-primary text-black font-bold shadow-[0_0_14px_rgba(0,242,254,0.35)]"
                    : "bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clean vertical gap between Filter and Grid */}
      <div className="h-8 sm:h-10 lg:h-12" />

      {/* ── 2. PROPER RESPONSIVE FLASHCARDS GRID (100% WIDTH, MAX 1400px, 3 EQUAL COLS, 300-340px HEIGHT) ── */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 px-6 rounded-3xl bg-white/[0.02] border border-white/5 max-w-md mx-auto">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-heading text-white mb-1.5">No Articles Found</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-sm mx-auto mb-5">
              No newsletter items found for this category.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-5 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
            >
              Show All Articles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.32,
                  delay: index * 0.035,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedArticle(article)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedArticle(article);
                  }
                }}
                className="group relative w-full h-[300px] sm:h-[320px] md:h-[330px] lg:h-[340px] rounded-[18px] bg-[#090D14] border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_32px_rgba(0,242,254,0.18)] cursor-pointer overflow-hidden isolate"
              >
                {/* ── FULL IMAGE BACKGROUND COVER ── */}
                {article.coverImage ? (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-600 ease-out"
                    />
                    {/* Dark gradient strongest at bottom behind title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06090E]/95 via-[#06090E]/50 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#121b29] via-[#0a0f18] to-[#05080d]">
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-300`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06090E]/95 via-[#06090E]/60 to-transparent pointer-events-none" />
                  </div>
                )}

                {/* Subtle corner accent glow */}
                <div
                  className="absolute -top-8 -right-8 w-28 h-28 rounded-full blur-[40px] pointer-events-none opacity-15 group-hover:opacity-35 transition-opacity duration-300 z-10"
                  style={{ background: article.accentColor }}
                />

                {/* ── CARD TITLE ONLY (ABSOLUTE POSITIONED AT BOTTOM-LEFT WITH 20-24px PADDING) ── */}
                <div className="absolute left-0 right-0 bottom-0 z-20 p-5 sm:p-6 pointer-events-none">
                  <h3 className="text-[19px] sm:text-[21px] lg:text-[22px] font-heading font-semibold sm:font-bold text-white group-hover:text-primary transition-colors duration-200 leading-[1.3] tracking-tight line-clamp-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    {article.title}
                  </h3>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* ── 3. FULL ARTICLE READING MODAL (CENTERED 780-820px COLUMN, EDITORIAL TYPOGRAPHY & SPACING) ── */}
      <AnimatePresence>
        {selectedArticle && (
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4 md:p-6"
            onClick={() => setSelectedArticle(null)}
          >
            {/* Dark Backdrop with Deep Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#040609]/92 backdrop-blur-2xl"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-20 w-full max-w-[960px] max-h-[94vh] flex flex-col rounded-3xl bg-[#080C13] border border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden"
            >
              {/* Top Accent Gradient Border Bar */}
              <div
                className="w-full h-1.5 shrink-0"
                style={{
                  background: `linear-gradient(90deg, ${selectedArticle.accentColor}, #4facfe, #a855f7)`,
                }}
              />

              {/* Top Sticky Header Bar with Category, Read Time, Share and Close Button */}
              <div className="shrink-0 flex items-center justify-between px-5 sm:px-8 py-3.5 border-b border-white/10 bg-[#080C13]/95 backdrop-blur-md z-30">
                <div className="flex items-center gap-2.5">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-white/10 bg-white/5"
                    style={{ color: selectedArticle.accentColor }}
                  >
                    {getCategoryIcon(selectedArticle.badgeIcon, selectedArticle.accentColor)}
                    <span>{selectedArticle.category}</span>
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{selectedArticle.readTime}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleShare(selectedArticle, e)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10 text-xs font-medium"
                    title="Copy share link"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">
                      {copiedId === selectedArticle.id ? "Copied!" : "Share"}
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedArticle(null)}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
                    aria-label="Close article"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Scrollable Reading View — Natural document scrolling with generous spacing */}
              <div className="overflow-y-auto [scrollbar-width:thin] flex-1">
                {/* ── CENTERED READING COLUMN (780–820px max width for optimal line lengths) ── */}
                <div className="mx-auto w-full max-w-[820px] px-5 sm:px-8 md:px-10 pt-10 sm:pt-14 pb-24">
                  
                  {/* ── 1. ARTICLE TITLE & SUBTITLE ── */}
                  <div className="mb-6 space-y-3">
                    <h1 className="text-[23px] sm:text-[26px] md:text-[28px] font-heading font-bold text-white leading-[1.22] tracking-tight">
                      {selectedArticle.title}
                    </h1>

                                            <p className="text-[17px] sm:text-[17px] text-slate-300 font-medium leading-[1.5]">{selectedArticle.subtitle}</p>
                  </div>

                  {/* ── 2. METADATA ROW (Author, Date, Read Time, Word Count) ── */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-4 py-3 border-y border-white/10 text-xs sm:text-[13px] text-slate-400 mb-8">
                    {selectedArticle.author && (
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-primary" />
                        <span className="text-slate-200 font-medium">
                          {selectedArticle.author}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{selectedArticle.date}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{selectedArticle.readTime}</span>
                    </div>

                    {selectedArticle.wordCount && (
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] text-slate-400">
                        {selectedArticle.wordCount}
                      </span>
                    )}
                  </div>

                  {/* ── 3. HERO COVER IMAGE ── */}
                  {selectedArticle.coverImage && (
                    <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden mb-10 border border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.5)]">
                      <Image
                        src={selectedArticle.coverImage}
                        alt={selectedArticle.title}
                        fill
                        priority
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080C13]/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* ── 4. KEY HIGHLIGHTS & TAKEAWAYS ── */}
                  {selectedArticle.keyTakeaways && selectedArticle.keyTakeaways.length > 0 && (
                    <div className="mb-12 rounded-2xl bg-white/[0.025] border border-white/10 p-6 sm:p-8 relative overflow-hidden">
                      {/* Section heading on its own line */}
                      <div className="flex items-center gap-2 mb-6 pb-3 border-b border-white/10">
                        <Sparkles
                          className="w-4 h-4 shrink-0"
                          style={{ color: selectedArticle.accentColor }}
                        />
                        <h2 className="text-[20px] sm:text-[21px] font-heading font-bold text-white uppercase tracking-wider">
                          Key Highlights &amp; Takeaways
                        </h2>
                      </div>

                      {/* Clean takeaways list: 16–20px padding and 16px vertical gap */}
                      <ul className="space-y-3.5">
                        {selectedArticle.keyTakeaways.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.07]"
                          >
                            <CheckCircle2
                              className="w-4 h-4 shrink-0 mt-0.5"
                              style={{ color: selectedArticle.accentColor }}
                            />
                            <span className="text-[15px] sm:text-[15px] text-slate-200 leading-[1.6]">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* ── 5. ARTICLE SUMMARY CALLOUT (IF SUMMARY EXISTS) ── */}
                  {selectedArticle.summary && (
                    <div className="mb-12 p-5 sm:p-6 rounded-2xl bg-primary/[0.04] border border-primary/20 text-slate-200 text-sm sm:text-base leading-[1.8]">
                      <p className="italic">{selectedArticle.summary}</p>
                    </div>
                  )}

                  {/* ── 6. ARTICLE BODY SECTIONS (SPACIOUS SCIENTIFIC EDITORIAL FORMAT) ── */}
                  <div className="text-slate-300 space-y-12 py-6">
                    {selectedArticle.sections.map((sec, i) => (
                      <section key={i} className="pt-1">
                        {/* Major Section Heading: 44-56px space above (mt-11 sm:mt-14), 16-22px space below (mb-4 sm:mb-5), neat border without touching text */}
                        {sec.heading && (
                          <div className="mt-[48px] mb-[20px] leading-[1.35]">
                            <h2 className="text-[23px] md:text-[26px] font-heading font-bold text-white flex items-center gap-2.5 leading-[1.3] pb-3 border-b border-white/10">
                              <span
                                className="w-2 h-2 rounded-full shrink-0"
                                style={{ background: selectedArticle.accentColor }}
                              />
                              <span>{sec.heading}</span>
                            </h2>
                          </div>
                        )}

                        {/* Subsection Heading: 30-36px space above (mt-7 sm:mt-9), 12-16px space below (mb-3 sm:mb-4) */}
                        {sec.subheading && (
                          <h3 className="text-[18px] sm:text-[20px] md:text-[21px] font-semibold text-slate-200 mt-7 sm:mt-9 mb-3 sm:mb-4 leading-[1.4]">
                            {sec.subheading}
                          </h3>
                        )}

                        {/* Paragraphs: 20-26px space-y, 17-18px desktop font, 1.75-1.85 line-height */}
                        {sec.paragraphs && sec.paragraphs.length > 0 && (
                          <div className="space-y-4 sm:space-y-5 my-4">
                            {sec.paragraphs.map((para, pIdx) => (
                              <p
                                key={pIdx}
                                className="text-[15px] sm:text-[16px] text-slate-300 leading-[1.8] font-sans"
                              >
                                {para}
                              </p>
                            ))}
                          </div>
                        )}

                        {/* Bullets: 12-16px space between items (space-y-3) */}
                        {sec.bullets && sec.bullets.length > 0 && (
                          <ul className="space-y-3 pl-1 my-5">
                            {sec.bullets.map((bullet, bIdx) => (
                              <li
                                key={bIdx}
                                className="flex items-start gap-3 text-[15px] sm:text-[17px] text-slate-300 leading-[1.75]"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2.5"
                                  style={{ background: selectedArticle.accentColor }}
                                />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Callout: 28-36px margins, accent border */}
                        {sec.callout && (
                          <div
                            className="my-7 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border-l-4 border-y border-r border-white/10 text-[15px] sm:text-[17px] text-slate-200 leading-[1.8]"
                            style={{ borderLeftColor: selectedArticle.accentColor }}
                          >
                            {sec.callout}
                          </div>
                        )}

                        {/* Quote: 28-36px margins */}
                        {sec.quote && (
                          <div className="my-8 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 space-y-3">
                            <Quote className="w-7 h-7 text-primary/40" />
                            <blockquote className="text-base sm:text-lg md:text-[19px] italic text-slate-100 font-serif leading-[1.75]">
                              &ldquo;{sec.quote}&rdquo;
                            </blockquote>
                            {sec.quoteAuthor && (
                              <p className="text-xs sm:text-[13px] uppercase tracking-wider text-slate-400 font-semibold pt-0.5">
                                — {sec.quoteAuthor}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Table */}
                        {sec.table && (
                          <div className="my-7 overflow-x-auto rounded-xl border border-white/10 shadow-md">
                            <table className="w-full text-left text-xs sm:text-sm">
                              <thead className="bg-white/5 border-b border-white/10 text-slate-200 font-heading uppercase text-xs tracking-wider">
                                <tr>
                                  {sec.table.headers.map((th, hIdx) => (
                                    <th key={hIdx} className="p-3.5 sm:p-4 font-semibold">
                                      {th}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/5 text-slate-300">
                                {sec.table.rows.map((row, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                                    {row.map((cell, cIdx) => (
                                      <td key={cIdx} className="p-3.5 sm:p-4 leading-relaxed">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </section>
                    ))}
                  </div>

                  {/* ── MODAL FOOTER ── */}
                  <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-400 text-center sm:text-left">
                      AlphaBioCell Technical Club • School of Bio Sciences and Technology (SBST), VIT
                    </div>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      Close Article
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
