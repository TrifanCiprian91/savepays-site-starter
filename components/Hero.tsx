'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import {Link} from '@/navigation';


export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, 60]) // parallax pe mockup

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-babyblue/10 to-white">
      <div className="container-max grid md:grid-cols-2 gap-12 items-center">
        {/* Col stânga: titlu + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bonurile tale, <span className="text-babyblue">digital</span>.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Scanezi, plătești și primești instant chitanța în aplicație — sigur, ordonat și eco.
          </p>

          <div className="mt-8 flex gap-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/partners" className="btn">Devino partener</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href="/how-it-works" className="btn-ghost">Cum funcționează</Link>
            </motion.div>
          </div>

          <div className="mt-6 flex gap-3">
            <img src="/appstore-badge.svg" alt="App Store" className="h-14" />
            <img src="/play-badge.svg" alt="Google Play" className="h-14" />
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Deja pregătit pentru comercianți, ONG-uri și evenimente.
          </div>
        </motion.div>

        {/* Col dreapta: mockup cu parallax */}
        <motion.div style={{ y }} className="relative">
          <div className="card p-3 md:p-4">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/mockup-app.png"
                alt="SavePays app mockup"
                width={900}
                height={1600}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
