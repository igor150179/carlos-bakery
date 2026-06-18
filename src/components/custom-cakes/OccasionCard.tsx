"use client";

import Image from "next/image";

export type OccasionCardProps = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

export function OccasionCard({
  title,
  description,
  image,
}: OccasionCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-sm">
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-3 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-espresso-900/35 to-transparent transition-opacity duration-500 group-hover:from-espresso-900"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-2 md:p-6">
          <h3 className="font-display text-2xl leading-tight text-cream-50">
            {title}
          </h3>
          <p className="mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-cream-50/80">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}
