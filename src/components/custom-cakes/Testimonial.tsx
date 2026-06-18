"use client";

import Image from "next/image";

export type TestimonialProps = {
  quote: string;
  name: string;
  occasion: string;
  image?: string;
};

export function Testimonial({ quote, name, occasion, image }: TestimonialProps) {
  return (
    <blockquote className="flex h-full min-w-[min(100%,320px)] flex-col rounded-sm bg-cream-100/80 p-8 md:min-w-0 md:p-10">
      <p
        className="font-display text-6xl leading-none text-carlo-gold/30"
        aria-hidden
      >
        &ldquo;
      </p>
      <p className="mt-2 flex-1 font-display text-xl italic leading-relaxed text-espresso-900">
        {quote}
      </p>
      <div className="my-6 border-t border-espresso-900/10" aria-hidden />
      <footer className="flex items-center gap-3">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-espresso-200">
          {image ? (
            <Image src={image} alt="" fill className="object-cover" sizes="48px" />
          ) : (
            <span className="flex size-full items-center justify-center font-sans text-sm font-semibold text-espresso-600">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <cite className="not-italic">
            <span className="block font-sans text-sm font-semibold text-espresso-900">
              {name}
            </span>
            <span className="block font-sans text-sm text-espresso-700">
              {occasion}
            </span>
          </cite>
        </div>
      </footer>
    </blockquote>
  );
}
