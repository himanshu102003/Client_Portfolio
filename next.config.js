/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repository = 'Client_Portfolio';
const basePath = isProd ? `/${repository}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  // Performance optimizations
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  generateEtags: true,
  compress: true,
  // Add trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
};

// For GitHub Pages, we need to handle the base path in the asset prefix
if (isProd) {
  nextConfig.assetPrefix = basePath ? `${basePath}/` : '';
  nextConfig.basePath = basePath;
}

module.exports = nextConfig;
