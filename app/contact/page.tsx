import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <section className="container-max py-12 md:py-16 grid md:grid-cols-2 gap-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold">Hai să vorbim</h1>
        <p className="mt-3 text-gray-600">
          Spune-ne cum te putem ajuta — pilot retail, white-label, ONG-uri sau evenimente.
        </p>
        <div className="mt-6 space-y-2 text-gray-700">
          <div>📧 contact@savepays.com</div>
          <div>📍 Ploiești, România</div>
          <div>🕒 Luni–Vineri, 09:00–18:00</div>
        </div>
      </div>

      <div className="card">
        <ContactForm />
      </div>
    </section>
  )
}
