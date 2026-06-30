import { SITE_CONFIG } from "@/lib/constants";

import { JsonLd } from "./JsonLd";

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Carlo's Bakery Brasil",
        alternateName: "Cake Boss Brasil",
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/logo.png`,
        description:
          "A única Carlo's Bakery fora dos Estados Unidos. Confeitaria italiana de Buddy Valastro em São Paulo desde 2016.",
        foundingDate: "2016-12-07",
        founder: {
          "@type": "Person",
          name: "Buddy Valastro",
          alternateName: "Cake Boss",
        },
        sameAs: [
          SITE_CONFIG.social.instagram,
          SITE_CONFIG.social.facebook,
          SITE_CONFIG.social.tiktok,
          SITE_CONFIG.social.youtube,
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+55-11-99315-0639",
            contactType: "customer service",
            areaServed: "BR",
            availableLanguage: ["Portuguese", "English", "Italian"],
          },
          {
            "@type": "ContactPoint",
            email: "imprensa@carlosbakery.com.br",
            contactType: "press",
          },
        ],
      }}
    />
  );
}

export function BakeryJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Bakery",
        name: "Carlo's Bakery Brasil",
        image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
        url: SITE_CONFIG.url,
        priceRange: "$$",
        servesCuisine: ["Italian", "American"],
        acceptsReservations: false,
        hasMenu: `${SITE_CONFIG.url}/pt/cardapio`,
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  locale,
  currentName,
  currentPath,
}: {
  locale: string;
  currentName: string;
  currentPath: string;
}) {
  const homeUrl = `${SITE_CONFIG.url}/${locale}`;
  const currentUrl = `${homeUrl}${currentPath}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: currentName,
            item: currentUrl,
          },
        ],
      }}
    />
  );
}

export function FAQJsonLd({
  items,
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
