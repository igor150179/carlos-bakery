"use client";

import { useTranslations } from "next-intl";

import { STORY_MILESTONES } from "@/data/story";

import { StoryMilestones } from "./StoryMilestones";

export function StoryStatsChapter() {
  const t = useTranslations("story.chapter5");

  const items = STORY_MILESTONES.map((stat) => ({
    id: stat.id,
    value: stat.value,
    suffix: stat.suffix,
    label: t(`milestones.${stat.id}`),
  }));

  return (
    <StoryMilestones
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      subhead={t("subhead")}
      items={items}
    />
  );
}
