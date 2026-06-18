"use client";

import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { TESTIMONIAL_IDS } from "@/data/custom-cakes";

import { Testimonial } from "./Testimonial";

export function TestimonialsSection() {
  const t = useTranslations("customCakes.testimonials");

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
        </FadeIn>

        <div className="mt-8 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {TESTIMONIAL_IDS.map((id, index) => (
            <FadeIn key={id} delay={index * 0.08} className="shrink-0 md:shrink">
              <Testimonial
                quote={t(`items.${id}.quote`)}
                name={t(`items.${id}.name`)}
                occasion={t(`items.${id}.occasion`)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
