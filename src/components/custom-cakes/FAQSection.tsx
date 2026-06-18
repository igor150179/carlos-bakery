"use client";

import { useMemo } from "react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { FAQ_IDS } from "@/data/custom-cakes";

import { FAQ } from "./FAQ";

export function FAQSection() {
  const t = useTranslations("customCakes.faq");

  const items = useMemo(
    () =>
      FAQ_IDS.map((id) => ({
        id,
        question: t(`items.${id}.question`),
        answer: t(`items.${id}.answer`),
      })),
    [t],
  );

  return (
    <section className="bg-cream-50 px-[var(--container-padding-x)] py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-espresso-900">
            {t("heading")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-8">
          <FAQ items={items} />
        </FadeIn>
      </div>
    </section>
  );
}
