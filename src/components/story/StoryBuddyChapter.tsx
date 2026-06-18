"use client";

import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { BuddyPortraitImage } from "@/components/shared/BuddyPortraitImage";

import { ChapterHeader } from "./ChapterHeader";
import { Quote } from "./Quote";

export function StoryBuddyChapter() {
  const t = useTranslations("story.chapter4");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section
      className="bg-cream-50 px-[var(--container-padding-x)] py-12 md:py-16"
      aria-labelledby="story-buddy-heading"
    >
      <div className="mx-auto grid max-w-[var(--max-content-width)] items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <FadeIn direction="right">
          <ChapterHeader
            id="story-buddy-heading"
            heading={t("heading")}
            headingClassName="text-[clamp(2.5rem,5vw,4.5rem)]"
          />
          <p className="mt-4 font-italic text-2xl text-espresso-700">{t("subhead")}</p>
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
          <Quote
            className="mt-10"
            signature={t("quoteSignature")}
            translation={t("quoteTranslation")}
          >
            {t("quote")}
          </Quote>
        </FadeIn>

        <FadeIn delay={0.12} direction="left" className="relative">
          <BuddyPortraitImage alt={t("imageAlt")} />
        </FadeIn>
      </div>
    </section>
  );
}
