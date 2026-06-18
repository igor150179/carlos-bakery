import { cn } from "@/lib/utils";

type ChapterHeaderProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  subhead?: string;
  align?: "left" | "center";
  variant?: "light" | "dark";
  headingClassName?: string;
  className?: string;
};

export function ChapterHeader({
  id,
  eyebrow,
  heading,
  subhead,
  align = "left",
  variant = "light",
  headingClassName,
  className,
}: ChapterHeaderProps) {
  const centered = align === "center";
  const isDark = variant === "dark";

  return (
    <header
      className={cn(centered && "mx-auto max-w-2xl text-center", className)}
    >
      {eyebrow ? (
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display italic leading-tight",
          isDark ? "text-cream-50" : "text-espresso-900",
          headingClassName,
        )}
      >
        {heading}
      </h2>
      {subhead ? (
        <p
          className={cn(
            "mt-4 font-italic text-xl leading-relaxed",
            isDark ? "text-cream-50/70" : "text-espresso-700",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {subhead}
        </p>
      ) : null}
    </header>
  );
}
