// i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  const safeLocale = (locale && routing.locales.includes(locale as any))
    ? (locale as (typeof routing.locales)[number])
    : routing.defaultLocale;

  const messages = (await import(`../messages/${safeLocale}.json`)).default;

  return {
    locale: safeLocale,
    messages
  };
});
