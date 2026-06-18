"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { loadGsap } from "@/lib/gsap-client";
import { cn } from "@/lib/utils";

export interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Parallax({ children, speed = 0.5, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    let tween: { scrollTrigger?: { kill: () => void }; kill: () => void } | null =
      null;
    let cancelled = false;

    void loadGsap().then(({ gsap }) => {
      if (cancelled || !ref.current) return;

      tween = gsap.to(ref.current, {
        y: () => ref.current!.offsetHeight * speed * -1,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      cancelled = true;
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [speed]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}
