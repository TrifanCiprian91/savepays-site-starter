import {getTranslations} from 'next-intl/server';
import type {Metadata} from 'next';

export async function generateMetadata({
  params
}: {
  params: {locale: string};
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'howItWorks.metadata'
  });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://savepays.com/${params.locale}/how-it-works`
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      url: `https://savepays.com/${params.locale}/how-it-works`,
      siteName: 'SavePays'
    }
  };
}