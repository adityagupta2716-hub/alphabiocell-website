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
    { name: "Newsletter", href: "/newsletter" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "py-3.5 bg-[#05080c]/85 backdrop-blur-lg border-b border-white/5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          : "py-4.5 bg-transparent"
      }`}
    >
      <div className="site-container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 z-50 group shrink-0 min-w-0">
          <img
            src="/ABCbluelogobbg1(1).png"
            alt="AlphaBioCell Logo"
            className="h-8 md:h-9 w-auto object-contain shrink-0 drop-shadow-[0_0_10px_rgba(0,242,254,0.4)] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="w-px h-6 bg-white/20 shrink-0" aria-hidden="true" />
          <img
            src="/vit_white(1).png"
            alt="VIT Logo"
            className="h-8 md:h-9 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative font-semibold text-[13px] tracking-wider uppercase transition-colors duration-300 hover:text-[#00f2fe] whitespace-nowrap ${
                  isActive ? "text-[#00f2fe]" : "text-slate-300"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#00f2fe] shadow-[0_0_10px_rgba(0,242,254,0.9)] rounded-full" />
                )}
              </Link>
            );
          })}
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
          </div>
        </div>
      </div>
    </header>
  );
}
