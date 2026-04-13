import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "templatekit.kitprostudio.com",
      },
      {
        protocol: "https",
        hostname: "assets.codepen.io",
      },
    ],
  },
};

export default nextConfig;
