"use client";

import { Egg, Milk, Wheat } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { MENU_IMAGES } from "@/lib/menu-images";

const HIGHLIGHT_ICONS = [Egg, Wheat, Milk, Egg] as const;

export function IngredientsSection() {
  const t = useTranslations("menu.ingredients");
  const highlights = t.raw("highlights") as string[];

  return (
    <section className="bg-cream-100 px-[var(--container-padding-x)] py-12 md:py-16">
      <div className="mx-auto grid max-w-[var(--max-content-width)] items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <FadeIn className="relative aspect-[4/5] overflow-hidden rounded-sm lg:aspect-[5/6]">
          <Image
            src={MENU_IMAGES.ingredients}
            alt={t("imageAlt")}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </FadeIn>

        <FadeIn delay={0.12} direction="left">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-espresso-900">
            {t("heading")}
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
            {t("body")}
          </p>
          <ul className="mt-8 space-y-4">
            {highlights.map((label, index) => {
              const Icon = HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length];
              return (
                <li
                  key={label}
                  className="flex items-start gap-3 font-sans text-sm text-espresso-800 md:text-base"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-cream-50 text-carlo-gold">
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  {label}
                </li>
              );
            })}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
