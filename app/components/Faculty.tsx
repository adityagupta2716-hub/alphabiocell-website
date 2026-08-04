"use client";

import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";

export default function Faculty() {
  const facultyMembers = [
    {
      name: "Dr. Ramesh Pathy Manian",
      role: "Professor Grade I, Department of Biotechnology",
      image: "/Faculty/RameshPathySir.webp",
      bio: "Dr. Ramesh Pathy Manian, Professor in the School of Biosciences and Technology, serves as the Faculty Coordinator of our club. With 18 years of academic experience and specialised expertise in Biocatalysts and Biofuels, he shares invaluable technical, academic, and professional support to our members. His mentorship ensures that the club's activities are smooth, and his encouragement motivates the club to pursue its goals with confidence. We're deeply grateful for his tireless contributions.",
    },
    {
      name: "Dr. Suthindiran K",
      role: "Head of Department, Bio-Medical Sciences",
      image: "/Faculty/SuthindiranSir.webp",
      bio: "Dr. Suthindiran K, Head of the Department of Bio-Medical Sciences, is the Faculty Coordinator of our club. Holding a Master's in Biotechnology and Microbiology and a Doctorate in Marine Biotechnology, along with 15 years of teaching experience, he specialises in Marine Biotechnology, Microbial Diversity, and Metagenomics. Through his mentorship, members get constant academic and professional insights, and his involvement ensures that the club's progress is steadfast. We extend our sincere gratitude for his presence in this club.",
    },
  ];

  return (
    <section className="faculty-section relative pt-[120px] pb-[120px] bg-[#0B1015] overflow-hidden">

      {/* Decorative ambient background orbs */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-[500px] h-[500px] bg-primary/6 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[400px] h-[400px] bg-accent/6 blur-[140px] rounded-full pointer-events-none" />

      {/* CONTAINER — max-w-[1240px], px-6/px-12/px-20 = 24/48/80px */}
      <div className="w-full max-w-[1240px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col items-center"
        >
          {/* Icon badge */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] mb-[20px]">
            <GraduationCap className="text-primary w-6 h-6" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-[24px]">
            Faculty <span className="text-gradient">Advisors</span>
          </h2>

          <p className="text-slate-400 text-base md:text-lg max-w-md leading-relaxed mb-[48px]">
            Guiding our journey with decades of academic excellence and industry
            expertise in biotechnology.
          </p>
        </motion.div>

        {/* CARD GRID — equal heights, gap-10 (40px) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mx-auto">
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={faculty.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.65, delay: index * 0.15 }}
              /* Reverted compact padding/margins for reduced card height, h-full for equal heights */
              className="glass p-6 md:p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start group hover:border-primary/30 transition-all duration-500 relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="shrink-0 relative">
                <div className="w-28 h-28 md:w-[135px] md:h-[135px] rounded-xl overflow-hidden relative z-10 border border-white/10 shadow-xl group-hover:border-primary/50 transition-colors duration-500">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-xl transform scale-90 translate-y-4 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="relative z-10 flex-1 flex flex-col h-full">
                <h3 className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-primary transition-colors duration-300 leading-tight mb-1.5">
                  {faculty.name}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-[#1875c7] mb-4">
                  {faculty.role}
                </p>
                <p className="text-slate-300 text-xs md:text-[13px] leading-relaxed">
                  {faculty.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
