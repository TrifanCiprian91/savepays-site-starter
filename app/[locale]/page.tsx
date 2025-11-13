'use client';

import {Link} from '@/navigation';
import {useTranslations} from 'next-intl';
import SeoJsonLd from '@/components/SeoJsonLd';

export default function HomePage() {
  const t = useTranslations(); // 👈 chei de tip "hero.title", "cta.getStarted"

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SavePay',
    url: 'https://savepays.com',
    logo: 'https://savepays.com/icons/apple-touch-icon.png',
    sameAs: []
  };

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://savepays.com',
    name: 'SavePay'
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <SeoJsonLd data={orgJsonLd} />
      <SeoJsonLd data={webSiteJsonLd} />

      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{t('hero.title')}</h1>
        <p className="text-lg md:text-xl opacity-80">{t('hero.subtitle')}</p>

        <div className="mt-6 flex items-center justify-center">
          <Link
            href="/contact"
            className="inline-block rounded-2xl px-6 py-3 shadow-md bg-white hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-babyblue"
            aria-label={t('cta.getStarted')}
          >
            {t('cta.getStarted')}
          </Link>
        </div>
      </section>
    </div>
  );
}
