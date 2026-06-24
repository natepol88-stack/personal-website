import Image from "next/image";

// Renders a real photo when one exists, otherwise a CAD-style blueprint placeholder
// labeled with the project name so empty slots still read as intentional.
export function BlueprintImage({
  src,
  alt,
  label,
  className = "",
  priority = false,
}: {
  src?: string;
  alt: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-surface ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div
      className={`blueprint relative flex items-center justify-center overflow-hidden ${className}`}
      role="img"
      aria-label={`${alt} (image coming soon)`}
    >
      <div className="absolute inset-3 border border-dashed border-line-strong/70" />
      <div className="relative z-10 px-4 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          {label}
        </p>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted/70">
          image pending
        </p>
      </div>
    </div>
  );
}
