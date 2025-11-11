export default function Steps() {
  const steps = [
    { n: 1, t: 'Scanezi QR-ul tău unic la casă.', d: 'Partenerul scanează codul, iar chitanța se trimite digital.' },
    { n: 2, t: 'Primești chitanța digital, semnată.', d: 'Ai toate bonurile într-un singur loc, gata de căutare.' },
    { n: 3, t: 'Istoric inteligent & recomandări.', d: 'Refill-uri, garanții, descărcare PDF cu semnătură.' },
  ]
  return (
    <section className="container-max py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">Cum funcționează</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {steps.map(s => (
          <div key={s.n} className="card">
            <div className="text-babyblue font-bold text-3xl">{s.n}</div>
            <div className="mt-2 font-semibold">{s.t}</div>
            <div className="mt-2 text-gray-600">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
