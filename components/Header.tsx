import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="SavePays" className="h-8" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/how-it-works">Cum funcționează</Link>
          <Link href="/partners">Parteneri</Link>
          <Link href="/about">Despre noi</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact" className="btn">Contact</Link>
        </nav>
        <div className="md:hidden">
          <Link href="/contact" className="btn">Contact</Link>
        </div>
      </div>
    </header>
  )
}
