/// <reference types="vitest" />

import { configDefaults, defineConfig } from 'vitest/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    // reporters: ['html']
    // exclude: [...configDefaults.exclude, 'apps/**']
    environment: 'jsdom',
    globals: true
  }
})
