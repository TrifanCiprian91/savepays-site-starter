export const metadata = { title: 'Cum funcționează – SavePays' }
export default function HowItWorks() {
  return (
    <section className="container-max py-12">
      <h1 className="text-3xl font-semibold">Cum funcționează</h1>
      <p className="mt-4 text-gray-600">3 pași simpli: scanezi, primești chitanța, ai istoricul organizat. Adaugă aici video/gif demo.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="card"><div className="font-semibold">1. Scanezi QR</div><p className="mt-2 text-gray-600">Codul tău unic e scanat la casă.</p></div>
        <div className="card"><div className="font-semibold">2. Primești digital</div><p className="mt-2 text-gray-600">Chitanța apare instant în aplicație.</p></div>
        <div className="card"><div className="font-semibold">3. Istoric & PDF</div><p className="mt-2 text-gray-600">Căutare, garanții, descărcare cu semnătură.</p></div>
      </div>
      <div className="mt-8 card"><div className="font-semibold">Întrebări frecvente</div><ul className="mt-2 list-disc ml-5 text-gray-600"><li>Este gratuit pentru utilizatori?</li><li>Ce parteneri sunt disponibili?</li><li>Pot exporta bonurile?</li></ul></div>
    </section>
  )
}
