// lib/messages.ts
import type {Locale} from '@/i18n/routing';

export async function getMessages(locale: Locale) {
  // Normalizează limba (fallback la 'ro' dacă nu e validă)
  switch (locale) {
    case 'en':
      return (await import('@/messages/en.json')).default;
    case 'ro':
    default:
      return (await import('@/messages/ro.json')).default;
  }
}

export default getMessages;
