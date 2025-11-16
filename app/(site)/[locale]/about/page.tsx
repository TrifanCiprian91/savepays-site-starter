// app/[locale]/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

export default function AboutPage() {
  const t = useTranslations('about');

  const values = t.raw('values');
  const milestones = t.raw('milestones');
  const future = t.raw('future');

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="container-max py-16 space-y-16"
    >
      {/* HERO */}
      <motion.div variants={fadeUp} className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          {t('heroTitle')} <span className="text-babyblue">SavePays</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {t('heroText')}
        </p>
      </motion.div>

      {/* VALORI */}
      <motion.div variants={fadeUp}>
        <h2 className="text-2xl font-semibold text-center mb-8">
          {t('valuesTitle')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v: any) => (
            <motion.div
              key={v.title}
              whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.06)' }}
              className="card text-center"
            >
              <h3 className="font-semibold text-lg text-babyblue">{v.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* REALIZĂRI */}
      <motion.div variants={fadeUp}>
        <h2 className="text-2xl font-semibold text-center mb-8">
          {t('milestonesTitle')}
        </h2>

        <div className="space-y-4">
          {milestones.map((m: any) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              className="card flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <div className="font-semibold">{m.label}</div>
                <div className="text-gray-600 text-sm">{m.desc}</div>
              </div>

              <span className="mt-2 md:mt-0 px-3 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-200">
                {m.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* VIITOR */}
      <motion.div variants={fadeUp}>
        <h2 className="text-2xl font-semibold text-center mb-8">
          {t('futureTitle')}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {future.map((f: any) => (
            <motion.div
              key={f.date}
              whileHover={{ y: -4 }}
              className="card flex flex-col"
            >
              <div className="font-semibold text-babyblue">{f.date}</div>
              <div className="mt-1">{f.goal}</div>
              <div className="mt-2 text-sm text-gray-500">{f.status}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CONTACT */}
      <motion.div variants={fadeUp} className="text-center">
        <h2 className="text-2xl font-semibold mb-4">{t('teamTitle')}</h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          {t('teamText.line1')} <strong>{t('teamText.company')}</strong>
          <br />📍 {t('teamText.location')}
          <br />📧 {t('teamText.email')}
        </p>
      </motion.div>
    </motion.section>
  );
}