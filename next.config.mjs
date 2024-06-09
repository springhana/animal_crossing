/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dodo.ac', 'acnhcdn.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    X_API_KEY: process.env.X_API_KEY,
  },
};

export default nextConfig;
