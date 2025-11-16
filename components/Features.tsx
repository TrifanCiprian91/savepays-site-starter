'use client';

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';

const fadeUp = {
  hidden: {opacity: 0, y: 20},
  show:   {opacity: 1, y: 0, transition: {duration: 0.4}},
};

export default function Features() {
  const t = useTranslations('home.features');

  // Array-ul de beneficii vine tradus complet RO / EN
  const items = t.raw('items');

  return (
    <section className="container-max py-12">

      {/* TITLE */}
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

        {/* FIRST CARD (special) */}
        <motion.div
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: 20}}
          transition={{duration: 0.4}}
          className="card hover:shadow-lg hover:-translate-y-2 transition-all"
        >
          <h3 className="font-semibold text-lg">{items[0].title}</h3>
          <p className="text-gray-600 mt-2">{items[0].desc}</p>
        </motion.div>

        {/* REST OF CARDS */}
        {items.slice(1).map((i: any) => (
          <motion.div
            key={i.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, margin: '-80px'}}
            whileHover={{y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.06)'}}
            className="card transition-all"
          >
            <div className="font-semibold text-lg">{i.title}</div>
            <div className="mt-2 text-gray-600">{i.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}