'use client'

import { motion } from 'framer-motion'

export default function PrivacyPage() {
  return (
    <section className="container-max py-12 md:py-16 prose prose-slate">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-babyblue mb-6">Politica de confidențialitate</h1>
        <p>
          Prezenta politică explică modul în care <strong>SC SIMPLE CEC SRL</strong> („SavePays”, „noi”,
          „platforma”) colectează, utilizează și protejează datele personale ale utilizatorilor aplicației și
          website-ului <strong>savepays.com</strong>.
        </p>

        <h2>1. Date colectate</h2>
        <p>Colectăm următoarele tipuri de date:</p>
        <ul>
          <li>Date de identificare: nume, prenume, adresă de e-mail, cod de utilizator (QR SavePay).</li>
          <li>Date tranzacționale: chitanțe digitale, magazine partenere, sume și date de emitere.</li>
          <li>Date tehnice: IP, tip dispozitiv, sistem de operare, cookies de sesiune și analiză.</li>
        </ul>

        <h2>2. Scopul prelucrării</h2>
        <ul>
          <li>Crearea și administrarea conturilor de utilizator.</li>
          <li>Emiterea și stocarea chitanțelor digitale pentru utilizatori.</li>
          <li>Analize și recomandări personalizate (AI Refill).</li>
          <li>Comunicări legate de servicii și securitate.</li>
        </ul>

        <h2>3. Temeiul legal</h2>
        <p>
          Prelucrarea se bazează pe <strong>consimțământul</strong> utilizatorului (art. 6 alin. 1 lit. a GDPR) și
          <strong>interesul legitim</strong> al SavePays de a furniza serviciul (art. 6 alin. 1 lit. f GDPR).
        </p>

        <h2>4. Durata stocării</h2>
        <p>
          Datele sunt păstrate pe durata existenței contului sau până la solicitarea ștergerii. Unele date contabile
          pot fi păstrate conform legislației fiscale (5-10 ani).
        </p>

        <h2>5. Drepturile utilizatorilor</h2>
        <ul>
          <li>Dreptul de acces, rectificare și ștergere a datelor.</li>
          <li>Dreptul la portabilitate și opoziție.</li>
          <li>Dreptul de retragere a consimțământului oricând.</li>
          <li>Dreptul de a depune plângere la ANSPDCP (www.dataprotection.ro).</li>
        </ul>

        <h2>6. Partajarea datelor</h2>
        <p>
          Datele pot fi partajate cu furnizori de servicii IT, procesatori de plăți, parteneri comerciali autorizați
          și autorități publice în baza obligațiilor legale. Nu vindem datele către terți.
        </p>

        <h2>7. Securitate</h2>
        <p>
          Folosim criptare TLS, autentificare Firebase și măsuri interne pentru a preveni accesul neautorizat la date.
        </p>

        <h2>8. Contact</h2>
        <p>
          Pentru orice solicitare privind protecția datelor, ne poți contacta la:{' '}
          <a href="mailto:contact@savepays.com" className="text-babyblue">
            contact@savepays.com
          </a>
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
        </p>
      </motion.div>
    </section>
  )
}
