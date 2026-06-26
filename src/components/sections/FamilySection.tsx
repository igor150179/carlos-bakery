"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { BuddyPortraitImage } from "@/components/shared/BuddyPortraitImage";
import { Link } from "@/i18n/routing";

export function FamilySection() {
  const t = useTranslations("home.family");
  const highlights = t.raw("highlights") as string[];

  return (
    <section
      id="a-historia"
      className="scroll-mt-28 bg-cream-50 px-[var(--container-padding-x)] py-[var(--section-padding-y)] md:scroll-mt-32"
    >
      <div className="mx-auto grid max-w-[var(--max-content-width)] items-center gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
        <FadeIn className="flex justify-center lg:justify-start">
          <BuddyPortraitImage alt={t("imageAlt")} variant="compact" />
        </FadeIn>

        <FadeIn delay={0.12} direction="left" className="lg:py-4">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("eyebrow")}
          </p>
          <h2 className="max-w-xl font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.15] text-espresso-900">
            {t("heading")}
          </h2>
          <p className="mt-5 max-w-prose font-sans text-base font-medium leading-relaxed text-espresso-800 md:text-lg">
            {t("lead")}
          </p>
          <p className="mt-4 max-w-prose font-sans text-base leading-relaxed text-espresso-700">
            {t("body")}
          </p>

          <ul className="mt-6 space-y-2.5 border-t border-espresso-900/10 pt-6">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-sans text-sm leading-relaxed text-espresso-700 md:text-base"
              >
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-carlo-gold"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/a-historia"
              className="inline-flex items-center gap-2 rounded-full border border-espresso-900/20 px-7 py-3 text-sm font-semibold text-espresso-900 transition-colors hover:border-espresso-900 hover:bg-carlo-red-950 hover:text-cream-50"
            >
              {t("cta")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href={{ pathname: "/a-historia", hash: "familia-kherlakian" }}
              className="inline-flex items-center gap-2 rounded-full border border-carlo-gold/40 px-7 py-3 text-sm font-semibold text-espresso-900 transition-colors hover:border-carlo-gold hover:bg-carlo-gold/10"
            >
              {t("ctaKherlakian")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
