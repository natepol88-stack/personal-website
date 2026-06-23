import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { about } from "@/content/site";

export function About() {
  return (
    <Section id="about" kicker="About" title="Who I am">
      <Reveal>
        <div className="max-w-3xl space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-foreground/90">
              {p}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
