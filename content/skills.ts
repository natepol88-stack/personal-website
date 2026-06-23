// Skills grouped by category, ordered robotics/mechatronics-first.
// Rendered as a clean scannable grid. No boxes.

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "CAD & Fabrication",
    items: [
      "Fusion 360",
      "Onshape",
      "Design for Manufacturability (DFM)",
      "3D printing (FDM)",
      "Carbon-fiber fabrication",
      "Precision machining (bending, tapping, countersinking, chamfering, angle grinding)",
    ],
  },
  {
    category: "Electronics & Robotics",
    items: [
      "Soldering (PCB, JST, actuators, power electronics)",
      "Power distribution (24V/48V bus bars, DC-DC converters, XT30 connectors)",
      "Circuit wiring",
      "Embedded component assembly",
      "Teleoperation systems",
      "Robot hardware integration",
      "Mechanical troubleshooting and diagnostic",
    ],
  },
  {
    category: "Technical & Analytical",
    items: [
      "Python",
      "MATLAB",
      "Excel",
      "Machine learning & regression modeling",
      "Experimental design & data analysis",
      "Statics",
      "Dynamics",
      "Thermodynamics",
      "Heat Transfer",
      "Calculus-based modeling & analysis",
    ],
  },
  {
    category: "AI & Emerging Tools",
    items: [
      "AI-assisted workflow design",
      "Agentic AI systems",
      "AI-assisted data analysis (Anthropic and Google certified)",
    ],
  },
];
