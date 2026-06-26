"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { STORY_IMAGES } from "@/lib/story-images";

const EASE = [0.16, 1, 0.3, 1] as const;

export function StoryOpening() {
  const t = useTranslations("story.chapter1");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={STORY_IMAGES.hero}
          alt=""
          fill
          priority
          className="object-cover object-center grayscale"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-carlo-red-900/60" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-[var(--container-padding-x)] py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.35em] text-champagne-on-dark"
        >
          {t("eyebrow")}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="font-display text-[clamp(2.5rem,8vw,6rem)] italic leading-none text-cream-50"
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="mx-auto mt-8 max-w-2xl font-italic text-xl leading-relaxed text-cream-50/80 md:text-2xl"
        >
          {t("subhead")}
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        aria-hidden
      >
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-cream-50/70">
          {t("scroll")}
        </span>
        <motion.span
          className="block h-12 w-px origin-center bg-cream-50/50"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
