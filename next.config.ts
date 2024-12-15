import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "woozy-clam-99.convex.cloud",
        protocol: "https",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
