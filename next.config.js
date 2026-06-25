/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/((?!api).*)',
        headers: [
          { key: 'Content-Type', value: 'text/html; charset=utf-8' },
        ],
      },
    ]
  },
}
module.exports = nextConfig
