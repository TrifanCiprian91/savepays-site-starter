'use client';

import {motion, useScroll, useTransform} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {useTranslations, useLocale} from 'next-intl';

export default function Hero() {
  const {scrollY} = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 60]);

  const t = useTranslations('home.hero');
  const locale = useLocale();

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-babyblue/10 to-white">
      <div className="container-max grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t('title.part1')} <span className="text-babyblue">{t('title.part2')}</span>.
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            {t('subtitle')}
          </p>

          <div className="mt-8 flex gap-4">
            <motion.div whileHover={{scale: 1.05}}>
              <Link href={`/${locale}/partners`} className="btn">
                {t('cta.partner')}
              </Link>
            </motion.div>

            <motion.div whileHover={{scale: 1.05}}>
              <Link href={`/${locale}/how-it-works`} className="btn-ghost">
                {t('cta.how')}
              </Link>
            </motion.div>
          </div>

          <div className="mt-6 flex gap-3">
            <img src="/appstore-badge.svg" alt="App Store" className="h-14" />
            <img src="/play-badge.svg" alt="Google Play" className="h-14" />
          </div>

          <div className="mt-4 text-sm text-gray-500">
            {t('availability')}
          </div>
        </motion.div>

        {/* RIGHT – PARALLAX MOCKUP */}
        <motion.div style={{y}} className="relative">
          <div className="card p-3 md:p-4">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/mockup-app.png"
                alt={t('mockupAlt')}
                width={900}
                height={1600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}