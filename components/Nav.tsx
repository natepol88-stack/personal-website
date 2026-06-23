"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/site";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Initials for the brand mark.
  const initials = site.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-foreground"
          aria-label="Back to top"
        >
          <span className="text-accent">{initials}</span>
          <span className="text-muted"> / {site.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === s.id
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}
          <span className="mx-1 h-5 w-px bg-line" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted hover:text-foreground"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-background md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1 px-5 py-3 sm:px-8">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-2 text-sm ${
                  active === s.id ? "text-accent" : "text-muted"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
