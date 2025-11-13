// i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Limbi suportate în site
  const supportedLocales = ['ro', 'en'] as const;
  const defaultLocale = 'ro';

  // Dacă nu vine nimic sau vine ceva aiurea, folosim 'ro'
  const finalLocale =
    locale && (supportedLocales as readonly string[]).includes(locale)
      ? locale
      : defaultLocale;

  return {
    // aici forțăm string, ca să nu mai fie niciun 'undefined' în joc
    locale: finalLocale as string,
    messages: {}
  };
});
