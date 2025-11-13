// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // limba implicită
  defaultLocale: 'ro',
  // limbile suportate
  locales: ['ro', 'en'],
  // prefix pentru locale (ex: /ro, /en)
  localePrefix: 'always'
});

export const config = {
  // match pentru rutele cu locale
  matcher: ['/', '/(ro|en)/:path*']
};
