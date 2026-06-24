import Image from "next/image";
import { ArrowDown, FileText, Mail } from "lucide-react";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[1.4fr_1fr]">
        {/* Left: identity and value prop */}
        <div>
          <p className="spec-label">{site.role}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/90">
            {site.tagline}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            {site.heroSummary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View projects
              <ArrowDown size={15} />
            </a>
            {site.hasResume && (
              <a
                href={site.resume}
                download
                className="inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <FileText size={15} />
                Resume
              </a>
            )}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={15} />
              Contact
            </a>
          </div>

          {/* Spec stat line (typographic, no boxes) */}
          <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
            {site.heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="spec-label">{stat.label}</dt>
                <dd className="mt-1 text-sm font-medium leading-snug text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: headshot plus a hands-on engineering photo, stacked and flat */}
        <div className="order-first mx-auto flex w-56 flex-col gap-4 sm:w-64 md:order-last md:w-full md:max-w-xs">
          {/* Headshot, cropped object-top */}
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-line">
            {site.hasHeadshot ? (
              <Image
                src={site.headshot}
                alt={`${site.name}, mechanical engineering student`}
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover object-top"
              />
            ) : (
              <div className="blueprint flex h-full w-full items-center justify-center">
                <div className="absolute inset-3 border border-dashed border-line-strong/70" />
                <span className="relative z-10 font-mono text-5xl font-semibold text-line-strong">
                  {site.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
            )}
          </div>

          {/* Hands-on engineering photo: omitted until a real photo is available */}
          {site.hasActionPhoto && (
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-line">
              <Image
                src={site.actionPhoto}
                alt={site.actionPhotoAlt}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
