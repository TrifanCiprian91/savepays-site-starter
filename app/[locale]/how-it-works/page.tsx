'use client';

import {motion} from 'framer-motion';
import {useLocale} from 'next-intl';

const fadeUp = {
  hidden: {opacity: 0, y: 30},
  show: {opacity: 1, y: 0, transition: {duration: 0.5}}
};

export default function HowItWorksPage() {
  const locale = useLocale();
  const isEn = locale === 'en';

  const steps = isEn
    ? [
        {n: 1, title: 'Unique QR', desc: 'The user shows their QR code in the app at checkout.'},
        {n: 2, title: 'Digital issuing', desc: 'The partner issues the receipt and SavePays stores it in your account.'},
        {n: 3, title: 'Digital signature', desc: 'The PDF is digitally signed by the merchant when you download it.'},
        {n: 4, title: 'History & AI', desc: 'Refills, warranties and smart recommendations.'}
      ]
    : [
        {n: 1, title: 'QR unic', desc: 'Utilizatorul arată codul QR din aplicație la casă.'},
        {n: 2, title: 'Emitere digitală', desc: 'Partenerul emite bonul, iar SavePays îl salvează în contul tău.'},
        {n: 3, title: 'Semnătură digitală', desc: 'PDF-ul se semnează digital de comerciant când îl descarci.'},
        {n: 4, title: 'Istoric & AI', desc: 'Refill-uri, garanții și recomandări inteligente.'}
      ];

  return (
    <section className="container-max py-16">
      {/* INTRO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          {isEn ? 'How ' : 'Cum '}
          {isEn ? 'SavePays works' : (
            <>
              funcționează <span className="text-babyblue">SavePays</span>
            </>
          )}
          {isEn && <span className="text-babyblue">SavePays</span>}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {isEn
            ? 'You show your unique code at partner merchants and receive the digital receipt in the app – digitally signed, archived and available anytime.'
            : 'Scanezi codul tău unic la parteneri și primești chitanța digitală în aplicație, semnată digital, arhivată și disponibilă oricând.'}
        </p>
      </motion.div>

      {/* TIMELINE */}
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.5}}
        className="overflow-x-auto pb-6"
      >
        <div className="min-w-[900px]">
          <div className="h-1 rounded-full bg-gray-200 mb-8" />
          <div className="grid grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, margin: '-80px'}}
                transition={{delay: i * 0.08, duration: 0.4}}
              >
                <div className="card text-center">
                  <div className="text-3xl font-bold text-babyblue mb-1">{s.n}</div>
                  <div className="font-semibold">{s.title}</div>
                  <div className="mt-2 text-gray-600 text-sm">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA FINAL */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="text-center mt-16"
      >
        <h2 className="text-2xl font-semibold">
          {isEn ? 'It’s simple. It’s fast. It’s SavePays.' : 'E simplu. E rapid. E SavePays.'}
        </h2>
        <p className="mt-2 text-gray-600">
          {isEn
            ? 'Try the pilot version or talk to our team about an integration.'
            : 'Încearcă versiunea pilot sau discută cu echipa noastră pentru integrare.'}
        </p>
        <a href="/contact" className="btn mt-4">
          {isEn ? 'Become a partner' : 'Devino partener'}
        </a>
      </motion.div>
    </section>
  );
}
