"use client";

import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { MonogramBackground } from "@/components/shared/MonogramBackground";
import { Link } from "@/i18n/routing";

export function BuddysClubSection() {
  const t = useTranslations("home.club");

  return (
    <section
      id="buddys-club"
      className="scroll-mt-28 relative overflow-hidden bg-carlo-stripes px-[var(--container-padding-x)] py-14 md:scroll-mt-32 md:py-16"
    >
      <MonogramBackground variant="light" size="lg" />

      <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-champagne-on-dark">
          {t("eyebrow")}
        </p>
        <h2 className="font-display text-display leading-tight text-cream-50">
          {t("heading")}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-cream-50/80 md:text-lg">
          {t("subhead")}
        </p>
        <Link
          href="/buddys-club"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-carlo-red px-10 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
        >
          {t("cta")}
        </Link>
      </FadeIn>
    </section>
  );
}
