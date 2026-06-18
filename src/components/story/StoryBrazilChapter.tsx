"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "@/i18n/routing";
import { STORY_IMAGES } from "@/lib/story-images";

import { ChapterHeader } from "./ChapterHeader";

export function StoryBrazilChapter() {
  const t = useTranslations("story.chapter7");
  const paragraphs = t.raw("paragraphs") as string[];

  return (
    <section
      className="bg-cream-50 px-[var(--container-padding-x)] py-12 md:py-16"
      aria-labelledby="story-brazil-heading"
    >
      <div className="mx-auto grid max-w-[var(--max-content-width)] gap-8 lg:grid-cols-3 lg:gap-10">
        <FadeIn className="lg:col-span-1">
          <ChapterHeader
            id="story-brazil-heading"
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            headingClassName="text-[clamp(2rem,4vw,3rem)]"
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
          <Link
            href="/lojas"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-espresso-900/25 px-8 py-3.5 text-sm font-semibold text-espresso-900 transition-colors hover:border-espresso-900 hover:bg-espresso-900 hover:text-cream-50"
          >
            {t("cta")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </FadeIn>

        <FadeIn delay={0.1} className="grid grid-cols-2 gap-4 lg:col-span-2">
          {STORY_IMAGES.brazil.map((src, index) => (
            <div
              key={src}
              className="group relative aspect-square overflow-hidden rounded-sm"
            >
              <Image
                src={src}
                alt={t(`galleryAlt.${index}`)}
                fill
                className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
