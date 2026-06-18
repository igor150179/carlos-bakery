"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { MENU_IMAGES } from "@/lib/menu-images";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MenuHero() {
  const t = useTranslations("menu.hero");

  return (
    <section className="relative flex min-h-[52vh] items-center justify-center overflow-hidden bg-cream-50">
      <div className="absolute inset-0">
        <Image
          src={MENU_IMAGES.heroTexture}
          alt=""
          fill
          className="object-cover opacity-[0.12] blur-sm"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-cream-50/40 via-cream-50/90 to-cream-50"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-[var(--container-padding-x)] py-16 text-center md:py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="font-display text-[clamp(3rem,6vw,5rem)] leading-[1.05] text-espresso-900"
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-espresso-700 md:text-lg"
        >
          {t("subhead")}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        aria-hidden
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-espresso-600/50">
          {t("scroll")}
        </span>
        <span className="block h-7 w-px bg-espresso-600/30" />
      </motion.div>
    </section>
  );
}
