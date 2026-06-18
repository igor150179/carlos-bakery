"use client";

import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LOCALES = [
  { code: "pt", label: "PT" },
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
] as const;

type LangSwitcherProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function LangSwitcher({
  variant = "dark",
  className,
}: LangSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];
  const isLight = variant === "light";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code: (typeof LOCALES)[number]["code"]) => {
    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Selecionar idioma"
        className={cn(
          "flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold tracking-normal transition-colors",
          isLight
            ? "text-cream-50 hover:bg-cream-50/10"
            : "text-espresso-800 hover:bg-espresso-900/5",
        )}
      >
        {current.label}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Idiomas disponíveis"
          className={cn(
            "absolute right-0 top-full z-50 mt-2 min-w-[5rem] overflow-hidden rounded-lg border py-1 shadow-lg",
            isLight
              ? "border-cream-50/10 bg-espresso-800"
              : "border-cream-300 bg-cream-50",
          )}
        >
          {LOCALES.map((item) => (
            <li key={item.code} role="option" aria-selected={locale === item.code}>
              <button
                type="button"
                onClick={() => handleSelect(item.code)}
                className={cn(
                  "w-full px-4 py-2 text-left text-xs font-semibold tracking-normal transition-colors",
                  locale === item.code
                    ? "text-carlo-gold"
                    : isLight
                      ? "text-cream-100 hover:bg-cream-50/10"
                      : "text-espresso-700 hover:bg-cream-200",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
