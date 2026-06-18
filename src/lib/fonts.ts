import {
  Caveat,
  Cormorant_Garamond,
  Inter,
  Playfair_Display,
} from "next/font/google";

export const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const fontScript = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const fontItalic = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-italic",
  display: "swap",
});

/** Combined className for applying all font CSS variables to html/body */
export const fontVariables = [
  fontDisplay.variable,
  fontBody.variable,
  fontScript.variable,
  fontItalic.variable,
].join(" ");
