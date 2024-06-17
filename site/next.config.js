/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kodes Registry',
    description: 'My list of Kasm workspaces',
    icon: 'https://github.com/jdepew88/kasm-registry/blob/1.0/icon.png',
    listUrl: 'https://github.com/jdepew88/kasm-registry/',
    contactUrl: 'https://github.com/jdepew88/kasm-registry/issues',
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
