'use client';

import Link from 'next/link';
import {useCallback} from 'react';
import {useTranslations, useLocale} from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');   // 👉 secțiunea "footer" din messages
  const locale = useLocale();           // 👉 limba curentă (ro/en)

  const openCookiePrefs = useCallback(() => {
    window.dispatchEvent(new Event('open_cookie_prefs'));
  }, []);

  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container-max py-12 grid md:grid-cols-4 gap-8 text-sm">
        
        {/* COLUMN 1 — LOGO + SHORT TEXT */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/savepays-logo.png" alt="SavePays" className="h-10" />
          </div>
          <p className="text-gray-600">{t('tagline')}</p>
        </div>

        {/* COLUMN 2 — COMPANY */}
        <div>
          <div className="font-semibold mb-3">{t('company.title')}</div>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-babyblue transition" href={`/${locale}/about`}>
                {t('company.about')}
              </Link>
            </li>
            <li>
              <Link className="hover:text-babyblue transition" href={`/${locale}/partners`}>
                {t('company.partners')}
              </Link>
            </li>
            <li>
              <Link className="hover:text-babyblue transition" href={`/${locale}/blog`}>
                {t('company.blog')}
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 — LEGAL */}
        <div>
          <div className="font-semibold mb-3">{t('legal.title')}</div>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-babyblue transition" href={`/${locale}/privacy`}>
                {t('legal.privacy')}
              </Link>
            </li>
            <li>
              <Link className="hover:text-babyblue transition" href={`/${locale}/terms`}>
                {t('legal.terms')}
              </Link>
            </li>
            <li>
              <Link className="hover:text-babyblue transition" href={`/${locale}/cookies`}>
                {t('legal.cookies')}
              </Link>
            </li>
            <li>
              <button
                onClick={openCookiePrefs}
                className="underline hover:text-babyblue transition"
                aria-label={t('legal.cookiePrefsAria')}
              >
                {t('legal.cookiePrefs')}
              </button>
            </li>
          </ul>
        </div>

        {/* COLUMN 4 — CONTACT */}
        <div>
          <div className="font-semibold mb-3">{t('contact.title')}</div>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-babyblue transition" href="mailto:contact@savepays.com">
                contact@savepays.com
              </a>
            </li>
            <li>{t('contact.location')}</li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="container-max py-6 text-xs text-gray-500 border-t border-gray-100">
        © {new Date().getFullYear()} SavePays. {t('rights')}.
      </div>
    </footer>
  );
}