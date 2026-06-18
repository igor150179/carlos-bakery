const LOCALE_MAP = {
  pt: "pt-BR",
  en: "en-US",
  it: "it-IT",
} as const;

export function formatMenuPrice(
  amount: number,
  locale: string,
  options?: { from?: boolean; fromLabel?: string },
): string {
  const intlLocale =
    LOCALE_MAP[locale as keyof typeof LOCALE_MAP] ?? LOCALE_MAP.pt;

  const formatted = new Intl.NumberFormat(intlLocale, {
    style: "currency",
    currency: "BRL",
  }).format(amount);

  if (options?.from && options.fromLabel) {
    return `${options.fromLabel} ${formatted}`;
  }

  return formatted;
}
