'use client';

import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useLocale, useTranslations} from 'next-intl';

export default function Header() {
  const pathname = usePathname();       // ex: /ro/about
  const locale = useLocale();           // ro / en
  const t = useTranslations('header');  // secțiunea "header" din messages

  // limba opusă pentru switcher
  const otherLocale = locale === 'ro' ? 'en' : 'ro';

  // înlocuim DOAR prefixul /ro → /en
  const switchHref =
    pathname === `/${locale}`
      ? `/${otherLocale}`
      : pathname.replace(`/${locale}/`, `/${otherLocale}/`);

  return (
    <header className="border-b border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="container-max flex h-16 items-center justify-between">
        
        {/* LOGO */}
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <img src="/savepays-logo.png" alt="SavePays" className="h-10" />
        </Link>

        {/* NAV DESKTOP */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href={`/${locale}/how-it-works`} className="hover:text-babyblue transition">
            {t('how')}
          </Link>
          <Link href={`/${locale}/partners`} className="hover:text-babyblue transition">
            {t('partners')}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-babyblue transition">
            {t('about')}
          </Link>
          <Link href={`/${locale}/blog`} className="hover:text-babyblue transition">
            {t('blog')}
          </Link>
          <Link href={`/${locale}/contact`} className="btn">
            {t('contact')}
          </Link>
        </nav>

        {/* LANGUAGE SWITCH */}
        <div className="flex items-center gap-4">
          <Link
            href={switchHref}
            className="text-sm font-medium underline hover:text-babyblue"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </div>
    </header>
  );
}