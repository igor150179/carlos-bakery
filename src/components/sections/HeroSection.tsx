"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Link } from "@/i18n/routing";
import { HOME_IMAGES } from "@/lib/home-images";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  }),
};

export function HeroSection() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HOME_IMAGES.hero}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-0"
          poster={HOME_IMAGES.heroPoster}
          muted
          loop
          playsInline
          autoPlay
          aria-hidden
        />
        <div className="absolute inset-0 bg-espresso-900/40" aria-hidden />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-[var(--container-padding-x)] pb-28 pt-32 text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold"
        >
          {t("eyebrow")}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="max-w-5xl font-display text-hero leading-[1.02] text-cream-50"
        >
          {t("headline")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          className="mt-8 max-w-xl font-sans text-base leading-relaxed text-cream-50/80 md:text-lg"
        >
          {t("subheadline")}
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.65}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/cardapio"
            className="inline-flex items-center gap-2 rounded-full bg-carlo-red px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-carlo-red-dark"
          >
            {t("ctaMenu")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/a-historia"
            className="inline-flex items-center gap-2 rounded-full border border-cream-50/50 px-8 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:border-cream-50 hover:bg-cream-50/10"
          >
            {t("ctaStory")}
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden
      >
        <motion.span
          className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-cream-50/70"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {t("scroll")}
        </motion.span>
        <motion.span
          className="block h-12 w-px origin-top bg-cream-50/50"
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
