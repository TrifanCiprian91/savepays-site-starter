'use client';

import {motion} from 'framer-motion';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

export default function CTA() {
  const t = useTranslations('home.cta');
  const locale = useLocale();

  return (
    <motion.section
      initial={{opacity: 0, scale: 0.98}}
      whileInView={{opacity: 1, scale: 1}}
      viewport={{once: true}}
      transition={{duration: 0.4}}
      className="container-max py-16 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">
        {t('title')}
      </h2>

      <p className="mt-2 text-gray-600">
        {t('subtitle')}
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <motion.div whileHover={{scale: 1.05}}>
          <Link href="#" className="btn">
            {t('download')}
          </Link>
        </motion.div>

        <motion.div whileHover={{scale: 1.05}}>
          <Link href={`/${locale}/partners`} className="btn-ghost">
            {t('partner')}
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}