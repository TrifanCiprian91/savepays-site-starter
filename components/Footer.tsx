import Link from 'next/link'

export default function Footer() {
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
            <li><Link href="/about">Despre noi</Link></li>
            <li><Link href="/partners">Pentru parteneri</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Legal</div>
          <ul className="space-y-2">
            <li><Link href="/privacy">Confidențialitate</Link></li>
            <li><Link href="/terms">Termeni & Condiții</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2">
            <li>contact@savepays.com</li>
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
