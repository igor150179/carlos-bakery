"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { GALLERY_ITEMS } from "@/data/custom-cakes";
import { cn } from "@/lib/utils";

import { Lightbox, type LightboxSlide } from "./Lightbox";

export function GallerySection() {
  const t = useTranslations("customCakes.gallery");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const slides: LightboxSlide[] = useMemo(
    () =>
      GALLERY_ITEMS.map((item) => ({
        id: item.id,
        image: item.image,
        alt: t(`${item.captionKey}.title`),
        caption: `${t(`${item.captionKey}.title`)} · ${t(`${item.captionKey}.occasion`)}`,
      })),
    [t],
  );

  return (
    <section
      id="galeria"
      className="scroll-mt-28 bg-cream-50 px-[var(--container-padding-x)] py-12 md:scroll-mt-32 md:py-16"
    >
      <div className="mx-auto max-w-[var(--max-content-width)]">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-espresso-900">
            {t("heading")}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
            {t("subhead")}
          </p>
        </FadeIn>

        <ul className="mt-8 grid auto-rows-[200px] grid-cols-12 gap-4 md:auto-rows-[240px]">
          {GALLERY_ITEMS.map((item, index) => (
            <li key={item.id} className={cn(item.gridClass)}>
              <FadeIn delay={index * 0.04} className="size-full">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(index)}
                  className={cn(
                    "group relative size-full overflow-hidden rounded-sm",
                    item.studioPresentation && "bg-cream-100",
                  )}
                  aria-label={t(`${item.captionKey}.title`)}
                >
                  <Image
                    src={item.image}
                    alt={t(`${item.captionKey}.title`)}
                    fill
                    className={cn(
                      "transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]",
                      item.studioPresentation
                        ? "object-contain p-3 md:p-5"
                        : "object-cover group-hover:scale-[1.03]",
                    )}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 transition-colors duration-500",
                      item.studioPresentation
                        ? "bg-gradient-to-t from-cream-200/40 via-transparent to-transparent group-hover:from-cream-300/50"
                        : "bg-espresso-900/0 group-hover:bg-espresso-900/25",
                    )}
                    aria-hidden
                  />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex size-12 items-center justify-center rounded-full bg-cream-50/90 text-espresso-900">
                      <Expand className="size-5" aria-hidden />
                    </span>
                  </span>
                </button>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>

      <Lightbox
        slides={slides}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
