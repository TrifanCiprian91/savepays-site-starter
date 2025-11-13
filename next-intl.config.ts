// next-intl.config.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Limbi suportate
  const supportedLocales = ['ro', 'en'] as const;
  const defaultLocale = 'ro';

  // Normalizăm limba (dacă vine ceva ciudat, cădem pe 'ro')
  const normalizedLocale = supportedLocales.includes(locale as any)
    ? (locale as (typeof supportedLocales)[number])
    : defaultLocale;

  const messages = (await import(`./messages/${normalizedLocale}.json`)).default;

  return {
    locale: normalizedLocale,
    messages
  };
});
