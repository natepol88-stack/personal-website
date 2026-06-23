import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlueprintImage } from "./BlueprintImage";
import type { Project } from "@/content/projects";

export function ProjectCard({
  project,
  variant = "featured",
}: {
  project: Project;
  variant?: "featured" | "compact";
}) {
  const featured = variant === "featured";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative flex overflow-hidden border border-line bg-background transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_30px_-12px_color-mix(in_srgb,var(--accent)_35%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        featured
          ? "flex-col md:grid md:grid-cols-[1.15fr_1fr]"
          : "h-full flex-col"
      }`}
    >
      <BlueprintImage
        src={project.images[0]}
        alt={project.title}
        label={project.title}
        className={
          featured
            ? "aspect-[16/10] w-full border-b border-line md:aspect-auto md:min-h-[22rem] md:border-b-0 md:border-r"
            : "aspect-[16/10] w-full border-b border-line"
        }
      />

      <div className={`flex flex-1 flex-col ${featured ? "p-6 sm:p-8" : "p-5"}`}>
        <div className="flex items-center gap-2">
          {project.status === "in-progress" && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              In progress
            </span>
          )}
          {/* Year as a small accent tab */}
          <span className="inline-block border-l-2 border-accent pl-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            {project.year}
          </span>
        </div>

        <h3
          className={`mt-3 font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent ${
            featured ? "text-2xl sm:text-3xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`mt-2 flex-1 leading-relaxed text-muted ${
            featured ? "text-[15px]" : "text-sm"
          }`}
        >
          {project.oneLiner}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors group-hover:text-accent">
          View project
          <ArrowUpRight
            size={featured ? 18 : 15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
