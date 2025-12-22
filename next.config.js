/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // GitHub Pages serves from /docs
  basePath: '',
  assetPrefix: '',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;