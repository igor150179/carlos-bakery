"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { MonogramBackground } from "@/components/shared/MonogramBackground";
import { Link } from "@/i18n/routing";
import { SITE_CONFIG } from "@/lib/constants";

export function MenuFinalCta() {
  const t = useTranslations("menu.finalCta");

  return (
    <section className="relative overflow-hidden bg-cream-50 px-[var(--container-padding-x)] py-14 md:py-16">
      <MonogramBackground size="lg" />

      <FadeIn className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] leading-tight text-espresso-900">
          {t("heading")}
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={SITE_CONFIG.ifood}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-carlo-red px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
          >
            {t("primaryCta")}
            <ArrowRight className="size-4" aria-hidden />
          </a>
          <Link
            href="/lojas"
            className="inline-flex items-center gap-2 rounded-full border border-espresso-900/20 px-8 py-3.5 text-sm font-semibold text-espresso-900 transition-colors hover:border-espresso-900 hover:bg-carlo-red-950 hover:text-cream-50"
          >
            {t("secondaryCta")}
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
