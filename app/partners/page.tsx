export const metadata = { title: 'Pentru parteneri – SavePays' }
export default function Partners() {
  return (
    <section className="container-max py-12">
      <h1 className="text-3xl font-semibold">Pentru parteneri</h1>
      <p className="mt-4 text-gray-600">Reduceți costurile cu hârtia, fidelizați clienții și accesați rapoarte în timp real.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="card"><div className="font-semibold">Basic</div><div className="text-3xl font-bold mt-2">49€</div><div className="text-sm text-gray-600 mt-2">Emitere chitanțe, dashboard, suport email</div></div>
        <div className="card border-2 border-babyblue"><div className="font-semibold">Pro</div><div className="text-3xl font-bold mt-2">149€</div><div className="text-sm text-gray-600 mt-2">API, branding, rapoarte avansate</div></div>
        <div className="card"><div className="font-semibold">Enterprise</div><div className="text-3xl font-bold mt-2">Custom</div><div className="text-sm text-gray-600 mt-2">SSO, SLA, integrare ERP, white-label</div></div>
      </div>
      <div className="mt-8 card">
        <div className="font-semibold">Cere un demo</div>
        <form className="mt-4 grid md:grid-cols-2 gap-4" action="https://formspree.io/f/mvgdorek" method="POST">
          <input className="h-12 rounded-xl border px-4" name="nume" placeholder="Nume" required/>
          <input className="h-12 rounded-xl border px-4" name="companie" placeholder="Companie"/>
          <input className="h-12 rounded-xl border px-4" name="email" type="email" placeholder="Email" required/>
          <input className="h-12 rounded-xl border px-4" name="telefon" placeholder="Telefon"/>
          <textarea className="rounded-xl border p-4 md:col-span-2" name="mesaj" placeholder="Mesaj"></textarea>
          <button className="btn md:col-span-2" type="submit">Trimite</button>
        </form>
        <p className="text-xs text-gray-500 mt-2">* Formular prin Formspree (gratuit). Înlocuiește <code>your-form-id</code> cu ID-ul tău.</p>
      </div>
    </section>
  )
}
