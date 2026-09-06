import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

/** Outer section wrapper: owns the vertical rhythm (120–200px) between sections. */
export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28 lg:py-40", className)}>
      <div className="container-content">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Consistent section heading: eyebrow label -> title -> supporting description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-caption font-medium uppercase tracking-[0.2em] text-accent-blue">
          {eyebrow}
        </p>
      )}
      <h2 className="text-section-title font-semibold text-balance">{title}</h2>
      {description && (
        <p className="mt-4 text-body text-text-secondary">{description}</p>
      )}
    </div>
  );
}
