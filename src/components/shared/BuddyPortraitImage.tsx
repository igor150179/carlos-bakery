import Image from "next/image";

import { BRAND_IMAGES } from "@/lib/brand-images";
import { cn } from "@/lib/utils";

type BuddyPortraitImageProps = {
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  variant?: "default" | "compact";
};

const VARIANT_CLASS = {
  default:
    "aspect-[3/4] min-h-[24rem] sm:min-h-[28rem] lg:min-h-[34rem]",
  compact:
    "aspect-[4/5] w-full max-w-[300px] min-h-0 sm:max-w-[340px] md:max-w-[360px]",
} as const;

export function BuddyPortraitImage({
  alt,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority,
  variant = "default",
}: BuddyPortraitImageProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-sm shadow-[0_24px_48px_-12px_rgba(44,24,16,0.18)]",
        VARIANT_CLASS[variant],
        className,
      )}
    >
      <Image
        src={BRAND_IMAGES.buddyPortrait}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        className="object-cover object-[center_15%]"
        sizes={sizes}
      />
    </div>
  );
}
