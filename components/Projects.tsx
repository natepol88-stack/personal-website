import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projectsSorted } from "@/content/projects";

export function Projects() {
  // First two (by order) lead as large featured cards; the rest sit in a compact grid.
  const featured = projectsSorted.slice(0, 2);
  const rest = projectsSorted.slice(2);

  return (
    <Section id="projects" kicker="Projects" title="Selected work">
      <div className="flex flex-col gap-6">
        {featured.map((project) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} variant="featured" />
          </Reveal>
        ))}
      </div>

      {rest.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} variant="compact" />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
