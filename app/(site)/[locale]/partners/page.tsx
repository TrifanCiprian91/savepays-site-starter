'use client';

import LogoMarquee from '@/components/LogoMarquee';
import PartnerPlans from '@/components/PartnerPlans';
import {useTranslations, useLocale} from 'next-intl';

export default function PartnersPage() {
  const t = useTranslations('partners');
  const locale = useLocale();

  return (
    <>
      {/* INTRO */}
      <section className="container-max py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">
          {t('title')} <span className="text-babyblue">SavePays</span>
        </h1>

        <p className="mt-3 text-gray-600 max-w-2xl">
          {t('subtitle')}
        </p>

        <div className="mt-8">
          <LogoMarquee />
        </div>
      </section>

      {/* PLANS */}
      <PartnerPlans />

      {/* CTA */}
      <section className="container-max py-12 text-center">
        <div className="inline-flex flex-col items-center justify-center gap-3 rounded-2xl p-6 md:p-8 bg-grayui">
          <div className="text-lg font-semibold">{t('cta.title')}</div>
          <div className="text-gray-600">{t('cta.subtitle')}</div>
          <a href={`/${locale}/contact`} className="btn">
            {t('cta.button')}
          </a>
        </div>
      </section>
    </>
  );
}