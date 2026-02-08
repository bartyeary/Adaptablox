/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/docs',
  assetPrefix: '/docs',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;