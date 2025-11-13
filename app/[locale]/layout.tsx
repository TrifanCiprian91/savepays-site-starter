import '../globals.css';
import type {Metadata} from 'next';
import {NextIntlClientProvider} from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import {routing, type Locale} from '@/i18n/routing';

async function loadMessages(locale: Locale) {
  const messages = await import(`@/messages/${locale}.json`);
  return messages.default;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: {locale: Locale};
}): Promise<Metadata> {
  const msgs = await loadMessages(params.locale);
  const title = msgs.hero?.title ?? 'SavePay';
  const desc = msgs.hero?.subtitle ?? 'Digital receipts & loyalty';
  const url = `https://savepays.com/${params.locale}`;

  return {
    metadataBase: new URL('https://savepays.com'),
    title,
    description: desc,
    alternates: {
      canonical: url,
      languages: {ro: 'https://savepays.com/ro', en: 'https://savepays.com/en'}
    },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: 'SavePay',
      type: 'website',
      images: [{url: `/api/og?locale=${params.locale}`}]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [`/api/og?locale=${params.locale}`]
    },
    icons: {
      icon: [
        {url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png'},
        {url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png'}
      ],
      apple: [{url: '/icons/apple-touch-icon.png', sizes: '180x180'}]
    },
    manifest: '/site.webmanifest'
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: Locale};
}) {
  const {locale} = params;
  const messages = await loadMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-b from-[#E6F3FF] to-white text-slate-900 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
