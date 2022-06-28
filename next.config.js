/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  reactStrictMode: true,
}
const env = {
  server_api: process.env.SERVER_API,
  SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
}
module.exports = {
  env: env,
  nextConfig,
  withBundleAnalyzer
}
