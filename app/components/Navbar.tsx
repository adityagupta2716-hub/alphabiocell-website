"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const navLinks = [
    { name: "Home",       href: "/" },
    { name: "Events",     href: "/events" },
    { name: "Board",      href: "/board" },
    { name: "AlphaForge", href: "/alphaforge" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "py-3 glass" : "py-4 bg-transparent"
      }`}
    >
      {/*
        ── NAVBAR CONTAINER ──
        • max-w-[1240px] aligns with all page sections (same as .page-container)
        • px-6 md:px-12 lg:px-20 = 24/48/80px side padding at each breakpoint
        • flex items-center justify-between: logos left, nav links right
        • No inline style hacks — pure flex, no overlapping
      */}
      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">

        {/*
          ── LOGO GROUP ──
          • shrink-0 prevents logos from squishing on narrow screens
          • gap-4 (16px) between ABC logo, divider, VIT logo — clean separation
          • min-w-0 + overflow-hidden ensures no overflow on small viewports
        */}
        <Link href="/" className="flex items-center gap-4 z-50 group shrink-0 min-w-0">
          <img
            src="/ABCbluelogobbg1(1).png"
            alt="AlphaBioCell Logo"
            className="h-9 w-auto object-contain shrink-0 drop-shadow-[0_0_8px_rgba(0,242,254,0.4)] transition-transform duration-300 group-hover:scale-105"
          />
          {/* Thin vertical divider between the two logos */}
          <div className="w-px h-7 bg-white/20 shrink-0" aria-hidden="true" />
          <img
            src="/vit_white(1).png"
            alt="VIT Logo"
            className="h-9 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/*
          ── DESKTOP NAV (≥768px) ──
          • gap-8 = 32px between each link — breathable but not scattered
          • whitespace-nowrap prevents any link from wrapping mid-word
        */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-medium text-[13px] tracking-wider uppercase transition-colors duration-300 hover:text-primary whitespace-nowrap ${
                  isActive ? "text-primary" : "text-slate-300"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent shadow-[0_0_8px_rgba(0,242,254,0.8)] rounded-full" />
                )}
              </Link>
            );
          })}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfZiCyqLCCyd-ThH5vw1qhKKrQL7VhG3-HEswG1xjnfbzkNKQ/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[13px] tracking-wider uppercase text-slate-300 hover:text-primary transition-colors duration-300 whitespace-nowrap"
          >
            Upload PDF
          </a>
        </nav>

        {/* ── MOBILE HAMBURGER ── */}
        <button
          className="md:hidden z-50 text-slate-200 hover:text-primary transition-colors focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* ── MOBILE FULL-SCREEN OVERLAY ── */}
        <div
          className={`fixed inset-0 bg-[#0B1015]/97 backdrop-blur-xl z-40 transition-all duration-500 flex flex-col items-center justify-center md:hidden ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="flex flex-col gap-10 items-center text-center">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-3xl font-heading font-medium tracking-wider transition-all duration-300 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  } ${
                    isActive
                      ? "text-primary text-gradient drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]"
                      : "text-slate-200 hover:text-white"
                  }`}
                  style={{ transitionDelay: `${i * 80 + 80}ms` }}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfZiCyqLCCyd-ThH5vw1qhKKrQL7VhG3-HEswG1xjnfbzkNKQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl font-heading font-medium tracking-wider transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              } text-slate-200 hover:text-white`}
              style={{ transitionDelay: `${navLinks.length * 80 + 80}ms` }}
              onClick={() => setOpen(false)}
            >
              Upload PDF
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
