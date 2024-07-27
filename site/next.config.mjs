import { createContentlayerPlugin } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})
export default withContentlayer(nextConfig)
