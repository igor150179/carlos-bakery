import { getTranslations } from "next-intl/server";

import { Logo } from "@/components/shared/Logo";
import { MonogramBackground } from "@/components/shared/MonogramBackground";
import { WORKSHOP_STORE } from "@/data/stores";
import { Link } from "@/i18n/routing";
import { SITE_CONFIG } from "@/lib/constants";
import { NAV_ITEMS, type NavKey } from "@/lib/navigation";

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");
  const year = new Date().getFullYear();

  const exploreItems = NAV_ITEMS;

  return (
    <footer className="relative overflow-hidden bg-carlo-stripes text-cream-50">
      <div className="relative z-10 mx-auto max-w-[var(--max-content-width)] px-[var(--container-padding-x)] py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="space-y-6 md:col-span-2 lg:col-span-5">
            <Logo variant="light" size="lg" showTagline href="/" />
            <p className="max-w-sm text-sm leading-relaxed text-cream-200/80">
              {t("tagline")}
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-cream-100 transition-colors hover:text-champagne-on-dark"
              >
                <InstagramIcon />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-cream-100 transition-colors hover:text-champagne-on-dark"
              >
                <FacebookIcon />
              </a>
              <a
                href={SITE_CONFIG.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-cream-100 transition-colors hover:text-champagne-on-dark"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-champagne-on-dark">
              {t("explore")}
            </h3>
            <ul className="mt-6 space-y-3">
              {exploreItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-100/80 transition-colors hover:text-champagne-on-dark"
                  >
                    {tNav(item.key as NavKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-display text-sm font-medium uppercase tracking-[0.2em] text-champagne-on-dark">
              {t("visit")}
            </h3>
            <address className="mt-6 space-y-2 text-sm not-italic leading-relaxed text-cream-200/80">
              <p>{WORKSHOP_STORE.address}</p>
              <p>
                {WORKSHOP_STORE.neighborhood} — {WORKSHOP_STORE.city}
              </p>
              <p>{t("hours")}</p>
            </address>
            <a
              href={`https://wa.me/${WORKSHOP_STORE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-cream-50 transition-colors hover:text-champagne-on-dark"
            >
              WhatsApp
            </a>
            <Link
              href="/lojas"
              className="mt-3 block text-sm text-champagne-on-dark transition-opacity hover:opacity-80"
            >
              {t("viewAllStores")} →
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-champagne-on-dark-muted/20 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-xs text-cream-200/60 md:flex-row md:text-left">
            <p>
              © {year} Carlo&apos;s Bakery Brasil. {t("rights")}
            </p>
            <p>
              {t("madeInPrefix")}{" "}
              <span className="text-carlo-red" aria-hidden>
                ♥
              </span>{" "}
              {t("madeInSuffix")}
            </p>
            <p className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <span>
                {t("developerPrefix")}{" "}
                <a
                  href={SITE_CONFIG.developer.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("developerAriaLabel")}
                  className="font-medium text-champagne-on-dark transition-colors hover:text-cream-50"
                >
                  {SITE_CONFIG.developer.name}
                </a>
              </span>
              <span aria-hidden className="hidden text-cream-200/40 md:inline">
                ·
              </span>
              <Link href="/privacidade" className="hover:text-cream-50">
                {t("privacy")}
              </Link>
              <span aria-hidden>·</span>
              <Link href="/termos" className="hover:text-cream-50">
                {t("terms")}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <MonogramBackground variant="light" size="sm" position="bottom" />
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="size-5"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-5"
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}
