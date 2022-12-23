/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    transpilePackages: ["ui"],
  },
};
module.exports = nextConfig;
