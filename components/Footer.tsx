'use client';

import {useCallback} from 'react';
import {useLocale} from 'next-intl';
import {Link} from '@/navigation';

export default function Footer() {
  const locale = useLocale();
  const isEn = locale === 'en';

  const openCookiePrefs = useCallback(() => {
    window.dispatchEvent(new Event('open_cookie_prefs'));
  }, []);

  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container-max py-12 grid md:grid-cols-4 gap-8 text-sm">
        {/* Logo + tagline */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="/savepays-logo.png"
              alt="SavePays logo"
              className="h-8 w-auto"
            />
            <span className="font-semibold text-lg tracking-tight">SavePay</span>
          </div>
          <p className="text-gray-600">
            {isEn
              ? 'Your receipts, digital. Simple, secure and eco-friendly.'
              : 'Bonurile tale, digital. Simplu, sigur și eco.'}
          </p>
        </div>

        {/* Company */}
        <div>
          <div className="font-semibold mb-3">
            {isEn ? 'Company' : 'Companie'}
          </div>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-babyblue transition" href="/about">
                {isEn ? 'About us' : 'Despre noi'}
              </Link>
            </li>
            <li>
              <Link className="hover:text-babyblue transition" href="/partners">
                {isEn ? 'For partners' : 'Pentru parteneri'}
              </Link>
            </li>
            <li>
              <Link className="hover:text-babyblue transition" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-2">
            <li>
              <Link className="hover:text-babyblue transition" href="/privacy">
                {isEn ? 'Privacy' : 'Confidențialitate'}
              </Link>
            </li>
            <li>
              <Link className="hover:text-babyblue transition" href="/terms">
                {isEn ? 'Terms & Conditions' : 'Termeni & Condiții'}
              </Link>
            </li>
            <li>
              <Link className="hover:text-babyblue transition" href="/cookies">
                Cookies
              </Link>
            </li>
            <li>
              <button
                onClick={openCookiePrefs}
                className="underline hover:text-babyblue transition"
                aria-label={
                  isEn ? 'Open cookie preferences' : 'Deschide preferințe cookies'
                }
              >
                {isEn ? 'Cookie preferences' : 'Preferințe cookies'}
              </button>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold mb-3">
            {isEn ? 'Contact' : 'Contact'}
          </div>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:text-babyblue transition"
                href="mailto:contact@savepays.com"
              >
                contact@savepays.com
              </a>
            </li>
            <li>{isEn ? 'Ploiești, Romania' : 'Ploiești, România'}</li>
          </ul>
        </div>
      </div>

      <div className="container-max py-6 text-xs text-gray-500 border-t border-gray-100">
        {isEn
          ? `© ${new Date().getFullYear()} SavePays. All rights reserved.`
          : `© ${new Date().getFullYear()} SavePays. Toate drepturile rezervate.`}
      </div>
    </footer>
  );
}
