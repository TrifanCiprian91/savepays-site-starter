'use client'

import Link from 'next/link'
import { useCallback } from 'react'

export default function Footer() {
  const openCookiePrefs = useCallback(() => {
    // deschide direct panoul „Preferințe” din bannerul de cookies
    window.dispatchEvent(new Event('open_cookie_prefs'))
  }, [])

  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container-max py-12 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/savepays-logo.png" alt="SavePays" className="h-10" />
          </div>
          <p className="text-gray-600">Bonurile tale, digital. Simplu, sigur și eco.</p>
        </div>

        <div>
          <div className="font-semibold mb-3">Companie</div>
          <ul className="space-y-2">
            <li><Link className="hover:text-babyblue transition" href="/about">Despre noi</Link></li>
            <li><Link className="hover:text-babyblue transition" href="/partners">Pentru parteneri</Link></li>
            <li><Link className="hover:text-babyblue transition" href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-2">
            <li><Link className="hover:text-babyblue transition" href="/privacy">Confidențialitate</Link></li>
            <li><Link className="hover:text-babyblue transition" href="/terms">Termeni & Condiții</Link></li>
            <li><Link className="hover:text-babyblue transition" href="/cookies">Cookies</Link></li>
            <li>
              <button
                onClick={openCookiePrefs}
                className="underline hover:text-babyblue transition"
                aria-label="Deschide preferințe cookies"
              >
                Preferințe cookies
              </button>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2">
            <li><a className="hover:text-babyblue transition" href="mailto:contact@savepays.com">contact@savepays.com</a></li>
            <li>Ploiești, România</li>
          </ul>
        </div>
      </div>

      <div className="container-max py-6 text-xs text-gray-500 border-t border-gray-100">
        © {new Date().getFullYear()} SavePays. Toate drepturile rezervate.
      </div>
    </footer>
  )
}
