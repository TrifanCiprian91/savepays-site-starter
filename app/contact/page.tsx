export const metadata = { title: 'Contact – SavePays' }
export default function Contact() {
  return (
    <section className="container-max py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-gray-600">Completează formularul și revenim în cel mai scurt timp.</p>
      <form className="mt-6 grid md:grid-cols-2 gap-4" action="https://formspree.io/f/xovyqwga" method="POST">
        <input className="h-12 rounded-xl border px-4" name="nume" placeholder="Nume" required/>
        <input className="h-12 rounded-xl border px-4" name="email" type="email" placeholder="Email" required/>
        <textarea className="rounded-xl border p-4 md:col-span-2" name="mesaj" placeholder="Mesaj"></textarea>
        <button className="btn md:col-span-2" type="submit">Trimite</button>
      </form>
      <div className="mt-8 text-sm text-gray-600">
        Email: contact@savepays.com<br/>Locație: Ploiești, România
      </div>
    </section>
  )
}
