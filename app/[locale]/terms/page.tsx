'use client';

import {motion} from 'framer-motion';
import {useLocale} from 'next-intl';

function TermsContentRo() {
  return (
    <>
      <h1 className="text-4xl font-bold text-babyblue mb-6">
        Termeni și condiții de utilizare
      </h1>

      <p>
        Accesarea platformei <strong>SavePays</strong> presupune acceptarea prezentelor termeni
        și condiții. Prin utilizarea aplicației, confirmați că ați citit și înțeles regulile de mai jos.
      </p>

      <h2>1. Descrierea serviciului</h2>
      <p>
        SavePays este o aplicație digitală care oferă utilizatorilor posibilitatea de a primi și
        stoca chitanțe electronice de la comercianți parteneri, prin intermediul unui cod QR unic.
      </p>

      <h2>2. Înregistrare și cont</h2>
      <p>
        Crearea unui cont presupune furnizarea unor date corecte și actuale. Utilizatorul este
        responsabil pentru confidențialitatea datelor de autentificare și pentru activitățile
        desfășurate în cont.
      </p>

      <h2>3. Obligațiile utilizatorului</h2>
      <ul>
        <li>Să folosească aplicația conform legii și bunelor practici.</li>
        <li>Să nu încerce accesarea sau modificarea sistemului SavePays fără autorizație.</li>
        <li>Să respecte drepturile de proprietate intelectuală ale platformei.</li>
      </ul>

      <h2>4. Obligațiile SavePays</h2>
      <p>
        SavePays asigură funcționarea serviciului, protejarea datelor și informarea utilizatorilor
        cu privire la schimbările majore. Nu garantăm disponibilitatea continuă în cazuri de forță
        majoră sau lucrări tehnice.
      </p>

      <h2>5. Proprietate intelectuală</h2>
      <p>
        Toate materialele (texte, logo-uri, cod sursă, design) sunt proprietatea SavePays și nu pot
        fi reproduse fără acordul scris al deținătorului.
      </p>

      <h2>6. Limitarea răspunderii</h2>
      <p>
        SavePays nu este responsabil pentru pierderile rezultate din utilizarea necorespunzătoare a
        aplicației sau a datelor furnizate de comercianți.
      </p>

      <h2>7. Modificări ale termenilor</h2>
      <p>
        SavePays își rezervă dreptul de a modifica acești termeni oricând. Modificările devin
        efective de la publicarea pe site.
      </p>

      <p className="text-sm text-gray-500 mt-6">
        Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
      </p>
    </>
  );
}

function TermsContentEn() {
  return (
    <>
      <h1 className="text-4xl font-bold text-babyblue mb-6">
        Terms and conditions of use
      </h1>

      <p>
        Accessing the <strong>SavePays</strong> platform implies acceptance of these terms and
        conditions. By using the app, you confirm that you have read and understood the rules below.
      </p>

      <h2>1. Service description</h2>
      <p>
        SavePays is a digital application that allows users to receive and store electronic receipts
        from partner merchants, using a unique QR code.
      </p>

      <h2>2. Registration and account</h2>
      <p>
        Creating an account requires providing accurate and up-to-date information. The user is
        responsible for keeping their login credentials confidential and for all activities
        performed in their account.
      </p>

      <h2>3. User obligations</h2>
      <ul>
        <li>Use the app in accordance with the law and good practices.</li>
        <li>Do not attempt to access or modify the SavePays system without authorization.</li>
        <li>Respect the platform&apos;s intellectual property rights.</li>
      </ul>

      <h2>4. SavePays obligations</h2>
      <p>
        SavePays ensures the operation of the service, the protection of data and informs users
        about major changes. We do not guarantee continuous availability in cases of force majeure
        or technical maintenance.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        All materials (texts, logos, source code, design) are the property of SavePays and may not
        be reproduced without the written consent of the owner.
      </p>

      <h2>6. Limitation of liability</h2>
      <p>
        SavePays is not liable for losses resulting from improper use of the app or of the data
        provided by merchants.
      </p>

      <h2>7. Changes to these terms</h2>
      <p>
        SavePays reserves the right to change these terms at any time. Changes become effective
        once published on the website.
      </p>

      <p className="text-sm text-gray-500 mt-6">
        Last updated: {new Date().toLocaleDateString('en-GB')}
      </p>
    </>
  );
}

export default function TermsPage() {
  const locale = useLocale();
  const isEn = locale === 'en';

  return (
    <section className="container-max py-12 md:py-16 prose prose-slate">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
      >
        {isEn ? <TermsContentEn /> : <TermsContentRo />}
      </motion.div>
    </section>
  );
}
