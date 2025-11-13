'use client';

import {motion} from 'framer-motion';
import {useLocale} from 'next-intl';

export default function CookiesPage() {
  const locale = useLocale();
  const isEn = locale === 'en';

  const lastUpdate = new Date().toLocaleDateString(isEn ? 'en-GB' : 'ro-RO');

  return (
    <section className="container-max py-12 md:py-16 prose prose-slate">
      <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}>
        <h1 className="text-4xl font-bold text-babyblue mb-6">
          {isEn ? 'Cookies Policy' : 'Politica privind fișierele Cookies'}
        </h1>

        {isEn ? (
          <>
            <p>
              The website <strong>savepays.com</strong> uses cookies to offer a better experience, for statistics
              and for essential functionality. By continuing to browse, you agree to their use according to this
              policy.
            </p>

            <h2>1. What are cookies?</h2>
            <p>
              Cookies are small text files stored in your browser when you access a website. They allow the device
              to be recognised and improve navigation.
            </p>

            <h2>2. Types of cookies used</h2>
            <ul>
              <li>
                <strong>Essential cookies</strong> – required for the platform to function.
              </li>
              <li>
                <strong>Analytics cookies</strong> – anonymous statistics (e.g. Google Analytics).
              </li>
              <li>
                <strong>Preference cookies</strong> – remember language and user preferences.
              </li>
            </ul>

            <h2>3. Managing cookies</h2>
            <p>
              You can control and delete cookies from your browser settings. Disabling them may affect the proper
              functioning of the site.
            </p>

            <h2>4. Third-party tools</h2>
            <p>
              SavePays may use services such as Google Analytics, Firebase or Meta Pixel for analytics and
              performance. These services may place their own cookies.
            </p>

            <h2>5. Contact</h2>
            <p>
              For details about how we use cookies, write to us at{' '}
              <a href="mailto:contact@savepays.com" className="text-babyblue">
                contact@savepays.com
              </a>
              .
            </p>
          </>
        ) : (
          <>
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
              <li>
                <strong>Cookie-uri esențiale</strong> – necesare pentru funcționarea platformei.
              </li>
              <li>
                <strong>Cookie-uri de analiză</strong> – pentru statistici anonime (ex: Google Analytics).
              </li>
              <li>
                <strong>Cookie-uri de preferință</strong> – salvează limba și preferințele utilizatorului.
              </li>
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
