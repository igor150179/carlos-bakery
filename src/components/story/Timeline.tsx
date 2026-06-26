"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { TIMELINE_EVENTS } from "@/data/story";

import { ChapterHeader } from "./ChapterHeader";
import { TimelineEvent } from "./TimelineEvent";

export function Timeline() {
  const t = useTranslations("story.chapter3");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="bg-carlo-red-900 px-[var(--container-padding-x)] py-12 md:py-16"
      aria-labelledby="story-timeline-heading"
    >
      <div className="mx-auto max-w-[var(--max-content-width)]">
        <FadeIn className="mb-8 md:mb-10">
          <ChapterHeader
            id="story-timeline-heading"
            eyebrow={t("eyebrow")}
            heading={t("heading")}
            subhead={t("subhead")}
            align="center"
            variant="dark"
            headingClassName="text-[clamp(2rem,4vw,3.25rem)]"
          />
        </FadeIn>

        <div className="relative mx-auto max-w-5xl">
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 overflow-hidden bg-carlo-gold/25 md:block"
            aria-hidden
          >
            <motion.div
              className="h-full w-full origin-top bg-carlo-gold"
              style={{ scaleY: pathLength }}
            />
          </div>

          <ol className="space-y-8 md:space-y-10">
            {TIMELINE_EVENTS.map((event, index) => {
              const title = t(`events.${event.id}.title`);
              return (
                <li key={event.id}>
                  <div className="md:hidden">
                    <TimelineEvent
                      year={t(`events.${event.id}.year`)}
                      title={title}
                      description={t(`events.${event.id}.description`)}
                      image={event.image}
                      imageAlt={title}
                      imageStyle={event.imageStyle}
                      align="left"
                      index={index}
                    />
                  </div>
                  <div className="hidden md:block">
                    <TimelineEvent
                      year={t(`events.${event.id}.year`)}
                      title={title}
                      description={t(`events.${event.id}.description`)}
                      image={event.image}
                      imageAlt={title}
                      imageStyle={event.imageStyle}
                      align={index % 2 === 0 ? "left" : "right"}
                      index={index}
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
