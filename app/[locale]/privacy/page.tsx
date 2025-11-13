'use client';

import {motion} from 'framer-motion';
import {useLocale} from 'next-intl';

export default function PrivacyPage() {
  const locale = useLocale();
  const isEn = locale === 'en';
  const lastUpdate = new Date().toLocaleDateString(isEn ? 'en-GB' : 'ro-RO');

  return (
    <section className="container-max py-12 md:py-16 prose prose-slate">
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
        <h1 className="text-4xl font-bold text-babyblue mb-6">
          {isEn ? 'Privacy Policy' : 'Politica de confidențialitate'}
        </h1>

        {isEn ? (
          <>
            <p>
              This policy explains how <strong>SC SIMPLE CEC SRL</strong> (“SavePays”, “we”, “the platform”)
              collects, uses and protects the personal data of users of the app and the website{' '}
              <strong>savepays.com</strong>.
            </p>

            <h2>1. Data collected</h2>
            <p>We collect the following types of data:</p>
            <ul>
              <li>Identification data: name, surname, email address, user code (SavePay QR).</li>
              <li>Transactional data: digital receipts, partner stores, amounts and issuing dates.</li>
              <li>Technical data: IP, device type, OS, session and analytics cookies.</li>
            </ul>

            <h2>2. Purpose of processing</h2>
            <ul>
              <li>Creating and managing user accounts.</li>
              <li>Issuing and storing digital receipts for users.</li>
              <li>Analytics and personalised recommendations (AI Refill).</li>
              <li>Service and security-related communications.</li>
            </ul>

            <h2>3. Legal basis</h2>
            <p>
              Processing is based on the user’s <strong>consent</strong> (Art. 6 (1) a GDPR) and on the{' '}
              <strong>legitimate interest</strong> of SavePays to provide the service (Art. 6 (1) f GDPR).
            </p>

            <h2>4. Storage period</h2>
            <p>
              Data is stored for as long as the account exists or until deletion is requested. Some accounting data
              may be retained according to tax law (5–10 years).
            </p>

            <h2>5. User rights</h2>
            <ul>
              <li>Right of access, rectification and erasure.</li>
              <li>Right to data portability and objection.</li>
              <li>Right to withdraw consent at any time.</li>
              <li>
                Right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP –
                dataprotection.ro).
              </li>
            </ul>

            <h2>6. Data sharing</h2>
            <p>
              Data may be shared with IT service providers, payment processors, authorised commercial partners and
              public authorities based on legal obligations. We do not sell data to third parties.
            </p>

            <h2>7. Security</h2>
            <p>
              We use TLS encryption, Firebase authentication and internal measures to prevent unauthorised access to
              data.
            </p>

            <h2>8. Contact</h2>
            <p>
              For any request regarding data protection, contact us at{' '}
              <a href="mailto:contact@savepays.com" className="text-babyblue">
                contact@savepays.com
              </a>
              .
            </p>
          </>
        ) : (
          <>
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
              <strong> interesul legitim</strong> al SavePays de a furniza serviciul (art. 6 alin. 1 lit. f GDPR).
            </p>

            <h2>4. Durata stocării</h2>
            <p>
              Datele sunt păstrate pe durata existenței contului sau până la solicitarea ștergerii. Unele date
              contabile pot fi păstrate conform legislației fiscale (5–10 ani).
            </p>

            <h2>5. Drepturile utilizatorilor</h2>
            <ul>
              <li>Dreptul de acces, rectificare și ștergere a datelor.</li>
              <li>Dreptul la portabilitate și opoziție.</li>
              <li>Dreptul de retragere a consimțământului oricând.</li>
              <li>
                Dreptul de a depune plângere la ANSPDCP (
                <a href="https://www.dataprotection.ro" target="_blank" rel="noreferrer">
                  www.dataprotection.ro
                </a>
                ).
              </li>
            </ul>

            <h2>6. Partajarea datelor</h2>
            <p>
              Datele pot fi partajate cu furnizori de servicii IT, procesatori de plăți, parteneri comerciali
              autorizați și autorități publice în baza obligațiilor legale. Nu vindem datele către terți.
            </p>

            <h2>7. Securitate</h2>
            <p>
              Folosim criptare TLS, autentificare Firebase și măsuri interne pentru a preveni accesul neautorizat la
              date.
            </p>

            <h2>8. Contact</h2>
            <p>
              Pentru orice solicitare privind protecția datelor, ne poți contacta la{' '}
              <a href="mailto:contact@savepays.com" className="text-babyblue">
                contact@savepays.com
              </a>
              .
            </p>
          </>
        )}

        <p className="text-sm text-gray-500 mt-6">
          {isEn ? 'Last update: ' : 'Ultima actualizare: '}
          {lastUpdate}
        </p>
      </motion.div>
    </section>
  );
}
