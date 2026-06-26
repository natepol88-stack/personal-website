// Work experience. Title, company, dates, and 2 to 3 impact-focused bullets.
// NOTE: no em dashes anywhere.

export type Experience = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
  // Small inline company/institution mark under public/logos. Optional.
  logo?: string;
};

export const experience: Experience[] = [
  {
    title: "Robot Wrangler, Data & Manufacturing Operations Intern",
    company: "Kovari Industries",
    location: "San Francisco, CA",
    start: "June 2026",
    end: "Present",
    logo: "/logos/kovari-industries.jpg",
    bullets: [
      "Operated robots via teleoperation to generate labeled demonstration data for the imitation-learning pipeline behind autonomous garment folding, reaching 90% task accuracy on towel and t-shirt folding",
      "Assembled custom robotic hands from 15+ 3D-printed components, soldering connectors and control boards while tuning gear tolerances for smooth articulation",
      "Wired full robot power distribution from on/off switch through dual bus bars (24V/48V) to 720W DC-DC converter, soldering XT30 junctions and daisy-chaining the circuit",
      "Fabricated precision robot parts through shop machining (bending, tapping, countersinking, chamfering) using SolidWorks, set up a Tormach 1100 CNC mill and began developing CAM programs to accelerate iteration cycles",
    ],
  },
  {
    title: "Petroleum Research Intern",
    company: "Koehler Instrument Company",
    location: "Remote",
    start: "February 2026",
    end: "Present",
    logo: "/logos/koehler-instrument-company.jpg",
    bullets: [
      "Authored 2 technical research papers on petroleum-testing and instrumentation topics, synthesizing literature and experimental data into publication-ready documents",
      "Developed and curated 18 figures and comparative performance tables, including 9 original visualizations and 9 sourced from technical literature, analyzing catalyst efficiency, energy conversion rates, and scalability",
      "Researched 5 neural network architectures and advanced AI optimization techniques to model combustion performance of alternative fuels, producing original custom figures to visualize and communicate key findings",
      "Coordinated with 2 PhD-level staff across 3 rounds of revisions, incorporating technical feedback on figure design and content accuracy to sharpen clarity for publication",
    ],
  },
  {
    title: "Project Lead",
    company: "Wastewater Treatment ML Model, Rutgers School of Engineering",
    location: "New Brunswick, NJ",
    start: "January 2026",
    end: "April 2026",
    logo: "/logos/rutgers-engineering.jpg",
    bullets: [
      "Owned parameter selection and experimental design within a 5-member team, coordinating meeting schedules and rehearsal sessions to prepare the team's final presentation",
      "Led the team in developing and benchmarking machine learning regression models to predict water quality outputs across a multi-stage wastewater treatment system (full methodology and results on the project page)",
    ],
  },
];
