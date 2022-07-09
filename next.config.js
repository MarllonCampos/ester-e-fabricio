/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.kabum.com.br"],
  },
  env: {
    API_WEDDING: process.env.API_WEDDING
  }
}

module.exports = nextConfig
