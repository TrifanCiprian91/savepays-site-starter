import {Locale} from '@/i18n/routing';

export async function getMessages(locale: Locale) {
  // Normalizează limba (fallback la 'ro' dacă nu e validă)
  const safeLocale = ['ro', 'en'].includes(locale) ? locale : 'ro';

  // Importă mesajele din fișierele JSON
  const messages = (await import(`@/messages/${safeLocale}.json`)).default;

  return messages;
}
