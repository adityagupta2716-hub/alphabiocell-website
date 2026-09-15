"use client";

import { useEffect, useState } from "react";
import styles from "./loader.module.css";

export default function Loader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    // Sequence timing (one by one + 0.5s initial delay):
    // 1. Breathe:      0.60s - 1.45s
    // 2. In:           1.50s - 2.35s
    // 3. Opportunity:  2.40s - 3.35s
    // Curtain reveal:  3.45s -> 4.15s
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 3450);

    const removeTimer = setTimeout(() => {
      setRemoved(true);
    }, 4300);


    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`${styles.loader} ${hidden ? styles.hidden : ""}`}
      aria-hidden={hidden}
    >
      {/* 1. Breathe */}
      <div className={`${styles.word} ${styles.word1}`}>
        <span>BREATHE</span>
      </div>

      {/* 2. In */}
      <div className={`${styles.word} ${styles.word2}`}>
        <span>IN</span>
      </div>

      {/* 3. Opportunity */}
      <div className={`${styles.word} ${styles.word3}`}>
        <span>OPPORTUNITY</span>
      </div>
    </div>
  );
}



