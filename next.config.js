/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/Client_Portfolio' : '',
  assetPrefix: isProd ? '/Client_Portfolio/' : '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  compiler: {
    styledComponents: true,
  },
  // Performance optimizations
  productionBrowserSourceMaps: false,
  optimizeFonts: true,
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  trailingSlash: true,
};

module.exports = nextConfig;
