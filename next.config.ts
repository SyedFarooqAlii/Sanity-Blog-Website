import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
      remotePatterns:[{
        protocol:"https",
        hostname:"cdn.sanity.io"
      }]// Add Sanity's CDN hostname here
    },
  
};

export default nextConfig;
