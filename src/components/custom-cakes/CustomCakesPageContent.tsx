"use client";

import { CustomCakesHero } from "./CustomCakesHero";
import { FAQSection } from "./FAQSection";
import { FinalCtaSection } from "./FinalCtaSection";
import { GallerySection } from "./GallerySection";
import { OccasionsSection } from "./OccasionsSection";
import { ProcessSection } from "./ProcessSection";
import { QuoteSection } from "./QuoteSection";
import { StatsStrip } from "./StatsStrip";
import { TestimonialsSection } from "./TestimonialsSection";

export function CustomCakesPageContent() {
  return (
    <>
      <CustomCakesHero />
      <StatsStrip />
      <OccasionsSection />
      <GallerySection />
      <ProcessSection />
      <TestimonialsSection />
      <QuoteSection />
      <FAQSection />
      <FinalCtaSection />
    </>
  );
}
