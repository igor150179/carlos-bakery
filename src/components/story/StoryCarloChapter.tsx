"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { Parallax } from "@/components/animations/Parallax";
import { STORY_IMAGES } from "@/lib/story-images";

import { ChapterHeader } from "./ChapterHeader";
import { Quote } from "./Quote";

export function StoryCarloChapter() {
  const t = useTranslations("story.chapter2");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section
      className="bg-cream-50 px-[var(--container-padding-x)] py-12 md:py-16"
      aria-labelledby="story-carlo-heading"
    >
      <div className="mx-auto grid max-w-[var(--max-content-width)] items-start gap-8 lg:grid-cols-5 lg:gap-12">
        <FadeIn className="lg:col-span-3">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Parallax speed={0.25} className="relative size-full">
              <Image
                src={STORY_IMAGES.carloPortrait}
                alt={t("imageAlt")}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </Parallax>
          </div>
          <p className="mt-4 font-italic text-sm text-espresso-600">{t("caption")}</p>
        </FadeIn>

        <FadeIn delay={0.15} direction="left" className="lg:col-span-2">
          <ChapterHeader
            id="story-carlo-heading"
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            headingClassName="text-[clamp(2.5rem,5vw,4rem)]"
          />
          <div className="mt-8 space-y-6">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="font-italic text-xl leading-relaxed text-espresso-800"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <Quote className="mt-10">{t("quote")}</Quote>
        </FadeIn>
      </div>
    </section>
  );
}
