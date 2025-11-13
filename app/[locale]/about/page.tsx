'use client';

import {motion} from 'framer-motion';
import {useLocale} from 'next-intl';

const fadeUp = {
  hidden: {opacity: 0, y: 30},
  show: {opacity: 1, y: 0, transition: {duration: 0.5}}
};

const stagger = {
  hidden: {},
  show: {transition: {staggerChildren: 0.1}}
};

export default function AboutPage() {
  const locale = useLocale();
  const isEn = locale === 'en';

  const values = isEn
    ? [
        {title: 'Innovation', text: 'We build Romanian tech for digital receipts.'},
        {title: 'Sustainability', text: 'We help reduce paper waste.'},
        {title: 'Transparency', text: 'Every receipt is verifiable and digitally signed.'},
        {title: 'Simplicity', text: 'Everything in a single, modern, intuitive app.'}
      ]
    : [
        {title: 'Inovație', text: 'Construim tehnologie românească pentru digitalizarea bonurilor.'},
        {title: 'Sustenabilitate', text: 'Contribuim la reducerea deșeurilor de hârtie.'},
        {title: 'Transparență', text: 'Fiecare chitanță e verificabilă și semnată digital.'},
        {title: 'Simplitate', text: 'Totul într-o aplicație unică, intuitivă și modernă.'}
      ];

  const milestones = isEn
    ? [
        {label: 'MVP completed', desc: 'SavePay app running on Android and iOS.', status: 'Done'},
        {label: 'NestJS backend', desc: 'Implemented with authentication.', status: 'Done'},
        {label: 'Google Wallet integration', desc: 'SavePay card with unique QR for users.', status: 'Done'},
        {label: 'Official website', desc: 'Launched.', status: 'Done'},
        {label: 'Digital signature for partners', desc: 'Active on receipt download.', status: 'Done'}
      ]
    : [
        {label: 'MVP finalizat', desc: 'Aplicația SavePay funcțională pe Android și iOS.', status: 'Finalizat'},
        {label: 'Backend NestJS', desc: 'Implementat cu autentificare.', status: 'Finalizat'},
        {label: 'Integrare Google Wallet', desc: 'Card SavePay cu cod QR unic pentru utilizatori.', status: 'Finalizat'},
        {label: 'Website oficial', desc: 'Lansat.', status: 'Finalizat'},
        {label: 'Semnătură digitală parteneri', desc: 'Activă la descărcarea chitanțelor.', status: 'Finalizat'}
      ];

  const future = isEn
    ? [
        {date: 'Q4 2025', goal: 'Public SavePay launch (pilot in retail and NGOs).', status: 'In progress'},
        {date: 'Q1 2026', goal: 'Full integration with e-Invoice and ANAF.', status: 'Planned'},
        {date: 'Q2 2026', goal: 'Loyalty & cashback module launch.', status: 'Planned'},
        {date: 'Q3 2026', goal: 'Public transport & healthcare integrations.', status: 'Planned'},
        {date: 'Q4 2026', goal: 'International expansion (SavePay white-label).', status: 'Future'}
      ]
    : [
        {date: 'Trim. IV 2025', goal: 'Lansare SavePay public (pilot în retail și ONG-uri).', status: 'În curs'},
        {date: 'Trim. I 2026', goal: 'Integrare completă cu e-Factura și ANAF.', status: 'Planificat'},
        {date: 'Trim. II 2026', goal: 'Lansare modul de fidelizare și cashback.', status: 'Planificat'},
        {date: 'Trim. III 2026', goal: 'Integrare transport public & servicii medicale.', status: 'Planificat'},
        {date: 'Trim. IV 2026', goal: 'Extindere internațională (white-label SavePay).', status: 'Viitor'}
      ];

  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="container-max py-16 space-y-16"
    >
      {/* HERO */}
      <motion.div variants={fadeUp} className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          {isEn ? 'About ' : 'Despre '}
          <span className="text-babyblue">SavePays</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {isEn
            ? 'SavePays is a Romanian app for digitalizing receipts and purchase documents. Each user has a unique QR code scanned by partners at checkout – the receipt appears instantly, organized and digitally signed.'
            : 'SavePays este o aplicație românească de digitalizare a chitanțelor și bonurilor de cumpărături. Fiecare utilizator are un cod QR unic, scanat de parteneri la plată — chitanța emisă apare instant, ordonată și semnată digital.'}
        </p>
      </motion.div>

      {/* VALORI */}
      <motion.div variants={fadeUp}>
        <h2 className="text-2xl font-semibold text-center mb-8">
          {isEn ? 'Our values' : 'Valorile noastre'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <motion.div
              key={v.title}
              whileHover={{y: -6, boxShadow: '0 16px 32px rgba(0,0,0,0.06)'}}
              className="card text-center"
            >
              <h3 className="font-semibold text-lg text-babyblue">{v.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* REALIZĂRI */}
      <motion.div variants={fadeUp}>
        <h2 className="text-2xl font-semibold text-center mb-8">
          {isEn ? 'Milestones' : 'Realizări'}
        </h2>
        <div className="space-y-4">
          {milestones.map((m) => (
            <motion.div
              key={m.label}
              initial={{opacity: 0, y: 10}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, margin: '-80px'}}
              className="card flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div>
                <div className="font-semibold">{m.label}</div>
                <div className="text-gray-600 text-sm">{m.desc}</div>
              </div>
              <span className="mt-2 md:mt-0 px-3 py-1 text-xs rounded-full bg-green-50 text-green-700 border border-green-200">
                {m.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* VIITOR */}
      <motion.div variants={fadeUp}>
        <h2 className="text-2xl font-semibold text-center mb-8">
          {isEn ? 'What’s next' : 'Ce urmează'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {future.map((f) => (
            <motion.div key={f.date} whileHover={{y: -4}} className="card flex flex-col">
              <div className="font-semibold text-babyblue">{f.date}</div>
              <div className="mt-1">{f.goal}</div>
              <div className="mt-2 text-sm text-gray-500">{f.status}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CONTACT */}
      <motion.div variants={fadeUp} className="text-center">
        <h2 className="text-2xl font-semibold mb-4">
          {isEn ? 'The SavePays team' : 'Echipa SavePays'}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {isEn ? (
            <>
              SavePays is developed by <strong>SC SIMPLE CEC SRL</strong> with the mission to bring receipts
              into the digital era.
              <br />
              📍 Ploiești, Romania
              <br />
              📧 contact@savepays.com
            </>
          ) : (
            <>
              SavePays este dezvoltat de <strong>SC SIMPLE CEC SRL</strong> cu misiunea de a aduce bonurile și
              chitanțele în era digitală.
              <br />
              📍 Ploiești, România
              <br />
              📧 contact@savepays.com
            </>
          )}
        </p>
      </motion.div>
    </motion.section>
  );
}
