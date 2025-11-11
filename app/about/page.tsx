export const metadata = { title: 'Despre noi – SavePays' }
export default function About() {
  return (
    <section className="container-max py-12">
      <h1 className="text-3xl font-semibold">Despre noi</h1>
      <p className="mt-4 text-gray-600">Misiunea noastră: să digitalizăm chitanțele și să oferim control utilizatorilor și partenerilor, reducând risipa de hârtie.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="card"><div className="font-semibold">Eco</div><div className="mt-2 text-gray-600">Mai puțină hârtie, mai multă responsabilitate.</div></div>
        <div className="card"><div className="font-semibold">Siguranță</div><div className="mt-2 text-gray-600">Date protejate, proceduri GDPR.</div></div>
        <div className="card"><div className="font-semibold">Inovație</div><div className="mt-2 text-gray-600">AI pentru recomandări și refill.</div></div>
      </div>
    </section>
  )
}
