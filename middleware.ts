import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ro', 'en'],
  defaultLocale: 'ro',
  localePrefix: 'always'
});

export const config = { matcher: ['/((?!_next|.*\\..*).*)'] };
