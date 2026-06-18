"use client";

import { SIGNATURE_PRODUCTS } from "@/lib/home-products";

import { ProductCard } from "./ProductCard";

export function SignatureProductsSection() {
  return (
    <section
      id="cardapio"
      className="scroll-mt-28 bg-cream-50 px-[var(--container-padding-x)] pb-[var(--section-padding-y)] pt-6 md:scroll-mt-32 md:pt-8"
    >
      <div className="mx-auto grid max-w-[var(--max-content-width)] grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
        {SIGNATURE_PRODUCTS.map((product, index) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            href={product.href}
            gridClass={product.gridClass}
            imageZoom={product.imageZoom}
            compositionImages={product.compositionImages}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
