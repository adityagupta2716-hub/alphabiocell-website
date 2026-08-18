"use client";

import { motion } from "motion/react";

export default function Marquee() {
  const words = ["BREATHE", "IN", "OPPORTUNITY"];

  return (
    <section className="relative pt-24 pb-40 bg-[#070b0e] overflow-hidden border-y border-white/5 z-20">

      {/* Infinite Marquee Strip */}
      <div className="w-full overflow-hidden whitespace-nowrap bg-primary/5 border-y border-primary/20 py-6 mb-24 relative flex items-center shadow-[0_0_30px_rgba(0,242,254,0.05)]" style={{ marginBottom: "30px" }}>
        <motion.div
          className="flex items-center gap-12 shrink-0 will-change-transform"
          animate={{ x: [0, -1000] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {/* Repeat words multiple times for continuous effect */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-16 shrink-0 text-xl md:text-3xl font-heading font-bold text-white tracking-widest opacity-80">
              {words.map((word, j) => (
                <div key={j} className="flex items-center gap-16">
                  <span>{word}</span>
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,242,254,0.8)]" />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="mx-auto px-6 md:px-12 mb-16" style={{marginLeft: "50px", marginRight: "50px"}}>
        <div className="relative glass-panel rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden">

          {/* Decorative background logo */}
          <div className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none">
            <img src="/abcblacklogo.svg" alt="Alpha Bio Cell" className="w-[400px] h-[400px] invert mix-blend-screen" />
          </div>

          <div className="relative z-10 mx-auto text-center mb-16 px-4 md:px-8" style={{ marginTop: "10px" }}>
            <h2 className="text-xl md:text-2xl font-heading font-medium leading-loose text-slate-200" style={{ fontSize: "1rem", marginBottom: "35px" }}>
              We are a vibrant community of passionate, like-minded individuals with diverse skill sets, united by one mission:{" "}
              <span className="text-gradient font-bold drop-shadow-sm">
                to cultivate aspiring bioengineers to create forward-thinking solutions
              </span>{" "}
              to real-world challenges in biotechnology, sustainability, and beyond!
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 mt-12 bg-white/5 rounded-2xl p-8 border border-white/10" style={{ margin: "30px" }}>
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <p className="text-sm md:text-base text-slate-300 leading-loose" style={{ marginLeft: "20px", textAlign: "justify" }}>
                We believe <span className="text-white font-medium">biotechnology is more than a discipline</span>, it's a launchpad for leadership, a catalyst for innovation, and a driving force for change. <span className="text-primary font-medium">At the heart of our vision lies bio</span>: a symbol of growth and possibility, enabling young innovators to breathe ideas, use opportunities, and create solutions that shape the future.
              </p>
            </div>

            {/* Right Column / Mission */}
            <div>
              <div style={{ marginTop: "5px", marginBottom: "5px" }}><h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-6 border-b border-white/10 pb-4 inline-block" >Our Mission</h3></div>
              <ul className="space-y-6 mt-4 md:mr-4 mb-8">
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shrink-0 mt-2 shadow-[0_0_8px_rgba(0,242,254,0.6)]" style={{ marginTop: "10px" }} />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white font-medium">Host Immersive Events:</strong> Hackathons, debates, and ideation challenges that bring together eager science enthusiasts.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent shrink-0 mt-2 shadow-[0_0_8px_rgba(79,172,254,0.6)]" style={{ marginTop: "10px" }} />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white font-medium">Promote Interdisciplinary Research:</strong> Facilitating exploration across fields of science to create innovations and foster the intersection of biology and technology.
                  </p>
                </li>
                <li className="flex gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary shrink-0 mt-2 border border-white/20 shadow-[0_0_8px_rgba(150,100,254,0.6)]" style={{ marginTop: "10px" }} />
                  <p className="text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white font-medium">Nurture Problem-Solving & Entrepreneurship:</strong> Foster a culture of creative problem-solving and biotech entrepreneurship.
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}