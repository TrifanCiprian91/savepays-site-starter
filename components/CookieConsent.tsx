'use client'

import { useEffect, useState, useCallback } from 'react'
import { readConsent, saveConsent } from '@/lib/consent'

export default function CookieConsent() {
  const [open, setOpen] = useState(false)
  const [prefOpen, setPrefOpen] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  // la mount: dacă nu există consimțământ, deschidem bannerul
  useEffect(() => {
    const c = readConsent()
    if (!c) {
      setOpen(true)
    } else {
      // pre-populează preferințele dacă userul redeschide panoul
      setAnalytics(!!c.analytics)
      setMarketing(!!c.marketing)
    }
  }, [])

  // eveniment global: deschide direct preferințele
  useEffect(() => {
    const handler = () => {
      setOpen(true)
      setPrefOpen(true)
      const c = readConsent()
      if (c) {
        setAnalytics(!!c.analytics)
        setMarketing(!!c.marketing)
      }
    }
    window.addEventListener('open_cookie_prefs', handler)
    return () => window.removeEventListener('open_cookie_prefs', handler)
  }, [])

  // ESC închide doar overlay-ul de preferințe (nu bannerul întreg)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && prefOpen) setPrefOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prefOpen])

  const emitChange = () => window.dispatchEvent(new Event('sp_consent_changed'))

  const acceptAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: true, marketing: true })
    setOpen(false); setPrefOpen(false)
    emitChange()
  }, [])

  const rejectAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: false, marketing: false })
    setOpen(false); setPrefOpen(false)
    emitChange()
  }, [])

  const savePrefs = useCallback(() => {
    saveConsent({ necessary: true, analytics, marketing })
    setOpen(false); setPrefOpen(false)
    emitChange()
  }, [analytics, marketing])

  if (!open) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
      {/* backdrop discret când preferințele sunt deschise */}
      {prefOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px]" />}

      <div className="relative mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white shadow-lg">
        {/* Banner principal */}
        {!prefOpen ? (
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="md:pr-4">
                <div className="font-semibold text-lg">Cookie-uri pe SavePays</div>
                <p className="text-gray-600 text-sm mt-1">
                  Folosim cookie-uri <strong>esențiale</strong> pentru funcționare și (opțional)
                  cookie-uri de <strong>analiză</strong> și <strong>marketing</strong>. Poți schimba setările oricând.
                </p>
                <a href="/cookies" className="text-babyblue text-sm underline mt-2 inline-block">Află mai multe</a>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button onClick={rejectAll} className="btn-ghost" aria-label="Respinge toate cookie-urile neesențiale">
                  Respinge tot
                </button>
                <button onClick={() => setPrefOpen(true)} className="btn-ghost" aria-haspopup="dialog" aria-expanded={prefOpen}>
                  Preferințe
                </button>
                <button onClick={acceptAll} className="btn" aria-label="Acceptă toate cookie-urile">
                  Acceptă tot
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Preferințe
          <div className="p-4 md:p-6" role="dialog" aria-modal="true" aria-label="Preferințe cookies">
            <div className="font-semibold text-lg mb-2">Preferințe cookies</div>

            <div className="rounded-xl border border-gray-200 p-3 mb-3 bg-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">Esențiale</div>
                  <div className="text-sm text-gray-600">
                    Necesare pentru funcționarea site-ului (autentificare, securitate). Nu pot fi dezactivate.
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-200 text-gray-700 select-none">Activ</span>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-3 mb-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">Analitice</div>
                  <div className="text-sm text-gray-600">
                    Ne ajută să înțelegem utilizarea site-ului (ex: Google Analytics).
                  </div>
                </div>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-babyblue"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span className="text-sm">Permite</span>
                </label>
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 p-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-medium">Marketing</div>
                  <div className="text-sm text-gray-600">
                    Cookie-uri pentru măsurare și personalizare reclame (ex: Meta Pixel).
                  </div>
                </div>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-babyblue"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  <span className="text-sm">Permite</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 justify-end mt-4">
              <button onClick={() => setPrefOpen(false)} className="btn-ghost">Înapoi</button>
              <button onClick={rejectAll} className="btn-ghost">Respinge tot</button>
              <button onClick={savePrefs} className="btn">Salvează preferințele</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
