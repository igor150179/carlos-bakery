import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Carlo's Bakery Brasil",
    short_name: "Carlo's",
    description:
      "A única Carlo's Bakery fora dos EUA. Confeitaria italiana de Buddy Valastro em São Paulo.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F3",
    theme_color: "#C8102E",
    orientation: "portrait",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
