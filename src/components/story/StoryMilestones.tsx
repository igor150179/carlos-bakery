"use client";

import { CountUp } from "@/components/animations/CountUp";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

export type MilestoneItem = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
};

type StoryMilestonesProps = {
  eyebrow: string;
  heading: string;
  subhead: string;
  items: readonly MilestoneItem[];
  className?: string;
};

export function StoryMilestones({
  eyebrow,
  heading,
  subhead,
  items,
  className,
}: StoryMilestonesProps) {
  return (
    <section
      className={cn(
        "border-y border-espresso-900/8 bg-cream-100 px-[var(--container-padding-x)] py-14 md:py-20",
        className,
      )}
    >
      <div className="mx-auto max-w-[var(--max-content-width)]">
        <FadeIn className="mb-10 max-w-2xl md:mb-14">
          <p className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-carlo-gold">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-espresso-900">
            {heading}
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-espresso-700 md:text-lg">
            {subhead}
          </p>
        </FadeIn>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-espresso-900/10">
          {items.map((item, index) => (
            <FadeIn
              key={item.id}
              delay={index * 0.07}
              className="lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              <li className="relative rounded-sm border border-espresso-900/10 bg-cream-50 px-6 py-7 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0">
                <span
                  className="font-display text-[clamp(2.75rem,5vw,4.25rem)] leading-none text-carlo-red"
                  aria-hidden
                >
                  <CountUp value={item.value} suffix={item.suffix} duration={1.6} />
                </span>
                <p className="mt-3 max-w-[14rem] font-sans text-sm leading-snug text-espresso-700">
                  {item.label}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
