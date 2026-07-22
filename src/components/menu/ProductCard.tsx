"use client";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import type { MenuBadge } from "@/data/menu";
import { formatMenuPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";

export type ProductCardProps = {
  id: string;
  price: number;
  priceFrom?: boolean;
  image: string;
  images?: string[];
  badge?: MenuBadge;
  category: string;
};

function isStudioPhoto(src: string) {
  return (
    src.includes("/cannoli-") ||
    src.includes("/especial-") ||
    src.includes("/donut-") ||
    src.includes("/folhado-") ||
    src.includes("/lobster-tail-") ||
    src.includes("/bolo-") ||
    src.includes("/mini-bolo-") ||
    src.includes("/especial-mini-bolo-") ||
    src.includes("entremet") ||
    src.includes("/cookie-") ||
    src.includes("/croissant-") ||
    src.includes("/salgado-") ||
    src.includes("/fatia-bolo-") ||
    src.includes("/souvenir-") ||
    src.includes("/bebida-")
  );
}

export function ProductCard({
  id,
  price,
  priceFrom,
  image,
  images,
  badge,
}: ProductCardProps) {
  const t = useTranslations("menu");
  const locale = useLocale();
  const name = t(`items.${id}.name`);
  const description = t(`items.${id}.description`);
  const gallery = images && images.length > 1 ? images : [image];
  const [activeIndex, setActiveIndex] = useState(0);
  const hasCarousel = gallery.length > 1;
  const activeImage = gallery[activeIndex] ?? image;
  const studioPhoto = isStudioPhoto(activeImage);

  const goTo = (index: number) => {
    setActiveIndex((index + gallery.length) % gallery.length);
  };

  return (
    <article className="group flex flex-col">
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-sm ring-0",
          "transition-[box-shadow,ring-width,ring-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:ring-1 group-hover:ring-champagne-400/40 group-hover:shadow-[0_20px_44px_-24px_rgba(44,24,16,0.14)]",
          studioPhoto ? "bg-cream-50" : "bg-espresso-100",
        )}
      >
        <Image
          key={activeImage}
          src={activeImage}
          alt={hasCarousel ? `${name} — foto ${activeIndex + 1}` : name}
          fill
          className={cn(
            "transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]",
            studioPhoto ? "object-contain p-3" : "object-cover",
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 28%, transparent 72%, rgba(212,168,87,0.06) 100%)",
          }}
          aria-hidden
        />
        {hasCarousel ? (
          <>
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Foto anterior"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cream-50/90 p-1.5 text-espresso-900 shadow-sm transition-colors hover:bg-cream-50"
            >
              <ChevronLeft className="size-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Próxima foto"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-cream-50/90 p-1.5 text-espresso-900 shadow-sm transition-colors hover:bg-cream-50"
            >
              <ChevronRight className="size-4" strokeWidth={2} />
            </button>
            <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
              {gallery.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  aria-label={`Ver foto ${index + 1}`}
                  aria-current={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    index === activeIndex
                      ? "bg-carlo-red"
                      : "bg-espresso-900/25 hover:bg-espresso-900/45",
                  )}
                />
              ))}
            </div>
          </>
        ) : null}
        {badge ? (
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em]",
              badge === "bestseller" && "bg-carlo-red text-cream-50",
              badge === "novo" && "bg-carlo-gold text-espresso-900",
              badge === "sazonal" && "bg-cream-50 text-espresso-900",
            )}
          >
            {t(`badges.${badge}`)}
          </span>
        ) : null}
      </div>

      <div className="pt-5">
        <h3 className="font-display text-2xl leading-tight text-espresso-900">
          {name}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-espresso-700">
          {description}
        </p>
        <div className="my-3 border-t border-espresso-900/10" aria-hidden />
        <div className="flex items-center justify-between gap-4">
          <p className="font-sans text-lg font-semibold text-espresso-900">
            {formatMenuPrice(price, locale, {
              from: priceFrom,
              fromLabel: priceFrom ? t("priceFrom") : undefined,
            })}
          </p>
          <a
            href="https://ifoodbr.onelink.me/F4X4/carlosbakerysp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-sans text-sm font-semibold text-carlo-red transition-colors hover:bg-carlo-red hover:text-cream-50"
          >
            {t("order")}
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}
