// Central site configuration. Edit this to change identity, hero, and contact links.
// NOTE: keep all copy free of em dashes (site-wide style rule).

export const site = {
  name: "Nate Polishook",
  // Robotics/mechatronics-first positioning, broadening to top tech.
  role: "Mechanical Engineering Student",
  tagline: "Robotics and mechatronics engineer with broad mechanical‑engineering range.",
  heroSummary:
    "I design, build, and test physical hardware, from CAD and mechanism design to fabrication and embedded control. I focus on robotics and mechatronics while staying fluent across the full mechanical-engineering toolkit.",
  // Hero stat line blocks (rendered as a typographic spec row, no boxes).
  heroStats: [
    { label: "School", value: "Rutgers University School of Engineering" },
    { label: "Degree", value: "Mechanical Engineering B.S." },
    { label: "Class", value: "2029" },
  ],
  location: "New Jersey, USA",
  // Drop a real headshot at public/headshot.jpg and set hasHeadshot to true.
  headshot: "/headshot.jpg",
  hasHeadshot: true,
  // Second hero photo: hands-on engineering (soldering, machining, etc.).
  // Drop the file at public/action.jpg and set hasActionPhoto to true.
  actionPhoto: "/action.jpg",
  actionPhotoAlt: "Nate doing hands-on engineering work, soldering and building robot hardware",
  hasActionPhoto: false,
  // Drop a real resume at public/resume/nate-polishook-resume.pdf and flip hasResume to true.
  resume: "/resume/nate-polishook-resume.pdf",
  hasResume: true,
  contact: {
    email: "natepolishook@gmail.com",
    linkedin: "https://www.linkedin.com/in/nate-polishook",
    // Fill these in when available.
    github: "",
  },
} as const;

export const about = {
  paragraphs: [
    "I design and build real, working hardware, then I figure out how to make it better, faster, smarter. Drones and 3D printing hooked me as a kid, and that itch to optimize never went away. Now I'm a Mechanical Engineering student at Rutgers, working as a Robot Wrangler at Kovari Industries, a robotics startup building hospitality robots. I build out robot hardware end to end, soldering control boards, wiring power distribution across 24V and 48V bus bars, and fabricating parts with laser cutters and 3D printers, and I run teleoperation sessions to generate training data that feeds directly into the robots' learning pipeline. I'm also a Research Intern at Koehler Instrument Company, researching AI-driven combustion optimization for alternative fuels.",
    "I integrate AI into my projects and workflows, not because it's trendy, but because I want to operate at the highest level possible as an engineer. Same mindset drove a wastewater ML project, where I owned the experimental design end to end.",
    "I don't believe in doing things the slow way if a faster, smarter way exists. I'm always looking for the next hard problem to build my way through.",
  ],
} as const;
