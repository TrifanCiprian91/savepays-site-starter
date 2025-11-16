'use client';

import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import {useTranslations} from 'next-intl';

export default function HomePage() {
  // fallback dacă ai nevoie în componente
  const t = useTranslations('home');

  return (
    <>
      <Hero />
      <Steps />
      <Features />
      <CTA />
    </>
  );
}