'use client';

import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';

const fadeUp = {
  hidden: {opacity: 0, y: 30},
  show: {opacity: 1, y: 0, transition: {duration: 0.5}},
};

export default function HowItWorksPage() {
  const t = useTranslations('howItWorks');
  const locale = useLocale();

  // steps vin traduse RO/EN
  const steps = t.raw('steps');

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
          {t('intro')}
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
        <div className="min-w-[900px] relative">
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 rounded-full" />

          <div className="grid grid-cols-4 gap-8">
            {steps.map((s: any, i: number) => (
              <motion.div
                key={s.n}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-80px'}}
                transition={{delay: i * 0.1, duration: 0.4}}
                className="relative"
              >
                <div className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-babyblue ring-4 ring-white" />

                <div className="card pt-10 text-center">
                  <div className="text-3xl font-bold text-babyblue mb-2">{s.n}</div>
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