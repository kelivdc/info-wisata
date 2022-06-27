/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  reactStrictMode: true,
}
const env = {
  server_api: process.env.SERVER_API
}
module.exports = {
  env: env,
  nextConfig,
  withBundleAnalyzer
}
