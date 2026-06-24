import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/content/projects";
import { BlueprintImage } from "@/components/BlueprintImage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: { title: project.title, description: project.oneLiner },
  };
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2 border-t border-line py-7 sm:grid-cols-[160px_1fr] sm:gap-8">
      <p className="spec-label pt-1">{label}</p>
      <div className="text-[15px] leading-relaxed text-foreground/90">
        {children}
      </div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={15} />
        All projects
      </Link>

      <header className="mt-8 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-3">
          {project.status === "in-progress" && (
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
              In progress
            </span>
          )}
          <span className="spec-label">{project.year}</span>
          {project.tags.map((tag) => (
            <span key={tag} className="spec-label">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
          {project.oneLiner}
        </p>

        <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1.5">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted"
            >
              {tool}
            </span>
          ))}
        </div>
      </header>

      {/* Lead image */}
      <BlueprintImage
        src={project.images[0]}
        alt={project.title}
        label={project.title}
        priority
        className="mt-8 aspect-[16/9] w-full border border-line"
      />

      {/* Writeup */}
      <div className="mt-10">
        <Block label="Role">{project.role}</Block>
        <Block label="Goal">{project.goal}</Block>
        <Block label="Challenge">{project.challenge}</Block>
        <Block label="Solution">{project.solution}</Block>
        <Block label="Results">
          <ul className="space-y-2">
            {project.results.map((r, i) => (
              <li key={i} className="flex items-start gap-2">
                <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                {r}
              </li>
            ))}
          </ul>
        </Block>
      </div>

      {/* Slide deck: embedded only, not offered as a download */}
      {project.deck && (
        <section className="mt-12 border-t border-line pt-8">
          <p className="spec-label">Slide deck</p>
          <object
            data={`${project.deck}#toolbar=0&navpanes=0`}
            type="application/pdf"
            className="mt-4 aspect-[4/3] w-full border border-line"
            aria-label={`${project.title} slide deck`}
          >
            <p className="p-6 text-[15px] text-muted">
              Your browser cannot display the embedded deck.
            </p>
          </object>
        </section>
      )}

      {/* Additional images */}
      {project.images.length > 1 && (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {project.images.slice(1).map((img, i) => (
            <BlueprintImage
              key={i}
              src={img}
              alt={`${project.title} detail ${i + 2}`}
              label={project.title}
              className="aspect-[4/3] w-full border border-line"
            />
          ))}
        </div>
      )}

      {/* Links */}
      {project.links.length > 0 && (
        <div className="mt-10 border-t border-line pt-6">
          <p className="spec-label">Links</p>
          <div className="mt-3 flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
