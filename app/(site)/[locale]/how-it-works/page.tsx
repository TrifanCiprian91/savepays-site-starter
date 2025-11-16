'use client';

import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';

const fadeUp = {
  hidden: {opacity: 0, y: 30},
  show: {opacity: 1, y: 0, transition: {duration: 0.5}}
};

export default function HowItWorksPage() {
  const t = useTranslations('how');
  const locale = useLocale();

  const steps = t.raw('steps'); // array de pași tradus în RO/EN

  return (
    <section className="container-max py-16">
      {/* INTRO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          {t('title')} <span className="text-babyblue">SavePays</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* TIMELINE */}
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.5}}
        className="overflow-x-auto pb-6"
      >
        <div className="min-w-[900px]">
          <div className="h-1 rounded-full bg-gray-200 mb-8" />
          <div className="grid grid-cols-4 gap-8">
            {steps.map((s: any, i: number) => (
              <motion.div
                key={i}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-80px'}}
                transition={{delay: i * 0.08, duration: 0.4}}
              >
                <div className="card text-center">
                  <div className="text-3xl font-bold text-babyblue mb-1">{s.n}</div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="mt-2 text-gray-600 text-sm">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA FINAL */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold">{t('cta.title')}</h2>
        <p className="mt-2 text-gray-600">{t('cta.subtitle')}</p>

        <a href={`/${locale}/contact`} className="btn mt-4">
          {t('cta.button')}
        </a>
      </motion.div>
    </section>
  );
}