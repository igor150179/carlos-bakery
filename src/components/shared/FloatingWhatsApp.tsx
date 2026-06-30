"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";

import { getSiteWhatsAppUrl } from "@/lib/constants";

const DEFAULT_MESSAGE =
  "Olá! Gostaria de mais informações sobre a Carlo's Bakery.";

export function FloatingWhatsApp() {
  const t = useTranslations("home.visit");
  const whatsappUrl = getSiteWhatsAppUrl(DEFAULT_MESSAGE);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("whatsapp")}
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_40px_rgba(37,211,102,0.38)] transition-transform duration-300 hover:scale-105 md:bottom-7 md:right-7"
    >
      <MessageCircle className="size-7 fill-current" strokeWidth={1.5} aria-hidden />
    </a>
  );
}
