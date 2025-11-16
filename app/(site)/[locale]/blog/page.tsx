import {useLocale} from 'next-intl';

const posts = [
  {
    slug: 'de-ce-bonuri-digitale',
    title: 'De ce bonuri digitale în 2025',
    excerpt:
      'Beneficii pentru utilizatori, comercianți și mediu. Cum ne pregătim pentru digitalizare.',
    date: '2025-11-10'
  },
  {
    slug: 'cum-functioneaza-savepays',
    title: 'Cum funcționează SavePays',
    excerpt:
      'QR unic, emitere digitală, semnătură la descărcare și istoric inteligent.',
    date: '2025-11-08'
  },
  {
    slug: 'pilot-pentru-retail',
    title: 'Pilot pentru retail: pașii de integrare',
    excerpt:
      'Ce presupune un pilot SavePays în magazinul tău și cum îl pornim în 7 zile.',
    date: '2025-11-05'
  }
];

export default function BlogIndex() {
  const locale = useLocale();

  return (
    <section className="container-max py-12 md:py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Blogul <span className="text-babyblue">SavePays</span>
      </h1>

      <p className="mt-3 text-gray-600 max-w-2xl">
        Noutăți despre digitalizarea bonurilor, legislație, integrare și povești din pilot.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="card">
            <div className="text-xs text-gray-500">
              {new Date(p.date).toLocaleDateString(
                locale === 'ro' ? 'ro-RO' : 'en-US'
              )}
            </div>

            <h2 className="mt-2 font-semibold text-lg">{p.title}</h2>
            <p className="mt-2 text-gray-600 text-sm">{p.excerpt}</p>

            <a
              href={`/${locale}/blog/${p.slug}`}
              className="btn-ghost mt-4 inline-flex"
            >
              Citește
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}