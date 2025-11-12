'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const subject = String(data.get('subject') || 'Mesaj nou')
    const message = String(data.get('message') || '')

    // fallback: deschidem clientul de mail cu precompletare
    const mailto = `mailto:contact@savepays.com?subject=${encodeURIComponent(
      `[SavePays] ${subject}`
    )}&body=${encodeURIComponent(`Nume: ${name}\nEmail: ${email}\n\n${message}`)}`
    setLoading(true)
    window.location.href = mailto
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      ;(e.currentTarget as HTMLFormElement).reset()
    }, 800)
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-4"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600">Nume</label>
          <input name="name" required className="input" placeholder="Numele tău" />
        </div>
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input type="email" name="email" required className="input" placeholder="nume@email.com" />
        </div>
      </div>
      <div>
        <label className="text-sm text-gray-600">Subiect</label>
        <input name="subject" className="input" placeholder="Ex: Pilot retail în 3 locații" />
      </div>
      <div>
        <label className="text-sm text-gray-600">Mesaj</label>
        <textarea name="message" className="input min-h-[140px]" placeholder="Spune-ne pe scurt ce îți dorești …" />
      </div>

      <button className="btn w-full md:w-auto" type="submit" disabled={loading}>
        {loading ? 'Se trimite…' : 'Trimite mesajul'}
      </button>

      {sent && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2"
        >
          Mulțumim! Deschidem clientul tău de email pentru trimitere.
        </motion.div>
      )}
    </motion.form>
  )
}
