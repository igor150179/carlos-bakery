import { CUSTOM_CAKE_IMAGES } from "@/lib/custom-cake-images";

export const OCCASION_IDS = [
  "wedding",
  "birthday",
  "corporate",
  "baptism",
  "special",
] as const;

export type OccasionId = (typeof OCCASION_IDS)[number];

export const OCCASIONS = OCCASION_IDS.map((id) => ({
  id,
  image: CUSTOM_CAKE_IMAGES[id],
}));

export const STAT_ITEMS = [
  { id: "years", value: 115, suffix: "+" },
  { id: "cakes", value: 10000, suffix: "+" },
  { id: "generations", value: 4, suffix: "" },
  { id: "handmade", value: 100, suffix: "%" },
] as const;

export const PROCESS_STEP_IDS = ["01", "02", "03", "04"] as const;

export const TESTIMONIAL_IDS = ["marina", "pedro", "silva"] as const;

export const FAQ_IDS = [
  "leadTime",
  "pricing",
  "delivery",
  "tasting",
  "dietary",
  "payment",
] as const;

export type GalleryItem = {
  id: string;
  image: string;
  gridClass: string;
  captionKey: string;
  /** Fotos com ambiente da loja — contain em fundo creme para destacar o bolo */
  studioPresentation?: boolean;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    image: CUSTOM_CAKE_IMAGES.gallery[0],
    gridClass: "col-span-12 md:col-span-7 md:row-span-2",
    captionKey: "items.g1",
    studioPresentation: true,
  },
  {
    id: "g2",
    image: CUSTOM_CAKE_IMAGES.gallery[1],
    gridClass: "col-span-6 md:col-span-5",
    captionKey: "items.g2",
    studioPresentation: true,
  },
  {
    id: "g3",
    image: CUSTOM_CAKE_IMAGES.gallery[2],
    gridClass: "col-span-6 md:col-span-5",
    captionKey: "items.g3",
    studioPresentation: true,
  },
  {
    id: "g4",
    image: CUSTOM_CAKE_IMAGES.gallery[3],
    gridClass: "col-span-6 md:col-span-4",
    captionKey: "items.g4",
    studioPresentation: true,
  },
  {
    id: "g5",
    image: CUSTOM_CAKE_IMAGES.gallery[4],
    gridClass: "col-span-6 md:col-span-4",
    captionKey: "items.g5",
    studioPresentation: true,
  },
  {
    id: "g6",
    image: CUSTOM_CAKE_IMAGES.gallery[5],
    gridClass: "col-span-6 md:col-span-4",
    captionKey: "items.g6",
    studioPresentation: true,
  },
  {
    id: "g7",
    image: CUSTOM_CAKE_IMAGES.gallery[6],
    gridClass: "col-span-12 md:col-span-8",
    captionKey: "items.g7",
    studioPresentation: true,
  },
];

export const EVENT_TYPES = [
  "wedding",
  "birthday",
  "corporate",
  "baptism",
  "other",
] as const;

export const GUEST_RANGES = [
  "upTo30",
  "30to80",
  "80to150",
  "150to300",
  "over300",
] as const;
