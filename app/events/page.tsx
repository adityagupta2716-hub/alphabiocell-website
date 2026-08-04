"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { events, ClubEvent } from "../lib/events";
import EventModal from "../components/EventModal";
import { Calendar } from "lucide-react";

export default function EventsPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState<ClubEvent | null>(null);

  // Duplicate events array infinitely to create a continuous scroll effect
  const duplicatedEvents = [...events, ...events, ...events, ...events];

  useEffect(() => {
    // Scroll to the middle of the container on mount to allow scrolling both ways
    if (scrollRef.current) {
      const container = scrollRef.current;
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1015] pt-32 pb-24 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="mx-auto px-6 md:px-12 relative z-10 mb-16 text-center" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-full mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
          <Calendar className="text-primary w-6 h-6" />
        </div>
        <h1 className="text-5xl md:text-6xl font-heading font-bold text-white tracking-widest mb-4" style={{ marginBottom: "10px" }}>
          OUR <span className="text-gradient">EVENTS</span>
        </h1>
        <p className="text-slate-400 mx-auto text-lg">
          Explore our hackathons, workshops, ideathons, and debates that shape the future.
        </p>
      </div>

      <div className="relative w-full h-[500px] md:h-[600px] flex items-center overflow-hidden touch-pan-x" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-8 overflow-x-auto w-full h-full items-center px-[50vw] hide-scrollbar scroll-smooth relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {duplicatedEvents.map((event, index) => (
            <Card
              key={`${event.title}-${index}`}
              event={event}
              scrollRef={scrollRef}
              onClick={() => setActiveEvent(event)}
            />
          ))}
        </div>
      </div>

      {/* 3 Column Feature Grid matching Reference Structure */}
      <div className="mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 pb-24 text-center" style={{ marginLeft: "30px", marginRight: "30px", marginBottom: "150px" }}>
        <div>
          <h3 className="text-white font-heading font-bold text-lg md:text-xl mb-3">Collaborative Research</h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mx-auto" style={{ marginLeft: "10px", marginRight: "10px", marginTop: "10px" }}>
            Communicate seamlessly and keep everyone in sync with built-in networking, resource sharing, and live project updates.
          </p>
        </div>
        <div>
          <h3 className="text-white font-heading font-bold text-lg md:text-xl mb-3">Immersive Hackathons</h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mx-auto" style={{ marginLeft: "10px", marginRight: "10px", marginTop: "10px" }}>
            Engage in high-stakes problem solving, ideation challenges, and hands-on workshops tailored to your team's style.
          </p>
        </div>
        <div>
          <h3 className="text-white font-heading font-bold text-lg md:text-xl mb-3">Skill Development</h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mx-auto" style={{ marginLeft: "10px", marginRight: "10px", marginTop: "10px" }}>
            Make smarter decisions with mentorship that navigates complex domains, bottlenecks, and the intersection of bio and tech.
          </p>
        </div>
      </div>

      {activeEvent && (
        <EventModal
          event={activeEvent}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </div>
  );
}

function Card({
  event,
  scrollRef,
  onClick,
}: {
  event: ClubEvent;
  scrollRef: React.RefObject<HTMLDivElement | null>;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollX } = useScroll({ container: scrollRef });

  const x = useTransform(scrollX, () => {
    if (!ref.current || !scrollRef.current) return 0;

    const rect = ref.current.getBoundingClientRect();
    const parentRect = scrollRef.current.getBoundingClientRect();

    const cardCenter = rect.left + rect.width / 2;
    const viewportCenter = parentRect.left + parentRect.width / 2;

    const distance = cardCenter - viewportCenter;
    const normalized = distance / parentRect.width;

    return normalized;
  });

  // Exact match to the reference image: Concave Panoramic structure
  // Center is smallest and furthest back. Side cards quickly scale up and rotate inward.
  const scale = useTransform(x, [-3, -2, -1, 0, 1, 2, 3], [2.2, 1.6, 1.15, 0.8, 1.15, 1.6, 2.2]);
  const xOffset = useTransform(x, [-3, -2, -1, 0, 1, 2, 3], [-220, -110, -35, 0, 35, 110, 220]);
  const rotateY = useTransform(x, [-3, -2, -1, 0, 1, 2, 3], [55, 35, 15, 0, -15, -35, -55]);
  const zIndex = useTransform(x, [-3, -2, -1, 0, 1, 2, 3], [40, 30, 20, 10, 20, 30, 40]);
  const opacity = useTransform(x, [-4, -3, -2, -1, 0, 1, 2, 3, 4], [0, 0.4, 0.9, 1, 1, 1, 0.9, 0.4, 0]);

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      className="shrink-0 w-[240px] md:w-[280px] h-[320px] md:h-[380px] relative rounded-3xl overflow-hidden cursor-pointer shadow-[0_20px_40px_rgba(0,0,0,0.5)] bg-neutral-900 border border-white/5"
      style={{
        scale,
        x: xOffset,
        rotateY,
        zIndex,
        opacity,
        perspective: 1500,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ y: -5, scale: 1.05, zIndex: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <img
        src={event.poster}
        alt={event.title}
        className="w-full h-full object-cover pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1015]/90 via-[#0B1015]/40 to-transparent opacity-80 z-10" />

      <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col items-center text-center">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-2 drop-shadow-lg">{event.title}</h3>
        <p className="text-primary font-medium tracking-wide uppercase text-xs mb-3">{event.category || 'Event'}</p>
        <button className="px-5 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-xs hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100 duration-500">
          View Details
        </button>
      </div>
    </motion.div>
  );
}