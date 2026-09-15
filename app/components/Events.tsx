"use client";

import React from "react";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import styles from "./events.module.css";

// Define the event type first
interface ClubEvent {
  category: string;
  title: string;
  src: string;
  date?: string;
  time?: string;
  location?: string;
  description1?: string;
  image1?: string;
  description2?: string;
  image2?: string;
  description3?: string;
  image3?: string;
  id?: string;
}

// Define EventContent component
const EventContent = ({ event }: { event: ClubEvent }) => {
  return (
    <div className={styles.eventContent}>
      <div className={styles.eventModalContent}>
        {/* Title and Category moved into content area above date */}
        <div className={styles.eventHeader}>
          <h1 className={styles.eventTitle}>{event.title}</h1>
          {event.category && (
            <h3 className={styles.eventCategory}>{event.category}</h3>
          )}
        </div>
        
        {event.description1 && (
          <p className={styles.eventDescription}>{event.description1}</p>
        )}
        
        {event.image1 && (
          <div className={styles.eventImage}>
            <img
              src={event.image1}
              alt={`${event.title} - image 1`}
              className={styles.image}
            />
          </div>
        )}
        
        {event.description2 && (
          <p className={styles.eventDescription}>{event.description2}</p>
        )}
        
        {event.image2 && (
          <div className={styles.eventImage}>
            <img
              src={event.image2}
              alt={`${event.title} - image 2`}
              className={styles.image}
            />
          </div>
        )}
        
        {event.description3 && (
          <p className={styles.eventDescription}>{event.description3}</p>
        )}
        
        {event.image3 && (
          <div className={styles.eventImage}>
            <img
              src={event.image3}
              alt={`${event.title} - image 3`}
              className={styles.image}
            />
          </div>
        )}
      </div>
    </div>
  );
};

