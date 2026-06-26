"use client";

import type { LucideIcon } from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

type StepCardProps = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  visual: "app" | "qr" | "gift";
  delay?: number;
};

export function StepCard({
  number,
  icon: Icon,
  title,
  description,
  visual,
  delay = 0,
}: StepCardProps) {
  return (
    <FadeIn delay={delay} className="relative rounded-sm border border-espresso-900/10 bg-cream-50 p-6 shadow-[0_18px_40px_rgba(15,11,8,0.06)]">
      <p className="font-display text-5xl leading-none text-carlo-gold">{number}</p>
      <Icon className="mt-6 size-8 text-carlo-red" strokeWidth={1.75} aria-hidden />
      <h3 className="mt-5 font-display text-2xl text-espresso-900">{title}</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-espresso-700">
        {description}
      </p>
      <MiniVisual type={visual} />
    </FadeIn>
  );
}

function MiniVisual({ type }: { type: "app" | "qr" | "gift" }) {
  return (
    <div className="mt-6 flex h-28 items-center justify-center rounded-sm bg-cream-100">
      {type === "app" ? (
        <div className="h-20 w-12 rounded-[1rem] bg-carlo-red-900 p-1">
          <div className="size-full rounded-[0.8rem] bg-cream-50 p-1">
            <div className="h-8 rounded-lg bg-carlo-red" />
            <div className="mt-1 grid grid-cols-2 gap-1">
              <span className="h-4 rounded bg-carlo-gold/30" />
              <span className="h-4 rounded bg-carlo-gold/30" />
            </div>
          </div>
        </div>
      ) : null}
      {type === "qr" ? (
        <div className="relative grid size-20 grid-cols-4 gap-1 rounded-sm bg-white p-2">
          {Array.from({ length: 16 }).map((_, index) => (
            <span
              key={index}
              className={cn("rounded-[1px]", index % 3 === 0 || index % 5 === 0 ? "bg-carlo-red-900" : "bg-cream-200")}
            />
          ))}
          <span className="absolute left-2 right-2 top-1/2 h-px bg-carlo-red shadow-[0_0_10px_rgba(200,16,46,0.8)]" />
        </div>
      ) : null}
      {type === "gift" ? (
        <div className="relative size-20">
          <div className="absolute bottom-0 h-14 w-20 rounded-lg bg-carlo-red" />
          <div className="absolute bottom-10 left-1/2 h-10 w-4 -translate-x-1/2 bg-carlo-gold" />
          <div className="absolute bottom-12 h-4 w-20 rounded-md bg-carlo-gold" />
        </div>
      ) : null}
    </div>
  );
}
