'use client'

import { motion } from 'framer-motion'

export default function CookiesPage() {
  return (
    <section className="container-max py-12 md:py-16 prose prose-slate">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-babyblue mb-6">Politica privind fișierele Cookies</h1>

        <p>
          Site-ul <strong>savepays.com</strong> utilizează fișiere cookie pentru a oferi o experiență mai bună,
          pentru analiză statistică și funcționalități esențiale. Prin continuarea navigării, îți exprimi acordul
          pentru utilizarea lor conform acestei politici.
        </p>

        <h2>1. Ce sunt cookie-urile?</h2>
        <p>
          Cookie-urile sunt fișiere text mici stocate în browserul tău atunci când accesezi un website. Acestea
          permit recunoașterea dispozitivului și îmbunătățirea navigării.
        </p>

        <h2>2. Tipuri de cookie folosite</h2>
        <ul>
          <li><strong>Cookie-uri esențiale</strong> – necesare pentru funcționarea platformei.</li>
          <li><strong>Cookie-uri de analiză</strong> – pentru statistici anonime (ex: Google Analytics).</li>
          <li><strong>Cookie-uri de preferință</strong> – salvează limba și preferințele utilizatorului.</li>
        </ul>

        <h2>3. Gestionarea cookie-urilor</h2>
        <p>
          Poți controla și șterge cookie-urile din setările browserului. Dezactivarea lor poate afecta funcționalitatea
          site-ului.
        </p>

        <h2>4. Instrumente terțe</h2>
        <p>
          SavePays poate utiliza servicii precum Google Analytics, Firebase sau Meta Pixel pentru analiză și
          performanță. Aceste servicii pot plasa propriile cookie-uri.
        </p>

        <h2>5. Contact</h2>
        <p>
          Pentru detalii despre utilizarea cookie-urilor, scrie-ne la{' '}
          <a href="mailto:contact@savepays.com" className="text-babyblue">
            contact@savepays.com
          </a>.
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
        </p>
      </motion.div>
    </section>
  )
}
