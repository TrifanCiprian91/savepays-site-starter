'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="container-max py-16 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-semibold">Ești gata să încerci SavePays?</h2>
      <p className="mt-2 text-gray-600">Descarcă aplicația sau devino partener chiar azi.</p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="#" className="btn">Descarcă aplicația</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/partners" className="btn-ghost">Devino partener</Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
