"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { newsletterArticles, NewsletterArticle } from "../lib/newsletter";
import {
  Activity,
  Dna,
  Cpu,
  Brain,
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  X,
  Sparkles,
  Quote,
  CheckCircle2,
  BookOpen,
  Filter,
  Share2,
  Bookmark,
} from "lucide-react";

// Map badge icons to React components
const getCategoryIcon = (iconName: string, color: string) => {
  switch (iconName) {
    case "Activity":
      return <Activity className="w-4 h-4" style={{ color }} />;
    case "Dna":
      return <Dna className="w-4 h-4" style={{ color }} />;
    case "Cpu":
      return <Cpu className="w-4 h-4" style={{ color }} />;
    case "Brain":
      return <Brain className="w-4 h-4" style={{ color }} />;
    default:
      return <BookOpen className="w-4 h-4" style={{ color }} />;
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
      return article.category.includes("Psychosomatic") || article.category.includes("Psychological");
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
      {/* ── PROMINENT CATEGORY FILTER AREA (ALL ON ONE LINE ON DESKTOP) ── */}
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 lg:gap-2.5 w-full">
          <div className="flex items-center gap-2 px-3 py-2 text-xs sm:text-sm uppercase tracking-wider text-slate-200 font-bold shrink-0">
            <Filter className="w-4 h-4 text-primary shrink-0" />
            <span>FILTER:</span>
          </div>

          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 lg:px-4.5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-[13px] font-medium tracking-wide transition-all duration-200 whitespace-nowrap shrink-0 ${
                  active
                    ? "bg-primary text-black font-bold shadow-[0_0_20px_rgba(0,242,254,0.4)] scale-[1.02]"
                    : "bg-white/[0.04] text-slate-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Space: Filter Row to Flashcard Grid (80px - 112px Clean Gap) */}
      <div className="h-20 sm:h-24 lg:h-28" />

      {/* ── RESPONSIVE FLASHCARDS GRID (NATURAL CARD HEIGHT + SPACIOUS ROW/COL GAPS) ── */}
      <div className="w-full max-w-[1400px] mx-auto">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-24 px-6 rounded-3xl bg-white/[0.02] border border-white/5 max-w-xl mx-auto">
            <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-xl font-heading text-white mb-2">
              No Articles Found
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
              No newsletter items found for this category.
            </p>
            <button
              onClick={() => setSelectedCategory("All")}
              className="px-6 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
            >
              Show All Articles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-9 lg:gap-x-10 gap-y-16 sm:gap-y-20 lg:gap-y-24">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, scale: 1.012 }}
                onClick={() => setSelectedArticle(article)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedArticle(article);
                  }
                }}
                className="group relative flex flex-col justify-between h-full rounded-3xl p-7 sm:p-8 md:p-9 bg-[#0E151F] border border-white/10 hover:border-primary/50 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_45px_rgba(0,242,254,0.18)] cursor-pointer overflow-hidden"
              >
                {/* Top Subtle Thematic Gradient Header */}
                <div
                  className={`absolute top-0 left-0 right-0 h-36 bg-gradient-to-b ${article.gradient} pointer-events-none opacity-40 group-hover:opacity-85 transition-opacity duration-300`}
                />

                {/* Subtle Ambient Corner Accent */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[50px] pointer-events-none opacity-15 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ background: article.accentColor }}
                />

                {/* Card Top & Body Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* 1. Category Pill & Read Time Row */}
                  <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
                      {getCategoryIcon(article.badgeIcon, article.accentColor)}
                      <span className="text-xs font-semibold tracking-wide text-slate-200 truncate max-w-[170px]">
                        {article.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium shrink-0">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* 2. Newsletter Title (Multi-line friendly with room to breathe) */}
                  <h3 className="text-xl sm:text-[22px] font-heading font-bold text-white group-hover:text-primary transition-colors duration-200 mb-3 leading-snug tracking-tight line-clamp-3">
                    {article.title}
                  </h3>

                  {/* 3. Subtitle (if available) */}
                  {article.subtitle && (
                    <p className="text-xs sm:text-[13px] text-slate-400 font-medium tracking-wide mb-4 leading-normal line-clamp-2">
                      {article.subtitle}
                    </p>
                  )}

                  {/* 4. Short Summary / Description (Comfortable line-height) */}
                  <p className="text-slate-300 text-sm sm:text-[14px] leading-relaxed mb-6 font-normal line-clamp-4">
                    {article.summary}
                  </p>

                  {/* 5. Key Highlight / Takeaway Callout Box */}
                  {article.keyTakeaways.length > 0 && (
                    <div className="mt-auto mb-6 p-4 rounded-2xl bg-white/[0.035] border border-white/10 flex items-start gap-3 shadow-sm">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: article.accentColor }}
                      />
                      <span className="leading-relaxed text-xs sm:text-[13px] text-slate-200 line-clamp-2 font-normal">
                        {article.keyTakeaways[0]}
                      </span>
                    </div>
                  )}
                </div>

                {/* 6. Card Bottom Meta Bar & Read Button */}
                <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-xs text-slate-400 truncate pr-3">
                    {article.author ? (
                      <span className="flex items-center gap-1.5 text-slate-300 font-medium truncate">
                        <User className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="truncate">{article.author}</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                    )}
                  </div>

                  {/* Read button */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-black text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 shadow-sm">
                    <span>Read</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* ── SPACIOUS ARTICLE DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedArticle && (
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 md:p-10"
            onClick={() => setSelectedArticle(null)}
          >
            {/* Dark Backdrop with Deep Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#05080c]/85 backdrop-blur-xl"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-20 w-full max-w-5xl max-h-[94vh] flex flex-col rounded-3xl bg-[#0B1015] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.85)] overflow-hidden"
            >
              {/* Top Accent Gradient Border Bar */}
              <div
                className="w-full h-2.5 shrink-0"
                style={{
                  background: `linear-gradient(90deg, ${selectedArticle.accentColor}, #4facfe, #a855f7)`,
                }}
              />

              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-5 right-5 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/70 hover:bg-white/15 border border-white/15 text-white transition-all duration-200 group shadow-lg"
                aria-label="Close article details"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
              </button>

              {/* Scrollable Reading View — spacious, article-style */}
              <div className="overflow-y-auto [scrollbar-width:thin]">
                {/* Inner reading column — max width for comfortable reading */}
                <div className="mx-auto w-full max-w-[780px] px-6 sm:px-10 md:px-14 py-12 sm:py-16 space-y-0">

                  {/* ── ARTICLE HEADER ── */}
                  <div className="border-b border-white/10 pb-10 mb-10 space-y-6">
                    {/* Category, Read Time, Word Count badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-white/10 bg-white/5"
                        style={{ color: selectedArticle.accentColor }}
                      >
                        {getCategoryIcon(
                          selectedArticle.badgeIcon,
                          selectedArticle.accentColor
                        )}
                        {selectedArticle.category}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {selectedArticle.readTime}
                      </span>

                      {selectedArticle.wordCount && (
                        <span className="px-2.5 py-1 rounded-md text-[11px] bg-white/[0.04] text-slate-400 border border-white/5">
                          {selectedArticle.wordCount}
                        </span>
                      )}
                    </div>

                    {/* Main Title */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-[1.2] pr-12">
                      {selectedArticle.title}
                    </h1>

                    {/* Subtitle */}
                    {selectedArticle.subtitle && (
                      <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                        {selectedArticle.subtitle}
                      </p>
                    )}

                    {/* Author / Date Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs text-slate-300">
                      <div className="flex items-center gap-5">
                        {selectedArticle.author && (
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                              <User className="w-4 h-4" />
                            </div>
                            <div>
                              <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">
                                Author / Source
                              </span>
                              <span className="font-medium text-white text-sm">
                                {selectedArticle.author}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="h-8 w-px bg-white/10" />

                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">
                            Date
                          </span>
                          <span className="font-medium text-white text-sm">
                            {selectedArticle.date}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => handleShare(selectedArticle, e)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/5 text-xs font-medium"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                        <span>
                          {copiedId === selectedArticle.id
                            ? "Link Copied!"
                            : "Share Article"}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* ── KEY TAKEAWAYS CALLOUT BOX ── */}
                  <div
                    className="p-8 sm:p-11 rounded-2xl border bg-white/[0.025] relative overflow-hidden mb-14"
                    style={{ borderColor: `${selectedArticle.accentColor}40` }}
                  >
                    {/* Left accent bar */}
                    <div
                      className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl"
                      style={{ background: selectedArticle.accentColor }}
                    />

                    {/* Section title */}
                    <h4
                      className="text-sm font-heading font-bold text-white uppercase tracking-wider flex items-center gap-2.5"
                      style={{ marginBottom: '36px' }}
                    >
                      <Sparkles
                        className="w-4 h-4 shrink-0"
                        style={{ color: selectedArticle.accentColor }}
                      />
                      Key Highlights &amp; Takeaways
                    </h4>

                    {/* Single-column list — most readable layout */}
                    <ul className="flex flex-col gap-5 text-sm sm:text-base text-slate-300">
                      {selectedArticle.keyTakeaways.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]"
                        >
                          <CheckCircle2
                            className="w-5 h-5 shrink-0 mt-0.5"
                            style={{ color: selectedArticle.accentColor }}
                          />
                          <span className="leading-[1.8]">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ── ARTICLE BODY SECTIONS ── */}
                  <div className="text-slate-300">
                    {selectedArticle.sections.map((sec, i) => (
                      <div key={i}>
                        {/* ── Gap above heading (space from previous section) ── */}
                        {i > 0 && <div style={{ height: '56px' }} />}

                        {/* ── Section Heading ── */}
                        {sec.heading && (
                          <>
                            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white flex items-center gap-3">
                              <span
                                className="w-2.5 h-2.5 rounded-full shrink-0"
                                style={{ background: selectedArticle.accentColor }}
                              />
                              {sec.heading}
                            </h3>
                            {/* Guaranteed 32px gap below heading → before content */}
                            <div style={{ height: '32px' }} />
                          </>
                        )}

                        {/* ── Subheading ── */}
                        {sec.subheading && (
                          <>
                            <h4 className="text-base sm:text-lg font-semibold text-slate-200">
                              {sec.subheading}
                            </h4>
                            <div style={{ height: '20px' }} />
                          </>
                        )}

                        {/* ── Paragraphs ── */}
                        {sec.paragraphs && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {sec.paragraphs.map((para, pIdx) => (
                              <p
                                key={pIdx}
                                className="text-sm sm:text-base text-slate-300 font-sans"
                                style={{ lineHeight: '1.85', margin: 0 }}
                              >
                                {para}
                              </p>
                            ))}
                          </div>
                        )}

                        {/* ── Bullets ── */}
                        {sec.bullets && (
                          <>
                            {(sec.paragraphs) && <div style={{ height: '20px' }} />}
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', paddingLeft: '4px' }}>
                              {sec.bullets.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="flex items-start text-sm sm:text-base text-slate-300"
                                  style={{ gap: '14px', lineHeight: '1.8' }}
                                >
                                  <span
                                    className="shrink-0"
                                    style={{
                                      width: '8px',
                                      height: '8px',
                                      borderRadius: '50%',
                                      background: selectedArticle.accentColor,
                                      marginTop: '10px',
                                      flexShrink: 0,
                                    }}
                                  />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}

                        {/* ── Callout ── */}
                        {sec.callout && (
                          <>
                            <div style={{ height: '24px' }} />
                            <div
                              className="rounded-2xl bg-white/[0.03] border border-white/10 text-sm sm:text-base font-medium text-slate-200"
                              style={{
                                padding: '24px 28px',
                                lineHeight: '1.75',
                                borderLeftColor: selectedArticle.accentColor,
                                borderLeftWidth: '4px',
                              }}
                            >
                              {sec.callout}
                            </div>
                            <div style={{ height: '24px' }} />
                          </>
                        )}

                        {/* ── Quote ── */}
                        {sec.quote && (
                          <>
                            <div style={{ height: '24px' }} />
                            <div
                              className="rounded-2xl bg-gradient-to-r from-white/[0.04] to-transparent border border-white/10 relative"
                              style={{ padding: '28px 36px', display: 'flex', flexDirection: 'column', gap: '16px' }}
                            >
                              <Quote className="w-8 h-8 text-primary/30" />
                              <p className="text-base sm:text-lg italic font-serif text-white" style={{ lineHeight: '1.75', margin: 0 }}>
                                {sec.quote}
                              </p>
                              {sec.quoteAuthor && (
                                <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold" style={{ margin: 0 }}>
                                  — {sec.quoteAuthor}
                                </p>
                              )}
                            </div>
                            <div style={{ height: '24px' }} />
                          </>
                        )}

                        {/* ── Table ── */}
                        {sec.table && (
                          <>
                            <div style={{ height: '24px' }} />
                            <div className="overflow-x-auto rounded-xl border border-white/10 shadow-md">
                              <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-white/5 border-b border-white/10 text-slate-200 font-heading uppercase text-[11px] tracking-wider">
                                  <tr>
                                    {sec.table.headers.map((th, hIdx) => (
                                      <th
                                        key={hIdx}
                                        className="font-semibold"
                                        style={{ padding: '16px 20px' }}
                                      >
                                        {th}
                                      </th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5 text-slate-300">
                                  {sec.table.rows.map((row, rIdx) => (
                                    <tr
                                      key={rIdx}
                                      className="hover:bg-white/[0.02] transition-colors"
                                    >
                                      {row.map((cell, cIdx) => (
                                        <td
                                          key={cIdx}
                                          style={{ padding: '14px 20px', lineHeight: '1.6' }}
                                        >
                                          {cell}
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <div style={{ height: '24px' }} />
                          </>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* ── MODAL FOOTER ── */}
                  <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-400 text-center sm:text-left">
                      AlphaBioCell Technical Club • School of Bio Sciences and
                      Technology (SBST), VIT
                    </div>
                    <button
                      onClick={() => setSelectedArticle(null)}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
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

