import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '',
  images: {
    loader: "custom",
    loaderFile: "./src/lib/cloudinaryLoader.ts",
  },
};

export default nextConfig;