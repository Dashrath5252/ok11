/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false, // ✅ Resize ON
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96],
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Build errors रोकेगा
  },
}

module.exports = nextConfig
