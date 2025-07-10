import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compress: false,
  optimization: {
    minimize: false
  }
};

export default nextConfig;
