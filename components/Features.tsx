'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Features() {
  // poți adăuga/edita oricâte beneficii vrei
  const items = [
    {
      title: 'Fără hârtie',
      desc: 'Bonurile tale sunt salvate digital, fără risipă.',
    },
    { title: 'Totul la un loc', desc: 'Bonuri, garanții și returnări simplificate.' },
    { title: 'Recomandări smart', desc: 'Refill-uri și produse potrivite ție.' },
    { title: 'Descărcare semnată', desc: 'PDF cu semnătură digitală, când ai nevoie.' },
    { title: 'Pentru parteneri', desc: 'Costuri reduse, loialitate și rapoarte.' },
    { title: 'Eco & Recycle', desc: 'Credit SavePay pentru PET-uri reciclate.' },
  ]

  return (
    <section className="container-max py-12">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold text-center"
      >
        Beneficii
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {/* —— Cardul tău exact, ca exemplu ————————————————————————— */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="card hover:shadow-lg hover:-translate-y-2 transition-all"
        >
          <h3 className="font-semibold text-lg">Fără hârtie</h3>
          <p className="text-gray-600 mt-2">Bonurile tale sunt salvate digital, fără risipă.</p>
        </motion.div>
        {/* —— Restul cardurilor dinamice ————————————————————————— */}
        {items.slice(1).map((i) => (
          <motion.div
            key={i.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.06)' }}
            className="card transition-all"
          >
            <div className="font-semibold text-lg">{i.title}</div>
            <div className="mt-2 text-gray-600">{i.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
