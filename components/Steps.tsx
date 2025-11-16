'use client';

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';

const fadeUp = {
  hidden: {opacity: 0, y: 20},
  show:   {opacity: 1, y: 0, transition: {duration: 0.4}},
};

const stagger = {
  hidden: {},
  show: {transition: {staggerChildren: 0.08}},
};

export default function Steps() {
  const t = useTranslations('home.steps');

  // steps este un array tradus în RO/EN
  const steps = t.raw('items');

  return (
    <section className="container-max py-12">

      {/* TITLU */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="text-2xl md:text-3xl font-semibold text-center"
      >
        {t('title')}
      </motion.h2>

      {/* GRID */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, margin: '-80px'}}
        className="mt-8 grid md:grid-cols-3 gap-6"
      >
        {steps.map((s: any) => (
          <motion.div
            key={s.n}
            variants={fadeUp}
            whileHover={{y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.06)'}}
            className="card"
          >
            <div className="text-babyblue font-bold text-3xl">{s.n}</div>
            <div className="mt-2 font-semibold">{s.t}</div>
            <div className="mt-2 text-gray-600">{s.d}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}