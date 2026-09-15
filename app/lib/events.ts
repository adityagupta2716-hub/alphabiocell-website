export interface ClubEvent {
  id: string;
  category: string;
  title: string;
  poster: string;
  date: string;
  location: string;
  description: string[];
  gallery: string[];
}

export const events: ClubEvent[] = [
  {
    id: "plasmyth",
    category: "Ideathon",
    title: "Plasmyth",
    poster: "/Events/plasmyth/1.jpeg",
    date: "July 31 – Aug 1, 2025",
    location: "VIT Vellore (SBST) in collaboration with iGEM VIT",
    description: [
      "Plasmyth was a two-day synthetic biology hackathon organized by Alpha Bio Cell in collaboration with iGEM VIT Vellore. The event aimed to challenge participants to design innovative and commercially viable biological solutions to real-world problems.",
      "Guest talk by Dr. Santhanam P highlighted marine bioprospecting and inspired beyond-traditional thinking. Teams worked on innovative solutions to real-world synthetic biology challenges.",
      "The event culminated in a series of pitches where teams presented their solutions to a panel of judges from academia and industry, showcasing the intersection of scientific innovation and entrepreneurial thinking."
    ],
    gallery: [
      "/Events/plasmyth/1.jpeg",
      "/Events/plasmyth/2.jpeg",
      "/Events/plasmyth/3.webp"
    ]
  },
  {
    id: "alphaforge",
    category: "Hackathon",
    title: "AlphaForge 2.0",
    poster: "/Events/alphaforge/1.jpeg",
    date: "March 25–27, 2025",
    location: "Alpha Bio Cell x IIC",
    description: [
      "AlphaForge 2.0 was a three-day innovation challenge organized by Alpha Bio Cell, designed to simulate the real-world startup ecosystem through high-energy ideation and decision-making.",
      "Participants received mentorship from industry experts and academic leaders, helping them refine their ideas and develop viable prototypes during intensive brainstorming and development sessions.",
      "The event concluded with teams pitching to industrial experts, with feedback from esteemed judges and guest speakers, focusing on innovation, feasibility, and potential impact in the biotechnology sector."
    ],
    gallery: [
      "/Events/alphaforge/1.jpeg",
      "/Events/alphaforge/2.webp",
      "/Events/alphaforge/3.webp"
    ]
  },
  {
    id: "hack-a-pill",
    category: "Workshop",
    title: "Hack‑a‑Pill",
    poster: "/Events/hack-a-pill/1.jpeg",
    date: "February 4, 2025",
    location: "Yantra '24, Alpha Bio Cell",
    description: [
      "The session focused on the applications of Artificial Intelligence and Machine Learning in drug discovery led by Dr. Mukesh Doble from IIT Madras.",
      "Participants explored physicochemical foundations and engaged in practical model building with Weka, learning how to implement machine learning algorithms for pharmaceutical applications.",
      "The workshop concluded with real-time applications to predict pharmacokinetic properties from molecular structures, followed by networking and mentorship opportunities."
    ],
    gallery: [
      "/Events/hack-a-pill/1.jpeg",
      "/Events/hack-a-pill/2.webp",
      "/Events/hack-a-pill/3.webp"
    ]
  },
  {
    id: "drug-nova",
    category: "Hackathon",
    title: "Drug Nova",
    poster: "/Events/drug-nova/1.jpeg",
    date: "2025",
    location: "Alpha Bio Cell",
    description: [
      "Drug Nova was a two-day competitive event conducted during Gravitas ’25 that simulated the complete drug discovery and development pipeline. Teams worked collaboratively to identify a disease target, analyze protein structures, perform ligand screening, ADMET analysis, and molecular docking, and finally present a proposed drug candidate along with a development roadmap.",
      "The event brought together students passionate about computational pharmacology, culminating in high-impact presentations evaluated by expert judges."
    ],
    gallery: [
      "/Events/drug-nova/1.jpeg",
      "/Events/drug-nova/2.jpeg",
      "/Events/drug-nova/3.webp"
    ]
  },
  {
    id: "abcs-of-ml",
    category: "Workshop",
    title: "ABC's of ML",
    poster: "/Events/abcs-of-ml/1.jpeg",
    date: "2025",
    location: "Alpha Bio Cell",
    description: [
      "ABC’s of ML was a one-day intensive workshop conducted during Yantra’24, aimed at introducing participants to the fundamentals of Machine Learning and its applications. The session combined theoretical explanations with hands-on activities and mini-projects to demonstrate real-world use cases."
    ],
    gallery: [
      "/Events/abcs-of-ml/1.jpeg",
      "/Events/abcs-of-ml/2.jpeg"
    ]
  },
  {
    id: "bio-blunder",
    category: "Competition",
    title: "Bio Blunder",
    poster: "/Events/bio-blunder/1.jpeg",
    date: "2025",
    location: "Alpha Bio Cell",
    description: [
      "An engaging and humorous troubleshooting event where participants identified, diagnosed, and corrected biological and computational protocol flaws.",
      "Challenged critical thinking and experimental design under timed pressure, testing deep conceptual clarity.",
      "Fostered analytical troubleshooting and collaborative problem-solving across core biotech principles."
    ],
    gallery: [
      "/Events/bio-blunder/1.jpeg",
      "/Events/bio-blunder/2.webp",
      "/Events/bio-blunder/3.webp"
    ]
  },
  {
    id: "mind-in-molecules",
    category: "Ideathon",
    title: "Mind in Molecules",
    poster: "/Events/mind-in-molecules/1.jpeg",
    date: "2024 - 2025",
    location: "Alpha Bio Cell",
    description: [
      "Decoding Biology – Life Inside Out was a guest lecture organized by Alpha Bio Cell, focusing on the molecular foundations of human cognition, behavior, and consciousness.",
      "The session aimed to bridge biology with neuroscience and psychology through an integrated perspective. The lecture was delivered by Dr. E. Balamurugan, Professor of Psychopharmacology at Annamalai University.",
      "The session explored how biochemical processes, neurons, and signaling pathways influence thoughts, emotions, and decision-making, using examples from neurobiology and psychopharmacology."
    ],
    gallery: [
      "/Events/mind-in-molecules/1.jpeg",
      "/Events/mind-in-molecules/2.webp",
      "/Events/mind-in-molecules/3.webp"
    ]
  },
  {
    id: "posterize",
    category: "Exhibition",
    title: "Posterize",
    poster: "/Events/Posterize/1.jpeg",
    date: "2025",
    location: "Alpha Bio Cell",
    description: [
      "Posterize was an online poster presentation competition that encouraged participants to creatively summarize scientific research papers. The event aimed to enhance literature analysis skills and improve visual science communication."
    ],
    gallery: [
      "/Events/Posterize/1.jpeg",
      "/Events/Posterize/2.jpeg"
    ]
  },
  {
    id: "casa",
    category: "Interactive Session",
    title: "Casa",
    poster: "/Events/Casa/1.jpeg",
    date: "2025",
    location: "Alpha Bio Cell",
    description: [
      "This CASA event was organized by Alpha Bio Cell as an awareness-driven session focused on identifying the early signs of substance abuse and understanding when and how to seek help. The session emphasized prevention, mental well-being, and informed decision-making. Expert insights helped participants understand the impact of substance misuse and the importance of timely intervention and support systems."
    ],
    gallery: [
      "/Events/Casa/1.jpeg",
      "/Events/Casa/2.webp"
    ]
  }
];
