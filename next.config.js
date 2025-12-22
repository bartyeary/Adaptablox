/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },

  // 👇 THIS IS THE MISSING PIECE
  assetPrefix: '/',
};

module.exports = nextConfig;