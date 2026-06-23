// Projects portfolio. Ordered by the `order` field (lower = earlier).
// Lead with finished hardware/CAD work; SO-101 is in-progress and sits lower.
// All copy here is placeholder draft until real notes/photos arrive via the dropbox.
// `draft: true` marks entries whose writeup still needs Nate's real details.
// NOTE: no em dashes anywhere.

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  role: string;
  year: string;
  tools: string[];
  tags: string[];
  status: "complete" | "in-progress";
  // Detail-page writeup, in the goal / challenge / solution / results format.
  goal: string;
  challenge: string;
  solution: string;
  results: string[];
  // Relative paths under /public/images/projects/<slug>/. Empty -> blueprint placeholder.
  images: string[];
  // External links (repo, demo, video) and PDFs under /public.
  links: ProjectLink[];
  // Optional PDF slide deck under /public, embedded on the detail page below the writeup.
  deck?: string;
  order: number;
  draft?: boolean;
};

export const projects: Project[] = [
  {
    slug: "helical-gear-assembly",
    title: "Helical Gear Assembly",
    oneLiner:
      "A 3D printed helical ring-and-pinion assembly designed and iterated for smooth, binding-free power transmission.",
    role: "CAD design, fabrication, and tolerancing",
    year: "2024",
    tools: ["Onshape", "FDM 3D printing", "Mechanism design"],
    tags: ["CAD", "Mechanism", "Power transmission"],
    status: "complete",
    goal: "Design and 3D print a functional helical gear assembly to demonstrate gear meshing, torque transmission, and rotational motion through a ring-and-pinion configuration.",
    challenge:
      "Achieving proper meshing between the helical ring gear and pinion was the hardest part. The tooth profile geometry and inter-part clearances needed repeated adjustment across five design iterations to eliminate binding and allow smooth, consistent rotation.",
    solution:
      "I modeled the assembly in Onshape with the ring gear, pinion, and support frame each designed as separate components so they could iterate independently. I chose helical tooth geometry over straight teeth to improve the contact ratio and produce smoother, quieter meshing, then refined tooth clearances across five printed prototypes, converging on roughly 0.3 mm of radial clearance to account for FDM print expansion while keeping engagement tight enough for clean power transfer.",
    results: [
      "Final assembly rotates smoothly with no binding or slop, demonstrating helical gear kinematics in a physical model.",
      "Five print iterations converged on about 0.3 mm radial clearance, the sweet spot between free rotation and clean engagement.",
      "Unexpectedly doubled as a satisfying fidget toy, a reminder that good mechanical tolerancing directly shapes the user experience.",
    ],
    images: [],
    links: [],
    order: 1,
  },
  {
    slug: "tactile-fidget-board",
    title: "Tactile Fidget Board",
    oneLiner:
      "A classroom fidget toy for kids ages 3 to 9, combining a rolling-ball track, sliding spinners, and an LED button into one desk-friendly board.",
    role: "Four-person team project; design, fabrication, and assembly",
    year: "2025",
    tools: ["Onshape", "FDM 3D printing", "Electronics", "Hand tools"],
    tags: ["Mechatronics", "CAD", "Fabrication"],
    status: "complete",
    goal: "Design a toy for children ages 3 to 9 to help relieve anxiety and improve focus in a classroom setting.",
    challenge:
      "The biggest challenge was testing the rolling-ball feature and adjusting the tolerance so the ball would roll smoothly along its track without ever falling out of the channel.",
    solution:
      "As one of four team members, I modeled the board in Onshape with a focus on ergonomics, safety, and manufacturability for a classroom context. The rolling-ball track took the most iteration, with tolerances adjusted across multiple design cycles to achieve a smooth, satisfying movement and no risk of the ball escaping. A 0.467 inch diameter ball seat was validated against the track geometry to confirm proper clearance. I integrated a sliding bar with spinners as a second mode of tactile engagement, plus a recessed button wired to an LED for interactive visual feedback.",
    results: [
      "Final design balances engaging interactivity with a low-profile, desk-friendly footprint appropriate for children ages 3 to 9.",
      "Rolling-ball track delivers smooth, satisfying motion with zero ball escapes after tolerance tuning.",
      "Strengthened my experience with tolerance analysis, user-centered design, and iterative CAD refinement in Onshape.",
    ],
    images: [],
    links: [],
    order: 2,
  },
  {
    slug: "wastewater-treatment-ml-model",
    title: "Wastewater Treatment ML Model",
    oneLiner:
      "A MATLAB study comparing five regression algorithms to predict water quality outputs from real wastewater treatment plant data.",
    role: "Team lead, data modeling and analysis (five-person team)",
    year: "2026",
    tools: ["MATLAB", "Machine learning", "Data analysis"],
    tags: ["Software", "Data", "Modeling"],
    status: "complete",
    goal: "Apply and compare multiple machine-learning regression algorithms in MATLAB to predict key water quality outputs, including dissolved oxygen, nitrate, and ammonium concentrations, from real wastewater treatment plant operating data.",
    challenge:
      "Determining which model best fit the data across all output variables was the hardest part, since no single algorithm performed consistently well on every parameter. Dissolved oxygen in tank 1 proved especially difficult, with models that predicted it well consistently underperforming on all other outputs.",
    solution:
      "Leading a five-person team, I trained and evaluated five regression models in MATLAB using an 80/20 train-test split with RMSE as the primary performance metric. Support vector machine regression was eliminated early due to significantly higher error and training time relative to the other models. Linear regression emerged as the top performer in both accuracy and efficiency, with decision tree regression a strong alternative where speed was prioritized.",
    results: [
      "Showed that optimal modeling in complex environmental systems means selecting different algorithms for different output variables rather than one universal approach.",
      "Linear regression won on accuracy and efficiency; decision tree regression was the fastest viable alternative.",
      "Strengthened the team's experience with supervised machine learning, data preprocessing, and quantitative model evaluation.",
    ],
    images: [],
    links: [],
    // Drop the slide deck at the path below and it will embed on this page.
    deck: "", // e.g. "/projects/wastewater-treatment-ml-model/deck.pdf"
    order: 3,
  },
  {
    slug: "so-101-bimanual-robot-arm",
    title: "SO-101 Bimanual Robot Arm",
    oneLiner:
      "A leader-follower bimanual arm built for teleoperation and imitation-learning experiments with Hugging Face LeRobot.",
    role: "Build, wiring, calibration, and training",
    year: "2026",
    tools: ["LeRobot", "Feetech servos", "Python", "Soldering"],
    tags: ["Robotics", "Mechatronics", "Controls"],
    status: "in-progress",
    goal: "Build a working leader-follower robot arm and train it to perform manipulation tasks through teleoperation and imitation learning.",
    challenge:
      "A bimanual teleoperation system means accurate servo calibration, reliable wiring, and a clean data pipeline before any policy can be trained.",
    solution:
      "I am assembling the leader and follower arms, calibrating the servos, and setting up the LeRobot teleoperation and data-collection workflow as the foundation for policy training.",
    results: [
      "Build in progress. This page will be updated with calibration, teleoperation, and training results as the project advances.",
    ],
    images: [],
    links: [],
    order: 4,
    draft: true,
  },
];

export const projectsSorted = [...projects].sort((a, b) => a.order - b.order);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
