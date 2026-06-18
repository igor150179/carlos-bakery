"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { STORY_IMAGES } from "@/lib/story-images";

import { ChapterHeader } from "./ChapterHeader";

type Member = { name: string; role: string };

export function StoryKherlakianChapter() {
  const t = useTranslations("story.kherlakian");
  const members = t.raw("members") as Member[];

  return (
    <section
      id="familia-kherlakian"
      className="scroll-mt-28 bg-cream-100 px-[var(--container-padding-x)] py-12 md:scroll-mt-32 md:py-16"
      aria-labelledby="story-kherlakian-heading"
    >
      <div className="mx-auto grid max-w-[var(--max-content-width)] items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <FadeIn className="relative order-2 lg:order-1">
          <div className="relative min-h-[280px] overflow-hidden rounded-sm bg-espresso-900 sm:min-h-[360px] lg:min-h-[420px]">
            <Image
              src={STORY_IMAGES.kherlakianFamily}
              alt={t("imageAlt")}
              fill
              className="object-contain object-center p-3 sm:p-5"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.12} direction="left" className="order-1 lg:order-2">
          <ChapterHeader
            id="story-kherlakian-heading"
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            headingClassName="text-[clamp(2rem,4vw,3.25rem)]"
          />
          <p className="mt-6 font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
            {t("body")}
          </p>
          <ul className="mt-8 divide-y divide-espresso-900/10 rounded-sm border border-espresso-900/10 bg-cream-50">
            {members.map((member) => (
              <li
                key={member.name}
                className="flex flex-col gap-0.5 px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span className="font-display text-lg text-espresso-900">
                  {member.name}
                </span>
                <span className="font-sans text-sm font-medium uppercase tracking-[0.12em] text-carlo-gold">
                  {member.role}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
