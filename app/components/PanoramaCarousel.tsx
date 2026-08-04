"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./panorama.module.css";

interface Item {
  id: number;
  name: string;
  image: string;
}

interface Props {
  items: Item[];
}

export default function PanoramicCarousel({ items }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // duplicate for infinite scroll illusion
  const extended = [...items, ...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const cards = container.querySelectorAll(`.${styles.card}`);
      const rect = container.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;

        const distance = cardCenter - center;
        const normalized = distance / 400; // curvature control

        const clamped = Math.max(-1, Math.min(1, normalized));
        const abs = Math.abs(clamped);

        const rotateY = clamped * 25;
        const translateY = abs * 80;
        const scaleY = 1 + abs * 0.45;
        const scaleX = 1 - abs * 0.1;
        const opacity = 1 - abs * 0.6;

        (card as HTMLElement).style.transform = `
          perspective(1200px)
          rotateY(${rotateY}deg)
          translateY(${translateY}px)
          scaleX(${scaleX})
          scaleY(${scaleY})
        `;

        (card as HTMLElement).style.opacity = `${opacity}`;
      });

      // infinite seamless loop
      const third = container.scrollWidth / 3;

      if (container.scrollLeft < third * 0.5) {
        container.scrollLeft += third;
      }

      if (container.scrollLeft > third * 1.5) {
        container.scrollLeft -= third;
      }
    };

    container.addEventListener("scroll", update);
    update();

    return () => container.removeEventListener("scroll", update);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.scroll} ref={containerRef}>
        {extended.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} />
            <div className={styles.title}>{item.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}