"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { MonogramBackground } from "@/components/shared/MonogramBackground";
import { scrollToSection } from "@/lib/scroll-to";

export function FinalCtaSection() {
  const t = useTranslations("customCakes.finalCta");
  const { lenis } = useLenis();

  return (
    <section className="relative overflow-hidden bg-carlo-stripes px-[var(--container-padding-x)] py-16 md:py-20">
      <MonogramBackground variant="light" size="md" />
      <FadeIn className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight text-cream-50">
          {t("heading")}
        </h2>
        <p className="mt-4 font-sans text-base text-cream-50/70 md:text-lg">
          {t("subhead")}
        </p>
        <button
          type="button"
          onClick={() => scrollToSection("orcamento", lenis)}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-carlo-red px-10 py-4 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
        >
          {t("cta")}
          <ArrowRight className="size-4" aria-hidden />
        </button>
        <p className="mt-6 font-sans text-sm text-cream-50/60">{t("phone")}</p>
      </FadeIn>
    </section>
  );
}
