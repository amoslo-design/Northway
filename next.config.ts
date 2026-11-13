import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.NORTHWAY_DIST_DIR || ".next",
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  async redirects() {
    return [
      { source: "/work", destination: "/case-studies", statusCode: 301 },
      { source: "/work/:slug", destination: "/case-studies/:slug", statusCode: 301 },
    ];
  },
};

export default nextConfig;
