"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { Parallax } from "@/components/animations/Parallax";
import { BuddyPortraitImage } from "@/components/shared/BuddyPortraitImage";
import { Link } from "@/i18n/routing";

export function FamilySection() {
  const t = useTranslations("home.family");

  return (
    <section
      id="a-historia"
      className="scroll-mt-28 bg-cream-50 px-[var(--container-padding-x)] py-[var(--section-padding-y)] md:scroll-mt-32"
    >
      <div className="mx-auto grid max-w-[var(--max-content-width)] items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <FadeIn>
          <Parallax speed={0.35} className="relative">
            <BuddyPortraitImage alt={t("imageAlt")} />
          </Parallax>
        </FadeIn>

        <FadeIn delay={0.15} direction="left">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-display leading-tight text-espresso-900">
            {t("heading")}
          </h2>
          <p className="mt-6 max-w-prose font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
            {t("body")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/a-historia"
              className="inline-flex items-center gap-2 rounded-full border border-espresso-900/20 px-8 py-3.5 text-sm font-semibold text-espresso-900 transition-colors hover:border-espresso-900 hover:bg-espresso-900 hover:text-cream-50"
            >
              {t("cta")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href={{ pathname: "/a-historia", hash: "familia-kherlakian" }}
              className="inline-flex items-center gap-2 rounded-full border border-carlo-gold/40 px-8 py-3.5 text-sm font-semibold text-espresso-900 transition-colors hover:border-carlo-gold hover:bg-carlo-gold/10"
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
