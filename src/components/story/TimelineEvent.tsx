"use client";

import Image from "next/image";

import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

export type TimelineEventProps = {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageStyle?: "heritage" | "modern";
  align: "left" | "right";
  index: number;
};

export function TimelineEvent({
  year,
  title,
  description,
  image,
  imageAlt,
  imageStyle,
  align,
  index,
}: TimelineEventProps) {
  const isLeft = align === "left";

  return (
    <FadeIn
      direction={isLeft ? "right" : "left"}
      delay={index * 0.08}
      className={cn(
        "relative flex gap-6 md:gap-0",
        "md:grid md:grid-cols-[1fr_auto_1fr] md:items-start",
      )}
    >
      <div
        className={cn(
          "hidden min-h-[1px] md:block",
          isLeft ? "md:pr-10 md:text-right" : "md:col-start-3",
        )}
      >
        {isLeft ? (
          <EventBody
            year={year}
            title={title}
            description={description}
            image={image}
            imageAlt={imageAlt}
            imageStyle={imageStyle}
            align="right"
          />
        ) : null}
      </div>

      <div className="relative z-10 flex shrink-0 flex-col items-center md:px-2">
        <span className="size-3 rounded-full bg-carlo-gold ring-4 ring-espresso-900" />
      </div>

      <div
        className={cn(
          "flex-1 md:col-start-3 md:pl-10",
          isLeft && "md:hidden",
        )}
      >
        <EventBody
          year={year}
          title={title}
          description={description}
          image={image}
          imageAlt={imageAlt}
          imageStyle={imageStyle}
          align="left"
        />
      </div>
    </FadeIn>
  );
}

function EventBody({
  year,
  title,
  description,
  image,
  imageAlt,
  imageStyle,
  align,
}: {
  year: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageStyle?: "heritage" | "modern";
  align: "left" | "right";
}) {
  const isHeritage = imageStyle === "heritage";

  return (
    <div
      className={cn(
        "max-w-md",
        align === "right" ? "md:ml-auto md:text-right" : "text-left",
      )}
    >
      {image ? (
        <div
          className={cn(
            "relative mb-4 overflow-hidden rounded-sm ring-1 ring-cream-50/10",
            isHeritage
              ? "aspect-[4/3] w-36 md:w-44"
              : "aspect-square w-32 md:w-36",
            align === "right" && "md:ml-auto",
          )}
        >
          <Image
            src={image}
            alt={imageAlt ?? title}
            fill
            className={cn(
              "object-cover",
              isHeritage && "sepia-[0.25] contrast-[1.08] saturate-[0.85]",
            )}
            sizes="(max-width: 768px) 144px, 176px"
          />
        </div>
      ) : null}
      <p className="font-display text-4xl text-carlo-gold">{year}</p>
      <h3 className="mt-2 font-display text-2xl text-cream-50">{title}</h3>
      <p className="mt-2 font-sans text-sm leading-relaxed text-cream-50/70">
        {description}
      </p>
    </div>
  );
}
