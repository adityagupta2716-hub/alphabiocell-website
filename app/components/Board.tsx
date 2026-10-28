"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/use-outside-click";
import { X, Users, Facebook, Twitter, Instagram } from "lucide-react";

export function Board() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const [mounted, setMounted] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const justOpenedRef = useRef(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
      justOpenedRef.current = true;
      setTimeout(() => {
        justOpenedRef.current = false;
      }, 0);
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(
    ref,
    () => {
      if (justOpenedRef.current) {
        return;
      }
      setActive(null);
    },
    Boolean(active && typeof active === "object")
  );

  const layout = [4, 5, 5];
  const rows: Array<typeof cards> = [];
  {
    let start = 0;
    for (const count of layout) {
      rows.push(cards.slice(start, start + count));
      start += count;
    }
  }

  return (
    <>
      {mounted
        ? createPortal(
          <AnimatePresence>
            {active && typeof active === "object" ? (
              <div className="fixed inset-0 z-[1000] flex items-center justify-center overflow-y-auto p-4 md:p-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[1000] h-full w-full bg-[#0B1015]/80 backdrop-blur-sm"
                />

                <motion.div
                  key={`modal-${(active as any)?.title}-${id}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  layoutId={`card-${(active as any)?.title}-${id}`}
                  ref={ref}
                  className="relative z-[1010] w-full max-w-[500px] max-h-[90vh] flex flex-col glass-panel rounded-3xl overflow-hidden shadow-2xl"
                >
                  <motion.div layoutId={`image-${(active as any)?.title}-${id}`}>
                    <img
                      src={(active as any)?.src}
                      alt={(active as any)?.title}
                      className="w-full h-80"
                      style={{ objectFit: "cover", objectPosition: "center 55%" }}
                    />
                  </motion.div>

                  <button
                    className="absolute top-4 right-4 z-[1020] flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors group"
                    onClick={() => setActive(null)}
                    aria-label="Close"
                  >
                    <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>

                  <div className="flex flex-col flex-1 overflow-hidden bg-[#090e13] relative">
                    <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary/10 blur-[60px] rounded-full pointer-events-none" />

                    <div className="flex justify-between items-start gap-4 p-8 pb-4" style={{ margin: "5px" }}>
                      <div className="space-y-1">
                        <motion.h3
                          layoutId={`title-${(active as any)?.title}-${id}`}
                          className="font-heading font-bold text-2xl text-white tracking-wide"
                        >
                          {(active as any)?.title}
                        </motion.h3>
                        <motion.p
                          layoutId={`description-${(active as any)?.description}-${id}`}
                          className="text-primary font-medium tracking-wide uppercase text-sm"
                        >
                          {(active as any)?.description}
                        </motion.p>
                      </div>


                    </div>

                    <div className="px-8 pb-8 overflow-y-auto hide-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" style={{ marginTop: "5px", marginLeft: "10px", marginBottom: "10px", marginRight: "10px" }}>
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-slate-300 text-base leading-relaxed space-y-4"
                      >
                        {typeof (active as any)?.content === "function"
                          ? (active as any)?.content()
                          : (active as any)?.content}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>,
          document.body
        )
        : null}

      <section className="w-full flex justify-center mt-12 overflow-hidden relative">
        {/* Background decorative effects */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full translate-y--1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="w-full max-w-6xl px-6 relative z-10">
          <div className="relative w-full h-auto aspect-[3/2] min-h-[320px] md:min-h-[480px] rounded-[20px] overflow-hidden mb-16 border border-sky-400/20 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(56,189,248,0.1)] bg-[#080d1f] flex items-end justify-center">
            <img src="/board-group.jpg" alt="Board members" className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-0% via-transparent via-50% to-[#0B1015] to-95% z-10" />
            <div className="relative z-20 text-center px-8 py-6 w-full">
              <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <Users className="text-primary w-6 h-6" />
              </div>
              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4 tracking-widest drop-shadow-md">
                MEET THE <span className="text-gradient">BOARD</span>
              </h2>
              <p className="text-slate-300 font-sans text-lg mx-auto drop-shadow-md">
                The passionate minds driving innovation and excellence in biotechnology at Vellore Institute of Technology.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-20" style={{ marginTop: "50px", marginBottom: "50px" }}>
            {cards.map((card, idx) => (
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                key={card.title}
                onClick={() => setActive(card)}
                className="group flex flex-col pt-4 px-6 pb-2 bg-[#1c2128] rounded-[2px] cursor-pointer hover:bg-[#222831] border border-white/5 transition-colors duration-300 relative overflow-hidden h-[510px] md:h-[540px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              >
                <div className="flex justify-between items-start mb-4 z-10" style={{ margin: "5px" }}>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-[#1e90ff] font-semibold text-xs md:text-sm uppercase tracking-wider"
                  >
                    {card.description}
                  </motion.p>
                  <div className="flex items-center gap-3 text-slate-400 mt-0.5">
                    <Facebook size={14} className="hover:text-white transition-colors" />
                    <Twitter size={14} className="hover:text-white transition-colors" />
                    <Instagram size={14} className="hover:text-white transition-colors" />
                  </div>
                </div>

                <motion.div layoutId={`image-${card.title}-${id}`} className="w-full overflow-hidden relative" style={{ height: "400px", minHeight: "400px" }}>
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                    style={{ objectFit: "cover", objectPosition: "center 55%", width: "100%", height: "100%" }}
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <div className="flex justify-start items-center mt-auto z-10" style={{ margin: "5px 5px 0 5px" }}>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-heading font-bold text-white text-xl md:text-2xl tracking-wide text-left"
                  >
                    {card.title}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const cards = [
  {
    description: "Chairperson",
    title: "Sana Vinod",
    src: "Board/Sana Vinod.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
         A dedicated leader whose intellect, work ethic, and strategic vision keeps ABC thriving. Truly a perfect blend of grace and brilliance.
        </p>
      );
    },
  },
  {
    description: "Vice Chairperson",
    title: "Aaditya Ghosh",
    src: "Board/Aaditya Ghosh.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
           His steady leadership, resilience under pressure, and approachability makes him an invaluable pillar of the team, offering reliable support across both professional and personal concerns.
        </p>
      );
    },
  },
  {
    description: "Secretary",
    title: "Saktivisakan",
    src: "Board/Saktivisakan.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
           Known for his boundless energy and enthusiasm, he ensures the smooth functioning of ABC by efficiently managing approvals, coordination, and day-to-day operations. A truly dependable and dedicated contributor.
        </p>
      );
    },
  },
  {
    description: "Co-Secretary",
    title: "Madhumitha Balaji",
    src: "Board/Madhumitha Balaji.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
          A dedicated and thoughtful contributor, she is known for her strong work ethic, innovative ideas, and kindness. Her role in managing approvals, combined with her diligence, informed perspective, and collaborative approach, makes her an essential contributor to the effective functioning and strengthening of ABC.
        </p>
      );
    },
  },
  {
    description: "Events Head",
    title: "Neha Chavan",
    src: "Board/Neha Chavan.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
         Her organizational efficiency, creative contributions, and approachable demeanor contribute significantly to the smooth execution of the club's events. She balances efficiency with a cheerful and easygoing presence, making every event a success.
        </p>
      );
    },
  },
  {
    description: "Research Head",
    title: "Anahita Munshi",
    src: "Board/Anahita Munshi.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
          A thoughtful and highly intelligent leader with excellent research skills, she is a joy to work with. Her constant curiosity and ability to introduce new ideas play a key role in driving the club's research initiatives forward.
        </p>
      );
    },
  },
  {
    description: "Finance Head",
    title: "Elwin Shaijin",
    src: "Board/Elwin Shaijin.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
          Kind and approachable, he plays a pivotal role in ensuring the smooth functioning of ABC. Through effective financial management and sponsor acquisition he forms the backbone of ABC's operational success.
        </p>
      );
    },
  },
  {
    description: "Outreach Head",
    title: "Sameha Khan Pathan",
    src: "Board/Sameha Khan Pathan.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
          With a strong understanding of audience engagement and digital trends, she creates compelling content that drives visibility and growth. Approachable, kind, and naturally funny, she is a joy to work with and her strategic approach has significantly boosted ABC's reach across social media.
        </p>
      );
    },
  },
  {
    description: "Design Head",
    title: "Snehanjali Sahoo",
    src: "Board/Snehanjali Sahoo.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
          Extremely hardworking and academically accomplished with a creative mind, she transforms ideas into beautiful visuals through both handcrafted and digital designs, giving ABC its distinctive visual identity
        </p>
      );
    },
  },
  {
    description: "Editorial Head",
    title: "Riti Kumar",
    src: "Board/Riti Kumar.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
           Creative and articulate, she has a strong command of language and an ability to communicate ideas effectively. Kind, efficient, and highly collaborative, and contributes to the club's editorial excellence.
        </p>
      );
    },
  },
  {
    description: "Internal Operatives",
    title: "Sukrit Gupta",
    src: "Board/Sukrit Gupta.jpeg",
    ctaText: "Connect",
    ctaLink: "https://www.linkedin.com/",
    content: () => {
      return (
        <p>
           Serving as the vital bridge between board members of ABC, he is known for his intelligence, creativity, and ambition. A confident communicator who effectively leverages his skills to strengthen coordination and collaboration.
        </p>
      );
    },
  },
];
