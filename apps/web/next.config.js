/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  experimental: {
    transpilePackages: ["ui"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/loginApi",
  //       destination:"http://43.200.191.39"
  //     }
  //   ]
  // }
};
module.exports = nextConfig;
