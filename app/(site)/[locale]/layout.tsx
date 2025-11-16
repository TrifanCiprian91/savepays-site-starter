import { NextIntlClientProvider } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/lib/analytics';
import CookieConsent from '@/components/CookieConsent';
import '../../globals.css';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <CookieConsent />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />

        <Header />

        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>

        <Footer />
      </body>
    </html>
  );
}