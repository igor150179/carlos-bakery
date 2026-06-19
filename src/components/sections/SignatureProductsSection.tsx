"use client";

import { CustomCakesShowcaseBanner } from "./CustomCakesShowcaseBanner";
import { MenuShowcaseBanner } from "./MenuShowcaseBanner";

export function SignatureProductsSection() {
  return (
    <section
      id="cardapio"
      className="scroll-mt-28 bg-cream-50 px-[var(--container-padding-x)] pb-[var(--section-padding-y)] pt-6 md:scroll-mt-32 md:pt-8"
    >
      <div className="mx-auto flex max-w-[var(--max-content-width)] flex-col gap-5 md:gap-7">
        <MenuShowcaseBanner />
        <CustomCakesShowcaseBanner />
      </div>
    </section>
  );
}
