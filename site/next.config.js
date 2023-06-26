/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Butt Kasm Registry',
    description: 'Butt s official workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://fabriciobuttbutt.github.io/kasm-registry/',
    contactUrl: 'https://github.com/fabriciobuttbutt/kasm-registry/issues',
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
