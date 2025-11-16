'use client'

import Script from 'next/script'
import { hasConsent, onConsentChange } from '@/lib/consent'
import { useEffect, useState } from 'react'

export default function GoogleAnalytics({ gaId }: { gaId?: string }) {
  const [allow, setAllow] = useState<boolean>(() => !!gaId && hasConsent('analytics'))

  useEffect(() => {
    const unsub = onConsentChange(() => {
      setAllow(!!gaId && hasConsent('analytics'))
    })
    // sync inițial (în caz că gaId vine din env asinc)
    setAllow(!!gaId && hasConsent('analytics'))
    return unsub
  }, [gaId])

  if (!allow || !gaId) return null

  return (
    <>
      <Script
        id="ga-init"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  )
}