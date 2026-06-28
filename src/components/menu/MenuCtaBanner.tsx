"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "@/i18n/routing";

export function MenuCtaBanner() {
  const t = useTranslations("menu.ctaBanner");

  return (
    <section className="bg-carlo-stripes px-[var(--container-padding-x)] py-12 md:py-16">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] italic leading-snug text-cream-50">
          {t("quote")}
        </p>
        <p className="mt-4 font-sans text-base text-cream-50/75 md:text-lg">
          {t("subtext")}
        </p>
        <Link
          href="/bolos-personalizados"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-carlo-red px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
        >
          {t("cta")}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </FadeIn>
    </section>
  );
}
