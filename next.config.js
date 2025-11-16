/** @type {import('next').NextConfig} */
const nextConfig = {
  
  experimental: {
    optimizePackageImports: ['framer-motion']
  },
  // IMPORTANT: pentru a nu bloca generarea statică
  reactStrictMode: true
};

export default nextConfig;