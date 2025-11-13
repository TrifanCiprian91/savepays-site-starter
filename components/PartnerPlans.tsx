'use client';

import {motion} from 'framer-motion';
import {Link} from '@/navigation';
import {useTranslations} from 'next-intl';

const fadeUp = {
  hidden: {opacity: 0, y: 20},
  show: {opacity: 1, y: 0, transition: {duration: 0.4}}
};

export default function PartnerPlans() {
  const t = useTranslations('plans'); // vezi cheile în messages/*.json

  // Construim planurile din mesaje (fără text hardcodat)
  const plans = [
    {
      key: 'starter',
      name: t('starter.name'),
      price: t('starter.price'),
      period: t('starter.period'),
      features: [
        t('starter.features.0'),
        t('starter.features.1'),
        t('starter.features.2')
      ],
      cta: t('starter.cta'),
      href: '/contact',
      highlight: false
    },
    {
      key: 'pro',
      name: t('pro.name'),
      price: t('pro.price'),
      period: t('pro.period'),
      features: [
        t('pro.features.0'),
        t('pro.features.1'),
        t('pro.features.2'),
        t('pro.features.3'),
        t('pro.features.4')
      ],
      cta: t('pro.cta'),
      href: '/contact',
      highlight: true,
      badge: t('recommended')
    },
    {
      key: 'enterprise',
      name: t('enterprise.name'),
      price: t('enterprise.price'),
      period: t('enterprise.period'),
      features: [
        t('enterprise.features.0'),
        t('enterprise.features.1'),
        t('enterprise.features.2'),
        t('enterprise.features.3')
      ],
      cta: t('enterprise.cta'),
      href: '/contact',
      highlight: false
    }
  ];

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
        {plans.map((p) => (
          <motion.div
            key={p.key}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, margin: '-80px'}}
            whileHover={{y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.08)'}}
            className={`card relative ${p.highlight ? 'ring-2 ring-babyblue' : ''}`}
          >
            {p.highlight && p.badge && (
              <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-babyblue text-white">
                {p.badge}
              </div>
            )}
            <div className="font-semibold text-lg">{p.name}</div>
            <div className="mt-2 flex items-end gap-1">
              <div className="text-3xl font-bold">{p.price}</div>
              <div className="text-gray-500">{p.period}</div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              {p.features.map((f, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-babyblue">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link href={p.href} className={`btn mt-6 w-full ${p.highlight ? '' : 'btn-ghost'}`}>
              {p.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
