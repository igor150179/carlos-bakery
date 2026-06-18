"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export interface ScrollRevealProps {
  children: string;
  delay?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({
  children,
  delay = 0,
  className,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once, amount: 0.3 });

  return (
    <p
      ref={ref}
      className={cn("block w-full text-center text-pretty", className)}
      aria-label={children}
    >
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{
          duration: 0.75,
          delay,
          ease: EASE_OUT_EXPO,
        }}
      >
        {children}
      </motion.span>
    </p>
  );
}
