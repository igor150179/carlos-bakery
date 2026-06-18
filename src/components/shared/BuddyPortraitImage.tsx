import Image from "next/image";

import { BRAND_IMAGES } from "@/lib/brand-images";
import { cn } from "@/lib/utils";

type BuddyPortraitImageProps = {
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function BuddyPortraitImage({
  alt,
  className,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority,
}: BuddyPortraitImageProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-sm",
        "aspect-[3/4] min-h-[24rem] sm:min-h-[28rem] lg:min-h-[34rem]",
        className,
      )}
    >
      <Image
        src={BRAND_IMAGES.buddyPortrait}
        alt={alt}
        fill
        priority={priority}
        className="object-contain object-bottom"
        sizes={sizes}
      />
    </div>
  );
}
