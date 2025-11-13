// next.config.js  (ESM)
import createNextIntlPlugin from 'next-intl/plugin';

// ✅ indica explicit fișierul de request-config
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  reactStrictMode: true,
  images: {domains: []},
  experimental: {
    // mic hack care a redus false-pozitivele la unele setup-uri
    turbopack: {}
  }
};

export default withNextIntl(nextConfig);
