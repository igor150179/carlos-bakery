"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "@/i18n/routing";
import type { ProductId } from "@/lib/home-products";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  id: ProductId;
  image: string;
  href: string;
  gridClass: string;
  index: number;
  imageZoom?: number;
  compositionImages?: readonly string[];
};

const STUDIO_PRODUCT_IDS: ProductId[] = [
  "cookiePistache",
  "cannoli",
  "lobsterTail",
  "fondantCake",
];

/** Três bolos DIY ao fundo + destaque central, sem invadir a faixa do texto */
function FondantCakeComposition({
  image,
  alt,
  compositionImages,
}: {
  image: string;
  alt: string;
  compositionImages: readonly string[];
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-cream-50">
      <div className="absolute inset-x-0 top-0 bottom-[36%] overflow-hidden md:bottom-[34%]">
        <div
          className="absolute inset-x-1 bottom-0 top-[6%] flex items-end justify-center gap-0 sm:inset-x-2 sm:gap-1 md:inset-x-3"
          aria-hidden
        >
          {compositionImages.map((src) => (
            <div
              key={src}
              className="relative h-[92%] w-[31%] min-w-0 shrink-0 sm:h-[94%] sm:w-[32%]"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-contain object-bottom opacity-90"
                sizes="22vw"
                style={{ transform: "scale(1.08)" }}
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 z-[1] h-[82%] w-[44%] min-w-0 max-w-none -translate-x-1/2 sm:h-[86%] sm:w-[46%] md:max-w-[320px]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain object-bottom drop-shadow-[0_8px_28px_rgba(15,11,8,0.14)]"
            sizes="(max-width: 768px) 55vw, 35vw"
            style={{ transform: "scale(1.06)" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}

function ProductImage({
  id,
  image,
  alt,
  imageZoom = 1,
  compositionImages,
}: {
  id: ProductId;
  image: string;
  alt: string;
  imageZoom?: number;
  compositionImages?: readonly string[];
}) {
  if (id === "fondantCake" && compositionImages?.length) {
    return (
      <FondantCakeComposition
        image={image}
        alt={alt}
        compositionImages={compositionImages}
      />
    );
  }

  const isStudio = STUDIO_PRODUCT_IDS.includes(id);
  const isCookie = id === "cookiePistache";
  const zoomStyle =
    imageZoom !== 1
      ? { transform: `scale(${imageZoom})`, transformOrigin: "center center" }
      : undefined;

  return (
    <Image
      src={image}
      alt={alt}
      fill
      className={cn(
        "pointer-events-none transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105",
        isStudio && "bg-cream-50 object-contain",
        isCookie
          ? "object-contain object-[center_42%] p-4 sm:p-6"
          : isStudio
            ? "p-2 sm:p-3"
            : "object-cover",
      )}
      sizes="(max-width: 768px) 100vw, 50vw"
      style={zoomStyle}
    />
  );
}

export function ProductCard({
  id,
  image,
  href,
  gridClass,
  index,
  imageZoom,
  compositionImages,
}: ProductCardProps) {
  const t = useTranslations("home.products");

  return (
    <FadeIn
      id={id === "fondantCake" ? "bolos-personalizados" : undefined}
      delay={index * 0.12}
      className={cn(
        "group relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-auto",
        gridClass,
      )}
    >
      <Link
        href={href as "/cardapio" | "/bolos-personalizados"}
        className="relative block h-full min-h-[420px] w-full md:min-h-0"
      >
        <div className="absolute inset-0 z-0">
          <ProductImage
            id={id}
            image={image}
            alt={t(`${id}.name`)}
            imageZoom={imageZoom}
            compositionImages={compositionImages}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-espresso-900/95 via-espresso-900/50 to-espresso-900/5 transition-opacity duration-500 group-hover:from-espresso-900"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
          <h3 className="font-display text-3xl text-cream-50">{t(`${id}.name`)}</h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream-50/80">
            {t(`${id}.description`)}
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-carlo-gold transition-colors group-hover:text-carlo-gold-light">
            {t("learnMore")}
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}
