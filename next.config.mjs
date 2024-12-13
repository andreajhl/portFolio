import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': resolve(__dirname, 'src/components'),
      '@constants': resolve(__dirname, 'src/constants'),
      '@ui': resolve(__dirname, 'src/components/ui'),
      '@wordings': resolve(__dirname, 'src/wordings'),
      '@styles': resolve(__dirname, 'src/styles'),
    };

    config.resolve.extensions = ['.js', '.jsx'];

    return config;
  },
};

export default nextConfig;