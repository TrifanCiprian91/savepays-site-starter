import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/lib/analytics'

export const metadata: Metadata = {
  metadataBase: new URL('https://savepays.com'),
  title: 'SavePays – Bonuri digitale & chitanțe electronice, simplu și eco',
  description:
    'Primești instant chitanțele în aplicație. Fără hârtie, cu istoric organizat și descărcare semnată digital. Pentru utilizatori și comercianți.',
  openGraph: {
    title: 'SavePays – Bonuri digitale & chitanțe electronice',
    description:
      'Primești instant chitanțele în aplicație — sigur, ordonat și eco.',
    url: 'https://savepays.com',
    siteName: 'SavePays',
    images: ['/og-default.jpg'],
    locale: 'ro_RO',
    type: 'website',
  },
  // ✅ forțăm browserele (inclusiv Safari) să ia icon-urile corecte
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  // (opțional) card frumos când pui linkul pe Twitter/X
  twitter: {
    card: 'summary_large_image',
    title: 'SavePays – Bonuri digitale & chitanțe electronice',
    description:
      'Primești instant chitanțele în aplicație — sigur, ordonat și eco.',
    images: ['/og-default.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="ro">
      <body>
        <GoogleAnalytics gaId={GA_ID} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
