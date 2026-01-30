import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio-revamped',
  assetPrefix: '/portfolio-revamped/',
};

export default nextConfig;
