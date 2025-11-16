export const dynamicParams = false;

import { notFound } from 'next/navigation';

const posts: Record<
  string,
  { title: string; content: string; date: string }
> = {
  'de-ce-bonuri-digitale': {
    title: 'De ce bonuri digitale în 2025',
    date: '2025-11-10',
    content:
      'Bonurile digitale reduc costurile, elimină risipa de hârtie și cresc transparența...'
  },
  'cum-functioneaza-savepays': {
    title: 'Cum funcționează SavePays',
    date: '2025-11-08',
    content: 'Utilizatorii au un cod QR unic...'
  },
  'pilot-pentru-retail': {
    title: 'Pilot pentru retail: pașii de integrare',
    date: '2025-11-05',
    content: 'Pornim cu analiza fluxului de plată...'
  }
};

export default function BlogPost({
  params
}: {
  params: { locale: string; slug: string };
}) {
  const post = posts[params.slug];
  if (!post) return notFound();

  const formattedDate = new Date(post.date).toLocaleDateString(
    params.locale === 'ro' ? 'ro-RO' : 'en-US'
  );

  return (
    <section className="container-max py-12 md:py-16">
      <div className="text-xs text-gray-500">{formattedDate}</div>

      <h1 className="text-3xl md:text-4xl font-semibold mt-2">{post.title}</h1>

      <article className="prose prose-slate mt-6 max-w-none">
        <p>{post.content}</p>
      </article>

      <a
        href={`/${params.locale}/blog`}
        className="btn-ghost mt-6 inline-flex"
      >
        ← Înapoi la blog
      </a>
    </section>
  );
}