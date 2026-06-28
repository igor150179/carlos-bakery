"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "@/i18n/routing";
import { MonogramBackground } from "@/components/shared/MonogramBackground";

export function StoryClosingChapter() {
  const t = useTranslations("story.chapter8");

  return (
    <section className="relative overflow-hidden bg-carlo-stripes px-[var(--container-padding-x)] py-16 md:py-20">
      <MonogramBackground variant="light" size="lg" />

      <FadeIn className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] italic leading-tight text-cream-50">
          {t("headline")}
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-italic text-xl leading-relaxed text-cream-50/80">
          {t("subhead")}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/lojas"
            className="inline-flex items-center gap-2 rounded-full bg-carlo-red px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
          >
            {t("ctaVisit")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/cardapio"
            className="inline-flex items-center gap-2 rounded-full border border-cream-50/40 px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:border-cream-50 hover:bg-cream-50/10"
          >
            {t("ctaMenu")}
          </Link>
          <Link
            href="/bolos-personalizados"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-cream-50/80 transition-colors hover:text-cream-50"
          >
            {t("ctaCakes")}
          </Link>
        </div>

        <p className="mt-8 font-script text-2xl text-champagne-on-dark">{t("signature")}</p>
      </FadeIn>
    </section>
  );
}
