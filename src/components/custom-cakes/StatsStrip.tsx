"use client";

import { useTranslations } from "next-intl";

import { StoryMilestones } from "@/components/story/StoryMilestones";
import { STAT_ITEMS } from "@/data/custom-cakes";

export function StatsStrip() {
  const t = useTranslations("customCakes.statsSection");

  const items = STAT_ITEMS.map((item) => ({
    id: item.id,
    value: item.value,
    suffix: item.suffix,
    label: t(`items.${item.id}`),
  }));

  return (
    <StoryMilestones
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      subhead={t("subhead")}
      items={items}
      className="bg-cream-50"
    />
  );
}
