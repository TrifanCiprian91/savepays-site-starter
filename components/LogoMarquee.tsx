'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

type Logo = { name: string; src?: string; initials?: string }

const logos: Logo[] = [
  { name: 'RetailX', src: '/logos/retailx.svg', initials: 'RX' },
  { name: 'CityHall', src: '/logos/cityhall.svg', initials: 'CH' },
  { name: 'EventsGo', src: '/logos/eventsgo.svg', initials: 'EG' },
  { name: 'HealthPlus', src: '/logos/healthplus.svg', initials: 'HP' },
  { name: 'NGO Pack', src: '/logos/ngopack.svg', initials: 'NG' },
]

// dacă fișierul nu există, afisăm „pill”
function LogoItem({ l }: { l: Logo }) {
  return (
    <div className="opacity-80 hover:opacity-100 transition min-w-[96px] flex items-center justify-center">
      <div className="h-10 flex items-center">
        {/* încercăm imaginea; dacă dă eroare, ascundem și arătăm pill */}
        {l.src ? (
          <Image
            src={l.src}
            alt={l.name}
            width={120}
            height={40}
            className="h-10 w-auto"
            onError={(e) => ((e.currentTarget as any).style.display = 'none')}
          />
        ) : null}
        {/* pill fallback */}
        <div className="px-3 py-1 rounded-lg bg-white border border-gray-200 shadow-sm text-sm text-gray-700">
          {l.initials ?? l.name}
        </div>
      </div>
    </div>
  )
}

export default function LogoMarquee() {
  return (
    <div className="overflow-hidden py-6 bg-grayui rounded-2xl">
      <motion.div
        className="flex gap-10 items-center"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      >
        {[...logos, ...logos].map((l, i) => (
          <LogoItem key={l.name + i} l={l} />
        ))}
      </motion.div>
    </div>
  )
}
