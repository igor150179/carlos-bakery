"use client";

import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { PROCESS_STEP_IDS } from "@/data/custom-cakes";

import { ProcessStep } from "./ProcessStep";

export function ProcessSection() {
  const t = useTranslations("customCakes.process");

  return (
    <section className="bg-carlo-stripes px-[var(--container-padding-x)] py-12 md:py-16">
      <div className="mx-auto max-w-[var(--max-content-width)]">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-cream-50">
            {t("heading")}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-cream-50/70 md:text-lg">
            {t("subhead")}
          </p>
        </FadeIn>

        <ol className="mt-10 grid gap-8 md:mt-12 md:grid-cols-4 md:gap-8">
          {PROCESS_STEP_IDS.map((stepId, index) => (
            <li key={stepId}>
              <FadeIn delay={index * 0.1}>
                <ProcessStep
                  number={stepId}
                  title={t(`steps.${stepId}.title`)}
                  description={t(`steps.${stepId}.description`)}
                  showConnector={index < PROCESS_STEP_IDS.length - 1}
                />
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
