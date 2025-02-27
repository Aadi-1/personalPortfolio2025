import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // Ensures Next.js exports as static files
  trailingSlash: true,
  images: {
    unoptimized: true, // Fixes image issues in static builds
  },
};

export default nextConfig;