// Define all club events matching the files in public/Events
const clubEvents: ClubEvent[] = [
  {
    category: "Ideathon",
    title: "Plasmyth",
    src: "/Events/plasmyth/1.jpeg",
    date: "July 31 – Aug 1, 2025",
    time: "—",
    location: "VIT Vellore (SBST) in collaboration with iGEM VIT",
    description1: "Plasmyth was a two-day synthetic biology hackathon organized by Alpha Bio Cell in collaboration with iGEM VIT Vellore. The event aimed to challenge participants to design innovative and commercially viable biological solutions to real-world problems. Participants engaged in expert-led sessions covering wet lab concepts, dry lab analysis, and innovation strategy. Teams worked intensively on problem statements, analyzed biotech scenarios, and pitched their ideas, receiving mentorship and feedback throughout the event.",
    image1: "/Events/plasmyth/1.jpeg",
    description2: "",
    image2: "/Events/plasmyth/2.jpeg",
    description3: "",
    image3: "/Events/plasmyth/3.webp",
    id: "plasmyth"
  },
  {
    category: "Hackathon",
    title: "AlphaForge 2.0",
    src: "/Events/alphaforge/1.jpeg",
    date: "March 25–27, 2025",
    time: "—",
    location: "Alpha Bio Cell x IIC",
    description1: "AlphaForge 2.0 was a three-day innovation challenge organized by Alpha Bio Cell, designed to simulate the real-world startup ecosystem through high-energy ideation and decision-making. The event brought together aspiring innovators and investors, fostering entrepreneurial thinking while providing a competitive platform for breakthrough ideas and leadership development.",
    image1: "/Events/alphaforge/1.jpeg",
    description2: "Participants received mentorship from industry experts and academic leaders, helping them refine their ideas and develop viable prototypes during intensive brainstorming and development sessions.",
    image2: "/Events/alphaforge/2.webp",
    description3: "The event concluded with teams pitching to industrial experts, with feedback from esteemed judges and guest speakers, focusing on innovation, feasibility, and potential impact in the biotechnology sector.",
    image3: "/Events/alphaforge/3.webp",
    id: "alphaforge"
  },
  {
    category: "Workshop",
    title: "Hack‑a‑Pill",
    src: "/Events/hack-a-pill/1.jpeg",
    date: "February 4, 2025",
    time: "—",
    location: "Yantra '24, Alpha Bio Cell",
    description1: "The session focused on the applications of Artificial Intelligence and Machine Learning in drug discovery. The workshop was led by Dr. Mukesh Doble from IIT Madras, who explained core topics such as druglikeness, bioavailability, and pharmacokinetics, and demonstrated key computational tools like ZINC, ChemDes, and PkCSM.",
    image1: "/Events/hack-a-pill/1.jpeg",
    description2: "Participants explored physicochemical foundations and engaged in practical model building with Weka, learning how to implement machine learning algorithms for pharmaceutical applications.",
    image2: "/Events/hack-a-pill/2.webp",
    description3: "The workshop concluded with real-time applications to predict pharmacokinetic properties from molecular structures, followed by networking and mentorship opportunities with professionals in the field.",
    image3: "/Events/hack-a-pill/3.webp",
    id: "hack-a-pill"
  },
  {
    category: "Hackathon",
    title: "Drug Nova",
    src: "/Events/drug-nova/1.jpeg",
    date: "2025",
    time: "—",
    location: "Alpha Bio Cell",
    description1: "Drug Nova was a two-day competitive event conducted during Gravitas ’25 that simulated the complete drug discovery and development pipeline. Teams worked collaboratively to identify a disease target, analyze protein structures, perform ligand screening, ADMET analysis, and molecular docking, and finally present a proposed drug candidate along with a development roadmap.",
    image1: "/Events/drug-nova/1.jpeg",
    description2: "",
    image2: "/Events/drug-nova/2.jpeg",
    description3: "The event brought together students passionate about computational pharmacology, culminating in high-impact presentations evaluated by expert judges.",
    image3: "/Events/drug-nova/3.webp",
    id: "drug-nova"
  },
  {
    category: "Workshop",
    title: "ABC's of ML",
    src: "/Events/abcs-of-ml/1.jpeg",
    date: "2025",
    time: "—",
    location: "Alpha Bio Cell",
    description1: "ABC’s of ML was a one-day intensive workshop conducted during Yantra’24, aimed at introducing participants to the fundamentals of Machine Learning and its applications. The session combined theoretical explanations with hands-on activities and mini-projects to demonstrate real-world use cases..",
    image1: "/Events/abcs-of-ml/1.jpeg",
    description2: "",
    image2: "/Events/abcs-of-ml/2.jpeg",
    id: "abcs-of-ml"
  },
  {
    category: "Competition",
    title: "Bio Blunder",
    src: "/Events/bio-blunder/1.jpeg",
    date: "2025",
    time: "—",
    location: "Alpha Bio Cell",
    description1: "An engaging and humorous troubleshooting event where participants identified, diagnosed, and corrected biological and computational protocol flaws.",
    image1: "/Events/bio-blunder/1.jpeg",
    description2: "Challenged critical thinking and experimental design under timed pressure, testing deep conceptual clarity.",
    image2: "/Events/bio-blunder/2.webp",
    description3: "Fostered analytical troubleshooting and collaborative problem-solving across core biotech principles.",
    image3: "/Events/bio-blunder/3.webp",
    id: "bio-blunder"
  },
  {
    category: "Ideathon",
    title: "Mind in Molecules",
    src: "/Events/mind-in-molecules/1.jpeg",
    date: "2024 - 2025",
    time: "—",
    location: "Alpha Bio Cell",
    description1: "Decoding Biology – Life Inside Out was a guest lecture organized by Alpha Bio Cell, focusing on the molecular foundations of human cognition, behavior, and consciousness.",
    image1: "/Events/mind-in-molecules/1.jpeg",
    description2: "The session aimed to bridge biology with neuroscience and psychology through an integrated perspective.The lecture was delivered by Dr. E. Balamurugan, Professor of Psychopharmacology at Annamalai University.",
    image2: "/Events/mind-in-molecules/2.webp",
    description3: "The session explored how biochemical processes, neurons, and signaling pathways influence thoughts, emotions, and decision-making, using examples from neurobiology and psychopharmacology.",
    image3: "/Events/mind-in-molecules/3.webp",
    id: "mind-in-molecules"
  },
  {
    category: "Exhibition",
    title: "Posterize",
    src: "/Events/Posterize/1.jpeg",
    date: "2025",
    time: "—",
    location: "Alpha Bio Cell",
    description1: "Posterize was an online poster presentation competition that encouraged participants to creatively summarize scientific research papers. The event aimed to enhance literature analysis skills and improve visual science communication.",
    image1: "/Events/Posterize/1.jpeg",
    image2: "/Events/Posterize/2.jpeg",
    id: "posterize"
  },
  {
    category: "Interactive Session",
    title: "Casa",
    src: "/Events/Casa/1.jpeg",
    date: "2025",
    time: "—",
    location: "Alpha Bio Cell",
    description1: "This CASA event was organized by Alpha Bio Cell as an awareness-driven session focused on identifying the early signs of substance abuse and understanding when and how to seek help. The session emphasized prevention, mental well-being, and informed decision-making. Expert insights helped participants understand the impact of substance misuse and the importance of timely intervention and support systems.",
    image1: "/Events/Casa/1.jpeg",
    image2: "/Events/Casa/2.webp",
    id: "casa"
  }
];

// Transform events to include content for the carousel
const eventsWithContent = clubEvents.map(event => ({
  ...event,
  content: <EventContent event={event} />
}));

export function Events() {
  const events = eventsWithContent.map((event, index) => (
    <Card key={event.src} card={event} index={index} layout={true} />
  ));

  return (
    <section className={styles.eventsSection}>
      <div className={styles.eventsContainer}>
        <h2 className={`${styles.eventsTitle} site-font`}>
          Discover Our Club Events
        </h2>
        <p className={`${styles.eventsSubtitle} site-font`}>
          Join us in exploring the fascinating world of biotechnology and innovation
        </p>
        <Carousel items={events} />
      </div>
    </section>
  );
}
