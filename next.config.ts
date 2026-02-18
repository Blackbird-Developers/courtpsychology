import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Docker/Cloud Run deployment
  output: "standalone",
  
  // Optimize for production
  poweredByHeader: false,
  
  // Image optimization config for Cloud Run
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
