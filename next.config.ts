import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "templatekit.kitprostudio.com",
      },
    ],
  },
};

export default nextConfig;
