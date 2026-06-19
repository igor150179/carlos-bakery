"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import type { MenuBadge } from "@/data/menu";
import { formatMenuPrice } from "@/lib/format-price";
import { cn } from "@/lib/utils";

export type ProductCardProps = {
  id: string;
  price: number;
  priceFrom?: boolean;
  image: string;
  badge?: MenuBadge;
  category: string;
};

export function ProductCard({ id, price, priceFrom, image, badge }: ProductCardProps) {
  const t = useTranslations("menu");
  const locale = useLocale();
  const name = t(`items.${id}.name`);
  const description = t(`items.${id}.description`);
  const isStudioPhoto =
    image.includes("/cannoli-") ||
    image.includes("/especial-") ||
    image.includes("/donut-") ||
    image.includes("/folhado-") ||
    image.includes("/bolo-") ||
    image.includes("/mini-bolo-") ||
    image.includes("/especial-mini-bolo-") ||
    image.includes("entremet") ||
    image.includes("/cookie-") ||
    image.includes("/croissant-") ||
    image.includes("/salgado-") ||
    image.includes("/fatia-bolo-") ||
    image.includes("/souvenir-") ||
    image.includes("/bebida-");

  return (
    <article className="group flex flex-col">
      <div
        className={cn(
          "relative aspect-[4/5] overflow-hidden rounded-sm ring-0",
          "transition-[box-shadow,ring-width,ring-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          "group-hover:ring-1 group-hover:ring-champagne-400/40 group-hover:shadow-[0_20px_44px_-24px_rgba(44,24,16,0.14)]",
          isStudioPhoto ? "bg-cream-50" : "bg-espresso-100",
        )}
      >
        <Image
          src={image}
          alt={name}
          fill
          className={cn(
            "transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]",
            isStudioPhoto
              ? "object-contain p-3"
              : "object-cover",
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
        <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-espresso-700">
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
