'use client'

import { motion } from 'framer-motion'

export default function TermsPage() {
  return (
    <section className="container-max py-12 md:py-16 prose prose-slate">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold text-babyblue mb-6">Termeni și condiții de utilizare</h1>

        <p>
          Accesarea platformei <strong>SavePays</strong> presupune acceptarea prezentelor termeni și condiții. Prin
          utilizarea aplicației, confirmați că ați citit și înțeles regulile de mai jos.
        </p>

        <h2>1. Descrierea serviciului</h2>
        <p>
          SavePays este o aplicație digitală care oferă utilizatorilor posibilitatea de a primi și stoca chitanțe
          electronice de la comercianți parteneri, prin intermediul unui cod QR unic.
        </p>

        <h2>2. Înregistrare și cont</h2>
        <p>
          Crearea unui cont presupune furnizarea unor date corecte și actuale. Utilizatorul este responsabil pentru
          confidențialitatea datelor de autentificare și activitățile desfășurate în cont.
        </p>

        <h2>3. Obligațiile utilizatorului</h2>
        <ul>
          <li>Să folosească aplicația conform legii și bunelor practici.</li>
          <li>Să nu încerce accesarea sau modificarea sistemului SavePays fără autorizație.</li>
          <li>Să respecte drepturile de proprietate intelectuală ale platformei.</li>
        </ul>

        <h2>4. Obligațiile SavePays</h2>
        <p>
          SavePays asigură funcționarea serviciului, protejarea datelor și informarea utilizatorilor cu privire la
          schimbările majore. Nu garantăm disponibilitatea continuă, în cazuri de forță majoră sau lucrări tehnice.
        </p>

        <h2>5. Proprietate intelectuală</h2>
        <p>
          Toate materialele (texte, logo-uri, cod sursă, design) sunt proprietatea SavePays și nu pot fi reproduse
          fără acordul scris al deținătorului.
        </p>

        <h2>6. Limitarea răspunderii</h2>
        <p>
          SavePays nu este responsabil pentru pierderile rezultate din utilizarea necorespunzătoare a aplicației sau a
          datelor furnizate de comercianți.
        </p>

        <h2>7. Modificări ale termenilor</h2>
        <p>
          SavePays își rezervă dreptul de a modifica acești termeni oricând. Modificările devin efective de la
          publicarea pe site.
        </p>

        <p className="text-sm text-gray-500 mt-6">
          Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
        </p>
      </motion.div>
    </section>
  )
}
