/**
 * Animation utilities — GSAP, ScrollTrigger, Lenis, Framer Motion
 * Full implementations will be added in upcoming prompts.
 */

export const EASING = {
  outExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
  inOutExpo: "cubic-bezier(0.87, 0, 0.13, 1)",
  italian: "cubic-bezier(0.65, 0, 0.35, 1)",
} as const;

export const ANIMATION_DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 1.2,
  cinematic: 1.8,
} as const;

// TODO: Lenis smooth scroll provider — prompt 02+
// TODO: GSAP ScrollTrigger registration — prompt 02+
