'use client';

import Link from 'next/link';
import {useLocale} from 'next-intl';

export default function LocaleSwitcher() {
  const locale = useLocale();

  return (
    <div className="inline-flex items-center gap-2 text-sm">
      <Link
        href="/ro"
        className={
          'px-3 py-1 rounded-xl transition ' +
          (locale === 'ro' ? 'bg-white shadow font-semibold' : 'opacity-70 hover:opacity-100')
        }
      >
        RO
      </Link>

      <Link
        href="/en"
        className={
          'px-3 py-1 rounded-xl transition ' +
          (locale === 'en' ? 'bg-white shadow font-semibold' : 'opacity-70 hover:opacity-100')
        }
      >
        EN
      </Link>
    </div>
  );
}
