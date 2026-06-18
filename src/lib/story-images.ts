import { BRAND_IMAGES } from "@/lib/brand-images";

/** Story page imagery — arquivo e fotos de linha do tempo */

const storyImg = (file: string) => `/images/story/${file}`;

export const STORY_IMAGES = {
  hero: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80",
  carloPortrait: storyImg("timeline-fachada-hoboken.png"),
  buddyPortrait: BRAND_IMAGES.buddyPortrait,
  kherlakianFamily: storyImg("familia-kherlakian.png"),
  journeyHoboken:
    "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
  journeySaoPaulo:
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200&q=80",
  brazil: [
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
    "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  ],
  timeline: {
    e1910: storyImg("timeline-fachada-hoboken.png"),
    e1964:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
    e1990: storyImg("timeline-padaria-tradicao.png"),
    e1994: storyImg("timeline-buddy-bolo-casamento.png"),
    e2009:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&q=80",
    e2015:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
    eToday: storyImg("timeline-familia-valastro.png"),
  },
} as const;
