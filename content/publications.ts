// Research publications. Rendered as a clean citation-style list (no boxes).
// Add real titles, years, links, and PDFs as they become available.
// NOTE: no em dashes anywhere.

export type Publication = {
  title: string;
  venue: string;
  status: string; // e.g. "Published, Petrol-Online" or "Forthcoming"
  year: string;
  // External link (article page / DOI). Empty if not yet available.
  href: string;
  // PDF under /public (e.g. "/publications/artificial-photosynthesis.pdf"). Empty if none.
  pdf: string;
  // Final poster PDF under /public (e.g. "/publications/artificial-photosynthesis-poster.pdf"). Empty if none.
  poster?: string;
};

export const publications: Publication[] = [
  {
    // Placeholder title until Nate provides the exact published title.
    title: "Artificial Photosynthesis for Sustainable Fuel Generation",
    venue: "Koehler Instrument Company",
    status: "Published, Petrol-Online",
    year: "2026",
    href: "", // add the published-article link when available
    pdf: "", // drop the final paper at /public/publications/ and reference it here
    poster: "", // drop the final poster PDF at /public/publications/ and reference it here
  },
  {
    // Placeholder title until Nate provides the exact title.
    title: "AI Optimization of Combustion Using Alternative Fuels",
    venue: "Koehler Instrument Company",
    status: "Forthcoming",
    year: "2026",
    href: "",
    pdf: "",
  },
];
