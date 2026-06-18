import createMiddleware from "next-intl/middleware";
import { type NextRequest, NextResponse } from "next/server";

import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Home sempre em português — /en e /it redirecionam para /
  if (pathname === "/en" || pathname === "/en/") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (pathname === "/it" || pathname === "/it/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(pt|en|it)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
