'use client';

import {Link} from '@/navigation';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const t = useTranslations();

  return (
    <header className="w-full bg-white/70 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <nav
        className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo SavePay */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg tracking-tight hover:opacity-80 transition"
        >
          <img
            src="/savepays-logo.png"
            alt="SavePays logo"
            className="h-8 w-auto"
          />
          <span>SavePay</span>
        </Link>

        {/* Navigație principală */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <Link href="/about" className="opacity-80 hover:opacity-100 transition">
            {t('nav.about')}
          </Link>
          <Link
            href="/how-it-works"
            className="opacity-80 hover:opacity-100 transition"
          >
            {t('nav.how')}
          </Link>
          <Link
            href="/partners"
            className="opacity-80 hover:opacity-100 transition"
          >
            {t('nav.partners')}
          </Link>
          <Link href="/blog" className="opacity-80 hover:opacity-100 transition">
            {t('nav.blog')}
          </Link>

          {/* CTA Contact */}
          <Link
            href="/contact"
            className="btn btn-ghost border border-babyblue text-babyblue hover:bg-babyblue hover:text-white transition"
          >
            {t('nav.contact')}
          </Link>

          {/* Comutator limbă */}
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  );
}
