"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { useLenis } from "@/components/providers/SmoothScrollProvider";
import { CUSTOM_CAKE_IMAGES } from "@/lib/custom-cake-images";
import { scrollToSection } from "@/lib/scroll-to";

const EASE = [0.16, 1, 0.3, 1] as const;

export function CustomCakesHero() {
  const t = useTranslations("customCakes.hero");
  const { lenis } = useLenis();

  return (
    <section className="relative flex min-h-[86vh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={CUSTOM_CAKE_IMAGES.hero}
          alt=""
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-900/50 via-espresso-900/25 to-espresso-900/60" aria-hidden />
      </div>

      <div className="relative z-10 w-full px-[var(--container-padding-x)] pb-20 pt-28 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-[var(--max-content-width)]">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
              {t("eyebrow")}
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-none text-cream-50">
              {t("headline")}
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-cream-50/80 md:text-lg">
              {t("subhead")}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection("orcamento", lenis)}
                className="inline-flex items-center justify-center rounded-full bg-carlo-red px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
              >
                {t("cta1")}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("galeria", lenis)}
                className="inline-flex items-center justify-center rounded-full border border-cream-50/50 px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:border-cream-50 hover:bg-cream-50/10"
              >
                {t("cta2")}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-hidden
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-cream-50/70">
          {t("scroll")}
        </span>
        <span className="block h-7 w-px bg-cream-50/40" />
      </motion.div>
    </section>
  );
}
