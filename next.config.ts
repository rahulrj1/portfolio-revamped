import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // If deploying to a GitHub Project Page (e.g. username.github.io/repo-name),
  // uncomment the following line and replace '/repo-name' with your repository name:
  // basePath: '/personal-portfolio',
};

export default nextConfig;
