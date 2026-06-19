"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { FadeIn } from "@/components/animations/FadeIn";
import { Link } from "@/i18n/routing";
import { HOME_IMAGES } from "@/lib/home-images";
import { cn } from "@/lib/utils";

const CAKE_LAYERS = HOME_IMAGES.diyCakesComposition.map((src, index) => ({
  src,
  emphasis: index === 1,
  label: String(index + 1).padStart(2, "0"),
}));

export function CustomCakesShowcaseBanner() {
  const t = useTranslations("home.products");

  return (
    <FadeIn delay={0.12}>
      <Link
        href="/bolos-personalizados"
        id="bolos-personalizados"
        className="group relative block scroll-mt-28 overflow-hidden rounded-sm bg-espresso-950 shadow-[0_32px_80px_-40px_rgba(15,11,8,0.65)] ring-1 ring-champagne-on-dark-muted/20 transition-[box-shadow,ring-color] duration-700 hover:shadow-[0_40px_90px_-36px_rgba(15,11,8,0.72)] hover:ring-champagne-on-dark-soft/35 md:scroll-mt-32"
      >
        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex flex-col justify-center border-b border-champagne-on-dark-muted/10 px-6 py-8 md:px-10 md:py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pl-12 lg:pr-10">
            <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.42em] text-champagne-on-dark">
              {t("customCakesBanner.eyebrow")}
            </p>
            <h3 className="mt-4 font-display text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.08] text-cream-50">
              {t("customCakesBanner.heading")}
            </h3>
            <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-champagne-on-dark-muted md:text-base">
              {t("customCakesBanner.description")}
            </p>
            <p className="mt-6 font-display text-lg italic text-champagne-on-dark-soft/90">
              {t("customCakesBanner.tagline")}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-champagne-on-dark-soft transition-colors duration-500 group-hover:text-champagne-on-dark">
              {t("customCakesBanner.cta")}
              <ArrowRight className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
            </span>
          </div>

          <div className="relative min-h-[340px] overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--cream-100)_0%,_var(--cream-50)_50%,_var(--champagne-200)_100%)] sm:min-h-[380px] lg:min-h-[480px]">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(44,24,16,0.12) 0%, transparent 65%)",
              }}
              aria-hidden
            />

            <div
              className="absolute inset-x-4 bottom-6 top-8 flex items-end justify-center gap-0 sm:inset-x-8 md:inset-x-10 lg:bottom-8 lg:top-10"
              aria-hidden
            >
              {CAKE_LAYERS.map((cake, index) => (
                <div
                  key={cake.src}
                  className={cn(
                    "relative flex min-w-0 flex-col items-center justify-end",
                    cake.emphasis
                      ? "z-[3] h-full w-[42%]"
                      : "z-[1] h-[88%] w-[30%]",
                    index === 0 && "-mr-3 sm:-mr-5",
                    index === 2 && "-ml-3 sm:-ml-5",
                  )}
                >
                  <div
                    className={cn(
                      "relative w-full transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]",
                      cake.emphasis ? "h-[92%]" : "h-[90%]",
                    )}
                  >
                    <Image
                      src={cake.src}
                      alt=""
                      fill
                      className={cn(
                        "object-contain object-bottom",
                        cake.emphasis &&
                          "drop-shadow-[0_20px_40px_rgba(15,11,8,0.22)]",
                      )}
                      sizes="(max-width: 1024px) 33vw, 24vw"
                    />
                  </div>
                  <span className="mt-3 font-sans text-[0.55rem] uppercase tracking-[0.35em] text-espresso-700/45">
                    {cake.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-espresso-950/0 to-transparent lg:w-0"
              aria-hidden
            />
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
