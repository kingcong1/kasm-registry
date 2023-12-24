/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'KingCong1 Registry',
    description: 'Personal workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://kingcong1.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
