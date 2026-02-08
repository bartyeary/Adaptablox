/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // REQUIRED for GitHub Pages project sites
  assetPrefix: '',

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;