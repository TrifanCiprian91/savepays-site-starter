// components/Hero.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="container-max py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Bonurile tale, <span className="text-babyblue">digital</span>.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Scanezi, plătești și primești instant chitanța în aplicație — sigur, ordonat și eco.
        </p>
        <div className="mt-8 flex gap-3">
          <Link href="#" className="btn">Descarcă aplicația</Link>
          <Link href="/partners" className="btn-ghost">Devino partener</Link>
        </div>
        <div className="mt-6 flex gap-3">
          <img src="/appstore-badge.svg" alt="App Store" className="h-14" />
          <img src="/play-badge.svg" alt="Google Play" className="h-14" />
        </div>
        <div className="mt-4 text-sm text-gray-500">
          Deja pregătit pentru comercianți, ONG-uri și evenimente.
        </div>
      </div>

      {/* Mockup aplicație */}
      <div className="card p-3 md:p-4">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/mockup-app.png"
            alt="Cardul meu SavePay – mockup"
            width={900}  // Next optimizează, se scalează automat
            height={1600}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
