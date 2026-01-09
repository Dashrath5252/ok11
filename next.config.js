/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [320, 420, 640, 768, 1024, 1200],
    imageSizes: [64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
