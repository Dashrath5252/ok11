/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: false, 
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Vercel-specific optimization
  experimental: {
    // Enable image optimization for static export
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = nextConfig
