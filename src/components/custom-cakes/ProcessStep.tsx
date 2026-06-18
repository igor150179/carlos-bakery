"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
  showConnector?: boolean;
  className?: string;
};

export function ProcessStep({
  number,
  title,
  description,
  icon,
  showConnector = false,
  className,
}: ProcessStepProps) {
  return (
    <div className={cn("relative flex flex-col", className)}>
      {showConnector ? (
        <span
          className="absolute left-6 top-16 hidden h-[calc(100%-2rem)] w-px bg-carlo-gold/30 md:block"
          aria-hidden
        />
      ) : null}
      <div className="flex items-start gap-4">
        <span
          className="font-display text-[clamp(3rem,6vw,5rem)] leading-none text-carlo-gold"
          aria-hidden
        >
          {number}
        </span>
        <div className="pt-2 md:pt-4">
          {icon}
          <h3 className="font-display text-2xl leading-tight text-cream-50">
            {title}
          </h3>
          <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-cream-50/70 md:text-base">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
