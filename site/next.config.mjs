import { createContentlayerPlugin } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})
export default withContentlayer(nextConfig)
