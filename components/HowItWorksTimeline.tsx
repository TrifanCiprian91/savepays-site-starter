'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function HowItWorksPage() {
  const steps = [
    { n: 1, title: 'QR unic', desc: 'Utilizatorul arată codul QR din aplicație la casă.' },
    { n: 2, title: 'Emitere digitală', desc: 'Partenerul emite bonul, iar SavePays îl salvează în contul tău.' },
    { n: 3, title: 'Semnătură digitală', desc: 'PDF-ul se semnează digital de comerciant când îl descarci.' },
    { n: 4, title: 'Istoric & AI', desc: 'Refill-uri, garanții și recomandări inteligente.' },
  ]

  return (
    <section className="container-max py-16">
      {/* INTRO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Cum funcționează <span className="text-babyblue">SavePays</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Procesul SavePays este simplu și sigur. Scanezi codul tău unic la parteneri și primești chitanța digitală
          în aplicație, semnată digital, arhivată și disponibilă oricând.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto pb-6"
      >
        <div className="min-w-[900px] relative">
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 rounded-full" />
          <div className="grid grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="relative"
              >
                <div className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-babyblue ring-4 ring-white" />
                <div className="card pt-10 text-center">
                  <div className="text-3xl font-bold text-babyblue mb-2">{s.n}</div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="mt-2 text-gray-600 text-sm">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA FINAL */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold">E simplu. E rapid. E SavePays.</h2>
        <p className="mt-2 text-gray-600">
          Încearcă versiunea pilot sau discută cu echipa noastră pentru integrarea în magazinul tău.
        </p>
        <a href="/contact" className="btn mt-4">Devino partener</a>
      </motion.div>
    </section>
  )
}
