export const SITE_CONFIG = {
  name: "Carlo's Bakery Brasil",
  description:
    "A bakery do Buddy Valastro em São Paulo. Cem anos de tradição italiana.",
  url: "https://carlosbakery.com.br",
  ogImage: "/images/brand/og-image.jpg",
  logo: "/images/brand/logo-transparent.png",
  founded: 1910,
  location: "São Paulo, Brasil",
  whatsapp: "+5511993150639",
  whatsappDisplay: "(11) 99315-0639",
  ifood: "https://ifoodbr.onelink.me/F4X4/carlosbakerysp",
  menuUrl: "/cardapio",
  social: {
    instagram: "https://www.instagram.com/carlosbakerysp/",
    facebook: "https://www.facebook.com/carlosbakerysp",
    tiktok: "https://www.tiktok.com/@carlosbakerysp",
    youtube: "https://www.youtube.com/@carlosbakerybrasil",
  },
  developer: {
    name: "CLAPE by IO produções",
    url: "https://igoroliveira.com.br",
  },
} as const;

export function getSiteWhatsAppUrl(text?: string) {
  const digits = SITE_CONFIG.whatsapp.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

export const STORES = [
  // TODO: preencher no prompt de lojas
] as const;
