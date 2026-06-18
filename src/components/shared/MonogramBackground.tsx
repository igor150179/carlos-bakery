import { cn } from "@/lib/utils";

/** Intrinsic dimensions of /images/brand/c-monogram.png */
const MONOGRAM_ASPECT = 265 / 412;

const SIZE_CLASSES = {
  sm: "max-h-[min(60%,12rem)] max-w-[min(70%,9rem)]",
  md: "max-h-[min(75%,18rem)] max-w-[min(80%,14rem)]",
  lg: "max-h-[min(85%,22rem)] max-w-[min(90%,17rem)]",
} as const;

type MonogramBackgroundProps = {
  variant?: "dark" | "light";
  /** Max bounds — image always scales down to fit entirely inside the section */
  size?: keyof typeof SIZE_CLASSES;
  /** Vertical alignment within the parent (parent must be `position: relative`) */
  position?: "center" | "bottom";
  className?: string;
};

export function MonogramBackground({
  variant = "dark",
  size = "md",
  position = "center",
  className,
}: MonogramBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-0 flex justify-center",
        position === "center" ? "items-center" : "items-end pb-6 md:pb-8",
        className,
      )}
    >
      <img
        src="/images/brand/c-monogram.png"
        alt=""
        width={265}
        height={412}
        style={{ aspectRatio: MONOGRAM_ASPECT }}
        className={cn(
          "h-auto w-auto shrink-0 object-contain object-center",
          SIZE_CLASSES[size],
          variant === "light" ? "opacity-[0.075]" : "opacity-[0.06]",
        )}
      />
    </div>
  );
}
