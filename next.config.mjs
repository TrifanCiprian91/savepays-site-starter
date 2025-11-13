// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // folosim `turbo`, nu `turbopack`, ca să fie compatibil cu next-intl
    turbo: {}
  },
  output: 'export',
  images: {
    unoptimized: true
  }
};

const withNextIntl = createNextIntlPlugin('./next-intl.config.ts');

export default withNextIntl(nextConfig);
