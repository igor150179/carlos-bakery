import type Lenis from "lenis";

export function scrollToSection(
  id: string,
  lenis: Lenis | null,
  offsetDesktop = -112,
  offsetMobile = -80,
) {
  const target = document.getElementById(id);
  if (!target) return;

  const offset =
    window.innerWidth >= 768 ? offsetDesktop : offsetMobile;

  if (lenis) {
    lenis.scrollTo(target, { offset });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
