import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: `mailto:${site.contact.email}`, icon: Mail, label: "Email", show: true },
    {
      href: site.contact.linkedin,
      icon: LinkedinIcon,
      label: "LinkedIn",
      show: Boolean(site.contact.linkedin),
    },
    {
      href: site.contact.github,
      icon: GithubIcon,
      label: "GitHub",
      show: Boolean(site.contact.github),
    },
  ].filter((s) => s.show);

  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-muted">
          &copy; {year} {site.name}.
        </p>
        <div className="flex items-center gap-2">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                {...(s.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
