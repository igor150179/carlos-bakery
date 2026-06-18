"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { STORY_IMAGES } from "@/lib/story-images";

export function StoryJourneyChapter() {
  const t = useTranslations("story.chapter6");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.92", "center 0.45"],
  });
  const pathProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[75vh] items-center justify-center overflow-hidden"
      aria-labelledby="story-journey-heading"
    >
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="relative">
          <Image
            src={STORY_IMAGES.journeyHoboken}
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative">
          <Image
            src={STORY_IMAGES.journeySaoPaulo}
            alt=""
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-espresso-900/70" aria-hidden />

      <div className="relative z-10 mx-auto max-w-3xl px-[var(--container-padding-x)] py-16 text-center md:py-20">
        <FadeIn>
          <p
            id="story-journey-heading"
            className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.35em] text-champagne-on-dark"
          >
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] italic leading-none text-cream-50">
            {t("heading")}
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-italic text-2xl leading-relaxed text-cream-50/85">
            {t("subhead")}
          </p>

          <svg
            viewBox="0 0 400 80"
            className="mx-auto mt-12 h-16 w-full max-w-md text-champagne-on-dark"
            aria-hidden
          >
            <motion.path
              d="M 20 40 Q 200 10 380 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="1"
              style={{ pathLength: pathProgress }}
            />
            <circle cx="20" cy="40" r="5" fill="currentColor" />
            <circle cx="380" cy="40" r="5" fill="currentColor" />
          </svg>

          <div className="mt-8 flex justify-between font-sans text-xs uppercase tracking-[0.2em] text-cream-50/70">
            <span>{t("hobokenCoords")}</span>
            <span>{t("saopauloCoords")}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
