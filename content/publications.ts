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
    title: "The Rise of Artificial Photosynthesis as a Resourceful Source of Alternative Energy",
    venue: "Koehler Instrument Company",
    status: "Published, Petrol-Online",
    year: "2026",
    href: "https://www.petro-online.com/article/analytical-instrumentation/11/koehler-instrument-company-inc/the-rise-of-artificial-photosynthesis-as-a-resourceful-source-of-alternative-energy/3788",
    pdf: "", // drop the final paper at /public/publications/ and reference it here
    poster: "/publications/artificial-photosynthesis-poster.pdf",
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
