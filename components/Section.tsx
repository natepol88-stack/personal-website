import { Reveal } from "./Reveal";

// Standard anchored section shell with a monospace "spec label" kicker and title.
export function Section({
  id,
  kicker,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-24 ${className}`}
    >
      <Reveal>
        <div className="mb-10 border-b border-line pb-5">
          <span className="spec-label">{kicker}</span>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
          {intro && (
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
              {intro}
            </p>
          )}
        </div>
      </Reveal>
      {children}
    </section>
  );
}
