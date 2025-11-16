'use client';

import ContactForm from '@/components/ContactForm';
import {useTranslations} from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <section className="container-max py-12 md:py-16 grid md:grid-cols-2 gap-12">
      
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold">
          {t('title')}
        </h1>

        <p className="mt-3 text-gray-600">
          {t('subtitle')}
        </p>

        <div className="mt-6 space-y-2 text-gray-700">
          <div>📧 {t('email')}</div>
          <div>📍 {t('location')}</div>
          <div>🕒 {t('hours')}</div>
        </div>
      </div>

      {/* RIGHT SIDE - CONTACT FORM */}
      <div className="card">
        <ContactForm />
      </div>
    </section>
  );
}