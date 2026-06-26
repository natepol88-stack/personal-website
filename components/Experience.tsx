import Image from "next/image";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { experience } from "@/content/experience";

export function Experience() {
  return (
    <Section id="experience" kicker="Experience" title="Where I have worked">
      <ol className="max-w-3xl border-t border-line">
        {experience.map((job) => (
          <Reveal as="li" key={`${job.company}-${job.title}`}>
            <div className="grid gap-2 border-b border-line py-7 sm:grid-cols-[180px_1fr] sm:gap-8">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                  {job.end ? `${job.start} to ${job.end}` : job.start}
                </p>
                <p className="mt-1 text-sm text-muted">{job.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {job.title}
                </h3>
                <p className="flex items-center gap-2 text-[15px] text-accent">
                  {job.logo && (
                    <Image
                      src={job.logo}
                      alt=""
                      width={26}
                      height={26}
                      className="rounded-sm object-cover"
                    />
                  )}
                  {job.company}
                </p>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[15px] leading-relaxed text-foreground/90"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1 w-1 shrink-0 bg-accent"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
