const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          '**/.git/**',
          '**/.next/**',
          '**/_next/**',
          '**/node_modules/**',
          '**/faketown_demo/**',
          '**/integration/**',
          '**/multi-agent-marketplace/**',
          '**/servers/**',
        ],
      };
    }

    return config;
  },
};

module.exports = nextConfig;