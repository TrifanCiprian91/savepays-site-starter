'use client';

import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');
  const locale = useLocale();

  return (
    <section className="container-max py-12 md:py-16 prose prose-slate">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
      >
        <h1 className="text-4xl font-bold text-babyblue mb-6">
          {t('title')}
        </h1>

        <p>{t('intro')}</p>

        {/* SECTION 1 */}
        <h2>{t('section1.title')}</h2>
        <p>{t('section1.text')}</p>
        <ul>
          {t.raw('section1.list').map((item: any, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* SECTION 2 */}
        <h2>{t('section2.title')}</h2>
        <ul>
          {t.raw('section2.list').map((item: any, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* SECTION 3 */}
        <h2>{t('section3.title')}</h2>
        <p>{t('section3.text')}</p>

        {/* SECTION 4 */}
        <h2>{t('section4.title')}</h2>
        <p>{t('section4.text')}</p>

        {/* SECTION 5 */}
        <h2>{t('section5.title')}</h2>
        <ul>
          {t.raw('section5.list').map((item: any, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* SECTION 6 */}
        <h2>{t('section6.title')}</h2>
        <p>{t('section6.text')}</p>

        {/* SECTION 7 */}
        <h2>{t('section7.title')}</h2>
        <p>{t('section7.text')}</p>

        {/* SECTION 8 */}
        <h2>{t('section8.title')}</h2>
        <p>
          {t('section8.text')}{' '}
          <a href="mailto:contact@savepays.com" className="text-babyblue">
            contact@savepays.com
          </a>
        </p>

        {/* UPDATED */}
        <p className="text-sm text-gray-500 mt-6">
          {t('updated')}:{" "}
          {new Date().toLocaleDateString(locale === 'ro' ? 'ro-RO' : 'en-US')}
        </p>
      </motion.div>
    </section>
  );
}