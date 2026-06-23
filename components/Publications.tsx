import { ExternalLink, FileText } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { publications } from "@/content/publications";

export function Publications() {
  return (
    <Section
      id="publications"
      kicker="Publications"
      title="Research"
      intro="Peer-reviewed and forthcoming research work."
    >
      <ol className="max-w-3xl divide-y divide-line border-t border-line">
        {publications.map((pub) => (
          <Reveal as="li" key={pub.title}>
            <div className="py-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {pub.status}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {pub.year}
                </span>
              </div>
              <h3 className="mt-1.5 text-lg font-medium leading-snug text-foreground">
                {pub.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{pub.venue}</p>

              {(pub.href || pub.pdf || pub.poster) && (
                <div className="mt-3 flex flex-wrap gap-4">
                  {pub.href && (
                    <a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                    >
                      View publication
                      <ExternalLink size={14} />
                    </a>
                  )}
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                    >
                      PDF
                      <FileText size={14} />
                    </a>
                  )}
                  {pub.poster && (
                    <a
                      href={pub.poster}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                    >
                      Poster (PDF)
                      <FileText size={14} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
