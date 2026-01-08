/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ true करो (false से)
  },
}

module.exports = nextConfig
