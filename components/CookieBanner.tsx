'use client';
import {useEffect, useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';

type Consent = { necessary: boolean; analytics: boolean; marketing: boolean };
const KEY = 'sp_cookie_consent_v1';

export default function CookieBanner() {
  const t = useTranslations();           // 👈 fără namespace
  const locale = useLocale();

  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState<Consent>({
    necessary: true, analytics: false, marketing: false
  });

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (!saved) setOpen(true);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    const c = saved ? (JSON.parse(saved) as Consent) : consent;
    if (c.analytics) {
      const id = process.env.NEXT_PUBLIC_GA_ID;
      if (id && !document.getElementById('ga-tag')) {
        const s = document.createElement('script');
        s.async = true; s.id = 'ga-tag';
        s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
        document.head.appendChild(s);

        const inline = document.createElement('script');
        inline.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}', { 'language': '${locale}' });
        `;
        document.head.appendChild(inline);
      }
    }
  }, [consent, locale]);

  const save = (c: Consent) => {
    localStorage.setItem(KEY, JSON.stringify(c));
    setConsent(c);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[min(720px,92%)] rounded-2xl bg-white shadow-xl p-4 z-50">
      <div className="mb-2">
        <h3 className="text-lg font-semibold">{t('cookie.title')}</h3>
        <p className="opacity-80">{t('cookie.desc')}</p>
      </div>

      <div className="grid grid-cols-3 gap-3 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked disabled />
          {t('cookie.necessary')}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={consent.analytics}
            onChange={(e) => setConsent((c) => ({...c, analytics: e.target.checked}))}
          />
          {t('cookie.analytics')}
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={consent.marketing}
            onChange={(e) => setConsent((c) => ({...c, marketing: e.target.checked}))}
          />
          {t('cookie.marketing')}
        </label>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <button onClick={() => save({necessary: true, analytics: true, marketing: true})}
                className="px-4 py-2 rounded-xl bg-black text-white">
          {t('cookie.acceptAll')}
        </button>
        <button onClick={() => save({necessary: true, analytics: false, marketing: false})}
                className="px-4 py-2 rounded-xl bg-gray-100">
          {t('cookie.rejectAll')}
        </button>
        <button onClick={() => save(consent)} className="px-4 py-2 rounded-xl bg-white border">
          {t('cookie.manage')}
        </button>
      </div>
    </div>
  );
}
