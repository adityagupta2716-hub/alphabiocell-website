"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, MapPin, Tag } from "lucide-react";
import { ClubEvent } from "../lib/events";

export default function EventModal({
  event,
  onClose,
}: {
  event: ClubEvent;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-[#0B1015]/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl hide-scrollbar"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors group"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[500px]">
            {/* Left side: Sticky image */}
            <div className="relative h-[300px] lg:h-full w-full bg-[#0B1015]">
              <img
                src={event.poster}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1015] to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#090e13]" />
            </div>

            {/* Right side: Scrollable content */}
            <div className="p-8 md:p-12 relative bg-[#090e13]">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 tracking-wide drop-shadow-sm" style={{ marginLeft: "10px", marginTop: "10px" }}>
                {event.title}
              </h2>

              {/* Meta information */}
              <div className="flex flex-wrap gap-4 mb-8" style={{ marginLeft: "10px" }}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium" style={{ margin: "3px", marginRight: "0px" }}>
                  <Tag size={16} />
                  <span style={{ margin: "3px", marginLeft: "0px" }}>{event.category}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm" style={{ margin: "3px", marginRight: "0px" }}>
                  <Calendar size={16} />
                  <span style={{ margin: "3px", marginLeft: "0px" }}>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm" style={{ margin: "3px", marginRight: "0px" }}>
                  <MapPin size={16} />
                  <span style={{ margin: "3px", marginLeft: "0px" }}>{event.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 mb-10 overflow-hidden relative">
                <div className="absolute left-0 top-2 bottom-2 w-1 bg-gradient-to-b from-primary to-accent rounded-full" />
                {event.description.map((para, i) => (
                  <p key={i} className="text-slate-300 leading-relaxed font-sans pl-6" style={{ margin: "5px", marginLeft: "10px", marginRight: "10px" }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Gallery Grid */}
              {event.gallery && event.gallery.length > 0 && (
                <div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-4 border-b border-white/10 pb-2" style={{ marginLeft: "10px", marginBottom: "5px" }}>Event Highlights</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3" style={{ margin: "10px", marginBottom: "15px" }}>
                    {event.gallery.map((img, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden border border-white/10 group">
                        <img
                          src={img}
                          alt={`${event.title}-${i}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
