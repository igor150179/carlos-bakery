/**
 * Root layout — delegates HTML structure to [locale]/layout.tsx
 * Import global CSS here so Tailwind loads reliably in dev + prod.
 */
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
