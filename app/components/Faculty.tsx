"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export default function Faculty() {
  const facultyMembers = [
    {
      name: "Dr. Ramesh Pathy Manian",
      role: "Professor Grade I, Department of Biotechnology",
      image: "/Faculty/RameshPathySir.webp",
      bio: "Dr. Ramesh Pathy Manian, Professor in the School of Biosciences and Technology, serves as the Faculty Coordinator of our club. With 18 years of academic experience and specialised expertise in Biocatalysts and Biofuels, he shares invaluable technical, academic, and professional support to our members. His mentorship ensures that the club's activities run smoothly, and his encouragement motivates the club to pursue its goals with confidence.",
    },
    {
      name: "Dr. Suthindiran K",
      role: "Head of Department, Bio-Medical Sciences",
      image: "/Faculty/SuthindiranSir.webp",
      bio: "Dr. Suthindiran K, Head of the Department of Bio-Medical Sciences, is the Faculty Coordinator of our club. Holding a Master's in Biotechnology and Microbiology and a Doctorate in Marine Biotechnology, along with 15 years of teaching experience, he specialises in Marine Biotechnology, Microbial Diversity, and Metagenomics. Through his mentorship, members get constant academic and professional insights.",
    },
  ];

  return (
    /* ── FACULTY ADVISORS SECTION ──
       - Substantial 160px–200px vertical padding (py-[160px] lg:py-[200px]) on main section container */
    <section className="faculty-section relative py-[160px] lg:py-[200px] bg-[#05080c] overflow-hidden">

      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-32 w-[450px] h-[450px] bg-[#00f2fe]/4 blur-[180px] rounded-full pointer-events-none" />

      {/* Unified Site Container */}
      <div className="site-container relative z-10">

        {/* Section Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col items-center mb-12 lg:mb-14"
        >
          {/* Icon Badge → 20px gap to Heading (mb-5 = 20px) */}
          <div className="inline-flex items-center justify-center w-11 h-11 bg-[#00f2fe]/10 rounded-full border border-[#00f2fe]/30 text-[#00f2fe] shadow-[0_0_16px_rgba(0,242,254,0.12)] mb-5">
            <GraduationCap className="w-5 h-5" />
          </div>

          {/* Faculty Heading → 18px gap to Description (mb-4.5 = 18px) */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4.5">
            Faculty <span className="text-[#00f2fe]">Advisors</span>
          </h2>

          {/* Description → 70px gap to Cards (mb-18 lg:mb-20 on container = 70px–80px) */}
          <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
            Guiding our journey with decades of academic excellence, research leadership, and industry expertise.
          </p>
        </motion.div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={faculty.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: index * 0.15 }}
              className="bg-white/[0.025] backdrop-blur-xl p-7 md:p-9 rounded-3xl border border-white/10 flex flex-col md:flex-row gap-7 items-start group hover:border-[#00f2fe]/40 hover:shadow-[0_0_30px_rgba(0,242,254,0.1)] transition-all duration-500 relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00f2fe]/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Faculty Photo */}
              <div className="shrink-0 relative">
                <div className="w-28 h-28 md:w-[130px] md:h-[130px] rounded-2xl overflow-hidden relative z-10 border border-white/15 shadow-xl group-hover:border-[#00f2fe]/50 transition-colors duration-500">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-[#00f2fe]/15 blur-xl rounded-2xl transform scale-90 translate-y-3 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Faculty Details */}
              <div className="relative z-10 flex-1 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-[#00f2fe] transition-colors duration-300 leading-snug mb-1.5">
                    {faculty.name}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-[#00f2fe]/90 mb-4">
                    {faculty.role}
                  </p>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                    {faculty.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
