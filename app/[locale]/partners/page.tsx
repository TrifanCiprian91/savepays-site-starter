'use client';

import {useLocale} from 'next-intl';
import LogoMarquee from '@/components/LogoMarquee';
import PartnerPlans from '@/components/PartnerPlans';

export default function PartnersPage() {
  const locale = useLocale();
  const isEn = locale === 'en';

  return (
    <>
      <section className="container-max py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">
          {isEn ? (
            <>
              <span className="text-babyblue">SavePays</span> partners
            </>
          ) : (
            <>
              Partenerii <span className="text-babyblue">SavePays</span>
            </>
          )}
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          {isEn
            ? 'We reduce paper costs, simplify workflows and increase customer loyalty. Choose the right plan and let’s start your pilot.'
            : 'Reducem costurile cu hârtia, simplificăm fluxurile și creștem loialitatea clienților. Alege planul potrivit și hai să pornim pilotul.'}
        </p>
        <div className="mt-8">
          <LogoMarquee />
        </div>
      </section>

      <PartnerPlans />

      <section className="container-max py-12 text-center">
        <div className="inline-flex flex-col items-center justify-center gap-3 rounded-2xl p-6 md:p-8 bg-grayui">
          <div className="text-lg font-semibold">
            {isEn ? 'Questions?' : 'Ai întrebări?'}
          </div>
          <div className="text-gray-600">
            {isEn
              ? 'Write to us – we reply the same business day.'
              : 'Scrie-ne – îți răspundem în aceeași zi lucrătoare.'}
          </div>
          <a href="/contact" className="btn">
            {isEn ? 'Contact us' : 'Contactează-ne'}
          </a>
        </div>
      </section>
    </>
  );
}
