/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  compiler: {
    // Enable styled-components support
    styledComponents: true,
  },
  // Performance optimizations
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
};

module.exports = nextConfig;
