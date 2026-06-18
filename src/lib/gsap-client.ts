/** Carrega GSAP apenas no browser — evita vendor-chunk quebrado no SSR */

export async function loadGsap() {
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
}
