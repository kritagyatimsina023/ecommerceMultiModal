/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  //"images.remotePatterns
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
