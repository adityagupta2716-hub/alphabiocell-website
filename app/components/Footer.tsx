import Link from "next/link";
import { Instagram, Mail, Globe, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    /* Footer — pt-[60px] pb-10 gives comfortable internal breathing room.
       border-t separates cleanly from Faculty section above. */
    <footer className="relative border-t border-white/10 bg-[#070b0e] pt-[100px] pb-10 overflow-hidden z-10">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-primary/12 blur-[100px] rounded-full pointer-events-none" />

      {/*
        ── FOOTER CONTAINER ──
        Identical max-w-[1240px] + px-6/px-12/px-20 as navbar, hero, marquee, faculty.
        This ensures every section aligns perfectly when viewed side by side.
      */}
      <div className="site-container relative">

        {/* ── MAIN GRID ──
            gap-12 md:gap-16 between columns for premium airy spacing.
            mb-14 below grid before the bottom bar. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-14">

          {/* ── Brand Column ── */}
          <div className="lg:col-span-2">
            {/* Logo + name row — gap-4, mb-6 below before description */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/ABCbluelogobbg1(1).png"
                alt="Alpha Bio Cell"
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-heading font-bold text-white tracking-widest text-gradient">
                AlphaBioCell
              </span>
            </div>

            {/* Description — max-w-xs keeps line length tight on large screens */}
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
              The technical club that innovates at the intersection of biology
              and technology. Exploring the limitless opportunities biology
              offers at Vellore Institute of Technology.
            </p>

            {/* Social icons row — gap-3 between icons */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://www.instagram.com/alphabiocell/",
                  label: "Instagram",
                  icon: <Instagram size={18} />,
                },
                {
                  href: "mailto:alphabiocell@gmail.com",
                  label: "Email",
                  icon: <Mail size={18} />,
                },
                {
                  href: "https://vit.ac.in",
                  label: "VIT Website",
                  icon: <Globe size={18} />,
                },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] bg-white/5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h4 className="text-white font-heading font-medium text-sm mb-6 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Explore
            </h4>
            {/* space-y-4 gives each link enough vertical breathing room */}
            <ul className="space-y-4">
              {["Home", "Events", "Board", "Newsletter"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-slate-400 text-sm hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-3" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Affiliation ── */}
          <div>
            <h4 className="text-white font-heading font-medium text-sm mb-6 flex items-center gap-2 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Affiliation
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                <MapPin className="text-accent shrink-0 mt-0.5" size={16} />
                <span>
                  Vellore Institute of Technology
                  <br />
                  Vellore, Tamil Nadu, 632014
                </span>
              </li>
              <li>
                <a
                  href="https://vit.ac.in/campuslife/studentswelfare"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors group"
                >
                  <ExternalLink size={14} className="group-hover:text-primary" />
                  Student Welfare Office
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ── BOTTOM BAR ──
            pt-8 above border, flex row with space-between */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} AlphaBioCell. All rights reserved.
          </p>
          <div className="text-slate-500 text-sm flex gap-6">
            <span className="hover:text-slate-300 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-slate-300 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
