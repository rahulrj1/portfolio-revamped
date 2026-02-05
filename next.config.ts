import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For static export (e.g., GitHub Pages), use:
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
  // basePath: '/portfolio-revamped',
  // assetPrefix: '/portfolio-revamped/',

  // For Docker/local, comment above and use:
  output: 'standalone',
};

export default nextConfig;
