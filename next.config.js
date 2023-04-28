/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/athena-site',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
