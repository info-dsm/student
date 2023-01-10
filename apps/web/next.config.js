/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    transpilePackages: ["ui"],
  },
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
