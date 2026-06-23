import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { education } from "@/content/education";

export function Education() {
  return (
    <Section id="education" kicker="Education" title="Academics">
      <Reveal>
        <div className="max-w-3xl">
          <div className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {education.graduation}
            </p>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {education.school}
              </h3>
              <p className="text-[15px] text-accent">{education.degree}</p>
              <p className="mt-1 text-sm text-muted">{education.location}</p>
              {education.gpa && (
                <p className="mt-2 text-[15px] text-foreground/90">
                  GPA: {education.gpa}
                </p>
              )}
              {education.activities.length > 0 && (
                <p className="mt-2 text-[15px] text-foreground/90">
                  Activities and societies: {education.activities.join(", ")}
                </p>
              )}
              {education.coursework.length > 0 && (
                <div className="mt-4">
                  <p className="spec-label">Relevant coursework</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-foreground/90">
                    {education.coursework.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
