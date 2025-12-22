/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  assetPrefix: '',     // ✅ relative paths
  basePath: '',        // ✅ explicit, predictable

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;