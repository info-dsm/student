/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  experimental: {
    transpilePackages: ["ui"],
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/company/signup/1",
        destination: "https://postcode.map.daum.net/:path*/",
      },
    ];
  },
};
module.exports = nextConfig;
