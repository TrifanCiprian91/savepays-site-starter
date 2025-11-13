import type {MetadataRoute} from 'next';

const BASE = 'https://savepays.com';

const routes = [
  '',
  '/about',
  '/how-it-works',
  '/partners',
  '/blog',
  '/contact',
  '/(legal)/privacy',
  '/(legal)/terms',
  '/(legal)/cookies'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const locales: ('ro'|'en')[] = ['ro','en'];

  const items: MetadataRoute.Sitemap = [];

  for (const r of routes) {
    const locals = locales.map((l) => ({
      url: `${BASE}/${l}${r}`,
      lastModified: new Date()
    }));

    // principalul (poți dubla pentru fiecare limbă)
    for (const l of locales) {
      items.push({
        url: `${BASE}/${l}${r}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            ro: `${BASE}/ro${r}`,
            en: `${BASE}/en${r}`
          }
        }
      });
    }
  }

  return items;
}
