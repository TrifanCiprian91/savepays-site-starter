'use client';

import {motion} from 'framer-motion';
import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {useLocale} from 'next-intl';

type FormState = 'idle' | 'loading' | 'sent' | 'error';

export default function ContactForm() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [state, setState] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState('loading');

    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const subject = String(data.get('subject') || t('defaultSubject'));
    const message = String(data.get('message') || '');

    // Validări minime
    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setState('error');
      return;
    }

    // 1) Dacă ai endpoint API activ (ex: /api/contact), încearcă POST
    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, subject, message, locale})
      });

      if (res.ok) {
        setState('sent');
        (e.currentTarget as HTMLFormElement).reset();
        return;
      }
      // Dacă nu e OK, facem fallback la mailto
    } catch {
      // ignorăm, vom face fallback
    }

    // 2) Fallback: deschide clientul de mail cu precompletare
    const mailto = `mailto:contact@savepays.com?subject=${encodeURIComponent(
      `[SavePay] ${subject}`
    )}&body=${encodeURIComponent(`Nume: ${name}\nEmail: ${email}\n\n${message}`)}`;

    try {
      window.location.href = mailto;
      setTimeout(() => {
        setState('sent');
        (e.currentTarget as HTMLFormElement).reset();
      }, 800);
    } catch {
      setState('error');
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{opacity: 0, y: 20}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true}}
      transition={{duration: 0.4}}
      className="space-y-4"
      aria-busy={state === 'loading'}
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600" htmlFor="name">{t('name')}</label>
          <input id="name" name="name" required className="input" placeholder={t('namePlaceholder')} />
        </div>
        <div>
          <label className="text-sm text-gray-600" htmlFor="email">{t('email')}</label>
          <input id="email" type="email" name="email" required className="input" placeholder={t('emailPlaceholder')} />
        </div>
      </div>

      <div>
        <label className="text-sm text-gray-600" htmlFor="subject">{t('subject')}</label>
        <input id="subject" name="subject" className="input" placeholder={t('subjectPlaceholder')} />
      </div>

      <div>
        <label className="text-sm text-gray-600" htmlFor="message">{t('message')}</label>
        <textarea
          id="message"
          name="message"
          className="input min-h-[140px]"
          placeholder={t('messagePlaceholder')}
        />
      </div>

      <button className="btn w-full md:w-auto" type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? t('sending') : t('send')}
      </button>

      {state === 'sent' && (
        <motion.div
          initial={{opacity: 0, y: 8}}
          animate={{opacity: 1, y: 0}}
          className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2"
          role="status"
        >
          {t('thanks')}
        </motion.div>
      )}

      {state === 'error' && (
        <motion.div
          initial={{opacity: 0, y: 8}}
          animate={{opacity: 1, y: 0}}
          className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-3 py-2"
          role="alert"
        >
          {t('error')}
        </motion.div>
      )}
    </motion.form>
  );
}
