/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // GitHub Pages serves from /docs
  basePath: '/docs',
  assetPrefix: '/docs',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;