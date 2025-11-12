'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const plans = [
  {
    name: 'Starter',
    price: '€0',
    period: '/lună',
    features: [
      'Emitere bon digital (max 100/lună)',
      'Dashboard partener (basic)',
      'Suport prin email',
    ],
    cta: 'Încearcă gratuit',
    href: '/contact'
  },
  {
    name: 'Pro',
    highlight: true,
    price: '€49',
    period: '/lună',
    features: [
      'Bonuri nelimitate',
      'Semnătură digitală la descărcare',
      'Recomandări & refill',
      'Export e-Factura (pregătit)',
      'Suport prioritar',
    ],
    cta: 'Devino partener',
    href: '/contact'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'White-label SavePay',
      'SLA dedicat',
      'Integrare ERP',
      'Multiple locații & rapoarte',
    ],
    cta: 'Cere ofertă',
    href: '/contact'
  },
]

export default function PartnerPlans() {
  return (
    <section className="container-max py-12">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-semibold text-center"
      >
        Planuri pentru parteneri
      </motion.h2>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <motion.div
            key={p.name}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.08)' }}
            className={`card relative ${p.highlight ? 'ring-2 ring-babyblue' : ''}`}
          >
            {p.highlight && (
              <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-babyblue text-white">
                Recomandat
              </div>
            )}
            <div className="font-semibold text-lg">{p.name}</div>
            <div className="mt-2 flex items-end gap-1">
              <div className="text-3xl font-bold">{p.price}</div>
              <div className="text-gray-500">{p.period}</div>
            </div>
            <ul className="mt-4 space-y-2 text-gray-600">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-babyblue">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link href={p.href} className={`btn mt-6 w-full ${p.highlight ? '' : 'btn-ghost'}`}>
              {p.cta}
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
