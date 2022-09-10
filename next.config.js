/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  env:{
    customKey: 'customValue' // Will be available on both server and client
  },
  // basePath: '/dist', // for github pages
  compress: true, // gzip
  async redirects(){
    return [
      {
        source: '/hola', // from
        destination: '/hello', // or 'https://example.com' ,to
        permanent: true, // 301
      }
    ]
  },
  swcMinify: true, // https://nextjs.org/docs/advanced-features/source-maps
}

module.exports = nextConfig
