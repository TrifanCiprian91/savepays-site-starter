// app/[locale]/blog/[slug]/page.tsx
import {notFound} from 'next/navigation';

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
};

// Mini-dată hardcodată, ca să putem genera static paginile.
// Poți muta asta ulterior într-un fișier separat sau într-un CMS.
const postsByLocale: Record<string, BlogPost[]> = {
  ro: [
    {
      slug: 'de-ce-savepay',
      title: 'De ce SavePay: chitanțe digitale și loialitate într-un singur loc',
      excerpt: 'Află cum te ajută SavePay să scapi de bonurile de hârtie și să câștigi beneficii la fiecare cumpărătură.',
      content: `SavePay îți centralizează toate bonurile într-o singură aplicație, printr-un cod QR unic. 
Nu mai cauți bonuri prin portofel sau poze vechi, iar în același timp poți beneficia de programe de loialitate, cashback și oferte personalizate.`
    }
  ],
  en: [
    {
      slug: 'why-savepay',
      title: 'Why SavePay: digital receipts & loyalty in one place',
      excerpt: 'Discover how SavePay helps you get rid of paper receipts and earn rewards with every purchase.',
      content: `SavePay centralizes all your receipts in one app, using a unique QR code. 
You no longer have to search through your wallet or gallery for receipts, while also accessing loyalty programs, cashback and tailored offers.`
    }
  ]
};

export async function generateStaticParams() {
  const locales = ['ro', 'en'];

  const params: {locale: string; slug: string}[] = [];

  for (const locale of locales) {
    const posts = postsByLocale[locale] ?? [];
    for (const post of posts) {
      params.push({locale, slug: post.slug});
    }
  }

  return params;
}

export default function BlogPostPage({
  params
}: {
  params: {locale: string; slug: string};
}) {
  const {locale, slug} = params;

  const posts = postsByLocale[locale] ?? [];
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="container-max py-12 md:py-16">
      <article className="max-w-3xl">
        <p className="text-sm text-gray-500 mb-2">
          {locale === 'ro' ? 'Articol de blog' : 'Blog article'}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          {post!.title}
        </h1>
        <p className="text-lg text-gray-600 mb-8">{post!.excerpt}</p>
        <div className="prose prose-slate">
          {post!.content.split('\n').map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </article>
    </section>
  );
}
