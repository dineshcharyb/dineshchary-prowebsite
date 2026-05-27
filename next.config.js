/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Crucial for static export / Vercel compatibility of local optimized images
  },
}

module.exports = nextConfig
