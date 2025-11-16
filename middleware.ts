import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// Middleware custom + next-intl combined
export default function middleware(req: NextRequest) {
  const { nextUrl } = req;

  // 1. Redirect implicit "/" → "/ro"
  if (nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/ro', req.url));
  }

  // 2. next-intl i18n routing
  return createMiddleware(routing)(req);
}

// Matcher corect pentru structura ta: (site)/[locale]/...
export const config = {
  matcher: [
    '/',
    '/(site)/:locale/:path*',
    '/(site)/:locale'
  ]
};