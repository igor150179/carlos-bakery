"use client";

import { Star } from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";

type MemberTestimonialProps = {
  name: string;
  tier: string;
  quote: string;
  delay?: number;
};

export function MemberTestimonial({
  name,
  tier,
  quote,
  delay = 0,
}: MemberTestimonialProps) {
  return (
    <FadeIn
      delay={delay}
      className="min-w-[82vw] rounded-sm border-l-4 border-carlo-gold bg-white p-6 shadow-[0_18px_45px_rgba(15,11,8,0.06)] sm:min-w-[420px] lg:min-w-0"
    >
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-full bg-carlo-red font-display text-xl text-cream-50">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-sans text-sm font-bold text-espresso-900">{name}</p>
          <span className="rounded-full bg-carlo-gold/15 px-2.5 py-1 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-carlo-gold">
            {tier}
          </span>
        </div>
      </div>
      <div className="mt-5 flex gap-1 text-carlo-gold" aria-hidden>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="size-4 fill-current" />
        ))}
      </div>
      <p className="mt-4 font-italic text-xl leading-relaxed text-espresso-800">
        &ldquo;{quote}&rdquo;
      </p>
    </FadeIn>
  );
}
