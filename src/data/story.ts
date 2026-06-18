import { STORY_IMAGES } from "@/lib/story-images";

export const TIMELINE_EVENT_IDS = [
  "e1910",
  "e1964",
  "e1990",
  "e1994",
  "e2009",
  "e2015",
  "eToday",
] as const;

export type TimelineEventId = (typeof TIMELINE_EVENT_IDS)[number];

export type TimelineImageStyle = "heritage" | "modern";

export const TIMELINE_EVENTS: {
  id: TimelineEventId;
  image: string;
  imageStyle?: TimelineImageStyle;
}[] = [
  { id: "e1910", image: STORY_IMAGES.timeline.e1910, imageStyle: "heritage" },
  { id: "e1964", image: STORY_IMAGES.timeline.e1964 },
  { id: "e1990", image: STORY_IMAGES.timeline.e1990, imageStyle: "heritage" },
  { id: "e1994", image: STORY_IMAGES.timeline.e1994, imageStyle: "heritage" },
  { id: "e2009", image: STORY_IMAGES.timeline.e2009 },
  { id: "e2015", image: STORY_IMAGES.timeline.e2015 },
  { id: "eToday", image: STORY_IMAGES.timeline.eToday, imageStyle: "modern" },
];

export const STORY_MILESTONES = [
  { id: "episodes", value: 200, suffix: "+" },
  { id: "countries", value: 100, suffix: "+" },
  { id: "seasons", value: 12, suffix: "" },
  { id: "books", value: 15, suffix: "+" },
] as const;
