import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skills } from "@/content/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      kicker="Skills"
      title="Tools and capabilities"
      intro="Grouped by discipline, ordered from robotics and mechatronics outward."
    >
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <Reveal key={group.category}>
            <div>
              <h3 className="spec-label border-b border-line pb-2 text-foreground">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[15px] text-foreground/90"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1 w-1 shrink-0 bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
