import { FileText, Mail } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "@/content/site";

export function Contact() {
  const links = [
    {
      label: "Email",
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
      icon: Mail,
      show: true,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nate-polishook",
      href: site.contact.linkedin,
      icon: LinkedinIcon,
      show: Boolean(site.contact.linkedin),
    },
    {
      label: "GitHub",
      value: "github.com/natepolishook",
      href: site.contact.github,
      icon: GithubIcon,
      show: Boolean(site.contact.github),
    },
  ].filter((l) => l.show);

  return (
    <Section
      id="contact"
      kicker="Contact"
      title="Get in touch"
      intro="Open to robotics, mechatronics, and mechanical-engineering internships, or if you just want to talk engineering. The fastest way to reach me is email."
    >
      <Reveal>
        <div className="max-w-2xl">
          {/* Resume download. Wired to the real PDF when present; placeholder until then. */}
          {site.hasResume ? (
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <FileText size={15} />
              Download Resume
            </a>
          ) : (
            <span
              role="button"
              aria-disabled="true"
              title="Resume coming soon"
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-dashed border-line-strong px-4 py-2.5 text-sm font-medium text-muted"
            >
              <FileText size={15} />
              Download Resume
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted/70">
                PDF coming soon
              </span>
            </span>
          )}

          <ul className="mt-8 divide-y divide-line border-t border-line">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 py-5"
                  >
                    <Icon
                      size={18}
                      className="text-muted transition-colors group-hover:text-accent"
                    />
                    <span className="spec-label w-24 shrink-0">{link.label}</span>
                    <span className="text-[15px] text-foreground transition-colors group-hover:text-accent">
                      {link.value}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
