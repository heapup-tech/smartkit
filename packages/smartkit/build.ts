import { build, BuildOptions, context } from 'esbuild'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

const isWatch = process.argv.includes('--watch')

const executeBuild = async (buildOptions: BuildOptions) => {
  if (isWatch) {
    const buildContext = await context(buildOptions)
    await buildContext.watch()
    return
  }

  build(buildOptions)
    .then(() => {
      console.log('Build complete')
    })
    .catch(() => process.exit(1))
}

const buildOptions: BuildOptions = {
  banner: {
    js: '"use client";'
  },
  entryPoints: ['./src/index.ts'],
  outdir: 'dist',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  splitting: true,
  packages: 'external',
  plugins: [
    vanillaExtractPlugin({
      identifiers: 'short',
      processCss: async (css) => {
        const result = await postcss([autoprefixer]).process(css, {
          from: undefined
        })
        return result.css
      }
    })
  ]
}

executeBuild(buildOptions)
