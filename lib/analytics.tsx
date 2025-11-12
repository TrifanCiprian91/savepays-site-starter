'use client'

import Script from 'next/script'
import { hasConsent, onConsentChange } from './consent'

import { useEffect, useState } from 'react'

export default function GoogleAnalytics({ gaId }: { gaId?: string }) {
  const [allow, setAllow] = useState<boolean>(() => !!gaId && hasConsent('analytics'))

  useEffect(() => {
    // când se schimbă consimțământul, recalculează “allow”
    const unsub = onConsentChange(() => {
      setAllow(!!gaId && hasConsent('analytics'))
    })
    // dacă se schimbă gaId la runtime (rar), resinc
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
