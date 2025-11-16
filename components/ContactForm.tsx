'use client';

import {motion} from 'framer-motion';
import {useState} from 'react';
import {useTranslations} from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const subject = String(data.get('subject') || t('defaultSubject'));
    const message = String(data.get('message') || '');

    // fallback -> mailto client
    const mailto = `mailto:contact@savepays.com?subject=${encodeURIComponent(
      `[SavePays] ${subject}`
    )}&body=${encodeURIComponent(
      `${t('label.name')}: ${name}\n${t('label.email')}: ${email}\n\n${message}`
    )}`;

    setLoading(true);
    window.location.href = mailto;

    setTimeout(() => {
      setLoading(false);
      setSent(true);
      (e.currentTarget as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.4}}
      className="space-y-4"
    >
      <div className="grid md:grid-cols-2 gap-4">
        {/* NAME */}
        <div>
          <label className="text-sm text-gray-600">{t('label.name')}</label>
          <input
            name="name"
            required
            className="input"
            placeholder={t('placeholder.name')}
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="text-sm text-gray-600">{t('label.email')}</label>
          <input
            type="email"
            name="email"
            required
            className="input"
            placeholder={t('placeholder.email')}
          />
        </div>
      </div>

      {/* SUBJECT */}
      <div>
        <label className="text-sm text-gray-600">{t('label.subject')}</label>
        <input
          name="subject"
          className="input"
          placeholder={t('placeholder.subject')}
        />
      </div>

      {/* MESSAGE */}
      <div>
        <label className="text-sm text-gray-600">{t('label.message')}</label>
        <textarea
          name="message"
          className="input min-h-[140px]"
          placeholder={t('placeholder.message')}
        />
      </div>

      {/* SEND BUTTON */}
      <button className="btn w-full md:w-auto" type="submit" disabled={loading}>
        {loading ? t('sending') : t('send')}
      </button>

      {/* SUCCESS MESSAGE */}
      {sent && (
        <motion.div
          initial={{opacity: 0, y: 8}}
          animate={{opacity: 1, y: 0}}
          className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2"
        >
          {t('sent')}
        </motion.div>
      )}
    </motion.form>
  );
}