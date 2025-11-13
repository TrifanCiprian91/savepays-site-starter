'use client';

import {useTranslations} from 'next-intl';
import {Link} from '@/navigation';

export default function BlogPage() {
  const t = useTranslations();

  const posts = [
    {
      key: 'p1',
      href: '/blog/1'
    },
    {
      key: 'p2',
      href: '/blog/2'
    },
    {
      key: 'p3',
      href: '/blog/3'
    }
  ].map((p) => ({
    ...p,
    date: t(`blog.posts.${p.key}.date`),
    title: t(`blog.posts.${p.key}.title`),
    desc: t(`blog.posts.${p.key}.desc`),
    cta: t(`blog.posts.${p.key}.cta`)
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold mb-2">{t('blog.title')}</h1>
      <p className="text-lg opacity-80 mb-8">{t('blog.subtitle')}</p>

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <div key={p.key} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-sm opacity-60 mb-2">{p.date}</p>
            <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
            <p className="opacity-80 mb-4">{p.desc}</p>
            <Link
              href={p.href}
              className="inline-block px-4 py-2 rounded-xl bg-babyblue/10 hover:bg-babyblue/20 transition"
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
