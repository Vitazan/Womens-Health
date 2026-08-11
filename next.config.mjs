/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: the `eslint` option was removed in Next.js 16 along with `next lint`.
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig