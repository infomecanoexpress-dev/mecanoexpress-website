/** @type {import('next').NextConfig} */
const nextConfig = {
  // CRM interne (projet Vercel séparé : infomecanoexpress-dev/mecanoexpress-crm)
  // exposé sous www.mecanoexpress.ca/admin. Le CRM utilise basePath "/admin",
  // donc pages ET fichiers _next/static passent par ces deux règles.
  async rewrites() {
    return [
      { source: '/admin', destination: 'https://mecanoexpress-crm.vercel.app/admin' },
      { source: '/admin/:path*', destination: 'https://mecanoexpress-crm.vercel.app/admin/:path*' },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'customer-assets.emergentagent.com',
      },
    ],
  },
}

module.exports = nextConfig
