"use client";
import styles from "./events-new.module.css";
import { ClubEvent } from "../lib/events";

export default function EventCard({
  event,
  onClick,
}: {
  event: ClubEvent;
  onClick: () => void;
}) {
  return (
    <div className={styles.eventCard} onClick={onClick}>
      <img src={event.poster} alt={event.title} />
      <div className={styles.eventOverlay}>
        <h3>{event.title}</h3>
      </div>
    </div>
  );
}
