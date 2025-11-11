export default function Features() {
  const items = [
    { title: 'Zero hârtie', desc: 'Reduci consumul și scapi de bonurile pierdute.' },
    { title: 'Totul la un loc', desc: 'Bonuri, garanții și returnări simplificate.' },
    { title: 'Recomandări smart', desc: 'Refill-uri și produse potrivite ție.' },
    { title: 'Descărcare semnată', desc: 'PDF cu semnătură digitală, când ai nevoie.' },
    { title: 'Pentru parteneri', desc: 'Costuri reduse, loialitate și rapoarte.' },
    { title: 'Eco & Recycle', desc: 'Credit SavePay pentru PET-uri reciclate.' },
  ]
  return (
    <section className="container-max py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Beneficii</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map(i => (
          <div key={i.title} className="card">
            <div className="font-semibold">{i.title}</div>
            <div className="mt-2 text-gray-600">{i.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
