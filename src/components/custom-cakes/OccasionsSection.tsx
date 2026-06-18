"use client";

import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { OCCASIONS } from "@/data/custom-cakes";

import { OccasionCard } from "./OccasionCard";

export function OccasionsSection() {
  const t = useTranslations("customCakes.occasions");

  return (
    <section className="bg-cream-50 px-[var(--container-padding-x)] py-12 md:py-16">
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

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {OCCASIONS.map((occasion, index) => (
            <li key={occasion.id}>
              <FadeIn delay={index * 0.06}>
                <OccasionCard
                  title={t(`items.${occasion.id}.title`)}
                  description={t(`items.${occasion.id}.description`)}
                  image={occasion.image}
                />
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
