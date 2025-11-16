'use client';

import {useEffect, useState, useCallback} from 'react';
import {readConsent, saveConsent} from '@/lib/consent';
import {useTranslations} from 'next-intl';

export default function CookieConsent() {
  const t = useTranslations('cookies.banner');

  const [open, setOpen] = useState(false);
  const [prefOpen, setPrefOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const c = readConsent();
    if (!c) setOpen(true);
    else {
      setAnalytics(!!c.analytics);
      setMarketing(!!c.marketing);
    }
  }, []);

  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setPrefOpen(true);
      const c = readConsent();
      if (c) {
        setAnalytics(!!c.analytics);
        setMarketing(!!c.marketing);
      }
    };
    window.addEventListener('open_cookie_prefs', handler);
    return () => window.removeEventListener('open_cookie_prefs', handler);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && prefOpen) setPrefOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prefOpen]);

  const emitChange = () => window.dispatchEvent(new Event('sp_consent_changed'));

  const acceptAll = useCallback(() => {
    saveConsent({necessary: true, analytics: true, marketing: true});
    setOpen(false);
    setPrefOpen(false);
    emitChange();
  }, []);

  const rejectAll = useCallback(() => {
    saveConsent({necessary: true, analytics: false, marketing: false});
    setOpen(false);
    setPrefOpen(false);
    emitChange();
  }, []);

  const savePrefs = useCallback(() => {
    saveConsent({necessary: true, analytics, marketing});
    setOpen(false);
    setPrefOpen(false);
    emitChange();
  }, [analytics, marketing]);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      {prefOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px]" />}

      <div className="relative mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white shadow-lg">
        {!prefOpen ? (
          /* ---- BANNER MODE ---- */
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="md:pr-4">
                <div className="font-semibold text-lg">{t('title')}</div>

                <p className="text-gray-600 text-sm mt-1">
                  {t.rich('description', {
                    strong: (chunk) => <strong>{chunk}</strong>,
                  })}
                </p>

                <a href="/cookies" className="text-babyblue text-sm underline mt-2 inline-block">
                  {t('learnMore')}
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button onClick={rejectAll} className="btn-ghost">{t('rejectAll')}</button>
                <button onClick={() => setPrefOpen(true)} className="btn-ghost" aria-haspopup="dialog">
                  {t('preferences')}
                </button>
                <button onClick={acceptAll} className="btn">{t('acceptAll')}</button>
              </div>
            </div>
          </div>
        ) : (
          /* ---- PREFERENCES MODE ---- */
          <div className="p-4 md:p-6" role="dialog" aria-modal="true" aria-label={t('preferencesTitle')}>
            <div className="font-semibold text-lg mb-2">{t('preferencesTitle')}</div>

            {/* ESSENTIAL */}
            <div className="rounded-xl border border-gray-200 p-3 mb-3 bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">{t('essential.title')}</div>
                  <div className="text-sm text-gray-600">{t('essential.desc')}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-700 select-none">
                  {t('active')}
                </span>
              </div>
            </div>

            {/* ANALYTICS */}
            <div className="rounded-xl border border-gray-200 p-3 mb-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">{t('analytics.title')}</div>
                  <div className="text-sm text-gray-600">{t('analytics.desc')}</div>
                </div>

                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-babyblue"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span className="text-sm">{t('allow')}</span>
                </label>
              </div>
            </div>

            {/* MARKETING */}
            <div className="rounded-xl border border-gray-200 p-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">{t('marketing.title')}</div>
                  <div className="text-sm text-gray-600">{t('marketing.desc')}</div>
                </div>

                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-babyblue"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  <span className="text-sm">{t('allow')}</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-end mt-4">
              <button onClick={() => setPrefOpen(false)} className="btn-ghost">{t('back')}</button>
              <button onClick={rejectAll} className="btn-ghost">{t('rejectAll')}</button>
              <button onClick={savePrefs} className="btn">{t('save')}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}