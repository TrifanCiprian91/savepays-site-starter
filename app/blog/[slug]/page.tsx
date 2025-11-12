'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const posts: Record<string, { title: string; content: string; date: string }> = {
  'de-ce-bonuri-digitale': {
    title: 'De ce bonuri digitale în 2025',
    date: '2025-11-10',
    content:
      'Bonurile digitale reduc costurile, elimină risipa de hârtie și cresc transparența. SavePays oferă emitere rapidă, semnătură digitală la descărcare și un istoric clar pentru clienți.',
  },
  'cum-functioneaza-savepays': {
    title: 'Cum funcționează SavePays',
    date: '2025-11-08',
    content:
      'Utilizatorii au un cod QR unic. La casă, partenerul scanează și emite chitanța digitală. Documentul se salvează în aplicație, iar la descărcare se atașează semnătura digitală a comerciantului.',
  },
  'pilot-pentru-retail': {
    title: 'Pilot pentru retail: pașii de integrare',
    date: '2025-11-05',
    content:
      'Pornim cu analiza fluxului de plată, configurăm API-ul de emitere, testăm în sandbox și în 7 zile putem rula pilotul în prima locație.',
  },
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = posts[slug]

  if (!post) {
    return (
      <section className="container-max py-12">
        <h1 className="text-2xl font-semibold">Articolul nu a fost găsit</h1>
        <Link className="btn-ghost mt-4 inline-flex" href="/blog">Înapoi la blog</Link>
      </section>
    )
  }

  return (
    <section className="container-max py-12 md:py-16">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
        <div className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString('ro-RO')}</div>
        <h1 className="text-3xl md:text-4xl font-semibold mt-2">{post.title}</h1>
        <article className="prose prose-slate mt-6 max-w-none">
          <p>{post.content}</p>
        </article>
        <Link className="btn-ghost mt-6 inline-flex" href="/blog">← Înapoi la blog</Link>
      </motion.div>
    </section>
  )
}
