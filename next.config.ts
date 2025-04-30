// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co", "images.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
        search: "",
      },
    ],
  },
};

module.exports = nextConfig;
