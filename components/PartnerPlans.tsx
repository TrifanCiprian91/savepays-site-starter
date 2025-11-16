'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

const fadeUp = {
  hidden: {opacity: 0, y: 20},
  show: {opacity: 1, y: 0, transition: {duration: 0.4}}
};

export default function PartnerPlans() {
  const t = useTranslations('partners.plans');
  const locale = useLocale();

  // Plans sunt definite în messages RO/EN
  const plans = t.raw('items');

  return (
    <section className="container-max py-12">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="text-2xl md:text-3xl font-semibold text-center"
      >
        {t('title')}
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((p: any, index: number) => (
          <motion.div
            key={p.name + index}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, margin: '-80px'}}
            whileHover={{y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.08)'}}
            className={`card relative ${p.highlight ? 'ring-2 ring-babyblue' : ''}`}
          >
            {p.highlight && (
              <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-babyblue text-white">
                {t('recommended')}
              </div>
            )}

            <div className="font-semibold text-lg">{p.name}</div>

            <div className="mt-2 flex items-end gap-1">
              <div className="text-3xl font-bold">{p.price}</div>
              <div className="text-gray-500">{p.period}</div>
            </div>

            <ul className="mt-4 space-y-2 text-gray-600">
              {p.features.map((f: string, idx: number) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-babyblue">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/contact`}
              className={`btn mt-6 w-full ${p.highlight ? '' : 'btn-ghost'}`}
            >
              {p.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}