import Link from 'next/link'

export default function CTA() {
  return (
    <section className="container-max py-16 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold">Ești gata să încerci SavePays?</h2>
      <p className="mt-2 text-gray-600">Descarcă aplicația sau devino partener chiar azi.</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Link href="#" className="btn">Descarcă aplicația</Link>
        <Link href="/partners" className="btn-ghost">Devino partener</Link>
      </div>
    </section>
  )
}
