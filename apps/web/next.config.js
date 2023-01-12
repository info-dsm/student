/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  experimental: {
    transpilePackages: ["ui"],
  },
};
module.exports = nextConfig;
