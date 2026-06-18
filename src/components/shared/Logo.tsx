import Image from "next/image";

import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/images/brand/logo-transparent.png";

/** Aspect ratio of the official lockup (1024×577) */
const LOGO_ASPECT = 1024 / 577;

export interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  href?: "/";
}

const sizeHeights = {
  sm: 48,
  md: 56,
  lg: 100,
} as const;

export function Logo({
  variant = "dark",
  size = "md",
  showTagline = false,
  href = "/",
}: LogoProps) {
  const height = showTagline ? sizeHeights.lg : sizeHeights[size];
  const width = Math.round(height * LOGO_ASPECT);

  return (
    <Link
      href={href}
      aria-label="Carlo's Bakery — Home"
      className="inline-block shrink-0 transition-opacity duration-300 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-carlo-gold"
    >
      <Image
        src={LOGO_SRC}
        alt="Carlo's Bakery"
        width={width}
        height={height}
        priority={size === "sm"}
        className={cn(
          "block object-contain object-left",
          variant === "light" && "brightness-0 invert",
        )}
        style={{ width, height }}
      />
    </Link>
  );
}
