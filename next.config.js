const { createSecureHeaders } = require("next-secure-headers");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.picsum.photos'],
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }];
  },
}

module.exports = nextConfig
