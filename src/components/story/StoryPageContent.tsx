"use client";

import { ChapterDivider } from "./ChapterDivider";
import { StoryBrazilChapter } from "./StoryBrazilChapter";
import { StoryBuddyChapter } from "./StoryBuddyChapter";
import { StoryCarloChapter } from "./StoryCarloChapter";
import { StoryClosingChapter } from "./StoryClosingChapter";
import { StoryJourneyChapter } from "./StoryJourneyChapter";
import { StoryKherlakianChapter } from "./StoryKherlakianChapter";
import { StoryOpening } from "./StoryOpening";
import { StoryStatsChapter } from "./StoryStatsChapter";
import { Timeline } from "./Timeline";

export function StoryPageContent() {
  return (
    <article>
      <StoryOpening />
      <ChapterDivider />
      <StoryCarloChapter />
      <ChapterDivider />
      <Timeline />
      <ChapterDivider />
      <StoryBuddyChapter />
      <ChapterDivider />
      <StoryStatsChapter />
      <ChapterDivider />
      <StoryJourneyChapter />
      <ChapterDivider />
      <StoryBrazilChapter />
      <ChapterDivider />
      <StoryKherlakianChapter />
      <ChapterDivider />
      <StoryClosingChapter />
    </article>
  );
}
