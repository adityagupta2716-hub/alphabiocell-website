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
    poster: "/Events/plasmyth/1.webp",
    date: "July 31 – Aug 1, 2025",
    location: "VIT Vellore (SBST) in collaboration with iGEM VIT",
    description: [
      "A two-day ideathon that brought the spirit of iGEM into a fast-paced competition. Participants navigated brainstorming, troubleshooting, commercialization, and pitching rounds, testing scientific rigor, creativity, and entrepreneurship.",
      "Guest talk by Dr. Santhanam P highlighted marine bioprospecting and inspired beyond-traditional thinking. Teams worked on innovative solutions to real-world synthetic biology challenges.",
      "The event culminated in a series of pitches where teams presented their solutions to a panel of judges from academia and industry, showcasing the intersection of scientific innovation and entrepreneurial thinking."
    ],
    gallery: [
      "/Events/plasmyth/1.webp",
      "/Events/plasmyth/2.webp",
      "/Events/plasmyth/3.webp"
    ]
  },
  {
    id: "alphaforge",
    category: "Hackathon",
    title: "AlphaForge 2.0",
    poster: "/Events/alphaforge/1.webp",
    date: "March 25–27, 2025",
    location: "Alpha Bio Cell x IIC",
    description: [
      "A three-day innovation hackathon uniting aspiring bioengineers, entrepreneurs, and innovators. Teams tackled real-world problems and crafted creative solutions to pressing challenges in biotechnology.",
      "Participants received mentorship from industry experts and academic leaders, helping them refine their ideas and develop viable prototypes during intensive brainstorming and development sessions.",
      "The event concluded with teams pitching to industrial experts, with feedback from esteemed judges and guest speakers, focusing on innovation, feasibility, and potential impact in the biotechnology sector."
    ],
    gallery: [
      "/Events/alphaforge/1.webp",
      "/Events/alphaforge/2.webp",
      "/Events/alphaforge/3.webp"
    ]
  },
  {
    id: "hack-a-pill",
    category: "Workshop",
    title: "Hack‑a‑Pill",
    poster: "/Events/hack-a-pill/1.webp",
    date: "February 4, 2025",
    location: "Yantra '24, Alpha Bio Cell",
    description: [
      "An immersive workshop on AI/ML in drug discovery led by Dr. Mukesh Doble. The session began with an introduction to the fundamentals of drug discovery and the growing role of artificial intelligence in accelerating research.",
      "Participants explored physicochemical foundations and engaged in practical model building with Weka, learning how to implement machine learning algorithms for pharmaceutical applications.",
      "The workshop concluded with real-time applications to predict pharmacokinetic properties from molecular structures, followed by networking and mentorship opportunities with professionals in the field."
    ],
    gallery: [
      "/Events/hack-a-pill/1.webp",
      "/Events/hack-a-pill/2.webp",
      "/Events/hack-a-pill/3.webp"
    ]
  },
  {
    id: "project2039",
    category: "Hackathon",
    title: "Project 2039",
    poster: "/Events/project2039/1.webp",
    date: "—",
    location: "Alpha Bio Cell",
    description: [
      "A premium two-day immersive hackathon exploring what the world will need in 2039. The event kicked off with teams identifying future challenges and opportunities in biotechnology, healthcare, and environmental sustainability.",
      "Day one featured poster presentations where teams showcased their vision for addressing future challenges, followed by fiery courtroom-style debates defending their approaches and methodologies.",
      "The hackathon culminated in final pitches to an expert panel, with projects judged on feasibility, scalability, and real-world relevance, emphasizing solutions that could bridge current technologies with future needs."
    ],
    gallery: [
      "/Events/project2039/1.webp",
      "/Events/project2039/2.webp",
      "/Events/project2039/3.webp"
    ]
  },
  {
    id: "debduel",
    category: "Debate",
    title: "DebDuel",
    poster: "/Events/debduel/1.webp",
    date: "November 13, 2024",
    location: "Alpha Bio Cell",
    description: [
      "A rapid-fire debate on pressing biotech issues—from genetic engineering ethics to conservation. The event began with an introduction to key ethical dilemmas in modern biotechnology and their implications for society.",
      "Participants were assigned on-the-spot topics and positions, requiring them to quickly develop and articulate arguments on complex issues such as CRISPR ethics, biopiracy, and the balance between innovation and regulation.",
      "The debates fostered critical thinking, ethical reasoning, and an appreciation of diverse perspectives, with judges evaluating participants on the strength of their arguments, rebuttals, and ability to consider multiple viewpoints."
    ],
    gallery: [
      "/Events/debduel/1.webp",
      "/Events/debduel/2.webp",
      "/Events/debduel/3.webp"
    ]
  },
  {
    id: "proteoprediction",
    category: "Workshop",
    title: "Proteoprediction",
    poster: "/Events/proteoprediction/1.webp",
    date: "November 8, 2024",
    location: "Alpha Bio Cell",
    description: [
      "An immersive workshop bridging traditional biology with modern computation. Led by Dr. Hussain Bhukya from IISER Tirupati, the session began with an overview of protein structure and function analysis.",
      "Participants learned practical skills in NCBI sequence analysis, exploring databases and tools for protein structure prediction, functional annotation, and evolutionary analysis.",
      "The workshop concluded with an introduction to machine learning applications in proteomics, demonstrating how computational approaches are revolutionizing our understanding of protein function and enabling new discoveries in biotechnology."
    ],
    gallery: [
      "/Events/proteoprediction/1.webp",
      "/Events/proteoprediction/2.webp",
      "/Events/proteoprediction/3.webp"
    ]
  }
];
